(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],d=0,v=[];d<i.length;d++)s=i[d],a[s]&&v.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-css-donut-chart/legacy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b75":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o,a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("demo"),n("footer",[e._m(0),n("badges")],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credit"},[e._v("\n      Made with "),n("strong",[e._v("👐")]),e._v(" and "),n("strong",[e._v("⌨️")]),e._v(" by\n      "),n("a",{attrs:{href:"https://github.com/dumptyd"}},[e._v("dumptyd")]),e._v(".\n    ")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"container-header"},[n("h1",[e._v("vue-css-donut-chart "),n("sup",[e._v(e._s(e.version))])]),n("div",[e._v("\n      Lightweight\n      "),n("select",{staticClass:"vue-version-select",on:{change:e.handleVersionSelectChange}},[n("option",{attrs:{value:"/vue-css-donut-chart/legacy",selected:""}},[e._v("Vue 2")]),n("option",{attrs:{value:"/vue-css-donut-chart"}},[e._v("Vue 3")])]),e._v("\n      component for drawing pure CSS donut charts\n    ")])]),e._m(0),n("div",{staticClass:"container-donut"},[n("donut",e._g(e._b({},"donut",e.donutProps,!1),e.listeners),[n("div",{domProps:{innerHTML:e._s(e.donutHTML)}})])],1),n("div",{staticClass:"container-body"},[n("div",{staticClass:"configuration"},[n("div",[n("h3",[e._v("Donut configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"background"}},[e._v("Background")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.background,expression:"background"}],attrs:{name:"background",type:"color"},domProps:{value:e.background},on:{input:function(t){t.target.composing||(e.background=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"foreground"}},[e._v("Foreground")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foreground,expression:"foreground"}],attrs:{name:"foreground",type:"color"},domProps:{value:e.foreground},on:{input:function(t){t.target.composing||(e.foreground=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"size"}},[e._v("Size")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.size,expression:"size",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"size",type:"number",min:"1"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.unit=t.target.multiple?n:n[0]}}},e._l(e.unitOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"thickness"}},[e._v("Ring thickness (%)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.thickness,expression:"thickness",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"thickness",type:"number",min:"0",max:"100"},domProps:{value:e.thickness},on:{input:function(t){t.target.composing||(e.thickness=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"start-angle"}},[e._v("Start angle (in degrees)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startAngle,expression:"startAngle",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"start-angle",type:"number"},domProps:{value:e.startAngle},on:{input:function(t){t.target.composing||(e.startAngle=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])]),n("div",[n("h3",[e._v("Legend configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"has-legend"}},[e._v("Has legend?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hasLegend,expression:"hasLegend"}],attrs:{id:"has-legend",type:"checkbox"},domProps:{checked:Array.isArray(e.hasLegend)?e._i(e.hasLegend,null)>-1:e.hasLegend},on:{change:function(t){var n=e.hasLegend,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);o.checked?s<0&&(e.hasLegend=n.concat([r])):s>-1&&(e.hasLegend=n.slice(0,s).concat(n.slice(s+1)))}else e.hasLegend=a}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"placement"}},[e._v("Legend Placement")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.legendPlacement,expression:"legendPlacement"}],attrs:{name:"placement",disabled:!e.hasLegend},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.legendPlacement=t.target.multiple?n:n[0]}}},e._l(e.placementOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])])]),n("div",[n("h3",[e._v("Donut content")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control control-vertical flex-grow-1 flex-start"},[e._m(1),"HTML"===e.textType?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.donutHTML,expression:"donutHTML"}],attrs:{name:"text",rows:"3"},domProps:{value:e.donutHTML},on:{input:function(t){t.target.composing||(e.donutHTML=t.target.value)}}}):e._e()])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"auto-adjust-text-size"}},[e._v("Auto-adjust font size based on the chart size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.autoAdjustTextSize,expression:"autoAdjustTextSize"}],attrs:{id:"auto-adjust-text-size",type:"checkbox"},domProps:{checked:Array.isArray(e.autoAdjustTextSize)?e._i(e.autoAdjustTextSize,null)>-1:e.autoAdjustTextSize},on:{change:function(t){var n=e.autoAdjustTextSize,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);o.checked?s<0&&(e.autoAdjustTextSize=n.concat([r])):s>-1&&(e.autoAdjustTextSize=n.slice(0,s).concat(n.slice(s+1)))}else e.autoAdjustTextSize=a}}})]),n("div",{staticClass:"note"},[e._v("\n          Try setting the size to 500px and then check and uncheck this setting to see the difference.\n        ")])]),n("div",[n("h3",[e._v("Section events")]),n("div",{staticClass:"control-group"},e._l(e.events,function(t){return n("div",{key:t.sectionEventName,staticClass:"control"},[n("label",{attrs:{for:t.sectionEventName+"-checkbox"}},[e._v(e._s(t.sectionEventName))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.enabled,expression:"event.enabled"}],attrs:{id:t.sectionEventName+"-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.enabled)?e._i(t.enabled,null)>-1:t.enabled},on:{change:function(n){var o=t.enabled,a=n.target,r=!!a.checked;if(Array.isArray(o)){var s=null,i=e._i(o,s);a.checked?i<0&&e.$set(t,"enabled",o.concat([s])):i>-1&&e.$set(t,"enabled",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(t,"enabled",r)}}})])}),0),n("div",{staticClass:"note"},[e._v("Checked events will log to console when they're triggered.")])]),n("div",{staticClass:"donut-sections"},[n("h3",[e._v("Donut sections")]),e._l(e.sections,function(t,o){return n("div",{key:o,staticClass:"control-group"},[n("div",{staticClass:"control"},[n("pre",[n("small",[e._v(e._s(o+1)+".")])])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-value-"+(o+1)}},[e._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"section.value",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"`section-value-${idx + 1}`",min:0,max:t.value+e.remaining,type:"number"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-label-"+(o+1)}},[e._v("Label")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"section.label"}],attrs:{name:"`section-label-${idx + 1}`",type:"text"},domProps:{value:t.label},on:{input:function(n){n.target.composing||e.$set(t,"label",n.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-color-"+(o+1)}},[e._v("Color")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"section.color"}],staticClass:"sm",attrs:{name:"`section-color-${idx + 1}`",type:"color"},domProps:{value:t.color},on:{input:function(n){n.target.composing||e.$set(t,"color",n.target.value)}}})]),n("div",{staticClass:"control"},[n("button",{staticClass:"outline-red",on:{click:function(t){return e.removeSection(o)}}},[e._v("- remove")])])])})],2),n("button",{staticClass:"outline-green",on:{click:e.addSection}},[e._v("\n        + add "+e._s(e.sections.length?"another":"a")+" section\n      ")])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"container-nav"},[n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md"}},[e._v("Documentation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md#installation"}},[e._v("Installation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/legacy/README.md#usage"}},[e._v("Usage")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart"}},[e._v("GitHub")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"text"}},[e._v("Content "),n("small",[e._v("(HTML supported)")])])}],l=n("75fc"),u=(n("ac6a"),n("14b9"),n("bd86")),d=n("768b"),v=(n("6762"),n("cebc")),m=(n("6c7b"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-container",style:e.placementStyles.container},[n("div",{ref:"donut",staticClass:"cdc",style:e.donutStyles},[n("donut-sections",e._g({attrs:{sections:e.donutSections,"start-angle":e.startAngle}},e.sectionListeners)),n("div",{staticClass:"cdc-overlay",style:e.overlayStyles},[n("div",{staticClass:"cdc-text",style:e.donutTextStyles},[e._t("default",[e._v(e._s(e.text))])],2)])],1),e._t("legend",[e.hasLegend?n("div",{staticClass:"cdc-legend",style:e.placementStyles.legend},e._l(e.legend,function(t,o){return n("span",{key:o,staticClass:"cdc-legend-item",attrs:{title:t.percent}},[n("span",{staticClass:"cdc-legend-item-color",style:t.styles}),n("span",[e._v(e._s(t.label))])])}),0):e._e()])],2)}),f=[],p=["click","mouseenter","mouseleave","mouseover","mouseout","mousemove"].map(function(e){return{nativeEventName:e,sectionEventName:"section-".concat(e)}}),h=["#FF6384","#36A2EB","#FFCE56","#F58231","#46F0F0","#D2F53C","#911EB4","#F032E6","#3CB44B","#FFE119","#E6194B","#FABEBE","#008080","#E6BEFF","#0082C8","#AA6E28","#FFFAC8","#800000","#AAFFC3","#808000","#FFD8B1","#000080","#808080","#000000"],g=h,b=n("7618"),y="1em",_="dodgerblue",x={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},S=(o={},Object(u["a"])(o,x.TOP,{container:{flexDirection:"column"},legend:{order:-1,margin:0,marginBottom:y}}),Object(u["a"])(o,x.RIGHT,{container:{},legend:{flexDirection:"column",margin:0,marginLeft:y}}),Object(u["a"])(o,x.BOTTOM,{container:{flexDirection:"column"},legend:{}}),Object(u["a"])(o,x.LEFT,{container:{},legend:{flexDirection:"column",order:-1,margin:0,marginRight:y}}),o),k=function(e){return!!e&&e.constructor===Object},C=[{type:"number",key:"value",required:!0},{key:"label"},{key:"color"}];function E(e){return!!k(e)&&C.reduce(function(t,n){if(!t)return!1;var o=!0;return n.required&&(o=o&&Object.hasOwnProperty.call(e,n.key)),n.type&&(o=o&&Object(b["a"])(e[n.key])===n.type),t&&o},!0)}var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-sections",style:e.containerStyles},e._l(e.donutSections,function(t,o){return n("div",e._g({key:o,staticClass:"cdc-section",class:t.className,style:t.sectionStyles},t.listeners),[n("div",{staticClass:"cdc-filler",style:t.fillerStyles,attrs:{title:t.label}})])}),0)},z=[],w={LEFT:"cdc-section-left",RIGHT:"cdc-section-right"},j={props:{startAngle:{type:Number,default:0},sections:{type:Array,default:function(){return[]}}},computed:{containerStyles:function(){return{transform:"rotate(".concat(this.startAngle,"deg)")}},donutSections:function(){var e=this,t=180,n=0,o=0,a=this.sections.map(function(a){var r=[w.RIGHT,-180],s=r[0],i=r[1];if(n>=t){var c=[w.LEFT,180];s=c[0],i=c[1]}var l=i+a.degree,d={backgroundColor:a.color||_,transform:"rotate(".concat(l,"deg)")},m={transform:"rotate(".concat(o,"deg)")};n+=a.degree,180===n?o=0:o+=a.degree;var f=p.reduce(function(t,n){var o=n.nativeEventName,r=n.sectionEventName;return Object(v["a"])({},t,Object(u["a"])({},o,function(t){return e.emitEvent(r,a,t)}))},{});return{label:a.label,className:s,fillerStyles:d,sectionStyles:m,listeners:f}});return a}},methods:{emitEvent:function(e,t,n){0!==t.value&&this.$emit(e,t.$section,n)}}},T=j,L=n("2877"),O=Object(L["a"])(T,A,z,!1,null,null,null),N=O.exports,F=(n("7e79"),{name:"vc-donut",props:{size:{type:Number,default:250,validator:function(e){return e>0}},unit:{type:String,default:"px"},thickness:{type:Number,default:20,validator:function(e){return e>=0&&e<=100}},text:{type:String,default:null},autoAdjustTextSize:{type:Boolean,default:!0},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#eeeeee"},sections:{type:Array,default:function(){return[]},validator:function(e){for(var t=0;t<e.length;++t)if(!E(e[t]))return!1;return!0}},total:{type:Number,default:100,validator:function(e){return e>0}},hasLegend:{type:Boolean,default:!1},legendPlacement:{type:String,default:x.BOTTOM,validator:function(e){return!!x[e.toUpperCase()]}},startAngle:{type:Number,default:0}},watch:{autoAdjustTextSize:function(e){e?window.addEventListener("resize",this.resizeListener):window.removeEventListener("resize",this.resizeListener),this.recalcFontSize()},size:function(){this.recalcFontSize()},unit:function(){this.recalcFontSize()}},data:function(){return{donutEl:null,fontSize:"1em",resizeListener:null}},computed:{donutSections:function(){var e=this,t=this.sections.reduce(function(e,t){return e+t.value},0);if("number"!==typeof t)return[];if(t=Number(t.toFixed(2)),t>this.total){var n="Sum of all the sections' values (".concat(t,") should not exceed `total` (").concat(this.total,")");throw new Error(n)}var o=360,a=180,r=0,s=0,i=[];return this.sections.forEach(function(t){var n=o*(t.value/e.total),c=[n];n>a&&(c=[a,n-a]);var l=t.color||g[s++];c.forEach(function(e){var n=Number((r+e).toFixed(2));if(n>a){var o=a-r;i.push(Object(v["a"])({},t,{degree:o,color:l,$section:t}),Object(v["a"])({},t,{degree:e-o,color:l,$section:t}))}else i.push(Object(v["a"])({},t,{degree:e,color:l,$section:t}));r+=e,r>=a&&(r-=a)})}),i},legend:function(){var e=this;if(!this.hasLegend)return null;var t=0;return this.sections.map(function(n,o){return{label:n.label||"Section ".concat(o+1),percent:"".concat(n.value," (").concat(n.value/e.total*100,"%)"),styles:{backgroundColor:n.color||g[t++]}}})},placementStyles:function(){return this.hasLegend?S[this.legendPlacement]:{}},donutStyles:function(){var e="".concat(this.size).concat(this.unit),t={width:e,paddingBottom:e,backgroundColor:this.foreground};return t},overlayStyles:function(){var e=100,t=e-this.thickness,n="".concat(t,"%"),o="calc(50% - ".concat(t/2,"%)");return{height:n,width:n,top:o,left:o,backgroundColor:this.background}},donutTextStyles:function(){var e=this.fontSize;return{fontSize:e}},sectionListeners:function(){var e=this;return p.reduce(function(t,n){var o=n.sectionEventName;return Object(v["a"])({},t,Object(u["a"])({},o,function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.emitSectionEvent.apply(e,[o].concat(n))}))},{})}},methods:{recalcFontSize:function(){var e=this;if(this.autoAdjustTextSize){var t=.08,n=this.size;this.$nextTick(function(){"px"!==e.unit&&(n=e.donutEl?e.donutEl.clientWidth:null),e.fontSize=n?"".concat((n*t).toFixed(2),"px"):"1em"})}else this.fontSize="1em"},emitSectionEvent:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.$emit.apply(this,[e].concat(n))}},created:function(){this.resizeListener=this.recalcFontSize.bind(this)},mounted:function(){this.donutEl=this.$refs.donut,this.autoAdjustTextSize&&(this.recalcFontSize(),window.addEventListener("resize",this.resizeListener))},beforeDestroy:function(){window.removeEventListener("resize",this.resizeListener)},components:{DonutSections:N}}),P=F,$=Object(L["a"])(P,m,f,!1,null,null,null),M=$.exports,B=n("9224"),H=(n("ce52"),n("0b75"),function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}),D=function(e){return JSON.parse(JSON.stringify(e))},U=function(e){return Number(Number(e).toFixed(2))},R={data:function(){var e=["px","%"],t=["top","right","bottom","left"],n=["text","HTML"],o=["Wake up","Work","Eat donuts","Sleep"],a=100,r=Array(4).fill(!0).map(function(e,t,n){return{value:H(a/n.length/2,a/n.length),label:o[t],color:g[t]}}),s=r.reduce(function(e,t){return e+t.value},0),i=["click"],c=p.map(function(e){return Object(v["a"])({},e,{enabled:i.includes(e.nativeEventName)})});return{background:"#ffffff",foreground:"#eeeeee",size:200,unit:"px",thickness:20,startAngle:0,total:a,hasLegend:!0,legendPlacement:"bottom",textType:"HTML",donutHTML:'<h1 style="margin: 0;">'.concat(s,"%</h1> donut consumed"),autoAdjustTextSize:!0,unitOptions:e,placementOptions:t,textTypeOptions:n,sections:r,events:c,version:B["a"]}},computed:{donutProps:function(){var e=this.background,t=this.foreground,n=this.size,o=this.unit,a=this.thickness,r=this.hasLegend,s=this.legendPlacement,i=this.validatedSections,c=this.total,l=this.startAngle,u=this.autoAdjustTextSize,v=[n,a,c,l].map(function(e){return U(e)}),m=Object(d["a"])(v,4),f=m[0],p=m[1],h=m[2],g=m[3];return{background:e,foreground:t,size:f>0?f:200,unit:o,thickness:p>=0&&p<=100?p:20,hasLegend:r,legendPlacement:s,autoAdjustTextSize:u,sections:i,total:h>0?h:100,startAngle:g||0}},consumed:function(){return this.sections.reduce(function(e,t){return e+t.value},0)},remaining:function(){return this.total-this.consumed},validatedSections:function(){var e=this.consumed,t=this.total;return[e,t].some(function(e){return"number"!==typeof e})||U(this.consumed)>U(this.total)?[]:this.sections},listeners:function(){var e=this;return this.events.filter(function(e){return e.enabled}).reduce(function(t,n){return Object(v["a"])({},t,Object(u["a"])({},n.sectionEventName,function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e.handleSectionEvent.apply(e,[n].concat(o))}))},{})}},methods:{addSection:function(){this.sections.push({value:0,label:null,color:g[this.sections.length]||null})},removeSection:function(e){this.sections.splice(e,1)},handleSectionEvent:function(e,t,n){var o=e.sectionEventName,a=[["-".repeat(10)],['"'.concat(o,'" occurred on "').concat(t.label||"Unnamed section",'"')],["Section object:",D(t)],["Native event:",n]];a.forEach(function(e){var t;return(t=console).log.apply(t,Object(l["a"])(e))})},handleVersionSelectChange:function(e){window.location.href=e.target.value}},components:{Donut:M}},G=R,V=Object(L["a"])(G,i,c,!1,null,null,null),I=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badges"},e._l(e.badges,function(e,t){return n("a",{key:t,staticClass:"badge",attrs:{target:"_blank",href:e.href,rel:"noopener"}},[n("img",{attrs:{alt:e.alt,src:e.badgeUrl}})])}),0)},q=[],W=(n("2fdb"),"flat-square"),K=[{alt:"npm",badgeUrl:"https://img.shields.io/npm/v/vue-css-donut-chart",href:"https://www.npmjs.com/package/vue-css-donut-chart"},{alt:"npm monthly downloads",badgeUrl:"https://img.shields.io/npm/dm/vue-css-donut-chart",href:"https://www.npmjs.com/package/vue-css-donut-chart"},{alt:"npm bundle size",badgeUrl:"https://img.shields.io/bundlephobia/minzip/vue-css-donut-chart",href:"https://bundlephobia.com/result?p=vue-css-donut-chart"},{alt:"GitHub Actions status",badgeUrl:"https://img.shields.io/endpoint.svg?url=https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/badge&label=tests&logo=none",href:"https://actions-badge.atrox.dev/dumptyd/vue-css-donut-chart/goto"},{alt:"Coverage status",badgeUrl:"https://img.shields.io/codecov/c/gh/dumptyd/vue-css-donut-chart",href:"https://codecov.io/gh/dumptyd/vue-css-donut-chart"},{alt:"Snyk Vulnerabilities for npm package",badgeUrl:"https://img.shields.io/snyk/vulnerabilities/npm/vue-css-donut-chart",href:"https://snyk.io/vuln/npm:vue-css-donut-chart"}].map(function(e){var t=e.badgeUrl.includes("?")?"&style=":"?style=";return e.badgeUrl="".concat(e.badgeUrl).concat(t).concat(W),e}),Q={data:function(){return{badges:K}}},X=Q,Y=Object(L["a"])(X,J,q,!1,null,null,null),Z=Y.exports,ee={components:{Demo:I,Badges:Z}},te=ee,ne=Object(L["a"])(te,r,s,!1,null,null,null),oe=ne.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(oe)}}).$mount("#app")},"7e79":function(e,t,n){},9224:function(e){e.exports={a:"1.3.2"}},ce52:function(e,t,n){}});