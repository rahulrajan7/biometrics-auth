import { createContext, PropsWithChildren, useState, useContext, useEffect } from "react";
import { AuthContextType, authStatus, User } from ".";
import axios from "axios";
import router, { useRouter } from "next/router";



const initialState: AuthContextType = {
    status: "loading",
    user: {
        email: "",
    },
    //empty
    async handleDeviceRegistration() {},

    //empty
    async handleDeviceAuthentication(email: string, useBrowserAutofill = false) {
        return false;
    },
    //empty
    async signup(email: string, password: string) {},
    async login(email: string, password: string) {},
    signOut() {},
};

const AuthCtx = createContext<AuthContextType>(initialState);

export const useAuth = () => useContext(AuthCtx);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    const [status, setStatus] = useState<authStatus>("loading");
    const [user, setUser] = useState<User | null>(null);

    const signup = async (email: string, password: string) => {
      try {
        const { data } = await axios.post(`/api/signup`, {
          email,
          password,
        });
        setUser({ email });
        router.push("/register-device");
      } catch (error) {
        console.log(error);
      }
    };
    const login = async (email: string, password: string) => {};

    const handleDeviceRegistration = async (username: string) => {
       return false
    };

    const handleDeviceAuthentication = async (username: string) => {
        return false;
    };
    const signOut = async () => {};

    return (
        <AuthCtx.Provider
            value={{
                status,
                user,
                handleDeviceRegistration,
                handleDeviceAuthentication,
                signOut,
                signup,
                login,
            }}
        >
            {children}
        </AuthCtx.Provider>
    );
};
export default AuthProvider;