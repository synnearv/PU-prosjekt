import type { Dog } from "$lib/server/schema";
import type { PageLoad } from "./$types";

const my_dogs: Dog[] = [
    { id: 1, owner_id: 1, name: "Tyrone", breed: "Wolf", avatar_url: "/uploads/dogs/tyrone.png" },
    { id: 2, owner_id: 1, name: "Jake", breed: "Wolf", avatar_url: "/uploads/dogs/striped_wolf.png" },
    { id: 2, owner_id: 1, name: "Anuc", breed: "Wolf", avatar_url: "/uploads/dogs/anuc_atittawan.png" },
    { id: 2, owner_id: 1, name: "Spitz", breed: "Wolf", avatar_url: "/uploads/dogs/spotted_wolf.png" },
    { id: 2, owner_id: 1, name: "Not a good boy", breed: "Wolf", avatar_url: "/uploads/dogs/angry_wolf.png" },
];

export const load: PageLoad = ({ params }) => {
    return {
        my_dogs
    }
}
