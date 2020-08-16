import React from 'react';
import { Image } from 'semantic-ui-react'
import { ITile } from "./TileData";
import { Grid } from '@material-ui/core';

interface IProps {
    tileData1: ITile[];
    tileData2: ITile[];
}

export function TechSideImagesRow(props: IProps) {
    return (
        <Grid
            style={{ paddingTop: "0px", marginTop: "0px" }}
            container
            direction="row"
            justify="center"
            alignContent="flex-start">
            {props.tileData1.map((tile: ITile) => (
                <Grid item xl={6} lg={6} md={3} sm={4} xs={4} style={{ paddingRight: "1rem", paddingBottom: "1rem" }}>
                    <Image size="small" src={tile.img} circular />
                </Grid>

            ))}
            {props.tileData2.map((tile: ITile) => (
                <Grid item xl={6} lg={6} md={3} sm={4} xs={4}>
                    <Image size="small" src={tile.img} circular />
                </Grid>
            ))}
        </Grid>
    )
}
