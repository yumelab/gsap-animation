import Image from 'next/image'   

const Hero = () =>{
    return(
        <section className="h-screen flex justify-center items-center relative">
			 <h2 className='text-8xl'>HERO</h2>
             <div>
                <Image/>
             </div>
		</section>  
    )
}

export default Hero