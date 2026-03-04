import { NavLink, NavLinkProp } from "./nav-link";

const navLinks: Array<NavLinkProp> = [
  { href: "/", children: "Home" },
  { href: "/company", children: "Company" },
  { href: "/switch-socket", children: "Switch & Socket" },
  { href: "#", children: "Showrooms" },
  { href: "/career", children: "Career" },
  { href: "/contact", children: "Contact" },
];

export function NavList() {
  return (
    <ul className="flex items-center gap-4">
      {navLinks.map((link, i) => (
        <li key={i}>
          <NavLink href={link.href}>{link.children}</NavLink>
        </li>
      ))}
    </ul>
  );
}
