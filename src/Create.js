import { useState } from "react";
import { useHistory } from "react-router";
function Create(){
  const [title, setTitle]= useState('');
  const[body, setBody]=useState('')
  const[author, setAuthor]=useState('amit');
  const[isPending,setIsPending]=useState(false);
  const history=useHistory()
  console.log(history)

const handleSubmit=(e)=>{
e.preventDefault();
const blog={title, body, author}
setIsPending(true);
fetch('http://localhost:8000/blogs',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(blog)
}).then(()=>{
  // console.log("Add New Blog")
  setIsPending(false);
  history.push('/');
})
}

  return (
    <div className="create">
    <h2>Add a New blog</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Blog title :
        <input 
        type="text"
        required
        onChange={(e)=>setTitle(e.target.value)}
        />
      </label>

      <label>
        Blog body :
        <textarea
        type="text"
        required
        onChange={(e)=>setBody(e.target.value)}
        >
          </textarea>
      </label>

      <label>
        Blog Author :
        <select
        type="text"
        onChange={(e)=>setAuthor(e.target.value)}
        >
        <option value="amit">amit</option>
        <option value="sonu">sonu</option>
        <option value="ajay">ajay</option>
        

          </select>
      </label>

    {!isPending && <button>Add Blog</button>}
    {isPending && <button>Adding Blog....</button>}


    </form>

    </div>
  );
}
 export default Create;