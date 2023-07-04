import * as React from "react"
import {useEffect, useState} from "react";
import {graphql} from 'gatsby';
import {useI18next} from 'gatsby-plugin-react-i18next';
import { navigate } from "gatsby"

const LangSwitch = () => {
    const [currentLang, setCurrentLang] = useState('en');
    const { language, originalPath, path} = useI18next();

    useEffect(()=>{
        setCurrentLang(language)
    },[])

    const toggleLanguage = () =>{
        setCurrentLang(currentLang == 'es' ? 'en' : 'es')
        if (language==='en'){
            navigate(`/es${path}`)
        }else {
            navigate(`${originalPath}`)
        }
    }

    return(
        <button className={`
                bg-white bg-opacity-10 backdrop-blur-xl text-white
                relative grid grid-cols-2
                w-20 h-8 px-1
                rounded-md
                overflow-hidden
                shadow-inner
                shadow-gray-900/30
                border-b-[0.2px] border-opacity-20 border-b-gray-100
                [&>span]:h-full
                [&>span]:justify-center
                [&>span]:flex
                [&>span]:items-center
                [&>span]:relative
                [&>span]:z-10
                [&>span]:font-bold
                [&>span]:text-sm
                before:absolute
                before:bg-white
                before:top-1
                before:left-0
                ${currentLang === 'en' ? 'before:translate-x-1' : 'before:translate-x-10'}
                before:bottom-1
                before:w-9
                before:rounded
                before:shadow-sm
                before:shadow-gray-900
                before:shadow-opacity-10
                before:transition-all
                before:duration-300
            `}
            onClick={toggleLanguage}
        >
            <span className={
                currentLang === 'en'
                    ? 'text-transparent bg-clip-text bg-gradient-to-bl from-custom-red to-custom-yellow'
                    : ''
                }
            >
                EN
            </span>
            <span className={
                currentLang === 'es'
                    ? 'text-transparent bg-clip-text bg-gradient-to-bl from-custom-red to-custom-yellow'
                    : ''
                }
            >
                ES
            </span>
        </button>
    )
}

export default LangSwitch