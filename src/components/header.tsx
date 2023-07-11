import * as React from "react"
// @ts-ignore
import logo from "../images/logo.svg"
import LangSwitch from "./controls/lang-switch";

interface Props {
    showBg: boolean;
}
const Header = ({ showBg }: Props) => {
    const scrollToTop = () =>{
        const {scrollY, scrollTo,location} = window;
        const {pathname} = location
        if (scrollY != 0){
            scrollTo({ top: 0, behavior: 'smooth' });
        }else{
            if (pathname.includes('es')){
                location.href = '/es/'
            }else{
                location.href = '/'
            }
        }
    }

    return (
        <>
            <header className={`
                    w-full 
                    bg-opacity-70 
                    text-white 
                    flex 
                    justify-center
                    p-3 
                    fixed 
                    z-10
                    border-gray-300 border-opacity-20
                    transition-all
                    duration-300
                    backdrop-blur-lg
                    ${ showBg ?
                        'bg-gray-800 border-b-[0.2px]' :
                        'bg-transparent border-b-[0.0px]'
                    }
               `}>
                <div className={'w-full max-w-5xl flex justify-between items-center'}>
                    <button
                        onClick={scrollToTop}
                        className={`
                             inline-flex 
                             transition-all
                             duration-700
                             ease-in-out
                             ${ showBg ?
                                'ml-[50%] -translate-x-[40px]' :
                                'ml-0'
                             }`
                        }
                    >
                        <img
                            className={`
                                 inline-flex 
                                 ${ showBg ?
                                    'w-[80px]' :
                                    'w-[100px]'
                                 }`
                            }
                            src={logo}
                            alt="Logo"
                            width={100}
                            height={40.36}
                        />
                    </button>

                    <LangSwitch/>
                </div>
            </header>
        </>
    )
}

export default Header