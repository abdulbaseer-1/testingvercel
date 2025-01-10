import React, { useState } from 'react';
import './RecoveryPhone.css'
const RecoveryPhone = () => {
    const [action,setAction] = useState("Recovery Phone");
  return (
    <div className='container'>
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
        <div className="inputs">
                <div className="input">
                    <h4>Recovery Phone</h4>
                    <input type="number" placeholder='Phone...' />
                </div>
            <div className="input">
                    <h4>Email</h4>
                    <input type="email" placeholder='Email...' />
                </div>
        </div>
        <div className="submit-container">
            <div className="Recovery-Phone" onClick={()=>{setAction("Recovery Phone")}}>Recovery Phone</div>
        </div>
</div>
  );
}

export default RecoveryPhone