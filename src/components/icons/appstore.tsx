import * as React from "react";
interface Props {
	width: string
	height: string
}
const Appstore = ({width, height}: Props) =>{
	return (
		<svg fill="currentColor" className={`${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			 viewBox="0 0 80 80">
			 <g>
				<path d="M26.3384 55.8489C25.9051 56.5879 25.1104 57.0395 24.2538 57.0336C23.8249 57.0374 23.4034 56.9215 23.0366 56.6991C22.485 56.3795 22.0834 55.8533 21.9207 55.2369C21.7579 54.6205 21.8474 53.9647 22.1693 53.4144L24.5372 49.4777C24.7807 49.0642 25.2251 48.8108 25.7049 48.8117L26.0549 48.8117C27.7724 48.8117 28.9742 49.8447 29.3242 50.8451L26.3384 55.8489Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none" />
				<path d="M46.3859 48.1055L30.8791 48.1226L20.5726 48.1226C19.9173 48.1253 19.2896 47.8594 18.8357 47.3868C18.3817 46.9141 18.1414 46.2761 18.1706 45.6215C18.2202 44.3206 19.3554 43.3356 20.6485 43.3356L28.1193 43.3356L36.9762 28.2593L36.9762 28.2593L34.108 23.3732C33.4622 22.2597 33.7488 20.7916 34.8561 20.0916C35.4077 19.7348 36.081 19.6186 36.7203 19.7697C37.3596 19.9209 37.9095 20.3263 38.243 20.8923L39.7762 23.5111L39.7932 23.5111L41.328 20.8923C41.6618 20.3293 42.21 19.926 42.8469 19.7751C43.4837 19.6241 44.1546 19.7383 44.7056 20.0916C45.8067 20.7916 46.0901 22.2597 45.4397 23.3779L42.5715 28.2639L39.7839 33.0168L33.7302 43.3403L33.7302 43.3573L42.6521 43.3573C43.7702 43.3573 45.1718 43.9582 45.7386 44.9246L45.7881 45.0252C46.2884 45.8754 46.5718 46.4593 46.5718 47.3095C46.5636 47.5856 46.5021 47.8575 46.3906 48.1102L46.3859 48.1055Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
				<path d="M58.4269 48.1226L54.2284 48.1226L54.2284 48.1396L57.2979 53.3602C57.9846 54.504 57.6285 55.9872 56.4972 56.6945C56.1203 56.9243 55.6874 57.0459 55.2459 57.046C54.3921 57.0457 53.601 56.5978 53.1614 55.8659L48.6253 48.1443L45.8067 43.3434L42.1704 37.127C41.0989 35.3211 41.0606 33.0835 42.0698 31.242C42.7884 29.9737 43.3381 29.6407 43.3381 29.6407L51.4269 43.3217L58.3819 43.3217C59.6828 43.3217 60.7994 44.3221 60.8598 45.606C60.8851 46.2655 60.6404 46.9069 60.182 47.3818C59.7237 47.8568 59.0915 48.1243 58.4315 48.1226L58.4269 48.1226Z" fill="currentColor" fill-rule="nonzero" opacity="1" stroke="none"/>
				<path d="M4.8118 40.6889C4.8118 21.53 20.3432 5.99866 39.5021 5.99866C58.661 5.99866 74.1923 21.53 74.1923 40.6889C74.1923 59.8479 58.661 75.3792 39.5021 75.3792C20.3432 75.3792 4.8118 59.8479 4.8118 40.6889Z" fill="none" opacity="1" stroke="currentColor" stroke-linecap="butt" stroke-linejoin="round" stroke-width="6" />
			 </g>
		</svg>
	)
}

export default Appstore