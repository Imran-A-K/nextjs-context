"use client";
import { useUser } from "@/lib/hooks/useUser";
import React from "react";

const RoleBasedComponentDisplayer = ({
  component: Component,
  allowedRoles = [],
  ...props
}) => {
  const { user } = useUser();

  const hasAccess = allowedRoles.some((role) => user.role.includes(role));

  if (!hasAccess) return null;

  return <Component {...props} />;
};

export default RoleBasedComponentDisplayer;
