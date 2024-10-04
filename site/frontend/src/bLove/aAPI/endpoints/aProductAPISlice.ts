import { apiSlice } from "../aAPISlice";


const TARGET_URL = '/product';

const productAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // List
    list: builder.query({
      query: (data) => ({
        url: `${TARGET_URL}/list`,
        method: 'GET',
      }),
    }),

    // Create
    create: builder.mutation({
      query: (data) => ({
        url: `${TARGET_URL}/create`,
        method: 'POST',
        body: data.body,
      }),
    }),

    // Retrieve
    retrieve: builder.query({
      query: (data) => ({
        url: `${TARGET_URL}/retrieve/${data.params}`,
        method: 'GET',
      }),
    }),

    // Update
    update: builder.mutation({
      query: (data) => ({
        url: `${TARGET_URL}/update/${data.params}`,
        method: 'PUT',
        body: data.body,
      }),
    }),

    // Delete
    delete: builder.mutation({
      query: (data) => ({
        url: `${TARGET_URL}/delete/${data.params}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export default productAPISlice;
