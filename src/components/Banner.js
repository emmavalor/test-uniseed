import '../components/styles/Banner.css'
import React, { useState } from 'react'

function Banner(){

	const [isActive, setIsActive] = useState(false);

	return (
		<div>
			<div className='tst-banner-cover' onClick={() => setIsActive(true)}> 
				<div className='tst-banner-hello'>Hello</div>
			</div>
			<div className={isActive ? 'tst-banner-grey-bg' : null}>
				<span>Hello crypto</span>
				<span onClick={() => setIsActive(false)}>close</span>
			</div>
		</div>
		)
}


export default Banner