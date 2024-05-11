import ModalLayout from "./Modal/ModalLayout";
import { useContext, useRef } from "react";
import PostContext from "../store/PostContext";


const PostBlogForm = ({ hidePostBlog }) => {

  const { addition } = useContext(PostContext);

  const inputTitleRef = useRef('');
  const inputUrlImageRef = useRef();
  const inputDescriptRef = useRef('');

  const handlerOnSubmitPost = (event) => {
    event.preventDefault();

    const enteredTitle = inputTitleRef.current.value;
    const enteredUrlImage = inputUrlImageRef.current.value;
    const enteredDescript = inputDescriptRef.current.value;

    addition(enteredTitle, enteredUrlImage, enteredDescript)
    console.log(enteredTitle);
    console.log(enteredUrlImage);
    console.log(enteredDescript);


  };

  return (
    <ModalLayout hidePostBlog={hidePostBlog}>
      <form onSubmit={handlerOnSubmitPost}>
        <label htmlFor="imageUrl"> Image URL </label>
        <input type="link" id="imageUrl" name="imageUrl" required ref={inputUrlImageRef} />

        <label htmlFor="title"> Title </label>
        <input type="text" id="title" name="title" required ref={inputTitleRef} />

        <label htmlFor="blogdescipt"> Blog Description </label>
        <input type="text" id="blogdescipt" name="blogdescipt" ref={inputDescriptRef} />

        <div className="action">
          <button type="submit"> Post Blog </button>
          <button onClick={hidePostBlog}> Close </button>
        </div>


      </form>
    </ModalLayout>
  )
}

export default PostBlogForm;