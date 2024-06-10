import { UserContext } from "@/provider/UserContext";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);
