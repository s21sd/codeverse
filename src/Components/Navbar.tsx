import React from 'react'
import '../Components/loader.css'
export const Navbar = () => {
    return (
        <div className='m-3'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div className="spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span className="ml-5 text-xl">CodeVerse</span>
                    </a>

                    <div className='flex gap-2'>
                        <button className='buttons'>SignIn</button>
                        <button className='buttons'>Login</button>
                    </div>

                </div>
            </header>
        </div>
    )
}
