'use client'
import { useRef } from "react"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VideoScrub = () =>{
    const videoRef = useRef<HTMLVideoElement>(null)
    const parentRef = useRef<HTMLSelectElement>(null)
    
    videoRef.current?.pause()
    // videoRef.current?.currentTime = 0;

    useGSAP(()=>{
        gsap.fromTo(videoRef.current,{
            currentTime: 0,
        },{
            currentTime:100,
            duration:5,
            ease:"none",
            scrollTrigger:{
                trigger:parentRef.current,
                scrub:0.05,
                start:'center center',
                end:'+=300%',
                pin:true,
                pinSpacing:true,
                markers:true
            }
        })
    },[])
    return(
        <section className="h-screen flex justify-center items-center relative" ref={parentRef}>
            <div className="absolute left-1/2 -translate-x-1/2 w-screen h-full object-cover">
                <video src="./test.mp4" ref={videoRef} className="object-cover w-full h-full"></video>
            </div>
        </section>
    )
}

export  default VideoScrub;
