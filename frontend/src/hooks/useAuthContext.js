import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("Use Auth Context must be inside context Provider");
    }

    return context;
}