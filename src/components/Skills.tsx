import React from 'react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { ISkill, ICategory } from './AppContainer';
import { SkillBars } from './SkillBars';
import { TitleWithDivider } from './TitleWithDivider';
import { TechSideImagesRow } from './TechSideImagesRow';
import { tileData } from "./TileData";

interface IProps {
    skills: ISkill[];
    skillCategory: ICategory[];
    setSkillCategory(value: ICategory[]): void;
}

export function Skills(props: IProps) {

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        let newSkillCategory = [...props.skillCategory];
        let indexCurrentActive = props.skillCategory.findIndex((category: ICategory) => category.isActive === true);
        newSkillCategory[indexCurrentActive].isActive = false;
        newSkillCategory[newValue].isActive = true;
        props.setSkillCategory([...newSkillCategory]);
    }

    const tileData1 = tileData.slice(0, 4);
    const tileData2 = tileData.slice(4, 8);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ paddingBottom: "5rem" }}
        >
            <TitleWithDivider title={"Skills"} />

            <Grid item xl={1} lg={1} md={3} sm={2} />
            <Grid item xl={2} lg={2} md={6} sm={8} xs={12}
                justify="center"
                alignContent="flex-start"
            >
                <TechSideImagesRow tileData1={tileData1} tileData2={tileData2} />
            </Grid>
            <Grid item xl={1} lg={1} md={3} sm={2} />

            <Grid item xl={1} lg={1} md={2} sm={1} xs={1} />
            <Grid item xl={6} lg={6} md={8} sm={10} xs={10} style={{ paddingTop: "2rem" }} >
                <Tabs
                    scrollButtons="on"
                    variant="scrollable"
                    value={props.skillCategory.findIndex((category: ICategory) => category.isActive === true)}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    {props.skillCategory.map((category: ICategory) => {
                        return (<Tab wrapped label={category.displayName} />)
                    })}
                </Tabs>
                <SkillBars skills={props.skills} skillCategory={props.skillCategory} />
            </Grid>
            <Grid item xl={1} lg={1} md={2} sm={1} xs={1} />
        </Grid >
    )
}