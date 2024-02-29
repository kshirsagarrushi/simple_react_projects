import React,{useEffect, useState} from 'react'

const RandomColor = () => {
    const[typeOfColor, setTypeOfColor]=useState('hex');
    const[color,setColor]=useState("#000000");
    const randomColorUtility=(len)=>{
        let index=Math.floor(Math.random()*len);
        return index;
    }
    function handleCreateRandomHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
        console.log(hexColor);
    }
    function handleCreateRandomRgbColor(){
        const r=randomColorUtility(256);
        const g=randomColorUtility(256);
        const b=randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if(typeOfColor==='hex') handleCreateRandomHexColor();
        else handleCreateRandomRgbColor();
    },[typeOfColor])
  return (
    <div className='container'
        style={{
            width:"100vw",
            height:"100vh",
            background:color
        }}
    >
        <button 
            style={{
                background:typeOfColor==='hex'?'gray':null,
            }}
            onClick={()=>setTypeOfColor('hex')}>Create HEX color
        </button>
        <button 
            style={{
                background:typeOfColor==='rgb'?'gray':null,
            }}
            onClick={()=>setTypeOfColor('rgb')}>Create RGB color
        </button>
        <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff',
            fontSize:'60px',
            marginTop:'50px',
            flexDirection:'column',
        }}>
            <h3>{typeOfColor==="rgb" ? "RGB Color": "HEX Color"}</h3>
            <h2>{color}</h2>
        </div>
    </div>
  )
}

export default RandomColor