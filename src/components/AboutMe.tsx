import React from 'react';
import { Image } from 'semantic-ui-react'
import ProfileImage from '../resources/profile-image.jpg';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, Icon } from '@material-ui/core';
import { IPage } from './AppContainer';

interface IProps {
    page: IPage[]
    setPage(value: IPage[]): void;
}

export function AboutMe(props: IProps) {

    const handleOnClick = () => {
        let newPage: IPage[] = [...props.page];
        newPage[1].isActive = false;
        newPage[3].isActive = true;
        props.setPage(newPage);
    }

    return (
        <Grid container style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
            <Grid item xl={1} lg={1} md={4} sm={3} xs={2} />
            <Grid item xl={3} lg={3} md={4} sm={6} xs={8} >
                <Image src={ProfileImage} circular />
            </Grid>
            <Grid item xl={1} lg={1} md={4} sm={3} xs={2} />


            <Grid item xl={"auto"} lg={"auto"} md={3} sm={2} />
            <Grid item xl={5} lg={5} md={6} sm={8}>
                <Typography variant="h3" align="center" color="textSecondary">
                    <b>About Me</b>
                </Typography>
                <Typography variant="h6" align="center" style={{ paddingTop: "2rem" }} color="textSecondary">
                    Hello - I'm Reed.
                    <br />
                    <br />
                    I'm a full-stack software engineer with broad experience in the development world. My specializations include writing desktop applications (C# &.NET) and web applications (Java & React.js).
                    I also have significant experience with SQL RDBMs. I'm passionate about helping businesses solve their challenges with technical solutions built to work exactly how they need them to. Impossible doesn't exist - it just takes a little (sometimes a lot) of creative thinking.
                    <br />
                    <br />
                    I am always open to hearing about new opportunities. If you think I may be a good match for a position you have,
                    let's chat! You can send me an email at ReedStock1992@gmail.com or send me a message <Button color="secondary" endIcon={<Icon>send</Icon>} onClick={handleOnClick}>here!</Button>
                </Typography>
            </Grid>
            <Grid item xl={1} lg={1} md={3} sm={2} />
        </Grid>
    )
}