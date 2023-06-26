import * as React from "react";
interface Props {
	width: string
	height: string
}
const Instagram = ({width, height}: Props) =>{
	return (
		<svg fill="currentColor" className={`${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			 viewBox="0 0 32 32" >
			<g>
				<path d="M24.44,31H7.56A6.56,6.56,0,0,1,1,24.44V7.56A6.56,6.56,0,0,1,7.56,1H24.44A6.56,6.56,0,0,1,31,7.56V24.44A6.56,6.56,0,0,1,24.44,31ZM7.56,3A4.57,4.57,0,0,0,3,7.56V24.44A4.57,4.57,0,0,0,7.56,29H24.44A4.57,4.57,0,0,0,29,24.44V7.56A4.57,4.57,0,0,0,24.44,3Z"/>
				<path d="M16,24a8,8,0,1,1,8-8A8,8,0,0,1,16,24Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,16,10Z"/>
				<path d="M24,10a2,2,0,1,1,2-2A2,2,0,0,1,24,10Zm0-2Z"/>
			</g>
		</svg>
	)
}

export default Instagram