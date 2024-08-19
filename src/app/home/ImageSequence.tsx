'use client'
import { useRef } from "react"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = () =>{
    return(
        <section className="h-screen flex justify-center items-center relative bg-green-200">
        </section>
    )
}

export  default ImageSequence;
