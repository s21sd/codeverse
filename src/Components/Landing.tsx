"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Landing = () => {
    const router = useRouter();
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CodeVerse</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">A Online Coding Compiler</h1>

                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className='mt-4'>
                                <button className="btn" onClick={() => router.push('/main/page')}>Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing