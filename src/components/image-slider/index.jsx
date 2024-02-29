import React,{useEffect, useState} from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';


const ImageSlider = ({url,limit=5,page=1}) => {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false);

    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data= await response.json();
            if(data){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url!=='') fetchImages(url);
    },[url]);

    console.log(images);
    if(loading){
        return <div>Loading data, Please Wait !</div>
    }
    if(errorMsg!==null){
        return <div>Error occured !{errorMsg}</div>
    }
  return (
    <div className='container'>
        <BsArrowLeftCircleFill className='arrow arrow-left'/>
        {
            images && images.length?
            images.map((imageItem)=>(
                <img 
                alt=''
                key={imageItem.id}
                src={imageItem.download_url}
                className='current-image'
                />
            )):null
        }
        <BsArrowRightCircleFill className='="arrow arrow-right'/>
        <span className='circle-indicators'>
            
        </span>
    </div>
  )
}

export default ImageSlider;