import { Link } from 'react-router-dom';

const AuthLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link to="/register" className="text-[14px] text-dark-gray-2 hover:text-primary underline">
                Cadastre-se
            </Link>
            <Link
                to="/login"
                className="flex items-center justify-center bg-primary w-28.5 h-10 rounded-sm text-white font-bold text-[14px] hover:bg-pink-700 transition-colors">
                Entrar
            </Link>
        </div>
    );
};

export default AuthLinks;
