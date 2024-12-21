import{a as s}from"./chunk-XOGA2IA5.js";import{c as y}from"./chunk-BERDJILH.js";import{b as a,m as d,n as b}from"./chunk-NMA24OZF.js";import{a as v}from"./chunk-G2CMSWJB.js";import{Dc as g,Gc as h,Ib as u,Jb as p,S as n,X as c,Y as i,aa as m,yc as l}from"./chunk-2OSWPCXJ.js";import"./chunk-EQDQRRRY.js";var o=class r{constructor(e){this._http=e}apiUrl=h.api_url;get(){return this._http.get(`${this.apiUrl}sub-categories`)}create(e){return this._http.post(`${this.apiUrl}sub-categories`,e)}update(e,t){return this._http.post(`${this.apiUrl}sub-categories/${t}`,e)}delete(e){return this._http.delete(`${this.apiUrl}sub-categories/${e}`)}static \u0275fac=function(t){return new(t||r)(c(g))};static \u0275prov=n({token:r,factory:r.\u0275fac})};var C=class r{_companyService=i(s);_mainService=i(v);_subCategoryService=i(o);_formBuilder=i(d);modalService=i(y);companies=[];catalogues=[];categories=[];subCategories=[];selectedSubCategory=null;subCategoryForm=this._formBuilder.group({company_id:["",[a.required]],catalogue_id:["",[a.required]],category_id:["",[a.required]],name:["",[a.required]],description:["",[a.required]]});getCompanies(){this._companyService.get().subscribe({next:e=>{this.companies=e.data}})}getCatalogues(){this._mainService.getCatalogues(this.subCategoryForm.value.company_id).subscribe({next:e=>{this.catalogues=e.data}})}getCategories(){this._mainService.getCategories(this.subCategoryForm.value.catalogue_id).subscribe({next:e=>{this.categories=e.data}})}get(){this._subCategoryService.get().subscribe({next:e=>{this.subCategories=e.data}})}openModal(e,t=null){this.selectedSubCategory=t,t&&this.subCategoryForm.patchValue({name:t.name,page_num:t.page_num,company_id:t.catalogue.company_id,catalogue_id:t.catalogue.id}),this.modalService.open(e,{centered:!0,size:"lg"})}submit(){let e=this.subCategoryForm.value;if(this.selectedSubCategory){e._method="PATCH",this._subCategoryService.update(e,this.selectedSubCategory.id).subscribe({next:t=>{this.get(),this.modalService.dismissAll()}});return}this._subCategoryService.create(e).subscribe({next:t=>{this.get(),this.modalService.dismissAll()}})}delete(e){this._subCategoryService.delete(e).subscribe({next:t=>{this.get()}})}ngOnInit(){this.getCompanies(),this.get()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=m({type:r,selectors:[["app-sub-category"]],standalone:!0,features:[u([s,o]),p],decls:0,vars:0,template:function(t,S){},dependencies:[l,b]})};export{C as SubCategoryComponent};
