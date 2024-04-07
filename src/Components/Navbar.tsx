"use client"
import React from 'react'
import './loader.css'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
export const Navbar = () => {
    const router = useRouter();
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

                    <div className='flex gap-2'>
                        <Button onClick={() => router.push('/auth/signup')} className='buttons'>SignUp</Button>
                        <Button onClick={() => router.push('/auth/login')} className='buttons'>Login</Button>
                    </div>

                </div>
            </header>
        </div>
    )
}
