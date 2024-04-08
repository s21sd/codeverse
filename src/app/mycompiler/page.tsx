"use client"
import React, { useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Codeeditor } from '@/components/Codeeditor'
import HelperHeader from '@/components/HelperHeader'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
const page = () => {
    const currCodeOutput = useSelector((state: RootState) => state.compileSlice.codeOutput);
    // console.log(currCodeOutput.output);
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-[100%] h-[100vh] rounded-lg border"
        >
            <ResizablePanel defaultSize={50}>
                <div>
                    <HelperHeader />
                </div>
                <Codeeditor />
            </ResizablePanel>
            {/* <ResizableHandle /> */}

            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full p-6 ">
                            <div className='w-[100%] mt-2'>
                                <span className="font-bold text-2xl gap-2"
                                >Custom Input:</span>
                                <div className='mt-4'>
                                    <input
                                        type="text"
                                        name="inputname"
                                        className=" w-[100%] rounded-full p-2 bg-gray-200 focus:text-gray-400"
                                    />
                                </div>
                            </div>

                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="gird m-4">
                            <span className="font-bold text-2xl gap-2">Output:</span>

                            {
                                currCodeOutput.output?.length > 0 ?
                                    <div className='bg-gray-200 rounded-full p-4 mt-4'>

                                        <p>{currCodeOutput.output}</p>
                                    </div>
                                    : <></>
                            }
                            {/* <p>Hello Worlds</p> */}
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel >
        </ResizablePanelGroup >
    )
}

export default page