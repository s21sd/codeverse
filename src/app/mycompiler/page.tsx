"use client"
import React, { useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Codeeditor } from '@/components/Codeeditor'
import HelperHeader from '@/components/HelperHeader'
const page = () => {

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-[100%] h-[100vh] rounded-lg border"
        >
            <ResizablePanel defaultSize={50}>
                <div>
                    <HelperHeader />
                </div>
                {/* <div className="flex h-[100vh] items-center justify-center p-6"> */}
                {/* <span className="font-semibold">One</span> */}
                <Codeeditor />

                {/* </div> */}
            </ResizablePanel>
            {/* <ResizableHandle /> */}

            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full p-6 ">
                            <div className='w-[100%]'>
                                <span className=" text-gray-800 font-semibold text-sm"
                                >Custom Input</span>
                                <div className="mt-2 ">
                                    <input
                                        type="text"
                                        name="inputname"
                                        className=" w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    />
                                </div>

                            </div>

                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default page