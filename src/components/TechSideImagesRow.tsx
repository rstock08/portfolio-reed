import React from 'react';
import { Image, Popup } from 'semantic-ui-react'
import { ITile } from "./TileData";
import { Grid } from '@material-ui/core';

interface IProps {
    tileData1: ITile[];
    tileData2: ITile[];
}

export function TechSideImagesRow(props: IProps) {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            {props.tileData1.map((tile: ITile) => (
                <Grid item xl={6} lg={6} md={3} sm={4} xs={4} style={{ paddingRight: "1rem", paddingBottom: "1rem" }}>
                    <Popup
                        trigger={<Image size="small" src={tile.img} circular />}
                        content={tile.title}
                        size='large'
                        position={tile.popupDirection}
                    />
                </Grid>

            ))}
            {props.tileData2.map((tile: ITile) => (
                <Grid item xl={6} lg={6} md={3} sm={4} xs={4}>
                    <Popup
                        trigger={<Image size="small" src={tile.img} circular />}
                        content={tile.title}
                        size='large'
                        position={tile.popupDirection}
                    />
                </Grid>

            ))}
        </Grid>
    )
}
