interface ICmptProps {
  className?: string;
}

interface ICategory {
  id: string;
  name: string;
  cover?: string;
  children?: ICategory[];
}

interface IArticle {
  id: string;
  title: string;
  description: string;
  cover: string | StaticImageData;
  createTime: string;
}

interface IUser {
  id: string;
  username: string;
  avatar: string;
  registTime: string;
}
