import { useState } from "react";
import "./RegisterForm.css";

function Teacher() {
  const [input, setInput] = useState({
    username:'',
    College_Id:"",
    email:"",
    password:"",
    cpassword:""
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  if (!input.username || !input.College_Id || !input.email || !input.password || !input.cpassword) {
    alert("please fill all the fields");
    return;
  } else if (input.password !== input.cpassword) {
    alert("password and confirm password must be same");
    return;
  }
  return (
    <>
      <div className="main">
        <form id="studentRegister" onSubmit={submitHandler} method="post">
          <img src="https://source.unsplash.com/random" />
          <div className="form">
            <h2>Teacher Registration Form</h2>
            <input
              className="input"
              type="text"
              name="name"
              value={input.name}
              onChange={changeHandler}
              placeholder="Name"
              required
            />
            <input
              className="input"
              type="text"
              name="id"
              value={input.id}
              onChange={changeHandler}
              placeholder="Teacher ID"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              value={input.email}
              onChange={changeHandler}
              placeholder="Email ID"
              required
            />
            <input
              className="input"
              type="password"
              name="password"
              value={input.password}
              onChange={changeHandler}
              placeholder="Password"
              required
            />
            <input
              className="input"
              type="password"
              name="password"
              value={input.cpassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              required
            />

            <input type="submit" value="TeacherRegister" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Teacher;
