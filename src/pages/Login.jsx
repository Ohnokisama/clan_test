import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [alert, setAlert] = useState({
    type: 'error',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Clan Test"

    if (alert.message) {
      const timeout = setTimeout(() => {
        setAlert(prev => ({ ...prev, message: '' }));
      }, 5000);
    
      return () => clearTimeout(timeout);
    }
  }, [alert.message]);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formValues;

    if(email == '' || password == '') {
      setLoading(false);
      setAlert({ type: 'error', message: 'Please fill in all fields' })
    } else {
      setLoading(false);
      setAlert({ type: 'success', message: 'Login successful' })
      setFormValues({ email: '', password: '' })
      navigate('/dashboard')
    }
  }

  return (
    <div className='w-screen h-screen flex'>
      { loading && <Loader /> }
      <div className="basis-full md:basis-3/5 flex justify-center items-center">
        <form className='p-8 w-full md:w-[65%]' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <h1 className='text-4xl text-purple-700'>Luncs</h1>
            <p className="text-xl text-[var(--grey)]">
              Log in to your account
            </p>  
          </div>
          {
            alert.message && 
            <Alert type={alert.type}>
              { alert.message }
            </Alert>
          }
          <div className="my-3">
            <Input 
              label={'Email Address'}
              input_type={'email'}
              name={'email'}
              value={formValues.email}
              handler={handleChange}
            />
          </div>
          <div className="my-3">
            <Input 
              label={'Password'}
              input_type={'password'}
              name={'password'}
              value={formValues.password}
              handler={handleChange}
            />
            <div className="flex justify-end">
              <Link to={'/'} className='text-[var(--accent)] text-sm font-bold pt-1'>Forgot Password?</Link>
            </div>
          </div>
          <button className='mt-6 mb-3 w-full bg-[var(--accent)] text-white rounded-full py-4 hover:bg-[var(--dark-accent)] transition-all'>
            Login
          </button>
          <p className="text-center">
            Don't have an account? <Link className='text-[var(--accent)]'>Create an account</Link>
          </p>
        </form>
      </div>
      <div className="hidden md:flex md:basis-2/5 gap-6 h-full bg-[var(--darkBG)] p-12">
        <div className="py-4 text-center flex flex-col justify-between items-center bg-white rounded-xl h-full basis-1/6">
          <div className="w-[50px] aspect-square bg-black rounded-full flex justify-center items-center">
            <h1 className="text-3xl text-white">S</h1>
          </div>
          <ul>
            <li className='my-4'>
              <i className="ri-line-chart-line text-xl"></i>
            </li>
            <li className='my-4'>
              <i className="ri-edit-box-line text-xl"></i>
            </li>
            <li className='my-4'>
              <i className="ri-group-line text-xl"></i>
            </li>
            <li className='my-4'>
              <i className="ri-list-unordered text-xl"></i>
            </li>
            <li className='my-4'>
              <i className="ri-notification-line text-xl"></i>
            </li>
            <li className='my-4'>
              <i className="ri-settings-line text-xl"></i>
            </li>
          </ul>
        </div>
        <div className="py-4 flex flex-col gap-8 justify-center items-end h-full basis-5/6">
          <div className="p-6 bg-white rounded-xl w-full text-start">
            <h1 className="text-2xl">Flight Bookings</h1>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg w-2/3"></div>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg"></div>
          </div>
          <div className="p-6 bg-white rounded-xl w-2/3 text-start">
            <h1 className="text-2xl">Staff List</h1>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg w-2/3"></div>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg"></div>
          </div>
          <div className="p-6 bg-white rounded-xl w-full text-start">
            <h1 className="text-2xl">Booking Requests</h1>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg w-2/3"></div>
            <div className="mt-3 p-4 bg-slate-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
