import CakeContainer from "./Components/CakeContainer"
import {Provider} from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <div>
    <center>
    <CakeContainer/>
    </center>
      
    </div>
    </Provider>
  );
}

export default App;
