webpackJsonp([6],{JGAB:function(e,s){},lmfZ:function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=o("mvHQ"),n=o.n(r),a=o("vMJZ"),t={data:function(){var e=this;return{loginForm:{username:"xiaop",password:"123456"},signupForm:{username:"",password:"",passwordConfirm:""},signupRules:{username:[{required:!0,message:"用户名不能为空"},{min:3,max:15,message:"长度在3到15个字符"}],password:[{required:!0,message:"密码不能为空"},{min:3,max:15,message:"长度在3到15个字符"}],passwordConfirm:[{required:!0,message:"请确认密码"},{validator:function(s,o,r){o!==e.signupForm.password&&r(new Error("密码输入不一致")),r()},trigger:"change"}]},showLogin:!0}},methods:{handleLogin:function(){var e=this,s=JSON.parse(n()(this.loginForm));Object(a.c)(s).then(function(s){1e3!==s.code?e.$message({showClose:!0,message:s.message,type:"error"}):(e.$message({showClose:!0,message:"登陆成功",type:"success"}),localStorage.setItem("loginResult",n()(s.data)),console.log(s.data),e.$store.commit("login",s.data),e.$router.back())})},handleSignup:function(){var e=this;this.$refs.signupForm.validate(function(s){if(s){var o={username:e.signupForm.username,password:e.signupForm.password,confirm_password:e.signupForm.passwordConfirm};Object(a.l)(o).then(function(s){console.log(s),1e3===s.code&&(e.loginForm.username=o.username,e.loginForm.password=o.password,e.showLogin=!0,e.$message({showClose:!0,message:"注册成功",type:"success"}))}),console.log(o)}})}},created:function(){}},i={render:function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[o("h2",{staticClass:"from_title"},[e._v("晓得不 社区")]),e._v(" "),e.showLogin?o("el-card",{staticClass:"form_card"},[o("el-form",{ref:"loginForm",attrs:{model:e.loginForm,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}})],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("登陆")]),e._v(" "),o("el-button",{on:{click:function(s){e.showLogin=!1}}},[e._v("注册")])],1)],1):o("el-card",{staticClass:"form_card"},[o("el-form",{ref:"signupForm",attrs:{rules:e.signupRules,"label-position":"left",model:e.signupForm,"label-width":"100px","status-icon":""}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{model:{value:e.signupForm.username,callback:function(s){e.$set(e.signupForm,"username",s)},expression:"signupForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password"},model:{value:e.signupForm.password,callback:function(s){e.$set(e.signupForm,"password",s)},expression:"signupForm.password"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"确认密码",prop:"passwordConfirm"}},[o("el-input",{attrs:{type:"password"},model:{value:e.signupForm.passwordConfirm,callback:function(s){e.$set(e.signupForm,"passwordConfirm",s)},expression:"signupForm.passwordConfirm"}})],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.handleSignup}},[e._v("注册")]),e._v(" "),o("el-button",{on:{click:function(s){e.showLogin=!0}}},[e._v("返回登陆")])],1)],1)],1)},staticRenderFns:[]};var l=o("VU/8")(t,i,!1,function(e){o("JGAB")},null,null);s.default=l.exports}});
//# sourceMappingURL=6.fa87dcfbf1ecaf027346.js.map