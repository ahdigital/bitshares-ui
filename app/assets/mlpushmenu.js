/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?x.className.baseVal=t:x.className=t)}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,s,l,c,f="modernizr",d=a("div"),p=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):d.parentNode.removeChild(d),!!s}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function m(e,t,o,i){function u(){f&&(delete F.style,delete F.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=p(e,o);if(!r(c,"undefined"))return c}for(var f,d,m,h,g,v=["modernizr","tspan","samp"];!F.style&&v.length;)f=!0,F.modElem=a(v.shift()),F.style=F.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],g=F.style[h],s(h,"-")&&(h=l(h)),F.style[h]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?h:!0;try{F.style[h]=o}catch(y){}if(F.style[h]!=g)return u(),"pfx"==t?h:!0}return u(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?h(o,n||t):o);return!1}function v(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),g(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],E={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var b=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=b;var x=t.documentElement,w="svg"===x.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function s(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),s=0,a=r(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:s,createDocumentFragment:a,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",N=E._config.usePrefixes?_.toLowerCase().split(" "):[];E._domPrefixes=N;var z="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",z||P);var k=E._config.usePrefixes?_.split(" "):[];E._cssomPrefixes=k;var j=E.testStyles=c,T={elem:a("modernizr")};Modernizr._q.push(function(){delete T.elem});var F={style:T.elem.style};Modernizr._q.unshift(function(){delete F.style});E.testProp=function(e,t,r){return m([e],n,t,r)};E.testAllProps=v,E.testAllProps=y,Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",j(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),o(),i(C),delete E.addTest,delete E.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);


/**
 * mlpushmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {


'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}


  
  'use strict';

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // taken from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
  function hasParent( e, id ) {
    if (!e) return false;
    var el = e.target||e.srcElement||e||false;
    while (el && el.id != id) {
      el = el.parentNode||false;
    }
    return (el!==false);
  }

  // returns the depth of the element "e" relative to element with id=id
  // for this calculation only parents with classname = waypoint are considered
  function getLevelDepth( e, id, waypoint, cnt ) {
    cnt = cnt || 0;
    if ( e.id.indexOf( id ) >= 0 ) return cnt;
    if( classie.has( e, waypoint ) ) {
      ++cnt;
    }
    return e.parentNode && getLevelDepth( e.parentNode, id, waypoint, cnt );
  }

  // http://coveroverflow.com/a/11381730/989439
  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  // returns the closest element to 'e' that has class "classname"
  function closest( e, classname ) {
    if( classie.has( e, classname ) ) {
      return e;
    }
    return e.parentNode && closest( e.parentNode, classname );
  }

  function mlPushMenu( el, trigger, options ) { 
    this.el = el;
    this.trigger = trigger;
    this.options = extend( this.defaults, options );
    // support 3d transforms
    this.support = Modernizr.csstransforms3d;
    if( this.support ) {
      this._init();
    }
  }

  mlPushMenu.prototype = {
    defaults : {
      // overlap: there will be a gap between open levels
      // cover: the open levels will be on top of any previous open level
      type : 'cover', // overlap || cover
      // space between each overlaped level
      levelSpacing : 40,
      // classname for the element (if any) that when clicked closes the current level
      backClass : 'mp-back'
    },
    _init : function() {
      // if menu is open or not
      this.open = false;
      // level depth
      this.level = 0;
      // the moving wrapper
      this.wrapper = document.getElementById( 'mp-pusher' );
      // the mp-level elements
      this.levels = Array.prototype.slice.call( this.el.querySelectorAll( 'div.mp-level' ) );
      // save the depth of each of these mp-level elements
      var self = this;
      this.levels.forEach( function( el, i ) { el.setAttribute( 'data-level', getLevelDepth( el, self.el.id, 'mp-level' ) ); } );
      // the menu items
      this.menuItems = Array.prototype.slice.call( this.el.querySelectorAll( 'li' ) );
      // if type == "cover" these will serve as hooks to move back to the previous level
      this.levelBack = Array.prototype.slice.call( this.el.querySelectorAll( '.' + this.options.backClass ) );
      // event type (if mobile use touch events)
      this.eventtype = mobilecheck() ? 'touchstart' : 'click';
      // add the class mp-overlap or mp-cover to the main element depending on options.type
      classie.add( this.el, 'mp-' + this.options.type );
      // initialize / bind the necessary events
      this._initEvents();
    },
    _initEvents : function() {
      var self = this;

      // the menu should close if clicking somewhere on the body
      var bodyClickFn = function( el ) {
        self._resetMenu();
        el.removeEventListener( self.eventtype, bodyClickFn );
      };

      // open (or close) the menu
      this.trigger.addEventListener( this.eventtype, function( ev ) {
        ev.stopPropagation();
        ev.preventDefault();
        if( self.open ) {
          self._resetMenu();
        }
        else {
          self._openMenu();
          // the menu should close if clicking somewhere on the body (excluding clicks on the menu)
          document.addEventListener( self.eventtype, function( ev ) {
            if( self.open && !hasParent( ev.target, self.el.id ) ) {
              bodyClickFn( this );
            }
          } );
        }
      } );

      // opening a sub level menu
      this.menuItems.forEach( function( el, i ) {
        // check if it has a sub level
        var subLevel = el.querySelector( 'div.mp-level' );
        if( subLevel ) {
          el.querySelector( 'a' ).addEventListener( self.eventtype, function( ev ) {
            ev.preventDefault();
            var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
            if( self.level <= level ) {
              ev.stopPropagation();
              classie.add( closest( el, 'mp-level' ), 'mp-level-overlay' );
              self._openMenu( subLevel );
            }
          } );
        }
      } );

      // closing the sub levels :
      // by clicking on the visible part of the level element
      this.levels.forEach( function( el, i ) {
        el.addEventListener( self.eventtype, function( ev ) {
          ev.stopPropagation();
          var level = el.getAttribute( 'data-level' );
          if( self.level > level ) {
            self.level = level;
            self._closeMenu();
          }
        } );
      } );

      // by clicking on a specific element
      this.levelBack.forEach( function( el, i ) {
        el.addEventListener( self.eventtype, function( ev ) {
          ev.preventDefault();
          var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
          if( self.level <= level ) {
            ev.stopPropagation();
            self.level = closest( el, 'mp-level' ).getAttribute( 'data-level' ) - 1;
            self.level === 0 ? self._resetMenu() : self._closeMenu();
          }
        } );
      } );  
    },
    _openMenu : function( subLevel ) {
      // increment level depth
      ++this.level;

      // move the main wrapper
      var levelFactor = ( this.level - 1 ) * this.options.levelSpacing,
        translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + levelFactor : this.el.offsetWidth;
      
      this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );

      if( subLevel ) {
        // reset transform for sublevel
        this._setTransform( '', subLevel );
        // need to reset the translate value for the level menus that have the same level depth and are not open
        for( var i = 0, len = this.levels.length; i < len; ++i ) {
          var levelEl = this.levels[i];
          if( levelEl != subLevel && !classie.has( levelEl, 'mp-level-open' ) ) {
            this._setTransform( 'translate3d(-100%,0,0) translate3d(' + -1*levelFactor + 'px,0,0)', levelEl );
          }
        }
      }
      // add class mp-pushed to main wrapper if opening the first time
      if( this.level === 1 ) {
        classie.add( this.wrapper, 'mp-pushed' );
        this.open = true;
      }
      // add class mp-level-open to the opening level element
      classie.add( subLevel || this.levels[0], 'mp-level-open' );
    },
    // close the menu
    _resetMenu : function() {
      this._setTransform('translate3d(0,0,0)');
      this.level = 0;
      // remove class mp-pushed from main wrapper
      classie.remove( this.wrapper, 'mp-pushed' );
      this._toggleLevels();
      this.open = false;
    },
    // close sub menus
    _closeMenu : function() {
      var translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + ( this.level - 1 ) * this.options.levelSpacing : this.el.offsetWidth;
      this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );
      this._toggleLevels();
    },
    // translate the el
    _setTransform : function( val, el ) {
      el = el || this.wrapper;
      el.style.WebkitTransform = val;
      el.style.MozTransform = val;
      el.style.transform = val;
    },
    // removes classes mp-level-open from closing levels
    _toggleLevels : function() {
      for( var i = 0, len = this.levels.length; i < len; ++i ) {
        var levelEl = this.levels[i];
        if( levelEl.getAttribute( 'data-level' ) >= this.level + 1 ) {
          classie.remove( levelEl, 'mp-level-open' );
          classie.remove( levelEl, 'mp-level-overlay' );
        }
        else if( Number( levelEl.getAttribute( 'data-level' ) ) == this.level ) {
          classie.remove( levelEl, 'mp-level-overlay' );
        }
      }
    }
  }

    // add to global namespace
  window.mlPushMenu = mlPushMenu;

} )( window );