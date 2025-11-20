import React, { useRef, useState } from 'react'
import { allCocktails as allIceCreams } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => { 

    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(()=>{
         const parallaxTimeline =  gsap.timeline({
            scrollTrigger:{
                trigger:"#menu",
                start:'top 30%',
                end :'bottom 80%',
                scrub:true,
            }
        })

        parallaxTimeline
        .from('#m-left-leaf',{x:-100 ,y :100})
        .from('#m-right-leaf',{x:100 ,y :-100})

        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1});
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100} ,{
            xPercent:0,opacity:1,duration:1,ease:'power1.inOut'
        })
        gsap.fromTo('.details h2',{yPercent:100, opacity:0},{yPercent:0, opacity:100,ease:'power1.inOut'})
        gsap.fromTo('.details p',{yPercent:100, opacity:0},{yPercent:0, opacity:100,ease:'power1.inOut'})

    },[currentIndex])

    const totalIceCreams = allIceCreams.length;
    
    const gotoSlide = (index) =>{
        const newIndex = (index + totalIceCreams) % totalIceCreams;
        setCurrentIndex(newIndex);
    }
    
    const getIceCreamAt=(indexOffset)=>{
        return allIceCreams[(currentIndex + indexOffset + totalIceCreams) % totalIceCreams];
    }

    const currentIceCream = getIceCreamAt(0);
    const previousIceCream = getIceCreamAt(-1);
    const nextIceCream = getIceCreamAt(1);



  return (
    <section id="menu" aria-labelledby ="menu-heading">
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />


        <h2 id="menu-heading" className='sr-only'>
            Ice Cream Menu
        </h2>
        		<nav className="cocktail-tabs" aria-label="Flavor Navigation">
            {allIceCreams.map((iceCream,index) =>{
                const isActive = index === currentIndex;

                return(
                    <button key={iceCream.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                    
                    onClick={()=> gotoSlide(index)}>
                    {iceCream.name}

                    </button>
                )
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button 
                    className="text-left group transition-all duration-300" 
                    onClick={() => gotoSlide(currentIndex - 1)}
                    aria-label={`Previous flavor: ${previousIceCream.name}`}
                >
                    <span className="group-hover:opacity-80 transition-opacity">
                        {previousIceCream.name}
                    </span>
                    <img 
                        src="/images/right-arrow.png" 
                        alt="" 
                        aria-hidden="true"
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </button>

                <button 
                    className="text-right group transition-all duration-300" 
                    onClick={() => gotoSlide(currentIndex + 1)}
                    aria-label={`Next flavor: ${nextIceCream.name}`}
                >
                    <span className="group-hover:opacity-80 transition-opacity">
                        {nextIceCream.name}
                    </span>
                    <img 
                        src="/images/left-arrow.png" 
                        alt="" 
                        aria-hidden="true"
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                </button>
            </div>

            <div className="cocktail">
                <img 
                    src={currentIceCream.image} 
                    alt={currentIceCream.name} 
                    className='object-contain transition-opacity duration-500'
                />
            </div>

            <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p className="text-white/60 text-sm sm:text-base uppercase tracking-wider mb-2">Flavor</p>
                    <p id="title" className="leading-tight">{currentIceCream.name}</p>
                </div>

                <div className="details">
                    <h2 className="leading-tight mb-3 sm:mb-4">{currentIceCream.title}</h2>
                    <p className="text-white/80 leading-relaxed">{currentIceCream.description}</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Menu