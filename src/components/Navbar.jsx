import logo from "../assets/ivoNeimanLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaUpwork} from "react-icons/fa6"


const Navbar = () => {
  return <nav className="mb-2 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaUpwork />
        </div>
    </nav>
}
export default Navbar