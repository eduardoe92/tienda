import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

export function useCart() {
    return useContext(CartContext);
}
