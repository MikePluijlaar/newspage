export interface ImageType {
    src: string;
    alt: string;
    sizes: {
        mobile: {
            width: number;
            height: number;
        };
        desktop: {
            width: number;
            height: number;
        };
    }
}
