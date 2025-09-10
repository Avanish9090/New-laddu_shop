import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Item() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const res = await axios.get("https://new-laddu-shop-backend.onrender.com/items");
      const data = res.data.items;
      setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">ALL ITEMS</h1>
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
                  <th>Title</th>
                  <th>About</th>
                  <th>Image Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {items.map((item) => {
                  return (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.path}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm opacity-50">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.about}</td>
                      <td>{item.name}</td>
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
                                  `https://new-laddu-shop-backend.onrender.com/delete/${item._id}`
                                );

                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your file has been deleted.",
                                  icon: "success",
                                });
                                getItems();
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
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
