interface ICmptProps {
  className?: string;
}

interface ICategory {
  id: number;
  name: string;
  cover?: string;
  children?: ICategory[];
}
