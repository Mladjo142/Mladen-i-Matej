(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a51ed266"],{"190f":function(t,e,n){"use strict";n("208c")},"208c":function(t,e,n){},"5b39":function(t,e,n){"use strict";n("f657")},6062:function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},dc4d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-list"},[0===t.news.length?n("h3",[t._v("Nema vesti!")]):n("div",[n("v-container",{staticClass:"my-2"},[n("Pagination",{attrs:{range:3,lastPage:t.lastPage}})],1),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",tile:""}},[t._l(t.news,(function(e,r){return[n("v-list-item",{key:e.objectID,attrs:{link:"","two-line":"",href:e.url,target:"_blank"}},[n("v-list-item-content",[n("v-list-item-title",[e.url?n("span",[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(e.title)+" ")])]):n("span",[n("a",{attrs:{href:e.story_url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(e.story_title)+" ")])])]),n("v-list-item-subtitle",[e.points?n("span",[t._v(t._s(e.points)+" points ")]):t._e(),e.author?n("span",[t._v("by "+t._s(e.author)+" ")]):t._e(),e.created_at?n("span",[t._v(" created at "+t._s(e.created_at)+" ")]):t._e()])],1)],1),r+1<t.news.length?n("v-divider",{key:r}):t._e()]}))],2)],1)])},a=[],i=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"indigo darken-1",disabled:1===t.currentPage},on:{click:function(e){return t.onPaginate(1)}}},[n("v-icon",[t._v("mdi-chevron-left")]),n("v-icon",[t._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"indigo darken-1",disabled:1===t.currentPage},on:{click:function(e){return t.onPaginate(t.currentPage-1)}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t.currentPage-1>t.range?n("span",[t._v("...")]):t._e(),t._l(t.pages,(function(e){return n("v-btn",{key:e,staticClass:"mx-1",attrs:{fab:"",color:"indigo lighten-1",disabled:e===t.currentPage},on:{click:function(n){return t.onPaginate(e)}}},[t._v(" "+t._s(e)+" ")])})),t.lastPage-t.currentPage>t.range?n("span",[t._v("...")]):t._e(),n("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"indigo darken-1",disabled:t.currentPage===t.lastPage},on:{click:function(e){return t.onPaginate(t.currentPage+1)}}},[n("v-icon",[t._v("mdi-chevron-right")])],1),n("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"indigo darken-1",disabled:t.currentPage===t.lastPage},on:{click:function(e){return t.onPaginate(t.lastPage)}}},[n("v-icon",[t._v("mdi-chevron-right")]),n("v-icon",[t._v("mdi-chevron-right")])],1)],2)}),o=[],c=n("2909"),s=n("5530"),u=(n("a630"),n("3ca3"),n("4de4"),n("d3b7"),n("6062"),n("ddb0"),n("99af"),n("2f62")),l=n("f7fe"),f=n.n(l),v={name:"Pagination",props:{range:Number,lastPage:Number},computed:Object(s["a"])({pages:function(){var t=this,e=Array.from({length:this.range},(function(e,n){return--n+t.currentPage-t.range+1})),n=Array.from({length:this.range},(function(e,n){return++n+t.currentPage})),r=Object(c["a"])(new Set([].concat(Object(c["a"])(e),[this.currentPage],Object(c["a"])(n)))).filter((function(e){return 0<e&&e<=t.lastPage}));return r}},Object(u["b"])(["currentPage"])),methods:{onPaginate:f()((function(t){this.$store.dispatch("FETCH_NEWS_LIST",{page:t})}),250)}},g=v,d=(n("190f"),n("2877")),b=n("6544"),m=n.n(b),p=n("8336"),h=n("132d"),_=Object(d["a"])(g,i,o,!1,null,"f569d132",null),P=_.exports;function y(t){var e=t?new Date(t):new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}m()(_,{VBtn:p["a"],VIcon:h["a"]});var w={name:"NewsList",components:{Pagination:P},props:{news:Array,lastPage:Number},filters:{formatDate:y}},k=w,j=(n("5b39"),n("b0af")),x=n("a523"),O=n("ce7e"),C=n("da13"),T=n("5d23"),V=Object(d["a"])(k,r,a,!1,null,"559a1688",null);e["default"]=V.exports;m()(V,{VCard:j["a"],VContainer:x["a"],VDivider:O["a"],VListItem:C["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"]})},f657:function(t,e,n){},f7fe:function(t,e,n){(function(e){var n="Expected a function",r=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,v=l||f||Function("return this")(),g=Object.prototype,d=g.toString,b=Math.max,m=Math.min,p=function(){return v.Date.now()};function h(t,e,r){var a,i,o,c,s,u,l=0,f=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError(n);function d(e){var n=a,r=i;return a=i=void 0,l=e,c=t.apply(r,n),c}function h(t){return l=t,s=setTimeout(k,e),f?d(t):c}function P(t){var n=t-u,r=t-l,a=e-n;return v?m(a,o-r):a}function y(t){var n=t-u,r=t-l;return void 0===u||n>=e||n<0||v&&r>=o}function k(){var t=p();if(y(t))return j(t);s=setTimeout(k,P(t))}function j(t){return s=void 0,g&&a?d(t):(a=i=void 0,c)}function x(){void 0!==s&&clearTimeout(s),l=0,a=u=i=s=void 0}function O(){return void 0===s?c:j(p())}function C(){var t=p(),n=y(t);if(a=arguments,i=this,u=t,n){if(void 0===s)return h(u);if(v)return s=setTimeout(k,e),d(u)}return void 0===s&&(s=setTimeout(k,e)),c}return e=w(e)||0,_(r)&&(f=!!r.leading,v="maxWait"in r,o=v?b(w(r.maxWait)||0,e):o,g="trailing"in r?!!r.trailing:g),C.cancel=x,C.flush=O,C}function _(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){return!!t&&"object"==typeof t}function y(t){return"symbol"==typeof t||P(t)&&d.call(t)==a}function w(t){if("number"==typeof t)return t;if(y(t))return r;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||s.test(t)?u(t.slice(2),n?2:8):o.test(t)?r:+t}t.exports=h}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-a51ed266.880a525e.js.map