import Image from "next/image"

export default function Example() {
  return (
    <div className="mx-auto my-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:py-10 justify-items-center">
      <div className="px-6 lg:px-0 content-center">
        <div className="mx-auto max-w-2xl">
          <div className="max-w-lg pr-0 lg:pr-8">
            <p className="font-bold tracking-tight text-gray-300 text-3xl sm:text-6xl lg:pb-8 pb-4">
              Luis Carlos Lucero
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Software Engineer focusing in web technologies. Currently working with TypeScript, Next.js, Firebase, & Python. 
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-500">I have extensive experience in e-commerce and CMS software and I’m actively seeking a role where quality software deliverables are at the forefront of business. I’m keen on taking part in software testing, code reviews, 
              & receiving constructive feedback to produce exceptional enterprise level software.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:max-w-2xl lg:mx-0 lg:mt-0 px-6 lg:px-0 align-center">
        <Image className="hidden sm:inline" src='/Me.jpg' priority width={500} height={600} alt='luis carlos lucero headshot image'/>
      </div>
    </div>
  )
}
