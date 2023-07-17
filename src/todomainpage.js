import React, {useState , useEffect} from "react";
import Popup from './popuppage';
import Button from '@mui/material/Button';
import img1 from './images/Office.png';


function ToDo(){
  // const styles = {
  //   container: {
  //     backgroundImage: `url(${Office}) !important`,
  //   },
  // };
  const [isOpen,setIsOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [array,setArray] = useState([]);
  const [flag,setFlag] = useState(false);

//   const [onClose,setOnClose] = useState(false);
// const [functionCall,setFunctionCall] = useState(null);
  
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  
  const handleFunctionCall = (employeeName,workTitle,startDate,endDate) => {
    setFlag(true);
    const newArray = [...array, { employeeName, workTitle, startDate, endDate }];
    setArray(newArray);

    setEmployeeName(employeeName);
    setWorkTitle(workTitle);
    setStartDate(startDate);
    setEndDate(endDate);
   closePopup();
  }
  
        return(
          <div className={`${flag ? '' : 'bg'}`}>
       <h1 style={{ fontStyle: 'revert' }}>Employee Work Details</h1>
<div>
  {/* <img src={img1}  alt="dsvds"></img> */}
  <button className="empl" disabled>Employees</button><button className="plus-button" onClick={openPopup}>+</button>
  
  </div>
  {!flag ? (
  <div className="outer-box">
    <p>"Employee details are vital for any organization as they provide essential information about the individuals working within the company. Employee details typically include personal information such as full name,Work title,startDate,endDate."</p>
  </div>
  ) : ''}
     {flag ? (
      <table>
      <thead>
        <tr style={{background: '#ddd'}}>
      <th>Employee Name</th>
      <th>Work Title</th>
      <th>Start Date</th>
      <th>End Date</th>
      </tr>
      </thead>
      <tbody>
      {array.map((item, index) => (
          //  flag ? (
            <tr key={index} >
            <td>{item.employeeName}</td>
            <td>{item.workTitle}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
          </tr>
          //  ) : null
        
          ))}
      </tbody>
    </table>
     ) : <div></div>} 
    
     
        <Popup isOpen={isOpen}  functionCall={handleFunctionCall} onClose={ closePopup } />
     
      </div>
        );
}
export default ToDo;


