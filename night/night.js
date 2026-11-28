(()=>{var Sp=0,lu=1,bp=2;var Nr=1,wp=2,Ur=3,wi=0,Qt=1,qt=2,Wi=0,Fr=1,Jn=2,hu=3,uu=4,Ep=5;var Os=100,Tp=101,Ap=102,Rp=103,Cp=104,Pp=200,Ip=201,Lp=202,Dp=203,fu=204,du=205,Np=206,Up=207,Fp=208,Bp=209,Op=210,zp=211,Hp=212,kp=213,Vp=214,rc=0,oc=1,ac=2,Sr=3,cc=4,lc=5,hc=6,uc=7,pu=0,Gp=1,Wp=2,$n=0,mu=1,gu=2,xu=3,vu=4,_u=5,yu=6,Mu=7;var Su=300,zs=301,Br=302,Vc=303,Gc=304,fc=1e3,vi=1001,dc=1002,an=1003,qp=1004;var qo=1005;var dn=1006,Wc=1007;var hi=1008;var Fn=1009,bu=1010,wu=1011,Or=1012,qc=1013,ui=1014,Qn=1015,mn=1016,Xc=1017,Yc=1018,Hs=1020,Eu=35902,Tu=35899,Au=1021,Ru=1022,Hn=1023,Hi=1026,qi=1027,Zc=1028,Kc=1029,gs=1030,Jc=1031;var $c=1033,Xo=33776,Yo=33777,Zo=33778,Ko=33779,Qc=35840,jc=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,Jo=37490,al=37491,cl=37808,ll=37809,hl=37810,ul=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,xl=37817,vl=37818,_l=37819,yl=37820,Ml=37821,Sl=36492,bl=36494,wl=36495,El=36283,Tl=36284,$o=36285,Al=36286;var Mo=2300,pc=2301,ic=2302,eu=2303,tu=2400,nu=2401,iu=2402;var Xp=3200,Rl=3201;var Cl=0,Yp=1,Xi="",An="srgb",Is="srgb-linear",So="linear",At="srgb";var sc=7680;var Zp=519,Kp=512,Jp=513,$p=514,Cu=515,Qp=516,jp=517,Pu=518,Iu=519,Lu=35044;var Du="300 es",Xn=2e3,br=2001;function Pg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ig(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function e0(){let i=bo("canvas");return i.style.display="block",i}var Vd={},wr=null;function wo(...i){let e="THREE."+i.shift();wr?wr("log",e,...i):console.log(e,...i)}function t0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=t0(i);let e="THREE."+i.shift();if(wr)wr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=t0(i);let e="THREE."+i.shift();if(wr)wr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ps(...i){let e=i.join(" ");e in Vd||(Vd[e]=!0,We(...i))}function n0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var i0={[rc]:rc,[ac]:hc,[cc]:cc,[Sr]:lc,[oc]:oc,[hc]:ac,[uc]:uc,[lc]:Sr},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,xo=Math.PI/180,Er=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function Lg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dg(i,e,t){return i!==e?(t-i)/(e-i):0}function vo(i,e,t){return(1-t)*i+t*e}function Ng(i,e,t,n){return vo(i,e,1-Math.exp(-t*n))}function Ug(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function Fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Og(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zg(i,e){return i+Math.random()*(e-i)}function Hg(i){return i*(.5-Math.random())}function kg(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*xo}function Gg(i){return i*Er}function Wg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fu(i,e){if(e.constructor===Float32Array)return i;let t=Pl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Bu(i,e){if(e.constructor===Float32Array)return i;let t=Pl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Yi={DEG2RAD:xo,RAD2DEG:Er,generateUUID:xs,clamp:ft,euclideanModulo:Nu,mapLinear:Lg,inverseLerp:Dg,lerp:vo,damp:Ng,pingpong:Ug,smoothstep:Fg,smootherstep:Bg,randInt:Og,randFloat:zg,randFloatSpread:Hg,seededRandom:kg,degToRad:Vg,radToDeg:Gg,isPowerOfTwo:Wg,ceilPowerOfTwo:qg,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Xg,normalize:Bu,denormalize:Fu},Gu=class Gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gu.prototype.isVector2=!0;var he=Gu,vt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||c!==u||l!==f||h!==m){let p=c*u+l*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+_*a}else{c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+_*a;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-a*f,e[t+2]=l*m+h*f+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var T=Wu,Ph=new T,Wd=new vt,qu=class qu{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],y=s[1],w=s[4],b=s[7],v=s[2],M=s[5],x=s[8];return r[0]=o*_+a*y+c*v,r[3]=o*p+a*w+c*M,r[6]=o*g+a*b+c*x,r[1]=l*_+h*y+d*v,r[4]=l*p+h*w+d*M,r[7]=l*g+h*b+d*x,r[2]=u*_+f*y+m*v,r[5]=u*p+f*w+m*M,r[8]=u*g+f*b+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qu.prototype.isMatrix3=!0;var et=qu,Ih=new et,qd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yg(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?So:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:e,whitePoint:n,transfer:So,toXYZ:qd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:At,toXYZ:qd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var xt=Yg();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ir,mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ir===void 0&&(ir=bo("canvas")),ir.width=e.width,ir.height=e.height;let s=ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zg=0,Tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lh(s[o].image)):r.push(Lh(s[o]))}else r=Lh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Kg=0,Dh=new T,Rn=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=dn,o=hi,a=Hn,c=Fn,l=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=xs(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Su;Rn.DEFAULT_ANISOTROPY=1;var Xu=class Xu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(f+1)/2,v=(g+1)/2,M=(h+u)/4,x=(d+_)/4,S=(m+p)/4;return w>b&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=x/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=M/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=x/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;var Nt=Xu,gc=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kc=class kc{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,_=l*d;t[0]=u+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,$g)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ss.crossVectors(n,Bn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ss.crossVectors(n,Bn)),ss.normalize(),Ia.crossVectors(Bn,ss),s[0]=ss.x,s[4]=Ia.x,s[8]=Bn.x,s[1]=ss.y,s[5]=Ia.y,s[9]=Bn.y,s[2]=ss.z,s[6]=Ia.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],w=n[7],b=n[11],v=n[15],M=s[0],x=s[4],S=s[8],C=s[12],R=s[1],P=s[5],D=s[9],z=s[13],L=s[2],H=s[6],V=s[10],G=s[14],oe=s[3],Y=s[7],re=s[11],ce=s[15];return r[0]=o*M+a*R+c*L+l*oe,r[4]=o*x+a*P+c*H+l*Y,r[8]=o*S+a*D+c*V+l*re,r[12]=o*C+a*z+c*G+l*ce,r[1]=h*M+d*R+u*L+f*oe,r[5]=h*x+d*P+u*H+f*Y,r[9]=h*S+d*D+u*V+f*re,r[13]=h*C+d*z+u*G+f*ce,r[2]=m*M+_*R+p*L+g*oe,r[6]=m*x+_*P+p*H+g*Y,r[10]=m*S+_*D+p*V+g*re,r[14]=m*C+_*z+p*G+g*ce,r[3]=y*M+w*R+b*L+v*oe,r[7]=y*x+w*P+b*H+v*Y,r[11]=y*S+w*D+b*V+v*re,r[15]=y*C+w*z+b*G+v*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],y=c*f-l*u,w=a*f-l*d,b=a*u-c*d,v=o*f-l*h,M=o*u-c*h,x=o*d-a*h;return t*(_*y-p*w+g*b)-n*(m*y-p*v+g*M)+s*(m*w-_*v+g*x)-r*(m*b-_*M+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=t*a-n*o,w=t*c-s*o,b=t*l-r*o,v=n*c-s*a,M=n*l-r*a,x=s*l-r*c,S=h*_-d*m,C=h*p-u*m,R=h*g-f*m,P=d*p-u*_,D=d*g-f*_,z=u*g-f*p,L=y*z-w*D+b*P+v*R-M*C+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(a*z-c*D+l*P)*H,e[1]=(s*D-n*z-r*P)*H,e[2]=(_*x-p*M+g*v)*H,e[3]=(u*M-d*x-f*v)*H,e[4]=(c*R-o*z-l*C)*H,e[5]=(t*z-s*R+r*C)*H,e[6]=(p*b-m*x-g*w)*H,e[7]=(h*x-u*b+f*w)*H,e[8]=(o*D-a*R+l*S)*H,e[9]=(n*R-t*D-r*S)*H,e[10]=(m*M-_*b+g*y)*H,e[11]=(d*b-h*M-f*y)*H,e[12]=(a*C-o*P-c*S)*H,e[13]=(t*P-n*C+s*S)*H,e[14]=(_*w-m*v-p*y)*H,e[15]=(h*v-d*w+u*y)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,y=c*l,w=c*h,b=c*d,v=n.x,M=n.y,x=n.z;return s[0]=(1-(_+g))*v,s[1]=(f+b)*v,s[2]=(m-w)*v,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(u+g))*M,s[6]=(p+y)*M,s[7]=0,s[8]=(m+w)*x,s[9]=(p-y)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=sr.set(s[0],s[1],s[2]).length(),a=sr.set(s[4],s[5],s[6]).length(),c=sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let l=1/o,h=1/a,d=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Xn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Xn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===br)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kc.prototype.isMatrix4=!0;var at=kc,sr=new T,si=new at,Jg=new T(0,0,0),$g=new T(1,1,1),ss=new T,Ia=new T,Bn=new T,Yd=new at,Zd=new vt,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qg=0,Kd=new T,rr=new vt,Di=new at,La=new T,ao=new T,jg=new T,ex=new vt,Jd=new T(1,0,0),$d=new T(0,1,0),Qd=new T(0,0,1),jd={type:"added"},tx={type:"removed"},or={type:"childadded",child:null},Nh={type:"childremoved",child:null},cn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new $t,n=new vt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new et}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ao,La,this.up):Di.lookAt(La,ao,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Di),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),or.child=e,this.dispatchEvent(or),or.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new T(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nx={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Uh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Nu(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uh(o,r,e+1/3),this.g=Uh(o,r,e),this.b=Uh(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let n=s0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return xt.workingToColorSpace(yn.copy(this),e),Math.round(ft(yn.r*255,0,255))*65536+Math.round(ft(yn.g*255,0,255))*256+Math.round(ft(yn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=An){xt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Da);let n=vo(rs.h,Da.h,t),s=vo(rs.s,Da.s,t),r=vo(rs.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ge;ge.NAMES=s0;var Ao=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ls=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new T,Ni=new T,Fh=new T,Ui=new T,ar=new T,cr=new T,ep=new T,Bh=new T,Oh=new T,zh=new T,Hh=new Nt,kh=new Nt,Vh=new Nt,Oi=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),Ni.subVectors(n,t),Fh.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(Ni),c=ri.dot(Fh),l=Ni.dot(Ni),h=Ni.dot(Fh),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hh.setScalar(0),kh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,t),kh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hh,r.x),o.addScaledVector(kh,r.y),o.addScaledVector(Vh,r.z),o}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),Ni.subVectors(e,t),ri.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ri.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,n),cr.subVectors(r,n),Bh.subVectors(e,n);let c=ar.dot(Bh),l=cr.dot(Bh);if(c<=0&&l<=0)return t.copy(n);Oh.subVectors(e,s);let h=ar.dot(Oh),d=cr.dot(Oh);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(ar,o);zh.subVectors(e,r);let f=ar.dot(zh),m=cr.dot(zh);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(cr,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return ep.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(ep,a);let g=1/(p+_+u);return o=_*g,a=u*g,t.copy(n).addScaledVector(ar,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ua.subVectors(this.max,co),lr.subVectors(e.a,co),hr.subVectors(e.b,co),ur.subVectors(e.c,co),os.subVectors(hr,lr),as.subVectors(ur,hr),Ts.subVectors(lr,ur);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Ts.z,Ts.y,os.z,0,-os.x,as.z,0,-as.x,Ts.z,0,-Ts.x,-os.y,os.x,0,-as.y,as.x,0,-Ts.y,Ts.x,0];return!Gh(t,lr,hr,ur,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Gh(t,lr,hr,ur,Ua))?!1:(Fa.crossVectors(os,as),t=[Fa.x,Fa.y,Fa.z],Gh(t,lr,hr,ur,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new T,new T,new T,new T,new T,new T,new T,new T],oi=new T,Na=new yi,lr=new T,hr=new T,ur=new T,os=new T,as=new T,Ts=new T,co=new T,Ua=new T,Fa=new T,As=new T;function Gh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),c=e.dot(As),l=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Kt=new T,Ba=new he,ix=0,He=class extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=Qn,this.version=0,this._normalizationScale=e!==void 0?Pl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bu(e,this.array)}};var Ls=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},sx=new yi,lo=new T,Wh=new T,Un=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Wh)),this.expandByPoint(lo.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rx=0,qn=new at,qh=new cn,fr=new T,On=new yi,ho=new yi,on=new T,_t=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Ds:Ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(On.min,ho.min),On.expandByPoint(on),on.addVectors(On.max,ho.max),On.expandByPoint(on)):(On.expandByPoint(ho.min),On.expandByPoint(ho.max))}On.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(e,l),on.add(fr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new He(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new T,c[C]=new T;let h=new T,d=new T,u=new T,f=new he,m=new he,_=new he,p=new T,g=new T;function y(C,R,P){l[C]=l[R]=l[P]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,P),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[C].add(p),a[R].add(p),a[P].add(p),c[C].add(g),c[R].add(g),c[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,R=w.length;C<R;++C){let P=w[C],D=P.start,z=P.count;for(let L=D,H=D+z;L<H;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new T,v=new T,M=new T,x=new T;function S(C){M.fromBufferAttribute(s,C),x.copy(M);let R=a[C];b.copy(R),b.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(x,R);let D=v.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,D)}for(let C=0,R=n.count;C<R;++C)l[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new He(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Tn=new T,Rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Pl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bu(e,this.data.array)}},Xh=new T,ox=new T,ax=new et,ai=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xh.subVectors(n,t).cross(ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ax.getNormalMatrix(e),s=this.coplanarPoint(Xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cx=0,Mi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Fr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ki=class extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,uo=new T,pr=new T,mr=new T,gr=new he,fo=new he,r0=new at,Oa=new T,po=new T,za=new T,np=new he,Yh=new he,ip=new he,hs=class extends cn{constructor(e=new ki){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Rr(n,3,0,!1)),dr.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),r0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ha(Oa.set(-.5,-.5,0),mr,o,pr,s,r),Ha(po.set(.5,-.5,0),mr,o,pr,s,r),Ha(za.set(.5,.5,0),mr,o,pr,s,r),np.set(0,0),Yh.set(1,0),ip.set(1,1);let a=e.ray.intersectTriangle(Oa,po,za,!1,uo);if(a===null&&(Ha(po.set(-.5,.5,0),mr,o,pr,s,r),Yh.set(0,1),a=e.ray.intersectTriangle(Oa,za,po,!1,uo),a===null))return;let c=e.ray.origin.distanceTo(uo);c<e.near||c>e.far||t.push({distance:c,point:uo.clone(),uv:Oi.getInterpolation(uo,Oa,po,za,np,Yh,ip,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ha(i,e,t,n,s,r){gr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fo.x=r*gr.x-s*gr.y,fo.y=s*gr.x+r*gr.y):fo.copy(gr),i.copy(e),i.x+=fo.x,i.y+=fo.y,i.applyMatrix4(r0)}var Bi=new T,Zh=new T,ka=new T,Va=new T,Co=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zh.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Va.copy(this.origin).sub(Zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=Va.dot(this.direction),c=-Va.dot(ka),l=Va.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zh).addScaledVector(ka,u),f}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,b=Math.abs(c),v=Math.abs(l),M=Math.abs(h),x,S,C,R,P,D,z,L,H,V,G,oe;if(b>=v&&b>=M?(C=c,D=d,H=m,oe=g,c>=0?(x=l,S=h,R=u,P=f,z=_,L=p,V=y,G=w):(x=h,S=l,R=f,P=u,z=p,L=_,V=w,G=y)):v>=M?(C=l,D=u,H=_,oe=y,l>=0?(x=h,S=c,R=f,P=d,z=p,L=m,V=w,G=g):(x=c,S=h,R=d,P=f,z=m,L=p,V=g,G=w)):(C=h,D=f,H=p,oe=w,h>=0?(x=c,S=l,R=d,P=u,z=m,L=_,V=g,G=y):(x=l,S=c,R=u,P=d,z=_,L=m,V=y,G=g)),C===0)return null;let Y=x/C,re=S/C,ce=1/C,Le=R-Y*D,je=P-re*D,ne=z-Y*H,Ee=L-re*H,De=V-Y*oe,Ve=G-re*oe,Te=De*Ee-Ve*ne,$e=Le*Ve-je*De,bt=ne*je-Ee*Le;if(s){if(Te<0||$e<0||bt<0)return null}else if((Te<0||$e<0||bt<0)&&(Te>0||$e>0||bt>0))return null;let B=Te+$e+bt;if(B===0)return null;let U=ce*(Te*D+$e*H+bt*oe);return(B>0?U<0:U>0)?null:this.at(U/B,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},us=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sp=new at,Rs=new Co,Ga=new Un,rp=new T,Wa=new T,qa=new T,Xa=new T,Kh=new T,Ya=new T,op=new T,Za=new T,nt=class extends cn{constructor(e=new _t,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Kh.fromBufferAttribute(d,e),o?Ya.addScaledVector(Kh,h):Ya.addScaledVector(Kh.sub(t),h))}t.add(Ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Ga.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ga,rp)===null||Rs.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(sp.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(sp),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,v=w;b<v;b+=3){let M=a.getX(b),x=a.getX(b+1),S=a.getX(b+2);s=Ka(this,g,e,n,l,h,d,M,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);s=Ka(this,o,e,n,l,h,d,y,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,v=w;b<v;b+=3){let M=b,x=b+1,S=b+2;s=Ka(this,g,e,n,l,h,d,M,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=p,w=p+1,b=p+2;s=Ka(this,o,e,n,l,h,d,y,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function lx(i,e,t,n,s,r,o,a){let c;if(e.side===Qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===wi,a),c===null)return null;Za.copy(a),Za.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:i}}function Ka(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Wa),i.getVertexPosition(c,qa),i.getVertexPosition(l,Xa);let h=lx(i,e,t,n,Wa,qa,Xa,op);if(h){let d=new T;Oi.getBarycoord(op,Wa,qa,Xa,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,a,c,l,d,new he)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,a,c,l,d,new he)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,c,l,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};Oi.getNormal(Wa,qa,Xa,u.normal),h.face=u,h.barycoord=d}return h}var Ns=class extends Rn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=an,h=an,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class extends He{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new at,ap=new at,Ja=[],cp=new yi,hx=new at,mo=new nt,go=new Un,Po=class extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),cp.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),go.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),e.ray.intersectsSphere(go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),ap.multiplyMatrices(n,xr),mo.matrixWorld=ap,mo.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){let c=Ja[o];c.instanceId=r,c.object=this,t.push(c)}Ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ns(new Float32Array(s*this.count),s,this.count,Zc,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Un,ux=new he(.5,.5),$a=new T,Si=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],w=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-o,f-h,g-m,v-y).normalize(),s[1].setComponents(l+o,f+h,g+m,v+y).normalize(),s[2].setComponents(l+a,f+d,g+_,v+w).normalize(),s[3].setComponents(l-a,f-d,g-_,v-w).normalize(),n)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,f-u,g-p,v-b).normalize();else if(s[4].setComponents(l-c,f-u,g-p,v-b).normalize(),t===Xn)s[5].setComponents(l+c,f+u,g+p,v+b).normalize();else if(t===br)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=ux.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lp=new at,vc=class i{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];lp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(lp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Si),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var _c=class extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hp=new at,su=new Co,Qa=new Un,ja=new T,Io=class extends cn{constructor(e=new _t,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;hp.copy(s).invert(),su.copy(e.ray).applyMatrix4(hp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let p=l.getX(m);ja.fromBufferAttribute(d,p),up(ja,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)ja.fromBufferAttribute(d,m),up(ja,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function up(i,e,t,n,s,r,o){let a=su.distanceSqToPoint(i);if(a<t){let c=new T;su.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Lo=class extends Rn{constructor(e=[],t=zs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Us=class extends Rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Rn{constructor(e,t,n=ui,s,r,o,a=an,c=an,l,h=Hi,d=1){if(h!==Hi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Do=class extends ci{constructor(e,t=ui,n=zs,s,r,o=an,a=an,c,l=Hi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cr=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function m(_,p,g,y,w,b,v,M,x,S,C){let R=b/x,P=v/S,D=b/2,z=v/2,L=M/2,H=x+1,V=S+1,G=0,oe=0,Y=new T;for(let re=0;re<V;re++){let ce=re*P-z;for(let Le=0;Le<H;Le++){let je=Le*R-D;Y[_]=je*y,Y[p]=ce*w,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Le/x),d.push(1-re/S),G+=1}}for(let re=0;re<S;re++)for(let ce=0;ce<x;ce++){let Le=u+ce+H*re,je=u+ce+H*(re+1),ne=u+(ce+1)+H*(re+1),Ee=u+(ce+1)+H*re;c.push(Le,je,Ee),c.push(je,ne,Ee),oe+=6}a.addGroup(f,oe,C),f+=oe,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vi=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],p=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(f,2));function y(){let b=new T,v=new T,M=0,x=(t-e)/n;for(let S=0;S<=r;S++){let C=[],R=S/r,P=R*(t-e)+e;for(let D=0;D<=s;D++){let z=D/s,L=z*c+a,H=Math.sin(L),V=Math.cos(L);v.x=P*H,v.y=-R*n+p,v.z=P*V,d.push(v.x,v.y,v.z),b.set(H,x,V).normalize(),u.push(b.x,b.y,b.z),f.push(z,1-R),C.push(m++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let R=_[C][S],P=_[C+1][S],D=_[C+1][S+1],z=_[C][S+1];(e>0||C!==0)&&(h.push(R,P,z),M+=3),(t>0||C!==r-1)&&(h.push(P,D,z),M+=3)}l.addGroup(g,M,0),g+=M}function w(b){let v=m,M=new he,x=new T,S=0,C=b===!0?e:t,R=b===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=s;D++){let L=D/s*c+a,H=Math.cos(L),V=Math.sin(L);x.x=C*V,x.y=p*R,x.z=C*H,d.push(x.x,x.y,x.z),u.push(0,R,0),M.x=H*.5+.5,M.y=V*.5*R+.5,f.push(M.x,M.y),m++}for(let D=0;D<s;D++){let z=v+D,L=P+D;b===!0?h.push(L,L+1,z):h.push(L+1,L,z),S+=3}l.addGroup(g,S,b===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yc=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new T,b=new T,v=new T;for(let M=0;M<t.length;M+=3)f(t[M+0],w),f(t[M+1],b),f(t[M+2],v),c(w,b,v,y)}function c(y,w,b,v){let M=v+1,x=[];for(let S=0;S<=M;S++){x[S]=[];let C=y.clone().lerp(b,S/M),R=w.clone().lerp(b,S/M),P=M-S;for(let D=0;D<=P;D++)D===0&&S===M?x[S][D]=C:x[S][D]=C.clone().lerp(R,D/P)}for(let S=0;S<M;S++)for(let C=0;C<2*(M-S)-1;C++){let R=Math.floor(C/2);C%2===0?(u(x[S][R+1]),u(x[S+1][R]),u(x[S][R])):(u(x[S][R+1]),u(x[S+1][R+1]),u(x[S+1][R]))}}function l(y){let w=new T;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(y),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let y=new T;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let b=p(y)/2/Math.PI+.5,v=g(y)/Math.PI+.5;o.push(b,1-v)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],b=o[y+2],v=o[y+4],M=Math.max(w,b,v),x=Math.min(w,b,v);M>.9&&x<.1&&(w<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let b=y*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function m(){let y=new T,w=new T,b=new T,v=new T,M=new he,x=new he,S=new he;for(let C=0,R=0;C<r.length;C+=9,R+=6){y.set(r[C+0],r[C+1],r[C+2]),w.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),M.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),v.copy(y).add(w).add(b).divideScalar(3);let P=p(v);_(M,R+0,y,P),_(x,R+2,w,P),_(S,R+4,b,P)}}function _(y,w,b,v){v<0&&y.x===1&&(o[w]=y.x-1),b.x===0&&b.z===0&&(o[w]=v/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Uo=class i extends yc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new he:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new at;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Fo=class extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends Fo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ou(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var fp=new T,dp=new T,Jh=new Ou,$h=new Ou,Qh=new Ou,Pr=class extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(dp.subVectors(s[0],s[1]).add(s[0]),l=dp);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Jh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,_,p),$h.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,_,p),Qh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),$h.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Qh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Jh.calc(c),$h.calc(c),Qh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fx(i,e){let t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function px(i,e){return i*i*e}function _o(i,e,t,n){return fx(i,e)+dx(i,t)+px(i,n)}function mx(i,e){let t=1-i;return t*t*t*e}function gx(i,e){let t=1-i;return 3*t*t*i*e}function xx(i,e){return 3*(1-i)*i*i*e}function vx(i,e){return i*i*i*e}function yo(i,e,t,n,s){return mx(i,e)+gx(i,t)+xx(i,n)+vx(i,s)}var Sc=class extends Zn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bc=class extends Zn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y),yo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends Zn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends Zn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends Zn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Zn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y),_o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(pp(a,c.x,l.x,h.x,d.x),pp(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},_x=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Pr,CubicBezierCurve:Sc,CubicBezierCurve3:bc,EllipseCurve:Fo,LineCurve:wc,LineCurve3:Ec,QuadraticBezierCurve:Tc,QuadraticBezierCurve3:Bo,SplineCurve:Ac});var fs=class i extends _t{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,d=new T,u=new he,f=new T,m=new T,_=new T,p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=t;y++){let w=n+y*h*s,b=Math.sin(w),v=Math.cos(w);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*b,d.y=e[M].y,d.z=e[M].x*v,o.push(d.x,d.y,d.z),u.x=y/t,u.y=M/(e.length-1),a.push(u.x,u.y);let x=c[3*M+0]*b,S=c[3*M+1],C=c[3*M+0]*v;l.push(x,S,C)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let b=w+y*e.length,v=b,M=b+e.length,x=b+e.length+1,S=b+1;r.push(v,M,S),r.push(x,S,M)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Kn=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let w=0;w<l;w++){let b=w*d-r;m.push(b,-y,0),_.push(0,0,1),p.push(w/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let w=y+l*g,b=y+l*(g+1),v=y+1+l*(g+1),M=y+1+l*g;f.push(w,b,M),f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gi=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new T,u=new T,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let y=[],w=g/n,b=o+w*a,v=e*Math.cos(b),M=Math.sqrt(e*e-v*v),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let C=S/t,R=s+C*r;d.x=-M*Math.cos(R),d.y=v,d.z=M*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(C+x,1-w),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],b=h[g][y],v=h[g+1][y],M=h[g+1][y+1];(g!==0||o>0)&&f.push(w,b,M),(g!==n-1||c<Math.PI)&&f.push(b,v,M)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oo=class i extends _t{constructor(e=new Bo(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new he,h=new T,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(f,2));function _(){for(let w=0;w<t;w++)p(w);p(r===!1?t:0),y(),g()}function p(w){h=e.getPointAt(w/t,h);let b=o.normals[w],v=o.binormals[w];for(let M=0;M<=s;M++){let x=M/s*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);c.x=C*b.x+S*v.x,c.y=C*b.y+S*v.y,c.z=C*b.z+S*v.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let v=(s+1)*(w-1)+(b-1),M=(s+1)*w+(b-1),x=(s+1)*w+b,S=(s+1)*(w-1)+b;m.push(v,M,S),m.push(M,x,S)}}function y(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)l.x=w/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new _x[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mp(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function mp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Vs={clone:ks,merge:Mn},Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rc=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bi=class extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fs=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pc=class extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nu:r=e,a=2*t-n;break;case iu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nu:o=e,c=2*n-t;break;case iu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,w=(-1-f)*p+(1.5+f)*_+.5*m,b=f*p-f*_;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+y*o[l+v]+w*o[c+v]+b*o[d+v];return r}},Ic=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Lc=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dc=class extends ds{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(s-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[l+m],p=o[c+m],g=f*u+m*2,y=d[g],w=d[g+1],b=e*u+m*2,v=h[b],M=h[b+1],x=wx(n,t,y,v,s);r[m]=o0(x,_,w,M,p)}return r}};function o0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=o0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=bx(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ec(e.settings)&&(n.settings={inTangents:vr(e.settings.inTangents,Array),outTangents:vr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case pc:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ec(this.settings)&&(gp(this.settings.inTangents,e),gp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ec(this.settings)&&(xp(this.settings.inTangents,e),xp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ke("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ig(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function xp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=pc;var ps=class extends zn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Mo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Nc.prototype.ValueTypeName="color";var Uc=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Uc.prototype.ValueTypeName="number";var Fc=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)vt.slerpFlat(r,0,o,l-a,o,l,c);return r}},zo=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends zn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Mo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Bc.prototype.ValueTypeName="vector";var Oc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},a0=new Oc,zc=class{constructor(e){this.manager=e!==void 0?e:a0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Lr=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jh=new at,vp=new T,_p=new T,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),_p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_p),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=new T,nc=new vt,xi=new T,ko=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tc,nc,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new T,yp=new he,Mp=new he,fn=class extends ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,yp,Mp),t.subVectors(Mp,yp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ru=class extends Ho{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},li=class extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ou=class extends Ho{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Go=class extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var _r=-90,yr=1,Dr=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(_r,yr,e,t);s.layers=this.layers,this.add(s);let r=new fn(_r,yr,e,t);r.layers=this.layers,this.add(r);let o=new fn(_r,yr,e,t);o.layers=this.layers,this.add(o);let a=new fn(_r,yr,e,t);a.layers=this.layers,this.add(a);let c=new fn(_r,yr,e,t);c.layers=this.layers,this.add(c);let l=new fn(_r,yr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hc=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ex.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ex(){this._document.hidden===!1&&this.reset()}var Hu="\\[\\]\\.:\\/",Tx=new RegExp("["+Hu+"]","g"),ku="[^"+Hu+"]",Ax="[^"+Hu.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",ku),Cx=/(WCOD+)?/.source.replace("WCOD",Ax),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),Lx=new RegExp("^"+Rx+Cx+Px+Ix+"$"),Dx=["material","materials","bones","map"],au=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tx,"")}static parseTrackName(e){let t=Lx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=au;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kb=new Float32Array(1);var Yu=class Yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var cu=Yu;function Vu(i,e,t,n){let s=Nx(n);switch(t){case Au:return i*e;case Zc:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case gs:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case Ru:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case $c:return i*e*4/s.components*s.byteLength;case Xo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case tl:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:case rl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:case Jo:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sl:case bl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nx(i){switch(i){case Fn:case bu:return{byteLength:1,components:1};case Or:case wu:case mn:return{byteLength:2,components:1};case Xc:case Yc:return{byteLength:2,components:4};case ui:case qc:case Qn:return{byteLength:4,components:1};case Eu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function C0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
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
#endif`,Yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,hv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
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
#endif`,Bv=`uniform sampler2D dfgLUT;
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
}`,Ov=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
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
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform float backgroundBlurriness;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,Y_=`#define DISTANCE
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
}`,Z_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,cy=`#define PHONG
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
}`,ly=`#define STANDARD
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
}`,hy=`#define STANDARD
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
}`,uy=`#define TOON
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
}`,fy=`#define TOON
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
}`,dy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Hx,alphahash_pars_fragment:kx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:qx,aomap_fragment:Xx,aomap_pars_fragment:Yx,batching_pars_vertex:Zx,batching_vertex:Kx,begin_vertex:Jx,beginnormal_vertex:$x,bsdfs:Qx,iridescence_fragment:jx,bumpmap_pars_fragment:ev,clipping_planes_fragment:tv,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:sv,color_fragment:rv,color_pars_fragment:ov,color_pars_vertex:av,color_vertex:cv,common:lv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:xv,envmap_common_pars_fragment:vv,envmap_pars_fragment:_v,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Iv,envmap_vertex:Mv,fog_vertex:Sv,fog_pars_vertex:bv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Bv,lights_fragment_begin:Ov,lights_fragment_maps:zv,lights_fragment_end:Hv,lightprobes_pars_fragment:kv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:qv,map_fragment:Xv,map_pars_fragment:Yv,map_particle_fragment:Zv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:$v,morphinstance_vertex:Qv,morphcolor_vertex:jv,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:o_,normal_vertex:a_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:f_,opaque_fragment:d_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:x_,dithering_pars_fragment:v_,roughnessmap_fragment:__,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:S_,shadowmap_vertex:b_,shadowmask_pars_fragment:w_,skinbase_vertex:E_,skinning_pars_vertex:T_,skinning_vertex:A_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:I_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:N_,uv_pars_fragment:U_,uv_pars_vertex:F_,uv_vertex:B_,worldpos_vertex:O_,background_vert:z_,background_frag:H_,backgroundCube_vert:k_,backgroundCube_frag:V_,cube_vert:G_,cube_frag:W_,depth_vert:q_,depth_frag:X_,distance_vert:Y_,distance_frag:Z_,equirect_vert:K_,equirect_frag:J_,linedashed_vert:$_,linedashed_frag:Q_,meshbasic_vert:j_,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:cy,meshphysical_vert:ly,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:fy,points_vert:dy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:xy,sprite_frag:vy},Ce={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ti={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ti.physical={uniforms:Mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Il={r:0,b:0,g:0},_y=new at,P0=new et;P0.set(-1,0,0,0,1,0,0,0,1);function yy(i,e,t,n,s,r){let o=new ge(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function m(y){let w=!1,b=f(y);b===null?p(o,a):b&&b.isColor&&(p(b,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,w){let b=f(w);b&&b.isCubeTexture?(l===void 0&&(l=new nt(new Cr(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ks(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(P0),l.material.toneMapped=xt.getTransfer(b.colorSpace)!==At,(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new nt(new Kn(2,2),new Bt({name:"BackgroundMaterial",uniforms:ks(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=xt.getTransfer(b.colorSpace)!==At,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,w){y.getRGB(Il,zu(i)),t.buffers.color.setClear(Il.r,Il.g,Il.b,w,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function My(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,D,z,L,H){let V=!1,G=d(P,L,z,D);r!==G&&(r=G,l(r.object)),V=f(P,L,z,H),V&&m(P,L,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,b(P,D,z,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,D,z,L){let H=L.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let G=P.isInstancedMesh===!0?P.id:0,oe=V[G];oe===void 0&&(oe={},V[G]=oe);let Y=oe[z.id];Y===void 0&&(Y={},oe[z.id]=Y);let re=Y[H];return re===void 0&&(re=u(c()),Y[H]=re),re}function u(P){let D=[],z=[],L=[];for(let H=0;H<t;H++)D[H]=0,z[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,z,L){let H=r.attributes,V=D.attributes,G=0,oe=z.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ce=H[Y],Le=V[Y];if(Le===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),ce===void 0||ce.attribute!==Le||Le&&ce.data!==Le.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(P,D,z,L){let H={},V=D.attributes,G=0,oe=z.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ce=V[Y];ce===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor));let Le={};Le.attribute=ce,ce&&ce.data&&(Le.data=ce.data),H[Y]=Le,G++}r.attributes=H,r.attributesNum=G,r.index=L}function _(){let P=r.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function p(P){g(P,0)}function g(P,D){let z=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),H[P]!==D&&(i.vertexAttribDivisor(P,D),H[P]=D)}function y(){let P=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==P[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function w(P,D,z,L,H,V,G){G===!0?i.vertexAttribIPointer(P,D,z,H,V):i.vertexAttribPointer(P,D,z,L,H,V)}function b(P,D,z,L){_();let H=L.attributes,V=z.getAttributes(),G=D.defaultAttributeValues;for(let oe in V){let Y=V[oe];if(Y.location>=0){let re=H[oe];if(re===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),re!==void 0){let ce=re.normalized,Le=re.itemSize,je=e.get(re);if(je===void 0)continue;let ne=je.buffer,Ee=je.type,De=je.bytesPerElement,Ve=Ee===i.INT||Ee===i.UNSIGNED_INT||re.gpuType===qc;if(re.isInterleavedBufferAttribute){let Te=re.data,$e=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,bt=re.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let B=0;B<Y.locationSize;B++)g(Y.location+B,Te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let B=0;B<Y.locationSize;B++)p(Y.location+B);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let B=0;B<Y.locationSize;B++)w(Y.location+B,Le/Y.locationSize,Ee,ce,$e*De,(bt+Le/Y.locationSize*B)*De,Ve)}else{if(re.isInstancedBufferAttribute){for(let Te=0;Te<Y.locationSize;Te++)g(Y.location+Te,re.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<Y.locationSize;Te++)p(Y.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Te=0;Te<Y.locationSize;Te++)w(Y.location+Te,Le/Y.locationSize,Ee,ce,Le*De,Le/Y.locationSize*Te*De,Ve)}}else if(G!==void 0){let ce=G[oe];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(Y.location,ce);break;case 3:i.vertexAttrib3fv(Y.location,ce);break;case 4:i.vertexAttrib4fv(Y.location,ce);break;default:i.vertexAttrib1fv(Y.location,ce)}}}}y()}function v(){C();for(let P in n){let D=n[P];for(let z in D){let L=D[z];for(let H in L){let V=L[H];for(let G in V)h(V[G].object),delete V[G];delete L[H]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let z in D){let L=D[z];for(let H in L){let V=L[H];for(let G in V)h(V[G].object),delete V[G];delete L[H]}}delete n[P.id]}function x(P){for(let D in n){let z=n[D];for(let L in z){let H=z[L];if(H[P.id]===void 0)continue;let V=H[P.id];for(let G in V)h(V[G].object),delete V[G];delete H[P.id]}}}function S(P){for(let D in n){let z=n[D],L=P.isInstancedMesh===!0?P.id:0,H=z[L];if(H!==void 0){for(let V in H){let G=H[V];for(let oe in G)h(G[oe].object),delete G[oe];delete H[V]}delete z[L],Object.keys(z).length===0&&delete n[D]}}}function C(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Sy(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function by(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Hn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Fn&&x!==Qn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:v,samples:M}}function wy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,w=y*4,b=g.clippingState||null;c.value=b,b=h(m,u,w,f);for(let v=0;v!==w;++v)b[v]=t[v];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,m!==!0||p===null){let g=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,b=f;w!==_;++w,b+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var ea=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cr(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Wi});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=dn),new Dr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},c0=256,Ey=3,Ty=20,I0=256,L0=16,Ay=3,Ry=new T,Cy=new ge,Hr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Dr(1,10,null),this._boxMesh=new nt(new Cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ry}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(Cy));let p=new Dr(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(c0,Uu(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Br?this._setSize(e.image.length===0?c0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=l0(e,!1,!1),n=Math.log2(e)-Ey;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=l0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Br?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=h0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Py(),this._integrationMaterial=Iy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/L0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Ay)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(I0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ly());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function l0(i,e,t){return new ea(i,{minFilter:hi,generateMipmaps:e,type:mn,colorSpace:Is,depthBuffer:t})}function ta(i,e,t){return new Bt({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:Qt,blending:Wi,depthTest:!1,depthWrite:!1})}function Py(){return ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${I0}u

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
	`)}function Iy(){return ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:L0}},`

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
	`)}function Ly(){return ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ty}
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
	`)}function h0(){return ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function u0(){return ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Vc||f===Gc)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new ea(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Vc||f===Gc,_=f===zs||f===Br;if(m||_){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Hr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Hr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Vc?u.mapping=zs:f===Gc&&(u.mapping=Br),u}function c(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ny(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?Ds:Ls,b=new w(Math.ceil(y/3)*6,1),v=b.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,C=0;S<y;S+=3){let R=x[S+0],P=x[S+1],D=x[S+2];v[C++]=R,v[C++]=P,v[C++]=P,v[C++]=D,v[C++]=D,v[C++]=R}}else{g=p.version;for(let x=0,S=0;x<y;x+=3){let C=x+0,R=x+1,P=x+2;v[S++]=C,v[S++]=R,v[S++]=R,v[S++]=P,v[S++]=P,v[S++]=C}}b.version=g;let M=r.get(m);M&&e.remove(M),r.set(m,b)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Fy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function By(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Oy(i,e,t){let n=new WeakMap,s=new Nt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let b=a.attributes.position.count*w,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*v*4*d),x=new Eo(M,b,v,d);x.type=Qn,x.needsUpdate=!0;let S=w*4;for(let R=0;R<d;R++){let P=p[R],D=g[R],z=y[R],L=b*v*4*R;for(let H=0;H<P.count;H++){let V=H*S;f===!0&&(s.fromBufferAttribute(P,H),M[L+V+0]=s.x,M[L+V+1]=s.y,M[L+V+2]=s.z,M[L+V+3]=0),m===!0&&(s.fromBufferAttribute(D,H),M[L+V+4]=s.x,M[L+V+5]=s.y,M[L+V+6]=s.z,M[L+V+7]=0),_===!0&&(s.fromBufferAttribute(z,H),M[L+V+8]=s.x,M[L+V+9]=s.y,M[L+V+10]=s.z,M[L+V+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new he(b,v)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zy(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Hy={[mu]:"LINEAR_TONE_MAPPING",[gu]:"REINHARD_TONE_MAPPING",[xu]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function ky(i,e,t,n,s,r){let o=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new _t;h.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ct([0,2,0,0,2,0],2));let d=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new nt(h,d),f=new Bs(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,w=[],b=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),c!==null&&c.setSize(v,M);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(v,M)}},this.setEffects=function(v){w=v,b=w.length>0&&w[0].isRenderPass===!0;let M=o.width,x=o.height;w.length>0&&a===null&&(a=new Wt(M,x,{type:mn,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(M,x,{type:mn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new ci(M,x),r===!0&&(l.format=qi,l.type=Hs)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<w.length;C++){let R=w[C];R.setSize&&R.setSize(M,x),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(v,M){if(p||v.toneMapping===$n&&w.length===0)return!1;if(y=M,M!==null){let x=M.width,S=M.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return b===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=$n,!0},this.hasRenderPass=function(){return b},this.end=function(v,M){v.toneMapping=g,p=!0;let x=o,S=a;for(let C=0;C<w.length;C++){let R=w[C];R.enabled!==!1&&(R.render(v,S,x,M),R.needsSwap!==!1&&(x=S,S=S===a?c:a))}if(m!==v.outputColorSpace||_!==v.toneMapping){m=v.outputColorSpace,_=v.toneMapping,d.defines={},xt.getTransfer(m)===At&&(d.defines.SRGB_TRANSFER="");let C=Hy[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(y),v.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var D0=new Rn,N0=new ci(1,1),U0=new Do(1),F0=new Eo,B0=new xc,O0=new Lo,f0=[],d0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=f0[s];if(r===void 0&&(r=new Float32Array(s),f0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nl(i,e){let t=d0[e];t===void 0&&(t=new Int32Array(e),d0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;g0.set(n),i.uniformMatrix2fv(this.addr,!1,g0),en(t,n)}}function Yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;m0.set(n),i.uniformMatrix3fv(this.addr,!1,m0),en(t,n)}}function Zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;p0.set(n),i.uniformMatrix4fv(this.addr,!1,p0),en(t,n)}}function Ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function t1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function n1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Ul(i){return i.version===0&&(i.compareFunction=Iu,i.needsUpdate=!0),i}function i1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ul(N0):r=D0,t.setTexture2D(e||r,s)}function s1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||B0,s)}function r1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ul(U0):r=O0,t.setTextureCube(e||r,s)}function o1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||F0,s)}function a1(i){switch(i){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return qy;case 35674:return Xy;case 35675:return Yy;case 35676:return Zy;case 5124:case 35670:return Ky;case 35667:case 35671:return Jy;case 35668:case 35672:return $y;case 35669:case 35673:return Qy;case 5125:return jy;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(i,e){i.uniform1fv(this.addr,e)}function l1(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function h1(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function u1(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function f1(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d1(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p1(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m1(i,e){i.uniform1iv(this.addr,e)}function g1(i,e){i.uniform2iv(this.addr,e)}function x1(i,e){i.uniform3iv(this.addr,e)}function v1(i,e){i.uniform4iv(this.addr,e)}function _1(i,e){i.uniform1uiv(this.addr,e)}function y1(i,e){i.uniform2uiv(this.addr,e)}function M1(i,e){i.uniform3uiv(this.addr,e)}function S1(i,e){i.uniform4uiv(this.addr,e)}function b1(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ul(N0):o=D0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function w1(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||B0,r[o])}function E1(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ul(U0):o=O0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function T1(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||F0,r[o])}function A1(i){switch(i){case 5126:return c1;case 35664:return l1;case 35665:return h1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return x1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return y1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}var Ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a1(t.type)}},$u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}},Qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function x0(i,e){i.seq.push(e),i.map[e.id]=e}function R1(i,e,t){let n=i.name,s=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),o=Zu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){x0(t,l===void 0?new Ju(a,i,e):new $u(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Qu(a),x0(t,d)),t=d}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);R1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function v0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var C1=37297,P1=0;function I1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var _0=new et;function L1(i){xt._getMatrix(_0,xt.workingColorSpace,i);let e=`mat3( ${_0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case So:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function y0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+I1(i.getShaderSource(e),a)}else return r}function D1(i,e){let t=L1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var N1={[mu]:"Linear",[gu]:"Reinhard",[xu]:"Cineon",[vu]:"ACESFilmic",[yu]:"AgX",[Mu]:"Neutral",[_u]:"Custom"};function U1(i,e){let t=N1[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new T;function F1(){xt.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function O1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function jo(i){return i!==""}function M0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function S0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(i){return i.replace(H1,k1)}function k1(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ju(t)}var V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(i){return i.replace(V1,G1)}function G1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function w0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var W1={[Nr]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function q1(i){return W1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X1={[Br]:"ENVMAP_MODE_REFRACTION"};function Y1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":X1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z1={[pu]:"ENVMAP_BLENDING_MULTIPLY",[Gp]:"ENVMAP_BLENDING_MIX",[Wp]:"ENVMAP_BLENDING_ADD"};function K1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z1[i.combine]||"ENVMAP_BLENDING_NONE"}function J1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=q1(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Y1(t),d=K1(t),u=B1(t),f=O1(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(_=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?st.tonemapping_pars_fragment:"",t.toneMapping!==$n?U1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,D1("linearToOutputTexel",t.outputColorSpace),F1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=ju(o),o=M0(o,t),o=S0(o,t),a=ju(a),a=M0(a,t),a=S0(a,t),o=b0(o),a=b0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,w=g+p+a,b=v0(s,s.VERTEX_SHADER,y),v=v0(s,s.FRAGMENT_SHADER,w);s.attachShader(m,b),s.attachShader(m,v),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function M(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(v)||"",L=P.trim(),H=D.trim(),V=z.trim(),G=!0,oe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,v);else{let Y=y0(s,b,"vertex"),re=y0(s,v,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Y+`
`+re)}else L!==""?We("WebGLProgram: Program Info Log:",L):(H===""||V==="")&&(oe=!1);oe&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:H,prefix:_},fragmentShader:{log:V,prefix:p}})}s.deleteShader(b),s.deleteShader(v),x=new zr(s,m),S=z1(s,m)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,C1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=v,this}var $1=0,ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tf(e),t.set(e,n)),n}},tf=class{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}};function Q1(i){return i===gs||i===Jo||i===$o}function j1(i,e,t,n,s,r){let o=new To,a=new ef,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,R,P,D){let z=R.fog,L=P.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||H,V),oe=u[x.type],Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let re=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ce=re!==void 0?re.length:0,Le=0;L.morphAttributes.position!==void 0&&(Le=1),L.morphAttributes.normal!==void 0&&(Le=2),L.morphAttributes.color!==void 0&&(Le=3);let je,ne,Ee,De;if(oe){let Re=Ti[oe];je=Re.vertexShader,ne=Re.fragmentShader}else{je=x.vertexShader,ne=x.fragmentShader;let Re=a.getVertexShaderStage(x),Pt=a.getFragmentShaderStage(x);a.update(x,Re,Pt),Ee=Re.id,De=Pt.id}let Ve=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),$e=P.isInstancedMesh===!0,bt=P.isBatchedMesh===!0,B=!!x.map,U=!!x.matcap,Z=!!G,te=Z&&G.isPMREMTexture===!0,ue=!!x.aoMap,Ae=!!x.lightMap,Ue=!!x.bumpMap&&x.wireframe===!1,Ie=!!x.normalMap,ot=!!x.displacementMap,lt=!!x.emissiveMap,wt=!!x.metalnessMap,Rt=!!x.roughnessMap,Gt=x.anisotropy>0,O=x.clearcoat>0,nn=x.diffuseRoughness>0,Tt=x.dispersion>0,Ct=x.retroreflectivity>0,be=x.iridescence>0,Ht=x.sheen>0,ke=x.transmission>0,Ye=Gt&&!!x.anisotropyMap,I=O&&!!x.clearcoatMap,E=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,le=nn&&!!x.diffuseRoughnessMap,Q=be&&!!x.iridescenceMap,fe=be&&!!x.iridescenceThicknessMap,xe=Ht&&!!x.sheenColorMap,$=Ht&&!!x.sheenRoughnessMap,j=!!x.specularMap,_e=!!x.specularColorMap,N=!!x.specularIntensityMap,se=ke&&!!x.transmissionMap,ee=ke&&!!x.thicknessMap,Me=!!x.gradientMap,ve=!!x.alphaMap,ye=x.alphaTest>0,ze=!!x.alphaHash,ut=!!x.extensions,de=$n;x.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(de=i.toneMapping);let Ge=te?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ht={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:ne,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:De,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:bt,batchingColor:bt&&P._colorsTexture!==null,instancing:$e,instancingColor:$e&&P.instanceColor!==null,instancingMorph:$e&&P.morphTexture!==null,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:B,matcap:U,envMap:Z,envMapMode:Z&&G.mapping,envMapPMREM:te,envMapMaxLod:te?Ge.length-1:null,envMapSize:te?Ge[0].width:null,aoMap:ue,lightMap:Ae,bumpMap:Ue,normalMap:Ie,displacementMap:ot,emissiveMap:lt,normalMapObjectSpace:Ie&&x.normalMapType===Yp,normalMapTangentSpace:Ie&&x.normalMapType===Cl,packedNormalMap:Ie&&x.normalMapType===Cl&&Q1(x.normalMap.format),metalnessMap:wt,roughnessMap:Rt,anisotropy:Gt,anisotropyMap:Ye,clearcoat:O,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:k,diffuseRoughness:nn,diffuseRoughnessMap:le,dispersion:Tt,retroreflection:Ct,iridescence:be,iridescenceMap:Q,iridescenceThicknessMap:fe,sheen:Ht,sheenColorMap:xe,sheenRoughnessMap:$,specularMap:j,specularColorMap:_e,specularIntensityMap:N,transmission:ke,transmissionMap:se,thicknessMap:ee,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:ye,alphaHash:ze,combine:x.combine,mapUv:B&&f(x.map.channel),aoMapUv:ue&&f(x.aoMap.channel),lightMapUv:Ae&&f(x.lightMap.channel),bumpMapUv:Ue&&f(x.bumpMap.channel),normalMapUv:Ie&&f(x.normalMap.channel),displacementMapUv:ot&&f(x.displacementMap.channel),emissiveMapUv:lt&&f(x.emissiveMap.channel),metalnessMapUv:wt&&f(x.metalnessMap.channel),roughnessMapUv:Rt&&f(x.roughnessMap.channel),anisotropyMapUv:Ye&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:_e&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:se&&f(x.transmissionMap.channel),thicknessMapUv:ee&&f(x.thicknessMap.channel),alphaMapUv:ve&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ie||Gt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(B||ve),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:B&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===At,decodeVideoTextureEmissive:lt&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qt,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=u[x.type],C;if(S){let R=Ti[S];C=Vs.clone(R.uniforms)}else C=x.uniforms;return C}function w(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new J1(i,S,x,s),l.push(C),h.set(S,C)),C}function b(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function M(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:M}}function eM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function E0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function T0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function c(u,f,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let w=a(u,f,m,_,p,g);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function l(u,f,m,_,p,g){let y=a(u,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||tM),n.length>1&&n.sort(f||E0),s.length>1&&s.sort(f||E0)}function d(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function nM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new T0,i.set(n,[o])):s>=r.length?(o=new T0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function sM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rM=0;function oM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function aM(i){let e=new iM,t=sM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new at,o=new at;function a(l){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,w=0,b=0,v=0,M=0,x=0,S=0,C=0,R=0;l.sort(oM);for(let D=0,z=l.length;D<z;D++){let L=l[D],H=L.color,V=L.intensity,G=L.distance,oe=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===gs?oe=L.shadow.map.texture:oe=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*V,d+=H.g*V,u+=H.b*V;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],V);R++}else if(L.isSunLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let re=L.shadow,ce=t.get(L);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[m]=ce,n.sunShadowMap[m]=oe;let Le=re.getViewportCount();for(let je=0;je<Le;je++)n.sunShadowMatrix[_+je]=re.getMatrix(je),n.sunShadowCascade[_+je]=re._cascadeData[je];_+=Le,m++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let re=L.shadow,ce=t.get(L);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,n.directionalShadow[p]=ce,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=Y,p++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(V),Y.distance=G,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;let re=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,re.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[y]=re.matrix,L.castShadow){let ce=t.get(L);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,n.spotShadow[y]=ce,n.spotShadowMap[y]=oe,x++}y++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(H).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let re=L.shadow,ce=t.get(L);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,ce.shadowCameraNear=re.camera.near,ce.shadowCameraFar=re.camera.far,n.pointShadow[g]=ce,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V),Y.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[b]=Y,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=R,n.version=rM++)}function c(l,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){let b=l[y];if(b.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function A0(i){let e=new aM(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function cM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new A0(i),e.set(s,[a])):r>=o.length?(a=new A0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,uM=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],fM=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],R0=new at,Qo=new T,Ku=new T;function dM(i,e,t){let n=new Si,s=new he,r=new he,o=new Nt,a=new Fs,c=new Cc,l={},h=t.maxTextureSize,d={[wi]:Qt,[Qt]:wi,[qt]:qt},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:lM,fragmentShader:hM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new nt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let g=this.type;this.render=function(M,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===wp&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);let C=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=M.length;L<H;L++){let V=M[L],G=V.shadow;if(G===void 0){We("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let oe=G.getFrameExtents();s.multiply(oe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ur){if(V.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wt(s.x,s.y,{format:gs,type:mn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new ci(s.x,s.y,Qn),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=Hi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an}else V.isPointLight?(G.map=new ea(s.x),G.map.depthTexture=new Do(s.x,ui)):(G.map=new Wt(s.x,s.y),G.map.depthTexture=new ci(s.x,s.y,ui)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=Hi,this.type===Nr?(G.map.depthTexture.compareFunction=Y?Pu:Cu,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let re=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,S);let ce=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Le=0;Le<re;Le++){let je=G.getCamera(Le);if(V.isPointLight){let ne=G.camera,Ee=G.matrix,De=V.distance||ne.far;De!==ne.far&&(ne.far=De,ne.updateProjectionMatrix()),Qo.setFromMatrixPosition(V.matrixWorld),ne.position.copy(Qo),Ku.copy(ne.position),Ku.add(uM[Le]),ne.up.copy(fM[Le]),ne.lookAt(Ku),ne.updateMatrixWorld(),Ee.makeTranslation(-Qo.x,-Qo.y,-Qo.z),R0.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),G._frustum.setFromProjectionMatrix(R0,ne.coordinateSystem,ne.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Le),i.clear();else{Le===0&&(i.setRenderTarget(G.map),i.clear());let ne=G.getViewport(Le);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),D.viewport(o)}n=G.getFrustum(Le),b(x,S,je,V,ce,this.type)}G.isPointLightShadow!==!0&&this.type===Ur&&y(G,S),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(C,R,P)};function y(M,x){let S=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Wt(s.x,s.y,{format:gs,type:mn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(x,null,S,f,_,null)}function w(M,x,S,C){let R=null,P=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=S.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=R.uuid,z=x.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let H=L[z];H===void 0&&(H=R.clone(),L[z]=H,x.addEventListener("dispose",v)),R=H}if(R.visible=x.visible,R.wireframe=x.wireframe,C===Ur?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=S}return R}function b(M,x,S,C,R,P){if(M.visible===!1)return;if(M.layers.test(R)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ur)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let L=e.update(M),H=M.material;if(Array.isArray(H)){let V=L.groups;for(let G=0,oe=V.length;G<oe;G++){let Y=V[G],re=H[Y.materialIndex];if(re&&re.visible){let ce=w(M,re,C,P);M.onBeforeShadow(i,M,x,S,L,ce,Y),i.renderBufferDirect(S,null,L,ce,M,Y),M.onAfterShadow(i,M,x,S,L,ce,Y)}}}else if(H.visible){let V=w(M,H,C,P);M.onBeforeShadow(i,M,x,S,L,V,null),i.renderBufferDirect(S,null,L,V,M,null),M.onAfterShadow(i,M,x,S,L,V,null)}}let z=M.children;for(let L=0,H=z.length;L<H;L++)b(z[L],x,S,C,R,P)}function v(M){M.target.removeEventListener("dispose",v);for(let S in l){let C=l[S],R=M.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function pM(i,e){function t(){let N=!1,se=new Nt,ee=null,Me=new Nt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){N=ve},setClear:function(ve,ye,ze,ut,de){de===!0&&(ve*=ut,ye*=ut,ze*=ut),se.set(ve,ye,ze,ut),Me.equals(se)===!1&&(i.clearColor(ve,ye,ze,ut),Me.copy(se))},reset:function(){N=!1,ee=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,ee=null,Me=null,ve=null;return{setReversed:function(ye){if(se!==ye){let ze=e.get("EXT_clip_control");ye?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),se=ye;let ut=ve;ve=null,this.setClear(ut)}},getReversed:function(){return se},setTest:function(ye){ye?Te(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(ye){ee!==ye&&!N&&(i.depthMask(ye),ee=ye)},setFunc:function(ye){if(se&&(ye=i0[ye]),Me!==ye){switch(ye){case rc:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case lc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ye}},setLocked:function(ye){N=ye},setClear:function(ye){ve!==ye&&(ve=ye,se&&(ye=1-ye),i.clearDepth(ye))},reset:function(){N=!1,ee=null,Me=null,ve=null,se=!1}}}function s(){let N=!1,se=null,ee=null,Me=null,ve=null,ye=null,ze=null,ut=null,de=null;return{setTest:function(Ge){N||(Ge?Te(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!N&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,ht,Re){(ee!==Ge||Me!==ht||ve!==Re)&&(i.stencilFunc(Ge,ht,Re),ee=Ge,Me=ht,ve=Re)},setOp:function(Ge,ht,Re){(ye!==Ge||ze!==ht||ut!==Re)&&(i.stencilOp(Ge,ht,Re),ye=Ge,ze=ht,ut=Re)},setLocked:function(Ge){N=Ge},setClear:function(Ge){de!==Ge&&(i.clearStencil(Ge),de=Ge)},reset:function(){N=!1,se=null,ee=null,Me=null,ve=null,ye=null,ze=null,ut=null,de=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,w=null,b=null,v=null,M=null,x=null,S=new ge(0,0,0),C=0,R=!1,P=null,D=null,z=null,L=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,oe=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=oe>=2);let re=null,ce={},Le=i.getParameter(i.SCISSOR_BOX),je=i.getParameter(i.VIEWPORT),ne=new Nt().fromArray(Le),Ee=new Nt().fromArray(je);function De(N,se,ee,Me){let ve=new Uint8Array(4),ye=i.createTexture();i.bindTexture(N,ye),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ee;ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(se+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ye}let Ve={};Ve[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ve[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(i.DEPTH_TEST),o.setFunc(Sr),Ue(!1),Ie(lu),Te(i.CULL_FACE),ue(Wi);function Te(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function $e(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function bt(N,se){return u[N]!==se?(i.bindFramebuffer(N,se),u[N]=se,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function B(N,se){let ee=m,Me=!1;if(N){ee=f.get(se),ee===void 0&&(ee=[],f.set(se,ee));let ve=N.textures;if(ee.length!==ve.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,ze=ve.length;ye<ze;ye++)ee[ye]=i.COLOR_ATTACHMENT0+ye;ee.length=ve.length,Me=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ee)}function U(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let Z={[Os]:i.FUNC_ADD,[Tp]:i.FUNC_SUBTRACT,[Ap]:i.FUNC_REVERSE_SUBTRACT};Z[Rp]=i.MIN,Z[Cp]=i.MAX;let te={[Pp]:i.ZERO,[Ip]:i.ONE,[Lp]:i.SRC_COLOR,[fu]:i.SRC_ALPHA,[Op]:i.SRC_ALPHA_SATURATE,[Fp]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Dp]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Up]:i.ONE_MINUS_DST_ALPHA,[zp]:i.CONSTANT_COLOR,[Hp]:i.ONE_MINUS_CONSTANT_COLOR,[kp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(N,se,ee,Me,ve,ye,ze,ut,de,Ge){if(N===Wi){p===!0&&($e(i.BLEND),p=!1);return}if(p===!1&&(Te(i.BLEND),p=!0),N!==Ep){if(N!==g||Ge!==R){if((y!==Os||v!==Os)&&(i.blendEquation(i.FUNC_ADD),y=Os,v=Os),Ge)switch(N){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",N);break}else switch(N){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",N);break}w=null,b=null,M=null,x=null,S.set(0,0,0),C=0,g=N,R=Ge}return}ve=ve||se,ye=ye||ee,ze=ze||Me,(se!==y||ve!==v)&&(i.blendEquationSeparate(Z[se],Z[ve]),y=se,v=ve),(ee!==w||Me!==b||ye!==M||ze!==x)&&(i.blendFuncSeparate(te[ee],te[Me],te[ye],te[ze]),w=ee,b=Me,M=ye,x=ze),(ut.equals(S)===!1||de!==C)&&(i.blendColor(ut.r,ut.g,ut.b,de),S.copy(ut),C=de),g=N,R=!1}function Ae(N,se){N.side===qt?$e(i.CULL_FACE):Te(i.CULL_FACE);let ee=N.side===Qt;se&&(ee=!ee),Ue(ee),N.blending===Fr&&N.transparent===!1?ue(Wi):ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;a.setTest(Me),Me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function Ie(N){N!==Sp?(Te(i.CULL_FACE),N!==D&&(N===lu?i.cullFace(i.BACK):N===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),D=N}function ot(N){N!==z&&(G&&i.lineWidth(N),z=N)}function lt(N,se,ee){N?(Te(i.POLYGON_OFFSET_FILL),(L!==se||H!==ee)&&(L=se,H=ee,o.getReversed()&&(se=-se,ee=-ee),i.polygonOffset(se,ee))):$e(i.POLYGON_OFFSET_FILL)}function wt(N){N?Te(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function Rt(N){N===void 0&&(N=i.TEXTURE0+V-1),re!==N&&(i.activeTexture(N),re=N)}function Gt(N,se,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+V-1:ee=re);let Me=ce[ee];Me===void 0&&(Me={type:void 0,texture:void 0},ce[ee]=Me),(Me.type!==N||Me.texture!==se)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(N,se||Ve[N]),Me.type=N,Me.texture=se)}function O(){let N=ce[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nn(){try{i.compressedTexImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Tt(){try{i.compressedTexImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Ct(){try{i.texSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function be(){try{i.texSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Ht(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Ye(){try{i.texStorage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function I(){try{i.texStorage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function k(){try{i.texImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function le(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Q(N,se){d[N]!==se&&(i.pixelStorei(N,se),d[N]=se)}function fe(N){ne.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function xe(N){Ee.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function $(N,se){let ee=l.get(se);ee===void 0&&(ee=new WeakMap,l.set(se,ee));let Me=ee.get(N);Me===void 0&&(Me=i.getUniformBlockIndex(se,N.name),i.uniformBlockBinding(se,Me,Me),ee.set(N,Me))}function j(N,se,ee){let ve=l.get(se).get(N);c[ve]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,ee),c[ve]=ee)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},re=null,ce={},u={},c={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,w=null,b=null,v=null,M=null,x=null,S=new ge(0,0,0),C=0,R=!1,P=null,D=null,z=null,L=null,H=null,ne.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Te,disable:$e,bindFramebuffer:bt,drawBuffers:B,useProgram:U,setBlending:ue,setMaterial:Ae,setFlipSided:Ue,setCullFace:Ie,setLineWidth:ot,setPolygonOffset:lt,setScissorTest:wt,activeTexture:Rt,bindTexture:Gt,unbindTexture:O,compressedTexImage2D:nn,compressedTexImage3D:Tt,texImage2D:E,texImage3D:k,pixelStorei:Q,getParameter:le,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:Ye,texStorage3D:I,texSubImage2D:Ct,texSubImage3D:be,compressedTexSubImage2D:Ht,compressedTexSubImage3D:ke,scissor:fe,viewport:xe,reset:_e}}function mM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(I=>m.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):bo("canvas")}function y(I,E,k){let le=1,Q=Ye(I);if((Q.width>k||Q.height>k)&&(le=k/Math.max(Q.width,Q.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let fe=Math.floor(le*Q.width),xe=Math.floor(le*Q.height);u===void 0&&(u=g(fe,xe));let $=E?g(fe,xe):u;return $.width=fe,$.height=xe,$.getContext("2d").drawImage(I,0,0,fe,xe),We("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+fe+"x"+xe+")."),$}else return"data"in I&&We("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function w(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,E,k,le,Q,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;le&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&xe&&($=xe.R16_EXT),k===i.SHORT&&xe&&($=xe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),E===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&xe&&($=xe.RG16_EXT),k===i.SHORT&&xe&&($=xe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),E===i.RGB&&(k===i.UNSIGNED_SHORT&&xe&&($=xe.RGB16_EXT),k===i.SHORT&&xe&&($=xe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),E===i.RGBA){let j=fe?So:xt.getTransfer(Q);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=j===At?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&xe&&($=xe.RGBA16_EXT),k===i.SHORT&&xe&&($=xe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(I,E){let k;return I?E===null||E===ui||E===Hs?k=i.DEPTH24_STENCIL8:E===Qn?k=i.DEPTH32F_STENCIL8:E===Or&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ui||E===Hs?k=i.DEPTH_COMPONENT24:E===Qn?k=i.DEPTH_COMPONENT32F:E===Or&&(k=i.DEPTH_COMPONENT16),k}function S(I,E){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function C(I){let E=new WeakRef(I);n.get(I).__ref=E,m.add(E),_.register(I,E,E)}function R(I){let E=n.get(I).__ref;E!==void 0&&(m.delete(E),_.unregister(E))}function P(I){z(I.target)}function D(I){L(I.target)}function z(I){I.removeEventListener("dispose",P),R(I),V(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function L(I){I.removeEventListener("dispose",D),R(I),oe(I)}function H(){for(let I of m){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):z(E))}m.clear(),d.clear()}function V(I){let E=n.get(I);if(E.__webglInit===void 0)return;let k=I.source,le=f.get(k);if(le){let Q=le[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(I),Object.keys(le).length===0&&f.delete(k)}n.remove(I)}function G(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let k=I.source,le=f.get(k);delete le[E.__cacheKey],o.memory.textures--}function oe(I){let E=n.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let k=I.depthTexture;if(k&&k.renderTarget===I&&z(k),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let fe=0;fe<E.__webglFramebuffer[Q].length;fe++)i.deleteFramebuffer(E.__webglFramebuffer[Q][fe]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let le=I.textures;for(let Q=0,fe=le.length;Q<fe;Q++){let xe=n.get(le[Q]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(le[Q])}n.remove(I)}let Y=0;function re(){Y=0}function ce(){return Y}function Le(I){Y=I}function je(){let I=Y;return I>=s.maxTextures&&We("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,I}function ne(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Ee(I,E){let k=n.get(I);if(I.isVideoTexture&&Ht(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let le=I.image;if(le===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(k,I,E);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function De(I,E){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Ae(k,I,E);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function Ve(I,E){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Ae(k,I,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function Te(I,E){let k=n.get(I);if(I.version>0&&k.__version!==I.version){Ue(k,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let $e={[fc]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[dc]:i.MIRRORED_REPEAT},bt={[an]:i.NEAREST,[qp]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Wc]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},B={[Kp]:i.NEVER,[Iu]:i.ALWAYS,[Jp]:i.LESS,[Cu]:i.LEQUAL,[$p]:i.EQUAL,[Pu]:i.GEQUAL,[Qp]:i.GREATER,[jp]:i.NOTEQUAL};function U(I,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===Wc||E.magFilter===qo||E.magFilter===hi||E.minFilter===dn||E.minFilter===Wc||E.minFilter===qo||E.minFilter===hi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,$e[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,$e[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,$e[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,bt[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===an||E.minFilter!==qo&&E.minFilter!==hi||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Z(I,E){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",P),C(E));let le=E.source,Q=f.get(le);Q===void 0&&(Q={},f.set(le,Q));let fe=ne(E);if(fe!==I.__cacheKey){Q[fe]===void 0&&(Q[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[fe].usedTimes++;let xe=Q[I.__cacheKey];xe!==void 0&&(Q[I.__cacheKey].usedTimes--,xe.usedTimes===0&&G(E)),I.__cacheKey=fe,I.__webglTexture=Q[fe].texture}return k}function te(I,E,k){return Math.floor(Math.floor(I/k)/E)}function ue(I,E,k,le){let fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,k,le,E.data);else{fe.sort((N,se)=>N.start-se.start);let xe=0;for(let N=1;N<fe.length;N++){let se=fe[xe],ee=fe[N],Me=se.start+se.count,ve=te(ee.start,E.width,4),ye=te(se.start,E.width,4);ee.start<=Me+1&&ve===ye&&te(ee.start+ee.count-1,E.width,4)===ve?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++xe,fe[xe]=ee)}fe.length=xe+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,se=fe.length;N<se;N++){let ee=fe[N],Me=Math.floor(ee.start/4),ve=Math.ceil(ee.count/4),ye=Me%E.width,ze=Math.floor(Me/E.width),ut=ve,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,ye,ze,ut,de,k,le,E.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Ae(I,E,k){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);let Q=Z(I,E),fe=E.source;t.bindTexture(le,I.__webglTexture,i.TEXTURE0+k);let xe=n.get(fe);if(fe.version!==xe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let de=xt.getPrimaries(xt.workingColorSpace),Ge=E.colorSpace===Xi?null:xt.getPrimaries(E.colorSpace),ht=E.colorSpace===Xi||de===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let j=y(E.image,!1,s.maxTextureSize);j=ke(E,j);let _e=r.convert(E.format,E.colorSpace),N=r.convert(E.type),se=M(E.internalFormat,_e,N,E.normalized,E.colorSpace,E.isVideoTexture);U(le,E);let ee,Me=E.mipmaps,ve=E.isVideoTexture!==!0,ye=xe.__version===void 0||Q===!0,ze=fe.dataReady,ut=S(E,j);if(E.isDepthTexture)se=x(E.format===qi,E.type),ye&&(ve?t.texStorage2D(i.TEXTURE_2D,1,se,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,se,j.width,j.height,0,_e,N,null));else if(E.isDataTexture)if(Me.length>0){ve&&ye&&t.texStorage2D(i.TEXTURE_2D,ut,se,Me[0].width,Me[0].height);for(let de=0,Ge=Me.length;de<Ge;de++)ee=Me[de],ve?ze&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ee.width,ee.height,_e,N,ee.data):t.texImage2D(i.TEXTURE_2D,de,se,ee.width,ee.height,0,_e,N,ee.data);E.generateMipmaps=!1}else ve?(ye&&t.texStorage2D(i.TEXTURE_2D,ut,se,j.width,j.height),ze&&ue(E,j,_e,N)):t.texImage2D(i.TEXTURE_2D,0,se,j.width,j.height,0,_e,N,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,se,Me[0].width,Me[0].height,j.depth);for(let de=0,Ge=Me.length;de<Ge;de++)if(ee=Me[de],E.format!==Hn)if(_e!==null)if(ve){if(ze)if(E.layerUpdates.size>0){let ht=Vu(ee.width,ee.height,E.format,E.type);for(let Re of E.layerUpdates){let Pt=ee.data.subarray(Re*ht/ee.data.BYTES_PER_ELEMENT,(Re+1)*ht/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Re,ee.width,ee.height,1,_e,Pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ee.width,ee.height,j.depth,_e,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,se,ee.width,ee.height,j.depth,0,ee.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ee.width,ee.height,j.depth,_e,N,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,se,ee.width,ee.height,j.depth,0,_e,N,ee.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ve&&ye&&t.texStorage2D(i.TEXTURE_2D,ut,se,Me[0].width,Me[0].height);for(let de=0,Ge=Me.length;de<Ge;de++)ee=Me[de],E.format!==Hn?_e!==null?ve?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ee.width,ee.height,_e,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,de,se,ee.width,ee.height,0,ee.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?ze&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ee.width,ee.height,_e,N,ee.data):t.texImage2D(i.TEXTURE_2D,de,se,ee.width,ee.height,0,_e,N,ee.data)}else if(E.isDataArrayTexture)if(ve){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,se,j.width,j.height,j.depth),ze)if(E.layerUpdates.size>0){let de=Vu(j.width,j.height,E.format,E.type);for(let Ge of E.layerUpdates){let ht=j.data.subarray(Ge*de/j.data.BYTES_PER_ELEMENT,(Ge+1)*de/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,j.width,j.height,1,_e,N,ht)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,N,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,j.width,j.height,j.depth,0,_e,N,j.data);else if(E.isData3DTexture)ve?(ye&&t.texStorage3D(i.TEXTURE_3D,ut,se,j.width,j.height,j.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,N,j.data)):t.texImage3D(i.TEXTURE_3D,0,se,j.width,j.height,j.depth,0,_e,N,j.data);else if(E.isFramebufferTexture){if(ye)if(ve)t.texStorage2D(i.TEXTURE_2D,ut,se,j.width,j.height);else{let de=j.width,Ge=j.height;for(let ht=0;ht<ut;ht++)t.texImage2D(i.TEXTURE_2D,ht,se,de,Ge,0,_e,N,null),de>>=1,Ge>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),j.parentNode!==de){de.appendChild(j),d.add(E),de.onpaint=Ge=>{let ht=Ge.changedElements;for(let Re of d)ht.includes(Re.image)&&(Re.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ht=i.RGBA,Re=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ht,Re,Pt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(ve&&ye){let de=Ye(Me[0]);t.texStorage2D(i.TEXTURE_2D,ut,se,de.width,de.height)}for(let de=0,Ge=Me.length;de<Ge;de++)ee=Me[de],ve?ze&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,_e,N,ee):t.texImage2D(i.TEXTURE_2D,de,se,_e,N,ee);E.generateMipmaps=!1}else if(ve){if(ye){let de=Ye(j);t.texStorage2D(i.TEXTURE_2D,ut,se,de.width,de.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,N,j)}else t.texImage2D(i.TEXTURE_2D,0,se,_e,N,j);w(E)&&E.mipmapsAutoUpdate===!0&&b(le),xe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ue(I,E,k){if(E.image.length!==6)return;let le=Z(I,E),Q=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let fe=n.get(Q);if(Q.version!==fe.__version||le===!0){t.activeTexture(i.TEXTURE0+k);let xe=xt.getPrimaries(xt.workingColorSpace),$=E.colorSpace===Xi?null:xt.getPrimaries(E.colorSpace),j=E.colorSpace===Xi||xe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _e=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,se=[];for(let Re=0;Re<6;Re++)!_e&&!N?se[Re]=y(E.image[Re],!0,s.maxCubemapSize):se[Re]=N?E.image[Re].image:E.image[Re],se[Re]=ke(E,se[Re]);let ee=se[0],Me=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),ye=M(E.internalFormat,Me,ve,E.normalized,E.colorSpace),ze=E.isVideoTexture!==!0,ut=fe.__version===void 0||le===!0,de=Q.dataReady,Ge=S(E,ee);U(i.TEXTURE_CUBE_MAP,E);let ht;if(E.isDepthTexture){if(ye=x(E.format===qi,E.type),ut)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,ee.width,ee.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,ee.width,ee.height,0,Me,ve,null)}else if(_e){ze&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ye,ee.width,ee.height);for(let Re=0;Re<6;Re++){ht=se[Re].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){let sn=ht[Pt];E.format!==Hn?Me!==null?ze?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt,0,0,sn.width,sn.height,Me,sn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt,ye,sn.width,sn.height,0,sn.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt,0,0,sn.width,sn.height,Me,ve,sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt,ye,sn.width,sn.height,0,Me,ve,sn.data)}}}else{if(ht=E.mipmaps,ze&&ut){ht.length>0&&Ge++;let Re=Ye(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ye,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(N){ze?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,se[Re].width,se[Re].height,Me,ve,se[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,se[Re].width,se[Re].height,0,Me,ve,se[Re].data);for(let Pt=0;Pt<ht.length;Pt++){let ns=ht[Pt].image[Re].image;ze?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt+1,0,0,ns.width,ns.height,Me,ve,ns.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt+1,ye,ns.width,ns.height,0,Me,ve,ns.data)}}else{ze?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Me,ve,se[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,Me,ve,se[Re]);for(let Pt=0;Pt<ht.length;Pt++){let sn=ht[Pt];ze?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt+1,0,0,Me,ve,sn.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Pt+1,ye,Me,ve,sn.image[Re])}}}w(E)&&E.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),fe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ie(I,E,k,le,Q,fe){let xe=r.convert(k.format,k.colorSpace),$=r.convert(k.type),j=M(k.internalFormat,xe,$,k.normalized,k.colorSpace),_e=n.get(E),N=n.get(k);if(N.__renderTarget=E,!_e.__hasExternalTextures){let se=Math.max(1,E.width>>fe),ee=Math.max(1,E.height>>fe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,fe,j,se,ee,E.depth,0,xe,$,null):t.texImage2D(Q,fe,j,se,ee,0,xe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),be(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,Q,N.__webglTexture,0,Ct(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,Q,N.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(I,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let le=E.depthTexture,Q=le&&le.isDepthTexture?le.type:null,fe=x(E.stencilBuffer,Q),xe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(E),fe,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(E),fe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,I)}else{let le=E.textures;for(let Q=0;Q<le.length;Q++){let fe=le[Q],xe=r.convert(fe.format,fe.colorSpace),$=r.convert(fe.type),j=M(fe.internalFormat,xe,$,fe.normalized,fe.colorSpace);be(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(E),j,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(E),j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(I,E,k){let le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(E.depthTexture);Q.__renderTarget=E;let fe=le?E.depthTexture.image[0]:E.depthTexture.image;(!Q.__webglTexture||fe.width!==E.width||fe.height!==E.height)&&(fe.width=E.width,fe.height=E.height,E.depthTexture.needsUpdate=!0),le?Te(E.depthTexture,0):Ee(E.depthTexture,0);let xe=Q.__webglTexture,$=Ct(E),j=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,_e=E.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Hi)be(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,j,xe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,_e,j,xe,0);else if(E.depthTexture.format===qi)be(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,j,xe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,_e,j,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(I){let E=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let le=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",Q)};le.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=le}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let le=0;le<6;le++)lt(E.__webglFramebuffer[le],I,le);else I.texture.mipmaps.length>0?lt(E.__webglFramebuffer[0],I,0):lt(E.__webglFramebuffer,I,0);else if(k){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),ot(E.__webglDepthbuffer[le],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,fe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ot(E.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(I,E,k){let le=n.get(I);E!==void 0&&Ie(le.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&wt(I)}function Gt(I){let E=I.texture,k=n.get(I),le=n.get(E);I.addEventListener("dispose",D),C(I);let Q=I.textures,fe=I.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,o.memory.textures++),fe){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<E.mipmaps.length;j++)k.__webglFramebuffer[$][j]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(E.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(xe)for(let $=0,j=Q.length;$<j;$++){let _e=n.get(Q[$]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&be(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let j=Q[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let _e=r.convert(j.format,j.colorSpace),N=r.convert(j.type),se=M(j.internalFormat,_e,N,j.normalized,j.colorSpace,I.isXRRenderTarget===!0),ee=Ct(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,se,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),U(i.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)Ie(k.__webglFramebuffer[$][j],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Ie(k.__webglFramebuffer[$],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(E)?b(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let $=0,j=Q.length;$<j;$++){let _e=Q[$],N=n.get(_e),se=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,N.__webglTexture),U(se,_e),Ie(k.__webglFramebuffer,I,_e,i.COLOR_ATTACHMENT0+$,se,0),w(_e)&&b(se)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,le.__webglTexture),U($,E),E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)Ie(k.__webglFramebuffer[j],I,E,i.COLOR_ATTACHMENT0,$,j);else Ie(k.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,$,0);w(E)?b($):E.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&wt(I)}function O(I){let E=I.textures;for(let k=0,le=E.length;k<le;k++){let Q=E[k];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let fe=v(I),xe=n.get(Q).__webglTexture;t.bindTexture(fe,xe),b(fe),t.unbindTexture()}}}let nn=[];function Tt(I){if(I.samples>0){if(be(I)===!1){let E=I.textures,k=I.width,le=I.height,Q=i.COLOR_BUFFER_BIT,fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(I),$=E.length>1;if($)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let N=n.get(E[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,k,le,0,0,k,le,Q,i.NEAREST),c===!0&&(nn.length=0,nn.push(i.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&nn.push(fe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let N=n.get(E[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ct(I){return Math.min(s.maxSamples,I.samples)}function be(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ke(I,E){let k=I.colorSpace,le=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Is&&k!==Xi&&(xt.getTransfer(k)===At?(le!==Hn||Q!==Fn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",k)),E}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=je,this.resetTextureUnits=re,this.getTextureUnits=ce,this.setTextureUnits=Le,this.setTexture2D=Ee,this.setTexture2DArray=De,this.setTexture3D=Ve,this.setTextureCube=Te,this.rebindTextures=Rt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=be,this.dispose=H}function gM(i,e){function t(n,s=Xi){let r,o=xt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return i.BYTE;if(n===wu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===Au)return i.ALPHA;if(n===Ru)return i.RGB;if(n===Hn)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===Xo||n===Yo||n===Zo||n===Ko)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===jc||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===Jo||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===bl||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Tl||n===$o||n===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`,nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:xM,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sf=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new nf,g={},y=t.getContextAttributes(),w=null,b=null,v=[],M=[],x=new he,S=null,C=null,R=new fn;R.viewport=new Nt;let P=new fn;P.viewport=new Nt;let D=[R,P],z=new Hc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Ee=v[ne];return Ee===void 0&&(Ee=new Ar,v[ne]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ne){let Ee=v[ne];return Ee===void 0&&(Ee=new Ar,v[ne]=Ee),Ee.getGripSpace()},this.getHand=function(ne){let Ee=v[ne];return Ee===void 0&&(Ee=new Ar,v[ne]=Ee),Ee.getHandSpace()};function V(ne){let Ee=M.indexOf(ne.inputSource);if(Ee===-1)return;let De=v[Ee];De!==void 0&&(De.update(ne.inputSource,ne.frame,l||o),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",oe);for(let ne=0;ne<v.length;ne++){let Ee=M[ne];Ee!==null&&(M[ne]=null,v[ne].disconnect(Ee))}L=null,H=null,p.reset();for(let ne in g)delete g[ne];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,b=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),C!==null){let ne=C.camera;ne.fov=C.fov,ne.zoom=C.zoom,ne.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Ve=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=y.stencil?qi:Hi,Ve=y.stencil?Hs:ui);let $e={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Wt(u.textureWidth,u.textureHeight,{format:Hn,type:Fn,depthTexture:new ci(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let De={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Wt(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(ne){for(let Ee=0;Ee<ne.removed.length;Ee++){let De=ne.removed[Ee],Ve=M.indexOf(De);Ve>=0&&(M[Ve]=null,v[Ve].disconnect(De))}for(let Ee=0;Ee<ne.added.length;Ee++){let De=ne.added[Ee],Ve=M.indexOf(De);if(Ve===-1){for(let $e=0;$e<v.length;$e++)if($e>=M.length){M.push(De),Ve=$e;break}else if(M[$e]===null){M[$e]=De,Ve=$e;break}if(Ve===-1)break}let Te=v[Ve];Te&&Te.connect(De)}}function Y(ne,Ee){Ee===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Ee.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let Ee=ne.near,De=ne.far;p.texture!==null&&(p.depthNear>0&&(Ee=p.depthNear),p.depthFar>0&&(De=p.depthFar)),z.near=P.near=R.near=Ee,z.far=P.far=R.far=De,(L!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,H=z.far),z.layers.mask=ne.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Ve=ne.parent,Te=z.cameras;Y(z,Ve);for(let $e=0;$e<Te.length;$e++)Y(Te[$e],Ve);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&ne.isPerspectiveCamera&&(C={camera:ne,fov:ne.fov,zoom:ne.zoom}),re(ne,z,Ve)};function re(ne,Ee,De){De===null?ne.matrix.copy(Ee.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Ee.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Er*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(ne){c=ne,u!==null&&(u.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(ne){return g[ne]};let ce=null;function Le(ne,Ee){if(h=Ee.getViewerPose(l||o),m=Ee,h!==null){let De=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ve=!1;De.length!==z.cameras.length&&(z.cameras.length=0,Ve=!0);for(let B=0;B<De.length;B++){let U=De[B],Z=null;if(f!==null)Z=f.getViewport(U);else{let ue=d.getViewSubImage(u,U);Z=ue.viewport,B===0&&(e.setRenderTargetTextures(b,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(b))}let te=D[B];te===void 0&&(te=new fn,te.layers.enable(B),te.viewport=new Nt,D[B]=te),te.matrix.fromArray(U.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(U.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Z.x,Z.y,Z.width,Z.height),B===0&&(z.matrix.copy(te.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ve===!0&&z.cameras.push(te)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let B=d.getDepthInformation(De[0]);B&&B.isValid&&B.texture&&p.init(B,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let B=0;B<De.length;B++){let U=De[B].camera;if(U){let Z=g[U];Z||(Z=new No,g[U]=Z);let te=d.getCameraImage(U);Z.sourceTexture=te}}}}for(let De=0;De<v.length;De++){let Ve=M[De],Te=v[De];Ve!==null&&Te!==void 0&&Te.update(Ve,Ee,l||o)}ce&&ce(ne,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),m=null}let je=new C0;je.setAnimationLoop(Le),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}},_M=new at,z0=new et;z0.set(-1,0,0,0,1,0,0,0,1);function yM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,zu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,y,w):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,b=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(z0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function MM(i,e,t,n){let s={},r={};function o(y,w){let b=w.program;n.uniformBlockBinding(y,b,s[y.id])}function a(y,w){let b=s[y.id];b===void 0&&(m(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",p));let v=w.program;n.updateUBOMapping(y,v);let M=e.render.frame;r[y.id]!==M&&(l(y),r[y.id]=M)}function c(y){let w=i.createBuffer(),b=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,v),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(y){let w=s[y.id],b=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,x=b.length;M<x;M++){let S=b[M];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)h(S[C],M,C,v);else h(S,M,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,b,v){if(u(y,w,b,v)===!0){let M=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let R=x[C],P=_(R,!0);d(R,y.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,y.__data)}}function d(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function u(y,w,b,v){let M=y.value,x=w+"_"+b;if(Array.isArray(M)){v[x]===void 0&&(v[x]=[]);let S=v[x],C=!1;for(let R=0;R<M.length;R++)f(M[R],S,R)===!0&&(C=!0);return C}return f(M,v,x)}function f(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let v=w[b];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function m(y){let w=y.uniforms,b=0,v=16;for(let x=0,S=w.length;x<S;x++){let C=Array.isArray(w[x])?w[x]:[w[x]];for(let R=0,P=C.length;R<P;R++){let D=C[R],z=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(w[x])||Array.isArray(D.value),H=b;for(let G=0,oe=z.length;G<oe;G++){let Y=z[G],re=_(Y,L),ce=b%v,Le=ce%re.boundary,je=ce+Le;b+=Le,je!==0&&v-je<re.storage&&(b+=v-je),G===0&&(H=b),b+=re.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((b-H)/Float32Array.BYTES_PER_ELEMENT),D.__offset=H}}let M=b%v;return M>0&&(b+=v-M),y.__size=b,y.__cache={},this}function _(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){let w=y.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function bM(){return Ei===null&&(Ei=new Ns(SM,16,16,gs,mn),Ei.name="DFG_LUT",Ei.minFilter=dn,Ei.magFilter=dn,Ei.wrapS=vi,Ei.wrapT=vi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Dl=class{constructor(e={}){let{canvas:t=e0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([$c,Jc,Kc]),g=new Set([Fn,ui,Or,Hs,Xc,Yc]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},v=null,M=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null,z=null,L=null,H=null;this._outputColorSpace=An;let V=0,G=0,oe=null,Y=-1,re=null,ce=new Nt,Le=new Nt,je=null,ne=new ge(0),Ee=0,De=t.width,Ve=t.height,Te=1,$e=null,bt=null,B=new Nt(0,0,De,Ve),U=new Nt(0,0,De,Ve),Z=!1,te=new Si,ue=new vc,Ae=!1,Ue=!1,Ie=new at,ot=new T,lt=new Nt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Gt(){return oe===null?Te:1}let O=n;function nn(A,F){return t.getContext(A,F)}let Tt,Ct,be,Ht,ke,Ye,I,E,k,le,Q,fe,xe,$,j,_e,N,se,ee,Me,ve,ye,ze;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Re,!1),O===null){let F="webgl2";if(O=nn(F,A),O===null)throw nn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(A){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ke("WebGLRenderer: "+A.message),A}function ut(){Tt=new Ny(O),Tt.init(),ve=new gM(O,Tt),Ct=new by(O,Tt,e,ve),be=new pM(O,Tt),Ct.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),H=O.createFramebuffer(),Ht=new By(O),ke=new eM,Ye=new mM(O,Tt,be,ke,Ct,ve,Ht),I=new Dy(R),E=new zx(O),ye=new My(O,E),k=new Uy(O,E,Ht,ye),le=new zy(O,k,E,ye,Ht),se=new Oy(O,Ct,Ye),j=new wy(ke),Q=new j1(R,I,Tt,Ct,ye,j),fe=new yM(R,ke),xe=new nM,$=new cM(Tt),N=new yy(R,I,be,le,m,c),_e=new dM(R,le,Ct),ze=new MM(O,Ht,Ct,be),ee=new Sy(O,Tt,Ht),Me=new Fy(O,Tt,Ht),Ht.programs=Q.programs,R.capabilities=Ct,R.extensions=Tt,R.properties=ke,R.renderLists=xe,R.shadowMap=_e,R.state=be,R.info=Ht}_!==Fn&&(C=new ky(_,t.width,t.height,a,s,r));let de=new sf(R,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(De,Ve,!1))},this.getSize=function(A){return A.set(De,Ve)},this.setSize=function(A,F,K=!0){if(de.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,Ve=F,t.width=Math.floor(A*Te),t.height=Math.floor(F*Te),K===!0&&(t.style.width=A+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(De*Te,Ve*Te).floor()},this.setDrawingBufferSize=function(A,F,K){De=A,Ve=F,Te=K,t.width=Math.floor(A*K),t.height=Math.floor(F*K),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(_===Fn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ce)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,F,K,W){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,F,K,W),be.viewport(ce.copy(B).multiplyScalar(Gt()).round())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,F,K,W){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,F,K,W),be.scissor(Le.copy(U).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){be.setScissorTest(Z=A)},this.setOpaqueSort=function(A){$e=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,K=!0){let W=0;if(A){let q=!1;if(oe!==null){let we=oe.texture.format;q=p.has(we)}if(q){let we=oe.texture.type,Ne=g.has(we),Se=N.getClearColor(),Pe=N.getClearAlpha(),Oe=Se.r,tt=Se.g,mt=Se.b;Ne?(y[0]=Oe,y[1]=tt,y[2]=mt,y[3]=Pe,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=Oe,w[1]=tt,w[2]=mt,w[3]=Pe,O.clearBufferiv(O.COLOR,0,w))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),N.dispose(),xe.dispose(),$.dispose(),Ye.dispose(),ke.dispose(),I.dispose(),le.dispose(),k.dispose(),ye.dispose(),ze.dispose(),Q.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ld),de.removeEventListener("sessionend",Dd),bs.stop()};function Ge(A){A.preventDefault(),wo("WebGLRenderer: Context Lost."),P=!0}function ht(){wo("WebGLRenderer: Context Restored."),P=!1;let A=Ht.autoReset,F=_e.enabled,K=_e.autoUpdate,W=_e.needsUpdate,q=_e.type;ut(),Ht.autoReset=A,_e.enabled=F,_e.autoUpdate=K,_e.needsUpdate=W,_e.type=q}function Re(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pt(A){let F=A.target;F.removeEventListener("dispose",Pt),sn(F)}function sn(A){ns(A),ke.remove(A)}function ns(A){let F=ke.get(A).programs;F!==void 0&&(F.forEach(function(K){Q.releaseProgram(K)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,K,W,q,we){F===null&&(F=wt);let Ne=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=Ag(A,F,K,W,q);be.setMaterial(W,Ne);let Pe=K.index,Oe=1;if(W.wireframe===!0){if(Pe=k.getWireframeAttribute(K),Pe===void 0)return;Oe=2}let tt=K.drawRange,mt=K.attributes.position,Fe=tt.start*Oe,gt=(tt.start+tt.count)*Oe;we!==null&&(Fe=Math.max(Fe,we.start*Oe),gt=Math.min(gt,(we.start+we.count)*Oe)),Pe!==null?(Fe=Math.max(Fe,0),gt=Math.min(gt,Pe.count)):mt!=null&&(Fe=Math.max(Fe,0),gt=Math.min(gt,mt.count));let Zt=gt-Fe;if(Zt<0||Zt===1/0)return;ye.setup(q,W,Se,K,Pe);let Ft,Dt=ee;if(Pe!==null&&(Ft=E.get(Pe),Dt=Me,Dt.setIndex(Ft)),q.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Gt()),Dt.setMode(O.LINES)):Dt.setMode(O.TRIANGLES);else if(q.isLine){let xn=W.linewidth;xn===void 0&&(xn=1),be.setLineWidth(xn*Gt()),q.isLineSegments?Dt.setMode(O.LINES):q.isLineLoop?Dt.setMode(O.LINE_LOOP):Dt.setMode(O.LINE_STRIP)}else q.isPoints?Dt.setMode(O.POINTS):q.isSprite&&Dt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let xn=q._multiDrawStarts,Be=q._multiDrawCounts,En=q._multiDrawCount,Et=Pe?E.get(Pe).bytesPerElement:1,ws=ke.get(W).currentProgram.getUniforms();for(let vn=0;vn<En;vn++)ws.setValue(O,"_gl_DrawID",vn),Dt.render(xn[vn]/Et,Be[vn])}else if(q.isInstancedMesh)Dt.renderInstances(Fe,Zt,q.count);else if(K.isInstancedBufferGeometry){let xn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,xn);Dt.renderInstances(Fe,Zt,Be)}else Dt.render(Fe,Zt)};function Id(A,F,K,W){D!==null&&A.isNodeMaterial&&D.setObject(W,A),Ae===!0&&j.setState(A,K,!1),A.transparent===!0&&A.side===qt&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,oo(A,F,W),A.side=wi,A.needsUpdate=!0,oo(A,F,W),A.side=qt):oo(A,F,W)}this.compile=function(A,F,K=null){K===null&&(K=A),D!==null&&D.renderStart(A,F,K),M=$.get(K),M.init(F),S.push(M),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),A!==K&&A.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Ue=this.localClippingEnabled,Ae=j.init(this.clippingPlanes,Ue),Ae===!0&&j.setGlobalState(this.clippingPlanes,F),D!==null&&_e.render(M.state.shadowsArray,K,F);let W=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let we=q.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Se=we[Ne];Id(Se,K,F,q),W.add(Se)}else Id(we,K,F,q),W.add(we)}),M=S.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(A,F,K=null){let W=this.compile(A,F,K);return new Promise(q=>{function we(){if(W.forEach(function(Ne){let Pe=ke.get(Ne).currentProgram;(Pe===void 0||Pe.isReady())&&W.delete(Ne)}),W.size===0){q(A);return}setTimeout(we,10)}Tt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Rh=null;function Eg(A){Rh&&Rh(A)}function Ld(){bs.stop()}function Dd(){bs.start()}let bs=new C0;bs.setAnimationLoop(Eg),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(A){Rh=A,de.setAnimationLoop(A),A===null?bs.stop():bs.start()},de.addEventListener("sessionstart",Ld),de.addEventListener("sessionend",Dd),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,F);let K=de.enabled===!0&&de.isPresenting===!0,W=C!==null&&(oe===null||K)&&C.begin(R,oe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,F,oe),M=$.get(A,S.length),M.init(F),M.state.textureUnits=Ye.getTextureUnits(),S.push(M),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ue.setFromArrayCamera(F):te.setFromProjectionMatrix(Ie,Xn,F.reversedDepth),Ue=this.localClippingEnabled,Ae=j.init(this.clippingPlanes,Ue),v=xe.get(A,x.length),v.init(),x.push(v),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Ne=R.xr.getDepthSensingMesh();Ne!==null&&Ch(Ne,F,-1/0,R.sortObjects)}Ch(A,F,0,R.sortObjects),v.finish(),D!==null&&D.updateLights(M.state.lightsArray),R.sortObjects===!0&&v.sort($e,bt),Rt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Rt&&N.addToRenderList(v,A),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&j.beginShadows();let q=M.state.shadowsArray;if(_e.render(q,A,F),Ae===!0&&j.endShadows(),(W&&C.hasRenderPass())===!1){let Ne=v.opaque,Se=v.transmissive;if(M.setupLights(),F.isArrayCamera){let Pe=F.cameras;if(Se.length>0)for(let Oe=0,tt=Pe.length;Oe<tt;Oe++){let mt=Pe[Oe];Ud(Ne,Se,A,mt)}Rt&&N.render(A);for(let Oe=0,tt=Pe.length;Oe<tt;Oe++){let mt=Pe[Oe];Nd(v,A,mt,mt.viewport)}}else Se.length>0&&Ud(Ne,Se,A,F),Rt&&N.render(A),Nd(v,A,F)}oe!==null&&G===0&&(Ye.updateMultisampleRenderTarget(oe),Ye.updateRenderTargetMipmap(oe)),W&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,F),ye.resetDefaultState(),Y=-1,re=null,S.pop(),S.length>0?(M=S[S.length-1],Ye.setTextureUnits(M.state.textureUnits),Ae===!0&&j.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,D!==null&&D.renderEnd()};function Ch(A,F,K,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){let Ne=F.isArrayCamera?ue:te;if(!A.frustumCulled||A.intersectsFrustum(Ne)){W&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);let Se=le.update(A),Pe=A.material;Pe.visible&&v.push(A,Se,Pe,K,lt.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let Ne=F.isArrayCamera?ue:te;if(!A.frustumCulled||A.intersectsFrustum(Ne)){let Se=le.update(A),Pe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),lt.copy(Se.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)),Array.isArray(Pe)){let Oe=Se.groups;for(let tt=0,mt=Oe.length;tt<mt;tt++){let Fe=Oe[tt],gt=Pe[Fe.materialIndex];gt&&gt.visible&&v.push(A,Se,gt,K,lt.z,Fe,F)}}else Pe.visible&&v.push(A,Se,Pe,K,lt.z,null,F)}}}let we=A.children;for(let Ne=0,Se=we.length;Ne<Se;Ne++)Ch(we[Ne],F,K,W)}function Nd(A,F,K,W){let{opaque:q,transmissive:we,transparent:Ne}=A;M.setupLightsView(K),Ae===!0&&j.setGlobalState(R.clippingPlanes,K),W&&be.viewport(ce.copy(W)),q.length>0&&Ca(q,F,K),we.length>0&&Ca(we,F,K),Ne.length>0&&Ca(Ne,F,K),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ud(A,F,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let Fe=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new Wt(1,1,{generateMipmaps:!0,type:Fe?mn:Fn,minFilter:hi,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let we=M.state.transmissionRenderTarget[W.id],Ne=W.viewport||ce;we.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ne),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&N.render(K);let tt=R.toneMapping;R.toneMapping=$n;let mt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),Ae===!0&&j.setGlobalState(R.clippingPlanes,W),Ca(A,K,W),Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let gt=0,Zt=F.length;gt<Zt;gt++){let Ft=F[gt],{object:Dt,geometry:xn,material:Be,group:En}=Ft;if(Be.side===qt&&Dt.layers.test(W.layers)){let Et=Be.side;Be.side=Qt,Be.needsUpdate=!0,Fd(Dt,K,W,xn,Be,En),Be.side=Et,Be.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we))}R.setRenderTarget(Se,Pe,Oe),R.setClearColor(ne,Ee),mt!==void 0&&(W.viewport=mt),R.toneMapping=tt}function Ca(A,F,K){let W=F.isScene===!0?F.overrideMaterial:null;for(let q=0,we=A.length;q<we;q++){let Ne=A[q],{object:Se,geometry:Pe,group:Oe}=Ne,tt=Ne.material;tt.allowOverride===!0&&W!==null&&(tt=W),Se.layers.test(K.layers)&&Fd(Se,F,K,Pe,tt,Oe)}}function Fd(A,F,K,W,q,we){D!==null&&q.isNodeMaterial&&D.setObject(A,q),A.onBeforeRender(R,F,K,W,q,we),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,F,K,W,A,we),q.transparent===!0&&q.side===qt&&q.forceSinglePass===!1?(q.side=Qt,q.needsUpdate=!0,R.renderBufferDirect(K,F,W,q,A,we),q.side=wi,q.needsUpdate=!0,R.renderBufferDirect(K,F,W,q,A,we),q.side=qt):R.renderBufferDirect(K,F,W,q,A,we),A.onAfterRender(R,F,K,W,q,we)}function Bd(A){let F=0;for(let K of A)K.texture!==null&&F++;return F}function oo(A,F,K){F.isScene!==!0&&(F=wt);let W=ke.get(A),q=M.state.lights,we=M.state.shadowsArray,Ne=q.state.version,Se=Q.getParameters(A,q.state,we,F,K,M.state.lightProbeGridArray),Pe=Q.getProgramCacheKey(Se),Oe=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=I.get(A.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Pt),Oe=new Map,W.programs=Oe,W.programVariants=new Map);let mt=Oe.get(Pe);if(mt!==void 0){if(W.currentProgram===mt&&W.lightsStateVersion===Ne)return zd(A,Se),mt}else Se.uniforms=Q.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,K,Se),A.onBeforeCompile(Se,R),mt=Q.acquireProgram(Se,Pe),Oe.set(Pe,mt),W.uniforms=Se.uniforms;let Fe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=j.uniform),zd(A,Se),W.needsLights=Cg(A),W.lightsStateVersion=Ne,W.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.sunLights.value=q.state.sun,Fe.sunLightShadows.value=q.state.sunShadow,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.sunShadowMatrix.value=q.state.sunShadowMatrix,Fe.sunShadowCascade.value=q.state.sunShadowCascade,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=Bd(M.state.lightProbeGridArray),W.currentProgram=mt,W.uniformsList=null,mt}function Tg(A,F,K,W,q){let we=ke.get(A),Ne=we.currentProgram.id+","+W+","+q,Se=we.programVariants.get(Ne);return Se===void 0?(Se=oo(A,F,K),we.programVariants.set(Ne,Se)):(we.currentProgram=Se,we.uniformsList=null,we.outputColorSpace=W,we.toneMapping=q),Se}function Od(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=zr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function zd(A,F){let K=ke.get(A);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Ag(A,F,K,W,q){F.isScene!==!0&&(F=wt),Ye.resetTextureUnits();let we=F.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Se=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:xt.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=I.get(W.envMap||Ne,Pe),tt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Zt=!!K.morphAttributes.color,Ft=$n;W.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ft=R.toneMapping);let Dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xn=Dt!==void 0?Dt.length:0,Be=ke.get(W),En=M.state.lights;if(Ae===!0&&(Ue===!0||A!==re)){let kt=A===re&&W.id===Y;j.setState(W,A,kt)}let Et=!1,ws=!1;W.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==En.state.version||q.isBatchedMesh&&Be.batching===!1||!q.isBatchedMesh&&Be.batching===!0||q.isBatchedMesh&&Be.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Be.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Be.instancingMorph===!1&&q.morphTexture!==null||Be.envMap!==Oe||W.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==j.numPlanes||Be.numIntersection!==j.numIntersection)||Be.vertexAlphas!==tt||Be.vertexTangents!==mt||Be.morphTargets!==Fe||Be.morphNormals!==gt||Be.morphColors!==Zt||Be.morphTargetsCount!==xn||Be.numLightProbeGrids!==Bd(M.state.lightProbeGridArray)?Et=!0:(Be.outputColorSpace!==Se||Be.toneMapping!==Ft)&&(ws=!0):(Et=!0,Be.__version=W.version);let vn=Be.currentProgram;(Et===!0||ws===!0)&&(vn=ws===!0?Tg(W,F,q,Se,Ft):oo(W,F,q),D&&W.isNodeMaterial&&D.onUpdateProgram(W,vn,Be));let Pa=!1,is=!1,Es=!1,yt=vn.getUniforms(),un=Be.uniforms;if(be.useProgram(vn.program)&&(Pa=!0,is=!0,Es=!0),W.id!==Y&&(Y=W.id,is=!0),Pa||re!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(O,"projectionMatrix",A.projectionMatrix),yt.setValue(O,"viewMatrix",A.matrixWorldInverse);let rn=yt.map.cameraPosition;rn!==void 0&&rn.setValue(O,ot.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),re!==A&&(re=A,is=!0,Es=!0)}if(Be.needsLights&&(En.state.sunShadowMap.length>0&&yt.setValue(O,"sunShadowMap",En.state.sunShadowMap,Ye),En.state.directionalShadowMap.length>0&&yt.setValue(O,"directionalShadowMap",En.state.directionalShadowMap,Ye),En.state.spotShadowMap.length>0&&yt.setValue(O,"spotShadowMap",En.state.spotShadowMap,Ye),En.state.pointShadowMap.length>0&&yt.setValue(O,"pointShadowMap",En.state.pointShadowMap,Ye)),q.isSkinnedMesh){yt.setOptional(O,q,"bindMatrix"),yt.setOptional(O,q,"bindMatrixInverse");let kt=q.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(O,"boneTexture",kt.boneTexture,Ye))}q.isBatchedMesh&&(yt.setOptional(O,q,"batchingTexture"),yt.setValue(O,"batchingTexture",q._matricesTexture,Ye),yt.setOptional(O,q,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",q._indirectTexture,Ye),yt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",q._colorsTexture,Ye));let ii=K.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&se.update(q,K,vn),(is||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,yt.setValue(O,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(un.envMapIntensity.value=F.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=bM()),is){if(yt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&Rg(un,Es),we&&W.fog===!0&&fe.refreshFogUniforms(un,we),fe.refreshMaterialUniforms(un,W,Te,Ve,M.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.numLightProbeGrids>0){let kt=b,rn=0;for(let Li of M.state.lightProbeGridArray)Li.texture!==null&&(kt.textures[rn]=Li.texture,kt.min[rn]=Li.boundingBox.min,kt.max[rn]=Li.boundingBox.max,kt.resolution[rn]=Li.resolution,rn++);for(let Li in kt)kt[Li].length=rn;un.probesSH.value=kt.textures,un.probesMin.value=kt.min,un.probesMax.value=kt.max,un.probesResolution.value=kt.resolution}zr.upload(O,Od(Be),un,Ye)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zr.upload(O,Od(Be),un,Ye),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(O,"center",q.center),yt.setValue(O,"modelViewMatrix",q.modelViewMatrix),yt.setValue(O,"normalMatrix",q.normalMatrix),yt.setValue(O,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let kt=W.uniformsGroups;for(let rn=0,Li=kt.length;rn<Li;rn++){let kd=kt[rn];ze.update(kd,vn),ze.bind(kd,vn)}}return vn}function Rg(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Cg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(A,F,K){let W=ke.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ke.get(A.texture).__webglTexture=F,ke.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let K=ke.get(A);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,K=0){oe=A,V=F,G=K;let W=null,q=!1,we=!1;if(A){let Se=ke.get(A);if(Se.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),ce.copy(A.viewport),Le.copy(A.scissor),je=A.scissorTest,be.viewport(ce),be.scissor(Le),be.setScissorTest(je),Y=-1;return}else if(Se.__webglFramebuffer===void 0)Ye.setupRenderTarget(A);else if(Se.__hasExternalTextures)Ye.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Se.__boundDepthTexture!==tt){if(tt!==null&&ke.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(A)}}let Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);let Oe=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?W=Oe[F][K]:W=Oe[F],q=!0):A.samples>0&&Ye.useMultisampledRTT(A)===!1?W=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[K]:W=Oe,ce.copy(A.viewport),Le.copy(A.scissor),je=A.scissorTest}else ce.copy(B).multiplyScalar(Te).floor(),Le.copy(U).multiplyScalar(Te).floor(),je=Z;if(K!==0&&(W=z),be.bindFramebuffer(O.FRAMEBUFFER,W)&&be.drawBuffers(A,W),be.viewport(ce),be.scissor(Le),be.setScissorTest(je),q){let Se=ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,K)}else if(we){let Se=F;for(let Pe=0;Pe<A.textures.length;Pe++){let Oe=ke.get(A.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,Oe.__webglTexture,K,Se)}}else if(A!==null&&K!==0){let Se=ke.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,K)}Y=-1};function Hd(A){let F=ke.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=Ct.textureFormatReadable(A.format),F.__typeReadable=Ct.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,K,W,q,we,Ne,Se=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){be.bindFramebuffer(O.FRAMEBUFFER,Pe);try{let Oe=A.textures[Se],tt=Oe.format,mt=Oe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Fe=Hd(Oe);if(Fe.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&K>=0&&K<=A.height-q&&O.readPixels(F,K,W,q,ve.convert(tt),ve.convert(mt),we)}finally{let Oe=oe!==null?ke.get(oe).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,F,K,W,q,we,Ne,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(F>=0&&F<=A.width-W&&K>=0&&K<=A.height-q){be.bindFramebuffer(O.FRAMEBUFFER,Pe);let Oe=A.textures[Se],tt=Oe.format,mt=Oe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Fe=Hd(Oe);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(F,K,W,q,ve.convert(tt),ve.convert(mt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Zt=oe!==null?ke.get(oe).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Zt);let Ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await n0(O,Ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(gt),O.deleteSync(Ft),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,K=0){let W=Math.pow(2,-K),q=Math.floor(A.image.width*W),we=Math.floor(A.image.height*W),Ne=F!==null?F.x:0,Se=F!==null?F.y:0;Ye.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Ne,Se,q,we),be.unbindTexture()},this.copyTextureToTexture=function(A,F,K=null,W=null,q=0,we=0){let Ne,Se,Pe,Oe,tt,mt,Fe,gt,Zt,Ft=A.isCompressedTexture?A.mipmaps[we]:A.image;if(K!==null)Ne=K.max.x-K.min.x,Se=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,tt=K.min.y,mt=K.isBox3?K.min.z:0;else{let yt=Math.pow(2,-q);Ne=Math.floor(Ft.width*yt),Se=Math.floor(Ft.height*yt),A.isDataArrayTexture?Pe=Ft.depth:A.isData3DTexture?Pe=Math.floor(Ft.depth*yt):Pe=1,Oe=0,tt=0,mt=0}W!==null?(Fe=W.x,gt=W.y,Zt=W.z):(Fe=0,gt=0,Zt=0);let Dt=ve.convert(F.format),xn=ve.convert(F.type),Be;F.isData3DTexture?(Ye.setTexture3D(F,0),Be=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ye.setTexture2DArray(F,0),Be=O.TEXTURE_2D_ARRAY):(Ye.setTexture2D(F,0),Be=O.TEXTURE_2D),be.activeTexture(O.TEXTURE0),be.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),be.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),be.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let En=be.getParameter(O.UNPACK_ROW_LENGTH),Et=be.getParameter(O.UNPACK_IMAGE_HEIGHT),ws=be.getParameter(O.UNPACK_SKIP_PIXELS),vn=be.getParameter(O.UNPACK_SKIP_ROWS),Pa=be.getParameter(O.UNPACK_SKIP_IMAGES);be.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),be.pixelStorei(O.UNPACK_SKIP_ROWS,tt),be.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);let is=A.isDataArrayTexture||A.isData3DTexture,Es=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let yt=ke.get(A),un=ke.get(F),ii=ke.get(yt.__renderTarget),kt=ke.get(un.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,ii.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let rn=0;rn<Pe;rn++)is&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(A).__webglTexture,q,mt+rn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(F).__webglTexture,we,Zt+rn)),O.blitFramebuffer(Oe,tt,Oe+Ne,tt+Se,Fe,gt,Fe+Ne,gt+Se,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||ke.has(A)){let yt=ke.get(A),un=ke.get(F);be.bindFramebuffer(O.READ_FRAMEBUFFER,L),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let ii=0;ii<Pe;ii++)is?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,q,mt+ii):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,q),Es?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,we,Zt+ii):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,we),q!==0?O.blitFramebuffer(Oe,tt,Oe+Ne,tt+Se,Fe,gt,Fe+Ne,gt+Se,O.COLOR_BUFFER_BIT,O.NEAREST):Es?O.copyTexSubImage3D(Be,we,Fe,gt,Zt+ii,Oe,tt,Ne,Se):O.copyTexSubImage2D(Be,we,Fe,gt,Oe,tt,Ne,Se);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Es?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Be,we,Fe,gt,Zt,Ne,Se,Pe,Dt,xn,Ft.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,we,Fe,gt,Zt,Ne,Se,Pe,Dt,Ft.data):O.texSubImage3D(Be,we,Fe,gt,Zt,Ne,Se,Pe,Dt,xn,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Fe,gt,Ne,Se,Dt,xn,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Fe,gt,Ft.width,Ft.height,Dt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,we,Fe,gt,Ne,Se,Dt,xn,Ft);be.pixelStorei(O.UNPACK_ROW_LENGTH,En),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),be.pixelStorei(O.UNPACK_SKIP_PIXELS,ws),be.pixelStorei(O.UNPACK_SKIP_ROWS,vn),be.pixelStorei(O.UNPACK_SKIP_IMAGES,Pa),we===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&Ye.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ye.setTextureCube(A,0):A.isData3DTexture?Ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ye.setTexture2DArray(A,0):Ye.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){V=0,G=0,oe=null,be.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wM=new Bs(-1,1,1,-1,0,1),rf=class extends _t{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},EM=new rf,Gr=class{constructor(e){this._mesh=new nt(EM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gs=class extends fi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vs.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var na=class extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Bl=class extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gs(Vr),this.copyPass.material.blending=Wi,this.timer=new Wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(o instanceof na?n=!0:o instanceof Bl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ia=class extends fi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var H0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ws=class i extends fi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Wt(r,o,{type:mn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Wt(r,o,{type:mn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=H0;this.highPassUniforms=Vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vs.clone(Vr.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader,premultipliedAlpha:!0,blending:Jn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new us,this._fsQuad=new Gr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Ws.BlurDirectionX=new he(1,0);Ws.BlurDirectionY=new he(0,1);function V0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new _t;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=k0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let m=k0(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function k0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new He(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function vs(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1440662683);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function TM(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),o=i-n,a=e-s,c=t-r,l=o*o*(3-2*o),h=a*a*(3-2*a),d=c*c*(3-2*c),u=vs(n,s,r),f=vs(n+1,s,r),m=vs(n,s+1,r),_=vs(n+1,s+1,r),p=vs(n,s,r+1),g=vs(n+1,s,r+1),y=vs(n,s+1,r+1),w=vs(n+1,s+1,r+1),b=u+(f-u)*l,v=m+(_-m)*l,M=p+(g-p)*l,x=y+(w-y)*l,S=b+(v-b)*h,C=M+(x-M)*h;return(S+(C-S)*d)*2-1}function of(i,e,t,n=3){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*TM(i*o,e*o,t*o),o*=2.03,r*=.5;return s}var AM={colt75:{name:"Colt Single Action Army 7\xBD\u2033 Cavalry",mats:{frame:"case",barrel:"blued",straps:"blued",grip:"walnut",screws:"fireblue",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:1,hamMax:.82},colt475:{name:"Colt Single Action Army 4\xBE\u2033 Civilian, nickel",mats:{frame:"nickel",barrel:"nickel",straps:"nickel",grip:"ivory",screws:"nickel",cylinder:"nickel",hammer:"nickel",trigger:"nickel"},wear:.45,turn:1,hamMax:.82},schofield:{name:"Smith & Wesson Model 3 Schofield 7\u2033",mats:{frame:"blued",barrel:"blued",grip:"walnut",screws:"blued",ring:"steel",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:-1,hamMax:.78}};function af(i,e,t,n){let s=new ls,r=new Bt({side:Qt,depthWrite:!1,uniforms:{cT:{value:new ge(i)},cM:{value:new ge(e)},cB:{value:new ge(t)}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 cT, cM, cB; varying vec3 vD; void main(){ float y = normalize(vD).y; vec3 c = y > 0.0 ? mix(cM, cT, pow(y, 0.55)) : mix(cM, cB, pow(-y, 0.35)); gl_FragColor = vec4(c, 1.0); }"});s.add(new nt(new Gi(10,64,32),r));for(let o of n){let a=o.box?new Kn(o.box[0],o.box[1]):new Gi(o.r,32,16),c=new nt(a,new us({color:new ge(o.c[0],o.c[1],o.c[2]),side:qt}));c.position.set(o.p[0],o.p[1],o.p[2]),o.box&&c.lookAt(0,0,0),o.s&&c.scale.set(o.s[0],o.s[1],o.s[2]),s.add(c)}return s}function X0(i,e=["studio","day","night"]){let t=new Hr(i),n={studio:()=>t.fromScene(af("#29292d","#1a1a1d","#0f0f11",[{box:[7,3.5],p:[0,7.5,1.5],c:[4.6,4.6,4.7]},{box:[1.2,7],p:[-7,1,3],c:[5.5,5.4,5.2]},{box:[.8,7],p:[7,.5,-2],c:[3.2,3.4,3.8]},{box:[9,5],p:[-1,1,8.5],c:[1.25,1.25,1.25]},{box:[3,7],p:[6,1,5],c:[1.9,1.9,1.9]},{box:[8,1.5],p:[0,-6,4],c:[.4,.38,.35]}]),.02).texture,day:()=>t.fromScene(af("#3d6aae","#ead9ba","#8c6a46",[{p:[4.2,6.4,3.4],r:.42,c:[70,58,42]},{p:[0,-7,2],r:3.5,c:[.9,.72,.5],s:[1.6,.3,1.6]}]),.02).texture,night:()=>t.fromScene(af("#05070d","#0c0a09","#050403",[{p:[-3.4,-1,3.2],r:.5,c:[30,13.5,4]},{p:[1.8,-2.6,-6],r:1.5,c:[1.5,.5,.13]},{p:[2.5,6.5,-4],r:.22,c:[3.2,3.4,3.8]}]),.015).texture},s={};for(let r of e)s[r]=n[r]();return t.dispose(),s}var RM=`
float h3(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vn(p); p = p*2.03 + 1.7; a *= 0.5; } return s; }
`,CM=`
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
`,PM=`
{ float occ = mix(1.0, vAtt.x, 0.92);
  reflectedLight.indirectDiffuse *= occ;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= occ;
  #endif
  float dNV = saturate(dot(geometryNormal, geometryViewDir));
  reflectedLight.indirectSpecular *= computeSpecularOcclusion(dNV, occ, material.roughness);
  float dOcc = mix(1.0, vAtt.x, 0.6);
  reflectedLight.directSpecular *= dOcc; reflectedLight.directDiffuse *= dOcc; }
`,IM={blued:0,case:1,nickel:2,walnut:3,ivory:4,fireblue:5,lead:6,steel:7,brass:8},cf=new Map;function LM(i,e){let t=i+e;if(cf.has(t))return cf.get(t);let n=i==="walnut"||i==="ivory",s=new bi({color:16777215,metalness:n?0:1,roughness:.3,clearcoat:{blued:.8,case:.6,walnut:.35,ivory:.5}[i]||0,clearcoatRoughness:i==="walnut"?.35:.12});return s.defines={KIND:IM[i]},s.onBeforeCompile=r=>{r.uniforms.uWear={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP; uniform float uWear;
${RM}`).replace("#include <color_fragment>",`#include <color_fragment>
${CM}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = rough;`).replace("#include <aomap_fragment>",PM)},s.customProgramCacheKey=()=>"rv"+i,cf.set(t,s),s}function DM(i){let e=atob(i.data),t=new Uint8Array(e.length);for(let f=0;f<e.length;f++)t[f]=e.charCodeAt(f);let n=t.buffer,s=i.vc,r=i.ic,o=0,a;i.i32&&(a=new Uint32Array(n,o,r),o+=r*4);let c=new Int16Array(n,o,s*3);o+=s*6,i.i32||(a=new Uint16Array(n,o,r),o+=r*2);let l=new Int8Array(n,o,s*3);o+=s*3;let h=new Uint8Array(n,o,s*2),d=new Float32Array(s*3);for(let f=0;f<s*3;f++)d[f]=c[f]*i.ps;let u=new _t;return u.setAttribute("position",new He(d,3)),u.setAttribute("normal",new He(new Int8Array(l),3,!0)),u.setAttribute("aAtt",new He(new Uint8Array(h),2,!0)),u.setIndex(new He(i.i32?new Uint32Array(a):new Uint16Array(a),1)),u.computeBoundingSphere(),u}function NM(i,e){let t=i.index.array,n=i.attributes.position.array,s=[],r=[];for(let o=0;o<t.length;o+=3)(n[3*t[o]+1]<e&&n[3*t[o+1]+1]<e&&n[3*t[o+2]+1]<e?r:s).push(t[o],t[o+1],t[o+2]);return[s,r].map(o=>{let a=new _t;for(let c of["position","normal","aAtt"])a.setAttribute(c,i.attributes[c]);return a.setIndex(o),a.computeBoundingSphere(),a})}function UM(i){let e=i.attributes.position.count,t=new Uint8Array(e*2);for(let n=0;n<e;n++)t[2*n]=255,t[2*n+1]=128;return i.setAttribute("aAtt",new He(t,2,!0)),i}var lf=new Map;function FM(i){if(lf.has(i))return lf.get(i);let e=n=>{let s=new fs(n.map(([r,o])=>new he(r,o*i)),24);return s.rotateX(-Math.PI/2),UM(s)},t={case:e([[1e-4,2e-4],[.0024,2e-4],[.0025,0],[.0064,0],[.0065,4e-4],[.0064,.0013],[.0058,.0016],[.0058,.031],[.0054,.031],[.0053,.0285],[.0053,.004],[1e-4,.004]]),bullet:e([[1e-4,.026],[.0057,.026],[.0057,.0315],[.0055,.0332],[.0049,.0348],[.0039,.0361],[.0025,.037],[.001,.0373],[0,.0374]]),caseLen:.031*i,tipLen:.0374*i};return lf.set(i,t),t}function BM(i,e,t){let n=new Lt,s=_=>LM(_,t.wear),r=(_,p,g=n)=>{let y=new nt(_,s(p));return g.add(y),y},o=new Lt,a=new Lt,c=new Lt,l=null,h=null;o.position.set(0,i.cylY,0),a.position.set(0,i.hammerPivot[1],i.hammerPivot[0]),c.position.set(0,i.triggerPivot[1],i.triggerPivot[0]),n.add(o,a,c);for(let _ of i.parts){let p=e[_];if(_==="cylinder")p.translate(0,-i.cylY,0),r(p,t.mats.cylinder,o);else if(_==="hammer")r(p,t.mats.hammer,a);else if(_==="trigger")r(p,t.mats.trigger,c);else if(_==="gate")l=new Lt,l.position.set(i.gatePivot[0],i.gatePivot[1],0),n.add(l),p.translate(-i.gatePivot[0],-i.gatePivot[1],0),r(p,t.mats.frame,l);else if(_==="ejector")h=new Lt,n.add(h),r(p,t.mats.barrel,h);else if(_==="screws"&&t.mats.ring){let[g,y]=NM(p,-.11);r(g,t.mats.screws),r(y,t.mats.ring)}else r(p,t.mats[_])}let d=FM(Math.min(1,(-i.chamberZ-.0031)/.0374)),u=[],f=[];for(let _=0;_<6;_++){let p=Math.PI/2+t.turn*_*Math.PI/3,g=new Lt;g.userData.home=new T(Math.cos(p)*i.chamberR,Math.sin(p)*i.chamberR,-1e-4),g.userData.out=new T(Math.cos(p),Math.sin(p),0),g.position.copy(g.userData.home),o.add(g),g.userData.case=r(d.case,"brass",g),f.push(r(d.bullet,"lead",g)),u.push(g)}let m={conf:t,meta:i,group:n,cylinder:o,hammer:a,trigger:c,gate:l,rod:h,carts:u,bullets:f,cart:d,drops:[],muzzle:new T(0,0,i.zMuz),grip:new T(0,-.08,.045),state:{top:0,chambers:[],cocked:!1,anim:null}};return hf(m,{},{instant:!0}),m}async function Y0(i){let e=typeof i=="string"?await(await fetch(i)).json():i,t={};for(let n of e.meta.parts)t[n]=DM(e.parts[n]);return BM(e.meta,t,AM[e.id])}var OM=.11,Zi=i=>i*i*(3-2*i),qs=(i,e,t)=>Zi(Math.min(1,Math.max(0,(t-i)/(e-i))));function Z0(i,e,t,n){i.hammer.rotation.x=i.conf.hamMax*e,i.trigger.rotation.x=-OM*t,i.cylinder.rotation.z=-i.conf.turn*n*Math.PI/3}function zM(i){i.carts.forEach((e,t)=>{let n=i.state.chambers[t];e.visible=n!=="empty",i.bullets[t].visible=n==="live",e.position.copy(e.userData.home),e.quaternion.identity()})}function hf(i,e={},t={}){let n=i.state;if(n.anim)return!1;if(!i.gate||t.instant){n.chambers=["empty","live","live","live","live","live"],n.top=0,n.cocked=!1;for(let u of i.drops)u.obj.removeFromParent();return i.drops.length=0,zM(i),Z0(i,0,1,0),i.gate&&(i.gate.rotation.z=0),!0}let s=n.top,r=n.chambers.slice(),o=[0,1,2,3,4,5].map(u=>(s+5+u)%6),a=o.find(u=>r[u]==="empty")??o.find(u=>r[u]==="spent");if(a===void 0)return!1;let c=u=>r[u]==="spent"||u!==a&&r[u]==="empty";if(!o.some(c))return!1;let l=0;o.forEach((u,f)=>{c(u)&&(l=f)});let h=l;for(;(s+h+1)%6!==a;)h++;let d=[{k:"half"},{k:"open"}];for(let u=0;u<=h;u++){u>0&&d.push({k:"turn"});let f=(s+5+u)%6;u>5||(r[f]==="spent"&&(d.push({k:"eject",c:f}),r[f]="empty"),f!==a&&r[f]==="empty"&&(d.push({k:"insert",c:f}),r[f]="live"))}return d.push({k:"close"},{k:"cock"},{k:"lower"}),n.anim={type:"reload",steps:d,i:-1,t:0,ham0:n.cocked?1:0},n.cocked=!1,!0}var G0={half:.3,open:.3,turn:.22,eject:.6,insert:.5,close:.28,cock:.34,lower:.5},W0=new at,q0=new vt,uf=new T,zl=new T;function HM(i,e,t){let n=i.carts[e],s=n.clone();n.updateMatrix(),W0.multiplyMatrices(i.cylinder.matrix,n.matrix),W0.decompose(s.position,s.quaternion,s.scale),i.group.add(s);let r=uf.copy(n.userData.out).applyQuaternion(i.cylinder.quaternion);i.drops.push({obj:s,t:0,v:new T(r.x*.35,r.y*.35+.15,.45),w:new T(8+Math.random()*6,3-Math.random()*6,0)}),n.visible=!1,n.position.copy(n.userData.home),t.slide?.()}function kM(i,e,t){if(!i.drops.length)return;i.group.updateWorldMatrix(!0,!1),i.group.matrixWorld.decompose(uf,q0,zl);let n=new T(0,-9.8/zl.y,0).applyQuaternion(q0.invert());for(let s=i.drops.length-1;s>=0;s--){let r=i.drops[s];r.t+=e,r.v.addScaledVector(n,e),r.obj.position.addScaledVector(r.v,e),r.obj.rotation.x+=r.w.x*e,r.obj.rotation.y+=r.w.y*e,!r.rang&&r.t>.5&&(r.rang=1,t.drop?.()),r.t>1.4&&(r.obj.removeFromParent(),i.drops.splice(s,1))}}function VM(i,e,t,n){let s=i.state,r=e.steps[e.i];if(e.i<0||e.t>=G0[r.k]){if(r?.k==="eject"&&(i.rod.position.z=0),e.i++,e.t=0,r=e.steps[e.i],!r)return s.anim=null,[0,1,s.top,0];if((r.k==="turn"||r.k==="cock")&&(e.from=s.top,s.top=(s.top+1)%6),r.k==="insert"){s.chambers[r.c]="live";let u=i.carts[r.c];u.visible=!0,i.bullets[r.c].visible=!0,n.insert?.()}(r.k==="open"||r.k==="close"||r.k==="half")&&n.click?.(.3,r.k==="half"?2600:1700)}e.t+=t;let o=Math.min(1,e.t/G0[r.k]),a=Zi(o),c=.3,l=.5,h=1,d=s.top;switch(r.k){case"half":c=e.ham0+(.3-e.ham0)*a,l=(e.ham0?0:1)+((e.ham0?0:1)-.5)*-a,h=0;break;case"open":h=a;break;case"turn":d=e.from+qs(0,.8,o),!e.c&&o>.8&&(e.c=1,n.click?.(.18,4200));break;case"eject":{let u=o<.55?Zi(o/.55):1-Zi((o-.55)/.45);i.rod.position.z=u*i.meta.rodTravel;let f=i.carts[r.c],m=f.userData.home.z-(s.chambers[r.c]==="live"?i.cart.tipLen:i.cart.caseLen);f.visible&&(f.position.z=f.userData.home.z+Math.max(0,i.meta.rodTip+u*i.meta.rodTravel-m)),f.visible&&o>=.55&&(s.chambers[r.c]="empty",HM(i,r.c,n));break}case"insert":{let u=i.carts[r.c],f=u.userData.home,m=i.cart.tipLen,_=.35*(1-qs(.4,1,o)),p=new T(f.x,f.y,0);o<.4?p.addScaledVector(u.userData.out,.022*(1-Zi(o/.4))).z+=.004*(1-Zi(o/.4)):p.z=-m*Zi((o-.4)/.6)+0,zl.set(-u.userData.out.y,u.userData.out.x,0),u.quaternion.setFromAxisAngle(zl,_),u.position.copy(p).add(uf.set(0,0,m).applyQuaternion(u.quaternion)),o>=1&&(u.position.copy(f),u.quaternion.identity());break}case"close":h=1-a;break;case"cock":h=0,c=.3+.7*a,d=e.from+qs(.2,.85,o),l=.5*(1-qs(.7,1,o)),!e.c2&&o>=1&&(e.c2=1,n.click?.(.6,2900));break;case"lower":h=0,c=1-Zi(Math.max(0,(o-.15)/.85)),l=o<.15?1.45*(o/.15):1.45-.45*qs(.85,1,o);break}return i.gate&&(i.gate.rotation.z=-1.65*h),[c,l,d]}function ff(i,e={}){let t=i.state;return t.anim||t.cocked?!1:(t.anim={type:"cock",t:0,from:t.top},t.top=(t.top+1)%6,e.click?.(.25,2400),!0)}function K0(i,e={}){let t=i.state;return t.anim?!1:t.cocked?(t.anim={type:"fire",t:0},!0):ff(i,e)}function J0(i,e,t={}){let n=i.state,s=n.anim,r=n.cocked?1:0,o=n.cocked?0:1,a=n.top;if(kM(i,e,t),s&&s.type==="reload")[r,o,a]=VM(i,s,e,t);else if(s)if(s.t+=e,s.type==="cock"){let c=Math.min(1,s.t/.34);r=Zi(c),a=s.from+qs(.25,.85,c),o=1-qs(.75,1,c),!s.c1&&c>.5&&(s.c1=1,t.click?.(.35,3300)),c>=1&&(t.click?.(.6,2900),n.cocked=!0,n.anim=null)}else{let c=s.t;o=Math.min(1.45,c/.05*1.45),r=c<.05?1:Math.max(0,1-(c-.05)/.03),!s.shot&&c>=.08&&(s.shot=1,n.cocked=!1,n.chambers[n.top]==="live"?(n.chambers[n.top]="spent",i.bullets[n.top].visible=!1,t.shot?.()):t.dry?.()),c>.08&&(o=1+.45*Math.max(0,1-(c-.08)/.2)),c>.32&&(n.anim=null)}Z0(i,r,o,a)}var df="powderRef";var pf="rock";function mf(i,e=t=>t.destination){let t=null,n=null,s=null,r={},o=()=>{let v=i();return v?(v!==t&&(t=v,s=a(v),r={},n=v.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(e(v))),v.state==="suspended"&&v.resume&&v.resume(),v):null},a=v=>{let M=v.createBuffer(1,v.sampleRate*3,v.sampleRate),x=M.getChannelData(0);for(let S=0;S<x.length;S++)x[S]=Math.random()*2-1;return M},c=(v,M,x,S,C,R)=>{let P=v.createBufferSource();P.buffer=s;let D=v.createBiquadFilter();D.type="highpass",D.frequency.value=90;let z=v.createBiquadFilter();z.type="lowpass",z.frequency.setValueAtTime(C,M),z.frequency.exponentialRampToValueAtTime(1800,M+S*.6),z.frequency.exponentialRampToValueAtTime(R?650:1e3,M+S+(R||.9));let L=v.createBiquadFilter();L.type="bandpass",L.frequency.value=850,L.Q.value=.6;let H=v.createGain();H.gain.value=1.7;let V=v.createGain();V.gain.setValueAtTime(0,M),V.gain.linearRampToValueAtTime(x,M+.006),V.gain.linearRampToValueAtTime(x*.85,M+S),V.gain.exponentialRampToValueAtTime(x*.3,M+S+.08),R?V.gain.exponentialRampToValueAtTime(x*.003,M+S+R):(V.gain.exponentialRampToValueAtTime(x*.12,M+S+.45),V.gain.exponentialRampToValueAtTime(x*.01,M+S+.9)),D.connect(L).connect(H).connect(V);let G=v.createGain();G.gain.value=1;let oe=v.createBufferSource();oe.buffer=s;let Y=v.createBiquadFilter();Y.type="lowpass",Y.frequency.value=30;let re=v.createGain();re.gain.setValueAtTime(2.2,M),R&&re.gain.linearRampToValueAtTime(.3,M+S+R*.6),oe.connect(Y).connect(re).connect(G.gain),P.connect(D).connect(z).connect(V).connect(G).connect(n),P.start(M,Math.random()*.5),P.stop(M+S+1),oe.start(M,Math.random()),oe.stop(M+S+1)},l=(v,M,x,S,C,R,P,D)=>{let z=v.createBufferSource();z.buffer=s;let L=v.createBiquadFilter();L.type=S,L.frequency.value=x,L.Q.value=C;let H=v.createGain();H.gain.setValueAtTime(R,M),H.gain.exponentialRampToValueAtTime(5e-4,M+P),z.connect(L).connect(H).connect(D||n),z.start(M,Math.random()),z.stop(M+P+.02)},h=(v,M,x,S,C,R,P)=>{let D=v.createOscillator(),z=v.createGain();D.frequency.setValueAtTime(x,M),D.frequency.exponentialRampToValueAtTime(S,M+R*.8),z.gain.setValueAtTime(C,M),z.gain.exponentialRampToValueAtTime(.001,M+R),D.connect(z).connect(P||n),D.start(M),D.stop(M+R+.02)},d=(v,M,x,S,C)=>{let R=v.createOscillator(),P=v.createGain();R.frequency.value=x,P.gain.setValueAtTime(S,M),P.gain.exponentialRampToValueAtTime(5e-4,M+C),R.connect(P).connect(n),R.start(M),R.stop(M+C+.02)},u=(v,M)=>{let x=v.createWaveShaper(),S=1024,C=new Float32Array(S);for(let R=0;R<S;R++){let P=R*2/S-1;C[R]=Math.tanh(M*P)/Math.tanh(M)}return x.curve=C,x},f=(v,M)=>{if(r[M])return r[M];let x=M==="canyon",S=M==="dry",C=x?3.4:S?.9:1.6,R=Math.floor(v.sampleRate*C),P=v.createBuffer(2,R,v.sampleRate),D=x?[[.33,.55],[.81,.38],[1.27,.26],[1.93,.16],[2.6,.09]]:S?[]:[[.31,.3],[.72,.14]];for(let z=0;z<2;z++){let L=P.getChannelData(z);for(let H=0;H<R;H++){let V=H/v.sampleRate;L[H]=(Math.random()*2-1)*.05*Math.exp(-V/(x?.9:S?.22:.4))*Math.min(1,V/.05)}for(let[H,V]of D){let G=Math.floor((H+z*.013+Math.random()*.01)*v.sampleRate),oe=Math.floor(.07*v.sampleRate);for(let Y=0;Y<oe&&G+Y<R;Y++)L[G+Y]+=(Math.random()*2-1)*V*Math.exp(-Y/(oe*.3))}}return r[M]=P},m=(v,M,x,S)=>{let C=v.createConvolver();C.buffer=f(v,M);let R=v.createBiquadFilter();R.type="lowpass",R.frequency.value=x;let P=v.createGain();return P.gain.value=S,C.connect(R).connect(P).connect(n),C},_=(v,M,x,S="short")=>{let C=v.createGain();C.connect(n),C.connect(m(v,S,1600,.5)),l(v,M,2600,"bandpass",.8,.9*x,.1+.05*(x-1),C),l(v,M,5200,"highpass",.7,.55*x,.05,C),l(v,M,2800,"lowpass",.7,.35*x,.3,C)},p=(v,M,x)=>{let S=v.createGain();S.connect(n),S.connect(m(v,"dry",2200,.4)),l(v,M,1250,"bandpass",7,2.2*x,.22,S),l(v,M,2050,"bandpass",6,1.3*x,.15,S),l(v,M,3300,"bandpass",5,.7*x,.09,S)},g=(v,M,x)=>{for(let[S,C,R]of[[5200,.12,1],[8900,.07,.6],[12400,.05,.4]])d(v,M,S*(.98+Math.random()*.04),x*R,C);l(v,M,6e3,"highpass",.7,x*.8,.008)},y=(v,M,x)=>{l(v,M,650,"lowpass",.7,x,.035),l(v,M,2e3,"bandpass",2,x*.35,.01)},w={dirt(v,M){y(v,M,.22),y(v,M+.085,.09),l(v,M+.1,3e3,"bandpass",1,.025,.12)},rock(v,M){g(v,M,.06),g(v,M+.11,.03),g(v,M+.19,.012)},both(v,M){y(v,M,.18),g(v,M,.022),y(v,M+.09,.07),g(v,M+.09,.008)}},b={now(v,M){let x=v.createDelay(1);x.delayTime.value=.31;let S=v.createGain();S.gain.value=.32;let C=v.createBiquadFilter();C.type="lowpass",C.frequency.value=900;let R=v.createGain();R.gain.value=.5,x.connect(C).connect(S).connect(x),C.connect(R).connect(n);let P=v.createGain();P.connect(n),P.connect(x),l(v,M,2800,"lowpass",.7,1,.45,P),l(v,M,6e3,"highpass",.7,.5,.06,P),h(v,M,95,38,.9,.3,P)},powder(v,M,x="short"){let S=v.createGain(),C=u(v,2.5);S.connect(C).connect(n),C.connect(m(v,x,900,.9)),l(v,M,9e3,"highpass",.7,.7,.012,S),l(v,M,1800,"lowpass",.7,1,.25,S),l(v,M,350,"lowpass",.8,1,.7,S),h(v,M,80,30,1,.5,S)},canyon(v,M){let x=v.createGain();x.connect(n),x.connect(m(v,"canyon",1400,1.5)),l(v,M,6e3,"highpass",.7,.9,.02,x),l(v,M,3e3,"lowpass",.7,.9,.18,x),h(v,M,110,45,.7,.25,x)},powderCrack(v,M){b.powder(v,M,"dry"),_(v,M,1,"dry"),p(v,M,1)},powderTang(v,M){b.powder(v,M,"dry"),_(v,M,1,"dry"),p(v,M,1.8)},powderCrack2(v,M){b.powder(v,M),_(v,M,1.5)},ref(v,M){l(v,M,6e3,"bandpass",.9,2.6,.045),l(v,M,2500,"bandpass",.7,1,.08),l(v,M,600,"lowpass",.7,.7,.07),c(v,M,.45,.6,5e3),h(v,M,90,40,.22,.3)},powderRef(v,M){let x=v.createGain(),S=u(v,2.5);x.connect(S).connect(n),S.connect(m(v,"dry",900,.7)),l(v,M,1800,"lowpass",.7,.8,.25,x),l(v,M,350,"lowpass",.8,.4,.45,x),h(v,M,80,32,.35,.4,x),_(v,M,1.2,"dry"),p(v,M,1),c(v,M,.32,.45,5e3,.8)},ring(v,M){let x=v.createGain(),S=v.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(12e3,M),S.frequency.exponentialRampToValueAtTime(650,M+.12),x.connect(S).connect(n),S.connect(m(v,"short",600,.7)),l(v,M,9e3,"highpass",.7,.8,.012,x),l(v,M,2e3,"lowpass",.7,1,.3,x),h(v,M,85,32,1,.45,x);for(let[C,R]of[[5100,.05],[5163,.035]]){let P=v.createOscillator(),D=v.createGain();P.frequency.value=C,D.gain.setValueAtTime(0,M+.08),D.gain.linearRampToValueAtTime(R,M+.3),D.gain.exponentialRampToValueAtTime(5e-4,M+3.6),P.connect(D).connect(n),P.start(M+.08),P.stop(M+3.7)}}};return{click(v,M){let x=o();if(!x)return;let S=x.currentTime;l(x,S,M,"bandpass",6,v,.025),l(x,S+.004,M*.55,"bandpass",3,v*.5,.05)},bang(v=df){let M=o();M&&b[v](M,M.currentTime)},slide(){let v=o();v&&l(v,v.currentTime,2500,"bandpass",2,.12,.12)},drop(v=pf){let M=o();M&&w[v](M,M.currentTime)},insert(){let v=o();v&&l(v,v.currentTime,1200,"bandpass",3,.25,.05)},async render(v,M=2.5){let x=[t,n,s,r],S=new OfflineAudioContext(1,Math.floor(48e3*M),48e3);t=S,s=a(S),r={},n=S.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(S.destination),b[v](S,.05);let C=await S.startRendering();return[t,n,s,r]=x,Array.from(C.getChannelData(0))}}}var Ut=120,sa={uPC:{value:new he}},ra=[],Hl=(i,e)=>i+Math.round((e-i)/Ut)*Ut,tm=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function $0(i,e){let t=(l,h)=>{let d=Math.imul(l,374761393)+Math.imul(h,668265263)|0;return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967295},n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return(t(n,s)*(1-a)+t(n+1,s)*a)*(1-c)+(t(n,s+1)*(1-a)+t(n+1,s+1)*a)*c}function kn(i){let e=i>>>0||1;return()=>(e=Math.imul(e^e>>>15,2246822507)+2654435769>>>0,e^=e>>>13,(e>>>0)/4294967296)}var nm=`
float pHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float pNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(pHash(i), pHash(i+vec3(1,0,0)), f.x), mix(pHash(i+vec3(0,1,0)), pHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(pHash(i+vec3(0,0,1)), pHash(i+vec3(1,0,1)), f.x), mix(pHash(i+vec3(0,1,1)), pHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,Vl=`#ifdef USE_FOG
  float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
  #endif`;async function gf(i){let e=await(await fetch(i)).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);let s=n.buffer,r=0,o=(l,h)=>{let d=new l(s,r,h);return r+=h*l.BYTES_PER_ELEMENT+3&-4,d},c={lods:e.lods.map(l=>{let h=o(Int16Array,l.vc*3),d=o(Int8Array,l.vc*3),u=o(Uint8Array,l.vc*4),f=o(Uint8Array,l.vc*4),m=o(Uint16Array,l.vc),_=l.big?o(Uint32Array,l.ic):o(Uint16Array,l.ic),p=new Float32Array(l.vc*3),g=new Float32Array(l.vc);for(let w=0;w<l.vc*3;w++)p[w]=h[w]*e.ps;for(let w=0;w<l.vc;w++)g[w]=m[w]/1e3;let y=new _t;return y.setAttribute("position",new He(p,3)),y.setAttribute("normal",new He(new Int8Array(d),3,!0)),y.setAttribute("aA",new He(new Uint8Array(u),4,!0)),y.setAttribute("aB",new He(new Uint8Array(f),4,!0)),y.setAttribute("aS",new He(g,1)),y.setIndex(new He(l.big?new Uint32Array(_):new Uint16Array(_),1)),y.computeBoundingSphere(),y}),meta:e};if(e.areoles){let l=e.areoles,h=o(Int16Array,l*3),d=o(Int8Array,l*4),u=o(Int8Array,l*4);c.areoles={n:l,ap:h,an:d,at:u,aps:e.aps}}return c}var GM={uSpineHaze:{value:1}};function WM(){let i=new pn({color:16777215,roughness:.6,metalness:0});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,GM),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB; attribute float aS;
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vS = aS; vObj = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj; uniform float uSpineHaze;
${nm}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",Vl)},i.customProgramCacheKey=()=>"saguaro-skin-v1",i}var im={uPx:{value:.002}};function qM(){let i=new pn({color:16777215,roughness:.55,metalness:0,side:qt});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,im),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aT; attribute vec3 iBase; attribute vec3 iDir; attribute float iW; attribute vec3 iN; attribute vec3 iCol;
uniform float uPx; varying vec3 vSp;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = iN;").replace("#include <begin_vertex>","vec3 transformed = iBase + iDir * aT.x; vSp = iCol * mix(1.0, 0.42, aT.x * aT.x);").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        { vec3 dv = normalize((modelViewMatrix * vec4(iDir, 0.0)).xyz);
          vec3 sv = cross(dv, normalize(mvPosition.xyz)); float sl = length(sv); sv = sl > 1e-4 ? sv / sl : vec3(1.0, 0.0, 0.0);
          float w = max(iW * (1.0 - 0.85 * aT.x), -mvPosition.z * uPx * 0.45); // never much thinner than a pixel
          mvPosition.xyz += sv * w * aT.y; }
        gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vSp;`).replace("#include <fog_fragment>",Vl)},i.customProgramCacheKey=()=>"spine-v1",i}function XM(i,e,t){let n=i.areoles,s=4,r=n.n*s,o=new Float32Array(r*3),a=new Float32Array(r*3),c=new Float32Array(r),l=new Float32Array(r*3),h=new Float32Array(r*3),d=kn(e),u=new T,f=new T,m=new T,_=new T,p=new T,g=new T,y=0,w=(v,M,x)=>{o.set([u.x+f.x*.002,u.y+f.y*.002,u.z+f.z*.002],y*3),a.set([g.x*v,g.y*v,g.z*v],y*3),c[y]=M,l.set([f.x,f.y,f.z],y*3),h.set(x,y*3),y++};for(let v=0;v<n.n;v++){u.set(n.ap[3*v],n.ap[3*v+1],n.ap[3*v+2]).multiplyScalar(n.aps),f.set(n.an[4*v],n.an[4*v+1],n.an[4*v+2]).normalize(),m.set(n.at[4*v],n.at[4*v+1],n.at[4*v+2]).normalize();let M=n.an[4*v+3]>60;_.copy(m).addScaledVector(f,-m.dot(f)).normalize(),p.crossVectors(f,_);let x=.75+.45*d(),S=Math.min(1,u.y/(t*.9)),C=M?[.3*x,.15*x,.075*x]:[(.36+.06*S)*x,(.335+.04*S)*x,(.29+.02*S)*x];g.copy(f).multiplyScalar(.92).addScaledVector(_,-.38).add({x:(d()-.5)*.25,y:(d()-.5)*.25,z:(d()-.5)*.25}).normalize(),w(M?.018+.012*d():.026+.02*d(),.0011,C);for(let R of[-2,2,Math.PI]){let P=R+(d()-.5)*.6;g.copy(f).multiplyScalar(.35).addScaledVector(_,Math.cos(P)*.94).addScaledVector(p,Math.sin(P)*.94).normalize(),w(.011+.011*d(),6e-4,[C[0]*.92,C[1]*.92,C[2]*.92])}}let b=new Go;return b.setAttribute("position",new He(new Float32Array(12),3)),b.setAttribute("aT",new He(new Float32Array([0,-1,0,1,1,-1,1,1]),2)),b.setIndex([0,2,1,1,2,3]),b.setAttribute("iBase",new Yn(o,3)),b.setAttribute("iDir",new Yn(a,3)),b.setAttribute("iW",new Yn(c,1)),b.setAttribute("iN",new Yn(l,3)),b.setAttribute("iCol",new Yn(h,3)),b.instanceCount=r,b.boundingSphere=new Un(new T(0,t/2,0),t/2+1.6),b}var Gl={uTime:{value:0},uGust:{value:0},uWind:{value:new he(.94,.33)}};function Xs(i,e=.85,t=null,n=!!t){let s=new pn({color:16777215,vertexColors:!0,roughness:e,metalness:0,map:t,alphaTest:t?.4:0,side:n?qt:wi});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,Gl),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSway; uniform float uTime, uGust; uniform vec2 uWind;`).replace("#include <project_vertex>",`vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        { float ph = aSway.y + dot(instanceMatrix[3].xz, vec2(0.13, 0.17));
          float wob = sin(uTime * 1.6 + ph) * 0.65 + sin(uTime * 2.9 + ph * 1.7) * 0.35;
          float sc = length(instanceMatrix[1].xyz);
          mvPosition.xz += uWind * (aSway.x * sc) * (0.05 + 0.32 * uGust + wob * (0.035 + 0.1 * uGust)); }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`),r.fragmentShader=r.fragmentShader.replace("#include <fog_fragment>",Vl),n&&(r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`))},s.customProgramCacheKey=()=>i,s}function Q0(i){return new Fs({depthPacking:Rl,map:i,alphaTest:.4})}function j0(i,e=5){let n=kn(e),s=()=>{let w=document.createElement("canvas");return w.width=w.height=256,[w,w.getContext("2d")]},[r,o]=s(),[a,c]=s(),l=i==="creosote"?"#363c22":"#4a4d40";o.fillStyle=l,o.fillRect(0,0,256,256),c.fillStyle="#000",c.fillRect(0,0,256,256),c.fillStyle="#fff",c.fillRect(0,0,6,6);let h=w=>{w(o,!1),w(c,!0)},d=(w,b,v,M,x)=>{let S=[[w,b]],C=w,R=b,P=v;for(let D=0;D<M;D+=12)P+=(n()-.5)*.7,C+=Math.cos(P)*12,R+=Math.sin(P)*12,S.push([C,R]);return h((D,z)=>{D.strokeStyle=z?"#fff":i==="creosote"?"#2a2620":"#8c8270",D.lineWidth=x,D.beginPath(),D.moveTo(S[0][0],S[0][1]);for(let L of S)D.lineTo(L[0],L[1]);D.stroke()}),S},u=(w,b,v,M,x,S)=>h((C,R)=>{C.fillStyle=R?"#fff":S,C.beginPath(),C.ellipse(w,b,v,M,x,0,Math.PI*2),C.fill()}),f=(w,b,v,M,x)=>h((S,C)=>{S.fillStyle=C?"#fff":x,S.beginPath();for(let R=0;R<3;R++){let P=M+R*Math.PI*2/3;S.lineTo(w+Math.cos(P)*v*(R===0?1.3:.8),b+Math.sin(P)*v*(R===0?1.3:.8))}S.fill()}),m=(w,b,v)=>`rgb(${w|0},${b|0},${v|0})`;if(i==="creosote")for(let w=0;w<7;w++){let b=d(256*(.3+.4*n()),250.88,-Math.PI/2+(n()-.5)*1.3,150+n()*90,2.2);b.forEach(([v,M],x)=>{if(x<2)return;let S=x>b.length*.5?3:1;for(let C=0;C<S;C++){let R=n()*Math.PI*2,P=.8+.4*n(),D=.8+.4*n(),z=n()<.12?m(90*D,88*D,50*D):m(52*D,58*D,33*D);u(v+Math.cos(R)*6,M+Math.sin(R)*6,7*P,3.2*P,R,z),u(v+Math.cos(R+.7)*6,M+Math.sin(R+.7)*6,7*P,3.2*P,R+.7,z)}})}else{for(let w=0;w<9;w++)d(256*(.2+.6*n()),256*.98,-Math.PI/2+(n()-.5)*1.6,120+n()*100,1.6);for(let w=0;w<760;w++){let b=Math.sqrt(n())*.5,v=n()*Math.PI*2,M=256*(.5+Math.cos(v)*b),x=256*(.52+Math.sin(v)*b*.92),S=.8+.4*n(),C=n(),R=C<.55?m(66*S,74*S,56*S):C<.9?m(98*S,94*S,74*S):m(126*S,112*S,84*S);f(M,x,5+n()*3,n()*6.28,R)}}let _=o.getImageData(0,0,256,256).data,p=c.getImageData(0,0,256,256).data,g=new Uint8Array(256*256*4);for(let w=0;w<256*256;w++)g[4*w]=_[4*w],g[4*w+1]=_[4*w+1],g[4*w+2]=_[4*w+2],g[4*w+3]=p[4*w];let y=new Ns(g,256,256,Hn);return y.colorSpace=An,y.generateMipmaps=!0,y.minFilter=hi,y.magFilter=dn,y.flipY=!1,y.needsUpdate=!0,y}var Ai=class{constructor(){this.p=[],this.n=[],this.c=[],this.w=[],this.u=[],this.i=[]}get count(){return this.p.length/3}vert(e,t,n,s,r,o,a,c,l,h=.004,d=.004){return this.p.push(e,t,n),this.n.push(s,r,o),this.c.push(a[0],a[1],a[2]),this.w.push(c,l),this.u.push(h,d),this.count-1}card(e,t,n,s,r,o,a,c){let l=s/2,h=this.count;for(let[d,u]of[[0,0],[1,0],[1,1],[0,1]]){let f=(d-.5)*2*l,m=(u-.5)*2*l;this.vert(e.x+t.x*f+n.x*m,e.y+t.y*f+n.y*m,e.z+t.z*f+n.z*m,r.x,r.y,r.z,o,a,c,.03+.94*d,.03+.94*(1-u))}this.i.push(h,h+1,h+2,h,h+2,h+3)}tube(e,t,n,s,r,o){let a=e.length,c=new T,l=new T,h=new T,d=this.count;for(let u=0;u<a;u++){u<a-1?c.subVectors(e[u+1],e[u]).normalize():c.subVectors(e[u],e[u-1]).normalize(),u===0&&(l.set(.3,.1,1),Math.abs(c.dot(l.normalize()))>.9&&l.set(1,0,0)),l.addScaledVector(c,-l.dot(c)).normalize(),h.crossVectors(c,l);let f=u/(a-1),m=s(f),_=r(f),p=t[u];for(let g=0;g<n;g++){let y=g/n*Math.PI*2,w=Math.cos(y),b=Math.sin(y),v=l.x*w+h.x*b,M=l.y*w+h.y*b,x=l.z*w+h.z*b;this.vert(e[u].x+v*p,e[u].y+M*p,e[u].z+x*p,v,M,x,m,_,o)}}for(let u=0;u<a-1;u++)for(let f=0;f<n;f++){let m=d+u*n+f,_=d+u*n+(f+1)%n,p=m+n,g=_+n;this.i.push(m,_,p,_,g,p)}}spike(e,t,n,s,r,o,a,c,l){let h=new T(0,1,0);Math.abs(h.dot(t))>.9&&h.set(1,0,0),h.addScaledVector(t,-h.dot(t)).normalize();let d=new T().crossVectors(t,h),u=this.count;for(let m=0;m<3;m++){let _=m/3*Math.PI*2,p=Math.cos(_),g=Math.sin(_);this.vert(e.x+(h.x*p+d.x*g)*s,e.y+(h.y*p+d.y*g)*s,e.z+(h.z*p+d.z*g)*s,r.x,r.y,r.z,o,c,l)}let f=this.vert(e.x+t.x*n,e.y+t.y*n,e.z+t.z*n,r.x,r.y,r.z,a,c,l);this.i.push(u,u+1,f,u+1,u+2,f,u+2,u,f)}leaf(e,t,n,s,r,o,a,c,l){let h=e.clone().addScaledVector(t,s),d=e.clone().addScaledVector(t,s*.45).addScaledVector(n,r*.5),u=e.clone().addScaledVector(t,s*.45).addScaledVector(n,-r*.5),f=this.vert(e.x,e.y,e.z,o.x,o.y,o.z,a,c,l),m=this.vert(d.x,d.y,d.z,o.x,o.y,o.z,a,c,l),_=this.vert(h.x,h.y,h.z,o.x,o.y,o.z,a,c,l),p=this.vert(u.x,u.y,u.z,o.x,o.y,o.z,a,c,l);this.i.push(f,m,_,f,_,p,f,_,m,f,p,_)}toGeometry(){let e=new _t;return e.setAttribute("position",new ct(this.p,3)),e.setAttribute("normal",new ct(this.n,3)),e.setAttribute("color",new ct(this.c,3)),e.setAttribute("aSway",new ct(this.w,2)),e.setAttribute("uv",new ct(this.u,2)),e.setIndex(this.count>65535?new Ds(this.i,1):new Ls(this.i,1)),e.computeBoundingSphere(),e}withCards(e){let t=this.count,n=this.i.length;this.p.push(...e.p),this.n.push(...e.n),this.c.push(...e.c),this.w.push(...e.w),this.u.push(...e.u);for(let r of e.i)this.i.push(r+t);let s=this.toGeometry();return s.addGroup(0,n,0),s.addGroup(n,e.i.length,1),s}},Xe=(i,e,t)=>new T(i,e,t),Ys=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function YM(i){let e=kn(i),t=[],n=22+Math.floor(e()*22),s=.12+e()*.08,r=e()<.4;for(let o=0;o<n;o++){let a=Math.sqrt(e())*s*.85,c=e()*Math.PI*2,l=a/s,h=Xe(Math.cos(c)*a,.03,Math.sin(c)*a),d=.06+l*.42+e()*.12,u=c+(e()-.5)*.5,f=2.2+e()*2.6*(1-.35*l),m=[],_=e()<.06,p=Xe(Math.sin(d)*Math.cos(u),Math.cos(d),Math.sin(d)*Math.sin(u)),g=h.clone(),y=16,w=(.04+l*.12)*(e()<.5?1:.6),b=e()*6;for(let M=0;M<=y;M++){m.push(g.clone());let x=M/y,S=f/y;p.x+=Math.cos(u)*w*S*(.5+x)+Math.sin(b+x*7)*.012,p.z+=Math.sin(u)*w*S*(.5+x)+Math.cos(b+x*5)*.012,p.normalize(),g.addScaledVector(p,S)}let v=.016+e()*.008;t.push({pts:m,r0:v,L:f,dead:_,ph:e()*6.28,leafy:r&&!_&&e()<.8})}return{canes:t,rc:s,leafy:r}}function ZM(i,e){let t=YM(i),n=kn(i*31+7),s=new Ai,r=[6,4,3][e],o=[1,2,4][e],a=[Xe(0,-.05,0),Xe(0,.05,0),Xe(0,.1,0)];s.tube(a,[t.rc*1.05,t.rc,t.rc*.6],[10,6,4][e],()=>[.1,.085,.065],()=>0,0);for(let c of t.canes){let l=c.pts.filter((p,g)=>g%o===0||g===c.pts.length-1),h=l.map((p,g)=>c.r0*Math.pow(1-.8*(g/(l.length-1)),.9)),d=c.dead?[.15,.14,.125]:[.085,.078,.063],u=c.dead?[.18,.17,.155]:[.09,.095,.07];if(s.tube(l,h,r,p=>Ys(d,u,p),p=>Math.pow(p,1.6)*c.L*.22,c.ph),e>1)continue;let f=c.pts,m=c.L/(f.length-1),_=e===0?.045:.12;for(let p=.15,g=n()*6.28;p<c.L*.97;p+=_*(.8+.4*n()),g+=2.4){let y=Math.min(f.length-2,Math.floor(p/m)),w=p/m-y,b=f[y+1].clone().sub(f[y]).normalize(),v=f[y].clone().lerp(f[y+1],w),M=Xe(0,1,0);Math.abs(M.dot(b))>.9&&M.set(1,0,0),M.addScaledVector(b,-M.dot(b)).normalize();let x=Xe(0,0,0).crossVectors(b,M),S=M.clone().multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g)),C=c.r0*Math.pow(1-.8*(p/c.L),.9),R=p/c.L,P=Math.pow(R,1.6)*c.L*.22,D=v.clone().addScaledVector(S,C*.8);if(e===0){let z=S.clone().multiplyScalar(.75).addScaledVector(b,.55).normalize();s.spike(D,z,.012+n()*.01,.0022,S,c.dead?[.2,.19,.17]:[.2,.18,.15],[.06,.055,.05],P,c.ph)}if(c.leafy&&R>.45&&n()<.7){let z=e===0?2+Math.floor(n()*3):1;for(let L=0;L<z;L++){let H=S.clone().multiplyScalar(.8).addScaledVector(b,.4+n()*.4).add(Xe(n()-.5,n()-.5,n()-.5).multiplyScalar(.7)).normalize(),V=Xe(0,0,0).crossVectors(H,S).normalize(),G=n(),oe=G<.25?[.1,.13,.035]:G<.75?[.26,.21,.05]:[.2,.12,.05];s.leaf(D,H,V,(e===0?.022:.04)+n()*.01,e===0?.011:.022,S,oe,P,c.ph)}}}}return s.toGeometry()}function KM(i){let e=kn(i),t=[],n=1+e()*1.1,s=9+Math.floor(e()*8),r=.1+e()*.1,o=(a,c,l,h,d,u)=>{let f=[a.clone()],m=c.clone(),_=a.clone(),p=0;for(;p<l;){let g=.08+e()*.07;if(m.x+=(e()-.5)*.4,m.z+=(e()-.5)*.4,m.y+=(e()-.5)*.2+.06,m.normalize(),_.addScaledVector(m,g),p+=g,f.push(_.clone()),d<2&&p>l*.25&&p<l*.85&&e()<.32){let y=Xe(e()-.5,.25+e()*.3,e()-.5).normalize().lerp(m,.45).normalize();o(_.clone(),y,(l-p)*(.5+e()*.4),h*.55,d+1,u+e())}}t.push({pts:f,r0:h,len:l,depth:d,ph:u})};for(let a=0;a<s;a++){let c=a/s*Math.PI*2+e()*.5,l=Math.sqrt(e())*r,h=.14+e()*.36,d=Xe(Math.cos(c)*l,0,Math.sin(c)*l),u=Xe(Math.sin(h)*Math.cos(c),Math.cos(h),Math.sin(h)*Math.sin(c));o(d,u,n*(.75+e()*.45)/Math.cos(h*.6),.011+e()*.004,0,e()*6.28)}return{branches:t,H:n}}function JM(i,e){let t=KM(i),n=kn(i*17+3),s=new Ai,r=new Ai,o=Xe(0,t.H*.45,0),a=[.13,.24,.42][e],c=[.045,.11,.24][e];for(let l of t.branches){if(e===2&&l.depth>1)continue;let h=e===0?1:2,d=l.pts.filter((_,p)=>p%h===0||p===l.pts.length-1);if(d.length<2)continue;let u=d.map((_,p)=>Math.max(.0022,l.r0*(1-.75*(p/(d.length-1)))));s.tube(d,u,e===0?4:3,_=>Ys([.05,.044,.037],[.085,.076,.064],_),_=>Math.pow(_,1.5)*.35,l.ph);let f=l.pts,m=c;for(let _=1;_<f.length;_++){let p=_/(f.length-1);if(m+=f[_].distanceTo(f[_-1]),p<.35||m<c)continue;m=0;let g=f[_].clone().add(Xe(n()-.5,n()-.3,n()-.5).multiplyScalar(a*.3)),y=g.clone().sub(o).normalize();y.y+=.9,y.normalize();let w=Xe(n()-.5,n()-.5,n()-.5).normalize().lerp(y,.4).normalize(),b=Xe(0,1,0).cross(w);b.lengthSq()<.001&&b.set(1,0,0),b.normalize();let v=Xe(0,0,0).crossVectors(w,b).normalize(),M=.85+n()*.3;r.card(g,b,v,a*(.8+n()*.45),y,[M,M,M*(.9+n()*.2)],Math.pow(p,1.5)*.35,l.ph)}}return s.withCards(r)}function $M(i,e){let t=kn(i),n=new Ai,s=new Ai,r=.35+t()*.4,o=r*(1.3+t()*.5),a=Xe(0,r*.2,0),c=[14,7,0][e],l=[90,28,12][e],h=[.15,.27,.42][e];for(let d=0;d<c;d++){let u=t()*Math.PI*2,f=.35+t()*.9,m=t()*6.28,_=Xe(Math.cos(u)*Math.cos(f)*o/r*.5,Math.sin(f),Math.sin(u)*Math.cos(f)*o/r*.5).normalize(),p=[Xe(Math.cos(u)*.03,0,Math.sin(u)*.03)],g=p[0].clone();for(let y=0;y<4;y++)g.addScaledVector(_,.85*r/4),g.x+=(t()-.5)*.03,g.z+=(t()-.5)*.03,p.push(g.clone());n.tube(p,p.map((y,w)=>.006*(1-.6*w/4)),3,()=>[.12,.11,.09],y=>y*y*.12,m)}for(let d=0;d<l;d++){let u=t()*Math.PI*2,f=Math.asin(Math.pow(t(),.7)),m=.75+.25*t(),_=Xe(Math.cos(u)*Math.cos(f)*o*.5*m,Math.sin(f)*r*m,Math.sin(u)*Math.cos(f)*o*.5*m),p=_.clone().sub(a).normalize(),g=Xe(t()-.5,t()-.5,t()-.5).normalize().lerp(p,.78).normalize(),y=Xe(0,1,0).cross(g);y.lengthSq()<.001&&y.set(1,0,0),y.normalize();let w=Xe(0,0,0).crossVectors(g,y).normalize(),b=.85+t()*.3;p.y+=.9,p.normalize(),s.card(_,y,w,h*(.8+t()*.4),p,[b,b,b],Math.pow(Math.max(0,_.y/r),2)*.12,t()*6.28)}return n.withCards(s)}function QM(i,e){let t=kn(i),n=new Ai,s=i%3,r=[34,14,7][e],o=[4,3,2][e],a=[6,3,1][e],c=[.34,.3,.42][s]*(.75+t()*.5),l=[[.44,.38,.29],[.39,.37,.32],[.48,.41,.26]][s],h=[[.36,.28,.21],[.3,.28,.22],[.4,.33,.2]][s],d=(u,f,m,_,p)=>{let g=n.count;for(let y=0;y<u.length;y++){let w=(y<u.length-1?u[y+1].clone().sub(u[y]):u[y].clone().sub(u[y-1])).normalize(),b=Xe(-w.z,0,w.x);b.lengthSq()<1e-4&&b.set(1,0,0),b.normalize();let v=Xe(0,1,0).addScaledVector(w,-.3).normalize(),M=f[y];n.vert(u[y].x-b.x*M,u[y].y,u[y].z-b.z*M,v.x,v.y,v.z,m[y],_[y],p),n.vert(u[y].x+b.x*M,u[y].y,u[y].z+b.z*M,v.x,v.y,v.z,m[y],_[y],p)}for(let y=0;y<u.length-1;y++){let w=g+2*y;n.i.push(w,w+1,w+3,w,w+3,w+2)}};for(let u=0;u<r;u++){let f=t()*Math.PI*2,m=t()*.035,_=.12+t()*.75,p=c*(.45+t()*.6),g=t()*6.28,y=.75+t()*.4,w=t()<.25,b=Xe(Math.cos(f)*m,0,Math.sin(f)*m),v=Xe(Math.sin(_)*Math.cos(f),Math.cos(_),Math.sin(_)*Math.sin(f)),M=[b.clone()],x=[.005],S=[[.09,.075,.055]],C=[0];for(let R=1;R<=o;R++){let P=R/o;v.x+=Math.cos(f)*.22*P,v.z+=Math.sin(f)*.22*P,v.y-=.18*P*(_+.3),v.normalize(),b=b.clone().addScaledVector(v,p/o),M.push(b),x.push(.005*(1-.8*P)),C.push(P*P*p*.6);let D=Ys(h,l,P).map(z=>z*y);S.push(w?Ys(D,[.33,.31,.28],.6):D)}d(M,x,S,C,g)}for(let u=0;u<a;u++){let f=t()*Math.PI*2,m=.05+t()*.35,_=c*(1.15+t()*.6),p=t()*6.28,g=Xe(Math.sin(m)*Math.cos(f),Math.cos(m),Math.sin(m)*Math.sin(f)),y=[],w=[],b=[],v=[];for(let x=0;x<=4;x++){let S=x/4;y.push(g.clone().multiplyScalar(_*S).add(Xe(Math.cos(f)*.08*S*S,0,Math.sin(f)*.08*S*S))),w.push(.0012),b.push(Ys(h,l,S)),v.push(S*S*_*.8)}d(y,w,b,v,p);let M=y[4];for(let x=0;x<(s===2?4:7);x++){let S=t()*Math.PI*2,C=Xe(Math.cos(S),s===2?-.2:.4+t()*.6,Math.sin(S)).normalize(),R=M.clone().addScaledVector(g,-t()*.06),P=s===2?.012:.03+t()*.03;d([R,R.clone().addScaledVector(C,P)],[s===2?.003:8e-4,3e-4],[l,s===0?[.42,.3,.3]:l],[_*.8,_*.85],p)}}return n.toGeometry()}function sm(i){let e=Xs("grass-v1",.9,null,!0),t=(n,s,r)=>r()<Math.min(1,Math.max(.05,($0(n*.09+3.1,s*.09-7.7)-.25)*2.2+.25*$0(n*.5,s*.5)));return new Ki({kinds:[1,2,3,4,5,6].map(n=>({lods:[0,1,2].map(s=>QM(n,s)),count:1200,r:.15,H:.5,scale:[.7,1.3]})),material:e,lodDist:[8,20],maxDist:40,clear:i,seed:59,minGap:.05,claim:!1,accept:t,lazy:!0})}function rm(i){let e=kn(i),t=new Ai,n=.3,s=Xe(0,0,0),r=(a,c,l,h,d)=>{let u=[a.clone()],f=c.clone(),m=a.clone(),_=0;for(;_<l;){let g=.025+e()*.02;f.x+=(e()-.5)*.5,f.y+=(e()-.5)*.5,f.z+=(e()-.5)*.5,f.normalize();let y=m.clone().addScaledVector(f,g),w=y.clone().sub(s);w.length()>n*(.85+.2*e())&&(w.normalize(),f.addScaledVector(w,-1.3*f.dot(w)).normalize()),m.addScaledVector(f,g),_+=g,u.push(m.clone()),d<3&&e()<.2&&r(m.clone(),Xe(e()-.5,e()-.5,e()-.5).normalize().lerp(f,.3).normalize(),(l-_)*(.6+e()*.5)+.05,h*.7,d+1)}let p=.85+e()*.3;t.tube(u,u.map((g,y)=>Math.max(7e-4,h*(1-.7*y/u.length))),3,g=>Ys([.27,.22,.15],[.36,.3,.2],g).map(y=>y*p),()=>0,0)},o=Xe(0,-n*.92,0);t.tube([o.clone().add(Xe(0,-.03,0)),o],[.006,.006],4,()=>[.2,.16,.11],()=>0,0);for(let a=0;a<9;a++){let c=a/9*Math.PI*2+e()*.4;r(o,Xe(Math.cos(c)*.8,.6,Math.sin(c)*.8).normalize(),.7+e()*.5,.004,0)}return t.toGeometry()}var em=[],Ki=class{constructor({kinds:e,material:t,lodDist:n,clear:s,seed:r,minGap:o=.5,shadowLods:a=1,nearR:c=0,depthMat:l=null,maxDist:h=1e9,claim:d=!0,cull:u=!0,accept:f=null,lazy:m=!1}){this.lazy=m,this._last=[1e9,1e9,1e9],this.group=new Lt,this.depthMat=l,this.maxDist=h,this.cull=u,this.kinds=e,this.lodDist=n,this.nearR=c,this.shadowLods=a;let _=kn(r);this.items=[],e.forEach((p,g)=>{for(let y=0;y<p.count;y++){let w,b,v=0,M;do w=(_()-.5)*Ut,b=(_()-.5)*Ut,v++,M=!s(w,b)&&(!f||f(w,b,_))&&!em.some(R=>(d||R.solid)&&Math.hypot(Hl(R.x,w)-w,Hl(R.z,b)-b)<R.r+p.r+o);while(!M&&v<400);let x=p.scale[0]+_()*(p.scale[1]-p.scale[0]),S=.9+_()*.2,C={v:g,x:w,z:b,rot:_()*Math.PI*2,s:x,tint:new ge(S,S*(.97+_()*.06),S*(.95+_()*.1)),H:p.H*x,r:p.r*x};this.items.push(C),d&&em.push(C)}}),this.meshes=e.map((p,g)=>p.lods.map((y,w)=>{let b=new Po(y,t,p.count);b.frustumCulled=!1,b.count=0;for(let v=0;v<p.count;v++)b.setColorAt(v,new ge(1,1,1));return this.group.add(b),b})),this._M=new at,this._Q=new vt,this._S=new T,this._P=new T,this._Y=new T(0,1,0),this._sph=new Un,this._fr=new Si,this._pv=new at}setShadows(e){this.meshes.forEach(t=>t.forEach((n,s)=>{n.castShadow=e&&s<this.shadowLods,n.receiveShadow=e&&!this.depthMat,this.depthMat&&(n.customDepthMaterial=this.depthMat)}))}update(e,t,n){if(this.lazy){let o=n.matrixWorld.elements,a=Math.atan2(o[8],o[10]),c=this._last;if(Math.hypot(e-c[0],t-c[1])<.3&&Math.abs(Math.atan2(Math.sin(a-c[2]),Math.cos(a-c[2])))<.06)return[];c[0]=e,c[1]=t,c[2]=a}for(let o of this.meshes)for(let a of o)a.count=0;this._pv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._pv);let s=[],r=this.lodDist;for(let o of this.items){let a=Hl(o.x,e),c=Hl(o.z,t),l=a-e,h=c-t,d=Math.hypot(l,h),u=1-tm(Ut*.36,Ut*.48,Math.max(Math.abs(l),Math.abs(h)));if(u<.002||d>this.maxDist||this.cull&&d>20&&(this._sph.center.set(a,o.H*.5,c),this._sph.radius=o.H*.5+o.r+1,!this._fr.intersectsSphere(this._sph)))continue;let f=0;for(;f<r.length&&d>=r[f];)f++;let m=this.meshes[o.v];f=Math.min(f,m.length-1);let _=m[f];this._M.compose(this._P.set(a,0,c),this._Q.setFromAxisAngle(this._Y,o.rot),this._S.setScalar(o.s*u)),_.setMatrixAt(_.count,this._M),_.setColorAt(_.count,o.tint),_.count++,d<this.nearR&&s.push({it:o,d,M:this._M.clone()})}for(let o of this.meshes)for(let a of o)a.visible=a.count>0,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);return s}},Wl=["classic","old","spear","onearm","droop"],jM=[12,5,15,10,6],kl=class extends Ki{constructor(e,t,n=7){let s=WM();super({kinds:e.map((r,o)=>({lods:r.lods,count:jM[o],r:r.meta.R0+.6,H:r.meta.H,scale:[.86,1.14]})),material:s,lodDist:[13,36],clear:t,seed:n,minGap:3.5,shadowLods:2,nearR:8});for(let r of this.items)r.solid=!0,ra.push({x:r.x,z:r.z,r:e[r.v].meta.R0*1.08*r.s+.05});this.spineMat=qM(),this.spineGeos=e.map((r,o)=>r.areoles?XM(r,101+o*7,r.meta.H):null),this.spines=[0,1].map(()=>{let r=new nt(this.spineGeos[0],this.spineMat);return r.matrixAutoUpdate=!1,r.visible=!1,this.group.add(r),r})}update(e,t,n){let s=super.update(e,t,n).filter(r=>this.spineGeos[r.it.v]).sort((r,o)=>r.d-o.d);this.spines.forEach((r,o)=>{let a=s[o];r.visible=!!a,a&&(r.geometry=this.spineGeos[a.it.v],r.matrix.copy(a.M),r.matrixWorldNeedsUpdate=!0)})}setPixel(e,t){im.uPx.value=2*Math.tan(Yi.degToRad(e.fov)/2)/Math.max(1,t)}};function om(i){let e=Xs("plant-v1",.8),t=j0("creosote",5),n=j0("bursage",9),s=Xs("leaf-creosote-v1",.6,t),r=Xs("leaf-bursage-v1",.9,n),o=new Ki({kinds:[11,23,37].map(l=>({lods:[0,1,2].map(h=>ZM(l,h)),count:6,r:.9,H:4.5,scale:[.8,1.15]})),material:e,lodDist:[14,40],clear:i,seed:41,minGap:1.5}),a=new Ki({kinds:[5,9,14].map(l=>({lods:[0,1,2].map(h=>JM(l,h)),count:45,r:.8,H:1.8,scale:[.75,1.2]})),material:[e,s],lodDist:[12,35],clear:i,seed:43,minGap:1.2,depthMat:Q0(t)}),c=new Ki({kinds:[3,8,13].map(l=>({lods:[0,1,2].map(h=>$M(l,h)),count:70,r:.4,H:.6,scale:[.7,1.3]})),material:[e,r],lodDist:[10,28],clear:i,seed:47,minGap:.3,depthMat:Q0(n)});return[o,a,c]}function eS(i,e){let t=kn(i),n=new Ai,s=4.2+t()*2.6,r=[24,16,10][e],o=[5,4,3][e],a=[24,10,5][e],c=(u,f)=>{let m=.8+.4*(f*.37%1);return Ys([.27*m,.25*m,.215*m],[.33*m,.315*m,.28*m],u)},l=(u,f,m,_,p,g,y)=>{let w=kn(y);for(let b=0;b<g;b++){let v=b/g*Math.PI*2+w()*.2,M=Math.cos(v)*p*(1.5+w()*.7),x=(Math.sin(v)*.3+.45)*p,S=w()*_*.15,C=_*(.75+w()*.25),R=w()<.35?2:1;for(let P=0;P<R;P++){let D=R===1||P===0?S:S+(C-S)*(.5+w()*.1),z=R===1?C:P===0?S+(C-S)*(.45+w()*.05):C,L=(w()-.5)*.12,H=[];for(let G=0;G<=a;G++){let oe=G/a,Y=D+(z-D)*oe,re=Math.sin(oe*Math.PI)*(w()-.5)*.04,ce=.3+.7*tm(0,.7,Y),Le=(M+L*(Y-D)+re)*ce;H.push(u.clone().addScaledVector(f,Y).addScaledVector(m,Le).add(Xe(0,Math.max(.016,(x+re*.5)*ce+.03*(1-ce)),0)))}let V=.013+w()*.008;n.tube(H,H.map(()=>V),o,G=>c(G,b),()=>0,0)}}},h=Xe(1,0,0),d=Xe(0,0,1);if(l(Xe(.15,0,0),h,d,s,.13,r,i*3+1),t()<.8){let u=1.6+t()*1.4,f=(t()<.5?1:-1)*(.5+t()*.5),m=Xe(Math.cos(f),0,Math.sin(f)),_=Xe(-m.z,0,m.x);l(Xe(u,0,Math.sign(f)*.35),m,_,1.2+t()*1.2,.08,Math.max(5,Math.round(r*.55)),i*5+2)}for(let u=0;u<(e===2?3:7);u++){let f=u/7*Math.PI*2+t()*.5,m=.25+t()*.35,_=Xe(.12,.05,0),p=Xe(.05-Math.abs(Math.cos(f))*m*.6,.02+Math.max(0,Math.sin(f))*.08,Math.sin(f)*m*.8);n.tube([_,_.clone().lerp(p,.5).add(Xe(0,.02,0)),p],[.035,.025,.01],[5,4,3][e],()=>[.2,.18,.155],()=>0,0)}if(e<2)for(let u=0;u<2;u++){let f=Xe(.6+t()*(s-1.2),.05,(t()-.5)*.7),m=Xe(t()-.5,.15,t()-.5).normalize(),_=[],p=7;for(let v=0;v<=p;v++){let M=v/p;_.push([.035+.035*Math.sin(M*Math.PI*.85),M*.13])}let g=e===0?9:5,y=Xe(0,1,0).cross(m);y.lengthSq()<.001&&y.set(1,0,0),y.normalize();let w=Xe(0,0,0).crossVectors(m,y),b=n.count;for(let[v,M]of _)for(let x=0;x<g;x++){let S=x/g*Math.PI*2,C=y.x*Math.cos(S)+w.x*Math.sin(S),R=y.y*Math.cos(S)+w.y*Math.sin(S),P=y.z*Math.cos(S)+w.z*Math.sin(S);n.vert(f.x+m.x*M+C*v,f.y+m.y*M+R*v,f.z+m.z*M+P*v,C,R,P,[.13,.085,.05],0,0)}for(let v=0;v<p;v++)for(let M=0;M<g;M++){let x=b+v*g+M,S=b+v*g+(M+1)%g,C=x+g,R=S+g;n.i.push(x,S,C,S,R,C,x,C,S,S,C,R)}}return n.toGeometry()}function tS(){let i=new pn({color:16777215,roughness:.78,metalness:0});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB;
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vBo = position;`).replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
        vWy = (instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vWy = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;
${nm}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",Vl)},i.customProgramCacheKey=()=>"bone-v1",i}function nS(i,e,t){let n=kn(t),s=14,r=6,o=[],a=[],c=[];for(let f=0;f<=s;f++){let m=f/s,_=(m-.5)*e,p=i/e,g=Math.sin(_)*p,y=(Math.cos(_)-Math.cos(e/2))*p,w=Math.cos(_),b=-Math.sin(_),v=.011*(1-.35*m)+.004*(m<.08?1-m/.08:0),M=.005;for(let x=0;x<r;x++){let S=x/r*Math.PI*2,C=Math.cos(S)*v,R=Math.sin(S)*M,P=-b,D=w;o.push(g+P*C,R+M,y+D*C);let z=Math.hypot(Math.cos(S)/v,Math.sin(S)/M);a.push(P*Math.cos(S)/v/z,Math.sin(S)/M/z,D*Math.cos(S)/v/z)}}for(let f=0;f<s;f++)for(let m=0;m<r;m++){let _=f*r+m,p=f*r+(m+1)%r,g=_+r,y=p+r;c.push(_,g,p,p,g,y)}let l=o.length/3,h=new Uint8Array(l*4),d=new Uint8Array(l*4);for(let f=0;f<l;f++)h[4*f+3]=230,d[4*f+2]=Math.floor(n()*255);let u=new _t;return u.setAttribute("position",new ct(o,3)),u.setAttribute("normal",new ct(a,3)),u.setAttribute("aA",new He(h,4,!0)),u.setAttribute("aB",new He(d,4,!0)),u.setAttribute("aS",new He(new Float32Array(l),1)),u.setIndex(c),u}var iS=[[["skull",0,.07,0,.5,.05,.12],["jaw",.36,.012,.22,.9,0,1.5708],["jaw",-.7,.012,-.45,-2.3,0,-1.5708],["vert-t",.25,.02,-.55,.3,0,1.4],["vert-t",.33,.02,-.72,.4,0,-1.3],["vert-t",.38,0,-.92,.2,0,.1],["vert-t",.52,.02,-1.1,.5,0,1.5],["vert-l",.6,0,-1.32,.35,0,.2],["vert-l",.7,.01,-1.5,.6,0,-.1],["vert-l",1.2,0,-1.2,2.1,0,.05],["pelvis",.9,.035,-2,.4,.08,.25],["femur",1.6,.012,-1.7,1.1,0,0],["femur",-.2,.01,-2.5,-.5,0,3.1],["scapula",-.55,0,-.95,.7,0,0],...[0,1,2,3,4,5,6,7].map(i=>["rib",.5+i*.1,0,-.6-i*.12,-1.3-i*.05+i%2*.15,0,0]),["rib",-1.1,0,.6,2.4,0,0],["rib",1.9,0,-.4,.3,0,0]],[["skull",0,.09,0,-1.9,0,1.45],["jaw",.55,.012,.4,2.6,0,1.5708],["vert-t",-.8,.02,.5,1.2,0,1.5],["vert-l",-1.15,0,.2,.4,0,.1],["vert-t",1.3,.02,-.7,2,0,-1.4],["pelvis",-1.6,.03,-.9,2.2,-.1,-.2],["femur",.4,.012,-1.3,.2,0,0],["scapula",1.5,0,.5,-.4,0,3.14159],...[0,1,2,3,4].map(i=>["rib",-.4+i*.45,0,-.5-i%2*.4,i*1.3,0,0])]],xf=["skull","jaw","vert-t","vert-l","femur","pelvis","scapula"];function sS(i,e,t){let n=[],s=new at,r=new $t,o=new vt,a=new T(1,1,1),c=new T;e.forEach(([h,d,u,f,m,_,p],g)=>{let y;h==="rib"?y=nS(.36+g*.37%1*.16,1.4,g+3):y=i[xf.indexOf(h)].lods[t].clone(),r.set(_,m,p,"YXZ"),o.setFromEuler(r),s.compose(c.set(d,u,f),o,a),y.applyMatrix4(s);let w=y.attributes.normal;if(!(w.array instanceof Float32Array)){let b=new Float32Array(w.count*3);for(let v=0;v<w.count;v++)b[3*v]=w.getX(v),b[3*v+1]=w.getY(v),b[3*v+2]=w.getZ(v);y.setAttribute("normal",new He(b,3))}n.push(y)});let l=V0(n.map(h=>{for(let d of["aA","aB"])h.attributes[d].normalized||(h.attributes[d].normalized=!0);return h}));return l.computeBoundingSphere(),l}function am(i,e){let t=Xs("deadwood-v1",.92),n=new Ki({kinds:[21,34].map(r=>({lods:[0,1,2].map(o=>eS(r,o)),count:3,r:2.6,H:.4,scale:[.85,1.1]})),material:t,lodDist:[16,40],clear:e,seed:61,minGap:1}),s=new Ki({kinds:iS.map((r,o)=>({lods:[0,1,2].map(a=>sS(i,r,a)),count:o===0?2:1,r:2.2,H:.3,scale:[1,1]})),material:tS(),lodDist:[12,30],clear:e,seed:67,minGap:1});return[n,s]}var J={told:11,standZ:1,stations:[{x:0,rows:[3,2,1]},{x:4,rows:[2,1]},{x:8,rows:[2,1]}],front:{z:-3.6,gap:[.95,1.5],jitterZ:.7,turn:.45},rowBack:[2.6,4,5.4],rowGap:1.35,rowJitter:[.35,.3],hill:{start:1.4,top:2.4,width:140,depth:30,edge:18},lean:.5,coat:[.06,.16],backDark:.8,scale:[.95,1.05],look:{pitch:-.03},walk:{speed:1.4,turn:.6},hint:{idle:12,misses:3},matches:1,swipe:{far:.08,ratio:1.2,reach:.07,cock:.75,still:10},monster:{clues:[1,2,4,7],high:.3,wide:.25,eye:.12,third:.07,glint:.07,anyRow:!1},volume:.5,hp:3,fight:{shots:2,twistSound:{files:["../sounds/twist-1.mp3","../sounds/twist-2.mp3"],gain:3},shotRoar:.5,morph:2.5,walk:2,stride:.7,accel:.6,gait:{legs:.6,surge:.25,weave:.6,rush:1.3,stumble:[2.5,4.5],stumbleTime:.18,whip:.35,gape:.35,lean:.28},stagger:.5,crawl:1.4,shadowLight:.3,push:1,reach:1.3,die:1,leap:{forms:["m3","m4"],h:.4,tilt:.5,travel:.35,crouch:.15,from:3,tallFrom:1.8},twist:1.1,hang:.2,face:.4,scatter:[2,3.5],scatterSpeed:1.6,back:2.5,wake:2.5},gun:{area:[.62,.5],hold:.8,point:.9,loud:5},scare:{forms:{1:["m3","m4","m5"],2:["m3","m4","m5"],4:["m3"],7:["m4"]},wait:[2,6],lastWait:[.8,1.6],hush:1,travel:.25,d:.32,light:7,recoil:{pitch:.14,back:.16,time:.35},shake:1.7,sting:"boom",buzz:[600,70,450,60,320,50,220],fake:{chance:.35,quiet:[1.2,2.5]}},hurt:{bpm:[0,112,80],heart:[0,.5,.3],edge:[0,.75,.4],shake:[1,3,2]},music:{drones:["../sounds/bgm-drone-a2.mp3","../sounds/bgm-drone-a3.mp3"],drone:.3,overlap:2.5},moo:{file:"../sounds/moo.mp3",every:[7,18],rate:[.9,1.1],gain:.8},letterbox:.09,saySecs:1.6,endWait:3.5,lines:{open:"\uC5F4\uD55C \uB9C8\uB9AC. \uB354\uB3C4 \uB9D0\uACE0 \uB35C\uB3C4 \uB9D0\uACE0.",count:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uD1A1)",countPC:"\uD558\uB098\uC529 \uC138\uC790 (\uC18C\uB97C \uBCF4\uACE0 \uD074\uB9AD)",next:"\uB2E4\uC74C \uC904\uB85C \uAC00\uC790 (\uD654\uBA74\uC744 \uC606\uC73C\uB85C \uB118\uAE30\uAE30)",nextPC:"\uB2E4\uC74C \uC904\uB85C \uAC00\uC790 (D\uB098 \u2192)",match:"\uC131\uB0E5\uC744 \uCF1C\uC790 (\uC67C\uCABD\uC744 \uC704\uB85C \uC4F8\uAE30)",matchPC:"\uC131\uB0E5\uC744 \uCF1C\uC790 (F)",noMatch:"\uC131\uB0E5\uC774 \uC5C6\uB2E4.",cock:"\u2026\uC3F4\uC57C \uD55C\uB2E4 (\uC624\uB978\uCABD\uC744 \uC544\uB798\uB85C \uC4F8\uC5B4 \uACF5\uC774\uCE58\uAE30)",cockPC:"\u2026\uC3F4\uC57C \uD55C\uB2E4 (\uC624\uB978\uCABD \uD074\uB9AD\uC73C\uB85C \uACF5\uC774\uCE58\uAE30)",fire:"(\uC3E0 \uACF3\uC744 \uD1A1, \uC704\uB85C \uC4F8\uBA74 \uACF5\uC774\uCE58\uAE30\uB97C \uB0B4\uB824\uC694)",firePC:"(\uD074\uB9AD\uD558\uBA74 \uC3F4\uC694, \uC624\uB978\uCABD \uD074\uB9AD\uC740 \uACF5\uC774\uCE58\uAE30\uB97C \uB0B4\uB824\uC694)",reload:"\uBE48 \uCE78\uC774\uB2E4 (\uCD1D\uC744 \uAFB9 \uB20C\uB7EC \uC7A5\uC804)",reloadPC:"\uBE48 \uCE78\uC774\uB2E4 (R\uB85C \uC7A5\uC804)",morningTitle:"\uB2E4\uC74C \uB0A0 \uC544\uCE68",morning:"\uAFC8\uC774\uC5C8\uB098\u2026 (\uC544\uCE68 \uC7A5\uBA74\uC740 \uC544\uC9C1 \uC5C6\uC5B4\uC694)",deadTitle:"\uB05D",dead:"\uD53C\uAC00 \uB2E4 \uB2F3\uC558\uC5B4\uC694"},clear:{x0:-9,x1:22,z0:-40},seed:41};function vf(i,e){let t=J.hill,n=Math.max(0,J.front.z-e-t.start),s=n<1?.2*n*n:.2+.4*(n-1),r=(J.stations[0].x+J.stations[J.stations.length-1].x)/2,o=Math.abs(i-r),a=t.width/2,c=o<a-t.edge?1:Math.max(0,(a-o)/t.edge);return t.top*Math.tanh(s*(1+.15*Math.sin(i*.23+1)+.1*Math.sin(i*.61+2))/t.top)*c*c*(3-2*c)-.03}var Cf={m3:{roar:"machine",skin:[.3,.26,.22],wr:[0,1,.3],anim:{breath:1,breathHz:1.5,jaw:.7,twitch:1.2,neck:[0,0],sway:1}},m4:{roar:"crack",skin:[.3,.27,.24],wr:[.2,1,.6],anim:{breath:.6,jaw:.45,twitch:.9,neck:[0,0],sway:0}},m5:{roar:"gargle",skin:[.02,.02,.022],wr:[0,1,0],smoke:1,eyeSelf:2.2,eyeShine:.35,anim:{breath:.4,jaw:.4,twitch:.6,neck:[0,0],sway:1}}},rS=`
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
}`,oS=`
attribute vec2 aAtt; attribute vec4 aMat; attribute vec4 aExt; attribute vec4 aRig; attribute vec4 aLeg;
uniform float uTime;
uniform vec3 uHeadP, uHeadX, uHeadY, uHeadZ, uJawH, uHeadRot, uNeckP;
uniform float uJaw, uSplit, uBreath, uSway, uStride, uStrideAmt; uniform vec2 uNeck; uniform vec3 uLimbHip[4], uLimbKnee[4]; uniform float uLimbPh[4];
mat3 rx(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 aa(vec3 k, float t) { float c = cos(t), s = sin(t), C = 1.0 - c;
  return mat3(c + k.x*k.x*C, k.y*k.x*C + k.z*s, k.z*k.x*C - k.y*s,  k.x*k.y*C - k.z*s, c + k.y*k.y*C, k.z*k.y*C + k.x*s,  k.x*k.z*C + k.y*s, k.y*k.z*C - k.x*s, c + k.z*k.z*C); }`,aS=`
  float side = sign(dot(position - uHeadP, uHeadX) + 1e-5);
  mat3 rJ = uSplit > 0.5 ? aa(uHeadY, uJaw * aRig.x * side) : aa(uHeadX, uJaw * aRig.x);
  mat3 rH = aa(uHeadY, uHeadRot.x * aRig.y) * aa(uHeadX, uHeadRot.y * aRig.y) * aa(uHeadZ, uHeadRot.z * aRig.y);
  mat3 rN = aa(vec3(1.0, 0.0, 0.0), uNeck.x * aRig.z) * aa(vec3(0.0, 0.0, 1.0), uNeck.y * aRig.z);`,cS=`
  transformed = uJawH + rJ * (transformed - uJawH);
  transformed = uHeadP + rH * (transformed - uHeadP);
  transformed = uNeckP + rN * (transformed - uNeckP);
  { float ph = position.x * 5.0 + position.z * 4.0;
    transformed += vec3(sin(uTime * 1.3 + position.y * 3.0 + ph), 0.0, cos(uTime * 1.07 + position.y * 2.5 + ph * 0.7)) * 0.035 * aRig.w * aRig.w * uSway; }
  transformed += normal * aExt.y * uBreath;`,lS=`
  if (uStrideAmt > 0.0 && aLeg.x > 0.01) {
    int li = int(floor(aLeg.x * 8.0 + 0.5)) - 1;
    float ph = uStride + uLimbPh[li];
    float swing = sin(ph) * uStrideAmt, lift = max(0.0, cos(ph)) * uStrideAmt * 1.4;
    vec3 hp = uLimbHip[li], kn = uLimbKnee[li];
    transformed = kn + rx(lift * aLeg.z) * (transformed - kn);
    transformed = hp + rx(-swing * aLeg.y) * (transformed - hp);
  }`;function hS(i,e){let t=new pn({color:16777215,roughness:.8,metalness:0}),n={uTime:e,uIR:{value:0},uHeadP:{value:new T},uHeadX:{value:new T(1,0,0)},uHeadY:{value:new T(0,1,0)},uHeadZ:{value:new T(0,0,1)},uJawH:{value:new T},uHeadRot:{value:new T},uNeckP:{value:new T},uNeck:{value:new he},uJaw:{value:0},uSplit:{value:0},uBreath:{value:0},uSway:{value:1},uSkin:{value:new ge(...i.skin)},uWr:{value:new T(...i.wr).normalize()},uSmoke:{value:i.smoke??0},uEyeGain:{value:14},uEyeSelf:{value:i.eyeSelf??0},uEyeShine:{value:i.eyeShine??1},uLightP:{value:new T},uAppear:{value:1},uDbgMouth:{value:0},uStride:{value:0},uStrideAmt:{value:0},uLimbHip:{value:[0,1,2,3].map(()=>new T)},uLimbKnee:{value:[0,1,2,3].map(()=>new T)},uLimbPh:{value:[0,0,0,0]}};return t.userData.own=n,t.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${oS}
varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
${aS}
objectNormal = rN * (rH * (rJ * objectNormal));`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position; vMat = aMat; vExt = aExt; vAtt = aAtt;
${cS}
${lS}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime, uIR, uSmoke, uEyeGain, uEyeSelf, uEyeShine, uAppear, uDbgMouth; uniform vec3 uSkin, uWr, uLightP;
        varying vec3 vObj; varying vec4 vMat; varying vec4 vExt; varying vec2 vAtt; varying vec3 vWP;
        ${rS}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
          totalEmissiveRadiance += uDbgMouth * vec3(0.0, step(0.5, vMat.y), 0.0) * 0.25; }`)},t.customProgramCacheKey=()=>"game-monster-v4",{mat:t,own:n}}function uS(i){let e=atob(i.data),t=new Uint8Array(e.length);for(let g=0;g<e.length;g++)t[g]=e.charCodeAt(g);let n=t.buffer,s=i.vc,r=i.ic,o=0,a;i.i32&&(a=new Uint32Array(n,o,r),o+=r*4);let c=new Int16Array(n,o,s*3);o+=s*6,i.i32||(a=new Uint16Array(n,o,r),o+=r*2);let l=new Int8Array(n,o,s*3);o+=s*3;let h=new Uint8Array(n,o,s*2);o+=s*2;let d=new Uint8Array(n,o,s*4);o+=s*4;let u=new Uint8Array(n,o,s*4);o+=s*4;let f=new Uint8Array(n,o,s*4);o+=s*4;let m=i.leg?new Uint8Array(n,o,s*4):new Uint8Array(s*4),_=new Float32Array(s*3);for(let g=0;g<s*3;g++)_[g]=c[g]*i.ps;let p=new _t;return p.setAttribute("position",new He(_,3)),p.setAttribute("normal",new He(new Int8Array(l),3,!0)),p.setAttribute("aAtt",new He(new Uint8Array(h),2,!0)),p.setAttribute("aMat",new He(new Uint8Array(d),4,!0)),p.setAttribute("aExt",new He(new Uint8Array(u),4,!0)),p.setAttribute("aRig",new He(new Uint8Array(f),4,!0)),p.setAttribute("aLeg",new He(new Uint8Array(m),4,!0)),p.setIndex(new He(i.i32?new Uint32Array(a):new Uint16Array(a),1)),p.computeBoundingSphere(),p.boundingSphere.radius+=.6,p}async function pm(i,e,t){let n=await(await fetch(i)).json(),s=n.meta,r=Cf[e],{mat:o,own:a}=hS(r,t),c=new nt(uS(n),o);c.frustumCulled=!1,a.uHeadP.value.fromArray(s.headPivot),a.uHeadX.value.fromArray(s.headX),a.uHeadY.value.fromArray(s.headY),a.uHeadZ.value.fromArray(s.headZ),s.split?(a.uSplit.value=1,a.uJawH.value.fromArray(s.headPivot).addScaledVector(a.uHeadZ.value,s.split.hinge[2])):a.uJawH.value.fromArray(s.jawHinge),a.uNeckP.value.fromArray(s.neck?s.neck.base:[0,1.5,-.05]),(s.limbs||[]).slice(0,4).forEach((h,d)=>{a.uLimbHip.value[d].fromArray(h.hip),a.uLimbKnee.value[d].fromArray(h.knee),a.uLimbPh.value[d]=h.arm?h.side>0?Math.PI:0:h.side*h.fore>0?Math.PI:0});let l=new Lt;return l.add(c),l.visible=!1,{id:e,meta:s,info:r,mesh:c,root:l,own:a,mouth:fS(c.geometry,s)}}function fS(i,e){let t=i.attributes.position.array,n=i.attributes.aMat.array,s=i.attributes.aRig.array,r=e.headPivot,o=e.headX,a=[];for(let l=0;l<t.length/3;l++){if(n[4*l+1]<128)continue;let h=t[3*l],d=t[3*l+1],u=t[3*l+2],f=(h-r[0])*o[0]+(d-r[1])*o[1]+(u-r[2])*o[2]+1e-5<0?-1:1,m=s[4*l]/255,_=s[4*l+1]/255;a.push(h,d,u,m,_,f,e.split?f<0?0:1:m<.5?0:1)}let c=[0,0];for(let l=6;l<a.length;l+=7)c[a[l]]++;return c[0]&&c[1]?{v:new Float32Array(a),n:c,split:!!e.split}:null}var ql=new T,Xl=new vt,dS=new vt,_f=new T,yf=new T,cm=new T,Mf=new T,Sf=new T,oa=[new T,new T];function Pf(i,e){let t=i.own,n=i.mouth;if(!n)return null;_f.copy(t.uHeadX.value),yf.copy(t.uHeadY.value),cm.copy(t.uHeadZ.value),Mf.copy(t.uHeadP.value),Sf.copy(t.uJawH.value);let s=t.uJaw.value,r=t.uHeadRot.value,o=n.v;oa[0].set(0,0,0),oa[1].set(0,0,0);for(let a=0;a<o.length;a+=7){ql.set(o[a],o[a+1],o[a+2]);let c=o[a+3],l=o[a+4];c>0&&ql.sub(Sf).applyQuaternion(n.split?Xl.setFromAxisAngle(yf,s*c*o[a+5]):Xl.setFromAxisAngle(_f,s*c)).add(Sf),l>0&&ql.sub(Mf).applyQuaternion(Xl.setFromAxisAngle(cm,r.z*l)).applyQuaternion(dS.setFromAxisAngle(_f,r.y*l)).applyQuaternion(Xl.setFromAxisAngle(yf,r.x*l)).add(Mf),oa[o[a+6]].add(ql)}return e.copy(oa[0]).multiplyScalar(.5/n.n[0]).addScaledVector(oa[1],.5/n.n[1]),e.multiply(i.root.scale).applyQuaternion(i.root.quaternion).add(i.root.position)}var bf=new T,wf=new T,Ef=new T;function mm(i,e,t){if(t<=0||!Pf(i,bf))return;e.getWorldDirection(wf);let n=Ef.copy(bf).sub(e.position).dot(wf);Ef.copy(e.position).addScaledVector(wf,n).sub(bf),i.root.position.addScaledVector(Ef,t)}var Zl=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),pS=i=>(i=Math.min(1,Math.max(0,i)),i*i*i),lm=i=>(i=Math.min(1,Math.max(0,i)),1-Math.pow(1-i,3)),hm={travel:.11,d:.68},aa={close:.13,hold:.06,pull:.12},ha=new T,Kl=new T,ca=new T,gm=new T,Zs=new T,If=new vt,Jl=new T,$l=new T,xm=new T;function vm(i,e,t,n){let s=!!i.meta.split;e.getWorldDirection(ha),Kl.copy(e.position).addScaledVector(ha,t+.75*i.meta.headL-.28).addScaledVector(Wr.set(0,1,0).applyQuaternion(e.quaternion),-.1);let r=s?0:.5*(i.meta.jawOpen+n)-.1;ca.fromArray(i.meta.headZ).multiplyScalar(Math.cos(r)).addScaledVector(gm.fromArray(i.meta.headY),-Math.sin(r)).normalize(),la.fromArray(i.meta.headY).multiplyScalar(Math.cos(r)).addScaledVector(Tf.fromArray(i.meta.headZ),Math.sin(r)),la.addScaledVector(ca,-la.dot(ca)).normalize(),Tf.crossVectors(la,ca),fm.setFromRotationMatrix(dm.makeBasis(Tf,la,ca)),Zs.copy(e.position).sub(Kl).normalize(),Wr.set(0,1,0).applyQuaternion(e.quaternion),Wr.addScaledVector(Zs,-Wr.dot(Zs)).normalize(),um.crossVectors(Wr,Zs),If.setFromRotationMatrix(dm.makeBasis(um,Wr,Zs)).multiply(fm.invert())}var la=new T,Tf=new T,Wr=new T,um=new T,fm=new vt,dm=new at;function _m(i,e,t,n={}){i.sc={t:0,fired:{},base:e.clone(),qs:t.clone(),d:n.d??hm.d,leap:n.leap??null,travel:n.travel??(n.leap?n.leap.travel:hm.travel),thr:{t:0,goal:new T,cur:new T,pg:new he,pc:new he}},i.root.visible=!0}function ym(i,e,t,n){let s=i.sc;if(!s)return null;let r=i.own,o=!!i.meta.split;s.t+=t;let a=s.t,c=s.travel,l=c+.72,h=l+aa.close,d=h+aa.hold,u=d+.75,f=u+.8,m=(P,D)=>{s.fired[P]||(s.fired[P]=1,D())};if(m("roar",()=>n.roar()),a>=d&&m("cut",()=>{n.cut(),i.root.visible=!1}),a>=u&&m("back",()=>n.back()),a>=f)return i.sc=null,i.root.visible=!1,n.done(),null;if(a>=d)return{fade:a<u?1:1-Zl((a-u)/(f-u)),shake:0};let _=xm.fromArray(i.meta.headPivot),p=o?.6:.95;vm(i,e,s.d,p);let g=Math.min(1,a/s.travel),y=bm(g),w=$l.copy(_).applyQuaternion(s.qs).add(s.base),b=Jl.copy(w).lerp(Kl,y);i.root.quaternion.copy(s.qs).slerp(If,y),s.leap&&g<1&&Tm(i,b,g,s.leap);let v=s.thr,M=.55,x=a>=l?Math.min(1,((a-l)/aa.close)**2):0;if(y>=1){v.t-=t,v.t<=0&&(v.t=.045+Math.random()*.03,v.goal.set((Math.random()-.5)*.6*M,(Math.random()-.5)*.6*M,(Math.random()-.5)*1.6*M),v.pg.set((Math.random()-.5)*.12*M,(Math.random()-.5)*.1*M));let P=Math.min(1,t*32);v.cur.lerp(v.goal,P),v.pc.lerp(v.pg,P),x>0&&(v.cur.multiplyScalar(1-x),v.pc.multiplyScalar(1-x),v.goal.set(0,0,0),v.pg.set(0,0)),b.addScaledVector(gm.set(1,0,0).applyQuaternion(e.quaternion),v.pc.x).addScaledVector(e.up,v.pc.y)}i.root.position.copy(b).sub($l.copy(_).applyQuaternion(i.root.quaternion)),Em(i,y),r.uHeadRot.value.copy(v.cur);let S=p*(y>=1?.85+.15*Math.sin(a*33):y);if(a>=l){let P=Math.min(1,((a-l)/aa.close)**2);r.uHeadRot.value.multiplyScalar(1-P),S=p-(p+i.meta.jawOpen*(o?.95:.9))*P,i.root.position.addScaledVector(ha,aa.pull*P)}r.uJaw.value=S,r.uHeadRot.value.z+=(i.twist??0)*(1-y),r.uHeadRot.value.y+=i.hang??0,mm(i,e,y);let C=e.position.distanceTo(Jl.copy(_).applyQuaternion(i.root.quaternion).add(i.root.position)),R=.12+.88*Zl((C-.9)/1.5);return r.uEyeShine.value=(i.info.eyeShine??1)*(.012+.988*R),r.uEyeSelf.value=(i.info.eyeSelf??0)*(.03+.97*R),{fade:0,shake:y>=1?1.4*M+.3:.6}}function Mm(i){return i.sc?i.sc.t>=i.sc.travel*mS:i.eat?i.eat.t>=i.eat.T.snap:!1}var mS=.7,qr=(i,e)=>i+Math.random()*(e-i);function Sm(i,e,t){let n=i.info.anim,s=i.own,r=i.idle??(i.idle={gapeT:2,gape:0,gapeV:0,jerkT:1,head:new T,goal:new T}),o=n.breathHz??.32;s.uBreath.value=n.breath*.012*Math.sin(t*Math.PI*2*o),r.gapeT-=e,r.gapeT<0&&(r.gape=1,r.gapeT=qr(2,4),r.hold=qr(.6,1.2)),r.gape>0&&(r.hold-=e,r.hold<0&&(r.gape=Math.max(0,r.gape-e*1.4))),r.gapeV+=((r.gape>0&&r.hold>0?1:r.gape)-r.gapeV)*Math.min(1,e*5),s.uJaw.value=(i.meta.split?-.1:-.12)+.08*Math.sin(t*.9)+.012*Math.sin(t*37)+r.gapeV*n.jaw,r.jerkT-=e,r.jerkT<0&&(r.jerkT=qr(.8,2.4)/n.twitch,r.goal.set(qr(-.3,.3),qr(-.18,.18),qr(-.4,.4)).multiplyScalar(Math.min(1,n.twitch))),r.head.lerp(r.goal,Math.min(1,e*22));let a=.012*n.twitch;s.uHeadRot.value.set(r.head.x+a*Math.sin(t*41),r.head.y+a*Math.sin(t*33+1),r.head.z+a*Math.sin(t*29+2)),s.uNeck.value.set(0,0),s.uSway.value=n.sway,s.uEyeShine.value=i.info.eyeShine??1,s.uEyeSelf.value=i.info.eyeSelf??0}var gS={snap:.45,lunge:.72,shut:1.02,black:1.11},xS={snap:.1,lunge:.62,shut:.76,black:.85},bm=i=>Math.pow(Math.min(1,Math.max(0,i)),2.5);function wm(i,e={}){i.eat={t:0,fired:{},p0:i.root.position.clone(),q0:i.root.quaternion.clone(),leap:e.leap??null,T:e.run?xS:gS,run:!!e.run,d:e.d??.62}}var Af=new T,Yl=new vt,vS=new T(0,1,0),Rf=new T,CA=new T;function Em(i,e){if(!i.twist||e<=0)return;let t=i.meta.eyes;Rf.set((t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2,(t[0][2]+t[1][2])/2).applyQuaternion(i.root.quaternion).add(i.root.position),Yl.setFromAxisAngle(Zs,i.twist*e),i.root.quaternion.premultiply(Yl),i.root.position.sub(Rf).applyQuaternion(Yl).add(Rf)}function Tm(i,e,t,n){e.y+=n.h*4*t*(1-t),Af.crossVectors(Zs,vS),Af.lengthSq()>1e-6&&i.root.quaternion.premultiply(Yl.setFromAxisAngle(Af.normalize(),n.tilt*Math.sin(Math.PI*t)*(1-t)))}function Am(i,e,t,n){let s=i.eat;if(!s)return null;let r=i.own,o=!!i.meta.split,a=o?.6:.95;s.t+=t;let c=s.t,l=(x,S)=>{s.fired[x]||(s.fired[x]=1,S())},h=s.T;if(s.run||l("freeze",n.freeze),c>=h.snap&&l("roar",n.roar),c>=h.black)return l("black",n.black),{fade:1,shake:0};let d=xm.fromArray(i.meta.headPivot);vm(i,e,s.d,a);let u=0,f=0,m=0,_=r.uJaw.value,p=0,g=0,y=-1;if(c<h.snap){let x=Zl(c/h.snap);_=_*(1-x)+(o?-.18:-.2)*x,r.uHeadRot.value.multiplyScalar(1-x),s.leap&&(g=s.leap.crouch*x)}else if(c<h.lunge){let x=(c-h.snap)/(h.lunge-h.snap);u=bm(x),f=lm(Math.min(1,x*1.6)),s.leap&&(g=s.leap.crouch*(1-Math.min(1,x*4)),y=x),_=-.2+(a+.2)*lm(x*1.3),r.uHeadRot.value.set(0,.08*Math.sin(c*60)*(1-x),.06*Math.sin(c*47)),p=.5}else if(c<h.shut)u=1,f=1,_=a+.04*Math.sin(c*50),r.uHeadRot.value.set(.03*Math.sin(c*41),.03*Math.sin(c*37),.05*Math.sin(c*33)),p=.5;else{let x=pS((c-h.shut)/(h.black-h.shut));u=1,f=1,m=.04*x,_=a-(a+i.meta.jawOpen*(o?.95:.9))*x,r.uHeadRot.value.set(0,0,0),p=.5}let w=$l.copy(d).applyQuaternion(s.q0).add(s.p0);e.getWorldDirection(ha);let b=Jl.copy(w).lerp(Kl,u).addScaledVector(ha,-m);b.y-=g,i.root.quaternion.copy(s.q0).slerp(If,f),y>=0&&Tm(i,b,y,s.leap),i.root.position.copy(b).sub($l.copy(d).applyQuaternion(i.root.quaternion)),Em(i,u),r.uJaw.value=_,r.uHeadRot.value.z+=(i.twist??0)*(1-u),r.uHeadRot.value.y+=i.hang??0,mm(i,e,u);let v=e.position.distanceTo(Jl.copy(d).applyQuaternion(i.root.quaternion).add(i.root.position)),M=.12+.88*Zl((v-.9)/1.5);return r.uEyeShine.value=(i.info.eyeShine??1)*(.012+.988*M),r.uEyeSelf.value=(i.info.eyeSelf??0)*(.03+.97*M),{fade:0,shake:p}}function Lf(i={}){let e=i.context||null,t,n,s,r,o,a=null,c=!0,l={a:0,b:0,c:0};function h(){if(e&&t)return e;if(!e)try{e=new(window.AudioContext||window.webkitAudioContext)}catch{return null}t=e.createGain(),t.gain.value=.9,s=e.createBiquadFilter(),s.type="lowpass",s.frequency.value=18e3,s.Q.value=.7;let B=e.createDynamicsCompressor();B.threshold.value=-4,B.ratio.value=3,B.attack.value=.003,B.release.value=.2;let U=e.createWaveShaper(),Z=2048,te=new Float32Array(Z);for(let Ie=0;Ie<Z;Ie++){let ot=Ie/(Z-1)*2-1,lt=Math.abs(ot)*2*.92;te[Ie]=Math.sign(ot)*(lt<.7?lt:.7+.28*Math.tanh((lt-.7)/.28))}U.curve=te;let ue=e.createGain();ue.gain.value=.5,t.connect(s).connect(B).connect(ue).connect(U).connect(e.destination),n=e.createGain(),n.connect(t),r=e.createConvolver(),r.buffer=d(e,1.8,2.6);let Ae=e.createGain();Ae.gain.value=.3,r.connect(Ae).connect(t),o=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let Ue=o.getChannelData(0);for(let Ie=0;Ie<Ue.length;Ie++)Ue[Ie]=Math.random()*2-1;return e}function d(B,U,Z){let te=Math.floor(B.sampleRate*U),ue=B.createBuffer(2,te,B.sampleRate);for(let Ae=0;Ae<2;Ae++){let Ue=ue.getChannelData(Ae);for(let Ie=0;Ie<te;Ie++)Ue[Ie]=(Math.random()*2-1)*Math.pow(1-Ie/te,Z)}return ue}function u(B,U,Z,te,ue,Ae=te-Z){B.gain.setValueAtTime(1e-4,U),B.gain.exponentialRampToValueAtTime(Math.max(2e-4,ue),U+Z),B.gain.exponentialRampToValueAtTime(1e-4,U+Z+Math.max(.01,Ae))}function f(B,U,Z){let te=e.createBufferSource();te.buffer=o,te.loop=!0;let ue=e.createBiquadFilter();ue.type=Z.type||"bandpass",ue.Q.value=Z.q??1,ue.frequency.setValueAtTime(Z.f0,B),Z.f1&&ue.frequency.exponentialRampToValueAtTime(Z.f1,B+U);let Ae=e.createGain();return u(Ae,B,Z.att??.01,U,Z.gain),te.connect(ue).connect(Ae),Ae.connect(Z.dest||t),Z.verb&&Ae.connect(r),te.start(B,Math.random()*1.5),te.stop(B+U+.05),Ae}function m(B,U,Z){let te=e.createOscillator();te.type=Z.type||"sine",te.frequency.setValueAtTime(Z.f0,B),Z.f1&&te.frequency.exponentialRampToValueAtTime(Z.f1,B+U);let ue=e.createGain();u(ue,B,Z.att??.01,U,Z.gain);let Ae=te;if(Z.lp){let Ue=e.createBiquadFilter();Ue.type="lowpass",Ue.frequency.value=Z.lp,Ae=Ae.connect(Ue)}if(Z.bp){let Ue=e.createBiquadFilter();Ue.type="bandpass",Ue.frequency.value=Z.bp,Ue.Q.value=Z.bq??3,Ae=Ae.connect(Ue)}if(Z.am){let Ue=e.createOscillator(),Ie=e.createGain(),ot=e.createGain();Ue.frequency.value=Z.am,Ie.gain.value=.5,ot.gain.value=.5,Ue.connect(Ie).connect(ot.gain),Ae=Ae.connect(ot),Ue.start(B),Ue.stop(B+U+.05)}if(Z.vib){let Ue=e.createOscillator(),Ie=e.createGain();Ue.frequency.value=Z.vib,Ie.gain.value=Z.vibAmt??Z.f0*.03,Ue.connect(Ie).connect(te.frequency),Ue.start(B),Ue.stop(B+U+.05)}return Ae.connect(ue),ue.connect(Z.dest||t),Z.verb&&ue.connect(r),te.start(B),te.stop(B+U+.05),ue}function _(B){let U=e.createWaveShaper(),Z=1024,te=new Float32Array(Z);for(let ue=0;ue<Z;ue++){let Ae=ue/Z*2-1;te[ue]=Math.tanh(Ae*B)}return U.curve=te,U}function p(B,U,Z,te){for(let ue=0;ue<U;ue++)f(B+Math.random()*Z,te.len??.006,{type:"bandpass",f0:te.f*(.7+Math.random()*.6),q:te.q??4,gain:te.gain*(.5+Math.random()*.5),att:8e-4,dest:te.dest})}function g(){if(a){let B=a;a=null;let U=e.currentTime;B.g.gain.setTargetAtTime(1e-4,U,.15),setTimeout(()=>B.nodes.forEach(Z=>{try{Z.stop()}catch{}}),900)}}function y(B){g();let U=e.currentTime,Z=e.createGain();Z.gain.value=1e-4,Z.gain.setTargetAtTime(1,U,.4),Z.connect(n);let te=[];if(B==="m4"){let ue=e.createOscillator();ue.type="sawtooth",ue.frequency.value=47;let Ae=e.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=230,Ae.Q.value=2;let Ue=e.createOscillator(),Ie=e.createGain(),ot=e.createGain();Ue.frequency.value=6.5,Ie.gain.value=.35,ot.gain.value=.065,Ue.connect(Ie).connect(ot.gain),ue.connect(Ae).connect(ot).connect(Z),ue.start(),Ue.start(),te.push(ue,Ue)}if(B==="m5"){for(let Ie of[36,38.6,54.5]){let ot=e.createOscillator();ot.frequency.value=Ie;let lt=e.createGain();lt.gain.value=Ie>50?.03:.07,ot.connect(lt).connect(Z),ot.start(),te.push(ot)}let ue=e.createBufferSource();ue.buffer=o,ue.loop=!0;let Ae=e.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=140;let Ue=e.createGain();Ue.gain.value=.12,ue.connect(Ae).connect(Ue).connect(Z),ue.start(),te.push(ue)}a={id:B,g:Z,nodes:te},l.a=0,l.b=1.5+Math.random()*2,l.c=0}function w(B,U,Z){if(!c||!e||e.state!=="running")return;(!a||a.id!==B)&&y(B);let te=e.currentTime+.02,ue=a.g;l.b-=U,B==="m3"&&(Z.cross&&(f(te,.2,{f0:1150,f1:800,q:.9,gain:.07,att:.03,dest:ue}),f(te+.3,.16,{f0:1700,f1:2100,q:1.2,gain:.035,att:.05,dest:ue})),l.b<0&&(l.b=4+Math.random()*3,f(te,.7,{type:"lowpass",f0:420,f1:260,q:6,gain:.1,att:.06,dest:ue}),m(te,.7,{type:"sawtooth",f0:70,f1:52,gain:.06,lp:300,am:19,dest:ue}))),B==="m4"&&(l.b<0&&(l.b=3+Math.random()*3.5,p(te,10+Math.floor(Math.random()*6),.55,{f:2600,gain:.12,dest:ue})),Z.cross&&f(te,.9,{type:"lowpass",f0:500,f1:300,q:1,gain:.05,att:.3,dest:ue})),B==="m5"&&(l.b<0&&(l.b=5+Math.random()*4,f(te,2.2,{f0:2400,f1:3100,q:5,gain:.04,att:.9,dest:ue}),f(te+.4,1.6,{f0:1300,f1:900,q:7,gain:.025,att:.6,dest:ue})),Z.cross&&f(te,2.4,{type:"lowpass",f0:240,f1:110,q:.7,gain:.08,att:.9,dest:ue}))}function b(B){if(!bt())return;let U=e.currentTime+.01;if(f(U,.012,{type:"highpass",f0:3800,q:.7,gain:.12,att:.001}),B==="m5")for(let Z=0;Z<14;Z++)f(U+.05+Z*(.03+Z*.004),.012,{f0:1300,q:6,gain:.08,att:.001});else m(U+.04,1.3,{type:"sawtooth",f0:B==="m3"?95:78,f1:52,gain:.16,bp:620,bq:3,vib:7,att:.15});f(U+.04,1.1,{type:"lowpass",f0:600,f1:250,q:1,gain:.06,att:.2})}function v(B,U){let Z=U.dur,te=B+Z,ue=e.createGain();ue.gain.value=1;let Ae=U.pitch??1,Ue=U.fmul??1,Ie=U.f.map(([Q,fe])=>[Q,fe*Ae]),ot=(Q,fe)=>{Q.frequency.setValueAtTime(Ie[0][1]*fe,B);for(let[xe,$]of Ie.slice(1))Q.frequency.exponentialRampToValueAtTime($*fe,B+xe)},lt=[];for(let[Q,fe,xe]of[[1,"sawtooth",.5],[1.012,"sawtooth",.4],[.5,U.subType||"sawtooth",U.sub??.45],[1.497,"square",U.fifth??0]]){if(!xe)continue;let $=e.createOscillator();$.type=fe,ot($,Q);let j=e.createGain();j.gain.value=xe,$.connect(j).connect(ue),lt.push($)}let wt=e.createOscillator();wt.type="sawtooth",wt.frequency.value=U.jitRate??11;let Rt=e.createGain();Rt.gain.value=Ie[0][1]*(U.jit??.06),wt.connect(Rt);for(let Q of lt)Rt.connect(Q.frequency);lt.push(wt);let Gt=e.createGain();Gt.gain.value=1-(U.rattle??.5)/2;let O=e.createOscillator();O.type="square",O.frequency.setValueAtTime(U.rattleHz??28,B),U.rattleHz1&&O.frequency.linearRampToValueAtTime(U.rattleHz1,te);let nn=e.createGain();nn.gain.value=(U.rattle??.5)/2,O.connect(nn).connect(Gt.gain),lt.push(O);let Tt=e.createBufferSource();Tt.buffer=o,Tt.loop=!0;let Ct=e.createBiquadFilter();Ct.type="bandpass",Ct.frequency.value=U.breathHz??1100,Ct.Q.value=.6;let be=e.createGain();be.gain.value=U.breath??.5,Tt.connect(Ct).connect(be).connect(ue),ue.connect(Gt);let Ht=_(U.drive??6);Gt.connect(Ht);let ke=e.createGain();ke.gain.value=1;for(let[Q,fe,xe]of U.formants||[[520,4,1],[950,5,.8],[2300,6,.35]]){let $=Q*Ue,j=e.createBiquadFilter();j.type="bandpass",j.frequency.setValueAtTime($,B),U.formantSweep&&j.frequency.exponentialRampToValueAtTime($*U.formantSweep,te),j.Q.value=fe;let _e=e.createGain();_e.gain.value=xe,Ht.connect(j).connect(_e).connect(ke)}let Ye=e.createBiquadFilter();Ye.type="lowpass",Ye.frequency.value=U.chestHz??260;let I=e.createGain();I.gain.value=U.chest??.9,Ht.connect(Ye).connect(I).connect(ke);let E=e.createBiquadFilter();E.type="lowpass",E.frequency.value=U.top??5200;let k=ke.connect(E);if(U.hp){let Q=e.createBiquadFilter();Q.type="highpass",Q.frequency.value=U.hp,Q.Q.value=.7,k=k.connect(Q)}let le=e.createGain();U={...U,gain:U.gain*(U.loud??1)},le.gain.setValueAtTime(1e-4,B),le.gain.exponentialRampToValueAtTime(U.gain,B+(U.att??.03)),U.swell&&le.gain.exponentialRampToValueAtTime(U.gain*U.swell,B+Z*.35),le.gain.setValueAtTime(U.gain*(U.swell??1),B+Z*.55),le.gain.exponentialRampToValueAtTime(1e-4,te),k.connect(le),le.connect(t),le.connect(r);for(let Q of lt)Q.start(B),Q.stop(te+.05);return Tt.start(B,Math.random()),Tt.stop(te+.05),le}function M(B,U,Z){v(B,{dur:U,f:[[0,150],[U,175]],gain:Z,rattle:.85,rattleHz:22,rattleHz1:30,drive:4,breath:.45,breathHz:1800,formants:[[800,4,.8],[1600,5,.6]],chest:.4,chestHz:320,top:4500,hp:200,att:U*.8,jit:.04})}function x(B){for(let[wt,Rt,Gt]of[[410,.35,.5],[1132,.22,.35],[2214,.16,.25],[3660,.1,.18]])m(B,Gt,{f0:wt,gain:Rt,att:.002});f(B,.05,{type:"highpass",f0:2500,q:.7,gain:.5,att:.001});let U=e.createOscillator();U.type="square",U.frequency.setValueAtTime(540,B),U.frequency.exponentialRampToValueAtTime(400,B+1.1);let Z=e.createGain();Z.gain.value=0;let te=e.createOscillator();te.frequency.value=730,te.connect(Z.gain);let ue=e.createBiquadFilter();ue.type="bandpass",ue.frequency.value=4e3,ue.Q.value=1.2;let Ae=e.createGain();u(Ae,B,.02,1.25,.22);let Ue=_(5);U.connect(Z).connect(Ue).connect(ue).connect(Ae).connect(t),U.start(B),te.start(B),U.stop(B+1.3),te.stop(B+1.3);let Ie=e.createDelay(.01);Ie.delayTime.value=.0031;let ot=e.createGain();ot.gain.value=.82,Ie.connect(ot).connect(Ie);let lt=e.createGain();lt.gain.value=.5,Ie.connect(lt).connect(t);for(let wt=0;wt<16;wt++)f(B+.05+wt*.055+Math.random()*.02,.012,{type:"highpass",f0:1500,q:.7,gain:.25*(1-wt/18),att:.001,dest:Ie})}function S(B){if(!bt())return;let U=e.currentTime;n.gain.cancelScheduledValues(U),n.gain.setTargetAtTime(1e-4,U,.05),B==="growlRoar"&&M(U+.02,.5,.22)}function C(B,U){if(!h())return;U===void 0&&(U=e.currentTime+.005);let Z={breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7};m(U,.16,{f0:95,f1:48,gain:.35,att:.003}),B==="growlRoar"&&v(U,{...Z,dur:1.1,f:[[0,205],[.1,280],[.45,215],[1.1,150]],gain:.7,rattle:.5,rattleHz:33,rattleHz1:24,drive:9,breath:.85,formants:[[1250,3,1],[2550,4,1],[3750,5,.65]],formantSweep:.85,att:.02}),B==="machine"&&v(U+.02,{...Z,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),B==="crack"&&v(U,{...Z,dur:1.1,f:[[0,210],[.07,340],[.2,235],[.42,310],[.6,220],[1.1,160]],gain:.7,rattle:.6,rattleHz:27,rattleHz1:14,drive:10,breath:.8,jit:.16,jitRate:9,formants:[[1150,3,1],[2350,4,.95],[3550,5,.65]],att:.015}),B==="gargle"&&v(U,{...Z,dur:1.2,f:[[0,190],[.18,262],[1.2,135]],gain:.75,rattle:.95,rattleHz:20,rattleHz1:36,drive:9,breath:1,jit:.12,jitRate:7,formants:[[1050,3,1],[2250,4,1],[3450,5,.7]],formantSweep:1.1,hp:1250,att:.025})}let R={};async function P(B){if(!(i.offline||!h()||R[B])){R[B]="pending";try{let U=e.sampleRate,Z=new OfflineAudioContext(1,Math.ceil(U*2.2),U);Lf({context:Z,offline:!0}).roarRaw(B,.002),R[B]=await Z.startRendering()}catch{R[B]=null}}}function D(B,U){R[B]=U}let z={first:.08,grow:1.16,span:1.1,gain:2.2};function L(B,U){let Z=B,te=z.first,ue=[];for(;Z-B<z.span;)ue.push([Z,te]),Z+=te,te*=z.grow;ue.forEach(([Ae,Ue],Ie)=>{let ot=Ie===ue.length-1,lt=ot?U.duration:Ue,wt=e.createBufferSource();wt.buffer=U;let Rt=e.createGain();Rt.gain.setValueAtTime(1e-4,Ae),Rt.gain.exponentialRampToValueAtTime(z.gain,Ae+.003),ot||(Rt.gain.setValueAtTime(z.gain,Ae+lt-.006),Rt.gain.exponentialRampToValueAtTime(1e-4,Ae+lt)),wt.connect(Rt).connect(t),Rt.connect(r),wt.start(Ae,0,lt+.01)})}let H={},V=1.5;async function G(B,U){if(!(!h()||H[B])){H[B]="pending";try{let Z=await(await fetch(U)).arrayBuffer();H[B]=await new Promise((te,ue)=>e.decodeAudioData(Z,te,ue))}catch{H[B]=null}}}function oe(B,U=1){if(!bt())return;let Z=H[B];if(Z&&Z!=="pending"){let Ae=e.createBufferSource(),Ue=e.createGain();Ae.buffer=Z,Ue.gain.value=V*U,Ae.connect(Ue).connect(t),Ae.start(e.currentTime+.005);return}let te=e.currentTime+.005,ue=R[B];ue&&ue!=="pending"?L(te,ue):(C(B,te),P(B)),f(te,.25,{f0:1800,f1:600,q:.8,gain:.3,att:.006})}function Y(B={}){if(!bt())return;let U=e.currentTime+.005;B.muffle!==!1&&(s.frequency.cancelScheduledValues(U),s.frequency.setValueAtTime(900,U),s.frequency.exponentialRampToValueAtTime(500,U+1.2));let Z=e.createOscillator();Z.frequency.value=3400;let te=e.createGain();u(te,U,.01,1.8,.06),Z.connect(te).connect(e.destination),Z.start(U),Z.stop(U+1.9),m(U+.35,.13,{f0:62,f1:42,gain:.45,att:.005}),m(U+.52,.15,{f0:56,f1:38,gain:.32,att:.005})}function re(){bt()&&Ve(e.currentTime+.005,.75)}function ce(B,U){if(bt())if(U===void 0&&(U=e.currentTime+.003),B==="boom")m(U,.45,{f0:160,f1:55,gain:1,att:.002}),m(U,.3,{f0:330,f1:110,gain:.5,att:.001,type:"triangle"}),f(U,.12,{f0:2400,f1:500,q:.8,gain:.9,att:.001}),f(U,.6,{type:"lowpass",f0:900,f1:200,q:.7,gain:.5,att:.003,verb:!0});else if(B==="slam"){f(U,.05,{f0:1800,q:1.2,gain:1.1,att:8e-4}),m(U,.25,{f0:210,f1:140,gain:.7,att:.001,type:"triangle"});for(let Z of[523,787,1190,1630])m(U,.7,{f0:Z,f1:Z*.98,gain:.12,att:.001,type:"square",bp:Z,bq:8,verb:!0});f(U+.01,.4,{type:"lowpass",f0:600,f1:150,gain:.6,att:.002,verb:!0})}else{for(let Z of[233,247,349,370,523])m(U,.55,{f0:Z,f1:Z*.97,gain:.16,att:.006,type:"sawtooth",lp:3200,verb:!0});m(U,.35,{f0:120,f1:60,gain:.7,att:.002}),f(U,.08,{f0:3e3,q:.8,gain:.5,att:.001})}}function Le(B,U=1,Z=.6,te=0){v(B+te,{dur:1.3,f:[[0,480*U],[.08,760*U],[.35,830*U],[.8,640*U],[1.3,420*U]],gain:Z,sub:0,rattle:.35,rattleHz:48,drive:14,breath:.7,breathHz:5200,jit:.07,jitRate:9,formants:[[1750,4,1],[3150,5,.9],[4700,6,.6]],hp:950,top:12500,chest:.04,att:.012})}function je(B){if(!bt())return;let U=e.currentTime+.005;if(B==="higher"&&(v(U+.02,{breathHz:5600,chest:.06,chestHz:500,top:12500,hp:1300,pitch:2.4,fmul:1.7,loud:1.7,dur:1.05,f:[[0,245],[.08,330],[1.05,175]],gain:.7,rattle:.7,rattleHz:46,drive:12,breath:.7,fifth:.25,formants:[[1500,3,1],[2900,4,1],[4300,6,.6]],att:.012}),x(U)),B==="metal"){let te=_(9),ue=e.createBiquadFilter();ue.type="bandpass",ue.frequency.value=3e3,ue.Q.value=.9;let Ae=e.createGain();u(Ae,U,.01,1.2,2.2);let Ue=e.createGain();Ue.gain.value=0;let Ie=e.createOscillator();Ie.frequency.setValueAtTime(2300,U),Ie.frequency.linearRampToValueAtTime(1700,U+1.2),Ie.connect(Ue.gain);for(let[Rt,Gt]of[[1,.5],[1.008,.4],[1.5,.25]]){let O=e.createOscillator();O.type="sawtooth",O.frequency.setValueAtTime(880*Rt,U),O.frequency.exponentialRampToValueAtTime(1400*Rt,U+.12),O.frequency.exponentialRampToValueAtTime(700*Rt,U+1.2);let nn=e.createGain();nn.gain.value=Gt,O.connect(nn).connect(Ue),O.start(U),O.stop(U+1.2+.05)}let ot=e.createDelay(.01);ot.delayTime.value=.0023;let lt=e.createGain();lt.gain.value=.7,ot.connect(lt).connect(ot),Ue.connect(te).connect(ue).connect(Ae),ue.connect(ot);let wt=e.createGain();wt.gain.value=.35,ot.connect(wt).connect(Ae),Ae.connect(t),Ae.connect(r),Ie.start(U),Ie.stop(U+1.2+.05),f(U,.9,{f0:6e3,f1:3500,q:1.5,gain:.25,att:.01}),x(U)}B==="tear"&&Le(U,1,.75),B==="overGrowl"&&(Le(U+.04,1,.6),v(U,{dur:1.4,f:[[0,90],[.2,120],[1.4,60]],gain:.55,rattle:.95,rattleHz:19,rattleHz1:30,drive:7,breath:.6,breathHz:900,formants:[[420,3,1],[800,4,.7]],chest:1,chestHz:260,top:3e3,att:.03})),B==="chorus"&&(Le(U,1,.4),Le(U,.93,.35,.03),Le(U,1.08,.35,.06),Le(U,.86,.25,.09)),B==="swell"&&(v(U,{dur:.75,f:[[0,160],[.75,620]],gain:.5,sub:0,rattle:.6,rattleHz:20,rattleHz1:50,drive:8,breath:1,breathHz:3e3,formants:[[1200,3,1],[2600,4,.8]],hp:500,top:9e3,att:.7}),f(U,.75,{f0:800,f1:6e3,q:.8,gain:.3,att:.72}),Le(U,1.05,.8,.72))}function ne(B){bt()&&(S(B),setTimeout(()=>{oe(B),setTimeout($e,1800)},B==="growlRoar"?520:60))}function Ee(B){bt()&&(Te(B),setTimeout($e,2600))}function De(B,U,Z){f(B,.003,{type:"highpass",f0:1200,q:.7,gain:U,att:4e-4}),f(B,.03+Math.random()*.03,{f0:Z,f1:Z*.8,q:10,gain:U*2.2,att:5e-4}),f(B,.012,{f0:Z*.45,q:3,gain:U*.9,att:5e-4})}function Ve(B,U=1){f(B,.008,{f0:4300,q:3,gain:.7*U,att:5e-4}),m(B,.16,{f0:120,f1:48,gain:.8*U,att:.002});let Z=[[.02,3,.05,.45],[.13,5,.06,.7],[.25,8,.075,1]];for(let[te,ue,Ae,Ue]of Z){for(let Ie=0;Ie<ue;Ie++){let ot=(Ie/ue)**1.5;De(B+te+ot*Ae+Math.random()*.006,Ue*U*(.5+.5*Math.random())*1.15,900+Math.random()*3200)}m(B+te,.07,{f0:95,f1:55,gain:.35*Ue*U,att:.002})}for(let te=0;te<45;te++)f(B+.02+Math.random()*.4,.0015,{type:"highpass",f0:2600,q:.7,gain:(.14+.2*Math.random())*U,att:3e-4});for(let te=0;te<6;te++)f(B+.03+te*.06+Math.random()*.03,.09,{f0:380+Math.random()*500,f1:240,q:2.5,gain:.26*U,att:.01})}function Te(B){if(!bt())return;let U=e.currentTime+.005;if(Ve(U),s.frequency.cancelScheduledValues(U),s.frequency.setValueAtTime(18e3,U+.42),s.frequency.exponentialRampToValueAtTime(1400,U+.9),s.frequency.exponentialRampToValueAtTime(320,U+2.4),B==="chew")for(let Z=1;Z<=3;Z++){let te=U+.5*Z;Ve(te,.65-Z*.08),f(te+.12,.28,{f0:600,f1:220,q:2,gain:.2,att:.02})}B==="gulp"&&(m(U+.6,.38,{f0:300,f1:75,gain:.45,att:.02}),f(U+.6,.5,{type:"lowpass",f0:420,f1:160,q:2,gain:.25,att:.03}),m(U+1,.6,{type:"sawtooth",f0:66,f1:48,gain:.12,lp:260,am:15})),[1,2,3.2].forEach((Z,te)=>{let ue=.5-te*.14;m(U+Z,.13,{f0:62,f1:42,gain:ue,att:.005}),m(U+Z+.17,.15,{f0:56,f1:38,gain:ue*.7,att:.005})})}function $e(){if(!e)return;let B=e.currentTime;s.frequency.cancelScheduledValues(B),s.frequency.setValueAtTime(Math.max(300,s.frequency.value),B),s.frequency.exponentialRampToValueAtTime(18e3,B+.9),n.gain.cancelScheduledValues(B),n.gain.setTargetAtTime(1,B,.4)}function bt(){return c&&h()&&(i.context||e.state==="running")}return{unlock(){if(!c)return;let B=h();B&&B.state!=="running"&&B.resume()},setEnabled(B){c=B,e&&(B?e.resume():(g(),e.suspend()))},get enabled(){return c},sting:ce,useFile:G,setRecGain(B){V=B},input(){return h()?t:null},ambient:w,gape:b,freeze:S,pounce:oe,bite:Te,restore:$e,preview:ne,previewBite:Ee,cut:Y,snap:re,scream:je,roarRaw:C,prepare:P,useBuffer:D,stop:()=>e&&g()}}var pd=location.hash==="#debug",Wn=!0,Qi=(i,e)=>Math.max(0,vf(i,e));st.lights_pars_begin=st.lights_pars_begin.replace("float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );","float distanceFalloff = 1.0 / pow( sqrt( lightDistance * lightDistance + 0.81 ), decayExponent );");var Jt=i=>document.getElementById(i),dt=(i,e,t)=>Math.max(e,Math.min(t,i)),Xt=(i,e,t)=>i+(e-i)*t,ln=i=>i*i*(3-2*i),md=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t),St=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),it=(i,e)=>i+Math.random()*(e-i),Yt=matchMedia("(pointer: coarse)").matches,wn=new T(-1.6,0,1.5),gd=1.62;var _S=1.7;var Rm=["\uD558\uB098","\uB458","\uC14B","\uB137","\uB2E4\uC12F","\uC5EC\uC12F","\uC77C\uACF1","\uC5EC\uB35F","\uC544\uD649","\uC5F4","\uC5F4\uD558\uB098","\uC5F4\uB458","\uC5F4\uC14B"],Je={start:Jt("start"),startBtn:Jt("startBtn"),loadTxt:Jt("loadTxt"),sub:Jt("sub"),joy:Jt("joy"),knob:Jt("knob"),fps:Jt("fps"),hint:Jt("hint"),resume:Jt("resume"),prompt:Jt("prompt"),lampBtn:Jt("lampBtn"),raiseBtn:Jt("raiseBtn"),end:Jt("end"),again:Jt("again"),fsBtn:Jt("fsBtn"),pause:Jt("pause"),cockBtn:Jt("cockBtn"),fireBtn:Jt("fireBtn"),reloadBtn:Jt("reloadBtn")},bn;try{bn=new Dl({antialias:!1,powerPreference:"high-performance"})}catch(i){throw Je.loadTxt.textContent="\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694.",i}bn.outputColorSpace=Is;bn.toneMapping=$n;bn.autoClear=!1;Jt("stage").appendChild(bn.domElement);var Ii=bn.domElement,Vt=new ls;Vt.fog=new Ao(new ge(.0035,.004,.0055),.009);var me=new fn(60,16/9,.05,1200);me.rotation.order="YXZ";var Ji={uLanternPos:{value:new T},uEyeGain:{value:200},uEyeSelf:{value:0},uTime:{value:0},uEyeFall:{value:1}},es=`
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,yS=`
  attribute vec4 aRig; attribute vec4 aLeg;
  uniform vec4 uPose; uniform float uTail; uniform vec4 uGait;
  mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
    return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
  mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }
  mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }`,MS=`
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
  }`,SS=`
  transformed = kneeP + rKnee * (transformed - kneeP);
  transformed = hipP + rHip * (transformed - hipP);
  transformed = T0 + rT * (transformed - T0);
  transformed = H0 + rH * (transformed - H0);
  transformed = N0 + rN * (transformed - N0);`;function bS(i,e,t){let n=new bi({color:16777215,roughness:.82,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new ge(i*.6,i*.56,i*.48)}),s={uBody:{value:new ge(i,i*.93,i*.8)},uFace:{value:new ge(e,e*.93,e*.8)},uPhase:{value:t},uPose:{value:new Nt},uTail:{value:0},uGait:{value:new Nt},uEyeOff:{value:0},uGone:{value:0}};return n.userData.own=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,Ji,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead;
        uniform float uTime; uniform float uPhase;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        ${yS}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${MS}
        objectNormal = rN * (rH * (rT * (rHip * (rKnee * objectNormal))));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        ${SS}`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform float uEyeFall; uniform float uEyeOff; uniform float uGone; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
${es}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), uEyeFall) + uEyeSelf * pow(fc, 4.0)) * (1.0 - uEyeOff); }`)},n.customProgramCacheKey=()=>"cow-rig-v5",n}async function wS(i){let e=await(await fetch("cows/cows.json")).json(),t=0;return Promise.all(e.map(async n=>{let s=await(await fetch(n.file)).json(),r=atob(s.data),o=new Uint8Array(r.length);for(let x=0;x<r.length;x++)o[x]=r.charCodeAt(x);let a=o.buffer,c=n.vc,l=n.ic,h=0,d=new Int16Array(a,h,c*3);h+=c*6;let u=new Int16Array(a,h,c*3);h+=c*6;let f=new Uint16Array(a,h,l);h+=l*2;let m=new Int8Array(a,h,c*3);h+=c*3;let _=new Uint8Array(a,h,c*4);h+=c*4;let p=new Uint8Array(a,h,c*4);h+=c*4;let g=new Uint8Array(a,h,c*4);h+=c*4;let y=n.leg?new Uint8Array(a,h,c*4):new Uint8Array(c*4),w=new Float32Array(c*3),b=new Float32Array(c*3);for(let x=0;x<c*3;x++)w[x]=d[x]*n.ps,b[x]=u[x]*n.hs;let v=new _t;v.setAttribute("position",new He(w,3)),v.setAttribute("normal",new He(new Int8Array(m),3,!0)),v.setAttribute("aMat",new He(new Uint8Array(_),4,!0)),v.setAttribute("aExt4",new He(new Uint8Array(p),4,!0)),v.setAttribute("aRig",new He(new Uint8Array(g),4,!0)),v.setAttribute("aLeg",new He(new Uint8Array(y),4,!0)),v.setAttribute("aHead",new He(b,3)),v.setIndex(new He(new Uint16Array(f),1)),v.boundingSphere=new Un(new T(0,.8,0),2.2);let M=x=>{let S=new T,C=0,R=0,P=0;for(let D=0;D<c;D++)x(D)&&(S.x+=w[3*D],S.y+=w[3*D+1],S.z+=w[3*D+2],R+=g[4*D]/255,P+=g[4*D+1]/255,C++);return C?{p:S.divideScalar(C),wn:R/C,wh:P/C}:null};return v.userData.eye=M(x=>p[4*x]>128),v.userData.nose=M(x=>_[4*x]>128),i(++t/e.length),v}))}var yh=[];function $m(i,e){for(let t of yh)t.position.x=i,t.position.z=e;sa.uPC.value.set(i,e)}function ES(){let i=new Kn(400,400,8,8);i.rotateX(-Math.PI/2);let e=new nt(i,Qm());return yh.push(e),AS=e,e}function TS(){let i=J.hill,e=(J.stations[0].x+J.stations[J.stations.length-1].x)/2,t=new Kn(i.width,i.depth,140,60);t.rotateX(-Math.PI/2),t.translate(e,0,J.front.z-i.start+.2-i.depth/2);let n=t.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,vf(n.getX(s),n.getZ(s)));return t.computeVertexNormals(),new nt(t,Qm())}function Qm(){let i=new pn({color:3353119,roughness:1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;
${es}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          // Sonoran desert floor: tan gravel, pale sandy washes, dark and light pebbles
          vec3 col = mix(vec3(0.15,0.125,0.095), vec3(0.21,0.175,0.13), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float wash = smoothstep(0.6, 0.8, vnoise3(vec3(q.x*0.07, 0.0, q.z*0.22))*0.5+0.5);
          col = mix(col, vec3(0.26,0.225,0.17), wash*0.55);
          float peb = vnoise3(q*38.0)*0.5+0.5;
          col *= 0.86 + 0.26*smoothstep(0.5, 0.8, peb) - 0.2*smoothstep(0.72, 0.9, c3);
          float burnt = 1.0 * (1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${wn.x.toFixed(2)}, ${wn.z.toFixed(2)})))); // the campfire's scorch (no campfire by day)
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`)},i}var AS=null,jm={uHaze:{value:new ge},uLift:{value:0}};function RS(){let i=new Lt,e=new Bt({fog:!1,side:qt,uniforms:jm,vertexShader:"attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 uHaze; uniform float uLift; varying float vT; void main(){ gl_FragColor = vec4(uHaze * mix(vT, 1.0, uLift), 1.0); }"}),t=(n,s,r,o,a,c)=>{let h=[],d=[],u=[];for(let m=0;m<=420;m++){let _=-Math.PI+2*Math.PI*(m/420),p=Math.sin(_)*n,g=-Math.cos(_)*n,y=1-Math.abs(of(_*5,o,.7,4)),w=s+r*y*y+2.2*of(_*60,o+3.1,1.3,2);if(h.push(p,-4,g,p,w,g),d.push(a,c),m<420){let b=2*m;u.push(b,b+2,b+1,b+1,b+2,b+3)}}let f=new _t;return f.setAttribute("position",new ct(h,3)),f.setAttribute("aT",new ct(d,1)),f.setIndex(u),new nt(f,e)};return i.add(t(190,8,30,4.2,.95,.55),t(150,3,17,9.7,.85,.12)),yh.push(i),i}var Df=(i,e)=>i>J.clear.x0&&i<J.clear.x1&&e>J.clear.z0&&e<6,ti=null,$s=[],Nf=0;function CS(i,e){Nf=St(Nf,e?1:0,e?1.8:.7,i),Gl.uTime.value=performance.now()/1e3,Gl.uGust.value=Nf,ti&&ti.update(pe.pos.x,pe.pos.z,me);for(let t of $s)t.update(pe.pos.x,pe.pos.z,me)}var jn=new T(1,0,.35).normalize(),Mh=[];function PS(i){let e=[3,7].map(n=>rm(n)),t=Xs("tumble-v1",.95);for(let n=0;n<4;n++){let s=.8+Math.random()*.5,r=new nt(e[n%2],t);r.scale.setScalar(s),i.add(r),Mh.push({mesh:r,r:.28*s,pos:new T,speed:0,k:.8+Math.random()*.4,side:Math.random()-.5,phase:Math.random()*6})}}function eg(i,e){let t=e?(Math.random()-.5)*20:12+Math.random()*6,n=(Math.random()-.5)*24;i.pos.set(me.position.x-jn.x*t+jn.z*n,i.r,me.position.z-jn.z*t-jn.x*n),i.speed=0}var IS=new vt,LS=new T(jn.z,0,-jn.x);function DS(i,e){for(let t of Mh){let n=t.pos.x-me.position.x,s=t.pos.z-me.position.z;(Math.hypot(n,s)>28||n*jn.x+s*jn.z>20)&&eg(t,!1),t.speed=St(t.speed,(e?3:.12)*t.k,e?1.4:.5,i),t.pos.x+=(jn.x+jn.z*t.side*.2)*t.speed*i,t.pos.z+=(jn.z-jn.x*t.side*.2)*t.speed*i;let r=(o,a,c)=>{let l=t.pos.x-o,h=t.pos.z-a,d=Math.hypot(l,h),u=c+t.r;d<u&&d>1e-4&&(t.pos.x=o+l/d*u,t.pos.z=a+h/d*u,t.speed*=.6)};for(let o of Qe)for(let a of o.blockers)r(a.x,a.z,a.r);r(wn.x,wn.z,.7),t.phase+=i*t.speed*2.4,t.mesh.position.set(t.pos.x,Qi(t.pos.x,t.pos.z)+t.r+Math.abs(Math.sin(t.phase))*.22*Math.min(1,t.speed/2.5),t.pos.z),t.mesh.quaternion.premultiply(IS.setFromAxisAngle(LS,t.speed*i/t.r))}}function NS(){let i=new Bt({side:Qt,depthWrite:!1,fog:!1,uniforms:{uHor:{value:new ge(.028,.03,.038)},uZen:{value:new ge(.002,.0022,.003)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${es}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`}),e=new nt(new Gi(900,32,16),i);return yh.push(e),e}var Zf={uTime:{value:0}};function US(){let i=new Lt;i.position.copy(wn);let e=new pn({color:5064771,roughness:1}),t=new Uo(.11,0);for(let f=0;f<12;f++){let m=f/12*Math.PI*2+it(-.1,.1),_=it(.48,.56),p=new nt(t,e);p.position.set(Math.cos(m)*_,.04,Math.sin(m)*_),p.scale.set(it(.8,1.4),it(.6,1),it(.8,1.3)),p.rotation.set(it(0,3),it(0,3),it(0,3)),i.add(p)}let n=new pn({color:2365198,roughness:1,emissive:new ge(.35,.08,.01),emissiveIntensity:.5}),s=new Vi(.045,.06,.75,7);for(let f=0;f<5;f++){let m=new nt(s,n),_=f/5*Math.PI*2;m.position.set(Math.cos(_)*.14,.17,Math.sin(_)*.14),m.rotation.set(0,-_,0),m.rotateZ(1.15),i.add(m)}let r=new Bt({transparent:!0,depthWrite:!1,blending:Jn,side:qt,uniforms:Zf,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv; ${es}
      void main(){ vec2 p = vUv;
        float n = vnoise3(vec3(p.x*4.0, p.y*3.0 - uTime*2.4, uTime*0.6))*0.5+0.5;
        float n2 = vnoise3(vec3(p.x*9.0, p.y*7.0 - uTime*3.8, 1.7 + uTime*0.3))*0.5+0.5;
        float w = 1.0 - abs(p.x - 0.5)*2.0;
        float shape = w * w * (1.0 - p.y*0.85);
        float f = smoothstep(0.18, 0.62, shape * (n*0.75 + n2*0.5) * 1.5 - p.y*0.35);
        vec3 col = mix(vec3(1.0,0.22,0.02), vec3(1.0,0.72,0.28), smoothstep(0.3, 0.9, f)) * f * 6.0;
        gl_FragColor = vec4(col, f); }`}),o=new Kn(.62,.95);o.translate(0,.47,0);for(let f=0;f<3;f++){let m=new nt(o,r);m.rotation.y=f/3*Math.PI,m.position.y=.05,i.add(m)}let a=70,c=new Float32Array(a*3),l=new Float32Array(a);for(let f=0;f<a;f++)l[f]=Math.random();let h=new _t;h.setAttribute("position",new He(c,3)),h.setAttribute("aSeed",new He(l,1));let d=new Bt({transparent:!0,depthWrite:!1,blending:Jn,uniforms:Zf,vertexShader:`uniform float uTime; attribute float aSeed; varying float vA;
      void main(){ float t = fract(uTime*0.35 + aSeed); float a = aSeed*43.0;
        vec3 p = vec3(sin(a + t*3.0)*0.25*t, t*2.4, cos(a*1.7 + t*2.0)*0.25*t);
        vA = (1.0 - t) * step(0.0, t);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 3.0 * (1.0 - t*0.6) * 6.0 / max(1.0, -mv.z); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float m = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0,0.45,0.1)*4.0*vA*m, vA*m); }"}),u=new Io(h,d);return u.frustumCulled=!1,i.add(u),i}var FS={uniforms:{tDiffuse:{value:null},uRes:{value:new he(960,540)},uCount:{value:0},uBrush:{value:1.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},BS={uniforms:{tDiffuse:{value:null},uRes:{value:new he(960,540)},uCount:{value:0},uExp:{value:.26},uDesat:{value:0},uSeed:{value:1},uFade:{value:0},uHurt:{value:0},uBars:{value:0},tMask:{value:null},uMaskOn:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},Kf=class{init(){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9*J.volume,this.master.connect(t.destination);let n=t.sampleRate*2,s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let p=0;p<n;p++)r[p]=Math.random()*2-1;this.noise=s;let o=this.loopNoise(),a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.6;let c=t.createGain();c.gain.value=.05,o.connect(a).connect(c).connect(this.master);let l=t.createOscillator(),h=t.createGain();l.frequency.value=.07,h.gain.value=.035,l.connect(h).connect(c.gain),l.start();let d=t.createOscillator(),u=t.createGain();d.frequency.value=.045,u.gain.value=160,d.connect(u).connect(a.frequency),d.start(),this.crickets=t.createGain(),this.crickets.gain.value=1,this.crickets.connect(this.master),this.cricketOn=!0;for(let p=0;p<6;p++)this.cricketLoop(it(-.9,.9),it(4e3,5200),it(.4,2));this.fireP=this.panner(wn.x,.4,wn.z,1.2);let f=this.loopNoise(),m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=260;let _=t.createGain();_.gain.value=.22,f.connect(m).connect(_).connect(this.fireP),this.crackleLoop(),this.breaths=[0,1,2].map(()=>{let p=this.panner(0,1,-4,1),g=this.loopNoise(),y=t.createBiquadFilter();y.type="bandpass",y.frequency.value=520,y.Q.value=.9;let w=t.createGain();return w.gain.value=0,g.connect(y).connect(w).connect(p),{p,g:w}})}loopNoise(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.loopStart=Math.random(),e.start(0,Math.random()*1.5),e}panner(e,t,n,s){let r=this.ctx.createPanner();return r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=s,r.rolloffFactor=1.3,this.setPos(r,e,t,n),r.connect(this.master),r}setPos(e,t,n,s){e.positionX?(e.positionX.value=t,e.positionY.value=n,e.positionZ.value=s):e.setPosition(t,n,s)}cricketLoop(e,t,n){let s=()=>{if(this.ctx){if(this.cricketOn){let r=this.ctx.currentTime,o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createStereoPanner();o.frequency.value=t,c.pan.value=e,a.gain.value=0;let l=2+Math.floor(Math.random()*3);for(let h=0;h<l;h++){let d=r+h*.055;a.gain.setValueAtTime(0,d),a.gain.linearRampToValueAtTime(.012,d+.012),a.gain.linearRampToValueAtTime(0,d+.04)}o.connect(a).connect(c).connect(this.crickets),o.start(r),o.stop(r+l*.055+.05)}setTimeout(s,it(350,1300))}};setTimeout(s,n*1e3)}crackleLoop(){let e=()=>{if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=this.noise,s.type="highpass",s.frequency.value=it(1200,3500),r.gain.setValueAtTime(it(.15,.5),t),r.gain.exponentialRampToValueAtTime(.001,t+it(.02,.07)),n.connect(s).connect(r).connect(this.fireP),n.start(t,Math.random()*1.5,.1),setTimeout(e,Math.random()<.2?it(20,60):it(80,420))};e()}step(){if(!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noise,n.type="bandpass",n.frequency.value=it(1800,3200),n.Q.value=.8,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(it(.05,.08),e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.16),t.connect(n).connect(s).connect(this.master),t.start(e,Math.random()*1.5,.2)}heart(e){if(!this.ctx||e<=0)return;let t=this.ctx.currentTime;for(let[n,s]of[[0,1],[.2,.7]]){let r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=this.ctx.createBiquadFilter();r.type="sine",r.frequency.setValueAtTime(62,t+n),r.frequency.exponentialRampToValueAtTime(38,t+n+.14),a.type="lowpass",a.frequency.value=140,o.gain.setValueAtTime(1e-4,t+n),o.gain.exponentialRampToValueAtTime(e*s,t+n+.012),o.gain.exponentialRampToValueAtTime(1e-4,t+n+.18),r.connect(a).connect(o).connect(this.master),r.start(t+n),r.stop(t+n+.2)}}hush(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.master.gain;n.cancelScheduledValues(t),n.setValueAtTime(n.value,t),n.setTargetAtTime(e?1e-4:.9*J.volume,t,e?.05:.5)}async loadMusic(){if(!this.ctx)return;let e=async o=>{try{return await this.ctx.decodeAudioData(await(await fetch(o)).arrayBuffer())}catch{return null}};this.musicG=this.ctx.createGain(),this.musicG.gain.value=J.music.drone,this.musicG.connect(this.master);let[t,n,s,...r]=await Promise.all(J.music.drones.concat(J.moo.file,J.fight.twistSound.files).map(e));this.drones=[t,n].filter(Boolean),this.mooBuf=s,this.twists=r.filter(Boolean),this.droneAt=this.ctx.currentTime+.1,this.mooAt=this.ctx.currentTime+it(...J.moo.every)}mooTick(e){if(!this.mooBuf||this.ctx.currentTime<this.mooAt)return;this.mooAt=this.ctx.currentTime+it(...J.moo.every);let t=e.filter(c=>c.mesh.visible&&!c.dead&&!c.gone);if(!t.length)return;let n=t[Math.floor(Math.random()*t.length)],s=n.headWorld??n.mesh.position,r=this.ctx.createBufferSource(),o=this.ctx.createGain(),a=this.panner(s.x,s.y,s.z,1);r.buffer=this.mooBuf,r.playbackRate.value=it(...J.moo.rate),o.gain.value=J.moo.gain,r.connect(o).connect(a),r.start(),r.onended=()=>a.disconnect(),this.moos=(this.moos??0)+1}musicTick(){if(!this.drones?.length||this.ctx.currentTime<this.droneAt-1)return;this.droneAt=Math.max(this.droneAt,this.ctx.currentTime+.05);let e=this.ctx.createBufferSource();e.buffer=this.drones[Math.floor(Math.random()*this.drones.length)],e.connect(this.musicG),e.start(this.droneAt),this.droneAt+=e.buffer.duration-J.music.overlap}silenceCrickets(){if(!this.ctx)return;this.cricketOn=!1;let e=this.ctx.currentTime;this.crickets.gain.cancelScheduledValues(e),this.crickets.gain.setTargetAtTime(0,e,.05)}update(e,t,n,s){if(!this.ctx)return;this.musicTick(),this.mooTick(n);let r=this.ctx.listener;r.positionX?(r.positionX.value=e.x,r.positionY.value=e.y,r.positionZ.value=e.z,r.forwardX.value=t.x,r.forwardY.value=t.y,r.forwardZ.value=t.z,r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(e.x,e.y,e.z),r.setOrientation(t.x,t.y,t.z,0,1,0)),n.map(a=>[a,a.mesh.position.distanceToSquared(e)]).sort((a,c)=>a[1]-c[1]).slice(0,3).forEach(([a],c)=>{let l=this.breaths[c],h=a.headWorld;this.setPos(l.p,h.x,h.y,h.z);let d=Math.sin(s*1.3+a.phase);l.g.gain.value=.05*Math.max(0,d)**3})}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}},Jf=class extends Kf{init(){if(super.init(),!this.ctx)return;let e=this.ctx;this.hiss=e.createGain(),this.hiss.gain.value=0;let t=this.loopNoise(),n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.5,t.connect(n).connect(this.hiss).connect(this.master)}burst(e,t,n,s,r,o=.005){if(!this.ctx)return;let a=this.ctx.currentTime,c=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();return c.buffer=this.noise,l.type=e,l.frequency.value=t,l.Q.value=n,h.gain.setValueAtTime(0,a),h.gain.linearRampToValueAtTime(s,a+o),h.gain.exponentialRampToValueAtTime(8e-4,a+r),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()*1.5,r+.1),{f:l,t:a}}gust(){if(!this.ctx)return;let e=this.burst("bandpass",420,.7,.16,2.4,.7);e&&(e.f.frequency.setValueAtTime(300,e.t),e.f.frequency.linearRampToValueAtTime(820,e.t+1.2),e.f.frequency.linearRampToValueAtTime(380,e.t+2.4))}click(){if(this.burst("highpass",3200,.7,.12,.03),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=1100,n.gain.setValueAtTime(.04,e),n.gain.exponentialRampToValueAtTime(5e-4,e+.04),t.connect(n).connect(this.master),t.start(e),t.stop(e+.05)}puff(){this.burst("lowpass",500,.5,.18,.22,.01)}whoosh(){let e=this.burst("bandpass",400,.9,.22,.7,.05);e&&e.f.frequency.exponentialRampToValueAtTime(1800,e.t+.45)}creak(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth";let o=it(1300,1700);n.frequency.setValueAtTime(o,t),n.frequency.linearRampToValueAtTime(o*it(1.1,1.3),t+.09),s.type="bandpass",s.frequency.value=2400,s.Q.value=6,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.012*e,t+.02),r.gain.exponentialRampToValueAtTime(3e-4,t+.12),n.connect(s).connect(r).connect(this.master),n.start(t),n.stop(t+.14)}sputter(){this.burst("highpass",it(1500,3e3),.8,.05,.04)}tick(e,t,n){if(!this.ctx)return;let s=this.ctx.currentTime+e,r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=this.noise,o.type="bandpass",o.frequency.value=t,o.Q.value=3,a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(n,s+.002),a.gain.exponentialRampToValueAtTime(5e-4,s+.035),r.connect(o).connect(a).connect(this.master),r.start(s,Math.random()*1.5,.05)}cock(){[[0,3800,.05],[.05,3400,.06],[.11,3e3,.07],[.2,2200,.14]].forEach(([e,t,n])=>this.tick(e,t,n))}dry(){this.tick(0,1800,.2),this.tick(.004,4200,.08)}gunshot(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();n.buffer=this.noise,s.type="lowpass",s.frequency.setValueAtTime(9e3,t),s.frequency.exponentialRampToValueAtTime(380,t+.3),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(1,t+.002),r.gain.exponentialRampToValueAtTime(.001,t+.7),n.connect(s).connect(r).connect(this.master),n.start(t,Math.random()*1.5,.8);let o=e.createOscillator(),a=e.createGain();o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(36,t+.2),a.gain.setValueAtTime(.8,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),o.connect(a).connect(this.master),o.start(t),o.stop(t+.34);for(let[c,l,h]of[[.42,.2,1700],[.78,.13,1200],[1.25,.085,850],[1.9,.05,600]]){let d=e.createBufferSource(),u=e.createBiquadFilter(),f=e.createGain();d.buffer=this.noise,u.type="lowpass",u.frequency.value=h,f.gain.setValueAtTime(0,t+c),f.gain.linearRampToValueAtTime(l,t+c+.03),f.gain.exponentialRampToValueAtTime(6e-4,t+c+1.1),d.connect(u).connect(f).connect(this.master),d.start(t+c,Math.random()*1.5,1.2)}}thud(e=.5){if(this.burst("lowpass",160,.7,e,.45,.004),!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.setValueAtTime(70,t),n.frequency.exponentialRampToValueAtTime(30,t+.25),s.gain.setValueAtTime(e*.8,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(s).connect(this.master),n.start(t),n.stop(t+.32)}setHiss(e){this.hiss&&(this.hiss.gain.value=.006*e)}},qe=new Jf,tr=new ls,Pi=new fn(70,16/9,.01,10),nr=.85,Ln=-1,Gn=new Lt;Gn.scale.setScalar(nr);tr.add(Gn);var so=new Lt;Gn.add(so);var tg=new T(0,-.248,0),ma={uTime:{value:0},uLevel:{value:1},uBend:{value:0}};function Cm(i,e,t){let n=new pn({color:i,metalness:e,roughness:t,fog:!1});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${es}`).replace("#include <color_fragment>",`#include <color_fragment>
        { float n = vnoise3(vLP*90.0)*0.5+0.5; float n2 = vnoise3(vLP*21.0)*0.5+0.5;
          float wear = smoothstep(0.62, 0.8, n*0.6 + n2*0.5);
          diffuseColor.rgb = mix(diffuseColor.rgb * (0.8 + 0.35*n2), vec3(0.32,0.2,0.12), smoothstep(0.55, 0.9, n2)*0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55,0.52,0.48), wear*0.5); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*60.0))*0.15, 0.05, 1.0);`)},n}function Xr(i,e,t=40){let n=new fs(i.map(([s,r])=>new he(s,r)),t);return n.computeVertexNormals(),new nt(n,e)}function Ql(i,e,t,n=48,s=!1){let r=new Pr(i.map(o=>new T(...o)),s);return new nt(new Oo(r,n,e,8,s),t)}var $f,Jr,Zr;function OS(){let i=Cm(1907481,.55,.5),e=Cm(11043908,1,.32),t=new pn({color:3810838,roughness:.75,fog:!1});$f=new bi({color:16773852,roughness:.06,metalness:0,transparent:!0,opacity:.2,depthWrite:!1,side:qt,emissive:new ge(1,.55,.2),emissiveIntensity:0,fog:!1,clearcoat:1,clearcoatRoughness:.05});let n=so;n.add(Xr([[0,-.34],[.066,-.34],[.071,-.336],[.074,-.322],[.072,-.3],[.064,-.285],[.04,-.279],[0,-.278]],i)),n.add(Xr([[0,-.28],[.03,-.28],[.031,-.27],[.028,-.262],[.012,-.258],[0,-.258]],e,28));let s=new nt(new Vi(.009,.009,.006,16),e);s.rotation.z=Math.PI/2,s.position.set(.04,-.268,0),n.add(s);let r=new nt(new Vi(.0025,.0025,.012,8),e);r.rotation.z=Math.PI/2,r.position.set(.033,-.268,0),n.add(r);let o=Xr([[.032,-.265],[.05,-.25],[.058,-.222],[.056,-.185],[.046,-.158],[.036,-.142]],$f,40);o.renderOrder=2,n.add(o),n.add(Xr([[0,-.143],[.045,-.143],[.047,-.138],[.045,-.131],[0,-.13]],i,32)),n.add(Xr([[0,-.132],[.06,-.132],[.065,-.122],[.062,-.104],[.05,-.088],[.022,-.08],[.012,-.076],[0,-.075]],i,40)),n.add(Xr([[0,-.08],[.012,-.08],[.013,-.072],[.008,-.066],[0,-.065]],i,20));for(let _ of[-1,1])n.add(Ql([[_*.066,-.29],[_*.077,-.25],[_*.078,-.2],[_*.072,-.15],[_*.064,-.118]],.0075,i,32));for(let _=0;_<4;_++){let p=Math.PI/4+_*Math.PI/2,g=Math.cos(p),y=Math.sin(p),w=[[.04,-.262],[.058,-.248],[.064,-.222],[.062,-.185],[.052,-.158],[.042,-.146]];n.add(Ql(w.map(([b,v])=>[g*b,v,y*b]),.0016,i,24))}for(let[_,p]of[[-.236,.0635],[-.18,.0605]]){let g=[];for(let y=0;y<24;y++){let w=y/24*Math.PI*2;g.push([Math.cos(w)*p,_,Math.sin(w)*p])}n.add(Ql(g,.0017,i,64,!0))}let a=[];for(let _=0;_<=24;_++){let p=_/24*Math.PI;a.push([Math.cos(p)*.064,-.112+Math.sin(p)*.112,0])}n.add(Ql(a,.0024,i,48));let c=new nt(new Vi(.0105,.0105,.056,14),t);c.rotation.z=Math.PI/2,n.add(c);let l=new Bt({transparent:!0,depthWrite:!1,blending:Jn,side:qt,uniforms:ma,fog:!1,vertexShader:"uniform float uBend; uniform float uTime; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; p.x += uBend * (uv.y*uv.y) * 0.012 + sin(uTime*13.0 + uv.y*6.0)*0.0012*uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:`uniform float uTime; uniform float uLevel; varying vec2 vUv; ${es}
      void main(){ vec2 p = vUv - vec2(0.5, 0.0);
        float h = 0.25 + 0.75*uLevel;
        float n = vnoise3(vec3(p.x*6.0, vUv.y*4.0 - uTime*3.0, uTime*0.7))*0.5+0.5;
        float w = (0.5 - abs(p.x)*2.0/max(0.15, 1.0 - vUv.y/h*0.9)) * 2.0;
        float body = smoothstep(0.0, 0.25, w) * smoothstep(h, h*0.55, vUv.y + n*0.12) * smoothstep(0.0, 0.08, vUv.y);
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.86,0.55), smoothstep(0.2, 0.9, body)) * body * 9.0 * uLevel;
        col += vec3(0.25,0.35,1.0) * smoothstep(0.12, 0.0, vUv.y) * smoothstep(0.0, 0.3, w) * 1.5 * uLevel;
        gl_FragColor = vec4(col, body); }`}),h=new Kn(.02,.05);h.translate(0,.025,0),Jr=new Lt;for(let _=0;_<3;_++){let p=new nt(h,l);p.rotation.y=_/3*Math.PI,p.renderOrder=3,Jr.add(p)}Jr.position.set(0,-.258,0),n.add(Jr);let d=document.createElement("canvas");d.width=d.height=64;let u=d.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,"rgba(255,255,255,0.5)"),f.addColorStop(.55,"rgba(255,255,255,0.12)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let m=new ki({map:new Us(d),color:new ge(1,.55,.2),transparent:!0,blending:Jn,depthWrite:!1,opacity:0,fog:!1});Zr=new hs(m),Zr.scale.set(.1,.1,1),Zr.position.copy(tg),Zr.renderOrder=4,n.add(Zr)}function ng(){let i=new bi({color:16777215,roughness:.62,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new ge(.26,.2,.14),fog:!1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP;
${es}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.34, 0.23, 0.135);
          float g1 = vnoise3(vLP*420.0)*0.5+0.5, g2 = vnoise3(vLP*90.0)*0.5+0.5;
          c *= (0.8 + 0.3*g2) * (0.9 + 0.14*g1);
          float dirt = smoothstep(0.55, 0.85, vnoise3(vLP*48.0 + 3.1)*0.5+0.5);
          c = mix(c, c*vec3(0.55, 0.5, 0.46), dirt*0.6);
          c *= mix(1.0, vAtt.x, 0.85);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*140.0))*0.1, 0.4, 0.85);`)},i}function zS(){let i=new bi({color:16777215,roughness:.95,metalness:0,sheen:1,sheenRoughness:.7,sheenColor:new ge(.075,.07,.068),side:qt,fog:!1});return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${es}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { float ang = atan(position.z, position.x);
          float bunch = 1.0 + 1.3*exp(-max(position.y - 0.02, 0.0)*28.0); // cloth bunches up just behind the hem
          float fold = (0.0024*sin(position.y*85.0 + sin(position.y*21.0)*2.0 + ang*1.5) + 0.0016*vnoise3(position*38.0)) * bunch;
          transformed += normal * fold * smoothstep(0.012, 0.03, position.y); }
        vLP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${es}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.05, 0.043, 0.038);
          c *= 0.8 + 0.4*(vnoise3(vLP*300.0)*0.5+0.5);
          c *= 0.7 + 0.3*smoothstep(-0.012, 0.004, vLP.y); // the inside of the hem
          diffuseColor.rgb = c; }`)},i}var HS={wristLocal:new T(.0208*Ln,.0162,.141),wristAxis:new T(.3384*Ln,-.3644,.8676),shoulder:new T(.26*Ln,-.3,.02),fore:.26*nr,upper:.29*nr,pole:new T(.75*Ln,-.65,.1).normalize()},kS={wristLocal:new T(.0277,-.1049,.1348),wristAxis:new T(.2376,-.329,.9137),shoulder:new T(.24,-.31,.04),fore:.26*nr,upper:.29*nr,pole:new T(.75,-.65,.1).normalize()},$i=null,Qf=null;function VS(){$i=ig(HS,Gn)}function ig(i,e){let t={P:i,pivot:e,root:new Lt,W:new T,E:new T,f:new T,u:new T};tr.add(t.root);let n=t,s=zS(),r=.26+.03,o=[[.0355,-.0115],[.041,-.0135],[.0448,-.0095],[.0462,-.002],[.0456,.008],[.044,.015]];for(let h=.022;h<=r+1e-6;h+=.007)o.push([.0438+.008*(h/r),h]);let a=new fs(o.map(([h,d])=>new he(h,d)),36);a.scale(1.08,1,1),n.fore=new nt(a,s),n.elbow=new nt(new Gi(.051,28,18),s);let c=.29+.18,l=new Vi(.06,.052,c,28,24,!0);l.translate(0,c/2,0),n.up=new nt(l,s);for(let h of[n.fore,n.elbow,n.up])h.scale.setScalar(nr),n.root.add(h);return t}var Yr=new T,ei=new T,$r=new T,Pn=new T,Qr=new at,jl=new vt,Pm=new vt;function jf(i){let e=i.P,t=i.pivot;i.W.copy(e.wristLocal),t.localToWorld(i.W),Yr.subVectors(e.shoulder,i.W);let n=Yr.length();Yr.divideScalar(n);let s=e.fore,r=e.upper;n=dt(n,Math.abs(s-r)+.001,s+r-.001);let o=(s*s-r*r+n*n)/(2*n),a=Math.sqrt(Math.max(0,s*s-o*o));ei.copy(e.pole).addScaledVector(Yr,-e.pole.dot(Yr)).normalize(),i.E.copy(i.W).addScaledVector(Yr,o).addScaledVector(ei,a),i.f.subVectors(i.E,i.W).normalize(),i.u.subVectors(e.shoulder,i.E).normalize()}var Im=new T;function GS(i,e,t){let n=i.P,s=i.pivot;for(let r=0;r<2;r++)jf(i),Pn.copy(n.wristAxis).transformDirection(s.matrixWorld),jl.setFromUnitVectors(Pn,i.f),Pm.identity().slerp(jl,e),s.quaternion.premultiply(Pm),Pn.set(1,0,0).applyQuaternion(s.quaternion),ei.copy(Pn).addScaledVector(t,-Pn.dot(t)).normalize(),jl.setFromUnitVectors(Pn,ei),s.quaternion.premultiply(jl),s.updateMatrixWorld(!0);jf(i)}function sg(i){let e=i.P,t=i.pivot;Pn.set(1,0,0).transformDirection(t.matrixWorld),ei.copy(Pn).addScaledVector(i.f,-Pn.dot(i.f)).normalize(),$r.crossVectors(ei,i.f),Qr.makeBasis(ei,i.f,$r),i.fore.quaternion.setFromRotationMatrix(Qr),i.fore.position.copy(i.W),i.elbow.position.copy(i.E),Pn.copy(ei).addScaledVector(i.u,-ei.dot(i.u)).normalize(),$r.crossVectors(Pn,i.u),Qr.makeBasis(Pn,i.u,$r),i.up.quaternion.setFromRotationMatrix(Qr),i.up.position.copy(i.E)}function ed(i,e){let t=atob(i.data),n=new Uint8Array(t.length);for(let p=0;p<t.length;p++)n[p]=t.charCodeAt(p);let s=n.buffer,r=i.vc,o=i.ic,a=0,c;i.i32&&(c=new Uint32Array(s,a,o),a+=o*4);let l=new Int16Array(s,a,r*3);a+=r*6,i.i32||(c=new Uint16Array(s,a,o),a+=o*2);let h=new Int8Array(s,a,r*3);a+=r*3;let d=new Uint8Array(s,a,r*2),u=new Float32Array(r*3);for(let p=0;p<r*3;p++)u[p]=l[p]*i.ps;let f=new Int8Array(h),m=i.i32?new Uint32Array(c):new Uint16Array(c);if(e){for(let p=0;p<r;p++)u[3*p]=-u[3*p],f[3*p]=-f[3*p];for(let p=0;p<m.length;p+=3){let g=m[p+1];m[p+1]=m[p+2],m[p+2]=g}}let _=new _t;return _.setAttribute("position",new He(u,3)),_.setAttribute("normal",new He(f,3,!0)),_.setAttribute("aAtt",new He(new Uint8Array(d),2,!0)),_.setIndex(new He(m,1)),_.computeBoundingSphere(),_}async function WS(){let i=await(await fetch("hand.json")).json();Gn.add(new nt(ed(i,Ln<0),ng()))}var Sn=new Lt;Sn.scale.setScalar(nr);var pt={t:0,kick:9,thumb:0,aim:0,shots:0,reload:0},dh=null,rt=null,jr=null,Ri=null,ph=null,Sa=null,rg=[],ba=-.2311,pa=mf(()=>qe.ctx||null,()=>qe.master),qS=mf(()=>qe.ctx||null,i=>{let e=Mt?.input();if(!e)return qe.master;let t=i.createGain();return t.gain.value=J.gun.loud,t.connect(e),t}),Sh={click:(i,e)=>pa.click(i,e),shot:()=>eb(),dry:()=>{qe.dry(),wb()},slide:()=>pa.slide(),drop:()=>pa.drop(pf),insert:()=>pa.insert()},XS=new T(.02,-.12,-.28),YS=new vt().setFromRotationMatrix((()=>{let i=new T(0,.97,.25).normalize(),e=new T(.8,-.1,.6);return e.addScaledVector(i,-e.dot(i)).normalize(),new at().makeBasis(i,new T().crossVectors(e,i),e)})()),to={yaw:0,roll:.18,aimD:5},og=new T(.14,-.11,-.29),Lm=new at,di=new T,ZS=new vt,KS=new T(0,1,0);function ag(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);if(n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),i){t.globalCompositeOperation="lighter",t.fillStyle="rgba(255,255,255,0.5)";for(let s=0;s<7;s++)t.save(),t.translate(64,64),t.rotate(s/7*Math.PI*2+Math.random()*.4),t.beginPath(),t.moveTo(0,-5),t.lineTo(60,0),t.lineTo(0,5),t.fill(),t.restore()}return new Us(e)}function JS(){tr.add(Sn),Ri=new hs(new ki({map:ag(!0),color:new ge(1,.8,.5),blending:Jn,transparent:!0,depthWrite:!1,fog:!1})),Ri.position.set(0,0,ba-.035),Ri.scale.setScalar(.16),Ri.visible=!1,Ri.renderOrder=5,Sn.add(Ri),ph=new li(new ge(1,.75,.45),0,2.5,2),tr.add(ph),Sa=new li(new ge(1,.8,.55),0,45,1.5),Vt.add(Sa),Qf=ig(kS,Sn)}async function $S(){let[i,e,t]=await Promise.all([...["gunhand.json","gunthumb.json"].map(async o=>(await fetch(o)).json()),Y0("revolver/colt75.json")]);rt=t,Sn.add(rt.group),ba=rt.muzzle.z,Ri.position.z=ba-.035;let n=X0(bn,["night"]).night,s=new Set;rt.group.traverse(o=>{o.material&&s.add(o.material)});for(let o of s)o.envMap=n,o.needsUpdate=!0;rg=[...s];let r=ng();Sn.add(new nt(ed(i,!1),r)),jr=new Lt,jr.position.fromArray(e.origin),Sn.add(jr),jr.add(new nt(ed(e,!1),r))}function Ra(){hn&&Wn&&rt&&ff(rt,Sh)&&(pt.t=0)}function bh(){hn&&Wn&&rt&&rt.state.cocked&&K0(rt,Sh)&&(pt.t=0)}function wa(){return hn&&Wn&&rt&&hf(rt,Sh)?(pt.t=0,!0):!1}var QS=i=>i<.025?i/.025:Math.exp(-(i-.025)/.11)*(1+.15*Math.sin((i-.025)*30)*Math.exp(-(i-.025)/.05));function jS(i,e){if(!rt)return;pt.t+=i,pt.kick+=i,J0(rt,i,Sh);let t=rt.state.anim,n=t?.type==="cock";pt.thumb=St(pt.thumb,n&&t.t<.27?1:0,n?22:9,i),pt.aim=St(pt.aim,!t&&!rt.state.cocked&&pt.t>2.5?0:1,4,i),pt.reload=St(pt.reload,t?.type==="reload"?1:0,6,i);for(let c of rg)c.envMapIntensity=.12+.88*mh.intensity;jr&&jr.rotation.set(.55*pt.thumb,-.25*pt.thumb,.35*pt.thumb);let s=QS(pt.kick),r=dd.copy(og);r.y+=.02*pt.aim-.012*(1-pt.aim)+.014*s,r.z+=.04*s,r.x-=ys*.45,r.y+=ya*.45;let o=Dn<J.hp?Xt(1,J.hurt.shake[Math.min(Dn,J.hurt.shake.length-1)],eo):1;if(r.x+=Math.sin(e*.31+1)*.0012+Math.sin(e*9.7)*Math.sin(e*5.3)*5e-4*o,r.y+=Math.sin(e*11.3+.7)*Math.sin(e*6.1)*5e-4*(o-1),r.y+=Math.sin(e*.27+2)*.0012+Math.sin(e*1.3)*8e-4,di.set(0,-.7*(1-pt.aim),-to.aimD),pt.pointT=(pt.pointT??9)+i,pt.pointK=pt.pointT<J.gun.point?pt.pointK??0:St(pt.pointK??0,0,4,i),pt.pointK>.001&&di.lerp(mg,pt.pointK),Lm.lookAt(r,di,KS),Sn.quaternion.setFromRotationMatrix(Lm),Sn.quaternion.multiply(ZS.setFromEuler(Hb.set(.42*s-ya*.6,to.yaw+ys*.5,to.roll-ys*.4))),Sn.position.copy(r),pt.reload>.001){let c=pt.reload*pt.reload*(3-2*pt.reload);Sn.position.lerp(XS,c),Sn.quaternion.slerp(YS,c)}Sn.updateMatrixWorld(!0),jf(Qf),sg(Qf);let a=Math.max(0,1-pt.kick/.06);Ri.visible=a>0,Ri.material.rotation=pt.shots*1.7,Ri.scale.setScalar(.12+.08*a),di.set(0,0,ba-.04),Sn.localToWorld(di),ph.position.copy(di),ph.intensity=30*a,Sa.position.copy(di).applyQuaternion(me.quaternion).add(me.position),Sa.intensity=140*a*a}var ua=new T,_s=new T,td=new T;function Qs(i,e,t,n){let s=i.x-t.x,r=i.y-t.y,o=i.z-t.z,a=s*e.x+r*e.y+o*e.z,c=s*s+r*r+o*o-n*n,l=a*a-c;if(l<0)return 1/0;let h=-a-Math.sqrt(l);return h>0?h:1/0}function eb(){pt.kick=0,pt.shots++,qS.bang(df),ua.copy(me.position),_s.copy(hd?ld:ji).add(td.set((Math.random()-.5)*.012,(Math.random()-.5)*.012,(Math.random()-.5)*.012)).normalize(),hd=!1;let i=1/0,e=null;{[e,i]=pg(ua,_s);let n=Rb(ua,_s);n<i&&(i=n,e="fight")}let t=_s.y<-.001?-ua.y/_s.y:1/0;e&&i<t&&i<80?e==="fight"?vg():gg(e):t<70&&id(td.copy(ua).addScaledVector(_s,t),.6,[.16,.13,.1]),di.set(0,0,ba-.06),Sn.localToWorld(di),di.applyQuaternion(me.quaternion).add(me.position);for(let n=0;n<4;n++)id(di,1.3,[.55,.54,.52],_s);for(let n of Qe)if(!n.dead){let s=Math.hypot(n.mesh.position.x-pe.pos.x,n.mesh.position.z-pe.pos.z);n.startle=Math.max(n.startle||0,dt(1.3-s/30,.3,1)),n.ai.graze=!1,n.ai.t=it(.05,.3),n.ai.flick=1}}var nd=[],Uf=null;function id(i,e,t,n){Uf||(Uf=ag(!1));let s=nd.find(r=>r.life<=0);s||(s={sp:new hs(new ki({map:Uf,transparent:!0,depthWrite:!1})),life:0},Vt.add(s.sp),nd.push(s)),s.life=s.max=e>1?it(1.8,2.6):.7,s.size=e,s.col=t,s.sp.position.copy(i),s.v=new T((Math.random()-.5)*.4,.25+Math.random()*.2,(Math.random()-.5)*.4),n&&s.v.addScaledVector(n,1.5+Math.random()),s.sp.visible=!0}function tb(i){for(let e of nd){if(e.life<=0)continue;e.life-=i;let t=1-e.life/e.max;e.sp.position.addScaledVector(e.v,i),e.v.multiplyScalar(Math.exp(-i*1.6)),e.sp.scale.setScalar(e.size*(.25+.9*Math.sqrt(t)));let n=.04+.35*ae.level+Sa.intensity*.004;e.sp.material.color.setRGB(e.col[0]*n,e.col[1]*n,e.col[2]*n),e.sp.material.opacity=.55*(1-t),e.sp.visible=e.life>0}}function nb(i,e){i.dead=!0,i.deadT=0,i.staring=!1,i.speed=0;let t=Math.cos(i.heading),n=-Math.sin(i.heading);i.fallSide=e.x*t+e.z*n>=0?1:-1,i.mesh.rotation.order="YZX",qe.thud(.25)}function ib(i,e){i.deadT+=e;let t=i.deadT,n=ln(dt(t/.35,0,1)),s=dt((t-.3)/.75,0,1),r=s*s;i.mesh.rotation.y=i.heading,i.mesh.rotation.x=.1*n*(1-s),i.mesh.rotation.z=-i.fallSide*1.45*r,i.mesh.position.y=(i.y0||0)-.12*i.s*n*(1-s)+.2*i.s*r,!i.thudded&&s>=1&&(i.thudded=!0,qe.thud(.6),id(i.mesh.localToWorld(td.set(0,1,0)),.9,[.2,.17,.13]));let o=i.mesh.material.userData.own;o.uPose.value.set(.2*i.fallSide,-.5*n,.1,-.4*n),o.uTail.value=0,o.uGait.value.set(0,0,0,0),i.mesh.updateMatrixWorld();let a=.9*i.s*r,c=Math.cos(i.heading)*i.fallSide*a,l=-Math.sin(i.heading)*i.fallSide*a;i.blk0||(i.blk0=i.blockers.map(h=>[h.x,h.z])),i.blockers.forEach((h,d)=>{h.x=i.blk0[d][0]+c,h.z=i.blk0[d][1]+l}),i.headWorld.set(0,1,1.3).applyMatrix4(i.mesh.matrixWorld)}var mh=new li(new ge(1,.7,.38),1,1.5,2),sd=new li(new ge(1,.52,.2),9,0,2),uh=new Lr(1712176,525828,.12);tr.add(mh,sd,uh);var rd=NS(),sb=RS();Vt.add(rd,ES(),sb);Vt.add(TS());Vt.add(US());var cg=9.5,gi=new li(new ge(1,.82,.6),cg,40,1.4),gh=new li(new ge(1,.52,.2),9,7.5,2);gh.position.copy(wn).add(new T(0,.5,0));var xd=new Vo(new ge(.55,.62,.8),.05);xd.position.set(-20,25,-45);var lg=new Lr(790552,262914,.05);Vt.add(xd,lg);Vt.add(gi,gh);PS(Vt);var ts=new Ol(bn);ts.addPass(new ia(Vt,me));var vd=new ia(tr,Pi);vd.clear=!1;vd.clearDepth=!0;ts.addPass(vd);var wh=new Gs(FS),rb=new Ws(new he(960,540),.55,.3,2.2),hg=new Ws(new he(960,540),.025,1,0),zt=new Gs(BS);ts.addPass(wh);ts.addPass(rb);ts.addPass(hg);ts.addPass(zt);var od=540;function _d(){let i=innerWidth,e=innerHeight,t=Math.min(window.devicePixelRatio||1,od/Math.min(i,e));bn.setPixelRatio(t),bn.setSize(i,e),ts.setPixelRatio(t),ts.setSize(i,e);let n=i/e;me.aspect=n,Pi.aspect=n,me.fov=n>=1.3?60:Math.min(88,Yi.radToDeg(2*Math.atan(Math.tan(Yi.degToRad(40))/n))),Pi.fov=n>=1.3?70:Math.min(95,Yi.radToDeg(2*Math.atan(Math.tan(Yi.degToRad(46))/n))),me.updateProjectionMatrix(),Pi.updateProjectionMatrix(),zt.uniforms.uRes.value.set(Math.round(i*t),Math.round(e*t)),wh.uniforms.uRes.value.copy(zt.uniforms.uRes.value),ti&&ti.setPixel(me,zt.uniforms.uRes.value.y),document.body.classList.toggle("portrait",i<e)}addEventListener("resize",_d);_d();var pe={pos:new T(J.stations[0].x,0,J.standZ),vel:new T,yaw:0,pitch:J.look.pitch,bob:0,stepPhase:0},Cn=new Set,hn=!1,Ms=!1,Ss=Yt,tn={id:null,cx:0,cy:0,x:0,y:0},mi={id:null,x:0,y:0};function yd(){if(!Yt)try{let i=Ii.requestPointerLock&&Ii.requestPointerLock();i&&i.catch&&i.catch(()=>{Ss=!0})}catch{Ss=!0}}document.addEventListener("pointerlockchange",()=>{Ms=document.pointerLockElement===Ii,Ms&&(Ss=!1),!Ms&&hn&&!Yt&&!Ss&&Ea()});document.addEventListener("pointerlockerror",()=>{Ss=!0});document.addEventListener("mousemove",i=>{Ms&&(pe.yaw-=i.movementX*.0022,pe.pitch-=i.movementY*.0022,pe.pitch=dt(pe.pitch,-1.2,1.1))});Ii.addEventListener("pointerdown",i=>{if(hn){if(Yt){Ub(i);return}if(!Yt&&!Ms&&!Ss){yd();return}Yt&&!Wn&&i.clientX<innerWidth*.45&&tn.id===null?(tn.id=i.pointerId,tn.cx=i.clientX,tn.cy=i.clientY,tn.x=tn.y=0,Je.joy.style.left=`${tn.cx}px`,Je.joy.style.top=`${tn.cy}px`,Je.joy.classList.add("show"),Je.knob.style.transform="translate(-50%,-50%)"):mi.id===null&&(mi.id=i.pointerId,mi.x=i.clientX,mi.y=i.clientY);try{Ii.setPointerCapture(i.pointerId)}catch{}}});Ii.addEventListener("pointermove",i=>{if(Yt){Bb(i);return}if(i.pointerId===tn.id){let e=i.clientX-tn.cx,t=i.clientY-tn.cy,n=Math.hypot(e,t),s=56;n>s&&(e*=s/n,t*=s/n),tn.x=e/s,tn.y=t/s,Je.knob.style.transform=`translate(calc(-50% + ${e}px), calc(-50% + ${t}px))`}else if(i.pointerId===mi.id){let e=Yt?.0052:.0042;pe.yaw-=(i.clientX-mi.x)*e,pe.pitch-=(i.clientY-mi.y)*e,pe.pitch=dt(pe.pitch,-1.2,1.1),mi.x=i.clientX,mi.y=i.clientY}});var Md=i=>{if(Yt){Fb(i);return}i.pointerId===tn.id&&(tn.id=null,tn.x=tn.y=0,Je.joy.classList.remove("show")),i.pointerId===mi.id&&(mi.id=null)};Ii.addEventListener("pointerup",Md);Ii.addEventListener("pointercancel",Md);Ii.addEventListener("lostpointercapture",Md);addEventListener("keydown",i=>{if(hn){if(i.code==="Escape"){Ea();return}if((i.code==="KeyD"||i.code==="ArrowRight")&&!i.repeat){Td(),i.preventDefault();return}if(i.code==="KeyR"&&!i.repeat){wa();return}if(i.code==="KeyE"&&!i.repeat){rt&&rt.state.cocked?Ed():Ah();return}if(!["KeyW","KeyA","KeyS","ArrowUp","ArrowDown","ArrowLeft"].includes(i.code)){if(i.code==="KeyF"){i.repeat||ro();return}if(i.code==="Space"){Eh=!0,i.preventDefault();return}if(Wn&&i.code==="KeyE"&&!i.repeat){Ra();return}if(Wn&&i.code==="KeyR"&&!i.repeat){wa();return}Cn.add(i.code),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault()}}});addEventListener("keyup",i=>{Cn.delete(i.code),i.code==="Space"&&(Eh=!1)});addEventListener("blur",()=>Cn.clear());var Qe=[];function ob(i){let t=(n,s,r)=>{let o=i.x-n,a=i.z-s,c=Math.hypot(o,a),l=r+.25;c<l&&c>1e-5&&(i.x=n+o/c*l,i.z=s+a/c*l)};for(let n=0;n<3;n++){t(wn.x,wn.z,.62);for(let s of ra){let r=sa.uPC.value;t(s.x+Math.round((r.x-s.x)/Ut)*Ut,s.z+Math.round((r.y-s.z)/Ut)*Ut,s.r)}for(let s of Qe){for(let r of s.blockers)t(r.x,r.z,r.r);t(s.headWorld.x,s.headWorld.z,.24*s.s)}}}var Dm=new T(0,1.08,.58),Nm=new T(0,1.22,1.03),Um=new vt,Fm=new $t;function Bm(i,e,t){let n=i.mesh.material.userData.own.uPose.value;return t.copy(e.p).sub(Nm).applyQuaternion(Um.setFromEuler(Fm.set(-n.w*e.wh,n.z*e.wh,0,"YXZ"))).add(Nm),t.sub(Dm).applyQuaternion(Um.setFromEuler(Fm.set(-n.y*e.wn,n.x*e.wn,0,"YXZ"))).add(Dm),t.applyMatrix4(i.mesh.matrixWorld)}var fa=new T;function Ff(i,e){fa.copy(e),i.mesh.worldToLocal(fa);let t=fa.x,n=fa.y-1.16,s=fa.z-.98;return[dt(Math.atan2(t,s),-1.35,1.35),dt(Math.atan2(n,Math.hypot(t,s)),-.6,.5)]}function ug(i,e,t){if(i.dead){ib(i,e);return}let n=i.ai;if(i.staring){let[o,a]=Ff(i,me.position);n.yaw=St(n.yaw,o,7,e),n.pitch=St(n.pitch,a,7,e)}else if(i.alarm>.05){let[o]=Ff(i,me.position),a=i.turnLead||0;n.yaw=St(n.yaw,Math.abs(a)>.15?a:dt(o,-.6,.6),3,e),n.pitch=St(n.pitch,-.08,3,e),n.t=Math.min(n.t,1.5)}else if((i.stir||0)>.15||(i.speed||0)>.25)n.yaw=St(n.yaw,i.turnLead||0,3,e),n.pitch=St(n.pitch,(i.speed||0)>.25?-.2:-.06,2.5,e),n.t=Math.min(n.t,1.5);else{let[o,a]=Ff(i,me.position);n.t-=e,n.t<=0&&(Math.random()<.15?(n.graze=!0,n.tYaw=it(-.35,.35),n.t=it(3,6)):(n.graze=!1,n.tYaw=it(-.25,.25),n.tPitch=it(-.15,.08),n.t=it(2.5,6))),n.yaw=St(n.yaw,n.graze?n.tYaw:o+n.tYaw,1.4,e),n.pitch=St(n.pitch,n.graze?-1.05:a+n.tPitch,1.1,e)}let s=i.mesh.material.userData.own,r=(i.gait||0)*.07*Math.sin((i.gaitPhase||0)*Math.PI*4);s.uPose.value.set(n.yaw*.45,n.pitch*.4+r,n.yaw*.55,n.pitch*.6+r*.5),n.flick=Math.max(0,n.flick-e*1.8),Math.random()<e*.12&&(n.flick=1),s.uTail.value=.1*Math.sin(t*1.1+i.phase)+.5*n.flick*Math.sin(t*9+i.phase),i.headWorld.set(Math.sin(n.yaw)*.75,1,.58+Math.cos(n.yaw)*.75).applyMatrix4(i.mesh.matrixWorld);{let o=i.mesh.geometry.userData;Bm(i,o.eye,i.eyeWorld),Bm(i,o.nose,i.noseWorld)}}var ga=1,Bf=new T;function ab(i){let e=99;ji.y<-.05&&(e=me.position.y/-ji.y);for(let n of Qe)for(let s of n.blockers){Bf.set(s.x,1*n.s+(n.y0||0),s.z).sub(me.position);let r=Bf.length();Math.acos(dt(Bf.dot(ji)/r,-1,1))<.7&&(e=Math.min(e,Math.max(.3,r-s.r)))}let t=dt(Math.pow(e/2.4,1.2),.3,1);ga=St(ga,t,t<ga?6:2.5,i)}var ae={on:!0,level:1,oil:1,mode:"on",t:0,gustT:-1,gustTimer:it(35,70),sputter:0,matches:J.matches,outOnce:!1},Eh=!1,Sd=!1,js=!1,xa=0,eh=0,Nn=!1,va=0,no=0;function ni(i,e=2.6){Je.sub.textContent=i,Je.sub.classList.add("show"),no=e}function cb(){return Math.hypot(pe.pos.x-wn.x,pe.pos.z-wn.z)<_S}function ad(i){ae.mode==="off"||ae.mode==="dying"||(ae.mode="dying",ae.t=0,ae.cause=i,!ae.outOnce&&ae.matches>0&&(ae.outOnce=!0,setTimeout(()=>ni(Yt?J.lines.match:J.lines.matchPC,3.2),1600)),i!=="hand"&&qe.puff())}function ro(){if(hn){if(ae.mode==="on"){ae.mode="turning",ae.t=0,qe.click(),!ae.outOnce&&ae.matches>0&&(ae.outOnce=!0,setTimeout(()=>ni(Yt?J.lines.match:J.lines.matchPC,3.2),1400));return}if(ae.mode==="off"){ae.matches>0?(ae.matches--,ae.mode="up",ae.t=0):ni(J.lines.noMatch,2.4);return}}}function lb(i){if(ae.t+=i,ae.mode==="on"){let t=ae.oil>.2?1:.35+.65*(ae.oil/.2);ae.oil<.12&&Math.random()<i*3&&(ae.sputter=1,qe.sputter()),ae.sputter=Math.max(0,ae.sputter-i*5),t*=1-.5*ae.sputter,ae.gustT>=0&&(t*=.55+.45*Math.abs(Math.sin(ae.gustT*23)*Math.sin(ae.gustT*7))),ae.level=St(ae.level,t,18,i),ae.oil<=0&&ad("oil")}else if(ae.mode==="turning")ae.level=Math.max(0,1-ae.t/.6),ae.t>=.6&&(ae.mode="off",ae.level=0,qe.puff());else if(ae.mode==="up")ae.t>=.35&&ae.t-i<.35&&qe.whoosh(),ae.level=ae.t<.35?0:Math.min(1,(ae.t-.35)/.6),ae.t>=.95&&(ae.mode="on",ae.level=1);else if(ae.mode==="dying"){let e=ae.cause==="oil"?1.6:.5;ae.level=Math.max(0,(1-ae.t/e)*(Math.random()<.5?1:.3)),ae.t>=e&&(ae.mode="off",ae.level=0)}else ae.mode==="relight"&&(ae.t>=1.05&&ae.t-i<1.05&&(qe.whoosh(),ae.oil=1),ae.level=ae.t<1.05?0:Math.min(1,(ae.t-1.05)/.7),ae.t>=2.2&&(ae.mode="on",ae.level=1));ae.gustTimer-=i,ae.gustTimer<=0&&ae.gustT<0&&(ae.gustT=0,ae.gustTimer=it(45,110),qe.gust()),ae.gustT>=0&&(ae.gustT+=i,ae.gustT>2.3&&(ae.gustT=-1,ae.mode==="on"&&Math.random()<.5&&ad("wind"))),ma.uLevel.value=ae.level,ma.uBend.value=St(ma.uBend.value,ae.gustT>=0?Math.sin(ae.gustT*9)*1.6+1.2:0,8,i)}Je.lampBtn&&Je.lampBtn.addEventListener("click",i=>{i.stopPropagation(),ro()});var hb=i=>{i.preventDefault(),i.stopPropagation(),js=!0},Of=i=>{i.stopPropagation(),js=!1};for(let[i,e]of[[Je.cockBtn,Ra],[Je.fireBtn,bh],[Je.reloadBtn,wa]])i&&i.addEventListener("pointerdown",t=>{t.stopPropagation(),t.preventDefault(),e()});Je.raiseBtn&&(Je.raiseBtn.addEventListener("pointerdown",hb),Je.raiseBtn.addEventListener("pointerup",Of),Je.raiseBtn.addEventListener("pointercancel",Of),Je.raiseBtn.addEventListener("pointerleave",Of));document.addEventListener("mousedown",i=>{hn&&(Yt||!(Ms||Ss)||(i.button===0?rt&&rt.state.cocked?wd(0,0):xh(0,0):i.button===2&&(rt&&rt.state.cocked?Ed():Ah())))});document.addEventListener("mouseup",i=>{i.button===2&&(Sd=!1)});document.addEventListener("contextmenu",i=>i.preventDefault());var Js=0,Ci=0,fg=-1;var ub=1/0,GA=new T,WA=new T,qA=new T,XA=new T,YA=new T,ZA=new T;function fb(i){let e=i.distanceTo(gi.position);return gi.intensity/Math.pow(Math.sqrt(e*e+.81),1.4)}var X={i:0,walking:!1,t:0,dur:1,x0:0,x1:0,readyAt:1/0,lastAct:0,misses:0,toldNext:!1,nextHintAt:-1,finishAt:-1,endT:-1},gn=!1,_a=new T,Om=new T,cd=new T,dg=()=>J.stations.length-1,zf=i=>Qe.every(e=>e.station!==i||e.counted),bd=()=>{!ie.on&&!X.scaring&&ni(Yt?J.lines.count:J.lines.countPC,3.2)},zm=()=>ni(Yt?J.lines.next:J.lines.nextPC,3.2);function db(i){let e=J.seed,t=()=>(e=e*16807%2147483647)/2147483647,n=[],s=(a,c,l,h)=>[.55,0,-.6].map(d=>({x:a+Math.sin(l)*d*.92,z:c+Math.cos(l)*d*.92,r:.37*h})),r=a=>n.some(c=>c.some(l=>a.some(h=>Math.hypot(l.x-h.x,l.z-h.z)<l.r+h.r+.04))),o=(a,c,l,h)=>{let d=Xt(J.scale[0],J.scale[1],t()),u=Math.atan2(J.stations[a].x-c,J.standZ-l),f=u;for(let S=0;S<10&&(f=u+(S<9?(t()-.5)*2*J.front.turn:0),!!r(s(c,l,f,d)));S++);n.push(s(c,l,f,d));let m=Xt(J.coat[0],J.coat[1],t())*(h?J.backDark:1),_=Math.min(1,m+.06+t()*.1),p=Qe.length,g=new nt(i[Math.floor(t()*i.length)],bS(m,_,p*1.7)),y=Math.sin(f)*.9,w=Math.cos(f)*.9,b=Qi(c+y,l+w),v=J.lean*Math.atan2(Qi(c-y,l-w)-b,1.8),M=b+.9*Math.sin(v);g.position.set(c,M,l),g.rotation.order="YXZ",g.rotation.y=f,g.rotation.x=v,g.scale.setScalar(d),Vt.add(g),g.updateMatrixWorld(!0);let x=[.55,0,-.6].map(S=>{let C=new T(0,0,S*.92).applyMatrix4(g.matrixWorld);return{x:C.x,z:C.z,r:.37*d}});Qe.push({mesh:g,s:d,phase:p*1.7,blockers:x,counted:!1,lit:0,staring:!1,headWorld:new T,station:a,y0:M,back:h,eyeWorld:new T,noseWorld:new T,aimPoints:[],heading:f,speed:0,gait:0,gaitPhase:Math.random(),alarm:0,turnVel:0,turnLead:0,wx:0,wz:0,stir:0,stirGoal:0,press:0,pdx:0,pdz:0,shoveX:0,shoveZ:0,caps:null,startle:0,dead:!1,ai:{t:it(0,3),yaw:0,pitch:0,tYaw:0,tPitch:0,flick:0,graze:!1}})};J.stations.forEach((a,c)=>{let l=a.rows[0],h=Array.from({length:l-1},()=>Xt(J.front.gap[0],J.front.gap[1],t())),d=a.x-h.reduce((m,_)=>m+_,0)/2,u=[],f=J.front.z;for(let m=0;m<l;m++)u.push(d),o(c,d,J.front.z+(t()-.5)*J.front.jitterZ,!1),d+=h[m]||0;a.rows.slice(1).forEach((m,_)=>{let p=J.front.z-J.rowBack[_],g=(J.standZ-p)/(J.standZ-f),y=u.slice(1).map((b,v)=>(b+u[v])/2);u=(y.length>=m?y.slice(Math.floor((y.length-m)/2),Math.floor((y.length-m)/2)+m).map(b=>a.x+(b-a.x)*g):Array.from({length:m},(b,v)=>a.x-m*J.rowGap/2+(v+.5)*J.rowGap)).map(b=>b+(t()-.5)*2*J.rowJitter[0]),f=p;for(let b of u)o(c,b,p+(t()-.5)*2*J.rowJitter[1],!0)})})}function xh(i,e,t){if(ie.on||!hn||gn||Nn||X.walking||X.endT>=0||performance.now()<X.readyAt)return;_a.copy(me.position),Om.set(i,e,.5).unproject(me).sub(_a).normalize();let[n,s]=pg(_a,Om);if((!n||s>30)&&t&&(n=pb(i,e)),!n||s>30&&!t){++X.misses>=J.hint.misses&&(X.misses=0,bd());return}X.misses=0,X.lastAct=performance.now(),!n.counted&&(n.counted=!0,Ci++,Ci<=J.told?ni(`${Rm[Ci-1]}\u2026`,J.saySecs):ni(`\u2026${Rm[Ci-1]}.`,3),Ci===J.told+1&&!X.toldCock&&(X.toldCock=!0,setTimeout(()=>ni(Yt?J.lines.cock:J.lines.cockPC,3.4),3200)))}function pg(i,e){let t=1/0,n=null;for(let s of Qe)if(!(s.dead||s.gone)){if(s.mon){for(let r of s.mon.eyes)if(r.visible){let o=Qs(i,e,r.position,.12);o<t&&(t=o,n=s)}}if(!(s.mon&&s.mon.clue===4)){for(let r of s.blockers){let o=Qs(i,e,cd.set(r.x,s.y0+.95*s.s,r.z),.38*s.s);o<t&&(t=o,n=s)}for(let[r,o]of[[0,.15],[.5,.15],[1,.14]]){let a=Qs(i,e,cd.copy(s.eyeWorld).lerp(s.noseWorld,r),o*s.s);a<t&&(t=a,n=s)}}}return[n,t]}var Hm=new T;function pb(i,e){let t=innerWidth,n=innerHeight,r=Math.min(t,n)*J.swipe.reach,o=null;for(let a of Qe)if(!a.dead&&!a.gone)for(let c of a.mon?a.mon.clue===4?a.mon.eyes.map(l=>l.position):[...a.mon.eyes.filter(l=>l.visible).map(l=>l.position),Hm.set(a.blockers[1].x,a.y0+.95*a.s,a.blockers[1].z)]:[a.eyeWorld,a.noseWorld,Hm.set(a.blockers[1].x,a.y0+.95*a.s,a.blockers[1].z)]){let l=cd.copy(c).project(me);if(l.z>1)continue;let h=Math.hypot((l.x-i)*t/2,(l.y-e)*n/2);h<r&&(r=h,o=a)}return o}var It=null,mb=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Us(i)})();function gb(){let i=+new URLSearchParams(location.search).get("clue"),e=J.monster,t=e.clues.includes(i)?i:e.clues[Math.floor(Math.random()*e.clues.length)],n=pd?new URLSearchParams(location.search).get("at"):null,s=Qe.filter(l=>(J.monster.anyRow||!l.back)&&(n===null||l.station===+n)),r=s[Math.floor(Math.random()*s.length)];r.mesh.material.userData.own.uEyeOff.value=1,t===4&&(r.mesh.visible=!1);let o=[0,1,2].map(()=>{let l=new hs(new ki({map:mb,blending:Jn,depthWrite:!1,transparent:!0,fog:!1}));return l.scale.setScalar(e.glint),Vt.add(l),l});o[2].visible=t===7;let a=J.scare.forms[t],c=a[Math.floor(Math.random()*a.length)];r.mon={clue:t,eyes:o,form:c,M:null},It=r,pm(`../monsters/data/${c}.json`,c,Ji.uTime).then(l=>{l.twist=(Math.random()<.5?-1:1)*J.fight.twist,l.hang=J.fight.hang,r.mon.M=l,Vt.add(l.root)}).catch(l=>console.warn("monster",l))}var Hf=new T,kf=new T(0,1,0),xb=new T;function vb(){if(!It||It.gone)return;let i=It,e=i.mon,t=J.monster,n=i.mesh.material.userData.own.uPose.value,s=i.mesh.rotation.y+n.x+n.z;Hf.set(Math.cos(s),0,-Math.sin(s));let r=e.clue===2?t.wide:t.eye,o=e.clue===1?t.high:0;e.eyes[0].position.copy(i.eyeWorld).addScaledVector(Hf,-r).addScaledVector(kf,o),e.eyes[1].position.copy(i.eyeWorld).addScaledVector(Hf,r).addScaledVector(kf,o),e.eyes[2].position.copy(i.eyeWorld).addScaledVector(kf,t.third);for(let l of e.eyes)l.position.add(xb.copy(me.position).sub(l.position).setLength(.1));let a=i.eyeWorld.distanceTo(gi.position),c=.1*(Ji.uEyeGain.value/Math.pow(Math.max(a,1.3),Ji.uEyeFall.value)+Ji.uEyeSelf.value);for(let l of e.eyes)l.material.color.setScalar(c)}var Dn=J.hp,Mt=null,km=0,er=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function _b(){let i=It,e=i.mon.M;i.gone=!0,i.mesh.visible=!1;for(let t of i.mon.eyes)t.visible=!1;if(!e){Th();return}X.scaring=!0,Je.sub.classList.remove("show"),no=0,e.own.uLightP.value.copy(gi.position),_m(e,new T(i.mesh.position.x,i.y0,i.mesh.position.z),new vt().setFromEuler(new $t(0,Math.atan2(me.position.x-i.mesh.position.x,me.position.z-i.mesh.position.z),0)),{d:J.scare.d,travel:J.fight.leap.forms.includes(e.id)?void 0:J.scare.travel,leap:J.fight.leap.forms.includes(e.id)?J.fight.leap:null})}function yb(i){let e=It&&It.mon.M;if(!X.scaring||!e)return;e.own.uLightP.value.copy(gi.position);let t=ym(e,me,i,{roar:()=>{Mt&&(Mt.freeze("none"),Mt.sting(J.scare.sting),Mt.pounce(e.info.roar)),er(J.scare.buzz),X.recoilT=0},cut:()=>{Mt&&(Mt.snap(),Mt.cut({muffle:!1})),er(220),Th()},back:()=>{Mt&&Mt.restore(),qe.hush(!1),X.hushed=!1},done:()=>{X.scaring=!1,X.shake=0,zt.uniforms.uFade.value=0,fh.intensity=0,(Dn<=0||X.endAfter)&&(X.endT=0)}});t&&(zt.uniforms.uFade.value=t.fade,X.shake=t.shake*J.scare.shake,fh.intensity=t.fade<1?J.scare.light:0,fh.position.copy(me.position).addScaledVector(ji,.15).addScaledVector(me.up,-.2))}var Kr=new Wt(2,2,{depthBuffer:!0});Kr.depthTexture=new ci(2,2);zt.uniforms.uBars.value=J.letterbox;function Mb(){let i=It?.mon.M,e=!!i&&i.root.visible&&(X.scaring||ie.on&&ie.phase==="eat")&&Mm(i);if(zt.uniforms.uMaskOn.value=e?1:0,!e)return;let t=Math.max(2,zt.uniforms.uRes.value.x>>1),n=Math.max(2,zt.uniforms.uRes.value.y>>1);(Kr.width!==t||Kr.height!==n)&&Kr.setSize(t,n),i.mesh.layers.enable(1);let s=me.layers.mask;me.layers.set(1),bn.setRenderTarget(Kr),bn.clear(!0,!0,!1),bn.render(Vt,me),bn.setRenderTarget(null),me.layers.mask=s,zt.uniforms.tMask.value=Kr.depthTexture}var fh=new li(new ge(1,.82,.6),0,3,2);Vt.add(fh);function Th(){Dn=Math.max(0,Dn-1),Dn<=0&&!X.scaring&&(X.endT=0)}var eo=0;function Sb(i){let e=J.hurt,t=Math.min(Dn,e.bpm.length),n=Dn<J.hp&&Dn>0;if(eo=St(eo,n?1:0,1.5,i),zt.uniforms.uHurt.value=n?e.edge[t]*eo:0,!n||!qe.ctx||gn)return;let s=qe.ctx.currentTime;s>=km&&(km=s+60/e.bpm[t],qe.heart(e.heart[t]*eo))}var ld=new T,mg=new T,bb=new vt,hd=!1;function wd(i,e){return!rt||!rt.state.cocked||rt.state.anim||X.scaring||X.walking||gn||Nn?!1:(_a.copy(me.position),ld.set(i,e,.5).unproject(me).sub(_a).normalize(),hd=!0,mg.copy(ld).applyQuaternion(bb.copy(me.quaternion).invert()).multiplyScalar(to.aimD),pt.pointK=1,pt.pointT=0,X.lastAct=performance.now(),bh(),!0)}function Ah(){!rt||X.scaring||gn||Nn||(Ra(),X.lastAct=performance.now(),X.toldFire||(X.toldFire=!0,setTimeout(()=>ni(Yt?J.lines.fire:J.lines.firePC,3.4),500)))}function Ed(){rt&&rt.state.cocked&&!rt.state.anim&&(rt.state.cocked=!1,pa.click(.3,2600),pt.t=0)}function wb(){X.toldReload||(X.toldReload=!0,setTimeout(()=>ni(Yt?J.lines.reload:J.lines.reloadPC,3.4),400))}function gg(i){if(i.mon){Tb(i);return}nb(i,_s)}var ie={on:!1,phase:"",t:0,hits:0,pos:new T,from:new T,to:new T,M:null,endT:-1},KA=new vt,Eb=new $t,In=new T,Vm=new T;function Tb(i){let e=i.mon.M;if(i.gone=!0,Je.sub.classList.remove("show"),no=0,!e){i.mesh.visible=!1;for(let t of i.mon.eyes)t.visible=!1;return}Object.assign(ie,{on:!0,phase:"morph",t:0,hits:0,M:e,endT:-1,cow:i,step:0}),ie.pos.set(i.mesh.position.x,Qi(i.mesh.position.x,i.mesh.position.z),i.mesh.position.z),ie.home=i.mesh.position.clone(),e.own.uAppear.value=0,e.root.visible=!0,xg(),Ab(),er(120);for(let t of Qe)t!==i&&!t.dead&&!t.gone&&Pb(t,ie.pos)}function xg(i=0,e=0,t=0){let n=ie.M,s=Math.atan2(me.position.x-ie.pos.x,me.position.z-ie.pos.z),r=ie.phase==="walk"&&ie.heading!==void 0?ie.heading:s;n.root.quaternion.setFromEuler(Eb.set(t,r,e,"YXZ")),n.root.position.copy(ie.pos),n.root.position.y+=i}function Ab(){let i=Mt?.input(),e=qe.twists;if(!i||!e?.length){Mt&&Mt.gape(ie.M.id);return}let t=qe.ctx.createBufferSource(),n=qe.ctx.createGain();t.buffer=e[Math.floor(Math.random()*e.length)],n.gain.value=J.fight.twistSound.gain,t.connect(n).connect(i),t.start()}function vg(){let i=J.fight;if(ie.hits++,er(60),Mt&&Mt.gape(ie.M.id),ie.hits>=i.shots){ie.phase="die",ie.t=0;return}In.copy(ie.pos).sub(me.position).setY(0).normalize(),ie.from.copy(ie.pos),ie.to.copy(ie.pos).addScaledVector(In,i.push),ie.phase="pushed",ie.t=0}function Rb(i,e){if(!ie.on||ie.phase==="die"||ie.phase==="eat")return 1/0;let t=ie.M;return Vm.fromArray(t.meta.headPivot).applyQuaternion(t.root.quaternion).add(t.root.position),Math.min(Qs(i,e,Vm,.4),Qs(i,e,In.set(0,.5*t.meta.height,0).add(t.root.position),.6))}function Cb(i,e){if(!ie.on){if(ie.endT>=0&&(ie.endT+=i)>J.fight.back){ie.endT=-1;for(let c of Qe)!c.dead&&!c.gone&&Ib(c)}return}let t=J.fight,n=ie.M;if(ie.t+=i,n.own.uLightP.value.copy(gi.position),ie.phase==="eat"){let c=Am(n,me,i,{freeze:()=>{Mt&&Mt.freeze(n.info.roar)},roar:()=>{Mt&&Mt.pounce(n.info.roar),er(90)},black:()=>{Mt&&Mt.bite("gulp"),er([260,120,90]),Th(),n.root.visible=!1,ie.wakeT=0}});c&&(zt.uniforms.uFade.value=c.fade,X.shake=c.shake),ie.wakeT!==void 0&&(ie.wakeT+=i)>t.wake&&X.endT<0&&(Dn>0&&(Je.end.querySelector("h1").textContent=J.lines.morningTitle,Je.end.querySelector(".sub").textContent=J.lines.morning),ie.on=!1,X.endT=2.4,zt.uniforms.uFade.value=1);return}Sm(n,i,e);let s=n.id==="m3"?t.crawl:1,r=0,o=0,a=0;if(ie.phase==="morph"){let c=dt(ie.t/t.morph,0,1),l=ie.cow;l.mesh.material.userData.own.uGone.value=ln(dt(c*1.15,0,1)),l.mesh.position.set(ie.home.x+(Math.random()-.5)*.05*c,ie.home.y+(Math.random()-.5)*.03*c,ie.home.z+(Math.random()-.5)*.05*c);for(let h of l.mon.eyes)h.material.opacity=1-ln(dt(c*2,0,1));if(n.own.uAppear.value=ln(dt((c-.15)/.85,0,1)),n.root.scale.set(1,.75+.25*ln(c),1),X.shake=.25*c,n.own.uHeadRot.value.z+=n.twist*ln(dt((c-.4)/.5,0,1)),n.own.uHeadRot.value.y+=n.hang*ln(c),c>=1){l.mesh.visible=!1;for(let h of l.mon.eyes)h.visible=!1;n.own.uAppear.value=1,ie.phase="walk",ie.t=0,X.shake=0,Mt&&Mt.pounce(n.info.roar,J.fight.shotRoar),er(250)}}else if(ie.phase==="walk"){let c=t.gait,l=t.leap,h=n.id==="m5"&&ae.level>t.shadowLight,d=n.id==="m3"?.5:1,u=l.forms.includes(n.id);In.copy(me.position).sub(ie.pos).setY(0);let f=In.length();if(In.normalize(),f<=(u?l.from:l.tallFrom)){ie.phase="eat",ie.t=0,n.own.uStrideAmt.value=0,wm(n,{leap:u?l:null,run:!0,d:t.face});return}ie.stumbleIn=(ie.stumbleIn??it(...c.stumble))-i,ie.stumbleIn<0&&(ie.stumbleIn=it(...c.stumble),ie.stumbleT=c.stumbleTime,ie.whip=(Math.random()<.5?-1:1)*c.whip);let m=(ie.stumbleT=Math.max(0,(ie.stumbleT??0)-i))>0;ie.speed=h?0:md(ie.speed??0,t.walk*s*Xt(c.rush,1,dt((f-1)/4,0,1)),t.walk*s/t.accel*i);let _=ie.speed*(1-c.surge+2*c.surge*Math.sin(ie.step)**2)*(m?.35:1);ie.heading=Math.atan2(In.x,In.z)+Math.sin(ie.step*.35)*c.weave*dt((f-1.5)/3,0,1),ie.pos.x+=Math.sin(ie.heading)*_*i,ie.pos.z+=Math.cos(ie.heading)*_*i,ie.pos.y=Qi(ie.pos.x,ie.pos.z);let p=_>.05?1:0,g=ie.step;ie.step+=_*i/t.stride*Math.PI,r=Math.abs(Math.sin(ie.step))*.08*d*p-(m?.06:0),o=Math.sin(ie.step)*.07*p+(m?ie.whip*.2:0),a=(c.lean*Math.min(1,_/t.walk)+.05*Math.sin(ie.step*2))*d*p+(m?.2:0),n.own.uStride.value=ie.step,n.own.uStrideAmt.value=St(n.own.uStrideAmt.value,c.legs*d*p,8,i),ie.lookYaw=Math.atan2(me.position.x-ie.pos.x,me.position.z-ie.pos.z)-ie.heading;let y=Math.atan2(Math.sin(ie.lookYaw),Math.cos(ie.lookYaw));n.own.uHeadRot.value.x=dt(y,-.7,.7)+.3*n.own.uHeadRot.value.x+(m?ie.whip:0),n.own.uHeadRot.value.y=.3*n.own.uHeadRot.value.y+Math.sin(ie.step*2)*.06*p,n.own.uHeadRot.value.z=.3*n.own.uHeadRot.value.z+n.twist+Math.sin(ie.step)*.08*p,n.own.uHeadRot.value.y+=n.hang,n.own.uJaw.value+=c.gape*(.6+.4*Math.sin(ie.step*2))*p,Math.floor(g/Math.PI)!==Math.floor(ie.step/Math.PI)&&p&&qe.thud(.16*d)}else if(ie.phase==="pushed"){let c=dt(ie.t/.15,0,1);n.own.uStrideAmt.value=St(n.own.uStrideAmt.value,0,10,i),n.own.uHeadRot.value.x+=.4*(1-c),n.own.uHeadRot.value.z+=n.twist,n.own.uHeadRot.value.y+=n.hang,ie.pos.lerpVectors(ie.from,ie.to,1-(1-c)**3),ie.pos.y=Qi(ie.pos.x,ie.pos.z),a=-.2*(1-c*.5),ie.t>=.15+t.stagger&&(ie.phase="walk",ie.t=0)}else if(ie.phase==="die"){let c=dt(ie.t/t.die,0,1);ie.pos.y=Qi(ie.pos.x,ie.pos.z)-2*c*c,n.own.uJaw.value=.6,n.own.uStrideAmt.value=0,c>=1&&(n.root.visible=!1,ie.on=!1,ie.endT=0,X.shake=0)}ie.phase!=="eat"&&xg(r,o,a)}function Pb(i,e){i.home??(i.home={x:i.mesh.position.x,z:i.mesh.position.z,yaw:i.heading}),In.set(i.mesh.position.x-e.x,0,i.mesh.position.z-e.z),In.lengthSq()<1e-4&&In.set(1,0,0),In.normalize(),i.walk={from:new he(i.mesh.position.x,i.mesh.position.z),to:new he(i.mesh.position.x+In.x*it(...J.fight.scatter),i.mesh.position.z+In.z*it(...J.fight.scatter)),t:0,end:null},i.walk.dur=i.walk.from.distanceTo(i.walk.to)/J.fight.scatterSpeed}function Ib(i){i.home&&(i.walk={from:new he(i.mesh.position.x,i.mesh.position.z),to:new he(i.home.x,i.home.z),t:0,end:i.home.yaw},i.walk.dur=Math.max(.5,i.walk.from.distanceTo(i.walk.to)/J.fight.scatterSpeed))}function Lb(i){for(let e of Qe){let t=e.walk;if(!t||e.dead)continue;t.t+=i;let n=dt(t.t/t.dur,0,1),s=Xt(t.from.x,t.to.x,ln(n)),r=Xt(t.from.y,t.to.y,ln(n)),o=Math.atan2(t.to.x-t.from.x,t.to.y-t.from.y),a=n<1?o:t.end??o;e.heading=e.heading+Math.atan2(Math.sin(a-e.heading),Math.cos(a-e.heading))*Math.min(1,i*5);let c=Math.sin(e.heading)*.9,l=Math.cos(e.heading)*.9,h=Qi(s+c,r+l),d=J.lean*Math.atan2(Qi(s-c,r-l)-h,1.8);e.y0=h+.9*Math.sin(d),e.mesh.position.set(s,e.y0,r),e.mesh.rotation.y=e.heading,e.mesh.rotation.x=d,e.mesh.updateMatrixWorld(!0),e.blockers.forEach((f,m)=>{let _=In.set(0,0,[.55,0,-.6][m]*.92).applyMatrix4(e.mesh.matrixWorld);f.x=_.x,f.z=_.z});let u=n<1;e.gait=St(e.gait||0,u?1:0,6,i),e.gaitPhase=(e.gaitPhase||0)+i*J.fight.scatterSpeed/1.45*e.gait,e.mesh.material.userData.own.uGait.value.set(e.gaitPhase,e.gait,0,0),!u&&e.gait<.02&&(e.walk=null,t.end!==null&&(e.home=null))}}function Td(){if(ie.on||!hn||gn||Nn||X.walking||X.endT>=0||performance.now()<X.readyAt)return;if(X.lastAct=performance.now(),X.toldNext=!0,X.nextHintAt=-1,X.passed){X.scareAt=Math.min(X.scareAt,performance.now()+300);return}let i=It&&!It.gone&&!ie.on&&It.station===X.i;if(X.i===dg()){if(i){X.passed=!0,X.endAfter=!0,X.scareAt=performance.now()+it(...J.scare.lastWait)*1e3;return}X.endT=0;return}i&&(X.passed=!0),X.fakeAt&&(X.fakeEnd&&(qe.hush(!1),Mt&&Mt.restore()),X.fakeAt=0,X.fakeEnd=0),X.walking=!0,X.t=0,X.x0=pe.pos.x,X.x1=J.stations[X.i+1].x,X.dur=Math.abs(X.x1-X.x0)/J.walk.speed}function Db(i){let e=0;if(X.walking&&!X.scaring){X.t+=i;let o=Math.min(1,X.t/X.dur),a=Xt(X.x0,X.x1,ln(o));e=Math.abs(a-pe.pos.x)/Math.max(i,.001),pe.pos.x=a,o>=1&&(X.walking=!1,X.i++,X.lastAct=performance.now(),X.passed&&!X.scareAt?X.scareAt=performance.now()+it(...J.scare.wait)*1e3:Math.random()<J.scare.fake.chance&&(X.fakeAt=performance.now()+it(...J.scare.wait)*1e3))}if(Yt){let o=X.walking?-J.walk.turn*Math.sqrt(Math.sin(Math.PI*Math.min(1,X.t/X.dur))):0;pe.yaw=St(pe.yaw,o,6,i),pe.pitch=St(pe.pitch,J.look.pitch,6,i)}let t=Math.sin(pe.yaw),n=Math.cos(pe.yaw),s=pe.stepPhase;pe.stepPhase+=i*e*4.4,Math.floor(s/Math.PI)!==Math.floor(pe.stepPhase/Math.PI)&&e>.3&&qe.step();let r=dt(e/1.5,0,1);if(me.position.set(pe.pos.x+Math.cos(pe.stepPhase)*.012*r*n,gd+_g+Math.abs(Math.sin(pe.stepPhase))*.025*r,pe.pos.z-Math.cos(pe.stepPhase)*.012*r*t),$m(me.position.x,me.position.z),me.rotation.set(pe.pitch,pe.yaw,0),X.recoilT!==void 0){X.recoilT+=i;let o=J.scare.recoil,a=X.recoilT,c=a<.06?a/.06:Math.exp(-(a-.06)/o.time);me.rotation.x+=o.pitch*c,me.position.addScaledVector(ji,-o.back*c),c<.01&&(X.recoilT=void 0)}if(X.shake>0){let o=X.shake*.02;me.position.x+=(Math.random()-.5)*o,me.position.y+=(Math.random()-.5)*o,me.rotation.z+=(Math.random()-.5)*o*2.5}return me.updateMatrixWorld(!0),me.getWorldDirection(ji),e}var _g=0,yg=1;function Nb(i){let e=performance.now(),t=dg();if(X.endT>=0){X.endT+=i,zt.uniforms.uFade.value=dt(X.endT/2.2,0,1),X.endT>2.4&&!Nn&&(Nn=!0,Dn<=0&&(Je.end.querySelector("h1").textContent=J.lines.deadTitle,Je.end.querySelector(".sub").textContent=J.lines.dead),Je.end.classList.add("show"),document.pointerLockElement&&document.exitPointerLock());return}if(yb(i),Sb(i),X.fakeAt&&!X.passed&&!X.scaring&&!gn&&(!X.fakeEnd&&e>=X.fakeAt&&(X.fakeEnd=e+it(...J.scare.fake.quiet)*1e3,qe.hush(!0),Mt&&Mt.freeze("none")),X.fakeEnd&&e>=X.fakeEnd&&(X.fakeAt=0,X.fakeEnd=0,qe.hush(!1),Mt&&Mt.restore())),X.passed&&X.scareAt&&!X.scaring&&It&&!It.gone&&!gn&&(!X.hushed&&e>=X.scareAt-J.scare.hush*1e3&&(X.hushed=!0,qe.hush(!0),Mt&&Mt.freeze("none")),e>=X.scareAt&&(X.scareAt=0,X.passed=!1,_b())),!(e<X.readyAt||X.walking)&&(X.i<t&&!X.toldNext&&zf(X.i)&&(X.toldNext=!0,X.nextHintAt=e+1700),!ie.on)){if(X.nextHintAt>0&&e>=X.nextHintAt&&(X.nextHintAt=-1,zm(),X.lastAct=e),X.i===t&&X.finishAt<0&&zf(t)&&(X.finishAt=e+J.endWait*1e3),X.finishAt>0&&e>=X.finishAt&&!X.passed&&!X.scaring){if(It&&!It.gone&&!ie.on&&It.station===t){X.passed=!0,X.endAfter=!0,X.scareAt=e+it(...J.scare.lastWait)*1e3;return}X.endT=0;return}e-X.lastAct>J.hint.idle*1e3&&(X.lastAct=e,zf(X.i)?X.i<t&&zm():bd())}}function Ea(){!hn||gn||Nn||(gn=!0,Je.pause.classList.add("show"),document.pointerLockElement&&document.exitPointerLock(),qe.ctx&&qe.ctx.suspend())}function Mg(){gn&&(gn=!1,Je.pause.classList.remove("show"),qe.resume(),io=performance.now(),Ma=0,Yt?Pd():yd())}{addEventListener("popstate",()=>{hn&&!Nn&&(Ea(),history.pushState({nh:1},""))});let i=()=>{document.fullscreenElement||document.webkitFullscreenElement||Ea()};document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i),Je.again.addEventListener("click",()=>location.reload())}var vh=new Map;function Ub(i){let e={x:i.clientX,y:i.clientY,t:performance.now()};vh.set(i.pointerId,e);try{Ii.setPointerCapture(i.pointerId)}catch{}e.x>innerWidth*J.gun.area[0]&&e.y>innerHeight*J.gun.area[1]&&(e.timer=setTimeout(()=>{!e.done&&!e.moved&&hn&&!gn&&!Nn&&wa()&&(e.done=!0,X.lastAct=performance.now())},J.gun.hold*1e3))}function Fb(i){let e=vh.get(i.pointerId);if(vh.delete(i.pointerId),!e||e.done||!hn||gn||Nn)return;let t=innerWidth,n=innerHeight,s=i.clientX-e.x,r=i.clientY-e.y;if(clearTimeout(e.timer),i.type!=="pointercancel"&&Math.hypot(s,r)<18&&(pd||performance.now()-e.t<700)){let o=i.clientX/t*2-1,a=1-i.clientY/n*2;rt&&rt.state.cocked?wd(o,a):xh(o,a,!0);return}Sg(e,s,r)}function Bb(i){let e=vh.get(i.pointerId);!e||e.done||!hn||gn||Nn||(Math.hypot(i.clientX-e.x,i.clientY-e.y)>J.swipe.still&&(e.moved=!0,clearTimeout(e.timer)),Sg(e,i.clientX-e.x,i.clientY-e.y))}function Sg(i,e,t){let n=innerWidth,s=Math.min(n,innerHeight)*J.swipe.far;if(i.x>=n*.5&&Math.abs(t)>s&&Math.abs(t)>=J.swipe.cock*Math.abs(e)){i.done=!0,clearTimeout(i.timer),X.lastAct=performance.now(),t>0?Ah():Ed();return}if(Math.abs(e)>s&&Math.abs(e)>J.swipe.ratio*Math.abs(t)){i.done=!0,Td();return}Math.abs(t)>s&&Math.abs(t)>J.swipe.ratio*Math.abs(e)&&i.x<n*.5&&(i.done=!0,X.lastAct=performance.now(),t<0?ae.mode==="off"?ro():ae.mode==="on"&&(js=!0):js?js=!1:ae.mode==="on"&&ro())}var th={p:new T(.2*Ln,-.07,-.37),r:new $t(.1,.55*Ln,0)},nh={p:new T(.19*Ln,.08,-.43),r:new $t(.25,.4*Ln,0)},ih={p:new T(.02*Ln,-.2,-.5),r:new $t(-.2,.5*Ln,.25*Ln)},Ze={pivot:new T,bob:new T,prev:new T,init:!1,lastRX:0,lastRZ:0,lastDVX:0,lastDVZ:0,peak:0,lastCreak:0},sh=.17,pi=new T,Vf=new T,da=new T,Ob=new vt,Gm=new T;function Wm(i,e,t,n,s){let r=i.x+e.x-t,o=i.z+e.z-n,a=Math.hypot(r,o);a<s&&a>1e-5&&(e.x+=r/a*(s-a),e.z+=o/a*(s-a))}function ud(i,e,t){for(let n of Qe){if(i.y<1.55*n.s)for(let s of n.blockers)Wm(i,t,s.x,s.z,s.r+e);i.y<1.7*n.s&&Wm(i,t,n.headWorld.x,n.headWorld.z,.26*n.s+e)}}function zb(i,e){Vf.copy(i).applyQuaternion(me.quaternion).add(me.position),da.copy(Vf),da.y-=.17,pi.set(0,0,0);for(let t=0;t<3;t++)ud(da,.09,pi),ud(Vf,.05,pi);da.set(pi.x,0,pi.z).applyQuaternion(Ob.copy(me.quaternion).invert()),Gm.lerp(da,1-Math.exp(-14*e)),i.add(Gm),i.z>-.17&&(i.y-=(i.z+.17)*.8,i.z=-.17)}var ys=0,ya=0,qm=0,Xm=0,Hb=new $t,fd=new vt,Ym=new vt,Gf=new vt,dd=new T,Ks=new T,JA=new T(0,-1,0);function kb(i,e,t,n){let s=(Eh||Sd||js)&&ae.mode!=="relight";xa=md(xa,s?1:0,i/.35),eh=s?eh+i:Math.max(0,eh-i*2);let r=ln(xa),o=dd.copy(th.p).lerp(nh.p,r),a=Xt(th.r.x,nh.r.x,r),c=Xt(th.r.y,nh.r.y,r),l=Xt(th.r.z,nh.r.z,r);if(ae.mode==="relight"){let x=ae.t<.6?ln(ae.t/.6):ae.t<1.6?1:ln(Math.max(0,1-(ae.t-1.6)/.6));o.lerp(ih.p,x),a=Xt(a,ih.r.x,x),c=Xt(c,ih.r.y,x),l=Xt(l,ih.r.z,x)}(ae.mode==="turning"||ae.mode==="up")&&(l+=Math.sin(Math.min(1,ae.t/.6)*Math.PI)*.12*Ln);let h=(pe.yaw-qm)/Math.max(i,.001),d=(pe.pitch-Xm)/Math.max(i,.001);qm=pe.yaw,Xm=pe.pitch,ys=St(ys,dt(-h*.035,-.09,.09),9,i),ya=St(ya,dt(-d*.03,-.07,.07),9,i),o.x-=ys*.6,o.y+=ya*.6,l-=ys*1.2*Ln,c+=ys*.6*Ln,o.x+=Math.cos(pe.stepPhase)*.009*n,o.y+=Math.abs(Math.sin(pe.stepPhase))*.012*n-.006*n;let u=1+Math.min(2.2,eh/3),f=Dn<J.hp?Xt(1,J.hurt.shake[Math.min(Dn,J.hurt.shake.length-1)],eo):1,m=7e-4*u*f,_=.0018*(.6+.4*u);o.x+=Math.sin(e*9.3)*Math.sin(e*6.1+1.3)*m+Math.sin(e*.37+2.1)*_,o.y+=Math.sin(e*10.7+.5)*Math.sin(e*4.3)*m+Math.sin(e*.29)*_,l+=Math.sin(e*8.1)*.003*u,zb(o,i),Gn.position.copy(o),Gn.rotation.set(a,c,l),Gn.updateMatrixWorld(!0),$i&&$i.fore&&(Im.set(0,1,0).applyQuaternion(fd.copy(me.quaternion).invert()),GS($i,.7,Im),sg($i)),Gf.copy(me.quaternion),Ze.pivot.copy(Gn.position).applyQuaternion(Gf).add(me.position),Ze.init||(Ze.bob.copy(Ze.pivot).add(Ks.set(0,-sh,0)),Ze.prev.copy(Ze.bob),Ze.init=!0);let p=Math.max(1,Math.ceil(i/(1/120))),g=i/p;for(let x=0;x<p;x++){let S=(Ze.bob.x-Ze.prev.x)*(1-1.6*g),C=(Ze.bob.y-Ze.prev.y)*(1-1.6*g),R=(Ze.bob.z-Ze.prev.z)*(1-1.6*g);Ze.prev.copy(Ze.bob),Ze.bob.x+=S,Ze.bob.y+=C-9.8*g*g,Ze.bob.z+=R,Ks.copy(Ze.bob).sub(Ze.pivot).setLength(sh),Ze.bob.copy(Ze.pivot).add(Ks),pi.set(0,0,0),ud(Ze.bob,.085,pi),(pi.x||pi.z)&&(Ze.bob.x+=pi.x,Ze.bob.z+=pi.z,Ks.copy(Ze.bob).sub(Ze.pivot).setLength(sh),Ze.bob.copy(Ze.pivot).add(Ks))}Ks.copy(Ze.bob).sub(Ze.pivot).normalize().applyQuaternion(fd.copy(Gf).invert());let y=dd.copy(Ks).negate();Pn.set(1,0,0).applyQuaternion(Gn.quaternion),ei.copy(Pn).addScaledVector(y,-Pn.dot(y)).normalize(),$r.crossVectors(ei,y),Qr.makeBasis(ei,y,$r),Ym.setFromRotationMatrix(Qr),so.quaternion.copy(Gn.quaternion).invert().multiply(Ym);let w=Ze.bob.x-Ze.pivot.x,b=Ze.bob.z-Ze.pivot.z,v=w-Ze.lastRX,M=b-Ze.lastRZ;Ze.peak=Math.max(Ze.peak*Math.exp(-i*1.5),Math.hypot(w,b)/sh),v*Ze.lastDVX+M*Ze.lastDVZ<0&&Ze.peak>.16&&e-Ze.lastCreak>.3&&(Math.random()<.7&&qe.creak(Math.min(1,Ze.peak*2.5)),Ze.lastCreak=e),Ze.lastRX=w,Ze.lastRZ=b,Ze.lastDVX=v,Ze.lastDVZ=M}function Vb(i){let e=0,t=0;(Cn.has("KeyD")||Cn.has("ArrowRight"))&&(e+=1),(Cn.has("KeyA")||Cn.has("ArrowLeft"))&&(e-=1),(Cn.has("KeyW")||Cn.has("ArrowUp"))&&(t+=1),(Cn.has("KeyS")||Cn.has("ArrowDown"))&&(t-=1),e+=tn.x,t-=tn.y,Wn&&(e=0,t=0);let n=Math.hypot(e,t);n>1&&(e/=n,t/=n),ae.mode==="relight"&&(e*=.2,t*=.2),Nn&&(e=t=0);let s=Math.sin(pe.yaw),r=Math.cos(pe.yaw),o=(e*r-t*s)*1.5,a=(-e*s-t*r)*1.5;pe.vel.x=St(pe.vel.x,o,8,i),pe.vel.z=St(pe.vel.z,a,8,i),pe.pos.x+=pe.vel.x*i,pe.pos.z+=pe.vel.z*i,ob(pe.pos);let c=Math.hypot(pe.vel.x,pe.vel.z),l=pe.stepPhase;pe.stepPhase+=i*c*4.4,Math.floor(l/Math.PI)!==Math.floor(pe.stepPhase/Math.PI)&&c>.3&&qe.step();let h=dt(c/1.5,0,1);return me.position.set(pe.pos.x+Math.cos(pe.stepPhase)*.012*h*r,gd+Math.abs(Math.sin(pe.stepPhase))*.025*h,pe.pos.z-Math.cos(pe.stepPhase)*.012*h*s),$m(me.position.x,me.position.z),me.rotation.set(pe.pitch,pe.yaw,0),me.updateMatrixWorld(!0),me.getWorldDirection(ji),c}var Zm=1e3/60,Ma=0,io=performance.now(),rh=0,Wf=0,oh=0,qf=!1,ji=new T,$A=new T,ah=new T,ch=new T,lh={fogC:new ge(.062,.064,.073),fogD:.05,zen:new ge(.0065,.007,.0088)},hh={fogC:new ge(.0035,.004,.0055),fogD:.009,hor:new ge(.028,.03,.038),zen:new ge(.002,.0022,.003)};function Ad(i){if(document.hidden||requestAnimationFrame(Ad),gn){io=i;return}if(i<Ma-1)return;Ma=Math.max(Ma+Zm,i+Zm*.6);let e=Math.min(.1,(i-io)/1e3)*yg;io=i;let t=i/1e3;qf&&(qf=!1,_d()),Ji.uTime.value=t,Zf.uTime.value=t,ma.uTime.value=t;let n=Db(e);CS(e,ae.gustT>=0);let s=dt(n/1.5,0,1);if(lb(e),DS(e,ae.gustT>=0),kb(e,t,n,s),Wn&&rt&&jS(e,t),dh){let d=dh,u=Sn.position;Pi.position.set(u.x+Math.sin(d.yaw)*Math.cos(d.pitch)*d.dist,u.y+Math.sin(d.pitch)*d.dist,u.z+Math.cos(d.yaw)*Math.cos(d.pitch)*d.dist),Pi.lookAt(u.x,u.y-.04,u.z),Pi.updateMatrixWorld(!0)}so.updateMatrixWorld(!0),ah.copy(tg),so.localToWorld(ah);let r=ae.level*(1+.04*Math.sin(t*11)*Math.sin(t*17.3+1.1)+.02*Math.sin(t*31));mh.position.copy(ah),mh.intensity=1*r,gi.position.copy(ah).applyQuaternion(me.quaternion).add(me.position),gi.intensity=cg*r*(1+.5*ln(xa)),Ji.uLanternPos.value.copy(gi.position),$f.emissiveIntensity=.16*r,Zr.material.opacity=.5*r,Jr.visible=ae.level>.01,Jr.scale.setScalar(.6+.4*ae.level),qe.setHiss(ae.level),ch.copy(gh.position).sub(me.position).applyQuaternion(fd.copy(me.quaternion).invert()),sd.position.copy(ch);let o=9*(1+.14*Math.sin(t*7.7)*Math.sin(t*2.3+1.1)+.06*Math.sin(t*23)),a=ln(dt((ch.z/Math.max(ch.length(),.001)+.2)/.8,0,1));gh.intensity=o,sd.intensity=o*Xt(1,.22,a),va=md(va,ae.level<.05?1:0,e/(ae.level<.05?2.6:.7));let c=ln(va),l=Math.hypot(me.position.x-wn.x,me.position.z-wn.z),h=Xt(.42,.9,ln(dt((l-2.5)/4.5,0,1)));ab(e),zt.uniforms.uExp.value=Xt(.26,h,c)*ga,zt.uniforms.uDesat.value=c*.75*ln(dt((h-.42)/.48,0,1)),Vt.fog.color.copy(hh.fogC).lerp(lh.fogC,c),Js=St(Js,fg>=0?1:.9*Math.min(1,Ci/J.told),1.2,e),zt.uniforms.uCount.value=Js,wh.uniforms.uCount.value=Js,hg.strength=.025+.02*Js,Vt.fog.density=Xt(hh.fogD+.004*Js,lh.fogD,c),rd.material.uniforms.uHor.value.copy(hh.hor).lerp(lh.fogC,c),rd.material.uniforms.uZen.value.copy(hh.zen).lerp(lh.zen,c),jm.uHaze.value.copy(Vt.fog.color),xd.intensity=Xt(.05,.24,c),lg.intensity=Xt(.05,.07,c),Ji.uEyeGain.value=60*ae.level,Ji.uEyeSelf.value=5*Math.min(1,c*2.2),zt.uniforms.uSeed.value=i*.061%997;for(let d of Qe)ug(d,e,t);if(Nb(e),vb(),tb(e),Cb(e,t),Lb(e),qe.update(me.position,ji,Qe,t),no>0&&(no-=e,no<=0&&Je.sub.classList.remove("show")),Mb(),ts.render(e),rh+=e,Wf++,rh>=1){let d=Wf/rh;Je.fps.textContent=`fps ${Math.round(d)} \xB7 ${zt.uniforms.uRes.value.x}\xD7${zt.uniforms.uRes.value.y}`,oh=d<50?oh+1:0,oh>=3&&od>360&&(od-=60,qf=!0,oh=0),rh=0,Wf=0}}document.addEventListener("visibilitychange",()=>{document.hidden||(io=performance.now(),Ma=0,requestAnimationFrame(Ad),gn||qe.resume())});var Gb=1.3,Wb=1.45,QA={hor:new ge(.6,.57,.5),zen:new ge(.13,.23,.45),fog:new ge(.55,.52,.46),fogD:.0055,haze:new ge(.36,.37,.41),exp:.56};function Rd(i){let e=i.mesh.position,t=i.s,n=Math.sin(i.heading),s=Math.cos(i.heading),r=i.caps||(i.caps=new Float64Array(10));r[0]=e.x-n*.67*t,r[1]=e.z-s*.67*t,r[2]=e.x+n*.37*t,r[3]=e.z+s*.37*t,r[4]=.33*t;let o=i.ai.yaw,a=Math.sin(o)*.62,c=.58+Math.cos(o)*.62;return r[5]=e.x+n*.62*t,r[6]=e.z+s*.62*t,r[7]=e.x+(s*a+n*c)*t,r[8]=e.z+(-n*a+s*c)*t,r[9]=.2*t,r}var Ta=0,Aa=0,Vn=0;function _h(i,e,t,n,s,r,o,a){let c=t-i,l=n-e,h=o-s,d=a-r,u=i-s,f=e-r,m=c*c+l*l,_=h*h+d*d,p=h*u+d*f,g=0,y=0;if(m<=1e-9&&_>1e-9)y=dt(p/_,0,1);else if(m>1e-9){let w=c*u+l*f;if(_<=1e-9)g=dt(-w/m,0,1);else{let b=c*h+l*d,v=m*_-b*b;g=v>1e-9?dt((b*p-w*_)/v,0,1):0,y=(b*g+p)/_,y<0?(y=0,g=dt(-w/m,0,1)):y>1&&(y=1,g=dt((b-w)/m,0,1))}}Ta=i+c*g-(s+h*y),Aa=e+l*g-(r+d*y),Vn=Math.hypot(Ta,Aa)}function Km(){for(let e of Qe)Rd(e);let i=99;for(let e=0;e<Qe.length;e++)for(let t=e+1;t<Qe.length;t++){let n=Qe[e].caps,s=Qe[t].caps;for(let r=0;r<10;r+=5)for(let o=0;o<10;o+=5)_h(n[r],n[r+1],n[r+2],n[r+3],s[o],s[o+1],s[o+2],s[o+3]),i=Math.min(i,Vn-n[r+4]-s[o+4])}return i}var Jm=8,qb=.9,Xf=9;function Yf(i,e,t){i.mesh.position.x+=e,i.mesh.position.z+=t;let n=i.caps;n[0]+=e,n[1]+=t,n[2]+=e,n[3]+=t,n[5]+=e,n[6]+=t,n[7]+=e,n[8]+=t,i.shoveX+=e,i.shoveZ+=t}var bg=()=>Qe.filter(i=>!i.dead);function Xb(){let i=bg(),e=sa.uPC.value;for(let t of i)Rd(t);for(let t=0;t<4;t++){let n=!1;for(let s=0;s<i.length;s++){let r=i[s],o=r.mesh.position,a=r.caps;for(let c=s+1;c<i.length;c++){let l=i[c],h=l.mesh.position,d=l.caps;if(!(Math.abs(o.x-h.x)>4.5||Math.abs(o.z-h.z)>4.5))for(let u=0;u<10;u+=5)for(let f=0;f<10;f+=5){_h(a[u],a[u+1],a[u+2],a[u+3],d[f],d[f+1],d[f+2],d[f+3]);let m=a[u+4]+d[f+4];if(Vn>=m)continue;let _=Ta,p=Aa,g=Vn;g<1e-5&&(_=o.x-h.x,p=o.z-h.z,g=Math.hypot(_,p),g<1e-5&&(_=1,p=0,g=1)),_/=g,p/=g;let y=m-Vn+.002,w=(r.speed+.15)/(r.speed+l.speed+.3);Yf(r,_*y*w,p*y*w),Yf(l,-_*y*(1-w),-p*y*(1-w)),n=!0}}}for(let s of i){let r=s.caps,o=s.mesh.position;for(let a of ra){let c=a.x+Math.round((e.x-a.x)/Ut)*Ut,l=a.z+Math.round((e.y-a.z)/Ut)*Ut;if(!(Math.abs(c-o.x)>3||Math.abs(l-o.z)>3))for(let h=0;h<10;h+=5){_h(r[h],r[h+1],r[h+2],r[h+3],c,l,c,l);let d=r[h+4]+a.r;if(Vn>=d)continue;let u=Ta,f=Aa,m=Vn;m<1e-5&&(u=o.x-c,f=o.z-l,m=Math.hypot(u,f)||1),Yf(s,u/m*(d-Vn+.002),f/m*(d-Vn+.002)),n=!0}}}if(!n)break}}function Yb(i){let e=bg();if(!e.length)return;let t=0,n=0;for(let r of e)t+=r.mesh.position.x,n+=r.mesh.position.z,Rd(r);t/=e.length,n/=e.length;let s=sa.uPC.value;for(let r of e){let o=r.mesh.position,a=o.x-pe.pos.x,c=o.z-pe.pos.z,l=Math.hypot(a,c);r.press=0,r.pdx=l>.001?a/l:0,r.pdz=l>.001?c/l:0}for(let r of e){let o=Math.max(dt(r.press*4,0,1),r.startle||0);for(let a of e){if(a===r)continue;let c=Math.hypot(r.mesh.position.x-a.mesh.position.x,r.mesh.position.z-a.mesh.position.z);c<Xf&&(o=Math.max(o,a.stir*.9*Math.min(1,(Xf-c)/(Xf-3))))}r.stirGoal=o}for(let r of e)r.stir=r.stirGoal>r.stir?Math.min(r.stirGoal,r.stir+i*2):Math.max(r.stirGoal,r.stir-i*.3);for(let r of e){let o=r.mesh.position,a=r.caps,c=0,l=0;r.press>0&&(c+=r.pdx*r.press*2.2,l+=r.pdz*r.press*2.2),r.startle>0&&(c+=r.pdx*r.startle*1.9,l+=r.pdz*r.startle*1.9,r.startle=Math.max(0,r.startle-i*.3)),r.alarm=Math.max(r.alarm-i*.25,r.press,(r.startle||0)*.9);let h=t-o.x,d=n-o.z,u=Math.hypot(h,d);if(u>6){let P=.9*Math.min(1,(u-6)/8);c+=h/u*P,l+=d/u*P}let f=0,m=0,_=0;for(let P of e){if(P===r)continue;let D=P.mesh.position,z=Math.hypot(o.x-D.x,o.z-D.z);if(z<Jm&&P.speed>.08){let L=1-z/Jm;f+=Math.sin(P.heading)*P.speed*L,m+=Math.cos(P.heading)*P.speed*L,_+=L}if(z<4.5){let L=P.caps;for(let H=0;H<10;H+=5)for(let V=0;V<10;V+=5){_h(a[H],a[H+1],a[H+2],a[H+3],L[V],L[V+1],L[V+2],L[V+3]);let G=H+V===0?.9:.45,oe=Vn-a[H+4]-L[V+4];if(oe<G&&Vn>1e-5){let Y=(G-oe)/G*.9;c+=Ta/Vn*Y,l+=Aa/Vn*Y}}}}if(_>0){let P=qb*r.stir*Math.min(1,_/.6)/_;c+=f*P,l+=m*P}for(let P of ra){let D=P.x+Math.round((s.x-P.x)/Ut)*Ut,z=P.z+Math.round((s.y-P.z)/Ut)*Ut,L=o.x-D,H=o.z-z,V=Math.hypot(L,H);if(V<1.8&&V>.001){let G=(1.8-V)/1.8*1.2;c+=L/V*G,l+=H/V*G}}r.wx=St(r.wx,c,2.5,i),r.wz=St(r.wz,l,2.5,i);let p=Math.hypot(r.wx,r.wz),g=0;p>.15&&(g=Math.atan2(r.wx,r.wz)-r.heading,g=Math.atan2(Math.sin(g),Math.cos(g)));let y=.3+r.speed/2.2;r.turnVel=St(r.turnVel,p>.15?dt(g*1.8,-y,y):0,3,i);let w=.45*r.s,b=Math.sin(r.heading),v=Math.cos(r.heading),M=o.x-b*w,x=o.z-v*w;r.heading+=r.turnVel*i;let S=Math.sin(r.heading),C=Math.cos(r.heading);o.x=M+S*w,o.z=x+C*w;let R=p>.15?Math.min(Gb,p)*(.2+.8*Math.max(0,Math.cos(g))):0;r.speed=St(r.speed,R,1.6,i),o.x+=S*r.speed*i,o.z+=C*r.speed*i,r.turnLead=dt(g,-.6,.6)*Math.min(1,p)}Xb();for(let r of e){let o=r.mesh.position;r.mesh.rotation.y=r.heading;let a=Math.min(.8,Math.hypot(r.shoveX,r.shoveZ)/Math.max(i,.001));r.shoveX=0,r.shoveZ=0;let c=r.speed+Math.abs(r.turnVel)*.55+a;r.gait=St(r.gait,dt(c/.9,0,1),4,i),r.gaitPhase+=c*i/Wb,o.y=-.012*r.gait*(.5-.5*Math.cos(r.gaitPhase*Math.PI*4)),r.mesh.material.userData.own.uGait.value.set(r.gaitPhase,r.gait,0,0),r.mesh.updateMatrixWorld();let l=Math.sin(r.heading),h=Math.cos(r.heading);[.55,0,-.6].forEach((d,u)=>{let f=d*.92*r.s;r.blockers[u].x=o.x+l*f,r.blockers[u].z=o.z+h*f})}}(async()=>{try{OS(),VS(),Wn&&JS();let i=0,e=4+Wl.length+1+(Wn?1:0),t=()=>{i++,Je.loadTxt.textContent=`\uBD88\uB7EC\uC624\uB294 \uC911\u2026 ${Math.round(i/e*100)}%`},[n,,s,r]=await Promise.all([wS(t),WS().then(t),Promise.all(Wl.map(o=>gf(`plants/saguaro-${o}.json`).then(a=>(t(),a)))),Promise.all(xf.map(o=>gf(`plants/bone-${o}.json`))).then(o=>(t(),o)),Wn?$S().then(t):Promise.resolve()]);ti=new kl(s,Df),Vt.add(ti.group),$s=om(Df),$s.push(...am(r,Df)),$s.push(sm((o,a)=>Math.hypot(o-wn.x,a-wn.z)<1.3));for(let o of $s)Vt.add(o.group);ti.setPixel(me,zt.uniforms.uRes.value.y),ti.update(pe.pos.x,pe.pos.z,me),db(n),gb();for(let o of Mh)eg(o,!0);bn.compile(Vt,me),bn.compile(tr,Pi),Je.loadTxt.textContent="",Je.startBtn.disabled=!1,Je.startBtn.textContent="\uC2DC\uC791",window.__ready=!0,io=performance.now(),requestAnimationFrame(Ad)}catch(i){console.error(i),Je.loadTxt.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."}})();var wg=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),Cd=()=>document.fullscreenElement||document.webkitFullscreenElement;function Pd(){if(!wg||Cd())return;let i=document.documentElement,e=()=>{try{Yt&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};try{let t=(i.requestFullscreen||i.webkitRequestFullscreen).call(i,{navigationUI:"hide"});t&&t.then?t.then(e).catch(()=>{}):e()}catch{}}function Zb(){if(!Cd()){Pd();return}try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch{}}if(Je.fsBtn){Je.fsBtn.hidden=!wg,Je.fsBtn.addEventListener("click",e=>{e.stopPropagation(),Zb()});let i=()=>Je.fsBtn.setAttribute("aria-pressed",String(!!Cd()));document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i)}Je.startBtn.addEventListener("click",()=>{if(!hn){hn=!0,Je.start.classList.add("gone"),document.body.classList.add("playing"),Pd();try{qe.init()}catch(i){console.warn("sound",i)}yd(),Je.hint&&setTimeout(()=>Je.hint.classList.add("gone"),9e3),qe.loadMusic(),qe.ctx&&(Mt=Lf({context:qe.ctx}),It&&Mt.useFile(Cf[It.mon.form].roar,`../sounds/roar-${It.mon.form}.mp3`)),history.pushState({nh:1},""),setTimeout(()=>ni(J.lines.open,3.6),1200),X.readyAt=performance.now()+4800,X.lastAct=X.readyAt,setTimeout(()=>{bd(),X.lastAct=performance.now()},5200)}});Je.resume.addEventListener("click",()=>Mg());pd&&(window.__dbg={state:()=>({mode:ae.mode,level:ae.level,oil:ae.oil,nightT:va,raiseT:xa,count:Ci,countT:Js,revealT:fg,ended:Nn,sub:Je.sub.textContent,pos:pe.pos.toArray()}),countAll:()=>{ub=0;for(let i of Qe)i.lit=2},setCount:i=>{Ci=i},herd:()=>Qe.map(i=>[+i.mesh.position.x.toFixed(2),+i.mesh.position.z.toFixed(2),+i.speed.toFixed(2),+i.gait.toFixed(2),+i.heading.toFixed(2)]),gap:()=>Km(),raw:i=>{wh.enabled=!i},cock:()=>Ra(),fire:()=>bh(),vmLight:i=>{uh.intensity=i,uh.color.setRGB(1,1,1),uh.groundColor.setRGB(.4,.4,.4)},gunHold:(i,e,t,n,s)=>{og.set(i,e,t),n!==void 0&&(to.yaw=n,to.roll=s)},hideWorld:i=>{Vt.visible=!i},vmOrbit:(i,e,t)=>{dh=i===void 0?null:{yaw:i,pitch:e,dist:t},dh||(Pi.position.set(0,0,0),Pi.quaternion.identity())},reload:()=>wa(),gun:()=>({anim:rt?.state.anim?.type||null,step:rt?.state.anim?.steps?.[rt.state.anim.i]?.k,cocked:rt?.state.cocked,top:rt?.state.top,chambers:rt?.state.chambers.slice(),dead:Qe.filter(i=>i.dead).length,startled:Qe.filter(i=>i.startle>.05).length}),aimAt:i=>{let e=Qe[i],t=e.blockers[1].x-pe.pos.x,n=e.blockers[1].z-pe.pos.z;pe.yaw=Math.atan2(-t,-n),pe.pitch=Math.atan2(.95*e.s-gd,Math.hypot(t,n))},plantsNear:i=>{let e=[ti,...$s][i];return e?e.items.map(t=>{let n=t.x+Math.round((pe.pos.x-t.x)/Ut)*Ut,s=t.z+Math.round((pe.pos.z-t.z)/Ut)*Ut;return{v:t.v,x:+n.toFixed(2),z:+s.toFixed(2),d:+Math.hypot(n-pe.pos.x,s-pe.pos.z).toFixed(1),H:+t.H.toFixed(2)}}).sort((t,n)=>t.d-n.d):[]},trisBy:()=>{let i=t=>{let n=0;return t.traverse(s=>{if(s.visible&&s.geometry&&s.geometry.index){let r=s.isInstancedMesh?s.count:s.geometry.isInstancedBufferGeometry?s.geometry.instanceCount:1;n+=s.geometry.index.count/3*r}}),Math.round(n)},e={cows:0};for(let t of Qe)e.cows+=i(t.mesh);return e.saguaro=i(ti.group),["ocotillo","creosote","bursage","skeleton","bones","grass"].forEach((t,n)=>{e[t]=i($s[n].group)}),e},tris:()=>{let i=0;return Vt.traverse(e=>{if(e.visible&&e.geometry&&e.geometry.index){let t=e.isInstancedMesh?e.count:e.geometry.isInstancedBufferGeometry?e.geometry.instanceCount:1;i+=e.geometry.index.count/3*t}}),i},saguaros:()=>ti?ti.items.map(i=>{let e=i.x+Math.round((pe.pos.x-i.x)/Ut)*Ut,t=i.z+Math.round((pe.pos.z-i.z)/Ut)*Ut;return{kind:Wl[i.v],x:+e.toFixed(2),z:+t.toFixed(2),d:+Math.hypot(e-pe.pos.x,t-pe.pos.z).toFixed(1),H:+i.H.toFixed(1)}}).sort((i,e)=>i.d-e.d):[],herdRaw:()=>Qe.map(i=>[i.mesh.position.x,i.mesh.position.z,i.heading,i.stir,i.speed]),sim:(i,e,t)=>{t!==void 0&&(pe.yaw=t),e&&Cn.add(e);let n=1/60,s=Qe.map(u=>u.mesh.position.clone()),r=99,o=0,a=0;for(;o<i;o+=n){Vb(n),Yb(n);for(let f of Qe)ug(f,n,o);let u=Km();r=Math.min(r,u),u<-.02&&a++}e&&Cn.delete(e);let c=Qe.map((u,f)=>+u.mesh.position.distanceTo(s[f]).toFixed(1)),l=0,h=0;for(let u of Qe)l+=u.mesh.position.x,h+=u.mesh.position.z;l/=Qe.length,h/=Qe.length;let d=Math.max(...Qe.map(u=>Math.hypot(u.mesh.position.x-l,u.mesh.position.z-h)));return{minGap:+r.toFixed(3),overlapSteps:a,moved:c,centre:[+l.toFixed(1),+h.toFixed(1)],spread:+d.toFixed(1),speeds:Qe.map(u=>+u.speed.toFixed(2)),player:[+pe.pos.x.toFixed(1),+pe.pos.z.toFixed(1)]}},tumbles:()=>Mh.map(i=>[+i.pos.x.toFixed(1),+i.pos.z.toFixed(1),+i.speed.toFixed(2)]),lightAt:i=>fb(Qe[i].mesh.localToWorld(new T(0,1,0))),goto:(i,e,t,n)=>{pe.pos.set(i,0,e),pe.yaw=t,pe.pitch=n??0},walk:(i,e)=>{Cn.add(i),setTimeout(()=>Cn.delete(i),e)},turn:i=>{pe.yaw+=i},raise:i=>{Eh=i},off:()=>ro(),gust:()=>{ae.gustTimer=0},blow:()=>ad("wind"),oil:i=>{ae.oil=i},relight:()=>ro(),night:()=>{va=1},countStation:i=>{for(let e of Qe)e.station===i&&!e.dead&&!e.gone&&(e.counted||Ci++,e.counted=!0)},fake:()=>[X.fakeAt?Math.round(X.fakeAt-performance.now()):null,!!X.fakeEnd],hp:()=>Dn,hurt:()=>Th(),scaring:()=>!!X.scaring,scareIn:()=>X.scareAt?Math.round(X.scareAt-performance.now()):null,passed:()=>!!X.passed,station:i=>{X.i=i,pe.pos.x=J.stations[i].x},monScreen:()=>{let i=It.eyeWorld.clone().project(me);return[Math.round((i.x+1)/2*innerWidth),Math.round((1-i.y)/2*innerHeight)]},monster:()=>It&&{i:Qe.indexOf(It),clue:It.mon.clue,st:It.station,eyes:It.mon.eyes.map(i=>i.position.toArray().map(e=>+e.toFixed(2)))},mouthGlow:i=>{let e=It?.mon.M;e&&(e.own.uDbgMouth.value=i)},maskOn:()=>zt.uniforms.uMaskOn.value,music:()=>({drones:qe.drones?.length??0,moo:!!qe.mooBuf,moos:qe.moos??0,twists:qe.twists?.length??0,droneG:+(qe.musicG?.gain.value??-1).toFixed(3),next:+(qe.droneAt-qe.ctx?.currentTime).toFixed(1),nextMoo:+(qe.mooAt-qe.ctx?.currentTime).toFixed(1)}),mooNow:()=>{qe.mooAt&&(qe.mooAt=qe.ctx.currentTime)},monMouth:()=>{let i=It?.mon.M;if(!i||!i.root.visible)return null;let e=Pf(i,new T);if(!e)return null;let t=e.clone().sub(me.position).dot(me.getWorldDirection(new T));return e.project(me),[+e.x.toFixed(3),+e.y.toFixed(3),+t.toFixed(3),me.near]},monEyes:()=>{let i=It?.mon.M;return!i||!i.root.visible?null:(i.root.updateMatrixWorld(!0),i.meta.eyes.map(e=>{let t=new T(...e).applyMatrix4(i.root.matrixWorld).project(me);return[+t.x.toFixed(3),+t.y.toFixed(3)]}))},slow:i=>{yg=i},fakeChance:i=>{J.scare.fake.chance=i},fight:()=>({on:ie.on,phase:ie.phase,hits:ie.hits,d:ie.on?+Math.hypot(me.position.x-ie.pos.x,me.position.z-ie.pos.z).toFixed(2):null,hp:Dn}),shootMonster:()=>{let i=It;return i&&!i.gone?(gg(i),!0):!1},hitFight:()=>vg(),gunState:()=>rt&&{cocked:rt.state.cocked,anim:rt.state.anim?.type||null,chambers:rt.state.chambers.slice(),top:rt.state.top},shootAt:(i,e)=>wd(i,e),cock:()=>Ah(),dead:()=>Qe.filter(i=>i.dead).length,nightState:()=>({i:X.i,walking:X.walking,count:Ci,misses:X.misses,matches:ae.matches,ended:Nn,paused:gn,endT:X.endT,finishAt:X.finishAt,sub:Je.sub.textContent,lamp:ae.mode,raised:js,x:+pe.pos.x.toFixed(2),cows:Qe.map(i=>({st:i.station,x:+i.mesh.position.x.toFixed(2),y:+i.y0.toFixed(2),z:+i.mesh.position.z.toFixed(2),counted:i.counted}))}),tapCow:(i,e)=>{let t=Qe[i],n=(e?new T(t.blockers[1].x,t.y0+.95*t.s,t.blockers[1].z):t.eyeWorld.clone()).project(me);return xh(n.x,n.y),[+n.x.toFixed(3),+n.y.toFixed(3)]},eyes:()=>Qe.map(i=>[+i.y0.toFixed(2),+i.mesh.rotation.x.toFixed(2),+i.eyeWorld.y.toFixed(2),+i.eyeWorld.z.toFixed(2),+i.mesh.position.z.toFixed(2)]),screenOf:i=>{let e=Qe[i].eyeWorld.clone().project(me);return[Math.round((e.x+1)/2*innerWidth),Math.round((1-e.y)/2*innerHeight)]},tapAt:(i,e)=>xh(i,e),next:()=>Td(),ready:()=>{X.readyAt=0},pause:()=>Ea(),resume:()=>Mg(),seen:()=>Qe.map((i,e)=>{let t=i.headWorld,n=t.clone().project(me),s=t.clone().sub(me.position),r=s.length();s.divideScalar(r);let o=null;for(let[a,c]of Qe.entries()){if(c===i)continue;for(let h of c.blockers)Qs(me.position,s,new T(h.x,c.y0+.95*c.s,h.z),.43*c.s)<r-.3&&(o=a);Qs(me.position,s,c.headWorld,.24*c.s)<r-.3&&(o=a)}return{i:e,st:i.station,y:+t.y.toFixed(2),sx:+n.x.toFixed(2),sy:+n.y.toFixed(2),by:o}}),eyeUp:(i,e,t)=>{_g=i,e!==void 0&&(pe.pos.z=e),t!==void 0&&(pe.pitch=t)},arm:()=>({W:$i.W.toArray(),E:$i.E.toArray(),f:$i.f.toArray(),u:$i.u.toArray(),hp:Gn.position.toArray(),hq:Gn.quaternion.toArray(),lq:so.quaternion.toArray(),lp:gi.position.toArray(),exp:zt.uniforms.uExp.value,adapt:ga})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
