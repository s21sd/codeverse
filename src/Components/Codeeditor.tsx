"use client"
import React from 'react'
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { javascript } from '@codemirror/lang-javascript';
export const Codeeditor = () => {
    const [value, setValue] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((val: any, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return (
        <div>
            <CodeMirror
                value={value}
                height="100vh"
                width='50vw'
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                theme={draculaInit({
                    settings: {
                        caret: '#c6c6c6',
                        fontFamily: 'monospace',
                    },
                    styles: [
                        { tag: t.comment, color: '#6272a4' },
                    ]
                })}
            />
        </div>
    )
}
