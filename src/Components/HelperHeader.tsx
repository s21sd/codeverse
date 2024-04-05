import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FaRegSave } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const HelperHeader = () => {
    return (
        <div className='flex justify-between items-center m-1'>
            <div className='flex justify-center items-center gap-2 cursor-pointer'>
                <FaRegSave size={26} />
                <FaShareAlt size={26} />
            </div>

            <div className=' flex gap-2 justify-center items-center'>
                <p>
                    Current Language:
                </p>
                <Select>
                    <SelectTrigger className="w-[120px] outline focus:ring-0">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="html">HTML</SelectItem>
                            <SelectItem value="css">CSS</SelectItem>
                            <SelectItem value="javascript">JavaScript</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

    )
}

export default HelperHeader