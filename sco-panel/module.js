/* [create-plugin] version: 5.25.8 */
define(["@grafana/ui","@emotion/css","module","@grafana/runtime","@grafana/data","react"],(e,t,a,i,r,s)=>(()=>{"use strict";var n={7:t=>{t.exports=e},89:e=>{e.exports=t},308:e=>{e.exports=a},531:e=>{e.exports=i},781:e=>{e.exports=r},959:e=>{e.exports=s}},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return n[e](a,a.exports,c),a.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="public/plugins/retail-sco-panel/";var o={};c.r(o),c.d(o,{plugin:()=>y});var u=c(308),d=c.n(u);c.p=d()&&d().uri?d().uri.slice(0,d().uri.lastIndexOf("/")+1):"public/plugins/retail-sco-panel/";var p=c(781),m=c(959),f=c.n(m),g=c(89),b=c(7),h=c(531);function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class v{getBaseSize(){return this.baseSize}getMinSize(){return this.minSize}getMaxSize(){return this.maxSize}setBaseSize(e){this.baseSize=e}setMinSize(e){this.minSize=e}setMaxSize(e){this.maxSize=e}calculateValueFontSize(e,t,a){const i=e/200,r=t/150,s=Math.max(.8,1-.05*(a.length-5));let n=this.baseSize*i*r*s;return Math.max(this.minSize,Math.min(this.maxSize,n))}static createDefault(){return new v(34,26,60)}static createCustom(e,t,a){return new v(e,t,a)}constructor(e=34,t=16,a=60){x(this,"baseSize",void 0),x(this,"minSize",void 0),x(this,"maxSize",void 0),this.baseSize=e,this.minSize=t,this.maxSize=a}}const S=()=>({section:g.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid rgba(204, 204, 220, 0.12);
      position: relative;
      overflow: hidden;
    `,title:g.css`
      margin: 0px;
      position: absolute;
      top: 4px;
      left: 6px;
    `,value:g.css`
      font-weight: bold;
      text-align: center;
    `}),z=({title:e,value:t,className:a})=>{const i=(0,m.useRef)(null),r=new v,s=(0,b.useStyles2)(S),[n,l]=(0,m.useState)(34),c=void 0===t?"~":((e,t=2)=>Number.isInteger(e)?e.toString():e.toFixed(t))(t),o=(e=>e?e>=0&&e<5?"#5794f2":e>=0&&e<50?"#73BF69":e>=50&&e<80?"#EAB839":e>=80&&e<=100?"#E24D42":"#ff9900":"#ff9900")(t||0);return(0,m.useEffect)(()=>{const e=()=>{if(i.current){const e=i.current.getBoundingClientRect(),t=e.width,a=e.height,s=r.calculateValueFontSize(t,a,c);l(s)}};e();const t=new ResizeObserver(e);return i.current&&t.observe(i.current),()=>{t.disconnect()}},[c]),f().createElement("div",{ref:i,className:(0,g.cx)(s.section,a)},f().createElement("h6",{className:s.title},e),f().createElement("span",{className:(0,g.cx)(s.value,g.css`color: ${o}; font-size: ${n}px`)},c))},w=()=>({wrapper:g.css`

      position: relative;
    `,adaptiveText:g.css`
      font-size: clamp(0.75rem, 2.5vw, 1.5rem);
      line-height: 1.2;
    `,grid:g.css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template:
        "a a a b b b c" 1fr
        "a a a b b b d" 1fr
        "a a a b b b e" 1fr /
        1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 4px;
    `,a:g.css`grid-area: a;`,b:g.css`grid-area: b;`,c:g.css`grid-area: c;`,d:g.css`grid-area: d;`,e:g.css`grid-area: e;`}),y=new p.PanelPlugin(({options:e,data:t,width:a,height:i,fieldConfig:r,id:s})=>{const n=(0,b.useStyles2)(w);if(0===t.series.length)return f().createElement(h.PanelDataErrorView,{fieldConfig:r,panelId:s,data:t,needsStringField:!0});const l=t.series.map(e=>e.fields.find(e=>"number"===e.type)).map(e=>null==e?void 0:e.values.get(e.values.length-1));return f().createElement("div",{className:(0,g.cx)(n.wrapper,g.css`
          width: ${a}px;
          height: ${i}px;
        `)},f().createElement("div",{className:n.grid},f().createElement(z,{title:e.a,className:n.a,value:l[0]}),f().createElement(z,{title:e.b,className:n.b,value:l[1]}),f().createElement(z,{title:e.c,className:n.c,value:l[2]}),f().createElement(z,{title:e.d,className:n.d,value:l[3]}),f().createElement(z,{title:e.e,className:n.e,value:l[4]})))}).setPanelOptions(e=>e.addTextInput({path:"a",name:"Title block A",defaultValue:"CPU SCO"}).addTextInput({path:"b",name:"Title block B",defaultValue:"CPU RFID"}).addTextInput({path:"c",name:"Title block C",defaultValue:""}).addTextInput({path:"d",name:"Title block D",defaultValue:""}).addTextInput({path:"e",name:"Title block E",defaultValue:""}));return o})());
//# sourceMappingURL=module.js.map