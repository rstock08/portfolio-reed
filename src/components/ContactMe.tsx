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
            <Grid item xl={4} lg={4} md={3} sm={2} xs={1} />
            <Grid item xl={4} lg={4} md={6} sm={8} xs={10} style={{ paddingTop: "2em", paddingBottom: "3em" }}>
                <Divider variant="middle" style={{ height: ".1rem" }} />
            </Grid>
            <Grid item xl={4} lg={4} md={3} sm={2} xs={1} />
            <Grid container justify="center">
                <Grid item xl={4} lg={4} md={6} sm={8} xs={10}>
                    <Paper style={{ paddingTop: "4em", paddingBottom: "4em", paddingLeft: "4em", paddingRight: "4em" }}>
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