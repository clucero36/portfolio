import Image from "next/image"

export default function Example() {
  return (
    <div className="mx-auto pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:py-40 justify-items-center">
      <div className="px-6 lg:px-0 lg:pt-4 content-center">
        <div className="mx-auto max-w-2xl">
          <div className="max-w-lg pr-8">
            <p className="font-bold tracking-tight text-gray-300 text-3xl sm:text-6xl lg:pb-8 pb-4">
              Luis Carlos Lucero
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Software Engineer focusing in web technologies. Currently working with Next.js, Node.js, Firebase, & Python. 
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-500">I have extensive experience in e-commerce and CMS software and I’m actively seeking a role where quality software deliverables are at the forefront of business. I’m keen on taking part in software testing, code reviews, 
              & receiving constructive feedback to produce exceptional enterprise level software.</p>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen align-center">
        <Image src='/Me.jpg' priority width={600} height={600} alt='luis carlos lucero headshot image'/>
      </div>
    </div>
  )
}
