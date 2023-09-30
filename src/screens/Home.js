import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Crousel from '../components/Crousel'


export default function Home() {
    return (
        <>
            <Navbar></Navbar> 
            <Crousel></Crousel>
            <div className='mt-3'>
            <Card></Card>
            </div>
            
            <Footer></Footer>
        </>
    )
}
