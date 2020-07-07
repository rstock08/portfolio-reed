import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface IProps {

}

export function Navbar(props: IProps | undefined) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Contact Me</Button>
            </Toolbar>
        </AppBar>
    )
}