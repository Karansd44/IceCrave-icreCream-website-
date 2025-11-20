import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        });

        parallaxTimeline
            .from('#c-left-leaf', { x: -100, y: 100 })
            .from('#c-right-leaf', { x: 100, y: -100 });

        // Animate list items
        gsap.from('.popular li, .loved li', {
            scrollTrigger: {
                trigger: '.list',
                start: 'top center',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });
    
    return (
        <section id="cocktails" className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" className="opacity-60" />
            <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" className="opacity-60" />

            <div className="list">
                <div className="popular">
                    <h2 className="mb-8 md:mb-10 text-white/90">
                        <span className="text-yellow">●</span> Most popular flavors
                    </h2>
                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="group cursor-pointer">
                                <div className="me-10 sm:me-16 md:me-28 flex-1">
                                    <h3 className="transition-all duration-300 group-hover:text-white">
                                        {name}
                                    </h3>
                                    <p className="text-white/60 text-xs sm:text-sm mt-1">
                                        {country} | {detail}
                                    </p>
                                </div>
                                <span className="text-yellow font-semibold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2 className="mb-8 md:mb-10 text-white/90">
                        <span className="text-yellow">●</span> Most loved sundaes
                    </h2>
                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="group cursor-pointer">
                                <div className="me-10 sm:me-16 md:me-28 flex-1">
                                    <h3 className="transition-all duration-300 group-hover:text-white">
                                        {name}
                                    </h3>
                                    <p className="text-white/60 text-xs sm:text-sm mt-1">
                                        {country} | {detail}
                                    </p>
                                </div>
                                <span className="text-yellow font-semibold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Cocktails