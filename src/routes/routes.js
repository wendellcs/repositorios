import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './../pages/Main'
import Repositorio from './../pages/Repositorio'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/repositorio/:repositorio' element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp