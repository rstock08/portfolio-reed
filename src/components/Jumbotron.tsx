import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

interface IProps {

}

export function Jumbotron(props: IProps | undefined) {

    const [titleIndex, setTitleIndex] = useState(0);
    const TITLES = [
        "A Software Engineer.",
        "/ Full-Stack Developer.",
        "A self-starter.",
        "An enthusiastic learner.",
        "An innovator."
    ];

    useEffect(() => {
        setTimeout(() => {
            titleIndex < 4 ? (setTitleIndex(titleIndex => titleIndex + 1)) : (setTitleIndex(titleIndex => 0));
        }, 2000);
    }, [titleIndex]);

    return (
        <div style={{ paddingTop: "10rem" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography style={{ paddingBottom: ".5rem" }} align="center" variant="h2" component="h2" gutterBottom color="textSecondary">
                        <b>Hi, I'm Reed.</b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{ paddingBottom: "1rem" }} align="center" variant="h4" component="h2" gutterBottom color="secondary">
                        {TITLES[titleIndex]}
                    </Typography>
                    <Typography align="center" variant="h5" component="h2" color="textSecondary">
                        I'm always looking forward -
                        <br />
                        to taking on the next challenge!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}