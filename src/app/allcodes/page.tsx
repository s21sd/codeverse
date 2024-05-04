"use client"
import CodeItem from '@/components/CodeItem'
import { useGetAllCodesQuery } from '@/redux/api'
import React from 'react'

const page = () => {
    const { data } = useGetAllCodesQuery()
    console.log(data)
    return data?.length !== 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
            {
                data?.map((codeItem) => {
                    return (
                        <CodeItem deleteBtn={true} key={codeItem._id} data={codeItem} />

                    );
                })
            }
        </div>
    ) : (
        <p className="block w-full text-slate-500 font-mono text-center p-3">No Codes Found!</p>
    );
}

export default page
