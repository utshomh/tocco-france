import { NavLink, NavLinkProp } from "./nav-link";

export const navLinks: Array<NavLinkProp> = [
  { href: "/", children: "Home" },
  { href: "#", children: "Company" },
  { href: "/switch-socket", children: "Switch & Socket" },
  { href: "#", children: "Showrooms" },
  { href: "/career", children: "Career" },
  { href: "/contact", children: "Contact" },
];

export function NavList() {
  return (
    <ul className="hidden lg:flex items-center gap-4">
      {navLinks.map((link, i) => (
        <li key={i}>
          <NavLink href={link.href}>{link.children}</NavLink>
        </li>
      ))}
    </ul>
  );
}
