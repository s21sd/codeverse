import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface InitialStateType {
    fullCode: string;
    currlanguage: "c" | "cpp" | "java" | "python";
    codeOutput: {
        output: string
    }
}
const initialState: InitialStateType = {
    fullCode: "print(\"Hello world\")",
    currlanguage: "python",
    codeOutput: {
        output: ''
    }
};

const compileSlice = createSlice({
    name: 'compilerSlice',
    initialState,
    reducers: {
        updateCurrLanguage: (state, action: PayloadAction<InitialStateType["currlanguage"]>) => {
            state.currlanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode = action.payload;
        },
        updateCodeOutput: (state, action: PayloadAction<{ output: string }>) => {
            state.codeOutput.output = action.payload.output
        }
    }
})

export default compileSlice.reducer;
export const { updateCurrLanguage, updateCodeValue, updateCodeOutput } = compileSlice.actions;