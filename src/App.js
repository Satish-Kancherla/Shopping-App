import Acpage from "./stores/pages/Acpage";
import Bookspage from "./stores/pages/Bookspage";
import Computerspage from "./stores/pages/Computerpage";
import Fridgepage from "./stores/pages/Fridgepage";
import FurniturePage from "./stores/pages/FurniturePage";
import HomePage from "./stores/pages/Homepage";
import {Routes,Route} from "react-router-dom";
import Kitchenpage from "./stores/pages/Kitchenpage";
import Menpage from "./stores/pages/Menpage";
import Mobilespage from "./stores/pages/Mobilespage";
import Tvpage from "./stores/pages/Tvpage";
import Speakerspage from "./stores/pages/Speakerspage";
import Womanpage from "./stores/pages/Womanpage";
import Watchpage from "./stores/pages/Watchpage";

import MobileDynamic from "./stores/dynamic/mobileDynamic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ac" element={<Acpage/>}/>
        <Route path="/book" element={<Bookspage/>}/>
        <Route path="/computer" element={<Computerspage />}/>
        <Route path="/fridge" element={<Fridgepage />}/>
        <Route path="/furniture" element={<FurniturePage/>} />
        <Route path="/kitchen" element={<Kitchenpage/>}/>
        <Route path="/men" element={<Menpage/>}/>
        <Route path="/mobile" element={<Mobilespage />}/>
        <Route path="/speaker" element={<Speakerspage />}/>
        <Route path="/tv" element={<Tvpage/>}/>
        <Route path="/watch" element={<Watchpage />}/>
        <Route path="/women" element={<Womanpage />}/>

        <Route path="/mobile/:id" element={<MobileDynamic/>}/>
      </Routes>
    </div>
  );
}

export default App;
