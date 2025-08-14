import SectionTitle from '../components/SectionTitle.tsx';
import { useState } from 'react';
import { experiences } from '../data/experiences.ts';

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const current = experiences[activeIndex];
  const others = experiences
    .map((p, i) => ({ ...p, index: i }))
    .filter(p => p.index !== activeIndex);
  
  const switchExperience = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="bg-black min-h-screen w-full relative">
      <div className="bg-black text-white min-h-screen flex justify-center items-center p-4 md:p-8 md:ml-50 md:mr-50">
        <div className="hidden md:flex max-w-5xl w-full ml-16">
          <div className="w-1/3 pr-6">
            <div className={`transition-all duration-500 ${isTransitioning ? '-translate-x-4 opacity-0' : 'opacity-100'}`}>
              <h1 className="text-5xl font-bold mb-2">{current.company}</h1>
              <p className="text-lg">{current.location}</p>
              <p className="mb-8 text-lg">{current.period}</p>
            </div>
            <div className="space-y-4 text-gray-400">
              {others.map(o => (
                <div
                  key={o.index}
                  className="cursor-pointer hover:text-white transition"
                  onClick={() => switchExperience(o.index)}
                >
                  <p className="text-xl font-semibold">{o.company}</p>
                  <p className="text-sm">{o.location}</p>
                  <p className="text-sm">{o.period}</p>
                  <p className="text-sm text-gray-500">{o.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className={`transition-all duration-500 ${isTransitioning ? 'translate-x-4 opacity-0' : 'opacity-100'}`}>
              <h2 className="text-3xl font-bold mb-6">{current.role}</h2>
              <ul className="space-y-3 text-lg">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">•</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full max-w-lg">
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'} mb-8`}>
            <h1 className="text-3xl font-bold mb-2 text-left">{current.company}</h1>
            <p className="text-lg text-left">{current.location}</p>
            <p className="text-lg text-left mb-4">{current.period}</p>
            <h2 className="text-xl font-bold text-left">{current.role}</h2>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 text-left mb-4">Other Experiences</h3>
            {others.map(o => (
              <div
                key={o.index}
                className="cursor-pointer hover:bg-gray-900 p-3 rounded transition text-left"
                onClick={() => switchExperience(o.index)}
              >
                <p className="font-bold text-white">{o.company}</p>
                <p className="text-gray-400">{o.location}</p>
                <p className="text-gray-400">{o.period}</p>
                <p className="text-gray-300">{o.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-0 left-2 hidden md:block">
        <SectionTitle section="experience" />
      </div>
    </section>
  );
}

export default Experience;