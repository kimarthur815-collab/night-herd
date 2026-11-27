(()=>{var ep=0,eu=1,tp=2;var Dr=1,np=2,Nr=3,Ei=0,Yt=1,Bt=2,Wi=0,Ur=1,Kn=2,tu=3,nu=4,ip=5;var Os=100,sp=101,rp=102,op=103,ap=104,cp=200,lp=201,hp=202,up=203,iu=204,su=205,fp=206,dp=207,pp=208,mp=209,gp=210,xp=211,vp=212,_p=213,yp=214,ja=0,Qa=1,ec=2,Mr=3,tc=4,nc=5,ic=6,sc=7,ru=0,Mp=1,Sp=2,Jn=0,ou=1,au=2,cu=3,lu=4,hu=5,uu=6,fu=7;var du=300,zs=301,Fr=302,Uc=303,Fc=304,rc=1e3,xi=1001,oc=1002,sn=1003,bp=1004;var Wo=1005;var un=1006,Bc=1007;var li=1008;var Dn=1009,pu=1010,mu=1011,Br=1012,Oc=1013,hi=1014,$n=1015,dn=1016,zc=1017,Hc=1018,Hs=1020,gu=35902,xu=35899,vu=1021,_u=1022,zn=1023,zi=1026,qi=1027,kc=1028,Vc=1029,ms=1030,Gc=1031;var Wc=1033,qo=33776,Xo=33777,Yo=33778,Zo=33779,qc=35840,Xc=35841,Yc=35842,Zc=35843,Kc=36196,Jc=37492,$c=37496,jc=37488,Qc=37489,Ko=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,cl=37815,ll=37816,hl=37817,ul=37818,fl=37819,dl=37820,pl=37821,ml=36492,gl=36494,xl=36495,vl=36283,_l=36284,Jo=36285,yl=36286;var yo=2300,ac=2301,Ja=2302,qh=2303,Xh=2400,Yh=2401,Zh=2402;var Ep=3200,Ml=3201;var Sl=0,wp=1,Xi="",En="srgb",Is="srgb-linear",Mo="linear",St="srgb";var $a=7680;var Tp=519,Ap=512,Rp=513,Cp=514,yu=515,Pp=516,Ip=517,Mu=518,Su=519,bu=35044;var Eu="300 es",qn=2e3,Sr=2001;function tg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lp(){let i=So("canvas");return i.style.display="block",i}var yd={},br=null;function bo(...i){let e="THREE."+i.shift();br?br("log",e,...i):console.log(e,...i)}function Dp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Dp(i);let e="THREE."+i.shift();if(br)br("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Dp(i);let e="THREE."+i.shift();if(br)br("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ps(...i){let e=i.join(" ");e in yd||(yd[e]=!0,Ge(...i))}function Np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Up={[ja]:ja,[ec]:ic,[tc]:tc,[Mr]:nc,[Qa]:Qa,[ic]:ec,[sc]:sc,[nc]:Mr},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,go=Math.PI/180,Er=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function wu(i,e){return(i%e+e)%e}function ig(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sg(i,e,t){return i!==e?(t-i)/(e-i):0}function xo(i,e,t){return(1-t)*i+t*e}function rg(i,e,t,n){return xo(i,e,1-Math.exp(-t*n))}function og(i,e=1){return e-Math.abs(wu(i,e*2)-e)}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hg(i,e){return i+Math.random()*(e-i)}function ug(i){return i*(.5-Math.random())}function fg(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*go}function pg(i){return i*Er}function mg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Au(i,e){if(e.constructor===Float32Array)return i;let t=bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ru(i,e){if(e.constructor===Float32Array)return i;let t=bl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Yi={DEG2RAD:go,RAD2DEG:Er,generateUUID:gs,clamp:at,euclideanModulo:wu,mapLinear:ig,inverseLerp:sg,lerp:xo,damp:rg,pingpong:og,smoothstep:ag,smootherstep:cg,randInt:lg,randFloat:hg,randFloatSpread:ug,seededRandom:fg,degToRad:dg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:Tu,setQuaternionFromProperEuler:xg,normalize:Ru,denormalize:Au},Nu=class Nu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;var he=Nu,yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||c!==u||l!==f||h!==m){let p=c*u+l*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+_*a}else{c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+_*a;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-a*f,e[t+2]=l*m+h*f+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uu=class Uu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uu.prototype.isVector3=!0;var A=Uu,Mh=new A,Sd=new yt,Fu=class Fu{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],y=s[1],E=s[4],b=s[7],v=s[2],S=s[5],x=s[8];return r[0]=o*_+a*y+c*v,r[3]=o*p+a*E+c*S,r[6]=o*g+a*b+c*x,r[1]=l*_+h*y+d*v,r[4]=l*p+h*E+d*S,r[7]=l*g+h*b+d*x,r[2]=u*_+f*y+m*v,r[5]=u*p+f*E+m*S,r[8]=u*g+f*b+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fu.prototype.isMatrix3=!0;var Je=Fu,Sh=new Je,bd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:St,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}var dt=vg();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,cc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=So("canvas")),nr.width=e.width,nr.height=e.height;let s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bh(s[o].image)):r.push(bh(s[o]))}else r=bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var yg=0,Eh=new A,wn=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=un,o=li,a=zn,c=Dn,l=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=gs(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=du;wn.DEFAULT_ANISOTROPY=1;var Bu=class Bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(f+1)/2,v=(g+1)/2,S=(h+u)/4,x=(d+_)/4,M=(m+p)/4;return E>b&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=x/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=M/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=x/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bu.prototype.isVector4=!0;var Rt=Bu,lc=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Nc=class Nc{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,_=l*d;t[0]=u+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Sg)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),is.crossVectors(n,Fn),is.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),is.crossVectors(n,Fn)),is.normalize(),Ea.crossVectors(Fn,is),s[0]=is.x,s[4]=Ea.x,s[8]=Fn.x,s[1]=is.y,s[5]=Ea.y,s[9]=Fn.y,s[2]=is.z,s[6]=Ea.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],E=n[7],b=n[11],v=n[15],S=s[0],x=s[4],M=s[8],C=s[12],R=s[1],I=s[5],N=s[9],z=s[13],L=s[2],H=s[6],G=s[10],V=s[14],ie=s[3],Y=s[7],ne=s[11],ae=s[15];return r[0]=o*S+a*R+c*L+l*ie,r[4]=o*x+a*I+c*H+l*Y,r[8]=o*M+a*N+c*G+l*ne,r[12]=o*C+a*z+c*V+l*ae,r[1]=h*S+d*R+u*L+f*ie,r[5]=h*x+d*I+u*H+f*Y,r[9]=h*M+d*N+u*G+f*ne,r[13]=h*C+d*z+u*V+f*ae,r[2]=m*S+_*R+p*L+g*ie,r[6]=m*x+_*I+p*H+g*Y,r[10]=m*M+_*N+p*G+g*ne,r[14]=m*C+_*z+p*V+g*ae,r[3]=y*S+E*R+b*L+v*ie,r[7]=y*x+E*I+b*H+v*Y,r[11]=y*M+E*N+b*G+v*ne,r[15]=y*C+E*z+b*V+v*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],y=c*f-l*u,E=a*f-l*d,b=a*u-c*d,v=o*f-l*h,S=o*u-c*h,x=o*d-a*h;return t*(_*y-p*E+g*b)-n*(m*y-p*v+g*S)+s*(m*E-_*v+g*x)-r*(m*b-_*S+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=t*a-n*o,E=t*c-s*o,b=t*l-r*o,v=n*c-s*a,S=n*l-r*a,x=s*l-r*c,M=h*_-d*m,C=h*p-u*m,R=h*g-f*m,I=d*p-u*_,N=d*g-f*_,z=u*g-f*p,L=y*z-E*N+b*I+v*R-S*C+x*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(a*z-c*N+l*I)*H,e[1]=(s*N-n*z-r*I)*H,e[2]=(_*x-p*S+g*v)*H,e[3]=(u*S-d*x-f*v)*H,e[4]=(c*R-o*z-l*C)*H,e[5]=(t*z-s*R+r*C)*H,e[6]=(p*b-m*x-g*E)*H,e[7]=(h*x-u*b+f*E)*H,e[8]=(o*N-a*R+l*M)*H,e[9]=(n*R-t*N-r*M)*H,e[10]=(m*S-_*b+g*y)*H,e[11]=(d*b-h*S-f*y)*H,e[12]=(a*C-o*I-c*M)*H,e[13]=(t*I-n*C+s*M)*H,e[14]=(_*E-m*v-p*y)*H,e[15]=(h*v-d*E+u*y)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,y=c*l,E=c*h,b=c*d,v=n.x,S=n.y,x=n.z;return s[0]=(1-(_+g))*v,s[1]=(f+b)*v,s[2]=(m-E)*v,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(u+g))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(m+E)*x,s[9]=(p-y)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),c=ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ri.copy(this);let l=1/o,h=1/a,d=1/c;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=qn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===qn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=qn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===qn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nc.prototype.isMatrix4=!0;var ct=Nc,ir=new A,ri=new ct,Mg=new A(0,0,0),Sg=new A(1,1,1),is=new A,Ea=new A,Fn=new A,wd=new ct,Td=new yt,Xt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xt.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,Ad=new A,sr=new yt,Li=new ct,wa=new A,oo=new A,Eg=new A,wg=new yt,Rd=new A(1,0,0),Cd=new A(0,1,0),Pd=new A(0,0,1),Id={type:"added"},Tg={type:"removed"},rr={type:"childadded",child:null},wh={type:"childremoved",child:null},rn=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new Xt,n=new yt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Je}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(oo,wa,this.up):Li.lookAt(wa,oo,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Li),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Id),rr.child=e,this.dispatchEvent(rr),rr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tg),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Id),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,Eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new A(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=wu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Th(o,r,e+1/3),this.g=Th(o,r,e),this.b=Th(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return dt.workingToColorSpace(vn.copy(this),e),Math.round(at(vn.r*255,0,255))*65536+Math.round(at(vn.g*255,0,255))*256+Math.round(at(vn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=En){dt.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ta);let n=xo(ss.h,Ta.h,t),s=xo(ss.s,Ta.s,t),r=xo(ss.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new de;de.NAMES=Fp;var To=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var cs=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new A,Di=new A,Ah=new A,Ni=new A,or=new A,ar=new A,Ld=new A,Rh=new A,Ch=new A,Ph=new A,Ih=new Rt,Lh=new Rt,Dh=new Rt,Bi=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Di.subVectors(n,t),Ah.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Di),c=oi.dot(Ah),l=Di.dot(Di),h=Di.dot(Ah),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ih.setScalar(0),Lh.setScalar(0),Dh.setScalar(0),Ih.fromBufferAttribute(e,t),Lh.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ih,r.x),o.addScaledVector(Lh,r.y),o.addScaledVector(Dh,r.z),o}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Di.subVectors(e,t),oi.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;or.subVectors(s,n),ar.subVectors(r,n),Rh.subVectors(e,n);let c=or.dot(Rh),l=ar.dot(Rh);if(c<=0&&l<=0)return t.copy(n);Ch.subVectors(e,s);let h=or.dot(Ch),d=ar.dot(Ch);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(or,o);Ph.subVectors(e,r);let f=or.dot(Ph),m=ar.dot(Ph);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ar,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Ld.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Ld,a);let g=1/(p+_+u);return o=_*g,a=u*g,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ra.subVectors(this.max,ao),cr.subVectors(e.a,ao),lr.subVectors(e.b,ao),hr.subVectors(e.c,ao),rs.subVectors(lr,cr),os.subVectors(hr,lr),Ts.subVectors(cr,hr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Ts.z,Ts.y,rs.z,0,-rs.x,os.z,0,-os.x,Ts.z,0,-Ts.x,-rs.y,rs.x,0,-os.y,os.x,0,-Ts.y,Ts.x,0];return!Nh(t,cr,lr,hr,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Nh(t,cr,lr,hr,Ra))?!1:(Ca.crossVectors(rs,os),t=[Ca.x,Ca.y,Ca.z],Nh(t,cr,lr,hr,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new A,new A,new A,new A,new A,new A,new A,new A],ai=new A,Aa=new _i,cr=new A,lr=new A,hr=new A,rs=new A,os=new A,Ts=new A,ao=new A,Ra=new A,Ca=new A,As=new A;function Nh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),c=e.dot(As),l=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kt=new A,Pa=new he,Rg=0,ze=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?bl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Au(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.array)}};var Ls=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cg=new _i,co=new A,Uh=new A,Ln=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Uh)),this.expandByPoint(co.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pg=0,Wn=new ct,Fh=new rn,ur=new A,Bn=new _i,lo=new _i,nn=new A,pt=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?Ds:Ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Bn.min,lo.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,lo.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(lo.min),Bn.expandByPoint(lo.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)nn.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(e,l),nn.add(ur)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new A,c[C]=new A;let h=new A,d=new A,u=new A,f=new he,m=new he,_=new he,p=new A,g=new A;function y(C,R,I){l[C]=l[R]=l[I]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,I),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(N),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(N),a[C].add(p),a[R].add(p),a[I].add(p),c[C].add(g),c[R].add(g),c[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,R=E.length;C<R;++C){let I=E[C],N=I.start,z=I.count;for(let L=N,H=N+z;L<H;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new A,v=new A,S=new A,x=new A;function M(C){S.fromBufferAttribute(s,C),x.copy(S);let R=a[C];b.copy(R),b.sub(S.multiplyScalar(S.dot(R))).normalize(),v.crossVectors(x,R);let N=v.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,N)}for(let C=0,R=n.count;C<R;++C)l[C]&&M(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,d=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new ze(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Dd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var bn=new A,Ar=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?bl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Au(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.data.array)}},Bh=new A,Ig=new A,Lg=new Je,ci=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bh.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lg.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dg=0,yi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Ur,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=su,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hi=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,ho=new A,dr=new A,pr=new A,mr=new he,uo=new he,Bp=new ct,Ia=new A,fo=new A,La=new A,Nd=new he,Oh=new he,Ud=new he,ls=class extends rn{constructor(e=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Ar(n,3,0,!1)),fr.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Da(Ia.set(-.5,-.5,0),pr,o,dr,s,r),Da(fo.set(.5,-.5,0),pr,o,dr,s,r),Da(La.set(.5,.5,0),pr,o,dr,s,r),Nd.set(0,0),Oh.set(1,0),Ud.set(1,1);let a=e.ray.intersectTriangle(Ia,fo,La,!1,ho);if(a===null&&(Da(fo.set(-.5,.5,0),pr,o,dr,s,r),Oh.set(0,1),a=e.ray.intersectTriangle(Ia,La,fo,!1,ho),a===null))return;let c=e.ray.origin.distanceTo(ho);c<e.near||c>e.far||t.push({distance:c,point:ho.clone(),uv:Bi.getInterpolation(ho,Ia,fo,La,Nd,Oh,Ud,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Da(i,e,t,n,s,r){mr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(uo.x=r*mr.x-s*mr.y,uo.y=s*mr.x+r*mr.y):uo.copy(mr),i.copy(e),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(Bp)}var Fi=new A,zh=new A,Na=new A,Ua=new A,Ro=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zh.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Ua.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=Ua.dot(this.direction),c=-Ua.dot(Na),l=Ua.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zh).addScaledVector(Na,u),f}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,b=Math.abs(c),v=Math.abs(l),S=Math.abs(h),x,M,C,R,I,N,z,L,H,G,V,ie;if(b>=v&&b>=S?(C=c,N=d,H=m,ie=g,c>=0?(x=l,M=h,R=u,I=f,z=_,L=p,G=y,V=E):(x=h,M=l,R=f,I=u,z=p,L=_,G=E,V=y)):v>=S?(C=l,N=u,H=_,ie=y,l>=0?(x=h,M=c,R=f,I=d,z=p,L=m,G=E,V=g):(x=c,M=h,R=d,I=f,z=m,L=p,G=g,V=E)):(C=h,N=f,H=p,ie=E,h>=0?(x=c,M=l,R=d,I=u,z=m,L=_,G=g,V=y):(x=l,M=c,R=u,I=d,z=_,L=m,G=y,V=g)),C===0)return null;let Y=x/C,ne=M/C,ae=1/C,De=R-Y*N,Ye=I-ne*N,j=z-Y*H,Ae=L-ne*H,Pe=G-Y*ie,B=V-ne*ie,D=Pe*Ae-B*j,X=De*B-Ye*Pe,ce=j*Ye-Ae*De;if(s){if(D<0||X<0||ce<0)return null}else if((D<0||X<0||ce<0)&&(D>0||X>0||ce>0))return null;let Q=D+X+ce;if(Q===0)return null;let Me=ae*(D*N+X*H+ce*ie);return(Q>0?Me<0:Me>0)?null:this.at(Me/Q,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hs=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=new ct,Rs=new Ro,Fa=new Ln,Bd=new A,Ba=new A,Oa=new A,za=new A,Hh=new A,Ha=new A,Od=new A,ka=new A,Qe=class extends rn{constructor(e=new pt,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Hh.fromBufferAttribute(d,e),o?Ha.addScaledVector(Hh,h):Ha.addScaledVector(Hh.sub(t),h))}t.add(Ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Fa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Fa,Bd)===null||Rs.origin.distanceToSquared(Bd)>(e.far-e.near)**2))&&(Fd.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,v=E;b<v;b+=3){let S=a.getX(b),x=a.getX(b+1),M=a.getX(b+2);s=Va(this,g,e,n,l,h,d,S,x,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),E=a.getX(p+1),b=a.getX(p+2);s=Va(this,o,e,n,l,h,d,y,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,v=E;b<v;b+=3){let S=b,x=b+1,M=b+2;s=Va(this,g,e,n,l,h,d,S,x,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=p,E=p+1,b=p+2;s=Va(this,o,e,n,l,h,d,y,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ng(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ka);return l<t.near||l>t.far?null:{distance:l,point:ka.clone(),object:i}}function Va(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ba),i.getVertexPosition(c,Oa),i.getVertexPosition(l,za);let h=Ng(i,e,t,n,Ba,Oa,za,Od);if(h){let d=new A;Bi.getBarycoord(Od,Ba,Oa,za,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,c,l,d,new he)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,c,l,d,new he)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,c,l,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new A,materialIndex:0};Bi.getNormal(Ba,Oa,za,u.normal),h.face=u,h.barycoord=d}return h}var Ns=class extends wn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=sn,h=sn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class extends ze{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new ct,zd=new ct,Ga=[],Hd=new _i,Ug=new ct,po=new Qe,mo=new Ln,Co=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Hd.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),mo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),zd.multiplyMatrices(n,gr),po.matrixWorld=zd,po.raycast(e,Ga);for(let o=0,a=Ga.length;o<a;o++){let c=Ga[o];c.instanceId=r,c.object=this,t.push(c)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ns(new Float32Array(s*this.count),s,this.count,kc,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Ln,Fg=new he(.5,.5),Wa=new A,Mi=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],E=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-o,f-h,g-m,v-y).normalize(),s[1].setComponents(l+o,f+h,g+m,v+y).normalize(),s[2].setComponents(l+a,f+d,g+_,v+E).normalize(),s[3].setComponents(l-a,f-d,g-_,v-E).normalize(),n)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,f-u,g-p,v-b).normalize();else if(s[4].setComponents(l-c,f-u,g-p,v-b).normalize(),t===qn)s[5].setComponents(l+c,f+u,g+p,v+b).normalize();else if(t===Sr)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wa.x=s.normal.x>0?e.max.x:e.min.x,Wa.y=s.normal.y>0?e.max.y:e.min.y,Wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kd=new ct,uc=class i{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];kd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Mi),n[s].setFromProjectionMatrix(kd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Mi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var fc=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vd=new ct,Kh=new Ro,qa=new Ln,Xa=new A,Po=class extends rn{constructor(e=new pt,t=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;Vd.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let p=l.getX(m);Xa.fromBufferAttribute(d,p),Gd(Xa,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)Xa.fromBufferAttribute(d,m),Gd(Xa,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gd(i,e,t,n,s,r,o){let a=Kh.distanceSqToPoint(i);if(a<t){let c=new A;Kh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends wn{constructor(e=[],t=zs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Us=class extends wn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends wn{constructor(e,t,n=hi,s,r,o,a=sn,c=sn,l,h=zi,d=1){if(h!==zi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Lo=class extends ki{constructor(e,t=hi,n=zs,s,r,o=sn,a=sn,c,l=zi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Do=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rr=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function m(_,p,g,y,E,b,v,S,x,M,C){let R=b/x,I=v/M,N=b/2,z=v/2,L=S/2,H=x+1,G=M+1,V=0,ie=0,Y=new A;for(let ne=0;ne<G;ne++){let ae=ne*I-z;for(let De=0;De<H;De++){let Ye=De*R-N;Y[_]=Ye*y,Y[p]=ae*E,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(De/x),d.push(1-ne/M),V+=1}}for(let ne=0;ne<M;ne++)for(let ae=0;ae<x;ae++){let De=u+ae+H*ne,Ye=u+ae+H*(ne+1),j=u+(ae+1)+H*(ne+1),Ae=u+(ae+1)+H*ne;c.push(De,Ye,Ae),c.push(Ye,j,Ae),ie+=6}a.addGroup(f,ie,C),f+=ie,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vi=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],p=n/2,g=0;y(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function y(){let b=new A,v=new A,S=0,x=(t-e)/n;for(let M=0;M<=r;M++){let C=[],R=M/r,I=R*(t-e)+e;for(let N=0;N<=s;N++){let z=N/s,L=z*c+a,H=Math.sin(L),G=Math.cos(L);v.x=I*H,v.y=-R*n+p,v.z=I*G,d.push(v.x,v.y,v.z),b.set(H,x,G).normalize(),u.push(b.x,b.y,b.z),f.push(z,1-R),C.push(m++)}_.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){let R=_[C][M],I=_[C+1][M],N=_[C+1][M+1],z=_[C][M+1];(e>0||C!==0)&&(h.push(R,I,z),S+=3),(t>0||C!==r-1)&&(h.push(I,N,z),S+=3)}l.addGroup(g,S,0),g+=S}function E(b){let v=m,S=new he,x=new A,M=0,C=b===!0?e:t,R=b===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let L=N/s*c+a,H=Math.cos(L),G=Math.sin(L);x.x=C*G,x.y=p*R,x.z=C*H,d.push(x.x,x.y,x.z),u.push(0,R,0),S.x=H*.5+.5,S.y=G*.5*R+.5,f.push(S.x,S.y),m++}for(let N=0;N<s;N++){let z=v+N,L=I+N;b===!0?h.push(L,L+1,z):h.push(L+1,L,z),M+=3}l.addGroup(g,M,b===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dc=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new A,b=new A,v=new A;for(let S=0;S<t.length;S+=3)f(t[S+0],E),f(t[S+1],b),f(t[S+2],v),c(E,b,v,y)}function c(y,E,b,v){let S=v+1,x=[];for(let M=0;M<=S;M++){x[M]=[];let C=y.clone().lerp(b,M/S),R=E.clone().lerp(b,M/S),I=S-M;for(let N=0;N<=I;N++)N===0&&M===S?x[M][N]=C:x[M][N]=C.clone().lerp(R,N/I)}for(let M=0;M<S;M++)for(let C=0;C<2*(S-M)-1;C++){let R=Math.floor(C/2);C%2===0?(u(x[M][R+1]),u(x[M+1][R]),u(x[M][R])):(u(x[M][R+1]),u(x[M+1][R+1]),u(x[M+1][R]))}}function l(y){let E=new A;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(y),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let y=new A;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let b=p(y)/2/Math.PI+.5,v=g(y)/Math.PI+.5;o.push(b,1-v)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],b=o[y+2],v=o[y+4],S=Math.max(E,b,v),x=Math.min(E,b,v);S>.9&&x<.1&&(E<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){let b=y*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function m(){let y=new A,E=new A,b=new A,v=new A,S=new he,x=new he,M=new he;for(let C=0,R=0;C<r.length;C+=9,R+=6){y.set(r[C+0],r[C+1],r[C+2]),E.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),S.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),v.copy(y).add(E).add(b).divideScalar(3);let I=p(v);_(S,R+0,y,I),_(x,R+2,E,I),_(M,R+4,b,I)}}function _(y,E,b,v){v<0&&y.x===1&&(o[E]=y.x-1),b.x===0&&b.z===0&&(o[E]=v/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},No=class i extends dc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new he:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,s=[],r=[],o=[],a=new A,c=new ct;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Uo=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pc=class extends Uo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Wd=new A,qd=new A,kh=new Cu,Vh=new Cu,Gh=new Cu,Cr=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qd.subVectors(s[0],s[1]).add(s[0]),l=qd);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),kh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,_,p),Vh.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,_,p),Gh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Vh.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Gh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(kh.calc(c),Vh.calc(c),Gh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Bg(i,e){let t=1-i;return t*t*e}function Og(i,e){return 2*(1-i)*i*e}function zg(i,e){return i*i*e}function vo(i,e,t,n){return Bg(i,e)+Og(i,t)+zg(i,n)}function Hg(i,e){let t=1-i;return t*t*t*e}function kg(i,e){let t=1-i;return 3*t*t*i*e}function Vg(i,e){return 3*(1-i)*i*i*e}function Gg(i,e){return i*i*i*e}function _o(i,e,t,n,s){return Hg(i,e)+kg(i,t)+Vg(i,n)+Gg(i,s)}var mc=class extends Yn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(e,s.x,r.x,o.x,a.x),_o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gc=class extends Yn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(e,s.x,r.x,o.x,a.x),_o(e,s.y,r.y,o.y,a.y),_o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends Yn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends Yn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends Yn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Yn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y),vo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Xd(a,c.x,l.x,h.x,d.x),Xd(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Wg=Object.freeze({__proto__:null,ArcCurve:pc,CatmullRomCurve3:Cr,CubicBezierCurve:mc,CubicBezierCurve3:gc,EllipseCurve:Uo,LineCurve:xc,LineCurve3:vc,QuadraticBezierCurve:_c,QuadraticBezierCurve3:Fo,SplineCurve:yc});var us=class i extends pt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new A,u=new he,f=new A,m=new A,_=new A,p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=t;y++){let E=n+y*h*s,b=Math.sin(E),v=Math.cos(E);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*b,d.y=e[S].y,d.z=e[S].x*v,o.push(d.x,d.y,d.z),u.x=y/t,u.y=S/(e.length-1),a.push(u.x,u.y);let x=c[3*S+0]*b,M=c[3*S+1],C=c[3*S+0]*v;l.push(x,M,C)}}for(let y=0;y<t;y++)for(let E=0;E<e.length-1;E++){let b=E+y*e.length,v=b,S=b+e.length,x=b+e.length+1,M=b+1;r.push(v,S,M),r.push(x,M,S)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Zn=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let E=0;E<l;E++){let b=E*d-r;m.push(b,-y,0),_.push(0,0,1),p.push(E/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let E=y+l*g,b=y+l*(g+1),v=y+1+l*(g+1),S=y+1+l*g;f.push(E,b,S),f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gi=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new A,u=new A,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let y=[],E=g/n,b=o+E*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let C=M/t,R=s+C*r;d.x=-S*Math.cos(R),d.y=v,d.z=S*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(C+x,1-E),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let E=h[g][y+1],b=h[g][y],v=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&f.push(E,b,S),(g!==n-1||c<Math.PI)&&f.push(b,v,S)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bo=class i extends pt{constructor(e=new Fo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,c=new A,l=new he,h=new A,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function _(){for(let E=0;E<t;E++)p(E);p(r===!1?t:0),y(),g()}function p(E){h=e.getPointAt(E/t,h);let b=o.normals[E],v=o.binormals[E];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,M=Math.sin(x),C=-Math.cos(x);c.x=C*b.x+M*v.x,c.y=C*b.y+M*v.y,c.z=C*b.z+M*v.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let v=(s+1)*(E-1)+(b-1),S=(s+1)*E+(b-1),x=(s+1)*E+b,M=(s+1)*(E-1)+b;m.push(v,S,M),m.push(S,x,M)}}function y(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)l.x=E/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Yd(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Yd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Yd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Vs={clone:ks,merge:_n},Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mc=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Si=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fs=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ya(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bc=class extends fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=e,a=2*t-n;break;case Zh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yh:o=e,c=2*n-t;break;case Zh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,b=f*p-f*_;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+y*o[l+v]+E*o[c+v]+b*o[d+v];return r}},Ec=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},wc=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tc=class extends fs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(s-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[l+m],p=o[c+m],g=f*u+m*2,y=d[g],E=d[g+1],b=e*u+m*2,v=h[b],S=h[b+1],x=Kg(n,t,y,v,s);r[m]=Op(x,_,E,S,p)}return r}};function Op(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Zg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Op(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Zg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ya(e.settings)&&(n.settings={inTangents:xr(e.settings.inTangents,Array),outTangents:xr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case ac:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break;case qh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ya(this.settings)&&(Zd(this.settings.inTangents,e),Zd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ya(this.settings)&&(Kd(this.settings.inTangents,e),Kd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ng(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Kd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ac;var ds=class extends On{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=yo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Ac.prototype.ValueTypeName="color";var Rc=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Rc.prototype.ValueTypeName="number";var Cc=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Oo=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends On{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=yo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Pc.prototype.ValueTypeName="vector";var Ic=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zp=new Ic,Lc=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ir=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wh=new ct,Jd=new A,$d=new A,zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),$d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($d),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new A,Ka=new yt,gi=new A,Ho=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ka,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ka,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,Ka,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ka,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new A,jd=new he,Qd=new he,hn=class extends Ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,jd,Qd),t.subVectors(Qd,jd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jh=class extends zo{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},bi=class extends Pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends Ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$h=class extends zo{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vo=class extends pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vr=-90,_r=1,Lr=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(vr,_r,e,t);s.layers=this.layers,this.add(s);let r=new hn(vr,_r,e,t);r.layers=this.layers,this.add(r);let o=new hn(vr,_r,e,t);o.layers=this.layers,this.add(o);let a=new hn(vr,_r,e,t);a.layers=this.layers,this.add(a);let c=new hn(vr,_r,e,t);c.layers=this.layers,this.add(c);let l=new hn(vr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Dc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Go=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Jg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Jg(){this._document.hidden===!1&&this.reset()}var Iu="\\[\\]\\.:\\/",$g=new RegExp("["+Iu+"]","g"),Lu="[^"+Iu+"]",jg="[^"+Iu.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Lu),ex=/(WCOD+)?/.source.replace("WCOD",jg),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),ix=new RegExp("^"+Qg+ex+tx+nx+"$"),sx=["material","materials","bones","map"],jh=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){let t=ix.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=jh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hb=new Float32Array(1);var Ou=class Ou{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ou.prototype.isMatrix2=!0;var Qh=Ou;function Du(i,e,t,n){let s=rx(n);switch(t){case vu:return i*e;case kc:return i*e/s.components*s.byteLength;case Vc:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case Gc:return i*e*2/s.components*s.byteLength;case _u:return i*e*3/s.components*s.byteLength;case zn:return i*e*4/s.components*s.byteLength;case Wc:return i*e*4/s.components*s.byteLength;case qo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Zc:return Math.max(i,16)*Math.max(e,8)/4;case qc:case Yc:return Math.max(i,8)*Math.max(e,8)/2;case Kc:case Jc:case jc:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:case Ko:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jo:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(i){switch(i){case Dn:case pu:return{byteLength:1,components:1};case Br:case mu:case dn:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case hi:case Oc:case $n:return{byteLength:4,components:1};case gu:case xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function a0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:ux,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:xx,aomap_pars_fragment:vx,batching_pars_vertex:_x,batching_vertex:yx,begin_vertex:Mx,beginnormal_vertex:Sx,bsdfs:bx,iridescence_fragment:Ex,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:Px,color_pars_fragment:Ix,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Fx,displacementmap_vertex:Bx,emissivemap_fragment:Ox,emissivemap_pars_fragment:zx,colorspace_fragment:Hx,colorspace_pars_fragment:kx,envmap_fragment:Vx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:nv,envmap_vertex:Xx,fog_vertex:Yx,fog_pars_vertex:Zx,fog_fragment:Kx,fog_pars_fragment:Jx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:jx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:iv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:cv,lights_fragment_begin:lv,lights_fragment_maps:hv,lights_fragment_end:uv,lightprobes_pars_fragment:fv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:xv,map_pars_fragment:vv,map_particle_fragment:_v,map_particle_pars_fragment:yv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:bv,morphcolor_vertex:Ev,morphnormal_vertex:wv,morphtarget_pars_vertex:Tv,morphtarget_vertex:Av,normal_fragment_begin:Rv,normal_fragment_maps:Cv,normal_pars_fragment:Pv,normal_pars_vertex:Iv,normal_vertex:Lv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Uv,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Bv,opaque_fragment:Ov,packing:zv,premultiplied_alpha_fragment:Hv,project_vertex:kv,dithering_fragment:Vv,dithering_pars_fragment:Gv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:Yv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Kv,skinbase_vertex:Jv,skinning_pars_vertex:$v,skinning_vertex:jv,skinnormal_vertex:Qv,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:c_,worldpos_vertex:l_,background_vert:h_,background_frag:u_,backgroundCube_vert:f_,backgroundCube_frag:d_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:x_,distance_vert:v_,distance_frag:__,equirect_vert:y_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:b_,meshbasic_vert:E_,meshbasic_frag:w_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:P_,meshnormal_frag:I_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:F_,meshtoon_frag:B_,points_vert:O_,points_frag:z_,shadow_vert:H_,shadow_frag:k_,sprite_vert:V_,sprite_frag:G_},Ce={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ti={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new de(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ti.physical={uniforms:_n([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var El={r:0,b:0,g:0},W_=new ct,c0=new Je;c0.set(-1,0,0,0,1,0,0,0,1);function q_(i,e,t,n,s,r){let o=new de(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let b=y.backgroundBlurriness>0;E=e.get(E,b)}return E}function m(y){let E=!1,b=f(y);b===null?p(o,a):b&&b.isColor&&(p(b,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,E){let b=f(E);b&&b.isCubeTexture?(l===void 0&&(l=new Qe(new Rr(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:ks(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(c0),l.material.toneMapped=dt.getTransfer(b.colorSpace)!==St,(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Qe(new Zn(2,2),new Lt({name:"BackgroundMaterial",uniforms:ks(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(El,Pu(i)),t.buffers.color.setClear(El.r,El.g,El.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function X_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,N,z,L,H){let G=!1,V=d(I,L,z,N);r!==V&&(r=V,l(r.object)),G=f(I,L,z,H),G&&m(I,L,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(I,N,z,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,z,L){let H=L.wireframe===!0,G=n[N.id];G===void 0&&(G={},n[N.id]=G);let V=I.isInstancedMesh===!0?I.id:0,ie=G[V];ie===void 0&&(ie={},G[V]=ie);let Y=ie[z.id];Y===void 0&&(Y={},ie[z.id]=Y);let ne=Y[H];return ne===void 0&&(ne=u(c()),Y[H]=ne),ne}function u(I){let N=[],z=[],L=[];for(let H=0;H<t;H++)N[H]=0,z[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,z,L){let H=r.attributes,G=N.attributes,V=0,ie=z.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ae=H[Y],De=G[Y];if(De===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(De=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(De=I.instanceColor)),ae===void 0||ae.attribute!==De||De&&ae.data!==De.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function m(I,N,z,L){let H={},G=N.attributes,V=0,ie=z.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ae=G[Y];ae===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));let De={};De.attribute=ae,ae&&ae.data&&(De.data=ae.data),H[Y]=De,V++}r.attributes=H,r.attributesNum=V,r.index=L}function _(){let I=r.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function p(I){g(I,0)}function g(I,N){let z=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;z[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),H[I]!==N&&(i.vertexAttribDivisor(I,N),H[I]=N)}function y(){let I=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==I[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function E(I,N,z,L,H,G,V){V===!0?i.vertexAttribIPointer(I,N,z,H,G):i.vertexAttribPointer(I,N,z,L,H,G)}function b(I,N,z,L){_();let H=L.attributes,G=z.getAttributes(),V=N.defaultAttributeValues;for(let ie in G){let Y=G[ie];if(Y.location>=0){let ne=H[ie];if(ne===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){let ae=ne.normalized,De=ne.itemSize,Ye=e.get(ne);if(Ye===void 0)continue;let j=Ye.buffer,Ae=Ye.type,Pe=Ye.bytesPerElement,B=Ae===i.INT||Ae===i.UNSIGNED_INT||ne.gpuType===Oc;if(ne.isInterleavedBufferAttribute){let D=ne.data,X=D.isInterleavedBuffer===!0?D.stride:D.itemSize,ce=ne.offset;if(D.isInstancedInterleavedBuffer||D.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)g(Y.location+Q,D.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Q=0;Q<Y.locationSize;Q++)E(Y.location+Q,De/Y.locationSize,Ae,ae,X*Pe,(ce+De/Y.locationSize*Q)*Pe,B)}else{if(ne.isInstancedBufferAttribute){for(let D=0;D<Y.locationSize;D++)g(Y.location+D,ne.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let D=0;D<Y.locationSize;D++)p(Y.location+D);i.bindBuffer(i.ARRAY_BUFFER,j);for(let D=0;D<Y.locationSize;D++)E(Y.location+D,De/Y.locationSize,Ae,ae,De*Pe,De/Y.locationSize*D*Pe,B)}}else if(V!==void 0){let ae=V[ie];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Y.location,ae);break;case 3:i.vertexAttrib3fv(Y.location,ae);break;case 4:i.vertexAttrib4fv(Y.location,ae);break;default:i.vertexAttrib1fv(Y.location,ae)}}}}y()}function v(){C();for(let I in n){let N=n[I];for(let z in N){let L=N[z];for(let H in L){let G=L[H];for(let V in G)h(G[V].object),delete G[V];delete L[H]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let z in N){let L=N[z];for(let H in L){let G=L[H];for(let V in G)h(G[V].object),delete G[V];delete L[H]}}delete n[I.id]}function x(I){for(let N in n){let z=n[N];for(let L in z){let H=z[L];if(H[I.id]===void 0)continue;let G=H[I.id];for(let V in G)h(G[V].object),delete G[V];delete H[I.id]}}}function M(I){for(let N in n){let z=n[N],L=I.isInstancedMesh===!0?I.id:0,H=z[L];if(H!==void 0){for(let G in H){let V=H[G];for(let ie in V)h(V[ie].object),delete V[ie];delete H[G]}delete z[L],Object.keys(z).length===0&&delete n[N]}}}function C(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Y_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==zn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Dn&&x!==$n&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ge("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:v,samples:S}}function K_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ci,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,E=y*4,b=g.clippingState||null;c.value=b,b=h(m,u,E,f);for(let v=0;v!==E;++v)b[v]=t[v];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,m!==!0||p===null){let g=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,b=f;E!==_;++E,b+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Qo=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rr(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Wi});r.uniforms.tEquirect.value=t;let o=new Qe(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=un),new Lr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Hp=256,J_=3,$_=20,l0=256,h0=16,j_=3,Q_=new A,ey=new de,zr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lr(1,10,null),this._boxMesh=new Qe(new Rr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(ey));let p=new Lr(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hp,Tu(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Fr?this._setSize(e.image.length===0?Hp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=kp(e,!1,!1),n=Math.log2(e)-J_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ty(),this._integrationMaterial=ny());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/h0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-j_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(l0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=iy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function kp(i,e,t){return new Qo(i,{minFilter:li,generateMipmaps:e,type:dn,colorSpace:Is,depthBuffer:t})}function ea(i,e,t){return new Lt({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Yt,blending:Wi,depthTest:!1,depthWrite:!1})}function ty(){return ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${l0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ny(){return ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:h0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iy(){return ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vp(){return ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gp(){return ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Uc||f===Fc)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Qo(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Uc||f===Fc,_=f===zs||f===Fr;if(m||_){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new zr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new zr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Uc?u.mapping=zs:f===Fc&&(u.mapping=Fr),u}function c(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function oy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Ds:Ls,b=new E(Math.ceil(y/3)*6,1),v=b.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,C=0;M<y;M+=3){let R=x[M+0],I=x[M+1],N=x[M+2];v[C++]=R,v[C++]=I,v[C++]=I,v[C++]=N,v[C++]=N,v[C++]=R}}else{g=p.version;for(let x=0,M=0;x<y;x+=3){let C=x+0,R=x+1,I=x+2;v[M++]=C,v[M++]=R,v[M++]=R,v[M++]=I,v[M++]=I,v[M++]=C}}b.version=g;let S=r.get(m);S&&e.remove(S),r.set(m,b)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function ay(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function cy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ly(i,e,t){let n=new WeakMap,s=new Rt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let b=a.attributes.position.count*E,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*d),x=new Eo(S,b,v,d);x.type=$n,x.needsUpdate=!0;let M=E*4;for(let R=0;R<d;R++){let I=p[R],N=g[R],z=y[R],L=b*v*4*R;for(let H=0;H<I.count;H++){let G=H*M;f===!0&&(s.fromBufferAttribute(I,H),S[L+G+0]=s.x,S[L+G+1]=s.y,S[L+G+2]=s.z,S[L+G+3]=0),m===!0&&(s.fromBufferAttribute(N,H),S[L+G+4]=s.x,S[L+G+5]=s.y,S[L+G+6]=s.z,S[L+G+7]=0),_===!0&&(s.fromBufferAttribute(z,H),S[L+G+8]=s.x,S[L+G+9]=s.y,S[L+G+10]=s.z,S[L+G+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new he(b,v)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function hy(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var uy={[ou]:"LINEAR_TONE_MAPPING",[au]:"REINHARD_TONE_MAPPING",[cu]:"CINEON_TONE_MAPPING",[lu]:"ACES_FILMIC_TONE_MAPPING",[uu]:"AGX_TONE_MAPPING",[fu]:"NEUTRAL_TONE_MAPPING",[hu]:"CUSTOM_TONE_MAPPING"};function fy(i,e,t,n,s,r){let o=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new pt;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));let d=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(h,d),f=new Bs(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,E=[],b=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),c!==null&&c.setSize(v,S);for(let x=0;x<E.length;x++){let M=E[x];M.setSize&&M.setSize(v,S)}},this.setEffects=function(v){E=v,b=E.length>0&&E[0].isRenderPass===!0;let S=o.width,x=o.height;E.length>0&&a===null&&(a=new qt(S,x,{type:dn,depthBuffer:!1,stencilBuffer:!1}),c=new qt(S,x,{type:dn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(C=>C.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new ki(S,x),r===!0&&(l.format=qi,l.type=Hs)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let C=0;C<E.length;C++){let R=E[C];R.setSize&&R.setSize(S,x),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(v,S){if(p||v.toneMapping===Jn&&E.length===0)return!1;if(y=S,S!==null){let x=S.width,M=S.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return b===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Jn,!0},this.hasRenderPass=function(){return b},this.end=function(v,S){v.toneMapping=g,p=!0;let x=o,M=a;for(let C=0;C<E.length;C++){let R=E[C];R.enabled!==!1&&(R.render(v,M,x,S),R.needsSwap!==!1&&(x=M,M=M===a?c:a))}if(m!==v.outputColorSpace||_!==v.toneMapping){m=v.outputColorSpace,_=v.toneMapping,d.defines={},dt.getTransfer(m)===St&&(d.defines.SRGB_TRANSFER="");let C=uy[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(y),v.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var u0=new wn,f0=new ki(1,1),d0=new Lo(1),p0=new Eo,m0=new hc,g0=new Io,Wp=[],qp=[],Xp=new Float32Array(16),Yp=new Float32Array(9),Zp=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wp[s];if(r===void 0&&(r=new Float32Array(s),Wp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Al(i,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Zp.set(n),i.uniformMatrix2fv(this.addr,!1,Zp),Kt(t,n)}}function vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Yp.set(n),i.uniformMatrix3fv(this.addr,!1,Yp),Kt(t,n)}}function _y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Xp.set(n),i.uniformMatrix4fv(this.addr,!1,Xp),Kt(t,n)}}function yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Rl(i){return i.version===0&&(i.compareFunction=Su,i.needsUpdate=!0),i}function Ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Rl(f0):r=u0,t.setTexture2D(e||r,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||m0,s)}function Py(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Rl(d0):r=g0,t.setTextureCube(e||r,s)}function Iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||p0,s)}function Ly(i){switch(i){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return xy;case 35675:return vy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return wy;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Iy}}function Dy(i,e){i.uniform1fv(this.addr,e)}function Ny(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Uy(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Fy(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function By(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Oy(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zy(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hy(i,e){i.uniform1iv(this.addr,e)}function ky(i,e){i.uniform2iv(this.addr,e)}function Vy(i,e){i.uniform3iv(this.addr,e)}function Gy(i,e){i.uniform4iv(this.addr,e)}function Wy(i,e){i.uniform1uiv(this.addr,e)}function qy(i,e){i.uniform2uiv(this.addr,e)}function Xy(i,e){i.uniform3uiv(this.addr,e)}function Yy(i,e){i.uniform4uiv(this.addr,e)}function Zy(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rl(f0):o=u0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ky(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||m0,r[o])}function Jy(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Rl(d0):o=g0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function $y(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||p0,r[o])}function jy(i){switch(i){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Fy;case 35674:return By;case 35675:return Oy;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return ky;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return qy;case 36295:return Xy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return $y}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ly(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jy(t.type)}},Gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zu=/(\w+)(\])?(\[|\.)?/g;function Kp(i,e){i.seq.push(e),i.map[e.id]=e}function Qy(i,e,t){let n=i.name,s=n.length;for(zu.lastIndex=0;;){let r=zu.exec(n),o=zu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kp(t,l===void 0?new ku(a,i,e):new Vu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Gu(a),Kp(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Qy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Jp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var e1=37297,t1=0;function n1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $p=new Je;function i1(i){dt._getMatrix($p,dt.workingColorSpace,i);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+n1(i.getShaderSource(e),a)}else return r}function s1(i,e){let t=i1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var r1={[ou]:"Linear",[au]:"Reinhard",[cu]:"Cineon",[lu]:"ACESFilmic",[uu]:"AgX",[fu]:"Neutral",[hu]:"Custom"};function o1(i,e){let t=r1[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wl=new A;function a1(){dt.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function l1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function jo(i){return i!==""}function Qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function e0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(u1,f1)}function f1(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wu(t)}var d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(i){return i.replace(d1,p1)}function p1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function n0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var m1={[Dr]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function g1(i){return m1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x1={[Fr]:"ENVMAP_MODE_REFRACTION"};function v1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _1={[ru]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function y1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_1[i.combine]||"ENVMAP_BLENDING_NONE"}function M1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=g1(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=v1(t),d=y1(t),u=c1(t),f=l1(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(_=[n0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[n0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?et.tonemapping_pars_fragment:"",t.toneMapping!==Jn?o1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),a1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Wu(o),o=Qp(o,t),o=e0(o,t),a=Wu(a),a=Qp(a,t),a=e0(a,t),o=t0(o),a=t0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,E=g+p+a,b=Jp(s,s.VERTEX_SHADER,y),v=Jp(s,s.FRAGMENT_SHADER,E);s.attachShader(m,b),s.attachShader(m,v),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",N=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(v)||"",L=I.trim(),H=N.trim(),G=z.trim(),V=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,v);else{let Y=jp(s,b,"vertex"),ne=jp(s,v,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Y+`
`+ne)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(H===""||G==="")&&(ie=!1);ie&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:H,prefix:_},fragmentShader:{log:G,prefix:p}})}s.deleteShader(b),s.deleteShader(v),x=new Or(s,m),M=h1(s,m)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,e1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=v,this}var S1=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xu(e),t.set(e,n)),n}},Xu=class{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}};function b1(i){return i===ms||i===Ko||i===Jo}function E1(i,e,t,n,s,r){let o=new wo,a=new qu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,R,I,N){let z=R.fog,L=I.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||H,G),ie=u[x.type],Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=ne!==void 0?ne.length:0,De=0;L.morphAttributes.position!==void 0&&(De=1),L.morphAttributes.normal!==void 0&&(De=2),L.morphAttributes.color!==void 0&&(De=3);let Ye,j,Ae,Pe;if(ie){let Re=Ti[ie];Ye=Re.vertexShader,j=Re.fragmentShader}else{Ye=x.vertexShader,j=x.fragmentShader;let Re=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,Re,Et),Ae=Re.id,Pe=Et.id}let B=i.getRenderTarget(),D=i.state.buffers.depth.getReversed(),X=I.isInstancedMesh===!0,ce=I.isBatchedMesh===!0,Q=!!x.map,Me=!!x.matcap,Ie=!!V,ge=Ie&&V.isPMREMTexture===!0,qe=!!x.aoMap,nt=!!x.lightMap,mt=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,Wt=!!x.displacementMap,vt=!!x.emissiveMap,jt=!!x.metalnessMap,Qt=!!x.roughnessMap,cn=x.anisotropy>0,O=x.clearcoat>0,pn=x.diffuseRoughness>0,bt=x.dispersion>0,wt=x.retroreflectivity>0,be=x.iridescence>0,Nt=x.sheen>0,He=x.transmission>0,ke=cn&&!!x.anisotropyMap,P=O&&!!x.clearcoatMap,w=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,le=pn&&!!x.diffuseRoughnessMap,$=be&&!!x.iridescenceMap,me=be&&!!x.iridescenceThicknessMap,Ee=Nt&&!!x.sheenColorMap,J=Nt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,_e=!!x.specularColorMap,U=!!x.specularIntensityMap,te=He&&!!x.transmissionMap,K=He&&!!x.thicknessMap,ye=!!x.gradientMap,pe=!!x.alphaMap,ve=x.alphaTest>0,Oe=!!x.alphaHash,ot=!!x.extensions,ue=Jn;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Ve=ge?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,st={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:j,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:ce,batchingColor:ce&&I._colorsTexture!==null,instancing:X,instancingColor:X&&I.instanceColor!==null,instancingMorph:X&&I.morphTexture!==null,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Q,matcap:Me,envMap:Ie,envMapMode:Ie&&V.mapping,envMapPMREM:ge,envMapMaxLod:ge?Ve.length-1:null,envMapSize:ge?Ve[0].width:null,aoMap:qe,lightMap:nt,bumpMap:mt,normalMap:rt,displacementMap:Wt,emissiveMap:vt,normalMapObjectSpace:rt&&x.normalMapType===wp,normalMapTangentSpace:rt&&x.normalMapType===Sl,packedNormalMap:rt&&x.normalMapType===Sl&&b1(x.normalMap.format),metalnessMap:jt,roughnessMap:Qt,anisotropy:cn,anisotropyMap:ke,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:k,diffuseRoughness:pn,diffuseRoughnessMap:le,dispersion:bt,retroreflection:wt,iridescence:be,iridescenceMap:$,iridescenceThicknessMap:me,sheen:Nt,sheenColorMap:Ee,sheenRoughnessMap:J,specularMap:ee,specularColorMap:_e,specularIntensityMap:U,transmission:He,transmissionMap:te,thicknessMap:K,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Ur&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:Oe,combine:x.combine,mapUv:Q&&f(x.map.channel),aoMapUv:qe&&f(x.aoMap.channel),lightMapUv:nt&&f(x.lightMap.channel),bumpMapUv:mt&&f(x.bumpMap.channel),normalMapUv:rt&&f(x.normalMap.channel),displacementMapUv:Wt&&f(x.displacementMap.channel),emissiveMapUv:vt&&f(x.emissiveMap.channel),metalnessMapUv:jt&&f(x.metalnessMap.channel),roughnessMapUv:Qt&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(x.sheenRoughnessMap.channel),specularMapUv:ee&&f(x.specularMap.channel),specularColorMapUv:_e&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:te&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:pe&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(rt||cn),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Q||pe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:D,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:De,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Q&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:vt&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bt,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=u[x.type],C;if(M){let R=Ti[M];C=Vs.clone(R.uniforms)}else C=x.uniforms;return C}function E(x,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new M1(i,M,x,s),l.push(C),h.set(M,C)),C}function b(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function S(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:S}}function w1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function T1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function i0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function s0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function c(u,f,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let E=a(u,f,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):t.push(E)}function l(u,f,m,_,p,g){let y=a(u,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||T1),n.length>1&&n.sort(f||i0),s.length>1&&s.sort(f||i0)}function d(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function A1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new s0,i.set(n,[o])):s>=r.length?(o=new s0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function R1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new de};break;case"SpotLight":t={position:new A,direction:new A,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function C1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var P1=0;function I1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L1(i){let e=new R1,t=C1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let s=new A,r=new ct,o=new ct;function a(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,E=0,b=0,v=0,S=0,x=0,M=0,C=0,R=0;l.sort(I1);for(let N=0,z=l.length;N<z;N++){let L=l[N],H=L.color,G=L.intensity,V=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ms?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*G,d+=H.g*G,u+=H.b*G;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],G);R++}else if(L.isSunLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,ae=t.get(L);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[m]=ae,n.sunShadowMap[m]=ie;let De=ne.getViewportCount();for(let Ye=0;Ye<De;Ye++)n.sunShadowMatrix[_+Ye]=ne.getMatrix(Ye),n.sunShadowCascade[_+Ye]=ne._cascadeData[Ye];_+=De,m++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,ae=t.get(L);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=Y,p++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=V,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;let ne=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,ne.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[y]=ne.matrix,L.castShadow){let ae=t.get(L);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.spotShadow[y]=ae,n.spotShadowMap[y]=ie,x++}y++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=Y,E++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ne=L.shadow,ae=t.get(L);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(G),Y.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[b]=Y,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==E||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==v||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=E,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=v,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=R,n.version=P1++)}function c(l,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,E=l.length;y<E;y++){let b=l[y];if(b.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function r0(i){let e=new L1(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function D1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new r0(i),e.set(s,[a])):r>=o.length?(a=new r0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F1=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],B1=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],o0=new ct,$o=new A,Hu=new A;function O1(i,e,t){let n=new Mi,s=new he,r=new he,o=new Rt,a=new Fs,c=new Sc,l={},h=t.maxTextureSize,d={[Ei]:Yt,[Yt]:Ei,[Bt]:Bt},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:N1,fragmentShader:U1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new pt;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let g=this.type;this.render=function(S,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===np&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);let C=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=g!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){let G=S[L],V=G.shadow;if(V===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Nr){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new qt(s.x,s.y,{format:ms,type:dn,minFilter:un,magFilter:un,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new ki(s.x,s.y,$n),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=zi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn}else G.isPointLight?(V.map=new Qo(s.x),V.map.depthTexture=new Lo(s.x,hi)):(V.map=new qt(s.x,s.y),V.map.depthTexture=new ki(s.x,s.y,hi)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=zi,this.type===Dr?(V.map.depthTexture.compareFunction=Y?Mu:yu,V.map.depthTexture.minFilter=un,V.map.depthTexture.magFilter=un):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let ne=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,M);let ae=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let De=0;De<ne;De++){let Ye=V.getCamera(De);if(G.isPointLight){let j=V.camera,Ae=V.matrix,Pe=G.distance||j.far;Pe!==j.far&&(j.far=Pe,j.updateProjectionMatrix()),$o.setFromMatrixPosition(G.matrixWorld),j.position.copy($o),Hu.copy(j.position),Hu.add(F1[De]),j.up.copy(B1[De]),j.lookAt(Hu),j.updateMatrixWorld(),Ae.makeTranslation(-$o.x,-$o.y,-$o.z),o0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(o0,j.coordinateSystem,j.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,De),i.clear();else{De===0&&(i.setRenderTarget(V.map),i.clear());let j=V.getViewport(De);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(o)}n=V.getFrustum(De),b(x,M,Ye,G,ae,this.type)}V.isPointLightShadow!==!0&&this.type===Nr&&y(V,M),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(C,R,I)};function y(S,x){let M=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new qt(s.x,s.y,{format:ms,type:dn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,M,f,_,null)}function E(S,x,M,C){let R=null,I=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=R.uuid,z=x.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let H=L[z];H===void 0&&(H=R.clone(),L[z]=H,x.addEventListener("dispose",v)),R=H}if(R.visible=x.visible,R.wireframe=x.wireframe,C===Nr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=M}return R}function b(S,x,M,C,R,I){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Nr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let L=e.update(S),H=S.material;if(Array.isArray(H)){let G=L.groups;for(let V=0,ie=G.length;V<ie;V++){let Y=G[V],ne=H[Y.materialIndex];if(ne&&ne.visible){let ae=E(S,ne,C,I);S.onBeforeShadow(i,S,x,M,L,ae,Y),i.renderBufferDirect(M,null,L,ae,S,Y),S.onAfterShadow(i,S,x,M,L,ae,Y)}}}else if(H.visible){let G=E(S,H,C,I);S.onBeforeShadow(i,S,x,M,L,G,null),i.renderBufferDirect(M,null,L,G,S,null),S.onAfterShadow(i,S,x,M,L,G,null)}}let z=S.children;for(let L=0,H=z.length;L<H;L++)b(z[L],x,M,C,R,I)}function v(S){S.target.removeEventListener("dispose",v);for(let M in l){let C=l[M],R=S.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function z1(i,e){function t(){let U=!1,te=new Rt,K=null,ye=new Rt(0,0,0,0);return{setMask:function(pe){K!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ve,Oe,ot,ue){ue===!0&&(pe*=ot,ve*=ot,Oe*=ot),te.set(pe,ve,Oe,ot),ye.equals(te)===!1&&(i.clearColor(pe,ve,Oe,ot),ye.copy(te))},reset:function(){U=!1,K=null,ye.set(-1,0,0,0)}}}function n(){let U=!1,te=!1,K=null,ye=null,pe=null;return{setReversed:function(ve){if(te!==ve){let Oe=e.get("EXT_clip_control");ve?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),te=ve;let ot=pe;pe=null,this.setClear(ot)}},getReversed:function(){return te},setTest:function(ve){ve?D(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(ve){K!==ve&&!U&&(i.depthMask(ve),K=ve)},setFunc:function(ve){if(te&&(ve=Up[ve]),ye!==ve){switch(ve){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=ve}},setLocked:function(ve){U=ve},setClear:function(ve){pe!==ve&&(pe=ve,te&&(ve=1-ve),i.clearDepth(ve))},reset:function(){U=!1,K=null,ye=null,pe=null,te=!1}}}function s(){let U=!1,te=null,K=null,ye=null,pe=null,ve=null,Oe=null,ot=null,ue=null;return{setTest:function(Ve){U||(Ve?D(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(Ve){te!==Ve&&!U&&(i.stencilMask(Ve),te=Ve)},setFunc:function(Ve,st,Re){(K!==Ve||ye!==st||pe!==Re)&&(i.stencilFunc(Ve,st,Re),K=Ve,ye=st,pe=Re)},setOp:function(Ve,st,Re){(ve!==Ve||Oe!==st||ot!==Re)&&(i.stencilOp(Ve,st,Re),ve=Ve,Oe=st,ot=Re)},setLocked:function(Ve){U=Ve},setClear:function(Ve){ue!==Ve&&(i.clearStencil(Ve),ue=Ve)},reset:function(){U=!1,te=null,K=null,ye=null,pe=null,ve=null,Oe=null,ot=null,ue=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,E=null,b=null,v=null,S=null,x=null,M=new de(0,0,0),C=0,R=!1,I=null,N=null,z=null,L=null,H=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ie>=2);let ne=null,ae={},De=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),j=new Rt().fromArray(De),Ae=new Rt().fromArray(Ye);function Pe(U,te,K,ye){let pe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<K;Oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(te+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ve}let B={};B[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(i.DEPTH_TEST),o.setFunc(Mr),mt(!1),rt(eu),D(i.CULL_FACE),qe(Wi);function D(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function X(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ce(U,te){return u[U]!==te?(i.bindFramebuffer(U,te),u[U]=te,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=te),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Q(U,te){let K=m,ye=!1;if(U){K=f.get(te),K===void 0&&(K=[],f.set(te,K));let pe=U.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Oe=pe.length;ve<Oe;ve++)K[ve]=i.COLOR_ATTACHMENT0+ve;K.length=pe.length,ye=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ye=!0);ye&&i.drawBuffers(K)}function Me(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Ie={[Os]:i.FUNC_ADD,[sp]:i.FUNC_SUBTRACT,[rp]:i.FUNC_REVERSE_SUBTRACT};Ie[op]=i.MIN,Ie[ap]=i.MAX;let ge={[cp]:i.ZERO,[lp]:i.ONE,[hp]:i.SRC_COLOR,[iu]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[pp]:i.DST_COLOR,[fp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[su]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[dp]:i.ONE_MINUS_DST_ALPHA,[xp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(U,te,K,ye,pe,ve,Oe,ot,ue,Ve){if(U===Wi){p===!0&&(X(i.BLEND),p=!1);return}if(p===!1&&(D(i.BLEND),p=!0),U!==ip){if(U!==g||Ve!==R){if((y!==Os||v!==Os)&&(i.blendEquation(i.FUNC_ADD),y=Os,v=Os),Ve)switch(U){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",U);break}else switch(U){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",U);break}E=null,b=null,S=null,x=null,M.set(0,0,0),C=0,g=U,R=Ve}return}pe=pe||te,ve=ve||K,Oe=Oe||ye,(te!==y||pe!==v)&&(i.blendEquationSeparate(Ie[te],Ie[pe]),y=te,v=pe),(K!==E||ye!==b||ve!==S||Oe!==x)&&(i.blendFuncSeparate(ge[K],ge[ye],ge[ve],ge[Oe]),E=K,b=ye,S=ve,x=Oe),(ot.equals(M)===!1||ue!==C)&&(i.blendColor(ot.r,ot.g,ot.b,ue),M.copy(ot),C=ue),g=U,R=!1}function nt(U,te){U.side===Bt?X(i.CULL_FACE):D(i.CULL_FACE);let K=U.side===Yt;te&&(K=!K),mt(K),U.blending===Ur&&U.transparent===!1?qe(Wi):qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ye=U.stencilWrite;a.setTest(ye),ye&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function rt(U){U!==ep?(D(i.CULL_FACE),U!==N&&(U===eu?i.cullFace(i.BACK):U===tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),N=U}function Wt(U){U!==z&&(V&&i.lineWidth(U),z=U)}function vt(U,te,K){U?(D(i.POLYGON_OFFSET_FILL),(L!==te||H!==K)&&(L=te,H=K,o.getReversed()&&(te=-te,K=-K),i.polygonOffset(te,K))):X(i.POLYGON_OFFSET_FILL)}function jt(U){U?D(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function Qt(U){U===void 0&&(U=i.TEXTURE0+G-1),ne!==U&&(i.activeTexture(U),ne=U)}function cn(U,te,K){K===void 0&&(ne===null?K=i.TEXTURE0+G-1:K=ne);let ye=ae[K];ye===void 0&&(ye={type:void 0,texture:void 0},ae[K]=ye),(ye.type!==U||ye.texture!==te)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(U,te||B[U]),ye.type=U,ye.texture=te)}function O(){let U=ae[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pn(){try{i.compressedTexImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function bt(){try{i.compressedTexImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function wt(){try{i.texSubImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function be(){try{i.texSubImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function ke(){try{i.texStorage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function P(){try{i.texStorage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function w(){try{i.texImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function k(){try{i.texImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function le(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function $(U,te){d[U]!==te&&(i.pixelStorei(U,te),d[U]=te)}function me(U){j.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Ee(U){Ae.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function J(U,te){let K=l.get(te);K===void 0&&(K=new WeakMap,l.set(te,K));let ye=K.get(U);ye===void 0&&(ye=i.getUniformBlockIndex(te,U.name),i.uniformBlockBinding(te,ye,ye),K.set(U,ye))}function ee(U,te,K){let pe=l.get(te).get(U);c[pe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,K),c[pe]=K)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ae={},u={},c={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,E=null,b=null,v=null,S=null,x=null,M=new de(0,0,0),C=0,R=!1,I=null,N=null,z=null,L=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:X,bindFramebuffer:ce,drawBuffers:Q,useProgram:Me,setBlending:qe,setMaterial:nt,setFlipSided:mt,setCullFace:rt,setLineWidth:Wt,setPolygonOffset:vt,setScissorTest:jt,activeTexture:Qt,bindTexture:cn,unbindTexture:O,compressedTexImage2D:pn,compressedTexImage3D:bt,texImage2D:w,texImage3D:k,pixelStorei:$,getParameter:le,updateUBOMapping:J,uniformBlockBinding:ee,texStorage2D:ke,texStorage3D:P,texSubImage2D:wt,texSubImage3D:be,compressedTexSubImage2D:Nt,compressedTexSubImage3D:He,scissor:me,viewport:Ee,reset:_e}}function H1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):So("canvas")}function y(P,w,k){let le=1,$=ke(P);if(($.width>k||$.height>k)&&(le=k/Math.max($.width,$.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let me=Math.floor(le*$.width),Ee=Math.floor(le*$.height);u===void 0&&(u=g(me,Ee));let J=w?g(me,Ee):u;return J.width=me,J.height=Ee,J.getContext("2d").drawImage(P,0,0,me,Ee),Ge("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+me+"x"+Ee+")."),J}else return"data"in P&&Ge("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function E(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,w,k,le,$,me=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ee;le&&(Ee=e.get("EXT_texture_norm16"),Ee||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&Ee&&(J=Ee.R16_EXT),k===i.SHORT&&Ee&&(J=Ee.R16_SNORM_EXT)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),w===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&Ee&&(J=Ee.RG16_EXT),k===i.SHORT&&Ee&&(J=Ee.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),w===i.RGB&&(k===i.UNSIGNED_SHORT&&Ee&&(J=Ee.RGB16_EXT),k===i.SHORT&&Ee&&(J=Ee.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),w===i.RGBA){let ee=me?Mo:dt.getTransfer($);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=ee===St?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&Ee&&(J=Ee.RGBA16_EXT),k===i.SHORT&&Ee&&(J=Ee.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,w){let k;return P?w===null||w===hi||w===Hs?k=i.DEPTH24_STENCIL8:w===$n?k=i.DEPTH32F_STENCIL8:w===Br&&(k=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hi||w===Hs?k=i.DEPTH_COMPONENT24:w===$n?k=i.DEPTH_COMPONENT32F:w===Br&&(k=i.DEPTH_COMPONENT16),k}function M(P,w){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){let w=new WeakRef(P);n.get(P).__ref=w,m.add(w),_.register(P,w,w)}function R(P){let w=n.get(P).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function I(P){z(P.target)}function N(P){L(P.target)}function z(P){P.removeEventListener("dispose",I),R(P),G(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function L(P){P.removeEventListener("dispose",N),R(P),ie(P)}function H(){for(let P of m){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):z(w))}m.clear(),d.clear()}function G(P){let w=n.get(P);if(w.__webglInit===void 0)return;let k=P.source,le=f.get(k);if(le){let $=le[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&V(P),Object.keys(le).length===0&&f.delete(k)}n.remove(P)}function V(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let k=P.source,le=f.get(k);delete le[w.__cacheKey],o.memory.textures--}function ie(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let k=P.depthTexture;if(k&&k.renderTarget===P&&z(k),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let me=0;me<w.__webglFramebuffer[$].length;me++)i.deleteFramebuffer(w.__webglFramebuffer[$][me]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let le=P.textures;for(let $=0,me=le.length;$<me;$++){let Ee=n.get(le[$]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(le[$])}n.remove(P)}let Y=0;function ne(){Y=0}function ae(){return Y}function De(P){Y=P}function Ye(){let P=Y;return P>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,P}function j(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Ae(P,w){let k=n.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let le=P.image;if(le===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(k,P,w);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function Pe(P,w){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){nt(k,P,w);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function B(P,w){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){nt(k,P,w);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function D(P,w){let k=n.get(P);if(P.version>0&&k.__version!==P.version){mt(k,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}let X={[rc]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},ce={[sn]:i.NEAREST,[bp]:i.NEAREST_MIPMAP_NEAREST,[Wo]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Bc]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},Q={[Ap]:i.NEVER,[Su]:i.ALWAYS,[Rp]:i.LESS,[yu]:i.LEQUAL,[Cp]:i.EQUAL,[Mu]:i.GEQUAL,[Pp]:i.GREATER,[Ip]:i.NOTEQUAL};function Me(P,w){if(w.type===$n&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===Bc||w.magFilter===Wo||w.magFilter===li||w.minFilter===un||w.minFilter===Bc||w.minFilter===Wo||w.minFilter===li)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,X[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,X[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,X[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==Wo&&w.minFilter!==li||w.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(P,w){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I),C(w));let le=w.source,$=f.get(le);$===void 0&&($={},f.set(le,$));let me=j(w);if(me!==P.__cacheKey){$[me]===void 0&&($[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[me].usedTimes++;let Ee=$[P.__cacheKey];Ee!==void 0&&($[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&V(w)),P.__cacheKey=me,P.__webglTexture=$[me].texture}return k}function ge(P,w,k){return Math.floor(Math.floor(P/k)/w)}function qe(P,w,k,le){let me=P.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,k,le,w.data);else{me.sort((U,te)=>U.start-te.start);let Ee=0;for(let U=1;U<me.length;U++){let te=me[Ee],K=me[U],ye=te.start+te.count,pe=ge(K.start,w.width,4),ve=ge(te.start,w.width,4);K.start<=ye+1&&pe===ve&&ge(K.start+K.count-1,w.width,4)===pe?te.count=Math.max(te.count,K.start+K.count-te.start):(++Ee,me[Ee]=K)}me.length=Ee+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let U=0,te=me.length;U<te;U++){let K=me[U],ye=Math.floor(K.start/4),pe=Math.ceil(K.count/4),ve=ye%w.width,Oe=Math.floor(ye/w.width),ot=pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,ve,Oe,ot,ue,k,le,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function nt(P,w,k){let le=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=i.TEXTURE_3D);let $=Ie(P,w),me=w.source;t.bindTexture(le,P.__webglTexture,i.TEXTURE0+k);let Ee=n.get(me);if(me.version!==Ee.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ue=dt.getPrimaries(dt.workingColorSpace),Ve=w.colorSpace===Xi?null:dt.getPrimaries(w.colorSpace),st=w.colorSpace===Xi||ue===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ee=y(w.image,!1,s.maxTextureSize);ee=He(w,ee);let _e=r.convert(w.format,w.colorSpace),U=r.convert(w.type),te=S(w.internalFormat,_e,U,w.normalized,w.colorSpace,w.isVideoTexture);Me(le,w);let K,ye=w.mipmaps,pe=w.isVideoTexture!==!0,ve=Ee.__version===void 0||$===!0,Oe=me.dataReady,ot=M(w,ee);if(w.isDepthTexture)te=x(w.format===qi,w.type),ve&&(pe?t.texStorage2D(i.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,te,ee.width,ee.height,0,_e,U,null));else if(w.isDataTexture)if(ye.length>0){pe&&ve&&t.texStorage2D(i.TEXTURE_2D,ot,te,ye[0].width,ye[0].height);for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,_e,U,K.data):t.texImage2D(i.TEXTURE_2D,ue,te,K.width,K.height,0,_e,U,K.data);w.generateMipmaps=!1}else pe?(ve&&t.texStorage2D(i.TEXTURE_2D,ot,te,ee.width,ee.height),Oe&&qe(w,ee,_e,U)):t.texImage2D(i.TEXTURE_2D,0,te,ee.width,ee.height,0,_e,U,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,te,ye[0].width,ye[0].height,ee.depth);for(let ue=0,Ve=ye.length;ue<Ve;ue++)if(K=ye[ue],w.format!==zn)if(_e!==null)if(pe){if(Oe)if(w.layerUpdates.size>0){let st=Du(K.width,K.height,w.format,w.type);for(let Re of w.layerUpdates){let Et=K.data.subarray(Re*st/K.data.BYTES_PER_ELEMENT,(Re+1)*st/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Re,K.width,K.height,1,_e,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,ee.depth,_e,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,te,K.width,K.height,ee.depth,0,K.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,ee.depth,_e,U,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,te,K.width,K.height,ee.depth,0,_e,U,K.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{pe&&ve&&t.texStorage2D(i.TEXTURE_2D,ot,te,ye[0].width,ye[0].height);for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],w.format!==zn?_e!==null?pe?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,_e,K.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,te,K.width,K.height,0,K.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,_e,U,K.data):t.texImage2D(i.TEXTURE_2D,ue,te,K.width,K.height,0,_e,U,K.data)}else if(w.isDataArrayTexture)if(pe){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,te,ee.width,ee.height,ee.depth),Oe)if(w.layerUpdates.size>0){let ue=Du(ee.width,ee.height,w.format,w.type);for(let Ve of w.layerUpdates){let st=ee.data.subarray(Ve*ue/ee.data.BYTES_PER_ELEMENT,(Ve+1)*ue/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,ee.width,ee.height,1,_e,U,st)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,U,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,_e,U,ee.data);else if(w.isData3DTexture)pe?(ve&&t.texStorage3D(i.TEXTURE_3D,ot,te,ee.width,ee.height,ee.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,U,ee.data)):t.texImage3D(i.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,_e,U,ee.data);else if(w.isFramebufferTexture){if(ve)if(pe)t.texStorage2D(i.TEXTURE_2D,ot,te,ee.width,ee.height);else{let ue=ee.width,Ve=ee.height;for(let st=0;st<ot;st++)t.texImage2D(i.TEXTURE_2D,st,te,ue,Ve,0,_e,U,null),ue>>=1,Ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ee.parentNode!==ue){ue.appendChild(ee),d.add(w),ue.onpaint=Ve=>{let st=Ve.changedElements;for(let Re of d)st.includes(Re.image)&&(Re.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let st=i.RGBA,Re=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,Re,Et,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(pe&&ve){let ue=ke(ye[0]);t.texStorage2D(i.TEXTURE_2D,ot,te,ue.width,ue.height)}for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,_e,U,K):t.texImage2D(i.TEXTURE_2D,ue,te,_e,U,K);w.generateMipmaps=!1}else if(pe){if(ve){let ue=ke(ee);t.texStorage2D(i.TEXTURE_2D,ot,te,ue.width,ue.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,U,ee)}else t.texImage2D(i.TEXTURE_2D,0,te,_e,U,ee);E(w)&&w.mipmapsAutoUpdate===!0&&b(le),Ee.__version=me.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function mt(P,w,k){if(w.image.length!==6)return;let le=Ie(P,w),$=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let me=n.get($);if($.version!==me.__version||le===!0){t.activeTexture(i.TEXTURE0+k);let Ee=dt.getPrimaries(dt.workingColorSpace),J=w.colorSpace===Xi?null:dt.getPrimaries(w.colorSpace),ee=w.colorSpace===Xi||Ee===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let _e=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,te=[];for(let Re=0;Re<6;Re++)!_e&&!U?te[Re]=y(w.image[Re],!0,s.maxCubemapSize):te[Re]=U?w.image[Re].image:w.image[Re],te[Re]=He(w,te[Re]);let K=te[0],ye=r.convert(w.format,w.colorSpace),pe=r.convert(w.type),ve=S(w.internalFormat,ye,pe,w.normalized,w.colorSpace),Oe=w.isVideoTexture!==!0,ot=me.__version===void 0||le===!0,ue=$.dataReady,Ve=M(w,K);Me(i.TEXTURE_CUBE_MAP,w);let st;if(w.isDepthTexture){if(ve=x(w.format===qi,w.type),ot)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ve,K.width,K.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ve,K.width,K.height,0,ye,pe,null)}else if(_e){Oe&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ve,K.width,K.height);for(let Re=0;Re<6;Re++){st=te[Re].mipmaps;for(let Et=0;Et<st.length;Et++){let en=st[Et];w.format!==zn?ye!==null?Oe?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,en.width,en.height,ye,en.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,ve,en.width,en.height,0,en.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,en.width,en.height,ye,pe,en.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,ve,en.width,en.height,0,ye,pe,en.data)}}}else{if(st=w.mipmaps,Oe&&ot){st.length>0&&Ve++;let Re=ke(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ve,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(U){Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,te[Re].width,te[Re].height,ye,pe,te[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ve,te[Re].width,te[Re].height,0,ye,pe,te[Re].data);for(let Et=0;Et<st.length;Et++){let ts=st[Et].image[Re].image;Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,ts.width,ts.height,ye,pe,ts.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,ve,ts.width,ts.height,0,ye,pe,ts.data)}}else{Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ye,pe,te[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ve,ye,pe,te[Re]);for(let Et=0;Et<st.length;Et++){let en=st[Et];Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,ye,pe,en.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,ve,ye,pe,en.image[Re])}}}E(w)&&w.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),me.__version=$.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function rt(P,w,k,le,$,me){let Ee=r.convert(k.format,k.colorSpace),J=r.convert(k.type),ee=S(k.internalFormat,Ee,J,k.normalized,k.colorSpace),_e=n.get(w),U=n.get(k);if(U.__renderTarget=w,!_e.__hasExternalTextures){let te=Math.max(1,w.width>>me),K=Math.max(1,w.height>>me);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,me,ee,te,K,w.depth,0,Ee,J,null):t.texImage2D($,me,ee,te,K,0,Ee,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,$,U.__webglTexture,0,wt(w)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,$,U.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(P,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let le=w.depthTexture,$=le&&le.isDepthTexture?le.type:null,me=x(w.stencilBuffer,$),Ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(w),me,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(w),me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,P)}else{let le=w.textures;for(let $=0;$<le.length;$++){let me=le[$],Ee=r.convert(me.format,me.colorSpace),J=r.convert(me.type),ee=S(me.internalFormat,Ee,J,me.normalized,me.colorSpace);be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(w),ee,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(w),ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(P,w,k){let le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(w.depthTexture);$.__renderTarget=w;let me=le?w.depthTexture.image[0]:w.depthTexture.image;(!$.__webglTexture||me.width!==w.width||me.height!==w.height)&&(me.width=w.width,me.height=w.height,w.depthTexture.needsUpdate=!0),le?D(w.depthTexture,0):Ae(w.depthTexture,0);let Ee=$.__webglTexture,J=wt(w),ee=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,_e=w.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===zi)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ee,Ee,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ee,Ee,0);else if(w.depthTexture.format===qi)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ee,Ee,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ee,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(P){let w=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let le=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){let $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",$)};le.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=le}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let le=0;le<6;le++)vt(w.__webglFramebuffer[le],P,le);else P.texture.mipmaps.length>0?vt(w.__webglFramebuffer[0],P,0):vt(w.__webglFramebuffer,P,0);else if(k){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=i.createRenderbuffer(),Wt(w.__webglDepthbuffer[le],P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,me)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Wt(w.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(P,w,k){let le=n.get(P);w!==void 0&&rt(le.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&jt(P)}function cn(P){let w=P.texture,k=n.get(P),le=n.get(w);P.addEventListener("dispose",N),C(P);let $=P.textures,me=P.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=w.version,o.memory.textures++),me){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<w.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(w.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let J=0,ee=$.length;J<ee;J++){let _e=n.get($[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&be(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let ee=$[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let _e=r.convert(ee.format,ee.colorSpace),U=r.convert(ee.type),te=S(ee.internalFormat,_e,U,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),K=wt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,te,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Me(i.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)rt(k.__webglFramebuffer[J][ee],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else rt(k.__webglFramebuffer[J],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(w)?b(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let J=0,ee=$.length;J<ee;J++){let _e=$[J],U=n.get(_e),te=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,U.__webglTexture),Me(te,_e),rt(k.__webglFramebuffer,P,_e,i.COLOR_ATTACHMENT0+J,te,0),E(_e)&&b(te)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,le.__webglTexture),Me(J,w),w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)rt(k.__webglFramebuffer[ee],P,w,i.COLOR_ATTACHMENT0,J,ee);else rt(k.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,J,0);E(w)?b(J):w.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&jt(P)}function O(P){let w=P.textures;for(let k=0,le=w.length;k<le;k++){let $=w[k];if(E($)&&$.mipmapsAutoUpdate===!0){let me=v(P),Ee=n.get($).__webglTexture;t.bindTexture(me,Ee),b(me),t.unbindTexture()}}}let pn=[];function bt(P){if(P.samples>0){if(be(P)===!1){let w=P.textures,k=P.width,le=P.height,$=i.COLOR_BUFFER_BIT,me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),J=w.length>1;if(J)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);let U=n.get(w[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,k,le,0,0,k,le,$,i.NEAREST),c===!0&&(pn.length=0,pn.push(i.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&pn.push(me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);let U=n.get(w[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function wt(P){return Math.min(s.maxSamples,P.samples)}function be(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Nt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function He(P,w){let k=P.colorSpace,le=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Is&&k!==Xi&&(dt.getTransfer(k)===St?(le!==zn||$!==Dn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),w}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Ye,this.resetTextureUnits=ne,this.getTextureUnits=ae,this.setTextureUnits=De,this.setTexture2D=Ae,this.setTexture2DArray=Pe,this.setTexture3D=B,this.setTextureCube=D,this.rebindTextures=Qt,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=be,this.dispose=H}function k1(i,e){function t(n,s=Xi){let r,o=dt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Oc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===_u)return i.RGB;if(n===zn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===kc)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===qo||n===Xo||n===Yo||n===Zo)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Xc||n===Yc||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Jc||n===$c||n===jc||n===Qc||n===Ko||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kc||n===Jc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jc)return r.COMPRESSED_R11_EAC;if(n===Qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ko)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===_l||n===Jo||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Do(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:V1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Yu,g={},y=t.getContextAttributes(),E=null,b=null,v=[],S=[],x=new he,M=null,C=null,R=new hn;R.viewport=new Rt;let I=new hn;I.viewport=new Rt;let N=[R,I],z=new Dc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Ae=v[j];return Ae===void 0&&(Ae=new Tr,v[j]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(j){let Ae=v[j];return Ae===void 0&&(Ae=new Tr,v[j]=Ae),Ae.getGripSpace()},this.getHand=function(j){let Ae=v[j];return Ae===void 0&&(Ae=new Tr,v[j]=Ae),Ae.getHandSpace()};function G(j){let Ae=S.indexOf(j.inputSource);if(Ae===-1)return;let Pe=v[Ae];Pe!==void 0&&(Pe.update(j.inputSource,j.frame,l||o),Pe.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let j=0;j<v.length;j++){let Ae=S[j];Ae!==null&&(S[j]=null,v[j].disconnect(Ae))}L=null,H=null,p.reset();for(let j in g)delete g[j];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,B=null,D=null;y.depth&&(D=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=y.stencil?qi:zi,B=y.stencil?Hs:hi);let X={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(X),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new qt(u.textureWidth,u.textureHeight,{format:zn,type:Dn,depthTexture:new ki(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qt(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(j){for(let Ae=0;Ae<j.removed.length;Ae++){let Pe=j.removed[Ae],B=S.indexOf(Pe);B>=0&&(S[B]=null,v[B].disconnect(Pe))}for(let Ae=0;Ae<j.added.length;Ae++){let Pe=j.added[Ae],B=S.indexOf(Pe);if(B===-1){for(let X=0;X<v.length;X++)if(X>=S.length){S.push(Pe),B=X;break}else if(S[X]===null){S[X]=Pe,B=X;break}if(B===-1)break}let D=v[B];D&&D.connect(Pe)}}function Y(j,Ae){Ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Ae=j.near,Pe=j.far;p.texture!==null&&(p.depthNear>0&&(Ae=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),z.near=I.near=R.near=Ae,z.far=I.far=R.far=Pe,(L!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,H=z.far),z.layers.mask=j.layers.mask|6,R.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let B=j.parent,D=z.cameras;Y(z,B);for(let X=0;X<D.length;X++)Y(D[X],B);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,z,B)};function ne(j,Ae,Pe){Pe===null?j.matrix.copy(Ae.matrixWorld):(j.matrix.copy(Pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(Ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Ae.projectionMatrix),j.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Er*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(j){return g[j]};let ae=null;function De(j,Ae){if(h=Ae.getViewerPose(l||o),m=Ae,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let B=!1;Pe.length!==z.cameras.length&&(z.cameras.length=0,B=!0);for(let Q=0;Q<Pe.length;Q++){let Me=Pe[Q],Ie=null;if(f!==null)Ie=f.getViewport(Me);else{let qe=d.getViewSubImage(u,Me);Ie=qe.viewport,Q===0&&(e.setRenderTargetTextures(b,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(b))}let ge=N[Q];ge===void 0&&(ge=new hn,ge.layers.enable(Q),ge.viewport=new Rt,N[Q]=ge),ge.matrix.fromArray(Me.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Me.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Q===0&&(z.matrix.copy(ge.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),B===!0&&z.cameras.push(ge)}let D=s.enabledFeatures;if(D&&D.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Q=d.getDepthInformation(Pe[0]);Q&&Q.isValid&&Q.texture&&p.init(Q,s.renderState)}if(D&&D.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<Pe.length;Q++){let Me=Pe[Q].camera;if(Me){let Ie=g[Me];Ie||(Ie=new Do,g[Me]=Ie);let ge=d.getCameraImage(Me);Ie.sourceTexture=ge}}}}for(let Pe=0;Pe<v.length;Pe++){let B=S[Pe],D=v[Pe];B!==null&&D!==void 0&&D.update(B,Ae,l||o)}ae&&ae(j,Ae),Ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ae}),m=null}let Ye=new a0;Ye.setAnimationLoop(De),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}},W1=new ct,x0=new Je;x0.set(-1,0,0,0,1,0,0,0,1);function q1(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Pu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,E,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,y,E):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Yt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Yt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),E=y.envMap,b=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(x0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X1(i,e,t,n){let s={},r={};function o(y,E){let b=E.program;n.uniformBlockBinding(y,b,s[y.id])}function a(y,E){let b=s[y.id];b===void 0&&(m(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",p));let v=E.program;n.updateUBOMapping(y,v);let S=e.render.frame;r[y.id]!==S&&(l(y),r[y.id]=S)}function c(y){let E=i.createBuffer(),b=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,v),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(y){let E=s[y.id],b=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let S=0,x=b.length;S<x;S++){let M=b[S];if(Array.isArray(M))for(let C=0,R=M.length;C<R;C++)h(M[C],S,C,v);else h(M,S,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,b,v){if(u(y,E,b,v)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){let R=x[C],I=_(R,!0);d(R,y.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function d(y,E,b){typeof y=="number"||typeof y=="boolean"?E[b]=y:y.isMatrix3?(E[b]=y.elements[0],E[b+1]=y.elements[1],E[b+2]=y.elements[2],E[b+3]=0,E[b+4]=y.elements[3],E[b+5]=y.elements[4],E[b+6]=y.elements[5],E[b+7]=0,E[b+8]=y.elements[6],E[b+9]=y.elements[7],E[b+10]=y.elements[8],E[b+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-b),b):y.toArray(E,b)}function u(y,E,b,v){let S=y.value,x=E+"_"+b;if(Array.isArray(S)){v[x]===void 0&&(v[x]=[]);let M=v[x],C=!1;for(let R=0;R<S.length;R++)f(S[R],M,R)===!0&&(C=!0);return C}return f(S,v,x)}function f(y,E,b){if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let v=E[b];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function m(y){let E=y.uniforms,b=0,v=16;for(let x=0,M=E.length;x<M;x++){let C=Array.isArray(E[x])?E[x]:[E[x]];for(let R=0,I=C.length;R<I;R++){let N=C[R],z=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(E[x])||Array.isArray(N.value),H=b;for(let V=0,ie=z.length;V<ie;V++){let Y=z[V],ne=_(Y,L),ae=b%v,De=ae%ne.boundary,Ye=ae+De;b+=De,Ye!==0&&v-Ye<ne.storage&&(b+=v-Ye),V===0&&(H=b),b+=ne.storage}let G=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new G((b-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let S=b%v;return S>0&&(b+=v-S),y.__size=b,y.__cache={},this}function _(y,E){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){let E=y.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var Y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function Z1(){return wi===null&&(wi=new Ns(Y1,16,16,ms,dn),wi.name="DFG_LUT",wi.minFilter=un,wi.magFilter=un,wi.wrapS=xi,wi.wrapT=xi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Tl=class{constructor(e={}){let{canvas:t=Lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([Wc,Gc,Vc]),g=new Set([Dn,hi,Br,Hs,zc,Hc]),y=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},v=null,S=null,x=[],M=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,z=null,L=null,H=null;this._outputColorSpace=En;let G=0,V=0,ie=null,Y=-1,ne=null,ae=new Rt,De=new Rt,Ye=null,j=new de(0),Ae=0,Pe=t.width,B=t.height,D=1,X=null,ce=null,Q=new Rt(0,0,Pe,B),Me=new Rt(0,0,Pe,B),Ie=!1,ge=new Mi,qe=new uc,nt=!1,mt=!1,rt=new ct,Wt=new A,vt=new Rt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function cn(){return ie===null?D:1}let O=n;function pn(T,F){return t.getContext(T,F)}let bt,wt,be,Nt,He,ke,P,w,k,le,$,me,Ee,J,ee,_e,U,te,K,ye,pe,ve,Oe;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Re,!1),O===null){let F="webgl2";if(O=pn(F,T),O===null)throw pn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(T){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ze("WebGLRenderer: "+T.message),T}function ot(){bt=new ry(O),bt.init(),pe=new k1(O,bt),wt=new Z_(O,bt,e,pe),be=new z1(O,bt),wt.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),H=O.createFramebuffer(),Nt=new cy(O),He=new w1,ke=new H1(O,bt,be,He,wt,pe,Nt),P=new sy(R),w=new hx(O),ve=new X_(O,w),k=new oy(O,w,Nt,ve),le=new hy(O,k,w,ve,Nt),te=new ly(O,wt,ke),ee=new K_(He),$=new E1(R,P,bt,wt,ve,ee),me=new q1(R,He),Ee=new A1,J=new D1(bt),U=new q_(R,P,be,le,m,c),_e=new O1(R,le,wt),Oe=new X1(O,Nt,wt,be),K=new Y_(O,bt,Nt),ye=new ay(O,bt,Nt),Nt.programs=$.programs,R.capabilities=wt,R.extensions=bt,R.properties=He,R.renderLists=Ee,R.shadowMap=_e,R.state=be,R.info=Nt}_!==Dn&&(C=new fy(_,t.width,t.height,a,s,r));let ue=new Zu(R,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(Pe,B,!1))},this.getSize=function(T){return T.set(Pe,B)},this.setSize=function(T,F,Z=!0){if(ue.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=T,B=F,t.width=Math.floor(T*D),t.height=Math.floor(F*D),Z===!0&&(t.style.width=T+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Pe*D,B*D).floor()},this.setDrawingBufferSize=function(T,F,Z){Pe=T,B=F,D=Z,t.width=Math.floor(T*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===Dn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ae)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,F,Z,W){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,Z,W),be.viewport(ae.copy(Q).multiplyScalar(cn()).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,F,Z,W){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,F,Z,W),be.scissor(De.copy(Me).multiplyScalar(cn()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){be.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let W=0;if(T){let q=!1;if(ie!==null){let we=ie.texture.format;q=p.has(we)}if(q){let we=ie.texture.type,Ne=g.has(we),Se=U.getClearColor(),Le=U.getClearAlpha(),Be=Se.r,je=Se.g,ut=Se.b;Ne?(y[0]=Be,y[1]=je,y[2]=ut,y[3]=Le,O.clearBufferuiv(O.COLOR,0,y)):(E[0]=Be,E[1]=je,E[2]=ut,E[3]=Le,O.clearBufferiv(O.COLOR,0,E))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),U.dispose(),Ee.dispose(),J.dispose(),ke.dispose(),He.dispose(),P.dispose(),le.dispose(),k.dispose(),ve.dispose(),Oe.dispose(),$.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",hd),ue.removeEventListener("sessionend",ud),bs.stop()};function Ve(T){T.preventDefault(),bo("WebGLRenderer: Context Lost."),I=!0}function st(){bo("WebGLRenderer: Context Restored."),I=!1;let T=Nt.autoReset,F=_e.enabled,Z=_e.autoUpdate,W=_e.needsUpdate,q=_e.type;ot(),Nt.autoReset=T,_e.enabled=F,_e.autoUpdate=Z,_e.needsUpdate=W,_e.type=q}function Re(T){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Et(T){let F=T.target;F.removeEventListener("dispose",Et),en(F)}function en(T){ts(T),He.remove(T)}function ts(T){let F=He.get(T).programs;F!==void 0&&(F.forEach(function(Z){$.releaseProgram(Z)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,W,q,we){F===null&&(F=jt);let Ne=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=jm(T,F,Z,W,q);be.setMaterial(W,Ne);let Le=Z.index,Be=1;if(W.wireframe===!0){if(Le=k.getWireframeAttribute(Z),Le===void 0)return;Be=2}let je=Z.drawRange,ut=Z.attributes.position,Ue=je.start*Be,ft=(je.start+je.count)*Be;we!==null&&(Ue=Math.max(Ue,we.start*Be),ft=Math.min(ft,(we.start+we.count)*Be)),Le!==null?(Ue=Math.max(Ue,0),ft=Math.min(ft,Le.count)):ut!=null&&(Ue=Math.max(Ue,0),ft=Math.min(ft,ut.count));let Ht=ft-Ue;if(Ht<0||Ht===1/0)return;ve.setup(q,W,Se,Z,Le);let It,At=K;if(Le!==null&&(It=w.get(Le),At=ye,At.setIndex(It)),q.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*cn()),At.setMode(O.LINES)):At.setMode(O.TRIANGLES);else if(q.isLine){let mn=W.linewidth;mn===void 0&&(mn=1),be.setLineWidth(mn*cn()),q.isLineSegments?At.setMode(O.LINES):q.isLineLoop?At.setMode(O.LINE_LOOP):At.setMode(O.LINE_STRIP)}else q.isPoints?At.setMode(O.POINTS):q.isSprite&&At.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))At.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let mn=q._multiDrawStarts,Fe=q._multiDrawCounts,Sn=q._multiDrawCount,_t=Le?w.get(Le).bytesPerElement:1,Es=He.get(W).currentProgram.getUniforms();for(let gn=0;gn<Sn;gn++)Es.setValue(O,"_gl_DrawID",gn),At.render(mn[gn]/_t,Fe[gn])}else if(q.isInstancedMesh)At.renderInstances(Ue,Ht,q.count);else if(Z.isInstancedBufferGeometry){let mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,mn);At.renderInstances(Ue,Ht,Fe)}else At.render(Ue,Ht)};function ld(T,F,Z,W){N!==null&&T.isNodeMaterial&&N.setObject(W,T),nt===!0&&ee.setState(T,Z,!1),T.transparent===!0&&T.side===Bt&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,ro(T,F,W),T.side=Ei,T.needsUpdate=!0,ro(T,F,W),T.side=Bt):ro(T,F,W)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),N!==null&&N.renderStart(T,F,Z),S=J.get(Z),S.init(F),M.push(S),Z.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),mt=this.localClippingEnabled,nt=ee.init(this.clippingPlanes,mt),nt===!0&&ee.setGlobalState(this.clippingPlanes,F),N!==null&&_e.render(S.state.shadowsArray,Z,F);let W=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let we=q.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Se=we[Ne];ld(Se,Z,F,q),W.add(Se)}else ld(we,Z,F,q),W.add(we)}),S=M.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(T,F,Z=null){let W=this.compile(T,F,Z);return new Promise(q=>{function we(){if(W.forEach(function(Ne){let Le=He.get(Ne).currentProgram;(Le===void 0||Le.isReady())&&W.delete(Ne)}),W.size===0){q(T);return}setTimeout(we,10)}bt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let _h=null;function Jm(T){_h&&_h(T)}function hd(){bs.stop()}function ud(){bs.start()}let bs=new a0;bs.setAnimationLoop(Jm),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(T){_h=T,ue.setAnimationLoop(T),T===null?bs.stop():bs.start()},ue.addEventListener("sessionstart",hd),ue.addEventListener("sessionend",ud),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(T,F);let Z=ue.enabled===!0&&ue.isPresenting===!0,W=C!==null&&(ie===null||Z)&&C.begin(R,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,ie),S=J.get(T,M.length),S.init(F),S.state.textureUnits=ke.getTextureUnits(),M.push(S),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?qe.setFromArrayCamera(F):ge.setFromProjectionMatrix(rt,qn,F.reversedDepth),mt=this.localClippingEnabled,nt=ee.init(this.clippingPlanes,mt),v=Ee.get(T,x.length),v.init(),x.push(v),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Ne=R.xr.getDepthSensingMesh();Ne!==null&&yh(Ne,F,-1/0,R.sortObjects)}yh(T,F,0,R.sortObjects),v.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(X,ce),Qt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Qt&&U.addToRenderList(v,T),this.info.autoReset===!0&&this.info.reset(),nt===!0&&ee.beginShadows();let q=S.state.shadowsArray;if(_e.render(q,T,F),nt===!0&&ee.endShadows(),(W&&C.hasRenderPass())===!1){let Ne=v.opaque,Se=v.transmissive;if(S.setupLights(),F.isArrayCamera){let Le=F.cameras;if(Se.length>0)for(let Be=0,je=Le.length;Be<je;Be++){let ut=Le[Be];dd(Ne,Se,T,ut)}Qt&&U.render(T);for(let Be=0,je=Le.length;Be<je;Be++){let ut=Le[Be];fd(v,T,ut,ut.viewport)}}else Se.length>0&&dd(Ne,Se,T,F),Qt&&U.render(T),fd(v,T,F)}ie!==null&&V===0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie)),W&&C.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),ve.resetDefaultState(),Y=-1,ne=null,M.pop(),M.length>0?(S=M[M.length-1],ke.setTextureUnits(S.state.textureUnits),nt===!0&&ee.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,N!==null&&N.renderEnd()};function yh(T,F,Z,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){let Ne=F.isArrayCamera?qe:ge;if(!T.frustumCulled||T.intersectsFrustum(Ne)){W&&vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);let Se=le.update(T),Le=T.material;Le.visible&&v.push(T,Se,Le,Z,vt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Ne=F.isArrayCamera?qe:ge;if(!T.frustumCulled||T.intersectsFrustum(Ne)){let Se=le.update(T),Le=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),vt.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),vt.copy(Se.boundingSphere.center)),vt.applyMatrix4(T.matrixWorld).applyMatrix4(rt)),Array.isArray(Le)){let Be=Se.groups;for(let je=0,ut=Be.length;je<ut;je++){let Ue=Be[je],ft=Le[Ue.materialIndex];ft&&ft.visible&&v.push(T,Se,ft,Z,vt.z,Ue,F)}}else Le.visible&&v.push(T,Se,Le,Z,vt.z,null,F)}}}let we=T.children;for(let Ne=0,Se=we.length;Ne<Se;Ne++)yh(we[Ne],F,Z,W)}function fd(T,F,Z,W){let{opaque:q,transmissive:we,transparent:Ne}=T;S.setupLightsView(Z),nt===!0&&ee.setGlobalState(R.clippingPlanes,Z),W&&be.viewport(ae.copy(W)),q.length>0&&Sa(q,F,Z),we.length>0&&Sa(we,F,Z),Ne.length>0&&Sa(Ne,F,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function dd(T,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let Ue=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new qt(1,1,{generateMipmaps:!0,type:Ue?dn:Dn,minFilter:li,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=S.state.transmissionRenderTarget[W.id],Ne=W.viewport||ae;we.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Le=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(j),Ae=R.getClearAlpha(),Ae<1&&R.setClearColor(16777215,.5),R.clear(),Qt&&U.render(Z);let je=R.toneMapping;R.toneMapping=Jn;let ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),nt===!0&&ee.setGlobalState(R.clippingPlanes,W),Sa(T,Z,W),ke.updateMultisampleRenderTarget(we),ke.updateRenderTargetMipmap(we),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ft=0,Ht=F.length;ft<Ht;ft++){let It=F[ft],{object:At,geometry:mn,material:Fe,group:Sn}=It;if(Fe.side===Bt&&At.layers.test(W.layers)){let _t=Fe.side;Fe.side=Yt,Fe.needsUpdate=!0,pd(At,Z,W,mn,Fe,Sn),Fe.side=_t,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(ke.updateMultisampleRenderTarget(we),ke.updateRenderTargetMipmap(we))}R.setRenderTarget(Se,Le,Be),R.setClearColor(j,Ae),ut!==void 0&&(W.viewport=ut),R.toneMapping=je}function Sa(T,F,Z){let W=F.isScene===!0?F.overrideMaterial:null;for(let q=0,we=T.length;q<we;q++){let Ne=T[q],{object:Se,geometry:Le,group:Be}=Ne,je=Ne.material;je.allowOverride===!0&&W!==null&&(je=W),Se.layers.test(Z.layers)&&pd(Se,F,Z,Le,je,Be)}}function pd(T,F,Z,W,q,we){N!==null&&q.isNodeMaterial&&N.setObject(T,q),T.onBeforeRender(R,F,Z,W,q,we),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,F,Z,W,T,we),q.transparent===!0&&q.side===Bt&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,R.renderBufferDirect(Z,F,W,q,T,we),q.side=Ei,q.needsUpdate=!0,R.renderBufferDirect(Z,F,W,q,T,we),q.side=Bt):R.renderBufferDirect(Z,F,W,q,T,we),T.onAfterRender(R,F,Z,W,q,we)}function md(T){let F=0;for(let Z of T)Z.texture!==null&&F++;return F}function ro(T,F,Z){F.isScene!==!0&&(F=jt);let W=He.get(T),q=S.state.lights,we=S.state.shadowsArray,Ne=q.state.version,Se=$.getParameters(T,q.state,we,F,Z,S.state.lightProbeGridArray),Le=$.getProgramCacheKey(Se),Be=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=P.get(T.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Et),Be=new Map,W.programs=Be,W.programVariants=new Map);let ut=Be.get(Le);if(ut!==void 0){if(W.currentProgram===ut&&W.lightsStateVersion===Ne)return xd(T,Se),ut}else Se.uniforms=$.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Z,Se),T.onBeforeCompile(Se,R),ut=$.acquireProgram(Se,Le),Be.set(Le,ut),W.uniforms=Se.uniforms;let Ue=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),xd(T,Se),W.needsLights=eg(T),W.lightsStateVersion=Ne,W.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.sunLights.value=q.state.sun,Ue.sunLightShadows.value=q.state.sunShadow,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.sunShadowMatrix.value=q.state.sunShadowMatrix,Ue.sunShadowCascade.value=q.state.sunShadowCascade,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=md(S.state.lightProbeGridArray),W.currentProgram=ut,W.uniformsList=null,ut}function $m(T,F,Z,W,q){let we=He.get(T),Ne=we.currentProgram.id+","+W+","+q,Se=we.programVariants.get(Ne);return Se===void 0?(Se=ro(T,F,Z),we.programVariants.set(Ne,Se)):(we.currentProgram=Se,we.uniformsList=null,we.outputColorSpace=W,we.toneMapping=q),Se}function gd(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Or.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function xd(T,F){let Z=He.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function jm(T,F,Z,W,q){F.isScene!==!0&&(F=jt),ke.resetTextureUnits();let we=F.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Se=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:dt.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=P.get(W.envMap||Ne,Le),je=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ut=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,Ht=!!Z.morphAttributes.color,It=Jn;W.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(It=R.toneMapping);let At=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mn=At!==void 0?At.length:0,Fe=He.get(W),Sn=S.state.lights;if(nt===!0&&(mt===!0||T!==ne)){let Ut=T===ne&&W.id===Y;ee.setState(W,T,Ut)}let _t=!1,Es=!1;W.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Sn.state.version||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==Be||W.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ee.numPlanes||Fe.numIntersection!==ee.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==ut||Fe.morphTargets!==Ue||Fe.morphNormals!==ft||Fe.morphColors!==Ht||Fe.morphTargetsCount!==mn||Fe.numLightProbeGrids!==md(S.state.lightProbeGridArray)?_t=!0:(Fe.outputColorSpace!==Se||Fe.toneMapping!==It)&&(Es=!0):(_t=!0,Fe.__version=W.version);let gn=Fe.currentProgram;(_t===!0||Es===!0)&&(gn=Es===!0?$m(W,F,q,Se,It):ro(W,F,q),N&&W.isNodeMaterial&&N.onUpdateProgram(W,gn,Fe));let ba=!1,ns=!1,ws=!1,gt=gn.getUniforms(),ln=Fe.uniforms;if(be.useProgram(gn.program)&&(ba=!0,ns=!0,ws=!0),W.id!==Y&&(Y=W.id,ns=!0),ba||ne!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",T.projectionMatrix),gt.setValue(O,"viewMatrix",T.matrixWorldInverse);let tn=gt.map.cameraPosition;tn!==void 0&&tn.setValue(O,Wt.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,ns=!0,ws=!0)}if(Fe.needsLights&&(Sn.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",Sn.state.sunShadowMap,ke),Sn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",Sn.state.directionalShadowMap,ke),Sn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",Sn.state.spotShadowMap,ke),Sn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",Sn.state.pointShadowMap,ke)),q.isSkinnedMesh){gt.setOptional(O,q,"bindMatrix"),gt.setOptional(O,q,"bindMatrixInverse");let Ut=q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),gt.setValue(O,"boneTexture",Ut.boneTexture,ke))}q.isBatchedMesh&&(gt.setOptional(O,q,"batchingTexture"),gt.setValue(O,"batchingTexture",q._matricesTexture,ke),gt.setOptional(O,q,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",q._indirectTexture,ke),gt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",q._colorsTexture,ke));let si=Z.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&te.update(q,Z,gn),(ns||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,gt.setValue(O,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(ln.envMapIntensity.value=F.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Z1()),ns){if(gt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Fe.needsLights&&Qm(ln,ws),we&&W.fog===!0&&me.refreshFogUniforms(ln,we),me.refreshMaterialUniforms(ln,W,D,B,S.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Ut=b,tn=0;for(let Ii of S.state.lightProbeGridArray)Ii.texture!==null&&(Ut.textures[tn]=Ii.texture,Ut.min[tn]=Ii.boundingBox.min,Ut.max[tn]=Ii.boundingBox.max,Ut.resolution[tn]=Ii.resolution,tn++);for(let Ii in Ut)Ut[Ii].length=tn;ln.probesSH.value=Ut.textures,ln.probesMin.value=Ut.min,ln.probesMax.value=Ut.max,ln.probesResolution.value=Ut.resolution}Or.upload(O,gd(Fe),ln,ke)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Or.upload(O,gd(Fe),ln,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(O,"center",q.center),gt.setValue(O,"modelViewMatrix",q.modelViewMatrix),gt.setValue(O,"normalMatrix",q.normalMatrix),gt.setValue(O,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let Ut=W.uniformsGroups;for(let tn=0,Ii=Ut.length;tn<Ii;tn++){let _d=Ut[tn];Oe.update(_d,gn),Oe.bind(_d,gn)}}return gn}function Qm(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function eg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,F,Z){let W=He.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),He.get(T.texture).__webglTexture=F,He.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let Z=He.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){ie=T,G=F,V=Z;let W=null,q=!1,we=!1;if(T){let Se=He.get(T);if(Se.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),ae.copy(T.viewport),De.copy(T.scissor),Ye=T.scissorTest,be.viewport(ae),be.scissor(De),be.setScissorTest(Ye),Y=-1;return}else if(Se.__webglFramebuffer===void 0)ke.setupRenderTarget(T);else if(Se.__hasExternalTextures)ke.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let je=T.depthTexture;if(Se.__boundDepthTexture!==je){if(je!==null&&He.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(T)}}let Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(we=!0);let Be=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?W=Be[F][Z]:W=Be[F],q=!0):T.samples>0&&ke.useMultisampledRTT(T)===!1?W=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[Z]:W=Be,ae.copy(T.viewport),De.copy(T.scissor),Ye=T.scissorTest}else ae.copy(Q).multiplyScalar(D).floor(),De.copy(Me).multiplyScalar(D).floor(),Ye=Ie;if(Z!==0&&(W=z),be.bindFramebuffer(O.FRAMEBUFFER,W)&&be.drawBuffers(T,W),be.viewport(ae),be.scissor(De),be.setScissorTest(Ye),q){let Se=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,Z)}else if(we){let Se=F;for(let Le=0;Le<T.textures.length;Le++){let Be=He.get(T.textures[Le]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Le,Be.__webglTexture,Z,Se)}}else if(T!==null&&Z!==0){let Se=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,Z)}Y=-1};function vd(T){let F=He.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=wt.textureFormatReadable(T.format),F.__typeReadable=wt.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Z,W,q,we,Ne,Se=0){if(!(T&&T.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne],Array.isArray(Le)&&(Le=Le[0])),Le){be.bindFramebuffer(O.FRAMEBUFFER,Le);try{let Be=T.textures[Se],je=Be.format,ut=Be.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Ue=vd(Be);if(Ue.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-q&&O.readPixels(F,Z,W,q,pe.convert(je),pe.convert(ut),we)}finally{let Be=ie!==null?He.get(ie).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,W,q,we,Ne,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne],Array.isArray(Le)&&(Le=Le[0])),Le)if(F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-q){be.bindFramebuffer(O.FRAMEBUFFER,Le);let Be=T.textures[Se],je=Be.format,ut=Be.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Ue=vd(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(F,Z,W,q,pe.convert(je),pe.convert(ut),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ht=ie!==null?He.get(ie).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ht);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Np(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ft),O.deleteSync(It),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){let W=Math.pow(2,-Z),q=Math.floor(T.image.width*W),we=Math.floor(T.image.height*W),Ne=F!==null?F.x:0,Se=F!==null?F.y:0;ke.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ne,Se,q,we),be.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,W=null,q=0,we=0){let Ne,Se,Le,Be,je,ut,Ue,ft,Ht,It=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Z!==null)Ne=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,je=Z.min.y,ut=Z.isBox3?Z.min.z:0;else{let gt=Math.pow(2,-q);Ne=Math.floor(It.width*gt),Se=Math.floor(It.height*gt),T.isDataArrayTexture?Le=It.depth:T.isData3DTexture?Le=Math.floor(It.depth*gt):Le=1,Be=0,je=0,ut=0}W!==null?(Ue=W.x,ft=W.y,Ht=W.z):(Ue=0,ft=0,Ht=0);let At=pe.convert(F.format),mn=pe.convert(F.type),Fe;F.isData3DTexture?(ke.setTexture3D(F,0),Fe=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Fe=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Fe=O.TEXTURE_2D),be.activeTexture(O.TEXTURE0),be.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),be.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),be.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Sn=be.getParameter(O.UNPACK_ROW_LENGTH),_t=be.getParameter(O.UNPACK_IMAGE_HEIGHT),Es=be.getParameter(O.UNPACK_SKIP_PIXELS),gn=be.getParameter(O.UNPACK_SKIP_ROWS),ba=be.getParameter(O.UNPACK_SKIP_IMAGES);be.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),be.pixelStorei(O.UNPACK_SKIP_ROWS,je),be.pixelStorei(O.UNPACK_SKIP_IMAGES,ut);let ns=T.isDataArrayTexture||T.isData3DTexture,ws=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let gt=He.get(T),ln=He.get(F),si=He.get(gt.__renderTarget),Ut=He.get(ln.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,si.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let tn=0;tn<Le;tn++)ns&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(T).__webglTexture,q,ut+tn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(F).__webglTexture,we,Ht+tn)),O.blitFramebuffer(Be,je,Be+Ne,je+Se,Ue,ft,Ue+Ne,ft+Se,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||He.has(T)){let gt=He.get(T),ln=He.get(F);be.bindFramebuffer(O.READ_FRAMEBUFFER,L),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let si=0;si<Le;si++)ns?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,q,ut+si):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,q),ws?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,we,Ht+si):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,we),q!==0?O.blitFramebuffer(Be,je,Be+Ne,je+Se,Ue,ft,Ue+Ne,ft+Se,O.COLOR_BUFFER_BIT,O.NEAREST):ws?O.copyTexSubImage3D(Fe,we,Ue,ft,Ht+si,Be,je,Ne,Se):O.copyTexSubImage2D(Fe,we,Ue,ft,Be,je,Ne,Se);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ws?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Fe,we,Ue,ft,Ht,Ne,Se,Le,At,mn,It.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Fe,we,Ue,ft,Ht,Ne,Se,Le,At,It.data):O.texSubImage3D(Fe,we,Ue,ft,Ht,Ne,Se,Le,At,mn,It):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Ue,ft,Ne,Se,At,mn,It.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Ue,ft,It.width,It.height,At,It.data):O.texSubImage2D(O.TEXTURE_2D,we,Ue,ft,Ne,Se,At,mn,It);be.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Es),be.pixelStorei(O.UNPACK_SKIP_ROWS,gn),be.pixelStorei(O.UNPACK_SKIP_IMAGES,ba),we===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Fe),be.unbindTexture()},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){G=0,V=0,ie=null,be.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var kr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},K1=new Bs(-1,1,1,-1,0,1),Ku=class extends pt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},J1=new Ku,Vr=class{constructor(e){this._mesh=new Qe(J1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gs=class extends ui{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vs.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ta=class extends ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pl=class extends ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Il=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gs(kr),this.copyPass.material.blending=Wi,this.timer=new Go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ta!==void 0&&(o instanceof ta?n=!0:o instanceof Pl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var na=class extends ui{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var v0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ws=class i extends ui{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:dn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new qt(r,o,{type:dn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new qt(r,o,{type:dn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=v0;this.highPassUniforms=Vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vs.clone(kr.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,premultipliedAlpha:!0,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new hs,this._fsQuad=new Vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ws.BlurDirectionX=new he(1,0);Ws.BlurDirectionY=new he(0,1);function y0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=_0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let m=_0(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function _0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new ze(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function xs(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1440662683);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function $1(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),o=i-n,a=e-s,c=t-r,l=o*o*(3-2*o),h=a*a*(3-2*a),d=c*c*(3-2*c),u=xs(n,s,r),f=xs(n+1,s,r),m=xs(n,s+1,r),_=xs(n+1,s+1,r),p=xs(n,s,r+1),g=xs(n+1,s,r+1),y=xs(n,s+1,r+1),E=xs(n+1,s+1,r+1),b=u+(f-u)*l,v=m+(_-m)*l,S=p+(g-p)*l,x=y+(E-y)*l,M=b+(v-b)*h,C=S+(x-S)*h;return(M+(C-M)*d)*2-1}function Ju(i,e,t,n=3){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*$1(i*o,e*o,t*o),o*=2.03,r*=.5;return s}var j1={colt75:{name:"Colt Single Action Army 7\xBD\u2033 Cavalry",mats:{frame:"case",barrel:"blued",straps:"blued",grip:"walnut",screws:"fireblue",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:1,hamMax:.82},colt475:{name:"Colt Single Action Army 4\xBE\u2033 Civilian, nickel",mats:{frame:"nickel",barrel:"nickel",straps:"nickel",grip:"ivory",screws:"nickel",cylinder:"nickel",hammer:"nickel",trigger:"nickel"},wear:.45,turn:1,hamMax:.82},schofield:{name:"Smith & Wesson Model 3 Schofield 7\u2033",mats:{frame:"blued",barrel:"blued",grip:"walnut",screws:"blued",ring:"steel",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:-1,hamMax:.78}};function $u(i,e,t,n){let s=new cs,r=new Lt({side:Yt,depthWrite:!1,uniforms:{cT:{value:new de(i)},cM:{value:new de(e)},cB:{value:new de(t)}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 cT, cM, cB; varying vec3 vD; void main(){ float y = normalize(vD).y; vec3 c = y > 0.0 ? mix(cM, cT, pow(y, 0.55)) : mix(cM, cB, pow(-y, 0.35)); gl_FragColor = vec4(c, 1.0); }"});s.add(new Qe(new Gi(10,64,32),r));for(let o of n){let a=o.box?new Zn(o.box[0],o.box[1]):new Gi(o.r,32,16),c=new Qe(a,new hs({color:new de(o.c[0],o.c[1],o.c[2]),side:Bt}));c.position.set(o.p[0],o.p[1],o.p[2]),o.box&&c.lookAt(0,0,0),o.s&&c.scale.set(o.s[0],o.s[1],o.s[2]),s.add(c)}return s}function E0(i,e=["studio","day","night"]){let t=new zr(i),n={studio:()=>t.fromScene($u("#29292d","#1a1a1d","#0f0f11",[{box:[7,3.5],p:[0,7.5,1.5],c:[4.6,4.6,4.7]},{box:[1.2,7],p:[-7,1,3],c:[5.5,5.4,5.2]},{box:[.8,7],p:[7,.5,-2],c:[3.2,3.4,3.8]},{box:[9,5],p:[-1,1,8.5],c:[1.25,1.25,1.25]},{box:[3,7],p:[6,1,5],c:[1.9,1.9,1.9]},{box:[8,1.5],p:[0,-6,4],c:[.4,.38,.35]}]),.02).texture,day:()=>t.fromScene($u("#3d6aae","#ead9ba","#8c6a46",[{p:[4.2,6.4,3.4],r:.42,c:[70,58,42]},{p:[0,-7,2],r:3.5,c:[.9,.72,.5],s:[1.6,.3,1.6]}]),.02).texture,night:()=>t.fromScene($u("#05070d","#0c0a09","#050403",[{p:[-3.4,-1,3.2],r:.5,c:[30,13.5,4]},{p:[1.8,-2.6,-6],r:1.5,c:[1.5,.5,.13]},{p:[2.5,6.5,-4],r:.22,c:[3.2,3.4,3.8]}]),.015).texture},s={};for(let r of e)s[r]=n[r]();return t.dispose(),s}var Q1=`
float h3(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vn(p); p = p*2.03 + 1.7; a *= 0.5; } return s; }
`,eM=`
vec3 P = vLP; float ao = vAtt.x, cv = vAtt.y;
// how fast the surface bends here, per pixel: big flat triangles stay clean even when a vertex sits on an edge
vec3 nn = normalize(vNormal);
float bend = length(abs(dFdx(nn)) + abs(dFdy(nn))) / max(length(abs(dFdx(vViewPosition)) + abs(dFdy(vViewPosition))), 1e-7);
float edge = smoothstep(0.35, 0.75, smoothstep(300.0, 900.0, bend) * smoothstep(0.52, 0.6, cv) + (vn(P*1500.0) - 0.5)*0.35) * uWear; // holster wear on sharp edges
float hollow = smoothstep(0.48, 0.4, cv) * smoothstep(150.0, 600.0, bend);    // grime in the corners
vec3 c; float rough;
#if KIND == 0 // blued steel
  c = vec3(0.1, 0.12, 0.17) * (0.9 + 0.2*vn(P*260.0));
  c = mix(c, vec3(0.56, 0.56, 0.57), edge);
  rough = mix(0.3, 0.22, edge);
#elif KIND == 1 // colour case hardening: swirls of straw, purple, blue and smoke over grey
  vec3 q = P*70.0;
  q += vec3(fbm(q*0.9), fbm(q*0.9 + 5.2), fbm(q*0.9 + 9.7))*4.0;
  float ca = fbm(q), cb = fbm(q*1.4 + 3.3), cd = fbm(q*0.8 + 11.0);
  c = vec3(0.3, 0.3, 0.32);
  c = mix(c, vec3(0.6, 0.42, 0.18), smoothstep(0.4, 0.68, ca)*0.8);
  c = mix(c, vec3(0.28, 0.12, 0.34), smoothstep(0.42, 0.7, cb)*0.9);
  c = mix(c, vec3(0.06, 0.14, 0.42), smoothstep(0.42, 0.68, cd)*0.9);
  c = mix(c, vec3(0.1, 0.11, 0.13), smoothstep(0.5, 0.75, ca - cb*0.4 + 0.25)*0.8);
  c = mix(c, vec3(0.66), edge*0.6);
  rough = 0.3;
#elif KIND == 2 // nickel plate, worn through to steel in places
  c = vec3(0.76, 0.73, 0.66) * (0.95 + 0.08*vn(P*300.0));
  float worn = smoothstep(0.55, 0.8, fbm(P*140.0)) * edge;
  c = mix(c, vec3(0.44, 0.42, 0.4), worn);
  c *= mix(1.0, 0.72, hollow);
  rough = mix(0.12, 0.3, worn) + 0.04*vn(P*500.0);
#elif KIND == 3 // oiled walnut: grain running down the grip, open pores, hands have polished the edges
  vec2 ax = normalize(vec2(0.4, -1.0));
  float along = dot(P.zy, ax), across = dot(P.zy, vec2(-ax.y, ax.x)) + P.x*0.3;
  float w = fbm(vec3(along*25.0, across*90.0, P.x*90.0));
  float ring = 0.5 + 0.5*sin(across*1800.0 + w*30.0);
  float fig = fbm(vec3(along*60.0, across*220.0, P.x*220.0));
  c = mix(vec3(0.2, 0.095, 0.042), vec3(0.1, 0.045, 0.02), smoothstep(0.35, 1.0, ring)*0.5 + smoothstep(0.4, 0.72, fig)*0.5);
  c *= 0.86 + 0.28*vn(vec3(along*150.0, across*3200.0, P.x*3200.0));
  c *= mix(1.0, 0.6, hollow) * mix(0.75, 1.0, ao);
  c = mix(c, c*1.35 + 0.02, edge*0.5);
  rough = mix(0.55, 0.38, edge);
#elif KIND == 4 // old ivory, yellowed where dirt sits
  float g = fbm(P*160.0);
  c = vec3(0.74, 0.66, 0.5) * (0.92 + 0.14*g);
  c *= 0.975 + 0.025*sin(dot(P.zy, vec2(0.95, 0.3))*1900.0 + g*10.0);
  c = mix(c, vec3(0.5, 0.37, 0.2), clamp(hollow*0.7 + (1.0 - ao)*0.6, 0.0, 0.85));
  rough = 0.33 + 0.08*g;
#elif KIND == 5 // fire-blued screws
  c = mix(vec3(0.1, 0.26, 0.66), vec3(0.6), edge*0.5);
  rough = 0.22;
#elif KIND == 6 // lead
  c = vec3(0.38, 0.38, 0.4) * (0.9 + 0.2*vn(P*900.0));
  rough = 0.55;
#elif KIND == 8 // brass cases, gone dull and brown with handling
  c = vec3(0.78, 0.56, 0.26) * (0.85 + 0.2*vn(P*600.0));
  c = mix(c, vec3(0.42, 0.28, 0.12), smoothstep(0.45, 0.75, fbm(P*300.0))*0.5);
  rough = 0.32 + 0.1*vn(P*900.0);
#else // bright steel
  c = vec3(0.58, 0.58, 0.6) * (0.95 + 0.1*vn(P*400.0));
  rough = 0.3;
#endif
diffuseColor.rgb = c;
`,tM=`
{ float occ = mix(1.0, vAtt.x, 0.92);
  reflectedLight.indirectDiffuse *= occ;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= occ;
  #endif
  float dNV = saturate(dot(geometryNormal, geometryViewDir));
  reflectedLight.indirectSpecular *= computeSpecularOcclusion(dNV, occ, material.roughness);
  float dOcc = mix(1.0, vAtt.x, 0.6);
  reflectedLight.directSpecular *= dOcc; reflectedLight.directDiffuse *= dOcc; }
`,nM={blued:0,case:1,nickel:2,walnut:3,ivory:4,fireblue:5,lead:6,steel:7,brass:8},ju=new Map;function iM(i,e){let t=i+e;if(ju.has(t))return ju.get(t);let n=i==="walnut"||i==="ivory",s=new Si({color:16777215,metalness:n?0:1,roughness:.3,clearcoat:{blued:.8,case:.6,walnut:.35,ivory:.5}[i]||0,clearcoatRoughness:i==="walnut"?.35:.12});return s.defines={KIND:nM[i]},s.onBeforeCompile=r=>{r.uniforms.uWear={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP; uniform float uWear;
${Q1}`).replace("#include <color_fragment>",`#include <color_fragment>
${eM}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = rough;`).replace("#include <aomap_fragment>",tM)},s.customProgramCacheKey=()=>"rv"+i,ju.set(t,s),s}function sM(i){let e=atob(i.data),t=new Uint8Array(e.length);for(let f=0;f<e.length;f++)t[f]=e.charCodeAt(f);let n=t.buffer,s=i.vc,r=i.ic,o=0,a;i.i32&&(a=new Uint32Array(n,o,r),o+=r*4);let c=new Int16Array(n,o,s*3);o+=s*6,i.i32||(a=new Uint16Array(n,o,r),o+=r*2);let l=new Int8Array(n,o,s*3);o+=s*3;let h=new Uint8Array(n,o,s*2),d=new Float32Array(s*3);for(let f=0;f<s*3;f++)d[f]=c[f]*i.ps;let u=new pt;return u.setAttribute("position",new ze(d,3)),u.setAttribute("normal",new ze(new Int8Array(l),3,!0)),u.setAttribute("aAtt",new ze(new Uint8Array(h),2,!0)),u.setIndex(new ze(i.i32?new Uint32Array(a):new Uint16Array(a),1)),u.computeBoundingSphere(),u}function rM(i,e){let t=i.index.array,n=i.attributes.position.array,s=[],r=[];for(let o=0;o<t.length;o+=3)(n[3*t[o]+1]<e&&n[3*t[o+1]+1]<e&&n[3*t[o+2]+1]<e?r:s).push(t[o],t[o+1],t[o+2]);return[s,r].map(o=>{let a=new pt;for(let c of["position","normal","aAtt"])a.setAttribute(c,i.attributes[c]);return a.setIndex(o),a.computeBoundingSphere(),a})}function oM(i){let e=i.attributes.position.count,t=new Uint8Array(e*2);for(let n=0;n<e;n++)t[2*n]=255,t[2*n+1]=128;return i.setAttribute("aAtt",new ze(t,2,!0)),i}var Qu=new Map;function aM(i){if(Qu.has(i))return Qu.get(i);let e=n=>{let s=new us(n.map(([r,o])=>new he(r,o*i)),24);return s.rotateX(-Math.PI/2),oM(s)},t={case:e([[1e-4,2e-4],[.0024,2e-4],[.0025,0],[.0064,0],[.0065,4e-4],[.0064,.0013],[.0058,.0016],[.0058,.031],[.0054,.031],[.0053,.0285],[.0053,.004],[1e-4,.004]]),bullet:e([[1e-4,.026],[.0057,.026],[.0057,.0315],[.0055,.0332],[.0049,.0348],[.0039,.0361],[.0025,.037],[.001,.0373],[0,.0374]]),caseLen:.031*i,tipLen:.0374*i};return Qu.set(i,t),t}function cM(i,e,t){let n=new Tt,s=_=>iM(_,t.wear),r=(_,p,g=n)=>{let y=new Qe(_,s(p));return g.add(y),y},o=new Tt,a=new Tt,c=new Tt,l=null,h=null;o.position.set(0,i.cylY,0),a.position.set(0,i.hammerPivot[1],i.hammerPivot[0]),c.position.set(0,i.triggerPivot[1],i.triggerPivot[0]),n.add(o,a,c);for(let _ of i.parts){let p=e[_];if(_==="cylinder")p.translate(0,-i.cylY,0),r(p,t.mats.cylinder,o);else if(_==="hammer")r(p,t.mats.hammer,a);else if(_==="trigger")r(p,t.mats.trigger,c);else if(_==="gate")l=new Tt,l.position.set(i.gatePivot[0],i.gatePivot[1],0),n.add(l),p.translate(-i.gatePivot[0],-i.gatePivot[1],0),r(p,t.mats.frame,l);else if(_==="ejector")h=new Tt,n.add(h),r(p,t.mats.barrel,h);else if(_==="screws"&&t.mats.ring){let[g,y]=rM(p,-.11);r(g,t.mats.screws),r(y,t.mats.ring)}else r(p,t.mats[_])}let d=aM(Math.min(1,(-i.chamberZ-.0031)/.0374)),u=[],f=[];for(let _=0;_<6;_++){let p=Math.PI/2+t.turn*_*Math.PI/3,g=new Tt;g.userData.home=new A(Math.cos(p)*i.chamberR,Math.sin(p)*i.chamberR,-1e-4),g.userData.out=new A(Math.cos(p),Math.sin(p),0),g.position.copy(g.userData.home),o.add(g),g.userData.case=r(d.case,"brass",g),f.push(r(d.bullet,"lead",g)),u.push(g)}let m={conf:t,meta:i,group:n,cylinder:o,hammer:a,trigger:c,gate:l,rod:h,carts:u,bullets:f,cart:d,drops:[],muzzle:new A(0,0,i.zMuz),grip:new A(0,-.08,.045),state:{top:0,chambers:[],cocked:!1,anim:null}};return ef(m,{},{instant:!0}),m}async function w0(i){let e=typeof i=="string"?await(await fetch(i)).json():i,t={};for(let n of e.meta.parts)t[n]=sM(e.parts[n]);return cM(e.meta,t,j1[e.id])}var lM=.11,Zi=i=>i*i*(3-2*i),qs=(i,e,t)=>Zi(Math.min(1,Math.max(0,(t-i)/(e-i))));function T0(i,e,t,n){i.hammer.rotation.x=i.conf.hamMax*e,i.trigger.rotation.x=-lM*t,i.cylinder.rotation.z=-i.conf.turn*n*Math.PI/3}function hM(i){i.carts.forEach((e,t)=>{let n=i.state.chambers[t];e.visible=n!=="empty",i.bullets[t].visible=n==="live",e.position.copy(e.userData.home),e.quaternion.identity()})}function ef(i,e={},t={}){let n=i.state;if(n.anim)return!1;if(!i.gate||t.instant){n.chambers=["empty","live","live","live","live","live"],n.top=0,n.cocked=!1;for(let u of i.drops)u.obj.removeFromParent();return i.drops.length=0,hM(i),T0(i,0,1,0),i.gate&&(i.gate.rotation.z=0),!0}let s=n.top,r=n.chambers.slice(),o=[0,1,2,3,4,5].map(u=>(s+5+u)%6),a=o.find(u=>r[u]==="empty")??o.find(u=>r[u]==="spent");if(a===void 0)return!1;let c=u=>r[u]==="spent"||u!==a&&r[u]==="empty";if(!o.some(c))return!1;let l=0;o.forEach((u,f)=>{c(u)&&(l=f)});let h=l;for(;(s+h+1)%6!==a;)h++;let d=[{k:"half"},{k:"open"}];for(let u=0;u<=h;u++){u>0&&d.push({k:"turn"});let f=(s+5+u)%6;u>5||(r[f]==="spent"&&(d.push({k:"eject",c:f}),r[f]="empty"),f!==a&&r[f]==="empty"&&(d.push({k:"insert",c:f}),r[f]="live"))}return d.push({k:"close"},{k:"cock"},{k:"lower"}),n.anim={type:"reload",steps:d,i:-1,t:0,ham0:n.cocked?1:0},n.cocked=!1,!0}var M0={half:.3,open:.3,turn:.22,eject:.6,insert:.5,close:.28,cock:.34,lower:.5},S0=new ct,b0=new yt,tf=new A,Ll=new A;function uM(i,e,t){let n=i.carts[e],s=n.clone();n.updateMatrix(),S0.multiplyMatrices(i.cylinder.matrix,n.matrix),S0.decompose(s.position,s.quaternion,s.scale),i.group.add(s);let r=tf.copy(n.userData.out).applyQuaternion(i.cylinder.quaternion);i.drops.push({obj:s,t:0,v:new A(r.x*.35,r.y*.35+.15,.45),w:new A(8+Math.random()*6,3-Math.random()*6,0)}),n.visible=!1,n.position.copy(n.userData.home),t.slide?.()}function fM(i,e,t){if(!i.drops.length)return;i.group.updateWorldMatrix(!0,!1),i.group.matrixWorld.decompose(tf,b0,Ll);let n=new A(0,-9.8/Ll.y,0).applyQuaternion(b0.invert());for(let s=i.drops.length-1;s>=0;s--){let r=i.drops[s];r.t+=e,r.v.addScaledVector(n,e),r.obj.position.addScaledVector(r.v,e),r.obj.rotation.x+=r.w.x*e,r.obj.rotation.y+=r.w.y*e,!r.rang&&r.t>.5&&(r.rang=1,t.drop?.()),r.t>1.4&&(r.obj.removeFromParent(),i.drops.splice(s,1))}}function dM(i,e,t,n){let s=i.state,r=e.steps[e.i];if(e.i<0||e.t>=M0[r.k]){if(r?.k==="eject"&&(i.rod.position.z=0),e.i++,e.t=0,r=e.steps[e.i],!r)return s.anim=null,[0,1,s.top,0];if((r.k==="turn"||r.k==="cock")&&(e.from=s.top,s.top=(s.top+1)%6),r.k==="insert"){s.chambers[r.c]="live";let u=i.carts[r.c];u.visible=!0,i.bullets[r.c].visible=!0,n.insert?.()}(r.k==="open"||r.k==="close"||r.k==="half")&&n.click?.(.3,r.k==="half"?2600:1700)}e.t+=t;let o=Math.min(1,e.t/M0[r.k]),a=Zi(o),c=.3,l=.5,h=1,d=s.top;switch(r.k){case"half":c=e.ham0+(.3-e.ham0)*a,l=(e.ham0?0:1)+((e.ham0?0:1)-.5)*-a,h=0;break;case"open":h=a;break;case"turn":d=e.from+qs(0,.8,o),!e.c&&o>.8&&(e.c=1,n.click?.(.18,4200));break;case"eject":{let u=o<.55?Zi(o/.55):1-Zi((o-.55)/.45);i.rod.position.z=u*i.meta.rodTravel;let f=i.carts[r.c],m=f.userData.home.z-(s.chambers[r.c]==="live"?i.cart.tipLen:i.cart.caseLen);f.visible&&(f.position.z=f.userData.home.z+Math.max(0,i.meta.rodTip+u*i.meta.rodTravel-m)),f.visible&&o>=.55&&(s.chambers[r.c]="empty",uM(i,r.c,n));break}case"insert":{let u=i.carts[r.c],f=u.userData.home,m=i.cart.tipLen,_=.35*(1-qs(.4,1,o)),p=new A(f.x,f.y,0);o<.4?p.addScaledVector(u.userData.out,.022*(1-Zi(o/.4))).z+=.004*(1-Zi(o/.4)):p.z=-m*Zi((o-.4)/.6)+0,Ll.set(-u.userData.out.y,u.userData.out.x,0),u.quaternion.setFromAxisAngle(Ll,_),u.position.copy(p).add(tf.set(0,0,m).applyQuaternion(u.quaternion)),o>=1&&(u.position.copy(f),u.quaternion.identity());break}case"close":h=1-a;break;case"cock":h=0,c=.3+.7*a,d=e.from+qs(.2,.85,o),l=.5*(1-qs(.7,1,o)),!e.c2&&o>=1&&(e.c2=1,n.click?.(.6,2900));break;case"lower":h=0,c=1-Zi(Math.max(0,(o-.15)/.85)),l=o<.15?1.45*(o/.15):1.45-.45*qs(.85,1,o);break}return i.gate&&(i.gate.rotation.z=-1.65*h),[c,l,d]}function nf(i,e={}){let t=i.state;return t.anim||t.cocked?!1:(t.anim={type:"cock",t:0,from:t.top},t.top=(t.top+1)%6,e.click?.(.25,2400),!0)}function A0(i,e={}){let t=i.state;return t.anim?!1:t.cocked?(t.anim={type:"fire",t:0},!0):nf(i,e)}function R0(i,e,t={}){let n=i.state,s=n.anim,r=n.cocked?1:0,o=n.cocked?0:1,a=n.top;if(fM(i,e,t),s&&s.type==="reload")[r,o,a]=dM(i,s,e,t);else if(s)if(s.t+=e,s.type==="cock"){let c=Math.min(1,s.t/.34);r=Zi(c),a=s.from+qs(.25,.85,c),o=1-qs(.75,1,c),!s.c1&&c>.5&&(s.c1=1,t.click?.(.35,3300)),c>=1&&(t.click?.(.6,2900),n.cocked=!0,n.anim=null)}else{let c=s.t;o=Math.min(1.45,c/.05*1.45),r=c<.05?1:Math.max(0,1-(c-.05)/.03),!s.shot&&c>=.08&&(s.shot=1,n.cocked=!1,n.chambers[n.top]==="live"?(n.chambers[n.top]="spent",i.bullets[n.top].visible=!1,t.shot?.()):t.dry?.()),c>.08&&(o=1+.45*Math.max(0,1-(c-.08)/.2)),c>.32&&(n.anim=null)}T0(i,r,o,a)}var sf="powderRef";var rf="rock";function C0(i,e=t=>t.destination){let t=null,n=null,s=null,r={},o=()=>{let v=i();return v?(v!==t&&(t=v,s=a(v),r={},n=v.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(e(v))),v.state==="suspended"&&v.resume&&v.resume(),v):null},a=v=>{let S=v.createBuffer(1,v.sampleRate*3,v.sampleRate),x=S.getChannelData(0);for(let M=0;M<x.length;M++)x[M]=Math.random()*2-1;return S},c=(v,S,x,M,C,R)=>{let I=v.createBufferSource();I.buffer=s;let N=v.createBiquadFilter();N.type="highpass",N.frequency.value=90;let z=v.createBiquadFilter();z.type="lowpass",z.frequency.setValueAtTime(C,S),z.frequency.exponentialRampToValueAtTime(1800,S+M*.6),z.frequency.exponentialRampToValueAtTime(R?650:1e3,S+M+(R||.9));let L=v.createBiquadFilter();L.type="bandpass",L.frequency.value=850,L.Q.value=.6;let H=v.createGain();H.gain.value=1.7;let G=v.createGain();G.gain.setValueAtTime(0,S),G.gain.linearRampToValueAtTime(x,S+.006),G.gain.linearRampToValueAtTime(x*.85,S+M),G.gain.exponentialRampToValueAtTime(x*.3,S+M+.08),R?G.gain.exponentialRampToValueAtTime(x*.003,S+M+R):(G.gain.exponentialRampToValueAtTime(x*.12,S+M+.45),G.gain.exponentialRampToValueAtTime(x*.01,S+M+.9)),N.connect(L).connect(H).connect(G);let V=v.createGain();V.gain.value=1;let ie=v.createBufferSource();ie.buffer=s;let Y=v.createBiquadFilter();Y.type="lowpass",Y.frequency.value=30;let ne=v.createGain();ne.gain.setValueAtTime(2.2,S),R&&ne.gain.linearRampToValueAtTime(.3,S+M+R*.6),ie.connect(Y).connect(ne).connect(V.gain),I.connect(N).connect(z).connect(G).connect(V).connect(n),I.start(S,Math.random()*.5),I.stop(S+M+1),ie.start(S,Math.random()),ie.stop(S+M+1)},l=(v,S,x,M,C,R,I,N)=>{let z=v.createBufferSource();z.buffer=s;let L=v.createBiquadFilter();L.type=M,L.frequency.value=x,L.Q.value=C;let H=v.createGain();H.gain.setValueAtTime(R,S),H.gain.exponentialRampToValueAtTime(5e-4,S+I),z.connect(L).connect(H).connect(N||n),z.start(S,Math.random()),z.stop(S+I+.02)},h=(v,S,x,M,C,R,I)=>{let N=v.createOscillator(),z=v.createGain();N.frequency.setValueAtTime(x,S),N.frequency.exponentialRampToValueAtTime(M,S+R*.8),z.gain.setValueAtTime(C,S),z.gain.exponentialRampToValueAtTime(.001,S+R),N.connect(z).connect(I||n),N.start(S),N.stop(S+R+.02)},d=(v,S,x,M,C)=>{let R=v.createOscillator(),I=v.createGain();R.frequency.value=x,I.gain.setValueAtTime(M,S),I.gain.exponentialRampToValueAtTime(5e-4,S+C),R.connect(I).connect(n),R.start(S),R.stop(S+C+.02)},u=(v,S)=>{let x=v.createWaveShaper(),M=1024,C=new Float32Array(M);for(let R=0;R<M;R++){let I=R*2/M-1;C[R]=Math.tanh(S*I)/Math.tanh(S)}return x.curve=C,x},f=(v,S)=>{if(r[S])return r[S];let x=S==="canyon",M=S==="dry",C=x?3.4:M?.9:1.6,R=Math.floor(v.sampleRate*C),I=v.createBuffer(2,R,v.sampleRate),N=x?[[.33,.55],[.81,.38],[1.27,.26],[1.93,.16],[2.6,.09]]:M?[]:[[.31,.3],[.72,.14]];for(let z=0;z<2;z++){let L=I.getChannelData(z);for(let H=0;H<R;H++){let G=H/v.sampleRate;L[H]=(Math.random()*2-1)*.05*Math.exp(-G/(x?.9:M?.22:.4))*Math.min(1,G/.05)}for(let[H,G]of N){let V=Math.floor((H+z*.013+Math.random()*.01)*v.sampleRate),ie=Math.floor(.07*v.sampleRate);for(let Y=0;Y<ie&&V+Y<R;Y++)L[V+Y]+=(Math.random()*2-1)*G*Math.exp(-Y/(ie*.3))}}return r[S]=I},m=(v,S,x,M)=>{let C=v.createConvolver();C.buffer=f(v,S);let R=v.createBiquadFilter();R.type="lowpass",R.frequency.value=x;let I=v.createGain();return I.gain.value=M,C.connect(R).connect(I).connect(n),C},_=(v,S,x,M="short")=>{let C=v.createGain();C.connect(n),C.connect(m(v,M,1600,.5)),l(v,S,2600,"bandpass",.8,.9*x,.1+.05*(x-1),C),l(v,S,5200,"highpass",.7,.55*x,.05,C),l(v,S,2800,"lowpass",.7,.35*x,.3,C)},p=(v,S,x)=>{let M=v.createGain();M.connect(n),M.connect(m(v,"dry",2200,.4)),l(v,S,1250,"bandpass",7,2.2*x,.22,M),l(v,S,2050,"bandpass",6,1.3*x,.15,M),l(v,S,3300,"bandpass",5,.7*x,.09,M)},g=(v,S,x)=>{for(let[M,C,R]of[[5200,.12,1],[8900,.07,.6],[12400,.05,.4]])d(v,S,M*(.98+Math.random()*.04),x*R,C);l(v,S,6e3,"highpass",.7,x*.8,.008)},y=(v,S,x)=>{l(v,S,650,"lowpass",.7,x,.035),l(v,S,2e3,"bandpass",2,x*.35,.01)},E={dirt(v,S){y(v,S,.22),y(v,S+.085,.09),l(v,S+.1,3e3,"bandpass",1,.025,.12)},rock(v,S){g(v,S,.06),g(v,S+.11,.03),g(v,S+.19,.012)},both(v,S){y(v,S,.18),g(v,S,.022),y(v,S+.09,.07),g(v,S+.09,.008)}},b={now(v,S){let x=v.createDelay(1);x.delayTime.value=.31;let M=v.createGain();M.gain.value=.32;let C=v.createBiquadFilter();C.type="lowpass",C.frequency.value=900;let R=v.createGain();R.gain.value=.5,x.connect(C).connect(M).connect(x),C.connect(R).connect(n);let I=v.createGain();I.connect(n),I.connect(x),l(v,S,2800,"lowpass",.7,1,.45,I),l(v,S,6e3,"highpass",.7,.5,.06,I),h(v,S,95,38,.9,.3,I)},powder(v,S,x="short"){let M=v.createGain(),C=u(v,2.5);M.connect(C).connect(n),C.connect(m(v,x,900,.9)),l(v,S,9e3,"highpass",.7,.7,.012,M),l(v,S,1800,"lowpass",.7,1,.25,M),l(v,S,350,"lowpass",.8,1,.7,M),h(v,S,80,30,1,.5,M)},canyon(v,S){let x=v.createGain();x.connect(n),x.connect(m(v,"canyon",1400,1.5)),l(v,S,6e3,"highpass",.7,.9,.02,x),l(v,S,3e3,"lowpass",.7,.9,.18,x),h(v,S,110,45,.7,.25,x)},powderCrack(v,S){b.powder(v,S,"dry"),_(v,S,1,"dry"),p(v,S,1)},powderTang(v,S){b.powder(v,S,"dry"),_(v,S,1,"dry"),p(v,S,1.8)},powderCrack2(v,S){b.powder(v,S),_(v,S,1.5)},ref(v,S){l(v,S,6e3,"bandpass",.9,2.6,.045),l(v,S,2500,"bandpass",.7,1,.08),l(v,S,600,"lowpass",.7,.7,.07),c(v,S,.45,.6,5e3),h(v,S,90,40,.22,.3)},powderRef(v,S){let x=v.createGain(),M=u(v,2.5);x.connect(M).connect(n),M.connect(m(v,"dry",900,.7)),l(v,S,1800,"lowpass",.7,.8,.25,x),l(v,S,350,"lowpass",.8,.4,.45,x),h(v,S,80,32,.35,.4,x),_(v,S,1.2,"dry"),p(v,S,1),c(v,S,.32,.45,5e3,.8)},ring(v,S){let x=v.createGain(),M=v.createBiquadFilter();M.type="lowpass",M.frequency.setValueAtTime(12e3,S),M.frequency.exponentialRampToValueAtTime(650,S+.12),x.connect(M).connect(n),M.connect(m(v,"short",600,.7)),l(v,S,9e3,"highpass",.7,.8,.012,x),l(v,S,2e3,"lowpass",.7,1,.3,x),h(v,S,85,32,1,.45,x);for(let[C,R]of[[5100,.05],[5163,.035]]){let I=v.createOscillator(),N=v.createGain();I.frequency.value=C,N.gain.setValueAtTime(0,S+.08),N.gain.linearRampToValueAtTime(R,S+.3),N.gain.exponentialRampToValueAtTime(5e-4,S+3.6),I.connect(N).connect(n),I.start(S+.08),I.stop(S+3.7)}}};return{click(v,S){let x=o();if(!x)return;let M=x.currentTime;l(x,M,S,"bandpass",6,v,.025),l(x,M+.004,S*.55,"bandpass",3,v*.5,.05)},bang(v=sf){let S=o();S&&b[v](S,S.currentTime)},slide(){let v=o();v&&l(v,v.currentTime,2500,"bandpass",2,.12,.12)},drop(v=rf){let S=o();S&&E[v](S,S.currentTime)},insert(){let v=o();v&&l(v,v.currentTime,1200,"bandpass",3,.25,.05)},async render(v,S=2.5){let x=[t,n,s,r],M=new OfflineAudioContext(1,Math.floor(48e3*S),48e3);t=M,s=a(M),r={},n=M.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(M.destination),b[v](M,.05);let C=await M.startRendering();return[t,n,s,r]=x,Array.from(C.getChannelData(0))}}}var Ct=120,ia={uPC:{value:new he}},sa=[],Dl=(i,e)=>i+Math.round((e-i)/Ct)*Ct,N0=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function P0(i,e){let t=(l,h)=>{let d=Math.imul(l,374761393)+Math.imul(h,668265263)|0;return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967295},n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return(t(n,s)*(1-a)+t(n+1,s)*a)*(1-c)+(t(n,s+1)*(1-a)+t(n+1,s+1)*a)*c}function Hn(i){let e=i>>>0||1;return()=>(e=Math.imul(e^e>>>15,2246822507)+2654435769>>>0,e^=e>>>13,(e>>>0)/4294967296)}var U0=`
float pHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float pNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(pHash(i), pHash(i+vec3(1,0,0)), f.x), mix(pHash(i+vec3(0,1,0)), pHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(pHash(i+vec3(0,0,1)), pHash(i+vec3(1,0,1)), f.x), mix(pHash(i+vec3(0,1,1)), pHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,Ul=`#ifdef USE_FOG
  float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
  #endif`;async function of(i){let e=await(await fetch(i)).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);let s=n.buffer,r=0,o=(l,h)=>{let d=new l(s,r,h);return r+=h*l.BYTES_PER_ELEMENT+3&-4,d},c={lods:e.lods.map(l=>{let h=o(Int16Array,l.vc*3),d=o(Int8Array,l.vc*3),u=o(Uint8Array,l.vc*4),f=o(Uint8Array,l.vc*4),m=o(Uint16Array,l.vc),_=l.big?o(Uint32Array,l.ic):o(Uint16Array,l.ic),p=new Float32Array(l.vc*3),g=new Float32Array(l.vc);for(let E=0;E<l.vc*3;E++)p[E]=h[E]*e.ps;for(let E=0;E<l.vc;E++)g[E]=m[E]/1e3;let y=new pt;return y.setAttribute("position",new ze(p,3)),y.setAttribute("normal",new ze(new Int8Array(d),3,!0)),y.setAttribute("aA",new ze(new Uint8Array(u),4,!0)),y.setAttribute("aB",new ze(new Uint8Array(f),4,!0)),y.setAttribute("aS",new ze(g,1)),y.setIndex(new ze(l.big?new Uint32Array(_):new Uint16Array(_),1)),y.computeBoundingSphere(),y}),meta:e};if(e.areoles){let l=e.areoles,h=o(Int16Array,l*3),d=o(Int8Array,l*4),u=o(Int8Array,l*4);c.areoles={n:l,ap:h,an:d,at:u,aps:e.aps}}return c}var pM={uSpineHaze:{value:1}};function mM(){let i=new fn({color:16777215,roughness:.6,metalness:0});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,pM),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB; attribute float aS;
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vS = aS; vObj = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj; uniform float uSpineHaze;
${U0}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
        float crest = vA.x, bark = vA.y, scar = vA.z, ao = vA.w, dark = vB.x, crown = vB.y, vary = vB.z;
        // living skin: dull grey-green; crests paler and greyer, grooves a deeper green
        vec3 col = mix(vec3(0.032, 0.056, 0.03), vec3(0.1, 0.12, 0.076), smoothstep(0.12, 0.95, crest));
        col *= mix(vec3(1.1, 1.03, 0.82), vec3(0.9, 1.0, 1.1), vary);
        col *= 0.9 + 0.12 * pNoise(vec3(vObj.x * 9.0, vS * 1.6, vObj.z * 9.0));          // fine streaks along the stem
        col *= 0.95 + 0.05 * sin(vS * 9.0 + vary * 6.0);                                  // faint growth bands
        // corky bark low on old trunks: grey-brown and cracked
        float crack = smoothstep(0.45, 0.8, abs(pNoise(vec3(vObj.x * 13.0, vS * 4.0, vObj.z * 13.0))));
        vec3 barkC = vec3(0.16, 0.135, 0.105) * (0.8 + 0.35 * pNoise(vObj * 4.0)) * (1.0 - 0.5 * crack);
        col = mix(col, barkC, smoothstep(0.1, 0.9, bark));
        col = mix(col, vec3(0.055, 0.04, 0.03) * (0.8 + 0.4 * pNoise(vObj * 20.0)), scar);  // old wounds
        col = mix(col, vec3(0.01, 0.008, 0.007), dark);                                    // woodpecker holes
        col = mix(col, vec3(0.19, 0.15, 0.1), crown * 0.75);                               // felted crown
        // spines seen edge-on hide the skin behind a grey haze: the bright outline of a cactus against the light
        vec3 V = normalize(vViewPosition);
        float graze = pow(1.0 - abs(dot(normal, V)), 2.0);
        col = mix(col, vec3(0.3, 0.28, 0.24), graze * (0.2 + 0.55 * smoothstep(0.55, 1.0, crest)) * (1.0 - bark) * (1.0 - dark) * uSpineHaze);
        diffuseColor.rgb *= col * (0.28 + 0.72 * ao);
        roughnessFactor = mix(0.55, 0.95, max(bark, scar));
      }`).replace("#include <fog_fragment>",Ul)},i.customProgramCacheKey=()=>"saguaro-skin-v1",i}var F0={uPx:{value:.002}};function gM(){let i=new fn({color:16777215,roughness:.55,metalness:0,side:Bt});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,F0),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aT; attribute vec3 iBase; attribute vec3 iDir; attribute float iW; attribute vec3 iN; attribute vec3 iCol;
uniform float uPx; varying vec3 vSp;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = iN;").replace("#include <begin_vertex>","vec3 transformed = iBase + iDir * aT.x; vSp = iCol * mix(1.0, 0.42, aT.x * aT.x);").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        { vec3 dv = normalize((modelViewMatrix * vec4(iDir, 0.0)).xyz);
          vec3 sv = cross(dv, normalize(mvPosition.xyz)); float sl = length(sv); sv = sl > 1e-4 ? sv / sl : vec3(1.0, 0.0, 0.0);
          float w = max(iW * (1.0 - 0.85 * aT.x), -mvPosition.z * uPx * 0.45); // never much thinner than a pixel
          mvPosition.xyz += sv * w * aT.y; }
        gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vSp;`).replace("#include <fog_fragment>",Ul)},i.customProgramCacheKey=()=>"spine-v1",i}function xM(i,e,t){let n=i.areoles,s=4,r=n.n*s,o=new Float32Array(r*3),a=new Float32Array(r*3),c=new Float32Array(r),l=new Float32Array(r*3),h=new Float32Array(r*3),d=Hn(e),u=new A,f=new A,m=new A,_=new A,p=new A,g=new A,y=0,E=(v,S,x)=>{o.set([u.x+f.x*.002,u.y+f.y*.002,u.z+f.z*.002],y*3),a.set([g.x*v,g.y*v,g.z*v],y*3),c[y]=S,l.set([f.x,f.y,f.z],y*3),h.set(x,y*3),y++};for(let v=0;v<n.n;v++){u.set(n.ap[3*v],n.ap[3*v+1],n.ap[3*v+2]).multiplyScalar(n.aps),f.set(n.an[4*v],n.an[4*v+1],n.an[4*v+2]).normalize(),m.set(n.at[4*v],n.at[4*v+1],n.at[4*v+2]).normalize();let S=n.an[4*v+3]>60;_.copy(m).addScaledVector(f,-m.dot(f)).normalize(),p.crossVectors(f,_);let x=.75+.45*d(),M=Math.min(1,u.y/(t*.9)),C=S?[.3*x,.15*x,.075*x]:[(.36+.06*M)*x,(.335+.04*M)*x,(.29+.02*M)*x];g.copy(f).multiplyScalar(.92).addScaledVector(_,-.38).add({x:(d()-.5)*.25,y:(d()-.5)*.25,z:(d()-.5)*.25}).normalize(),E(S?.018+.012*d():.026+.02*d(),.0011,C);for(let R of[-2,2,Math.PI]){let I=R+(d()-.5)*.6;g.copy(f).multiplyScalar(.35).addScaledVector(_,Math.cos(I)*.94).addScaledVector(p,Math.sin(I)*.94).normalize(),E(.011+.011*d(),6e-4,[C[0]*.92,C[1]*.92,C[2]*.92])}}let b=new Vo;return b.setAttribute("position",new ze(new Float32Array(12),3)),b.setAttribute("aT",new ze(new Float32Array([0,-1,0,1,1,-1,1,1]),2)),b.setIndex([0,2,1,1,2,3]),b.setAttribute("iBase",new Xn(o,3)),b.setAttribute("iDir",new Xn(a,3)),b.setAttribute("iW",new Xn(c,1)),b.setAttribute("iN",new Xn(l,3)),b.setAttribute("iCol",new Xn(h,3)),b.instanceCount=r,b.boundingSphere=new Ln(new A(0,t/2,0),t/2+1.6),b}var Fl={uTime:{value:0},uGust:{value:0},uWind:{value:new he(.94,.33)}};function Xs(i,e=.85,t=null,n=!!t){let s=new fn({color:16777215,vertexColors:!0,roughness:e,metalness:0,map:t,alphaTest:t?.4:0,side:n?Bt:Ei});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,Fl),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSway; uniform float uTime, uGust; uniform vec2 uWind;`).replace("#include <project_vertex>",`vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        { float ph = aSway.y + dot(instanceMatrix[3].xz, vec2(0.13, 0.17));
          float wob = sin(uTime * 1.6 + ph) * 0.65 + sin(uTime * 2.9 + ph * 1.7) * 0.35;
          float sc = length(instanceMatrix[1].xyz);
          mvPosition.xz += uWind * (aSway.x * sc) * (0.05 + 0.32 * uGust + wob * (0.035 + 0.1 * uGust)); }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`),r.fragmentShader=r.fragmentShader.replace("#include <fog_fragment>",Ul),n&&(r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`))},s.customProgramCacheKey=()=>i,s}function I0(i){return new Fs({depthPacking:Ml,map:i,alphaTest:.4})}function L0(i,e=5){let n=Hn(e),s=()=>{let E=document.createElement("canvas");return E.width=E.height=256,[E,E.getContext("2d")]},[r,o]=s(),[a,c]=s(),l=i==="creosote"?"#363c22":"#4a4d40";o.fillStyle=l,o.fillRect(0,0,256,256),c.fillStyle="#000",c.fillRect(0,0,256,256),c.fillStyle="#fff",c.fillRect(0,0,6,6);let h=E=>{E(o,!1),E(c,!0)},d=(E,b,v,S,x)=>{let M=[[E,b]],C=E,R=b,I=v;for(let N=0;N<S;N+=12)I+=(n()-.5)*.7,C+=Math.cos(I)*12,R+=Math.sin(I)*12,M.push([C,R]);return h((N,z)=>{N.strokeStyle=z?"#fff":i==="creosote"?"#2a2620":"#8c8270",N.lineWidth=x,N.beginPath(),N.moveTo(M[0][0],M[0][1]);for(let L of M)N.lineTo(L[0],L[1]);N.stroke()}),M},u=(E,b,v,S,x,M)=>h((C,R)=>{C.fillStyle=R?"#fff":M,C.beginPath(),C.ellipse(E,b,v,S,x,0,Math.PI*2),C.fill()}),f=(E,b,v,S,x)=>h((M,C)=>{M.fillStyle=C?"#fff":x,M.beginPath();for(let R=0;R<3;R++){let I=S+R*Math.PI*2/3;M.lineTo(E+Math.cos(I)*v*(R===0?1.3:.8),b+Math.sin(I)*v*(R===0?1.3:.8))}M.fill()}),m=(E,b,v)=>`rgb(${E|0},${b|0},${v|0})`;if(i==="creosote")for(let E=0;E<7;E++){let b=d(256*(.3+.4*n()),250.88,-Math.PI/2+(n()-.5)*1.3,150+n()*90,2.2);b.forEach(([v,S],x)=>{if(x<2)return;let M=x>b.length*.5?3:1;for(let C=0;C<M;C++){let R=n()*Math.PI*2,I=.8+.4*n(),N=.8+.4*n(),z=n()<.12?m(90*N,88*N,50*N):m(52*N,58*N,33*N);u(v+Math.cos(R)*6,S+Math.sin(R)*6,7*I,3.2*I,R,z),u(v+Math.cos(R+.7)*6,S+Math.sin(R+.7)*6,7*I,3.2*I,R+.7,z)}})}else{for(let E=0;E<9;E++)d(256*(.2+.6*n()),256*.98,-Math.PI/2+(n()-.5)*1.6,120+n()*100,1.6);for(let E=0;E<760;E++){let b=Math.sqrt(n())*.5,v=n()*Math.PI*2,S=256*(.5+Math.cos(v)*b),x=256*(.52+Math.sin(v)*b*.92),M=.8+.4*n(),C=n(),R=C<.55?m(66*M,74*M,56*M):C<.9?m(98*M,94*M,74*M):m(126*M,112*M,84*M);f(S,x,5+n()*3,n()*6.28,R)}}let _=o.getImageData(0,0,256,256).data,p=c.getImageData(0,0,256,256).data,g=new Uint8Array(256*256*4);for(let E=0;E<256*256;E++)g[4*E]=_[4*E],g[4*E+1]=_[4*E+1],g[4*E+2]=_[4*E+2],g[4*E+3]=p[4*E];let y=new Ns(g,256,256,zn);return y.colorSpace=En,y.generateMipmaps=!0,y.minFilter=li,y.magFilter=un,y.flipY=!1,y.needsUpdate=!0,y}var Ai=class{constructor(){this.p=[],this.n=[],this.c=[],this.w=[],this.u=[],this.i=[]}get count(){return this.p.length/3}vert(e,t,n,s,r,o,a,c,l,h=.004,d=.004){return this.p.push(e,t,n),this.n.push(s,r,o),this.c.push(a[0],a[1],a[2]),this.w.push(c,l),this.u.push(h,d),this.count-1}card(e,t,n,s,r,o,a,c){let l=s/2,h=this.count;for(let[d,u]of[[0,0],[1,0],[1,1],[0,1]]){let f=(d-.5)*2*l,m=(u-.5)*2*l;this.vert(e.x+t.x*f+n.x*m,e.y+t.y*f+n.y*m,e.z+t.z*f+n.z*m,r.x,r.y,r.z,o,a,c,.03+.94*d,.03+.94*(1-u))}this.i.push(h,h+1,h+2,h,h+2,h+3)}tube(e,t,n,s,r,o){let a=e.length,c=new A,l=new A,h=new A,d=this.count;for(let u=0;u<a;u++){u<a-1?c.subVectors(e[u+1],e[u]).normalize():c.subVectors(e[u],e[u-1]).normalize(),u===0&&(l.set(.3,.1,1),Math.abs(c.dot(l.normalize()))>.9&&l.set(1,0,0)),l.addScaledVector(c,-l.dot(c)).normalize(),h.crossVectors(c,l);let f=u/(a-1),m=s(f),_=r(f),p=t[u];for(let g=0;g<n;g++){let y=g/n*Math.PI*2,E=Math.cos(y),b=Math.sin(y),v=l.x*E+h.x*b,S=l.y*E+h.y*b,x=l.z*E+h.z*b;this.vert(e[u].x+v*p,e[u].y+S*p,e[u].z+x*p,v,S,x,m,_,o)}}for(let u=0;u<a-1;u++)for(let f=0;f<n;f++){let m=d+u*n+f,_=d+u*n+(f+1)%n,p=m+n,g=_+n;this.i.push(m,_,p,_,g,p)}}spike(e,t,n,s,r,o,a,c,l){let h=new A(0,1,0);Math.abs(h.dot(t))>.9&&h.set(1,0,0),h.addScaledVector(t,-h.dot(t)).normalize();let d=new A().crossVectors(t,h),u=this.count;for(let m=0;m<3;m++){let _=m/3*Math.PI*2,p=Math.cos(_),g=Math.sin(_);this.vert(e.x+(h.x*p+d.x*g)*s,e.y+(h.y*p+d.y*g)*s,e.z+(h.z*p+d.z*g)*s,r.x,r.y,r.z,o,c,l)}let f=this.vert(e.x+t.x*n,e.y+t.y*n,e.z+t.z*n,r.x,r.y,r.z,a,c,l);this.i.push(u,u+1,f,u+1,u+2,f,u+2,u,f)}leaf(e,t,n,s,r,o,a,c,l){let h=e.clone().addScaledVector(t,s),d=e.clone().addScaledVector(t,s*.45).addScaledVector(n,r*.5),u=e.clone().addScaledVector(t,s*.45).addScaledVector(n,-r*.5),f=this.vert(e.x,e.y,e.z,o.x,o.y,o.z,a,c,l),m=this.vert(d.x,d.y,d.z,o.x,o.y,o.z,a,c,l),_=this.vert(h.x,h.y,h.z,o.x,o.y,o.z,a,c,l),p=this.vert(u.x,u.y,u.z,o.x,o.y,o.z,a,c,l);this.i.push(f,m,_,f,_,p,f,_,m,f,p,_)}toGeometry(){let e=new pt;return e.setAttribute("position",new it(this.p,3)),e.setAttribute("normal",new it(this.n,3)),e.setAttribute("color",new it(this.c,3)),e.setAttribute("aSway",new it(this.w,2)),e.setAttribute("uv",new it(this.u,2)),e.setIndex(this.count>65535?new Ds(this.i,1):new Ls(this.i,1)),e.computeBoundingSphere(),e}withCards(e){let t=this.count,n=this.i.length;this.p.push(...e.p),this.n.push(...e.n),this.c.push(...e.c),this.w.push(...e.w),this.u.push(...e.u);for(let r of e.i)this.i.push(r+t);let s=this.toGeometry();return s.addGroup(0,n,0),s.addGroup(n,e.i.length,1),s}},We=(i,e,t)=>new A(i,e,t),Ys=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function vM(i){let e=Hn(i),t=[],n=22+Math.floor(e()*22),s=.12+e()*.08,r=e()<.4;for(let o=0;o<n;o++){let a=Math.sqrt(e())*s*.85,c=e()*Math.PI*2,l=a/s,h=We(Math.cos(c)*a,.03,Math.sin(c)*a),d=.06+l*.42+e()*.12,u=c+(e()-.5)*.5,f=2.2+e()*2.6*(1-.35*l),m=[],_=e()<.06,p=We(Math.sin(d)*Math.cos(u),Math.cos(d),Math.sin(d)*Math.sin(u)),g=h.clone(),y=16,E=(.04+l*.12)*(e()<.5?1:.6),b=e()*6;for(let S=0;S<=y;S++){m.push(g.clone());let x=S/y,M=f/y;p.x+=Math.cos(u)*E*M*(.5+x)+Math.sin(b+x*7)*.012,p.z+=Math.sin(u)*E*M*(.5+x)+Math.cos(b+x*5)*.012,p.normalize(),g.addScaledVector(p,M)}let v=.016+e()*.008;t.push({pts:m,r0:v,L:f,dead:_,ph:e()*6.28,leafy:r&&!_&&e()<.8})}return{canes:t,rc:s,leafy:r}}function _M(i,e){let t=vM(i),n=Hn(i*31+7),s=new Ai,r=[6,4,3][e],o=[1,2,4][e],a=[We(0,-.05,0),We(0,.05,0),We(0,.1,0)];s.tube(a,[t.rc*1.05,t.rc,t.rc*.6],[10,6,4][e],()=>[.1,.085,.065],()=>0,0);for(let c of t.canes){let l=c.pts.filter((p,g)=>g%o===0||g===c.pts.length-1),h=l.map((p,g)=>c.r0*Math.pow(1-.8*(g/(l.length-1)),.9)),d=c.dead?[.15,.14,.125]:[.085,.078,.063],u=c.dead?[.18,.17,.155]:[.09,.095,.07];if(s.tube(l,h,r,p=>Ys(d,u,p),p=>Math.pow(p,1.6)*c.L*.22,c.ph),e>1)continue;let f=c.pts,m=c.L/(f.length-1),_=e===0?.045:.12;for(let p=.15,g=n()*6.28;p<c.L*.97;p+=_*(.8+.4*n()),g+=2.4){let y=Math.min(f.length-2,Math.floor(p/m)),E=p/m-y,b=f[y+1].clone().sub(f[y]).normalize(),v=f[y].clone().lerp(f[y+1],E),S=We(0,1,0);Math.abs(S.dot(b))>.9&&S.set(1,0,0),S.addScaledVector(b,-S.dot(b)).normalize();let x=We(0,0,0).crossVectors(b,S),M=S.clone().multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g)),C=c.r0*Math.pow(1-.8*(p/c.L),.9),R=p/c.L,I=Math.pow(R,1.6)*c.L*.22,N=v.clone().addScaledVector(M,C*.8);if(e===0){let z=M.clone().multiplyScalar(.75).addScaledVector(b,.55).normalize();s.spike(N,z,.012+n()*.01,.0022,M,c.dead?[.2,.19,.17]:[.2,.18,.15],[.06,.055,.05],I,c.ph)}if(c.leafy&&R>.45&&n()<.7){let z=e===0?2+Math.floor(n()*3):1;for(let L=0;L<z;L++){let H=M.clone().multiplyScalar(.8).addScaledVector(b,.4+n()*.4).add(We(n()-.5,n()-.5,n()-.5).multiplyScalar(.7)).normalize(),G=We(0,0,0).crossVectors(H,M).normalize(),V=n(),ie=V<.25?[.1,.13,.035]:V<.75?[.26,.21,.05]:[.2,.12,.05];s.leaf(N,H,G,(e===0?.022:.04)+n()*.01,e===0?.011:.022,M,ie,I,c.ph)}}}}return s.toGeometry()}function yM(i){let e=Hn(i),t=[],n=1+e()*1.1,s=9+Math.floor(e()*8),r=.1+e()*.1,o=(a,c,l,h,d,u)=>{let f=[a.clone()],m=c.clone(),_=a.clone(),p=0;for(;p<l;){let g=.08+e()*.07;if(m.x+=(e()-.5)*.4,m.z+=(e()-.5)*.4,m.y+=(e()-.5)*.2+.06,m.normalize(),_.addScaledVector(m,g),p+=g,f.push(_.clone()),d<2&&p>l*.25&&p<l*.85&&e()<.32){let y=We(e()-.5,.25+e()*.3,e()-.5).normalize().lerp(m,.45).normalize();o(_.clone(),y,(l-p)*(.5+e()*.4),h*.55,d+1,u+e())}}t.push({pts:f,r0:h,len:l,depth:d,ph:u})};for(let a=0;a<s;a++){let c=a/s*Math.PI*2+e()*.5,l=Math.sqrt(e())*r,h=.14+e()*.36,d=We(Math.cos(c)*l,0,Math.sin(c)*l),u=We(Math.sin(h)*Math.cos(c),Math.cos(h),Math.sin(h)*Math.sin(c));o(d,u,n*(.75+e()*.45)/Math.cos(h*.6),.011+e()*.004,0,e()*6.28)}return{branches:t,H:n}}function MM(i,e){let t=yM(i),n=Hn(i*17+3),s=new Ai,r=new Ai,o=We(0,t.H*.45,0),a=[.13,.24,.42][e],c=[.045,.11,.24][e];for(let l of t.branches){if(e===2&&l.depth>1)continue;let h=e===0?1:2,d=l.pts.filter((_,p)=>p%h===0||p===l.pts.length-1);if(d.length<2)continue;let u=d.map((_,p)=>Math.max(.0022,l.r0*(1-.75*(p/(d.length-1)))));s.tube(d,u,e===0?4:3,_=>Ys([.05,.044,.037],[.085,.076,.064],_),_=>Math.pow(_,1.5)*.35,l.ph);let f=l.pts,m=c;for(let _=1;_<f.length;_++){let p=_/(f.length-1);if(m+=f[_].distanceTo(f[_-1]),p<.35||m<c)continue;m=0;let g=f[_].clone().add(We(n()-.5,n()-.3,n()-.5).multiplyScalar(a*.3)),y=g.clone().sub(o).normalize();y.y+=.9,y.normalize();let E=We(n()-.5,n()-.5,n()-.5).normalize().lerp(y,.4).normalize(),b=We(0,1,0).cross(E);b.lengthSq()<.001&&b.set(1,0,0),b.normalize();let v=We(0,0,0).crossVectors(E,b).normalize(),S=.85+n()*.3;r.card(g,b,v,a*(.8+n()*.45),y,[S,S,S*(.9+n()*.2)],Math.pow(p,1.5)*.35,l.ph)}}return s.withCards(r)}function SM(i,e){let t=Hn(i),n=new Ai,s=new Ai,r=.35+t()*.4,o=r*(1.3+t()*.5),a=We(0,r*.2,0),c=[14,7,0][e],l=[90,28,12][e],h=[.15,.27,.42][e];for(let d=0;d<c;d++){let u=t()*Math.PI*2,f=.35+t()*.9,m=t()*6.28,_=We(Math.cos(u)*Math.cos(f)*o/r*.5,Math.sin(f),Math.sin(u)*Math.cos(f)*o/r*.5).normalize(),p=[We(Math.cos(u)*.03,0,Math.sin(u)*.03)],g=p[0].clone();for(let y=0;y<4;y++)g.addScaledVector(_,.85*r/4),g.x+=(t()-.5)*.03,g.z+=(t()-.5)*.03,p.push(g.clone());n.tube(p,p.map((y,E)=>.006*(1-.6*E/4)),3,()=>[.12,.11,.09],y=>y*y*.12,m)}for(let d=0;d<l;d++){let u=t()*Math.PI*2,f=Math.asin(Math.pow(t(),.7)),m=.75+.25*t(),_=We(Math.cos(u)*Math.cos(f)*o*.5*m,Math.sin(f)*r*m,Math.sin(u)*Math.cos(f)*o*.5*m),p=_.clone().sub(a).normalize(),g=We(t()-.5,t()-.5,t()-.5).normalize().lerp(p,.78).normalize(),y=We(0,1,0).cross(g);y.lengthSq()<.001&&y.set(1,0,0),y.normalize();let E=We(0,0,0).crossVectors(g,y).normalize(),b=.85+t()*.3;p.y+=.9,p.normalize(),s.card(_,y,E,h*(.8+t()*.4),p,[b,b,b],Math.pow(Math.max(0,_.y/r),2)*.12,t()*6.28)}return n.withCards(s)}function bM(i,e){let t=Hn(i),n=new Ai,s=i%3,r=[34,14,7][e],o=[4,3,2][e],a=[6,3,1][e],c=[.34,.3,.42][s]*(.75+t()*.5),l=[[.44,.38,.29],[.39,.37,.32],[.48,.41,.26]][s],h=[[.36,.28,.21],[.3,.28,.22],[.4,.33,.2]][s],d=(u,f,m,_,p)=>{let g=n.count;for(let y=0;y<u.length;y++){let E=(y<u.length-1?u[y+1].clone().sub(u[y]):u[y].clone().sub(u[y-1])).normalize(),b=We(-E.z,0,E.x);b.lengthSq()<1e-4&&b.set(1,0,0),b.normalize();let v=We(0,1,0).addScaledVector(E,-.3).normalize(),S=f[y];n.vert(u[y].x-b.x*S,u[y].y,u[y].z-b.z*S,v.x,v.y,v.z,m[y],_[y],p),n.vert(u[y].x+b.x*S,u[y].y,u[y].z+b.z*S,v.x,v.y,v.z,m[y],_[y],p)}for(let y=0;y<u.length-1;y++){let E=g+2*y;n.i.push(E,E+1,E+3,E,E+3,E+2)}};for(let u=0;u<r;u++){let f=t()*Math.PI*2,m=t()*.035,_=.12+t()*.75,p=c*(.45+t()*.6),g=t()*6.28,y=.75+t()*.4,E=t()<.25,b=We(Math.cos(f)*m,0,Math.sin(f)*m),v=We(Math.sin(_)*Math.cos(f),Math.cos(_),Math.sin(_)*Math.sin(f)),S=[b.clone()],x=[.005],M=[[.09,.075,.055]],C=[0];for(let R=1;R<=o;R++){let I=R/o;v.x+=Math.cos(f)*.22*I,v.z+=Math.sin(f)*.22*I,v.y-=.18*I*(_+.3),v.normalize(),b=b.clone().addScaledVector(v,p/o),S.push(b),x.push(.005*(1-.8*I)),C.push(I*I*p*.6);let N=Ys(h,l,I).map(z=>z*y);M.push(E?Ys(N,[.33,.31,.28],.6):N)}d(S,x,M,C,g)}for(let u=0;u<a;u++){let f=t()*Math.PI*2,m=.05+t()*.35,_=c*(1.15+t()*.6),p=t()*6.28,g=We(Math.sin(m)*Math.cos(f),Math.cos(m),Math.sin(m)*Math.sin(f)),y=[],E=[],b=[],v=[];for(let x=0;x<=4;x++){let M=x/4;y.push(g.clone().multiplyScalar(_*M).add(We(Math.cos(f)*.08*M*M,0,Math.sin(f)*.08*M*M))),E.push(.0012),b.push(Ys(h,l,M)),v.push(M*M*_*.8)}d(y,E,b,v,p);let S=y[4];for(let x=0;x<(s===2?4:7);x++){let M=t()*Math.PI*2,C=We(Math.cos(M),s===2?-.2:.4+t()*.6,Math.sin(M)).normalize(),R=S.clone().addScaledVector(g,-t()*.06),I=s===2?.012:.03+t()*.03;d([R,R.clone().addScaledVector(C,I)],[s===2?.003:8e-4,3e-4],[l,s===0?[.42,.3,.3]:l],[_*.8,_*.85],p)}}return n.toGeometry()}function B0(i){let e=Xs("grass-v1",.9,null,!0),t=(n,s,r)=>r()<Math.min(1,Math.max(.05,(P0(n*.09+3.1,s*.09-7.7)-.25)*2.2+.25*P0(n*.5,s*.5)));return new Ki({kinds:[1,2,3,4,5,6].map(n=>({lods:[0,1,2].map(s=>bM(n,s)),count:1200,r:.15,H:.5,scale:[.7,1.3]})),material:e,lodDist:[8,20],maxDist:40,clear:i,seed:59,minGap:.05,claim:!1,accept:t,lazy:!0})}function O0(i){let e=Hn(i),t=new Ai,n=.3,s=We(0,0,0),r=(a,c,l,h,d)=>{let u=[a.clone()],f=c.clone(),m=a.clone(),_=0;for(;_<l;){let g=.025+e()*.02;f.x+=(e()-.5)*.5,f.y+=(e()-.5)*.5,f.z+=(e()-.5)*.5,f.normalize();let y=m.clone().addScaledVector(f,g),E=y.clone().sub(s);E.length()>n*(.85+.2*e())&&(E.normalize(),f.addScaledVector(E,-1.3*f.dot(E)).normalize()),m.addScaledVector(f,g),_+=g,u.push(m.clone()),d<3&&e()<.2&&r(m.clone(),We(e()-.5,e()-.5,e()-.5).normalize().lerp(f,.3).normalize(),(l-_)*(.6+e()*.5)+.05,h*.7,d+1)}let p=.85+e()*.3;t.tube(u,u.map((g,y)=>Math.max(7e-4,h*(1-.7*y/u.length))),3,g=>Ys([.27,.22,.15],[.36,.3,.2],g).map(y=>y*p),()=>0,0)},o=We(0,-n*.92,0);t.tube([o.clone().add(We(0,-.03,0)),o],[.006,.006],4,()=>[.2,.16,.11],()=>0,0);for(let a=0;a<9;a++){let c=a/9*Math.PI*2+e()*.4;r(o,We(Math.cos(c)*.8,.6,Math.sin(c)*.8).normalize(),.7+e()*.5,.004,0)}return t.toGeometry()}var D0=[],Ki=class{constructor({kinds:e,material:t,lodDist:n,clear:s,seed:r,minGap:o=.5,shadowLods:a=1,nearR:c=0,depthMat:l=null,maxDist:h=1e9,claim:d=!0,cull:u=!0,accept:f=null,lazy:m=!1}){this.lazy=m,this._last=[1e9,1e9,1e9],this.group=new Tt,this.depthMat=l,this.maxDist=h,this.cull=u,this.kinds=e,this.lodDist=n,this.nearR=c,this.shadowLods=a;let _=Hn(r);this.items=[],e.forEach((p,g)=>{for(let y=0;y<p.count;y++){let E,b,v=0,S;do E=(_()-.5)*Ct,b=(_()-.5)*Ct,v++,S=!s(E,b)&&(!f||f(E,b,_))&&!D0.some(R=>(d||R.solid)&&Math.hypot(Dl(R.x,E)-E,Dl(R.z,b)-b)<R.r+p.r+o);while(!S&&v<400);let x=p.scale[0]+_()*(p.scale[1]-p.scale[0]),M=.9+_()*.2,C={v:g,x:E,z:b,rot:_()*Math.PI*2,s:x,tint:new de(M,M*(.97+_()*.06),M*(.95+_()*.1)),H:p.H*x,r:p.r*x};this.items.push(C),d&&D0.push(C)}}),this.meshes=e.map((p,g)=>p.lods.map((y,E)=>{let b=new Co(y,t,p.count);b.frustumCulled=!1,b.count=0;for(let v=0;v<p.count;v++)b.setColorAt(v,new de(1,1,1));return this.group.add(b),b})),this._M=new ct,this._Q=new yt,this._S=new A,this._P=new A,this._Y=new A(0,1,0),this._sph=new Ln,this._fr=new Mi,this._pv=new ct}setShadows(e){this.meshes.forEach(t=>t.forEach((n,s)=>{n.castShadow=e&&s<this.shadowLods,n.receiveShadow=e&&!this.depthMat,this.depthMat&&(n.customDepthMaterial=this.depthMat)}))}update(e,t,n){if(this.lazy){let o=n.matrixWorld.elements,a=Math.atan2(o[8],o[10]),c=this._last;if(Math.hypot(e-c[0],t-c[1])<.3&&Math.abs(Math.atan2(Math.sin(a-c[2]),Math.cos(a-c[2])))<.06)return[];c[0]=e,c[1]=t,c[2]=a}for(let o of this.meshes)for(let a of o)a.count=0;this._pv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._pv);let s=[],r=this.lodDist;for(let o of this.items){let a=Dl(o.x,e),c=Dl(o.z,t),l=a-e,h=c-t,d=Math.hypot(l,h),u=1-N0(Ct*.36,Ct*.48,Math.max(Math.abs(l),Math.abs(h)));if(u<.002||d>this.maxDist||this.cull&&d>20&&(this._sph.center.set(a,o.H*.5,c),this._sph.radius=o.H*.5+o.r+1,!this._fr.intersectsSphere(this._sph)))continue;let f=0;for(;f<r.length&&d>=r[f];)f++;let m=this.meshes[o.v];f=Math.min(f,m.length-1);let _=m[f];this._M.compose(this._P.set(a,0,c),this._Q.setFromAxisAngle(this._Y,o.rot),this._S.setScalar(o.s*u)),_.setMatrixAt(_.count,this._M),_.setColorAt(_.count,o.tint),_.count++,d<this.nearR&&s.push({it:o,d,M:this._M.clone()})}for(let o of this.meshes)for(let a of o)a.visible=a.count>0,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);return s}},Bl=["classic","old","spear","onearm","droop"],EM=[12,5,15,10,6],Nl=class extends Ki{constructor(e,t,n=7){let s=mM();super({kinds:e.map((r,o)=>({lods:r.lods,count:EM[o],r:r.meta.R0+.6,H:r.meta.H,scale:[.86,1.14]})),material:s,lodDist:[13,36],clear:t,seed:n,minGap:3.5,shadowLods:2,nearR:8});for(let r of this.items)r.solid=!0,sa.push({x:r.x,z:r.z,r:e[r.v].meta.R0*1.08*r.s+.05});this.spineMat=gM(),this.spineGeos=e.map((r,o)=>r.areoles?xM(r,101+o*7,r.meta.H):null),this.spines=[0,1].map(()=>{let r=new Qe(this.spineGeos[0],this.spineMat);return r.matrixAutoUpdate=!1,r.visible=!1,this.group.add(r),r})}update(e,t,n){let s=super.update(e,t,n).filter(r=>this.spineGeos[r.it.v]).sort((r,o)=>r.d-o.d);this.spines.forEach((r,o)=>{let a=s[o];r.visible=!!a,a&&(r.geometry=this.spineGeos[a.it.v],r.matrix.copy(a.M),r.matrixWorldNeedsUpdate=!0)})}setPixel(e,t){F0.uPx.value=2*Math.tan(Yi.degToRad(e.fov)/2)/Math.max(1,t)}};function z0(i){let e=Xs("plant-v1",.8),t=L0("creosote",5),n=L0("bursage",9),s=Xs("leaf-creosote-v1",.6,t),r=Xs("leaf-bursage-v1",.9,n),o=new Ki({kinds:[11,23,37].map(l=>({lods:[0,1,2].map(h=>_M(l,h)),count:6,r:.9,H:4.5,scale:[.8,1.15]})),material:e,lodDist:[14,40],clear:i,seed:41,minGap:1.5}),a=new Ki({kinds:[5,9,14].map(l=>({lods:[0,1,2].map(h=>MM(l,h)),count:45,r:.8,H:1.8,scale:[.75,1.2]})),material:[e,s],lodDist:[12,35],clear:i,seed:43,minGap:1.2,depthMat:I0(t)}),c=new Ki({kinds:[3,8,13].map(l=>({lods:[0,1,2].map(h=>SM(l,h)),count:70,r:.4,H:.6,scale:[.7,1.3]})),material:[e,r],lodDist:[10,28],clear:i,seed:47,minGap:.3,depthMat:I0(n)});return[o,a,c]}function wM(i,e){let t=Hn(i),n=new Ai,s=4.2+t()*2.6,r=[24,16,10][e],o=[5,4,3][e],a=[24,10,5][e],c=(u,f)=>{let m=.8+.4*(f*.37%1);return Ys([.27*m,.25*m,.215*m],[.33*m,.315*m,.28*m],u)},l=(u,f,m,_,p,g,y)=>{let E=Hn(y);for(let b=0;b<g;b++){let v=b/g*Math.PI*2+E()*.2,S=Math.cos(v)*p*(1.5+E()*.7),x=(Math.sin(v)*.3+.45)*p,M=E()*_*.15,C=_*(.75+E()*.25),R=E()<.35?2:1;for(let I=0;I<R;I++){let N=R===1||I===0?M:M+(C-M)*(.5+E()*.1),z=R===1?C:I===0?M+(C-M)*(.45+E()*.05):C,L=(E()-.5)*.12,H=[];for(let V=0;V<=a;V++){let ie=V/a,Y=N+(z-N)*ie,ne=Math.sin(ie*Math.PI)*(E()-.5)*.04,ae=.3+.7*N0(0,.7,Y),De=(S+L*(Y-N)+ne)*ae;H.push(u.clone().addScaledVector(f,Y).addScaledVector(m,De).add(We(0,Math.max(.016,(x+ne*.5)*ae+.03*(1-ae)),0)))}let G=.013+E()*.008;n.tube(H,H.map(()=>G),o,V=>c(V,b),()=>0,0)}}},h=We(1,0,0),d=We(0,0,1);if(l(We(.15,0,0),h,d,s,.13,r,i*3+1),t()<.8){let u=1.6+t()*1.4,f=(t()<.5?1:-1)*(.5+t()*.5),m=We(Math.cos(f),0,Math.sin(f)),_=We(-m.z,0,m.x);l(We(u,0,Math.sign(f)*.35),m,_,1.2+t()*1.2,.08,Math.max(5,Math.round(r*.55)),i*5+2)}for(let u=0;u<(e===2?3:7);u++){let f=u/7*Math.PI*2+t()*.5,m=.25+t()*.35,_=We(.12,.05,0),p=We(.05-Math.abs(Math.cos(f))*m*.6,.02+Math.max(0,Math.sin(f))*.08,Math.sin(f)*m*.8);n.tube([_,_.clone().lerp(p,.5).add(We(0,.02,0)),p],[.035,.025,.01],[5,4,3][e],()=>[.2,.18,.155],()=>0,0)}if(e<2)for(let u=0;u<2;u++){let f=We(.6+t()*(s-1.2),.05,(t()-.5)*.7),m=We(t()-.5,.15,t()-.5).normalize(),_=[],p=7;for(let v=0;v<=p;v++){let S=v/p;_.push([.035+.035*Math.sin(S*Math.PI*.85),S*.13])}let g=e===0?9:5,y=We(0,1,0).cross(m);y.lengthSq()<.001&&y.set(1,0,0),y.normalize();let E=We(0,0,0).crossVectors(m,y),b=n.count;for(let[v,S]of _)for(let x=0;x<g;x++){let M=x/g*Math.PI*2,C=y.x*Math.cos(M)+E.x*Math.sin(M),R=y.y*Math.cos(M)+E.y*Math.sin(M),I=y.z*Math.cos(M)+E.z*Math.sin(M);n.vert(f.x+m.x*S+C*v,f.y+m.y*S+R*v,f.z+m.z*S+I*v,C,R,I,[.13,.085,.05],0,0)}for(let v=0;v<p;v++)for(let S=0;S<g;S++){let x=b+v*g+S,M=b+v*g+(S+1)%g,C=x+g,R=M+g;n.i.push(x,M,C,M,R,C,x,C,M,M,C,R)}}return n.toGeometry()}function TM(){let i=new fn({color:16777215,roughness:.78,metalness:0});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB;
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vBo = position;`).replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
        vWy = (instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vWy = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;
${U0}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
        float tooth = vA.x, porous = vA.y, ao = vA.w, vary = vB.z;
        vec3 col = vec3(0.58, 0.55, 0.47) * (0.9 + 0.18 * vary);
        col *= 0.92 + 0.1 * pNoise(vBo * 60.0);
        float crack = smoothstep(0.975, 0.998, 1.0 - abs(pNoise(vBo * vec3(110.0, 110.0, 35.0)))) * smoothstep(0.1, 0.4, pNoise(vBo * 9.0));  // a few hairline cracks
        col *= 1.0 - 0.25 * crack;
        col = mix(col, col * vec3(0.8, 0.75, 0.68) * (0.75 + 0.3 * pNoise(vBo * 150.0)), porous * 0.7);  // weathered, pitted
        col = mix(col, vec3(0.42, 0.35, 0.24), tooth);                                                // old yellow teeth
        col = mix(vec3(0.2, 0.16, 0.12), col, smoothstep(0.0, 0.045, vWy));                          // earth where it sinks in
        diffuseColor.rgb *= col * (0.25 + 0.75 * ao);
        roughnessFactor = mix(0.72, 0.9, porous);
      }`).replace("#include <fog_fragment>",Ul)},i.customProgramCacheKey=()=>"bone-v1",i}function AM(i,e,t){let n=Hn(t),s=14,r=6,o=[],a=[],c=[];for(let f=0;f<=s;f++){let m=f/s,_=(m-.5)*e,p=i/e,g=Math.sin(_)*p,y=(Math.cos(_)-Math.cos(e/2))*p,E=Math.cos(_),b=-Math.sin(_),v=.011*(1-.35*m)+.004*(m<.08?1-m/.08:0),S=.005;for(let x=0;x<r;x++){let M=x/r*Math.PI*2,C=Math.cos(M)*v,R=Math.sin(M)*S,I=-b,N=E;o.push(g+I*C,R+S,y+N*C);let z=Math.hypot(Math.cos(M)/v,Math.sin(M)/S);a.push(I*Math.cos(M)/v/z,Math.sin(M)/S/z,N*Math.cos(M)/v/z)}}for(let f=0;f<s;f++)for(let m=0;m<r;m++){let _=f*r+m,p=f*r+(m+1)%r,g=_+r,y=p+r;c.push(_,g,p,p,g,y)}let l=o.length/3,h=new Uint8Array(l*4),d=new Uint8Array(l*4);for(let f=0;f<l;f++)h[4*f+3]=230,d[4*f+2]=Math.floor(n()*255);let u=new pt;return u.setAttribute("position",new it(o,3)),u.setAttribute("normal",new it(a,3)),u.setAttribute("aA",new ze(h,4,!0)),u.setAttribute("aB",new ze(d,4,!0)),u.setAttribute("aS",new ze(new Float32Array(l),1)),u.setIndex(c),u}var RM=[[["skull",0,.07,0,.5,.05,.12],["jaw",.36,.012,.22,.9,0,1.5708],["jaw",-.7,.012,-.45,-2.3,0,-1.5708],["vert-t",.25,.02,-.55,.3,0,1.4],["vert-t",.33,.02,-.72,.4,0,-1.3],["vert-t",.38,0,-.92,.2,0,.1],["vert-t",.52,.02,-1.1,.5,0,1.5],["vert-l",.6,0,-1.32,.35,0,.2],["vert-l",.7,.01,-1.5,.6,0,-.1],["vert-l",1.2,0,-1.2,2.1,0,.05],["pelvis",.9,.035,-2,.4,.08,.25],["femur",1.6,.012,-1.7,1.1,0,0],["femur",-.2,.01,-2.5,-.5,0,3.1],["scapula",-.55,0,-.95,.7,0,0],...[0,1,2,3,4,5,6,7].map(i=>["rib",.5+i*.1,0,-.6-i*.12,-1.3-i*.05+i%2*.15,0,0]),["rib",-1.1,0,.6,2.4,0,0],["rib",1.9,0,-.4,.3,0,0]],[["skull",0,.09,0,-1.9,0,1.45],["jaw",.55,.012,.4,2.6,0,1.5708],["vert-t",-.8,.02,.5,1.2,0,1.5],["vert-l",-1.15,0,.2,.4,0,.1],["vert-t",1.3,.02,-.7,2,0,-1.4],["pelvis",-1.6,.03,-.9,2.2,-.1,-.2],["femur",.4,.012,-1.3,.2,0,0],["scapula",1.5,0,.5,-.4,0,3.14159],...[0,1,2,3,4].map(i=>["rib",-.4+i*.45,0,-.5-i%2*.4,i*1.3,0,0])]],af=["skull","jaw","vert-t","vert-l","femur","pelvis","scapula"];function CM(i,e,t){let n=[],s=new ct,r=new Xt,o=new yt,a=new A(1,1,1),c=new A;e.forEach(([h,d,u,f,m,_,p],g)=>{let y;h==="rib"?y=AM(.36+g*.37%1*.16,1.4,g+3):y=i[af.indexOf(h)].lods[t].clone(),r.set(_,m,p,"YXZ"),o.setFromEuler(r),s.compose(c.set(d,u,f),o,a),y.applyMatrix4(s);let E=y.attributes.normal;if(!(E.array instanceof Float32Array)){let b=new Float32Array(E.count*3);for(let v=0;v<E.count;v++)b[3*v]=E.getX(v),b[3*v+1]=E.getY(v),b[3*v+2]=E.getZ(v);y.setAttribute("normal",new ze(b,3))}n.push(y)});let l=y0(n.map(h=>{for(let d of["aA","aB"])h.attributes[d].normalized||(h.attributes[d].normalized=!0);return h}));return l.computeBoundingSphere(),l}function H0(i,e){let t=Xs("deadwood-v1",.92),n=new Ki({kinds:[21,34].map(r=>({lods:[0,1,2].map(o=>wM(r,o)),count:3,r:2.6,H:.4,scale:[.85,1.1]})),material:t,lodDist:[16,40],clear:e,seed:61,minGap:1}),s=new Ki({kinds:RM.map((r,o)=>({lods:[0,1,2].map(a=>CM(i,r,a)),count:o===0?2:1,r:2.2,H:.3,scale:[1,1]})),material:TM(),lodDist:[12,30],clear:e,seed:67,minGap:1});return[n,s]}var re={told:11,standZ:1,stations:[{x:0,rows:[3,2,1]},{x:4,rows:[2,1]},{x:8,rows:[2,1]}],front:{z:-3.6,gap:[.95,1.5],jitterZ:.7,turn:.45},rowBack:[2.6,4,5.4],rowGap:1.35,rowJitter:[.35,.3],hill:{start:1.4,top:2.4,width:140,depth:30,edge:18},lean:.5,coat:[.06,.16],backDark:.8,scale:[.95,1.05],look:{pitch:-.03},walk:{speed:1.4,turn:.6},hint:{idle:12,misses:3},matches:1,swipe:{far:.08,ratio:1.2,reach:.07},monster:{clues:[1,2,4,7],high:.3,wide:.25,eye:.12,third:.07,glint:.07,anyRow:!1},hp:3,fight:{shots:2,rise:.9,dash:[1,1.5],pause:[.7,1.2],dashTime:.22,crawl:1.4,shadowLight:.3,push:1,reach:1.3,die:1,scatter:[2,3.5],scatterSpeed:1.6,back:2.5,wake:2.5},gun:{area:[.62,.5],hold:.55,point:.9},scare:{after:.5,forms:{1:["m3","m4","m5"],2:["m3","m4","m5"],4:["m3"],7:["m4"]}},hurt:{bpm:[0,112,80],heart:[0,.5,.3],edge:[0,.75,.4],shake:[1,3,2]},saySecs:1.6,endWait:3.5,lines:{open:"\uC5F4\uD55C \uB9C8\uB9AC. \uB354\uB3C4 \uB9D0\uACE0 \uB35C\uB3C4 \uB9D0\uACE0.",count:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uD1A1)",countPC:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uBCF4\uACE0 \uD074\uB9AD)",next:"\uB2E4\uC74C \uC904\uB85C \uAC00\uC790 (\uD654\uBA74\uC744 \uC606\uC73C\uB85C \uB118\uAE30\uAE30)",nextPC:"\uB2E4\uC74C \uC904\uB85C \uAC00\uC790 (D\uB098 \u2192)",match:"\uC131\uB0E5\uC744 \uCF1C\uC790 (\uC67C\uCABD\uC744 \uC704\uB85C \uC4F8\uAE30)",matchPC:"\uC131\uB0E5\uC744 \uCF1C\uC790 (F)",noMatch:"\uC131\uB0E5\uC774 \uC5C6\uB2E4.",cock:"\u2026\uC3F4\uC57C \uD55C\uB2E4 (\uC624\uB978\uCABD\uC744 \uC544\uB798\uB85C \uC4F8\uC5B4 \uACF5\uC774\uCE58\uAE30)",cockPC:"\u2026\uC3F4\uC57C \uD55C\uB2E4 (\uC624\uB978\uCABD \uD074\uB9AD\uC73C\uB85C \uACF5\uC774\uCE58\uAE30)",fire:"(\uC3E0 \uACF3\uC744 \uD1A1, \uC704\uB85C \uC4F8\uBA74 \uACF5\uC774\uCE58\uAE30\uB97C \uB0B4\uB824\uC694)",firePC:"(\uD074\uB9AD\uD558\uBA74 \uC3F4\uC694, \uC624\uB978\uCABD \uD074\uB9AD\uC740 \uACF5\uC774\uCE58\uAE30\uB97C \uB0B4\uB824\uC694)",reload:"\uBE48 \uCE78\uC774\uB2E4 (\uCD1D\uC744 \uAFB9 \uB20C\uB7EC \uC7A5\uC804)",reloadPC:"\uBE48 \uCE78\uC774\uB2E4 (R\uB85C \uC7A5\uC804)",morningTitle:"\uB2E4\uC74C \uB0A0 \uC544\uCE68",morning:"\uAFC8\uC774\uC5C8\uB098\u2026 (\uC544\uCE68 \uC7A5\uBA74\uC740 \uC544\uC9C1 \uC5C6\uC5B4\uC694)",deadTitle:"\uB05D",dead:"\uD53C\uAC00 \uB2E4 \uB2F3\uC558\uC5B4\uC694"},clear:{x0:-9,x1:22,z0:-40},seed:41};function cf(i,e){let t=re.hill,n=Math.max(0,re.front.z-e-t.start),s=n<1?.2*n*n:.2+.4*(n-1),r=(re.stations[0].x+re.stations[re.stations.length-1].x)/2,o=Math.abs(i-r),a=t.width/2,c=o<a-t.edge?1:Math.max(0,(a-o)/t.edge);return t.top*Math.tanh(s*(1+.15*Math.sin(i*.23+1)+.1*Math.sin(i*.61+2))/t.top)*c*c*(3-2*c)-.03}var hf={m3:{roar:"machine",skin:[.3,.26,.22],wr:[0,1,.3],anim:{breath:1,breathHz:1.5,jaw:.7,twitch:1.2,neck:[0,0],sway:1}},m4:{roar:"crack",skin:[.3,.27,.24],wr:[.2,1,.6],anim:{breath:.6,jaw:.45,twitch:.9,neck:[0,0],sway:0}},m5:{roar:"gargle",skin:[.02,.02,.022],wr:[0,1,0],smoke:1,eyeSelf:2.2,eyeShine:.35,anim:{breath:.4,jaw:.4,twitch:.6,neck:[0,0],sway:1}}},PM=`
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z) * 2.0 - 1.0; }
float fbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p *= 2.03; a *= 0.5; } return s; }
vec3 bumpN(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
  vec3 vSigmaX = dFdx(surf_pos.xyz), vSigmaY = dFdy(surf_pos.xyz), vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN), R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}`,IM=`
attribute vec2 aAtt; attribute vec4 aMat; attribute vec4 aExt; attribute vec4 aRig;
uniform float uTime;
uniform vec3 uHeadP, uHeadX, uHeadY, uHeadZ, uJawH, uHeadRot, uNeckP;
uniform float uJaw, uSplit, uBreath, uSway; uniform vec2 uNeck;
mat3 aa(vec3 k, float t) { float c = cos(t), s = sin(t), C = 1.0 - c;
  return mat3(c + k.x*k.x*C, k.y*k.x*C + k.z*s, k.z*k.x*C - k.y*s,  k.x*k.y*C - k.z*s, c + k.y*k.y*C, k.z*k.y*C + k.x*s,  k.x*k.z*C + k.y*s, k.y*k.z*C - k.x*s, c + k.z*k.z*C); }`,LM=`
  float side = sign(dot(position - uHeadP, uHeadX) + 1e-5);
  mat3 rJ = uSplit > 0.5 ? aa(uHeadY, uJaw * aRig.x * side) : aa(uHeadX, uJaw * aRig.x);
  mat3 rH = aa(uHeadY, uHeadRot.x * aRig.y) * aa(uHeadX, uHeadRot.y * aRig.y) * aa(uHeadZ, uHeadRot.z * aRig.y);
  mat3 rN = aa(vec3(1.0, 0.0, 0.0), uNeck.x * aRig.z) * aa(vec3(0.0, 0.0, 1.0), uNeck.y * aRig.z);`,DM=`
  transformed = uJawH + rJ * (transformed - uJawH);
  transformed = uHeadP + rH * (transformed - uHeadP);
  transformed = uNeckP + rN * (transformed - uNeckP);
  { float ph = position.x * 5.0 + position.z * 4.0;
    transformed += vec3(sin(uTime * 1.3 + position.y * 3.0 + ph), 0.0, cos(uTime * 1.07 + position.y * 2.5 + ph * 0.7)) * 0.035 * aRig.w * aRig.w * uSway; }
  transformed += normal * aExt.y * uBreath;`;function NM(i,e){let t=new fn({color:16777215,roughness:.8,metalness:0}),n={uTime:e,uIR:{value:0},uHeadP:{value:new A},uHeadX:{value:new A(1,0,0)},uHeadY:{value:new A(0,1,0)},uHeadZ:{value:new A(0,0,1)},uJawH:{value:new A},uHeadRot:{value:new A},uNeckP:{value:new A},uNeck:{value:new he},uJaw:{value:0},uSplit:{value:0},uBreath:{value:0},uSway:{value:1},uSkin:{value:new de(...i.skin)},uWr:{value:new A(...i.wr).normalize()},uSmoke:{value:i.smoke??0},uEyeGain:{value:14},uEyeSelf:{value:i.eyeSelf??0},uEyeShine:{value:i.eyeShine??1},uLightP:{value:new A}};return t.userData.own=n,t.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${IM}
varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
${LM}
objectNormal = rN * (rH * (rJ * objectNormal));`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position; vMat = aMat; vExt = aExt; vAtt = aAtt;
${DM}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime, uIR, uSmoke, uEyeGain, uEyeSelf, uEyeShine; uniform vec3 uSkin, uWr, uLightP;
        varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;
        ${PM}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (uSmoke > 0.0) {
          float fc = abs(dot(normalize(vNormal), normalize(vViewPosition)));
          float n = fbm3(vObj * 7.0 + vec3(0.0, -uTime * 0.35, 0.0)) * 0.5 + 0.5;
          float edge = pow(1.0 - fc, 1.6) * (1.0 - vMat.w) * (1.0 - vExt.x);
          if (n < edge * 1.15 - 0.12) discard; }`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 p = vObj; float teeth = vMat.x, mouth = vMat.y, flesh = vMat.z, bone = vMat.w, eye = vExt.x, fur = vExt.z;
          float pat = fbm3(p * 3.1) * 0.5 + 0.5, mange = smoothstep(0.42, 0.62, fbm3(p * 5.3 + 7.0) * 0.5 + 0.5);
          float streak = vnoise3(p * vec3(90.0, 14.0, 90.0)) * 0.5 + 0.5;
          float blot = smoothstep(0.35, 0.75, fbm3(p * 1.7 + 3.0) * 0.5 + 0.5);
          vec3 skin = uSkin * (0.4 + 0.95 * pat) * (1.0 - 0.45 * blot);
          skin = mix(skin, skin * (0.55 + 0.6 * streak), fur);
          skin = mix(skin, vec3(0.42, 0.33, 0.3) * (0.7 + 0.5 * pat), mange * fur * 0.6 * step(0.05, uSkin.r));
          float fib = vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5;
          vec3 fl = mix(vec3(0.28, 0.045, 0.04), vec3(0.48, 0.16, 0.12), smoothstep(0.25, 0.85, fib));
          fl *= 0.6 + 0.5 * (fbm3(p * 11.0) * 0.5 + 0.5);
          vec3 th = vec3(0.72, 0.66, 0.5) * (0.65 + 0.35 * vAtt.x);
          vec3 bn = vec3(0.66, 0.62, 0.54) * (0.75 + 0.35 * pat) * (1.0 - 0.6 * smoothstep(0.6, 0.85, vnoise3(p * vec3(40.0, 6.0, 40.0)) * 0.5 + 0.5));
          vec3 c = skin;
          c = mix(c, fl, flesh); c = mix(c, bn, bone); c = mix(c, th, teeth);
          c = mix(c, vec3(0.06, 0.012, 0.012), mouth);
          c = mix(c, vec3(0.005), eye);
          c *= mix(1.0, smoothstep(0.0, 1.0, vAtt.x), 0.85);
          c *= 1.0 - 0.7 * smoothstep(0.52, 0.66, vAtt.y) * (1.0 - eye);
          c *= 1.0 - 0.45 * vExt.w * smoothstep(0.55, 0.95, abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0))) * (1.0 - flesh - bone - teeth);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(0.78, 0.38, vMat.z); roughnessFactor = mix(roughnessFactor, 0.3, vMat.y); roughnessFactor = mix(roughnessFactor, 0.45, vMat.x);
        roughnessFactor = mix(roughnessFactor, 0.7, vMat.w); roughnessFactor = mix(roughnessFactor, 0.12, vExt.x);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        { vec3 p = vObj; float h = 0.0;
          float wr = abs(sin(dot(p, uWr) * 85.0 + fbm3(p * 5.0) * 5.0)); h += vExt.w * (1.0 - wr) * 1.4 * (1.0 - vMat.x - vMat.w);
          h += vExt.z * (vnoise3(p * vec3(150.0, 22.0, 150.0)) * 0.8 + vnoise3(p * 60.0) * 0.3);
          h += vMat.z * ((vnoise3(p * 140.0 + fbm3(p * 6.0) * 3.0) * 0.5 + 0.5) * 0.7 + vnoise3(p * 80.0) * 0.4);
          h += vMat.w * vnoise3(p * 45.0) * 0.6 + vnoise3(p * 95.0) * 0.25;
          normal = bumpN(-vViewPosition, normal, vec2(dFdx(h), dFdy(h)) * 0.0032, faceDirection); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          float dl = length(vWP - uLightP);
          float shine = min(5.0, uEyeGain * pow(fc, 4.0) / pow(max(dl, 1.3), 1.5)) * uEyeShine;
          totalEmissiveRadiance += vExt.x * vec3(0.96, 1.0, 0.9) * (shine + uEyeSelf * (0.4 + 0.6 * fc)); }`)},t.customProgramCacheKey=()=>"game-monster-v1",{mat:t,own:n}}function UM(i){let e=atob(i.data),t=new Uint8Array(e.length);for(let p=0;p<e.length;p++)t[p]=e.charCodeAt(p);let n=t.buffer,s=i.vc,r=i.ic,o=0,a;i.i32&&(a=new Uint32Array(n,o,r),o+=r*4);let c=new Int16Array(n,o,s*3);o+=s*6,i.i32||(a=new Uint16Array(n,o,r),o+=r*2);let l=new Int8Array(n,o,s*3);o+=s*3;let h=new Uint8Array(n,o,s*2);o+=s*2;let d=new Uint8Array(n,o,s*4);o+=s*4;let u=new Uint8Array(n,o,s*4);o+=s*4;let f=new Uint8Array(n,o,s*4),m=new Float32Array(s*3);for(let p=0;p<s*3;p++)m[p]=c[p]*i.ps;let _=new pt;return _.setAttribute("position",new ze(m,3)),_.setAttribute("normal",new ze(new Int8Array(l),3,!0)),_.setAttribute("aAtt",new ze(new Uint8Array(h),2,!0)),_.setAttribute("aMat",new ze(new Uint8Array(d),4,!0)),_.setAttribute("aExt",new ze(new Uint8Array(u),4,!0)),_.setAttribute("aRig",new ze(new Uint8Array(f),4,!0)),_.setIndex(new ze(i.i32?new Uint32Array(a):new Uint16Array(a),1)),_.computeBoundingSphere(),_.boundingSphere.radius+=.6,_}async function V0(i,e,t){let n=await(await fetch(i)).json(),s=n.meta,r=hf[e],{mat:o,own:a}=NM(r,t),c=new Qe(UM(n),o);c.frustumCulled=!1,a.uHeadP.value.fromArray(s.headPivot),a.uHeadX.value.fromArray(s.headX),a.uHeadY.value.fromArray(s.headY),a.uHeadZ.value.fromArray(s.headZ),s.split?(a.uSplit.value=1,a.uJawH.value.fromArray(s.headPivot).addScaledVector(a.uHeadZ.value,s.split.hinge[2])):a.uJawH.value.fromArray(s.jawHinge),a.uNeckP.value.fromArray(s.neck?s.neck.base:[0,1.5,-.05]);let l=new Tt;return l.add(c),l.visible=!1,{id:e,meta:s,info:r,mesh:c,root:l,own:a}}var zl=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),G0=i=>(i=Math.min(1,Math.max(0,i)),i*i*i),Ol=i=>(i=Math.min(1,Math.max(0,i)),1-Math.pow(1-i,3)),lf={travel:.11,d:.68},Hl=new A,kl=new A,k0=new A,W0=new A,FM=new A,uf=new yt,Vl=new A,Gl=new A,q0=new A;function X0(i,e,t,n){let s=!!i.meta.split;e.getWorldDirection(Hl),kl.copy(e.position).addScaledVector(Hl,t+.75*i.meta.headL-.28).addScaledVector(e.up,-.1);let r=s?0:.5*(i.meta.jawOpen+n)-.1;k0.fromArray(i.meta.headZ).multiplyScalar(Math.cos(r)).addScaledVector(W0.fromArray(i.meta.headY),-Math.sin(r)).normalize(),uf.setFromUnitVectors(k0,FM.copy(e.position).sub(kl).normalize())}function Y0(i,e,t){i.sc={t:0,fired:{},base:e.clone(),qs:t.clone(),thr:{t:0,goal:new A,cur:new A,pg:new he,pc:new he}},i.root.visible=!0}function Z0(i,e,t,n){let s=i.sc;if(!s)return null;let r=i.own,o=!!i.meta.split;s.t+=t;let a=s.t,c=lf.travel,l=c+.72,h=l+.08,d=h+.75,u=d+.8,f=(M,C)=>{s.fired[M]||(s.fired[M]=1,C())};if(f("roar",()=>n.roar()),a>=h&&f("cut",()=>{n.cut(),i.root.visible=!1}),a>=d&&f("back",()=>n.back()),a>=u)return i.sc=null,i.root.visible=!1,n.done(),null;if(a>=h)return{fade:a<d?1:1-zl((a-d)/(u-d)),shake:0};let m=q0.fromArray(i.meta.headPivot),_=o?.6:.95;X0(i,e,lf.d,_);let p=Ol(a/lf.travel),g=Gl.copy(m).applyQuaternion(s.qs).add(s.base),y=Vl.copy(g).lerp(kl,p);i.root.quaternion.copy(s.qs).slerp(uf,p);let E=s.thr,b=.55;if(p>=1){E.t-=t,E.t<=0&&(E.t=.045+Math.random()*.03,E.goal.set((Math.random()-.5)*.6*b,(Math.random()-.5)*.6*b,(Math.random()-.5)*1.6*b),E.pg.set((Math.random()-.5)*.12*b,(Math.random()-.5)*.1*b));let M=Math.min(1,t*32);E.cur.lerp(E.goal,M),E.pc.lerp(E.pg,M),y.addScaledVector(W0.set(1,0,0).applyQuaternion(e.quaternion),E.pc.x).addScaledVector(e.up,E.pc.y)}i.root.position.copy(y).sub(Gl.copy(m).applyQuaternion(i.root.quaternion)),r.uHeadRot.value.copy(E.cur);let v=_*(p>=1?.85+.15*Math.sin(a*33):p);if(a>=l){let M=G0((a-l)/(h-l));r.uHeadRot.value.multiplyScalar(1-M),v=_-(_+i.meta.jawOpen*(o?.95:.9))*M}r.uJaw.value=v;let S=e.position.distanceTo(Vl.copy(m).applyQuaternion(i.root.quaternion).add(i.root.position)),x=.12+.88*zl((S-.9)/1.5);return r.uEyeShine.value=(i.info.eyeShine??1)*(.012+.988*x),r.uEyeSelf.value=(i.info.eyeSelf??0)*(.03+.97*x),{fade:0,shake:p>=1?1.4*b+.3:.6}}var Gr=(i,e)=>i+Math.random()*(e-i);function K0(i,e,t){let n=i.info.anim,s=i.own,r=i.idle??(i.idle={gapeT:2,gape:0,gapeV:0,jerkT:1,head:new A,goal:new A}),o=n.breathHz??.32;s.uBreath.value=n.breath*.012*Math.sin(t*Math.PI*2*o),r.gapeT-=e,r.gapeT<0&&(r.gape=1,r.gapeT=Gr(2,4),r.hold=Gr(.6,1.2)),r.gape>0&&(r.hold-=e,r.hold<0&&(r.gape=Math.max(0,r.gape-e*1.4))),r.gapeV+=((r.gape>0&&r.hold>0?1:r.gape)-r.gapeV)*Math.min(1,e*5),s.uJaw.value=(i.meta.split?-.1:-.12)+.08*Math.sin(t*.9)+.012*Math.sin(t*37)+r.gapeV*n.jaw,r.jerkT-=e,r.jerkT<0&&(r.jerkT=Gr(.8,2.4)/n.twitch,r.goal.set(Gr(-.3,.3),Gr(-.18,.18),Gr(-.4,.4)).multiplyScalar(Math.min(1,n.twitch))),r.head.lerp(r.goal,Math.min(1,e*22));let a=.012*n.twitch;s.uHeadRot.value.set(r.head.x+a*Math.sin(t*41),r.head.y+a*Math.sin(t*33+1),r.head.z+a*Math.sin(t*29+2)),s.uNeck.value.set(0,0),s.uSway.value=n.sway,s.uEyeShine.value=i.info.eyeShine??1,s.uEyeSelf.value=i.info.eyeSelf??0}var jn={snap:.45,lunge:.72,shut:1.02,black:1.11};function J0(i){i.eat={t:0,fired:{},p0:i.root.position.clone(),q0:i.root.quaternion.clone()}}function $0(i,e,t,n){let s=i.eat;if(!s)return null;let r=i.own,o=!!i.meta.split,a=o?.6:.95;s.t+=t;let c=s.t,l=(b,v)=>{s.fired[b]||(s.fired[b]=1,v())};if(l("freeze",n.freeze),c>=jn.snap&&l("roar",n.roar),c>=jn.black)return l("black",n.black),{fade:1,shake:0};let h=q0.fromArray(i.meta.headPivot);X0(i,e,.62,a);let d=0,u=0,f=0,m=r.uJaw.value,_=0;if(c<jn.snap){let b=zl(c/jn.snap);m=m*(1-b)+(o?-.18:-.2)*b,r.uHeadRot.value.multiplyScalar(1-b)}else if(c<jn.lunge){let b=(c-jn.snap)/(jn.lunge-jn.snap);d=Ol(b),u=Ol(Math.min(1,b*1.6)),m=-.2+(a+.2)*Ol(b*1.3),r.uHeadRot.value.set(0,.08*Math.sin(c*60)*(1-b),.06*Math.sin(c*47)),_=.5}else if(c<jn.shut)d=1,u=1,m=a+.04*Math.sin(c*50),r.uHeadRot.value.set(.03*Math.sin(c*41),.03*Math.sin(c*37),.05*Math.sin(c*33)),_=.5;else{let b=G0((c-jn.shut)/(jn.black-jn.shut));d=1,u=1,f=.04*b,m=a-(a+i.meta.jawOpen*(o?.95:.9))*b,r.uHeadRot.value.set(0,0,0),_=.5}let p=Gl.copy(h).applyQuaternion(s.q0).add(s.p0);e.getWorldDirection(Hl);let g=Vl.copy(p).lerp(kl,d).addScaledVector(Hl,-f);i.root.quaternion.copy(s.q0).slerp(uf,u),i.root.position.copy(g).sub(Gl.copy(h).applyQuaternion(i.root.quaternion)),r.uJaw.value=m;let y=e.position.distanceTo(Vl.copy(h).applyQuaternion(i.root.quaternion).add(i.root.position)),E=.12+.88*zl((y-.9)/1.5);return r.uEyeShine.value=(i.info.eyeShine??1)*(.012+.988*E),r.uEyeSelf.value=(i.info.eyeSelf??0)*(.03+.97*E),{fade:0,shake:_}}function ff(i={}){let e=i.context||null,t,n,s,r,o,a=null,c=!0,l={a:0,b:0,c:0};function h(){if(e&&t)return e;if(!e)try{e=new(window.AudioContext||window.webkitAudioContext)}catch{return null}t=e.createGain(),t.gain.value=.9,s=e.createBiquadFilter(),s.type="lowpass",s.frequency.value=18e3,s.Q.value=.7;let B=e.createDynamicsCompressor();B.threshold.value=-4,B.ratio.value=3,B.attack.value=.003,B.release.value=.2;let D=e.createWaveShaper(),X=2048,ce=new Float32Array(X);for(let ge=0;ge<X;ge++){let qe=ge/(X-1)*2-1,nt=Math.abs(qe)*2*.92;ce[ge]=Math.sign(qe)*(nt<.7?nt:.7+.28*Math.tanh((nt-.7)/.28))}D.curve=ce;let Q=e.createGain();Q.gain.value=.5,t.connect(s).connect(B).connect(Q).connect(D).connect(e.destination),n=e.createGain(),n.connect(t),r=e.createConvolver(),r.buffer=d(e,1.8,2.6);let Me=e.createGain();Me.gain.value=.3,r.connect(Me).connect(t),o=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let Ie=o.getChannelData(0);for(let ge=0;ge<Ie.length;ge++)Ie[ge]=Math.random()*2-1;return e}function d(B,D,X){let ce=Math.floor(B.sampleRate*D),Q=B.createBuffer(2,ce,B.sampleRate);for(let Me=0;Me<2;Me++){let Ie=Q.getChannelData(Me);for(let ge=0;ge<ce;ge++)Ie[ge]=(Math.random()*2-1)*Math.pow(1-ge/ce,X)}return Q}function u(B,D,X,ce,Q,Me=ce-X){B.gain.setValueAtTime(1e-4,D),B.gain.exponentialRampToValueAtTime(Math.max(2e-4,Q),D+X),B.gain.exponentialRampToValueAtTime(1e-4,D+X+Math.max(.01,Me))}function f(B,D,X){let ce=e.createBufferSource();ce.buffer=o,ce.loop=!0;let Q=e.createBiquadFilter();Q.type=X.type||"bandpass",Q.Q.value=X.q??1,Q.frequency.setValueAtTime(X.f0,B),X.f1&&Q.frequency.exponentialRampToValueAtTime(X.f1,B+D);let Me=e.createGain();return u(Me,B,X.att??.01,D,X.gain),ce.connect(Q).connect(Me),Me.connect(X.dest||t),X.verb&&Me.connect(r),ce.start(B,Math.random()*1.5),ce.stop(B+D+.05),Me}function m(B,D,X){let ce=e.createOscillator();ce.type=X.type||"sine",ce.frequency.setValueAtTime(X.f0,B),X.f1&&ce.frequency.exponentialRampToValueAtTime(X.f1,B+D);let Q=e.createGain();u(Q,B,X.att??.01,D,X.gain);let Me=ce;if(X.lp){let Ie=e.createBiquadFilter();Ie.type="lowpass",Ie.frequency.value=X.lp,Me=Me.connect(Ie)}if(X.bp){let Ie=e.createBiquadFilter();Ie.type="bandpass",Ie.frequency.value=X.bp,Ie.Q.value=X.bq??3,Me=Me.connect(Ie)}if(X.am){let Ie=e.createOscillator(),ge=e.createGain(),qe=e.createGain();Ie.frequency.value=X.am,ge.gain.value=.5,qe.gain.value=.5,Ie.connect(ge).connect(qe.gain),Me=Me.connect(qe),Ie.start(B),Ie.stop(B+D+.05)}if(X.vib){let Ie=e.createOscillator(),ge=e.createGain();Ie.frequency.value=X.vib,ge.gain.value=X.vibAmt??X.f0*.03,Ie.connect(ge).connect(ce.frequency),Ie.start(B),Ie.stop(B+D+.05)}return Me.connect(Q),Q.connect(X.dest||t),X.verb&&Q.connect(r),ce.start(B),ce.stop(B+D+.05),Q}function _(B){let D=e.createWaveShaper(),X=1024,ce=new Float32Array(X);for(let Q=0;Q<X;Q++){let Me=Q/X*2-1;ce[Q]=Math.tanh(Me*B)}return D.curve=ce,D}function p(B,D,X,ce){for(let Q=0;Q<D;Q++)f(B+Math.random()*X,ce.len??.006,{type:"bandpass",f0:ce.f*(.7+Math.random()*.6),q:ce.q??4,gain:ce.gain*(.5+Math.random()*.5),att:8e-4,dest:ce.dest})}function g(){if(a){let B=a;a=null;let D=e.currentTime;B.g.gain.setTargetAtTime(1e-4,D,.15),setTimeout(()=>B.nodes.forEach(X=>{try{X.stop()}catch{}}),900)}}function y(B){g();let D=e.currentTime,X=e.createGain();X.gain.value=1e-4,X.gain.setTargetAtTime(1,D,.4),X.connect(n);let ce=[];if(B==="m4"){let Q=e.createOscillator();Q.type="sawtooth",Q.frequency.value=47;let Me=e.createBiquadFilter();Me.type="lowpass",Me.frequency.value=230,Me.Q.value=2;let Ie=e.createOscillator(),ge=e.createGain(),qe=e.createGain();Ie.frequency.value=6.5,ge.gain.value=.35,qe.gain.value=.065,Ie.connect(ge).connect(qe.gain),Q.connect(Me).connect(qe).connect(X),Q.start(),Ie.start(),ce.push(Q,Ie)}if(B==="m5"){for(let ge of[36,38.6,54.5]){let qe=e.createOscillator();qe.frequency.value=ge;let nt=e.createGain();nt.gain.value=ge>50?.03:.07,qe.connect(nt).connect(X),qe.start(),ce.push(qe)}let Q=e.createBufferSource();Q.buffer=o,Q.loop=!0;let Me=e.createBiquadFilter();Me.type="lowpass",Me.frequency.value=140;let Ie=e.createGain();Ie.gain.value=.12,Q.connect(Me).connect(Ie).connect(X),Q.start(),ce.push(Q)}a={id:B,g:X,nodes:ce},l.a=0,l.b=1.5+Math.random()*2,l.c=0}function E(B,D,X){if(!c||!e||e.state!=="running")return;(!a||a.id!==B)&&y(B);let ce=e.currentTime+.02,Q=a.g;l.b-=D,B==="m3"&&(X.cross&&(f(ce,.2,{f0:1150,f1:800,q:.9,gain:.07,att:.03,dest:Q}),f(ce+.3,.16,{f0:1700,f1:2100,q:1.2,gain:.035,att:.05,dest:Q})),l.b<0&&(l.b=4+Math.random()*3,f(ce,.7,{type:"lowpass",f0:420,f1:260,q:6,gain:.1,att:.06,dest:Q}),m(ce,.7,{type:"sawtooth",f0:70,f1:52,gain:.06,lp:300,am:19,dest:Q}))),B==="m4"&&(l.b<0&&(l.b=3+Math.random()*3.5,p(ce,10+Math.floor(Math.random()*6),.55,{f:2600,gain:.12,dest:Q})),X.cross&&f(ce,.9,{type:"lowpass",f0:500,f1:300,q:1,gain:.05,att:.3,dest:Q})),B==="m5"&&(l.b<0&&(l.b=5+Math.random()*4,f(ce,2.2,{f0:2400,f1:3100,q:5,gain:.04,att:.9,dest:Q}),f(ce+.4,1.6,{f0:1300,f1:900,q:7,gain:.025,att:.6,dest:Q})),X.cross&&f(ce,2.4,{type:"lowpass",f0:240,f1:110,q:.7,gain:.08,att:.9,dest:Q}))}function b(B){if(!Pe())return;let D=e.currentTime+.01;if(f(D,.012,{type:"highpass",f0:3800,q:.7,gain:.12,att:.001}),B==="m5")for(let X=0;X<14;X++)f(D+.05+X*(.03+X*.004),.012,{f0:1300,q:6,gain:.08,att:.001});else m(D+.04,1.3,{type:"sawtooth",f0:B==="m3"?95:78,f1:52,gain:.16,bp:620,bq:3,vib:7,att:.15});f(D+.04,1.1,{type:"lowpass",f0:600,f1:250,q:1,gain:.06,att:.2})}function v(B,D){let X=D.dur,ce=B+X,Q=e.createGain();Q.gain.value=1;let Me=D.pitch??1,Ie=D.fmul??1,ge=D.f.map(([P,w])=>[P,w*Me]),qe=(P,w)=>{P.frequency.setValueAtTime(ge[0][1]*w,B);for(let[k,le]of ge.slice(1))P.frequency.exponentialRampToValueAtTime(le*w,B+k)},nt=[];for(let[P,w,k]of[[1,"sawtooth",.5],[1.012,"sawtooth",.4],[.5,D.subType||"sawtooth",D.sub??.45],[1.497,"square",D.fifth??0]]){if(!k)continue;let le=e.createOscillator();le.type=w,qe(le,P);let $=e.createGain();$.gain.value=k,le.connect($).connect(Q),nt.push(le)}let mt=e.createOscillator();mt.type="sawtooth",mt.frequency.value=D.jitRate??11;let rt=e.createGain();rt.gain.value=ge[0][1]*(D.jit??.06),mt.connect(rt);for(let P of nt)rt.connect(P.frequency);nt.push(mt);let Wt=e.createGain();Wt.gain.value=1-(D.rattle??.5)/2;let vt=e.createOscillator();vt.type="square",vt.frequency.setValueAtTime(D.rattleHz??28,B),D.rattleHz1&&vt.frequency.linearRampToValueAtTime(D.rattleHz1,ce);let jt=e.createGain();jt.gain.value=(D.rattle??.5)/2,vt.connect(jt).connect(Wt.gain),nt.push(vt);let Qt=e.createBufferSource();Qt.buffer=o,Qt.loop=!0;let cn=e.createBiquadFilter();cn.type="bandpass",cn.frequency.value=D.breathHz??1100,cn.Q.value=.6;let O=e.createGain();O.gain.value=D.breath??.5,Qt.connect(cn).connect(O).connect(Q),Q.connect(Wt);let pn=_(D.drive??6);Wt.connect(pn);let bt=e.createGain();bt.gain.value=1;for(let[P,w,k]of D.formants||[[520,4,1],[950,5,.8],[2300,6,.35]]){let le=P*Ie,$=e.createBiquadFilter();$.type="bandpass",$.frequency.setValueAtTime(le,B),D.formantSweep&&$.frequency.exponentialRampToValueAtTime(le*D.formantSweep,ce),$.Q.value=w;let me=e.createGain();me.gain.value=k,pn.connect($).connect(me).connect(bt)}let wt=e.createBiquadFilter();wt.type="lowpass",wt.frequency.value=D.chestHz??260;let be=e.createGain();be.gain.value=D.chest??.9,pn.connect(wt).connect(be).connect(bt);let Nt=e.createBiquadFilter();Nt.type="lowpass",Nt.frequency.value=D.top??5200;let He=bt.connect(Nt);if(D.hp){let P=e.createBiquadFilter();P.type="highpass",P.frequency.value=D.hp,P.Q.value=.7,He=He.connect(P)}let ke=e.createGain();D={...D,gain:D.gain*(D.loud??1)},ke.gain.setValueAtTime(1e-4,B),ke.gain.exponentialRampToValueAtTime(D.gain,B+(D.att??.03)),D.swell&&ke.gain.exponentialRampToValueAtTime(D.gain*D.swell,B+X*.35),ke.gain.setValueAtTime(D.gain*(D.swell??1),B+X*.55),ke.gain.exponentialRampToValueAtTime(1e-4,ce),He.connect(ke),ke.connect(t),ke.connect(r);for(let P of nt)P.start(B),P.stop(ce+.05);return Qt.start(B,Math.random()),Qt.stop(ce+.05),ke}function S(B,D,X){v(B,{dur:D,f:[[0,150],[D,175]],gain:X,rattle:.85,rattleHz:22,rattleHz1:30,drive:4,breath:.45,breathHz:1800,formants:[[800,4,.8],[1600,5,.6]],chest:.4,chestHz:320,top:4500,hp:200,att:D*.8,jit:.04})}function x(B){for(let[mt,rt,Wt]of[[410,.35,.5],[1132,.22,.35],[2214,.16,.25],[3660,.1,.18]])m(B,Wt,{f0:mt,gain:rt,att:.002});f(B,.05,{type:"highpass",f0:2500,q:.7,gain:.5,att:.001});let D=e.createOscillator();D.type="square",D.frequency.setValueAtTime(540,B),D.frequency.exponentialRampToValueAtTime(400,B+1.1);let X=e.createGain();X.gain.value=0;let ce=e.createOscillator();ce.frequency.value=730,ce.connect(X.gain);let Q=e.createBiquadFilter();Q.type="bandpass",Q.frequency.value=4e3,Q.Q.value=1.2;let Me=e.createGain();u(Me,B,.02,1.25,.22);let Ie=_(5);D.connect(X).connect(Ie).connect(Q).connect(Me).connect(t),D.start(B),ce.start(B),D.stop(B+1.3),ce.stop(B+1.3);let ge=e.createDelay(.01);ge.delayTime.value=.0031;let qe=e.createGain();qe.gain.value=.82,ge.connect(qe).connect(ge);let nt=e.createGain();nt.gain.value=.5,ge.connect(nt).connect(t);for(let mt=0;mt<16;mt++)f(B+.05+mt*.055+Math.random()*.02,.012,{type:"highpass",f0:1500,q:.7,gain:.25*(1-mt/18),att:.001,dest:ge})}function M(B){if(!Pe())return;let D=e.currentTime;n.gain.cancelScheduledValues(D),n.gain.setTargetAtTime(1e-4,D,.05),B==="growlRoar"&&S(D+.02,.5,.22)}function C(B,D){if(!h())return;D===void 0&&(D=e.currentTime+.005);let X={breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7};m(D,.16,{f0:95,f1:48,gain:.35,att:.003}),B==="growlRoar"&&v(D,{...X,dur:1.1,f:[[0,205],[.1,280],[.45,215],[1.1,150]],gain:.7,rattle:.5,rattleHz:33,rattleHz1:24,drive:9,breath:.85,formants:[[1250,3,1],[2550,4,1],[3750,5,.65]],formantSweep:.85,att:.02}),B==="machine"&&v(D+.02,{...X,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),B==="crack"&&v(D,{...X,dur:1.1,f:[[0,210],[.07,340],[.2,235],[.42,310],[.6,220],[1.1,160]],gain:.7,rattle:.6,rattleHz:27,rattleHz1:14,drive:10,breath:.8,jit:.16,jitRate:9,formants:[[1150,3,1],[2350,4,.95],[3550,5,.65]],att:.015}),B==="gargle"&&v(D,{...X,dur:1.2,f:[[0,190],[.18,262],[1.2,135]],gain:.75,rattle:.95,rattleHz:20,rattleHz1:36,drive:9,breath:1,jit:.12,jitRate:7,formants:[[1050,3,1],[2250,4,1],[3450,5,.7]],formantSweep:1.1,hp:1250,att:.025})}let R={};async function I(B){if(!(i.context||!h()||R[B])){R[B]="pending";try{let D=e.sampleRate,X=new OfflineAudioContext(1,Math.ceil(D*2.2),D);ff({context:X}).roarRaw(B,.002),R[B]=await X.startRendering()}catch{R[B]=null}}}function N(B,D){R[B]=D}let z={first:.08,grow:1.16,span:1.1,gain:2.2};function L(B,D){let X=B,ce=z.first,Q=[];for(;X-B<z.span;)Q.push([X,ce]),X+=ce,ce*=z.grow;Q.forEach(([Me,Ie],ge)=>{let qe=ge===Q.length-1,nt=qe?D.duration:Ie,mt=e.createBufferSource();mt.buffer=D;let rt=e.createGain();rt.gain.setValueAtTime(1e-4,Me),rt.gain.exponentialRampToValueAtTime(z.gain,Me+.003),qe||(rt.gain.setValueAtTime(z.gain,Me+nt-.006),rt.gain.exponentialRampToValueAtTime(1e-4,Me+nt)),mt.connect(rt).connect(t),rt.connect(r),mt.start(Me,0,nt+.01)})}function H(B){if(!Pe())return;let D=e.currentTime+.005,X=R[B];X&&X!=="pending"?L(D,X):(C(B,D),I(B)),f(D,.25,{f0:1800,f1:600,q:.8,gain:.3,att:.006})}function G(B={}){if(!Pe())return;let D=e.currentTime+.005;B.muffle!==!1&&(s.frequency.cancelScheduledValues(D),s.frequency.setValueAtTime(900,D),s.frequency.exponentialRampToValueAtTime(500,D+1.2));let X=e.createOscillator();X.frequency.value=3400;let ce=e.createGain();u(ce,D,.01,1.8,.06),X.connect(ce).connect(e.destination),X.start(D),X.stop(D+1.9),m(D+.35,.13,{f0:62,f1:42,gain:.45,att:.005}),m(D+.52,.15,{f0:56,f1:38,gain:.32,att:.005})}function V(){Pe()&&Ye(e.currentTime+.005,.75)}function ie(B,D=1,X=.6,ce=0){v(B+ce,{dur:1.3,f:[[0,480*D],[.08,760*D],[.35,830*D],[.8,640*D],[1.3,420*D]],gain:X,sub:0,rattle:.35,rattleHz:48,drive:14,breath:.7,breathHz:5200,jit:.07,jitRate:9,formants:[[1750,4,1],[3150,5,.9],[4700,6,.6]],hp:950,top:12500,chest:.04,att:.012})}function Y(B){if(!Pe())return;let D=e.currentTime+.005;if(B==="higher"&&(v(D+.02,{breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),x(D)),B==="metal"){let ce=_(9),Q=e.createBiquadFilter();Q.type="bandpass",Q.frequency.value=3e3,Q.Q.value=.9;let Me=e.createGain();u(Me,D,.01,1.2,2.2);let Ie=e.createGain();Ie.gain.value=0;let ge=e.createOscillator();ge.frequency.setValueAtTime(2300,D),ge.frequency.linearRampToValueAtTime(1700,D+1.2),ge.connect(Ie.gain);for(let[rt,Wt]of[[1,.5],[1.008,.4],[1.5,.25]]){let vt=e.createOscillator();vt.type="sawtooth",vt.frequency.setValueAtTime(880*rt,D),vt.frequency.exponentialRampToValueAtTime(1400*rt,D+.12),vt.frequency.exponentialRampToValueAtTime(700*rt,D+1.2);let jt=e.createGain();jt.gain.value=Wt,vt.connect(jt).connect(Ie),vt.start(D),vt.stop(D+1.2+.05)}let qe=e.createDelay(.01);qe.delayTime.value=.0023;let nt=e.createGain();nt.gain.value=.7,qe.connect(nt).connect(qe),Ie.connect(ce).connect(Q).connect(Me),Q.connect(qe);let mt=e.createGain();mt.gain.value=.35,qe.connect(mt).connect(Me),Me.connect(t),Me.connect(r),ge.start(D),ge.stop(D+1.2+.05),f(D,.9,{f0:6e3,f1:3500,q:1.5,gain:.25,att:.01}),x(D)}B==="tear"&&ie(D,1,.75),B==="overGrowl"&&(ie(D+.04,1,.6),v(D,{dur:1.4,f:[[0,90],[.2,120],[1.4,60]],gain:.55,rattle:.95,rattleHz:19,rattleHz1:30,drive:7,breath:.6,breathHz:900,formants:[[420,3,1],[800,4,.7]],chest:1,chestHz:260,top:3e3,att:.03})),B==="chorus"&&(ie(D,1,.4),ie(D,.93,.35,.03),ie(D,1.08,.35,.06),ie(D,.86,.25,.09)),B==="swell"&&(v(D,{dur:.75,f:[[0,160],[.75,620]],gain:.5,sub:0,rattle:.6,rattleHz:20,rattleHz1:50,drive:8,breath:1,breathHz:3e3,formants:[[1200,3,1],[2600,4,.8]],hp:500,top:9e3,att:.7}),f(D,.75,{f0:800,f1:6e3,q:.8,gain:.3,att:.72}),ie(D,1.05,.8,.72))}function ne(B){Pe()&&(M(B),setTimeout(()=>{H(B),setTimeout(Ae,1800)},B==="growlRoar"?520:60))}function ae(B){Pe()&&(j(B),setTimeout(Ae,2600))}function De(B,D,X){f(B,.003,{type:"highpass",f0:1200,q:.7,gain:D,att:4e-4}),f(B,.03+Math.random()*.03,{f0:X,f1:X*.8,q:10,gain:D*2.2,att:5e-4}),f(B,.012,{f0:X*.45,q:3,gain:D*.9,att:5e-4})}function Ye(B,D=1){f(B,.008,{f0:4300,q:3,gain:.7*D,att:5e-4}),m(B,.16,{f0:120,f1:48,gain:.8*D,att:.002});let X=[[.02,3,.05,.45],[.13,5,.06,.7],[.25,8,.075,1]];for(let[ce,Q,Me,Ie]of X){for(let ge=0;ge<Q;ge++){let qe=(ge/Q)**1.5;De(B+ce+qe*Me+Math.random()*.006,Ie*D*(.5+.5*Math.random())*1.15,900+Math.random()*3200)}m(B+ce,.07,{f0:95,f1:55,gain:.35*Ie*D,att:.002})}for(let ce=0;ce<45;ce++)f(B+.02+Math.random()*.4,.0015,{type:"highpass",f0:2600,q:.7,gain:(.14+.2*Math.random())*D,att:3e-4});for(let ce=0;ce<6;ce++)f(B+.03+ce*.06+Math.random()*.03,.09,{f0:380+Math.random()*500,f1:240,q:2.5,gain:.26*D,att:.01})}function j(B){if(!Pe())return;let D=e.currentTime+.005;if(Ye(D),s.frequency.cancelScheduledValues(D),s.frequency.setValueAtTime(18e3,D+.42),s.frequency.exponentialRampToValueAtTime(1400,D+.9),s.frequency.exponentialRampToValueAtTime(320,D+2.4),B==="chew")for(let X=1;X<=3;X++){let ce=D+.5*X;Ye(ce,.65-X*.08),f(ce+.12,.28,{f0:600,f1:220,q:2,gain:.2,att:.02})}B==="gulp"&&(m(D+.6,.38,{f0:300,f1:75,gain:.45,att:.02}),f(D+.6,.5,{type:"lowpass",f0:420,f1:160,q:2,gain:.25,att:.03}),m(D+1,.6,{type:"sawtooth",f0:66,f1:48,gain:.12,lp:260,am:15})),[1,2,3.2].forEach((X,ce)=>{let Q=.5-ce*.14;m(D+X,.13,{f0:62,f1:42,gain:Q,att:.005}),m(D+X+.17,.15,{f0:56,f1:38,gain:Q*.7,att:.005})})}function Ae(){if(!e)return;let B=e.currentTime;s.frequency.cancelScheduledValues(B),s.frequency.setValueAtTime(Math.max(300,s.frequency.value),B),s.frequency.exponentialRampToValueAtTime(18e3,B+.9),n.gain.cancelScheduledValues(B),n.gain.setTargetAtTime(1,B,.4)}function Pe(){return c&&h()&&(i.context||e.state==="running")}return{unlock(){if(!c)return;let B=h();B&&B.state!=="running"&&B.resume()},setEnabled(B){c=B,e&&(B?e.resume():(g(),e.suspend()))},get enabled(){return c},ambient:E,gape:b,freeze:M,pounce:H,bite:j,restore:Ae,preview:ne,previewBite:ae,cut:G,snap:V,scream:Y,roarRaw:C,prepare:I,useBuffer:N,stop:()=>e&&g()}}var Mm=location.hash==="#debug",Gn=!0,Ss=(i,e)=>Math.max(0,cf(i,e));et.lights_pars_begin=et.lights_pars_begin.replace("float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );","float distanceFalloff = 1.0 / pow( sqrt( lightDistance * lightDistance + 0.81 ), decayExponent );");var Vt=i=>document.getElementById(i),xt=(i,e,t)=>Math.max(e,Math.min(t,i)),Gt=(i,e,t)=>i+(e-i)*t,Un=i=>i*i*(3-2*i),Sm=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t),Mt=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),ht=(i,e)=>i+Math.random()*(e-i),Ot=matchMedia("(pointer: coarse)").matches,Mn=new A(-1.6,0,1.5),Zf=1.62;var BM=1.7;var j0=["\uD558\uB098","\uB458","\uC14B","\uB137","\uB2E4\uC12F","\uC5EC\uC12F","\uC77C\uACF1","\uC5EC\uB35F","\uC544\uD649","\uC5F4","\uC5F4\uD558\uB098","\uC5F4\uB458","\uC5F4\uC14B"],Ke={start:Vt("start"),startBtn:Vt("startBtn"),loadTxt:Vt("loadTxt"),sub:Vt("sub"),joy:Vt("joy"),knob:Vt("knob"),fps:Vt("fps"),hint:Vt("hint"),resume:Vt("resume"),prompt:Vt("prompt"),lampBtn:Vt("lampBtn"),raiseBtn:Vt("raiseBtn"),end:Vt("end"),again:Vt("again"),fsBtn:Vt("fsBtn"),pause:Vt("pause"),cockBtn:Vt("cockBtn"),fireBtn:Vt("fireBtn"),reloadBtn:Vt("reloadBtn")},ii;try{ii=new Tl({antialias:!1,powerPreference:"high-performance"})}catch(i){throw Ke.loadTxt.textContent="\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694.",i}ii.outputColorSpace=Is;ii.toneMapping=Jn;ii.autoClear=!1;Vt("stage").appendChild(ii.domElement);var Pi=ii.domElement,zt=new cs;zt.fog=new To(new de(.0035,.004,.0055),.009);var Te=new hn(60,16/9,.05,1200);Te.rotation.order="YXZ";var $i={uLanternPos:{value:new A},uEyeGain:{value:200},uEyeSelf:{value:0},uTime:{value:0},uEyeFall:{value:1}},Qi=`
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,OM=`
  attribute vec4 aRig; attribute vec4 aLeg;
  uniform vec4 uPose; uniform float uTail; uniform vec4 uGait;
  mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
    return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
  mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }
  mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }`,zM=`
  const vec3 N0 = vec3(0.0, 1.08, 0.58); const vec3 H0 = vec3(0.0, 1.22, 1.03); const vec3 T0 = vec3(0.0, 1.2, -0.9);
  mat3 rH = rotYP(uPose.z * aRig.y, uPose.w * aRig.y);
  mat3 rN = rotYP(uPose.x * aRig.x, uPose.y * aRig.x);
  mat3 rT = rotZ(uTail * aRig.z);
  // legs: a four-beat walk (left hind, left fore, right hind, right fore); the knee or hock folds, then the whole leg swings
  mat3 rKnee = mat3(1.0), rHip = mat3(1.0); vec3 kneeP = vec3(0.0), hipP = vec3(0.0);
  float legId = floor(aLeg.x * 255.0 / 50.0 + 0.5);
  if (legId > 0.5 && uGait.y > 0.001) {
    bool front = legId < 2.5;
    float side = (legId == 1.0 || legId == 3.0) ? 1.0 : -1.0;
    float off = legId == 1.0 ? 0.75 : (legId == 2.0 ? 0.25 : (legId == 3.0 ? 0.5 : 0.0));
    float ps = fract(uGait.x + off);
    float A = front ? 0.3 : 0.28, a, k;
    if (ps < 0.62) { a = mix(A, -A, ps / 0.62); k = 0.0; }
    else { float sw = (ps - 0.62) / 0.38; a = mix(-A, A, sw*sw*(3.0-2.0*sw)); k = sin(3.14159 * sw) * (front ? 0.95 : 0.75); }
    a *= uGait.y; k *= uGait.y;
    hipP = front ? vec3(0.17*side, 0.95, 0.43) : vec3(0.2*side, 0.95, -0.46);
    kneeP = front ? vec3(0.16*side, 0.43, 0.488) : vec3(0.17*side, 0.5, -0.736);
    rKnee = rotX(k * aLeg.z);
    rHip = rotX(-a * aLeg.y);
  }`,HM=`
  transformed = kneeP + rKnee * (transformed - kneeP);
  transformed = hipP + rHip * (transformed - hipP);
  transformed = T0 + rT * (transformed - T0);
  transformed = H0 + rH * (transformed - H0);
  transformed = N0 + rN * (transformed - N0);`;function kM(i,e,t){let n=new Si({color:16777215,roughness:.82,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new de(i*.6,i*.56,i*.48)}),s={uBody:{value:new de(i,i*.93,i*.8)},uFace:{value:new de(e,e*.93,e*.8)},uPhase:{value:t},uPose:{value:new Rt},uTail:{value:0},uGait:{value:new Rt},uEyeOff:{value:0}};return n.userData.own=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,$i,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead;
        uniform float uTime; uniform float uPhase;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        ${OM}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${zM}
        objectNormal = rN * (rH * (rT * (rHip * (rKnee * objectNormal))));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        ${HM}`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform float uEyeFall; uniform float uEyeOff; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
${Qi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { float pn = vnoise3(vObj*2.7)*0.5+0.5; float pn2 = vnoise3(vObj*9.0);
          float fm = smoothstep(0.2, 0.8, vExt.z + 0.25*vnoise3(vObj*14.0));
          float hc = vnoise3(vObj*vec3(32.0,22.0,32.0))*0.6 + vnoise3(vObj*vec3(70.0,45.0,70.0))*0.4;
          vec3 c = mix(uBody, uFace, fm) * (0.74 + 0.4*pn) * (0.93 + 0.07*pn2) * (1.0 + 0.16*hc);
          c = mix(c, c*0.45, vExt.x*0.8);
          c = mix(c, c*0.5, vExt.y*0.8);
          { float fx = abs(vHead.x), fs = vHead.y, ft = vHead.z, fc0 = vExt.z;
            float tear = (1.0 - smoothstep(0.006, 0.02, abs(fx - 0.1 + (fs - 0.2)*0.12))) * smoothstep(0.18, 0.22, fs) * (1.0 - smoothstep(0.28, 0.36, fs)) * smoothstep(-0.02, -0.06, ft);
            float muzS = smoothstep(0.36, 0.46, fs) * smoothstep(0.045, 0.08, fx) * (1.0 - vMat.y);
            float chin = smoothstep(-0.09, -0.12, ft) * smoothstep(0.3, 0.42, fs);
            float poll = (1.0 - smoothstep(-0.02, 0.06, fs)) * smoothstep(-0.03, 0.03, ft);
            c *= 1.0 - fc0 * (0.55*tear + 0.25*muzS + 0.25*chin);
            c *= 1.0 + fc0 * 0.12 * poll; }
          float mud = smoothstep(0.1, 0.6, vnoise3(vObj*vec3(6.0,11.0,6.0))*0.5+0.5) * (1.0 - smoothstep(0.55, 0.85, vObj.y));
          c = mix(c, c*0.5, mud*0.55);
          c = mix(c, c*0.3, vMat.w*0.85);
          c = mix(c, vec3(0.2,0.16,0.16), vMat.y);
          c = mix(c, vec3(0.03,0.028,0.026), vMat.z);
          c *= mix(1.0, vMat.x, 0.55);
          c = mix(c, vec3(0.008), vEye);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.35, vMat.y); roughnessFactor = mix(roughnessFactor, 0.08, vEye); roughnessFactor = mix(roughnessFactor, 0.55, vMat.z);`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        #ifdef USE_SHEEN
        material.sheenColor *= (1.0 - vMat.y) * (1.0 - vEye) * (1.0 - vMat.z);
        #endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float dl = length(vWP - uLanternPos); float fc = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), uEyeFall) + uEyeSelf * pow(fc, 4.0)) * (1.0 - uEyeOff); }`)},n.customProgramCacheKey=()=>"cow-rig-v4",n}async function VM(i){let e=await(await fetch("cows/cows.json")).json(),t=0;return Promise.all(e.map(async n=>{let s=await(await fetch(n.file)).json(),r=atob(s.data),o=new Uint8Array(r.length);for(let x=0;x<r.length;x++)o[x]=r.charCodeAt(x);let a=o.buffer,c=n.vc,l=n.ic,h=0,d=new Int16Array(a,h,c*3);h+=c*6;let u=new Int16Array(a,h,c*3);h+=c*6;let f=new Uint16Array(a,h,l);h+=l*2;let m=new Int8Array(a,h,c*3);h+=c*3;let _=new Uint8Array(a,h,c*4);h+=c*4;let p=new Uint8Array(a,h,c*4);h+=c*4;let g=new Uint8Array(a,h,c*4);h+=c*4;let y=n.leg?new Uint8Array(a,h,c*4):new Uint8Array(c*4),E=new Float32Array(c*3),b=new Float32Array(c*3);for(let x=0;x<c*3;x++)E[x]=d[x]*n.ps,b[x]=u[x]*n.hs;let v=new pt;v.setAttribute("position",new ze(E,3)),v.setAttribute("normal",new ze(new Int8Array(m),3,!0)),v.setAttribute("aMat",new ze(new Uint8Array(_),4,!0)),v.setAttribute("aExt4",new ze(new Uint8Array(p),4,!0)),v.setAttribute("aRig",new ze(new Uint8Array(g),4,!0)),v.setAttribute("aLeg",new ze(new Uint8Array(y),4,!0)),v.setAttribute("aHead",new ze(b,3)),v.setIndex(new ze(new Uint16Array(f),1)),v.boundingSphere=new Ln(new A(0,.8,0),2.2);let S=x=>{let M=new A,C=0,R=0,I=0;for(let N=0;N<c;N++)x(N)&&(M.x+=E[3*N],M.y+=E[3*N+1],M.z+=E[3*N+2],R+=g[4*N]/255,I+=g[4*N+1]/255,C++);return C?{p:M.divideScalar(C),wn:R/C,wh:I/C}:null};return v.userData.eye=S(x=>p[4*x]>128),v.userData.nose=S(x=>_[4*x]>128),i(++t/e.length),v}))}var uh=[];function bm(i,e){for(let t of uh)t.position.x=i,t.position.z=e;ia.uPC.value.set(i,e)}function GM(){let i=new Zn(400,400,8,8);i.rotateX(-Math.PI/2);let e=new Qe(i,Em());return uh.push(e),qM=e,e}function WM(){let i=re.hill,e=(re.stations[0].x+re.stations[re.stations.length-1].x)/2,t=new Zn(i.width,i.depth,140,60);t.rotateX(-Math.PI/2),t.translate(e,0,re.front.z-i.start+.2-i.depth/2);let n=t.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,cf(n.getX(s),n.getZ(s)));return t.computeVertexNormals(),new Qe(t,Em())}function Em(){let i=new fn({color:3353119,roughness:1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;
${Qi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          // Sonoran desert floor: tan gravel, pale sandy washes, dark and light pebbles
          vec3 col = mix(vec3(0.15,0.125,0.095), vec3(0.21,0.175,0.13), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float wash = smoothstep(0.6, 0.8, vnoise3(vec3(q.x*0.07, 0.0, q.z*0.22))*0.5+0.5);
          col = mix(col, vec3(0.26,0.225,0.17), wash*0.55);
          float peb = vnoise3(q*38.0)*0.5+0.5;
          col *= 0.86 + 0.26*smoothstep(0.5, 0.8, peb) - 0.2*smoothstep(0.72, 0.9, c3);
          float burnt = 1.0 * (1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${Mn.x.toFixed(2)}, ${Mn.z.toFixed(2)})))); // the campfire's scorch (no campfire by day)
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`)},i}var qM=null,wm={uHaze:{value:new de},uLift:{value:0}};function XM(){let i=new Tt,e=new Lt({fog:!1,side:Bt,uniforms:wm,vertexShader:"attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 uHaze; uniform float uLift; varying float vT; void main(){ gl_FragColor = vec4(uHaze * mix(vT, 1.0, uLift), 1.0); }"}),t=(n,s,r,o,a,c)=>{let h=[],d=[],u=[];for(let m=0;m<=420;m++){let _=-Math.PI+2*Math.PI*(m/420),p=Math.sin(_)*n,g=-Math.cos(_)*n,y=1-Math.abs(Ju(_*5,o,.7,4)),E=s+r*y*y+2.2*Ju(_*60,o+3.1,1.3,2);if(h.push(p,-4,g,p,E,g),d.push(a,c),m<420){let b=2*m;u.push(b,b+2,b+1,b+1,b+2,b+3)}}let f=new pt;return f.setAttribute("position",new it(h,3)),f.setAttribute("aT",new it(d,1)),f.setIndex(u),new Qe(f,e)};return i.add(t(190,8,30,4.2,.95,.55),t(150,3,17,9.7,.85,.12)),uh.push(i),i}var df=(i,e)=>i>re.clear.x0&&i<re.clear.x1&&e>re.clear.z0&&e<6,ti=null,Js=[],pf=0;function YM(i,e){pf=Mt(pf,e?1:0,e?1.8:.7,i),Fl.uTime.value=performance.now()/1e3,Fl.uGust.value=pf,ti&&ti.update(fe.pos.x,fe.pos.z,Te);for(let t of Js)t.update(fe.pos.x,fe.pos.z,Te)}var Qn=new A(1,0,.35).normalize(),fh=[];function ZM(i){let e=[3,7].map(n=>O0(n)),t=Xs("tumble-v1",.95);for(let n=0;n<4;n++){let s=.8+Math.random()*.5,r=new Qe(e[n%2],t);r.scale.setScalar(s),i.add(r),fh.push({mesh:r,r:.28*s,pos:new A,speed:0,k:.8+Math.random()*.4,side:Math.random()-.5,phase:Math.random()*6})}}function Tm(i,e){let t=e?(Math.random()-.5)*20:12+Math.random()*6,n=(Math.random()-.5)*24;i.pos.set(Te.position.x-Qn.x*t+Qn.z*n,i.r,Te.position.z-Qn.z*t-Qn.x*n),i.speed=0}var KM=new yt,JM=new A(Qn.z,0,-Qn.x);function $M(i,e){for(let t of fh){let n=t.pos.x-Te.position.x,s=t.pos.z-Te.position.z;(Math.hypot(n,s)>28||n*Qn.x+s*Qn.z>20)&&Tm(t,!1),t.speed=Mt(t.speed,(e?3:.12)*t.k,e?1.4:.5,i),t.pos.x+=(Qn.x+Qn.z*t.side*.2)*t.speed*i,t.pos.z+=(Qn.z-Qn.x*t.side*.2)*t.speed*i;let r=(o,a,c)=>{let l=t.pos.x-o,h=t.pos.z-a,d=Math.hypot(l,h),u=c+t.r;d<u&&d>1e-4&&(t.pos.x=o+l/d*u,t.pos.z=a+h/d*u,t.speed*=.6)};for(let o of $e)for(let a of o.blockers)r(a.x,a.z,a.r);r(Mn.x,Mn.z,.7),t.phase+=i*t.speed*2.4,t.mesh.position.set(t.pos.x,Ss(t.pos.x,t.pos.z)+t.r+Math.abs(Math.sin(t.phase))*.22*Math.min(1,t.speed/2.5),t.pos.z),t.mesh.quaternion.premultiply(KM.setFromAxisAngle(JM,t.speed*i/t.r))}}function jM(){let i=new Lt({side:Yt,depthWrite:!1,fog:!1,uniforms:{uHor:{value:new de(.028,.03,.038)},uZen:{value:new de(.002,.0022,.003)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${Qi}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`}),e=new Qe(new Gi(900,32,16),i);return uh.push(e),e}var Rf={uTime:{value:0}};function QM(){let i=new Tt;i.position.copy(Mn);let e=new fn({color:5064771,roughness:1}),t=new No(.11,0);for(let f=0;f<12;f++){let m=f/12*Math.PI*2+ht(-.1,.1),_=ht(.48,.56),p=new Qe(t,e);p.position.set(Math.cos(m)*_,.04,Math.sin(m)*_),p.scale.set(ht(.8,1.4),ht(.6,1),ht(.8,1.3)),p.rotation.set(ht(0,3),ht(0,3),ht(0,3)),i.add(p)}let n=new fn({color:2365198,roughness:1,emissive:new de(.35,.08,.01),emissiveIntensity:.5}),s=new Vi(.045,.06,.75,7);for(let f=0;f<5;f++){let m=new Qe(s,n),_=f/5*Math.PI*2;m.position.set(Math.cos(_)*.14,.17,Math.sin(_)*.14),m.rotation.set(0,-_,0),m.rotateZ(1.15),i.add(m)}let r=new Lt({transparent:!0,depthWrite:!1,blending:Kn,side:Bt,uniforms:Rf,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv; ${Qi}
      void main(){ vec2 p = vUv;
        float n = vnoise3(vec3(p.x*4.0, p.y*3.0 - uTime*2.4, uTime*0.6))*0.5+0.5;
        float n2 = vnoise3(vec3(p.x*9.0, p.y*7.0 - uTime*3.8, 1.7 + uTime*0.3))*0.5+0.5;
        float w = 1.0 - abs(p.x - 0.5)*2.0;
        float shape = w * w * (1.0 - p.y*0.85);
        float f = smoothstep(0.18, 0.62, shape * (n*0.75 + n2*0.5) * 1.5 - p.y*0.35);
        vec3 col = mix(vec3(1.0,0.22,0.02), vec3(1.0,0.72,0.28), smoothstep(0.3, 0.9, f)) * f * 6.0;
        gl_FragColor = vec4(col, f); }`}),o=new Zn(.62,.95);o.translate(0,.47,0);for(let f=0;f<3;f++){let m=new Qe(o,r);m.rotation.y=f/3*Math.PI,m.position.y=.05,i.add(m)}let a=70,c=new Float32Array(a*3),l=new Float32Array(a);for(let f=0;f<a;f++)l[f]=Math.random();let h=new pt;h.setAttribute("position",new ze(c,3)),h.setAttribute("aSeed",new ze(l,1));let d=new Lt({transparent:!0,depthWrite:!1,blending:Kn,uniforms:Rf,vertexShader:`uniform float uTime; attribute float aSeed; varying float vA;
      void main(){ float t = fract(uTime*0.35 + aSeed); float a = aSeed*43.0;
        vec3 p = vec3(sin(a + t*3.0)*0.25*t, t*2.4, cos(a*1.7 + t*2.0)*0.25*t);
        vA = (1.0 - t) * step(0.0, t);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 3.0 * (1.0 - t*0.6) * 6.0 / max(1.0, -mv.z); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float m = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0,0.45,0.1)*4.0*vA*m, vA*m); }"}),u=new Po(h,d);return u.frustumCulled=!1,i.add(u),i}var eS={uniforms:{tDiffuse:{value:null},uRes:{value:new he(960,540)},uCount:{value:0},uBrush:{value:1.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uBrush; varying vec2 vUv;
    // generalized Kuwahara with polynomial sector weights (8 sectors): soft, painterly, no blocks
    vec3 kuwahara(vec2 uv){
      const int R = 3;
      const float zeta = 2.0 / 3.0;
      const float sinZ = 0.5480, cosZ = 0.8365;
      float eta = (zeta + cosZ) / (sinZ * sinZ);
      vec2 tx = uBrush / uRes;
      vec4 m[8]; vec3 s[8];
      for (int k = 0; k < 8; k++) { m[k] = vec4(0.0); s[k] = vec3(0.0); }
      for (int j = -R; j <= R; j++) {
        for (int i = -R; i <= R; i++) {
          vec2 v = vec2(float(i), float(j)) / float(R);
          if (dot(v, v) > 1.0) continue;
          vec3 c = texture2D(tDiffuse, uv + vec2(float(i), float(j)) * tx).rgb;
          c = c / (1.0 + c);
          float w[8]; float sum = 0.0; float z;
          float vxx = zeta - eta * v.x * v.x, vyy = zeta - eta * v.y * v.y;
          z = max(0.0, v.y + vxx); w[0] = z*z; sum += w[0];
          z = max(0.0, -v.x + vyy); w[2] = z*z; sum += w[2];
          z = max(0.0, -v.y + vxx); w[4] = z*z; sum += w[4];
          z = max(0.0, v.x + vyy); w[6] = z*z; sum += w[6];
          vec2 r = 0.70710678 * vec2(v.x - v.y, v.x + v.y);
          vxx = zeta - eta * r.x * r.x; vyy = zeta - eta * r.y * r.y;
          z = max(0.0, r.y + vxx); w[1] = z*z; sum += w[1];
          z = max(0.0, -r.x + vyy); w[3] = z*z; sum += w[3];
          z = max(0.0, -r.y + vxx); w[5] = z*z; sum += w[5];
          z = max(0.0, r.x + vyy); w[7] = z*z; sum += w[7];
          float g = exp(-3.125 * dot(v, v)) / max(sum, 1e-5);
          for (int k = 0; k < 8; k++) { float wk = w[k] * g; m[k] += vec4(c * wk, wk); s[k] += c * c * wk; }
        }
      }
      float sig[8]; float minSig = 1e9;
      for (int k = 0; k < 8; k++) {
        vec3 mk = m[k].rgb / max(m[k].w, 1e-5);
        vec3 sk = abs(s[k] / max(m[k].w, 1e-5) - mk * mk);
        sig[k] = sk.r + sk.g + sk.b; minSig = min(minSig, sig[k]);
      }
      vec4 o = vec4(0.0);
      for (int k = 0; k < 8; k++) {
        vec3 mk = m[k].rgb / max(m[k].w, 1e-5);
        float ratio = sig[k] / (minSig + 2e-4);
        float wk = 1.0 / (1.0 + ratio * ratio * ratio * ratio);
        o += vec4(mk * wk, wk);
      }
      vec3 c = clamp(o.rgb / max(o.w, 1e-5), 0.0, 0.995);
      return c / (1.0 - c);
    }
    void main(){
      vec3 src = texture2D(tDiffuse, vUv).rgb;
      float k = smoothstep(0.0, 1.0, uCount);
      if (k > 0.999) { gl_FragColor = vec4(src, 1.0); return; }
      vec3 kw = kuwahara(vUv) + max(src - 2.5, 0.0); // keep tiny very bright things (eyes, embers) crisp
      gl_FragColor = vec4(mix(kw, src, k), 1.0);
    }`},tS={uniforms:{tDiffuse:{value:null},uRes:{value:new he(960,540)},uCount:{value:0},uExp:{value:.26},uDesat:{value:0},uSeed:{value:1},uFade:{value:0},uHurt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uExp, uDesat, uSeed, uFade, uHurt; varying vec2 vUv;
    vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    // the counting look: the picture drops to a low, smeared resolution
    vec3 lowLook(vec2 uv){
      float lowMin = mix(min(uRes.x, uRes.y), 300.0, uCount);
      vec2 lr = uRes * (lowMin / min(uRes.x, uRes.y));
      vec2 q = (floor(uv * lr) + 0.5) / lr;
      vec2 tx = 0.8 / lr;
      return (texture2D(tDiffuse, q).rgb * 2.0 + texture2D(tDiffuse, q + vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, q - vec2(tx.x, 0.0)).rgb + texture2D(tDiffuse, q + vec2(0.0, tx.y)).rgb + texture2D(tDiffuse, q - vec2(0.0, tx.y)).rgb) / 6.0;
    }
    void main(){
      float k = smoothstep(0.0, 1.0, uCount);
      vec3 c = k > 0.001 ? lowLook(vUv) : texture2D(tDiffuse, vUv).rgb;
      c *= uExp * mix(1.0, 0.81, k);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 graded = c * vec3(1.03, 0.98, 0.92) + vec3(0.0, 0.0006, 0.0018) * (1.0 - smoothstep(0.0, 0.05, l));
      c = mix(graded, vec3(l) * vec3(1.0, 0.985, 0.96), k * 0.95);
      c = mix(c, vec3(l) * vec3(0.95, 0.98, 1.04), uDesat * (1.0 - k * 0.95));
      c = aces(c);
      c = mix(c, c*c*(3.0-2.0*c), 0.25 + 0.1*k);
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      c *= mix(1.0, smoothstep(1.15, 0.25, length(q)), 0.35 + 0.2*k + 0.25*uDesat);
      c *= 1.0 - uHurt * smoothstep(0.3, 0.95, length(q)); // hurt: the edges of sight go dark
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * mix(uRes, uRes*0.5, k));
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * max(mix(0.014, 0.06, k), mix(0.014, 0.05, uDesat)) * (0.45 + 0.9*(1.0 - lum));
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`},Cf=class{init(){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9,this.master.connect(t.destination);let n=t.sampleRate*2,s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let p=0;p<n;p++)r[p]=Math.random()*2-1;this.noise=s;let o=this.loopNoise(),a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.6;let c=t.createGain();c.gain.value=.05,o.connect(a).connect(c).connect(this.master);let l=t.createOscillator(),h=t.createGain();l.frequency.value=.07,h.gain.value=.035,l.connect(h).connect(c.gain),l.start();let d=t.createOscillator(),u=t.createGain();d.frequency.value=.045,u.gain.value=160,d.connect(u).connect(a.frequency),d.start(),this.crickets=t.createGain(),this.crickets.gain.value=1,this.crickets.connect(this.master),this.cricketOn=!0;for(let p=0;p<6;p++)this.cricketLoop(ht(-.9,.9),ht(4e3,5200),ht(.4,2));this.fireP=this.panner(Mn.x,.4,Mn.z,1.2);let f=this.loopNoise(),m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=260;let _=t.createGain();_.gain.value=.22,f.connect(m).connect(_).connect(this.fireP),this.crackleLoop(),this.breaths=[0,1,2].map(()=>{let p=this.panner(0,1,-4,1),g=this.loopNoise(),y=t.createBiquadFilter();y.type="bandpass",y.frequency.value=520,y.Q.value=.9;let E=t.createGain();return E.gain.value=0,g.connect(y).connect(E).connect(p),{p,g:E}})}loopNoise(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.loopStart=Math.random(),e.start(0,Math.random()*1.5),e}panner(e,t,n,s){let r=this.ctx.createPanner();return r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=s,r.rolloffFactor=1.3,this.setPos(r,e,t,n),r.connect(this.master),r}setPos(e,t,n,s){e.positionX?(e.positionX.value=t,e.positionY.value=n,e.positionZ.value=s):e.setPosition(t,n,s)}cricketLoop(e,t,n){let s=()=>{if(this.ctx){if(this.cricketOn){let r=this.ctx.currentTime,o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createStereoPanner();o.frequency.value=t,c.pan.value=e,a.gain.value=0;let l=2+Math.floor(Math.random()*3);for(let h=0;h<l;h++){let d=r+h*.055;a.gain.setValueAtTime(0,d),a.gain.linearRampToValueAtTime(.012,d+.012),a.gain.linearRampToValueAtTime(0,d+.04)}o.connect(a).connect(c).connect(this.crickets),o.start(r),o.stop(r+l*.055+.05)}setTimeout(s,ht(350,1300))}};setTimeout(s,n*1e3)}crackleLoop(){let e=()=>{if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=this.noise,s.type="highpass",s.frequency.value=ht(1200,3500),r.gain.setValueAtTime(ht(.15,.5),t),r.gain.exponentialRampToValueAtTime(.001,t+ht(.02,.07)),n.connect(s).connect(r).connect(this.fireP),n.start(t,Math.random()*1.5,.1),setTimeout(e,Math.random()<.2?ht(20,60):ht(80,420))};e()}step(){if(!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noise,n.type="bandpass",n.frequency.value=ht(1800,3200),n.Q.value=.8,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(ht(.05,.08),e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.16),t.connect(n).connect(s).connect(this.master),t.start(e,Math.random()*1.5,.2)}heart(e){if(!this.ctx||e<=0)return;let t=this.ctx.currentTime;for(let[n,s]of[[0,1],[.2,.7]]){let r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=this.ctx.createBiquadFilter();r.type="sine",r.frequency.setValueAtTime(62,t+n),r.frequency.exponentialRampToValueAtTime(38,t+n+.14),a.type="lowpass",a.frequency.value=140,o.gain.setValueAtTime(1e-4,t+n),o.gain.exponentialRampToValueAtTime(e*s,t+n+.012),o.gain.exponentialRampToValueAtTime(1e-4,t+n+.18),r.connect(a).connect(o).connect(this.master),r.start(t+n),r.stop(t+n+.2)}}silenceCrickets(){if(!this.ctx)return;this.cricketOn=!1;let e=this.ctx.currentTime;this.crickets.gain.cancelScheduledValues(e),this.crickets.gain.setTargetAtTime(0,e,.05)}update(e,t,n,s){if(!this.ctx)return;let r=this.ctx.listener;r.positionX?(r.positionX.value=e.x,r.positionY.value=e.y,r.positionZ.value=e.z,r.forwardX.value=t.x,r.forwardY.value=t.y,r.forwardZ.value=t.z,r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(e.x,e.y,e.z),r.setOrientation(t.x,t.y,t.z,0,1,0)),n.map(a=>[a,a.mesh.position.distanceToSquared(e)]).sort((a,c)=>a[1]-c[1]).slice(0,3).forEach(([a],c)=>{let l=this.breaths[c],h=a.headWorld;this.setPos(l.p,h.x,h.y,h.z);let d=Math.sin(s*1.3+a.phase);l.g.gain.value=.05*Math.max(0,d)**3})}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}},Pf=class extends Cf{init(){if(super.init(),!this.ctx)return;let e=this.ctx;this.hiss=e.createGain(),this.hiss.gain.value=0;let t=this.loopNoise(),n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.5,t.connect(n).connect(this.hiss).connect(this.master)}burst(e,t,n,s,r,o=.005){if(!this.ctx)return;let a=this.ctx.currentTime,c=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();return c.buffer=this.noise,l.type=e,l.frequency.value=t,l.Q.value=n,h.gain.setValueAtTime(0,a),h.gain.linearRampToValueAtTime(s,a+o),h.gain.exponentialRampToValueAtTime(8e-4,a+r),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()*1.5,r+.1),{f:l,t:a}}gust(){if(!this.ctx)return;let e=this.burst("bandpass",420,.7,.16,2.4,.7);e&&(e.f.frequency.setValueAtTime(300,e.t),e.f.frequency.linearRampToValueAtTime(820,e.t+1.2),e.f.frequency.linearRampToValueAtTime(380,e.t+2.4))}click(){if(this.burst("highpass",3200,.7,.12,.03),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=1100,n.gain.setValueAtTime(.04,e),n.gain.exponentialRampToValueAtTime(5e-4,e+.04),t.connect(n).connect(this.master),t.start(e),t.stop(e+.05)}puff(){this.burst("lowpass",500,.5,.18,.22,.01)}whoosh(){let e=this.burst("bandpass",400,.9,.22,.7,.05);e&&e.f.frequency.exponentialRampToValueAtTime(1800,e.t+.45)}creak(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth";let o=ht(1300,1700);n.frequency.setValueAtTime(o,t),n.frequency.linearRampToValueAtTime(o*ht(1.1,1.3),t+.09),s.type="bandpass",s.frequency.value=2400,s.Q.value=6,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.012*e,t+.02),r.gain.exponentialRampToValueAtTime(3e-4,t+.12),n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+.14)}sputter(){this.burst("highpass",ht(1500,3e3),.8,.05,.04)}tick(e,t,n){if(!this.ctx)return;let s=this.ctx.currentTime+e,r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=this.noise,o.type="bandpass",o.frequency.value=t,o.Q.value=3,a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(n,s+.002),a.gain.exponentialRampToValueAtTime(5e-4,s+.035),r.connect(o).connect(a).connect(this.master),r.start(s,Math.random()*1.5,.05)}cock(){[[0,3800,.05],[.05,3400,.06],[.11,3e3,.07],[.2,2200,.14]].forEach(([e,t,n])=>this.tick(e,t,n))}dry(){this.tick(0,1800,.2),this.tick(.004,4200,.08)}gunshot(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();n.buffer=this.noise,s.type="lowpass",s.frequency.setValueAtTime(9e3,t),s.frequency.exponentialRampToValueAtTime(380,t+.3),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(1,t+.002),r.gain.exponentialRampToValueAtTime(.001,t+.7),n.connect(s).connect(r).connect(this.master),n.start(t,Math.random()*1.5,.8);let o=e.createOscillator(),a=e.createGain();o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(36,t+.2),a.gain.setValueAtTime(.8,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),o.connect(a).connect(this.master),o.start(t),o.stop(t+.34);for(let[c,l,h]of[[.42,.2,1700],[.78,.13,1200],[1.25,.085,850],[1.9,.05,600]]){let d=e.createBufferSource(),u=e.createBiquadFilter(),f=e.createGain();d.buffer=this.noise,u.type="lowpass",u.frequency.value=h,f.gain.setValueAtTime(0,t+c),f.gain.linearRampToValueAtTime(l,t+c+.03),f.gain.exponentialRampToValueAtTime(6e-4,t+c+1.1),d.connect(u).connect(f).connect(this.master),d.start(t+c,Math.random()*1.5,1.2)}}thud(e=.5){if(this.burst("lowpass",160,.7,e,.45,.004),!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.setValueAtTime(70,t),n.frequency.exponentialRampToValueAtTime(30,t+.25),s.gain.setValueAtTime(e*.8,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(s).connect(this.master),n.start(t),n.stop(t+.32)}setHiss(e){this.hiss&&(this.hiss.gain.value=.006*e)}},Pt=new Pf,er=new cs,Ci=new hn(70,16/9,.01,10),tr=.85,Rn=-1,Vn=new Tt;Vn.scale.setScalar(tr);er.add(Vn);var no=new Tt;Vn.add(no);var Am=new A(0,-.248,0),ca={uTime:{value:0},uLevel:{value:1},uBend:{value:0}};function Q0(i,e,t){let n=new fn({color:i,metalness:e,roughness:t,fog:!1});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Qi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { float n = vnoise3(vLP*90.0)*0.5+0.5; float n2 = vnoise3(vLP*21.0)*0.5+0.5;
          float wear = smoothstep(0.62, 0.8, n*0.6 + n2*0.5);
          diffuseColor.rgb = mix(diffuseColor.rgb * (0.8 + 0.35*n2), vec3(0.32,0.2,0.12), smoothstep(0.55, 0.9, n2)*0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55,0.52,0.48), wear*0.5); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*60.0))*0.15, 0.05, 1.0);`)},n}function Wr(i,e,t=40){let n=new us(i.map(([s,r])=>new he(s,r)),t);return n.computeVertexNormals(),new Qe(n,e)}function Wl(i,e,t,n=48,s=!1){let r=new Cr(i.map(o=>new A(...o)),s);return new Qe(new Bo(r,n,e,8,s),t)}var If,Yr,Xr;function nS(){let i=Q0(1907481,.55,.5),e=Q0(11043908,1,.32),t=new fn({color:3810838,roughness:.75,fog:!1});If=new Si({color:16773852,roughness:.06,metalness:0,transparent:!0,opacity:.2,depthWrite:!1,side:Bt,emissive:new de(1,.55,.2),emissiveIntensity:0,fog:!1,clearcoat:1,clearcoatRoughness:.05});let n=no;n.add(Wr([[0,-.34],[.066,-.34],[.071,-.336],[.074,-.322],[.072,-.3],[.064,-.285],[.04,-.279],[0,-.278]],i)),n.add(Wr([[0,-.28],[.03,-.28],[.031,-.27],[.028,-.262],[.012,-.258],[0,-.258]],e,28));let s=new Qe(new Vi(.009,.009,.006,16),e);s.rotation.z=Math.PI/2,s.position.set(.04,-.268,0),n.add(s);let r=new Qe(new Vi(.0025,.0025,.012,8),e);r.rotation.z=Math.PI/2,r.position.set(.033,-.268,0),n.add(r);let o=Wr([[.032,-.265],[.05,-.25],[.058,-.222],[.056,-.185],[.046,-.158],[.036,-.142]],If,40);o.renderOrder=2,n.add(o),n.add(Wr([[0,-.143],[.045,-.143],[.047,-.138],[.045,-.131],[0,-.13]],i,32)),n.add(Wr([[0,-.132],[.06,-.132],[.065,-.122],[.062,-.104],[.05,-.088],[.022,-.08],[.012,-.076],[0,-.075]],i,40)),n.add(Wr([[0,-.08],[.012,-.08],[.013,-.072],[.008,-.066],[0,-.065]],i,20));for(let _ of[-1,1])n.add(Wl([[_*.066,-.29],[_*.077,-.25],[_*.078,-.2],[_*.072,-.15],[_*.064,-.118]],.0075,i,32));for(let _=0;_<4;_++){let p=Math.PI/4+_*Math.PI/2,g=Math.cos(p),y=Math.sin(p),E=[[.04,-.262],[.058,-.248],[.064,-.222],[.062,-.185],[.052,-.158],[.042,-.146]];n.add(Wl(E.map(([b,v])=>[g*b,v,y*b]),.0016,i,24))}for(let[_,p]of[[-.236,.0635],[-.18,.0605]]){let g=[];for(let y=0;y<24;y++){let E=y/24*Math.PI*2;g.push([Math.cos(E)*p,_,Math.sin(E)*p])}n.add(Wl(g,.0017,i,64,!0))}let a=[];for(let _=0;_<=24;_++){let p=_/24*Math.PI;a.push([Math.cos(p)*.064,-.112+Math.sin(p)*.112,0])}n.add(Wl(a,.0024,i,48));let c=new Qe(new Vi(.0105,.0105,.056,14),t);c.rotation.z=Math.PI/2,n.add(c);let l=new Lt({transparent:!0,depthWrite:!1,blending:Kn,side:Bt,uniforms:ca,fog:!1,vertexShader:"uniform float uBend; uniform float uTime; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; p.x += uBend * (uv.y*uv.y) * 0.012 + sin(uTime*13.0 + uv.y*6.0)*0.0012*uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:`uniform float uTime; uniform float uLevel; varying vec2 vUv; ${Qi}
      void main(){ vec2 p = vUv - vec2(0.5, 0.0);
        float h = 0.25 + 0.75*uLevel;
        float n = vnoise3(vec3(p.x*6.0, vUv.y*4.0 - uTime*3.0, uTime*0.7))*0.5+0.5;
        float w = (0.5 - abs(p.x)*2.0/max(0.15, 1.0 - vUv.y/h*0.9)) * 2.0;
        float body = smoothstep(0.0, 0.25, w) * smoothstep(h, h*0.55, vUv.y + n*0.12) * smoothstep(0.0, 0.08, vUv.y);
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.86,0.55), smoothstep(0.2, 0.9, body)) * body * 9.0 * uLevel;
        col += vec3(0.25,0.35,1.0) * smoothstep(0.12, 0.0, vUv.y) * smoothstep(0.0, 0.3, w) * 1.5 * uLevel;
        gl_FragColor = vec4(col, body); }`}),h=new Zn(.02,.05);h.translate(0,.025,0),Yr=new Tt;for(let _=0;_<3;_++){let p=new Qe(h,l);p.rotation.y=_/3*Math.PI,p.renderOrder=3,Yr.add(p)}Yr.position.set(0,-.258,0),n.add(Yr);let d=document.createElement("canvas");d.width=d.height=64;let u=d.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,"rgba(255,255,255,0.5)"),f.addColorStop(.55,"rgba(255,255,255,0.12)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let m=new Hi({map:new Us(d),color:new de(1,.55,.2),transparent:!0,blending:Kn,depthWrite:!1,opacity:0,fog:!1});Xr=new ls(m),Xr.scale.set(.1,.1,1),Xr.position.copy(Am),Xr.renderOrder=4,n.add(Xr)}function Rm(){let i=new Si({color:16777215,roughness:.62,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new de(.26,.2,.14),fog:!1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP;
${Qi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.34, 0.23, 0.135);
          float g1 = vnoise3(vLP*420.0)*0.5+0.5, g2 = vnoise3(vLP*90.0)*0.5+0.5;
          c *= (0.8 + 0.3*g2) * (0.9 + 0.14*g1);
          float dirt = smoothstep(0.55, 0.85, vnoise3(vLP*48.0 + 3.1)*0.5+0.5);
          c = mix(c, c*vec3(0.55, 0.5, 0.46), dirt*0.6);
          c *= mix(1.0, vAtt.x, 0.85);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*140.0))*0.1, 0.4, 0.85);`)},i}function iS(){let i=new Si({color:16777215,roughness:.95,metalness:0,sheen:1,sheenRoughness:.7,sheenColor:new de(.075,.07,.068),side:Bt,fog:!1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Qi}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { float ang = atan(position.z, position.x);
          float bunch = 1.0 + 1.3*exp(-max(position.y - 0.02, 0.0)*28.0); // cloth bunches up just behind the hem
          float fold = (0.0024*sin(position.y*85.0 + sin(position.y*21.0)*2.0 + ang*1.5) + 0.0016*vnoise3(position*38.0)) * bunch;
          transformed += normal * fold * smoothstep(0.012, 0.03, position.y); }
        vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Qi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.05, 0.043, 0.038);
          c *= 0.8 + 0.4*(vnoise3(vLP*300.0)*0.5+0.5);
          c *= 0.7 + 0.3*smoothstep(-0.012, 0.004, vLP.y); // the inside of the hem
          diffuseColor.rgb = c; }`)},i}var sS={wristLocal:new A(.0208*Rn,.0162,.141),wristAxis:new A(.3384*Rn,-.3644,.8676),shoulder:new A(.26*Rn,-.3,.02),fore:.26*tr,upper:.29*tr,pole:new A(.75*Rn,-.65,.1).normalize()},rS={wristLocal:new A(.0277,-.1049,.1348),wristAxis:new A(.2376,-.329,.9137),shoulder:new A(.24,-.31,.04),fore:.26*tr,upper:.29*tr,pole:new A(.75,-.65,.1).normalize()},ji=null,Lf=null;function oS(){ji=Cm(sS,Vn)}function Cm(i,e){let t={P:i,pivot:e,root:new Tt,W:new A,E:new A,f:new A,u:new A};er.add(t.root);let n=t,s=iS(),r=.26+.03,o=[[.0355,-.0115],[.041,-.0135],[.0448,-.0095],[.0462,-.002],[.0456,.008],[.044,.015]];for(let h=.022;h<=r+1e-6;h+=.007)o.push([.0438+.008*(h/r),h]);let a=new us(o.map(([h,d])=>new he(h,d)),36);a.scale(1.08,1,1),n.fore=new Qe(a,s),n.elbow=new Qe(new Gi(.051,28,18),s);let c=.29+.18,l=new Vi(.06,.052,c,28,24,!0);l.translate(0,c/2,0),n.up=new Qe(l,s);for(let h of[n.fore,n.elbow,n.up])h.scale.setScalar(tr),n.root.add(h);return t}var qr=new A,ei=new A,Zr=new A,An=new A,Kr=new ct,ql=new yt,em=new yt;function Df(i){let e=i.P,t=i.pivot;i.W.copy(e.wristLocal),t.localToWorld(i.W),qr.subVectors(e.shoulder,i.W);let n=qr.length();qr.divideScalar(n);let s=e.fore,r=e.upper;n=xt(n,Math.abs(s-r)+.001,s+r-.001);let o=(s*s-r*r+n*n)/(2*n),a=Math.sqrt(Math.max(0,s*s-o*o));ei.copy(e.pole).addScaledVector(qr,-e.pole.dot(qr)).normalize(),i.E.copy(i.W).addScaledVector(qr,o).addScaledVector(ei,a),i.f.subVectors(i.E,i.W).normalize(),i.u.subVectors(e.shoulder,i.E).normalize()}var tm=new A;function aS(i,e,t){let n=i.P,s=i.pivot;for(let r=0;r<2;r++)Df(i),An.copy(n.wristAxis).transformDirection(s.matrixWorld),ql.setFromUnitVectors(An,i.f),em.identity().slerp(ql,e),s.quaternion.premultiply(em),An.set(1,0,0).applyQuaternion(s.quaternion),ei.copy(An).addScaledVector(t,-An.dot(t)).normalize(),ql.setFromUnitVectors(An,ei),s.quaternion.premultiply(ql),s.updateMatrixWorld(!0);Df(i)}function Pm(i){let e=i.P,t=i.pivot;An.set(1,0,0).transformDirection(t.matrixWorld),ei.copy(An).addScaledVector(i.f,-An.dot(i.f)).normalize(),Zr.crossVectors(ei,i.f),Kr.makeBasis(ei,i.f,Zr),i.fore.quaternion.setFromRotationMatrix(Kr),i.fore.position.copy(i.W),i.elbow.position.copy(i.E),An.copy(ei).addScaledVector(i.u,-ei.dot(i.u)).normalize(),Zr.crossVectors(An,i.u),Kr.makeBasis(An,i.u,Zr),i.up.quaternion.setFromRotationMatrix(Kr),i.up.position.copy(i.E)}function Nf(i,e){let t=atob(i.data),n=new Uint8Array(t.length);for(let p=0;p<t.length;p++)n[p]=t.charCodeAt(p);let s=n.buffer,r=i.vc,o=i.ic,a=0,c;i.i32&&(c=new Uint32Array(s,a,o),a+=o*4);let l=new Int16Array(s,a,r*3);a+=r*6,i.i32||(c=new Uint16Array(s,a,o),a+=o*2);let h=new Int8Array(s,a,r*3);a+=r*3;let d=new Uint8Array(s,a,r*2),u=new Float32Array(r*3);for(let p=0;p<r*3;p++)u[p]=l[p]*i.ps;let f=new Int8Array(h),m=i.i32?new Uint32Array(c):new Uint16Array(c);if(e){for(let p=0;p<r;p++)u[3*p]=-u[3*p],f[3*p]=-f[3*p];for(let p=0;p<m.length;p+=3){let g=m[p+1];m[p+1]=m[p+2],m[p+2]=g}}let _=new pt;return _.setAttribute("position",new ze(u,3)),_.setAttribute("normal",new ze(f,3,!0)),_.setAttribute("aAtt",new ze(new Uint8Array(d),2,!0)),_.setIndex(new ze(m,1)),_.computeBoundingSphere(),_}async function cS(){let i=await(await fetch("hand.json")).json();Vn.add(new Qe(Nf(i,Rn<0),Rm()))}var yn=new Tt;yn.scale.setScalar(tr);var lt={t:0,kick:9,thumb:0,aim:0,shots:0,reload:0},sh=null,tt=null,Jr=null,Ri=null,rh=null,ma=null,Im=[],ga=-.2311,$r=C0(()=>Pt.ctx||null,()=>Pt.master),dh={click:(i,e)=>$r.click(i,e),shot:()=>xS(),dry:()=>{Pt.dry(),HS()},slide:()=>$r.slide(),drop:()=>$r.drop(rf),insert:()=>$r.insert()},lS=new A(.02,-.12,-.28),hS=new yt().setFromRotationMatrix((()=>{let i=new A(0,.97,.25).normalize(),e=new A(.8,-.1,.6);return e.addScaledVector(i,-e.dot(i)).normalize(),new ct().makeBasis(i,new A().crossVectors(e,i),e)})()),Qr={yaw:0,roll:.18,aimD:5},Lm=new A(.14,-.11,-.29),nm=new ct,fi=new A,uS=new yt,fS=new A(0,1,0);function Dm(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);if(n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),i){t.globalCompositeOperation="lighter",t.fillStyle="rgba(255,255,255,0.5)";for(let s=0;s<7;s++)t.save(),t.translate(64,64),t.rotate(s/7*Math.PI*2+Math.random()*.4),t.beginPath(),t.moveTo(0,-5),t.lineTo(60,0),t.lineTo(0,5),t.fill(),t.restore()}return new Us(e)}function dS(){er.add(yn),Ri=new ls(new Hi({map:Dm(!0),color:new de(1,.8,.5),blending:Kn,transparent:!0,depthWrite:!1,fog:!1})),Ri.position.set(0,0,ga-.035),Ri.scale.setScalar(.16),Ri.visible=!1,Ri.renderOrder=5,yn.add(Ri),rh=new bi(new de(1,.75,.45),0,2.5,2),er.add(rh),ma=new bi(new de(1,.8,.55),0,45,1.5),zt.add(ma),Lf=Cm(rS,yn)}async function pS(){let[i,e,t]=await Promise.all([...["gunhand.json","gunthumb.json"].map(async o=>(await fetch(o)).json()),w0("revolver/colt75.json")]);tt=t,yn.add(tt.group),ga=tt.muzzle.z,Ri.position.z=ga-.035;let n=E0(ii,["night"]).night,s=new Set;tt.group.traverse(o=>{o.material&&s.add(o.material)});for(let o of s)o.envMap=n,o.needsUpdate=!0;Im=[...s];let r=Rm();yn.add(new Qe(Nf(i,!1),r)),Jr=new Tt,Jr.position.fromArray(e.origin),yn.add(Jr),Jr.add(new Qe(Nf(e,!1),r))}function Ma(){an&&Gn&&tt&&nf(tt,dh)&&(lt.t=0)}function ph(){an&&Gn&&tt&&tt.state.cocked&&A0(tt,dh)&&(lt.t=0)}function xa(){an&&Gn&&tt&&ef(tt,dh)&&(lt.t=0)}var mS=i=>i<.025?i/.025:Math.exp(-(i-.025)/.11)*(1+.15*Math.sin((i-.025)*30)*Math.exp(-(i-.025)/.05));function gS(i,e){if(!tt)return;lt.t+=i,lt.kick+=i,R0(tt,i,dh);let t=tt.state.anim,n=t?.type==="cock";lt.thumb=Mt(lt.thumb,n&&t.t<.27?1:0,n?22:9,i),lt.aim=Mt(lt.aim,!t&&!tt.state.cocked&&lt.t>2.5?0:1,4,i),lt.reload=Mt(lt.reload,t?.type==="reload"?1:0,6,i);for(let c of Im)c.envMapIntensity=.12+.88*oh.intensity;Jr&&Jr.rotation.set(.55*lt.thumb,-.25*lt.thumb,.35*lt.thumb);let s=mS(lt.kick),r=Yf.copy(Lm);r.y+=.02*lt.aim-.012*(1-lt.aim)+.014*s,r.z+=.04*s,r.x-=_s*.45,r.y+=da*.45;let o=Cn<re.hp?Gt(1,re.hurt.shake[Math.min(Cn,re.hurt.shake.length-1)],jr):1;if(r.x+=Math.sin(e*.31+1)*.0012+Math.sin(e*9.7)*Math.sin(e*5.3)*5e-4*o,r.y+=Math.sin(e*11.3+.7)*Math.sin(e*6.1)*5e-4*(o-1),r.y+=Math.sin(e*.27+2)*.0012+Math.sin(e*1.3)*8e-4,fi.set(0,-.7*(1-lt.aim),-Qr.aimD),lt.pointT=(lt.pointT??9)+i,lt.pointK=lt.pointT<re.gun.point?lt.pointK??0:Mt(lt.pointK??0,0,4,i),lt.pointK>.001&&fi.lerp(km,lt.pointK),nm.lookAt(r,fi,fS),yn.quaternion.setFromRotationMatrix(nm),yn.quaternion.multiply(uS.setFromEuler(tb.set(.42*s-da*.6,Qr.yaw+_s*.5,Qr.roll-_s*.4))),yn.position.copy(r),lt.reload>.001){let c=lt.reload*lt.reload*(3-2*lt.reload);yn.position.lerp(lS,c),yn.quaternion.slerp(hS,c)}yn.updateMatrixWorld(!0),Df(Lf),Pm(Lf);let a=Math.max(0,1-lt.kick/.06);Ri.visible=a>0,Ri.material.rotation=lt.shots*1.7,Ri.scale.setScalar(.12+.08*a),fi.set(0,0,ga-.04),yn.localToWorld(fi),rh.position.copy(fi),rh.intensity=30*a,ma.position.copy(fi).applyQuaternion(Te.quaternion).add(Te.position),ma.intensity=140*a*a}var ra=new A,vs=new A,Uf=new A;function $s(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,a=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,l=a*a-c;if(l<0)return 1/0;let h=-a-Math.sqrt(l);return h>0?h:1/0}function xS(){lt.kick=0,lt.shots++,$r.bang(sf),ra.copy(Te.position),vs.copy(Wf?Gf:Qs).add(Uf.set((Math.random()-.5)*.012,(Math.random()-.5)*.012,(Math.random()-.5)*.012)).normalize(),Wf=!1;let i=1/0,e=null;{[e,i]=Hm(ra,vs);let n=GS(ra,vs);n<i&&(i=n,e="fight")}let t=vs.y<-.001?-ra.y/vs.y:1/0;e&&i<t&&i<80?e==="fight"?Wm():Vm(e):t<70&&Bf(Uf.copy(ra).addScaledVector(vs,t),.6,[.16,.13,.1]),fi.set(0,0,ga-.06),yn.localToWorld(fi),fi.applyQuaternion(Te.quaternion).add(Te.position);for(let n=0;n<4;n++)Bf(fi,1.3,[.55,.54,.52],vs);for(let n of $e)if(!n.dead){let s=Math.hypot(n.mesh.position.x-fe.pos.x,n.mesh.position.z-fe.pos.z);n.startle=Math.max(n.startle||0,xt(1.3-s/30,.3,1)),n.ai.graze=!1,n.ai.t=ht(.05,.3),n.ai.flick=1}}var Ff=[],mf=null;function Bf(i,e,t,n){mf||(mf=Dm(!1));let s=Ff.find(r=>r.life<=0);s||(s={sp:new ls(new Hi({map:mf,transparent:!0,depthWrite:!1})),life:0},zt.add(s.sp),Ff.push(s)),s.life=s.max=e>1?ht(1.8,2.6):.7,s.size=e,s.col=t,s.sp.position.copy(i),s.v=new A((Math.random()-.5)*.4,.25+Math.random()*.2,(Math.random()-.5)*.4),n&&s.v.addScaledVector(n,1.5+Math.random()),s.sp.visible=!0}function vS(i){for(let e of Ff){if(e.life<=0)continue;e.life-=i;let t=1-e.life/e.max;e.sp.position.addScaledVector(e.v,i),e.v.multiplyScalar(Math.exp(-i*1.6)),e.sp.scale.setScalar(e.size*(.25+.9*Math.sqrt(t)));let n=.04+.35*se.level+ma.intensity*.004;e.sp.material.color.setRGB(e.col[0]*n,e.col[1]*n,e.col[2]*n),e.sp.material.opacity=.55*(1-t),e.sp.visible=e.life>0}}function _S(i,e){i.dead=!0,i.deadT=0,i.staring=!1,i.speed=0;let t=Math.cos(i.heading),n=-Math.sin(i.heading);i.fallSide=e.x*t+e.z*n>=0?1:-1,i.mesh.rotation.order="YZX",Pt.thud(.25)}function yS(i,e){i.deadT+=e;let t=i.deadT,n=Un(xt(t/.35,0,1)),s=xt((t-.3)/.75,0,1),r=s*s;i.mesh.rotation.y=i.heading,i.mesh.rotation.x=.1*n*(1-s),i.mesh.rotation.z=-i.fallSide*1.45*r,i.mesh.position.y=(i.y0||0)-.12*i.s*n*(1-s)+.2*i.s*r,!i.thudded&&s>=1&&(i.thudded=!0,Pt.thud(.6),Bf(i.mesh.localToWorld(Uf.set(0,1,0)),.9,[.2,.17,.13]));let o=i.mesh.material.userData.own;o.uPose.value.set(.2*i.fallSide,-.5*n,.1,-.4*n),o.uTail.value=0,o.uGait.value.set(0,0,0,0),i.mesh.updateMatrixWorld();let a=.9*i.s*r,c=Math.cos(i.heading)*i.fallSide*a,l=-Math.sin(i.heading)*i.fallSide*a;i.blk0||(i.blk0=i.blockers.map(h=>[h.x,h.z])),i.blockers.forEach((h,d)=>{h.x=i.blk0[d][0]+c,h.z=i.blk0[d][1]+l}),i.headWorld.set(0,1,1.3).applyMatrix4(i.mesh.matrixWorld)}var oh=new bi(new de(1,.7,.38),1,1.5,2),Of=new bi(new de(1,.52,.2),9,0,2),ih=new Ir(1712176,525828,.12);er.add(oh,Of,ih);var zf=jM(),MS=XM();zt.add(zf,GM(),MS);zt.add(WM());zt.add(QM());var Nm=9.5,mi=new bi(new de(1,.82,.6),Nm,40,1.4),ah=new bi(new de(1,.52,.2),9,7.5,2);ah.position.copy(Mn).add(new A(0,.5,0));var Kf=new ko(new de(.55,.62,.8),.05);Kf.position.set(-20,25,-45);var Um=new Ir(790552,262914,.05);zt.add(Kf,Um);zt.add(mi,ah);ZM(zt);var es=new Il(ii);es.addPass(new na(zt,Te));var Jf=new na(er,Ci);Jf.clear=!1;Jf.clearDepth=!0;es.addPass(Jf);var mh=new Gs(eS),SS=new Ws(new he(960,540),.55,.3,2.2),Fm=new Ws(new he(960,540),.025,1,0),on=new Gs(tS);es.addPass(mh);es.addPass(SS);es.addPass(Fm);es.addPass(on);var Hf=540;function $f(){let i=innerWidth,e=innerHeight,t=Math.min(window.devicePixelRatio||1,Hf/Math.min(i,e));ii.setPixelRatio(t),ii.setSize(i,e),es.setPixelRatio(t),es.setSize(i,e);let n=i/e;Te.aspect=n,Ci.aspect=n,Te.fov=n>=1.3?60:Math.min(88,Yi.radToDeg(2*Math.atan(Math.tan(Yi.degToRad(40))/n))),Ci.fov=n>=1.3?70:Math.min(95,Yi.radToDeg(2*Math.atan(Math.tan(Yi.degToRad(46))/n))),Te.updateProjectionMatrix(),Ci.updateProjectionMatrix(),on.uniforms.uRes.value.set(Math.round(i*t),Math.round(e*t)),mh.uniforms.uRes.value.copy(on.uniforms.uRes.value),ti&&ti.setPixel(Te,on.uniforms.uRes.value.y),document.body.classList.toggle("portrait",i<e)}addEventListener("resize",$f);$f();var fe={pos:new A(re.stations[0].x,0,re.standZ),vel:new A,yaw:0,pitch:re.look.pitch,bob:0,stepPhase:0},Tn=new Set,an=!1,ys=!1,Ms=Ot,Jt={id:null,cx:0,cy:0,x:0,y:0},pi={id:null,x:0,y:0};function jf(){if(!Ot)try{let i=Pi.requestPointerLock&&Pi.requestPointerLock();i&&i.catch&&i.catch(()=>{Ms=!0})}catch{Ms=!0}}document.addEventListener("pointerlockchange",()=>{ys=document.pointerLockElement===Pi,ys&&(Ms=!1),!ys&&an&&!Ot&&!Ms&&va()});document.addEventListener("pointerlockerror",()=>{Ms=!0});document.addEventListener("mousemove",i=>{ys&&(fe.yaw-=i.movementX*.0022,fe.pitch-=i.movementY*.0022,fe.pitch=xt(fe.pitch,-1.2,1.1))});Pi.addEventListener("pointerdown",i=>{if(an){if(Ot){JS(i);return}if(!Ot&&!ys&&!Ms){jf();return}Ot&&!Gn&&i.clientX<innerWidth*.45&&Jt.id===null?(Jt.id=i.pointerId,Jt.cx=i.clientX,Jt.cy=i.clientY,Jt.x=Jt.y=0,Ke.joy.style.left=`${Jt.cx}px`,Ke.joy.style.top=`${Jt.cy}px`,Ke.joy.classList.add("show"),Ke.knob.style.transform="translate(-50%,-50%)"):pi.id===null&&(pi.id=i.pointerId,pi.x=i.clientX,pi.y=i.clientY);try{Pi.setPointerCapture(i.pointerId)}catch{}}});Pi.addEventListener("pointermove",i=>{if(Ot){jS(i);return}if(i.pointerId===Jt.id){let e=i.clientX-Jt.cx,t=i.clientY-Jt.cy,n=Math.hypot(e,t),s=56;n>s&&(e*=s/n,t*=s/n),Jt.x=e/s,Jt.y=t/s,Ke.knob.style.transform=`translate(calc(-50% + ${e}px), calc(-50% + ${t}px))`}else if(i.pointerId===pi.id){let e=Ot?.0052:.0042;fe.yaw-=(i.clientX-pi.x)*e,fe.pitch-=(i.clientY-pi.y)*e,fe.pitch=xt(fe.pitch,-1.2,1.1),pi.x=i.clientX,pi.y=i.clientY}});var Qf=i=>{if(Ot){$S(i);return}i.pointerId===Jt.id&&(Jt.id=null,Jt.x=Jt.y=0,Ke.joy.classList.remove("show")),i.pointerId===pi.id&&(pi.id=null)};Pi.addEventListener("pointerup",Qf);Pi.addEventListener("pointercancel",Qf);Pi.addEventListener("lostpointercapture",Qf);addEventListener("keydown",i=>{if(an){if(i.code==="Escape"){va();return}if((i.code==="KeyD"||i.code==="ArrowRight")&&!i.repeat){sd(),i.preventDefault();return}if(i.code==="KeyR"&&!i.repeat){xa();return}if(i.code==="KeyE"&&!i.repeat){tt&&tt.state.cocked?id():vh();return}if(!["KeyW","KeyA","KeyS","ArrowUp","ArrowDown","ArrowLeft"].includes(i.code)){if(i.code==="KeyF"){i.repeat||io();return}if(i.code==="Space"){gh=!0,i.preventDefault();return}if(Gn&&i.code==="KeyE"&&!i.repeat){Ma();return}if(Gn&&i.code==="KeyR"&&!i.repeat){xa();return}Tn.add(i.code),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault()}}});addEventListener("keyup",i=>{Tn.delete(i.code),i.code==="Space"&&(gh=!1)});addEventListener("blur",()=>Tn.clear());var $e=[];function bS(i){let t=(n,s,r)=>{let o=i.x-n,a=i.z-s,c=Math.hypot(o,a),l=r+.25;c<l&&c>1e-5&&(i.x=n+o/c*l,i.z=s+a/c*l)};for(let n=0;n<3;n++){t(Mn.x,Mn.z,.62);for(let s of sa){let r=ia.uPC.value;t(s.x+Math.round((r.x-s.x)/Ct)*Ct,s.z+Math.round((r.y-s.z)/Ct)*Ct,s.r)}for(let s of $e){for(let r of s.blockers)t(r.x,r.z,r.r);t(s.headWorld.x,s.headWorld.z,.24*s.s)}}}var im=new A(0,1.08,.58),sm=new A(0,1.22,1.03),rm=new yt,om=new Xt;function am(i,e,t){let n=i.mesh.material.userData.own.uPose.value;return t.copy(e.p).sub(sm).applyQuaternion(rm.setFromEuler(om.set(-n.w*e.wh,n.z*e.wh,0,"YXZ"))).add(sm),t.sub(im).applyQuaternion(rm.setFromEuler(om.set(-n.y*e.wn,n.x*e.wn,0,"YXZ"))).add(im),t.applyMatrix4(i.mesh.matrixWorld)}var oa=new A;function gf(i,e){oa.copy(e),i.mesh.worldToLocal(oa);let t=oa.x,n=oa.y-1.16,s=oa.z-.98;return[xt(Math.atan2(t,s),-1.35,1.35),xt(Math.atan2(n,Math.hypot(t,s)),-.6,.5)]}function Bm(i,e,t){if(i.dead){yS(i,e);return}let n=i.ai;if(i.staring){let[o,a]=gf(i,Te.position);n.yaw=Mt(n.yaw,o,7,e),n.pitch=Mt(n.pitch,a,7,e)}else if(i.alarm>.05){let[o]=gf(i,Te.position),a=i.turnLead||0;n.yaw=Mt(n.yaw,Math.abs(a)>.15?a:xt(o,-.6,.6),3,e),n.pitch=Mt(n.pitch,-.08,3,e),n.t=Math.min(n.t,1.5)}else if((i.stir||0)>.15||(i.speed||0)>.25)n.yaw=Mt(n.yaw,i.turnLead||0,3,e),n.pitch=Mt(n.pitch,(i.speed||0)>.25?-.2:-.06,2.5,e),n.t=Math.min(n.t,1.5);else{let[o,a]=gf(i,Te.position);n.t-=e,n.t<=0&&(Math.random()<.15?(n.graze=!0,n.tYaw=ht(-.35,.35),n.t=ht(3,6)):(n.graze=!1,n.tYaw=ht(-.25,.25),n.tPitch=ht(-.15,.08),n.t=ht(2.5,6))),n.yaw=Mt(n.yaw,n.graze?n.tYaw:o+n.tYaw,1.4,e),n.pitch=Mt(n.pitch,n.graze?-1.05:a+n.tPitch,1.1,e)}let s=i.mesh.material.userData.own,r=(i.gait||0)*.07*Math.sin((i.gaitPhase||0)*Math.PI*4);s.uPose.value.set(n.yaw*.45,n.pitch*.4+r,n.yaw*.55,n.pitch*.6+r*.5),n.flick=Math.max(0,n.flick-e*1.8),Math.random()<e*.12&&(n.flick=1),s.uTail.value=.1*Math.sin(t*1.1+i.phase)+.5*n.flick*Math.sin(t*9+i.phase),i.headWorld.set(Math.sin(n.yaw)*.75,1,.58+Math.cos(n.yaw)*.75).applyMatrix4(i.mesh.matrixWorld);{let o=i.mesh.geometry.userData;am(i,o.eye,i.eyeWorld),am(i,o.nose,i.noseWorld)}}var la=1,xf=new A;function ES(i){let e=99;Qs.y<-.05&&(e=Te.position.y/-Qs.y);for(let n of $e)for(let s of n.blockers){xf.set(s.x,1*n.s+(n.y0||0),s.z).sub(Te.position);let r=xf.length();Math.acos(xt(xf.dot(Qs)/r,-1,1))<.7&&(e=Math.min(e,Math.max(.3,r-s.r)))}let t=xt(Math.pow(e/2.4,1.2),.3,1);la=Mt(la,t,t<la?6:2.5,i)}var se={on:!0,level:1,oil:1,mode:"on",t:0,gustT:-1,gustTimer:ht(35,70),sputter:0,matches:re.matches,outOnce:!1},gh=!1,ed=!1,js=!1,ha=0,Xl=0,Pn=!1,ua=0,eo=0;function ni(i,e=2.6){Ke.sub.textContent=i,Ke.sub.classList.add("show"),eo=e}function wS(){return Math.hypot(fe.pos.x-Mn.x,fe.pos.z-Mn.z)<BM}function kf(i){se.mode==="off"||se.mode==="dying"||(se.mode="dying",se.t=0,se.cause=i,!se.outOnce&&se.matches>0&&(se.outOnce=!0,setTimeout(()=>ni(Ot?re.lines.match:re.lines.matchPC,3.2),1600)),i!=="hand"&&Pt.puff())}function io(){if(an){if(se.mode==="on"){se.mode="turning",se.t=0,Pt.click(),!se.outOnce&&se.matches>0&&(se.outOnce=!0,setTimeout(()=>ni(Ot?re.lines.match:re.lines.matchPC,3.2),1400));return}if(se.mode==="off"){se.matches>0?(se.matches--,se.mode="up",se.t=0):ni(re.lines.noMatch,2.4);return}}}function TS(i){if(se.t+=i,se.mode==="on"){let t=se.oil>.2?1:.35+.65*(se.oil/.2);se.oil<.12&&Math.random()<i*3&&(se.sputter=1,Pt.sputter()),se.sputter=Math.max(0,se.sputter-i*5),t*=1-.5*se.sputter,se.gustT>=0&&(t*=.55+.45*Math.abs(Math.sin(se.gustT*23)*Math.sin(se.gustT*7))),se.level=Mt(se.level,t,18,i),se.oil<=0&&kf("oil")}else if(se.mode==="turning")se.level=Math.max(0,1-se.t/.6),se.t>=.6&&(se.mode="off",se.level=0,Pt.puff());else if(se.mode==="up")se.t>=.35&&se.t-i<.35&&Pt.whoosh(),se.level=se.t<.35?0:Math.min(1,(se.t-.35)/.6),se.t>=.95&&(se.mode="on",se.level=1);else if(se.mode==="dying"){let e=se.cause==="oil"?1.6:.5;se.level=Math.max(0,(1-se.t/e)*(Math.random()<.5?1:.3)),se.t>=e&&(se.mode="off",se.level=0)}else se.mode==="relight"&&(se.t>=1.05&&se.t-i<1.05&&(Pt.whoosh(),se.oil=1),se.level=se.t<1.05?0:Math.min(1,(se.t-1.05)/.7),se.t>=2.2&&(se.mode="on",se.level=1));se.gustTimer-=i,se.gustTimer<=0&&se.gustT<0&&(se.gustT=0,se.gustTimer=ht(45,110),Pt.gust()),se.gustT>=0&&(se.gustT+=i,se.gustT>2.3&&(se.gustT=-1,se.mode==="on"&&Math.random()<.5&&kf("wind"))),ca.uLevel.value=se.level,ca.uBend.value=Mt(ca.uBend.value,se.gustT>=0?Math.sin(se.gustT*9)*1.6+1.2:0,8,i)}Ke.lampBtn&&Ke.lampBtn.addEventListener("click",i=>{i.stopPropagation(),io()});var AS=i=>{i.preventDefault(),i.stopPropagation(),js=!0},vf=i=>{i.stopPropagation(),js=!1};for(let[i,e]of[[Ke.cockBtn,Ma],[Ke.fireBtn,ph],[Ke.reloadBtn,xa]])i&&i.addEventListener("pointerdown",t=>{t.stopPropagation(),t.preventDefault(),e()});Ke.raiseBtn&&(Ke.raiseBtn.addEventListener("pointerdown",AS),Ke.raiseBtn.addEventListener("pointerup",vf),Ke.raiseBtn.addEventListener("pointercancel",vf),Ke.raiseBtn.addEventListener("pointerleave",vf));document.addEventListener("mousedown",i=>{an&&(Ot||!(ys||Ms)||(i.button===0?tt&&tt.state.cocked?nd(0,0):ch(0,0):i.button===2&&(tt&&tt.state.cocked?id():vh())))});document.addEventListener("mouseup",i=>{i.button===2&&(ed=!1)});document.addEventListener("contextmenu",i=>i.preventDefault());var Ks=0,Ji=0,Om=-1;var RS=1/0,iA=new A,sA=new A,rA=new A,oA=new A,aA=new A,cA=new A;function CS(i){let e=i.distanceTo(mi.position);return mi.intensity/Math.pow(Math.sqrt(e*e+.81),1.4)}var oe={i:0,walking:!1,t:0,dur:1,x0:0,x1:0,readyAt:1/0,lastAct:0,misses:0,toldNext:!1,nextHintAt:-1,finishAt:-1,endT:-1},In=!1,fa=new A,cm=new A,Vf=new A,zm=()=>re.stations.length-1,_f=i=>$e.every(e=>e.station!==i||e.counted),td=()=>ni(Ot?re.lines.count:re.lines.countPC,3.2),lm=()=>ni(Ot?re.lines.next:re.lines.nextPC,3.2);function PS(i){let e=re.seed,t=()=>(e=e*16807%2147483647)/2147483647,n=[],s=(a,c,l,h)=>[.55,0,-.6].map(d=>({x:a+Math.sin(l)*d*.92,z:c+Math.cos(l)*d*.92,r:.37*h})),r=a=>n.some(c=>c.some(l=>a.some(h=>Math.hypot(l.x-h.x,l.z-h.z)<l.r+h.r+.04))),o=(a,c,l,h)=>{let d=Gt(re.scale[0],re.scale[1],t()),u=Math.atan2(re.stations[a].x-c,re.standZ-l),f=u;for(let M=0;M<10&&(f=u+(M<9?(t()-.5)*2*re.front.turn:0),!!r(s(c,l,f,d)));M++);n.push(s(c,l,f,d));let m=Gt(re.coat[0],re.coat[1],t())*(h?re.backDark:1),_=Math.min(1,m+.06+t()*.1),p=$e.length,g=new Qe(i[Math.floor(t()*i.length)],kM(m,_,p*1.7)),y=Math.sin(f)*.9,E=Math.cos(f)*.9,b=Ss(c+y,l+E),v=re.lean*Math.atan2(Ss(c-y,l-E)-b,1.8),S=b+.9*Math.sin(v);g.position.set(c,S,l),g.rotation.order="YXZ",g.rotation.y=f,g.rotation.x=v,g.scale.setScalar(d),zt.add(g),g.updateMatrixWorld(!0);let x=[.55,0,-.6].map(M=>{let C=new A(0,0,M*.92).applyMatrix4(g.matrixWorld);return{x:C.x,z:C.z,r:.37*d}});$e.push({mesh:g,s:d,phase:p*1.7,blockers:x,counted:!1,lit:0,staring:!1,headWorld:new A,station:a,y0:S,back:h,eyeWorld:new A,noseWorld:new A,aimPoints:[],heading:f,speed:0,gait:0,gaitPhase:Math.random(),alarm:0,turnVel:0,turnLead:0,wx:0,wz:0,stir:0,stirGoal:0,press:0,pdx:0,pdz:0,shoveX:0,shoveZ:0,caps:null,startle:0,dead:!1,ai:{t:ht(0,3),yaw:0,pitch:0,tYaw:0,tPitch:0,flick:0,graze:!1}})};re.stations.forEach((a,c)=>{let l=a.rows[0],h=Array.from({length:l-1},()=>Gt(re.front.gap[0],re.front.gap[1],t())),d=a.x-h.reduce((m,_)=>m+_,0)/2,u=[],f=re.front.z;for(let m=0;m<l;m++)u.push(d),o(c,d,re.front.z+(t()-.5)*re.front.jitterZ,!1),d+=h[m]||0;a.rows.slice(1).forEach((m,_)=>{let p=re.front.z-re.rowBack[_],g=(re.standZ-p)/(re.standZ-f),y=u.slice(1).map((b,v)=>(b+u[v])/2);u=(y.length>=m?y.slice(Math.floor((y.length-m)/2),Math.floor((y.length-m)/2)+m).map(b=>a.x+(b-a.x)*g):Array.from({length:m},(b,v)=>a.x-m*re.rowGap/2+(v+.5)*re.rowGap)).map(b=>b+(t()-.5)*2*re.rowJitter[0]),f=p;for(let b of u)o(c,b,p+(t()-.5)*2*re.rowJitter[1],!0)})})}function ch(i,e,t){if(xe.on||!an||In||Pn||oe.walking||oe.endT>=0||performance.now()<oe.readyAt)return;fa.copy(Te.position),cm.set(i,e,.5).unproject(Te).sub(fa).normalize();let[n,s]=Hm(fa,cm);if((!n||s>30)&&t&&(n=IS(i,e)),!n||s>30&&!t){++oe.misses>=re.hint.misses&&(oe.misses=0,td());return}oe.misses=0,oe.lastAct=performance.now(),!n.counted&&(n.counted=!0,Ji++,Ji<=re.told?ni(`${j0[Ji-1]}\u2026`,re.saySecs):ni(`\u2026${j0[Ji-1]}.`,3),Ji===re.told+1&&!oe.toldCock&&(oe.toldCock=!0,setTimeout(()=>ni(Ot?re.lines.cock:re.lines.cockPC,3.4),3200)))}function Hm(i,e){let t=1/0,n=null;for(let s of $e)if(!(s.dead||s.gone)){if(s.mon){for(let r of s.mon.eyes)if(r.visible){let o=$s(i,e,r.position,.12);o<t&&(t=o,n=s)}}if(!(s.mon&&s.mon.clue===4)){for(let r of s.blockers){let o=$s(i,e,Vf.set(r.x,s.y0+.95*s.s,r.z),.38*s.s);o<t&&(t=o,n=s)}for(let[r,o]of[[0,.15],[.5,.15],[1,.14]]){let a=$s(i,e,Vf.copy(s.eyeWorld).lerp(s.noseWorld,r),o*s.s);a<t&&(t=a,n=s)}}}return[n,t]}var hm=new A;function IS(i,e){let t=innerWidth,n=innerHeight,r=Math.min(t,n)*re.swipe.reach,o=null;for(let a of $e)if(!a.dead&&!a.gone)for(let c of a.mon?a.mon.clue===4?a.mon.eyes.map(l=>l.position):[...a.mon.eyes.filter(l=>l.visible).map(l=>l.position),hm.set(a.blockers[1].x,a.y0+.95*a.s,a.blockers[1].z)]:[a.eyeWorld,a.noseWorld,hm.set(a.blockers[1].x,a.y0+.95*a.s,a.blockers[1].z)]){let l=Vf.copy(c).project(Te);if(l.z>1)continue;let h=Math.hypot((l.x-i)*t/2,(l.y-e)*n/2);h<r&&(r=h,o=a)}return o}var $t=null,LS=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Us(i)})();function DS(){let i=+new URLSearchParams(location.search).get("clue"),e=re.monster,t=e.clues.includes(i)?i:e.clues[Math.floor(Math.random()*e.clues.length)],n=$e.filter(c=>re.monster.anyRow||!c.back),s=n[Math.floor(Math.random()*n.length)];s.mesh.material.userData.own.uEyeOff.value=1,t===4&&(s.mesh.visible=!1);let r=[0,1,2].map(()=>{let c=new ls(new Hi({map:LS,blending:Kn,depthWrite:!1,transparent:!0,fog:!1}));return c.scale.setScalar(e.glint),zt.add(c),c});r[2].visible=t===7;let o=re.scare.forms[t],a=o[Math.floor(Math.random()*o.length)];s.mon={clue:t,eyes:r,form:a,M:null},$t=s,V0(`../monsters/data/${a}.json`,a,$i.uTime).then(c=>{s.mon.M=c,zt.add(c.root)}).catch(c=>console.warn("monster",c))}var yf=new A,Mf=new A(0,1,0),NS=new A;function US(){if(!$t||$t.gone)return;let i=$t,e=i.mon,t=re.monster,n=i.mesh.material.userData.own.uPose.value,s=i.mesh.rotation.y+n.x+n.z;yf.set(Math.cos(s),0,-Math.sin(s));let r=e.clue===2?t.wide:t.eye,o=e.clue===1?t.high:0;e.eyes[0].position.copy(i.eyeWorld).addScaledVector(yf,-r).addScaledVector(Mf,o),e.eyes[1].position.copy(i.eyeWorld).addScaledVector(yf,r).addScaledVector(Mf,o),e.eyes[2].position.copy(i.eyeWorld).addScaledVector(Mf,t.third);for(let l of e.eyes)l.position.add(NS.copy(Te.position).sub(l.position).setLength(.1));let a=i.eyeWorld.distanceTo(mi.position),c=.1*($i.uEyeGain.value/Math.pow(Math.max(a,1.3),$i.uEyeFall.value)+$i.uEyeSelf.value);for(let l of e.eyes)l.material.color.setScalar(c)}var Cn=re.hp,Ft=null,um=0,so=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function FS(){let i=$t,e=i.mon.M;i.gone=!0,i.mesh.visible=!1;for(let t of i.mon.eyes)t.visible=!1;if(!e){xh();return}oe.scaring=!0,Ke.sub.classList.remove("show"),eo=0,e.own.uLightP.value.copy(mi.position),Y0(e,new A(i.mesh.position.x,i.y0,i.mesh.position.z),new yt().setFromEuler(new Xt(0,Math.atan2(Te.position.x-i.mesh.position.x,Te.position.z-i.mesh.position.z),0)))}function BS(i){let e=$t&&$t.mon.M;if(!oe.scaring||!e)return;e.own.uLightP.value.copy(mi.position);let t=Z0(e,Te,i,{roar:()=>{Ft&&(Ft.freeze("none"),Ft.pounce(e.info.roar)),so(450)},cut:()=>{Ft&&(Ft.snap(),Ft.cut({muffle:!1})),so(220),xh()},back:()=>{Ft&&Ft.restore()},done:()=>{oe.scaring=!1,oe.shake=0,on.uniforms.uFade.value=0,Cn<=0&&(oe.endT=0)}});t&&(on.uniforms.uFade.value=t.fade,oe.shake=t.shake)}function xh(){Cn=Math.max(0,Cn-1),Cn<=0&&!oe.scaring&&(oe.endT=0)}var jr=0;function OS(i){let e=re.hurt,t=Math.min(Cn,e.bpm.length),n=Cn<re.hp&&Cn>0;if(jr=Mt(jr,n?1:0,1.5,i),on.uniforms.uHurt.value=n?e.edge[t]*jr:0,!n||!Pt.ctx||In)return;let s=Pt.ctx.currentTime;s>=um&&(um=s+60/e.bpm[t],Pt.heart(e.heart[t]*jr))}var Gf=new A,km=new A,zS=new yt,Wf=!1;function nd(i,e){return!tt||!tt.state.cocked||tt.state.anim||oe.scaring||oe.walking||In||Pn?!1:(fa.copy(Te.position),Gf.set(i,e,.5).unproject(Te).sub(fa).normalize(),Wf=!0,km.copy(Gf).applyQuaternion(zS.copy(Te.quaternion).invert()).multiplyScalar(Qr.aimD),lt.pointK=1,lt.pointT=0,oe.lastAct=performance.now(),ph(),!0)}function vh(){!tt||oe.scaring||In||Pn||(Ma(),oe.lastAct=performance.now(),oe.toldFire||(oe.toldFire=!0,setTimeout(()=>ni(Ot?re.lines.fire:re.lines.firePC,3.4),500)))}function id(){tt&&tt.state.cocked&&!tt.state.anim&&(tt.state.cocked=!1,$r.click(.3,2600),lt.t=0)}function HS(){oe.toldReload||(oe.toldReload=!0,setTimeout(()=>ni(Ot?re.lines.reload:re.lines.reloadPC,3.4),400))}function Vm(i){if(i.mon){VS(i);return}_S(i,vs)}var xe={on:!1,phase:"",t:0,hits:0,pos:new A,from:new A,to:new A,M:null,endT:-1},lA=new yt,kS=new Xt,Nn=new A,fm=new A;function VS(i){let e=i.mon.M;i.gone=!0,i.mesh.visible=!1;for(let t of i.mon.eyes)t.visible=!1;if(Ke.sub.classList.remove("show"),eo=0,!!e){Object.assign(xe,{on:!0,phase:"rise",t:0,hits:0,M:e,endT:-1}),xe.pos.set(i.mesh.position.x,Ss(i.mesh.position.x,i.mesh.position.z),i.mesh.position.z),e.root.visible=!0,Gm(),Ft&&Ft.pounce(e.info.roar),so(200);for(let t of $e)t!==i&&!t.dead&&!t.gone&&qS(t,xe.pos)}}function Gm(){let i=xe.M,e=Math.atan2(Te.position.x-xe.pos.x,Te.position.z-xe.pos.z);i.root.quaternion.setFromEuler(kS.set(0,e,0)),i.root.position.copy(xe.pos)}function Wm(){let i=re.fight;if(xe.hits++,so(60),xe.hits>=i.shots){xe.phase="die",xe.t=0,Ft&&Ft.gape(xe.M.id);return}Nn.copy(xe.pos).sub(Te.position).setY(0).normalize(),xe.from.copy(xe.pos),xe.to.copy(xe.pos).addScaledVector(Nn,i.push),xe.phase="pushed",xe.t=0,Ft&&Ft.gape(xe.M.id)}function GS(i,e){if(!xe.on||xe.phase==="die"||xe.phase==="eat")return 1/0;let t=xe.M;return fm.fromArray(t.meta.headPivot).applyQuaternion(t.root.quaternion).add(t.root.position),Math.min($s(i,e,fm,.4),$s(i,e,Nn.set(0,.5*t.meta.height,0).add(t.root.position),.6))}function WS(i,e){if(!xe.on){if(xe.endT>=0&&(xe.endT+=i)>re.fight.back){xe.endT=-1;for(let s of $e)!s.dead&&!s.gone&&XS(s)}return}let t=re.fight,n=xe.M;if(xe.t+=i,n.own.uLightP.value.copy(mi.position),xe.phase==="eat"){let s=$0(n,Te,i,{freeze:()=>{Ft&&Ft.freeze(n.info.roar)},roar:()=>{Ft&&Ft.pounce(n.info.roar),so(90)},black:()=>{Ft&&Ft.bite("gulp"),so([260,120,90]),xh(),n.root.visible=!1,xe.wakeT=0}});s&&(on.uniforms.uFade.value=s.fade,oe.shake=s.shake),xe.wakeT!==void 0&&(xe.wakeT+=i)>t.wake&&oe.endT<0&&(Cn>0&&(Ke.end.querySelector("h1").textContent=re.lines.morningTitle,Ke.end.querySelector(".sub").textContent=re.lines.morning),xe.on=!1,oe.endT=2.4,on.uniforms.uFade.value=1);return}if(K0(n,i,e),xe.phase==="rise"){let s=xt(xe.t/t.rise,0,1);n.root.scale.set(1,.35+.65*Un(s),1),oe.shake=.4*(1-s),s>=1&&(xe.phase="pause",xe.t=0,xe.wait=ht(...t.pause))}else if(xe.phase==="pause"){let s=n.id==="m5"&&se.level>t.shadowLight;if(xe.t>=xe.wait&&!s){Nn.copy(Te.position).sub(xe.pos).setY(0);let r=Nn.length()-t.reach;Nn.normalize();let o=ht(...t.dash)*(n.id==="m3"?t.crawl:1);xe.from.copy(xe.pos),xe.to.copy(xe.pos).addScaledVector(Nn,Math.min(o,Math.max(0,r)+.05)),xe.phase="dash",xe.t=0}}else if(xe.phase==="dash"||xe.phase==="pushed"){let s=xt(xe.t/(xe.phase==="pushed"?.15:t.dashTime),0,1);if(xe.pos.lerpVectors(xe.from,xe.to,xe.phase==="pushed"?1-(1-s)**3:Un(s)),xe.pos.y=Ss(xe.pos.x,xe.pos.z),s>=1){if(Math.hypot(Te.position.x-xe.pos.x,Te.position.z-xe.pos.z)<=t.reach+.1){xe.phase="eat",xe.t=0,J0(n);return}xe.phase="pause",xe.t=0,xe.wait=ht(...t.pause)/(n.id==="m3"?t.crawl:1)}}else if(xe.phase==="die"){let s=xt(xe.t/t.die,0,1);xe.pos.y=Ss(xe.pos.x,xe.pos.z)-2*s*s,n.own.uJaw.value=.6,s>=1&&(n.root.visible=!1,xe.on=!1,xe.endT=0,oe.shake=0)}xe.phase!=="eat"&&Gm()}function qS(i,e){i.home??(i.home={x:i.mesh.position.x,z:i.mesh.position.z,yaw:i.heading}),Nn.set(i.mesh.position.x-e.x,0,i.mesh.position.z-e.z),Nn.lengthSq()<1e-4&&Nn.set(1,0,0),Nn.normalize(),i.walk={from:new he(i.mesh.position.x,i.mesh.position.z),to:new he(i.mesh.position.x+Nn.x*ht(...re.fight.scatter),i.mesh.position.z+Nn.z*ht(...re.fight.scatter)),t:0,end:null},i.walk.dur=i.walk.from.distanceTo(i.walk.to)/re.fight.scatterSpeed}function XS(i){i.home&&(i.walk={from:new he(i.mesh.position.x,i.mesh.position.z),to:new he(i.home.x,i.home.z),t:0,end:i.home.yaw},i.walk.dur=Math.max(.5,i.walk.from.distanceTo(i.walk.to)/re.fight.scatterSpeed))}function YS(i){for(let e of $e){let t=e.walk;if(!t||e.dead)continue;t.t+=i;let n=xt(t.t/t.dur,0,1),s=Gt(t.from.x,t.to.x,Un(n)),r=Gt(t.from.y,t.to.y,Un(n)),o=Math.atan2(t.to.x-t.from.x,t.to.y-t.from.y),a=n<1?o:t.end??o;e.heading=e.heading+Math.atan2(Math.sin(a-e.heading),Math.cos(a-e.heading))*Math.min(1,i*5);let c=Math.sin(e.heading)*.9,l=Math.cos(e.heading)*.9,h=Ss(s+c,r+l),d=re.lean*Math.atan2(Ss(s-c,r-l)-h,1.8);e.y0=h+.9*Math.sin(d),e.mesh.position.set(s,e.y0,r),e.mesh.rotation.y=e.heading,e.mesh.rotation.x=d,e.mesh.updateMatrixWorld(!0),e.blockers.forEach((f,m)=>{let _=Nn.set(0,0,[.55,0,-.6][m]*.92).applyMatrix4(e.mesh.matrixWorld);f.x=_.x,f.z=_.z});let u=n<1;e.gait=Mt(e.gait||0,u?1:0,6,i),e.gaitPhase=(e.gaitPhase||0)+i*re.fight.scatterSpeed/1.45*e.gait,e.mesh.material.userData.own.uGait.value.set(e.gaitPhase,e.gait,0,0),!u&&e.gait<.02&&(e.walk=null,t.end!==null&&(e.home=null))}}function sd(){if(!xe.on&&!(!an||In||Pn||oe.walking||oe.endT>=0||performance.now()<oe.readyAt)){if(oe.lastAct=performance.now(),oe.toldNext=!0,oe.nextHintAt=-1,oe.i===zm()){oe.endT=0;return}oe.walking=!0,oe.t=0,oe.x0=fe.pos.x,oe.x1=re.stations[oe.i+1].x,$t&&!$t.gone&&$t.station===oe.i&&(oe.scarePending=!0),oe.dur=Math.abs(oe.x1-oe.x0)/re.walk.speed}}function ZS(i){let e=0;if(oe.walking&&!oe.scaring){oe.t+=i,oe.scarePending&&oe.t>=re.scare.after&&(oe.scarePending=!1,FS());let o=Math.min(1,oe.t/oe.dur),a=Gt(oe.x0,oe.x1,Un(o));e=Math.abs(a-fe.pos.x)/Math.max(i,.001),fe.pos.x=a,o>=1&&(oe.walking=!1,oe.i++,oe.lastAct=performance.now())}if(Ot){let o=oe.walking?-re.walk.turn*Math.sqrt(Math.sin(Math.PI*Math.min(1,oe.t/oe.dur))):0;fe.yaw=Mt(fe.yaw,o,6,i),fe.pitch=Mt(fe.pitch,re.look.pitch,6,i)}let t=Math.sin(fe.yaw),n=Math.cos(fe.yaw),s=fe.stepPhase;fe.stepPhase+=i*e*4.4,Math.floor(s/Math.PI)!==Math.floor(fe.stepPhase/Math.PI)&&e>.3&&Pt.step();let r=xt(e/1.5,0,1);if(Te.position.set(fe.pos.x+Math.cos(fe.stepPhase)*.012*r*n,Zf+qm+Math.abs(Math.sin(fe.stepPhase))*.025*r,fe.pos.z-Math.cos(fe.stepPhase)*.012*r*t),bm(Te.position.x,Te.position.z),Te.rotation.set(fe.pitch,fe.yaw,0),oe.shake>0){let o=oe.shake*.02;Te.position.x+=(Math.random()-.5)*o,Te.position.y+=(Math.random()-.5)*o,Te.rotation.z+=(Math.random()-.5)*o*2.5}return Te.updateMatrixWorld(!0),Te.getWorldDirection(Qs),e}var qm=0;function KS(i){let e=performance.now(),t=zm();if(oe.endT>=0){oe.endT+=i,on.uniforms.uFade.value=xt(oe.endT/2.2,0,1),oe.endT>2.4&&!Pn&&(Pn=!0,Cn<=0&&(Ke.end.querySelector("h1").textContent=re.lines.deadTitle,Ke.end.querySelector(".sub").textContent=re.lines.dead),Ke.end.classList.add("show"),document.pointerLockElement&&document.exitPointerLock());return}if(BS(i),OS(i),!(e<oe.readyAt||oe.walking)&&(oe.i<t&&!oe.toldNext&&_f(oe.i)&&(oe.toldNext=!0,oe.nextHintAt=e+1700),!xe.on)){if(oe.nextHintAt>0&&e>=oe.nextHintAt&&(oe.nextHintAt=-1,lm(),oe.lastAct=e),oe.i===t&&oe.finishAt<0&&_f(t)&&(oe.finishAt=e+re.endWait*1e3),oe.finishAt>0&&e>=oe.finishAt){oe.endT=0;return}e-oe.lastAct>re.hint.idle*1e3&&(oe.lastAct=e,_f(oe.i)?oe.i<t&&lm():td())}}function va(){!an||In||Pn||(In=!0,Ke.pause.classList.add("show"),document.pointerLockElement&&document.exitPointerLock(),Pt.ctx&&Pt.ctx.suspend())}function Xm(){In&&(In=!1,Ke.pause.classList.remove("show"),Pt.resume(),to=performance.now(),pa=0,Ot?cd():jf())}{addEventListener("popstate",()=>{an&&!Pn&&(va(),history.pushState({nh:1},""))});let i=()=>{document.fullscreenElement||document.webkitFullscreenElement||va()};document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i),Ke.again.addEventListener("click",()=>location.reload())}var lh=new Map;function JS(i){let e={x:i.clientX,y:i.clientY,t:performance.now()};lh.set(i.pointerId,e);try{Pi.setPointerCapture(i.pointerId)}catch{}e.x>innerWidth*re.gun.area[0]&&e.y>innerHeight*re.gun.area[1]&&(e.timer=setTimeout(()=>{!e.done&&!e.moved&&an&&!In&&!Pn&&(e.done=!0,xa(),oe.lastAct=performance.now())},re.gun.hold*1e3))}function $S(i){let e=lh.get(i.pointerId);if(lh.delete(i.pointerId),!e||e.done||!an||In||Pn)return;let t=innerWidth,n=innerHeight,s=i.clientX-e.x,r=i.clientY-e.y;if(clearTimeout(e.timer),i.type!=="pointercancel"&&Math.hypot(s,r)<18&&(Mm||performance.now()-e.t<700)){let o=i.clientX/t*2-1,a=1-i.clientY/n*2;tt&&tt.state.cocked?nd(o,a):ch(o,a,!0);return}Ym(e,s,r)}function jS(i){let e=lh.get(i.pointerId);!e||e.done||!an||In||Pn||(Math.hypot(i.clientX-e.x,i.clientY-e.y)>18&&(e.moved=!0,clearTimeout(e.timer)),Ym(e,i.clientX-e.x,i.clientY-e.y))}function Ym(i,e,t){let n=innerWidth,s=Math.min(n,innerHeight)*re.swipe.far;if(Math.abs(e)>s&&Math.abs(e)>re.swipe.ratio*Math.abs(t)){i.done=!0,sd();return}Math.abs(t)>s&&Math.abs(t)>re.swipe.ratio*Math.abs(e)&&i.x<n*.5?(i.done=!0,oe.lastAct=performance.now(),t<0?se.mode==="off"?io():se.mode==="on"&&(js=!0):js?js=!1:se.mode==="on"&&io()):Math.abs(t)>s&&Math.abs(t)>re.swipe.ratio*Math.abs(e)&&(i.done=!0,oe.lastAct=performance.now(),t>0?vh():id())}var Yl={p:new A(.2*Rn,-.07,-.37),r:new Xt(.1,.55*Rn,0)},Zl={p:new A(.19*Rn,.08,-.43),r:new Xt(.25,.4*Rn,0)},Kl={p:new A(.02*Rn,-.2,-.5),r:new Xt(-.2,.5*Rn,.25*Rn)},Xe={pivot:new A,bob:new A,prev:new A,init:!1,lastRX:0,lastRZ:0,lastDVX:0,lastDVZ:0,peak:0,lastCreak:0},Jl=.17,di=new A,Sf=new A,aa=new A,QS=new yt,dm=new A;function pm(i,e,t,n,s){let r=i.x+e.x-t,o=i.z+e.z-n,a=Math.hypot(r,o);a<s&&a>1e-5&&(e.x+=r/a*(s-a),e.z+=o/a*(s-a))}function qf(i,e,t){for(let n of $e){if(i.y<1.55*n.s)for(let s of n.blockers)pm(i,t,s.x,s.z,s.r+e);i.y<1.7*n.s&&pm(i,t,n.headWorld.x,n.headWorld.z,.26*n.s+e)}}function eb(i,e){Sf.copy(i).applyQuaternion(Te.quaternion).add(Te.position),aa.copy(Sf),aa.y-=.17,di.set(0,0,0);for(let t=0;t<3;t++)qf(aa,.09,di),qf(Sf,.05,di);aa.set(di.x,0,di.z).applyQuaternion(QS.copy(Te.quaternion).invert()),dm.lerp(aa,1-Math.exp(-14*e)),i.add(dm),i.z>-.17&&(i.y-=(i.z+.17)*.8,i.z=-.17)}var _s=0,da=0,mm=0,gm=0,tb=new Xt,Xf=new yt,xm=new yt,bf=new yt,Yf=new A,Zs=new A,hA=new A(0,-1,0);function nb(i,e,t,n){let s=(gh||ed||js)&&se.mode!=="relight";ha=Sm(ha,s?1:0,i/.35),Xl=s?Xl+i:Math.max(0,Xl-i*2);let r=Un(ha),o=Yf.copy(Yl.p).lerp(Zl.p,r),a=Gt(Yl.r.x,Zl.r.x,r),c=Gt(Yl.r.y,Zl.r.y,r),l=Gt(Yl.r.z,Zl.r.z,r);if(se.mode==="relight"){let x=se.t<.6?Un(se.t/.6):se.t<1.6?1:Un(Math.max(0,1-(se.t-1.6)/.6));o.lerp(Kl.p,x),a=Gt(a,Kl.r.x,x),c=Gt(c,Kl.r.y,x),l=Gt(l,Kl.r.z,x)}(se.mode==="turning"||se.mode==="up")&&(l+=Math.sin(Math.min(1,se.t/.6)*Math.PI)*.12*Rn);let h=(fe.yaw-mm)/Math.max(i,.001),d=(fe.pitch-gm)/Math.max(i,.001);mm=fe.yaw,gm=fe.pitch,_s=Mt(_s,xt(-h*.035,-.09,.09),9,i),da=Mt(da,xt(-d*.03,-.07,.07),9,i),o.x-=_s*.6,o.y+=da*.6,l-=_s*1.2*Rn,c+=_s*.6*Rn,o.x+=Math.cos(fe.stepPhase)*.009*n,o.y+=Math.abs(Math.sin(fe.stepPhase))*.012*n-.006*n;let u=1+Math.min(2.2,Xl/3),f=Cn<re.hp?Gt(1,re.hurt.shake[Math.min(Cn,re.hurt.shake.length-1)],jr):1,m=7e-4*u*f,_=.0018*(.6+.4*u);o.x+=Math.sin(e*9.3)*Math.sin(e*6.1+1.3)*m+Math.sin(e*.37+2.1)*_,o.y+=Math.sin(e*10.7+.5)*Math.sin(e*4.3)*m+Math.sin(e*.29)*_,l+=Math.sin(e*8.1)*.003*u,eb(o,i),Vn.position.copy(o),Vn.rotation.set(a,c,l),Vn.updateMatrixWorld(!0),ji&&ji.fore&&(tm.set(0,1,0).applyQuaternion(Xf.copy(Te.quaternion).invert()),aS(ji,.7,tm),Pm(ji)),bf.copy(Te.quaternion),Xe.pivot.copy(Vn.position).applyQuaternion(bf).add(Te.position),Xe.init||(Xe.bob.copy(Xe.pivot).add(Zs.set(0,-Jl,0)),Xe.prev.copy(Xe.bob),Xe.init=!0);let p=Math.max(1,Math.ceil(i/(1/120))),g=i/p;for(let x=0;x<p;x++){let M=(Xe.bob.x-Xe.prev.x)*(1-1.6*g),C=(Xe.bob.y-Xe.prev.y)*(1-1.6*g),R=(Xe.bob.z-Xe.prev.z)*(1-1.6*g);Xe.prev.copy(Xe.bob),Xe.bob.x+=M,Xe.bob.y+=C-9.8*g*g,Xe.bob.z+=R,Zs.copy(Xe.bob).sub(Xe.pivot).setLength(Jl),Xe.bob.copy(Xe.pivot).add(Zs),di.set(0,0,0),qf(Xe.bob,.085,di),(di.x||di.z)&&(Xe.bob.x+=di.x,Xe.bob.z+=di.z,Zs.copy(Xe.bob).sub(Xe.pivot).setLength(Jl),Xe.bob.copy(Xe.pivot).add(Zs))}Zs.copy(Xe.bob).sub(Xe.pivot).normalize().applyQuaternion(Xf.copy(bf).invert());let y=Yf.copy(Zs).negate();An.set(1,0,0).applyQuaternion(Vn.quaternion),ei.copy(An).addScaledVector(y,-An.dot(y)).normalize(),Zr.crossVectors(ei,y),Kr.makeBasis(ei,y,Zr),xm.setFromRotationMatrix(Kr),no.quaternion.copy(Vn.quaternion).invert().multiply(xm);let E=Xe.bob.x-Xe.pivot.x,b=Xe.bob.z-Xe.pivot.z,v=E-Xe.lastRX,S=b-Xe.lastRZ;Xe.peak=Math.max(Xe.peak*Math.exp(-i*1.5),Math.hypot(E,b)/Jl),v*Xe.lastDVX+S*Xe.lastDVZ<0&&Xe.peak>.16&&e-Xe.lastCreak>.3&&(Math.random()<.7&&Pt.creak(Math.min(1,Xe.peak*2.5)),Xe.lastCreak=e),Xe.lastRX=E,Xe.lastRZ=b,Xe.lastDVX=v,Xe.lastDVZ=S}function ib(i){let e=0,t=0;(Tn.has("KeyD")||Tn.has("ArrowRight"))&&(e+=1),(Tn.has("KeyA")||Tn.has("ArrowLeft"))&&(e-=1),(Tn.has("KeyW")||Tn.has("ArrowUp"))&&(t+=1),(Tn.has("KeyS")||Tn.has("ArrowDown"))&&(t-=1),e+=Jt.x,t-=Jt.y,Gn&&(e=0,t=0);let n=Math.hypot(e,t);n>1&&(e/=n,t/=n),se.mode==="relight"&&(e*=.2,t*=.2),Pn&&(e=t=0);let s=Math.sin(fe.yaw),r=Math.cos(fe.yaw),o=(e*r-t*s)*1.5,a=(-e*s-t*r)*1.5;fe.vel.x=Mt(fe.vel.x,o,8,i),fe.vel.z=Mt(fe.vel.z,a,8,i),fe.pos.x+=fe.vel.x*i,fe.pos.z+=fe.vel.z*i,bS(fe.pos);let c=Math.hypot(fe.vel.x,fe.vel.z),l=fe.stepPhase;fe.stepPhase+=i*c*4.4,Math.floor(l/Math.PI)!==Math.floor(fe.stepPhase/Math.PI)&&c>.3&&Pt.step();let h=xt(c/1.5,0,1);return Te.position.set(fe.pos.x+Math.cos(fe.stepPhase)*.012*h*r,Zf+Math.abs(Math.sin(fe.stepPhase))*.025*h,fe.pos.z-Math.cos(fe.stepPhase)*.012*h*s),bm(Te.position.x,Te.position.z),Te.rotation.set(fe.pitch,fe.yaw,0),Te.updateMatrixWorld(!0),Te.getWorldDirection(Qs),c}var vm=1e3/60,pa=0,to=performance.now(),$l=0,Ef=0,jl=0,wf=!1,Qs=new A,uA=new A,Ql=new A,eh=new A,th={fogC:new de(.062,.064,.073),fogD:.05,zen:new de(.0065,.007,.0088)},nh={fogC:new de(.0035,.004,.0055),fogD:.009,hor:new de(.028,.03,.038),zen:new de(.002,.0022,.003)};function rd(i){if(document.hidden||requestAnimationFrame(rd),In){to=i;return}if(i<pa-1)return;pa=Math.max(pa+vm,i+vm*.6);let e=Math.min(.1,(i-to)/1e3);to=i;let t=i/1e3;wf&&(wf=!1,$f()),$i.uTime.value=t,Rf.uTime.value=t,ca.uTime.value=t;let n=ZS(e);YM(e,se.gustT>=0);let s=xt(n/1.5,0,1);if(TS(e),$M(e,se.gustT>=0),nb(e,t,n,s),Gn&&tt&&gS(e,t),sh){let d=sh,u=yn.position;Ci.position.set(u.x+Math.sin(d.yaw)*Math.cos(d.pitch)*d.dist,u.y+Math.sin(d.pitch)*d.dist,u.z+Math.cos(d.yaw)*Math.cos(d.pitch)*d.dist),Ci.lookAt(u.x,u.y-.04,u.z),Ci.updateMatrixWorld(!0)}no.updateMatrixWorld(!0),Ql.copy(Am),no.localToWorld(Ql);let r=se.level*(1+.04*Math.sin(t*11)*Math.sin(t*17.3+1.1)+.02*Math.sin(t*31));oh.position.copy(Ql),oh.intensity=1*r,mi.position.copy(Ql).applyQuaternion(Te.quaternion).add(Te.position),mi.intensity=Nm*r*(1+.5*Un(ha)),$i.uLanternPos.value.copy(mi.position),If.emissiveIntensity=.16*r,Xr.material.opacity=.5*r,Yr.visible=se.level>.01,Yr.scale.setScalar(.6+.4*se.level),Pt.setHiss(se.level),eh.copy(ah.position).sub(Te.position).applyQuaternion(Xf.copy(Te.quaternion).invert()),Of.position.copy(eh);let o=9*(1+.14*Math.sin(t*7.7)*Math.sin(t*2.3+1.1)+.06*Math.sin(t*23)),a=Un(xt((eh.z/Math.max(eh.length(),.001)+.2)/.8,0,1));ah.intensity=o,Of.intensity=o*Gt(1,.22,a),ua=Sm(ua,se.level<.05?1:0,e/(se.level<.05?2.6:.7));let c=Un(ua),l=Math.hypot(Te.position.x-Mn.x,Te.position.z-Mn.z),h=Gt(.42,.9,Un(xt((l-2.5)/4.5,0,1)));ES(e),on.uniforms.uExp.value=Gt(.26,h,c)*la,on.uniforms.uDesat.value=c*.75*Un(xt((h-.42)/.48,0,1)),zt.fog.color.copy(nh.fogC).lerp(th.fogC,c),Ks=Mt(Ks,Om>=0?1:.9*Math.min(1,Ji/re.told),1.2,e),on.uniforms.uCount.value=Ks,mh.uniforms.uCount.value=Ks,Fm.strength=.025+.02*Ks,zt.fog.density=Gt(nh.fogD+.004*Ks,th.fogD,c),zf.material.uniforms.uHor.value.copy(nh.hor).lerp(th.fogC,c),zf.material.uniforms.uZen.value.copy(nh.zen).lerp(th.zen,c),wm.uHaze.value.copy(zt.fog.color),Kf.intensity=Gt(.05,.24,c),Um.intensity=Gt(.05,.07,c),$i.uEyeGain.value=60*se.level,$i.uEyeSelf.value=5*Math.min(1,c*2.2),on.uniforms.uSeed.value=i*.061%997;for(let d of $e)Bm(d,e,t);if(KS(e),US(),vS(e),WS(e,t),YS(e),Pt.update(Te.position,Qs,$e,t),eo>0&&(eo-=e,eo<=0&&Ke.sub.classList.remove("show")),es.render(e),$l+=e,Ef++,$l>=1){let d=Ef/$l;Ke.fps.textContent=`fps ${Math.round(d)} \xB7 ${on.uniforms.uRes.value.x}\xD7${on.uniforms.uRes.value.y}`,jl=d<50?jl+1:0,jl>=3&&Hf>360&&(Hf-=60,wf=!0,jl=0),$l=0,Ef=0}}document.addEventListener("visibilitychange",()=>{document.hidden||(to=performance.now(),pa=0,requestAnimationFrame(rd),In||Pt.resume())});var sb=1.3,rb=1.45,fA={hor:new de(.6,.57,.5),zen:new de(.13,.23,.45),fog:new de(.55,.52,.46),fogD:.0055,haze:new de(.36,.37,.41),exp:.56};function od(i){let e=i.mesh.position,t=i.s,n=Math.sin(i.heading),s=Math.cos(i.heading),r=i.caps||(i.caps=new Float64Array(10));r[0]=e.x-n*.67*t,r[1]=e.z-s*.67*t,r[2]=e.x+n*.37*t,r[3]=e.z+s*.37*t,r[4]=.33*t;let o=i.ai.yaw,a=Math.sin(o)*.62,c=.58+Math.cos(o)*.62;return r[5]=e.x+n*.62*t,r[6]=e.z+s*.62*t,r[7]=e.x+(s*a+n*c)*t,r[8]=e.z+(-n*a+s*c)*t,r[9]=.2*t,r}var _a=0,ya=0,kn=0;function hh(i,e,t,n,s,r,o,a){let c=t-i,l=n-e,h=o-s,d=a-r,u=i-s,f=e-r,m=c*c+l*l,_=h*h+d*d,p=h*u+d*f,g=0,y=0;if(m<=1e-9&&_>1e-9)y=xt(p/_,0,1);else if(m>1e-9){let E=c*u+l*f;if(_<=1e-9)g=xt(-E/m,0,1);else{let b=c*h+l*d,v=m*_-b*b;g=v>1e-9?xt((b*p-E*_)/v,0,1):0,y=(b*g+p)/_,y<0?(y=0,g=xt(-E/m,0,1)):y>1&&(y=1,g=xt((b-E)/m,0,1))}}_a=i+c*g-(s+h*y),ya=e+l*g-(r+d*y),kn=Math.hypot(_a,ya)}function _m(){for(let e of $e)od(e);let i=99;for(let e=0;e<$e.length;e++)for(let t=e+1;t<$e.length;t++){let n=$e[e].caps,s=$e[t].caps;for(let r=0;r<10;r+=5)for(let o=0;o<10;o+=5)hh(n[r],n[r+1],n[r+2],n[r+3],s[o],s[o+1],s[o+2],s[o+3]),i=Math.min(i,kn-n[r+4]-s[o+4])}return i}var ym=8,ob=.9,Tf=9;function Af(i,e,t){i.mesh.position.x+=e,i.mesh.position.z+=t;let n=i.caps;n[0]+=e,n[1]+=t,n[2]+=e,n[3]+=t,n[5]+=e,n[6]+=t,n[7]+=e,n[8]+=t,i.shoveX+=e,i.shoveZ+=t}var Zm=()=>$e.filter(i=>!i.dead);function ab(){let i=Zm(),e=ia.uPC.value;for(let t of i)od(t);for(let t=0;t<4;t++){let n=!1;for(let s=0;s<i.length;s++){let r=i[s],o=r.mesh.position,a=r.caps;for(let c=s+1;c<i.length;c++){let l=i[c],h=l.mesh.position,d=l.caps;if(!(Math.abs(o.x-h.x)>4.5||Math.abs(o.z-h.z)>4.5))for(let u=0;u<10;u+=5)for(let f=0;f<10;f+=5){hh(a[u],a[u+1],a[u+2],a[u+3],d[f],d[f+1],d[f+2],d[f+3]);let m=a[u+4]+d[f+4];if(kn>=m)continue;let _=_a,p=ya,g=kn;g<1e-5&&(_=o.x-h.x,p=o.z-h.z,g=Math.hypot(_,p),g<1e-5&&(_=1,p=0,g=1)),_/=g,p/=g;let y=m-kn+.002,E=(r.speed+.15)/(r.speed+l.speed+.3);Af(r,_*y*E,p*y*E),Af(l,-_*y*(1-E),-p*y*(1-E)),n=!0}}}for(let s of i){let r=s.caps,o=s.mesh.position;for(let a of sa){let c=a.x+Math.round((e.x-a.x)/Ct)*Ct,l=a.z+Math.round((e.y-a.z)/Ct)*Ct;if(!(Math.abs(c-o.x)>3||Math.abs(l-o.z)>3))for(let h=0;h<10;h+=5){hh(r[h],r[h+1],r[h+2],r[h+3],c,l,c,l);let d=r[h+4]+a.r;if(kn>=d)continue;let u=_a,f=ya,m=kn;m<1e-5&&(u=o.x-c,f=o.z-l,m=Math.hypot(u,f)||1),Af(s,u/m*(d-kn+.002),f/m*(d-kn+.002)),n=!0}}}if(!n)break}}function cb(i){let e=Zm();if(!e.length)return;let t=0,n=0;for(let r of e)t+=r.mesh.position.x,n+=r.mesh.position.z,od(r);t/=e.length,n/=e.length;let s=ia.uPC.value;for(let r of e){let o=r.mesh.position,a=o.x-fe.pos.x,c=o.z-fe.pos.z,l=Math.hypot(a,c);r.press=0,r.pdx=l>.001?a/l:0,r.pdz=l>.001?c/l:0}for(let r of e){let o=Math.max(xt(r.press*4,0,1),r.startle||0);for(let a of e){if(a===r)continue;let c=Math.hypot(r.mesh.position.x-a.mesh.position.x,r.mesh.position.z-a.mesh.position.z);c<Tf&&(o=Math.max(o,a.stir*.9*Math.min(1,(Tf-c)/(Tf-3))))}r.stirGoal=o}for(let r of e)r.stir=r.stirGoal>r.stir?Math.min(r.stirGoal,r.stir+i*2):Math.max(r.stirGoal,r.stir-i*.3);for(let r of e){let o=r.mesh.position,a=r.caps,c=0,l=0;r.press>0&&(c+=r.pdx*r.press*2.2,l+=r.pdz*r.press*2.2),r.startle>0&&(c+=r.pdx*r.startle*1.9,l+=r.pdz*r.startle*1.9,r.startle=Math.max(0,r.startle-i*.3)),r.alarm=Math.max(r.alarm-i*.25,r.press,(r.startle||0)*.9);let h=t-o.x,d=n-o.z,u=Math.hypot(h,d);if(u>6){let I=.9*Math.min(1,(u-6)/8);c+=h/u*I,l+=d/u*I}let f=0,m=0,_=0;for(let I of e){if(I===r)continue;let N=I.mesh.position,z=Math.hypot(o.x-N.x,o.z-N.z);if(z<ym&&I.speed>.08){let L=1-z/ym;f+=Math.sin(I.heading)*I.speed*L,m+=Math.cos(I.heading)*I.speed*L,_+=L}if(z<4.5){let L=I.caps;for(let H=0;H<10;H+=5)for(let G=0;G<10;G+=5){hh(a[H],a[H+1],a[H+2],a[H+3],L[G],L[G+1],L[G+2],L[G+3]);let V=H+G===0?.9:.45,ie=kn-a[H+4]-L[G+4];if(ie<V&&kn>1e-5){let Y=(V-ie)/V*.9;c+=_a/kn*Y,l+=ya/kn*Y}}}}if(_>0){let I=ob*r.stir*Math.min(1,_/.6)/_;c+=f*I,l+=m*I}for(let I of sa){let N=I.x+Math.round((s.x-I.x)/Ct)*Ct,z=I.z+Math.round((s.y-I.z)/Ct)*Ct,L=o.x-N,H=o.z-z,G=Math.hypot(L,H);if(G<1.8&&G>.001){let V=(1.8-G)/1.8*1.2;c+=L/G*V,l+=H/G*V}}r.wx=Mt(r.wx,c,2.5,i),r.wz=Mt(r.wz,l,2.5,i);let p=Math.hypot(r.wx,r.wz),g=0;p>.15&&(g=Math.atan2(r.wx,r.wz)-r.heading,g=Math.atan2(Math.sin(g),Math.cos(g)));let y=.3+r.speed/2.2;r.turnVel=Mt(r.turnVel,p>.15?xt(g*1.8,-y,y):0,3,i);let E=.45*r.s,b=Math.sin(r.heading),v=Math.cos(r.heading),S=o.x-b*E,x=o.z-v*E;r.heading+=r.turnVel*i;let M=Math.sin(r.heading),C=Math.cos(r.heading);o.x=S+M*E,o.z=x+C*E;let R=p>.15?Math.min(sb,p)*(.2+.8*Math.max(0,Math.cos(g))):0;r.speed=Mt(r.speed,R,1.6,i),o.x+=M*r.speed*i,o.z+=C*r.speed*i,r.turnLead=xt(g,-.6,.6)*Math.min(1,p)}ab();for(let r of e){let o=r.mesh.position;r.mesh.rotation.y=r.heading;let a=Math.min(.8,Math.hypot(r.shoveX,r.shoveZ)/Math.max(i,.001));r.shoveX=0,r.shoveZ=0;let c=r.speed+Math.abs(r.turnVel)*.55+a;r.gait=Mt(r.gait,xt(c/.9,0,1),4,i),r.gaitPhase+=c*i/rb,o.y=-.012*r.gait*(.5-.5*Math.cos(r.gaitPhase*Math.PI*4)),r.mesh.material.userData.own.uGait.value.set(r.gaitPhase,r.gait,0,0),r.mesh.updateMatrixWorld();let l=Math.sin(r.heading),h=Math.cos(r.heading);[.55,0,-.6].forEach((d,u)=>{let f=d*.92*r.s;r.blockers[u].x=o.x+l*f,r.blockers[u].z=o.z+h*f})}}(async()=>{try{nS(),oS(),Gn&&dS();let i=0,e=4+Bl.length+1+(Gn?1:0),t=()=>{i++,Ke.loadTxt.textContent=`\uBD88\uB7EC\uC624\uB294 \uC911\u2026 ${Math.round(i/e*100)}%`},[n,,s,r]=await Promise.all([VM(t),cS().then(t),Promise.all(Bl.map(o=>of(`plants/saguaro-${o}.json`).then(a=>(t(),a)))),Promise.all(af.map(o=>of(`plants/bone-${o}.json`))).then(o=>(t(),o)),Gn?pS().then(t):Promise.resolve()]);ti=new Nl(s,df),zt.add(ti.group),Js=z0(df),Js.push(...H0(r,df)),Js.push(B0((o,a)=>Math.hypot(o-Mn.x,a-Mn.z)<1.3));for(let o of Js)zt.add(o.group);ti.setPixel(Te,on.uniforms.uRes.value.y),ti.update(fe.pos.x,fe.pos.z,Te),PS(n),DS();for(let o of fh)Tm(o,!0);ii.compile(zt,Te),ii.compile(er,Ci),Ke.loadTxt.textContent="",Ke.startBtn.disabled=!1,Ke.startBtn.textContent="\uC2DC\uC791",window.__ready=!0,to=performance.now(),requestAnimationFrame(rd)}catch(i){console.error(i),Ke.loadTxt.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."}})();var Km=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),ad=()=>document.fullscreenElement||document.webkitFullscreenElement;function cd(){if(!Km||ad())return;let i=document.documentElement,e=()=>{try{Ot&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};try{let t=(i.requestFullscreen||i.webkitRequestFullscreen).call(i,{navigationUI:"hide"});t&&t.then?t.then(e).catch(()=>{}):e()}catch{}}function lb(){if(!ad()){cd();return}try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch{}}if(Ke.fsBtn){Ke.fsBtn.hidden=!Km,Ke.fsBtn.addEventListener("click",e=>{e.stopPropagation(),lb()});let i=()=>Ke.fsBtn.setAttribute("aria-pressed",String(!!ad()));document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i)}Ke.startBtn.addEventListener("click",()=>{if(!an){an=!0,Ke.start.classList.add("gone"),document.body.classList.add("playing"),cd();try{Pt.init()}catch(i){console.warn("sound",i)}jf(),Ke.hint&&setTimeout(()=>Ke.hint.classList.add("gone"),9e3),Pt.ctx&&(Ft=ff({context:Pt.ctx}),$t&&Ft.prepare(hf[$t.mon.form].roar)),history.pushState({nh:1},""),setTimeout(()=>ni(re.lines.open,3.6),1200),oe.readyAt=performance.now()+4800,oe.lastAct=oe.readyAt,setTimeout(()=>{td(),oe.lastAct=performance.now()},5200)}});Ke.resume.addEventListener("click",()=>Xm());Mm&&(window.__dbg={state:()=>({mode:se.mode,level:se.level,oil:se.oil,nightT:ua,raiseT:ha,count:Ji,countT:Ks,revealT:Om,ended:Pn,sub:Ke.sub.textContent,pos:fe.pos.toArray()}),countAll:()=>{RS=0;for(let i of $e)i.lit=2},setCount:i=>{Ji=i},herd:()=>$e.map(i=>[+i.mesh.position.x.toFixed(2),+i.mesh.position.z.toFixed(2),+i.speed.toFixed(2),+i.gait.toFixed(2),+i.heading.toFixed(2)]),gap:()=>_m(),raw:i=>{mh.enabled=!i},cock:()=>Ma(),fire:()=>ph(),vmLight:i=>{ih.intensity=i,ih.color.setRGB(1,1,1),ih.groundColor.setRGB(.4,.4,.4)},gunHold:(i,e,t,n,s)=>{Lm.set(i,e,t),n!==void 0&&(Qr.yaw=n,Qr.roll=s)},hideWorld:i=>{zt.visible=!i},vmOrbit:(i,e,t)=>{sh=i===void 0?null:{yaw:i,pitch:e,dist:t},sh||(Ci.position.set(0,0,0),Ci.quaternion.identity())},reload:()=>xa(),gun:()=>({anim:tt?.state.anim?.type||null,step:tt?.state.anim?.steps?.[tt.state.anim.i]?.k,cocked:tt?.state.cocked,top:tt?.state.top,chambers:tt?.state.chambers.slice(),dead:$e.filter(i=>i.dead).length,startled:$e.filter(i=>i.startle>.05).length}),aimAt:i=>{let e=$e[i],t=e.blockers[1].x-fe.pos.x,n=e.blockers[1].z-fe.pos.z;fe.yaw=Math.atan2(-t,-n),fe.pitch=Math.atan2(.95*e.s-Zf,Math.hypot(t,n))},plantsNear:i=>{let e=[ti,...Js][i];return e?e.items.map(t=>{let n=t.x+Math.round((fe.pos.x-t.x)/Ct)*Ct,s=t.z+Math.round((fe.pos.z-t.z)/Ct)*Ct;return{v:t.v,x:+n.toFixed(2),z:+s.toFixed(2),d:+Math.hypot(n-fe.pos.x,s-fe.pos.z).toFixed(1),H:+t.H.toFixed(2)}}).sort((t,n)=>t.d-n.d):[]},trisBy:()=>{let i=t=>{let n=0;return t.traverse(s=>{if(s.visible&&s.geometry&&s.geometry.index){let r=s.isInstancedMesh?s.count:s.geometry.isInstancedBufferGeometry?s.geometry.instanceCount:1;n+=s.geometry.index.count/3*r}}),Math.round(n)},e={cows:0};for(let t of $e)e.cows+=i(t.mesh);return e.saguaro=i(ti.group),["ocotillo","creosote","bursage","skeleton","bones","grass"].forEach((t,n)=>{e[t]=i(Js[n].group)}),e},tris:()=>{let i=0;return zt.traverse(e=>{if(e.visible&&e.geometry&&e.geometry.index){let t=e.isInstancedMesh?e.count:e.geometry.isInstancedBufferGeometry?e.geometry.instanceCount:1;i+=e.geometry.index.count/3*t}}),i},saguaros:()=>ti?ti.items.map(i=>{let e=i.x+Math.round((fe.pos.x-i.x)/Ct)*Ct,t=i.z+Math.round((fe.pos.z-i.z)/Ct)*Ct;return{kind:Bl[i.v],x:+e.toFixed(2),z:+t.toFixed(2),d:+Math.hypot(e-fe.pos.x,t-fe.pos.z).toFixed(1),H:+i.H.toFixed(1)}}).sort((i,e)=>i.d-e.d):[],herdRaw:()=>$e.map(i=>[i.mesh.position.x,i.mesh.position.z,i.heading,i.stir,i.speed]),sim:(i,e,t)=>{t!==void 0&&(fe.yaw=t),e&&Tn.add(e);let n=1/60,s=$e.map(u=>u.mesh.position.clone()),r=99,o=0,a=0;for(;o<i;o+=n){ib(n),cb(n);for(let f of $e)Bm(f,n,o);let u=_m();r=Math.min(r,u),u<-.02&&a++}e&&Tn.delete(e);let c=$e.map((u,f)=>+u.mesh.position.distanceTo(s[f]).toFixed(1)),l=0,h=0;for(let u of $e)l+=u.mesh.position.x,h+=u.mesh.position.z;l/=$e.length,h/=$e.length;let d=Math.max(...$e.map(u=>Math.hypot(u.mesh.position.x-l,u.mesh.position.z-h)));return{minGap:+r.toFixed(3),overlapSteps:a,moved:c,centre:[+l.toFixed(1),+h.toFixed(1)],spread:+d.toFixed(1),speeds:$e.map(u=>+u.speed.toFixed(2)),player:[+fe.pos.x.toFixed(1),+fe.pos.z.toFixed(1)]}},tumbles:()=>fh.map(i=>[+i.pos.x.toFixed(1),+i.pos.z.toFixed(1),+i.speed.toFixed(2)]),lightAt:i=>CS($e[i].mesh.localToWorld(new A(0,1,0))),goto:(i,e,t,n)=>{fe.pos.set(i,0,e),fe.yaw=t,fe.pitch=n??0},walk:(i,e)=>{Tn.add(i),setTimeout(()=>Tn.delete(i),e)},turn:i=>{fe.yaw+=i},raise:i=>{gh=i},off:()=>io(),gust:()=>{se.gustTimer=0},blow:()=>kf("wind"),oil:i=>{se.oil=i},relight:()=>io(),night:()=>{ua=1},hp:()=>Cn,hurt:()=>xh(),scaring:()=>!!oe.scaring,station:i=>{oe.i=i,fe.pos.x=re.stations[i].x},monScreen:()=>{let i=$t.eyeWorld.clone().project(Te);return[Math.round((i.x+1)/2*innerWidth),Math.round((1-i.y)/2*innerHeight)]},monster:()=>$t&&{i:$e.indexOf($t),clue:$t.mon.clue,st:$t.station,eyes:$t.mon.eyes.map(i=>i.position.toArray().map(e=>+e.toFixed(2)))},fight:()=>({on:xe.on,phase:xe.phase,hits:xe.hits,d:xe.on?+Math.hypot(Te.position.x-xe.pos.x,Te.position.z-xe.pos.z).toFixed(2):null,hp:Cn}),shootMonster:()=>{let i=$t;return i&&!i.gone?(Vm(i),!0):!1},hitFight:()=>Wm(),gunState:()=>tt&&{cocked:tt.state.cocked,anim:tt.state.anim?.type||null,chambers:tt.state.chambers.slice(),top:tt.state.top},shootAt:(i,e)=>nd(i,e),cock:()=>vh(),dead:()=>$e.filter(i=>i.dead).length,nightState:()=>({i:oe.i,walking:oe.walking,count:Ji,misses:oe.misses,matches:se.matches,ended:Pn,paused:In,endT:oe.endT,finishAt:oe.finishAt,sub:Ke.sub.textContent,lamp:se.mode,raised:js,x:+fe.pos.x.toFixed(2),cows:$e.map(i=>({st:i.station,x:+i.mesh.position.x.toFixed(2),y:+i.y0.toFixed(2),z:+i.mesh.position.z.toFixed(2),counted:i.counted}))}),tapCow:(i,e)=>{let t=$e[i],n=(e?new A(t.blockers[1].x,t.y0+.95*t.s,t.blockers[1].z):t.eyeWorld.clone()).project(Te);return ch(n.x,n.y),[+n.x.toFixed(3),+n.y.toFixed(3)]},eyes:()=>$e.map(i=>[+i.y0.toFixed(2),+i.mesh.rotation.x.toFixed(2),+i.eyeWorld.y.toFixed(2),+i.eyeWorld.z.toFixed(2),+i.mesh.position.z.toFixed(2)]),screenOf:i=>{let e=$e[i].eyeWorld.clone().project(Te);return[Math.round((e.x+1)/2*innerWidth),Math.round((1-e.y)/2*innerHeight)]},tapAt:(i,e)=>ch(i,e),next:()=>sd(),ready:()=>{oe.readyAt=0},pause:()=>va(),resume:()=>Xm(),seen:()=>$e.map((i,e)=>{let t=i.headWorld,n=t.clone().project(Te),s=t.clone().sub(Te.position),r=s.length();s.divideScalar(r);let o=null;for(let[a,c]of $e.entries()){if(c===i)continue;for(let h of c.blockers)$s(Te.position,s,new A(h.x,c.y0+.95*c.s,h.z),.43*c.s)<r-.3&&(o=a);$s(Te.position,s,c.headWorld,.24*c.s)<r-.3&&(o=a)}return{i:e,st:i.station,y:+t.y.toFixed(2),sx:+n.x.toFixed(2),sy:+n.y.toFixed(2),by:o}}),eyeUp:(i,e,t)=>{qm=i,e!==void 0&&(fe.pos.z=e),t!==void 0&&(fe.pitch=t)},arm:()=>({W:ji.W.toArray(),E:ji.E.toArray(),f:ji.f.toArray(),u:ji.u.toArray(),hp:Vn.position.toArray(),hq:Vn.quaternion.toArray(),lq:no.quaternion.toArray(),lp:mi.position.toArray(),exp:on.uniforms.uExp.value,adapt:la})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
