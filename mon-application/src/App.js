import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Utilisez Router ici

import Header from './components/Header';
import { Home } from './Pages/Home';
import Login from './Pages/LogIn';
import Profile from './Pages/Profile';

function App() {
    // const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <Router> {/* Ajoutez Router ici */}
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
