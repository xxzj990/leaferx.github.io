webpackJsonp([1],{yIG7:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"post"},[s("article",{staticClass:"post-block"},[s("h1",{staticClass:"post-title"},[this._v(this._s(this.postTitle))]),this._v(" "),s("div",{staticClass:"post-content",domProps:{innerHTML:this._s(this.postContent)}})])])},staticRenderFns:[]},o=e("VU/8")({name:"post",computed:{postTitle:function(){return this.$store.state.currentPost.title},postContent:function(){return this.$store.state.currentPost.content}},beforeRouteEnter:function(t,s,e){e(function(s){s.$store.dispatch("getPost",t.path)})}},n,!1,null,null,null);s.default=o.exports}});
//# sourceMappingURL=1.b1b7c73f560f68572ccd.js.map