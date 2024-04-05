"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Lottie from "lottie-react";
import Animation from "../../public/Animation - 1712328886093.json";

const Landing = () => {
    const router = useRouter();
    return (
        <div>
            <div className="text-gray-600 body-font overflow-hidden">
                <div className=" mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-between items-center">

                        <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                            <Lottie animationData={Animation} />
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CodeVerse</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">A Online Coding Compiler</h1>

                            <p className="leading-relaxed">"Unleash your code in multiple languages.
                                Compile C++, C, Java, and Python seamlessly.
                                Your one-stop destination for versatile coding."</p>
                            <div className='mt-4 w-fit'>
                                <button className='bg-black w-[200px] h-[50px] font-medium text-white text-xl rounded-full ' onClick={() => router.push('/mycompiler')}>Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing