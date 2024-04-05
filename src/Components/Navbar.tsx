"use client"
import React from 'react'
import '../Components/loader.css'
import { useRouter } from 'next/navigation'
export const Navbar = () => {
    const router = useRouter();
    return (
        <div className='m-3 '>
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
                        <span onClick={() => router.push('/')} className="ml-5 text-xl cursor-pointer">CodeVerse</span>
                    </a>

                    <div className='flex gap-2'>
                        <button onClick={() => router.push('/auth/signup')} className='buttons'>SignUp</button>
                        <button onClick={() => router.push('/auth/login')} className='buttons'>Login</button>
                    </div>

                </div>
            </header>
        </div>
    )
}
