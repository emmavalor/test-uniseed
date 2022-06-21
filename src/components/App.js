import Banner from './Banner'
import Navbar from './Navbar'
import Title from './Title'
import CryptoList from './CryptoList'
import { useState } from 'react'



function App() {

  // ici j'utilise le useState pour definir des tableaux vides

  // validate recupere ma selection 
  const [validate, updateValidate] = useState([])

  // select recupere les cartes selectionnées
  const [select, updateSelect] = useState([])

  return (
    <div>
      <Banner />
      <Title />
      <Navbar select={select} updateSelect={updateSelect} validate={validate} updateValidate={updateValidate} />
      <CryptoList select={select} updateSelect={updateSelect} />
    </div>
  )
}

export default App;
