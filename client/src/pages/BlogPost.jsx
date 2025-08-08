import { useState } from "react";
import "../Css/Blog.css"

function BlogPost() {
    const [blog, setblog] = useState({ title: "", description: "" });
    const handleOnchange = ((e) => {
        setblog({
            ...blog, [e.target.name]: e.target.value
        })
        //console.log("hjh "+blog.title)
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data =await fetch("http://localhost/blogpost", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify(blog)
            })
            const result = await data.json();
            
            console.log(result.message)
        } catch (error) {
            console.log("Error on frontend while sending data " + error)
        }
    }


    return (
        <>
            <div className="maincontainer" style={{ border: "none" }}>
                <div className="secondmaincontainer">
                    <h1>Write Your Blog</h1>
                    <div className="inputcontainer">
                       
                        <input onChange={handleOnchange} className="bloginput" type="text" name="title" placeholder="Title" />
                        <textarea className="bloginput" onChange={handleOnchange} type="text" name="description" placeholder="Description" />
                        <button className="btn btn-primary blogsubmitbutton" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BlogPost;