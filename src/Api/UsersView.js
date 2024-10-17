import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
const UsersView =()=>{
    const data=useContext(MyContext);
    const [users,setUsers]=useState(data)
    const [inputVal,setInputVal]=useState("")
    const [isAscending,setAscending]=useState(true)
    useEffect(()=>{
        if(data.length>0){
            setUsers(data)
        }
    },[data])
    
    const OnInputChange=(e)=>{
        setInputVal(e.target.value)
        OnSearch(e.target.value)
    }
    const OnSearch=(search)=>{
        if(!search.trim()){
            setUsers(data)
        }
        else{
            const searchedList=data.filter((val)=>{
                const name=val.name.toLowerCase();
                if(name.includes(search.toLowerCase())){
                    return true;
                }
            })
            setUsers(searchedList)
        }
    }
    const OnAscending=()=>{
            users.sort((a,b)=>{
                if(a.name>b.name){
                    return isAscending? 1:-1;
                }
                else if(a.name<b.name){
                    return isAscending? -1: 1;
                }
                else{
                    return 0;
                }
            })
            setAscending(!isAscending)
    }
    return <div className="main-container">
        <input onChange={OnInputChange} value={inputVal} placeholder="Search name"/>
        <button onClick={OnAscending}>{isAscending?'Ascending':'Descending'}</button>
        <div className="display-flex">
            {users.map((val)=>{
                return <div className="item">{val.name}</div>
            })}
        </div>
    </div>
}
export default UsersView;