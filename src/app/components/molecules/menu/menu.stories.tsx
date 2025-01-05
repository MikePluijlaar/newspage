import { Menu } from "./menu";
import data from "../../../api/mock/menu.json";	
import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Molecules/Menu",
  tags: ['autodocs'],
  component: Menu,
};

export const mainMenu = () => {
  return <Menu items={data[0].mainMenu}></Menu>
}

export const subMenu = () => {
  return <Menu items={data[0].subMenu}></Menu>
}

export default meta;