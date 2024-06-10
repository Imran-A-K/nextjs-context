"use client";

import { useState } from "react";
import { UserContext } from "./UserContext";
import { guest } from "@/lib/permissionSpecifier/dummyUsers";

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(guest);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GlobalProvider;
