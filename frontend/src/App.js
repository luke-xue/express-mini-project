import "./App.css";
import axios from "axios";
import Post from './Post.js'

import { useState, useEffect } from "react";
import { List, Grid } from '@mui/material';

function App() {
  const [info, setInfo] = useState();
  const [posted, setPosted] = useState();
  const [name, setName] = useState("");
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/posts/info?myParam=10")
      .then((res) => res.json())
      .then((text) => {setInfo(text.result)
         console.log(text)})
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9000/posts/post", {
        name: name,
        content: content
      })
      .then((res) => setPosted(res))
      .catch((err) => console.log(err));
      setInfo([...info, {name: name, content: content}])
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <label>
            Enter your username:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          </div>
          <div>
          <label>
            Enter content:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          </div>
          <input type="submit" />
        </form>
      </div>
      {/*info && info.map((item)=> <div><p>Username: {item.name}</p> 
        <p>Message: {item.content}</p> </div>)*/}
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {info && info.map((item)=> <Post username = {item.name} content = {item.content}/>)}
      </List>
      </Grid>
    </div>
  );
}

export default App;
