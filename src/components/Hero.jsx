import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/ivoNeimanProfile.png"
const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-4
                lg:text-8xl">Ivo Neiman</h1>
                <span className="bg-gradient-to-r from-green-950 via-slate-500 to-yellow-300 bg-clip-text text-3xl tracking-tight 
                text-transparent">Web Designer & Java Developer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}</p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img className="rounded-2xl"src={profilePic} alt="Ivo Neiman" />
            </div>
        </div>
    </div>
  </div>
}

export default Hero