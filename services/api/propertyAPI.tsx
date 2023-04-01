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
  

// refetchOnFocus: true,
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
              nativeSearchProperties: builder.query<PropertyModel, any>({
                query: ({search, propertyType, paymentType, bedroom, bathroom, minprice, maxprice, minSize, maxSize, toggle, propertyGroup, sort})  => `/properties/nativesearch?search=${search || 'i'}&propertyType=${propertyType || 'apartment'}&paymentType=${paymentType || 'yearly'}&bedroom=${bedroom || '4'}&bathroom=${bathroom || '4'}&minprice=${minprice || '200000'}&maxprice=${maxprice || '4000000'}&minSize=${minSize || '400'}&maxSize=${maxSize || '8000'}&toggle=${toggle || 'rent'}&propertyGroup=${propertyGroup || 'Residential'}&sort=${sort}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, toggle, minPrice, maxPrice, type, selectBed, selectBath,duration
              }),
              getPropertiesByAgent: builder.query<PropertyModel, any>({
                query: (agentId) => `/properties/agentProperties/${agentId}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              getSaveProperty: builder.query<PropertyModel, any>({
                query: (id)  => `/properties/saveproperties?id=${id}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              moreProperty: builder.query<PropertyModel, any>({
                query: ({location, price, propertyType, bedroom, category})  => `/properties/more?location=${location}&price=${price}&propertyType=${propertyType}&bedroom=${bedroom}&category=${category}`,
                transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
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
    useGetPropertiesByAgentQuery,
    useMorePropertyQuery, 
    useNativeSearchPropertiesQuery,
    useGoogleSignInMutation,
    useSavePropertyMutation,
    useGetSavePropertyQuery
 } = propertyAPI

