import axios from "axios"

export const checkUser  = async (userId , passowrd)=>{
   

}

const generateToken =  (payload)=>{
  
}

export const checkStorageForAdminToken = ()=>{
   
}

export const checkStorageForToken = ()=>{
    
   
}

export const addUser = async (data)=>{
   
    
}

export const validateSession = async (setUser) => {
    try {
        const response = await axios.get(
            "http://localhost:3500/users/validate"
        );
       
            if (response.status === 401) {
                if (response.status === 401) {
                    setUser({})
                }
            } else if (response.status === 200) {
                setUser(response.data)
            }
        
        
        //setting user data if token is still valid
    } catch (err) {
        if (err.response.status === 401) {
            setUser({})
        }
    }
}