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

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About us",
      link: "#AboutUs",
    },
    {
      name: "Contact us",
      link: "#contact",
    },
    {
      name: "Events",
      link: "#events",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <NavbarUi>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <DiscordButton/>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative font-archivo font-semibold  text-black hover:text-[#7920D0] ">
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
    </div>
  );
}

 