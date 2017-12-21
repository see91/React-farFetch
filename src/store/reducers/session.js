import * as types from '../action-types';
let initState={
    error:"",
    success:"",
    user:null,
};
export default function (state=initState,action) {
   switch (action.type){
       case types.det:
           return{
               ...action.payload
           };
       case types.LOGIN:
           return {
               ...action.payload
           };
       case types.LOGOUT:
           return {
               ...action.payload
           };
       case types.Validate:
           return {
               ...action.payload
           };
       default:
           return state;
   }
}