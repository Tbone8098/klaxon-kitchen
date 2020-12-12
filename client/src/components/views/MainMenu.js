import { navigate } from "@reach/router";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/mainMenu.css";

/*
The main menu will display all the kitchens available.
The user will be able to click on one of the kitchens 
and be directed to that specific kitchen where they will
be able to input an order.
*/

export const MainMenu = () => {
    const [allKitchens, setAllKitchens] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/kitchen/all")
            .then((resp) => {
                setAllKitchens(resp.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const createNewKitchen = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/kitchen/new", {
            kitchenName: e.target.name.value,
        })
            .then((resp) => {
                console.log(resp);
                let newKitchen = resp.data.data;
                let tempKitchens = allKitchens;

                setAllKitchens([...tempKitchens, newKitchen]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const goToKitchen = (e) => {
        navigate(`/dashboard/${e.kitchen._id}`);
    };

    return (
        <div>
            <h1>Main Menu</h1>
            <h3>Add a Kitchen</h3>
            <form onSubmit={createNewKitchen}>
                <label htmlFor="name">Kitchen Name:</label>
                <input type="text" name="name" id="kitchenName" />
                <button>Create</button>
            </form>
            <div className="allKitchens">
                {allKitchens.map((kitchen, k) => (
                    <div
                        className="kitchen"
                        key={k}
                        onClick={() => goToKitchen({ kitchen })}
                    >
                        <h3>{kitchen.kitchenName}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
