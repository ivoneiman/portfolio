import { BiLogoWordpress, BiLogoJava } from "react-icons/bi";
import { SiElementor, SiHtml5, SiCss3  } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoWordpress className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiElementor className="text-7xl text-pink-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoJava className="text-7xl text-red-600" /> {/* Icono de Java */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-cyan-400" />
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
