import increase from '../assets/icon-plus.svg'
import decrease from '../assets/icon-minus.svg'

import thumb1 from '../assets/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/image-product-4-thumbnail.jpg'

import img1 from '../assets/image-product-1.jpg'
import img2 from '../assets/image-product-2.jpg'
import img3 from '../assets/image-product-3.jpg'
import img4 from '../assets/image-product-4.jpg'


import '../assets/css/Home.css'
import Nav from './Nav'
import { useEffect, useState } from 'react'

import {cartStore} from '../stores/elementsStore'


export default function Home() {
    const [imgList, _setImgList] = useState([
        
        { thumbSrc: thumb1, src: img1, id: '0' },
        { thumbSrc: thumb2, src: img2, id: '1' },
        { thumbSrc: thumb3, src: img3, id: '2' },
        { thumbSrc: thumb4, src: img4, id: '3' },
    ])
    const [currentImg, setCurrentImg] = useState(img1)
    const [elements, setElements] = useState(0)
    const [key, setKey] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 639);

    const addCart = () => {
        if(elements > 0) {
            cartStore.addItem(`${elements} SNICKERS`)
            cartStore.cartCount += 1;
            setElements(0)
            cartStore.toggleAnimate = true
        }
        else{
            alert('please choose items first')
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 639);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isSmallScreen) {
            const intervalId = setInterval(() => {
                setCurrentImg((prevImg) => {
                    const currentIndex = imgList.findIndex(img => img.src === prevImg);
                    const nextIndex = (currentIndex + 1) % imgList.length;
                    return imgList[nextIndex].src;
                });
            }, 2200);

            return () => clearInterval(intervalId);
        }
        
        else {
            setCurrentImg(imgList[0].src)
            setKey(0)
        }
    }, [isSmallScreen, imgList]);

    return (
        < >
            <Nav />
            <div className="flex flex-col text-base main font-main sm:pt-4 lg:flex-row lg:px-44 lg:py-20 lg:gap-20">
                {imgList.map((img, index) => (
                <div key={index} id={`${index}`} className={`relative mt-20 flex justify-center items-center sm:flex-col gap-8 ${img.id === '0'? 'flex': 'hidden'}`}>
                        
                    <img className='sm:max-w-[500px] z-10 sm:rounded-[20px] lg:max-w-[450px]' src={currentImg} alt="currentImg" />
                    
                    <div className='hidden gap-8 sm:flex sm:justify-center sm:items-center'>
                    {imgList.map((img, index) => (
                        <button key={index} id={`${index}`} className='relative w-32 h-32 '>
                            
                            <div className={`images ${parseInt(img.id) === key? 'transition-all duration-[.4s] visible scale-125': 'invisible scale-100'}`}></div>
                            
                            <img className={`rounded-3xl ${parseInt(img.id) === key? 'scale-125 transition-all duration-[.4s]': 'scale-100'}`} 
                        onClick={() => {
                            setCurrentImg(img.src)
                            // setCurrentId(img.id)
                            setKey(index)
                        }} 
                        src={img.thumbSrc} alt="thumb" />
                        </button>
                    ))} 
                    </div>
                </div>
                ))} 

                <div className='flex flex-col p-8 sm:mt-10 lg:justify-evenly'>
                    <h1 className={`text-DarkGrayishBlue text-base font-bold`}>SNEAKER COMPANY</h1>
                    <h2 className='my-5 text-xl font-bold leading-10 lg:text-[4rem] lg:leading-tight'>Fall Limited Edition Sneakers</h2>
                    <p className='text-DarkGrayishBlue font-[500] mt-5'>
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className='flex flex-wrap items-center justify-between gap-5 mt-12 sm:justify-start sm:items-start sm:flex-col'>
                        <div className='flex items-center gap-5 font-bold'>
                            <h3 className='text-5xl text-darkBlue'>$125.00</h3>
                            <p className='bg-darkBlue text-white font-[500] px-4 py-1 rounded-xl'>50%</p>
                        </div>
                        <p className='mr-8 font-bold line-through text-DarkGrayishBlue '>$250.00</p>
                    </div>
                    <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-10'>
                        <div className='bg-LightGrayishBlue w-full max-w-[350px] rounded-2xl font-bold flex justify-between items-center p-5 mt-16 lg:mt-0 lg:max-w-[150px]'>
                            <button onClick={() => setElements(elements-1)} className={`add decreament ${elements===0? 'pointer-events-none opacity-30': 'pointer-events-auto opacity-100'}`}><img src={decrease} alt="decrease" /></button>
                            <p>{elements}</p>
                            <button onClick={() => setElements(elements+1)} className="add increament"><img src={increase} alt="increase" /></button>
                        </div>
                        <button onClick={addCart} className="bg-liteOrange1 hover:bg-orange p-5 w-full rounded-2xl font-bold mt-8 flex justify-center items-center max-w-[350px] lg:mt-0 lg:max-w-[300px] transition-all duration-300">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}