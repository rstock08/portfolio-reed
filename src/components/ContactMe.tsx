import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { TitleWithDivider } from './TitleWithDivider';

interface IProps {

}

export function ContactMe(props: IProps | undefined) {
    return (
        <Grid container>
            <TitleWithDivider title={"About Me"} />
            <Grid container justify="center">
                <Grid item xl={4} lg={4} md={6} sm={8} xs={10}>
                    <Paper style={{ paddingTop: "4em", paddingBottom: "4em", paddingLeft: "4em", paddingRight: "4em" }}>
                        <Form action="https://formspree.io/mvowyqdw" method="POST">
                            <Form.Field
                                type="text" 
                                name="name"
                                control={Input}
                                placeholder="Name"
                            />
                            <Form.Field
                                type="email" 
                                name="_replyto"
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
                                type="submit"
                            />
                        </Form>
                    </Paper>
                </Grid>
                <Grid item />
            </Grid>
        </Grid>
    )
}