"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[103],{5203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7294),l=a(6010),r=a(1944),c=a(5281),o=a(9460),s=a(9058),i=a(756),m=a(7462),d=a(5999),u=a(2244);function g(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(u.Z,(0,m.Z)({},a,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(u.Z,(0,m.Z)({},t,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,o.C)(),{title:a,description:l,date:c,tags:s,authors:i,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return n.createElement(r.d,{title:a,description:l,keywords:d,image:u},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:c}),i.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=a(9407);function x(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=(0,o.C)(),{nextItem:c,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:x}=d;return n.createElement(s.Z,{sidebar:t,toc:!u&&r.length>0?n.createElement(p.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:x}):void 0},n.createElement(i.Z,null,a),(c||m)&&n.createElement(g,{nextItem:c,prevItem:m}))}function b(e){const t=e.content;return n.createElement(o.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogPostPage)},n.createElement(f,null),n.createElement(x,{sidebar:e.sidebar},n.createElement(t,null))))}},9407:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),c=a(3743);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function m(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",t)},l.createElement(c.Z,(0,n.Z)({},a,{linkClassName:s,linkActiveClassName:i})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(7462),l=a(7294),r=a(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),a=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),s=i(o,{anchorTopOffset:a.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const p=(0,r.L)(),x=m??p.tableOfContents.minHeadingLevel,b=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return d((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:x,maxHeadingLevel:b}}),[s,i,x,b])),l.createElement(g,(0,n.Z)({toc:E,className:a,linkClassName:s},f))}},5686:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(8480),r=a(1743);function c(e){const{title:t,subtitle:a,details:l}=e;return n.createElement("div",{className:"mx-2 mt-4"},n.createElement("h3",{className:"mb-3 font-bold text-gray-700 dark:text-gray-50"},t),n.createElement(r.D,{children:a,className:"text-gray-700"}),n.createElement(r.D,{children:l,className:"text-gray-700"}))}function o(e){const{text:t}=e;return n.createElement("div",{className:"my-6 mx-2 lg:my-8"},n.createElement("p",{className:"max-w-sm text-gray-700 dark:text-gray-100"},t))}function s(e){let{data:t=[{text:"card text"}]}=e;return n.createElement("div",{className:" mx-2 mb-4 flex justify-center gap-2 lg:mb-8"},t.map(((e,t)=>n.createElement("div",{key:t},n.createElement(l.Z,e)))))}function i(e){return n.createElement("article",{className:"m-4 flex flex-col justify-between rounded-lg bg-gray-50 p-4 shadow-xl dark:bg-gray-700 dark:shadow-none lg:m-2"},n.createElement(c,e),n.createElement(o,e),n.createElement(s,e))}},4966:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294);const l=a.p+"assets/images/podman-ui-679w-592h-c0d5178b2516f917e2c764adb219b9af.webp";var r=a(1954),c=a(8480);function o(e){let{text:t,url:a,textColor:l="text-blue-700"}=e;return n.createElement("a",{href:a,className:`${l} cursor-pointer  underline underline-offset-4 transition duration-150 ease-in hover:text-purple-700 dark:text-blue-900`},t)}var s=a(6455);const i=e=>{let{grid:t,display:a,layout:l,title:r,subtitle:c}=e;return n.createElement("div",{className:`${t} ${a} ${l} container`},n.createElement("h1",{className:"mb-4 text-white dark:text-gray-50 lg:mb-8"},r),n.createElement("p",{className:"max-w-sm text-white dark:text-gray-50 lg:max-w-prose"},c),n.createElement(m,{layout:"flex max-w-sm gap-8 my-3"}),n.createElement("p",{className:"flex gap-4 text-white dark:text-gray-100"},n.createElement("span",null,"Latest stable ",n.createElement(o,{text:"v4.3.0",textColor:"text-white dark:text-gray-100"})),n.createElement("span",null,"-"),n.createElement(o,{text:"Apache License 2.0",textColor:"text-white dark:text-gray-100"})))},m=e=>{let{grid:t,display:a,layout:l}=e;return n.createElement("div",{className:`${t} ${a} ${l}`},n.createElement(c.Z,{text:"Get Started"}),n.createElement(c.Z,{text:"Downloads",bgColor:"bg-white dark:bg-transparent dark:outline",textColor:"text-purple-700"}))},d=e=>{let{grid:t,display:a,layout:l}=e;return n.createElement("div",{className:` ${t} ${a} ${l} container`},n.createElement("h3",{className:" text-base font-medium text-white dark:text-gray-100"},"Supported platforms"),n.createElement("ul",{className:"flex gap-4"},n.createElement("li",null,n.createElement(r.JO,{icon:"fa6-brands:redhat",className:"text-3xl text-white dark:text-gray-100"})),n.createElement("li",null,n.createElement(r.JO,{icon:"fa6-brands:apple",className:"text-3xl text-white dark:text-gray-100"})),n.createElement("li",null,n.createElement(r.JO,{icon:"fa6-brands:microsoft",className:"text-3xl text-white dark:text-gray-100"})),n.createElement("li",null,n.createElement(r.JO,{icon:"fa6-brands:linux",className:"text-3xl text-white dark:text-gray-100"}))))},u=e=>{let{grid:t,display:a,layout:r}=e;return n.createElement("div",{className:`${t} ${a} ${r}`},n.createElement("img",{src:l,alt:"Screenshots of podman ui",className:"object-cover"}))};function g(e){let{title:t,subtitle:a}=e;return n.createElement("header",{className:"bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"},n.createElement("div",{className:"grid md:grid-cols-2 md:gap-12"},n.createElement(i,{title:t,subtitle:a,grid:"row-span-2 place-self-center",layout:"mt-12 mb-4 md:ml-10 xl:ml-24 md:mb-0"}),n.createElement("div",{className:"flex flex-col justify-end self-end md:col-start-2 md:row-span-3 lg:row-span-2 lg:row-start-2"},n.createElement(d,{layout:"md:max-w-lg 2xl:pr-8 lg:max-w-full mb-12 md:mb-0",display:"flex flex-col items-end"}),n.createElement(u,{display:"hidden md:flex justify-end lg:w-[510px] 2xl:w-full",layout:"-mb-24 lg:mb-12"})),n.createElement(s.Z,{grid:"col-span-full lg:row-start-3",layout:""})))}},7951:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7242),l=a(7294);const r=function(e){let{children:t}=e;return l.createElement("section",{className:"py-8 lg:py-12"},t)};var c=a(4966),o=a(5686);const s={...n.Z,main:function(e){let{children:t}=e;return l.createElement("main",{className:"mx-auto h-screen"},t)},section:r,cardGrid:function(e){let{children:t}=e;return l.createElement("section",{className:"my-4 flex justify-center gap-8 xl:gap-12"},t)},card:o.Z,hero:c.Z}}}]);