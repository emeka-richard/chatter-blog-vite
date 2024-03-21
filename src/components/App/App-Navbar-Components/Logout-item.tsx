import React from 'react';
// import DOMPurify from 'dompurify';
import { auth } from '../../../Firebase-Tools/firebase';
import LogoutIcon from "../../../assets/svg/logoutIcon.svg?react";
import { useNavigate } from 'react-router-dom';
import style from "./app-navbar-component.module.css";
import { signOut } from 'firebase/auth';
// import Spinner from '../../../middlewares/Spinner/Spinner';

const LogoutItem: React.FC = function () {
    // const sanitizedLogoutIconSVG = DOMPurify.sanitize(LogoutIcon);

    const navigate = useNavigate();

    // const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignOut = ()=>{
        // setIsLoading(true)
      signOut(auth).then(() => {
        // Sign-out successful.
        // setIsLoading(false)
          navigate("/auth/sign/login")
      }).catch((error) => {
        // An error happened.
        console.error(error)
      });
    }
  
    // if(!isLoading){
    //     return (
    //         <Spinner />
    //     )
    // }

  return (
    <button onClick={handleSignOut} className={style.logout_item_container} aria-label="Logout">
      {/* Logout Icon */}
      <LogoutIcon aria-hidden="true" />
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedLogoutIconSVG }} aria-hidden="true"/> */}

      {/* Text for Logout */}
      <p className={style.logout_item_p}>Log out</p>
    </button>
  );
}

export default LogoutItem;
