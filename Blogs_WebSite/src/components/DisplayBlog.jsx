import { useContext } from "react";
import PostContext from "../store/PostContext";


const DisplayBlog = () => {

    const { print, remove } = useContext(PostContext);



    return (
        <div className="display_div">
            {print.map((arr) => {
                return <li key={arr.id}>

                    <h2> {arr.title} </h2>
                    <img src={arr.imgUrl} alt="image not found" style={{ width: "150px", height: "150px" }} />
                    <p> {arr.description} </p>
                    <button> Edit Blog </button>
                    <button onClick={() => remove(arr.id)}> Delte Blog </button>
                </li>
            })}
        </div>
    )
}

export default DisplayBlog;