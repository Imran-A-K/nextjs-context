import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { systemUsers } from "@/lib/permissionSpecifier/dummyUsers";
import { useUser } from "@/lib/hooks/useUser";

export default function UserSelectField() {
  const { user, setUser } = useUser();
  return (
    <Select value={user} onValueChange={(user) => setUser(user)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Users" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {systemUsers.map((user) => (
            <SelectItem key={user.id} value={user}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
