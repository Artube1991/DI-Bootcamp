import './App.css';
import PostLists from './feature/posts/PostList';
import Users from './feature/users/user';

function App() {
  return (
    <div className="App">
      <Users/>
      <PostLists/>
    </div>
  );
}

export default App;
