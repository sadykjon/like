import './App.css';
import CommentsComponent from './Components/Comments-component';
import LikeComponent from './Components/Like-component';


 const App=()=> {
  return (
    <div className="app">
      <div className='wrap'>
        <div className="card">
          <div className="card-image">
            <img src="https://www.researchgate.net/publication/368688549/figure/fig1/AS:11431281121583182@1677036943508/Will-a-user-charmed-by-the-first-impression-created-by-ChatGPT-abandon-proven.jpg" alt="" srcset="" />
            <LikeComponent/>
          </div>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
