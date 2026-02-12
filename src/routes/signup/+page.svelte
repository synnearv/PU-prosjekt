<script lang="ts">
	let password = $state<string>("");
	let passwordMessage = $state<string>("Password must include: ");
	let type = $state<string>("password");

	const upperCaseLetterRegEx: RegExp = /.*?[A-Z]/;
	const lowerCaseLetterRegEx: RegExp = /.*?[a-z]/;
	const digitRegEx: RegExp = /.*?[0-9]/;
	const specialCharacterRegEx: RegExp = /.*?[#?!@$%&*-]/;
	const enoughCharactersRegEx: RegExp = /.{8,}/;

	let missingPasswordRequirements = $state<string[]>([]);
	const missingUpperCaseLetter: string = "an uppercase letter (A-Z)";
	const missingLowerCaseLetter: string = "a lowercase letter (a-z)";
	const missingDigit: string = "a digit (0-9)";
	const missingSpecialCharacter: string = "a special character (#?!@$%&*-)";
	const missingEnoughCharacters: string = "at least 8 characters";

	let isMissingPasswordRequirements = $derived<boolean>(password !== "" && missingPasswordRequirements.length > 0);

	const validatePassword = () => {
		missingPasswordRequirements = [];
		passwordMessage = "Password must include: ";
		if (!upperCaseLetterRegEx.test(password)) {
			missingPasswordRequirements.push(missingUpperCaseLetter)
		}	
		if (!lowerCaseLetterRegEx.test(password)) {
			missingPasswordRequirements.push(missingLowerCaseLetter)
		}
		if (!digitRegEx.test(password)) {
			missingPasswordRequirements.push(missingDigit)
		}
		if (!specialCharacterRegEx.test(password)) {
			missingPasswordRequirements.push(missingSpecialCharacter)
		}
		if (!enoughCharactersRegEx.test(password)) {
			missingPasswordRequirements.push(missingEnoughCharacters)
		}

		passwordMessage = passwordMessage + missingPasswordRequirements.join(", ")
	}

	const changePasswordVisibility = () => {
		if (type === "password") {
			type = "text";
		} else {
			type = "password"; 	
		}
	}
</script>
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
				<div class="input-row input-row-password">
					<input id="password-input" type={type} class:unvalid-password ={isMissingPasswordRequirements} name="password" placeholder="Password" required bind:value={password} oninput={validatePassword} />
					<button tabindex="-1" type="button" id="eye-icons-wrapper" onclick={changePasswordVisibility}>
						{#if type==="password"}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=var(--color-border-grey) class="eye-icon">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
						</svg>
						{:else}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=var(--color-border-grey) class="eye-icon">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						{/if}
					</button>
				</div>
				<div id="password-message-area">	
					{#if isMissingPasswordRequirements}
							<p id="password-message">{passwordMessage}</p>
					{/if}
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
	:root {
		--color-text-logo: #a51c2b;
		--color-background: rgb(243, 243, 243);
		--color-border-grey:  #767676;
		--color-error: red;
		--color-hot-pink: #ff77bb;
		--color-hot-pink-hover: #fa59a9;
		--color-hot-pink-active: #fa59a9;
		/* --color-background: #f7f8fa; */
		--color-surface: #ffff;
		--color_text_primary: #1f2937;
		--color-primary: #e982b5;
		--color-primary_active: #d13576;
		--color-text_muted: #9ca3af;
		--color-border: #d1d5db;
 
		
	}
	#image {
		display: flex;
		align-items: center;
        flex: 5;
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
		background-color: var(--color-background);
	}

	#inputs {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 270px;
	}

	.input-row {
		display: flex;
		align-items: center;
	}

	.input-row input {
		padding: 10px;
		width: 250px;
		border: var(--color-border-grey) 1px solid; 
		border-radius: 4px;
	 }

	.input-row input:focus {
		outline: var(--color-text-logo) 2px solid; 
		border: var(--color-text-logo) 1px solid; 
		border-radius: 4px;
	}

	#password-input {
		padding-right: 35px;
	}

	.input-row-password {
		position: relative;
	}

	#eye-icons-wrapper {
		position: absolute;
		top: 6px;
		right: 6px;
		padding: 0;
		background-color: transparent;
		border: none;
		outline: none;
	}

	.eye-icon {
		height: 25px;
		width: 25px;
	}

	.input-row input.unvalid-password {
		border: var(--color-error) 1px solid; 
	}

	.input-row input.unvalid-password:focus {
		outline: var(--color-error) 2px solid; 
		border: var(--color-error) 1px solid; 
	}

	#password-message-area{
		margin-top: -5px;
		height: 45px;
		padding: 0px;
	}

	#password-message {
		margin: 0px;
		font-size: 10px;
		color: var(--color-error);
	}

	#terms-and-service {
		margin-top: 20px;
		margin-bottom: 0px;
	}

	#signup-button {
		margin-top: 5px;
		background-color: var(--color-hot-pink);
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
		background-color: var(--color-hot-pink-hover);
	}

	#signup-button:active {
		background-color: var(--color-hot-pink-active);
	}

    .hyperlinks {
        color: var(--color-text-logo);
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
