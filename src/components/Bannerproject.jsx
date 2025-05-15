
import Black from '../assets/images/Banner/black.jpg';
import Snack from '../assets/images/Banner/Protein_Bars_Collection.jpg';
import Creatine from '../assets/images/Banner/creatine.jpg';
import Ac from '../assets/images/Banner/ac.jpg';
import Sp from '../assets/images/Banner/sp.jpg';
import worktable from '../assets/images/worktable.jpg';
import worktable2 from '../assets/images/worktable2.jpg';
import grapic from '../assets/images/grapic.jpg';
import l1 from '../assets/images/l1.jpg';




import { useNavigate } from 'react-router-dom';


const Bannerproject = () => {
    const navigate = useNavigate();

    // ฟังก์ชันเมื่อกดปุ่ม View จะส่ง CategoryID ไปที่หน้า Product_Main
    const handleViewExperice = () => {
        navigate('/Myworkpage');
    };
    const handleViewArtwork = () => {
        navigate('/MyArtwork');
    };

    const handleViewCertificate = () => {
        navigate('/Certifi');
    };



    return (
        <div className=' py-8 px-4'>
            {/* Product Categories */}
            <div className='flex absolute opacity-30 ml-[70%] mt-[10%] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]   '>
<svg viewBox="0 0 84 87" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path d="M42.007 0L42.4664 40.9945L60.6671 4.25904L43.2941 41.3931L75.6313 16.1926L43.8669 42.1114L83.9358 33.4371L44.0714 43.007L83.9358 52.577L43.8669 43.9027L75.6313 69.8215L43.2941 44.621L60.6671 81.7551L42.4664 45.0196L42.007 86.0141L41.5477 45.0196L23.347 81.7551L40.7199 44.621L8.38278 69.8215L40.1471 43.9027L0.0782776 52.577L39.9427 43.007L0.0782776 33.4371L40.1471 42.1114L8.38278 16.1926L40.7199 41.3931L23.347 4.25904L41.5477 40.9945L42.007 0Z" fill="#FFBE62" stroke="#FFBE62"></path>  <path d="M42.007 0L42.4664 40.9945L60.6671 4.25904L43.2941 41.3931L75.6313 16.1926L43.8669 42.1114L83.9358 33.4371L44.0714 43.007L83.9358 52.577L43.8669 43.9027L75.6313 69.8215L43.2941 44.621L60.6671 81.7551L42.4664 45.0196L42.007 86.0141L41.5477 45.0196L23.347 81.7551L40.7199 44.621L8.38278 69.8215L40.1471 43.9027L0.0782776 52.577L39.9427 43.007L0.0782776 33.4371L40.1471 42.1114L8.38278 16.1926L40.7199 41.3931L23.347 4.25904L41.5477 40.9945L42.007 0Z" fill="#FFBE62" stroke="#FFBE62"></path></svg>
            </div>
            <div className='flex flex-wrap justify-center gap-20 my-8 '>
                {/* Whey Protein */}
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-600/40 transition-shadow duration-300 z-10'>
                    <img src={worktable2} alt="Whey Protein" className="absolute top-0 left-0 w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <h2 className='relative font-bebas text-2xl sm:text-4xl md:text-5xl font-bold uppercase z-10 mb-4 tracking-widest'>MY experience</h2>
                    <button
                        onClick={() => handleViewExperice()}
                        className='relative bg-red-600 hover:bg-red-700 px-4 py-2 sm:px-6 sm:py-2 text-sm uppercase font-bebas tracking-wider z-10'
                    >
                        View
                    </button>
                </div>
                {/* Supplement */}
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-600/40 transition-shadow duration-300 z-10'>
                    <img src={grapic} alt="Supplement" className="absolute top-0 left-0 w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <h2 className='relative font-bebas text-2xl sm:text-4xl md:text-5xl font-bold uppercase z-10 mb-4 tracking-widest'>Artwork</h2>
                    <button
                        onClick={() => handleViewArtwork()}
                        className='relative bg-red-600 hover:bg-red-700 px-4 py-2 sm:px-6 sm:py-2 text-sm uppercase font-bebas tracking-wider z-10'
                    >
                        View
                    </button>
                </div>

                {/* Snack */}
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg  shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-600/40 transition-shadow duration-300 '>
                    <img src={l1} alt="Snack" className="absolute top-0 left-0 w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <h2 className='relative font-bebas text-2xl sm:text-4xl md:text-5xl font-bold uppercase z-10 mb-4 tracking-widest'>Certificate</h2>
                    <button
                        onClick={() => handleViewCertificate()}
                        className='relative bg-red-600 hover:bg-red-700 px-4 py-2 sm:px-6 sm:py-2 text-sm uppercase font-bebas tracking-wider z-10'
                    >
                        View
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Bannerproject;
