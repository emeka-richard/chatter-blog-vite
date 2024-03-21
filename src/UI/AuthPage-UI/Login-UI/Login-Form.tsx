import React, { FormEvent, useState } from 'react';
import style from './login.module.css';
import LoginEmail from './Login-Email';
import LoginPassword from './Login-Password';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Firebase-Tools/firebase';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = function () {
  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isLogginIn, setIsLogginIn] = useState<boolean>(false)

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setIsLogginIn(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword)
      // .then((userCredential)=>{
        const user = userCredential.user
        if(user){
          navigate("/feeds")
        }
        // console.log("logged in..")
        // userCredential &&  
        // //  : navigate("/auth/sign/login")
      } catch (error) {
      console.error(error)
  }
    // }).catch((error)=>{
    // });
  }


  return (
    <form role='form' className={style.login_form} onSubmit={handleSubmitForm}>
      <LoginEmail setUserEmail={setUserEmail} />
      <LoginPassword setUserPassword={setUserPassword} />
      <button className={style.login_form_btn} type="submit">
        {isLogginIn ? "Loggin..." : "Log in"}
      </button>
    </form>
  );
};

export default LoginForm;
