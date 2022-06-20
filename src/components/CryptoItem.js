import '../components/styles/CryptoItem.css'
import React, { useState } from 'react'



function CryptoItem({ id, name, categorie, commentaire, color, textColor }){

	const colorBg = color === 'rgb(152, 225, 186)' ? 'rgba(152, 225, 186, 0.5)' : color

	const [isActive, setIsActive] = useState(false);


    const toggleClass = () => {
        setIsActive(!isActive);
    };

	return (
		<li key={id} 
			className={isActive ? 'tst-crypto-item-container active' : 'tst-crypto-item-container'} 
			onClick={toggleClass} 
			style={{backgroundColor: colorBg}}
		>
			<div className='tst-crypto-item-cat' style={{backgroundColor: textColor}}>{categorie.toUpperCase()}</div>
			<div className='tst-crypto-item-name' style={{color: textColor}}>{name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}</div>
			<div className='tst-crypto-item-com' style={{color: textColor}}>{commentaire}</div>
        </li>
        )
}


export default CryptoItem
