import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-xl text-orange-600 font-bold">Service</h2>
                <h2 className="text-6xl font-bold">Our Service Area</h2>
                <p className="mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="mt-12 mb-32 flex justify-center">
                <button className="btn btn-outline btn-error hover:text-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;