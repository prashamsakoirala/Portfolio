import SectionTitle from '../components/SectionTitle.tsx';
import { useState } from 'react';
import { experiences } from '../data/experiences.ts'; // Import your Experience[] array

function Experience() {
    const [activeIndex, setActiveIndex] = useState(0); // use index instead of key
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
            <div className="bg-black text-white min-h-screen flex justify-center items-center p-8 ml-50 mr-50">
                <div className="flex max-w-5xl w-full ml-16">
                    <div className="w-1/3 pr-6">
                        <div className={`transition-all duration-500 ${isTransitioning ? '-translate-x-4 opacity-0' : 'opacity-100'}`}>
                            <h1 className="text-5xl font-bold mb-2">{current.company}</h1>
                            <p className="text-lg">{current.location}</p>
                            <p className="mb-8 text-lg">{current.period}</p>
                        </div>
                        <div className="space-y-2 text-xl text-gray-400">
                            {others.map(o => (
                                <p
                                    key={o.index}
                                    className="cursor-pointer hover:text-white transition"
                                    onClick={() => switchExperience(o.index)}
                                >
                                    {o.company}
                                </p>
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
            </div>
            <div className="absolute bottom-0 left-2">
                <SectionTitle section="experience" />
            </div>
        </section>
    );
}

export default Experience;
