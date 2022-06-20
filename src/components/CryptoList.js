import { cryptoList } from '../datas/cryptoList'
import '../components/styles/CryptoList.css'
import CryptoItem from './CryptoItem'
import Category from './Category'
import { useState, useEffect } from 'react'

function CryptoList({ select, updateSelect, color }) {
    // je trie les categories pour pas qu'il y est de doublons
    const [activeCategory, setActiveCategory] = useState('')
    const [validate, updateValidate] = useState([])

    const categories = cryptoList.reduce(
        (acc, crypto) =>
            acc.includes(crypto.categorie) ? acc : acc.concat(crypto.categorie),
        []
    )

    console.log(validate)

    // je regarde l'etat de ma classe
    // const [isActive, setActive] = useState(false);

    // const toggleClass = () => {
    //     setActive(!isActive);
    // };
    function addToSelect(name, categorie) {
        const currentCryptoAdded = select.find((crypto)=> crypto.name === name)
        var date = new Date();
        const selectedDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        if (currentCryptoAdded){
            const selectFilteredCurrentCrypto = select.filter(
                (crypto) => crypto.name !== name
            )
            updateSelect([
                ...selectFilteredCurrentCrypto,
                {name, categorie, date, amount : currentCryptoAdded.amount + 1 }
            ])
        } else {
            updateSelect([...select, {name, categorie, date, amount: 1 }])
        }
    }

    function addToValidate(name, categorie) {
        if(validate === [1]){
            updateValidate([])
        }
        updateValidate(select)
    }

    // useEffect(() => {
    //     updateSelect([])
    // }, [])

    // console.log(select)

    return (
        <div className='tst-crypto-list'>
            <Category
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <button className='tst-crypto-list-btn' onClick={addToValidate}>Valider la selection</button>

            {/*<ul className='tst-crypto-ul'>
                            {categories.map((cat) => (
                                <li key={cat} className={isActive ? 'tst-crypto-li active' : 'tst-crypto-li'} onClick={toggleClass}>Risque {cat}</li>
                            ))}
                        </ul>*/}
            <ul className='tst-crypto-item'>
                {cryptoList.map(({ id, name, categorie, commentaire, color, textColor }) => (
                    !activeCategory || activeCategory === categorie ? (
                    <div key={id} className='tst-crypto-item-detail'>
                        <CryptoItem
                            id={id}
                            categorie={categorie}
                            name={name}
                            commentaire={commentaire}
                            color={color}
                            textColor={textColor}
                        />
                        <div className='tst-crypto-item-div-btn'>
                        <button onClick={() => addToSelect(name, categorie)} className='tst-crypto-item-btn' style={{backgroundColor: textColor}}>Ajouter</button>
                        </div>
                    </div>
                    ) : null
                ))}
            </ul>
        </div>
    )
}

export default CryptoList






