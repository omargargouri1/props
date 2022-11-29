import logo from './logo.svg';
import './App.css';
import Components from './Profile/Components';


function App() {
  let fullName='Omar Gargouri';
  let bio=5;
  let profession='devloppeur';
  let handlename = (x) => {
    alert (`The user name is ${x}`)
  }
  return (
    <div className="App">
      <Components name={fullName} bio={bio} job={profession} handlename={handlename}>
        <img src='https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'/>
      </Components>
    
    
      
    </div>
  );
}

export default App;
