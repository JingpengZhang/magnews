import React from "react";
import DefaultPostCover from '@/assets/images/default/postCover.png'
import DefaultPostAuthorAvatar from '@/assets/images/default/postAuthorAvatar.png'
import Image from "next/image";

interface Data extends IArticle {
    user: {
        username: string;
        avatar: string
    }
    isMarked: boolean
}

interface Props extends ICmptProps {
    data?: Data
}

const ArticleCardTwo: React.FC<Props> = ({
                                             className, data = {
        title: 'Opening Day of Boating Season, Seattle WA',
        description: 'Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge',
        cover: DefaultPostCover,
        user: {
            avatar: DefaultPostAuthorAvatar,
            username: 'James'
        },
        createTime: 'August 18 , 2022',
        isMarked: false
    }
                                         }) => {
    return (
        <div className={[' overflow-hidden rounded-main p-2 bg-white shadow-main', className].join(' ')}>
            <div className='w-full aspect-video overflow-hidden rounded-main'>
                <Image src={data.cover} alt='封面'/>
            </div>
            <p className='line-clamp-1 text-sm font-bold mt-2 px-2 text-font-100'>{data.title}</p>
            <p className='text-font-75 text-xs line-clamp-2 leading-4 px-2 mt-3'>{data.description}</p>
            <div className='bg-gray p-3 flex justify-between items-center rounded-main mt-4'>
                <div className='h-10 flex'>
                    <div className='rounded-main overflow-hidden h-full aspect-square'>
                        <Image src={data.user.avatar} alt='作者头像'/>
                    </div>
                    <div className='ml-2 h-full flex flex-col justify-between items-start text-xs'>
                        <span className='font-semibold'>{data.user.username}</span>
                        <span className='text-font-75'>{data.createTime}</span>
                    </div>
                </div>
                <button>
                    <i className='iconfont icon-mark text-font-50'/>
                </button>
            </div>
        </div>
    )
}

export default ArticleCardTwo