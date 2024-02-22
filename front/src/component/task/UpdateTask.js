import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateTask(){ 
  
  const param=useParams();
  const [data,setData]=useState([]);
  const [comment,setComment]=useState([]);
  const [commentval,setCommentval]=useState('1px solid green');

  const fecth=()=>{
    fetch(process.env.REACT_APP_API_URL+'/getTask',{
      method : "POST",
      body : JSON.stringify({"taskId":param.id}),
      headers:{
          "Content-Type":"application/json"
      }
  })
  .then((response)=> response.json() )
  .then((data1)=>{
    
      setData(data1[0]);
      setComment(data1[0]['comment']);
      
  }).catch((err)=>{
      console.log(err);
  })
  }

  
  useEffect(()=>{
    fecth();

  },[]);

  const submitComment =()=>{
   if(commentval){
    const login=JSON.parse(localStorage.getItem('login'));
  
    fetch(process.env.REACT_APP_API_URL+'/updateTask',{
      method : "POST",
      body : JSON.stringify({
        "id":data["_id"],
        "comment":{
            "user_id":login['user_id'],
            "name":login['name'],
            "comment":commentval
        }
    }),
      headers:{
          "Content-Type":"application/json"
      }
  })
  .then((response)=> response.json() )
  .then((data)=>{
    fecth();
      //setData(data);
      
  }).catch((err)=>{
      console.log(err);
  })
   
   }
   else{
    alert('enter comment first');
   }
  }
  
      return (
        <div>
           <h1>Task Details</h1>
           <table id="customers">
            <thead>
              <tr>
                <th>User</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Assign Date</th>
                <th>Complete Date</th>
                <th>Status</th>

              </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.task_name}</td>
                <td>{data.task_desc}</td>
                <td>{data.assign_date}</td>
                <td>{data.complete_date}</td>
                <td>{data.status}</td>
              </tr> 
              
            </tbody>

           </table>

           <div class="commentsec">
            <h1>Leave a Comment on this post</h1>
        
              <div class="form-group row">
                <div class="col-sm-12">
                 <textarea class="form-control" placeholder="Your Comment*" name="comment" onChange={(e)=>setCommentval(e.target.value)} ></textarea>
                </div>

              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary customBtn" onClick={submitComment}>Submit</button>
                </div>
              </div>

                    <div class="commentList">
                    <div class="cmntrow">
        <div class="cmnavtar">
        </div>
        <div class="cmndesc">

        {comment.map((ele)=>{

         
       return <><div class="titlerow">
              <strong>{ele.name}</strong>

            </div><div class="smndetail">
                <p>{ele.comment} </p>
              </div></>

})} 

        </div>
        </div>

           
            </div>

        </div>
        </div>
      
        
        );

}
export default UpdateTask;
