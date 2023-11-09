import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../Component/Layouts/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout />
    </div>
  )
}
