import React, { useState, useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaRegSave, FaShareAlt, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { InitialStateType, updateCodeOutput, updateCurrLanguage, updateCodeValue } from '../redux/slices/compileSlice';
import { HandleErrors } from '@/lib/Handlerror';
import { useCompilecodeMutation } from '@/redux/api';
import { Button } from './ui/button';

interface CodeDataType {
    code: string;
    input: string;
    language: string;
}

const HelperHeader = () => {
    const [compilecode] = useCompilecodeMutation();
    const dispatch = useDispatch();
    const currLangValue = useSelector((state: RootState) => state.compileSlice.currlanguage);
    const currCodeValue = useSelector((state: RootState) => state.compileSlice.fullCode);
    console.log(currCodeValue[currLangValue])


    // Setting the value for the compiles 
    const [codeData, setCodeData] = useState<CodeDataType>({
        code: currCodeValue[currLangValue],
        input: '',
        language: currLangValue
    });

    useEffect(() => {
        setCodeData(prevState => ({
            ...prevState,
            code: currCodeValue[currLangValue],
            language: currLangValue
        }));
    }, [currCodeValue, currLangValue]);

    const handleCompileCode = async () => {
        try {
            const res = await compilecode(codeData).unwrap();
            dispatch(updateCodeOutput(res));
        } catch (error) {
            console.log(error);
            HandleErrors(error);
        }
    }

    return (
        <div className='flex justify-between items-center m-1'>
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
                <FaRegSave size={26} />
                <FaShareAlt size={26} />
                <Button onClick={handleCompileCode}>
                    Run
                </Button>
            </div>

            <div className=' flex gap-2 justify-center items-center'>
                <p>
                    Current Language:
                </p>
                <Select defaultValue={currLangValue} onValueChange={(value) => dispatch(updateCurrLanguage(value as InitialStateType["currlanguage"]))}>
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
    );
}

export default HelperHeader;
