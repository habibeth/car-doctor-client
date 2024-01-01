import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData()
    // console.log(service)
    const {user} = useContext(AuthContext)
    const {_id,title, price, img} = service

    const handleBookedService=(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const message = form.message.value;

        console.log(name, date, email, price, message )

        const order ={
            customerName: name,
            email,
            img,
            date, 
            service: title,
            service_id: _id,
            price,
            message
        }

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })

        // console.log(order)
    }
    return (
        <div>
            <h2 className="text-center text-3xl my-10">Services: {title}</h2>
            <div className="bg-base-200 p-20 mb-20">
                <form onSubmit={handleBookedService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Mail" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea name="message" rows="10" placeholder="Your Message" className="p-3 input-bordered rounded-lg"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error text-white">Order Confirmed</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;