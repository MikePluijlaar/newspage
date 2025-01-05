import { MenuItem } from "../../molecules/menu/menu-types";

export interface MenuData {
    mainMenu: MenuItem[];
    subMenu: MenuItem[];
}

export interface HeaderProps {
    /** The menu data **/
    menuData: MenuData[];
}