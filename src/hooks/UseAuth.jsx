import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const useAuth = () => {
const name = useContext(authContext);
return name;
}

export default useAuth