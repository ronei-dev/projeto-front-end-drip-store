
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    return (
        <button className="relative" onClick={() => navigate('pedidos')}>
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-primary transition-colors" />
            {cartItems.length > 0 && (
                <span className="flex items-center justify-center absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4.5 h-4.5 rounded-full">
                    {cartItems.length}
                </span>
            )}
        </button>
    );
};

export default CartIcon;