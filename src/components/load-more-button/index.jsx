import React, {useState,useEffect} from 'react';
import './styles.css';

export default function LoadMoreData(){
    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);
    const [count, setCount]=useState(0);
    const [isDisabled,setIsDisabled]=useState(false);

    async function fetchProducts (){
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0: count*20}`);

            const result= await response.json();

            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false);
            }

        }catch(e){
            console.log("this is error",e);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(()=>{
        if(products &&  products.length===100){
            setIsDisabled(true);
        }
    },[products]);

    if(loading){
        return(
            <div>
                Loading data ! please wait.
            </div>
        )
    }

    return (
        <div className="load-more-container">
            <div className='product-container'>
                {
                    products && products.length ? 
                    products.map((item)=>
                        <div className='product' key={item.id}>
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
            <div className='button-container'>
                <button 
                disabled={isDisabled}
                onClick={()=>setCount(count+1)}>Load More Products</button>
                {
                    isDisabled?<p>You have reached to 100 Products</p>:null
                }
            </div>
        </div>
    )
}