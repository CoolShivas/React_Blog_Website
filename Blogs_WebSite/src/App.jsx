import DisplayBlog from "./components/DisplayBlog";
import PostBlogForm from "./components/PostBlogForm";
import AppName from "./components/AppName";
import { useState } from "react";



const App = () => {

  const [visible, setVisible] = useState(true);

  const showPostBlog = () => {
    setVisible(true);
  };

  const hidePostBlog = () => {
    setVisible(false);
  };

  return (
    <>
      <AppName showPostBlog={showPostBlog}></AppName>
      <hr />
      {visible && <PostBlogForm hidePostBlog={hidePostBlog}></PostBlogForm>}
      <hr />
      <DisplayBlog></DisplayBlog>
    </>
  )
}

export default App;