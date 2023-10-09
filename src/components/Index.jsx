import React from 'react'
import NewCollection from './NewCollection';
import DiscoveryCollection from './DiscoveryCollection';
import PopularProducts from './PopularProducts';
import MostRated from './MostRated';
import NewShoes from './NewShoes';

const Index = ({ cart, addToCart }) => {
    return (
        <div>          
                <NewCollection />
                <DiscoveryCollection />
                <PopularProducts cart={cart} addToCart={addToCart} />
                <MostRated cart={cart} addToCart={addToCart}/>
                <NewShoes />          
        </div>
    )
}

export default Index