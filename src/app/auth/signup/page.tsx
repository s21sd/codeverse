"use client"
import React, { ChangeEvent, useState } from 'react'
import '../../../components/auth.css'
import { useRouter } from 'next/navigation'
import { FaRegUser } from "react-icons/fa";
import { HandleErrors } from '@/lib/Handlerror';
import { useSignupMutation } from '@/redux/api';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

// Lets define the type for our form
interface formDataType {
    name: string,
    email: string,
    password: string
}

const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [signup] = useSignupMutation();
    const [formData, setFormData] = useState<formDataType>({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof formDataType) => {
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: e.target.value
        }));
    };
    const handleSigup = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await signup(formData).unwrap();
            toast.success("Sign Up Successfull");
            setTimeout(() => {
                setLoading(false)
                router.push('/auth/login');
            }, 2000);
        } catch (error) {
            setLoading(false)
            HandleErrors(error)
        }

    };

    return (
        <div className='flex justify-center items-center h-[100vh] bg-gray-200'>

            <form className="form border border-gray-200">
                <div className="flex-column">
                    <label>Name</label>
                </div>
                <div className="inputForm">
                    <FaRegUser size={20} />
                    <input value={formData.name} onChange={(e) => handleChange(e, 'name')} type="text" className="input" placeholder="Enter your Name" />
                </div>
                <div className="flex-column">
                    <label>Email </label>
                </div>
                <div className="inputForm">
                    <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                    <input value={formData.email} onChange={(e) => handleChange(e, 'email')} type="text" className="input" placeholder="Enter your Email" />
                </div>

                <div className="flex-column">
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                    <input value={formData.password} onChange={(e) => handleChange(e, 'password')} type="password" className="input" placeholder="Enter your Password" />

                </div>

                <button onClick={handleSigup} className={`${loading ? `cursor-not-allowed` : <></>} button-submit flex justify-center items-center`}>{loading ? <Loader className="animate-spin mr-1" /> : <></>}Sign up</button>
                <p className="p">Already have an account? <span className="span" onClick={() => router.push('/auth/login')}>Login</span>
                </p>

            </form>
        </div >
    )
}

export default page