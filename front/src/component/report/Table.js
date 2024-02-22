function Table(prop){
   // console.log(prop.brand);
let day=Object.keys(prop.brand);
    return(
      
      <tr key="1">
        <td>{day}</td>
        <td><ul>{prop.brand[day].map((item,i)=>{ return <li key={i}>{item.task_name}</li> })}</ul></td>
        <td><ul>{prop.brand[day].map((item,i)=>{ return <li key={i}>{item.status}</li> })}</ul></td>
        <td>1/8</td>
        <td>5/8</td>
        <td><ul>{prop.brand[day].map((item,i)=>{ return <li key={i}>{item.name}</li> })}</ul></td>
        <td>2</td>
        <td>8</td>
        </tr>
     
    )
  };
  

  
  export default  Table ;