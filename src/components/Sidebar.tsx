"use client";

import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "./graphics/StaggeredMenu";

export default function Sidebar() {
  const links: StaggeredMenuItem[] = [
    { label: "Home", ariaLabel: "Home section", link: "#hero" },
    { label: "About", ariaLabel: "About section", link: "#about" },
    { label: "Skills", ariaLabel: "Skills section", link: "#skills" },
    { label: "Projects", ariaLabel: "Projects section", link: "#projects" },
    { label: "Contact", ariaLabel: "Contact section", link: "#contact" },
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: "GitHub", link: "https://github.com/kadalisana" },
    { label: "LinkedIn", link: "https://linkedin.com/in/kadalisana" },
  ];

  return (
    <StaggeredMenu
      items={links}
      socialItems={socialItems}
      position="left"
      isFixed={true}
      logoUrl=""
      menuButtonColor="#ffffff"
      accentColor="#5227FF"
      changeMenuColorOnOpen={true}
    />
  );
}
