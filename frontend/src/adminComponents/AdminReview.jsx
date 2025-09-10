import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import AdminHeader from "./AdminHeader";
import Footer from "../components/Footer";

function AdminReview() {
  const [Rdata, setRdata] = useState([]);

  const getReviews = async () => {
    try {
      const res = await axios.get("https://new-laddu-shop-backend.onrender.com/all-reviews");
      setRdata(res.data.allReviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <div>
        <AdminHeader />
        <h1 className="text-4xl font-bold text-center mt-8">
          CUSTOMER REVIEWS
        </h1>
        <div className="flex items-center justify-center border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Says</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Rdata.length >= 1 ? (
                  Rdata.map((item) => {
                    return (
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div>{item.name}</div>
                          </div>
                        </td>
                        <td>{item.says}</td>

                        <th>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  axios.delete(
                                    `https://new-laddu-shop-backend.onrender.com/delete-review/${item._id}`
                                  );

                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                  getReviews();
                                }
                              });
                            }}
                            className="btn btn-ghost btn-xs border-red-400"
                          >
                            delete
                          </button>
                        </th>
                      </tr>
                    );
                  })
                ) : (
                  <h1>No Data found</h1>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdminReview;
