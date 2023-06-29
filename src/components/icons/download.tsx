import * as React from "react";
interface Props {
	width: string
	height: string
}
const Download = ({width, height}: Props) =>{
	return (
		<svg fill="currentColor" className={`${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			 viewBox="0 0 96 96">
			 <g>
			  	 <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z"/>
				 <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z"/>
			 </g>
		</svg>
	)
}
export default Download

