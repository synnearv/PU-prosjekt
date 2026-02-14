<script>
    import { page } from '$app/state';
    import logo from '$lib/assets/logo.png';
	import LightSwitch from '$lib/components/ThemeSwitch.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<div class="navbar">
    <a class="nav-logo" href="/">
        <img src={logo} alt="Hot Dog Logo">
    </a>
    <div class="links">
        <a href="/" class:active={page.url.pathname === '/'}>Home</a>
        {#if page.data.user}
            <!-- <a href="/profile" class:active={page.url.pathname === '/profile'}>My profile</a>
            <a href="/settings" class:active={page.url.pathname === '/settings'}>Settings</a> -->
        {:else}
            <a href="/login" class:active={page.url.pathname === '/login'}>Log in</a>
            <a href="/signup" class:active={page.url.pathname === '/signup'}>Sign up</a>
        {/if}

    </div>
    <div class="menu">
        <div class="menu-search-bar">
            <SearchBar />
        </div>
        <div class="menu-button">
            <LightSwitch />
        </div>
    </div>
</div>

<style>
    .navbar {
        padding: 0 32px 0 32px;
        display: grid;
        grid-template-columns: 200px 1fr 2fr;
        grid-template-rows: 60px;
        box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--nav-color);
    }

    .nav-logo {
        max-height: 100%;
        display: flex;
        align-items: center;
    }

    .nav-logo img {
        height: 72%;
        object-fit: contain;
    }

    .links {
        display: flex;
    }

    .links a {
        padding: 0 8px 0 8px;
        display: flex;
        align-items: center;
        text-decoration: none;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        color: var(--font-color);
    }

    .links a:hover {
        border-bottom: 2px solid rgb(from var(--font-color) r g b / 8%);
    }

    .links a.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }

    .menu {
        display: flex;
        align-items: center;
        margin-left: auto;
        gap: 8px;
    }

    .menu-button {
        height: 48px;
        width: 48px;
    }

    .menu-search-bar {
        height: 32px;
        width: 256px;
    }
</style>
