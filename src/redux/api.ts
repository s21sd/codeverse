"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InitialStateType } from "./slices/compileSlice"
export interface UserInfoType {
    name: string,
    email: string,
    password: string,
    token: string
}
export interface loginCredentialType {
    email: string,
    password: string,
}
export interface signupCredentialType {
    name: string,
    email: string,
    password: string
}
export interface compilecodeType {
    code: string,
    input: string,
    language: string
}
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            console.log(token)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            } else {
                headers.delete('Authorization');
            }
            return headers;
        }
    }),

    endpoints: (builder) => ({

        // Login Api 
        login: builder.mutation<UserInfoType, loginCredentialType>({
            query: (body) => ({
                url: "auth/login",
                method: 'POST',
                body: body,
                credentials: 'include'
            })
        }),

        // Sign up Api
        signup: builder.mutation<UserInfoType, signupCredentialType>({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                body: body,
                credentials: 'include'
            })
        }),
        // for the compile code 
        compilecode: builder.mutation<compilecodeType, string>({
            query: (body) => ({
                url: 'code/compile',
                method: 'POST',
                body: body,
            })
        }),


        // For  the saving the code 
        savecode: builder.mutation<{ url: string, status: string }, { fullCode: InitialStateType["fullCode"], language: InitialStateType["currlanguage"] }>({
            query: (fullcode) => {
                console.log(fullcode)
                return {
                    url: "/code/savecode",
                    method: 'POST',
                    body: {
                        "code": fullcode,
                    }
                };

            }
        }),

        //  for getting all the codes
        getAllCodes: builder.query<
            Array<{ _id: string; title: string; ownerName: string }>,
            void
        >({
            query: () => ({
                url: "/code/getallcode",
                cache: "no-store",
            }),

        }),
        // Only For My specific saved code
        getMyCodes: builder.mutation<{ fullCode: InitialStateType["fullCode"] }[], void>({
            query: () => "/code/mycodes",
        }),



    }),

});

export const { useLoginMutation, useSignupMutation, useCompilecodeMutation, useSavecodeMutation, useGetAllCodesQuery, useGetMyCodesMutation } = api
