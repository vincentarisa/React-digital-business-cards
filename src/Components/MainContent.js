import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function MainContent(){
    return(
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="d-flex justify-content-center col-md-3 col-sm-3 col-xs-12 mb-5">
                    <Card1 />
                </div>

                <div className="d-flex justify-content-center col-md-3 col-sm-3 col-xs-12 mb-5">
                    <Card2 />
                </div>

                <div className="d-flex justify-content-center col-md-3 col-sm-3 col-xs-12 mb-5">
                    <Card3 />
                </div>

                <div className="d-flex justify-content-center col-md-3 col-sm-3 col-xs-12 mb-5">
                    <Card4 />
                </div>
            </div>
        </div>

    )
}