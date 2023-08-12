import Image from "next/image";
import Avatar from "@/assets/images/temp/avatar.png";
import BottomMenu from "./bottom-menu";

interface Props extends ICmptProps {}

const UserSelection: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={[
        " flex items-center flex-shrink-0 relative group cursor-pointer",
        className,
      ].join(" ")}
    >
      <div className=" h-full aspect-square rounded-main overflow-hidden mr-2">
        <Image
          className="w-full h-full object-cover"
          src={Avatar}
          width={100}
          height={100}
          alt="用户头像"
        />
      </div>
      <span className="text-black mr-1 text-sm">Behzad</span>
      <i className="iconfont icon-arrow text-font-50 group-hover:-rotate-180 transition-all" />

      {/** 菜单 */}
      <div className="absolute left-0 w-full top-full hidden group-hover:block pt-4">
        <BottomMenu />
      </div>
    </div>
  );
};

export default UserSelection;
