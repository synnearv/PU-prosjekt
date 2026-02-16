export interface Competition {
  id: number;
  name: string;
  image_url: string;
  address: string;
  city: string;
  country: string;
  event_start: Date;
  event_end: Date;
}

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
