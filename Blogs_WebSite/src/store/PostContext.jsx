import { createContext, useState } from "react";


const DUMMY = [
    {

        title: "Hello",
        imgUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: "Beautiful flowers",
    },
    {

        title: "Hi",
        imgUrl: 'https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: "Plain and colourful",
    },

];


const PostContext = createContext({

    title: '',
    imgUrl: '',
    description: '',
});


export const PostContextProvider = (props) => {

    const [addPost, setAddPost] = useState([]);



    const handlerOnAddPost = (title, imgUrl, description) => {
        console.log(title, imgUrl, description);
        const latestPost = [...addPost, {
            id: Math.random(),
            title: title,
            imgUrl: imgUrl,
            description: description,
        }]
        setAddPost(latestPost);
    };

    const handlerOnEdit = (title) => {

    };


    const handlerOnRemovePost = (image) => {
        const deletePost = addPost.filter((brr) => {
            return brr.id !== image;
        })
        console.log('post is deleted', image)
        setAddPost(deletePost);
    };



    const postVaules = {
        print: addPost,
        addition: handlerOnAddPost,
        remove: handlerOnRemovePost,
    };

    return <PostContext.Provider value={postVaules}>
        {props.children}
    </PostContext.Provider>
};


export default PostContext;