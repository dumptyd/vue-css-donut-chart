(function(e){function t(t){for(var s,r,i=t[0],l=t[1],c=t[2],d=0,v=[];d<i.length;d++)r=i[d],o[r]&&v.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},o={app:0},a=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-css-donut-chart/legacy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b75":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("demo"),n("footer",[e._m(0),n("badges")],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credit"},[e._v("\n      Made with "),n("strong",[e._v("👐")]),e._v(" and "),n("strong",[e._v("⌨️")]),e._v(" by\n      "),n("a",{attrs:{href:"https://github.com/dumptyd"}},[e._v("dumptyd")]),e._v(".\n    ")])}],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"container-header"},[n("h1",[e._v("vue-css-donut-chart "),n("sup",[e._v(e._s(e.version))])]),n("div",[e._v("\n      Lightweight\n      "),n("select",{staticClass:"vue-version-select",on:{change:e.handleVersionSelectChange}},[n("option",{attrs:{value:"/vue-css-donut-chart/legacy",selected:""}},[e._v("Vue 2")]),n("option",{attrs:{value:"/vue-css-donut-chart"}},[e._v("Vue 3")])]),e._v("\n      component for drawing pure CSS donut charts\n    ")])]),e._m(0),n("div",{staticClass:"container-donut"},[n("donut",e._g(e._b({},"donut",e.donutProps,!1),e.listeners),[n("div",{domProps:{innerHTML:e._s(e.donutHTML)}})])],1),n("div",{staticClass:"container-body"},[n("div",{staticClass:"configuration"},[n("div",[n("h3",[e._v("Donut configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"background"}},[e._v("Background")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.background,expression:"background"}],attrs:{name:"background",type:"color"},domProps:{value:e.background},on:{input:function(t){t.target.composing||(e.background=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"foreground"}},[e._v("Foreground")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foreground,expression:"foreground"}],attrs:{name:"foreground",type:"color"},domProps:{value:e.foreground},on:{input:function(t){t.target.composing||(e.foreground=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"size"}},[e._v("Size")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.size,expression:"size",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"size",type:"number",min:"1"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.unit=t.target.multiple?n:n[0]}}},e._l(e.unitOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"thickness"}},[e._v("Ring thickness (%)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.thickness,expression:"thickness",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"thickness",type:"number",min:"0",max:"100"},domProps:{value:e.thickness},on:{input:function(t){t.target.composing||(e.thickness=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"start-angle"}},[e._v("Start angle (in degrees)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startAngle,expression:"startAngle",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"start-angle",type:"number"},domProps:{value:e.startAngle},on:{input:function(t){t.target.composing||(e.startAngle=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])]),n("div",[n("h3",[e._v("Legend configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"has-legend"}},[e._v("Has legend?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hasLegend,expression:"hasLegend"}],attrs:{id:"has-legend",type:"checkbox"},domProps:{checked:Array.isArray(e.hasLegend)?e._i(e.hasLegend,null)>-1:e.hasLegend},on:{change:function(t){var n=e.hasLegend,s=t.target,o=!!s.checked;if(Array.isArray(n)){var a=null,r=e._i(n,a);s.checked?r<0&&(e.hasLegend=n.concat([a])):r>-1&&(e.hasLegend=n.slice(0,r).concat(n.slice(r+1)))}else e.hasLegend=o}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"placement"}},[e._v("Legend Placement")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.legendPlacement,expression:"legendPlacement"}],attrs:{name:"placement",disabled:!e.hasLegend},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.legendPlacement=t.target.multiple?n:n[0]}}},e._l(e.placementOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])])]),n("div",[n("h3",[e._v("Donut content")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control control-vertical flex-grow-1 flex-start"},[e._m(1),"HTML"===e.textType?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.donutHTML,expression:"donutHTML"}],attrs:{name:"text",rows:"3"},domProps:{value:e.donutHTML},on:{input:function(t){t.target.composing||(e.donutHTML=t.target.value)}}}):e._e()])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"auto-adjust-text-size"}},[e._v("Auto-adjust font size based on the chart size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.autoAdjustTextSize,expression:"autoAdjustTextSize"}],attrs:{id:"auto-adjust-text-size",type:"checkbox"},domProps:{checked:Array.isArray(e.autoAdjustTextSize)?e._i(e.autoAdjustTextSize,null)>-1:e.autoAdjustTextSize},on:{change:function(t){var n=e.autoAdjustTextSize,s=t.target,o=!!s.checked;if(Array.isArray(n)){var a=null,r=e._i(n,a);s.checked?r<0&&(e.autoAdjustTextSize=n.concat([a])):r>-1&&(e.autoAdjustTextSize=n.slice(0,r).concat(n.slice(r+1)))}else e.autoAdjustTextSize=o}}})]),n("div",{staticClass:"note"},[e._v("\n          Try setting the size to 500px and then check and uncheck this setting to see the difference.\n        ")])]),n("div",[n("h3",[e._v("Section events")]),n("div",{staticClass:"control-group"},e._l(e.events,function(t){return n("div",{key:t.sectionEventName,staticClass:"control"},[n("label",{attrs:{for:t.sectionEventName+"-checkbox"}},[e._v(e._s(t.sectionEventName))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.enabled,expression:"event.enabled"}],attrs:{id:t.sectionEventName+"-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.enabled)?e._i(t.enabled,null)>-1:t.enabled},on:{change:function(n){var s=t.enabled,o=n.target,a=!!o.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);o.checked?i<0&&e.$set(t,"enabled",s.concat([r])):i>-1&&e.$set(t,"enabled",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(t,"enabled",a)}}})])}),0),n("div",{staticClass:"note"},[e._v("Checked events will log to console when they're triggered.")])]),n("div",{staticClass:"donut-sections"},[n("h3",[e._v("Donut sections")]),e._l(e.sections,function(t,s){return n("div",{key:s,staticClass:"control-group"},[n("div",{staticClass:"control"},[n("pre",[n("small",[e._v(e._s(s+1)+".")])])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-value-"+(s+1)}},[e._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"section.value",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"`section-value-${idx + 1}`",min:0,max:t.value+e.remaining,type:"number"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-label-"+(s+1)}},[e._v("Label")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"section.label"}],attrs:{name:"`section-label-${idx + 1}`",type:"text"},domProps:{value:t.label},on:{input:function(n){n.target.composing||e.$set(t,"label",n.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-color-"+(s+1)}},[e._v("Color")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"section.color"}],staticClass:"sm",attrs:{name:"`section-color-${idx + 1}`",type:"color"},domProps:{value:t.color},on:{input:function(n){n.target.composing||e.$set(t,"color",n.target.value)}}})]),n("div",{staticClass:"control"},[n("button",{staticClass:"outline-red",on:{click:function(t){return e.removeSection(s)}}},[e._v("- remove")])])])})],2),n("button",{staticClass:"outline-green",on:{click:e.addSection}},[e._v("\n        + add "+e._s(e.sections.length?"another":"a")+" section\n      ")])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"container-nav"},[n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md"}},[e._v("Documentation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md#installation"}},[e._v("Installation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md#usage"}},[e._v("Usage")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart"}},[e._v("GitHub")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"text"}},[e._v("Content "),n("small",[e._v("(HTML supported)")])])}],l=(n("ac6a"),n("3835")),c=n("be94"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-container",style:e.placementStyles.container},[n("div",{ref:"donut",staticClass:"cdc",style:e.donutStyles},[n("donut-sections",e._g({attrs:{sections:e.donutSections,"start-angle":e.startAngle}},e.sectionListeners)),n("div",{staticClass:"cdc-overlay",style:e.overlayStyles},[n("div",{staticClass:"cdc-text",style:e.donutTextStyles},[e._t("default",[e._v(e._s(e.text))])],2)])],1),e._t("legend",[e.hasLegend?n("div",{staticClass:"cdc-legend",style:e.placementStyles.legend},e._l(e.legend,function(t,s){return n("span",{key:s,staticClass:"cdc-legend-item",attrs:{title:t.percent}},[n("span",{staticClass:"cdc-legend-item-color",style:t.styles}),n("span",[e._v(e._s(t.label))])])}),0):e._e()])],2)},d=[];const v=["click","mouseenter","mouseleave","mouseover","mouseout","mousemove"].map(e=>({nativeEventName:e,sectionEventName:`section-${e}`})),m=["#FF6384","#36A2EB","#FFCE56","#F58231","#46F0F0","#D2F53C","#911EB4","#F032E6","#3CB44B","#FFE119","#E6194B","#FABEBE","#008080","#E6BEFF","#0082C8","#AA6E28","#FFFAC8","#800000","#AAFFC3","#808000","#FFD8B1","#000080","#808080","#000000"];var h=m;const p="1em",g="dodgerblue",f={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},b={[f.TOP]:{container:{flexDirection:"column"},legend:{order:-1,margin:0,marginBottom:p}},[f.RIGHT]:{container:{},legend:{flexDirection:"column",margin:0,marginLeft:p}},[f.BOTTOM]:{container:{flexDirection:"column"},legend:{}},[f.LEFT]:{container:{},legend:{flexDirection:"column",order:-1,margin:0,marginRight:p}}},y=e=>!!e&&e.constructor===Object,_=[{type:"number",key:"value",required:!0},{key:"label"},{key:"color"}];function x(e){return!!y(e)&&_.reduce((t,n)=>{if(!t)return!1;let s=!0;return n.required&&(s=s&&Object.hasOwnProperty.call(e,n.key)),n.type&&(s=s&&typeof e[n.key]===n.type),t&&s},!0)}var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-sections",style:e.containerStyles},e._l(e.donutSections,function(t,s){return n("div",e._g({key:s,staticClass:"cdc-section",class:t.className,style:t.sectionStyles},t.listeners),[n("div",{staticClass:"cdc-filler",style:t.fillerStyles,attrs:{title:t.label}})])}),0)},k=[];const C={LEFT:"cdc-section-left",RIGHT:"cdc-section-right"};var E={props:{startAngle:{type:Number,default:0},sections:{type:Array,default:()=>[]}},computed:{containerStyles(){return{transform:`rotate(${this.startAngle}deg)`}},donutSections(){const e=180;let t=0,n=0;const s=this.sections.map(s=>{let o=[C.RIGHT,-180],a=o[0],r=o[1];if(t>=e){var i=[C.LEFT,180];a=i[0],r=i[1]}const l=r+s.degree,u={backgroundColor:s.color||g,transform:`rotate(${l}deg)`},d={transform:`rotate(${n}deg)`};t+=s.degree,180===t?n=0:n+=s.degree;const m=v.reduce((e,t)=>{let n=t.nativeEventName,o=t.sectionEventName;return Object(c["a"])({},e,{[n]:e=>this.emitEvent(o,s,e)})},{});return{label:s.label,className:a,fillerStyles:u,sectionStyles:d,listeners:m}});return s}},methods:{emitEvent(e,t,n){0!==t.value&&this.$emit(e,t.$section,n)}}},A=E,z=n("2877"),w=Object(z["a"])(A,S,k,!1,null,null,null),T=w.exports,$=(n("7e79"),{name:"vc-donut",props:{size:{type:Number,default:250,validator:e=>e>0},unit:{type:String,default:"px"},thickness:{type:Number,default:20,validator:e=>e>=0&&e<=100},text:{type:String,default:null},autoAdjustTextSize:{type:Boolean,default:!0},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#eeeeee"},sections:{type:Array,default:()=>[],validator(e){for(let t=0;t<e.length;++t)if(!x(e[t]))return!1;return!0}},total:{type:Number,default:100,validator:e=>e>0},hasLegend:{type:Boolean,default:!1},legendPlacement:{type:String,default:f.BOTTOM,validator:e=>!!f[e.toUpperCase()]},startAngle:{type:Number,default:0}},watch:{autoAdjustTextSize(e){e?window.addEventListener("resize",this.resizeListener):window.removeEventListener("resize",this.resizeListener),this.recalcFontSize()},size(){this.recalcFontSize()},unit(){this.recalcFontSize()}},data(){return{donutEl:null,fontSize:"1em",resizeListener:null}},computed:{donutSections(){let e=this.sections.reduce((e,t)=>e+t.value,0);if("number"!==typeof e)return[];if(e=Number(e.toFixed(2)),e>this.total){const t=`Sum of all the sections' values (${e}) should not exceed \`total\` (${this.total})`;throw new Error(t)}const t=360,n=180;let s=0,o=0;const a=[];return this.sections.forEach(e=>{const r=t*(e.value/this.total);let i=[r];r>n&&(i=[n,r-n]);const l=e.color||h[o++];i.forEach(t=>{const o=Number((s+t).toFixed(2));if(o>n){const o=n-s;a.push(Object(c["a"])({},e,{degree:o,color:l,$section:e}),Object(c["a"])({},e,{degree:t-o,color:l,$section:e}))}else a.push(Object(c["a"])({},e,{degree:t,color:l,$section:e}));s+=t,s>=n&&(s-=n)})}),a},legend(){if(!this.hasLegend)return null;let e=0;return this.sections.map((t,n)=>({label:t.label||`Section ${n+1}`,percent:`${t.value} (${t.value/this.total*100}%)`,styles:{backgroundColor:t.color||h[e++]}}))},placementStyles(){return this.hasLegend?b[this.legendPlacement]:{}},donutStyles(){const e=`${this.size}${this.unit}`,t={width:e,paddingBottom:e,backgroundColor:this.foreground};return t},overlayStyles(){const e=100,t=e-this.thickness,n=`${t}%`,s=`calc(50% - ${t/2}%)`;return{height:n,width:n,top:s,left:s,backgroundColor:this.background}},donutTextStyles(){const e=this.fontSize;return{fontSize:e}},sectionListeners(){var e=this;return v.reduce((t,n)=>{let s=n.sectionEventName;return Object(c["a"])({},t,{[s]:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.emitSectionEvent(s,...n)}})},{})}},methods:{recalcFontSize(){if(!this.autoAdjustTextSize)return void(this.fontSize="1em");const e=.08;let t=this.size;this.$nextTick(()=>{"px"!==this.unit&&(t=this.donutEl?this.donutEl.clientWidth:null),this.fontSize=t?`${(t*e).toFixed(2)}px`:"1em"})},emitSectionEvent(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];this.$emit(e,...n)}},created(){this.resizeListener=this.recalcFontSize.bind(this)},mounted(){this.donutEl=this.$refs.donut,this.autoAdjustTextSize&&(this.recalcFontSize(),window.addEventListener("resize",this.resizeListener))},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)},components:{DonutSections:T}}),L=$,j=Object(z["a"])(L,u,d,!1,null,null,null),N=j.exports,O=n("9224");n("ce52"),n("0b75");const F=(e,t)=>{return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},P=e=>JSON.parse(JSON.stringify(e)),M=e=>Number(Number(e).toFixed(2));var B={data(){const e=["px","%"],t=["top","right","bottom","left"],n=["text","HTML"],s=["Wake up","Work","Eat donuts","Sleep"],o=100,a=Array(4).fill(!0).map((e,t,n)=>({value:F(o/n.length/2,o/n.length),label:s[t],color:h[t]})),r=a.reduce((e,t)=>e+t.value,0),i=["click"],l=v.map(e=>Object(c["a"])({},e,{enabled:i.includes(e.nativeEventName)}));return{background:"#ffffff",foreground:"#eeeeee",size:200,unit:"px",thickness:20,startAngle:0,total:o,hasLegend:!0,legendPlacement:"bottom",textType:"HTML",donutHTML:`<h1 style="margin: 0;">${r}%</h1> donut consumed`,autoAdjustTextSize:!0,unitOptions:e,placementOptions:t,textTypeOptions:n,sections:a,events:l,version:O["a"]}},computed:{donutProps(){const e=this.background,t=this.foreground,n=this.size,s=this.unit,o=this.thickness,a=this.hasLegend,r=this.legendPlacement,i=this.validatedSections,c=this.total,u=this.startAngle,d=this.autoAdjustTextSize,v=[n,o,c,u].map(e=>M(e)),m=Object(l["a"])(v,4),h=m[0],p=m[1],g=m[2],f=m[3];return{background:e,foreground:t,size:h>0?h:200,unit:s,thickness:p>=0&&p<=100?p:20,hasLegend:a,legendPlacement:r,autoAdjustTextSize:d,sections:i,total:g>0?g:100,startAngle:f||0}},consumed(){return this.sections.reduce((e,t)=>e+t.value,0)},remaining(){return this.total-this.consumed},validatedSections(){const e=this.consumed,t=this.total;return[e,t].some(e=>"number"!==typeof e)||M(this.consumed)>M(this.total)?[]:this.sections},listeners(){var e=this;return this.events.filter(e=>e.enabled).reduce((t,n)=>Object(c["a"])({},t,{[n.sectionEventName]:function(){for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return e.handleSectionEvent(n,...s)}}),{})}},methods:{addSection(){this.sections.push({value:0,label:null,color:h[this.sections.length]||null})},removeSection(e){this.sections.splice(e,1)},handleSectionEvent(e,t,n){let s=e.sectionEventName;const o=[["-".repeat(10)],[`"${s}" occurred on "${t.label||"Unnamed section"}"`],["Section object:",P(t)],["Native event:",n]];o.forEach(e=>console.log(...e))},handleVersionSelectChange(e){window.location.href=e.target.value}},components:{Donut:N}},H=B,D=Object(z["a"])(H,r,i,!1,null,null,null),U=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badges"},e._l(e.badges,function(e,t){return n("a",{key:t,staticClass:"badge",attrs:{target:"_blank",href:e.href,rel:"noopener"}},[n("img",{attrs:{alt:e.alt,src:e.badgeUrl}})])}),0)},G=[];const V="flat-square",I=[{alt:"npm",badgeUrl:"https://img.shields.io/npm/v/vue-css-donut-chart",href:"https://www.npmjs.com/package/vue-css-donut-chart"},{alt:"npm monthly downloads",badgeUrl:"https://img.shields.io/npm/dm/vue-css-donut-chart",href:"https://www.npmjs.com/package/vue-css-donut-chart"},{alt:"npm bundle size",badgeUrl:"https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart",href:"https://bundlephobia.com/result?p=vue-css-donut-chart"},{alt:"GitHub Actions status",badgeUrl:"https://img.shields.io/endpoint.svg?url=https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/badge&label=tests&logo=none",href:"https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/goto"},{alt:"Coverage status",badgeUrl:"https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart",href:"https://codecov.io/gh/dumptyd/vue-css-donut-chart"},{alt:"Snyk Vulnerabilities for npm package",badgeUrl:"https://img.shields.io/snyk/vulnerabilities/npm/vue-css-donut-chart",href:"https://snyk.io/vuln/npm:vue-css-donut-chart"}].map(e=>{const t=e.badgeUrl.includes("?")?"&style=":"?style=";return e.badgeUrl=`${e.badgeUrl}${t}${V}`,e});var J={data(){return{badges:I}}},q=J,W=Object(z["a"])(q,R,G,!1,null,null,null),K=W.exports,Q={components:{Demo:U,Badges:K}},X=Q,Y=Object(z["a"])(X,o,a,!1,null,null,null),Z=Y.exports;s["a"].config.productionTip=!1,new s["a"]({render:e=>e(Z)}).$mount("#app")},"7e79":function(e,t,n){},9224:function(e){e.exports={a:"1.3.2"}},ce52:function(e,t,n){}});