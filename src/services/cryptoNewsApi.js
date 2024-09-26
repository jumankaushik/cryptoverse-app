import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders = {
    'x-rapidapi-key': '49a5784214msh997f185d7d8bb3fp100bb8jsn804a679df940', //API key will be different for everyone
    'x-rapidapi-host': 'google-news22.p.rapidapi.com'
  }

const baseUrl = 'https://google-news22.p.rapidapi.com/v1'

const createRequest = (url) => ({
    url, headers: cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: (newsCategory) => createRequest(`/search?q=${newsCategory}&country=us&language=en`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
