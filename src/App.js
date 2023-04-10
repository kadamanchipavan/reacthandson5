
import './App.css';
import './Component/newStyles.css'
import Firstfunction from "./Component/Firstfunction";
function App() {
  return (
    <>
    <h1 className='align'> Pure Component and Higher Order Component </h1>
    <div className='align'>
     This is pure component demo .
    <Firstfunction/>
    </div>

   
    <div  className='align'>
      
      This is higher order component demo. 
    </div>
  </>
  );
}

export default App;
