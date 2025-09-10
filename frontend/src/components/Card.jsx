import { Navigate, useNavigate } from "react-router-dom";
import OrderNow from "./OrderNow";

function Card({ item }) {
  const Navigate = useNavigate();
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96  shadow-2xl hover:scale-105 duration-200 ">
          <figure className="px-10 pt-10">
            <img src={item.path} alt="sweet" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.about}</p>
            <div className="card-actions">
              <button
                onClick={() => {
                  Navigate("/order", { state: { item } });
                }}
                className="btn btn-primary bg-orange-400 text-black"
              >
                {item.price} .Rs/Kg
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
