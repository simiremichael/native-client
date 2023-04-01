import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserModel } from '../models/userModel';
import { PropertyModel } from '../models/propertyModel';
import customFetchBase from './custormFetchBase';
import { RootState } from '../../app/store';
import { logoutUsers } from '../features/userSlice';

export const propertyAPI = createApi({
  reducerPath: 'propertyAPI',
  baseQuery: customFetchBase,
  refetchOnReconnect: true,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'http://192.168.149.143:8000',
  //   prepareHeaders:  (headers, { getState }) => {
  //     const token = ( getState() as RootState).userState.token
  //     console.log('states: ', token);
  //     if (token) {

  //       headers.set('authorization', `Bearer ${token}` );
  //     }
  //       return headers;
      
  // }
  // }),
  

refetchOnFocus: true,
tagTypes: ['Properties', 'Users'],
  endpoints: (builder) => ({
     getUsers: builder.query<UserModel[], void>({
      query: ()  => '/users',
        providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Users' as const, id })),
                { type: 'Users', id: 'USER' },
              ] : [{ type: 'Users', id: 'USER' }],
    }),
  
    getUser: builder.query<UserModel, any>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id: any) =>  [{ type:'Users', id }],  
    }),
     signinUser: builder.mutation<UserModel, Partial<UserModel>>({
      query(body) {
        return {
        url: '/users/signin',
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     googleSignIn: builder.mutation<UserModel, Partial<UserModel>>({
      query(body) {
        return {
        url: '/users/googleSignIn',
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     signupUser: builder.mutation<UserModel, Partial<UserModel>>({
      query: (body) => {
        return {
        url: '/users/signup', 
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     userRefresh: builder.query({
      query: () => ({
        url: '/users/refresh',
        method: 'GET',
      })
     }),
     logoutUser:builder.mutation({
      query:(body) => ({
        url: '/users/logout',
        method: 'POST',
        body,     
      }),
      async onQueryStarted( args, { dispatch, queryFulfilled }) {
       try {
        // const data =
         await queryFulfilled
        // console.log(data)
        dispatch(logoutUsers());
        // dispatch(propertyAPI.util.resetApiState())
      //  setTimeout(() => {
      // dispatch(propertyAPI.util.resetApiState())
      //  }, 1000)
      } catch (error) {
        console.log(error)
       }
       }
     }),

     updateUser: builder.mutation<UserModel, Partial<UserModel>>({
  query(data) {const { id, ...body} = data;

        return {
        url: `/users/${id}`,
        method: 'PATCH',
        body,  
        }
       },
       transformResponse: (response: { data: UserModel }, meta, arg) => response.data,
      
       invalidatesTags:  (result, error, {id}) => [{ type: 'Users', id: 'USER'  }],
     }),
     
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/ ${id}`,
          method: 'DELETE',
          // credentials: 'include'
        }
      },
     invalidatesTags: (result, error, id) => [{ type: 'Users', id: 'USER' }],
       }),
            getProperties: builder.query<PropertyModel[], void>({
                query: ()  => '/properties',
              providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                  // providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Properties' as const, id: 'PROP' })),
                  //         { type: 'Properties', id: 'PROP' },
                  //       ] : [{ type: 'Properties', id: 'PROP' }],
              }),
        
              getProperty: builder.query<PropertyModel, any>({
                query: (id) => `/properties/${id}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              getPropertiesByAgent: builder.query<PropertyModel, any>({
                query: (agentId) => `/properties/agentProperties/${agentId}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              searchProperties: builder.query<PropertyModel, any>({
                query: ({search, toggle, minPrice, maxPrice, type, page, selectBed, selectBath,duration})  => `/properties/search?search=${search || 'i'}&toggle=${toggle || 'rent'}&type=${type || 'apartment'}&duration=${duration || 'yearly'}&selectBath=${selectBath || '4'}&selectBed=${selectBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '4000000'}&page=${page}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, toggle, minPrice, maxPrice, type, selectBed, selectBath,duration
              }),
              nativeSearchProperties: builder.query<PropertyModel, any>({
                query: ({search, propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup, sort})  => `/properties/nativesearch?search=${search || 'i'}&propertyType=${propertyType || 'apartment'}&paymentType=${paymentType || 'yearly'}&bedroom=${bedroom || '4'}&bathroom=${bathroom || '4'}&minprice=${minprice || '200000'}&maxprice=${maxprice || '4000000'}&minSize=${minSize || '400'}&maxSize=${maxSize || '8000'}&toggle=${toggle || 'rent'}&propertyGroup=${propertyGroup || 'Residential'}&sort=${sort || "_id: -1"}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, toggle, minPrice, maxPrice, type, selectBed, selectBath,duration
              }),
              searchPropertiesByBuy: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/buy?search=${search || 'i'}&category=${category || 'sale'}&type=${type || 'apartment'}&sort=${sort}&bath=${bath || '4'}&bed=${bed || '4'}&minPrice=${minPrice || '2000000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              getSaveProperty: builder.query<PropertyModel, any>({
                query: (id)  => `/properties/saveproperties?id=${id}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              searchPropertiesByRent: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/rent?search=${search || 'i'}&category=${category || 'rent'}&type=${type || 'apartment'}&sort=${sort}&bath=${bath || '4'}&bed=${bed || '4'}&minPrice=${minPrice || '2000000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
               // transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              moreProperty: builder.query<PropertyModel, any>({
                query: ({location, price, propertyType, bedroom, category})  => `/properties/more?location=${location}&price=${price}&propertyType=${propertyType}&bedroom=${bedroom}&category=${category}`,
                transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              commercial: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, propertyGroup, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/commercial?search=${search || 'i'}&propertyGroup=${propertyGroup}&category=${category || 'sale'}&type=${type || 'office'}&sort=${sort}&bath=${bath || '1'}&bed=${bed || '1'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
               // transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              newProject: builder.query<PropertyModel, any>({
                query: ({ search, sort, possession, minBed, maxBed, minPrice, maxPrice, type, propertyGroup, page})  => `/properties/newProject?search=${search || 'i'}&type=${type || 'apartment'}&sort=${sort}&minBed=${minBed || '1'}&maxBed=${maxBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}&possession=${possession || 2022 }&propertyGroup=${propertyGroup}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              offplan: builder.query<PropertyModel, any>({
                query: ({search, sort, minBed, maxBed, minPrice, possession, maxPrice, type, propertyGroup, page})  => `/properties/offplan?search=${search || 'i'}&type=${type || 'semi detached'}&sort=${sort}&minBed=${minBed || '1'}&maxBed=${maxBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}&possession=${possession || 2022}&propertyGroup=${propertyGroup}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
                 addProperty: builder.mutation<PropertyModel, Partial<PropertyModel>>({
                  query(body) {
                    return {
                    url: '/properties',
                    method: 'POST',
                    body,
                  }
                   },
                    invalidatesTags: [{type: 'Properties', id: 'PROP'}],
                 }),
                 updateProperty: builder.mutation<PropertyModel, Partial<PropertyModel> & Pick<PropertyModel, 'id'>>({
                  query: ({id, ...patch}) => ({
                    url: `/properties/${id}`,
                    method: 'PATCH',
                    body: patch,  
                     }),
                     transformResponse: (response: { data: PropertyModel }, meta, arg) => response.data,
                     transformErrorResponse: (
                      response: { status: string | number },
                      meta,
                      arg
                    ) => response.status,
                    invalidatesTags:  (result, error, {id}) => [{ type: 'Properties', id: 'PROP'  }],
                    async onQueryStarted(
                      arg,
                      { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
                    ) {},
                 }),
          
                 deleteProperty: builder.mutation<{ success: boolean; id: number | string }, number | string>({
                  query(id) {
                    return {
                      url: `properties/${id}`,
                      method: 'DELETE',
                    }
                  },
                 invalidatesTags: (result, error, id) => [{ type: 'Properties', id: 'PROP' }],
                   }),
                   companyPropertySearch: builder.query<PropertyModel, any>({
                    query: ({companyId, searchQuery, page, search})  => `/properties/adminHomepage/propertyList/${companyId}?searchQuery=${searchQuery || 'i'}&page=${page}`,
                    providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                  }),   
                  saveProperty: builder.mutation<PropertyModel, Partial<PropertyModel> & Pick<PropertyModel, 'id'>>({
                    // query(id) {
                    //   return {
                    //   url: `/properties/${id}/saveproperty`,
                    //   method: 'PATCH',
                    //   }
                    //  },
                    //  providesTags: (result: any, error: any, id: any) =>  [{ type:'Properties', id: 'PROP' }],  

                     query: ({id, ...patch}) => ({
                      url: `/properties/${id}/saveproperty`,
                      method: 'PATCH',
                      body: patch,  
                       }),
                       transformResponse: (response: { data: PropertyModel }, meta, arg) => response.data,
                       transformErrorResponse: (
                        response: { status: string | number },
                        meta,
                        arg
                      ) => response.status,
                      invalidatesTags:  (result, error, {id}) => [{ type: 'Properties', id: 'PROP'  }],
                      async onQueryStarted(
                        arg,
                        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
                      ) {},
                   }),  
       }), 
})

export const { 
    useGetUsersQuery,
    useGetUserQuery, 
    useSigninUserMutation, 
    useLogoutUserMutation,
    useSignupUserMutation, 
    useUserRefreshQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetPropertiesQuery,
    useGetPropertyQuery,
    useCommercialQuery,
    useNewProjectQuery,
    useOffplanQuery,
    useMorePropertyQuery, 
    useAddPropertyMutation, 
    useUpdatePropertyMutation,
    useDeletePropertyMutation,
    useGetPropertiesByAgentQuery,
    useSearchPropertiesByBuyQuery,
    useSearchPropertiesByRentQuery,
    useCompanyPropertySearchQuery,
    useSearchPropertiesQuery,
    useNativeSearchPropertiesQuery,
    useGoogleSignInMutation,
    useSavePropertyMutation,
    useGetSavePropertyQuery
 } = propertyAPI

