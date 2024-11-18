import{j as e}from"./jsx-runtime.7faW4zRM.js";import{a as u}from"./pageStore.rAfalknG.js";import{r as c}from"./index.DhYZZe0J.js";function g(t,n,o){let a=new Set([...n,void 0]);return t.listen((i,s,r)=>{a.has(r)&&o(i,s,r)})}let d=(t,n)=>o=>{t.current=o,n()};function h(t,{keys:n,deps:o=[t,n]}={}){let a=c.useRef();a.current=t.get();let i=c.useCallback(r=>n?.length>0?g(t,n,d(a,r)):t.listen(d(a,r)),o),s=()=>a.current;return c.useSyncExternalStore(i,s,s)}const l=[{title:"Mercedes Benz",start_date:"07/2024",end_date:"Present",skills:[" ISO 27001 "," Information security "],description:"I work as an ISO Staff in the information security department, ensuring that the company complies with the ISO 27001 standard."},{title:"Argentina Programa 4.0",start_date:"07/2023",end_date:"11/2023",skills:[" Teamwork "," Programming "," Education "],description:'I was a professor of the course "Introduction to Programming" in the Argentina Programa 4.0 initiative, which aims to teach programming to people who are not in the IT field.'},{title:"Coding Giants",start_date:"07/2023",end_date:"09/2023",skills:[" Programming "," Education "],description:"I was a professor in the Coding Giants initiative, which aims to teach programming to kids around 9 and 12 years old."},{title:"Ayudantía Algoritmos y Programación II",start_date:"2022",end_date:"",skills:[" Teamwork "," Programming "," Education "],description:"I was a professor's assistant in the subject 'Algorithms and Programming II' at the University of Buenos Aires."},{title:"Universidad Nacional de Hurlingham",start_date:"09/2022",end_date:"12/2022",skills:[" Education "],description:'I was a professor of the course "Introduction to Web Programming" at the National University of Hurlingham.'}],x=[{title:"Gardening at Asociación San Juan Apóstol",start_date:"2023",end_date:"",skills:[],description:'I was a volunteer in the gardening area of the "Asociación San Juan Apóstol".'},{title:"Hospice “Buen Samaritano”",start_date:"2022",end_date:"",skills:[" Patience "," Empathy "],description:'I was a volunteer at the hospice "Buen Samaritano" tasked with cleaning used sheets and patient clothing.'}];function m(){return e.jsx("div",{className:"relative w-full px-0 md:px-8",children:e.jsxs("div",{className:"flex flex-col gap-y-8 relative",children:[e.jsx("div",{className:"absolute h-full w-1 bg-experience rounded-lg"}),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10",children:"Work Experiences"})}),l.map((t,n)=>e.jsx(p,{experience:t,index:n},n)),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10 ",children:"Volunteer Experiences"})}),x.map((t,n)=>e.jsx(p,{experience:t,index:n+l.length},n+l.length))]})})}function p({experience:t,index:n}){return c.useEffect(()=>{const o=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&s.target.classList.add("opacity-100")})},{threshold:.4}),a=document.getElementById(`experience-card-${n}`);return a&&o.observe(a),()=>{a&&o.unobserve(a)}},[n]),e.jsxs("div",{id:`experience-card-${n}`,className:"w-full flex items-center text-white opacity-0 transition-opacity duration-700",children:[e.jsxs("div",{className:"flex items-center w-full",children:[e.jsx("div",{className:"w-8 h-8 rounded-full border-x-2 border-y-2 border-experience"}),e.jsx("div",{className:"w-full h-1 bg-experience rounded-lg flex items-center"})]}),e.jsx("div",{className:"p-4 min-w-46 rounded-md border-x-2 border-y-2 border-experience",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold pt-2",children:t.title}),e.jsxs("p",{className:"text-gray pb-2",children:[t.start_date," ",t.end_date?` - ${t.end_date}`:""]}),e.jsx("p",{className:"text-sm md:text-lg",children:t.description?t.description:""}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:e.jsxs("span",{className:"py-2 rounded-full text-xs text-gray",children:[t.skills.length>0?"Skills: ":"",t.skills.map((o,a)=>e.jsx("span",{children:a==0?o:`- ${o}`},a))]})})]})})}),e.jsx("style",{children:`
                    #experience-card-${n} {
                        content-visibility: auto;
                    }
                `})]})}const f=[{name:"ReactJS",icon:"reactjs.webp"},{name:"Next.js 14",icon:"nextjs14.png"},{name:"Astro",icon:"astro.png"},{name:"TailwindCSS",icon:"tailwindcss.png"},{name:"JavaScript",icon:"javascript.svg"},{name:"Vercel cloud",icon:"vercel.png"},{name:"PostgreSQL",icon:"postgresql.png"},{name:"Python",icon:"python.webp"},{name:"Node.js",icon:"nodejs.png"},{name:"Express",icon:"express.png"},{name:"Dart",icon:"dart.png"},{name:"Flutter",icon:"flutter.png"},{name:"Java",icon:"java.png"},{name:"C",icon:"c.png"},{name:"C++",icon:"cpp.png"},{name:"SmallTalk",icon:"smalltalk.png"}];function w(){const t="/JoaquinOrdonez-Portfolio/";function n(o){try{return`${t}assets/technologies/${o}`}catch{return`/JoaquinOrdonez-Portfolio/assets/technologies/${o}`}}return e.jsx("span",{className:"flex gap-10 flex-wrap w-full text-white font-sans justify-center items-center p-4",children:f.map((o,a)=>e.jsxs("span",{className:"grid grid-rows-2 items-center justify-center m-2 w-20 h-20 gap-2",children:[e.jsx("img",{src:n(o.icon),alt:o.name,className:"w-16",loading:"eager"}),e.jsx("span",{className:"text-center text-sm font-semibold mt-1",children:o.name})]},a))})}const b=[{name:"Linkedin",url:"https://www.linkedin.com/in/joaquin-ord/",icon:"linkedin.webp"},{name:"WhatsApp",url:"https://wa.me/541163005345",icon:"whatsapp.webp"},{name:"Github",url:"https://github.com/joac001",icon:"github.png"}];function j(){const t="/JoaquinOrdonez-Portfolio/";function n(s){try{return`${t}assets/contact/${s}`}catch{return`/JoaquinOrdonez-Portfolio/assets/contact/${s}`}}const o=()=>{const s=document.getElementById("snackbar");s.style.bottom="50%",setTimeout(()=>{s.style.transition="bottom 1s ease",s.style.bottom="0"},100),setTimeout(()=>{s.style.transition="bottom 1s ease",s.style.bottom="50%"},2e3),setTimeout(()=>{s.classList.remove("show")},3e3)},a=()=>{navigator.clipboard.writeText("joacoordo@gmail.com"),o()},i=s=>window.open(s);return e.jsxs("span",{className:"flex flex-col gap-y-4 w-full justify-center items-center text-white",children:[e.jsx("span",{id:"snackbar",className:"relative bottom-[50%] rounded-full px-4 py-2 bg-contact",children:"Copied succesfully!"}),e.jsxs("span",{className:"grid grid-cols-2 items-center text-center gap-y-10 gap-x-20 w-fit font-thin text-xl p-2 mb-12",children:[e.jsxs("button",{onClick:a,className:"flex justify-center items-center gap-x-4 col-span-2 cursor-pointer hover:text-gray hover:border-gray",children:[e.jsx("img",{src:n("copy.png"),alt:"copy email",className:"w-4"}),"joacoordo@gmail.com"]}),b.map((s,r)=>e.jsxs("span",{onClick:()=>i(s.url),className:`flex items-center justify-center gap-x-2 ${r==2?"col-span-2":""} cursor-pointer hover:text-gray hover:border-gray `,children:[e.jsx("img",{src:n(s.icon),alt:"Joaquin Ordoñez linkedin",className:"w-8"}),s.name]},r))]})]})}function k(){const t=h(u),n={0:"shadow-experience",1:"shadow-technologies",2:"shadow-contact"},[o,a]=c.useState(n[0]),[i,s]=c.useState(e.jsx(m,{"client:load":!0}));return c.useEffect(()=>{switch(t){case 0:a(n[0]),document.title="Experiences - Portfolio",s(e.jsx(m,{}));break;case 1:a(n[1]),document.title="Technologies - Portfolio",s(e.jsx(w,{}));break;case 2:a(n[2]),document.title="Contact - Portfolio",s(e.jsx(j,{}));break}},[t]),e.jsx("div",{id:"content",className:"col-span-2 m-4 bg-secondary-background w-auto rounded-md",children:e.jsx("span",{className:`flex rounded-lg ${o} transition-shadow ease-in-out duration-300 p-8 overflow-hidden`,children:i})})}export{k as default};