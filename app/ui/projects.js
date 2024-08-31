
import { projects } from "../../data";
import TechnologyCards from "./technologycards"
import Image from "next/image";

export default function Projects() {

  return (
    <div className="my-20">
      <p className="text-center mb-20 text-4xl">Projects</p>
      {
        projects.map((project) => {
          return (
            <div className='flex flex-wrap mb-8 lg:justify-around mx-auto w-4/5' key={project.name}>
              <div className='mb-2'>
                <Image src={project.src} width={200} height={150} alt={`${project.name} image`}/>
              </div>
              <div className='flex flex-col w-full lg:w-1/2 gap-2'>
                <div className='text-lg text-gray-200 '>{project.name}</div>
                <div className='text-gray-500'>{project.description}</div>
                <TechnologyCards technologies={project.technologies} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}