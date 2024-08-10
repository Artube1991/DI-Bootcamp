import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
import ReactionButton from "./ReactionButton";

const PostLists = (props) => {
    const posts = useSelector((state) => state.postReducer.posts);
    const status = useSelector((state) => state.postReducer.status);
    const author = useSelector((state) => state.postReducer.author);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    if(status === 'loading') return<h2>Loading</h2>

    if(status === 'failed') return 
    <p>Something went wrong, try later</p>

    const renderPosts = posts
    .filter(post => {
        if(author != -1) return post.userID == author
        return post;
    })
    .map((post) => {
        return (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <ReactionButton post={post}/>
            </article>
        );
    });

    return (
        <>
        <h2>Posts</h2>
        <section>
            {
                posts 
                ? posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <ReactionButton post={post}/>
                        </article>
                    );
                })
            : null}
        </section>
        </>
    );
};

export default PostLists;