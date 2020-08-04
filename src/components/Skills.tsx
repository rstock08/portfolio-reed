import React from 'react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { ISkill, ICategory } from './AppContainer';
import { SkillBars } from './SkillBars';
import { TechnologyLogos } from './TechnologyLogos';
import { ProjectCarousel } from './ProjectCarousel';
import { ModalDiagram } from './ModalDiagram';

interface IProps {
    skills: ISkill[];
    skillCategory: ICategory[];
    setSkillCategory(value: ICategory[]): void;
}

export function Skills(props: IProps) {
    const handleChange = (e: any) => {
        let tempSkillCategory = [...props.skillCategory];
        let indexNextActive = props.skillCategory.findIndex((category: ICategory) => category.displayName === e.currentTarget.innerText);
        let indexCurrentActive = props.skillCategory.findIndex((category: ICategory) => category.isActive === true);
        if (indexNextActive === -1 || indexCurrentActive === -1) {
            tempSkillCategory[0].isActive = true;
            tempSkillCategory[1].isActive = false;
            tempSkillCategory[2].isActive = false;
        }
        else {
            tempSkillCategory[indexCurrentActive].isActive = false;
            tempSkillCategory[indexNextActive].isActive = true;
            props.setSkillCategory([...tempSkillCategory]);
        }
    }

    return (
        <Grid container style={{ paddingTop: "2rem" }}>
            <Grid item xs={1} />

            <Grid item xs={4}>
                <ModalDiagram />
                {/* <ProjectCarousel /> */}
                {/* <TechnologyLogos /> */}
            </Grid>

            <Grid item xs={1} />

            <Grid item xs={5}>
                {/* <Paper elevation={3} style={{ paddingTop: "2rem", paddingBottom: "1rem", paddingRight: "2rem", paddingLeft: "2rem" }}> */}
                <Tabs
                    value={props.skillCategory.findIndex((category: ICategory) => category.isActive === true)}
                    onChange={(e) => handleChange(e)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {props.skillCategory.map((category: ICategory) => {
                        return (<Tab label={category.displayName} />)
                    })}
                </Tabs>
                <SkillBars skills={props.skills} skillCategory={props.skillCategory} />
                {/* </Paper> */}
            </Grid>

            <Grid item xs={1} />
        </Grid >
    )
}