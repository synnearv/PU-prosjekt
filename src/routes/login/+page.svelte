
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
        <a class="hyperlinks" id="forgotpassword" href="forgotpassword">Forgot password?</a>
    </div>
    <button id="login-button" type="submit">Login</button>
    </form>
   <p id="signup"> Don't have an account? <a id="signup-link" class="hyperlinks" href="/signup">Sign up</a> </p> 
</div>
</div>


<style>
    #logo {
        margin-top: 10px;
        width: 250px;
        height: 250px;
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
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }

    .hyperlinks {
        color: #a51c2b;
        text-decoration: none;
    }

    .hyperlinks:hover {
        text-decoration: underline;
    }

    #forgotpassword {
        font-size: 13px;
        margin-top: -15px;
        margin-left: auto;
    }

    #signup {
        margin-top: 20px;
        font-size: 14px;
    }

    #signup-link {
        font-weight: bold;
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
    
    #login-button {
        margin-top: 50px;
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



