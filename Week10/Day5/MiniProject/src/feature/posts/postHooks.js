import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { posts, status, author, state } from "./selectors";
import { fetchPosts } from "./postSlice";
import { useCallback } from "react";

export const usePostsSelector = () => {
    return useSelector(
        createSelector([posts, author]), (posts, author) => {
            if (author == -1) return posts;
            return posts.filter((post) => post.userId == author);
        })
};

export const usePostsStatus = () => {
    return useSelector(createSelector(state, (state) => state.status));
};

export const PostsAuthor = () => {
    const selector = createSelector(state, (state) => state.author);
    return useSelector(selector);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};