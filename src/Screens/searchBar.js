import { useState } from "react";

export default function SearchBar(props){
    const [contactsData,setContactsData]=useState([]);
    const [searching,setSearching]=useState(false)

    const list=<div>
    <ul style={{listStyle:"none",marginLeft:"-35px",overflow:"auto",height:"60px"}}>
        {contactsData.map((contactData,index)=>{
            return <li key={index} style={{borderBottom:"1px solid #E8E8E8"}}><b>{contactData.name}</b></li>
        })}
        
        {/* <li style={{borderBottom:"1px solid #E8E8E8"}}><b>{contactsData[1]}</b></li>
        <li style={{borderBottom:"1px solid #E8E8E8"}}><b>{contactsData[2]}</b></li> */}
    </ul>
</div>
    
    const searchBarHandler=(e)=>{
        const data=[];
        setSearching(true);
        let lengthOfInput=e.target.value.length;
        // console.log(e.target.value.length);
        props.contacts.forEach(contact => {
            if(contact.username.slice(0,lengthOfInput).toLowerCase()===e.target.value.toLowerCase())
            data.push({name:contact.username,index:contact.index});
        });
        setContactsData(data);
        console.log("data:",data);
    }

    return (<div >
        {console.log("contacts",props.contacts)}
        <div id="chat-input">
            <form action="" style={stylesheet.input}>
                <div>
                <img style={{width:"25px", height:"25px", marginTop:"10px"}} src="https://cdn-icons-png.flaticon.com/128/711/711319.png" alt="search-icon"></img>
                </div>
            <input 
            onChange={searchBarHandler}
            style={{border:"none",width:"230px",backgroundColor:"#E8E8E8",outline:"none"}} 
            placeholder="Search for Conversation" 
            type="text" 
            name="msg"></input>
            </form>
            {searching?list:null}
            
        </div>
    </div>)
}


const stylesheet={
    input:{
        display:"flex",
        backgroundColor:"#E8E8E8",
        justifyContent:"space-between",
        margin:"5px", 
        padding:"2px",
        height:"50px",
    }
}