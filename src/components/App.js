import Banner from './Banner'
import Navbar from './Navbar'
import Title from './Title'
import CryptoList from './CryptoList'
import { useState } from 'react'



function App() {

    const [validate, updateValidate] = useState([])
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
