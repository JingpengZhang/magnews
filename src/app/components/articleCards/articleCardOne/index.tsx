import React from "react";
import Image from "next/image";
import Link from "next/link";


// interface Data extends IArticle {
//     user: {
//         username: string;
//         avatar: string
//     }
//     isMarked: boolean
// }
//

interface Props extends ICmptProps {
    data: any
}

const ArticleCardOne: React.FC<Props> = ({className, data}) => {
    return <Link href={''} className={['overflow-hidden relative block', className].join((' '))}>
        <Image className='w-full h-full object-cover ' src={data.cover} alt='封面'/>
        <div className='w-full h-full absolute top-0 left-0 p-2 flex items-end'>

            <div className='w-full bg-[rgba(255,255,255,0.7)] rounded-main p-3 backdrop-blur-[2px]
            '>
                <p className='line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-xs mt-2.5 text-font-75'>{data.description}</p>
            </div>
        </div>
    </Link>;
};

export default ArticleCardOne;
