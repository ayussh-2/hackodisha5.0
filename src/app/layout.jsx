import "./globals.css";
import {
    archivo,
    bebasNeue,
    bricolageGrotesque,
    clashDisplay,
    helvetica,
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
                className={`${archivo.variable} ${bebasNeue.variable} ${bricolageGrotesque.variable} ${clashDisplay.variable} ${helvetica.variable} antialiased`}
            >
                <HOC>{children}</HOC>
            </body>
        </html>
    );
}
