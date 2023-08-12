"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CategoriesPanel from "./categories-panel";

interface Props extends ICmptProps {}

interface MenuItem {
  id: number;
  name: string;
  type: "button" | "link";
  link?: string;
  sub: boolean;
  active?: boolean;
}

const Menu: React.FC<Props> = (props) => {
  const router = useRouter();

  const [menus, setMenus] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Categories",
      type: "button",
      link: "",
      sub: true,
      active: false,
    },
    { id: 2, name: "Pages", type: "link", link: "", sub: false },
    { id: 3, name: "Contact Us", type: "link", link: "", sub: false },
    { id: 4, name: "About Us", type: "link", link: "/about-us", sub: false },
  ]);

  const menuItemClick = (menuItem: MenuItem) => {
    if (menuItem.type === "button") {
      const index = menus.findIndex((item) => item.id === menuItem.id);
      menuItem.active = !menuItem.active;
      menus[index] = menuItem;
      setMenus([...menus]);
    } else {
      if (menuItem.link) router.push(menuItem.link);
    }
  };

  return (
    <>
      <ul
        className={[
          " flex items-center text-sm text-font-100",
          props.className,
        ].join(" ")}
      >
        {menus.map((item) => {
          return (
            <li key={item.id} className="mx-4 relative">
              <button
                onClick={() => menuItemClick(item)}
                className={[
                  "flex items-center  after:block after:absolute after:h-1 after:w-2.5 duration-200  after:transition-all after:rounded-sm after:-bottom-1 after:left-0",
                  item.active ? "after:bg-primary-100" : "after:bg-transparent",
                  item.type === "link"
                    ? "after:bg-transparent hover:after:bg-primary-100"
                    : " ",
                ].join(" ")}
              >
                <span>{item.name}</span>
                {item.sub && (
                  <i
                    className={[
                      "iconfont icon-arrow text-font-50 transition-all duration-200",
                      item.active ? "-rotate-180" : "",
                    ].join(" ")}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {menus[0].active && (
        <div className="w-full fixed top-20 left-0 z-50">
          <CategoriesPanel />
        </div>
      )}
    </>
  );
};

export default Menu;
