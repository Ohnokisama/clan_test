import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import Person from "../assets/person2.jpg";
import Person2 from "../assets/person1.jpg";
import Person3 from "../assets/person3.jpg";
import BG from "../assets/bg.jpg";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState(window.innerWidth >= 768);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [visible, setVisible] = useState(false);

  const navItems = [
    { icon: <i className='ri-line-chart-line'></i>, label: "Overview", to: '/dashboard' },
    { icon: <i className='ri-goblet-line'></i>, label: "Detty December", to: '/users' },
    { icon: <i className='ri-flight-takeoff-line'></i>, label: "Flights", to: '/saving-plans' },
    { icon: <i className='ri-car-line'></i>, label: "Rides", to: '/withdrawals' },
    { icon: <i className='ri-bus-line'></i>, label: "Bus & Transits", to: '/wallets' },
    { icon: <i className='ri-wallet-line'></i>, label: "Wallet", to: '/transactions' },
    { icon: <i className='ri-group-line'></i>, label: "My Staff", to: '/transactions' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
        setMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const sidebarWidth = collapsed ? "w-16" : "w-64";

  return (
    <div className="h-screen bg-lightBG flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      <div
        className={`
          fixed md:relative top-0 left-0 z-50 h-full flex flex-col justify-between
          bg-white md:bg-[var(--darkBG)]
          px-3 py-4 rounded-xl transition-all duration-300
          ${sidebarWidth}
          ${isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-[110%]") : "translate-x-0"}
        `}
      >
        <div className="flex flex-col gap-4">
          <div className={`flex items-center ${collapsed ? "flex-col justify-center" : "flex-row justify-between"} px-2`}>
            <h1 className="text-4xl text-[var(--accent)]">L{collapsed ? "" : "uncs"}</h1>
            {!isMobile && (
              <i
                className="ri-side-bar-line p-2 bg-white rounded-full cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
              ></i>
            )}
            {isMobile && (
              <i
                className="ri-close-line text-xl p-2 bg-gray-200 rounded-full cursor-pointer"
                onClick={() => setMobileOpen(false)}
              ></i>
            )}
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={`
                  flex items-center gap-4
                  py-3 px-4 rounded-lg cursor-pointer 
                  transition-all text-black md:text-white 
                  hover:bg-[var(--accent)] hover:text-white
                  ${collapsed ? 'justify-center' : ''}
                `}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          className={`
            flex items-center gap-4 
            ${collapsed ? "justify-center p-2" : "p-4"} 
            bg-red-500 text-white rounded-lg
          `}
        >
          <i className="ri-logout-circle-line"></i>
          {!collapsed && "Logout"}
        </button>
      </div>
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <header className="md:hidden flex justify-between items-center mb-4">
          <h1 className='text-4xl text-[var(--darkBG)]'>Luncs</h1>
          <i
            className="ri-menu-2-line p-2 bg-gray-200 rounded-lg"
            onClick={() => setMobileOpen(true)}
          ></i>
        </header>
        <header className="hidden md:flex justify-between items-center p-3 bg-white rounded-xl mb-4">
          <h1 className='text-2xl text-[var(--darkBG)] font-light'>Welcome to your dashboard</h1>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <i className="ri-notification-line text-xl"></i>
              <span className="p-[2px] bg-red-500 rounded-full text-xs text-white absolute top-[-5px] right-[-7px]">10</span>
            </div>
            <p className="font-semibold">Hi, Jephthah</p>
          </div>
        </header>
        <div className="rounded-xl bg-white flex-1 flex flex-col md:flex-row gap-8 p-6 overflow-y-auto">
          <div className="md:basis-2/3 flex flex-col md:flex-row gap-4">
            <div className='basis-full md:basis-1/2 flex flex-col gap-4'>
              <Card className={'bg-blue-100/30'}>
                <p className="text-[var(--grey)]">Connect team</p>
                <p className="text-xl mb-3">Share connection link</p>
                <button className='py-3 px-6 bg-[var(--darkBG)] text-white rounded-md'>
                  Copy connection link <i className="ri-file-copy-line"></i>
                </button>
              </Card>
              <Card className={'!p-0'}>
                <div className="p-4 border-b border-slate-300">
                  <div className="flex justify-between mb-3">
                    <div className="py-2 flex gap-1 items-center">
                      <i className="ri-list-unordered"></i>
                      <span>Trips</span>
                    </div>
                    <select name="dropdown" id="" className='px-3 py-3 bg-slate-100 border border-slate-200 rounded-lg'>
                      <option value="flights">Flights</option>
                      <option value="trips">Trips</option>
                      <option value="bookings">Bookings</option>
                    </select>
                  </div>
                  <Card className={'mb-3'}>
                    <p className='text-xl'>
                      LOS <i className="ri-arrow-right-line text-[var(--accent)]"></i> ABV
                    </p>
                    <p className='text-[var(--grey)] my-3'>
                      Booked by Nebechi Chukwudum <br />
                      31st October, 2025
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-green-500">Upcoming</p>
                      <button className='py-2 px-4 border-2 border-slate-300 rounded-lg'>
                        View Trips
                      </button>
                    </div>
                  </Card>
                  <Card className={'bg-purple-100'}>
                    <div className="flex items-center">
                      <div className="flex">
                        <div className="w-[40px] aspect-square border-2 border-purple-700 rounded-full">
                          <img src={Person} className='w-full h-full object-cover rounded-full' alt="" />
                        </div>
                        <div className="w-[40px] aspect-square bg-white border-2 border-purple-700 rounded-full flex justify-center items-center relative left-[-15px]">
                          <p>+7</p>
                        </div>
                      </div>
                      <p>also booked for you</p>
                    </div>
                  </Card>
                </div>
                <div className="p-6">
                  <div className="flex gap-1 items-center">
                    <p>View all trips</p>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Card>
            </div>
            <div className='basis-full md:basis-1/2 flex flex-col gap-4'>
              <Card className={'bg-pink-100'}>
                <p className='text-[var(--grey)]'>Wallet Balance</p>
                <div className="flex justify-between my-2">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-3xl font-bold"><span className='line-through'>N</span>{ visible ? '200000' : '******' }</h2>
                    <i className="ri-eye-line" onClick={() => setVisible(!visible)}></i>
                  </div>
                  <div className="w-[30px] aspect-square bg-blue-300 flex justify-center items-center">
                    <i className="ri-arrow-right-up-line text-xl"></i>
                  </div>
                </div>
                <p className="text-[var(--grey)]">You last spent <span className='line-through'>N</span>8,000 on booked Bolt ride</p>
                <div className="mt-4 flex gap-4 items-center">
                  <button className='py-3 px-6 bg-pink-800 text-white rounded-md'>
                    <i className="ri-bank-line"></i> **** 029762 <i className="ri-arrow-right-line"></i>
                  </button>
                  <button className='py-2 px-4 border-2 border-pink-700 rounded-lg'>
                    <i className="ri-refresh-line text-xl font-bold text-pink-700"></i>
                  </button>
                </div>
              </Card>
              <Card className={'bg-slate-100 py-10'}>
                <Card className={'bg-white'}>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-1/2">
                      <div className="w-1/2 p-1 mb-2 bg-slate-300 rounded-full"></div>
                      <div className="p-1 bg-slate-100 rounded-full"></div>
                    </div>
                    <div className="flex relative right-[-20px]">
                      <div className="w-[40px] aspect-square border-2 border-purple-700 rounded-full">
                        <img src={Person} className='w-full h-full object-cover rounded-full' alt="" />
                      </div>
                      <div className="w-[40px] aspect-square bg-white border-2 border-purple-700 rounded-full flex justify-center items-center relative left-[-15px]">
                        <img src={Person2} className='w-full h-full object-cover rounded-full' alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">You have not created a request yet</p>
                    <p className="text-[var(--grey)]">When you create one, it will show up here for easy tracking</p>
                  </div>
                </Card>
              </Card>
              <Card className={'flex justify-between items-center'}>
                <div className="flex gap-1 items-center">
                  <p>Start a booking request now</p>
                  <i className="ri-arrow-right-line"></i>
                </div>
                <select name="dropdown" id="" className='px-3 py-3 bg-slate-100 border border-slate-200 rounded-lg'>
                  <option value="flights">Flights</option>
                  <option value="trips">Trips</option>
                  <option value="bookings">Bookings</option>
                </select>
              </Card>
            </div>
          </div>
          <div className="md:basis-1/3 flex flex-col gap-4">
            <Card className={'relative !p-0 h-[250px]'}>
              <img src={BG} className='w-full h-full object-cover rounded-lg' alt="" />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 bg-black/50 text-white p-4">
                <h1 className="text-3xl">Flights booking</h1>
                <p>Book a flight for your staff members</p>
                <button className="mt-4 py-3 px-6 bg-white text-black rounded-lg">
                  Book Now
                </button>
              </div>
            </Card>
            <div className="flex flex-nowrap gap-4 overflow-hidden w-full">
              <Card className="bg-[var(--darkBG)] min-w-[70%] text-white">
                <p className="text-xl font-semibold">Bus trips</p>
                <p>Book bus trips for your staff and set usage limits</p>
                <button className="mt-4 py-3 px-6 border border-white rounded-lg">
                  Book Now
                </button>
              </Card>

              <Card className="bg-[var(--darkBG)] min-w-[70%] text-white">
                <p className="text-xl font-semibold">Vouchers</p>
                <p>Send and register vouchers for members of your staff</p>
                <button className="mt-4 py-3 px-6 border border-white rounded-lg">
                  Book Now
                </button>
              </Card>
            </div>
            <Card className={'bg-purple-100'}>
              <div className="flex items-center">
                <div className="flex">
                  <div className="w-[40px] aspect-square bg-black text-white border-2 border-purple-700 rounded-full flex justify-center items-center">
                    <p>JF</p>
                  </div>
                  <div className="w-[40px] aspect-square bg-black text-white border-2 border-purple-700 rounded-full flex justify-center items-center relative left-[-15px]">
                    <p>JF</p>
                  </div>
                  <div className="w-[40px] aspect-square bg-white border-2 border-purple-700 rounded-full flex justify-center items-center relative left-[-30px]">
                    <p>+48</p>
                  </div>
                </div>
                <p className='relative left-[-20px]'>staff members</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;