import "./globals.css";
import {
    archivo,
    archivoBlack,
    bebasNeue,
    bricolageGrotesque,
    clashDisplay,
    helvetica,
    nunitoSans,
    oxanium,
} from "@/fonts";
import HOC from "@/components/shared/hoc";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata = {
    title: "HackOdisha 5.0",
    description:
        "Largest Student hackathon of Odisha | HackOdisha 5.0 - a thrilling 36-hour online hackathon organized by Webwiz, Nit Rourkela — an event dedicated to fostering community collaboration.",
    image: "https://hackodisha.com/Images/cover.png",
    url: "https://hackodisha.com/",
    keywords: [
        "HackOdisha",
        "HackOdisha 5.0",
        "HackOdisha 2025",
        "HackOdisha 5.0 2025",
        "Hack Odisha",
        "Hackathon",
        "NIT Rourkela",
        "student run hackathon",
        "hackathon in odisha",
        "hackathon in india",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "HackOdisha 5.0",
    image: "https://hackodisha.com/Images/cover.png",
    description:
        "Largest Student hackathon of Odisha | HackOdisha 5.0 - a thrilling 36-hour online hackathon organized by Webwiz, Nit Rourkela — an event dedicated to fostering community collaboration.",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-MLP0HVXXM9"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MLP0HVXXM9', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
                <link
                    rel="icon"
                    href="/Images/cover.png"
                    type="image/x-icon"
                    sizes="any"
                ></link>
                <meta property="og:title" content="HackOdisha 5.0" />
                <meta property="og:url" content="https://hackodisha.com/" />
                <meta
                    property="og:image"
                    content="https://hackodisha.com/Images/cover.png"
                />
                <meta name="twitter:title" content="HackOdisha 5.0" />
                <meta
                    name="twitter:description"
                    content="HackOdisha 5.0 | Largest Student Run Hackathon of Odisha | Participate and Win Prizes, Goodies and subscriptions."
                />
                <meta
                    name="twitter:image"
                    content="https://hackodisha.com/Images/cover.png"
                />
                <meta
                    name="twitter:card"
                    content="https://hackodisha.com/Images/cover.png"
                />
            </head>
            <body
                className={`${archivo.variable} ${archivoBlack.variable} ${bebasNeue.variable} ${bricolageGrotesque.variable} ${clashDisplay.variable} ${helvetica.variable} ${oxanium.variable} ${nunitoSans.variable} antialiased`}
            >
                <Toaster position="top-right" />
                <Navbar />
                <HOC>{children}</HOC>
                <Footer />
            </body>
        </html>
    );
}
