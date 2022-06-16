import Banner from './Banner'
import Navbar from './Navbar'
import Title from './Title'
import CryptoList from './CryptoList'
import { useState } from 'react'



function App() {

  const [select, updateSelect] = useState(0)

  console.log(select)


  return (
    <div>
      <Banner />
      <Title />
      <Navbar select={select} updateSelect={updateSelect} />
      <CryptoList select={select} updateSelect={updateSelect} />
    </div>
  )
}

export default App;
