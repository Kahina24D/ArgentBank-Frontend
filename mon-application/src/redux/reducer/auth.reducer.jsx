import { LOGIN_SUCCESS,LOGOUT } from "../action/auth.actions";

//Etat initial 
const initialState={
    isConnected :false, //utilisateur est deconnecter
    token :null //pas de token au depart

}
//reducer pour gerer les action d'authentifacation 

export const authReducer= (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isConnected: true,
                token :action.payload,
            };
            case LOGOUT:
                return initialState;
                default:
                    return state;
            
                    
    }
};