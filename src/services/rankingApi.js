import create from '@ant-design/icons/lib/components/IconFont'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ! define headers
const rankingHeaders = {
    'x-rapidapi-host': 'nba-player-individual-stats.p.rapidapi.com',
    'x-rapidapi-key': 'cda2d30be7msheecc834c925cce9p1570eejsnfe47e9cebf8d'
}

// ! define base url
const baseUrl = 'https://nba-player-individual-stats.p.rapidapi.com'

// ! creating a request query
const createRequest = (url) => ({ url, headers: rankingHeaders })

// ! creating a specific api request
export const rankingApi = createApi({
    reducerPath: 'rankingApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRanking: builder.query({
            query: () => createRequest('/teams')
        })
    })
})

// ! export the query
export const {
    useGetRankingQuery
} = rankingApi;