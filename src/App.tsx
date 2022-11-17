import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </Container>
    </>
  )
}

export default App
