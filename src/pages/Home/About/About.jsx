import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="my-32">
            <div className="max-w-7xl flex p-4 gap-5">
                <div className="w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-white border-8" />
                </div>
                <div className="w-1/2">
                    <h2 className='text-xl font-bold text-orange-600'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="pt-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pt-6 pb-5">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="mt-3">
                        <button className="btn btn-error text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;