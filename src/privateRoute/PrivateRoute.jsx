import { Navigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import useAuth from "../hooks/UseAuth";



const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <div className="flex justify-center items-center h-[50vh]">
            <BarLoader
            color="#d63666"
            height={20}
            width={250}
            />
        </div>
    }

    if(user){
        return children
    }
  return <Navigate to={'/login'}/>
}

export default PrivateRoute