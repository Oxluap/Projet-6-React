import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
