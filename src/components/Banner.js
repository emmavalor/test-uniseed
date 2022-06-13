import '../components/styles/Banner.css'
import React, { useState } from 'react'

function Banner(){

	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	return (
		<div>
			<div className='tst-banner-cover' onClick={toggleClass}> 
				<div className='tst-banner-hello'>Hello</div>
			</div>
			<div className={isActive ? 'tst-banner-grey-bg' : null}>
				<span>Hello crypto</span>
				<span onClick={toggleClass}>close</span>
			</div>
		</div>
		)
}


export default Banner