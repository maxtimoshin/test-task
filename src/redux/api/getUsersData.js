import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        getUserAlbums: builder.query({
            query: (userId) => `albums?userId=${userId}`
        }),
        getUserPosts: builder.query({
            query: (userId) => `posts?userId=${userId}`
        })
    })
})

export const { useGetUsersQuery, useGetUserAlbumsQuery, useGetUserPostsQuery } = usersApi

