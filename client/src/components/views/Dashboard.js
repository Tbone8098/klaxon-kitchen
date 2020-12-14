import Axios from "axios";
import React, { useState, useEffect } from "react";

export const Dashboard = (props) => {
    const [kitchen, setKitchen] = useState(null);
    const [lastQue, setLastQue] = useState(0);

    useEffect(() => {
        console.log("dashboard");
        console.log(props.kitchenId);
        Axios.get(`http://localhost:8000/kitchen/${props.kitchenId}`)
            .then((resp) => {
                console.log(resp);
                setKitchen(resp.data.data);
                const que =
                    resp.data.data.kitchenOrders[
                        resp.data.data.kitchenOrders.length - 1
                    ].que;

                console.log("*" * 20);
                console.log(que);
                if (que > 0) {
                    setLastQue(que);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [lastQue]);

    const addOrder = (e) => {
        e.preventDefault();
        console.log(kitchen._id);

        Axios.post(`http://localhost:8000/order/new`, {
            que: lastQue + 1,
            kitchenId: kitchen._id,
            order: e.target.order.value,
            notes: e.target.notes.value,
        })
            .then(() => {
                console.log("success");
                const newQue = parseInt(lastQue) + 1;
                setLastQue(newQue);
                console.log(lastQue);
            })
            .catch((err) => {
                console.log("err");
            });
    };

    const deleteOrder = (orderId) => {
        console.log(orderId);
        Axios.delete(`http://localhost:8000/order/${orderId}/delete`)
            .then((resp) => {
                console.log(resp);
                const que = lastQue;
                setLastQue(que);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="content">
                {/* <Navbar /> */}
                {kitchen != null ? (
                    <div>
                        <h1>{kitchen.kitchenName}</h1>
                        <div className="row justify-evenly">
                            <div className="OrdersInQue">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Que Number</th>
                                            <th>Order</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kitchen.kitchenOrders.map(
                                            (order, k) => (
                                                <tr key={k}>
                                                    <td>{order.que}</td>
                                                    <td>{order.order}</td>
                                                    <td>
                                                        <span
                                                            onClick={() =>
                                                                deleteOrder(
                                                                    order._id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </span>{" "}
                                                        |{" "}
                                                        <span>
                                                            Change Status
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="addOrderBox">
                                <h3>Add Order</h3>
                                <form onSubmit={addOrder}>
                                    <section>
                                        <label htmlFor="order">Order:</label>
                                        <input
                                            type="text"
                                            name="order"
                                            id="order"
                                        />
                                    </section>
                                    <section>
                                        <label htmlFor="notes">Notes:</label>
                                        <textarea
                                            name="notes"
                                            id="notes"
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                    </section>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
