interface Props extends ICmptProps {}

const BottomMenu: React.FC<Props> = ({ className }) => {
  const menus = [
    { id: 1, name: "Profile", icon: "icon-user", onClick: () => {} },
    { id: 2, name: "Marked", icon: "icon-mark", onClick: () => {} },
    { id: 3, name: "Exit", icon: "icon-exit", onClick: () => {} },
  ];

  return (
    <div
      className={[
        " w-full bg-white rounded-main shadow-main p-4",
        className,
      ].join(" ")}
    >
      <ul className="w-full flex flex-col">
        {menus.map((item) => {
          return (
            <li
              key={item.id}
              className="text-font-75 hover:text-primary-100 cursor-pointer flex items-center mb-3 last-of-type:mb-0"
            >
              <i className={["iconfont text-sm mr-1", item.icon].join(" ")} />
              <span className=" text-xs">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomMenu;
