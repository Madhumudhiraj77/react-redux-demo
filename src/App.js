import CakeContainer from "./Components/CakeContainer"
import HookCakeCointainer from "./redux/cake/HookCakeCointainer"
import {Provider} from "react-redux"
import store from "./redux/store"
import IcecreamCointainer from "./Components/IcecreamContainer"

function App() {
  return (
    <Provider store={store}>
    <div>
    <center>
    <CakeContainer/>
    <HookCakeCointainer/>
    <IcecreamCointainer/>
    </center>
      
    </div>
    </Provider>
  );
}

export default App;
