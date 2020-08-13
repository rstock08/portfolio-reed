import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

interface IProps {
    title: string
}

export function TitleWithDivider(props: IProps) {
    return (
        <Grid container style={{ paddingTop: "4rem" }}>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" color="textSecondary">
                    <b>
                        {props.title}
                    </b>
                </Typography>
            </Grid>
            <Grid item xl={4} lg={4} md={3} sm={2} xs={1} />
            <Grid item xl={4} lg={4} md={6} sm={8} xs={10} style={{ paddingTop: "2em", paddingBottom: "3em" }}>
                <Divider variant="middle" style={{ height: ".1rem" }} />
            </Grid>
            <Grid item xl={4} lg={4} md={3} sm={2} xs={1} />
        </Grid >
    )
}