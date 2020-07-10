import React from "react";
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';

export function ActionButtonsComponent() {
    return (
        <div>
            <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <DescriptionIcon />
                </Fab>
            </div>
            <div style={{ paddingRight: "4rem" }}>

                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <GitHubIcon />
                </Fab>
            </div>
            <div style={{ paddingRight: "7rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <LinkedInIcon />
                </Fab>
            </div>
        </div>
    );
}

