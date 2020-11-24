import './App.css';
import {Switch,Link,BrowserRouter,Route} from 'react-router-dom';
import FetchPost from './Components/FetchPost';
import RowJson from './Components/RowJson';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={FetchPost}/>
        <Route path='/RowJson' component={RowJson}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
