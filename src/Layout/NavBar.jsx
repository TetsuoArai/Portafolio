import { useState } from "react"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "../utils/ScrollToSection"

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (section) => {
    scrollToSection(section)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="w-full h-16 fixed top-0 left-0 bg-transparent/30 backdrop-blur-md z-50">
        <div className="text-white font-bold h-full flex justify-between items-center px-4 py-2">
          <h1 className="cursor-pointer text-2xl">TetsuoArai</h1>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("start")}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Habilidades
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
          <button
            onClick={() => handleNavClick("start")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer text-xl"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer text-xl"
          >
            Proyectos
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer text-xl"
          >
            Habilidades
          </button>
        </div>
      </div>
    </>
  )
}
