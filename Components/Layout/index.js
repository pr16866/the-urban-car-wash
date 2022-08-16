import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from '../ContextApi';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Config/Firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Timestamp } from "firebase/firestore";
import { async } from '@firebase/util';

function Layout({ children }) {
  
  const { setAuthenticated, authenticated, newUser, setnewUser } = useAppContext();

  const [existsData,setExistsData] = useState(true);

  useEffect(() => {
    if (newUser && authenticated) {
      addNewUser();
    }
  }, [authenticated]);


  const getData = async (userUid) => {
    let response = await getDoc(doc(db, "users", userUid));
    if (response.exists()) {
      setExistsData( true);
    } else {
      setExistsData( false);
    }
  }

  const addNewUser = async () => { 
    getData(authenticated.uid);
    if (!existsData) {
      let data = {
        verifiedBy: newUser,
        [newUser]: authenticated[newUser],
        uid: authenticated.uid,
        timestamp: Timestamp.now()
    };
      let response = await setDoc(doc(db, "users", authenticated.uid), data);
    }
    setnewUser(false);
    setExistsData(true);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(user);
        const uid = user.uid;
      } else {
        setAuthenticated(false);
      }
  });
 }, [])

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <NavBar/>
      <div style={{ marginTop: "80px" }}>
        {children}
      </div>
      <div className="w-full h-full bg-[#141414]">
        <Footer/>
      </div>
    </>
  )
}

export default Layout