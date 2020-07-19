import React, { useEffect, useState } from "react";
import { Jumbotron } from "./Jumbotron";
import { AboutMe } from "./AboutMe";
import StepperComponent from "./StepperComponent";
import { ActionButtonsComponent } from "./ActionButtonsComponent";
import { Navbar } from "./Navbar";
import { Grid } from "@material-ui/core";
import { Skills } from "./Skills";
import { ContactMe } from "./ContactMe";

export interface IPage {
    pageName: string,
    pageNumber: number,
    isActive: boolean,
}

export interface ISkill {
    name: string,
    progress: number,
    category: string,
}

export interface ICategory {
    category: string,
    displayName: string,
    isActive: boolean,
}

export function AppContainer() {

    const [page, setPage] = useState([
        {
            pageName: "home",
            pageNumber: 0,
            isActive: false,
        },
        {
            pageName: "aboutme",
            pageNumber: 1,
            isActive: false,
        },
        {
            pageName: "skills",
            pageNumber: 2,
            isActive: true,
        },
        {
            pageName: "contactme",
            pageNumber: 3,
            isActive: false,
        },
    ]);

    const [skillCategory, setSkillCategory] = useState([
        {
            category: "frontend",
            displayName: "FRONTEND LANGUAGES",
            isActive: true,
        },
        {
            category: "backend",
            displayName: "BACKEND LANGUAGES",
            isActive: false,
        },
        {
            category: "tools",
            displayName: "TOOLS/SOFTWARE",
            isActive: false,
        },
    ]);

    const [skills, setSkills] = useState([
        // Frontend
        {
            name: "React",
            progress: 80,
            category: "frontend"
        },
        {
            name: "Material UI",
            progress: 90,
            category: "frontend"
        },
        {
            name: "Semantic UI",
            progress: 90,
            category: "frontend"
        },
        {
            name: "JavaScript",
            progress: 90,
            category: "frontend"
        },
        {
            name: "TypeScript",
            progress: 85,
            category: "frontend"
        },
        {
            name: "Jest",
            progress: 70,
            category: "frontend"
        },
        {
            name: "Enzyme",
            progress: 70,
            category: "frontend"
        },
        {
            name: "Bootstrap v4",
            progress: 75,
            category: "frontend"
        },
        {
            name: "CSS",
            progress: 70,
            category: "frontend"
        },

        // Backend
        {
            name: "Java",
            progress: 70,
            category: "backend"
        },
        {
            name: "Spring Boot",
            progress: 70,
            category: "backend"
        },
        {
            name: "C#",
            progress: 85,
            category: "backend"
        },
        {
            name: "WPF",
            progress: 80,
            category: "backend"
        },
        {
            name: "Express.js",
            progress: 70,
            category: "backend"
        },
        {
            name: "Feathers.js",
            progress: 70,
            category: "backend"
        },
        {
            name: "SQL",
            progress: 75,
            category: "backend"
        },

        // Tools/Software
        {
            name: "AWS",
            progress: 70,
            category: "tools"
        },
        {
            name: "Heroku",
            progress: 70,
            category: "tools"
        },
        {
            name: "Docker",
            progress: 80,
            category: "tools"
        },
        {
            name: "PGAdmin",
            progress: 90,
            category: "tools"
        },
        {
            name: "IntelliJ",
            progress: 85,
            category: "tools"
        },
        {
            name: "Visual Studio",
            progress: 85,
            category: "tools"
        },
        {
            name: "Jira/Confluence",
            progress: 80,
            category: "tools"
        },
        {
            name: "Source Tree",
            progress: 90,
            category: "tools"
        },
        {
            name: "GIT",
            progress: 80,
            category: "tools"
        },
        {
            name: "Postman",
            progress: 70,
            category: "tools"
        },
        {
            name: "Yarn",
            progress: 95,
            category: "tools"
        },
        {
            name: "NPM",
            progress: 95,
            category: "tools"
        },
    ])

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar page={page} setPage={setPage} />
                </Grid>
                <Grid item xs={12}>
                    <ActionButtonsComponent />
                </Grid>
                {page[0].isActive ? (
                    <Grid item xs={12}>
                        <Jumbotron />
                    </Grid>
                ) : (null)}

                {page[1].isActive ? (<AboutMe />) : (null)}

                {page[2].isActive ? (<Skills
                    skills={skills}
                    skillCategory={skillCategory}
                    setSkillCategory={setSkillCategory}
                />) : (null)}

                {page[3].isActive ? (<ContactMe />) : (null)}

            </Grid>
        </div>

    )
}