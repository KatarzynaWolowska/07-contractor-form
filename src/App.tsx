// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ContractorForm from './components/Forms/ContractorForm'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contractors/:id' element={<ContractorForm />} />
                <Route path='/404' element={<PageNotFound />} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
