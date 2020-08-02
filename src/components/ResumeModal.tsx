import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Image } from 'semantic-ui-react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import resume from "../resources/Reed Stock - Resume.jpg"

interface IProps {
    open: boolean
    setOpen(value: boolean): void;
}

export function ResumeModal(props: IProps) {

    const handleClose = () => {
        props.setOpen(!props.open)
    }

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={props.open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Image src={resume} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.setOpen(!props.open)} variant="contained" color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}