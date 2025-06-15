"use client";
import {
  NavbarUi,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/navbar-ui";
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
            
            <NavbarButton/>
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
             
          </MobileNavMenu>
        </MobileNav>
      </NavbarUi>
      
 
    </div>
  );
}

 