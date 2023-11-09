import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signin from '../Component/Auth/Signin/signin'

import Navbar from '@/Component/Navbar/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

  <Signin  />
      
    </div>
  )
}
