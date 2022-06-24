import { usePosts } from './App';
import './App.css';

function Second() {
    const { isFetchedAfterMount, dataUpdatedAt } = usePosts();
    console.log({isFetchedAfterMount, dataUpdatedAt});


  return (
    <div className="App">
      <span>{`Second tab isFetchedAfterMount: ${isFetchedAfterMount}`}</span>
    </div>
  );
}

export default Second;
