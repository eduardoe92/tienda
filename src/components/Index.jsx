import React from 'react'
import NewCollection from './NewCollection';
import DiscoveryCollection from './DiscoveryCollection';
import PopularProducts from './PopularProducts';
import MostRated from './MostRated';
import NewShoes from './NewShoes';

const Index = () => {
    return (
        <div>          
                <NewCollection />
                <DiscoveryCollection />
                <PopularProducts />
                <MostRated />
                <NewShoes />          
        </div>
    )
}

export default Index