import cart from '../assets/icon-cart.svg'
import logo from '../assets/logo.svg'
import avatar from '../assets/image-avatar.png'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'
import deleteSvg from '../assets/icon-delete.svg'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import '../assets/css/Nav.css'


interface NavProps {
    list: string[]; // Assuming `list` is an array of strings
    onDelete: (index: number) => void; // Function that takes an index and returns void
    deleteCart: () => void; // Function that takes no arguments and returns void
    number: Number
}

export default function Nav({list, onDelete, deleteCart, number}: NavProps) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleCart, setToggleCart] = useState(false)
    const [isMdScreen, setIsMdScreen] = useState<boolean>(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 768);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const deleteing = () => {
        if(list.length > 1) {
            deleteCart()
            setToggleCart(false)
        }
        else {
            alert('there is nothing to delete')
        }
    }

    return (  
        <div className='relative z-50'>
        <div className={`fixed top-0 flex flex-wrap items-center justify-between w-full gap-4 bg-white p-7 lg:px-40`}>
            <div className='flex items-center justify-center gap-4'>
                
                <button className='md:hidden md:p-4' onClick={() => setToggleMenu(true)}><img className='' src={menu} alt="menu" /></button>
                <img className='' src={logo} alt="logo" />
            </div>
            
            <div className={`fixed top-0 left-0 z-40 w-full h-full bg-backgroundPop md:hidden ${toggleMenu? 'block': 'hidden'}`}></div>
            <AnimatePresence>
            {(toggleMenu || isMdScreen)&&
                <motion.div
                className={`fixed top-0 left-0 z-50 w-1/2 h-screen sm:w-1/3 bg-white p-7 md:h-fit md:w-fit md:static md:p-0 md:mr-44`}
                initial={{left: '-400px'}}
                animate={{left: 0}}
                transition={{duration: .3}}
                exit={{left: '-400px'}}
                >
                    <button className='p-4 h-fit md:hidden' onClick={() => setToggleMenu(false)}><img src={close} alt="close" /></button>
                    <div className='flex flex-col gap-3 mt-20 font-bold md:flex-row md:mt-0 md:items-end'>
                        <a className='p-4 text-sm transition-all duration-300 text-DarkGrayishBlue hover:text-darkBlue' href="#">Collections</a>
                        <a className='p-4 text-sm transition-all duration-300 text-DarkGrayishBlue hover:text-darkBlue' href="#">Men</a>
                        <a className='p-4 text-sm transition-all duration-300 text-DarkGrayishBlue hover:text-darkBlue' href="#">Women</a>
                        <a className='p-4 text-sm transition-all duration-300 text-DarkGrayishBlue hover:text-darkBlue' href="#">About</a>
                        <a className='p-4 text-sm transition-all duration-300 text-DarkGrayishBlue hover:text-darkBlue' href="#">Contact</a>
                    </div>
                </motion.div>
            }
            </AnimatePresence>
            
            <AnimatePresence>
            {toggleCart&& (<motion.div 
            className='boxShadow absolute bg-white rounded-xl w-[90%] sm:w-[50%] md:w-[40%] md:right-[24%] lg:w-[30%] lg:right-[20%]  sm:right-[30%] top-32 right-1/2 translate-x-1/2 min-h-72 p-6 text-right'
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition={{duration: .5}}
            exit={{opacity: 0}}
            >
            <button onClick={deleteing} className='px-4 py-2 text-sm font-[500] transition-all duration-300 rounded-xl bg-liteOrange1 hover:bg-orange mb-5'>Delete All</button>
            {list.length > 0 ? (
                        list.map((element, index) => (
                            (index !== 0)&&(
                                <motion.div key={index} className={`flex justify-between listCart transition-all duration-300 hover:bg-liteOrange rounded-xl p-2`}>
                                    <h1 className='text-sm word-space first-letter:text-base first-letter:text-orange first-letter:font-bold' key={index}>{element}</h1>
                                    <motion.div className='flex gap-4'>
                                        <button onClick={() => onDelete(index)} id={`${index}`}><img src={deleteSvg} alt="delete" /></button>
                                    </motion.div>
                                </motion.div>
                            )
                        ))
                    ) :
                        ''
                    }
                    <div className={`w-full h-52 text-center text-lg font-bold mt-24 ${(list.length < 2)? 'block': 'hidden'}`}>

                        <h1 className={`m-auto top-0`}>Your Cart Is Empty!</h1>
                        <h2 className={`m-auto text-sm top-0 text-DarkGrayishBlue mt-4`}>Why Not Add Something To Fill It Up?</h2>
                    </div>
            </motion.div>
            )}
            </AnimatePresence>
            
            <div className='relative flex items-center justify-center gap-4'>
                <button className={`relative transition-all duration-500 ${list.length>1? 'animation': ''}`} onClick={() => setToggleCart(!toggleCart)}>
                    <img className='w-10 h-10' src={cart} alt="cart" />
                    </button>
                <img className='w-14 h-14' src={avatar} alt="logo" />
            </div>
        </div>
            <hr className='lg:mx-36' />
        </div>
    );
}