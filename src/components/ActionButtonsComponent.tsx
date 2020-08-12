import React from "react";
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";
import { Popup } from "semantic-ui-react";

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
                    <Popup
                        trigger={
                            <IconButton onClick={() => handleOnClick()} color="inherit">
                                <DescriptionIcon />
                            </IconButton>
                        }
                        content='You can look over my resume!'
                        position='bottom right'
                    />
                </Fab>
            </div>
            <div style={{ paddingRight: "4rem" }}>

                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <Popup
                        trigger={
                            <IconButton onClick={() => window.open("https://github.com/rstock08")} color="inherit">
                                <GitHubIcon />
                            </IconButton>
                        }
                        content='Feel free to check out my Github.'
                        position='bottom right'
                    />
                </Fab>
            </div>
            <div style={{ paddingRight: "7rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary" >
                    <Popup
                        trigger={
                            <IconButton onClick={() => window.open("https://www.linkedin.com/in/reed-stock/")} color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                        }
                        content='Connect with me on LinkedIn!'
                        position='bottom right'
                    />
                </Fab>
            </div>
        </div>
    );
}

