import { useRef } from 'react';
import Headshot from '../assets/headshot.png'
import DukeLogo from '../assets/Duke_University_logo.svg'
import SiemensLogo from '../assets/Siemens-logo.svg'
import IntelLogo from '../assets/Intel_logo_2023.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import audioFile from '../assets/prashamsa.mp3';
import resume from '../assets/Koirala_Resume.pdf';


function Home() {
  return (
      <section className="bg-[#f6f5ef] min-h-screen w-full relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}> 
       <div className="flex items-center justify-center min-h-screen pt-8 md:pt-16 px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 lg:gap-40 max-w-6xl mx-auto">
            <div className="flex-shrink-0 order-1 md:order-none hidden md:block">
              <Picture></Picture>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left order-2 md:order-none md:-mt-18">
              <Name></Name>
              <About></About>
              <Links></Links>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home




function Name() {
    const audioRef = useRef(new Audio(audioFile));
    const playAudio = () => {
      audioRef.current.play()
    };

    return (
      <div className="text-black font-alexandria font-light">
        <div className="flex items-center justify-center md:justify-start mb-3">
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">/prə-ʃəm-sa/</p>
          <FontAwesomeIcon
            onClick={playAudio}
            icon={faVolumeHigh}
            className="text-sm sm:text-base md:text-lg lg:text-xl mt-1 ml-2 hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"
          />
        </div>
  
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] uppercase -mt-2 md:-mt-4">Prashamsa</h1>
      </div>
    );
  }
  


  function Picture() {

    return (
        <div className='relative'>
            <div className="absolute -top-6 -left-6 md:-top-8 lg:-top-12 md:-left-8 lg:-left-12 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-120 bg-[#012169] z-0"></div>
            <div className="absolute top-4 left-8 sm:top-6 sm:left-10 md:top-6 md:left-12 lg:top-9 lg:left-18 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-120 bg-[#339898] z-0"></div>
            <img src={Headshot} alt="headshot" className='relative h-64 sm:h-72 md:h-80 lg:h-120 z-20'/>
        </div>
    )
  }
  


  function About() {
    return (
      <div className="font-alexandria font-extralight space-y-3 md:space-y-4">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-0">
          <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">ECE + CS Senior at</p>
          <img
            src={DukeLogo}
            className="w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-13 lg:w-36 lg:h-14 xl:w-40 xl:h-16 sm:-mt-2 md:-mt-3 lg:-mt-4"
            alt="Duke University Logo"
          />
        </div>
  
        <div className="space-y-2">
          <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Previous experience at</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
            <img
              src={SiemensLogo}
              className="w-40 sm:w-50 md:w-60 lg:w-70"
              alt="Siemens Logo"
            />
            <img
              src={IntelLogo}
              className="w-16 sm:w-20 md:w-24 lg:w-27"
              alt="Intel Logo"
            />
          </div>
        </div>
      </div>
    );
  }
  

function  Links() {
    return (
        <div className="text-black font-alexandria font-extralight space-y-3">
          <div className='text-base sm:text-lg md:text-xl lg:text-2xl space-y-1'>
          <a target="_blank" rel="noopener noreferrer" href={resume}> <p className='uppercase hover:scale-105 duration-200 ease-in-out'>Resume</p></a>
          <a target="_blank" rel="noopener noreferrer" href='mailto:pkoirala04@gmail.com'> <p className='uppercase hover:scale-105 duration-200 ease-in-out'>Contact</p></a>
          </div>
          <div className='flex gap-4 justify-center md:justify-start'>
          <a className='text-2xl sm:text-3xl lg:text-4xl' target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/prashamsakoirala'><FontAwesomeIcon icon={faLinkedin} className='hover:scale-110 duration-200 ease-in-out' /></a>
          <a className='text-2xl sm:text-3xl lg:text-4xl' target="_blank" rel="noopener noreferrer" href='https://github.com/prashamsakoirala'><FontAwesomeIcon icon={faGithub} className='hover:scale-110 duration-200 ease-in-out'/></a>
          </div>
        </div>
      );
    };