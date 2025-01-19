// actions/auth.actions.js

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // Action de connexion
export const LOGOUT = "LOGOUT"; // Action de déconnexion

export const LOGIN_FAIL="LOGIN_FAIL";

export const login= (email,password)=>async (dispatch)=>{
    try {
const response=await fetch ("http://localhost:3001/api/v1/user/login",{
    method :"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
});
const data=await response.json();
if(response.ok && data.body.token){
    localStorage.setItem("authToken",data.body.token)//souvegarde
    dispatch({ type: "LOGIN_SUCCESS",payload: data.body.token});

} else {
    dispatch({ type: "LOGIN_FAIL", payload: data.message });
}
    }catch(error){
        dispatch({type:"LOGIN_FAIL",payload:error.message})
    }

}

export const logout=()=>(dispatch)=>{
    localStorage.removeItem("authToken");
    dispatch({type :"LOGOUT"})
}