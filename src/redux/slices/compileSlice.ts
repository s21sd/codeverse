import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface InitialStateType {
    fullCode: {
        c: string,
        cpp: string,
        java: string,
        python: string
    };
    currlanguage: "c" | "cpp" | "java" | "python";
    codeOutput: {
        output: string
    }
}
const initialState: InitialStateType = {
    fullCode: {
        "c": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World! from c\\n\");\n    return 0;\n}",
        "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World! from cpp\" << endl;\n    return 0;\n}",
        "java": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World! from java\");\n    }\n}",
        "python": "print(\"Hello, World! from python\")"
    },
    currlanguage: "c",
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
            state.fullCode[state.currlanguage] = action.payload;
        },
        updateCodeOutput: (state, action: PayloadAction<{ output: string }>) => {
            state.codeOutput.output = action.payload.output
        }
    }
})

export default compileSlice.reducer;
export const { updateCurrLanguage, updateCodeValue, updateCodeOutput } = compileSlice.actions;