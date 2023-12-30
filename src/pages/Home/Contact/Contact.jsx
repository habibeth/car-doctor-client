import time from '../../../assets/icons/time.svg'
import call from '../../../assets/icons/call.svg'
import loc from '../../../assets/icons/loc.svg'

const Contact = () => {
    return (
        <div className='flex justify-evenly bg-black rounded-lg'>
            <div className="flex items-center py-24 px-16">
                <img src={time} alt="" />
                <div className="text-white ml-5">
                    <p className="text-base font-medium">We are open monday-friday</p>
                    <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="bg-black flex items-center py-24 px-16">
                <img src={call} alt="" />
                <div className="text-white ml-5">
                    <p className="text-base font-medium">Have a question?</p>
                    <h2 className="text-2xl font-bold">+2546 251 2658</h2>
                </div>
            </div>
            <div className="bg-black flex items-center py-24 px-16">
                <img src={loc} alt="" />
                <div className="text-white ml-5">
                    <p className="text-base font-medium">Need a repair? our address</p>
                    <h2 className="text-2xl font-bold">Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;