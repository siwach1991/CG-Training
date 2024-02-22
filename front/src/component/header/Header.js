import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Header(){
    const  navigate=useNavigate();
    

const logout=()=>{
    alert('hi');
    localStorage.clear();
    navigate('/login');
}
    
   
    return (
        <div class="topnav" id="myTopnav" >
            {localStorage.getItem('login')===null || localStorage.getItem('login')==='' 
            ? 
            <><a href="#news"><Link to="/login">Login</Link></a>
            <a href="#news"><Link to="/register">Register</Link> </a>
            </> 
            :
            <>
            <a href="#home" className=""><Link to="/dashboard">Dashboard</Link></a>
            <a href="#home" className=""><Link to="/createtask">Create Task</Link></a>
            <a href="#home" className=""><Link to="/report">Report</Link></a>
            <a href="#home" className="" onClick={logout}><Link  >Logout</Link></a>
            </>  
            
    }

</div>
    )
}
export default Header;
