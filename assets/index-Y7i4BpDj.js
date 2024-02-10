import{r as o,j as u,g as ot,R as L,a as X}from"./index-2WK1J2A3.js";import{C as Te,a as ut}from"./index-yUJ0w8MT.js";import{S as ct}from"./index-OFGPbmTf.js";const lt="/assets/banner-bg-JPGlYiHa.jpg",ft="/assets/banner1-iMQ0t177.png",dt="/assets/banner2-191vZKRT.png";function ke(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e},[e]),t}function re(e){const t=ke(e);return o.useCallback(function(...r){return t.current&&t.current(...r)},[t])}function pt(e,t){const r=o.useRef(!0);o.useEffect(()=>{if(r.current){r.current=!1;return}return e()},t)}function gt(){const e=o.useRef(!0),t=o.useRef(()=>e.current);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function mt(e){const t=o.useRef(e);return t.current=e,t}function ht(e){const t=mt(e);o.useEffect(()=>()=>t.current(),[])}const se=2**31-1;function Ie(e,t,r){const s=r-Date.now();e.current=s<=se?setTimeout(t,s):setTimeout(()=>Ie(e,t,r),se)}function bt(){const e=gt(),t=o.useRef();return ht(()=>clearTimeout(t.current)),o.useMemo(()=>{const r=()=>clearTimeout(t.current);function s(a,n=0){e()&&(r(),n<=se?t.current=setTimeout(a,n):Ie(t,a,Date.now()+n))}return{set:s,clear:r,handleRef:t}},[])}const vt=["as","disabled"];function xt(e,t){if(e==null)return{};var r={},s=Object.keys(e),a,n;for(n=0;n<s.length;n++)a=s[n],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Et(e){return!e||e.trim()==="#"}function Le({tagName:e,disabled:t,href:r,target:s,rel:a,role:n,onClick:i,tabIndex:c=0,type:p}){e||(r!=null||s!=null||a!=null?e="a":e="button");const h={tagName:e};if(e==="button")return[{type:p||"button",disabled:t},h];const f=g=>{if((t||e==="a"&&Et(r))&&g.preventDefault(),t){g.stopPropagation();return}i==null||i(g)},m=g=>{g.key===" "&&(g.preventDefault(),f(g))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:n??"button",disabled:void 0,tabIndex:t?void 0:c,href:r,target:e==="a"?s:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:f,onKeyDown:m},h]}const yt=o.forwardRef((e,t)=>{let{as:r,disabled:s}=e,a=xt(e,vt);const[n,{tagName:i}]=Le(Object.assign({tagName:r,disabled:s},a));return u.jsx(i,Object.assign({},a,n,{ref:t}))});yt.displayName="Button";const Ct=["onKeyDown"];function jt(e,t){if(e==null)return{};var r={},s=Object.keys(e),a,n;for(n=0;n<s.length;n++)a=s[n],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Tt(e){return!e||e.trim()==="#"}const Me=o.forwardRef((e,t)=>{let{onKeyDown:r}=e,s=jt(e,Ct);const[a]=Le(Object.assign({tagName:"a"},s)),n=re(i=>{a.onKeyDown(i),r==null||r(i)});return Tt(s.href)||s.role==="button"?u.jsx("a",Object.assign({ref:t},s,a,{onKeyDown:n})):u.jsx("a",Object.assign({ref:t},s,{onKeyDown:r}))});Me.displayName="Anchor";const Se=Me;var Pe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n="",i=0;i<arguments.length;i++){var c=arguments[i];c&&(n=a(n,s(c)))}return n}function s(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return r.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var i="";for(var c in n)t.call(n,c)&&n[c]&&(i=a(i,c));return i}function a(n,i){return i?n?n+" "+i:n+i:n}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Pe);var St=Pe.exports;const G=ot(St);function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ae.apply(this,arguments)}function _e(e,t){if(e==null)return{};var r={},s=Object.keys(e),a,n;for(n=0;n<s.length;n++)a=s[n],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Ne(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Nt(e){var t=Rt(e,"string");return typeof t=="symbol"?t:String(t)}function Rt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wt(e,t,r){var s=o.useRef(e!==void 0),a=o.useState(t),n=a[0],i=a[1],c=e!==void 0,p=s.current;return s.current=c,!c&&p&&n!==t&&i(t),[c?e:n,o.useCallback(function(h){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];r&&r.apply(void 0,[h].concat(m)),i(h)},[r])]}function Ot(e,t){return Object.keys(t).reduce(function(r,s){var a,n=r,i=n[Ne(s)],c=n[s],p=_e(n,[Ne(s),s].map(Nt)),h=t[s],f=wt(c,i,e[h]),m=f[0],g=f[1];return ae({},p,(a={},a[s]=m,a[h]=g,a))},e)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},ie(e,t)}function Dt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const kt=["xxl","xl","lg","md","sm","xs"],It="xs",$e=o.createContext({prefixes:{},breakpoints:kt,minBreakpoint:It});function le(e,t){const{prefixes:r}=o.useContext($e);return e||r[t]||t}function Lt(){const{dir:e}=o.useContext($e);return e==="rtl"}const Ue=o.forwardRef(({className:e,bsPrefix:t,as:r="div",...s},a)=>(t=le(t,"carousel-caption"),u.jsx(r,{ref:a,className:G(e,t),...s})));Ue.displayName="CarouselCaption";const Mt=Ue,Ae=o.forwardRef(({as:e="div",bsPrefix:t,className:r,...s},a)=>{const n=G(r,le(t,"carousel-item"));return u.jsx(e,{ref:a,...s,className:n})});Ae.displayName="CarouselItem";const Pt=Ae;function Re(e,t){let r=0;return o.Children.map(e,s=>o.isValidElement(s)?t(s,r++):s)}function _t(e,t){let r=0;o.Children.forEach(e,s=>{o.isValidElement(s)&&t(s,r++)})}function $t(e){return e&&e.ownerDocument||document}function Ut(e){var t=$t(e);return t&&t.defaultView||window}function At(e,t){return Ut(e).getComputedStyle(e,t)}var Kt=/([A-Z])/g;function Ft(e){return e.replace(Kt,"-$1").toLowerCase()}var Bt=/^ms-/;function J(e){return Ft(e).replace(Bt,"-ms-")}var Wt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Xt(e){return!!(e&&Wt.test(e))}function Ke(e,t){var r="",s="";if(typeof t=="string")return e.style.getPropertyValue(J(t))||At(e).getPropertyValue(J(t));Object.keys(t).forEach(function(a){var n=t[a];!n&&n!==0?e.style.removeProperty(J(a)):Xt(a)?s+=a+"("+n+") ":r+=J(a)+": "+n+";"}),s&&(r+="transform: "+s+";"),e.style.cssText+=";"+r}const Ht=!!(typeof window<"u"&&window.document&&window.document.createElement);var oe=!1,ue=!1;try{var ne={get passive(){return oe=!0},get once(){return ue=oe=!0}};Ht&&(window.addEventListener("test",ne,ne),window.removeEventListener("test",ne,!0))}catch{}function Gt(e,t,r,s){if(s&&typeof s!="boolean"&&!ue){var a=s.once,n=s.capture,i=r;!ue&&a&&(i=r.__once||function c(p){this.removeEventListener(t,c,n),r.call(this,p)},r.__once=i),e.addEventListener(t,i,oe?s:n)}e.addEventListener(t,r,s)}function Vt(e,t,r,s){var a=s&&typeof s!="boolean"?s.capture:s;e.removeEventListener(t,r,a),r.__once&&e.removeEventListener(t,r.__once,a)}function Fe(e,t,r,s){return Gt(e,t,r,s),function(){Vt(e,t,r,s)}}function Yt(e,t,r,s){if(r===void 0&&(r=!1),s===void 0&&(s=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,r,s),e.dispatchEvent(a)}}function qt(e){var t=Ke(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function Zt(e,t,r){r===void 0&&(r=5);var s=!1,a=setTimeout(function(){s||Yt(e,"transitionend",!0)},t+r),n=Fe(e,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(a),n()}}function Jt(e,t,r,s){r==null&&(r=qt(e)||0);var a=Zt(e,r,s),n=Fe(e,"transitionend",t);return function(){a(),n()}}function we(e,t){const r=Ke(e,t)||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function Qt(e,t){const r=we(e,"transitionDuration"),s=we(e,"transitionDelay"),a=Jt(e,n=>{n.target===e&&(a(),t(n))},r+s)}function zt(e){e.offsetHeight}const Oe={disabled:!1},Be=L.createContext(null);var en=function(t){return t.scrollTop},H="unmounted",k="exited",I="entering",U="entered",ce="exiting",T=function(e){Dt(t,e);function t(s,a){var n;n=e.call(this,s,a)||this;var i=a,c=i&&!i.isMounting?s.enter:s.appear,p;return n.appearStatus=null,s.in?c?(p=k,n.appearStatus=I):p=U:s.unmountOnExit||s.mountOnEnter?p=H:p=k,n.state={status:p},n.nextCallback=null,n}t.getDerivedStateFromProps=function(a,n){var i=a.in;return i&&n.status===H?{status:k}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(a){var n=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==I&&i!==U&&(n=I):(i===I||i===U)&&(n=ce)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var a=this.props.timeout,n,i,c;return n=i=c=a,a!=null&&typeof a!="number"&&(n=a.exit,i=a.enter,c=a.appear!==void 0?a.appear:i),{exit:n,enter:i,appear:c}},r.updateStatus=function(a,n){if(a===void 0&&(a=!1),n!==null)if(this.cancelNextCallback(),n===I){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this);i&&en(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===k&&this.setState({status:H})},r.performEnter=function(a){var n=this,i=this.props.enter,c=this.context?this.context.isMounting:a,p=this.props.nodeRef?[c]:[X.findDOMNode(this),c],h=p[0],f=p[1],m=this.getTimeouts(),g=c?m.appear:m.enter;if(!a&&!i||Oe.disabled){this.safeSetState({status:U},function(){n.props.onEntered(h)});return}this.props.onEnter(h,f),this.safeSetState({status:I},function(){n.props.onEntering(h,f),n.onTransitionEnd(g,function(){n.safeSetState({status:U},function(){n.props.onEntered(h,f)})})})},r.performExit=function(){var a=this,n=this.props.exit,i=this.getTimeouts(),c=this.props.nodeRef?void 0:X.findDOMNode(this);if(!n||Oe.disabled){this.safeSetState({status:k},function(){a.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:ce},function(){a.props.onExiting(c),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:k},function(){a.props.onExited(c)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(a,n){n=this.setNextCallback(n),this.setState(a,n)},r.setNextCallback=function(a){var n=this,i=!0;return this.nextCallback=function(c){i&&(i=!1,n.nextCallback=null,a(c))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},r.onTransitionEnd=function(a,n){this.setNextCallback(n);var i=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this),c=a==null&&!this.props.addEndListener;if(!i||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var p=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],h=p[0],f=p[1];this.props.addEndListener(h,f)}a!=null&&setTimeout(this.nextCallback,a)},r.render=function(){var a=this.state.status;if(a===H)return null;var n=this.props,i=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var c=_e(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return L.createElement(Be.Provider,{value:null},typeof i=="function"?i(a,c):L.cloneElement(L.Children.only(i),c))},t}(L.Component);T.contextType=Be;T.propTypes={};function $(){}T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$,onEntering:$,onEntered:$,onExit:$,onExiting:$,onExited:$};T.UNMOUNTED=H;T.EXITED=k;T.ENTERING=I;T.ENTERED=U;T.EXITING=ce;const tn=T,De=e=>!e||typeof e=="function"?e:t=>{e.current=t};function nn(e,t){const r=De(e),s=De(t);return a=>{r&&r(a),s&&s(a)}}function rn(e,t){return o.useMemo(()=>nn(e,t),[e,t])}function sn(e){return e&&"setState"in e?X.findDOMNode(e):e??null}const an=L.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:s,onExiting:a,onExited:n,addEndListener:i,children:c,childRef:p,...h},f)=>{const m=o.useRef(null),g=rn(m,p),S=x=>{g(sn(x))},v=x=>w=>{x&&m.current&&x(m.current,w)},V=o.useCallback(v(e),[e]),A=o.useCallback(v(t),[t]),N=o.useCallback(v(r),[r]),K=o.useCallback(v(s),[s]),F=o.useCallback(v(a),[a]),R=o.useCallback(v(n),[n]),Y=o.useCallback(v(i),[i]);return u.jsx(tn,{ref:f,...h,onEnter:V,onEntered:N,onEntering:A,onExit:K,onExited:R,onExiting:F,addEndListener:Y,nodeRef:m,children:typeof c=="function"?(x,w)=>c(x,{...w,ref:S}):L.cloneElement(c,{ref:S})})}),on=an,un=40;function cn(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const We=o.forwardRef(({defaultActiveIndex:e=0,...t},r)=>{const{as:s="div",bsPrefix:a,slide:n=!0,fade:i=!1,controls:c=!0,indicators:p=!0,indicatorLabels:h=[],activeIndex:f,onSelect:m,onSlide:g,onSlid:S,interval:v=5e3,keyboard:V=!0,onKeyDown:A,pause:N="hover",onMouseOver:K,onMouseOut:F,wrap:R=!0,touch:Y=!0,onTouchStart:x,onTouchMove:w,onTouchEnd:Q,prevIcon:Xe=u.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:fe="Previous",nextIcon:He=u.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:de="Next",variant:pe,className:Ge,children:z,...Ve}=Ot({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),C=le(a,"carousel"),M=Lt(),P=o.useRef(null),[ge,me]=o.useState("next"),[Ye,q]=o.useState(!1),[_,he]=o.useState(!1),[b,qe]=o.useState(f||0);o.useEffect(()=>{!_&&f!==b&&(P.current?me(P.current):me((f||0)>b?"next":"prev"),n&&he(!0),qe(f||0))},[f,_,b,n]),o.useEffect(()=>{P.current&&(P.current=null)});let O=0,be;_t(z,(l,d)=>{++O,d===f&&(be=l.props.interval)});const ve=ke(be),E=o.useCallback(l=>{if(_)return;let d=b-1;if(d<0){if(!R)return;d=O-1}P.current="prev",m==null||m(d,l)},[_,b,m,R,O]),y=re(l=>{if(_)return;let d=b+1;if(d>=O){if(!R)return;d=0}P.current="next",m==null||m(d,l)}),ee=o.useRef();o.useImperativeHandle(r,()=>({element:ee.current,prev:E,next:y}));const xe=re(()=>{!document.hidden&&cn(ee.current)&&(M?E():y())}),D=ge==="next"?"start":"end";pt(()=>{n||(g==null||g(b,D),S==null||S(b,D))},[b]);const Ze=`${C}-item-${ge}`,Je=`${C}-item-${D}`,Qe=o.useCallback(l=>{zt(l),g==null||g(b,D)},[g,b,D]),ze=o.useCallback(()=>{he(!1),S==null||S(b,D)},[S,b,D]),et=o.useCallback(l=>{if(V&&!/input|textarea/i.test(l.target.tagName))switch(l.key){case"ArrowLeft":l.preventDefault(),M?y(l):E(l);return;case"ArrowRight":l.preventDefault(),M?E(l):y(l);return}A==null||A(l)},[V,A,E,y,M]),tt=o.useCallback(l=>{N==="hover"&&q(!0),K==null||K(l)},[N,K]),nt=o.useCallback(l=>{q(!1),F==null||F(l)},[F]),Ee=o.useRef(0),Z=o.useRef(0),ye=bt(),rt=o.useCallback(l=>{Ee.current=l.touches[0].clientX,Z.current=0,N==="hover"&&q(!0),x==null||x(l)},[N,x]),st=o.useCallback(l=>{l.touches&&l.touches.length>1?Z.current=0:Z.current=l.touches[0].clientX-Ee.current,w==null||w(l)},[w]),at=o.useCallback(l=>{if(Y){const d=Z.current;Math.abs(d)>un&&(d>0?E(l):y(l))}N==="hover"&&ye.set(()=>{q(!1)},v||void 0),Q==null||Q(l)},[Y,N,E,y,ye,v,Q]),Ce=v!=null&&!Ye&&!_,te=o.useRef();o.useEffect(()=>{var l,d;if(!Ce)return;const j=M?E:y;return te.current=window.setInterval(document.visibilityState?xe:j,(l=(d=ve.current)!=null?d:v)!=null?l:void 0),()=>{te.current!==null&&clearInterval(te.current)}},[Ce,E,y,ve,v,xe,M]);const je=o.useMemo(()=>p&&Array.from({length:O},(l,d)=>j=>{m==null||m(d,j)}),[p,O,m]);return u.jsxs(s,{ref:ee,...Ve,onKeyDown:et,onMouseOver:tt,onMouseOut:nt,onTouchStart:rt,onTouchMove:st,onTouchEnd:at,className:G(Ge,C,n&&"slide",i&&`${C}-fade`,pe&&`${C}-${pe}`),children:[p&&u.jsx("div",{className:`${C}-indicators`,children:Re(z,(l,d)=>u.jsx("button",{type:"button","data-bs-target":"","aria-label":h!=null&&h.length?h[d]:`Slide ${d+1}`,className:d===b?"active":void 0,onClick:je?je[d]:void 0,"aria-current":d===b},d))}),u.jsx("div",{className:`${C}-inner`,children:Re(z,(l,d)=>{const j=d===b;return n?u.jsx(on,{in:j,onEnter:j?Qe:void 0,onEntered:j?ze:void 0,addEndListener:Qt,children:(B,it)=>o.cloneElement(l,{...it,className:G(l.props.className,j&&B!=="entered"&&Ze,(B==="entered"||B==="exiting")&&"active",(B==="entering"||B==="exiting")&&Je)})}):o.cloneElement(l,{className:G(l.props.className,j&&"active")})})}),c&&u.jsxs(u.Fragment,{children:[(R||f!==0)&&u.jsxs(Se,{className:`${C}-control-prev`,onClick:E,children:[Xe,fe&&u.jsx("span",{className:"visually-hidden",children:fe})]}),(R||f!==O-1)&&u.jsxs(Se,{className:`${C}-control-next`,onClick:y,children:[He,de&&u.jsx("span",{className:"visually-hidden",children:de})]})]})]})});We.displayName="Carousel";const W=Object.assign(We,{Caption:Mt,Item:Pt});function ln(){return u.jsxs(W,{"data-bs-theme":"light",children:[u.jsxs(W.Item,{interval:1500,children:[u.jsx("img",{src:ft,alt:""}),u.jsx(W.Caption,{children:u.jsx("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})})]}),u.jsxs(W.Item,{interval:1500,children:[u.jsx("img",{src:dt,alt:""}),u.jsx(W.Caption,{children:u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})]})]})}function fn(){return u.jsx("div",{className:"main-banner",style:{backgroundImage:`url(${lt})`},children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"row banner-content-direction",children:[u.jsx("div",{className:"col-lg-6 col-md-6 align-self-center",children:u.jsxs("div",{className:"header-text",children:[u.jsx("h6",{children:"Liberty NFT Market"}),u.jsx("h2",{children:"Create, Sell & Collect Top NFT’s."}),u.jsx("p",{children:"Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMos free css templates."}),u.jsxs("div",{className:"buttons",children:[u.jsx(Te,{text:"About Us",to:"about-us"}),u.jsx(Te,{text:"Contact Us",to:"contact-us",classes:"mx-2"})]})]})}),u.jsx("div",{className:"col-lg-5 col-md-6 offset-lg-1",children:u.jsx(ln,{})})]})})})}const dn="/assets/ruby-9mnBmMQl.png",pn="/assets/ruby-on-rails-SGdTl4ph.png",gn="/assets/react-js-05YURXLR.png",mn="/assets/react-native-7YKB4bWw.png",hn="/assets/postgresql-4i9RU7fe.png",bn="/assets/graphql-xAbpWj4x.png",vn="/assets/js-h03tjLTY.png",xn="/assets/html-B-K_zmhr.png",En="/assets/css-rwvbZbMt.png",yn=[{image:dn,title:"Ruby"},{image:pn,title:"Ruby On Rails"},{image:gn,title:"React"},{image:mn,title:"React Native"},{image:hn,title:"Postgresql"},{image:bn,title:"Graphql"},{image:vn,title:"Javascript"},{image:xn,title:"HTML5"},{image:En,title:"CSS3"}];function Cn(){return u.jsx(ut,{heading:u.jsxs("h2",{children:["Technologies That ",u.jsx("em",{children:"We"})," Use."]}),bgGradientImage:"linear-gradient(333deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(470deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(336deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(450deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(0,0,0, 0.02) 83.335%, rgba(0,0,0, 0.02) 100.002%),linear-gradient(461deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(230deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(158,28,133, 0) 66.668%, rgba(158,28,133, 0) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(401deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(223deg, hsl(98,0%,0%),hsl(98,0%,0%))",children:u.jsx("div",{className:"row d-flex justify-content-center technologies",children:yn.map(e=>u.jsx("div",{className:"col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4",children:u.jsxs("div",{className:"item",children:[u.jsx("div",{className:"icon",children:u.jsx("img",{className:"technology-img",src:e.image,alt:""})}),u.jsx("h4",{className:"mx-auto",children:e.title})]})},e.title))})})}function Nn(){return u.jsxs(u.Fragment,{children:[u.jsx(fn,{}),u.jsx(Cn,{}),u.jsx(ct,{})]})}export{Nn as default};
