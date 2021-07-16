import axios from 'axios'

export const Infoaction = (detail,history)=>async(dispatch)=>{
    try{
        const data = await axios.post("http://127.0.0.1:8000/algo/register",detail)
        dispatch({
            type:"INFO",
            payload:data
        })
        history.push('/nav')
        localStorage.setItem("userdetail",JSON.stringify(data))
    }
    catch(error){
        console.log(error.response.data)
    }
}