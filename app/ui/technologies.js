import Image from "next/image";

export default function Technologies() {

  return (
    <div className="my-20 px-4">
      <p className="text-center mb-20 text-4xl">Technologies</p>
      <div className='flex flex-wrap mx-auto justify-center gap-16 '>
        <Image src='/nodejs02-svgrepo-com.svg'  width={72} height={72} alt='javascript icon' className="animate-bounce"/>
        <Image src='/react-svgrepo-com.svg' width={72} height={72} alt='react icon' className="animate-bounce sm:animate-[bounce_1s_infinite_100ms]"/>
        <Image src='/nextjs-svgrepo-com.svg' width={72} height={72} alt='next.js icon' className="animate-[bounce_1s_infinite_100ms] sm:animate-[bounce_1s_infinite_150ms]"/>
        <Image src='/firebase-svgrepo-com.svg' width={72} height={72} alt='firebase icon' className="animate-[bounce_1s_infinite_100ms] sm:animate-[bounce_1s_infinite_200ms]"/>
        <Image src='/shopify-svgrepo-com.svg' width={72} height={72} alt='shopify icon' className="animate-[bounce_1s_infinite_150ms] sm:animate-[bounce_1s_infinite_250ms]"/>
        <Image src='/python-svgrepo-com.svg' width={72} height={72} alt='python icon' className="animate-[bounce_1s_infinite_150ms] sm:animate-[bounce_1s_infinite_300ms]"/>
        <Image src='/tailwind-svgrepo-com.svg' width={72} height={72} alt='tailwind icon' className="animate-[bounce_1s_infinite_150ms] sm:animate-[bounce_1s_infinite_350ms]"/>
      </div>
    </div>
  )
}