import React from 'react';
import { Grid, Typography, Divider, Paper } from '@material-ui/core';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

interface IProps {

}

export function ContactMe(props: IProps | undefined) {
    return (
        <Grid container style={{ paddingTop: "4rem" }}>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" color="textSecondary">
                    <b>
                        Contact Me
                    </b>
                </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "2rem", paddingBottom: "3rem", paddingLeft: "10em", paddingRight: "10em" }}>
                <Divider variant="middle" style={{ height: ".1rem" }} />
            </Grid>
            <Grid container justify="center">
                <Grid item />
                <Grid item xl={4} lg={4} md={6} sm={8} xs={10}>
                    <Paper style={{ paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "4em", paddingRight: "4em" }}>
                        <Form>
                            <Form.Field
                                control={Input}
                                placeholder="Email"
                            />
                            <Form.Field
                                style={{ height: "10em" }}
                                control={TextArea}
                                placeholder="Message"
                            />
                            <Form.Field
                                style={{ backgroundColor: "#fdd835" }}
                                control={Button}
                                content="Send"
                            />
                        </Form>
                    </Paper>
                </Grid>
                <Grid item />
            </Grid>
        </Grid>
    )
}