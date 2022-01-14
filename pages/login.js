import { GoogleLoginResponse, useGoogleLogin } from "react-google-login";
import {useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [accessToken,setAccessToken] = useState(null);

  const { signIn, loaded } = useGoogleLogin({
    clientId: `185193866210-4lf0g7up2gskph2r7affa4a08g3cujf1.apps.googleusercontent.com`,
    isSignedIn: false,
    uxMode: "popup",
    scope: "profile email",
    accessType: "online",
    responseType: "token",

    onAutoLoadFinished: () => {
      var finished = "onAutoLoadFinished";
    },
    onSuccess: async (loginResponse) => {
      localStorage.setItem("test_token",loginResponse.accessToken);
      setAccessToken(loginResponse.accessToken);
      router.push(router.query.from ? decodeURIComponent(router.query.from) : '/');
    },
    onFailure: (error) => {
      // console.log("onFailure", error);
      if (error.error === "idpiframe_initialization_failed") {
        console.log(error);
      }
    },
  });


  const signOut = () => {
    localStorage.removeItem('test_token');
    router.push("/");
  }

  return (
    <div>
      <h1>This is login Page</h1>
      <a onClick={signIn} className={styles.button}>
        Login
      </a>
      <br />
      <a onClick={signOut} className={styles.button}>
        LogOut
      </a>
    </div>
  );
}

export default LoginPage;