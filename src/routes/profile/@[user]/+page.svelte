
<script lang="ts">
    import DogIcon from './DogIcon.svelte';

    let fullname = $state("John Snow");
    let username = $state("john");

    type Dog = {
        name: string;
        imageURL: string;
        dogPageURL: string;
    }

    let myDogs: Dog[] = [
        { name: "Joey1", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Gaute", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Oda", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Thomas", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Synne", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Emil", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
        { name: "Marvin Bagley III", imageURL: "/Tame_Wolf.webp", dogPageURL: ""},
    ]
</script>

<div class="container">
    <div class="userbox">
        <h2>{fullname}</h2>
        <h2>@{username}</h2>
    </div>
    <div class="content">
        <div class="content-controls">
            <button>History</button>
            <button>My dogs</button>
        </div>
        <div class="feed">
            {#each myDogs as dog}
                <DogIcon {...dog}/>
            {/each}
        </div>
    </div>
</div>



<style>
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 500px;

    }
    .content{
        background-color: white;
        width: 50%;
        height: 75%;
        padding: 10px;
        
    }
    .userbox{

    }
    .content-controls{
        display: flex;
        flex-direction: row;
    }
    .feed{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
        place-items: center;
        padding: 10px;
    }
</style>