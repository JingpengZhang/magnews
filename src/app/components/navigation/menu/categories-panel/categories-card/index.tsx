import Image from "next/image";
import Link from "next/link";
import FlagTitle from "@/app/components/flag-title";
import CategoryCarCover from "@/assets/images/temp/category-car.png";

interface Props extends ICmptProps {
  category?: ICategory;
}

const CategoriesCard: React.FC<Props> = ({
  className,
  category = {
    id: 1,
    name: "Car",
    cover: CategoryCarCover,
    children: [
      { id: 11, name: "Car News" },
      { id: 12, name: "Car Article" },
      { id: 13, name: "Car Price" },
      { id: 14, name: "Car Video" },
    ],
  },
}) => {
  return (
    <div className={["flex items-start h-40", className].join(" ")}>
      {/** 分类配图 */}
      <div className="h-full aspect-square overflow-hidden rounded-main mr-3">
        <Image
          width={100}
          height={100}
          className="w-full h-full object-cover"
          src={category.cover!}
          alt="分类配图"
        />
      </div>
      <div className=" h-full flex flex-col items-start justify-center">
        <FlagTitle title="Car" />
        <ul className="flex flex-col text-xs text-font-75 mt-4">
          {category.children &&
            category.children.map((item) => {
              return (
                <li key={item.id} className="mb-2.5  last-of-type:mb-0">
                  <Link href={""} className=" hover:text-primary-100">
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesCard;
