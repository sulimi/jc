import{j as e,f as r,I as t,t as l}from"./index-C4vYZL8M.js";import{C as c}from"./index-Cm4DRnxS.js";import{t as n}from"./vendor-ui-CFFMFnmP.js";import"./vendor-core-Ds0eMpwt.js";import"./vendor-utils-B4s44b3e.js";function p(){const a=o=>{switch(o){case 1:return{color:l.colors.palette.info.default,bg:`rgba(${l.colors.palette.info.defaultChannel}, .4)`};case 2:return{color:l.colors.palette.error.default,bg:`rgba(${l.colors.palette.error.defaultChannel}, .4)`};default:return{color:l.colors.palette.success.default,bg:`rgba(${l.colors.palette.success.defaultChannel}, .4)`}}};return e.jsxs(c,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(n.Title,{level:5,children:"Top Authors"})}),e.jsx("main",{className:"w-full",children:new Array(3).fill("").map((o,s)=>e.jsxs("div",{className:"mb-4 flex",children:[e.jsx("img",{src:r.image.avatarGitHub(),alt:"",className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{children:r.person.fullName()}),e.jsxs("div",{className:"flex items-center  text-gray",children:[e.jsx(t,{icon:"icon-park-solid:like",size:14}),e.jsxs("span",{className:"ml-2",children:[r.number.float({min:3,max:9,multipleOf:3}),"k"]})]})]}),e.jsx("div",{className:"ml-auto flex h-10 w-10 items-center justify-center rounded-full",style:{background:a(s).bg},children:e.jsx(t,{icon:"solar:cup-star-bold",size:24,color:a(s).color})})]},s))})]})}export{p as default};
