import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function MainContent(){
    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="row">
                <div className="col">
                    <Card1 />
                </div>

                <div className="col">
                    <Card2 />
                </div>

                <div className="col">
                    <Card3 />
                </div>

                <div className="col">
                    <Card4 />
                </div>
            </div>
        </div>
    )
}