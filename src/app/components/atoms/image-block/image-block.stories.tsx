import { ImageBlock } from "./image-block";
import type { Meta } from "@storybook/react";

const meta: Meta = {
    title: "Atoms/Image Block",
    tags: ['autodocs'],
    component: ImageBlock,
};

const imageData = {
    src: "https://redactie.rtl.nl/sites/default/files/ANP211024089-1.jpg?itok=fNZx2h3g&width=2048&height=1152&impolicy=semi_dynamic",
    alt: "Image",
    sizes: {
        desktop: {
            width: 1200,
            height: 800,
        },
        mobile: {
            width: 600,
            height: 400,
        },
    },
}

export const Default = () => {
    return <ImageBlock src={imageData.src} alt={imageData.alt} sizes={imageData.sizes}/>
}

export default meta;