import Menu from "./menu";
import MarkEntry from "./mark-entry";
import UserSelection from "./user-selection";
import Search from "./search";

interface Props extends ICmptProps {}

const Navigation: React.FC<Props> = (props) => {
  return (
    <div
      className={[
        " h-24 w-full fixed top-0 left-0 bg-white",
        props.className,
      ].join(" ")}
    >
      <div className="inner-page flex justify-between items-center h-full">
        <div className="h-full flex items-center">
          <span className=" text-secondary-100 font-bold">
            <span className="text-lg">MEGA.</span>
            <span>news</span>
          </span>

          <Menu className="ml-12" />
        </div>
        <div className=" h-10 flex items-center">
          <Search className="" />
          <UserSelection className="h-full mx-5" />
          <MarkEntry className="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
