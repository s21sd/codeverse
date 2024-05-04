import { useGetMyCodesMutation } from '@/redux/api'
import React from 'react'

const page = () => {
    const [data] = useGetMyCodesMutation()
    console.log(data)
    return (
        <div>
            page
        </div>
    )
}

export default page
