import Link from "next/link";

interface Props extends ICmptProps {}

const MarkEntry: React.FC<Props> = ({ className }) => {
  return (
    <Link
      href={""}
      className={[
        className,
        "h-full flex flex-shrink-0 items-center justify-center  aspect-square text-font-100 bg-gray rounded-main hover:text-primary-100",
      ].join(" ")}
    >
      <i className="iconfont icon-mark" />
    </Link>
  );
};

export default MarkEntry;
