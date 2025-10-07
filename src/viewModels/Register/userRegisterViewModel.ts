import { useState } from "react";

export function userRegisterViewModel() {
  const [userData, setUserData] = useState({
    name: "Keventon",
  });

  return {
    userData,
    setUserData,
  };
}
