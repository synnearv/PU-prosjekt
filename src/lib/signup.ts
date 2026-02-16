export type PasswordRegEx = {
    upperCaseLetter: RegExp;
    lowerCaseLetter: RegExp;
    digit: RegExp;
    specialCharacters: RegExp;
    enoughCharacters: RegExp;
};

export type MissingRequirementsMessage = {
    upperCaseLetter: string;
    lowerCaseLetter: string;
    digit: string;
    specialCharacters: string;
    enoughCharacters: string;
};

export const PASSWORD_REGEX: PasswordRegEx = {
    upperCaseLetter: /.*?[A-Z]/,   
    lowerCaseLetter: /.*?[a-z]/,
    digit: /.*?[0-9]/,
    specialCharacters: /.*?[#?!@$%&*-]/,
    enoughCharacters: /.{8,}/,
};

export const MISSING_PASSWORD_REQUIREMENTS: MissingRequirementsMessage = {
    upperCaseLetter: "an uppercase letter (A-Z)",
    lowerCaseLetter: "a lowercase letter (a-z)",
    digit: "a digit (0-9)",
    specialCharacters: "a special character (#?!@$%&*-)",
    enoughCharacters: "at least 8 characters",
};

export const validatePassword = (password:string, missingPasswordRequirements: string[]) => {
		if (!PASSWORD_REGEX.upperCaseLetter.test(password)) {
			missingPasswordRequirements.push(MISSING_PASSWORD_REQUIREMENTS.upperCaseLetter);
		}	
		if (!PASSWORD_REGEX.lowerCaseLetter.test(password)) {
			missingPasswordRequirements.push(MISSING_PASSWORD_REQUIREMENTS.lowerCaseLetter);
		}
		if (!PASSWORD_REGEX.digit.test(password)) {
			missingPasswordRequirements.push(MISSING_PASSWORD_REQUIREMENTS.digit);
		}
		if (!PASSWORD_REGEX.specialCharacters.test(password)) {
			missingPasswordRequirements.push(MISSING_PASSWORD_REQUIREMENTS.specialCharacters);
		}
		if (!PASSWORD_REGEX.enoughCharacters.test(password)) {
			missingPasswordRequirements.push(MISSING_PASSWORD_REQUIREMENTS.enoughCharacters);
		}

		return missingPasswordRequirements.join(", ");
	}   
