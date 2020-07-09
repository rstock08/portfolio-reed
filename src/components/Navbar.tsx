import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

interface IProps {

}

export function Navbar(props: IProps | undefined) {
    const handleChange = () => {
        console.log("Changed tab");
    }

    return (
        <AppBar>
            <Tabs
                value={0}
                onChange={handleChange}
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </AppBar>
    )
}