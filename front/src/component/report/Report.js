import { useEffect,useState } from "react";
import Table from "./Table";
function Report(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/weeklyReport',{
            method : "POST",
            body : JSON.stringify({
                "fd": "2024-02-19 00:00:00",
                "td": "2024-02-25 23:59:00"
              }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=> response.json() )
        .then((data)=>{
            setData(data);
            
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div>
        <h1>Report</h1>
        <table id="customers">
            <thead>
                <th>Day</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Task Type</th>
                <th>Assign To</th>
                <th>Hours Budgeted</th>
                <th>Actual Hours</th>
            </thead>
            
            
            {data.map((data) => <Table brand={data} />)}
            
          
        </table>

        </div>
    )

}
export default Report;
