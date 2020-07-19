import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Progress } from 'semantic-ui-react';
import { ISkill, ICategory } from './AppContainer';

interface IProps {
    skills: ISkill[];
    skillCategory: ICategory[];
}

export function SkillBars(props: IProps) {
    return (
        <div style={{ paddingTop: "2rem" }}>
            {props.skills.map((skill: ISkill) => {
                let activeCategory: ICategory | undefined = props.skillCategory.find((category: ICategory) => category.isActive === true);
                if (activeCategory && skill.category === activeCategory.category) {
                    return (
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography style={{ paddingTop: ".25rem", paddingRight: "1rem" }} align="center"><b>{skill.name}</b></Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Progress percent={skill.progress} warning />
                            </Grid>
                        </Grid>
                    );
                }
            })}
        </div>
    )
}