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
       <div className="flex items-center justify-center min-h-screen pt-16 ml-25">
          <div className="flex items-center justify-center gap-40 max-w-6xl mx-auto px-4">
            <div className="flex-shrink-0">
              <Picture></Picture>
            </div>
            
            <div className="flex flex-col gap-6 -mt-18">
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
        <div className="flex">
          <p className="text-[20px]">/prə-ʃəm-sa/</p>
          <FontAwesomeIcon
            onClick={playAudio}
            icon={faVolumeHigh}
            className="fa-xl mt-1 ml-2 hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"
          />
        </div>
  
        <h1 className="text-[60px] uppercase -mt-4">Prashamsa</h1>
      </div>
    );
  }
  


  function Picture() {

    return (
        <div className='relative'>
            <div className="absolute -top-12 -left-12 w-80 h-120 bg-[#012169] z-0"></div>
            <div className="absolute top-9 left-18 w-80 h-120 bg-[#339898] z-0"></div>
            <img src={Headshot} alt="headshot" className='relative h-120 z-20'/>
        </div>
    )
  }
  


  function About() {
    return (
      <div className="font-alexandria font-extralight space-y-4">
        <div className="flex flex-wrap items-center">
          <p className="text-black text-4xl">ECE + CS Senior at</p>
          <img
            src={DukeLogo}
            className="w-40 h-16 -mt-4"
            alt="Duke University Logo"
          />
        </div>
  
        <div>
          <p className="text-black text-4xl">Previous experience at</p>
          <div className="flex flex-wrap gap-4">
            <img
              src={SiemensLogo}
              className="w-70"
              alt="Siemens Logo"
            />
            <img
              src={IntelLogo}
              className="w-27"
              alt="Intel Logo"
            />
          </div>
        </div>
      </div>
    );
  }
  

function  Links() {
    return (
        <div className="text-black space-x-4 font-alexandria font-extralight space-y-2">
          <div className='text-2xl'>
          <a target="_blank" rel="noopener noreferrer" href={resume}> <p className='uppercase hover:scale-105 duration-200 ease-in-out'>Resume</p></a>
          <a target="_blank" rel="noopener noreferrer" href='mailto:pkoirala04@gmail.com'> <p className='uppercase hover:scale-105 duration-200 ease-in-out'>Contact</p></a>
          </div>
          <div className='flex gap-4'>
          <a className='text-4xl' target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/prashamsakoirala'><FontAwesomeIcon icon={faLinkedin} className='hover:scale-110 duration-200 ease-in-out' /></a>
          <a className='text-4xl' target="_blank" rel="noopener noreferrer" href='https://github.com/prashamsakoirala'><FontAwesomeIcon icon={faGithub} className='hover:scale-110 duration-200 ease-in-out'/></a>
          </div>
        </div>
      );
    };