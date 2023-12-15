import Computers from "./Computerpage";
import Mobiles from "./Mobiles";
import Ac from "./Acpage";
import Books from "./Bookspage";
import Fridge from "./Fridge";
import Kitchen from "./Kitchen";
import Men from "./Men";
import Woman from "./Woman";
import Tv from "./Tv";
import Speakers from "./Speakers";
import Watch from "./Watch";

const Products = () => {
    return ( 
        <div>
            <Mobiles />
            <Computers />
            <Ac />
            <Books />
            <Fridge />
            <Kitchen />
            <Men/>
            <Woman />
            <Watch />
            <Tv />
            <Speakers />
        </div>
     );
}
 
export default Products;