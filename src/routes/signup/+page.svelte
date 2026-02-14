<div id="wrapper">
	<div id="image">
		<p>Replace text with image</p>
	</div>
	<div id="signup-info">
		<div id="logo-wrapper">
			<img id="logo" src="_assets/hot-dog-text-logo.png" alt="HOT DOG logo" />
		</div>

		<h2>Create Account</h2>
		<form>
			<div id="inputs">
				<div class="input-row">
					<input name="first-name" placeholder="First Name" required />
				</div>
				<div class="input-row">
					<input name="last-name" placeholder="Last Name" required />
				</div>
				<div class="input-row">
					<input type="email" name="email" placeholder="Email" required />
				</div>
				<div class="input-row">
					<input name="username" placeholder="Username" required />
				</div>
				<div class="input-row">
					<input name="password" placeholder="Password" required />
				</div>
				<div class="input-row">
					<input name="confirm-passowrd" placeholder="Confirm Password" required />
				</div>
			</div>
			<div id="terms-and-service">
				<input type="checkbox" id="checkbox" required />
				<label for="checkbox"> I agree to terms of service </label>
			</div>
			<button id="signup-button" type="submit"> Sign Up </button>
		</form>
        <p id="login"> Already have an account? <a id="login-link" class="hyperlinks" href="/login">Log in</a> </p> 

	</div>
</div>

<style>
	#image {
		display: flex;
		align-items: center;
        flex: 5;
	}

	#inputs {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.input-row {
		display: flex;
		align-items: center;
	}

	.input-row input {
		padding: 10px;
		width: 250px;
	}

	#wrapper {
		display: flex;
		height: 100vh;
	}

    #logo-wrapper {
        margin-top: 20px;
		width: 250px;
        padding-bottom: 0px;
	}
    
	#logo {
		max-width: 100%;
        height: auto;
        padding-bottom: 0px;
	}

	form {
		margin-top: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		margin-top: 20px;
		font-size: 25px;
		margin-bottom: 20px;
		font-weight: 100;
	}

	#signup-info {
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		place-items: center;
		background-color: rgb(243, 243, 243);
	}

	#terms-and-service {
		margin-top: 20px;
		margin-bottom: 0px;
	}

	#signup-button {
		margin-top: 5px;
		background-color: #ff77bb;
		color: white;
		border: solid black 0.5px;
		width: 200px;
		padding: 15px 10px;
		font-size: 15px;
		border-radius: 4px;
		border: 1px solid transparent;
		cursor: pointer;
	}

	#signup-button:hover {
		background-color: #fa59a9;
	}

	#signup-button:active {
		background-color: #fd3599;
	}

    .hyperlinks {
        color: #a51c2b;
        text-decoration: none;
    }

    .hyperlinks:hover {
        text-decoration: underline;
    }

    #login {
        margin-top: 20px;
        font-size: 14px;
    }

    #login-link {
        font-weight: bold;
    }
</style>
