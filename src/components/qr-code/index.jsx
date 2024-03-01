import React,{useState} from 'react';
import {QRCode} from 'react-qr-code';

export default function Qrcode(){
    const [input,setInput]=useState('');
    const [qrcode,setQrcode]=useState('');

    function handleGenerate(){
        setQrcode(input);
        setInput('');
    }
    const handleInput=(e)=>{
        setInput(e.target.value);
    }

    return(
        <div >
            <h1>QR Code Generator</h1>
            <input 
            type="text" 
            value={input}
            onChange={(e)=>handleInput(e)} 
            placeholder="Enter you value here"/>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',margin:'20px'}}>
                <button
                disabled={input && input.trim()!==''?false:true}
                onClick={handleGenerate}>Generate QR Code</button>
                <QRCode value={qrcode} size={400} bgcolor='white'/>
            </div>
        </div>
    )
}