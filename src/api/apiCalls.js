import apiClient from "./clientApi"

const getAllData=async ()=>{
    try{
const res=await apiClient.get("/allProducts")
    return res.data
    }
    
catch (error){
throw error
}

    
}

export{getAllData}