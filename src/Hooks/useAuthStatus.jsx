import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"

export function useAuthStatus() {
  const [loggegIn, setloggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return {loggegIn, checkingStatus};
}