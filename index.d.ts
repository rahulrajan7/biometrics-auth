// User type
export type User = {
    id: string;
    email: string;
    currentChallenge: string;
    password: string;
};

// AuthenticatorType type
export type AuthenticatorType = {
    credentialID: Uint8Array | Array<any>;
    credentialPublicKey: Uint8Array | Array<any>;
    counter: string;
};

// singleUserAuthenticator type
export type SingleUserAuthenticator = {
    userId: string;
    authenticators: AuthenticatorType[];
};