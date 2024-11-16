'use client'
import { useRef, useState } from "react"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";

import A from '@/assets/14.png'
import B from '@/assets/16.png'
import C from '@/assets/17.png'
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

const Carousel  = () =>{
    const [active,setActive] = useState(0)
    const [images,setImages] = useState([A,B,C])
    const cardsRef = useRef<HTMLDivElement>(null)
    const cards = gsap.utils.toArray(cardsRef.current?.children ?? []) 

    const nextSlide = () => {
        setActive((prevIndex) => (prevIndex + 1) % images.length);   
    };

    const prevSlide = () => {
        setActive((prevIndex) => (prevIndex - 1 + images.length) % images.length);   
    };

    const slideCard = () =>{
        gsap.fromTo(cards[active],{xPercent:0,zIndex:10},{xPercent:0,zIndex:0})
    }

    useGSAP(()=>{ 
        gsap.set(cards,{xPercent:100})
        gsap.set(cards[0],{xPercent:0})
    },[active])

    return(
        <section className="min-h-fit flex flex-col gap-16 py-32 overflow-hidden bg-gray-50">
            <div className="flex gap-8" ref={cardsRef}>
                 {
                    images.map((item,i)=>(
                        <div key={i} className="overflow-hidden rounded-lg">
                            <Image
                                className="w-full h-full"
                                src={item}
                                alt="demo"
                                priority/>
                        </div>
                    ))
                 }
            </div>
            <div className="flex gap-8 ">
                <button onClick={prevSlide} className="rounded-full border py-4 px-16 text-black hover:bg-gray-100 hover:border-transparent uppercase">prev</button>
                <button onClick={nextSlide} className="rounded-full border py-4 px-16 text-black hover:bg-gray-100 hover:border-transparent uppercase">next</button>
            </div>
        </section>
    )
}

export  default Carousel ;
