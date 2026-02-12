<script>
    import { page } from '$app/state';
    import logo from '$lib/assets/logo.png';
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
        <!-- Light mode switch, search bar, ..., goes here -->
    </div>
</div>

<style>
    .navbar {
        padding: 0 32px 0 32px;
        background-color: white;
        box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2);
        display: grid;
        grid-template-columns: 200px 1fr 2fr;
        grid-template-rows: 64px;
    }

    .nav-logo {
        display: flex;
        align-items: center;
        max-height: 100%;
    }

    .nav-logo img {
        height: 72%;
        object-fit: contain;
    }

    .links {
        display: flex;
    }

    .menu {
        display: flex;
        flex-direction: row-reverse;
    }

    .links a {
        padding: 0 8px 0 8px;
        display: flex;
        align-items: center;
        text-decoration: none;
        box-sizing: border-box;
        color: black;
        border-bottom: 2px solid transparent;
    }

    .links a.active {
        color: brown;
        border-bottom: 2px solid brown;
    }
</style>
