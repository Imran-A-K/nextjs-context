"use client";
import { useUser } from "@/lib/hooks/useUser";

const RoleBasedComponentDisplayer = ({ allowedRoles = [], children }) => {
  const { user } = useUser();

  const hasAccess = allowedRoles.some((role) => user.role.includes(role));

  if (!hasAccess) return null;

  return <div className="flex gap-4 justify-center flex-wrap">{children}</div>;
};

export default RoleBasedComponentDisplayer;
