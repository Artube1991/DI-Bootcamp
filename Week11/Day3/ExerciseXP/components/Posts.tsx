import React, { useState, useEffect } from 'react';

const url = ""

const Posts = () => {
    const [post, setPost] = React.useState("https://jsonplaceholder.typicode.com/posts");

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch(url);
        }
      
        fetchData()
          .catch(console.error);
      }, [])



