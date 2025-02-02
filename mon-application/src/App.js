import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Utilisez Router ici
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import Login from './Pages/login/LogIn';
import Profile from './Pages/Profile/Profile';

function App() {
    // const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <Router> {/* Ajoutez Router ici */}
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
            <Footer/>
            </div>
        </Router>
    );
}

export default App;
