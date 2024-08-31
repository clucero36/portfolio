
import { Gi3dStairs } from "react-icons/gi";
import Image from "next/image";

export default function Technologies() {

  return (
    <div className="my-20">
      <p className="text-center mb-20 text-4xl">Technologies</p>
      <div className='flex flex-wrap mx-auto justify-center gap-16'>
        <Image src='/nodejs02-svgrepo-com.svg'  width={72} height={72} alt='javascript icon'/>
        <Image src='/react-svgrepo-com.svg' width={72} height={72} alt='react icon'/>
        <Image src='/nextjs-svgrepo-com.svg' width={72} height={72} alt='next.js icon'/>
        <Image src='/firebase-svgrepo-com.svg' width={72} height={72} alt='firebase icon'/>
        <Image src='/shopify-svgrepo-com.svg' width={72} height={72} alt='shopify icon'/>
        <Image src='/python-svgrepo-com.svg' width={72} height={72} alt='python icon'/>
        <Image src='/tailwind-svgrepo-com.svg' width={72} height={72} alt='tailwind icon'/>
      </div>
    </div>
  )
}