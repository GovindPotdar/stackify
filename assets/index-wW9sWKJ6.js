import{P as s,j as e}from"./index-GkQLAMx0.js";import{C as c}from"./index-79ln-Dlf.js";import{C as m}from"./index-lycECfDO.js";function r({bgGradientImage:t,image:a,heading:n,title:d,descriptions:o,links:l}){return e.jsx(c,{heading:n,bgGradientImage:t,children:e.jsxs("div",{className:"row detail-card-container",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"left-image ",children:[e.jsx("img",{src:a,alt:"",style:{borderRadius:"20px"}}),e.jsx("div",{className:"d-flex justify-content-center my-3",children:[...l].map(i=>e.jsx(m,{text:i.text,to:i.to,classes:"mx-1"},i.text))})]})}),e.jsxs("div",{className:"col-lg-6 align-self-center dialog-box-info mt-1",children:[e.jsx("h2",{children:d}),[...o].map(i=>e.jsx("p",{children:i},Math.random()))]})]})})}r.defaultProps={links:[]};r.propTypes={bgGradientImage:s.string.isRequired,image:s.string.isRequired,heading:s.object.isRequired,title:s.string.isRequired,descriptions:s.arrayOf(s.string).isRequired,links:s.arrayOf(Object)};export{r as D};