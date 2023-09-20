import React from 'react'
import NewCollection from './NewCollection';
import DiscoveryCollection from './DiscoveryCollection';
import PopularProducts from './PopularProducts';
import MostRated from './MostRated';
import NewShoes from './NewShoes';
import { BrowserRouter } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <NewCollection />
                <DiscoveryCollection />
                <PopularProducts />
                <MostRated />
                <NewShoes />
            </BrowserRouter>
        </div>
    )
}

export default Index