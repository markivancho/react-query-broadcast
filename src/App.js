import './App.css';
import axios from "axios";
import {
  useQuery
} from "react-query";
import React from 'react';
import { Link } from 'react-router-dom';

export function usePosts() {
  return useQuery(["posts", {}], async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}

function App() {
  const [, toggleState] = React.useState({});
  const triggerUpdate = (e) => {
    e.preventDefault();
    toggleState({});
  }
  const { isFetchedAfterMount, dataUpdatedAt, refetch } = usePosts();
  console.log({isFetchedAfterMount, dataUpdatedAt});


  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '400px', alignItems: 'center' }}>
      <span>{`isFetchedAfterMount: ${isFetchedAfterMount}`}</span>
      <button onClick={triggerUpdate}>Update state</button>
      <button onClick={refetch}>refetch</button>
      <a href={window.location.href + 'second'}>open second tab</a>
      <Link to='third'>Link to third tab</Link>
    </div>
  );
}

export default App;
