<script lang="ts">
	import person from '$lib/assets/login/person.svg';
	import lock from '$lib/assets/login/lock.svg';
</script>

<div id="wrapper">
	<div id="image">
		<img alt="Dog running" src="images/dog_background.jpg" />
	</div>

	<div id="login-info">
		<img id="logo" alt="Hot Dog Logo" src="logo/hot-dog-logo.png" />

		<form>
			<div id="inputs">
				<div class="input-row">
					<img alt="Person icon " src={person} />
					<input name="username" placeholder="Email / Username" />
				</div>

				<div class="input-row">
					<img alt="Lock icon" src={lock} />
					<input name="password" placeholder="Password" />
				</div>
				<a class="hyperlinks" id="forgotpassword" href="forgotpassword">Forgot password?</a>
			</div>
			<button id="login-button" type="submit">Login</button>
		</form>
		<p id="signup">
			Don't have an account? <a id="signup-link" class="hyperlinks" href="/signup">Sign up</a>
		</p>
	</div>
</div>

<style>
	#logo {
		margin-top: 10px;
		width: 250px;
		height: 250px;
	}

	#image {
		flex: 5;
		overflow: hidden;
		position: relative;
	}

	#image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
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
		background: var(--color-surface);
		padding: 10px;
		width: 250px;
		border: var(--color-border) 1px solid;
		border-radius: 4px;
		background: var(--color-surface);
	}

	.input-row input:focus {
		outline: var(--color-text-secondary) 2px solid;
		border: var(--color-text-secondary) 1px solid;
		border-radius: 4px;
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
		color: var(--color-primary-hover);
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
		background-color: var(--color-background);
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
		background-color: var(--color-primary);
		color: white;
		border: solid var(--color-border) 0.5px;
	}

	#login-button:hover {
		background-color: var(--color-primary-hover);
	}

	#login-button:active {
		background-color: var(--color-primary-active);
	}
</style>
