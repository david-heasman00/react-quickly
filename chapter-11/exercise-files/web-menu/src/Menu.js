import { useContext } from "react";
import Context from "./Context";
import MenuItem from "./MenuItem";

function Menu() {
  const menuLinks = useContext(Context);
  return (
    <nav>
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
    </nav>
  );
}

export default Menu;