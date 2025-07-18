"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Discord from "../hero/discord";

import React, { useRef, useState } from "react";

export const NavbarUi = ({ children, className }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            id="navbar"
            className={cn(
                "fixed inset-x-0 top-4 lg:top-9 z-40 w-full",
                className
            )}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { visible })
                    : child
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(50px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "40%" : "100%",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "1100px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full lmd:max-w-4xl xl:max-w-7xl flex-row items-center justify-between self-start rounded-3xl border-black border-1 bg-white px-10 py-4 lmd:flex ",
                visible && "bg-white/80",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className={` relative px-4 py-2  text-base not-italic font-semibold leading-none ${
                        item.type === "special"
                            ? " text-[#7920D0] hover:underline underline-offset-4"
                            : " text-black hover:text-[#7920D0]"
                    }`}
                    key={`link-${idx}`}
                    href={item.link}
                    {...(item.type === "special" && {
                        target: "_blank",
                    })}
                >
                    {/* {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                        />
                    )} */}
                    <span className="relative font-archivo z-20 hover:text-[#7920D0] transition-all duration-300">
                        {item.name}
                    </span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                // boxShadow: visible
                //   ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                //   : "none",
                width: visible ? "90%" : "100%",
                // paddingRight: visible ? "12px" : "12px",
                // paddingLeft: visible ? "12px" : "12px",
                // borderRadius: visible ? "4px" : "12px",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] rounded-2xl flex-col items-center justify-between bg-white border border-black px-3 py-2 lmd:hidden",
                // visible && "bg-white/80 dark:bg-neutral-950/80",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({ children, className }) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ",
                        className
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
    return isOpen ? (
        <IconX className="text-black " onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black " onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <Link href="/#home" className="relative z-20  px-2 ">
            <Image
                src="https://res.cloudinary.com/du5qoczcn/image/upload/v1749655318/Frame_dc6fad.svg"
                alt="logo"
                width={100}
                height={80}
            ></Image>
        </Link>
    );
};

export const DiscordButton = () => {
    return <Discord />;
};
