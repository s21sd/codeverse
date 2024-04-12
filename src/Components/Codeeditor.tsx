"use client"
import React from 'react'
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { InitialStateType, updateCodeValue, updateCurrLanguage } from '../redux/slices/compileSlice'
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
export const Codeeditor = () => {
    const dispatch = useDispatch();
    const currLangValue = useSelector((state: RootState) => state.compileSlice.currlanguage)
    const currCodeValue = useSelector((state: RootState) => state.compileSlice.fullCode);
    const onChange = React.useCallback((val: any) => {
        dispatch(updateCodeValue(val))
    }, []);
    return (
        <div>
            <CodeMirror
                value={currCodeValue[currLangValue]}
                height="100vh"
                width='50vw'
                extensions={[loadLanguage(currLangValue)!]}
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
