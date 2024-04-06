"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInfoType, loginCredentialType, signupCredentialType } from "../../next-env";
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
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
        })

    }),

});

export const { useLoginMutation, useSignupMutation } = api
