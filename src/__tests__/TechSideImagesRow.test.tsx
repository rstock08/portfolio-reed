import React from "react";
import { shallow } from "enzyme";
import { ITile, popupDirection } from "../components/TileData";
import { TechSideImagesRow } from "../components/TechSideImagesRow";
import { Image } from 'semantic-ui-react'
import Java from "../resources/logos/java-icon.png";


let mockTileData1: ITile[];
let mockTileData2: ITile[];

beforeEach(() => {
    mockTileData1 = [{
        img: Java,
        title: "Java",
        author: "Oracle",
        cols: 1,
        popupDirection: popupDirection.bottomR
    },
    {
        img: Java,
        title: "CSharp",
        author: "Microsoftt",
        cols: 1,
        popupDirection: popupDirection.bottomR
    }];
    mockTileData2 = [{
        img: Java,
        title: "React",
        author: "FaceBook",
        cols: 1,
        popupDirection: popupDirection.bottomR
    },
    {
        img: Java,
        title: "JavaScript",
        author: "JavaScript",
        cols: 1,
        popupDirection: popupDirection.bottomR
    }];
});

describe("TechSideImagesRow Testing Suite: ", () => {
    it("Smoke test", () => {
        const wrapper = shallow(<TechSideImagesRow tileData1={mockTileData1} tileData2={mockTileData2} />)
        expect(wrapper).toBeTruthy();
    });
    it("4 Images mapped test", () => {
        const wrapper = shallow(<TechSideImagesRow tileData1={mockTileData1} tileData2={mockTileData2} />)
        expect(wrapper.find(Image)).toHaveLength(4);
    });
});