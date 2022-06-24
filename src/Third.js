import { usePosts } from './App';
import './App.css';

function Third() {
    const { isFetchedAfterMount, dataUpdatedAt } = usePosts();
    console.log({isFetchedAfterMount, dataUpdatedAt});


  return (
    <div className="App">
      <span>{`Third tab isFetchedAfterMount: ${isFetchedAfterMount}`}</span>
    </div>
  );
}

export default Third;
