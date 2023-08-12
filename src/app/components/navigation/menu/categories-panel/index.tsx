"use client";
import CategoriesCard from "./categories-card";
interface Props extends ICmptProps {}

const CategoriesPanel: React.FC<Props> = (props) => {
  return (
    <div
      className={[
        "inner-page h-fit bg-white shadow-main rounded-main flex p-4",
        props.className,
      ].join(" ")}
    >
      <ul className="flex-grow h-full flex justify-between flex-wrap -mb-4">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <CategoriesCard className="w-[33%] mb-4" />;
        })}
      </ul>
      <div className=" w-48 flex-shrink-0 h-full"></div>
    </div>
  );
};

export default CategoriesPanel;
