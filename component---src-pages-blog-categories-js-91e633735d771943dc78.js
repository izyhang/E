(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QO0a:function(e,t,a){e.exports={container:"categories-module--container--2noEh"}},ZSBo:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("Bl7J"),i=a("vrFN"),c=a("QO0a"),s=a.n(c);t.default=function(e){var t,a=e.data,n=e.location,c=a.site.siteMetadata.author.name+"'s Blog",u={};return a.allMarkdownRemark.edges.forEach((function(e){var t=e.node.frontmatter.categories;if(null===t)return!0;var a=u[t];void 0===a&&(a=0),a+=1,u[t]=a})),t=null!==u&&Object.entries(u).length>0?r.a.createElement("div",{className:s.a.container},r.a.createElement("ul",null,Object.entries(u).map((function(e){var t=e[0],a=e[1];return r.a.createElement("li",{key:t},r.a.createElement(l.Link,{to:"/blog/categories/"+t+"/"},t),r.a.createElement("span",null,"("+a+")"))})))):r.a.createElement("p",null,"There Are No Categories"),r.a.createElement(o.a,{location:n,title:c,linkTo:"/blog/"},r.a.createElement(i.a,{title:"Categories",description:"All Categories Of "+c+" Posts"}),r.a.createElement("article",null,t))};var u="412779350"}}]);
//# sourceMappingURL=component---src-pages-blog-categories-js-91e633735d771943dc78.js.map