import React, { useEffect } from 'react';
import './Style.css'
import pdf from '../../assets/Resume.pdf'
function Home() {

    useEffect(() => {

    }, [])
    return (
        <div className='container'>
            <div className='header'>
                {/* Navbar with anchor links to different pages */}
            </div>

            <div className='body'>
                <div className='bio'>
                    <p className='aboutInfo'>
                        Hi My name is Anthony and i'm a Computer science student at University of Twente, I like to write programs and in
                        my spare time do a bit of Photography and Writing
                    </p>
                </div>

                <div className='resume'>
                    <embed class="pdf" src={pdf} type='application/pdf' width="60%" height="550px" />
                </div>

                <div className='gitRepo'>
            
                </div>

                <div className='imageCarousel'>


                </div>

                <div className='contact'>
                    <p>
                        <a href=''>Instagram</a>
                        <a href=''></a>
                        <a href=''></a>
                        <a href=''></a>
                    </p>

                </div>
            </div>

            <div className='footer'>
                <p> © 2022 Anthony M. Irokosu</p>
            </div>
        </div>
    );

}
export default Home;