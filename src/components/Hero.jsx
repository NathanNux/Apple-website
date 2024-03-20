import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    //we need a function that handles dynamically the video depending on the screen size
    const hadleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect (() => {
        window.addEventListener('resize', hadleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', hadleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to(
            '#hero',
            { 
                duration: 1,
                delay: 2, 
                y: -10, 
                opacity: 1, 
                ease: 'power4.out' 
            }
        )
        gsap.to('#cta',
            {
                duration: 1,
                delay: 3,
                y: -50,
                opacity: 1,
                ease: 'power4.out'
            }
        )
    }, [])

  return (
    <section id='hero' className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col' >
            <p id='hero' className='hero-title'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'>
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </div>

        <div
            id="cta"
            className="flex flex-col items-center opacity-0 translate-y-20"
        >
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero