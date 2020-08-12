import React from 'react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { ISkill, ICategory } from './AppContainer';
import { SkillBars } from './SkillBars';
import { TitleWithDivider } from './TitleWithDivider';
import { TechSideImages, popupDirection } from './TechSideImages';
import { tileData } from "./TileData";

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

    const tileData1 = tileData.slice(0, 4);
    const tileData2 = tileData.slice(4, 8);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <TitleWithDivider title={"Skills"} />

            <Grid item xs={2} />
            <Grid item xs={1} style={{ paddingRight: "1rem" }}>
                <TechSideImages popupDirection={popupDirection.leftCenter} tileData={tileData1} />
            </Grid>
            <Grid item xs={1} style={{ paddingLeft: "1rem" }}>
                <TechSideImages popupDirection={popupDirection.rightCenter} tileData={tileData2} />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: "10rem" }}>

                {/* <Paper elevation={3} style={{ paddingTop: "2rem", paddingBottom: "1rem", paddingRight: "2rem", paddingLeft: "2rem" }}> */}
                <Tabs
                    value={props.skillCategory.findIndex((category: ICategory) => category.isActive === true)}
                    onChange={(e) => handleChange(e)}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    {props.skillCategory.map((category: ICategory) => {
                        return (<Tab label={category.displayName} />)
                    })}
                </Tabs>
                <SkillBars skills={props.skills} skillCategory={props.skillCategory} />
                {/* </Paper> */}
            </Grid>
            <Grid item xs={2} />
        </Grid >
    )
}