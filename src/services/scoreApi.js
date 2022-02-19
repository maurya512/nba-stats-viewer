import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// var axios = require("axios").default;

const scoreApiHeaders = {
    'x-rapidapi-host': 'nba-latest-news.p.rapidapi.com',
    'x-rapidapi-key': 'cda2d30be7msheecc834c925cce9p1570eejsnfe47e9cebf8d'
}

const baseUrl = 'https://nba-latest-news.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: scoreApiHeaders })

export const statsApi = createApi({
    reducerPath: 'statsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStats: builder.query({
            query: (count) => createRequest(`/news`)
        })
    })
})

export const {
    useGetStatsQuery
} = statsApi;