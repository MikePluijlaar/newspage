import { Header } from "./header";
import data from "../../../api/mock/menu.json";
import type { Meta } from "@storybook/react";

const meta: Meta = {
    title: "Organisms/Header",
    tags: ['autodocs'],
    component: Header,
};

export const Default = () => {
    return <Header menuData={data} />
}

export default meta;