import Clock from "@/components/ui/date";
import Hero from "@/components/ui/hero";
import * as motion from "motion/react-client";


export default function Home() {

  return (
    <div  className=" w-full min-h-screen dark-grid-bg bg-cover bg-center text-white ">

     <Hero />
       <motion.div initial ={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1}} className=" flex justify-center pb-20 mx-5 ">
        <motion.img initial = {{opacity: 0,filter:("blur(10px)")}} animate={{opacity:1,filter:("blur(0px)")}} transition={{duration:0.8}} className="lg:h-[500px] lg:w-[700px] rounded-full    lg:rounded-xl border-1 border-gray-500 mt-10" src="https://i.pinimg.com/736x/65/8b/fb/658bfb420dccf2d0d3e908337c2a68da.jpg"></motion.img>
        
        
    </motion.div >
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.2}}> 

    
       <div className="flex lg:justify-between mx-15 p-5 border-t-3 justify-center pb-10">
       <span className=" hidden lg:font-lg lg:font-semibold">Made by Shadow</span>
       <span className="border-b-1 lg:ml-auto font-bold ">Peace out.</span>
       </div>
     </motion.div>
  
       


    </div>
  )
}

