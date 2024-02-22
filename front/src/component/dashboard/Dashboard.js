import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function Dashboard(){
    const navigate=useNavigate();
    const [todo,setTodo]=useState([]);
    const [yetTostart,setyetTostart]=useState([]);
    const [inProgress,setinProgress]=useState([]);
    const [inHold,setinHold]=useState([]);
    const [completed,setcompleted]=useState([]);

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/dashboard')
        .then((response)=> response.json() )
        .then((data)=>{
            setTodo(data[0]['To-do']);
            setyetTostart(data[1]['Yet To Start']);
            setinProgress(data[2]['In-Progress']);
            setinHold(data[3]['On-Hold']);
            setcompleted(data[4]['Completed']);

            
        }).catch((err)=>{
            console.log(err);
        })

    },[]);

    const updateTask= (id)=>{
        navigate('/update/'+id);
    }



    
    return(
        <div>
        <h1>Dashboard</h1>
        <div className="grid-container"> 

            <div className="to-do"><h1>To do </h1>
            {todo.map((ele)=>{ return <div className="newtodo" onClick={()=>updateTask(ele._id)}> 
            <ul>
    
                <li>{ele.task_name}</li>
                <li>{ele.status}</li>
                <li>{moment(ele.assign_date).format('MM/DD/YYYY')}</li>
                </ul>
                </div>
             })}
             </div>

            <div className="yet-to-start"><h1> Yet To Start</h1>
            
            {yetTostart.map((ele)=>{ return <div className="newyet-to-start"  onClick={()=>updateTask(ele._id)}> 
            <ul>
                <li>{ele.task_name}</li>
                <li>{ele.status}</li>
                <li>{moment(ele.assign_date).format('MM/DD/YYYY')}</li>
                </ul>
                </div>
             })}
            
            </div>

            <div className="in-progress"><h1>In-Progress</h1>

            {inProgress.map((ele)=>{ return <div className="newin-progress" onClick={()=>updateTask(ele._id)}> 
            <ul>
                <li>{ele.task_name}</li>
                <li>{ele.status}</li>
                <li>{moment(moment(ele.assign_date).format('MM/DD/YYYY')).format('MM/DD/YYYY')}</li>
                </ul>
                </div>
             })}

            </div>

            <div className="on-hold"><h1>On-Hold</h1>

            {inHold.map((ele)=>{ return <div className="newon-hold" onClick={()=>updateTask(ele._id)}> 
            <ul>
                <li>{ele.task_name}</li>
                <li>{ele.status}</li>
                <li>{moment(ele.assign_date).format('MM/DD/YYYY')}</li>
                </ul>
                </div>
             })}


            </div>


            <div className="completed"><h1>completed</h1>
            {completed.map((ele)=>{ return <div className="newcompleted" onClick={()=>updateTask(ele._id)}> 
            <ul>
                <li>{ele.task_name}</li>
                <li>{ele.status}</li>
                <li>{moment(ele.assign_date).format('MM/DD/YYYY')}</li>
                </ul>
                </div>
             })}

            
            </div>
            
    </div>
    </div>

    )
}
export default Dashboard;

