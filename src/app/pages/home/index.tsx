import Body from '@/components/containers/body'
import Footer from '@/components/containers/footer'
import React from 'react'
import './style.scss'

const Home = () => {
    return (
        <div id="wrapper" className="fade-in">
            {/* <div id="intro" className="hidden"> */}
            <div id="intro" className="">
                <h1>THIS IS <br/>MINITEST</h1>
                <p></p>
                <ul className="actions">
                    <li><a href="#header" className="">Continue</a></li>
                </ul>
            </div>

            <nav id="nav">
                <ul className="links">
                    <li className="active"><a href="index.html">This is Massively</a></li>
                    <li><a href="generic.html">Generic Page</a></li>
                    <li><a href="elements.html">Elements Reference</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                </ul>
            </nav>

            <Body/>
            <Footer/>
        </div>
    )
}

export default Home