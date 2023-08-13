🌟 一直想开发一套自用的博客系统，虽然从事前端，但是没有设计天赋，遂产生在 figma 社区找现成的页面，当然，为尊重设计师，绝对不会用作商业用途。

🌟 一套名为 “Free News & Magazine Figma Template / All pages” 的设计作品吸引了我，决定以此作为初版的博客页面，感谢 behzad pashaei 大佬。

⭐️ 设计稿地址：https://www.figma.com/community/file/1216695793776654367/Free-News-%26-Magazine-Figma-Template-%2F-All-pages

😝 希望不会再弃坑啦（入行两年，弃坑无数😮‍💨）。

📃 TODO：
1. ✅ 首页分轮播图无法检测最后一项以隐藏切换下一项的按钮；


需要补充的笔记：
1. swiper/react 切换上/下页：useSwiper 无法正常使用，ref.slideNext 也无法正常使用，需要安装 @types/swiper（如果是typeScript 项目），声明一个 state 存储 swiper，并通过 Swiper 组建上的 onSwiper 将swiper赋值给这个 state，这样就能调用state上的方法操作此 Swiper 了，如 slideNext，slidePrev 等。 