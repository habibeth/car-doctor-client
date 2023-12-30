import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-10 px-4 py-4">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl h-64" />
                </figure>
                <div className="">
                    <h2 className="card-title my-5">{title}</h2>
                    <div className="text-orange-600 flex justify-between items-center">
                        <p className="text-xl font-bold">Price ${price}</p>
                        <Link to="">
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;