import{a as M}from"./chunk-G2CMSWJB.js";import{e as x}from"./chunk-M62HIQ2K.js";import{Bb as r,Cb as b,Eb as h,Gc as O,Ja as m,Jb as C,Na as a,Y as d,_a as p,aa as l,cb as g,gb as o,hb as n,ib as s,ob as u,tc as P,ub as _,vb as f,yc as v}from"./chunk-2OSWPCXJ.js";import"./chunk-EQDQRRRY.js";function w(c,t){if(c&1&&(o(0,"div",9)(1,"div",10)(2,"div",11),s(3,"img",12),n(),o(4,"div",13)(5,"h3"),r(6),n()()()()),c&2){let i=t.$implicit,e=u();a(3),f("src","",e.base_url,"",e.company_name,"/",e.catalogue_name,"/products/",i.image,"",m),a(3),b(i.name)}}var y=class c{base_url=O.base_url;_activatedRoute=d(x);_mainService=d(M);company_name="";catalogue_name="";sub_category_id=null;data=null;getProducts(){this._mainService.getProducts(this.sub_category_id).subscribe({next:t=>{this.data=t.data}})}ngOnInit(){this._activatedRoute.params.subscribe(t=>{this.company_name=t.company.toLowerCase()??"",this.catalogue_name=t.catalogue.toLowerCase()??"",this.sub_category_id=t.sub_category_id??"",this.getProducts()})}static \u0275fac=function(i){return new(i||c)};static \u0275cmp=l({type:c,selectors:[["app-products"]],standalone:!0,features:[C],decls:14,vars:7,consts:[[1,"container","py-5"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"statement-title"],["alt","Dauphin Logo",1,"logo",3,"src"],[1,"subtitle","mb-5"],[1,"row","g-4","mb-5"],["class","col-md-4 border border-0 border-end",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","mt-5"],[1,"mb-0"],[1,"col-md-4","border","border-0","border-end"],[1,"product-card"],[1,"product-image"],["height","","alt","","srcset","",3,"src"],[1,"product-info"]],template:function(i,e){i&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Statement of Line"),n(),s(4,"img",3),n(),o(5,"h2",4),r(6),n(),o(7,"div",5),p(8,w,7,6,"div",6),n(),o(9,"footer",7)(10,"p",8),r(11,"See Stackability and Nesting Guide \u25B6"),n(),o(12,"p",8),r(13,"2023 Pricelist"),n()()()),i&2&&(a(4),_("src","",e.base_url,"",e.company_name,"/",e.company_name,"_logo.png",m),a(2),h("",e.data==null?null:e.data.category.toUpperCase()," | ",e.data==null?null:e.data.name.toUpperCase(),""),a(2),g("ngForOf",e.data==null?null:e.data.products))},dependencies:[v,P],styles:[".statement-title[_ngcontent-%COMP%]{font-size:2.5rem;color:#333;font-weight:300}.model-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;font-weight:400}.logo[_ngcontent-%COMP%]{height:40px}.part-card[_ngcontent-%COMP%], .base-card[_ngcontent-%COMP%], .axium-card[_ngcontent-%COMP%]{padding:1.5rem;text-align:center;height:100%;background:#fff;border:1px solid #eee;border-radius:8px;transition:all .3s ease}.part-card[_ngcontent-%COMP%]:hover, .base-card[_ngcontent-%COMP%]:hover, .axium-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000001a}.part-images[_ngcontent-%COMP%], .base-images[_ngcontent-%COMP%], .axium-images[_ngcontent-%COMP%]{min-height:120px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem}.part-svg[_ngcontent-%COMP%]{width:80px;height:80px;color:#333}.part-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .base-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .axium-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;margin:0;color:#333}.col-md-2-4[_ngcontent-%COMP%]{flex:0 0 20%;max-width:20%;padding:0 15px}footer[_ngcontent-%COMP%]{border-top:1px solid #eee;padding-top:2rem}@media (max-width: 768px){.col-md-2-4[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}.statement-title[_ngcontent-%COMP%]{font-size:2rem}.model-subtitle[_ngcontent-%COMP%]{font-size:1rem}.part-svg[_ngcontent-%COMP%]{width:60px;height:60px}}"]})};export{y as ProductsComponent};