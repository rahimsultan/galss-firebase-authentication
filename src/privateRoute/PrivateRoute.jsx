import { Navigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth()

    if(user){
        return children
    }
  return <Navigate to={'/login'}/>
}

export default PrivateRoute