import React from 'react';
import { Image } from 'semantic-ui-react'
import ProfileImage from '../resources/profile-image.jpg';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

interface IProps {

}

export function AboutMe(props: IProps | undefined) {
    return (
        <Grid container style={{ paddingTop: "8rem" }}>
            <Grid item xl={1} lg={1} md={4} sm={3} xs={2} />
            <Grid item xl={4} lg={3} md={4} sm={6} xs={8} >
                <Image src={ProfileImage} circular />
            </Grid>
            <Grid item xl={1} lg={1} md={4} sm={3} xs={2} />


            <Grid item xl={1} lg={"auto"} md={3} sm={2} />
            <Grid item xl={4} lg={5} md={6} sm={8}>
                <Typography variant="h3" align="center" color="textSecondary">
                    <b>About Me</b>
                </Typography>
                <Typography variant="h6" align="center" style={{ paddingTop: "2rem" }} color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Grid>
            <Grid item xl={1} lg={1} md={3} sm={2} />
        </Grid>
    )
}