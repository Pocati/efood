import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<any[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurant: builder.query<any, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, any>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery, usePurchaseMutation } = api
export default api