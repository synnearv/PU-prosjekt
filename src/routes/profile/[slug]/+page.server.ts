import type { PageServerLoad } from "./$types";

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    hashed_password: string;
    avatar_url: string;
}

export interface Dog {
    id: number;
    owner_id: number;
    name: string;
    breed: string;
    born: string;
    avatar_url: string;
}

const users: User[] = [
    { id: 1, username: "Cenator", first_name: "John", last_name: "Cena", email: "johncena@gmail.com", hashed_password: "12341234", avatar_url: "/uploads/avatars/kevin_hart.jpg"},
];

const dogs: Dog[] = [
    { id: 1, owner_id: 1, name: "Tyrone", breed: "Wolf", born: "2026-02-18", avatar_url: "/uploads/dogs/tyrone.png" },
    { id: 2, owner_id: 1, name: "Jake", breed: "Wolf", born: "2026-02-18", avatar_url: "/uploads/dogs/striped_wolf.png" },
    { id: 2, owner_id: 1, name: "Anuc", breed: "Wolf", born: "2026-02-18", avatar_url: "/uploads/dogs/anuc_atittawan.png" },
    { id: 2, owner_id: 1, name: "Spitz", breed: "Wolf", born: "2026-02-18", avatar_url: "/uploads/dogs/spotted_wolf.png" },
    { id: 2, owner_id: 1, name: "Not a good boy", breed: "Wolf", born: "2026-02-18", avatar_url: "/uploads/dogs/angry_wolf.png" },
];

export const load: PageServerLoad = async ({ params }) => {
    return {
        user: users.find(u => u.id === Number(params.slug)),
        dogs: dogs,
    };
};
