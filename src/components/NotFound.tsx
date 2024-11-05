import { Link } from 'react-router-dom';
import sorry from '../assets/sorry.png'

export default function NotFound() {
    return (  
    < >
    
        <div className="flex flex-col items-center justify-center h-screen">
        <svg width="100%" height="200px" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id="revealMask">
                    <rect x="0" y="0" width="0" height="100" fill="#fff">
                        <animate 
                            attributeName="width" 
                            from="0" 
                            to="800" 
                            dur="3s" 
                            fill="remove" 
                            repeatCount="indefinite" 
                        />
                    </rect>
                </mask>
            </defs>
            
            <text x="50%" text-anchor="middle" y="50%" font-size="4rem" font-family="Arial, sans-serif" fill="#FF6347" dy=".3em" mask="url(#revealMask)">
                Sorry, The Page Is Not Ready Yet!
            </text>
        </svg>

            <img className='' src={sorry} alt="notFound" />
            <div className='mt-20'>
                    <Link className='bg-liteOrange1 text-base hover:bg-orange p-5 w-full rounded-2xl font-bold flex justify-center items-center sm:min-w-[220px] max-w-[350px] lg:mt-0 lg:max-w-[300px] transition-all duration-300' to='/'>Back To Home</Link>
            </div>
        </div>
    </>
    );
}

