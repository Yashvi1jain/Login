import logo from './logo.svg';
import './App.css';

function App() {
  return (
    

 <div className="account-p"> 
 <div className="Contain"> 
        
    <div className='form-container'>
    <img src={logo}height="140px"width="140px"alt=""></img>    
    <form method='post'>
    <select >
    <option></option>
    <option>Employee</option>
    <option>Admin</option>
    </select>
    <input type="email"></input>
    <input type="password"></input>
    <a href="www.google.com">Forgot Password</a><br/><br/>
    <button className="btn">Login</button>
    </form>

     </div>
</div>
</div>
  );
}

export default App;
