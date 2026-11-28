(()=>{var Cp=0,_u=1,Pp=2;var zr=1,Ip=2,Br=3,Ei=0,nn=1,Kt=2,Xi=0,Or=1,$n=2,Mu=3,Su=4,Lp=5;var Hs=100,Dp=101,Np=102,Fp=103,Up=104,zp=200,Bp=201,Op=202,kp=203,bu=204,wu=205,Hp=206,Vp=207,Gp=208,Wp=209,qp=210,Xp=211,Yp=212,Zp=213,Kp=214,fc=0,dc=1,pc=2,Er=3,mc=4,gc=5,xc=6,vc=7,Eu=0,Jp=1,$p=2,jn=0,Tu=1,Au=2,Ru=3,Cu=4,Pu=5,Iu=6,Lu=7;var Du=300,Vs=301,kr=302,Kc=303,Jc=304,yc=1e3,yi=1001,_c=1002,hn=1003,jp=1004;var Zo=1005;var pn=1006,$c=1007;var ui=1008;var Fn=1009,Nu=1010,Fu=1011,Hr=1012,jc=1013,fi=1014,Qn=1015,gn=1016,Qc=1017,el=1018,Gs=1020,Uu=35902,zu=35899,Bu=1021,Ou=1022,On=1023,Vi=1026,Yi=1027,tl=1028,nl=1029,ys=1030,il=1031;var sl=1033,Ko=33776,Jo=33777,$o=33778,jo=33779,rl=35840,ol=35841,al=35842,cl=35843,ll=36196,hl=37492,ul=37496,fl=37488,dl=37489,Qo=37490,pl=37491,ml=37808,gl=37809,xl=37810,vl=37811,yl=37812,_l=37813,Ml=37814,Sl=37815,bl=37816,wl=37817,El=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,Dl=36284,ea=36285,Nl=36286;var wo=2300,Mc=2301,hc=2302,uu=2303,fu=2400,du=2401,pu=2402;var Qp=3200,Fl=3201;var Ul=0,e0=1,Zi="",Rn="srgb",Ns="srgb-linear",Eo="linear",Rt="srgb";var uc=7680;var t0=519,n0=512,i0=513,s0=514,ku=515,r0=516,o0=517,Hu=518,Vu=519,Gu=35044;var Wu="300 es",Yn=2e3,Tr=2001;function Wg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function a0(){let n=To("canvas");return n.style.display="block",n}var Kd={},Ar=null;function Ao(...n){let e="THREE."+n.shift();Ar?Ar("log",e,...n):console.log(e,...n)}function c0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=c0(n);let e="THREE."+n.shift();if(Ar)Ar("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=c0(n);let e="THREE."+n.shift();if(Ar)Ar("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ds(...n){let e=n.join(" ");e in Kd||(Kd[e]=!0,Ye(...n))}function l0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var h0={[fc]:fc,[pc]:xc,[mc]:mc,[Er]:gc,[dc]:dc,[xc]:pc,[vc]:vc,[gc]:Er},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,_o=Math.PI/180,Rr=180/Math.PI;function _s(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function qu(n,e){return(n%e+e)%e}function Xg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yg(n,e,t){return n!==e?(t-n)/(e-n):0}function Mo(n,e,t){return(1-t)*n+t*e}function Zg(n,e,t,i){return Mo(n,e,1-Math.exp(-t*i))}function Kg(n,e=1){return e-Math.abs(qu(n,e*2)-e)}function Jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qg(n,e){return n+Math.random()*(e-n)}function ex(n){return n*(.5-Math.random())}function tx(n){n!==void 0&&(Jd=n);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nx(n){return n*_o}function ix(n){return n*Rr}function sx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ox(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*h,a*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yu(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Zu(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ki={DEG2RAD:_o,RAD2DEG:Rr,generateUUID:_s,clamp:dt,euclideanModulo:qu,mapLinear:Xg,inverseLerp:Yg,lerp:Mo,damp:Zg,pingpong:Kg,smoothstep:Jg,smootherstep:$g,randInt:jg,randFloat:Qg,randFloatSpread:ex,seededRandom:tx,degToRad:nx,radToDeg:ix,isPowerOfTwo:sx,ceilPowerOfTwo:rx,floorPowerOfTwo:Xu,setQuaternionFromProperEuler:ox,normalize:Zu,denormalize:Yu},ef=class ef{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ef.prototype.isVector2=!0;var le=ef,vt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||c!==u||l!==f||h!==m){let p=c*u+l*f+h*m+d*v;p<0&&(u=-u,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),w=Math.sin(_);g=Math.sin(g*_)/w,a=Math.sin(a*_)/w,c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+v*a}else{c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+v*a;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-a*f,e[t+2]=l*m+h*f+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tf=class tf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tf.prototype.isVector3=!0;var T=tf,Hh=new T,$d=new vt,nf=class nf{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],v=s[0],p=s[3],g=s[6],_=s[1],w=s[4],b=s[7],y=s[2],M=s[5],x=s[8];return r[0]=o*v+a*_+c*y,r[3]=o*p+a*w+c*M,r[6]=o*g+a*b+c*x,r[1]=l*v+h*_+d*y,r[4]=l*p+h*w+d*M,r[7]=l*g+h*b+d*x,r[2]=u*v+f*_+m*y,r[5]=u*p+f*w+m*M,r[8]=u*g+f*b+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=t*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=d*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nf.prototype.isMatrix3=!0;var nt=nf,Vh=new nt,jd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){let n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}var xt=ax();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var or,Sc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{or===void 0&&(or=To("canvas")),or.width=e.width,or.height=e.height;let s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cx=0,Cr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gh(s[o].image)):r.push(Gh(s[o]))}else r=Gh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var lx=0,Wh=new T,Cn=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yi,s=yi,r=pn,o=ui,a=On,c=Fn,l=n.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=_s(),this.name="",this.source=new Cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Du;Cn.DEFAULT_ANISOTROPY=1;var sf=class sf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],v=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(f+1)/2,y=(g+1)/2,M=(h+u)/4,x=(d+v)/4,S=(m+p)/4;return w>b&&w>y?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=M/i,r=x/i):b>y?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=S/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=x/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sf.prototype.isVector4=!0;var Ft=sf,bc=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Cn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ro=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zc=class Zc{constructor(e,t,i,s,r,o,a,c,l,h,d,u,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,f,m,v,p)}set(e,t,i,s,r,o,a,c,l,h,d,u,f,m,v,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,v=l*d;t[0]=u+v*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,v=l*d;t[0]=u-v*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,v=a*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hx,e,ux)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),as.crossVectors(i,Un),as.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),as.crossVectors(i,Un)),as.normalize(),Ba.crossVectors(Un,as),s[0]=as.x,s[4]=Ba.x,s[8]=Un.x,s[1]=as.y,s[5]=Ba.y,s[9]=Un.y,s[2]=as.z,s[6]=Ba.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],v=i[6],p=i[10],g=i[14],_=i[3],w=i[7],b=i[11],y=i[15],M=s[0],x=s[4],S=s[8],C=s[12],R=s[1],P=s[5],D=s[9],k=s[13],L=s[2],V=s[6],q=s[10],X=s[14],ce=s[3],J=s[7],oe=s[11],he=s[15];return r[0]=o*M+a*R+c*L+l*ce,r[4]=o*x+a*P+c*V+l*J,r[8]=o*S+a*D+c*q+l*oe,r[12]=o*C+a*k+c*X+l*he,r[1]=h*M+d*R+u*L+f*ce,r[5]=h*x+d*P+u*V+f*J,r[9]=h*S+d*D+u*q+f*oe,r[13]=h*C+d*k+u*X+f*he,r[2]=m*M+v*R+p*L+g*ce,r[6]=m*x+v*P+p*V+g*J,r[10]=m*S+v*D+p*q+g*oe,r[14]=m*C+v*k+p*X+g*he,r[3]=_*M+w*R+b*L+y*ce,r[7]=_*x+w*P+b*V+y*J,r[11]=_*S+w*D+b*q+y*oe,r[15]=_*C+w*k+b*X+y*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15],_=c*f-l*u,w=a*f-l*d,b=a*u-c*d,y=o*f-l*h,M=o*u-c*h,x=o*d-a*h;return t*(v*_-p*w+g*b)-i*(m*_-p*y+g*M)+s*(m*w-v*y+g*x)-r*(m*b-v*M+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],_=t*a-i*o,w=t*c-s*o,b=t*l-r*o,y=i*c-s*a,M=i*l-r*a,x=s*l-r*c,S=h*v-d*m,C=h*p-u*m,R=h*g-f*m,P=d*p-u*v,D=d*g-f*v,k=u*g-f*p,L=_*k-w*D+b*P+y*R-M*C+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return e[0]=(a*k-c*D+l*P)*V,e[1]=(s*D-i*k-r*P)*V,e[2]=(v*x-p*M+g*y)*V,e[3]=(u*M-d*x-f*y)*V,e[4]=(c*R-o*k-l*C)*V,e[5]=(t*k-s*R+r*C)*V,e[6]=(p*b-m*x-g*w)*V,e[7]=(h*x-u*b+f*w)*V,e[8]=(o*D-a*R+l*S)*V,e[9]=(i*R-t*D-r*S)*V,e[10]=(m*M-v*b+g*_)*V,e[11]=(d*b-h*M-f*_)*V,e[12]=(a*C-o*P-c*S)*V,e[13]=(t*P-i*C+s*S)*V,e[14]=(v*w-m*y-p*_)*V,e[15]=(h*y-d*w+u*_)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,v=o*h,p=o*d,g=a*d,_=c*l,w=c*h,b=c*d,y=i.x,M=i.y,x=i.z;return s[0]=(1-(v+g))*y,s[1]=(f+b)*y,s[2]=(m-w)*y,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(u+g))*M,s[6]=(p+_)*M,s[7]=0,s[8]=(m+w)*x,s[9]=(p-_)*x,s[10]=(1-(u+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ar.set(s[0],s[1],s[2]).length(),a=ar.set(s[4],s[5],s[6]).length(),c=ar.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ri.copy(this);let l=1/o,h=1/a,d=1/c;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Yn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Tr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===Yn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Tr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zc.prototype.isMatrix4=!0;var ct=Zc,ar=new T,ri=new ct,hx=new T(0,0,0),ux=new T(1,1,1),as=new T,Ba=new T,Un=new T,ep=new ct,tp=new vt,tn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fx=0,np=new T,cr=new vt,Fi=new ct,Oa=new T,ho=new T,dx=new T,px=new vt,ip=new T(1,0,0),sp=new T(0,1,0),rp=new T(0,0,1),op={type:"added"},mx={type:"removed"},lr={type:"childadded",child:null},qh={type:"childremoved",child:null},un=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new T,t=new tn,i=new vt,s=new T(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new nt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ho,Oa,this.up):Fi.lookAt(Oa,ho,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Fi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),lr.child=e,this.dispatchEvent(lr),lr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mx),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new T(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},gx={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=qu(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xh(o,r,e+1/3),this.g=Xh(o,r,e),this.b=Xh(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let i=u0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return xt.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Rn){xt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(ka);let i=Mo(cs.h,ka.h,t),s=Mo(cs.s,ka.s,t),r=Mo(cs.l,ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ge;ge.NAMES=u0;var Po=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fs=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new T,Ui=new T,Yh=new T,zi=new T,hr=new T,ur=new T,ap=new T,Zh=new T,Kh=new T,Jh=new T,$h=new Ft,jh=new Ft,Qh=new Ft,ki=class n{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Ui.subVectors(i,t),Yh.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Ui),c=oi.dot(Yh),l=Ui.dot(Ui),h=Ui.dot(Yh),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zi.x),c.addScaledVector(o,zi.y),c.addScaledVector(a,zi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return $h.setScalar(0),jh.setScalar(0),Qh.setScalar(0),$h.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,i),Qh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($h,r.x),o.addScaledVector(jh,r.y),o.addScaledVector(Qh,r.z),o}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Ui.subVectors(e,t),oi.cross(Ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,i),ur.subVectors(r,i),Zh.subVectors(e,i);let c=hr.dot(Zh),l=ur.dot(Zh);if(c<=0&&l<=0)return t.copy(i);Kh.subVectors(e,s);let h=hr.dot(Kh),d=ur.dot(Kh);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(i).addScaledVector(hr,o);Jh.subVectors(e,r);let f=hr.dot(Jh),m=ur.dot(Jh);if(m>=0&&f<=m)return t.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(ur,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return ap.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(ap,a);let g=1/(p+v+u);return o=v*g,a=u*g,t.copy(i).addScaledVector(hr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Va.subVectors(this.max,uo),fr.subVectors(e.a,uo),dr.subVectors(e.b,uo),pr.subVectors(e.c,uo),ls.subVectors(dr,fr),hs.subVectors(pr,dr),Cs.subVectors(fr,pr);let t=[0,-ls.z,ls.y,0,-hs.z,hs.y,0,-Cs.z,Cs.y,ls.z,0,-ls.x,hs.z,0,-hs.x,Cs.z,0,-Cs.x,-ls.y,ls.x,0,-hs.y,hs.x,0,-Cs.y,Cs.x,0];return!eu(t,fr,dr,pr,Va)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,fr,dr,pr,Va))?!1:(Ga.crossVectors(ls,hs),t=[Ga.x,Ga.y,Ga.z],eu(t,fr,dr,pr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new T,new T,new T,new T,new T,new T,new T,new T],ai=new T,Ha=new Mi,fr=new T,dr=new T,pr=new T,ls=new T,hs=new T,Cs=new T,uo=new T,Va=new T,Ga=new T,Ps=new T;function eu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ps.fromArray(n,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),h=i.dot(Ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qt=new T,Wa=new le,xx=0,He=class extends _i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=Qn,this.version=0,this._normalizationScale=e!==void 0?zl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.array)}};var Fs=class extends He{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Us=class extends He{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends He{constructor(e,t,i){super(new Float32Array(e),t,i)}},vx=new Mi,fo=new T,tu=new T,Nn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(tu)),this.expandByPoint(fo.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yx=0,Xn=new ct,nu=new un,mr=new T,zn=new Mi,po=new Mi,ln=new T,Mt=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wg(e)?Us:Fs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];po.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(zn.min,po.min),zn.expandByPoint(ln),ln.addVectors(zn.max,po.max),zn.expandByPoint(ln)):(zn.expandByPoint(po.min),zn.expandByPoint(po.max))}zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ln.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),ln.add(mr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new T,c[C]=new T;let h=new T,d=new T,u=new T,f=new le,m=new le,v=new le,p=new T,g=new T;function _(C,R,P){l[C]=l[R]=l[P]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,R),v.fromBufferAttribute(r,P),d.sub(h),u.sub(h),m.sub(f),v.sub(f);let D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(D),a[C].add(p),a[R].add(p),a[P].add(p),c[C].add(g),c[R].add(g),c[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,R=w.length;C<R;++C){let P=w[C],D=P.start,k=P.count;for(let L=D,V=D+k;L<V;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new T,y=new T,M=new T,x=new T;function S(C){M.fromBufferAttribute(s,C),x.copy(M);let R=a[C];b.copy(R),b.sub(M.multiplyScalar(M.dot(R))).normalize(),y.crossVectors(x,R);let D=y.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,D)}for(let C=0,R=i.count;C<R;++C)l[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new He(u,h,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=_s()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=cp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=cp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function cp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=_s()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var An=new T,Ir=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?zl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.data.array)}},iu=new T,_x=new T,Mx=new nt,ci=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=iu.subVectors(i,t).cross(_x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mx.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sx=0,Si=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Or,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=wu,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gi=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gr,mo=new T,xr=new T,vr=new T,yr=new le,go=new le,f0=new ct,qa=new T,xo=new T,Xa=new T,lp=new le,su=new le,hp=new le,ds=class extends un{constructor(e=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Io(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new Ir(i,3,0,!1)),gr.setAttribute("uv",new Ir(i,2,3,!1))}this.geometry=gr,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),f0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ya(qa.set(-.5,-.5,0),vr,o,xr,s,r),Ya(xo.set(.5,-.5,0),vr,o,xr,s,r),Ya(Xa.set(.5,.5,0),vr,o,xr,s,r),lp.set(0,0),su.set(1,0),hp.set(1,1);let a=e.ray.intersectTriangle(qa,xo,Xa,!1,mo);if(a===null&&(Ya(xo.set(-.5,.5,0),vr,o,xr,s,r),su.set(0,1),a=e.ray.intersectTriangle(qa,Xa,xo,!1,mo),a===null))return;let c=e.ray.origin.distanceTo(mo);c<e.near||c>e.far||t.push({distance:c,point:mo.clone(),uv:ki.getInterpolation(mo,qa,xo,Xa,lp,su,hp,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ya(n,e,t,i,s,r){yr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(go.x=r*yr.x-s*yr.y,go.y=s*yr.x+r*yr.y):go.copy(yr),n.copy(e),n.x+=go.x,n.y+=go.y,n.applyMatrix4(f0)}var Oi=new T,ru=new T,Za=new T,Ka=new T,Lo=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ru.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Ka.dot(this.direction),c=-Ka.dot(Za),l=Ka.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ru).addScaledVector(Za,u),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,v=t.y-o.y,p=t.z-o.z,g=i.x-o.x,_=i.y-o.y,w=i.z-o.z,b=Math.abs(c),y=Math.abs(l),M=Math.abs(h),x,S,C,R,P,D,k,L,V,q,X,ce;if(b>=y&&b>=M?(C=c,D=d,V=m,ce=g,c>=0?(x=l,S=h,R=u,P=f,k=v,L=p,q=_,X=w):(x=h,S=l,R=f,P=u,k=p,L=v,q=w,X=_)):y>=M?(C=l,D=u,V=v,ce=_,l>=0?(x=h,S=c,R=f,P=d,k=p,L=m,q=w,X=g):(x=c,S=h,R=d,P=f,k=m,L=p,q=g,X=w)):(C=h,D=f,V=p,ce=w,h>=0?(x=c,S=l,R=d,P=u,k=m,L=v,q=g,X=_):(x=l,S=c,R=u,P=d,k=v,L=m,q=_,X=g)),C===0)return null;let J=x/C,oe=S/C,he=1/C,Le=R-J*D,tt=P-oe*D,se=k-J*V,Ee=L-oe*V,De=q-J*ce,We=X-oe*ce,Te=De*Ee-We*se,et=Le*We-tt*De,wt=se*tt-Ee*Le;if(s){if(Te<0||et<0||wt<0)return null}else if((Te<0||et<0||wt<0)&&(Te>0||et>0||wt>0))return null;let B=Te+et+wt;if(B===0)return null;let F=he*(Te*D+et*V+wt*ce);return(B>0?F<0:F>0)?null:this.at(F/B,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ps=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},up=new ct,Is=new Lo,Ja=new Nn,fp=new T,$a=new T,ja=new T,Qa=new T,ou=new T,ec=new T,dp=new T,tc=new T,st=class extends un{constructor(e=new Mt,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ec.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(ou.fromBufferAttribute(d,e),o?ec.addScaledVector(ou,h):ec.addScaledVector(ou.sub(t),h))}t.add(ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(Ja.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ja,fp)===null||Is.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(up.copy(r).invert(),Is.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,y=w;b<y;b+=3){let M=a.getX(b),x=a.getX(b+1),S=a.getX(b+2);s=nc(this,g,e,i,l,h,d,M,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let _=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);s=nc(this,o,e,i,l,h,d,_,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,y=w;b<y;b+=3){let M=b,x=b+1,S=b+2;s=nc(this,g,e,i,l,h,d,M,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let _=p,w=p+1,b=p+2;s=nc(this,o,e,i,l,h,d,_,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function bx(n,e,t,i,s,r,o,a){let c;if(e.side===nn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;tc.copy(a),tc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:n}}function nc(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,$a),n.getVertexPosition(c,ja),n.getVertexPosition(l,Qa);let h=bx(n,e,t,i,$a,ja,Qa,dp);if(h){let d=new T;ki.getBarycoord(dp,$a,ja,Qa,d),s&&(h.uv=ki.getInterpolatedAttribute(s,a,c,l,d,new le)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,c,l,d,new le)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,c,l,d,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};ki.getNormal($a,ja,Qa,u.normal),h.face=u,h.barycoord=d}return h}var zs=class extends Cn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=hn,h=hn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class extends He{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new ct,pp=new ct,ic=[],mp=new Mi,wx=new ct,vo=new st,yo=new Nn,Do=class extends st{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),mp.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),yo.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),pp.multiplyMatrices(i,_r),vo.matrixWorld=pp,vo.raycast(e,ic);for(let o=0,a=ic.length;o<a;o++){let c=ic[o];c.instanceId=r,c.object=this,t.push(c)}ic.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(s*this.count),s,this.count,tl,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new Nn,Ex=new le(.5,.5),sc=new T,bi=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],w=r[13],b=r[14],y=r[15];if(s[0].setComponents(l-o,f-h,g-m,y-_).normalize(),s[1].setComponents(l+o,f+h,g+m,y+_).normalize(),s[2].setComponents(l+a,f+d,g+v,y+w).normalize(),s[3].setComponents(l-a,f-d,g-v,y-w).normalize(),i)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,f-u,g-p,y-b).normalize();else if(s[4].setComponents(l-c,f-u,g-p,y-b).normalize(),t===Yn)s[5].setComponents(l+c,f+u,g+p,y+b).normalize();else if(t===Tr)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=Ex.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(sc.x=s.normal.x>0?e.max.x:e.min.x,sc.y=s.normal.y>0?e.max.y:e.min.y,sc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gp=new ct,Ec=class n{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];gp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new bi),i[s].setFromProjectionMatrix(gp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new bi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Tc=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new ct,mu=new Lo,rc=new Nn,oc=new T,No=class extends un{constructor(e=new Mt,t=new Tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,e.ray.intersectsSphere(rc)===!1)return;xp.copy(s).invert(),mu.copy(e.ray).applyMatrix4(xp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,v=f;m<v;m++){let p=l.getX(m);oc.fromBufferAttribute(d,p),vp(oc,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,v=f;m<v;m++)oc.fromBufferAttribute(d,m),vp(oc,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vp(n,e,t,i,s,r,o){let a=mu.distanceSqToPoint(n);if(a<t){let c=new T;mu.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fo=class extends Cn{constructor(e=[],t=Vs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bs=class extends Cn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Cn{constructor(e,t,i=fi,s,r,o,a=hn,c=hn,l,h=Vi,d=1){if(h!==Vi&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends li{constructor(e,t=fi,i=Vs,s,r,o=hn,a=hn,c,l=Vi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zo=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lr=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function m(v,p,g,_,w,b,y,M,x,S,C){let R=b/x,P=y/S,D=b/2,k=y/2,L=M/2,V=x+1,q=S+1,X=0,ce=0,J=new T;for(let oe=0;oe<q;oe++){let he=oe*P-k;for(let Le=0;Le<V;Le++){let tt=Le*R-D;J[v]=tt*_,J[p]=he*w,J[g]=L,l.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[g]=M>0?1:-1,h.push(J.x,J.y,J.z),d.push(Le/x),d.push(1-oe/S),X+=1}}for(let oe=0;oe<S;oe++)for(let he=0;he<x;he++){let Le=u+he+V*oe,tt=u+he+V*(oe+1),se=u+(he+1)+V*(oe+1),Ee=u+(he+1)+V*oe;c.push(Le,tt,Ee),c.push(tt,se,Ee),ce+=6}a.addGroup(f,ce,C),f+=ce,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wi=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],p=i/2,g=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function _(){let b=new T,y=new T,M=0,x=(t-e)/i;for(let S=0;S<=r;S++){let C=[],R=S/r,P=R*(t-e)+e;for(let D=0;D<=s;D++){let k=D/s,L=k*c+a,V=Math.sin(L),q=Math.cos(L);y.x=P*V,y.y=-R*i+p,y.z=P*q,d.push(y.x,y.y,y.z),b.set(V,x,q).normalize(),u.push(b.x,b.y,b.z),f.push(k,1-R),C.push(m++)}v.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let R=v[C][S],P=v[C+1][S],D=v[C+1][S+1],k=v[C][S+1];(e>0||C!==0)&&(h.push(R,P,k),M+=3),(t>0||C!==r-1)&&(h.push(P,D,k),M+=3)}l.addGroup(g,M,0),g+=M}function w(b){let y=m,M=new le,x=new T,S=0,C=b===!0?e:t,R=b===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=s;D++){let L=D/s*c+a,V=Math.cos(L),q=Math.sin(L);x.x=C*q,x.y=p*R,x.z=C*V,d.push(x.x,x.y,x.z),u.push(0,R,0),M.x=V*.5+.5,M.y=q*.5*R+.5,f.push(M.x,M.y),m++}for(let D=0;D<s;D++){let k=y+D,L=P+D;b===!0?h.push(L,L+1,k):h.push(L+1,L,k),S+=3}l.addGroup(g,S,b===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ac=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new T,b=new T,y=new T;for(let M=0;M<t.length;M+=3)f(t[M+0],w),f(t[M+1],b),f(t[M+2],y),c(w,b,y,_)}function c(_,w,b,y){let M=y+1,x=[];for(let S=0;S<=M;S++){x[S]=[];let C=_.clone().lerp(b,S/M),R=w.clone().lerp(b,S/M),P=M-S;for(let D=0;D<=P;D++)D===0&&S===M?x[S][D]=C:x[S][D]=C.clone().lerp(R,D/P)}for(let S=0;S<M;S++)for(let C=0;C<2*(M-S)-1;C++){let R=Math.floor(C/2);C%2===0?(u(x[S][R+1]),u(x[S+1][R]),u(x[S][R])):(u(x[S][R+1]),u(x[S+1][R+1]),u(x[S+1][R]))}}function l(_){let w=new T;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(_),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let _=new T;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let b=p(_)/2/Math.PI+.5,y=g(_)/Math.PI+.5;o.push(b,1-y)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let w=o[_+0],b=o[_+2],y=o[_+4],M=Math.max(w,b,y),x=Math.min(w,b,y);M>.9&&x<.1&&(w<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),y<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,w){let b=_*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function m(){let _=new T,w=new T,b=new T,y=new T,M=new le,x=new le,S=new le;for(let C=0,R=0;C<r.length;C+=9,R+=6){_.set(r[C+0],r[C+1],r[C+2]),w.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),M.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),y.copy(_).add(w).add(b).divideScalar(3);let P=p(y);v(M,R+0,_,P),v(x,R+2,w,P),v(S,R+4,b,P)}}function v(_,w,b,y){y<0&&_.x===1&&(o[w]=_.x-1),b.x===0&&b.z===0&&(o[w]=y/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Bo=class n extends Ac{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,s=[],r=[],o=[],a=new T,c=new ct;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Oo=class extends Kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends Oo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ku(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var yp=new T,_p=new T,au=new Ku,cu=new Ku,lu=new Ku,Dr=class extends Kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(_p.subVectors(s[0],s[1]).add(s[0]),l=_p);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),au.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,v,p),cu.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,v,p),lu.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(au.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),cu.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),lu.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(au.calc(c),cu.calc(c),lu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Tx(n,e){let t=1-n;return t*t*e}function Ax(n,e){return 2*(1-n)*n*e}function Rx(n,e){return n*n*e}function So(n,e,t,i){return Tx(n,e)+Ax(n,t)+Rx(n,i)}function Cx(n,e){let t=1-n;return t*t*t*e}function Px(n,e){let t=1-n;return 3*t*t*n*e}function Ix(n,e){return 3*(1-n)*n*n*e}function Lx(n,e){return n*n*n*e}function bo(n,e,t,i,s){return Cx(n,e)+Px(n,t)+Ix(n,i)+Lx(n,s)}var Cc=class extends Kn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends Kn{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y),bo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends Kn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends Kn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends Kn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Kn{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y),So(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Mp(a,c.x,l.x,h.x,d.x),Mp(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Dx=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Dr,CubicBezierCurve:Cc,CubicBezierCurve3:Pc,EllipseCurve:Oo,LineCurve:Ic,LineCurve3:Lc,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:ko,SplineCurve:Nc});var ms=class n extends Mt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new T,u=new le,f=new T,m=new T,v=new T,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let _=0;_<=t;_++){let w=i+_*h*s,b=Math.sin(w),y=Math.cos(w);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*b,d.y=e[M].y,d.z=e[M].x*y,o.push(d.x,d.y,d.z),u.x=_/t,u.y=M/(e.length-1),a.push(u.x,u.y);let x=c[3*M+0]*b,S=c[3*M+1],C=c[3*M+0]*y;l.push(x,S,C)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let b=w+_*e.length,y=b,M=b+e.length,x=b+e.length+1,S=b+1;r.push(y,M,S),r.push(x,S,M)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Jn=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let w=0;w<l;w++){let b=w*d-r;m.push(b,-_,0),v.push(0,0,1),p.push(w/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let w=_+l*g,b=_+l*(g+1),y=_+1+l*(g+1),M=_+1+l*g;f.push(w,b,M),f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var qi=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new T,u=new T,f=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){let _=[],w=g/i,b=o+w*a,y=e*Math.cos(b),M=Math.sqrt(e*e-y*y),x=0;g===0&&o===0?x=.5/t:g===i&&c===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let C=S/t,R=s+C*r;d.x=-M*Math.cos(R),d.y=y,d.z=M*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(C+x,1-w),_.push(l++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let w=h[g][_+1],b=h[g][_],y=h[g+1][_],M=h[g+1][_+1];(g!==0||o>0)&&f.push(w,b,M),(g!==i-1||c<Math.PI)&&f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ho=class n extends Mt{constructor(e=new ko(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new le,h=new T,d=[],u=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function v(){for(let w=0;w<t;w++)p(w);p(r===!1?t:0),_(),g()}function p(w){h=e.getPointAt(w/t,h);let b=o.normals[w],y=o.binormals[w];for(let M=0;M<=s;M++){let x=M/s*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);c.x=C*b.x+S*y.x,c.y=C*b.y+S*y.y,c.z=C*b.z+S*y.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let y=(s+1)*(w-1)+(b-1),M=(s+1)*w+(b-1),x=(s+1)*w+b,S=(s+1)*(w-1)+b;m.push(y,M,S),m.push(M,x,S)}}function _(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)l.x=w/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Dx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Sp(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Sp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let s in i)e[s]=i[s]}return e}function Sp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ju(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var qs={clone:Ws,merge:Sn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new T().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mn=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wi=class extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Os=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zc=class extends gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=e,a=2*t-i;break;case pu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case du:o=e,c=2*i-t;break;case pu:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),v=m*m,p=v*m,g=-u*p+2*u*v-u*m,_=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*m+1,w=(-1-f)*p+(1.5+f)*v+.5*m,b=f*p-f*v;for(let y=0;y!==a;++y)r[y]=g*o[h+y]+_*o[l+y]+w*o[c+y]+b*o[d+y];return r}},Bc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Oc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kc=class extends gs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-t)/(s-t),v=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*v+o[c+p]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let v=o[l+m],p=o[c+m],g=f*u+m*2,_=d[g],w=d[g+1],b=e*u+m*2,y=h[b],M=h[b+1],x=Bx(i,t,_,y,s);r[m]=d0(x,v,w,M,p)}return r}};function d0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function zx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Bx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=d0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=zx(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ac(e.settings)&&(i.settings={inTangents:Mr(e.settings.inTangents,Array),outTangents:Mr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Mc:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break;case uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return hc;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ac(this.settings)&&(bp(this.settings.inTangents,e),bp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ac(this.settings)&&(wp(this.settings.inTangents,e),wp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&qg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let v=t[d+m];if(v!==t[u+m]||v!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function wp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Mc;var xs=class extends Bn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=wo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Hc.prototype.ValueTypeName="color";var Vc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Vc.prototype.ValueTypeName="number";var Gc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)vt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vo=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Bn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=wo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Wc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},p0=new qc,Xc=class{constructor(e){this.manager=e!==void 0?e:p0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends un{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fr=class extends Nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hu=new ct,Ep=new T,Tp=new T,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cc=new T,lc=new vt,vi=new T,Wo=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cc,lc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,lc,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(cc,lc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,lc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new T,Ap=new le,Rp=new le,en=class extends Wo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gu=class extends Go{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},hi=class extends Nr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ks=class extends Wo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xu=class extends Go{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xo=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Sr=-90,br=1,Ur=class extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Sr,br,e,t);s.layers=this.layers,this.add(s);let r=new en(Sr,br,e,t);r.layers=this.layers,this.add(r);let o=new en(Sr,br,e,t);o.layers=this.layers,this.add(o);let a=new en(Sr,br,e,t);a.layers=this.layers,this.add(a);let c=new en(Sr,br,e,t);c.layers=this.layers,this.add(c);let l=new en(Sr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Yc=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Yo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ox.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ox(){this._document.hidden===!1&&this.reset()}var $u="\\[\\]\\.:\\/",kx=new RegExp("["+$u+"]","g"),ju="[^"+$u+"]",Hx="[^"+$u.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",ju),Gx=/(WCOD+)?/.source.replace("WCOD",Hx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),Xx=new RegExp("^"+Vx+Gx+Wx+qx+"$"),Yx=["material","materials","bones","map"],vu=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Xx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=vu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gw=new Float32Array(1);var rf=class rf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rf.prototype.isMatrix2=!0;var yu=rf;function Qu(n,e,t,i){let s=Zx(i);switch(t){case Bu:return n*e;case tl:return n*e/s.components*s.byteLength;case nl:return n*e/s.components*s.byteLength;case ys:return n*e*2/s.components*s.byteLength;case il:return n*e*2/s.components*s.byteLength;case Ou:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case sl:return n*e*4/s.components*s.byteLength;case Ko:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(e,8)/4;case rl:case al:return Math.max(n,8)*Math.max(e,8)/2;case ll:case hl:case fl:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:case Qo:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zx(n){switch(n){case Fn:case Nu:return{byteLength:1,components:1};case Hr:case Fu:case gn:return{byteLength:2,components:1};case Qc:case el:return{byteLength:2,components:4};case fi:case jc:case Qn:return{byteLength:4,components:1};case Uu:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function U0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qx(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bv=`#define PI 3.141592653589793
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
} // validated`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,$v=`uniform sampler2D dfgLUT;
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
}`,jv=`
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
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
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform float backgroundBlurriness;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,y_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,S_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,T_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:sv,alphatest_pars_fragment:rv,aomap_fragment:ov,aomap_pars_fragment:av,batching_pars_vertex:cv,batching_vertex:lv,begin_vertex:hv,beginnormal_vertex:uv,bsdfs:fv,iridescence_fragment:dv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:vv,color_fragment:yv,color_pars_fragment:_v,color_pars_vertex:Mv,color_vertex:Sv,common:bv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:Av,emissivemap_pars_fragment:Rv,colorspace_fragment:Cv,colorspace_pars_fragment:Pv,envmap_fragment:Iv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Dv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:qv,envmap_vertex:Fv,fog_vertex:Uv,fog_pars_vertex:zv,fog_fragment:Bv,fog_pars_fragment:Ov,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Wv,lights_toon_fragment:Xv,lights_toon_pars_fragment:Yv,lights_phong_fragment:Zv,lights_phong_pars_fragment:Kv,lights_physical_fragment:Jv,lights_physical_pars_fragment:$v,lights_fragment_begin:jv,lights_fragment_maps:Qv,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ry,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:cy,map_particle_pars_fragment:ly,metalnessmap_fragment:hy,metalnessmap_pars_fragment:uy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:yy,normal_pars_vertex:_y,normal_vertex:My,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:Py,dithering_fragment:Iy,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Uy,shadowmap_vertex:zy,shadowmask_pars_fragment:By,skinbase_vertex:Oy,skinning_pars_vertex:ky,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:qy,tonemapping_pars_fragment:Xy,transmission_fragment:Yy,transmission_pars_fragment:Zy,uv_pars_fragment:Ky,uv_pars_vertex:Jy,uv_vertex:$y,worldpos_vertex:jy,background_vert:Qy,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distance_vert:a_,distance_frag:c_,equirect_vert:l_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:f_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:x_,meshmatcap_frag:v_,meshnormal_vert:y_,meshnormal_frag:__,meshphong_vert:M_,meshphong_frag:S_,meshphysical_vert:b_,meshphysical_frag:w_,meshtoon_vert:E_,meshtoon_frag:T_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:I_,sprite_frag:L_},Ce={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ai={basic:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Sn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Sn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Sn([Ce.points,Ce.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Sn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Sn([Ce.common,Ce.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Sn([Ce.sprite,Ce.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Sn([Ce.common,Ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Sn([Ce.lights,Ce.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ai.physical={uniforms:Sn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Bl={r:0,b:0,g:0},D_=new ct,z0=new nt;z0.set(-1,0,0,0,1,0,0,0,1);function N_(n,e,t,i,s,r){let o=new ge(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let b=_.backgroundBlurriness>0;w=e.get(w,b)}return w}function m(_){let w=!1,b=f(_);b===null?p(o,a):b&&b.isColor&&(p(b,1),w=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,w){let b=f(w);b&&b.isCubeTexture?(l===void 0&&(l=new st(new Lr(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Ws(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(z0),l.material.toneMapped=xt.getTransfer(b.colorSpace)!==Rt,(h!==b||d!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new st(new Jn(2,2),new Bt({name:"BackgroundMaterial",uniforms:Ws(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=xt.getTransfer(b.colorSpace)!==Rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,w){_.getRGB(Bl,Ju(n)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,w,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:v,dispose:g}}function F_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,D,k,L,V){let q=!1,X=d(P,L,k,D);r!==X&&(r=X,l(r.object)),q=f(P,L,k,V),q&&m(P,L,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(P,D,k,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,D,k,L){let V=L.wireframe===!0,q=i[D.id];q===void 0&&(q={},i[D.id]=q);let X=P.isInstancedMesh===!0?P.id:0,ce=q[X];ce===void 0&&(ce={},q[X]=ce);let J=ce[k.id];J===void 0&&(J={},ce[k.id]=J);let oe=J[V];return oe===void 0&&(oe=u(c()),J[V]=oe),oe}function u(P){let D=[],k=[],L=[];for(let V=0;V<t;V++)D[V]=0,k[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,k,L){let V=r.attributes,q=D.attributes,X=0,ce=k.getAttributes();for(let J in ce)if(ce[J].location>=0){let he=V[J],Le=q[J];if(Le===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),he===void 0||he.attribute!==Le||Le&&he.data!==Le.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function m(P,D,k,L){let V={},q=D.attributes,X=0,ce=k.getAttributes();for(let J in ce)if(ce[J].location>=0){let he=q[J];he===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));let Le={};Le.attribute=he,he&&he.data&&(Le.data=he.data),V[J]=Le,X++}r.attributes=V,r.attributesNum=X,r.index=L}function v(){let P=r.newAttributes;for(let D=0,k=P.length;D<k;D++)P[D]=0}function p(P){g(P,0)}function g(P,D){let k=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;k[P]=1,L[P]===0&&(n.enableVertexAttribArray(P),L[P]=1),V[P]!==D&&(n.vertexAttribDivisor(P,D),V[P]=D)}function _(){let P=r.newAttributes,D=r.enabledAttributes;for(let k=0,L=D.length;k<L;k++)D[k]!==P[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function w(P,D,k,L,V,q,X){X===!0?n.vertexAttribIPointer(P,D,k,V,q):n.vertexAttribPointer(P,D,k,L,V,q)}function b(P,D,k,L){v();let V=L.attributes,q=k.getAttributes(),X=D.defaultAttributeValues;for(let ce in q){let J=q[ce];if(J.location>=0){let oe=V[ce];if(oe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),oe!==void 0){let he=oe.normalized,Le=oe.itemSize,tt=e.get(oe);if(tt===void 0)continue;let se=tt.buffer,Ee=tt.type,De=tt.bytesPerElement,We=Ee===n.INT||Ee===n.UNSIGNED_INT||oe.gpuType===jc;if(oe.isInterleavedBufferAttribute){let Te=oe.data,et=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,wt=oe.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let B=0;B<J.locationSize;B++)g(J.location+B,Te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let B=0;B<J.locationSize;B++)p(J.location+B);n.bindBuffer(n.ARRAY_BUFFER,se);for(let B=0;B<J.locationSize;B++)w(J.location+B,Le/J.locationSize,Ee,he,et*De,(wt+Le/J.locationSize*B)*De,We)}else{if(oe.isInstancedBufferAttribute){for(let Te=0;Te<J.locationSize;Te++)g(J.location+Te,oe.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<J.locationSize;Te++)p(J.location+Te);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Te=0;Te<J.locationSize;Te++)w(J.location+Te,Le/J.locationSize,Ee,he,Le*De,Le/J.locationSize*Te*De,We)}}else if(X!==void 0){let he=X[ce];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(J.location,he);break;case 3:n.vertexAttrib3fv(J.location,he);break;case 4:n.vertexAttrib4fv(J.location,he);break;default:n.vertexAttrib1fv(J.location,he)}}}}_()}function y(){C();for(let P in i){let D=i[P];for(let k in D){let L=D[k];for(let V in L){let q=L[V];for(let X in q)h(q[X].object),delete q[X];delete L[V]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let D=i[P.id];for(let k in D){let L=D[k];for(let V in L){let q=L[V];for(let X in q)h(q[X].object),delete q[X];delete L[V]}}delete i[P.id]}function x(P){for(let D in i){let k=i[D];for(let L in k){let V=k[L];if(V[P.id]===void 0)continue;let q=V[P.id];for(let X in q)h(q[X].object),delete q[X];delete V[P.id]}}}function S(P){for(let D in i){let k=i[D],L=P.isInstancedMesh===!0?P.id:0,V=k[L];if(V!==void 0){for(let q in V){let X=V[q];for(let ce in X)h(X[ce].object),delete X[ce];delete V[q]}delete k[L],Object.keys(k).length===0&&delete i[D]}}}function C(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function U_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function z_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==On&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Fn&&x!==Qn&&!S&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:b,maxSamples:y,samples:M}}function B_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ci,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let _=r?0:i,w=_*4,b=g.clippingState||null;c.value=b,b=h(m,u,w,f);for(let y=0;y!==w;++y)b[y]=t[y];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,m!==!0||p===null){let g=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,b=f;w!==v;++w,b+=4)o.copy(d[w]).applyMatrix4(_,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var ia=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lr(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xi});r.uniforms.tEquirect.value=t;let o=new st(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=pn),new Ur(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},m0=256,O_=3,k_=20,B0=256,O0=16,H_=3,V_=new T,G_=new ge,Gr=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ur(1,10,null),this._boxMesh=new st(new Lr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=V_}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(G_));let p=new Ur(i,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=m,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(m0,Xu(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===kr?this._setSize(e.image.length===0?m0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=g0(e,!1,!1),i=Math.log2(e)-O_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=g0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=x0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=W_(),this._integrationMaterial=q_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/O0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-H_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(B0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=X_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function g0(n,e,t){return new ia(n,{minFilter:ui,generateMipmaps:e,type:gn,colorSpace:Ns,depthBuffer:t})}function sa(n,e,t){return new Bt({name:n,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:nn,blending:Xi,depthTest:!1,depthWrite:!1})}function W_(){return sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${B0}u

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
	`)}function q_(){return sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:O0}},`

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
	`)}function X_(){return sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k_}
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
	`)}function x0(){return sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function v0(){return sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Y_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Kc||f===Jc)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new ia(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Kc||f===Jc,v=f===Vs||f===kr;if(m||v){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Gr(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||v&&_&&c(_)?(i===null&&(i=new Gr(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Kc?u.mapping=Vs:f===Jc&&(u.mapping=kr),u}function c(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Z_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ds("WebGLRenderer: "+i+" extension not supported."),s}}}function K_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let v=r.get(m);v&&(e.remove(v),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(m){let v=m.attributes;for(let p in v)e.update(v[p],n.ARRAY_BUFFER)}function d(m){let v=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=v!==null?v.array.length:p.array.length/3-1,w=p.count>=65535?Us:Fs,b=new w(Math.ceil(_/3)*6,1),y=b.array;if(v!==null){let x=v.array;g=v.version;for(let S=0,C=0;S<_;S+=3){let R=x[S+0],P=x[S+1],D=x[S+2];y[C++]=R,y[C++]=P,y[C++]=P,y[C++]=D,y[C++]=D,y[C++]=R}}else{g=p.version;for(let x=0,S=0;x<_;x+=3){let C=x+0,R=x+1,P=x+2;y[S++]=C,y[S++]=R,y[S++]=R,y[S++]=P,y[S++]=P,y[S++]=C}}b.version=g;let M=r.get(m);M&&e.remove(M),r.set(m,b)}function u(m){let v=r.get(m);if(v){let p=m.index;p!==null&&v.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let v=s[m].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function J_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function l(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function $_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function j_(n,e,t){let i=new WeakMap,s=new Ft;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let b=a.attributes.position.count*w,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*y*4*d),x=new Ro(M,b,y,d);x.type=Qn,x.needsUpdate=!0;let S=w*4;for(let R=0;R<d;R++){let P=p[R],D=g[R],k=_[R],L=b*y*4*R;for(let V=0;V<P.count;V++){let q=V*S;f===!0&&(s.fromBufferAttribute(P,V),M[L+q+0]=s.x,M[L+q+1]=s.y,M[L+q+2]=s.z,M[L+q+3]=0),m===!0&&(s.fromBufferAttribute(D,V),M[L+q+4]=s.x,M[L+q+5]=s.y,M[L+q+6]=s.z,M[L+q+7]=0),v===!0&&(s.fromBufferAttribute(k,V),M[L+q+8]=s.x,M[L+q+9]=s.y,M[L+q+10]=s.z,M[L+q+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new le(b,y)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Q_(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var e1={[Tu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Lu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function t1(n,e,t,i,s,r){let o=new Zt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Mt;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let d=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new st(h,d),f=new ks(-1,1,1,-1,0,1),m=null,v=null,p=!1,g,_=null,w=[],b=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),c!==null&&c.setSize(y,M);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(y,M)}},this.setEffects=function(y){w=y,b=w.length>0&&w[0].isRenderPass===!0;let M=o.width,x=o.height;w.length>0&&a===null&&(a=new Zt(M,x,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(M,x,{type:gn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new li(M,x),r===!0&&(l.format=Yi,l.type=Gs)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<w.length;C++){let R=w[C];R.setSize&&R.setSize(M,x),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(y,M){if(p||y.toneMapping===jn&&w.length===0)return!1;if(_=M,M!==null){let x=M.width,S=M.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return b===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=jn,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=g,p=!0;let x=o,S=a;for(let C=0;C<w.length;C++){let R=w[C];R.enabled!==!1&&(R.render(y,S,x,M),R.needsSwap!==!1&&(x=S,S=S===a?c:a))}if(m!==y.outputColorSpace||v!==y.toneMapping){m=y.outputColorSpace,v=y.toneMapping,d.defines={},xt.getTransfer(m)===Rt&&(d.defines.SRGB_TRANSFER="");let C=e1[v];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(_),y.render(u,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var k0=new Cn,H0=new li(1,1),V0=new Uo(1),G0=new Ro,W0=new wc,q0=new Fo,y0=[],_0=[],M0=new Float32Array(16),S0=new Float32Array(9),b0=new Float32Array(4);function Wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=y0[s];if(r===void 0&&(r=new Float32Array(s),y0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hl(n,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function o1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;b0.set(i),n.uniformMatrix2fv(this.addr,!1,b0),rn(t,i)}}function a1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;S0.set(i),n.uniformMatrix3fv(this.addr,!1,S0),rn(t,i)}}function c1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;M0.set(i),n.uniformMatrix4fv(this.addr,!1,M0),rn(t,i)}}function l1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Vl(n){return n.version===0&&(n.compareFunction=Vu,n.needsUpdate=!0),n}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Vl(H0):r=k0,t.setTexture2D(e||r,s)}function v1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||W0,s)}function y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Vl(V0):r=q0,t.setTextureCube(e||r,s)}function _1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||G0,s)}function M1(n){switch(n){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return a1;case 35676:return c1;case 5124:case 35670:return l1;case 35667:case 35671:return h1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return _1}}function S1(n,e){n.uniform1fv(this.addr,e)}function b1(n,e){let t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function w1(n,e){let t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function E1(n,e){let t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function T1(n,e){let t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A1(n,e){let t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R1(n,e){let t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C1(n,e){n.uniform1iv(this.addr,e)}function P1(n,e){n.uniform2iv(this.addr,e)}function I1(n,e){n.uniform3iv(this.addr,e)}function L1(n,e){n.uniform4iv(this.addr,e)}function D1(n,e){n.uniform1uiv(this.addr,e)}function N1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function U1(n,e){n.uniform4uiv(this.addr,e)}function z1(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Vl(H0):o=k0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function B1(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||W0,r[o])}function O1(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Vl(V0):o=q0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function k1(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||G0,r[o])}function H1(n){switch(n){case 5126:return S1;case 35664:return b1;case 35665:return w1;case 35666:return E1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return L1;case 5125:return D1;case 36294:return N1;case 36295:return F1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}var cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}},lf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H1(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},of=/(\w+)(\])?(\[|\.)?/g;function w0(n,e){n.seq.push(e),n.map[e.id]=e}function V1(n,e,t){let i=n.name,s=i.length;for(of.lastIndex=0;;){let r=of.exec(i),o=of.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){w0(t,l===void 0?new cf(a,n,e):new lf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hf(a),w0(t,d)),t=d}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);V1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function E0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var G1=37297,W1=0;function q1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var T0=new nt;function X1(n){xt._getMatrix(T0,xt.workingColorSpace,n);let e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function A0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+q1(n.getShaderSource(e),a)}else return r}function Y1(n,e){let t=X1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Z1={[Tu]:"Linear",[Au]:"Reinhard",[Ru]:"Cineon",[Cu]:"ACESFilmic",[Iu]:"AgX",[Lu]:"Neutral",[Pu]:"Custom"};function K1(n,e){let t=Z1[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new T;function J1(){xt.getLuminanceCoefficients(Ol);let n=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function j1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function na(n){return n!==""}function R0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function C0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(n){return n.replace(eM,tM)}function tM(n,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uf(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(n){return n.replace(nM,iM)}function iM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function I0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sM={[zr]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function rM(n){return sM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oM={[kr]:"ENVMAP_MODE_REFRACTION"};function aM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cM={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[Jp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function lM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cM[n.combine]||"ENVMAP_BLENDING_NONE"}function hM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=rM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=aM(t),d=lM(t),u=$1(t),f=j1(r),m=s.createProgram(),v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(na).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(na).join(`
`),p.length>0&&(p+=`
`)):(v=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?rt.tonemapping_pars_fragment:"",t.toneMapping!==jn?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),J1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=uf(o),o=R0(o,t),o=C0(o,t),a=uf(a),a=R0(a,t),a=C0(a,t),o=P0(o),a=P0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+v+o,w=g+p+a,b=E0(s,s.VERTEX_SHADER,_),y=E0(s,s.FRAGMENT_SHADER,w);s.attachShader(m,b),s.attachShader(m,y),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function M(R){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(y)||"",L=P.trim(),V=D.trim(),q=k.trim(),X=!0,ce=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,b,y);else{let J=A0(s,b,"vertex"),oe=A0(s,y,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+J+`
`+oe)}else L!==""?Ye("WebGLProgram: Program Info Log:",L):(V===""||q==="")&&(ce=!1);ce&&(R.diagnostics={runnable:X,programLog:L,vertexShader:{log:V,prefix:v},fragmentShader:{log:q,prefix:p}})}s.deleteShader(b),s.deleteShader(y),x=new Vr(s,m),S=Q1(s,m)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,G1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=y,this}var uM=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new df(e),t.set(e,i)),i}},df=class{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}};function fM(n){return n===ys||n===Qo||n===ea}function dM(n,e,t,i,s,r){let o=new Co,a=new ff,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,R,P,D){let k=R.fog,L=P.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||V,q),ce=u[x.type],J=i.precision;x.precision!==null&&(J=i.getMaxPrecision(x.precision),J!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let oe=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,he=oe!==void 0?oe.length:0,Le=0;L.morphAttributes.position!==void 0&&(Le=1),L.morphAttributes.normal!==void 0&&(Le=2),L.morphAttributes.color!==void 0&&(Le=3);let tt,se,Ee,De;if(ce){let Re=Ai[ce];tt=Re.vertexShader,se=Re.fragmentShader}else{tt=x.vertexShader,se=x.fragmentShader;let Re=a.getVertexShaderStage(x),It=a.getFragmentShaderStage(x);a.update(x,Re,It),Ee=Re.id,De=It.id}let We=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),et=P.isInstancedMesh===!0,wt=P.isBatchedMesh===!0,B=!!x.map,F=!!x.matcap,$=!!X,ie=$&&X.isPMREMTexture===!0,de=!!x.aoMap,Ae=!!x.lightMap,Fe=!!x.bumpMap&&x.wireframe===!1,Ie=!!x.normalMap,at=!!x.displacementMap,ht=!!x.emissiveMap,Et=!!x.metalnessMap,Ct=!!x.roughnessMap,Yt=x.anisotropy>0,O=x.clearcoat>0,on=x.diffuseRoughness>0,At=x.dispersion>0,Pt=x.retroreflectivity>0,be=x.iridescence>0,Vt=x.sheen>0,Ve=x.transmission>0,Je=Yt&&!!x.anisotropyMap,I=O&&!!x.clearcoatMap,E=O&&!!x.clearcoatNormalMap,W=O&&!!x.clearcoatRoughnessMap,ue=on&&!!x.diffuseRoughnessMap,ee=be&&!!x.iridescenceMap,pe=be&&!!x.iridescenceThicknessMap,xe=Vt&&!!x.sheenColorMap,Q=Vt&&!!x.sheenRoughnessMap,te=!!x.specularMap,ye=!!x.specularColorMap,N=!!x.specularIntensityMap,re=Ve&&!!x.transmissionMap,ne=Ve&&!!x.thicknessMap,Me=!!x.gradientMap,ve=!!x.alphaMap,_e=x.alphaTest>0,ke=!!x.alphaHash,ft=!!x.extensions,me=jn;x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(me=n.toneMapping);let Xe=ie?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ut={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:se,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:De,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:wt,batchingColor:wt&&P._colorsTexture!==null,instancing:et,instancingColor:et&&P.instanceColor!==null,instancingMorph:et&&P.morphTexture!==null,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:B,matcap:F,envMap:$,envMapMode:$&&X.mapping,envMapPMREM:ie,envMapMaxLod:ie?Xe.length-1:null,envMapSize:ie?Xe[0].width:null,aoMap:de,lightMap:Ae,bumpMap:Fe,normalMap:Ie,displacementMap:at,emissiveMap:ht,normalMapObjectSpace:Ie&&x.normalMapType===e0,normalMapTangentSpace:Ie&&x.normalMapType===Ul,packedNormalMap:Ie&&x.normalMapType===Ul&&fM(x.normalMap.format),metalnessMap:Et,roughnessMap:Ct,anisotropy:Yt,anisotropyMap:Je,clearcoat:O,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:on,diffuseRoughnessMap:ue,dispersion:At,retroreflection:Pt,iridescence:be,iridescenceMap:ee,iridescenceThicknessMap:pe,sheen:Vt,sheenColorMap:xe,sheenRoughnessMap:Q,specularMap:te,specularColorMap:ye,specularIntensityMap:N,transmission:Ve,transmissionMap:re,thicknessMap:ne,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:_e,alphaHash:ke,combine:x.combine,mapUv:B&&f(x.map.channel),aoMapUv:de&&f(x.aoMap.channel),lightMapUv:Ae&&f(x.lightMap.channel),bumpMapUv:Fe&&f(x.bumpMap.channel),normalMapUv:Ie&&f(x.normalMap.channel),displacementMapUv:at&&f(x.displacementMap.channel),emissiveMapUv:ht&&f(x.emissiveMap.channel),metalnessMapUv:Et&&f(x.metalnessMap.channel),roughnessMapUv:Ct&&f(x.roughnessMap.channel),anisotropyMapUv:Je&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:te&&f(x.specularMap.channel),specularColorMapUv:ye&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:re&&f(x.transmissionMap.channel),thicknessMapUv:ne&&f(x.thicknessMap.channel),alphaMapUv:ve&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ie||Yt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(B||ve),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:B&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===Rt,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===Rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function v(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let S=u[x.type],C;if(S){let R=Ai[S];C=qs.clone(R.uniforms)}else C=x.uniforms;return C}function w(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new hM(n,S,x,s),l.push(C),h.set(S,C)),C}function b(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){a.remove(x)}function M(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:_,acquireProgram:w,releaseProgram:b,releaseShaderCache:y,programs:l,dispose:M}}function pM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function mM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function D0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,p,g){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},n[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=p,_.group=g),e++,_}function c(u,f,m,v,p,g,_){_.reversedDepth===!0&&(p=-p);let w=a(u,f,m,v,p,g);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):t.push(w)}function l(u,f,m,v,p,g){let _=a(u,f,m,v,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||mM),i.length>1&&i.sort(f||L0),s.length>1&&s.sort(f||L0)}function d(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function gM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new D0,n.set(i,[o])):s>=r.length?(o=new D0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function vM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yM=0;function _M(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MM(n){let e=new xM,t=vM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new T);let s=new T,r=new ct,o=new ct;function a(l){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,w=0,b=0,y=0,M=0,x=0,S=0,C=0,R=0;l.sort(_M);for(let D=0,k=l.length;D<k;D++){let L=l[D],V=L.color,q=L.intensity,X=L.distance,ce=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ys?ce=L.shadow.map.texture:ce=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*q,d+=V.g*q,u+=V.b*q;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],q);R++}else if(L.isSunLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let oe=L.shadow,he=t.get(L);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),i.sunShadow[m]=he,i.sunShadowMap[m]=ce;let Le=oe.getViewportCount();for(let tt=0;tt<Le;tt++)i.sunShadowMatrix[v+tt]=oe.getMatrix(tt),i.sunShadowCascade[v+tt]=oe._cascadeData[tt];v+=Le,m++}i.sun[f]=J,f++}else if(L.isDirectionalLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let oe=L.shadow,he=t.get(L);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,i.directionalShadow[p]=he,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=J,p++}else if(L.isSpotLight){let J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(V).multiplyScalar(q),J.distance=X,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[_]=J;let oe=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,oe.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=oe.matrix,L.castShadow){let he=t.get(L);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,i.spotShadow[_]=he,i.spotShadowMap[_]=ce,x++}_++}else if(L.isRectAreaLight){let J=e.get(L);J.color.copy(V).multiplyScalar(q),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=J,w++}else if(L.isPointLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let oe=L.shadow,he=t.get(L);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,he.shadowCameraNear=oe.camera.near,he.shadowCameraFar=oe.camera.far,i.pointShadow[g]=he,i.pointShadowMap[g]=ce,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=J,g++}else if(L.isHemisphereLight){let J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(q),J.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[b]=J,b++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==w||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=w,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=w,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=R,i.version=yM++)}function c(l,h){let d=0,u=0,f=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let _=0,w=l.length;_<w;_++){let b=l[_];if(b.isSunLight){let y=i.sun[d];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){let y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:i}}function N0(n){let e=new MM(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function SM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new N0(n),e.set(s,[a])):r>=o.length?(a=new N0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`,EM=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],TM=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],F0=new ct,ta=new T,af=new T;function AM(n,e,t){let i=new bi,s=new le,r=new le,o=new Ft,a=new Os,c=new Uc,l={},h=t.maxTextureSize,d={[Ei]:nn,[nn]:Ei,[Kt]:Kt},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:bM,fragmentShader:wM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new st(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let g=this.type;this.render=function(M,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Ip&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let C=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Xi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=M.length;L<V;L++){let q=M[L],X=q.shadow;if(X===void 0){Ye("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ce=X.getFrameExtents();s.multiply(ce),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=J,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Br){if(q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Zt(s.x,s.y,{format:ys,type:gn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new li(s.x,s.y,Qn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Vi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn}else q.isPointLight?(X.map=new ia(s.x),X.map.depthTexture=new Uo(s.x,fi)):(X.map=new Zt(s.x,s.y),X.map.depthTexture=new li(s.x,s.y,fi)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Vi,this.type===zr?(X.map.depthTexture.compareFunction=J?Hu:ku,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let oe=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,S);let he=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:S.layers;for(let Le=0;Le<oe;Le++){let tt=X.getCamera(Le);if(q.isPointLight){let se=X.camera,Ee=X.matrix,De=q.distance||se.far;De!==se.far&&(se.far=De,se.updateProjectionMatrix()),ta.setFromMatrixPosition(q.matrixWorld),se.position.copy(ta),af.copy(se.position),af.add(EM[Le]),se.up.copy(TM[Le]),se.lookAt(af),se.updateMatrixWorld(),Ee.makeTranslation(-ta.x,-ta.y,-ta.z),F0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),X._frustum.setFromProjectionMatrix(F0,se.coordinateSystem,se.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,Le),n.clear();else{Le===0&&(n.setRenderTarget(X.map),n.clear());let se=X.getViewport(Le);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),D.viewport(o)}i=X.getFrustum(Le),b(x,S,tt,q,he,this.type)}X.isPointLightShadow!==!0&&this.type===Br&&_(X,S),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(C,R,P)};function _(M,x){let S=e.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Zt(s.x,s.y,{format:ys,type:gn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(x,null,S,u,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(x,null,S,f,v,null)}function w(M,x,S,C){let R=null,P=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=S.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=R.uuid,k=x.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let V=L[k];V===void 0&&(V=R.clone(),L[k]=V,x.addEventListener("dispose",y)),R=V}if(R.visible=x.visible,R.wireframe=x.wireframe,C===Br?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=n.properties.get(R);D.light=S}return R}function b(M,x,S,C,R,P){if(M.visible===!1)return;if(M.layers.test(R)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Br)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let L=e.update(M),V=M.material;if(Array.isArray(V)){let q=L.groups;for(let X=0,ce=q.length;X<ce;X++){let J=q[X],oe=V[J.materialIndex];if(oe&&oe.visible){let he=w(M,oe,C,P);M.onBeforeShadow(n,M,x,S,L,he,J),n.renderBufferDirect(S,null,L,he,M,J),M.onAfterShadow(n,M,x,S,L,he,J)}}}else if(V.visible){let q=w(M,V,C,P);M.onBeforeShadow(n,M,x,S,L,q,null),n.renderBufferDirect(S,null,L,q,M,null),M.onAfterShadow(n,M,x,S,L,q,null)}}let k=M.children;for(let L=0,V=k.length;L<V;L++)b(k[L],x,S,C,R,P)}function y(M){M.target.removeEventListener("dispose",y);for(let S in l){let C=l[S],R=M.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function RM(n,e){function t(){let N=!1,re=new Ft,ne=null,Me=new Ft(0,0,0,0);return{setMask:function(ve){ne!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),ne=ve)},setLocked:function(ve){N=ve},setClear:function(ve,_e,ke,ft,me){me===!0&&(ve*=ft,_e*=ft,ke*=ft),re.set(ve,_e,ke,ft),Me.equals(re)===!1&&(n.clearColor(ve,_e,ke,ft),Me.copy(re))},reset:function(){N=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let N=!1,re=!1,ne=null,Me=null,ve=null;return{setReversed:function(_e){if(re!==_e){let ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),re=_e;let ft=ve;ve=null,this.setClear(ft)}},getReversed:function(){return re},setTest:function(_e){_e?Te(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(_e){ne!==_e&&!N&&(n.depthMask(_e),ne=_e)},setFunc:function(_e){if(re&&(_e=h0[_e]),Me!==_e){switch(_e){case fc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case xc:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=_e}},setLocked:function(_e){N=_e},setClear:function(_e){ve!==_e&&(ve=_e,re&&(_e=1-_e),n.clearDepth(_e))},reset:function(){N=!1,ne=null,Me=null,ve=null,re=!1}}}function s(){let N=!1,re=null,ne=null,Me=null,ve=null,_e=null,ke=null,ft=null,me=null;return{setTest:function(Xe){N||(Xe?Te(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(Xe){re!==Xe&&!N&&(n.stencilMask(Xe),re=Xe)},setFunc:function(Xe,ut,Re){(ne!==Xe||Me!==ut||ve!==Re)&&(n.stencilFunc(Xe,ut,Re),ne=Xe,Me=ut,ve=Re)},setOp:function(Xe,ut,Re){(_e!==Xe||ke!==ut||ft!==Re)&&(n.stencilOp(Xe,ut,Re),_e=Xe,ke=ut,ft=Re)},setLocked:function(Xe){N=Xe},setClear:function(Xe){me!==Xe&&(n.clearStencil(Xe),me=Xe)},reset:function(){N=!1,re=null,ne=null,Me=null,ve=null,_e=null,ke=null,ft=null,me=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,w=null,b=null,y=null,M=null,x=null,S=new ge(0,0,0),C=0,R=!1,P=null,D=null,k=null,L=null,V=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ce=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=ce>=2);let oe=null,he={},Le=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),se=new Ft().fromArray(Le),Ee=new Ft().fromArray(tt);function De(N,re,ne,Me){let ve=new Uint8Array(4),_e=n.createTexture();n.bindTexture(N,_e),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ne;ke++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(re+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return _e}let We={};We[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),We[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),We[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(n.DEPTH_TEST),o.setFunc(Er),Fe(!1),Ie(_u),Te(n.CULL_FACE),de(Xi);function Te(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function et(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function wt(N,re){return u[N]!==re?(n.bindFramebuffer(N,re),u[N]=re,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function B(N,re){let ne=m,Me=!1;if(N){ne=f.get(re),ne===void 0&&(ne=[],f.set(re,ne));let ve=N.textures;if(ne.length!==ve.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ke=ve.length;_e<ke;_e++)ne[_e]=n.COLOR_ATTACHMENT0+_e;ne.length=ve.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function F(N){return v!==N?(n.useProgram(N),v=N,!0):!1}let $={[Hs]:n.FUNC_ADD,[Dp]:n.FUNC_SUBTRACT,[Np]:n.FUNC_REVERSE_SUBTRACT};$[Fp]=n.MIN,$[Up]=n.MAX;let ie={[zp]:n.ZERO,[Bp]:n.ONE,[Op]:n.SRC_COLOR,[bu]:n.SRC_ALPHA,[qp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[Hp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[Wp]:n.ONE_MINUS_DST_COLOR,[Vp]:n.ONE_MINUS_DST_ALPHA,[Xp]:n.CONSTANT_COLOR,[Yp]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function de(N,re,ne,Me,ve,_e,ke,ft,me,Xe){if(N===Xi){p===!0&&(et(n.BLEND),p=!1);return}if(p===!1&&(Te(n.BLEND),p=!0),N!==Lp){if(N!==g||Xe!==R){if((_!==Hs||y!==Hs)&&(n.blendEquation(n.FUNC_ADD),_=Hs,y=Hs),Xe)switch(N){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",N);break}else switch(N){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",N);break}w=null,b=null,M=null,x=null,S.set(0,0,0),C=0,g=N,R=Xe}return}ve=ve||re,_e=_e||ne,ke=ke||Me,(re!==_||ve!==y)&&(n.blendEquationSeparate($[re],$[ve]),_=re,y=ve),(ne!==w||Me!==b||_e!==M||ke!==x)&&(n.blendFuncSeparate(ie[ne],ie[Me],ie[_e],ie[ke]),w=ne,b=Me,M=_e,x=ke),(ft.equals(S)===!1||me!==C)&&(n.blendColor(ft.r,ft.g,ft.b,me),S.copy(ft),C=me),g=N,R=!1}function Ae(N,re){N.side===Kt?et(n.CULL_FACE):Te(n.CULL_FACE);let ne=N.side===nn;re&&(ne=!ne),Fe(ne),N.blending===Or&&N.transparent===!1?de(Xi):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;a.setTest(Me),Me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){P!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),P=N)}function Ie(N){N!==Cp?(Te(n.CULL_FACE),N!==D&&(N===_u?n.cullFace(n.BACK):N===Pp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),D=N}function at(N){N!==k&&(X&&n.lineWidth(N),k=N)}function ht(N,re,ne){N?(Te(n.POLYGON_OFFSET_FILL),(L!==re||V!==ne)&&(L=re,V=ne,o.getReversed()&&(re=-re,ne=-ne),n.polygonOffset(re,ne))):et(n.POLYGON_OFFSET_FILL)}function Et(N){N?Te(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=n.TEXTURE0+q-1),oe!==N&&(n.activeTexture(N),oe=N)}function Yt(N,re,ne){ne===void 0&&(oe===null?ne=n.TEXTURE0+q-1:ne=oe);let Me=he[ne];Me===void 0&&(Me={type:void 0,texture:void 0},he[ne]=Me),(Me.type!==N||Me.texture!==re)&&(oe!==ne&&(n.activeTexture(ne),oe=ne),n.bindTexture(N,re||We[N]),Me.type=N,Me.texture=re)}function O(){let N=he[oe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function on(){try{n.compressedTexImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function At(){try{n.compressedTexImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Pt(){try{n.texSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function be(){try{n.texSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Vt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Je(){try{n.texStorage2D(...arguments)}catch(N){je("WebGLState:",N)}}function I(){try{n.texStorage3D(...arguments)}catch(N){je("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function W(){try{n.texImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function ue(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ee(N,re){d[N]!==re&&(n.pixelStorei(N,re),d[N]=re)}function pe(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function xe(N){Ee.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function Q(N,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let Me=ne.get(N);Me===void 0&&(Me=n.getUniformBlockIndex(re,N.name),n.uniformBlockBinding(re,Me,Me),ne.set(N,Me))}function te(N,re,ne){let ve=l.get(re).get(N);c[ve]!==ne&&(n.bindBufferBase(n.UNIFORM_BUFFER,ve,ne),c[ve]=ne)}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},oe=null,he={},u={},c={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,w=null,b=null,y=null,M=null,x=null,S=new ge(0,0,0),C=0,R=!1,P=null,D=null,k=null,L=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Te,disable:et,bindFramebuffer:wt,drawBuffers:B,useProgram:F,setBlending:de,setMaterial:Ae,setFlipSided:Fe,setCullFace:Ie,setLineWidth:at,setPolygonOffset:ht,setScissorTest:Et,activeTexture:Ct,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:on,compressedTexImage3D:At,texImage2D:E,texImage3D:W,pixelStorei:ee,getParameter:ue,updateUBOMapping:Q,uniformBlockBinding:te,texStorage2D:Je,texStorage3D:I,texSubImage2D:Pt,texSubImage3D:be,compressedTexSubImage2D:Vt,compressedTexSubImage3D:Ve,scissor:pe,viewport:xe,reset:ye}}function CM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,v=new FinalizationRegistry(I=>m.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):To("canvas")}function _(I,E,W){let ue=1,ee=Je(I);if((ee.width>W||ee.height>W)&&(ue=W/Math.max(ee.width,ee.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let pe=Math.floor(ue*ee.width),xe=Math.floor(ue*ee.height);u===void 0&&(u=g(pe,xe));let Q=E?g(pe,xe):u;return Q.width=pe,Q.height=xe,Q.getContext("2d").drawImage(I,0,0,pe,xe),Ye("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+pe+"x"+xe+")."),Q}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function w(I){return I.generateMipmaps}function b(I){n.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(I,E,W,ue,ee,pe=!1){if(I!==null){if(n[I]!==void 0)return n[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;ue&&(xe=e.get("EXT_texture_norm16"),xe||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8),W===n.UNSIGNED_SHORT&&xe&&(Q=xe.R16_EXT),W===n.SHORT&&xe&&(Q=xe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),E===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8),W===n.UNSIGNED_SHORT&&xe&&(Q=xe.RG16_EXT),W===n.SHORT&&xe&&(Q=xe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_SHORT&&xe&&(Q=xe.RGB16_EXT),W===n.SHORT&&xe&&(Q=xe.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){let te=pe?Eo:xt.getTransfer(ee);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=te===Rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&xe&&(Q=xe.RGBA16_EXT),W===n.SHORT&&xe&&(Q=xe.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(I,E){let W;return I?E===null||E===fi||E===Gs?W=n.DEPTH24_STENCIL8:E===Qn?W=n.DEPTH32F_STENCIL8:E===Hr&&(W=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fi||E===Gs?W=n.DEPTH_COMPONENT24:E===Qn?W=n.DEPTH_COMPONENT32F:E===Hr&&(W=n.DEPTH_COMPONENT16),W}function S(I,E){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function C(I){let E=new WeakRef(I);i.get(I).__ref=E,m.add(E),v.register(I,E,E)}function R(I){let E=i.get(I).__ref;E!==void 0&&(m.delete(E),v.unregister(E))}function P(I){k(I.target)}function D(I){L(I.target)}function k(I){I.removeEventListener("dispose",P),R(I),q(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function L(I){I.removeEventListener("dispose",D),R(I),ce(I)}function V(){for(let I of m){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):k(E))}m.clear(),d.clear()}function q(I){let E=i.get(I);if(E.__webglInit===void 0)return;let W=I.source,ue=f.get(W);if(ue){let ee=ue[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&X(I),Object.keys(ue).length===0&&f.delete(W)}i.remove(I)}function X(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let W=I.source,ue=f.get(W);delete ue[E.__cacheKey],o.memory.textures--}function ce(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let W=I.depthTexture;if(W&&W.renderTarget===I&&k(W),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let pe=0;pe<E.__webglFramebuffer[ee].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[ee][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ue=I.textures;for(let ee=0,pe=ue.length;ee<pe;ee++){let xe=i.get(ue[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(ue[ee])}i.remove(I)}let J=0;function oe(){J=0}function he(){return J}function Le(I){J=I}function tt(){let I=J;return I>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,I}function se(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Ee(I,E){let W=i.get(I);if(I.isVideoTexture&&Vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let ue=I.image;if(ue===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function De(I,E){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Ae(W,I,E);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function We(I,E){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Ae(W,I,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function Te(I,E){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Fe(W,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}let et={[yc]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},wt={[hn]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[$c]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},B={[n0]:n.NEVER,[Vu]:n.ALWAYS,[i0]:n.LESS,[ku]:n.LEQUAL,[s0]:n.EQUAL,[Hu]:n.GEQUAL,[r0]:n.GREATER,[o0]:n.NOTEQUAL};function F(I,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===$c||E.magFilter===Zo||E.magFilter===ui||E.minFilter===pn||E.minFilter===$c||E.minFilter===Zo||E.minFilter===ui)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,et[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,et[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,et[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,wt[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,wt[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Zo&&E.minFilter!==ui||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function $(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",P),C(E));let ue=E.source,ee=f.get(ue);ee===void 0&&(ee={},f.set(ue,ee));let pe=se(E);if(pe!==I.__cacheKey){ee[pe]===void 0&&(ee[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[pe].usedTimes++;let xe=ee[I.__cacheKey];xe!==void 0&&(ee[I.__cacheKey].usedTimes--,xe.usedTimes===0&&X(E)),I.__cacheKey=pe,I.__webglTexture=ee[pe].texture}return W}function ie(I,E,W){return Math.floor(Math.floor(I/W)/E)}function de(I,E,W,ue){let pe=I.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,ue,E.data);else{pe.sort((N,re)=>N.start-re.start);let xe=0;for(let N=1;N<pe.length;N++){let re=pe[xe],ne=pe[N],Me=re.start+re.count,ve=ie(ne.start,E.width,4),_e=ie(re.start,E.width,4);ne.start<=Me+1&&ve===_e&&ie(ne.start+ne.count-1,E.width,4)===ve?re.count=Math.max(re.count,ne.start+ne.count-re.start):(++xe,pe[xe]=ne)}pe.length=xe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let N=0,re=pe.length;N<re;N++){let ne=pe[N],Me=Math.floor(ne.start/4),ve=Math.ceil(ne.count/4),_e=Me%E.width,ke=Math.floor(Me/E.width),ft=ve,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,_e,ke,ft,me,W,ue,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function Ae(I,E,W){let ue=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=n.TEXTURE_3D);let ee=$(I,E),pe=E.source;t.bindTexture(ue,I.__webglTexture,n.TEXTURE0+W);let xe=i.get(pe);if(pe.version!==xe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let me=xt.getPrimaries(xt.workingColorSpace),Xe=E.colorSpace===Zi?null:xt.getPrimaries(E.colorSpace),ut=E.colorSpace===Zi||me===Xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let te=_(E.image,!1,s.maxTextureSize);te=Ve(E,te);let ye=r.convert(E.format,E.colorSpace),N=r.convert(E.type),re=M(E.internalFormat,ye,N,E.normalized,E.colorSpace,E.isVideoTexture);F(ue,E);let ne,Me=E.mipmaps,ve=E.isVideoTexture!==!0,_e=xe.__version===void 0||ee===!0,ke=pe.dataReady,ft=S(E,te);if(E.isDepthTexture)re=x(E.format===Yi,E.type),_e&&(ve?t.texStorage2D(n.TEXTURE_2D,1,re,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,re,te.width,te.height,0,ye,N,null));else if(E.isDataTexture)if(Me.length>0){ve&&_e&&t.texStorage2D(n.TEXTURE_2D,ft,re,Me[0].width,Me[0].height);for(let me=0,Xe=Me.length;me<Xe;me++)ne=Me[me],ve?ke&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,N,ne.data):t.texImage2D(n.TEXTURE_2D,me,re,ne.width,ne.height,0,ye,N,ne.data);E.generateMipmaps=!1}else ve?(_e&&t.texStorage2D(n.TEXTURE_2D,ft,re,te.width,te.height),ke&&de(E,te,ye,N)):t.texImage2D(n.TEXTURE_2D,0,re,te.width,te.height,0,ye,N,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,re,Me[0].width,Me[0].height,te.depth);for(let me=0,Xe=Me.length;me<Xe;me++)if(ne=Me[me],E.format!==On)if(ye!==null)if(ve){if(ke)if(E.layerUpdates.size>0){let ut=Qu(ne.width,ne.height,E.format,E.type);for(let Re of E.layerUpdates){let It=ne.data.subarray(Re*ut/ne.data.BYTES_PER_ELEMENT,(Re+1)*ut/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Re,ne.width,ne.height,1,ye,It)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,te.depth,ye,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,re,ne.width,ne.height,te.depth,0,ne.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,te.depth,ye,N,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,re,ne.width,ne.height,te.depth,0,ye,N,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ve&&_e&&t.texStorage2D(n.TEXTURE_2D,ft,re,Me[0].width,Me[0].height);for(let me=0,Xe=Me.length;me<Xe;me++)ne=Me[me],E.format!==On?ye!==null?ve?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,me,re,ne.width,ne.height,0,ne.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?ke&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,N,ne.data):t.texImage2D(n.TEXTURE_2D,me,re,ne.width,ne.height,0,ye,N,ne.data)}else if(E.isDataArrayTexture)if(ve){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,re,te.width,te.height,te.depth),ke)if(E.layerUpdates.size>0){let me=Qu(te.width,te.height,E.format,E.type);for(let Xe of E.layerUpdates){let ut=te.data.subarray(Xe*me/te.data.BYTES_PER_ELEMENT,(Xe+1)*me/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Xe,te.width,te.height,1,ye,N,ut)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,N,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,te.width,te.height,te.depth,0,ye,N,te.data);else if(E.isData3DTexture)ve?(_e&&t.texStorage3D(n.TEXTURE_3D,ft,re,te.width,te.height,te.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,N,te.data)):t.texImage3D(n.TEXTURE_3D,0,re,te.width,te.height,te.depth,0,ye,N,te.data);else if(E.isFramebufferTexture){if(_e)if(ve)t.texStorage2D(n.TEXTURE_2D,ft,re,te.width,te.height);else{let me=te.width,Xe=te.height;for(let ut=0;ut<ft;ut++)t.texImage2D(n.TEXTURE_2D,ut,re,me,Xe,0,ye,N,null),me>>=1,Xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),te.parentNode!==me){me.appendChild(te),d.add(E),me.onpaint=Xe=>{let ut=Xe.changedElements;for(let Re of d)ut.includes(Re.image)&&(Re.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let ut=n.RGBA,Re=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ut,Re,It,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Me.length>0){if(ve&&_e){let me=Je(Me[0]);t.texStorage2D(n.TEXTURE_2D,ft,re,me.width,me.height)}for(let me=0,Xe=Me.length;me<Xe;me++)ne=Me[me],ve?ke&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ye,N,ne):t.texImage2D(n.TEXTURE_2D,me,re,ye,N,ne);E.generateMipmaps=!1}else if(ve){if(_e){let me=Je(te);t.texStorage2D(n.TEXTURE_2D,ft,re,me.width,me.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,N,te)}else t.texImage2D(n.TEXTURE_2D,0,re,ye,N,te);w(E)&&E.mipmapsAutoUpdate===!0&&b(ue),xe.__version=pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Fe(I,E,W){if(E.image.length!==6)return;let ue=$(I,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);let pe=i.get(ee);if(ee.version!==pe.__version||ue===!0){t.activeTexture(n.TEXTURE0+W);let xe=xt.getPrimaries(xt.workingColorSpace),Q=E.colorSpace===Zi?null:xt.getPrimaries(E.colorSpace),te=E.colorSpace===Zi||xe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ye=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,re=[];for(let Re=0;Re<6;Re++)!ye&&!N?re[Re]=_(E.image[Re],!0,s.maxCubemapSize):re[Re]=N?E.image[Re].image:E.image[Re],re[Re]=Ve(E,re[Re]);let ne=re[0],Me=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),_e=M(E.internalFormat,Me,ve,E.normalized,E.colorSpace),ke=E.isVideoTexture!==!0,ft=pe.__version===void 0||ue===!0,me=ee.dataReady,Xe=S(E,ne);F(n.TEXTURE_CUBE_MAP,E);let ut;if(E.isDepthTexture){if(_e=x(E.format===Yi,E.type),ft)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,_e,ne.width,ne.height);else for(let Re=0;Re<6;Re++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,ne.width,ne.height,0,Me,ve,null)}else if(ye){ke&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,_e,ne.width,ne.height);for(let Re=0;Re<6;Re++){ut=re[Re].mipmaps;for(let It=0;It<ut.length;It++){let an=ut[It];E.format!==On?Me!==null?ke?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It,0,0,an.width,an.height,Me,an.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It,_e,an.width,an.height,0,an.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It,0,0,an.width,an.height,Me,ve,an.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It,_e,an.width,an.height,0,Me,ve,an.data)}}}else{if(ut=E.mipmaps,ke&&ft){ut.length>0&&Xe++;let Re=Je(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,_e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(N){ke?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,re[Re].width,re[Re].height,Me,ve,re[Re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,re[Re].width,re[Re].height,0,Me,ve,re[Re].data);for(let It=0;It<ut.length;It++){let rs=ut[It].image[Re].image;ke?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It+1,0,0,rs.width,rs.height,Me,ve,rs.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It+1,_e,rs.width,rs.height,0,Me,ve,rs.data)}}else{ke?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Me,ve,re[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,Me,ve,re[Re]);for(let It=0;It<ut.length;It++){let an=ut[It];ke?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It+1,0,0,Me,ve,an.image[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,It+1,_e,Me,ve,an.image[Re])}}}w(E)&&E.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),pe.__version=ee.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ie(I,E,W,ue,ee,pe){let xe=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),te=M(W.internalFormat,xe,Q,W.normalized,W.colorSpace),ye=i.get(E),N=i.get(W);if(N.__renderTarget=E,!ye.__hasExternalTextures){let re=Math.max(1,E.width>>pe),ne=Math.max(1,E.height>>pe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,pe,te,re,ne,E.depth,0,xe,Q,null):t.texImage2D(ee,pe,te,re,ne,0,xe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ee,N.__webglTexture,0,Pt(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ee,N.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(I,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let ue=E.depthTexture,ee=ue&&ue.isDepthTexture?ue.type:null,pe=x(E.stencilBuffer,ee),xe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(E),pe,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(E),pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,I)}else{let ue=E.textures;for(let ee=0;ee<ue.length;ee++){let pe=ue[ee],xe=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),te=M(pe.internalFormat,xe,Q,pe.normalized,pe.colorSpace);be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(E),te,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(E),te,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(I,E,W){let ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(E.depthTexture);ee.__renderTarget=E;let pe=ue?E.depthTexture.image[0]:E.depthTexture.image;(!ee.__webglTexture||pe.width!==E.width||pe.height!==E.height)&&(pe.width=E.width,pe.height=E.height,E.depthTexture.needsUpdate=!0),ue?Te(E.depthTexture,0):Ee(E.depthTexture,0);let xe=ee.__webglTexture,Q=Pt(E),te=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,ye=E.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Vi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,te,xe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ye,te,xe,0);else if(E.depthTexture.format===Yi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,te,xe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ye,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Et(I){let E=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let ue=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){let ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",ee)};ue.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=ue}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ue=0;ue<6;ue++)ht(E.__webglFramebuffer[ue],I,ue);else I.texture.mipmaps.length>0?ht(E.__webglFramebuffer[0],I,0):ht(E.__webglFramebuffer,I,0);else if(W){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=n.createRenderbuffer(),at(E.__webglDepthbuffer[ue],I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,pe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(I,E,W){let ue=i.get(I);E!==void 0&&Ie(ue.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Et(I)}function Yt(I){let E=I.texture,W=i.get(I),ue=i.get(E);I.addEventListener("dispose",D),C(I);let ee=I.textures,pe=I.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=E.version,o.memory.textures++),pe){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let te=0;te<E.mipmaps.length;te++)W.__webglFramebuffer[Q][te]=n.createFramebuffer()}else W.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)W.__webglFramebuffer[Q]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(xe)for(let Q=0,te=ee.length;Q<te;Q++){let ye=i.get(ee[Q]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&be(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<ee.length;Q++){let te=ee[Q];W.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let ye=r.convert(te.format,te.colorSpace),N=r.convert(te.type),re=M(te.internalFormat,ye,N,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),ne=Pt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,re,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),at(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),F(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Ie(W.__webglFramebuffer[Q][te],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else Ie(W.__webglFramebuffer[Q],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);w(E)?b(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let Q=0,te=ee.length;Q<te;Q++){let ye=ee[Q],N=i.get(ye),re=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,N.__webglTexture),F(re,ye),Ie(W.__webglFramebuffer,I,ye,n.COLOR_ATTACHMENT0+Q,re,0),w(ye)&&b(re)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,ue.__webglTexture),F(Q,E),E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Ie(W.__webglFramebuffer[te],I,E,n.COLOR_ATTACHMENT0,Q,te);else Ie(W.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Q,0);w(E)?b(Q):E.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Et(I)}function O(I){let E=I.textures;for(let W=0,ue=E.length;W<ue;W++){let ee=E[W];if(w(ee)&&ee.mipmapsAutoUpdate===!0){let pe=y(I),xe=i.get(ee).__webglTexture;t.bindTexture(pe,xe),b(pe),t.unbindTexture()}}}let on=[];function At(I){if(I.samples>0){if(be(I)===!1){let E=I.textures,W=I.width,ue=I.height,ee=n.COLOR_BUFFER_BIT,pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(I),Q=E.length>1;if(Q)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let N=i.get(E[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,W,ue,0,0,W,ue,ee,n.NEAREST),c===!0&&(on.length=0,on.push(n.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&on.push(pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,on))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let N=i.get(E[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Pt(I){return Math.min(s.maxSamples,I.samples)}function be(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ve(I,E){let W=I.colorSpace,ue=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Ns&&W!==Zi&&(xt.getTransfer(W)===Rt?(ue!==On||ee!==Fn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",W)),E}function Je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=tt,this.resetTextureUnits=oe,this.getTextureUnits=he,this.setTextureUnits=Le,this.setTexture2D=Ee,this.setTexture2DArray=De,this.setTexture3D=We,this.setTextureCube=Te,this.rebindTextures=Ct,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=be,this.dispose=V}function PM(n,e){function t(i,s=Zi){let r,o=xt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===jc)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===gn)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===Ou)return n.RGB;if(i===On)return n.RGBA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===il)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Ko||i===Jo||i===$o||i===jo)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===ol||i===al||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===hl||i===ul||i===fl||i===dl||i===Qo||i===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ll||i===hl)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fl)return r.COMPRESSED_R11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qo)return r.COMPRESSED_RG11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ml||i===gl||i===xl||i===vl||i===yl||i===_l||i===Ml||i===Sl||i===bl||i===wl||i===El||i===Tl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===Pl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cl)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Dl||i===ea||i===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new zo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bt({vertexShader:IM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends _i{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding<"u",p=new pf,g={},_=t.getContextAttributes(),w=null,b=null,y=[],M=[],x=new le,S=null,C=null,R=new en;R.viewport=new Ft;let P=new en;P.viewport=new Ft;let D=[R,P],k=new Yc,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Ee=y[se];return Ee===void 0&&(Ee=new Pr,y[se]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(se){let Ee=y[se];return Ee===void 0&&(Ee=new Pr,y[se]=Ee),Ee.getGripSpace()},this.getHand=function(se){let Ee=y[se];return Ee===void 0&&(Ee=new Pr,y[se]=Ee),Ee.getHandSpace()};function q(se){let Ee=M.indexOf(se.inputSource);if(Ee===-1)return;let De=y[Ee];De!==void 0&&(De.update(se.inputSource,se.frame,l||o),De.dispatchEvent({type:se.type,data:se.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ce);for(let se=0;se<y.length;se++){let Ee=M[se];Ee!==null&&(M[se]=null,y[se].disconnect(Ee))}L=null,V=null,p.reset();for(let se in g)delete g[se];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,b=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),C!==null){let se=C.camera;se.fov=C.fov,se.zoom=C.zoom,se.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,We=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=_.stencil?Yi:Vi,We=_.stencil?Gs:fi);let et={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(et),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Zt(u.textureWidth,u.textureHeight,{format:On,type:Fn,depthTexture:new li(u.textureWidth,u.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let De={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zt(f.framebufferWidth,f.framebufferHeight,{format:On,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ce(se){for(let Ee=0;Ee<se.removed.length;Ee++){let De=se.removed[Ee],We=M.indexOf(De);We>=0&&(M[We]=null,y[We].disconnect(De))}for(let Ee=0;Ee<se.added.length;Ee++){let De=se.added[Ee],We=M.indexOf(De);if(We===-1){for(let et=0;et<y.length;et++)if(et>=M.length){M.push(De),We=et;break}else if(M[et]===null){M[et]=De,We=et;break}if(We===-1)break}let Te=y[We];Te&&Te.connect(De)}}function J(se,Ee){Ee===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Ee.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let Ee=se.near,De=se.far;p.texture!==null&&(p.depthNear>0&&(Ee=p.depthNear),p.depthFar>0&&(De=p.depthFar)),k.near=P.near=R.near=Ee,k.far=P.far=R.far=De,(L!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,V=k.far),k.layers.mask=se.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let We=se.parent,Te=k.cameras;J(k,We);for(let et=0;et<Te.length;et++)J(Te[et],We);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&se.isPerspectiveCamera&&(C={camera:se,fov:se.fov,zoom:se.zoom}),oe(se,k,We)};function oe(se,Ee,De){De===null?se.matrix.copy(Ee.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(Ee.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Ee.projectionMatrix),se.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Rr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(se){c=se,u!==null&&(u.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(se){return g[se]};let he=null;function Le(se,Ee){if(h=Ee.getViewerPose(l||o),m=Ee,h!==null){let De=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let We=!1;De.length!==k.cameras.length&&(k.cameras.length=0,We=!0);for(let B=0;B<De.length;B++){let F=De[B],$=null;if(f!==null)$=f.getViewport(F);else{let de=d.getViewSubImage(u,F);$=de.viewport,B===0&&(e.setRenderTargetTextures(b,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(b))}let ie=D[B];ie===void 0&&(ie=new en,ie.layers.enable(B),ie.viewport=new Ft,D[B]=ie),ie.matrix.fromArray(F.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(F.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set($.x,$.y,$.width,$.height),B===0&&(k.matrix.copy(ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),We===!0&&k.cameras.push(ie)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let B=d.getDepthInformation(De[0]);B&&B.isValid&&B.texture&&p.init(B,s.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let B=0;B<De.length;B++){let F=De[B].camera;if(F){let $=g[F];$||($=new zo,g[F]=$);let ie=d.getCameraImage(F);$.sourceTexture=ie}}}}for(let De=0;De<y.length;De++){let We=M[De],Te=y[De];We!==null&&Te!==void 0&&Te.update(We,Ee,l||o)}he&&he(se,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),m=null}let tt=new U0;tt.setAnimationLoop(Le),this.setAnimationLoop=function(se){he=se},this.dispose=function(){}}},DM=new ct,X0=new nt;X0.set(-1,0,0,0,1,0,0,0,1);function NM(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Ju(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,w):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),w=_.envMap,b=_.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(X0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,e,t,i){let s={},r={};function o(_,w){let b=w.program;i.uniformBlockBinding(_,b,s[_.id])}function a(_,w){let b=s[_.id];b===void 0&&(m(_),b=c(_),s[_.id]=b,_.addEventListener("dispose",p));let y=w.program;i.updateUBOMapping(_,y);let M=e.render.frame;r[_.id]!==M&&(l(_),r[_.id]=M)}function c(_){let w=n.createBuffer(),b=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,y),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(_){let w=s[_.id],b=_.uniforms,y=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let M=0,x=b.length;M<x;M++){let S=b[M];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)h(S[C],M,C,y);else h(S,M,0,y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,w,b,y){if(u(_,w,b,y)===!0){let M=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let R=x[C],P=v(R,!0);d(R,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,_.__data)}}function d(_,w,b){typeof _=="number"||typeof _=="boolean"?w[b]=_:_.isMatrix3?(w[b]=_.elements[0],w[b+1]=_.elements[1],w[b+2]=_.elements[2],w[b+3]=0,w[b+4]=_.elements[3],w[b+5]=_.elements[4],w[b+6]=_.elements[5],w[b+7]=0,w[b+8]=_.elements[6],w[b+9]=_.elements[7],w[b+10]=_.elements[8],w[b+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-b),b):_.toArray(w,b)}function u(_,w,b,y){let M=_.value,x=w+"_"+b;if(Array.isArray(M)){y[x]===void 0&&(y[x]=[]);let S=y[x],C=!1;for(let R=0;R<M.length;R++)f(M[R],S,R)===!0&&(C=!0);return C}return f(M,y,x)}function f(_,w,b){if(w[b]===void 0)return typeof _=="number"||typeof _=="boolean"?w[b]=_:ArrayBuffer.isView(_)?w[b]=_.slice():w[b]=_.clone(),!0;{let y=w[b];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return w[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(y.equals(_)===!1)return y.copy(_),!0}}return!1}function m(_){let w=_.uniforms,b=0,y=16;for(let x=0,S=w.length;x<S;x++){let C=Array.isArray(w[x])?w[x]:[w[x]];for(let R=0,P=C.length;R<P;R++){let D=C[R],k=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(w[x])||Array.isArray(D.value),V=b;for(let X=0,ce=k.length;X<ce;X++){let J=k[X],oe=v(J,L),he=b%y,Le=he%oe.boundary,tt=he+Le;b+=Le,tt!==0&&y-tt<oe.storage&&(b+=y-tt),X===0&&(V=b),b+=oe.storage}let q=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new q((b-V)/Float32Array.BYTES_PER_ELEMENT),D.__offset=V}}let M=b%y;return M>0&&(b+=y-M),_.__size=b,_.__cache={},this}function v(_,w){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=16,b.storage=48):_.isMatrix4?(b.boundary=16,b.storage=64):_.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(_){let w=_.target;w.removeEventListener("dispose",p),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var UM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function zM(){return Ti===null&&(Ti=new zs(UM,16,16,ys,gn),Ti.name="DFG_LUT",Ti.minFilter=pn,Ti.magFilter=pn,Ti.wrapS=yi,Ti.wrapT=yi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var kl=class{constructor(e={}){let{canvas:t=a0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let v=f,p=new Set([sl,il,nl]),g=new Set([Fn,fi,Hr,Gs,Qc,el]),_=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},y=null,M=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null,k=null,L=null,V=null;this._outputColorSpace=Rn;let q=0,X=0,ce=null,J=-1,oe=null,he=new Ft,Le=new Ft,tt=null,se=new ge(0),Ee=0,De=t.width,We=t.height,Te=1,et=null,wt=null,B=new Ft(0,0,De,We),F=new Ft(0,0,De,We),$=!1,ie=new bi,de=new Ec,Ae=!1,Fe=!1,Ie=new ct,at=new T,ht=new Ft,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Yt(){return ce===null?Te:1}let O=i;function on(A,z){return t.getContext(A,z)}let At,Pt,be,Vt,Ve,Je,I,E,W,ue,ee,pe,xe,Q,te,ye,N,re,ne,Me,ve,_e,ke;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Re,!1),O===null){let z="webgl2";if(O=on(z,A),O===null)throw on(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(A){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),je("WebGLRenderer: "+A.message),A}function ft(){At=new Z_(O),At.init(),ve=new PM(O,At),Pt=new z_(O,At,e,ve),be=new RM(O,At),Pt.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),k=O.createFramebuffer(),L=O.createFramebuffer(),V=O.createFramebuffer(),Vt=new $_(O),Ve=new pM,Je=new CM(O,At,be,Ve,Pt,ve,Vt),I=new Y_(R),E=new Qx(O),_e=new F_(O,E),W=new K_(O,E,Vt,_e),ue=new Q_(O,W,E,_e,Vt),re=new j_(O,Pt,Je),te=new B_(Ve),ee=new dM(R,I,At,Pt,_e,te),pe=new NM(R,Ve),xe=new gM,Q=new SM(At),N=new N_(R,I,be,ue,m,c),ye=new AM(R,ue,Pt),ke=new FM(O,Vt,Pt,be),ne=new U_(O,At,Vt),Me=new J_(O,At,Vt),Vt.programs=ee.programs,R.capabilities=Pt,R.extensions=At,R.properties=Ve,R.renderLists=xe,R.shadowMap=ye,R.state=be,R.info=Vt}v!==Fn&&(C=new t1(v,t.width,t.height,a,s,r));let me=new mf(R,O);this.xr=me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(De,We,!1))},this.getSize=function(A){return A.set(De,We)},this.setSize=function(A,z,j=!0){if(me.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,We=z,t.width=Math.floor(A*Te),t.height=Math.floor(z*Te),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(De*Te,We*Te).floor()},this.setDrawingBufferSize=function(A,z,j){De=A,We=z,Te=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(v===Fn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,z,j,Y){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,z,j,Y),be.viewport(he.copy(B).multiplyScalar(Yt()).round())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,z,j,Y){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,j,Y),be.scissor(Le.copy(F).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){be.setScissorTest($=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,j=!0){let Y=0;if(A){let Z=!1;if(ce!==null){let we=ce.texture.format;Z=p.has(we)}if(Z){let we=ce.texture.type,Ne=g.has(we),Se=N.getClearColor(),Pe=N.getClearAlpha(),Be=Se.r,it=Se.g,mt=Se.b;Ne?(_[0]=Be,_[1]=it,_[2]=mt,_[3]=Pe,O.clearBufferuiv(O.COLOR,0,_)):(w[0]=Be,w[1]=it,w[2]=mt,w[3]=Pe,O.clearBufferiv(O.COLOR,0,w))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),N.dispose(),xe.dispose(),Q.dispose(),Je.dispose(),Ve.dispose(),I.dispose(),ue.dispose(),W.dispose(),_e.dispose(),ke.dispose(),ee.dispose(),me.dispose(),me.removeEventListener("sessionstart",Od),me.removeEventListener("sessionend",kd),Ts.stop()};function Xe(A){A.preventDefault(),Ao("WebGLRenderer: Context Lost."),P=!0}function ut(){Ao("WebGLRenderer: Context Restored."),P=!1;let A=Vt.autoReset,z=ye.enabled,j=ye.autoUpdate,Y=ye.needsUpdate,Z=ye.type;ft(),Vt.autoReset=A,ye.enabled=z,ye.autoUpdate=j,ye.needsUpdate=Y,ye.type=Z}function Re(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){let z=A.target;z.removeEventListener("dispose",It),an(z)}function an(A){rs(A),Ve.remove(A)}function rs(A){let z=Ve.get(A).programs;z!==void 0&&(z.forEach(function(j){ee.releaseProgram(j)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,Y,Z,we){z===null&&(z=Et);let Ne=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Se=Hg(A,z,j,Y,Z);be.setMaterial(Y,Ne);let Pe=j.index,Be=1;if(Y.wireframe===!0){if(Pe=W.getWireframeAttribute(j),Pe===void 0)return;Be=2}let it=j.drawRange,mt=j.attributes.position,Ue=it.start*Be,gt=(it.start+it.count)*Be;we!==null&&(Ue=Math.max(Ue,we.start*Be),gt=Math.min(gt,(we.start+we.count)*Be)),Pe!==null?(Ue=Math.max(Ue,0),gt=Math.min(gt,Pe.count)):mt!=null&&(Ue=Math.max(Ue,0),gt=Math.min(gt,mt.count));let jt=gt-Ue;if(jt<0||jt===1/0)return;_e.setup(Z,Y,Se,j,Pe);let zt,Nt=ne;if(Pe!==null&&(zt=E.get(Pe),Nt=Me,Nt.setIndex(zt)),Z.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*Yt()),Nt.setMode(O.LINES)):Nt.setMode(O.TRIANGLES);else if(Z.isLine){let vn=Y.linewidth;vn===void 0&&(vn=1),be.setLineWidth(vn*Yt()),Z.isLineSegments?Nt.setMode(O.LINES):Z.isLineLoop?Nt.setMode(O.LINE_LOOP):Nt.setMode(O.LINE_STRIP)}else Z.isPoints?Nt.setMode(O.POINTS):Z.isSprite&&Nt.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let vn=Z._multiDrawStarts,ze=Z._multiDrawCounts,Tn=Z._multiDrawCount,Tt=Pe?E.get(Pe).bytesPerElement:1,As=Ve.get(Y).currentProgram.getUniforms();for(let yn=0;yn<Tn;yn++)As.setValue(O,"_gl_DrawID",yn),Nt.render(vn[yn]/Tt,ze[yn])}else if(Z.isInstancedMesh)Nt.renderInstances(Ue,jt,Z.count);else if(j.isInstancedBufferGeometry){let vn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ze=Math.min(j.instanceCount,vn);Nt.renderInstances(Ue,jt,ze)}else Nt.render(Ue,jt)};function Bd(A,z,j,Y){D!==null&&A.isNodeMaterial&&D.setObject(Y,A),Ae===!0&&te.setState(A,j,!1),A.transparent===!0&&A.side===Kt&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,lo(A,z,Y),A.side=Ei,A.needsUpdate=!0,lo(A,z,Y),A.side=Kt):lo(A,z,Y)}this.compile=function(A,z,j=null){j===null&&(j=A),D!==null&&D.renderStart(A,z,j),M=Q.get(j),M.init(z),S.push(M),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==j&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Fe=this.localClippingEnabled,Ae=te.init(this.clippingPlanes,Fe),Ae===!0&&te.setGlobalState(this.clippingPlanes,z),D!==null&&ye.render(M.state.shadowsArray,j,z);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let we=Z.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Se=we[Ne];Bd(Se,j,z,Z),Y.add(Se)}else Bd(we,j,z,Z),Y.add(we)}),M=S.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(A,z,j=null){let Y=this.compile(A,z,j);return new Promise(Z=>{function we(){if(Y.forEach(function(Ne){let Pe=Ve.get(Ne).currentProgram;(Pe===void 0||Pe.isReady())&&Y.delete(Ne)}),Y.size===0){Z(A);return}setTimeout(we,10)}At.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Oh=null;function Og(A){Oh&&Oh(A)}function Od(){Ts.stop()}function kd(){Ts.start()}let Ts=new U0;Ts.setAnimationLoop(Og),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(A){Oh=A,me.setAnimationLoop(A),A===null?Ts.stop():Ts.start()},me.addEventListener("sessionstart",Od),me.addEventListener("sessionend",kd),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,z);let j=me.enabled===!0&&me.isPresenting===!0,Y=C!==null&&(ce===null||j)&&C.begin(R,ce);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,ce),M=Q.get(A,S.length),M.init(z),M.state.textureUnits=Je.getTextureUnits(),S.push(M),Ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?de.setFromArrayCamera(z):ie.setFromProjectionMatrix(Ie,Yn,z.reversedDepth),Fe=this.localClippingEnabled,Ae=te.init(this.clippingPlanes,Fe),y=xe.get(A,x.length),y.init(),x.push(y),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let Ne=R.xr.getDepthSensingMesh();Ne!==null&&kh(Ne,z,-1/0,R.sortObjects)}kh(A,z,0,R.sortObjects),y.finish(),D!==null&&D.updateLights(M.state.lightsArray),R.sortObjects===!0&&y.sort(et,wt),Ct=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ct&&N.addToRenderList(y,A),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&te.beginShadows();let Z=M.state.shadowsArray;if(ye.render(Z,A,z),Ae===!0&&te.endShadows(),(Y&&C.hasRenderPass())===!1){let Ne=y.opaque,Se=y.transmissive;if(M.setupLights(),z.isArrayCamera){let Pe=z.cameras;if(Se.length>0)for(let Be=0,it=Pe.length;Be<it;Be++){let mt=Pe[Be];Vd(Ne,Se,A,mt)}Ct&&N.render(A);for(let Be=0,it=Pe.length;Be<it;Be++){let mt=Pe[Be];Hd(y,A,mt,mt.viewport)}}else Se.length>0&&Vd(Ne,Se,A,z),Ct&&N.render(A),Hd(y,A,z)}ce!==null&&X===0&&(Je.updateMultisampleRenderTarget(ce),Je.updateRenderTargetMipmap(ce)),Y&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),_e.resetDefaultState(),J=-1,oe=null,S.pop(),S.length>0?(M=S[S.length-1],Je.setTextureUnits(M.state.textureUnits),Ae===!0&&te.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?y=x[x.length-1]:y=null,D!==null&&D.renderEnd()};function kh(A,z,j,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){let Ne=z.isArrayCamera?de:ie;if(!A.frustumCulled||A.intersectsFrustum(Ne)){Y&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);let Se=ue.update(A),Pe=A.material;Pe.visible&&y.push(A,Se,Pe,j,ht.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Ne=z.isArrayCamera?de:ie;if(!A.frustumCulled||A.intersectsFrustum(Ne)){let Se=ue.update(A),Pe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ht.copy(Se.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)),Array.isArray(Pe)){let Be=Se.groups;for(let it=0,mt=Be.length;it<mt;it++){let Ue=Be[it],gt=Pe[Ue.materialIndex];gt&&gt.visible&&y.push(A,Se,gt,j,ht.z,Ue,z)}}else Pe.visible&&y.push(A,Se,Pe,j,ht.z,null,z)}}}let we=A.children;for(let Ne=0,Se=we.length;Ne<Se;Ne++)kh(we[Ne],z,j,Y)}function Hd(A,z,j,Y){let{opaque:Z,transmissive:we,transparent:Ne}=A;M.setupLightsView(j),Ae===!0&&te.setGlobalState(R.clippingPlanes,j),Y&&be.viewport(he.copy(Y)),Z.length>0&&Ua(Z,z,j),we.length>0&&Ua(we,z,j),Ne.length>0&&Ua(Ne,z,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Vd(A,z,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Ue=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Zt(1,1,{generateMipmaps:!0,type:Ue?gn:Fn,minFilter:ui,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let we=M.state.transmissionRenderTarget[Y.id],Ne=Y.viewport||he;we.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(se),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),Ct&&N.render(j);let it=R.toneMapping;R.toneMapping=jn;let mt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ae===!0&&te.setGlobalState(R.clippingPlanes,Y),Ua(A,j,Y),Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let gt=0,jt=z.length;gt<jt;gt++){let zt=z[gt],{object:Nt,geometry:vn,material:ze,group:Tn}=zt;if(ze.side===Kt&&Nt.layers.test(Y.layers)){let Tt=ze.side;ze.side=nn,ze.needsUpdate=!0,Gd(Nt,j,Y,vn,ze,Tn),ze.side=Tt,ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we))}R.setRenderTarget(Se,Pe,Be),R.setClearColor(se,Ee),mt!==void 0&&(Y.viewport=mt),R.toneMapping=it}function Ua(A,z,j){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,we=A.length;Z<we;Z++){let Ne=A[Z],{object:Se,geometry:Pe,group:Be}=Ne,it=Ne.material;it.allowOverride===!0&&Y!==null&&(it=Y),Se.layers.test(j.layers)&&Gd(Se,z,j,Pe,it,Be)}}function Gd(A,z,j,Y,Z,we){D!==null&&Z.isNodeMaterial&&D.setObject(A,Z),A.onBeforeRender(R,z,j,Y,Z,we),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,z,j,Y,A,we),Z.transparent===!0&&Z.side===Kt&&Z.forceSinglePass===!1?(Z.side=nn,Z.needsUpdate=!0,R.renderBufferDirect(j,z,Y,Z,A,we),Z.side=Ei,Z.needsUpdate=!0,R.renderBufferDirect(j,z,Y,Z,A,we),Z.side=Kt):R.renderBufferDirect(j,z,Y,Z,A,we),A.onAfterRender(R,z,j,Y,Z,we)}function Wd(A){let z=0;for(let j of A)j.texture!==null&&z++;return z}function lo(A,z,j){z.isScene!==!0&&(z=Et);let Y=Ve.get(A),Z=M.state.lights,we=M.state.shadowsArray,Ne=Z.state.version,Se=ee.getParameters(A,Z.state,we,z,j,M.state.lightProbeGridArray),Pe=ee.getProgramCacheKey(Se),Be=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=I.get(A.envMap||Y.environment,it),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",It),Be=new Map,Y.programs=Be,Y.programVariants=new Map);let mt=Be.get(Pe);if(mt!==void 0){if(Y.currentProgram===mt&&Y.lightsStateVersion===Ne)return Xd(A,Se),mt}else Se.uniforms=ee.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,j,Se),A.onBeforeCompile(Se,R),mt=ee.acquireProgram(Se,Pe),Be.set(Pe,mt),Y.uniforms=Se.uniforms;let Ue=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=te.uniform),Xd(A,Se),Y.needsLights=Gg(A),Y.lightsStateVersion=Ne,Y.needsLights&&(Ue.ambientLightColor.value=Z.state.ambient,Ue.lightProbe.value=Z.state.probe,Ue.sunLights.value=Z.state.sun,Ue.sunLightShadows.value=Z.state.sunShadow,Ue.directionalLights.value=Z.state.directional,Ue.directionalLightShadows.value=Z.state.directionalShadow,Ue.spotLights.value=Z.state.spot,Ue.spotLightShadows.value=Z.state.spotShadow,Ue.rectAreaLights.value=Z.state.rectArea,Ue.ltc_1.value=Z.state.rectAreaLTC1,Ue.ltc_2.value=Z.state.rectAreaLTC2,Ue.pointLights.value=Z.state.point,Ue.pointLightShadows.value=Z.state.pointShadow,Ue.hemisphereLights.value=Z.state.hemi,Ue.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ue.sunShadowCascade.value=Z.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Z.state.spotLightMatrix,Ue.spotLightMap.value=Z.state.spotLightMap,Ue.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Wd(M.state.lightProbeGridArray),Y.currentProgram=mt,Y.uniformsList=null,mt}function kg(A,z,j,Y,Z){let we=Ve.get(A),Ne=we.currentProgram.id+","+Y+","+Z,Se=we.programVariants.get(Ne);return Se===void 0?(Se=lo(A,z,j),we.programVariants.set(Ne,Se)):(we.currentProgram=Se,we.uniformsList=null,we.outputColorSpace=Y,we.toneMapping=Z),Se}function qd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Vr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Xd(A,z){let j=Ve.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Hg(A,z,j,Y,Z){z.isScene!==!0&&(z=Et),Je.resetTextureUnits();let we=z.fog,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Se=ce===null?R.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:xt.workingColorSpace,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Be=I.get(Y.envMap||Ne,Pe),it=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,mt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,jt=!!j.morphAttributes.color,zt=jn;Y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(zt=R.toneMapping);let Nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vn=Nt!==void 0?Nt.length:0,ze=Ve.get(Y),Tn=M.state.lights;if(Ae===!0&&(Fe===!0||A!==oe)){let Gt=A===oe&&Y.id===J;te.setState(Y,A,Gt)}let Tt=!1,As=!1;Y.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Tn.state.version||Z.isBatchedMesh&&ze.batching===!1||!Z.isBatchedMesh&&ze.batching===!0||Z.isBatchedMesh&&ze.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&ze.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||Z.isInstancedMesh&&ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ze.instancingMorph===!1&&Z.morphTexture!==null||ze.envMap!==Be||Y.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==te.numPlanes||ze.numIntersection!==te.numIntersection)||ze.vertexAlphas!==it||ze.vertexTangents!==mt||ze.morphTargets!==Ue||ze.morphNormals!==gt||ze.morphColors!==jt||ze.morphTargetsCount!==vn||ze.numLightProbeGrids!==Wd(M.state.lightProbeGridArray)?Tt=!0:(ze.outputColorSpace!==Se||ze.toneMapping!==zt)&&(As=!0):(Tt=!0,ze.__version=Y.version);let yn=ze.currentProgram;(Tt===!0||As===!0)&&(yn=As===!0?kg(Y,z,Z,Se,zt):lo(Y,z,Z),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,yn,ze));let za=!1,os=!1,Rs=!1,St=yn.getUniforms(),dn=ze.uniforms;if(be.useProgram(yn.program)&&(za=!0,os=!0,Rs=!0),Y.id!==J&&(J=Y.id,os=!0),za||oe!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",A.projectionMatrix),St.setValue(O,"viewMatrix",A.matrixWorldInverse);let cn=St.map.cameraPosition;cn!==void 0&&cn.setValue(O,at.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),oe!==A&&(oe=A,os=!0,Rs=!0)}if(ze.needsLights&&(Tn.state.sunShadowMap.length>0&&St.setValue(O,"sunShadowMap",Tn.state.sunShadowMap,Je),Tn.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",Tn.state.directionalShadowMap,Je),Tn.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",Tn.state.spotShadowMap,Je),Tn.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",Tn.state.pointShadowMap,Je)),Z.isSkinnedMesh){St.setOptional(O,Z,"bindMatrix"),St.setOptional(O,Z,"bindMatrixInverse");let Gt=Z.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),St.setValue(O,"boneTexture",Gt.boneTexture,Je))}Z.isBatchedMesh&&(St.setOptional(O,Z,"batchingTexture"),St.setValue(O,"batchingTexture",Z._matricesTexture,Je),St.setOptional(O,Z,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",Z._indirectTexture,Je),St.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",Z._colorsTexture,Je));let si=j.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&re.update(Z,j,yn),(os||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,St.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(dn.envMapIntensity.value=z.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=zM()),os){if(St.setValue(O,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&Vg(dn,Rs),we&&Y.fog===!0&&pe.refreshFogUniforms(dn,we),pe.refreshMaterialUniforms(dn,Y,Te,We,M.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.numLightProbeGrids>0){let Gt=b,cn=0;for(let Ni of M.state.lightProbeGridArray)Ni.texture!==null&&(Gt.textures[cn]=Ni.texture,Gt.min[cn]=Ni.boundingBox.min,Gt.max[cn]=Ni.boundingBox.max,Gt.resolution[cn]=Ni.resolution,cn++);for(let Ni in Gt)Gt[Ni].length=cn;dn.probesSH.value=Gt.textures,dn.probesMin.value=Gt.min,dn.probesMax.value=Gt.max,dn.probesResolution.value=Gt.resolution}Vr.upload(O,qd(ze),dn,Je)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vr.upload(O,qd(ze),dn,Je),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(O,"center",Z.center),St.setValue(O,"modelViewMatrix",Z.modelViewMatrix),St.setValue(O,"normalMatrix",Z.normalMatrix),St.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Gt=Y.uniformsGroups;for(let cn=0,Ni=Gt.length;cn<Ni;cn++){let Zd=Gt[cn];ke.update(Zd,yn),ke.bind(Zd,yn)}}return yn}function Vg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Gg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(A,z,j){let Y=Ve.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ve.get(A.texture).__webglTexture=z,Ve.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let j=Ve.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,j=0){ce=A,q=z,X=j;let Y=null,Z=!1,we=!1;if(A){let Se=Ve.get(A);if(Se.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(A.viewport),Le.copy(A.scissor),tt=A.scissorTest,be.viewport(he),be.scissor(Le),be.setScissorTest(tt),J=-1;return}else if(Se.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(Se.__hasExternalTextures)Je.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(Se.__boundDepthTexture!==it){if(it!==null&&Ve.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}let Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);let Be=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?Y=Be[z][j]:Y=Be[z],Z=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?Y=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[j]:Y=Be,he.copy(A.viewport),Le.copy(A.scissor),tt=A.scissorTest}else he.copy(B).multiplyScalar(Te).floor(),Le.copy(F).multiplyScalar(Te).floor(),tt=$;if(j!==0&&(Y=k),be.bindFramebuffer(O.FRAMEBUFFER,Y)&&be.drawBuffers(A,Y),be.viewport(he),be.scissor(Le),be.setScissorTest(tt),Z){let Se=Ve.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,j)}else if(we){let Se=z;for(let Pe=0;Pe<A.textures.length;Pe++){let Be=Ve.get(A.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,Be.__webglTexture,j,Se)}}else if(A!==null&&j!==0){let Se=Ve.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,j)}J=-1};function Yd(A){let z=Ve.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Pt.textureFormatReadable(A.format),z.__typeReadable=Pt.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,j,Y,Z,we,Ne,Se=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){be.bindFramebuffer(O.FRAMEBUFFER,Pe);try{let Be=A.textures[Se],it=Be.format,mt=Be.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Ue=Yd(Be);if(Ue.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&j>=0&&j<=A.height-Z&&O.readPixels(z,j,Y,Z,ve.convert(it),ve.convert(mt),we)}finally{let Be=ce!==null?Ve.get(ce).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,z,j,Y,Z,we,Ne,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(z>=0&&z<=A.width-Y&&j>=0&&j<=A.height-Z){be.bindFramebuffer(O.FRAMEBUFFER,Pe);let Be=A.textures[Se],it=Be.format,mt=Be.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Ue=Yd(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(z,j,Y,Z,ve.convert(it),ve.convert(mt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let jt=ce!==null?Ve.get(ce).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,jt);let zt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await l0(O,zt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(gt),O.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,j=0){let Y=Math.pow(2,-j),Z=Math.floor(A.image.width*Y),we=Math.floor(A.image.height*Y),Ne=z!==null?z.x:0,Se=z!==null?z.y:0;Je.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Ne,Se,Z,we),be.unbindTexture()},this.copyTextureToTexture=function(A,z,j=null,Y=null,Z=0,we=0){let Ne,Se,Pe,Be,it,mt,Ue,gt,jt,zt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(j!==null)Ne=j.max.x-j.min.x,Se=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,it=j.min.y,mt=j.isBox3?j.min.z:0;else{let St=Math.pow(2,-Z);Ne=Math.floor(zt.width*St),Se=Math.floor(zt.height*St),A.isDataArrayTexture?Pe=zt.depth:A.isData3DTexture?Pe=Math.floor(zt.depth*St):Pe=1,Be=0,it=0,mt=0}Y!==null?(Ue=Y.x,gt=Y.y,jt=Y.z):(Ue=0,gt=0,jt=0);let Nt=ve.convert(z.format),vn=ve.convert(z.type),ze;z.isData3DTexture?(Je.setTexture3D(z,0),ze=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Je.setTexture2DArray(z,0),ze=O.TEXTURE_2D_ARRAY):(Je.setTexture2D(z,0),ze=O.TEXTURE_2D),be.activeTexture(O.TEXTURE0),be.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),be.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),be.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Tn=be.getParameter(O.UNPACK_ROW_LENGTH),Tt=be.getParameter(O.UNPACK_IMAGE_HEIGHT),As=be.getParameter(O.UNPACK_SKIP_PIXELS),yn=be.getParameter(O.UNPACK_SKIP_ROWS),za=be.getParameter(O.UNPACK_SKIP_IMAGES);be.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),be.pixelStorei(O.UNPACK_SKIP_ROWS,it),be.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);let os=A.isDataArrayTexture||A.isData3DTexture,Rs=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let St=Ve.get(A),dn=Ve.get(z),si=Ve.get(St.__renderTarget),Gt=Ve.get(dn.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,si.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let cn=0;cn<Pe;cn++)os&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,Z,mt+cn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(z).__webglTexture,we,jt+cn)),O.blitFramebuffer(Be,it,Be+Ne,it+Se,Ue,gt,Ue+Ne,gt+Se,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Ve.has(A)){let St=Ve.get(A),dn=Ve.get(z);be.bindFramebuffer(O.READ_FRAMEBUFFER,L),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let si=0;si<Pe;si++)os?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,Z,mt+si):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,St.__webglTexture,Z),Rs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,we,jt+si):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,we),Z!==0?O.blitFramebuffer(Be,it,Be+Ne,it+Se,Ue,gt,Ue+Ne,gt+Se,O.COLOR_BUFFER_BIT,O.NEAREST):Rs?O.copyTexSubImage3D(ze,we,Ue,gt,jt+si,Be,it,Ne,Se):O.copyTexSubImage2D(ze,we,Ue,gt,Be,it,Ne,Se);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rs?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(ze,we,Ue,gt,jt,Ne,Se,Pe,Nt,vn,zt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,we,Ue,gt,jt,Ne,Se,Pe,Nt,zt.data):O.texSubImage3D(ze,we,Ue,gt,jt,Ne,Se,Pe,Nt,vn,zt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Ue,gt,Ne,Se,Nt,vn,zt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Ue,gt,zt.width,zt.height,Nt,zt.data):O.texSubImage2D(O.TEXTURE_2D,we,Ue,gt,Ne,Se,Nt,vn,zt);be.pixelStorei(O.UNPACK_ROW_LENGTH,Tn),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),be.pixelStorei(O.UNPACK_SKIP_PIXELS,As),be.pixelStorei(O.UNPACK_SKIP_ROWS,yn),be.pixelStorei(O.UNPACK_SKIP_IMAGES,za),we===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&O.generateMipmap(ze),be.unbindTexture()},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){q=0,X=0,ce=null,be.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},BM=new ks(-1,1,1,-1,0,1),gf=class extends Mt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},OM=new gf,Xr=class{constructor(e){this._mesh=new st(OM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xs=class extends di{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qs.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ra=class extends di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Wl=class extends di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xs(qr),this.copyPass.material.blending=Xi,this.timer=new Yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ra!==void 0&&(o instanceof ra?i=!0:o instanceof Wl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oa=class extends di{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Y0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ys=class n extends di{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:gn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Zt(r,o,{type:gn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Zt(r,o,{type:gn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Y0;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qs.clone(qr.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new ps,this._fsQuad=new Xr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ys.BlurDirectionX=new le(1,0);Ys.BlurDirectionY=new le(0,1);function K0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Mt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Z0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let m=Z0(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Z0(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new He(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let v=h.getComponent(u,m);a.setComponent(u+d,m,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Ms(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,1440662683);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}function kM(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Math.floor(t),o=n-i,a=e-s,c=t-r,l=o*o*(3-2*o),h=a*a*(3-2*a),d=c*c*(3-2*c),u=Ms(i,s,r),f=Ms(i+1,s,r),m=Ms(i,s+1,r),v=Ms(i+1,s+1,r),p=Ms(i,s,r+1),g=Ms(i+1,s,r+1),_=Ms(i,s+1,r+1),w=Ms(i+1,s+1,r+1),b=u+(f-u)*l,y=m+(v-m)*l,M=p+(g-p)*l,x=_+(w-_)*l,S=b+(y-b)*h,C=M+(x-M)*h;return(S+(C-S)*d)*2-1}function xf(n,e,t,i=3){let s=0,r=.5,o=1;for(let a=0;a<i;a++)s+=r*kM(n*o,e*o,t*o),o*=2.03,r*=.5;return s}var HM={colt75:{name:"Colt Single Action Army 7\xBD\u2033 Cavalry",mats:{frame:"case",barrel:"blued",straps:"blued",grip:"walnut",screws:"fireblue",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:1,hamMax:.82},colt475:{name:"Colt Single Action Army 4\xBE\u2033 Civilian, nickel",mats:{frame:"nickel",barrel:"nickel",straps:"nickel",grip:"ivory",screws:"nickel",cylinder:"nickel",hammer:"nickel",trigger:"nickel"},wear:.45,turn:1,hamMax:.82},schofield:{name:"Smith & Wesson Model 3 Schofield 7\u2033",mats:{frame:"blued",barrel:"blued",grip:"walnut",screws:"blued",ring:"steel",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:-1,hamMax:.78}};function vf(n,e,t,i){let s=new fs,r=new Bt({side:nn,depthWrite:!1,uniforms:{cT:{value:new ge(n)},cM:{value:new ge(e)},cB:{value:new ge(t)}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 cT, cM, cB; varying vec3 vD; void main(){ float y = normalize(vD).y; vec3 c = y > 0.0 ? mix(cM, cT, pow(y, 0.55)) : mix(cM, cB, pow(-y, 0.35)); gl_FragColor = vec4(c, 1.0); }"});s.add(new st(new qi(10,64,32),r));for(let o of i){let a=o.box?new Jn(o.box[0],o.box[1]):new qi(o.r,32,16),c=new st(a,new ps({color:new ge(o.c[0],o.c[1],o.c[2]),side:Kt}));c.position.set(o.p[0],o.p[1],o.p[2]),o.box&&c.lookAt(0,0,0),o.s&&c.scale.set(o.s[0],o.s[1],o.s[2]),s.add(c)}return s}function Q0(n,e=["studio","day","night"]){let t=new Gr(n),i={studio:()=>t.fromScene(vf("#29292d","#1a1a1d","#0f0f11",[{box:[7,3.5],p:[0,7.5,1.5],c:[4.6,4.6,4.7]},{box:[1.2,7],p:[-7,1,3],c:[5.5,5.4,5.2]},{box:[.8,7],p:[7,.5,-2],c:[3.2,3.4,3.8]},{box:[9,5],p:[-1,1,8.5],c:[1.25,1.25,1.25]},{box:[3,7],p:[6,1,5],c:[1.9,1.9,1.9]},{box:[8,1.5],p:[0,-6,4],c:[.4,.38,.35]}]),.02).texture,day:()=>t.fromScene(vf("#3d6aae","#ead9ba","#8c6a46",[{p:[4.2,6.4,3.4],r:.42,c:[70,58,42]},{p:[0,-7,2],r:3.5,c:[.9,.72,.5],s:[1.6,.3,1.6]}]),.02).texture,night:()=>t.fromScene(vf("#05070d","#0c0a09","#050403",[{p:[-3.4,-1,3.2],r:.5,c:[30,13.5,4]},{p:[1.8,-2.6,-6],r:1.5,c:[1.5,.5,.13]},{p:[2.5,6.5,-4],r:.22,c:[3.2,3.4,3.8]}]),.015).texture},s={};for(let r of e)s[r]=i[r]();return t.dispose(),s}var VM=`
float h3(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vn(p); p = p*2.03 + 1.7; a *= 0.5; } return s; }
`,GM=`
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
`,WM=`
{ float occ = mix(1.0, vAtt.x, 0.92);
  reflectedLight.indirectDiffuse *= occ;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= occ;
  #endif
  float dNV = saturate(dot(geometryNormal, geometryViewDir));
  reflectedLight.indirectSpecular *= computeSpecularOcclusion(dNV, occ, material.roughness);
  float dOcc = mix(1.0, vAtt.x, 0.6);
  reflectedLight.directSpecular *= dOcc; reflectedLight.directDiffuse *= dOcc; }
`,qM={blued:0,case:1,nickel:2,walnut:3,ivory:4,fireblue:5,lead:6,steel:7,brass:8},yf=new Map;function XM(n,e){let t=n+e;if(yf.has(t))return yf.get(t);let i=n==="walnut"||n==="ivory",s=new wi({color:16777215,metalness:i?0:1,roughness:.3,clearcoat:{blued:.8,case:.6,walnut:.35,ivory:.5}[n]||0,clearcoatRoughness:n==="walnut"?.35:.12});return s.defines={KIND:qM[n]},s.onBeforeCompile=r=>{r.uniforms.uWear={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP; uniform float uWear;
${VM}`).replace("#include <color_fragment>",`#include <color_fragment>
${GM}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = rough;`).replace("#include <aomap_fragment>",WM)},s.customProgramCacheKey=()=>"rv"+n,yf.set(t,s),s}function YM(n){let e=atob(n.data),t=new Uint8Array(e.length);for(let f=0;f<e.length;f++)t[f]=e.charCodeAt(f);let i=t.buffer,s=n.vc,r=n.ic,o=0,a;n.i32&&(a=new Uint32Array(i,o,r),o+=r*4);let c=new Int16Array(i,o,s*3);o+=s*6,n.i32||(a=new Uint16Array(i,o,r),o+=r*2);let l=new Int8Array(i,o,s*3);o+=s*3;let h=new Uint8Array(i,o,s*2),d=new Float32Array(s*3);for(let f=0;f<s*3;f++)d[f]=c[f]*n.ps;let u=new Mt;return u.setAttribute("position",new He(d,3)),u.setAttribute("normal",new He(new Int8Array(l),3,!0)),u.setAttribute("aAtt",new He(new Uint8Array(h),2,!0)),u.setIndex(new He(n.i32?new Uint32Array(a):new Uint16Array(a),1)),u.computeBoundingSphere(),u}function ZM(n,e){let t=n.index.array,i=n.attributes.position.array,s=[],r=[];for(let o=0;o<t.length;o+=3)(i[3*t[o]+1]<e&&i[3*t[o+1]+1]<e&&i[3*t[o+2]+1]<e?r:s).push(t[o],t[o+1],t[o+2]);return[s,r].map(o=>{let a=new Mt;for(let c of["position","normal","aAtt"])a.setAttribute(c,n.attributes[c]);return a.setIndex(o),a.computeBoundingSphere(),a})}function KM(n){let e=n.attributes.position.count,t=new Uint8Array(e*2);for(let i=0;i<e;i++)t[2*i]=255,t[2*i+1]=128;return n.setAttribute("aAtt",new He(t,2,!0)),n}var _f=new Map;function JM(n){if(_f.has(n))return _f.get(n);let e=i=>{let s=new ms(i.map(([r,o])=>new le(r,o*n)),24);return s.rotateX(-Math.PI/2),KM(s)},t={case:e([[1e-4,2e-4],[.0024,2e-4],[.0025,0],[.0064,0],[.0065,4e-4],[.0064,.0013],[.0058,.0016],[.0058,.031],[.0054,.031],[.0053,.0285],[.0053,.004],[1e-4,.004]]),bullet:e([[1e-4,.026],[.0057,.026],[.0057,.0315],[.0055,.0332],[.0049,.0348],[.0039,.0361],[.0025,.037],[.001,.0373],[0,.0374]]),caseLen:.031*n,tipLen:.0374*n};return _f.set(n,t),t}function $M(n,e,t){let i=new Dt,s=v=>XM(v,t.wear),r=(v,p,g=i)=>{let _=new st(v,s(p));return g.add(_),_},o=new Dt,a=new Dt,c=new Dt,l=null,h=null;o.position.set(0,n.cylY,0),a.position.set(0,n.hammerPivot[1],n.hammerPivot[0]),c.position.set(0,n.triggerPivot[1],n.triggerPivot[0]),i.add(o,a,c);for(let v of n.parts){let p=e[v];if(v==="cylinder")p.translate(0,-n.cylY,0),r(p,t.mats.cylinder,o);else if(v==="hammer")r(p,t.mats.hammer,a);else if(v==="trigger")r(p,t.mats.trigger,c);else if(v==="gate")l=new Dt,l.position.set(n.gatePivot[0],n.gatePivot[1],0),i.add(l),p.translate(-n.gatePivot[0],-n.gatePivot[1],0),r(p,t.mats.frame,l);else if(v==="ejector")h=new Dt,i.add(h),r(p,t.mats.barrel,h);else if(v==="screws"&&t.mats.ring){let[g,_]=ZM(p,-.11);r(g,t.mats.screws),r(_,t.mats.ring)}else r(p,t.mats[v])}let d=JM(Math.min(1,(-n.chamberZ-.0031)/.0374)),u=[],f=[];for(let v=0;v<6;v++){let p=Math.PI/2+t.turn*v*Math.PI/3,g=new Dt;g.userData.home=new T(Math.cos(p)*n.chamberR,Math.sin(p)*n.chamberR,-1e-4),g.userData.out=new T(Math.cos(p),Math.sin(p),0),g.position.copy(g.userData.home),o.add(g),g.userData.case=r(d.case,"brass",g),f.push(r(d.bullet,"lead",g)),u.push(g)}let m={conf:t,meta:n,group:i,cylinder:o,hammer:a,trigger:c,gate:l,rod:h,carts:u,bullets:f,cart:d,drops:[],muzzle:new T(0,0,n.zMuz),grip:new T(0,-.08,.045),state:{top:0,chambers:[],cocked:!1,anim:null}};return Mf(m,{},{instant:!0}),m}async function em(n){let e=typeof n=="string"?await(await fetch(n)).json():n,t={};for(let i of e.meta.parts)t[i]=YM(e.parts[i]);return $M(e.meta,t,HM[e.id])}var jM=.11,Ji=n=>n*n*(3-2*n),Zs=(n,e,t)=>Ji(Math.min(1,Math.max(0,(t-n)/(e-n))));function tm(n,e,t,i){n.hammer.rotation.x=n.conf.hamMax*e,n.trigger.rotation.x=-jM*t,n.cylinder.rotation.z=-n.conf.turn*i*Math.PI/3}function QM(n){n.carts.forEach((e,t)=>{let i=n.state.chambers[t];e.visible=i!=="empty",n.bullets[t].visible=i==="live",e.position.copy(e.userData.home),e.quaternion.identity()})}function Mf(n,e={},t={}){let i=n.state;if(i.anim)return!1;if(!n.gate||t.instant){i.chambers=["empty","live","live","live","live","live"],i.top=0,i.cocked=!1;for(let u of n.drops)u.obj.removeFromParent();return n.drops.length=0,QM(n),tm(n,0,1,0),n.gate&&(n.gate.rotation.z=0),!0}let s=i.top,r=i.chambers.slice(),o=[0,1,2,3,4,5].map(u=>(s+5+u)%6),a=o.find(u=>r[u]==="empty")??o.find(u=>r[u]==="spent");if(a===void 0)return!1;let c=u=>r[u]==="spent"||u!==a&&r[u]==="empty";if(!o.some(c))return!1;let l=0;o.forEach((u,f)=>{c(u)&&(l=f)});let h=l;for(;(s+h+1)%6!==a;)h++;let d=[{k:"half"},{k:"open"}];for(let u=0;u<=h;u++){u>0&&d.push({k:"turn"});let f=(s+5+u)%6;u>5||(r[f]==="spent"&&(d.push({k:"eject",c:f}),r[f]="empty"),f!==a&&r[f]==="empty"&&(d.push({k:"insert",c:f}),r[f]="live"))}return d.push({k:"close"},{k:"cock"},{k:"lower"}),i.anim={type:"reload",steps:d,i:-1,t:0,ham0:i.cocked?1:0},i.cocked=!1,!0}var J0={half:.3,open:.3,turn:.22,eject:.6,insert:.5,close:.28,cock:.34,lower:.5},$0=new ct,j0=new vt,Sf=new T,Xl=new T;function eS(n,e,t){let i=n.carts[e],s=i.clone();i.updateMatrix(),$0.multiplyMatrices(n.cylinder.matrix,i.matrix),$0.decompose(s.position,s.quaternion,s.scale),n.group.add(s);let r=Sf.copy(i.userData.out).applyQuaternion(n.cylinder.quaternion);n.drops.push({obj:s,t:0,v:new T(r.x*.35,r.y*.35+.15,.45),w:new T(8+Math.random()*6,3-Math.random()*6,0)}),i.visible=!1,i.position.copy(i.userData.home),t.slide?.()}function tS(n,e,t){if(!n.drops.length)return;n.group.updateWorldMatrix(!0,!1),n.group.matrixWorld.decompose(Sf,j0,Xl);let i=new T(0,-9.8/Xl.y,0).applyQuaternion(j0.invert());for(let s=n.drops.length-1;s>=0;s--){let r=n.drops[s];r.t+=e,r.v.addScaledVector(i,e),r.obj.position.addScaledVector(r.v,e),r.obj.rotation.x+=r.w.x*e,r.obj.rotation.y+=r.w.y*e,!r.rang&&r.t>.5&&(r.rang=1,t.drop?.()),r.t>1.4&&(r.obj.removeFromParent(),n.drops.splice(s,1))}}function nS(n,e,t,i){let s=n.state,r=e.steps[e.i];if(e.i<0||e.t>=J0[r.k]){if(r?.k==="eject"&&(n.rod.position.z=0),e.i++,e.t=0,r=e.steps[e.i],!r)return s.anim=null,[0,1,s.top,0];if((r.k==="turn"||r.k==="cock")&&(e.from=s.top,s.top=(s.top+1)%6),r.k==="insert"){s.chambers[r.c]="live";let u=n.carts[r.c];u.visible=!0,n.bullets[r.c].visible=!0,i.insert?.()}(r.k==="open"||r.k==="close"||r.k==="half")&&i.click?.(.3,r.k==="half"?2600:1700)}e.t+=t;let o=Math.min(1,e.t/J0[r.k]),a=Ji(o),c=.3,l=.5,h=1,d=s.top;switch(r.k){case"half":c=e.ham0+(.3-e.ham0)*a,l=(e.ham0?0:1)+((e.ham0?0:1)-.5)*-a,h=0;break;case"open":h=a;break;case"turn":d=e.from+Zs(0,.8,o),!e.c&&o>.8&&(e.c=1,i.click?.(.18,4200));break;case"eject":{let u=o<.55?Ji(o/.55):1-Ji((o-.55)/.45);n.rod.position.z=u*n.meta.rodTravel;let f=n.carts[r.c],m=f.userData.home.z-(s.chambers[r.c]==="live"?n.cart.tipLen:n.cart.caseLen);f.visible&&(f.position.z=f.userData.home.z+Math.max(0,n.meta.rodTip+u*n.meta.rodTravel-m)),f.visible&&o>=.55&&(s.chambers[r.c]="empty",eS(n,r.c,i));break}case"insert":{let u=n.carts[r.c],f=u.userData.home,m=n.cart.tipLen,v=.35*(1-Zs(.4,1,o)),p=new T(f.x,f.y,0);o<.4?p.addScaledVector(u.userData.out,.022*(1-Ji(o/.4))).z+=.004*(1-Ji(o/.4)):p.z=-m*Ji((o-.4)/.6)+0,Xl.set(-u.userData.out.y,u.userData.out.x,0),u.quaternion.setFromAxisAngle(Xl,v),u.position.copy(p).add(Sf.set(0,0,m).applyQuaternion(u.quaternion)),o>=1&&(u.position.copy(f),u.quaternion.identity());break}case"close":h=1-a;break;case"cock":h=0,c=.3+.7*a,d=e.from+Zs(.2,.85,o),l=.5*(1-Zs(.7,1,o)),!e.c2&&o>=1&&(e.c2=1,i.click?.(.6,2900));break;case"lower":h=0,c=1-Ji(Math.max(0,(o-.15)/.85)),l=o<.15?1.45*(o/.15):1.45-.45*Zs(.85,1,o);break}return n.gate&&(n.gate.rotation.z=-1.65*h),[c,l,d]}function bf(n,e={}){let t=n.state;return t.anim||t.cocked?!1:(t.anim={type:"cock",t:0,from:t.top},t.top=(t.top+1)%6,e.click?.(.25,2400),!0)}function nm(n,e={}){let t=n.state;return t.anim?!1:t.cocked?(t.anim={type:"fire",t:0},!0):bf(n,e)}function im(n,e,t={}){let i=n.state,s=i.anim,r=i.cocked?1:0,o=i.cocked?0:1,a=i.top;if(tS(n,e,t),s&&s.type==="reload")[r,o,a]=nS(n,s,e,t);else if(s)if(s.t+=e,s.type==="cock"){let c=Math.min(1,s.t/.34);r=Ji(c),a=s.from+Zs(.25,.85,c),o=1-Zs(.75,1,c),!s.c1&&c>.5&&(s.c1=1,t.click?.(.35,3300)),c>=1&&(t.click?.(.6,2900),i.cocked=!0,i.anim=null)}else{let c=s.t;o=Math.min(1.45,c/.05*1.45),r=c<.05?1:Math.max(0,1-(c-.05)/.03),!s.shot&&c>=.08&&(s.shot=1,i.cocked=!1,i.chambers[i.top]==="live"?(i.chambers[i.top]="spent",n.bullets[i.top].visible=!1,t.shot?.()):t.dry?.()),c>.08&&(o=1+.45*Math.max(0,1-(c-.08)/.2)),c>.32&&(i.anim=null)}tm(n,r,o,a)}var wf="powderRef";var Ef="rock";function Tf(n,e=t=>t.destination){let t=null,i=null,s=null,r={},o=()=>{let y=n();return y?(y!==t&&(t=y,s=a(y),r={},i=y.createDynamicsCompressor(),i.threshold.value=-8,i.ratio.value=6,i.connect(e(y))),y.state==="suspended"&&y.resume&&y.resume(),y):null},a=y=>{let M=y.createBuffer(1,y.sampleRate*3,y.sampleRate),x=M.getChannelData(0);for(let S=0;S<x.length;S++)x[S]=Math.random()*2-1;return M},c=(y,M,x,S,C,R)=>{let P=y.createBufferSource();P.buffer=s;let D=y.createBiquadFilter();D.type="highpass",D.frequency.value=90;let k=y.createBiquadFilter();k.type="lowpass",k.frequency.setValueAtTime(C,M),k.frequency.exponentialRampToValueAtTime(1800,M+S*.6),k.frequency.exponentialRampToValueAtTime(R?650:1e3,M+S+(R||.9));let L=y.createBiquadFilter();L.type="bandpass",L.frequency.value=850,L.Q.value=.6;let V=y.createGain();V.gain.value=1.7;let q=y.createGain();q.gain.setValueAtTime(0,M),q.gain.linearRampToValueAtTime(x,M+.006),q.gain.linearRampToValueAtTime(x*.85,M+S),q.gain.exponentialRampToValueAtTime(x*.3,M+S+.08),R?q.gain.exponentialRampToValueAtTime(x*.003,M+S+R):(q.gain.exponentialRampToValueAtTime(x*.12,M+S+.45),q.gain.exponentialRampToValueAtTime(x*.01,M+S+.9)),D.connect(L).connect(V).connect(q);let X=y.createGain();X.gain.value=1;let ce=y.createBufferSource();ce.buffer=s;let J=y.createBiquadFilter();J.type="lowpass",J.frequency.value=30;let oe=y.createGain();oe.gain.setValueAtTime(2.2,M),R&&oe.gain.linearRampToValueAtTime(.3,M+S+R*.6),ce.connect(J).connect(oe).connect(X.gain),P.connect(D).connect(k).connect(q).connect(X).connect(i),P.start(M,Math.random()*.5),P.stop(M+S+1),ce.start(M,Math.random()),ce.stop(M+S+1)},l=(y,M,x,S,C,R,P,D)=>{let k=y.createBufferSource();k.buffer=s;let L=y.createBiquadFilter();L.type=S,L.frequency.value=x,L.Q.value=C;let V=y.createGain();V.gain.setValueAtTime(R,M),V.gain.exponentialRampToValueAtTime(5e-4,M+P),k.connect(L).connect(V).connect(D||i),k.start(M,Math.random()),k.stop(M+P+.02)},h=(y,M,x,S,C,R,P)=>{let D=y.createOscillator(),k=y.createGain();D.frequency.setValueAtTime(x,M),D.frequency.exponentialRampToValueAtTime(S,M+R*.8),k.gain.setValueAtTime(C,M),k.gain.exponentialRampToValueAtTime(.001,M+R),D.connect(k).connect(P||i),D.start(M),D.stop(M+R+.02)},d=(y,M,x,S,C)=>{let R=y.createOscillator(),P=y.createGain();R.frequency.value=x,P.gain.setValueAtTime(S,M),P.gain.exponentialRampToValueAtTime(5e-4,M+C),R.connect(P).connect(i),R.start(M),R.stop(M+C+.02)},u=(y,M)=>{let x=y.createWaveShaper(),S=1024,C=new Float32Array(S);for(let R=0;R<S;R++){let P=R*2/S-1;C[R]=Math.tanh(M*P)/Math.tanh(M)}return x.curve=C,x},f=(y,M)=>{if(r[M])return r[M];let x=M==="canyon",S=M==="dry",C=x?3.4:S?.9:1.6,R=Math.floor(y.sampleRate*C),P=y.createBuffer(2,R,y.sampleRate),D=x?[[.33,.55],[.81,.38],[1.27,.26],[1.93,.16],[2.6,.09]]:S?[]:[[.31,.3],[.72,.14]];for(let k=0;k<2;k++){let L=P.getChannelData(k);for(let V=0;V<R;V++){let q=V/y.sampleRate;L[V]=(Math.random()*2-1)*.05*Math.exp(-q/(x?.9:S?.22:.4))*Math.min(1,q/.05)}for(let[V,q]of D){let X=Math.floor((V+k*.013+Math.random()*.01)*y.sampleRate),ce=Math.floor(.07*y.sampleRate);for(let J=0;J<ce&&X+J<R;J++)L[X+J]+=(Math.random()*2-1)*q*Math.exp(-J/(ce*.3))}}return r[M]=P},m=(y,M,x,S)=>{let C=y.createConvolver();C.buffer=f(y,M);let R=y.createBiquadFilter();R.type="lowpass",R.frequency.value=x;let P=y.createGain();return P.gain.value=S,C.connect(R).connect(P).connect(i),C},v=(y,M,x,S="short")=>{let C=y.createGain();C.connect(i),C.connect(m(y,S,1600,.5)),l(y,M,2600,"bandpass",.8,.9*x,.1+.05*(x-1),C),l(y,M,5200,"highpass",.7,.55*x,.05,C),l(y,M,2800,"lowpass",.7,.35*x,.3,C)},p=(y,M,x)=>{let S=y.createGain();S.connect(i),S.connect(m(y,"dry",2200,.4)),l(y,M,1250,"bandpass",7,2.2*x,.22,S),l(y,M,2050,"bandpass",6,1.3*x,.15,S),l(y,M,3300,"bandpass",5,.7*x,.09,S)},g=(y,M,x)=>{for(let[S,C,R]of[[5200,.12,1],[8900,.07,.6],[12400,.05,.4]])d(y,M,S*(.98+Math.random()*.04),x*R,C);l(y,M,6e3,"highpass",.7,x*.8,.008)},_=(y,M,x)=>{l(y,M,650,"lowpass",.7,x,.035),l(y,M,2e3,"bandpass",2,x*.35,.01)},w={dirt(y,M){_(y,M,.22),_(y,M+.085,.09),l(y,M+.1,3e3,"bandpass",1,.025,.12)},rock(y,M){g(y,M,.06),g(y,M+.11,.03),g(y,M+.19,.012)},both(y,M){_(y,M,.18),g(y,M,.022),_(y,M+.09,.07),g(y,M+.09,.008)}},b={now(y,M){let x=y.createDelay(1);x.delayTime.value=.31;let S=y.createGain();S.gain.value=.32;let C=y.createBiquadFilter();C.type="lowpass",C.frequency.value=900;let R=y.createGain();R.gain.value=.5,x.connect(C).connect(S).connect(x),C.connect(R).connect(i);let P=y.createGain();P.connect(i),P.connect(x),l(y,M,2800,"lowpass",.7,1,.45,P),l(y,M,6e3,"highpass",.7,.5,.06,P),h(y,M,95,38,.9,.3,P)},powder(y,M,x="short"){let S=y.createGain(),C=u(y,2.5);S.connect(C).connect(i),C.connect(m(y,x,900,.9)),l(y,M,9e3,"highpass",.7,.7,.012,S),l(y,M,1800,"lowpass",.7,1,.25,S),l(y,M,350,"lowpass",.8,1,.7,S),h(y,M,80,30,1,.5,S)},canyon(y,M){let x=y.createGain();x.connect(i),x.connect(m(y,"canyon",1400,1.5)),l(y,M,6e3,"highpass",.7,.9,.02,x),l(y,M,3e3,"lowpass",.7,.9,.18,x),h(y,M,110,45,.7,.25,x)},powderCrack(y,M){b.powder(y,M,"dry"),v(y,M,1,"dry"),p(y,M,1)},powderTang(y,M){b.powder(y,M,"dry"),v(y,M,1,"dry"),p(y,M,1.8)},powderCrack2(y,M){b.powder(y,M),v(y,M,1.5)},ref(y,M){l(y,M,6e3,"bandpass",.9,2.6,.045),l(y,M,2500,"bandpass",.7,1,.08),l(y,M,600,"lowpass",.7,.7,.07),c(y,M,.45,.6,5e3),h(y,M,90,40,.22,.3)},powderRef(y,M){let x=y.createGain(),S=u(y,2.5);x.connect(S).connect(i),S.connect(m(y,"dry",900,.7)),l(y,M,1800,"lowpass",.7,.8,.25,x),l(y,M,350,"lowpass",.8,.4,.45,x),h(y,M,80,32,.35,.4,x),v(y,M,1.2,"dry"),p(y,M,1),c(y,M,.32,.45,5e3,.8)},ring(y,M){let x=y.createGain(),S=y.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(12e3,M),S.frequency.exponentialRampToValueAtTime(650,M+.12),x.connect(S).connect(i),S.connect(m(y,"short",600,.7)),l(y,M,9e3,"highpass",.7,.8,.012,x),l(y,M,2e3,"lowpass",.7,1,.3,x),h(y,M,85,32,1,.45,x);for(let[C,R]of[[5100,.05],[5163,.035]]){let P=y.createOscillator(),D=y.createGain();P.frequency.value=C,D.gain.setValueAtTime(0,M+.08),D.gain.linearRampToValueAtTime(R,M+.3),D.gain.exponentialRampToValueAtTime(5e-4,M+3.6),P.connect(D).connect(i),P.start(M+.08),P.stop(M+3.7)}}};return{click(y,M){let x=o();if(!x)return;let S=x.currentTime;l(x,S,M,"bandpass",6,y,.025),l(x,S+.004,M*.55,"bandpass",3,y*.5,.05)},bang(y=wf){let M=o();M&&b[y](M,M.currentTime)},slide(){let y=o();y&&l(y,y.currentTime,2500,"bandpass",2,.12,.12)},drop(y=Ef){let M=o();M&&w[y](M,M.currentTime)},insert(){let y=o();y&&l(y,y.currentTime,1200,"bandpass",3,.25,.05)},async render(y,M=2.5){let x=[t,i,s,r],S=new OfflineAudioContext(1,Math.floor(48e3*M),48e3);t=S,s=a(S),r={},i=S.createDynamicsCompressor(),i.threshold.value=-8,i.ratio.value=6,i.connect(S.destination),b[y](S,.05);let C=await S.startRendering();return[t,i,s,r]=x,Array.from(C.getChannelData(0))}}}var Ut=120,aa={uPC:{value:new le}},ca=[],Yl=(n,e)=>n+Math.round((e-n)/Ut)*Ut,cm=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function sm(n,e){let t=(l,h)=>{let d=Math.imul(l,374761393)+Math.imul(h,668265263)|0;return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967295},i=Math.floor(n),s=Math.floor(e),r=n-i,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return(t(i,s)*(1-a)+t(i+1,s)*a)*(1-c)+(t(i,s+1)*(1-a)+t(i+1,s+1)*a)*c}function kn(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,2246822507)+2654435769>>>0,e^=e>>>13,(e>>>0)/4294967296)}var lm=`
float pHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float pNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(pHash(i), pHash(i+vec3(1,0,0)), f.x), mix(pHash(i+vec3(0,1,0)), pHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(pHash(i+vec3(0,0,1)), pHash(i+vec3(1,0,1)), f.x), mix(pHash(i+vec3(0,1,1)), pHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,Kl=`#ifdef USE_FOG
  float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
  #endif`;async function Af(n){let e=await(await fetch(n)).json(),t=atob(e.data),i=new Uint8Array(t.length);for(let l=0;l<t.length;l++)i[l]=t.charCodeAt(l);let s=i.buffer,r=0,o=(l,h)=>{let d=new l(s,r,h);return r+=h*l.BYTES_PER_ELEMENT+3&-4,d},c={lods:e.lods.map(l=>{let h=o(Int16Array,l.vc*3),d=o(Int8Array,l.vc*3),u=o(Uint8Array,l.vc*4),f=o(Uint8Array,l.vc*4),m=o(Uint16Array,l.vc),v=l.big?o(Uint32Array,l.ic):o(Uint16Array,l.ic),p=new Float32Array(l.vc*3),g=new Float32Array(l.vc);for(let w=0;w<l.vc*3;w++)p[w]=h[w]*e.ps;for(let w=0;w<l.vc;w++)g[w]=m[w]/1e3;let _=new Mt;return _.setAttribute("position",new He(p,3)),_.setAttribute("normal",new He(new Int8Array(d),3,!0)),_.setAttribute("aA",new He(new Uint8Array(u),4,!0)),_.setAttribute("aB",new He(new Uint8Array(f),4,!0)),_.setAttribute("aS",new He(g,1)),_.setIndex(new He(l.big?new Uint32Array(v):new Uint16Array(v),1)),_.computeBoundingSphere(),_}),meta:e};if(e.areoles){let l=e.areoles,h=o(Int16Array,l*3),d=o(Int8Array,l*4),u=o(Int8Array,l*4);c.areoles={n:l,ap:h,an:d,at:u,aps:e.aps}}return c}var iS={uSpineHaze:{value:1}};function sS(){let n=new mn({color:16777215,roughness:.6,metalness:0});return n.onBeforeCompile=e=>{Object.assign(e.uniforms,iS),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB; attribute float aS;
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vS = aS; vObj = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj; uniform float uSpineHaze;
${lm}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",Kl)},n.customProgramCacheKey=()=>"saguaro-skin-v1",n}var hm={uPx:{value:.002}};function rS(){let n=new mn({color:16777215,roughness:.55,metalness:0,side:Kt});return n.onBeforeCompile=e=>{Object.assign(e.uniforms,hm),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aT; attribute vec3 iBase; attribute vec3 iDir; attribute float iW; attribute vec3 iN; attribute vec3 iCol;
uniform float uPx; varying vec3 vSp;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = iN;").replace("#include <begin_vertex>","vec3 transformed = iBase + iDir * aT.x; vSp = iCol * mix(1.0, 0.42, aT.x * aT.x);").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        { vec3 dv = normalize((modelViewMatrix * vec4(iDir, 0.0)).xyz);
          vec3 sv = cross(dv, normalize(mvPosition.xyz)); float sl = length(sv); sv = sl > 1e-4 ? sv / sl : vec3(1.0, 0.0, 0.0);
          float w = max(iW * (1.0 - 0.85 * aT.x), -mvPosition.z * uPx * 0.45); // never much thinner than a pixel
          mvPosition.xyz += sv * w * aT.y; }
        gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vSp;`).replace("#include <fog_fragment>",Kl)},n.customProgramCacheKey=()=>"spine-v1",n}function oS(n,e,t){let i=n.areoles,s=4,r=i.n*s,o=new Float32Array(r*3),a=new Float32Array(r*3),c=new Float32Array(r),l=new Float32Array(r*3),h=new Float32Array(r*3),d=kn(e),u=new T,f=new T,m=new T,v=new T,p=new T,g=new T,_=0,w=(y,M,x)=>{o.set([u.x+f.x*.002,u.y+f.y*.002,u.z+f.z*.002],_*3),a.set([g.x*y,g.y*y,g.z*y],_*3),c[_]=M,l.set([f.x,f.y,f.z],_*3),h.set(x,_*3),_++};for(let y=0;y<i.n;y++){u.set(i.ap[3*y],i.ap[3*y+1],i.ap[3*y+2]).multiplyScalar(i.aps),f.set(i.an[4*y],i.an[4*y+1],i.an[4*y+2]).normalize(),m.set(i.at[4*y],i.at[4*y+1],i.at[4*y+2]).normalize();let M=i.an[4*y+3]>60;v.copy(m).addScaledVector(f,-m.dot(f)).normalize(),p.crossVectors(f,v);let x=.75+.45*d(),S=Math.min(1,u.y/(t*.9)),C=M?[.3*x,.15*x,.075*x]:[(.36+.06*S)*x,(.335+.04*S)*x,(.29+.02*S)*x];g.copy(f).multiplyScalar(.92).addScaledVector(v,-.38).add({x:(d()-.5)*.25,y:(d()-.5)*.25,z:(d()-.5)*.25}).normalize(),w(M?.018+.012*d():.026+.02*d(),.0011,C);for(let R of[-2,2,Math.PI]){let P=R+(d()-.5)*.6;g.copy(f).multiplyScalar(.35).addScaledVector(v,Math.cos(P)*.94).addScaledVector(p,Math.sin(P)*.94).normalize(),w(.011+.011*d(),6e-4,[C[0]*.92,C[1]*.92,C[2]*.92])}}let b=new Xo;return b.setAttribute("position",new He(new Float32Array(12),3)),b.setAttribute("aT",new He(new Float32Array([0,-1,0,1,1,-1,1,1]),2)),b.setIndex([0,2,1,1,2,3]),b.setAttribute("iBase",new Zn(o,3)),b.setAttribute("iDir",new Zn(a,3)),b.setAttribute("iW",new Zn(c,1)),b.setAttribute("iN",new Zn(l,3)),b.setAttribute("iCol",new Zn(h,3)),b.instanceCount=r,b.boundingSphere=new Nn(new T(0,t/2,0),t/2+1.6),b}var Jl={uTime:{value:0},uGust:{value:0},uWind:{value:new le(.94,.33)}};function Ks(n,e=.85,t=null,i=!!t){let s=new mn({color:16777215,vertexColors:!0,roughness:e,metalness:0,map:t,alphaTest:t?.4:0,side:i?Kt:Ei});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,Jl),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSway; uniform float uTime, uGust; uniform vec2 uWind;`).replace("#include <project_vertex>",`vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        { float ph = aSway.y + dot(instanceMatrix[3].xz, vec2(0.13, 0.17));
          float wob = sin(uTime * 1.6 + ph) * 0.65 + sin(uTime * 2.9 + ph * 1.7) * 0.35;
          float sc = length(instanceMatrix[1].xyz);
          mvPosition.xz += uWind * (aSway.x * sc) * (0.05 + 0.32 * uGust + wob * (0.035 + 0.1 * uGust)); }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`),r.fragmentShader=r.fragmentShader.replace("#include <fog_fragment>",Kl),i&&(r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`))},s.customProgramCacheKey=()=>n,s}function rm(n){return new Os({depthPacking:Fl,map:n,alphaTest:.4})}function om(n,e=5){let i=kn(e),s=()=>{let w=document.createElement("canvas");return w.width=w.height=256,[w,w.getContext("2d")]},[r,o]=s(),[a,c]=s(),l=n==="creosote"?"#363c22":"#4a4d40";o.fillStyle=l,o.fillRect(0,0,256,256),c.fillStyle="#000",c.fillRect(0,0,256,256),c.fillStyle="#fff",c.fillRect(0,0,6,6);let h=w=>{w(o,!1),w(c,!0)},d=(w,b,y,M,x)=>{let S=[[w,b]],C=w,R=b,P=y;for(let D=0;D<M;D+=12)P+=(i()-.5)*.7,C+=Math.cos(P)*12,R+=Math.sin(P)*12,S.push([C,R]);return h((D,k)=>{D.strokeStyle=k?"#fff":n==="creosote"?"#2a2620":"#8c8270",D.lineWidth=x,D.beginPath(),D.moveTo(S[0][0],S[0][1]);for(let L of S)D.lineTo(L[0],L[1]);D.stroke()}),S},u=(w,b,y,M,x,S)=>h((C,R)=>{C.fillStyle=R?"#fff":S,C.beginPath(),C.ellipse(w,b,y,M,x,0,Math.PI*2),C.fill()}),f=(w,b,y,M,x)=>h((S,C)=>{S.fillStyle=C?"#fff":x,S.beginPath();for(let R=0;R<3;R++){let P=M+R*Math.PI*2/3;S.lineTo(w+Math.cos(P)*y*(R===0?1.3:.8),b+Math.sin(P)*y*(R===0?1.3:.8))}S.fill()}),m=(w,b,y)=>`rgb(${w|0},${b|0},${y|0})`;if(n==="creosote")for(let w=0;w<7;w++){let b=d(256*(.3+.4*i()),250.88,-Math.PI/2+(i()-.5)*1.3,150+i()*90,2.2);b.forEach(([y,M],x)=>{if(x<2)return;let S=x>b.length*.5?3:1;for(let C=0;C<S;C++){let R=i()*Math.PI*2,P=.8+.4*i(),D=.8+.4*i(),k=i()<.12?m(90*D,88*D,50*D):m(52*D,58*D,33*D);u(y+Math.cos(R)*6,M+Math.sin(R)*6,7*P,3.2*P,R,k),u(y+Math.cos(R+.7)*6,M+Math.sin(R+.7)*6,7*P,3.2*P,R+.7,k)}})}else{for(let w=0;w<9;w++)d(256*(.2+.6*i()),256*.98,-Math.PI/2+(i()-.5)*1.6,120+i()*100,1.6);for(let w=0;w<760;w++){let b=Math.sqrt(i())*.5,y=i()*Math.PI*2,M=256*(.5+Math.cos(y)*b),x=256*(.52+Math.sin(y)*b*.92),S=.8+.4*i(),C=i(),R=C<.55?m(66*S,74*S,56*S):C<.9?m(98*S,94*S,74*S):m(126*S,112*S,84*S);f(M,x,5+i()*3,i()*6.28,R)}}let v=o.getImageData(0,0,256,256).data,p=c.getImageData(0,0,256,256).data,g=new Uint8Array(256*256*4);for(let w=0;w<256*256;w++)g[4*w]=v[4*w],g[4*w+1]=v[4*w+1],g[4*w+2]=v[4*w+2],g[4*w+3]=p[4*w];let _=new zs(g,256,256,On);return _.colorSpace=Rn,_.generateMipmaps=!0,_.minFilter=ui,_.magFilter=pn,_.flipY=!1,_.needsUpdate=!0,_}var Ri=class{constructor(){this.p=[],this.n=[],this.c=[],this.w=[],this.u=[],this.i=[]}get count(){return this.p.length/3}vert(e,t,i,s,r,o,a,c,l,h=.004,d=.004){return this.p.push(e,t,i),this.n.push(s,r,o),this.c.push(a[0],a[1],a[2]),this.w.push(c,l),this.u.push(h,d),this.count-1}card(e,t,i,s,r,o,a,c){let l=s/2,h=this.count;for(let[d,u]of[[0,0],[1,0],[1,1],[0,1]]){let f=(d-.5)*2*l,m=(u-.5)*2*l;this.vert(e.x+t.x*f+i.x*m,e.y+t.y*f+i.y*m,e.z+t.z*f+i.z*m,r.x,r.y,r.z,o,a,c,.03+.94*d,.03+.94*(1-u))}this.i.push(h,h+1,h+2,h,h+2,h+3)}tube(e,t,i,s,r,o){let a=e.length,c=new T,l=new T,h=new T,d=this.count;for(let u=0;u<a;u++){u<a-1?c.subVectors(e[u+1],e[u]).normalize():c.subVectors(e[u],e[u-1]).normalize(),u===0&&(l.set(.3,.1,1),Math.abs(c.dot(l.normalize()))>.9&&l.set(1,0,0)),l.addScaledVector(c,-l.dot(c)).normalize(),h.crossVectors(c,l);let f=u/(a-1),m=s(f),v=r(f),p=t[u];for(let g=0;g<i;g++){let _=g/i*Math.PI*2,w=Math.cos(_),b=Math.sin(_),y=l.x*w+h.x*b,M=l.y*w+h.y*b,x=l.z*w+h.z*b;this.vert(e[u].x+y*p,e[u].y+M*p,e[u].z+x*p,y,M,x,m,v,o)}}for(let u=0;u<a-1;u++)for(let f=0;f<i;f++){let m=d+u*i+f,v=d+u*i+(f+1)%i,p=m+i,g=v+i;this.i.push(m,v,p,v,g,p)}}spike(e,t,i,s,r,o,a,c,l){let h=new T(0,1,0);Math.abs(h.dot(t))>.9&&h.set(1,0,0),h.addScaledVector(t,-h.dot(t)).normalize();let d=new T().crossVectors(t,h),u=this.count;for(let m=0;m<3;m++){let v=m/3*Math.PI*2,p=Math.cos(v),g=Math.sin(v);this.vert(e.x+(h.x*p+d.x*g)*s,e.y+(h.y*p+d.y*g)*s,e.z+(h.z*p+d.z*g)*s,r.x,r.y,r.z,o,c,l)}let f=this.vert(e.x+t.x*i,e.y+t.y*i,e.z+t.z*i,r.x,r.y,r.z,a,c,l);this.i.push(u,u+1,f,u+1,u+2,f,u+2,u,f)}leaf(e,t,i,s,r,o,a,c,l){let h=e.clone().addScaledVector(t,s),d=e.clone().addScaledVector(t,s*.45).addScaledVector(i,r*.5),u=e.clone().addScaledVector(t,s*.45).addScaledVector(i,-r*.5),f=this.vert(e.x,e.y,e.z,o.x,o.y,o.z,a,c,l),m=this.vert(d.x,d.y,d.z,o.x,o.y,o.z,a,c,l),v=this.vert(h.x,h.y,h.z,o.x,o.y,o.z,a,c,l),p=this.vert(u.x,u.y,u.z,o.x,o.y,o.z,a,c,l);this.i.push(f,m,v,f,v,p,f,v,m,f,p,v)}toGeometry(){let e=new Mt;return e.setAttribute("position",new lt(this.p,3)),e.setAttribute("normal",new lt(this.n,3)),e.setAttribute("color",new lt(this.c,3)),e.setAttribute("aSway",new lt(this.w,2)),e.setAttribute("uv",new lt(this.u,2)),e.setIndex(this.count>65535?new Us(this.i,1):new Fs(this.i,1)),e.computeBoundingSphere(),e}withCards(e){let t=this.count,i=this.i.length;this.p.push(...e.p),this.n.push(...e.n),this.c.push(...e.c),this.w.push(...e.w),this.u.push(...e.u);for(let r of e.i)this.i.push(r+t);let s=this.toGeometry();return s.addGroup(0,i,0),s.addGroup(i,e.i.length,1),s}},Ke=(n,e,t)=>new T(n,e,t),Js=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function aS(n){let e=kn(n),t=[],i=22+Math.floor(e()*22),s=.12+e()*.08,r=e()<.4;for(let o=0;o<i;o++){let a=Math.sqrt(e())*s*.85,c=e()*Math.PI*2,l=a/s,h=Ke(Math.cos(c)*a,.03,Math.sin(c)*a),d=.06+l*.42+e()*.12,u=c+(e()-.5)*.5,f=2.2+e()*2.6*(1-.35*l),m=[],v=e()<.06,p=Ke(Math.sin(d)*Math.cos(u),Math.cos(d),Math.sin(d)*Math.sin(u)),g=h.clone(),_=16,w=(.04+l*.12)*(e()<.5?1:.6),b=e()*6;for(let M=0;M<=_;M++){m.push(g.clone());let x=M/_,S=f/_;p.x+=Math.cos(u)*w*S*(.5+x)+Math.sin(b+x*7)*.012,p.z+=Math.sin(u)*w*S*(.5+x)+Math.cos(b+x*5)*.012,p.normalize(),g.addScaledVector(p,S)}let y=.016+e()*.008;t.push({pts:m,r0:y,L:f,dead:v,ph:e()*6.28,leafy:r&&!v&&e()<.8})}return{canes:t,rc:s,leafy:r}}function cS(n,e){let t=aS(n),i=kn(n*31+7),s=new Ri,r=[6,4,3][e],o=[1,2,4][e],a=[Ke(0,-.05,0),Ke(0,.05,0),Ke(0,.1,0)];s.tube(a,[t.rc*1.05,t.rc,t.rc*.6],[10,6,4][e],()=>[.1,.085,.065],()=>0,0);for(let c of t.canes){let l=c.pts.filter((p,g)=>g%o===0||g===c.pts.length-1),h=l.map((p,g)=>c.r0*Math.pow(1-.8*(g/(l.length-1)),.9)),d=c.dead?[.15,.14,.125]:[.085,.078,.063],u=c.dead?[.18,.17,.155]:[.09,.095,.07];if(s.tube(l,h,r,p=>Js(d,u,p),p=>Math.pow(p,1.6)*c.L*.22,c.ph),e>1)continue;let f=c.pts,m=c.L/(f.length-1),v=e===0?.045:.12;for(let p=.15,g=i()*6.28;p<c.L*.97;p+=v*(.8+.4*i()),g+=2.4){let _=Math.min(f.length-2,Math.floor(p/m)),w=p/m-_,b=f[_+1].clone().sub(f[_]).normalize(),y=f[_].clone().lerp(f[_+1],w),M=Ke(0,1,0);Math.abs(M.dot(b))>.9&&M.set(1,0,0),M.addScaledVector(b,-M.dot(b)).normalize();let x=Ke(0,0,0).crossVectors(b,M),S=M.clone().multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g)),C=c.r0*Math.pow(1-.8*(p/c.L),.9),R=p/c.L,P=Math.pow(R,1.6)*c.L*.22,D=y.clone().addScaledVector(S,C*.8);if(e===0){let k=S.clone().multiplyScalar(.75).addScaledVector(b,.55).normalize();s.spike(D,k,.012+i()*.01,.0022,S,c.dead?[.2,.19,.17]:[.2,.18,.15],[.06,.055,.05],P,c.ph)}if(c.leafy&&R>.45&&i()<.7){let k=e===0?2+Math.floor(i()*3):1;for(let L=0;L<k;L++){let V=S.clone().multiplyScalar(.8).addScaledVector(b,.4+i()*.4).add(Ke(i()-.5,i()-.5,i()-.5).multiplyScalar(.7)).normalize(),q=Ke(0,0,0).crossVectors(V,S).normalize(),X=i(),ce=X<.25?[.1,.13,.035]:X<.75?[.26,.21,.05]:[.2,.12,.05];s.leaf(D,V,q,(e===0?.022:.04)+i()*.01,e===0?.011:.022,S,ce,P,c.ph)}}}}return s.toGeometry()}function lS(n){let e=kn(n),t=[],i=1+e()*1.1,s=9+Math.floor(e()*8),r=.1+e()*.1,o=(a,c,l,h,d,u)=>{let f=[a.clone()],m=c.clone(),v=a.clone(),p=0;for(;p<l;){let g=.08+e()*.07;if(m.x+=(e()-.5)*.4,m.z+=(e()-.5)*.4,m.y+=(e()-.5)*.2+.06,m.normalize(),v.addScaledVector(m,g),p+=g,f.push(v.clone()),d<2&&p>l*.25&&p<l*.85&&e()<.32){let _=Ke(e()-.5,.25+e()*.3,e()-.5).normalize().lerp(m,.45).normalize();o(v.clone(),_,(l-p)*(.5+e()*.4),h*.55,d+1,u+e())}}t.push({pts:f,r0:h,len:l,depth:d,ph:u})};for(let a=0;a<s;a++){let c=a/s*Math.PI*2+e()*.5,l=Math.sqrt(e())*r,h=.14+e()*.36,d=Ke(Math.cos(c)*l,0,Math.sin(c)*l),u=Ke(Math.sin(h)*Math.cos(c),Math.cos(h),Math.sin(h)*Math.sin(c));o(d,u,i*(.75+e()*.45)/Math.cos(h*.6),.011+e()*.004,0,e()*6.28)}return{branches:t,H:i}}function hS(n,e){let t=lS(n),i=kn(n*17+3),s=new Ri,r=new Ri,o=Ke(0,t.H*.45,0),a=[.13,.24,.42][e],c=[.045,.11,.24][e];for(let l of t.branches){if(e===2&&l.depth>1)continue;let h=e===0?1:2,d=l.pts.filter((v,p)=>p%h===0||p===l.pts.length-1);if(d.length<2)continue;let u=d.map((v,p)=>Math.max(.0022,l.r0*(1-.75*(p/(d.length-1)))));s.tube(d,u,e===0?4:3,v=>Js([.05,.044,.037],[.085,.076,.064],v),v=>Math.pow(v,1.5)*.35,l.ph);let f=l.pts,m=c;for(let v=1;v<f.length;v++){let p=v/(f.length-1);if(m+=f[v].distanceTo(f[v-1]),p<.35||m<c)continue;m=0;let g=f[v].clone().add(Ke(i()-.5,i()-.3,i()-.5).multiplyScalar(a*.3)),_=g.clone().sub(o).normalize();_.y+=.9,_.normalize();let w=Ke(i()-.5,i()-.5,i()-.5).normalize().lerp(_,.4).normalize(),b=Ke(0,1,0).cross(w);b.lengthSq()<.001&&b.set(1,0,0),b.normalize();let y=Ke(0,0,0).crossVectors(w,b).normalize(),M=.85+i()*.3;r.card(g,b,y,a*(.8+i()*.45),_,[M,M,M*(.9+i()*.2)],Math.pow(p,1.5)*.35,l.ph)}}return s.withCards(r)}function uS(n,e){let t=kn(n),i=new Ri,s=new Ri,r=.35+t()*.4,o=r*(1.3+t()*.5),a=Ke(0,r*.2,0),c=[14,7,0][e],l=[90,28,12][e],h=[.15,.27,.42][e];for(let d=0;d<c;d++){let u=t()*Math.PI*2,f=.35+t()*.9,m=t()*6.28,v=Ke(Math.cos(u)*Math.cos(f)*o/r*.5,Math.sin(f),Math.sin(u)*Math.cos(f)*o/r*.5).normalize(),p=[Ke(Math.cos(u)*.03,0,Math.sin(u)*.03)],g=p[0].clone();for(let _=0;_<4;_++)g.addScaledVector(v,.85*r/4),g.x+=(t()-.5)*.03,g.z+=(t()-.5)*.03,p.push(g.clone());i.tube(p,p.map((_,w)=>.006*(1-.6*w/4)),3,()=>[.12,.11,.09],_=>_*_*.12,m)}for(let d=0;d<l;d++){let u=t()*Math.PI*2,f=Math.asin(Math.pow(t(),.7)),m=.75+.25*t(),v=Ke(Math.cos(u)*Math.cos(f)*o*.5*m,Math.sin(f)*r*m,Math.sin(u)*Math.cos(f)*o*.5*m),p=v.clone().sub(a).normalize(),g=Ke(t()-.5,t()-.5,t()-.5).normalize().lerp(p,.78).normalize(),_=Ke(0,1,0).cross(g);_.lengthSq()<.001&&_.set(1,0,0),_.normalize();let w=Ke(0,0,0).crossVectors(g,_).normalize(),b=.85+t()*.3;p.y+=.9,p.normalize(),s.card(v,_,w,h*(.8+t()*.4),p,[b,b,b],Math.pow(Math.max(0,v.y/r),2)*.12,t()*6.28)}return i.withCards(s)}function fS(n,e){let t=kn(n),i=new Ri,s=n%3,r=[34,14,7][e],o=[4,3,2][e],a=[6,3,1][e],c=[.34,.3,.42][s]*(.75+t()*.5),l=[[.44,.38,.29],[.39,.37,.32],[.48,.41,.26]][s],h=[[.36,.28,.21],[.3,.28,.22],[.4,.33,.2]][s],d=(u,f,m,v,p)=>{let g=i.count;for(let _=0;_<u.length;_++){let w=(_<u.length-1?u[_+1].clone().sub(u[_]):u[_].clone().sub(u[_-1])).normalize(),b=Ke(-w.z,0,w.x);b.lengthSq()<1e-4&&b.set(1,0,0),b.normalize();let y=Ke(0,1,0).addScaledVector(w,-.3).normalize(),M=f[_];i.vert(u[_].x-b.x*M,u[_].y,u[_].z-b.z*M,y.x,y.y,y.z,m[_],v[_],p),i.vert(u[_].x+b.x*M,u[_].y,u[_].z+b.z*M,y.x,y.y,y.z,m[_],v[_],p)}for(let _=0;_<u.length-1;_++){let w=g+2*_;i.i.push(w,w+1,w+3,w,w+3,w+2)}};for(let u=0;u<r;u++){let f=t()*Math.PI*2,m=t()*.035,v=.12+t()*.75,p=c*(.45+t()*.6),g=t()*6.28,_=.75+t()*.4,w=t()<.25,b=Ke(Math.cos(f)*m,0,Math.sin(f)*m),y=Ke(Math.sin(v)*Math.cos(f),Math.cos(v),Math.sin(v)*Math.sin(f)),M=[b.clone()],x=[.005],S=[[.09,.075,.055]],C=[0];for(let R=1;R<=o;R++){let P=R/o;y.x+=Math.cos(f)*.22*P,y.z+=Math.sin(f)*.22*P,y.y-=.18*P*(v+.3),y.normalize(),b=b.clone().addScaledVector(y,p/o),M.push(b),x.push(.005*(1-.8*P)),C.push(P*P*p*.6);let D=Js(h,l,P).map(k=>k*_);S.push(w?Js(D,[.33,.31,.28],.6):D)}d(M,x,S,C,g)}for(let u=0;u<a;u++){let f=t()*Math.PI*2,m=.05+t()*.35,v=c*(1.15+t()*.6),p=t()*6.28,g=Ke(Math.sin(m)*Math.cos(f),Math.cos(m),Math.sin(m)*Math.sin(f)),_=[],w=[],b=[],y=[];for(let x=0;x<=4;x++){let S=x/4;_.push(g.clone().multiplyScalar(v*S).add(Ke(Math.cos(f)*.08*S*S,0,Math.sin(f)*.08*S*S))),w.push(.0012),b.push(Js(h,l,S)),y.push(S*S*v*.8)}d(_,w,b,y,p);let M=_[4];for(let x=0;x<(s===2?4:7);x++){let S=t()*Math.PI*2,C=Ke(Math.cos(S),s===2?-.2:.4+t()*.6,Math.sin(S)).normalize(),R=M.clone().addScaledVector(g,-t()*.06),P=s===2?.012:.03+t()*.03;d([R,R.clone().addScaledVector(C,P)],[s===2?.003:8e-4,3e-4],[l,s===0?[.42,.3,.3]:l],[v*.8,v*.85],p)}}return i.toGeometry()}function um(n){let e=Ks("grass-v1",.9,null,!0),t=(i,s,r)=>r()<Math.min(1,Math.max(.05,(sm(i*.09+3.1,s*.09-7.7)-.25)*2.2+.25*sm(i*.5,s*.5)));return new $i({kinds:[1,2,3,4,5,6].map(i=>({lods:[0,1,2].map(s=>fS(i,s)),count:1200,r:.15,H:.5,scale:[.7,1.3]})),material:e,lodDist:[8,20],maxDist:40,clear:n,seed:59,minGap:.05,claim:!1,accept:t,lazy:!0})}function fm(n){let e=kn(n),t=new Ri,i=.3,s=Ke(0,0,0),r=(a,c,l,h,d)=>{let u=[a.clone()],f=c.clone(),m=a.clone(),v=0;for(;v<l;){let g=.025+e()*.02;f.x+=(e()-.5)*.5,f.y+=(e()-.5)*.5,f.z+=(e()-.5)*.5,f.normalize();let _=m.clone().addScaledVector(f,g),w=_.clone().sub(s);w.length()>i*(.85+.2*e())&&(w.normalize(),f.addScaledVector(w,-1.3*f.dot(w)).normalize()),m.addScaledVector(f,g),v+=g,u.push(m.clone()),d<3&&e()<.2&&r(m.clone(),Ke(e()-.5,e()-.5,e()-.5).normalize().lerp(f,.3).normalize(),(l-v)*(.6+e()*.5)+.05,h*.7,d+1)}let p=.85+e()*.3;t.tube(u,u.map((g,_)=>Math.max(7e-4,h*(1-.7*_/u.length))),3,g=>Js([.27,.22,.15],[.36,.3,.2],g).map(_=>_*p),()=>0,0)},o=Ke(0,-i*.92,0);t.tube([o.clone().add(Ke(0,-.03,0)),o],[.006,.006],4,()=>[.2,.16,.11],()=>0,0);for(let a=0;a<9;a++){let c=a/9*Math.PI*2+e()*.4;r(o,Ke(Math.cos(c)*.8,.6,Math.sin(c)*.8).normalize(),.7+e()*.5,.004,0)}return t.toGeometry()}var am=[],$i=class{constructor({kinds:e,material:t,lodDist:i,clear:s,seed:r,minGap:o=.5,shadowLods:a=1,nearR:c=0,depthMat:l=null,maxDist:h=1e9,claim:d=!0,cull:u=!0,accept:f=null,lazy:m=!1}){this.lazy=m,this._last=[1e9,1e9,1e9],this.group=new Dt,this.depthMat=l,this.maxDist=h,this.cull=u,this.kinds=e,this.lodDist=i,this.nearR=c,this.shadowLods=a;let v=kn(r);this.items=[],e.forEach((p,g)=>{for(let _=0;_<p.count;_++){let w,b,y=0,M;do w=(v()-.5)*Ut,b=(v()-.5)*Ut,y++,M=!s(w,b)&&(!f||f(w,b,v))&&!am.some(R=>(d||R.solid)&&Math.hypot(Yl(R.x,w)-w,Yl(R.z,b)-b)<R.r+p.r+o);while(!M&&y<400);let x=p.scale[0]+v()*(p.scale[1]-p.scale[0]),S=.9+v()*.2,C={v:g,x:w,z:b,rot:v()*Math.PI*2,s:x,tint:new ge(S,S*(.97+v()*.06),S*(.95+v()*.1)),H:p.H*x,r:p.r*x};this.items.push(C),d&&am.push(C)}}),this.meshes=e.map((p,g)=>p.lods.map((_,w)=>{let b=new Do(_,t,p.count);b.frustumCulled=!1,b.count=0;for(let y=0;y<p.count;y++)b.setColorAt(y,new ge(1,1,1));return this.group.add(b),b})),this._M=new ct,this._Q=new vt,this._S=new T,this._P=new T,this._Y=new T(0,1,0),this._sph=new Nn,this._fr=new bi,this._pv=new ct}setShadows(e){this.meshes.forEach(t=>t.forEach((i,s)=>{i.castShadow=e&&s<this.shadowLods,i.receiveShadow=e&&!this.depthMat,this.depthMat&&(i.customDepthMaterial=this.depthMat)}))}update(e,t,i){if(this.lazy){let o=i.matrixWorld.elements,a=Math.atan2(o[8],o[10]),c=this._last;if(Math.hypot(e-c[0],t-c[1])<.3&&Math.abs(Math.atan2(Math.sin(a-c[2]),Math.cos(a-c[2])))<.06)return[];c[0]=e,c[1]=t,c[2]=a}for(let o of this.meshes)for(let a of o)a.count=0;this._pv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._pv);let s=[],r=this.lodDist;for(let o of this.items){let a=Yl(o.x,e),c=Yl(o.z,t),l=a-e,h=c-t,d=Math.hypot(l,h),u=1-cm(Ut*.36,Ut*.48,Math.max(Math.abs(l),Math.abs(h)));if(u<.002||d>this.maxDist||this.cull&&d>20&&(this._sph.center.set(a,o.H*.5,c),this._sph.radius=o.H*.5+o.r+1,!this._fr.intersectsSphere(this._sph)))continue;let f=0;for(;f<r.length&&d>=r[f];)f++;let m=this.meshes[o.v];f=Math.min(f,m.length-1);let v=m[f];this._M.compose(this._P.set(a,0,c),this._Q.setFromAxisAngle(this._Y,o.rot),this._S.setScalar(o.s*u)),v.setMatrixAt(v.count,this._M),v.setColorAt(v.count,o.tint),v.count++,d<this.nearR&&s.push({it:o,d,M:this._M.clone()})}for(let o of this.meshes)for(let a of o)a.visible=a.count>0,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);return s}},$l=["classic","old","spear","onearm","droop"],dS=[12,5,15,10,6],Zl=class extends $i{constructor(e,t,i=7){let s=sS();super({kinds:e.map((r,o)=>({lods:r.lods,count:dS[o],r:r.meta.R0+.6,H:r.meta.H,scale:[.86,1.14]})),material:s,lodDist:[13,36],clear:t,seed:i,minGap:3.5,shadowLods:2,nearR:8});for(let r of this.items)r.solid=!0,ca.push({x:r.x,z:r.z,r:e[r.v].meta.R0*1.08*r.s+.05});this.spineMat=rS(),this.spineGeos=e.map((r,o)=>r.areoles?oS(r,101+o*7,r.meta.H):null),this.spines=[0,1].map(()=>{let r=new st(this.spineGeos[0],this.spineMat);return r.matrixAutoUpdate=!1,r.visible=!1,this.group.add(r),r})}update(e,t,i){let s=super.update(e,t,i).filter(r=>this.spineGeos[r.it.v]).sort((r,o)=>r.d-o.d);this.spines.forEach((r,o)=>{let a=s[o];r.visible=!!a,a&&(r.geometry=this.spineGeos[a.it.v],r.matrix.copy(a.M),r.matrixWorldNeedsUpdate=!0)})}setPixel(e,t){hm.uPx.value=2*Math.tan(Ki.degToRad(e.fov)/2)/Math.max(1,t)}};function dm(n){let e=Ks("plant-v1",.8),t=om("creosote",5),i=om("bursage",9),s=Ks("leaf-creosote-v1",.6,t),r=Ks("leaf-bursage-v1",.9,i),o=new $i({kinds:[11,23,37].map(l=>({lods:[0,1,2].map(h=>cS(l,h)),count:6,r:.9,H:4.5,scale:[.8,1.15]})),material:e,lodDist:[14,40],clear:n,seed:41,minGap:1.5}),a=new $i({kinds:[5,9,14].map(l=>({lods:[0,1,2].map(h=>hS(l,h)),count:45,r:.8,H:1.8,scale:[.75,1.2]})),material:[e,s],lodDist:[12,35],clear:n,seed:43,minGap:1.2,depthMat:rm(t)}),c=new $i({kinds:[3,8,13].map(l=>({lods:[0,1,2].map(h=>uS(l,h)),count:70,r:.4,H:.6,scale:[.7,1.3]})),material:[e,r],lodDist:[10,28],clear:n,seed:47,minGap:.3,depthMat:rm(i)});return[o,a,c]}function pS(n,e){let t=kn(n),i=new Ri,s=4.2+t()*2.6,r=[24,16,10][e],o=[5,4,3][e],a=[24,10,5][e],c=(u,f)=>{let m=.8+.4*(f*.37%1);return Js([.27*m,.25*m,.215*m],[.33*m,.315*m,.28*m],u)},l=(u,f,m,v,p,g,_)=>{let w=kn(_);for(let b=0;b<g;b++){let y=b/g*Math.PI*2+w()*.2,M=Math.cos(y)*p*(1.5+w()*.7),x=(Math.sin(y)*.3+.45)*p,S=w()*v*.15,C=v*(.75+w()*.25),R=w()<.35?2:1;for(let P=0;P<R;P++){let D=R===1||P===0?S:S+(C-S)*(.5+w()*.1),k=R===1?C:P===0?S+(C-S)*(.45+w()*.05):C,L=(w()-.5)*.12,V=[];for(let X=0;X<=a;X++){let ce=X/a,J=D+(k-D)*ce,oe=Math.sin(ce*Math.PI)*(w()-.5)*.04,he=.3+.7*cm(0,.7,J),Le=(M+L*(J-D)+oe)*he;V.push(u.clone().addScaledVector(f,J).addScaledVector(m,Le).add(Ke(0,Math.max(.016,(x+oe*.5)*he+.03*(1-he)),0)))}let q=.013+w()*.008;i.tube(V,V.map(()=>q),o,X=>c(X,b),()=>0,0)}}},h=Ke(1,0,0),d=Ke(0,0,1);if(l(Ke(.15,0,0),h,d,s,.13,r,n*3+1),t()<.8){let u=1.6+t()*1.4,f=(t()<.5?1:-1)*(.5+t()*.5),m=Ke(Math.cos(f),0,Math.sin(f)),v=Ke(-m.z,0,m.x);l(Ke(u,0,Math.sign(f)*.35),m,v,1.2+t()*1.2,.08,Math.max(5,Math.round(r*.55)),n*5+2)}for(let u=0;u<(e===2?3:7);u++){let f=u/7*Math.PI*2+t()*.5,m=.25+t()*.35,v=Ke(.12,.05,0),p=Ke(.05-Math.abs(Math.cos(f))*m*.6,.02+Math.max(0,Math.sin(f))*.08,Math.sin(f)*m*.8);i.tube([v,v.clone().lerp(p,.5).add(Ke(0,.02,0)),p],[.035,.025,.01],[5,4,3][e],()=>[.2,.18,.155],()=>0,0)}if(e<2)for(let u=0;u<2;u++){let f=Ke(.6+t()*(s-1.2),.05,(t()-.5)*.7),m=Ke(t()-.5,.15,t()-.5).normalize(),v=[],p=7;for(let y=0;y<=p;y++){let M=y/p;v.push([.035+.035*Math.sin(M*Math.PI*.85),M*.13])}let g=e===0?9:5,_=Ke(0,1,0).cross(m);_.lengthSq()<.001&&_.set(1,0,0),_.normalize();let w=Ke(0,0,0).crossVectors(m,_),b=i.count;for(let[y,M]of v)for(let x=0;x<g;x++){let S=x/g*Math.PI*2,C=_.x*Math.cos(S)+w.x*Math.sin(S),R=_.y*Math.cos(S)+w.y*Math.sin(S),P=_.z*Math.cos(S)+w.z*Math.sin(S);i.vert(f.x+m.x*M+C*y,f.y+m.y*M+R*y,f.z+m.z*M+P*y,C,R,P,[.13,.085,.05],0,0)}for(let y=0;y<p;y++)for(let M=0;M<g;M++){let x=b+y*g+M,S=b+y*g+(M+1)%g,C=x+g,R=S+g;i.i.push(x,S,C,S,R,C,x,C,S,S,C,R)}}return i.toGeometry()}function mS(){let n=new mn({color:16777215,roughness:.78,metalness:0});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB;
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vBo = position;`).replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
        vWy = (instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vWy = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;
${lm}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",Kl)},n.customProgramCacheKey=()=>"bone-v1",n}function gS(n,e,t){let i=kn(t),s=14,r=6,o=[],a=[],c=[];for(let f=0;f<=s;f++){let m=f/s,v=(m-.5)*e,p=n/e,g=Math.sin(v)*p,_=(Math.cos(v)-Math.cos(e/2))*p,w=Math.cos(v),b=-Math.sin(v),y=.011*(1-.35*m)+.004*(m<.08?1-m/.08:0),M=.005;for(let x=0;x<r;x++){let S=x/r*Math.PI*2,C=Math.cos(S)*y,R=Math.sin(S)*M,P=-b,D=w;o.push(g+P*C,R+M,_+D*C);let k=Math.hypot(Math.cos(S)/y,Math.sin(S)/M);a.push(P*Math.cos(S)/y/k,Math.sin(S)/M/k,D*Math.cos(S)/y/k)}}for(let f=0;f<s;f++)for(let m=0;m<r;m++){let v=f*r+m,p=f*r+(m+1)%r,g=v+r,_=p+r;c.push(v,g,p,p,g,_)}let l=o.length/3,h=new Uint8Array(l*4),d=new Uint8Array(l*4);for(let f=0;f<l;f++)h[4*f+3]=230,d[4*f+2]=Math.floor(i()*255);let u=new Mt;return u.setAttribute("position",new lt(o,3)),u.setAttribute("normal",new lt(a,3)),u.setAttribute("aA",new He(h,4,!0)),u.setAttribute("aB",new He(d,4,!0)),u.setAttribute("aS",new He(new Float32Array(l),1)),u.setIndex(c),u}var xS=[[["skull",0,.07,0,.5,.05,.12],["jaw",.36,.012,.22,.9,0,1.5708],["jaw",-.7,.012,-.45,-2.3,0,-1.5708],["vert-t",.25,.02,-.55,.3,0,1.4],["vert-t",.33,.02,-.72,.4,0,-1.3],["vert-t",.38,0,-.92,.2,0,.1],["vert-t",.52,.02,-1.1,.5,0,1.5],["vert-l",.6,0,-1.32,.35,0,.2],["vert-l",.7,.01,-1.5,.6,0,-.1],["vert-l",1.2,0,-1.2,2.1,0,.05],["pelvis",.9,.035,-2,.4,.08,.25],["femur",1.6,.012,-1.7,1.1,0,0],["femur",-.2,.01,-2.5,-.5,0,3.1],["scapula",-.55,0,-.95,.7,0,0],...[0,1,2,3,4,5,6,7].map(n=>["rib",.5+n*.1,0,-.6-n*.12,-1.3-n*.05+n%2*.15,0,0]),["rib",-1.1,0,.6,2.4,0,0],["rib",1.9,0,-.4,.3,0,0]],[["skull",0,.09,0,-1.9,0,1.45],["jaw",.55,.012,.4,2.6,0,1.5708],["vert-t",-.8,.02,.5,1.2,0,1.5],["vert-l",-1.15,0,.2,.4,0,.1],["vert-t",1.3,.02,-.7,2,0,-1.4],["pelvis",-1.6,.03,-.9,2.2,-.1,-.2],["femur",.4,.012,-1.3,.2,0,0],["scapula",1.5,0,.5,-.4,0,3.14159],...[0,1,2,3,4].map(n=>["rib",-.4+n*.45,0,-.5-n%2*.4,n*1.3,0,0])]],Rf=["skull","jaw","vert-t","vert-l","femur","pelvis","scapula"];function vS(n,e,t){let i=[],s=new ct,r=new tn,o=new vt,a=new T(1,1,1),c=new T;e.forEach(([h,d,u,f,m,v,p],g)=>{let _;h==="rib"?_=gS(.36+g*.37%1*.16,1.4,g+3):_=n[Rf.indexOf(h)].lods[t].clone(),r.set(v,m,p,"YXZ"),o.setFromEuler(r),s.compose(c.set(d,u,f),o,a),_.applyMatrix4(s);let w=_.attributes.normal;if(!(w.array instanceof Float32Array)){let b=new Float32Array(w.count*3);for(let y=0;y<w.count;y++)b[3*y]=w.getX(y),b[3*y+1]=w.getY(y),b[3*y+2]=w.getZ(y);_.setAttribute("normal",new He(b,3))}i.push(_)});let l=K0(i.map(h=>{for(let d of["aA","aB"])h.attributes[d].normalized||(h.attributes[d].normalized=!0);return h}));return l.computeBoundingSphere(),l}function pm(n,e){let t=Ks("deadwood-v1",.92),i=new $i({kinds:[21,34].map(r=>({lods:[0,1,2].map(o=>pS(r,o)),count:3,r:2.6,H:.4,scale:[.85,1.1]})),material:t,lodDist:[16,40],clear:e,seed:61,minGap:1}),s=new $i({kinds:xS.map((r,o)=>({lods:[0,1,2].map(a=>vS(n,r,a)),count:o===0?2:1,r:2.2,H:.3,scale:[1,1]})),material:mS(),lodDist:[12,30],clear:e,seed:67,minGap:1});return[i,s]}var H={told:30,standZ:1,stations:[{x:0,rows:[5,3,2]},{x:5,rows:[5,3,2]},{x:10,rows:[5,3,2]}],front:{z:-3.6,gap:[.85,1.1],span:4.2,jitterZ:.7,turn:.45},rowBack:[2.6,4,5.4],rowGap:1.35,rowJitter:[.35,.3],hill:{start:1.4,top:2.4,width:140,depth:30,edge:18},herdGap:{head:1.45,room:.06},lean:.5,coat:[.06,.16],backDark:.8,scale:[.95,1.05],look:{pitch:-.03},walk:{speed:1.4,turn:.6},move:{near:1,back:1,speed:1.4,ease:8,home:1.4,look:.0052,body:.7},stick:{area:[.36,.62],R:56,dbl:.35},lod:{full:7,lite:14,slack:.5},arrive:.5,hint:{idle:12,misses:3},matches:1,swipe:{far:.08,ratio:1.2,reach:.07,cock:.75,still:10},monster:{count:[1,2],clues:[1,2,4,7],high:.3,wide:.25,eye:.12,third:.07,glint:.07,anyRow:!1},volume:.5,hp:3,fight:{shots:2,twistSound:{files:["../sounds/twist-1.mp3","../sounds/twist-2.mp3"],gain:3},shotRoar:.5,morph:2.5,walk:3,stride:.7,accel:.6,gait:{legs:.6,surge:.25,weave:.6,rush:1.3,stumble:[2.5,4.5],stumbleTime:.18,whip:.35,gape:.35,lean:.28},stagger:.5,crawl:1.4,shadowLight:.3,shadow:{push:.3,stagger:.3,vanish:1.2},push:1,reach:1.3,die:1,leap:{forms:["m3","m4"],h:.4,tilt:.5,travel:.35,crouch:.15,from:3,tallFrom:1.8,commit:.85,dodge:.5,land:.22,stuck:1,slam:.45,sink:.12,slide:.4},twist:1.1,hang:.2,face:.4,scatter:[2,3.5],scatterSpeed:1.6,back:2.5,comeBack:{speed:.6,turn:1,delay:[0,2.5]},wake:2.5},gun:{area:[.62,.5],hold:.8,point:.9,recoil:{flip:.75,back:.08,up:.03,time:.17,view:.05,viewTime:.2,yaw:.015,buzz:45},loud:5,file:"../sounds/gunshot.mp3",fileLoud:2.4},scare:{forms:{1:["m3","m4"],2:["m3","m4"],4:["m3"],7:["m4"]},wait:[2,6],lastWait:[.8,1.6],hush:1,travel:.25,d:.32,light:7,recoil:{pitch:.14,back:.16,time:.35},shake:1.7,sting:"boom",buzz:[600,70,450,60,320,50,220],fake:{chance:.35,quiet:[1.2,2.5]}},hurt:{bpm:[0,112,80],heart:[0,.5,.3],edge:[0,.75,.4],shake:[1,3,2]},music:{drones:["../sounds/bgm-drone-a2.mp3","../sounds/bgm-drone-a3.mp3"],drone:.3,overlap:2.5},flinch:{radius:3,back:[.3,.6],speed:.9,mooNear:4,mooLoud:1.4,mooRate:[1,1.15],wait:[2.5,5],returnSpeed:.35},moo:{file:"../sounds/moo.mp3",every:[7,18],rate:[.9,1.1],gain:.8},letterbox:.09,saySecs:1.6,endWait:3.5,tips:["\uCF5C\uD2B8 \uD53C\uC2A4\uBA54\uC774\uCEE4\uC5D0\uB294 \uC548\uC804\uC7A5\uCE58\uAC00 \uC5C6\uC5C8\uC5B4\uC694. \uACF5\uC774 \uC544\uB798 \uCE78\uC5D0 \uD0C4\uC774 \uC788\uC73C\uBA74 \uB5A8\uC5B4\uB728\uB9AC\uAC70\uB098 \uBD80\uB52A\uD614\uC744 \uB54C \uCD1D\uC774 \uB098\uAC08 \uC218 \uC788\uC5B4\uC11C, \uCE74\uC6B0\uBCF4\uC774\uB4E4\uC740 \uD55C \uCE78\uC744 \uBE44\uC6CC \uB450\uACE0 \uB2E4\uC12F \uBC1C\uB9CC \uB123\uACE0 \uB2E4\uB154\uC5B4\uC694.","\uC2F1\uAE00 \uC561\uC158 \uB9AC\uBCFC\uBC84\uB294 \uC3E0 \uB54C\uB9C8\uB2E4 \uACF5\uC774\uCE58\uAE30\uB97C \uC190\uC73C\uB85C \uC816\uD600\uC57C \uD588\uC5B4\uC694.","\uD53C\uC2A4\uBA54\uC774\uCEE4\uB294 \uC7A5\uC804 \uBB38\uC73C\uB85C \uD55C \uBC1C\uC529 \uB123\uACE0 \uD55C \uBC1C\uC529 \uBE7C\uC57C \uD574\uC11C, \uB2E4\uC2DC \uB2E4 \uCC44\uC6B0\uB294 \uB370 \uC2DC\uAC04\uC774 \uAF64 \uAC78\uB838\uC5B4\uC694.","\uD751\uC0C9\uD654\uC57D\uC740 \uC3D8\uBA74 \uC9D9\uC740 \uD770 \uC5F0\uAE30\uAC00 \uB098\uC11C, \uBA87 \uBC1C \uC3D8\uACE0 \uB098\uBA74 \uC55E\uC774 \uC798 \uC548 \uBCF4\uC600\uC5B4\uC694.","\uC18C \uB5BC\uB294 \uC0B4\uC774 \uBE60\uC9C0\uC9C0 \uC54A\uAC8C \uD558\uB8E8\uC5D0 25km\uCBE4\uB9CC \uCC9C\uCC9C\uD788 \uBAB0\uC558\uC5B4\uC694.","\uBC24\uC5D0\uB294 \uCE74\uC6B0\uBCF4\uC774\uB4E4\uC774 \uB3CC\uC544\uAC00\uBA70 \uC18C \uB5BC \uB458\uB808\uB97C \uB3CC\uBA70 \uC9C0\uCF30\uACE0, \uC18C\uB97C \uC9C4\uC815\uC2DC\uD0A4\uB824\uACE0 \uB178\uB798\uB97C \uBD88\uB7EC \uC8FC\uC5C8\uC5B4\uC694.","\uCC9C\uB465\uC774\uB098 \uCD1D\uC18C\uB9AC \uAC19\uC740 \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uC18C\uB9AC\uC5D0 \uC18C \uB5BC\uAC00 \uB180\uB77C \uD55C\uAEBC\uBC88\uC5D0 \uB0B4\uB2EC\uB9AC\uB294 \uAC78 \uC2A4\uD0EC\uD53C\uB4DC\uB77C\uACE0 \uD574\uC694.","\uC18C\uC758 \uB208 \uB4A4\uC5D0\uB294 \uBE5B\uC744 \uB418\uBE44\uCD94\uB294 \uB9C9\uC774 \uC788\uC5B4\uC11C, \uC5B4\uB460 \uC18D\uC5D0\uC11C \uBE5B\uC744 \uBC1B\uC73C\uBA74 \uB208\uC774 \uBE5B\uB098\uC694.","\uAD74\uB7EC\uB2E4\uB2C8\uB294 \uD68C\uC804\uCD08\uB294 1870\uB144\uB300\uC5D0 \uB7EC\uC2DC\uC544\uC5D0\uC11C \uC628 \uC528\uC557\uC5D0 \uC11E\uC5EC \uBBF8\uAD6D\uC5D0 \uB4E4\uC5B4\uC628 \uD480\uC774\uC5D0\uC694."],tipEvery:7,lines:{open:"\uC11C\uB978 \uB9C8\uB9AC. \uB354\uB3C4 \uB9D0\uACE0 \uB35C\uB3C4 \uB9D0\uACE0.",count:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uD1A1)",countPC:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uBCF4\uACE0 \uD074\uB9AD)",match:"\uC131\uB0E5\uC744 \uCF1C\uC790 (\uC67C\uCABD \uC544\uB798\uB97C \uB450 \uBC88 \uD1A1)",matchPC:"\uC131\uB0E5\uC744 \uCF1C\uC790 (F)",noMatch:"\uC131\uB0E5\uC774 \uC5C6\uB2E4.",walk:"\uC774\uC0C1\uD55C \uAC8C \uC11E\uC600\uB294\uC9C0 \uBCF4\uC790 (\uC67C\uCABD \uC544\uB798\uB97C \uB04C\uC5B4 \uAC77\uACE0, \uD654\uBA74\uC744 \uB04C\uC5B4 \uB458\uB7EC\uBCF4\uAE30)",walkPC:"\uC774\uC0C1\uD55C \uAC8C \uC11E\uC600\uB294\uC9C0 \uBCF4\uC790 (A\xB7D\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4\uB85C \uB458\uB7EC\uBCF4\uAE30)",cock:"\uC774\uC0C1\uD55C \uB188\uC740 \uC3DC\uB2E4 (\uCD1D\uC744 \uC544\uB798\uB85C \uC4F8\uC5B4 \uC3E0 \uC900\uBE44)",cockPC:"\uC774\uC0C1\uD55C \uB188\uC740 \uC3DC\uB2E4 (\uC624\uB978\uCABD \uD074\uB9AD\uC73C\uB85C \uC3E0 \uC900\uBE44)",fire:"(\uC3E0 \uACF3\uC744 \uD1A1, \uCD1D\uC744 \uC704\uB85C \uC4F8\uBA74 \uC3E0 \uC900\uBE44\uB97C \uD480\uC5B4\uC694)",firePC:"(\uD074\uB9AD\uD558\uBA74 \uC3F4\uC694, \uC624\uB978\uCABD \uD074\uB9AD\uC740 \uC3E0 \uC900\uBE44\uB97C \uD480\uC5B4\uC694)",reload:"\uBE48 \uCE78\uC774\uB2E4 (\uCD1D\uC744 \uAFB9 \uB20C\uB7EC \uC7A5\uC804)",reloadPC:"\uBE48 \uCE78\uC774\uB2E4 (R\uB85C \uC7A5\uC804)",morningTitle:"\uB2E4\uC74C \uB0A0 \uC544\uCE68",morning:"\uAFC8\uC774\uC5C8\uB098\u2026 (\uC544\uCE68 \uC7A5\uBA74\uC740 \uC544\uC9C1 \uC5C6\uC5B4\uC694)",deadTitle:"\uB05D",dead:"\uD53C\uAC00 \uB2E4 \uB2F3\uC558\uC5B4\uC694"},clear:{x0:-9,x1:22,z0:-40},seed:41};function Cf(n,e){let t=H.hill,i=Math.max(0,H.front.z-e-t.start),s=i<1?.2*i*i:.2+.4*(i-1),r=(H.stations[0].x+H.stations[H.stations.length-1].x)/2,o=Math.abs(n-r),a=t.width/2,c=o<a-t.edge?1:Math.max(0,(a-o)/t.edge);return t.top*Math.tanh(s*(1+.15*Math.sin(n*.23+1)+.1*Math.sin(n*.61+2))/t.top)*c*c*(3-2*c)-.03}var da={m3:{roar:"machine",skin:[.3,.26,.22],wr:[0,1,.3],anim:{breath:1,breathHz:1.5,jaw:.7,twitch:1.2,neck:[0,0],sway:1}},m4:{mouthBelow:.08,roar:"crack",skin:[.3,.27,.24],wr:[.2,1,.6],anim:{breath:.6,jaw:.45,twitch:.9,neck:[0,0],sway:0}},m5:{roar:"gargle",skin:[.02,.02,.022],wr:[0,1,0],smoke:1,eyeSelf:2.2,eyeShine:.35,anim:{breath:.4,jaw:.4,twitch:.6,neck:[0,0],sway:1}}},yS=`
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
}`,_S=`
attribute vec2 aAtt; attribute vec4 aMat; attribute vec4 aExt; attribute vec4 aRig; attribute vec4 aLeg;
uniform float uTime;
uniform vec3 uHeadP, uHeadX, uHeadY, uHeadZ, uJawH, uHeadRot, uNeckP;
uniform float uJaw, uSplit, uBreath, uSway, uStride, uStrideAmt; uniform vec2 uNeck; uniform vec3 uLimbHip[4], uLimbKnee[4]; uniform float uLimbPh[4];
mat3 rx(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 aa(vec3 k, float t) { float c = cos(t), s = sin(t), C = 1.0 - c;
  return mat3(c + k.x*k.x*C, k.y*k.x*C + k.z*s, k.z*k.x*C - k.y*s,  k.x*k.y*C - k.z*s, c + k.y*k.y*C, k.z*k.y*C + k.x*s,  k.x*k.z*C + k.y*s, k.y*k.z*C - k.x*s, c + k.z*k.z*C); }`,MS=`
  float side = sign(dot(position - uHeadP, uHeadX) + 1e-5);
  mat3 rJ = uSplit > 0.5 ? aa(uHeadY, uJaw * aRig.x * side) : aa(uHeadX, uJaw * aRig.x);
  mat3 rH = aa(uHeadY, uHeadRot.x * aRig.y) * aa(uHeadX, uHeadRot.y * aRig.y) * aa(uHeadZ, uHeadRot.z * aRig.y);
  mat3 rN = aa(vec3(1.0, 0.0, 0.0), uNeck.x * aRig.z) * aa(vec3(0.0, 0.0, 1.0), uNeck.y * aRig.z);`,SS=`
  transformed = uJawH + rJ * (transformed - uJawH);
  transformed = uHeadP + rH * (transformed - uHeadP);
  transformed = uNeckP + rN * (transformed - uNeckP);
  { float ph = position.x * 5.0 + position.z * 4.0;
    transformed += vec3(sin(uTime * 1.3 + position.y * 3.0 + ph), 0.0, cos(uTime * 1.07 + position.y * 2.5 + ph * 0.7)) * 0.035 * aRig.w * aRig.w * uSway; }
  transformed += normal * aExt.y * uBreath;`,bS=`
  if (uStrideAmt > 0.0 && aLeg.x > 0.01) {
    int li = int(floor(aLeg.x * 8.0 + 0.5)) - 1;
    float ph = uStride + uLimbPh[li];
    float swing = sin(ph) * uStrideAmt, lift = max(0.0, cos(ph)) * uStrideAmt * 1.4;
    vec3 hp = uLimbHip[li], kn = uLimbKnee[li];
    transformed = kn + rx(lift * aLeg.z) * (transformed - kn);
    transformed = hp + rx(-swing * aLeg.y) * (transformed - hp);
  }`;function wS(n,e){let t=new mn({color:16777215,roughness:.8,metalness:0}),i={uTime:e,uIR:{value:0},uHeadP:{value:new T},uHeadX:{value:new T(1,0,0)},uHeadY:{value:new T(0,1,0)},uHeadZ:{value:new T(0,0,1)},uJawH:{value:new T},uHeadRot:{value:new T},uNeckP:{value:new T},uNeck:{value:new le},uJaw:{value:0},uSplit:{value:0},uBreath:{value:0},uSway:{value:1},uSkin:{value:new ge(...n.skin)},uWr:{value:new T(...n.wr).normalize()},uSmoke:{value:n.smoke??0},uEyeGain:{value:14},uEyeSelf:{value:n.eyeSelf??0},uEyeShine:{value:n.eyeShine??1},uLightP:{value:new T},uAppear:{value:1},uDbgMouth:{value:0},uStride:{value:0},uStrideAmt:{value:0},uLimbHip:{value:[0,1,2,3].map(()=>new T)},uLimbKnee:{value:[0,1,2,3].map(()=>new T)},uLimbPh:{value:[0,0,0,0]}};return t.userData.own=i,t.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${_S}
varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
${MS}
objectNormal = rN * (rH * (rJ * objectNormal));`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position; vMat = aMat; vExt = aExt; vAtt = aAtt;
${SS}
${bS}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime, uIR, uSmoke, uEyeGain, uEyeSelf, uEyeShine, uAppear, uDbgMouth; uniform vec3 uSkin, uWr, uLightP;
        varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;
        ${yS}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (uAppear < 1.0 && vnoise3(vObj * 7.0) * 0.5 + 0.5 + 0.25 * vnoise3(vObj * 23.0) > uAppear * 1.3) discard; // coming through, piece by piece
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
          totalEmissiveRadiance += vExt.x * vec3(0.96, 1.0, 0.9) * (shine + uEyeSelf * (0.4 + 0.6 * fc));
          totalEmissiveRadiance += uDbgMouth * vec3(0.0, step(0.5, vMat.y), 0.0) * 0.25; }`)},t.customProgramCacheKey=()=>"game-monster-v4",{mat:t,own:i}}function ES(n){let e=atob(n.data),t=new Uint8Array(e.length);for(let g=0;g<e.length;g++)t[g]=e.charCodeAt(g);let i=t.buffer,s=n.vc,r=n.ic,o=0,a;n.i32&&(a=new Uint32Array(i,o,r),o+=r*4);let c=new Int16Array(i,o,s*3);o+=s*6,n.i32||(a=new Uint16Array(i,o,r),o+=r*2);let l=new Int8Array(i,o,s*3);o+=s*3;let h=new Uint8Array(i,o,s*2);o+=s*2;let d=new Uint8Array(i,o,s*4);o+=s*4;let u=new Uint8Array(i,o,s*4);o+=s*4;let f=new Uint8Array(i,o,s*4);o+=s*4;let m=n.leg?new Uint8Array(i,o,s*4):new Uint8Array(s*4),v=new Float32Array(s*3);for(let g=0;g<s*3;g++)v[g]=c[g]*n.ps;let p=new Mt;return p.setAttribute("position",new He(v,3)),p.setAttribute("normal",new He(new Int8Array(l),3,!0)),p.setAttribute("aAtt",new He(new Uint8Array(h),2,!0)),p.setAttribute("aMat",new He(new Uint8Array(d),4,!0)),p.setAttribute("aExt",new He(new Uint8Array(u),4,!0)),p.setAttribute("aRig",new He(new Uint8Array(f),4,!0)),p.setAttribute("aLeg",new He(new Uint8Array(m),4,!0)),p.setIndex(new He(n.i32?new Uint32Array(a):new Uint16Array(a),1)),p.computeBoundingSphere(),p.boundingSphere.radius+=.6,p}async function Mm(n,e,t){let i=await(await fetch(n)).json(),s=i.meta,r=da[e],{mat:o,own:a}=wS(r,t),c=new st(ES(i),o);c.frustumCulled=!1,a.uHeadP.value.fromArray(s.headPivot),a.uHeadX.value.fromArray(s.headX),a.uHeadY.value.fromArray(s.headY),a.uHeadZ.value.fromArray(s.headZ),s.split?(a.uSplit.value=1,a.uJawH.value.fromArray(s.headPivot).addScaledVector(a.uHeadZ.value,s.split.hinge[2])):a.uJawH.value.fromArray(s.jawHinge),a.uNeckP.value.fromArray(s.neck?s.neck.base:[0,1.5,-.05]),(s.limbs||[]).slice(0,4).forEach((h,d)=>{a.uLimbHip.value[d].fromArray(h.hip),a.uLimbKnee.value[d].fromArray(h.knee),a.uLimbPh.value[d]=h.arm?h.side>0?Math.PI:0:h.side*h.fore>0?Math.PI:0});let l=new Dt;return l.add(c),l.visible=!1,{id:e,meta:s,info:r,mesh:c,root:l,own:a,mouth:TS(c.geometry,s,da[e])}}function TS(n,e,t){let i=n.attributes.position.array,s=n.attributes.aMat.array,r=n.attributes.aRig.array,o=e.headPivot,a=e.headX,c=e.headY,l=[];for(let u=0;u<i.length/3;u++){if(s[4*u+1]<128)continue;let f=i[3*u],m=i[3*u+1],v=i[3*u+2],p=(f-o[0])*a[0]+(m-o[1])*a[1]+(v-o[2])*a[2]+1e-5<0?-1:1,g=(f-o[0])*c[0]+(m-o[1])*c[1]+(v-o[2])*c[2],_=r[4*u]/255,w=r[4*u+1]/255;l.push(f,m,v,_,w,p,e.split?p<0?0:1:_<.5?0:1,g)}let h=1/0;if(t?.mouthBelow!==void 0){let u=e.eyes;h=u.reduce((f,m)=>f+(m[0]-o[0])*c[0]+(m[1]-o[1])*c[1]+(m[2]-o[2])*c[2],0)/u.length-t.mouthBelow}let d=[0,0];for(let u=0;u<l.length;u+=8)l[u+7]<=h&&d[l[u+6]]++;return d[0]&&d[1]?{v:new Float32Array(l),n:d,split:!!e.split,cut:h}:null}var jl=new T,Ql=new vt,AS=new vt,Pf=new T,If=new T,mm=new T,Lf=new T,Df=new T,la=[new T,new T];function Sm(n){let e=n.mouth,t=n.meta.headPivot,i=n.meta.headY;if(!e)return null;let s=1e9,r=-1e9,o=0,a=0;for(let c=0;c<e.v.length;c+=8){let l=e.v[c+7];s=Math.min(s,l),r=Math.max(r,l),o+=l,a++}return{lo:+s.toFixed(3),hi:+r.toFixed(3),mean:+(o/a).toFixed(3),cut:+e.cut.toFixed(3),eyes:n.meta.eyes.map(c=>+((c[0]-t[0])*i[0]+(c[1]-t[1])*i[1]+(c[2]-t[2])*i[2]).toFixed(3))}}function kf(n,e){let t=n.own,i=n.mouth;if(!i)return null;Pf.copy(t.uHeadX.value),If.copy(t.uHeadY.value),mm.copy(t.uHeadZ.value),Lf.copy(t.uHeadP.value),Df.copy(t.uJawH.value);let s=t.uJaw.value,r=t.uHeadRot.value,o=i.v;la[0].set(0,0,0),la[1].set(0,0,0);for(let a=0;a<o.length;a+=8){if(o[a+7]>i.cut)continue;jl.set(o[a],o[a+1],o[a+2]);let c=o[a+3],l=o[a+4];c>0&&jl.sub(Df).applyQuaternion(i.split?Ql.setFromAxisAngle(If,s*c*o[a+5]):Ql.setFromAxisAngle(Pf,s*c)).add(Df),l>0&&jl.sub(Lf).applyQuaternion(Ql.setFromAxisAngle(mm,r.z*l)).applyQuaternion(AS.setFromAxisAngle(Pf,r.y*l)).applyQuaternion(Ql.setFromAxisAngle(If,r.x*l)).add(Lf),la[o[a+6]].add(jl)}return e.copy(la[0]).multiplyScalar(.5/i.n[0]).addScaledVector(la[1],.5/i.n[1]),e.multiply(n.root.scale).applyQuaternion(n.root.quaternion).add(n.root.position)}var Nf=new T,Ff=new T,Uf=new T;function bm(n,e,t){if(t<=0||!kf(n,Nf))return;e.getWorldDirection(Ff);let i=Uf.copy(Nf).sub(e.position).dot(Ff);Uf.copy(e.position).addScaledVector(Ff,i).sub(Nf),n.root.position.addScaledVector(Uf,t)}var th=n=>(n=Math.min(1,Math.max(0,n)),n*n*(3-2*n)),RS=n=>(n=Math.min(1,Math.max(0,n)),n*n*n),gm=n=>(n=Math.min(1,Math.max(0,n)),1-Math.pow(1-n,3)),xm={travel:.11,d:.68},ha={close:.13,hold:.06,pull:.12},pa=new T,nh=new T,ua=new T,wm=new T,$s=new T,Hf=new vt,ih=new T,sh=new T,Em=new T;function Tm(n,e,t,i){let s=!!n.meta.split;e.getWorldDirection(pa),nh.copy(e.position).addScaledVector(pa,t+.75*n.meta.headL-.28).addScaledVector(Yr.set(0,1,0).applyQuaternion(e.quaternion),-.1);let r=s?0:.5*(n.meta.jawOpen+i)-.1;ua.fromArray(n.meta.headZ).multiplyScalar(Math.cos(r)).addScaledVector(wm.fromArray(n.meta.headY),-Math.sin(r)).normalize(),fa.fromArray(n.meta.headY).multiplyScalar(Math.cos(r)).addScaledVector(zf.fromArray(n.meta.headZ),Math.sin(r)),fa.addScaledVector(ua,-fa.dot(ua)).normalize(),zf.crossVectors(fa,ua),ym.setFromRotationMatrix(_m.makeBasis(zf,fa,ua)),$s.copy(e.position).sub(nh).normalize(),Yr.set(0,1,0).applyQuaternion(e.quaternion),Yr.addScaledVector($s,-Yr.dot($s)).normalize(),vm.crossVectors(Yr,$s),Hf.setFromRotationMatrix(_m.makeBasis(vm,Yr,$s)).multiply(ym.invert())}var fa=new T,zf=new T,Yr=new T,vm=new T,ym=new vt,_m=new ct;function Am(n,e,t,i={}){n.sc={t:0,fired:{},base:e.clone(),qs:t.clone(),d:i.d??xm.d,leap:i.leap??null,travel:i.travel??(i.leap?i.leap.travel:xm.travel),thr:{t:0,goal:new T,cur:new T,pg:new le,pc:new le}},n.root.visible=!0}function Rm(n,e,t,i){let s=n.sc;if(!s)return null;let r=n.own,o=!!n.meta.split;s.t+=t;let a=s.t,c=s.travel,l=c+.72,h=l+ha.close,d=h+ha.hold,u=d+.75,f=u+.8,m=(P,D)=>{s.fired[P]||(s.fired[P]=1,D())};if(m("roar",()=>i.roar()),a>=d&&m("cut",()=>{i.cut(),n.root.visible=!1}),a>=u&&m("back",()=>i.back()),a>=f)return n.sc=null,n.root.visible=!1,i.done(),null;if(a>=d)return{fade:a<u?1:1-th((a-u)/(f-u)),shake:0};let v=Em.fromArray(n.meta.headPivot),p=o?.6:.95;Tm(n,e,s.d,p);let g=Math.min(1,a/s.travel),_=Im(g),w=sh.copy(v).applyQuaternion(s.qs).add(s.base),b=ih.copy(w).lerp(nh,_);n.root.quaternion.copy(s.qs).slerp(Hf,_),s.leap&&g<1&&Nm(n,b,g,s.leap);let y=s.thr,M=.55,x=a>=l?Math.min(1,((a-l)/ha.close)**2):0;if(_>=1){y.t-=t,y.t<=0&&(y.t=.045+Math.random()*.03,y.goal.set((Math.random()-.5)*.6*M,(Math.random()-.5)*.6*M,(Math.random()-.5)*1.6*M),y.pg.set((Math.random()-.5)*.12*M,(Math.random()-.5)*.1*M));let P=Math.min(1,t*32);y.cur.lerp(y.goal,P),y.pc.lerp(y.pg,P),x>0&&(y.cur.multiplyScalar(1-x),y.pc.multiplyScalar(1-x),y.goal.set(0,0,0),y.pg.set(0,0)),b.addScaledVector(wm.set(1,0,0).applyQuaternion(e.quaternion),y.pc.x).addScaledVector(e.up,y.pc.y)}n.root.position.copy(b).sub(sh.copy(v).applyQuaternion(n.root.quaternion)),Dm(n,_),r.uHeadRot.value.copy(y.cur);let S=p*(_>=1?.85+.15*Math.sin(a*33):_);if(a>=l){let P=Math.min(1,((a-l)/ha.close)**2);r.uHeadRot.value.multiplyScalar(1-P),S=p-(p+n.meta.jawOpen*(o?.95:.9))*P,n.root.position.addScaledVector(pa,ha.pull*P)}r.uJaw.value=S,r.uHeadRot.value.z+=(n.twist??0)*(1-_),r.uHeadRot.value.y+=n.hang??0,bm(n,e,_);let C=e.position.distanceTo(ih.copy(v).applyQuaternion(n.root.quaternion).add(n.root.position)),R=.12+.88*th((C-.9)/1.5);return r.uEyeShine.value=(n.info.eyeShine??1)*(.012+.988*R),r.uEyeSelf.value=(n.info.eyeSelf??0)*(.03+.97*R),{fade:0,shake:_>=1?1.4*M+.3:.6}}function Cm(n){return n.sc?n.sc.t>=n.sc.travel*CS:n.eat?n.eat.t>=n.eat.T.snap:!1}var CS=.7,Zr=(n,e)=>n+Math.random()*(e-n);function Pm(n,e,t){let i=n.info.anim,s=n.own,r=n.idle??(n.idle={gapeT:2,gape:0,gapeV:0,jerkT:1,head:new T,goal:new T}),o=i.breathHz??.32;s.uBreath.value=i.breath*.012*Math.sin(t*Math.PI*2*o),r.gapeT-=e,r.gapeT<0&&(r.gape=1,r.gapeT=Zr(2,4),r.hold=Zr(.6,1.2)),r.gape>0&&(r.hold-=e,r.hold<0&&(r.gape=Math.max(0,r.gape-e*1.4))),r.gapeV+=((r.gape>0&&r.hold>0?1:r.gape)-r.gapeV)*Math.min(1,e*5),s.uJaw.value=(n.meta.split?-.1:-.12)+.08*Math.sin(t*.9)+.012*Math.sin(t*37)+r.gapeV*i.jaw,r.jerkT-=e,r.jerkT<0&&(r.jerkT=Zr(.8,2.4)/i.twitch,r.goal.set(Zr(-.3,.3),Zr(-.18,.18),Zr(-.4,.4)).multiplyScalar(Math.min(1,i.twitch))),r.head.lerp(r.goal,Math.min(1,e*22));let a=.012*i.twitch;s.uHeadRot.value.set(r.head.x+a*Math.sin(t*41),r.head.y+a*Math.sin(t*33+1),r.head.z+a*Math.sin(t*29+2)),s.uNeck.value.set(0,0),s.uSway.value=i.sway,s.uEyeShine.value=n.info.eyeShine??1,s.uEyeSelf.value=n.info.eyeSelf??0}var PS={snap:.45,lunge:.72,shut:1.02,black:1.11},IS={snap:.1,lunge:.62,shut:.76,black:.85},Im=n=>Math.pow(Math.min(1,Math.max(0,n)),2.5);function Lm(n,e={}){n.eat={t:0,fired:{},p0:n.root.position.clone(),q0:n.root.quaternion.clone(),leap:e.leap??null,T:e.run?IS:PS,run:!!e.run,d:e.d??.62}}var Bf=new T,eh=new vt,LS=new T(0,1,0),Of=new T,JA=new T;function Dm(n,e){if(!n.twist||e<=0)return;let t=n.meta.eyes;Of.set((t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2,(t[0][2]+t[1][2])/2).applyQuaternion(n.root.quaternion).add(n.root.position),eh.setFromAxisAngle($s,n.twist*e),n.root.quaternion.premultiply(eh),n.root.position.sub(Of).applyQuaternion(eh).add(Of)}function Nm(n,e,t,i){e.y+=i.h*4*t*(1-t),Bf.crossVectors($s,LS),Bf.lengthSq()>1e-6&&n.root.quaternion.premultiply(eh.setFromAxisAngle(Bf.normalize(),i.tilt*Math.sin(Math.PI*t)*(1-t)))}function Fm(n,e,t,i){let s=n.eat;if(!s)return null;let r=n.own,o=!!n.meta.split,a=o?.6:.95;s.t+=t;let c=s.t,l=(x,S)=>{s.fired[x]||(s.fired[x]=1,S())},h=s.T;if(s.run||l("freeze",i.freeze),c>=h.snap&&l("roar",i.roar),c>=h.black)return l("black",i.black),{fade:1,shake:0};let d=Em.fromArray(n.meta.headPivot);Tm(n,e,s.d,a);let u=0,f=0,m=0,v=r.uJaw.value,p=0,g=0,_=-1;if(c<h.snap){let x=th(c/h.snap);v=v*(1-x)+(o?-.18:-.2)*x,r.uHeadRot.value.multiplyScalar(1-x),s.leap&&(g=s.leap.crouch*x)}else if(c<h.lunge){let x=(c-h.snap)/(h.lunge-h.snap);u=Im(x),f=gm(Math.min(1,x*1.6)),s.leap&&(g=s.leap.crouch*(1-Math.min(1,x*4)),_=x),v=-.2+(a+.2)*gm(x*1.3),r.uHeadRot.value.set(0,.08*Math.sin(c*60)*(1-x),.06*Math.sin(c*47)),p=.5}else if(c<h.shut)u=1,f=1,v=a+.04*Math.sin(c*50),r.uHeadRot.value.set(.03*Math.sin(c*41),.03*Math.sin(c*37),.05*Math.sin(c*33)),p=.5;else{let x=RS((c-h.shut)/(h.black-h.shut));u=1,f=1,m=.04*x,v=a-(a+n.meta.jawOpen*(o?.95:.9))*x,r.uHeadRot.value.set(0,0,0),p=.5}let w=sh.copy(d).applyQuaternion(s.q0).add(s.p0);e.getWorldDirection(pa);let b=ih.copy(w).lerp(nh,u).addScaledVector(pa,-m);b.y-=g,n.root.quaternion.copy(s.q0).slerp(Hf,f),_>=0&&Nm(n,b,_,s.leap),n.root.position.copy(b).sub(sh.copy(d).applyQuaternion(n.root.quaternion)),Dm(n,u),r.uJaw.value=v,r.uHeadRot.value.z+=(n.twist??0)*(1-u),r.uHeadRot.value.y+=n.hang??0,bm(n,e,u);let y=e.position.distanceTo(ih.copy(d).applyQuaternion(n.root.quaternion).add(n.root.position)),M=.12+.88*th((y-.9)/1.5);return r.uEyeShine.value=(n.info.eyeShine??1)*(.012+.988*M),r.uEyeSelf.value=(n.info.eyeSelf??0)*(.03+.97*M),{fade:0,shake:p}}function Vf(n={}){let e=n.context||null,t,i,s,r,o,a=null,c=!0,l={a:0,b:0,c:0};function h(){if(e&&t)return e;if(!e)try{e=new(window.AudioContext||window.webkitAudioContext)}catch{return null}t=e.createGain(),t.gain.value=.9,s=e.createBiquadFilter(),s.type="lowpass",s.frequency.value=18e3,s.Q.value=.7;let B=e.createDynamicsCompressor();B.threshold.value=-4,B.ratio.value=3,B.attack.value=.003,B.release.value=.2;let F=e.createWaveShaper(),$=2048,ie=new Float32Array($);for(let Ie=0;Ie<$;Ie++){let at=Ie/($-1)*2-1,ht=Math.abs(at)*2*.92;ie[Ie]=Math.sign(at)*(ht<.7?ht:.7+.28*Math.tanh((ht-.7)/.28))}F.curve=ie;let de=e.createGain();de.gain.value=.5,t.connect(s).connect(B).connect(de).connect(F).connect(e.destination),i=e.createGain(),i.connect(t),r=e.createConvolver(),r.buffer=d(e,1.8,2.6);let Ae=e.createGain();Ae.gain.value=.3,r.connect(Ae).connect(t),o=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let Fe=o.getChannelData(0);for(let Ie=0;Ie<Fe.length;Ie++)Fe[Ie]=Math.random()*2-1;return e}function d(B,F,$){let ie=Math.floor(B.sampleRate*F),de=B.createBuffer(2,ie,B.sampleRate);for(let Ae=0;Ae<2;Ae++){let Fe=de.getChannelData(Ae);for(let Ie=0;Ie<ie;Ie++)Fe[Ie]=(Math.random()*2-1)*Math.pow(1-Ie/ie,$)}return de}function u(B,F,$,ie,de,Ae=ie-$){B.gain.setValueAtTime(1e-4,F),B.gain.exponentialRampToValueAtTime(Math.max(2e-4,de),F+$),B.gain.exponentialRampToValueAtTime(1e-4,F+$+Math.max(.01,Ae))}function f(B,F,$){let ie=e.createBufferSource();ie.buffer=o,ie.loop=!0;let de=e.createBiquadFilter();de.type=$.type||"bandpass",de.Q.value=$.q??1,de.frequency.setValueAtTime($.f0,B),$.f1&&de.frequency.exponentialRampToValueAtTime($.f1,B+F);let Ae=e.createGain();return u(Ae,B,$.att??.01,F,$.gain),ie.connect(de).connect(Ae),Ae.connect($.dest||t),$.verb&&Ae.connect(r),ie.start(B,Math.random()*1.5),ie.stop(B+F+.05),Ae}function m(B,F,$){let ie=e.createOscillator();ie.type=$.type||"sine",ie.frequency.setValueAtTime($.f0,B),$.f1&&ie.frequency.exponentialRampToValueAtTime($.f1,B+F);let de=e.createGain();u(de,B,$.att??.01,F,$.gain);let Ae=ie;if($.lp){let Fe=e.createBiquadFilter();Fe.type="lowpass",Fe.frequency.value=$.lp,Ae=Ae.connect(Fe)}if($.bp){let Fe=e.createBiquadFilter();Fe.type="bandpass",Fe.frequency.value=$.bp,Fe.Q.value=$.bq??3,Ae=Ae.connect(Fe)}if($.am){let Fe=e.createOscillator(),Ie=e.createGain(),at=e.createGain();Fe.frequency.value=$.am,Ie.gain.value=.5,at.gain.value=.5,Fe.connect(Ie).connect(at.gain),Ae=Ae.connect(at),Fe.start(B),Fe.stop(B+F+.05)}if($.vib){let Fe=e.createOscillator(),Ie=e.createGain();Fe.frequency.value=$.vib,Ie.gain.value=$.vibAmt??$.f0*.03,Fe.connect(Ie).connect(ie.frequency),Fe.start(B),Fe.stop(B+F+.05)}return Ae.connect(de),de.connect($.dest||t),$.verb&&de.connect(r),ie.start(B),ie.stop(B+F+.05),de}function v(B){let F=e.createWaveShaper(),$=1024,ie=new Float32Array($);for(let de=0;de<$;de++){let Ae=de/$*2-1;ie[de]=Math.tanh(Ae*B)}return F.curve=ie,F}function p(B,F,$,ie){for(let de=0;de<F;de++)f(B+Math.random()*$,ie.len??.006,{type:"bandpass",f0:ie.f*(.7+Math.random()*.6),q:ie.q??4,gain:ie.gain*(.5+Math.random()*.5),att:8e-4,dest:ie.dest})}function g(){if(a){let B=a;a=null;let F=e.currentTime;B.g.gain.setTargetAtTime(1e-4,F,.15),setTimeout(()=>B.nodes.forEach($=>{try{$.stop()}catch{}}),900)}}function _(B){g();let F=e.currentTime,$=e.createGain();$.gain.value=1e-4,$.gain.setTargetAtTime(1,F,.4),$.connect(i);let ie=[];if(B==="m4"){let de=e.createOscillator();de.type="sawtooth",de.frequency.value=47;let Ae=e.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=230,Ae.Q.value=2;let Fe=e.createOscillator(),Ie=e.createGain(),at=e.createGain();Fe.frequency.value=6.5,Ie.gain.value=.35,at.gain.value=.065,Fe.connect(Ie).connect(at.gain),de.connect(Ae).connect(at).connect($),de.start(),Fe.start(),ie.push(de,Fe)}if(B==="m5"){for(let Ie of[36,38.6,54.5]){let at=e.createOscillator();at.frequency.value=Ie;let ht=e.createGain();ht.gain.value=Ie>50?.03:.07,at.connect(ht).connect($),at.start(),ie.push(at)}let de=e.createBufferSource();de.buffer=o,de.loop=!0;let Ae=e.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=140;let Fe=e.createGain();Fe.gain.value=.12,de.connect(Ae).connect(Fe).connect($),de.start(),ie.push(de)}a={id:B,g:$,nodes:ie},l.a=0,l.b=1.5+Math.random()*2,l.c=0}function w(B,F,$){if(!c||!e||e.state!=="running")return;(!a||a.id!==B)&&_(B);let ie=e.currentTime+.02,de=a.g;l.b-=F,B==="m3"&&($.cross&&(f(ie,.2,{f0:1150,f1:800,q:.9,gain:.07,att:.03,dest:de}),f(ie+.3,.16,{f0:1700,f1:2100,q:1.2,gain:.035,att:.05,dest:de})),l.b<0&&(l.b=4+Math.random()*3,f(ie,.7,{type:"lowpass",f0:420,f1:260,q:6,gain:.1,att:.06,dest:de}),m(ie,.7,{type:"sawtooth",f0:70,f1:52,gain:.06,lp:300,am:19,dest:de}))),B==="m4"&&(l.b<0&&(l.b=3+Math.random()*3.5,p(ie,10+Math.floor(Math.random()*6),.55,{f:2600,gain:.12,dest:de})),$.cross&&f(ie,.9,{type:"lowpass",f0:500,f1:300,q:1,gain:.05,att:.3,dest:de})),B==="m5"&&(l.b<0&&(l.b=5+Math.random()*4,f(ie,2.2,{f0:2400,f1:3100,q:5,gain:.04,att:.9,dest:de}),f(ie+.4,1.6,{f0:1300,f1:900,q:7,gain:.025,att:.6,dest:de})),$.cross&&f(ie,2.4,{type:"lowpass",f0:240,f1:110,q:.7,gain:.08,att:.9,dest:de}))}function b(B){if(!wt())return;let F=e.currentTime+.01;if(f(F,.012,{type:"highpass",f0:3800,q:.7,gain:.12,att:.001}),B==="m5")for(let $=0;$<14;$++)f(F+.05+$*(.03+$*.004),.012,{f0:1300,q:6,gain:.08,att:.001});else m(F+.04,1.3,{type:"sawtooth",f0:B==="m3"?95:78,f1:52,gain:.16,bp:620,bq:3,vib:7,att:.15});f(F+.04,1.1,{type:"lowpass",f0:600,f1:250,q:1,gain:.06,att:.2})}function y(B,F){let $=F.dur,ie=B+$,de=e.createGain();de.gain.value=1;let Ae=F.pitch??1,Fe=F.fmul??1,Ie=F.f.map(([ee,pe])=>[ee,pe*Ae]),at=(ee,pe)=>{ee.frequency.setValueAtTime(Ie[0][1]*pe,B);for(let[xe,Q]of Ie.slice(1))ee.frequency.exponentialRampToValueAtTime(Q*pe,B+xe)},ht=[];for(let[ee,pe,xe]of[[1,"sawtooth",.5],[1.012,"sawtooth",.4],[.5,F.subType||"sawtooth",F.sub??.45],[1.497,"square",F.fifth??0]]){if(!xe)continue;let Q=e.createOscillator();Q.type=pe,at(Q,ee);let te=e.createGain();te.gain.value=xe,Q.connect(te).connect(de),ht.push(Q)}let Et=e.createOscillator();Et.type="sawtooth",Et.frequency.value=F.jitRate??11;let Ct=e.createGain();Ct.gain.value=Ie[0][1]*(F.jit??.06),Et.connect(Ct);for(let ee of ht)Ct.connect(ee.frequency);ht.push(Et);let Yt=e.createGain();Yt.gain.value=1-(F.rattle??.5)/2;let O=e.createOscillator();O.type="square",O.frequency.setValueAtTime(F.rattleHz??28,B),F.rattleHz1&&O.frequency.linearRampToValueAtTime(F.rattleHz1,ie);let on=e.createGain();on.gain.value=(F.rattle??.5)/2,O.connect(on).connect(Yt.gain),ht.push(O);let At=e.createBufferSource();At.buffer=o,At.loop=!0;let Pt=e.createBiquadFilter();Pt.type="bandpass",Pt.frequency.value=F.breathHz??1100,Pt.Q.value=.6;let be=e.createGain();be.gain.value=F.breath??.5,At.connect(Pt).connect(be).connect(de),de.connect(Yt);let Vt=v(F.drive??6);Yt.connect(Vt);let Ve=e.createGain();Ve.gain.value=1;for(let[ee,pe,xe]of F.formants||[[520,4,1],[950,5,.8],[2300,6,.35]]){let Q=ee*Fe,te=e.createBiquadFilter();te.type="bandpass",te.frequency.setValueAtTime(Q,B),F.formantSweep&&te.frequency.exponentialRampToValueAtTime(Q*F.formantSweep,ie),te.Q.value=pe;let ye=e.createGain();ye.gain.value=xe,Vt.connect(te).connect(ye).connect(Ve)}let Je=e.createBiquadFilter();Je.type="lowpass",Je.frequency.value=F.chestHz??260;let I=e.createGain();I.gain.value=F.chest??.9,Vt.connect(Je).connect(I).connect(Ve);let E=e.createBiquadFilter();E.type="lowpass",E.frequency.value=F.top??5200;let W=Ve.connect(E);if(F.hp){let ee=e.createBiquadFilter();ee.type="highpass",ee.frequency.value=F.hp,ee.Q.value=.7,W=W.connect(ee)}let ue=e.createGain();F={...F,gain:F.gain*(F.loud??1)},ue.gain.setValueAtTime(1e-4,B),ue.gain.exponentialRampToValueAtTime(F.gain,B+(F.att??.03)),F.swell&&ue.gain.exponentialRampToValueAtTime(F.gain*F.swell,B+$*.35),ue.gain.setValueAtTime(F.gain*(F.swell??1),B+$*.55),ue.gain.exponentialRampToValueAtTime(1e-4,ie),W.connect(ue),ue.connect(t),ue.connect(r);for(let ee of ht)ee.start(B),ee.stop(ie+.05);return At.start(B,Math.random()),At.stop(ie+.05),ue}function M(B,F,$){y(B,{dur:F,f:[[0,150],[F,175]],gain:$,rattle:.85,rattleHz:22,rattleHz1:30,drive:4,breath:.45,breathHz:1800,formants:[[800,4,.8],[1600,5,.6]],chest:.4,chestHz:320,top:4500,hp:200,att:F*.8,jit:.04})}function x(B){for(let[Et,Ct,Yt]of[[410,.35,.5],[1132,.22,.35],[2214,.16,.25],[3660,.1,.18]])m(B,Yt,{f0:Et,gain:Ct,att:.002});f(B,.05,{type:"highpass",f0:2500,q:.7,gain:.5,att:.001});let F=e.createOscillator();F.type="square",F.frequency.setValueAtTime(540,B),F.frequency.exponentialRampToValueAtTime(400,B+1.1);let $=e.createGain();$.gain.value=0;let ie=e.createOscillator();ie.frequency.value=730,ie.connect($.gain);let de=e.createBiquadFilter();de.type="bandpass",de.frequency.value=4e3,de.Q.value=1.2;let Ae=e.createGain();u(Ae,B,.02,1.25,.22);let Fe=v(5);F.connect($).connect(Fe).connect(de).connect(Ae).connect(t),F.start(B),ie.start(B),F.stop(B+1.3),ie.stop(B+1.3);let Ie=e.createDelay(.01);Ie.delayTime.value=.0031;let at=e.createGain();at.gain.value=.82,Ie.connect(at).connect(Ie);let ht=e.createGain();ht.gain.value=.5,Ie.connect(ht).connect(t);for(let Et=0;Et<16;Et++)f(B+.05+Et*.055+Math.random()*.02,.012,{type:"highpass",f0:1500,q:.7,gain:.25*(1-Et/18),att:.001,dest:Ie})}function S(B){if(!wt())return;let F=e.currentTime;i.gain.cancelScheduledValues(F),i.gain.setTargetAtTime(1e-4,F,.05),B==="growlRoar"&&M(F+.02,.5,.22)}function C(B,F){if(!h())return;F===void 0&&(F=e.currentTime+.005);let $={breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7};m(F,.16,{f0:95,f1:48,gain:.35,att:.003}),B==="growlRoar"&&y(F,{...$,dur:1.1,f:[[0,205],[.1,280],[.45,215],[1.1,150]],gain:.7,rattle:.5,rattleHz:33,rattleHz1:24,drive:9,breath:.85,formants:[[1250,3,1],[2550,4,1],[3750,5,.65]],formantSweep:.85,att:.02}),B==="machine"&&y(F+.02,{...$,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),B==="crack"&&y(F,{...$,dur:1.1,f:[[0,210],[.07,340],[.2,235],[.42,310],[.6,220],[1.1,160]],gain:.7,rattle:.6,rattleHz:27,rattleHz1:14,drive:10,breath:.8,jit:.16,jitRate:9,formants:[[1150,3,1],[2350,4,.95],[3550,5,.65]],att:.015}),B==="gargle"&&y(F,{...$,dur:1.2,f:[[0,190],[.18,262],[1.2,135]],gain:.75,rattle:.95,rattleHz:20,rattleHz1:36,drive:9,breath:1,jit:.12,jitRate:7,formants:[[1050,3,1],[2250,4,1],[3450,5,.7]],formantSweep:1.1,hp:1250,att:.025})}let R={};async function P(B){if(!(n.offline||!h()||R[B])){R[B]="pending";try{let F=e.sampleRate,$=new OfflineAudioContext(1,Math.ceil(F*2.2),F);Vf({context:$,offline:!0}).roarRaw(B,.002),R[B]=await $.startRendering()}catch{R[B]=null}}}function D(B,F){R[B]=F}let k={first:.08,grow:1.16,span:1.1,gain:2.2};function L(B,F){let $=B,ie=k.first,de=[];for(;$-B<k.span;)de.push([$,ie]),$+=ie,ie*=k.grow;de.forEach(([Ae,Fe],Ie)=>{let at=Ie===de.length-1,ht=at?F.duration:Fe,Et=e.createBufferSource();Et.buffer=F;let Ct=e.createGain();Ct.gain.setValueAtTime(1e-4,Ae),Ct.gain.exponentialRampToValueAtTime(k.gain,Ae+.003),at||(Ct.gain.setValueAtTime(k.gain,Ae+ht-.006),Ct.gain.exponentialRampToValueAtTime(1e-4,Ae+ht)),Et.connect(Ct).connect(t),Ct.connect(r),Et.start(Ae,0,ht+.01)})}let V={},q=1.5;async function X(B,F){if(!(!h()||V[B])){V[B]="pending";try{let $=await(await fetch(F)).arrayBuffer();V[B]=await new Promise((ie,de)=>e.decodeAudioData($,ie,de))}catch{V[B]=null}}}function ce(B,F=1){if(!wt())return;let $=V[B];if($&&$!=="pending"){let Ae=e.createBufferSource(),Fe=e.createGain();Ae.buffer=$,Fe.gain.value=q*F,Ae.connect(Fe).connect(t),Ae.start(e.currentTime+.005);return}let ie=e.currentTime+.005,de=R[B];de&&de!=="pending"?L(ie,de):(C(B,ie),P(B)),f(ie,.25,{f0:1800,f1:600,q:.8,gain:.3,att:.006})}function J(B={}){if(!wt())return;let F=e.currentTime+.005;B.muffle!==!1&&(s.frequency.cancelScheduledValues(F),s.frequency.setValueAtTime(900,F),s.frequency.exponentialRampToValueAtTime(500,F+1.2));let $=e.createOscillator();$.frequency.value=3400;let ie=e.createGain();u(ie,F,.01,1.8,.06),$.connect(ie).connect(e.destination),$.start(F),$.stop(F+1.9),m(F+.35,.13,{f0:62,f1:42,gain:.45,att:.005}),m(F+.52,.15,{f0:56,f1:38,gain:.32,att:.005})}function oe(){wt()&&We(e.currentTime+.005,.75)}function he(B,F){if(wt())if(F===void 0&&(F=e.currentTime+.003),B==="boom")m(F,.45,{f0:160,f1:55,gain:1,att:.002}),m(F,.3,{f0:330,f1:110,gain:.5,att:.001,type:"triangle"}),f(F,.12,{f0:2400,f1:500,q:.8,gain:.9,att:.001}),f(F,.6,{type:"lowpass",f0:900,f1:200,q:.7,gain:.5,att:.003,verb:!0});else if(B==="slam"){f(F,.05,{f0:1800,q:1.2,gain:1.1,att:8e-4}),m(F,.25,{f0:210,f1:140,gain:.7,att:.001,type:"triangle"});for(let $ of[523,787,1190,1630])m(F,.7,{f0:$,f1:$*.98,gain:.12,att:.001,type:"square",bp:$,bq:8,verb:!0});f(F+.01,.4,{type:"lowpass",f0:600,f1:150,gain:.6,att:.002,verb:!0})}else{for(let $ of[233,247,349,370,523])m(F,.55,{f0:$,f1:$*.97,gain:.16,att:.006,type:"sawtooth",lp:3200,verb:!0});m(F,.35,{f0:120,f1:60,gain:.7,att:.002}),f(F,.08,{f0:3e3,q:.8,gain:.5,att:.001})}}function Le(B,F=1,$=.6,ie=0){y(B+ie,{dur:1.3,f:[[0,480*F],[.08,760*F],[.35,830*F],[.8,640*F],[1.3,420*F]],gain:$,sub:0,rattle:.35,rattleHz:48,drive:14,breath:.7,breathHz:5200,jit:.07,jitRate:9,formants:[[1750,4,1],[3150,5,.9],[4700,6,.6]],hp:950,top:12500,chest:.04,att:.012})}function tt(B){if(!wt())return;let F=e.currentTime+.005;if(B==="higher"&&(y(F+.02,{breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),x(F)),B==="metal"){let ie=v(9),de=e.createBiquadFilter();de.type="bandpass",de.frequency.value=3e3,de.Q.value=.9;let Ae=e.createGain();u(Ae,F,.01,1.2,2.2);let Fe=e.createGain();Fe.gain.value=0;let Ie=e.createOscillator();Ie.frequency.setValueAtTime(2300,F),Ie.frequency.linearRampToValueAtTime(1700,F+1.2),Ie.connect(Fe.gain);for(let[Ct,Yt]of[[1,.5],[1.008,.4],[1.5,.25]]){let O=e.createOscillator();O.type="sawtooth",O.frequency.setValueAtTime(880*Ct,F),O.frequency.exponentialRampToValueAtTime(1400*Ct,F+.12),O.frequency.exponentialRampToValueAtTime(700*Ct,F+1.2);let on=e.createGain();on.gain.value=Yt,O.connect(on).connect(Fe),O.start(F),O.stop(F+1.2+.05)}let at=e.createDelay(.01);at.delayTime.value=.0023;let ht=e.createGain();ht.gain.value=.7,at.connect(ht).connect(at),Fe.connect(ie).connect(de).connect(Ae),de.connect(at);let Et=e.createGain();Et.gain.value=.35,at.connect(Et).connect(Ae),Ae.connect(t),Ae.connect(r),Ie.start(F),Ie.stop(F+1.2+.05),f(F,.9,{f0:6e3,f1:3500,q:1.5,gain:.25,att:.01}),x(F)}B==="tear"&&Le(F,1,.75),B==="overGrowl"&&(Le(F+.04,1,.6),y(F,{dur:1.4,f:[[0,90],[.2,120],[1.4,60]],gain:.55,rattle:.95,rattleHz:19,rattleHz1:30,drive:7,breath:.6,breathHz:900,formants:[[420,3,1],[800,4,.7]],chest:1,chestHz:260,top:3e3,att:.03})),B==="chorus"&&(Le(F,1,.4),Le(F,.93,.35,.03),Le(F,1.08,.35,.06),Le(F,.86,.25,.09)),B==="swell"&&(y(F,{dur:.75,f:[[0,160],[.75,620]],gain:.5,sub:0,rattle:.6,rattleHz:20,rattleHz1:50,drive:8,breath:1,breathHz:3e3,formants:[[1200,3,1],[2600,4,.8]],hp:500,top:9e3,att:.7}),f(F,.75,{f0:800,f1:6e3,q:.8,gain:.3,att:.72}),Le(F,1.05,.8,.72))}function se(B){wt()&&(S(B),setTimeout(()=>{ce(B),setTimeout(et,1800)},B==="growlRoar"?520:60))}function Ee(B){wt()&&(Te(B),setTimeout(et,2600))}function De(B,F,$){f(B,.003,{type:"highpass",f0:1200,q:.7,gain:F,att:4e-4}),f(B,.03+Math.random()*.03,{f0:$,f1:$*.8,q:10,gain:F*2.2,att:5e-4}),f(B,.012,{f0:$*.45,q:3,gain:F*.9,att:5e-4})}function We(B,F=1){f(B,.008,{f0:4300,q:3,gain:.7*F,att:5e-4}),m(B,.16,{f0:120,f1:48,gain:.8*F,att:.002});let $=[[.02,3,.05,.45],[.13,5,.06,.7],[.25,8,.075,1]];for(let[ie,de,Ae,Fe]of $){for(let Ie=0;Ie<de;Ie++){let at=(Ie/de)**1.5;De(B+ie+at*Ae+Math.random()*.006,Fe*F*(.5+.5*Math.random())*1.15,900+Math.random()*3200)}m(B+ie,.07,{f0:95,f1:55,gain:.35*Fe*F,att:.002})}for(let ie=0;ie<45;ie++)f(B+.02+Math.random()*.4,.0015,{type:"highpass",f0:2600,q:.7,gain:(.14+.2*Math.random())*F,att:3e-4});for(let ie=0;ie<6;ie++)f(B+.03+ie*.06+Math.random()*.03,.09,{f0:380+Math.random()*500,f1:240,q:2.5,gain:.26*F,att:.01})}function Te(B){if(!wt())return;let F=e.currentTime+.005;if(We(F),s.frequency.cancelScheduledValues(F),s.frequency.setValueAtTime(18e3,F+.42),s.frequency.exponentialRampToValueAtTime(1400,F+.9),s.frequency.exponentialRampToValueAtTime(320,F+2.4),B==="chew")for(let $=1;$<=3;$++){let ie=F+.5*$;We(ie,.65-$*.08),f(ie+.12,.28,{f0:600,f1:220,q:2,gain:.2,att:.02})}B==="gulp"&&(m(F+.6,.38,{f0:300,f1:75,gain:.45,att:.02}),f(F+.6,.5,{type:"lowpass",f0:420,f1:160,q:2,gain:.25,att:.03}),m(F+1,.6,{type:"sawtooth",f0:66,f1:48,gain:.12,lp:260,am:15})),[1,2,3.2].forEach(($,ie)=>{let de=.5-ie*.14;m(F+$,.13,{f0:62,f1:42,gain:de,att:.005}),m(F+$+.17,.15,{f0:56,f1:38,gain:de*.7,att:.005})})}function et(){if(!e)return;let B=e.currentTime;s.frequency.cancelScheduledValues(B),s.frequency.setValueAtTime(Math.max(300,s.frequency.value),B),s.frequency.exponentialRampToValueAtTime(18e3,B+.9),i.gain.cancelScheduledValues(B),i.gain.setTargetAtTime(1,B,.4)}function wt(){return c&&h()&&(n.context||e.state==="running")}return{unlock(){if(!c)return;let B=h();B&&B.state!=="running"&&B.resume()},setEnabled(B){c=B,e&&(B?e.resume():(g(),e.suspend()))},get enabled(){return c},sting:he,useFile:X,setRecGain(B){q=B},input(){return h()?t:null},ambient:w,gape:b,freeze:S,pounce:ce,bite:Te,restore:et,preview:se,previewBite:Ee,cut:J,snap:oe,scream:tt,roarRaw:C,prepare:P,useBuffer:D,stop:()=>e&&g()}}var Na=location.hash==="#debug",Wn=!0,ni=(n,e)=>Math.max(0,Cf(n,e));rt.lights_pars_begin=rt.lights_pars_begin.replace("float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );","float distanceFalloff = 1.0 / pow( sqrt( lightDistance * lightDistance + 0.81 ), decayExponent );");var Wt=n=>document.getElementById(n),Ze=(n,e,t)=>Math.max(e,Math.min(t,n)),Jt=(n,e,t)=>n+(e-n)*t,Xt=n=>n*n*(3-2*n),bd=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t),yt=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i)),Qe=(n,e)=>n+Math.random()*(e-n),$t=matchMedia("(pointer: coarse)").matches,En=new T(-1.6,0,1.5),wd=1.62;var DS=1.7;var Ge={start:Wt("start"),startBtn:Wt("startBtn"),loadTxt:Wt("loadTxt"),sub:Wt("sub"),joy:Wt("joy"),knob:Wt("knob"),fps:Wt("fps"),hint:Wt("hint"),resume:Wt("resume"),prompt:Wt("prompt"),lampBtn:Wt("lampBtn"),raiseBtn:Wt("raiseBtn"),end:Wt("end"),again:Wt("again"),fsBtn:Wt("fsBtn"),pause:Wt("pause"),cockBtn:Wt("cockBtn"),fireBtn:Wt("fireBtn"),reloadBtn:Wt("reloadBtn")},wn;try{wn=new kl({antialias:!1,powerPreference:"high-performance"})}catch(n){throw Ge.loadTxt.textContent="\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694.",n}wn.outputColorSpace=Ns;wn.toneMapping=jn;wn.autoClear=!1;Wt("stage").appendChild(wn.domElement);var Di=wn.domElement,qt=new fs;qt.fog=new Po(new ge(.0035,.004,.0055),.009);var fe=new en(60,16/9,.05,1200);fe.rotation.order="YXZ";var es={uLanternPos:{value:new T},uEyeGain:{value:200},uEyeSelf:{value:0},uTime:{value:0},uEyeFall:{value:1}},is=`
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,NS=`
  attribute vec4 aRig; attribute vec4 aLeg;
  uniform vec4 uPose; uniform float uTail; uniform vec4 uGait;
  mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
    return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
  mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }
  mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }`,FS=`
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
  }`,US=`
  transformed = kneeP + rKnee * (transformed - kneeP);
  transformed = hipP + rHip * (transformed - hipP);
  transformed = T0 + rT * (transformed - T0);
  transformed = H0 + rH * (transformed - H0);
  transformed = N0 + rN * (transformed - N0);`;function zS(n,e,t){let i=new wi({color:16777215,roughness:.82,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new ge(n*.6,n*.56,n*.48)}),s={uBody:{value:new ge(n,n*.93,n*.8)},uFace:{value:new ge(e,e*.93,e*.8)},uPhase:{value:t},uPose:{value:new Ft},uTail:{value:0},uGait:{value:new Ft},uEyeOff:{value:0},uGone:{value:0}};return i.userData.own=s,i.onBeforeCompile=r=>{Object.assign(r.uniforms,es,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead;
        uniform float uTime; uniform float uPhase;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        ${NS}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${FS}
        objectNormal = rN * (rH * (rT * (rHip * (rKnee * objectNormal))));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        ${US}`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform float uEyeFall; uniform float uEyeOff; uniform float uGone; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
${is}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (uGone > 0.0 && vnoise3(vObj * 7.0) * 0.5 + 0.5 + 0.25 * vnoise3(vObj * 23.0) < uGone * 1.3) discard; // the cow falls away in pieces`).replace("#include <color_fragment>",`#include <color_fragment>
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
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), uEyeFall) + uEyeSelf * pow(fc, 4.0)) * (1.0 - uEyeOff); }`)},i.customProgramCacheKey=()=>"cow-rig-v5",i}async function Gf(n,e="",t="cows/cows.json"){let i=await(await fetch(e+t)).json(),s=0;return Promise.all(i.map(async r=>{let o=await(await fetch(e+r.file)).json(),a=atob(o.data),c=new Uint8Array(a.length);for(let C=0;C<a.length;C++)c[C]=a.charCodeAt(C);let l=c.buffer,h=r.vc,d=r.ic,u=0,f=new Int16Array(l,u,h*3);u+=h*6;let m=new Int16Array(l,u,h*3);u+=h*6;let v=new Uint16Array(l,u,d);u+=d*2;let p=new Int8Array(l,u,h*3);u+=h*3;let g=new Uint8Array(l,u,h*4);u+=h*4;let _=new Uint8Array(l,u,h*4);u+=h*4;let w=new Uint8Array(l,u,h*4);u+=h*4;let b=r.leg?new Uint8Array(l,u,h*4):new Uint8Array(h*4),y=new Float32Array(h*3),M=new Float32Array(h*3);for(let C=0;C<h*3;C++)y[C]=f[C]*r.ps,M[C]=m[C]*r.hs;let x=new Mt;x.setAttribute("position",new He(y,3)),x.setAttribute("normal",new He(new Int8Array(p),3,!0)),x.setAttribute("aMat",new He(new Uint8Array(g),4,!0)),x.setAttribute("aExt4",new He(new Uint8Array(_),4,!0)),x.setAttribute("aRig",new He(new Uint8Array(w),4,!0)),x.setAttribute("aLeg",new He(new Uint8Array(b),4,!0)),x.setAttribute("aHead",new He(M,3)),x.setIndex(new He(new Uint16Array(v),1)),x.boundingSphere=new Nn(new T(0,.8,0),2.2);let S=C=>{let R=new T,P=0,D=0,k=0;for(let L=0;L<h;L++)C(L)&&(R.x+=y[3*L],R.y+=y[3*L+1],R.z+=y[3*L+2],D+=w[4*L]/255,k+=w[4*L+1]/255,P++);return P?{p:R.divideScalar(P),wn:D/P,wh:k/P}:null};return x.userData.eye=S(C=>_[4*C]>128),x.userData.nose=S(C=>g[4*C]>128),n(++s/i.length),x}))}var Ph=[];function ag(n,e){for(let t of Ph)t.position.x=n,t.position.z=e;aa.uPC.value.set(n,e)}function BS(){let n=new Jn(400,400,8,8);n.rotateX(-Math.PI/2);let e=new st(n,cg());return Ph.push(e),kS=e,e}function OS(){let n=H.hill,e=(H.stations[0].x+H.stations[H.stations.length-1].x)/2,t=new Jn(n.width,n.depth,140,60);t.rotateX(-Math.PI/2),t.translate(e,0,H.front.z-n.start+.2-n.depth/2);let i=t.attributes.position;for(let s=0;s<i.count;s++)i.setY(s,Cf(i.getX(s),i.getZ(s)));return t.computeVertexNormals(),new st(t,cg())}function cg(){let n=new mn({color:3353119,roughness:1});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;
${is}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          // Sonoran desert floor: tan gravel, pale sandy washes, dark and light pebbles
          vec3 col = mix(vec3(0.15,0.125,0.095), vec3(0.21,0.175,0.13), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float wash = smoothstep(0.6, 0.8, vnoise3(vec3(q.x*0.07, 0.0, q.z*0.22))*0.5+0.5);
          col = mix(col, vec3(0.26,0.225,0.17), wash*0.55);
          float peb = vnoise3(q*38.0)*0.5+0.5;
          col *= 0.86 + 0.26*smoothstep(0.5, 0.8, peb) - 0.2*smoothstep(0.72, 0.9, c3);
          float burnt = 1.0 * (1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${En.x.toFixed(2)}, ${En.z.toFixed(2)})))); // the campfire's scorch (no campfire by day)
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`)},n}var kS=null,lg={uHaze:{value:new ge},uLift:{value:0}};function HS(){let n=new Dt,e=new Bt({fog:!1,side:Kt,uniforms:lg,vertexShader:"attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 uHaze; uniform float uLift; varying float vT; void main(){ gl_FragColor = vec4(uHaze * mix(vT, 1.0, uLift), 1.0); }"}),t=(i,s,r,o,a,c)=>{let h=[],d=[],u=[];for(let m=0;m<=420;m++){let v=-Math.PI+2*Math.PI*(m/420),p=Math.sin(v)*i,g=-Math.cos(v)*i,_=1-Math.abs(xf(v*5,o,.7,4)),w=s+r*_*_+2.2*xf(v*60,o+3.1,1.3,2);if(h.push(p,-4,g,p,w,g),d.push(a,c),m<420){let b=2*m;u.push(b,b+2,b+1,b+1,b+2,b+3)}}let f=new Mt;return f.setAttribute("position",new lt(h,3)),f.setAttribute("aT",new lt(d,1)),f.setIndex(u),new st(f,e)};return n.add(t(190,8,30,4.2,.95,.55),t(150,3,17,9.7,.85,.12)),Ph.push(n),n}var Wf=(n,e)=>n>H.clear.x0&&n<H.clear.x1&&e>H.clear.z0&&e<6,ii=null,tr=[],qf=0;function VS(n,e){qf=yt(qf,e?1:0,e?1.8:.7,n),Jl.uTime.value=performance.now()/1e3,Jl.uGust.value=qf,ii&&ii.update(K.pos.x,K.pos.z,fe);for(let t of tr)t.update(K.pos.x,K.pos.z,fe)}var ei=new T(1,0,.35).normalize(),Ih=[];function GS(n){let e=[3,7].map(i=>fm(i)),t=Ks("tumble-v1",.95);for(let i=0;i<4;i++){let s=.8+Math.random()*.5,r=new st(e[i%2],t);r.scale.setScalar(s),n.add(r),Ih.push({mesh:r,r:.28*s,pos:new T,speed:0,k:.8+Math.random()*.4,side:Math.random()-.5,phase:Math.random()*6})}}function hg(n,e){let t=e?(Math.random()-.5)*20:12+Math.random()*6,i=(Math.random()-.5)*24;n.pos.set(fe.position.x-ei.x*t+ei.z*i,n.r,fe.position.z-ei.z*t-ei.x*i),n.speed=0}var WS=new vt,qS=new T(ei.z,0,-ei.x);function XS(n,e){for(let t of Ih){let i=t.pos.x-fe.position.x,s=t.pos.z-fe.position.z;(Math.hypot(i,s)>28||i*ei.x+s*ei.z>20)&&hg(t,!1),t.speed=yt(t.speed,(e?3:.12)*t.k,e?1.4:.5,n),t.pos.x+=(ei.x+ei.z*t.side*.2)*t.speed*n,t.pos.z+=(ei.z-ei.x*t.side*.2)*t.speed*n;let r=(o,a,c)=>{let l=t.pos.x-o,h=t.pos.z-a,d=Math.hypot(l,h),u=c+t.r;d<u&&d>1e-4&&(t.pos.x=o+l/d*u,t.pos.z=a+h/d*u,t.speed*=.6)};for(let o of qe)for(let a of o.blockers)r(a.x,a.z,a.r);r(En.x,En.z,.7),t.phase+=n*t.speed*2.4,t.mesh.position.set(t.pos.x,ni(t.pos.x,t.pos.z)+t.r+Math.abs(Math.sin(t.phase))*.22*Math.min(1,t.speed/2.5),t.pos.z),t.mesh.quaternion.premultiply(WS.setFromAxisAngle(qS,t.speed*n/t.r))}}function YS(){let n=new Bt({side:nn,depthWrite:!1,fog:!1,uniforms:{uHor:{value:new ge(.028,.03,.038)},uZen:{value:new ge(.002,.0022,.003)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${is}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`}),e=new st(new qi(900,32,16),n);return Ph.push(e),e}var sd={uTime:{value:0}};function ZS(){let n=new Dt;n.position.copy(En);let e=new mn({color:5064771,roughness:1}),t=new Bo(.11,0);for(let f=0;f<12;f++){let m=f/12*Math.PI*2+Qe(-.1,.1),v=Qe(.48,.56),p=new st(t,e);p.position.set(Math.cos(m)*v,.04,Math.sin(m)*v),p.scale.set(Qe(.8,1.4),Qe(.6,1),Qe(.8,1.3)),p.rotation.set(Qe(0,3),Qe(0,3),Qe(0,3)),n.add(p)}let i=new mn({color:2365198,roughness:1,emissive:new ge(.35,.08,.01),emissiveIntensity:.5}),s=new Wi(.045,.06,.75,7);for(let f=0;f<5;f++){let m=new st(s,i),v=f/5*Math.PI*2;m.position.set(Math.cos(v)*.14,.17,Math.sin(v)*.14),m.rotation.set(0,-v,0),m.rotateZ(1.15),n.add(m)}let r=new Bt({transparent:!0,depthWrite:!1,blending:$n,side:Kt,uniforms:sd,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv; ${is}
      void main(){ vec2 p = vUv;
        float n = vnoise3(vec3(p.x*4.0, p.y*3.0 - uTime*2.4, uTime*0.6))*0.5+0.5;
        float n2 = vnoise3(vec3(p.x*9.0, p.y*7.0 - uTime*3.8, 1.7 + uTime*0.3))*0.5+0.5;
        float w = 1.0 - abs(p.x - 0.5)*2.0;
        float shape = w * w * (1.0 - p.y*0.85);
        float f = smoothstep(0.18, 0.62, shape * (n*0.75 + n2*0.5) * 1.5 - p.y*0.35);
        vec3 col = mix(vec3(1.0,0.22,0.02), vec3(1.0,0.72,0.28), smoothstep(0.3, 0.9, f)) * f * 6.0;
        gl_FragColor = vec4(col, f); }`}),o=new Jn(.62,.95);o.translate(0,.47,0);for(let f=0;f<3;f++){let m=new st(o,r);m.rotation.y=f/3*Math.PI,m.position.y=.05,n.add(m)}let a=70,c=new Float32Array(a*3),l=new Float32Array(a);for(let f=0;f<a;f++)l[f]=Math.random();let h=new Mt;h.setAttribute("position",new He(c,3)),h.setAttribute("aSeed",new He(l,1));let d=new Bt({transparent:!0,depthWrite:!1,blending:$n,uniforms:sd,vertexShader:`uniform float uTime; attribute float aSeed; varying float vA;
      void main(){ float t = fract(uTime*0.35 + aSeed); float a = aSeed*43.0;
        vec3 p = vec3(sin(a + t*3.0)*0.25*t, t*2.4, cos(a*1.7 + t*2.0)*0.25*t);
        vA = (1.0 - t) * step(0.0, t);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 3.0 * (1.0 - t*0.6) * 6.0 / max(1.0, -mv.z); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float m = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0,0.45,0.1)*4.0*vA*m, vA*m); }"}),u=new No(h,d);return u.frustumCulled=!1,n.add(u),n}var KS={uniforms:{tDiffuse:{value:null},uRes:{value:new le(960,540)},uCount:{value:0},uBrush:{value:1.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},JS={uniforms:{tDiffuse:{value:null},uRes:{value:new le(960,540)},uCount:{value:0},uExp:{value:.26},uDesat:{value:0},uSeed:{value:1},uFade:{value:0},uHurt:{value:0},uBars:{value:0},tMask:{value:null},uMaskOn:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uExp, uDesat, uSeed, uFade, uHurt, uBars, uMaskOn; uniform sampler2D tMask; varying vec2 vUv;
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
      // the letterbox: black bars above and below; when it leaps at you, it comes out over them
      if (vUv.y < uBars || vUv.y > 1.0 - uBars) c *= uMaskOn > 0.5 ? step(texture2D(tMask, vUv).r, 0.9999) : 0.0;
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`},rd=class{init(){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9*H.volume,this.master.connect(t.destination);let i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let p=0;p<i;p++)r[p]=Math.random()*2-1;this.noise=s;let o=this.loopNoise(),a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.6;let c=t.createGain();c.gain.value=.05,o.connect(a).connect(c).connect(this.master);let l=t.createOscillator(),h=t.createGain();l.frequency.value=.07,h.gain.value=.035,l.connect(h).connect(c.gain),l.start();let d=t.createOscillator(),u=t.createGain();d.frequency.value=.045,u.gain.value=160,d.connect(u).connect(a.frequency),d.start(),this.crickets=t.createGain(),this.crickets.gain.value=1,this.crickets.connect(this.master),this.cricketOn=!0;for(let p=0;p<6;p++)this.cricketLoop(Qe(-.9,.9),Qe(4e3,5200),Qe(.4,2));this.fireP=this.panner(En.x,.4,En.z,1.2);let f=this.loopNoise(),m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=260;let v=t.createGain();v.gain.value=.22,f.connect(m).connect(v).connect(this.fireP),this.crackleLoop(),this.breaths=[0,1,2].map(()=>{let p=this.panner(0,1,-4,1),g=this.loopNoise(),_=t.createBiquadFilter();_.type="bandpass",_.frequency.value=520,_.Q.value=.9;let w=t.createGain();return w.gain.value=0,g.connect(_).connect(w).connect(p),{p,g:w}})}loopNoise(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.loopStart=Math.random(),e.start(0,Math.random()*1.5),e}panner(e,t,i,s){let r=this.ctx.createPanner();return r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=s,r.rolloffFactor=1.3,this.setPos(r,e,t,i),r.connect(this.master),r}setPos(e,t,i,s){e.positionX?(e.positionX.value=t,e.positionY.value=i,e.positionZ.value=s):e.setPosition(t,i,s)}cricketLoop(e,t,i){let s=()=>{if(this.ctx){if(this.cricketOn){let r=this.ctx.currentTime,o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createStereoPanner();o.frequency.value=t,c.pan.value=e,a.gain.value=0;let l=2+Math.floor(Math.random()*3);for(let h=0;h<l;h++){let d=r+h*.055;a.gain.setValueAtTime(0,d),a.gain.linearRampToValueAtTime(.012,d+.012),a.gain.linearRampToValueAtTime(0,d+.04)}o.connect(a).connect(c).connect(this.crickets),o.start(r),o.stop(r+l*.055+.05)}setTimeout(s,Qe(350,1300))}};setTimeout(s,i*1e3)}crackleLoop(){let e=()=>{if(!this.ctx)return;let t=this.ctx.currentTime,i=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();i.buffer=this.noise,s.type="highpass",s.frequency.value=Qe(1200,3500),r.gain.setValueAtTime(Qe(.15,.5),t),r.gain.exponentialRampToValueAtTime(.001,t+Qe(.02,.07)),i.connect(s).connect(r).connect(this.fireP),i.start(t,Math.random()*1.5,.1),setTimeout(e,Math.random()<.2?Qe(20,60):Qe(80,420))};e()}step(){if(!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource(),i=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noise,i.type="bandpass",i.frequency.value=Qe(1800,3200),i.Q.value=.8,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(Qe(.05,.08),e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.16),t.connect(i).connect(s).connect(this.master),t.start(e,Math.random()*1.5,.2)}heart(e){if(!this.ctx||e<=0)return;let t=this.ctx.currentTime;for(let[i,s]of[[0,1],[.2,.7]]){let r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=this.ctx.createBiquadFilter();r.type="sine",r.frequency.setValueAtTime(62,t+i),r.frequency.exponentialRampToValueAtTime(38,t+i+.14),a.type="lowpass",a.frequency.value=140,o.gain.setValueAtTime(1e-4,t+i),o.gain.exponentialRampToValueAtTime(e*s,t+i+.012),o.gain.exponentialRampToValueAtTime(1e-4,t+i+.18),r.connect(a).connect(o).connect(this.master),r.start(t+i),r.stop(t+i+.2)}}hush(e){if(!this.ctx)return;let t=this.ctx.currentTime,i=this.master.gain;i.cancelScheduledValues(t),i.setValueAtTime(i.value,t),i.setTargetAtTime(e?1e-4:.9*H.volume,t,e?.05:.5)}async loadMusic(){if(!this.ctx)return;let e=async a=>{try{return await this.ctx.decodeAudioData(await(await fetch(a)).arrayBuffer())}catch{return null}};this.musicG=this.ctx.createGain(),this.musicG.gain.value=H.music.drone,this.musicG.connect(this.master);let[t,i,s,r,...o]=await Promise.all(H.music.drones.concat(H.moo.file,H.gun.file,H.fight.twistSound.files).map(e));this.drones=[t,i].filter(Boolean),this.mooBuf=s,this.gunBuf=r,this.twists=o.filter(Boolean),this.droneAt=this.ctx.currentTime+.1,this.mooAt=this.ctx.currentTime+Qe(...H.moo.every)}mooTick(e){if(!this.mooBuf||this.ctx.currentTime<this.mooAt)return;this.mooAt=this.ctx.currentTime+Qe(...H.moo.every);let t=e.filter(i=>i.mesh.visible&&!i.dead&&!i.gone);t.length&&this.mooFrom(t[Math.floor(Math.random()*t.length)])}mooFrom(e,t=H.moo.gain,i=Qe(...H.moo.rate)){if(!this.mooBuf)return;let s=e.headWorld??e.mesh.position,r=this.ctx.createBufferSource(),o=this.ctx.createGain(),a=this.panner(s.x,s.y,s.z,1);r.buffer=this.mooBuf,r.playbackRate.value=i,o.gain.value=t,r.connect(o).connect(a),r.start(),r.onended=()=>a.disconnect(),this.moos=(this.moos??0)+1}musicTick(){if(!this.drones?.length||this.ctx.currentTime<this.droneAt-1)return;this.droneAt=Math.max(this.droneAt,this.ctx.currentTime+.05);let e=this.ctx.createBufferSource();e.buffer=this.drones[Math.floor(Math.random()*this.drones.length)],e.connect(this.musicG),e.start(this.droneAt),this.droneAt+=e.buffer.duration-H.music.overlap}silenceCrickets(){if(!this.ctx)return;this.cricketOn=!1;let e=this.ctx.currentTime;this.crickets.gain.cancelScheduledValues(e),this.crickets.gain.setTargetAtTime(0,e,.05)}update(e,t,i,s){if(!this.ctx)return;this.musicTick(),this.mooTick(i);let r=this.ctx.listener;r.positionX?(r.positionX.value=e.x,r.positionY.value=e.y,r.positionZ.value=e.z,r.forwardX.value=t.x,r.forwardY.value=t.y,r.forwardZ.value=t.z,r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(e.x,e.y,e.z),r.setOrientation(t.x,t.y,t.z,0,1,0)),i.map(a=>[a,a.mesh.position.distanceToSquared(e)]).sort((a,c)=>a[1]-c[1]).slice(0,3).forEach(([a],c)=>{let l=this.breaths[c],h=a.headWorld;this.setPos(l.p,h.x,h.y,h.z);let d=Math.sin(s*1.3+a.phase);l.g.gain.value=.05*Math.max(0,d)**3})}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}},od=class extends rd{init(){if(super.init(),!this.ctx)return;let e=this.ctx;this.hiss=e.createGain(),this.hiss.gain.value=0;let t=this.loopNoise(),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=.5,t.connect(i).connect(this.hiss).connect(this.master)}burst(e,t,i,s,r,o=.005){if(!this.ctx)return;let a=this.ctx.currentTime,c=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();return c.buffer=this.noise,l.type=e,l.frequency.value=t,l.Q.value=i,h.gain.setValueAtTime(0,a),h.gain.linearRampToValueAtTime(s,a+o),h.gain.exponentialRampToValueAtTime(8e-4,a+r),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()*1.5,r+.1),{f:l,t:a}}gust(){if(!this.ctx)return;let e=this.burst("bandpass",420,.7,.16,2.4,.7);e&&(e.f.frequency.setValueAtTime(300,e.t),e.f.frequency.linearRampToValueAtTime(820,e.t+1.2),e.f.frequency.linearRampToValueAtTime(380,e.t+2.4))}click(){if(this.burst("highpass",3200,.7,.12,.03),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.frequency.value=1100,i.gain.setValueAtTime(.04,e),i.gain.exponentialRampToValueAtTime(5e-4,e+.04),t.connect(i).connect(this.master),t.start(e),t.stop(e+.05)}puff(){this.burst("lowpass",500,.5,.18,.22,.01)}whoosh(){let e=this.burst("bandpass",400,.9,.22,.7,.05);e&&e.f.frequency.exponentialRampToValueAtTime(1800,e.t+.45)}creak(e){if(!this.ctx)return;let t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();i.type="sawtooth";let o=Qe(1300,1700);i.frequency.setValueAtTime(o,t),i.frequency.linearRampToValueAtTime(o*Qe(1.1,1.3),t+.09),s.type="bandpass",s.frequency.value=2400,s.Q.value=6,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.012*e,t+.02),r.gain.exponentialRampToValueAtTime(3e-4,t+.12),i.connect(s).connect(r).connect(this.master),i.start(t),i.stop(t+.14)}sputter(){this.burst("highpass",Qe(1500,3e3),.8,.05,.04)}tick(e,t,i){if(!this.ctx)return;let s=this.ctx.currentTime+e,r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=this.noise,o.type="bandpass",o.frequency.value=t,o.Q.value=3,a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(i,s+.002),a.gain.exponentialRampToValueAtTime(5e-4,s+.035),r.connect(o).connect(a).connect(this.master),r.start(s,Math.random()*1.5,.05)}cock(){[[0,3800,.05],[.05,3400,.06],[.11,3e3,.07],[.2,2200,.14]].forEach(([e,t,i])=>this.tick(e,t,i))}dry(){this.tick(0,1800,.2),this.tick(.004,4200,.08)}gunshot(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();i.buffer=this.noise,s.type="lowpass",s.frequency.setValueAtTime(9e3,t),s.frequency.exponentialRampToValueAtTime(380,t+.3),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(1,t+.002),r.gain.exponentialRampToValueAtTime(.001,t+.7),i.connect(s).connect(r).connect(this.master),i.start(t,Math.random()*1.5,.8);let o=e.createOscillator(),a=e.createGain();o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(36,t+.2),a.gain.setValueAtTime(.8,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),o.connect(a).connect(this.master),o.start(t),o.stop(t+.34);for(let[c,l,h]of[[.42,.2,1700],[.78,.13,1200],[1.25,.085,850],[1.9,.05,600]]){let d=e.createBufferSource(),u=e.createBiquadFilter(),f=e.createGain();d.buffer=this.noise,u.type="lowpass",u.frequency.value=h,f.gain.setValueAtTime(0,t+c),f.gain.linearRampToValueAtTime(l,t+c+.03),f.gain.exponentialRampToValueAtTime(6e-4,t+c+1.1),d.connect(u).connect(f).connect(this.master),d.start(t+c,Math.random()*1.5,1.2)}}thud(e=.5){if(this.burst("lowpass",160,.7,e,.45,.004),!this.ctx)return;let t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.frequency.setValueAtTime(70,t),i.frequency.exponentialRampToValueAtTime(30,t+.25),s.gain.setValueAtTime(e*.8,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(s).connect(this.master),i.start(t),i.stop(t+.32)}setHiss(e){this.hiss&&(this.hiss.gain.value=.006*e)}},Oe=new od,sr=new fs,Ii=new en(70,16/9,.01,10),rr=.85,In=-1,Gn=new Dt;Gn.scale.setScalar(rr);sr.add(Gn);var co=new Dt;Gn.add(co);var ug=new T(0,-.248,0),ya={uTime:{value:0},uLevel:{value:1},uBend:{value:0}};function Um(n,e,t){let i=new mn({color:n,metalness:e,roughness:t,fog:!1});return i.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${is}`).replace("#include <color_fragment>",`#include <color_fragment>
        { float n = vnoise3(vLP*90.0)*0.5+0.5; float n2 = vnoise3(vLP*21.0)*0.5+0.5;
          float wear = smoothstep(0.62, 0.8, n*0.6 + n2*0.5);
          diffuseColor.rgb = mix(diffuseColor.rgb * (0.8 + 0.35*n2), vec3(0.32,0.2,0.12), smoothstep(0.55, 0.9, n2)*0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55,0.52,0.48), wear*0.5); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*60.0))*0.15, 0.05, 1.0);`)},i}function Kr(n,e,t=40){let i=new ms(n.map(([s,r])=>new le(s,r)),t);return i.computeVertexNormals(),new st(i,e)}function rh(n,e,t,i=48,s=!1){let r=new Dr(n.map(o=>new T(...o)),s);return new st(new Ho(r,i,e,8,s),t)}var ad,eo,jr;function $S(){let n=Um(1907481,.55,.5),e=Um(11043908,1,.32),t=new mn({color:3810838,roughness:.75,fog:!1});ad=new wi({color:16773852,roughness:.06,metalness:0,transparent:!0,opacity:.2,depthWrite:!1,side:Kt,emissive:new ge(1,.55,.2),emissiveIntensity:0,fog:!1,clearcoat:1,clearcoatRoughness:.05});let i=co;i.add(Kr([[0,-.34],[.066,-.34],[.071,-.336],[.074,-.322],[.072,-.3],[.064,-.285],[.04,-.279],[0,-.278]],n)),i.add(Kr([[0,-.28],[.03,-.28],[.031,-.27],[.028,-.262],[.012,-.258],[0,-.258]],e,28));let s=new st(new Wi(.009,.009,.006,16),e);s.rotation.z=Math.PI/2,s.position.set(.04,-.268,0),i.add(s);let r=new st(new Wi(.0025,.0025,.012,8),e);r.rotation.z=Math.PI/2,r.position.set(.033,-.268,0),i.add(r);let o=Kr([[.032,-.265],[.05,-.25],[.058,-.222],[.056,-.185],[.046,-.158],[.036,-.142]],ad,40);o.renderOrder=2,i.add(o),i.add(Kr([[0,-.143],[.045,-.143],[.047,-.138],[.045,-.131],[0,-.13]],n,32)),i.add(Kr([[0,-.132],[.06,-.132],[.065,-.122],[.062,-.104],[.05,-.088],[.022,-.08],[.012,-.076],[0,-.075]],n,40)),i.add(Kr([[0,-.08],[.012,-.08],[.013,-.072],[.008,-.066],[0,-.065]],n,20));for(let v of[-1,1])i.add(rh([[v*.066,-.29],[v*.077,-.25],[v*.078,-.2],[v*.072,-.15],[v*.064,-.118]],.0075,n,32));for(let v=0;v<4;v++){let p=Math.PI/4+v*Math.PI/2,g=Math.cos(p),_=Math.sin(p),w=[[.04,-.262],[.058,-.248],[.064,-.222],[.062,-.185],[.052,-.158],[.042,-.146]];i.add(rh(w.map(([b,y])=>[g*b,y,_*b]),.0016,n,24))}for(let[v,p]of[[-.236,.0635],[-.18,.0605]]){let g=[];for(let _=0;_<24;_++){let w=_/24*Math.PI*2;g.push([Math.cos(w)*p,v,Math.sin(w)*p])}i.add(rh(g,.0017,n,64,!0))}let a=[];for(let v=0;v<=24;v++){let p=v/24*Math.PI;a.push([Math.cos(p)*.064,-.112+Math.sin(p)*.112,0])}i.add(rh(a,.0024,n,48));let c=new st(new Wi(.0105,.0105,.056,14),t);c.rotation.z=Math.PI/2,i.add(c);let l=new Bt({transparent:!0,depthWrite:!1,blending:$n,side:Kt,uniforms:ya,fog:!1,vertexShader:"uniform float uBend; uniform float uTime; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; p.x += uBend * (uv.y*uv.y) * 0.012 + sin(uTime*13.0 + uv.y*6.0)*0.0012*uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:`uniform float uTime; uniform float uLevel; varying vec2 vUv; ${is}
      void main(){ vec2 p = vUv - vec2(0.5, 0.0);
        float h = 0.25 + 0.75*uLevel;
        float n = vnoise3(vec3(p.x*6.0, vUv.y*4.0 - uTime*3.0, uTime*0.7))*0.5+0.5;
        float w = (0.5 - abs(p.x)*2.0/max(0.15, 1.0 - vUv.y/h*0.9)) * 2.0;
        float body = smoothstep(0.0, 0.25, w) * smoothstep(h, h*0.55, vUv.y + n*0.12) * smoothstep(0.0, 0.08, vUv.y);
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.86,0.55), smoothstep(0.2, 0.9, body)) * body * 9.0 * uLevel;
        col += vec3(0.25,0.35,1.0) * smoothstep(0.12, 0.0, vUv.y) * smoothstep(0.0, 0.3, w) * 1.5 * uLevel;
        gl_FragColor = vec4(col, body); }`}),h=new Jn(.02,.05);h.translate(0,.025,0),eo=new Dt;for(let v=0;v<3;v++){let p=new st(h,l);p.rotation.y=v/3*Math.PI,p.renderOrder=3,eo.add(p)}eo.position.set(0,-.258,0),i.add(eo);let d=document.createElement("canvas");d.width=d.height=64;let u=d.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,"rgba(255,255,255,0.5)"),f.addColorStop(.55,"rgba(255,255,255,0.12)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let m=new Gi({map:new Bs(d),color:new ge(1,.55,.2),transparent:!0,blending:$n,depthWrite:!1,opacity:0,fog:!1});jr=new ds(m),jr.scale.set(.1,.1,1),jr.position.copy(ug),jr.renderOrder=4,i.add(jr)}function fg(){let n=new wi({color:16777215,roughness:.62,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new ge(.26,.2,.14),fog:!1});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP;
${is}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.34, 0.23, 0.135);
          float g1 = vnoise3(vLP*420.0)*0.5+0.5, g2 = vnoise3(vLP*90.0)*0.5+0.5;
          c *= (0.8 + 0.3*g2) * (0.9 + 0.14*g1);
          float dirt = smoothstep(0.55, 0.85, vnoise3(vLP*48.0 + 3.1)*0.5+0.5);
          c = mix(c, c*vec3(0.55, 0.5, 0.46), dirt*0.6);
          c *= mix(1.0, vAtt.x, 0.85);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*140.0))*0.1, 0.4, 0.85);`)},n}function jS(){let n=new wi({color:16777215,roughness:.95,metalness:0,sheen:1,sheenRoughness:.7,sheenColor:new ge(.075,.07,.068),side:Kt,fog:!1});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${is}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { float ang = atan(position.z, position.x);
          float bunch = 1.0 + 1.3*exp(-max(position.y - 0.02, 0.0)*28.0); // cloth bunches up just behind the hem
          float fold = (0.0024*sin(position.y*85.0 + sin(position.y*21.0)*2.0 + ang*1.5) + 0.0016*vnoise3(position*38.0)) * bunch;
          transformed += normal * fold * smoothstep(0.012, 0.03, position.y); }
        vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${is}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.05, 0.043, 0.038);
          c *= 0.8 + 0.4*(vnoise3(vLP*300.0)*0.5+0.5);
          c *= 0.7 + 0.3*smoothstep(-0.012, 0.004, vLP.y); // the inside of the hem
          diffuseColor.rgb = c; }`)},n}var QS={wristLocal:new T(.0208*In,.0162,.141),wristAxis:new T(.3384*In,-.3644,.8676),shoulder:new T(.26*In,-.3,.02),fore:.26*rr,upper:.29*rr,pole:new T(.75*In,-.65,.1).normalize()},eb={wristLocal:new T(.0277,-.1049,.1348),wristAxis:new T(.2376,-.329,.9137),shoulder:new T(.24,-.31,.04),fore:.26*rr,upper:.29*rr,pole:new T(.75,-.65,.1).normalize()},ts=null,cd=null;function tb(){ts=dg(QS,Gn)}function dg(n,e){let t={P:n,pivot:e,root:new Dt,W:new T,E:new T,f:new T,u:new T};sr.add(t.root);let i=t,s=jS(),r=.26+.03,o=[[.0355,-.0115],[.041,-.0135],[.0448,-.0095],[.0462,-.002],[.0456,.008],[.044,.015]];for(let h=.022;h<=r+1e-6;h+=.007)o.push([.0438+.008*(h/r),h]);let a=new ms(o.map(([h,d])=>new le(h,d)),36);a.scale(1.08,1,1),i.fore=new st(a,s),i.elbow=new st(new qi(.051,28,18),s);let c=.29+.18,l=new Wi(.06,.052,c,28,24,!0);l.translate(0,c/2,0),i.up=new st(l,s);for(let h of[i.fore,i.elbow,i.up])h.scale.setScalar(rr),i.root.add(h);return t}var Jr=new T,ti=new T,to=new T,Pn=new T,no=new ct,oh=new vt,zm=new vt;function ld(n){let e=n.P,t=n.pivot;n.W.copy(e.wristLocal),t.localToWorld(n.W),Jr.subVectors(e.shoulder,n.W);let i=Jr.length();Jr.divideScalar(i);let s=e.fore,r=e.upper;i=Ze(i,Math.abs(s-r)+.001,s+r-.001);let o=(s*s-r*r+i*i)/(2*i),a=Math.sqrt(Math.max(0,s*s-o*o));ti.copy(e.pole).addScaledVector(Jr,-e.pole.dot(Jr)).normalize(),n.E.copy(n.W).addScaledVector(Jr,o).addScaledVector(ti,a),n.f.subVectors(n.E,n.W).normalize(),n.u.subVectors(e.shoulder,n.E).normalize()}var Bm=new T;function nb(n,e,t){let i=n.P,s=n.pivot;for(let r=0;r<2;r++)ld(n),Pn.copy(i.wristAxis).transformDirection(s.matrixWorld),oh.setFromUnitVectors(Pn,n.f),zm.identity().slerp(oh,e),s.quaternion.premultiply(zm),Pn.set(1,0,0).applyQuaternion(s.quaternion),ti.copy(Pn).addScaledVector(t,-Pn.dot(t)).normalize(),oh.setFromUnitVectors(Pn,ti),s.quaternion.premultiply(oh),s.updateMatrixWorld(!0);ld(n)}function pg(n){let e=n.P,t=n.pivot;Pn.set(1,0,0).transformDirection(t.matrixWorld),ti.copy(Pn).addScaledVector(n.f,-Pn.dot(n.f)).normalize(),to.crossVectors(ti,n.f),no.makeBasis(ti,n.f,to),n.fore.quaternion.setFromRotationMatrix(no),n.fore.position.copy(n.W),n.elbow.position.copy(n.E),Pn.copy(ti).addScaledVector(n.u,-ti.dot(n.u)).normalize(),to.crossVectors(Pn,n.u),no.makeBasis(Pn,n.u,to),n.up.quaternion.setFromRotationMatrix(no),n.up.position.copy(n.E)}function hd(n,e){let t=atob(n.data),i=new Uint8Array(t.length);for(let p=0;p<t.length;p++)i[p]=t.charCodeAt(p);let s=i.buffer,r=n.vc,o=n.ic,a=0,c;n.i32&&(c=new Uint32Array(s,a,o),a+=o*4);let l=new Int16Array(s,a,r*3);a+=r*6,n.i32||(c=new Uint16Array(s,a,o),a+=o*2);let h=new Int8Array(s,a,r*3);a+=r*3;let d=new Uint8Array(s,a,r*2),u=new Float32Array(r*3);for(let p=0;p<r*3;p++)u[p]=l[p]*n.ps;let f=new Int8Array(h),m=n.i32?new Uint32Array(c):new Uint16Array(c);if(e){for(let p=0;p<r;p++)u[3*p]=-u[3*p],f[3*p]=-f[3*p];for(let p=0;p<m.length;p+=3){let g=m[p+1];m[p+1]=m[p+2],m[p+2]=g}}let v=new Mt;return v.setAttribute("position",new He(u,3)),v.setAttribute("normal",new He(f,3,!0)),v.setAttribute("aAtt",new He(new Uint8Array(d),2,!0)),v.setIndex(new He(m,1)),v.computeBoundingSphere(),v}async function ib(){let n=await(await fetch("hand.json")).json();Gn.add(new st(hd(n,In<0),fg()))}var bn=new Dt;bn.scale.setScalar(rr);var pt={t:0,kick:9,thumb:0,aim:0,shots:0,reload:0},bh=null,ot=null,io=null,Ci=null,wh=null,Ea=null,mg=[],Ta=-.2311,xa=Tf(()=>Oe.ctx||null,()=>Oe.master);function sb(){let n=bt?.input();if(!n||!Oe.gunBuf){rb.bang(wf);return}let e=Oe.ctx.createBufferSource(),t=Oe.ctx.createGain();e.buffer=Oe.gunBuf,t.gain.value=H.gun.fileLoud,e.connect(t).connect(n),e.start()}var rb=Tf(()=>Oe.ctx||null,n=>{let e=bt?.input();if(!e)return Oe.master;let t=n.createGain();return t.gain.value=H.gun.loud,t.connect(e),t}),Lh={click:(n,e)=>xa.click(n,e),shot:()=>pb(),dry:()=>{Oe.dry(),Hb()},slide:()=>xa.slide(),drop:()=>xa.drop(Ef),insert:()=>xa.insert()},ob=new T(.02,-.12,-.28),ab=new vt().setFromRotationMatrix((()=>{let n=new T(0,.97,.25).normalize(),e=new T(.8,-.1,.6);return e.addScaledVector(n,-e.dot(n)).normalize(),new ct().makeBasis(n,new T().crossVectors(e,n),e)})()),ro={yaw:0,roll:.18,aimD:5},gg=new T(.14,-.11,-.29),Om=new ct,pi=new T,cb=new vt,lb=new T(0,1,0);function xg(n){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);if(i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.45)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,128,128),n){t.globalCompositeOperation="lighter",t.fillStyle="rgba(255,255,255,0.5)";for(let s=0;s<7;s++)t.save(),t.translate(64,64),t.rotate(s/7*Math.PI*2+Math.random()*.4),t.beginPath(),t.moveTo(0,-5),t.lineTo(60,0),t.lineTo(0,5),t.fill(),t.restore()}return new Bs(e)}function hb(){sr.add(bn),Ci=new ds(new Gi({map:xg(!0),color:new ge(1,.8,.5),blending:$n,transparent:!0,depthWrite:!1,fog:!1})),Ci.position.set(0,0,Ta-.035),Ci.scale.setScalar(.16),Ci.visible=!1,Ci.renderOrder=5,bn.add(Ci),wh=new hi(new ge(1,.75,.45),0,2.5,2),sr.add(wh),Ea=new hi(new ge(1,.8,.55),0,45,1.5),qt.add(Ea),cd=dg(eb,bn)}async function ub(){let[n,e,t]=await Promise.all([...["gunhand.json","gunthumb.json"].map(async o=>(await fetch(o)).json()),em("revolver/colt75.json")]);ot=t,bn.add(ot.group),Ta=ot.muzzle.z,Ci.position.z=Ta-.035;let i=Q0(wn,["night"]).night,s=new Set;ot.group.traverse(o=>{o.material&&s.add(o.material)});for(let o of s)o.envMap=i,o.needsUpdate=!0;mg=[...s];let r=fg();bn.add(new st(hd(n,!1),r)),io=new Dt,io.position.fromArray(e.origin),bn.add(io),io.add(new st(hd(e,!1),r))}function Fa(){fn&&Wn&&ot&&bf(ot,Lh)&&(pt.t=0)}function Dh(){fn&&Wn&&ot&&ot.state.cocked&&nm(ot,Lh)&&(pt.t=0)}function Aa(){return fn&&Wn&&ot&&Mf(ot,Lh)?(pt.t=0,!0):!1}var ws=H.gun.recoil,fb=n=>n<.025?n/.025:Math.exp(-(n-.025)/ws.time)*(1+.15*Math.sin((n-.025)*30)*Math.exp(-(n-.025)/.05));function db(n,e){if(!ot)return;pt.t+=n,pt.kick+=n,im(ot,n,Lh);let t=ot.state.anim,i=t?.type==="cock";pt.thumb=yt(pt.thumb,i&&t.t<.27?1:0,i?22:9,n),pt.aim=yt(pt.aim,!t&&!ot.state.cocked&&pt.t>2.5?0:1,4,n),pt.reload=yt(pt.reload,t?.type==="reload"?1:0,6,n);for(let c of mg)c.envMapIntensity=.12+.88*Eh.intensity;io&&io.rotation.set(.55*pt.thumb,-.25*pt.thumb,.35*pt.thumb);let s=fb(pt.kick),r=Sd.copy(gg);r.y+=.02*pt.aim-.012*(1-pt.aim)+ws.up*s,r.z+=ws.back*s,r.x-=Ss*.45,r.y+=ba*.45;let o=Ln<H.hp?Jt(1,H.hurt.shake[Math.min(Ln,H.hurt.shake.length-1)],so):1;if(r.x+=Math.sin(e*.31+1)*.0012+Math.sin(e*9.7)*Math.sin(e*5.3)*5e-4*o,r.y+=Math.sin(e*11.3+.7)*Math.sin(e*6.1)*5e-4*(o-1),r.y+=Math.sin(e*.27+2)*.0012+Math.sin(e*1.3)*8e-4,pi.set(0,-.7*(1-pt.aim),-ro.aimD),pt.pointT=(pt.pointT??9)+n,pt.pointK=pt.pointT<H.gun.point?pt.pointK??0:yt(pt.pointK??0,0,4,n),pt.pointK>.001&&pi.lerp(wg,pt.pointK),Om.lookAt(r,pi,lb),bn.quaternion.setFromRotationMatrix(Om),bn.quaternion.multiply(cb.setFromEuler(aw.set(ws.flip*s-ba*.6,ro.yaw+Ss*.5,ro.roll-Ss*.4))),bn.position.copy(r),pt.reload>.001){let c=pt.reload*pt.reload*(3-2*pt.reload);bn.position.lerp(ob,c),bn.quaternion.slerp(ab,c)}bn.updateMatrixWorld(!0),ld(cd),pg(cd);let a=Math.max(0,1-pt.kick/.06);Ci.visible=a>0,Ci.material.rotation=pt.shots*1.7,Ci.scale.setScalar(.12+.08*a),pi.set(0,0,Ta-.04),bn.localToWorld(pi),wh.position.copy(pi),wh.intensity=30*a,Ea.position.copy(pi).applyQuaternion(fe.quaternion).add(fe.position),Ea.intensity=140*a*a}var $r=new T,ji=new T,yh=new T;function nr(n,e,t,i){let s=n.x-t.x,r=n.y-t.y,o=n.z-t.z,a=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-i*i,l=a*a-c;if(l<0)return 1/0;let h=-a-Math.sqrt(l);return h>0?h:1/0}function pb(){pt.kick=0,pt.shots++,sb(),G.shotT=0,G.shotYaw=(Math.random()-.5)*2*ws.yaw,Pi(ws.buzz),$r.copy(fe.position),ji.copy(vd?xd:ns).add(yh.set((Math.random()-.5)*.012,(Math.random()-.5)*.012,(Math.random()-.5)*.012)).normalize(),vd=!1;let n=1/0,e=null;{[e,n]=Rb($r,ji);let i=Wb($r,ji);i<n&&(n=i,e="fight")}let t=ji.y<-.001?-$r.y/ji.y:1/0;if(e&&n<t&&n<80)if(e==="fight")Rg();else{let i=yh.copy($r).addScaledVector(ji,n).clone();Eg(e),e.mon||Km(i,e)}else if(t<70){let i=yh.copy($r).addScaledVector(ji,t);fd(i,.6,[.16,.13,.1]),U.on||Km(i.clone(),null)}pi.set(0,0,Ta-.06),bn.localToWorld(pi),pi.applyQuaternion(fe.quaternion).add(fe.position);for(let i=0;i<4;i++)fd(pi,1.3,[.55,.54,.52],ji);for(let i of qe)if(!i.dead){let s=Math.hypot(i.mesh.position.x-K.pos.x,i.mesh.position.z-K.pos.z);i.startle=Math.max(i.startle||0,Ze(1.3-s/30,.3,1)),i.ai.graze=!1,i.ai.t=Qe(.05,.3),i.ai.flick=1}}var ud=[],Xf=null;function fd(n,e,t,i){Xf||(Xf=xg(!1));let s=ud.find(r=>r.life<=0);s||(s={sp:new ds(new Gi({map:Xf,transparent:!0,depthWrite:!1})),life:0},qt.add(s.sp),ud.push(s)),s.life=s.max=e>1?Qe(1.8,2.6):.7,s.size=e,s.col=t,s.sp.position.copy(n),s.v=new T((Math.random()-.5)*.4,.25+Math.random()*.2,(Math.random()-.5)*.4),i&&s.v.addScaledVector(i,1.5+Math.random()),s.sp.visible=!0}function mb(n){for(let e of ud){if(e.life<=0)continue;e.life-=n;let t=1-e.life/e.max;e.sp.position.addScaledVector(e.v,n),e.v.multiplyScalar(Math.exp(-n*1.6)),e.sp.scale.setScalar(e.size*(.25+.9*Math.sqrt(t)));let i=.04+.35*ae.level+Ea.intensity*.004;e.sp.material.color.setRGB(e.col[0]*i,e.col[1]*i,e.col[2]*i),e.sp.material.opacity=.55*(1-t),e.sp.visible=e.life>0}}function gb(n,e){n.dead=!0,n.deadT=0,n.staring=!1,n.speed=0;let t=Math.cos(n.heading),i=-Math.sin(n.heading);n.fallSide=e.x*t+e.z*i>=0?1:-1,n.mesh.rotation.order="YZX",Oe.thud(.25)}function xb(n,e){n.deadT+=e;let t=n.deadT,i=Xt(Ze(t/.35,0,1)),s=Ze((t-.3)/.75,0,1),r=s*s;n.mesh.rotation.y=n.heading,n.mesh.rotation.x=.1*i*(1-s),n.mesh.rotation.z=-n.fallSide*1.45*r,n.mesh.position.y=(n.y0||0)-.12*n.s*i*(1-s)+.2*n.s*r,!n.thudded&&s>=1&&(n.thudded=!0,Oe.thud(.6),fd(n.mesh.localToWorld(yh.set(0,1,0)),.9,[.2,.17,.13]));let o=n.mesh.material.userData.own;o.uPose.value.set(.2*n.fallSide,-.5*i,.1,-.4*i),o.uTail.value=0,o.uGait.value.set(0,0,0,0),n.mesh.updateMatrixWorld();let a=.9*n.s*r,c=Math.cos(n.heading)*n.fallSide*a,l=-Math.sin(n.heading)*n.fallSide*a;n.blk0||(n.blk0=n.blockers.map(h=>[h.x,h.z])),n.blockers.forEach((h,d)=>{h.x=n.blk0[d][0]+c,h.z=n.blk0[d][1]+l}),n.headWorld.set(0,1,1.3).applyMatrix4(n.mesh.matrixWorld)}var Eh=new hi(new ge(1,.7,.38),1,1.5,2),dd=new hi(new ge(1,.52,.2),9,0,2),_h=new Fr(1712176,525828,.12);sr.add(Eh,dd,_h);var pd=YS(),vb=HS();qt.add(pd,BS(),vb);qt.add(OS());qt.add(ZS());var vg=9.5,xi=new hi(new ge(1,.82,.6),vg,40,1.4),Th=new hi(new ge(1,.52,.2),9,7.5,2);Th.position.copy(En).add(new T(0,.5,0));var Ed=new qo(new ge(.55,.62,.8),.05);Ed.position.set(-20,25,-45);var yg=new Fr(790552,262914,.05);qt.add(Ed,yg);qt.add(xi,Th);GS(qt);var ss=new ql(wn);ss.addPass(new oa(qt,fe));var Td=new oa(sr,Ii);Td.clear=!1;Td.clearDepth=!0;ss.addPass(Td);var Nh=new Xs(KS),yb=new Ys(new le(960,540),.55,.3,2.2),_g=new Ys(new le(960,540),.025,1,0),kt=new Xs(JS);ss.addPass(Nh);ss.addPass(yb);ss.addPass(_g);ss.addPass(kt);var md=540;function Ad(){let n=innerWidth,e=innerHeight,t=Math.min(window.devicePixelRatio||1,md/Math.min(n,e));wn.setPixelRatio(t),wn.setSize(n,e),ss.setPixelRatio(t),ss.setSize(n,e);let i=n/e;fe.aspect=i,Ii.aspect=i,fe.fov=i>=1.3?60:Math.min(88,Ki.radToDeg(2*Math.atan(Math.tan(Ki.degToRad(40))/i))),Ii.fov=i>=1.3?70:Math.min(95,Ki.radToDeg(2*Math.atan(Math.tan(Ki.degToRad(46))/i))),fe.updateProjectionMatrix(),Ii.updateProjectionMatrix(),kt.uniforms.uRes.value.set(Math.round(n*t),Math.round(e*t)),Nh.uniforms.uRes.value.copy(kt.uniforms.uRes.value),ii&&ii.setPixel(fe,kt.uniforms.uRes.value.y),document.body.classList.toggle("portrait",n<e)}addEventListener("resize",Ad);Ad();var K={pos:new T(H.stations[0].x,0,H.standZ),vel:new T,yaw:0,pitch:H.look.pitch,bob:0,stepPhase:0},Ht=new Set,fn=!1,bs=!1,Es=$t,_t={id:null,cx:0,cy:0,x:0,y:0},gi={id:null,x:0,y:0};function Rd(){if(!$t)try{let n=Di.requestPointerLock&&Di.requestPointerLock();n&&n.catch&&n.catch(()=>{Es=!0})}catch{Es=!0}}document.addEventListener("pointerlockchange",()=>{bs=document.pointerLockElement===Di,bs&&(Es=!1),!bs&&fn&&!$t&&!Es&&Pa()});document.addEventListener("pointerlockerror",()=>{Es=!0});document.addEventListener("mousemove",n=>{bs&&(K.yaw-=n.movementX*.0022,K.pitch-=n.movementY*.0022,K.pitch=Ze(K.pitch,-1.2,1.1))});Di.addEventListener("pointerdown",n=>{if(fn){if($t){nw(n);return}if(!$t&&!bs&&!Es){Rd();return}$t&&!Wn&&n.clientX<innerWidth*.45&&_t.id===null?(_t.id=n.pointerId,_t.cx=n.clientX,_t.cy=n.clientY,_t.x=_t.y=0,Ge.joy.style.left=`${_t.cx}px`,Ge.joy.style.top=`${_t.cy}px`,Ge.joy.classList.add("show"),Ge.knob.style.transform="translate(-50%,-50%)"):gi.id===null&&(gi.id=n.pointerId,gi.x=n.clientX,gi.y=n.clientY);try{Di.setPointerCapture(n.pointerId)}catch{}}});Di.addEventListener("pointermove",n=>{if($t){sw(n);return}if(n.pointerId===_t.id){let e=n.clientX-_t.cx,t=n.clientY-_t.cy,i=Math.hypot(e,t),s=56;i>s&&(e*=s/i,t*=s/i),_t.x=e/s,_t.y=t/s,Ge.knob.style.transform=`translate(calc(-50% + ${e}px), calc(-50% + ${t}px))`}else if(n.pointerId===gi.id){let e=$t?.0052:.0042;K.yaw-=(n.clientX-gi.x)*e,K.pitch-=(n.clientY-gi.y)*e,K.pitch=Ze(K.pitch,-1.2,1.1),gi.x=n.clientX,gi.y=n.clientY}});var Cd=n=>{if($t){Fg(n);return}n.pointerId===_t.id&&(_t.id=null,_t.x=_t.y=0,Ge.joy.classList.remove("show")),n.pointerId===gi.id&&(gi.id=null)};Di.addEventListener("pointerup",Cd);Di.addEventListener("pointercancel",Cd);Di.addEventListener("lostpointercapture",Cd);addEventListener("keydown",n=>{if(fn){if(n.code==="Escape"){Pa();return}if(n.code==="KeyR"&&!n.repeat){Aa();return}if(n.code==="KeyE"&&!n.repeat){ot&&ot.state.cocked?Dd():Bh();return}if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)){Ht.add(n.code),n.preventDefault();return}if(n.code==="KeyF"){n.repeat||Ra();return}if(n.code==="Space"){Fh=!0,n.preventDefault();return}if(Wn&&n.code==="KeyE"&&!n.repeat){Fa();return}if(Wn&&n.code==="KeyR"&&!n.repeat){Aa();return}Ht.add(n.code),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>{Ht.delete(n.code),n.code==="Space"&&(Fh=!1)});addEventListener("blur",()=>Ht.clear());var qe=[];function gd(n){let t=(i,s,r)=>{let o=n.x-i,a=n.z-s,c=Math.hypot(o,a),l=r+.25;c<l&&c>1e-5&&(n.x=i+o/c*l,n.z=s+a/c*l)};for(let i=0;i<3;i++){t(En.x,En.z,.62);for(let s of ca){let r=aa.uPC.value;t(s.x+Math.round((r.x-s.x)/Ut)*Ut,s.z+Math.round((r.y-s.z)/Ut)*Ut,s.r)}for(let s of qe)if(!s.gone){for(let r of s.blockers)t(r.x,r.z,r.r);t(s.headWorld.x,s.headWorld.z,.24*s.s)}}}var km=new T(0,1.08,.58),Hm=new T(0,1.22,1.03),Vm=new vt,Gm=new tn;function Wm(n,e,t){let i=n.mesh.material.userData.own.uPose.value;return t.copy(e.p).sub(Hm).applyQuaternion(Vm.setFromEuler(Gm.set(-i.w*e.wh,i.z*e.wh,0,"YXZ"))).add(Hm),t.sub(km).applyQuaternion(Vm.setFromEuler(Gm.set(-i.y*e.wn,i.x*e.wn,0,"YXZ"))).add(km),t.applyMatrix4(n.mesh.matrixWorld)}var ma=new T;function Yf(n,e){ma.copy(e),n.mesh.worldToLocal(ma);let t=ma.x,i=ma.y-1.16,s=ma.z-.98;return[Ze(Math.atan2(t,s),-1.35,1.35),Ze(Math.atan2(i,Math.hypot(t,s)),-.6,.5)]}var js=new T;function _b(n,e){if(n.yawLim??(n.yawLim=[-1.2,1.2]),(n.roomT=(n.roomT??Math.random())-e)>0)return;n.roomT=.8;let t=r=>{js.set(Math.sin(r)*.75,1,.58+Math.cos(r)*.75).applyMatrix4(n.mesh.matrixWorld);let o=.26*n.s+.03;for(let a of qe)if(!(a===n||a.dead||a.gone||!a.mesh.visible)&&!(Math.abs(a.mesh.position.x-js.x)>2.2||Math.abs(a.mesh.position.z-js.z)>2.2)){for(let c of a.blockers)if(Math.hypot(c.x-js.x,c.z-js.z)<c.r+o)return!0;if(Math.hypot(a.headWorld.x-js.x,a.headWorld.z-js.z)<.26*a.s+o)return!0}return!1},i=0,s=0;for(let r=.1;r<=1.21&&!t(r);r+=.1)s=r;for(let r=-.1;r>=-1.21&&!t(r);r-=.1)i=r;n.yawLim[0]=i,n.yawLim[1]=s}function Mg(n,e,t){if(n.dead){xb(n,e);return}let i=n.ai;if(n.staring){let[o,a]=Yf(n,fe.position);i.yaw=yt(i.yaw,o,7,e),i.pitch=yt(i.pitch,a,7,e)}else if(n.alarm>.05){let[o]=Yf(n,fe.position),a=n.turnLead||0;i.yaw=yt(i.yaw,Math.abs(a)>.15?a:Ze(o,-.6,.6),3,e),i.pitch=yt(i.pitch,-.08,3,e),i.t=Math.min(i.t,1.5)}else if((n.stir||0)>.15||(n.speed||0)>.25)i.yaw=yt(i.yaw,n.turnLead||0,3,e),i.pitch=yt(i.pitch,(n.speed||0)>.25?-.2:-.06,2.5,e),i.t=Math.min(i.t,1.5);else{let[o,a]=Yf(n,fe.position);i.t-=e,i.t<=0&&(Math.random()<.15?(i.graze=!0,i.tYaw=Qe(-.35,.35),i.t=Qe(3,6)):(i.graze=!1,i.tYaw=Qe(-.25,.25),i.tPitch=Qe(-.15,.08),i.t=Qe(2.5,6))),_b(n,e);let c=Ze(i.graze?i.tYaw:o+i.tYaw,n.yawLim[0],n.yawLim[1]);i.yaw=yt(i.yaw,c,1.4,e),i.pitch=yt(i.pitch,i.graze?-1.05:a+i.tPitch,1.1,e)}let s=n.mesh.material.userData.own,r=(n.gait||0)*.07*Math.sin((n.gaitPhase||0)*Math.PI*4);s.uPose.value.set(i.yaw*.45,i.pitch*.4+r,i.yaw*.55,i.pitch*.6+r*.5),i.flick=Math.max(0,i.flick-e*1.8),Math.random()<e*.12&&(i.flick=1),s.uTail.value=.1*Math.sin(t*1.1+n.phase)+.5*i.flick*Math.sin(t*9+n.phase),n.headWorld.set(Math.sin(i.yaw)*.75,1,.58+Math.cos(i.yaw)*.75).applyMatrix4(n.mesh.matrixWorld);{let o=n.mesh.geometry.userData;Wm(n,o.eye,n.eyeWorld),Wm(n,o.nose,n.noseWorld)}}var _a=1,Zf=new T;function Mb(n){let e=99;ns.y<-.05&&(e=fe.position.y/-ns.y);for(let i of qe)for(let s of i.blockers){Zf.set(s.x,1*i.s+(i.y0||0),s.z).sub(fe.position);let r=Zf.length();Math.acos(Ze(Zf.dot(ns)/r,-1,1))<.7&&(e=Math.min(e,Math.max(.3,r-s.r)))}let t=Ze(Math.pow(e/2.4,1.2),.3,1);_a=yt(_a,t,t<_a?6:2.5,n)}var ae={on:!0,level:1,oil:1,mode:"on",t:0,gustT:-1,gustTimer:Qe(35,70),sputter:0,matches:H.matches,outOnce:!1},Fh=!1,Pd=!1,Uh=!1,Ma=0,ah=0,Dn=!1,Sa=0,oo=0;function Li(n,e=2.6){Ge.sub.textContent=n,Ge.sub.classList.add("show"),oo=e}function Sb(){return Math.hypot(K.pos.x-En.x,K.pos.z-En.z)<DS}function Ah(n){ae.mode==="off"||ae.mode==="dying"||(ae.mode="dying",ae.t=0,ae.cause=n,!ae.outOnce&&ae.matches>0&&(ae.outOnce=!0,setTimeout(()=>Li($t?H.lines.match:H.lines.matchPC,3.2),1600)),n!=="hand"&&Oe.puff())}function Ra(){if(fn){if(ae.mode==="on"){ae.mode="turning",ae.t=0,Oe.click(),!ae.outOnce&&ae.matches>0&&(ae.outOnce=!0,setTimeout(()=>Li($t?H.lines.match:H.lines.matchPC,3.2),1400));return}if(ae.mode==="off"){ae.matches>0?(ae.matches--,ae.mode="up",ae.t=0):Li(H.lines.noMatch,2.4);return}}}function bb(n){if(ae.t+=n,ae.mode==="on"){let t=ae.oil>.2?1:.35+.65*(ae.oil/.2);ae.oil<.12&&Math.random()<n*3&&(ae.sputter=1,Oe.sputter()),ae.sputter=Math.max(0,ae.sputter-n*5),t*=1-.5*ae.sputter,ae.gustT>=0&&(t*=.55+.45*Math.abs(Math.sin(ae.gustT*23)*Math.sin(ae.gustT*7))),ae.level=yt(ae.level,t,18,n),ae.oil<=0&&Ah("oil")}else if(ae.mode==="turning")ae.level=Math.max(0,1-ae.t/.6),ae.t>=.6&&(ae.mode="off",ae.level=0,Oe.puff());else if(ae.mode==="up")ae.t>=.35&&ae.t-n<.35&&Oe.whoosh(),ae.level=ae.t<.35?0:Math.min(1,(ae.t-.35)/.6),ae.t>=.95&&(ae.mode="on",ae.level=1);else if(ae.mode==="dying"){let e=ae.cause==="oil"?1.6:.5;ae.level=Math.max(0,(1-ae.t/e)*(Math.random()<.5?1:.3)),ae.t>=e&&(ae.mode="off",ae.level=0)}else ae.mode==="relight"&&(ae.t>=1.05&&ae.t-n<1.05&&(Oe.whoosh(),ae.oil=1),ae.level=ae.t<1.05?0:Math.min(1,(ae.t-1.05)/.7),ae.t>=2.2&&(ae.mode="on",ae.level=1));ae.gustTimer-=n,ae.gustTimer<=0&&ae.gustT<0&&(ae.gustT=0,ae.gustTimer=Qe(45,110),Oe.gust()),ae.gustT>=0&&(ae.gustT+=n,ae.gustT>2.3&&(ae.gustT=-1,ae.mode==="on"&&Math.random()<.5&&Ah("wind"))),ya.uLevel.value=ae.level,ya.uBend.value=yt(ya.uBend.value,ae.gustT>=0?Math.sin(ae.gustT*9)*1.6+1.2:0,8,n)}Ge.lampBtn&&Ge.lampBtn.addEventListener("click",n=>{n.stopPropagation(),Ra()});var wb=n=>{n.preventDefault(),n.stopPropagation(),Uh=!0},Kf=n=>{n.stopPropagation(),Uh=!1};for(let[n,e]of[[Ge.cockBtn,Fa],[Ge.fireBtn,Dh],[Ge.reloadBtn,Aa]])n&&n.addEventListener("pointerdown",t=>{t.stopPropagation(),t.preventDefault(),e()});Ge.raiseBtn&&(Ge.raiseBtn.addEventListener("pointerdown",wb),Ge.raiseBtn.addEventListener("pointerup",Kf),Ge.raiseBtn.addEventListener("pointercancel",Kf),Ge.raiseBtn.addEventListener("pointerleave",Kf));document.addEventListener("mousedown",n=>{fn&&($t||!(bs||Es)||(n.button===0?ot&&ot.state.cocked?Ld(0,0):void 0:n.button===2&&(ot&&ot.state.cocked?Dd():Bh())))});document.addEventListener("mouseup",n=>{n.button===2&&(Pd=!1)});document.addEventListener("contextmenu",n=>n.preventDefault());var er=0,va=0,Sg=-1;var Eb=1/0,h2=new T,u2=new T,f2=new T,d2=new T,p2=new T,m2=new T;function Tb(n){let e=n.distanceTo(xi.position);return xi.intensity/Math.pow(Math.sqrt(e*e+.81),1.4)}var G={i:0,at:0,been:new Set([0]),walking:!1,t:0,dur:1,x0:0,x1:0,readyAt:1/0,lastAct:0,misses:0,toldNext:!1,nextHintAt:-1,finishAt:-1,endT:-1},xn=!1,qm=new T,g2=new T,Xm=new T,Ca=()=>H.stations.length-1;function Ab(n){let e=H.seed,t=()=>(e=e*16807%2147483647)/2147483647,i=[],s=(a,c,l,h)=>[[.55,.37],[0,.37],[-.6,.37],[H.herdGap.head,.26]].map(([d,u])=>({x:a+Math.sin(l)*d*.92*h,z:c+Math.cos(l)*d*.92*h,r:u*h})),r=a=>i.some(c=>c.some(l=>a.some(h=>Math.hypot(l.x-h.x,l.z-h.z)<l.r+h.r+H.herdGap.room))),o=(a,c,l,h)=>{let d=Jt(H.scale[0],H.scale[1],t()),u=c,f=l,m=Math.atan2(H.stations[a].x-u,H.standZ-f),v=m,p=!1;for(let D=0;D<10&&!p;D++)v=m+(D<9?(t()-.5)*2*H.front.turn:0),p=!r(s(u,f,v,d));for(let D=1;D<=40&&!p;D++){let k=D*2.4,L=.06*D;u=c+Math.cos(k)*L,f=l+Math.sin(k)*L*.7-(D>20?.03*(D-20):0),m=Math.atan2(H.stations[a].x-u,H.standZ-f),v=m,p=!r(s(u,f,v,d))}i.push(s(u,f,v,d));let g=Jt(H.coat[0],H.coat[1],t())*(h?H.backDark:1),_=Math.min(1,g+.06+t()*.1),w=qe.length,b=Math.floor(t()*n.length),y=new st(n[b],zS(g,_,w*1.7)),M=Math.sin(v)*.9,x=Math.cos(v)*.9,S=ni(u+M,f+x),C=H.lean*Math.atan2(ni(u-M,f-x)-S,1.8),R=S+.9*Math.sin(C);y.position.set(u,R,f),y.rotation.order="YXZ",y.rotation.y=v,y.rotation.x=C,y.scale.setScalar(d),qt.add(y),y.updateMatrixWorld(!0);let P=[.55,0,-.6].map(D=>{let k=new T(0,0,D*.92).applyMatrix4(y.matrixWorld);return{x:k.x,z:k.z,r:.37*d}});qe.push({mesh:y,v:b,lod:0,s:d,phase:w*1.7,blockers:P,counted:!1,lit:0,staring:!1,headWorld:new T,station:a,y0:R,back:h,eyeWorld:new T,noseWorld:new T,aimPoints:[],heading:v,speed:0,gait:0,gaitPhase:Math.random(),alarm:0,turnVel:0,turnLead:0,wx:0,wz:0,stir:0,stirGoal:0,press:0,pdx:0,pdz:0,shoveX:0,shoveZ:0,caps:null,startle:0,dead:!1,ai:{t:Qe(0,3),yaw:0,pitch:0,tYaw:0,tPitch:0,flick:0,graze:!1}})};H.stations.forEach((a,c)=>{let l=a.rows[0]+bg.filter(v=>v===c).length,h=Array.from({length:l-1},()=>Jt(H.front.gap[0],H.front.gap[1],t())),d=h.reduce((v,p)=>v+p,0);if(d>H.front.span)for(let v=0;v<h.length;v++)h[v]*=H.front.span/d;let u=a.x-h.reduce((v,p)=>v+p,0)/2,f=[],m=H.front.z;for(let v=0;v<l;v++)f.push(u),o(c,u,H.front.z+(t()-.5)*H.front.jitterZ,!1),u+=h[v]||0;a.rows.slice(1).forEach((v,p)=>{let g=H.front.z-H.rowBack[p],_=(H.standZ-g)/(H.standZ-m),w=f.slice(1).map((y,M)=>(y+f[M])/2);f=(w.length>=v?w.slice(Math.floor((w.length-v)/2),Math.floor((w.length-v)/2)+v).map(y=>a.x+(y-a.x)*_):Array.from({length:v},(y,M)=>a.x-v*H.rowGap/2+(M+.5)*H.rowGap)).map(y=>y+(t()-.5)*2*H.rowJitter[0]),m=g;for(let y of f)o(c,y,g+(t()-.5)*2*H.rowJitter[1],!0)})})}function Rb(n,e){let t=1/0,i=null;for(let s of qe)if(!(s.dead||s.gone)){if(s.mon){for(let r of s.mon.eyes)if(r.visible){let o=nr(n,e,r.position,.12);o<t&&(t=o,i=s)}}if(!(s.mon&&s.mon.clue===4)){for(let r of s.blockers){let o=nr(n,e,Xm.set(r.x,s.y0+.95*s.s,r.z),.38*s.s);o<t&&(t=o,i=s)}for(let[r,o]of[[0,.15],[.5,.15],[1,.14]]){let a=nr(n,e,Xm.copy(s.eyeWorld).lerp(s.noseWorld,r),o*s.s);a<t&&(t=a,i=s)}}}return[i,t]}var x2=new T;var Hn=null,qn=[],ir=()=>qn.some(n=>n.scareAt),Id=()=>qn.find(n=>!n.gone)??qn[0]??null,Cb=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Bs(n)})(),Rh=new URLSearchParams(location.search),Pb=Na&&+Rh.get("n")?+Rh.get("n"):H.monster.count[0]+Math.floor(Math.random()*(H.monster.count[1]-H.monster.count[0]+1)),bg=(()=>{let n=H.stations.map((t,i)=>i),e=[];for(let t=0;t<Pb;t++){if(Na&&Rh.get("at")!==null){e.push(+Rh.get("at"));continue}n.length||n.push(...H.stations.map((i,s)=>s)),e.push(n.splice(Math.floor(Math.random()*n.length),1)[0])}return e})();function Ib(n){let e=+new URLSearchParams(location.search).get("clue"),t=H.monster,i=t.clues.includes(e)?e:t.clues[Math.floor(Math.random()*t.clues.length)],s=qe.filter(h=>(H.monster.anyRow||!h.back)&&h.station===n&&!h.mon),r=s[Math.floor(Math.random()*s.length)];r.mesh.material.userData.own.uEyeOff.value=1,i===4&&(r.mesh.visible=!1);let o=[0,1,2].map(()=>{let h=new ds(new Gi({map:Cb,blending:$n,depthWrite:!1,transparent:!0,fog:!1}));return h.scale.setScalar(t.glint),qt.add(h),h});o[2].visible=i===7;let a=Na?new URLSearchParams(location.search).get("form"):null,c=H.scare.forms[i],l=a&&da[a]?a:c[Math.floor(Math.random()*c.length)];r.mon={clue:i,eyes:o,form:l,M:null},qn.push(r),Hn=Id(),Mm(`../monsters/data/${l}.json`,l,es.uTime).then(h=>{h.twist=(Math.random()<.5?-1:1)*H.fight.twist,h.hang=H.fight.hang,r.mon.M=h,qt.add(h.root)}).catch(h=>console.warn("monster",h))}var Jf=new T,$f=new T(0,1,0),Lb=new T,Qi={full:null,lite:null,far:null};function Db(){if(!Qi.full||!Qi.lite||!Qi.far)return;let n=H.lod;for(let e of qe){let t=Math.hypot(e.mesh.position.x-fe.position.x,e.mesh.position.z-fe.position.z),i=t<n.full-(e.lod>0?n.slack:0)?0:t<n.lite-(e.lod>1?n.slack:0)?1:2;i!==e.lod&&(e.lod=i,e.mesh.geometry=[Qi.full,Qi.lite,Qi.far][i][e.v])}}function Nb(){for(let n of qn)n.gone||Fb(n);Hn=Id()}function Fb(n){let e=n.mon,t=H.monster,i=n.mesh.material.userData.own.uPose.value,s=n.mesh.rotation.y+i.x+i.z;Jf.set(Math.cos(s),0,-Math.sin(s));let r=e.clue===2?t.wide:t.eye,o=e.clue===1?t.high:0;e.eyes[0].position.copy(n.eyeWorld).addScaledVector(Jf,-r).addScaledVector($f,o),e.eyes[1].position.copy(n.eyeWorld).addScaledVector(Jf,r).addScaledVector($f,o),e.eyes[2].position.copy(n.eyeWorld).addScaledVector($f,t.third);for(let l of e.eyes)l.position.add(Lb.copy(fe.position).sub(l.position).setLength(.1));let a=n.eyeWorld.distanceTo(xi.position),c=.1*(es.uEyeGain.value/Math.pow(Math.max(a,1.3),es.uEyeFall.value)+es.uEyeSelf.value);for(let l of e.eyes)l.material.color.setScalar(c)}var Ln=H.hp,bt=null,Ym=0,Pi=n=>{try{navigator.vibrate&&navigator.vibrate(n)}catch{}};function Ub(n){let e=n.mon.M;G.scareMon=n,n.gone=!0,n.mesh.visible=!1;for(let t of n.mon.eyes)t.visible=!1;if(!e){zh();return}G.scaring=!0,Ge.sub.classList.remove("show"),oo=0,e.own.uLightP.value.copy(xi.position),Am(e,new T(n.mesh.position.x,n.y0,n.mesh.position.z),new vt().setFromEuler(new tn(0,Math.atan2(fe.position.x-n.mesh.position.x,fe.position.z-n.mesh.position.z),0)),{d:H.scare.d,travel:H.fight.leap.forms.includes(e.id)?void 0:H.scare.travel,leap:H.fight.leap.forms.includes(e.id)?H.fight.leap:null})}function zb(n){let e=G.scareMon?.mon.M;if(!G.scaring||!e)return;e.own.uLightP.value.copy(xi.position);let t=Rm(e,fe,n,{roar:()=>{bt&&(bt.freeze("none"),bt.sting(H.scare.sting),bt.pounce(e.info.roar)),Pi(H.scare.buzz),G.recoilT=0},cut:()=>{bt&&(bt.snap(),bt.cut({muffle:!1})),Pi(220),zh()},back:()=>{bt&&bt.restore(),Oe.hush(!1),G.hushed=!1},done:()=>{G.scaring=!1,G.shake=0,kt.uniforms.uFade.value=0,Mh.intensity=0,(Ln<=0||G.endAfter&&!ir())&&(G.endT=0)}});t&&(kt.uniforms.uFade.value=t.fade,G.shake=t.shake*H.scare.shake,Mh.intensity=t.fade<1?H.scare.light:0,Mh.position.copy(fe.position).addScaledVector(ns,.15).addScaledVector(fe.up,-.2))}var Qr=new Zt(2,2,{depthBuffer:!0});Qr.depthTexture=new li(2,2);kt.uniforms.uBars.value=H.letterbox;function Bb(){let n=G.scaring?G.scareMon?.mon.M:U.on&&U.phase==="eat"?U.M:null,e=!!n&&n.root.visible&&Cm(n);if(kt.uniforms.uMaskOn.value=e?1:0,!e)return;let t=Math.max(2,kt.uniforms.uRes.value.x>>1),i=Math.max(2,kt.uniforms.uRes.value.y>>1);(Qr.width!==t||Qr.height!==i)&&Qr.setSize(t,i),n.mesh.layers.enable(1);let s=fe.layers.mask;fe.layers.set(1),wn.setRenderTarget(Qr),wn.clear(!0,!0,!1),wn.render(qt,fe),wn.setRenderTarget(null),fe.layers.mask=s,kt.uniforms.tMask.value=Qr.depthTexture}var Mh=new hi(new ge(1,.82,.6),0,3,2);qt.add(Mh);function zh(){Ln=Math.max(0,Ln-1),Ln<=0&&!G.scaring&&(G.endT=0)}var so=0;function Ob(n){let e=H.hurt,t=Math.min(Ln,e.bpm.length),i=Ln<H.hp&&Ln>0;if(so=yt(so,i?1:0,1.5,n),kt.uniforms.uHurt.value=i?e.edge[t]*so:0,!i||!Oe.ctx||xn)return;let s=Oe.ctx.currentTime;s>=Ym&&(Ym=s+60/e.bpm[t],Oe.heart(e.heart[t]*so))}var xd=new T,wg=new T,kb=new vt,vd=!1;function Ld(n,e){return!ot||!ot.state.cocked||ot.state.anim||G.scaring||G.walking||xn||Dn?!1:(qm.copy(fe.position),xd.set(n,e,.5).unproject(fe).sub(qm).normalize(),vd=!0,wg.copy(xd).applyQuaternion(kb.copy(fe.quaternion).invert()).multiplyScalar(ro.aimD),pt.pointK=1,pt.pointT=0,G.lastAct=performance.now(),Dh(),!0)}function Bh(){!ot||G.scaring||xn||Dn||(Fa(),G.lastAct=performance.now(),G.everCocked=!0,G.toldFire||(G.toldFire=!0,setTimeout(()=>Li($t?H.lines.fire:H.lines.firePC,3.4),500)))}function Dd(){ot&&ot.state.cocked&&!ot.state.anim&&(ot.state.cocked=!1,xa.click(.3,2600),pt.t=0)}function Hb(){G.toldReload||(G.toldReload=!0,setTimeout(()=>Li($t?H.lines.reload:H.lines.reloadPC,3.4),400))}function Eg(n){if(n.mon){Vb(n);return}gb(n,ji)}var U={on:!1,phase:"",t:0,hits:0,pos:new T,from:new T,to:new T,M:null,endT:-1},Zm=new vt,Tg=new tn,Lt=new T,yd=new T;function Vb(n){let e=n.mon.M;if(n.gone=!0,Ge.sub.classList.remove("show"),oo=0,!e){n.mesh.visible=!1;for(let t of n.mon.eyes)t.visible=!1;return}G.homeX=K.pos.x,G.homeZ=K.pos.z,Object.assign(U,{on:!0,phase:"morph",t:0,hits:0,M:e,endT:-1,cow:n,step:0,aim:null,heading:void 0,dieLean:0,landed:!1}),U.pos.set(n.mesh.position.x,ni(n.mesh.position.x,n.mesh.position.z),n.mesh.position.z),U.home=n.mesh.position.clone(),e.own.uAppear.value=0,e.root.visible=!0,Ag(),Gb(),Pi(120);for(let t of qe)t!==n&&!t.dead&&!t.gone&&Zb(t,U.pos)}function Ag(n=0,e=0,t=0){let i=U.M,s=Math.atan2(fe.position.x-U.pos.x,fe.position.z-U.pos.z),r=(U.phase==="walk"||U.phase==="stuck"||U.phase==="die")&&U.heading!==void 0?U.heading:s;U.lastLean=t,i.root.quaternion.setFromEuler(Tg.set(t,r,e,"YXZ")),i.root.position.copy(U.pos),i.root.position.y+=n}function Gb(){let n=bt?.input(),e=Oe.twists;if(!n||!e?.length){bt&&bt.gape(U.M.id);return}let t=Oe.ctx.createBufferSource(),i=Oe.ctx.createGain();t.buffer=e[Math.floor(Math.random()*e.length)],i.gain.value=H.fight.twistSound.gain,t.connect(i).connect(n),t.start()}function Rg(){let n=H.fight,e=U.M.id==="m5";if(Pi(60),e||U.hits++,bt&&bt.gape(U.M.id),U.hits>=n.shots){U.dieLean=U.lastLean??0,(U.phase==="walk"||U.phase==="stuck")&&U.heading!==void 0||(U.heading=Math.atan2(fe.position.x-U.pos.x,fe.position.z-U.pos.z)),U.phase="die",U.t=0;return}U.phase==="stuck"||U.phase==="morph"||(Lt.copy(U.pos).sub(fe.position).setY(0).normalize(),U.stagger=e?n.shadow.stagger:n.stagger,U.from.copy(U.pos),U.to.copy(U.pos).addScaledVector(Lt,e?n.shadow.push:n.push),U.phase="pushed",U.t=0)}function Wb(n,e){if(!U.on||U.phase==="die"||U.phase==="eat"||U.phase==="vanish")return 1/0;let t=U.M;return yd.fromArray(t.meta.headPivot).applyQuaternion(t.root.quaternion).add(t.root.position),Math.min(nr(n,e,yd,.4),nr(n,e,Lt.set(0,.5*t.meta.height,0).add(t.root.position),.6))}var ch=new en,qb=new en;function Xb(){let n=U.M,e=H.fight.leap,t=U.aim;n.eat=null,U.aim=null,U.phase="stuck",U.t=0,U.speed=0,U.landed=!1,Lt.copy(t.cam.position).sub(U.pos).setY(0),Lt.lengthSq()<1e-4&&Lt.set(0,0,1),Lt.normalize(),U.heading=Math.atan2(Lt.x,Lt.z),U.missFrom=(U.missFrom??new T).copy(n.root.position),U.missQ=(U.missQ??new vt).copy(n.root.quaternion),U.pos.set(n.root.position.x+Lt.x*e.slide,0,n.root.position.z+Lt.z*e.slide),U.pos.y=ni(U.pos.x,U.pos.z),kt.uniforms.uFade.value=0,G.shake=0}function Yb(n,e){if(!U.on){if(U.endT>=0&&(U.endT+=n)>H.fight.back){U.endT=-1;for(let l of qe)!l.dead&&!l.gone&&Kb(l)}return}let t=H.fight,i=U.M;if(U.t+=n,i.own.uLightP.value.copy(xi.position),U.phase==="eat"){let l=fe,h=U.aim;if(h){let u=t.leap,f=i.eat.T,m=Ze((i.eat.t+n-f.snap)/(f.lunge-f.snap),0,1);if(!h.caught&&m>=u.commit){if(Math.hypot(fe.position.x-h.cam.position.x,fe.position.z-h.cam.position.z)>u.dodge){Xb();return}h.caught=!0,h.k=m}let v=h.caught?Xt(Ze((m-h.k)/Math.max(.001,1-h.k),0,1)):0;h.view.position.lerpVectors(h.cam.position,fe.position,v),h.view.quaternion.slerpQuaternions(h.cam.quaternion,fe.quaternion,v),h.view.updateMatrixWorld(!0),l=h.view}let d=Fm(i,l,n,{freeze:()=>{bt&&bt.freeze(i.info.roar)},roar:()=>{bt&&bt.pounce(i.info.roar),Pi(90)},black:()=>{bt&&bt.bite("gulp"),Pi([260,120,90]),zh(),i.root.visible=!1,U.wakeT=0}});d&&(kt.uniforms.uFade.value=d.fade,G.shake=d.shake),U.wakeT!==void 0&&(U.wakeT+=n)>t.wake&&G.endT<0&&(Ln>0&&(Ge.end.querySelector("h1").textContent=H.lines.morningTitle,Ge.end.querySelector(".sub").textContent=H.lines.morning),U.on=!1,G.endT=2.4,kt.uniforms.uFade.value=1);return}Pm(i,n,e);let s=i.id==="m3"?t.crawl:1,r=0,o=0,a=0,c=!1;if(U.phase==="morph"){let l=Ze(U.t/t.morph,0,1),h=U.cow;h.mesh.material.userData.own.uGone.value=Xt(Ze(l*1.15,0,1)),h.mesh.position.set(U.home.x+(Math.random()-.5)*.05*l,U.home.y+(Math.random()-.5)*.03*l,U.home.z+(Math.random()-.5)*.05*l);for(let d of h.mon.eyes)d.material.opacity=1-Xt(Ze(l*2,0,1));if(i.own.uAppear.value=Xt(Ze((l-.15)/.85,0,1)),i.root.scale.set(1,.75+.25*Xt(l),1),G.shake=.25*l,i.own.uHeadRot.value.z+=i.twist*Xt(Ze((l-.4)/.5,0,1)),i.own.uHeadRot.value.y+=i.hang*Xt(l),l>=1){h.mesh.visible=!1;for(let d of h.mon.eyes)d.visible=!1;i.own.uAppear.value=1,U.phase="walk",U.t=0,G.shake=0,bt&&bt.pounce(i.info.roar,H.fight.shotRoar),Pi(250)}}else if(U.phase==="walk"){if(i.id==="m5"&&ae.level<=t.shadowLight){U.phase="vanish",U.t=0,Oe.whoosh(),Pi(80);return}let l=t.gait,h=t.leap,d=!1,u=i.id==="m3"?.5:1,f=h.forms.includes(i.id);Lt.copy(fe.position).sub(U.pos).setY(0);let m=Lt.length();if(Lt.normalize(),m<=(f?h.from:h.tallFrom)){U.phase="eat",U.t=0,i.own.uStrideAmt.value=0,Lm(i,{leap:f?h:null,run:!0,d:t.face}),f?(ch.position.copy(fe.position),ch.quaternion.copy(fe.quaternion),ch.updateMatrixWorld(!0),U.aim={cam:ch,view:qb,caught:!1}):U.aim=null;return}U.stumbleIn=(U.stumbleIn??Qe(...l.stumble))-n,U.stumbleIn<0&&(U.stumbleIn=Qe(...l.stumble),U.stumbleT=l.stumbleTime,U.whip=(Math.random()<.5?-1:1)*l.whip);let v=(U.stumbleT=Math.max(0,(U.stumbleT??0)-n))>0;U.speed=d?0:bd(U.speed??0,t.walk*s*Jt(l.rush,1,Ze((m-1)/4,0,1)),t.walk*s/t.accel*n);let p=U.speed*(1-l.surge+2*l.surge*Math.sin(U.step)**2)*(v?.35:1);U.heading=Math.atan2(Lt.x,Lt.z)+Math.sin(U.step*.35)*l.weave*Ze((m-1.5)/3,0,1),U.pos.x+=Math.sin(U.heading)*p*n,U.pos.z+=Math.cos(U.heading)*p*n,U.pos.y=ni(U.pos.x,U.pos.z);let g=p>.05?1:0,_=U.step;U.step+=p*n/t.stride*Math.PI,r=Math.abs(Math.sin(U.step))*.08*u*g-(v?.06:0),o=Math.sin(U.step)*.07*g+(v?U.whip*.2:0),a=(l.lean*Math.min(1,p/t.walk)+.05*Math.sin(U.step*2))*u*g+(v?.2:0),i.own.uStride.value=U.step,i.own.uStrideAmt.value=yt(i.own.uStrideAmt.value,l.legs*u*g,8,n),U.lookYaw=Math.atan2(fe.position.x-U.pos.x,fe.position.z-U.pos.z)-U.heading;let w=Math.atan2(Math.sin(U.lookYaw),Math.cos(U.lookYaw));i.own.uHeadRot.value.x=Ze(w,-.7,.7)+.3*i.own.uHeadRot.value.x+(v?U.whip:0),i.own.uHeadRot.value.y=.3*i.own.uHeadRot.value.y+Math.sin(U.step*2)*.06*g,i.own.uHeadRot.value.z=.3*i.own.uHeadRot.value.z+i.twist+Math.sin(U.step)*.08*g,i.own.uHeadRot.value.y+=i.hang,i.own.uJaw.value+=l.gape*(.6+.4*Math.sin(U.step*2))*g,Math.floor(_/Math.PI)!==Math.floor(U.step/Math.PI)&&g&&Oe.thud(.16*u)}else if(U.phase==="pushed"){let l=Ze(U.t/.15,0,1);i.own.uStrideAmt.value=yt(i.own.uStrideAmt.value,0,10,n),i.own.uHeadRot.value.x+=.4*(1-l),i.own.uHeadRot.value.z+=i.twist,i.own.uHeadRot.value.y+=i.hang,U.pos.lerpVectors(U.from,U.to,1-(1-l)**3),U.pos.y=ni(U.pos.x,U.pos.z),a=-.2*(1-l*.5),U.t>=.15+(U.stagger??t.stagger)&&(U.phase="walk",U.t=0)}else if(U.phase==="stuck"){let l=t.leap,h=Ze(U.t/l.land,0,1),d=h*h,u=Xt(Ze((U.t-l.land-l.stuck+.35)/.35,0,1));if(i.own.uStrideAmt.value=yt(i.own.uStrideAmt.value,0,10,n),i.own.uJaw.value=.12+.25*u,i.own.uHeadRot.value.set(0,.3*d*(1-u),i.twist),i.own.uHeadRot.value.y+=i.hang,h<1)Zm.setFromEuler(Tg.set(l.slam,U.heading,0,"YXZ")),i.root.position.lerpVectors(U.missFrom,yd.copy(U.pos).setY(U.pos.y-l.sink),d),i.root.quaternion.slerpQuaternions(U.missQ,Zm,d),c=!0;else if(U.landed||(U.landed=!0,Oe.thud(.5),Pi(70)),G.shake=.4*(1-Ze((U.t-l.land)/.25,0,1)),a=l.slam*(1-u),r=-l.sink*(1-u),u>0){let f=Math.atan2(fe.position.x-U.pos.x,fe.position.z-U.pos.z),m=Math.atan2(Math.sin(f-U.heading),Math.cos(f-U.heading));U.heading+=m*Math.min(1,n*8)}U.t>=l.land+l.stuck&&(U.phase="walk",U.t=0,U.speed=0,U.landed=!1,G.shake=0)}else if(U.phase==="vanish"){let l=Ze(U.t/t.shadow.vanish,0,1);i.own.uAppear.value=1-Xt(l),i.own.uStrideAmt.value=yt(i.own.uStrideAmt.value,0,6,n),i.own.uHeadRot.value.z+=i.twist,i.own.uHeadRot.value.y+=i.hang,U.pos.y=ni(U.pos.x,U.pos.z)+.15*l,l>=1&&(i.root.visible=!1,U.on=!1,U.endT=0,G.shake=0,G.homing=!0)}else if(U.phase==="die"){let l=Ze(U.t/t.die,0,1);U.pos.y=ni(U.pos.x,U.pos.z)-2*l*l;let h=U.cow;if(h?.mesh.visible){let d=h.mesh.material.userData.own;d.uGone.value=Math.max(d.uGone.value,Xt(l));for(let u of h.mon.eyes)u.material.opacity=Math.min(u.material.opacity,1-l);if(l>=1){h.mesh.visible=!1;for(let u of h.mon.eyes)u.visible=!1}}l>=1&&(i.root.visible=!1,U.on=!1,U.endT=0,G.shake=0,G.homing=!0)}U.phase!=="eat"&&!c&&Ag(r,o,a)}function Km(n,e){let t=H.flinch,i=qe.filter(r=>!r.dead&&!r.gone&&r.mesh.visible),s=e??i.reduce((r,o)=>!r||o.mesh.position.distanceToSquared(n)<r.mesh.position.distanceToSquared(n)?o:r,null);s&&s.mesh.position.distanceTo(n)<t.mooNear&&Oe.mooFrom(s,H.moo.gain*t.mooLoud,Qe(...t.mooRate));for(let r of i){if(r===e||r.walk)continue;let o=Math.hypot(r.mesh.position.x-n.x,r.mesh.position.z-n.z);if(o>t.radius)continue;Lt.set(r.mesh.position.x-n.x,0,r.mesh.position.z-n.z),Lt.lengthSq()<1e-4&&Lt.set(0,0,-1),Lt.normalize();let a=Qe(...t.back)*(1-.5*o/t.radius);r.flinchHome??(r.flinchHome={x:r.mesh.position.x,z:r.mesh.position.z}),r.walk={from:new le(r.mesh.position.x,r.mesh.position.z),to:new le(r.mesh.position.x+Lt.x*a,r.mesh.position.z+Lt.z*a),t:-Qe(0,.15),end:r.heading,keep:!0},r.walk.dur=a/t.speed,r.ai&&(r.ai.flick=1)}}function Zb(n,e){n.home??(n.home=n.flinchHome?{...n.flinchHome,yaw:n.heading}:{x:n.mesh.position.x,z:n.mesh.position.z,yaw:n.heading}),n.flinchIn=void 0,n.flinchHome=void 0,Lt.set(n.mesh.position.x-e.x,0,n.mesh.position.z-e.z),Lt.lengthSq()<1e-4&&Lt.set(1,0,0),Lt.normalize(),n.walk={from:new le(n.mesh.position.x,n.mesh.position.z),to:new le(n.mesh.position.x+Lt.x*Qe(...H.fight.scatter),n.mesh.position.z+Lt.z*Qe(...H.fight.scatter)),t:0,end:null},n.walk.dur=n.walk.from.distanceTo(n.walk.to)/H.fight.scatterSpeed}function Kb(n){if(!n.home)return;let e=H.fight.comeBack;n.walk={from:new le(n.mesh.position.x,n.mesh.position.z),to:new le(n.home.x,n.home.z),t:-Qe(...e.delay),end:n.home.yaw,turn:e.turn,speed:e.speed},n.walk.dur=Math.max(.5,n.walk.from.distanceTo(n.walk.to)/e.speed)}function Jb(n){for(let e of qe){if(e.flinchIn!==void 0&&!e.walk&&!e.dead&&!e.gone&&!U.on&&(e.flinchIn-=n)<=0){let v=e.flinchHome;e.flinchIn=void 0,e.flinchHome=void 0,v&&(e.walk={from:new le(e.mesh.position.x,e.mesh.position.z),to:new le(v.x,v.z),t:0,end:e.heading,keep:!0,back:!0},e.walk.dur=Math.max(.4,e.walk.from.distanceTo(e.walk.to)/H.flinch.returnSpeed))}let t=e.walk;if(!t||e.dead)continue;t.t+=n,t.sep??(t.sep=new le);let i=Ze(t.t/t.dur,0,1),s=Jt(t.from.x,t.to.x,Xt(i))+t.sep.x,r=Jt(t.from.y,t.to.y,Xt(i))+t.sep.y,o=Math.atan2(t.to.x-t.from.x,t.to.y-t.from.y),a=t.keep?t.end:i<1?o:t.end??o,c=Math.atan2(Math.sin(a-e.heading),Math.cos(a-e.heading));e.heading+=t.turn?Ze(c*Math.min(1,n*3),-t.turn*n,t.turn*n):c*Math.min(1,n*5);let l=Math.sin(e.heading)*.9,h=Math.cos(e.heading)*.9,d=ni(s+l,r+h),u=H.lean*Math.atan2(ni(s-l,r-h)-d,1.8);e.y0=d+.9*Math.sin(u),e.mesh.position.set(s,e.y0,r),e.mesh.rotation.y=e.heading,e.mesh.rotation.x=u,e.mesh.updateMatrixWorld(!0),e.blockers.forEach((v,p)=>{let g=Lt.set(0,0,[.55,0,-.6][p]*.92).applyMatrix4(e.mesh.matrixWorld);v.x=g.x,v.z=g.z});let f=i<1,m=Math.abs(c)>.05&&(!f||t.t<=0);e.gait=yt(e.gait||0,f&&t.t>0?t.keep?.35:1:m?.4:0,6,n),e.gaitPhase=(e.gaitPhase||0)+n*(t.speed??H.fight.scatterSpeed)/1.45*Math.max(e.gait,0),e.mesh.material.userData.own.uGait.value.set(e.gaitPhase,e.gait,0,0),!f&&!m&&e.gait<.02&&(e.walk=null,t.end!==null&&!t.keep&&(e.home=null),t.keep&&!t.back&&(e.flinchIn=Qe(...H.flinch.wait)))}}var $b=[],jb=[];function Jm(n,e){e.length=0;for(let t of n.blockers)e.push(t);return e.push({x:n.headWorld.x,z:n.headWorld.z,r:.26*n.s}),e}function Cg(n){let e=qe.filter(t=>!t.dead&&!t.gone);for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let s=e[t],r=e[i];if(Math.abs(s.mesh.position.x-r.mesh.position.x)>3.2||Math.abs(s.mesh.position.z-r.mesh.position.z)>3.2)continue;let o=0;for(let v of Jm(s,$b))for(let p of Jm(r,jb))o=Math.max(o,v.r+p.r+.02-Math.hypot(v.x-p.x,v.z-p.z));if(o<=0)continue;let a=s.mesh.position.x-r.mesh.position.x,c=s.mesh.position.z-r.mesh.position.z,l=Math.hypot(a,c);l<.001?(a=1,c=0):(a/=l,c/=l),o=Math.min(o,.25);let h=s.walk?1:0,d=r.walk?1:0,u=h===d?.5:h,f=1-u,m=o;$m(s,a*m*u,c*m*u),$m(r,-a*m*f,-c*m*f)}}function $m(n,e,t){var i;if(!(!e&&!t)){n.walk&&((i=n.walk).sep??(i.sep=new le),n.walk.sep.x+=e,n.walk.sep.y+=t),n.mesh.position.x+=e,n.mesh.position.z+=t,n.mesh.updateMatrixWorld(!0);for(let s of n.blockers)s.x+=e,s.z+=t;n.headWorld.x+=e,n.headWorld.z+=t,n.eyeWorld.x+=e,n.eyeWorld.z+=t}}function Qb(){U.on||G.homing||!fn||xn||Dn||G.walking||G.endT>=0||G.i>=Ca()||(G.walking=!0,G.t=0,G.x0=K.pos.x,G.x1=H.stations[G.i+1].x,G.dur=Math.abs(G.x1-G.x0)/H.walk.speed)}function jm(){let n=-1;H.stations.forEach((r,o)=>{Math.abs(r.x-K.pos.x)<H.arrive&&(n=o)});let e=0;if(H.stations.forEach((r,o)=>{Math.abs(r.x-K.pos.x)<Math.abs(H.stations[e].x-K.pos.x)&&(e=o)}),G.i=e,n<0||n===G.at)return;let t=G.at;G.at=n,G.been.add(n);let i=performance.now(),s=!1;for(let r of qn)!r.gone&&!r.scareAt&&!(U.on&&U.cow===r)&&n!==r.station&&t===r.station&&(r.scareAt=i+Qe(...H.scare.wait)*1e3+(ir(),0),s=!0);if(s){qn.filter(r=>r.scareAt).sort((r,o)=>r.scareAt-o.scareAt).forEach((r,o,a)=>{o&&(r.scareAt=Math.max(r.scareAt,a[o-1].scareAt+4e3))});return}G.finishAt>0&&n!==Ca()&&(G.finishAt=-1),!ir()&&!G.fakeAt&&Math.random()<H.scare.fake.chance&&(G.fakeAt=i+Qe(...H.scare.wait)*1e3)}var Pg=()=>fn&&!xn&&!Dn&&!G.scaring&&G.endT<0&&performance.now()>=G.readyAt&&!(U.on&&U.phase==="eat"&&!(U.aim&&!U.aim.caught));function ew(n){let e=0,t=H.move;if(G.homing&&!G.walking){let a=G.homeX??H.stations[G.i].x,c=G.homeZ??H.standZ,l=a-K.pos.x,h=c-K.pos.z,d=Math.hypot(l,h);if(d<.03||(G.homeT=(G.homeT??0)+n)>20)G.homing=!1,G.homeT=0,K.pos.x=a,K.pos.z=c,K.vel.set(0,0,0),G.lastAct=performance.now();else{let u=Math.min(t.home,d/Math.max(n,.001));K.vel.set(l/d*u,0,h/d*u),K.pos.x+=K.vel.x*n,K.pos.z+=K.vel.z*n,d>.5&&G.homeT<8&&gd(K.pos),e=u}}else if(!G.walking&&Pg()){let a=0,c=0;(Ht.has("KeyW")||Ht.has("ArrowUp"))&&(c+=1),(Ht.has("KeyS")||Ht.has("ArrowDown"))&&(c-=1),c-=_t.y,(Ht.has("KeyD")||Ht.has("ArrowRight"))&&(a+=1),(Ht.has("KeyA")||Ht.has("ArrowLeft"))&&(a-=1),a+=_t.x;let l=Math.hypot(a,c);l>1&&(a/=l,c/=l);let h=Math.sin(K.yaw),d=Math.cos(K.yaw),u=(a*d-c*h)*t.speed,f=(-a*h-c*d)*t.speed;if(K.vel.x=yt(K.vel.x,u,t.ease,n),K.vel.z=yt(K.vel.z,f,t.ease,n),K.pos.x+=K.vel.x*n,K.pos.z+=K.vel.z*n,U.on){if(gd(K.pos),U.phase!=="eat"&&U.phase!=="die"&&U.phase!=="vanish"){let m=K.pos.x-U.pos.x,v=K.pos.z-U.pos.z,p=Math.hypot(m,v),g=H.move.body;p<g&&p>1e-4&&(K.pos.x=U.pos.x+m/p*g,K.pos.z=U.pos.z+v/p*g)}}else{let m=H.stations[0].x,v=H.stations[Ca()].x;(K.pos.x<m||K.pos.x>v)&&(K.pos.x=Ze(K.pos.x,m,v),K.vel.x=0);let p=H.standZ-t.near,g=H.standZ+t.back;(K.pos.z<p||K.pos.z>g)&&(K.pos.z=Ze(K.pos.z,p,g),K.vel.z=0)}e=Math.hypot(K.vel.x,K.vel.z),e>.2&&(G.lastAct=performance.now()),U.on||jm()}else G.walking||K.vel.set(0,0,0);if(G.walking&&!G.scaring){G.t+=n;let a=Math.min(1,G.t/G.dur),c=Jt(G.x0,G.x1,Xt(a));e=Math.abs(c-K.pos.x)/Math.max(n,.001),K.pos.x=c,a>=1&&(G.walking=!1,G.lastAct=performance.now(),jm())}if($t&&!U.on&&(G.homing||G.walking)){let a=G.walking?-H.walk.turn*Math.sqrt(Math.sin(Math.PI*Math.min(1,G.t/G.dur))):0;if(G.homing){let l=(G.homeX??H.stations[G.i].x)-K.pos.x,h=(G.homeZ??H.standZ)-K.pos.z;Math.hypot(l,h)>.8&&(a=Math.atan2(-l,-h))}let c=Math.atan2(Math.sin(a-K.yaw),Math.cos(a-K.yaw));K.yaw+=c*(1-Math.exp(-(G.homing?4:6)*n)),K.pitch=yt(K.pitch,H.look.pitch,6,n)}let i=Math.sin(K.yaw),s=Math.cos(K.yaw),r=K.stepPhase;K.stepPhase+=n*e*4.4,Math.floor(r/Math.PI)!==Math.floor(K.stepPhase/Math.PI)&&e>.3&&Oe.step();let o=Ze(e/1.5,0,1);if(fe.position.set(K.pos.x+Math.cos(K.stepPhase)*.012*o*s,ni(K.pos.x,K.pos.z)+wd+Ig+Math.abs(Math.sin(K.stepPhase))*.025*o,K.pos.z-Math.cos(K.stepPhase)*.012*o*i),ag(fe.position.x,fe.position.z),fe.rotation.set(K.pitch,K.yaw,0),G.recoilT!==void 0){G.recoilT+=n;let a=H.scare.recoil,c=G.recoilT,l=c<.06?c/.06:Math.exp(-(c-.06)/a.time);fe.rotation.x+=a.pitch*l,fe.position.addScaledVector(ns,-a.back*l),l<.01&&(G.recoilT=void 0)}if(G.shotT!==void 0){G.shotT+=n;let a=G.shotT,c=a<.03?a/.03:Math.exp(-(a-.03)/ws.viewTime);fe.rotation.x+=ws.view*c,fe.rotation.y+=G.shotYaw*c,a>.05&&c<.01&&(G.shotT=void 0)}if(G.shake>0){let a=G.shake*.02;fe.position.x+=(Math.random()-.5)*a,fe.position.y+=(Math.random()-.5)*a,fe.rotation.z+=(Math.random()-.5)*a*2.5}return fe.updateMatrixWorld(!0),fe.getWorldDirection(ns),e}var Ig=0,Lg=1;function tw(n){let e=performance.now(),t=Ca();if(G.endT>=0){G.endT+=n,kt.uniforms.uFade.value=Ze(G.endT/2.2,0,1),G.endT>2.4&&!Dn&&(Dn=!0,Ln<=0&&(Ge.end.querySelector("h1").textContent=H.lines.deadTitle,Ge.end.querySelector(".sub").textContent=H.lines.dead),Ge.end.classList.add("show"),document.pointerLockElement&&document.exitPointerLock());return}zb(n),Ob(n),G.fakeAt&&!ir()&&!G.scaring&&!xn&&(!G.fakeEnd&&e>=G.fakeAt&&(G.fakeEnd=e+Qe(...H.scare.fake.quiet)*1e3,Oe.hush(!0),bt&&bt.freeze("none")),G.fakeEnd&&e>=G.fakeEnd&&(G.fakeAt=0,G.fakeEnd=0,Oe.hush(!1),bt&&bt.restore()));let i=qn.filter(r=>r.scareAt&&!r.gone).sort((r,o)=>r.scareAt-o.scareAt)[0];if(i&&!G.scaring&&!U.on&&!xn&&(!G.hushed&&e>=i.scareAt-H.scare.hush*1e3&&(G.hushed=!0,Oe.hush(!0),bt&&bt.freeze("none")),e>=i.scareAt&&(i.scareAt=0,Ub(i))),e<G.readyAt||G.walking||G.homing||U.on)return;if(Math.abs(K.pos.x-H.stations[Ca()].x)<H.arrive?G.finishAt<0&&!G.endAfter&&(G.finishAt=e+H.endWait*1e3):G.finishAt=-1,G.finishAt>0&&e>=G.finishAt&&!G.scaring&&!ir()){G.finishAt=-1;let r=qn.filter(o=>!o.gone);if(r.length){G.endAfter=!0,r.forEach((o,a)=>{o.scareAt=e+Qe(...H.scare.lastWait)*1e3+a*4e3});return}G.endT=0;return}if(G.endAfter&&!ir()&&!G.scaring&&qn.every(r=>r.gone)){G.endT=0;return}e-G.lastAct>H.hint.idle*1e3&&(G.lastAct=e,G.everCocked||Li($t?H.lines.cock:H.lines.cockPC,3.4))}function Pa(){!fn||xn||Dn||(xn=!0,Ge.pause.classList.add("show"),document.pointerLockElement&&document.exitPointerLock(),Oe.ctx&&Oe.ctx.suspend())}function Dg(){xn&&(xn=!1,Ge.pause.classList.remove("show"),Oe.resume(),ao=performance.now(),wa=0,$t?zd():Rd())}{addEventListener("popstate",()=>{fn&&!Dn&&(Pa(),history.pushState({nh:1},""))});let n=()=>{document.fullscreenElement||document.webkitFullscreenElement||Pa()};document.addEventListener("fullscreenchange",n),document.addEventListener("webkitfullscreenchange",n),Ge.again.addEventListener("click",()=>location.reload())}var Ia=new Map,Sh=-1e9;function Ng(n,e){let t=innerWidth,i=innerHeight;return n<t*H.stick.area[0]&&e>i*H.stick.area[1]?"stick":n>t*H.gun.area[0]&&e>i*H.gun.area[1]?"gun":"screen"}function nw(n){let e={x:n.clientX,y:n.clientY,lx:n.clientX,ly:n.clientY,t:performance.now(),zone:Ng(n.clientX,n.clientY)};Ia.set(n.pointerId,e);try{Di.setPointerCapture(n.pointerId)}catch{}if(e.zone==="stick"){if(_t.id!==null){e.zone="none";return}_t.id=n.pointerId,_t.cx=e.x,_t.cy=e.y,_t.x=_t.y=0,Ge.joy&&(Ge.joy.style.left=`${e.x}px`,Ge.joy.style.top=`${e.y}px`,Ge.joy.classList.add("show"),Ge.knob.style.transform="translate(-50%,-50%)");return}e.zone==="gun"&&(e.timer=setTimeout(()=>{!e.done&&!e.moved&&fn&&!xn&&!Dn&&Aa()&&(e.done=!0,G.lastAct=performance.now())},H.gun.hold*1e3))}function iw(n){_t.id===n&&(_t.id=null,_t.x=_t.y=0,Ge.joy?.classList.remove("show"))}function Fg(n){let e=Ia.get(n.pointerId);if(Ia.delete(n.pointerId),iw(n.pointerId),!e||e.done||!fn||xn||Dn)return;let t=innerWidth,i=innerHeight,s=n.clientX-e.x,r=n.clientY-e.y,o=performance.now();clearTimeout(e.timer);let a=n.type!=="pointercancel"&&Math.hypot(s,r)<18&&(Na||o-e.t<700);if(e.zone==="stick"){if(!a)return;o-Sh<H.stick.dbl*1e3?(Sh=-1e9,G.lastAct=o,(ae.mode==="on"||ae.mode==="off")&&Ra()):Sh=o;return}if(!(e.zone==="none"||e.look)){if(a){let c=n.clientX/t*2-1,l=1-n.clientY/i*2;ot&&ot.state.cocked?Ld(c,l):void 0;return}Ug(e,s,r)}}function sw(n){let e=Ia.get(n.pointerId);if(!e||e.done||!fn||xn||Dn)return;let t=n.clientX-e.x,i=n.clientY-e.y;if(Math.hypot(t,i)>H.swipe.still&&(e.moved=!0,clearTimeout(e.timer)),e.zone==="stick"){if(_t.id!==n.pointerId)return;let s=t,r=i,o=Math.hypot(s,r),a=H.stick.R;o>a&&(s*=a/o,r*=a/o),_t.x=s/a,_t.y=r/a,Ge.knob&&(Ge.knob.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${r}px))`);return}if(e.zone==="screen"&&Pg()&&!G.homing){if(e.moved){e.look=!0;let s=H.move.look;K.yaw-=(n.clientX-e.lx)*s,K.pitch=Ze(K.pitch-(n.clientY-e.ly)*s,-1.2,1.1)}e.lx=n.clientX,e.ly=n.clientY;return}Ug(e,t,i)}function Ug(n,e,t){if(n.zone!=="gun"&&n.zone!=="screen")return;let i=innerWidth,s=Math.min(i,innerHeight)*H.swipe.far;if(n.zone==="gun"&&Math.abs(t)>s&&Math.abs(t)>=H.swipe.cock*Math.abs(e)){n.done=!0,clearTimeout(n.timer),G.lastAct=performance.now(),t>0?Bh():Dd();return}}var lh={p:new T(.2*In,-.07,-.37),r:new tn(.1,.55*In,0)},hh={p:new T(.19*In,.08,-.43),r:new tn(.25,.4*In,0)},uh={p:new T(.02*In,-.2,-.5),r:new tn(-.2,.5*In,.25*In)},$e={pivot:new T,bob:new T,prev:new T,init:!1,lastRX:0,lastRZ:0,lastDVX:0,lastDVZ:0,peak:0,lastCreak:0},fh=.17,mi=new T,jf=new T,ga=new T,rw=new vt,Qm=new T;function eg(n,e,t,i,s){let r=n.x+e.x-t,o=n.z+e.z-i,a=Math.hypot(r,o);a<s&&a>1e-5&&(e.x+=r/a*(s-a),e.z+=o/a*(s-a))}function _d(n,e,t){for(let i of qe){if(n.y<1.55*i.s)for(let s of i.blockers)eg(n,t,s.x,s.z,s.r+e);n.y<1.7*i.s&&eg(n,t,i.headWorld.x,i.headWorld.z,.26*i.s+e)}}function ow(n,e){jf.copy(n).applyQuaternion(fe.quaternion).add(fe.position),ga.copy(jf),ga.y-=.17,mi.set(0,0,0);for(let t=0;t<3;t++)_d(ga,.09,mi),_d(jf,.05,mi);ga.set(mi.x,0,mi.z).applyQuaternion(rw.copy(fe.quaternion).invert()),Qm.lerp(ga,1-Math.exp(-14*e)),n.add(Qm),n.z>-.17&&(n.y-=(n.z+.17)*.8,n.z=-.17)}var Ss=0,ba=0,tg=0,ng=0,aw=new tn,Md=new vt,ig=new vt,Qf=new vt,Sd=new T,Qs=new T,v2=new T(0,-1,0);function cw(n,e,t,i){let s=(Fh||Pd||Uh)&&ae.mode!=="relight";Ma=bd(Ma,s?1:0,n/.35),ah=s?ah+n:Math.max(0,ah-n*2);let r=Xt(Ma),o=Sd.copy(lh.p).lerp(hh.p,r),a=Jt(lh.r.x,hh.r.x,r),c=Jt(lh.r.y,hh.r.y,r),l=Jt(lh.r.z,hh.r.z,r);if(ae.mode==="relight"){let x=ae.t<.6?Xt(ae.t/.6):ae.t<1.6?1:Xt(Math.max(0,1-(ae.t-1.6)/.6));o.lerp(uh.p,x),a=Jt(a,uh.r.x,x),c=Jt(c,uh.r.y,x),l=Jt(l,uh.r.z,x)}(ae.mode==="turning"||ae.mode==="up")&&(l+=Math.sin(Math.min(1,ae.t/.6)*Math.PI)*.12*In);let h=(K.yaw-tg)/Math.max(n,.001),d=(K.pitch-ng)/Math.max(n,.001);tg=K.yaw,ng=K.pitch,Ss=yt(Ss,Ze(-h*.035,-.09,.09),9,n),ba=yt(ba,Ze(-d*.03,-.07,.07),9,n),o.x-=Ss*.6,o.y+=ba*.6,l-=Ss*1.2*In,c+=Ss*.6*In,o.x+=Math.cos(K.stepPhase)*.009*i,o.y+=Math.abs(Math.sin(K.stepPhase))*.012*i-.006*i;let u=1+Math.min(2.2,ah/3),f=Ln<H.hp?Jt(1,H.hurt.shake[Math.min(Ln,H.hurt.shake.length-1)],so):1,m=7e-4*u*f,v=.0018*(.6+.4*u);o.x+=Math.sin(e*9.3)*Math.sin(e*6.1+1.3)*m+Math.sin(e*.37+2.1)*v,o.y+=Math.sin(e*10.7+.5)*Math.sin(e*4.3)*m+Math.sin(e*.29)*v,l+=Math.sin(e*8.1)*.003*u,ow(o,n),Gn.position.copy(o),Gn.rotation.set(a,c,l),Gn.updateMatrixWorld(!0),ts&&ts.fore&&(Bm.set(0,1,0).applyQuaternion(Md.copy(fe.quaternion).invert()),nb(ts,.7,Bm),pg(ts)),Qf.copy(fe.quaternion),$e.pivot.copy(Gn.position).applyQuaternion(Qf).add(fe.position),$e.init||($e.bob.copy($e.pivot).add(Qs.set(0,-fh,0)),$e.prev.copy($e.bob),$e.init=!0);let p=Math.max(1,Math.ceil(n/(1/120))),g=n/p;for(let x=0;x<p;x++){let S=($e.bob.x-$e.prev.x)*(1-1.6*g),C=($e.bob.y-$e.prev.y)*(1-1.6*g),R=($e.bob.z-$e.prev.z)*(1-1.6*g);$e.prev.copy($e.bob),$e.bob.x+=S,$e.bob.y+=C-9.8*g*g,$e.bob.z+=R,Qs.copy($e.bob).sub($e.pivot).setLength(fh),$e.bob.copy($e.pivot).add(Qs),mi.set(0,0,0),_d($e.bob,.085,mi),(mi.x||mi.z)&&($e.bob.x+=mi.x,$e.bob.z+=mi.z,Qs.copy($e.bob).sub($e.pivot).setLength(fh),$e.bob.copy($e.pivot).add(Qs))}Qs.copy($e.bob).sub($e.pivot).normalize().applyQuaternion(Md.copy(Qf).invert());let _=Sd.copy(Qs).negate();Pn.set(1,0,0).applyQuaternion(Gn.quaternion),ti.copy(Pn).addScaledVector(_,-Pn.dot(_)).normalize(),to.crossVectors(ti,_),no.makeBasis(ti,_,to),ig.setFromRotationMatrix(no),co.quaternion.copy(Gn.quaternion).invert().multiply(ig);let w=$e.bob.x-$e.pivot.x,b=$e.bob.z-$e.pivot.z,y=w-$e.lastRX,M=b-$e.lastRZ;$e.peak=Math.max($e.peak*Math.exp(-n*1.5),Math.hypot(w,b)/fh),y*$e.lastDVX+M*$e.lastDVZ<0&&$e.peak>.16&&e-$e.lastCreak>.3&&(Math.random()<.7&&Oe.creak(Math.min(1,$e.peak*2.5)),$e.lastCreak=e),$e.lastRX=w,$e.lastRZ=b,$e.lastDVX=y,$e.lastDVZ=M}function lw(n){let e=0,t=0;(Ht.has("KeyD")||Ht.has("ArrowRight"))&&(e+=1),(Ht.has("KeyA")||Ht.has("ArrowLeft"))&&(e-=1),(Ht.has("KeyW")||Ht.has("ArrowUp"))&&(t+=1),(Ht.has("KeyS")||Ht.has("ArrowDown"))&&(t-=1),e+=_t.x,t-=_t.y,Wn&&(e=0,t=0);let i=Math.hypot(e,t);i>1&&(e/=i,t/=i),ae.mode==="relight"&&(e*=.2,t*=.2),Dn&&(e=t=0);let s=Math.sin(K.yaw),r=Math.cos(K.yaw),o=(e*r-t*s)*1.5,a=(-e*s-t*r)*1.5;K.vel.x=yt(K.vel.x,o,8,n),K.vel.z=yt(K.vel.z,a,8,n),K.pos.x+=K.vel.x*n,K.pos.z+=K.vel.z*n,gd(K.pos);let c=Math.hypot(K.vel.x,K.vel.z),l=K.stepPhase;K.stepPhase+=n*c*4.4,Math.floor(l/Math.PI)!==Math.floor(K.stepPhase/Math.PI)&&c>.3&&Oe.step();let h=Ze(c/1.5,0,1);return fe.position.set(K.pos.x+Math.cos(K.stepPhase)*.012*h*r,wd+Math.abs(Math.sin(K.stepPhase))*.025*h,K.pos.z-Math.cos(K.stepPhase)*.012*h*s),ag(fe.position.x,fe.position.z),fe.rotation.set(K.pitch,K.yaw,0),fe.updateMatrixWorld(!0),fe.getWorldDirection(ns),c}var sg=1e3/60,wa=0,ao=performance.now(),dh=0,ed=0,ph=0,td=!1,ns=new T,y2=new T,mh=new T,gh=new T,xh={fogC:new ge(.062,.064,.073),fogD:.05,zen:new ge(.0065,.007,.0088)},vh={fogC:new ge(.0035,.004,.0055),fogD:.009,hor:new ge(.028,.03,.038),zen:new ge(.002,.0022,.003)};function Nd(n){if(document.hidden||requestAnimationFrame(Nd),xn){ao=n;return}if(n<wa-1)return;wa=Math.max(wa+sg,n+sg*.6);let e=Math.min(.1,(n-ao)/1e3)*Lg;ao=n;let t=n/1e3;td&&(td=!1,Ad()),es.uTime.value=t,sd.uTime.value=t,ya.uTime.value=t;let i=ew(e);VS(e,ae.gustT>=0);let s=Ze(i/1.5,0,1);if(bb(e),XS(e,ae.gustT>=0),cw(e,t,i,s),Wn&&ot&&db(e,t),bh){let d=bh,u=bn.position;Ii.position.set(u.x+Math.sin(d.yaw)*Math.cos(d.pitch)*d.dist,u.y+Math.sin(d.pitch)*d.dist,u.z+Math.cos(d.yaw)*Math.cos(d.pitch)*d.dist),Ii.lookAt(u.x,u.y-.04,u.z),Ii.updateMatrixWorld(!0)}co.updateMatrixWorld(!0),mh.copy(ug),co.localToWorld(mh);let r=ae.level*(1+.04*Math.sin(t*11)*Math.sin(t*17.3+1.1)+.02*Math.sin(t*31));Eh.position.copy(mh),Eh.intensity=1*r,xi.position.copy(mh).applyQuaternion(fe.quaternion).add(fe.position),xi.intensity=vg*r*(1+.5*Xt(Ma)),es.uLanternPos.value.copy(xi.position),ad.emissiveIntensity=.16*r,jr.material.opacity=.5*r,eo.visible=ae.level>.01,eo.scale.setScalar(.6+.4*ae.level),Oe.setHiss(ae.level),gh.copy(Th.position).sub(fe.position).applyQuaternion(Md.copy(fe.quaternion).invert()),dd.position.copy(gh);let o=9*(1+.14*Math.sin(t*7.7)*Math.sin(t*2.3+1.1)+.06*Math.sin(t*23)),a=Xt(Ze((gh.z/Math.max(gh.length(),.001)+.2)/.8,0,1));Th.intensity=o,dd.intensity=o*Jt(1,.22,a),Sa=bd(Sa,ae.level<.05?1:0,e/(ae.level<.05?2.6:.7));let c=Xt(Sa),l=Math.hypot(fe.position.x-En.x,fe.position.z-En.z),h=Jt(.42,.9,Xt(Ze((l-2.5)/4.5,0,1)));Mb(e),kt.uniforms.uExp.value=Jt(.26,h,c)*_a,kt.uniforms.uDesat.value=c*.75*Xt(Ze((h-.42)/.48,0,1)),qt.fog.color.copy(vh.fogC).lerp(xh.fogC,c),er=yt(er,Sg>=0?1:.9*Math.min(1,va/H.told),1.2,e),kt.uniforms.uCount.value=er,Nh.uniforms.uCount.value=er,_g.strength=.025+.02*er,qt.fog.density=Jt(vh.fogD+.004*er,xh.fogD,c),pd.material.uniforms.uHor.value.copy(vh.hor).lerp(xh.fogC,c),pd.material.uniforms.uZen.value.copy(vh.zen).lerp(xh.zen,c),lg.uHaze.value.copy(qt.fog.color),Ed.intensity=Jt(.05,.24,c),yg.intensity=Jt(.05,.07,c),es.uEyeGain.value=60*ae.level,es.uEyeSelf.value=5*Math.min(1,c*2.2),kt.uniforms.uSeed.value=n*.061%997;for(let d of qe)Mg(d,e,t);if(tw(e),Nb(),Db(),mb(e),Yb(e,t),Jb(e),Cg(e),Oe.update(fe.position,ns,qe,t),oo>0&&(oo-=e,oo<=0&&Ge.sub.classList.remove("show")),Bb(),ss.render(e),dh+=e,ed++,dh>=1){let d=ed/dh;Ge.fps.textContent=`fps ${Math.round(d)} \xB7 ${kt.uniforms.uRes.value.x}\xD7${kt.uniforms.uRes.value.y}`,ph=d<50?ph+1:0,ph>=3&&md>360&&(md-=60,td=!0,ph=0),dh=0,ed=0}}document.addEventListener("visibilitychange",()=>{document.hidden||(ao=performance.now(),wa=0,requestAnimationFrame(Nd),xn||Oe.resume())});var hw=1.3,uw=1.45,_2={hor:new ge(.6,.57,.5),zen:new ge(.13,.23,.45),fog:new ge(.55,.52,.46),fogD:.0055,haze:new ge(.36,.37,.41),exp:.56};function Fd(n){let e=n.mesh.position,t=n.s,i=Math.sin(n.heading),s=Math.cos(n.heading),r=n.caps||(n.caps=new Float64Array(10));r[0]=e.x-i*.67*t,r[1]=e.z-s*.67*t,r[2]=e.x+i*.37*t,r[3]=e.z+s*.37*t,r[4]=.33*t;let o=n.ai.yaw,a=Math.sin(o)*.62,c=.58+Math.cos(o)*.62;return r[5]=e.x+i*.62*t,r[6]=e.z+s*.62*t,r[7]=e.x+(s*a+i*c)*t,r[8]=e.z+(-i*a+s*c)*t,r[9]=.2*t,r}var La=0,Da=0,Vn=0;function Ch(n,e,t,i,s,r,o,a){let c=t-n,l=i-e,h=o-s,d=a-r,u=n-s,f=e-r,m=c*c+l*l,v=h*h+d*d,p=h*u+d*f,g=0,_=0;if(m<=1e-9&&v>1e-9)_=Ze(p/v,0,1);else if(m>1e-9){let w=c*u+l*f;if(v<=1e-9)g=Ze(-w/m,0,1);else{let b=c*h+l*d,y=m*v-b*b;g=y>1e-9?Ze((b*p-w*v)/y,0,1):0,_=(b*g+p)/v,_<0?(_=0,g=Ze(-w/m,0,1)):_>1&&(_=1,g=Ze((b-w)/m,0,1))}}La=n+c*g-(s+h*_),Da=e+l*g-(r+d*_),Vn=Math.hypot(La,Da)}function rg(){for(let e of qe)Fd(e);let n=99;for(let e=0;e<qe.length;e++)for(let t=e+1;t<qe.length;t++){let i=qe[e].caps,s=qe[t].caps;for(let r=0;r<10;r+=5)for(let o=0;o<10;o+=5)Ch(i[r],i[r+1],i[r+2],i[r+3],s[o],s[o+1],s[o+2],s[o+3]),n=Math.min(n,Vn-i[r+4]-s[o+4])}return n}var og=8,fw=.9,nd=9;function id(n,e,t){n.mesh.position.x+=e,n.mesh.position.z+=t;let i=n.caps;i[0]+=e,i[1]+=t,i[2]+=e,i[3]+=t,i[5]+=e,i[6]+=t,i[7]+=e,i[8]+=t,n.shoveX+=e,n.shoveZ+=t}var zg=()=>qe.filter(n=>!n.dead);function dw(){let n=zg(),e=aa.uPC.value;for(let t of n)Fd(t);for(let t=0;t<4;t++){let i=!1;for(let s=0;s<n.length;s++){let r=n[s],o=r.mesh.position,a=r.caps;for(let c=s+1;c<n.length;c++){let l=n[c],h=l.mesh.position,d=l.caps;if(!(Math.abs(o.x-h.x)>4.5||Math.abs(o.z-h.z)>4.5))for(let u=0;u<10;u+=5)for(let f=0;f<10;f+=5){Ch(a[u],a[u+1],a[u+2],a[u+3],d[f],d[f+1],d[f+2],d[f+3]);let m=a[u+4]+d[f+4];if(Vn>=m)continue;let v=La,p=Da,g=Vn;g<1e-5&&(v=o.x-h.x,p=o.z-h.z,g=Math.hypot(v,p),g<1e-5&&(v=1,p=0,g=1)),v/=g,p/=g;let _=m-Vn+.002,w=(r.speed+.15)/(r.speed+l.speed+.3);id(r,v*_*w,p*_*w),id(l,-v*_*(1-w),-p*_*(1-w)),i=!0}}}for(let s of n){let r=s.caps,o=s.mesh.position;for(let a of ca){let c=a.x+Math.round((e.x-a.x)/Ut)*Ut,l=a.z+Math.round((e.y-a.z)/Ut)*Ut;if(!(Math.abs(c-o.x)>3||Math.abs(l-o.z)>3))for(let h=0;h<10;h+=5){Ch(r[h],r[h+1],r[h+2],r[h+3],c,l,c,l);let d=r[h+4]+a.r;if(Vn>=d)continue;let u=La,f=Da,m=Vn;m<1e-5&&(u=o.x-c,f=o.z-l,m=Math.hypot(u,f)||1),id(s,u/m*(d-Vn+.002),f/m*(d-Vn+.002)),i=!0}}}if(!i)break}}function pw(n){let e=zg();if(!e.length)return;let t=0,i=0;for(let r of e)t+=r.mesh.position.x,i+=r.mesh.position.z,Fd(r);t/=e.length,i/=e.length;let s=aa.uPC.value;for(let r of e){let o=r.mesh.position,a=o.x-K.pos.x,c=o.z-K.pos.z,l=Math.hypot(a,c);r.press=0,r.pdx=l>.001?a/l:0,r.pdz=l>.001?c/l:0}for(let r of e){let o=Math.max(Ze(r.press*4,0,1),r.startle||0);for(let a of e){if(a===r)continue;let c=Math.hypot(r.mesh.position.x-a.mesh.position.x,r.mesh.position.z-a.mesh.position.z);c<nd&&(o=Math.max(o,a.stir*.9*Math.min(1,(nd-c)/(nd-3))))}r.stirGoal=o}for(let r of e)r.stir=r.stirGoal>r.stir?Math.min(r.stirGoal,r.stir+n*2):Math.max(r.stirGoal,r.stir-n*.3);for(let r of e){let o=r.mesh.position,a=r.caps,c=0,l=0;r.press>0&&(c+=r.pdx*r.press*2.2,l+=r.pdz*r.press*2.2),r.startle>0&&(c+=r.pdx*r.startle*1.9,l+=r.pdz*r.startle*1.9,r.startle=Math.max(0,r.startle-n*.3)),r.alarm=Math.max(r.alarm-n*.25,r.press,(r.startle||0)*.9);let h=t-o.x,d=i-o.z,u=Math.hypot(h,d);if(u>6){let P=.9*Math.min(1,(u-6)/8);c+=h/u*P,l+=d/u*P}let f=0,m=0,v=0;for(let P of e){if(P===r)continue;let D=P.mesh.position,k=Math.hypot(o.x-D.x,o.z-D.z);if(k<og&&P.speed>.08){let L=1-k/og;f+=Math.sin(P.heading)*P.speed*L,m+=Math.cos(P.heading)*P.speed*L,v+=L}if(k<4.5){let L=P.caps;for(let V=0;V<10;V+=5)for(let q=0;q<10;q+=5){Ch(a[V],a[V+1],a[V+2],a[V+3],L[q],L[q+1],L[q+2],L[q+3]);let X=V+q===0?.9:.45,ce=Vn-a[V+4]-L[q+4];if(ce<X&&Vn>1e-5){let J=(X-ce)/X*.9;c+=La/Vn*J,l+=Da/Vn*J}}}}if(v>0){let P=fw*r.stir*Math.min(1,v/.6)/v;c+=f*P,l+=m*P}for(let P of ca){let D=P.x+Math.round((s.x-P.x)/Ut)*Ut,k=P.z+Math.round((s.y-P.z)/Ut)*Ut,L=o.x-D,V=o.z-k,q=Math.hypot(L,V);if(q<1.8&&q>.001){let X=(1.8-q)/1.8*1.2;c+=L/q*X,l+=V/q*X}}r.wx=yt(r.wx,c,2.5,n),r.wz=yt(r.wz,l,2.5,n);let p=Math.hypot(r.wx,r.wz),g=0;p>.15&&(g=Math.atan2(r.wx,r.wz)-r.heading,g=Math.atan2(Math.sin(g),Math.cos(g)));let _=.3+r.speed/2.2;r.turnVel=yt(r.turnVel,p>.15?Ze(g*1.8,-_,_):0,3,n);let w=.45*r.s,b=Math.sin(r.heading),y=Math.cos(r.heading),M=o.x-b*w,x=o.z-y*w;r.heading+=r.turnVel*n;let S=Math.sin(r.heading),C=Math.cos(r.heading);o.x=M+S*w,o.z=x+C*w;let R=p>.15?Math.min(hw,p)*(.2+.8*Math.max(0,Math.cos(g))):0;r.speed=yt(r.speed,R,1.6,n),o.x+=S*r.speed*n,o.z+=C*r.speed*n,r.turnLead=Ze(g,-.6,.6)*Math.min(1,p)}dw();for(let r of e){let o=r.mesh.position;r.mesh.rotation.y=r.heading;let a=Math.min(.8,Math.hypot(r.shoveX,r.shoveZ)/Math.max(n,.001));r.shoveX=0,r.shoveZ=0;let c=r.speed+Math.abs(r.turnVel)*.55+a;r.gait=yt(r.gait,Ze(c/.9,0,1),4,n),r.gaitPhase+=c*n/uw,o.y=-.012*r.gait*(.5-.5*Math.cos(r.gaitPhase*Math.PI*4)),r.mesh.material.userData.own.uGait.value.set(r.gaitPhase,r.gait,0,0),r.mesh.updateMatrixWorld();let l=Math.sin(r.heading),h=Math.cos(r.heading);[.55,0,-.6].forEach((d,u)=>{let f=d*.92*r.s;r.blockers[u].x=o.x+l*f,r.blockers[u].z=o.z+h*f})}}if(Wt("tip")){let n=Wt("tip"),e=H.tips.map((r,o)=>o).sort(()=>Math.random()-.5),t=0,i=()=>{n.innerHTML=`<b>TIP</b>${H.tips[e[t++%e.length]]}`};i();let s=setInterval(()=>{if(Ge.start.classList.contains("gone")){clearInterval(s);return}n.classList.add("fade"),setTimeout(()=>{i(),n.classList.remove("fade")},500)},H.tipEvery*1e3)}(async()=>{try{$S(),tb(),Wn&&hb();let n=0,e=4+$l.length+1+(Wn?1:0),t=()=>{n++},i=Promise.all([Gf(()=>{},"../monsters/"),Gf(()=>{},"../monsters/","cows-far/cows.json")]).then(([a,c])=>{Qi.lite=a,Qi.far=c}),[s,,r,o]=await Promise.all([Gf(t),ib().then(t),Promise.all($l.map(a=>Af(`plants/saguaro-${a}.json`).then(c=>(t(),c)))),Promise.all(Rf.map(a=>Af(`plants/bone-${a}.json`))).then(a=>(t(),a)),Wn?ub().then(t):Promise.resolve()]);i&&(await i,Qi.full=s),ii=new Zl(r,Wf),qt.add(ii.group),tr=dm(Wf),tr.push(...pm(o,Wf)),tr.push(um((a,c)=>Math.hypot(a-En.x,c-En.z)<1.3));for(let a of tr)qt.add(a.group);ii.setPixel(fe,kt.uniforms.uRes.value.y),ii.update(K.pos.x,K.pos.z,fe),Ab(s);for(let a of bg)Ib(a);for(let a of Ih)hg(a,!0);wn.compile(qt,fe),wn.compile(sr,Ii),Ge.loadTxt.textContent="",Ge.startBtn.disabled=!1,Ge.startBtn.textContent="\uC2DC\uC791",Wt("weed")?.classList.add("done"),window.__ready=!0,ao=performance.now(),requestAnimationFrame(Nd)}catch(n){console.error(n),Ge.loadTxt.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."}})();var Bg=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),Ud=()=>document.fullscreenElement||document.webkitFullscreenElement;function zd(){if(!Bg||Ud())return;let n=document.documentElement,e=()=>{try{$t&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};try{let t=(n.requestFullscreen||n.webkitRequestFullscreen).call(n,{navigationUI:"hide"});t&&t.then?t.then(e).catch(()=>{}):e()}catch{}}function mw(){if(!Ud()){zd();return}try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch{}}if(Ge.fsBtn){Ge.fsBtn.hidden=!Bg,Ge.fsBtn.addEventListener("click",e=>{e.stopPropagation(),mw()});let n=()=>Ge.fsBtn.setAttribute("aria-pressed",String(!!Ud()));document.addEventListener("fullscreenchange",n),document.addEventListener("webkitfullscreenchange",n)}Ge.startBtn.addEventListener("click",()=>{if(!fn){fn=!0,Ge.start.classList.add("gone"),document.body.classList.add("playing"),zd();try{Oe.init()}catch(n){console.warn("sound",n)}if(Rd(),Ge.hint&&setTimeout(()=>Ge.hint.classList.add("gone"),9e3),Oe.loadMusic(),Oe.ctx){bt=Vf({context:Oe.ctx});for(let n of qn)bt.useFile(da[n.mon.form].roar,`../sounds/roar-${n.mon.form}.mp3`)}history.pushState({nh:1},""),setTimeout(()=>Li(H.lines.open,3.6),1200),G.readyAt=performance.now()+4800,G.lastAct=G.readyAt,setTimeout(()=>{Li($t?H.lines.walk:H.lines.walkPC,3.4),G.lastAct=performance.now()},5200),setTimeout(()=>{G.everCocked||Li($t?H.lines.cock:H.lines.cockPC,3.4),G.lastAct=performance.now()},9600)}});Ge.resume.addEventListener("click",()=>Dg());Na&&(window.__dbg={state:()=>({mode:ae.mode,level:ae.level,oil:ae.oil,nightT:Sa,raiseT:Ma,count:va,countT:er,revealT:Sg,ended:Dn,sub:Ge.sub.textContent,pos:K.pos.toArray()}),countAll:()=>{Eb=0;for(let n of qe)n.lit=2},setCount:n=>{va=n},herd:()=>qe.map(n=>[+n.mesh.position.x.toFixed(2),+n.mesh.position.z.toFixed(2),+n.speed.toFixed(2),+n.gait.toFixed(2),+n.heading.toFixed(2)]),gap:()=>rg(),raw:n=>{Nh.enabled=!n},cock:()=>Fa(),fire:()=>Dh(),vmLight:n=>{_h.intensity=n,_h.color.setRGB(1,1,1),_h.groundColor.setRGB(.4,.4,.4)},gunHold:(n,e,t,i,s)=>{gg.set(n,e,t),i!==void 0&&(ro.yaw=i,ro.roll=s)},hideWorld:n=>{qt.visible=!n},vmOrbit:(n,e,t)=>{bh=n===void 0?null:{yaw:n,pitch:e,dist:t},bh||(Ii.position.set(0,0,0),Ii.quaternion.identity())},reload:()=>Aa(),gun:()=>({anim:ot?.state.anim?.type||null,step:ot?.state.anim?.steps?.[ot.state.anim.i]?.k,cocked:ot?.state.cocked,top:ot?.state.top,chambers:ot?.state.chambers.slice(),dead:qe.filter(n=>n.dead).length,startled:qe.filter(n=>n.startle>.05).length}),aimAt:n=>{let e=qe[n],t=e.blockers[1].x-K.pos.x,i=e.blockers[1].z-K.pos.z;K.yaw=Math.atan2(-t,-i),K.pitch=Math.atan2(.95*e.s-wd,Math.hypot(t,i))},plantsNear:n=>{let e=[ii,...tr][n];return e?e.items.map(t=>{let i=t.x+Math.round((K.pos.x-t.x)/Ut)*Ut,s=t.z+Math.round((K.pos.z-t.z)/Ut)*Ut;return{v:t.v,x:+i.toFixed(2),z:+s.toFixed(2),d:+Math.hypot(i-K.pos.x,s-K.pos.z).toFixed(1),H:+t.H.toFixed(2)}}).sort((t,i)=>t.d-i.d):[]},trisBy:()=>{let n=t=>{let i=0;return t.traverse(s=>{if(s.visible&&s.geometry&&s.geometry.index){let r=s.isInstancedMesh?s.count:s.geometry.isInstancedBufferGeometry?s.geometry.instanceCount:1;i+=s.geometry.index.count/3*r}}),Math.round(i)},e={cows:0};for(let t of qe)e.cows+=n(t.mesh);return e.saguaro=n(ii.group),["ocotillo","creosote","bursage","skeleton","bones","grass"].forEach((t,i)=>{e[t]=n(tr[i].group)}),e},tris:()=>{let n=0;return qt.traverse(e=>{if(e.visible&&e.geometry&&e.geometry.index){let t=e.isInstancedMesh?e.count:e.geometry.isInstancedBufferGeometry?e.geometry.instanceCount:1;n+=e.geometry.index.count/3*t}}),n},saguaros:()=>ii?ii.items.map(n=>{let e=n.x+Math.round((K.pos.x-n.x)/Ut)*Ut,t=n.z+Math.round((K.pos.z-n.z)/Ut)*Ut;return{kind:$l[n.v],x:+e.toFixed(2),z:+t.toFixed(2),d:+Math.hypot(e-K.pos.x,t-K.pos.z).toFixed(1),H:+n.H.toFixed(1)}}).sort((n,e)=>n.d-e.d):[],herdRaw:()=>qe.map(n=>[n.mesh.position.x,n.mesh.position.z,n.heading,n.stir,n.speed]),sim:(n,e,t)=>{t!==void 0&&(K.yaw=t),e&&Ht.add(e);let i=1/60,s=qe.map(u=>u.mesh.position.clone()),r=99,o=0,a=0;for(;o<n;o+=i){lw(i),pw(i);for(let f of qe)Mg(f,i,o);let u=rg();r=Math.min(r,u),u<-.02&&a++}e&&Ht.delete(e);let c=qe.map((u,f)=>+u.mesh.position.distanceTo(s[f]).toFixed(1)),l=0,h=0;for(let u of qe)l+=u.mesh.position.x,h+=u.mesh.position.z;l/=qe.length,h/=qe.length;let d=Math.max(...qe.map(u=>Math.hypot(u.mesh.position.x-l,u.mesh.position.z-h)));return{minGap:+r.toFixed(3),overlapSteps:a,moved:c,centre:[+l.toFixed(1),+h.toFixed(1)],spread:+d.toFixed(1),speeds:qe.map(u=>+u.speed.toFixed(2)),player:[+K.pos.x.toFixed(1),+K.pos.z.toFixed(1)]}},tumbles:()=>Ih.map(n=>[+n.pos.x.toFixed(1),+n.pos.z.toFixed(1),+n.speed.toFixed(2)]),lightAt:n=>Tb(qe[n].mesh.localToWorld(new T(0,1,0))),goto:(n,e,t,i)=>{K.pos.set(n,0,e),K.yaw=t,K.pitch=i??0},walk:(n,e)=>{Ht.add(n),setTimeout(()=>Ht.delete(n),e)},turn:n=>{K.yaw+=n},raise:n=>{Fh=n},off:()=>Ra(),gust:()=>{ae.gustTimer=0},blow:()=>Ah("wind"),oil:n=>{ae.oil=n},relight:()=>Ra(),night:()=>{Sa=1},countStation:n=>{for(let e of qe)e.station===n&&!e.dead&&!e.gone&&(e.counted||va++,e.counted=!0)},fake:()=>[G.fakeAt?Math.round(G.fakeAt-performance.now()):null,!!G.fakeEnd],hp:()=>Ln,hurt:()=>zh(),scaring:()=>!!G.scaring,scareIn:()=>{let n=qn.find(e=>e.scareAt);return n?Math.round(n.scareAt-performance.now()):null},passed:()=>ir(),station:n=>{G.i=n,K.pos.x=H.stations[n].x},monScreen:()=>{let n=Id().eyeWorld.clone().project(fe);return[Math.round((n.x+1)/2*innerWidth),Math.round((1-n.y)/2*innerHeight)]},overlaps:()=>{let n=[],e=qe.filter(t=>!t.dead&&!t.gone);for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let s=e[t],r=e[i],o=0,a=[...s.blockers,{x:s.headWorld.x,z:s.headWorld.z,r:.24*s.s}],c=[...r.blockers,{x:r.headWorld.x,z:r.headWorld.z,r:.24*r.s}];for(let l of a)for(let h of c)o=Math.max(o,l.r+h.r-Math.hypot(l.x-h.x,l.z-h.z));o>.05&&n.push([qe.indexOf(s),qe.indexOf(r),+o.toFixed(2),s.station,r.station,!!s.back,!!r.back])}return n.sort((t,i)=>i[2]-t[2])},cowInfo:n=>{let e=qe[n];return{vis:e.mesh.visible,mon:!!e.mon,gone:!!e.gone,dead:!!e.dead,walk:!!e.walk,flinch:e.flinchIn??null,p:[+e.mesh.position.x.toFixed(2),+e.mesh.position.z.toFixed(2)],b:e.blockers.map(t=>[+t.x.toFixed(2),+t.z.toFixed(2)]),h:[+e.headWorld.x.toFixed(2),+e.headWorld.z.toFixed(2)],lim:e.yawLim}},sep:()=>{let n=__dbg.overlaps().slice(0,3);return Cg(.016),[n,__dbg.overlaps().slice(0,3)]},lods:()=>[0,1,2].map(n=>qe.filter(e=>e.lod===n).length),monsters:()=>qn.map(n=>({i:qe.indexOf(n),st:n.station,form:n.mon.form,gone:!!n.gone,scareIn:n.scareAt?Math.round(n.scareAt-performance.now()):null})),monster:()=>Hn&&{i:qe.indexOf(Hn),clue:Hn.mon.clue,st:Hn.station,eyes:Hn.mon.eyes.map(n=>n.position.toArray().map(e=>+e.toFixed(2)))},mouthGlow:n=>{let e=Hn?.mon.M;e&&(e.own.uDbgMouth.value=n)},maskOn:()=>kt.uniforms.uMaskOn.value,lampOut:()=>Ah("hand"),lampLevel:()=>+ae.level.toFixed(2),music:()=>({drones:Oe.drones?.length??0,moo:!!Oe.mooBuf,moos:Oe.moos??0,twists:Oe.twists?.length??0,gun:!!Oe.gunBuf,droneG:+(Oe.musicG?.gain.value??-1).toFixed(3),next:+(Oe.droneAt-Oe.ctx?.currentTime).toFixed(1),nextMoo:+(Oe.mooAt-Oe.ctx?.currentTime).toFixed(1)}),mooNow:()=>{Oe.mooAt&&(Oe.mooAt=Oe.ctx.currentTime)},monMouth:()=>{let n=Hn?.mon.M;if(!n||!n.root.visible)return null;let e=kf(n,new T);if(!e)return null;let t=e.clone().sub(fe.position).dot(fe.getWorldDirection(new T));return e.project(fe),[+e.x.toFixed(3),+e.y.toFixed(3),+t.toFixed(3),fe.near]},mouthSpan:()=>Hn?.mon.M?Sm(Hn.mon.M):null,monEyes:()=>{let n=Hn?.mon.M;return!n||!n.root.visible?null:(n.root.updateMatrixWorld(!0),n.meta.eyes.map(e=>{let t=new T(...e).applyMatrix4(n.root.matrixWorld).project(fe);return[+t.x.toFixed(3),+t.y.toFixed(3)]}))},slow:n=>{Lg=n},fakeChance:n=>{H.scare.fake.chance=n},fight:()=>({on:U.on,phase:U.phase,hits:U.hits,d:U.on?+Math.hypot(fe.position.x-U.pos.x,fe.position.z-U.pos.z).toFixed(2):null,hp:Ln,at:U.on?[+U.pos.x.toFixed(2),+U.pos.z.toFixed(2)]:null}),faceFight:()=>{K.yaw=Math.atan2(-(U.pos.x-K.pos.x),-(U.pos.z-K.pos.z)),K.pitch=-.25},shootMonster:()=>{let n=Hn;return n&&!n.gone?(Eg(n),!0):!1},hitFight:()=>Rg(),gunState:()=>ot&&{cocked:ot.state.cocked,anim:ot.state.anim?.type||null,chambers:ot.state.chambers.slice(),top:ot.state.top},shootAt:(n,e)=>Ld(n,e),cock:()=>Bh(),dead:()=>qe.filter(n=>n.dead).length,stick:(n,e)=>{_t.x=n,_t.y=e},pos:()=>[+K.pos.x.toFixed(2),+K.pos.z.toFixed(2),+K.yaw.toFixed(2),!!G.homing],zone:(n,e)=>Ng(n*innerWidth,e*innerHeight),stickTwice:()=>{Sh=performance.now();let n={pointerId:99,clientX:40,clientY:innerHeight-40,type:"pointerup"};return Ia.set(99,{x:40,y:innerHeight-40,t:performance.now(),zone:"stick"}),Fg(n),ae.mode},nightState:()=>({i:G.i,walking:G.walking,count:va,misses:G.misses,matches:ae.matches,ended:Dn,paused:xn,endT:G.endT,finishAt:G.finishAt,sub:Ge.sub.textContent,lamp:ae.mode,raised:Uh,x:+K.pos.x.toFixed(2),cows:qe.map(n=>({st:n.station,x:+n.mesh.position.x.toFixed(2),y:+n.y0.toFixed(2),z:+n.mesh.position.z.toFixed(2),h:+n.heading.toFixed(3),fi:n.flinchIn??null,w:!!n.walk,counted:n.counted}))}),tapCow:(n,e)=>{let t=qe[n],i=(e?new T(t.blockers[1].x,t.y0+.95*t.s,t.blockers[1].z):t.eyeWorld.clone()).project(fe);return i.x,i.y,[+i.x.toFixed(3),+i.y.toFixed(3)]},eyes:()=>qe.map(n=>[+n.y0.toFixed(2),+n.mesh.rotation.x.toFixed(2),+n.eyeWorld.y.toFixed(2),+n.eyeWorld.z.toFixed(2),+n.mesh.position.z.toFixed(2)]),screenOf:n=>{let e=qe[n].eyeWorld.clone().project(fe);return[Math.round((e.x+1)/2*innerWidth),Math.round((1-e.y)/2*innerHeight)]},tapAt:(n,e)=>void 0,next:()=>Qb(),ready:()=>{G.readyAt=0},pause:()=>Pa(),resume:()=>Dg(),seen:()=>qe.map((n,e)=>{let t=n.headWorld,i=t.clone().project(fe),s=t.clone().sub(fe.position),r=s.length();s.divideScalar(r);let o=null;for(let[a,c]of qe.entries()){if(c===n)continue;for(let h of c.blockers)nr(fe.position,s,new T(h.x,c.y0+.95*c.s,h.z),.43*c.s)<r-.3&&(o=a);nr(fe.position,s,c.headWorld,.24*c.s)<r-.3&&(o=a)}return{i:e,st:n.station,y:+t.y.toFixed(2),sx:+i.x.toFixed(2),sy:+i.y.toFixed(2),by:o}}),eyeUp:(n,e,t)=>{Ig=n,e!==void 0&&(K.pos.z=e),t!==void 0&&(K.pitch=t)},arm:()=>({W:ts.W.toArray(),E:ts.E.toArray(),f:ts.f.toArray(),u:ts.u.toArray(),hp:Gn.position.toArray(),hq:Gn.quaternion.toArray(),lq:co.quaternion.toArray(),lp:xi.position.toArray(),exp:kt.uniforms.uExp.value,adapt:_a})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
