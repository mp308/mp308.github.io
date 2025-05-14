
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
            <div className='flex flex-wrap justify-center gap-20 my-8'>
                {/* Whey Protein */}
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg'>
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
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg'>
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
                <div className='relative w-full sm:w-[300px] h-[350px] bg-gray-800 text-white flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg'>
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
