import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ContractorDetails from './pages/ContractorDetails'
import Home from './pages/Home'
import NewContractor from './pages/NewContractor'
import PageNotFound from './pages/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contractors' element={<Home />} />
                <Route path='/contractors/new' element={<NewContractor />} />
                <Route
                    path='/contractors/:id'
                    element={<ContractorDetails />}
                />
                <Route path='/404' element={<PageNotFound />} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
