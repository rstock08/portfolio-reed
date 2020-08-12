import Java from "../resources/logos/java-icon.png";
import CSharp from "../resources/logos/csharp-icon.png";
import JavaScript from "../resources/logos/javascript-icon.png";
import React from "../resources/logos/react-icon.png";
import TypeScript from "../resources/logos/typescript-icon.png";
import Agile from "../resources/logos/agile-logo.jpg";
import AWS from "../resources/logos/aws-logo.png";
import CompTIA from "../resources/logos/security-plus-logo.png";

export interface ITile {
    img: string,
    title: string,
    author: string,
    cols: number
}

export const tileData: ITile[] = [
    {
        img: CompTIA,
        title: "CompTIA Security+",
        author: "CompTIA",
        cols: 1
    },
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
        img: React,
        title: "React",
        author: "FaceBook",
        cols: 1
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
        img: Agile,
        title: "Agile Development",
        author: "Ken, Jeff, Martin",
        cols: 1
    },
    {
        img: AWS,
        title: "Amazon Web Services",
        author: "Amazon",
        cols: 1
    },
]