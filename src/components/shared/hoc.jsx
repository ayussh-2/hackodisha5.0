"use client";
import { ReactLenis } from "@/provider/lenis";

function HOC({ children }) {
    return <ReactLenis root>{children}</ReactLenis>;
}

export default HOC;
