import MenuList from "./menu-list";
import React,{useState} from "react";
import {FaMinus,FaPlus} from 'react-icons/fa';


export default function MenuItem({item}){
    const [displayCurrentChildren, setDisplayCurrentChildren]=useState({});

    async function handleToggleChildren(getCurrentLabel) {
      await setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      });
    }
    console.log("displaycurrentchildren", displayCurrentChildren);

    return(
        <li>
            <div className="menu-item-container"
            style={{display:'flex'}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? 
                <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label]?<FaMinus color="white" size={18}/>:<FaPlus color="white" size={18}/>
                    }
                </span>:null
            }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
                <MenuList list={item.children}/>
                :null
            }
        </li>
    )
}