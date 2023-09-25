import React, {useState} from "react";
import "./Login.scss";
import { useDispatch } from 'react-redux';
import {loginUser} from '../../redux/slices/authSlice'
import { useNavigate } from "react-router-dom";

// const Loginnew = () => {

function Loginnew() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      uid: '',
      password: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("hiii");
      console.log(`uid: ${formData.uid}, Password: ${formData.password}`);
      await dispatch(loginUser(formData));
      setTimeout(navigate('/'),5000);
    };
    

    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
    //             scope: ""
    //         })
    //     }
    //     gapi.load('client: auth2', start)
    // })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup");
    }

    const [inputVisible, setInputVisible] = useState(false);
      
        const toggleInput = () => {
          setInputVisible(!inputVisible);
        }


    return (
        <div className="cover" id='cover'>
            <h1 style={{color:"black"}}>Welcome Back!</h1>

            {/* <div className="form-group"> */}
          <label htmlFor="role" className="form-label">Role</label>
          <select id='role' className="form-select" name="role" placeholder='Freelancer' onChange={handleInputChange} value={formData.occupation}>
            <option value="freelancer">Freelancer</option>
            <option value="admin">Administrator</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        {/* </div> */}


            <input
            type="text"
            id="username"
            name="uid"
            placeholder="Username"
            value={formData.uid}
            onChange={handleInputChange}
            />
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            />

            <div className="login-btn" type="submit" onClick={handleSubmit}>Login</div>
            <div className={popupStyle}>
                <p>Incorrect username or password</p>
            </div>

            <p style={{color:"black"}} >Forget Password? <a href="#" onClick={toggleInput}>Click Here</a></p>

            {inputVisible && (
                    <input type="text" placeholder="Enter your email" />
                )
            }

        </div>
    )
}


export default Loginnew