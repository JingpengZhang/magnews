"use client";
interface Props extends ICmptProps {
  handleSelect: (category: ICategory | null) => void;
}

const CategoryMenu: React.FC<Props> = ({ className, handleSelect }) => {
  const menus: ICategory[] = [
    { id: 1, name: "Category One" },
    { id: 2, name: "Category Two" },
    { id: 3, name: "Category Three" },
    { id: 4, name: "Category Four" },
    { id: 5, name: "Category Five" },
  ];

  return (
    <div
      className={[
        "w-40 bg-white absolute top-14 left-0 rounded-main shadow-main p-4",
        className,
      ].join(" ")}
    >
      <ul className="flex flex-col text-font-75 text-xs w-full">
        <li
          onClick={() => handleSelect(null)}
          className="w-full  text-start mb-3 last-of-type:mb-0 hover:text-primary-100"
        >
          <span>All</span>
        </li>
        {menus.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className="w-full  text-start mb-3 last-of-type:mb-0 hover:text-primary-100"
            >
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryMenu;
