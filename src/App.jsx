import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <ListEmployeeComponents/>
      <FooterComponent/>
    </>
  )
}

export default App
