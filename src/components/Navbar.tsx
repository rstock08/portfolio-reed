import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { IPage } from './AppContainer';


interface INavbarProps {
    page: IPage[];
    setPage: any;
}

export function Navbar(props: INavbarProps) {

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        let newPages: IPage[] = [...props.page];
        let currPageIndex = newPages.findIndex((page: IPage) => page.isActive === true);
        newPages[currPageIndex].isActive = false;
        newPages[newValue].isActive = true;
        props.setPage([...newPages]);
    };

    return (
        <Paper>
            <Tabs
                value={props.page.findIndex((page: IPage) => page.isActive === true)}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
            >
                <Tab label="Home" />
                <Tab label="About Me" />
                <Tab label="Skills" />
                <Tab label="Contact Me" />
            </Tabs>
        </Paper>
    );
}
