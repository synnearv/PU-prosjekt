<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
    import DogIcon from './DogCard.svelte';

    import type { PageProps } from '../[slug]/$types';
	import type { Dog } from './+page.server';

    let { data }: PageProps = $props();
    let profile_edit_mode: boolean = $state(false);
    let user = $state(data.user);
    let dogs = $state(data.dogs);
    
    const empty_dog: Dog = { id: 0, owner_id: 0, name: "", breed: "",  born: "", avatar_url: "/uploads/dogs/pale_wolf.png" }
</script>

<div class="wrapper">
    <div class="content">
        <div class="user-section">
            <Avatar sourceImage={user?.avatar_url} size={100}/>
            <div class="userinfo">
                {#if profile_edit_mode === false}
                <div>{user?.first_name} {user?.last_name}</div>
                <div>{user?.username}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 -960 960 960" width="1.5em" fill="var(--color-text-primary)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                    {user?.email}
                </div>
                <button onclick={() => {profile_edit_mode = !profile_edit_mode}} class="button profile-button">Edit Profile</button>
                {:else}
                <label>First name: <input type="text" bind:value={user!.first_name}></label>
                <label>Last name: <input type="text" bind:value={user!.last_name}></label>
                <label>Username: <input type="text" bind:value={user!.username}></label>
                <label>Email: <input type="email" bind:value={user!.email}></label>
                <button onclick={() => {profile_edit_mode = !profile_edit_mode}} class="button profile-button">Save Profile</button>
                {/if}
            </div>
        </div>
        <div class="feed">
            {#each dogs as dog }
                <DogIcon name={dog.name} breed={dog.breed} born={dog.born} imageURL={dog.avatar_url} />
            {/each}
            <div class="center">
                <button onclick={() => { dogs.push(empty_dog)}} class="button add-button" aria-label="add">
                    <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="var(--color-text-primary)"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .content{
        width: 50%;
        height: 2000px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        
    }
    
    .user-section{
        padding: 32px;
        display: flex;
        gap: 32px;
        border-radius: 32px;
        border: 1px solid rgb(from var(--color-text-primary) r g b / 25%);
    }

    .userinfo {
        padding-left: 32px;
        border-left: 2px solid rgb(from var(--color-text-primary) r g b / 25%);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .profile-button {
        width: 100%;
    }

    .feed{
        padding: 64px 0 64px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        justify-content: center;
        gap: 64px;
        border-radius: 32px;
        border: 1px solid rgb(from var(--color-text-primary) r g b / 25%);
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-button {
        height: 96px;
        width: 96px;
        border-radius: 25%;
    }

    input {
        padding: 8px;
        border-radius: 4px;
        background-color: rgb(from var(--color-text-primary) r g b / 8%);
        border: 1px solid rgb(from var(--color-text-primary) r g b / 16%);
        color: var(--color-text-primary);
    }
</style>