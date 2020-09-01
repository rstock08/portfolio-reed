import React from "react";
import { tileData, popupDirection } from "../components/TileData";
import Java from "../resources/logos/java-icon.png";

it("Returns correct type", () => {
    console.log(typeof tileData);
    expect(tileData[0]).toEqual({
        img: Java,
        title: "Java",
        author: "Oracle",
        cols: 1,
        popupDirection: popupDirection.bottomR
    });
});