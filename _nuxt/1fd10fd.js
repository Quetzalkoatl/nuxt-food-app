(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("7093227a",content,!0,{sourceMap:!1})},365:function(e,t,r){"use strict";r(332)},366:function(e,t,r){var c=r(56)(!1);c.push([e.i,".recipe[data-v-582d8b83]{display:flex;flex-direction:column;align-items:center}.recipe-title[data-v-582d8b83]{font-size:36px;text-align:center}.recipe-instructions[data-v-582d8b83]{width:70%;margin:20px 0}.recipe-image[data-v-582d8b83]{width:25%;margin:20px 0;box-shadow:7px 9px 16px 0 rgba(34,60,80,.3);-webkit-box-shadow:7px 9px 16px 0 rgba(34,60,80,.3);-moz-box-shadow:7px 9px 16px 0 rgba(34,60,80,.3)}.recipe-video[data-v-582d8b83]{margin:20px 0}@media screen and (max-width:700px){.recipe-image[data-v-582d8b83]{width:80%}.recipe-video[data-v-582d8b83]{display:none}}",""]),e.exports=c},372:function(e,t,r){"use strict";r.r(t);r(58),r(34),r(30),r(37),r(9),r(54),r(31),r(55);var c=r(22),n=r(10),o=(r(67),r(100));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,c,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,c=e.params,n=c.recipe,t.next=4,r.dispatch("fetchRecipe",n);case 4:case"end":return t.stop()}}),t)})))()},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({recipe:function(e){return e.recipe}}))},f=l,v=(r(365),r(36)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe[0].strMealThumb,alt:"Image"}}),e._v(" "),t("p",{staticClass:"recipe-title"},[e._v(e._s(e.recipe[0].strMeal))]),e._v(" "),t("p",{staticClass:"recipe-instructions"},[e._v(e._s(e.recipe[0].strInstructions))]),e._v(" "),e.recipe[0].strYoutube?t("iframe",{staticClass:"recipe-video",attrs:{width:"700",height:"380",src:"https://www.youtube.com/embed/"+e.recipe[0].strYoutube.slice(-11),frameborder:"0"}}):e._e()])}),[],!1,null,"582d8b83",null);t.default=component.exports}}]);