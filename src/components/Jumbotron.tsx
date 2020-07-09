import React from "react";
import jumbo from "../resources/central-asia.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

interface IProps {

}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export function Jumbotron(props: IProps | undefined) {

    const classes = useStyles();
    return (
        <div>
            <Typography>
                asdasdsad
            </Typography>
        </div>
    )
}