(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{279:function(t,e,r){"use strict";var n=r(7),o=r(138).charAt,c=r(23),d=r(50),l=r(13);n({target:"String",proto:!0,forced:!0},{at:function(t){var e=l(c(this)),r=e.length,n=d(t),m=n>=0?n:r+n;return m<0||m>=r?void 0:o(e,m)}})},291:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(34),r(279),r(10),r(33),r(262)),c={transition:{name:"router-anim",mode:""},head:function(){return{title:"Patrick Bradley | My Work",changeMe:"changeMe",meta:[{hid:"description",name:"description",content:"Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."},{hid:"twitter:title",name:"twitter:title",content:"Patrick Bradley | My Work"},{hid:"twitter:description",name:"twitter:description",content:"Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."},{hid:"twitter:image",name:"twitter:image",content:"https://raw.githubusercontent.com/AC59852/patrick_portfolio-nuxt/master/assets/icons/seo_photo.png"},{hid:"twitter:image:alt",name:"twitter:image:alt",content:"Hand drawn photo of Patrick Bradley"},{hid:"og:title",property:"og:title",content:"Patrick Bradley | My Work"},{hid:"og:description",property:"og:description",content:"Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."},{hid:"og:image",property:"og:image",content:"https://raw.githubusercontent.com/AC59852/patrick_portfolio-nuxt/master/assets/icons/seo_photo.png"},{hid:"og:image:alt",name:"og:image:alt",content:"Hand drawn photo of Patrick Bradley"},{property:"og:image:width",content:"500"},{property:"og:image:height",content:"500"}]}},directives:{swiper:r(177).directive},data:function(){return{projects:[],mobile:!1,swiperOption:{slidesPerView:"auto",navigation:!1,centeredSlides:!0,loop:!0,spaceBetween:30,breakpoints:{800:{spaceBetween:55}}}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,t.params,n=t.error,e.next=3,r.api.query(r.predicates.at("document.type","work-layout"));case 3:if(!(o=e.sent)){e.next=8;break}return e.abrupt("return",{projects:o.results});case 8:n({statusCode:404,message:"Page not found"});case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;console.log(this.projects),this.projects.length>0&&this.projects.forEach((function(t){"Roboeats"===t.data.projectName[0].text&&(t.data.colour="#E0DADA")})),window.innerWidth<1023?this.mobile=!0:this.mobile=!1,window.addEventListener("resize",(function(){window.innerWidth<=1023?t.mobile=!0:t.mobile=!1}))},components:{SliceZone:o.a}},d=r(19),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"work work__container"},[!0===t.mobile?r("div",{directives:[{name:"swiper",rawName:"v-swiper",value:t.swiperOption,expression:"swiperOption"}],attrs:{loadtheme:!1}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.projects,(function(e){return r("div",{key:e.length,staticClass:"swiper-slide"},[r("nuxt-link",{attrs:{to:"/work/"+e.id}},[r("prismic-image",{staticClass:"swiper-image",style:{backgroundColor:e.data.colour},attrs:{field:e.data.previewImage}})],1),t._v(" "),r("nuxt-link",{staticClass:"work__title",attrs:{to:"/work/"+e.id}},[r("h2",[t._v(t._s(e.data.projectName[0].text))])])],1)})),0)]):t._e(),t._v(" "),!1===t.mobile?r("ul",{staticClass:"work__wrapper"},t._l(t.projects,(function(e){return r("li",{key:e.length,staticClass:"work__item"},[r("nuxt-link",{staticClass:"work__image",attrs:{to:"/work/"+e.id}},[r("prismic-image",{style:{backgroundColor:e.data.colour},attrs:{field:e.data.previewImage}})],1),t._v(" "),r("nuxt-link",{staticClass:"work__title",attrs:{to:"/work/"+e.id}},[r("h2",[t._v(t._s(e.data.projectName[0].text))])])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);