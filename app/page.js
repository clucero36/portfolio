import NavBar from "./ui/navbar";
import Hero from "./ui/hero";
import Technologies from "./ui/technologies";
import Experience from "./ui/experience";
import Projects from "./ui/projects";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] h-fit'>
      <div className='px-8 mx-auto max-w-[1480px]'>
        <NavBar />
        <Hero />
        <div className="relative">
          <div className="w-full border-t border-gray-600" />
        </div>
        <Technologies />
        <div className="relative">
          <div className="w-full border-t border-gray-600" />
        </div>
        <Experience />
        <div className="relative">
          <div className="w-full border-t border-gray-600" />
        </div>
        <Projects />
        <div className="relative">
          <div className="w-full border-t border-gray-600" />
        </div>
        <Contact />
      </div>
    </div>
  )
}
