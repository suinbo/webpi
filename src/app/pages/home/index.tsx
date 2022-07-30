import Body from '@/components/containers/body'
import Navigation from '@/components/containers/body/navigation'
import Footer from '@/components/containers/footer'
import Top from '@/components/containers/top'
import React from 'react'
import './style.scss'

const Home = () => {
    return (
        <div id="wrapper">
            <Top/>
            <Navigation/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home