import{a as F}from"./chunk-6SJQGKXS.js";import{a as z}from"./chunk-THJOCM22.js";import{c as P}from"./chunk-WZ22VS6D.js";import{a as A,b as S,c as G,d as O,f as $,h as j,i as R,m as U,n as B}from"./chunk-BJE6J5RS.js";import{Ab as i,Bb as g,Fc as q,Hb as k,Ib as N,Ja as w,Jb as v,Na as p,Qb as T,Y as f,_a as C,aa as E,cb as _,gb as n,hb as t,ib as y,ja as s,ka as d,mb as x,nb as u,ob as c,sb as V,sc as I,tc as M,xc as D,zb as h}from"./chunk-27QEH2YB.js";import"./chunk-EQDQRRRY.js";var H=()=>({label1:"Namee"}),J=()=>({label1:"URL"});function K(m,o){if(m&1&&y(0,"img",14),m&2){let e=c().$implicit,r=c();V("src","",r.base_url,"",e.logo,"",w)}}function Q(m,o){if(m&1){let e=x();n(0,"tr")(1,"th",8),i(2),t(),n(3,"td")(4,"div",9),C(5,K,1,3,"img",10),n(6,"h5",11),i(7),t()()(),n(8,"td"),i(9),t(),n(10,"td")(11,"div",9)(12,"a",12),u("click",function(){let l=s(e).$implicit,a=c(),b=h(21);return d(a.openModal(b,l))}),i(13,"Edit"),t(),n(14,"a",13),u("click",function(){let l=s(e).$implicit,a=c();return d(a.delete(l.id))}),i(15,"Delete"),t()()()()}if(m&2){let e=o.$implicit,r=o.index;p(2),g(r+1),p(3),_("ngIf",e.logo),p(2),g(e.name),p(2),g(e.url)}}function W(m,o){if(m&1){let e=x();n(0,"div",15)(1,"h4",16),i(2,"Company"),t(),n(3,"button",17),u("click",function(){let l=s(e).$implicit,a=c();return l.dismiss("Cross click"),d(a.companyForm.reset())}),t()(),n(4,"div",18)(5,"form",19)(6,"div",20)(7,"div")(8,"label",21),i(9,"Company Name"),t(),y(10,"input",22),t(),n(11,"label",23),y(12,"app-form-error-message",24),t()(),n(13,"div",20)(14,"div")(15,"label",21),i(16,"Company Url"),t(),y(17,"input",25),t(),n(18,"label",23),y(19,"app-form-error-message",24),t()(),n(20,"div",20)(21,"div")(22,"label",21),i(23,"Company Logo"),t(),n(24,"input",26),u("change",function(l){s(e);let a=c();return d(a.onFileSelected(l))}),t()()(),n(25,"div",27)(26,"button",28),u("click",function(){let l=s(e).$implicit,a=c();return l.dismiss("Cross click"),d(a.companyForm.reset())}),i(27,"Close"),t(),n(28,"button",3),u("click",function(){s(e);let l=c();return d(l.submit())}),i(29,"Save"),t()()()()}if(m&2){let e=c();p(5),_("formGroup",e.companyForm),p(7),_("control",e.companyForm.get("name"))("labels",v(5,H)),p(7),_("control",e.companyForm.get("url"))("labels",v(6,J))}}var L=class m{_companyService=f(F);_formBuilder=f(U);modalService=f(P);base_url=q.base_url;companies=[];selectedCompany=null;logo=null;companyForm=this._formBuilder.group({name:["",[S.required]],url:["",[S.required]]});get(){this._companyService.get().subscribe({next:o=>{this.companies=o.data}})}openModal(o,e=null){this.selectedCompany=e,e&&this.companyForm.patchValue({name:e.name,url:e.url}),this.modalService.open(o,{centered:!0,size:"lg"})}submit(){let o=this.companyForm.value,e=new FormData;if(e.append("name",o.name),e.append("url",o.url),this.logo&&e.append("logo",this.logo),this.selectedCompany){e.append("_method","PATCH"),this._companyService.update(e,this.selectedCompany.id).subscribe({next:r=>{this.get(),this.modalService.dismissAll()}});return}this._companyService.create(e).subscribe({next:r=>{this.get(),this.modalService.dismissAll()}})}delete(o){this._companyService.delete(o).subscribe({next:e=>{this.get()}})}onFileSelected(o){this.logo=o.target.files[0]}ngOnInit(){this.get()}static \u0275fac=function(e){return new(e||m)};static \u0275cmp=E({type:m,selectors:[["app-company"]],standalone:!0,features:[k([F]),N],decls:22,vars:1,consts:[["content",""],[1,"px-3"],[1,"mt-5","d-flex","justify-content-between"],["type","button",1,"btn","btn2",3,"click"],[1,"mt-3"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"d-flex"],["height","30",3,"src",4,"ngIf"],[1,"ms-1"],["href","javascript:;",1,"text-decoration-none",3,"click"],["href","javascript:;",1,"ms-2","text-decoration-none","text-danger",3,"click"],["height","30",3,"src"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup"],[1,"form-group","mb-1"],[1,"form-label"],["type","text","placeholder","Comapny Namee","formControlName","name",1,"form-control"],[1,"text-danger"],["fieldType","input",3,"control","labels"],["type","text","placeholder","Comapny Url","formControlName","url",1,"form-control"],["type","file",1,"form-control",3,"change"],[1,"mt-3","d-flex","justify-content-end"],["type","button",1,"btn","btn-danger","me-2",3,"click"]],template:function(e,r){if(e&1){let l=x();n(0,"div",1)(1,"div",2)(2,"h2"),i(3,"Companies"),t(),n(4,"button",3),u("click",function(){s(l);let b=h(21);return d(r.openModal(b))}),i(5," Add Company "),t()(),n(6,"section",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th",6),i(11,"#"),t(),n(12,"th",6),i(13,"Name"),t(),n(14,"th",6),i(15,"Url"),t(),n(16,"th"),i(17,"Actions"),t()()(),n(18,"tbody"),C(19,Q,16,4,"tr",7),t()()()(),C(20,W,30,7,"ng-template",null,0,T)}e&2&&(p(19),_("ngForOf",r.companies))},dependencies:[D,I,M,B,$,A,G,O,j,R,z]})};export{L as CompanyComponent};
