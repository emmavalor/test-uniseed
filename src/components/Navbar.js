// import { useState } from 'react'
// import Selection from './Selection'
// import { Navigate } from "react-router-dom"
import '../components/styles/Navbar.css'

function Navbar({ select, updateSelect, validate, updateValidate }){

	// y a quelques chose qui doit pas aller parce que mon validate ne recupere aucunes valeurs alors que mon select oui 
	console.log(select)
	console.log(validate)

	return(
		<div className='tst-nav-cover'>
			<div className='tst-nav-container'>
				<div className='tst-nav-item active'>
					<p>Rechercher</p>
				</div>
				<div className='tst-nav-item'>
				<p>Mes selections ({validate})</p>
					{/*{select.map(({name, categorie, amount }, index) => (
											<div key={`${name}-${index}`}>
												{name} {categorie} x {amount}
											</div>
										))}*/}
				</div>
				<div className='tst-nav-gardient'></div>
			</div>
		</div>
		)
}

export default Navbar
