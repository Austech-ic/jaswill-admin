import Image from 'next/image'
import styles from './website.module.css'
import Header from './Home/Header/header'
import SectionTwo from './Home/Sectiontwo/sectiontwo'
import Third from './Home/Third/third'
// import Header from '@/Component/Header/page'
// import Sectiontwo from '@/Component/Sectiontwo/page'
// import Third from '@/Component/Third/page'
// import Four from '@/Component/Four/page'
// import Five from '@/Component/Five/page'
// import Six from '@/Component/Six/page'
// import Seven from '@/Component/Seven/page'
// import Footer from '@/Component/Footer/page'



export default function  Website() {
  return (
    <main className='main'>
      <Header />
      <SectionTwo />
      <Third />
  
   {/* <Header />
    <Sectiontwo />
    <Third />
    <Four />
    <Five />
    <Six />
    <Seven />
    <Footer /> */}

   
   


    </main>
  )
}
