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
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <ActionButtonsComponent />
                </Grid>
                <Grid item xs={12}>
                    <Jumbotron />
                </Grid>
            </Grid>
        </div>

    )
}