import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EV_Football from '../components/EV_Football';
import EV_YearBook from '../components/EV_YearBook';
import EV_anniversary from '../components/EV_anniversary';
import Banner from '../assets/images/content1.jpg';

const fonts = [
  '"Bebas Neue", sans-serif',
  '"Oswald", sans-serif',
  '"Playfair Display", serif',
  '"Anton", sans-serif',
  'Kanit', 'sans-serif',
  'Lacquer', 'sans-serif',
  '"League Script"', 'cursive'
];

export default function Myartwork() {
  const text = 'My Artwork Grapich Design';
  const [frame, setFrame] = useState(0);

  // เปลี่ยนฟอนต์ทุก 400 ms
  useEffect(() => {
    const id = setInterval(() => setFrame(f => f + 1), 400);
    return () => clearInterval(id);   // clear เมื่อ unmount
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#1a1a1a]">
        <div className='relative flex justify-center ' style={{ paddingTop: '15vh', paddingBottom: '15vh' }}>
          <img
            src={Banner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xtext-white text-center text-white ">
            {text.split('').map((ch, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: fonts[(frame + idx) % fonts.length],
                  transition: 'font-family 0.15s',
                }}
              >
                {ch}
              </span>
            ))}
          </h1>
        </div>
        <EV_Football />
        <EV_YearBook />
        <EV_anniversary />
      </div>
      <Footer />
    </>
  );
}
