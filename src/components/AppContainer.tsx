import React from "react";
import { Jumbotron } from "./Jumbotron";
import { AboutMe } from "./AboutMe";
import StepperComponent from "./StepperComponent";
import { ActionButtonsComponent } from "./ActionButtonsComponent";
import { Navbar } from "./Navbar";
import { Grid } from "@material-ui/core";

export function AppContainer() {

    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12} style={{ paddingTop: "1.5rem", paddingRight: "1.5rem", float: "right" }}>
                    <ActionButtonsComponent />

                </Grid>
                <Grid item xs={12} style={{ paddingTop: "5rem", float: "right" }}>
                    <StepperComponent />
                </Grid>
                <Grid style={{ paddingTop: "5rem" }}>
                    <Jumbotron />
                </Grid>
                <Grid container>
                    <AboutMe />
                </Grid>
            </Grid>
        </div>

    )
}