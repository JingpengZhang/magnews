import Image from "next/image";
import CategoryCarousel from "./components/category-carousel";
import ArticleCardOne from "@/app/components/articleCards/articleCardOne";
import Cover from '@/assets/images/temp/category-car.png'
import ArticleCardTwo from "@/app/components/articleCards/articleCardTwo";
import ArticleCardThree from "@/app/components/articleCards/articleCardThree";

export default function Home() {

    const article: IArticle = {
        id: '1-1',
        title: 'How to Drive a Car Safely',
        description: 'Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. ',
        cover: Cover,
        createTime: ''
    }

    return (
        <main className=" w-full">
            <CategoryCarousel className=" inner-page"/>
            <ArticleCardOne className='w-64 h-80 rounded-main' data={article}/>
            <ArticleCardTwo className={'w-64'}/>
            <ArticleCardThree className={'h-44'}/>
        </main>
    );
}
