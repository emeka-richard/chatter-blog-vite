import React, { useEffect } from 'react'
import AuthAccountVerifyBackBtn from './Auth-acct-verify-back-btn'
import style from "./auth-account-verify.module.css"
import AuthCodeBox from './Auth-code-box';
import useAuthVerifyUser from '../../../middlewares/isAuthenticated';
import { useNavigate } from 'react-router-dom';

const AuthAccountVerfication:React.FC = function () {
  const { currentUser } = useAuthVerifyUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(currentUser?.emailVerified === true){
      navigate("/feeds")
    }
  })

  console.log(currentUser)


  return (
    <section className={style.auth_acct_verify_wrapper}>
      <AuthAccountVerifyBackBtn />
      <div className={style.auth_acct_verify_container}>
        <AuthCodeBox />
      </div>
    </section>
  )
}

export default AuthAccountVerfication