import{j as a,s as c}from"./pageStore.D8NL-QDi.js";import{r as v}from"./index.DhYZZe0J.js";function u(){const o=["Experience","Technologies","Projects","Contact"],r=["hover:border-l-4 hover:bg-experience hover:shadow-lg hover:shadow-[#90A6FF] hover:rounded-sm hover:pl-4","hover:border-l-4 hover:bg-technologies hover:shadow-lg hover:shadow-[#72BF8C] hover:rounded-sm hover:pl-4","hover:border-l-4 hover:bg-projects hover:shadow-lg hover:shadow-[#D3A83D] hover:rounded-sm hover:pl-4","hover:border-l-4 hover:bg-contact hover:shadow-lg hover:shadow-[#909D8C] hover:rounded-sm hover:pl-4"],s=["border-l-2 bg-experience shadow-lg shadow-[#90A6FF] rounded-none pl-4","border-l-2 bg-technologies shadow-lg shadow-[#72BF8C] rounded-none pl-4","border-l-2 bg-projects shadow-lg shadow-[#D3A83D] rounded-none pl-4","border-l-2 bg-contact shadow-lg shadow-[#909D8C] rounded-none pl-4"],[d,h]=v.useState([!0,!1,!1,!1]);return o.map((t,e)=>a.jsx("button",{onClick:()=>{h(l=>l.map((p,n)=>n===e)),c(e)},className:`text-lg font-mono text-white py-2 pr-4 transition-all duration-250 ${d[e]?s[e]:r[e]}`,children:t},e))}export{u as default};