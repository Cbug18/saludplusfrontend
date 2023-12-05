import { Link } from "react-router-dom";

const Card = ({ path, title, image }) => {
    return (
        <Link to={`${path}`}>
            <div className="flex flex-col bg-white rounded-lg shadow-md w-52 overflow-hidden sm:w-52 gap-4">
                <figure className="w-full h-24">
                    <img src={image} className="w-full h-full object-contain"/>
                </figure>
                <h2 className="text-center">{title}</h2>
                <a
                    href="#"
                    className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
                >
                    Acceder 
                </a>
            </div>

        </Link>
    );
}

export default Card;