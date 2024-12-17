import React, { useState } from "react";
import { useRef } from "react";
function Signup() {
  let firstInputRef = useRef();
  let lastInputRef = useRef();
  let maleRef = useRef();
  let femaleRef = useRef();
  let singleRef = useRef();
  let MarriedRef = useRef();

  let [profilePic,setProfilePic]=useState("./images/profile.png");
  // let genderStatus="";
  let status = "";
  let languagesKnown = {
    telugu: false,
    english: false,
    hindi: false,
  };

  function genderAndMartialStatus() {
    if (maleRef.current.checked == true) {
      status = "Mr";
      if (singleRef.current.checked == false) {
        status = "mrs";
      }
    } else {
      status = "miss";
      if (MarriedRef.current.checked == true) {
        status = "mrs";
      }
    }
  }

  return (
    <>
      <div className="signup-mainDiv">
        <form className="Signup-form">
          <div className="signup-div">
            <label className="signup-label">First Name </label>
            <input
              className="signup-input"
              placeholder="First Name"
              ref={firstInputRef}
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">Last Name </label>
            <input
              className="signup-input"
              placeholder="Last Name"
              ref={lastInputRef}
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">Date Of Birth </label>
            <input className="signup-input" placeholder="DD-MM-YYYY" />
          </div>
          <div className="signup-div">
            <label  className="signup-label">Gender </label>
            <input
              
              type="radio"
              name="gender"
              ref={maleRef}
            />
            <label className="gender-radio">Male</label>
            <input
              
              type="radio"
              name="gender"
              ref={femaleRef}
            />
            <label className="gender-radio">Female</label>
          </div>
          <div className="signup-div">
            <label className="signup-label">Martial Status </label>
            <input   type="radio" name="ms" ref={singleRef} />
            <label className="ms">Single</label>
            <input className="ms" type="radio" name="ms" ref={MarriedRef} />
            <label className="ms">Married</label>
          </div>
          <div>
            <lable>Languages known</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.telugu = true;
                }
              }}
            ></input>
            <lable>Telugu</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.hindi = true;
                }
              }}
            ></input>
            <lable>Hindi</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.english = true;
                }
              }}
            ></input>
            <lable>English</lable>
          </div>
          <div className="signup-div">
            <label className="signup-label">Email </label>
            <input className="signup-input" placeholder="Email" />
          </div>
          <div className="signup-div">
            <label className="signup-label">password </label>
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">State </label>
            <select onChange={(e)=>{
                let selectedState=e.target.value;
                switch(selectedState){
                  case "Andhra Pradesh":
                      console.log("amaravati")
                      break;
                      case "kerala":
                      console.log("Thiruvananthapuram")
                      break;
                      case "Tamilnadu":
                      console.log("chennai")
                      break;
                      case "Karnataka":
                      console.log("Bangalore")
                      break;
                      case "Goa":
                      console.log("panaji")

                      break;
                      case "Gujarat":
                      console.log("Gandhinagar")
                      break;
                      default:
                      console.log("")
                      break;
                }
            }}>
              <option>select State</option>
              <option>Andhra Pradesh</option>
              <option>kerala</option>
              <option>Tamilnadu</option>
              <option>Karnataka</option>
              <option>Goa</option>
              <option>Gujarat</option>
            </select>
          </div>
          <div className="signup-div">
            <label className="signup-label">Profile Pic </label>
            <input className="signup-input" type="file" multiple  onChange={(e)=>{
              
              let imgURL=URL.createObjectURL(e.target.files[0])
              setProfilePic(imgURL);
            }} /><span></span>
              <img className="profilePic" src={profilePic}></img>
          </div>


          <div className="signup-div">
            <label className="signup-label">address</label>
            <textarea></textarea>
          </div>
          <div className="signup-div">
            <button
              className="btn"
              type="button"
              onClick={() => {
                
                genderAndMartialStatus();

                console.log("status of ms:  " + status);
                alert(
                  `${status} ${firstInputRef.current.value} ${
                    lastInputRef.current.value
                  } known ${languagesKnown.telugu == true ? "Telugu" : ""} ${
                    languagesKnown.hindi == true ? "Hindi" : ""
                  } ${languagesKnown.english == true ? "English" : ""}`
                );
              }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
