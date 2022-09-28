import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().max(15).required("Name is required"),
  email: yup.string().email().required(),
  DOB:yup.string().required(),
  address:yup.string().max(20).required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });


  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title"><h1>Sign Up</h1>
        <span className="info">
          <a data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-circle-info"></i>
          </a>
        </span>
      </div>


      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Instructions</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Name is required,must be within 15 characters<br/><br/>

              Email is required , must contain @gmail.com<br/><br/>

              Date Of Barth is required<br/><br/>

              address is required, must be within 20 characters<br/><br/>

              Password should have atlest 4 letters<br/><br/>

              Conform password should match the password<br/><br/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Got it</button>
            </div>
          </div>
        </div>
      </div>

      {/* <i class="fa-solid fa-circle-info"></i> */}
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>

          <input
            type="text"
            name="name"
            ref={register}
            placeholder="Name..."
          />
          <p> {errors.name?.message} </p>
          {/* <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            ref={register}
          />
          <p> {errors.lastName?.message} </p> */}
          <input
            type="text"
            name="email"
            placeholder="Email..."
            ref={register}
          />
          <p> {errors.email?.message} </p>
          <input
            type="date"
            placeholder="Date of Barth"
            name="DOB"
            ref={register}
          />
          <p> {errors.DOB?.message} </p>
          <input
            type="text"
            placeholder="Adderss"
            name="address"
            ref={register}
          />
          <p> {errors.address?.message} </p>
          {/* <input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p> */}
          <input
            type="password"
            name="password"
            placeholder="Password..."
            ref={register}
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            ref={register}
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
