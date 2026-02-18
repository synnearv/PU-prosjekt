package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
	"os"
	"path/filepath"
	"sort"
	"time"
)

func main() {
	// Pull the individual variables from the env
	user := os.Getenv("POSTGRES_USER")
	pass := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")
	host := "db" // The service name in docker-compose

	// Build the DSN string
	dsn := fmt.Sprintf("postgres://%s:%s@%s:5432/%s?sslmode=disable",
		user, pass, host, dbName)

	if dsn == "" {
		log.Fatal("DATABASE_URL not set in env")
	}

	secondsElapsed := 0
	var db *sql.DB
	var err error

	for {
		db, err = sql.Open("postgres", dsn)

		if err == nil && db.Ping() == nil {
			log.Println("Connected to Postgres")
			break
		}
		log.Printf("Searching - seconds elapsed: %d", secondsElapsed)
		log.Println(err)
		log.Println(db.Ping())
		time.Sleep(2 * time.Second)
		secondsElapsed += 2
	}
	initialize(db)
	watchdog(db)
}

func initialize(db *sql.DB) {
	sqlDir := "./sql/"

	files, err := os.ReadDir(sqlDir)
	if err != nil {
		log.Fatalf("Could not read sql folder: %v", err)
	}

	sort.Slice(files, func(i, j int) bool {
		return files[i].Name() < files[j].Name()
	})

	for _, file := range files {
		if filepath.Ext(file.Name()) == ".sql" {
			log.Printf("Applying: %s", file.Name())

			content, err := os.ReadFile(filepath.Join(sqlDir, file.Name()))
			if err != nil {
				log.Fatalf("Error reading %s: %v", file.Name(), err)
			}

			_, err = db.Exec(string(content))

			if err != nil {
				log.Fatalf("Error executing %s: %v", file.Name(), err)
			}
		}
	}
	log.Println("DB initialized successfully!")
}

func watchdog(db *sql.DB) {
	delay := 30
	log.Printf("Watchdog started - seconds delay: %d", delay)
	for {
		time.Sleep(30 * time.Second)

		if err := db.Ping(); err != nil {
			// TODO: recovery logic
			log.Printf("DB Connection lost: %v", err)
		}
	}
}
