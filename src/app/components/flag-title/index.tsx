interface Props extends ICmptProps {
  title?: string;
}

const FlagTitle: React.FC<Props> = ({ title = "标题" }) => {
  return (
    <div className={[""].join(" ")}>
      <div className=" flex items-center before:block before:w-1 before:h-3 before:rounded before:bg-primary-100 before:mr-1">
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
};

export default FlagTitle;
