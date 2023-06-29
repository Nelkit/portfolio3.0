import * as React from "react";
interface Props {
	width: string
	height: string
}
const Playstore = ({width, height}: Props) =>{
	return (
		<svg fill="currentColor" className={`${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			 viewBox="0 0 80 80">
			<g >
				<path d="M62.8507 43.4616L55.6302 47.3272L47.4873 39.1844L55.6302 31.0417L62.8507 34.9073C66.2662 36.736 66.2662 41.6331 62.8507 43.4616Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
				<path d="M28.4361 16.4828L53.5028 29.9029L45.8544 37.5514L24.4985 16.1955C25.7208 15.7498 27.1334 15.7855 28.4361 16.4828Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
				<path d="M21.2946 57.6091L21.2946 20.7598C21.2946 19.4723 21.7774 18.3484 22.5432 17.5067L44.2211 39.1844L22.5432 60.8622C21.7774 60.0205 21.2946 58.8968 21.2946 57.6091Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
				<path d="M28.4361 61.8863C27.1334 62.5836 25.7209 62.6191 24.4985 62.1735L45.8542 40.8177L53.5027 48.4661L28.4361 61.8863Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
			</g>
		</svg>
	)
}

export default Playstore