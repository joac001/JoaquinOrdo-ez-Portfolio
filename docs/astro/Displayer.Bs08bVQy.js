import{j as e,a as p}from"./pageStore.D8NL-QDi.js";import{r as o}from"./index.DhYZZe0J.js";function u(t,n,a){let s=new Set([...n,void 0]);return t.listen((i,r,l)=>{s.has(l)&&a(i,r,l)})}let c=(t,n)=>a=>{t.current=a,n()};function x(t,{keys:n,deps:a=[t,n]}={}){let s=o.useRef();s.current=t.get();let i=o.useCallback(l=>n?.length>0?u(t,n,c(s,l)):t.listen(c(s,l)),a),r=()=>s.current;return o.useSyncExternalStore(i,r,r)}const h=[{title:"Mercedes Benz",start_date:"07/2024",end_date:"presente",skills:[" ISO 27001 "," Information security "],description:"I work as an ISO Staff in the information security department making sure that the company complies with the ISO 27001 standard."},{title:"Argentina programa 4.0",start_date:"07/2023",end_date:"11/2023",skills:[" Team work "," Programming "," Education "],description:'I was a professor of the course "Introduction to programming" in the Argentina Program 4.0 initiative, which aims to teach programming to people who are not in the IT field.'},{title:"Coding Giants",start_date:"07/2023",end_date:"09/2023",skills:[],description:"I was a professor in the Coding Giants initiative, which aims to teach programming to kids arround 9 and 12 years old."},{title:"Ayudantía Algoritmos y programación II",start_date:"2022",end_date:"",skills:[],description:"I was a professor's assistant in the subject 'Algorithms and programming II' at the University of Buenos Aires."},{title:"Universidad Nacional de Hurlingham",start_date:"09/2022",end_date:"12/2022",skills:[],description:'I was a professor of the course "Introduction to web programming" in the National University of Hurlingham.'}],g=[{title:"Voluntariado de jardinería",start_date:"2023",end_date:"",skills:[],description:""},{title:"Hospice “Buen samaritano”",start_date:"2022",end_date:"",skills:[],description:""},{title:"Sociedad San Juan, centro apostólico — Líder de jóvenes",start_date:"2020",end_date:"",skills:[],description:""}];function d(){return e.jsx("div",{className:"relative w-full px-0 md:px-8",children:e.jsxs("div",{className:"flex flex-col gap-y-8 p-4 relative",children:[e.jsx("div",{className:"absolute left-4 top-0 bottom-0 w-1 bg-experience rounded-lg"}),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10",children:"Work Experiences"})}),h.map((t,n)=>e.jsx(m,{experience:t,index:n})),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10 ",children:"Volunteer Experiences"})}),g.map((t,n)=>e.jsx(m,{experience:t,index:n}))]})})}function m({experience:t,index:n}){return e.jsxs("div",{className:"w-full flex items-center text-white",children:[e.jsxs("div",{className:"flex items-center w-full",children:[e.jsx("div",{className:"w-8 h-8 rounded-full border-x-2 border-y-2 border-experience"}),e.jsx("div",{className:"w-full h-1 bg-experience rounded-lg flex items-center"})]}),e.jsx("div",{className:"p-4 min-w-46 rounded-md border-x-2 border-y-2 border-experience",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold pt-2",children:t.title}),e.jsxs("p",{className:"text-gray pb-2",children:[t.start_date," ",t.end_date?` - ${t.end_date}`:""]}),e.jsx("p",{className:"text-sm md:text-lg",children:t.description?t.description:""}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:e.jsxs("span",{className:"py-2 rounded-full text-xs text-gray",children:[t.skills.length>0?"Skills: ":"",t.skills.map((a,s)=>e.jsx("span",{children:s==0?a:`- ${a}`},s))]})})]})})})]},n)}const f=[{name:"ReactJS",icon:"reactjs.webp"},{name:"Next.js 14",icon:"nextjs14.png"},{name:"Astro",icon:"astro.png"},{name:"TailwindCSS",icon:"tailwindcss.png"},{name:"JavaScript",icon:"javascript.svg"},{name:"Vercel cloud",icon:"vercel.png"},{name:"PostgreSQL",icon:"postgresql.png"},{name:"Python",icon:"python.webp"},{name:"Node.js",icon:"nodejs.png"},{name:"Express",icon:"express.png"},{name:"Dart",icon:"dart.png"},{name:"Flutter",icon:"flutter.png"},{name:"Java",icon:"java.png"},{name:"C",icon:"c.png"},{name:"C++",icon:"cpp.png"},{name:"SmallTalk",icon:"smalltalk.png"}];function j(){const t="/JoaquinOrdonez-Portfolio";function n(a){try{return`/public/assets/${a}`}catch{return`${t}/assets/${a}`}}return e.jsx("span",{className:"flex gap-10 flex-wrap w-full text-white font-sans justify-center items-center p-4",children:f.map((a,s)=>e.jsxs("span",{className:"grid grid-rows-2 items-center justify-center m-2 w-20 h-20 gap-2",children:[e.jsx("img",{src:n(a.icon),alt:a.name,className:"w-16",loading:"eager"}),e.jsx("span",{className:"text-center text-sm font-semibold mt-1",children:a.name})]},s))})}function w(){return e.jsx("h1",{children:"PROJECTS"})}function b(){return e.jsx("h1",{children:"CONTACTS"})}function y(){const t=x(p),n={0:"shadow-experience",1:"shadow-technologies",2:"shadow-projects",3:"shadow-contact"},[a,s]=o.useState(n[0]),[i,r]=o.useState(e.jsx(d,{"client:load":!0}));return o.useEffect(()=>{switch(t){case 0:s(n[0]),document.title="Experiences - Portfolio",r(e.jsx(d,{}));break;case 1:s(n[1]),document.title="Technologies - Portfolio",r(e.jsx(j,{}));break;case 2:s(n[2]),document.title="Projects - Portfolio",r(e.jsx(w,{}));break;case 3:s(n[3]),document.title="Contact - Portfolio",r(e.jsx(b,{}));break}},[t]),e.jsx("div",{id:"content",className:"col-span-2 m-4 bg-secondary-background w-auto rounded-md",children:e.jsx("span",{className:`flex rounded-lg ${a} transition-all ease-in-out duration-300 p-8`,children:i})})}export{y as default};
