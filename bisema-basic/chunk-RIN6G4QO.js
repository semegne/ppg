import{a as E}from"./chunk-6SJQGKXS.js";import{a as Q}from"./chunk-THJOCM22.js";import{c as K}from"./chunk-WZ22VS6D.js";import{a as A,b as F,c as D,d as G,f as U,h as B,i as H,j as R,k as P,l as q,m as z,n as J}from"./chunk-BJE6J5RS.js";import{Ab as o,Bb as f,Cc as j,Fc as L,Hb as O,Ib as T,Jb as S,Na as l,Qb as $,S as k,X as V,Y as _,_a as b,aa as w,cb as g,gb as n,hb as i,ib as v,ja as s,ka as p,mb as x,nb as u,ob as d,rb as N,sc as I,xc as M,zb as y}from"./chunk-27QEH2YB.js";import"./chunk-EQDQRRRY.js";var C=class a{constructor(t){this._http=t}apiUrl=L.api_url;get(){return this._http.get(`${this.apiUrl}catalogues`)}create(t){return this._http.post(`${this.apiUrl}catalogues`,t)}update(t,e){return this._http.post(`${this.apiUrl}catalogues/${e}`,t)}delete(t){return this._http.delete(`${this.apiUrl}catalogues/${t}`)}static \u0275fac=function(e){return new(e||a)(V(j))};static \u0275prov=k({token:a,factory:a.\u0275fac})};var Y=()=>({label1:"Namee"}),Z=()=>({label1:"Company"});function ee(a,t){if(a&1){let e=x();n(0,"tr")(1,"th",8),o(2),i(),n(3,"td")(4,"div",9)(5,"h5",10),o(6),i()()(),n(7,"td"),o(8),i(),n(9,"td")(10,"div",9)(11,"a",11),u("click",function(){let r=s(e).$implicit,c=d(),h=y(21);return p(c.openModal(h,r))}),o(12,"Edit"),i(),n(13,"a",12),u("click",function(){let r=s(e).$implicit,c=d();return p(c.delete(r.id))}),o(14,"Delete"),i()()()()}if(a&2){let e=t.$implicit,m=t.index;l(2),f(m+1),l(4),f(e.name),l(2),f(e.company.name)}}function te(a,t){if(a&1&&(n(0,"option",28),o(1),i()),a&2){let e=t.$implicit;N("value",e.id),l(),f(e.name)}}function ie(a,t){if(a&1){let e=x();n(0,"div",13)(1,"h4",14),o(2,"Catalogue"),i(),n(3,"button",15),u("click",function(){let r=s(e).$implicit,c=d();return r.dismiss("Cross click"),p(c.catalogueForm.reset())}),i()(),n(4,"div",16)(5,"form",17)(6,"div",18)(7,"div")(8,"label",19),o(9,"Catalogue Name"),i(),v(10,"input",20),i(),n(11,"label",21),v(12,"app-form-error-message",22),i()(),n(13,"div",18)(14,"div")(15,"label",19),o(16,"Company"),i(),n(17,"select",23)(18,"option",24),o(19,"Select Company"),i(),b(20,te,2,2,"option",25),i()(),n(21,"label",21),v(22,"app-form-error-message",22),i()(),n(23,"div",26)(24,"button",27),u("click",function(){let r=s(e).$implicit,c=d();return r.dismiss("Cross click"),p(c.catalogueForm.reset())}),o(25,"Close"),i(),n(26,"button",3),u("click",function(){s(e);let r=d();return p(r.submit())}),o(27,"Save"),i()()()()}if(a&2){let e=d();l(5),g("formGroup",e.catalogueForm),l(7),g("control",e.catalogueForm.get("name"))("labels",S(6,Y)),l(8),g("ngForOf",e.companies),l(2),g("control",e.catalogueForm.get("company_id"))("labels",S(7,Z))}}var W=class a{_companyService=_(E);_catalogueService=_(C);_formBuilder=_(z);modalService=_(K);companies=[];catalogues=[];selectedCatalogue=null;catalogueForm=this._formBuilder.group({name:["",[F.required]],company_id:["",[F.required]]});getCompanies(){this._companyService.get().subscribe({next:t=>{this.companies=t.data}})}get(){this._catalogueService.get().subscribe({next:t=>{this.catalogues=t.data}})}openModal(t,e=null){this.selectedCatalogue=e,e&&this.catalogueForm.patchValue({name:e.name,company_id:e.company.id}),this.modalService.open(t,{centered:!0,size:"lg"})}submit(){let t=this.catalogueForm.value;if(this.selectedCatalogue){t._method="PATCH",this._catalogueService.update(t,this.selectedCatalogue.id).subscribe({next:e=>{this.get(),this.modalService.dismissAll()}});return}this._catalogueService.create(t).subscribe({next:e=>{this.get(),this.modalService.dismissAll()}})}delete(t){this._catalogueService.delete(t).subscribe({next:e=>{this.get()}})}ngOnInit(){this.getCompanies(),this.get()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["app-catalogue"]],standalone:!0,features:[O([E,C]),T],decls:22,vars:1,consts:[["content",""],[1,"px-3"],[1,"mt-5","d-flex","justify-content-between"],["type","button",1,"btn","btn2",3,"click"],[1,"mt-3"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"d-flex"],[1,"ms-1"],["href","javascript:;",1,"text-decoration-none",3,"click"],["href","javascript:;",1,"ms-2","text-decoration-none","text-danger",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup"],[1,"form-group","mb-1"],[1,"form-label"],["type","text","placeholder","Catalogue Namee","formControlName","name",1,"form-control"],[1,"text-danger"],["fieldType","input",3,"control","labels"],["formControlName","company_id",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["type","button",1,"btn","btn-danger","me-2",3,"click"],[3,"value"]],template:function(e,m){if(e&1){let r=x();n(0,"div",1)(1,"div",2)(2,"h2"),o(3,"Catalogues"),i(),n(4,"button",3),u("click",function(){s(r);let h=y(21);return p(m.openModal(h))}),o(5," Add Catalogue "),i()(),n(6,"section",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th",6),o(11,"#"),i(),n(12,"th",6),o(13,"Name"),i(),n(14,"th",6),o(15,"Company"),i(),n(16,"th"),o(17,"Actions"),i()()(),n(18,"tbody"),b(19,ee,15,3,"tr",7),i()()()(),b(20,ie,28,8,"ng-template",null,0,$)}e&2&&(l(19),g("ngForOf",m.catalogues))},dependencies:[M,I,J,U,P,q,A,R,D,G,B,H,Q]})};export{W as CatalogueComponent};
