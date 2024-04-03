import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './routes/HomePage'
import { NotFound } from './routes/NotFound'
import { Routes, Route } from 'react-router-dom'
import { PetDates } from './routes/PetDates'
import {Loading} from './components/Loading'
import { useEffect, useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading &&
        <Loading/>}
      {
        !loading &&
        <>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/date' element={<PetDates />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </>}
    </>
  )
}

export default App
