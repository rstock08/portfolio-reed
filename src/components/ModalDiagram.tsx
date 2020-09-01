import React from 'react';
import { tileData, ITile } from "./TileData";
import { GridListTile, GridList } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 450,
        },
    }),
);

export function ModalDiagram() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={80} cols={1} className={classes.gridList}>
                {tileData.map((tile: ITile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}