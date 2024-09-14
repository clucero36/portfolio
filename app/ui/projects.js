
import { projects } from "../../data";
import TechnologyCards from "./technologycards"
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  return (
    <div className="my-20">
      <p className="text-center mb-20 text-4xl">Projects</p>
      {
        projects.map((project) => {
          return (
            <div className='flex flex-wrap mb-8 lg:justify-center mx-auto w-4/5 lg:w-full' key={project.name}>
              <div className='mb-2 w-full lg:w-1/3 mt-1'>
                <Image src={project.src} width={200} height={150} alt={`${project.name} image`}/>
              </div>
              <div className='flex flex-col w-full lg:w-1/2 gap-2'>
                <Link href={project.link} target='_blank'>
                  <div className='text-lg text-gray-200 hover:text-emerald-600'>{project.name}</div>
                </Link>
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