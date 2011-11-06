
/*
 Highcharts Stock v1.0 Beta (2011-07-05)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function(){function ca(a,b){var d;a||(a={});for(d in b)a[d]=b[d];return a}function Yb(){for(var a=0,b=arguments,d=b.length,c={};a<d;a++)c[b[a++]]=b[a];return c}function la(a,b){return parseInt(a,b||10)}function nc(a){return typeof a==="string"}function bc(a){return typeof a==="object"}function Xc(a){return typeof a==="number"}function Yc(a,b){for(var d=a.length;d--;)if(a[d]===b){a.splice(d,1);break}}function M(a){return a!==ha&&a!==null}function Aa(a,b,d){var c,e;if(nc(b))if(M(d))a.setAttribute(b,
d);else{if(a&&a.getAttribute)e=a.getAttribute(b)}else if(M(b)&&bc(b))for(c in b)a.setAttribute(c,b[c]);return e}function oc(a){if(!a||a.constructor!==Array)a=[a];return a}function C(){var a=arguments,b,d,c=a.length;for(b=0;b<c;b++){d=a[b];if(typeof d!=="undefined"&&d!==null)return d}}function Ja(a,b){if(Zc)if(b&&b.opacity!==ha)b.filter="alpha(opacity="+b.opacity*100+")";ca(a.style,b)}function mb(a,b,d,c,e){a=Da.createElement(a);b&&ca(a,b);e&&Ja(a,{padding:0,border:Jb,margin:0});d&&Ja(a,d);c&&c.appendChild(a);
return a}function yb(a,b){var d=function(){};d.prototype=new a;ca(d.prototype,b);return d}function Qd(a,b,d,c){var e=Ra.lang;a=a;var f=isNaN(b=nb(b))?2:b;b=d===undefined?e.decimalPoint:d;c=c===undefined?e.thousandsSep:c;e=a<0?"-":"";d=String(la(a=nb(+a||0).toFixed(f)));var g=d.length>3?d.length%3:0;return e+(g?d.substr(0,g)+c:"")+d.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+c)+(f?b+nb(a-d).toFixed(f).slice(2):"")}function Rd(a,b,d,c){var e;d=C(d,1);e=a/d;if(!b){b=[1,2,2.5,5,10];if(c&&c.allowDecimals===
false)if(d===1)b=[1,2,5,10];else if(d<=0.1)b=[1/d]}for(c=0;c<b.length;c++){a=b[c];if(e<=(b[c]+(b[c+1]||b[c]))/2)break}a*=d;return a}function Sd(a,b,d,c,e){var f=[],g=Ra.global.useUTC,h=1E3/Ob,i=6E4/Ob,j=36E5/Ob,k=864E5/Ob,m=6048E5/Ob,t=2592E6/Ob,B=31556952E3/Ob,v=Yb(Td,1,Ud,h,Vd,i,Wd,j,Xd,k,Yd,m,Zd,t,$d,B),J=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",
null]],x=J[J.length-1],o=v[x[0]],s=x[1];for(e=0;e<J.length;e++){x=J[e];o=v[x[0]];s=x[1];if(J[e+1])if(a<=(o*s[s.length-1]+v[J[e+1][0]])/2)break}if(o===B&&a<5*o)s=[1,2,5];a=Rd(a/o,s);var q;b=new Date(b*Ob);b.setMilliseconds(0);if(o>=h)b.setSeconds(o>=i?0:a*Kb(b.getSeconds()/a));if(o>=i)b[ae](o>=j?0:a*Kb(b[wd]()/a));if(o>=j)b[be](o>=k?0:a*Kb(b[xd]()/a));if(o>=k)b[yd](o>=t?1:a*Kb(b[Oc]()/a));if(o>=t){b[ce](o>=B?0:a*Kb(b[$c]()/a));q=b[ad]()}if(o>=B){q-=q%a;b[de](q)}o===m&&b[yd](b[Oc]()-b[zd]()+C(c,1));
e=1;q=b[ad]();c=b.getTime()/Ob;h=b[$c]();for(i=b[Oc]();c<d;){f.push(c);if(o===B)c=bd(q+e*a,0)/Ob;else if(o===t)c=bd(q,h+e*a)/Ob;else if(!g&&(o===k||o===m))c=bd(q,h,i+e*a*(o===k?1:7));else c+=o*a;e++}f.push(c);f.unit=x;return f}function ee(){this.symbol=this.color=0}function xc(a,b){cd=C(a,b.animation)}function fe(){var a=Ra.global.useUTC;bd=a?Date.UTC:function(b,d,c,e,f,g){return(new Date(b,d,C(c,1),C(e,0),C(f,0),C(g,0))).getTime()};wd=a?"getUTCMinutes":"getMinutes";xd=a?"getUTCHours":"getHours";
zd=a?"getUTCDay":"getDay";Oc=a?"getUTCDate":"getDate";$c=a?"getUTCMonth":"getMonth";ad=a?"getUTCFullYear":"getFullYear";ae=a?"setUTCMinutes":"setMinutes";be=a?"setUTCHours":"setHours";yd=a?"setUTCDate":"setDate";ce=a?"setUTCMonth":"setMonth";de=a?"setUTCFullYear":"setFullYear"}function dd(a){ed||(ed=mb(cc));a&&ed.appendChild(a);ed.innerHTML=""}function fd(){}function gd(a,b){function d(l){function u(p,w){this.pos=p;this.minor=w;this.isNew=true;w||this.addLabel()}function G(p){if(p){this.options=p;
this.id=p.id}return this}function I(p,w,H){this.isNegative=w;this.options=p;this.x=H;this.alignOptions={align:p.align||(ya?w?"left":"right":"center"),verticalAlign:p.verticalAlign||(ya?"middle":w?"bottom":"top"),y:C(p.y,ya?4:w?14:-6),x:C(p.x,ya?w?-6:6:0)};this.textAlign=p.textAlign||(ya?w?"right":"left":"center")}function da(){var p=[],w=[],H,K;za=ub=null;Zb=[];A(Ka,function(E){var ia=E.options;K=false;A(["xAxis","yAxis"],function(Pc){if(E.isCartesian&&(Pc==="xAxis"&&Ba||Pc==="yAxis"&&!Ba)&&(ia[Pc]===
l.index||ia[Pc]===ha&&l.index===0)){E[Pc]=O;Zb.push(E);if(E.options.padXAxis)ge=true;K=true}});if(!E.visible&&o.ignoreHiddenSeries)K=false;if(K){var W,fa,jb,Ya,Q;if(!Ba){W=ia.stacking;hd=W==="percent";if(W){Ya=E.type+C(ia.stack,"");Q="-"+Ya;E.stackKey=Ya;fa=p[Ya]||[];p[Ya]=fa;jb=w[Q]||[];w[Q]=jb}if(hd){za=0;ub=99}}if(E.isCartesian){var wa,zb,vb,ob,hb=ia.threshold,Pb,yc=[],he=0;if(Ba){wa=E.xData;za=Ea(C(za,wa[0]),Ea.apply(na,wa));ub=ja(C(ub,wa[0]),ja.apply(na,wa))}else{var Ad,id,zc;E.processData();
wa=E.processedXData;zb=E.processedYData;Pb=zb.length;for(H=0;H<Pb;H++){ob=zb[H];if(ob!==null&&ob!==ha){if(W){vb=wa[H];id=(Ad=ob<0)?jb:fa;zc=Ad?Q:Ya;ob=id[vb]=M(id[vb])?id[vb]+ob:ob;R[zc]||(R[zc]={});R[zc][vb]||(R[zc][vb]=new I(l.stackLabels,Ad,vb));R[zc][vb].setTotal(ob)}if(vb=ob.length)for(;vb--;)yc[he++]=ob[vb];else yc[he++]=ob}}if(!hd){za=Ea(C(za,yc[0]),Ea.apply(na,yc));ub=ja(C(ub,yc[0]),ja.apply(na,yc))}if(E.useThreshold&&hb!==null)if(za>=hb){za=hb;ie=true}else if(ub<hb){ub=hb;je=true}}}}})}function qa(p){var w;
w=p;Ac=C(Ac,na.pow(10,Kb(na.log(kb)/na.LN10)));if(Ac<1){w=N(1/Ac)*10;w=N(p*w)/w}return w}function T(p){var w,H,K,E=l.tickInterval,ia=l.tickPixelInterval;w=l.maxZoom||(Ba&&!M(l.min)&&!M(l.max)?Ea(n.smallestInterval*5,ub-za):null);Z=aa?Qb:Rb;if(dc){H=n[Ba?"xAxis":"yAxis"][l.linkedTo];K=H.getExtremes();ka=C(K.min,K.dataMin);oa=C(K.max,K.dataMax)}else{ka=C(Bc,l.min,za);oa=C(Cc,l.max,ub)}if(z){ka=na.log(ka)/na.LN10;oa=na.log(oa)/na.LN10}if(ec){Bc=ka=oa-ec;Cc=oa;if(p)ec=null}if(oa-ka<w){p=(w-oa+ka)/2;ka=
ja(ka-p,C(l.min,ka-p),za);oa=Ea(ka+w,C(l.max,ka+w),ub)}if(!lb&&!hd&&!dc&&M(ka)&&M(oa)){w=oa-ka||1;if(!M(l.min)&&!M(Bc)&&ke&&(za<0||!ie))ka-=w*ke;if(!M(l.max)&&!M(Cc)&&le&&(ub>0||!je))oa+=w*le}kb=ka===oa||ka===undefined||oa===undefined?1:dc&&!E&&ia===H.options.tickPixelInterval?H.tickInterval:C(E,lb?1:(oa-ka)*ia/(Z||1));if(!D){Ac=na.pow(10,Kb(na.log(kb)/na.LN10));M(l.tickInterval)||(kb=Rd(kb,null,Ac,l))}O.tickInterval=kb;jd=l.minorTickInterval==="auto"&&kb?kb/5:l.minorTickInterval;if(D){xa=Sd(kb,ka,
oa,l.startOfWeek);kd=l.dateTimeLabelFormats[xa.unit[0]]}else{E=qa(Kb(ka/kb)*kb);H=qa(ld(oa/kb)*kb);xa=[];for(E=qa(E);E<=H;){xa.push(E);E=qa(E+kb)}}if(!dc){if(lb||ge){H=(lb?1:kb)*0.5;if(lb||!M(C(l.min,Bc)))ka-=H;if(lb||!M(C(l.max,Cc)))oa+=H}H=xa[0];E=xa[xa.length-1];if(l.startOnTick)ka=H;else ka>H&&xa.shift();if(l.endOnTick)oa=E;else oa<E&&xa.pop();$b||($b={x:0,y:0});if(!D&&xa.length>$b[ma]&&l.alignTicks!==false)$b[ma]=xa.length}}function ta(){var p,w;Qc=ka;me=oa;da();T();Ab=ba;ba=Z/(oa-ka||1);if(!Ba)for(p in R)for(w in R[p])R[p][w].cum=
R[p][w].total;if(!O.isDirty)O.isDirty=ka!==Qc||oa!==me}function Za(p){p=(new G(p)).render();fc.push(p);return p}function La(){var p=l.title,w=l.stackLabels,H=l.alternateGridColor,K=l.lineWidth,E,ia,W=n.hasRendered,fa=W&&M(Qc)&&!isNaN(Qc);if(Zb.length&&M(ka)&&M(oa)||dc){if(jd&&!lb)for(E=ka+(xa[0]-ka)%jd;E<=oa;E+=jd){pc[E]||(pc[E]=new u(E,true));fa&&pc[E].isNew&&pc[E].render(null,true);pc[E].isActive=true;pc[E].render()}A(xa,function(Q,wa){if(!dc||Q>=ka&&Q<=oa){fa&&Bb[Q].isNew&&Bb[Q].render(wa,true);
Bb[Q].isActive=true;Bb[Q].render(wa)}});H&&A(xa,function(Q,wa){if(wa%2===0&&Q<oa){Dc[Q]||(Dc[Q]=new G);Dc[Q].options={from:Q,to:xa[wa+1]!==ha?xa[wa+1]:oa,color:H};Dc[Q].render();Dc[Q].isActive=true}});W||A((l.plotLines||[]).concat(l.plotBands||[]),function(Q){fc.push((new G(Q)).render())})}A([Bb,pc,Dc],function(Q){for(var wa in Q)if(Q[wa].isActive)Q[wa].isActive=false;else{Q[wa].destroy();delete Q[wa]}});if(K){E=Sa+(Fa?Qb:0)+L;ia=Ma-gc-(Fa?Rb:0)+L;E=pa.crispLine([$a,aa?Sa:E,aa?ia:Gb,Ga,aa?Va-P:E,
aa?ia:Ma-gc],K);if(ab)ab.animate({d:E});else ab=pa.path(E).attr({stroke:l.lineColor,"stroke-width":K,zIndex:7}).add()}if(O.axisTitle){E=aa?Sa:Gb;K=la(p.style.fontSize||12);E={low:E+(aa?0:Z),middle:E+Z/2,high:E+(aa?Z:0)}[p.align];K=(aa?Gb+Rb:Sa)+(aa?1:-1)*(Fa?-1:1)*Bd+(Wa===2?K:0);O.axisTitle[W?"animate":"attr"]({x:aa?E:K+(Fa?Qb:0)+L+(p.x||0),y:aa?K-(Fa?Rb:0)+L:E+(p.y||0)})}if(w&&w.enabled){var jb,Ya;w=O.stackTotalGroup;if(!w)O.stackTotalGroup=w=pa.g("stack-labels").attr({visibility:Lb,zIndex:6}).translate(ga,
ea).add();for(jb in R){p=R[jb];for(Ya in p)p[Ya].render(w)}}O.isDirty=false}function pb(p){for(var w=fc.length;w--;)fc[w].id===p&&fc[w].destroy()}var Ba=l.isX,Fa=l.opposite,aa=ya?!Ba:Ba,Wa=aa?Fa?0:2:Fa?1:3,R={};l=Y(Ba?md:Cd,[ze,Ae,ne,Be][Wa],l);var O=this,F=l.type,D=F==="datetime",z=F==="logarithmic",L=l.offset||0,ma=Ba?"x":"y",Z,ba,Na,Ab,Sa,Gb,Qb,Rb,gc,P,ua,va,Ca,cb,ab,za,ub,Zb,ec=l.range,Bc,Cc,oa=null,ka=null,Qc,me,ke=l.minPadding,le=l.maxPadding,dc=M(l.linkedTo),ie,je,hd;F=l.events;var Dd,ge,fc=
[],kb,jd,Ac,xa,Bb={},pc={},Dc={},Ec,Fc,Bd,kd,lb=l.categories,Ce=l.labels.formatter||function(){var p=this.value;return kd?Gc(kd,p):kb%1E6===0?p/1E6+"M":kb%1E3===0?p/1E3+"k":!lb&&p>=1E3?Qd(p,0):p},nd=aa&&l.labels.staggerLines,qc=l.reversed,rc=lb&&l.tickmarkPlacement==="between"?0.5:0;u.prototype={attachLabel:function(){var p=this.label;if(p&&!this.added){p.deferUpdateTransform=true;p.add(Ca)}},updateTransformLabel:function(){var p=this.label;if(p){p.deferUpdateTransform=false;p.updateTransform()}},
computeBBox:function(){var p=this.label,w;if(p){w=p.getBBox();p.elemWidth=w.width;p.elemHeight=w.height}},addLabel:function(){var p=this.pos,w=l.labels,H=!(p===ka&&!C(l.showFirstLabel,1)||p===oa&&!C(l.showLastLabel,0)),K=lb&&aa&&lb.length&&!w.step&&!w.staggerLines&&!w.rotation&&db/lb.length||!aa&&db/2,E=this.label;p=Ce.call({isFirst:p===xa[0],isLast:p===xa[xa.length-1],dateTimeLabelFormat:kd,value:lb&&lb[p]?lb[p]:p});K=K&&{width:ja(1,N(K-2*(w.padding||10)))+qb};K=ca(K,w.style);if(M(E))E&&E.attr({text:p}).css(K);
else this.label=M(p)&&H&&w.enabled?pa.text(p,0,0).attr({align:w.align,rotation:w.rotation}).css(K):null},getLabelSize:function(){var p=this.label;return p?(this.labelBBox=p.getBBox())[aa?"height":"width"]:0},render:function(p,w){var H=!this.minor,K=this.label,E=this.pos,ia=l.labels,W=this.gridLine,fa=H?l.gridLineWidth:l.minorGridLineWidth,jb=H?l.gridLineColor:l.minorGridLineColor,Ya=H?l.gridLineDashStyle:l.minorGridLineDashStyle,Q=this.mark,wa=H?l.tickLength:l.minorTickLength,zb=H?l.tickWidth:l.minorTickWidth||
0,vb=H?l.tickColor:l.minorTickColor,ob=H?l.tickPosition:l.minorTickPosition;H=ia.step;var hb=w&&sc||Ma,Pb;Pb=aa?ua(E+rc,null,null,w)+Na:Sa+L+(Fa?(w&&Wb||Va)-P-Sa:0);hb=aa?hb-gc+L-(Fa?Rb:0):hb-ua(E+rc,null,null,w)-Na;if(fa){E=va(E+rc,fa,w);if(W===ha){W={stroke:jb,"stroke-width":fa};if(Ya)W.dashstyle=Ya;this.gridLine=W=fa?pa.path(E).attr(W).add(cb):null}W&&E&&W.animate({d:E})}if(zb){if(ob==="inside")wa=-wa;if(Fa)wa=-wa;fa=pa.crispLine([$a,Pb,hb,Ga,Pb+(aa?0:-wa),hb+(aa?wa:0)],zb);if(Q)Q.animate({d:fa});
else this.mark=pa.path(fa).attr({stroke:vb,"stroke-width":zb}).add(Ca)}if(K&&!isNaN(Pb)){Pb=Pb+ia.x-(rc&&aa?rc*ba*(qc?-1:1):0);hb=hb+ia.y-(rc&&!aa?rc*ba*(qc?1:-1):0);M(ia.y)||(hb+=la(K.styles.lineHeight)*0.9-K.getBBox().height/2);if(nd)hb+=p/(H||1)%nd*16;if(H)K[p%H?"hide":"show"]();K[this.isNew?"attr":"animate"]({x:Pb,y:hb})}this.isNew=false},destroy:function(){for(var p in this)this[p]&&this[p].destroy&&this[p].destroy()}};G.prototype={render:function(){var p=this,w=p.options,H=w.label,K=p.label,
E=w.width,ia=w.to,W,fa=w.from,jb=w.dashStyle,Ya=p.svgElem,Q=[],wa,zb,vb=w.color;zb=w.zIndex;var ob=w.events;if(E){Q=va(w.value,E);w={stroke:vb,"stroke-width":E};if(jb)w.dashstyle=jb}else if(M(fa)&&M(ia)){fa=ja(fa,ka);ia=Ea(ia,oa);W=va(ia);if((Q=va(fa))&&W)Q.push(W[4],W[5],W[1],W[2]);else Q=null;w={fill:vb}}else return;if(M(zb))w.zIndex=zb;if(Ya)if(Q)Ya.animate({d:Q},null,Ya.onGetPath);else{Ya.hide();Ya.onGetPath=function(){Ya.show()}}else if(Q&&Q.length){p.svgElem=Ya=pa.path(Q).attr(w).add();if(ob){jb=
function(hb){Ya.on(hb,function(Pb){ob[hb].apply(p,[Pb])})};for(wa in ob)jb(wa)}}if(H&&M(H.text)&&Q&&Q.length&&Qb>0&&Rb>0){H=Y({align:aa&&W&&"center",x:aa?!W&&4:10,verticalAlign:!aa&&W&&"middle",y:aa?W?16:10:W?6:-4,rotation:aa&&!W&&90},H);if(!K)p.label=K=pa.text(H.text,0,0).attr({align:H.textAlign||H.align,rotation:H.rotation,zIndex:zb}).css(H.style).add();W=[Q[1],Q[4],C(Q[6],Q[1])];Q=[Q[2],Q[5],C(Q[7],Q[2])];wa=Ea.apply(na,W);zb=Ea.apply(na,Q);K.align(H,false,{x:wa,y:zb,width:ja.apply(na,W)-wa,height:ja.apply(na,
Q)-zb});K.show()}else K&&K.hide();return p},destroy:function(){for(var p in this){this[p]&&this[p].destroy&&this[p].destroy();delete this[p]}Yc(fc,this)}};I.prototype={setTotal:function(p){this.cum=this.total=p},render:function(p){var w=this.options.formatter.call(this);if(this.label)this.label.attr({text:w,visibility:Cb});else this.label=n.renderer.text(w,0,0).css(this.options.style).attr({align:this.textAlign,rotation:this.options.rotation,visibility:Cb}).add(p)},setOffset:function(p,w){var H=this.isNegative,
K=O.translate(this.total),E=O.translate(0);E=nb(K-E);var ia=n.xAxis[0].translate(this.x)+p,W=n.plotHeight;H={x:ya?H?K:K-E:ia,y:ya?W-ia-w:H?W-K-E:W-K,width:ya?E:w,height:ya?w:E};this.label&&this.label.align(this.alignOptions,null,H).attr({visibility:Lb})}};ua=function(p,w,H,K,E){var ia=1,W=0,fa=K?Ab:ba;K=K?Qc:ka;fa||(fa=ba);if(H){ia*=-1;W=Z}if(qc){ia*=-1;W-=ia*Z}if(w){if(qc)p=Z-p;p=p/fa+K;if(z&&E)p=na.pow(10,p)}else{if(z&&E)p=na.log(p)/na.LN10;p=ia*(p-K)*fa+W}return p};va=function(p,w,H){var K,E,ia;
p=ua(p,null,null,H);var W=H&&sc||Ma,fa=H&&Wb||Va,jb;H=E=N(p+Na);K=ia=N(W-p-Na);if(isNaN(p))jb=true;else if(aa){K=Gb;ia=W-gc;if(H<Sa||H>Sa+Qb)jb=true}else{H=Sa;E=fa-P;if(K<Gb||K>Gb+Rb)jb=true}return jb?null:pa.crispLine([$a,H,K,Ga,E,ia],w||0)};wb.push(O);n[Ba?"xAxis":"yAxis"].push(O);if(ya&&Ba&&qc===ha)qc=true;ca(O,{addPlotBand:Za,addPlotLine:Za,adjustTickAmount:function(){if($b&&!D&&!lb&&!dc&&l.alignTicks!==false){var p=Ec,w=xa.length;Ec=$b[ma];if(w<Ec){for(;xa.length<Ec;)xa.push(qa(xa[xa.length-
1]+kb));ba*=(w-1)/(Ec-1);oa=xa[xa.length-1]}if(M(p)&&Ec!==p)O.isDirty=true}},categories:lb,getExtremes:function(){return{min:ka,max:oa,dataMin:za,dataMax:ub,userMin:Bc,userMax:Cc}},getPlotLinePath:va,getThreshold:function(p){if(ka>p||p===null)p=ka;else if(oa<p)p=oa;return ua(p,0,1)},isXAxis:Ba,options:l,plotLinesAndBands:fc,getOffset:function(){var p=Zb.length&&M(ka)&&M(oa),w=0,H=0,K=l.title,E=l.labels,ia=[-1,1,1,-1][Wa],W;if(!Ca){Ca=pa.g("axis").attr({zIndex:7}).add();cb=pa.g("grid").attr({zIndex:1}).add()}Fc=
0;if(p||dc){A(xa,function(fa){if(Bb[fa])Bb[fa].addLabel();else Bb[fa]=new u(fa)});A(xa,function(fa){Bb[fa].attachLabel()});A(xa,function(fa){Bb[fa].computeBBox()});A(xa,function(fa){Bb[fa].updateTransformLabel()});A(xa,function(fa){if(Wa===0||Wa===2||{1:"left",3:"right"}[Wa]===E.align)Fc=ja(Bb[fa].getLabelSize(),Fc)});if(nd)Fc+=(nd-1)*16}else for(W in Bb){Bb[W].destroy();delete Bb[W]}if(K&&K.text){if(!O.axisTitle)O.axisTitle=pa.text(K.text,0,0).attr({zIndex:7,rotation:K.rotation||0,align:K.textAlign||
{low:"left",middle:"center",high:"right"}[K.align]}).css(K.style).add();w=O.axisTitle.getBBox()[aa?"height":"width"];H=C(K.margin,aa?5:10)}L=ia*C(l.offset,rb[Wa]);Bd=Fc+(Wa!==2&&Fc&&ia*l.labels[aa?"y":"x"])+H;rb[Wa]=ja(rb[Wa],Bd+w+ia*L)},render:La,setAxisSize:function(){var p=l.offsetLeft||0,w=l.offsetRight||0;Sa=C(l.left,ga+p);Gb=C(l.top,ea);Qb=C(l.width,db-p+w);Rb=C(l.height,eb);gc=Ma-Rb-Gb;P=Va-Qb-Sa;O.left=Sa;O.top=Gb;Z=aa?Qb:Rb;ba=Z/(oa-ka||1);Na=aa?Sa:gc},setCategories:function(p,w){O.categories=
lb=p;A(Zb,function(H){H.translate();H.setTooltipPoints(true)});O.isDirty=true;C(w,true)&&n.redraw()},setExtremes:function(p,w,H,K){H=C(H,true);Ha(O,"setExtremes",{min:p,max:w},function(){Bc=p;Cc=w;H&&n.redraw(K)})},setScale:ta,setTickPositions:T,translate:ua,redraw:function(){Hc.resetTracker&&Hc.resetTracker();La();A(fc,function(p){p.render()});A(Zb,function(p){p.isDirty=true})},removePlotBand:pb,removePlotLine:pb,reversed:qc,stacks:R});for(Dd in F)ra(O,Dd,F[Dd]);ta()}function c(){var l={};return{add:function(u,
G,I,da){if(!l[u]){G=pa.text(G,0,0).css(a.toolbar.itemStyle).align({align:"right",x:-Xb-20,y:ea+30}).on("click",da).attr({align:"right",zIndex:20}).add();l[u]=G}},remove:function(u){dd(l[u].element);l[u]=null}}}function e(l){function u(){var D=this.points||oc(this),z=D[0].series.xAxis,L=this.x;z=z&&z.options.type==="datetime";var ma=nc(L)||z,Z=D[0].series,ba;ba=ma?['<span style="font-size: 10px">'+(z?Gc("%A, %b %e, %Y",L):L)+"</span>"]:[];A(D,function(Na){Z=Na.series;ba.push(Z.tooltipFormatter&&Z.tooltipFormatter(Na)||
Na.point.tooltipFormatter(ma))});return ba.join("<br/>")}function G(D,z){R=Fa?D:(2*R+D)/3;O=Fa?z:(O+z)/2;F.attr({x:R,y:O});Ed=nb(D-R)>1||nb(z-O)>1?function(){G(D,z)}:null}function I(){if(!Fa){var D=n.hoverPoints;F.hide();A(ta,function(z){z&&z.hide()});D&&A(D,function(z){z.setState()});n.hoverPoints=null;Fa=true}}var da,qa=l.borderWidth,T=l.crosshairs,ta=[],Za=l.style,La=l.shared,pb=la(Za.padding),Ba=qa+pb,Fa=true,aa,Wa,R=0,O=0;Za.padding=0;var F=pa.label("",0,0).attr({padding:pb,fill:l.backgroundColor,
"stroke-width":qa,r:l.borderRadius,zIndex:8}).css(Za).hide().add().shadow(1);return{shared:La,refresh:function(D){var z,L,ma,Z,ba={},Na=[];ma=D.tooltipPos;z=l.formatter||u;ba=n.hoverPoints;if(La&&!(D.series&&D.series.noSharedTooltip)){Z=0;ba&&A(ba,function(Ab){Ab.setState()});n.hoverPoints=D;A(D,function(Ab){Ab.setState(Tb);Z+=Ab.plotY;Na.push(Ab.getLabelConfig())});L=D[0].plotX;Z=N(Z)/D.length;ba={x:D[0].category};ba.points=Na;D=D[0]}else ba=D.getLabelConfig();ba=z.call(ba);da=D.series;L=C(L,D.plotX);
Z=C(Z,D.plotY);z=N(ma?ma[0]:ya?db-Z:L);L=N(ma?ma[1]:ya?eb-L:Z);ma=La||!D.series.isCartesian||ib(z,L);if(ba===false||!ma)I();else{if(Fa){F.show();Fa=false}F.attr({text:ba});ma=F.getBBox();aa=ma.width;Wa=ma.height;F.attr({stroke:l.borderColor||D.color||da.color||"#606060"});z=z-aa+ga-25;L=L-Wa+ea+10;if(z<7){z=7;L-=30}if(L<ea+5)L=ea+5;else if(L+Wa>Ma)L=Ma-Wa-5;G(N(z-Ba),N(L-Ba))}if(T){T=oc(T);for(z=T.length;z--;){L=D.series[z?"yAxis":"xAxis"];if(T[z]&&L){L=L.getPlotLinePath(D[z?"y":"x"],1);if(ta[z])ta[z].attr({d:L,
visibility:Lb});else{ma={"stroke-width":T[z].width||1,stroke:T[z].color||"#C0C0C0",zIndex:2};if(T[z].dashStyle)ma.dashstyle=T[z].dashStyle;ta[z]=pa.path(L).attr(ma).add()}}}}},hide:I}}function f(l,u){function G(R){var O,F=oe&&Da.width/Da.documentElement.clientWidth-1,D,z,L;R=R||sb.event;if(!R.target)R.target=R.srcElement;if(R.originalEvent)R=R.originalEvent;O=R.touches?R.touches.item(0):R;if(R.type!=="mousemove"||sb.opera||F){D=sa;z={left:D.offsetLeft,top:D.offsetTop};for(D=D.offsetParent;D;){z.left+=
D.offsetLeft;z.top+=D.offsetTop;if(D!==Da.body&&D!==Da.documentElement){z.left-=D.scrollLeft;z.top-=D.scrollTop}D=D.offsetParent}Rc=z;D=Rc.left;z=Rc.top}if(Zc){L=R.x;O=R.y}else if(O.layerX===ha){L=O.pageX-D;O=O.pageY-z}else{L=R.layerX;O=R.layerY}if(F){L+=N((F+1)*D-D);O+=N((F+1)*z-z)}return ca(R,{chartX:L,chartY:O})}function I(R){var O={xAxis:[],yAxis:[]};A(wb,function(F){var D=F.translate,z=F.isXAxis;O[z?"xAxis":"yAxis"].push({axis:F,value:D((ya?!z:z)?R.chartX-ga:eb-R.chartY+ea,true)})});return O}
function da(){var R=l.hoverSeries,O=l.hoverPoint;O&&O.onMouseOut();R&&R.onMouseOut();Oa&&Oa.hide();Fd=null}function qa(){if(La){var R={xAxis:[],yAxis:[]},O=La.getBBox(),F=O.x-ga,D=O.y-ea;if(Za){A(wb,function(z){if(z.options.zoomEnabled!==false){var L=z.translate,ma=z.isXAxis,Z=ya?!ma:ma,ba=L(Z?F:eb-D-O.height,true,0,0,1);L=L(Z?F+O.width:eb-D,true,0,0,1);R[ma?"xAxis":"yAxis"].push({axis:z,min:Ea(ba,L),max:ja(ba,L)})}});Ha(l,"selection",R,Gd)}La=La.destroy()}Ja(sa,{cursor:"auto"});l.mouseIsDown=ac=
Za=false;Ub(Da,Hb?"touchend":"mouseup",qa)}var T,ta,Za,La,pb=o.zoomType,Ba=/x/.test(pb),Fa=/y/.test(pb),aa=Ba&&!ya||Fa&&ya,Wa=Fa&&!ya||Ba&&ya;od=function(){if(pd){pd.translate(ga,ea);ya&&pd.attr({width:l.plotWidth,height:l.plotHeight}).invert()}else l.trackerGroup=pd=pa.g("tracker").attr({zIndex:9}).add()};od();if(u.enabled)l.tooltip=Oa=e(u);(function(){var R=true;sa.onmousedown=function(F){F=G(F);l.mouseIsDown=ac=true;T=F.chartX;ta=F.chartY;ra(Da,Hb?"touchend":"mouseup",qa)};var O=function(F){if(!(F&&
F.touches&&F.touches.length>1)){F=G(F);if(!Hb)F.returnValue=false;var D=F.chartX,z=F.chartY,L=!ib(D-ga,z-ea);if(Hb&&F.type==="touchstart")if(Aa(F.target,"isTracker"))l.runTrackerClick||F.preventDefault();else!Ta&&!L&&F.preventDefault();if(L){R||da();if(D<ga)D=ga;else if(D>ga+db)D=ga+db;if(z<ea)z=ea;else if(z>ea+eb)z=ea+eb}if(ac&&F.type!=="touchstart"){Za=Math.sqrt(Math.pow(T-D,2)+Math.pow(ta-z,2));if(Za>10){var ma=ib(T-ga,ta-ea);if(Ic&&(Ba||Fa)&&ma)La||(La=pa.rect(ga,ea,aa?1:db,Wa?1:eb,0).attr({fill:"rgba(69,114,167,0.25)",
zIndex:7}).add());if(La&&aa){F=D-T;La.attr({width:nb(F),x:(F>0?0:F)+T})}if(La&&Wa){z=z-ta;La.attr({height:nb(z),y:(z>0?0:z)+ta})}if(ma&&!La&&o.panning){z=l.xAxis[0];F=z.getExtremes();ma=F.dataMin;F=F.dataMax;var Z=z.translate(T-D,true),ba=z.translate(T+db-D,true);Z>ma&&ba<F&&z.setExtremes(Z,ba,true,false);T=D;Ja(sa,{cursor:"move"})}}}else if(!L){D=l.hoverPoint;z=l.hoverSeries;var Na;ma=Va;var Ab=ya?F.chartY:F.chartX-ga;if(Oa&&u.shared&&!(z&&z.noSharedTooltip)){Z=[];ba=Ka.length;for(Na=0;Na<ba;Na++)if(Ka[Na].visible&&
Ka[Na].tooltipPoints.length&&Ka[Na].options.enableMouseTracking!==false&&!Ka[Na].noSharedTooltip){F=Ka[Na].tooltipPoints[Ab];F._dist=nb(Ab-F.plotX);ma=Ea(ma,F._dist);Z.push(F)}for(ba=Z.length;ba--;)Z[ba]._dist>ma&&Z.splice(ba,1);if(Z.length&&Z[0].plotX!==Fd){Oa.refresh(Z);Fd=Z[0].plotX}}if(z&&z.tracker)(F=z.tooltipPoints[Ab])&&F!==D&&F.onMouseOver()}return(R=L)||!Ic}};sa.onmousemove=O;ra(sa,"mouseleave",da);sa.ontouchstart=function(F){if(Ba||Fa)sa.onmousedown(F);O(F)};sa.ontouchmove=O;sa.ontouchend=
function(){Za&&da()};sa.onclick=function(F){var D=l.hoverPoint;F=G(F);F.cancelBubble=true;if(!Za)if(D&&Aa(F.target,"isTracker")){var z=D.plotX,L=D.plotY;ca(D,{pageX:Rc.left+ga+(ya?db-L:z),pageY:Rc.top+ea+(ya?eb-z:L)});Ha(D.series,"click",ca(F,{point:D}));D.firePointEvent("click",F)}else{ca(F,I(F));ib(F.chartX-ga,F.chartY-ea)&&Ha(l,"click",F)}Za=false}})();pe=setInterval(function(){Ed&&Ed()},32);ca(this,{zoomX:Ba,zoomY:Fa,resetTracker:da,normalizeMouseEvent:G})}function g(l){var u=l.type||o.type||
o.defaultSeriesType,G=fb[u],I=n.hasRendered;if(I)if(ya&&u==="column")G=fb.bar;else if(!ya&&u==="bar")G=fb.column;u=new G;u.init(n,l);if(!I&&u.inverted)ya=true;if(u.isCartesian)Ic=u.isCartesian;Ka.push(u);return u}function h(){o.alignTicks!==false&&A(wb,function(l){l.adjustTickAmount()});$b=null}function i(l){var u=n.isDirtyLegend,G,I=n.isDirtyBox,da=Ka.length,qa=da,T=n.clipRect;for(xc(l,n);qa--;){l=Ka[qa];if(l.isDirty&&l.options.stacking){G=true;break}}if(G)for(qa=da;qa--;){l=Ka[qa];if(l.options.stacking)l.isDirty=
true}A(Ka,function(ta){if(ta.isDirty)if(ta.options.legendType==="point")u=true});if(u&&Hd.renderLegend){Hd.renderLegend();n.isDirtyLegend=false}if(Ic){if(!qd){$b=null;A(wb,function(ta){ta.leastDistance=ha;ta.setScale()})}h();Sc();A(wb,function(ta){if(ta.isDirty||I){ta.redraw();I=true}})}if(I){Id();od();if(T){rd(T);T.animate({width:n.plotSizeX,height:n.plotSizeY})}}A(Ka,function(ta){if(ta.isDirty&&ta.visible&&(!ta.isCartesian||ta.xAxis))ta.redraw()});Hc&&Hc.resetTracker&&Hc.resetTracker();Ha(n,"redraw")}
function j(){var l=a.xAxis||{},u=a.yAxis||{};l=oc(l);A(l,function(G,I){G.index=I;G.isX=true});u=oc(u);A(u,function(G,I){G.index=I});l=l.concat(u);A(l,function(G){new d(G)});h()}function k(l,u){gb=Y(a.title,l);$=Y(a.subtitle,u);A([["title",l,gb],["subtitle",u,$]],function(G){var I=G[0],da=n[I],qa=G[1];G=G[2];if(da&&qa){da.destroy();da=null}if(G&&G.text&&!da)n[I]=pa.text(G.text,0,0).attr({align:G.align,"class":"highcharts-"+I,zIndex:1}).css(G.style).add().align(G,false,Ia)})}function m(){Pa=o.renderTo;
Sb=Jc+Jd++;if(nc(Pa))Pa=Da.getElementById(Pa);Pa.innerHTML="";if(!Pa.offsetWidth){Xa=Pa.cloneNode(0);Ja(Xa,{position:Kc,top:"-9999px",display:""});Da.body.appendChild(Xa)}tc=(Xa||Pa).offsetWidth;hc=(Xa||Pa).offsetHeight;n.chartWidth=Va=o.width||tc||600;n.chartHeight=Ma=o.height||(hc>19?hc:400);n.container=sa=mb(cc,{className:"highcharts-container"+(o.className?" "+o.className:""),id:Sb},ca({position:qe,overflow:Cb,width:Va+qb,height:Ma+qb,textAlign:"left"},o.style),Xa||Pa);n.renderer=pa=o.forExport?
new sd(sa,Va,Ma,true):new Tc(sa,Va,Ma);var l,u;if(re&&sa.getBoundingClientRect){l=function(){Ja(sa,{left:0,top:0});u=sa.getBoundingClientRect();Ja(sa,{left:-(u.left-la(u.left))+qb,top:-(u.top-la(u.top))+qb})};l();ra(sb,"resize",l);ra(n,"destroy",function(){Ub(sb,"resize",l)})}}function t(){function l(){var G=o.width||Pa.offsetWidth,I=o.height||Pa.offsetHeight;if(G&&I){if(G!==tc||I!==hc){clearTimeout(u);u=setTimeout(function(){Kd(G,I,false)},100)}tc=G;hc=I}}var u;ra(sb,"resize",l);ra(n,"destroy",function(){Ub(sb,
"resize",l)})}function B(){var l=a.labels,u=a.credits,G;k();Hd=n.legend=new De(n);Sc();A(wb,function(I){I.setTickPositions(true)});h();Sc();Id();Ic&&A(wb,function(I){I.render()});if(!n.seriesGroup)n.seriesGroup=pa.g("series-group").attr({zIndex:3}).add();A(Ka,function(I){I.translate();I.setTooltipPoints();I.render()});l.items&&A(l.items,function(){var I=ca(l.style,this.style),da=la(I.left)+ga,qa=la(I.top)+ea+12;delete I.left;delete I.top;pa.text(this.html,da,qa).attr({zIndex:2}).css(I).add()});if(!n.toolbar)n.toolbar=
c(n);if(u.enabled&&!n.credits){G=u.href;pa.text(u.text,0,0).on("click",function(){if(G)location.href=G}).attr({align:u.position.align,zIndex:8}).css(u.style).add().align(u.position)}od();n.hasRendered=true;if(Xa){Pa.appendChild(sa);dd(Xa)}}function v(){var l=Ka.length,u=sa&&sa.parentNode;Ha(n,"destroy");Ub(sb,"unload",v);Ub(n);for(A(wb,function(G){Ub(G)});l--;)Ka[l].destroy();if(sa){sa.innerHTML="";Ub(sa);u&&u.removeChild(sa);sa=null}if(pa)pa.alignedObjects=null;clearInterval(pe);for(l in n)delete n[l]}
function J(){if(!Uc&&sb==sb.top&&Da.readyState!=="complete")Da.attachEvent("onreadystatechange",function(){Da.detachEvent("onreadystatechange",J);Da.readyState==="complete"&&J()});else{m();Ha(n,"init");if(se&&a.rangeSelector.enabled)n.rangeSelector=new se(n);Ld();Md();A(a.series||[],function(l){g(l)});n.inverted=ya=C(ya,a.chart.inverted);j();if(te&&a.navigator.enabled||a.scrollbar.enabled)n.scroller=new te(n);n.render=B;n.tracker=Hc=new f(n,a.tooltip);B();b&&b.apply(n,[n]);A(n.callbacks,function(l){l.apply(n,
[n])});Ha(n,"load")}}md=Y(md,Ra.xAxis);Cd=Y(Cd,Ra.yAxis);Ra.xAxis=Ra.yAxis=null;var x=a.series;a.series=null;a=Y(Ra,a);a.series=x;var o=a.chart;x=o.margin;x=bc(x)?x:[x,x,x,x];var s=C(o.marginTop,x[0]),q=C(o.marginRight,x[1]),r=C(o.marginBottom,x[2]),y=C(o.marginLeft,x[3]),U=o.spacingTop,X=o.spacingRight,Ua=o.spacingBottom,bb=o.spacingLeft,Ia,gb,$,ea,Xb,tb,ga,rb,Pa,Xa,sa,Sb,tc,hc,Va,Ma,Wb,sc,uc,Lc,ic,V,n=this,Ta=(x=o.events)&&!!x.click,Db,ib,Oa,ac,Eb,vc,wc,eb,db,Hc,pd,od,Hd,jc,kc,Rc,Ic=o.showAxes,
qd=0,wb=[],$b,Ka=[],ya,pa,Ed,pe,Fd,Id,Sc,Ld,Md,Kd,Gd,ue,De=function(l){function u(P,ua){var va=P.legendItem,Ca=P.legendLine,cb=P.legendSymbol,ab=Wa.color,za=ua?T.itemStyle.color:ab;ab=ua?P.color:ab;va&&va.css({fill:za});Ca&&Ca.attr({stroke:ab});cb&&cb.attr({stroke:ab,fill:ab})}function G(P,ua,va){var Ca=P.legendItem,cb=P.legendLine,ab=P.legendSymbol;P=P.checkbox;Ca&&Ca.attr({x:ua,y:va});cb&&cb.translate(ua,va-4);ab&&ab.attr({x:ua+ab.xOff,y:va+ab.yOff});if(P){P.x=ua;P.y=va}}function I(){A(pb,function(P){var ua=
P.checkbox,va=Sa.alignAttr;ua&&Ja(ua,{left:va.translateX+P.legendItemWidth+ua.x-40+qb,top:va.translateY+ua.y-11+qb})})}function da(P){var ua,va,Ca,cb,ab=P.legendItem;cb=P.series||P;var za=cb.options,ub=za&&za.borderWidth||0;if(!ab){cb=/^(bar|pie|area|column)$/.test(cb.type);P.legendItem=ab=pa.text(T.labelFormatter.call(P),0,0).css(P.visible?Fa:Wa).on("mouseover",function(){P.setState(Tb);ab.css(aa)}).on("mouseout",function(){ab.css(P.visible?Fa:Wa);P.setState()}).on("click",function(){var ec=function(){P.setVisible()};
P.firePointEvent?P.firePointEvent("legendItemClick",null,ec):Ha(P,"legendItemClick",null,ec)}).attr({zIndex:2}).add(Sa);if(!cb&&za&&za.lineWidth){var Zb={"stroke-width":za.lineWidth,zIndex:2};if(za.dashStyle)Zb.dashstyle=za.dashStyle;P.legendLine=pa.path([$a,-Za-La,0,Ga,-La,0]).attr(Zb).add(Sa)}if(cb)Ca=pa.rect(ua=-Za-La,va=-11,Za,12,2).attr({zIndex:3}).add(Sa);else if(za&&za.marker&&za.marker.enabled){Ca=za.marker.radius;Ca=pa.symbol(P.symbol,ua=-Za/2-La-Ca,va=-4-Ca,2*Ca,2*Ca).attr(P.pointAttr[Ib]).attr({zIndex:3}).add(Sa)}if(Ca){Ca.xOff=
ua+ub%2/2;Ca.yOff=va+ub%2/2}P.legendSymbol=Ca;u(P,P.visible);if(za&&za.showCheckbox){P.checkbox=mb("input",{type:"checkbox",checked:P.selected,defaultChecked:P.selected},T.itemCheckboxStyle,sa);ra(P.checkbox,"click",function(ec){Ha(P,"checkboxClick",{checked:ec.target.checked},function(){P.select()})})}}ua=ab.getBBox();va=P.legendItemWidth=T.itemWidth||Za+La+ua.width+O;Z=ua.height;if(ta&&z-D+va>(Qb||Va-2*R-D)){z=D;L+=Z}ma=L;G(P,z,L);if(ta)z+=va;else L+=Z;Gb=Qb||ja(ta?z-D:va,Gb)}function qa(){z=D;
L=F;ma=Gb=0;Sa||(Sa=pa.g("legend").attr({zIndex:7}).add());pb=[];A(Rb,function(Ca){var cb=Ca.options;if(cb.showInLegend)pb=pb.concat(cb.legendType==="point"?Ca.data:Ca)});pb.sort(function(Ca,cb){return(Ca.options.legendIndex||0)-(cb.options.legendIndex||0)});gc&&pb.reverse();A(pb,da);jc=Qb||Gb;kc=ma-F+Z;if(Na||Ab){jc+=2*R;kc+=2*R;if(ba)jc>0&&kc>0&&ba.animate(ba.crisp(null,null,null,jc,kc));else ba=pa.rect(0,0,jc,kc,T.borderRadius,Na||0).attr({stroke:T.borderColor,"stroke-width":Na||0,fill:Ab||Jb}).add(Sa).shadow(T.shadow);
ba[pb.length?"show":"hide"]()}for(var P=["left","right","top","bottom"],ua,va=4;va--;){ua=P[va];if(Ba[ua]&&Ba[ua]!=="auto"){T[va<2?"align":"verticalAlign"]=ua;T[va<2?"x":"y"]=la(Ba[ua])*(va%2?-1:1)}}Sa.align(ca(T,{width:jc,height:kc}),true,Ia);qd||I()}var T=l.options.legend;if(T.enabled){var ta=T.layout==="horizontal",Za=T.symbolWidth,La=T.symbolPadding,pb,Ba=T.style,Fa=T.itemStyle,aa=T.itemHoverStyle,Wa=T.itemHiddenStyle,R=la(Ba.padding),O=20,F=18,D=4+R+Za+La,z,L,ma,Z=0,ba,Na=T.borderWidth,Ab=T.backgroundColor,
Sa,Gb,Qb=T.width,Rb=l.series,gc=T.reversed;qa();ra(l,"endResize",I);return{colorizeItem:u,destroyItem:function(P){var ua=P.checkbox;A(["legendItem","legendLine","legendSymbol"],function(va){P[va]&&P[va].destroy()});ua&&dd(P.checkbox)},renderLegend:qa}}};ib=function(l,u){return l>=0&&l<=db&&u>=0&&u<=eb};ue=function(){Ha(n,"selection",{resetSelection:true},Gd);n.toolbar.remove("zoom")};Gd=function(l){var u=Ra.lang,G=n.pointCount<100;n.resetZoomEnabled!==false&&n.toolbar.add("zoom",u.resetZoom,u.resetZoomTitle,
ue);!l||l.resetSelection?A(wb,function(I){I.options.zoomEnabled!==false&&I.setExtremes(null,null,false,G)}):A(l.xAxis.concat(l.yAxis),function(I){var da=I.axis;if(n.tracker[da.isXAxis?"zoomX":"zoomY"])da.setExtremes(I.min,I.max,false,G)});i()};Sc=function(){var l=a.legend,u=C(l.margin,10),G=l.x,I=l.y,da=l.align,qa=l.verticalAlign,T;Ld();if((n.title||n.subtitle)&&!M(s))if(T=ja(n.title&&!gb.floating&&!gb.verticalAlign&&gb.y||0,n.subtitle&&!$.floating&&!$.verticalAlign&&$.y||0))ea=ja(ea,T+C(gb.margin,
15)+U);if(l.enabled&&!l.floating)if(da==="right")M(q)||(Xb=ja(Xb,jc-G+u+X));else if(da==="left")M(y)||(ga=ja(ga,jc+G+u+bb));else if(qa==="top")M(s)||(ea=ja(ea,kc+I+u+U));else if(qa==="bottom")M(r)||(tb=ja(tb,kc-I+u+Ua));if(n.extraBottomMargin)tb+=n.extraBottomMargin;if(n.extraTopMargin)ea+=n.extraTopMargin;Ic&&A(wb,function(ta){ta.getOffset()});M(y)||(ga+=rb[3]);M(s)||(ea+=rb[0]);M(r)||(tb+=rb[2]);M(q)||(Xb+=rb[1]);Md()};Kd=function(l,u,G){var I=n.title,da=n.subtitle;qd+=1;xc(G,n);sc=Ma;Wb=Va;if(M(l))n.chartWidth=
Va=N(l);if(M(u))n.chartHeight=Ma=N(u);Ja(sa,{width:Va+qb,height:Ma+qb});pa.setSize(Va,Ma,G);db=Va-ga-Xb;eb=Ma-ea-tb;$b=null;A(wb,function(qa){qa.isDirty=true;qa.setScale()});A(Ka,function(qa){qa.isDirty=true});n.isDirtyLegend=true;n.isDirtyBox=true;Sc();I&&I.align(null,null,Ia);da&&da.align(null,null,Ia);i(G);sc=null;Ha(n,"resize");setTimeout(function(){Ha(n,"endResize",null,function(){qd-=1})},cd&&cd.duration||500)};Md=function(){n.plotLeft=ga=N(ga);n.plotTop=ea=N(ea);n.plotWidth=db=N(Va-ga-Xb);
n.plotHeight=eb=N(Ma-ea-tb);n.plotSizeX=ya?eb:db;n.plotSizeY=ya?db:eb;Ia={x:bb,y:U,width:Va-bb-X,height:Ma-U-Ua};A(wb,function(l){l.setAxisSize()})};Ld=function(){ea=C(s,U);Xb=C(q,X);tb=C(r,Ua);ga=C(y,bb);rb=[0,0,0,0]};Id=function(){var l=o.borderWidth||0,u=o.backgroundColor,G=o.plotBackgroundColor,I=o.plotBackgroundImage,da,qa={x:ga,y:ea,width:db,height:eb};da=l+(o.shadow?8:0);if(l||u)if(uc)uc.animate(uc.crisp(null,null,null,Va-da,Ma-da));else uc=pa.rect(da/2,da/2,Va-da,Ma-da,o.borderRadius,l).attr({stroke:o.borderColor,
"stroke-width":l,fill:u||Jb}).add().shadow(o.shadow);if(G)if(Lc)Lc.animate(qa);else Lc=pa.rect(ga,ea,db,eb,0).attr({fill:G}).add().shadow(o.plotShadow);if(I)if(ic)ic.animate(qa);else ic=pa.image(I,ga,ea,db,eb).add();if(o.plotBorderWidth)if(V)V.animate(V.crisp(null,ga,ea,db,eb));else V=pa.rect(ga,ea,db,eb,0,o.plotBorderWidth).attr({stroke:o.plotBorderColor,"stroke-width":o.plotBorderWidth,zIndex:4}).add();n.isDirtyBox=false};ra(sb,"unload",v);o.reflow!==false&&ra(n,"load",t);if(x)for(Db in x)ra(n,
Db,x[Db]);n.options=a;n.series=Ka;n.xAxis=[];n.yAxis=[];n.addSeries=function(l,u,G){var I;if(l){xc(G,n);u=C(u,true);Ha(n,"addSeries",{options:l},function(){I=g(l);I.isDirty=true;n.isDirtyLegend=true;u&&n.redraw()})}return I};n.animation=C(o.animation,true);n.Axis=d;n.destroy=v;n.get=function(l){var u,G,I;for(u=0;u<wb.length;u++)if(wb[u].options.id===l)return wb[u];for(u=0;u<Ka.length;u++)if(Ka[u].options.id===l)return Ka[u];for(u=0;u<Ka.length;u++){I=Ka[u].points;for(G=0;G<I.length;G++)if(I[G].id===
l)return I[G]}return null};n.getSelectedPoints=function(){var l=[];A(Ka,function(u){l=l.concat(Nd(u.points,function(G){return G.selected}))});return l};n.getSelectedSeries=function(){return Nd(Ka,function(l){return l.selected})};n.hideLoading=function(){td(Eb,{opacity:0},{duration:a.loading.hideDuration,complete:function(){Ja(Eb,{display:Jb})}});wc=false};n.initSeries=g;n.isInsidePlot=ib;n.redraw=i;n.setSize=Kd;n.setTitle=k;n.showLoading=function(l){var u=a.loading;if(!Eb){Eb=mb(cc,{className:"highcharts-loading"},
ca(u.style,{left:ga+qb,top:ea+qb,width:db+qb,height:eb+qb,zIndex:10,display:Jb}),sa);vc=mb("span",null,u.labelStyle,Eb)}vc.innerHTML=l||a.lang.loading;if(!wc){Ja(Eb,{opacity:0,display:""});td(Eb,{opacity:u.style.opacity},{duration:u.showDuration});wc=true}};n.pointCount=0;n.counters=new ee;J()}function te(a){function b(V,n){var Ta={fill:bb.backgroundColor,stroke:bb.borderColor,"stroke-width":1};if(!sa){Ma[n]=f.g().css({cursor:"e-resize"}).attr({zIndex:3}).add();f.rect(-4.5,0,9,16,3,1).attr(Ta).add(Ma[n]);
f.path(["M",-1.5,4,"L",-1.5,12,"M",0.5,4,"L",0.5,12]).attr(Ta).add(Ma[n])}Ma[n].translate(Pa+$+parseInt(V,10),tb+Ia/2-8)}function d(V){if(!sa){ic[V]=f.g().add(Wb);f.rect(-0.5,-0.5,$+1,$+1,m.buttonBorderRadius,m.buttonBorderWidth).attr({stroke:m.buttonBorderColor,"stroke-width":m.buttonBorderWidth,fill:m.buttonBackgroundColor}).add(ic[V]);f.path(["M",$/2+(V?-1:1),$/2-3,"L",$/2+(V?-1:1),$/2+3,$/2+(V?2:-2),$/2]).attr({fill:m.buttonArrowColor}).add(ic[V])}V&&ic[V].attr({translateX:Xa-$})}function c(V,
n,Ta,Db){var ib=m.barBorderWidth;rb=tb+ga;Pa=a.plotLeft;Xa=a.plotWidth;j=Pa+$;Ta=C(Ta,q.translate(V));Db=C(Db,q.translate(n));if(sa&&q.getExtremes){V=a.xAxis[0].getExtremes();n=q.getExtremes();if(V.dataMin!==n.min||V.dataMax!==n.max)q.setExtremes(V.dataMin,V.dataMax)}r=parseInt(Ea(Ta,Db),10);y=parseInt(ja(Ta,Db),10);U=y-r;if(!sa){if(i){tc=f.rect().attr({fill:h.maskFill,zIndex:3}).add();hc=f.rect().attr({fill:h.maskFill,zIndex:3}).add();Va=f.path().attr({"stroke-width":gb,stroke:h.outlineColor,zIndex:3}).add()}if(t){Wb=
f.g().add();Ta=m.trackBorderWidth;sc=f.rect().attr({y:-Ta%2/2,fill:m.trackBackgroundColor,stroke:m.trackBorderColor,"stroke-width":Ta,r:m.trackBorderRadius||0,height:$}).add(Wb);uc=f.rect().attr({y:-ib%2/2,height:$,fill:m.barBackgroundColor,stroke:m.barBorderColor,"stroke-width":ib,rx:Xb,ry:Xb}).add(Wb);Lc=f.path().attr({stroke:m.rifleColor,"stroke-width":1}).add(Wb)}}if(i){tc.attr({x:j,y:tb,width:r,height:Ia});hc.attr({x:j+y,y:tb,width:Xa-y-2*$,height:Ia});Va.attr({d:["M",Pa,rb,"L",j+r-ga,rb,j+r-
ga,rb+ea,j+y+ga,rb+ea,j+y+ga,rb,Pa+Xa,rb]});b(r-ga,0);b(y+ga,1)}if(t){d(0);d(1);Wb.translate(Pa,N(rb+Ia));sc.attr({width:Xa});uc.attr({x:N($+r)+ib%2/2,width:U});ib=$+r+U/2-0.5;Lc.attr({d:[$a,ib-3,$/4,Ga,ib-3,2*$/3,$a,ib,$/4,Ga,ib,2*$/3,$a,ib+3,$/4,Ga,ib+3,2*$/3],visibility:U>12?Lb:Cb})}sa=true}function e(){ra(a.container,ve,function(V){V=a.tracker.normalizeMouseEvent(V);var n=V.chartX,Ta=V.chartY,Db=Hb?10:7;if(Ta>tb&&Ta<tb+Ia+$)if((Ta=!t||Ta<tb+Ia)&&na.abs(n-r-j)<Db){B=true;x=y}else if(Ta&&na.abs(n-
y-j)<Db){v=true;x=r}else if(n>j+r&&n<j+y){J=n;Ua=X.cursor;X.cursor="ew-resize";o=n-r}else if(n>Pa&&n<Pa+Xa){n=Ta?n-j-U/2:n<j?r-Ea(10,U):n>Pa+Xa-$?r+Ea(10,U):n<j+r?r-U:y;if(n<0)n=0;else if(n+U>Xa-2*$)n=Xa-U-2*$;a.xAxis[0].setExtremes(q.translate(n,true),q.translate(n+U,true),true,false)}V.preventDefault&&V.preventDefault()});ra(a.container,Ee,function(V){V=a.tracker.normalizeMouseEvent(V);V=V.chartX;if(V<j)V=j;else if(V>Pa+Xa-$)V=Pa+Xa-$;if(B){s=true;c(0,0,V-j,x)}else if(v){s=true;c(0,0,x,V-j)}else if(J){s=
true;if(V<o)V=o;else if(V>Xa+o-U-2*$)V=Xa+o-U-2*$;c(0,0,V-o,V-o+U)}});ra(document,Fe,function(){s&&a.xAxis[0].setExtremes(q.translate(r,true),q.translate(y,true),true,false);B=v=J=s=o=null;X.cursor=Ua})}var f=a.renderer,g=a.options,h=g.navigator,i=h.enabled,j,k,m=g.scrollbar,t=m.enabled,B,v,J,x,o,s,q,r,y,U,X=document.body.style,Ua,bb=h.handles,Ia=i?h.height:0,gb=h.outlineWidth,$=t?m.height:0,ea=Ia+$,Xb=m.barBorderRadius,tb=h.top||a.chartHeight-Ia-$-g.chart.spacingBottom,ga=gb/2,rb,Pa,Xa,sa;g=h.baseSeries;
var Sb=a.series[g]||typeof g==="string"&&a.get(g)||a.series[0],tc,hc,Va,Ma=[],Wb,sc,uc,Lc,ic=[];a.resetZoomEnabled=false;(function(){var V=a.xAxis.length,n=a.yAxis.length;a.extraBottomMargin=ea+h.margin;if(i){var Ta=Sb.options,Db,ib=Ta.data;Ta.data=null;Db=Y(Sb.options,h.series,{threshold:null,clip:false,enableMouseTracking:false,group:"nav",padXAxis:false,xAxis:V,yAxis:n,name:"Navigator",showInLegend:false});Ta.data=Db.data=ib;k=a.initSeries(Db);ra(Sb,"updatedData",function(){var Oa=Sb.xAxis.getExtremes(),
ac=Oa.max-Oa.min,Eb=Oa.max>=k.xData[k.xData.length-1],vc=Oa.min-ac<=k.xData[0];k.options.pointStart=Sb.xData[0];k.setData(Sb.options.data);if(Eb){Oa=Oa.dataMax;Sb.xAxis.setExtremes(Oa-ac,Oa)}else if(vc){Oa=Oa.dataMin;Sb.xAxis.setExtremes(Oa,Oa+ac)}else c(ja(Oa.min,Oa.dataMin),Ea(Oa.max,Oa.dataMax))});q=new a.Axis(Y(h.xAxis,{isX:true,type:"datetime",index:V,height:Ia,top:tb,offset:0,offsetLeft:$,offsetRight:-$,startOnTick:false,endOnTick:false,minPadding:0,maxPadding:0,zoomEnabled:false}));new a.Axis(Y(h.yAxis,
{alignTicks:false,height:Ia,top:tb,offset:0,index:n,zoomEnabled:false}))}else q={translate:function(Oa,ac){var Eb=Sb.xAxis.getExtremes(),vc=a.plotWidth-2*$,wc=Eb.dataMin;Eb=Eb.dataMax-wc;return ac?Oa*Eb/vc+wc:vc*(Oa-wc)/Eb}};e()})();return{render:c}}function se(a){function b(x,o,s){var q=a.xAxis[0],r=q&&q.getExtremes(),y,U=r&&r.dataMin,X=r&&r.dataMax,Ua,bb=q&&Ea(r.max,X);r=new Date(bb);y=o.type;o=o.count;var Ia,gb,$={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(!(U===null||
X===null)){if($[y]){Ia=$[y]*o;Ua=ja(bb-Ia,U)}else if(y==="month"){r.setMonth(r.getMonth()-o);Ua=ja(r.getTime(),U);Ia=2592E6*o}else if(y==="ytd"){r=new Date(0);y=new Date;gb=y.getFullYear();r.setFullYear(gb);String(gb)!==Gc("%Y",r)&&r.setFullYear(gb-1);Ua=gb=ja(U||0,r.getTime());y=y.getTime();bb=Ea(X||y,y)}else if(y==="year"){r.setFullYear(r.getFullYear()-o);Ua=ja(U,r.getTime());Ia=31536E6*o}else if(y==="all"&&q){Ua=U;bb=X}t[x]&&t[x].setState(2);if(q)setTimeout(function(){q.setExtremes(Ua,bb,C(s,1),
0);m=x},1);else{a.options.xAxis=Y(a.options.xAxis,{range:Ia,min:gb});m=x}}}function d(x,o){var s=x.hasFocus?"%Y-%m-%d":"%b %e, %Y";if(o)x.HCTime=o;x.value=Gc(s,x.HCTime)}function c(x){var o=x==="min",s;mb("span",{innerHTML:h[o?"rangeSelectorFrom":"rangeSelectorTo"]},v.labelStyle,i);s=mb("input",{name:x,className:"highcharts-range-selector",type:"text"},ca({width:"80px",height:"16px",border:"1px solid silver",marginLeft:"5px",marginRight:o?"5px":"0",textAlign:"center"},v.inputStyle),i);s.onfocus=s.onblur=
function(q){q=q||window.event;s.hasFocus=q.type==="focus";d(s)};s.onchange=function(){var q=s.value,r=Date.parse(q),y=a.xAxis[0].getExtremes();if(isNaN(r)){r=q.split("-");r=Date.UTC(la(r[0]),la(r[1])-1,la(r[2]))}if(!isNaN(r)&&(o&&r>y.dataMin&&r<k.HCTime||!o&&r<y.dataMax&&r>j.HCTime))a.xAxis[0].setExtremes(o?r:y.min,o?y.max:r)};return s}var e=a.renderer,f,g=a.container,h=Ra.lang,i,j,k,m,t=[],B,v,J=[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",
text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}];a.resetZoomEnabled=false;(function(){a.extraTopMargin=25;v=a.options.rangeSelector;B=v.buttons||J;m=v.selected;ra(g,ve,function(){j&&j.blur();k&&k.blur()});m!==ha&&B[m]&&b(m,B[m],false);ra(a,"load",function(){ra(a.xAxis[0],"setExtremes",function(){t[m]&&t[m].setState(0)})})})();return{render:function(x,o){var s=a.options.chart.style,q=v.buttonTheme,r=v.inputEnabled!==false,y=q&&q.states;if(!f){e.text(h.rangeSelectorZoom,a.plotLeft,
a.plotTop-10).css(v.labelStyle).add();A(B,function(U,X){t[X]=e.button(U.text,a.plotLeft+50+X*30,a.plotTop-25,function(){b(X,U);this.isActive=true},ca(q,{padding:1,r:0}),y&&y.hover,y&&y.select).attr({width:28,height:16}).css({textAlign:"center"}).add();m===X&&t[X].setState(2)});if(r){i=mb("div",null,{position:"relative",height:0,fontFamily:s.fontFamily,fontSize:s.fontSize},g.parentNode);i=mb("div",null,ca({position:"absolute",top:-a.chartHeight+a.plotTop-25+"px",right:a.chartWidth-a.plotLeft-a.plotWidth+
"px"},v.inputBoxStyle),i);j=c("min");k=c("max")}}if(r){d(j,x);d(k,o)}f=true}}}var Da=document,sb=window,na=Math,N=na.round,Kb=na.floor,ld=na.ceil,ja=na.max,Ea=na.min,nb=na.abs,Mb=na.cos,Vb=na.sin,lc=na.PI,we=lc*2/360,Mc=navigator.userAgent,Zc=/msie/i.test(Mc)&&!sb.opera,Vc=Da.documentMode===8,oe=/AppleWebKit/.test(Mc),re=/Firefox/.test(Mc),Uc=!!Da.createElementNS&&!!Da.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,Tc,Hb=Da.documentElement.ontouchstart!==undefined,xe={},Jd=0,Ob=
1,ed,Ra,Gc,cd,ud,ha,cc="div",Kc="absolute",qe="relative",Cb="hidden",Jc="highcharts-",Lb="visible",qb="px",Jb="none",$a="M",Ga="L",ye="rgba(192,192,192,"+(Uc?1.0E-6:0.0020)+")",Ib="",Tb="hover",Td="millisecond",Ud="second",Vd="minute",Wd="hour",Xd="day",Yd="week",Zd="month",$d="year",bd,wd,xd,zd,Oc,$c,ad,ae,be,yd,ce,de,S=sb.HighchartsAdapter,Fb=S||{},A=Fb.each,Nd=Fb.grep,Wc=Fb.map,Y=Fb.merge,ra=Fb.addEvent,Ub=Fb.removeEvent,Ha=Fb.fireEvent,td=Fb.animate,rd=Fb.stop,fb={};sb.Highcharts={};Gc=function(a,
b,d){function c(B,v){B=B.toString().replace(/^([0-9])$/,"0$1");if(v===3)B=B.toString().replace(/^([0-9]{2})$/,"0$1");return B}if(!M(b)||isNaN(b))return"Invalid date";a=C(a,"%Y-%m-%d %H:%M:%S");var e=new Date(b*Ob),f,g=e[xd](),h=e[zd](),i=e[Oc](),j=e[$c](),k=e[ad](),m=Ra.lang,t=m.weekdays;m=m.months;b={a:t[h].substr(0,3),A:t[h],d:c(i),e:i,b:m[j].substr(0,3),B:m[j],m:c(j+1),y:k.toString().substr(2,2),Y:k,H:c(g),I:c(g%12||12),l:g%12||12,M:c(e[wd]()),p:g<12?"AM":"PM",P:g<12?"am":"pm",S:c(e.getSeconds()),
L:c(b%1E3,3)};for(f in b)a=a.replace("%"+f,b[f]);return d?a.substr(0,1).toUpperCase()+a.substr(1):a};ee.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};S&&S.init&&S.init();if(!S&&sb.jQuery){var Nb=jQuery;A=function(a,b){for(var d=0,c=a.length;d<c;d++)if(b.call(a[d],a[d],d,a)===false)return d};Nd=Nb.grep;Wc=function(a,b){for(var d=[],c=0,e=a.length;c<e;c++)d[c]=b.call(a[c],a[c],c,a);return d};Y=function(){var a=arguments;return Nb.extend(true,
null,a[0],a[1],a[2],a[3])};ra=function(a,b,d){Nb(a).bind(b,d)};Ub=function(a,b,d){var c=Da.removeEventListener?"removeEventListener":"detachEvent";if(Da[c]&&!a[c])a[c]=function(){};Nb(a).unbind(b,d)};Ha=function(a,b,d,c){var e=Nb.Event(b),f="detached"+b;ca(e,d);if(a[b]){a[f]=a[b];a[b]=null}Nb(a).trigger(e);if(a[f]){a[b]=a[f];a[f]=null}c&&!e.isDefaultPrevented()&&c(e)};td=function(a,b,d){var c=Nb(a);if(b.d){a.toD=b.d;b.d=1}c.stop();c.animate(b,d)};rd=function(a){Nb(a).stop()};Nb.extend(Nb.easing,{easeOutQuad:function(a,
b,d,c,e){return-c*(b/=e)*(b-2)+d}});var Ge=jQuery.fx.step._default,He=jQuery.fx.prototype.cur;Nb.fx.step._default=function(a){var b=a.elem;b.attr?b.attr(a.prop,a.now):Ge.apply(this,arguments)};Nb.fx.step.d=function(a){var b=a.elem;if(!a.started){var d=ud.init(b,b.d,b.toD);a.start=d[0];a.end=d[1];a.started=true}b.attr("d",ud.step(a.start,a.end,a.pos,b.toD))};Nb.fx.prototype.cur=function(){var a=this.elem;return a.attr?a.attr(this.prop):He.apply(this,arguments)}}ud={init:function(a,b,d){b=b||"";var c=
a.shift,e=b.indexOf("C")>-1,f=e?7:3,g;b=b.split(" ");d=[].concat(d);var h,i,j=function(k){for(g=k.length;g--;)k[g]===$a&&k.splice(g+1,0,k[g+1],k[g+2],k[g+1],k[g+2])};if(e){j(b);j(d)}if(a.isArea){h=b.splice(b.length-6,6);i=d.splice(d.length-6,6)}if(c===1)d=[].concat(d).splice(0,f).concat(d);a.shift=0;if(b.length)for(a=d.length;b.length<a;){c=[].concat(b).splice(b.length-f,f);if(e){c[f-6]=c[f-2];c[f-5]=c[f-1]}b=b.concat(c)}if(h){b=b.concat(h);d=d.concat(i)}return[b,d]},step:function(a,b,d,c){var e=
[],f=a.length;if(d===1)e=c;else if(f===b.length&&d<1)for(;f--;){c=parseFloat(a[f]);e[f]=isNaN(c)?a[f]:d*parseFloat(b[f]-c)+c}else e=b;return e}};S={enabled:true,align:"center",x:0,y:15,style:{color:"#666",fontSize:"11px",lineHeight:"14px"}};Ra={colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July",
"August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:{duration:1E3},events:{},lineWidth:2,shadow:true,marker:{enabled:true,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:Y(S,
{enabled:false,y:-6,formatter:function(){return this.y}}),cropThreshold:300,showInLegend:true,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:true}},labels:{style:{position:Kc,color:"#3E576F"}},legend:{enabled:true,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:false,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer",color:"#000000"},itemHiddenStyle:{color:"#C0C0C0"},
itemCheckboxStyle:{position:Kc,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{fontWeight:"bold",position:qe,top:"1em"},showDuration:100,style:{position:Kc,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:Hb?25:10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",
cursor:"pointer"}},credits:{enabled:true,text:"Highstock Beta",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"10px"}}};var md={dateTimeLabelFormats:Yb(Td,"%H:%M:%S.%L",Ud,"%H:%M:%S",Vd,"%H:%M",Wd,"%H:%M",Xd,"%e. %b",Yd,"%e. %b",Zd,"%b '%y",$d,"%Y"),endOnTick:false,gridLineColor:"#C0C0C0",labels:S,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",
minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#6D869F",fontWeight:"bold"}},type:"linear"},Cd=Y(md,{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,
title:{rotation:270,text:"Y-values"},stackLabels:{enabled:false,formatter:function(){return this.total},style:S.style}}),Be={labels:{align:"right",x:-8,y:null},title:{rotation:270}},Ae={labels:{align:"left",x:8,y:null},title:{rotation:90}},ne={labels:{align:"center",x:0,y:14},title:{rotation:0}},ze=Y(ne,{labels:{y:-5}}),Qa=Ra.plotOptions;S=Qa.line;Qa.spline=Y(S);Qa.scatter=Y(S,{lineWidth:0,states:{hover:{lineWidth:0}}});Qa.area=Y(S,{threshold:0});Qa.areaspline=Y(Qa.area);Qa.column=Y(S,{borderColor:"#FFFFFF",
borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,padXAxis:true,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}},dataLabels:{y:null,verticalAlign:null},threshold:0});Qa.bar=Y(Qa.column,{dataLabels:{align:"left",x:5,y:0}});Qa.pie=Y(S,{borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function(){return this.point.name},
y:5},legendType:"point",marker:null,size:"75%",showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});fe();var mc=function(a){var b=[],d;(function(c){if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(c))b=[la(d[1]),la(d[2]),la(d[3]),parseFloat(d[4],10)];else if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))b=[la(d[1],16),la(d[2],16),la(d[3],16),1]})(a);return{get:function(c){return b&&!isNaN(b[0])?c===
"rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a},brighten:function(c){if(Xc(c)&&c!==0){var e;for(e=0;e<3;e++){b[e]+=la(c*255);if(b[e]<0)b[e]=0;if(b[e]>255)b[e]=255}}return this},setOpacity:function(c){b[3]=c;return this}}};fd.prototype={init:function(a,b){this.element=Da.createElementNS("http://www.w3.org/2000/svg",b);this.renderer=a},animate:function(a,b,d){if(b=C(b,cd,true)){b=Y(b);if(d)b.complete=d;td(this,a,b)}else{this.attr(a);d&&d()}},attr:function(a,b){var d=
this,c,e,f,g,h,i=d.element,j=i.nodeName,k=d.renderer,m,t=d.shadows,B,v=d;if(nc(a)&&M(b)){c=a;a={};a[c]=b}if(nc(a)){c=a;if(j==="circle")c={x:"cx",y:"cy"}[c]||c;else if(c==="strokeWidth")c="stroke-width";v=Aa(i,c)||d[c]||0;if(c!=="d"&&c!=="visibility")v=parseFloat(v)}else for(c in a){m=false;e=a[c];Ha(d,"setAttr",{key:c,value:e},function(J){f=J.result;if(M(f)&&f!==false)e=f;if(c==="d"){if(e&&e.join)e=e.join(" ");if(/(NaN| {2}|^$)/.test(e))e="M 0 0";d.d=e}else if(c==="x"&&j==="text"){for(g=0;g<i.childNodes.length;g++){h=
i.childNodes[g];Aa(h,"x")===Aa(i,"x")&&Aa(h,"x",e)}if(d.rotation)Aa(i,"transform","rotate("+d.rotation+" "+e+" "+la(a.y||Aa(i,"y"))+")")}else if(c==="fill")e=k.color(e,i,c);else if(j==="circle"&&(c==="x"||c==="y"))c={x:"cx",y:"cy"}[c]||c;else if(j==="rect"&&c==="r"){Aa(i,{rx:e,ry:e});m=true}else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign"){d[c]=e;d.updateTransform();m=true}else if(c==="stroke")e=k.color(e,i,c);else if(c==="dashstyle"){c="stroke-dasharray";e=e&&e.toLowerCase();
if(e==="solid")e=Jb;else if(e){e=e.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(g=e.length;g--;)e[g]=la(e[g])*a["stroke-width"];e=e.join(",")}}else if(c==="isTracker")d[c]=e;else if(c==="width")e=la(e);else if(c==="align"){c="text-anchor";e={left:"start",center:"middle",right:"end"}[e]}if(c==="strokeWidth")c=
"stroke-width";if(oe&&c==="stroke-width"&&e===0)e=1.0E-6;if(d.symbolName&&/^(x|y|r|start|end|innerR)/.test(c)){if(!B){d.symbolAttr(a);B=true}m=true}if(t&&/^(width|height|visibility|x|y|d|transform)$/.test(c))for(g=t.length;g--;)Aa(t[g],c,e);if((c==="width"||c==="height")&&j==="rect"&&e<0)e=0;if(c==="text"){d.textStr=e;d.added&&k.buildText(d)}else m||Aa(i,c,e);J.callback&&J.callback()})}return v},symbolAttr:function(a){var b=this;A(["x","y","r","start","end","width","height","innerR","anchorX","anchorY"],
function(d){b[d]=C(a[d],b[d])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path","url("+this.renderer.url+"#"+a.id+")")},crisp:function(a,b,d,c,e){var f,g={},h={},i;a=a||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;i=a%2/2;h.x=Kb(b||this.x||0)+i;h.y=Kb(d||this.y||0)+i;h.width=Kb((c||this.width||0)-2*i);h.height=Kb((e||this.height||0)-2*i);h.strokeWidth=a;for(f in h)if(this[f]!==h[f])this[f]=g[f]=h[f];return g},css:function(a){var b=
this.element;b=a&&a.width&&b.nodeName==="text";var d,c,e=function(f,g){return"-"+g.toLowerCase()};if(a&&a.color)a.fill=a.color;this.styles=a=ca(this.styles,a);if(Zc&&!Uc){b&&delete a.width;Ja(this.element,a)}else{for(d in a)c+=d.replace(/([A-Z])/g,e)+":"+a[d]+";";this.attr({style:c})}b&&this.added&&this.renderer.buildText(this);return this},on:function(a,b){var d=b;if(Hb&&a==="click"){a="touchstart";d=function(c){c.preventDefault();b()}}this.element["on"+a]=d;return this},translate:function(a,b){return this.attr({translateX:a,
translateY:b})},invert:function(){this.inverted=true;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,d=this.inverted,c=this.rotation,e=this.shadows,f=[];if(d){a+=this.attr("width");b+=this.attr("height")}if(a||b)f.push("translate("+a+","+b+")");if(d)f.push("rotate(90) scale(-1,1)");else c&&f.push("rotate("+c+" "+this.x+" "+this.y+")");if(f.length){Aa(this.element,"transform",f.join(" "));e&&A(e,function(g){Aa(g,"transform","translate("+
(a+1)+","+(b+1)+")")})}},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,d){if(a){this.alignOptions=a;this.alignByTranslate=b;d||this.renderer.alignedObjects.push(this)}else{a=this.alignOptions;b=this.alignByTranslate}d=C(d,this.renderer);var c=a.align,e=a.verticalAlign,f=(d.x||0)+(a.x||0),g=(d.y||0)+(a.y||0),h={};if(/^(right|center)$/.test(c))f+=(d.width-(a.width||0))/{right:1,center:2}[c];h[b?"translateX":"x"]=N(f);if(/^(bottom|middle)$/.test(e))g+=
(d.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=N(g);this[this.placed?"animate":"attr"](h);this.placed=true;this.alignAttr=h;return this},getBBox:function(){var a,b,d,c=this.rotation,e=c*we;try{a=ca({},this.element.getBBox())}catch(f){a={width:0,height:0}}b=a.width;d=a.height;if(c){a.width=nb(d*Vb(e))+nb(b*Mb(e));a.height=nb(d*Mb(e))+nb(b*Vb(e))}return a},show:function(){return this.attr({visibility:Lb})},hide:function(){return this.attr({visibility:Cb})},add:function(a){var b=
this.renderer,d=a||b,c=d.element||b.box,e=c.childNodes,f=this.element,g=Aa(f,"zIndex"),h;this.parentInverted=a&&a.inverted;this.textStr!==undefined&&b.buildText(this);if(g){d.handleZ=true;g=la(g)}if(d.handleZ)for(d=0;d<e.length;d++){a=e[d];b=Aa(a,"zIndex");if(a!==f&&(la(b)>g||!M(g)&&M(b))){c.insertBefore(f,a);h=true;break}}h||c.appendChild(f);this.added=true;Ha(this,"add");return this},destroy:function(){var a=this.element||{},b=this.shadows,d=this.box,c=a.parentNode,e;a.onclick=a.onmouseout=a.onmouseover=
a.onmousemove=null;rd(this);c&&c.removeChild(a);b&&A(b,function(f){(c=f.parentNode)&&c.removeChild(f)});d&&d.destroy();Yc(this.renderer.alignedObjects,this);for(e in this)delete this[e];return null},empty:function(){for(var a=this.element,b=a.childNodes,d=b.length;d--;)a.removeChild(b[d])},shadow:function(a,b){var d=[],c,e,f=this.element,g=this.parentInverted?"(-1,-1)":"(1,1)";if(a){for(c=1;c<=3;c++){e=f.cloneNode(0);Aa(e,{isShadow:"true",stroke:"rgb(0, 0, 0)","stroke-opacity":0.05*c,"stroke-width":7-
2*c,transform:"translate"+g,fill:Jb});b?b.element.appendChild(e):f.parentNode.insertBefore(e,f);d.push(e)}this.shadows=d}return this}};var sd=function(){this.init.apply(this,arguments)};sd.prototype={Element:fd,init:function(a,b,d,c){var e=location,f;f=this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});a.appendChild(f.element);this.box=f.element;this.boxWrapper=f;this.alignedObjects=[];this.url=Zc?"":e.href.replace(/#.*?$/,"");this.defs=this.createElement("defs").add();
this.forExport=c;this.setSize(b,d,false)},createElement:function(a){var b=new this.Element;b.init(this,a);return b},buildText:function(a){for(var b=a.element,d=C(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),c=b.childNodes,e=/style="([^"]+)"/,f=/href="([^"]+)"/,g=Aa(b,"x"),h=a.styles,i=re&&h&&h.HcDirection==="rtl"&&!this.forExport&&
la(Mc.split("Firefox/")[1])<4,j,k=h&&la(h.width),m=h&&h.lineHeight,t,B=c.length;B--;)b.removeChild(c[B]);k&&!a.added&&this.box.appendChild(b);A(d,function(v,J){var x,o=0,s;v=v.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");x=v.split("|||");A(x,function(q){if(q!==""||x.length===1){var r={},y=Da.createElementNS("http://www.w3.org/2000/svg","tspan");e.test(q)&&Aa(y,"style",q.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));if(f.test(q)){Aa(y,"onclick",'location.href="'+q.match(f)[1]+
'"');Ja(y,{cursor:"pointer"})}q=(q.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(i){j=[];for(B=q.length;B--;)j.push(q.charAt(B));q=j.join("")}y.appendChild(Da.createTextNode(q));if(o)r.dx=3;else r.x=g;if(!o){if(J){!Uc&&a.renderer.forExport&&Ja(y,{display:"block"});s=sb.getComputedStyle&&sb.getComputedStyle(t,null).getPropertyValue("line-height");if(!s||isNaN(s))s=m||t.offsetHeight||18;Aa(y,"dy",s)}t=y}Aa(y,r);b.appendChild(y);o++;if(k){q=q.replace(/-/g,"- ").split(" ");
for(var U,X=[];q.length||X.length;){U=b.getBBox().width;r=U>k;if(!r||q.length===1){q=X;X=[];if(q.length){y=Da.createElementNS("http://www.w3.org/2000/svg","tspan");Aa(y,{dy:m||16,x:g});b.appendChild(y);if(U>k)k=U}}else{y.removeChild(y.firstChild);X.unshift(q.pop())}q.length&&y.appendChild(Da.createTextNode(q.join(" ").replace(/- /g,"-")))}}}})})},button:function(a,b,d,c,e,f,g){var h=this.label(a,b,d),i=0,j,k,m,t,B;e=Y(Yb("stroke-width",1,"stroke","#999","fill",Yb("linearGradient",[0,0,0,14],"stops",
[[0,"#FFF"],[1,"#DDD"]]),"r",3,"padding",3,"style",Yb("color","black")),e);m=e.style;delete e.style;f=Y(e,Yb("stroke","#68A","fill",Yb("linearGradient",[0,0,0,14],"stops",[[0,"#FFF"],[1,"#ACF"]])),f);t=f.style;delete f.style;g=Y(e,Yb("stroke","#68A","fill",Yb("linearGradient",[0,0,0,14],"stops",[[0,"#9BD"],[1,"#CDF"]])),g);B=g.style;delete g.style;ra(h.element,"mouseenter",function(){h.attr(f).css(t)});ra(h.element,"mouseleave",function(){j=[e,f,g][i];k=[m,t,B][i];h.attr(j).css(k)});h.setState=function(v){if(i=
v)v===2&&h.attr(g).css(B);else h.attr(e).css(m)};return h.on("click",function(){c.call(h)}).attr(e).css(ca({cursor:"default"},m))},crispLine:function(a,b){if(a[1]===a[4])a[1]=a[4]=N(a[1])+b%2/2;if(a[2]===a[5])a[2]=a[5]=N(a[2])+b%2/2;return a},path:function(a){return this.createElement("path").attr({d:a,fill:Jb})},circle:function(a,b,d){a=bc(a)?a:{x:a,y:b,r:d};return this.createElement("circle").attr(a)},arc:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.r;c=a.innerR;e=a.start;f=a.end;a=a.x}return this.symbol("arc",
a||0,b||0,d||0,d||0,{innerR:c||0,start:e||0,end:f||0})},rect:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.width;c=a.height;e=a.r;f=a.strokeWidth;a=a.x}e=this.createElement("rect").attr({rx:e,ry:e,fill:Jb});return e.attr(e.crisp(f,a,b,ja(d,0),ja(c,0)))},setSize:function(a,b,d){var c=this.alignedObjects,e=c.length;this.width=a;this.height=b;for(this.boxWrapper[C(d,true)?"animate":"attr"]({width:a,height:b});e--;)c[e].align()},g:function(a){return this.createElement("g").attr(M(a)&&{"class":Jc+a})},image:function(a,
b,d,c,e){var f={preserveAspectRatio:Jb};arguments.length>1&&ca(f,{x:b,y:d,width:c,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,d,c,e,f){var g,h=this.symbols[a];h=h&&h(N(b),N(d),c,e,f);var i=/^url\((.*?)\)$/,j;if(h){g=this.path(h);ca(g,{symbolName:a,x:b,y:d,width:c,height:e});f&&ca(g,f)}else if(i.test(a)){var k=function(m,t){m.attr({width:t[0],
height:t[1]}).translate(-N(t[0]/2),-N(t[1]/2))};j=a.match(i)[1];a=xe[j];g=this.image(j).attr({x:b,y:d});if(a)k(g,a);else{g.attr({width:0,height:0});mb("img",{onload:function(){k(g,xe[j]=[this.width,this.height])},src:j})}}return g},symbols:{circle:function(a,b,d,c){var e=0.166*d;return[$a,a+d/2,b,"C",a+d+e,b,a+d+e,b+c,a+d/2,b+c,"C",a-e,b+c,a-e,b,a+d/2,b,"Z"]},square:function(a,b,d,c){return[$a,a,b,Ga,a+d,b,a+d,b+c,a,b+c,"Z"]},triangle:function(a,b,d,c){return[$a,a+d/2,b,Ga,a+d,b+c,a,b+c,"Z"]},"triangle-down":function(a,
b,d,c){return[$a,a,b,Ga,a+d,b,a+d/2,b+c,"Z"]},diamond:function(a,b,d,c){return[$a,a+d/2,b,Ga,a+d,b+c/2,a+d/2,b+c,a,b+c/2,"Z"]},arc:function(a,b,d,c,e){var f=e.start,g=e.end-1.0E-6;c=e.innerR;var h=Mb(f),i=Vb(f),j=Mb(g);g=Vb(g);e=e.end-f<lc?0:1;return[$a,a+d*h,b+d*i,"A",d,d,0,e,1,a+d*j,b+d*g,Ga,a+c*j,b+c*g,"A",c,c,0,e,0,a+c*h,b+c*i,"Z"]}},clipRect:function(a,b,d,c){var e=Jc+Jd++,f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=this.rect(a,b,d,c,0).add(f);a.id=e;return a},color:function(a,
b,d){var c,e=/^rgba/;if(a&&a.linearGradient){var f=this;b=a.linearGradient;d=Jc+Jd++;var g,h,i;g=f.createElement("linearGradient").attr({id:d,gradientUnits:"userSpaceOnUse",x1:b[0],y1:b[1],x2:b[2],y2:b[3]}).add(f.defs);A(a.stops,function(j){if(e.test(j[1])){c=mc(j[1]);h=c.get("rgb");i=c.get("a")}else{h=j[1];i=1}f.createElement("stop").attr({offset:j[0],"stop-color":h,"stop-opacity":i}).add(g)});return"url("+this.url+"#"+d+")"}else if(e.test(a)){c=mc(a);Aa(b,d+"-opacity",c.get("a"));return c.get("rgb")}else return a},
text:function(a,b,d){var c=Ra.chart.style;b=N(C(b,0));d=N(C(d,0));a=this.createElement("text").attr({x:b,y:d,text:a}).css({fontFamily:c.fontFamily,fontSize:c.fontSize});a.x=b;a.y=d;return a},label:function(a,b,d,c,e,f){function g(){m=(v===undefined||J===undefined||j.styles.textAlign)&&j.getBBox(true);var s=(v||m.width)+2*B,q=(J||m.height)+2*B,r;x=N(s*{left:0,center:0.5,right:1}[t]);r=e!==undefined&&{anchorX:e-b+x,anchorY:f-d};if(!k){j.box=k=c?i.symbol(c,0,0,s,q,r):i.rect(0,0,s,q,0,o["stroke-width"]);
k.add()}k.attr(Y({width:s,height:q},r,o));o=null}function h(s,q){if(k)k.attr(s,q);else o[s]=q}var i=this,j=i.text(a),k,m,t="left",B=2,v,J,x,o={};ra(j,"add",function(){g();var s=k.element,q=j.element,r=Aa(q,"zIndex");M(r)&&Aa(s,"zIndex",r);q.parentNode.insertBefore(s,q);j.attr({x:b,y:d})});ra(j,"setAttr",function(s){var q=s.key,r=s.value,y;if(q==="width"){v=r;y=false}else if(q==="height"){J=r;y=false}else if(q==="padding"){B=r;y=false}else if(q==="align")t=r;else if(q==="visibility"||q==="zIndex")h(q,
r);else if(q==="stroke"||q==="stroke-width"||q==="fill"||q==="r"){h(q,r);y=false}else if(q==="x"){s=j.styles.textAlign;h("translateX",r-x);if(t==="left"&&M(v)&&(s==="center"||s==="right"))r+={center:0.5,right:1}[s]*(v-m.width);y=N(r+{left:1,center:0,right:-1}[t]*B)}else if(q==="y"){h("translateY",r);y=N(r+la(j.styles.fontSize||12)*1.2)}else if(q==="text")s.callback=g;if(y!==ha)return y});j.txtToFront=j.toFront;return ca(j,{shadow:function(s){k.shadow(s);return j},toFront:function(){k.toFront();j.txtToFront()}})}};
Tc=sd;if(!Uc){Fb=yb(fd,{init:function(a,b){var d=["<",b,' filled="f" stroked="f"'],c=["position: ",Kc,";"];if(b==="shape"||b===cc)c.push("left:0;top:0;width:10px;height:10px;");if(Vc)c.push("visibility: ",b===cc?Cb:Lb);d.push(' style="',c.join(""),'"/>');if(b){d=b===cc||b==="span"||b==="img"?d.join(""):a.prepVML(d);this.element=mb(d)}this.renderer=a},add:function(a){var b=this.renderer,d=this.element,c=b.box;c=a?a.element||a:c;a&&a.inverted&&b.invertChild(d,c);Vc&&c.gVis===Cb&&Ja(d,{visibility:Cb});
c.appendChild(d);this.added=true;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();Ha(this,"add");return this},attr:function(a,b){var d=this,c,e,f,g,h=d.element||{},i=h.style,j=h.nodeName,k=d.renderer,m=d.symbolName,t,B,v=d.shadows,J,x=d;if(nc(a)&&M(b)){c=a;a={};a[c]=b}if(nc(a)){c=a;x=c==="strokeWidth"||c==="stroke-width"?d.strokeweight:d[c]}else for(c in a){e=a[c];J=false;Ha(d,"setAttr",{key:c,value:e},function(o){g=o.result;if(M(g)&&g!==false)e=g;if(m&&/^(x|y|r|start|end|width|height|innerR)/.test(c)){if(!B){d.symbolAttr(a);
B=true}J=true}else if(c==="d"){e=e||[];d.d=e.join(" ");f=e.length;for(var s=[];f--;)s[f]=Xc(e[f])?N(e[f]*10)-5:e[f]==="Z"?"x":e[f];e=s.join(" ")||"x";h.path=e;if(v)for(f=v.length;f--;)v[f].path=e;J=true}else if(c==="zIndex"||c==="visibility"){if(Vc&&c==="visibility"&&j==="DIV"){h.gVis=e;t=h.childNodes;for(f=t.length;f--;)Ja(t[f],{visibility:e});if(e===Lb)e=null}if(e)i[c]=e;J=true}else if(c==="width"||c==="height"){if(d.updateClipping){d[c]=e;d.updateClipping()}else i[c]=e;J=true}else if(/^(x|y)$/.test(c)){d[c]=
e;if(h.tagName==="SPAN")d.updateTransform();else i[{x:"left",y:"top"}[c]]=e}else if(c==="class")h.className=e;else if(c==="stroke"){e=k.color(e,h,c);c="strokecolor"}else if(c==="stroke-width"||c==="strokeWidth"){h.stroked=e?true:false;c="strokeweight";d[c]=e;if(Xc(e))e+=qb}else if(c==="dashstyle"){(h.getElementsByTagName("stroke")[0]||mb(k.prepVML(["<stroke/>"]),null,null,h))[c]=e||"solid";d.dashstyle=e;J=true}else if(c==="fill")if(j==="SPAN")i.color=e;else{h.filled=e!==Jb?true:false;e=k.color(e,
h,c);c="fillcolor"}else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="align"){if(c==="align")c="textAlign";d[c]=e;d.updateTransform();J=true}else if(c==="text"){this.bBox=null;h.innerHTML=e;J=true}if(v&&c==="visibility")for(f=v.length;f--;)v[f].style[c]=e;if(!J)if(Vc)try{h[c]=e}catch(q){console.log([h.tagName,c,e].join(", "))}else Aa(h,c,e);o.callback&&o.callback()})}return x},clip:function(a){var b=this,d=a.members;d.push(b);b.destroyClip=function(){Yc(d,b)};return b.css(a.getCSS(b.inverted))},
css:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width){delete a.width;this.textWidth=b;this.updateTransform()}this.styles=ca(this.styles,a);Ja(this.element,a);return this},destroy:function(){this.destroyClip&&this.destroyClip();fd.prototype.destroy.apply(this)},empty:function(){for(var a=this.element.childNodes,b=a.length,d;b--;){d=a[b];d.parentNode.removeChild(d)}},getBBox:function(a){var b=this.element,d=this.bBox;if(!d||a){if(b.nodeName==="text")b.style.position=Kc;d=this.bBox=
{x:b.offsetLeft,y:b.offsetTop,width:b.offsetWidth,height:b.offsetHeight}}return d},on:function(a,b){this.element["on"+a]=function(){var d=sb.event;d.target=d.srcElement;b(d)};return this},updateTransform:function(){if(this.added){var a=this,b=a.element,d=a.translateX||0,c=a.translateY||0,e=a.x||0,f=a.y||0,g=a.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=g&&g!=="left",j=a.shadows;if(d||c){Ja(b,{marginLeft:d,marginTop:c});j&&A(j,function(q){Ja(q,{marginLeft:d+1,marginTop:c+1})})}a.inverted&&
A(b.childNodes,function(q){a.renderer.invertChild(q,b)});if(b.tagName==="SPAN"){var k,m;j=a.rotation;var t;k=0;var B=1,v=0,J;t=la(a.textWidth);var x=a.xCorr||0,o=a.yCorr||0,s=[j,g,b.innerHTML,a.textWidth].join(",");if(s!==a.cTT){if(M(j)){k=j*we;B=Mb(k);v=Vb(k);Ja(b,{filter:j?["progid:DXImageTransform.Microsoft.Matrix(M11=",B,", M12=",-v,", M21=",v,", M22=",B,", sizingMethod='auto expand')"].join(""):Jb})}k=C(a.elemWidth,b.offsetWidth);m=C(a.elemHeight,b.offsetHeight);if(k>t){Ja(b,{width:t+qb,display:"block",
whiteSpace:"normal"});k=t}t=N((la(b.style.fontSize)||12)*1.2);x=B<0&&-k;o=v<0&&-m;J=B*v<0;x+=v*t*(J?1-h:h);o-=B*t*(j?J?h:1-h:1);if(i){x-=k*h*(B<0?-1:1);if(j)o-=m*h*(v<0?-1:1);Ja(b,{textAlign:g})}a.xCorr=x;a.yCorr=o}Ja(b,{left:e+x,top:f+o});a.cTT=s}}else this.alignOnAdd=true},shadow:function(a,b){var d=[],c,e=this.element,f=this.renderer,g,h=e.style,i,j=e.path;if(j&&typeof j.value!=="string")j="x";if(a){for(c=1;c<=3;c++){i=['<shape isShadow="true" strokeweight="',7-2*c,'" filled="false" path="',j,
'" coordsize="100,100" style="',e.style.cssText,'" />'];g=mb(f.prepVML(i),null,{left:la(h.left)+1,top:la(h.top)+1});i=['<stroke color="black" opacity="',0.05*c,'"/>'];mb(f.prepVML(i),null,null,g);b?b.element.appendChild(g):e.parentNode.insertBefore(g,e);d.push(g)}this.shadows=d}return this}});S=function(){this.init.apply(this,arguments)};S.prototype=Y(sd.prototype,{Element:Fb,isIE8:Mc.indexOf("MSIE 8.0")>-1,init:function(a,b,d){var c;this.alignedObjects=[];c=this.createElement(cc);a.appendChild(c.element);
this.box=c.element;this.boxWrapper=c;this.setSize(b,d,false);if(!Da.namespaces.hcv){Da.namespaces.add("hcv","urn:schemas-microsoft-com:vml");Da.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}},clipRect:function(a,b,d,c){var e=this.createElement();return ca(e,{members:[],left:a,top:b,width:d,height:c,getCSS:function(f){var g=this.top,h=this.left,i=h+this.width,j=g+this.height;g={clip:"rect("+N(f?h:g)+"px,"+N(f?j:
i)+"px,"+N(f?i:j)+"px,"+N(f?g:h)+"px)"};!f&&Vc&&ca(g,{width:i+qb,height:j+qb});return g},updateClipping:function(){A(e.members,function(f){f.css(e.getCSS(f.inverted))})}})},color:function(a,b,d){var c,e=/^rgba/;if(a&&a.linearGradient){var f,g,h=a.linearGradient,i,j,k,m;A(a.stops,function(t,B){if(e.test(t[1])){c=mc(t[1]);f=c.get("rgb");g=c.get("a")}else{f=t[1];g=1}if(B){k=f;m=g}else{i=f;j=g}});a=90-na.atan((h[3]-h[1])/(h[2]-h[0]))*180/lc;d=["<",d,' colors="0% ',i,",100% ",k,'" angle="',a,'" opacity="',
m,'" o:opacity2="',j,'" type="gradient" focus="100%" />'];mb(this.prepVML(d),null,null,b)}else if(e.test(a)&&b.tagName!=="IMG"){c=mc(a);d=["<",d,' opacity="',c.get("a"),'"/>'];mb(this.prepVML(d),null,null,b);return c.get("rgb")}else return a},prepVML:function(a){var b=this.isIE8;a=a.join("");if(b){a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />');a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')}else a=
a.replace("<","<hcv:");return a},text:function(a,b,d){var c=Ra.chart.style;return this.createElement("span").attr({text:a,x:N(b),y:N(d)}).css({whiteSpace:"nowrap",fontFamily:c.fontFamily,fontSize:c.fontSize})},path:function(a){return this.createElement("shape").attr({coordsize:"100 100",d:a})},circle:function(a,b,d){return this.symbol("circle").attr({x:a,y:b,r:d})},g:function(a){var b;if(a)b={className:Jc+a,"class":Jc+a};return this.createElement(cc).attr(b)},image:function(a,b,d,c,e){var f=this.createElement("img").attr({src:a});
arguments.length>1&&f.css({left:b,top:d,width:c,height:e});return f},rect:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.width;c=a.height;f=a.strokeWidth;a=a.x}var g=this.symbol("rect");g.r=e;return g.attr(g.crisp(f,a,b,ja(d,0),ja(c,0)))},invertChild:function(a,b){var d=b.style;Ja(a,{flip:"x",left:la(d.width)-10,top:la(d.height)-10,rotation:-90})},symbols:{arc:function(a,b,d,c,e){c=e.start;var f=e.end,g=Mb(c),h=Vb(c),i=Mb(f),j=Vb(f);e=e.innerR;var k=0.07/d,m=e&&0.1/e||0;if(f-c===0)return["x"];else if(2*
lc-f+c<k)i=-k;else if(f-c<m)i=Mb(c+m);return["wa",a-d,b-d,a+d,b+d,a+d*g,b+d*h,a+d*i,b+d*j,"at",a-e,b-e,a+e,b+e,a+e*i,b+e*j,a+e*g,b+e*h,"x","e"]},circle:function(a,b,d,c){return["wa",a,b,a+d,b+c,a+d,b+c/2,a+d,b+c/2,"e"]},rect:function(a,b,d,c,e){if(!M(e))return[];var f=a+d,g=b+c;d=Ea(e.r||0,d,c);return[$a,a+d,b,Ga,f-d,b,"wa",f-2*d,b,f,b+2*d,f-d,b,f,b+d,Ga,f,g-d,"wa",f-2*d,g-2*d,f,g,f,g-d,f-d,g,Ga,a+d,g,"wa",a,g-2*d,a+2*d,g,a+d,g,a,g-d,Ga,a,b+d,"wa",a,b,a+2*d,b+2*d,a,b+d,a+d,b,"x","e"]}}});Tc=S}gd.prototype.callbacks=
[];var Nc=function(){};Nc.prototype={init:function(a,b,d){var c=a.chart.counters;this.series=a;this.applyOptions(b,d);this.pointAttr={};if(a.options.colorByPoint){b=a.chart.options.colors;if(!this.options)this.options={};this.color=this.options.color=this.color||b[c.color++];c.wrapColor(b.length)}a.chart.pointCount++;return this},applyOptions:function(a,b){var d=this.series,c=typeof a;this.config=a;if(c==="number"||a===null)this.y=a;else if(typeof a[0]==="number"){this.x=a[0];this.y=a[1]}else if(c===
"object"&&typeof a.length!=="number"){ca(this,a);this.options=a}else if(typeof a[0]==="string"){this.name=a[0];this.y=a[1]}if(this.x===ha)this.x=b===ha?d.autoIncrement():b},destroy:function(){var a=this.series,b;a.chart.pointCount--;this===a.chart.hoverPoint&&this.onMouseOut();a.chart.hoverPoints=null;if(this.graphic){Ub(this);this.destroyElements()}this.legendItem&&this.series.chart.legend.destroyItem(this);for(b in this)this[b]=null},destroyElements:function(){for(var a=["graphic","tracker","dataLabel",
"group","connector"],b,d=5;d--;){b=a[d];if(this[b])this[b]=this[b].destroy()}},getLabelConfig:function(){return{x:this.category,y:this.y,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},select:function(a,b){var d=this,c=d.series.chart;d.selected=a=C(a,!d.selected);d.firePointEvent(a?"select":"unselect");d.setState(a&&"select");b||A(c.getSelectedPoints(),function(e){if(e.selected&&e!==d){e.selected=false;e.setState(Ib);e.firePointEvent("unselect")}})},onMouseOver:function(){var a=
this.series,b=a.chart,d=b.tooltip,c=b.hoverPoint;c&&c!==this&&c.onMouseOut();this.firePointEvent("mouseOver");if(d&&(!d.shared||a.noSharedTooltip))d.refresh(this);this.setState(Tb);b.hoverPoint=this},onMouseOut:function(){this.firePointEvent("mouseOut");this.setState();this.series.chart.hoverPoint=null},tooltipFormatter:function(a){var b=this.series;return['<span style="color:'+b.color+'">',this.name||b.name,"</span>: ",!a?"<b>x = "+(this.name||this.x)+",</b> ":"","<b>",!a?"y = ":"",this.y,"</b>"].join("")},
update:function(a,b,d){var c=this,e=c.series,f=c.graphic,g,h=e.data,i=h.length,j=e.chart;b=C(b,true);c.firePointEvent("update",{options:a},function(){c.applyOptions(a);if(bc(a)){e.getAttribs();f&&f.attr(c.pointAttr[e.state])}for(g=0;g<i;g++)if(h[g]===c){e.xData[g]=c.x;e.yData[g]=c.y;e.options.data[g]=a;break}e.isDirty=true;e.isDirtyData=true;b&&j.redraw(d)})},remove:function(a,b){var d=this,c=d.series,e=c.chart,f,g=c.data,h=g.length;xc(b,e);a=C(a,true);d.firePointEvent("remove",null,function(){for(f=
0;f<h;f++)if(g[f]===d){g.splice(f,1);c.options.data.splice(f,1);c.xData.splice(f,1);c.yData.splice(f,1);break}d.destroy();c.isDirty=true;c.isDirtyData=true;a&&e.redraw()})},firePointEvent:function(a,b,d){var c=this,e=this.series.options;if(e.point.events[a]||c.options&&c.options.events&&c.options.events[a])this.importEvents();if(a==="click"&&e.allowPointSelect)d=function(f){c.select(null,f.ctrlKey||f.metaKey||f.shiftKey)};Ha(this,a,b,d)},importEvents:function(){if(!this.hasImportedEvents){var a=Y(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)ra(this,b,a[b]);this.hasImportedEvents=true}},setState:function(a){var b=this.series,d=b.options.states,c=Qa[b.type].marker&&b.options.marker,e=c&&!c.enabled,f=c&&c.states[a],g=f&&f.enabled===false,h=b.stateMarkerGraphic,i=b.chart,j=this.pointAttr;a=a||Ib;if(!(a===this.state||this.selected&&a!=="select"||d[a]&&d[a].enabled===false||a&&(g||e&&!f.enabled))){if(this.graphic)this.graphic.attr(j[a]);else{if(a){if(!h){d=c.radius;b.stateMarkerGraphic=h=i.renderer.symbol(b.symbol,
-d,-d,2*d,2*d).attr(j[a]).add(b.group)}h.translate(this.plotX,this.plotY)}if(h)h[a?"show":"hide"]()}this.state=a}}};var xb=function(){};xb.prototype={isCartesian:true,type:"line",pointClass:Nc,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a,b){var d,c;c=a.series.length;this.chart=a;b=this.setOptions(b);ca(this,{index:c,options:b,name:b.name||"Series "+(c+1),state:Ib,pointAttr:{},visible:b.visible!==false,selected:b.selected===true});c=
b.events;for(d in c)ra(this,d,c[d]);if(c&&c.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=true;this.getColor();this.getSymbol();this.setData(b.data,false)},autoIncrement:function(){var a=this.options,b=this.xIncrement;b=C(b,a.pointStart,0);this.pointInterval=C(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],d=this.points;A(d,function(c,e){if(c.y===null){e>a+1&&b.push(d.slice(a+1,
e));a=e}else e===d.length-1&&b.push(d.slice(a+1,e+1))});this.segments=b},setOptions:function(a){var b=this.chart.options.plotOptions,d=a.data;a.data=null;a=Y(b[this.type],b.series,a);a.data=d;return a},getColor:function(){var a=this.chart.options.colors,b=this.chart.counters;this.color=this.options.color||a[b.color++]||"#0000ff";b.wrapColor(a.length)},getSymbol:function(){var a=this.chart.options.symbols,b=this.chart.counters;this.symbol=this.options.marker.symbol||a[b.symbol++];b.wrapSymbol(a.length)},
addPoint:function(a,b,d,c){var e=this.data,f=this.graph,g=this.area,h=this.chart,i=this.xData,j=this.yData,k=f.shift||0,m=this.options.data;xc(c,h);if(f&&d)f.shift=k+1;if(g){g.shift=k+1;g.isArea=true}b=C(b,true);c={series:this};this.pointClass.prototype.applyOptions.apply(c,[a]);i.push(c.x);j.push(c.y);m.push(a);if(d)if(e[0])e[0].remove(false);else{e.shift();i.shift();j.shift();m.shift()}this.getAttribs();this.isDirtyData=this.isDirty=true;b&&h.redraw()},setData:function(a,b){var d=this.points,c=
this.options,e=this.initialColor,f=this.chart;this.xIncrement=null;if(M(e))f.counters.color=e;e=[];var g=[],h=a.length,i;if(h>(c.turboThreshold||1E3))if(Xc(a[0])){i=C(c.pointStart,0);var j=C(c.pointInterval,1);for(c=0;c<h;c++){e[c]=i;g[c]=a[c];i+=j}this.xIncrement=i}else{if(a[0].constructor===Array)if(this.valueCount===4)for(c=0;c<h;c++){i=a[c];e[c]=i[0];g[c]=i.slice(1,5)}else for(c=0;c<h;c++){i=a[c];e[c]=i[0];g[c]=i[1]}}else for(c=0;c<h;c++){i={series:this};this.pointClass.prototype.applyOptions.apply(i,
[a[c]]);e[c]=i.x;g[c]=i.y}this.data=null;this.options.data=a;this.xData=e;this.yData=g;for(c=d&&d.length||0;c--;)d[c].destroy();this.isDirty=this.isDirtyData=f.isDirtyBox=true;C(b,true)&&f.redraw(false)},remove:function(a,b){var d=this,c=d.chart;a=C(a,true);if(!d.isRemoving){d.isRemoving=true;Ha(d,"remove",null,function(){d.destroy();c.isDirtyLegend=c.isDirtyBox=true;a&&c.redraw(b)})}d.isRemoving=false},processData:function(){var a=this.xData,b=this.yData,d=a.length,c=0,e,f=this.options.cropThreshold;
if(!f||d>f){e=this.xAxis.getExtremes();f=e.min;var g=e.max,h=d-1;if(a[0]<f||a[h]>g){for(e=0;e<d;e++)if(a[e]>=f){c=ja(0,e-1);break}for(;e<d;e++)if(a[e]>g){h=e+1;break}a=a.slice(c,h);b=b.slice(c,h)}}this.cropStart=c;this.processedXData=a;this.processedYData=b},generatePoints:function(){var a=this.options.data,b=this.data,d,c=this.processedXData,e=this.processedYData,f=this.pointClass,g=c.length,h=this.cropStart||0,i,j=this.hasGroupedData,k=[],m;if(!b&&!j){b=[];b.length=a.length;b=this.data=b}for(m=
0;m<g;m++){i=h+m;if(j)k[m]=(new f).init(this,[c[m]].concat(oc(e[m])));else{if(b[i])i=b[i];else b[i]=i=(new f).init(this,a[i],c[m]);k[m]=i}}if(b&&g!==(d=b.length))for(m=0;m<d;m++){if(m===h&&!j)m+=g;b[m]&&b[m].destroyElements()}this.data=b;this.points=k},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.chart,b=this.options.stacking,d=this.xAxis,c=d.categories,e=this.yAxis,f=this.points,g=f.length,h=d.leastDistance,i;for(i=0;i<g;i++){var j=f[i],k=j.x,m=j.y,
t=j.low,B=e.stacks[(m<0?"-":"")+this.stackKey];j.plotX=this.xAxis.translate(k);if(b&&this.visible&&B&&B[k]){t=B[k];k=t.total;t.cum=t=t.cum-m;m=t+m;if(b==="percent"){t=k?t*100/k:0;m=k?m*100/k:0}j.percentage=k?j.y*100/k:0;j.stackTotal=k}if(M(t))j.yBottom=e.translate(t,0,1,0,1);if(m!==null)j.plotY=e.translate(m,0,1,0,1);j.clientX=a.inverted?a.plotHeight-j.plotX:j.plotX;j.category=c&&c[j.x]!==ha?c[j.x]:j.x;if(this.getDistance&&i){j=nb(j.plotX-f[i-1].plotX);h=h===ha?j:Ea(j,h)}}d.leastDistance=h;this.getSegments()},
setTooltipPoints:function(a){var b=this.chart,d=b.inverted,c=[];b=N((d?b.plotTop:b.plotLeft)+b.plotSizeX);var e,f;e=this.xAxis;var g,h,i=[];if(a)this.tooltipPoints=null;A(this.segments||this.points,function(j){c=c.concat(j)});if(e&&e.reversed)c=c.reverse();a=c.length;for(h=0;h<a;h++){g=c[h];e=c[h-1]?c[h-1]._high+1:0;for(f=g._high=c[h+1]?Kb((g.plotX+(c[h+1]?c[h+1].plotX:b))/2):b;e<=f;)i[d?b-e++:e++]=g}this.tooltipPoints=i},onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(!(!Hb&&a.mouseIsDown)){b&&
b!==this&&b.onMouseOut();this.options.events.mouseOver&&Ha(this,"mouseOver");this.setState(Tb);a.hoverSeries=this}},onMouseOut:function(){var a=this.options,b=this.chart,d=b.tooltip,c=b.hoverPoint;c&&c.onMouseOut();this&&a.events.mouseOut&&Ha(this,"mouseOut");d&&!a.stickyTracking&&d.hide();this.setState();b.hoverSeries=null},animate:function(a){var b=this.chart,d=this.clipRect,c=this.options.animation;if(c&&!bc(c))c={};if(a){if(!d.isAnimating){d.attr("width",0);d.isAnimating=true}}else{d.animate({width:b.plotSizeX},
c);this.animate=null}},drawPoints:function(){var a,b=this.points,d=this.chart,c,e,f,g,h,i;if(this.options.marker.enabled)for(f=b.length;f--;){g=b[f];c=g.plotX;e=g.plotY;i=g.graphic;if(e!==ha&&!isNaN(e)){a=g.pointAttr[g.selected?"select":Ib];h=a.r;if(i)i.animate({x:c-h,y:e-h,width:2*h,height:2*h});else g.graphic=d.renderer.symbol(C(g.marker&&g.marker.symbol,this.symbol),c-h,e-h,2*h,2*h).attr(a).add(this.group)}}},convertAttribs:function(a,b,d,c){var e=this.pointAttrToOptions,f,g,h={};a=a||{};b=b||
{};d=d||{};c=c||{};for(f in e){g=e[f];h[f]=C(a[g],b[f],d[f],c[f])}return h},getAttribs:function(){var a=this,b=Qa[a.type].marker?a.options.marker:a.options,d=b.states,c=d[Tb],e,f=a.color,g={stroke:f,fill:f},h=a.points,i=[],j,k=a.pointAttrToOptions,m;if(a.options.marker){c.radius=c.radius||b.radius+2;c.lineWidth=c.lineWidth||b.lineWidth+1}else c.color=c.color||mc(c.color||f).brighten(c.brightness).get();i[Ib]=a.convertAttribs(b,g);A([Tb,"select"],function(t){i[t]=a.convertAttribs(d[t],i[Ib])});a.pointAttr=
i;for(f=h.length;f--;){g=h[f];if((b=g.options&&g.options.marker||g.options)&&b.enabled===false)b.radius=0;e=false;if(g.options)for(m in k)if(M(b[k[m]]))e=true;if(e){j=[];d=b.states||{};e=d[Tb]=d[Tb]||{};if(!a.options.marker)e.color=mc(e.color||g.options.color).brighten(e.brightness||c.brightness).get();j[Ib]=a.convertAttribs(b,i[Ib]);j[Tb]=a.convertAttribs(d[Tb],i[Tb],j[Ib]);j.select=a.convertAttribs(d.select,i.select,j[Ib])}else j=i;g.pointAttr=j}},destroy:function(){var a=this,b=a.chart,d=/\/5[0-9\.]+ (Safari|Mobile)\//.test(Mc),
c,e,f=a.data||[],g,h;Ub(a);a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;A(["area","graph","dataLabelsGroup","group","tracker"],function(i){if(a[i]){c=d&&i==="group"?"hide":"destroy";a[i][c]()}});if(b.hoverSeries===a)b.hoverSeries=null;Yc(b.series,a);for(h in a)delete a[h]},drawDataLabels:function(){if(this.options.dataLabels.enabled){var a=this,b,d,c=a.points,e=a.options.dataLabels,f,g=a.dataLabelsGroup,h=a.chart,i=h.inverted,j=a.type,
k;k=a.options.stacking;var m=j==="column"||j==="bar",t=e.verticalAlign===null,B=e.y===null;if(m)if(k){if(t)e=Y(e,{verticalAlign:"middle"});if(B)e=Y(e,{y:{top:14,middle:4,bottom:-6}[e.verticalAlign]})}else{if(t)e=Y(e,{verticalAlign:"top"});if(B)e=Y(e,{y:-6})}if(!g)g=a.dataLabelsGroup=h.renderer.g("data-labels").attr({visibility:a.visible?Lb:Cb,zIndex:6}).translate(h.plotLeft,h.plotTop).add();k=e.color;if(k==="auto")k=null;e.style.color=C(k,a.color);A(c,function(v){var J=v.barX,x=J&&J+v.barW/2||v.plotX||
-999,o=C(v.plotY,-999),s=v.dataLabel,q=e.align,r=B?v.y>0?-6:12:e.y;f=e.formatter.call(v.getLabelConfig());b=(i?h.plotWidth-o:x)+e.x;d=(i?h.plotHeight-x:o)+r;if(j==="column")b+={left:-1,right:1}[q]*v.barW/2||0;if(s){if(i&&!e.y)d=d+la(s.styles.lineHeight)*0.9-s.getBBox().height/2;s.attr({text:f}).animate({x:b,y:d})}else if(M(f)){s=v.dataLabel=h.renderer.text(f,b,d).attr({align:q,rotation:e.rotation,zIndex:1}).css(e.style).add(g);i&&!e.y&&s.attr({y:d+la(s.styles.lineHeight)*0.9-s.getBBox().height/2})}if(m&&
a.options.stacking){x=v.barY;o=v.barW;v=v.barH;s.align(e,null,{x:i?h.plotWidth-x-v:J,y:i?h.plotHeight-J-o:x,width:i?v:o,height:i?o:v})}})}},drawGraph:function(){var a=this,b=a.options,d=a.graph,c=[],e,f=a.area,g=a.group,h=b.lineColor||a.color,i=b.lineWidth,j=b.dashStyle,k,m=a.chart.renderer,t=a.yAxis.getThreshold(b.threshold),B=/^area/.test(a.type),v=[],J=[];A(a.segments,function(x){k=[];A(x,function(r,y){if(a.getPointSpline)k.push.apply(k,a.getPointSpline(x,r,y));else{k.push(y?Ga:$a);y&&b.step&&
k.push(r.plotX,x[y-1].plotY);k.push(r.plotX,r.plotY)}});if(x.length>1)c=c.concat(k);else v.push(x[0]);if(B){var o=[],s,q=k.length;for(s=0;s<q;s++)o.push(k[s]);q===3&&o.push(Ga,k[1],k[2]);if(b.stacking&&a.type!=="areaspline")for(s=x.length-1;s>=0;s--)o.push(x[s].plotX,x[s].yBottom);else o.push(Ga,x[x.length-1].plotX,t,Ga,x[0].plotX,t);J=J.concat(o)}});a.graphPath=c;a.singlePoints=v;if(B){e=C(b.fillColor,mc(a.color).setOpacity(b.fillOpacity||0.75).get());if(f)f.animate({d:J});else a.area=a.chart.renderer.path(J).attr({fill:e}).add(g)}if(d)d.animate({d:c});
else if(i){d={stroke:h,"stroke-width":i};if(j)d.dashstyle=j;a.graph=m.path(c).attr(d).add(g).shadow(b.shadow)}},render:function(){var a=this,b=a.chart,d,c,e=a.options,f=e.clip!==false,g=e.animation,h=g&&a.animate;g=h?g&&g.duration||500:0;var i=a.clipRect;c=b.renderer;if(!i){i=a.clipRect=!b.hasRendered&&b.clipRect?b.clipRect:c.clipRect(0,0,b.plotSizeX,b.plotSizeY);if(!b.clipRect)b.clipRect=i}if(!a.group){d=a.group=c.g("series");if(b.inverted){c=function(){d.attr({width:b.plotWidth,height:b.plotHeight}).invert()};
c();ra(b,"resize",c)}f&&d.clip(a.clipRect);d.attr({visibility:a.visible?Lb:Cb,zIndex:e.zIndex}).translate(a.xAxis.left,a.yAxis.top).add(b.seriesGroup)}a.drawDataLabels();h&&a.animate(true);a.getAttribs();a.drawGraph&&a.drawGraph();a.drawPoints();a.options.enableMouseTracking!==false&&a.drawTracker();h&&a.animate();setTimeout(function(){i.isAnimating=false;if((d=a.group)&&i!==b.clipRect&&i.renderer){if(f)d.clip(a.clipRect=b.clipRect);i.destroy()}},g);a.isDirty=a.isDirtyData=false},redraw:function(){var a=
this.chart,b=this.group;if(b){a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight});b.animate({translateX:this.xAxis.left,translateY:this.yAxis.top})}this.translate();this.setTooltipPoints(true);this.isDirtyData&&Ha(this,"updatedData");this.render()},setState:function(a){var b=this.options,d=this.graph,c=b.states;b=b.lineWidth;a=a||Ib;if(this.state!==a){this.state=a;if(!(c[a]&&c[a].enabled===false)){if(a)b=c[a].lineWidth||b+1;if(d&&!d.dashstyle)d.attr({"stroke-width":b},a?0:500)}}},setVisible:function(a,
b){var d=this.chart,c=this.legendItem,e=this.group,f=this.tracker,g=this.dataLabelsGroup,h,i=this.points,j=d.options.chart.ignoreHiddenSeries;h=this.visible;h=(this.visible=a=a===ha?!h:a)?"show":"hide";e&&e[h]();if(f)f[h]();else for(e=i.length;e--;){f=i[e];f.tracker&&f.tracker[h]()}g&&g[h]();c&&d.legend.colorizeItem(this,a);this.isDirty=true;this.options.stacking&&A(d.series,function(k){if(k.options.stacking&&k.visible)k.isDirty=true});if(j)d.isDirtyBox=true;b!==false&&d.redraw();Ha(this,h)},show:function(){this.setVisible(true)},
hide:function(){this.setVisible(false)},select:function(a){this.selected=a=a===ha?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;Ha(this,a?"select":"unselect")},drawTracker:function(){var a=this,b=a.options,d=[].concat(a.graphPath),c=d.length,e=a.chart,f=e.options.tooltip.snap,g=a.tracker,h=b.cursor;h=h&&{cursor:h};var i=a.singlePoints,j;if(c)for(j=c+1;j--;){d[j]===$a&&d.splice(j+1,0,d[j+1]-f,d[j+2],Ga);if(j&&d[j]===$a||j===c)d.splice(j,0,Ga,d[j-2]+f,d[j-1])}for(j=0;j<i.length;j++){c=i[j];
d.push($a,c.plotX-f,c.plotY,Ga,c.plotX+f,c.plotY)}if(g)g.attr({d:d});else a.tracker=e.renderer.path(d).attr({isTracker:true,stroke:ye,fill:Jb,"stroke-width":b.lineWidth+2*f,visibility:a.visible?Lb:Cb,zIndex:1}).on(Hb?"touchstart":"mouseover",function(){e.hoverSeries!==a&&a.onMouseOver()}).on("mouseout",function(){b.stickyTracking||a.onMouseOut()}).css(h).add(e.trackerGroup)}};S=yb(xb);fb.line=S;S=yb(xb,{type:"area",useThreshold:true});fb.area=S;S=yb(xb,{type:"spline",getPointSpline:function(a,b,d){var c=
b.plotX,e=b.plotY,f=a[d-1],g=a[d+1],h,i,j,k;if(d&&d<a.length-1){a=f.plotY;j=g.plotX;g=g.plotY;var m;h=(1.5*c+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*c+j)/2.5;k=(1.5*e+g)/2.5;m=(k-i)*(j-c)/(j-h)+e-k;i+=m;k+=m;if(i>a&&i>e){i=ja(a,e);k=2*e-i}else if(i<a&&i<e){i=Ea(a,e);k=2*e-i}if(k>g&&k>e){k=ja(g,e);i=2*e-k}else if(k<g&&k<e){k=Ea(g,e);i=2*e-k}b.rightContX=j;b.rightContY=k}if(d){b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||c,i||e,c,e];f.rightContX=f.rightContY=null}else b=[$a,c,e];return b}});fb.spline=
S;S=yb(S,{type:"areaspline",useThreshold:true});fb.areaspline=S;var vd=yb(xb,{type:"column",useThreshold:true,getDistance:true,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},init:function(){xb.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&A(b.series,function(d){if(d.type===a.type)d.isDirty=true})},translate:function(){var a=this,b=a.chart,d=a.options,c=d.stacking,e=d.borderWidth,f=0,g=a.xAxis,h=g.reversed,i=g.categories,
j={},k,m;xb.prototype.translate.apply(a);A(b.series,function(r){if(r.type===a.type&&r.visible&&a.options.group===r.options.group){if(r.options.stacking){k=r.stackKey;if(j[k]===ha)j[k]=f++;m=j[k]}else m=f++;r.columnIndex=m}});var t=a.points;g=nb(C(g.leastDistance,b.plotSizeX/(i&&i.length||1)));i=g*d.groupPadding;var B=(g-2*i)/f,v=d.pointWidth,J=M(v)?(B-v)/2:B*d.pointPadding,x=ld(ja(C(v,B-2*J),1)),o=J+(i+((h?f-a.columnIndex:a.columnIndex)||0)*B-g/2)*(h?-1:1),s=a.yAxis.getThreshold(d.threshold),q=C(d.minPointLength,
5);A(t,function(r){var y=r.plotY,U=r.yBottom||s,X=r.plotX+o,Ua=ld(Ea(y,U)),bb=ld(ja(y,U)-Ua),Ia=a.yAxis.stacks[(r.y<0?"-":"")+a.stackKey],gb;c&&a.visible&&Ia&&Ia[r.x]&&Ia[r.x].setOffset(o,x);if(nb(bb)<q){if(q){bb=q;Ua=nb(Ua-s)>q?U-q:s-(y<=s?q:0)}gb=Ua-3}ca(r,{barX:X,barY:Ua,barW:x,barH:bb});r.shapeType="rect";y=ca(b.renderer.Element.prototype.crisp.apply({},[e,X,Ua,x,bb]),{r:d.borderRadius});if(e%2){y.y-=1;y.height+=1}r.shapeArgs=y;r.trackerArgs=M(gb)&&Y(r.shapeArgs,{height:ja(6,bb+3),y:gb})})},getSymbol:function(){},
drawGraph:function(){},drawPoints:function(){var a=this,b=a.options,d=a.chart.renderer,c,e;A(a.points,function(f){var g=f.plotY;if(g!==ha&&!isNaN(g)&&f.y!==null){c=f.graphic;e=f.shapeArgs;if(c){rd(c);c.animate(e)}else f.graphic=c=d[f.shapeType](e).attr(f.pointAttr[f.selected?"select":Ib]).add(a.group).shadow(b.shadow)}})},drawTracker:function(){var a=this,b=a.chart,d=b.renderer,c,e,f=+new Date,g=a.options.cursor,h=g&&{cursor:g},i;A(a.points,function(j){e=j.tracker;c=j.trackerArgs||j.shapeArgs;delete c.strokeWidth;
if(j.y!==null)if(e)e.attr(c);else j.tracker=d[j.shapeType](c).attr({isTracker:f,fill:ye,visibility:a.visible?Lb:Cb,zIndex:1}).on(Hb?"touchstart":"mouseover",function(k){i=k.relatedTarget||k.fromElement;b.hoverSeries!==a&&Aa(i,"isTracker")!==f&&a.onMouseOver();j.onMouseOver()}).on("mouseout",function(k){if(!a.options.stickyTracking){i=k.relatedTarget||k.toElement;Aa(i,"isTracker")!==f&&a.onMouseOut()}}).css(h).add(j.group||b.trackerGroup)})},animate:function(a){var b=this,d=b.points;if(!a){A(d,function(c){var e=
c.graphic;c=c.shapeArgs;if(e){e.attr({height:0,y:b.yAxis.translate(0,0,1)});e.animate({height:c.height,y:c.y},b.options.animation)}});b.animate=null}},remove:function(){var a=this,b=a.chart;b.hasRendered&&A(b.series,function(d){if(d.type===a.type)d.isDirty=true});xb.prototype.remove.apply(a,arguments)}});fb.column=vd;S=yb(vd,{type:"bar",init:function(a){a.inverted=this.inverted=true;vd.prototype.init.apply(this,arguments)}});fb.bar=S;S=yb(xb,{type:"scatter",translate:function(){var a=this;xb.prototype.translate.apply(a);
A(a.points,function(b){b.shapeType="circle";b.shapeArgs={x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}})},drawTracker:function(){var a=this,b=a.options.cursor,d=b&&{cursor:b},c;A(a.points,function(e){(c=e.graphic)&&c.attr({isTracker:true}).on("mouseover",function(){a.onMouseOver();e.onMouseOver()}).on("mouseout",function(){a.options.stickyTracking||a.onMouseOut()}).css(d)})}});fb.scatter=S;S=yb(Nc,{init:function(){Nc.prototype.init.apply(this,arguments);var a=this,b;ca(a,{visible:a.visible!==
false,name:C(a.name,"Slice")});b=function(){a.slice()};ra(a,"select",b);ra(a,"unselect",b);return a},setVisible:function(a){var b=this.series.chart,d=this.tracker,c=this.dataLabel,e=this.connector,f;f=(this.visible=a=a===ha?!this.visible:a)?"show":"hide";this.group[f]();d&&d[f]();c&&c[f]();e&&e[f]();this.legendItem&&b.legend.colorizeItem(this,a)},slice:function(a,b,d){var c=this.series.chart,e=this.slicedTranslation;xc(d,c);C(b,true);a=this.sliced=M(a)?a:!this.sliced;a={translateX:a?e[0]:c.plotLeft,
translateY:a?e[1]:c.plotTop};this.group.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)}});S=yb(xb,{type:"pie",isCartesian:false,pointClass:S,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:function(){this.initialColor=this.chart.counters.color},animate:function(){var a=this;A(a.points,function(b){var d=b.graphic;b=b.shapeArgs;var c=-lc/2;if(d){d.attr({r:0,start:c,end:c});d.animate({r:b.r,start:b.start,end:b.end},a.options.animation)}});a.animate=
null},setData:function(){xb.prototype.setData.apply(this,arguments);this.processData();this.generatePoints()},translate:function(){var a=0,b=-0.25,d=this.options,c=d.slicedOffset,e=c+d.borderWidth,f=d.center.concat([d.size,d.innerSize||0]),g=this.chart,h=g.plotWidth,i=g.plotHeight,j,k,m,t=this.points,B=2*lc,v,J=Ea(h,i),x,o,s,q=d.dataLabels.distance;f=Wc(f,function(r,y){return(x=/%$/.test(r))?[h,i,J,J][y]*la(r)/100:r});this.getX=function(r,y){m=na.asin((r-f[1])/(f[2]/2+q));return f[0]+(y?-1:1)*Mb(m)*
(f[2]/2+q)};this.center=f;A(t,function(r){a+=r.y});A(t,function(r){v=a?r.y/a:0;j=N(b*B*1E3)/1E3;b+=v;k=N(b*B*1E3)/1E3;r.shapeType="arc";r.shapeArgs={x:f[0],y:f[1],r:f[2]/2,innerR:f[3]/2,start:j,end:k};m=(k+j)/2;r.slicedTranslation=Wc([Mb(m)*c+g.plotLeft,Vb(m)*c+g.plotTop],N);o=Mb(m)*f[2]/2;s=Vb(m)*f[2]/2;r.tooltipPos=[f[0]+o*0.7,f[1]+s*0.7];r.labelPos=[f[0]+o+Mb(m)*q,f[1]+s+Vb(m)*q,f[0]+o+Mb(m)*e,f[1]+s+Vb(m)*e,f[0]+o,f[1]+s,q<0?"center":m<B/4?"left":"right",m];r.percentage=v*100;r.total=a});this.setTooltipPoints()},
render:function(){this.getAttribs();this.drawPoints();this.options.enableMouseTracking!==false&&this.drawTracker();this.drawDataLabels();this.options.animation&&this.animate&&this.animate();this.isDirty=this.isDirtyData=false},drawPoints:function(){var a=this.chart,b=a.renderer,d,c,e,f=this.options.shadow,g,h;A(this.points,function(i){c=i.graphic;h=i.shapeArgs;e=i.group;g=i.shadowGroup;if(f&&!g)g=i.shadowGroup=b.g("shadow").attr({zIndex:4}).add();if(!e)e=i.group=b.g("point").attr({zIndex:5}).add();
d=i.sliced?i.slicedTranslation:[a.plotLeft,a.plotTop];e.translate(d[0],d[1]);g&&g.translate(d[0],d[1]);if(c)c.animate(h);else i.graphic=b.arc(h).attr(ca(i.pointAttr[Ib],{"stroke-linejoin":"round"})).add(i.group).shadow(f,g);i.visible===false&&i.setVisible(false)})},drawDataLabels:function(){var a=this.points,b,d=this.chart,c=this.options.dataLabels,e=C(c.connectorPadding,10),f=C(c.connectorWidth,1),g,h,i=c.distance>0,j,k,m=this.center[1],t=[[],[],[],[]],B,v,J,x,o,s,q,r=4,y;xb.prototype.drawDataLabels.apply(this);
A(a,function(U){var X=U.labelPos[7];t[X<0?0:X<lc/2?1:X<lc?2:3].push(U)});t[1].reverse();t[3].reverse();for(q=function(U,X){return U.y>X.y};r--;){a=0;b=[].concat(t[r]);b.sort(q);for(y=b.length;y--;)b[y].rank=y;for(x=0;x<2;x++){k=(s=r%3)?9999:-9999;o=s?-1:1;for(y=0;y<t[r].length;y++){b=t[r][y];if(g=b.dataLabel){h=b.labelPos;J=Lb;B=h[0];v=h[1];j||(j=g&&g.getBBox().height);if(i)if(x&&b.rank<a)J=Cb;else if(!s&&v<k+j||s&&v>k-j){v=k+o*j;B=this.getX(v,r>1);if(!s&&v+j>m||s&&v-j<m)if(x)J=Cb;else a++}if(b.visible===
false)J=Cb;if(J===Lb)k=v;if(x){g.attr({visibility:J,align:h[6]})[g.moved?"animate":"attr"]({x:B+c.x+({left:e,right:-e}[h[6]]||0),y:v+c.y});g.moved=true;if(i&&f){g=b.connector;h=[$a,B+(h[6]==="left"?5:-5),v,Ga,B,v,Ga,h[2],h[3],Ga,h[4],h[5]];if(g){g.animate({d:h});g.attr("visibility",J)}else b.connector=g=this.chart.renderer.path(h).attr({"stroke-width":f,stroke:c.connectorColor||"#606060",visibility:J,zIndex:3}).translate(d.plotLeft,d.plotTop).add()}}}}}}},drawTracker:vd.prototype.drawTracker,getSymbol:function(){}});
fb.pie=S;S=xb.prototype;var Ie=S.processData,Je=S.generatePoints,Ke=S.destroy;S.processData=function(){var a=this.options,b=a.dataGrouping;Ie.apply(this);if(!(!b||b.enabled===false)){var d,c=this.processedXData,e=this.processedYData,f=this.data;a=a.data;d=this.chart.plotSizeX;var g=b.groupPixelWidth,h=d/g,i=b.approximation,j=i==="average"||i==="sum",k=c.length,m=this.valueCount===4,t=this.groupedData,B=[],v=[];A(t||[],function(Ua,bb){if(Ua)t[bb]=Ua.destroy()});this.hasGroupedData=false;if(k>h){this.hasGroupedData=
true;this.points=null;h=c[0];var J=c[k-1];g=g*(J-h)/d;var x=Sd(g,h,J,null,b.units),o,s,q=ha,r=null,y=null,U=null,X=null;for(d=o=0;d<k;d++){for(;x[1]!==ha&&c[d]>=x[1];){if(i==="average"&&q!==ha&&q!==null)q/=o;o=x.shift();if(q!==ha||m){B.push(o);if(m){v.push([r,y,U,X]);r=y=U=X=null}else v.push(q)}q=ha;o=0}s=e[d];if(j&&!m)q=q===ha||q===null?s:q+s;else if(m){X=this.cropStart+d;X=f&&f[X]||this.pointClass.prototype.applyOptions.apply({},[a[X]]);if(r===null)r=X.open;y=y===null?X.high:ja(y,X.high);U=U===
null?X.low:Ea(U,X.low);X=X.close}else if(i==="open"&&q===ha)q=s;else if(i==="high")q=q===ha?s:ja(q,s);else if(i==="low")q=q===ha?s:Ea(q,s);else if(i==="close")q=s;o++}if(b.smoothed){d=B.length-1;for(B[d]=J;d--&&d;)B[d]+=g/2;B[0]=h}this.tooltipHeaderFormat=b.dateTimeLabelFormats[x.unit[0]];this.unit=x.unit}else{B=c;v=e;this.unit=this.tooltipHeaderFormat=null}this.processedXData=B;this.processedYData=v}};S.generatePoints=function(){Je.apply(this);this.groupedData=this.hasGroupedData?this.points:null};
S.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();Ke.apply(this)};S={second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"};Qa.line.dataGrouping=Qa.spline.dataGrouping=Qa.area.dataGrouping=Qa.areaspline.dataGrouping={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:S,units:[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],
["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]]};Qa.column.dataGrouping={approximation:"sum",groupPixelWidth:10,dateTimeLabelFormats:S};Qa.ohlc=Y(Qa.column,{lineWidth:1,dataGrouping:{groupPixelWidth:5},states:{hover:{lineWidth:3}}});S=yb(Nc,{applyOptions:function(a){var b=this.series,d=0;if(typeof a==="object"&&typeof a.length!=="number"){ca(this,a);this.options=a}else if(a.length){if(a.length===5){if(typeof a[0]==="string")this.name=
a[0];else if(typeof a[0]==="number")this.x=a[0];d++}this.open=a[d++];this.high=a[d++];this.low=a[d++];this.close=a[d++]}this.y=this.high;if(this.x===ha&&b)this.x=b.autoIncrement();return this},tooltipFormatter:function(){var a=this.series;return['<span style="color:'+a.color+';font-weight:bold">',this.name||a.name,"</span><br/> Open: ",this.open,"<br/>High: ",this.high,"<br/>Low: ",this.low,"<br/>Close: ",this.close,"<br/>"].join("")}});var Od=yb(fb.column,{type:"ohlc",valueCount:4,pointClass:S,useThreshold:false,
pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},translate:function(){var a=this.yAxis;fb.column.prototype.translate.apply(this);A(this.points,function(b){if(b.open!==null)b.plotOpen=a.translate(b.open,0,1);if(b.close!==null)b.plotClose=a.translate(b.close,0,1)})},drawPoints:function(){var a=this,b=a.chart,d,c,e,f,g,h,i,j;A(a.points,function(k){if(k.plotY!==ha){i=k.graphic;d=k.pointAttr[k.selected?"selected":""];f=d["stroke-width"]%2/2;j=N(k.plotX)+f;g=N(k.barW/2);h=["M",j,N(k.yBottom),
"L",j,N(k.plotY)];if(k.open!==null){c=N(k.plotOpen)+f;h.push("M",j,c,"L",j-g,c)}if(k.close!==null){e=N(k.plotClose)+f;h.push("M",j,e,"L",j+g,e)}if(i)i.animate({d:h});else k.graphic=b.renderer.path(h).attr(d).add(a.group)}})},animate:null});fb.ohlc=Od;Qa.candlestick=Y(Qa.column,{lineColor:"black",lineWidth:1,upColor:"white",states:{hover:{lineWidth:2}}});S=yb(Od,{type:"candlestick",pointAttrToOptions:{fill:"color",stroke:"lineColor","stroke-width":"lineWidth"},getAttribs:function(){Od.prototype.getAttribs.apply(this,
arguments);var a=this.options,b=a.states;a=a.upColor;var d=Y(this.pointAttr);d[""].fill=a;d.hover.fill=b.hover.upColor||a;d.select.fill=b.select.upColor||a;A(this.points,function(c){if(c.open<c.close)c.pointAttr=d})},drawPoints:function(){var a=this,b=a.chart,d,c,e,f,g,h,i,j,k,m;A(a.points,function(t){j=t.graphic;if(t.plotY!==ha){d=t.pointAttr[t.selected?"selected":""];h=d["stroke-width"]%2/2;i=N(t.plotX)+h;c=N(t.plotOpen)+h;e=N(t.plotClose)+h;f=na.min(c,e);g=na.max(c,e);m=N(t.barW/2);k=["M",i-m,
g,"L",i-m,f,"L",i+m,f,"L",i+m,g,"L",i-m,g,"M",i,g,"L",i,N(t.yBottom),"M",i,f,"L",i,N(t.plotY),"Z"];if(j)j.animate({d:k});else t.graphic=b.renderer.path(k).attr(d).add(a.group)}})}});fb.candlestick=S;var Pd=Tc.prototype.symbols;Qa.flags=Y(Qa.column,{fillColor:"white",lineWidth:1,shape:"flag",stackDistance:7,states:{hover:{lineColor:"black",fillColor:"#FCFFC5"}},style:{fontSize:"11px",fontWeight:"bold",textAlign:"center"},y:-30});fb.flags=yb(fb.column,{type:"flags",noSharedTooltip:true,useThreshold:false,
init:xb.prototype.init,pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth",r:"radius"},translate:function(){fb.column.prototype.translate.apply(this);var a=this.chart,b=this.points,d=b.length-1,c,e,f,g=(c=this.options.onSeries)&&a.get(c),h,i;if(g){h=g.points;c=h.length;for(b.sort(function(j,k){return j.x-k.x});c--&&b[d];){e=b[d];i=h[c];if(i.x<=e.x){e.plotY=i.plotY;d--;c++;if(d<0)break}}}A(b,function(j,k){if(!g)j.plotY=a.plotHeight;if((f=b[k-1])&&f.plotX===j.plotX){if(f.stackIndex===
ha)f.stackIndex=0;j.stackIndex=f.stackIndex+1}})},drawPoints:function(){var a,b=this.points,d=this.chart.renderer,c,e,f=this.options,g=f.y,h=f.shape,i,j,k,m,t=f.lineWidth%2/2,B;for(j=b.length;j--;){k=b[j];c=k.plotX+t;a=k.stackIndex;e=k.plotY+g+t-(a!==ha&&a*f.stackDistance);if(isNaN(e))e=0;i=a?ha:k.plotX+t;B=a?ha:k.plotY;m=k.graphic;if(e!==ha){a=k.pointAttr[k.selected?"select":""];if(m)m.attr({x:c,y:e,r:a.r});else m=k.graphic=d.label(k.options.title||f.title||"A",c,e,h,i,B).css(Y(f.style,k.style)).attr(a).attr({align:h===
"flag"?"left":"center",width:f.width,height:f.height}).add(this.group);i=m.box;a=i.getBBox();k.shapeArgs=ca(a,{x:c-(h==="flag"?0:i.attr("width")/2),y:e})}}},drawTracker:function(){fb.column.prototype.drawTracker.apply(this);A(this.points,function(a){ra(a.tracker.element,"mouseover",function(){a.graphic.toFront()})})},tooltipFormatter:function(a){return a.point.text},animate:function(){}});Pd.flag=function(a,b,d,c,e){var f=e&&e.anchorX||a;e=e&&e.anchorY||b;return["M",f,e,"L",a,b+c,a,b,a+d,b,a+d,b+
c,a,b+c,"M",f,e,"Z"]};A(["circle","square"],function(a){Pd[a+"pin"]=function(b,d,c,e,f){var g=f&&f.anchorX;f=f&&f.anchorY;var h=Pd[a](b,d,c,e);g&&f&&h.push("M",b+c/2,d+e,"L",g,f);return h}});var ve=Hb?"touchstart":"mousedown",Ee=Hb?"touchmove":"mousemove",Fe=Hb?"touchend":"mouseup";S={linearGradient:[0,0,0,14],stops:[[0,"#FFF"],[1,"#CCC"]]};Fb=[].concat(Qa.line.dataGrouping.units);Fb[4][1]=[1,2,3,4];Fb[5][1]=[1,2,3];ca(Ra,{navigator:{handles:{backgroundColor:"#FFF",borderColor:"#666"},height:40,margin:10,
maskFill:"rgba(255, 255, 255, 0.75)",outlineColor:"#444",outlineWidth:1,series:{type:"areaspline",color:"#4572A7",fillOpacity:0.4,dataGrouping:{smoothed:true,units:Fb},lineWidth:1,marker:{enabled:false},shadow:false},xAxis:{tickWidth:0,lineWidth:0,gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",x:3,y:-4}},yAxis:{gridLineWidth:0,startOnTick:false,endOnTick:false,minPadding:0.1,maxPadding:0.1,labels:{enabled:false},title:{text:null},tickWidth:0}},scrollbar:{height:Hb?20:14,barBackgroundColor:S,
barBorderRadius:2,barBorderWidth:1,barBorderColor:"#666",buttonArrowColor:"#666",buttonBackgroundColor:S,buttonBorderColor:"#666",buttonBorderRadius:2,buttonBorderWidth:1,rifleColor:"#666",trackBackgroundColor:{linearGradient:[0,0,0,10],stops:[[0,"#EEE"],[1,"#FFF"]]},trackBorderColor:"#CCC",trackBorderWidth:1}});ca(Ra,{rangeSelector:{}});Ra.lang=Y(Ra.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From:",rangeSelectorTo:"To:"});gd.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();
e.render(ja(c.min,c.dataMin),Ea(c.max,c.dataMax))}function d(){c=a.xAxis[0].getExtremes();f.render(c.min,c.max)}var c,e=a.scroller,f=a.rangeSelector;if(e){ra(a.xAxis[0],"setExtremes",function(g){e.render(g.min,g.max)});ra(a,"resize",b);b()}if(f){ra(a.xAxis[0],"setExtremes",function(g){f.render(g.min,g.max)});ra(a,"resize",d);d()}});Highcharts.StockChart=function(a,b){var d=a.series,c={marker:{enabled:false,states:{hover:{enabled:true,radius:5}}},shadow:false,states:{hover:{lineWidth:2}}};a.yAxis=
Wc(oc(a.yAxis||{}),function(e){return Y({labels:{align:"left",x:2,y:-2},showLastLabel:false,title:{text:null}},e)});a.series=null;a=Y({chart:{panning:true},navigator:{enabled:true},scrollbar:{enabled:true},rangeSelector:{enabled:true},title:{text:null},tooltip:{shared:true,crosshairs:true},legend:{enabled:false},xAxis:{title:{text:null},showLastLabel:true},plotOptions:{line:c,spline:c,area:c,areaspline:c,column:{shadow:false,borderWidth:0}}},a,{chart:{inverted:false},xAxis:{type:"datetime",categories:null}});
a.series=d;return new gd(a,b)};ca(Highcharts,{Chart:gd,dateFormat:Gc,pathAnim:ud,getOptions:function(){return Ra},numberFormat:Qd,Point:Nc,Color:mc,Renderer:Tc,seriesTypes:fb,setOptions:function(a){Ra=Y(Ra,a);fe();return Ra},Series:xb,addEvent:ra,removeEvent:Ub,createElement:mb,discardElement:dd,css:Ja,each:A,extend:ca,map:Wc,merge:Y,pick:C,splat:oc,extendClass:yb,version:"Highstock 1.0 Beta"})})();

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS

/**
 * @license Highcharts Stock v1.0 Beta (2011-07-05)
 *
 * (c) 2009-2011 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */

// JSLint options:
/*jslint forin: true */
/*global document, window, navigator, setInterval, clearInterval, clearTimeout, setTimeout, location, jQuery, $ */

(function() {
// encapsulated variables
var doc = document,
	win = window,
	math = Math,
	mathRound = math.round,
	mathFloor = math.floor,
	mathCeil = math.ceil,
	mathMax = math.max,
	mathMin = math.min,
	mathAbs = math.abs,
	mathCos = math.cos,
	mathSin = math.sin,
	mathPI = math.PI,
	deg2rad = mathPI * 2 / 360,


	// some variables
	userAgent = navigator.userAgent,
	isIE = /msie/i.test(userAgent) && !win.opera,
	docMode8 = doc.documentMode === 8,
	isWebKit = /AppleWebKit/.test(userAgent),
	isFirefox = /Firefox/.test(userAgent),
	//hasSVG = win.SVGAngle || doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),
	hasSVG = !!doc.createElementNS && !!doc.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
	SVG_NS = 'http://www.w3.org/2000/svg',
	Renderer,
	hasTouch = doc.documentElement.ontouchstart !== undefined,
	symbolSizes = {},
	idCounter = 0,
	timeFactor = 1, // 1 = JavaScript time, 1000 = Unix time
	garbageBin,
	defaultOptions,
	dateFormat, // function
	globalAnimation,
	pathAnim,


	// some constants for frequently used strings
	UNDEFINED,
	DIV = 'div',
	ABSOLUTE = 'absolute',
	RELATIVE = 'relative',
	HIDDEN = 'hidden',
	PREFIX = 'highcharts-',
	VISIBLE = 'visible',
	PX = 'px',
	NONE = 'none',
	M = 'M',
	L = 'L',
	/*
	 * Empirical lowest possible opacities for TRACKER_FILL
	 * IE6: 0.002
	 * IE7: 0.002
	 * IE8: 0.002
	 * IE9: 0.00000000001 (unlimited)
	 * FF: 0.00000000001 (unlimited)
	 * Chrome: 0.000001
	 * Safari: 0.000001
	 * Opera: 0.00000000001 (unlimited)
	 */
	TRACKER_FILL = 'rgba(192,192,192,'+ (hasSVG ? 0.000001 : 0.002) +')', // invisible but clickable
	//TRACKER_FILL = 'rgba(192,192,192,0.5)',
	NORMAL_STATE = '',
	HOVER_STATE = 'hover',
	SELECT_STATE = 'select',
	MILLISECOND = 'millisecond',
	SECOND = 'second',
	MINUTE = 'minute',
	HOUR = 'hour',
	DAY = 'day',
	WEEK = 'week',
	MONTH = 'month',
	YEAR = 'year',

	// constants for attributes
	FILL = 'fill',
	LINEAR_GRADIENT = 'linearGradient',
	STOPS = 'stops',
	STROKE = 'stroke',
	STROKE_WIDTH = 'stroke-width',

	// time methods, changed based on whether or not UTC is used
	makeTime,
	getMinutes,
	getHours,
	getDay,
	getDate,
	getMonth,
	getFullYear,
	setMinutes,
	setHours,
	setDate,
	setMonth,
	setFullYear,

	// check for a custom HighchartsAdapter defined prior to this file
	globalAdapter = win.HighchartsAdapter,
	adapter = globalAdapter || {},

	// Utility functions. If the HighchartsAdapter is not defined, adapter is an empty object
	// and all the utility functions will be null. In that case they are populated by the
	// default adapters below.
	each = adapter.each,
	grep = adapter.grep,
	map = adapter.map,
	merge = adapter.merge,
	addEvent = adapter.addEvent,
	removeEvent = adapter.removeEvent,
	fireEvent = adapter.fireEvent,
	animate = adapter.animate,
	stop = adapter.stop,

	// lookup over the types and the associated classes
	seriesTypes = {},
	hoverChart;
	
// The Highcharts namespace
win.Highcharts = {};

/**
 * Extend an object with the members of another
 * @param {Object} a The object to be extended
 * @param {Object} b The object to add to the first one
 */
function extend(a, b) {
	var n;
	if (!a) {
		a = {};
	}
	for (n in b) {
		a[n] = b[n];
	}
	return a;
}

/**
 * Take an array and turn into a hash with even number arguments as keys and odd numbers as
 * values. Allows creating constants for commonly used style properties, attributes etc.
 * Avoid it in performance critical situations like looping
 */
function hash() {
	var i = 0,
		args = arguments,
		length = args.length,
		obj = {};
	for (; i < length; i++) {
		obj[args[i++]] = args[i];
	}
	return obj;
}

/**
 * Shortcut for parseInt
 * @param {Object} s
 * @param {Number} mag Magnitude
 */
function pInt(s, mag) {
	return parseInt(s, mag || 10);
}

/**
 * Check for string
 * @param {Object} s
 */
function isString(s) {
	return typeof s === 'string';
}

/**
 * Check for object
 * @param {Object} obj
 */
function isObject(obj) {
	return typeof obj === 'object';
}

/**
 * Check for number
 * @param {Object} n
 */
function isNumber(n) {
	return typeof n === 'number';
}

function log2lin(num) {
	return math.log(num) / math.LN10;
}
function lin2log(num) {
	return math.pow(10, num);
}

/**
 * Remove last occurence of an item from an array
 * @param {Array} arr
 * @param {Mixed} item
 */
function erase(arr, item) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === item) {
			arr.splice(i, 1);
			break;
		}
	}
	//return arr;
}

/**
 * Returns true if the object is not null or undefined. Like MooTools' $.defined.
 * @param {Object} obj
 */
function defined (obj) {
	return obj !== UNDEFINED && obj !== null;
}

/**
 * Set or get an attribute or an object of attributes. Can't use jQuery attr because
 * it attempts to set expando properties on the SVG element, which is not allowed.
 *
 * @param {Object} elem The DOM element to receive the attribute(s)
 * @param {String|Object} prop The property or an abject of key-value pairs
 * @param {String} value The value if a single property is set
 */
function attr(elem, prop, value) {
	var key,
		setAttribute = 'setAttribute',
		ret;

	// if the prop is a string
	if (isString(prop)) {
		// set the value
		if (defined(value)) {

			elem[setAttribute](prop, value);

		// get the value
		} else if (elem && elem.getAttribute) { // elem not defined when printing pie demo...
			ret = elem.getAttribute(prop);
		}

	// else if prop is defined, it is a hash of key/value pairs
	} else if (defined(prop) && isObject(prop)) {
		for (key in prop) {
			elem[setAttribute](key, prop[key]);
		}
	}
	return ret;
}
/**
 * Check if an element is an array, and if not, make it into an array. Like
 * MooTools' $.splat.
 */
function splat(obj) {
	if (!obj || obj.constructor !== Array) {
		obj = [obj];
	}
	return obj;
}



/**
 * Return the first value that is defined. Like MooTools' $.pick.
 */
function pick() {
	var args = arguments,
		i,
		arg,
		length = args.length;
	for (i = 0; i < length; i++) {
		arg = args[i];
		if (typeof arg !== 'undefined' && arg !== null) {
			return arg;
		}
	}
}

/**
 * Set CSS on a given element
 * @param {Object} el
 * @param {Object} styles Style object with camel case property names
 */
function css (el, styles) {
	if (isIE) {
		if (styles && styles.opacity !== UNDEFINED) {
			styles.filter = 'alpha(opacity='+ (styles.opacity * 100) +')';
		}
	}
	extend(el.style, styles);
}

/* *
 * Get CSS value on a given element
 * @param {Object} el DOM object
 * @param {String} styleProp Camel cased CSS propery
 * /
function getStyle (el, styleProp) {
	var ret,
		CURRENT_STYLE = 'currentStyle',
		GET_COMPUTED_STYLE = 'getComputedStyle';
	if (el[CURRENT_STYLE]) {
		ret = el[CURRENT_STYLE][styleProp];
	} else if (win[GET_COMPUTED_STYLE]) {
		ret = win[GET_COMPUTED_STYLE](el, null).getPropertyValue(hyphenate(styleProp));
	}
	return ret;
}*/

/**
 * Utility function to create element with attributes and styles
 * @param {Object} tag
 * @param {Object} attribs
 * @param {Object} styles
 * @param {Object} parent
 * @param {Object} nopad
 */
function createElement (tag, attribs, styles, parent, nopad) {
	var el = doc.createElement(tag);
	if (attribs) {
		extend(el, attribs);
	}
	if (nopad) {
		css(el, {padding: 0, border: NONE, margin: 0});
	}
	if (styles) {
		css(el, styles);
	}
	if (parent) {
		parent.appendChild(el);
	}
	return el;
}

/**
 * Extend a prototyped class by new members
 * @param {Object} parent
 * @param {Object} members
 */
function extendClass(parent, members) {
	var object = function(){};
	object.prototype = new parent();
	extend(object.prototype, members);
	return object;
}

/**
 * Format a number and return a string based on input settings
 * @param {Number} number The input number to format
 * @param {Number} decimals The amount of decimals
 * @param {String} decPoint The decimal point, defaults to the one given in the lang options
 * @param {String} thousandsSep The thousands separator, defaults to the one given in the lang options
 */
function numberFormat (number, decimals, decPoint, thousandsSep) {
	var lang = defaultOptions.lang,
		// http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_number_format/
		n = number, c = isNaN(decimals = mathAbs(decimals)) ? 2 : decimals,
		d = decPoint === undefined ? lang.decimalPoint : decPoint,
		t = thousandsSep === undefined ? lang.thousandsSep : thousandsSep, s = n < 0 ? "-" : "",
		i = String(pInt(n = mathAbs(+n || 0).toFixed(c))),
		j = i.length > 3 ? i.length % 3 : 0;

	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
		(c ? d + mathAbs(n - i).toFixed(c).slice(2) : "");
}

/**
 * Based on http://www.php.net/manual/en/function.strftime.php
 * @param {String} format
 * @param {Number} timestamp
 * @param {Boolean} capitalize
 */
dateFormat = function (format, timestamp, capitalize) {
	function pad (number, length) {
		// two digits
		number = number.toString().replace(/^([0-9])$/, '0$1');
		// three digits
		if (length === 3) {
			number = number.toString().replace(/^([0-9]{2})$/, '0$1');
		}
		return number;
	}

	if (!defined(timestamp) || isNaN(timestamp)) {
		return 'Invalid date';
	}
	format = pick(format, '%Y-%m-%d %H:%M:%S');

	var date = new Date(timestamp * timeFactor),
		key, // used in for constuct below
		// get the basic time values
		hours = date[getHours](),
		day = date[getDay](),
		dayOfMonth = date[getDate](),
		month = date[getMonth](),
		fullYear = date[getFullYear](),
		lang = defaultOptions.lang,
		langWeekdays = lang.weekdays,
		langMonths = lang.months,
		/* // uncomment this and the 'W' format key below to enable week numbers
		weekNumber = function() {
			var clone = new Date(date.valueOf()),
				day = clone[getDay]() == 0 ? 7 : clone[getDay](),
				dayNumber;
			clone.setDate(clone[getDate]() + 4 - day);
			dayNumber = mathFloor((clone.getTime() - new Date(clone[getFullYear](), 0, 1, -6)) / 86400000);
			return 1 + mathFloor(dayNumber / 7);
		},
		*/

		// list all format keys
		replacements = {

			// Day
			'a': langWeekdays[day].substr(0, 3), // Short weekday, like 'Mon'
			'A': langWeekdays[day], // Long weekday, like 'Monday'
			'd': pad(dayOfMonth), // Two digit day of the month, 01 to 31
			'e': dayOfMonth, // Day of the month, 1 through 31

			// Week (none implemented)
			//'W': weekNumber(),

			// Month
			'b': langMonths[month].substr(0, 3), // Short month, like 'Jan'
			'B': langMonths[month], // Long month, like 'January'
			'm': pad(month + 1), // Two digit month number, 01 through 12

			// Year
			'y': fullYear.toString().substr(2, 2), // Two digits year, like 09 for 2009
			'Y': fullYear, // Four digits year, like 2009

			// Time
			'H': pad(hours), // Two digits hours in 24h format, 00 through 23
			'I': pad((hours % 12) || 12), // Two digits hours in 12h format, 00 through 11
			'l': (hours % 12) || 12, // Hours in 12h format, 1 through 12
			'M': pad(date[getMinutes]()), // Two digits minutes, 00 through 59
			'p': hours < 12 ? 'AM' : 'PM', // Upper case AM or PM
			'P': hours < 12 ? 'am' : 'pm', // Lower case AM or PM
			'S': pad(date.getSeconds()), // Two digits seconds, 00 through  59
			'L': pad(timestamp % 1000, 3) // Milliseconds (naming from Ruby)
		};


	// do the replaces
	for (key in replacements) {
		format = format.replace('%'+ key, replacements[key]);
	}

	// Optionally capitalize the string and return
	return capitalize ? format.substr(0, 1).toUpperCase() + format.substr(1) : format;
};

/**
 * Loop up the node tree and add offsetWidth and offsetHeight to get the
 * total page offset for a given element. Used by Opera and iOS on hover and
 * all browsers on point click.
 *
 * @param {Object} el
 *
 */
function getPosition (el) {
	var p = { left: el.offsetLeft, top: el.offsetTop };
	el = el.offsetParent;
	while (el) {
		p.left += el.offsetLeft;
		p.top += el.offsetTop;
		if (el !== doc.body && el !== doc.documentElement) {
			p.left -= el.scrollLeft;
			p.top -= el.scrollTop;
		}
		el = el.offsetParent;
	}
	return p;
}

/**
 * Take an interval and normalize it to multiples of 1, 2, 2.5 and 5
 * @param {Number} interval
 * @param {Array} multiples
 * @param {Number} magnitude
 * @param {Object} options
 */
function normalizeTickInterval(interval, multiples, magnitude, options) {
	var normalized, i;

	// round to a tenfold of 1, 2, 2.5 or 5
	//magnitude = multiples ? 1 : math.pow(10, mathFloor(math.log(interval) / math.LN10));
	magnitude = pick(magnitude, 1);
	normalized = interval / magnitude;

	// multiples for a linear scale
	if (!multiples) {
		multiples = [1, 2, 2.5, 5, 10];
		//multiples = [1, 2, 2.5, 4, 5, 7.5, 10];

		// the allowDecimals option
		if (options && options.allowDecimals === false) {
			if (magnitude === 1) {
				multiples = [1, 2, 5, 10];
			} else if (magnitude <= 0.1) {
				multiples = [1 / magnitude];
			}
		}
	}

	// normalize the interval to the nearest multiple
	for (i = 0; i < multiples.length; i++) {
		interval = multiples[i];
		if (normalized <= (multiples[i] + (multiples[i+1] || multiples[i])) / 2) {
			break;
		}
	}

	// multiply back to the correct magnitude
	interval *= magnitude;

	return interval;
}

/**
 * Set the tick positions to a time unit that makes sense, for example
 * on the first of each month or on every Monday. Return an array
 * with the time positions. Used in datetime axes as well as for grouping
 * data on a datetime axis.
 *
 * @param {Number} tickInterval The approximate interval in axis values (ms)
 * @param {Number} min The minimum in axis values
 * @param {Number} max The maximum in axis values
 * @param {Number} startOfWeek
 * @param {Array} unitsOption
 */
function getTimeTicks(tickInterval, min, max, startOfWeek, unitsOption) {
	var tickPositions = [],
		i,
		useUTC = defaultOptions.global.useUTC,
		oneSecond = 1000 / timeFactor,
		oneMinute = 60000 / timeFactor,
		oneHour = 3600000 / timeFactor,
		oneDay = 24 * 3600000 / timeFactor,
		oneWeek = 7 * 24 * 3600000 / timeFactor,
		oneMonth = 30 * 24 * 3600000 / timeFactor,
		oneYear = 31556952000 / timeFactor,

		ranges = hash(
			MILLISECOND, 1,
			SECOND, oneSecond,
			MINUTE, oneMinute,
			HOUR, oneHour,
			DAY, oneDay,
			WEEK, oneWeek,
			MONTH, oneMonth,
			YEAR, oneYear
		),
		units = unitsOption || [[
			'millisecond',					// unit name
			//1,								// fixed incremental unit
			[1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
		], [
			'second',						// unit name
			//oneSecond,						// fixed incremental unit
			[1, 2, 5, 10, 15, 30]			// allowed multiples
		], [
			'minute',						// unit name
			//oneMinute,						// fixed incremental unit
			[1, 2, 5, 10, 15, 30]			// allowed multiples
		], [
			'hour',							// unit name
			//oneHour,						// fixed incremental unit
			[1, 2, 3, 4, 6, 8, 12]			// allowed multiples
		], [
			'day',							// unit name
			//oneDay,							// fixed incremental unit
			[1, 2]							// allowed multiples
		], [
			'week',							// unit name
			//oneWeek,						// fixed incremental unit
			[1, 2]							// allowed multiples
		], [
			'month',
			//oneMonth,
			[1, 2, 3, 4, 6]
		], [
			'year',
			//oneYear,
			null
		]],

		unit = units[units.length - 1], // default unit is years
		interval = ranges[unit[0]],
		multiples = unit[1];

	// loop through the units to find the one that best fits the tickInterval
	for (i = 0; i < units.length; i++)  {
		unit = units[i];
		interval = ranges[unit[0]];
		multiples = unit[1];


		if (units[i+1]) {
			// lessThan is in the middle between the highest multiple and the next unit.
			var lessThan = (interval * multiples[multiples.length - 1] +
						ranges[units[i + 1][0]]	) / 2;

			// break and keep the current unit
			if (tickInterval <= lessThan) {
				break;
			}
		}
	}

	// prevent 2.5 years intervals, though 25, 250 etc. are allowed
	if (interval === oneYear && tickInterval < 5 * interval) {
		multiples = [1, 2, 5];
	}

	// get the minimum value by flooring the date
	var multitude = normalizeTickInterval(tickInterval / interval, multiples),
		minYear, // used in months and years as a basis for Date.UTC()
		minDate = new Date(min * timeFactor);

	minDate.setMilliseconds(0);

	if (interval >= oneSecond) { // second
		minDate.setSeconds(interval >= oneMinute ? 0 :
			multitude * mathFloor(minDate.getSeconds() / multitude));
	}

	if (interval >= oneMinute) { // minute
		minDate[setMinutes](interval >= oneHour ? 0 :
			multitude * mathFloor(minDate[getMinutes]() / multitude));
	}

	if (interval >= oneHour) { // hour
		minDate[setHours](interval >= oneDay ? 0 :
			multitude * mathFloor(minDate[getHours]() / multitude));
	}

	if (interval >= oneDay) { // day
		minDate[setDate](interval >= oneMonth ? 1 :
			multitude * mathFloor(minDate[getDate]() / multitude));
	}

	if (interval >= oneMonth) { // month
		minDate[setMonth](interval >= oneYear ? 0 :
			multitude * mathFloor(minDate[getMonth]() / multitude));
		minYear = minDate[getFullYear]();
	}

	if (interval >= oneYear) { // year
		minYear -= minYear % multitude;
		minDate[setFullYear](minYear);
	}

	// week is a special case that runs outside the hierarchy
	if (interval === oneWeek) {
		// get start of current week, independent of multitude
		minDate[setDate](minDate[getDate]() - minDate[getDay]() +
			pick(startOfWeek, 1));
	}


	// get tick positions
	i = 1;
	minYear = minDate[getFullYear]();
	var time = minDate.getTime() / timeFactor,
		minMonth = minDate[getMonth](),
		minDateDate = minDate[getDate]();

	// iterate and add tick positions at appropriate values
	while (time < max) {
		tickPositions.push(time);

		// if the interval is years, use Date.UTC to increase years
		if (interval === oneYear) {
			time = makeTime(minYear + i * multitude, 0) / timeFactor;

		// if the interval is months, use Date.UTC to increase months
		} else if (interval === oneMonth) {
			time = makeTime(minYear, minMonth + i * multitude) / timeFactor;

		// if we're using global time, the interval is not fixed as it jumps
		// one hour at the DST crossover
		} else if (!useUTC && (interval === oneDay || interval === oneWeek)) {
			time = makeTime(minYear, minMonth, minDateDate +
				i * multitude * (interval === oneDay ? 1 : 7));

		// else, the interval is fixed and we use simple addition
		} else {
			time += interval * multitude;
		}

		i++;
	}
	// push the last time
	tickPositions.push(time);


	// record information on the chosen unit - for dynamic label formatter
	tickPositions.unit = unit;

	return tickPositions;
}

/**
 * Helper class that contains variuos counters that are local to the chart.
 */
function ChartCounters() {
	this.color = 0;
	this.symbol = 0;
}

ChartCounters.prototype =  {
	/**
	 * Wraps the color counter if it reaches the specified length.
	 */
	wrapColor: function(length) {
		if (this.color >= length) {
			this.color = 0;
		}
	},

	/**
	 * Wraps the symbol counter if it reaches the specified length.
	 */
	wrapSymbol: function(length) {
		if (this.symbol >= length) {
			this.symbol = 0;
		}
	}
};

/**
 * Set the global animation to either a given value, or fall back to the
 * given chart's animation option
 * @param {Object} animation
 * @param {Object} chart
 */
function setAnimation(animation, chart) {
	globalAnimation = pick(animation, chart.animation);
}

/*
 * Define the adapter for frameworks. If an external adapter is not defined,
 * Highcharts reverts to the built-in jQuery adapter.
 */
if (globalAdapter && globalAdapter.init) {
	globalAdapter.init();
}
if (!globalAdapter && win.jQuery) {
	var jQ = jQuery;

	/**
	 * Utility for iterating over an array. Parameters are reversed compared to jQuery.
	 * @param {Array} arr
	 * @param {Function} fn
	 */
	each = function(arr, fn) {
		var i = 0,
			len = arr.length;
		for (; i < len; i++) {
			if (fn.call(arr[i], arr[i], i, arr) === false) {
				return i;
			}
		}
	};

	/**
	 * Filter an array
	 */
	grep = jQ.grep;

	/**
	 * Map an array
	 * @param {Array} arr
	 * @param {Function} fn
	 */
	map = function(arr, fn){
		//return jQuery.map(arr, fn);
		var results = [],
			i = 0, len = arr.length;
		for (; i < len; i++) {
			results[i] = fn.call(arr[i], arr[i], i, arr);
		}
		return results;

	};

	/**
	 * Deep merge two objects and return a third object
	 */
	merge = function(){
		var args = arguments;
		return jQ.extend(true, null, args[0], args[1], args[2], args[3]);
	};

	/**
	 * Add an event listener
	 * @param {Object} el A HTML element or custom object
	 * @param {String} event The event type
	 * @param {Function} fn The event handler
	 */
	addEvent = function (el, event, fn){
		jQ(el).bind(event, fn);
	};

	/**
	 * Remove event added with addEvent
	 * @param {Object} el The object
	 * @param {String} eventType The event type. Leave blank to remove all events.
	 * @param {Function} handler The function to remove
	 */
	removeEvent = function(el, eventType, handler) {
		// workaround for jQuery issue with unbinding custom events:
		// http://forum.jquery.com/topic/javascript-error-when-unbinding-a-custom-event-using-jquery-1-4-2
		var func = doc.removeEventListener ? 'removeEventListener' : 'detachEvent';
		if (doc[func] && !el[func]) {
			el[func] = function() {};
		}

		jQ(el).unbind(eventType, handler);
	};

	/**
	 * Fire an event on a custom object
	 * @param {Object} el
	 * @param {String} type
	 * @param {Object} eventArguments
	 * @param {Function} defaultFunction
	 */
	fireEvent = function(el, type, eventArguments, defaultFunction) {
		var event = jQ.Event(type),
			detachedType = 'detached'+ type;
		extend(event, eventArguments);

		// Prevent jQuery from triggering the object method that is named the
		// same as the event. For example, if the event is 'select', jQuery
		// attempts calling el.select and it goes into a loop.
		if (el[type]) {
			el[detachedType] = el[type];
			el[type] = null;
		}

		// trigger it
		jQ(el).trigger(event);

		// attach the method
		if (el[detachedType]) {
			el[type] = el[detachedType];
			el[detachedType] = null;
		}

		if (defaultFunction && !event.isDefaultPrevented()) {
			defaultFunction(event);
		}
	};

	/**
	 * Animate a HTML element or SVG element wrapper
	 * @param {Object} el
	 * @param {Object} params
	 * @param {Object} options jQuery-like animation options: duration, easing, callback
	 */
	animate = function (el, params, options) {
		var $el = jQ(el);
		if (params.d) {
			el.toD = params.d; // keep the array form for paths, used in jQ.fx.step.d
			params.d = 1; // because in jQuery, animating to an array has a different meaning
		}

		$el.stop();
		$el.animate(params, options);

	};
	/**
	 * Stop running animation
	 */
	stop = function (el) {
		jQ(el).stop();
	};


	// extend jQuery
	jQ.extend( jQ.easing, {
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		}
	});

	// extend the animate function to allow SVG animations
	var oldStepDefault = jQuery.fx.step._default,
		oldCur = jQuery.fx.prototype.cur;

	// do the step
	jQ.fx.step._default = function(fx){
		var elem = fx.elem;
		if (elem.attr) { // is SVG element wrapper
			elem.attr(fx.prop, fx.now);
		} else {
			oldStepDefault.apply(this, arguments);
		}
	};
	// animate paths
	jQ.fx.step.d = function(fx) {
		var elem = fx.elem;


		// Normally start and end should be set in state == 0, but sometimes,
		// for reasons unknown, this doesn't happen. Perhaps state == 0 is skipped
		// in these cases
		if (!fx.started) {
			var ends = pathAnim.init(elem, elem.d, elem.toD);
			fx.start = ends[0];
			fx.end = ends[1];
			fx.started = true;
		}


		// interpolate each value of the path
		elem.attr('d', pathAnim.step(fx.start, fx.end, fx.pos, elem.toD));

	};
	// get the current value
	jQ.fx.prototype.cur = function() {
		var elem = this.elem,
			r;
		if (elem.attr) { // is SVG element wrapper
			r = elem.attr(this.prop);
		} else {
			r = oldCur.apply(this, arguments);
		}
		return r;
	};
}

/**
 * Path interpolation algorithm used across adapters
 */
pathAnim = {
	/**
	 * Prepare start and end values so that the path can be animated one to one
	 */
	init: function(elem, fromD, toD) {
		fromD = fromD || '';
		var shift = elem.shift,
			bezier = fromD.indexOf('C') > -1,
			numParams = bezier ? 7 : 3,
			endLength,
			slice,
			i,
			start = fromD.split(' '),
			end = [].concat(toD), // copy
			startBaseLine,
			endBaseLine,
			sixify = function(arr) { // in splines make move points have six parameters like bezier curves
				i = arr.length;
				while (i--) {
					if (arr[i] === M) {
						arr.splice(i + 1, 0, arr[i+1], arr[i+2], arr[i+1], arr[i+2]);
					}
				}
			};

		if (bezier) {
			sixify(start);
			sixify(end);
		}

		// pull out the base lines before padding
		if (elem.isArea) {
			startBaseLine = start.splice(start.length - 6, 6);
			endBaseLine = end.splice(end.length - 6, 6);
		}

		// if shifting points, prepend a dummy point to the end path
		if (shift === 1 ) {

			end = [].concat(end).splice(0, numParams).concat(end);
		}
		elem.shift = 0; // reset for following animations

		// copy and append last point until the length matches the end length
		if (start.length) {
			endLength = end.length;
			while (start.length < endLength) {

				//bezier && sixify(start);
				slice = [].concat(start).splice(start.length - numParams, numParams);
				if (bezier) { // disable first control point
					slice[numParams - 6] = slice[numParams - 2];
					slice[numParams - 5] = slice[numParams - 1];
				}
				start = start.concat(slice);
			}
		}

		if (startBaseLine) { // append the base lines for areas
			start = start.concat(startBaseLine);
			end = end.concat(endBaseLine);
		}
		return [start, end];
	},

	/**
	 * Interpolate each value of the path and return the array
	 */
	step: function(start, end, pos, complete) {
		var ret = [],
			i = start.length,
			startVal;

		if (pos === 1) { // land on the final path without adjustment points appended in the ends
			ret = complete;

		} else if (i === end.length && pos < 1) {
			while (i--) {
				startVal = parseFloat(start[i]);
				ret[i] =
					isNaN(startVal) ? // a letter instruction like M or L
						start[i] :
						pos * (parseFloat(end[i] - startVal)) + startVal;

			}
		} else { // if animation is finished or length not matching, land on right value
			ret = end;
		}
		return ret;
	}
};

/**
 * Set the time methods globally based on the useUTC option. Time method can be either
 * local time or UTC (default).
 */
function setTimeMethods() {
	var useUTC = defaultOptions.global.useUTC;

	makeTime = useUTC ? Date.UTC : function(year, month, date, hours, minutes, seconds) {
		return new Date(
			year,
			month,
			pick(date, 1),
			pick(hours, 0),
			pick(minutes, 0),
			pick(seconds, 0)
		).getTime();
	};
	getMinutes = useUTC ? 'getUTCMinutes' : 'getMinutes';
	getHours = useUTC ? 'getUTCHours' : 'getHours';
	getDay = useUTC ? 'getUTCDay' : 'getDay';
	getDate = useUTC ? 'getUTCDate' : 'getDate';
	getMonth = useUTC ? 'getUTCMonth' : 'getMonth';
	getFullYear = useUTC ? 'getUTCFullYear' : 'getFullYear';
	setMinutes = useUTC ? 'setUTCMinutes' : 'setMinutes';
	setHours = useUTC ? 'setUTCHours' : 'setHours';
	setDate = useUTC ? 'setUTCDate' : 'setDate';
	setMonth = useUTC ? 'setUTCMonth' : 'setMonth';
	setFullYear = useUTC ? 'setUTCFullYear' : 'setFullYear';

}

/**
 * Merge the default options with custom options and return the new options structure
 * @param {Object} options The new custom options
 */
function setOptions(options) {
	defaultOptions = merge(defaultOptions, options);

	// apply UTC
	setTimeMethods();

	return defaultOptions;
}

/**
 * Get the updated default options. Merely exposing defaultOptions for outside modules
 * isn't enough because the setOptions method creates a new object.
 */
function getOptions() {
	return defaultOptions;
}

/**
 * Discard an element by moving it to the bin and delete
 * @param {Object} The HTML node to discard
 */
function discardElement(element) {
	// create a garbage bin element, not part of the DOM
	if (!garbageBin) {
		garbageBin = createElement(DIV);
	}

	// move the node and empty bin
	if (element) {
		garbageBin.appendChild(element);
	}
	garbageBin.innerHTML = '';
}

/* ****************************************************************************
 * Handle the options                                                         *
 *****************************************************************************/
var

defaultLabelOptions = {
	enabled: true,
	// rotation: 0,
	align: 'center',
	x: 0,
	y: 15,
	/*formatter: function() {
		return this.value;
	},*/
	style: {
		color: '#666',
		fontSize: '11px',
		lineHeight: '14px'
	}
};

defaultOptions = {
	colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
		'#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
	symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
	lang: {
		loading: 'Loading...',
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
				'August', 'September', 'October', 'November', 'December'],
		weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		decimalPoint: '.',
		resetZoom: 'Reset zoom',
		resetZoomTitle: 'Reset zoom level 1:1',
		thousandsSep: ','
	},
	global: {
		useUTC: true
	},
	chart: {
		//animation: true,
		//alignTicks: false,
		//reflow: true,
		//className: null,
		//events: { load, selection },
		//margin: [null],
		//marginTop: null,
		//marginRight: null,
		//marginBottom: null,
		//marginLeft: null,
		borderColor: '#4572A7',
		//borderWidth: 0,
		borderRadius: 5,
		defaultSeriesType: 'line',
		ignoreHiddenSeries: true,
		//inverted: false,
		//shadow: false,
		spacingTop: 10,
		spacingRight: 10,
		spacingBottom: 15,
		spacingLeft: 10,
		style: {
			fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
			fontSize: '12px'
		},
		backgroundColor: '#FFFFFF',
		//plotBackgroundColor: null,
		plotBorderColor: '#C0C0C0'
		//plotBorderWidth: 0,
		//plotShadow: false,
		//zoomType: ''
	},
	title: {
		text: 'Chart title',
		align: 'center',
		// floating: false,
		// margin: 15,
		// x: 0,
		// verticalAlign: 'top',
		y: 15,
		style: {
			color: '#3E576F',
			fontSize: '16px'
		}

	},
	subtitle: {
		text: '',
		align: 'center',
		// floating: false
		// x: 0,
		// verticalAlign: 'top',
		y: 30,
		style: {
			color: '#6D869F'
		}
	},

	plotOptions: {
		line: { // base series options
			allowPointSelect: false,
			showCheckbox: false,
			animation: {
				duration: 1000
			},
			// connectNulls: false, // docs
			//cursor: 'default',
			//clip: true,
			//dashStyle: null,
			//enableMouseTracking: true,
			events: {},
			//legendIndex: 0, // docs (+ pie points)
			lineWidth: 2,
			shadow: true,
			// stacking: null,
			marker: {
				enabled: true,
				//symbol: null,
				lineWidth: 0,
				radius: 4,
				lineColor: '#FFFFFF',
				//fillColor: null,
				states: { // states for a single point
					hover: {
						//radius: base + 2
					},
					select: {
						fillColor: '#FFFFFF',
						lineColor: '#000000',
						lineWidth: 2
					}
				}
			},
			point: {
				events: {}
			},
			dataLabels: merge(defaultLabelOptions, {
				enabled: false,
				y: -6,
				formatter: function() {
					return this.y;
				}
			}),
			cropThreshold: 300, // docs - draw points outside the plot area when the number of points is less than this
			//pointStart: 0,
			//pointInterval: 1,
			showInLegend: true,
			states: { // states for the entire series
				hover: {
					//enabled: false,
					//lineWidth: base + 1,
					marker: {
						// lineWidth: base + 1,
						// radius: base + 1
					}
				},
				select: {
					marker: {}
				}
			},
			stickyTracking: true
			// turboThreshold: 1000 // docs
			// zIndex: null
		}
	},
	labels: {
		//items: [],
		style: {
			//font: defaultFont,
			position: ABSOLUTE,
			color: '#3E576F'
		}
	},
	legend: {
		enabled: true,
		align: 'center',
		//floating: false,
		layout: 'horizontal',
		labelFormatter: function() {
			return this.name;
		},
		// lineHeight: 16,
		borderWidth: 1,
		borderColor: '#909090',
		borderRadius: 5,
		// margin: 10,
		// reversed: false,
		shadow: false,
		// backgroundColor: null,
		style: {
			padding: '5px'
		},
		itemStyle: {
			cursor: 'pointer',
			color: '#3E576F'
		},
		itemHoverStyle: {
			cursor: 'pointer',
			color: '#000000'
		},
		itemHiddenStyle: {
			color: '#C0C0C0'
		},
		itemCheckboxStyle: {
			position: ABSOLUTE,
			width: '13px', // for IE precision
			height: '13px'
		},
		// itemWidth: undefined,
		symbolWidth: 16,
		symbolPadding: 5,
		verticalAlign: 'bottom',
		// width: undefined,
		x: 0, // docs
		y: 0 // docs
	},

	loading: {
		hideDuration: 100,
		labelStyle: {
			fontWeight: 'bold',
			position: RELATIVE,
			top: '1em'
		},
		showDuration: 100,
		style: {
			position: ABSOLUTE,
			backgroundColor: 'white',
			opacity: 0.5,
			textAlign: 'center'
		}
	},

	tooltip: {
		enabled: true,
		//crosshairs: null,
		backgroundColor: 'rgba(255, 255, 255, .85)',
		borderWidth: 2,
		borderRadius: 5,
		//formatter: defaultFormatter,
		shadow: true,
		//shared: false,
		snap: hasTouch ? 25 : 10,
		style: {
			color: '#333333',
			fontSize: '12px',
			padding: '5px',
			whiteSpace: 'nowrap'
		}
	},

	toolbar: {
		itemStyle: {
			color: '#4572A7',
			cursor: 'pointer'
		}
	},

	credits: {
		enabled: true,
		text: 'Highstock Beta',
		href: 'http://www.highcharts.com',
		position: {
			align: 'right',
			x: -10,
			verticalAlign: 'bottom',
			y: -5
		},
		style: {
			cursor: 'pointer',
			color: '#909090',
			fontSize: '10px'
		}
	}
};

// Axis defaults
var defaultXAxisOptions =  {
	// allowDecimals: null,
	// alternateGridColor: null,
	// categories: [],
	dateTimeLabelFormats: hash(
		MILLISECOND, '%H:%M:%S.%L',
		SECOND, '%H:%M:%S',
		MINUTE, '%H:%M',
		HOUR, '%H:%M',
		DAY, '%e. %b',
		WEEK, '%e. %b',
		MONTH, '%b \'%y',
		YEAR, '%Y'
	),
	endOnTick: false,
	gridLineColor: '#C0C0C0',
	// gridLineDashStyle: 'solid', // docs
	// gridLineWidth: 0,
	// reversed: false,

	labels: defaultLabelOptions,
		// { step: null },
	lineColor: '#C0D0E0',
	lineWidth: 1,
	//linkedTo: null,
	max: null,
	min: null,
	minPadding: 0.01,
	maxPadding: 0.01,
	//maxZoom: null,
	minorGridLineColor: '#E0E0E0',
	// minorGridLineDashStyle: null,
	minorGridLineWidth: 1,
	minorTickColor: '#A0A0A0',
	//minorTickInterval: null,
	minorTickLength: 2,
	minorTickPosition: 'outside', // inside or outside
	//minorTickWidth: 0,
	//opposite: false,
	//offset: 0,
	//plotBands: [{
	//	events: {},
	//	zIndex: 1,
	//	labels: { align, x, verticalAlign, y, style, rotation, textAlign }
	//}],
	//plotLines: [{
	//	events: {}
	//  dashStyle: {}
	//	zIndex:
	//	labels: { align, x, verticalAlign, y, style, rotation, textAlign }
	//}],
	//reversed: false,
	// showFirstLabel: true,
	// showLastLabel: false,
	startOfWeek: 1,
	startOnTick: false,
	tickColor: '#C0D0E0',
	//tickInterval: null,
	tickLength: 5,
	tickmarkPlacement: 'between', // on or between
	tickPixelInterval: 100,
	tickPosition: 'outside',
	tickWidth: 1,
	title: {
		//text: null,
		align: 'middle', // low, middle or high
		//margin: 0 for horizontal, 10 for vertical axes,
		//rotation: 0,
		//side: 'outside',
		style: {
			color: '#6D869F',
			//font: defaultFont.replace('normal', 'bold')
			fontWeight: 'bold'
		}
		//x: 0,
		//y: 0
	},
	type: 'linear' // linear, logarithmic or datetime // docs
},

defaultYAxisOptions = merge(defaultXAxisOptions, {
	endOnTick: true,
	gridLineWidth: 1,
	tickPixelInterval: 72,
	showLastLabel: true,
	labels: {
		align: 'right',
		x: -8,
		y: 3
	},
	lineWidth: 0,
	maxPadding: 0.05,
	minPadding: 0.05,
	startOnTick: true,
	tickWidth: 0,
	title: {
		rotation: 270,
		text: 'Y-values'
	},
	stackLabels: {
		enabled: false,
		//align: dynamic,
		//y: dynamic,
		//x: dynamic,
		//verticalAlign: dynamic,
		//textAlign: dynamic,
		//rotation: 0,
		formatter: function() {
			return this.total;
		},
		style: defaultLabelOptions.style
	}
}),

defaultLeftAxisOptions = {
	labels: {
		align: 'right',
		x: -8,
		y: null // docs
	},
	title: {
		rotation: 270
	}
},
defaultRightAxisOptions = {
	labels: {
		align: 'left',
		x: 8,
		y: null // docs
	},
	title: {
		rotation: 90
	}
},
defaultBottomAxisOptions = { // horizontal axis
	labels: {
		align: 'center',
		x: 0,
		y: 14
		// staggerLines: null
	},
	title: {
		rotation: 0
	}
},
defaultTopAxisOptions = merge(defaultBottomAxisOptions, {
	labels: {
		y: -5
		// staggerLines: null
	}
});




// Series defaults
var defaultPlotOptions = defaultOptions.plotOptions,
	defaultSeriesOptions = defaultPlotOptions.line;
//defaultPlotOptions.line = merge(defaultSeriesOptions);
defaultPlotOptions.spline = merge(defaultSeriesOptions);
defaultPlotOptions.scatter = merge(defaultSeriesOptions, {
	lineWidth: 0,
	states: {
		hover: {
			lineWidth: 0
		}
	}
});
defaultPlotOptions.area = merge(defaultSeriesOptions, {
	threshold: 0
	// lineColor: null, // overrides color, but lets fillColor be unaltered
	// fillOpacity: 0.75,
	// fillColor: null

});
defaultPlotOptions.areaspline = merge(defaultPlotOptions.area);
defaultPlotOptions.column = merge(defaultSeriesOptions, {
	borderColor: '#FFFFFF',
	borderWidth: 1,
	borderRadius: 0,
	//colorByPoint: undefined,
	groupPadding: 0.2,
	marker: null, // point options are specified in the base options
	pointPadding: 0.1,
	//pointWidth: null,
	minPointLength: 0,
	cropThreshold: 50, // docs, when there are more points, they will not animate out of the chart on xAxis.setExtremes
	padXAxis: true,
	states: {
		hover: {
			brightness: 0.1,
			shadow: false
		},
		select: {
			color: '#C0C0C0',
			borderColor: '#000000',
			shadow: false
		}
	},
	dataLabels: {
		y: null,
		verticalAlign: null
	},
	threshold: 0
});
defaultPlotOptions.bar = merge(defaultPlotOptions.column, {
	dataLabels: {
		align: 'left',
		x: 5,
		y: 0
	}
});
defaultPlotOptions.pie = merge(defaultSeriesOptions, {
	//dragType: '', // n/a
	borderColor: '#FFFFFF',
	borderWidth: 1,
	center: ['50%', '50%'],
	colorByPoint: true, // always true for pies
	dataLabels: {
		// align: null,
		// connectorWidth: 1,
		// connectorColor: '#606060',
		// connectorPadding: 5,
		distance: 30,
		enabled: true,
		formatter: function() {
			return this.point.name;
		},
		y: 5
	},
	//innerSize: 0,
	legendType: 'point',
	marker: null, // point options are specified in the base options
	size: '75%',
	showInLegend: false,
	slicedOffset: 10,
	states: {
		hover: {
			brightness: 0.1,
			shadow: false
		}
	}

});

// set the default time methods
setTimeMethods();


/**
 * Handle color operations. The object methods are chainable.
 * @param {String} input The input color in either rbga or hex format
 */
var Color = function(input) {
	// declare variables
	var rgba = [], result;

	/**
	 * Parse the input color to rgba array
	 * @param {String} input
	 */
	function init(input) {

		// rgba
		result = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(input);
		if (result) {
			rgba = [pInt(result[1]), pInt(result[2]), pInt(result[3]), parseFloat(result[4], 10)];
		}

		// hex
		else {
			result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(input);
			if (result) {
				rgba = [pInt(result[1], 16), pInt(result[2], 16), pInt(result[3], 16), 1];
			}
		}

	}
	/**
	 * Return the color a specified format
	 * @param {String} format
	 */
	function get(format) {
		var ret;

		// it's NaN if gradient colors on a column chart
		if (rgba && !isNaN(rgba[0])) {
			if (format === 'rgb') {
				ret = 'rgb('+ rgba[0] +','+ rgba[1] +','+ rgba[2] +')';
			} else if (format === 'a') {
				ret = rgba[3];
			} else {
				ret = 'rgba('+ rgba.join(',') +')';
			}
		} else {
			ret = input;
		}
		return ret;
	}

	/**
	 * Brighten the color
	 * @param {Number} alpha
	 */
	function brighten(alpha) {
		if (isNumber(alpha) && alpha !== 0) {
			var i;
			for (i = 0; i < 3; i++) {
				rgba[i] += pInt(alpha * 255);

				if (rgba[i] < 0) {
					rgba[i] = 0;
				}
				if (rgba[i] > 255) {
					rgba[i] = 255;
				}
			}
		}
		return this;
	}
	/**
	 * Set the color's opacity to a given alpha value
	 * @param {Number} alpha
	 */
	function setOpacity(alpha) {
		rgba[3] = alpha;
		return this;
	}

	// initialize: parse the input
	init(input);

	// public methods
	return {
		get: get,
		brighten: brighten,
		setOpacity: setOpacity
	};
};


/**
 * A wrapper object for SVG elements
 */
function SVGElement () {}

SVGElement.prototype = {
	/**
	 * Initialize the SVG renderer
	 * @param {Object} renderer
	 * @param {String} nodeName
	 */
	init: function(renderer, nodeName) {
		this.element = doc.createElementNS(SVG_NS, nodeName);
		this.renderer = renderer;
	},
	/**
	 * Animate a given attribute
	 * @param {Object} params
	 * @param {Number} options The same options as in jQuery animation
	 * @param {Function} complete Function to perform at the end of animation
	 */
	animate: function(params, options, complete) {
		var animOptions = pick(options, globalAnimation, true);
		if (animOptions) {
			animOptions = merge(animOptions);
			if (complete) { // allows using a callback with the global animation without overwriting it
				animOptions.complete = complete;
			}
			animate(this, params, animOptions);
		} else {
			this.attr(params);
			if (complete) {
				complete();
			}
		}
	},
	/**
	 * Set or get a given attribute
	 * @param {Object|String} hash
	 * @param {Mixed|Undefined} val
	 */
	attr: function(hash, val) {
		var wrapper = this,
			key,
			value,
			result,
			i,
			child,
			element = wrapper.element,
			nodeName = element.nodeName,
			renderer = wrapper.renderer,
			skipAttr,
			shadows = wrapper.shadows,
			hasSetSymbolSize,
			ret = wrapper;

		// single key-value pair
		if (isString(hash) && defined(val)) {
			key = hash;
			hash = {};
			hash[key] = val;
		}

		// used as a getter: first argument is a string, second is undefined
		if (isString(hash)) {
			key = hash;
			if (nodeName === 'circle') {
				key = { x: 'cx', y: 'cy' }[key] || key;
			} else if (key === 'strokeWidth') {
				key = 'stroke-width';
			}
			ret = attr(element, key) || wrapper[key] || 0;

			if (key !== 'd' && key !== 'visibility') { // 'd' is string in animation step
				ret = parseFloat(ret);
			}

		// setter
		} else {

			for (key in hash) {
				skipAttr = false; // reset
				value = hash[key];

				fireEvent(wrapper, 'setAttr', { key: key, value: value }, function(e) {
					result = e.result;
					if (defined(result) && result !== false) {
						value = result;
					}
					// paths
					if (key === 'd') {
						if (value && value.join) { // join path
							value = value.join(' ');
						}
						if (/(NaN| {2}|^$)/.test(value)) {
							value = 'M 0 0';
						}
						wrapper.d = value; // shortcut for animations

					// update child tspans x values
					} else if (key === 'x' && nodeName === 'text') {
						for (i = 0; i < element.childNodes.length; i++ ) {
							child = element.childNodes[i];
							// if the x values are equal, the tspan represents a linebreak
							if (attr(child, 'x') === attr(element, 'x')) {
								//child.setAttribute('x', value);
								attr(child, 'x', value);
							}
						}

						if (wrapper.rotation) {
							attr(element, 'transform', 'rotate('+ wrapper.rotation +' '+ value +' '+
								pInt(hash.y || attr(element, 'y')) +')');
						}

					// apply gradients
					} else if (key === 'fill') {
						value = renderer.color(value, element, key);

					// circle x and y
					} else if (nodeName === 'circle' && (key === 'x' || key === 'y')) {
						key = { x: 'cx', y: 'cy' }[key] || key;

					// rectangle border radius
					} else if (nodeName === 'rect' && key === 'r') {
						attr(element, {
							rx: value,
							ry: value
						});
						skipAttr = true;

					// translation and text rotation
					} else if (key === 'translateX' || key === 'translateY' || key === 'rotation' || key === 'verticalAlign') {
						wrapper[key] = value;
						wrapper.updateTransform();
						skipAttr = true;

					// apply opacity as subnode (required by legacy WebKit and Batik)
					} else if (key === 'stroke') {
						value = renderer.color(value, element, key);

					// emulate VML's dashstyle implementation
					} else if (key === 'dashstyle') {
						key = 'stroke-dasharray';
						value = value && value.toLowerCase();
						if (value === 'solid') {
							value = NONE;
						} else if (value) {
							value = value
								.replace('shortdashdotdot', '3,1,1,1,1,1,')
								.replace('shortdashdot', '3,1,1,1')
								.replace('shortdot', '1,1,')
								.replace('shortdash', '3,1,')
								.replace('longdash', '8,3,')
								.replace(/dot/g, '1,3,')
								.replace('dash', '4,3,')
								.replace(/,$/, '')
								.split(','); // ending comma

							i = value.length;
							while (i--) {
								value[i] = pInt(value[i]) * hash['stroke-width'];
							}
							value = value.join(',');
						}

					// special
					} else if (key === 'isTracker') {
						wrapper[key] = value;

					// IE9/MooTools combo: MooTools returns objects instead of numbers and IE9 Beta 2
					// is unable to cast them. Test again with final IE9.
					} else if (key === 'width') {
						value = pInt(value);

					// Text alignment
					} else if (key === 'align') {
						key = 'text-anchor';
						value = { left: 'start', center: 'middle', right: 'end' }[value];
					}



					// jQuery animate changes case
					if (key === 'strokeWidth') {
						key = 'stroke-width';
					}

					// Chrome/Win < 6 bug (http://code.google.com/p/chromium/issues/detail?id=15461)
					if (isWebKit && key === 'stroke-width' && value === 0) {
						value = 0.000001;
					}

					// symbols
					if (wrapper.symbolName && /^(x|y|r|start|end|innerR)/.test(key)) {


						if (!hasSetSymbolSize) {
							wrapper.symbolAttr(hash);
							hasSetSymbolSize = true;
						}
						skipAttr = true;
					}

					// let the shadow follow the main element
					if (shadows && /^(width|height|visibility|x|y|d|transform)$/.test(key)) {
						i = shadows.length;
						while (i--) {
							attr(shadows[i], key, value);
						}
					}

					// validate heights
					if ((key === 'width' || key === 'height') && nodeName === 'rect' && value < 0) {
						value = 0;
					}




					if (key === 'text') {
						// only one node allowed
						wrapper.textStr = value;
						if (wrapper.added) {
							renderer.buildText(wrapper);
						}
					} else if (!skipAttr) {
						//fireEvent(this, 'setAttr', { key: key, value: value }, function() {
							attr(element, key, value);
						//});
					}
					if (e.callback) {
						e.callback();
					}
				});

			}

		}
		return ret;
	},

	/**
	 * If one of the symbol size affecting parameters are changed,
	 * check all the others only once for each call to an element's
	 * .attr() method
	 * @param {Object} hash
	 */
	symbolAttr: function(hash) {
		var wrapper = this;

		each(['x', 'y', 'r', 'start', 'end', 'width', 'height', 'innerR', 'anchorX', 'anchorY'], function(key) {
			wrapper[key] = pick(hash[key], wrapper[key]);
		});

		wrapper.attr({
			d: wrapper.renderer.symbols[wrapper.symbolName](wrapper.x, wrapper.y, wrapper.width, wrapper.height, wrapper)
		});
	},

	/**
	 * Apply a clipping path to this object
	 * @param {String} id
	 */
	clip: function(clipRect) {
		return this.attr('clip-path', 'url('+ this.renderer.url +'#'+ clipRect.id +')');
	},

	/**
	 * Calculate the coordinates needed for drawing a rectangle crisply and return the
	 * calculated attributes
	 * @param {Number} strokeWidth
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	crisp: function(strokeWidth, x, y, width, height) {

		var wrapper = this,
			element = wrapper.element,
			key,
			attribs = {},
			values = {},
			normalizer;

		strokeWidth = strokeWidth || wrapper.strokeWidth || (wrapper.attr && wrapper.attr('stroke-width')) || 0;
		normalizer = strokeWidth % 2 / 2;

		// normalize for crisp edges
		values.x = mathFloor(x || wrapper.x || 0) + normalizer;
		values.y = mathFloor(y || wrapper.y || 0) + normalizer;
		values.width = mathFloor((width || wrapper.width || 0) - 2 * normalizer);
		values.height = mathFloor((height || wrapper.height || 0) - 2 * normalizer);
		values.strokeWidth = strokeWidth;

		for (key in values) {
			if (wrapper[key] !== values[key]) { // only set attribute if changed
				wrapper[key] = attribs[key] = values[key];
			}
		}

		return attribs;
	},

	/**
	 * Set styles for the element
	 * @param {Object} styles
	 */
	css: function(styles) {
		var elemWrapper = this,
			elem = elemWrapper.element,
			textWidth = styles && styles.width && elem.nodeName === 'text',
			n,
			serializedCss,
			hyphenate = function(a, b){ return '-'+ b.toLowerCase(); };

		// convert legacy
		if (styles && styles.color) {
			styles.fill = styles.color;
		}
		
		// merge the new styles with the old ones
		styles = extend(
			elemWrapper.styles,
			styles
		);

		// store object
		elemWrapper.styles = styles;

		// serialize and set style attribute
		if (isIE && !hasSVG) { // legacy IE doesn't support setting style attribute
			if (textWidth) {
				delete styles.width;
			}
			css(elemWrapper.element, styles);
		} else {
			for (n in styles) {
				serializedCss += n.replace(/([A-Z])/g, hyphenate) + ':'+ styles[n] + ';';
			} 
			elemWrapper.attr({
				style: serializedCss
			});
		}


		// re-build text
		if (textWidth && elemWrapper.added) {
			elemWrapper.renderer.buildText(elemWrapper);
		}

		return elemWrapper;
	},

	/**
	 * Add an event listener
	 * @param {String} eventType
	 * @param {Function} handler
	 */
	on: function(eventType, handler) {
		var fn = handler;
		// touch
		if (hasTouch && eventType === 'click') {
			eventType = 'touchstart';
			fn = function(e) {
				e.preventDefault();
				handler();
			};
		}
		// simplest possible event model for internal use
		this.element['on'+ eventType] = fn;
		return this;
	},


	/**
	 * Move an object and its children by x and y values
	 * @param {Number} x
	 * @param {Number} y
	 */
	translate: function(x, y) {
		return this.attr({
			translateX: x,
			translateY: y
		});
	},

	/**
	 * Invert a group, rotate and flip
	 */
	invert: function() {
		var wrapper = this;
		wrapper.inverted = true;
		wrapper.updateTransform();
		return wrapper;
	},

	/**
	 * Private method to update the transform attribute based on internal
	 * properties
	 */
	updateTransform: function() {
		var wrapper = this,
			translateX = wrapper.translateX || 0,
			translateY = wrapper.translateY || 0,
			inverted = wrapper.inverted,
			rotation = wrapper.rotation,
			shadows = wrapper.shadows,
			transform = [];

		// flipping affects translate as adjustment for flipping around the group's axis
		if (inverted) {
			translateX += wrapper.attr('width');
			translateY += wrapper.attr('height');
		}

		// apply translate
		if (translateX || translateY) {
			transform.push('translate('+ translateX +','+ translateY +')');
		}

		// apply rotation
		if (inverted) {
			transform.push('rotate(90) scale(-1,1)');
		} else if (rotation) { // text rotation
			transform.push('rotate('+ rotation +' '+ wrapper.x +' '+ wrapper.y +')');
		}

		if (transform.length) {
			attr(wrapper.element, 'transform', transform.join(' '));
			if (shadows) { // in label/tooltip
				each(shadows, function(shadow) {
					attr(shadow, 'transform', 'translate('+ (translateX + 1) +','+ (translateY + 1) +')');
				});
			}
		}
	},
	/**
	 * Bring the element to the front
	 */
	toFront: function() {
		var element = this.element;
		element.parentNode.appendChild(element);
		return this;
	},


	/**
	 * Break down alignment options like align, verticalAlign, x and y
	 * to x and y relative to the chart.
	 *
	 * @param {Object} alignOptions
	 * @param {Boolean} alignByTranslate
	 * @param {Object} box The box to align to, needs a width and height
	 *
	 */
	align: function(alignOptions, alignByTranslate, box) {
		var elemWrapper = this;

		if (!alignOptions) { // called on resize
			alignOptions = elemWrapper.alignOptions;
			alignByTranslate = elemWrapper.alignByTranslate;
		} else { // first call on instanciate
			elemWrapper.alignOptions = alignOptions;
			elemWrapper.alignByTranslate = alignByTranslate;
			if (!box) { // boxes other than renderer handle this internally
				elemWrapper.renderer.alignedObjects.push(elemWrapper);
			}
		}

		box = pick(box, elemWrapper.renderer);

		var align = alignOptions.align,
			vAlign = alignOptions.verticalAlign,
			x = (box.x || 0) + (alignOptions.x || 0), // default: left align
			y = (box.y || 0) + (alignOptions.y || 0), // default: top align
			attribs = {};


		// align
		if (/^(right|center)$/.test(align)) {
			x += (box.width - (alignOptions.width || 0) ) /
					{ right: 1, center: 2 }[align];
		}
		attribs[alignByTranslate ? 'translateX' : 'x'] = mathRound(x);


		// vertical align
		if (/^(bottom|middle)$/.test(vAlign)) {
			y += (box.height - (alignOptions.height || 0)) /
					({ bottom: 1, middle: 2 }[vAlign] || 1);

		}
		attribs[alignByTranslate ? 'translateY' : 'y'] = mathRound(y);

		// animate only if already placed
		elemWrapper[elemWrapper.placed ? 'animate' : 'attr'](attribs);
		elemWrapper.placed = true;
		elemWrapper.alignAttr = attribs;

		return elemWrapper;
	},

	/**
	 * Get the bounding box (width, height, x and y) for the element
	 */
	getBBox: function() {
		var bBox,
			width,
			height,
			rotation = this.rotation,
			rad = rotation * deg2rad;

		try { // fails in Firefox if the container has display: none
			// use extend because IE9 is not allowed to change width and height in case
			// of rotation (below)
			bBox = extend({}, this.element.getBBox());
		} catch(e) {
			bBox = { width: 0, height: 0 };
		}
		width = bBox.width;
		height = bBox.height;

		// adjust for rotated text
		if (rotation) {
			bBox.width = mathAbs(height * mathSin(rad)) + mathAbs(width * mathCos(rad));
			bBox.height = mathAbs(height * mathCos(rad)) + mathAbs(width * mathSin(rad));
		}

		return bBox;
	},

	/**
	 * Show the element
	 */
	show: function() {
		return this.attr({ visibility: VISIBLE });
	},

	/**
	 * Hide the element
	 */
	hide: function() {
		return this.attr({ visibility: HIDDEN });
	},

	/**
	 * Add the element
	 * @param {Object|Undefined} parent Can be an element, an element wrapper or undefined
	 *    to append the element to the renderer.box.
	 */
	add: function(parent) {

		var renderer = this.renderer,
			parentWrapper = parent || renderer,
			parentNode = parentWrapper.element || renderer.box,
			childNodes = parentNode.childNodes,
			element = this.element,
			zIndex = attr(element, 'zIndex'),
			otherElement,
			otherZIndex,
			i,
			inserted;

		// mark as inverted
		this.parentInverted = parent && parent.inverted;

		// build formatted text
		if (this.textStr !== undefined) {
			renderer.buildText(this);
		}

		// mark the container as having z indexed children
		if (zIndex) {
			parentWrapper.handleZ = true;
			zIndex = pInt(zIndex);
		}

		// insert according to this and other elements' zIndex
		if (parentWrapper.handleZ) { // this element or any of its siblings has a z index
			for (i = 0; i < childNodes.length; i++) {
				otherElement = childNodes[i];
				otherZIndex = attr(otherElement, 'zIndex');
				if (otherElement !== element && (
						// insert before the first element with a higher zIndex
						pInt(otherZIndex) > zIndex ||
						// if no zIndex given, insert before the first element with a zIndex
						(!defined(zIndex) && defined(otherZIndex))

						)) {
					parentNode.insertBefore(element, otherElement);
					inserted = true;
					break;
				}
			}
		}

		// default: append at the end
		if (!inserted) {
			parentNode.appendChild(element);
		}

		// mark as added
		this.added = true;

		// fire an event for internal hooks
		fireEvent(this, 'add');

		return this;
	},

	/**
	 * Destroy the element and element wrapper
	 */
	destroy: function() {
		var wrapper = this,
			element = wrapper.element || {},
			shadows = wrapper.shadows,
			box = wrapper.box,
			parentNode = element.parentNode,
			key;

		// remove events
		element.onclick = element.onmouseout = element.onmouseover = element.onmousemove = null;
		stop(wrapper); // stop running animations

		// remove element
		if (parentNode) {
			parentNode.removeChild(element);
		}

		// destroy shadows
		if (shadows) {
			each(shadows, function(shadow) {
				parentNode = shadow.parentNode;
				if (parentNode) { // the entire chart HTML can be overwritten
					parentNode.removeChild(shadow);
				}
			});
		}

		// destroy label box
		if (box) {
			box.destroy();
		}

		// remove from alignObjects
		erase(wrapper.renderer.alignedObjects, wrapper);

		for (key in wrapper) {
			delete wrapper[key];
		}

		return null;
	},

	/**
	 * Empty a group element
	 */
	empty: function() {
		var element = this.element,
			childNodes = element.childNodes,
			i = childNodes.length;

		while (i--) {
			element.removeChild(childNodes[i]);
		}
	},

	/**
	 * Add a shadow to the element. Must be done after the element is added to the DOM
	 * @param {Boolean} apply
	 */
	shadow: function(apply, group) {
		var shadows = [],
			i,
			shadow,
			element = this.element,

			// compensate for inverted plot area
			transform = this.parentInverted ? '(-1,-1)' : '(1,1)';


		if (apply) {
			for (i = 1; i <= 3; i++) {
				shadow = element.cloneNode(0);
				attr(shadow, {
					'isShadow': 'true',
					'stroke': 'rgb(0, 0, 0)',
					'stroke-opacity': 0.05 * i,
					'stroke-width': 7 - 2 * i,
					'transform': 'translate'+ transform,
					'fill': NONE
				});

				if (group) {
					group.element.appendChild(shadow);
				} else {
					element.parentNode.insertBefore(shadow, element);
				}

				shadows.push(shadow);
			}

			this.shadows = shadows;
		}
		return this;

	}
};


/**
 * The default SVG renderer
 */
var SVGRenderer = function() {
	this.init.apply(this, arguments);
};
SVGRenderer.prototype = {

	Element: SVGElement,

	/**
	 * Initialize the SVGRenderer
	 * @param {Object} container
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Boolean} forExport
	 */
	init: function(container, width, height, forExport) {
		var renderer = this,
			loc = location,
			boxWrapper;

		boxWrapper = renderer.createElement('svg')
			.attr({
				xmlns: SVG_NS,
				version: '1.1'
			});
		container.appendChild(boxWrapper.element);

		// object properties
		renderer.box = boxWrapper.element;
		renderer.boxWrapper = boxWrapper;
		renderer.alignedObjects = [];
		renderer.url = isIE ? '' : loc.href.replace(/#.*?$/, ''); // page url used for internal references
		renderer.defs = this.createElement('defs').add();
		renderer.forExport = forExport;

		renderer.setSize(width, height, false);

	},


	/**
	 * Create a wrapper for an SVG element
	 * @param {Object} nodeName
	 */
	createElement: function(nodeName) {
		var wrapper = new this.Element();
		wrapper.init(this, nodeName);
		return wrapper;
	},


	/**
	 * Parse a simple HTML string into SVG tspans
	 *
	 * @param {Object} textNode The parent text SVG node
	 */
	buildText: function(wrapper) {
		var textNode = wrapper.element,
			lines = pick(wrapper.textStr, '').toString()
				.replace(/<(b|strong)>/g, '<span style="font-weight:bold">')
				.replace(/<(i|em)>/g, '<span style="font-style:italic">')
				.replace(/<a/g, '<span')
				.replace(/<\/(b|strong|i|em|a)>/g, '</span>')
				.split(/<br.*?>/g),
			childNodes = textNode.childNodes,
			styleRegex = /style="([^"]+)"/,
			hrefRegex = /href="([^"]+)"/,
			parentX = attr(textNode, 'x'),
			textStyles = wrapper.styles,
			reverse = isFirefox && textStyles && textStyles.HcDirection === 'rtl' &&
				!this.forExport && pInt(userAgent.split('Firefox/')[1]) < 4, // issue #38
			arr,
			width = textStyles && pInt(textStyles.width),
			textLineHeight = textStyles && textStyles.lineHeight,
			lastLine,
			GET_COMPUTED_STYLE = 'getComputedStyle',
			i = childNodes.length;

		// remove old text
		while (i--) {
			textNode.removeChild(childNodes[i]);
		}

		if (width && !wrapper.added) {
			this.box.appendChild(textNode); // attach it to the DOM to read offset width
		}

		each(lines, function(line, lineNo) {
			var spans, spanNo = 0, lineHeight;

			line = line.replace(/<span/g, '|||<span').replace(/<\/span>/g, '</span>|||');
			spans = line.split('|||');

			each(spans, function (span) {
				if (span !== '' || spans.length === 1) {
					var attributes = {},
						tspan = doc.createElementNS(SVG_NS, 'tspan');
					if (styleRegex.test(span)) {
						attr(
							tspan,
							'style',
							span.match(styleRegex)[1].replace(/(;| |^)color([ :])/, '$1fill$2')
						);
					}
					if (hrefRegex.test(span)) {
						attr(tspan, 'onclick', 'location.href=\"'+ span.match(hrefRegex)[1] +'\"');
						css(tspan, { cursor: 'pointer' });
					}

					span = (span.replace(/<(.|\n)*?>/g, '') || ' ')
						.replace(/&lt;/g, '<')
						.replace(/&gt;/g, '>');

					// issue #38 workaround.
					if (reverse) {
						arr = [];
						i = span.length;
						while (i--) {
							arr.push(span.charAt(i));
						}
						span = arr.join('');
					}

					// add the text node
					tspan.appendChild(doc.createTextNode(span));

					if (!spanNo) { // first span in a line, align it to the left
						attributes.x = parentX;
					} else {
						// Firefox ignores spaces at the front or end of the tspan
						attributes.dx = 3; // space
					}

					// first span on subsequent line, add the line height
					if (!spanNo) {
						if (lineNo) {

							// allow getting the right offset height in exporting in IE
							if (!hasSVG && wrapper.renderer.forExport) {
								css(tspan, { display: 'block' });
							}

							// Webkit and opera sometimes return 'normal' as the line height. In that
							// case, webkit uses offsetHeight, while Opera falls back to 18
							lineHeight = win[GET_COMPUTED_STYLE] &&
								win[GET_COMPUTED_STYLE](lastLine, null).getPropertyValue('line-height');

							if (!lineHeight || isNaN(lineHeight)) {
								lineHeight = textLineHeight || lastLine.offsetHeight || 18;
							}
							attr(tspan, 'dy', lineHeight);
						}
						lastLine = tspan; // record for use in next line
					}

					// add attributes
					attr(tspan, attributes);

					// append it
					textNode.appendChild(tspan);

					spanNo++;

					// check width and apply soft breaks
					if (width) {
						var words = span.replace(/-/g, '- ').split(' '),
							tooLong,
							actualWidth,
							rest = [];

						while (words.length || rest.length) {
							actualWidth = textNode.getBBox().width;
							tooLong = actualWidth > width;
							if (!tooLong || words.length === 1) { // new line needed
								words = rest;
								rest = [];
								if (words.length) {
									tspan = doc.createElementNS(SVG_NS, 'tspan');
									attr(tspan, {
										dy: textLineHeight || 16,
										x: parentX
									});
									textNode.appendChild(tspan);

									if (actualWidth > width) { // a single word is pressing it out
										width = actualWidth;
									}
								}
							} else { // append to existing line tspan
								tspan.removeChild(tspan.firstChild);
								rest.unshift(words.pop());
							}
							if (words.length) {
								tspan.appendChild(doc.createTextNode(words.join(' ').replace(/- /g, '-')));
							}
						}
					}
				}
			});
		});


	},

	/**
	 * Create a button with preset states
	 * @param {String} text
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Function} callback
	 * @param {Object} normalState
	 * @param {Object} hoverState
	 * @param {Object} pressedState
	 */
	button: function(text, x, y, callback, normalState, hoverState, pressedState) {
		var label = this.label(text, x, y),
			curState = 0,
			stateOptions,
			stateStyle,
			normalStyle,
			hoverStyle,
			pressedStyle,
			STYLE = 'style';
			
		// prepare the attributes
		normalState = merge(hash(
			STROKE_WIDTH, 1,
			STROKE, '#999',
			FILL, hash(
				LINEAR_GRADIENT, [0, 0, 0, 14],
				STOPS, [
					[0, '#FFF'],
					[1, '#DDD']
				]
			),
			'r', 3,
			'padding', 3,
			STYLE, hash(
				'color', 'black'
			)
		), normalState);
		normalStyle = normalState[STYLE];
		delete normalState[STYLE];

		hoverState = merge(normalState, hash(
			STROKE, '#68A',
			FILL, hash(
				LINEAR_GRADIENT, [0, 0, 0, 14],
				STOPS, [
					[0, '#FFF'],
					[1, '#ACF']
				]
			)
		), hoverState);
		hoverStyle = hoverState[STYLE];
		delete hoverState[STYLE];

		pressedState = merge(normalState, hash(
			STROKE, '#68A',
			FILL, hash(
				LINEAR_GRADIENT, [0, 0, 0, 14],
				STOPS, [
					[0, '#9BD'],
					[1, '#CDF']
				]
			)
		), pressedState);
		pressedStyle = pressedState[STYLE];
		delete pressedState[STYLE];

		// add the events
		addEvent(label.element, 'mouseenter', function() {
			label.attr(hoverState)
				.css(hoverStyle);
		});
		addEvent(label.element, 'mouseleave', function() {
			stateOptions = [normalState, hoverState, pressedState][curState];
			stateStyle = [normalStyle, hoverStyle, pressedStyle][curState];
			label.attr(stateOptions)
				.css(stateStyle);
		});

		label.setState = function(state) {
			curState = state;
			if (!state) {
				label.attr(normalState)
					.css(normalStyle);
			} else if (state === 2) {
				label.attr(pressedState)
					.css(pressedStyle);
			}
		};
		
		return label
			.on('click', function() {
				callback.call(label);
			})
			.attr(normalState)
			.css(extend({ cursor: 'default' }, normalStyle));

	},

	/**
	 * Make a straight line crisper by not spilling out to neighbour pixels
	 * @param {Array} points
	 * @param {Number} width
	 */
	crispLine: function(points, width) {
		// points format: [M, 0, 0, L, 100, 0]
		// normalize to a crisp line
		if (points[1] === points[4]) {
			points[1] = points[4] = mathRound(points[1]) + (width % 2 / 2);
		}
		if (points[2] === points[5]) {
			points[2] = points[5] = mathRound(points[2]) + (width % 2 / 2);
		}
		return points;
	},


	/**
	 * Draw a path
	 * @param {Array} path An SVG path in array form
	 */
	path: function (path) {
		return this.createElement('path').attr({
			d: path,
			fill: NONE
		});
	},

	/**
	 * Draw and return an SVG circle
	 * @param {Number} x The x position
	 * @param {Number} y The y position
	 * @param {Number} r The radius
	 */
	circle: function (x, y, r) {
		var attr = isObject(x) ?
			x :
			{
				x: x,
				y: y,
				r: r
			};

		return this.createElement('circle').attr(attr);
	},

	/**
	 * Draw and return an arc
	 * @param {Number} x X position
	 * @param {Number} y Y position
	 * @param {Number} r Radius
	 * @param {Number} innerR Inner radius like used in donut charts
	 * @param {Number} start Starting angle
	 * @param {Number} end Ending angle
	 */
	arc: function (x, y, r, innerR, start, end) {
		// arcs are defined as symbols for the ability to set
		// attributes in attr and animate

		if (isObject(x)) {
			y = x.y;
			r = x.r;
			innerR = x.innerR;
			start = x.start;
			end = x.end;
			x = x.x;
		}
		return this.symbol('arc', x || 0, y || 0, r || 0, r || 0, {
			innerR: innerR || 0,
			start: start || 0,
			end: end || 0
		});
	},

	/**
	 * Draw and return a rectangle
	 * @param {Number} x Left position
	 * @param {Number} y Top position
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Number} r Border corner radius
	 * @param {Number} strokeWidth A stroke width can be supplied to allow crisp drawing
	 */
	rect: function (x, y, width, height, r, strokeWidth) {
		if (isObject(x)) {
			y = x.y;
			width = x.width;
			height = x.height;
			r = x.r;
			strokeWidth = x.strokeWidth;
			x = x.x;
		}
		var wrapper = this.createElement('rect').attr({
			rx: r,
			ry: r,
			fill: NONE
		});

		return wrapper.attr(wrapper.crisp(strokeWidth, x, y, mathMax(width, 0), mathMax(height, 0)));
	},

	/**
	 * Resize the box and re-align all aligned elements
	 * @param {Object} width
	 * @param {Object} height
	 * @param {Boolean} animate
	 *
	 */
	setSize: function(width, height, animate) {
		var renderer = this,
			alignedObjects = renderer.alignedObjects,
			i = alignedObjects.length;

		renderer.width = width;
		renderer.height = height;

		renderer.boxWrapper[pick(animate, true) ? 'animate' : 'attr']({
			width: width,
			height: height
		});

		while (i--) {
			alignedObjects[i].align();
		}
	},

	/**
	 * Create a group
	 * @param {String} name The group will be given a class name of 'highcharts-{name}'.
	 *     This can be used for styling and scripting.
	 */
	g: function(name) {
		return this.createElement('g').attr(
			defined(name) && { 'class': PREFIX + name }
		);
	},

	/**
	 * Display an image
	 * @param {String} src
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	image: function(src, x, y, width, height) {
		var attribs = {
				preserveAspectRatio: NONE
			},
			elemWrapper;

		// optional properties
		if (arguments.length > 1) {
			extend(attribs, {
				x: x,
				y: y,
				width: width,
				height: height
			});
		}

		elemWrapper = this.createElement('image').attr(attribs);

		// set the href in the xlink namespace
		if (elemWrapper.element.setAttributeNS) {
			elemWrapper.element.setAttributeNS('http://www.w3.org/1999/xlink',
				'href', src);
		} else {
			// could be exporting in IE
			// using href throws "not supported" in ie7 and under, requries regex shim to fix later
			elemWrapper.element.setAttribute('hc-svg-href', src);
	}

		return elemWrapper;
	},

	/**
	 * Draw a symbol out of pre-defined shape paths from the namespace 'symbol' object.
	 *
	 * @param {Object} symbol
	 * @param {Object} x
	 * @param {Object} y
	 * @param {Object} radius
	 * @param {Object} options
	 */
	symbol: function(symbol, x, y, width, height, options) {

		var obj,

			// get the symbol definition function
			symbolFn = this.symbols[symbol],

			// check if there's a path defined for this symbol
			path = symbolFn && symbolFn(
				mathRound(x),
				mathRound(y),
				width,
				height,
				options
			),

			imageRegex = /^url\((.*?)\)$/,
			imageSrc,
			imageSize;

		if (path) {

			obj = this.path(path);
			// expando properties for use in animate and attr
			extend(obj, {
				symbolName: symbol,
				x: x,
				y: y,
				width: width,
				height: height
			});
			if (options) {
				extend(obj, options);
			}


		// image symbols
		} else if (imageRegex.test(symbol)) {

			var centerImage = function(img, size) {
				img.attr({
					width: size[0],
					height: size[1]
				}).translate(
					-mathRound(size[0] / 2),
					-mathRound(size[1] / 2)
				);
			};

			imageSrc = symbol.match(imageRegex)[1];
			imageSize = symbolSizes[imageSrc];

			// create the image synchronously, add attribs async
			obj = this.image(imageSrc)
				.attr({
					x: x,
					y: y
				});

			if (imageSize) {
				centerImage(obj, imageSize);
			} else {
				// initialize image to be 0 size so export will still function if there's no cached sizes
				obj.attr({ width: 0, height: 0 });

				// create a dummy JavaScript image to get the width and height
				createElement('img', {
					onload: function() {
						var img = this;

						centerImage(obj, symbolSizes[imageSrc] = [img.width, img.height]);
					},
					src: imageSrc
				});
			}
		}

		return obj;
	},

	/**
	 * An extendable collection of functions for defining symbol paths.
	 */
	symbols: {
		'circle': function (x, y, w, h) {
			var cpw = 0.166 * w;
			return [
				M, x + w / 2, y,
				'C', x + w + cpw, y, x + w + cpw, y + h, x + w / 2, y + h,
				'C', x - cpw, y + h, x - cpw, y, x + w / 2, y,
				'Z'
			];
		},

		'square': function (x, y, w, h) {
			return [
				M, x, y,
				L, x + w, y,
				x + w, y + h,
				x, y + h,
				'Z'
			];
		},

		'triangle': function (x, y, w, h) {
			return [
				M, x + w / 2, y,
				L, x + w, y + h,
				x, y + h,
				'Z'
			];
		},

		'triangle-down': function (x, y, w, h) {
			return [
				M, x, y,
				L, x + w, y,
				x + w / 2, y + h,
				'Z'
			];
		},
		'diamond': function (x, y, w, h) {
			return [
				M, x + w / 2, y,
				L, x + w, y + h / 2,
				x + w / 2, y + h,
				x, y + h / 2,
				'Z'
			];
		},
		'arc': function (x, y, w, h, options) {
			var start = options.start,
				radius = w,
				end = options.end - 0.000001, // to prevent cos and sin of start and end from becoming equal on 360 arcs
				innerRadius = options.innerR,
				cosStart = mathCos(start),
				sinStart = mathSin(start),
				cosEnd = mathCos(end),
				sinEnd = mathSin(end),
				longArc = options.end - start < mathPI ? 0 : 1;

			return [
				M,
				x + radius * cosStart,
				y + radius * sinStart,
				'A', // arcTo
				radius, // x radius
				radius, // y radius
				0, // slanting
				longArc, // long or short arc
				1, // clockwise
				x + radius * cosEnd,
				y + radius * sinEnd,
				L,
				x + innerRadius * cosEnd,
				y + innerRadius * sinEnd,
				'A', // arcTo
				innerRadius, // x radius
				innerRadius, // y radius
				0, // slanting
				longArc, // long or short arc
				0, // clockwise
				x + innerRadius * cosStart,
				y + innerRadius * sinStart,

				'Z' // close
			];
		}
	},

	/**
	 * Define a clipping rectangle
	 * @param {String} id
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	clipRect: function (x, y, width, height) {
		var wrapper,
			id = PREFIX + idCounter++,

			clipPath = this.createElement('clipPath').attr({
				id: id
			}).add(this.defs);

		wrapper = this.rect(x, y, width, height, 0).add(clipPath);
		wrapper.id = id;

		return wrapper;
	},


	/**
	 * Take a color and return it if it's a string, make it a gradient if it's a
	 * gradient configuration object
	 *
	 * @param {Object} color The color or config object
	 */
	color: function(color, elem, prop) {
		var colorObject,
			regexRgba = /^rgba/;
		if (color && color.linearGradient) {
			var renderer = this,
				strLinearGradient = 'linearGradient',
				linearGradient = color[strLinearGradient],
				id = PREFIX + idCounter++,
				gradientObject,
				stopColor,
				stopOpacity;
			gradientObject = renderer.createElement(strLinearGradient).attr({
				id: id,
				gradientUnits: 'userSpaceOnUse',
				x1: linearGradient[0],
				y1: linearGradient[1],
				x2: linearGradient[2],
				y2: linearGradient[3]
			}).add(renderer.defs);

			each(color.stops, function(stop) {
				if (regexRgba.test(stop[1])) {
					colorObject = Color(stop[1]);
					stopColor = colorObject.get('rgb');
					stopOpacity = colorObject.get('a');
				} else {
					stopColor = stop[1];
					stopOpacity = 1;
				}
				renderer.createElement('stop').attr({
					offset: stop[0],
					'stop-color': stopColor,
					'stop-opacity': stopOpacity
				}).add(gradientObject);
			});

			return 'url('+ this.url +'#'+ id +')';

		// Webkit and Batik can't show rgba.
		} else if (regexRgba.test(color)) {
			colorObject = Color(color);
			attr(elem, prop +'-opacity', colorObject.get('a'));

			return colorObject.get('rgb');


		} else {
			return color;
		}

	},


	/**
	 * Add text to the SVG object
	 * @param {String} str
	 * @param {Number} x Left position
	 * @param {Number} y Top position
	 */
	text: function(str, x, y) {

		// declare variables
		var renderer = this,
			defaultChartStyle = defaultOptions.chart.style,
			wrapper,
			box;

		x = mathRound(pick(x, 0));
		y = mathRound(pick(y, 0));

		wrapper = renderer.createElement('text')
			.attr({
				x: x,
				y: y,
				text: str
			})
			.css({
				fontFamily: defaultChartStyle.fontFamily,
				fontSize: defaultChartStyle.fontSize
			});

		wrapper.x = x;
		wrapper.y = y;
		return wrapper;
	},

	/**
	 * Add a label, a text item that can hold a colored or gradient background
	 * as well as a border and shadow.
	 * @param {string} str
	 * @param {Number} x
	 * @param {Number} y
	 * @param {String} shape
	 * @param {Number} anchorX In case the shape has a pointer, like a flag, this is the
	 *    coordinates it should be pinned to
	 * @param {Number} anchorY
	 */
	label: function(str, x, y, shape, anchorX, anchorY) {

		var renderer = this,
			wrapper = renderer.text(str),
			box,
			bBox,
			align = 'left',
			padding = 2,
			width,
			height,
			xAdjust,
			deferredAttr = {};

		function updateBoxSize() {
			bBox = (width === undefined || height === undefined || wrapper.styles.textAlign) && wrapper.getBBox(true);
			var w = (width || bBox.width) + 2 * padding,
				h = (height || bBox.height) + 2 * padding,
				anchors;

			xAdjust = mathRound(w * { left: 0, center: 0.5, right: 1 }[align]);
			anchors = anchorX !== undefined && {
				anchorX: anchorX - x + xAdjust,
				anchorY: anchorY - y
			};

			if (!box) {
				wrapper.box = box = shape ?
					renderer.symbol(shape, 0, 0, w, h, anchors) :
					renderer.rect(0, 0, w, h, 0, deferredAttr['stroke-width']);
				box.add(); // to get the translation right in IE
			}

			box.attr(merge({
				width: w,
				height: h
			}, anchors, deferredAttr));
			deferredAttr = null;
		}

		/**
		 * Set box attributes, or defer them if the box is not yet created
		 * @param {Object} key
		 * @param {Object} value
		 */
		function boxAttr(key, value) {
			if (box) {
				box.attr(key, value);
			} else {
				deferredAttr[key] = value;
			}

		}

		addEvent(wrapper, 'add', function() {


			updateBoxSize();

			var boxElem = box.element,
				wrapperElem = wrapper.element,
				zIndex = attr(wrapperElem, 'zIndex');
			if (defined(zIndex)) {
				attr(boxElem, 'zIndex', zIndex);
			}
			wrapperElem.parentNode.insertBefore(boxElem, wrapperElem);


			wrapper.attr({
				x: x,
				y: y
			});
		});

		addEvent(wrapper, 'setAttr', function(e) {
			var key = e.key,
				value = e.value,
				elem = wrapper,
				textAlign,
				ret;

			// change local variables
			if (key === 'width') {
				width = value;
				ret = false;
			} else if (key === 'height') {
				height = value;
				ret = false;
			} else if (key === 'padding') {
				padding = value;
				ret = false;

			// change local variable and set attribue as well
			} else if (key === 'align') {
				align = value;
				//ret = false;

			// apply these to the box and the text alike
			} else if (key === 'visibility' || key === 'zIndex') {
				boxAttr(key, value);
			}

			// apply these to the box but not to the text
			else if (key === 'stroke' || key === 'stroke-width' || key === 'fill' || key === 'r') {
				boxAttr(key, value);
				ret = false;
			}

			// change box attributes and return modified values
			else if (key === 'x') {
				textAlign = wrapper.styles.textAlign;
				boxAttr('translateX', value - xAdjust);
				if (align === 'left' && defined(width) && (textAlign === 'center' || textAlign === 'right')) {
					value += { center: 0.5, right: 1 }[textAlign] * (width - bBox.width);
				}
				ret = mathRound(value + { left: 1, center: 0, right: -1 }[align] * padding);
			} else if (key === 'y') {
				boxAttr('translateY', value);
				ret = mathRound(value + pInt(wrapper.styles.fontSize || 12) * 1.2);
			}

			else if (key === 'text') {
				e.callback = updateBoxSize;
			}
			if (ret !== UNDEFINED) {
				return ret;
			}
		});

		wrapper.txtToFront = wrapper.toFront;

		return extend(wrapper, {
			shadow: function(b) {
				box.shadow(b);
				return wrapper;
			},
			toFront: function() {
				box.toFront();
				wrapper.txtToFront();
			}
		});
	}
}; // end SVGRenderer


// general renderer
Renderer = SVGRenderer;



/* ****************************************************************************
 *                                                                            *
 * START OF INTERNET EXPLORER <= 8 SPECIFIC CODE                              *
 *                                                                            *
 * For applications and websites that don't need IE support, like platform    *
 * targeted mobile apps and web apps, this code can be removed.               *
 *                                                                            *
 *****************************************************************************/

/**
 * @constructor
 */
var VMLRenderer;
if (!hasSVG) {

/**
 * The VML element wrapper.
 */
var VMLElement = extendClass( SVGElement, {

	/**
	 * Initialize a new VML element wrapper. It builds the markup as a string
	 * to minimize DOM traffic.
	 * @param {Object} renderer
	 * @param {Object} nodeName
	 */
	init: function(renderer, nodeName) {
		var markup =  ['<', nodeName, ' filled="f" stroked="f"'],
			style = ['position: ', ABSOLUTE, ';'];

		// divs and shapes need size
		if (nodeName === 'shape' || nodeName === DIV) {
			style.push('left:0;top:0;width:10px;height:10px;');
		}
		if (docMode8) {
			style.push('visibility: ', nodeName === DIV ? HIDDEN : VISIBLE);
		}

		markup.push(' style="', style.join(''), '"/>');

		// create element with default attributes and style
		if (nodeName) {
			markup = nodeName === DIV || nodeName === 'span' || nodeName === 'img' ?
				markup.join('')
				: renderer.prepVML(markup);
			this.element = createElement(markup);
		}

		this.renderer = renderer;
	},

	/**
	 * Add the node to the given parent
	 * @param {Object} parent
	 */
	add: function(parent) {
		var wrapper = this,
			renderer = wrapper.renderer,
			element = wrapper.element,
			box = renderer.box,
			inverted = parent && parent.inverted,

			// get the parent node
			parentNode = parent ?
				parent.element || parent :
				box;


		// if the parent group is inverted, apply inversion on all children
		if (inverted) { // only on groups
			renderer.invertChild(element, parentNode);
		}

		// issue #140 workaround - related to #61 and #74
		if (docMode8 && parentNode.gVis === HIDDEN) {
			css(element, { visibility: HIDDEN });
		}

		// append it
		parentNode.appendChild(element);

		// align text after adding to be able to read offset
		wrapper.added = true;
		if (wrapper.alignOnAdd && !wrapper.deferUpdateTransform) {
			wrapper.updateTransform();
		}

		// fire an event for internal hooks
		fireEvent(wrapper, 'add');

		return wrapper;
	},

	/**
	 * Get or set attributes
	 */
	attr: function(hash, val) {
		var wrapper = this,
			key,
			value,
			i,
			result,
			element = wrapper.element || {},
			elemStyle = element.style,
			nodeName = element.nodeName,
			renderer = wrapper.renderer,
			symbolName = wrapper.symbolName,
			childNodes,
			hasSetSymbolSize,
			shadows = wrapper.shadows,
			skipAttr,
			ret = wrapper;

		// single key-value pair
		if (isString(hash) && defined(val)) {
			key = hash;
			hash = {};
			hash[key] = val;
		}

		// used as a getter, val is undefined
		if (isString(hash)) {
			key = hash;
			if (key === 'strokeWidth' || key === 'stroke-width') {
				ret = wrapper.strokeweight;
			} else {
				ret = wrapper[key];
			}

		// setter
		} else {
			for (key in hash) {
				value = hash[key];
				skipAttr = false;

				fireEvent(wrapper, 'setAttr', { key: key, value: value }, function(e) {
					result = e.result;
					if (defined(result) && result !== false) {
						value = result;
					}

					// prepare paths
					// symbols
					if (symbolName && /^(x|y|r|start|end|width|height|innerR)/.test(key)) {
						// if one of the symbol size affecting parameters are changed,
						// check all the others only once for each call to an element's
						// .attr() method
						if (!hasSetSymbolSize) {

							wrapper.symbolAttr(hash);

							hasSetSymbolSize = true;
						}

						skipAttr = true;

					} else if (key === 'd') {
						value = value || [];
						wrapper.d = value.join(' '); // used in getter for animation

						// convert paths
						i = value.length;
						var convertedPath = [];
						while (i--) {

							// Multiply by 10 to allow subpixel precision.
							// Substracting half a pixel seems to make the coordinates
							// align with SVG, but this hasn't been tested thoroughly
							if (isNumber(value[i])) {
								convertedPath[i] = mathRound(value[i] * 10) - 5;
							}
							// close the path
							else if (value[i] === 'Z') {
								convertedPath[i] = 'x';
							}
							else {
								convertedPath[i] = value[i];
							}

						}
						value = convertedPath.join(' ') || 'x';
						element.path = value;

						// update shadows
						if (shadows) {
							i = shadows.length;
							while (i--) {
								shadows[i].path = value;
							}
						}
						skipAttr = true;

					// directly mapped to css
					} else if (key === 'zIndex' || key === 'visibility') {

						// issue 61 workaround
						if (docMode8 && key === 'visibility' && nodeName === 'DIV') {
							element.gVis = value;
							childNodes = element.childNodes;
							i = childNodes.length;
							while (i--) {
								css(childNodes[i], { visibility: value });
							}
							if (value === VISIBLE) { // issue 74
								value = null;
							}
						}

						if (value) {
							elemStyle[key] = value;
						}



						skipAttr = true;

					// width and height
					} else if (key === 'width' || key === 'height') {


						// clipping rectangle special
						if (wrapper.updateClipping) {
							wrapper[key] = value;
							wrapper.updateClipping();

						} else {
							// normal
							elemStyle[key] = value;
						}

						skipAttr = true;

					// x and y
					} else if (/^(x|y)$/.test(key)) {

						wrapper[key] = value; // used in getter

						if (element.tagName === 'SPAN') {
							wrapper.updateTransform();

						} else {
							elemStyle[{ x: 'left', y: 'top' }[key]] = value;
						}

					// class name
					} else if (key === 'class') {
						// IE8 Standards mode has problems retrieving the className
						element.className = value;

					// stroke
					} else if (key === 'stroke') {

						value = renderer.color(value, element, key);

						key = 'strokecolor';

					// stroke width
					} else if (key === 'stroke-width' || key === 'strokeWidth') {
						element.stroked = value ? true : false;
						key = 'strokeweight';
						wrapper[key] = value; // used in getter, issue #113
						if (isNumber(value)) {
							value += PX;
						}

					// dashStyle
					} else if (key === 'dashstyle') {
						var strokeElem = element.getElementsByTagName('stroke')[0] ||
							createElement(renderer.prepVML(['<stroke/>']), null, null, element);
						strokeElem[key] = value || 'solid';
						wrapper.dashstyle = value; /* because changing stroke-width will change the dash length
							and cause an epileptic effect */
						skipAttr = true;

					// fill
					} else if (key === 'fill') {

						if (nodeName === 'SPAN') { // text color
							elemStyle.color = value;
						} else {
							element.filled = value !== NONE ? true : false;

							value = renderer.color(value, element, key);

							key = 'fillcolor';
						}

					// translation for animation
					} else if (key === 'translateX' || key === 'translateY' || key === 'rotation' || key === 'align') {
						if (key === 'align') {
							key = 'textAlign';
						}
						wrapper[key] = value;
						wrapper.updateTransform();

						skipAttr = true;
					}

					// text for rotated and non-rotated elements
					else if (key === 'text') {
						this.bBox = null;
						element.innerHTML = value;
						skipAttr = true;
					}


					// let the shadow follow the main element
					if (shadows && key === 'visibility') {
						i = shadows.length;
						while (i--) {
							shadows[i].style[key] = value;
						}
					}



					if (!skipAttr) {
						if (docMode8) { // IE8 setAttribute bug
							try {
							element[key] = value;
							} catch(e) {
								console.log([element.tagName, key, value].join(', '));
								}
						} else {
							attr(element, key, value);
						}
					}


					if (e.callback) {
						e.callback();
					}
				});
			}
		}
		return ret;
	},

	/**
	 * Set the element's clipping to a predefined rectangle
	 *
	 * @param {String} id The id of the clip rectangle
	 */
	clip: function(clipRect) {
		var wrapper = this,
			clipMembers = clipRect.members;

		clipMembers.push(wrapper);
		wrapper.destroyClip = function() {
			erase(clipMembers, wrapper);
		};
		return wrapper.css(clipRect.getCSS(wrapper.inverted));
	},

	/**
	 * Set styles for the element
	 * @param {Object} styles
	 */
	css: function(styles) {
		var wrapper = this,
			element = wrapper.element,
			textWidth = styles && element.tagName === 'SPAN' && styles.width;

		if (textWidth) {
			delete styles.width;
			wrapper.textWidth = textWidth;
			wrapper.updateTransform();
		}

		wrapper.styles = extend(wrapper.styles, styles);
		css(wrapper.element, styles);

		return wrapper;
	},

	/**
	 * Extend element.destroy by removing it from the clip members array
	 */
	destroy: function() {
		var wrapper = this;

		if (wrapper.destroyClip) {
			wrapper.destroyClip();
		}

		SVGElement.prototype.destroy.apply(wrapper);
	},

	/**
	 * Remove all child nodes of a group, except the v:group element
	 */
	empty: function() {
		var element = this.element,
			childNodes = element.childNodes,
			i = childNodes.length,
			node;

		while (i--) {
			node = childNodes[i];
			node.parentNode.removeChild(node);
		}
	},

	/**
	 * VML override for calculating the bounding box based on offsets
	 * @param {Boolean} refresh Whether to force a fresh value from the DOM or to 
	 * use the cached value
	 * 
	 * @return {Object} A hash containing values for x, y, width and height
	 */

	getBBox: function(refresh) {
		var wrapper = this,
			element = wrapper.element,
			bBox = wrapper.bBox;

		// faking getBBox in exported SVG in legacy IE
		if (!bBox || refresh) {
			// faking getBBox in exported SVG in legacy IE
			if (element.nodeName === 'text') {
				element.style.position = ABSOLUTE;
			}

			bBox = wrapper.bBox = {
				x: element.offsetLeft,
				y: element.offsetTop,
				width: element.offsetWidth,
				height: element.offsetHeight
			};
		}

		return bBox;
	},

	/**
	 * Add an event listener. VML override for normalizing event parameters.
	 * @param {String} eventType
	 * @param {Function} handler
	 */
	on: function(eventType, handler) {
		// simplest possible event model for internal use
		this.element['on'+ eventType] = function() {
			var evt = win.event;
			evt.target = evt.srcElement;
			handler(evt);
		};
		return this;
	},


	/**
	 * VML override private method to update elements based on internal
	 * properties based on SVG transform
	 */
	updateTransform: function(hash) {
		// aligning non added elements is expensive
		if (!this.added) {
			this.alignOnAdd = true;
			return;
		}

		var wrapper = this,
			elem = wrapper.element,
			translateX = wrapper.translateX || 0,
			translateY = wrapper.translateY || 0,
			x = wrapper.x || 0,
			y = wrapper.y || 0,
			align = wrapper.textAlign || 'left',
			alignCorrection = { left: 0, center: 0.5, right: 1 }[align],
			nonLeft = align && align !== 'left',
			shadows = wrapper.shadows;

		// apply translate
		if (translateX || translateY) {
			css(elem, {
				marginLeft: translateX,
				marginTop: translateY
			});
			if (shadows) { // used in labels/tooltip
				each(shadows, function(shadow) {
					css(shadow, {
						marginLeft: translateX + 1,
						marginTop: translateY + 1
					});
				});
			}
		}

		// apply inversion
		if (wrapper.inverted) { // wrapper is a group
			each(elem.childNodes, function(child) {
				wrapper.renderer.invertChild(child, elem);
			});
		}

		if (elem.tagName === 'SPAN') {

			var width, height,
				rotation = wrapper.rotation,
				lineHeight,
				radians = 0,
				costheta = 1,
				sintheta = 0,
				quad,
				textWidth = pInt(wrapper.textWidth),
				xCorr = wrapper.xCorr || 0,
				yCorr = wrapper.yCorr || 0,
				currentTextTransform = [rotation, align, elem.innerHTML, wrapper.textWidth].join(',');

			if (currentTextTransform !== wrapper.cTT) { // do the calculations and DOM access only if properties changed

				if (defined(rotation)) {
					radians = rotation * deg2rad; // deg to rad
					costheta = mathCos(radians);
					sintheta = mathSin(radians);

					// Adjust for alignment and rotation.
					// Test case: http://highcharts.com/tests/?file=text-rotation
					css(elem, {
						filter: rotation ? ['progid:DXImageTransform.Microsoft.Matrix(M11=', costheta,
							', M12=', -sintheta, ', M21=', sintheta, ', M22=', costheta,
							', sizingMethod=\'auto expand\')'].join('') : NONE
					});
				}

				width = pick(wrapper.elemWidth, elem.offsetWidth);
				height = pick(wrapper.elemHeight, elem.offsetHeight);

				// update textWidth
				if (width > textWidth) {
					css(elem, {
						width: textWidth +PX,
						display: 'block',
						whiteSpace: 'normal'
					});
					width = textWidth;
				}

				// correct x and y
				lineHeight = mathRound((pInt(elem.style.fontSize) || 12) * 1.2);
				xCorr = costheta < 0 && -width;
				yCorr = sintheta < 0 && -height;

				// correct for lineHeight and corners spilling out after rotation
				quad = costheta * sintheta < 0;
				xCorr += sintheta * lineHeight * (quad ? 1 - alignCorrection : alignCorrection);
				yCorr -= costheta * lineHeight * (rotation ? (quad ? alignCorrection : 1 - alignCorrection) : 1);

				// correct for the length/height of the text
				if (nonLeft) {
					xCorr -= width * alignCorrection * (costheta < 0 ? -1 : 1);
					if (rotation) {
						yCorr -= height * alignCorrection * (sintheta < 0 ? -1 : 1);
					}
					css(elem, {
						textAlign: align
					});
				}

				// record correction
				wrapper.xCorr = xCorr;
				wrapper.yCorr = yCorr;
			}

			// apply position with correction
			css(elem, {
				left: x + xCorr,
				top: y + yCorr
			});

			// record current text transform
			wrapper.cTT = currentTextTransform;
		}
	},

	/**
	 * Apply a drop shadow by copying elements and giving them different strokes
	 * @param {Boolean} apply
	 */
	shadow: function(apply, group) {
		var shadows = [],
			i,
			element = this.element,
			renderer = this.renderer,
			shadow,
			elemStyle = element.style,
			markup,
			path = element.path;

		// some times empty paths are not strings
		if (path && typeof path.value !== 'string') {
			path = 'x';
		}

		if (apply) {
			for (i = 1; i <= 3; i++) {
				markup = ['<shape isShadow="true" strokeweight="', ( 7 - 2 * i ) ,
					'" filled="false" path="', path,
					'" coordsize="100,100" style="', element.style.cssText, '" />'];
				shadow = createElement(renderer.prepVML(markup),
					null, {
						left: pInt(elemStyle.left) + 1,
						top: pInt(elemStyle.top) + 1
					}
				);

				// apply the opacity
				markup = ['<stroke color="black" opacity="', (0.05 * i), '"/>'];
				createElement(renderer.prepVML(markup), null, null, shadow);


				// insert it
				if (group) {
					group.element.appendChild(shadow);
				} else {
					element.parentNode.insertBefore(shadow, element);
				}

				// record it
				shadows.push(shadow);

			}

			this.shadows = shadows;
		}
		return this;

	}
});

/**
 * The VML renderer
 */
VMLRenderer = function() {
	this.init.apply(this, arguments);
};
VMLRenderer.prototype = merge( SVGRenderer.prototype, { // inherit SVGRenderer

	Element: VMLElement,
	isIE8: userAgent.indexOf('MSIE 8.0') > -1,


	/**
	 * Initialize the VMLRenderer
	 * @param {Object} container
	 * @param {Number} width
	 * @param {Number} height
	 */
	init: function(container, width, height) {
		var renderer = this,
			boxWrapper;

		renderer.alignedObjects = [];

		boxWrapper = renderer.createElement(DIV);
		container.appendChild(boxWrapper.element);


		// generate the containing box
		renderer.box = boxWrapper.element;
		renderer.boxWrapper = boxWrapper;


		renderer.setSize(width, height, false);

		// The only way to make IE6 and IE7 print is to use a global namespace. However,
		// with IE8 the only way to make the dynamic shapes visible in screen and print mode
		// seems to be to add the xmlns attribute and the behaviour style inline.
		if (!doc.namespaces.hcv) {

			doc.namespaces.add('hcv', 'urn:schemas-microsoft-com:vml');

			// setup default css
			doc.createStyleSheet().cssText =
				'hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke'+
				'{ behavior:url(#default#VML); display: inline-block; } ';

		}
	},

	/**
	 * Define a clipping rectangle. In VML it is accomplished by storing the values
	 * for setting the CSS style to all associated members.
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	clipRect: function (x, y, width, height) {

		// create a dummy element
		var clipRect = this.createElement();

		// mimic a rectangle with its style object for automatic updating in attr
		return extend(clipRect, {
			members: [],
			left: x,
			top: y,
			width: width,
			height: height,
			getCSS: function(inverted) {
				var rect = this,//clipRect.element.style,
					top = rect.top,
					left = rect.left,
					right = left + rect.width,
					bottom = top + rect.height,
					ret = {
						clip: 'rect('+
							mathRound(inverted ? left : top) + 'px,'+
							mathRound(inverted ? bottom : right) + 'px,'+
							mathRound(inverted ? right : bottom) + 'px,'+
							mathRound(inverted ? top : left) +'px)'
					};

				// issue 74 workaround
				if (!inverted && docMode8) {
					extend(ret, {
						width: right +PX,
						height: bottom +PX
					});
				}
				return ret;
			},

			// used in attr and animation to update the clipping of all members
			updateClipping: function() {
				each(clipRect.members, function(member) {
					member.css(clipRect.getCSS(member.inverted));
				});
			}
		});

	},


	/**
	 * Take a color and return it if it's a string, make it a gradient if it's a
	 * gradient configuration object, and apply opacity.
	 *
	 * @param {Object} color The color or config object
	 */
	color: function(color, elem, prop) {
		var colorObject,
			regexRgba = /^rgba/,
			markup;

		if (color && color.linearGradient) {

			var stopColor,
				stopOpacity,
				linearGradient = color.linearGradient,
				angle,
				color1,
				opacity1,
				color2,
				opacity2;

			each(color.stops, function(stop, i) {
				if (regexRgba.test(stop[1])) {
					colorObject = Color(stop[1]);
					stopColor = colorObject.get('rgb');
					stopOpacity = colorObject.get('a');
				} else {
					stopColor = stop[1];
					stopOpacity = 1;
				}

				if (!i) { // first
					color1 = stopColor;
					opacity1 = stopOpacity;
				} else {
					color2 = stopColor;
					opacity2 = stopOpacity;
				}
			});



			// calculate the angle based on the linear vector
			angle = 90  - math.atan(
				(linearGradient[3] - linearGradient[1]) / // y vector
				(linearGradient[2] - linearGradient[0]) // x vector
				) * 180 / mathPI;

			// when colors attribute is used, the meanings of opacity and o:opacity2
			// are reversed.
			markup = ['<', prop, ' colors="0% ', color1, ',100% ', color2, '" angle="', angle,
				'" opacity="', opacity2, '" o:opacity2="', opacity1,
				'" type="gradient" focus="100%" />'];
			createElement(this.prepVML(markup), null, null, elem);



		// if the color is an rgba color, split it and add a fill node
		// to hold the opacity component
		} else if (regexRgba.test(color) && elem.tagName !== 'IMG') {

			colorObject = Color(color);

			markup = ['<', prop, ' opacity="', colorObject.get('a'), '"/>'];
			createElement(this.prepVML(markup), null, null, elem);

			return colorObject.get('rgb');


		} else {
			return color;
		}

	},

	/**
	 * Take a VML string and prepare it for either IE8 or IE6/IE7.
	 * @param {Array} markup A string array of the VML markup to prepare
	 */
	prepVML: function(markup) {
		var vmlStyle = 'display:inline-block;behavior:url(#default#VML);',
			isIE8 = this.isIE8;

		markup = markup.join('');

		if (isIE8) { // add xmlns and style inline
			markup = markup.replace('/>', ' xmlns="urn:schemas-microsoft-com:vml" />');
			if (markup.indexOf('style="') === -1) {
				markup = markup.replace('/>', ' style="'+ vmlStyle +'" />');
			} else {
				markup = markup.replace('style="', 'style="'+ vmlStyle);
			}

		} else { // add namespace
			markup = markup.replace('<', '<hcv:');
		}

		return markup;
	},

	/**
	 * Create rotated and aligned text
	 * @param {String} str
	 * @param {Number} x
	 * @param {Number} y
	 */
	text: function(str, x, y) {

		var defaultChartStyle = defaultOptions.chart.style;

		return this.createElement('span')
			.attr({
				text: str,
				x: mathRound(x),
				y: mathRound(y)
			})
			.css({
				whiteSpace: 'nowrap',
				fontFamily: defaultChartStyle.fontFamily,
				fontSize: defaultChartStyle.fontSize
			});
	},

	/**
	 * Create and return a path element
	 * @param {Array} path
	 */
	path: function (path) {
		// create the shape
		return this.createElement('shape').attr({
			// subpixel precision down to 0.1 (width and height = 10px)
			coordsize: '100 100',
			d: path
		});
	},

	/**
	 * Create and return a circle element. In VML circles are implemented as
	 * shapes, which is faster than v:oval
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} r
	 */
	circle: function(x, y, r) {
		return this.symbol('circle').attr({ x: x, y: y, r: r});
	},

	/**
	 * Create a group using an outer div and an inner v:group to allow rotating
	 * and flipping. A simple v:group would have problems with positioning
	 * child HTML elements and CSS clip.
	 *
	 * @param {String} name The name of the group
	 */
	g: function(name) {
		var wrapper,
			attribs;

		// set the class name
		if (name) {
			attribs = { 'className': PREFIX + name, 'class': PREFIX + name };
		}

		// the div to hold HTML and clipping
		wrapper = this.createElement(DIV).attr(attribs);

		return wrapper;
	},

	/**
	 * VML override to create a regular HTML image
	 * @param {String} src
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} width
	 * @param {Number} height
	 */
	image: function(src, x, y, width, height) {
		var obj = this.createElement('img')
			.attr({ src: src });

		if (arguments.length > 1) {
			obj.css({
				left: x,
				top: y,
				width: width,
				height: height
			});
		}
		return obj;
	},

	/**
	 * VML uses a shape for rect to overcome bugs and rotation problems
	 */
	rect: function(x, y, width, height, r, strokeWidth) {

		if (isObject(x)) {
			y = x.y;
			width = x.width;
			height = x.height;
			strokeWidth = x.strokeWidth;
			x = x.x;
		}
		var wrapper = this.symbol('rect');
		wrapper.r = r;

		return wrapper.attr(wrapper.crisp(strokeWidth, x, y, mathMax(width, 0), mathMax(height, 0)));
	},

	/**
	 * In the VML renderer, each child of an inverted div (group) is inverted
	 * @param {Object} element
	 * @param {Object} parentNode
	 */
	invertChild: function(element, parentNode) {
		var parentStyle = parentNode.style;

		css(element, {
			flip: 'x',
			left: pInt(parentStyle.width) - 10,
			top: pInt(parentStyle.height) - 10,
			rotation: -90
		});
	},

	/**
	 * Symbol definitions that override the parent SVG renderer's symbols
	 *
	 */
	symbols: {
		// VML specific arc function
		arc: function (x, y, w, h, options) {
			var start = options.start,
				end = options.end,
				radius = w,
				cosStart = mathCos(start),
				sinStart = mathSin(start),
				cosEnd = mathCos(end),
				sinEnd = mathSin(end),
				innerRadius = options.innerR,
				circleCorrection = 0.07 / radius,
				innerCorrection = (innerRadius && 0.1 / innerRadius) || 0;

			if (end - start === 0) { // no angle, don't show it.
				return ['x'];

			//} else if (end - start == 2 * mathPI) { // full circle
			} else if (2 * mathPI - end + start < circleCorrection) { // full circle
				// empirical correction found by trying out the limits for different radii
				cosEnd = - circleCorrection;
			} else if (end - start < innerCorrection) { // issue #186, another mysterious VML arc problem
				cosEnd = mathCos(start + innerCorrection);
			}

			return [
				'wa', // clockwise arc to
				x - radius, // left
				y - radius, // top
				x + radius, // right
				y + radius, // bottom
				x + radius * cosStart, // start x
				y + radius * sinStart, // start y
				x + radius * cosEnd, // end x
				y + radius * sinEnd, // end y


				'at', // anti clockwise arc to
				x - innerRadius, // left
				y - innerRadius, // top
				x + innerRadius, // right
				y + innerRadius, // bottom
				x + innerRadius * cosEnd, // start x
				y + innerRadius * sinEnd, // start y
				x + innerRadius * cosStart, // end x
				y + innerRadius * sinStart, // end y

				'x', // finish path
				'e' // close
			];

		},
		// Add circle symbol path. This performs significantly faster than v:oval.
		circle: function (x, y, w, h) {

			return [
				'wa', // clockwisearcto
				x, // left
				y, // top
				x + w, // right
				y + h, // bottom
				x + w, // start x
				y + h / 2,     // start y
				x + w, // end x
				y + h / 2,     // end y
				//'x', // finish path
				'e' // close
			];
		},
		/**
		 * Add rectangle symbol path which eases rotation and omits arcsize problems
		 * compared to the built-in VML roundrect shape
		 *
		 * @param {Number} left Left position
		 * @param {Number} top Top position
		 * @param {Number} r Border radius
		 * @param {Object} options Width and height
		 */

		rect: function (left, top, width, height, options) {
			/*for (var n in r) {
				logTime && console.log(n)
				}*/

			if (!defined(options)) {
				return [];
			}
			var right = left + width,
				bottom = top + height,
				r = mathMin(options.r || 0, width, height);

			return [
				M,
				left + r, top,

				L,
				right - r, top,
				'wa',
				right - 2 * r, top,
				right, top + 2 * r,
				right - r, top,
				right, top + r,

				L,
				right, bottom - r,
				'wa',
				right - 2 * r, bottom - 2 * r,
				right, bottom,
				right, bottom - r,
				right - r, bottom,

				L,
				left + r, bottom,
				'wa',
				left, bottom - 2 * r,
				left + 2 * r, bottom,
				left + r, bottom,
				left, bottom - r,

				L,
				left, top + r,
				'wa',
				left, top,
				left + 2 * r, top + 2 * r,
				left, top + r,
				left + r, top,


				'x',
				'e'
			];

		}
	}
});

	// general renderer
	Renderer = VMLRenderer;
}

/* ****************************************************************************
 *                                                                            *
 * END OF INTERNET EXPLORER <= 8 SPECIFIC CODE                                *
 *                                                                            *
 *****************************************************************************/

/**
 * The chart class
 * @param {Object} options
 * @param {Function} callback Function to run when the chart has loaded
 */
function Chart (options, callback) {

	defaultXAxisOptions = merge(defaultXAxisOptions, defaultOptions.xAxis);
	defaultYAxisOptions = merge(defaultYAxisOptions, defaultOptions.yAxis);
	defaultOptions.xAxis = defaultOptions.yAxis = null;

	// Handle regular options
	var seriesOptions = options.series; // skip merging data points to increase performance
	options.series = null;
	options = merge(defaultOptions, options); // do the merge
	options.series = seriesOptions; // set back the series data

	// Define chart variables
	var optionsChart = options.chart,
		optionsMargin = optionsChart.margin,
		margin = isObject(optionsMargin) ?
			optionsMargin :
			[optionsMargin, optionsMargin, optionsMargin, optionsMargin],
		optionsMarginTop = pick(optionsChart.marginTop, margin[0]),
		optionsMarginRight = pick(optionsChart.marginRight, margin[1]),
		optionsMarginBottom = pick(optionsChart.marginBottom, margin[2]),
		optionsMarginLeft = pick(optionsChart.marginLeft, margin[3]),
		spacingTop = optionsChart.spacingTop,
		spacingRight = optionsChart.spacingRight,
		spacingBottom = optionsChart.spacingBottom,
		spacingLeft = optionsChart.spacingLeft,
		spacingBox,
		chartTitleOptions,
		chartSubtitleOptions,
		plotTop,
		marginRight,
		marginBottom,
		plotLeft,
		axisOffset,
		renderTo,
		renderToClone,
		container,
		containerId,
		containerWidth,
		containerHeight,
		chartWidth,
		chartHeight,
		oldChartWidth,
		oldChartHeight,
		chartBackground,
		plotBackground,
		plotBGImage,
		plotBorder,
		chart = this,
		chartEvents = optionsChart.events,
		runChartClick = chartEvents && !!chartEvents.click,
		eventType,
		isInsidePlot, // function
		tooltip,
		mouseIsDown,
		loadingDiv,
		loadingSpan,
		loadingShown,
		plotHeight,
		plotWidth,
		tracker,
		trackerGroup,
		placeTrackerGroup,
		legend,
		legendWidth,
		legendHeight,
		chartPosition,// = getPosition(container),
		hasCartesianSeries = optionsChart.showAxes,
		isResizing = 0,
		axes = [],
		maxTicks, // handle the greatest amount of ticks on grouped axes
		series = [],
		inverted,
		renderer,
		tooltipTick,
		tooltipInterval,
		hoverX,
		drawChartBox, // function
		getMargins, // function
		resetMargins, // function
		setChartSize, // function
		resize,
		zoom, // function
		zoomOut; // function


	/**
	 * Create a new axis object
	 * @param {Object} options
	 */
	function Axis (options) {

		// Define variables
		var isXAxis = options.isX,
			opposite = options.opposite, // needed in setOptions
			horiz = inverted ? !isXAxis : isXAxis,
			side = horiz ?
				(opposite ? 0 /* top */  : 2 /* bottom */) :
				(opposite ? 1 /* right*/ : 3 /* left */  ),
			stacks = {};


		options = merge(
				isXAxis ? defaultXAxisOptions : defaultYAxisOptions,
				[defaultTopAxisOptions, defaultRightAxisOptions,
					defaultBottomAxisOptions, defaultLeftAxisOptions][side],
				options
			);

		var axis = this,
			type = options.type,
			isDatetimeAxis = type === 'datetime',
			isLog = type === 'logarithmic',
			offset = options.offset || 0,
			xOrY = isXAxis ? 'x' : 'y',
			axisLength,
			transA, // translation factor
			transB, // translation addend
			oldTransA, // used for prerendering
			axisLeft,
			axisTop,
			axisWidth,
			axisHeight,
			axisBottom,
			axisRight,
			translate, // fn
			getPlotLinePath, // fn
			axisGroup,
			gridGroup,
			axisLine,
			dataMin,
			dataMax,
			associatedSeries,
			range = options.range,
			userMin,
			userMax,
			max = null,
			min = null,
			oldMin,
			oldMax,
			minPadding = options.minPadding,
			maxPadding = options.maxPadding,
			isLinked = defined(options.linkedTo),
			ignoreMinPadding, // can be set to true by a column or bar series
			ignoreMaxPadding,
			usePercentage,
			events = options.events,
			eventType,
			padAxis,
			plotLinesAndBands = [],
			tickInterval,
			minorTickInterval,
			magnitude,
			tickPositions, // array containing predefined positions
			ticks = {},
			minorTicks = {},
			alternateBands = {},
			tickAmount,
			labelOffset,
			labelHeight,
			axisTitleMargin,// = options.title.margin,
			dateTimeLabelFormat,
			categories = options.categories,
			labelFormatter = options.labels.formatter ||  // can be overwritten by dynamic format
				function() {
					var value = this.value,
						ret;

					if (dateTimeLabelFormat) { // datetime axis
						ret = dateFormat(dateTimeLabelFormat, value);

					} else if (tickInterval % 1000000 === 0) { // use M abbreviation
						ret = (value / 1000000) +'M';

					} else if (tickInterval % 1000 === 0) { // use k abbreviation
						ret = (value / 1000) +'k';

					} else if (!categories && value >= 1000) { // add thousands separators
						ret = numberFormat(value, 0);

					} else { // strings (categories) and small numbers
						ret = value;
					}
					return ret;
				},

			staggerLines = horiz && options.labels.staggerLines,
			reversed = options.reversed,
			tickmarkOffset = (categories && options.tickmarkPlacement === 'between') ? 0.5 : 0;

		/**
		 * The Tick class
		 */
		function Tick(pos, minor) {
			var tick = this;
			tick.pos = pos;
			tick.minor = minor;
			tick.isNew = true;

			if (!minor) {
				tick.addLabel();
			}
		}
		Tick.prototype = {
			attachLabel: function() {
				var label = this.label;
				if (label && !this.added) {
					label.deferUpdateTransform = true;
					label.add(axisGroup);
				}
			},
			updateTransformLabel: function() {
				var label = this.label;
				if (label) {
					label.deferUpdateTransform = false;
					label.updateTransform();
				}
			},
			computeBBox: function() {
				var label = this.label,
					bBox;
				if (label) {
					bBox = label.getBBox();
					label.elemWidth = bBox.width;
					label.elemHeight = bBox.height;
				}
			},
			/**
			 * Write the tick label
			 */
			addLabel: function() {
				var pos = this.pos,
					labelOptions = options.labels,
					str,
					withLabel = !((pos === min && !pick(options.showFirstLabel, 1)) ||
						(pos === max && !pick(options.showLastLabel, 0))),
					width = (categories && horiz && categories.length &&
						!labelOptions.step && !labelOptions.staggerLines &&
						!labelOptions.rotation &&
						plotWidth / categories.length) ||
						(!horiz && plotWidth / 2),
					css,
					label = this.label;


				// get the string
				str = labelFormatter.call({
						isFirst: pos === tickPositions[0],
						isLast: pos === tickPositions[tickPositions.length - 1],
						dateTimeLabelFormat: dateTimeLabelFormat,
						value: (categories && categories[pos] ? categories[pos] : pos)
					});


				// prepare CSS
				css = width && { width: mathMax(1, mathRound(width - 2 * (labelOptions.padding || 10))) +PX };
				css = extend(css, labelOptions.style);

				// first call
				if (!defined(label)) {
					this.label =
						defined(str) && withLabel && labelOptions.enabled ?
							renderer.text(
									str,
									0,
									0
								)
								.attr({
									align: labelOptions.align,
									rotation: labelOptions.rotation
								})
								// without position absolute, IE export sometimes is wrong
								.css(css):
							null;

				// update
				} else if (label) {
					label.attr({ text: str })
						.css(css);
				}
			},
			/**
			 * Get the offset height or width of the label
			 */
			getLabelSize: function() {
				var label = this.label;
				return label ?
					((this.labelBBox = label.getBBox()))[horiz ? 'height' : 'width'] :
					0;
				},
			/**
			 * Put everything in place
			 *
			 * @param index {Number}
			 * @param old {Boolean} Use old coordinates to prepare an animation into new position
			 */
			render: function(index, old) {
				var tick = this,
					major = !tick.minor,
					label = tick.label,
					pos = tick.pos,
					labelOptions = options.labels,
					gridLine = tick.gridLine,
					gridLineWidth = major ? options.gridLineWidth : options.minorGridLineWidth,
					gridLineColor = major ? options.gridLineColor : options.minorGridLineColor,
					dashStyle = major ?
						options.gridLineDashStyle :
						options.minorGridLineDashStyle,
					gridLinePath,
					mark = tick.mark,
					markPath,
					tickLength = major ? options.tickLength : options.minorTickLength,
					tickWidth = major ? options.tickWidth : (options.minorTickWidth || 0),
					tickColor = major ? options.tickColor : options.minorTickColor,
					tickPosition = major ? options.tickPosition : options.minorTickPosition,
					step = labelOptions.step,
					cHeight = (old && oldChartHeight) || chartHeight,
					attribs,
					x,
					y;

				// get x and y position for ticks and labels
				x = horiz ?
					translate(pos + tickmarkOffset, null, null, old) + transB :
					axisLeft + offset + (opposite ? ((old && oldChartWidth) || chartWidth) - axisRight - axisLeft : 0);
				
				y = horiz ?
					cHeight - axisBottom + offset - (opposite ? axisHeight : 0) :
					cHeight - translate(pos + tickmarkOffset, null, null, old) - transB;
				
				// create the grid line
				if (gridLineWidth) {
					gridLinePath = getPlotLinePath(pos + tickmarkOffset, gridLineWidth, old);

					if (gridLine === UNDEFINED) {
						attribs = {
							stroke: gridLineColor,
							'stroke-width': gridLineWidth
						};
						if (dashStyle) {
							attribs.dashstyle = dashStyle;
						}
						tick.gridLine = gridLine =
							gridLineWidth ?
								renderer.path(gridLinePath)
									.attr(attribs).add(gridGroup) :
								null;
					}
					if (gridLine && gridLinePath) {
						gridLine.animate({
							d: gridLinePath
						});
					}
				}

				// create the tick mark
				if (tickWidth) {

					// negate the length
					if (tickPosition === 'inside') {
						tickLength = -tickLength;
					}
					if (opposite) {
						tickLength = -tickLength;
					}

					markPath = renderer.crispLine([
						M,
						x,
						y,
						L,
						x + (horiz ? 0 : -tickLength),
						y + (horiz ? tickLength : 0)
					], tickWidth);

					if (mark) { // updating
						mark.animate({
							d: markPath
						});
					} else { // first time
						tick.mark = renderer.path(
							markPath
						).attr({
							stroke: tickColor,
							'stroke-width': tickWidth
						}).add(axisGroup);
					}
				}

				// the label is created on init - now move it into place
				if (label && !isNaN(x)) {
					x = x + labelOptions.x - (tickmarkOffset && horiz ?
						tickmarkOffset * transA * (reversed ? -1 : 1) : 0);
					y = y + labelOptions.y - (tickmarkOffset && !horiz ?
						tickmarkOffset * transA * (reversed ? 1 : -1) : 0);

					// vertically centered
					if (!defined(labelOptions.y)) {
						y += pInt(label.styles.lineHeight) * 0.9 - label.getBBox().height / 2;
					}


					// correct for staggered labels
					if (staggerLines) {
						y += (index / (step || 1) % staggerLines) * 16;
					}
					// apply step
					if (step) {
						// show those indices dividable by step
						label[index % step ? 'hide' : 'show']();
					}

					label[tick.isNew ? 'attr' : 'animate']({
						x: x,
						y: y
					});
				}

				tick.isNew = false;
			},
			/**
			 * Destructor for the tick prototype
			 */
			destroy: function() {
				var tick = this,
					n;
				for (n in tick) {
					if (tick[n] && tick[n].destroy) {
						tick[n].destroy();
					}
				}
			}
		};

		/**
		 * The object wrapper for plot lines and plot bands
		 * @param {Object} options
		 */
		function PlotLineOrBand(options) {
			var plotLine = this;
			if (options) {
				plotLine.options = options;
				plotLine.id = options.id;
			}

			//plotLine.render()
			return plotLine;
		}

		PlotLineOrBand.prototype = {

		/**
		 * Render the plot line or plot band. If it is already existing,
		 * move it.
		 */
		render: function () {
			var plotLine = this,
				options = plotLine.options,
				optionsLabel = options.label,
				label = plotLine.label,
				width = options.width,
				to = options.to,
				toPath, // bands only
				from = options.from,
				dashStyle = options.dashStyle,
				svgElem = plotLine.svgElem,
				path = [],
				addEvent,
				eventType,
				xs,
				ys,
				x,
				y,
				color = options.color,
				zIndex = options.zIndex,
				events = options.events,
				attribs;

			// plot line
			if (width) {
				path = getPlotLinePath(options.value, width);
				attribs = {
					stroke: color,
					'stroke-width': width
				};
				if (dashStyle) {
					attribs.dashstyle = dashStyle;
				}
			}

			// plot band
			else if (defined(from) && defined(to)) {
				// keep within plot area
				from = mathMax(from, min);
				to = mathMin(to, max);

				toPath = getPlotLinePath(to);
				path = getPlotLinePath(from);
				if (path && toPath) {
					path.push(
						toPath[4],
						toPath[5],
						toPath[1],
						toPath[2]
					);
				} else { // outside the axis area
					path = null;
				}
				attribs = {
					fill: color
				};
			} else {
				return;
			}
			// zIndex
			if (defined(zIndex)) {
				attribs.zIndex = zIndex;
			}

			// common for lines and bands
			if (svgElem) {
				if (path) {
					svgElem.animate({
						d: path
					}, null, svgElem.onGetPath);
				} else {
					svgElem.hide();
					svgElem.onGetPath = function() {
						svgElem.show();
					};
				}
			} else if (path && path.length) {
				plotLine.svgElem = svgElem = renderer.path(path)
					.attr(attribs).add();

				// events
				if (events) {
					addEvent = function(eventType) {
						svgElem.on(eventType, function(e) {
							events[eventType].apply(plotLine, [e]);
						});
					};
					for (eventType in events) {
						addEvent(eventType);
					}
				}
			}

			// the plot band/line label
			if (optionsLabel && defined(optionsLabel.text) && path && path.length && axisWidth > 0 && axisHeight > 0) {
				// apply defaults
				optionsLabel = merge({
					align: horiz && toPath && 'center',
					x: horiz ? !toPath && 4 : 10,
					verticalAlign : !horiz && toPath && 'middle',
					y: horiz ? toPath ? 16 : 10 : toPath ? 6 : -4,
					rotation: horiz && !toPath && 90
				}, optionsLabel);

				// add the SVG element
				if (!label) {
					plotLine.label = label = renderer.text(
							optionsLabel.text,
							0,
							0
						)
						.attr({
							align: optionsLabel.textAlign || optionsLabel.align,
							rotation: optionsLabel.rotation,
							zIndex: zIndex
						})
						.css(optionsLabel.style)
						.add();
				}

				// get the bounding box and align the label
				xs = [path[1], path[4], pick(path[6], path[1])];
				ys = [path[2], path[5], pick(path[7], path[2])];
				x = mathMin.apply(math, xs);
				y = mathMin.apply(math, ys);

				label.align(optionsLabel, false, {
					x: x,
					y: y,
					width: mathMax.apply(math, xs) - x,
					height: mathMax.apply(math, ys) - y
				});
				label.show();

			} else if (label) { // move out of sight
				label.hide();
			}

			// chainable
			return plotLine;
		},

		/**
		 * Remove the plot line or band
		 */
		destroy: function() {
			var obj = this,
				n;

			for (n in obj) {
				if (obj[n] && obj[n].destroy) {
					obj[n].destroy(); // destroy SVG wrappers
				}
				delete obj[n];
			}
			// remove it from the lookup
			erase(plotLinesAndBands, obj);
		}
		};

		/**
		 * The class for stack items
		 */
		function StackItem(options, isNegative, x) {
			var stackItem = this;

			// Tells if the stack is negative
			stackItem.isNegative = isNegative;

			// Save the options to be able to style the label
			stackItem.options = options;

			// Save the x value to be able to position the label later
			stackItem.x = x;

			// The align options and text align varies on whether the stack is negative and
			// if the chart is inverted or not.
			// First test the user supplied value, then use the dynamic.
			stackItem.alignOptions = {
				align: options.align || (inverted ? (isNegative ? 'left' : 'right') : 'center'),
				verticalAlign: options.verticalAlign || (inverted ? 'middle' : (isNegative ? 'bottom' : 'top')),
				y: pick(options.y, inverted ? 4 : (isNegative ? 14 : -6)),
				x: pick(options.x, inverted ? (isNegative ? -6 : 6) : 0)
			};

			stackItem.textAlign = options.textAlign || (inverted ? (isNegative ? 'right' : 'left') : 'center');
		}

		StackItem.prototype = {
			/**
			 * Sets the total of this stack. Should be called when a serie is hidden or shown
			 * since that will affect the total of other stacks.
			 */
			setTotal: function(total) {
				this.total = total;
				this.cum = total;
			},

			/**
			 * Renders the stack total label and adds it to the stack label group.
			 */
			render: function(group) {
				var stackItem = this,									// aliased this
					str = stackItem.options.formatter.call(stackItem);  // format the text in the label

				// Change the text to reflect the new total and set visibility to hidden in case the serie is hidden
				if (stackItem.label) {
					stackItem.label.attr({text: str, visibility: HIDDEN});
				// Create new label
				} else {
					stackItem.label =
						chart.renderer.text(str, 0, 0)				// dummy positions, actual position updated with setOffset method in columnseries
							.css(stackItem.options.style)			// apply style
							.attr({align: stackItem.textAlign,			// fix the text-anchor
								rotation: stackItem.options.rotation,	// rotation
								visibility: HIDDEN })					// hidden until setOffset is called
							.add(group);							// add to the labels-group
				}
			},

			/**
			 * Sets the offset that the stack has from the x value and repositions the label.
			 */
			setOffset: function(xOffset, xWidth) {
				var stackItem = this,										// aliased this
					neg = stackItem.isNegative,								// special treatment is needed for negative stacks
					y = axis.translate(stackItem.total),					// stack value translated mapped to chart coordinates
					yZero = axis.translate(0),								// stack origin
					h = mathAbs(y - yZero),									// stack height
					x = chart.xAxis[0].translate(stackItem.x) + xOffset,	// stack x position
					plotHeight = chart.plotHeight,
					stackBox = {	// this is the box for the complete stack
							x: inverted ? (neg ? y : y - h) : x,
							y: inverted ? plotHeight - x - xWidth : (neg ? (plotHeight - y - h) : plotHeight - y),
							width: inverted ? h : xWidth,
							height: inverted ? xWidth : h
					};

				if (stackItem.label) {
					stackItem.label
						.align(stackItem.alignOptions, null, stackBox)	// align the label to the box
						.attr({visibility: VISIBLE});					// set visibility
				}
			}
		};

		/**
		 * Get the minimum and maximum for the series of each axis
		 */
		function getSeriesExtremes() {
			var posStack = [],
				negStack = [],
				i,
				run;

			// reset dataMin and dataMax in case we're redrawing
			dataMin = dataMax = null;

			// get an overview of what series are associated with this axis
			associatedSeries = [];
			each(series, function(serie) {
				var seriesOptions = serie.options;

				run = false;


				// match this axis against the series' given or implicated axis
				each(['xAxis', 'yAxis'], function(strAxis) {
					if (
						// the series is a cartesian type, and...
						serie.isCartesian &&
						// we're in the right x or y dimension, and...
						((strAxis === 'xAxis' && isXAxis) || (strAxis === 'yAxis' && !isXAxis)) && (
							// the axis number is given in the options and matches this axis index, or
							(seriesOptions[strAxis] === options.index) ||
							// the axis index is not given
							(seriesOptions[strAxis] === UNDEFINED && options.index === 0)
						)
					) {
						serie[strAxis] = axis;
						associatedSeries.push(serie);

						if (serie.options.padXAxis) {
							padAxis = true;
						}

						// the series is visible, run the min/max detection
						run = true;
					}
				});
				// ignore hidden series if opted
				if (!serie.visible && optionsChart.ignoreHiddenSeries) {
					run = false;
				}

				if (run) {

					var stacking,
						posPointStack,
						negPointStack,
						stackKey,
						negKey;

					if (!isXAxis) {
						stacking = seriesOptions.stacking;
						usePercentage = stacking === 'percent';

						// create a stack for this particular series type
						if (stacking) {
							stackKey = serie.type + pick(seriesOptions.stack, '');
							negKey = '-'+ stackKey;
							serie.stackKey = stackKey; // used in translate

							posPointStack = posStack[stackKey] || []; // contains the total values for each x
							posStack[stackKey] = posPointStack;

							negPointStack = negStack[negKey] || [];
							negStack[negKey] = negPointStack;
						}
						if (usePercentage) {
							dataMin = 0;
							dataMax = 99;
						}
					}
					if (serie.isCartesian) { // line, column etc. need axes, pie doesn't

						var xData,
							yData,
							x,
							y,
							threshold = seriesOptions.threshold,
							yDataLength,
							activeYData = [],
							activeCounter = 0;

						if (isXAxis) {
							xData = serie.xData;
							dataMin = mathMin(pick(dataMin, xData[0]), mathMin.apply(math, xData));
							dataMax = mathMax(pick(dataMax, xData[0]), mathMax.apply(math, xData));
						} else {
							var isNegative,
								pointStack,
								key,
								j;

							// get clipped and grouped data
							serie.processData();

							var start = + new Date();

							xData = serie.processedXData;
							yData = serie.processedYData;
							yDataLength = yData.length;


							// loop over the non-null y values and read them into a local array
							for (i = 0; i < yDataLength; i++) {
								y = yData[i];
								if (y !== null && y !== UNDEFINED) {
									// read stacked values into a stack based on the x value,
									// the sign of y and the stack key
									if (stacking) {
										x = xData[i];
										isNegative = y < 0;
										pointStack = isNegative ? negPointStack : posPointStack;
										key = isNegative ? negKey : stackKey;

										y = pointStack[x] =
											defined(pointStack[x]) ?
											pointStack[x] + y : y;


										// add the series
										if (!stacks[key]) {
											stacks[key] = {};
										}

										// If the StackItem is there, just update the values,
										// if not, create one first
										if (!stacks[key][x]) {
											stacks[key][x] = new StackItem(options.stackLabels, isNegative, x);
										}
										stacks[key][x].setTotal(y);

									}

									j = y.length;
									if (j) { // array, like ohlc data
										while (j--) {
											activeYData[activeCounter++] = y[j];
										}
									} else {
										activeYData[activeCounter++] = y;
									}
								}
							}
							if (!usePercentage) { // percentage stacks are always 0-100
								dataMin = mathMin(pick(dataMin, activeYData[0]), mathMin.apply(math, activeYData));
								dataMax = mathMax(pick(dataMax, activeYData[0]), mathMax.apply(math, activeYData));
							}


							// todo: instead of checking useThreshold, just set the threshold to 0
							// in area and column-like chart types
							if (serie.useThreshold && threshold !== null) {
								if (dataMin >= threshold) {
									dataMin = threshold;
									ignoreMinPadding = true;
								} else if (dataMax < threshold) {
									dataMax = threshold;
									ignoreMaxPadding = true;
								}
							}


						}
					}
				}
			});

		}

		/**
		 * Translate from axis value to pixel position on the chart, or back
		 *
		 */
		translate = function(val, backwards, cvsCoord, old, handleLog) {
			var sign = 1,
				cvsOffset = 0,
				localA = old ? oldTransA : transA,
				localMin = old ? oldMin : min,
				returnValue;

			if (!localA) {
				localA = transA;
			}

			if (cvsCoord) {
				sign *= -1; // canvas coordinates inverts the value
				cvsOffset = axisLength;
			}
			if (reversed) { // reversed axis
				sign *= -1;
				cvsOffset -= sign * axisLength;
			}

			if (backwards) { // reverse translation
				if (reversed) {
					val = axisLength - val;
				}
				returnValue = val / localA + localMin; // from chart pixel to value
				if (isLog && handleLog) {
					returnValue = lin2log(returnValue);
				}

			} else { // normal translation, from axis value to pixel, relative to plot
				if (isLog && handleLog) {
					val = log2lin(val);
				}
				returnValue = sign * (val - localMin) * localA + cvsOffset;
			}

			return returnValue;
		};

		/**
		 * Create the path for a plot line that goes from the given value on
		 * this axis, across the plot to the opposite side
		 * @param {Number} value
		 * @param {Number} lineWidth Used for calculation crisp line
		 * @param {Number] old Use old coordinates (for resizing and rescaling)
		 */
		getPlotLinePath = function(value, lineWidth, old) {
			var x1,
				y1,
				x2,
				y2,
				translatedValue = translate(value, null, null, old),
				cHeight = (old && oldChartHeight) || chartHeight,
				cWidth = (old && oldChartWidth) || chartWidth,
				skip;

			x1 = x2 = mathRound(translatedValue + transB);
			y1 = y2 = mathRound(cHeight - translatedValue - transB);

			if (isNaN(translatedValue)) { // no min or max
				skip = true;

			} else if (horiz) {
				y1 = axisTop;
				y2 = cHeight - axisBottom;
				if (x1 < axisLeft || x1 > axisLeft + axisWidth) {
					skip = true;
				}
			} else {
				x1 = axisLeft;
				x2 = cWidth - axisRight;

				if (y1 < axisTop || y1 > axisTop + axisHeight) {
					skip = true;
				}
			}
			return skip ?
				null :
				renderer.crispLine([M, x1, y1, L, x2, y2], lineWidth || 0);
		};

		/**
		 * Fix JS round off float errors
		 * @param {Number} num
		 */
		function correctFloat(num) {
			var invMag, ret = num;
			magnitude = pick(magnitude, math.pow(10, mathFloor(math.log(tickInterval) / math.LN10)));

			if (magnitude < 1) {
				invMag = mathRound(1 / magnitude)  * 10;
				ret = mathRound(num * invMag) / invMag;
			}
			return ret;
		}

		/**
		 * Set the tick positions of a linear axis to round values like whole tens or every five.
		 */
		function setLinearTickPositions() {

			var i,
				roundedMin = correctFloat(mathFloor(min / tickInterval) * tickInterval),
				roundedMax = correctFloat(mathCeil(max / tickInterval) * tickInterval);

			tickPositions = [];

			// populate the intermediate values
			i = correctFloat(roundedMin);
			while (i <= roundedMax) {
				tickPositions.push(i);
				i = correctFloat(i + tickInterval);
			}

		}

		/**
		 * Set the tick positions to round values and optionally extend the extremes
		 * to the nearest tick
		 */
		function setTickPositions(secondPass) {
			var length,
				catPad,
				linkedParent,
				linkedParentExtremes,
				tickIntervalOption = options.tickInterval,
				tickPixelIntervalOption = options.tickPixelInterval,
				maxZoom = options.maxZoom || (
					isXAxis && !defined(options.min) && !defined(options.max) ?
						mathMin(chart.smallestInterval * 5, dataMax - dataMin) :
						null
				),
				zoomOffset;

			axisLength = horiz ? axisWidth : axisHeight;

			// linked axis gets the extremes from the parent axis
			if (isLinked) {
				linkedParent = chart[isXAxis ? 'xAxis' : 'yAxis'][options.linkedTo];
				linkedParentExtremes = linkedParent.getExtremes();
				min = pick(linkedParentExtremes.min, linkedParentExtremes.dataMin);
				max = pick(linkedParentExtremes.max, linkedParentExtremes.dataMax);
			}

			// initial min and max from the extreme data values
			else {
				min = pick(userMin, options.min, dataMin);
				max = pick(userMax, options.max, dataMax);
			}

			if (isLog) {
				min = log2lin(min);
				max = log2lin(max);
			}

			// handle zoomed range
			if (range) {
				userMin = min = max - range;
				userMax = max;
				if (secondPass) {
					range = null;  // don't use it when running setExtremes
				}
			}

			// maxZoom exceeded, just center the selection
			if (max - min < maxZoom) {
				zoomOffset = (maxZoom - max + min) / 2;
				// if min and max options have been set, don't go beyond it
				min = mathMax(min - zoomOffset, pick(options.min, min - zoomOffset), dataMin);
				max = mathMin(min + maxZoom, pick(options.max, min + maxZoom), dataMax);
			}

			// pad the values to get clear of the chart's edges
			if (!categories && !usePercentage && !isLinked && defined(min) && defined(max)) {
				length = (max - min) || 1;
				if (!defined(options.min) && !defined(userMin) && minPadding && (dataMin < 0 || !ignoreMinPadding)) {
					min -= length * minPadding;
				}
				if (!defined(options.max) && !defined(userMax)  && maxPadding && (dataMax > 0 || !ignoreMaxPadding)) {
					max += length * maxPadding;
				}
			}

			// get tickInterval
			if (min === max || min === undefined || max === undefined) {
				tickInterval = 1;
			} else if (isLinked && !tickIntervalOption &&
					tickPixelIntervalOption === linkedParent.options.tickPixelInterval) {
				tickInterval = linkedParent.tickInterval;
			} else {
				tickInterval = pick(
					tickIntervalOption,
					categories ? // for categoried axis, 1 is default, for linear axis use tickPix
						1 :
						(max - min) * tickPixelIntervalOption / (axisLength || 1)
				);
			}

			if (!isDatetimeAxis) { // linear
				magnitude = math.pow(10, mathFloor(math.log(tickInterval) / math.LN10));
				if (!defined(options.tickInterval)) {
					tickInterval = normalizeTickInterval(tickInterval, null, magnitude, options);
				}
			}
			axis.tickInterval = tickInterval; // record for linked axis

			// get minorTickInterval
			minorTickInterval = options.minorTickInterval === 'auto' && tickInterval ?
					tickInterval / 5 : options.minorTickInterval;

			// find the tick positions
			if (isDatetimeAxis)	{
				tickPositions = getTimeTicks(tickInterval, min, max, options.startOfWeek);
				dateTimeLabelFormat = options.dateTimeLabelFormats[tickPositions.unit[0]];
			} else {
				setLinearTickPositions();
			}

			if (!isLinked) {
				// pad categorised axis to nearest half unit
				if (categories || padAxis) {
					catPad = (categories ? 1 : tickInterval) * 0.5;
					if (categories || !defined(pick(options.min, userMin))) {
						min -= catPad;
					}
					if (categories || !defined(pick(options.max, userMax))) {
						max += catPad;
					}
				}

				// reset min/max or remove extremes based on start/end on tick
				var roundedMin = tickPositions[0],
					roundedMax = tickPositions[tickPositions.length - 1];

				if (options.startOnTick) {
					min = roundedMin;
				} else if (min > roundedMin) {
					tickPositions.shift();
				}

				if (options.endOnTick) {
					max = roundedMax;
				} else if (max < roundedMax) {
					tickPositions.pop();
				}

				// record the greatest number of ticks for multi axis
				if (!maxTicks) { // first call, or maxTicks have been reset after a zoom operation
					maxTicks = {
						x: 0,
						y: 0
					};
				}

				if (!isDatetimeAxis && tickPositions.length > maxTicks[xOrY] && options.alignTicks !== false) {
					maxTicks[xOrY] = tickPositions.length;
				}
			}


		}

		/**
		 * When using multiple axes, adjust the number of ticks to match the highest
		 * number of ticks in that group
		 */
		function adjustTickAmount() {

			if (maxTicks && !isDatetimeAxis && !categories && !isLinked && options.alignTicks !== false) { // only apply to linear scale
				var oldTickAmount = tickAmount,
					calculatedTickAmount = tickPositions.length;

				// set the axis-level tickAmount to use below
				tickAmount = maxTicks[xOrY];

				if (calculatedTickAmount < tickAmount) {
					while (tickPositions.length < tickAmount) {
						tickPositions.push( correctFloat(
							tickPositions[tickPositions.length - 1] + tickInterval
						));
					}
					transA *= (calculatedTickAmount - 1) / (tickAmount - 1);
					max = tickPositions[tickPositions.length - 1];

				}
				if (defined(oldTickAmount) && tickAmount !== oldTickAmount) {
					axis.isDirty = true;
				}
			}

		}

		/**
		 * Set the scale based on data min and max, user set min and max or options
		 *
		 */
		function setScale() {
			var type,
				i;

			oldMin = min;
			oldMax = max;

			// get data extremes if needed
			getSeriesExtremes();

			// get fixed positions based on tickInterval
			setTickPositions();

			// the translation factor used in translate function
			oldTransA = transA;
			transA = axisLength / ((max - min) || 1);

			// reset stacks
			if (!isXAxis) {
				for (type in stacks) {
					for (i in stacks[type]) {
						stacks[type][i].cum = stacks[type][i].total;
					}
				}
			}

			// mark as dirty if it is not already set to dirty and extremes have changed
			if (!axis.isDirty) {
				axis.isDirty = (min !== oldMin || max !== oldMax);
			}

		}

		/**
		 * Set the extremes and optionally redraw
		 * @param {Number} newMin
		 * @param {Number} newMax
		 * @param {Boolean} redraw
		 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
		 *    configuration
		 *
		 */
		function setExtremes(newMin, newMax, redraw, animation) {
			var start = + new Date();
			redraw = pick(redraw, true); // defaults to true

			fireEvent(axis, 'setExtremes', { // fire an event to enable syncing of multiple charts
				min: newMin,
				max: newMax
			}, function() { // the default event handler

				userMin = newMin;
				userMax = newMax;


				// redraw
				if (redraw) {
					chart.redraw(animation);
				}
			});
		}

		/**
		 * Update the axis metrics
		 */
		function setAxisSize() {

			var offsetLeft = options.offsetLeft || 0,
				offsetRight = options.offsetRight || 0;

			// basic values
			axisLeft = pick(options.left, plotLeft + offsetLeft);
			axisTop = pick(options.top, plotTop);
			axisWidth = pick(options.width, plotWidth - offsetLeft + offsetRight);
			axisHeight = pick(options.height, plotHeight);
			axisBottom = chartHeight - axisHeight - axisTop;
			axisRight = chartWidth - axisWidth - axisLeft;

			// expose to use in Series obejct
			axis.left = axisLeft;
			axis.top = axisTop;

			// secondary values
			axisLength = horiz ? axisWidth : axisHeight;
			transA = axisLength / ((max - min) || 1);
			transB = horiz ? axisLeft : axisBottom; // translation addend
		}

		/**
		 * Get the actual axis extremes
		 */
		function getExtremes() {
			return {
				min: min,
				max: max,
				dataMin: dataMin,
				dataMax: dataMax,
				userMin: userMin,
				userMax: userMax
			};
		}

		/**
		 * Get the zero plane either based on zero or on the min or max value.
		 * Used in bar and area plots
		 */
		function getThreshold(threshold) {
			if (min > threshold || threshold === null) {
				threshold = min;
			} else if (max < threshold) {
				threshold = max;
			}

			return translate(threshold, 0, 1);
		}

		/**
		 * Add a plot band or plot line after render time
		 *
		 * @param options {Object} The plotBand or plotLine configuration object
		 */
		function addPlotBandOrLine(options) {
			var obj = new PlotLineOrBand(options).render();
			plotLinesAndBands.push(obj);
			return obj;
		}

		/**
		 * Render the tick labels to a preliminary position to get their sizes
		 */
		function getOffset() {

			var hasData = associatedSeries.length && defined(min) && defined(max),
				titleOffset = 0,
				titleMargin = 0,
				axisTitleOptions = options.title,
				labelOptions = options.labels,
				directionFactor = [-1, 1, 1, -1][side],
				n;

			if (!axisGroup) {
				axisGroup = renderer.g('axis')
					.attr({ zIndex: 7 })
					.add();
				gridGroup = renderer.g('grid')
					.attr({ zIndex: 1 })
					.add();
			}

			labelOffset = 0; // reset

			if (hasData || isLinked) {
				each(tickPositions, function(pos) {
					if (!ticks[pos]) {
						ticks[pos] = new Tick(pos);
					} else {
						ticks[pos].addLabel(); // update labels depending on tick interval
					}

				});

				each(tickPositions, function(pos) {
					ticks[pos].attachLabel();
				});
				each(tickPositions, function(pos) {
					ticks[pos].computeBBox();
				});
				each(tickPositions, function(pos) {
					ticks[pos].updateTransformLabel();
				});

				each(tickPositions,function(pos) {
					// left side must be align: right and right side must have align: left for labels
					if (side === 0 || side === 2 || { 1: 'left', 3: 'right' }[side] === labelOptions.align) {

						// get the highest offset
						labelOffset = mathMax(
							ticks[pos].getLabelSize(),
							labelOffset
						);
					}

				});

				if (staggerLines) {
					labelOffset += (staggerLines - 1) * 16;
				}

			} else { // doesn't have data
				for (n in ticks) {
					ticks[n].destroy();
					delete ticks[n];
				}
			}

			if (axisTitleOptions && axisTitleOptions.text) {
				if (!axis.axisTitle) {
					axis.axisTitle = renderer.text(
						axisTitleOptions.text,
						0,
						0
					)
					.attr({
						zIndex: 7,
						rotation: axisTitleOptions.rotation || 0,
						align:
							axisTitleOptions.textAlign ||
							{ low: 'left', middle: 'center', high: 'right' }[axisTitleOptions.align]
					})
					.css(axisTitleOptions.style)
					.add();
				}

				titleOffset = axis.axisTitle.getBBox()[horiz ? 'height' : 'width'];
				titleMargin = pick(axisTitleOptions.margin, horiz ? 5 : 10);

			}

			// handle automatic or user set offset
			offset = directionFactor * pick(options.offset, axisOffset[side]);

			axisTitleMargin =
				labelOffset +
				(side !== 2 && labelOffset && directionFactor * options.labels[horiz ? 'y' : 'x']) +
				titleMargin;

			axisOffset[side] = mathMax(
				axisOffset[side],
				axisTitleMargin + titleOffset + directionFactor * offset
			);

		}

		/**
		 * Render the axis
		 */
		function render() {
			var axisTitleOptions = options.title,
				stackLabelOptions = options.stackLabels,
				alternateGridColor = options.alternateGridColor,
				lineWidth = options.lineWidth,
				lineLeft,
				lineTop,
				linePath,
				hasRendered = chart.hasRendered,
				slideInTicks = hasRendered && defined(oldMin) && !isNaN(oldMin),
				hasData = associatedSeries.length && defined(min) && defined(max);

			// If the series has data draw the ticks. Else only the line and title
			if (hasData || isLinked) {

				// minor ticks
				if (minorTickInterval && !categories) {
					var pos = min + (tickPositions[0] - min) % minorTickInterval;
					for (pos; pos <= max; pos += minorTickInterval) {
						if (!minorTicks[pos]) {
							minorTicks[pos] = new Tick(pos, true);
						}

						// render new ticks in old position
						if (slideInTicks && minorTicks[pos].isNew) {
							minorTicks[pos].render(null, true);
						}


						minorTicks[pos].isActive = true;
						minorTicks[pos].render();
					}
				}

				// major ticks
				each(tickPositions, function(pos, i) {
					// linked axes need an extra check to find out if
					if (!isLinked || (pos >= min && pos <= max)) {

						// render new ticks in old position
						if (slideInTicks && ticks[pos].isNew) {
							ticks[pos].render(i, true);
						}

						ticks[pos].isActive = true;
						ticks[pos].render(i);
					}
				});

				// alternate grid color
				if (alternateGridColor) {
					each(tickPositions, function(pos, i) {
						if (i % 2 === 0 && pos < max) {
							if (!alternateBands[pos]) {
								alternateBands[pos] = new PlotLineOrBand();
							}
							alternateBands[pos].options = {
								from: pos,
								to: tickPositions[i + 1] !== UNDEFINED ? tickPositions[i + 1] : max,
								color: alternateGridColor
							};
							alternateBands[pos].render();
							alternateBands[pos].isActive = true;
						}
					});
				}

				// custom plot lines and bands
				if (!hasRendered) { // only first time
					each((options.plotLines || []).concat(options.plotBands || []), function(plotLineOptions) {
						plotLinesAndBands.push(new PlotLineOrBand(plotLineOptions).render());
					});
				}



			} // end if hasData

			// remove inactive ticks
			each([ticks, minorTicks, alternateBands], function(coll) {
				var pos;
				for (pos in coll) {
					if (!coll[pos].isActive) {
						coll[pos].destroy();
						delete coll[pos];
					} else {
						coll[pos].isActive = false; // reset
					}
				}
			});




			// Static items. As the axis group is cleared on subsequent calls
			// to render, these items are added outside the group.
			// axis line
			if (lineWidth) {
				lineLeft = axisLeft + (opposite ? axisWidth : 0) + offset;
				lineTop = chartHeight - axisBottom - (opposite ? axisHeight : 0) + offset;

				linePath = renderer.crispLine([
						M,
						horiz ?
							axisLeft:
							lineLeft,
						horiz ?
							lineTop:
							axisTop,
						L,
						horiz ?
							chartWidth - axisRight :
							lineLeft,
						horiz ?
							lineTop:
							chartHeight - axisBottom
					], lineWidth);
				if (!axisLine) {
					axisLine = renderer.path(linePath)
						.attr({
							stroke: options.lineColor,
							'stroke-width': lineWidth,
							zIndex: 7
						})
						.add();
				} else {
					axisLine.animate({ d: linePath });
				}

			}

			if (axis.axisTitle) {
				// compute anchor points for each of the title align options
				var margin = horiz ? axisLeft : axisTop,
					fontSize = pInt(axisTitleOptions.style.fontSize || 12),
				// the position in the length direction of the axis
				alongAxis = {
					low: margin + (horiz ? 0 : axisLength),
					middle: margin + axisLength / 2,
					high: margin + (horiz ? axisLength : 0)
				}[axisTitleOptions.align],

				// the position in the perpendicular direction of the axis
				offAxis = (horiz ? axisTop + axisHeight : axisLeft) +
					(horiz ? 1 : -1) * // horizontal axis reverses the margin
					(opposite ? -1 : 1) * // so does opposite axes
					axisTitleMargin +
					(side === 2 ? fontSize : 0);

				axis.axisTitle[hasRendered ? 'animate' : 'attr']({
					x: horiz ?
						alongAxis:
						offAxis + (opposite ? axisWidth : 0) + offset +
							(axisTitleOptions.x || 0), // x
					y: horiz ?
						offAxis - (opposite ? axisHeight : 0) + offset:
						alongAxis + (axisTitleOptions.y || 0) // y
				});

			}

			// Stacked totals:
			if (stackLabelOptions && stackLabelOptions.enabled) {
				var stackKey, oneStack, stackCategory,
					stackTotalGroup = axis.stackTotalGroup;

				// Create a separate group for the stack total labels
				if (!stackTotalGroup) {
					axis.stackTotalGroup = stackTotalGroup =
						renderer.g('stack-labels')
							.attr({
								visibility: VISIBLE,
								zIndex: 6
							})
							.translate(plotLeft, plotTop)
							.add();
				}

				// Render each stack total
				for (stackKey in stacks) {
					oneStack = stacks[stackKey];
					for (stackCategory in oneStack) {
						oneStack[stackCategory].render(stackTotalGroup);
					}
				}
			}
			// End stacked totals

			axis.isDirty = false;
		}

		/**
		 * Remove a plot band or plot line from the chart by id
		 * @param {Object} id
		 */
		function removePlotBandOrLine(id) {
			var i = plotLinesAndBands.length;
			while (i--) {
				if (plotLinesAndBands[i].id === id) {
					plotLinesAndBands[i].destroy();
				}
			}
		}

		/**
		 * Redraw the axis to reflect changes in the data or axis extremes
		 */
		function redraw() {

			// hide tooltip and hover states
			if (tracker.resetTracker) {
				tracker.resetTracker();
			}

			// render the axis
			render();

			// move plot lines and bands
			each(plotLinesAndBands, function(plotLine) {
				plotLine.render();
			});

			// mark associated series as dirty and ready for redraw
			each(associatedSeries, function(series) {
				series.isDirty = true;
			});

		}

		/**
		 * Set new axis categories and optionally redraw
		 * @param {Array} newCategories
		 * @param {Boolean} doRedraw
		 */
		function setCategories(newCategories, doRedraw) {
				// set the categories
				axis.categories = categories = newCategories;

				// force reindexing tooltips
				each(associatedSeries, function(series) {
					series.translate();
					series.setTooltipPoints(true);
				});


				// optionally redraw
				axis.isDirty = true;

				if (pick(doRedraw, true)) {
					chart.redraw();
				}
		}



		// Run Axis

		// Register
		axes.push(axis);
		chart[isXAxis ? 'xAxis' : 'yAxis'].push(axis);

		// inverted charts have reversed xAxes as default
		if (inverted && isXAxis && reversed === UNDEFINED) {
			reversed = true;
		}


		// expose some variables
		extend(axis, {
			addPlotBand: addPlotBandOrLine,
			addPlotLine: addPlotBandOrLine,
			adjustTickAmount: adjustTickAmount,
			categories: categories,
			getExtremes: getExtremes,
			getPlotLinePath: getPlotLinePath,
			getThreshold: getThreshold,
			isXAxis: isXAxis,
			options: options,
			plotLinesAndBands: plotLinesAndBands,
			getOffset: getOffset,
			render: render,
			setAxisSize: setAxisSize,
			setCategories: setCategories,
			setExtremes: setExtremes,
			setScale: setScale,
			setTickPositions: setTickPositions,
			translate: translate,
			redraw: redraw,
			removePlotBand: removePlotBandOrLine,
			removePlotLine: removePlotBandOrLine,
			reversed: reversed,
			stacks: stacks
		});

		// register event listeners
		for (eventType in events) {
			addEvent(axis, eventType, events[eventType]);
		}

		// set min and max
		setScale();

	} // end Axis


	/**
	 * The toolbar object
	 *
	 * @param {Object} chart
	 */
	function Toolbar(chart) {
		var buttons = {};

		function add(id, text, title, fn) {
			if (!buttons[id]) {
				var button = renderer.text(
					text,
					0,
					0
				)
				.css(options.toolbar.itemStyle)
				.align({
					align: 'right',
					x: - marginRight - 20,
					y: plotTop + 30
				})
				.on('click', fn)
				.attr({
					align: 'right',
					zIndex: 20
				})
				.add();
				buttons[id] = button;
			}
		}
		function remove(id) {
			discardElement(buttons[id].element);
			buttons[id] = null;
		}

		// public
		return {
			add: add,
			remove: remove
		};
	}

	/**
	 * The tooltip object
	 * @param {Object} options Tooltip options
	 */
	function Tooltip (options) {
		var currentSeries,
			borderWidth = options.borderWidth,
			crosshairsOptions = options.crosshairs,
			crosshairs = [],
			style = options.style,
			shared = options.shared,
			padding = pInt(style.padding),
			boxOffLeft = borderWidth + padding, // off left/top position as IE can't
				//properly handle negative positioned shapes
			tooltipIsHidden = true,
			boxWidth,
			boxHeight,
			currentX = 0,
			currentY = 0;

		// remove padding CSS and apply padding on box instead
		style.padding = 0;

		// create the label
		var label = renderer.label('', 0, 0)
			.attr({
				padding: padding,
				fill: options.backgroundColor,
				'stroke-width': borderWidth,
				r: options.borderRadius,
				zIndex: 8
			})
			.css(style)
			.hide()
			.add()
			.shadow(1);

		/**
		 * In case no user defined formatter is given, this will be used
		 */
		function defaultFormatter() {
			var pThis = this,
				items = pThis.points || splat(pThis),
				xAxis = items[0].series.xAxis,
				x = pThis.x,
				isDateTime = xAxis && xAxis.options.type === 'datetime',
				useHeader = isString(x) || isDateTime,
				series = items[0].series,
				headerFormat = series.tooltipHeaderFormat || '%A, %b %e, %Y',
				s;

			// build the header
			s = useHeader ?
			['<span style="font-size: 10px">' +
				(isDateTime ? dateFormat('%A, %b %e, %Y', x) :  x) +
				'</span>'] : [];

			// build the values
			each(items, function(item) {
				series = item.series;
				s.push((series.tooltipFormatter && series.tooltipFormatter(item)) ||
					item.point.tooltipFormatter(useHeader));
			});
			return s.join('<br/>');
		}

		/**
		 * Provide a soft movement for the tooltip
		 *
		 * @param {Number} finalX
		 * @param {Number} finalY
		 */
		function move(finalX, finalY) {

			currentX = tooltipIsHidden ? finalX : (2 * currentX + finalX) / 3;
			currentY = tooltipIsHidden ? finalY : (currentY + finalY) / 2;

			//group.translate(currentX, currentY);
			label.attr({ x: currentX, y: currentY });


			// run on next tick of the mouse tracker
			if (mathAbs(finalX - currentX) > 1 || mathAbs(finalY - currentY) > 1) {
				tooltipTick = function() {
					move(finalX, finalY);
				};
			} else {
				tooltipTick = null;
			}
		}

		/**
		 * Hide the tooltip
		 */
		function hide() {
			if (!tooltipIsHidden) {
				var hoverPoints = chart.hoverPoints;

				//group.hide();
				label.hide();

				each(crosshairs, function(crosshair) {
					if (crosshair) {
						crosshair.hide();
					}
				});

				// hide previous hoverPoints and set new
				if (hoverPoints) {
					each(hoverPoints, function(point) {
						point.setState();
					});
				}
				chart.hoverPoints = null;


				tooltipIsHidden = true;
			}

		}

		/**
		 * Refresh the tooltip's text and position.
		 * @param {Object} point
		 *
		 */
		function refresh(point) {
			var x,
				y,
				boxX,
				boxY,
				show,
				bBox,
				plotX,
				plotY,
				textConfig = {},
				text,
				pointConfig = [],
				tooltipPos = point.tooltipPos,
				formatter = options.formatter || defaultFormatter,
				hoverPoints = chart.hoverPoints;

			// shared tooltip, array is sent over
			if (shared && !(point.series && point.series.noSharedTooltip)) {
				plotY = 0;

				// hide previous hoverPoints and set new
				if (hoverPoints) {
					each(hoverPoints, function(point) {
						point.setState();
					});
				}
				chart.hoverPoints = point;

				each(point, function(item, i) {
					item.setState(HOVER_STATE);
					plotY += item.plotY; // for average

					pointConfig.push(item.getLabelConfig());
				});

				plotX = point[0].plotX;
				plotY = mathRound(plotY) / point.length; // mathRound because Opera 10 has problems here

				textConfig = {
					x: point[0].category
				};
				textConfig.points = pointConfig;
				point = point[0];

			// single point tooltip
			} else {
				textConfig = point.getLabelConfig();
			}
			text = formatter.call(textConfig);

			// register the current series
			currentSeries = point.series;

			// get the reference point coordinates (pie charts use tooltipPos)
			plotX = pick(plotX, point.plotX);
			plotY = pick(plotY, point.plotY);

			x = mathRound(tooltipPos ? tooltipPos[0] : (inverted ? plotWidth - plotY : plotX));
			y = mathRound(tooltipPos ? tooltipPos[1] : (inverted ? plotHeight - plotX : plotY));


			// hide tooltip if the point falls outside the plot
			show = shared || !point.series.isCartesian || isInsidePlot(x, y);

			// update the inner HTML
			if (text === false || !show) {
				hide();
			} else {

				// show it
				if (tooltipIsHidden) {
					label.show();
					tooltipIsHidden = false;
				}

				// update text
				label.attr({
					text: text
				});

				// get the bounding box
				bBox = label.getBBox();
				boxWidth = bBox.width;
				boxHeight = bBox.height;

				// set the size of the box
				label.attr({
					stroke: options.borderColor || point.color || currentSeries.color || '#606060'
				});

				// keep the box within the chart area
				boxX = x - boxWidth + plotLeft - 25;
				boxY = y - boxHeight + plotTop + 10;

				// it is too far to the left, adjust it
				if (boxX < 7) {
					boxX = 7;
					boxY -= 30;
				}


				if (boxY < plotTop + 5) {
					boxY = plotTop + 5; // above
				} else if (boxY + boxHeight > chartHeight) {
					boxY = chartHeight - boxHeight - 5; // below
				}

				// do the move
				move(mathRound(boxX - boxOffLeft), mathRound(boxY - boxOffLeft));


			}


			// crosshairs
			if (crosshairsOptions) {
				crosshairsOptions = splat(crosshairsOptions); // [x, y]

				var path,
					i = crosshairsOptions.length,
					attribs,
					axis;

				while (i--) {
					axis = point.series[i ? 'yAxis' : 'xAxis'];
					if (crosshairsOptions[i] && axis) {
						path = axis
							.getPlotLinePath(point[i ? 'y' : 'x'], 1);
						if (crosshairs[i]) {
							crosshairs[i].attr({ d: path, visibility: VISIBLE });

						} else {
							attribs = {
								'stroke-width': crosshairsOptions[i].width || 1,
								stroke: crosshairsOptions[i].color || '#C0C0C0',
								zIndex: 2
							};
							if (crosshairsOptions[i].dashStyle) {
								attribs.dashstyle = crosshairsOptions[i].dashStyle;
							}
							crosshairs[i] = renderer.path(path)
								.attr(attribs)
								.add();
						}
					}
				}
			}
		}



		// public members
		return {
			shared: shared,
			refresh: refresh,
			hide: hide
		};
	}

	/**
	 * The mouse tracker object
	 * @param {Object} chart
	 * @param {Object} options
	 */
	function MouseTracker (chart, options) {


		var mouseDownX,
			mouseDownY,
			hasDragged,
			selectionMarker,
			zoomType = optionsChart.zoomType,
			zoomX = /x/.test(zoomType),
			zoomY = /y/.test(zoomType),
			zoomHor = (zoomX && !inverted) || (zoomY && inverted),
			zoomVert = (zoomY && !inverted) || (zoomX && inverted);

		/**
		 * Add crossbrowser support for chartX and chartY
		 * @param {Object} e The event object in standard browsers
		 */
		function normalizeMouseEvent(e) {
			var ePos,
				pageZoomFix = isWebKit && doc.width / doc.documentElement.clientWidth - 1,
				chartPosLeft,
				chartPosTop,
				chartX,
				chartY;

			// common IE normalizing
			e = e || win.event;
			if (!e.target) {
				e.target = e.srcElement;
			}

			// jQuery only copies over some properties. IE needs e.x and iOS needs touches.
			if (e.originalEvent) {
				e = e.originalEvent;
			}

			// iOS
			ePos = e.touches ? e.touches.item(0) : e;

			// in certain cases, get mouse position
			if (e.type !== 'mousemove' || win.opera || pageZoomFix) { // only Opera needs position on mouse move, see below
				chartPosition = getPosition(container);
				chartPosLeft = chartPosition.left;
				chartPosTop = chartPosition.top;
			}

			// chartX and chartY
			if (isIE) { // IE including IE9 that has pageX but in a different meaning
				chartX = e.x;
				chartY = e.y;
			} else {
				if (ePos.layerX === UNDEFINED) { // Opera and iOS
					chartX = ePos.pageX - chartPosLeft;
					chartY = ePos.pageY - chartPosTop;
				} else {
					chartX = e.layerX;
					chartY = e.layerY;
				}
			}

			// correct for page zoom bug in WebKit
			if (pageZoomFix) {
				chartX += mathRound((pageZoomFix + 1) * chartPosLeft - chartPosLeft);
				chartY += mathRound((pageZoomFix + 1) * chartPosTop - chartPosTop);
			}

			return extend(e, {
				chartX: chartX,
				chartY: chartY
			});
		}

		/**
		 * Get the click position in terms of axis values.
		 *
		 * @param {Object} e A mouse event
		 */
		function getMouseCoordinates(e) {
			var coordinates = {
				xAxis: [],
				yAxis: []
			};
			each(axes, function(axis, i) {
				var translate = axis.translate,
					isXAxis = axis.isXAxis,
					isHorizontal = inverted ? !isXAxis : isXAxis;

				coordinates[isXAxis ? 'xAxis' : 'yAxis'].push({
					axis: axis,
					value: translate(
						isHorizontal ?
							e.chartX - plotLeft  :
							plotHeight - e.chartY + plotTop,
						true
					)
				});
			});
			return coordinates;
		}

		/**
		 * With line type charts with a single tracker, get the point closest to the mouse
		 */
		function onmousemove (e) {
			var point,
				points,
				hoverPoint = chart.hoverPoint,
				hoverSeries = chart.hoverSeries,
				i,
				j,
				distance = chartWidth,
				index = inverted ? e.chartY : e.chartX - plotLeft; // wtf?

			// shared tooltip
			if (tooltip && options.shared && !(hoverSeries && hoverSeries.noSharedTooltip)) {
				points = [];

				// loop over all series and find the ones with points closest to the mouse
				i = series.length;
				for (j = 0; j < i; j++) {
					if (series[j].visible && series[j].tooltipPoints.length &&
							series[j].options.enableMouseTracking !== false &&
							!series[j].noSharedTooltip) {
						point = series[j].tooltipPoints[index];
						point._dist = mathAbs(index - point.plotX);
						distance = mathMin(distance, point._dist);
						points.push(point);
					}
				}
				// remove furthest points
				i = points.length;
				while (i--) {
					if (points[i]._dist > distance) {
						points.splice(i, 1);
					}
				}
				// refresh the tooltip if necessary
				if (points.length && (points[0].plotX !== hoverX)) {
					tooltip.refresh(points);
					hoverX = points[0].plotX;
				}
			}

			// separate tooltip and general mouse events
			if (hoverSeries && hoverSeries.tracker) { // only use for line-type series with common tracker

				// get the point
				point = hoverSeries.tooltipPoints[index];

				// a new point is hovered, refresh the tooltip
				if (point && point !== hoverPoint) {

					// trigger the events
					point.onMouseOver();

				}
			}
		}



		/**
		 * Reset the tracking by hiding the tooltip, the hover series state and the hover point
		 */
		function resetTracker() {
			var hoverSeries = chart.hoverSeries,
				hoverPoint = chart.hoverPoint;

			if (hoverPoint) {
				hoverPoint.onMouseOut();
			}

			if (hoverSeries) {
				hoverSeries.onMouseOut();
			}

			if (tooltip) {
				tooltip.hide();
			}

			hoverX = null;
		}

		/**
		 * Mouse up or outside the plot area
		 */
		function drop() {
			if (selectionMarker) {
				var selectionData = {
						xAxis: [],
						yAxis: []
					},
					selectionBox = selectionMarker.getBBox(),
					selectionLeft = selectionBox.x - plotLeft,
					selectionTop = selectionBox.y - plotTop;


				// a selection has been made
				if (hasDragged) {

					// record each axis' min and max
					each(axes, function(axis, i) {
						if (axis.options.zoomEnabled !== false) {
							var translate = axis.translate,
								isXAxis = axis.isXAxis,
								isHorizontal = inverted ? !isXAxis : isXAxis,
								selectionMin = translate(
									isHorizontal ?
										selectionLeft :
										plotHeight - selectionTop - selectionBox.height,
									true,
									0,
									0,
									1
								),
								selectionMax = translate(
									isHorizontal ?
										selectionLeft + selectionBox.width :
										plotHeight - selectionTop,
									true,
									0,
									0,
									1
								);

								selectionData[isXAxis ? 'xAxis' : 'yAxis'].push({
									axis: axis,
									min: mathMin(selectionMin, selectionMax), // for reversed axes,
									max: mathMax(selectionMin, selectionMax)
								});
						}
					});
					fireEvent(chart, 'selection', selectionData, zoom);

				}
				selectionMarker = selectionMarker.destroy();
			}

			css(container, { cursor: 'auto' });

			chart.mouseIsDown = mouseIsDown = hasDragged = false;
			removeEvent(doc, hasTouch ? 'touchend' : 'mouseup', drop);

		}

		/**
		 * Set the JS events on the container element
		 */
		function setDOMEvents () {
			var lastWasOutsidePlot = true;

			/*
			 * Record the starting position of a dragoperation
			 */
			container.onmousedown = function(e) {
				e = normalizeMouseEvent(e);

				// record the start position
				//e.preventDefault && e.preventDefault();

				chart.mouseIsDown = mouseIsDown = true;
				mouseDownX = e.chartX;
				mouseDownY = e.chartY;

				addEvent(doc, hasTouch ? 'touchend' : 'mouseup', drop);
			};

			// The mousemove, touchmove and touchstart event handler
			var mouseMove = function(e) {

				// let the system handle multitouch operations like two finger scroll
				// and pinching
				if (e && e.touches && e.touches.length > 1) {
					return;
				}

				// normalize
				e = normalizeMouseEvent(e);
				if (!hasTouch) { // not for touch devices
					e.returnValue = false;
				}

				var chartX = e.chartX,
					chartY = e.chartY,
					isOutsidePlot = !isInsidePlot(chartX - plotLeft, chartY - plotTop);

				// on touch devices, only trigger click if a handler is defined
				if (hasTouch && e.type === 'touchstart') {
					if (attr(e.target, 'isTracker')) {
						if (!chart.runTrackerClick) {
							e.preventDefault();
						}
					} else if (!runChartClick && !isOutsidePlot) {
						e.preventDefault();
					}
				}

				// cancel on mouse outside
				if (isOutsidePlot) {

					if (!lastWasOutsidePlot) {
						// reset the tracker
						resetTracker();
					}

					// drop the selection if any and reset mouseIsDown and hasDragged
					//drop();
					if (chartX < plotLeft) {
						chartX = plotLeft;
					} else if (chartX > plotLeft + plotWidth) {
						chartX = plotLeft + plotWidth;
					}

					if (chartY < plotTop) {
						chartY = plotTop;
					} else if (chartY > plotTop + plotHeight) {
						chartY = plotTop + plotHeight;
					}

				}

				if (mouseIsDown && e.type !== 'touchstart') { // make selection

					// determine if the mouse has moved more than 10px
					hasDragged = Math.sqrt(
						Math.pow(mouseDownX - chartX, 2) +
						Math.pow(mouseDownY - chartY, 2));
					if (hasDragged > 10) {
						var clickedInside = isInsidePlot(mouseDownX - plotLeft, mouseDownY - plotTop);

						// make a selection
						if (hasCartesianSeries && (zoomX || zoomY) && clickedInside) {
							if (!selectionMarker) {
								selectionMarker = renderer.rect(
									plotLeft,
									plotTop,
									zoomHor ? 1 : plotWidth,
									zoomVert ? 1 : plotHeight,
									0
								)
								.attr({
									fill: 'rgba(69,114,167,0.25)',
									zIndex: 7
								})
								.add();
							}
						}

						// adjust the width of the selection marker
						if (selectionMarker && zoomHor) {
							var xSize = chartX - mouseDownX;
							selectionMarker.attr({
								width: mathAbs(xSize),
								x: (xSize > 0 ? 0 : xSize) + mouseDownX
							});
						}
						// adjust the height of the selection marker
						if (selectionMarker && zoomVert) {
							var ySize = chartY - mouseDownY;
							selectionMarker.attr({
								height: mathAbs(ySize),
								y: (ySize > 0 ? 0 : ySize) + mouseDownY
							});
						}

						// panning
						if (clickedInside && !selectionMarker && optionsChart.panning) {
							var xAxis = chart.xAxis[0],
								extremes = xAxis.getExtremes(),
								dataMin = extremes.dataMin,
								dataMax = extremes.dataMax,
								newMin = xAxis.translate(mouseDownX - chartX, true),
								newMax = xAxis.translate(mouseDownX + plotWidth - chartX, true);

							if (newMin > dataMin && newMax < dataMax) {
								xAxis.setExtremes(newMin, newMax, true, false);
							}

							mouseDownX = chartX;
							css(container, { cursor: 'move' });
						}
					}

				} else if (!isOutsidePlot) {
					// show the tooltip
					onmousemove(e);
				}

				lastWasOutsidePlot = isOutsidePlot;

				// when outside plot, allow touch-drag by returning true
				return isOutsidePlot || !hasCartesianSeries;
			};

			/*
			 * When the mouse enters the container, run mouseMove
			 */
			container.onmousemove = mouseMove;

			/*
			 * When the mouse leaves the container, hide the tracking (tooltip).
			 */
			addEvent(container, 'mouseleave', resetTracker);


			container.ontouchstart = function(e) {
				// For touch devices, use touchmove to zoom
				if (zoomX || zoomY) {
					container.onmousedown(e);
				}
				// Show tooltip and prevent the lower mouse pseudo event
				mouseMove(e);
			};

			/*
			 * Allow dragging the finger over the chart to read the values on touch
			 * devices
			 */
			container.ontouchmove = mouseMove;

			/*
			 * Allow dragging the finger over the chart to read the values on touch
			 * devices
			 */
			container.ontouchend = function() {
				if (hasDragged) {
					resetTracker();
				}
			};


			// MooTools 1.2.3 doesn't fire this in IE when using addEvent
			container.onclick = function(e) {
				var hoverPoint = chart.hoverPoint;
				e = normalizeMouseEvent(e);

				e.cancelBubble = true; // IE specific


				if (!hasDragged) {
					if (hoverPoint && attr(e.target, 'isTracker')) {
						var plotX = hoverPoint.plotX,
							plotY = hoverPoint.plotY;

						// add page position info
						extend(hoverPoint, {
							pageX: chartPosition.left + plotLeft +
								(inverted ? plotWidth - plotY : plotX),
							pageY: chartPosition.top + plotTop +
								(inverted ? plotHeight - plotX : plotY)
						});

						// the series click event
						fireEvent(hoverPoint.series, 'click', extend(e, {
							point: hoverPoint
						}));

						// the point click event
						hoverPoint.firePointEvent('click', e);

					} else {
						extend(e, getMouseCoordinates(e));

						// fire a click event in the chart
						if (isInsidePlot(e.chartX - plotLeft, e.chartY - plotTop)) {
							fireEvent(chart, 'click', e);
						}
					}


				}
				// reset mouseIsDown and hasDragged
				hasDragged = false;
			};

		}

		/**
		 * Create the image map that listens for mouseovers
		 */
		placeTrackerGroup = function() {

			// first create - plot positions is not final at this stage
			if (!trackerGroup) {
				chart.trackerGroup = trackerGroup = renderer.g('tracker')
					.attr({ zIndex: 9 })
					.add();

			// then position - this happens on load and after resizing and changing
			// axis or box positions
			} else {
				trackerGroup.translate(plotLeft, plotTop);
				if (inverted) {
					trackerGroup.attr({
						width: chart.plotWidth,
						height: chart.plotHeight
					}).invert();
				}
			}
		};


		// Run MouseTracker
		placeTrackerGroup();
		if (options.enabled) {
			chart.tooltip = tooltip = Tooltip(options);
		}

		setDOMEvents();

		// set the fixed interval ticking for the smooth tooltip
		tooltipInterval = setInterval(function() {
			if (tooltipTick) {
				tooltipTick();
			}
		}, 32);

		// expose properties
		extend(this, {
			zoomX: zoomX,
			zoomY: zoomY,
			resetTracker: resetTracker,
			normalizeMouseEvent: normalizeMouseEvent
		});
	}



	/**
	 * The overview of the chart's series
	 * @param {Object} chart
	 */
	var Legend = function(chart) {

		var options = chart.options.legend;

		if (!options.enabled) {
			return;
		}

		var horizontal = options.layout === 'horizontal',
			symbolWidth = options.symbolWidth,
			symbolPadding = options.symbolPadding,
			allItems,
			style = options.style,
			itemStyle = options.itemStyle,
			itemHoverStyle = options.itemHoverStyle,
			itemHiddenStyle = options.itemHiddenStyle,
			padding = pInt(style.padding),
			rightPadding = 20,
			y = 18,
			initialItemX = 4 + padding + symbolWidth + symbolPadding,
			itemX,
			itemY,
			lastItemY,
			itemHeight = 0,
			box,
			legendBorderWidth = options.borderWidth,
			legendBackgroundColor = options.backgroundColor,
			legendGroup,
			offsetWidth,
			widthOption = options.width,
			series = chart.series,
			reversedLegend = options.reversed;



		/**
		 * Set the colors for the legend item
		 * @param {Object} item A Series or Point instance
		 * @param {Object} visible Dimmed or colored
		 */
		function colorizeItem(item, visible) {
			var legendItem = item.legendItem,
				legendLine = item.legendLine,
				legendSymbol = item.legendSymbol,
				hiddenColor = itemHiddenStyle.color,
				textColor = visible ? options.itemStyle.color : hiddenColor,
				symbolColor = visible ? item.color : hiddenColor;

			if (legendItem) {
				legendItem.css({ fill: textColor });
			}
			if (legendLine) {
				legendLine.attr({ stroke: symbolColor });
			}
			if (legendSymbol) {
				legendSymbol.attr({
					stroke: symbolColor,
					fill: symbolColor
				});
			}
		}

		/**
		 * Position the legend item
		 * @param {Object} item A Series or Point instance
		 * @param {Object} visible Dimmed or colored
		 */
		function positionItem(item, itemX, itemY) {
			var legendItem = item.legendItem,
				legendLine = item.legendLine,
				legendSymbol = item.legendSymbol,
				checkbox = item.checkbox;
			if (legendItem) {
				legendItem.attr({
					x: itemX,
					y: itemY
				});
			}
			if (legendLine) {
				legendLine.translate(itemX, itemY - 4);
			}
			if (legendSymbol) {
				legendSymbol.attr({
					x: itemX + legendSymbol.xOff,
					y: itemY + legendSymbol.yOff
				});
			}
			if (checkbox) {
				checkbox.x = itemX;
				checkbox.y = itemY;
			}
		}

		/**
		 * Destroy a single legend item
		 * @param {Object} item The series or point
		 */
		function destroyItem(item) {
			var checkbox = item.checkbox;

			// destroy SVG elements
			each(['legendItem', 'legendLine', 'legendSymbol'], function(key) {
				if (item[key]) {
					item[key].destroy();
				}
			});

			if (checkbox) {
				discardElement(item.checkbox);
			}


		}


		/**
		 * Position the checkboxes after the width is determined
		 */
		function positionCheckboxes() {
			each(allItems, function(item) {
				var checkbox = item.checkbox,
					alignAttr = legendGroup.alignAttr;
				if (checkbox) {
					css(checkbox, {
						left: (alignAttr.translateX + item.legendItemWidth + checkbox.x - 40) +PX,
						top: (alignAttr.translateY + checkbox.y - 11) + PX
					});
				}
			});
		}

		/**
		 * Render a single specific legend item
		 * @param {Object} item A series or point
		 */
		function renderItem(item) {
			var bBox,
				itemWidth,
				legendSymbol,
				symbolX,
				symbolY,
				attribs,
				simpleSymbol,
				radius,
				li = item.legendItem,
				series = item.series || item,
				i = allItems.length,
				itemOptions = series.options,
				strokeWidth = (itemOptions && itemOptions.borderWidth) || 0;


			if (!li) { // generate it once, later move it

				// let these series types use a simple symbol
				simpleSymbol = /^(bar|pie|area|column)$/.test(series.type);

				// generate the list item text
				item.legendItem = li = renderer.text(
						options.labelFormatter.call(item),
						0,
						0
					)
					.css(item.visible ? itemStyle : itemHiddenStyle)
					.on('mouseover', function() {
						item.setState(HOVER_STATE);
						li.css(itemHoverStyle);
					})
					.on('mouseout', function() {
						li.css(item.visible ? itemStyle : itemHiddenStyle);
						item.setState();
					})
					.on('click', function(event) {
						var strLegendItemClick = 'legendItemClick',
							fnLegendItemClick = function() {
								item.setVisible();
							};

						// click the name or symbol
						if (item.firePointEvent) { // point
							item.firePointEvent(strLegendItemClick, null, fnLegendItemClick);
						} else {
							fireEvent(item, strLegendItemClick, null, fnLegendItemClick);
						}
					})
					.attr({ zIndex: 2 })
					.add(legendGroup);

				// draw the line
				if (!simpleSymbol && itemOptions && itemOptions.lineWidth) {
					var attrs = {
							'stroke-width': itemOptions.lineWidth,
							zIndex: 2
						};
					if (itemOptions.dashStyle) {
						attrs.dashstyle = itemOptions.dashStyle;
					}
					item.legendLine = renderer.path([
						M,
						-symbolWidth - symbolPadding,
						0,
						L,
						-symbolPadding,
						0
					])
					.attr(attrs)
					.add(legendGroup);
				}

				// draw a simple symbol
				if (simpleSymbol) { // bar|pie|area|column

					legendSymbol = renderer.rect(
						(symbolX = -symbolWidth - symbolPadding),
						(symbolY = -11),
						symbolWidth,
						12,
						2
					).attr({
						//'stroke-width': 0,
						zIndex: 3
					}).add(legendGroup);
				}

				// draw the marker
				else if (itemOptions && itemOptions.marker && itemOptions.marker.enabled) {
					radius = itemOptions.marker.radius;
					legendSymbol = renderer.symbol(
						item.symbol,
						(symbolX = -symbolWidth / 2 - symbolPadding - radius),
						(symbolY = -4 - radius),
						2 * radius,
						2 * radius
					)
					.attr(item.pointAttr[NORMAL_STATE])
					.attr({ zIndex: 3 })
					.add(legendGroup);

				}
				if (legendSymbol) {
					legendSymbol.xOff = symbolX + (strokeWidth % 2 / 2);
					legendSymbol.yOff = symbolY + (strokeWidth % 2 / 2);
				}

				item.legendSymbol = legendSymbol;

				// colorize the items
				colorizeItem(item, item.visible);


				// add the HTML checkbox on top
				if (itemOptions && itemOptions.showCheckbox) {
					item.checkbox = createElement('input', {
						type: 'checkbox',
						checked: item.selected,
						defaultChecked: item.selected // required by IE7
					}, options.itemCheckboxStyle, container);

					addEvent(item.checkbox, 'click', function(event) {
						var target = event.target;
						fireEvent(item, 'checkboxClick', {
								checked: target.checked
							},
							function() {
								item.select();
							}
						);
					});
				}
			}


			// calculate the positions for the next line
			bBox = li.getBBox();

			itemWidth = item.legendItemWidth =
				options.itemWidth || symbolWidth + symbolPadding + bBox.width + rightPadding;
			itemHeight = bBox.height;

			// if the item exceeds the width, start a new line
			if (horizontal && itemX - initialItemX + itemWidth >
					(widthOption || (chartWidth - 2 * padding - initialItemX))) {
				itemX = initialItemX;
				itemY += itemHeight;
			}
			lastItemY = itemY;

			// position the newly generated or reordered items
			positionItem(item, itemX, itemY);

			// advance
			if (horizontal)  {
				itemX += itemWidth;
			} else {
				itemY += itemHeight;
			}

			// the width of the widest item
			offsetWidth = widthOption || mathMax(
				horizontal ? itemX - initialItemX : itemWidth,
				offsetWidth
			);



			// add it all to an array to use below
			//allItems.push(item);
		}

		/**
		 * Render the legend. This method can be called both before and after
		 * chart.render. If called after, it will only rearrange items instead
		 * of creating new ones.
		 */
		function renderLegend() {
			itemX = initialItemX;
			itemY = y;
			offsetWidth = 0;
			lastItemY = 0;

			if (!legendGroup) {
				legendGroup = renderer.g('legend')
					.attr({ zIndex: 7 })
					.add();
			}


			// add each series or point
			allItems = [];
			each(series, function(serie) {
				var seriesOptions = serie.options;

				if (!seriesOptions.showInLegend) {
					return;
				}

				// use points or series for the legend item depending on legendType
				allItems = allItems.concat(seriesOptions.legendType === 'point' ?
					serie.data :
					serie
				);

			});

			// sort by legendIndex
			allItems.sort(function(a, b) {
				return (a.options.legendIndex || 0) - (b.options.legendIndex || 0);
			});

			// reversed legend
			if (reversedLegend) {
				allItems.reverse();
			}

			// render the items
			each(allItems, renderItem);


			// Draw the border
			legendWidth = widthOption || offsetWidth;
			legendHeight = lastItemY - y + itemHeight;

			if (legendBorderWidth || legendBackgroundColor) {
				legendWidth += 2 * padding;
				legendHeight += 2 * padding;

				if (!box) {
					box = renderer.rect(
						0,
						0,
						legendWidth,
						legendHeight,
						options.borderRadius,
						legendBorderWidth || 0
					).attr({
						stroke: options.borderColor,
						'stroke-width': legendBorderWidth || 0,
						fill: legendBackgroundColor || NONE
					})
					.add(legendGroup)
					.shadow(options.shadow);

				} else if (legendWidth > 0 && legendHeight > 0) {
					box.animate(
						box.crisp(null, null, null, legendWidth, legendHeight)
					);
				}

				// hide the border if no items
				box[allItems.length ? 'show' : 'hide']();
			}

			// 1.x compatibility: positioning based on style
			var props = ['left', 'right', 'top', 'bottom'],
				prop,
				i = 4;
			while(i--) {
				prop = props[i];
				if (style[prop] && style[prop] !== 'auto') {
					options[i < 2 ? 'align' : 'verticalAlign'] = prop;
					options[i < 2 ? 'x' : 'y'] = pInt(style[prop]) * (i % 2 ? -1 : 1);
				}
			}

			legendGroup.align(extend(options, {
				width: legendWidth,
				height: legendHeight
			}), true, spacingBox);

			if (!isResizing) {
				positionCheckboxes();
			}
		}


		// run legend
		renderLegend();

		// move checkboxes
		addEvent(chart, 'endResize', positionCheckboxes);

		// expose
		return {
			colorizeItem: colorizeItem,
			destroyItem: destroyItem,
			renderLegend: renderLegend
		};
	};






	/**
	 * Initialize an individual series, called internally before render time
	 */
	function initSeries(options) {
		var type = options.type || optionsChart.type || optionsChart.defaultSeriesType,
			typeClass = seriesTypes[type],
			serie,
			hasRendered = chart.hasRendered;

		// an inverted chart can't take a column series and vice versa
		if (hasRendered) {
			if (inverted && type === 'column') {
				typeClass = seriesTypes.bar;
			} else if (!inverted && type === 'bar') {
				typeClass = seriesTypes.column;
			}
		}

		serie = new typeClass();

		serie.init(chart, options);

		// set internal chart properties
		if (!hasRendered && serie.inverted) {
			inverted = true;
		}
		if (serie.isCartesian) {
			hasCartesianSeries = serie.isCartesian;
		}

		series.push(serie);

		return serie;
	}

	/**
	 * Add a series dynamically after  time
	 *
	 * @param {Object} options The config options
	 * @param {Boolean} redraw Whether to redraw the chart after adding. Defaults to true.
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 *
	 * @return {Object} series The newly created series object
	 */
	function addSeries(options, redraw, animation) {
		var series;

		if (options) {
			setAnimation(animation, chart);
			redraw = pick(redraw, true); // defaults to true

			fireEvent(chart, 'addSeries', { options: options }, function() {
				series = initSeries(options);
				series.isDirty = true;

				chart.isDirtyLegend = true; // the series array is out of sync with the display
				if (redraw) {
					chart.redraw();
				}
			});
		}

		return series;
	}

	/**
	 * Check whether a given point is within the plot area
	 *
	 * @param {Number} x Pixel x relative to the plot area
	 * @param {Number} y Pixel y relative to the plot area
	 */
	isInsidePlot = function(x, y) {
		return x >= 0 &&
			x <= plotWidth &&
			y >= 0 &&
			y <= plotHeight;
	};

	/**
	 * Adjust all axes tick amounts
	 */
	function adjustTickAmounts() {
		if (optionsChart.alignTicks !== false) {
			each(axes, function(axis) {
				axis.adjustTickAmount();
			});
		}
		maxTicks = null;
	}

	/**
	 * Redraw legend, axes or series based on updated data
	 *
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	function redraw(animation) {
		var redrawLegend = chart.isDirtyLegend,
			hasStackedSeries,
			isDirtyBox = chart.isDirtyBox, // todo: check if it has actually changed?
			seriesLength = series.length,
			i = seriesLength,
			clipRect = chart.clipRect,
			serie;

		setAnimation(animation, chart);

		// link stacked series
		while (i--) {
			serie = series[i];
			if (serie.isDirty && serie.options.stacking) {
				hasStackedSeries = true;
				break;
			}
		}
		if (hasStackedSeries) { // mark others as dirty
			i = seriesLength;
			while (i--) {
				serie = series[i];
				if (serie.options.stacking) {
					serie.isDirty = true;
				}
			}
		}

		// handle updated data in the series
		each(series, function(serie) {
			if (serie.isDirty) { // prepare the data so axis can read it
				if (serie.options.legendType === 'point') {
					redrawLegend = true;
				}
			}
		});

		// handle added or removed series
		if (redrawLegend && legend.renderLegend) { // series or pie points are added or removed
			// draw legend graphics
			legend.renderLegend();

			chart.isDirtyLegend = false;
		}

		if (hasCartesianSeries) {
			if (!isResizing) {

				// reset maxTicks
				maxTicks = null;

				// set axes scales
				each(axes, function(axis) {
					axis.leastDistance = UNDEFINED;
					axis.setScale();
				});
			}
			adjustTickAmounts();
			getMargins();

			// redraw axes
			each(axes, function(axis) {
				if (axis.isDirty || isDirtyBox) {
					axis.redraw();
					isDirtyBox = true;
				}
			});


		}

		// the plot areas size has changed
		if (isDirtyBox) {
			drawChartBox();
			placeTrackerGroup();

			// move clip rect
			if (clipRect) {
				stop(clipRect);
				clipRect.animate({ // for chart resize
					width: chart.plotSizeX,
					height: chart.plotSizeY
				});
			}

		}


		// redraw affected series
		each(series, function(serie) {
			if (serie.isDirty && serie.visible &&
					(!serie.isCartesian || serie.xAxis)) { // issue #153
				serie.redraw();
			}
		});


		// hide tooltip and hover states
		if (tracker && tracker.resetTracker) {
			tracker.resetTracker();
		}

		// fire the event
		fireEvent(chart, 'redraw'); // jQuery breaks this when calling it from addEvent. Overwrites chart.redraw
	}



	/**
	 * Dim the chart and show a loading text or symbol
	 * @param {String} str An optional text to show in the loading label instead of the default one
	 */
	function showLoading(str) {
		var loadingOptions = options.loading;

		// create the layer at the first call
		if (!loadingDiv) {
			loadingDiv = createElement(DIV, {
				className: 'highcharts-loading'
			}, extend(loadingOptions.style, {
				left: plotLeft + PX,
				top: plotTop + PX,
				width: plotWidth + PX,
				height: plotHeight + PX,
				zIndex: 10,
				display: NONE
			}), container);

			loadingSpan = createElement(
				'span',
				null,
				loadingOptions.labelStyle,
				loadingDiv
			);

		}

		// update text
		loadingSpan.innerHTML = str || options.lang.loading;

		// show it
		if (!loadingShown) {
			css(loadingDiv, { opacity: 0, display: '' });
			animate(loadingDiv, {
				opacity: loadingOptions.style.opacity
			}, {
				duration: loadingOptions.showDuration
			});
			loadingShown = true;
		}
	}
	/**
	 * Hide the loading layer
	 */
	function hideLoading() {
		animate(loadingDiv, {
			opacity: 0
		}, {
			duration: options.loading.hideDuration,
			complete: function() {
				css(loadingDiv, { display: NONE });
			}
		});
		loadingShown = false;
	}

	/**
	 * Get an axis, series or point object by id.
	 * @param id {String} The id as given in the configuration options
	 */
	function get(id) {
		var i,
			j,
			points;

		// search axes
		for (i = 0; i < axes.length; i++) {
			if (axes[i].options.id === id) {
				return axes[i];
			}
		}

		// search series
		for (i = 0; i < series.length; i++) {
			if (series[i].options.id === id) {
				return series[i];
			}
		}

		// search points
		for (i = 0; i < series.length; i++) {
			points = series[i].points;
			for (j = 0; j < points.length; j++) {
				if (points[j].id === id) {
					return points[j];
				}
			}
		}
		return null;
	}

	/**
	 * Create the Axis instances based on the config options
	 */
	function getAxes() {
		var xAxisOptions = options.xAxis || {},
			yAxisOptions = options.yAxis || {},
			optionsArray,
			axis;

		// make sure the options are arrays and add some members
		xAxisOptions = splat(xAxisOptions);
		each(xAxisOptions, function(axis, i) {
			axis.index = i;
			axis.isX = true;
		});

		yAxisOptions = splat(yAxisOptions);
		each(yAxisOptions, function(axis, i) {
			axis.index = i;
		});

		// concatenate all axis options into one array
		optionsArray = xAxisOptions.concat(yAxisOptions);

		each(optionsArray, function(axisOptions) {
			axis = new Axis(axisOptions);
		});

		adjustTickAmounts();
	}


	/**
	 * Get the currently selected points from all series
	 */
	function getSelectedPoints() {
		var points = [];
		each(series, function(serie) {
			points = points.concat( grep( serie.points, function(point) {
				return point.selected;
			}));
		});
		return points;
	}

	/**
	 * Get the currently selected series
	 */
	function getSelectedSeries() {
		return grep(series, function (serie) {
			return serie.selected;
		});
	}

	/**
	 * Zoom out to 1:1
	 */
	zoomOut = function () {
		fireEvent(chart, 'selection', { resetSelection: true }, zoom);
		chart.toolbar.remove('zoom');

	};
	/**
	 * Zoom into a given portion of the chart given by axis coordinates
	 * @param {Object} event
	 */
	zoom = function (event) {

		// add button to reset selection
		var lang = defaultOptions.lang,
			animate = chart.pointCount < 100;

		if (chart.resetZoomEnabled !== false) { // hook for Stock charts etc.
			chart.toolbar.add('zoom', lang.resetZoom, lang.resetZoomTitle, zoomOut);
		}

		// if zoom is called with no arguments, reset the axes
		if (!event || event.resetSelection) {
			each(axes, function(axis) {
				if (axis.options.zoomEnabled !== false) {
					axis.setExtremes(null, null, false, animate);
				}
			});
		}

		// else, zoom in on all axes
		else {
			each(event.xAxis.concat(event.yAxis), function(axisData) {
				var axis = axisData.axis;

				// don't zoom more than maxZoom
				if (chart.tracker[axis.isXAxis ? 'zoomX' : 'zoomY']) {
					axis.setExtremes(axisData.min, axisData.max, false, animate);
				}
			});
		}

		// redraw chart
		redraw();
	};

	/**
	 * Show the title and subtitle of the chart
	 *
	 * @param titleOptions {Object} New title options
	 * @param subtitleOptions {Object} New subtitle options
	 *
	 */
	function setTitle (titleOptions, subtitleOptions) {

		chartTitleOptions = merge(options.title, titleOptions);
		chartSubtitleOptions = merge(options.subtitle, subtitleOptions);

		// add title and subtitle
		each([
			['title', titleOptions, chartTitleOptions],
			['subtitle', subtitleOptions, chartSubtitleOptions]
		], function(arr) {
			var name = arr[0],
				title = chart[name],
				titleOptions = arr[1],
				chartTitleOptions = arr[2];

			if (title && titleOptions) {
				title.destroy(); // remove old
				title = null;
			}
			if (chartTitleOptions && chartTitleOptions.text && !title) {
				chart[name] = renderer.text(
					chartTitleOptions.text,
					0,
					0
				)
				.attr({
					align: chartTitleOptions.align,
					'class': 'highcharts-'+ name,
					zIndex: 1
				})
				.css(chartTitleOptions.style)
				.add()
				.align(chartTitleOptions, false, spacingBox);
			}
		});

	}

	/**
	 * Get chart width and height according to options and container size
	 */
	function getChartSize() {

		containerWidth = (renderToClone || renderTo).offsetWidth;
		containerHeight = (renderToClone || renderTo).offsetHeight;
		chart.chartWidth = chartWidth = optionsChart.width || containerWidth || 600;
		chart.chartHeight = chartHeight = optionsChart.height ||
			// the offsetHeight of an empty container is 0 in standard browsers, but 19 in IE7:
			(containerHeight > 19 ? containerHeight : 400);
	}


	/**
	 * Get the containing element, determine the size and create the inner container
	 * div to hold the chart
	 */
	function getContainer() {
		renderTo = optionsChart.renderTo;
		containerId = PREFIX + idCounter++;

		if (isString(renderTo)) {
			renderTo = doc.getElementById(renderTo);
		}

		// remove previous chart
		renderTo.innerHTML = '';

		// If the container doesn't have an offsetWidth, it has or is a child of a node
		// that has display:none. We need to temporarily move it out to a visible
		// state to determine the size, else the legend and tooltips won't render
		// properly
		if (!renderTo.offsetWidth) {
			renderToClone = renderTo.cloneNode(0);
			css(renderToClone, {
				position: ABSOLUTE,
				top: '-9999px',
				display: ''
			});
			doc.body.appendChild(renderToClone);
		}

		// get the width and height
		getChartSize();

		// create the inner container
		chart.container = container = createElement(DIV, {
				className: 'highcharts-container' +
					(optionsChart.className ? ' '+ optionsChart.className : ''),
				id: containerId
			}, extend({
				position: RELATIVE,
				overflow: HIDDEN, // needed for context menu (avoid scrollbars) and
					// content overflow in IE
				width: chartWidth + PX,
				height: chartHeight + PX,
				textAlign: 'left'
			}, optionsChart.style),
			renderToClone || renderTo
		);

		chart.renderer = renderer =
			optionsChart.forExport ? // force SVG, used for SVG export
				new SVGRenderer(container, chartWidth, chartHeight, true) :
				new Renderer(container, chartWidth, chartHeight);

		// Issue 110 workaround:
		// In Firefox, if a div is positioned by percentage, its pixel position may land
		// between pixels. The container itself doesn't display this, but an SVG element
		// inside this container will be drawn at subpixel precision. In order to draw
		// sharp lines, this must be compensated for. This doesn't seem to work inside
		// iframes though (like in jsFiddle).
		var subPixelFix, rect;
		if (isFirefox && container.getBoundingClientRect) {
			subPixelFix = function() {
				css(container, { left: 0, top: 0 });
				rect = container.getBoundingClientRect();
				css(container, {
					left: (-(rect.left - pInt(rect.left))) + PX,
					top: (-(rect.top - pInt(rect.top))) + PX
				});
			};

			// run the fix now
			subPixelFix();

			// run it on resize
			addEvent(win, 'resize', subPixelFix);

			// remove it on chart destroy
			addEvent(chart, 'destroy', function() {
				removeEvent(win, 'resize', subPixelFix);
			});
		}
	}

	/**
	 * Calculate margins by rendering axis labels in a preliminary position. Title,
	 * subtitle and legend have already been rendered at this stage, but will be
	 * moved into their final positions
	 */
	getMargins = function() {
		var legendOptions = options.legend,
			legendMargin = pick(legendOptions.margin, 10),
			legendX = legendOptions.x,
			legendY = legendOptions.y,
			align = legendOptions.align,
			verticalAlign = legendOptions.verticalAlign,
			titleOffset;

		resetMargins();

		// adjust for title and subtitle
		if ((chart.title || chart.subtitle) && !defined(optionsMarginTop)) {
			titleOffset = mathMax(
				(chart.title && !chartTitleOptions.floating && !chartTitleOptions.verticalAlign && chartTitleOptions.y) || 0,
				(chart.subtitle && !chartSubtitleOptions.floating && !chartSubtitleOptions.verticalAlign && chartSubtitleOptions.y) || 0
			);
			if (titleOffset) {
				plotTop = mathMax(plotTop, titleOffset + pick(chartTitleOptions.margin, 15) + spacingTop);
			}
		}
		// adjust for legend
		if (legendOptions.enabled && !legendOptions.floating) {
			if (align === 'right') { // horizontal alignment handled first
				if (!defined(optionsMarginRight)) {
					marginRight = mathMax(
						marginRight,
						legendWidth - legendX + legendMargin + spacingRight
					);
				}
			} else if (align === 'left') {
				if (!defined(optionsMarginLeft)) {
					plotLeft = mathMax(
						plotLeft,
						legendWidth + legendX + legendMargin + spacingLeft
					);
				}

			} else if (verticalAlign === 'top') {
				if (!defined(optionsMarginTop)) {
					plotTop = mathMax(
						plotTop,
						legendHeight + legendY + legendMargin + spacingTop
					);
				}

			} else if (verticalAlign === 'bottom') {
				if (!defined(optionsMarginBottom)) {
					marginBottom = mathMax(
						marginBottom,
						legendHeight - legendY + legendMargin + spacingBottom
					);
				}
			}
		}

		// adjust for scroller
		if (chart.extraBottomMargin) {
			marginBottom += chart.extraBottomMargin;
		}
		if (chart.extraTopMargin) {
			plotTop += chart.extraTopMargin;
		}

		// pre-render axes to get labels offset width
		if (hasCartesianSeries) {
			each(axes, function(axis) {
				axis.getOffset();
			});
		}

		if (!defined(optionsMarginLeft)) {
			plotLeft += axisOffset[3];
		}
		if (!defined(optionsMarginTop)) {
			plotTop += axisOffset[0];
		}
		if (!defined(optionsMarginBottom)) {
			marginBottom += axisOffset[2];
		}
		if (!defined(optionsMarginRight)) {
			marginRight += axisOffset[1];
		}

		setChartSize();

	};

	/**
	 * Add the event handlers necessary for auto resizing
	 *
	 */
	function initReflow() {
		var reflowTimeout;
		function reflow() {
			var width = optionsChart.width || renderTo.offsetWidth,
				height = optionsChart.height || renderTo.offsetHeight;

			if (width && height) { // means container is display:none
				if (width !== containerWidth || height !== containerHeight) {
					clearTimeout(reflowTimeout);
					reflowTimeout = setTimeout(function() {
						resize(width, height, false);
					}, 100);
				}
				containerWidth = width;
				containerHeight = height;
			}
		}
		addEvent(win, 'resize', reflow);
		addEvent(chart, 'destroy', function() {
			removeEvent(win, 'resize', reflow);
		});
	}

	/**
	 * Resize the chart to a given width and height
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Object|Boolean} animation
	 */
	resize = function(width, height, animation) {
		var chartTitle = chart.title,
			chartSubtitle = chart.subtitle;

		isResizing += 1;

		// set the animation for the current process
		setAnimation(animation, chart);

		oldChartHeight = chartHeight;
		oldChartWidth = chartWidth;
		if (defined(width)) {
			chart.chartWidth = chartWidth = mathRound(width);
		}
		if (defined(height)) {
			chart.chartHeight = chartHeight = mathRound(height);
		}

		css(container, {
			width: chartWidth + PX,
			height: chartHeight + PX
		});
		renderer.setSize(chartWidth, chartHeight, animation);

		// update axis lengths for more correct tick intervals:
		plotWidth = chartWidth - plotLeft - marginRight;
		plotHeight = chartHeight - plotTop - marginBottom;

		// handle axes
		maxTicks = null;
		each(axes, function(axis) {
			axis.isDirty = true;
			axis.setScale();
		});

		// make sure non-cartesian series are also handled
		each(series, function(serie) {
			serie.isDirty = true;
		});

		chart.isDirtyLegend = true; // force legend redraw
		chart.isDirtyBox = true; // force redraw of plot and chart border

		getMargins();

		// move titles
		if (chartTitle) {
			chartTitle.align(null, null, spacingBox);
		}
		if (chartSubtitle) {
			chartSubtitle.align(null, null, spacingBox);
		}

		redraw(animation);


		oldChartHeight = null;
		fireEvent(chart, 'resize');

		// fire endResize and set isResizing back
		setTimeout(function() {
			fireEvent(chart, 'endResize', null, function() {
				isResizing -= 1;
			});
		}, (globalAnimation && globalAnimation.duration) || 500);
	};

	/**
	 * Set the public chart properties. This is done before and after the pre-render
	 * to determine margin sizes
	 */
	setChartSize = function() {

		chart.plotLeft = plotLeft = mathRound(plotLeft);
		chart.plotTop = plotTop = mathRound(plotTop);
		chart.plotWidth = plotWidth = mathRound(chartWidth - plotLeft - marginRight);
		chart.plotHeight = plotHeight = mathRound(chartHeight - plotTop - marginBottom);

		chart.plotSizeX = inverted ? plotHeight : plotWidth;
		chart.plotSizeY = inverted ? plotWidth : plotHeight;

		spacingBox = {
			x: spacingLeft,
			y: spacingTop,
			width: chartWidth - spacingLeft - spacingRight,
			height: chartHeight - spacingTop - spacingBottom
		};

		each(axes, function(axis) {
			axis.setAxisSize();
		});
	};

	/**
	 * Initial margins before auto size margins are applied
	 */
	resetMargins = function() {
		plotTop = pick(optionsMarginTop, spacingTop);
		marginRight = pick(optionsMarginRight, spacingRight);
		marginBottom = pick(optionsMarginBottom, spacingBottom);
		plotLeft = pick(optionsMarginLeft, spacingLeft);
		axisOffset = [0, 0, 0, 0]; // top, right, bottom, left
	};

	/**
	 * Draw the borders and backgrounds for chart and plot area
	 */
	drawChartBox = function() {
		var chartBorderWidth = optionsChart.borderWidth || 0,
			chartBackgroundColor = optionsChart.backgroundColor,
			plotBackgroundColor = optionsChart.plotBackgroundColor,
			plotBackgroundImage = optionsChart.plotBackgroundImage,
			mgn,
			plotSize = {
				x: plotLeft,
				y: plotTop,
				width: plotWidth,
				height: plotHeight
			};

		// Chart area
		mgn = chartBorderWidth + (optionsChart.shadow ? 8 : 0);

		if (chartBorderWidth || chartBackgroundColor) {
			if (!chartBackground) {
				chartBackground = renderer.rect(mgn / 2, mgn / 2, chartWidth - mgn, chartHeight - mgn,
						optionsChart.borderRadius, chartBorderWidth)
					.attr({
						stroke: optionsChart.borderColor,
						'stroke-width': chartBorderWidth,
						fill: chartBackgroundColor || NONE
					})
					.add()
					.shadow(optionsChart.shadow);
			} else { // resize
				chartBackground.animate(
					chartBackground.crisp(null, null, null, chartWidth - mgn, chartHeight - mgn)
				);
			}
		}


		// Plot background
		if (plotBackgroundColor) {
			if (!plotBackground) {
				plotBackground = renderer.rect(plotLeft, plotTop, plotWidth, plotHeight, 0)
					.attr({
						fill: plotBackgroundColor
					})
					.add()
					.shadow(optionsChart.plotShadow);
			} else {
				plotBackground.animate(plotSize);
			}
		}
		if (plotBackgroundImage) {
			if (!plotBGImage) {
				plotBGImage = renderer.image(plotBackgroundImage, plotLeft, plotTop, plotWidth, plotHeight)
					.add();
			} else {
				plotBGImage.animate(plotSize);
			}
		}

		// Plot area border
		if (optionsChart.plotBorderWidth) {
			if (!plotBorder) {
				plotBorder = renderer.rect(plotLeft, plotTop, plotWidth, plotHeight, 0, optionsChart.plotBorderWidth)
					.attr({
						stroke: optionsChart.plotBorderColor,
						'stroke-width': optionsChart.plotBorderWidth,
						zIndex: 4
					})
					.add();
			} else {
				plotBorder.animate(
					plotBorder.crisp(null, plotLeft, plotTop, plotWidth, plotHeight)
				);
			}
		}

		// reset
		chart.isDirtyBox = false;
	};

	/**
	 * Render all graphics for the chart
	 */
	function render () {
		var labels = options.labels,
			credits = options.credits,
			creditsHref;

		// Title
		setTitle();


		// Legend
		legend = chart.legend = new Legend(chart);

		// Get margins by pre-rendering axes
		getMargins();
		each(axes, function(axis) {
			axis.setTickPositions(true); // update to reflect the new margins
		});
		adjustTickAmounts();
		getMargins(); // second pass to check for new labels


		// Draw the borders and backgrounds
		drawChartBox();

		// Axes
		if (hasCartesianSeries) {
			each(axes, function(axis) {
				axis.render();
			});
		}


		// The series
		if (!chart.seriesGroup) {
			chart.seriesGroup = renderer.g('series-group')
				.attr({ zIndex: 3 })
				.add();
		}
		each(series, function(serie) {
			serie.translate();
			serie.setTooltipPoints();
			serie.render();
		});


		// Labels
		if (labels.items) {
			each(labels.items, function() {
				var style = extend(labels.style, this.style),
					x = pInt(style.left) + plotLeft,
					y = pInt(style.top) + plotTop + 12;

				// delete to prevent rewriting in IE
				delete style.left;
				delete style.top;

				renderer.text(
					this.html,
					x,
					y
				)
				.attr({ zIndex: 2 })
				.css(style)
				.add();

			});
		}

		// Toolbar (don't redraw)
		if (!chart.toolbar) {
			chart.toolbar = Toolbar(chart);
		}

		// Credits
		if (credits.enabled && !chart.credits) {
			creditsHref = credits.href;
			renderer.text(
				credits.text,
				0,
				0
			)
			.on('click', function() {
				if (creditsHref) {
					location.href = creditsHref;
				}
			})
			.attr({
				align: credits.position.align,
				zIndex: 8
			})
			.css(credits.style)
			.add()
			.align(credits.position);
		}

		placeTrackerGroup();

		// Set flag
		chart.hasRendered = true;

		// If the chart was rendered outside the top container, put it back in
		if (renderToClone) {
			renderTo.appendChild(container);
			discardElement(renderToClone);
			//updatePosition(container);
		}
	}

	/**
	 * Clean up memory usage
	 */
	function destroy() {
		var start = + new Date();
		var i = series.length,
			parentNode = container && container.parentNode;

		// fire the chart.destoy event
		fireEvent(chart, 'destroy');

		// remove events
		removeEvent(win, 'unload', destroy);
		removeEvent(chart);

		each(axes, function(axis) {
			removeEvent(axis);
		});

		// destroy each series
		while (i--) {
			series[i].destroy();
		}

		// remove container and all SVG
		if (container) { // can break in IE when destroyed before finished loading
			container.innerHTML = '';
			removeEvent(container);
			if (parentNode) {
				parentNode.removeChild(container);
			}

			// IE6 leak
			container =	null;
		}

		// IE7 leak
		if (renderer) { // can break in IE when destroyed before finished loading
			renderer.alignedObjects = null;
		}

		// memory and CPU leak
		clearInterval(tooltipInterval);

		// clean it all up
		for (i in chart) {
			delete chart[i];
		}
		//logTime && console.log('Destroyed chart in '+ (new Date() - start) +' ms');
	}
	/**
	 * Prepare for first rendering after all data are loaded
	 */
	function firstRender() {

		// VML namespaces can't be added until after complete. Listening
		// for Perini's doScroll hack is not enough.
		var ONREADYSTATECHANGE = 'onreadystatechange',
		COMPLETE = 'complete';
		// Note: in spite of JSLint's complaints, win == win.top is required
		if (!hasSVG && win == win.top && doc.readyState !== COMPLETE) {
				doc.attachEvent(ONREADYSTATECHANGE, function() {
				doc.detachEvent(ONREADYSTATECHANGE, firstRender);
				if (doc.readyState === COMPLETE) {
					firstRender();
				}
			});
			return;
		}

		// create the container
		getContainer();

		// Run an early event after the container and renderer are established
		fireEvent(chart, 'init');
		
		// Initialize range selector for stock charts
		if (RangeSelector && options.rangeSelector.enabled) {
			chart.rangeSelector = new RangeSelector(chart);
		}

		resetMargins();
		setChartSize();

		// Initialize the series
		each(options.series || [], function(serieOptions) {
			initSeries(serieOptions);
		});

		// Set the common inversion and transformation for inverted series after initSeries
		chart.inverted = inverted = pick(inverted, options.chart.inverted);


		// get axes
		getAxes();

		// Run an event where series and axes can be added
		//fireEvent(chart, 'beforeRender');
		
		// Initialize scroller for stock charts
		if (Scroller && options.navigator.enabled || options.scrollbar.enabled) {
			chart.scroller = new Scroller(chart);
		}

		chart.render = render;

		// depends on inverted and on margins being set
		chart.tracker = tracker = new MouseTracker(chart, options.tooltip);


		render();

		// run callbacks
		if (callback) {
			callback.apply(chart, [chart]);
		}
		each(chart.callbacks, function(fn) {
			fn.apply(chart, [chart]);
		});

		fireEvent(chart, 'load');

	}

	// Run chart


	// Destroy the chart and free up memory.
	addEvent(win, 'unload', destroy);

	// Set up auto resize
	if (optionsChart.reflow !== false) {
		addEvent(chart, 'load', initReflow);
	}

	// Chart event handlers
	if (chartEvents) {
		for (eventType in chartEvents) {
			addEvent(chart, eventType, chartEvents[eventType]);
		}
	}


	chart.options = options;
	chart.series = series;


	chart.xAxis = [];
	chart.yAxis = [];




	// Expose methods and variables
	chart.addSeries = addSeries;
	chart.animation = pick(optionsChart.animation, true);
	chart.Axis = Axis;
	chart.destroy = destroy;
	chart.get = get;
	chart.getSelectedPoints = getSelectedPoints;
	chart.getSelectedSeries = getSelectedSeries;
	chart.hideLoading = hideLoading;
	chart.initSeries = initSeries;
	chart.isInsidePlot = isInsidePlot;
	chart.redraw = redraw;
	chart.setSize = resize;
	chart.setTitle = setTitle;
	chart.showLoading = showLoading;
	chart.pointCount = 0;
	chart.counters = new ChartCounters();

	firstRender();


} // end Chart

// Hook for exporting module
Chart.prototype.callbacks = [];
/**
 * The Point object and prototype. Inheritable and used as base for PiePoint
 */
var Point = function() {};
Point.prototype = {

	/**
	 * Initialize the point
	 * @param {Object} series The series object containing this point
	 * @param {Object} options The data in either number, array or object format
	 */
	init: function(series, options, x) {
		var point = this,
			counters = series.chart.counters,
			defaultColors;
		point.series = series;
		point.applyOptions(options, x);
		point.pointAttr = {};

		if (series.options.colorByPoint) {
			defaultColors = series.chart.options.colors;
			if (!point.options) {
				point.options = {};
			}
			point.color = point.options.color = point.color || defaultColors[counters.color++];
			
			// loop back to zero
			counters.wrapColor(defaultColors.length);
		}

		series.chart.pointCount++;
		return point;
	},
	/**
	 * Apply the options containing the x and y data and possible some extra properties.
	 * This is called on point init or from point.update.
	 *
	 * @param {Object} options
	 */
	applyOptions: function(options, x) {
		var point = this,
			series = point.series,
			optionsType = typeof options;

		point.config = options;

		// onedimensional array input
		if (optionsType === 'number' || options === null) {
			point.y = options;
		}

		// two-dimentional array
		else if (typeof options[0] === 'number') {
			point.x = options[0];
			point.y = options[1];
		}

		// object input
		else if (optionsType === 'object' && typeof options.length !== 'number') {

			// copy options directly to point
			extend(point, options);
			point.options = options;
		}

		// categorized data with name in first position
		else if (typeof options[0] === 'string') {
			point.name = options[0];
			point.y = options[1];
		}

		/*
		 * If no x is set by now, get auto incremented value. All points must have an
		 * x value, however the y value can be null to create a gap in the series
		 */

		// todo: skip this? It is only used in applyOptions, in translate it should not be used
		if (point.x === UNDEFINED) {
			point.x = x === UNDEFINED ? series.autoIncrement() : x;
		}

	},

	/**
	 * Destroy a point to clear memory. Its reference still stays in series.data.
	 */
	destroy: function() {
		var point = this,
			series = point.series,
			prop;

		series.chart.pointCount--;

		if (point === series.chart.hoverPoint) {
			point.onMouseOut();
		}
		series.chart.hoverPoints = null; // remove reference

		// remove all events
		if (point.graphic) { // removeEvent and destroyElements are performance expensive
			removeEvent(point);
			point.destroyElements();
		}

		if (point.legendItem) { // pies have legend items
			point.series.chart.legend.destroyItem(point);
		}

		for (prop in point) {
			point[prop] = null;
		}


	},

	/**
	 * Destroy SVG elements associated with the point
	 */
	destroyElements: function() {
		var point = this,
			props = ['graphic', 'tracker', 'dataLabel', 'group', 'connector'],
			prop,
			i = 5;
		while (i--) {
			prop = props[i];
			if (point[prop]) {
				point[prop] = point[prop].destroy();
			}
		}
	},

	/**
	 * Return the configuration hash needed for the data label and tooltip formatters
	 */
	getLabelConfig: function() {
		var point = this;
		return {
			x: point.category,
			y: point.y,
			series: point.series,
			point: point,
			percentage: point.percentage,
			total: point.total || point.stackTotal
		};
	},

	/**
	 * Toggle the selection status of a point
	 * @param {Boolean} selected Whether to select or unselect the point.
	 * @param {Boolean} accumulate Whether to add to the previous selection. By default,
	 *     this happens if the control key (Cmd on Mac) was pressed during clicking.
	 */
	select: function(selected, accumulate) {
		var point = this,
			series = point.series,
			chart = series.chart;

		point.selected = selected = pick(selected, !point.selected);

		//series.isDirty = true;
		point.firePointEvent(selected ? 'select' : 'unselect');
		point.setState(selected && SELECT_STATE);

		// unselect all other points unless Ctrl or Cmd + click
		if (!accumulate) {
			each(chart.getSelectedPoints(), function (loopPoint) {
				if (loopPoint.selected && loopPoint !== point) {
					loopPoint.selected = false;
					loopPoint.setState(NORMAL_STATE);
					loopPoint.firePointEvent('unselect');
				}
			});
		}

	},

	onMouseOver: function() {
		var point = this,
			series = point.series,
			chart = series.chart,
			tooltip = chart.tooltip,
			hoverPoint = chart.hoverPoint;

		// set normal state to previous series
		if (hoverPoint && hoverPoint !== point) {
			hoverPoint.onMouseOut();
		}

		// trigger the event
		point.firePointEvent('mouseOver');

		// update the tooltip
		if (tooltip && (!tooltip.shared || series.noSharedTooltip)) {
			tooltip.refresh(point);
		}

		// hover this
		point.setState(HOVER_STATE);
		chart.hoverPoint = point;
	},

	onMouseOut: function() {
		var point = this;
		point.firePointEvent('mouseOut');

		point.setState();
		point.series.chart.hoverPoint = null;
	},

	/**
	 * Extendable method for formatting each point's tooltip line
	 *
	 * @param {Boolean} useHeader Whether a common header is used for multiple series in the tooltip
	 *
	 * @return {String} A string to be concatenated in to the common tooltip text
	 */
	tooltipFormatter: function(useHeader) {
		var point = this,
			series = point.series;

		return ['<span style="color:'+ series.color +'">', (point.name || series.name), '</span>: ',
			(!useHeader ? ('<b>x = '+ (point.name || point.x) + ',</b> ') : ''),
			'<b>', (!useHeader ? 'y = ' : '' ), point.y, '</b>'].join('');

	},

	/**
	 * Update the point with new options (typically x/y data) and optionally redraw the series.
	 *
	 * @param {Object} options Point options as defined in the series.data array
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 *
	 */
	update: function(options, redraw, animation) {
		var point = this,
			series = point.series,
			dataLabel = point.dataLabel,
			graphic = point.graphic,
			i,
			data = series.data,
			dataLength = data.length,
			chart = series.chart;

		redraw = pick(redraw, true);

		// fire the event with a default handler of doing the update
		point.firePointEvent('update', { options: options }, function() {

			point.applyOptions(options);

			// update visuals
			if (isObject(options)) {
				series.getAttribs();
				if (graphic) {
					graphic.attr(point.pointAttr[series.state]);
				}
			}

			// record changes in the parallel arrays
			for (i = 0; i < dataLength; i++) {
				if (data[i] === point) {
					series.xData[i] = point.x;
					series.yData[i] = point.y;
					series.options.data[i] = options;
					break;
				}
			}

			// redraw
			series.isDirty = true;
			series.isDirtyData = true;
			if (redraw) {
				chart.redraw(animation);
			}
		});
	},

	/**
	 * Remove a point and optionally redraw the series and if necessary the axes
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	remove: function(redraw, animation) {
		var point = this,
			series = point.series,
			chart = series.chart,
			i,
			data = series.data,
			dataLength = data.length;

		setAnimation(animation, chart);
		redraw = pick(redraw, true);

		// fire the event with a default handler of removing the point
		point.firePointEvent('remove', null, function() {

			//erase(series.data, point);

			for (i = 0; i < dataLength; i++) {
				if (data[i] === point) {

					// splice all the parallel arrays
					data.splice(i, 1);
					series.options.data.splice(i, 1);
					series.xData.splice(i, 1);
					series.yData.splice(i, 1);
					break;
				}
			}

			point.destroy();


			// redraw
			series.isDirty = true;
			series.isDirtyData = true;
			if (redraw) {
				chart.redraw();
			}
		});


	},

	/**
	 * Fire an event on the Point object. Must not be renamed to fireEvent, as this
	 * causes a name clash in MooTools
	 * @param {String} eventType
	 * @param {Object} eventArgs Additional event arguments
	 * @param {Function} defaultFunction Default event handler
	 */
	firePointEvent: function(eventType, eventArgs, defaultFunction) {
		var point = this,
			series = this.series,
			seriesOptions = series.options;

		// load event handlers on demand to save time on mouseover/out
		if (seriesOptions.point.events[eventType] || (
				point.options && point.options.events && point.options.events[eventType])) {
			this.importEvents();
		}

		// add default handler if in selection mode
		if (eventType === 'click' && seriesOptions.allowPointSelect) {
			defaultFunction = function (event) {
				// Control key is for Windows, meta (= Cmd key) for Mac, Shift for Opera
				point.select(null, event.ctrlKey || event.metaKey || event.shiftKey);
			};
		}

		fireEvent(this, eventType, eventArgs, defaultFunction);
	},
	/**
	 * Import events from the series' and point's options. Only do it on
	 * demand, to save processing time on hovering.
	 */
	importEvents: function() {
		if (!this.hasImportedEvents) {
			var point = this,
				options = merge(point.series.options.point, point.options),
				events = options.events,
				eventType;

			point.events = events;

			for (eventType in events) {
				addEvent(point, eventType, events[eventType]);
			}
			this.hasImportedEvents = true;

		}
	},

	/**
	 * Set the point's state
	 * @param {String} state
	 */
	setState: function(state) {
		var point = this,
			series = point.series,
			stateOptions = series.options.states,
			markerOptions = defaultPlotOptions[series.type].marker && series.options.marker,
			normalDisabled = markerOptions && !markerOptions.enabled,
			markerStateOptions = markerOptions && markerOptions.states[state],
			stateDisabled = markerStateOptions && markerStateOptions.enabled === false,
			stateMarkerGraphic = series.stateMarkerGraphic,
			chart = series.chart,
			radius,
			pointAttr = point.pointAttr;

		state = state || NORMAL_STATE; // empty string

		if (
				// already has this state
				state === point.state ||
				// selected points don't respond to hover
				(point.selected && state !== SELECT_STATE) ||
				// series' state options is disabled
				(stateOptions[state] && stateOptions[state].enabled === false) ||
				// point marker's state options is disabled
				(state && (stateDisabled || (normalDisabled && !markerStateOptions.enabled)))

			) {
			return;
		}

		// apply hover styles to the existing point
		if (point.graphic) {
			point.graphic.attr(pointAttr[state]);
		}
		// if a graphic is not applied to each point in the normal state, create a shared
		// graphic for the hover state
		else {
			if (state) {
				if (!stateMarkerGraphic) {
					radius = markerOptions.radius;
					series.stateMarkerGraphic = stateMarkerGraphic = chart.renderer.symbol(
						series.symbol,
						- radius,
						- radius,
						2 * radius,
						2 * radius
					)
					.attr(pointAttr[state])
					.add(series.group);
				}
				
				stateMarkerGraphic.translate(
					point.plotX,
					point.plotY
				);
			}

			if (stateMarkerGraphic) {
				stateMarkerGraphic[state ? 'show' : 'hide']();
			}
		}

		point.state = state;
	}
};

/**
 * @classDescription The base function which all other series types inherit from. The data in the series is stored
 * in various arrays.
 *
 * - First, series.options.data contains all the original config options for
 * each point whether added by options or methods like series.addPoint.
 * - Next, series.data contains those values converted to points, but in case the series data length
 * exceeds the cropThreshold, or if the data is grouped, series.data doesn't contain all the points. It
 * only contains the points that have been created on demand.
 * - Then there's series.points that contains all currently visible point objects. In case of cropping,
 * the cropped-away points are not part of this array. The series.points array starts at series.cropStart
 * compared to series.data and series.options.data. If however the series data is grouped, these can't
 * be correlated one to one.
 * - series.xData and series.processedXData contain clean x values, equivalent to series.data and series.points.
 * - series.yData and series.processedYData contain clean x values, equivalent to series.data and series.points.
 *
 * @param {Object} chart
 * @param {Object} options
 */
var Series = function() {};

Series.prototype = {

	isCartesian: true,
	type: 'line',
	pointClass: Point,
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'lineColor',
		'stroke-width': 'lineWidth',
		fill: 'fillColor',
		r: 'radius'
	},
	init: function(chart, options) {
		var series = this,
			eventType,
			events,
			//pointEvent,
			index = chart.series.length;

		series.chart = chart;
		options = series.setOptions(options); // merge with plotOptions

		// set some variables
		extend(series, {
			index: index,
			options: options,
			name: options.name || 'Series '+ (index + 1),
			state: NORMAL_STATE,
			pointAttr: {},
			visible: options.visible !== false, // true by default
			selected: options.selected === true // false by default
		});

		// register event listeners
		events = options.events;
		for (eventType in events) {
			addEvent(series, eventType, events[eventType]);
		}
		if (
			(events && events.click) ||
			(options.point && options.point.events && options.point.events.click) ||
			options.allowPointSelect
		) {
			chart.runTrackerClick = true;
		}

		series.getColor();
		series.getSymbol();


		// set the data
		series.setData(options.data, false);

	},


	/**
	 * Return an auto incremented x value based on the pointStart and pointInterval options.
	 * This is only used if an x value is not given for the point that calls autoIncrement.
	 */
	autoIncrement: function() {
		var series = this,
			options = series.options,
			xIncrement = series.xIncrement;

		xIncrement = pick(xIncrement, options.pointStart, 0);

		series.pointInterval = pick(series.pointInterval, options.pointInterval, 1);

		series.xIncrement = xIncrement + series.pointInterval;
		return xIncrement;
	},

	/**
	 * Divide the series data into segments divided by null values.
	 */
	getSegments: function() {
		var lastNull = -1,
			segments = [],
			points = this.points;

		var start = + new Date();

		// create the segments
		each(points, function(point, i) {
			if (point.y === null) {
				if (i > lastNull + 1) {
					segments.push(points.slice(lastNull + 1, i));
				}
				lastNull = i;
			} else if (i === points.length - 1) { // last value
				segments.push(points.slice(lastNull + 1, i + 1));
			}
		});
		this.segments = segments;


	},
	/**
	 * Set the series options by merging from the options tree
	 * @param {Object} itemOptions
	 */
	setOptions: function(itemOptions) {
		var plotOptions = this.chart.options.plotOptions,
			data = itemOptions.data,
			options;

		itemOptions.data = null; // remove from merge to prevent looping over the data set

		options = merge(
			plotOptions[this.type],
			plotOptions.series,
			itemOptions
		);
		options.data = data;

		return options;

	},
	/**
	 * Get the series' color
	 */
	getColor: function(){
		var defaultColors = this.chart.options.colors,
			counters = this.chart.counters;
		this.color = this.options.color || defaultColors[counters.color++] || '#0000ff';
		counters.wrapColor(defaultColors.length);
	},
	/**
	 * Get the series' symbol
	 */
	getSymbol: function(){
		var defaultSymbols = this.chart.options.symbols,
			counters = this.chart.counters;
		this.symbol = this.options.marker.symbol || defaultSymbols[counters.symbol++];
		counters.wrapSymbol(defaultSymbols.length);
	},

	/**
	 * Add a point dynamically after chart load time
	 * @param {Object} options Point options as given in series.data
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean} shift If shift is true, a point is shifted off the start
	 *    of the series as one is appended to the end.
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */
	addPoint: function(options, redraw, shift, animation) {
		var series = this,
			data = series.data,
			graph = series.graph,
			area = series.area,
			chart = series.chart,
			xData = series.xData,
			yData = series.yData,
			currentShift = graph.shift || 0,
			dataOptions = series.options.data,
			point;
			//point = (new series.pointClass()).init(series, options);

		setAnimation(animation, chart);

		if (graph && shift) { // make graph animate sideways
			graph.shift = currentShift + 1;
		}
		if (area) {
			area.shift = currentShift + 1;
			area.isArea = true;
		}
		redraw = pick(redraw, true);


		// Get options and push the point to xData, yData and series.options. In series.generatePoints
		// the Point instance will be created on demand and pushed to the series.data array.
		point = { series: series };
		series.pointClass.prototype.applyOptions.apply(point, [options]);
		xData.push(point.x);
		yData.push(point.y);
		dataOptions.push(options);


		// Shift the first point off the parallel arrays
		// todo: consider series.removePoint(i) method
		if (shift) {
			if (data[0]) {
				data[0].remove(false);
			} else {
				data.shift();
				xData.shift();
				yData.shift();
				dataOptions.shift();
			}
		}
		series.getAttribs();

		// redraw
		series.isDirty = true;
		series.isDirtyData = true;
		if (redraw) {
			chart.redraw();
		}
	},

	/**
	 * Replace the series data with a new set of data
	 * @param {Object} data
	 * @param {Object} redraw
	 */
	setData: function(data, redraw) {
		var series = this,
			oldData = series.points,
			options = series.options,
			initialColor = series.initialColor,
			chart = series.chart,
			i;

		series.xIncrement = null; // reset for new data
		if (defined(initialColor)) { // reset colors for pie
			chart.counters.color = initialColor;
		}

		// parallel arrays
		var xData = [],
			yData = [],
			dataLength = data.length,
			turboThreshold = options.turboThreshold || 1000,
			pt;

		// In turbo mode, only one- or twodimensional arrays of numbers are allowed. The
		// first value is tested, and we assume that all the rest are defined the same
		// way. Although the 'for' loops are similar, they are repeated inside each
		// if-else conditional for max performance.
		if (dataLength > turboThreshold) {
			if (isNumber(data[0])) { // assume all points are numbers
				var x = pick(options.pointStart, 0),
					pointInterval = pick(options.pointInterval, 1);

				for (i = 0; i < dataLength; i++) {
					xData[i] = x;
					yData[i] = data[i];
					x += pointInterval;
				}
				series.xIncrement = x;
			} else if (data[0].constructor === Array) { // assume all points are arrays
				if (series.valueCount === 4) { // [x, o, h, l, c]
					for (i = 0; i < dataLength; i++) {
						pt = data[i];
						xData[i] = pt[0];
						yData[i] = pt.slice(1, 5);
					}
				} else { // [x, y]
					for (i = 0; i < dataLength; i++) {
						pt = data[i];
						xData[i] = pt[0];
						yData[i] = pt[1];
					}
				}
			}
		} else {
			for (i = 0; i < dataLength; i++) {
				pt = { series: series };
				series.pointClass.prototype.applyOptions.apply(pt, [data[i]]);
				xData[i] = pt.x;
				yData[i] = pt.y;
			}
		}

		series.data = null;
		series.options.data = data;
		series.xData = xData;
		series.yData = yData;


		// destroy old points
		i = (oldData && oldData.length) || 0;
		while (i--) {
			oldData[i].destroy();
		}

		// redraw
		series.isDirty = series.isDirtyData = chart.isDirtyBox = true;
		if (pick(redraw, true)) {
			chart.redraw(false);
		}
	},

	/**
	 * Remove a series and optionally redraw the chart
	 *
	 * @param {Boolean} redraw Whether to redraw the chart or wait for an explicit call
	 * @param {Boolean|Object} animation Whether to apply animation, and optionally animation
	 *    configuration
	 */

	remove: function(redraw, animation) {
		var series = this,
			chart = series.chart;
		redraw = pick(redraw, true);

		if (!series.isRemoving) {  /* prevent triggering native event in jQuery
				(calling the remove function from the remove event) */
			series.isRemoving = true;

			// fire the event with a default handler of removing the point
			fireEvent(series, 'remove', null, function() {


				// destroy elements
				series.destroy();


				// redraw
				chart.isDirtyLegend = chart.isDirtyBox = true;
				if (redraw) {
					chart.redraw(animation);
				}
			});

		}
		series.isRemoving = false;
	},

	/**
	 * Process the data by cropping away unused data points if the series is longer
	 * than the crop threshold. This saves computing time for lage series.
	 */
	processData: function() {
		var series = this,
			processedXData = series.xData, // copied during slice operation below
			processedYData = series.yData,
			dataLength = processedXData.length,
			cropStart = 0,
			i, // loop variable
			cropThreshold = series.options.cropThreshold; // todo: consider combining it with turboThreshold


		// optionally filter out points outside the plot area
		if (!cropThreshold || dataLength > cropThreshold) {
			var extremes = series.xAxis.getExtremes(),
				min = extremes.min,
				max = extremes.max,
				cropEnd = dataLength - 1,
				point;

			// only crop if it's actually spilling out
			if (processedXData[0] < min || processedXData[cropEnd] > max) {

				// iterate up to find slice start
				for (i = 0; i < dataLength; i++) {
					if (processedXData[i] >= min) {
						cropStart = mathMax(0, i - 1);
						break;
					}
				}
				// proceed to find slice end
				for (i; i < dataLength; i++) {
					if (processedXData[i] > max) {
						cropEnd = i + 1;
						break;
					}
				}
				processedXData = processedXData.slice(cropStart, cropEnd);
				processedYData = processedYData.slice(cropStart, cropEnd);
			}
		}

		series.cropStart = cropStart;
		series.processedXData = processedXData;
		series.processedYData = processedYData;
	},

	/**
	 * Generate the data point after the data has been processed by cropping away
	 * unused points and optionally grouped in Highcharts Stock.
	 */
	generatePoints: function() {
		var series = this,
			options = series.options,
			dataOptions = options.data,
			hasProcessedData = series.prosessedXData !== series.xData,
			data = series.data,
			dataLength,
			processedXData = series.processedXData,
			processedYData = series.processedYData,
			pointClass = series.pointClass,
			processedDataLength = processedXData.length,
			cropStart = series.cropStart || 0,
			cursor,
			hasGroupedData = series.hasGroupedData,
			point,
			points = [],
			i;

		if (!data && !hasGroupedData) {
			var arr = [];
			arr.length = dataOptions.length;
			data = series.data = arr;
		}

		for (i = 0; i < processedDataLength; i++) {
			cursor = cropStart + i;
			if (!hasGroupedData) {
				if (data[cursor]) {
					point = data[cursor];
				} else {
					data[cursor] = point = (new pointClass()).init(series, dataOptions[cursor], processedXData[i]);
				}
				points[i] = point;
			} else {
				// splat the y data in case of ohlc data array
				points[i] = (new pointClass()).init(series, [processedXData[i]].concat(splat(processedYData[i])));
			}
		}

		// hide cropped-away points - this only runs when the number of points is above cropThreshold
		if (data && processedDataLength !== (dataLength = data.length)) {
			for (i = 0; i < dataLength; i++) {
				if (i === cropStart && !hasGroupedData) { // when has grouped data, clear all points
					i += processedDataLength;
				}
				if (data[i]) {
					data[i].destroyElements();
				}
			}
		}

		series.data = data;
		series.points = points;
	},

	/**
	 * Translate data points from raw data values to chart specific positioning data
	 * needed later in drawPoints, drawGraph and drawTracker.
	 */
	translate: function() {
		if (!this.processedXData) { // hidden series
			this.processData();
		}
		this.generatePoints();
		var series = this,
			chart = series.chart,
			options = series.options,
			stacking = options.stacking,
			xAxis = series.xAxis,
			categories = xAxis.categories,
			yAxis = series.yAxis,
			points = series.points,
			//data = series.data,
			//dataLength = data.length,
			//point,
			//xData = series.processedXData || series.xData,
			//yData = series.processedYData || series.yData,
			dataLength = points.length,
			//closestPoints,
			//smallestInterval,
			leastDistance = xAxis.leastDistance,
			interval,
			i,
			cropI = -1;


		for (i = 0; i < dataLength; i++) {
			var point = points[i],
				xValue = point.x,
				yValue = point.y,
				yBottom = point.low,
				stack = yAxis.stacks[(yValue < 0 ? '-' : '') + series.stackKey],
				pointStack,
				distance,
				pointStackTotal;
			// get the plotX translation
			point.plotX = series.xAxis.translate(xValue);

			// calculate the bottom y value for stacked series
			if (stacking && series.visible && stack && stack[xValue]) {
				pointStack = stack[xValue];
				pointStackTotal = pointStack.total;
				pointStack.cum = yBottom = pointStack.cum - yValue; // start from top
				yValue = yBottom + yValue;

				if (stacking === 'percent') {
					yBottom = pointStackTotal ? yBottom * 100 / pointStackTotal : 0;
					yValue = pointStackTotal ? yValue * 100 / pointStackTotal : 0;
				}

				point.percentage = pointStackTotal ? point.y * 100 / pointStackTotal : 0;
				point.stackTotal = pointStackTotal;
			}

			if (defined(yBottom)) {
				point.yBottom = yAxis.translate(yBottom, 0, 1, 0, 1);
			}

			// set the y value
			if (yValue !== null) {
				point.plotY = yAxis.translate(yValue, 0, 1, 0, 1);
			}

			// set client related positions for mouse tracking
			point.clientX = chart.inverted ?
				chart.plotHeight - point.plotX :
				point.plotX; // for mouse tracking

			// some API data
			point.category = categories && categories[point.x] !== UNDEFINED ?
				categories[point.x] : point.x;

			// get the smallest distance between points for columns
			if (series.getDistance && i) {
				distance = mathAbs(point.plotX - points[i - 1].plotX);
				leastDistance = leastDistance === UNDEFINED ? distance : mathMin(distance, leastDistance);
			}

		}

		xAxis.leastDistance = leastDistance;

		// now that we have the cropped data, build the segments
		series.getSegments();
	},
	/**
	 * Memoize tooltip texts and positions
	 */
	setTooltipPoints: function (renew) {
		var series = this,
			chart = series.chart,
			inverted = chart.inverted,
			points = [],
			pointsLength,
			plotSize = mathRound((inverted ? chart.plotTop : chart.plotLeft) + chart.plotSizeX),
			low,
			high,
			xAxis = series.xAxis,
			point,
			i,
			tooltipPoints = []; // a lookup array for each pixel in the x dimension

		// renew
		if (renew) {
			series.tooltipPoints = null;
		}

		// concat segments to overcome null values
		each(series.segments || series.points, function(segment){
			points = points.concat(segment);
		});

		// loop the concatenated points and apply each point to all the closest
		// pixel positions
		if (xAxis && xAxis.reversed) {
			points = points.reverse();//reverseArray(points);
		}

		//each(points, function(point, i) {
		pointsLength = points.length;
		for (i = 0; i < pointsLength; i++) {
			point = points[i];
			low = points[i - 1] ? points[i - 1]._high + 1 : 0;
			high = point._high = points[i + 1] ? (
				mathFloor((point.plotX + (points[i + 1] ?
					points[i + 1].plotX : plotSize)) / 2)) :
					plotSize;

			while (low <= high) {
				tooltipPoints[inverted ? plotSize - low++ : low++] = point;
			}
		}
		series.tooltipPoints = tooltipPoints;
	},




	/**
	 * Series mouse over handler
	 */
	onMouseOver: function() {
		var series = this,
			chart = series.chart,
			hoverSeries = chart.hoverSeries;

		if (!hasTouch && chart.mouseIsDown) {
			return;
		}

		// set normal state to previous series
		if (hoverSeries && hoverSeries !== series) {
			hoverSeries.onMouseOut();
		}

		// trigger the event, but to save processing time,
		// only if defined
		if (series.options.events.mouseOver) {
			fireEvent(series, 'mouseOver');
		}

		// hover this
		series.setState(HOVER_STATE);
		chart.hoverSeries = series;
	},

	/**
	 * Series mouse out handler
	 */
	onMouseOut: function() {
		// trigger the event only if listeners exist
		var series = this,
			options = series.options,
			chart = series.chart,
			tooltip = chart.tooltip,
			hoverPoint = chart.hoverPoint;

		// trigger mouse out on the point, which must be in this series
		if (hoverPoint) {
			hoverPoint.onMouseOut();
		}

		// fire the mouse out event
		if (series && options.events.mouseOut) {
			fireEvent(series, 'mouseOut');
		}


		// hide the tooltip
		if (tooltip && !options.stickyTracking) {
			tooltip.hide();
		}

		// set normal state
		series.setState();
		chart.hoverSeries = null;
	},

	/**
	 * Animate in the series
	 */
	animate: function(init) {
		var series = this,
			chart = series.chart,
			clipRect = series.clipRect,
			animation = series.options.animation;

		if (animation && !isObject(animation)) {
			animation = {};
		}

		if (init) { // initialize the animation
			if (!clipRect.isAnimating) { // apply it only for one of the series
				clipRect.attr( 'width', 0 );
				clipRect.isAnimating = true;
			}

		} else { // run the animation
			clipRect.animate({
				width: chart.plotSizeX
			}, animation);

			// delete this function to allow it only once
			this.animate = null;
		}
	},


	/**
	 * Draw the markers
	 */
	drawPoints: function(){
		var series = this,
			pointAttr,
			points = series.points,
			chart = series.chart,
			plotX,
			plotY,
			i,
			point,
			radius,
			graphic;

		if (series.options.marker.enabled) {
			i = points.length;
			while (i--) {
				point = points[i];
				plotX = point.plotX;
				plotY = point.plotY;
				graphic = point.graphic;

				// only draw the point if y is defined
				if (plotY !== UNDEFINED && !isNaN(plotY)) {

					// shortcuts
					pointAttr = point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE];
					radius = pointAttr.r;

					if (graphic) { // update
						graphic.animate({
							x: plotX - radius,
							y: plotY - radius,
							width: 2 * radius,
							height: 2 * radius
						});
					} else {
						point.graphic = chart.renderer.symbol(
							pick(point.marker && point.marker.symbol, series.symbol),
							plotX - radius,
							plotY - radius,
							2 * radius,
							2 * radius
						)
						.attr(pointAttr)
						.add(series.group);
					}
				}
			}
		}

	},

	/**
	 * Convert state properties from API naming conventions to SVG attributes
	 *
	 * @param {Object} options API options object
	 * @param {Object} base1 SVG attribute object to inherit from
	 * @param {Object} base2 Second level SVG attribute object to inherit from
	 */
	convertAttribs: function(options, base1, base2, base3) {
		var conversion = this.pointAttrToOptions,
			attr,
			option,
			obj = {};

		options = options || {};
		base1 = base1 || {};
		base2 = base2 || {};
		base3 = base3 || {};

		for (attr in conversion) {
			option = conversion[attr];
			obj[attr] = pick(options[option], base1[attr], base2[attr], base3[attr]);
		}
		return obj;
	},

	/**
	 * Get the state attributes. Each series type has its own set of attributes
	 * that are allowed to change on a point's state change. Series wide attributes are stored for
	 * all series, and additionally point specific attributes are stored for all
	 * points with individual marker options. If such options are not defined for the point,
	 * a reference to the series wide attributes is stored in point.pointAttr.
	 */
	getAttribs: function() {
		var series = this,
			normalOptions = defaultPlotOptions[series.type].marker ? series.options.marker : series.options,
			stateOptions = normalOptions.states,
			stateOptionsHover = stateOptions[HOVER_STATE],
			pointStateOptionsHover,
			seriesColor = series.color,
			normalDefaults = {
				stroke: seriesColor,
				fill: seriesColor
			},
			points = series.points,
			i,
			point,
			seriesPointAttr = [],
			pointAttr,
			pointAttrToOptions = series.pointAttrToOptions,
			hasPointSpecificOptions,
			key;

		// series type specific modifications
		if (series.options.marker) { // line, spline, area, areaspline, scatter

			// if no hover radius is given, default to normal radius + 2
			stateOptionsHover.radius = stateOptionsHover.radius || normalOptions.radius + 2;
			stateOptionsHover.lineWidth = stateOptionsHover.lineWidth || normalOptions.lineWidth + 1;

		} else { // column, bar, pie

			// if no hover color is given, brighten the normal color
			stateOptionsHover.color = stateOptionsHover.color ||
				Color(stateOptionsHover.color || seriesColor)
					.brighten(stateOptionsHover.brightness).get();
		}

		// general point attributes for the series normal state
		seriesPointAttr[NORMAL_STATE] = series.convertAttribs(normalOptions, normalDefaults);

		// HOVER_STATE and SELECT_STATE states inherit from normal state except the default radius
		each([HOVER_STATE, SELECT_STATE], function(state) {
			seriesPointAttr[state] =
					series.convertAttribs(stateOptions[state], seriesPointAttr[NORMAL_STATE]);
		});

		// set it
		series.pointAttr = seriesPointAttr;


		// Generate the point-specific attribute collections if specific point
		// options are given. If not, create a referance to the series wide point
		// attributes
		i = points.length;
		while (i--) {
			point = points[i];
			normalOptions = (point.options && point.options.marker) || point.options;
			if (normalOptions && normalOptions.enabled === false) {
				normalOptions.radius = 0;
			}
			hasPointSpecificOptions = false;

			// check if the point has specific visual options
			if (point.options) {
				for (key in pointAttrToOptions) {
					if (defined(normalOptions[pointAttrToOptions[key]])) {
						hasPointSpecificOptions = true;
					}
				}
			}



			// a specific marker config object is defined for the individual point:
			// create it's own attribute collection
			if (hasPointSpecificOptions) {

				pointAttr = [];
				stateOptions = normalOptions.states || {}; // reassign for individual point
				pointStateOptionsHover = stateOptions[HOVER_STATE] = stateOptions[HOVER_STATE] || {};

				// if no hover color is given, brighten the normal color
				if (!series.options.marker) { // column, bar, point
					pointStateOptionsHover.color =
						Color(pointStateOptionsHover.color || point.options.color)
							.brighten(pointStateOptionsHover.brightness ||
								stateOptionsHover.brightness).get();

				}

				// normal point state inherits series wide normal state
				pointAttr[NORMAL_STATE] = series.convertAttribs(normalOptions, seriesPointAttr[NORMAL_STATE]);

				// inherit from point normal and series hover
				pointAttr[HOVER_STATE] = series.convertAttribs(
					stateOptions[HOVER_STATE],
					seriesPointAttr[HOVER_STATE],
					pointAttr[NORMAL_STATE]
				);
				// inherit from point normal and series hover
				pointAttr[SELECT_STATE] = series.convertAttribs(
					stateOptions[SELECT_STATE],
					seriesPointAttr[SELECT_STATE],
					pointAttr[NORMAL_STATE]
				);



			// no marker config object is created: copy a reference to the series-wide
			// attribute collection
			} else {
				pointAttr = seriesPointAttr;
			}

			point.pointAttr = pointAttr;

		}

	},


	/**
	 * Clear DOM objects and free up memory
	 */
	destroy: function() {
		var series = this,
			chart = series.chart,
			//chartSeries = series.chart.series,
			clipRect = series.clipRect,
			issue134 = /\/5[0-9\.]+ (Safari|Mobile)\//.test(userAgent), // todo: update when Safari bug is fixed
			destroy,
			i,
			data = series.data || [],
			point,
			prop;

		// remove all events
		removeEvent(series);

		// remove legend items
		if (series.legendItem) {
			series.chart.legend.destroyItem(series);
		}

		// destroy all points with their elements
		i = data.length;
		while(i--) {
			point = data[i];
			if (point && point.destroy) {
				point.destroy();
			}
		}
		series.points = null;

		// destroy all SVGElements associated to the series
		each(['area', 'graph', 'dataLabelsGroup', 'group', 'tracker'], function(prop) {
			if (series[prop]) {

				// issue 134 workaround
				destroy = issue134 && prop === 'group' ?
					'hide' :
					'destroy';

				series[prop][destroy]();
			}
		});

		// remove from hoverSeries
		if (chart.hoverSeries === series) {
			chart.hoverSeries = null;
		}
		erase(chart.series, series);

		// clear all members
		for (prop in series) {
			delete series[prop];
		}
	},

	/**
	 * Draw the data labels
	 */
	drawDataLabels: function() {
		if (this.options.dataLabels.enabled) {
			var series = this,
				x,
				y,
				points = series.points,
				options = series.options.dataLabels,
				str,
				dataLabelsGroup = series.dataLabelsGroup,
				chart = series.chart,
				inverted = chart.inverted,
				seriesType = series.type,
				color,
				stacking = series.options.stacking,
				isBarLike = seriesType === 'column' || seriesType === 'bar',
				vAlignIsNull = options.verticalAlign === null,
				yIsNull = options.y === null;

			if (isBarLike) {
				if (stacking) {
					// In stacked series the default label placement is inside the bars
					if (vAlignIsNull) {
						options = merge(options, {verticalAlign: 'middle'});
					}

					// If no y delta is specified, try to create a good default
					if (yIsNull) {
						options = merge(options, {y: {top: 14, middle: 4, bottom: -6}[options.verticalAlign]});
					}
				} else {
					// In non stacked series the default label placement is on top of the bars
					if (vAlignIsNull) {
						options = merge(options, {verticalAlign: 'top'});
					}

					// If no y delta is specified, set the default
					if (yIsNull) {
						options = merge(options, {y: -6});
					}
				}
			}


			// create a separate group for the data labels to avoid rotation
			if (!dataLabelsGroup) {
				dataLabelsGroup = series.dataLabelsGroup =
					chart.renderer.g('data-labels')
						.attr({
							visibility: series.visible ? VISIBLE : HIDDEN,
							zIndex: 6
						})
						.translate(chart.plotLeft, chart.plotTop)
						.add();
			}

			// determine the color
			color = options.color;
			if (color === 'auto') { // 1.0 backwards compatibility
				color = null;
			}
			options.style.color = pick(color, series.color);

			// make the labels for each point
			each(points, function(point, i){
				var barX = point.barX,
					plotX = (barX && barX + point.barW / 2) || point.plotX || -999,
					plotY = pick(point.plotY, -999),
					dataLabel = point.dataLabel,
					align = options.align,
					individualYDelta = yIsNull ? (point.y > 0 ? -6 : 12) : options.y;

				// get the string
				str = options.formatter.call(point.getLabelConfig());
				x = (inverted ? chart.plotWidth - plotY : plotX) + options.x;
				y = (inverted ? chart.plotHeight - plotX : plotY) + individualYDelta;
				
				// in columns, align the string to the column
				if (seriesType === 'column') {
					x += { left: -1, right: 1 }[align] * point.barW / 2 || 0;
				}


				// update existing label
				if (dataLabel) {
					// vertically centered
					if (inverted && !options.y) {
						y = y + pInt(dataLabel.styles.lineHeight) * 0.9 - dataLabel.getBBox().height / 2;
					}
					dataLabel
						.attr({
							text: str
						}).animate({
							x: x,
							y: y
						});
				// create new label
				} else if (defined(str)) {
					dataLabel = point.dataLabel = chart.renderer.text(
						str,
						x,
						y
					)
					.attr({
						align: align,
						rotation: options.rotation,
						zIndex: 1
					})
					.css(options.style)
					.add(dataLabelsGroup);
					// vertically centered
					if (inverted && !options.y) {
						dataLabel.attr({
							y: y + pInt(dataLabel.styles.lineHeight) * 0.9 - dataLabel.getBBox().height / 2
						});
					}
				}

				if (isBarLike && series.options.stacking) {
					var barY = point.barY,
						barW = point.barW,
						barH = point.barH;

					dataLabel.align(options, null,
						{
							x: inverted ? chart.plotWidth - barY - barH : barX,
							y: inverted ? chart.plotHeight - barX - barW : barY,
							width: inverted ? barH : barW,
							height: inverted ? barW : barH
						});
				}
			});
		}
	},

	/**
	 * Draw the actual graph
	 */
	drawGraph: function(state) {
		var series = this,
			options = series.options,
			chart = series.chart,
			plotLeft = chart.plotLeft,
			plotRight = plotLeft + chart.plotWidth,
			graph = series.graph,
			graphPath = [],
			fillColor,
			area = series.area,
			group = series.group,
			color = options.lineColor || series.color,
			lineWidth = options.lineWidth,
			dashStyle =  options.dashStyle,
			segmentPath,
			renderer = chart.renderer,
			translatedThreshold = series.yAxis.getThreshold(options.threshold),
			useArea = /^area/.test(series.type),
			singlePoints = [], // used in drawTracker
			areaPath = [],
			attribs;


		// divide into segments and build graph and area paths
		each(series.segments, function(segment) {
			segmentPath = [];

			// build the segment line
			each(segment, function(point, i) {

				if (series.getPointSpline) { // generate the spline as defined in the SplineSeries object
					segmentPath.push.apply(segmentPath, series.getPointSpline(segment, point, i));

				} else {

					// moveTo or lineTo
					segmentPath.push(i ? L : M);

					// step line?
					if (i && options.step) {
						var lastPoint = segment[i - 1];
						segmentPath.push(
							point.plotX,
							lastPoint.plotY
						);
					}

					// normal line to next point
					segmentPath.push(
						point.plotX,
						point.plotY
					);
				}
			});

			// add the segment to the graph, or a single point for tracking
			if (segment.length > 1) {
				graphPath = graphPath.concat(segmentPath);
			} else {
				singlePoints.push(segment[0]);
			}

			// build the area
			if (useArea) {
				var areaSegmentPath = [],
					i,
					segLength = segmentPath.length;
				for (i = 0; i < segLength; i++) {
					areaSegmentPath.push(segmentPath[i]);
				}
				if (segLength === 3) { // for animation from 1 to two points
					areaSegmentPath.push(L, segmentPath[1], segmentPath[2]);
				}
				if (options.stacking && series.type !== 'areaspline') {
					// follow stack back. Todo: implement areaspline
					for (i = segment.length - 1; i >= 0; i--) {
						areaSegmentPath.push(segment[i].plotX, segment[i].yBottom);
					}

				} else { // follow zero line back
					areaSegmentPath.push(
						L,
						segment[segment.length - 1].plotX,
						translatedThreshold,
						L,
						segment[0].plotX,
						translatedThreshold
					);
				}
				areaPath = areaPath.concat(areaSegmentPath);
			}
		});

		// used in drawTracker:
		series.graphPath = graphPath;
		series.singlePoints = singlePoints;

		// draw the area if area series or areaspline
		if (useArea) {
			fillColor = pick(
				options.fillColor,
				Color(series.color).setOpacity(options.fillOpacity || 0.75).get()
			);
			if (area) {
				area.animate({ d: areaPath });

			} else {
				// draw the area
				series.area = series.chart.renderer.path(areaPath)
					.attr({
						fill: fillColor
					}).add(group);
			}
		}

		// draw the graph
		if (graph) {
			//graph.animate({ d: graphPath.join(' ') });
			graph.animate({ d: graphPath });

		} else {
			if (lineWidth) {
				attribs = {
					'stroke': color,
					'stroke-width': lineWidth
				};
				if (dashStyle) {
					attribs.dashstyle = dashStyle;
				}

				series.graph = renderer.path(graphPath)
					.attr(attribs).add(group).shadow(options.shadow);
			}
		}
	},


	/**
	 * Render the graph and markers
	 */
	render: function() {
		var series = this,
			chart = series.chart,
			group,
			setInvert,
			options = series.options,
			doClip = options.clip !== false,
			animation = options.animation,
			doAnimation = animation && series.animate,
			duration = doAnimation ? (animation && animation.duration) || 500 : 0,
			clipRect = series.clipRect,
			renderer = chart.renderer;


		// Add plot area clipping rectangle. If this is before chart.hasRendered,
		// create one shared clipRect.

		// Todo: since creating the clip property, the clipRect is created but
		// never used when clip is false. A better way would be that the animation
		// would run, then the clipRect destroyed.
		if (!clipRect) {
			clipRect = series.clipRect = !chart.hasRendered && chart.clipRect ?
				chart.clipRect :
				renderer.clipRect(0, 0, chart.plotSizeX, chart.plotSizeY);
			if (!chart.clipRect) {
				chart.clipRect = clipRect;
			}
		}


		// the group
		if (!series.group) {
			group = series.group = renderer.g('series');

			if (chart.inverted) {
				setInvert = function() {
					group.attr({
						width: chart.plotWidth,
						height: chart.plotHeight
					}).invert();
				};

				setInvert(); // do it now
				addEvent(chart, 'resize', setInvert); // do it on resize
			}

			if (doClip) {
				group.clip(series.clipRect);
			}
			group.attr({
					visibility: series.visible ? VISIBLE : HIDDEN,
					zIndex: options.zIndex
				})
				.translate(series.xAxis.left, series.yAxis.top)
				.add(chart.seriesGroup);
		}

		series.drawDataLabels();

		// initiate the animation
		if (doAnimation) {
			series.animate(true);
		}

		// cache attributes for shapes
		series.getAttribs();

		// draw the graph if any
		if (series.drawGraph) {
			series.drawGraph();
		}

		// draw the points
		series.drawPoints();

		// draw the mouse tracking area
		if (series.options.enableMouseTracking !== false) {
			series.drawTracker();
		}

		// run the animation
		if (doAnimation) {
			series.animate();
		}

		// finish the individual clipRect
		setTimeout(function() {
			clipRect.isAnimating = false;
			group = series.group; // can be destroyed during the timeout
			if (group && clipRect !== chart.clipRect && clipRect.renderer) {
				if (doClip) {
					group.clip((series.clipRect = chart.clipRect));
				}
				clipRect.destroy();
			}
		}, duration);


		series.isDirty = series.isDirtyData = false; // means data is in accordance with what you see

	},

	/**
	 * Redraw the series after an update in the axes.
	 */
	redraw: function() {
		var series = this,
			chart = series.chart,
			clipRect = series.clipRect,
			group = series.group;

		// reposition on resize
		if (group) {
			if (chart.inverted) {
				group.attr({
					width: chart.plotWidth,
					height: chart.plotHeight
				});
			}

			group.animate({
				translateX: series.xAxis.left,
				translateY: series.yAxis.top
			});
		}

		series.translate();
		series.setTooltipPoints(true);

		if (series.isDirtyData) {
			fireEvent(series, 'updatedData');
		}
		series.render();
	},

	/**
	 * Set the state of the graph
	 */
	setState: function(state) {
		var series = this,
			options = series.options,
			graph = series.graph,
			stateOptions = options.states,
			lineWidth = options.lineWidth;

		state = state || NORMAL_STATE;

		if (series.state !== state) {
			series.state = state;

			if (stateOptions[state] && stateOptions[state].enabled === false) {
				return;
			}

			if (state) {
				lineWidth = stateOptions[state].lineWidth || lineWidth + 1;
			}

			if (graph && !graph.dashstyle) { // hover is turned off for dashed lines in VML
				graph.attr({ // use attr because animate will cause any other animation on the graph to stop
					'stroke-width': lineWidth
				}, state ? 0 : 500);
			}
		}
	},

	/**
	 * Set the visibility of the graph
	 *
	 * @param vis {Boolean} True to show the series, false to hide. If UNDEFINED,
	 *        the visibility is toggled.
	 */
	setVisible: function(vis, redraw) {
		var series = this,
			chart = series.chart,
			legendItem = series.legendItem,
			seriesGroup = series.group,
			seriesTracker = series.tracker,
			dataLabelsGroup = series.dataLabelsGroup,
			showOrHide,
			i,
			points = series.points,
			point,
			ignoreHiddenSeries = chart.options.chart.ignoreHiddenSeries,
			oldVisibility = series.visible;

		// if called without an argument, toggle visibility
		series.visible = vis = vis === UNDEFINED ? !oldVisibility : vis;
		showOrHide = vis ? 'show' : 'hide';

		// show or hide series
		if (seriesGroup) { // pies don't have one
			seriesGroup[showOrHide]();
		}

		// show or hide trackers
		if (seriesTracker) {
			seriesTracker[showOrHide]();
		} else {
			i = points.length;
			while (i--) {
				point = points[i];
				if (point.tracker) {
					point.tracker[showOrHide]();
				}
			}
		}


		if (dataLabelsGroup) {
			dataLabelsGroup[showOrHide]();
		}

		if (legendItem) {
			chart.legend.colorizeItem(series, vis);
		}


		// rescale or adapt to resized chart
		series.isDirty = true;
		// in a stack, all other series are affected
		if (series.options.stacking) {
			each(chart.series, function(otherSeries) {
				if (otherSeries.options.stacking && otherSeries.visible) {
					otherSeries.isDirty = true;
				}
			});
		}

		if (ignoreHiddenSeries) {
			chart.isDirtyBox = true;
		}
		if (redraw !== false) {
			chart.redraw();
		}

		fireEvent(series, showOrHide);
	},

	/**
	 * Show the graph
	 */
	show: function() {
		this.setVisible(true);
	},

	/**
	 * Hide the graph
	 */
	hide: function() {
		this.setVisible(false);
	},


	/**
	 * Set the selected state of the graph
	 *
	 * @param selected {Boolean} True to select the series, false to unselect. If
	 *        UNDEFINED, the selection state is toggled.
	 */
	select: function(selected) {
		var series = this;
		// if called without an argument, toggle
		series.selected = selected = (selected === UNDEFINED) ? !series.selected : selected;

		if (series.checkbox) {
			series.checkbox.checked = selected;
		}

		fireEvent(series, selected ? 'select' : 'unselect');
	},


	/**
	 * Draw the tracker object that sits above all data labels and markers to
	 * track mouse events on the graph or points. For the line type charts
	 * the tracker uses the same graphPath, but with a greater stroke width
	 * for better control.
	 */
	drawTracker: function() {
		var series = this,
			options = series.options,
			trackerPath = [].concat(series.graphPath),
			trackerPathLength = trackerPath.length,
			chart = series.chart,
			snap = chart.options.tooltip.snap,
			tracker = series.tracker,
			cursor = options.cursor,
			css = cursor && { cursor: cursor },
			singlePoints = series.singlePoints,
			singlePoint,
			i;

		// Extend end points. A better way would be to use round linecaps,
		// but those are not clickable in VML.
		if (trackerPathLength) {
			i = trackerPathLength + 1;
			while (i--) {
				if (trackerPath[i] === M) { // extend left side
					trackerPath.splice(i + 1, 0, trackerPath[i + 1] - snap, trackerPath[i + 2], L);
				}
				if ((i && trackerPath[i] === M) || i === trackerPathLength) { // extend right side
					trackerPath.splice(i, 0, L, trackerPath[i - 2] + snap, trackerPath[i - 1]);
				}
			}
		}

		// handle single points
		for (i = 0; i < singlePoints.length; i++) {
			singlePoint = singlePoints[i];
			trackerPath.push(M, singlePoint.plotX - snap, singlePoint.plotY,
				L, singlePoint.plotX + snap, singlePoint.plotY);
		}

		// draw the tracker
		if (tracker) {
			tracker.attr({ d: trackerPath });

		} else { // create
			series.tracker = chart.renderer.path(trackerPath)
				.attr({
					isTracker: true,
					stroke: TRACKER_FILL,
					fill: NONE,
					'stroke-width' : options.lineWidth + 2 * snap,
					visibility: series.visible ? VISIBLE : HIDDEN,
					zIndex: 1
				})
				.on(hasTouch ? 'touchstart' : 'mouseover', function() {
					if (chart.hoverSeries !== series) {
						series.onMouseOver();
					}
				})
				.on('mouseout', function() {
					if (!options.stickyTracking) {
						series.onMouseOut();
					}
				})
				.css(css)
				.add(chart.trackerGroup);
		}

	}

}; // end Series prototype


/**
 * LineSeries object
 */
var LineSeries = extendClass(Series);
seriesTypes.line = LineSeries;

/**
 * AreaSeries object
 */
var AreaSeries = extendClass(Series, {
	type: 'area',
	useThreshold: true
});
seriesTypes.area = AreaSeries;




/**
 * SplineSeries object
 */
var SplineSeries = extendClass( Series, {
	type: 'spline',

	/**
	 * Draw the actual graph
	 */
	getPointSpline: function(segment, point, i) {
		var smoothing = 1.5, // 1 means control points midway between points, 2 means 1/3 from the point, 3 is 1/4 etc
			denom = smoothing + 1,
			plotX = point.plotX,
			plotY = point.plotY,
			lastPoint = segment[i - 1],
			nextPoint = segment[i + 1],
			leftContX,
			leftContY,
			rightContX,
			rightContY,
			ret;

		// find control points
		if (i && i < segment.length - 1) {
			var lastX = lastPoint.plotX,
				lastY = lastPoint.plotY,
				nextX = nextPoint.plotX,
				nextY = nextPoint.plotY,
				correction;

			leftContX = (smoothing * plotX + lastX) / denom;
			leftContY = (smoothing * plotY + lastY) / denom;
			rightContX = (smoothing * plotX + nextX) / denom;
			rightContY = (smoothing * plotY + nextY) / denom;

			// have the two control points make a straight line through main point
			correction = ((rightContY - leftContY) * (rightContX - plotX)) /
				(rightContX - leftContX) + plotY - rightContY;

			leftContY += correction;
			rightContY += correction;

			// to prevent false extremes, check that control points are between
			// neighbouring points' y values
			if (leftContY > lastY && leftContY > plotY) {
				leftContY = mathMax(lastY, plotY);
				rightContY = 2 * plotY - leftContY; // mirror of left control point
			} else if (leftContY < lastY && leftContY < plotY) {
				leftContY = mathMin(lastY, plotY);
				rightContY = 2 * plotY - leftContY;
			}
			if (rightContY > nextY && rightContY > plotY) {
				rightContY = mathMax(nextY, plotY);
				leftContY = 2 * plotY - rightContY;
			} else if (rightContY < nextY && rightContY < plotY) {
				rightContY = mathMin(nextY, plotY);
				leftContY = 2 * plotY - rightContY;
			}

			// record for drawing in next point
			point.rightContX = rightContX;
			point.rightContY = rightContY;

		}

		// moveTo or lineTo
		if (!i) {
			ret = [M, plotX, plotY];
		}

		// curve from last point to this
		else {
			ret = [
				'C',
				lastPoint.rightContX || lastPoint.plotX,
				lastPoint.rightContY || lastPoint.plotY,
				leftContX || plotX,
				leftContY || plotY,
				plotX,
				plotY
			];
			lastPoint.rightContX = lastPoint.rightContY = null; // reset for updating series later
		}
		return ret;
	}
});
seriesTypes.spline = SplineSeries;



/**
 * AreaSplineSeries object
 */
var AreaSplineSeries = extendClass(SplineSeries, {
	type: 'areaspline',
	useThreshold: true
});
seriesTypes.areaspline = AreaSplineSeries;

/**
 * ColumnSeries object
 */
var ColumnSeries = extendClass(Series, {
	type: 'column',
	useThreshold: true,
	getDistance: true,
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'borderColor',
		'stroke-width': 'borderWidth',
		fill: 'color',
		r: 'borderRadius'
	},
	init: function() {
		Series.prototype.init.apply(this, arguments);

		var series = this,
			chart = series.chart;

		// flag the chart in order to pad the x axis
		//chart.hasColumn = true;

		// if the series is added dynamically, force redraw of other
		// series affected by a new column
		if (chart.hasRendered) {
			each(chart.series, function(otherSeries) {
				if (otherSeries.type === series.type) {
					otherSeries.isDirty = true;
				}
			});
		}
	},

	/**
	 * Translate each point to the plot area coordinate system and find shape positions
	 */
	translate: function() {
		var series = this,
			chart = series.chart,
			options = series.options,
			stacking = options.stacking,
			borderWidth = options.borderWidth,
			columnCount = 0,
			xAxis = series.xAxis,
			reversedXAxis = xAxis.reversed,
			categories = xAxis.categories,
			stackGroups = {},
			stackKey,
			columnIndex;

		Series.prototype.translate.apply(series);

		// Get the total number of column type series.
		// This is called on every series. Consider moving this logic to a
		// chart.orderStacks() function and call it on init, addSeries and removeSeries
		each(chart.series, function(otherSeries) {
			if (otherSeries.type === series.type && otherSeries.visible &&
					series.options.group === otherSeries.options.group) { // used in Stock charts navigator series
				if (otherSeries.options.stacking) {
					stackKey = otherSeries.stackKey;
					if (stackGroups[stackKey] === UNDEFINED) {
						stackGroups[stackKey] = columnCount++;
					}
					columnIndex = stackGroups[stackKey];
				} else {
					columnIndex = columnCount++;
				}
				otherSeries.columnIndex = columnIndex;
			}
		});

		// calculate the width and position of each column based on
		// the number of column series in the plot, the groupPadding
		// and the pointPadding options
		var points = series.points,
			//closestPoints = series.closestPoints || 1,
			categoryWidth = mathAbs(pick(
				xAxis.leastDistance,
				chart.plotSizeX / ((categories && categories.length) || 1)
			)),
			groupPadding = categoryWidth * options.groupPadding,
			groupWidth = categoryWidth - 2 * groupPadding,
			pointOffsetWidth = groupWidth / columnCount,
			optionPointWidth = options.pointWidth,
			pointPadding = defined(optionPointWidth) ? (pointOffsetWidth - optionPointWidth) / 2 :
				pointOffsetWidth * options.pointPadding,
			pointWidth = mathCeil(mathMax(pick(optionPointWidth, pointOffsetWidth - 2 * pointPadding), 1)),
			colIndex = (reversedXAxis ? columnCount -
				series.columnIndex : series.columnIndex) || 0,
			pointXOffset = pointPadding + (groupPadding + colIndex *
				pointOffsetWidth -(categoryWidth / 2)) *
				(reversedXAxis ? -1 : 1),
			threshold = options.threshold,
			translatedThreshold = series.yAxis.getThreshold(threshold),
			minPointLength = pick(options.minPointLength, 5);

		// record the new values
		each(points, function(point, i) {
			var plotY = point.plotY,
				yBottom = point.yBottom || translatedThreshold,
				barX = point.plotX + pointXOffset,
				barY = mathCeil(mathMin(plotY, yBottom)),
				barH = mathCeil(mathMax(plotY, yBottom) - barY),
				stack = series.yAxis.stacks[(point.y < 0 ? '-' : '') + series.stackKey],
				trackerY,
				shapeArgs;

			// Record the offset'ed position and width of the bar to be able to align the stacking total correctly
			if (stacking && series.visible && stack && stack[point.x]) {
				stack[point.x].setOffset(pointXOffset, pointWidth);
			}

			// handle options.minPointLength and tracker for small points
			if (mathAbs(barH) < minPointLength) {
				if (minPointLength) {
					barH = minPointLength;
					barY =
						mathAbs(barY - translatedThreshold) > minPointLength ? // stacked
							yBottom - minPointLength : // keep position
							translatedThreshold - (plotY <= translatedThreshold ? minPointLength : 0);
				}
				trackerY = barY - 3;
			}

			extend(point, {
				barX: barX,
				barY: barY,
				barW: pointWidth,
				barH: barH
			});

			// create shape type and shape args that are reused in drawPoints and drawTracker
			point.shapeType = 'rect';
			shapeArgs = extend(chart.renderer.Element.prototype.crisp.apply({}, [
				borderWidth,
				barX,
				barY,
				pointWidth,
				barH
			]), {
				r: options.borderRadius
			});
			if (borderWidth % 2) { // correct for shorting in crisp method, visible in stacked columns with 1px border
				shapeArgs.y -= 1;
				shapeArgs.height += 1;
			}
			point.shapeArgs = shapeArgs;

			// make small columns responsive to mouse
			point.trackerArgs = defined(trackerY) && merge(point.shapeArgs, {
				height: mathMax(6, barH + 3),
				y: trackerY
			});
		});

	},

	getSymbol: function(){
	},

	/**
	 * Columns have no graph
	 */
	drawGraph: function() {},

	/**
	 * Draw the columns. For bars, the series.group is rotated, so the same coordinates
	 * apply for columns and bars. This method is inherited by scatter series.
	 *
	 */
	drawPoints: function() {
		var series = this,
			options = series.options,
			renderer = series.chart.renderer,
			graphic,
			shapeArgs;


		// draw the columns
		each(series.points, function(point) {
			var plotY = point.plotY;
			if (plotY !== UNDEFINED && !isNaN(plotY) && point.y !== null) {
				graphic = point.graphic;
				shapeArgs = point.shapeArgs;
				if (graphic) { // update
					stop(graphic);
					graphic.animate(shapeArgs);

				} else {
					point.graphic = graphic = renderer[point.shapeType](shapeArgs)
						.attr(point.pointAttr[point.selected ? SELECT_STATE : NORMAL_STATE])
						.add(series.group)
						.shadow(options.shadow);
				}

			}
		});
	},
	/**
	 * Draw the individual tracker elements.
	 * This method is inherited by scatter and pie charts too.
	 */
	drawTracker: function() {
		var series = this,
			chart = series.chart,
			renderer = chart.renderer,
			shapeArgs,
			tracker,
			trackerLabel = +new Date(),
			cursor = series.options.cursor,
			css = cursor && { cursor: cursor },
			rel;

		each(series.points, function(point) {
			tracker = point.tracker;
			shapeArgs = point.trackerArgs || point.shapeArgs;
			delete shapeArgs.strokeWidth;
			if (point.y !== null) {
				if (tracker) {// update
					tracker.attr(shapeArgs);

				} else {
					point.tracker =
						renderer[point.shapeType](shapeArgs)
						.attr({
							isTracker: trackerLabel,
							fill: TRACKER_FILL,
							visibility: series.visible ? VISIBLE : HIDDEN,
							zIndex: 1
						})
						.on(hasTouch ? 'touchstart' : 'mouseover', function(event) {
							rel = event.relatedTarget || event.fromElement;
							if (chart.hoverSeries !== series && attr(rel, 'isTracker') !== trackerLabel) {
								series.onMouseOver();
							}
							point.onMouseOver();

						})
						.on('mouseout', function(event) {
							if (!series.options.stickyTracking) {
								rel = event.relatedTarget || event.toElement;
								if (attr(rel, 'isTracker') !== trackerLabel) {
									series.onMouseOut();
								}
							}
						})
						.css(css)
						.add(point.group || chart.trackerGroup); // pies have point group - see issue #118
				}
			}
		});
	},


	/**
	 * Animate the column heights one by one from zero
	 * @param {Boolean} init Whether to initialize the animation or run it
	 */
	animate: function(init) {
		var series = this,
			points = series.points;

		if (!init) { // run the animation
			/*
			 * Note: Ideally the animation should be initialized by calling
			 * series.group.hide(), and then calling series.group.show()
			 * after the animation was started. But this rendered the shadows
			 * invisible in IE8 standards mode. If the columns flicker on large
			 * datasets, this is the cause.
			 */

			each(points, function(point) {
				var graphic = point.graphic,
					shapeArgs = point.shapeArgs;

				if (graphic) {
					// start values
					graphic.attr({
						height: 0,
						y: series.yAxis.translate(0, 0, 1)
					});

					// animate
					graphic.animate({
						height: shapeArgs.height,
						y: shapeArgs.y
					}, series.options.animation);
				}
			});


			// delete this function to allow it only once
			series.animate = null;
		}

	},
	/**
	 * Remove this series from the chart
	 */
	remove: function() {
		var series = this,
			chart = series.chart;

		// column and bar series affects other series of the same type
		// as they are either stacked or grouped
		if (chart.hasRendered) {
			each(chart.series, function(otherSeries) {
				if (otherSeries.type === series.type) {
					otherSeries.isDirty = true;
				}
			});
		}

		Series.prototype.remove.apply(series, arguments);
	}
});
seriesTypes.column = ColumnSeries;

var BarSeries = extendClass(ColumnSeries, {
	type: 'bar',
	init: function(chart) {
		chart.inverted = this.inverted = true;
		ColumnSeries.prototype.init.apply(this, arguments);
	}
});
seriesTypes.bar = BarSeries;

/**
 * The scatter series class
 */
var ScatterSeries = extendClass(Series, {
	type: 'scatter',

	/**
	 * Extend the base Series' translate method by adding shape type and
	 * arguments for the point trackers
	 */
	translate: function() {
		var series = this;

		Series.prototype.translate.apply(series);

		each(series.points, function(point) {
			point.shapeType = 'circle';
			point.shapeArgs = {
				x: point.plotX,
				y: point.plotY,
				r: series.chart.options.tooltip.snap
			};
		});
	},


	/**
	 * Create individual tracker elements for each point
	 */
	//drawTracker: ColumnSeries.prototype.drawTracker,
	drawTracker: function() {
		var series = this,
			cursor = series.options.cursor,
			css = cursor && { cursor: cursor },
			graphic;

		each(series.points, function(point) {
			graphic = point.graphic;
			if (graphic) { // doesn't exist for null points
				graphic
					.attr({ isTracker: true })
					.on('mouseover', function(event) {
						series.onMouseOver();
						point.onMouseOver();
					})
					.on('mouseout', function(event) {
						if (!series.options.stickyTracking) {
							series.onMouseOut();
						}
					})
					.css(css);
			}
		});

	}//,

	/**
	 * Cleaning the data is not necessary in a scatter plot
	 */
	//cleanData: function() {}
});
seriesTypes.scatter = ScatterSeries;

/**
 * Extended point object for pies
 */
var PiePoint = extendClass(Point, {
	/**
	 * Initiate the pie slice
	 */
	init: function () {

		Point.prototype.init.apply(this, arguments);

		var point = this,
			toggleSlice;

		//visible: options.visible !== false,
		extend(point, {
			visible: point.visible !== false,
			name: pick(point.name, 'Slice')
		});

		// add event listener for select
		toggleSlice = function() {
			point.slice();
		};
		addEvent(point, 'select', toggleSlice);
		addEvent(point, 'unselect', toggleSlice);

		return point;
	},

	/**
	 * Toggle the visibility of the pie slice
	 * @param {Boolean} vis Whether to show the slice or not. If undefined, the
	 *    visibility is toggled
	 */
	setVisible: function(vis) {
		var point = this,
			chart = point.series.chart,
			tracker = point.tracker,
			dataLabel = point.dataLabel,
			connector = point.connector,
			method;

		// if called without an argument, toggle visibility
		point.visible = vis = vis === UNDEFINED ? !point.visible : vis;

		method = vis ? 'show' : 'hide';

		point.group[method]();
		if (tracker) {
			tracker[method]();
		}
		if (dataLabel) {
			dataLabel[method]();
		}
		if (connector) {
			connector[method]();
		}
		if (point.legendItem) {
			chart.legend.colorizeItem(point, vis);
		}
	},

	/**
	 * Set or toggle whether the slice is cut out from the pie
	 * @param {Boolean} sliced When undefined, the slice state is toggled
	 * @param {Boolean} redraw Whether to redraw the chart. True by default.
	 */
	slice: function(sliced, redraw, animation) {
		var point = this,
			series = point.series,
			chart = series.chart,
			slicedTranslation = point.slicedTranslation,
			translation;

		setAnimation(animation, chart);

		// redraw is true by default
		redraw = pick(redraw, true);

		// if called without an argument, toggle
		sliced = point.sliced = defined(sliced) ? sliced : !point.sliced;

		translation = {
			translateX: (sliced ? slicedTranslation[0] : chart.plotLeft),
			translateY: (sliced ? slicedTranslation[1] : chart.plotTop)
		};
		point.group.animate(translation);
		if (point.shadowGroup) {
			point.shadowGroup.animate(translation);
		}

	}
});

/**
 * The Pie series class
 */
var PieSeries = extendClass(Series, {
	type: 'pie',
	isCartesian: false,
	pointClass: PiePoint,
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'borderColor',
		'stroke-width': 'borderWidth',
		fill: 'color'
	},

	/**
	 * Pies have one color each point
	 */
	getColor: function() {
		// record first color for use in setData
		this.initialColor = this.chart.counters.color;
	},

	/**
	 * Animate the column heights one by one from zero
	 * @param {Boolean} init Whether to initialize the animation or run it
	 */
	animate: function(init) {
		var series = this,
			points = series.points;

		each(points, function(point) {
			var graphic = point.graphic,
				args = point.shapeArgs,
				up = -mathPI / 2;

			if (graphic) {
				// start values
				graphic.attr({
					r: 0,
					start: up,
					end: up
				});

				// animate
				graphic.animate({
					r: args.r,
					start: args.start,
					end: args.end
				}, series.options.animation);
			}
		});

		// delete this function to allow it only once
		series.animate = null;

	},

	/**
	 * Extend the basic setData method by running processData and generatePoints immediately,
	 * in order to access the points from the legend.
	 */
	setData: function() {
		Series.prototype.setData.apply(this, arguments);
		this.processData();
		this.generatePoints();
	},
	/**
	 * Do translation for pie slices
	 */
	translate: function() {
		var total = 0,
			series = this,
			cumulative = -0.25, // start at top
			precision = 1000, // issue #172
			options = series.options,
			slicedOffset = options.slicedOffset,
			connectorOffset = slicedOffset + options.borderWidth,
			positions = options.center.concat([options.size, options.innerSize || 0]),
			chart = series.chart,
			plotWidth = chart.plotWidth,
			plotHeight = chart.plotHeight,
			start,
			end,
			angle,
			points = series.points,
			circ = 2 * mathPI,
			fraction,
			smallestSize = mathMin(plotWidth, plotHeight),
			isPercent,
			radiusX, // the x component of the radius vector for a given point
			radiusY,
			labelDistance = options.dataLabels.distance;

		// get positions - either an integer or a percentage string must be given
		positions = map(positions, function(length, i) {

			isPercent = /%$/.test(length);
			return isPercent ?
				// i == 0: centerX, relative to width
				// i == 1: centerY, relative to height
				// i == 2: size, relative to smallestSize
				// i == 4: innerSize, relative to smallestSize
				[plotWidth, plotHeight, smallestSize, smallestSize][i] *
					pInt(length) / 100:
				length;
		});

		// utility for getting the x value from a given y, used for anticollision logic in data labels
		series.getX = function(y, left) {

			angle = math.asin((y - positions[1]) / (positions[2] / 2 + labelDistance));

			return positions[0] +
				(left ? -1 : 1) *
				(mathCos(angle) * (positions[2] / 2 + labelDistance));
		};

		// set center for later use
		series.center = positions;

		// get the total sum
		each(points, function(point) {
			total += point.y;
		});

		each(points, function(point) {
			// set start and end angle
			fraction = total ? point.y / total : 0;
			start = mathRound(cumulative * circ * precision) / precision;
			cumulative += fraction;
			end = mathRound(cumulative * circ * precision) / precision;

			// set the shape
			point.shapeType = 'arc';
			point.shapeArgs = {
				x: positions[0],
				y: positions[1],
				r: positions[2] / 2,
				innerR: positions[3] / 2,
				start: start,
				end: end
			};

			// center for the sliced out slice
			angle = (end + start) / 2;
			point.slicedTranslation = map([
				mathCos(angle) * slicedOffset + chart.plotLeft,
				mathSin(angle) * slicedOffset + chart.plotTop
			], mathRound);

			// set the anchor point for tooltips
			radiusX = mathCos(angle) * positions[2] / 2;
			radiusY = mathSin(angle) * positions[2] / 2;
			point.tooltipPos = [
				positions[0] + radiusX * 0.7,
				positions[1] + radiusY * 0.7
			];

			// set the anchor point for data labels
			point.labelPos = [
				positions[0] + radiusX + mathCos(angle) * labelDistance, // first break of connector
				positions[1] + radiusY + mathSin(angle) * labelDistance, // a/a
				positions[0] + radiusX + mathCos(angle) * connectorOffset, // second break, right outside pie
				positions[1] + radiusY + mathSin(angle) * connectorOffset, // a/a
				positions[0] + radiusX, // landing point for connector
				positions[1] + radiusY, // a/a
				labelDistance < 0 ? // alignment
					'center' :
					angle < circ / 4 ? 'left' : 'right', // alignment
				angle // center angle
			];


			// API properties
			point.percentage = fraction * 100;
			point.total = total;

		});

		this.setTooltipPoints();
	},

	/**
	 * Render the slices
	 */
	render: function() {
		var series = this;

		// cache attributes for shapes
		series.getAttribs();

		this.drawPoints();

		// draw the mouse tracking area
		if (series.options.enableMouseTracking !== false) {
			series.drawTracker();
		}

		this.drawDataLabels();

		if (series.options.animation && series.animate) {
			series.animate();
		}

		series.isDirty = series.isDirtyData = false; // means data is in accordance with what you see
	},

	/**
	 * Draw the data points
	 */
	drawPoints: function() {
		var series = this,
			chart = series.chart,
			renderer = chart.renderer,
			groupTranslation,
			//center,
			graphic,
			group,
			shadow = series.options.shadow,
			shadowGroup,
			shapeArgs;

		// draw the slices
		each(series.points, function(point) {
			graphic = point.graphic;
			shapeArgs = point.shapeArgs;
			group = point.group;
			shadowGroup = point.shadowGroup;

			// put the shadow behind all points
			if (shadow && !shadowGroup) {
				shadowGroup = point.shadowGroup = renderer.g('shadow')
					.attr({ zIndex: 4 })
					.add();
			}

			// create the group the first time
			if (!group) {
				group = point.group = renderer.g('point')
					.attr({ zIndex: 5 })
					.add();
			}

			// if the point is sliced, use special translation, else use plot area traslation
			groupTranslation = point.sliced ? point.slicedTranslation : [chart.plotLeft, chart.plotTop];
			group.translate(groupTranslation[0], groupTranslation[1]);
			if (shadowGroup) {
				shadowGroup.translate(groupTranslation[0], groupTranslation[1]);
			}

			// draw the slice
			if (graphic) {
				graphic.animate(shapeArgs);
			} else {
				point.graphic =
					renderer.arc(shapeArgs)
					.attr(extend(
						point.pointAttr[NORMAL_STATE],
						{ 'stroke-linejoin': 'round' }
					))
					.add(point.group)
					.shadow(shadow, shadowGroup);
			}

			// detect point specific visibility
			if (point.visible === false) {
				point.setVisible(false);
			}

		});

	},

	/**
	 * Override the base drawDataLabels method by pie specific functionality
	 */
	drawDataLabels: function() {
		var series = this,
			points = series.points,
			point,
			chart = series.chart,
			options = series.options.dataLabels,
			connectorPadding = pick(options.connectorPadding, 10),
			connectorWidth = pick(options.connectorWidth, 1),
			connector,
			connectorPath,
			outside = options.distance > 0,
			dataLabel,
			labelPos,
			labelHeight,
			lastY,
			centerY = series.center[1],
			quarters = [// divide the points into quarters for anti collision
				[], // top right
				[], // bottom right
				[], // bottom left
				[] // top left
			],
			x,
			y,
			visibility,
			overlapping,
			rankArr,
			secondPass,
			sign,
			lowerHalf,
			sort,
			i = 4,
			j;

		// run parent method
		Series.prototype.drawDataLabels.apply(series);

		// arrange points for detection collision
		each(points, function(point) {
			var angle = point.labelPos[7],
				quarter;
			if (angle < 0) {
				quarter = 0;
			} else if (angle < mathPI / 2) {
				quarter = 1;
			} else if (angle < mathPI) {
				quarter = 2;
			} else {
				quarter = 3;
			}
			quarters[quarter].push(point);
		});
		quarters[1].reverse();
		quarters[3].reverse();

		// define the sorting algorithm
		sort = function(a,b) {
			return a.y > b.y;
		};
		/* Loop over the points in each quartile, starting from the top and bottom
		 * of the pie to detect overlapping labels.
		 */
		while (i--) {
			overlapping = 0;

			// create an array for sorting and ranking the points within each quarter
			rankArr = [].concat(quarters[i]);
			rankArr.sort(sort);
			j = rankArr.length;
			while (j--) {
				rankArr[j].rank = j;
			}

			/* In the first pass, count the number of overlapping labels. In the second
			 * pass, remove the labels with lowest rank/values.
			 */
			for (secondPass = 0; secondPass < 2; secondPass++) {
				lowerHalf = i % 3;
				lastY = lowerHalf ? 9999 : -9999;
				sign = lowerHalf ? -1 : 1;

				for (j = 0; j < quarters[i].length; j++) {
					point = quarters[i][j];

					dataLabel = point.dataLabel;
					if (dataLabel) {
						labelPos = point.labelPos;
						visibility = VISIBLE;
						x = labelPos[0];
						y = labelPos[1];


						// assume all labels have equal height
						if (!labelHeight) {
							labelHeight = dataLabel && dataLabel.getBBox().height;
						}

						// anticollision
						if (outside) {
							if (secondPass && point.rank < overlapping) {
								visibility = HIDDEN;
							} else if ((!lowerHalf && y < lastY + labelHeight) ||
									(lowerHalf && y > lastY - labelHeight)) {
								y = lastY + sign * labelHeight;
								x = series.getX(y, i > 1);
								if ((!lowerHalf && y + labelHeight > centerY) ||
										(lowerHalf && y -labelHeight < centerY)) {
									if (secondPass) {
										visibility = HIDDEN;
									} else {
										overlapping++;
									}
								}
							}
						}

						if (point.visible === false) {
							visibility = HIDDEN;
						}

						if (visibility === VISIBLE) {
							lastY = y;
						}

						if (secondPass) {

							// move or place the data label
							dataLabel
								.attr({
									visibility: visibility,
									align: labelPos[6]
								})[dataLabel.moved ? 'animate' : 'attr']({
									x: x + options.x +
										({ left: connectorPadding, right: -connectorPadding }[labelPos[6]] || 0),
									y: y + options.y
								});
							dataLabel.moved = true;

							// draw the connector
							if (outside && connectorWidth) {
								connector = point.connector;

								connectorPath = [
									M,
									x + (labelPos[6] === 'left' ? 5 : -5), y, // end of the string at the label
									L,
									x, y, // first break, next to the label
									L,
									labelPos[2], labelPos[3], // second break
									L,
									labelPos[4], labelPos[5] // base
								];

								if (connector) {
									connector.animate({ d: connectorPath });
									connector.attr('visibility', visibility);

								} else {
									point.connector = connector = series.chart.renderer.path(connectorPath).attr({
										'stroke-width': connectorWidth,
										stroke: options.connectorColor || '#606060',
										visibility: visibility,
										zIndex: 3
									})
									.translate(chart.plotLeft, chart.plotTop)
									.add();
								}
							}
						}
					}
				}
			}
		}
	},

	/**
	 * Draw point specific tracker objects. Inherit directly from column series.
	 */
	drawTracker: ColumnSeries.prototype.drawTracker,

	/**
	 * Pies don't have point marker symbols
	 */
	getSymbol: function() {}

});
seriesTypes.pie = PieSeries;

/* ****************************************************************************
 * Start data grouping module												 *
 ******************************************************************************/
var DATA_GROUPING = 'dataGrouping',
	seriesProto = Series.prototype,
	baseProcessData = seriesProto.processData,
	baseGeneratePoints = seriesProto.generatePoints,
	baseDestroy = seriesProto.destroy;

/**
 * Extend the basic processData method, that crops the data to the current zoom
 * range, with data grouping logic.
 */
seriesProto.processData = function() {
	var series = this,
		options = series.options,
		dataGroupingOptions = options[DATA_GROUPING];

	baseProcessData.apply(this);

	// disabled?
	if (!dataGroupingOptions || dataGroupingOptions.enabled === false) {
		return;
	}

	var i,
		processedXData = series.processedXData,
		processedYData = series.processedYData,
		data = series.data,
		dataOptions = options.data,
		plotSizeX = series.chart.plotSizeX,
		groupPixelWidth = dataGroupingOptions.groupPixelWidth,
		maxPoints = plotSizeX / groupPixelWidth,
		approximation = dataGroupingOptions.approximation,
		summarize = approximation === 'average' || approximation === 'sum',
		dataLength = processedXData.length,
		ohlcData = series.valueCount === 4,
		groupedData = series.groupedData,
		groupedXData = [],
		groupedYData = [];
	
	// clear previous groups
	each (groupedData || [], function(point, i) {
		if (point) {
			groupedData[i] = point.destroy();
		}
	});

	series.hasGroupedData = false;
	if (dataLength > maxPoints) {
		series.hasGroupedData = true;

		series.points = null; // force recreation of point instances in series.translate

		var xMin = processedXData[0],
			xMax = processedXData[dataLength - 1],
			interval = groupPixelWidth * (xMax - xMin) / plotSizeX,
			groupPositions = getTimeTicks(interval, xMin, xMax, null, dataGroupingOptions.units),
			pointX,
			pointY,
			value = UNDEFINED,
			open = null,
			high = null,
			low = null,
			close = null,
			count = 0;
		
		for (i = 0; i < dataLength; i++) {

			// when a new group is entered, summarize and initiate the previous group
			while (groupPositions[1] !== UNDEFINED && processedXData[i] >= groupPositions[1]) {

				if (approximation === 'average' && value !== UNDEFINED && value !== null) {
					value /= count;
				}

				pointX = groupPositions.shift();
				if (value !== UNDEFINED || ohlcData) {
					groupedXData.push(pointX); // todo: just use groupPositions as xData?

					if (ohlcData) {
						groupedYData.push([open, high, low, close]);
						open = high = low = close = null;
					} else {
						groupedYData.push(value);
					}
				}

				value = UNDEFINED;
				count = 0;
			}

			// increase the counters
			pointY = processedYData[i];
			if (summarize && !ohlcData) { // approximation = 'sum' or 'average', the most frequent
				value = value === UNDEFINED || value === null ? pointY : value + pointY;
			} else if (ohlcData) {
				var index = series.cropStart + i,
					point = (data && data[index]) || series.pointClass.prototype.applyOptions.apply({}, [dataOptions[index]]);
				if (open === null) { // first point
					open = point.open;
				}
				high = high === null? point.high : mathMax(high, point.high);
				low = low === null ? point.low : mathMin(low, point.low);
				close = point.close; // last point
			} else if (approximation === 'open' && value === UNDEFINED) {
				value = pointY;
			} else if (approximation === 'high') {
				value = value === UNDEFINED ? pointY : mathMax(value, pointY);
			} else if (approximation === 'low') {
				value = value === UNDEFINED ? pointY : mathMin(value, pointY);
			} else if (approximation === 'close') { // last point
				value = pointY;
			}

			count++;
		}

		// prevent the smoothed data to spill out left and right, and make
		// sure data is not shifted to the left
		if (dataGroupingOptions.smoothed) {
			i = groupedXData.length - 1;
			groupedXData[i] = xMax;
			while (i-- && i) {
				groupedXData[i] += interval / 2;
			}
			groupedXData[0] = xMin;
		}

		series.tooltipHeaderFormat = dataGroupingOptions.dateTimeLabelFormats[groupPositions.unit[0]];
		series.unit = groupPositions.unit;

	} else {
		groupedXData = processedXData;
		groupedYData = processedYData;
		series.tooltipHeaderFormat = null;
		series.unit = null;
	}

	series.processedXData = groupedXData;
	series.processedYData = groupedYData;

};

seriesProto.generatePoints = function() {
	var series = this;

	baseGeneratePoints.apply(series);

	// record grouped data in order to let it be destroyed the next time processData runs
	series.groupedData = series.hasGroupedData ? series.points : null;
};

seriesProto.destroy = function() {
	var series = this,
		groupedData = series.groupedData || [],
		i = groupedData.length;

	while(i--) {
		if (groupedData[i]) {
			groupedData[i].destroy();
		}
	}
	baseDestroy.apply(series);
};


// Extend the plot options
var dateTimeLabelFormats = {
	second: '%A, %b %e, %H:%M:%S',
	minute: '%A, %b %e, %H:%M',
	hour: '%A, %b %e, %H:%M',
	day: '%A, %b %e, %Y',
	week: 'Week from %A, %b %e, %Y',
	month: '%B %Y',
	year: '%Y'
};

// line types
defaultPlotOptions.line[DATA_GROUPING] =
	defaultPlotOptions.spline[DATA_GROUPING] =
	defaultPlotOptions.area[DATA_GROUPING] =
	defaultPlotOptions.areaspline[DATA_GROUPING] = {
		approximation: 'average', // average, open, high, low, close, sum
		groupPixelWidth: 2,
		dateTimeLabelFormats: dateTimeLabelFormats, // todo: move to tooltip options?
		// smoothed = false, // enable this for navigator series only
		units: [[
			'millisecond',					// unit name
			[1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
		], [
			'second',						// unit name
			[1, 2, 5, 10, 15, 30]			// allowed multiples
		], [
			'minute',						// unit name
			[1, 2, 5, 10, 15, 30]			// allowed multiples
		], [
			'hour',							// unit name
			[1, 2, 3, 4, 6, 8, 12]			// allowed multiples
		], [
			'day',							// unit name
			[1]								// allowed multiples
		], [
			'week',							// unit name
			[1]								// allowed multiples
		], [
			'month',
			[1, 3, 6]
		], [
			'year',
			null
		]]
};
// bar-like types (OHLC and candleticks inherit this as the classes are not yet built)
defaultPlotOptions.column[DATA_GROUPING] = {
		approximation: 'sum',
		groupPixelWidth: 10,
		dateTimeLabelFormats: dateTimeLabelFormats
};
/* ****************************************************************************
 * End data grouping module												   *
 ******************************************************************************//* ****************************************************************************
 * Start OHLC series code													 *
 *****************************************************************************/

// 1 - Set default options
defaultPlotOptions.ohlc = merge(defaultPlotOptions.column, {
	lineWidth: 1,
	dataGrouping: {
		groupPixelWidth: 5 // allows to be packed tighter than candlesticks
	},
	states: {
		hover: {
			lineWidth: 3
		}
	}
});

// 2- Create the OHLCPoint object
var OHLCPoint = extendClass(Point, {
	/**
	 * Apply the options containing the x and OHLC data and possible some extra properties.
	 * This is called on point init or from point.update. Extends base Point by adding
	 * multiple y-like values.
	 *
	 * @param {Object} options
	 */
	applyOptions: function(options) {
		var point = this,
			series = point.series,
			i = 0;


		// object input for example:
		// { x: Date(2010, 0, 1), open: 7.88, high: 7.99, low: 7.02, close: 7.65 }
		if (typeof options === 'object' && typeof options.length !== 'number') {

			// copy options directly to point
			extend(point, options);

			point.options = options;
		}

		// array
		else if (options.length) {
			// with leading x value
			if (options.length === 5) {
				if (typeof options[0] === 'string') {
					point.name = options[0];
				} else if (typeof options[0] === 'number') {
					point.x = options[0];
				}
				i++;
			}
			point.open = options[i++];
			point.high = options[i++];
			point.low = options[i++];
			point.close = options[i++];
		}

		/*
		 * If no x is set by now, get auto incremented value. All points must have an
		 * x value, however the y value can be null to create a gap in the series
		 */
		point.y = point.high;
		if (point.x === UNDEFINED && series) {
			point.x = series.autoIncrement();
		}
		return point;
	},

	/**
	 * A specific OHLC tooltip formatter
	 */
	tooltipFormatter: function() {
		var point = this,
			series = point.series;

		return ['<span style="color:'+ series.color +';font-weight:bold">', (point.name || series.name), '</span><br/> ',
			'Open: ', point.open, '<br/>',
			'High: ', point.high, '<br/>',
			'Low: ', point.low, '<br/>',
			'Close: ', point.close, '<br/>'].join('');

	}

});

// 3 - Create the OHLCSeries object
var OHLCSeries = extendClass(seriesTypes.column, {
	type: 'ohlc',
	valueCount: 4, // four values per point
	pointClass: OHLCPoint,
	useThreshold: false,

	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		stroke: 'color',
		'stroke-width': 'lineWidth'
	},


	/**
	 * Translate data points from raw values x and y to plotX and plotY
	 */
	translate: function() {
		var series = this,
			yAxis = series.yAxis;

		seriesTypes.column.prototype.translate.apply(series);

		// do the translation
		each(series.points, function(point) {
			// the graphics
			if (point.open !== null) {
				point.plotOpen = yAxis.translate(point.open, 0, 1);
			}
			if (point.close !== null) {
				point.plotClose = yAxis.translate(point.close, 0, 1);
			}

		});
	},

	/**
	 * Draw the data points
	 */
	drawPoints: function() {
		var series = this,
			points = series.points,
			chart = series.chart,
			pointAttr,
			plotOpen,
			plotClose,
			crispCorr,
			halfWidth,
			path,
			graphic,
			crispX;


		each(points, function(point) {
			if (point.plotY !== UNDEFINED) {

				graphic = point.graphic;
				pointAttr = point.pointAttr[point.selected ? 'selected' : ''];

				// crisp vector coordinates
				crispCorr = (pointAttr['stroke-width'] % 2) / 2;
				crispX = mathRound(point.plotX) + crispCorr;
				halfWidth = mathRound(point.barW / 2);

				// the vertical stem
				path = [
					'M',
					crispX, mathRound(point.yBottom),
					'L',
					crispX, mathRound(point.plotY)
				];
				
				// open
				if (point.open !== null) {
					plotOpen = mathRound(point.plotOpen) + crispCorr;
					path.push(
						'M',
						crispX, plotOpen,
						'L',
						crispX - halfWidth, plotOpen
					);
				}

				// close
				if (point.close !== null) {
					plotClose = mathRound(point.plotClose) + crispCorr;
					path.push(
						'M',
						crispX, plotClose,
						'L',
						crispX + halfWidth, plotClose
					);
				}

				// create and/or update the graphic
				if (graphic) {
					graphic.animate({ d: path });
				} else {
					point.graphic = chart.renderer.path(path)
						.attr(pointAttr)
						.add(series.group);
				}

			}


		});

	},
	
	/**
	 * Disable animation
	 */
	animate: null


});
seriesTypes.ohlc = OHLCSeries;
/* ****************************************************************************
 * End OHLC series code													   *
 *****************************************************************************/


/* ****************************************************************************
 * Start Candlestick series code											  *
 *****************************************************************************/

// 1 - set default options
defaultPlotOptions.candlestick = merge(defaultPlotOptions.column, {
	lineColor: 'black',
	lineWidth: 1,
	upColor: 'white',
	states: {
		hover: {
			lineWidth: 2
		}
	}
});

// 2 - Create the CandlestickSeries object
var CandlestickSeries = extendClass(OHLCSeries, {
	type: 'candlestick',

	/**
	 * One-to-one mapping from options to SVG attributes
	 */
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		fill: 'color',
		stroke: 'lineColor',
		'stroke-width': 'lineWidth'
	},

	/**
	 * Postprocess mapping between options and SVG attributes
	 */
	getAttribs: function() {
		OHLCSeries.prototype.getAttribs.apply(this, arguments);
		var series = this,
			options = series.options,
			stateOptions = options.states,
			upColor = options.upColor,
			seriesDownPointAttr = merge(series.pointAttr);

		seriesDownPointAttr[''].fill = upColor;
		seriesDownPointAttr.hover.fill = stateOptions.hover.upColor || upColor;
		seriesDownPointAttr.select.fill = stateOptions.select.upColor || upColor;

		each(series.points, function(point) {
			if (point.open < point.close) {
				point.pointAttr = seriesDownPointAttr;
			}
		});
	},

	/**
	 * Draw the data points
	 */
	drawPoints: function() {
		var series = this,  //state = series.state,
			points = series.points,
			chart = series.chart,
			pointAttr,
			plotOpen,
			plotClose,
			topBox,
			bottomBox,
			crispCorr,
			crispX,
			graphic,
			path,
			halfWidth;


		each(points, function(point) {

			graphic = point.graphic;
			if (point.plotY !== UNDEFINED) {

				pointAttr = point.pointAttr[point.selected ? 'selected' : ''];

				// crisp vector coordinates
				crispCorr = (pointAttr['stroke-width'] % 2) / 2;
				crispX = mathRound(point.plotX) + crispCorr;
				plotOpen = mathRound(point.plotOpen) + crispCorr;
				plotClose = mathRound(point.plotClose) + crispCorr;
				topBox = math.min(plotOpen, plotClose);
				bottomBox = math.max(plotOpen, plotClose);
				halfWidth = mathRound(point.barW / 2);

				// create the path
				path = [
					'M',
					crispX - halfWidth, bottomBox,
					'L',
					crispX - halfWidth, topBox,
					'L',
					crispX + halfWidth, topBox,
					'L',
					crispX + halfWidth, bottomBox,
					'L',
					crispX - halfWidth, bottomBox,
					'M',
					crispX, bottomBox,
					'L',
					crispX, mathRound(point.yBottom),
					'M',
					crispX, topBox,
					'L',
					crispX, mathRound(point.plotY),
					'Z'
				];

				if (graphic) {
					graphic.animate({ d: path });
				} else {
					point.graphic = chart.renderer.path(path)
						.attr(pointAttr)
						.add(series.group);
				}

			}
		});

	}


});

seriesTypes.candlestick = CandlestickSeries;

/* ****************************************************************************
 * End Candlestick series code												*
 *****************************************************************************/


/* ****************************************************************************
 * Start Flags series code													*
 *****************************************************************************/

var symbols = Renderer.prototype.symbols;

// 1 - set default options
defaultPlotOptions.flags = merge(defaultPlotOptions.column, {
	fillColor: 'white',
	lineWidth: 1,
	//radius: 2,
	shape: 'flag',
	stackDistance: 7,
	states: {
		hover: {
			lineColor: 'black',
			fillColor: '#FCFFC5'
		}
	},
	style: {
		fontSize: '11px',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	y: -30
});

// 2 - Create the CandlestickSeries object
seriesTypes.flags = extendClass(seriesTypes.column, {
	type: 'flags',
	noSharedTooltip: true,
	useThreshold: false,
	/**
	 * Inherit the initialization from base Series
	 */
	init: Series.prototype.init,

	/**
	 * One-to-one mapping from options to SVG attributes
	 */
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		fill: 'fillColor',
		stroke: 'color',
		'stroke-width': 'lineWidth',
		r: 'radius'
	},

	/**
	 * Extend the translate method by placing the point on the related series
	 */
	translate: function() {

		seriesTypes.column.prototype.translate.apply(this);

		var series = this,
			options = series.options,
			chart = series.chart,
			points = series.points,
			cursor = points.length - 1,
			i,
			point,
			lastPoint,
			optionsOnSeries = options.onSeries,
			onSeries = optionsOnSeries && chart.get(optionsOnSeries),
			onData,
			onPoint;


		// relate to a master series
		if (onSeries) {
			onData = onSeries.points;
			i = onData.length;

			// sort the data points
			points.sort(function(a, b){
				return (a.x - b.x);
			});

			while (i-- && points[cursor]) {
				point = points[cursor];
				onPoint = onData[i];
				if (onPoint.x <= point.x) {
					point.plotY = onPoint.plotY;
					cursor--;
					i++; // check again for points in the same x position
					if (cursor < 0) {
						break;
					}
				}
			}
		}

		each(points, function(point, i) {
			// place on y axis
			if (!onSeries) {
				point.plotY = chart.plotHeight;
			}
			// if multiple flags appear at the same x, order them into a stack
			lastPoint = points[i - 1];
			if (lastPoint && lastPoint.plotX === point.plotX) {
				if (lastPoint.stackIndex === UNDEFINED) {
					lastPoint.stackIndex = 0;
				}
				point.stackIndex = lastPoint.stackIndex + 1;
			}

		});


	},

	/**
	 * Draw the markers
	 */
	drawPoints: function(){
		var series = this,
			pointAttr,
			points = series.points,
			chart = series.chart,
			renderer = chart.renderer,
			plotX,
			plotY,
			options = series.options,
			optionsY = options.y,
			shape = options.shape,
			box,
			bBox,
			i,
			point,
			graphic,
			connector,
			stackIndex,
			crisp = (options.lineWidth % 2 / 2),
			anchorX,
			anchorY;

		i = points.length;
		while (i--) {
			point = points[i];
			plotX = point.plotX + crisp;
			stackIndex = point.stackIndex;
			plotY = point.plotY + optionsY + crisp - (stackIndex !== UNDEFINED && stackIndex * options.stackDistance);
			// outside to the left, on series but series is clipped
			if (isNaN(plotY)) {
				plotY = 0;
			}
			anchorX = stackIndex ? UNDEFINED : point.plotX + crisp; // skip connectors for higher level stacked points
			anchorY = stackIndex ? UNDEFINED : point.plotY;

			graphic = point.graphic;
			connector = point.connector;

			// only draw the point if y is defined
			if (plotY !== UNDEFINED) {
				// shortcuts
				pointAttr = point.pointAttr[point.selected ? 'select' : ''];
				if (graphic) { // update
					graphic.attr({
						x: plotX,
						y: plotY,
						r: pointAttr.r
					});
				} else {
					graphic = point.graphic = renderer.label(
						point.options.title || options.title || 'A',
						plotX,
						plotY,
						shape,
						anchorX,
						anchorY
					)
					.css(merge(options.style, point.style))
					.attr(pointAttr)
					.attr({
						align: shape === 'flag' ? 'left' : 'center',
						width: options.width,
						height: options.height
					})
					.add(series.group);

				}

				// get the bounding box
				box = graphic.box;
				bBox = box.getBBox();

				// set the shape arguments for the tracker element
				point.shapeArgs = extend(
					bBox, {
						x: plotX - (shape === 'flag' ? 0 : box.attr('width') / 2), // flags align left, else align center
						y: plotY
					}
				);

			}

		}

	},

	/**
	 * Extend the column trackers with listeners to expand and contract stacks
	 */
	drawTracker: function() {
		var series = this;

		seriesTypes.column.prototype.drawTracker.apply(series);

		// put each point in front on mouse over, this allows readability of vertically
		// stacked elements as well as tight points on the x axis
		each(series.points, function(point) {
			addEvent(point.tracker.element, 'mouseover', function() {
				point.graphic.toFront();
			});
		});
	},

	/**
	 * Override the regular tooltip formatter by returning the point text given
	 * in the options
	 */
	tooltipFormatter: function(item) {
		return item.point.text;
	},

	/**
	 * Disable animation
	 */
	animate: function() {}

});

// create the flag icon with anchor
symbols.flag = function(x, y, w, h, options) {
	var anchorX = (options && options.anchorX) || x,
		anchorY = (options &&  options.anchorY) || y;

	return [
		'M', anchorX, anchorY,
		'L', x, y + h,
		x, y,
		x + w, y,
		x + w, y + h,
		x, y + h,
		'M', anchorX, anchorY,
		'Z'
	];
};

// create the circlepin and squarepin icons with anchor
each(['circle', 'square'], function(shape) {
	symbols[shape +'pin'] = function(x, y, w, h, options) {
		
		var anchorX = options && options.anchorX,
			anchorY = options &&  options.anchorY,
			path = symbols[shape](x, y, w, h);
		
		if (anchorX && anchorY) {
			path.push('M', x + w / 2, y + h, 'L', anchorX, anchorY);
		}

		//console.trace(x, y, );
		return path;
	};
});

/* ****************************************************************************
 * End Flags series code													  *
 *****************************************************************************/


// constants
var	MOUSEDOWN = hasTouch ? 'touchstart' : 'mousedown',
	MOUSEMOVE = hasTouch ? 'touchmove' : 'mousemove',
	MOUSEUP = hasTouch ? 'touchend' : 'mouseup';




/* ****************************************************************************
 * Start Scroller code														*
 *****************************************************************************/

var buttonGradient = {
		linearGradient: [0, 0, 0, 14],
		stops: [
			[0, '#FFF'],
			[1, '#CCC']
		]
	},
	units = [].concat(defaultPlotOptions.line.dataGrouping.units); // copy 
	
// add more resolution to units
units[4][1] = [1, 2, 3, 4]; // allow more days
units[5][1] = [1, 2, 3]; // allow more weeks

extend(defaultOptions, {
	navigator: {
		//enabled: true,
		handles: {
			backgroundColor: '#FFF',
			borderColor: '#666'
		},
		height: 40,
		margin: 10,
		maskFill: 'rgba(255, 255, 255, 0.75)',
		outlineColor: '#444',
		outlineWidth: 1,
		series: {
			type: 'areaspline',
			color: '#4572A7',
			fillOpacity: 0.4,
			dataGrouping: {
				smoothed: true,
				units: units
			},
			lineWidth: 1,
			marker: {
				enabled: false
			},
			shadow: false
		},
		//top: undefined, // docs
		xAxis: {
			tickWidth: 0,
			lineWidth: 0,
			gridLineWidth: 1,
			tickPixelInterval: 200,
			labels: {
				align: 'left',
				x: 3,
				y: -4
			}
		},
		yAxis: {
			gridLineWidth: 0,
			startOnTick: false,
			endOnTick: false,
			minPadding: 0.1,
			maxPadding: 0.1,
			labels: {
				enabled: false
			},
			title: {
				text: null
			},
			tickWidth: 0
		}
	},
	scrollbar: {
		//enabled: true
		height: hasTouch ? 20 : 14,
		barBackgroundColor: buttonGradient,
		barBorderRadius: 2,
		barBorderWidth: 1,
		barBorderColor: '#666',
		buttonArrowColor: '#666',
		buttonBackgroundColor: buttonGradient,
		buttonBorderColor: '#666',
		buttonBorderRadius: 2,
		buttonBorderWidth: 1,
		rifleColor: '#666',
		trackBackgroundColor: {
			linearGradient: [0, 0, 0, 10],
			stops: [
				[0, '#EEE'],
				[1, '#FFF']
			]
		},
		trackBorderColor: '#CCC',
		trackBorderWidth: 1
		// trackBorderRadius: 0
	}
});

/**
 * The Scroller class
 * @param {Object} chart
 */
function Scroller(chart) {

	var renderer = chart.renderer,
		chartOptions = chart.options,
		navigatorOptions = chartOptions.navigator,
		navigatorEnabled = navigatorOptions.enabled,
		navigatorLeft,
		navigatorSeries,
		scrollbarOptions = chartOptions.scrollbar,
		scrollbarEnabled = scrollbarOptions.enabled,
		grabbedLeft,
		grabbedRight,
		grabbedCenter,
		otherHandlePos,
		dragOffset,
		hasDragged,
		xAxis,
		yAxis,
		zoomedMin,
		zoomedMax,
		range,

		bodyStyle = document.body.style,
		defaultBodyCursor,

		handlesOptions = navigatorOptions.handles,
		height = navigatorEnabled ? navigatorOptions.height : 0,
		outlineWidth = navigatorOptions.outlineWidth,
		scrollbarHeight = scrollbarEnabled ? scrollbarOptions.height : 0,
		outlineHeight = height + scrollbarHeight,
		barBorderRadius = scrollbarOptions.barBorderRadius,
		top = navigatorOptions.top || chart.chartHeight - height - scrollbarHeight - chartOptions.chart.spacingBottom,
		halfOutline = outlineWidth / 2,
		outlineTop,
		plotLeft,
		plotWidth,
		rendered,
		baseSeriesOption = navigatorOptions.baseSeries,
		baseSeries = chart.series[baseSeriesOption] ||
			(typeof baseSeriesOption === 'string' && chart.get(baseSeriesOption)) ||
			chart.series[0],

		// element wrappers
		leftShade,
		rightShade,
		outline,
		handles = [],
		scrollbarGroup,
		scrollbarTrack,
		scrollbar,
		scrollbarRifles,
		scrollbarButtons = [];

	chart.resetZoomEnabled = false;

	/**
	 * Draw one of the handles on the side of the zoomed range in the navigator
	 * @param {Number} x The x center for the handle
	 * @param {Number} index 0 for left and 1 for right
	 */
	function drawHandle(x, index) {

		var attr = {
				fill: handlesOptions.backgroundColor,
				stroke: handlesOptions.borderColor,
				'stroke-width': 1
			};

		// create the elements
		if (!rendered) {

			// the group
			handles[index] = renderer.g()
				.css({ cursor: 'e-resize' })
				.attr({ zIndex: 3 })
				.add();

			// the rectangle
			renderer.rect(-4.5, 0, 9, 16, 3, 1)
				.attr(attr)
				.add(handles[index]);

			// the rifles
			renderer.path([
					'M',
					-1.5, 4,
					'L',
					-1.5,	12,
					'M',
					0.5, 4,
					'L',
					0.5, 12
				]).attr(attr)
				.add(handles[index]);
		}

		handles[index].translate(plotLeft + scrollbarHeight + parseInt(x, 10), top + height / 2 - 8);
	}

	/**
	 * Draw the scrollbar buttons with arrows
	 * @param {Number} index 0 is left, 1 is right
	 */
	function drawScrollbarButton(index) {

		if (!rendered) {

			scrollbarButtons[index] = renderer.g().add(scrollbarGroup);

			renderer.rect(
				-0.5,
				-0.5,
				scrollbarHeight + 1, // +1 to compensate for crispifying in rect method
				scrollbarHeight + 1,
				scrollbarOptions.buttonBorderRadius,
				scrollbarOptions.buttonBorderWidth
			).attr({
				stroke: scrollbarOptions.buttonBorderColor,
				'stroke-width': scrollbarOptions.buttonBorderWidth,
				fill: scrollbarOptions.buttonBackgroundColor
			}).add(scrollbarButtons[index]);

			renderer.path([
				'M',
				scrollbarHeight / 2 + (index ? -1 : 1), scrollbarHeight / 2 - 3,
				'L',
				scrollbarHeight / 2 + (index ? -1 : 1), scrollbarHeight / 2 + 3,
				scrollbarHeight / 2 + (index ? 2 : -2), scrollbarHeight / 2
			]).attr({
				fill: scrollbarOptions.buttonArrowColor
			}).add(scrollbarButtons[index]);
		}

		// adjust the right side button to the varying length of the scroll track
		if (index) {
			scrollbarButtons[index].attr({
				translateX: plotWidth - scrollbarHeight
			});
		}
	}

	/**
	 * Render the navigator and scroll bar
	 * @param {Number} min X axis value minimum
	 * @param {Number} max X axis value maximum
	 * @param {Number} pxMin Pixel value minimum
	 * @param {Number} pxMax Pixel value maximum
	 */
	function render(min, max, pxMin, pxMax) {
		
		var strokeWidth,
			scrollbarStrokeWidth = scrollbarOptions.barBorderWidth,
			centerBarX;
			

		outlineTop = top + halfOutline;
		plotLeft = chart.plotLeft;
		plotWidth = chart.plotWidth;
		navigatorLeft = plotLeft + scrollbarHeight;

		pxMin = pick(pxMin,	xAxis.translate(min));
		pxMax = pick(pxMax, xAxis.translate(max));

		// set the scroller x axis extremes to reflect the total
		if (rendered && xAxis.getExtremes) {
			var newExtremes = chart.xAxis[0].getExtremes(),
				oldExtremes = xAxis.getExtremes();

			if (newExtremes.dataMin !== oldExtremes.min ||
					newExtremes.dataMax !== oldExtremes.max) {
				xAxis.setExtremes(newExtremes.dataMin, newExtremes.dataMax);
			}
		}

		// handles are allowed to cross
		zoomedMin = parseInt(mathMin(pxMin, pxMax), 10);
		zoomedMax = parseInt(mathMax(pxMin, pxMax), 10);
		range = zoomedMax - zoomedMin;

		// on first render, create all elements
		if (!rendered) {

			if (navigatorEnabled) {

				leftShade = renderer.rect()
					.attr({
						fill: navigatorOptions.maskFill,
						zIndex: 3
					}).add();
				rightShade = renderer.rect()
					.attr({
						fill: navigatorOptions.maskFill,
						zIndex: 3
					}).add();
				outline = renderer.path()
					.attr({
						'stroke-width': outlineWidth,
						stroke: navigatorOptions.outlineColor,
						zIndex: 3
					})
					.add();
			}

			if (scrollbarEnabled) {
				
				// draw the scrollbar group
				scrollbarGroup = renderer.g().add();

				// the scrollbar track
				strokeWidth = scrollbarOptions.trackBorderWidth;
				scrollbarTrack = renderer.rect().attr({
					y: - strokeWidth % 2 / 2,
					fill: scrollbarOptions.trackBackgroundColor,
					stroke: scrollbarOptions.trackBorderColor,
					'stroke-width': strokeWidth,
					r: scrollbarOptions.trackBorderRadius || 0,
					height: scrollbarHeight					
				}).add(scrollbarGroup);

				// the scrollbar itself
				scrollbar = renderer.rect()
					.attr({
						y: - scrollbarStrokeWidth % 2 / 2,
						height: scrollbarHeight,
						fill: scrollbarOptions.barBackgroundColor,
						stroke: scrollbarOptions.barBorderColor,
						'stroke-width': scrollbarStrokeWidth,
						rx: barBorderRadius,
						ry: barBorderRadius
					})
					.add(scrollbarGroup);

				scrollbarRifles = renderer.path()
					.attr({
						stroke: scrollbarOptions.rifleColor,
						'stroke-width': 1
					})
					.add(scrollbarGroup);
			}
		}

		// place elements
		if (navigatorEnabled) {
			leftShade.attr({
				x: navigatorLeft,
				y: top,
				width: zoomedMin,
				height: height
			});
			rightShade.attr({
				x: navigatorLeft + zoomedMax,
				y: top,
				width: plotWidth - zoomedMax - 2 * scrollbarHeight,
				height: height
			});
			outline.attr({ d: [
				'M',
				plotLeft, outlineTop, // left
				'L',
				navigatorLeft + zoomedMin - halfOutline,	outlineTop, // upper left of zoomed range
				navigatorLeft + zoomedMin - halfOutline,	outlineTop + outlineHeight, // lower left of z.r.
				navigatorLeft + zoomedMax + halfOutline,	outlineTop + outlineHeight, // lower right of z.r.
				navigatorLeft + zoomedMax + halfOutline,	outlineTop, // upper right of z.r.
				plotLeft + plotWidth, outlineTop // right
			]});
			// draw handles
			drawHandle(zoomedMin - halfOutline, 0);
			drawHandle(zoomedMax + halfOutline, 1);
		}

		// draw the scrollbar
		if (scrollbarEnabled) {

			// draw the buttons
			drawScrollbarButton(0);
			drawScrollbarButton(1);
			
			scrollbarGroup.translate(plotLeft, mathRound(outlineTop + height));

			scrollbarTrack.attr({
				width: plotWidth
			});

			scrollbar.attr({
				x: mathRound(scrollbarHeight + zoomedMin) + (scrollbarStrokeWidth % 2 / 2),
				width: range
			});

			centerBarX = scrollbarHeight + zoomedMin + range / 2 - 0.5;

			scrollbarRifles.attr({ d: [
					M,
					centerBarX - 3, scrollbarHeight / 4,
					L,
					centerBarX - 3, 2 * scrollbarHeight / 3,
					M,
					centerBarX, scrollbarHeight / 4,
					L,
					centerBarX, 2 * scrollbarHeight / 3,
					M,
					centerBarX + 3, scrollbarHeight / 4,
					L,
					centerBarX + 3, 2 * scrollbarHeight / 3
				],
				visibility: range > 12 ? VISIBLE : HIDDEN
			});
		}

		rendered = true;
	}

	/**
	 * Set up the mouse and touch events for the navigator and scrollbar
	 */
	function addEvents() {
		addEvent(chart.container, MOUSEDOWN, function(e) {
			e = chart.tracker.normalizeMouseEvent(e);
			var chartX = e.chartX,
				chartY = e.chartY,
				handleSensitivity = hasTouch ? 10 : 7,
				left,
				isOnNavigator;

			if (chartY > top && chartY < top + height + scrollbarHeight) { // we're vertically inside the navigator
				isOnNavigator = !scrollbarEnabled || chartY < top + height;

				// grab the left handle
				if (isOnNavigator && math.abs(chartX - zoomedMin - navigatorLeft) < handleSensitivity) {
					grabbedLeft = true;
					otherHandlePos = zoomedMax;
				}

				// grab the right handle
				else if (isOnNavigator && math.abs(chartX - zoomedMax - navigatorLeft) < handleSensitivity) {
					grabbedRight = true;
					otherHandlePos = zoomedMin;
				}

				// grab the zoomed range
				else if (chartX > navigatorLeft + zoomedMin && chartX < navigatorLeft + zoomedMax) {
					grabbedCenter = chartX;
					defaultBodyCursor = bodyStyle.cursor;
					bodyStyle.cursor = 'ew-resize';

					dragOffset = chartX - zoomedMin;
				}

				// click on the shaded areas
				else if (chartX > plotLeft && chartX < plotLeft + plotWidth) {

					if (isOnNavigator) { // center around the clicked point
						left = chartX - navigatorLeft - range / 2;
					} else { // click on scrollbar
						if (chartX < navigatorLeft) { // click left scrollbar button
							left = zoomedMin - mathMin(10, range);
						} else if (chartX > plotLeft + plotWidth - scrollbarHeight)  {
							left = zoomedMin + mathMin(10, range);
						} else {
							// shift the scrollbar by one range
							left = chartX < navigatorLeft + zoomedMin ? // on the left
								zoomedMin - range :
								zoomedMax;
						}
					}
					if (left < 0) {
						left = 0;
					} else if (left + range > plotWidth - 2 * scrollbarHeight) {
						left = plotWidth - range - 2 * scrollbarHeight;
					}
					chart.xAxis[0].setExtremes(
						xAxis.translate(left, true),
						xAxis.translate(left + range, true),
						true,
						false
					);
				}
			}
			if (e.preventDefault) { // tries to drag object when clicking on the shades
				e.preventDefault();
			}
		});

		addEvent(chart.container, MOUSEMOVE, function(e) {
			e = chart.tracker.normalizeMouseEvent(e);
			var chartX = e.chartX;

			// validation for handle dragging
			if (chartX < navigatorLeft) {
				chartX = navigatorLeft;
			} else if (chartX > plotLeft + plotWidth - scrollbarHeight) {
				chartX = plotLeft + plotWidth - scrollbarHeight;
			}

			// drag left handle
			if (grabbedLeft) {
				hasDragged = true;
				render(0, 0, chartX - navigatorLeft, otherHandlePos);

			// drag right handle
			} else if (grabbedRight) {
				hasDragged = true;
				render(0, 0, otherHandlePos, chartX - navigatorLeft);

			// drag scrollbar or open area in navigator
			} else if (grabbedCenter) {
				hasDragged = true;
				if (chartX < dragOffset) { // outside left
					chartX = dragOffset;
				} else if (chartX > plotWidth + dragOffset - range - 2 * scrollbarHeight) { // outside right
					chartX = plotWidth + dragOffset - range - 2 * scrollbarHeight;
				}

				render(0, 0, chartX - dragOffset, chartX - dragOffset + range);
			}
		});

		addEvent(document, MOUSEUP, function() {
			if (hasDragged) {
				chart.xAxis[0].setExtremes(
					xAxis.translate(zoomedMin, true),
					xAxis.translate(zoomedMax, true),
					true,
					false
				);
			}
			grabbedLeft = grabbedRight = grabbedCenter = hasDragged = dragOffset = null;
			bodyStyle.cursor = defaultBodyCursor;
		});
	}

	/**
	 * Initiate the Scroller object
	 */
	function init() {
		var xAxisIndex = chart.xAxis.length,
			yAxisIndex = chart.yAxis.length;

		// make room below the chart
		chart.extraBottomMargin = outlineHeight + navigatorOptions.margin;

		if (navigatorEnabled) {
			var baseOptions = baseSeries.options,
				navigatorSeriesOptions,
				data = baseOptions.data;

			baseOptions.data = null; // remove it to prevent merging one by one

			navigatorSeriesOptions = merge(baseSeries.options, navigatorOptions.series, {
				threshold: null, // docs
				clip: false, // docs
				enableMouseTracking: false,
				group: 'nav', // for columns
				padXAxis: false,
				xAxis: xAxisIndex,
				yAxis: yAxisIndex,
				name: 'Navigator',
				showInLegend: false
			});

			baseOptions.data = navigatorSeriesOptions.data = data;

			// add the series
			navigatorSeries = chart.initSeries(navigatorSeriesOptions);

			// respond to updated data in the base series
			// todo: use similiar hook when base series is not yet initialized
			addEvent(baseSeries, 'updatedData', function() {
				var baseExtremes = baseSeries.xAxis.getExtremes(),
					range = baseExtremes.max - baseExtremes.min,
					stickToMax = baseExtremes.max >=
						navigatorSeries.xData[navigatorSeries.xData.length - 1],
					stickToMin = baseExtremes.min - range <=
						navigatorSeries.xData[0],
					newMax,
					newMin;

				// set the navigator series data to the new data of the base series
				navigatorSeries.options.pointStart = baseSeries.xData[0];
				navigatorSeries.setData(baseSeries.options.data);

				// if the selection is already at the max, move it to the right as new data
				// comes in
				if (stickToMax) {
					newMax = baseExtremes.dataMax;
					baseSeries.xAxis.setExtremes(newMax - range, newMax);
				} else if (stickToMin) {
					newMin = baseExtremes.dataMin;
					baseSeries.xAxis.setExtremes(newMin, newMin + range);
				// if not, just move the scroller window to reflect the new series data
				} else {
					render(
						mathMax(baseExtremes.min, baseExtremes.dataMin),
						mathMin(baseExtremes.max, baseExtremes.dataMax)
					);

				}
			});

			// an x axis is required for scrollbar also
			xAxis = new chart.Axis(merge(navigatorOptions.xAxis, {
				isX: true,
				type: 'datetime',
				index: xAxisIndex,
				height: height, // docs + width
				top: top, // docs + left
				offset: 0,
				offsetLeft: scrollbarHeight, // docs
				offsetRight: -scrollbarHeight, // docs
				startOnTick: false,
				endOnTick: false,
				minPadding: 0,
				maxPadding: 0,
				zoomEnabled: false
			}));

			yAxis = new chart.Axis(merge(navigatorOptions.yAxis, {
				alignTicks: false, // docs
				height: height,
				top: top,
				offset: 0,
				index: yAxisIndex,
				zoomEnabled: false
			}));

		// in case of scrollbar only, fake an x axis to get translation
		} else {
			xAxis = {
				translate: function(value, reverse) {
					var ext = baseSeries.xAxis.getExtremes(),
						scrollTrackWidth = chart.plotWidth - 2 * scrollbarHeight,
						dataMin = ext.dataMin,
						valueRange = ext.dataMax - dataMin;

					return reverse ?
						// from pixel to value
						(value * valueRange / scrollTrackWidth) + dataMin :
						// from value to pixel
						scrollTrackWidth * (value - dataMin) / valueRange;
				}
			};
		}

		addEvents();
	}


	// Run scroller
	init();

	// Expose
	return {
		render: render
	};

}

/* ****************************************************************************
 * End Scroller code														  *
 *****************************************************************************/

/* ****************************************************************************
 * Start Range Selector code												  *
 *****************************************************************************/
extend(defaultOptions, {
	rangeSelector: {
		// enabled: true,
		// buttons: {Object}
		// buttonTheme: {
		//	states: {
		//		hover: {},
		//		select: {}
		//	}
		// },
		// inputEnabled: true,
		// inputStyle: {}
		// labelStyle: {}
		// selected: undefined
		// todo:
		// - button styles for normal, hover and select state
		// - CSS text styles
		// - styles for the inputs and labels
	}
});
defaultOptions.lang = merge(defaultOptions.lang, {
	rangeSelectorZoom: 'Zoom',
	rangeSelectorFrom: 'From:',
	rangeSelectorTo: 'To:'
});

/**
 * The object constructor for the range selector
 * @param {Object} chart
 */
function RangeSelector(chart) {
	var renderer = chart.renderer,
		rendered,
		container = chart.container,
		lang = defaultOptions.lang,
		div,
		leftBox,
		rightBox,
		selected,
		buttons = [],
		buttonOptions,
		options,
		defaultButtons = [{
			type: 'month',
			count: 1,
			text: '1m'
		}, {
			type: 'month',
			count: 3,
			text: '3m'
		}, {
			type: 'month',
			count: 6,
			text: '6m'
		}, {
			type: 'ytd',
			text: 'YTD'
		}, {
			type: 'year',
			count: 1,
			text: '1y'
		}, {
			type: 'all',
			text: 'All'
		}];
		chart.resetZoomEnabled = false;

	/**
	 * The method to run when one of the buttons in the range selectors is clicked
	 * @param {Number} i The index of the button
	 * @param {Object} rangeOptions
	 * @param {Boolean} redraw
	 */
	function clickButton(i, rangeOptions, redraw) {

		var baseAxis = chart.xAxis[0],
			extremes = baseAxis && baseAxis.getExtremes(),
			now,
			dataMin = extremes && extremes.dataMin,
			dataMax = extremes && extremes.dataMax,
			newMin,
			newMax = baseAxis && mathMin(extremes.max, dataMax),
			date = new Date(newMax),
			type = rangeOptions.type,
			count = rangeOptions.count,
			range,
			rangeMin,
			year,
			// these time intervals have a fixed number of milliseconds, as opposed
			// to month, ytd and year
			fixedTimes = {
				millisecond: 1,
				second: 1000,
				minute: 60 * 1000,
				hour: 3600 * 1000,
				day: 24 * 3600 * 1000,
				week: 7 * 24 * 3600 * 1000
			};

		// chart has no data, base series is removed
		if (dataMin === null || dataMax === null) {
			return;
		}

		if (fixedTimes[type]) {
			range = fixedTimes[type] * count;
			newMin = mathMax(newMax - range, dataMin);
		}
		else if (type === 'month') {
			date.setMonth(date.getMonth() - count);
			newMin = mathMax(date.getTime(), dataMin);
			range = 30 * 24 * 3600 * 1000 * count;
		}
		else if (type === 'ytd') {
			date = new Date(0);			
			now = new Date();
			year = now.getFullYear();
			date.setFullYear(year);
			
			// workaround for IE6 bug, which sets year to next year instead of current
			if (String(year) !== dateFormat('%Y', date)) {
				date.setFullYear(year - 1);
			}
			
			newMin = rangeMin = mathMax(dataMin || 0, date.getTime());
			now = now.getTime();
			newMax = mathMin(dataMax || now, now);
		}
		else if (type === 'year') {
			date.setFullYear(date.getFullYear() - count);
			newMin = mathMax(dataMin, date.getTime());
			range = 365 * 24 * 3600 * 1000 * count;
		}
		else if (type === 'all' && baseAxis) {
			newMin = dataMin;
			newMax = dataMax;
		}

		// mark the button pressed
		if (buttons[i]) {
			buttons[i].setState(2);
		}

		// update the chart
		if (!baseAxis) { // axis not yet instanciated
			chart.options.xAxis = merge(
				chart.options.xAxis, {
					//zoomedRange: {
						range: range,
						min: rangeMin
					//}
				}
			);
			selected = i;

		} else { // existing axis object; after render time
			setTimeout(function() { // make sure the visual state is set before the heavy process begins
				baseAxis.setExtremes(
					newMin,
					newMax,
					pick(redraw, 1),
					0
				);
				selected = i;
			}, 1);
		}

	}

	/**
	 * Initialize the range selector
	 */
	function init() {
		chart.extraTopMargin = 25;
		options = chart.options.rangeSelector;
		buttonOptions = options.buttons || defaultButtons;
		selected = options.selected;

		addEvent(container, MOUSEDOWN, function() {

			if (leftBox) {
				leftBox.blur();
			}
			if (rightBox) {
				rightBox.blur();
			}
		});

		// zoomed range based on a pre-selected button index
		if (selected !== UNDEFINED && buttonOptions[selected]) {
			clickButton(selected, buttonOptions[selected], false);
		}

		// normalize the pressed button whenever a new range is selected
		addEvent(chart, 'load', function() {
			addEvent(chart.xAxis[0], 'setExtremes', function() {
				if (buttons[selected]) {
					buttons[selected].setState(0);
				}
			});
		});
	}


	/**
	 * Set the internal and displayed value of a HTML input for the dates
	 * @param {Object} input
	 * @param {Number} time
	 */
	function setInputValue(input, time) {
		var format = input.hasFocus ? '%Y-%m-%d' : '%b %e, %Y';
		if (time) {
			input.HCTime = time;
		}
		input.value = dateFormat(format, input.HCTime);
	}

	/**
	 * Draw either the 'from' or the 'to' HTML input box of the range selector
	 * @param {Object} name
	 */
	function drawInput(name) {
		var isMin = name === 'min',
			input;

		// create the text label
		createElement('span', {
			innerHTML: lang[isMin ? 'rangeSelectorFrom' : 'rangeSelectorTo']
		}, options.labelStyle, div);

		// create the input element
		input = createElement('input', {
			name: name,
			className: 'highcharts-range-selector',
			type: 'text'
		}, extend({
			width: '80px',
			height: '16px',
			border: '1px solid silver',
			marginLeft: '5px',
			marginRight: isMin ? '5px' : '0',
			textAlign: 'center'
		}, options.inputStyle), div);


		input.onfocus = input.onblur = function(e) {
			e = e || window.event;
			input.hasFocus = e.type === 'focus';
			setInputValue(input);
		};

		// handle changes in the input boxes
		input.onchange = function() {
			var inputValue = input.value,
				value = Date.parse(inputValue),
				extremes = chart.xAxis[0].getExtremes();

			// if the value isn't parsed directly to a value by the browser's Date.parse method,
			// like YYYY-MM-DD in IE, try parsing it a different way
			if (isNaN(value)) {
				value = inputValue.split('-');
				value = Date.UTC(pInt(value[0]), pInt(value[1]) - 1, pInt(value[2]));
			}
			
			if (!isNaN(value) &&
				((isMin && (value > extremes.dataMin && value < rightBox.HCTime)) ||
				(!isMin && (value < extremes.dataMax && value > leftBox.HCTime)))
			) {
				chart.xAxis[0].setExtremes(
					isMin ? value : extremes.min,
					isMin ? extremes.max : value
				);
			}
		};

		return input;
	}

	/**
	 * Render the range selector including the buttons and the inputs. The first time render
	 * is called, the elements are created and positioned. On subsequent calls, they are
	 * moved and updated.
	 * @param {Number} min X axis minimum
	 * @param {Number} max X axis maximum
	 */
	function render(min, max) {
		var chartStyle = chart.options.chart.style,
			buttonTheme = options.buttonTheme,
			inputEnabled = options.inputEnabled !== false,
			states = buttonTheme && buttonTheme.states;

		// create the elements
		if (!rendered) {
			renderer.text(lang.rangeSelectorZoom, chart.plotLeft, chart.plotTop - 10)
				.css(options.labelStyle)
				.add();
			
			each(buttonOptions, function(rangeOptions, i) {
				buttons[i] = renderer.button(
					rangeOptions.text,
					chart.plotLeft + 50 +  i * 30,
					chart.plotTop - 25,
					function() {
						clickButton(i, rangeOptions);
						this.isActive = true;
					},
					extend(buttonTheme, {
						padding: 1,
						r: 0
					}),
					states && states.hover,
					states && states.select
				)
				.attr({
					width: 28,
					height: 16
				})
				.css({
					textAlign: 'center'
				})
				.add();

				if (selected === i) {
					buttons[i].setState(2);
				}

			});

			// first create a wrapper outside the container in order to make
			// the inputs work and make export correct
			if (inputEnabled) {
				div = createElement('div', null, {
					position: 'relative',
					height: 0,
					fontFamily: chartStyle.fontFamily,
					fontSize: chartStyle.fontSize
				}, container.parentNode);

				// create an absolutely positionied div to keep the inputs
				div = createElement('div', null, extend({
					position: 'absolute',
					top: (-chart.chartHeight + chart.plotTop - 25) +'px',
					right: (chart.chartWidth - chart.plotLeft - chart.plotWidth) + 'px'
				}, options.inputBoxStyle), div);

				leftBox = drawInput('min');

				rightBox = drawInput('max');
			}
		}

		if (inputEnabled) {
			setInputValue(leftBox, min);
			setInputValue(rightBox, max);
		}


		rendered = true;
	}



	// Run RangeSelector
	init();

	// Expose
	return {
		render: render
	};
}

/* ****************************************************************************
 * End Range Selector code													*
 *****************************************************************************/

/*addEvent(Chart.prototype, 'init', function(e) {
	var chart = e.target,
		chartOptions = chart.options;

	// initiate the range selector
	if (chartOptions.rangeSelector.enabled) {
		chart.rangeSelector = new RangeSelector(chart);
	}
});
addEvent(Chart.prototype, 'beforeRender', function(e) {
	var chart = e.target,
		chartOptions = chart.options;

	// initiate the scroller
	if (chartOptions.navigator.enabled || chartOptions.scrollbar.enabled) {
		chart.scroller = new Scroller(chart);
	}
});*/

Chart.prototype.callbacks.push(function(chart) {
	var extremes,
		scroller = chart.scroller,
		rangeSelector = chart.rangeSelector;

	function renderScroller() {
		extremes = chart.xAxis[0].getExtremes();
		scroller.render(
			mathMax(extremes.min, extremes.dataMin),
			mathMin(extremes.max, extremes.dataMax)
		);
	}

	function renderRangeSelector() {
		extremes = chart.xAxis[0].getExtremes();
		rangeSelector.render(extremes.min, extremes.max);
	}

	// initiate the scroller
	if (scroller) {

		// redraw the scroller on setExtremes
		addEvent(chart.xAxis[0], 'setExtremes', function(e) {
			scroller.render(e.min, e.max);
		});

		// redraw the scroller chart resize
		addEvent(chart, 'resize', renderScroller);


		// do it now
		renderScroller();

	}
	if (rangeSelector) {



		// redraw the scroller on setExtremes
		addEvent(chart.xAxis[0], 'setExtremes', function(e) {
			rangeSelector.render(e.min, e.max);
		});

		// redraw the scroller chart resize
		addEvent(chart, 'resize', renderRangeSelector);


		// do it now
		renderRangeSelector();

	}
});

/**
 * A wrapper for Chart with all the default values for a Stock chart
 */
Highcharts.StockChart = function(options, callback) {
	var seriesOptions = options.series, // to increase performance, don't merge the data
		lineOptions = {

			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: true,
						radius: 5
					}
				}
			},
			shadow: false,
			states: {
				hover: {
					lineWidth: 2
				}
			}
		};

	// apply Y axis options to both single and multi y axes
	options.yAxis = map (splat(options.yAxis || {}), function(yAxisOptions) {
		return merge({
			labels: {
				align: 'left',
				x: 2,
				y: -2
			},
			showLastLabel: false,
			title: {
				text: null
			}
		}, yAxisOptions);
	});

	options.series = null;

	options = merge({
		chart: {
			panning: true // docs
		},
		navigator: {
			enabled: true
		},
		scrollbar: {
			enabled: true
		},
		rangeSelector: {
			enabled: true
		},
		title: {
			text: null
		},
		tooltip: {
			shared: true,
			crosshairs: true
		},
		legend: {
			enabled: false
		},
		xAxis: {
			title: {
				text: null
			},
			showLastLabel: true
		},

		plotOptions: {
			line: lineOptions,
			spline: lineOptions,
			area: lineOptions,
			areaspline: lineOptions,
			column: {
				shadow: false,
				borderWidth: 0
			}
		}

	},
	options, // user's options

	{ // forced options
		chart: {
			inverted: false
		},
		xAxis: {
			type: 'datetime',
			categories: null
		}
	});

	options.series = seriesOptions;


	return new Chart(options, callback);
};


// global variables
extend(Highcharts, {
	Chart: Chart,
	dateFormat: dateFormat,
	pathAnim: pathAnim,
	getOptions: getOptions,
	numberFormat: numberFormat,
	Point: Point,
	Color: Color,
	Renderer: Renderer,
	seriesTypes: seriesTypes,
	setOptions: setOptions,
	Series: Series,

	// Expose utility funcitons for modules
	addEvent: addEvent,
	removeEvent: removeEvent,
	createElement: createElement,
	discardElement: discardElement,
	css: css,
	each: each,
	extend: extend,
	map: map,
	merge: merge,
	pick: pick,
	splat: splat,
	extendClass: extendClass,
	version: 'Highstock 1.0 Beta'
});
}());



/*
 Highcharts Stock v1.0 Beta (2011-07-05)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function(){function ca(a,b){var d;a||(a={});for(d in b)a[d]=b[d];return a}function Yb(){for(var a=0,b=arguments,d=b.length,c={};a<d;a++)c[b[a++]]=b[a];return c}function la(a,b){return parseInt(a,b||10)}function nc(a){return typeof a==="string"}function bc(a){return typeof a==="object"}function Xc(a){return typeof a==="number"}function Yc(a,b){for(var d=a.length;d--;)if(a[d]===b){a.splice(d,1);break}}function M(a){return a!==ha&&a!==null}function Aa(a,b,d){var c,e;if(nc(b))if(M(d))a.setAttribute(b,
d);else{if(a&&a.getAttribute)e=a.getAttribute(b)}else if(M(b)&&bc(b))for(c in b)a.setAttribute(c,b[c]);return e}function oc(a){if(!a||a.constructor!==Array)a=[a];return a}function C(){var a=arguments,b,d,c=a.length;for(b=0;b<c;b++){d=a[b];if(typeof d!=="undefined"&&d!==null)return d}}function Ja(a,b){if(Zc)if(b&&b.opacity!==ha)b.filter="alpha(opacity="+b.opacity*100+")";ca(a.style,b)}function mb(a,b,d,c,e){a=Da.createElement(a);b&&ca(a,b);e&&Ja(a,{padding:0,border:Jb,margin:0});d&&Ja(a,d);c&&c.appendChild(a);
return a}function yb(a,b){var d=function(){};d.prototype=new a;ca(d.prototype,b);return d}function Qd(a,b,d,c){var e=Ra.lang;a=a;var f=isNaN(b=nb(b))?2:b;b=d===undefined?e.decimalPoint:d;c=c===undefined?e.thousandsSep:c;e=a<0?"-":"";d=String(la(a=nb(+a||0).toFixed(f)));var g=d.length>3?d.length%3:0;return e+(g?d.substr(0,g)+c:"")+d.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+c)+(f?b+nb(a-d).toFixed(f).slice(2):"")}function Rd(a,b,d,c){var e;d=C(d,1);e=a/d;if(!b){b=[1,2,2.5,5,10];if(c&&c.allowDecimals===
false)if(d===1)b=[1,2,5,10];else if(d<=0.1)b=[1/d]}for(c=0;c<b.length;c++){a=b[c];if(e<=(b[c]+(b[c+1]||b[c]))/2)break}a*=d;return a}function Sd(a,b,d,c,e){var f=[],g=Ra.global.useUTC,h=1E3/Ob,i=6E4/Ob,j=36E5/Ob,k=864E5/Ob,m=6048E5/Ob,t=2592E6/Ob,B=31556952E3/Ob,v=Yb(Td,1,Ud,h,Vd,i,Wd,j,Xd,k,Yd,m,Zd,t,$d,B),J=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",
null]],x=J[J.length-1],o=v[x[0]],s=x[1];for(e=0;e<J.length;e++){x=J[e];o=v[x[0]];s=x[1];if(J[e+1])if(a<=(o*s[s.length-1]+v[J[e+1][0]])/2)break}if(o===B&&a<5*o)s=[1,2,5];a=Rd(a/o,s);var q;b=new Date(b*Ob);b.setMilliseconds(0);if(o>=h)b.setSeconds(o>=i?0:a*Kb(b.getSeconds()/a));if(o>=i)b[ae](o>=j?0:a*Kb(b[wd]()/a));if(o>=j)b[be](o>=k?0:a*Kb(b[xd]()/a));if(o>=k)b[yd](o>=t?1:a*Kb(b[Oc]()/a));if(o>=t){b[ce](o>=B?0:a*Kb(b[$c]()/a));q=b[ad]()}if(o>=B){q-=q%a;b[de](q)}o===m&&b[yd](b[Oc]()-b[zd]()+C(c,1));
e=1;q=b[ad]();c=b.getTime()/Ob;h=b[$c]();for(i=b[Oc]();c<d;){f.push(c);if(o===B)c=bd(q+e*a,0)/Ob;else if(o===t)c=bd(q,h+e*a)/Ob;else if(!g&&(o===k||o===m))c=bd(q,h,i+e*a*(o===k?1:7));else c+=o*a;e++}f.push(c);f.unit=x;return f}function ee(){this.symbol=this.color=0}function xc(a,b){cd=C(a,b.animation)}function fe(){var a=Ra.global.useUTC;bd=a?Date.UTC:function(b,d,c,e,f,g){return(new Date(b,d,C(c,1),C(e,0),C(f,0),C(g,0))).getTime()};wd=a?"getUTCMinutes":"getMinutes";xd=a?"getUTCHours":"getHours";
zd=a?"getUTCDay":"getDay";Oc=a?"getUTCDate":"getDate";$c=a?"getUTCMonth":"getMonth";ad=a?"getUTCFullYear":"getFullYear";ae=a?"setUTCMinutes":"setMinutes";be=a?"setUTCHours":"setHours";yd=a?"setUTCDate":"setDate";ce=a?"setUTCMonth":"setMonth";de=a?"setUTCFullYear":"setFullYear"}function dd(a){ed||(ed=mb(cc));a&&ed.appendChild(a);ed.innerHTML=""}function fd(){}function gd(a,b){function d(l){function u(p,w){this.pos=p;this.minor=w;this.isNew=true;w||this.addLabel()}function G(p){if(p){this.options=p;
this.id=p.id}return this}function I(p,w,H){this.isNegative=w;this.options=p;this.x=H;this.alignOptions={align:p.align||(ya?w?"left":"right":"center"),verticalAlign:p.verticalAlign||(ya?"middle":w?"bottom":"top"),y:C(p.y,ya?4:w?14:-6),x:C(p.x,ya?w?-6:6:0)};this.textAlign=p.textAlign||(ya?w?"right":"left":"center")}function da(){var p=[],w=[],H,K;za=ub=null;Zb=[];A(Ka,function(E){var ia=E.options;K=false;A(["xAxis","yAxis"],function(Pc){if(E.isCartesian&&(Pc==="xAxis"&&Ba||Pc==="yAxis"&&!Ba)&&(ia[Pc]===
l.index||ia[Pc]===ha&&l.index===0)){E[Pc]=O;Zb.push(E);if(E.options.padXAxis)ge=true;K=true}});if(!E.visible&&o.ignoreHiddenSeries)K=false;if(K){var W,fa,jb,Ya,Q;if(!Ba){W=ia.stacking;hd=W==="percent";if(W){Ya=E.type+C(ia.stack,"");Q="-"+Ya;E.stackKey=Ya;fa=p[Ya]||[];p[Ya]=fa;jb=w[Q]||[];w[Q]=jb}if(hd){za=0;ub=99}}if(E.isCartesian){var wa,zb,vb,ob,hb=ia.threshold,Pb,yc=[],he=0;if(Ba){wa=E.xData;za=Ea(C(za,wa[0]),Ea.apply(na,wa));ub=ja(C(ub,wa[0]),ja.apply(na,wa))}else{var Ad,id,zc;E.processData();
wa=E.processedXData;zb=E.processedYData;Pb=zb.length;for(H=0;H<Pb;H++){ob=zb[H];if(ob!==null&&ob!==ha){if(W){vb=wa[H];id=(Ad=ob<0)?jb:fa;zc=Ad?Q:Ya;ob=id[vb]=M(id[vb])?id[vb]+ob:ob;R[zc]||(R[zc]={});R[zc][vb]||(R[zc][vb]=new I(l.stackLabels,Ad,vb));R[zc][vb].setTotal(ob)}if(vb=ob.length)for(;vb--;)yc[he++]=ob[vb];else yc[he++]=ob}}if(!hd){za=Ea(C(za,yc[0]),Ea.apply(na,yc));ub=ja(C(ub,yc[0]),ja.apply(na,yc))}if(E.useThreshold&&hb!==null)if(za>=hb){za=hb;ie=true}else if(ub<hb){ub=hb;je=true}}}}})}function qa(p){var w;
w=p;Ac=C(Ac,na.pow(10,Kb(na.log(kb)/na.LN10)));if(Ac<1){w=N(1/Ac)*10;w=N(p*w)/w}return w}function T(p){var w,H,K,E=l.tickInterval,ia=l.tickPixelInterval;w=l.maxZoom||(Ba&&!M(l.min)&&!M(l.max)?Ea(n.smallestInterval*5,ub-za):null);Z=aa?Qb:Rb;if(dc){H=n[Ba?"xAxis":"yAxis"][l.linkedTo];K=H.getExtremes();ka=C(K.min,K.dataMin);oa=C(K.max,K.dataMax)}else{ka=C(Bc,l.min,za);oa=C(Cc,l.max,ub)}if(z){ka=na.log(ka)/na.LN10;oa=na.log(oa)/na.LN10}if(ec){Bc=ka=oa-ec;Cc=oa;if(p)ec=null}if(oa-ka<w){p=(w-oa+ka)/2;ka=
ja(ka-p,C(l.min,ka-p),za);oa=Ea(ka+w,C(l.max,ka+w),ub)}if(!lb&&!hd&&!dc&&M(ka)&&M(oa)){w=oa-ka||1;if(!M(l.min)&&!M(Bc)&&ke&&(za<0||!ie))ka-=w*ke;if(!M(l.max)&&!M(Cc)&&le&&(ub>0||!je))oa+=w*le}kb=ka===oa||ka===undefined||oa===undefined?1:dc&&!E&&ia===H.options.tickPixelInterval?H.tickInterval:C(E,lb?1:(oa-ka)*ia/(Z||1));if(!D){Ac=na.pow(10,Kb(na.log(kb)/na.LN10));M(l.tickInterval)||(kb=Rd(kb,null,Ac,l))}O.tickInterval=kb;jd=l.minorTickInterval==="auto"&&kb?kb/5:l.minorTickInterval;if(D){xa=Sd(kb,ka,
oa,l.startOfWeek);kd=l.dateTimeLabelFormats[xa.unit[0]]}else{E=qa(Kb(ka/kb)*kb);H=qa(ld(oa/kb)*kb);xa=[];for(E=qa(E);E<=H;){xa.push(E);E=qa(E+kb)}}if(!dc){if(lb||ge){H=(lb?1:kb)*0.5;if(lb||!M(C(l.min,Bc)))ka-=H;if(lb||!M(C(l.max,Cc)))oa+=H}H=xa[0];E=xa[xa.length-1];if(l.startOnTick)ka=H;else ka>H&&xa.shift();if(l.endOnTick)oa=E;else oa<E&&xa.pop();$b||($b={x:0,y:0});if(!D&&xa.length>$b[ma]&&l.alignTicks!==false)$b[ma]=xa.length}}function ta(){var p,w;Qc=ka;me=oa;da();T();Ab=ba;ba=Z/(oa-ka||1);if(!Ba)for(p in R)for(w in R[p])R[p][w].cum=
R[p][w].total;if(!O.isDirty)O.isDirty=ka!==Qc||oa!==me}function Za(p){p=(new G(p)).render();fc.push(p);return p}function La(){var p=l.title,w=l.stackLabels,H=l.alternateGridColor,K=l.lineWidth,E,ia,W=n.hasRendered,fa=W&&M(Qc)&&!isNaN(Qc);if(Zb.length&&M(ka)&&M(oa)||dc){if(jd&&!lb)for(E=ka+(xa[0]-ka)%jd;E<=oa;E+=jd){pc[E]||(pc[E]=new u(E,true));fa&&pc[E].isNew&&pc[E].render(null,true);pc[E].isActive=true;pc[E].render()}A(xa,function(Q,wa){if(!dc||Q>=ka&&Q<=oa){fa&&Bb[Q].isNew&&Bb[Q].render(wa,true);
Bb[Q].isActive=true;Bb[Q].render(wa)}});H&&A(xa,function(Q,wa){if(wa%2===0&&Q<oa){Dc[Q]||(Dc[Q]=new G);Dc[Q].options={from:Q,to:xa[wa+1]!==ha?xa[wa+1]:oa,color:H};Dc[Q].render();Dc[Q].isActive=true}});W||A((l.plotLines||[]).concat(l.plotBands||[]),function(Q){fc.push((new G(Q)).render())})}A([Bb,pc,Dc],function(Q){for(var wa in Q)if(Q[wa].isActive)Q[wa].isActive=false;else{Q[wa].destroy();delete Q[wa]}});if(K){E=Sa+(Fa?Qb:0)+L;ia=Ma-gc-(Fa?Rb:0)+L;E=pa.crispLine([$a,aa?Sa:E,aa?ia:Gb,Ga,aa?Va-P:E,
aa?ia:Ma-gc],K);if(ab)ab.animate({d:E});else ab=pa.path(E).attr({stroke:l.lineColor,"stroke-width":K,zIndex:7}).add()}if(O.axisTitle){E=aa?Sa:Gb;K=la(p.style.fontSize||12);E={low:E+(aa?0:Z),middle:E+Z/2,high:E+(aa?Z:0)}[p.align];K=(aa?Gb+Rb:Sa)+(aa?1:-1)*(Fa?-1:1)*Bd+(Wa===2?K:0);O.axisTitle[W?"animate":"attr"]({x:aa?E:K+(Fa?Qb:0)+L+(p.x||0),y:aa?K-(Fa?Rb:0)+L:E+(p.y||0)})}if(w&&w.enabled){var jb,Ya;w=O.stackTotalGroup;if(!w)O.stackTotalGroup=w=pa.g("stack-labels").attr({visibility:Lb,zIndex:6}).translate(ga,
ea).add();for(jb in R){p=R[jb];for(Ya in p)p[Ya].render(w)}}O.isDirty=false}function pb(p){for(var w=fc.length;w--;)fc[w].id===p&&fc[w].destroy()}var Ba=l.isX,Fa=l.opposite,aa=ya?!Ba:Ba,Wa=aa?Fa?0:2:Fa?1:3,R={};l=Y(Ba?md:Cd,[ze,Ae,ne,Be][Wa],l);var O=this,F=l.type,D=F==="datetime",z=F==="logarithmic",L=l.offset||0,ma=Ba?"x":"y",Z,ba,Na,Ab,Sa,Gb,Qb,Rb,gc,P,ua,va,Ca,cb,ab,za,ub,Zb,ec=l.range,Bc,Cc,oa=null,ka=null,Qc,me,ke=l.minPadding,le=l.maxPadding,dc=M(l.linkedTo),ie,je,hd;F=l.events;var Dd,ge,fc=
[],kb,jd,Ac,xa,Bb={},pc={},Dc={},Ec,Fc,Bd,kd,lb=l.categories,Ce=l.labels.formatter||function(){var p=this.value;return kd?Gc(kd,p):kb%1E6===0?p/1E6+"M":kb%1E3===0?p/1E3+"k":!lb&&p>=1E3?Qd(p,0):p},nd=aa&&l.labels.staggerLines,qc=l.reversed,rc=lb&&l.tickmarkPlacement==="between"?0.5:0;u.prototype={attachLabel:function(){var p=this.label;if(p&&!this.added){p.deferUpdateTransform=true;p.add(Ca)}},updateTransformLabel:function(){var p=this.label;if(p){p.deferUpdateTransform=false;p.updateTransform()}},
computeBBox:function(){var p=this.label,w;if(p){w=p.getBBox();p.elemWidth=w.width;p.elemHeight=w.height}},addLabel:function(){var p=this.pos,w=l.labels,H=!(p===ka&&!C(l.showFirstLabel,1)||p===oa&&!C(l.showLastLabel,0)),K=lb&&aa&&lb.length&&!w.step&&!w.staggerLines&&!w.rotation&&db/lb.length||!aa&&db/2,E=this.label;p=Ce.call({isFirst:p===xa[0],isLast:p===xa[xa.length-1],dateTimeLabelFormat:kd,value:lb&&lb[p]?lb[p]:p});K=K&&{width:ja(1,N(K-2*(w.padding||10)))+qb};K=ca(K,w.style);if(M(E))E&&E.attr({text:p}).css(K);
else this.label=M(p)&&H&&w.enabled?pa.text(p,0,0).attr({align:w.align,rotation:w.rotation}).css(K):null},getLabelSize:function(){var p=this.label;return p?(this.labelBBox=p.getBBox())[aa?"height":"width"]:0},render:function(p,w){var H=!this.minor,K=this.label,E=this.pos,ia=l.labels,W=this.gridLine,fa=H?l.gridLineWidth:l.minorGridLineWidth,jb=H?l.gridLineColor:l.minorGridLineColor,Ya=H?l.gridLineDashStyle:l.minorGridLineDashStyle,Q=this.mark,wa=H?l.tickLength:l.minorTickLength,zb=H?l.tickWidth:l.minorTickWidth||
0,vb=H?l.tickColor:l.minorTickColor,ob=H?l.tickPosition:l.minorTickPosition;H=ia.step;var hb=w&&sc||Ma,Pb;Pb=aa?ua(E+rc,null,null,w)+Na:Sa+L+(Fa?(w&&Wb||Va)-P-Sa:0);hb=aa?hb-gc+L-(Fa?Rb:0):hb-ua(E+rc,null,null,w)-Na;if(fa){E=va(E+rc,fa,w);if(W===ha){W={stroke:jb,"stroke-width":fa};if(Ya)W.dashstyle=Ya;this.gridLine=W=fa?pa.path(E).attr(W).add(cb):null}W&&E&&W.animate({d:E})}if(zb){if(ob==="inside")wa=-wa;if(Fa)wa=-wa;fa=pa.crispLine([$a,Pb,hb,Ga,Pb+(aa?0:-wa),hb+(aa?wa:0)],zb);if(Q)Q.animate({d:fa});
else this.mark=pa.path(fa).attr({stroke:vb,"stroke-width":zb}).add(Ca)}if(K&&!isNaN(Pb)){Pb=Pb+ia.x-(rc&&aa?rc*ba*(qc?-1:1):0);hb=hb+ia.y-(rc&&!aa?rc*ba*(qc?1:-1):0);M(ia.y)||(hb+=la(K.styles.lineHeight)*0.9-K.getBBox().height/2);if(nd)hb+=p/(H||1)%nd*16;if(H)K[p%H?"hide":"show"]();K[this.isNew?"attr":"animate"]({x:Pb,y:hb})}this.isNew=false},destroy:function(){for(var p in this)this[p]&&this[p].destroy&&this[p].destroy()}};G.prototype={render:function(){var p=this,w=p.options,H=w.label,K=p.label,
E=w.width,ia=w.to,W,fa=w.from,jb=w.dashStyle,Ya=p.svgElem,Q=[],wa,zb,vb=w.color;zb=w.zIndex;var ob=w.events;if(E){Q=va(w.value,E);w={stroke:vb,"stroke-width":E};if(jb)w.dashstyle=jb}else if(M(fa)&&M(ia)){fa=ja(fa,ka);ia=Ea(ia,oa);W=va(ia);if((Q=va(fa))&&W)Q.push(W[4],W[5],W[1],W[2]);else Q=null;w={fill:vb}}else return;if(M(zb))w.zIndex=zb;if(Ya)if(Q)Ya.animate({d:Q},null,Ya.onGetPath);else{Ya.hide();Ya.onGetPath=function(){Ya.show()}}else if(Q&&Q.length){p.svgElem=Ya=pa.path(Q).attr(w).add();if(ob){jb=
function(hb){Ya.on(hb,function(Pb){ob[hb].apply(p,[Pb])})};for(wa in ob)jb(wa)}}if(H&&M(H.text)&&Q&&Q.length&&Qb>0&&Rb>0){H=Y({align:aa&&W&&"center",x:aa?!W&&4:10,verticalAlign:!aa&&W&&"middle",y:aa?W?16:10:W?6:-4,rotation:aa&&!W&&90},H);if(!K)p.label=K=pa.text(H.text,0,0).attr({align:H.textAlign||H.align,rotation:H.rotation,zIndex:zb}).css(H.style).add();W=[Q[1],Q[4],C(Q[6],Q[1])];Q=[Q[2],Q[5],C(Q[7],Q[2])];wa=Ea.apply(na,W);zb=Ea.apply(na,Q);K.align(H,false,{x:wa,y:zb,width:ja.apply(na,W)-wa,height:ja.apply(na,
Q)-zb});K.show()}else K&&K.hide();return p},destroy:function(){for(var p in this){this[p]&&this[p].destroy&&this[p].destroy();delete this[p]}Yc(fc,this)}};I.prototype={setTotal:function(p){this.cum=this.total=p},render:function(p){var w=this.options.formatter.call(this);if(this.label)this.label.attr({text:w,visibility:Cb});else this.label=n.renderer.text(w,0,0).css(this.options.style).attr({align:this.textAlign,rotation:this.options.rotation,visibility:Cb}).add(p)},setOffset:function(p,w){var H=this.isNegative,
K=O.translate(this.total),E=O.translate(0);E=nb(K-E);var ia=n.xAxis[0].translate(this.x)+p,W=n.plotHeight;H={x:ya?H?K:K-E:ia,y:ya?W-ia-w:H?W-K-E:W-K,width:ya?E:w,height:ya?w:E};this.label&&this.label.align(this.alignOptions,null,H).attr({visibility:Lb})}};ua=function(p,w,H,K,E){var ia=1,W=0,fa=K?Ab:ba;K=K?Qc:ka;fa||(fa=ba);if(H){ia*=-1;W=Z}if(qc){ia*=-1;W-=ia*Z}if(w){if(qc)p=Z-p;p=p/fa+K;if(z&&E)p=na.pow(10,p)}else{if(z&&E)p=na.log(p)/na.LN10;p=ia*(p-K)*fa+W}return p};va=function(p,w,H){var K,E,ia;
p=ua(p,null,null,H);var W=H&&sc||Ma,fa=H&&Wb||Va,jb;H=E=N(p+Na);K=ia=N(W-p-Na);if(isNaN(p))jb=true;else if(aa){K=Gb;ia=W-gc;if(H<Sa||H>Sa+Qb)jb=true}else{H=Sa;E=fa-P;if(K<Gb||K>Gb+Rb)jb=true}return jb?null:pa.crispLine([$a,H,K,Ga,E,ia],w||0)};wb.push(O);n[Ba?"xAxis":"yAxis"].push(O);if(ya&&Ba&&qc===ha)qc=true;ca(O,{addPlotBand:Za,addPlotLine:Za,adjustTickAmount:function(){if($b&&!D&&!lb&&!dc&&l.alignTicks!==false){var p=Ec,w=xa.length;Ec=$b[ma];if(w<Ec){for(;xa.length<Ec;)xa.push(qa(xa[xa.length-
1]+kb));ba*=(w-1)/(Ec-1);oa=xa[xa.length-1]}if(M(p)&&Ec!==p)O.isDirty=true}},categories:lb,getExtremes:function(){return{min:ka,max:oa,dataMin:za,dataMax:ub,userMin:Bc,userMax:Cc}},getPlotLinePath:va,getThreshold:function(p){if(ka>p||p===null)p=ka;else if(oa<p)p=oa;return ua(p,0,1)},isXAxis:Ba,options:l,plotLinesAndBands:fc,getOffset:function(){var p=Zb.length&&M(ka)&&M(oa),w=0,H=0,K=l.title,E=l.labels,ia=[-1,1,1,-1][Wa],W;if(!Ca){Ca=pa.g("axis").attr({zIndex:7}).add();cb=pa.g("grid").attr({zIndex:1}).add()}Fc=
0;if(p||dc){A(xa,function(fa){if(Bb[fa])Bb[fa].addLabel();else Bb[fa]=new u(fa)});A(xa,function(fa){Bb[fa].attachLabel()});A(xa,function(fa){Bb[fa].computeBBox()});A(xa,function(fa){Bb[fa].updateTransformLabel()});A(xa,function(fa){if(Wa===0||Wa===2||{1:"left",3:"right"}[Wa]===E.align)Fc=ja(Bb[fa].getLabelSize(),Fc)});if(nd)Fc+=(nd-1)*16}else for(W in Bb){Bb[W].destroy();delete Bb[W]}if(K&&K.text){if(!O.axisTitle)O.axisTitle=pa.text(K.text,0,0).attr({zIndex:7,rotation:K.rotation||0,align:K.textAlign||
{low:"left",middle:"center",high:"right"}[K.align]}).css(K.style).add();w=O.axisTitle.getBBox()[aa?"height":"width"];H=C(K.margin,aa?5:10)}L=ia*C(l.offset,rb[Wa]);Bd=Fc+(Wa!==2&&Fc&&ia*l.labels[aa?"y":"x"])+H;rb[Wa]=ja(rb[Wa],Bd+w+ia*L)},render:La,setAxisSize:function(){var p=l.offsetLeft||0,w=l.offsetRight||0;Sa=C(l.left,ga+p);Gb=C(l.top,ea);Qb=C(l.width,db-p+w);Rb=C(l.height,eb);gc=Ma-Rb-Gb;P=Va-Qb-Sa;O.left=Sa;O.top=Gb;Z=aa?Qb:Rb;ba=Z/(oa-ka||1);Na=aa?Sa:gc},setCategories:function(p,w){O.categories=
lb=p;A(Zb,function(H){H.translate();H.setTooltipPoints(true)});O.isDirty=true;C(w,true)&&n.redraw()},setExtremes:function(p,w,H,K){H=C(H,true);Ha(O,"setExtremes",{min:p,max:w},function(){Bc=p;Cc=w;H&&n.redraw(K)})},setScale:ta,setTickPositions:T,translate:ua,redraw:function(){Hc.resetTracker&&Hc.resetTracker();La();A(fc,function(p){p.render()});A(Zb,function(p){p.isDirty=true})},removePlotBand:pb,removePlotLine:pb,reversed:qc,stacks:R});for(Dd in F)ra(O,Dd,F[Dd]);ta()}function c(){var l={};return{add:function(u,
G,I,da){if(!l[u]){G=pa.text(G,0,0).css(a.toolbar.itemStyle).align({align:"right",x:-Xb-20,y:ea+30}).on("click",da).attr({align:"right",zIndex:20}).add();l[u]=G}},remove:function(u){dd(l[u].element);l[u]=null}}}function e(l){function u(){var D=this.points||oc(this),z=D[0].series.xAxis,L=this.x;z=z&&z.options.type==="datetime";var ma=nc(L)||z,Z=D[0].series,ba;ba=ma?['<span style="font-size: 10px">'+(z?Gc("%A, %b %e, %Y",L):L)+"</span>"]:[];A(D,function(Na){Z=Na.series;ba.push(Z.tooltipFormatter&&Z.tooltipFormatter(Na)||
Na.point.tooltipFormatter(ma))});return ba.join("<br/>")}function G(D,z){R=Fa?D:(2*R+D)/3;O=Fa?z:(O+z)/2;F.attr({x:R,y:O});Ed=nb(D-R)>1||nb(z-O)>1?function(){G(D,z)}:null}function I(){if(!Fa){var D=n.hoverPoints;F.hide();A(ta,function(z){z&&z.hide()});D&&A(D,function(z){z.setState()});n.hoverPoints=null;Fa=true}}var da,qa=l.borderWidth,T=l.crosshairs,ta=[],Za=l.style,La=l.shared,pb=la(Za.padding),Ba=qa+pb,Fa=true,aa,Wa,R=0,O=0;Za.padding=0;var F=pa.label("",0,0).attr({padding:pb,fill:l.backgroundColor,
"stroke-width":qa,r:l.borderRadius,zIndex:8}).css(Za).hide().add().shadow(1);return{shared:La,refresh:function(D){var z,L,ma,Z,ba={},Na=[];ma=D.tooltipPos;z=l.formatter||u;ba=n.hoverPoints;if(La&&!(D.series&&D.series.noSharedTooltip)){Z=0;ba&&A(ba,function(Ab){Ab.setState()});n.hoverPoints=D;A(D,function(Ab){Ab.setState(Tb);Z+=Ab.plotY;Na.push(Ab.getLabelConfig())});L=D[0].plotX;Z=N(Z)/D.length;ba={x:D[0].category};ba.points=Na;D=D[0]}else ba=D.getLabelConfig();ba=z.call(ba);da=D.series;L=C(L,D.plotX);
Z=C(Z,D.plotY);z=N(ma?ma[0]:ya?db-Z:L);L=N(ma?ma[1]:ya?eb-L:Z);ma=La||!D.series.isCartesian||ib(z,L);if(ba===false||!ma)I();else{if(Fa){F.show();Fa=false}F.attr({text:ba});ma=F.getBBox();aa=ma.width;Wa=ma.height;F.attr({stroke:l.borderColor||D.color||da.color||"#606060"});z=z-aa+ga-25;L=L-Wa+ea+10;if(z<7){z=7;L-=30}if(L<ea+5)L=ea+5;else if(L+Wa>Ma)L=Ma-Wa-5;G(N(z-Ba),N(L-Ba))}if(T){T=oc(T);for(z=T.length;z--;){L=D.series[z?"yAxis":"xAxis"];if(T[z]&&L){L=L.getPlotLinePath(D[z?"y":"x"],1);if(ta[z])ta[z].attr({d:L,
visibility:Lb});else{ma={"stroke-width":T[z].width||1,stroke:T[z].color||"#C0C0C0",zIndex:2};if(T[z].dashStyle)ma.dashstyle=T[z].dashStyle;ta[z]=pa.path(L).attr(ma).add()}}}}},hide:I}}function f(l,u){function G(R){var O,F=oe&&Da.width/Da.documentElement.clientWidth-1,D,z,L;R=R||sb.event;if(!R.target)R.target=R.srcElement;if(R.originalEvent)R=R.originalEvent;O=R.touches?R.touches.item(0):R;if(R.type!=="mousemove"||sb.opera||F){D=sa;z={left:D.offsetLeft,top:D.offsetTop};for(D=D.offsetParent;D;){z.left+=
D.offsetLeft;z.top+=D.offsetTop;if(D!==Da.body&&D!==Da.documentElement){z.left-=D.scrollLeft;z.top-=D.scrollTop}D=D.offsetParent}Rc=z;D=Rc.left;z=Rc.top}if(Zc){L=R.x;O=R.y}else if(O.layerX===ha){L=O.pageX-D;O=O.pageY-z}else{L=R.layerX;O=R.layerY}if(F){L+=N((F+1)*D-D);O+=N((F+1)*z-z)}return ca(R,{chartX:L,chartY:O})}function I(R){var O={xAxis:[],yAxis:[]};A(wb,function(F){var D=F.translate,z=F.isXAxis;O[z?"xAxis":"yAxis"].push({axis:F,value:D((ya?!z:z)?R.chartX-ga:eb-R.chartY+ea,true)})});return O}
function da(){var R=l.hoverSeries,O=l.hoverPoint;O&&O.onMouseOut();R&&R.onMouseOut();Oa&&Oa.hide();Fd=null}function qa(){if(La){var R={xAxis:[],yAxis:[]},O=La.getBBox(),F=O.x-ga,D=O.y-ea;if(Za){A(wb,function(z){if(z.options.zoomEnabled!==false){var L=z.translate,ma=z.isXAxis,Z=ya?!ma:ma,ba=L(Z?F:eb-D-O.height,true,0,0,1);L=L(Z?F+O.width:eb-D,true,0,0,1);R[ma?"xAxis":"yAxis"].push({axis:z,min:Ea(ba,L),max:ja(ba,L)})}});Ha(l,"selection",R,Gd)}La=La.destroy()}Ja(sa,{cursor:"auto"});l.mouseIsDown=ac=
Za=false;Ub(Da,Hb?"touchend":"mouseup",qa)}var T,ta,Za,La,pb=o.zoomType,Ba=/x/.test(pb),Fa=/y/.test(pb),aa=Ba&&!ya||Fa&&ya,Wa=Fa&&!ya||Ba&&ya;od=function(){if(pd){pd.translate(ga,ea);ya&&pd.attr({width:l.plotWidth,height:l.plotHeight}).invert()}else l.trackerGroup=pd=pa.g("tracker").attr({zIndex:9}).add()};od();if(u.enabled)l.tooltip=Oa=e(u);(function(){var R=true;sa.onmousedown=function(F){F=G(F);l.mouseIsDown=ac=true;T=F.chartX;ta=F.chartY;ra(Da,Hb?"touchend":"mouseup",qa)};var O=function(F){if(!(F&&
F.touches&&F.touches.length>1)){F=G(F);if(!Hb)F.returnValue=false;var D=F.chartX,z=F.chartY,L=!ib(D-ga,z-ea);if(Hb&&F.type==="touchstart")if(Aa(F.target,"isTracker"))l.runTrackerClick||F.preventDefault();else!Ta&&!L&&F.preventDefault();if(L){R||da();if(D<ga)D=ga;else if(D>ga+db)D=ga+db;if(z<ea)z=ea;else if(z>ea+eb)z=ea+eb}if(ac&&F.type!=="touchstart"){Za=Math.sqrt(Math.pow(T-D,2)+Math.pow(ta-z,2));if(Za>10){var ma=ib(T-ga,ta-ea);if(Ic&&(Ba||Fa)&&ma)La||(La=pa.rect(ga,ea,aa?1:db,Wa?1:eb,0).attr({fill:"rgba(69,114,167,0.25)",
zIndex:7}).add());if(La&&aa){F=D-T;La.attr({width:nb(F),x:(F>0?0:F)+T})}if(La&&Wa){z=z-ta;La.attr({height:nb(z),y:(z>0?0:z)+ta})}if(ma&&!La&&o.panning){z=l.xAxis[0];F=z.getExtremes();ma=F.dataMin;F=F.dataMax;var Z=z.translate(T-D,true),ba=z.translate(T+db-D,true);Z>ma&&ba<F&&z.setExtremes(Z,ba,true,false);T=D;Ja(sa,{cursor:"move"})}}}else if(!L){D=l.hoverPoint;z=l.hoverSeries;var Na;ma=Va;var Ab=ya?F.chartY:F.chartX-ga;if(Oa&&u.shared&&!(z&&z.noSharedTooltip)){Z=[];ba=Ka.length;for(Na=0;Na<ba;Na++)if(Ka[Na].visible&&
Ka[Na].tooltipPoints.length&&Ka[Na].options.enableMouseTracking!==false&&!Ka[Na].noSharedTooltip){F=Ka[Na].tooltipPoints[Ab];F._dist=nb(Ab-F.plotX);ma=Ea(ma,F._dist);Z.push(F)}for(ba=Z.length;ba--;)Z[ba]._dist>ma&&Z.splice(ba,1);if(Z.length&&Z[0].plotX!==Fd){Oa.refresh(Z);Fd=Z[0].plotX}}if(z&&z.tracker)(F=z.tooltipPoints[Ab])&&F!==D&&F.onMouseOver()}return(R=L)||!Ic}};sa.onmousemove=O;ra(sa,"mouseleave",da);sa.ontouchstart=function(F){if(Ba||Fa)sa.onmousedown(F);O(F)};sa.ontouchmove=O;sa.ontouchend=
function(){Za&&da()};sa.onclick=function(F){var D=l.hoverPoint;F=G(F);F.cancelBubble=true;if(!Za)if(D&&Aa(F.target,"isTracker")){var z=D.plotX,L=D.plotY;ca(D,{pageX:Rc.left+ga+(ya?db-L:z),pageY:Rc.top+ea+(ya?eb-z:L)});Ha(D.series,"click",ca(F,{point:D}));D.firePointEvent("click",F)}else{ca(F,I(F));ib(F.chartX-ga,F.chartY-ea)&&Ha(l,"click",F)}Za=false}})();pe=setInterval(function(){Ed&&Ed()},32);ca(this,{zoomX:Ba,zoomY:Fa,resetTracker:da,normalizeMouseEvent:G})}function g(l){var u=l.type||o.type||
o.defaultSeriesType,G=fb[u],I=n.hasRendered;if(I)if(ya&&u==="column")G=fb.bar;else if(!ya&&u==="bar")G=fb.column;u=new G;u.init(n,l);if(!I&&u.inverted)ya=true;if(u.isCartesian)Ic=u.isCartesian;Ka.push(u);return u}function h(){o.alignTicks!==false&&A(wb,function(l){l.adjustTickAmount()});$b=null}function i(l){var u=n.isDirtyLegend,G,I=n.isDirtyBox,da=Ka.length,qa=da,T=n.clipRect;for(xc(l,n);qa--;){l=Ka[qa];if(l.isDirty&&l.options.stacking){G=true;break}}if(G)for(qa=da;qa--;){l=Ka[qa];if(l.options.stacking)l.isDirty=
true}A(Ka,function(ta){if(ta.isDirty)if(ta.options.legendType==="point")u=true});if(u&&Hd.renderLegend){Hd.renderLegend();n.isDirtyLegend=false}if(Ic){if(!qd){$b=null;A(wb,function(ta){ta.leastDistance=ha;ta.setScale()})}h();Sc();A(wb,function(ta){if(ta.isDirty||I){ta.redraw();I=true}})}if(I){Id();od();if(T){rd(T);T.animate({width:n.plotSizeX,height:n.plotSizeY})}}A(Ka,function(ta){if(ta.isDirty&&ta.visible&&(!ta.isCartesian||ta.xAxis))ta.redraw()});Hc&&Hc.resetTracker&&Hc.resetTracker();Ha(n,"redraw")}
function j(){var l=a.xAxis||{},u=a.yAxis||{};l=oc(l);A(l,function(G,I){G.index=I;G.isX=true});u=oc(u);A(u,function(G,I){G.index=I});l=l.concat(u);A(l,function(G){new d(G)});h()}function k(l,u){gb=Y(a.title,l);$=Y(a.subtitle,u);A([["title",l,gb],["subtitle",u,$]],function(G){var I=G[0],da=n[I],qa=G[1];G=G[2];if(da&&qa){da.destroy();da=null}if(G&&G.text&&!da)n[I]=pa.text(G.text,0,0).attr({align:G.align,"class":"highcharts-"+I,zIndex:1}).css(G.style).add().align(G,false,Ia)})}function m(){Pa=o.renderTo;
Sb=Jc+Jd++;if(nc(Pa))Pa=Da.getElementById(Pa);Pa.innerHTML="";if(!Pa.offsetWidth){Xa=Pa.cloneNode(0);Ja(Xa,{position:Kc,top:"-9999px",display:""});Da.body.appendChild(Xa)}tc=(Xa||Pa).offsetWidth;hc=(Xa||Pa).offsetHeight;n.chartWidth=Va=o.width||tc||600;n.chartHeight=Ma=o.height||(hc>19?hc:400);n.container=sa=mb(cc,{className:"highcharts-container"+(o.className?" "+o.className:""),id:Sb},ca({position:qe,overflow:Cb,width:Va+qb,height:Ma+qb,textAlign:"left"},o.style),Xa||Pa);n.renderer=pa=o.forExport?
new sd(sa,Va,Ma,true):new Tc(sa,Va,Ma);var l,u;if(re&&sa.getBoundingClientRect){l=function(){Ja(sa,{left:0,top:0});u=sa.getBoundingClientRect();Ja(sa,{left:-(u.left-la(u.left))+qb,top:-(u.top-la(u.top))+qb})};l();ra(sb,"resize",l);ra(n,"destroy",function(){Ub(sb,"resize",l)})}}function t(){function l(){var G=o.width||Pa.offsetWidth,I=o.height||Pa.offsetHeight;if(G&&I){if(G!==tc||I!==hc){clearTimeout(u);u=setTimeout(function(){Kd(G,I,false)},100)}tc=G;hc=I}}var u;ra(sb,"resize",l);ra(n,"destroy",function(){Ub(sb,
"resize",l)})}function B(){var l=a.labels,u=a.credits,G;k();Hd=n.legend=new De(n);Sc();A(wb,function(I){I.setTickPositions(true)});h();Sc();Id();Ic&&A(wb,function(I){I.render()});if(!n.seriesGroup)n.seriesGroup=pa.g("series-group").attr({zIndex:3}).add();A(Ka,function(I){I.translate();I.setTooltipPoints();I.render()});l.items&&A(l.items,function(){var I=ca(l.style,this.style),da=la(I.left)+ga,qa=la(I.top)+ea+12;delete I.left;delete I.top;pa.text(this.html,da,qa).attr({zIndex:2}).css(I).add()});if(!n.toolbar)n.toolbar=
c(n);if(u.enabled&&!n.credits){G=u.href;pa.text(u.text,0,0).on("click",function(){if(G)location.href=G}).attr({align:u.position.align,zIndex:8}).css(u.style).add().align(u.position)}od();n.hasRendered=true;if(Xa){Pa.appendChild(sa);dd(Xa)}}function v(){var l=Ka.length,u=sa&&sa.parentNode;Ha(n,"destroy");Ub(sb,"unload",v);Ub(n);for(A(wb,function(G){Ub(G)});l--;)Ka[l].destroy();if(sa){sa.innerHTML="";Ub(sa);u&&u.removeChild(sa);sa=null}if(pa)pa.alignedObjects=null;clearInterval(pe);for(l in n)delete n[l]}
function J(){if(!Uc&&sb==sb.top&&Da.readyState!=="complete")Da.attachEvent("onreadystatechange",function(){Da.detachEvent("onreadystatechange",J);Da.readyState==="complete"&&J()});else{m();Ha(n,"init");if(se&&a.rangeSelector.enabled)n.rangeSelector=new se(n);Ld();Md();A(a.series||[],function(l){g(l)});n.inverted=ya=C(ya,a.chart.inverted);j();if(te&&a.navigator.enabled||a.scrollbar.enabled)n.scroller=new te(n);n.render=B;n.tracker=Hc=new f(n,a.tooltip);B();b&&b.apply(n,[n]);A(n.callbacks,function(l){l.apply(n,
[n])});Ha(n,"load")}}md=Y(md,Ra.xAxis);Cd=Y(Cd,Ra.yAxis);Ra.xAxis=Ra.yAxis=null;var x=a.series;a.series=null;a=Y(Ra,a);a.series=x;var o=a.chart;x=o.margin;x=bc(x)?x:[x,x,x,x];var s=C(o.marginTop,x[0]),q=C(o.marginRight,x[1]),r=C(o.marginBottom,x[2]),y=C(o.marginLeft,x[3]),U=o.spacingTop,X=o.spacingRight,Ua=o.spacingBottom,bb=o.spacingLeft,Ia,gb,$,ea,Xb,tb,ga,rb,Pa,Xa,sa,Sb,tc,hc,Va,Ma,Wb,sc,uc,Lc,ic,V,n=this,Ta=(x=o.events)&&!!x.click,Db,ib,Oa,ac,Eb,vc,wc,eb,db,Hc,pd,od,Hd,jc,kc,Rc,Ic=o.showAxes,
qd=0,wb=[],$b,Ka=[],ya,pa,Ed,pe,Fd,Id,Sc,Ld,Md,Kd,Gd,ue,De=function(l){function u(P,ua){var va=P.legendItem,Ca=P.legendLine,cb=P.legendSymbol,ab=Wa.color,za=ua?T.itemStyle.color:ab;ab=ua?P.color:ab;va&&va.css({fill:za});Ca&&Ca.attr({stroke:ab});cb&&cb.attr({stroke:ab,fill:ab})}function G(P,ua,va){var Ca=P.legendItem,cb=P.legendLine,ab=P.legendSymbol;P=P.checkbox;Ca&&Ca.attr({x:ua,y:va});cb&&cb.translate(ua,va-4);ab&&ab.attr({x:ua+ab.xOff,y:va+ab.yOff});if(P){P.x=ua;P.y=va}}function I(){A(pb,function(P){var ua=
P.checkbox,va=Sa.alignAttr;ua&&Ja(ua,{left:va.translateX+P.legendItemWidth+ua.x-40+qb,top:va.translateY+ua.y-11+qb})})}function da(P){var ua,va,Ca,cb,ab=P.legendItem;cb=P.series||P;var za=cb.options,ub=za&&za.borderWidth||0;if(!ab){cb=/^(bar|pie|area|column)$/.test(cb.type);P.legendItem=ab=pa.text(T.labelFormatter.call(P),0,0).css(P.visible?Fa:Wa).on("mouseover",function(){P.setState(Tb);ab.css(aa)}).on("mouseout",function(){ab.css(P.visible?Fa:Wa);P.setState()}).on("click",function(){var ec=function(){P.setVisible()};
P.firePointEvent?P.firePointEvent("legendItemClick",null,ec):Ha(P,"legendItemClick",null,ec)}).attr({zIndex:2}).add(Sa);if(!cb&&za&&za.lineWidth){var Zb={"stroke-width":za.lineWidth,zIndex:2};if(za.dashStyle)Zb.dashstyle=za.dashStyle;P.legendLine=pa.path([$a,-Za-La,0,Ga,-La,0]).attr(Zb).add(Sa)}if(cb)Ca=pa.rect(ua=-Za-La,va=-11,Za,12,2).attr({zIndex:3}).add(Sa);else if(za&&za.marker&&za.marker.enabled){Ca=za.marker.radius;Ca=pa.symbol(P.symbol,ua=-Za/2-La-Ca,va=-4-Ca,2*Ca,2*Ca).attr(P.pointAttr[Ib]).attr({zIndex:3}).add(Sa)}if(Ca){Ca.xOff=
ua+ub%2/2;Ca.yOff=va+ub%2/2}P.legendSymbol=Ca;u(P,P.visible);if(za&&za.showCheckbox){P.checkbox=mb("input",{type:"checkbox",checked:P.selected,defaultChecked:P.selected},T.itemCheckboxStyle,sa);ra(P.checkbox,"click",function(ec){Ha(P,"checkboxClick",{checked:ec.target.checked},function(){P.select()})})}}ua=ab.getBBox();va=P.legendItemWidth=T.itemWidth||Za+La+ua.width+O;Z=ua.height;if(ta&&z-D+va>(Qb||Va-2*R-D)){z=D;L+=Z}ma=L;G(P,z,L);if(ta)z+=va;else L+=Z;Gb=Qb||ja(ta?z-D:va,Gb)}function qa(){z=D;
L=F;ma=Gb=0;Sa||(Sa=pa.g("legend").attr({zIndex:7}).add());pb=[];A(Rb,function(Ca){var cb=Ca.options;if(cb.showInLegend)pb=pb.concat(cb.legendType==="point"?Ca.data:Ca)});pb.sort(function(Ca,cb){return(Ca.options.legendIndex||0)-(cb.options.legendIndex||0)});gc&&pb.reverse();A(pb,da);jc=Qb||Gb;kc=ma-F+Z;if(Na||Ab){jc+=2*R;kc+=2*R;if(ba)jc>0&&kc>0&&ba.animate(ba.crisp(null,null,null,jc,kc));else ba=pa.rect(0,0,jc,kc,T.borderRadius,Na||0).attr({stroke:T.borderColor,"stroke-width":Na||0,fill:Ab||Jb}).add(Sa).shadow(T.shadow);
ba[pb.length?"show":"hide"]()}for(var P=["left","right","top","bottom"],ua,va=4;va--;){ua=P[va];if(Ba[ua]&&Ba[ua]!=="auto"){T[va<2?"align":"verticalAlign"]=ua;T[va<2?"x":"y"]=la(Ba[ua])*(va%2?-1:1)}}Sa.align(ca(T,{width:jc,height:kc}),true,Ia);qd||I()}var T=l.options.legend;if(T.enabled){var ta=T.layout==="horizontal",Za=T.symbolWidth,La=T.symbolPadding,pb,Ba=T.style,Fa=T.itemStyle,aa=T.itemHoverStyle,Wa=T.itemHiddenStyle,R=la(Ba.padding),O=20,F=18,D=4+R+Za+La,z,L,ma,Z=0,ba,Na=T.borderWidth,Ab=T.backgroundColor,
Sa,Gb,Qb=T.width,Rb=l.series,gc=T.reversed;qa();ra(l,"endResize",I);return{colorizeItem:u,destroyItem:function(P){var ua=P.checkbox;A(["legendItem","legendLine","legendSymbol"],function(va){P[va]&&P[va].destroy()});ua&&dd(P.checkbox)},renderLegend:qa}}};ib=function(l,u){return l>=0&&l<=db&&u>=0&&u<=eb};ue=function(){Ha(n,"selection",{resetSelection:true},Gd);n.toolbar.remove("zoom")};Gd=function(l){var u=Ra.lang,G=n.pointCount<100;n.resetZoomEnabled!==false&&n.toolbar.add("zoom",u.resetZoom,u.resetZoomTitle,
ue);!l||l.resetSelection?A(wb,function(I){I.options.zoomEnabled!==false&&I.setExtremes(null,null,false,G)}):A(l.xAxis.concat(l.yAxis),function(I){var da=I.axis;if(n.tracker[da.isXAxis?"zoomX":"zoomY"])da.setExtremes(I.min,I.max,false,G)});i()};Sc=function(){var l=a.legend,u=C(l.margin,10),G=l.x,I=l.y,da=l.align,qa=l.verticalAlign,T;Ld();if((n.title||n.subtitle)&&!M(s))if(T=ja(n.title&&!gb.floating&&!gb.verticalAlign&&gb.y||0,n.subtitle&&!$.floating&&!$.verticalAlign&&$.y||0))ea=ja(ea,T+C(gb.margin,
15)+U);if(l.enabled&&!l.floating)if(da==="right")M(q)||(Xb=ja(Xb,jc-G+u+X));else if(da==="left")M(y)||(ga=ja(ga,jc+G+u+bb));else if(qa==="top")M(s)||(ea=ja(ea,kc+I+u+U));else if(qa==="bottom")M(r)||(tb=ja(tb,kc-I+u+Ua));if(n.extraBottomMargin)tb+=n.extraBottomMargin;if(n.extraTopMargin)ea+=n.extraTopMargin;Ic&&A(wb,function(ta){ta.getOffset()});M(y)||(ga+=rb[3]);M(s)||(ea+=rb[0]);M(r)||(tb+=rb[2]);M(q)||(Xb+=rb[1]);Md()};Kd=function(l,u,G){var I=n.title,da=n.subtitle;qd+=1;xc(G,n);sc=Ma;Wb=Va;if(M(l))n.chartWidth=
Va=N(l);if(M(u))n.chartHeight=Ma=N(u);Ja(sa,{width:Va+qb,height:Ma+qb});pa.setSize(Va,Ma,G);db=Va-ga-Xb;eb=Ma-ea-tb;$b=null;A(wb,function(qa){qa.isDirty=true;qa.setScale()});A(Ka,function(qa){qa.isDirty=true});n.isDirtyLegend=true;n.isDirtyBox=true;Sc();I&&I.align(null,null,Ia);da&&da.align(null,null,Ia);i(G);sc=null;Ha(n,"resize");setTimeout(function(){Ha(n,"endResize",null,function(){qd-=1})},cd&&cd.duration||500)};Md=function(){n.plotLeft=ga=N(ga);n.plotTop=ea=N(ea);n.plotWidth=db=N(Va-ga-Xb);
n.plotHeight=eb=N(Ma-ea-tb);n.plotSizeX=ya?eb:db;n.plotSizeY=ya?db:eb;Ia={x:bb,y:U,width:Va-bb-X,height:Ma-U-Ua};A(wb,function(l){l.setAxisSize()})};Ld=function(){ea=C(s,U);Xb=C(q,X);tb=C(r,Ua);ga=C(y,bb);rb=[0,0,0,0]};Id=function(){var l=o.borderWidth||0,u=o.backgroundColor,G=o.plotBackgroundColor,I=o.plotBackgroundImage,da,qa={x:ga,y:ea,width:db,height:eb};da=l+(o.shadow?8:0);if(l||u)if(uc)uc.animate(uc.crisp(null,null,null,Va-da,Ma-da));else uc=pa.rect(da/2,da/2,Va-da,Ma-da,o.borderRadius,l).attr({stroke:o.borderColor,
"stroke-width":l,fill:u||Jb}).add().shadow(o.shadow);if(G)if(Lc)Lc.animate(qa);else Lc=pa.rect(ga,ea,db,eb,0).attr({fill:G}).add().shadow(o.plotShadow);if(I)if(ic)ic.animate(qa);else ic=pa.image(I,ga,ea,db,eb).add();if(o.plotBorderWidth)if(V)V.animate(V.crisp(null,ga,ea,db,eb));else V=pa.rect(ga,ea,db,eb,0,o.plotBorderWidth).attr({stroke:o.plotBorderColor,"stroke-width":o.plotBorderWidth,zIndex:4}).add();n.isDirtyBox=false};ra(sb,"unload",v);o.reflow!==false&&ra(n,"load",t);if(x)for(Db in x)ra(n,
Db,x[Db]);n.options=a;n.series=Ka;n.xAxis=[];n.yAxis=[];n.addSeries=function(l,u,G){var I;if(l){xc(G,n);u=C(u,true);Ha(n,"addSeries",{options:l},function(){I=g(l);I.isDirty=true;n.isDirtyLegend=true;u&&n.redraw()})}return I};n.animation=C(o.animation,true);n.Axis=d;n.destroy=v;n.get=function(l){var u,G,I;for(u=0;u<wb.length;u++)if(wb[u].options.id===l)return wb[u];for(u=0;u<Ka.length;u++)if(Ka[u].options.id===l)return Ka[u];for(u=0;u<Ka.length;u++){I=Ka[u].points;for(G=0;G<I.length;G++)if(I[G].id===
l)return I[G]}return null};n.getSelectedPoints=function(){var l=[];A(Ka,function(u){l=l.concat(Nd(u.points,function(G){return G.selected}))});return l};n.getSelectedSeries=function(){return Nd(Ka,function(l){return l.selected})};n.hideLoading=function(){td(Eb,{opacity:0},{duration:a.loading.hideDuration,complete:function(){Ja(Eb,{display:Jb})}});wc=false};n.initSeries=g;n.isInsidePlot=ib;n.redraw=i;n.setSize=Kd;n.setTitle=k;n.showLoading=function(l){var u=a.loading;if(!Eb){Eb=mb(cc,{className:"highcharts-loading"},
ca(u.style,{left:ga+qb,top:ea+qb,width:db+qb,height:eb+qb,zIndex:10,display:Jb}),sa);vc=mb("span",null,u.labelStyle,Eb)}vc.innerHTML=l||a.lang.loading;if(!wc){Ja(Eb,{opacity:0,display:""});td(Eb,{opacity:u.style.opacity},{duration:u.showDuration});wc=true}};n.pointCount=0;n.counters=new ee;J()}function te(a){function b(V,n){var Ta={fill:bb.backgroundColor,stroke:bb.borderColor,"stroke-width":1};if(!sa){Ma[n]=f.g().css({cursor:"e-resize"}).attr({zIndex:3}).add();f.rect(-4.5,0,9,16,3,1).attr(Ta).add(Ma[n]);
f.path(["M",-1.5,4,"L",-1.5,12,"M",0.5,4,"L",0.5,12]).attr(Ta).add(Ma[n])}Ma[n].translate(Pa+$+parseInt(V,10),tb+Ia/2-8)}function d(V){if(!sa){ic[V]=f.g().add(Wb);f.rect(-0.5,-0.5,$+1,$+1,m.buttonBorderRadius,m.buttonBorderWidth).attr({stroke:m.buttonBorderColor,"stroke-width":m.buttonBorderWidth,fill:m.buttonBackgroundColor}).add(ic[V]);f.path(["M",$/2+(V?-1:1),$/2-3,"L",$/2+(V?-1:1),$/2+3,$/2+(V?2:-2),$/2]).attr({fill:m.buttonArrowColor}).add(ic[V])}V&&ic[V].attr({translateX:Xa-$})}function c(V,
n,Ta,Db){var ib=m.barBorderWidth;rb=tb+ga;Pa=a.plotLeft;Xa=a.plotWidth;j=Pa+$;Ta=C(Ta,q.translate(V));Db=C(Db,q.translate(n));if(sa&&q.getExtremes){V=a.xAxis[0].getExtremes();n=q.getExtremes();if(V.dataMin!==n.min||V.dataMax!==n.max)q.setExtremes(V.dataMin,V.dataMax)}r=parseInt(Ea(Ta,Db),10);y=parseInt(ja(Ta,Db),10);U=y-r;if(!sa){if(i){tc=f.rect().attr({fill:h.maskFill,zIndex:3}).add();hc=f.rect().attr({fill:h.maskFill,zIndex:3}).add();Va=f.path().attr({"stroke-width":gb,stroke:h.outlineColor,zIndex:3}).add()}if(t){Wb=
f.g().add();Ta=m.trackBorderWidth;sc=f.rect().attr({y:-Ta%2/2,fill:m.trackBackgroundColor,stroke:m.trackBorderColor,"stroke-width":Ta,r:m.trackBorderRadius||0,height:$}).add(Wb);uc=f.rect().attr({y:-ib%2/2,height:$,fill:m.barBackgroundColor,stroke:m.barBorderColor,"stroke-width":ib,rx:Xb,ry:Xb}).add(Wb);Lc=f.path().attr({stroke:m.rifleColor,"stroke-width":1}).add(Wb)}}if(i){tc.attr({x:j,y:tb,width:r,height:Ia});hc.attr({x:j+y,y:tb,width:Xa-y-2*$,height:Ia});Va.attr({d:["M",Pa,rb,"L",j+r-ga,rb,j+r-
ga,rb+ea,j+y+ga,rb+ea,j+y+ga,rb,Pa+Xa,rb]});b(r-ga,0);b(y+ga,1)}if(t){d(0);d(1);Wb.translate(Pa,N(rb+Ia));sc.attr({width:Xa});uc.attr({x:N($+r)+ib%2/2,width:U});ib=$+r+U/2-0.5;Lc.attr({d:[$a,ib-3,$/4,Ga,ib-3,2*$/3,$a,ib,$/4,Ga,ib,2*$/3,$a,ib+3,$/4,Ga,ib+3,2*$/3],visibility:U>12?Lb:Cb})}sa=true}function e(){ra(a.container,ve,function(V){V=a.tracker.normalizeMouseEvent(V);var n=V.chartX,Ta=V.chartY,Db=Hb?10:7;if(Ta>tb&&Ta<tb+Ia+$)if((Ta=!t||Ta<tb+Ia)&&na.abs(n-r-j)<Db){B=true;x=y}else if(Ta&&na.abs(n-
y-j)<Db){v=true;x=r}else if(n>j+r&&n<j+y){J=n;Ua=X.cursor;X.cursor="ew-resize";o=n-r}else if(n>Pa&&n<Pa+Xa){n=Ta?n-j-U/2:n<j?r-Ea(10,U):n>Pa+Xa-$?r+Ea(10,U):n<j+r?r-U:y;if(n<0)n=0;else if(n+U>Xa-2*$)n=Xa-U-2*$;a.xAxis[0].setExtremes(q.translate(n,true),q.translate(n+U,true),true,false)}V.preventDefault&&V.preventDefault()});ra(a.container,Ee,function(V){V=a.tracker.normalizeMouseEvent(V);V=V.chartX;if(V<j)V=j;else if(V>Pa+Xa-$)V=Pa+Xa-$;if(B){s=true;c(0,0,V-j,x)}else if(v){s=true;c(0,0,x,V-j)}else if(J){s=
true;if(V<o)V=o;else if(V>Xa+o-U-2*$)V=Xa+o-U-2*$;c(0,0,V-o,V-o+U)}});ra(document,Fe,function(){s&&a.xAxis[0].setExtremes(q.translate(r,true),q.translate(y,true),true,false);B=v=J=s=o=null;X.cursor=Ua})}var f=a.renderer,g=a.options,h=g.navigator,i=h.enabled,j,k,m=g.scrollbar,t=m.enabled,B,v,J,x,o,s,q,r,y,U,X=document.body.style,Ua,bb=h.handles,Ia=i?h.height:0,gb=h.outlineWidth,$=t?m.height:0,ea=Ia+$,Xb=m.barBorderRadius,tb=h.top||a.chartHeight-Ia-$-g.chart.spacingBottom,ga=gb/2,rb,Pa,Xa,sa;g=h.baseSeries;
var Sb=a.series[g]||typeof g==="string"&&a.get(g)||a.series[0],tc,hc,Va,Ma=[],Wb,sc,uc,Lc,ic=[];a.resetZoomEnabled=false;(function(){var V=a.xAxis.length,n=a.yAxis.length;a.extraBottomMargin=ea+h.margin;if(i){var Ta=Sb.options,Db,ib=Ta.data;Ta.data=null;Db=Y(Sb.options,h.series,{threshold:null,clip:false,enableMouseTracking:false,group:"nav",padXAxis:false,xAxis:V,yAxis:n,name:"Navigator",showInLegend:false});Ta.data=Db.data=ib;k=a.initSeries(Db);ra(Sb,"updatedData",function(){var Oa=Sb.xAxis.getExtremes(),
ac=Oa.max-Oa.min,Eb=Oa.max>=k.xData[k.xData.length-1],vc=Oa.min-ac<=k.xData[0];k.options.pointStart=Sb.xData[0];k.setData(Sb.options.data);if(Eb){Oa=Oa.dataMax;Sb.xAxis.setExtremes(Oa-ac,Oa)}else if(vc){Oa=Oa.dataMin;Sb.xAxis.setExtremes(Oa,Oa+ac)}else c(ja(Oa.min,Oa.dataMin),Ea(Oa.max,Oa.dataMax))});q=new a.Axis(Y(h.xAxis,{isX:true,type:"datetime",index:V,height:Ia,top:tb,offset:0,offsetLeft:$,offsetRight:-$,startOnTick:false,endOnTick:false,minPadding:0,maxPadding:0,zoomEnabled:false}));new a.Axis(Y(h.yAxis,
{alignTicks:false,height:Ia,top:tb,offset:0,index:n,zoomEnabled:false}))}else q={translate:function(Oa,ac){var Eb=Sb.xAxis.getExtremes(),vc=a.plotWidth-2*$,wc=Eb.dataMin;Eb=Eb.dataMax-wc;return ac?Oa*Eb/vc+wc:vc*(Oa-wc)/Eb}};e()})();return{render:c}}function se(a){function b(x,o,s){var q=a.xAxis[0],r=q&&q.getExtremes(),y,U=r&&r.dataMin,X=r&&r.dataMax,Ua,bb=q&&Ea(r.max,X);r=new Date(bb);y=o.type;o=o.count;var Ia,gb,$={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(!(U===null||
X===null)){if($[y]){Ia=$[y]*o;Ua=ja(bb-Ia,U)}else if(y==="month"){r.setMonth(r.getMonth()-o);Ua=ja(r.getTime(),U);Ia=2592E6*o}else if(y==="ytd"){r=new Date(0);y=new Date;gb=y.getFullYear();r.setFullYear(gb);String(gb)!==Gc("%Y",r)&&r.setFullYear(gb-1);Ua=gb=ja(U||0,r.getTime());y=y.getTime();bb=Ea(X||y,y)}else if(y==="year"){r.setFullYear(r.getFullYear()-o);Ua=ja(U,r.getTime());Ia=31536E6*o}else if(y==="all"&&q){Ua=U;bb=X}t[x]&&t[x].setState(2);if(q)setTimeout(function(){q.setExtremes(Ua,bb,C(s,1),
0);m=x},1);else{a.options.xAxis=Y(a.options.xAxis,{range:Ia,min:gb});m=x}}}function d(x,o){var s=x.hasFocus?"%Y-%m-%d":"%b %e, %Y";if(o)x.HCTime=o;x.value=Gc(s,x.HCTime)}function c(x){var o=x==="min",s;mb("span",{innerHTML:h[o?"rangeSelectorFrom":"rangeSelectorTo"]},v.labelStyle,i);s=mb("input",{name:x,className:"highcharts-range-selector",type:"text"},ca({width:"80px",height:"16px",border:"1px solid silver",marginLeft:"5px",marginRight:o?"5px":"0",textAlign:"center"},v.inputStyle),i);s.onfocus=s.onblur=
function(q){q=q||window.event;s.hasFocus=q.type==="focus";d(s)};s.onchange=function(){var q=s.value,r=Date.parse(q),y=a.xAxis[0].getExtremes();if(isNaN(r)){r=q.split("-");r=Date.UTC(la(r[0]),la(r[1])-1,la(r[2]))}if(!isNaN(r)&&(o&&r>y.dataMin&&r<k.HCTime||!o&&r<y.dataMax&&r>j.HCTime))a.xAxis[0].setExtremes(o?r:y.min,o?y.max:r)};return s}var e=a.renderer,f,g=a.container,h=Ra.lang,i,j,k,m,t=[],B,v,J=[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",
text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}];a.resetZoomEnabled=false;(function(){a.extraTopMargin=25;v=a.options.rangeSelector;B=v.buttons||J;m=v.selected;ra(g,ve,function(){j&&j.blur();k&&k.blur()});m!==ha&&B[m]&&b(m,B[m],false);ra(a,"load",function(){ra(a.xAxis[0],"setExtremes",function(){t[m]&&t[m].setState(0)})})})();return{render:function(x,o){var s=a.options.chart.style,q=v.buttonTheme,r=v.inputEnabled!==false,y=q&&q.states;if(!f){e.text(h.rangeSelectorZoom,a.plotLeft,
a.plotTop-10).css(v.labelStyle).add();A(B,function(U,X){t[X]=e.button(U.text,a.plotLeft+50+X*30,a.plotTop-25,function(){b(X,U);this.isActive=true},ca(q,{padding:1,r:0}),y&&y.hover,y&&y.select).attr({width:28,height:16}).css({textAlign:"center"}).add();m===X&&t[X].setState(2)});if(r){i=mb("div",null,{position:"relative",height:0,fontFamily:s.fontFamily,fontSize:s.fontSize},g.parentNode);i=mb("div",null,ca({position:"absolute",top:-a.chartHeight+a.plotTop-25+"px",right:a.chartWidth-a.plotLeft-a.plotWidth+
"px"},v.inputBoxStyle),i);j=c("min");k=c("max")}}if(r){d(j,x);d(k,o)}f=true}}}var Da=document,sb=window,na=Math,N=na.round,Kb=na.floor,ld=na.ceil,ja=na.max,Ea=na.min,nb=na.abs,Mb=na.cos,Vb=na.sin,lc=na.PI,we=lc*2/360,Mc=navigator.userAgent,Zc=/msie/i.test(Mc)&&!sb.opera,Vc=Da.documentMode===8,oe=/AppleWebKit/.test(Mc),re=/Firefox/.test(Mc),Uc=!!Da.createElementNS&&!!Da.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,Tc,Hb=Da.documentElement.ontouchstart!==undefined,xe={},Jd=0,Ob=
1,ed,Ra,Gc,cd,ud,ha,cc="div",Kc="absolute",qe="relative",Cb="hidden",Jc="highcharts-",Lb="visible",qb="px",Jb="none",$a="M",Ga="L",ye="rgba(192,192,192,"+(Uc?1.0E-6:0.0020)+")",Ib="",Tb="hover",Td="millisecond",Ud="second",Vd="minute",Wd="hour",Xd="day",Yd="week",Zd="month",$d="year",bd,wd,xd,zd,Oc,$c,ad,ae,be,yd,ce,de,S=sb.HighchartsAdapter,Fb=S||{},A=Fb.each,Nd=Fb.grep,Wc=Fb.map,Y=Fb.merge,ra=Fb.addEvent,Ub=Fb.removeEvent,Ha=Fb.fireEvent,td=Fb.animate,rd=Fb.stop,fb={};sb.Highcharts={};Gc=function(a,
b,d){function c(B,v){B=B.toString().replace(/^([0-9])$/,"0$1");if(v===3)B=B.toString().replace(/^([0-9]{2})$/,"0$1");return B}if(!M(b)||isNaN(b))return"Invalid date";a=C(a,"%Y-%m-%d %H:%M:%S");var e=new Date(b*Ob),f,g=e[xd](),h=e[zd](),i=e[Oc](),j=e[$c](),k=e[ad](),m=Ra.lang,t=m.weekdays;m=m.months;b={a:t[h].substr(0,3),A:t[h],d:c(i),e:i,b:m[j].substr(0,3),B:m[j],m:c(j+1),y:k.toString().substr(2,2),Y:k,H:c(g),I:c(g%12||12),l:g%12||12,M:c(e[wd]()),p:g<12?"AM":"PM",P:g<12?"am":"pm",S:c(e.getSeconds()),
L:c(b%1E3,3)};for(f in b)a=a.replace("%"+f,b[f]);return d?a.substr(0,1).toUpperCase()+a.substr(1):a};ee.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};S&&S.init&&S.init();if(!S&&sb.jQuery){var Nb=jQuery;A=function(a,b){for(var d=0,c=a.length;d<c;d++)if(b.call(a[d],a[d],d,a)===false)return d};Nd=Nb.grep;Wc=function(a,b){for(var d=[],c=0,e=a.length;c<e;c++)d[c]=b.call(a[c],a[c],c,a);return d};Y=function(){var a=arguments;return Nb.extend(true,
null,a[0],a[1],a[2],a[3])};ra=function(a,b,d){Nb(a).bind(b,d)};Ub=function(a,b,d){var c=Da.removeEventListener?"removeEventListener":"detachEvent";if(Da[c]&&!a[c])a[c]=function(){};Nb(a).unbind(b,d)};Ha=function(a,b,d,c){var e=Nb.Event(b),f="detached"+b;ca(e,d);if(a[b]){a[f]=a[b];a[b]=null}Nb(a).trigger(e);if(a[f]){a[b]=a[f];a[f]=null}c&&!e.isDefaultPrevented()&&c(e)};td=function(a,b,d){var c=Nb(a);if(b.d){a.toD=b.d;b.d=1}c.stop();c.animate(b,d)};rd=function(a){Nb(a).stop()};Nb.extend(Nb.easing,{easeOutQuad:function(a,
b,d,c,e){return-c*(b/=e)*(b-2)+d}});var Ge=jQuery.fx.step._default,He=jQuery.fx.prototype.cur;Nb.fx.step._default=function(a){var b=a.elem;b.attr?b.attr(a.prop,a.now):Ge.apply(this,arguments)};Nb.fx.step.d=function(a){var b=a.elem;if(!a.started){var d=ud.init(b,b.d,b.toD);a.start=d[0];a.end=d[1];a.started=true}b.attr("d",ud.step(a.start,a.end,a.pos,b.toD))};Nb.fx.prototype.cur=function(){var a=this.elem;return a.attr?a.attr(this.prop):He.apply(this,arguments)}}ud={init:function(a,b,d){b=b||"";var c=
a.shift,e=b.indexOf("C")>-1,f=e?7:3,g;b=b.split(" ");d=[].concat(d);var h,i,j=function(k){for(g=k.length;g--;)k[g]===$a&&k.splice(g+1,0,k[g+1],k[g+2],k[g+1],k[g+2])};if(e){j(b);j(d)}if(a.isArea){h=b.splice(b.length-6,6);i=d.splice(d.length-6,6)}if(c===1)d=[].concat(d).splice(0,f).concat(d);a.shift=0;if(b.length)for(a=d.length;b.length<a;){c=[].concat(b).splice(b.length-f,f);if(e){c[f-6]=c[f-2];c[f-5]=c[f-1]}b=b.concat(c)}if(h){b=b.concat(h);d=d.concat(i)}return[b,d]},step:function(a,b,d,c){var e=
[],f=a.length;if(d===1)e=c;else if(f===b.length&&d<1)for(;f--;){c=parseFloat(a[f]);e[f]=isNaN(c)?a[f]:d*parseFloat(b[f]-c)+c}else e=b;return e}};S={enabled:true,align:"center",x:0,y:15,style:{color:"#666",fontSize:"11px",lineHeight:"14px"}};Ra={colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July",
"August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:{duration:1E3},events:{},lineWidth:2,shadow:true,marker:{enabled:true,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:Y(S,
{enabled:false,y:-6,formatter:function(){return this.y}}),cropThreshold:300,showInLegend:true,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:true}},labels:{style:{position:Kc,color:"#3E576F"}},legend:{enabled:true,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:false,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer",color:"#000000"},itemHiddenStyle:{color:"#C0C0C0"},
itemCheckboxStyle:{position:Kc,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{fontWeight:"bold",position:qe,top:"1em"},showDuration:100,style:{position:Kc,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:Hb?25:10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",
cursor:"pointer"}},credits:{enabled:true,text:"Highstock Beta",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"10px"}}};var md={dateTimeLabelFormats:Yb(Td,"%H:%M:%S.%L",Ud,"%H:%M:%S",Vd,"%H:%M",Wd,"%H:%M",Xd,"%e. %b",Yd,"%e. %b",Zd,"%b '%y",$d,"%Y"),endOnTick:false,gridLineColor:"#C0C0C0",labels:S,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",
minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#6D869F",fontWeight:"bold"}},type:"linear"},Cd=Y(md,{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,
title:{rotation:270,text:"Y-values"},stackLabels:{enabled:false,formatter:function(){return this.total},style:S.style}}),Be={labels:{align:"right",x:-8,y:null},title:{rotation:270}},Ae={labels:{align:"left",x:8,y:null},title:{rotation:90}},ne={labels:{align:"center",x:0,y:14},title:{rotation:0}},ze=Y(ne,{labels:{y:-5}}),Qa=Ra.plotOptions;S=Qa.line;Qa.spline=Y(S);Qa.scatter=Y(S,{lineWidth:0,states:{hover:{lineWidth:0}}});Qa.area=Y(S,{threshold:0});Qa.areaspline=Y(Qa.area);Qa.column=Y(S,{borderColor:"#FFFFFF",
borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,padXAxis:true,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}},dataLabels:{y:null,verticalAlign:null},threshold:0});Qa.bar=Y(Qa.column,{dataLabels:{align:"left",x:5,y:0}});Qa.pie=Y(S,{borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function(){return this.point.name},
y:5},legendType:"point",marker:null,size:"75%",showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});fe();var mc=function(a){var b=[],d;(function(c){if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(c))b=[la(d[1]),la(d[2]),la(d[3]),parseFloat(d[4],10)];else if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))b=[la(d[1],16),la(d[2],16),la(d[3],16),1]})(a);return{get:function(c){return b&&!isNaN(b[0])?c===
"rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a},brighten:function(c){if(Xc(c)&&c!==0){var e;for(e=0;e<3;e++){b[e]+=la(c*255);if(b[e]<0)b[e]=0;if(b[e]>255)b[e]=255}}return this},setOpacity:function(c){b[3]=c;return this}}};fd.prototype={init:function(a,b){this.element=Da.createElementNS("http://www.w3.org/2000/svg",b);this.renderer=a},animate:function(a,b,d){if(b=C(b,cd,true)){b=Y(b);if(d)b.complete=d;td(this,a,b)}else{this.attr(a);d&&d()}},attr:function(a,b){var d=
this,c,e,f,g,h,i=d.element,j=i.nodeName,k=d.renderer,m,t=d.shadows,B,v=d;if(nc(a)&&M(b)){c=a;a={};a[c]=b}if(nc(a)){c=a;if(j==="circle")c={x:"cx",y:"cy"}[c]||c;else if(c==="strokeWidth")c="stroke-width";v=Aa(i,c)||d[c]||0;if(c!=="d"&&c!=="visibility")v=parseFloat(v)}else for(c in a){m=false;e=a[c];Ha(d,"setAttr",{key:c,value:e},function(J){f=J.result;if(M(f)&&f!==false)e=f;if(c==="d"){if(e&&e.join)e=e.join(" ");if(/(NaN| {2}|^$)/.test(e))e="M 0 0";d.d=e}else if(c==="x"&&j==="text"){for(g=0;g<i.childNodes.length;g++){h=
i.childNodes[g];Aa(h,"x")===Aa(i,"x")&&Aa(h,"x",e)}if(d.rotation)Aa(i,"transform","rotate("+d.rotation+" "+e+" "+la(a.y||Aa(i,"y"))+")")}else if(c==="fill")e=k.color(e,i,c);else if(j==="circle"&&(c==="x"||c==="y"))c={x:"cx",y:"cy"}[c]||c;else if(j==="rect"&&c==="r"){Aa(i,{rx:e,ry:e});m=true}else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign"){d[c]=e;d.updateTransform();m=true}else if(c==="stroke")e=k.color(e,i,c);else if(c==="dashstyle"){c="stroke-dasharray";e=e&&e.toLowerCase();
if(e==="solid")e=Jb;else if(e){e=e.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(g=e.length;g--;)e[g]=la(e[g])*a["stroke-width"];e=e.join(",")}}else if(c==="isTracker")d[c]=e;else if(c==="width")e=la(e);else if(c==="align"){c="text-anchor";e={left:"start",center:"middle",right:"end"}[e]}if(c==="strokeWidth")c=
"stroke-width";if(oe&&c==="stroke-width"&&e===0)e=1.0E-6;if(d.symbolName&&/^(x|y|r|start|end|innerR)/.test(c)){if(!B){d.symbolAttr(a);B=true}m=true}if(t&&/^(width|height|visibility|x|y|d|transform)$/.test(c))for(g=t.length;g--;)Aa(t[g],c,e);if((c==="width"||c==="height")&&j==="rect"&&e<0)e=0;if(c==="text"){d.textStr=e;d.added&&k.buildText(d)}else m||Aa(i,c,e);J.callback&&J.callback()})}return v},symbolAttr:function(a){var b=this;A(["x","y","r","start","end","width","height","innerR","anchorX","anchorY"],
function(d){b[d]=C(a[d],b[d])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path","url("+this.renderer.url+"#"+a.id+")")},crisp:function(a,b,d,c,e){var f,g={},h={},i;a=a||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;i=a%2/2;h.x=Kb(b||this.x||0)+i;h.y=Kb(d||this.y||0)+i;h.width=Kb((c||this.width||0)-2*i);h.height=Kb((e||this.height||0)-2*i);h.strokeWidth=a;for(f in h)if(this[f]!==h[f])this[f]=g[f]=h[f];return g},css:function(a){var b=
this.element;b=a&&a.width&&b.nodeName==="text";var d,c,e=function(f,g){return"-"+g.toLowerCase()};if(a&&a.color)a.fill=a.color;this.styles=a=ca(this.styles,a);if(Zc&&!Uc){b&&delete a.width;Ja(this.element,a)}else{for(d in a)c+=d.replace(/([A-Z])/g,e)+":"+a[d]+";";this.attr({style:c})}b&&this.added&&this.renderer.buildText(this);return this},on:function(a,b){var d=b;if(Hb&&a==="click"){a="touchstart";d=function(c){c.preventDefault();b()}}this.element["on"+a]=d;return this},translate:function(a,b){return this.attr({translateX:a,
translateY:b})},invert:function(){this.inverted=true;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,d=this.inverted,c=this.rotation,e=this.shadows,f=[];if(d){a+=this.attr("width");b+=this.attr("height")}if(a||b)f.push("translate("+a+","+b+")");if(d)f.push("rotate(90) scale(-1,1)");else c&&f.push("rotate("+c+" "+this.x+" "+this.y+")");if(f.length){Aa(this.element,"transform",f.join(" "));e&&A(e,function(g){Aa(g,"transform","translate("+
(a+1)+","+(b+1)+")")})}},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,d){if(a){this.alignOptions=a;this.alignByTranslate=b;d||this.renderer.alignedObjects.push(this)}else{a=this.alignOptions;b=this.alignByTranslate}d=C(d,this.renderer);var c=a.align,e=a.verticalAlign,f=(d.x||0)+(a.x||0),g=(d.y||0)+(a.y||0),h={};if(/^(right|center)$/.test(c))f+=(d.width-(a.width||0))/{right:1,center:2}[c];h[b?"translateX":"x"]=N(f);if(/^(bottom|middle)$/.test(e))g+=
(d.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=N(g);this[this.placed?"animate":"attr"](h);this.placed=true;this.alignAttr=h;return this},getBBox:function(){var a,b,d,c=this.rotation,e=c*we;try{a=ca({},this.element.getBBox())}catch(f){a={width:0,height:0}}b=a.width;d=a.height;if(c){a.width=nb(d*Vb(e))+nb(b*Mb(e));a.height=nb(d*Mb(e))+nb(b*Vb(e))}return a},show:function(){return this.attr({visibility:Lb})},hide:function(){return this.attr({visibility:Cb})},add:function(a){var b=
this.renderer,d=a||b,c=d.element||b.box,e=c.childNodes,f=this.element,g=Aa(f,"zIndex"),h;this.parentInverted=a&&a.inverted;this.textStr!==undefined&&b.buildText(this);if(g){d.handleZ=true;g=la(g)}if(d.handleZ)for(d=0;d<e.length;d++){a=e[d];b=Aa(a,"zIndex");if(a!==f&&(la(b)>g||!M(g)&&M(b))){c.insertBefore(f,a);h=true;break}}h||c.appendChild(f);this.added=true;Ha(this,"add");return this},destroy:function(){var a=this.element||{},b=this.shadows,d=this.box,c=a.parentNode,e;a.onclick=a.onmouseout=a.onmouseover=
a.onmousemove=null;rd(this);c&&c.removeChild(a);b&&A(b,function(f){(c=f.parentNode)&&c.removeChild(f)});d&&d.destroy();Yc(this.renderer.alignedObjects,this);for(e in this)delete this[e];return null},empty:function(){for(var a=this.element,b=a.childNodes,d=b.length;d--;)a.removeChild(b[d])},shadow:function(a,b){var d=[],c,e,f=this.element,g=this.parentInverted?"(-1,-1)":"(1,1)";if(a){for(c=1;c<=3;c++){e=f.cloneNode(0);Aa(e,{isShadow:"true",stroke:"rgb(0, 0, 0)","stroke-opacity":0.05*c,"stroke-width":7-
2*c,transform:"translate"+g,fill:Jb});b?b.element.appendChild(e):f.parentNode.insertBefore(e,f);d.push(e)}this.shadows=d}return this}};var sd=function(){this.init.apply(this,arguments)};sd.prototype={Element:fd,init:function(a,b,d,c){var e=location,f;f=this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});a.appendChild(f.element);this.box=f.element;this.boxWrapper=f;this.alignedObjects=[];this.url=Zc?"":e.href.replace(/#.*?$/,"");this.defs=this.createElement("defs").add();
this.forExport=c;this.setSize(b,d,false)},createElement:function(a){var b=new this.Element;b.init(this,a);return b},buildText:function(a){for(var b=a.element,d=C(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),c=b.childNodes,e=/style="([^"]+)"/,f=/href="([^"]+)"/,g=Aa(b,"x"),h=a.styles,i=re&&h&&h.HcDirection==="rtl"&&!this.forExport&&
la(Mc.split("Firefox/")[1])<4,j,k=h&&la(h.width),m=h&&h.lineHeight,t,B=c.length;B--;)b.removeChild(c[B]);k&&!a.added&&this.box.appendChild(b);A(d,function(v,J){var x,o=0,s;v=v.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");x=v.split("|||");A(x,function(q){if(q!==""||x.length===1){var r={},y=Da.createElementNS("http://www.w3.org/2000/svg","tspan");e.test(q)&&Aa(y,"style",q.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));if(f.test(q)){Aa(y,"onclick",'location.href="'+q.match(f)[1]+
'"');Ja(y,{cursor:"pointer"})}q=(q.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(i){j=[];for(B=q.length;B--;)j.push(q.charAt(B));q=j.join("")}y.appendChild(Da.createTextNode(q));if(o)r.dx=3;else r.x=g;if(!o){if(J){!Uc&&a.renderer.forExport&&Ja(y,{display:"block"});s=sb.getComputedStyle&&sb.getComputedStyle(t,null).getPropertyValue("line-height");if(!s||isNaN(s))s=m||t.offsetHeight||18;Aa(y,"dy",s)}t=y}Aa(y,r);b.appendChild(y);o++;if(k){q=q.replace(/-/g,"- ").split(" ");
for(var U,X=[];q.length||X.length;){U=b.getBBox().width;r=U>k;if(!r||q.length===1){q=X;X=[];if(q.length){y=Da.createElementNS("http://www.w3.org/2000/svg","tspan");Aa(y,{dy:m||16,x:g});b.appendChild(y);if(U>k)k=U}}else{y.removeChild(y.firstChild);X.unshift(q.pop())}q.length&&y.appendChild(Da.createTextNode(q.join(" ").replace(/- /g,"-")))}}}})})},button:function(a,b,d,c,e,f,g){var h=this.label(a,b,d),i=0,j,k,m,t,B;e=Y(Yb("stroke-width",1,"stroke","#999","fill",Yb("linearGradient",[0,0,0,14],"stops",
[[0,"#FFF"],[1,"#DDD"]]),"r",3,"padding",3,"style",Yb("color","black")),e);m=e.style;delete e.style;f=Y(e,Yb("stroke","#68A","fill",Yb("linearGradient",[0,0,0,14],"stops",[[0,"#FFF"],[1,"#ACF"]])),f);t=f.style;delete f.style;g=Y(e,Yb("stroke","#68A","fill",Yb("linearGradient",[0,0,0,14],"stops",[[0,"#9BD"],[1,"#CDF"]])),g);B=g.style;delete g.style;ra(h.element,"mouseenter",function(){h.attr(f).css(t)});ra(h.element,"mouseleave",function(){j=[e,f,g][i];k=[m,t,B][i];h.attr(j).css(k)});h.setState=function(v){if(i=
v)v===2&&h.attr(g).css(B);else h.attr(e).css(m)};return h.on("click",function(){c.call(h)}).attr(e).css(ca({cursor:"default"},m))},crispLine:function(a,b){if(a[1]===a[4])a[1]=a[4]=N(a[1])+b%2/2;if(a[2]===a[5])a[2]=a[5]=N(a[2])+b%2/2;return a},path:function(a){return this.createElement("path").attr({d:a,fill:Jb})},circle:function(a,b,d){a=bc(a)?a:{x:a,y:b,r:d};return this.createElement("circle").attr(a)},arc:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.r;c=a.innerR;e=a.start;f=a.end;a=a.x}return this.symbol("arc",
a||0,b||0,d||0,d||0,{innerR:c||0,start:e||0,end:f||0})},rect:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.width;c=a.height;e=a.r;f=a.strokeWidth;a=a.x}e=this.createElement("rect").attr({rx:e,ry:e,fill:Jb});return e.attr(e.crisp(f,a,b,ja(d,0),ja(c,0)))},setSize:function(a,b,d){var c=this.alignedObjects,e=c.length;this.width=a;this.height=b;for(this.boxWrapper[C(d,true)?"animate":"attr"]({width:a,height:b});e--;)c[e].align()},g:function(a){return this.createElement("g").attr(M(a)&&{"class":Jc+a})},image:function(a,
b,d,c,e){var f={preserveAspectRatio:Jb};arguments.length>1&&ca(f,{x:b,y:d,width:c,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,d,c,e,f){var g,h=this.symbols[a];h=h&&h(N(b),N(d),c,e,f);var i=/^url\((.*?)\)$/,j;if(h){g=this.path(h);ca(g,{symbolName:a,x:b,y:d,width:c,height:e});f&&ca(g,f)}else if(i.test(a)){var k=function(m,t){m.attr({width:t[0],
height:t[1]}).translate(-N(t[0]/2),-N(t[1]/2))};j=a.match(i)[1];a=xe[j];g=this.image(j).attr({x:b,y:d});if(a)k(g,a);else{g.attr({width:0,height:0});mb("img",{onload:function(){k(g,xe[j]=[this.width,this.height])},src:j})}}return g},symbols:{circle:function(a,b,d,c){var e=0.166*d;return[$a,a+d/2,b,"C",a+d+e,b,a+d+e,b+c,a+d/2,b+c,"C",a-e,b+c,a-e,b,a+d/2,b,"Z"]},square:function(a,b,d,c){return[$a,a,b,Ga,a+d,b,a+d,b+c,a,b+c,"Z"]},triangle:function(a,b,d,c){return[$a,a+d/2,b,Ga,a+d,b+c,a,b+c,"Z"]},"triangle-down":function(a,
b,d,c){return[$a,a,b,Ga,a+d,b,a+d/2,b+c,"Z"]},diamond:function(a,b,d,c){return[$a,a+d/2,b,Ga,a+d,b+c/2,a+d/2,b+c,a,b+c/2,"Z"]},arc:function(a,b,d,c,e){var f=e.start,g=e.end-1.0E-6;c=e.innerR;var h=Mb(f),i=Vb(f),j=Mb(g);g=Vb(g);e=e.end-f<lc?0:1;return[$a,a+d*h,b+d*i,"A",d,d,0,e,1,a+d*j,b+d*g,Ga,a+c*j,b+c*g,"A",c,c,0,e,0,a+c*h,b+c*i,"Z"]}},clipRect:function(a,b,d,c){var e=Jc+Jd++,f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=this.rect(a,b,d,c,0).add(f);a.id=e;return a},color:function(a,
b,d){var c,e=/^rgba/;if(a&&a.linearGradient){var f=this;b=a.linearGradient;d=Jc+Jd++;var g,h,i;g=f.createElement("linearGradient").attr({id:d,gradientUnits:"userSpaceOnUse",x1:b[0],y1:b[1],x2:b[2],y2:b[3]}).add(f.defs);A(a.stops,function(j){if(e.test(j[1])){c=mc(j[1]);h=c.get("rgb");i=c.get("a")}else{h=j[1];i=1}f.createElement("stop").attr({offset:j[0],"stop-color":h,"stop-opacity":i}).add(g)});return"url("+this.url+"#"+d+")"}else if(e.test(a)){c=mc(a);Aa(b,d+"-opacity",c.get("a"));return c.get("rgb")}else return a},
text:function(a,b,d){var c=Ra.chart.style;b=N(C(b,0));d=N(C(d,0));a=this.createElement("text").attr({x:b,y:d,text:a}).css({fontFamily:c.fontFamily,fontSize:c.fontSize});a.x=b;a.y=d;return a},label:function(a,b,d,c,e,f){function g(){m=(v===undefined||J===undefined||j.styles.textAlign)&&j.getBBox(true);var s=(v||m.width)+2*B,q=(J||m.height)+2*B,r;x=N(s*{left:0,center:0.5,right:1}[t]);r=e!==undefined&&{anchorX:e-b+x,anchorY:f-d};if(!k){j.box=k=c?i.symbol(c,0,0,s,q,r):i.rect(0,0,s,q,0,o["stroke-width"]);
k.add()}k.attr(Y({width:s,height:q},r,o));o=null}function h(s,q){if(k)k.attr(s,q);else o[s]=q}var i=this,j=i.text(a),k,m,t="left",B=2,v,J,x,o={};ra(j,"add",function(){g();var s=k.element,q=j.element,r=Aa(q,"zIndex");M(r)&&Aa(s,"zIndex",r);q.parentNode.insertBefore(s,q);j.attr({x:b,y:d})});ra(j,"setAttr",function(s){var q=s.key,r=s.value,y;if(q==="width"){v=r;y=false}else if(q==="height"){J=r;y=false}else if(q==="padding"){B=r;y=false}else if(q==="align")t=r;else if(q==="visibility"||q==="zIndex")h(q,
r);else if(q==="stroke"||q==="stroke-width"||q==="fill"||q==="r"){h(q,r);y=false}else if(q==="x"){s=j.styles.textAlign;h("translateX",r-x);if(t==="left"&&M(v)&&(s==="center"||s==="right"))r+={center:0.5,right:1}[s]*(v-m.width);y=N(r+{left:1,center:0,right:-1}[t]*B)}else if(q==="y"){h("translateY",r);y=N(r+la(j.styles.fontSize||12)*1.2)}else if(q==="text")s.callback=g;if(y!==ha)return y});j.txtToFront=j.toFront;return ca(j,{shadow:function(s){k.shadow(s);return j},toFront:function(){k.toFront();j.txtToFront()}})}};
Tc=sd;if(!Uc){Fb=yb(fd,{init:function(a,b){var d=["<",b,' filled="f" stroked="f"'],c=["position: ",Kc,";"];if(b==="shape"||b===cc)c.push("left:0;top:0;width:10px;height:10px;");if(Vc)c.push("visibility: ",b===cc?Cb:Lb);d.push(' style="',c.join(""),'"/>');if(b){d=b===cc||b==="span"||b==="img"?d.join(""):a.prepVML(d);this.element=mb(d)}this.renderer=a},add:function(a){var b=this.renderer,d=this.element,c=b.box;c=a?a.element||a:c;a&&a.inverted&&b.invertChild(d,c);Vc&&c.gVis===Cb&&Ja(d,{visibility:Cb});
c.appendChild(d);this.added=true;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();Ha(this,"add");return this},attr:function(a,b){var d=this,c,e,f,g,h=d.element||{},i=h.style,j=h.nodeName,k=d.renderer,m=d.symbolName,t,B,v=d.shadows,J,x=d;if(nc(a)&&M(b)){c=a;a={};a[c]=b}if(nc(a)){c=a;x=c==="strokeWidth"||c==="stroke-width"?d.strokeweight:d[c]}else for(c in a){e=a[c];J=false;Ha(d,"setAttr",{key:c,value:e},function(o){g=o.result;if(M(g)&&g!==false)e=g;if(m&&/^(x|y|r|start|end|width|height|innerR)/.test(c)){if(!B){d.symbolAttr(a);
B=true}J=true}else if(c==="d"){e=e||[];d.d=e.join(" ");f=e.length;for(var s=[];f--;)s[f]=Xc(e[f])?N(e[f]*10)-5:e[f]==="Z"?"x":e[f];e=s.join(" ")||"x";h.path=e;if(v)for(f=v.length;f--;)v[f].path=e;J=true}else if(c==="zIndex"||c==="visibility"){if(Vc&&c==="visibility"&&j==="DIV"){h.gVis=e;t=h.childNodes;for(f=t.length;f--;)Ja(t[f],{visibility:e});if(e===Lb)e=null}if(e)i[c]=e;J=true}else if(c==="width"||c==="height"){if(d.updateClipping){d[c]=e;d.updateClipping()}else i[c]=e;J=true}else if(/^(x|y)$/.test(c)){d[c]=
e;if(h.tagName==="SPAN")d.updateTransform();else i[{x:"left",y:"top"}[c]]=e}else if(c==="class")h.className=e;else if(c==="stroke"){e=k.color(e,h,c);c="strokecolor"}else if(c==="stroke-width"||c==="strokeWidth"){h.stroked=e?true:false;c="strokeweight";d[c]=e;if(Xc(e))e+=qb}else if(c==="dashstyle"){(h.getElementsByTagName("stroke")[0]||mb(k.prepVML(["<stroke/>"]),null,null,h))[c]=e||"solid";d.dashstyle=e;J=true}else if(c==="fill")if(j==="SPAN")i.color=e;else{h.filled=e!==Jb?true:false;e=k.color(e,
h,c);c="fillcolor"}else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="align"){if(c==="align")c="textAlign";d[c]=e;d.updateTransform();J=true}else if(c==="text"){this.bBox=null;h.innerHTML=e;J=true}if(v&&c==="visibility")for(f=v.length;f--;)v[f].style[c]=e;if(!J)if(Vc)try{h[c]=e}catch(q){console.log([h.tagName,c,e].join(", "))}else Aa(h,c,e);o.callback&&o.callback()})}return x},clip:function(a){var b=this,d=a.members;d.push(b);b.destroyClip=function(){Yc(d,b)};return b.css(a.getCSS(b.inverted))},
css:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width){delete a.width;this.textWidth=b;this.updateTransform()}this.styles=ca(this.styles,a);Ja(this.element,a);return this},destroy:function(){this.destroyClip&&this.destroyClip();fd.prototype.destroy.apply(this)},empty:function(){for(var a=this.element.childNodes,b=a.length,d;b--;){d=a[b];d.parentNode.removeChild(d)}},getBBox:function(a){var b=this.element,d=this.bBox;if(!d||a){if(b.nodeName==="text")b.style.position=Kc;d=this.bBox=
{x:b.offsetLeft,y:b.offsetTop,width:b.offsetWidth,height:b.offsetHeight}}return d},on:function(a,b){this.element["on"+a]=function(){var d=sb.event;d.target=d.srcElement;b(d)};return this},updateTransform:function(){if(this.added){var a=this,b=a.element,d=a.translateX||0,c=a.translateY||0,e=a.x||0,f=a.y||0,g=a.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=g&&g!=="left",j=a.shadows;if(d||c){Ja(b,{marginLeft:d,marginTop:c});j&&A(j,function(q){Ja(q,{marginLeft:d+1,marginTop:c+1})})}a.inverted&&
A(b.childNodes,function(q){a.renderer.invertChild(q,b)});if(b.tagName==="SPAN"){var k,m;j=a.rotation;var t;k=0;var B=1,v=0,J;t=la(a.textWidth);var x=a.xCorr||0,o=a.yCorr||0,s=[j,g,b.innerHTML,a.textWidth].join(",");if(s!==a.cTT){if(M(j)){k=j*we;B=Mb(k);v=Vb(k);Ja(b,{filter:j?["progid:DXImageTransform.Microsoft.Matrix(M11=",B,", M12=",-v,", M21=",v,", M22=",B,", sizingMethod='auto expand')"].join(""):Jb})}k=C(a.elemWidth,b.offsetWidth);m=C(a.elemHeight,b.offsetHeight);if(k>t){Ja(b,{width:t+qb,display:"block",
whiteSpace:"normal"});k=t}t=N((la(b.style.fontSize)||12)*1.2);x=B<0&&-k;o=v<0&&-m;J=B*v<0;x+=v*t*(J?1-h:h);o-=B*t*(j?J?h:1-h:1);if(i){x-=k*h*(B<0?-1:1);if(j)o-=m*h*(v<0?-1:1);Ja(b,{textAlign:g})}a.xCorr=x;a.yCorr=o}Ja(b,{left:e+x,top:f+o});a.cTT=s}}else this.alignOnAdd=true},shadow:function(a,b){var d=[],c,e=this.element,f=this.renderer,g,h=e.style,i,j=e.path;if(j&&typeof j.value!=="string")j="x";if(a){for(c=1;c<=3;c++){i=['<shape isShadow="true" strokeweight="',7-2*c,'" filled="false" path="',j,
'" coordsize="100,100" style="',e.style.cssText,'" />'];g=mb(f.prepVML(i),null,{left:la(h.left)+1,top:la(h.top)+1});i=['<stroke color="black" opacity="',0.05*c,'"/>'];mb(f.prepVML(i),null,null,g);b?b.element.appendChild(g):e.parentNode.insertBefore(g,e);d.push(g)}this.shadows=d}return this}});S=function(){this.init.apply(this,arguments)};S.prototype=Y(sd.prototype,{Element:Fb,isIE8:Mc.indexOf("MSIE 8.0")>-1,init:function(a,b,d){var c;this.alignedObjects=[];c=this.createElement(cc);a.appendChild(c.element);
this.box=c.element;this.boxWrapper=c;this.setSize(b,d,false);if(!Da.namespaces.hcv){Da.namespaces.add("hcv","urn:schemas-microsoft-com:vml");Da.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}},clipRect:function(a,b,d,c){var e=this.createElement();return ca(e,{members:[],left:a,top:b,width:d,height:c,getCSS:function(f){var g=this.top,h=this.left,i=h+this.width,j=g+this.height;g={clip:"rect("+N(f?h:g)+"px,"+N(f?j:
i)+"px,"+N(f?i:j)+"px,"+N(f?g:h)+"px)"};!f&&Vc&&ca(g,{width:i+qb,height:j+qb});return g},updateClipping:function(){A(e.members,function(f){f.css(e.getCSS(f.inverted))})}})},color:function(a,b,d){var c,e=/^rgba/;if(a&&a.linearGradient){var f,g,h=a.linearGradient,i,j,k,m;A(a.stops,function(t,B){if(e.test(t[1])){c=mc(t[1]);f=c.get("rgb");g=c.get("a")}else{f=t[1];g=1}if(B){k=f;m=g}else{i=f;j=g}});a=90-na.atan((h[3]-h[1])/(h[2]-h[0]))*180/lc;d=["<",d,' colors="0% ',i,",100% ",k,'" angle="',a,'" opacity="',
m,'" o:opacity2="',j,'" type="gradient" focus="100%" />'];mb(this.prepVML(d),null,null,b)}else if(e.test(a)&&b.tagName!=="IMG"){c=mc(a);d=["<",d,' opacity="',c.get("a"),'"/>'];mb(this.prepVML(d),null,null,b);return c.get("rgb")}else return a},prepVML:function(a){var b=this.isIE8;a=a.join("");if(b){a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />');a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')}else a=
a.replace("<","<hcv:");return a},text:function(a,b,d){var c=Ra.chart.style;return this.createElement("span").attr({text:a,x:N(b),y:N(d)}).css({whiteSpace:"nowrap",fontFamily:c.fontFamily,fontSize:c.fontSize})},path:function(a){return this.createElement("shape").attr({coordsize:"100 100",d:a})},circle:function(a,b,d){return this.symbol("circle").attr({x:a,y:b,r:d})},g:function(a){var b;if(a)b={className:Jc+a,"class":Jc+a};return this.createElement(cc).attr(b)},image:function(a,b,d,c,e){var f=this.createElement("img").attr({src:a});
arguments.length>1&&f.css({left:b,top:d,width:c,height:e});return f},rect:function(a,b,d,c,e,f){if(bc(a)){b=a.y;d=a.width;c=a.height;f=a.strokeWidth;a=a.x}var g=this.symbol("rect");g.r=e;return g.attr(g.crisp(f,a,b,ja(d,0),ja(c,0)))},invertChild:function(a,b){var d=b.style;Ja(a,{flip:"x",left:la(d.width)-10,top:la(d.height)-10,rotation:-90})},symbols:{arc:function(a,b,d,c,e){c=e.start;var f=e.end,g=Mb(c),h=Vb(c),i=Mb(f),j=Vb(f);e=e.innerR;var k=0.07/d,m=e&&0.1/e||0;if(f-c===0)return["x"];else if(2*
lc-f+c<k)i=-k;else if(f-c<m)i=Mb(c+m);return["wa",a-d,b-d,a+d,b+d,a+d*g,b+d*h,a+d*i,b+d*j,"at",a-e,b-e,a+e,b+e,a+e*i,b+e*j,a+e*g,b+e*h,"x","e"]},circle:function(a,b,d,c){return["wa",a,b,a+d,b+c,a+d,b+c/2,a+d,b+c/2,"e"]},rect:function(a,b,d,c,e){if(!M(e))return[];var f=a+d,g=b+c;d=Ea(e.r||0,d,c);return[$a,a+d,b,Ga,f-d,b,"wa",f-2*d,b,f,b+2*d,f-d,b,f,b+d,Ga,f,g-d,"wa",f-2*d,g-2*d,f,g,f,g-d,f-d,g,Ga,a+d,g,"wa",a,g-2*d,a+2*d,g,a+d,g,a,g-d,Ga,a,b+d,"wa",a,b,a+2*d,b+2*d,a,b+d,a+d,b,"x","e"]}}});Tc=S}gd.prototype.callbacks=
[];var Nc=function(){};Nc.prototype={init:function(a,b,d){var c=a.chart.counters;this.series=a;this.applyOptions(b,d);this.pointAttr={};if(a.options.colorByPoint){b=a.chart.options.colors;if(!this.options)this.options={};this.color=this.options.color=this.color||b[c.color++];c.wrapColor(b.length)}a.chart.pointCount++;return this},applyOptions:function(a,b){var d=this.series,c=typeof a;this.config=a;if(c==="number"||a===null)this.y=a;else if(typeof a[0]==="number"){this.x=a[0];this.y=a[1]}else if(c===
"object"&&typeof a.length!=="number"){ca(this,a);this.options=a}else if(typeof a[0]==="string"){this.name=a[0];this.y=a[1]}if(this.x===ha)this.x=b===ha?d.autoIncrement():b},destroy:function(){var a=this.series,b;a.chart.pointCount--;this===a.chart.hoverPoint&&this.onMouseOut();a.chart.hoverPoints=null;if(this.graphic){Ub(this);this.destroyElements()}this.legendItem&&this.series.chart.legend.destroyItem(this);for(b in this)this[b]=null},destroyElements:function(){for(var a=["graphic","tracker","dataLabel",
"group","connector"],b,d=5;d--;){b=a[d];if(this[b])this[b]=this[b].destroy()}},getLabelConfig:function(){return{x:this.category,y:this.y,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},select:function(a,b){var d=this,c=d.series.chart;d.selected=a=C(a,!d.selected);d.firePointEvent(a?"select":"unselect");d.setState(a&&"select");b||A(c.getSelectedPoints(),function(e){if(e.selected&&e!==d){e.selected=false;e.setState(Ib);e.firePointEvent("unselect")}})},onMouseOver:function(){var a=
this.series,b=a.chart,d=b.tooltip,c=b.hoverPoint;c&&c!==this&&c.onMouseOut();this.firePointEvent("mouseOver");if(d&&(!d.shared||a.noSharedTooltip))d.refresh(this);this.setState(Tb);b.hoverPoint=this},onMouseOut:function(){this.firePointEvent("mouseOut");this.setState();this.series.chart.hoverPoint=null},tooltipFormatter:function(a){var b=this.series;return['<span style="color:'+b.color+'">',this.name||b.name,"</span>: ",!a?"<b>x = "+(this.name||this.x)+",</b> ":"","<b>",!a?"y = ":"",this.y,"</b>"].join("")},
update:function(a,b,d){var c=this,e=c.series,f=c.graphic,g,h=e.data,i=h.length,j=e.chart;b=C(b,true);c.firePointEvent("update",{options:a},function(){c.applyOptions(a);if(bc(a)){e.getAttribs();f&&f.attr(c.pointAttr[e.state])}for(g=0;g<i;g++)if(h[g]===c){e.xData[g]=c.x;e.yData[g]=c.y;e.options.data[g]=a;break}e.isDirty=true;e.isDirtyData=true;b&&j.redraw(d)})},remove:function(a,b){var d=this,c=d.series,e=c.chart,f,g=c.data,h=g.length;xc(b,e);a=C(a,true);d.firePointEvent("remove",null,function(){for(f=
0;f<h;f++)if(g[f]===d){g.splice(f,1);c.options.data.splice(f,1);c.xData.splice(f,1);c.yData.splice(f,1);break}d.destroy();c.isDirty=true;c.isDirtyData=true;a&&e.redraw()})},firePointEvent:function(a,b,d){var c=this,e=this.series.options;if(e.point.events[a]||c.options&&c.options.events&&c.options.events[a])this.importEvents();if(a==="click"&&e.allowPointSelect)d=function(f){c.select(null,f.ctrlKey||f.metaKey||f.shiftKey)};Ha(this,a,b,d)},importEvents:function(){if(!this.hasImportedEvents){var a=Y(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)ra(this,b,a[b]);this.hasImportedEvents=true}},setState:function(a){var b=this.series,d=b.options.states,c=Qa[b.type].marker&&b.options.marker,e=c&&!c.enabled,f=c&&c.states[a],g=f&&f.enabled===false,h=b.stateMarkerGraphic,i=b.chart,j=this.pointAttr;a=a||Ib;if(!(a===this.state||this.selected&&a!=="select"||d[a]&&d[a].enabled===false||a&&(g||e&&!f.enabled))){if(this.graphic)this.graphic.attr(j[a]);else{if(a){if(!h){d=c.radius;b.stateMarkerGraphic=h=i.renderer.symbol(b.symbol,
-d,-d,2*d,2*d).attr(j[a]).add(b.group)}h.translate(this.plotX,this.plotY)}if(h)h[a?"show":"hide"]()}this.state=a}}};var xb=function(){};xb.prototype={isCartesian:true,type:"line",pointClass:Nc,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a,b){var d,c;c=a.series.length;this.chart=a;b=this.setOptions(b);ca(this,{index:c,options:b,name:b.name||"Series "+(c+1),state:Ib,pointAttr:{},visible:b.visible!==false,selected:b.selected===true});c=
b.events;for(d in c)ra(this,d,c[d]);if(c&&c.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=true;this.getColor();this.getSymbol();this.setData(b.data,false)},autoIncrement:function(){var a=this.options,b=this.xIncrement;b=C(b,a.pointStart,0);this.pointInterval=C(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],d=this.points;A(d,function(c,e){if(c.y===null){e>a+1&&b.push(d.slice(a+1,
e));a=e}else e===d.length-1&&b.push(d.slice(a+1,e+1))});this.segments=b},setOptions:function(a){var b=this.chart.options.plotOptions,d=a.data;a.data=null;a=Y(b[this.type],b.series,a);a.data=d;return a},getColor:function(){var a=this.chart.options.colors,b=this.chart.counters;this.color=this.options.color||a[b.color++]||"#0000ff";b.wrapColor(a.length)},getSymbol:function(){var a=this.chart.options.symbols,b=this.chart.counters;this.symbol=this.options.marker.symbol||a[b.symbol++];b.wrapSymbol(a.length)},
addPoint:function(a,b,d,c){var e=this.data,f=this.graph,g=this.area,h=this.chart,i=this.xData,j=this.yData,k=f.shift||0,m=this.options.data;xc(c,h);if(f&&d)f.shift=k+1;if(g){g.shift=k+1;g.isArea=true}b=C(b,true);c={series:this};this.pointClass.prototype.applyOptions.apply(c,[a]);i.push(c.x);j.push(c.y);m.push(a);if(d)if(e[0])e[0].remove(false);else{e.shift();i.shift();j.shift();m.shift()}this.getAttribs();this.isDirtyData=this.isDirty=true;b&&h.redraw()},setData:function(a,b){var d=this.points,c=
this.options,e=this.initialColor,f=this.chart;this.xIncrement=null;if(M(e))f.counters.color=e;e=[];var g=[],h=a.length,i;if(h>(c.turboThreshold||1E3))if(Xc(a[0])){i=C(c.pointStart,0);var j=C(c.pointInterval,1);for(c=0;c<h;c++){e[c]=i;g[c]=a[c];i+=j}this.xIncrement=i}else{if(a[0].constructor===Array)if(this.valueCount===4)for(c=0;c<h;c++){i=a[c];e[c]=i[0];g[c]=i.slice(1,5)}else for(c=0;c<h;c++){i=a[c];e[c]=i[0];g[c]=i[1]}}else for(c=0;c<h;c++){i={series:this};this.pointClass.prototype.applyOptions.apply(i,
[a[c]]);e[c]=i.x;g[c]=i.y}this.data=null;this.options.data=a;this.xData=e;this.yData=g;for(c=d&&d.length||0;c--;)d[c].destroy();this.isDirty=this.isDirtyData=f.isDirtyBox=true;C(b,true)&&f.redraw(false)},remove:function(a,b){var d=this,c=d.chart;a=C(a,true);if(!d.isRemoving){d.isRemoving=true;Ha(d,"remove",null,function(){d.destroy();c.isDirtyLegend=c.isDirtyBox=true;a&&c.redraw(b)})}d.isRemoving=false},processData:function(){var a=this.xData,b=this.yData,d=a.length,c=0,e,f=this.options.cropThreshold;
if(!f||d>f){e=this.xAxis.getExtremes();f=e.min;var g=e.max,h=d-1;if(a[0]<f||a[h]>g){for(e=0;e<d;e++)if(a[e]>=f){c=ja(0,e-1);break}for(;e<d;e++)if(a[e]>g){h=e+1;break}a=a.slice(c,h);b=b.slice(c,h)}}this.cropStart=c;this.processedXData=a;this.processedYData=b},generatePoints:function(){var a=this.options.data,b=this.data,d,c=this.processedXData,e=this.processedYData,f=this.pointClass,g=c.length,h=this.cropStart||0,i,j=this.hasGroupedData,k=[],m;if(!b&&!j){b=[];b.length=a.length;b=this.data=b}for(m=
0;m<g;m++){i=h+m;if(j)k[m]=(new f).init(this,[c[m]].concat(oc(e[m])));else{if(b[i])i=b[i];else b[i]=i=(new f).init(this,a[i],c[m]);k[m]=i}}if(b&&g!==(d=b.length))for(m=0;m<d;m++){if(m===h&&!j)m+=g;b[m]&&b[m].destroyElements()}this.data=b;this.points=k},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.chart,b=this.options.stacking,d=this.xAxis,c=d.categories,e=this.yAxis,f=this.points,g=f.length,h=d.leastDistance,i;for(i=0;i<g;i++){var j=f[i],k=j.x,m=j.y,
t=j.low,B=e.stacks[(m<0?"-":"")+this.stackKey];j.plotX=this.xAxis.translate(k);if(b&&this.visible&&B&&B[k]){t=B[k];k=t.total;t.cum=t=t.cum-m;m=t+m;if(b==="percent"){t=k?t*100/k:0;m=k?m*100/k:0}j.percentage=k?j.y*100/k:0;j.stackTotal=k}if(M(t))j.yBottom=e.translate(t,0,1,0,1);if(m!==null)j.plotY=e.translate(m,0,1,0,1);j.clientX=a.inverted?a.plotHeight-j.plotX:j.plotX;j.category=c&&c[j.x]!==ha?c[j.x]:j.x;if(this.getDistance&&i){j=nb(j.plotX-f[i-1].plotX);h=h===ha?j:Ea(j,h)}}d.leastDistance=h;this.getSegments()},
setTooltipPoints:function(a){var b=this.chart,d=b.inverted,c=[];b=N((d?b.plotTop:b.plotLeft)+b.plotSizeX);var e,f;e=this.xAxis;var g,h,i=[];if(a)this.tooltipPoints=null;A(this.segments||this.points,function(j){c=c.concat(j)});if(e&&e.reversed)c=c.reverse();a=c.length;for(h=0;h<a;h++){g=c[h];e=c[h-1]?c[h-1]._high+1:0;for(f=g._high=c[h+1]?Kb((g.plotX+(c[h+1]?c[h+1].plotX:b))/2):b;e<=f;)i[d?b-e++:e++]=g}this.tooltipPoints=i},onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(!(!Hb&&a.mouseIsDown)){b&&
b!==this&&b.onMouseOut();this.options.events.mouseOver&&Ha(this,"mouseOver");this.setState(Tb);a.hoverSeries=this}},onMouseOut:function(){var a=this.options,b=this.chart,d=b.tooltip,c=b.hoverPoint;c&&c.onMouseOut();this&&a.events.mouseOut&&Ha(this,"mouseOut");d&&!a.stickyTracking&&d.hide();this.setState();b.hoverSeries=null},animate:function(a){var b=this.chart,d=this.clipRect,c=this.options.animation;if(c&&!bc(c))c={};if(a){if(!d.isAnimating){d.attr("width",0);d.isAnimating=true}}else{d.animate({width:b.plotSizeX},
c);this.animate=null}},drawPoints:function(){var a,b=this.points,d=this.chart,c,e,f,g,h,i;if(this.options.marker.enabled)for(f=b.length;f--;){g=b[f];c=g.plotX;e=g.plotY;i=g.graphic;if(e!==ha&&!isNaN(e)){a=g.pointAttr[g.selected?"select":Ib];h=a.r;if(i)i.animate({x:c-h,y:e-h,width:2*h,height:2*h});else g.graphic=d.renderer.symbol(C(g.marker&&g.marker.symbol,this.symbol),c-h,e-h,2*h,2*h).attr(a).add(this.group)}}},convertAttribs:function(a,b,d,c){var e=this.pointAttrToOptions,f,g,h={};a=a||{};b=b||
{};d=d||{};c=c||{};for(f in e){g=e[f];h[f]=C(a[g],b[f],d[f],c[f])}return h},getAttribs:function(){var a=this,b=Qa[a.type].marker?a.options.marker:a.options,d=b.states,c=d[Tb],e,f=a.color,g={stroke:f,fill:f},h=a.points,i=[],j,k=a.pointAttrToOptions,m;if(a.options.marker){c.radius=c.radius||b.radius+2;c.lineWidth=c.lineWidth||b.lineWidth+1}else c.color=c.color||mc(c.color||f).brighten(c.brightness).get();i[Ib]=a.convertAttribs(b,g);A([Tb,"select"],function(t){i[t]=a.convertAttribs(d[t],i[Ib])});a.pointAttr=
i;for(f=h.length;f--;){g=h[f];if((b=g.options&&g.options.marker||g.options)&&b.enabled===false)b.radius=0;e=false;if(g.options)for(m in k)if(M(b[k[m]]))e=true;if(e){j=[];d=b.states||{};e=d[Tb]=d[Tb]||{};if(!a.options.marker)e.color=mc(e.color||g.options.color).brighten(e.brightness||c.brightness).get();j[Ib]=a.convertAttribs(b,i[Ib]);j[Tb]=a.convertAttribs(d[Tb],i[Tb],j[Ib]);j.select=a.convertAttribs(d.select,i.select,j[Ib])}else j=i;g.pointAttr=j}},destroy:function(){var a=this,b=a.chart,d=/\/5[0-9\.]+ (Safari|Mobile)\//.test(Mc),
c,e,f=a.data||[],g,h;Ub(a);a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;A(["area","graph","dataLabelsGroup","group","tracker"],function(i){if(a[i]){c=d&&i==="group"?"hide":"destroy";a[i][c]()}});if(b.hoverSeries===a)b.hoverSeries=null;Yc(b.series,a);for(h in a)delete a[h]},drawDataLabels:function(){if(this.options.dataLabels.enabled){var a=this,b,d,c=a.points,e=a.options.dataLabels,f,g=a.dataLabelsGroup,h=a.chart,i=h.inverted,j=a.type,
k;k=a.options.stacking;var m=j==="column"||j==="bar",t=e.verticalAlign===null,B=e.y===null;if(m)if(k){if(t)e=Y(e,{verticalAlign:"middle"});if(B)e=Y(e,{y:{top:14,middle:4,bottom:-6}[e.verticalAlign]})}else{if(t)e=Y(e,{verticalAlign:"top"});if(B)e=Y(e,{y:-6})}if(!g)g=a.dataLabelsGroup=h.renderer.g("data-labels").attr({visibility:a.visible?Lb:Cb,zIndex:6}).translate(h.plotLeft,h.plotTop).add();k=e.color;if(k==="auto")k=null;e.style.color=C(k,a.color);A(c,function(v){var J=v.barX,x=J&&J+v.barW/2||v.plotX||
-999,o=C(v.plotY,-999),s=v.dataLabel,q=e.align,r=B?v.y>0?-6:12:e.y;f=e.formatter.call(v.getLabelConfig());b=(i?h.plotWidth-o:x)+e.x;d=(i?h.plotHeight-x:o)+r;if(j==="column")b+={left:-1,right:1}[q]*v.barW/2||0;if(s){if(i&&!e.y)d=d+la(s.styles.lineHeight)*0.9-s.getBBox().height/2;s.attr({text:f}).animate({x:b,y:d})}else if(M(f)){s=v.dataLabel=h.renderer.text(f,b,d).attr({align:q,rotation:e.rotation,zIndex:1}).css(e.style).add(g);i&&!e.y&&s.attr({y:d+la(s.styles.lineHeight)*0.9-s.getBBox().height/2})}if(m&&
a.options.stacking){x=v.barY;o=v.barW;v=v.barH;s.align(e,null,{x:i?h.plotWidth-x-v:J,y:i?h.plotHeight-J-o:x,width:i?v:o,height:i?o:v})}})}},drawGraph:function(){var a=this,b=a.options,d=a.graph,c=[],e,f=a.area,g=a.group,h=b.lineColor||a.color,i=b.lineWidth,j=b.dashStyle,k,m=a.chart.renderer,t=a.yAxis.getThreshold(b.threshold),B=/^area/.test(a.type),v=[],J=[];A(a.segments,function(x){k=[];A(x,function(r,y){if(a.getPointSpline)k.push.apply(k,a.getPointSpline(x,r,y));else{k.push(y?Ga:$a);y&&b.step&&
k.push(r.plotX,x[y-1].plotY);k.push(r.plotX,r.plotY)}});if(x.length>1)c=c.concat(k);else v.push(x[0]);if(B){var o=[],s,q=k.length;for(s=0;s<q;s++)o.push(k[s]);q===3&&o.push(Ga,k[1],k[2]);if(b.stacking&&a.type!=="areaspline")for(s=x.length-1;s>=0;s--)o.push(x[s].plotX,x[s].yBottom);else o.push(Ga,x[x.length-1].plotX,t,Ga,x[0].plotX,t);J=J.concat(o)}});a.graphPath=c;a.singlePoints=v;if(B){e=C(b.fillColor,mc(a.color).setOpacity(b.fillOpacity||0.75).get());if(f)f.animate({d:J});else a.area=a.chart.renderer.path(J).attr({fill:e}).add(g)}if(d)d.animate({d:c});
else if(i){d={stroke:h,"stroke-width":i};if(j)d.dashstyle=j;a.graph=m.path(c).attr(d).add(g).shadow(b.shadow)}},render:function(){var a=this,b=a.chart,d,c,e=a.options,f=e.clip!==false,g=e.animation,h=g&&a.animate;g=h?g&&g.duration||500:0;var i=a.clipRect;c=b.renderer;if(!i){i=a.clipRect=!b.hasRendered&&b.clipRect?b.clipRect:c.clipRect(0,0,b.plotSizeX,b.plotSizeY);if(!b.clipRect)b.clipRect=i}if(!a.group){d=a.group=c.g("series");if(b.inverted){c=function(){d.attr({width:b.plotWidth,height:b.plotHeight}).invert()};
c();ra(b,"resize",c)}f&&d.clip(a.clipRect);d.attr({visibility:a.visible?Lb:Cb,zIndex:e.zIndex}).translate(a.xAxis.left,a.yAxis.top).add(b.seriesGroup)}a.drawDataLabels();h&&a.animate(true);a.getAttribs();a.drawGraph&&a.drawGraph();a.drawPoints();a.options.enableMouseTracking!==false&&a.drawTracker();h&&a.animate();setTimeout(function(){i.isAnimating=false;if((d=a.group)&&i!==b.clipRect&&i.renderer){if(f)d.clip(a.clipRect=b.clipRect);i.destroy()}},g);a.isDirty=a.isDirtyData=false},redraw:function(){var a=
this.chart,b=this.group;if(b){a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight});b.animate({translateX:this.xAxis.left,translateY:this.yAxis.top})}this.translate();this.setTooltipPoints(true);this.isDirtyData&&Ha(this,"updatedData");this.render()},setState:function(a){var b=this.options,d=this.graph,c=b.states;b=b.lineWidth;a=a||Ib;if(this.state!==a){this.state=a;if(!(c[a]&&c[a].enabled===false)){if(a)b=c[a].lineWidth||b+1;if(d&&!d.dashstyle)d.attr({"stroke-width":b},a?0:500)}}},setVisible:function(a,
b){var d=this.chart,c=this.legendItem,e=this.group,f=this.tracker,g=this.dataLabelsGroup,h,i=this.points,j=d.options.chart.ignoreHiddenSeries;h=this.visible;h=(this.visible=a=a===ha?!h:a)?"show":"hide";e&&e[h]();if(f)f[h]();else for(e=i.length;e--;){f=i[e];f.tracker&&f.tracker[h]()}g&&g[h]();c&&d.legend.colorizeItem(this,a);this.isDirty=true;this.options.stacking&&A(d.series,function(k){if(k.options.stacking&&k.visible)k.isDirty=true});if(j)d.isDirtyBox=true;b!==false&&d.redraw();Ha(this,h)},show:function(){this.setVisible(true)},
hide:function(){this.setVisible(false)},select:function(a){this.selected=a=a===ha?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;Ha(this,a?"select":"unselect")},drawTracker:function(){var a=this,b=a.options,d=[].concat(a.graphPath),c=d.length,e=a.chart,f=e.options.tooltip.snap,g=a.tracker,h=b.cursor;h=h&&{cursor:h};var i=a.singlePoints,j;if(c)for(j=c+1;j--;){d[j]===$a&&d.splice(j+1,0,d[j+1]-f,d[j+2],Ga);if(j&&d[j]===$a||j===c)d.splice(j,0,Ga,d[j-2]+f,d[j-1])}for(j=0;j<i.length;j++){c=i[j];
d.push($a,c.plotX-f,c.plotY,Ga,c.plotX+f,c.plotY)}if(g)g.attr({d:d});else a.tracker=e.renderer.path(d).attr({isTracker:true,stroke:ye,fill:Jb,"stroke-width":b.lineWidth+2*f,visibility:a.visible?Lb:Cb,zIndex:1}).on(Hb?"touchstart":"mouseover",function(){e.hoverSeries!==a&&a.onMouseOver()}).on("mouseout",function(){b.stickyTracking||a.onMouseOut()}).css(h).add(e.trackerGroup)}};S=yb(xb);fb.line=S;S=yb(xb,{type:"area",useThreshold:true});fb.area=S;S=yb(xb,{type:"spline",getPointSpline:function(a,b,d){var c=
b.plotX,e=b.plotY,f=a[d-1],g=a[d+1],h,i,j,k;if(d&&d<a.length-1){a=f.plotY;j=g.plotX;g=g.plotY;var m;h=(1.5*c+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*c+j)/2.5;k=(1.5*e+g)/2.5;m=(k-i)*(j-c)/(j-h)+e-k;i+=m;k+=m;if(i>a&&i>e){i=ja(a,e);k=2*e-i}else if(i<a&&i<e){i=Ea(a,e);k=2*e-i}if(k>g&&k>e){k=ja(g,e);i=2*e-k}else if(k<g&&k<e){k=Ea(g,e);i=2*e-k}b.rightContX=j;b.rightContY=k}if(d){b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||c,i||e,c,e];f.rightContX=f.rightContY=null}else b=[$a,c,e];return b}});fb.spline=
S;S=yb(S,{type:"areaspline",useThreshold:true});fb.areaspline=S;var vd=yb(xb,{type:"column",useThreshold:true,getDistance:true,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},init:function(){xb.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&A(b.series,function(d){if(d.type===a.type)d.isDirty=true})},translate:function(){var a=this,b=a.chart,d=a.options,c=d.stacking,e=d.borderWidth,f=0,g=a.xAxis,h=g.reversed,i=g.categories,
j={},k,m;xb.prototype.translate.apply(a);A(b.series,function(r){if(r.type===a.type&&r.visible&&a.options.group===r.options.group){if(r.options.stacking){k=r.stackKey;if(j[k]===ha)j[k]=f++;m=j[k]}else m=f++;r.columnIndex=m}});var t=a.points;g=nb(C(g.leastDistance,b.plotSizeX/(i&&i.length||1)));i=g*d.groupPadding;var B=(g-2*i)/f,v=d.pointWidth,J=M(v)?(B-v)/2:B*d.pointPadding,x=ld(ja(C(v,B-2*J),1)),o=J+(i+((h?f-a.columnIndex:a.columnIndex)||0)*B-g/2)*(h?-1:1),s=a.yAxis.getThreshold(d.threshold),q=C(d.minPointLength,
5);A(t,function(r){var y=r.plotY,U=r.yBottom||s,X=r.plotX+o,Ua=ld(Ea(y,U)),bb=ld(ja(y,U)-Ua),Ia=a.yAxis.stacks[(r.y<0?"-":"")+a.stackKey],gb;c&&a.visible&&Ia&&Ia[r.x]&&Ia[r.x].setOffset(o,x);if(nb(bb)<q){if(q){bb=q;Ua=nb(Ua-s)>q?U-q:s-(y<=s?q:0)}gb=Ua-3}ca(r,{barX:X,barY:Ua,barW:x,barH:bb});r.shapeType="rect";y=ca(b.renderer.Element.prototype.crisp.apply({},[e,X,Ua,x,bb]),{r:d.borderRadius});if(e%2){y.y-=1;y.height+=1}r.shapeArgs=y;r.trackerArgs=M(gb)&&Y(r.shapeArgs,{height:ja(6,bb+3),y:gb})})},getSymbol:function(){},
drawGraph:function(){},drawPoints:function(){var a=this,b=a.options,d=a.chart.renderer,c,e;A(a.points,function(f){var g=f.plotY;if(g!==ha&&!isNaN(g)&&f.y!==null){c=f.graphic;e=f.shapeArgs;if(c){rd(c);c.animate(e)}else f.graphic=c=d[f.shapeType](e).attr(f.pointAttr[f.selected?"select":Ib]).add(a.group).shadow(b.shadow)}})},drawTracker:function(){var a=this,b=a.chart,d=b.renderer,c,e,f=+new Date,g=a.options.cursor,h=g&&{cursor:g},i;A(a.points,function(j){e=j.tracker;c=j.trackerArgs||j.shapeArgs;delete c.strokeWidth;
if(j.y!==null)if(e)e.attr(c);else j.tracker=d[j.shapeType](c).attr({isTracker:f,fill:ye,visibility:a.visible?Lb:Cb,zIndex:1}).on(Hb?"touchstart":"mouseover",function(k){i=k.relatedTarget||k.fromElement;b.hoverSeries!==a&&Aa(i,"isTracker")!==f&&a.onMouseOver();j.onMouseOver()}).on("mouseout",function(k){if(!a.options.stickyTracking){i=k.relatedTarget||k.toElement;Aa(i,"isTracker")!==f&&a.onMouseOut()}}).css(h).add(j.group||b.trackerGroup)})},animate:function(a){var b=this,d=b.points;if(!a){A(d,function(c){var e=
c.graphic;c=c.shapeArgs;if(e){e.attr({height:0,y:b.yAxis.translate(0,0,1)});e.animate({height:c.height,y:c.y},b.options.animation)}});b.animate=null}},remove:function(){var a=this,b=a.chart;b.hasRendered&&A(b.series,function(d){if(d.type===a.type)d.isDirty=true});xb.prototype.remove.apply(a,arguments)}});fb.column=vd;S=yb(vd,{type:"bar",init:function(a){a.inverted=this.inverted=true;vd.prototype.init.apply(this,arguments)}});fb.bar=S;S=yb(xb,{type:"scatter",translate:function(){var a=this;xb.prototype.translate.apply(a);
A(a.points,function(b){b.shapeType="circle";b.shapeArgs={x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}})},drawTracker:function(){var a=this,b=a.options.cursor,d=b&&{cursor:b},c;A(a.points,function(e){(c=e.graphic)&&c.attr({isTracker:true}).on("mouseover",function(){a.onMouseOver();e.onMouseOver()}).on("mouseout",function(){a.options.stickyTracking||a.onMouseOut()}).css(d)})}});fb.scatter=S;S=yb(Nc,{init:function(){Nc.prototype.init.apply(this,arguments);var a=this,b;ca(a,{visible:a.visible!==
false,name:C(a.name,"Slice")});b=function(){a.slice()};ra(a,"select",b);ra(a,"unselect",b);return a},setVisible:function(a){var b=this.series.chart,d=this.tracker,c=this.dataLabel,e=this.connector,f;f=(this.visible=a=a===ha?!this.visible:a)?"show":"hide";this.group[f]();d&&d[f]();c&&c[f]();e&&e[f]();this.legendItem&&b.legend.colorizeItem(this,a)},slice:function(a,b,d){var c=this.series.chart,e=this.slicedTranslation;xc(d,c);C(b,true);a=this.sliced=M(a)?a:!this.sliced;a={translateX:a?e[0]:c.plotLeft,
translateY:a?e[1]:c.plotTop};this.group.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)}});S=yb(xb,{type:"pie",isCartesian:false,pointClass:S,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:function(){this.initialColor=this.chart.counters.color},animate:function(){var a=this;A(a.points,function(b){var d=b.graphic;b=b.shapeArgs;var c=-lc/2;if(d){d.attr({r:0,start:c,end:c});d.animate({r:b.r,start:b.start,end:b.end},a.options.animation)}});a.animate=
null},setData:function(){xb.prototype.setData.apply(this,arguments);this.processData();this.generatePoints()},translate:function(){var a=0,b=-0.25,d=this.options,c=d.slicedOffset,e=c+d.borderWidth,f=d.center.concat([d.size,d.innerSize||0]),g=this.chart,h=g.plotWidth,i=g.plotHeight,j,k,m,t=this.points,B=2*lc,v,J=Ea(h,i),x,o,s,q=d.dataLabels.distance;f=Wc(f,function(r,y){return(x=/%$/.test(r))?[h,i,J,J][y]*la(r)/100:r});this.getX=function(r,y){m=na.asin((r-f[1])/(f[2]/2+q));return f[0]+(y?-1:1)*Mb(m)*
(f[2]/2+q)};this.center=f;A(t,function(r){a+=r.y});A(t,function(r){v=a?r.y/a:0;j=N(b*B*1E3)/1E3;b+=v;k=N(b*B*1E3)/1E3;r.shapeType="arc";r.shapeArgs={x:f[0],y:f[1],r:f[2]/2,innerR:f[3]/2,start:j,end:k};m=(k+j)/2;r.slicedTranslation=Wc([Mb(m)*c+g.plotLeft,Vb(m)*c+g.plotTop],N);o=Mb(m)*f[2]/2;s=Vb(m)*f[2]/2;r.tooltipPos=[f[0]+o*0.7,f[1]+s*0.7];r.labelPos=[f[0]+o+Mb(m)*q,f[1]+s+Vb(m)*q,f[0]+o+Mb(m)*e,f[1]+s+Vb(m)*e,f[0]+o,f[1]+s,q<0?"center":m<B/4?"left":"right",m];r.percentage=v*100;r.total=a});this.setTooltipPoints()},
render:function(){this.getAttribs();this.drawPoints();this.options.enableMouseTracking!==false&&this.drawTracker();this.drawDataLabels();this.options.animation&&this.animate&&this.animate();this.isDirty=this.isDirtyData=false},drawPoints:function(){var a=this.chart,b=a.renderer,d,c,e,f=this.options.shadow,g,h;A(this.points,function(i){c=i.graphic;h=i.shapeArgs;e=i.group;g=i.shadowGroup;if(f&&!g)g=i.shadowGroup=b.g("shadow").attr({zIndex:4}).add();if(!e)e=i.group=b.g("point").attr({zIndex:5}).add();
d=i.sliced?i.slicedTranslation:[a.plotLeft,a.plotTop];e.translate(d[0],d[1]);g&&g.translate(d[0],d[1]);if(c)c.animate(h);else i.graphic=b.arc(h).attr(ca(i.pointAttr[Ib],{"stroke-linejoin":"round"})).add(i.group).shadow(f,g);i.visible===false&&i.setVisible(false)})},drawDataLabels:function(){var a=this.points,b,d=this.chart,c=this.options.dataLabels,e=C(c.connectorPadding,10),f=C(c.connectorWidth,1),g,h,i=c.distance>0,j,k,m=this.center[1],t=[[],[],[],[]],B,v,J,x,o,s,q,r=4,y;xb.prototype.drawDataLabels.apply(this);
A(a,function(U){var X=U.labelPos[7];t[X<0?0:X<lc/2?1:X<lc?2:3].push(U)});t[1].reverse();t[3].reverse();for(q=function(U,X){return U.y>X.y};r--;){a=0;b=[].concat(t[r]);b.sort(q);for(y=b.length;y--;)b[y].rank=y;for(x=0;x<2;x++){k=(s=r%3)?9999:-9999;o=s?-1:1;for(y=0;y<t[r].length;y++){b=t[r][y];if(g=b.dataLabel){h=b.labelPos;J=Lb;B=h[0];v=h[1];j||(j=g&&g.getBBox().height);if(i)if(x&&b.rank<a)J=Cb;else if(!s&&v<k+j||s&&v>k-j){v=k+o*j;B=this.getX(v,r>1);if(!s&&v+j>m||s&&v-j<m)if(x)J=Cb;else a++}if(b.visible===
false)J=Cb;if(J===Lb)k=v;if(x){g.attr({visibility:J,align:h[6]})[g.moved?"animate":"attr"]({x:B+c.x+({left:e,right:-e}[h[6]]||0),y:v+c.y});g.moved=true;if(i&&f){g=b.connector;h=[$a,B+(h[6]==="left"?5:-5),v,Ga,B,v,Ga,h[2],h[3],Ga,h[4],h[5]];if(g){g.animate({d:h});g.attr("visibility",J)}else b.connector=g=this.chart.renderer.path(h).attr({"stroke-width":f,stroke:c.connectorColor||"#606060",visibility:J,zIndex:3}).translate(d.plotLeft,d.plotTop).add()}}}}}}},drawTracker:vd.prototype.drawTracker,getSymbol:function(){}});
fb.pie=S;S=xb.prototype;var Ie=S.processData,Je=S.generatePoints,Ke=S.destroy;S.processData=function(){var a=this.options,b=a.dataGrouping;Ie.apply(this);if(!(!b||b.enabled===false)){var d,c=this.processedXData,e=this.processedYData,f=this.data;a=a.data;d=this.chart.plotSizeX;var g=b.groupPixelWidth,h=d/g,i=b.approximation,j=i==="average"||i==="sum",k=c.length,m=this.valueCount===4,t=this.groupedData,B=[],v=[];A(t||[],function(Ua,bb){if(Ua)t[bb]=Ua.destroy()});this.hasGroupedData=false;if(k>h){this.hasGroupedData=
true;this.points=null;h=c[0];var J=c[k-1];g=g*(J-h)/d;var x=Sd(g,h,J,null,b.units),o,s,q=ha,r=null,y=null,U=null,X=null;for(d=o=0;d<k;d++){for(;x[1]!==ha&&c[d]>=x[1];){if(i==="average"&&q!==ha&&q!==null)q/=o;o=x.shift();if(q!==ha||m){B.push(o);if(m){v.push([r,y,U,X]);r=y=U=X=null}else v.push(q)}q=ha;o=0}s=e[d];if(j&&!m)q=q===ha||q===null?s:q+s;else if(m){X=this.cropStart+d;X=f&&f[X]||this.pointClass.prototype.applyOptions.apply({},[a[X]]);if(r===null)r=X.open;y=y===null?X.high:ja(y,X.high);U=U===
null?X.low:Ea(U,X.low);X=X.close}else if(i==="open"&&q===ha)q=s;else if(i==="high")q=q===ha?s:ja(q,s);else if(i==="low")q=q===ha?s:Ea(q,s);else if(i==="close")q=s;o++}if(b.smoothed){d=B.length-1;for(B[d]=J;d--&&d;)B[d]+=g/2;B[0]=h}this.tooltipHeaderFormat=b.dateTimeLabelFormats[x.unit[0]];this.unit=x.unit}else{B=c;v=e;this.unit=this.tooltipHeaderFormat=null}this.processedXData=B;this.processedYData=v}};S.generatePoints=function(){Je.apply(this);this.groupedData=this.hasGroupedData?this.points:null};
S.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();Ke.apply(this)};S={second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"};Qa.line.dataGrouping=Qa.spline.dataGrouping=Qa.area.dataGrouping=Qa.areaspline.dataGrouping={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:S,units:[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],
["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]]};Qa.column.dataGrouping={approximation:"sum",groupPixelWidth:10,dateTimeLabelFormats:S};Qa.ohlc=Y(Qa.column,{lineWidth:1,dataGrouping:{groupPixelWidth:5},states:{hover:{lineWidth:3}}});S=yb(Nc,{applyOptions:function(a){var b=this.series,d=0;if(typeof a==="object"&&typeof a.length!=="number"){ca(this,a);this.options=a}else if(a.length){if(a.length===5){if(typeof a[0]==="string")this.name=
a[0];else if(typeof a[0]==="number")this.x=a[0];d++}this.open=a[d++];this.high=a[d++];this.low=a[d++];this.close=a[d++]}this.y=this.high;if(this.x===ha&&b)this.x=b.autoIncrement();return this},tooltipFormatter:function(){var a=this.series;return['<span style="color:'+a.color+';font-weight:bold">',this.name||a.name,"</span><br/> Open: ",this.open,"<br/>High: ",this.high,"<br/>Low: ",this.low,"<br/>Close: ",this.close,"<br/>"].join("")}});var Od=yb(fb.column,{type:"ohlc",valueCount:4,pointClass:S,useThreshold:false,
pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},translate:function(){var a=this.yAxis;fb.column.prototype.translate.apply(this);A(this.points,function(b){if(b.open!==null)b.plotOpen=a.translate(b.open,0,1);if(b.close!==null)b.plotClose=a.translate(b.close,0,1)})},drawPoints:function(){var a=this,b=a.chart,d,c,e,f,g,h,i,j;A(a.points,function(k){if(k.plotY!==ha){i=k.graphic;d=k.pointAttr[k.selected?"selected":""];f=d["stroke-width"]%2/2;j=N(k.plotX)+f;g=N(k.barW/2);h=["M",j,N(k.yBottom),
"L",j,N(k.plotY)];if(k.open!==null){c=N(k.plotOpen)+f;h.push("M",j,c,"L",j-g,c)}if(k.close!==null){e=N(k.plotClose)+f;h.push("M",j,e,"L",j+g,e)}if(i)i.animate({d:h});else k.graphic=b.renderer.path(h).attr(d).add(a.group)}})},animate:null});fb.ohlc=Od;Qa.candlestick=Y(Qa.column,{lineColor:"black",lineWidth:1,upColor:"white",states:{hover:{lineWidth:2}}});S=yb(Od,{type:"candlestick",pointAttrToOptions:{fill:"color",stroke:"lineColor","stroke-width":"lineWidth"},getAttribs:function(){Od.prototype.getAttribs.apply(this,
arguments);var a=this.options,b=a.states;a=a.upColor;var d=Y(this.pointAttr);d[""].fill=a;d.hover.fill=b.hover.upColor||a;d.select.fill=b.select.upColor||a;A(this.points,function(c){if(c.open<c.close)c.pointAttr=d})},drawPoints:function(){var a=this,b=a.chart,d,c,e,f,g,h,i,j,k,m;A(a.points,function(t){j=t.graphic;if(t.plotY!==ha){d=t.pointAttr[t.selected?"selected":""];h=d["stroke-width"]%2/2;i=N(t.plotX)+h;c=N(t.plotOpen)+h;e=N(t.plotClose)+h;f=na.min(c,e);g=na.max(c,e);m=N(t.barW/2);k=["M",i-m,
g,"L",i-m,f,"L",i+m,f,"L",i+m,g,"L",i-m,g,"M",i,g,"L",i,N(t.yBottom),"M",i,f,"L",i,N(t.plotY),"Z"];if(j)j.animate({d:k});else t.graphic=b.renderer.path(k).attr(d).add(a.group)}})}});fb.candlestick=S;var Pd=Tc.prototype.symbols;Qa.flags=Y(Qa.column,{fillColor:"white",lineWidth:1,shape:"flag",stackDistance:7,states:{hover:{lineColor:"black",fillColor:"#FCFFC5"}},style:{fontSize:"11px",fontWeight:"bold",textAlign:"center"},y:-30});fb.flags=yb(fb.column,{type:"flags",noSharedTooltip:true,useThreshold:false,
init:xb.prototype.init,pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth",r:"radius"},translate:function(){fb.column.prototype.translate.apply(this);var a=this.chart,b=this.points,d=b.length-1,c,e,f,g=(c=this.options.onSeries)&&a.get(c),h,i;if(g){h=g.points;c=h.length;for(b.sort(function(j,k){return j.x-k.x});c--&&b[d];){e=b[d];i=h[c];if(i.x<=e.x){e.plotY=i.plotY;d--;c++;if(d<0)break}}}A(b,function(j,k){if(!g)j.plotY=a.plotHeight;if((f=b[k-1])&&f.plotX===j.plotX){if(f.stackIndex===
ha)f.stackIndex=0;j.stackIndex=f.stackIndex+1}})},drawPoints:function(){var a,b=this.points,d=this.chart.renderer,c,e,f=this.options,g=f.y,h=f.shape,i,j,k,m,t=f.lineWidth%2/2,B;for(j=b.length;j--;){k=b[j];c=k.plotX+t;a=k.stackIndex;e=k.plotY+g+t-(a!==ha&&a*f.stackDistance);if(isNaN(e))e=0;i=a?ha:k.plotX+t;B=a?ha:k.plotY;m=k.graphic;if(e!==ha){a=k.pointAttr[k.selected?"select":""];if(m)m.attr({x:c,y:e,r:a.r});else m=k.graphic=d.label(k.options.title||f.title||"A",c,e,h,i,B).css(Y(f.style,k.style)).attr(a).attr({align:h===
"flag"?"left":"center",width:f.width,height:f.height}).add(this.group);i=m.box;a=i.getBBox();k.shapeArgs=ca(a,{x:c-(h==="flag"?0:i.attr("width")/2),y:e})}}},drawTracker:function(){fb.column.prototype.drawTracker.apply(this);A(this.points,function(a){ra(a.tracker.element,"mouseover",function(){a.graphic.toFront()})})},tooltipFormatter:function(a){return a.point.text},animate:function(){}});Pd.flag=function(a,b,d,c,e){var f=e&&e.anchorX||a;e=e&&e.anchorY||b;return["M",f,e,"L",a,b+c,a,b,a+d,b,a+d,b+
c,a,b+c,"M",f,e,"Z"]};A(["circle","square"],function(a){Pd[a+"pin"]=function(b,d,c,e,f){var g=f&&f.anchorX;f=f&&f.anchorY;var h=Pd[a](b,d,c,e);g&&f&&h.push("M",b+c/2,d+e,"L",g,f);return h}});var ve=Hb?"touchstart":"mousedown",Ee=Hb?"touchmove":"mousemove",Fe=Hb?"touchend":"mouseup";S={linearGradient:[0,0,0,14],stops:[[0,"#FFF"],[1,"#CCC"]]};Fb=[].concat(Qa.line.dataGrouping.units);Fb[4][1]=[1,2,3,4];Fb[5][1]=[1,2,3];ca(Ra,{navigator:{handles:{backgroundColor:"#FFF",borderColor:"#666"},height:40,margin:10,
maskFill:"rgba(255, 255, 255, 0.75)",outlineColor:"#444",outlineWidth:1,series:{type:"areaspline",color:"#4572A7",fillOpacity:0.4,dataGrouping:{smoothed:true,units:Fb},lineWidth:1,marker:{enabled:false},shadow:false},xAxis:{tickWidth:0,lineWidth:0,gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",x:3,y:-4}},yAxis:{gridLineWidth:0,startOnTick:false,endOnTick:false,minPadding:0.1,maxPadding:0.1,labels:{enabled:false},title:{text:null},tickWidth:0}},scrollbar:{height:Hb?20:14,barBackgroundColor:S,
barBorderRadius:2,barBorderWidth:1,barBorderColor:"#666",buttonArrowColor:"#666",buttonBackgroundColor:S,buttonBorderColor:"#666",buttonBorderRadius:2,buttonBorderWidth:1,rifleColor:"#666",trackBackgroundColor:{linearGradient:[0,0,0,10],stops:[[0,"#EEE"],[1,"#FFF"]]},trackBorderColor:"#CCC",trackBorderWidth:1}});ca(Ra,{rangeSelector:{}});Ra.lang=Y(Ra.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From:",rangeSelectorTo:"To:"});gd.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();
e.render(ja(c.min,c.dataMin),Ea(c.max,c.dataMax))}function d(){c=a.xAxis[0].getExtremes();f.render(c.min,c.max)}var c,e=a.scroller,f=a.rangeSelector;if(e){ra(a.xAxis[0],"setExtremes",function(g){e.render(g.min,g.max)});ra(a,"resize",b);b()}if(f){ra(a.xAxis[0],"setExtremes",function(g){f.render(g.min,g.max)});ra(a,"resize",d);d()}});Highcharts.StockChart=function(a,b){var d=a.series,c={marker:{enabled:false,states:{hover:{enabled:true,radius:5}}},shadow:false,states:{hover:{lineWidth:2}}};a.yAxis=
Wc(oc(a.yAxis||{}),function(e){return Y({labels:{align:"left",x:2,y:-2},showLastLabel:false,title:{text:null}},e)});a.series=null;a=Y({chart:{panning:true},navigator:{enabled:true},scrollbar:{enabled:true},rangeSelector:{enabled:true},title:{text:null},tooltip:{shared:true,crosshairs:true},legend:{enabled:false},xAxis:{title:{text:null},showLastLabel:true},plotOptions:{line:c,spline:c,area:c,areaspline:c,column:{shadow:false,borderWidth:0}}},a,{chart:{inverted:false},xAxis:{type:"datetime",categories:null}});
a.series=d;return new gd(a,b)};ca(Highcharts,{Chart:gd,dateFormat:Gc,pathAnim:ud,getOptions:function(){return Ra},numberFormat:Qd,Point:Nc,Color:mc,Renderer:Tc,seriesTypes:fb,setOptions:function(a){Ra=Y(Ra,a);fe();return Ra},Series:xb,addEvent:ra,removeEvent:Ub,createElement:mb,discardElement:dd,css:Ja,each:A,extend:ca,map:Wc,merge:Y,pick:C,splat:oc,extendClass:yb,version:"Highstock 1.0 Beta"})})();

/*
 Highcharts Stock v1.0 Beta (2011-07-05)
 Exporting module

 (c) 2010-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function(){var i=Highcharts,y=i.Chart,C=i.addEvent,r=i.createElement,z=i.discardElement,u=i.css,w=i.merge,q=i.each,s=i.extend,D=Math.max,n=document,E=window,A="ontouchstart"in n.documentElement,B=i.setOptions({lang:{downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",exportButtonTitle:"Export to raster or vector image",printButtonTitle:"Print the chart"}});B.navigation={menuStyle:{border:"1px solid #A0A0A0",
background:"#FFFFFF"},menuItemStyle:{padding:"0 5px",background:"none",color:"#303030",fontSize:A?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{align:"right",backgroundColor:{linearGradient:[0,0,0,20],stops:[[0.4,"#F7F7F7"],[0.6,"#E3E3E3"]]},borderColor:"#B0B0B0",borderRadius:3,borderWidth:1,height:20,hoverBorderColor:"#909090",hoverSymbolFill:"#81A7CF",hoverSymbolStroke:"#4572A5",symbolFill:"#E0E0E0",symbolStroke:"#A0A0A0",symbolX:11.5,symbolY:10.5,verticalAlign:"top",
width:24,y:10}};B.exporting={type:"image/png",url:"http://export.highcharts.com/",width:800,buttons:{exportButton:{symbol:"exportIcon",x:-10,symbolFill:"#A8BF77",hoverSymbolFill:"#768F3E",_titleKey:"exportButtonTitle",menuItems:[{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}},
{text:"View SVG",onclick:function(){var b=this.getSVG().replace(/</g,"\n&lt;").replace(/>/g,"&gt;");n.body.innerHTML="<pre>"+b+"</pre>"}}]},printButton:{symbol:"printIcon",x:-36,symbolFill:"#B5C9DF",hoverSymbolFill:"#779ABF",_titleKey:"printButtonTitle",onclick:function(){this.print()}}}};s(y.prototype,{getSVG:function(b){var c=this,a,f,d,g=w(c.options,b);if(!n.createElementNS)n.createElementNS=function(e,h){var j=n.createElement(h);j.getBBox=function(){return i.Renderer.prototype.Element.prototype.getBBox.apply({element:j})};
return j};b=r("div",null,{position:"absolute",top:"-9999em",width:c.chartWidth+"px",height:c.chartHeight+"px"},n.body);s(g.chart,{renderTo:b,forExport:true});g.exporting.enabled=false;g.chart.plotBackgroundImage=null;g.series=[];q(c.series,function(e){d=e.options;d.animation=false;d.showCheckbox=false;d.visible=e.visible;if(d&&d.marker&&/^url\(/.test(d.marker.symbol))d.marker.symbol="circle";g.series.push(d)});a=new Highcharts.Chart(g);q(["xAxis","yAxis"],function(e){q(c[e],function(h,j){var o=a[e][j],
k=h.getExtremes(),m=k.userMin;k=k.userMax;if(m!==undefined||k!==undefined)o.setExtremes(m,k,true,false)})});f=a.container.innerHTML;g=null;a.destroy();z(b);f=f.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/isTracker="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" ]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,
function(e){return e.toLowerCase()});f=f.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'");if(f.match(/ xmlns="/g).length==2)f=f.replace(/xmlns="[^"]+"/,"");return f},exportChart:function(b,c){var a,f=this.getSVG(c);b=w(this.options.exporting,b);a=r("form",{method:"post",action:b.url},{display:"none"},n.body);q(["filename","type","width","svg"],function(d){r("input",{type:"hidden",name:d,value:{filename:b.filename||"chart",type:b.type,width:b.width,svg:f}[d]},null,a)});a.submit();
z(a)},print:function(){var b=this,c=b.container,a=[],f=c.parentNode,d=n.body,g=d.childNodes;if(!b.isPrinting){b.isPrinting=true;q(g,function(e,h){if(e.nodeType==1){a[h]=e.style.display;e.style.display="none"}});d.appendChild(c);E.print();setTimeout(function(){f.appendChild(c);q(g,function(e,h){if(e.nodeType==1)e.style.display=a[h]});b.isPrinting=false},1E3)}},contextMenu:function(b,c,a,f,d,g){var e=this,h=e.options.navigation,j=h.menuItemStyle,o=e.chartWidth,k=e.chartHeight,m="cache-"+b,l=e[m],p=
D(d,g),t,x;if(!l){e[m]=l=r("div",{className:"highcharts-"+b},{position:"absolute",zIndex:1E3,padding:p+"px"},e.container);t=r("div",null,s({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},h.menuStyle),l);x=function(){u(l,{display:"none"})};C(l,"mouseleave",x);q(c,function(v){if(v)r("div",{onmouseover:function(){u(this,h.menuItemHoverStyle)},onmouseout:function(){u(this,j)},innerHTML:v.text||i.getOptions().lang[v.textKey]},s({cursor:"pointer"},j),
t)[A?"ontouchstart":"onclick"]=function(){x();v.onclick.apply(e,arguments)}});e.exportMenuWidth=l.offsetWidth;e.exportMenuHeight=l.offsetHeight}b={display:"block"};if(a+e.exportMenuWidth>o)b.right=o-a-d-p+"px";else b.left=a-p+"px";if(f+g+e.exportMenuHeight>k)b.bottom=k-f-p+"px";else b.top=f+g-p+"px";u(l,b)},addButton:function(b){function c(){k.attr(p);o.attr(l)}var a=this,f=a.renderer,d=w(a.options.navigation.buttonOptions,b),g=d.onclick,e=d.menuItems,h=d.width,j=d.height,o,k,m;b=d.borderWidth;var l=
{stroke:d.borderColor},p={stroke:d.symbolStroke,fill:d.symbolFill};if(d.enabled!==false){o=f.rect(0,0,h,j,d.borderRadius,b).align(d,true).attr(s({fill:d.backgroundColor,"stroke-width":b,zIndex:19},l)).add();m=f.rect(0,0,h,j,0).align(d).attr({fill:"rgba(255, 255, 255, 0.001)",title:i.getOptions().lang[d._titleKey],zIndex:21}).css({cursor:"pointer"}).on("mouseover",function(){k.attr({stroke:d.hoverSymbolStroke,fill:d.hoverSymbolFill});o.attr({stroke:d.hoverBorderColor})}).on("mouseout",c).on("click",
c).add();if(e)g=function(){c();var t=m.getBBox();a.contextMenu("export-menu",e,t.x,t.y,h,j)};m.on("click",function(){g.apply(a,arguments)});k=f.symbol(d.symbol,d.symbolX,d.symbolY,(d.symbolSize||12)/2).align(d,true).attr(s(p,{"stroke-width":d.symbolStrokeWidth||1,zIndex:20})).add()}}});i.Renderer.prototype.symbols.exportIcon=function(b,c,a){return["M",b-a,c+a,"L",b+a,c+a,b+a,c+a*0.5,b-a,c+a*0.5,"Z","M",b,c+a*0.5,"L",b-a*0.5,c-a/3,b-a/6,c-a/3,b-a/6,c-a,b+a/6,c-a,b+a/6,c-a/3,b+a*0.5,c-a/3,"Z"]};i.Renderer.prototype.symbols.printIcon=
function(b,c,a){return["M",b-a,c+a*0.5,"L",b+a,c+a*0.5,b+a,c-a/3,b-a,c-a/3,"Z","M",b-a*0.5,c-a/3,"L",b-a*0.5,c-a,b+a*0.5,c-a,b+a*0.5,c-a/3,"Z","M",b-a*0.5,c+a*0.5,"L",b-a*0.75,c+a,b+a*0.75,c+a,b+a*0.5,c+a*0.5,"Z"]};y.prototype.callbacks.push(function(b){var c,a=b.options.exporting,f=a.buttons;if(a.enabled!==false)for(c in f)b.addButton(f[c])})})();
