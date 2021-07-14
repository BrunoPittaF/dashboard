import { createContext, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

interface IUser {
  name: string;
  email: string;
  avatar_url: string;
}

interface ISignInData {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextAuth-token": token } = parseCookies();
    if (token) {
      recoverUserInformation().then((response) => setUser(response.user));
    }
  }, []);

  async function signIn({ email, password }: ISignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextAuth-token", token, {
      maxAge: 60 * 60 * 1, //1 hora
    });

    setUser(user);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
