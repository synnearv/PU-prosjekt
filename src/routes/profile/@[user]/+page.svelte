
<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
    import DogIcon from './DogIcon.svelte';

    import type { PageProps } from './$types';
    let { data }: PageProps = $props();

    let fullname = $state("John Snow");
    let username = $state("john");

    let my_dogs = data.my_dogs;
</script>

<div class="wrapper">
    <div class="content">
        <div class="user-section">
            <Avatar sourceImage={'/uploads/avatars/jarvis.jpg'} size={100}/>
            <div class="userbox">
                <h2>{fullname}</h2>
                <h2>@{username}</h2>
            </div>
        </div>
        <div class="feed">
            {#each data.my_dogs as dog }
                <DogIcon name={dog.name} breed={dog.breed} imageURL={dog.avatar_url} dogPageURL="" />
            {/each}
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
        background-color: rgb(from var(--font-color) r g b / 8%);
        
    }
    
    .user-section{
        display: flex;
        gap: 32px;
    }

    .content-controls{
        padding-top: 100px;
        display: flex;
        flex-direction: row;
    }

    .feed{
        padding-top: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        justify-content: center;
        gap: 64px;
    }
</style>