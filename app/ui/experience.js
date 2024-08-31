
import { experience } from "../../data"
import TechnologyCards from "./technologycards"

export default function Experience() {

  return (
    <div className="my-20">
      <p className="text-center mb-20 text-4xl">Experience</p>
      {
        experience.map((position) => {
          return (
            <div className='flex flex-wrap mb-8 lg:justify-center mx-auto w-4/5' key={position.title}>
              <div className='w-full lg:w-1/3 text-gray-500'>
                {position.duration}
              </div>
              <div className='flex flex-col w-full lg:w-1/2 gap-2'>
                <div className='text-lg text-gray-200'>{position.title}</div>
                <div className='text-gray-500'>{position.description}</div>
                <TechnologyCards technologies={position.technologies} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}