"use client";

import AdminCard from "@/components/RoleBasedComponents/AdminCard";
import GuestCard from "@/components/RoleBasedComponents/GuestCard";
import UserCard from "@/components/RoleBasedComponents/UserCard";
import RoleBasedComponentDisplayer from "@/components/RoleBasedComponents/RoleBasedComponentDisplayer";
import { useUser } from "@/lib/hooks/useUser";
import { permissions } from "@/lib/permissionSpecifier/permissions";
import UserSelectField from "@/components/shared/UserSelectField";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <p className="font-bold text-xl">
        Please Select User Role to view the componens specified for that user
      </p>
      <UserSelectField />

      <p className="font-semibold ">
        Currently selected user :{" "}
        <span className="text-blue-600">{user.name}</span>
      </p>

      <div className="flex gap-10 w-full justify-center items-center">
        <RoleBasedComponentDisplayer
          component={AdminCard}
          allowedRoles={permissions.VIEW_ADMIN_PANEL}
        />
        <RoleBasedComponentDisplayer
          component={UserCard}
          allowedRoles={permissions.VIEW_DASHBOARD}
        />
        <RoleBasedComponentDisplayer
          component={GuestCard}
          allowedRoles={permissions.VIEW_GUEST_PAGE}
        />
      </div>
    </main>
  );
}
