import { useState } from "react";

function NewPoemForm({setPoems}) {
  const [newPoem, setNewPoem] = useState({
    title: "",
    content: "",
    author: "",
  })
  // most manual version
//   const handleChange = e => {
//     setNewPoem({...newPoem, [e.target.name]: e.target.value})
//   }
//   // one level destructuring
//   const handleChange = ({target}) => {
//     setNewPoem({...newPoem, [target.name]: target.value})
//   }
//  // two level destructuring
  const handleChange = ({target: {name, value}}) => {
    setNewPoem({...newPoem, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
    .then(resp => resp.json())
    .then(poem => setPoems(currentPoemList => [
      poem,
      ...currentPoemList
    ]))
    .catch(err => alert(err))

    setNewPoem({
      title: "",
      content: "",
      author: "",
    })
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="Title" name="title" value={newPoem.title}/>
      <input onChange={handleChange} placeholder="Author" name="author" value={newPoem.author}/>
      <textarea onChange={handleChange} placeholder="Write your masterpiece here..." rows={10} name="content" value={newPoem.content}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
