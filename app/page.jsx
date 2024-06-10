"use client";
import AdminCard from "@/components/AdminCard";
import GuestCard from "@/components/GuestCard";
import UserCard from "@/components/UserCard";
import RoleBasedComponent from "@/components/shared/RoleBasedComponent";
import { useUser } from "@/lib/hooks/useUser";
import { permissions } from "@/lib/utilkit/permissions";

export default function Home() {
  const { user } = useUser();

  console.log(user, "context");
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <RoleBasedComponent
        component={AdminCard}
        allowedRoles={permissions.VIEW_ADMIN_PANEL}
      />
      <RoleBasedComponent
        component={UserCard}
        allowedRoles={permissions.VIEW_DASHBOARD}
      />
      <RoleBasedComponent
        component={GuestCard}
        allowedRoles={permissions.VIEW_GUEST_PAGE}
      />
    </main>
  );
}
