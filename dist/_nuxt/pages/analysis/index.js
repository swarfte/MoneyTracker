(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{228:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("315f4dd4",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";n.r(e);n(21);var o={data:function(){return{title:{name:"",head:""}}},head:function(){return{title:this.title.head}},props:{name:String},fetch:function(){this.$store.commit("GET_PAGE_TITLE",this.$route.name),this.title.name=this.$store.state.pages.name,this.title.head=this.$store.state.pages.head,this.name&&(this.title.name=this.name)}},r=(n(230),n(20)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"title"},[this._v("\n    "+this._s(this.title.name)+"\n  ")])])}),[],!1,null,"2b428121",null);e.default=component.exports;installComponents(component,{Header:n(229).default})},230:function(t,e,n){"use strict";n(228)},231:function(t,e,n){(e=n(34)(!1)).push([t.i,".header[data-v-2b428121]{padding:10px;text-align:center}.title[data-v-2b428121]{font-size:1.25rem;color:#fff;line-height:1.4em}",""]),t.exports=e},242:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("2e5e5aa6",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n(242)},250:function(t,e,n){(e=n(34)(!1)).push([t.i,"",""]),t.exports=e},266:function(t,e,n){"use strict";n.r(e);var o={components:{"header-component":n(229).default}},r=(n(249),n(20)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("header-component"),this._v(" "),e("div",{staticClass:"wrap"})],1)}),[],!1,null,"05d3870a",null);e.default=component.exports}}]);