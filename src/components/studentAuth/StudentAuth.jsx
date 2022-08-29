import axios from 'axios';
import React from 'react'
   
  // Form Handellers
  const StudentRegisterFormHandeller=async()=>{
    const res = await axios.post();
    console.log(res.data);
  }
 
  const StudentLoginFormHandeller=async()=>{
    const res = await axios.post();
    console.log(res.data);
  }
 
 
  const TeacherRegisterFormHandeller=async()=>{
    const res = await axios.post();
    console.log(res.data);
  }
 
  const TeacherLoginFormHandeller=async()=>{
    const res = await axios.post();
    console.log(res.data);
  }
 export const StudentRegister=()=>{
    return(
    <>
      <form>
        <input type="text"placeholder='Name' />
        <input type="text"placeholder='College Id' />
        <input type="email"placeholder='Email' />
        <input type="password"placeholder='Password' />
        <input type="password"placeholder='Confirm Password' />
        <button type="submit" onSubmit={StudentRegisterFormHandeller}>REGISTER</button>
      </form>
    </>
)
  }
export const TeacherRegister=()=>{
    return(
    <>
      <form>
        <input type="text"placeholder='Name' />
        <input type="text"placeholder='Teachers Id' />
        <input type="email"placeholder='Email' />
        <input type="password"placeholder='Password' />
        <input type="password"placeholder='Confirm Password' />
        <button type="submit" onSubmit={TeacherRegisterFormHandeller}>REGISTER</button>
      </form>
    </>
)
  }
 export const StudentLogin=()=>{
    return(
    <>
    <form>
        <input type="text"placeholder='College Id' />
        <input type="password"placeholder='Password' />
        <button type="submit" onSubmit={StudentLoginFormHandeller}>Login</button>
    </form> 
    <div className="forgetPassword">Forget Password ?</div>
    </>
)
  }
 export const TeacherLogin=()=>{
    return(
    <>
    <form>
        <input type="text"placeholder='Teachers Id' />
        <input type="password"placeholder='Password' />
        <button type="submit" onSubmit={TeacherLoginFormHandeller}>Login</button>
    </form>
    <div className="forgetPassword">Forget Password ?</div>
    </>
)
  }

