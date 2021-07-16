import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import { Input } from '@material-ui/core'

export default function Analytics(props){
    const [data,setdata] = useState({})
    const [date,setdate]=useState({})
    let dates = []
    let datecount = {}
    let datekey = []
    let dateval = []

    const handlechange = (evt)=>{
        setdate({...date,[evt.target.name]:evt.target.value})
      }
    const call  = ()=>{
        axios.post(" http://127.0.0.1:8000/algo/allinfo",date).then(res=>{
        console.log(res.data)
        for(const i of res.data){
            dates.push(i.fill_time)
        }
        dates.forEach((item)=>{
            if(datecount[item]){
                datecount[item]+=1
            }
            else{
                datecount[item] = 1
            }
        })
        console.log(datecount)
    
            for(var [key,value] of Object.entries(datecount)){
                datekey.push(key);dateval.push(value)
            }
            console.log(datekey,dateval)
            setdata({
                labels: datekey,
                datasets: [
                  {
                    label: "USER_LOGIN",
                    data: dateval,
                    backgroundColor: ["rgba(90, 200, 100, 0.6)"],
                    borderWidth: 4
                  }
                ]
              });
    })

}

    useEffect(()=>{
      call()
    },[date])


    return(<div>
        <Input style = {{marginLeft:"50px"}} onChange={handlechange} type = "date" name = "startdate"/>
        <Input style = {{marginLeft:"400px"}} onChange={handlechange} type = "date" name = "enddate"/>
    <Line height='90%' data={data}/>
    </div>)
}