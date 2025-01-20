 //action pour recuperer un profile
 
 export const fetchProfile= ()=>async (dispatch)=>{

    try {
        dispatch({typ :"FETCH_PROFILE_REQUEST"});//la requette commence
        const token=localStorage.getItem("authToken");
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data=await response.json();
          if(response.ok){
            dispatch({type: "FETCH_PROFILE_SUCCESS", payload: data.body })
          }else{
            dispatch({ type: "FETCH_PROFILE_FAIL", payload: data.message })
          }
    }catch(error){
        dispatch({ type: "FETCH_PROFILE_FAIL", payload: error.message });
    }
 }

 //action pour mettre a jour le profile 
 export const updateProfile =(userName)=>async(dispatch)=>{
    try{
        dispatch({type:"UPDATE_PROFILE_REQUEST"});
        const token=localStorage.getItem("authToken");
        const response=await fetch("http://localhost:3001/api/v1/user/profile",{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),

        }

        )
        const data=await response.json()
        if(response.ok){
            dispatch(fetchProfile())
            dispatch({type:"UPDATE_PROFILE_SUCCESS"});
            

        }else{
            dispatch({type: "UPDATE_PROFILE_FAIL", payload: data.message})
        }
    }catch (error){
        dispatch({ type: "UPDATE_PROFILE_FAIL", payload: error.message });
    }
   
    
 }