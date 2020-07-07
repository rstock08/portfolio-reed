import React from "react";
import jumbo from "../resources/central-asia.jpg"

interface IProps {

}

export function Jumbotron(props: IProps | undefined) {
    return (
        <div>
            <img src={jumbo} alt="space" style={{ minHeight: "100%", minWidth: "100%", position: "fixed", top: "0", bottom: "0" }} />
        </div>
    )
}