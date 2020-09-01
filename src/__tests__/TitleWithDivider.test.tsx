import React from "react";
import { shallow } from "enzyme";
import { TitleWithDivider } from "../components/TitleWithDivider";
import { Typography } from "@material-ui/core";

it("Smoke Test", () => {
    const wrapper = shallow(<TitleWithDivider title={"title"} />);
    expect(wrapper).toBeTruthy();
});