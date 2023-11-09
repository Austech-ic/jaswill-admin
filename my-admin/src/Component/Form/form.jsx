import React from 'react'
import Formheader from './formheader/formheader'
import Formpagetwo from './formpagetwo/formpagetwo'
import Formpagethree from './formpagethree/formpagethree'
import Seven from '../Website/Home/Seven/page'
import Footer from '../Footer/page'
import styles from './form.module.css'



const Sign = () => {
    return(
        <div >
            <Formheader  />
            <Formpagetwo />
            <Formpagethree />
            <Seven />
            <Footer />
        </div>
    )
}


export default Sign;