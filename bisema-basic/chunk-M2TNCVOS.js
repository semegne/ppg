import{a as h}from"./chunk-2WQDYZB5.js";import{e as I}from"./chunk-T2XXJLXO.js";import{Ab as t,Bb as c,Fc as g,Ib as f,Ja as u,Na as r,Y as l,_a as d,aa as b,cb as p,gb as n,hb as e,ib as s,jb as A,kb as O,sc as C,tb as E,xc as S}from"./chunk-G5ZMSHET.js";import"./chunk-EQDQRRRY.js";function v(m,i){if(m&1&&(n(0,"div",13)(1,"p"),t(2),e(),n(3,"p"),t(4),e()()),m&2){let a=i.$implicit;r(2),c(a.name),r(2),c(a.page_num)}}var T=class m{base_url=g.base_url;_activatedRoute=l(I);_mainService=l(h);company_name="";catalogue_name="";items=[{name:"MODEL PARTS",number:3},{name:"4+ RELAX",number:5},{name:"4+ MiD",number:7},{name:"ADJUST",number:9},{name:"AIKO",number:11},{name:"ALETA",number:13},{name:"ALLORA",number:18},{name:"AVERIO",number:20},{name:"AVERIO TABLES",number:22},{name:"AXIUM TABLES",number:24},{name:"BASIS Il, SYNCHRO II, CONTOUR II",number:30},{name:"BOBO",number:33},{name:"CEMPA",number:35},{name:"CEMPA ALFRESCO",number:39},{name:"CEMPA ALFRESCO TABLE",number:41},{name:"MODEL PARTS",number:3},{name:"4+ RELAX",number:5},{name:"4+ MiD",number:7},{name:"ADJUST",number:9},{name:"AIKO",number:11},{name:"ALETA",number:13},{name:"ALLORA",number:18},{name:"AVERIO",number:20},{name:"AVERIO TABLES",number:22},{name:"AXIUM TABLES",number:24},{name:"BASIS Il, SYNCHRO II, CONTOUR II",number:30},{name:"BOBO",number:33},{name:"CEMPA",number:35},{name:"CEMPA ALFRESCO",number:39},{name:"CEMPA ALFRESCO TABLE",number:41},{name:"MODEL PARTS",number:3},{name:"4+ RELAX",number:5},{name:"4+ MiD",number:7},{name:"ADJUST",number:9},{name:"AIKO",number:11},{name:"ALETA",number:13},{name:"ALLORA",number:18},{name:"AVERIO",number:20},{name:"AVERIO TABLES",number:22},{name:"AXIUM TABLES",number:24},{name:"BASIS Il, SYNCHRO II, CONTOUR II",number:30},{name:"BOBO",number:33},{name:"CEMPA",number:35}];getTableOfContents(){this._mainService.getTableOfContents(this.catalogue_name).subscribe({next:i=>{this.items=i.data}})}ngOnInit(){this.company_name=this._activatedRoute.snapshot.paramMap.get("company")?.toLowerCase()??"",this.catalogue_name=this._activatedRoute.snapshot.paramMap.get("catalogue")?.toLowerCase()??"",this.getTableOfContents()}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=b({type:m,selectors:[["app-table-of-contents"]],standalone:!0,features:[f],decls:28,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"heading","mt-5"],[1,"sub-heading"],[1,"col-4","border","border-0","border-end","border-black"],["class","d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"my-3"],[1,"col-4"],[1,"border","border-0","border-end","border-black"],[1,"mt-4"],[1,"col-4","d-flex","flex-column","justify-content-end"],["alt","","height","",3,"src"],[1,"d-flex","justify-content-between"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),t(4,"Table of Contents"),e()(),n(5,"div",2)(6,"p",4),t(7,"Products"),e()(),A(8),n(9,"div",5),d(10,v,5,2,"div",6),e(),O(),s(11,"hr",7),n(12,"div",8)(13,"h3",9),t(14,"To navigate this pricelist:"),e(),n(15,"p",9),t(16,'On the "Table of Contents" page, selecct a product line name to go to that section.In any section,select the home icon,located at the upper right corner,to return to the "Table of Contents."'),e(),n(17,"p",10)(18,"b"),t(19,"2023"),e(),t(20," Pricelist"),e()(),n(21,"div",8)(22,"h3"),t(23,"To search this pricelist:"),e(),n(24,"p"),t(25,'In Adobe Acrobat, selecct searcch icon,loccated in the toolbar,then type a keyword or model number in the "find" field.'),e()(),n(26,"div",11),s(27,"img",12),e()()()),a&2&&(r(10),p("ngForOf",o.items),r(17),E("src","",o.base_url,"",o.company_name,"/",o.company_name,"_logo.png",u))},dependencies:[S,C],styles:[".container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:50px}.container[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%]{font-size:25px}"]})};export{T as TableOfContentsComponent};
