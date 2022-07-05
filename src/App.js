import Counter from './components/Counter/Counter';
import AddPostForm from './components/Posts/AddPostForm';
import PostsList from './components/Posts/PostsList';
import './styles/normalize.scss'
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
