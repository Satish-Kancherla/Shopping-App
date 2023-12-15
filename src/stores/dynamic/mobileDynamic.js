import Navbar from "../components/Navbar";
import { mobileData } from "../data/mobiles";
import { useParams } from "react-router-dom";

const MobileDynamic = () => {

    const { id } = useParams();

    const product = mobileData.find((item) => item.id === id);

    return (
        <>
          <Navbar/>
          <div className="ind-section">
            <div className="ind-image">
              <img src={product.image} alt="" />
            </div>
            <div className="ind-details space">
              <div className="ind-company ">
                <h3>{product.company}</h3>
              </div>
              <div className="ind-model space">
                <h2>{product.model}</h2>
              </div>
              <div className="ind-price ">
                <h2>{product.price}</h2>
              </div>
              <div className="ind-desc space">
                <p>{product.description}</p>
              </div>
              <button >Add to Cart</button>
            </div>
          </div>
        </>
      );
    };
 
export default MobileDynamic;