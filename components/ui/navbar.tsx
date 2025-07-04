import { ArrowUpRight, PackageX } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "./button";

export default function Navbar(){
  return <motion.div initial = {{y:-100}}  animate = {{y:0}}  transition={{duration: 0.7}}

  
   className="fixed top-6 left-0 right-0  bg-white/10 backdrop-blur-xl backdrop-saturate-150  rounded-full flex items-center justify-between min-h-10 max-w-3xl max-sm:mx-5 sm:mx-10 md:mx-auto shadow-md  z-[999] px-5 py-2 text-white
     ">
  <span><PackageX/></span>
  <Button className=" hidden lg:flex lg:bg-white lg:rounded-full  lg:text-black lg:hover:bg-accent lg:cursor-pointer lg:text-md lg:px-2 lg:py-2">Get started <ArrowUpRight/></Button>
  </motion.div>
} 
