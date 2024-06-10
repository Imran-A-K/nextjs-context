"use client";

import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { admin, guest, user } from "@/lib/utilkit/dummyUser";

const GlobalProvider = ({ children }) => {
  //   const systemUser = user;
  //   const systemUser = admin;
  const systemUser = guest;

  return (
    <UserContext.Provider
      value={{
        user: systemUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GlobalProvider;
