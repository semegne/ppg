import{Ab as c,Bb as _,Db as d,Ib as I,Na as t,_a as g,aa as E,cb as o,gb as s,hb as m,jb as i,kb as a,ob as l,tc as f,xc as u}from"./chunk-QOK7X3F6.js";var x={VALIDATION_ERRORS:{FIELD_IS_REQUIRED:"Field is required",EMAIL_IS_INVALID:"Invalid Email format",PASSWORD_NOT_MATCHED:"Password and confirm password must match",MIN_FIELD_REQUIRED_LENGTH:"Minimum field required length ",MAX_FIELD_REQUIRED_LENGTH:"Maximum field required length "}};function C(n,r){if(n&1&&(i(0),s(1,"div"),c(2),m(),a()),n&2){let e=l(2);t(2),_(e.errosMsg.VALIDATION_ERRORS.FIELD_IS_REQUIRED)}}function R(n,r){if(n&1&&(i(0),s(1,"div"),c(2),m(),a()),n&2){let e=l(2);t(2),_(e.errosMsg.VALIDATION_ERRORS.EMAIL_IS_INVALID)}}function D(n,r){if(n&1&&(i(0),s(1,"div"),c(2),m(),a()),n&2){let e=l(2);t(2),_(e.errosMsg.VALIDATION_ERRORS.PASSWORD_NOT_MATCHED)}}function S(n,r){if(n&1&&(i(0),s(1,"div"),c(2),m(),a()),n&2){let e=l(2);t(2),d("",e.errosMsg.VALIDATION_ERRORS.MAX_FIELD_REQUIRED_LENGTH," ",e.control.errors.maxlength.requiredLength,"")}}function T(n,r){if(n&1&&(i(0),s(1,"div"),c(2),m(),a()),n&2){let e=l(2);t(2),d("",e.errosMsg.VALIDATION_ERRORS.MIN_FIELD_REQUIRED_LENGTH," ",e.control.errors.minlength.requiredLength," ")}}function A(n,r){if(n&1&&(i(0),g(1,C,3,1,"ng-container",0)(2,R,3,1,"ng-container",0)(3,D,3,1,"ng-container",0)(4,S,3,2,"ng-container",0)(5,T,3,2,"ng-container",0),a()),n&2){let e=l();t(),o("ngIf",e.control.errors==null?null:e.control.errors.required),t(),o("ngIf",(e.control.errors==null?null:e.control.errors.email)&&!(e.control.errors!=null&&e.control.errors.required)),t(),o("ngIf",e.control.errors==null?null:e.control.errors.passwordNotMatch),t(),o("ngIf",e.control.errors.maxlength),t(),o("ngIf",e.control.errors.minlength)}}var M=class n{errosMsg=x;control=null;errorMessage;labels;fieldType;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-form-error-message"]],inputs:{control:"control",errorMessage:"errorMessage",labels:"labels",fieldType:"fieldType"},standalone:!0,features:[I],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,p){e&1&&g(0,A,6,5,"ng-container",0),e&2&&o("ngIf",p.control.invalid&&(p.control.dirty||p.control.touched))},dependencies:[u,f]})};export{M as a};
