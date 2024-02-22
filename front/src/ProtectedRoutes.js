import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props){
    const login =localStorage.getItem('login');
    const navigate = useNavigate();
    useEffect(()=>{
        if(!login){
            navigate('/login');
        }

    });
 
    return(
        <div>
            <props.component/>
        </div>
    )

}
export default ProtectedRoutes;
