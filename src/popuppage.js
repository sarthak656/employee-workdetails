import React, { useState } from 'react';
import './popupstyles.css';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Popup({isOpen,onClose,functionCall}){
  
const [employeeName, setEmployeeName] = useState('Employee1');
const [workTitle, setWorkTitle]= useState('');
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) =>{
   e.preventDefault();
   
   const [syear,smonth,sdate] = startDate.split("-");
   const [eyear,emonth,edate] = endDate.split("-");
    if(syear<=eyear){
      if(syear == eyear && smonth <= emonth){
        if(sdate <= edate){
        functionCall(employeeName,workTitle,startDate,endDate);
        }
        else {
          toast.error('Enter Date properly');
        }
      }
      else if(syear <eyear && smonth > emonth){
        functionCall(employeeName,workTitle,startDate,endDate);
      }
      else if(syear < eyear && smonth < emonth){
        functionCall(employeeName,workTitle,startDate,endDate);
      }
      else {
        toast.error('Enter Date properly');
      }
    }
    else {
      toast.error('Enter Date properly');
    }
}
    return (
      <div>
          <ToastContainer />

      <Dialog open={isOpen} close={onClose} PaperProps={{style:{ width: '600px', height: '400px',background: '#f1f1f1'}}} className='dialogbox'>
     
            <DialogTitle className='dialogtitle'>EmployeeTask</DialogTitle>     
         <DialogContent>
      <form onSubmit={(e) => handleSubmit(e)}>
      <label style={{color: '#333333'}}>Employee Name</label>
      <select style={{width: '455px', height: '40px',fontSize:'16px'}} onChange={(e) => setEmployeeName(e.target.value)}>
    <option>Employee1</option>
    <option>Employee2</option>
    <option>Employee3</option>
    <option>Employee4</option>
    <option>Employee5</option>
    </select><br /><br />
        {/* <label style={{color: 'purple'}}>Employee Name</label><br />
        <input type="text" className='input' required /><br /><br /> */}
     <label style={{color: '#333333'}}>Work Title</label><br />
      <input type="text"  className='input'  onChange={(e) => setWorkTitle(e.target.value)} required/>
    <br />
    <label style={{color: '#333333'}}>Start Date</label><label style={{color: '#333333',marginLeft:'240px'}}>End  Date</label><br />
    <input type="date" className='startdate'  onChange={(e) => setStartDate(e.target.value)}  required />
    <input type="date" className='enddate'  onChange={(e) => setEndDate(e.target.value)} required /><br />

    {/* <select style={{width: '455px', height: '40px',fontSize:'16px'}}>
    <option>Incomplete</option>
    <option>Complete</option>
    </select><br /> */}
    <button style={{fontSize: '15px',marginTop: '30px',backgroundColor:'#2A6BA5',color:'white',padding:'5px'}} type="submit">Add Task</button>
    </form>
   </DialogContent> 
{/* <div>title</div> */}
          <Button className="close-button" onClick={onClose}>
            Close
          </Button>
    
        </Dialog> 
    
        </div>
      );
}

export default Popup;