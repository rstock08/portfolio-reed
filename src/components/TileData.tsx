import Java from "../resources/logos/java-icon.png";
import CSharp from "../resources/logos/csharp-icon.png";
import HuntingtonIngalls from "../resources/logos/huntington-ingalls-icon.png";
import JavaScript from "../resources/logos/javascript-icon.png";
import React from "../resources/logos/react-icon.png";
import TypeScript from "../resources/logos/typescript-icon.png";
import RockwellCollins from "../resources/logos/rockwell-collins-icon.jpg";
import BoozAllenHamilton from "../resources/logos/booz-allen-hamilton-icon.png";

export interface ITile {
    img: string,
    title: string,
    author: string,
    cols: number
}

export const tileData: ITile[] = [
    {
        img: Java,
        title: "Java",
        author: "Oracle",
        cols: 1
    },
    {
        img: CSharp,
        title: "CSharp",
        author: "Microsoftt",
        cols: 1
    },
    {
        img: HuntingtonIngalls,
        title: "DoD Contractor",
        author: "Huntington Ingalls",
        cols: 3
    },
    {
        img: BoozAllenHamilton,
        title: "DoD Contractor",
        author: "Booz Allen Hamilton",
        cols: 3
    },
    {
        img: JavaScript,
        title: "JavaScript",
        author: "JavaScript",
        cols: 1
    },
    {
        img: TypeScript,
        title: "TypeScript",
        author: "Microsoft",
        cols: 1
    },
    {
        img: RockwellCollins,
        title: "DoD Contractor",
        author: "Rockwell Collins",
        cols: 2
    },
    {
        img: React,
        title: "React",
        author: "FaceBook",
        cols: 1
    }
]