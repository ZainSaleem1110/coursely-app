import React from 'react';
import Logo from '../../assets/images/logo.svg'
import Flag from '../../assets/images/flag.svg'
import Subject from '../../assets/images/subject.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiUserPlus } from 'react-icons/bi'

const Mobileview = () => {
    return (
        <div className='w-[100%] overflow-x-hidden'>
            <div className='relative h-auto pb-3'>
                <div className='flex w-[40px] justify-between absolute top-0 left-0'>
                    <div className='h-[457px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                    <div className='h-[380px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                    <div className='h-[300px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                    <div className='h-[200px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                    <div className='h-[100px] w-[1px] bg-[#FFFFFF] opacity-25'></div>
                </div>
                <div className='pt-10 pb-5 sm:flex flex-none justify-between px-3'>
                    <img src={Logo} alt="" />
                    <div className='flex sm:mt-0 mt-8'>
                        <button className='w-[48px] h-[48px] border border-white rounded-md flex justify-center items-center sm:order-1 order-2 sm:mr-5 mr-0 sm:ml-0 ml-5'>
                            <img src={Flag} alt="" />
                        </button>
                        <button className='w-[263px] h-[48px] border border-white rounded-md flex justify-center items-center text-white sm:order-2 order-1'>
                            Sign in
                        </button>
                    </div>
                </div>
                <p className='text-white mt-5 text-xl px-3'>Coursely connects adjunct teachers with programme managers at some of Europe’s most prestigious higher education institutions.</p>
                <div className='flex h-[48px] border rounded-md mt-10 mx-3'>
                    <button className='bg-white text-[14px] w-[50%] text-[#208458] rounded-l-md '>Freelance lecturer</button>
                    <button className='w-[50%] text-[14px] text-white rounded-r-md'>Course manager</button>
                </div>
                <div className='w-[100%] h-[50vh] flex lg:mt-0 mt-10'>
                    <div className='w-[100%] h-[100%] girlImgMob flex flex-col items-center justify-between '>
                        <div className='w-[170px] py-2 border rounded-md px-2 flex flex-col justify-center text-white mt-[8%] ml-[-40%]'>
                            <h4>Mila Krusovic</h4>
                            <p className='text-[12px]'>Customer service coach</p>
                        </div>
                        <div className='w-[80%] border rounded-md px-2 py-3 text-white mb-10'>
                            <p className='text-[13px]'>I use Coursely to help me find new opportunities to teach that allow me to explore my passions</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between mt-10 px-3'>
                    <p className='text-white pr-[7%] text-[18px]'>Use the search bar below to see what fantastic vacancies we have to offer.</p>
                    <div className='relative h-[40px] border mt-5 rounded-md flex items-center'>
                        <input type="text" className='text-[14px] w-[92%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='What subject?' />
                        <img src={Subject} alt="" />
                    </div>
                    <div className='relative h-[40px] border mt-5 rounded-md flex items-center'>
                        <input type="text" className='text-[14px] w-[90%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='Where?' />
                        <HiOutlineLocationMarker className='text-white' />
                    </div>
                    <div className='relative h-[40px] mt-5 rounded-md flex items-center bg-black opacity-50 focus:bg-white'>
                        <input type="text" className='text-[14px] w-[90%] focus:outline-none pl-3 text-white' style={{ background: "transparent" }} placeholder='Search' />
                        <button>
                            <AiOutlineSearch className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='h-[40px] mt-10'>
                    <div className='h-[1px] w-[10%] bg-[#FFFFFF] opacity-25'></div>
                    <div className='h-[1px] w-[25%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                    <div className='h-[1px] w-[50%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                    <div className='h-[1px] w-[75%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                    <div className='h-[1px] w-[100%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                    <div className='h-[1px] w-[100%] bg-[#FFFFFF] opacity-25 mt-2'></div>
                </div>
                <div className='flex flex-col items-center mt-8 w-[100%]'>
                    <p className='text-white'>Universities we work with</p>
                    <div className='flex sm:gap-5 gap-2 mt-5'>
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
                <div className='mt-7 flex flex-col items-center'>
                    <div className='w-[100%] pl-8 z-40 pb-5'>
                        <p className='text-white w-[70%] text-left'>Simply create a profile and you can begin applying to a variety of opportunities that suit your skillset and availability.</p>
                    </div>
                    <div className='rotateImgMob h-[320px] rotateImg mr-[10%] sm:mt-[-0%] mt-[-7%] z-30'></div>
                    <div className='w-[270px] h-[40px] mt-[-6%] z-50 rounded-md px-3 flex items-center justify-between bg-black'>
                        <button className='text-[14px] flex justify-start text-white' style={{ background: "transparent" }} >
                            Become a freelance lecturer
                        </button>
                        <button>
                            <BiUserPlus className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between px-6 mt-20 text-white'>
                    <p>© Coursely 2022</p>
                    <p>About</p>
                </div>

            </div>
        </div>
    );
}

export default Mobileview;
