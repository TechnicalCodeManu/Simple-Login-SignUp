export const checkvaliddata = ( email , password)=>{ 
    const  Isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const  Ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
    if(!Isemailvalid) return "Email not Valid";
    if (!Ispasswordvalid ) return "Password not valid";
 
    return null;
 };
 
 