import React from 'react'
import Navbar from '../../Navbar/navbar'
import Header from '../../Header/pages'
import Footer from '../../Footer/footer'
import SignIn from '../Signin/signin'
import SignUp from '../../SignUp/signup'

const page = () => {
  return (
    <div>
      {/* <Header />
      <Navbar /> */}
      <SignUp />
      <Footer />
    </div>
  )
}

export default page