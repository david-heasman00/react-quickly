import MenuItem from "./MenuItem";

const menuLinks = [
  { title: "Home", href: "/", icon: "home"},
  { title: "Services", href: "/services", icon: "services" },
  { title: "Pricing", href: "/pricing", icon: "pricing"},
  { title: "Blog", href: "/blog", icon: "blog"}
];

function Menu() {
  return <nav>
    <ul className="menu">
      {menuLinks.map((link) => (
        <MenuItem
          key={link.title}
          href={link.href}
          icon={link.icon}
        >
          {link.title}
        </MenuItem>

      ))}
    </ul>
  </nav>;
}

export default Menu;