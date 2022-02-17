import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// * storing headers from api
const scoreApiHeaders = {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': 'cda2d30be7msheecc834c925cce9p1570eejsnfe47e9cebf8d'
}

// * storing the url into a variable
const baseUrl = 'https://api-nba-v1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: scoreApiHeaders })

export const scoreApi = createApi({
    reducerPath: 'scoreApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getScores: builder.query({
            query: () => createRequest('/games/live')
        })
    })
})

export const {
    useGetScoreQuery,
} = scoreApi;