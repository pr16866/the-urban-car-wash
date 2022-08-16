import { async } from "@firebase/util";
import { doc, setDoc, Timestamp, addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../Config/Firebase";

const modelName = {
  ONE_TIME_BOOKING: "One_time_wash",
  SUBSCRIPTION_BOOKING: "subscription_wash",
  ADD_ON: "addon",
  PLANS:"plans",
  PIN_CODES: "pincode"
};


const { ONE_TIME_BOOKING, SUBSCRIPTION_BOOKING, ADD_ON, PLANS, PIN_CODES } = modelName;


export const saveDetails = async (data, authenticated) => {
  data = { ...data, timestamp: Timestamp.now(), userUid: authenticated.uid, orderNo: Math.round((new Date()).getTime() / 1000) };
  return await addDoc(collection(db, ONE_TIME_BOOKING), data);
};


export const savepackageDeail = async (data, authenticated, location,totalCost) => {
  data = { ...data, timestamp: Timestamp.now(), userUid: authenticated.uid, ...location, orderNo: Math.round((new Date()).getTime() / 1000) ,totalprice: totalCost};
  return await addDoc(collection(db, SUBSCRIPTION_BOOKING), data);
};


export const getPlans = async (data) => {
  const colref = collection(db, PLANS);
  let arr = [];
  let q = query(colref, where("packageType", "==", data));
  let snapdoc =await getDocs(q);
  snapdoc.docs.forEach(doc => {
    arr.push(doc.data());
  });
  return arr;
}

export const getAllPlans = async () =>{
  const colref = collection(db, PLANS);
  let arr = [];
  let q = query(colref);
  let snapdoc =await getDocs(q);
  snapdoc.docs.forEach(doc => {
    arr.push(doc.data());
  });
  return arr;
} 

export const addOn = async () => {
  let arr = [];
  const colref = collection(db, ADD_ON);
  let dataSnapshot =await getDocs(colref);
  dataSnapshot.docs.forEach(doc => { 
    arr.push(doc.data());
});
return arr;
}

export const getPinCodes = async () => {
  let arr = [];
  const colref = collection(db, PIN_CODES);
  let dataSnapshot =await getDocs(colref);
  dataSnapshot.docs.forEach(doc => { 
    arr.push(doc.data());
});
return arr;
}