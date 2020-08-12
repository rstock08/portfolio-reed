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
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                        >
                            <Grid item md={3} sm={4} xs={5}>
                                <Typography noWrap><b>{skill.name}</b></Typography>
                            </Grid>
                            <Grid item md={9} sm={8} xs={7}>
                                <Progress percent={skill.progress} warning />
                            </Grid>
                        </Grid>
                    );
                }
                else {
                    return null;
                }
            })}
        </div>
    )
}