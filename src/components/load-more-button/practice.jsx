import React, { useEffect, useState } from "react";
import './styles.css';

export function Practice(){

    const [products,setProducts]=useState([]);
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(false);
    const [disableButton,setDisableButton]=useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const result=await response.json();
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData,...result.products]);
                setLoading(false);
            }
        }catch(e){
            console.log(e);
            setLoading(false);
        }

    }
    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(()=>{
        if(products && products.length===100){
            setDisableButton(true);
        }
    },[products]);

    if(loading){
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><p>just wait! products are loading</p></div>
        )
    }

    return(
        <div className="load-more-container">
            <div className="product-container">{
                products && products.length? 
                products.map((item)=>
                    <div className="product">
                        <img 
                            src={item.thumbnail}
                            alt={item.title}
                        />
                        <p>{item.title}</p>
                    </div>
                ):
                null
            }
            </div>
            <button
                disabled={disableButton}
                onClick={()=>setCount(count+1)}
            >Load more Products</button>
        </div>
    )
}