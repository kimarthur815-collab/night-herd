(()=>{var od=0,yh=1,ad=2;var dr=1,cd=2,pr=3,ci=0,De=1,Te=2,Ci=0,mr=1,qn=2,Mh=3,Sh=4,ld=5;var ys=100,hd=101,ud=102,fd=103,dd=104,pd=200,md=201,gd=202,xd=203,bh=204,Eh=205,vd=206,_d=207,yd=208,Md=209,Sd=210,bd=211,Ed=212,wd=213,Td=214,Ta=0,Aa=1,Ra=2,tr=3,Ca=4,Pa=5,Ia=6,La=7,wh=0,Ad=1,Rd=2,Dn=0,Th=1,Ah=2,Rh=3,Ch=4,Ph=5,Ih=6,Lh=7;var Dh=300,Ms=301,gr=302,lc=303,hc=304,Da=1e3,ei=1001,Na=1002,Ve=1003,Cd=1004;var _o=1005;var Ze=1006,uc=1007;var Yn=1008;var xn=1009,Nh=1010,Uh=1011,xr=1012,fc=1013,Zn=1014,Nn=1015,Ke=1016,dc=1017,pc=1018,Ss=1020,Fh=35902,Bh=35899,Oh=1021,zh=1022,Mn=1023,wi=1026,Pi=1027,mc=1028,gc=1029,ji=1030,xc=1031;var vc=1033,yo=33776,Mo=33777,So=33778,bo=33779,_c=35840,yc=35841,Mc=35842,Sc=35843,bc=36196,Ec=37492,wc=37496,Tc=37488,Ac=37489,Eo=37490,Rc=37491,Cc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Fc=37815,Bc=37816,Oc=37817,zc=37818,Hc=37819,kc=37820,Vc=37821,Gc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,wo=36285,Zc=36286;var Zr=2300,Ua=2301,Ea=2302,uh=2303,fh=2400,dh=2401,ph=2402;var Pd=3200,Kc=3201;var Jc=0,Id=1,Ii="",cn="srgb",ds="srgb-linear",Kr="linear",oe="srgb";var wa=7680;var Ld=519,Dd=512,Nd=513,Ud=514,Hh=515,Fd=516,Bd=517,kh=518,Vh=519,Gh=35044;var Wh="300 es",Pn=2e3,er=2001;function U0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function F0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=Jr("canvas");return i.style.display="block",i}var Tf={},nr=null;function $r(...i){let t="THREE."+i.shift();nr?nr("log",t,...i):console.log(t,...i)}function zd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=zd(i);let t="THREE."+i.shift();if(nr)nr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ut(...i){i=zd(i);let t="THREE."+i.shift();if(nr)nr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Tf||(Tf[t]=!0,It(...i))}function Hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kd={[Ta]:Ta,[Ra]:Ia,[Ca]:Ca,[tr]:Pa,[Aa]:Aa,[Ia]:Ra,[La]:La,[Pa]:tr},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Af=1234567,Wr=Math.PI/180,ir=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Xh(i,t){return(i%t+t)%t}function B0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function O0(i,t,e){return i!==t?(e-i)/(t-i):0}function Xr(i,t,e){return(1-e)*i+e*t}function z0(i,t,e,n){return Xr(i,t,1-Math.exp(-e*n))}function H0(i,t=1){return t-Math.abs(Xh(i,t*2)-t)}function k0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function V0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function G0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function W0(i,t){return i+Math.random()*(t-i)}function X0(i){return i*(.5-Math.random())}function q0(i){i!==void 0&&(Af=i);let t=Af+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Y0(i){return i*Wr}function Z0(i){return i*ir}function K0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function J0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $c(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yh(i,t){if(t.constructor===Float32Array)return i;let e=$c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Zh(i,t){if(t.constructor===Float32Array)return i;let e=$c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Li={DEG2RAD:Wr,RAD2DEG:ir,generateUUID:ts,clamp:Zt,euclideanModulo:Xh,mapLinear:B0,inverseLerp:O0,lerp:Xr,damp:z0,pingpong:H0,smoothstep:k0,smootherstep:V0,randInt:G0,randFloat:W0,randFloatSpread:X0,seededRandom:q0,degToRad:Y0,radToDeg:Z0,isPowerOfTwo:K0,ceilPowerOfTwo:J0,floorPowerOfTwo:qh,setQuaternionFromProperEuler:$0,normalize:Zh,denormalize:Yh},tu=class tu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tu.prototype.isVector2=!0;var nt=tu,_e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],M=r[o+3];if(d!==M||c!==u||l!==f||h!==m){let p=c*u+l*f+h*m+d*M;p<0&&(u=-u,f=-f,m=-m,M=-M,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),E=Math.sin(_);g=Math.sin(g*_)/E,a=Math.sin(a*_)/E,c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+M*a}else{c=c*g+u*a,l=l*g+f*a,h=h*g+m*a,d=d*g+M*a;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eu=class eu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;var R=eu,kl=new R,Rf=new _e,nu=class nu{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],M=s[0],p=s[3],g=s[6],_=s[1],E=s[4],b=s[7],v=s[2],y=s[5],x=s[8];return r[0]=o*M+a*_+c*v,r[3]=o*p+a*E+c*y,r[6]=o*g+a*b+c*x,r[1]=l*M+h*_+d*v,r[4]=l*p+h*E+d*y,r[7]=l*g+h*b+d*x,r[2]=u*M+f*_+m*v,r[5]=u*p+f*E+m*y,r[8]=u*g+f*b+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nu.prototype.isMatrix3=!0;var Bt=nu,Vl=new Bt,Cf=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){let i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:Kr,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}var te=Q0();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Jr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},j0=0,sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var tm=0,Wl=new R,ln=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=Ze,o=Yn,a=Mn,c=xn,l=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ts(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Dh;ln.DEFAULT_ANISOTROPY=1;var iu=class iu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],M=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,b=(f+1)/2,v=(g+1)/2,y=(h+u)/4,x=(d+M)/4,S=(m+p)/4;return E>b&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=y/n,r=x/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=y/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=x/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-M)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iu.prototype.isVector4=!0;var ue=iu,Ba=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var cc=class cc{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,m,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,M,p)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,m,M,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=M,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,M=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-M*l,e[9]=-a*c,e[2]=M-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,M=l*d;e[0]=u+M*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=M+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,M=l*d;e[0]=u-M*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,M=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,m=a*c,M=a*l;e[0]=c*h,e[4]=M-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*c,f=o*l,m=a*c,M=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(em,t,nm)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ki.crossVectors(n,vn),ki.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ki.crossVectors(n,vn)),ki.normalize(),Qo.crossVectors(vn,ki),s[0]=ki.x,s[4]=Qo.x,s[8]=vn.x,s[1]=ki.y,s[5]=Qo.y,s[9]=vn.y,s[2]=ki.z,s[6]=Qo.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],M=n[6],p=n[10],g=n[14],_=n[3],E=n[7],b=n[11],v=n[15],y=s[0],x=s[4],S=s[8],C=s[12],A=s[1],I=s[5],N=s[9],B=s[13],L=s[2],O=s[6],k=s[10],H=s[14],j=s[3],W=s[7],$=s[11],tt=s[15];return r[0]=o*y+a*A+c*L+l*j,r[4]=o*x+a*I+c*O+l*W,r[8]=o*S+a*N+c*k+l*$,r[12]=o*C+a*B+c*H+l*tt,r[1]=h*y+d*A+u*L+f*j,r[5]=h*x+d*I+u*O+f*W,r[9]=h*S+d*N+u*k+f*$,r[13]=h*C+d*B+u*H+f*tt,r[2]=m*y+M*A+p*L+g*j,r[6]=m*x+M*I+p*O+g*W,r[10]=m*S+M*N+p*k+g*$,r[14]=m*C+M*B+p*H+g*tt,r[3]=_*y+E*A+b*L+v*j,r[7]=_*x+E*I+b*O+v*W,r[11]=_*S+E*N+b*k+v*$,r[15]=_*C+E*B+b*H+v*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],M=t[7],p=t[11],g=t[15],_=c*f-l*u,E=a*f-l*d,b=a*u-c*d,v=o*f-l*h,y=o*u-c*h,x=o*d-a*h;return e*(M*_-p*E+g*b)-n*(m*_-p*v+g*y)+s*(m*E-M*v+g*x)-r*(m*b-M*y+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],M=t[13],p=t[14],g=t[15],_=e*a-n*o,E=e*c-s*o,b=e*l-r*o,v=n*c-s*a,y=n*l-r*a,x=s*l-r*c,S=h*M-d*m,C=h*p-u*m,A=h*g-f*m,I=d*p-u*M,N=d*g-f*M,B=u*g-f*p,L=_*B-E*N+b*I+v*A-y*C+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(a*B-c*N+l*I)*O,t[1]=(s*N-n*B-r*I)*O,t[2]=(M*x-p*y+g*v)*O,t[3]=(u*y-d*x-f*v)*O,t[4]=(c*A-o*B-l*C)*O,t[5]=(e*B-s*A+r*C)*O,t[6]=(p*b-m*x-g*E)*O,t[7]=(h*x-u*b+f*E)*O,t[8]=(o*N-a*A+l*S)*O,t[9]=(n*A-e*N-r*S)*O,t[10]=(m*y-M*b+g*_)*O,t[11]=(d*b-h*y-f*_)*O,t[12]=(a*C-o*I-c*S)*O,t[13]=(e*I-n*C+s*S)*O,t[14]=(M*E-m*v-p*_)*O,t[15]=(h*v-d*E+u*_)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,M=o*h,p=o*d,g=a*d,_=c*l,E=c*h,b=c*d,v=n.x,y=n.y,x=n.z;return s[0]=(1-(M+g))*v,s[1]=(f+b)*v,s[2]=(m-E)*v,s[3]=0,s[4]=(f-b)*y,s[5]=(1-(u+g))*y,s[6]=(p+_)*y,s[7]=0,s[8]=(m+E)*x,s[9]=(p-_)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(s[0],s[1],s[2]).length(),a=Fs.set(s[4],s[5],s[6]).length(),c=Fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);let l=1/o,h=1/a,d=1/c;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,e.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,M;if(c)m=r/(o-r),M=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,M;if(c)m=1/(o-r),M=o/(o-r);else if(a===Pn)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===er)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};cc.prototype.isMatrix4=!0;var Kt=cc,Fs=new R,kn=new Kt,em=new R(0,0,0),nm=new R(1,1,1),ki=new R,Qo=new R,vn=new R,If=new Kt,Lf=new _e,en=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return If.makeRotationFromQuaternion(t),this.setFromRotationMatrix(If,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},im=0,Df=new R,Bs=new _e,vi=new Kt,jo=new R,Ur=new R,sm=new R,rm=new _e,Nf=new R(1,0,0),Uf=new R(0,1,0),Ff=new R(0,0,1),Bf={type:"added"},om={type:"removed"},Os={type:"childadded",child:null},Xl={type:"childremoved",child:null},Ge=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new en,n=new _e,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Bt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Uf,t)}rotateZ(t){return this.rotateOnAxis(Ff,t)}translateOnAxis(t,e){return Df.copy(t).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Uf,t)}translateZ(t){return this.translateOnAxis(Ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jo.copy(t):jo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ur,jo,this.up):vi.lookAt(jo,Ur,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(vi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bf),Os.child=t,this.dispatchEvent(Os),Os.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(om),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bf),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new R(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),g=this._getHandJoint(l,M);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Xh(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ql(o,r,t+1/3),this.g=ql(o,r,t),this.b=ql(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return te.workingToColorSpace(tn.copy(this),t),Math.round(Zt(tn.r*255,0,255))*65536+Math.round(Zt(tn.g*255,0,255))*256+Math.round(Zt(tn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=cn){te.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ta);let n=Xr(Vi.h,ta.h,e),s=Xr(Vi.s,ta.s,e),r=Xr(Vi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ot;ot.NAMES=Vd;var to=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qi=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new R,_i=new R,Yl=new R,yi=new R,zs=new R,Hs=new R,Of=new R,Zl=new R,Kl=new R,Jl=new R,$l=new ue,Ql=new ue,jl=new ue,bi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),_i.subVectors(n,e),Yl.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(_i),c=Vn.dot(Yl),l=_i.dot(_i),h=_i.dot(Yl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return $l.setScalar(0),Ql.setScalar(0),jl.setScalar(0),$l.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),_i.subVectors(t,e),Vn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),Hs.subVectors(r,n),Zl.subVectors(t,n);let c=zs.dot(Zl),l=Hs.dot(Zl);if(c<=0&&l<=0)return e.copy(n);Kl.subVectors(t,s);let h=zs.dot(Kl),d=Hs.dot(Kl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(n).addScaledVector(zs,o);Jl.subVectors(t,r);let f=zs.dot(Jl),m=Hs.dot(Jl);if(m>=0&&f<=m)return e.copy(r);let M=f*l-c*m;if(M<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Hs,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Of.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Of,a);let g=1/(p+M+u);return o=M*g,a=u*g,e.copy(n).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),na.subVectors(this.max,Fr),ks.subVectors(t.a,Fr),Vs.subVectors(t.b,Fr),Gs.subVectors(t.c,Fr),Gi.subVectors(Vs,ks),Wi.subVectors(Gs,Vs),cs.subVectors(ks,Gs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-cs.z,cs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,cs.z,0,-cs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-cs.y,cs.x,0];return!th(e,ks,Vs,Gs,na)||(e=[1,0,0,0,1,0,0,0,1],!th(e,ks,Vs,Gs,na))?!1:(ia.crossVectors(Gi,Wi),e=[ia.x,ia.y,ia.z],th(e,ks,Vs,Gs,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new R,new R,new R,new R,new R,new R,new R,new R],Gn=new R,ea=new ii,ks=new R,Vs=new R,Gs=new R,Gi=new R,Wi=new R,cs=new R,Fr=new R,na=new R,ia=new R,ls=new R;function th(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=t.dot(ls),l=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ce=new R,sa=new nt,cm=0,Ft=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?$c(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Yh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Zh(t,this.array)}};var ps=class extends Ft{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ms=class extends Ft{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Ft{constructor(t,e,n){super(new Float32Array(t),e,n)}},lm=new ii,Br=new R,eh=new R,gn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(eh)),this.expandByPoint(Br.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hm=0,Cn=new Kt,nh=new Ge,Ws=new R,_n=new ii,Or=new ii,ke=new R,ie=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U0(t)?ms:ps)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(_n.min,Or.min),_n.expandByPoint(ke),ke.addVectors(_n.max,Or.max),_n.expandByPoint(ke)):(_n.expandByPoint(Or.min),_n.expandByPoint(Or.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(t,l),ke.add(Ws)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new R,c[C]=new R;let h=new R,d=new R,u=new R,f=new nt,m=new nt,M=new nt,p=new R,g=new R;function _(C,A,I){l[C]=l[A]=l[I]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,A),M.fromBufferAttribute(r,I),d.sub(h),u.sub(h),m.sub(f),M.sub(f);let N=1/(m.x*M.y-M.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(N),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-M.x).multiplyScalar(N),a[C].add(p),a[A].add(p),a[I].add(p),c[C].add(g),c[A].add(g),c[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,A=E.length;C<A;++C){let I=E[C],N=I.start,B=I.count;for(let L=N,O=N+B;L<O;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new R,v=new R,y=new R,x=new R;function S(C){y.fromBufferAttribute(s,C),x.copy(y);let A=a[C];b.copy(A),b.sub(y.multiplyScalar(y.dot(A))).normalize(),v.crossVectors(x,A);let N=v.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,N)}for(let C=0,A=n.count;C<A;++C)l[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ft(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?f=c[M]*a.data.stride+a.offset:f=c[M]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new Ft(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=zf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=zf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function zf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ts()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var an=new R,or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?$c(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ft(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Yh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Zh(t,this.data.array)}},ih=new R,um=new R,fm=new Bt,Wn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ih.subVectors(n,e).cross(um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(ih).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dm=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=mr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Eh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yi=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,zr=new R,qs=new R,Ys=new R,Zs=new nt,Hr=new nt,Gd=new Kt,ra=new R,kr=new R,oa=new R,Hf=new nt,sh=new nt,kf=new nt,gs=class extends Ge{constructor(t=new Yi){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new or(n,3,0,!1)),Xs.setAttribute("uv",new or(n,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;aa(ra.set(-.5,-.5,0),Ys,o,qs,s,r),aa(kr.set(.5,-.5,0),Ys,o,qs,s,r),aa(oa.set(.5,.5,0),Ys,o,qs,s,r),Hf.set(0,0),sh.set(1,0),kf.set(1,1);let a=t.ray.intersectTriangle(ra,kr,oa,!1,zr);if(a===null&&(aa(kr.set(-.5,.5,0),Ys,o,qs,s,r),sh.set(0,1),a=t.ray.intersectTriangle(ra,oa,kr,!1,zr),a===null))return;let c=t.ray.origin.distanceTo(zr);c<t.near||c>t.far||e.push({distance:c,point:zr.clone(),uv:bi.getInterpolation(zr,ra,kr,oa,Hf,sh,kf,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function aa(i,t,e,n,s,r){Zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Hr.x=r*Zs.x-s*Zs.y,Hr.y=s*Zs.x+r*Zs.y):Hr.copy(Zs),i.copy(t),i.x+=Hr.x,i.y+=Hr.y,i.applyMatrix4(Gd)}var Si=new R,rh=new R,ca=new R,la=new R,no=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rh.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),la.copy(this.origin).sub(rh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=la.dot(this.direction),c=-la.dot(ca),l=la.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rh).addScaledVector(ca,u),f}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,M=e.y-o.y,p=e.z-o.z,g=n.x-o.x,_=n.y-o.y,E=n.z-o.z,b=Math.abs(c),v=Math.abs(l),y=Math.abs(h),x,S,C,A,I,N,B,L,O,k,H,j;if(b>=v&&b>=y?(C=c,N=d,O=m,j=g,c>=0?(x=l,S=h,A=u,I=f,B=M,L=p,k=_,H=E):(x=h,S=l,A=f,I=u,B=p,L=M,k=E,H=_)):v>=y?(C=l,N=u,O=M,j=_,l>=0?(x=h,S=c,A=f,I=d,B=p,L=m,k=E,H=g):(x=c,S=h,A=d,I=f,B=m,L=p,k=g,H=E)):(C=h,N=f,O=p,j=E,h>=0?(x=c,S=l,A=d,I=u,B=m,L=M,k=g,H=_):(x=l,S=c,A=u,I=d,B=M,L=m,k=_,H=g)),C===0)return null;let W=x/C,$=S/C,tt=1/C,wt=A-W*N,zt=I-$*N,K=B-W*O,xt=L-$*O,St=k-W*j,Ct=H-$*j,vt=St*xt-Ct*K,kt=wt*Ct-zt*St,Ae=K*zt-xt*wt;if(s){if(vt<0||kt<0||Ae<0)return null}else if((vt<0||kt<0||Ae<0)&&(vt>0||kt>0||Ae>0))return null;let Dt=vt+kt+Ae;if(Dt===0)return null;let ae=tt*(vt*N+kt*O+Ae*j);return(Dt>0?ae<0:ae>0)?null:this.at(ae/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zi=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vf=new Kt,hs=new no,ha=new gn,Gf=new R,ua=new R,fa=new R,da=new R,oh=new R,pa=new R,Wf=new R,ma=new R,qt=class extends Ge{constructor(t=new ie,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(oh.fromBufferAttribute(d,t),o?pa.addScaledVector(oh,h):pa.addScaledVector(oh.sub(e),h))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(ha.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ha,Gf)===null||hs.origin.distanceToSquared(Gf)>(t.far-t.near)**2))&&(Vf.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Vf),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,v=E;b<v;b+=3){let y=a.getX(b),x=a.getX(b+1),S=a.getX(b+2);s=ga(this,g,t,n,l,h,d,y,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let p=m,g=M;p<g;p+=3){let _=a.getX(p),E=a.getX(p+1),b=a.getX(p+2);s=ga(this,o,t,n,l,h,d,_,E,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,v=E;b<v;b+=3){let y=b,x=b+1,S=b+2;s=ga(this,g,t,n,l,h,d,y,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let p=m,g=M;p<g;p+=3){let _=p,E=p+1,b=p+2;s=ga(this,o,t,n,l,h,d,_,E,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function pm(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;ma.copy(a),ma.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ma);return l<e.near||l>e.far?null:{distance:l,point:ma.clone(),object:i}}function ga(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ua),i.getVertexPosition(c,fa),i.getVertexPosition(l,da);let h=pm(i,t,e,n,ua,fa,da,Wf);if(h){let d=new R;bi.getBarycoord(Wf,ua,fa,da,d),s&&(h.uv=bi.getInterpolatedAttribute(s,a,c,l,d,new nt)),r&&(h.uv1=bi.getInterpolatedAttribute(r,a,c,l,d,new nt)),o&&(h.normal=bi.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};bi.getNormal(ua,fa,da,u.normal),h.face=u,h.barycoord=d}return h}var xs=class extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ve,h=Ve,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class extends Ft{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new Kt,Xf=new Kt,xa=[],qf=new ii,mm=new Kt,Vr=new qt,Gr=new gn,io=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),qf.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(qf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Gr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Xf.multiplyMatrices(n,Ks),Vr.matrixWorld=Xf,Vr.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){let c=xa[o];c.instanceId=r,c.object=this,e.push(c)}xa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(s*this.count),s,this.count,mc,Nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new gn,gm=new nt(.5,.5),va=new R,ri=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],M=r[9],p=r[10],g=r[11],_=r[12],E=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-o,f-h,g-m,v-_).normalize(),s[1].setComponents(l+o,f+h,g+m,v+_).normalize(),s[2].setComponents(l+a,f+d,g+M,v+E).normalize(),s[3].setComponents(l-a,f-d,g-M,v-E).normalize(),n)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,f-u,g-p,v-b).normalize();else if(s[4].setComponents(l-c,f-u,g-p,v-b).normalize(),e===Pn)s[5].setComponents(l+c,f+u,g+p,v+b).normalize();else if(e===er)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=gm.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(va.x=s.normal.x>0?t.max.x:t.min.x,va.y=s.normal.y>0?t.max.y:t.min.y,va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yf=new Kt,za=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Yf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(Yf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ha=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zf=new Kt,mh=new no,_a=new gn,ya=new R,so=class extends Ge{constructor(t=new ie,e=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Zf.copy(s).invert(),mh.copy(t.ray).applyMatrix4(Zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,M=f;m<M;m++){let p=l.getX(m);ya.fromBufferAttribute(d,p),Kf(ya,p,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,M=f;m<M;m++)ya.fromBufferAttribute(d,m),Kf(ya,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kf(i,t,e,n,s,r,o){let a=mh.distanceSqToPoint(i);if(a<e){let c=new R;mh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ro=class extends ln{constructor(t=[],e=Ms,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ar=class extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends ln{constructor(t,e,n=Zn,s,r,o,a=Ve,c=Ve,l,h=wi,d=1){if(h!==wi&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oo=class extends Ti{constructor(t,e=Zn,n=Ms,s,r,o=Ve,a=Ve,c,l=wi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ao=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cr=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(d,2));function m(M,p,g,_,E,b,v,y,x,S,C){let A=b/x,I=v/S,N=b/2,B=v/2,L=y/2,O=x+1,k=S+1,H=0,j=0,W=new R;for(let $=0;$<k;$++){let tt=$*I-B;for(let wt=0;wt<O;wt++){let zt=wt*A-N;W[M]=zt*_,W[p]=tt*E,W[g]=L,l.push(W.x,W.y,W.z),W[M]=0,W[p]=0,W[g]=y>0?1:-1,h.push(W.x,W.y,W.z),d.push(wt/x),d.push(1-$/S),H+=1}}for(let $=0;$<S;$++)for(let tt=0;tt<x;tt++){let wt=u+tt+O*$,zt=u+tt+O*($+1),K=u+(tt+1)+O*($+1),xt=u+(tt+1)+O*$;c.push(wt,zt,xt),c.push(zt,K,xt),j+=6}a.addGroup(f,j,C),f+=j,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ai=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,M=[],p=n/2,g=0;_(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(){let b=new R,v=new R,y=0,x=(e-t)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,I=A*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,L=B*c+a,O=Math.sin(L),k=Math.cos(L);v.x=I*O,v.y=-A*n+p,v.z=I*k,d.push(v.x,v.y,v.z),b.set(O,x,k).normalize(),u.push(b.x,b.y,b.z),f.push(B,1-A),C.push(m++)}M.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let A=M[C][S],I=M[C+1][S],N=M[C+1][S+1],B=M[C][S+1];(t>0||C!==0)&&(h.push(A,I,B),y+=3),(e>0||C!==r-1)&&(h.push(I,N,B),y+=3)}l.addGroup(g,y,0),g+=y}function E(b){let v=m,y=new nt,x=new R,S=0,C=b===!0?t:e,A=b===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let L=N/s*c+a,O=Math.cos(L),k=Math.sin(L);x.x=C*k,x.y=p*A,x.z=C*O,d.push(x.x,x.y,x.z),u.push(0,A,0),y.x=O*.5+.5,y.y=k*.5*A+.5,f.push(y.x,y.y),m++}for(let N=0;N<s;N++){let B=v+N,L=I+N;b===!0?h.push(L,L+1,B):h.push(L+1,L,B),S+=3}l.addGroup(g,S,b===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ka=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new R,b=new R,v=new R;for(let y=0;y<e.length;y+=3)f(e[y+0],E),f(e[y+1],b),f(e[y+2],v),c(E,b,v,_)}function c(_,E,b,v){let y=v+1,x=[];for(let S=0;S<=y;S++){x[S]=[];let C=_.clone().lerp(b,S/y),A=E.clone().lerp(b,S/y),I=y-S;for(let N=0;N<=I;N++)N===0&&S===y?x[S][N]=C:x[S][N]=C.clone().lerp(A,N/I)}for(let S=0;S<y;S++)for(let C=0;C<2*(y-S)-1;C++){let A=Math.floor(C/2);C%2===0?(u(x[S][A+1]),u(x[S+1][A]),u(x[S][A])):(u(x[S][A+1]),u(x[S+1][A+1]),u(x[S+1][A]))}}function l(_){let E=new R;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(_),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let _=new R;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let b=p(_)/2/Math.PI+.5,v=g(_)/Math.PI+.5;o.push(b,1-v)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let E=o[_+0],b=o[_+2],v=o[_+4],y=Math.max(E,b,v),x=Math.min(E,b,v);y>.9&&x<.1&&(E<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),v<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,E){let b=_*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function m(){let _=new R,E=new R,b=new R,v=new R,y=new nt,x=new nt,S=new nt;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),E.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),y.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),v.copy(_).add(E).add(b).divideScalar(3);let I=p(v);M(y,A+0,_,I),M(x,A+2,E,I),M(S,A+4,b,I)}}function M(_,E,b,v){v<0&&_.x===1&&(o[E]=_.x-1),b.x===0&&b.z===0&&(o[E]=v/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},co=class i extends ka{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,c=new Kt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},lo=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Va=class extends lo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jf=new R,$f=new R,ah=new Kh,ch=new Kh,lh=new Kh,lr=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($f.subVectors(s[0],s[1]).add(s[0]),l=$f);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),m<1e-4&&(m=M),p<1e-4&&(p=M),ah.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,M,p),ch.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,M,p),lh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,M,p)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ch.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),lh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ah.calc(c),ch.calc(c),lh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function xm(i,t){let e=1-i;return e*e*t}function vm(i,t){return 2*(1-i)*i*t}function _m(i,t){return i*i*t}function qr(i,t,e,n){return xm(i,t)+vm(i,e)+_m(i,n)}function ym(i,t){let e=1-i;return e*e*e*t}function Mm(i,t){let e=1-i;return 3*e*e*i*t}function Sm(i,t){return 3*(1-i)*i*i*t}function bm(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return ym(i,t)+Mm(i,e)+Sm(i,n)+bm(i,s)}var Ga=class extends Ln{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wa=class extends Ln{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y),Yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends Ln{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends Ln{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends Ln{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends Ln{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Qf(a,c.x,l.x,h.x,d.x),Qf(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Em=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:lr,CubicBezierCurve:Ga,CubicBezierCurve3:Wa,EllipseCurve:lo,LineCurve:Xa,LineCurve3:qa,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:ho,SplineCurve:Za});var Ki=class i extends ie{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new R,u=new nt,f=new R,m=new R,M=new R,p=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-p,f.z=g*0,M.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:M.normalize(),c.push(M.x,M.y,M.z);break;default:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),c.push(f.x,f.y,f.z),M.copy(m)}for(let _=0;_<=e;_++){let E=n+_*h*s,b=Math.sin(E),v=Math.cos(E);for(let y=0;y<=t.length-1;y++){d.x=t[y].x*b,d.y=t[y].y,d.z=t[y].x*v,o.push(d.x,d.y,d.z),u.x=_/e,u.y=y/(t.length-1),a.push(u.x,u.y);let x=c[3*y+0]*b,S=c[3*y+1],C=c[3*y+0]*v;l.push(x,S,C)}}for(let _=0;_<e;_++)for(let E=0;E<t.length-1;E++){let b=E+_*t.length,v=b,y=b+t.length,x=b+t.length+1,S=b+1;r.push(v,y,S),r.push(x,S,y)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Xn=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],M=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let E=0;E<l;E++){let b=E*d-r;m.push(b,-_,0),M.push(0,0,1),p.push(E/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){let E=_+l*g,b=_+l*(g+1),v=_+1+l*(g+1),y=_+1+l*g;f.push(E,b,y),f.push(b,v,y)}this.setIndex(f),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ri=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new R,u=new R,f=[],m=[],M=[],p=[];for(let g=0;g<=n;g++){let _=[],E=g/n,b=o+E*a,v=t*Math.cos(b),y=Math.sqrt(t*t-v*v),x=0;g===0&&o===0?x=.5/e:g===n&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=s+C*r;d.x=-y*Math.cos(A),d.y=v,d.z=y*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),p.push(C+x,1-E),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let E=h[g][_+1],b=h[g][_],v=h[g+1][_],y=h[g+1][_+1];(g!==0||o>0)&&f.push(E,b,y),(g!==n-1||c<Math.PI)&&f.push(b,v,y)}this.setIndex(f),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var uo=class i extends ie{constructor(t=new ho(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new nt,h=new R,d=[],u=[],f=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function M(){for(let E=0;E<e;E++)p(E);p(r===!1?e:0),_(),g()}function p(E){h=t.getPointAt(E/e,h);let b=o.normals[E],v=o.binormals[E];for(let y=0;y<=s;y++){let x=y/s*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);c.x=C*b.x+S*v.x,c.y=C*b.y+S*v.y,c.z=C*b.z+S*v.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=e;E++)for(let b=1;b<=s;b++){let v=(s+1)*(E-1)+(b-1),y=(s+1)*E+(b-1),x=(s+1)*E+b,S=(s+1)*(E-1)+b;m.push(v,y,S),m.push(y,x,S)}}function _(){for(let E=0;E<=e;E++)for(let b=0;b<=s;b++)l.x=E/e,l.y=b/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Em[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jf(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function jf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Es={clone:bs,merge:nn},Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ka=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oi=class extends hn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var vs=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:r=t,a=2*e-n;break;case ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dh:o=t,c=2*n-e;break;case ph:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),M=m*m,p=M*m,g=-u*p+2*u*M-u*m,_=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*M+.5*m,b=f*p-f*M;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+_*o[l+v]+E*o[c+v]+b*o[d+v];return r}},Qa=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},ja=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tc=class extends Ji{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),M=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*M+o[c+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let M=o[l+m],p=o[c+m],g=f*u+m*2,_=d[g],E=d[g+1],b=t*u+m*2,v=h[b],y=h[b+1],x=Cm(n,e,_,v,s);r[m]=Wd(x,M,E,y,p)}return r}};function Wd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Wd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Rm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ma(t.settings)&&(n.settings={inTangents:Js(t.settings.inTangents,Array),outTangents:Js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ma(this.settings)&&(td(this.settings.inTangents,t),td(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ma(this.settings)&&(ed(this.settings.inTangents,t),ed(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ut("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ut("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&F0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let M=e[d+m];if(M!==e[u+m]||M!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ma(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function td(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function ed(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Ua;var $i=class extends yn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Zr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ec.prototype.ValueTypeName="color";var nc=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};nc.prototype.ValueTypeName="number";var ic=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)_e.slerpFlat(r,0,o,l-a,o,l,c);return r}},fo=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends yn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Zr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};sc.prototype.ValueTypeName="vector";var rc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xd=new rc,oc=class{constructor(t){this.manager=t!==void 0?t:Xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ur=class extends hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hh=new Kt,nd=new R,id=new R,po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(id),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===er||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new R,ba=new _e,ti=new R,mo=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sa,ba,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new R,sd=new nt,rd=new nt,Ye=class extends mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,sd,rd),e.subVectors(rd,sd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var gh=class extends po{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},ai=class extends hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},_s=class extends mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xh=class extends po{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new xh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xo=class extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var $s=-90,Qs=1,fr=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye($s,Qs,t,e);s.layers=this.layers,this.add(s);let r=new Ye($s,Qs,t,e);r.layers=this.layers,this.add(r);let o=new Ye($s,Qs,t,e);o.layers=this.layers,this.add(o);let a=new Ye($s,Qs,t,e);a.layers=this.layers,this.add(a);let c=new Ye($s,Qs,t,e);c.layers=this.layers,this.add(c);let l=new Ye($s,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ac=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},vo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Pm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Pm(){this._document.hidden===!1&&this.reset()}var $h="\\[\\]\\.:\\/",Im=new RegExp("["+$h+"]","g"),Qh="[^"+$h+"]",Lm="[^"+$h.replace("\\.","")+"]",Dm=/((?:WC+[\/:])*)/.source.replace("WC",Qh),Nm=/(WCOD+)?/.source.replace("WCOD",Lm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),Fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),Bm=new RegExp("^"+Dm+Nm+Um+Fm+"$"),Om=["material","materials","bones","map"],vh=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(t){let e=Bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=vh;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v1=new Float32Array(1);var su=class su{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};su.prototype.isMatrix2=!0;var _h=su;function jh(i,t,e,n){let s=zm(n);switch(e){case Oh:return i*t;case mc:return i*t/s.components*s.byteLength;case gc:return i*t/s.components*s.byteLength;case ji:return i*t*2/s.components*s.byteLength;case xc:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case vc:return i*t*4/s.components*s.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case _c:case Mc:return Math.max(i,8)*Math.max(t,8)/2;case bc:case Ec:case Tc:case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wc:case Eo:case Rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gc:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qc:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case xn:case Nh:return{byteLength:1,components:1};case xr:case Uh:case Ke:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case Zn:case fc:case Nn:return{byteLength:4,components:1};case Fh:case Bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],M=d[f];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let M=d[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,rg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
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
#endif`,Vg=`uniform sampler2D dfgLUT;
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
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
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform float backgroundBlurriness;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,$x=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,cv=`#define MATCAP
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
}`,lv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,xv=`#define TOON
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
}`,vv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:Km,alphatest_pars_fragment:Jm,aomap_fragment:$m,aomap_pars_fragment:Qm,batching_pars_vertex:jm,batching_vertex:tg,begin_vertex:eg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:hg,color_pars_fragment:ug,color_pars_vertex:fg,color_vertex:dg,common:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Eg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Fg,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Ug,lights_toon_fragment:Bg,lights_toon_pars_fragment:Og,lights_phong_fragment:zg,lights_phong_pars_fragment:Hg,lights_physical_fragment:kg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Jg,map_fragment:$g,map_pars_fragment:Qg,map_particle_fragment:jg,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ox,morphtarget_vertex:ax,normal_fragment_begin:cx,normal_fragment_maps:lx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:fx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:_x,premultiplied_alpha_fragment:yx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:bx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:Ox,transmission_pars_fragment:zx,uv_pars_fragment:Hx,uv_pars_vertex:kx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:Zx,cube_frag:Kx,depth_vert:Jx,depth_frag:$x,distance_vert:Qx,distance_frag:jx,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:rv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:cv,meshmatcap_frag:lv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:fv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:xv,points_vert:vv,points_frag:_v,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:bv},gt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},hi={basic:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:nn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:nn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:nn([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:nn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:nn([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:nn([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:nn([gt.common,gt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:nn([gt.lights,gt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};hi.physical={uniforms:nn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Qc={r:0,b:0,g:0},Ev=new Kt,pp=new Bt;pp.set(-1,0,0,0,1,0,0,0,1);function wv(i,t,e,n,s,r){let o=new ot(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let b=_.backgroundBlurriness>0;E=t.get(E,b)}return E}function m(_){let E=!1,b=f(_);b===null?p(o,a):b&&b.isColor&&(p(b,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(_,E){let b=f(E);b&&b.isCubeTexture?(l===void 0&&(l=new qt(new cr(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:bs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pp),l.material.toneMapped=te.getTransfer(b.colorSpace)!==oe,(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new qt(new Xn(2,2),new xe({name:"BackgroundMaterial",uniforms:bs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=te.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,E){_.getRGB(Qc,Jh(i)),e.buffers.color.setClear(Qc.r,Qc.g,Qc.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:M,dispose:g}}function Tv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,N,B,L,O){let k=!1,H=d(I,L,B,N);r!==H&&(r=H,l(r.object)),k=f(I,L,B,O),k&&m(I,L,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(I,N,B,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,B,L){let O=L.wireframe===!0,k=n[N.id];k===void 0&&(k={},n[N.id]=k);let H=I.isInstancedMesh===!0?I.id:0,j=k[H];j===void 0&&(j={},k[H]=j);let W=j[B.id];W===void 0&&(W={},j[B.id]=W);let $=W[O];return $===void 0&&($=u(c()),W[O]=$),$}function u(I){let N=[],B=[],L=[];for(let O=0;O<e;O++)N[O]=0,B[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,B,L){let O=r.attributes,k=N.attributes,H=0,j=B.getAttributes();for(let W in j)if(j[W].location>=0){let tt=O[W],wt=k[W];if(wt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function m(I,N,B,L){let O={},k=N.attributes,H=0,j=B.getAttributes();for(let W in j)if(j[W].location>=0){let tt=k[W];tt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),O[W]=wt,H++}r.attributes=O,r.attributesNum=H,r.index=L}function M(){let I=r.newAttributes;for(let N=0,B=I.length;N<B;N++)I[N]=0}function p(I){g(I,0)}function g(I,N){let B=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;B[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),O[I]!==N&&(i.vertexAttribDivisor(I,N),O[I]=N)}function _(){let I=r.newAttributes,N=r.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==I[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function E(I,N,B,L,O,k,H){H===!0?i.vertexAttribIPointer(I,N,B,O,k):i.vertexAttribPointer(I,N,B,L,O,k)}function b(I,N,B,L){M();let O=L.attributes,k=B.getAttributes(),H=N.defaultAttributeValues;for(let j in k){let W=k[j];if(W.location>=0){let $=O[j];if($===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let tt=$.normalized,wt=$.itemSize,zt=t.get($);if(zt===void 0)continue;let K=zt.buffer,xt=zt.type,St=zt.bytesPerElement,Ct=xt===i.INT||xt===i.UNSIGNED_INT||$.gpuType===fc;if($.isInterleavedBufferAttribute){let vt=$.data,kt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Ae=$.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Dt=0;Dt<W.locationSize;Dt++)g(W.location+Dt,vt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Dt=0;Dt<W.locationSize;Dt++)E(W.location+Dt,wt/W.locationSize,xt,tt,kt*St,(Ae+wt/W.locationSize*Dt)*St,Ct)}else{if($.isInstancedBufferAttribute){for(let vt=0;vt<W.locationSize;vt++)g(W.location+vt,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let vt=0;vt<W.locationSize;vt++)p(W.location+vt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let vt=0;vt<W.locationSize;vt++)E(W.location+vt,wt/W.locationSize,xt,tt,wt*St,wt/W.locationSize*vt*St,Ct)}}else if(H!==void 0){let tt=H[j];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}_()}function v(){C();for(let I in n){let N=n[I];for(let B in N){let L=N[B];for(let O in L){let k=L[O];for(let H in k)h(k[H].object),delete k[H];delete L[O]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let B in N){let L=N[B];for(let O in L){let k=L[O];for(let H in k)h(k[H].object),delete k[H];delete L[O]}}delete n[I.id]}function x(I){for(let N in n){let B=n[N];for(let L in B){let O=B[L];if(O[I.id]===void 0)continue;let k=O[I.id];for(let H in k)h(k[H].object),delete k[H];delete O[I.id]}}}function S(I){for(let N in n){let B=n[N],L=I.isInstancedMesh===!0?I.id:0,O=B[L];if(O!==void 0){for(let k in O){let H=O[k];for(let j in H)h(H[j].object),delete H[j];delete O[k]}delete B[L],Object.keys(B).length===0&&delete n[N]}}}function C(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:p,disableUnusedAttributes:_}}function Av(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Mn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===Ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==xn&&x!==Nn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:b,maxSamples:v,samples:y}}function Cv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Wn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let _=r?0:n,E=_*4,b=g.clippingState||null;c.value=b,b=h(m,u,E,f);for(let v=0;v!==E;++v)b[v]=e[v];g.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=c.value,m!==!0||p===null){let g=f+M*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,b=f;E!==M;++E,b+=4)o.copy(d[E]).applyMatrix4(_,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var Ro=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Ci});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Ze),new fr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qd=256,Pv=3,Iv=20,mp=256,gp=16,Lv=3,Dv=new R,Nv=new ot,_r=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fr(1,10,null),this._boxMesh=new qt(new cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Dv}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(Nv));let p=new fr(n,s,h);return p.position.copy(a),p.update(c,t),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=m,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qd,qh(t))}_fromTexture(t,e){t.mapping===Ms||t.mapping===gr?this._setSize(t.image.length===0?qd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Yd(t,!1,!1),n=Math.log2(t)-Pv;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ms||t.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Uv(),this._integrationMaterial=Fv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Lv)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(mp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Bv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Yd(i,t,e){return new Ro(i,{minFilter:Yn,generateMipmaps:t,type:Ke,colorSpace:ds,depthBuffer:e})}function Co(i,t,e){return new xe({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:De,blending:Ci,depthTest:!1,depthWrite:!1})}function Uv(){return Co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mp}u

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
	`)}function Fv(){return Co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gp}},`

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
	`)}function Bv(){return Co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Iv}
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
	`)}function Zd(){return Co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kd(){return Co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ov(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===lc||f===hc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new Ro(m.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===lc||f===hc,M=f===Ms||f===gr;if(m||M){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new _r(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||M&&_&&c(_)?(n===null&&(n=new _r(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===lc?u.mapping=Ms:f===hc&&(u.mapping=gr),u}function c(u){let f=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function zv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Hv(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(m){let M=m.attributes;for(let p in M)t.update(M[p],i.ARRAY_BUFFER)}function d(m){let M=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=M!==null?M.array.length:p.array.length/3-1,E=p.count>=65535?ms:ps,b=new E(Math.ceil(_/3)*6,1),v=b.array;if(M!==null){let x=M.array;g=M.version;for(let S=0,C=0;S<_;S+=3){let A=x[S+0],I=x[S+1],N=x[S+2];v[C++]=A,v[C++]=I,v[C++]=I,v[C++]=N,v[C++]=N,v[C++]=A}}else{g=p.version;for(let x=0,S=0;x<_;x+=3){let C=x+0,A=x+1,I=x+2;v[S++]=C,v[S++]=A,v[S++]=A,v[S++]=I,v[S++]=I,v[S++]=C}}b.version=g;let y=r.get(m);y&&t.remove(y),r.set(m,b)}function u(m){let M=r.get(m);if(M){let p=m.index;p!==null&&M.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let M=s[m].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function kv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=u[p];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gv(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),M===!0&&(E=3);let b=a.attributes.position.count*E,v=1;b>t.maxTextureSize&&(v=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let y=new Float32Array(b*v*4*d),x=new Qr(y,b,v,d);x.type=Nn,x.needsUpdate=!0;let S=E*4;for(let A=0;A<d;A++){let I=p[A],N=g[A],B=_[A],L=b*v*4*A;for(let O=0;O<I.count;O++){let k=O*S;f===!0&&(s.fromBufferAttribute(I,O),y[L+k+0]=s.x,y[L+k+1]=s.y,y[L+k+2]=s.z,y[L+k+3]=0),m===!0&&(s.fromBufferAttribute(N,O),y[L+k+4]=s.x,y[L+k+5]=s.y,y[L+k+6]=s.z,y[L+k+7]=0),M===!0&&(s.fromBufferAttribute(B,O),y[L+k+8]=s.x,y[L+k+9]=s.y,y[L+k+10]=s.z,y[L+k+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new nt(b,v)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Wv(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Xv={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function qv(i,t,e,n,s,r){let o=new Le(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new ie;h.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let d=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,d),f=new _s(-1,1,1,-1,0,1),m=null,M=null,p=!1,g,_=null,E=[],b=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),c!==null&&c.setSize(v,y);for(let x=0;x<E.length;x++){let S=E[x];S.setSize&&S.setSize(v,y)}},this.setEffects=function(v){E=v,b=E.length>0&&E[0].isRenderPass===!0;let y=o.width,x=o.height;E.length>0&&a===null&&(a=new Le(y,x,{type:Ke,depthBuffer:!1,stencilBuffer:!1}),c=new Le(y,x,{type:Ke,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new Ti(y,x),r===!0&&(l.format=Pi,l.type=Ss)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<E.length;C++){let A=E[C];A.setSize&&A.setSize(y,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(v,y){if(p||v.toneMapping===Dn&&E.length===0)return!1;if(_=y,y!==null){let x=y.width,S=y.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return b===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return b},this.end=function(v,y){v.toneMapping=g,p=!0;let x=o,S=a;for(let C=0;C<E.length;C++){let A=E[C];A.enabled!==!1&&(A.render(v,S,x,y),A.needsSwap!==!1&&(x=S,S=S===a?c:a))}if(m!==v.outputColorSpace||M!==v.toneMapping){m=v.outputColorSpace,M=v.toneMapping,d.defines={},te.getTransfer(m)===oe&&(d.defines.SRGB_TRANSFER="");let C=Xv[M];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(u,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var xp=new ln,vp=new Ti(1,1),_p=new oo(1),yp=new Qr,Mp=new Oa,Sp=new ro,Jd=[],$d=[],Qd=new Float32Array(16),jd=new Float32Array(9),tp=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function el(i,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function $v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;tp.set(n),i.uniformMatrix2fv(this.addr,!1,tp),Ue(e,n)}}function Qv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),Ue(e,n)}}function jv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),Ue(e,n)}}function t_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function nl(i){return i.version===0&&(i.compareFunction=Vh,i.needsUpdate=!0),i}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=nl(vp):r=xp,e.setTexture2D(t||r,s)}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mp,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=nl(_p):r=Sp,e.setTextureCube(t||r,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yp,s)}function f_(i){switch(i){case 5126:return Yv;case 35664:return Zv;case 35665:return Kv;case 35666:return Jv;case 35674:return $v;case 35675:return Qv;case 35676:return jv;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function d_(i,t){i.uniform1fv(this.addr,t)}function p_(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function m_(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function g_(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function x_(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v_(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function __(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y_(i,t){i.uniform1iv(this.addr,t)}function M_(i,t){i.uniform2iv(this.addr,t)}function S_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function w_(i,t){i.uniform2uiv(this.addr,t)}function T_(i,t){i.uniform3uiv(this.addr,t)}function A_(i,t){i.uniform4uiv(this.addr,t)}function R_(i,t,e){let n=this.cache,s=t.length,r=el(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=nl(vp):o=xp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function C_(i,t,e){let n=this.cache,s=t.length,r=el(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mp,r[o])}function P_(i,t,e){let n=this.cache,s=t.length,r=el(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=nl(_p):o=Sp;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function I_(i,t,e){let n=this.cache,s=t.length,r=el(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yp,r[o])}function L_(i){switch(i){case 5126:return d_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return x_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return E_;case 36294:return w_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}var au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f_(e.type)}},cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}},lu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ru=/(\w+)(\])?(\[|\.)?/g;function ep(i,t){i.seq.push(t),i.map[t.id]=t}function D_(i,t,e){let n=i.name,s=n.length;for(ru.lastIndex=0;;){let r=ru.exec(n),o=ru.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ep(e,l===void 0?new au(a,i,t):new cu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new lu(a),ep(e,d)),e=d}}}var vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);D_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function np(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N_=37297,U_=0;function F_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ip=new Bt;function B_(i){te._getMatrix(ip,te.workingColorSpace,i);let t=`mat3( ${ip.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Kr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(t),a)}else return r}function O_(i,t){let e=B_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var z_={[Th]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[Ch]:"ACESFilmic",[Ih]:"AgX",[Lh]:"Neutral",[Ph]:"Custom"};function H_(i,t){let e=z_[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jc=new R;function k_(){te.getLuminanceCoefficients(jc);let i=jc.x.toFixed(4),t=jc.y.toFixed(4),e=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function G_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ao(i){return i!==""}function rp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function op(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(X_,q_)}function q_(i,t){let e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return hu(e)}var Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(i){return i.replace(Y_,Z_)}function Z_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cp(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var K_={[dr]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function J_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $_={[gr]:"ENVMAP_MODE_REFRACTION"};function Q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j_={[wh]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":j_[i.combine]||"ENVMAP_BLENDING_NONE"}function ey(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=J_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Q_(e),d=ty(e),u=V_(e),f=G_(r),m=s.createProgram(),M,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ao).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ao).join(`
`),p.length>0&&(p+=`
`)):(M=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),p=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,O_("linearToOutputTexel",e.outputColorSpace),k_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ao).join(`
`)),o=hu(o),o=rp(o,e),o=op(o,e),a=hu(a),a=rp(a,e),a=op(a,e),o=ap(o),a=ap(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+M+o,E=g+p+a,b=np(s,s.VERTEX_SHADER,_),v=np(s,s.FRAGMENT_SHADER,E);s.attachShader(m,b),s.attachShader(m,v),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function y(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",N=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(v)||"",L=I.trim(),O=N.trim(),k=B.trim(),H=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,v);else{let W=sp(s,b,"vertex"),$=sp(s,v,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+W+`
`+$)}else L!==""?It("WebGLProgram: Program Info Log:",L):(O===""||k==="")&&(j=!1);j&&(A.diagnostics={runnable:H,programLog:L,vertexShader:{log:O,prefix:M},fragmentShader:{log:k,prefix:p}})}s.deleteShader(b),s.deleteShader(v),x=new vr(s,m),S=W_(s,m)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,N_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=v,this}var ny=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fu(t),e.set(t,n)),n}},fu=class{constructor(t){this.id=ny++,this.code=t,this.usedTimes=0}};function iy(i){return i===ji||i===Eo||i===wo}function sy(i,t,e,n,s,r){let o=new jr,a=new uu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,A,I,N){let B=A.fog,L=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=t.get(x.envMap||O,k),j=u[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=$!==void 0?$.length:0,wt=0;L.morphAttributes.position!==void 0&&(wt=1),L.morphAttributes.normal!==void 0&&(wt=2),L.morphAttributes.color!==void 0&&(wt=3);let zt,K,xt,St;if(j){let mt=hi[j];zt=mt.vertexShader,K=mt.fragmentShader}else{zt=x.vertexShader,K=x.fragmentShader;let mt=a.getVertexShaderStage(x),ce=a.getFragmentShaderStage(x);a.update(x,mt,ce),xt=mt.id,St=ce.id}let Ct=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),kt=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,Dt=!!x.map,ae=!!x.matcap,le=!!H,$t=le&&H.isPMREMTexture===!0,Xe=!!x.aoMap,Pe=!!x.lightMap,mn=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,jn=!!x.displacementMap,Oe=!!x.emissiveMap,wn=!!x.metalnessMap,Tn=!!x.roughnessMap,An=x.anisotropy>0,F=x.clearcoat>0,Rn=x.diffuseRoughness>0,Me=x.dispersion>0,Se=x.retroreflectivity>0,pt=x.iridescence>0,Ie=x.sheen>0,Pt=x.transmission>0,Ot=An&&!!x.anisotropyMap,P=F&&!!x.clearcoatMap,w=F&&!!x.clearcoatNormalMap,V=F&&!!x.clearcoatRoughnessMap,et=Rn&&!!x.diffuseRoughnessMap,Q=pt&&!!x.iridescenceMap,at=pt&&!!x.iridescenceThicknessMap,ft=Ie&&!!x.sheenColorMap,Y=Ie&&!!x.sheenRoughnessMap,Z=!!x.specularMap,lt=!!x.specularColorMap,D=!!x.specularIntensityMap,J=Pt&&!!x.transmissionMap,q=Pt&&!!x.thicknessMap,ht=!!x.gradientMap,rt=!!x.alphaMap,ct=x.alphaTest>0,At=!!x.alphaHash,Yt=!!x.extensions,it=Dn;x.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(it=i.toneMapping);let Rt=$t?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Xt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:zt,fragmentShader:K,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:St,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:kt,instancingColor:kt&&I.instanceColor!==null,instancingMorph:kt&&I.morphTexture!==null,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Dt,matcap:ae,envMap:le,envMapMode:le&&H.mapping,envMapPMREM:$t,envMapMaxLod:$t?Rt.length-1:null,envMapSize:$t?Rt[0].width:null,aoMap:Xe,lightMap:Pe,bumpMap:mn,normalMap:be,displacementMap:jn,emissiveMap:Oe,normalMapObjectSpace:be&&x.normalMapType===Id,normalMapTangentSpace:be&&x.normalMapType===Jc,packedNormalMap:be&&x.normalMapType===Jc&&iy(x.normalMap.format),metalnessMap:wn,roughnessMap:Tn,anisotropy:An,anisotropyMap:Ot,clearcoat:F,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:V,diffuseRoughness:Rn,diffuseRoughnessMap:et,dispersion:Me,retroreflection:Se,iridescence:pt,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:Ie,sheenColorMap:ft,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:lt,specularIntensityMap:D,transmission:Pt,transmissionMap:J,thicknessMap:q,gradientMap:ht,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:At,combine:x.combine,mapUv:Dt&&f(x.map.channel),aoMapUv:Xe&&f(x.aoMap.channel),lightMapUv:Pe&&f(x.lightMap.channel),bumpMapUv:mn&&f(x.bumpMap.channel),normalMapUv:be&&f(x.normalMap.channel),displacementMapUv:jn&&f(x.displacementMap.channel),emissiveMapUv:Oe&&f(x.emissiveMap.channel),metalnessMapUv:wn&&f(x.metalnessMap.channel),roughnessMapUv:Tn&&f(x.roughnessMap.channel),anisotropyMapUv:Ot&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:lt&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:rt&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||An),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Dt||rt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Dt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Te,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&x.extensions.multiDraw===!0||Ae)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function M(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let S=u[x.type],C;if(S){let A=hi[S];C=Es.clone(A.uniforms)}else C=x.uniforms;return C}function E(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new ey(i,S,x,s),l.push(C),h.set(S,C)),C}function b(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function y(){a.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:_,acquireProgram:E,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:y}}function ry(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function oy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,M,p,g){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:g},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=M,_.renderOrder=u.renderOrder,_.z=p,_.group=g),t++,_}function c(u,f,m,M,p,g,_){_.reversedDepth===!0&&(p=-p);let E=a(u,f,m,M,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function l(u,f,m,M,p,g){let _=a(u,f,m,M,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||oy),n.length>1&&n.sort(f||lp),s.length>1&&s.sort(f||lp)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function ay(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hp,i.set(n,[o])):s>=r.length?(o=new hp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ot};break;case"SpotLight":e={position:new R,direction:new R,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function ly(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hy=0;function uy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fy(i){let t=new cy,e=ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Kt,o=new Kt;function a(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,M=0,p=0,g=0,_=0,E=0,b=0,v=0,y=0,x=0,S=0,C=0,A=0;l.sort(uy);for(let N=0,B=l.length;N<B;N++){let L=l[N],O=L.color,k=L.intensity,H=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ji?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*k,d+=O.g*k,u+=O.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);A++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,tt=e.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=j;let wt=$.getViewportCount();for(let zt=0;zt<wt;zt++)n.sunShadowMatrix[M+zt]=$.getMatrix(zt),n.sunShadowCascade[M+zt]=$._cascadeData[zt];M+=wt,m++}n.sun[f]=W,f++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,tt=e.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=W,p++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(k),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;let $=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,$.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=$.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.spotShadow[_]=tt,n.spotShadowMap[_]=j,x++}_++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=W,E++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,tt=e.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=W,g++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[b]=W,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==E||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=E,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,I.sunLength=f,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=E,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=A,n.version=hy++)}function c(l,h){let d=0,u=0,f=0,m=0,M=0,p=0,g=h.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){let b=l[_];if(b.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let v=n.rectArea[M];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function up(i){let t=new fy(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function c(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function dy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new up(i),t.set(s,[a])):r>=o.length?(a=new up(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`,gy=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],xy=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],fp=new Kt,To=new R,ou=new R;function vy(i,t,e){let n=new ri,s=new nt,r=new nt,o=new ue,a=new vs,c=new Ja,l={},h=e.maxTextureSize,d={[ci]:De,[De]:ci,[Te]:Te},u=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:py,fragmentShader:my}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ie;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let g=this.type;this.render=function(y,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===cd&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let C=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=y.length;L<O;L++){let k=y[L],H=k.shadow;if(H===void 0){It("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===pr){if(k.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Le(s.x,s.y,{format:ji,type:Ke,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new Ti(s.x,s.y,Nn),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=wi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve}else k.isPointLight?(H.map=new Ro(s.x),H.map.depthTexture=new oo(s.x,Zn)):(H.map=new Le(s.x,s.y),H.map.depthTexture=new Ti(s.x,s.y,Zn)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=wi,this.type===dr?(H.map.depthTexture.compareFunction=W?kh:Hh,H.map.depthTexture.minFilter=Ze,H.map.depthTexture.magFilter=Ze):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();k.isPointLight!==!0&&H.updateMatrices(k,S);let tt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let wt=0;wt<$;wt++){let zt=H.getCamera(wt);if(k.isPointLight){let K=H.camera,xt=H.matrix,St=k.distance||K.far;St!==K.far&&(K.far=St,K.updateProjectionMatrix()),To.setFromMatrixPosition(k.matrixWorld),K.position.copy(To),ou.copy(K.position),ou.add(gy[wt]),K.up.copy(xy[wt]),K.lookAt(ou),K.updateMatrixWorld(),xt.makeTranslation(-To.x,-To.y,-To.z),fp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(fp,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(H.map),i.clear());let K=H.getViewport(wt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),N.viewport(o)}n=H.getFrustum(wt),b(x,S,zt,k,tt,this.type)}H.isPointLightShadow!==!0&&this.type===pr&&_(H,S),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(C,A,I)};function _(y,x){let S=t.update(M);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new Le(s.x,s.y,{format:ji,type:Ke}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,M,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(x,null,S,f,M,null)}function E(y,x,S,C){let A=null,I=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)A=I;else if(A=S.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=A.uuid,B=x.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let O=L[B];O===void 0&&(O=A.clone(),L[B]=O,x.addEventListener("dispose",v)),A=O}if(A.visible=x.visible,A.wireframe=x.wireframe,C===pr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=S}return A}function b(y,x,S,C,A,I){if(y.visible===!1)return;if(y.layers.test(A)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===pr)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let L=t.update(y),O=y.material;if(Array.isArray(O)){let k=L.groups;for(let H=0,j=k.length;H<j;H++){let W=k[H],$=O[W.materialIndex];if($&&$.visible){let tt=E(y,$,C,I);y.onBeforeShadow(i,y,x,S,L,tt,W),i.renderBufferDirect(S,null,L,tt,y,W),y.onAfterShadow(i,y,x,S,L,tt,W)}}}else if(O.visible){let k=E(y,O,C,I);y.onBeforeShadow(i,y,x,S,L,k,null),i.renderBufferDirect(S,null,L,k,y,null),y.onAfterShadow(i,y,x,S,L,k,null)}}let B=y.children;for(let L=0,O=B.length;L<O;L++)b(B[L],x,S,C,A,I)}function v(y){y.target.removeEventListener("dispose",v);for(let S in l){let C=l[S],A=y.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function _y(i,t){function e(){let D=!1,J=new ue,q=null,ht=new ue(0,0,0,0);return{setMask:function(rt){q!==rt&&!D&&(i.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){D=rt},setClear:function(rt,ct,At,Yt,it){it===!0&&(rt*=Yt,ct*=Yt,At*=Yt),J.set(rt,ct,At,Yt),ht.equals(J)===!1&&(i.clearColor(rt,ct,At,Yt),ht.copy(J))},reset:function(){D=!1,q=null,ht.set(-1,0,0,0)}}}function n(){let D=!1,J=!1,q=null,ht=null,rt=null;return{setReversed:function(ct){if(J!==ct){let At=t.get("EXT_clip_control");ct?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),J=ct;let Yt=rt;rt=null,this.setClear(Yt)}},getReversed:function(){return J},setTest:function(ct){ct?vt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(ct){q!==ct&&!D&&(i.depthMask(ct),q=ct)},setFunc:function(ct){if(J&&(ct=kd[ct]),ht!==ct){switch(ct){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=ct}},setLocked:function(ct){D=ct},setClear:function(ct){rt!==ct&&(rt=ct,J&&(ct=1-ct),i.clearDepth(ct))},reset:function(){D=!1,q=null,ht=null,rt=null,J=!1}}}function s(){let D=!1,J=null,q=null,ht=null,rt=null,ct=null,At=null,Yt=null,it=null;return{setTest:function(Rt){D||(Rt?vt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Rt){J!==Rt&&!D&&(i.stencilMask(Rt),J=Rt)},setFunc:function(Rt,Xt,mt){(q!==Rt||ht!==Xt||rt!==mt)&&(i.stencilFunc(Rt,Xt,mt),q=Rt,ht=Xt,rt=mt)},setOp:function(Rt,Xt,mt){(ct!==Rt||At!==Xt||Yt!==mt)&&(i.stencilOp(Rt,Xt,mt),ct=Rt,At=Xt,Yt=mt)},setLocked:function(Rt){D=Rt},setClear:function(Rt){it!==Rt&&(i.clearStencil(Rt),it=Rt)},reset:function(){D=!1,J=null,q=null,ht=null,rt=null,ct=null,At=null,Yt=null,it=null}}}let r=new e,o=new n,a=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],M=null,p=!1,g=null,_=null,E=null,b=null,v=null,y=null,x=null,S=new ot(0,0,0),C=0,A=!1,I=null,N=null,B=null,L=null,O=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let $=null,tt={},wt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),K=new ue().fromArray(wt),xt=new ue().fromArray(zt);function St(D,J,q,ht){let rt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<q;At++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(J+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ct}let Ct={};Ct[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),o.setFunc(tr),mn(!1),be(yh),vt(i.CULL_FACE),Xe(Ci);function vt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function kt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ae(D,J){return u[D]!==J?(i.bindFramebuffer(D,J),u[D]=J,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Dt(D,J){let q=m,ht=!1;if(D){q=f.get(J),q===void 0&&(q=[],f.set(J,q));let rt=D.textures;if(q.length!==rt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,At=rt.length;ct<At;ct++)q[ct]=i.COLOR_ATTACHMENT0+ct;q.length=rt.length,ht=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(q)}function ae(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let le={[ys]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[ud]:i.FUNC_REVERSE_SUBTRACT};le[fd]=i.MIN,le[dd]=i.MAX;let $t={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[bh]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[yd]:i.DST_COLOR,[vd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[Eh]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(D,J,q,ht,rt,ct,At,Yt,it,Rt){if(D===Ci){p===!0&&(kt(i.BLEND),p=!1);return}if(p===!1&&(vt(i.BLEND),p=!0),D!==ld){if(D!==g||Rt!==A){if((_!==ys||v!==ys)&&(i.blendEquation(i.FUNC_ADD),_=ys,v=ys),Rt)switch(D){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",D);break}else switch(D){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",D);break}E=null,b=null,y=null,x=null,S.set(0,0,0),C=0,g=D,A=Rt}return}rt=rt||J,ct=ct||q,At=At||ht,(J!==_||rt!==v)&&(i.blendEquationSeparate(le[J],le[rt]),_=J,v=rt),(q!==E||ht!==b||ct!==y||At!==x)&&(i.blendFuncSeparate($t[q],$t[ht],$t[ct],$t[At]),E=q,b=ht,y=ct,x=At),(Yt.equals(S)===!1||it!==C)&&(i.blendColor(Yt.r,Yt.g,Yt.b,it),S.copy(Yt),C=it),g=D,A=!1}function Pe(D,J){D.side===Te?kt(i.CULL_FACE):vt(i.CULL_FACE);let q=D.side===De;J&&(q=!q),mn(q),D.blending===mr&&D.transparent===!1?Xe(Ci):Xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ht=D.stencilWrite;a.setTest(ht),ht&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mn(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function be(D){D!==od?(vt(i.CULL_FACE),D!==N&&(D===yh?i.cullFace(i.BACK):D===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),N=D}function jn(D){D!==B&&(H&&i.lineWidth(D),B=D)}function Oe(D,J,q){D?(vt(i.POLYGON_OFFSET_FILL),(L!==J||O!==q)&&(L=J,O=q,o.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):kt(i.POLYGON_OFFSET_FILL)}function wn(D){D?vt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function Tn(D){D===void 0&&(D=i.TEXTURE0+k-1),$!==D&&(i.activeTexture(D),$=D)}function An(D,J,q){q===void 0&&($===null?q=i.TEXTURE0+k-1:q=$);let ht=tt[q];ht===void 0&&(ht={type:void 0,texture:void 0},tt[q]=ht),(ht.type!==D||ht.texture!==J)&&($!==q&&(i.activeTexture(q),$=q),i.bindTexture(D,J||Ct[D]),ht.type=D,ht.texture=J)}function F(){let D=tt[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Rn(){try{i.compressedTexImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Me(){try{i.compressedTexImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Se(){try{i.texSubImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function pt(){try{i.texSubImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Ie(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Ot(){try{i.texStorage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function P(){try{i.texStorage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function w(){try{i.texImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function V(){try{i.texImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function et(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Q(D,J){d[D]!==J&&(i.pixelStorei(D,J),d[D]=J)}function at(D){K.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function ft(D){xt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),xt.copy(D))}function Y(D,J){let q=l.get(J);q===void 0&&(q=new WeakMap,l.set(J,q));let ht=q.get(D);ht===void 0&&(ht=i.getUniformBlockIndex(J,D.name),i.uniformBlockBinding(J,ht,ht),q.set(D,ht))}function Z(D,J,q){let rt=l.get(J).get(D);c[rt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,q),c[rt]=q)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,tt={},u={},c={},f=new WeakMap,m=[],M=null,p=!1,g=null,_=null,E=null,b=null,v=null,y=null,x=null,S=new ot(0,0,0),C=0,A=!1,I=null,N=null,B=null,L=null,O=null,K.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:kt,bindFramebuffer:Ae,drawBuffers:Dt,useProgram:ae,setBlending:Xe,setMaterial:Pe,setFlipSided:mn,setCullFace:be,setLineWidth:jn,setPolygonOffset:Oe,setScissorTest:wn,activeTexture:Tn,bindTexture:An,unbindTexture:F,compressedTexImage2D:Rn,compressedTexImage3D:Me,texImage2D:w,texImage3D:V,pixelStorei:Q,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Ot,texStorage3D:P,texSubImage2D:Se,texSubImage3D:pt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Pt,scissor:at,viewport:ft,reset:lt}}function yy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,M=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Jr("canvas")}function _(P,w,V){let et=1,Q=Ot(P);if((Q.width>V||Q.height>V)&&(et=V/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let at=Math.floor(et*Q.width),ft=Math.floor(et*Q.height);u===void 0&&(u=g(at,ft));let Y=w?g(at,ft):u;return Y.width=at,Y.height=ft,Y.getContext("2d").drawImage(P,0,0,at,ft),It("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+at+"x"+ft+")."),Y}else return"data"in P&&It("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function E(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,w,V,et,Q,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft;et&&(ft=t.get("EXT_texture_norm16"),ft||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=w;if(w===i.RED&&(V===i.FLOAT&&(Y=i.R32F),V===i.HALF_FLOAT&&(Y=i.R16F),V===i.UNSIGNED_BYTE&&(Y=i.R8),V===i.UNSIGNED_SHORT&&ft&&(Y=ft.R16_EXT),V===i.SHORT&&ft&&(Y=ft.R16_SNORM_EXT)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.R8UI),V===i.UNSIGNED_SHORT&&(Y=i.R16UI),V===i.UNSIGNED_INT&&(Y=i.R32UI),V===i.BYTE&&(Y=i.R8I),V===i.SHORT&&(Y=i.R16I),V===i.INT&&(Y=i.R32I)),w===i.RG&&(V===i.FLOAT&&(Y=i.RG32F),V===i.HALF_FLOAT&&(Y=i.RG16F),V===i.UNSIGNED_BYTE&&(Y=i.RG8),V===i.UNSIGNED_SHORT&&ft&&(Y=ft.RG16_EXT),V===i.SHORT&&ft&&(Y=ft.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RG8UI),V===i.UNSIGNED_SHORT&&(Y=i.RG16UI),V===i.UNSIGNED_INT&&(Y=i.RG32UI),V===i.BYTE&&(Y=i.RG8I),V===i.SHORT&&(Y=i.RG16I),V===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),V===i.UNSIGNED_INT&&(Y=i.RGB32UI),V===i.BYTE&&(Y=i.RGB8I),V===i.SHORT&&(Y=i.RGB16I),V===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),V===i.UNSIGNED_INT&&(Y=i.RGBA32UI),V===i.BYTE&&(Y=i.RGBA8I),V===i.SHORT&&(Y=i.RGBA16I),V===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&(V===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGB16_EXT),V===i.SHORT&&ft&&(Y=ft.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),w===i.RGBA){let Z=at?Kr:te.getTransfer(Q);V===i.FLOAT&&(Y=i.RGBA32F),V===i.HALF_FLOAT&&(Y=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Y=Z===oe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGBA16_EXT),V===i.SHORT&&ft&&(Y=ft.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(P,w){let V;return P?w===null||w===Zn||w===Ss?V=i.DEPTH24_STENCIL8:w===Nn?V=i.DEPTH32F_STENCIL8:w===xr&&(V=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zn||w===Ss?V=i.DEPTH_COMPONENT24:w===Nn?V=i.DEPTH_COMPONENT32F:w===xr&&(V=i.DEPTH_COMPONENT16),V}function S(P,w){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ve&&P.minFilter!==Ze?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){let w=new WeakRef(P);n.get(P).__ref=w,m.add(w),M.register(P,w,w)}function A(P){let w=n.get(P).__ref;w!==void 0&&(m.delete(w),M.unregister(w))}function I(P){B(P.target)}function N(P){L(P.target)}function B(P){P.removeEventListener("dispose",I),A(P),k(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function L(P){P.removeEventListener("dispose",N),A(P),j(P)}function O(){for(let P of m){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):B(w))}m.clear(),d.clear()}function k(P){let w=n.get(P);if(w.__webglInit===void 0)return;let V=P.source,et=f.get(V);if(et){let Q=et[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(P),Object.keys(et).length===0&&f.delete(V)}n.remove(P)}function H(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let V=P.source,et=f.get(V);delete et[w.__cacheKey],o.memory.textures--}function j(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let V=P.depthTexture;if(V&&V.renderTarget===P&&B(V),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let at=0;at<w.__webglFramebuffer[Q].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[Q][at]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let et=P.textures;for(let Q=0,at=et.length;Q<at;Q++){let ft=n.get(et[Q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(et[Q])}n.remove(P)}let W=0;function $(){W=0}function tt(){return W}function wt(P){W=P}function zt(){let P=W;return P>=s.maxTextures&&It("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,P}function K(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function xt(P,w){let V=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let et=P.image;if(et===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(V,P,w);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function St(P,w){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Pe(V,P,w);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function Ct(P,w){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Pe(V,P,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function vt(P,w){let V=n.get(P);if(P.version>0&&V.__version!==P.version){mn(V,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let kt={[Da]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Ae={[Ve]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[uc]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Dt={[Dd]:i.NEVER,[Vh]:i.ALWAYS,[Nd]:i.LESS,[Hh]:i.LEQUAL,[Ud]:i.EQUAL,[kh]:i.GEQUAL,[Fd]:i.GREATER,[Bd]:i.NOTEQUAL};function ae(P,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ze||w.magFilter===uc||w.magFilter===_o||w.magFilter===Yn||w.minFilter===Ze||w.minFilter===uc||w.minFilter===_o||w.minFilter===Yn)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,kt[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,kt[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,kt[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ae[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ae[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Dt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ve||w.minFilter!==_o&&w.minFilter!==Yn||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I),C(w));let et=w.source,Q=f.get(et);Q===void 0&&(Q={},f.set(et,Q));let at=K(w);if(at!==P.__cacheKey){Q[at]===void 0&&(Q[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[at].usedTimes++;let ft=Q[P.__cacheKey];ft!==void 0&&(Q[P.__cacheKey].usedTimes--,ft.usedTimes===0&&H(w)),P.__cacheKey=at,P.__webglTexture=Q[at].texture}return V}function $t(P,w,V){return Math.floor(Math.floor(P/V)/w)}function Xe(P,w,V,et){let at=P.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,V,et,w.data);else{at.sort((D,J)=>D.start-J.start);let ft=0;for(let D=1;D<at.length;D++){let J=at[ft],q=at[D],ht=J.start+J.count,rt=$t(q.start,w.width,4),ct=$t(J.start,w.width,4);q.start<=ht+1&&rt===ct&&$t(q.start+q.count-1,w.width,4)===rt?J.count=Math.max(J.count,q.start+q.count-J.start):(++ft,at[ft]=q)}at.length=ft+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,J=at.length;D<J;D++){let q=at[D],ht=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ct=ht%w.width,At=Math.floor(ht/w.width),Yt=rt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,At),e.texSubImage2D(i.TEXTURE_2D,0,ct,At,Yt,it,V,et,w.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function Pe(P,w,V){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);let Q=le(P,w),at=w.source;e.bindTexture(et,P.__webglTexture,i.TEXTURE0+V);let ft=n.get(at);if(at.version!==ft.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let it=te.getPrimaries(te.workingColorSpace),Rt=w.colorSpace===Ii?null:te.getPrimaries(w.colorSpace),Xt=w.colorSpace===Ii||it===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let Z=_(w.image,!1,s.maxTextureSize);Z=Pt(w,Z);let lt=r.convert(w.format,w.colorSpace),D=r.convert(w.type),J=y(w.internalFormat,lt,D,w.normalized,w.colorSpace,w.isVideoTexture);ae(et,w);let q,ht=w.mipmaps,rt=w.isVideoTexture!==!0,ct=ft.__version===void 0||Q===!0,At=at.dataReady,Yt=S(w,Z);if(w.isDepthTexture)J=x(w.format===Pi,w.type),ct&&(rt?e.texStorage2D(i.TEXTURE_2D,1,J,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,lt,D,null));else if(w.isDataTexture)if(ht.length>0){rt&&ct&&e.texStorage2D(i.TEXTURE_2D,Yt,J,ht[0].width,ht[0].height);for(let it=0,Rt=ht.length;it<Rt;it++)q=ht[it],rt?At&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,D,q.data):e.texImage2D(i.TEXTURE_2D,it,J,q.width,q.height,0,lt,D,q.data);w.generateMipmaps=!1}else rt?(ct&&e.texStorage2D(i.TEXTURE_2D,Yt,J,Z.width,Z.height),At&&Xe(w,Z,lt,D)):e.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,lt,D,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,J,ht[0].width,ht[0].height,Z.depth);for(let it=0,Rt=ht.length;it<Rt;it++)if(q=ht[it],w.format!==Mn)if(lt!==null)if(rt){if(At)if(w.layerUpdates.size>0){let Xt=jh(q.width,q.height,w.format,w.type);for(let mt of w.layerUpdates){let ce=q.data.subarray(mt*Xt/q.data.BYTES_PER_ELEMENT,(mt+1)*Xt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,mt,q.width,q.height,1,lt,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,Z.depth,lt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,J,q.width,q.height,Z.depth,0,q.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?At&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,Z.depth,lt,D,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,J,q.width,q.height,Z.depth,0,lt,D,q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{rt&&ct&&e.texStorage2D(i.TEXTURE_2D,Yt,J,ht[0].width,ht[0].height);for(let it=0,Rt=ht.length;it<Rt;it++)q=ht[it],w.format!==Mn?lt!==null?rt?At&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,J,q.width,q.height,0,q.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?At&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,D,q.data):e.texImage2D(i.TEXTURE_2D,it,J,q.width,q.height,0,lt,D,q.data)}else if(w.isDataArrayTexture)if(rt){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,J,Z.width,Z.height,Z.depth),At)if(w.layerUpdates.size>0){let it=jh(Z.width,Z.height,w.format,w.type);for(let Rt of w.layerUpdates){let Xt=Z.data.subarray(Rt*it/Z.data.BYTES_PER_ELEMENT,(Rt+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,Z.width,Z.height,1,lt,D,Xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,D,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,lt,D,Z.data);else if(w.isData3DTexture)rt?(ct&&e.texStorage3D(i.TEXTURE_3D,Yt,J,Z.width,Z.height,Z.depth),At&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,D,Z.data)):e.texImage3D(i.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,lt,D,Z.data);else if(w.isFramebufferTexture){if(ct)if(rt)e.texStorage2D(i.TEXTURE_2D,Yt,J,Z.width,Z.height);else{let it=Z.width,Rt=Z.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,J,it,Rt,0,lt,D,null),it>>=1,Rt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),d.add(w),it.onpaint=Rt=>{let Xt=Rt.changedElements;for(let mt of d)Xt.includes(mt.image)&&(mt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Xt=i.RGBA,mt=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,mt,ce,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&ct){let it=Ot(ht[0]);e.texStorage2D(i.TEXTURE_2D,Yt,J,it.width,it.height)}for(let it=0,Rt=ht.length;it<Rt;it++)q=ht[it],rt?At&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,lt,D,q):e.texImage2D(i.TEXTURE_2D,it,J,lt,D,q);w.generateMipmaps=!1}else if(rt){if(ct){let it=Ot(Z);e.texStorage2D(i.TEXTURE_2D,Yt,J,it.width,it.height)}At&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,D,Z)}else e.texImage2D(i.TEXTURE_2D,0,J,lt,D,Z);E(w)&&w.mipmapsAutoUpdate===!0&&b(et),ft.__version=at.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function mn(P,w,V){if(w.image.length!==6)return;let et=le(P,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);let at=n.get(Q);if(Q.version!==at.__version||et===!0){e.activeTexture(i.TEXTURE0+V);let ft=te.getPrimaries(te.workingColorSpace),Y=w.colorSpace===Ii?null:te.getPrimaries(w.colorSpace),Z=w.colorSpace===Ii||ft===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let lt=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,J=[];for(let mt=0;mt<6;mt++)!lt&&!D?J[mt]=_(w.image[mt],!0,s.maxCubemapSize):J[mt]=D?w.image[mt].image:w.image[mt],J[mt]=Pt(w,J[mt]);let q=J[0],ht=r.convert(w.format,w.colorSpace),rt=r.convert(w.type),ct=y(w.internalFormat,ht,rt,w.normalized,w.colorSpace),At=w.isVideoTexture!==!0,Yt=at.__version===void 0||et===!0,it=Q.dataReady,Rt=S(w,q);ae(i.TEXTURE_CUBE_MAP,w);let Xt;if(w.isDepthTexture){if(ct=x(w.format===Pi,w.type),Yt)if(At)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ct,q.width,q.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ct,q.width,q.height,0,ht,rt,null)}else if(lt){At&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ct,q.width,q.height);for(let mt=0;mt<6;mt++){Xt=J[mt].mipmaps;for(let ce=0;ce<Xt.length;ce++){let ze=Xt[ce];w.format!==Mn?ht!==null?At?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce,0,0,ze.width,ze.height,ht,ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce,ct,ze.width,ze.height,0,ze.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce,0,0,ze.width,ze.height,ht,rt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce,ct,ze.width,ze.height,0,ht,rt,ze.data)}}}else{if(Xt=w.mipmaps,At&&Yt){Xt.length>0&&Rt++;let mt=Ot(J[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ct,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(D){At?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,J[mt].width,J[mt].height,ht,rt,J[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ct,J[mt].width,J[mt].height,0,ht,rt,J[mt].data);for(let ce=0;ce<Xt.length;ce++){let zi=Xt[ce].image[mt].image;At?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce+1,0,0,zi.width,zi.height,ht,rt,zi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce+1,ct,zi.width,zi.height,0,ht,rt,zi.data)}}else{At?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ht,rt,J[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ct,ht,rt,J[mt]);for(let ce=0;ce<Xt.length;ce++){let ze=Xt[ce];At?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce+1,0,0,ht,rt,ze.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ce+1,ct,ht,rt,ze.image[mt])}}}E(w)&&w.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),at.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function be(P,w,V,et,Q,at){let ft=r.convert(V.format,V.colorSpace),Y=r.convert(V.type),Z=y(V.internalFormat,ft,Y,V.normalized,V.colorSpace),lt=n.get(w),D=n.get(V);if(D.__renderTarget=w,!lt.__hasExternalTextures){let J=Math.max(1,w.width>>at),q=Math.max(1,w.height>>at);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,at,Z,J,q,w.depth,0,ft,Y,null):e.texImage2D(Q,at,Z,J,q,0,ft,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Q,D.__webglTexture,0,Se(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,Q,D.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function jn(P,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let et=w.depthTexture,Q=et&&et.isDepthTexture?et.type:null,at=x(w.stencilBuffer,Q),ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(w),at,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(w),at,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,at,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,P)}else{let et=w.textures;for(let Q=0;Q<et.length;Q++){let at=et[Q],ft=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),Z=y(at.internalFormat,ft,Y,at.normalized,at.colorSpace);pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(w),Z,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(w),Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(P,w,V){let et=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(w.depthTexture);Q.__renderTarget=w;let at=et?w.depthTexture.image[0]:w.depthTexture.image;(!Q.__webglTexture||at.width!==w.width||at.height!==w.height)&&(at.width=w.width,at.height=w.height,w.depthTexture.needsUpdate=!0),et?vt(w.depthTexture,0):xt(w.depthTexture,0);let ft=Q.__webglTexture,Y=Se(w),Z=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,lt=w.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===wi)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,Z,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,lt,Z,ft,0);else if(w.depthTexture.format===Pi)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,Z,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,lt,Z,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wn(P){let w=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let et=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=et}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(V)for(let et=0;et<6;et++)Oe(w.__webglFramebuffer[et],P,et);else P.texture.mipmaps.length>0?Oe(w.__webglFramebuffer[0],P,0):Oe(w.__webglFramebuffer,P,0);else if(V){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),jn(w.__webglDepthbuffer[et],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,at)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),jn(w.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tn(P,w,V){let et=n.get(P);w!==void 0&&be(et.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&wn(P)}function An(P){let w=P.texture,V=n.get(P),et=n.get(w);P.addEventListener("dispose",N),C(P);let Q=P.textures,at=P.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),at){V.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(w.mipmaps.length>0){V.__webglFramebuffer[Y]=[];for(let Z=0;Z<w.mipmaps.length;Z++)V.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else V.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(w.mipmaps.length>0){V.__webglFramebuffer=[];for(let Y=0;Y<w.mipmaps.length;Y++)V.__webglFramebuffer[Y]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Y=0,Z=Q.length;Y<Z;Y++){let lt=n.get(Q[Y]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&pt(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let Z=Q[Y];V.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Y]);let lt=r.convert(Z.format,Z.colorSpace),D=r.convert(Z.type),J=y(Z.internalFormat,lt,D,Z.normalized,Z.colorSpace,P.isXRRenderTarget===!0),q=Se(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,V.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),jn(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ae(i.TEXTURE_CUBE_MAP,w);for(let Y=0;Y<6;Y++)if(w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)be(V.__webglFramebuffer[Y][Z],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else be(V.__webglFramebuffer[Y],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(w)?b(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let Y=0,Z=Q.length;Y<Z;Y++){let lt=Q[Y],D=n.get(lt),J=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,D.__webglTexture),ae(J,lt),be(V.__webglFramebuffer,P,lt,i.COLOR_ATTACHMENT0+Y,J,0),E(lt)&&b(J)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Y=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),ae(Y,w),w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)be(V.__webglFramebuffer[Z],P,w,i.COLOR_ATTACHMENT0,Y,Z);else be(V.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,Y,0);E(w)?b(Y):w.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&wn(P)}function F(P){let w=P.textures;for(let V=0,et=w.length;V<et;V++){let Q=w[V];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let at=v(P),ft=n.get(Q).__webglTexture;e.bindTexture(at,ft),b(at),e.unbindTexture()}}}let Rn=[];function Me(P){if(P.samples>0){if(pt(P)===!1){let w=P.textures,V=P.width,et=P.height,Q=i.COLOR_BUFFER_BIT,at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(P),Y=w.length>1;if(Y)for(let lt=0;lt<w.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let lt=0;lt<w.length;lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[lt]);let D=n.get(w[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,V,et,0,0,V,et,Q,i.NEAREST),c===!0&&(Rn.length=0,Rn.push(i.COLOR_ATTACHMENT0+lt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Rn.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let lt=0;lt<w.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[lt]);let D=n.get(w[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Se(P){return Math.min(s.maxSamples,P.samples)}function pt(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Pt(P,w){let V=P.colorSpace,et=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ds&&V!==Ii&&(te.getTransfer(V)===oe?(et!==Mn||Q!==xn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",V)),w}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=zt,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=xt,this.setTexture2DArray=St,this.setTexture3D=Ct,this.setTextureCube=vt,this.rebindTextures=Tn,this.setupRenderTarget=An,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=wn,this.setupFrameBufferTexture=be,this.useMultisampledRTT=pt,this.dispose=O}function My(i,t){function e(n,s=Ii){let r,o=te.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return i.BYTE;if(n===Uh)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ke)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===zh)return i.RGB;if(n===Mn)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===xc)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===bo)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===yc||n===Mc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Ec||n===wc||n===Tc||n===Ac||n===Eo||n===Rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Ec)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tc)return r.COMPRESSED_R11_EAC;if(n===Ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Bc||n===Oc||n===zc||n===Hc||n===kc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gc)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Yc||n===wo||n===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,by=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Sy,fragmentShader:by,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,M=typeof XRWebGLBinding<"u",p=new du,g={},_=e.getContextAttributes(),E=null,b=null,v=[],y=[],x=new nt,S=null,C=null,A=new Ye;A.viewport=new ue;let I=new Ye;I.viewport=new ue;let N=[A,I],B=new ac,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xt=v[K];return xt===void 0&&(xt=new rr,v[K]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(K){let xt=v[K];return xt===void 0&&(xt=new rr,v[K]=xt),xt.getGripSpace()},this.getHand=function(K){let xt=v[K];return xt===void 0&&(xt=new rr,v[K]=xt),xt.getHandSpace()};function k(K){let xt=y.indexOf(K.inputSource);if(xt===-1)return;let St=v[xt];St!==void 0&&(St.update(K.inputSource,K.frame,l||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let K=0;K<v.length;K++){let xt=y[K];xt!==null&&(y[K]=null,v[K].disconnect(xt))}L=null,O=null,p.reset();for(let K in g)delete g[K];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,b=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),C!==null){let K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ct=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=_.stencil?Pi:wi,Ct=_.stencil?Ss:Zn);let kt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Le(u.textureWidth,u.textureHeight,{format:Mn,type:xn,depthTexture:new Ti(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Le(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(K){for(let xt=0;xt<K.removed.length;xt++){let St=K.removed[xt],Ct=y.indexOf(St);Ct>=0&&(y[Ct]=null,v[Ct].disconnect(St))}for(let xt=0;xt<K.added.length;xt++){let St=K.added[xt],Ct=y.indexOf(St);if(Ct===-1){for(let kt=0;kt<v.length;kt++)if(kt>=y.length){y.push(St),Ct=kt;break}else if(y[kt]===null){y[kt]=St,Ct=kt;break}if(Ct===-1)break}let vt=v[Ct];vt&&vt.connect(St)}}function W(K,xt){xt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let xt=K.near,St=K.far;p.texture!==null&&(p.depthNear>0&&(xt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),B.near=I.near=A.near=xt,B.far=I.far=A.far=St,(L!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,O=B.far),B.layers.mask=K.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Ct=K.parent,vt=B.cameras;W(B,Ct);for(let kt=0;kt<vt.length;kt++)W(vt[kt],Ct);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),$(K,B,Ct)};function $(K,xt,St){St===null?K.matrix.copy(xt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(xt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xt.projectionMatrix),K.projectionMatrixInverse.copy(xt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(K){return g[K]};let tt=null;function wt(K,xt){if(h=xt.getViewerPose(l||o),m=xt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Ct=!1;St.length!==B.cameras.length&&(B.cameras.length=0,Ct=!0);for(let Dt=0;Dt<St.length;Dt++){let ae=St[Dt],le=null;if(f!==null)le=f.getViewport(ae);else{let Xe=d.getViewSubImage(u,ae);le=Xe.viewport,Dt===0&&(t.setRenderTargetTextures(b,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(b))}let $t=N[Dt];$t===void 0&&($t=new Ye,$t.layers.enable(Dt),$t.viewport=new ue,N[Dt]=$t),$t.matrix.fromArray(ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(le.x,le.y,le.width,le.height),Dt===0&&(B.matrix.copy($t.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ct===!0&&B.cameras.push($t)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Dt=d.getDepthInformation(St[0]);Dt&&Dt.isValid&&Dt.texture&&p.init(Dt,s.renderState)}if(vt&&vt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<St.length;Dt++){let ae=St[Dt].camera;if(ae){let le=g[ae];le||(le=new ao,g[ae]=le);let $t=d.getCameraImage(ae);le.sourceTexture=$t}}}}for(let St=0;St<v.length;St++){let Ct=y[St],vt=v[St];Ct!==null&&vt!==void 0&&vt.update(Ct,xt,l||o)}tt&&tt(K,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),m=null}let zt=new dp;zt.setAnimationLoop(wt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}},Ey=new Kt,bp=new Bt;bp.set(-1,0,0,0,1,0,0,0,1);function wy(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Jh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,E,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),M(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,E):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===De&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===De&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=t.get(g),E=_.envMap,b=_.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(bp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===De&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function M(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ty(i,t,e,n){let s={},r={};function o(_,E){let b=E.program;n.uniformBlockBinding(_,b,s[_.id])}function a(_,E){let b=s[_.id];b===void 0&&(m(_),b=c(_),s[_.id]=b,_.addEventListener("dispose",p));let v=E.program;n.updateUBOMapping(_,v);let y=t.render.frame;r[_.id]!==y&&(l(_),r[_.id]=y)}function c(_){let E=i.createBuffer(),b=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,v),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(_){let E=s[_.id],b=_.uniforms,v=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,x=b.length;y<x;y++){let S=b[y];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],y,C,v);else h(S,y,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,E,b,v){if(u(_,E,b,v)===!0){let y=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let A=x[C],I=M(A,!0);d(A,_.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function d(_,E,b){typeof _=="number"||typeof _=="boolean"?E[b]=_:_.isMatrix3?(E[b]=_.elements[0],E[b+1]=_.elements[1],E[b+2]=_.elements[2],E[b+3]=0,E[b+4]=_.elements[3],E[b+5]=_.elements[4],E[b+6]=_.elements[5],E[b+7]=0,E[b+8]=_.elements[6],E[b+9]=_.elements[7],E[b+10]=_.elements[8],E[b+11]=0):ArrayBuffer.isView(_)?E.set(_.subarray(0,E.length-b),b):_.toArray(E,b)}function u(_,E,b,v){let y=_.value,x=E+"_"+b;if(Array.isArray(y)){v[x]===void 0&&(v[x]=[]);let S=v[x],C=!1;for(let A=0;A<y.length;A++)f(y[A],S,A)===!0&&(C=!0);return C}return f(y,v,x)}function f(_,E,b){if(E[b]===void 0)return typeof _=="number"||typeof _=="boolean"?E[b]=_:ArrayBuffer.isView(_)?E[b]=_.slice():E[b]=_.clone(),!0;{let v=E[b];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return E[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(v.equals(_)===!1)return v.copy(_),!0}}return!1}function m(_){let E=_.uniforms,b=0,v=16;for(let x=0,S=E.length;x<S;x++){let C=Array.isArray(E[x])?E[x]:[E[x]];for(let A=0,I=C.length;A<I;A++){let N=C[A],B=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(E[x])||Array.isArray(N.value),O=b;for(let H=0,j=B.length;H<j;H++){let W=B[H],$=M(W,L),tt=b%v,wt=tt%$.boundary,zt=tt+wt;b+=wt,zt!==0&&v-zt<$.storage&&(b+=v-zt),H===0&&(O=b),b+=$.storage}let k=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new k((b-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let y=b%v;return y>0&&(b+=v-y),_.__size=b,_.__cache={},this}function M(_,E){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=16,b.storage=48):_.isMatrix4?(b.boundary=16,b.storage=64):_.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):It("WebGLRenderer: Unsupported uniform value type.",_),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(_){let E=_.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var Ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Ry(){return li===null&&(li=new xs(Ay,16,16,ji,Ke),li.name="DFG_LUT",li.minFilter=Ze,li.magFilter=Ze,li.wrapS=ei,li.wrapT=ei,li.generateMipmaps=!1,li.needsUpdate=!0),li}var tl=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let M=f,p=new Set([vc,xc,gc]),g=new Set([xn,Zn,xr,Ss,dc,pc]),_=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},v=null,y=null,x=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,N=null,B=null,L=null,O=null;this._outputColorSpace=cn;let k=0,H=0,j=null,W=-1,$=null,tt=new ue,wt=new ue,zt=null,K=new ot(0),xt=0,St=e.width,Ct=e.height,vt=1,kt=null,Ae=null,Dt=new ue(0,0,St,Ct),ae=new ue(0,0,St,Ct),le=!1,$t=new ri,Xe=new za,Pe=!1,mn=!1,be=new Kt,jn=new R,Oe=new ue,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tn=!1;function An(){return j===null?vt:1}let F=n;function Rn(T,U){return e.getContext(T,U)}let Me,Se,pt,Ie,Pt,Ot,P,w,V,et,Q,at,ft,Y,Z,lt,D,J,q,ht,rt,ct,At;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),F===null){let U="webgl2";if(F=Rn(U,T),F===null)throw Rn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(T){throw e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ut("WebGLRenderer: "+T.message),T}function Yt(){Me=new zv(F),Me.init(),rt=new My(F,Me),Se=new Rv(F,Me,t,rt),pt=new _y(F,Me),Se.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),B=F.createFramebuffer(),L=F.createFramebuffer(),O=F.createFramebuffer(),Ie=new Vv(F),Pt=new ry,Ot=new yy(F,Me,pt,Pt,Se,rt,Ie),P=new Ov(A),w=new Wm(F),ct=new Tv(F,w),V=new Hv(F,w,Ie,ct),et=new Wv(F,V,w,ct,Ie),J=new Gv(F,Se,Ot),Z=new Cv(Pt),Q=new sy(A,P,Me,Se,ct,Z),at=new wy(A,Pt),ft=new ay,Y=new dy(Me),D=new wv(A,P,pt,et,m,c),lt=new vy(A,et,Se),At=new Ty(F,Ie,Se,pt),q=new Av(F,Me,Ie),ht=new kv(F,Me,Ie),Ie.programs=Q.programs,A.capabilities=Se,A.extensions=Me,A.properties=Pt,A.renderLists=ft,A.shadowMap=lt,A.state=pt,A.info=Ie}M!==xn&&(C=new qv(M,e.width,e.height,a,s,r));let it=new pu(A,F);this.xr=it,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(T){T!==void 0&&(vt=T,this.setSize(St,Ct,!1))},this.getSize=function(T){return T.set(St,Ct)},this.setSize=function(T,U,X=!0){if(it.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}St=T,Ct=U,e.width=Math.floor(T*vt),e.height=Math.floor(U*vt),X===!0&&(e.style.width=T+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(St*vt,Ct*vt).floor()},this.setDrawingBufferSize=function(T,U,X){St=T,Ct=U,vt=X,e.width=Math.floor(T*X),e.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(M===xn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(Dt)},this.setViewport=function(T,U,X,z){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,U,X,z),pt.viewport(tt.copy(Dt).multiplyScalar(An()).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,U,X,z){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,U,X,z),pt.scissor(wt.copy(ae).multiplyScalar(An()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){pt.setScissorTest(le=T)},this.setOpaqueSort=function(T){kt=T},this.setTransparentSort=function(T){Ae=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,X=!0){let z=0;if(T){let G=!1;if(j!==null){let dt=j.texture.format;G=p.has(dt)}if(G){let dt=j.texture.type,Mt=g.has(dt),ut=D.getClearColor(),_t=D.getClearAlpha(),Tt=ut.r,Ht=ut.g,Qt=ut.b;Mt?(_[0]=Tt,_[1]=Ht,_[2]=Qt,_[3]=_t,F.clearBufferuiv(F.COLOR,0,_)):(E[0]=Tt,E[1]=Ht,E[2]=Qt,E[3]=_t,F.clearBufferiv(F.COLOR,0,E))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),D.dispose(),ft.dispose(),Y.dispose(),Ot.dispose(),Pt.dispose(),P.dispose(),et.dispose(),V.dispose(),ct.dispose(),At.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",gf),it.removeEventListener("sessionend",xf),rs.stop()};function Rt(T){T.preventDefault(),$r("WebGLRenderer: Context Lost."),I=!0}function Xt(){$r("WebGLRenderer: Context Restored."),I=!1;let T=Ie.autoReset,U=lt.enabled,X=lt.autoUpdate,z=lt.needsUpdate,G=lt.type;Yt(),Ie.autoReset=T,lt.enabled=U,lt.autoUpdate=X,lt.needsUpdate=z,lt.type=G}function mt(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){let U=T.target;U.removeEventListener("dispose",ce),ze(U)}function ze(T){zi(T),Pt.remove(T)}function zi(T){let U=Pt.get(T).programs;U!==void 0&&(U.forEach(function(X){Q.releaseProgram(X)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,z,G,dt){U===null&&(U=wn);let Mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=L0(T,U,X,z,G);pt.setMaterial(z,Mt);let _t=X.index,Tt=1;if(z.wireframe===!0){if(_t=V.getWireframeAttribute(X),_t===void 0)return;Tt=2}let Ht=X.drawRange,Qt=X.attributes.position,bt=Ht.start*Tt,jt=(Ht.start+Ht.count)*Tt;dt!==null&&(bt=Math.max(bt,dt.start*Tt),jt=Math.min(jt,(dt.start+dt.count)*Tt)),_t!==null?(bt=Math.max(bt,0),jt=Math.min(jt,_t.count)):Qt!=null&&(bt=Math.max(bt,0),jt=Math.min(jt,Qt.count));let Re=jt-bt;if(Re<0||Re===1/0)return;ct.setup(G,z,ut,X,_t);let me,he=q;if(_t!==null&&(me=w.get(_t),he=ht,he.setIndex(me)),G.isMesh)z.wireframe===!0?(pt.setLineWidth(z.wireframeLinewidth*An()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(G.isLine){let $e=z.linewidth;$e===void 0&&($e=1),pt.setLineWidth($e*An()),G.isLineSegments?he.setMode(F.LINES):G.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else G.isPoints?he.setMode(F.POINTS):G.isSprite&&he.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))he.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let $e=G._multiDrawStarts,Et=G._multiDrawCounts,on=G._multiDrawCount,se=_t?w.get(_t).bytesPerElement:1,os=Pt.get(z).currentProgram.getUniforms();for(let Qe=0;Qe<on;Qe++)os.setValue(F,"_gl_DrawID",Qe),he.render($e[Qe]/se,Et[Qe])}else if(G.isInstancedMesh)he.renderInstances(bt,Re,G.count);else if(X.isInstancedBufferGeometry){let $e=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,$e);he.renderInstances(bt,Re,Et)}else he.render(bt,Re)};function mf(T,U,X,z){N!==null&&T.isNodeMaterial&&N.setObject(z,T),Pe===!0&&Z.setState(T,X,!1),T.transparent===!0&&T.side===Te&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,Nr(T,U,z),T.side=ci,T.needsUpdate=!0,Nr(T,U,z),T.side=Te):Nr(T,U,z)}this.compile=function(T,U,X=null){X===null&&(X=T),N!==null&&N.renderStart(T,U,X),y=Y.get(X),y.init(U),S.push(y),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights(),N!==null&&N.updateLights(y.state.lightsArray),mn=this.localClippingEnabled,Pe=Z.init(this.clippingPlanes,mn),Pe===!0&&Z.setGlobalState(this.clippingPlanes,U),N!==null&&lt.render(y.state.shadowsArray,X,U);let z=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let ut=dt[Mt];mf(ut,X,U,G),z.add(ut)}else mf(dt,X,U,G),z.add(dt)}),y=S.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(T,U,X=null){let z=this.compile(T,U,X);return new Promise(G=>{function dt(){if(z.forEach(function(Mt){let _t=Pt.get(Mt).currentProgram;(_t===void 0||_t.isReady())&&z.delete(Mt)}),z.size===0){G(T);return}setTimeout(dt,10)}Me.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let zl=null;function P0(T){zl&&zl(T)}function gf(){rs.stop()}function xf(){rs.start()}let rs=new dp;rs.setAnimationLoop(P0),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(T){zl=T,it.setAnimationLoop(T),T===null?rs.stop():rs.start()},it.addEventListener("sessionstart",gf),it.addEventListener("sessionend",xf),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(T,U);let X=it.enabled===!0&&it.isPresenting===!0,z=C!==null&&(j===null||X)&&C.begin(A,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,j),y=Y.get(T,S.length),y.init(U),y.state.textureUnits=Ot.getTextureUnits(),S.push(y),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Xe.setFromArrayCamera(U):$t.setFromProjectionMatrix(be,Pn,U.reversedDepth),mn=this.localClippingEnabled,Pe=Z.init(this.clippingPlanes,mn),v=ft.get(T,x.length),v.init(),x.push(v),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Mt=A.xr.getDepthSensingMesh();Mt!==null&&Hl(Mt,U,-1/0,A.sortObjects)}Hl(T,U,0,A.sortObjects),v.finish(),N!==null&&N.updateLights(y.state.lightsArray),A.sortObjects===!0&&v.sort(kt,Ae),Tn=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Tn&&D.addToRenderList(v,T),this.info.autoReset===!0&&this.info.reset(),Pe===!0&&Z.beginShadows();let G=y.state.shadowsArray;if(lt.render(G,T,U),Pe===!0&&Z.endShadows(),(z&&C.hasRenderPass())===!1){let Mt=v.opaque,ut=v.transmissive;if(y.setupLights(),U.isArrayCamera){let _t=U.cameras;if(ut.length>0)for(let Tt=0,Ht=_t.length;Tt<Ht;Tt++){let Qt=_t[Tt];_f(Mt,ut,T,Qt)}Tn&&D.render(T);for(let Tt=0,Ht=_t.length;Tt<Ht;Tt++){let Qt=_t[Tt];vf(v,T,Qt,Qt.viewport)}}else ut.length>0&&_f(Mt,ut,T,U),Tn&&D.render(T),vf(v,T,U)}j!==null&&H===0&&(Ot.updateMultisampleRenderTarget(j),Ot.updateRenderTargetMipmap(j)),z&&C.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),ct.resetDefaultState(),W=-1,$=null,S.pop(),S.length>0?(y=S[S.length-1],Ot.setTextureUnits(y.state.textureUnits),Pe===!0&&Z.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,N!==null&&N.renderEnd()};function Hl(T,U,X,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){let Mt=U.isArrayCamera?Xe:$t;if(!T.frustumCulled||T.intersectsFrustum(Mt)){z&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let ut=et.update(T),_t=T.material;_t.visible&&v.push(T,ut,_t,X,Oe.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Mt=U.isArrayCamera?Xe:$t;if(!T.frustumCulled||T.intersectsFrustum(Mt)){let ut=et.update(T),_t=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Oe.copy(ut.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(_t)){let Tt=ut.groups;for(let Ht=0,Qt=Tt.length;Ht<Qt;Ht++){let bt=Tt[Ht],jt=_t[bt.materialIndex];jt&&jt.visible&&v.push(T,ut,jt,X,Oe.z,bt,U)}}else _t.visible&&v.push(T,ut,_t,X,Oe.z,null,U)}}}let dt=T.children;for(let Mt=0,ut=dt.length;Mt<ut;Mt++)Hl(dt[Mt],U,X,z)}function vf(T,U,X,z){let{opaque:G,transmissive:dt,transparent:Mt}=T;y.setupLightsView(X),Pe===!0&&Z.setGlobalState(A.clippingPlanes,X),z&&pt.viewport(tt.copy(z)),G.length>0&&Jo(G,U,X),dt.length>0&&Jo(dt,U,X),Mt.length>0&&Jo(Mt,U,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function _f(T,U,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){let bt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new Le(1,1,{generateMipmaps:!0,type:bt?Ke:xn,minFilter:Yn,samples:Math.max(4,Se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let dt=y.state.transmissionRenderTarget[z.id],Mt=z.viewport||tt;dt.setSize(Mt.z*A.transmissionResolutionScale,Mt.w*A.transmissionResolutionScale);let ut=A.getRenderTarget(),_t=A.getActiveCubeFace(),Tt=A.getActiveMipmapLevel();A.setRenderTarget(dt),A.getClearColor(K),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),Tn&&D.render(X);let Ht=A.toneMapping;A.toneMapping=Dn;let Qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),Pe===!0&&Z.setGlobalState(A.clippingPlanes,z),Jo(T,X,z),Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let jt=0,Re=U.length;jt<Re;jt++){let me=U[jt],{object:he,geometry:$e,material:Et,group:on}=me;if(Et.side===Te&&he.layers.test(z.layers)){let se=Et.side;Et.side=De,Et.needsUpdate=!0,yf(he,X,z,$e,Et,on),Et.side=se,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt))}A.setRenderTarget(ut,_t,Tt),A.setClearColor(K,xt),Qt!==void 0&&(z.viewport=Qt),A.toneMapping=Ht}function Jo(T,U,X){let z=U.isScene===!0?U.overrideMaterial:null;for(let G=0,dt=T.length;G<dt;G++){let Mt=T[G],{object:ut,geometry:_t,group:Tt}=Mt,Ht=Mt.material;Ht.allowOverride===!0&&z!==null&&(Ht=z),ut.layers.test(X.layers)&&yf(ut,U,X,_t,Ht,Tt)}}function yf(T,U,X,z,G,dt){N!==null&&G.isNodeMaterial&&N.setObject(T,G),T.onBeforeRender(A,U,X,z,G,dt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(A,U,X,z,T,dt),G.transparent===!0&&G.side===Te&&G.forceSinglePass===!1?(G.side=De,G.needsUpdate=!0,A.renderBufferDirect(X,U,z,G,T,dt),G.side=ci,G.needsUpdate=!0,A.renderBufferDirect(X,U,z,G,T,dt),G.side=Te):A.renderBufferDirect(X,U,z,G,T,dt),T.onAfterRender(A,U,X,z,G,dt)}function Mf(T){let U=0;for(let X of T)X.texture!==null&&U++;return U}function Nr(T,U,X){U.isScene!==!0&&(U=wn);let z=Pt.get(T),G=y.state.lights,dt=y.state.shadowsArray,Mt=G.state.version,ut=Q.getParameters(T,G.state,dt,U,X,y.state.lightProbeGridArray),_t=Q.getProgramCacheKey(ut),Tt=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let Ht=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;z.envMap=P.get(T.envMap||z.environment,Ht),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Tt===void 0&&(T.addEventListener("dispose",ce),Tt=new Map,z.programs=Tt,z.programVariants=new Map);let Qt=Tt.get(_t);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===Mt)return bf(T,ut),Qt}else ut.uniforms=Q.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,X,ut),T.onBeforeCompile(ut,A),Qt=Q.acquireProgram(ut,_t),Tt.set(_t,Qt),z.uniforms=ut.uniforms;let bt=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=Z.uniform),bf(T,ut),z.needsLights=N0(T),z.lightsStateVersion=Mt,z.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Mf(y.state.lightProbeGridArray),z.currentProgram=Qt,z.uniformsList=null,Qt}function I0(T,U,X,z,G){let dt=Pt.get(T),Mt=dt.currentProgram.id+","+z+","+G,ut=dt.programVariants.get(Mt);return ut===void 0?(ut=Nr(T,U,X),dt.programVariants.set(Mt,ut)):(dt.currentProgram=ut,dt.uniformsList=null,dt.outputColorSpace=z,dt.toneMapping=G),ut}function Sf(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=vr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function bf(T,U){let X=Pt.get(T);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function L0(T,U,X,z,G){U.isScene!==!0&&(U=wn),Ot.resetTextureUnits();let dt=U.fog,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ut=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:te.workingColorSpace,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=P.get(z.envMap||Mt,_t),Ht=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,me=Dn;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(me=A.toneMapping);let he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=he!==void 0?he.length:0,Et=Pt.get(z),on=y.state.lights;if(Pe===!0&&(mn===!0||T!==$)){let Ee=T===$&&z.id===W;Z.setState(z,T,Ee)}let se=!1,os=!1;z.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==on.state.version||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==Tt||z.fog===!0&&Et.fog!==dt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Z.numPlanes||Et.numIntersection!==Z.numIntersection)||Et.vertexAlphas!==Ht||Et.vertexTangents!==Qt||Et.morphTargets!==bt||Et.morphNormals!==jt||Et.morphColors!==Re||Et.morphTargetsCount!==$e||Et.numLightProbeGrids!==Mf(y.state.lightProbeGridArray)?se=!0:(Et.outputColorSpace!==ut||Et.toneMapping!==me)&&(os=!0):(se=!0,Et.__version=z.version);let Qe=Et.currentProgram;(se===!0||os===!0)&&(Qe=os===!0?I0(z,U,G,ut,me):Nr(z,U,G),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Qe,Et));let $o=!1,Hi=!1,as=!1,ee=Qe.getUniforms(),qe=Et.uniforms;if(pt.useProgram(Qe.program)&&($o=!0,Hi=!0,as=!0),z.id!==W&&(W=z.id,Hi=!0),$o||$!==T){pt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ee.setValue(F,"projectionMatrix",T.projectionMatrix),ee.setValue(F,"viewMatrix",T.matrixWorldInverse);let He=ee.map.cameraPosition;He!==void 0&&He.setValue(F,jn.setFromMatrixPosition(T.matrixWorld)),Se.logarithmicDepthBuffer&&ee.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ee.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Hi=!0,as=!0)}if(Et.needsLights&&(on.state.sunShadowMap.length>0&&ee.setValue(F,"sunShadowMap",on.state.sunShadowMap,Ot),on.state.directionalShadowMap.length>0&&ee.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,Ot),on.state.spotShadowMap.length>0&&ee.setValue(F,"spotShadowMap",on.state.spotShadowMap,Ot),on.state.pointShadowMap.length>0&&ee.setValue(F,"pointShadowMap",on.state.pointShadowMap,Ot)),G.isSkinnedMesh){ee.setOptional(F,G,"bindMatrix"),ee.setOptional(F,G,"bindMatrixInverse");let Ee=G.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ee.setValue(F,"boneTexture",Ee.boneTexture,Ot))}G.isBatchedMesh&&(ee.setOptional(F,G,"batchingTexture"),ee.setValue(F,"batchingTexture",G._matricesTexture,Ot),ee.setOptional(F,G,"batchingIdTexture"),ee.setValue(F,"batchingIdTexture",G._indirectTexture,Ot),ee.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ee.setValue(F,"batchingColorTexture",G._colorsTexture,Ot));let Hn=X.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&J.update(G,X,Qe),(Hi||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,ee.setValue(F,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(qe.envMapIntensity.value=U.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Ry()),Hi){if(ee.setValue(F,"toneMappingExposure",A.toneMappingExposure),Et.needsLights&&D0(qe,as),dt&&z.fog===!0&&at.refreshFogUniforms(qe,dt),at.refreshMaterialUniforms(qe,z,vt,Ct,y.state.transmissionRenderTarget[T.id]),Et.needsLights&&Et.numLightProbeGrids>0){let Ee=b,He=0;for(let xi of y.state.lightProbeGridArray)xi.texture!==null&&(Ee.textures[He]=xi.texture,Ee.min[He]=xi.boundingBox.min,Ee.max[He]=xi.boundingBox.max,Ee.resolution[He]=xi.resolution,He++);for(let xi in Ee)Ee[xi].length=He;qe.probesSH.value=Ee.textures,qe.probesMin.value=Ee.min,qe.probesMax.value=Ee.max,qe.probesResolution.value=Ee.resolution}vr.upload(F,Sf(Et),qe,Ot)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vr.upload(F,Sf(Et),qe,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ee.setValue(F,"center",G.center),ee.setValue(F,"modelViewMatrix",G.modelViewMatrix),ee.setValue(F,"normalMatrix",G.normalMatrix),ee.setValue(F,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Ee=z.uniformsGroups;for(let He=0,xi=Ee.length;He<xi;He++){let wf=Ee[He];At.update(wf,Qe),At.bind(wf,Qe)}}return Qe}function D0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function N0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,U,X){let z=Pt.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Pt.get(T.texture).__webglTexture=U,Pt.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let X=Pt.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){j=T,k=U,H=X;let z=null,G=!1,dt=!1;if(T){let ut=Pt.get(T);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(T.viewport),wt.copy(T.scissor),zt=T.scissorTest,pt.viewport(tt),pt.scissor(wt),pt.setScissorTest(zt),W=-1;return}else if(ut.__webglFramebuffer===void 0)Ot.setupRenderTarget(T);else if(ut.__hasExternalTextures)Ot.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ht=T.depthTexture;if(ut.__boundDepthTexture!==Ht){if(Ht!==null&&Pt.has(Ht)&&(T.width!==Ht.image.width||T.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(T)}}let _t=T.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);let Tt=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?z=Tt[U][X]:z=Tt[U],G=!0):T.samples>0&&Ot.useMultisampledRTT(T)===!1?z=Pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[X]:z=Tt,tt.copy(T.viewport),wt.copy(T.scissor),zt=T.scissorTest}else tt.copy(Dt).multiplyScalar(vt).floor(),wt.copy(ae).multiplyScalar(vt).floor(),zt=le;if(X!==0&&(z=B),pt.bindFramebuffer(F.FRAMEBUFFER,z)&&pt.drawBuffers(T,z),pt.viewport(tt),pt.scissor(wt),pt.setScissorTest(zt),G){let ut=Pt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,X)}else if(dt){let ut=U;for(let _t=0;_t<T.textures.length;_t++){let Tt=Pt.get(T.textures[_t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+_t,Tt.__webglTexture,X,ut)}}else if(T!==null&&X!==0){let ut=Pt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ut.__webglTexture,X)}W=-1};function Ef(T){let U=Pt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Se.textureFormatReadable(T.format),U.__typeReadable=Se.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,X,z,G,dt,Mt,ut=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t){pt.bindFramebuffer(F.FRAMEBUFFER,_t);try{let Tt=T.textures[ut],Ht=Tt.format,Qt=Tt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let bt=Ef(Tt);if(bt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&X>=0&&X<=T.height-G&&F.readPixels(U,X,z,G,rt.convert(Ht),rt.convert(Qt),dt)}finally{let Tt=j!==null?Pt.get(j).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(T,U,X,z,G,dt,Mt,ut=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t)if(U>=0&&U<=T.width-z&&X>=0&&X<=T.height-G){pt.bindFramebuffer(F.FRAMEBUFFER,_t);let Tt=T.textures[ut],Ht=Tt.format,Qt=Tt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);let bt=Ef(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.bufferData(F.PIXEL_PACK_BUFFER,dt.byteLength,F.STREAM_READ),F.readPixels(U,X,z,G,rt.convert(Ht),rt.convert(Qt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Re=j!==null?Pt.get(j).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Re);let me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hd(F,me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,dt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(jt),F.deleteSync(me),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,X=0){let z=Math.pow(2,-X),G=Math.floor(T.image.width*z),dt=Math.floor(T.image.height*z),Mt=U!==null?U.x:0,ut=U!==null?U.y:0;Ot.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Mt,ut,G,dt),pt.unbindTexture()},this.copyTextureToTexture=function(T,U,X=null,z=null,G=0,dt=0){let Mt,ut,_t,Tt,Ht,Qt,bt,jt,Re,me=T.isCompressedTexture?T.mipmaps[dt]:T.image;if(X!==null)Mt=X.max.x-X.min.x,ut=X.max.y-X.min.y,_t=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Ht=X.min.y,Qt=X.isBox3?X.min.z:0;else{let ee=Math.pow(2,-G);Mt=Math.floor(me.width*ee),ut=Math.floor(me.height*ee),T.isDataArrayTexture?_t=me.depth:T.isData3DTexture?_t=Math.floor(me.depth*ee):_t=1,Tt=0,Ht=0,Qt=0}z!==null?(bt=z.x,jt=z.y,Re=z.z):(bt=0,jt=0,Re=0);let he=rt.convert(U.format),$e=rt.convert(U.type),Et;U.isData3DTexture?(Ot.setTexture3D(U,0),Et=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),Et=F.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),Et=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let on=pt.getParameter(F.UNPACK_ROW_LENGTH),se=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),os=pt.getParameter(F.UNPACK_SKIP_PIXELS),Qe=pt.getParameter(F.UNPACK_SKIP_ROWS),$o=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);let Hi=T.isDataArrayTexture||T.isData3DTexture,as=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ee=Pt.get(T),qe=Pt.get(U),Hn=Pt.get(ee.__renderTarget),Ee=Pt.get(qe.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Hn.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let He=0;He<_t;He++)Hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(T).__webglTexture,G,Qt+He),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,dt,Re+He)),F.blitFramebuffer(Tt,Ht,Tt+Mt,Ht+ut,bt,jt,bt+Mt,jt+ut,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Pt.has(T)){let ee=Pt.get(T),qe=Pt.get(U);pt.bindFramebuffer(F.READ_FRAMEBUFFER,L),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Hn=0;Hn<_t;Hn++)Hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.__webglTexture,G,Qt+Hn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ee.__webglTexture,G),as?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,dt,Re+Hn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,dt),G!==0?F.blitFramebuffer(Tt,Ht,Tt+Mt,Ht+ut,bt,jt,bt+Mt,jt+ut,F.COLOR_BUFFER_BIT,F.NEAREST):as?F.copyTexSubImage3D(Et,dt,bt,jt,Re+Hn,Tt,Ht,Mt,ut):F.copyTexSubImage2D(Et,dt,bt,jt,Tt,Ht,Mt,ut);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else as?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Et,dt,bt,jt,Re,Mt,ut,_t,he,$e,me.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,dt,bt,jt,Re,Mt,ut,_t,he,me.data):F.texSubImage3D(Et,dt,bt,jt,Re,Mt,ut,_t,he,$e,me):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,dt,bt,jt,Mt,ut,he,$e,me.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,dt,bt,jt,me.width,me.height,he,me.data):F.texSubImage2D(F.TEXTURE_2D,dt,bt,jt,Mt,ut,he,$e,me);pt.pixelStorei(F.UNPACK_ROW_LENGTH,on),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,os),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,$o),dt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(T){Pt.get(T).__webglFramebuffer===void 0&&Ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ot.setTextureCube(T,0):T.isData3DTexture?Ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ot.setTexture2DArray(T,0):Ot.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){k=0,H=0,j=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cy=new _s(-1,1,1,-1,0,1),gu=class extends ie{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},Py=new gu,Sr=class{constructor(t){this._mesh=new qt(Py,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ws=class extends Kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Es.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Sr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Po=class extends Kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},il=class extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var sl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(Mr),this.copyPass.material.blending=Ci,this.timer=new vo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(o instanceof Po?n=!0:o instanceof il&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Io=class extends Kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ep={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ts=class i extends Kn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,o,{type:Ke,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Le(r,o,{type:Ke,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Le(r,o,{type:Ke,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Ep;this.highPassUniforms=Es.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(Mr.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,premultipliedAlpha:!0,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new Zi,this._fsQuad=new Sr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],c=o+1<t?e[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ts.BlurDirectionX=new nt(1,0);Ts.BlurDirectionY=new nt(0,1);function Tp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ie;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=wp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<o[h].length;++M)f.push(o[h][M][u]);let m=wp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function wp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ft(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let M=h.getComponent(u,m);a.setComponent(u+d,m,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function es(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1440662683);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Iy(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,c=e-r,l=o*o*(3-2*o),h=a*a*(3-2*a),d=c*c*(3-2*c),u=es(n,s,r),f=es(n+1,s,r),m=es(n,s+1,r),M=es(n+1,s+1,r),p=es(n,s,r+1),g=es(n+1,s,r+1),_=es(n,s+1,r+1),E=es(n+1,s+1,r+1),b=u+(f-u)*l,v=m+(M-m)*l,y=p+(g-p)*l,x=_+(E-_)*l,S=b+(v-b)*h,C=y+(x-y)*h;return(S+(C-S)*d)*2-1}function xu(i,t,e,n=3){let s=0,r=.5,o=1;for(let a=0;a<n;a++)s+=r*Iy(i*o,t*o,e*o),o*=2.03,r*=.5;return s}var Ly={colt75:{name:"Colt Single Action Army 7\xBD\u2033 Cavalry",mats:{frame:"case",barrel:"blued",straps:"blued",grip:"walnut",screws:"fireblue",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:1,hamMax:.82},colt475:{name:"Colt Single Action Army 4\xBE\u2033 Civilian, nickel",mats:{frame:"nickel",barrel:"nickel",straps:"nickel",grip:"ivory",screws:"nickel",cylinder:"nickel",hammer:"nickel",trigger:"nickel"},wear:.45,turn:1,hamMax:.82},schofield:{name:"Smith & Wesson Model 3 Schofield 7\u2033",mats:{frame:"blued",barrel:"blued",grip:"walnut",screws:"blued",ring:"steel",cylinder:"blued",hammer:"case",trigger:"case"},wear:.75,turn:-1,hamMax:.78}};function vu(i,t,e,n){let s=new qi,r=new xe({side:De,depthWrite:!1,uniforms:{cT:{value:new ot(i)},cM:{value:new ot(t)},cB:{value:new ot(e)}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 cT, cM, cB; varying vec3 vD; void main(){ float y = normalize(vD).y; vec3 c = y > 0.0 ? mix(cM, cT, pow(y, 0.55)) : mix(cM, cB, pow(-y, 0.35)); gl_FragColor = vec4(c, 1.0); }"});s.add(new qt(new Ri(10,64,32),r));for(let o of n){let a=o.box?new Xn(o.box[0],o.box[1]):new Ri(o.r,32,16),c=new qt(a,new Zi({color:new ot(o.c[0],o.c[1],o.c[2]),side:Te}));c.position.set(o.p[0],o.p[1],o.p[2]),o.box&&c.lookAt(0,0,0),o.s&&c.scale.set(o.s[0],o.s[1],o.s[2]),s.add(c)}return s}function Pp(i,t=["studio","day","night"]){let e=new _r(i),n={studio:()=>e.fromScene(vu("#29292d","#1a1a1d","#0f0f11",[{box:[7,3.5],p:[0,7.5,1.5],c:[4.6,4.6,4.7]},{box:[1.2,7],p:[-7,1,3],c:[5.5,5.4,5.2]},{box:[.8,7],p:[7,.5,-2],c:[3.2,3.4,3.8]},{box:[9,5],p:[-1,1,8.5],c:[1.25,1.25,1.25]},{box:[3,7],p:[6,1,5],c:[1.9,1.9,1.9]},{box:[8,1.5],p:[0,-6,4],c:[.4,.38,.35]}]),.02).texture,day:()=>e.fromScene(vu("#3d6aae","#ead9ba","#8c6a46",[{p:[4.2,6.4,3.4],r:.42,c:[70,58,42]},{p:[0,-7,2],r:3.5,c:[.9,.72,.5],s:[1.6,.3,1.6]}]),.02).texture,night:()=>e.fromScene(vu("#05070d","#0c0a09","#050403",[{p:[-3.4,-1,3.2],r:.5,c:[30,13.5,4]},{p:[1.8,-2.6,-6],r:1.5,c:[1.5,.5,.13]},{p:[2.5,6.5,-4],r:.22,c:[3.2,3.4,3.8]}]),.015).texture},s={};for(let r of t)s[r]=n[r]();return e.dispose(),s}var Dy=`
float h3(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vn(p); p = p*2.03 + 1.7; a *= 0.5; } return s; }
`,Ny=`
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
`,Uy=`
{ float occ = mix(1.0, vAtt.x, 0.92);
  reflectedLight.indirectDiffuse *= occ;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= occ;
  #endif
  float dNV = saturate(dot(geometryNormal, geometryViewDir));
  reflectedLight.indirectSpecular *= computeSpecularOcclusion(dNV, occ, material.roughness);
  float dOcc = mix(1.0, vAtt.x, 0.6);
  reflectedLight.directSpecular *= dOcc; reflectedLight.directDiffuse *= dOcc; }
`,Fy={blued:0,case:1,nickel:2,walnut:3,ivory:4,fireblue:5,lead:6,steel:7,brass:8},_u=new Map;function By(i,t){let e=i+t;if(_u.has(e))return _u.get(e);let n=i==="walnut"||i==="ivory",s=new oi({color:16777215,metalness:n?0:1,roughness:.3,clearcoat:{blued:.8,case:.6,walnut:.35,ivory:.5}[i]||0,clearcoatRoughness:i==="walnut"?.35:.12});return s.defines={KIND:Fy[i]},s.onBeforeCompile=r=>{r.uniforms.uWear={value:t},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP; uniform float uWear;
${Dy}`).replace("#include <color_fragment>",`#include <color_fragment>
${Ny}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = rough;`).replace("#include <aomap_fragment>",Uy)},s.customProgramCacheKey=()=>"rv"+i,_u.set(e,s),s}function Oy(i){let t=atob(i.data),e=new Uint8Array(t.length);for(let f=0;f<t.length;f++)e[f]=t.charCodeAt(f);let n=e.buffer,s=i.vc,r=i.ic,o=0,a;i.i32&&(a=new Uint32Array(n,o,r),o+=r*4);let c=new Int16Array(n,o,s*3);o+=s*6,i.i32||(a=new Uint16Array(n,o,r),o+=r*2);let l=new Int8Array(n,o,s*3);o+=s*3;let h=new Uint8Array(n,o,s*2),d=new Float32Array(s*3);for(let f=0;f<s*3;f++)d[f]=c[f]*i.ps;let u=new ie;return u.setAttribute("position",new Ft(d,3)),u.setAttribute("normal",new Ft(new Int8Array(l),3,!0)),u.setAttribute("aAtt",new Ft(new Uint8Array(h),2,!0)),u.setIndex(new Ft(i.i32?new Uint32Array(a):new Uint16Array(a),1)),u.computeBoundingSphere(),u}function zy(i,t){let e=i.index.array,n=i.attributes.position.array,s=[],r=[];for(let o=0;o<e.length;o+=3)(n[3*e[o]+1]<t&&n[3*e[o+1]+1]<t&&n[3*e[o+2]+1]<t?r:s).push(e[o],e[o+1],e[o+2]);return[s,r].map(o=>{let a=new ie;for(let c of["position","normal","aAtt"])a.setAttribute(c,i.attributes[c]);return a.setIndex(o),a.computeBoundingSphere(),a})}function Hy(i){let t=i.attributes.position.count,e=new Uint8Array(t*2);for(let n=0;n<t;n++)e[2*n]=255,e[2*n+1]=128;return i.setAttribute("aAtt",new Ft(e,2,!0)),i}var yu=new Map;function ky(i){if(yu.has(i))return yu.get(i);let t=n=>{let s=new Ki(n.map(([r,o])=>new nt(r,o*i)),24);return s.rotateX(-Math.PI/2),Hy(s)},e={case:t([[1e-4,2e-4],[.0024,2e-4],[.0025,0],[.0064,0],[.0065,4e-4],[.0064,.0013],[.0058,.0016],[.0058,.031],[.0054,.031],[.0053,.0285],[.0053,.004],[1e-4,.004]]),bullet:t([[1e-4,.026],[.0057,.026],[.0057,.0315],[.0055,.0332],[.0049,.0348],[.0039,.0361],[.0025,.037],[.001,.0373],[0,.0374]]),caseLen:.031*i,tipLen:.0374*i};return yu.set(i,e),e}function Vy(i,t,e){let n=new ge,s=M=>By(M,e.wear),r=(M,p,g=n)=>{let _=new qt(M,s(p));return g.add(_),_},o=new ge,a=new ge,c=new ge,l=null,h=null;o.position.set(0,i.cylY,0),a.position.set(0,i.hammerPivot[1],i.hammerPivot[0]),c.position.set(0,i.triggerPivot[1],i.triggerPivot[0]),n.add(o,a,c);for(let M of i.parts){let p=t[M];if(M==="cylinder")p.translate(0,-i.cylY,0),r(p,e.mats.cylinder,o);else if(M==="hammer")r(p,e.mats.hammer,a);else if(M==="trigger")r(p,e.mats.trigger,c);else if(M==="gate")l=new ge,l.position.set(i.gatePivot[0],i.gatePivot[1],0),n.add(l),p.translate(-i.gatePivot[0],-i.gatePivot[1],0),r(p,e.mats.frame,l);else if(M==="ejector")h=new ge,n.add(h),r(p,e.mats.barrel,h);else if(M==="screws"&&e.mats.ring){let[g,_]=zy(p,-.11);r(g,e.mats.screws),r(_,e.mats.ring)}else r(p,e.mats[M])}let d=ky(Math.min(1,(-i.chamberZ-.0031)/.0374)),u=[],f=[];for(let M=0;M<6;M++){let p=Math.PI/2+e.turn*M*Math.PI/3,g=new ge;g.userData.home=new R(Math.cos(p)*i.chamberR,Math.sin(p)*i.chamberR,-1e-4),g.userData.out=new R(Math.cos(p),Math.sin(p),0),g.position.copy(g.userData.home),o.add(g),g.userData.case=r(d.case,"brass",g),f.push(r(d.bullet,"lead",g)),u.push(g)}let m={conf:e,meta:i,group:n,cylinder:o,hammer:a,trigger:c,gate:l,rod:h,carts:u,bullets:f,cart:d,drops:[],muzzle:new R(0,0,i.zMuz),grip:new R(0,-.08,.045),state:{top:0,chambers:[],cocked:!1,anim:null}};return Mu(m,{},{instant:!0}),m}async function Ip(i){let t=typeof i=="string"?await(await fetch(i)).json():i,e={};for(let n of t.meta.parts)e[n]=Oy(t.parts[n]);return Vy(t.meta,e,Ly[t.id])}var Gy=.11,Di=i=>i*i*(3-2*i),As=(i,t,e)=>Di(Math.min(1,Math.max(0,(e-i)/(t-i))));function Lp(i,t,e,n){i.hammer.rotation.x=i.conf.hamMax*t,i.trigger.rotation.x=-Gy*e,i.cylinder.rotation.z=-i.conf.turn*n*Math.PI/3}function Wy(i){i.carts.forEach((t,e)=>{let n=i.state.chambers[e];t.visible=n!=="empty",i.bullets[e].visible=n==="live",t.position.copy(t.userData.home),t.quaternion.identity()})}function Mu(i,t={},e={}){let n=i.state;if(n.anim)return!1;if(!i.gate||e.instant){n.chambers=["empty","live","live","live","live","live"],n.top=0,n.cocked=!1;for(let u of i.drops)u.obj.removeFromParent();return i.drops.length=0,Wy(i),Lp(i,0,1,0),i.gate&&(i.gate.rotation.z=0),!0}let s=n.top,r=n.chambers.slice(),o=[0,1,2,3,4,5].map(u=>(s+5+u)%6),a=o.find(u=>r[u]==="empty")??o.find(u=>r[u]==="spent");if(a===void 0)return!1;let c=u=>r[u]==="spent"||u!==a&&r[u]==="empty";if(!o.some(c))return!1;let l=0;o.forEach((u,f)=>{c(u)&&(l=f)});let h=l;for(;(s+h+1)%6!==a;)h++;let d=[{k:"half"},{k:"open"}];for(let u=0;u<=h;u++){u>0&&d.push({k:"turn"});let f=(s+5+u)%6;u>5||(r[f]==="spent"&&(d.push({k:"eject",c:f}),r[f]="empty"),f!==a&&r[f]==="empty"&&(d.push({k:"insert",c:f}),r[f]="live"))}return d.push({k:"close"},{k:"cock"},{k:"lower"}),n.anim={type:"reload",steps:d,i:-1,t:0,ham0:n.cocked?1:0},n.cocked=!1,!0}var Ap={half:.3,open:.3,turn:.22,eject:.6,insert:.5,close:.28,cock:.34,lower:.5},Rp=new Kt,Cp=new _e,Su=new R,rl=new R;function Xy(i,t,e){let n=i.carts[t],s=n.clone();n.updateMatrix(),Rp.multiplyMatrices(i.cylinder.matrix,n.matrix),Rp.decompose(s.position,s.quaternion,s.scale),i.group.add(s);let r=Su.copy(n.userData.out).applyQuaternion(i.cylinder.quaternion);i.drops.push({obj:s,t:0,v:new R(r.x*.35,r.y*.35+.15,.45),w:new R(8+Math.random()*6,3-Math.random()*6,0)}),n.visible=!1,n.position.copy(n.userData.home),e.slide?.()}function qy(i,t,e){if(!i.drops.length)return;i.group.updateWorldMatrix(!0,!1),i.group.matrixWorld.decompose(Su,Cp,rl);let n=new R(0,-9.8/rl.y,0).applyQuaternion(Cp.invert());for(let s=i.drops.length-1;s>=0;s--){let r=i.drops[s];r.t+=t,r.v.addScaledVector(n,t),r.obj.position.addScaledVector(r.v,t),r.obj.rotation.x+=r.w.x*t,r.obj.rotation.y+=r.w.y*t,!r.rang&&r.t>.5&&(r.rang=1,e.drop?.()),r.t>1.4&&(r.obj.removeFromParent(),i.drops.splice(s,1))}}function Yy(i,t,e,n){let s=i.state,r=t.steps[t.i];if(t.i<0||t.t>=Ap[r.k]){if(r?.k==="eject"&&(i.rod.position.z=0),t.i++,t.t=0,r=t.steps[t.i],!r)return s.anim=null,[0,1,s.top,0];if((r.k==="turn"||r.k==="cock")&&(t.from=s.top,s.top=(s.top+1)%6),r.k==="insert"){s.chambers[r.c]="live";let u=i.carts[r.c];u.visible=!0,i.bullets[r.c].visible=!0,n.insert?.()}(r.k==="open"||r.k==="close"||r.k==="half")&&n.click?.(.3,r.k==="half"?2600:1700)}t.t+=e;let o=Math.min(1,t.t/Ap[r.k]),a=Di(o),c=.3,l=.5,h=1,d=s.top;switch(r.k){case"half":c=t.ham0+(.3-t.ham0)*a,l=(t.ham0?0:1)+((t.ham0?0:1)-.5)*-a,h=0;break;case"open":h=a;break;case"turn":d=t.from+As(0,.8,o),!t.c&&o>.8&&(t.c=1,n.click?.(.18,4200));break;case"eject":{let u=o<.55?Di(o/.55):1-Di((o-.55)/.45);i.rod.position.z=u*i.meta.rodTravel;let f=i.carts[r.c],m=f.userData.home.z-(s.chambers[r.c]==="live"?i.cart.tipLen:i.cart.caseLen);f.visible&&(f.position.z=f.userData.home.z+Math.max(0,i.meta.rodTip+u*i.meta.rodTravel-m)),f.visible&&o>=.55&&(s.chambers[r.c]="empty",Xy(i,r.c,n));break}case"insert":{let u=i.carts[r.c],f=u.userData.home,m=i.cart.tipLen,M=.35*(1-As(.4,1,o)),p=new R(f.x,f.y,0);o<.4?p.addScaledVector(u.userData.out,.022*(1-Di(o/.4))).z+=.004*(1-Di(o/.4)):p.z=-m*Di((o-.4)/.6)+0,rl.set(-u.userData.out.y,u.userData.out.x,0),u.quaternion.setFromAxisAngle(rl,M),u.position.copy(p).add(Su.set(0,0,m).applyQuaternion(u.quaternion)),o>=1&&(u.position.copy(f),u.quaternion.identity());break}case"close":h=1-a;break;case"cock":h=0,c=.3+.7*a,d=t.from+As(.2,.85,o),l=.5*(1-As(.7,1,o)),!t.c2&&o>=1&&(t.c2=1,n.click?.(.6,2900));break;case"lower":h=0,c=1-Di(Math.max(0,(o-.15)/.85)),l=o<.15?1.45*(o/.15):1.45-.45*As(.85,1,o);break}return i.gate&&(i.gate.rotation.z=-1.65*h),[c,l,d]}function bu(i,t={}){let e=i.state;return e.anim||e.cocked?!1:(e.anim={type:"cock",t:0,from:e.top},e.top=(e.top+1)%6,t.click?.(.25,2400),!0)}function Dp(i,t={}){let e=i.state;return e.anim?!1:e.cocked?(e.anim={type:"fire",t:0},!0):bu(i,t)}function Np(i,t,e={}){let n=i.state,s=n.anim,r=n.cocked?1:0,o=n.cocked?0:1,a=n.top;if(qy(i,t,e),s&&s.type==="reload")[r,o,a]=Yy(i,s,t,e);else if(s)if(s.t+=t,s.type==="cock"){let c=Math.min(1,s.t/.34);r=Di(c),a=s.from+As(.25,.85,c),o=1-As(.75,1,c),!s.c1&&c>.5&&(s.c1=1,e.click?.(.35,3300)),c>=1&&(e.click?.(.6,2900),n.cocked=!0,n.anim=null)}else{let c=s.t;o=Math.min(1.45,c/.05*1.45),r=c<.05?1:Math.max(0,1-(c-.05)/.03),!s.shot&&c>=.08&&(s.shot=1,n.cocked=!1,n.chambers[n.top]==="live"?(n.chambers[n.top]="spent",i.bullets[n.top].visible=!1,e.shot?.()):e.dry?.()),c>.08&&(o=1+.45*Math.max(0,1-(c-.08)/.2)),c>.32&&(n.anim=null)}Lp(i,r,o,a)}var Eu="powderRef";var wu="rock";function Up(i,t=e=>e.destination){let e=null,n=null,s=null,r={},o=()=>{let v=i();return v?(v!==e&&(e=v,s=a(v),r={},n=v.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(t(v))),v.state==="suspended"&&v.resume&&v.resume(),v):null},a=v=>{let y=v.createBuffer(1,v.sampleRate*3,v.sampleRate),x=y.getChannelData(0);for(let S=0;S<x.length;S++)x[S]=Math.random()*2-1;return y},c=(v,y,x,S,C,A)=>{let I=v.createBufferSource();I.buffer=s;let N=v.createBiquadFilter();N.type="highpass",N.frequency.value=90;let B=v.createBiquadFilter();B.type="lowpass",B.frequency.setValueAtTime(C,y),B.frequency.exponentialRampToValueAtTime(1800,y+S*.6),B.frequency.exponentialRampToValueAtTime(A?650:1e3,y+S+(A||.9));let L=v.createBiquadFilter();L.type="bandpass",L.frequency.value=850,L.Q.value=.6;let O=v.createGain();O.gain.value=1.7;let k=v.createGain();k.gain.setValueAtTime(0,y),k.gain.linearRampToValueAtTime(x,y+.006),k.gain.linearRampToValueAtTime(x*.85,y+S),k.gain.exponentialRampToValueAtTime(x*.3,y+S+.08),A?k.gain.exponentialRampToValueAtTime(x*.003,y+S+A):(k.gain.exponentialRampToValueAtTime(x*.12,y+S+.45),k.gain.exponentialRampToValueAtTime(x*.01,y+S+.9)),N.connect(L).connect(O).connect(k);let H=v.createGain();H.gain.value=1;let j=v.createBufferSource();j.buffer=s;let W=v.createBiquadFilter();W.type="lowpass",W.frequency.value=30;let $=v.createGain();$.gain.setValueAtTime(2.2,y),A&&$.gain.linearRampToValueAtTime(.3,y+S+A*.6),j.connect(W).connect($).connect(H.gain),I.connect(N).connect(B).connect(k).connect(H).connect(n),I.start(y,Math.random()*.5),I.stop(y+S+1),j.start(y,Math.random()),j.stop(y+S+1)},l=(v,y,x,S,C,A,I,N)=>{let B=v.createBufferSource();B.buffer=s;let L=v.createBiquadFilter();L.type=S,L.frequency.value=x,L.Q.value=C;let O=v.createGain();O.gain.setValueAtTime(A,y),O.gain.exponentialRampToValueAtTime(5e-4,y+I),B.connect(L).connect(O).connect(N||n),B.start(y,Math.random()),B.stop(y+I+.02)},h=(v,y,x,S,C,A,I)=>{let N=v.createOscillator(),B=v.createGain();N.frequency.setValueAtTime(x,y),N.frequency.exponentialRampToValueAtTime(S,y+A*.8),B.gain.setValueAtTime(C,y),B.gain.exponentialRampToValueAtTime(.001,y+A),N.connect(B).connect(I||n),N.start(y),N.stop(y+A+.02)},d=(v,y,x,S,C)=>{let A=v.createOscillator(),I=v.createGain();A.frequency.value=x,I.gain.setValueAtTime(S,y),I.gain.exponentialRampToValueAtTime(5e-4,y+C),A.connect(I).connect(n),A.start(y),A.stop(y+C+.02)},u=(v,y)=>{let x=v.createWaveShaper(),S=1024,C=new Float32Array(S);for(let A=0;A<S;A++){let I=A*2/S-1;C[A]=Math.tanh(y*I)/Math.tanh(y)}return x.curve=C,x},f=(v,y)=>{if(r[y])return r[y];let x=y==="canyon",S=y==="dry",C=x?3.4:S?.9:1.6,A=Math.floor(v.sampleRate*C),I=v.createBuffer(2,A,v.sampleRate),N=x?[[.33,.55],[.81,.38],[1.27,.26],[1.93,.16],[2.6,.09]]:S?[]:[[.31,.3],[.72,.14]];for(let B=0;B<2;B++){let L=I.getChannelData(B);for(let O=0;O<A;O++){let k=O/v.sampleRate;L[O]=(Math.random()*2-1)*.05*Math.exp(-k/(x?.9:S?.22:.4))*Math.min(1,k/.05)}for(let[O,k]of N){let H=Math.floor((O+B*.013+Math.random()*.01)*v.sampleRate),j=Math.floor(.07*v.sampleRate);for(let W=0;W<j&&H+W<A;W++)L[H+W]+=(Math.random()*2-1)*k*Math.exp(-W/(j*.3))}}return r[y]=I},m=(v,y,x,S)=>{let C=v.createConvolver();C.buffer=f(v,y);let A=v.createBiquadFilter();A.type="lowpass",A.frequency.value=x;let I=v.createGain();return I.gain.value=S,C.connect(A).connect(I).connect(n),C},M=(v,y,x,S="short")=>{let C=v.createGain();C.connect(n),C.connect(m(v,S,1600,.5)),l(v,y,2600,"bandpass",.8,.9*x,.1+.05*(x-1),C),l(v,y,5200,"highpass",.7,.55*x,.05,C),l(v,y,2800,"lowpass",.7,.35*x,.3,C)},p=(v,y,x)=>{let S=v.createGain();S.connect(n),S.connect(m(v,"dry",2200,.4)),l(v,y,1250,"bandpass",7,2.2*x,.22,S),l(v,y,2050,"bandpass",6,1.3*x,.15,S),l(v,y,3300,"bandpass",5,.7*x,.09,S)},g=(v,y,x)=>{for(let[S,C,A]of[[5200,.12,1],[8900,.07,.6],[12400,.05,.4]])d(v,y,S*(.98+Math.random()*.04),x*A,C);l(v,y,6e3,"highpass",.7,x*.8,.008)},_=(v,y,x)=>{l(v,y,650,"lowpass",.7,x,.035),l(v,y,2e3,"bandpass",2,x*.35,.01)},E={dirt(v,y){_(v,y,.22),_(v,y+.085,.09),l(v,y+.1,3e3,"bandpass",1,.025,.12)},rock(v,y){g(v,y,.06),g(v,y+.11,.03),g(v,y+.19,.012)},both(v,y){_(v,y,.18),g(v,y,.022),_(v,y+.09,.07),g(v,y+.09,.008)}},b={now(v,y){let x=v.createDelay(1);x.delayTime.value=.31;let S=v.createGain();S.gain.value=.32;let C=v.createBiquadFilter();C.type="lowpass",C.frequency.value=900;let A=v.createGain();A.gain.value=.5,x.connect(C).connect(S).connect(x),C.connect(A).connect(n);let I=v.createGain();I.connect(n),I.connect(x),l(v,y,2800,"lowpass",.7,1,.45,I),l(v,y,6e3,"highpass",.7,.5,.06,I),h(v,y,95,38,.9,.3,I)},powder(v,y,x="short"){let S=v.createGain(),C=u(v,2.5);S.connect(C).connect(n),C.connect(m(v,x,900,.9)),l(v,y,9e3,"highpass",.7,.7,.012,S),l(v,y,1800,"lowpass",.7,1,.25,S),l(v,y,350,"lowpass",.8,1,.7,S),h(v,y,80,30,1,.5,S)},canyon(v,y){let x=v.createGain();x.connect(n),x.connect(m(v,"canyon",1400,1.5)),l(v,y,6e3,"highpass",.7,.9,.02,x),l(v,y,3e3,"lowpass",.7,.9,.18,x),h(v,y,110,45,.7,.25,x)},powderCrack(v,y){b.powder(v,y,"dry"),M(v,y,1,"dry"),p(v,y,1)},powderTang(v,y){b.powder(v,y,"dry"),M(v,y,1,"dry"),p(v,y,1.8)},powderCrack2(v,y){b.powder(v,y),M(v,y,1.5)},ref(v,y){l(v,y,6e3,"bandpass",.9,2.6,.045),l(v,y,2500,"bandpass",.7,1,.08),l(v,y,600,"lowpass",.7,.7,.07),c(v,y,.45,.6,5e3),h(v,y,90,40,.22,.3)},powderRef(v,y){let x=v.createGain(),S=u(v,2.5);x.connect(S).connect(n),S.connect(m(v,"dry",900,.7)),l(v,y,1800,"lowpass",.7,.8,.25,x),l(v,y,350,"lowpass",.8,.4,.45,x),h(v,y,80,32,.35,.4,x),M(v,y,1.2,"dry"),p(v,y,1),c(v,y,.32,.45,5e3,.8)},ring(v,y){let x=v.createGain(),S=v.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(12e3,y),S.frequency.exponentialRampToValueAtTime(650,y+.12),x.connect(S).connect(n),S.connect(m(v,"short",600,.7)),l(v,y,9e3,"highpass",.7,.8,.012,x),l(v,y,2e3,"lowpass",.7,1,.3,x),h(v,y,85,32,1,.45,x);for(let[C,A]of[[5100,.05],[5163,.035]]){let I=v.createOscillator(),N=v.createGain();I.frequency.value=C,N.gain.setValueAtTime(0,y+.08),N.gain.linearRampToValueAtTime(A,y+.3),N.gain.exponentialRampToValueAtTime(5e-4,y+3.6),I.connect(N).connect(n),I.start(y+.08),I.stop(y+3.7)}}};return{click(v,y){let x=o();if(!x)return;let S=x.currentTime;l(x,S,y,"bandpass",6,v,.025),l(x,S+.004,y*.55,"bandpass",3,v*.5,.05)},bang(v=Eu){let y=o();y&&b[v](y,y.currentTime)},slide(){let v=o();v&&l(v,v.currentTime,2500,"bandpass",2,.12,.12)},drop(v=wu){let y=o();y&&E[v](y,y.currentTime)},insert(){let v=o();v&&l(v,v.currentTime,1200,"bandpass",3,.25,.05)},async render(v,y=2.5){let x=[e,n,s,r],S=new OfflineAudioContext(1,Math.floor(48e3*y),48e3);e=S,s=a(S),r={},n=S.createDynamicsCompressor(),n.threshold.value=-8,n.ratio.value=6,n.connect(S.destination),b[v](S,.05);let C=await S.startRendering();return[e,n,s,r]=x,Array.from(C.getChannelData(0))}}}var fe=120,Lo={uPC:{value:new nt}},Do=[],ol=(i,t)=>i+Math.round((t-i)/fe)*fe,Hp=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Fp(i,t){let e=(l,h)=>{let d=Math.imul(l,374761393)+Math.imul(h,668265263)|0;return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967295},n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return(e(n,s)*(1-a)+e(n+1,s)*a)*(1-c)+(e(n,s+1)*(1-a)+e(n+1,s+1)*a)*c}function Sn(i){let t=i>>>0||1;return()=>(t=Math.imul(t^t>>>15,2246822507)+2654435769>>>0,t^=t>>>13,(t>>>0)/4294967296)}var kp=`
float pHash(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float pNoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(pHash(i), pHash(i+vec3(1,0,0)), f.x), mix(pHash(i+vec3(0,1,0)), pHash(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(pHash(i+vec3(0,0,1)), pHash(i+vec3(1,0,1)), f.x), mix(pHash(i+vec3(0,1,1)), pHash(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,cl=`#ifdef USE_FOG
  float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * 0.5);
  #endif`;async function Tu(i){let t=await(await fetch(i)).json(),e=atob(t.data),n=new Uint8Array(e.length);for(let l=0;l<e.length;l++)n[l]=e.charCodeAt(l);let s=n.buffer,r=0,o=(l,h)=>{let d=new l(s,r,h);return r+=h*l.BYTES_PER_ELEMENT+3&-4,d},c={lods:t.lods.map(l=>{let h=o(Int16Array,l.vc*3),d=o(Int8Array,l.vc*3),u=o(Uint8Array,l.vc*4),f=o(Uint8Array,l.vc*4),m=o(Uint16Array,l.vc),M=l.big?o(Uint32Array,l.ic):o(Uint16Array,l.ic),p=new Float32Array(l.vc*3),g=new Float32Array(l.vc);for(let E=0;E<l.vc*3;E++)p[E]=h[E]*t.ps;for(let E=0;E<l.vc;E++)g[E]=m[E]/1e3;let _=new ie;return _.setAttribute("position",new Ft(p,3)),_.setAttribute("normal",new Ft(new Int8Array(d),3,!0)),_.setAttribute("aA",new Ft(new Uint8Array(u),4,!0)),_.setAttribute("aB",new Ft(new Uint8Array(f),4,!0)),_.setAttribute("aS",new Ft(g,1)),_.setIndex(new Ft(l.big?new Uint32Array(M):new Uint16Array(M),1)),_.computeBoundingSphere(),_}),meta:t};if(t.areoles){let l=t.areoles,h=o(Int16Array,l*3),d=o(Int8Array,l*4),u=o(Int8Array,l*4);c.areoles={n:l,ap:h,an:d,at:u,aps:t.aps}}return c}var Zy={uSpineHaze:{value:1}};function Ky(){let i=new hn({color:16777215,roughness:.6,metalness:0});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,Zy),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB; attribute float aS;
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vS = aS; vObj = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying float vS; varying vec3 vObj; uniform float uSpineHaze;
${kp}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",cl)},i.customProgramCacheKey=()=>"saguaro-skin-v1",i}var Vp={uPx:{value:.002}};function Jy(){let i=new hn({color:16777215,roughness:.55,metalness:0,side:Te});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,Vp),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aT; attribute vec3 iBase; attribute vec3 iDir; attribute float iW; attribute vec3 iN; attribute vec3 iCol;
uniform float uPx; varying vec3 vSp;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = iN;").replace("#include <begin_vertex>","vec3 transformed = iBase + iDir * aT.x; vSp = iCol * mix(1.0, 0.42, aT.x * aT.x);").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        { vec3 dv = normalize((modelViewMatrix * vec4(iDir, 0.0)).xyz);
          vec3 sv = cross(dv, normalize(mvPosition.xyz)); float sl = length(sv); sv = sl > 1e-4 ? sv / sl : vec3(1.0, 0.0, 0.0);
          float w = max(iW * (1.0 - 0.85 * aT.x), -mvPosition.z * uPx * 0.45); // never much thinner than a pixel
          mvPosition.xyz += sv * w * aT.y; }
        gl_Position = projectionMatrix * mvPosition;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vSp;`).replace("#include <fog_fragment>",cl)},i.customProgramCacheKey=()=>"spine-v1",i}function $y(i,t,e){let n=i.areoles,s=4,r=n.n*s,o=new Float32Array(r*3),a=new Float32Array(r*3),c=new Float32Array(r),l=new Float32Array(r*3),h=new Float32Array(r*3),d=Sn(t),u=new R,f=new R,m=new R,M=new R,p=new R,g=new R,_=0,E=(v,y,x)=>{o.set([u.x+f.x*.002,u.y+f.y*.002,u.z+f.z*.002],_*3),a.set([g.x*v,g.y*v,g.z*v],_*3),c[_]=y,l.set([f.x,f.y,f.z],_*3),h.set(x,_*3),_++};for(let v=0;v<n.n;v++){u.set(n.ap[3*v],n.ap[3*v+1],n.ap[3*v+2]).multiplyScalar(n.aps),f.set(n.an[4*v],n.an[4*v+1],n.an[4*v+2]).normalize(),m.set(n.at[4*v],n.at[4*v+1],n.at[4*v+2]).normalize();let y=n.an[4*v+3]>60;M.copy(m).addScaledVector(f,-m.dot(f)).normalize(),p.crossVectors(f,M);let x=.75+.45*d(),S=Math.min(1,u.y/(e*.9)),C=y?[.3*x,.15*x,.075*x]:[(.36+.06*S)*x,(.335+.04*S)*x,(.29+.02*S)*x];g.copy(f).multiplyScalar(.92).addScaledVector(M,-.38).add({x:(d()-.5)*.25,y:(d()-.5)*.25,z:(d()-.5)*.25}).normalize(),E(y?.018+.012*d():.026+.02*d(),.0011,C);for(let A of[-2,2,Math.PI]){let I=A+(d()-.5)*.6;g.copy(f).multiplyScalar(.35).addScaledVector(M,Math.cos(I)*.94).addScaledVector(p,Math.sin(I)*.94).normalize(),E(.011+.011*d(),6e-4,[C[0]*.92,C[1]*.92,C[2]*.92])}}let b=new xo;return b.setAttribute("position",new Ft(new Float32Array(12),3)),b.setAttribute("aT",new Ft(new Float32Array([0,-1,0,1,1,-1,1,1]),2)),b.setIndex([0,2,1,1,2,3]),b.setAttribute("iBase",new In(o,3)),b.setAttribute("iDir",new In(a,3)),b.setAttribute("iW",new In(c,1)),b.setAttribute("iN",new In(l,3)),b.setAttribute("iCol",new In(h,3)),b.instanceCount=r,b.boundingSphere=new gn(new R(0,e/2,0),e/2+1.6),b}var ll={uTime:{value:0},uGust:{value:0},uWind:{value:new nt(.94,.33)}};function Rs(i,t=.85,e=null,n=!!e){let s=new hn({color:16777215,vertexColors:!0,roughness:t,metalness:0,map:e,alphaTest:e?.4:0,side:n?Te:ci});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,ll),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSway; uniform float uTime, uGust; uniform vec2 uWind;`).replace("#include <project_vertex>",`vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        { float ph = aSway.y + dot(instanceMatrix[3].xz, vec2(0.13, 0.17));
          float wob = sin(uTime * 1.6 + ph) * 0.65 + sin(uTime * 2.9 + ph * 1.7) * 0.35;
          float sc = length(instanceMatrix[1].xyz);
          mvPosition.xz += uWind * (aSway.x * sc) * (0.05 + 0.32 * uGust + wob * (0.035 + 0.1 * uGust)); }
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`),r.fragmentShader=r.fragmentShader.replace("#include <fog_fragment>",cl),n&&(r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`))},s.customProgramCacheKey=()=>i,s}function Bp(i){return new vs({depthPacking:Kc,map:i,alphaTest:.4})}function Op(i,t=5){let n=Sn(t),s=()=>{let E=document.createElement("canvas");return E.width=E.height=256,[E,E.getContext("2d")]},[r,o]=s(),[a,c]=s(),l=i==="creosote"?"#363c22":"#4a4d40";o.fillStyle=l,o.fillRect(0,0,256,256),c.fillStyle="#000",c.fillRect(0,0,256,256),c.fillStyle="#fff",c.fillRect(0,0,6,6);let h=E=>{E(o,!1),E(c,!0)},d=(E,b,v,y,x)=>{let S=[[E,b]],C=E,A=b,I=v;for(let N=0;N<y;N+=12)I+=(n()-.5)*.7,C+=Math.cos(I)*12,A+=Math.sin(I)*12,S.push([C,A]);return h((N,B)=>{N.strokeStyle=B?"#fff":i==="creosote"?"#2a2620":"#8c8270",N.lineWidth=x,N.beginPath(),N.moveTo(S[0][0],S[0][1]);for(let L of S)N.lineTo(L[0],L[1]);N.stroke()}),S},u=(E,b,v,y,x,S)=>h((C,A)=>{C.fillStyle=A?"#fff":S,C.beginPath(),C.ellipse(E,b,v,y,x,0,Math.PI*2),C.fill()}),f=(E,b,v,y,x)=>h((S,C)=>{S.fillStyle=C?"#fff":x,S.beginPath();for(let A=0;A<3;A++){let I=y+A*Math.PI*2/3;S.lineTo(E+Math.cos(I)*v*(A===0?1.3:.8),b+Math.sin(I)*v*(A===0?1.3:.8))}S.fill()}),m=(E,b,v)=>`rgb(${E|0},${b|0},${v|0})`;if(i==="creosote")for(let E=0;E<7;E++){let b=d(256*(.3+.4*n()),250.88,-Math.PI/2+(n()-.5)*1.3,150+n()*90,2.2);b.forEach(([v,y],x)=>{if(x<2)return;let S=x>b.length*.5?3:1;for(let C=0;C<S;C++){let A=n()*Math.PI*2,I=.8+.4*n(),N=.8+.4*n(),B=n()<.12?m(90*N,88*N,50*N):m(52*N,58*N,33*N);u(v+Math.cos(A)*6,y+Math.sin(A)*6,7*I,3.2*I,A,B),u(v+Math.cos(A+.7)*6,y+Math.sin(A+.7)*6,7*I,3.2*I,A+.7,B)}})}else{for(let E=0;E<9;E++)d(256*(.2+.6*n()),256*.98,-Math.PI/2+(n()-.5)*1.6,120+n()*100,1.6);for(let E=0;E<760;E++){let b=Math.sqrt(n())*.5,v=n()*Math.PI*2,y=256*(.5+Math.cos(v)*b),x=256*(.52+Math.sin(v)*b*.92),S=.8+.4*n(),C=n(),A=C<.55?m(66*S,74*S,56*S):C<.9?m(98*S,94*S,74*S):m(126*S,112*S,84*S);f(y,x,5+n()*3,n()*6.28,A)}}let M=o.getImageData(0,0,256,256).data,p=c.getImageData(0,0,256,256).data,g=new Uint8Array(256*256*4);for(let E=0;E<256*256;E++)g[4*E]=M[4*E],g[4*E+1]=M[4*E+1],g[4*E+2]=M[4*E+2],g[4*E+3]=p[4*E];let _=new xs(g,256,256,Mn);return _.colorSpace=cn,_.generateMipmaps=!0,_.minFilter=Yn,_.magFilter=Ze,_.flipY=!1,_.needsUpdate=!0,_}var ui=class{constructor(){this.p=[],this.n=[],this.c=[],this.w=[],this.u=[],this.i=[]}get count(){return this.p.length/3}vert(t,e,n,s,r,o,a,c,l,h=.004,d=.004){return this.p.push(t,e,n),this.n.push(s,r,o),this.c.push(a[0],a[1],a[2]),this.w.push(c,l),this.u.push(h,d),this.count-1}card(t,e,n,s,r,o,a,c){let l=s/2,h=this.count;for(let[d,u]of[[0,0],[1,0],[1,1],[0,1]]){let f=(d-.5)*2*l,m=(u-.5)*2*l;this.vert(t.x+e.x*f+n.x*m,t.y+e.y*f+n.y*m,t.z+e.z*f+n.z*m,r.x,r.y,r.z,o,a,c,.03+.94*d,.03+.94*(1-u))}this.i.push(h,h+1,h+2,h,h+2,h+3)}tube(t,e,n,s,r,o){let a=t.length,c=new R,l=new R,h=new R,d=this.count;for(let u=0;u<a;u++){u<a-1?c.subVectors(t[u+1],t[u]).normalize():c.subVectors(t[u],t[u-1]).normalize(),u===0&&(l.set(.3,.1,1),Math.abs(c.dot(l.normalize()))>.9&&l.set(1,0,0)),l.addScaledVector(c,-l.dot(c)).normalize(),h.crossVectors(c,l);let f=u/(a-1),m=s(f),M=r(f),p=e[u];for(let g=0;g<n;g++){let _=g/n*Math.PI*2,E=Math.cos(_),b=Math.sin(_),v=l.x*E+h.x*b,y=l.y*E+h.y*b,x=l.z*E+h.z*b;this.vert(t[u].x+v*p,t[u].y+y*p,t[u].z+x*p,v,y,x,m,M,o)}}for(let u=0;u<a-1;u++)for(let f=0;f<n;f++){let m=d+u*n+f,M=d+u*n+(f+1)%n,p=m+n,g=M+n;this.i.push(m,M,p,M,g,p)}}spike(t,e,n,s,r,o,a,c,l){let h=new R(0,1,0);Math.abs(h.dot(e))>.9&&h.set(1,0,0),h.addScaledVector(e,-h.dot(e)).normalize();let d=new R().crossVectors(e,h),u=this.count;for(let m=0;m<3;m++){let M=m/3*Math.PI*2,p=Math.cos(M),g=Math.sin(M);this.vert(t.x+(h.x*p+d.x*g)*s,t.y+(h.y*p+d.y*g)*s,t.z+(h.z*p+d.z*g)*s,r.x,r.y,r.z,o,c,l)}let f=this.vert(t.x+e.x*n,t.y+e.y*n,t.z+e.z*n,r.x,r.y,r.z,a,c,l);this.i.push(u,u+1,f,u+1,u+2,f,u+2,u,f)}leaf(t,e,n,s,r,o,a,c,l){let h=t.clone().addScaledVector(e,s),d=t.clone().addScaledVector(e,s*.45).addScaledVector(n,r*.5),u=t.clone().addScaledVector(e,s*.45).addScaledVector(n,-r*.5),f=this.vert(t.x,t.y,t.z,o.x,o.y,o.z,a,c,l),m=this.vert(d.x,d.y,d.z,o.x,o.y,o.z,a,c,l),M=this.vert(h.x,h.y,h.z,o.x,o.y,o.z,a,c,l),p=this.vert(u.x,u.y,u.z,o.x,o.y,o.z,a,c,l);this.i.push(f,m,M,f,M,p,f,M,m,f,p,M)}toGeometry(){let t=new ie;return t.setAttribute("position",new Wt(this.p,3)),t.setAttribute("normal",new Wt(this.n,3)),t.setAttribute("color",new Wt(this.c,3)),t.setAttribute("aSway",new Wt(this.w,2)),t.setAttribute("uv",new Wt(this.u,2)),t.setIndex(this.count>65535?new ms(this.i,1):new ps(this.i,1)),t.computeBoundingSphere(),t}withCards(t){let e=this.count,n=this.i.length;this.p.push(...t.p),this.n.push(...t.n),this.c.push(...t.c),this.w.push(...t.w),this.u.push(...t.u);for(let r of t.i)this.i.push(r+e);let s=this.toGeometry();return s.addGroup(0,n,0),s.addGroup(n,t.i.length,1),s}},Lt=(i,t,e)=>new R(i,t,e),Cs=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e];function Qy(i){let t=Sn(i),e=[],n=22+Math.floor(t()*22),s=.12+t()*.08,r=t()<.4;for(let o=0;o<n;o++){let a=Math.sqrt(t())*s*.85,c=t()*Math.PI*2,l=a/s,h=Lt(Math.cos(c)*a,.03,Math.sin(c)*a),d=.06+l*.42+t()*.12,u=c+(t()-.5)*.5,f=2.2+t()*2.6*(1-.35*l),m=[],M=t()<.06,p=Lt(Math.sin(d)*Math.cos(u),Math.cos(d),Math.sin(d)*Math.sin(u)),g=h.clone(),_=16,E=(.04+l*.12)*(t()<.5?1:.6),b=t()*6;for(let y=0;y<=_;y++){m.push(g.clone());let x=y/_,S=f/_;p.x+=Math.cos(u)*E*S*(.5+x)+Math.sin(b+x*7)*.012,p.z+=Math.sin(u)*E*S*(.5+x)+Math.cos(b+x*5)*.012,p.normalize(),g.addScaledVector(p,S)}let v=.016+t()*.008;e.push({pts:m,r0:v,L:f,dead:M,ph:t()*6.28,leafy:r&&!M&&t()<.8})}return{canes:e,rc:s,leafy:r}}function jy(i,t){let e=Qy(i),n=Sn(i*31+7),s=new ui,r=[6,4,3][t],o=[1,2,4][t],a=[Lt(0,-.05,0),Lt(0,.05,0),Lt(0,.1,0)];s.tube(a,[e.rc*1.05,e.rc,e.rc*.6],[10,6,4][t],()=>[.1,.085,.065],()=>0,0);for(let c of e.canes){let l=c.pts.filter((p,g)=>g%o===0||g===c.pts.length-1),h=l.map((p,g)=>c.r0*Math.pow(1-.8*(g/(l.length-1)),.9)),d=c.dead?[.15,.14,.125]:[.085,.078,.063],u=c.dead?[.18,.17,.155]:[.09,.095,.07];if(s.tube(l,h,r,p=>Cs(d,u,p),p=>Math.pow(p,1.6)*c.L*.22,c.ph),t>1)continue;let f=c.pts,m=c.L/(f.length-1),M=t===0?.045:.12;for(let p=.15,g=n()*6.28;p<c.L*.97;p+=M*(.8+.4*n()),g+=2.4){let _=Math.min(f.length-2,Math.floor(p/m)),E=p/m-_,b=f[_+1].clone().sub(f[_]).normalize(),v=f[_].clone().lerp(f[_+1],E),y=Lt(0,1,0);Math.abs(y.dot(b))>.9&&y.set(1,0,0),y.addScaledVector(b,-y.dot(b)).normalize();let x=Lt(0,0,0).crossVectors(b,y),S=y.clone().multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g)),C=c.r0*Math.pow(1-.8*(p/c.L),.9),A=p/c.L,I=Math.pow(A,1.6)*c.L*.22,N=v.clone().addScaledVector(S,C*.8);if(t===0){let B=S.clone().multiplyScalar(.75).addScaledVector(b,.55).normalize();s.spike(N,B,.012+n()*.01,.0022,S,c.dead?[.2,.19,.17]:[.2,.18,.15],[.06,.055,.05],I,c.ph)}if(c.leafy&&A>.45&&n()<.7){let B=t===0?2+Math.floor(n()*3):1;for(let L=0;L<B;L++){let O=S.clone().multiplyScalar(.8).addScaledVector(b,.4+n()*.4).add(Lt(n()-.5,n()-.5,n()-.5).multiplyScalar(.7)).normalize(),k=Lt(0,0,0).crossVectors(O,S).normalize(),H=n(),j=H<.25?[.1,.13,.035]:H<.75?[.26,.21,.05]:[.2,.12,.05];s.leaf(N,O,k,(t===0?.022:.04)+n()*.01,t===0?.011:.022,S,j,I,c.ph)}}}}return s.toGeometry()}function tM(i){let t=Sn(i),e=[],n=1+t()*1.1,s=9+Math.floor(t()*8),r=.1+t()*.1,o=(a,c,l,h,d,u)=>{let f=[a.clone()],m=c.clone(),M=a.clone(),p=0;for(;p<l;){let g=.08+t()*.07;if(m.x+=(t()-.5)*.4,m.z+=(t()-.5)*.4,m.y+=(t()-.5)*.2+.06,m.normalize(),M.addScaledVector(m,g),p+=g,f.push(M.clone()),d<2&&p>l*.25&&p<l*.85&&t()<.32){let _=Lt(t()-.5,.25+t()*.3,t()-.5).normalize().lerp(m,.45).normalize();o(M.clone(),_,(l-p)*(.5+t()*.4),h*.55,d+1,u+t())}}e.push({pts:f,r0:h,len:l,depth:d,ph:u})};for(let a=0;a<s;a++){let c=a/s*Math.PI*2+t()*.5,l=Math.sqrt(t())*r,h=.14+t()*.36,d=Lt(Math.cos(c)*l,0,Math.sin(c)*l),u=Lt(Math.sin(h)*Math.cos(c),Math.cos(h),Math.sin(h)*Math.sin(c));o(d,u,n*(.75+t()*.45)/Math.cos(h*.6),.011+t()*.004,0,t()*6.28)}return{branches:e,H:n}}function eM(i,t){let e=tM(i),n=Sn(i*17+3),s=new ui,r=new ui,o=Lt(0,e.H*.45,0),a=[.13,.24,.42][t],c=[.045,.11,.24][t];for(let l of e.branches){if(t===2&&l.depth>1)continue;let h=t===0?1:2,d=l.pts.filter((M,p)=>p%h===0||p===l.pts.length-1);if(d.length<2)continue;let u=d.map((M,p)=>Math.max(.0022,l.r0*(1-.75*(p/(d.length-1)))));s.tube(d,u,t===0?4:3,M=>Cs([.05,.044,.037],[.085,.076,.064],M),M=>Math.pow(M,1.5)*.35,l.ph);let f=l.pts,m=c;for(let M=1;M<f.length;M++){let p=M/(f.length-1);if(m+=f[M].distanceTo(f[M-1]),p<.35||m<c)continue;m=0;let g=f[M].clone().add(Lt(n()-.5,n()-.3,n()-.5).multiplyScalar(a*.3)),_=g.clone().sub(o).normalize();_.y+=.9,_.normalize();let E=Lt(n()-.5,n()-.5,n()-.5).normalize().lerp(_,.4).normalize(),b=Lt(0,1,0).cross(E);b.lengthSq()<.001&&b.set(1,0,0),b.normalize();let v=Lt(0,0,0).crossVectors(E,b).normalize(),y=.85+n()*.3;r.card(g,b,v,a*(.8+n()*.45),_,[y,y,y*(.9+n()*.2)],Math.pow(p,1.5)*.35,l.ph)}}return s.withCards(r)}function nM(i,t){let e=Sn(i),n=new ui,s=new ui,r=.35+e()*.4,o=r*(1.3+e()*.5),a=Lt(0,r*.2,0),c=[14,7,0][t],l=[90,28,12][t],h=[.15,.27,.42][t];for(let d=0;d<c;d++){let u=e()*Math.PI*2,f=.35+e()*.9,m=e()*6.28,M=Lt(Math.cos(u)*Math.cos(f)*o/r*.5,Math.sin(f),Math.sin(u)*Math.cos(f)*o/r*.5).normalize(),p=[Lt(Math.cos(u)*.03,0,Math.sin(u)*.03)],g=p[0].clone();for(let _=0;_<4;_++)g.addScaledVector(M,.85*r/4),g.x+=(e()-.5)*.03,g.z+=(e()-.5)*.03,p.push(g.clone());n.tube(p,p.map((_,E)=>.006*(1-.6*E/4)),3,()=>[.12,.11,.09],_=>_*_*.12,m)}for(let d=0;d<l;d++){let u=e()*Math.PI*2,f=Math.asin(Math.pow(e(),.7)),m=.75+.25*e(),M=Lt(Math.cos(u)*Math.cos(f)*o*.5*m,Math.sin(f)*r*m,Math.sin(u)*Math.cos(f)*o*.5*m),p=M.clone().sub(a).normalize(),g=Lt(e()-.5,e()-.5,e()-.5).normalize().lerp(p,.78).normalize(),_=Lt(0,1,0).cross(g);_.lengthSq()<.001&&_.set(1,0,0),_.normalize();let E=Lt(0,0,0).crossVectors(g,_).normalize(),b=.85+e()*.3;p.y+=.9,p.normalize(),s.card(M,_,E,h*(.8+e()*.4),p,[b,b,b],Math.pow(Math.max(0,M.y/r),2)*.12,e()*6.28)}return n.withCards(s)}function iM(i,t){let e=Sn(i),n=new ui,s=i%3,r=[34,14,7][t],o=[4,3,2][t],a=[6,3,1][t],c=[.34,.3,.42][s]*(.75+e()*.5),l=[[.44,.38,.29],[.39,.37,.32],[.48,.41,.26]][s],h=[[.36,.28,.21],[.3,.28,.22],[.4,.33,.2]][s],d=(u,f,m,M,p)=>{let g=n.count;for(let _=0;_<u.length;_++){let E=(_<u.length-1?u[_+1].clone().sub(u[_]):u[_].clone().sub(u[_-1])).normalize(),b=Lt(-E.z,0,E.x);b.lengthSq()<1e-4&&b.set(1,0,0),b.normalize();let v=Lt(0,1,0).addScaledVector(E,-.3).normalize(),y=f[_];n.vert(u[_].x-b.x*y,u[_].y,u[_].z-b.z*y,v.x,v.y,v.z,m[_],M[_],p),n.vert(u[_].x+b.x*y,u[_].y,u[_].z+b.z*y,v.x,v.y,v.z,m[_],M[_],p)}for(let _=0;_<u.length-1;_++){let E=g+2*_;n.i.push(E,E+1,E+3,E,E+3,E+2)}};for(let u=0;u<r;u++){let f=e()*Math.PI*2,m=e()*.035,M=.12+e()*.75,p=c*(.45+e()*.6),g=e()*6.28,_=.75+e()*.4,E=e()<.25,b=Lt(Math.cos(f)*m,0,Math.sin(f)*m),v=Lt(Math.sin(M)*Math.cos(f),Math.cos(M),Math.sin(M)*Math.sin(f)),y=[b.clone()],x=[.005],S=[[.09,.075,.055]],C=[0];for(let A=1;A<=o;A++){let I=A/o;v.x+=Math.cos(f)*.22*I,v.z+=Math.sin(f)*.22*I,v.y-=.18*I*(M+.3),v.normalize(),b=b.clone().addScaledVector(v,p/o),y.push(b),x.push(.005*(1-.8*I)),C.push(I*I*p*.6);let N=Cs(h,l,I).map(B=>B*_);S.push(E?Cs(N,[.33,.31,.28],.6):N)}d(y,x,S,C,g)}for(let u=0;u<a;u++){let f=e()*Math.PI*2,m=.05+e()*.35,M=c*(1.15+e()*.6),p=e()*6.28,g=Lt(Math.sin(m)*Math.cos(f),Math.cos(m),Math.sin(m)*Math.sin(f)),_=[],E=[],b=[],v=[];for(let x=0;x<=4;x++){let S=x/4;_.push(g.clone().multiplyScalar(M*S).add(Lt(Math.cos(f)*.08*S*S,0,Math.sin(f)*.08*S*S))),E.push(.0012),b.push(Cs(h,l,S)),v.push(S*S*M*.8)}d(_,E,b,v,p);let y=_[4];for(let x=0;x<(s===2?4:7);x++){let S=e()*Math.PI*2,C=Lt(Math.cos(S),s===2?-.2:.4+e()*.6,Math.sin(S)).normalize(),A=y.clone().addScaledVector(g,-e()*.06),I=s===2?.012:.03+e()*.03;d([A,A.clone().addScaledVector(C,I)],[s===2?.003:8e-4,3e-4],[l,s===0?[.42,.3,.3]:l],[M*.8,M*.85],p)}}return n.toGeometry()}function Gp(i){let t=Rs("grass-v1",.9,null,!0),e=(n,s,r)=>r()<Math.min(1,Math.max(.05,(Fp(n*.09+3.1,s*.09-7.7)-.25)*2.2+.25*Fp(n*.5,s*.5)));return new Ni({kinds:[1,2,3,4,5,6].map(n=>({lods:[0,1,2].map(s=>iM(n,s)),count:1200,r:.15,H:.5,scale:[.7,1.3]})),material:t,lodDist:[8,20],maxDist:40,clear:i,seed:59,minGap:.05,claim:!1,accept:e,lazy:!0})}function Wp(i){let t=Sn(i),e=new ui,n=.3,s=Lt(0,0,0),r=(a,c,l,h,d)=>{let u=[a.clone()],f=c.clone(),m=a.clone(),M=0;for(;M<l;){let g=.025+t()*.02;f.x+=(t()-.5)*.5,f.y+=(t()-.5)*.5,f.z+=(t()-.5)*.5,f.normalize();let _=m.clone().addScaledVector(f,g),E=_.clone().sub(s);E.length()>n*(.85+.2*t())&&(E.normalize(),f.addScaledVector(E,-1.3*f.dot(E)).normalize()),m.addScaledVector(f,g),M+=g,u.push(m.clone()),d<3&&t()<.2&&r(m.clone(),Lt(t()-.5,t()-.5,t()-.5).normalize().lerp(f,.3).normalize(),(l-M)*(.6+t()*.5)+.05,h*.7,d+1)}let p=.85+t()*.3;e.tube(u,u.map((g,_)=>Math.max(7e-4,h*(1-.7*_/u.length))),3,g=>Cs([.27,.22,.15],[.36,.3,.2],g).map(_=>_*p),()=>0,0)},o=Lt(0,-n*.92,0);e.tube([o.clone().add(Lt(0,-.03,0)),o],[.006,.006],4,()=>[.2,.16,.11],()=>0,0);for(let a=0;a<9;a++){let c=a/9*Math.PI*2+t()*.4;r(o,Lt(Math.cos(c)*.8,.6,Math.sin(c)*.8).normalize(),.7+t()*.5,.004,0)}return e.toGeometry()}var zp=[],Ni=class{constructor({kinds:t,material:e,lodDist:n,clear:s,seed:r,minGap:o=.5,shadowLods:a=1,nearR:c=0,depthMat:l=null,maxDist:h=1e9,claim:d=!0,cull:u=!0,accept:f=null,lazy:m=!1}){this.lazy=m,this._last=[1e9,1e9,1e9],this.group=new ge,this.depthMat=l,this.maxDist=h,this.cull=u,this.kinds=t,this.lodDist=n,this.nearR=c,this.shadowLods=a;let M=Sn(r);this.items=[],t.forEach((p,g)=>{for(let _=0;_<p.count;_++){let E,b,v=0,y;do E=(M()-.5)*fe,b=(M()-.5)*fe,v++,y=!s(E,b)&&(!f||f(E,b,M))&&!zp.some(A=>(d||A.solid)&&Math.hypot(ol(A.x,E)-E,ol(A.z,b)-b)<A.r+p.r+o);while(!y&&v<400);let x=p.scale[0]+M()*(p.scale[1]-p.scale[0]),S=.9+M()*.2,C={v:g,x:E,z:b,rot:M()*Math.PI*2,s:x,tint:new ot(S,S*(.97+M()*.06),S*(.95+M()*.1)),H:p.H*x,r:p.r*x};this.items.push(C),d&&zp.push(C)}}),this.meshes=t.map((p,g)=>p.lods.map((_,E)=>{let b=new io(_,e,p.count);b.frustumCulled=!1,b.count=0;for(let v=0;v<p.count;v++)b.setColorAt(v,new ot(1,1,1));return this.group.add(b),b})),this._M=new Kt,this._Q=new _e,this._S=new R,this._P=new R,this._Y=new R(0,1,0),this._sph=new gn,this._fr=new ri,this._pv=new Kt}setShadows(t){this.meshes.forEach(e=>e.forEach((n,s)=>{n.castShadow=t&&s<this.shadowLods,n.receiveShadow=t&&!this.depthMat,this.depthMat&&(n.customDepthMaterial=this.depthMat)}))}update(t,e,n){if(this.lazy){let o=n.matrixWorld.elements,a=Math.atan2(o[8],o[10]),c=this._last;if(Math.hypot(t-c[0],e-c[1])<.3&&Math.abs(Math.atan2(Math.sin(a-c[2]),Math.cos(a-c[2])))<.06)return[];c[0]=t,c[1]=e,c[2]=a}for(let o of this.meshes)for(let a of o)a.count=0;this._pv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._pv);let s=[],r=this.lodDist;for(let o of this.items){let a=ol(o.x,t),c=ol(o.z,e),l=a-t,h=c-e,d=Math.hypot(l,h),u=1-Hp(fe*.36,fe*.48,Math.max(Math.abs(l),Math.abs(h)));if(u<.002||d>this.maxDist||this.cull&&d>20&&(this._sph.center.set(a,o.H*.5,c),this._sph.radius=o.H*.5+o.r+1,!this._fr.intersectsSphere(this._sph)))continue;let f=0;for(;f<r.length&&d>=r[f];)f++;let m=this.meshes[o.v];f=Math.min(f,m.length-1);let M=m[f];this._M.compose(this._P.set(a,0,c),this._Q.setFromAxisAngle(this._Y,o.rot),this._S.setScalar(o.s*u)),M.setMatrixAt(M.count,this._M),M.setColorAt(M.count,o.tint),M.count++,d<this.nearR&&s.push({it:o,d,M:this._M.clone()})}for(let o of this.meshes)for(let a of o)a.visible=a.count>0,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);return s}},hl=["classic","old","spear","onearm","droop"],sM=[12,5,15,10,6],al=class extends Ni{constructor(t,e,n=7){let s=Ky();super({kinds:t.map((r,o)=>({lods:r.lods,count:sM[o],r:r.meta.R0+.6,H:r.meta.H,scale:[.86,1.14]})),material:s,lodDist:[13,36],clear:e,seed:n,minGap:3.5,shadowLods:2,nearR:8});for(let r of this.items)r.solid=!0,Do.push({x:r.x,z:r.z,r:t[r.v].meta.R0*1.08*r.s+.05});this.spineMat=Jy(),this.spineGeos=t.map((r,o)=>r.areoles?$y(r,101+o*7,r.meta.H):null),this.spines=[0,1].map(()=>{let r=new qt(this.spineGeos[0],this.spineMat);return r.matrixAutoUpdate=!1,r.visible=!1,this.group.add(r),r})}update(t,e,n){let s=super.update(t,e,n).filter(r=>this.spineGeos[r.it.v]).sort((r,o)=>r.d-o.d);this.spines.forEach((r,o)=>{let a=s[o];r.visible=!!a,a&&(r.geometry=this.spineGeos[a.it.v],r.matrix.copy(a.M),r.matrixWorldNeedsUpdate=!0)})}setPixel(t,e){Vp.uPx.value=2*Math.tan(Li.degToRad(t.fov)/2)/Math.max(1,e)}};function Xp(i){let t=Rs("plant-v1",.8),e=Op("creosote",5),n=Op("bursage",9),s=Rs("leaf-creosote-v1",.6,e),r=Rs("leaf-bursage-v1",.9,n),o=new Ni({kinds:[11,23,37].map(l=>({lods:[0,1,2].map(h=>jy(l,h)),count:6,r:.9,H:4.5,scale:[.8,1.15]})),material:t,lodDist:[14,40],clear:i,seed:41,minGap:1.5}),a=new Ni({kinds:[5,9,14].map(l=>({lods:[0,1,2].map(h=>eM(l,h)),count:45,r:.8,H:1.8,scale:[.75,1.2]})),material:[t,s],lodDist:[12,35],clear:i,seed:43,minGap:1.2,depthMat:Bp(e)}),c=new Ni({kinds:[3,8,13].map(l=>({lods:[0,1,2].map(h=>nM(l,h)),count:70,r:.4,H:.6,scale:[.7,1.3]})),material:[t,r],lodDist:[10,28],clear:i,seed:47,minGap:.3,depthMat:Bp(n)});return[o,a,c]}function rM(i,t){let e=Sn(i),n=new ui,s=4.2+e()*2.6,r=[24,16,10][t],o=[5,4,3][t],a=[24,10,5][t],c=(u,f)=>{let m=.8+.4*(f*.37%1);return Cs([.27*m,.25*m,.215*m],[.33*m,.315*m,.28*m],u)},l=(u,f,m,M,p,g,_)=>{let E=Sn(_);for(let b=0;b<g;b++){let v=b/g*Math.PI*2+E()*.2,y=Math.cos(v)*p*(1.5+E()*.7),x=(Math.sin(v)*.3+.45)*p,S=E()*M*.15,C=M*(.75+E()*.25),A=E()<.35?2:1;for(let I=0;I<A;I++){let N=A===1||I===0?S:S+(C-S)*(.5+E()*.1),B=A===1?C:I===0?S+(C-S)*(.45+E()*.05):C,L=(E()-.5)*.12,O=[];for(let H=0;H<=a;H++){let j=H/a,W=N+(B-N)*j,$=Math.sin(j*Math.PI)*(E()-.5)*.04,tt=.3+.7*Hp(0,.7,W),wt=(y+L*(W-N)+$)*tt;O.push(u.clone().addScaledVector(f,W).addScaledVector(m,wt).add(Lt(0,Math.max(.016,(x+$*.5)*tt+.03*(1-tt)),0)))}let k=.013+E()*.008;n.tube(O,O.map(()=>k),o,H=>c(H,b),()=>0,0)}}},h=Lt(1,0,0),d=Lt(0,0,1);if(l(Lt(.15,0,0),h,d,s,.13,r,i*3+1),e()<.8){let u=1.6+e()*1.4,f=(e()<.5?1:-1)*(.5+e()*.5),m=Lt(Math.cos(f),0,Math.sin(f)),M=Lt(-m.z,0,m.x);l(Lt(u,0,Math.sign(f)*.35),m,M,1.2+e()*1.2,.08,Math.max(5,Math.round(r*.55)),i*5+2)}for(let u=0;u<(t===2?3:7);u++){let f=u/7*Math.PI*2+e()*.5,m=.25+e()*.35,M=Lt(.12,.05,0),p=Lt(.05-Math.abs(Math.cos(f))*m*.6,.02+Math.max(0,Math.sin(f))*.08,Math.sin(f)*m*.8);n.tube([M,M.clone().lerp(p,.5).add(Lt(0,.02,0)),p],[.035,.025,.01],[5,4,3][t],()=>[.2,.18,.155],()=>0,0)}if(t<2)for(let u=0;u<2;u++){let f=Lt(.6+e()*(s-1.2),.05,(e()-.5)*.7),m=Lt(e()-.5,.15,e()-.5).normalize(),M=[],p=7;for(let v=0;v<=p;v++){let y=v/p;M.push([.035+.035*Math.sin(y*Math.PI*.85),y*.13])}let g=t===0?9:5,_=Lt(0,1,0).cross(m);_.lengthSq()<.001&&_.set(1,0,0),_.normalize();let E=Lt(0,0,0).crossVectors(m,_),b=n.count;for(let[v,y]of M)for(let x=0;x<g;x++){let S=x/g*Math.PI*2,C=_.x*Math.cos(S)+E.x*Math.sin(S),A=_.y*Math.cos(S)+E.y*Math.sin(S),I=_.z*Math.cos(S)+E.z*Math.sin(S);n.vert(f.x+m.x*y+C*v,f.y+m.y*y+A*v,f.z+m.z*y+I*v,C,A,I,[.13,.085,.05],0,0)}for(let v=0;v<p;v++)for(let y=0;y<g;y++){let x=b+v*g+y,S=b+v*g+(y+1)%g,C=x+g,A=S+g;n.i.push(x,S,C,S,A,C,x,C,S,S,C,A)}}return n.toGeometry()}function oM(){let i=new hn({color:16777215,roughness:.78,metalness:0});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aA; attribute vec4 aB;
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vA = aA; vB = aB; vBo = position;`).replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
        vWy = (instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vWy = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vA; varying vec4 vB; varying vec3 vBo; varying float vWy;
${kp}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`).replace("#include <fog_fragment>",cl)},i.customProgramCacheKey=()=>"bone-v1",i}function aM(i,t,e){let n=Sn(e),s=14,r=6,o=[],a=[],c=[];for(let f=0;f<=s;f++){let m=f/s,M=(m-.5)*t,p=i/t,g=Math.sin(M)*p,_=(Math.cos(M)-Math.cos(t/2))*p,E=Math.cos(M),b=-Math.sin(M),v=.011*(1-.35*m)+.004*(m<.08?1-m/.08:0),y=.005;for(let x=0;x<r;x++){let S=x/r*Math.PI*2,C=Math.cos(S)*v,A=Math.sin(S)*y,I=-b,N=E;o.push(g+I*C,A+y,_+N*C);let B=Math.hypot(Math.cos(S)/v,Math.sin(S)/y);a.push(I*Math.cos(S)/v/B,Math.sin(S)/y/B,N*Math.cos(S)/v/B)}}for(let f=0;f<s;f++)for(let m=0;m<r;m++){let M=f*r+m,p=f*r+(m+1)%r,g=M+r,_=p+r;c.push(M,g,p,p,g,_)}let l=o.length/3,h=new Uint8Array(l*4),d=new Uint8Array(l*4);for(let f=0;f<l;f++)h[4*f+3]=230,d[4*f+2]=Math.floor(n()*255);let u=new ie;return u.setAttribute("position",new Wt(o,3)),u.setAttribute("normal",new Wt(a,3)),u.setAttribute("aA",new Ft(h,4,!0)),u.setAttribute("aB",new Ft(d,4,!0)),u.setAttribute("aS",new Ft(new Float32Array(l),1)),u.setIndex(c),u}var cM=[[["skull",0,.07,0,.5,.05,.12],["jaw",.36,.012,.22,.9,0,1.5708],["jaw",-.7,.012,-.45,-2.3,0,-1.5708],["vert-t",.25,.02,-.55,.3,0,1.4],["vert-t",.33,.02,-.72,.4,0,-1.3],["vert-t",.38,0,-.92,.2,0,.1],["vert-t",.52,.02,-1.1,.5,0,1.5],["vert-l",.6,0,-1.32,.35,0,.2],["vert-l",.7,.01,-1.5,.6,0,-.1],["vert-l",1.2,0,-1.2,2.1,0,.05],["pelvis",.9,.035,-2,.4,.08,.25],["femur",1.6,.012,-1.7,1.1,0,0],["femur",-.2,.01,-2.5,-.5,0,3.1],["scapula",-.55,0,-.95,.7,0,0],...[0,1,2,3,4,5,6,7].map(i=>["rib",.5+i*.1,0,-.6-i*.12,-1.3-i*.05+i%2*.15,0,0]),["rib",-1.1,0,.6,2.4,0,0],["rib",1.9,0,-.4,.3,0,0]],[["skull",0,.09,0,-1.9,0,1.45],["jaw",.55,.012,.4,2.6,0,1.5708],["vert-t",-.8,.02,.5,1.2,0,1.5],["vert-l",-1.15,0,.2,.4,0,.1],["vert-t",1.3,.02,-.7,2,0,-1.4],["pelvis",-1.6,.03,-.9,2.2,-.1,-.2],["femur",.4,.012,-1.3,.2,0,0],["scapula",1.5,0,.5,-.4,0,3.14159],...[0,1,2,3,4].map(i=>["rib",-.4+i*.45,0,-.5-i%2*.4,i*1.3,0,0])]],Au=["skull","jaw","vert-t","vert-l","femur","pelvis","scapula"];function lM(i,t,e){let n=[],s=new Kt,r=new en,o=new _e,a=new R(1,1,1),c=new R;t.forEach(([h,d,u,f,m,M,p],g)=>{let _;h==="rib"?_=aM(.36+g*.37%1*.16,1.4,g+3):_=i[Au.indexOf(h)].lods[e].clone(),r.set(M,m,p,"YXZ"),o.setFromEuler(r),s.compose(c.set(d,u,f),o,a),_.applyMatrix4(s);let E=_.attributes.normal;if(!(E.array instanceof Float32Array)){let b=new Float32Array(E.count*3);for(let v=0;v<E.count;v++)b[3*v]=E.getX(v),b[3*v+1]=E.getY(v),b[3*v+2]=E.getZ(v);_.setAttribute("normal",new Ft(b,3))}n.push(_)});let l=Tp(n.map(h=>{for(let d of["aA","aB"])h.attributes[d].normalized||(h.attributes[d].normalized=!0);return h}));return l.computeBoundingSphere(),l}function qp(i,t){let e=Rs("deadwood-v1",.92),n=new Ni({kinds:[21,34].map(r=>({lods:[0,1,2].map(o=>rM(r,o)),count:3,r:2.6,H:.4,scale:[.85,1.1]})),material:e,lodDist:[16,40],clear:t,seed:61,minGap:1}),s=new Ni({kinds:cM.map((r,o)=>({lods:[0,1,2].map(a=>lM(i,r,a)),count:o===0?2:1,r:2.2,H:.3,scale:[1,1]})),material:oM(),lodDist:[12,30],clear:t,seed:67,minGap:1});return[n,s]}var hM=location.hash==="#debug",dn=!0;Vt.lights_pars_begin=Vt.lights_pars_begin.replace("float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );","float distanceFalloff = 1.0 / pow( sqrt( lightDistance * lightDistance + 0.81 ), decayExponent );");var Fe=i=>document.getElementById(i),pe=(i,t,e)=>Math.max(t,Math.min(e,i)),Un=(i,t,e)=>i+(t-i)*e,Ui=i=>i*i*(3-2*i),c0=(i,t,e)=>i<t?Math.min(t,i+e):Math.max(t,i-e),ye=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n)),ne=(i,t)=>i+Math.random()*(t-i),mi=matchMedia("(pointer: coarse)").matches,rn=new R(-1.6,0,1.5),l0=1.62,uM=[{x:-1.25,z:-3.9,off:25,s:1,coat:.82,v:0},{x:.95,z:-3,off:-40,s:.97,coat:.72,v:1},{x:3.1,z:-5.4,off:70,s:1.03,coat:.7,v:2},{x:-3.4,z:-6.9,off:-55,s:1.02,coat:.85,v:1},{x:-.15,z:-6.2,off:15,s:.95,coat:.62,v:0},{x:1.9,z:-8.6,off:60,s:1,coat:.8,v:2},{x:4.6,z:-9.4,off:-75,s:.98,coat:.22,face:.85,v:0},{x:-2.1,z:-10.2,off:35,s:1,coat:.75,v:1},{x:.7,z:-11.6,off:-20,s:1.05,coat:.83,v:2},{x:-4.2,z:-9,off:80,s:.97,coat:.18,face:.85,v:0},{x:3,z:-13,off:-50,s:1,coat:.78,v:1}],fM=150,dM=1.7;var Jt={start:Fe("start"),startBtn:Fe("startBtn"),loadTxt:Fe("loadTxt"),sub:Fe("sub"),joy:Fe("joy"),knob:Fe("knob"),fps:Fe("fps"),hint:Fe("hint"),resume:Fe("resume"),prompt:Fe("prompt"),lampBtn:Fe("lampBtn"),raiseBtn:Fe("raiseBtn"),end:Fe("end"),again:Fe("again"),fsBtn:Fe("fsBtn"),cockBtn:Fe("cockBtn"),fireBtn:Fe("fireBtn"),reloadBtn:Fe("reloadBtn")},zn;try{zn=new tl({antialias:!1,powerPreference:"high-performance"})}catch(i){throw Jt.loadTxt.textContent="\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694.",i}zn.outputColorSpace=ds;zn.toneMapping=Dn;zn.autoClear=!1;Fe("stage").appendChild(zn.domElement);var ss=zn.domElement,We=new qi;We.fog=new to(new ot(.0035,.004,.0055),.009);var Gt=new Ye(60,16/9,.05,1200);Gt.rotation.order="YXZ";var Bo={uLanternPos:{value:new R},uEyeGain:{value:200},uEyeSelf:{value:0},uTime:{value:0}},Bi=`
float hash13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), f.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), f.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), f.x), f.y), f.z)*2.0-1.0; }
`,pM=`
  attribute vec4 aRig; attribute vec4 aLeg;
  uniform vec4 uPose; uniform float uTail; uniform vec4 uGait;
  mat3 rotYP(float yaw, float pitchUp){ float cy = cos(yaw), sy = sin(yaw), ca = cos(-pitchUp), sa = sin(-pitchUp);
    return mat3(cy,0.0,-sy, 0.0,1.0,0.0, sy,0.0,cy) * mat3(1.0,0.0,0.0, 0.0,ca,sa, 0.0,-sa,ca); }
  mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0); }
  mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }`,mM=`
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
  }`,gM=`
  transformed = kneeP + rKnee * (transformed - kneeP);
  transformed = hipP + rHip * (transformed - hipP);
  transformed = T0 + rT * (transformed - T0);
  transformed = H0 + rH * (transformed - H0);
  transformed = N0 + rN * (transformed - N0);`;function xM(i,t,e){let n=new oi({color:16777215,roughness:.82,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new ot(i*.6,i*.56,i*.48)}),s={uBody:{value:new ot(i,i*.93,i*.8)},uFace:{value:new ot(t,t*.93,t*.8)},uPhase:{value:e},uPose:{value:new ue},uTail:{value:0},uGait:{value:new ue}};return n.userData.own=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,Bo,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat; attribute vec4 aExt4; attribute vec3 aHead;
        uniform float uTime; uniform float uPhase;
        varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
        ${pM}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${mM}
        objectNormal = rN * (rH * (rT * (rHip * (rKnee * objectNormal))));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat; vEye = aExt4.x; vExt = aExt4.yzw; vObj = position; vHead = aHead;
        { float br = sin(uTime*1.3 + uPhase)*0.5 + 0.5;
          float barrel = smoothstep(0.6, 0.85, position.y) * (1.0 - smoothstep(1.15, 1.32, position.y)) * (1.0 - smoothstep(0.5, 0.85, abs(position.z + 0.05))) * (1.0 - aRig.x);
          transformed += normal * barrel * br * 0.007; }
        ${gM}`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uLanternPos; uniform float uEyeGain; uniform float uEyeSelf; uniform vec3 uBody; uniform vec3 uFace; varying vec4 vMat; varying float vEye; varying vec3 vObj; varying vec3 vWP; varying vec3 vExt; varying vec3 vHead;
${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
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
          totalEmissiveRadiance += vEye * vec3(0.95,1.0,0.92) * (uEyeGain * pow(fc, 6.0) / pow(max(dl, 1.3), 1.5) + uEyeSelf * pow(fc, 4.0)); }`)},n.customProgramCacheKey=()=>"cow-rig-v3",n}async function vM(i){let t=await(await fetch("cows/cows.json")).json(),e=0;return Promise.all(t.map(async n=>{let s=await(await fetch(n.file)).json(),r=atob(s.data),o=new Uint8Array(r.length);for(let y=0;y<r.length;y++)o[y]=r.charCodeAt(y);let a=o.buffer,c=n.vc,l=n.ic,h=0,d=new Int16Array(a,h,c*3);h+=c*6;let u=new Int16Array(a,h,c*3);h+=c*6;let f=new Uint16Array(a,h,l);h+=l*2;let m=new Int8Array(a,h,c*3);h+=c*3;let M=new Uint8Array(a,h,c*4);h+=c*4;let p=new Uint8Array(a,h,c*4);h+=c*4;let g=new Uint8Array(a,h,c*4);h+=c*4;let _=n.leg?new Uint8Array(a,h,c*4):new Uint8Array(c*4),E=new Float32Array(c*3),b=new Float32Array(c*3);for(let y=0;y<c*3;y++)E[y]=d[y]*n.ps,b[y]=u[y]*n.hs;let v=new ie;return v.setAttribute("position",new Ft(E,3)),v.setAttribute("normal",new Ft(new Int8Array(m),3,!0)),v.setAttribute("aMat",new Ft(new Uint8Array(M),4,!0)),v.setAttribute("aExt4",new Ft(new Uint8Array(p),4,!0)),v.setAttribute("aRig",new Ft(new Uint8Array(g),4,!0)),v.setAttribute("aLeg",new Ft(new Uint8Array(_),4,!0)),v.setAttribute("aHead",new Ft(b,3)),v.setIndex(new Ft(new Uint16Array(f),1)),v.boundingSphere=new gn(new R(0,.8,0),2.2),i(++e/t.length),v}))}var Nl=[];function _M(i,t){for(let e of Nl)e.position.x=i,e.position.z=t;Lo.uPC.value.set(i,t)}function yM(){let i=new Xn(400,400,8,8);i.rotateX(-Math.PI/2);let t=new hn({color:3353119,roughness:1});t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWP2 = (modelMatrix*vec4(transformed,1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP2;
${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 q = vec3(vWP2.x, 0.0, vWP2.z);
          float a = vnoise3(q*0.35)*0.5+0.5; float b = vnoise3(q*2.5)*0.5+0.5; float c2 = vnoise3(q*14.0)*0.5+0.5; float c3 = vnoise3(q*55.0)*0.5+0.5;
          // Sonoran desert floor: tan gravel, pale sandy washes, dark and light pebbles
          vec3 col = mix(vec3(0.15,0.125,0.095), vec3(0.21,0.175,0.13), smoothstep(0.35,0.7,a*0.6+b*0.4));
          float wash = smoothstep(0.6, 0.8, vnoise3(vec3(q.x*0.07, 0.0, q.z*0.22))*0.5+0.5);
          col = mix(col, vec3(0.26,0.225,0.17), wash*0.55);
          float peb = vnoise3(q*38.0)*0.5+0.5;
          col *= 0.86 + 0.26*smoothstep(0.5, 0.8, peb) - 0.2*smoothstep(0.72, 0.9, c3);
          float burnt = 1.0 * (1.0 - smoothstep(0.5, 1.2, length(vWP2.xz - vec2(${rn.x.toFixed(2)}, ${rn.z.toFixed(2)})))); // the campfire's scorch (no campfire by day)
          col = mix(col, vec3(0.03,0.025,0.02), burnt);
          col *= (0.7 + 0.45*c2) * (0.85 + 0.3*c3);
          diffuseColor.rgb = col; }`)};let e=new qt(i,t);return Nl.push(e),MM=e,e}var MM=null,h0={uHaze:{value:new ot},uLift:{value:0}};function SM(){let i=new ge,t=new xe({fog:!1,side:Te,uniforms:h0,vertexShader:"attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 uHaze; uniform float uLift; varying float vT; void main(){ gl_FragColor = vec4(uHaze * mix(vT, 1.0, uLift), 1.0); }"}),e=(n,s,r,o,a,c)=>{let h=[],d=[],u=[];for(let m=0;m<=420;m++){let M=-Math.PI+2*Math.PI*(m/420),p=Math.sin(M)*n,g=-Math.cos(M)*n,_=1-Math.abs(xu(M*5,o,.7,4)),E=s+r*_*_+2.2*xu(M*60,o+3.1,1.3,2);if(h.push(p,-4,g,p,E,g),d.push(a,c),m<420){let b=2*m;u.push(b,b+2,b+1,b+1,b+2,b+3)}}let f=new ie;return f.setAttribute("position",new Wt(h,3)),f.setAttribute("aT",new Wt(d,1)),f.setIndex(u),new qt(f,t)};return i.add(e(190,8,30,4.2,.95,.55),e(150,3,17,9.7,.85,.12)),Nl.push(i),i}var Ru=(i,t)=>i>-8&&i<9&&t>-17&&t<6,On=null,Is=[],Cu=0;function bM(i,t){Cu=ye(Cu,t?1:0,t?1.8:.7,i),ll.uTime.value=performance.now()/1e3,ll.uGust.value=Cu,On&&On.update(yt.pos.x,yt.pos.z,Gt);for(let e of Is)e.update(yt.pos.x,yt.pos.z,Gt)}var Fn=new R(1,0,.35).normalize(),Ul=[];function EM(i){let t=[3,7].map(n=>Wp(n)),e=Rs("tumble-v1",.95);for(let n=0;n<4;n++){let s=.8+Math.random()*.5,r=new qt(t[n%2],e);r.scale.setScalar(s),i.add(r),Ul.push({mesh:r,r:.28*s,pos:new R,speed:0,k:.8+Math.random()*.4,side:Math.random()-.5,phase:Math.random()*6})}}function u0(i,t){let e=t?(Math.random()-.5)*20:12+Math.random()*6,n=(Math.random()-.5)*24;i.pos.set(Gt.position.x-Fn.x*e+Fn.z*n,i.r,Gt.position.z-Fn.z*e-Fn.x*n),i.speed=0}var wM=new _e,TM=new R(Fn.z,0,-Fn.x);function AM(i,t){for(let e of Ul){let n=e.pos.x-Gt.position.x,s=e.pos.z-Gt.position.z;(Math.hypot(n,s)>28||n*Fn.x+s*Fn.z>20)&&u0(e,!1),e.speed=ye(e.speed,(t?3:.12)*e.k,t?1.4:.5,i),e.pos.x+=(Fn.x+Fn.z*e.side*.2)*e.speed*i,e.pos.z+=(Fn.z-Fn.x*e.side*.2)*e.speed*i;let r=(o,a,c)=>{let l=e.pos.x-o,h=e.pos.z-a,d=Math.hypot(l,h),u=c+e.r;d<u&&d>1e-4&&(e.pos.x=o+l/d*u,e.pos.z=a+h/d*u,e.speed*=.6)};for(let o of re)for(let a of o.blockers)r(a.x,a.z,a.r);r(rn.x,rn.z,.7),e.phase+=i*e.speed*2.4,e.mesh.position.set(e.pos.x,e.r+Math.abs(Math.sin(e.phase))*.22*Math.min(1,e.speed/2.5),e.pos.z),e.mesh.quaternion.premultiply(wM.setFromAxisAngle(TM,e.speed*i/e.r))}}function RM(){let i=new xe({side:De,depthWrite:!1,fog:!1,uniforms:{uHor:{value:new ot(.028,.03,.038)},uZen:{value:new ot(.002,.0022,.003)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uHor; uniform vec3 uZen; varying vec3 vDir; ${Bi}
      void main(){ float h = clamp(vDir.y, 0.0, 1.0); vec3 c = mix(uHor, uZen, pow(h, 0.45));
        c *= 0.85 + 0.3*(vnoise3(vDir*vec3(3.0,9.0,3.0))*0.5+0.5);
        gl_FragColor = vec4(c, 1.0); }`}),t=new qt(new Ri(900,32,16),i);return Nl.push(t),t}var zu={uTime:{value:0}};function CM(){let i=new ge;i.position.copy(rn);let t=new hn({color:5064771,roughness:1}),e=new co(.11,0);for(let f=0;f<12;f++){let m=f/12*Math.PI*2+ne(-.1,.1),M=ne(.48,.56),p=new qt(e,t);p.position.set(Math.cos(m)*M,.04,Math.sin(m)*M),p.scale.set(ne(.8,1.4),ne(.6,1),ne(.8,1.3)),p.rotation.set(ne(0,3),ne(0,3),ne(0,3)),i.add(p)}let n=new hn({color:2365198,roughness:1,emissive:new ot(.35,.08,.01),emissiveIntensity:.5}),s=new Ai(.045,.06,.75,7);for(let f=0;f<5;f++){let m=new qt(s,n),M=f/5*Math.PI*2;m.position.set(Math.cos(M)*.14,.17,Math.sin(M)*.14),m.rotation.set(0,-M,0),m.rotateZ(1.15),i.add(m)}let r=new xe({transparent:!0,depthWrite:!1,blending:qn,side:Te,uniforms:zu,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv; ${Bi}
      void main(){ vec2 p = vUv;
        float n = vnoise3(vec3(p.x*4.0, p.y*3.0 - uTime*2.4, uTime*0.6))*0.5+0.5;
        float n2 = vnoise3(vec3(p.x*9.0, p.y*7.0 - uTime*3.8, 1.7 + uTime*0.3))*0.5+0.5;
        float w = 1.0 - abs(p.x - 0.5)*2.0;
        float shape = w * w * (1.0 - p.y*0.85);
        float f = smoothstep(0.18, 0.62, shape * (n*0.75 + n2*0.5) * 1.5 - p.y*0.35);
        vec3 col = mix(vec3(1.0,0.22,0.02), vec3(1.0,0.72,0.28), smoothstep(0.3, 0.9, f)) * f * 6.0;
        gl_FragColor = vec4(col, f); }`}),o=new Xn(.62,.95);o.translate(0,.47,0);for(let f=0;f<3;f++){let m=new qt(o,r);m.rotation.y=f/3*Math.PI,m.position.y=.05,i.add(m)}let a=70,c=new Float32Array(a*3),l=new Float32Array(a);for(let f=0;f<a;f++)l[f]=Math.random();let h=new ie;h.setAttribute("position",new Ft(c,3)),h.setAttribute("aSeed",new Ft(l,1));let d=new xe({transparent:!0,depthWrite:!1,blending:qn,uniforms:zu,vertexShader:`uniform float uTime; attribute float aSeed; varying float vA;
      void main(){ float t = fract(uTime*0.35 + aSeed); float a = aSeed*43.0;
        vec3 p = vec3(sin(a + t*3.0)*0.25*t, t*2.4, cos(a*1.7 + t*2.0)*0.25*t);
        vA = (1.0 - t) * step(0.0, t);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 3.0 * (1.0 - t*0.6) * 6.0 / max(1.0, -mv.z); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float m = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0,0.45,0.1)*4.0*vA*m, vA*m); }"}),u=new so(h,d);return u.frustumCulled=!1,i.add(u),i}var PM={uniforms:{tDiffuse:{value:null},uRes:{value:new nt(960,540)},uCount:{value:0},uBrush:{value:1.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},IM={uniforms:{tDiffuse:{value:null},uRes:{value:new nt(960,540)},uCount:{value:0},uExp:{value:.26},uDesat:{value:0},uSeed:{value:1},uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uCount, uExp, uDesat, uSeed, uFade; varying vec2 vUv;
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
      c = pow(c, vec3(1.0/2.2));
      vec2 px = floor(vUv * mix(uRes, uRes*0.5, k));
      float n = hash12(px + uSeed) + hash12(px*1.37 + uSeed*3.1) - 1.0;
      float lum = dot(c, vec3(0.3333));
      c += n * max(mix(0.014, 0.06, k), mix(0.014, 0.05, uDesat)) * (0.45 + 0.9*(1.0 - lum));
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`},Hu=class{init(){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(e.destination);let n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let p=0;p<n;p++)r[p]=Math.random()*2-1;this.noise=s;let o=this.loopNoise(),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.6;let c=e.createGain();c.gain.value=.05,o.connect(a).connect(c).connect(this.master);let l=e.createOscillator(),h=e.createGain();l.frequency.value=.07,h.gain.value=.035,l.connect(h).connect(c.gain),l.start();let d=e.createOscillator(),u=e.createGain();d.frequency.value=.045,u.gain.value=160,d.connect(u).connect(a.frequency),d.start(),this.crickets=e.createGain(),this.crickets.gain.value=1,this.crickets.connect(this.master),this.cricketOn=!0;for(let p=0;p<6;p++)this.cricketLoop(ne(-.9,.9),ne(4e3,5200),ne(.4,2));this.fireP=this.panner(rn.x,.4,rn.z,1.2);let f=this.loopNoise(),m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=260;let M=e.createGain();M.gain.value=.22,f.connect(m).connect(M).connect(this.fireP),this.crackleLoop(),this.breaths=[0,1,2].map(()=>{let p=this.panner(0,1,-4,1),g=this.loopNoise(),_=e.createBiquadFilter();_.type="bandpass",_.frequency.value=520,_.Q.value=.9;let E=e.createGain();return E.gain.value=0,g.connect(_).connect(E).connect(p),{p,g:E}})}loopNoise(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t.loopStart=Math.random(),t.start(0,Math.random()*1.5),t}panner(t,e,n,s){let r=this.ctx.createPanner();return r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=s,r.rolloffFactor=1.3,this.setPos(r,t,e,n),r.connect(this.master),r}setPos(t,e,n,s){t.positionX?(t.positionX.value=e,t.positionY.value=n,t.positionZ.value=s):t.setPosition(e,n,s)}cricketLoop(t,e,n){let s=()=>{if(this.ctx){if(this.cricketOn){let r=this.ctx.currentTime,o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createStereoPanner();o.frequency.value=e,c.pan.value=t,a.gain.value=0;let l=2+Math.floor(Math.random()*3);for(let h=0;h<l;h++){let d=r+h*.055;a.gain.setValueAtTime(0,d),a.gain.linearRampToValueAtTime(.012,d+.012),a.gain.linearRampToValueAtTime(0,d+.04)}o.connect(a).connect(c).connect(this.crickets),o.start(r),o.stop(r+l*.055+.05)}setTimeout(s,ne(350,1300))}};setTimeout(s,n*1e3)}crackleLoop(){let t=()=>{if(!this.ctx)return;let e=this.ctx.currentTime,n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=this.noise,s.type="highpass",s.frequency.value=ne(1200,3500),r.gain.setValueAtTime(ne(.15,.5),e),r.gain.exponentialRampToValueAtTime(.001,e+ne(.02,.07)),n.connect(s).connect(r).connect(this.fireP),n.start(e,Math.random()*1.5,.1),setTimeout(t,Math.random()<.2?ne(20,60):ne(80,420))};t()}step(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();e.buffer=this.noise,n.type="bandpass",n.frequency.value=ne(1800,3200),n.Q.value=.8,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(ne(.05,.08),t+.02),s.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(n).connect(s).connect(this.master),e.start(t,Math.random()*1.5,.2)}silenceCrickets(){if(!this.ctx)return;this.cricketOn=!1;let t=this.ctx.currentTime;this.crickets.gain.cancelScheduledValues(t),this.crickets.gain.setTargetAtTime(0,t,.05)}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.listener;r.positionX?(r.positionX.value=t.x,r.positionY.value=t.y,r.positionZ.value=t.z,r.forwardX.value=e.x,r.forwardY.value=e.y,r.forwardZ.value=e.z,r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(t.x,t.y,t.z),r.setOrientation(e.x,e.y,e.z,0,1,0)),n.map(a=>[a,a.mesh.position.distanceToSquared(t)]).sort((a,c)=>a[1]-c[1]).slice(0,3).forEach(([a],c)=>{let l=this.breaths[c],h=a.headWorld;this.setPos(l.p,h.x,h.y,h.z);let d=Math.sin(s*1.3+a.phase);l.g.gain.value=.05*Math.max(0,d)**3})}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}},ku=class extends Hu{init(){if(super.init(),!this.ctx)return;let t=this.ctx;this.hiss=t.createGain(),this.hiss.gain.value=0;let e=this.loopNoise(),n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.5,e.connect(n).connect(this.hiss).connect(this.master)}burst(t,e,n,s,r,o=.005){if(!this.ctx)return;let a=this.ctx.currentTime,c=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();return c.buffer=this.noise,l.type=t,l.frequency.value=e,l.Q.value=n,h.gain.setValueAtTime(0,a),h.gain.linearRampToValueAtTime(s,a+o),h.gain.exponentialRampToValueAtTime(8e-4,a+r),c.connect(l).connect(h).connect(this.master),c.start(a,Math.random()*1.5,r+.1),{f:l,t:a}}gust(){if(!this.ctx)return;let t=this.burst("bandpass",420,.7,.16,2.4,.7);t&&(t.f.frequency.setValueAtTime(300,t.t),t.f.frequency.linearRampToValueAtTime(820,t.t+1.2),t.f.frequency.linearRampToValueAtTime(380,t.t+2.4))}click(){if(this.burst("highpass",3200,.7,.12,.03),!this.ctx)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.value=1100,n.gain.setValueAtTime(.04,t),n.gain.exponentialRampToValueAtTime(5e-4,t+.04),e.connect(n).connect(this.master),e.start(t),e.stop(t+.05)}puff(){this.burst("lowpass",500,.5,.18,.22,.01)}whoosh(){let t=this.burst("bandpass",400,.9,.22,.7,.05);t&&t.f.frequency.exponentialRampToValueAtTime(1800,t.t+.45)}creak(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth";let o=ne(1300,1700);n.frequency.setValueAtTime(o,e),n.frequency.linearRampToValueAtTime(o*ne(1.1,1.3),e+.09),s.type="bandpass",s.frequency.value=2400,s.Q.value=6,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.012*t,e+.02),r.gain.exponentialRampToValueAtTime(3e-4,e+.12),n.connect(s).connect(r).connect(this.master),n.start(e),n.stop(e+.14)}sputter(){this.burst("highpass",ne(1500,3e3),.8,.05,.04)}tick(t,e,n){if(!this.ctx)return;let s=this.ctx.currentTime+t,r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=this.noise,o.type="bandpass",o.frequency.value=e,o.Q.value=3,a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(n,s+.002),a.gain.exponentialRampToValueAtTime(5e-4,s+.035),r.connect(o).connect(a).connect(this.master),r.start(s,Math.random()*1.5,.05)}cock(){[[0,3800,.05],[.05,3400,.06],[.11,3e3,.07],[.2,2200,.14]].forEach(([t,e,n])=>this.tick(t,e,n))}dry(){this.tick(0,1800,.2),this.tick(.004,4200,.08)}gunshot(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource(),s=t.createBiquadFilter(),r=t.createGain();n.buffer=this.noise,s.type="lowpass",s.frequency.setValueAtTime(9e3,e),s.frequency.exponentialRampToValueAtTime(380,e+.3),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(1,e+.002),r.gain.exponentialRampToValueAtTime(.001,e+.7),n.connect(s).connect(r).connect(this.master),n.start(e,Math.random()*1.5,.8);let o=t.createOscillator(),a=t.createGain();o.frequency.setValueAtTime(120,e),o.frequency.exponentialRampToValueAtTime(36,e+.2),a.gain.setValueAtTime(.8,e),a.gain.exponentialRampToValueAtTime(.001,e+.32),o.connect(a).connect(this.master),o.start(e),o.stop(e+.34);for(let[c,l,h]of[[.42,.2,1700],[.78,.13,1200],[1.25,.085,850],[1.9,.05,600]]){let d=t.createBufferSource(),u=t.createBiquadFilter(),f=t.createGain();d.buffer=this.noise,u.type="lowpass",u.frequency.value=h,f.gain.setValueAtTime(0,e+c),f.gain.linearRampToValueAtTime(l,e+c+.03),f.gain.exponentialRampToValueAtTime(6e-4,e+c+1.1),d.connect(u).connect(f).connect(this.master),d.start(e+c,Math.random()*1.5,1.2)}}thud(t=.5){if(this.burst("lowpass",160,.7,t,.45,.004),!this.ctx)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(30,e+.25),s.gain.setValueAtTime(t*.8,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(s).connect(this.master),n.start(e),n.stop(e+.32)}setHiss(t){this.hiss&&(this.hiss.gain.value=.006*t)}},Je=new ku,Ds=new qi,pi=new Ye(70,16/9,.01,10),Ns=.85,pn=-1,En=new ge;En.scale.setScalar(Ns);Ds.add(En);var Lr=new ge;En.add(Lr);var f0=new R(0,-.248,0),Ho={uTime:{value:0},uLevel:{value:1},uBend:{value:0}};function Yp(i,t,e){let n=new hn({color:i,metalness:t,roughness:e,fog:!1});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { float n = vnoise3(vLP*90.0)*0.5+0.5; float n2 = vnoise3(vLP*21.0)*0.5+0.5;
          float wear = smoothstep(0.62, 0.8, n*0.6 + n2*0.5);
          diffuseColor.rgb = mix(diffuseColor.rgb * (0.8 + 0.35*n2), vec3(0.32,0.2,0.12), smoothstep(0.55, 0.9, n2)*0.35);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55,0.52,0.48), wear*0.5); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*60.0))*0.15, 0.05, 1.0);`)},n}function br(i,t,e=40){let n=new Ki(i.map(([s,r])=>new nt(s,r)),e);return n.computeVertexNormals(),new qt(n,t)}function ul(i,t,e,n=48,s=!1){let r=new lr(i.map(o=>new R(...o)),s);return new qt(new uo(r,n,t,8,s),e)}var Vu,Tr,wr;function LM(){let i=Yp(1907481,.55,.5),t=Yp(11043908,1,.32),e=new hn({color:3810838,roughness:.75,fog:!1});Vu=new oi({color:16773852,roughness:.06,metalness:0,transparent:!0,opacity:.2,depthWrite:!1,side:Te,emissive:new ot(1,.55,.2),emissiveIntensity:0,fog:!1,clearcoat:1,clearcoatRoughness:.05});let n=Lr;n.add(br([[0,-.34],[.066,-.34],[.071,-.336],[.074,-.322],[.072,-.3],[.064,-.285],[.04,-.279],[0,-.278]],i)),n.add(br([[0,-.28],[.03,-.28],[.031,-.27],[.028,-.262],[.012,-.258],[0,-.258]],t,28));let s=new qt(new Ai(.009,.009,.006,16),t);s.rotation.z=Math.PI/2,s.position.set(.04,-.268,0),n.add(s);let r=new qt(new Ai(.0025,.0025,.012,8),t);r.rotation.z=Math.PI/2,r.position.set(.033,-.268,0),n.add(r);let o=br([[.032,-.265],[.05,-.25],[.058,-.222],[.056,-.185],[.046,-.158],[.036,-.142]],Vu,40);o.renderOrder=2,n.add(o),n.add(br([[0,-.143],[.045,-.143],[.047,-.138],[.045,-.131],[0,-.13]],i,32)),n.add(br([[0,-.132],[.06,-.132],[.065,-.122],[.062,-.104],[.05,-.088],[.022,-.08],[.012,-.076],[0,-.075]],i,40)),n.add(br([[0,-.08],[.012,-.08],[.013,-.072],[.008,-.066],[0,-.065]],i,20));for(let M of[-1,1])n.add(ul([[M*.066,-.29],[M*.077,-.25],[M*.078,-.2],[M*.072,-.15],[M*.064,-.118]],.0075,i,32));for(let M=0;M<4;M++){let p=Math.PI/4+M*Math.PI/2,g=Math.cos(p),_=Math.sin(p),E=[[.04,-.262],[.058,-.248],[.064,-.222],[.062,-.185],[.052,-.158],[.042,-.146]];n.add(ul(E.map(([b,v])=>[g*b,v,_*b]),.0016,i,24))}for(let[M,p]of[[-.236,.0635],[-.18,.0605]]){let g=[];for(let _=0;_<24;_++){let E=_/24*Math.PI*2;g.push([Math.cos(E)*p,M,Math.sin(E)*p])}n.add(ul(g,.0017,i,64,!0))}let a=[];for(let M=0;M<=24;M++){let p=M/24*Math.PI;a.push([Math.cos(p)*.064,-.112+Math.sin(p)*.112,0])}n.add(ul(a,.0024,i,48));let c=new qt(new Ai(.0105,.0105,.056,14),e);c.rotation.z=Math.PI/2,n.add(c);let l=new xe({transparent:!0,depthWrite:!1,blending:qn,side:Te,uniforms:Ho,fog:!1,vertexShader:"uniform float uBend; uniform float uTime; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; p.x += uBend * (uv.y*uv.y) * 0.012 + sin(uTime*13.0 + uv.y*6.0)*0.0012*uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:`uniform float uTime; uniform float uLevel; varying vec2 vUv; ${Bi}
      void main(){ vec2 p = vUv - vec2(0.5, 0.0);
        float h = 0.25 + 0.75*uLevel;
        float n = vnoise3(vec3(p.x*6.0, vUv.y*4.0 - uTime*3.0, uTime*0.7))*0.5+0.5;
        float w = (0.5 - abs(p.x)*2.0/max(0.15, 1.0 - vUv.y/h*0.9)) * 2.0;
        float body = smoothstep(0.0, 0.25, w) * smoothstep(h, h*0.55, vUv.y + n*0.12) * smoothstep(0.0, 0.08, vUv.y);
        vec3 col = mix(vec3(1.0,0.35,0.05), vec3(1.0,0.86,0.55), smoothstep(0.2, 0.9, body)) * body * 9.0 * uLevel;
        col += vec3(0.25,0.35,1.0) * smoothstep(0.12, 0.0, vUv.y) * smoothstep(0.0, 0.3, w) * 1.5 * uLevel;
        gl_FragColor = vec4(col, body); }`}),h=new Xn(.02,.05);h.translate(0,.025,0),Tr=new ge;for(let M=0;M<3;M++){let p=new qt(h,l);p.rotation.y=M/3*Math.PI,p.renderOrder=3,Tr.add(p)}Tr.position.set(0,-.258,0),n.add(Tr);let d=document.createElement("canvas");d.width=d.height=64;let u=d.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,"rgba(255,255,255,0.5)"),f.addColorStop(.55,"rgba(255,255,255,0.12)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let m=new Yi({map:new ar(d),color:new ot(1,.55,.2),transparent:!0,blending:qn,depthWrite:!1,opacity:0,fog:!1});wr=new gs(m),wr.scale.set(.1,.1,1),wr.position.copy(f0),wr.renderOrder=4,n.add(wr)}function d0(){let i=new oi({color:16777215,roughness:.62,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new ot(.26,.2,.14),fog:!1});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aAtt; varying vec2 vAtt; varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAtt = aAtt; vLP = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vAtt; varying vec3 vLP;
${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.34, 0.23, 0.135);
          float g1 = vnoise3(vLP*420.0)*0.5+0.5, g2 = vnoise3(vLP*90.0)*0.5+0.5;
          c *= (0.8 + 0.3*g2) * (0.9 + 0.14*g1);
          float dirt = smoothstep(0.55, 0.85, vnoise3(vLP*48.0 + 3.1)*0.5+0.5);
          c = mix(c, c*vec3(0.55, 0.5, 0.46), dirt*0.6);
          c *= mix(1.0, vAtt.x, 0.85);
          diffuseColor.rgb = c; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (vnoise3(vLP*140.0))*0.1, 0.4, 0.85);`)},i}function DM(){let i=new oi({color:16777215,roughness:.95,metalness:0,sheen:1,sheenRoughness:.7,sheenColor:new ot(.075,.07,.068),side:Te,fog:!1});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Bi}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { float ang = atan(position.z, position.x);
          float bunch = 1.0 + 1.3*exp(-max(position.y - 0.02, 0.0)*28.0); // cloth bunches up just behind the hem
          float fold = (0.0024*sin(position.y*85.0 + sin(position.y*21.0)*2.0 + ang*1.5) + 0.0016*vnoise3(position*38.0)) * bunch;
          transformed += normal * fold * smoothstep(0.012, 0.03, position.y); }
        vLP = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;
${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = vec3(0.05, 0.043, 0.038);
          c *= 0.8 + 0.4*(vnoise3(vLP*300.0)*0.5+0.5);
          c *= 0.7 + 0.3*smoothstep(-0.012, 0.004, vLP.y); // the inside of the hem
          diffuseColor.rgb = c; }`)},i}var NM={wristLocal:new R(.0208*pn,.0162,.141),wristAxis:new R(.3384*pn,-.3644,.8676),shoulder:new R(.26*pn,-.3,.02),fore:.26*Ns,upper:.29*Ns,pole:new R(.75*pn,-.65,.1).normalize()},UM={wristLocal:new R(.0277,-.1049,.1348),wristAxis:new R(.2376,-.329,.9137),shoulder:new R(.24,-.31,.04),fore:.26*Ns,upper:.29*Ns,pole:new R(.75,-.65,.1).normalize()},Fi=null,Gu=null;function FM(){Fi=p0(NM,En)}function p0(i,t){let e={P:i,pivot:t,root:new ge,W:new R,E:new R,f:new R,u:new R};Ds.add(e.root);let n=e,s=DM(),r=.26+.03,o=[[.0355,-.0115],[.041,-.0135],[.0448,-.0095],[.0462,-.002],[.0456,.008],[.044,.015]];for(let h=.022;h<=r+1e-6;h+=.007)o.push([.0438+.008*(h/r),h]);let a=new Ki(o.map(([h,d])=>new nt(h,d)),36);a.scale(1.08,1,1),n.fore=new qt(a,s),n.elbow=new qt(new Ri(.051,28,18),s);let c=.29+.18,l=new Ai(.06,.052,c,28,24,!0);l.translate(0,c/2,0),n.up=new qt(l,s);for(let h of[n.fore,n.elbow,n.up])h.scale.setScalar(Ns),n.root.add(h);return e}var Er=new R,Bn=new R,Ar=new R,fn=new R,Rr=new Kt,fl=new _e,Zp=new _e;function Wu(i){let t=i.P,e=i.pivot;i.W.copy(t.wristLocal),e.localToWorld(i.W),Er.subVectors(t.shoulder,i.W);let n=Er.length();Er.divideScalar(n);let s=t.fore,r=t.upper;n=pe(n,Math.abs(s-r)+.001,s+r-.001);let o=(s*s-r*r+n*n)/(2*n),a=Math.sqrt(Math.max(0,s*s-o*o));Bn.copy(t.pole).addScaledVector(Er,-t.pole.dot(Er)).normalize(),i.E.copy(i.W).addScaledVector(Er,o).addScaledVector(Bn,a),i.f.subVectors(i.E,i.W).normalize(),i.u.subVectors(t.shoulder,i.E).normalize()}var Kp=new R;function BM(i,t,e){let n=i.P,s=i.pivot;for(let r=0;r<2;r++)Wu(i),fn.copy(n.wristAxis).transformDirection(s.matrixWorld),fl.setFromUnitVectors(fn,i.f),Zp.identity().slerp(fl,t),s.quaternion.premultiply(Zp),fn.set(1,0,0).applyQuaternion(s.quaternion),Bn.copy(fn).addScaledVector(e,-fn.dot(e)).normalize(),fl.setFromUnitVectors(fn,Bn),s.quaternion.premultiply(fl),s.updateMatrixWorld(!0);Wu(i)}function m0(i){let t=i.P,e=i.pivot;fn.set(1,0,0).transformDirection(e.matrixWorld),Bn.copy(fn).addScaledVector(i.f,-fn.dot(i.f)).normalize(),Ar.crossVectors(Bn,i.f),Rr.makeBasis(Bn,i.f,Ar),i.fore.quaternion.setFromRotationMatrix(Rr),i.fore.position.copy(i.W),i.elbow.position.copy(i.E),fn.copy(Bn).addScaledVector(i.u,-Bn.dot(i.u)).normalize(),Ar.crossVectors(fn,i.u),Rr.makeBasis(fn,i.u,Ar),i.up.quaternion.setFromRotationMatrix(Rr),i.up.position.copy(i.E)}function Xu(i,t){let e=atob(i.data),n=new Uint8Array(e.length);for(let p=0;p<e.length;p++)n[p]=e.charCodeAt(p);let s=n.buffer,r=i.vc,o=i.ic,a=0,c;i.i32&&(c=new Uint32Array(s,a,o),a+=o*4);let l=new Int16Array(s,a,r*3);a+=r*6,i.i32||(c=new Uint16Array(s,a,o),a+=o*2);let h=new Int8Array(s,a,r*3);a+=r*3;let d=new Uint8Array(s,a,r*2),u=new Float32Array(r*3);for(let p=0;p<r*3;p++)u[p]=l[p]*i.ps;let f=new Int8Array(h),m=i.i32?new Uint32Array(c):new Uint16Array(c);if(t){for(let p=0;p<r;p++)u[3*p]=-u[3*p],f[3*p]=-f[3*p];for(let p=0;p<m.length;p+=3){let g=m[p+1];m[p+1]=m[p+2],m[p+2]=g}}let M=new ie;return M.setAttribute("position",new Ft(u,3)),M.setAttribute("normal",new Ft(f,3,!0)),M.setAttribute("aAtt",new Ft(new Uint8Array(d),2,!0)),M.setIndex(new Ft(m,1)),M.computeBoundingSphere(),M}async function OM(){let i=await(await fetch("hand.json")).json();En.add(new qt(Xu(i,pn<0),d0()))}var sn=new ge;sn.scale.setScalar(Ns);var de={t:0,kick:9,thumb:0,aim:0,shots:0,reload:0},Al=null,we=null,Cr=null,fi=null,Rl=null,qo=null,g0=[],Yo=-.2311,Oo=Up(()=>Je.ctx||null,()=>Je.master),Fl={click:(i,t)=>Oo.click(i,t),shot:()=>YM(),dry:()=>Je.dry(),slide:()=>Oo.slide(),drop:()=>Oo.drop(wu),insert:()=>Oo.insert()},zM=new R(.02,-.12,-.28),HM=new _e().setFromRotationMatrix((()=>{let i=new R(0,.97,.25).normalize(),t=new R(.8,-.1,.6);return t.addScaledVector(i,-t.dot(i)).normalize(),new Kt().makeBasis(i,new R().crossVectors(t,i),t)})()),ko={yaw:.5,roll:.18,aimD:5},x0=new R(.14,-.11,-.29),Jp=new Kt,di=new R,kM=new _e,VM=new R(0,1,0);function v0(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);if(n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),i){e.globalCompositeOperation="lighter",e.fillStyle="rgba(255,255,255,0.5)";for(let s=0;s<7;s++)e.save(),e.translate(64,64),e.rotate(s/7*Math.PI*2+Math.random()*.4),e.beginPath(),e.moveTo(0,-5),e.lineTo(60,0),e.lineTo(0,5),e.fill(),e.restore()}return new ar(t)}function GM(){Ds.add(sn),fi=new gs(new Yi({map:v0(!0),color:new ot(1,.8,.5),blending:qn,transparent:!0,depthWrite:!1,fog:!1})),fi.position.set(0,0,Yo-.035),fi.scale.setScalar(.16),fi.visible=!1,fi.renderOrder=5,sn.add(fi),Rl=new ai(new ot(1,.75,.45),0,2.5,2),Ds.add(Rl),qo=new ai(new ot(1,.8,.55),0,45,1.5),We.add(qo),Gu=p0(UM,sn)}async function WM(){let[i,t,e]=await Promise.all([...["gunhand.json","gunthumb.json"].map(async o=>(await fetch(o)).json()),Ip("revolver/colt75.json")]);we=e,sn.add(we.group),Yo=we.muzzle.z,fi.position.z=Yo-.035;let n=Pp(zn,["night"]).night,s=new Set;we.group.traverse(o=>{o.material&&s.add(o.material)});for(let o of s)o.envMap=n,o.needsUpdate=!0;g0=[...s];let r=d0();sn.add(new qt(Xu(i,!1),r)),Cr=new ge,Cr.position.fromArray(t.origin),sn.add(Cr),Cr.add(new qt(Xu(t,!1),r))}function Bl(){gi&&dn&&we&&bu(we,Fl)&&(de.t=0)}function ef(){gi&&dn&&we&&we.state.cocked&&Dp(we,Fl)&&(de.t=0)}function nf(){gi&&dn&&we&&Mu(we,Fl)&&(de.t=0)}var XM=i=>i<.025?i/.025:Math.exp(-(i-.025)/.11)*(1+.15*Math.sin((i-.025)*30)*Math.exp(-(i-.025)/.05));function qM(i,t){if(!we)return;de.t+=i,de.kick+=i,Np(we,i,Fl);let e=we.state.anim,n=e?.type==="cock";de.thumb=ye(de.thumb,n&&e.t<.27?1:0,n?22:9,i),de.aim=ye(de.aim,!e&&!we.state.cocked&&de.t>2.5?0:1,4,i),de.reload=ye(de.reload,e?.type==="reload"?1:0,6,i);for(let a of g0)a.envMapIntensity=.12+.88*Cl.intensity;Cr&&Cr.rotation.set(.55*de.thumb,-.25*de.thumb,.35*de.thumb);let s=XM(de.kick),r=tf.copy(x0);if(r.y+=.02*de.aim-.012*(1-de.aim)+.014*s,r.z+=.04*s,r.x-=is*.45,r.y+=Xo*.45,r.x+=Math.sin(t*.31+1)*.0012+Math.sin(t*9.7)*Math.sin(t*5.3)*5e-4,r.y+=Math.sin(t*.27+2)*.0012+Math.sin(t*1.3)*8e-4,di.set(0,-.7*(1-de.aim),-ko.aimD),Jp.lookAt(r,di,VM),sn.quaternion.setFromRotationMatrix(Jp),sn.quaternion.multiply(kM.setFromEuler(u1.set(.42*s-Xo*.6,ko.yaw+is*.5,ko.roll-is*.4))),sn.position.copy(r),de.reload>.001){let a=de.reload*de.reload*(3-2*de.reload);sn.position.lerp(zM,a),sn.quaternion.slerp(HM,a)}sn.updateMatrixWorld(!0),Wu(Gu),m0(Gu);let o=Math.max(0,1-de.kick/.06);fi.visible=o>0,fi.material.rotation=de.shots*1.7,fi.scale.setScalar(.12+.08*o),di.set(0,0,Yo-.04),sn.localToWorld(di),Rl.position.copy(di),Rl.intensity=30*o,qo.position.copy(di).applyQuaternion(Gt.quaternion).add(Gt.position),qo.intensity=140*o*o}var No=new R,ns=new R,zo=new R;function $p(i,t,e,n){let s=i.x-e.x,r=i.y-e.y,o=i.z-e.z,a=s*t.x+r*t.y+o*t.z,c=s*s+r*r+o*o-n*n,l=a*a-c;if(l<0)return 1/0;let h=-a-Math.sqrt(l);return h>0?h:1/0}function YM(){de.kick=0,de.shots++,Oo.bang(Eu),No.copy(Gt.position),ns.copy(Ir).add(zo.set((Math.random()-.5)*.012,(Math.random()-.5)*.012,(Math.random()-.5)*.012)).normalize();let i=1/0,t=null;for(let n of re){if(n.dead)continue;for(let r of n.blockers){let o=$p(No,ns,zo.set(r.x,.95*n.s,r.z),.43*n.s);o<i&&(i=o,t=n)}let s=$p(No,ns,zo.set(n.headWorld.x,n.headWorld.y,n.headWorld.z),.24*n.s);s<i&&(i=s,t=n)}let e=ns.y<-.001?-No.y/ns.y:1/0;t&&i<e&&i<80?KM(t,ns):e<70&&Yu(zo.copy(No).addScaledVector(ns,e),.6,[.16,.13,.1]),di.set(0,0,Yo-.06),sn.localToWorld(di),di.applyQuaternion(Gt.quaternion).add(Gt.position);for(let n=0;n<4;n++)Yu(di,1.3,[.55,.54,.52],ns);for(let n of re)if(!n.dead){let s=Math.hypot(n.mesh.position.x-yt.pos.x,n.mesh.position.z-yt.pos.z);n.startle=Math.max(n.startle||0,pe(1.3-s/30,.3,1))}}var qu=[],Pu=null;function Yu(i,t,e,n){Pu||(Pu=v0(!1));let s=qu.find(r=>r.life<=0);s||(s={sp:new gs(new Yi({map:Pu,transparent:!0,depthWrite:!1})),life:0},We.add(s.sp),qu.push(s)),s.life=s.max=t>1?ne(1.8,2.6):.7,s.size=t,s.col=e,s.sp.position.copy(i),s.v=new R((Math.random()-.5)*.4,.25+Math.random()*.2,(Math.random()-.5)*.4),n&&s.v.addScaledVector(n,1.5+Math.random()),s.sp.visible=!0}function ZM(i){for(let t of qu){if(t.life<=0)continue;t.life-=i;let e=1-t.life/t.max;t.sp.position.addScaledVector(t.v,i),t.v.multiplyScalar(Math.exp(-i*1.6)),t.sp.scale.setScalar(t.size*(.25+.9*Math.sqrt(e)));let n=.04+.35*st.level+qo.intensity*.004;t.sp.material.color.setRGB(t.col[0]*n,t.col[1]*n,t.col[2]*n),t.sp.material.opacity=.55*(1-e),t.sp.visible=t.life>0}}function KM(i,t){i.dead=!0,i.deadT=0,i.staring=!1,i.speed=0;let e=Math.cos(i.heading),n=-Math.sin(i.heading);i.fallSide=t.x*e+t.z*n>=0?1:-1,i.mesh.rotation.order="YZX",Je.thud(.25)}function JM(i,t){i.deadT+=t;let e=i.deadT,n=Ui(pe(e/.35,0,1)),s=pe((e-.3)/.75,0,1),r=s*s;i.mesh.rotation.y=i.heading,i.mesh.rotation.x=.1*n*(1-s),i.mesh.rotation.z=-i.fallSide*1.45*r,i.mesh.position.y=-.12*i.s*n*(1-s)+.2*i.s*r,!i.thudded&&s>=1&&(i.thudded=!0,Je.thud(.6),Yu(i.mesh.localToWorld(zo.set(0,1,0)),.9,[.2,.17,.13]));let o=i.mesh.material.userData.own;o.uPose.value.set(.2*i.fallSide,-.5*n,.1,-.4*n),o.uTail.value=0,o.uGait.value.set(0,0,0,0),i.mesh.updateMatrixWorld();let a=.9*i.s*r,c=Math.cos(i.heading)*i.fallSide*a,l=-Math.sin(i.heading)*i.fallSide*a;i.blk0||(i.blk0=i.blockers.map(h=>[h.x,h.z])),i.blockers.forEach((h,d)=>{h.x=i.blk0[d][0]+c,h.z=i.blk0[d][1]+l}),i.headWorld.set(0,1,1.3).applyMatrix4(i.mesh.matrixWorld)}var Cl=new ai(new ot(1,.7,.38),1,1.5,2),Zu=new ai(new ot(1,.52,.2),9,0,2),El=new ur(1712176,525828,.12);Ds.add(Cl,Zu,El);var Ku=RM(),$M=SM();We.add(Ku,yM(),$M);We.add(CM());var _0=9.5,Ls=new ai(new ot(1,.82,.6),_0,40,1.4),Pl=new ai(new ot(1,.52,.2),9,7.5,2);Pl.position.copy(rn).add(new R(0,.5,0));var sf=new go(new ot(.55,.62,.8),.05);sf.position.set(-20,25,-45);var y0=new ur(790552,262914,.05);We.add(sf,y0);We.add(Ls,Pl);EM(We);var Oi=new sl(zn);Oi.addPass(new Io(We,Gt));var rf=new Io(Ds,pi);rf.clear=!1;rf.clearDepth=!0;Oi.addPass(rf);var of=new ws(PM),QM=new Ts(new nt(960,540),.55,.3,2.2),jM=new Ts(new nt(960,540),.025,1,0),$n=new ws(IM);Oi.addPass(of);Oi.addPass(QM);Oi.addPass(jM);Oi.addPass($n);var Ju=540;function af(){let i=innerWidth,t=innerHeight,e=Math.min(window.devicePixelRatio||1,Ju/Math.min(i,t));zn.setPixelRatio(e),zn.setSize(i,t),Oi.setPixelRatio(e),Oi.setSize(i,t);let n=i/t;Gt.aspect=n,pi.aspect=n,Gt.fov=n>=1.3?60:Math.min(88,Li.radToDeg(2*Math.atan(Math.tan(Li.degToRad(40))/n))),pi.fov=n>=1.3?70:Math.min(95,Li.radToDeg(2*Math.atan(Math.tan(Li.degToRad(46))/n))),Gt.updateProjectionMatrix(),pi.updateProjectionMatrix(),$n.uniforms.uRes.value.set(Math.round(i*e),Math.round(t*e)),of.uniforms.uRes.value.copy($n.uniforms.uRes.value),On&&On.setPixel(Gt,$n.uniforms.uRes.value.y),document.body.classList.toggle("portrait",i<t)}addEventListener("resize",af);af();var yt={pos:dn?new R(-.35,0,.75):new R(.2,0,.9),vel:new R,yaw:0,pitch:-.05,bob:0,stepPhase:0},un=new Set,gi=!1,Pr=!1,Dr=mi,Be={id:null,cx:0,cy:0,x:0,y:0},Qn={id:null,x:0,y:0};function cf(){if(!mi)try{let i=ss.requestPointerLock&&ss.requestPointerLock();i&&i.catch&&i.catch(()=>{Dr=!0})}catch{Dr=!0}}document.addEventListener("pointerlockchange",()=>{Pr=document.pointerLockElement===ss,Pr&&(Dr=!1),Jt.resume.classList.toggle("show",gi&&!mi&&!Pr&&!Dr&&!uf)});document.addEventListener("pointerlockerror",()=>{Dr=!0});document.addEventListener("mousemove",i=>{Pr&&(yt.yaw-=i.movementX*.0022,yt.pitch-=i.movementY*.0022,yt.pitch=pe(yt.pitch,-1.2,1.1))});ss.addEventListener("pointerdown",i=>{if(gi){if(!mi&&!Pr&&!Dr){cf();return}mi&&!dn&&i.clientX<innerWidth*.45&&Be.id===null?(Be.id=i.pointerId,Be.cx=i.clientX,Be.cy=i.clientY,Be.x=Be.y=0,Jt.joy.style.left=`${Be.cx}px`,Jt.joy.style.top=`${Be.cy}px`,Jt.joy.classList.add("show"),Jt.knob.style.transform="translate(-50%,-50%)"):Qn.id===null&&(Qn.id=i.pointerId,Qn.x=i.clientX,Qn.y=i.clientY);try{ss.setPointerCapture(i.pointerId)}catch{}}});ss.addEventListener("pointermove",i=>{if(i.pointerId===Be.id){let t=i.clientX-Be.cx,e=i.clientY-Be.cy,n=Math.hypot(t,e),s=56;n>s&&(t*=s/n,e*=s/n),Be.x=t/s,Be.y=e/s,Jt.knob.style.transform=`translate(calc(-50% + ${t}px), calc(-50% + ${e}px))`}else if(i.pointerId===Qn.id){let t=mi?.0052:.0042;yt.yaw-=(i.clientX-Qn.x)*t,yt.pitch-=(i.clientY-Qn.y)*t,yt.pitch=pe(yt.pitch,-1.2,1.1),Qn.x=i.clientX,Qn.y=i.clientY}});var M0=i=>{i.pointerId===Be.id&&(Be.id=null,Be.x=Be.y=0,Jt.joy.classList.remove("show")),i.pointerId===Qn.id&&(Qn.id=null)};ss.addEventListener("pointerup",M0);ss.addEventListener("pointercancel",M0);addEventListener("keydown",i=>{if(gi){if(i.code==="KeyF"){i.repeat||Il();return}if(i.code==="Space"){Ol=!0,i.preventDefault();return}if(dn&&i.code==="KeyE"&&!i.repeat){Bl();return}if(dn&&i.code==="KeyR"&&!i.repeat){nf();return}un.add(i.code),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault()}});addEventListener("keyup",i=>{un.delete(i.code),i.code==="Space"&&(Ol=!1)});addEventListener("blur",()=>un.clear());var re=[];function t1(i){let e=(n,s,r)=>{let o=i.x-n,a=i.z-s,c=Math.hypot(o,a),l=r+.25;c<l&&c>1e-5&&(i.x=n+o/c*l,i.z=s+a/c*l)};for(let n=0;n<3;n++){e(rn.x,rn.z,.62);for(let s of Do){let r=Lo.uPC.value;e(s.x+Math.round((r.x-s.x)/fe)*fe,s.z+Math.round((r.y-s.z)/fe)*fe,s.r)}for(let s of re){for(let r of s.blockers)e(r.x,r.z,r.r);e(s.headWorld.x,s.headWorld.z,.24*s.s)}}}var Uo=new R;function Qp(i,t){Uo.copy(t),i.mesh.worldToLocal(Uo);let e=Uo.x,n=Uo.y-1.16,s=Uo.z-.98;return[pe(Math.atan2(e,s),-1.35,1.35),pe(Math.atan2(n,Math.hypot(e,s)),-.6,.5)]}function S0(i,t,e){if(i.dead){JM(i,t);return}let n=i.ai;if(i.staring){let[o,a]=Qp(i,Gt.position);n.yaw=ye(n.yaw,o,7,t),n.pitch=ye(n.pitch,a,7,t)}else if(i.alarm>.05){let[o]=Qp(i,Gt.position),a=i.turnLead||0;n.yaw=ye(n.yaw,Math.abs(a)>.15?a:pe(o,-.6,.6),3,t),n.pitch=ye(n.pitch,-.08,3,t),n.t=Math.min(n.t,1.5)}else(i.stir||0)>.15||(i.speed||0)>.25?(n.yaw=ye(n.yaw,i.turnLead||0,3,t),n.pitch=ye(n.pitch,(i.speed||0)>.25?-.2:-.06,2.5,t),n.t=Math.min(n.t,1.5)):(n.t-=t,n.t<=0&&(Math.random()<.45?(n.tYaw=ne(-.35,.35),n.tPitch=-1.05,n.t=ne(4,9)):(n.tYaw=ne(-.8,.8),n.tPitch=ne(-.2,.12),n.t=ne(2.5,6))),n.yaw=ye(n.yaw,n.tYaw,1.4,t),n.pitch=ye(n.pitch,n.tPitch,1.1,t));let s=i.mesh.material.userData.own,r=(i.gait||0)*.07*Math.sin((i.gaitPhase||0)*Math.PI*4);s.uPose.value.set(n.yaw*.45,n.pitch*.4+r,n.yaw*.55,n.pitch*.6+r*.5),n.flick=Math.max(0,n.flick-t*1.8),Math.random()<t*.12&&(n.flick=1),s.uTail.value=.1*Math.sin(e*1.1+i.phase)+.5*n.flick*Math.sin(e*9+i.phase),i.headWorld.set(Math.sin(n.yaw)*.75,1,.58+Math.cos(n.yaw)*.75).applyMatrix4(i.mesh.matrixWorld)}var Vo=1,Iu=new R;function e1(i){let t=99;Ir.y<-.05&&(t=Gt.position.y/-Ir.y);for(let n of re)for(let s of n.blockers){Iu.set(s.x,1*n.s,s.z).sub(Gt.position);let r=Iu.length();Math.acos(pe(Iu.dot(Ir)/r,-1,1))<.7&&(t=Math.min(t,Math.max(.3,r-s.r)))}let e=pe(Math.pow(t/2.4,1.2),.3,1);Vo=ye(Vo,e,e<Vo?6:2.5,i)}var st={on:!0,level:1,oil:1,mode:"on",t:0,gustT:-1,gustTimer:ne(35,70),sputter:0},Ol=!1,lf=!1,hf=!1,Go=0,dl=0,uf=!1,Wo=0,wl=0;function n1(i,t=2.6){Jt.sub.textContent=i,Jt.sub.classList.add("show"),wl=t}function b0(){return Math.hypot(yt.pos.x-rn.x,yt.pos.z-rn.z)<dM}function $u(i){st.mode==="off"||st.mode==="dying"||(st.mode="dying",st.t=0,st.cause=i,i!=="hand"&&Je.puff())}function Il(){if(gi){if(st.mode==="on"){st.mode="turning",st.t=0,Je.click();return}st.mode==="off"&&(b0()?(st.mode="relight",st.t=0):n1("\uBAA8\uB2E5\uBD88\uC5D0\uC11C\uB9CC \uB2E4\uC2DC \uCF24 \uC218 \uC788\uC5B4\uC694"))}}function i1(i){if(st.t+=i,st.mode==="on"){st.oil=Math.max(0,st.oil-i/fM);let e=st.oil>.2?1:.35+.65*(st.oil/.2);st.oil<.12&&Math.random()<i*3&&(st.sputter=1,Je.sputter()),st.sputter=Math.max(0,st.sputter-i*5),e*=1-.5*st.sputter,st.gustT>=0&&(e*=.55+.45*Math.abs(Math.sin(st.gustT*23)*Math.sin(st.gustT*7))),st.level=ye(st.level,e,18,i),st.oil<=0&&$u("oil")}else if(st.mode==="turning")st.level=Math.max(0,1-st.t/.6),st.t>=.6&&(st.mode="off",st.level=0,Je.puff());else if(st.mode==="dying"){let t=st.cause==="oil"?1.6:.5;st.level=Math.max(0,(1-st.t/t)*(Math.random()<.5?1:.3)),st.t>=t&&(st.mode="off",st.level=0)}else st.mode==="relight"&&(st.t>=1.05&&st.t-i<1.05&&(Je.whoosh(),st.oil=1),st.level=st.t<1.05?0:Math.min(1,(st.t-1.05)/.7),st.t>=2.2&&(st.mode="on",st.level=1));st.gustTimer-=i,st.gustTimer<=0&&st.gustT<0&&(st.gustT=0,st.gustTimer=ne(45,110),Je.gust()),st.gustT>=0&&(st.gustT+=i,st.gustT>2.3&&(st.gustT=-1,st.mode==="on"&&Math.random()<.5&&$u("wind"))),Ho.uLevel.value=st.level,Ho.uBend.value=ye(Ho.uBend.value,st.gustT>=0?Math.sin(st.gustT*9)*1.6+1.2:0,8,i)}function s1(){let i=st.mode==="off",t=i&&b0();Jt.prompt.textContent=t?mi?"\uBAA8\uB2E5\uBD88\uC5D0\uC11C \uBD88 \uBD99\uC774\uAE30":"F  \uBAA8\uB2E5\uBD88\uC5D0\uC11C \uBD88 \uBD99\uC774\uAE30":"",Jt.prompt.classList.toggle("show",t);let e=st.mode==="on"?"\uB79C\uD134 \uB044\uAE30":t?"\uBD88 \uBD99\uC774\uAE30":st.mode==="relight"?"\uBD88 \uBD99\uC774\uB294 \uC911":"\uB79C\uD134 \uAEBC\uC9D0",n=Jt.lampBtn.querySelector("span");n.textContent!==e&&(n.textContent=e),Jt.lampBtn.classList.toggle("dim",i&&!t)}Jt.lampBtn&&Jt.lampBtn.addEventListener("click",i=>{i.stopPropagation(),Il()});var r1=i=>{i.preventDefault(),i.stopPropagation(),hf=!0},Lu=i=>{i.stopPropagation(),hf=!1};for(let[i,t]of[[Jt.cockBtn,Bl],[Jt.fireBtn,ef],[Jt.reloadBtn,nf]])i&&i.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault(),t()});Jt.raiseBtn&&(Jt.raiseBtn.addEventListener("pointerdown",r1),Jt.raiseBtn.addEventListener("pointerup",Lu),Jt.raiseBtn.addEventListener("pointercancel",Lu),Jt.raiseBtn.addEventListener("pointerleave",Lu));document.addEventListener("mousedown",i=>{if(gi){if(dn){i.button===2?Bl():i.button===0&&Pr&&ef();return}i.button===2&&(lf=!0)}});document.addEventListener("mouseup",i=>{i.button===2&&(lf=!1)});document.addEventListener("contextmenu",i=>i.preventDefault());var E0=0,jp=0,o1=-1;var a1=1/0,rw=new R,ow=new R,aw=new R,cw=new R,lw=new R,hw=new R;function c1(i){let t=i.distanceTo(Ls.position);return Ls.intensity/Math.pow(Math.sqrt(t*t+.81),1.4)}var pl={p:new R(.2*pn,-.07,-.37),r:new en(.1,.55*pn,0)},ml={p:new R(.19*pn,.08,-.43),r:new en(.25,.4*pn,0)},gl={p:new R(.02*pn,-.2,-.5),r:new en(-.2,.5*pn,.25*pn)},Nt={pivot:new R,bob:new R,prev:new R,init:!1,lastRX:0,lastRZ:0,lastDVX:0,lastDVZ:0,peak:0,lastCreak:0},xl=.17,Jn=new R,Du=new R,Fo=new R,l1=new _e,t0=new R;function e0(i,t,e,n,s){let r=i.x+t.x-e,o=i.z+t.z-n,a=Math.hypot(r,o);a<s&&a>1e-5&&(t.x+=r/a*(s-a),t.z+=o/a*(s-a))}function Qu(i,t,e){for(let n of re){if(i.y<1.55*n.s)for(let s of n.blockers)e0(i,e,s.x,s.z,s.r+t);i.y<1.7*n.s&&e0(i,e,n.headWorld.x,n.headWorld.z,.26*n.s+t)}}function h1(i,t){Du.copy(i).applyQuaternion(Gt.quaternion).add(Gt.position),Fo.copy(Du),Fo.y-=.17,Jn.set(0,0,0);for(let e=0;e<3;e++)Qu(Fo,.09,Jn),Qu(Du,.05,Jn);Fo.set(Jn.x,0,Jn.z).applyQuaternion(l1.copy(Gt.quaternion).invert()),t0.lerp(Fo,1-Math.exp(-14*t)),i.add(t0),i.z>-.17&&(i.y-=(i.z+.17)*.8,i.z=-.17)}var is=0,Xo=0,n0=0,i0=0,u1=new en,ju=new _e,s0=new _e,Nu=new _e,tf=new R,Ps=new R,uw=new R(0,-1,0);function f1(i,t,e,n){let s=(Ol||lf||hf)&&st.mode!=="relight";Go=c0(Go,s?1:0,i/.35),dl=s?dl+i:Math.max(0,dl-i*2);let r=Ui(Go),o=tf.copy(pl.p).lerp(ml.p,r),a=Un(pl.r.x,ml.r.x,r),c=Un(pl.r.y,ml.r.y,r),l=Un(pl.r.z,ml.r.z,r);if(st.mode==="relight"){let y=st.t<.6?Ui(st.t/.6):st.t<1.6?1:Ui(Math.max(0,1-(st.t-1.6)/.6));o.lerp(gl.p,y),a=Un(a,gl.r.x,y),c=Un(c,gl.r.y,y),l=Un(l,gl.r.z,y)}st.mode==="turning"&&(l+=Math.sin(Math.min(1,st.t/.6)*Math.PI)*.12*pn);let h=(yt.yaw-n0)/Math.max(i,.001),d=(yt.pitch-i0)/Math.max(i,.001);n0=yt.yaw,i0=yt.pitch,is=ye(is,pe(-h*.035,-.09,.09),9,i),Xo=ye(Xo,pe(-d*.03,-.07,.07),9,i),o.x-=is*.6,o.y+=Xo*.6,l-=is*1.2*pn,c+=is*.6*pn,o.x+=Math.cos(yt.stepPhase)*.009*n,o.y+=Math.abs(Math.sin(yt.stepPhase))*.012*n-.006*n;let u=1+Math.min(2.2,dl/3),f=7e-4*u,m=.0018*(.6+.4*u);o.x+=Math.sin(t*9.3)*Math.sin(t*6.1+1.3)*f+Math.sin(t*.37+2.1)*m,o.y+=Math.sin(t*10.7+.5)*Math.sin(t*4.3)*f+Math.sin(t*.29)*m,l+=Math.sin(t*8.1)*.003*u,h1(o,i),En.position.copy(o),En.rotation.set(a,c,l),En.updateMatrixWorld(!0),Fi&&Fi.fore&&(Kp.set(0,1,0).applyQuaternion(ju.copy(Gt.quaternion).invert()),BM(Fi,.7,Kp),m0(Fi)),Nu.copy(Gt.quaternion),Nt.pivot.copy(En.position).applyQuaternion(Nu).add(Gt.position),Nt.init||(Nt.bob.copy(Nt.pivot).add(Ps.set(0,-xl,0)),Nt.prev.copy(Nt.bob),Nt.init=!0);let M=Math.max(1,Math.ceil(i/(1/120))),p=i/M;for(let y=0;y<M;y++){let x=(Nt.bob.x-Nt.prev.x)*(1-1.6*p),S=(Nt.bob.y-Nt.prev.y)*(1-1.6*p),C=(Nt.bob.z-Nt.prev.z)*(1-1.6*p);Nt.prev.copy(Nt.bob),Nt.bob.x+=x,Nt.bob.y+=S-9.8*p*p,Nt.bob.z+=C,Ps.copy(Nt.bob).sub(Nt.pivot).setLength(xl),Nt.bob.copy(Nt.pivot).add(Ps),Jn.set(0,0,0),Qu(Nt.bob,.085,Jn),(Jn.x||Jn.z)&&(Nt.bob.x+=Jn.x,Nt.bob.z+=Jn.z,Ps.copy(Nt.bob).sub(Nt.pivot).setLength(xl),Nt.bob.copy(Nt.pivot).add(Ps))}Ps.copy(Nt.bob).sub(Nt.pivot).normalize().applyQuaternion(ju.copy(Nu).invert());let g=tf.copy(Ps).negate();fn.set(1,0,0).applyQuaternion(En.quaternion),Bn.copy(fn).addScaledVector(g,-fn.dot(g)).normalize(),Ar.crossVectors(Bn,g),Rr.makeBasis(Bn,g,Ar),s0.setFromRotationMatrix(Rr),Lr.quaternion.copy(En.quaternion).invert().multiply(s0);let _=Nt.bob.x-Nt.pivot.x,E=Nt.bob.z-Nt.pivot.z,b=_-Nt.lastRX,v=E-Nt.lastRZ;Nt.peak=Math.max(Nt.peak*Math.exp(-i*1.5),Math.hypot(_,E)/xl),b*Nt.lastDVX+v*Nt.lastDVZ<0&&Nt.peak>.16&&t-Nt.lastCreak>.3&&(Math.random()<.7&&Je.creak(Math.min(1,Nt.peak*2.5)),Nt.lastCreak=t),Nt.lastRX=_,Nt.lastRZ=E,Nt.lastDVX=b,Nt.lastDVZ=v}function w0(i){let t=0,e=0;(un.has("KeyD")||un.has("ArrowRight"))&&(t+=1),(un.has("KeyA")||un.has("ArrowLeft"))&&(t-=1),(un.has("KeyW")||un.has("ArrowUp"))&&(e+=1),(un.has("KeyS")||un.has("ArrowDown"))&&(e-=1),t+=Be.x,e-=Be.y,dn&&(t=0,e=0);let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),st.mode==="relight"&&(t*=.2,e*=.2),uf&&(t=e=0);let s=Math.sin(yt.yaw),r=Math.cos(yt.yaw),o=(t*r-e*s)*1.5,a=(-t*s-e*r)*1.5;yt.vel.x=ye(yt.vel.x,o,8,i),yt.vel.z=ye(yt.vel.z,a,8,i),yt.pos.x+=yt.vel.x*i,yt.pos.z+=yt.vel.z*i,t1(yt.pos);let c=Math.hypot(yt.vel.x,yt.vel.z),l=yt.stepPhase;yt.stepPhase+=i*c*4.4,Math.floor(l/Math.PI)!==Math.floor(yt.stepPhase/Math.PI)&&c>.3&&Je.step();let h=pe(c/1.5,0,1);return Gt.position.set(yt.pos.x+Math.cos(yt.stepPhase)*.012*h*r,l0+Math.abs(Math.sin(yt.stepPhase))*.025*h,yt.pos.z-Math.cos(yt.stepPhase)*.012*h*s),_M(Gt.position.x,Gt.position.z),Gt.rotation.set(yt.pitch,yt.yaw,0),Gt.updateMatrixWorld(!0),Gt.getWorldDirection(Ir),c}var r0=1e3/60,Tl=0,Ll=performance.now(),vl=0,Uu=0,_l=0,Fu=!1,Ir=new R,fw=new R,yl=new R,Ml=new R,Sl={fogC:new ot(.062,.064,.073),fogD:.05,zen:new ot(.0065,.007,.0088)},bl={fogC:new ot(.0035,.004,.0055),fogD:.009,hor:new ot(.028,.03,.038),zen:new ot(.002,.0022,.003)};function ff(i){if(document.hidden||requestAnimationFrame(ff),i<Tl-1)return;Tl=Math.max(Tl+r0,i+r0*.6);let t=Math.min(.1,(i-Ll)/1e3);Ll=i;let e=i/1e3;Fu&&(Fu=!1,af()),Bo.uTime.value=e,zu.uTime.value=e,Ho.uTime.value=e;let n=w0(t);bM(t,st.gustT>=0);let s=pe(n/1.5,0,1);if(i1(t),AM(t,st.gustT>=0),f1(t,e,n,s),dn&&we&&qM(t,e),Al){let d=Al,u=sn.position;pi.position.set(u.x+Math.sin(d.yaw)*Math.cos(d.pitch)*d.dist,u.y+Math.sin(d.pitch)*d.dist,u.z+Math.cos(d.yaw)*Math.cos(d.pitch)*d.dist),pi.lookAt(u.x,u.y-.04,u.z),pi.updateMatrixWorld(!0)}Lr.updateMatrixWorld(!0),yl.copy(f0),Lr.localToWorld(yl);let r=st.level*(1+.04*Math.sin(e*11)*Math.sin(e*17.3+1.1)+.02*Math.sin(e*31));Cl.position.copy(yl),Cl.intensity=1*r,Ls.position.copy(yl).applyQuaternion(Gt.quaternion).add(Gt.position),Ls.intensity=_0*r*(1+.5*Ui(Go)),Bo.uLanternPos.value.copy(Ls.position),Vu.emissiveIntensity=.16*r,wr.material.opacity=.5*r,Tr.visible=st.level>.01,Tr.scale.setScalar(.6+.4*st.level),Je.setHiss(st.level),Ml.copy(Pl.position).sub(Gt.position).applyQuaternion(ju.copy(Gt.quaternion).invert()),Zu.position.copy(Ml);let o=9*(1+.14*Math.sin(e*7.7)*Math.sin(e*2.3+1.1)+.06*Math.sin(e*23)),a=Ui(pe((Ml.z/Math.max(Ml.length(),.001)+.2)/.8,0,1));Pl.intensity=o,Zu.intensity=o*Un(1,.22,a),Wo=c0(Wo,st.level<.05?1:0,t/(st.level<.05?2.6:.7));let c=Ui(Wo),l=Math.hypot(Gt.position.x-rn.x,Gt.position.z-rn.z),h=Un(.42,.9,Ui(pe((l-2.5)/4.5,0,1)));e1(t),$n.uniforms.uExp.value=Un(.26,h,c)*Vo,$n.uniforms.uDesat.value=c*.75*Ui(pe((h-.42)/.48,0,1)),We.fog.color.copy(bl.fogC).lerp(Sl.fogC,c),We.fog.density=Un(bl.fogD+.004*E0,Sl.fogD,c),Ku.material.uniforms.uHor.value.copy(bl.hor).lerp(Sl.fogC,c),Ku.material.uniforms.uZen.value.copy(bl.zen).lerp(Sl.zen,c),h0.uHaze.value.copy(We.fog.color),sf.intensity=Un(.05,.24,c),y0.intensity=Un(.05,.07,c),Bo.uEyeGain.value=120*st.level,Bo.uEyeSelf.value=5*Math.min(1,c*2.2),$n.uniforms.uSeed.value=i*.061%997,dn&&(A0(t),ZM(t));for(let d of re)S0(d,t,e);if(Je.update(Gt.position,Ir,re,e),s1(),wl>0&&(wl-=t,wl<=0&&Jt.sub.classList.remove("show")),Oi.render(t),vl+=t,Uu++,vl>=1){let d=Uu/vl;Jt.fps.textContent=`fps ${Math.round(d)} \xB7 ${$n.uniforms.uRes.value.x}\xD7${$n.uniforms.uRes.value.y}`,_l=d<50?_l+1:0,_l>=3&&Ju>360&&(Ju-=60,Fu=!0,_l=0),vl=0,Uu=0}}document.addEventListener("visibilitychange",()=>{document.hidden||(Ll=performance.now(),Tl=0,requestAnimationFrame(ff),Je.resume())});var d1=1.3,p1=1.45,dw={hor:new ot(.6,.57,.5),zen:new ot(.13,.23,.45),fog:new ot(.55,.52,.46),fogD:.0055,haze:new ot(.36,.37,.41),exp:.56};function df(i){let t=i.mesh.position,e=i.s,n=Math.sin(i.heading),s=Math.cos(i.heading),r=i.caps||(i.caps=new Float64Array(10));r[0]=t.x-n*.67*e,r[1]=t.z-s*.67*e,r[2]=t.x+n*.37*e,r[3]=t.z+s*.37*e,r[4]=.33*e;let o=i.ai.yaw,a=Math.sin(o)*.62,c=.58+Math.cos(o)*.62;return r[5]=t.x+n*.62*e,r[6]=t.z+s*.62*e,r[7]=t.x+(s*a+n*c)*e,r[8]=t.z+(-n*a+s*c)*e,r[9]=.2*e,r}var Zo=0,Ko=0,bn=0;function Dl(i,t,e,n,s,r,o,a){let c=e-i,l=n-t,h=o-s,d=a-r,u=i-s,f=t-r,m=c*c+l*l,M=h*h+d*d,p=h*u+d*f,g=0,_=0;if(m<=1e-9&&M>1e-9)_=pe(p/M,0,1);else if(m>1e-9){let E=c*u+l*f;if(M<=1e-9)g=pe(-E/m,0,1);else{let b=c*h+l*d,v=m*M-b*b;g=v>1e-9?pe((b*p-E*M)/v,0,1):0,_=(b*g+p)/M,_<0?(_=0,g=pe(-E/m,0,1)):_>1&&(_=1,g=pe((b-E)/m,0,1))}}Zo=i+c*g-(s+h*_),Ko=t+l*g-(r+d*_),bn=Math.hypot(Zo,Ko)}function o0(){for(let t of re)df(t);let i=99;for(let t=0;t<re.length;t++)for(let e=t+1;e<re.length;e++){let n=re[t].caps,s=re[e].caps;for(let r=0;r<10;r+=5)for(let o=0;o<10;o+=5)Dl(n[r],n[r+1],n[r+2],n[r+3],s[o],s[o+1],s[o+2],s[o+3]),i=Math.min(i,bn-n[r+4]-s[o+4])}return i}var a0=8,m1=.9,Bu=9;function Ou(i,t,e){i.mesh.position.x+=t,i.mesh.position.z+=e;let n=i.caps;n[0]+=t,n[1]+=e,n[2]+=t,n[3]+=e,n[5]+=t,n[6]+=e,n[7]+=t,n[8]+=e,i.shoveX+=t,i.shoveZ+=e}var T0=()=>re.filter(i=>!i.dead);function g1(){let i=T0(),t=Lo.uPC.value;for(let e of i)df(e);for(let e=0;e<4;e++){let n=!1;for(let s=0;s<i.length;s++){let r=i[s],o=r.mesh.position,a=r.caps;for(let c=s+1;c<i.length;c++){let l=i[c],h=l.mesh.position,d=l.caps;if(!(Math.abs(o.x-h.x)>4.5||Math.abs(o.z-h.z)>4.5))for(let u=0;u<10;u+=5)for(let f=0;f<10;f+=5){Dl(a[u],a[u+1],a[u+2],a[u+3],d[f],d[f+1],d[f+2],d[f+3]);let m=a[u+4]+d[f+4];if(bn>=m)continue;let M=Zo,p=Ko,g=bn;g<1e-5&&(M=o.x-h.x,p=o.z-h.z,g=Math.hypot(M,p),g<1e-5&&(M=1,p=0,g=1)),M/=g,p/=g;let _=m-bn+.002,E=(r.speed+.15)/(r.speed+l.speed+.3);Ou(r,M*_*E,p*_*E),Ou(l,-M*_*(1-E),-p*_*(1-E)),n=!0}}}for(let s of i){let r=s.caps,o=s.mesh.position;for(let a of Do){let c=a.x+Math.round((t.x-a.x)/fe)*fe,l=a.z+Math.round((t.y-a.z)/fe)*fe;if(!(Math.abs(c-o.x)>3||Math.abs(l-o.z)>3))for(let h=0;h<10;h+=5){Dl(r[h],r[h+1],r[h+2],r[h+3],c,l,c,l);let d=r[h+4]+a.r;if(bn>=d)continue;let u=Zo,f=Ko,m=bn;m<1e-5&&(u=o.x-c,f=o.z-l,m=Math.hypot(u,f)||1),Ou(s,u/m*(d-bn+.002),f/m*(d-bn+.002)),n=!0}}}if(!n)break}}function A0(i){let t=T0();if(!t.length)return;let e=0,n=0;for(let r of t)e+=r.mesh.position.x,n+=r.mesh.position.z,df(r);e/=t.length,n/=t.length;let s=Lo.uPC.value;for(let r of t){let o=r.mesh.position,a=o.x-yt.pos.x,c=o.z-yt.pos.z,l=Math.hypot(a,c);r.press=0,r.pdx=l>.001?a/l:0,r.pdz=l>.001?c/l:0}for(let r of t){let o=Math.max(pe(r.press*4,0,1),r.startle||0);for(let a of t){if(a===r)continue;let c=Math.hypot(r.mesh.position.x-a.mesh.position.x,r.mesh.position.z-a.mesh.position.z);c<Bu&&(o=Math.max(o,a.stir*.9*Math.min(1,(Bu-c)/(Bu-3))))}r.stirGoal=o}for(let r of t)r.stir=r.stirGoal>r.stir?Math.min(r.stirGoal,r.stir+i*2):Math.max(r.stirGoal,r.stir-i*.3);for(let r of t){let o=r.mesh.position,a=r.caps,c=0,l=0;r.press>0&&(c+=r.pdx*r.press*2.2,l+=r.pdz*r.press*2.2),r.startle>0&&(c+=r.pdx*r.startle*1.9,l+=r.pdz*r.startle*1.9,r.startle=Math.max(0,r.startle-i*.3)),r.alarm=Math.max(r.alarm-i*.25,r.press,(r.startle||0)*.9);let h=e-o.x,d=n-o.z,u=Math.hypot(h,d);if(u>6){let I=.9*Math.min(1,(u-6)/8);c+=h/u*I,l+=d/u*I}let f=0,m=0,M=0;for(let I of t){if(I===r)continue;let N=I.mesh.position,B=Math.hypot(o.x-N.x,o.z-N.z);if(B<a0&&I.speed>.08){let L=1-B/a0;f+=Math.sin(I.heading)*I.speed*L,m+=Math.cos(I.heading)*I.speed*L,M+=L}if(B<4.5){let L=I.caps;for(let O=0;O<10;O+=5)for(let k=0;k<10;k+=5){Dl(a[O],a[O+1],a[O+2],a[O+3],L[k],L[k+1],L[k+2],L[k+3]);let H=O+k===0?.9:.45,j=bn-a[O+4]-L[k+4];if(j<H&&bn>1e-5){let W=(H-j)/H*.9;c+=Zo/bn*W,l+=Ko/bn*W}}}}if(M>0){let I=m1*r.stir*Math.min(1,M/.6)/M;c+=f*I,l+=m*I}for(let I of Do){let N=I.x+Math.round((s.x-I.x)/fe)*fe,B=I.z+Math.round((s.y-I.z)/fe)*fe,L=o.x-N,O=o.z-B,k=Math.hypot(L,O);if(k<1.8&&k>.001){let H=(1.8-k)/1.8*1.2;c+=L/k*H,l+=O/k*H}}r.wx=ye(r.wx,c,2.5,i),r.wz=ye(r.wz,l,2.5,i);let p=Math.hypot(r.wx,r.wz),g=0;p>.15&&(g=Math.atan2(r.wx,r.wz)-r.heading,g=Math.atan2(Math.sin(g),Math.cos(g)));let _=.3+r.speed/2.2;r.turnVel=ye(r.turnVel,p>.15?pe(g*1.8,-_,_):0,3,i);let E=.45*r.s,b=Math.sin(r.heading),v=Math.cos(r.heading),y=o.x-b*E,x=o.z-v*E;r.heading+=r.turnVel*i;let S=Math.sin(r.heading),C=Math.cos(r.heading);o.x=y+S*E,o.z=x+C*E;let A=p>.15?Math.min(d1,p)*(.2+.8*Math.max(0,Math.cos(g))):0;r.speed=ye(r.speed,A,1.6,i),o.x+=S*r.speed*i,o.z+=C*r.speed*i,r.turnLead=pe(g,-.6,.6)*Math.min(1,p)}g1();for(let r of t){let o=r.mesh.position;r.mesh.rotation.y=r.heading;let a=Math.min(.8,Math.hypot(r.shoveX,r.shoveZ)/Math.max(i,.001));r.shoveX=0,r.shoveZ=0;let c=r.speed+Math.abs(r.turnVel)*.55+a;r.gait=ye(r.gait,pe(c/.9,0,1),4,i),r.gaitPhase+=c*i/p1,o.y=-.012*r.gait*(.5-.5*Math.cos(r.gaitPhase*Math.PI*4)),r.mesh.material.userData.own.uGait.value.set(r.gaitPhase,r.gait,0,0),r.mesh.updateMatrixWorld();let l=Math.sin(r.heading),h=Math.cos(r.heading);[.55,0,-.6].forEach((d,u)=>{let f=d*.92*r.s;r.blockers[u].x=o.x+l*f,r.blockers[u].z=o.z+h*f})}}(async()=>{try{LM(),FM(),dn&&GM();let i=0,t=4+hl.length+1+(dn?1:0),e=()=>{i++,Jt.loadTxt.textContent=`\uBD88\uB7EC\uC624\uB294 \uC911\u2026 ${Math.round(i/t*100)}%`},[n,,s,r]=await Promise.all([vM(e),OM().then(e),Promise.all(hl.map(o=>Tu(`plants/saguaro-${o}.json`).then(a=>(e(),a)))),Promise.all(Au.map(o=>Tu(`plants/bone-${o}.json`))).then(o=>(e(),o)),dn?WM().then(e):Promise.resolve()]);On=new al(s,Ru),We.add(On.group),Is=Xp(Ru),Is.push(...qp(r,Ru)),Is.push(Gp((o,a)=>Math.hypot(o-rn.x,a-rn.z)<1.3));for(let o of Is)We.add(o.group);On.setPixel(Gt,$n.uniforms.uRes.value.y),On.update(yt.pos.x,yt.pos.z,Gt),uM.forEach((o,a)=>{let c=Math.atan2(0-o.x,.5-o.z),l=new qt(n[o.v],xM(o.coat,o.face??o.coat,a*1.7));l.position.set(o.x,0,o.z),l.rotation.y=c+o.off*Math.PI/180,l.scale.setScalar(o.s),We.add(l),l.updateMatrixWorld(!0);let h=[.55,0,-.6].map(d=>{let u=new R(0,0,d*.92).applyMatrix4(l.matrixWorld);return{x:u.x,z:u.z,r:.37*o.s}});re.push({mesh:l,s:o.s,phase:a*1.7,blockers:h,counted:!1,lit:0,staring:!1,headWorld:new R,aimPoints:[new R(0,1,0),new R(0,1,.6),new R(0,1,-.6),new R(0,1.15,1.1)],heading:l.rotation.y,speed:0,gait:0,gaitPhase:Math.random(),alarm:0,turnVel:0,turnLead:0,wx:0,wz:0,stir:0,stirGoal:0,press:0,pdx:0,pdz:0,shoveX:0,shoveZ:0,caps:null,startle:0,dead:!1,ai:{t:ne(0,3),yaw:ne(-.4,.4),pitch:ne(-.9,0),tYaw:0,tPitch:-.5,flick:0}})});for(let o of Ul)u0(o,!0);zn.compile(We,Gt),zn.compile(Ds,pi),Jt.loadTxt.textContent=dn?mi?"\uD654\uBA74\uC744 \uB04C\uC5B4 \uB458\uB7EC\uBD10\uC694. \uC624\uB978\uCABD \uBC84\uD2BC\uC73C\uB85C \uACF5\uC774\uCE58\uAE30\uB97C \uC816\uD788\uACE0 \uC3F4\uC694":"\uB9C8\uC6B0\uC2A4 \uB458\uB7EC\uBCF4\uAE30 \xB7 \uC624\uB978\uCABD \uD074\uB9AD(E) \uACF5\uC774\uCE58\uAE30 \xB7 \uC67C\uCABD \uD074\uB9AD \uC3D8\uAE30 \xB7 \uC2A4\uD398\uC774\uC2A4 \uB79C\uD134 \uB4E4\uAE30 \xB7 F \uB044\uAE30\uC640 \uBD88 \uBD99\uC774\uAE30":mi?"\uC67C\uCABD\uC744 \uBC00\uC5B4 \uAC77\uACE0, \uC624\uB978\uCABD\uC744 \uB04C\uC5B4 \uB458\uB7EC\uBD10\uC694":"WASD \uAC77\uAE30 \xB7 \uB9C8\uC6B0\uC2A4 \uB458\uB7EC\uBCF4\uAE30 \xB7 \uC2A4\uD398\uC774\uC2A4/\uC624\uB978\uCABD \uD074\uB9AD \uB79C\uD134 \uB4E4\uAE30 \xB7 F \uB044\uAE30\uC640 \uBD88 \uBD99\uC774\uAE30",Jt.startBtn.disabled=!1,Jt.startBtn.textContent="\uC2DC\uC791",window.__ready=!0,Ll=performance.now(),requestAnimationFrame(ff)}catch(i){console.error(i),Jt.loadTxt.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."}})();var R0=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),pf=()=>document.fullscreenElement||document.webkitFullscreenElement;function C0(){if(!R0||pf())return;let i=document.documentElement,t=()=>{try{mi&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};try{let e=(i.requestFullscreen||i.webkitRequestFullscreen).call(i,{navigationUI:"hide"});e&&e.then?e.then(t).catch(()=>{}):t()}catch{}}function x1(){if(!pf()){C0();return}try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch{}}if(Jt.fsBtn){Jt.fsBtn.hidden=!R0,Jt.fsBtn.addEventListener("click",t=>{t.stopPropagation(),x1()});let i=()=>Jt.fsBtn.setAttribute("aria-pressed",String(!!pf()));document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i)}Jt.startBtn.addEventListener("click",()=>{if(!gi){gi=!0,Jt.start.classList.add("gone"),document.body.classList.add("playing"),C0();try{Je.init()}catch(i){console.warn("sound",i)}cf(),setTimeout(()=>Jt.hint.classList.add("gone"),9e3)}});Jt.resume.addEventListener("click",()=>cf());hM&&(window.__dbg={state:()=>({mode:st.mode,level:st.level,oil:st.oil,nightT:Wo,raiseT:Go,count:jp,countT:E0,revealT:o1,ended:uf,sub:Jt.sub.textContent,pos:yt.pos.toArray()}),countAll:()=>{a1=0;for(let i of re)i.lit=2},setCount:i=>{jp=i},herd:()=>re.map(i=>[+i.mesh.position.x.toFixed(2),+i.mesh.position.z.toFixed(2),+i.speed.toFixed(2),+i.gait.toFixed(2),+i.heading.toFixed(2)]),gap:()=>o0(),raw:i=>{of.enabled=!i},cock:()=>Bl(),fire:()=>ef(),vmLight:i=>{El.intensity=i,El.color.setRGB(1,1,1),El.groundColor.setRGB(.4,.4,.4)},gunHold:(i,t,e,n,s)=>{x0.set(i,t,e),n!==void 0&&(ko.yaw=n,ko.roll=s)},hideWorld:i=>{We.visible=!i},vmOrbit:(i,t,e)=>{Al=i===void 0?null:{yaw:i,pitch:t,dist:e},Al||(pi.position.set(0,0,0),pi.quaternion.identity())},reload:()=>nf(),gun:()=>({anim:we?.state.anim?.type||null,step:we?.state.anim?.steps?.[we.state.anim.i]?.k,cocked:we?.state.cocked,top:we?.state.top,chambers:we?.state.chambers.slice(),dead:re.filter(i=>i.dead).length,startled:re.filter(i=>i.startle>.05).length}),aimAt:i=>{let t=re[i],e=t.blockers[1].x-yt.pos.x,n=t.blockers[1].z-yt.pos.z;yt.yaw=Math.atan2(-e,-n),yt.pitch=Math.atan2(.95*t.s-l0,Math.hypot(e,n))},plantsNear:i=>{let t=[On,...Is][i];return t?t.items.map(e=>{let n=e.x+Math.round((yt.pos.x-e.x)/fe)*fe,s=e.z+Math.round((yt.pos.z-e.z)/fe)*fe;return{v:e.v,x:+n.toFixed(2),z:+s.toFixed(2),d:+Math.hypot(n-yt.pos.x,s-yt.pos.z).toFixed(1),H:+e.H.toFixed(2)}}).sort((e,n)=>e.d-n.d):[]},trisBy:()=>{let i=e=>{let n=0;return e.traverse(s=>{if(s.visible&&s.geometry&&s.geometry.index){let r=s.isInstancedMesh?s.count:s.geometry.isInstancedBufferGeometry?s.geometry.instanceCount:1;n+=s.geometry.index.count/3*r}}),Math.round(n)},t={cows:0};for(let e of re)t.cows+=i(e.mesh);return t.saguaro=i(On.group),["ocotillo","creosote","bursage","skeleton","bones","grass"].forEach((e,n)=>{t[e]=i(Is[n].group)}),t},tris:()=>{let i=0;return We.traverse(t=>{if(t.visible&&t.geometry&&t.geometry.index){let e=t.isInstancedMesh?t.count:t.geometry.isInstancedBufferGeometry?t.geometry.instanceCount:1;i+=t.geometry.index.count/3*e}}),i},saguaros:()=>On?On.items.map(i=>{let t=i.x+Math.round((yt.pos.x-i.x)/fe)*fe,e=i.z+Math.round((yt.pos.z-i.z)/fe)*fe;return{kind:hl[i.v],x:+t.toFixed(2),z:+e.toFixed(2),d:+Math.hypot(t-yt.pos.x,e-yt.pos.z).toFixed(1),H:+i.H.toFixed(1)}}).sort((i,t)=>i.d-t.d):[],herdRaw:()=>re.map(i=>[i.mesh.position.x,i.mesh.position.z,i.heading,i.stir,i.speed]),sim:(i,t,e)=>{e!==void 0&&(yt.yaw=e),t&&un.add(t);let n=1/60,s=re.map(u=>u.mesh.position.clone()),r=99,o=0,a=0;for(;o<i;o+=n){w0(n),A0(n);for(let f of re)S0(f,n,o);let u=o0();r=Math.min(r,u),u<-.02&&a++}t&&un.delete(t);let c=re.map((u,f)=>+u.mesh.position.distanceTo(s[f]).toFixed(1)),l=0,h=0;for(let u of re)l+=u.mesh.position.x,h+=u.mesh.position.z;l/=re.length,h/=re.length;let d=Math.max(...re.map(u=>Math.hypot(u.mesh.position.x-l,u.mesh.position.z-h)));return{minGap:+r.toFixed(3),overlapSteps:a,moved:c,centre:[+l.toFixed(1),+h.toFixed(1)],spread:+d.toFixed(1),speeds:re.map(u=>+u.speed.toFixed(2)),player:[+yt.pos.x.toFixed(1),+yt.pos.z.toFixed(1)]}},tumbles:()=>Ul.map(i=>[+i.pos.x.toFixed(1),+i.pos.z.toFixed(1),+i.speed.toFixed(2)]),lightAt:i=>c1(re[i].mesh.localToWorld(new R(0,1,0))),goto:(i,t,e,n)=>{yt.pos.set(i,0,t),yt.yaw=e,yt.pitch=n??0},walk:(i,t)=>{un.add(i),setTimeout(()=>un.delete(i),t)},turn:i=>{yt.yaw+=i},raise:i=>{Ol=i},off:()=>Il(),gust:()=>{st.gustTimer=0},blow:()=>$u("wind"),oil:i=>{st.oil=i},relight:()=>Il(),night:()=>{Wo=1},arm:()=>({W:Fi.W.toArray(),E:Fi.E.toArray(),f:Fi.f.toArray(),u:Fi.u.toArray(),hp:En.position.toArray(),hq:En.quaternion.toArray(),lq:Lr.quaternion.toArray(),lp:Ls.position.toArray(),exp:$n.uniforms.uExp.value,adapt:Vo})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
