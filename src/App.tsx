import React, { useEffect, useState } from "react";
import LogIn from "./login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Button, Divider, message } from "antd";
import Dashbord from "./dashbord";
import Loading from "./Loading";

async function LogOut() {
  await signOut(auth);
  message.success("Successfully Logged Out");
}

function App() {
  const [isLogIn, setStatus] = useState<boolean>();
  useEffect(function () {
    return onAuthStateChanged(auth, (user) => {
      setStatus(user != null);
      if (user) message.success(`Welcome ${user.email}`);
    });
  }, []);
  if (isLogIn == undefined) return <Loading />;
  return isLogIn ? (
    <>
      <Button
        block
        type="primary"
        style={{
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
          maxWidth: 200,
        }}
        onClick={LogOut}
      >
        LogOut
      </Button>
      <Divider />
      <Dashbord />
    </>
  ) : (
    <LogIn />
  );
}

export default App;
