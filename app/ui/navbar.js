import Image from "next/image";
import Link from "next/link";
import { Gi3dStairs } from "react-icons/gi";

export default function NavBar() {

  return (
    <div className='flex items-center justify-between mx-auto py-10 mb-8'>
      <Gi3dStairs className='h-[30px] w-[30px]'/>
      <div className='flex gap-8'>
        <Link href='https://github.com/clucero36' target='_blank' >
          <Image src='/github-mark-white.svg' width={30} height={30} alt='github icon' />
        </Link>
        <Link href='https://www.linkedin.com/in/luisclucero/' target='_blank' >
          <Image src='/linkedin-svgrepo-com.svg' width={30} height={30} alt='linkedin icon' />
        </Link>
      </div>
    </div>
  )
}