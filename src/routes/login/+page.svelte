<script>
    import { goto } from "$app/navigation";

    function handleRegisterClick() {
        goto('/signup');
    }

</script>

<div id="wrapper">
<div id="image">
    <p>Replace text with image</p>
</div>

<div id="login-info">
    <img id="logo" alt="Hot Dog Logo" src='/login/hot-dog-logo.png'/>

    <form>
    <div id="inputs">
        <div class="input-row">
            <img alt="Person icon " src='/login/person.svg' />
            <input
                name="username"
                placeholder="Email / Username"
            />
        </div>

        <div class="input-row">
            <img alt="Lock icon" src='/login/lock.svg' />
            <input
                name="password"
                placeholder="Password"
            />
        </div>
    </div>
    <button id="login-button" type="submit">Login</button>
    </form>
    <button id="register-button" type="button" onclick={handleRegisterClick}>Register</button>
    <a id="forgotpassword" href="forgotpassword">Forgot password</a>
</div>
</div>


<style>
    #logo {
        width: 300px;
        height: 300px;

    }

    #image {
        display: flex;
        align-items: center;
    }

    #inputs {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .input-row {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .input-row img {
        width: 30px;
        height: 30px;
    }

    .input-row input {
        padding: 10px;
        width: 250px;
    }

    #wrapper {
        display: flex;
        height: 100vh;
    }

    #image {
        flex: 5;
    }

    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    #forgotpassword {
        margin: 20px;
        text-decoration: none;
    }
    
    #forgotpassword:hover {
        text-decoration: underline;
    }

    #login-info {
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        place-items: center;
        background-color: rgb(243, 243, 243);
    }

    button {
        width: 200px;
        padding: 15px 10px;
        font-size: 15px;
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
    }

    #register-button {
        margin: 20px;
        background-color: (243, 243, 243);
        border: solid black 0.5px;
    }

    #register-button:hover {
        background-color: rgb(227, 227, 227);
    }

    #register-button:active {
        background-color: rgb(208, 208, 208);
    }
    
    #login-button {
        margin-top: 30px;
        background-color: #ff77bb;
        color: white;
        border: solid black 0.5px;
    }

    #login-button:hover {
        background-color: #fa59a9;
    }

    #login-button:active {
        background-color: #fd3599;
    }


</style>



