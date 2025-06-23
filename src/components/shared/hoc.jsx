"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function HOC({ children }) {
    return <ReactLenis root>{children}</ReactLenis>;
}

export default HOC;
