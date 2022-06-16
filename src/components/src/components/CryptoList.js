import { cryptoList } from '../datas/cryptoList'
import '../components/styles/CryptoList.css'
import CryptoItem from './CryptoItem'
import Category from './Category'
import { useState } from 'react'

function CryptoList({ select, updateSelect }) {
    // je trie les categories pour pas qu'il y est de doublons
    const [activeCategory, setActiveCategory] = useState('')

    const categories = cryptoList.reduce(
        (acc, crypto) =>
            acc.includes(crypto.categorie) ? acc : acc.concat(crypto.categorie),
        []
    )

    // je regarde l'etat de ma classe
    // const [isActive, setActive] = useState(false);

    // const toggleClass = () => {
    //     setActive(!isActive);
    // };

    return (
        <div className='tst-crypto-list'>
            <Category
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            {/*<ul className='tst-crypto-ul'>
                            {categories.map((cat) => (
                                <li key={cat} className={isActive ? 'tst-crypto-li active' : 'tst-crypto-li'} onClick={toggleClass}>Risque {cat}</li>
                            ))}
                        </ul>*/}
            <ul className='tst-crypto-item'>
                {cryptoList.map(({ id, name, categorie, commentaire, color, textColor }) => (
                    !activeCategory || activeCategory === categorie ? (
                    <div key={id}>
                        <CryptoItem
                            id={id}
                            categorie={categorie}
                            name={name}
                            commentaire={commentaire}
                            color={color}
                            textColor={textColor}
                        />
                        <button onClick={() => updateSelect(select + 1)}>Ajouter</button>
                    </div>
                    ) : null
                ))}
            </ul>
        </div>
    )
}

export default CryptoList






