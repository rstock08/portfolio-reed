import React from "react";
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';

export function ActionButtonsComponent() {
    return (
        <div>
            <Fab style={{ float: "right" }} color="secondary">
                <LinkedInIcon />
            </Fab>
            <Fab style={{ float: "right" }} color="secondary">
                <DescriptionIcon />
            </Fab>
            <Fab style={{ float: "right" }} color="secondary">
                <GitHubIcon />
            </Fab>
        </div>
    );
}

