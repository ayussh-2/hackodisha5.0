import { Archivo, Bricolage_Grotesque, Bebas_Neue } from "next/font/google";

import localFont from "next/font/local";

export const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-archivo",
});

export const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-bricolage-grotesque",
});

export const helvetica = localFont({
    src: [
        {
            path: "../fonts/helvetica/helvetica-compressed.otf",
            weight: "400",
            style: "variable",
        },
    ],
    variable: "--font-helvetica",
    fallback: ["Arial", "sans-serif"],
});

export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});

export const clashDisplay = localFont({
    src: [
        {
            path: "../fonts/clash_display/ClashDisplay-Variable.woff2",
            style: "variable",
        },
    ],
    variable: "--font-clash-display",
});
