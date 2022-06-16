// import { useState } from 'react'
import '../components/styles/Navbar.css'

function Navbar({ select, updateSelect }){

	console.log(select) 

	return(
		<div className='tst-nav-cover'>
			<div className='tst-nav-container'>
				<div className='tst-nav-item'>
					<p>Rechercher</p>
				</div>
				<div className='tst-nav-item'>
					<p>Mes selections ({select})</p>
				</div>
				<div className='tst-nav-gardient'></div>
			</div>
		</div>
		)
}

export default Navbar
