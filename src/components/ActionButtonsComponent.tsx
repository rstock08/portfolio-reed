import React from "react";
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton, Tooltip } from "@material-ui/core";

interface IProps {
    openResumeModal: boolean;
    setOpenResumeModal(value: boolean): void;
}

export function ActionButtonsComponent(props: IProps) {

    const handleOnClick = () => {
        props.setOpenResumeModal(!props.openResumeModal)
    }

    return (
        <div>
            <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <Tooltip title="Check out my resume!" arrow>
                        <IconButton onClick={() => handleOnClick()} color="inherit">
                            <DescriptionIcon />
                        </IconButton>
                    </Tooltip>
                </Fab>
            </div>
            <div style={{ paddingRight: "4rem" }}>

                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <Tooltip title="Navigate to my Github." arrow>
                        <IconButton onClick={() => window.open("https://github.com/rstock08")} color="inherit">
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                </Fab>
            </div>
            <div style={{ paddingRight: "7rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary" >
                    <Tooltip title="Connect with me on LinkedIn!" arrow>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/reed-stock/")} color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Fab>
            </div>
        </div>
    );
}

