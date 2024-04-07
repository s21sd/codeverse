import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface InitialStateType {
    fullCode: string;
    currlanguage: "c" | "cpp" | "java" | "python";
}
const initialState: InitialStateType = {
    fullCode: "printf(\"Hello world\")",
    currlanguage: "c",
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
    }
})

export default compileSlice.reducer;
export const { updateCurrLanguage,updateCodeValue } = compileSlice.actions;