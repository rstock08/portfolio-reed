import React from 'react';
import { Image, Popup } from 'semantic-ui-react'
import { ITile } from "./TileData";

export enum popupDirection {
    topL = "top left",
    topR = "top right",
    bottomR = "bottom right",
    bottomL = "bottom left",
    rightCenter = "right center",
    leftCenter = "left center",
    topC = "top center",
    bottomC = "bottom center"
}

interface IProps {
    tileData: ITile[];
    popupDirection: popupDirection | undefined;
}

export function TechSideImages(props: IProps) {
    return (
        <div>
            {props.tileData.map((tile: ITile) => (
                <div style={{ paddingTop: ".5rem" }}>
                    <Popup
                        trigger={<Image size="small" src={tile.img} circular />}
                        content={tile.title}
                        size='large'
                        position={props.popupDirection}
                    />

                </div>
            ))}
        </div>
    )
}
