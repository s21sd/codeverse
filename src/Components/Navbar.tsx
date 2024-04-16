"use client"
import React, { useEffect, useState } from 'react'
import './loader.css'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { logIn, logOut } from '@/redux/slices/appSlice'
export const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.appSlice.isAuth);
    console.log(isLoggedIn)

    useEffect(() => {
        const storedAuth = localStorage.getItem('token');
        if (storedAuth) {
            dispatch(logIn(true));
            router.push('/mycompiler');
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logOut());
        router.push('/')

    };
    return (
        <div className='bg-[#93efde] p-2 rounded-b-2xl '>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                        <div className="spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span onClick={() => router.push('/')} className="ml-5 text-2xl cursor-pointer font-bold">CodeVerse</span>
                    </a>
                    {
                        !isLoggedIn ? (
                            <div className='flex gap-2'>
                                <Button onClick={() => router.push('/auth/signup')} className='buttons'>SignUp</Button>
                                <Button onClick={() => router.push('/auth/login')} className='buttons'>Login</Button>
                            </div>
                        ) :
                            (
                                <div>
                                    <Button onClick={handleLogout} variant="destructive" className='buttons'>Logout</Button>

                                </div>
                            )

                    }

                </div>
            </header>
        </div>
    )
}
