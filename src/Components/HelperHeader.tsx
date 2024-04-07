"use client"
import React, { useState } from 'react'
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
import { FaPlay } from "react-icons/fa";
import { HandleErrors } from '@/lib/Handlerror';
import { useCompilecodeMutation } from '@/redux/api';
interface codeDataType {
    code: string,
    input: string,
    language: string
}

const HelperHeader = () => {
    const [compilecode] = useCompilecodeMutation();
    const dispathch = useDispatch();
    const currLangValue = useSelector((state: RootState) => state.compileSlice.currlanguage)
    const currCodeValue = useSelector((state: RootState) => state.compileSlice.fullCode);
    // Setting the value for the compiles 
    const [codeData, setCodeData] = useState<codeDataType>({
        code: currCodeValue,
        input: '',
        language: currLangValue
    })
    // console.log(codeData);
    const HandlecompileCode = async () => {
        try {
            const res = await compilecode(codeData).unwrap();
            console.log(res);
        } catch (error) {
            console.log(error);
            HandleErrors(error)
        }
    }
    return (
        <div className='flex justify-between items-center m-1'>
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
                <FaRegSave size={26} />
                <FaShareAlt size={26} />
                <button onClick={HandlecompileCode}>
                    <FaPlay size={26} />
                </button>

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
