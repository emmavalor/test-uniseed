import { cryptoList } from '../datas/cryptoList'
import '../components/styles/Category.css'
import { useState } from 'react'


function Categories({ setActiveCategory, categories, activeCategory }) {

	const [isActive, setActive] = useState(false);

    // const toggleClass = () => {
    //     setActive(!isActive);
    // };

	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''> Filtrer par catégorie</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='lmj-categories-btn' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories

// <ul className='tst-categories-ul'>
//                 {categories.map((cat) => (
//                     <li key={cat} className={isActive ? 'tst-categories-li active' : 'tst-categories-li'} onClick={toggleClass}>Risque {cat}</li>
//                 ))}
//             </ul>
