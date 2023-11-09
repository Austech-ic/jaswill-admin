import React from 'react'
import Signheader from './signheader.jsx/signheader'
import Signpagetwo from './signpagetwo/signpagetwo'
import Signpagethree from './signpagethree/signpagethree'
import Signpagefour from './signpagefour/signpagefour'
import Seven from '../../Component/Website/Home/Seven/page'
import Footer from '../Footer/page'
import styles from './sign.module.css'



const Sign = () => {
    return(
        <div >
            <Signheader  />
            <Signpagetwo />
            <Signpagethree />
            <Signpagefour />
            <Seven />
            <Footer />
        </div>
    )
}


export default Sign;