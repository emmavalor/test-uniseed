import { cryptoList } from '../datas/cryptoList'
import '../components/styles/CryptoList.css'
import CryptoItem from './CryptoItem'
import React, { useState } from 'react'

function CryptoList() {
    // je trie les categories pour pas qu'il y est de doublons
    const categories = cryptoList.reduce(
        (acc, crypto) =>
            acc.includes(crypto.categorie) ? acc : acc.concat(crypto.categorie),
        []
    )

    // je regarde l'etat de ma classe
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    // je filtre pour garder que les crypto qui sont en adequations avec ma categorie
    const filterItem = () => {

    }


    return (
        <div className='tst-crypto-list'>
            <ul className='tst-crypto-ul'>
                {categories.map((cat) => (
                    <li key={cat} data-target={cat} className={isActive ? 'tst-crypto-li active' : 'tst-crypto-li'} onClick={toggleClass}>Risque {cat}</li>
                ))}
            </ul>
            <ul className='tst-crypto-item'>
                {cryptoList.map(({ id, name, categorie, commentaire, color, textColor }) => (
                    <CryptoItem
                        id={id}
                        categorie={categorie}
                        name={name}
                        commentaire={commentaire}
                        color={color}
                        textColor={textColor}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CryptoList