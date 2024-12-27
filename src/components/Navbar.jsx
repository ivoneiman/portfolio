import logo from "../assets/ivoNeimanLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaUpwork } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ivoneiman" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ivoneiman" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ivo.studios/?hl=es" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.upwork.com/freelancers/~0144b56e186e59bb83?mp_source=share" target="_blank" rel="noopener noreferrer">
          <FaUpwork />
        </a>
      </div>
    </nav>
  )
}
export default Navbar
