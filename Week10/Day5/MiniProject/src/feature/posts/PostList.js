import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
// import { useSelector, useDispatch } from "react-redux";
import { usePostsSelector, usePostsStatus, useFetchPosts } from "./postHooks";


const PostLists = (props) => {
    const posts = usePostsSelector();
    const status = usePostsStatus();

    const callFetchPosts = useFetchPosts();

    // const dispatch = useDispatch()

    useEffect(() => {
        callFetchPosts();
    }, []);

    if(status === 'loading') return<h2>Loading</h2>

    if(status === 'failed') return 
    <p>Something went wrong, try later</p>

    const renderPosts = posts
    // .filter(post => {
    //     if(author != -1) return post.userID == author
    //     return post;
    // })
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
            {renderPosts}
            {/* {
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
            : null} */}
        </section>
        </>
    );
};

export default PostLists;