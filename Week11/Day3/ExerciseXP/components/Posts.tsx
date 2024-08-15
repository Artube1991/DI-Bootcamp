import React, { useState, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com/posts"

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}


const Posts = (props: {count: number}) => {
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const data: Post[] = await response.json();
          setPost(data[props.count])
        }
      
        fetchData()
        //   .catch(console.error);
      }, [props.count])
    return (
        <>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
        </>
    )
    } 

export default Posts

