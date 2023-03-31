import { atom } from 'recoil';

const authState = atom({
    key: 'authState',
    default: {
        _id : "",
        userName : "",
        token : ""

    }, 
  });
  




export {authState}