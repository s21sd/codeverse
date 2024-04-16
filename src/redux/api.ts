"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
        })



    }),

});

export const { useLoginMutation, useSignupMutation, useCompilecodeMutation } = api
