import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login,resgister,logout,getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context
}