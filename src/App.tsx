import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/scroll-to-top';
import Home from './pages/website';


function App() {

    return (
        <div className="container-fluid scroll-smooth" style={{ zoom: 'calc(100% + (60% - 100%) * ((100vw - 768px) / (2560 - 768)))' }}>
            <BrowserRouter>

                <ScrollToTop />


                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default App
