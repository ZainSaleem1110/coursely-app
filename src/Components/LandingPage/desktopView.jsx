import React from 'react';
import Logo from '../../assets/images/logo.svg'
import Flag from '../../assets/images/flag.svg'
import Subject from '../../assets/images/subject.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {BiUserPlus} from 'react-icons/bi'

const Desktopview = () => {
    return (
        <>
            <div className='lg:px-10 px-5'>
                <div className='lg:px-10 px-7 relative h-auto pb-3'>
                    <div className='flex w-[40px] justify-between absolute top-0 left-0'>
                        <div className='h-[457px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                        <div className='h-[380px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                        <div className='h-[300px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                        <div className='h-[200px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                        <div className='h-[100px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                    </div>
                    <div className='ml-[-3%]'>
                        <div className='pt-10 pb-5 flex justify-between'>
                            <img className='' src={Logo} alt="" />
                            <div className='flex'>
                                <button className='w-[48px] h-[48px] border border-white rounded-md flex justify-center items-center'>
                                    <img src={Flag} alt="" />
                                </button>
                                <button className='w-[263px] h-[48px] border border-white rounded-md flex justify-center items-center ml-3 text-white'>
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div className='w-[100%] lg:flex block justify-between'>
                            <div className='lg:w-[30%] w-[100%] lg:text-2xl text-xl pt-20 lg:block flex justify-between lg:gap-0 gap-10'>
                                <p className='text-white lg:w-[100%] w-[60%]'>Coursely is a brand new platform that aims to connect adjunct faculty with programme managers at some of Europe’s most prestigious higher education institutions.</p>
                                <div className='lg:mt-20 mt-0'>
                                    <p className='text-white'>Universities we work with</p>
                                    <div className='flex gap-5 mt-5'>
                                        <div className='w-[96px] h-[96px] border rounded-md bg-[#208458] p-2'>
                                            <p className='text-[12px] text-white leading-5'>University Corporation Logotype</p>
                                        </div>
                                        <div className='w-[96px] h-[96px] border rounded-md bg-[#208458] opacity-50 p-2'>
                                            <p className='text-[12px] text-white leading-5'>University Corporation Logotype</p>
                                        </div>
                                        <div className='w-[96px] h-[96px] border rounded-md bg-[#208458] opacity-25 p-2'>
                                            <p className='text-[12px] text-white leading-5'>University Corporation Logotype</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[70%] w-[100%] h-[50vh] flex lg:mt-0 mt-10'>
                                <div className='w-[100%] h-[100%] girlImg'>
                                    <div className='w-[200px] h-[56px] border rounded-md px-5 flex flex-col justify-center text-white mt-[8%] ml-[4%]'>
                                        <h4>Mila Krusovic</h4>
                                        <p className='text-[12px]'>Customer service coach</p>
                                    </div>
                                    <div className='w-[327px] h-[84px] border rounded-md px-5 pt-3 text-white ml-[30%] mt-[1%]'>
                                        <p className='text-[13px]'>I use Coursely to help me find new opportunities to teach that allow me to explore my passions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[1px] bg-white opacity-30'></div>
            <div className='flex w-[100%] lg:gap-20 gap-[15%] pl-10 mt-10 pb-5'>
                <div className='w-[30%] flex flex-col justify-between'>
                    <p className='text-white pr-[7%] text-[18px]'>Use the search bar below to see what fantastic vacancies we have to offer.</p>
                    <div className='relative w-[327px] h-[40px] border mt-5 rounded-md flex items-center'>
                        <input type="text" className='text-[14px] w-[92%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='What subject?' />
                        <img src={Subject} alt="" />
                    </div>
                    <div className='relative w-[327px] h-[40px] border mt-5 rounded-md flex items-center'>
                        <input type="text" className='text-[14px] w-[90%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='Where?' />
                        <HiOutlineLocationMarker className='text-white' />
                    </div>
                    <div className='relative w-[327px] h-[40px] mt-5 rounded-md flex items-center bg-black opacity-50 focus:bg-white'>
                        <input type="text" className='text-[14px] w-[90%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='Search' />
                        <button>
                            <AiOutlineSearch className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='w-[65%] pl-5 flex flex-col justify-between'>
                    <div className='flex w-[327px] h-[48px] border rounded-md'>
                        <button className='bg-white text-[14px] w-[50%] text-[#208458] rounded-l-md '>Freelance lecturer</button>
                        <button className='w-[50%] text-[14px] text-white rounded-r-md'>Course manager</button>
                    </div>
                    <p className='text-[13px] mt-8 text-[18px] text-white lg:w-[40%] w-[90%]'>Simply create a profile and you can begin applying to a variety of opportunities that suit your skillset and availability.</p>
                    <div className='relative w-[327px] h-[40px] mt-10 rounded-md flex items-center bg-black'>
                        <button className='text-[14px] w-[90%] flex justify-start pl-3 text-white' style={{ background: "transparent" }} >
                            Become a freelance lecturer
                        </button>
                        <button>
                            <BiUserPlus className='text-white' />
                        </button>
                    </div>
                </div>
            </div>
                <div className='h-[40px] mt-7'>
                <div className='h-[1px] w-[5%] bg-[#FFFFFF] opacity-25'></div>
                <div className='h-[1px] w-[10%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                <div className='h-[1px] w-[15%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                <div className='h-[1px] w-[20%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                <div className='h-[1px] w-[25%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                <div className='h-[1px] w-[30%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                </div>
                <div className='mt-5 flex justify-end px-10 py-5 text-white'>
                <p>About <span className='ml-7'>© Coursely 2022</span></p>
                </div>
        </>
    );
}

export default Desktopview;
