import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import './appointment_list.css';


function Appointment_list() {
 
  //const appoints = useSelector(state => state.items);

  //const dispatch = useDispatch();
  const [points, setPoints] = useState(true);
  const [appoints, setAppoints] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost:5000/appoint/")
         .then(response => {
           if(response.data.length > 0){
             setAppoints(response.data);
            }else{
              setPoints(false);
            } })
          .catch(error => console.log("Error getting")); 
  },[appoints]);
 
  const deleteExercise = (i) =>{
    axios.delete('http://localhost:5000/appoint/'+i).then(response => { console.log(response.data)}).catch(error => console.log("error"));
  }            
            
    return (   
        <div>
          <h2 className='appointments-list-header'>Appointments !</h2> 
           {points? 
              <div className='box-list'> 
                  {appoints.map(item => (
                      <div className='appointments-list-details' key={item._id}>
                        <p className='a-l-d-name'><span className='span-a-l-d'>Name :</span>{item.name} </p>
                        <p className='a-l-d-date'><span className='span-a-l-d'>Date :</span>{item.date} </p>
                        <p className='a-l-d-email'><span className='span-a-l-d'>Email :</span> {item.email}</p>
                        <p className='a-l-d-time'><span className='span-a-l-d'>Time :</span>{item.time}</p>
                        <button onClick={() => deleteExercise(item._id)} >delete</button> 
                      </div> )) } 
               </div> :
                  <div>
              <h2 className='h2-no-app'>No appointments available.</h2>
              <Link className='link-no-app' to='/' ><span className='span-no-app'>Click here to book appointments.</span></Link>
                  </div>}
        </div>
    )
}
  
export default Appointment_list;
