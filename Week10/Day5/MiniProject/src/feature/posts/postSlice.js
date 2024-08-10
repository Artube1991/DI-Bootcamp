import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
    const response = await axios.get(POST_URL);
    console.log()
    return response.data;
});

const initialState = {
    posts: [],
    status: "",
    author: -1,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addreaction: (state, action) => {
            const { id, name } = action.payload
            const post = state.posts.find((post) => post.id === id)
            if(post) {
                post.reactions[name]++;
            }
        },
        filterAuthor: (state, action) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success";

                const loadedPosts = action.payload.map((post) => {
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    };
                    return post
                });

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = "failed";
            });
        },
});

export const { addreaction, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer