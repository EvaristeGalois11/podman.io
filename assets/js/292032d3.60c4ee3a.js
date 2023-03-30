"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[513],{1299:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);a(8480);const r={title:"Have fun coloring and learn about Podman!",description:"A decentralized team of open source container tool superheroes comes to the rescue when an asteroid storm threatens the planet. Learn about each tool\u2014Podman, CRI-O, Buildah, Skopeo, and OpenShift\u2014as they redesign the planet's protective shields' container deployment to protect Earth.",button:{text:"Download",src:"#"},featureImage:{src:"images/raw/comic-cover-224w-288h.png",alt:"Container Commandos coloring book cover"},collageImages:{src:"images/raw/coloring-pages.png",alt:"A collection of pages from the Podman coloring book."}};function n(){return l.createElement("section",{className:"container my-12 flex flex-wrap justify-center gap-4 lg:justify-start xl:my-20"},l.createElement("div",{className:"flex"},l.createElement("div",{className:"mx-4 flex-col items-center text-center lg:mx-0 lg:items-start lg:text-start"},l.createElement("h2",{className:"my-4 font-medium text-blue-900 dark:text-blue-500"},r.title),l.createElement("p",{className:"mb-4 max-w-prose lg:mb-10"},r.description),l.createElement("a",{href:r.button.src,className:"mx-auto block max-w-fit rounded-md py-2 px-6 text-purple-700 outline outline-1 transition duration-150 ease-linear hover:bg-gray-50 dark:text-purple-500 dark:hover:bg-gray-100 lg:mx-0"},r.button.text," ")),l.createElement("div",{className:"order-first mr-12 hidden lg:block"},l.createElement("img",{src:r.featureImage.src,alt:r.featureImage.alt}))),l.createElement("div",{className:"order-first mx-auto lg:order-last xl:mx-0"},l.createElement("img",{src:r.collageImages.src,alt:r.collageImages.alt})))}},2527:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6455),n=a(1743);const o=e=>{let{grid:t,display:a,layout:r,title:o="Default Title",description:i="[This is a link]()"}=e;return l.createElement("div",{className:`${t} ${a} ${r}`},l.createElement("h1",{className:"mb-6 max-w-sm text-purple-700 dark:text-purple-500 lg:max-w-lg "},o),l.createElement(n.D,{className:"leading-relaxed",children:i}))},i=e=>{let{grid:t,display:a,layout:r,image:n={src:"images/raw/podman-2-196w-172h.png",alt:"Podman Logo"}}=e;return l.createElement("div",null,l.createElement("img",{src:n.src,alt:n.alt,className:`${t} ${a} ${r}`}))};function s(e){let{title:t,description:a,image:n,lightColor:s="white",darkColor:m="gray-900"}=e;return l.createElement("header",{className:`h-5/6  xl:h-96 bg-${s} dark:bg-${m}`},l.createElement("div",{className:"bg-gradient-to-r from-blue-500 to-blue-700 pt-2 dark:from-blue-700 dark:to-blue-900 lg:pt-8"},l.createElement(r.Z,{lightFill:`fill-${s} dark:fill-${m}`})),l.createElement("div",{className:"container grid justify-items-center gap-3 md:grid-cols-2"},l.createElement(o,{title:t,description:a,layout:"mt-12 lg:mt-0"}),l.createElement(i,{image:n,layout:"mb-8 lg:mb-0"})))}},4269:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(1743);function n(e){let{title:t="Test Title",description:a,textGradientStops:n="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",textGradient:o=!1,textColor:i="text-gray-900",fontWeight:s,layout:m,bgColor:c=""}=e;const d=o?`bg-gradient-radial bg-clip-text text-transparent dark:bg-gradient-radial dark:text-transparent ${n}`:`${i}`;return l.createElement("header",{className:`${c}  ${m}`},l.createElement("div",{className:"container mx-auto mt-12 mb-4 text-center  lg:mt-16"},l.createElement("h2",{className:`${d} ${s}`},t),l.createElement(r.D,{children:a,className:"my-4 mx-auto max-w-4xl leading-relaxed text-gray-700 dark:text-gray-100"})))}},357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(7961),n=a(1954),o=a(2527),i=a(4269),s=a(1299),m=a(1743);const c={title:"Podman Features",subtitle:"Podman is an open source container, pod, and container image management engine. Podman makes it easy to find, run, build, and share containers.",image:{path:"images/raw/podman-2-196w,172h.png",altText:"Podman Seal Image"}},d={title:"Getting to know Podman",cards:[{title:"Quick dive into Podman",description:"Hop on over to our [Podman Quickstart Guide](#) and we'll lead you through basic Podman commands Guide and give you pointers to more learning materials and guides.",image:{src:"#",alt:"A seal diving into the water"}},{title:"Join Podman's Community",description:"Podman has an active chat and mailing list, and regular open community meetings. Users and aspiring contributors are most welcome in all of these venues. Join us!",image:{src:"#",alt:"A group of seals swimming."}},{title:"Need some help?",description:"Check out the [Podman Troubleshooting Guide](#), search our [Documentation](#), or file an issue in our [issue tracker](#).",image:{src:"#",alt:"A confused seal."}}]},u={title:"Want to learn more?",resources:{title:"Basic Podman Resources",cards:[{text:"Installation Instructions",path:"#",icon:"fa6-solid:book"},{text:"Documentation",path:"#",icon:"fa6-solid:book"},{text:"Podman Troubleshooting Guide",path:"#",icon:"fa6-solid:book"}]},blogPosts:{title:"Recent Podman Blog Posts"}};function g(){return l.createElement("div",{className:"container flex flex-wrap justify-center gap-4 lg:gap-8"},d.cards.map(((e,t)=>l.createElement("article",{key:t,className:"flex flex-col justify-start rounded-md p-4 text-center"},l.createElement("div",null,l.createElement("h3",{className:"mb-4 font-medium dark:text-blue-500 xl:mb-6"},e.title),l.createElement(m.D,{children:e.description,className:"max-w-xs"})),l.createElement("img",{src:e.image.src,alt:e.image.alt,className:"order-first my-2"})))))}function p(){return l.createElement(r.Z,null,l.createElement(o.Z,{title:c.title,description:c.subtitle}),l.createElement("section",{className:"mb-8 mt-4 lg:mt-8 xl:mb-12"},l.createElement(i.Z,{title:d.title}),l.createElement(g,null)),l.createElement("section",null),l.createElement("section",null,l.createElement(i.Z,{title:u.title,textGradient:"true",textGradientStops:"from-purple-500 to-purple-900"}),l.createElement("div",{className:"container grid gap-4 lg:grid-cols-2"},l.createElement("section",null,l.createElement("header",{className:"container mb-4 text-center lg:mb-8 lg:text-start"},l.createElement("h3",{className:"font-medium text-blue-700 dark:text-blue-500"},u.blogPosts.title)),l.createElement("div",{className:"container"})),l.createElement("section",null,l.createElement("header",{className:"container mb-4 text-center lg:text-start xl:mb-8"},l.createElement("h3",{className:"font-medium text-blue-700 dark:text-blue-500"},u.resources.title)),l.createElement("div",null,l.createElement("ul",{className:"container mt-4 mb-12 flex flex-col gap-4 lg:mt-8 lg:mb-16"},u.resources.cards.map(((e,t)=>l.createElement("li",{key:t},l.createElement("a",{href:e.path,className:"mx-auto flex max-w-lg items-center gap-4 rounded-md bg-gray-100 p-4 text-purple-700 underline-offset-4 transition duration-150 ease-linear hover:bg-purple-700 hover:text-purple-50 hover:shadow-md dark:bg-gray-700 dark:hover:bg-purple-900 dark:hover:text-white"},l.createElement("span",null,e.text),l.createElement(n.JO,{icon:e.icon,className:"order-first"})))))))))),l.createElement(s.Z,null))}}}]);