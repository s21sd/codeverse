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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { InitialStateType, updateCurrLanguage } from '../redux/slices/compileSlice'

const HelperHeader = () => {
    const dispathch = useDispatch();
    const currLangValue = useSelector((state: RootState) => state.compileSlice.currlanguage)
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
                <Select defaultValue={currLangValue} onValueChange={(value) => dispathch(updateCurrLanguage(value as InitialStateType["currlanguage"]))}>
                    <SelectTrigger className="w-[120px] outline focus:ring-0">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="c">C</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="python">Python</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

    )
}

export default HelperHeader
