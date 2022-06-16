import React from 'react';
import DesktopLandingPage from '../../Components/LandingPage/desktopView'
import MobileLandingPage from '../../Components/LandingPage/mobileView'

const Landingpage = () => {
    return (
        <>
        <div className='bg-[#208458] md:flex flex-col hidden'>
            <DesktopLandingPage/>
        </div>
        <div className='bg-[#208458] md:hidden flex'>
            <MobileLandingPage/>
        </div>
        </>
    );
}

export default Landingpage;
