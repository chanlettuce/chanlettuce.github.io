(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),d=a.n(s),o=a("vUet"),u=["xl","lg","md","sm","xs"],c=d.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.noGutters,c=e.as,f=void 0===c?"div":c,m=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(o.a)(a,"row"),g=p+"-cols",h=[];return u.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+g+r+"-"+t)})),d.a.createElement(f,Object(r.a)({ref:t},m,{className:l.a.apply(void 0,[i,p,s&&"no-gutters"].concat(h))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},t.a=c},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+l+s+a+r+t+i+n+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(V,(0,d.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,n(r),s):s})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,w=e.loading,L=e.draggable,R=g||h;if(!R)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,d.default)({opacity:N?1:0,transition:T?"opacity "+E+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,P={transitionDelay:E+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},T&&P,s,f),k={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:y},W=this.state.isHydrated?p(R):R[0];if(g)return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&P)}),W.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:k,imageVariants:R,generateSources:x}),W.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:k,imageVariants:R,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(V,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:R}))}}));if(h){var q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete q.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},T&&P)}),W.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:k,imageVariants:R,generateSources:x}),W.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:k,imageVariants:R,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(V,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:R}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function C(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}N.propTypes={resolutions:T,sizes:j,fixed:C(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:C(u.default.oneOfType([j,u.default.arrayOf(j)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=N;t.default=P},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),d=a.n(s),o=a("vUet"),u=["xl","lg","md","sm","xs"],c=d.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,c=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(o.a)(a,"col"),p=[],g=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&g.push("order"+l+"-"+r),null!=a&&g.push("offset"+l+"-"+a)})),p.length||p.push(m),d.a.createElement(c,Object(r.a)({},f,{ref:t,className:l.a.apply(void 0,[i].concat(p,g))}))}));c.displayName="Col",t.a=c},Wqio:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),s=a.n(l),d=function(){var e,t,a=Object(i.useStaticQuery)("2059947465"),r=null==a||null===(e=a.avatar)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fixed;return n.a.createElement(s.a,{fixed:r,className:"bio-avatar"})},o=function(){var e,t,a=Object(i.useStaticQuery)("4108696756"),r=null==a||null===(e=a.avatar)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fixed;return n.a.createElement(s.a,{fixed:r,className:"bio-avatar"})},u=[{date:"2020-04",business:!0,description:"個人事業を開始する",content:n.a.createElement("dl",null,n.a.createElement("dt",null,"屋号の由来"),n.a.createElement("dd",null,"当時尊敬していた先輩個人事業主が、○○workという屋号を使っていたため。"),n.a.createElement("dt",null,"主な活動"),n.a.createElement("dd",null,n.a.createElement("ul",null,n.a.createElement("li",null,"個人事業主が利用するIT機器を活用するためのアドバイス"),n.a.createElement("li",null,"センシング用のハードウェアや学習機器の開発"),n.a.createElement("li",null,"製品の販売サイトの構築"),n.a.createElement("li",null,"ホームページ制作"))))},{date:"2019-06",business:!0,description:"ベンチャー企業の1人目の社員として採用される",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"創業期において1人目の技術者として採用された。",n.a.createElement("br",null),"PLとして小規模なチームで開発を行いながら、社内インフラ構築や保守の業務も兼任している。",n.a.createElement("br",null),"創業期の何でも屋マインドで、未成熟な会社において発生する様々な問題に日々立ち向かう。"),n.a.createElement("p",null,"開発実績多数。様々な業種の顧客に提案を行い、開発から運用までワンストップで提供している。"))},{date:"2016-05",business:!0,description:"中小SIer(社員数: 200名)の社員として採用される",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"プログラマーとして採用される。",n.a.createElement("br",null),"新卒扱いで入社し、3ヶ月の研修を同期内で最も優秀な成績で修了。"),n.a.createElement("p",null,"開発が遅延しているプロジェクトに参画した際には、システムテストやUIテストの自動化を積極的に行い、テスト工数の削減とスケジュールの回復に寄与した。"),n.a.createElement("p",null,"上流工程から下流工程まで、幅広い業務に従事した。"))},{date:"2015-11",description:"下界に戻る",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"山でのアルバイトを満期で終え、都内と千葉県を転々とする。"),n.a.createElement("p",null,"いくつか仕事を転々とするうちに、IT業界での正社員就職を考えるようになる。"),n.a.createElement(d,null))},{date:"2015-06",description:"山送りになる",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"大学を中退してしまい、家を追われた自分。住み込みで働ける仕事を探したら見つかった。",n.a.createElement("br",null),"3食付きで景色も最高とのことで、即決。"),n.a.createElement("div",null,"そこは今まで住んでいたような場所とは別世界だった。",n.a.createElement("ul",null,n.a.createElement("li",null,"最寄りのコンビニまで往復6時間(徒歩4時間+バス2時間)"),n.a.createElement("li",null,"携帯電話の電波は最寄りの山頂まで行かないと入らない"),n.a.createElement("li",null,"風呂は3日に1回")),n.a.createElement(o,null)),n.a.createElement("p",null,"北アルプスの稜線上での住み込みアルバイトである。(標高: 2367m)"))},{date:"2015-03",description:"大学を中退",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"やはり自分には向いていなかったようだ。"),n.a.createElement("p",null,"情報科に転科したいと思ったときにはもう遅い。その時点での成績はボロボロだったのだ。"))},{date:"2013-04",description:"東京都市大学 建築学科に入学",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"親などの周りの人間から情報学科に行くよう勧められたが、それに嫌気が差してしまい、反発心で建築学科を選んだ。",n.a.createElement("br",null),"当時は大震災の直後であり、自分も復興に貢献できる技術者になりたいとの思いで入学したが……"))},{date:"2006-10",description:"初めてプログラミングに触れる",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"言語はTiny BASIC",n.a.createElement("br",null),"その後はC#を学び、Windowsデスクトップアプリケーションを開発していた。"))},{date:"1994-02",description:"生誕",content:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"東京都足立区北千住で生まれる。",n.a.createElement("br",null),"大学中退までの20年間を足立区で過ごす。"))}]}}]);
//# sourceMappingURL=124b3cf56fc46dd72116344a852acd6347227e22-0f4aba49813f7facbc7b.js.map