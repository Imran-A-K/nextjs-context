"use client";
import { useUser } from "@/lib/hooks/useUser";
import { roles } from "@/lib/utilkit/permissions";
import React from "react";

const RoleBasedComponent = ({
  component: Component,
  allowedRoles,
  ...props
}) => {
  const { user } = useUser();

  const hasAccess = allowedRoles.some((role) => user.role.includes(role));

  if (!hasAccess) {
    return null;
  }

  return <Component {...props} />;
};

export default RoleBasedComponent;
