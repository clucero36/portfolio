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
              Software Developer focusing in web technologies. Currently working with TypeScript, Node.js, Google Cloud Platform, & React. 
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-500">I have experience developing software across various industries, including digital services, e-commerce, 
              and real estate. I’m passionate about building clean, maintainable, and scalable solutions that enhance business insights and optimize processes for end users.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:max-w-2xl lg:mx-0 lg:mt-0 px-6 lg:px-0 align-center">
        <Image className="hidden sm:inline" src='/Me.jpg' priority width={500} height={600} alt='luis carlos lucero headshot image'/>
      </div>
    </div>
  )
}
