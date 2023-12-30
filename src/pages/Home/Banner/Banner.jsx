import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className=" rounded-xl z-50">
            <div className="carousel h-[600px] w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className='w-full opacity-50' />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full opacity-50" />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full opacity-50" />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full opacity-50" />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full opacity-50" />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full opacity-50" />
                    <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="ml-24">
                            <h2 className='text-6xl font-bold text-white mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-lg text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className="mt-7">
                                <button className="btn btn-error text-white font-semibold mr-5">Discover More</button>
                                <button className="btn btn-outline text-white font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;