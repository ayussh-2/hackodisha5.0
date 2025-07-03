import {
    Archivo,
    Archivo_Black,
    Bricolage_Grotesque,
    Bebas_Neue,
    Oxanium,
    Nunito_Sans,
} from "next/font/google";

import localFont from "next/font/local";

export const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-archivo",
});

export const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-archivo-black",
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

export const oxanium = Oxanium({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-oxanium",
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

export const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-nunito-sans",
});
