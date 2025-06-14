import "./globals.css";
import {
    archivo,
    archivoBlack,
    bebasNeue,
    bricolageGrotesque,
    clashDisplay,
    helvetica,
    oxanium,
} from "@/fonts";
import HOC from "../components/shared/hoc";

export const metadata = {
    title: "Hackodisha 5.0",
    description: "Powered by Webwiz NIT Rourkela",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${archivo.variable} ${archivoBlack.variable} ${bebasNeue.variable} ${bricolageGrotesque.variable} ${clashDisplay.variable} ${helvetica.variable} ${oxanium.variable} antialiased`}
            >
                <HOC>{children}</HOC>
            </body>
        </html>
    );
}
