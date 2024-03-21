///////////////////////////////////////////////

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../Firebase-Tools/firebase";

interface CurrentUser extends User {
    // Define any additional properties if needed
  }

// export let userInfo: User | null = null;
// export let isUserAuthenticated: boolean = false;
  

const useAuthVerifyUser = function () {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Function to handle authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // userInfo = user

            if (user?.emailVerified === true) {
                // User is signed in
                setIsAuthenticated(user.emailVerified);
                // isUserAuthenticated = user.emailVerified
                console.log(user)   
            } else {
                // User is signed out
                setIsAuthenticated(false);
            }
            setIsLoading(false)
            return;
        });

        // Clean-up function to unsubscribe from the auth state observer
        return () => unsubscribe();
    }, []);

    return { isAuthenticated, currentUser, isLoading };
}

export default useAuthVerifyUser;
