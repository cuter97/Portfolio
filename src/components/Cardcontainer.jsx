import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CardList from './CardList';
import Card from './Card';

const Store = () => {
    let { id } = useParams();
    const imageHasLoaded = true;

    return (
        <>
            <CardList selectedId={id} />
            <AnimatePresence>
                {id && imageHasLoaded && <Card id={id} key="item" />}
            </AnimatePresence>
        </>
    )
}

const Cardcontainer = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Store/>} />
                <Route path=":id" element={<Store/>} />

            </Routes>
        </BrowserRouter>
        
    )
}

export default Cardcontainer