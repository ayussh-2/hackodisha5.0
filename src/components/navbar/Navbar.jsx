"use client";
import {
    NavbarUi,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    DiscordButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { navItems } from "@/config/hero";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative w-full" style={{ zIndex: 1000 }}>
            <NavbarUi>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                        <DiscordButton />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`relative font-archivo font-semibold ${
                                    item.type === "special"
                                        ? " text-[#7920D0] hover:text-[#000]"
                                        : " text-black hover:text-[#7920D0]"
                                } hover:text-primary transition-colors duration-300`}
                                {...(item.type === "special" && {
                                    target: "_blank",
                                })}
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        {/* <div className="flex w-max flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
               <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton> 
            </div> */}
                    </MobileNavMenu>
                </MobileNav>
            </NavbarUi>

            {/* Navbar */}
        </nav>
    );
}
