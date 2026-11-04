(()=>{var Tf=0,Fh=1,Ef=2;var Ns=1,Af=2,Er=3,ai=0,hn=1,yn=2,oi=0,ns=1,is=2,Bh=3,kh=4,Rf=5;var Ds=100,Cf=101,If=102,Pf=103,Lf=104,Nf=200,Df=201,Uf=202,Of=203,zh=204,Hh=205,Ff=206,Bf=207,kf=208,zf=209,Hf=210,Vf=211,Gf=212,Wf=213,Xf=214,sl=0,rl=1,al=2,hr=3,ol=4,ll=5,cl=6,hl=7,Vh=0,qf=1,$f=2,$n=0,Gh=1,Wh=2,Xh=3,qh=4,$h=5,qa=6,Yh=7,Rh="attached",Yf="detached",Kh=300,ss=301,Us=302,Pl=303,Ll=304,$a=306,Zi=1e3,Pn=1001,ur=1002,Ct=1003,Nl=1004;var Os=1005;var It=1006,Ar=1007;var Yn=1008;var vn=1009,Zh=1010,Jh=1011,Rr=1012,Dl=1013,Kn=1014,Tn=1015,Zn=1016,Ul=1017,Ol=1018,Cr=1020,jh=35902,Qh=35899,eu=1021,tu=1022,En=1023,ni=1026,rs=1027,Fl=1028,Bl=1029,as=1030,kl=1031;var zl=1033,Ya=33776,Ka=33777,Za=33778,Ja=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,$l=37496,Yl=37488,Kl=37489,ja=37490,Zl=37491,Jl=37808,jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Qa=36285,gc=36286,xc=2200,_c=2201,Kf=2202,Ss=2300,bs=2301,tl=2302,Ch=2303,ys=2400,vs=2401,ya=2402,yc=2500,Zf=2501,nu=0,eo=1,Ir=2,Jf=3200;var vc=0,jf=1,Di="",Et="srgb",ln="srgb-linear",va="linear",st="srgb";var nl=7680;var Qf=519,ep=512,tp=513,np=514,Mc=515,ip=516,sp=517,Sc=518,rp=519,iu=35044;var su="300 es",Wn=2e3,dr=2001;function sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=fr("canvas");return s.style.display="block",s}var kd={},pr=null;function Ma(...s){let e="THREE."+s.shift();pr?pr("log",e,...s):console.log(e,...s)}function op(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function we(...s){s=op(s);let e="THREE."+s.shift();if(pr)pr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function De(...s){s=op(s);let e="THREE."+s.shift();if(pr)pr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ms(...s){let e=s.join(" ");e in kd||(kd[e]=!0,we(...s))}function lp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var cp={[sl]:rl,[al]:cl,[ol]:hl,[hr]:ll,[rl]:sl,[cl]:al,[hl]:ol,[ll]:hr},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=1234567,xa=Math.PI/180,ws=180/Math.PI;function Xn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function ru(s,e){return(s%e+e)%e}function ag(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function og(s,e,t){return s!==e?(t-s)/(e-s):0}function _a(s,e,t){return(1-t)*s+t*e}function lg(s,e,t,n){return _a(s,e,1-Math.exp(-t*n))}function cg(s,e=1){return e-Math.abs(ru(s,e*2)-e)}function hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ug(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fg(s,e){return s+Math.random()*(e-s)}function pg(s){return s*(.5-Math.random())}function mg(s){s!==void 0&&(zd=s);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gg(s){return s*xa}function xg(s){return s*ws}function _g(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function yg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mg(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var au={DEG2RAD:xa,RAD2DEG:ws,generateUUID:Xn,clamp:Ze,euclideanModulo:ru,mapLinear:ag,inverseLerp:og,lerp:_a,damp:lg,pingpong:cg,smoothstep:hg,smootherstep:ug,randInt:dg,randFloat:fg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:xg,isPowerOfTwo:_g,ceilPowerOfTwo:yg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:Mg,normalize:at,denormalize:Gn},uu=class uu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uu.prototype.isVector2=!0;var Ue=uu,Qt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),R=Math.sin(w);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},du=class du{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;var D=du,ih=new D,Hd=new Qt,fu=class fu{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],w=i[1],R=i[4],M=i[7],S=i[2],b=i[5],A=i[8];return r[0]=a*v+o*w+l*S,r[3]=a*m+o*R+l*b,r[6]=a*p+o*M+l*A,r[1]=c*v+h*w+u*S,r[4]=c*m+h*R+u*b,r[7]=c*p+h*M+u*A,r[2]=d*v+f*w+g*S,r[5]=d*m+f*R+g*b,r[8]=d*p+f*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fu.prototype.isMatrix3=!0;var Fe=fu,sh=new Fe,Vd=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let s={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ln]:{primaries:e,whitePoint:n,transfer:va,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}var Xe=Sg();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xs,ul=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=fr("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bg=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(rh(i[a].image)):r.push(rh(i[a]))}else r=rh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ul.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var wg=0,ah=new D,zt=class s extends qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Pn,i=Pn,r=It,a=Yn,o=En,l=vn,c=s.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Xn(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Kh;zt.DEFAULT_ANISOTROPY=1;var pu=class pu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(f+1)/2,S=(p+1)/2,b=(h+d)/4,A=(u+v)/4,_=(g+m)/4;return R>M&&R>S?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=b/n,r=A/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=_/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pu.prototype.isVector4=!0;var ot=pu,dl=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new zt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Il=class Il{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Il().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Eg)}lookAt(e,t,n){let i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Wi.crossVectors(n,Mn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Wi.crossVectors(n,Mn)),Wi.normalize(),Ao.crossVectors(Mn,Wi),i[0]=Wi.x,i[4]=Ao.x,i[8]=Mn.x,i[1]=Wi.y,i[5]=Ao.y,i[9]=Mn.y,i[2]=Wi.z,i[6]=Ao.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],R=n[7],M=n[11],S=n[15],b=i[0],A=i[4],_=i[8],T=i[12],C=i[1],U=i[5],F=i[9],H=i[13],L=i[2],V=i[6],K=i[10],Z=i[14],ie=i[3],q=i[7],ee=i[11],ne=i[15];return r[0]=a*b+o*C+l*L+c*ie,r[4]=a*A+o*U+l*V+c*q,r[8]=a*_+o*F+l*K+c*ee,r[12]=a*T+o*H+l*Z+c*ne,r[1]=h*b+u*C+d*L+f*ie,r[5]=h*A+u*U+d*V+f*q,r[9]=h*_+u*F+d*K+f*ee,r[13]=h*T+u*H+d*Z+f*ne,r[2]=g*b+v*C+m*L+p*ie,r[6]=g*A+v*U+m*V+p*q,r[10]=g*_+v*F+m*K+p*ee,r[14]=g*T+v*H+m*Z+p*ne,r[3]=w*b+R*C+M*L+S*ie,r[7]=w*A+R*U+M*V+S*q,r[11]=w*_+R*F+M*K+S*ee,r[15]=w*T+R*H+M*Z+S*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],w=l*f-c*d,R=o*f-c*u,M=o*d-l*u,S=a*f-c*h,b=a*d-l*h,A=a*u-o*h;return t*(v*w-m*R+p*M)-n*(g*w-m*S+p*b)+i*(g*R-v*S+p*A)-r*(g*M-v*b+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=t*o-n*a,R=t*l-i*a,M=t*c-r*a,S=n*l-i*o,b=n*c-r*o,A=i*c-r*l,_=h*v-u*g,T=h*m-d*g,C=h*p-f*g,U=u*m-d*v,F=u*p-f*v,H=d*p-f*m,L=w*H-R*F+M*U+S*C-b*T+A*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return e[0]=(o*H-l*F+c*U)*V,e[1]=(i*F-n*H-r*U)*V,e[2]=(v*A-m*b+p*S)*V,e[3]=(d*b-u*A-f*S)*V,e[4]=(l*C-a*H-c*T)*V,e[5]=(t*H-i*C+r*T)*V,e[6]=(m*M-g*A-p*R)*V,e[7]=(h*A-d*M+f*R)*V,e[8]=(a*F-o*C+c*_)*V,e[9]=(n*C-t*F-r*_)*V,e[10]=(g*b-v*M+p*w)*V,e[11]=(u*M-h*b-f*w)*V,e[12]=(o*T-a*U-l*_)*V,e[13]=(t*U-n*T+i*_)*V,e[14]=(v*R-g*S-m*w)*V,e[15]=(h*S-u*R+d*w)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,w=l*c,R=l*h,M=l*u,S=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+M)*S,i[2]=(g-R)*S,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(m+w)*b,i[7]=0,i[8]=(g+R)*A,i[9]=(m-w)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=qs.set(i[0],i[1],i[2]).length(),o=qs.set(i[4],i[5],i[6]).length(),l=qs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,u=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Wn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Wn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Il.prototype.isMatrix4=!0;var ke=Il,qs=new D,kn=new ke,Tg=new D(0,0,0),Eg=new D(1,1,1),Wi=new D,Ao=new D,Mn=new D,Wd=new ke,Xd=new Qt,Ei=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ag=0,qd=new D,$s=new Qt,_i=new ke,Ro=new D,aa=new D,Rg=new D,Cg=new Qt,$d=new D(1,0,0),Yd=new D(0,1,0),Kd=new D(0,0,1),Zd={type:"added"},Ig={type:"removed"},Ys={type:"childadded",child:null},oh={type:"childremoved",child:null},vt=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Ei,n=new Qt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(aa,Ro,this.up):_i.lookAt(Ro,aa,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(_i),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function lh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=ru(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Xe.workingToColorSpace(jt.copy(this),e),Math.round(Ze(jt.r*255,0,255))*65536+Math.round(Ze(jt.g*255,0,255))*256+Math.round(Ze(jt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Et){Xe.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Co);let n=_a(Xi.h,Co.h,t),i=_a(Xi.s,Co.s,t),r=_a(Xi.l,Co.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Te;Te.NAMES=hp;var wa=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ta=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new D,yi=new D,ch=new D,vi=new D,Ks=new D,Zs=new D,Jd=new D,hh=new D,uh=new D,dh=new D,fh=new ot,ph=new ot,mh=new ot,wi=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),yi.subVectors(n,t),ch.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(yi),l=zn.dot(ch),c=yi.dot(yi),h=yi.dot(ch),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),yi.subVectors(e,t),zn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ks.subVectors(i,n),Zs.subVectors(r,n),hh.subVectors(e,n);let l=Ks.dot(hh),c=Zs.dot(hh);if(l<=0&&c<=0)return t.copy(n);uh.subVectors(e,i);let h=Ks.dot(uh),u=Zs.dot(uh);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ks,a);dh.subVectors(e,r);let f=Ks.dot(dh),g=Zs.dot(dh);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jd.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Jd,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ks,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Po.subVectors(this.max,oa),Js.subVectors(e.a,oa),js.subVectors(e.b,oa),Qs.subVectors(e.c,oa),qi.subVectors(js,Js),$i.subVectors(Qs,js),ms.subVectors(Js,Qs);let t=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-ms.z,ms.y,qi.z,0,-qi.x,$i.z,0,-$i.x,ms.z,0,-ms.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-ms.y,ms.x,0];return!gh(t,Js,js,Qs,Po)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,Js,js,Qs,Po))?!1:(Lo.crossVectors(qi,$i),t=[Lo.x,Lo.y,Lo.z],gh(t,Js,js,Qs,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,Io=new bn,Js=new D,js=new D,Qs=new D,qi=new D,$i=new D,ms=new D,oa=new D,Po=new D,Lo=new D,gs=new D;function gh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gs.fromArray(s,r);let o=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ut=new D,No=new Ue,Lg=0,kt=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Aa=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ng=new bn,la=new D,xh=new D,gn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(xh)),this.expandByPoint(la.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dg=0,In=new ke,_h=new vt,er=new D,Sn=new bn,ca=new bn,Wt=new D,Pt=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?Aa:Ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Sn.min,ca.min),Sn.expandByPoint(Wt),Wt.addVectors(Sn.max,ca.max),Sn.expandByPoint(Wt)):(Sn.expandByPoint(ca.min),Sn.expandByPoint(ca.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),Wt.add(er)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;let c=new D,h=new D,u=new D,d=new Ue,f=new Ue,g=new Ue,v=new D,m=new D;function p(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[_].add(v),o[T].add(v),o[C].add(v),l[_].add(m),l[T].add(m),l[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){let C=w[_],U=C.start,F=C.count;for(let H=U,L=U+F;H<L;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new D,M=new D,S=new D,b=new D;function A(_){S.fromBufferAttribute(i,_),b.copy(S);let T=o[_];R.copy(T),R.sub(S.multiplyScalar(S.dot(T))).normalize(),M.crossVectors(b,T);let U=M.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,U)}for(let _=0,T=w.length;_<T;++_){let C=w[_],U=C.start,F=C.count;for(let H=U,L=U+F;H<L;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new kt(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},on=new D,Ji=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yh=new D,Ug=new D,Og=new Fe,Vn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yh.subVectors(n,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(yh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Og.getNormalMatrix(e),i=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fg=0,cn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=ns,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ji=class extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,ha=new D,nr=new D,ir=new D,sr=new Ue,ua=new Ue,up=new ke,Do=new D,da=new D,Uo=new D,jd=new Ue,vh=new Ue,Qd=new Ue,Es=class extends vt{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ts(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Ji(n,3,0,!1)),tr.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Oo(Do.set(-.5,-.5,0),ir,a,nr,i,r),Oo(da.set(.5,-.5,0),ir,a,nr,i,r),Oo(Uo.set(.5,.5,0),ir,a,nr,i,r),jd.set(0,0),vh.set(1,0),Qd.set(1,1);let o=e.ray.intersectTriangle(Do,da,Uo,!1,ha);if(o===null&&(Oo(da.set(-.5,.5,0),ir,a,nr,i,r),vh.set(0,1),o=e.ray.intersectTriangle(Do,Uo,da,!1,ha),o===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:wi.getInterpolation(ha,Do,da,Uo,jd,vh,Qd,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oo(s,e,t,n,i,r){sr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ua.x=r*sr.x-i*sr.y,ua.y=i*sr.x+r*sr.y):ua.copy(sr),s.copy(e),s.x+=ua.x,s.y+=ua.y,s.applyMatrix4(up)}var Si=new D,Mh=new D,Fo=new D,Bo=new D,As=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mh.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Bo.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fo),o=Bo.dot(this.direction),l=-Bo.dot(Fo),c=Bo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mh).addScaledVector(Fo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,R=n.z-a.z,M=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,_,T,C,U,F,H,L,V,K,Z,ie;if(M>=S&&M>=b?(T=l,F=u,V=g,ie=p,l>=0?(A=c,_=h,C=d,U=f,H=v,L=m,K=w,Z=R):(A=h,_=c,C=f,U=d,H=m,L=v,K=R,Z=w)):S>=b?(T=c,F=d,V=v,ie=w,c>=0?(A=h,_=l,C=f,U=u,H=m,L=g,K=R,Z=p):(A=l,_=h,C=u,U=f,H=g,L=m,K=p,Z=R)):(T=h,F=f,V=m,ie=R,h>=0?(A=l,_=c,C=u,U=d,H=g,L=v,K=p,Z=w):(A=c,_=l,C=d,U=u,H=v,L=g,K=w,Z=p)),T===0)return null;let q=A/T,ee=_/T,ne=1/T,Le=C-q*F,Re=U-ee*F,pt=H-q*V,je=L-ee*V,tt=K-q*ie,$=Z-ee*ie,Q=tt*je-$*pt,ye=Le*$-Re*tt,Be=pt*Re-je*Le;if(i){if(Q<0||ye<0||Be<0)return null}else if((Q<0||ye<0||Be<0)&&(Q>0||ye>0||Be>0))return null;let xe=Q+ye+Be;if(xe===0)return null;let qe=ne*(Q*F+ye*V+Be*ie);return(xe>0?qe<0:qe>0)?null:this.at(qe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ef=new ke,xs=new As,ko=new gn,tf=new D,zo=new D,Ho=new D,Vo=new D,Sh=new D,Go=new D,nf=new D,Wo=new D,_t=class extends vt{constructor(e=new Pt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Sh.fromBufferAttribute(u,e),a?Go.addScaledVector(Sh,h):Go.addScaledVector(Sh.sub(t),h))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ko.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ko,tf)===null||xs.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),xs.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,S=R;M<S;M+=3){let b=o.getX(M),A=o.getX(M+1),_=o.getX(M+2);i=Xo(this,p,e,n,c,h,u,b,A,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let w=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);i=Xo(this,a,e,n,c,h,u,w,R,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,S=R;M<S;M+=3){let b=M,A=M+1,_=M+2;i=Xo(this,p,e,n,c,h,u,b,A,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let w=m,R=m+1,M=m+2;i=Xo(this,a,e,n,c,h,u,w,R,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Bg(s,e,t,n,i,r,a,o){let l;if(e.side===hn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ai,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:s}}function Xo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,zo),s.getVertexPosition(l,Ho),s.getVertexPosition(c,Vo);let h=Bg(s,e,t,n,zo,Ho,Vo,nf);if(h){let u=new D;wi.getBarycoord(nf,zo,Ho,Vo,u),i&&(h.uv=wi.getInterpolatedAttribute(i,o,l,c,u,new Ue)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,l,c,u,new Ue)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};wi.getNormal(zo,Ho,Vo,d.normal),h.face=d,h.barycoord=u}return h}var fa=new ot,sf=new ot,rf=new ot,kg=new ot,af=new ke,qo=new D,bh=new gn,of=new ke,wh=new As,Ra=class extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bh.copy(this.boundingSphere),bh.applyMatrix4(i),e.ray.intersectsSphere(bh)!==!1&&(of.copy(i).invert(),wh.copy(e.ray).applyMatrix4(of),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;sf.fromBufferAttribute(i.attributes.skinIndex,e),rf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(...t,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=rf.getComponent(r);if(a!==0){let o=sf.getComponent(r);af.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(kg.copy(fa).applyMatrix4(af),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}},xr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_r=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lf=new ke,zg=new ke,Ca=class s{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:zg;lf.multiplyMatrices(o,t[r]),lf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _r(t,e,e,En,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new xr),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ai=class extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new ke,cf=new ke,$o=[],hf=new bn,Hg=new ke,pa=new _t,ma=new gn,Ia=class extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),hf.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),ma.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rr),cf.multiplyMatrices(n,rr),pa.matrixWorld=cf,pa.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let l=$o[a];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(i*this.count),i,this.count,Fl,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new gn,Vg=new Ue(.5,.5),Yo=new D,yr=class{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],R=r[13],M=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,p-g,S-w).normalize(),i[1].setComponents(c+a,f+h,p+g,S+w).normalize(),i[2].setComponents(c+o,f+u,p+v,S+R).normalize(),i[3].setComponents(c-o,f-u,p-v,S-R).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,S-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,S-M).normalize(),t===Wn)i[5].setComponents(c+l,f+d,p+m,S+M).normalize();else if(t===dr)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=Vg.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yo.x=i.normal.x>0?e.max.x:e.min.x,Yo.y=i.normal.y>0?e.max.y:e.min.y,Yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vr=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pl=new D,ml=new D,uf=new ke,ga=new As,Ko=new gn,Th=new D,df=new D,Rs=class extends vt{constructor(e=new Pt,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pl.fromBufferAttribute(t,i-1),ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new Tt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;uf.copy(i).invert(),ga.copy(e.ray).applyMatrix4(uf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),w=h.getX(v+1),R=Zo(this,e,ga,l,p,w,v);R&&t.push(R)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Zo(this,e,ga,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Zo(this,e,ga,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Zo(this,e,ga,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(pl.fromBufferAttribute(o,i),ml.fromBufferAttribute(o,r),t.distanceSqToSegment(pl,ml,Th,df)>n)return;Th.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Th);if(!(c<e.near||c>e.far))return{distance:c,point:df.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var ff=new D,pf=new D,Pa=class extends Rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ff.fromBufferAttribute(t,i),pf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ff.distanceTo(pf);e.setAttribute("lineDistance",new Tt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},La=class extends Rs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Mr=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mf=new ke,Ih=new As,Jo=new gn,jo=new D,Na=class extends vt{constructor(e=new Pt,t=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;mf.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);jo.fromBufferAttribute(u,m),gf(jo,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)jo.fromBufferAttribute(u,g),gf(jo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gf(s,e,t,n,i,r,a){let o=Ih.distanceSqToPoint(s);if(o<t){let l=new D;Ih.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends zt{constructor(e=[],t=ss,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sr=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends zt{constructor(e,t,n=Kn,i,r,a,o=Ct,l=Ct,c,h=ni,u=1){if(h!==ni&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gl=class extends Qi{constructor(e,t=Kn,n=ss,i,r,a=Ct,o=Ct,l,c=ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ua=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},es=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(v,m,p,w,R,M,S,b,A,_,T){let C=M/A,U=S/_,F=M/2,H=S/2,L=b/2,V=A+1,K=_+1,Z=0,ie=0,q=new D;for(let ee=0;ee<K;ee++){let ne=ee*U-H;for(let Le=0;Le<V;Le++){let Re=Le*C-F;q[v]=Re*w,q[m]=ne*R,q[p]=L,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),u.push(Le/A),u.push(1-ee/_),Z+=1}}for(let ee=0;ee<_;ee++)for(let ne=0;ne<A;ne++){let Le=d+ne+V*ee,Re=d+ne+V*(ee+1),pt=d+(ne+1)+V*(ee+1),je=d+(ne+1)+V*ee;l.push(Le,Re,je),l.push(Re,pt,je),ie+=6}o.addGroup(f,ie,T),f+=ie,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var br=class s extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function w(){let M=new D,S=new D,b=0,A=(t-e)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,U=C*(t-e)+e;for(let F=0;F<=i;F++){let H=F/i,L=H*l+o,V=Math.sin(L),K=Math.cos(L);S.x=U*V,S.y=-C*n+m,S.z=U*K,u.push(S.x,S.y,S.z),M.set(V,A,K).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-C),T.push(g++)}v.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let C=v[T][_],U=v[T+1][_],F=v[T+1][_+1],H=v[T][_+1];(e>0||T!==0)&&(h.push(C,U,H),b+=3),(t>0||T!==r-1)&&(h.push(U,F,H),b+=3)}c.addGroup(p,b,0),p+=b}function R(M){let S=g,b=new Ue,A=new D,_=0,T=M===!0?e:t,C=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let U=g;for(let F=0;F<=i;F++){let L=F/i*l+o,V=Math.cos(L),K=Math.sin(L);A.x=T*K,A.y=m*C,A.z=T*V,u.push(A.x,A.y,A.z),d.push(0,C,0),b.x=V*.5+.5,b.y=K*.5*C+.5,f.push(b.x,b.y),g++}for(let F=0;F<i;F++){let H=S+F,L=U+F;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oa=class s extends br{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ri=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let w=p*d-a;for(let R=0;R<c;R++){let M=R*u-r;g.push(M,-w,0),v.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let R=w+c*p,M=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;f.push(R,M,b),f.push(M,S,b)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fa=class s extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let w=[],R=p/n,M=a+R*o,S=e*Math.cos(M),b=Math.sqrt(e*e-S*S),A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,C=i+T*r;u.x=-b*Math.cos(C),u.y=S,u.z=b*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+A,1-R),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let R=h[p][w+1],M=h[p][w],S=h[p+1][w],b=h[p+1][w+1];(p!==0||a>0)&&f.push(R,M,b),(p!==n-1||l<Math.PI)&&f.push(M,S,b)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Fs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(xf(i))i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(xf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function tn(s){let e={};for(let t=0;t<s.length;t++){let n=Fs(s[t]);for(let i in n)e[i]=n[i]}return e}function xf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ou(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var dp={clone:Fs,merge:tn},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xl=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _l=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ki(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function il(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function qg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function $g(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vs:r=e,o=2*t-n;break;case ya:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:a=e,l=2*n-t;break;case ya:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,R=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+w*a[c+S]+R*a[l+S]+M*a[u+S];return r}},Ba=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ml=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends ii{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,w=u[p],R=u[p+1],M=e*d+g*2,S=h[M],b=h[M+1],A=Kg(n,t,w,S,i);r[g]=fp(A,v,R,b,m)}return r}};function fp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Yg(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Kg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=fp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Yg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var _n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),il(e.settings)&&(n.settings={inTangents:Ki(e.settings.inTangents,Array),outTangents:Ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;il(this.settings)&&(yf(this.settings.inTangents,e),yf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,il(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function yf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=bs;var Ci=class extends _n{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ss;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};ka.prototype.ValueTypeName="color";var Ii=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};Ii.prototype.ValueTypeName="number";var bl=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pi=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends _n{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ss;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};ts.prototype.ValueTypeName="vector";var Cs=class{constructor(e="",t=-1,n=[],i=yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=qg(l);l=_f(l,1,h),c=_f(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ii(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Zg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return ka;case"quaternion":return Pi;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zg(s.type);if(s.times===void 0){let n=[],i=[];$g(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),il(s.settings)&&(t.settings={inTangents:Ki(s.settings.inTangents,Float32Array),outTangents:Ki(s.settings.outTangents,Float32Array)}),t}var ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new wl,si=class{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},wr=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ti.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=bi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){w();function w(){u.read().then(({done:R,value:M})=>{if(R)p.close();else{v+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,A=h.length;b<A;b++){let _=h[b];_.onProgress&&_.onProgress(S)}p.enqueue(M),w()}},R=>{p.error(R)})}}});return new Response(m)}else throw new Ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ti.add(`file:${e}`,c);let h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=new WeakMap,Tl=class extends si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ar.get(a);u===void 0&&(u=[],ar.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=fr("img");function l(){h(),t&&t(this);let u=ar.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ar.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ti.remove(`image:${e}`);let d=ar.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Is=class extends si{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new Tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ps=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},za=class extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eh=new ke,Mf=new D,Sf=new D,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mf),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qo=new D,el=new Qt,ei=new D,Ha=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,el,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qo,el,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new D,bf=new Ue,wf=new Ue,Xt=class extends Ha{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,bf,wf),t.subVectors(wf,bf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lh=class extends Tr{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Va=class extends Ps{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nh=class extends Tr{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Ga=class extends Ps{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ri=class extends Ha{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Tr{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ni=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ah=new WeakMap,Wa=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Ah.has(a)===!0?(i&&i(Ah.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ah.set(l,c),ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=-90,lr=1,El=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(or,lr,e,t);i.layers=this.layers,this.add(i);let r=new Xt(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new Xt(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new Xt(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Xt(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Al=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Rl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Qt.multiplyQuaternionsFlat(e,a,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},lu="\\[\\]\\.:\\/",jg=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",Qg="[^"+lu.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",cu),t0=/(WCOD+)?/.source.replace("WCOD",Qg),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),s0=new RegExp("^"+e0+t0+n0+i0+"$"),r0=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Uh;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ys,endingEnd:ys};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=_c,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Zf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case yc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Kf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===xc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(e?i.endingStart=this.zeroSlopeAtStart?vs:ys:i.endingStart=ya,t?i.endingEnd=this.zeroSlopeAtEnd?vs:ys:i.endingEnd=ya)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},a0=new Float32Array(1),Xa=class extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;g=new Rl(ct.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ba(new Float32Array(2),new Float32Array(2),1,a0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Cs.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Cl(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Cs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var mu=class mu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};mu.prototype.isMatrix2=!0;var Oh=mu;function hu(s,e,t,n){let i=o0(n);switch(t){case eu:return s*e;case Fl:return s*e/i.components*i.byteLength;case Bl:return s*e/i.components*i.byteLength;case as:return s*e*2/i.components*i.byteLength;case kl:return s*e*2/i.components*i.byteLength;case tu:return s*e*3/i.components*i.byteLength;case En:return s*e*4/i.components*i.byteLength;case zl:return s*e*4/i.components*i.byteLength;case Ya:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(s,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(s,8)*Math.max(e,8)/2;case Xl:case ql:case Yl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case ja:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uc:case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qa:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(s){switch(s){case vn:case Zh:return{byteLength:1,components:1};case Rr:case Jh:case Zn:return{byteLength:2,components:1};case Ul:case Ol:return{byteLength:2,components:4};case Kn:case Dl:case Tn:return{byteLength:4,components:1};case jh:case Qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function c0(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,cx=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
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
}`,__=`#define DISTANCE
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
}`,y_=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
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
}`,w_=`#include <common>
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
}`,T_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,I_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,N_=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,D_=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,O_=`#define TOON
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
}`,F_=`#define TOON
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
}`,B_=`uniform float size;
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
}`,k_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,We={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:_0,batching_vertex:y0,begin_vertex:v0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:I0,color_pars_vertex:P0,color_vertex:L0,common:N0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:k0,colorspace_fragment:z0,colorspace_pars_fragment:H0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nx,envmap_vertex:q0,fog_vertex:$0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:j0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ax,lights_physical_fragment:ox,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,lightprobes_pars_fragment:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:xx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:vx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:bx,morphcolor_vertex:wx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Ix,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Fx,opaque_fragment:Bx,packing:kx,premultiplied_alpha_fragment:zx,project_vertex:Hx,dithering_fragment:Vx,dithering_pars_fragment:Gx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:$x,shadowmap_vertex:Yx,shadowmask_pars_fragment:Kx,skinbase_vertex:Zx,skinning_pars_vertex:Jx,skinning_vertex:jx,skinnormal_vertex:Qx,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:a_,uv_pars_vertex:o_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:x_,distance_vert:__,distance_frag:y_,equirect_vert:v_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:b_,meshbasic_vert:w_,meshbasic_frag:T_,meshlambert_vert:E_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:I_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:N_,meshphysical_vert:D_,meshphysical_frag:U_,meshtoon_vert:O_,meshtoon_frag:F_,points_vert:B_,points_frag:k_,shadow_vert:z_,shadow_frag:H_,sprite_vert:V_,sprite_frag:G_},ue={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ci={basic:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:tn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:tn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:tn([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:tn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:tn([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:tn([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:tn([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:tn([ue.lights,ue.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ci.physical={uniforms:tn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var bc={r:0,b:0,g:0},W_=new ke,Fp=new Fe;Fp.set(-1,0,0,0,1,0,0,0,1);function X_(s,e,t,n,i,r){let a=new Te(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let M=w.backgroundBlurriness>0;R=e.get(R,M)}return R}function g(w){let R=!1,M=f(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(w,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===$a)?(c===void 0&&(c=new _t(new es(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Fs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fp),c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==st,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new Ri(2,2),new wn({name:"BackgroundMaterial",uniforms:Fs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(bc,ou(s)),t.buffers.color.setClear(bc.r,bc.g,bc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:v,dispose:p}}function q_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(U,F,H,L,V){let K=!1,Z=u(U,L,H,F);r!==Z&&(r=Z,c(r.object)),K=f(U,L,H,V),K&&g(U,L,H,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(U,F,H,L),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function u(U,F,H,L){let V=L.wireframe===!0,K=n[F.id];K===void 0&&(K={},n[F.id]=K);let Z=U.isInstancedMesh===!0?U.id:0,ie=K[Z];ie===void 0&&(ie={},K[Z]=ie);let q=ie[H.id];q===void 0&&(q={},ie[H.id]=q);let ee=q[V];return ee===void 0&&(ee=d(l()),q[V]=ee),ee}function d(U){let F=[],H=[],L=[];for(let V=0;V<t;V++)F[V]=0,H[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,F,H,L){let V=r.attributes,K=F.attributes,Z=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=V[q],Le=K[q];if(Le===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor)),ne===void 0||ne.attribute!==Le||Le&&ne.data!==Le.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function g(U,F,H,L){let V={},K=F.attributes,Z=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=K[q];ne===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));let Le={};Le.attribute=ne,ne&&ne.data&&(Le.data=ne.data),V[q]=Le,Z++}r.attributes=V,r.attributesNum=Z,r.index=L}function v(){let U=r.newAttributes;for(let F=0,H=U.length;F<H;F++)U[F]=0}function m(U){p(U,0)}function p(U,F){let H=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;H[U]=1,L[U]===0&&(s.enableVertexAttribArray(U),L[U]=1),V[U]!==F&&(s.vertexAttribDivisor(U,F),V[U]=F)}function w(){let U=r.newAttributes,F=r.enabledAttributes;for(let H=0,L=F.length;H<L;H++)F[H]!==U[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function R(U,F,H,L,V,K,Z){Z===!0?s.vertexAttribIPointer(U,F,H,V,K):s.vertexAttribPointer(U,F,H,L,V,K)}function M(U,F,H,L){v();let V=L.attributes,K=H.getAttributes(),Z=F.defaultAttributeValues;for(let ie in K){let q=K[ie];if(q.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){let ne=ee.normalized,Le=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;let pt=Re.buffer,je=Re.type,tt=Re.bytesPerElement,$=je===s.INT||je===s.UNSIGNED_INT||ee.gpuType===Dl;if(ee.isInterleavedBufferAttribute){let Q=ee.data,ye=Q.stride,Be=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let xe=0;xe<q.locationSize;xe++)R(q.location+xe,Le/q.locationSize,je,ne,ye*tt,(Be+Le/q.locationSize*xe)*tt,$)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)p(q.location+Q,ee.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Q=0;Q<q.locationSize;Q++)R(q.location+Q,Le/q.locationSize,je,ne,Le*tt,Le/q.locationSize*Q*tt,$)}}else if(Z!==void 0){let ne=Z[ie];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(q.location,ne);break;case 3:s.vertexAttrib3fv(q.location,ne);break;case 4:s.vertexAttrib4fv(q.location,ne);break;default:s.vertexAttrib1fv(q.location,ne)}}}}w()}function S(){T();for(let U in n){let F=n[U];for(let H in F){let L=F[H];for(let V in L){let K=L[V];for(let Z in K)h(K[Z].object),delete K[Z];delete L[V]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let H in F){let L=F[H];for(let V in L){let K=L[V];for(let Z in K)h(K[Z].object),delete K[Z];delete L[V]}}delete n[U.id]}function A(U){for(let F in n){let H=n[F];for(let L in H){let V=H[L];if(V[U.id]===void 0)continue;let K=V[U.id];for(let Z in K)h(K[Z].object),delete K[Z];delete V[U.id]}}}function _(U){for(let F in n){let H=n[F],L=U.isInstancedMesh===!0?U.id:0,V=H[L];if(V!==void 0){for(let K in V){let Z=V[K];for(let ie in Z)h(Z[ie].object),delete Z[ie];delete V[K]}delete H[L],Object.keys(H).length===0&&delete n[F]}}}function T(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function $_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Y_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==En&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vn&&A!==Tn&&!_&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:M,maxSamples:S,samples:b}}function K_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Vn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,R=w*4,M=p.clippingState||null;l.value=M,M=h(g,d,R,f);for(let S=0;S!==R;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=f;R!==v;++R,M+=4)a.copy(u[R]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Lr=4,Z_=6,J_=20,j_=256,to=new ri,mp=new Te,gu=null,xu=0,_u=0,yu=!1,Q_=new D,Bs=new D,Tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Q_}=r;gu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,xu,_u),this._renderer.xr.enabled=yu,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Zn,format:En,colorSpace:ln,depthBuffer:!1},i=gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ey(r)),this._blurMaterial=ny(r,e,t),this._ggxMaterial=ty(r,e,t)}return i}_compileMaterial(e){let t=new _t(new Pt,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(mp),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new es,new en({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(mp),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;Pr(i,M*S,R>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ss||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,to)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Lr?n-g+Lr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Pr(r,m,p,3*v,2*v),i.setRenderTarget(r),i.render(o,to),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Pr(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(o,to)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Lr?i-this._lodMax+Lr:0),d=4*(this._cubeSize-h);Pr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,to)}};function ey(s){let e=[],t=[],n=s,i=s-Lr+1+Z_;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let w=p%3*2/3-1,R=p>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];g.set(M,f*d*p);for(let S=0;S<d;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Bs.set(1,A,b):p===1?Bs.set(-b,1,-A):p===2?Bs.set(-b,A,1):p===3?Bs.set(-1,A,-b):p===4?Bs.set(-b,-1,A):Bs.set(b,A,-1),Bs.toArray(v,(p*d+S)*f)}}let m=new Pt;m.setAttribute("position",new kt(g,f)),m.setAttribute("outputDirection",new kt(v,f)),t.push(new _t(m,null)),n>Lr&&n--}return{lodMeshes:t,sizeLods:e}}function gp(s,e,t){let n=new mn(s,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ty(s,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ny(s,e,t){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function xp(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _p(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new es(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:oi});r.uniforms.tEquirect.value=t;let a=new _t(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=It),new El(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function iy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Pl||f===Ll)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Ec(g.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Pl||f===Ll,v=f===ss||f===Us;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Tc(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let w=d.image;return g&&w&&w.height>0||v&&w&&l(w)?(n===null&&(n=new Tc(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Pl?d.mapping=ss:f===Ll&&(d.mapping=Us),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function sy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ms("WebGLRenderer: "+n+" extension not supported."),i}}}function ry(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let w=f.array;v=f.version;for(let R=0,M=w.length;R<M;R+=3){let S=w[R+0],b=w[R+1],A=w[R+2];d.push(S,b,b,A,A,S)}}else{let w=g.array;v=g.version;for(let R=0,M=w.length/3-1;R<M;R+=3){let S=R+0,b=R+1,A=R+2;d.push(S,b,b,A,A,S)}}let m=new(g.count>=65535?Aa:Ea)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ay(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function oy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ly(s,e,t){let n=new WeakMap,i=new ot;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let M=o.attributes.position.count*R,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*S*4*u),A=new Sa(b,M,S,u);A.type=Tn,A.needsUpdate=!0;let _=R*4;for(let C=0;C<u;C++){let U=m[C],F=p[C],H=w[C],L=M*S*4*C;for(let V=0;V<U.count;V++){let K=V*_;f===!0&&(i.fromBufferAttribute(U,V),b[L+K+0]=i.x,b[L+K+1]=i.y,b[L+K+2]=i.z,b[L+K+3]=0),g===!0&&(i.fromBufferAttribute(F,V),b[L+K+4]=i.x,b[L+K+5]=i.y,b[L+K+6]=i.z,b[L+K+7]=0),v===!0&&(i.fromBufferAttribute(H,V),b[L+K+8]=i.x,b[L+K+9]=i.y,b[L+K+10]=i.z,b[L+K+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ue(M,S)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function cy(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hy={[Gh]:"LINEAR_TONE_MAPPING",[Wh]:"REINHARD_TONE_MAPPING",[Xh]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[qa]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function uy(s,e,t,n,i,r){let a=new mn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pt;c.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let h=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _t(c,h),d=new ri(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,w=[],R=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let b=0;b<w.length;b++){let A=w[b];A.setSize&&A.setSize(M,S)}},this.setEffects=function(M){w=M,R=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new mn(S,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new mn(S,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){let _=w[A];_.setSize&&_.setSize(S,b)}},this.begin=function(M,S){if(v||M.toneMapping===$n&&w.length===0)return!1;if(p=S,S!==null){let b=S.width,A=S.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=$n,!0},this.hasRenderPass=function(){return R},this.end=function(M,S){M.toneMapping=m,v=!0;let b=a,A=o;for(let _=0;_<w.length;_++){let T=w[_];T.enabled!==!1&&(T.render(M,A,b,S),T.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},Xe.getTransfer(f)===st&&(h.defines.SRGB_TRANSFER="");let _=hy[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bp=new zt,Su=new Qi(1,1),kp=new Sa,zp=new fl,Hp=new Da,yp=[],vp=[],Mp=new Float32Array(16),Sp=new Float32Array(9),bp=new Float32Array(4);function Dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=yp[i];if(r===void 0&&(r=new Float32Array(i),yp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cc(s,e){let t=vp[e];t===void 0&&(t=new Int32Array(e),vp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function my(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function gy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;bp.set(n),s.uniformMatrix2fv(this.addr,!1,bp),Vt(t,n)}}function xy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Sp.set(n),s.uniformMatrix3fv(this.addr,!1,Sp),Vt(t,n)}}function _y(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Mp.set(n),s.uniformMatrix4fv(this.addr,!1,Mp),Vt(t,n)}}function yy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function My(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function Sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function by(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function Ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function Ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function Ay(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?Sc:Mc,r=Su):r=Bp,t.setTexture2D(e||r,i)}function Ry(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zp,i)}function Cy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hp,i)}function Iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kp,i)}function Py(s){switch(s){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return wy;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Iy}}function Ly(s,e){s.uniform1fv(this.addr,e)}function Ny(s,e){let t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function Dy(s,e){let t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function Uy(s,e){let t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function Oy(s,e){let t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Fy(s,e){let t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function By(s,e){let t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ky(s,e){s.uniform1iv(this.addr,e)}function zy(s,e){s.uniform2iv(this.addr,e)}function Hy(s,e){s.uniform3iv(this.addr,e)}function Vy(s,e){s.uniform4iv(this.addr,e)}function Gy(s,e){s.uniform1uiv(this.addr,e)}function Wy(s,e){s.uniform2uiv(this.addr,e)}function Xy(s,e){s.uniform3uiv(this.addr,e)}function qy(s,e){s.uniform4uiv(this.addr,e)}function $y(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Su:a=Bp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Yy(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zp,r[a])}function Ky(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hp,r[a])}function Zy(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kp,r[a])}function Jy(s){switch(s){case 5126:return Ly;case 35664:return Ny;case 35665:return Dy;case 35666:return Uy;case 35674:return Oy;case 35675:return Fy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Zy}}var bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Py(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},vu=/(\w+)(\])?(\[|\.)?/g;function wp(s,e){s.seq.push(e),s.map[e.id]=e}function jy(s,e,t){let n=s.name,i=n.length;for(vu.lastIndex=0;;){let r=vu.exec(n),a=vu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wp(t,c===void 0?new bu(o,s,e):new wu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Tu(o),wp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jy(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Tp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Qy=37297,ev=0;function tv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ep=new Fe;function nv(s){Xe._getMatrix(Ep,Xe.workingColorSpace,s);let e=`mat3( ${Ep.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case va:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ap(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tv(s.getShaderSource(e),o)}else return r}function iv(s,e){let t=nv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sv={[Gh]:"Linear",[Wh]:"Reinhard",[Xh]:"Cineon",[qh]:"ACESFilmic",[qa]:"AgX",[Yh]:"Neutral",[$h]:"Custom"};function rv(s,e){let t=sv[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new D;function av(){Xe.getLuminanceCoefficients(wc);let s=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function lv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function io(s){return s!==""}function Rp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(s){return s.replace(hv,dv)}var uv=new Map;function dv(s,e){let t=We[e];if(t===void 0){let n=uv.get(e);if(n!==void 0)t=We[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Eu(t)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(s){return s.replace(fv,pv)}function pv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mv={[Ns]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function gv(s){return mv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xv={[ss]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function _v(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var yv={[Us]:"ENVMAP_MODE_REFRACTION"};function vv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mv={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[qf]:"ENVMAP_BLENDING_MIX",[$f]:"ENVMAP_BLENDING_ADD"};function Sv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mv[s.combine]||"ENVMAP_BLENDING_NONE"}function bv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gv(t),c=_v(t),h=vv(t),u=Sv(t),d=bv(t),f=ov(t),g=lv(r),v=i.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),p.length>0&&(p+=`
`)):(m=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?We.tonemapping_pars_fragment:"",t.toneMapping!==$n?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),a=Eu(a),a=Rp(a,t),a=Cp(a,t),o=Eu(o),o=Rp(o,t),o=Cp(o,t),a=Ip(a),o=Ip(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=w+m+a,M=w+p+o,S=Tp(i,i.VERTEX_SHADER,R),b=Tp(i,i.FRAGMENT_SHADER,M);i.attachShader(v,S),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(U){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(v)||"",H=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",V=F.trim(),K=H.trim(),Z=L.trim(),ie=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,S,b);else{let ee=Ap(i,S,"vertex"),ne=Ap(i,b,"fragment");De("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+ee+`
`+ne)}else V!==""?we("WebGLProgram: Program Info Log:",V):(K===""||Z==="")&&(q=!1);q&&(U.diagnostics={runnable:ie,programLog:V,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(S),i.deleteShader(b),_=new Nr(i,v),T=cv(i,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,Qy)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Tv=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ru(e),t.set(e,n)),n}},Ru=class{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}};function Ev(s){return s===as||s===ja||s===Qa}function Av(s,e,t,n,i,r){let a=new ba,o=new Au,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,U,F,H){let L=U.fog,V=F.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||K,Z),q=ie&&ie.mapping===$a?ie.image.height:null,ee=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=ne!==void 0?ne.length:0,Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let pt,je,tt,$;if(ee){let gt=ci[ee];pt=gt.vertexShader,je=gt.fragmentShader}else{pt=_.vertexShader,je=_.fragmentShader;let gt=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,gt,nt),tt=gt.id,$=nt.id}let Q=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,qe=!!_.map,Bt=!!_.matcap,Ye=!!ie,et=!!_.aoMap,mt=!!_.lightMap,Je=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,Gt=!!_.displacementMap,fn=!!_.emissiveMap,wt=!!_.metalnessMap,Nt=!!_.roughnessMap,N=_.anisotropy>0,Kt=_.clearcoat>0,rt=_.dispersion>0,E=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,z=_.transmission>0,X=N&&!!_.anisotropyMap,se=Kt&&!!_.clearcoatMap,re=Kt&&!!_.clearcoatNormalMap,Y=Kt&&!!_.clearcoatRoughnessMap,j=x&&!!_.iridescenceMap,ae=x&&!!_.iridescenceThicknessMap,Ee=O&&!!_.sheenColorMap,he=O&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ae=!!_.specularColorMap,Ne=!!_.specularIntensityMap,He=z&&!!_.transmissionMap,P=z&&!!_.thicknessMap,le=!!_.gradientMap,J=!!_.alphaMap,ce=_.alphaTest>0,me=!!_.alphaHash,te=!!_.extensions,Ce=$n;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ce=s.toneMapping);let Se={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:pt,fragmentShader:je,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:Bt,envMap:Ye,envMapMode:Ye&&ie.mapping,envMapCubeUVHeight:q,aoMap:et,lightMap:mt,bumpMap:Je,normalMap:St,displacementMap:Gt,emissiveMap:fn,normalMapObjectSpace:St&&_.normalMapType===jf,normalMapTangentSpace:St&&_.normalMapType===vc,packedNormalMap:St&&_.normalMapType===vc&&Ev(_.normalMap.format),metalnessMap:wt,roughnessMap:Nt,anisotropy:N,anisotropyMap:X,clearcoat:Kt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:rt,retroreflection:E,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Ae,specularIntensityMap:Ne,transmission:z,transmissionMap:He,thicknessMap:P,gradientMap:le,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:ce,alphaHash:me,combine:_.combine,mapUv:qe&&g(_.map.channel),aoMapUv:et&&g(_.aoMap.channel),lightMapUv:mt&&g(_.lightMap.channel),bumpMapUv:Je&&g(_.bumpMap.channel),normalMapUv:St&&g(_.normalMap.channel),displacementMapUv:Gt&&g(_.displacementMap.channel),emissiveMapUv:fn&&g(_.emissiveMap.channel),metalnessMapUv:wt&&g(_.metalnessMap.channel),roughnessMapUv:Nt&&g(_.roughnessMap.channel),anisotropyMapUv:X&&g(_.anisotropyMap.channel),clearcoatMapUv:se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(_.sheenRoughnessMap.channel),specularMapUv:oe&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:Ne&&g(_.specularIntensityMap.channel),transmissionMapUv:He&&g(_.transmissionMap.channel),thicknessMapUv:P&&g(_.thicknessMap.channel),alphaMapUv:J&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(St||N),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(qe||J),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:fn&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),w(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let T=f[_.type],C;if(T){let U=ci[T];C=dp.clone(U.uniforms)}else C=_.uniforms;return C}function M(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new wv(s,T,_,i),c.push(C),h.set(T,C)),C}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function Rv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Lp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Np(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let w=s[e];return w===void 0?(w={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},s[e]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=g,w.materialVariant=a(d),w.groupOrder=v,w.renderOrder=d.renderOrder,w.z=m,w.group=p),e++,w}function l(d,f,g,v,m,p,w){w.reversedDepth===!0&&(m=-m);let R=o(d,f,g,v,m,p);g.transmission>0?n.push(R):g.transparent===!0?i.push(R):t.push(R)}function c(d,f,g,v,m,p){let w=o(d,f,g,v,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):t.unshift(w)}function h(d,f){t.length>1&&t.sort(d||Cv),n.length>1&&n.sort(f||Lp),i.length>1&&i.sort(f||Lp)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Iv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Np,s.set(n,[a])):i>=r.length?(a=new Np,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Lv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Nv=0;function Dv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Uv(s){let e=new Pv,t=Lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,R=0,M=0,S=0,b=0,A=0,_=0,T=0,C=0;c.sort(Dv);for(let F=0,H=c.length;F<H;F++){let L=c[F],V=L.color,K=L.intensity,Z=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*K,u+=V.g*K,d+=V.b*K;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],K);C++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=ie;let Le=ee.getViewportCount();for(let Re=0;Re<Le;Re++)n.sunShadowMatrix[v+Re]=ee.getMatrix(Re),n.sunShadowCascade[v+Re]=ee._cascadeData[Re];v+=Le,g++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(K),q.distance=Z,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[w]=q;let ee=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,ee.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[w]=ee.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[w]=ne,n.spotShadowMap[w]=ie,A++}w++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(V).multiplyScalar(K),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=q,R++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=q,p++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(K),q.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[M]=q,M++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==w||U.rectAreaLength!==R||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==A||U.numSpotMaps!==_||U.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=R,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=w,U.rectAreaLength=R,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=A,U.numSpotMaps=_,U.numLightProbes=C,n.version=Nv++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let M=c[w];if(M.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(M.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Dp(s){let e=new Uv(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ov(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Dp(s),e.set(i,[o])):r>=a.length?(o=new Dp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`,kv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],zv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Up=new ke,no=new D,Mu=new D;function Hv(s,e,t){let n=new yr,i=new Ue,r=new Ue,a=new ot,o=new _l,l=new yl,c={},h=t.maxTextureSize,u={[ai]:hn,[hn]:ai,[yn]:yn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Fv,fragmentShader:Bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let p=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Af&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);let T=s.getRenderTarget(),C=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==this.type;H&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=b.length;L<V;L++){let K=b[L],Z=K.shadow;if(Z===void 0){we("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let ie=Z.getFrameExtents();i.multiply(ie),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,Z.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=q,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Er){if(K.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new mn(i.x,i.y,{format:as,type:Zn,minFilter:It,magFilter:It,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Qi(i.x,i.y,Tn),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=ni,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ct,Z.map.depthTexture.magFilter=Ct}else K.isPointLight?(Z.map=new Ec(i.x),Z.map.depthTexture=new gl(i.x,Kn)):(Z.map=new mn(i.x,i.y),Z.map.depthTexture=new Qi(i.x,i.y,Kn)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=ni,this.type===Ns?(Z.map.depthTexture.compareFunction=q?Sc:Mc,Z.map.depthTexture.minFilter=It,Z.map.depthTexture.magFilter=It):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ct,Z.map.depthTexture.magFilter=Ct);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);let ee=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,_);for(let ne=0;ne<ee;ne++){let Le=Z.getCamera(ne);if(K.isPointLight){let Re=Z.camera,pt=Z.matrix,je=K.distance||Re.far;je!==Re.far&&(Re.far=je,Re.updateProjectionMatrix()),no.setFromMatrixPosition(K.matrixWorld),Re.position.copy(no),Mu.copy(Re.position),Mu.add(kv[ne]),Re.up.copy(zv[ne]),Re.lookAt(Mu),Re.updateMatrixWorld(),pt.makeTranslation(-no.x,-no.y,-no.z),Up.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Up,Re.coordinateSystem,Re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(Z.map),s.clear());let Re=Z.getViewport(ne);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),F.viewport(a)}n=Z.getFrustum(ne),M(A,_,Le,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Er&&w(Z,_),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,C,U)};function w(b,A){let _=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new mn(i.x,i.y,{format:as,type:Zn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,_,f,v,null)}function R(b,A,_,T){let C=null,U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)C=U;else if(C=_.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,H=A.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let V=L[H];V===void 0&&(V=C.clone(),L[H]=V,A.addEventListener("dispose",S)),C=V}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Er?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=s.properties.get(C);F.light=_}return C}function M(b,A,_,T,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Er)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let H=e.update(b),L=b.material;if(Array.isArray(L)){let V=H.groups;for(let K=0,Z=V.length;K<Z;K++){let ie=V[K],q=L[ie.materialIndex];if(q&&q.visible){let ee=R(b,q,T,C);b.onBeforeShadow(s,b,A,_,H,ee,ie),s.renderBufferDirect(_,null,H,ee,b,ie),b.onAfterShadow(s,b,A,_,H,ee,ie)}}}else if(L.visible){let V=R(b,L,T,C);b.onBeforeShadow(s,b,A,_,H,V,null),s.renderBufferDirect(_,null,H,V,b,null),b.onAfterShadow(s,b,A,_,H,V,null)}}let F=b.children;for(let H=0,L=F.length;H<L;H++)M(F[H],A,_,T,C)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Vv(s,e){function t(){let P=!1,le=new ot,J=null,ce=new ot(0,0,0,0);return{setMask:function(me){J!==me&&!P&&(s.colorMask(me,me,me,me),J=me)},setLocked:function(me){P=me},setClear:function(me,te,Ce,Se,gt){gt===!0&&(me*=Se,te*=Se,Ce*=Se),le.set(me,te,Ce,Se),ce.equals(le)===!1&&(s.clearColor(me,te,Ce,Se),ce.copy(le))},reset:function(){P=!1,J=null,ce.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,J=null,ce=null,me=null;return{setReversed:function(te){if(le!==te){let Ce=e.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=te;let Se=me;me=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(te){te?Q(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(te){J!==te&&!P&&(s.depthMask(te),J=te)},setFunc:function(te){if(le&&(te=cp[te]),ce!==te){switch(te){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case hr:s.depthFunc(s.LEQUAL);break;case ol:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=te}},setLocked:function(te){P=te},setClear:function(te){me!==te&&(me=te,le&&(te=1-te),s.clearDepth(te))},reset:function(){P=!1,J=null,ce=null,me=null,le=!1}}}function i(){let P=!1,le=null,J=null,ce=null,me=null,te=null,Ce=null,Se=null,gt=null;return{setTest:function(nt){P||(nt?Q(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(nt){le!==nt&&!P&&(s.stencilMask(nt),le=nt)},setFunc:function(nt,Bn,jn){(J!==nt||ce!==Bn||me!==jn)&&(s.stencilFunc(nt,Bn,jn),J=nt,ce=Bn,me=jn)},setOp:function(nt,Bn,jn){(te!==nt||Ce!==Bn||Se!==jn)&&(s.stencilOp(nt,Bn,jn),te=nt,Ce=Bn,Se=jn)},setLocked:function(nt){P=nt},setClear:function(nt){gt!==nt&&(s.clearStencil(nt),gt=nt)},reset:function(){P=!1,le=null,J=null,ce=null,me=null,te=null,Ce=null,Se=null,gt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,w=null,R=null,M=null,S=null,b=null,A=null,_=new Te(0,0,0),T=0,C=!1,U=null,F=null,H=null,L=null,V=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=ie>=2);let ee=null,ne={},Le=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),pt=new ot().fromArray(Le),je=new ot().fromArray(Re);function tt(P,le,J,ce){let me=new Uint8Array(4),te=s.createTexture();s.bindTexture(P,te),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<J;Ce++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return te}let $={};$[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(hr),Je(!1),St(Fh),Q(s.CULL_FACE),et(oi);function Q(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function ye(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Be(P,le){return d[P]!==le?(s.bindFramebuffer(P,le),d[P]=le,P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(P,le){let J=g,ce=!1;if(P){J=f.get(le),J===void 0&&(J=[],f.set(le,J));let me=P.textures;if(J.length!==me.length||J[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Ce=me.length;te<Ce;te++)J[te]=s.COLOR_ATTACHMENT0+te;J.length=me.length,ce=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ce=!0);ce&&s.drawBuffers(J)}function qe(P){return v!==P?(s.useProgram(P),v=P,!0):!1}let Bt={[Ds]:s.FUNC_ADD,[Cf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};Bt[Pf]=s.MIN,Bt[Lf]=s.MAX;let Ye={[Nf]:s.ZERO,[Df]:s.ONE,[Uf]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[Hf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[Ff]:s.DST_ALPHA,[Of]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[zf]:s.ONE_MINUS_DST_COLOR,[Bf]:s.ONE_MINUS_DST_ALPHA,[Vf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Wf]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function et(P,le,J,ce,me,te,Ce,Se,gt,nt){if(P===oi){m===!0&&(ye(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),P!==Rf){if(P!==p||nt!==C){if((w!==Ds||S!==Ds)&&(s.blendEquation(s.FUNC_ADD),w=Ds,S=Ds),nt)switch(P){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case is:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",P);break}else switch(P){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",P);break}R=null,M=null,b=null,A=null,_.set(0,0,0),T=0,p=P,C=nt}return}me=me||le,te=te||J,Ce=Ce||ce,(le!==w||me!==S)&&(s.blendEquationSeparate(Bt[le],Bt[me]),w=le,S=me),(J!==R||ce!==M||te!==b||Ce!==A)&&(s.blendFuncSeparate(Ye[J],Ye[ce],Ye[te],Ye[Ce]),R=J,M=ce,b=te,A=Ce),(Se.equals(_)===!1||gt!==T)&&(s.blendColor(Se.r,Se.g,Se.b,gt),_.copy(Se),T=gt),p=P,C=!1}function mt(P,le){P.side===yn?ye(s.CULL_FACE):Q(s.CULL_FACE);let J=P.side===hn;le&&(J=!J),Je(J),P.blending===ns&&P.transparent===!1?et(oi):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ce=P.stencilWrite;o.setTest(ce),ce&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),fn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(P){U!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),U=P)}function St(P){P!==Tf?(Q(s.CULL_FACE),P!==F&&(P===Fh?s.cullFace(s.BACK):P===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),F=P}function Gt(P){P!==H&&(Z&&s.lineWidth(P),H=P)}function fn(P,le,J){P?(Q(s.POLYGON_OFFSET_FILL),(L!==le||V!==J)&&(L=le,V=J,a.getReversed()&&(le=-le),s.polygonOffset(le,J))):ye(s.POLYGON_OFFSET_FILL)}function wt(P){P?Q(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Nt(P){P===void 0&&(P=s.TEXTURE0+K-1),ee!==P&&(s.activeTexture(P),ee=P)}function N(P,le,J){J===void 0&&(ee===null?J=s.TEXTURE0+K-1:J=ee);let ce=ne[J];ce===void 0&&(ce={type:void 0,texture:void 0},ne[J]=ce),(ce.type!==P||ce.texture!==le)&&(ee!==J&&(s.activeTexture(J),ee=J),s.bindTexture(P,le||$[P]),ce.type=P,ce.texture=le)}function Kt(){let P=ne[ee];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(P){De("WebGLState:",P)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(P){De("WebGLState:",P)}}function x(){try{s.texSubImage2D(...arguments)}catch(P){De("WebGLState:",P)}}function O(){try{s.texSubImage3D(...arguments)}catch(P){De("WebGLState:",P)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(P){De("WebGLState:",P)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(P){De("WebGLState:",P)}}function se(){try{s.texStorage2D(...arguments)}catch(P){De("WebGLState:",P)}}function re(){try{s.texStorage3D(...arguments)}catch(P){De("WebGLState:",P)}}function Y(){try{s.texImage2D(...arguments)}catch(P){De("WebGLState:",P)}}function j(){try{s.texImage3D(...arguments)}catch(P){De("WebGLState:",P)}}function ae(P){return u[P]!==void 0?u[P]:s.getParameter(P)}function Ee(P,le){u[P]!==le&&(s.pixelStorei(P,le),u[P]=le)}function he(P){pt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),pt.copy(P))}function oe(P){je.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),je.copy(P))}function Ae(P,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let ce=J.get(P);ce===void 0&&(ce=s.getUniformBlockIndex(le,P.name),J.set(P,ce))}function Ne(P,le){let ce=c.get(le).get(P);l.get(le)!==ce&&(s.uniformBlockBinding(le,ce,P.__bindingPointIndex),l.set(le,ce))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ne={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,w=null,R=null,M=null,S=null,b=null,A=null,_=new Te(0,0,0),T=0,C=!1,U=null,F=null,H=null,L=null,V=null,pt.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ye,bindFramebuffer:Be,drawBuffers:xe,useProgram:qe,setBlending:et,setMaterial:mt,setFlipSided:Je,setCullFace:St,setLineWidth:Gt,setPolygonOffset:fn,setScissorTest:wt,activeTexture:Nt,bindTexture:N,unbindTexture:Kt,compressedTexImage2D:rt,compressedTexImage3D:E,texImage2D:Y,texImage3D:j,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:Ne,texStorage2D:se,texStorage3D:re,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:he,viewport:oe,reset:He}}function Gv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return g?new OffscreenCanvas(E,x):fr("canvas")}function m(E,x,O){let z=1,X=rt(E);if((X.width>O||X.height>O)&&(z=O/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let se=Math.floor(z*X.width),re=Math.floor(z*X.height);d===void 0&&(d=v(se,re));let Y=x?v(se,re):d;return Y.width=se,Y.height=re,Y.getContext("2d").drawImage(E,0,0,se,re),we("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+se+"x"+re+")."),Y}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function w(E){s.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(E,x,O,z,X,se=!1){if(E!==null){if(s[E]!==void 0)return s[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re;z&&(re=e.get("EXT_texture_norm16"),re||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),O===s.SHORT&&re&&(Y=re.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),O===s.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),O===s.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){let j=se?va:Xe.getTransfer(X);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=j===st?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),O===s.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,x){let O;return E?x===null||x===Kn||x===Cr?O=s.DEPTH24_STENCIL8:x===Tn?O=s.DEPTH32F_STENCIL8:x===Rr&&(O=s.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===Cr?O=s.DEPTH_COMPONENT24:x===Tn?O=s.DEPTH_COMPONENT32F:x===Rr&&(O=s.DEPTH_COMPONENT16),O}function b(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){let x=E.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(E){let x=E.target;x.removeEventListener("dispose",_),U(x)}function T(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,z=f.get(O);if(z){let X=z[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(E),Object.keys(z).length===0&&f.delete(O)}n.remove(E)}function C(E){let x=n.get(E);s.deleteTexture(x.__webglTexture);let O=E.source,z=f.get(O);delete z[x.__cacheKey],a.memory.textures--}function U(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let X=0;X<x.__webglFramebuffer[z].length;X++)s.deleteFramebuffer(x.__webglFramebuffer[z][X]);else s.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)s.deleteFramebuffer(x.__webglFramebuffer[z]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let z=0,X=O.length;z<X;z++){let se=n.get(O[z]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(E)}let F=0;function H(){F=0}function L(){return F}function V(E){F=E}function K(){let E=F;return E>=i.maxTextures&&we("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,E}function Z(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ie(E,x){let O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let z=E.image;if(z===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function q(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){ye(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function ee(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){ye(O,E,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function ne(E,x){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Be(O,E,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}let Le={[Zi]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[ur]:s.MIRRORED_REPEAT},Re={[Ct]:s.NEAREST,[Nl]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},pt={[ep]:s.NEVER,[rp]:s.ALWAYS,[tp]:s.LESS,[Mc]:s.LEQUAL,[np]:s.EQUAL,[Sc]:s.GEQUAL,[ip]:s.GREATER,[sp]:s.NOTEQUAL};function je(E,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===Ar||x.magFilter===Os||x.magFilter===Yn||x.minFilter===It||x.minFilter===Ar||x.minFilter===Os||x.minFilter===Yn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Le[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Le[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Le[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Re[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==Os&&x.minFilter!==Yn||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function tt(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));let z=x.source,X=f.get(z);X===void 0&&(X={},f.set(z,X));let se=Z(x);if(se!==E.__cacheKey){X[se]===void 0&&(X[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[se].usedTimes++;let re=X[E.__cacheKey];re!==void 0&&(X[E.__cacheKey].usedTimes--,re.usedTimes===0&&C(x)),E.__cacheKey=se,E.__webglTexture=X[se].texture}return O}function $(E,x,O){return Math.floor(Math.floor(E/O)/x)}function Q(E,x,O,z){let se=E.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,z,x.data);else{se.sort((Ee,he)=>Ee.start-he.start);let re=0;for(let Ee=1;Ee<se.length;Ee++){let he=se[re],oe=se[Ee],Ae=he.start+he.count,Ne=$(oe.start,x.width,4),He=$(he.start,x.width,4);oe.start<=Ae+1&&Ne===He&&$(oe.start+oe.count-1,x.width,4)===Ne?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,se[re]=oe)}se.length=re+1;let Y=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,he=se.length;Ee<he;Ee++){let oe=se[Ee],Ae=Math.floor(oe.start/4),Ne=Math.ceil(oe.count/4),He=Ae%x.width,P=Math.floor(Ae/x.width),le=Ne,J=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,He),t.pixelStorei(s.UNPACK_SKIP_ROWS,P),t.texSubImage2D(s.TEXTURE_2D,0,He,P,le,J,O,z,x.data)}E.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function ye(E,x,O){let z=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=s.TEXTURE_3D);let X=tt(E,x),se=x.source;t.bindTexture(z,E.__webglTexture,s.TEXTURE0+O);let re=n.get(se);if(se.version!==re.__version||X===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let J=Xe.getPrimaries(Xe.workingColorSpace),ce=x.colorSpace===Di?null:Xe.getPrimaries(x.colorSpace),me=x.colorSpace===Di||J===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,i.maxTextureSize);j=Kt(x,j);let ae=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),he=M(x.internalFormat,ae,Ee,x.normalized,x.colorSpace,x.isVideoTexture);je(z,x);let oe,Ae=x.mipmaps,Ne=x.isVideoTexture!==!0,He=re.__version===void 0||X===!0,P=se.dataReady,le=b(x,j);if(x.isDepthTexture)he=S(x.format===rs,x.type),He&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,he,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,he,j.width,j.height,0,ae,Ee,null));else if(x.isDataTexture)if(Ae.length>0){Ne&&He&&t.texStorage2D(s.TEXTURE_2D,le,he,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)oe=Ae[J],Ne?P&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(s.TEXTURE_2D,J,he,oe.width,oe.height,0,ae,Ee,oe.data);x.generateMipmaps=!1}else Ne?(He&&t.texStorage2D(s.TEXTURE_2D,le,he,j.width,j.height),P&&Q(x,j,ae,Ee)):t.texImage2D(s.TEXTURE_2D,0,he,j.width,j.height,0,ae,Ee,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,he,Ae[0].width,Ae[0].height,j.depth);for(let J=0,ce=Ae.length;J<ce;J++)if(oe=Ae[J],x.format!==En)if(ae!==null)if(Ne){if(P)if(x.layerUpdates.size>0){let me=hu(oe.width,oe.height,x.format,x.type);for(let te of x.layerUpdates){let Ce=oe.data.subarray(te*me/oe.data.BYTES_PER_ELEMENT,(te+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,te,oe.width,oe.height,1,ae,Ce)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,he,oe.width,oe.height,j.depth,0,oe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,j.depth,ae,Ee,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,he,oe.width,oe.height,j.depth,0,ae,Ee,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ne&&He&&t.texStorage2D(s.TEXTURE_2D,le,he,Ae[0].width,Ae[0].height);for(let J=0,ce=Ae.length;J<ce;J++)oe=Ae[J],x.format!==En?ae!==null?Ne?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,he,oe.width,oe.height,0,oe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(s.TEXTURE_2D,J,he,oe.width,oe.height,0,ae,Ee,oe.data)}else if(x.isDataArrayTexture)if(Ne){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,he,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){let J=hu(j.width,j.height,x.format,x.type);for(let ce of x.layerUpdates){let me=j.data.subarray(ce*J/j.data.BYTES_PER_ELEMENT,(ce+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,ae,Ee,me)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Ee,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,j.width,j.height,j.depth,0,ae,Ee,j.data);else if(x.isData3DTexture)Ne?(He&&t.texStorage3D(s.TEXTURE_3D,le,he,j.width,j.height,j.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Ee,j.data)):t.texImage3D(s.TEXTURE_3D,0,he,j.width,j.height,j.depth,0,ae,Ee,j.data);else if(x.isFramebufferTexture){if(He)if(Ne)t.texStorage2D(s.TEXTURE_2D,le,he,j.width,j.height);else{let J=j.width,ce=j.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,he,J,ce,0,ae,Ee,null),J>>=1,ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),u.add(x),J.onpaint=ce=>{let me=ce.changedElements;for(let te of u)me.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let me=s.RGBA,te=s.RGBA,Ce=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,me,te,Ce,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ne&&He){let J=rt(Ae[0]);t.texStorage2D(s.TEXTURE_2D,le,he,J.width,J.height)}for(let J=0,ce=Ae.length;J<ce;J++)oe=Ae[J],Ne?P&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae,Ee,oe):t.texImage2D(s.TEXTURE_2D,J,he,ae,Ee,oe);x.generateMipmaps=!1}else if(Ne){if(He){let J=rt(j);t.texStorage2D(s.TEXTURE_2D,le,he,J.width,J.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Ee,j)}else t.texImage2D(s.TEXTURE_2D,0,he,ae,Ee,j);p(x)&&w(z),re.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Be(E,x,O){if(x.image.length!==6)return;let z=tt(E,x),X=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);let se=n.get(X);if(X.version!==se.__version||z===!0){t.activeTexture(s.TEXTURE0+O);let re=Xe.getPrimaries(Xe.workingColorSpace),Y=x.colorSpace===Di?null:Xe.getPrimaries(x.colorSpace),j=x.colorSpace===Di||re===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!ae&&!Ee?he[te]=m(x.image[te],!0,i.maxCubemapSize):he[te]=Ee?x.image[te].image:x.image[te],he[te]=Kt(x,he[te]);let oe=he[0],Ae=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),He=M(x.internalFormat,Ae,Ne,x.normalized,x.colorSpace),P=x.isVideoTexture!==!0,le=se.__version===void 0||z===!0,J=X.dataReady,ce=b(x,oe);je(s.TEXTURE_CUBE_MAP,x);let me;if(ae){P&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,He,oe.width,oe.height);for(let te=0;te<6;te++){me=he[te].mipmaps;for(let Ce=0;Ce<me.length;Ce++){let Se=me[Ce];x.format!==En?Ae!==null?P?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,He,Se.width,Se.height,0,Se.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Se.width,Se.height,Ae,Ne,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,He,Se.width,Se.height,0,Ae,Ne,Se.data)}}}else{if(me=x.mipmaps,P&&le){me.length>0&&ce++;let te=rt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,He,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){P?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ae,Ne,he[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,he[te].width,he[te].height,0,Ae,Ne,he[te].data);for(let Ce=0;Ce<me.length;Ce++){let gt=me[Ce].image[te].image;P?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,gt.width,gt.height,Ae,Ne,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,He,gt.width,gt.height,0,Ae,Ne,gt.data)}}else{P?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,Ne,he[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Ae,Ne,he[te]);for(let Ce=0;Ce<me.length;Ce++){let Se=me[Ce];P?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,Ae,Ne,Se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,He,Ae,Ne,Se.image[te])}}}p(x)&&w(s.TEXTURE_CUBE_MAP),se.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xe(E,x,O,z,X,se){let re=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),j=M(O.internalFormat,re,Y,O.normalized,O.colorSpace),ae=n.get(x),Ee=n.get(O);if(Ee.__renderTarget=x,!ae.__hasExternalTextures){let he=Math.max(1,x.width>>se),oe=Math.max(1,x.height>>se);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,se,j,he,oe,x.depth,0,re,Y,null):t.texImage2D(X,se,j,he,oe,0,re,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Nt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,X,Ee.__webglTexture,0,wt(x)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,X,Ee.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(E,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){let z=x.depthTexture,X=z&&z.isDepthTexture?z.type:null,se=S(x.stencilBuffer,X),re=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Nt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(x),se,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(x),se,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,se,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,E)}else{let z=x.textures;for(let X=0;X<z.length;X++){let se=z[X],re=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),j=M(se.internalFormat,re,Y,se.normalized,se.colorSpace);Nt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(x),j,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(E,x,O){let z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),je(s.TEXTURE_CUBE_MAP,x.depthTexture);let ae=r.convert(x.depthTexture.format),Ee=r.convert(x.depthTexture.type),he;x.depthTexture.format===ni?he=s.DEPTH_COMPONENT24:x.depthTexture.format===rs&&(he=s.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,x.width,x.height,0,ae,Ee,null)}}else ie(x.depthTexture,0);let se=X.__webglTexture,re=wt(x),Y=z?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,j=x.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ni)Nt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,se,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,se,0);else if(x.depthTexture.format===rs)Nt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,se,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let z=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=z}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Bt(x.__webglFramebuffer[z],E,z);else{let z=E.texture.mipmaps;z&&z.length>0?Bt(x.__webglFramebuffer[0],E,0):Bt(x.__webglFramebuffer,E,0)}else if(O){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=s.createRenderbuffer(),qe(x.__webglDepthbuffer[z],E,!1);else{let X=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,se)}}else{let z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),qe(x.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(E,x,O){let z=n.get(E);x!==void 0&&xe(z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ye(E)}function mt(E){let x=E.texture,O=n.get(E),z=n.get(x);E.addEventListener("dispose",_);let X=E.textures,se=E.isWebGLCubeRenderTarget===!0,re=X.length>1;if(re||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=x.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let j=0;j<x.mipmaps.length;j++)O.__webglFramebuffer[Y][j]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(re)for(let Y=0,j=X.length;Y<j;Y++){let ae=n.get(X[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Nt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let j=X[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let ae=r.convert(j.format,j.colorSpace),Ee=r.convert(j.type),he=M(j.internalFormat,ae,Ee,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),oe=wt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),je(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)xe(O.__webglFramebuffer[Y][j],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else xe(O.__webglFramebuffer[Y],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,j=X.length;Y<j;Y++){let ae=X[Y],Ee=n.get(ae),he=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),je(he,ae),xe(O.__webglFramebuffer,E,ae,s.COLOR_ATTACHMENT0+Y,he,0),p(ae)&&w(he)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),je(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)xe(O.__webglFramebuffer[j],E,x,s.COLOR_ATTACHMENT0,Y,j);else xe(O.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,Y,0);p(x)&&w(Y),t.unbindTexture()}E.depthBuffer&&Ye(E)}function Je(E){let x=E.textures;for(let O=0,z=x.length;O<z;O++){let X=x[O];if(p(X)){let se=R(E),re=n.get(X).__webglTexture;t.bindTexture(se,re),w(se),t.unbindTexture()}}}let St=[],Gt=[];function fn(E){if(E.samples>0){if(Nt(E)===!1){let x=E.textures,O=E.width,z=E.height,X=s.COLOR_BUFFER_BIT,se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(E),Y=x.length>1;if(Y)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let j=E.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ee=n.get(x[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,O,z,0,0,O,z,X,s.NEAREST),l===!0&&(St.length=0,Gt.length=0,St.push(s.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(St.push(se),Gt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ee=n.get(x[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function wt(E){return Math.min(i.maxSamples,E.samples)}function Nt(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Kt(E,x){let O=E.colorSpace,z=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ln&&O!==Di&&(Xe.getTransfer(O)===st?(z!==En||X!==vn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",O)),x}function rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=et,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wv(s,e){function t(n,i=Di){let r,a=Xe.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===Ul)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return s.BYTE;if(n===Jh)return s.SHORT;if(n===Rr)return s.UNSIGNED_SHORT;if(n===Dl)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Zn)return s.HALF_FLOAT;if(n===eu)return s.ALPHA;if(n===tu)return s.RGB;if(n===En)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===rs)return s.DEPTH_STENCIL;if(n===Fl)return s.RED;if(n===Bl)return s.RED_INTEGER;if(n===as)return s.RG;if(n===kl)return s.RG_INTEGER;if(n===zl)return s.RGBA_INTEGER;if(n===Ya||n===Ka||n===Za||n===Ja)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===$l||n===Yl||n===Kl||n===ja||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Qa||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`,Cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends qn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Cu,p={},w=t.getContextAttributes(),R=null,M=null,S=[],b=[],A=new Ue,_=null,T=null,C=new Xt;C.viewport=new ot;let U=new Xt;U.viewport=new ot;let F=[C,U],H=new Al,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=S[$];return Q===void 0&&(Q=new gr,S[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=S[$];return Q===void 0&&(Q=new gr,S[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=S[$];return Q===void 0&&(Q=new gr,S[$]=Q),Q.getHandSpace()};function K($){let Q=b.indexOf($.inputSource);if(Q===-1)return;let ye=S[Q];ye!==void 0&&(ye.update($.inputSource,$.frame,c||a),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ie);for(let $=0;$<S.length;$++){let Q=b[$];Q!==null&&(b[$]=null,S[$].disconnect(Q))}L=null,V=null,m.reset();for(let $ in p)delete p[$];if(e.setRenderTarget(R),f=null,d=null,u=null,i=null,M=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(R=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,xe=null;w.depth&&(xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=w.stencil?rs:ni,Be=w.stencil?Cr:Kn);let qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new mn(d.textureWidth,d.textureHeight,{format:En,type:vn,depthTexture:new Qi(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new mn(f.framebufferWidth,f.framebufferHeight,{format:En,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie($){for(let Q=0;Q<$.removed.length;Q++){let ye=$.removed[Q],Be=b.indexOf(ye);Be>=0&&(b[Be]=null,S[Be].disconnect(ye))}for(let Q=0;Q<$.added.length;Q++){let ye=$.added[Q],Be=b.indexOf(ye);if(Be===-1){for(let qe=0;qe<S.length;qe++)if(qe>=b.length){b.push(ye),Be=qe;break}else if(b[qe]===null){b[qe]=ye,Be=qe;break}if(Be===-1)break}let xe=S[Be];xe&&xe.connect(ye)}}let q=new D,ee=new D;function ne($,Q,ye){q.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);let Be=q.distanceTo(ee),xe=Q.projectionMatrix.elements,qe=ye.projectionMatrix.elements,Bt=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),et=(xe[9]+1)/xe[5],mt=(xe[9]-1)/xe[5],Je=(xe[8]-1)/xe[0],St=(qe[8]+1)/qe[0],Gt=Bt*Je,fn=Bt*St,wt=Be/(-Je+St),Nt=wt*-Je;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let N=Bt+wt,Kt=Ye+wt,rt=Gt-Nt,E=fn+(Be-Nt),x=et*Ye/Kt*N,O=mt*Ye/Kt*N;$.projectionMatrix.makePerspective(rt,E,x,O,N,Kt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Le($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ye=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),H.near=U.near=C.near=Q,H.far=U.far=C.far=ye,(L!==H.near||V!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,V=H.far),H.layers.mask=$.layers.mask|6,C.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Be=$.parent,xe=H.cameras;Le(H,Be);for(let qe=0;qe<xe.length;qe++)Le(xe[qe],Be);xe.length===2?ne(H,C,U):H.projectionMatrix.copy(C.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Re($,H,Be)};function Re($,Q,ye){ye===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ws*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return p[$]};let pt=null;function je($,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Be=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Be=!0);for(let Ye=0;Ye<ye.length;Ye++){let et=ye[Ye],mt=null;if(f!==null)mt=f.getViewport(et);else{let St=u.getViewSubImage(d,et);mt=St.viewport,Ye===0&&(e.setRenderTargetTextures(M,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(M))}let Je=F[Ye];Je===void 0&&(Je=new Xt,Je.layers.enable(Ye),Je.viewport=new ot,F[Ye]=Je),Je.matrix.fromArray(et.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(et.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),Ye===0&&(H.matrix.copy(Je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Be===!0&&H.cameras.push(Je)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ye=u.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,i.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<ye.length;Ye++){let et=ye[Ye].camera;if(et){let mt=p[et];mt||(mt=new Ua,p[et]=mt);let Je=u.getCameraImage(et);mt.sourceTexture=Je}}}}for(let ye=0;ye<S.length;ye++){let Be=b[ye],xe=S[ye];Be!==null&&xe!==void 0&&xe.update(Be,Q,c||a)}pt&&pt($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let tt=new Op;tt.setAnimationLoop(je),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},$v=new ke,Vp=new Fe;Vp.set(-1,0,0,0,1,0,0,0,1);function Yv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),R=w.envMap,M=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let b=S.program;n.uniformBlockBinding(M,b)}function c(M,S){let b=i[M.id];b===void 0&&(m(M),b=h(M),i[M.id]=b,M.addEventListener("dispose",w));let A=S.program;n.updateUBOMapping(M,A);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let S=u();M.__bindingPointIndex=S;let b=s.createBuffer(),A=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],b=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=b.length;_<T;_++){let C=b[_];if(Array.isArray(C))for(let U=0,F=C.length;U<F;U++)f(C[U],_,U,A);else f(C,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,b,A){if(v(M,S,b,A)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let U=0;U<T.length;U++){let F=T[U],H=p(F);g(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function g(M,S,b){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,b)}function v(M,S,b,A){let _=M.value,T=S+"_"+b;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){let S=M.uniforms,b=0,A=16;for(let T=0,C=S.length;T<C;T++){let U=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,H=U.length;F<H;F++){let L=U[F],V=Array.isArray(L.value)?L.value:[L.value];for(let K=0,Z=V.length;K<Z;K++){let ie=V[K],q=p(ie),ee=b%A,ne=ee%q.boundary,Le=ee+ne;b+=ne,Le!==0&&A-Le<q.storage&&(b+=A-Le),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=q.storage}}}let _=b%A;return _>0&&(b+=A-_),M.__size=b,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),S}function w(M){let S=M.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function R(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:R}}var Zv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Jv(){return li===null&&(li=new _r(Zv,16,16,as,Zn),li.name="DFG_LUT",li.minFilter=It,li.magFilter=It,li.wrapS=Pn,li.wrapT=Pn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Ac=class{constructor(e={}){let{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([zl,kl,Bl]),p=new Set([vn,Kn,Rr,Cr,Ul,Ol]),w=new Uint32Array(4),R=new Int32Array(4),M=new D,S=null,b=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,F=null,H=null,L=null,V=null;this._outputColorSpace=Et;let K=0,Z=0,ie=null,q=-1,ee=null,ne=new ot,Le=new ot,Re=null,pt=new Te(0),je=0,tt=t.width,$=t.height,Q=1,ye=null,Be=null,xe=new ot(0,0,tt,$),qe=new ot(0,0,tt,$),Bt=!1,Ye=new yr,et=!1,mt=!1,Je=new ke,St=new D,Gt=new ot,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Nt(){return ie===null?Q:1}let N=n;function Kt(y,I){return t.getContext(y,I)}let rt,E,x,O,z,X,se,re,Y,j,ae,Ee,he,oe,Ae,Ne,He,P,le,J,ce,me,te;try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),N===null){let I="webgl2";if(N=Kt(I,y),N===null)throw Kt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(y){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),De("WebGLRenderer: "+y.message),y}function Ce(){rt=new sy(N),rt.init(),ce=new Wv(N,rt),E=new Y_(N,rt,e,ce),x=new Vv(N,rt),E.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),H=N.createFramebuffer(),L=N.createFramebuffer(),V=N.createFramebuffer(),O=new oy(N),z=new Rv,X=new Gv(N,rt,x,z,E,ce,O),se=new iy(C),re=new c0(N),me=new q_(N,re),Y=new ry(N,re,O,me),j=new cy(N,Y,re,me,O),P=new ly(N,E,X),Ae=new K_(z),ae=new Av(C,se,rt,E,me,Ae),Ee=new Yv(C,z),he=new Iv,oe=new Ov(rt),He=new X_(C,se,x,j,g,l),Ne=new Hv(C,j,E),te=new Kv(N,O,E,x),le=new $_(N,rt,O),J=new ay(N,rt,O),O.programs=ae.programs,C.capabilities=E,C.extensions=rt,C.properties=z,C.renderLists=he,C.shadowMap=Ne,C.state=x,C.info=O}v!==vn&&(T=new uy(v,t.width,t.height,o,i,r));let Se=new Iu(C,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(tt,$,!1))},this.getSize=function(y){return y.set(tt,$)},this.setSize=function(y,I,G=!0){if(Se.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=y,$=I,t.width=Math.floor(y*Q),t.height=Math.floor(I*Q),G===!0&&(t.style.width=y+"px",t.style.height=I+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(tt*Q,$*Q).floor()},this.setDrawingBufferSize=function(y,I,G){tt=y,$=I,Q=G,t.width=Math.floor(y*G),t.height=Math.floor(I*G),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===vn){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,I,G,B){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,I,G,B),x.viewport(ne.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(qe)},this.setScissor=function(y,I,G,B){y.isVector4?qe.set(y.x,y.y,y.z,y.w):qe.set(y,I,G,B),x.scissor(Le.copy(qe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(y){x.setScissorTest(Bt=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Be=y},this.getClearColor=function(y){return y.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,G=!0){let B=0;if(y){let k=!1;if(ie!==null){let fe=ie.texture.format;k=m.has(fe)}if(k){let fe=ie.texture.type,_e=p.has(fe),de=He.getClearColor(),ve=He.getClearAlpha(),be=de.r,Ge=de.g,Ke=de.b;_e?(w[0]=be,w[1]=Ge,w[2]=Ke,w[3]=ve,N.clearBufferuiv(N.COLOR,0,w)):(R[0]=be,R[1]=Ge,R[2]=Ke,R[3]=ve,N.clearBufferiv(N.COLOR,0,R))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),He.dispose(),he.dispose(),oe.dispose(),z.dispose(),se.dispose(),j.dispose(),me.dispose(),te.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Id),Se.removeEventListener("sessionend",Pd),ps.stop()};function gt(y){y.preventDefault(),Ma("WebGLRenderer: Context Lost."),U=!0}function nt(){Ma("WebGLRenderer: Context Restored."),U=!1;let y=O.autoReset,I=Ne.enabled,G=Ne.autoUpdate,B=Ne.needsUpdate,k=Ne.type;Ce(),O.autoReset=y,Ne.enabled=I,Ne.autoUpdate=G,Ne.needsUpdate=B,Ne.type=k}function Bn(y){De("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jn(y){let I=y.target;I.removeEventListener("dispose",jn),Jm(I)}function Jm(y){jm(y),z.remove(y)}function jm(y){let I=z.get(y).programs;I!==void 0&&(I.forEach(function(G){ae.releaseProgram(G)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,G,B,k,fe){I===null&&(I=fn);let _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,de=tg(y,I,G,B,k);x.setMaterial(B,_e);let ve=G.index,be=1;if(B.wireframe===!0){if(ve=Y.getWireframeAttribute(G),ve===void 0)return;be=2}let Ge=G.drawRange,Ke=G.attributes.position,Me=Ge.start*be,it=(Ge.start+Ge.count)*be;fe!==null&&(Me=Math.max(Me,fe.start*be),it=Math.min(it,(fe.start+fe.count)*be)),ve!==null?(Me=Math.max(Me,0),it=Math.min(it,ve.count)):Ke!=null&&(Me=Math.max(Me,0),it=Math.min(it,Ke.count));let Dt=it-Me;if(Dt<0||Dt===1/0)return;me.setup(k,B,de,G,ve);let yt,ht=le;if(ve!==null&&(yt=re.get(ve),ht=J,ht.setIndex(yt)),k.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Nt()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(k.isLine){let Zt=B.linewidth;Zt===void 0&&(Zt=1),x.setLineWidth(Zt*Nt()),k.isLineSegments?ht.setMode(N.LINES):k.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else k.isPoints?ht.setMode(N.POINTS):k.isSprite&&ht.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Zt=k._multiDrawStarts,ge=k._multiDrawCounts,an=k._multiDrawCount,Qe=ve?re.get(ve).bytesPerElement:1,Cn=z.get(B).currentProgram.getUniforms();for(let Qn=0;Qn<an;Qn++)Cn.setValue(N,"_gl_DrawID",Qn),ht.render(Zt[Qn]/Qe,ge[Qn])}else if(k.isInstancedMesh)ht.renderInstances(Me,Dt,k.count);else if(G.isInstancedBufferGeometry){let Zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,Zt);ht.renderInstances(Me,Dt,ge)}else ht.render(Me,Dt)};function Cd(y,I,G,B){F!==null&&y.isNodeMaterial&&F.setObject(B,y),et===!0&&Ae.setState(y,G,!1),y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,Eo(y,I,B),y.side=ai,y.needsUpdate=!0,Eo(y,I,B),y.side=yn):Eo(y,I,B)}this.compile=function(y,I,G=null){G===null&&(G=y),F!==null&&F.renderStart(y,I,G),b=oe.get(G),b.init(I),_.push(b),G.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),y!==G&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),mt=this.localClippingEnabled,et=Ae.init(this.clippingPlanes,mt),et===!0&&Ae.setGlobalState(this.clippingPlanes,I),F!==null&&Ne.render(b.state.shadowsArray,G,I);let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];Cd(de,G,I,k),B.add(de)}else Cd(fe,G,I,k),B.add(fe)}),b=_.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(y,I,G=null){let B=this.compile(y,I,G);return new Promise(k=>{function fe(){if(B.forEach(function(_e){let ve=z.get(_e).currentProgram;(ve===void 0||ve.isReady())&&B.delete(_e)}),B.size===0){k(y);return}setTimeout(fe,10)}rt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let th=null;function Qm(y){th&&th(y)}function Id(){ps.stop()}function Pd(){ps.start()}let ps=new Op;ps.setAnimationLoop(Qm),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(y){th=y,Se.setAnimationLoop(y),y===null?ps.stop():ps.start()},Se.addEventListener("sessionstart",Id),Se.addEventListener("sessionend",Pd),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(y,I);let G=Se.enabled===!0&&Se.isPresenting===!0,B=T!==null&&(ie===null||G)&&T.begin(C,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(I),I=Se.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,ie),b=oe.get(y,_.length),b.init(I),b.state.textureUnits=X.getTextureUnits(),_.push(b),Je.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ye.setFromProjectionMatrix(Je,Wn,I.reversedDepth),mt=this.localClippingEnabled,et=Ae.init(this.clippingPlanes,mt),S=he.get(y,A.length),S.init(),A.push(S),Se.enabled===!0&&Se.isPresenting===!0){let _e=C.xr.getDepthSensingMesh();_e!==null&&nh(_e,I,-1/0,C.sortObjects)}nh(y,I,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(ye,Be),wt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,wt&&He.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ae.beginShadows();let k=b.state.shadowsArray;if(Ne.render(k,y,I),et===!0&&Ae.endShadows(),(B&&T.hasRenderPass())===!1){let _e=S.opaque,de=S.transmissive;if(b.setupLights(),I.isArrayCamera){let ve=I.cameras;if(de.length>0)for(let be=0,Ge=ve.length;be<Ge;be++){let Ke=ve[be];Nd(_e,de,y,Ke)}wt&&He.render(y);for(let be=0,Ge=ve.length;be<Ge;be++){let Ke=ve[be];Ld(S,y,Ke,Ke.viewport)}}else de.length>0&&Nd(_e,de,y,I),wt&&He.render(y),Ld(S,y,I)}ie!==null&&Z===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),B&&T.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),me.resetDefaultState(),q=-1,ee=null,_.pop(),_.length>0?(b=_[_.length-1],X.setTextureUnits(b.state.textureUnits),et===!0&&Ae.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,F!==null&&F.renderEnd()};function nh(y,I,G,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ye)){B&&Gt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Je);let _e=j.update(y),de=y.material;de.visible&&S.push(y,_e,de,G,Gt.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ye))){let _e=j.update(y),de=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Gt.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Gt.copy(_e.boundingSphere.center)),Gt.applyMatrix4(y.matrixWorld).applyMatrix4(Je)),Array.isArray(de)){let ve=_e.groups;for(let be=0,Ge=ve.length;be<Ge;be++){let Ke=ve[be],Me=de[Ke.materialIndex];Me&&Me.visible&&S.push(y,_e,Me,G,Gt.z,Ke,I)}}else de.visible&&S.push(y,_e,de,G,Gt.z,null,I)}}let fe=y.children;for(let _e=0,de=fe.length;_e<de;_e++)nh(fe[_e],I,G,B)}function Ld(y,I,G,B){let{opaque:k,transmissive:fe,transparent:_e}=y;b.setupLightsView(G),et===!0&&Ae.setGlobalState(C.clippingPlanes,G),B&&x.viewport(ne.copy(B)),k.length>0&&To(k,I,G),fe.length>0&&To(fe,I,G),_e.length>0&&To(_e,I,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nd(y,I,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let Me=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:Me?Zn:vn,minFilter:Yn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let fe=b.state.transmissionRenderTarget[B.id],_e=B.viewport||ne;fe.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ve=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(pt),je=C.getClearAlpha(),je<1&&C.setClearColor(16777215,.5),C.clear(),wt&&He.render(G);let Ge=C.toneMapping;C.toneMapping=$n;let Ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),et===!0&&Ae.setGlobalState(C.clippingPlanes,B),To(y,G,B),X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let it=0,Dt=I.length;it<Dt;it++){let yt=I[it],{object:ht,geometry:Zt,material:ge,group:an}=yt;if(ge.side===yn&&ht.layers.test(B.layers)){let Qe=ge.side;ge.side=hn,ge.needsUpdate=!0,Dd(ht,G,B,Zt,ge,an),ge.side=Qe,ge.needsUpdate=!0,Me=!0}}Me===!0&&(X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,ve,be),C.setClearColor(pt,je),Ke!==void 0&&(B.viewport=Ke),C.toneMapping=Ge}function To(y,I,G){let B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,fe=y.length;k<fe;k++){let _e=y[k],{object:de,geometry:ve,group:be}=_e,Ge=_e.material;Ge.allowOverride===!0&&B!==null&&(Ge=B),de.layers.test(G.layers)&&Dd(de,I,G,ve,Ge,be)}}function Dd(y,I,G,B,k,fe){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(C,I,G,B,k,fe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(C,I,G,B,y,fe),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,C.renderBufferDirect(G,I,B,k,y,fe),k.side=ai,k.needsUpdate=!0,C.renderBufferDirect(G,I,B,k,y,fe),k.side=yn):C.renderBufferDirect(G,I,B,k,y,fe),y.onAfterRender(C,I,G,B,k,fe)}function Eo(y,I,G){I.isScene!==!0&&(I=fn);let B=z.get(y),k=b.state.lights,fe=b.state.shadowsArray,_e=k.state.version,de=ae.getParameters(y,k.state,fe,I,G,b.state.lightProbeGridArray),ve=ae.getProgramCacheKey(de),be=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=se.get(y.envMap||B.environment,Ge),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",jn),be=new Map,B.programs=be);let Ke=be.get(ve);if(Ke!==void 0){if(B.currentProgram===Ke&&B.lightsStateVersion===_e)return Od(y,de),Ke}else de.uniforms=ae.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,G,de),y.onBeforeCompile(de,C),Ke=ae.acquireProgram(de,ve),be.set(ve,Ke),B.uniforms=de.uniforms;let Me=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=Ae.uniform),Od(y,de),B.needsLights=ig(y),B.lightsStateVersion=_e,B.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ke,B.uniformsList=null,Ke}function Ud(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Nr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Od(y,I){let G=z.get(y);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function eg(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let G=0,B=y.length;G<B;G++){let k=y[G];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function tg(y,I,G,B,k){I.isScene!==!0&&(I=fn),X.resetTextureUnits();let fe=I.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,de=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,be=se.get(B.envMap||_e,ve),Ge=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ke=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,Dt=!!G.morphAttributes.color,yt=$n;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(yt=C.toneMapping);let ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=ht!==void 0?ht.length:0,ge=z.get(B),an=b.state.lights;if(et===!0&&(mt===!0||y!==ee)){let xt=y===ee&&B.id===q;Ae.setState(B,y,xt)}let Qe=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==an.state.version||ge.outputColorSpace!==de||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==be||B.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Ge||ge.vertexTangents!==Ke||ge.morphTargets!==Me||ge.morphNormals!==it||ge.morphColors!==Dt||ge.toneMapping!==yt||ge.morphTargetsCount!==Zt||!!ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=B.version);let Cn=ge.currentProgram;Qe===!0&&(Cn=Eo(B,I,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Cn,ge));let Qn=!1,Hi=!1,Gs=!1,lt=Cn.getUniforms(),Rt=ge.uniforms;if(x.useProgram(Cn.program)&&(Qn=!0,Hi=!0,Gs=!0),B.id!==q&&(q=B.id,Hi=!0),ge.needsLights){let xt=eg(b.state.lightProbeGridArray,k);ge.lightProbeGrid!==xt&&(ge.lightProbeGrid=xt,Hi=!0)}if(Qn||ee!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),lt.setValue(N,"projectionMatrix",y.projectionMatrix),lt.setValue(N,"viewMatrix",y.matrixWorldInverse);let Gi=lt.map.cameraPosition;Gi!==void 0&&Gi.setValue(N,St.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,Hi=!0,Gs=!0)}if(ge.needsLights&&(an.state.sunShadowMap.length>0&&lt.setValue(N,"sunShadowMap",an.state.sunShadowMap,X),an.state.directionalShadowMap.length>0&&lt.setValue(N,"directionalShadowMap",an.state.directionalShadowMap,X),an.state.spotShadowMap.length>0&&lt.setValue(N,"spotShadowMap",an.state.spotShadowMap,X),an.state.pointShadowMap.length>0&&lt.setValue(N,"pointShadowMap",an.state.pointShadowMap,X)),k.isSkinnedMesh){lt.setOptional(N,k,"bindMatrix"),lt.setOptional(N,k,"bindMatrixInverse");let xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),lt.setValue(N,"boneTexture",xt.boneTexture,X))}k.isBatchedMesh&&(lt.setOptional(N,k,"batchingTexture"),lt.setValue(N,"batchingTexture",k._matricesTexture,X),lt.setOptional(N,k,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",k._indirectTexture,X),lt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",k._colorsTexture,X));let Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&P.update(k,G,Cn),(Hi||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,lt.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Rt.envMapIntensity.value=I.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Jv()),Hi){if(lt.setValue(N,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&ng(Rt,Gs),fe&&B.fog===!0&&Ee.refreshFogUniforms(Rt,fe),Ee.refreshMaterialUniforms(Rt,B,Q,$,b.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){let xt=ge.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}Nr.upload(N,Ud(ge),Rt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Nr.upload(N,Ud(ge),Rt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(N,"center",k.center),lt.setValue(N,"modelViewMatrix",k.modelViewMatrix),lt.setValue(N,"normalMatrix",k.normalMatrix),lt.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let xt=B.uniformsGroups;for(let Gi=0,Ws=xt.length;Gi<Ws;Gi++){let Bd=xt[Gi];te.update(Bd,Cn),te.bind(Bd,Cn)}}return Cn}function ng(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ig(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,I,G){let B=z.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=I,z.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let G=z.get(y);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,G=0){ie=y,K=I,Z=G;let B=null,k=!1,fe=!1;if(y){let de=z.get(y);if(de.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(y.viewport),Le.copy(y.scissor),Re=y.scissorTest,x.viewport(ne),x.scissor(Le),x.setScissorTest(Re),q=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(y);else if(de.__hasExternalTextures)X.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ge=y.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&z.has(Ge)&&(y.width!==Ge.image.width||y.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let be=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[I])?B=be[I][G]:B=be[I],k=!0):y.samples>0&&X.useMultisampledRTT(y)===!1?B=z.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?B=be[G]:B=be,ne.copy(y.viewport),Le.copy(y.scissor),Re=y.scissorTest}else ne.copy(xe).multiplyScalar(Q).floor(),Le.copy(qe).multiplyScalar(Q).floor(),Re=Bt;if(G!==0&&(B=H),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(y,B),x.viewport(ne),x.scissor(Le),x.setScissorTest(Re),k){let de=z.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,G)}else if(fe){let de=I;for(let ve=0;ve<y.textures.length;ve++){let be=z.get(y.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,be.__webglTexture,G,de)}}else if(y!==null&&G!==0){let de=z.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,G)}q=-1};function Fd(y){let I=z.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=E.textureFormatReadable(y.format),I.__typeReadable=E.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,G,B,k,fe,_e,de=0){if(!(y&&y.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){x.bindFramebuffer(N.FRAMEBUFFER,ve);try{let be=y.textures[de],Ge=be.format,Ke=be.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);let Me=Fd(be);if(Me.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&G>=0&&G<=y.height-k&&N.readPixels(I,G,B,k,ce.convert(Ge),ce.convert(Ke),fe)}finally{let be=ie!==null?z.get(ie).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,I,G,B,k,fe,_e,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(I>=0&&I<=y.width-B&&G>=0&&G<=y.height-k){x.bindFramebuffer(N.FRAMEBUFFER,ve);let be=y.textures[de],Ge=be.format,Ke=be.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);let Me=Fd(be);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(I,G,B,k,ce.convert(Ge),ce.convert(Ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Dt=ie!==null?z.get(ie).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Dt);let yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lp(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(it),N.deleteSync(yt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,G=0){let B=Math.pow(2,-G),k=Math.floor(y.image.width*B),fe=Math.floor(y.image.height*B),_e=I!==null?I.x:0,de=I!==null?I.y:0;X.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,_e,de,k,fe),x.unbindTexture()},this.copyTextureToTexture=function(y,I,G=null,B=null,k=0,fe=0){let _e,de,ve,be,Ge,Ke,Me,it,Dt,yt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(G!==null)_e=G.max.x-G.min.x,de=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Ge=G.min.y,Ke=G.isBox3?G.min.z:0;else{let Rt=Math.pow(2,-k);_e=Math.floor(yt.width*Rt),de=Math.floor(yt.height*Rt),y.isDataArrayTexture?ve=yt.depth:y.isData3DTexture?ve=Math.floor(yt.depth*Rt):ve=1,be=0,Ge=0,Ke=0}B!==null?(Me=B.x,it=B.y,Dt=B.z):(Me=0,it=0,Dt=0);let ht=ce.convert(I.format),Zt=ce.convert(I.type),ge;I.isData3DTexture?(X.setTexture3D(I,0),ge=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(X.setTexture2DArray(I,0),ge=N.TEXTURE_2D_ARRAY):(X.setTexture2D(I,0),ge=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let an=x.getParameter(N.UNPACK_ROW_LENGTH),Qe=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=x.getParameter(N.UNPACK_SKIP_PIXELS),Qn=x.getParameter(N.UNPACK_SKIP_ROWS),Hi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,be),x.pixelStorei(N.UNPACK_SKIP_ROWS,Ge),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);let Gs=y.isDataArrayTexture||y.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Rt=z.get(y),Vi=z.get(I),xt=z.get(Rt.__renderTarget),Gi=z.get(Vi.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ws=0;Ws<ve;Ws++)Gs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(y).__webglTexture,k,Ke+Ws),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(I).__webglTexture,fe,Dt+Ws)),N.blitFramebuffer(be,Ge,_e,de,Me,it,_e,de,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||z.has(y)){let Rt=z.get(y),Vi=z.get(I);x.bindFramebuffer(N.READ_FRAMEBUFFER,L),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let xt=0;xt<ve;xt++)Gs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,k,Ke+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,k),lt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vi.__webglTexture,fe,Dt+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vi.__webglTexture,fe),k!==0?N.blitFramebuffer(be,Ge,_e,de,Me,it,_e,de,N.COLOR_BUFFER_BIT,N.NEAREST):lt?N.copyTexSubImage3D(ge,fe,Me,it,Dt+xt,be,Ge,_e,de):N.copyTexSubImage2D(ge,fe,Me,it,be,Ge,_e,de);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(ge,fe,Me,it,Dt,_e,de,ve,ht,Zt,yt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ge,fe,Me,it,Dt,_e,de,ve,ht,yt.data):N.texSubImage3D(ge,fe,Me,it,Dt,_e,de,ve,ht,Zt,yt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Me,it,_e,de,ht,Zt,yt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Me,it,yt.width,yt.height,ht,yt.data):N.texSubImage2D(N.TEXTURE_2D,fe,Me,it,_e,de,ht,Zt,yt);x.pixelStorei(N.UNPACK_ROW_LENGTH,an),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Hi),fe===0&&I.generateMipmaps&&N.generateMipmap(ge),x.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&X.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?X.setTextureCube(y,0):y.isData3DTexture?X.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?X.setTexture2DArray(y,0):X.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){K=0,Z=0,ie=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};function Pu(s,e){if(e===nu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===eo){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ir)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ic(s){let e=new Map,t=new Map,n=s.clone();return Wp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Wp(s.children[n],e.children[n],t)}var Pc=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Lc(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lc(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ju(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ni.extractUrlBase(e);a=Ni.resolveURL(c,this.path)}else a=Ni.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kp){try{a[$e.KHR_BINARY_GLTF]=new ju(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new Ou;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new ed;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new td;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Qv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Lt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ln);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ls(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ga(h),c.distance=u;break;case"spot":c=new Va(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ou=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},Fu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Bu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(i)}},ku=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Hu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Vu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],ln),Promise.all(i)}},Wu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},$u=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Yu=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Zu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Lc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Ju=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let v=new ke,m=new D,p=new Qt,w=new D(1,1,1),R=new Ia(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&w.fromBufferAttribute(l.SCALE,S),R.setMatrixAt(S,v.compose(m,p,w));let M=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];R.instanceColor=new Ai(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(M===null){let A=R.geometry;M=new Pt,M.name=A.name;for(let _ in A.attributes)M.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)M.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&M.setIndex(A.index),M.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)M.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(M.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(M.boundingSphere=A.boundingSphere.clone()),M.drawRange.start=A.drawRange.start,M.drawRange.count=A.drawRange.count,M.userData=Object.assign({},A.userData),R.geometry=M}let b=l[S];M.setAttribute(S,new Ai(b.array,b.itemSize,b.normalized))}vt.prototype.copy.call(R,g),this.parser.assignFinalMaterial(R),f.push(R)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Kp="glTF",so=12,Xp={JSON:1313821514,BIN:5130562},ju=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-so,r=new DataView(e,so),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Xp.JSON){let c=new Uint8Array(e,so+a,o);this.content=n.decode(c)}else if(l===Xp.BIN){let c=so+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=id[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=id[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ur[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,ln,d)})})}},ed=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},td=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Nc=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,w=1-m,R=p-d+u;for(let M=0;M!==o;M++){let S=a[v+M+o],b=a[v+M+l]*h,A=a[g+M+o],_=a[g+M]*h;r[M]=w*S+R*b+m*A+p*_}return r}},eM=new Qt,nd=class extends Nc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return eM.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qp={9728:Ct,9729:It,9984:Nl,9985:Ar,9986:Os,9987:Yn},$p={33071:Pn,33648:ur,10497:Zi},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:bs,STEP:Ss},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function ks(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function sM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rM(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=s.indices+":"+Du(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Du(s.targets[n]);return e}function Du(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function sd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oM=new ke,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Is(this.options.manager):this.textureLoader=new Wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ks(r,o,i),hi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ni.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Lu[i.type],o=Ur[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new kt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Lu[i.type],c=Ur[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,R=t.cache.get(w);R||(v=new c(o,p*f,i.count*f/h),R=new Ts(v,f/h),t.cache.add(w,R)),m=new Ji(R,l,d%f/h,g)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),m=new kt(v,l,g);if(i.sparse!==void 0){let p=Lu.SCALAR,w=Ur[i.sparse.indices.componentType],R=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,S=new w(a[1],R,i.sparse.count*p),b=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=S.length;A<_;A++){let T=S[A];if(m.setX(T,b[A*l]),l>=2&&m.setY(T,b[A*l+1]),l>=3&&m.setZ(T,b[A*l+2]),l>=4&&m.setW(T,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=qp[d.magFilter]||It,h.minFilter=qp[d.minFilter]||Yn,h.wrapS=$p[d.wrapS]||Zi,h.wrapT=$p[d.wrapT]||Zi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==It,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new zt(v);m.needsUpdate=!0,d(m)}),t.load(Ni.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),hi(u,a),u.userData.mimeType=a.mimeType||aM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Mr,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new vr,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){let u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ln),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Et)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=yn);let h=r.alphaMode||Nu.OPAQUE;if(h===Nu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Nu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==en&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==en&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==en){let u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&a!==en&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ks(i,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=rM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Yp(new Pt,c,t),c.mode===Nn.TRIANGLE_STRIP?d=d.then(f=>Pu(f,eo)):c.mode===Nn.TRIANGLE_FAN&&(d=d.then(f=>Pu(f,Ir))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?nM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,w=c[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0){let R=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");R&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=R&&M?new Ra(v,w):new _t(v,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Nn.LINES)p=new Pa(v,w);else if(m.mode===Nn.LINE_STRIP)p=new Rs(v,w);else if(m.mode===Nn.LINE_LOOP)p=new La(v,w);else if(m.mode===Nn.POINTS)p=new Na(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),m.extensions&&ks(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ks(i,u[0],r),u[0];let d=new pn;r.extensions&&ks(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(au.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ri(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ca(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let R=0,M=d.length;R<M;R++){let S=d[R],b=f[R],A=g[R],_=v[R],T=m[R];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=n._createAnimationTracks(S,b,A,_,T);if(C)for(let U=0;U<C.length;U++)p.push(C[U])}let w=new Cs(r,void 0,p);return hi(w,i),w})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,oM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new xr:c.length>1?h=new pn:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),hi(h,r),r.extensions&&ks(n,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new pn;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&ks(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Ic(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}os[r.path]===os.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(os[r.path]){case os.weights:h=Ii;break;case os.rotation:h=Pi;break;case os.translation:case os.scale:h=ts;break;default:switch(n.itemSize){case 1:h=Ii;break;case 2:case 3:default:h=ts;break}break}let u=i.interpolation!==void 0?tM[i.interpolation]:bs,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let v=new h(l[f]+"."+os[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Pi?nd:Nc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lM(s,e,t){let n=e.attributes,i=new bn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=sd(Ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=sd(Ur[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Yp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=id[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),hi(s,e),lM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iM(s,e.targets,t):s})}var Ui=32*Math.PI/180,Zp=1.35,Oi={spawn:3.2,halfWidth:.85},Dc={time:360,overtime:60,maxUnits:15},ui={base:{number:12,tiles:12,choice:8,ox:5},diffMult:[1,2,4],streakFrom:3,streakBonus:.2,wrongLock:3,skipLock:2,start:60},Or={maxLevel:4,cost:[0,120,180,250],bonus:.25},zs={hp:900,radius:1.2,range:6,every:1.6,dmg:14,height:4.2},Dn={hp:1800,radius:2,range:6.5,every:1.6,dmg:14,height:6.2,lastStand:.3,lastStandMult:1.6},ls={charge:5,damage:150,radius:3.4},di=["shield","rusher","archer","mage"],Ot={shield:{name:"\uBC29\uD328\uBCD1",cost:60,cooldown:2.5,hp:260,dmg:14,range:1.4,speed:1.45,hitAt:.42,beats:"rusher"},rusher:{name:"\uB3CC\uACA9\uBCD1",cost:70,cooldown:3.5,hp:150,dmg:30,range:1.5,speed:2.5,hitAt:.45,beats:"archer"},archer:{name:"\uAD81\uC218",cost:60,cooldown:3,hp:90,dmg:16,range:6.5,speed:1.55,hitAt:.5,beats:"mage",shot:"arrow"},mage:{name:"\uB9C8\uBC95\uC0AC",cost:90,cooldown:5,hp:100,dmg:18,range:5.5,speed:1.45,hitAt:.45,beats:"shield",shot:"orb",splash:1.8}},Jp=1.6,Fr={giant:{name:"\uC548\uAC1C \uAC70\uC778",model:"skel_warrior",scale:1.75,tint:10129600,hp:1100,dmg:42,range:1.7,speed:.95,hitAt:.42,beats:null}},un={[-1]:{name:"\uAE30\uC0AC\uB2E8",models:{shield:"knight",rusher:"barbarian",archer:"rogue",mage:"mage"},color:10475775},1:{name:"\uD574\uACE8 \uAD70\uB2E8",models:{shield:"skel_warrior",rusher:"skel_minion",archer:"skel_rogue",mage:"skel_mage"},color:13172602}},cs={recruit:{name:"\uC2E0\uBCD1",answerEvery:6.6,accuracy:.8,diff:0,counter:.15,mineTo:1,cannonAt:4},knight:{name:"\uAE30\uC0AC",answerEvery:5.8,accuracy:.84,diff:1,counter:.5,mineTo:2,cannonAt:3},general:{name:"\uC7A5\uAD70",answerEvery:4.7,accuracy:.88,diff:1,counter:.85,mineTo:3,cannonAt:2}},hs={high:{name:"\uB192\uC74C",pixelRatio:2,shadow:2048,blob:!1,fx:1,clouds:!0,cap:0,aa:!0},mid:{name:"\uBCF4\uD1B5",pixelRatio:1,shadow:1024,blob:!1,fx:.7,clouds:!0,cap:0,aa:!0},low:{name:"\uB0AE\uC74C",pixelRatio:.75,shadow:0,blob:!0,fx:.4,clouds:!1,cap:0,aa:!1},lowest:{name:"\uC544\uC8FC \uB0AE\uC74C",pixelRatio:.6,shadow:0,blob:!0,fx:.2,clouds:!1,cap:30,aa:!1}},Br=["high","mid","low","lowest"];var jp={lanes:{top:[[-18,-9.5],[-18.6,-5],[-18.6,7.2],[-16.2,9.9],[14,10.1],[18,9.5]],mid:[[-18,-9.5],[18,9.5]],bot:[[-18,-9.5],[-14,-10.1],[16.2,-9.9],[18.6,-7.2],[18.6,5],[18,9.5]]},towers:{top:{"-1":[-16.66314469938492,9.378962213191965],"1":[-1.6100850802087123,9.9966219531112]},mid:{"-1":[-5.040000000000001,-2.66],"1":[5.039999999999999,2.66]},bot:{"-1":[1.610085080208714,-9.9966219531112],"1":[16.663144699384922,-9.378962213191963]}},bases:{"-1":[-18,-9.5],"1":[18,9.5]},bounds:[21,12],river:[[-23,13.2],[23,-13.2]]};var Qp={lanes:{top:[[-15.5,0],[-14.2,4.6],[-11,7.4],[11,7.4],[14.2,4.6],[15.5,0]],mid:[[-15.5,0],[15.5,0]],bot:[[-15.5,0],[-14.2,-4.6],[-11,-7.4],[11,-7.4],[14.2,-4.6],[15.5,0]]},towers:{top:{"-1":[-5.609023192130598,7.4],"1":[5.6090231921306035,7.4]},mid:{"-1":[-4.34,0],"1":[4.34,0]},bot:{"-1":[-5.609023192130598,-7.4],"1":[5.6090231921306035,-7.4]}},bases:{"-1":[-15.5,0],"1":[15.5,0]},bounds:[17.5,9.6],river:[[-2.5,11.5],[2.5,-11.5]]};var em={lanes:{mid:[[-15.5,-.6],[-9,-2.2],[-3,-1.2],[3,1.2],[9,2.2],[15.5,.6]]},towers:{mid:{"-1":[-4.2340872276454,-1.4056812046075666],"1":[4.234087227645398,1.4056812046075664]}},bases:{"-1":[-15.5,-.6],"1":[15.5,.6]},bounds:[17.5,6],river:[],labels:{mid:"\uBC14\uB2F7\uAE38"},mood:{sun:[1,.9,.82],sunI:3.3,hemiSky:[.75,.82,1],hemiI:1.25,bg:"#16303a"}};var tm={lanes:{top:[[-15.5,0],[-13,4],[-7.5,6.6],[7.5,6.6],[13,4],[15.5,0]],bot:[[-15.5,0],[-13,-4],[-7.5,-6.6],[7.5,-6.6],[13,-4],[15.5,0]]},towers:{top:{"-1":[-5.1241610100044985,6.6],"1":[5.124161010004499,6.6]},bot:{"-1":[-5.1241610100044985,-6.6],"1":[5.124161010004499,-6.6]}},bases:{"-1":[-15.5,0],"1":[15.5,0]},bounds:[17.5,9],river:[],labels:{top:"\uC717\uC232\uAE38",bot:"\uC544\uB7AB\uC232\uAE38"},mood:{sun:[1,.86,.62],sunI:3.5,hemiSky:[.95,.85,.7],hemiI:1.15,bg:"#1d2a16"}};var nm={lanes:{top:[[-15.5,0],[-13.6,4.8],[-10,7.2],[10,7.2],[13.6,4.8],[15.5,0]],mid:[[-15.5,0],[-6,0],[6,0],[15.5,0]],bot:[[-15.5,0],[-13.6,-4.8],[-10,-7.2],[10,-7.2],[13.6,-4.8],[15.5,0]]},towers:{top:{"-1":[-5.456927092459615,7.2],"1":[5.456927092459615,7.2]},mid:{"-1":[-4.34,0],"1":[4.34,0]},bot:{"-1":[-5.456927092459615,-7.2],"1":[5.456927092459615,-7.2]}},bases:{"-1":[-15.5,0],"1":[15.5,0]},bounds:[17.5,9.6],river:[[-1.2,12.5],[1.2,-12.5]],labels:null,mood:{sun:[.92,.96,1],sunI:3.2,hemiSky:[.7,.85,1],hemiI:1.35,bg:"#122a33"}};var im={lanes:{top:[[-15.5,0],[-13.5,3.6],[-9.5,7.6],[-5.5,4.6],[0,7.8],[5.5,4.6],[9.5,7.6],[13.5,3.6],[15.5,0]],mid:[[-15.5,0],[15.5,0]],bot:[[-15.5,0],[-13.5,-3.6],[-9.5,-7.6],[-5.5,-4.6],[0,-7.8],[5.5,-4.6],[9.5,-7.6],[13.5,-3.6],[15.5,0]]},towers:{top:{"-1":[-5.115834800992418,4.823514297604411],"1":[5.115834800992416,4.823514297604412]},mid:{"-1":[-4.34,0],"1":[4.34,0]},bot:{"-1":[-5.115834800992418,-4.823514297604411],"1":[5.115834800992416,-4.823514297604412]}},bases:{"-1":[-15.5,0],"1":[15.5,0]},bounds:[17.5,9.6],river:[],labels:{top:"\uC717\uC0B0\uAE38",mid:"\uC9C0\uB984\uAE38",bot:"\uC544\uB7AB\uC0B0\uAE38"},mood:{sun:[1,.72,.5],sunI:3.3,hemiSky:[.85,.65,.75],hemiI:1.1,bg:"#2a1a22"}};var sm={lanes:{top:[[-15.5,0],[-13,5],[-6,7.6],[6,7.6],[11,3.4],[14.5,0]],mid:[[-15.5,0],[-4,1.4],[4,-1.4],[14.5,0]],bot:[[-15.5,0],[-13,-5],[-6,-7.6],[6,-7.6],[11,-3.4],[14.5,0]]},towers:{top:{"-1":[-5.929343479149717,7.6],"1":[4.2813919007906005,7.6]},mid:{"-1":[-4.545553470851642,1.3335847948528434],"1":[3.5824365553832385,-1.2538527943841333]},bot:{"-1":[-5.929343479149717,-7.6],"1":[4.2813919007906005,-7.6]}},bases:{"-1":[-15.5,0],"1":[14.5,0]},bounds:[17.5,9.6],river:[],labels:null,mood:{sun:[.82,.85,.92],sunI:2.6,hemiSky:[.7,.72,.8],hemiI:1.2,bg:"#1b1e24",fog:"#9aa3b0",fogNear:95,fogFar:175}};var Un={diag:{name:"\uB300\uAC01\uC120",desc:"\uB864\uCC98\uB7FC \uBAA8\uC11C\uB9AC\uC5D0\uC11C \uBAA8\uC11C\uB9AC\uB85C",data:jp,free:!0},wide:{name:"\uD3BC\uCE5C 3\uAC08\uB798",desc:"\uC606\uC73C\uB85C \uB113\uAC8C, \uBCD1\uC0AC\uAC00 \uD06C\uAC8C",data:Qp,free:!0},shore:{name:"\uBC14\uB2F7\uAC00 \uCD08\uC18C",desc:"\uD55C \uAC08\uB798 \uAE38",data:em,chapter:1},twin:{name:"\uB450 \uAC08\uB798 \uC232\uAE38",desc:"\uD638\uC218\uB97C \uB080 \uB450 \uAE38",data:tm,chapter:2},bridge:{name:"\uAC15 \uAC74\uB108 \uB2E4\uB9AC",desc:"\uB2E4\uB9AC \uC14B, 3\uAC08\uB798",data:nm,chapter:3},pass:{name:"\uC0B0\uAE38 \uC694\uC0C8",desc:"\uC9E7\uC740 \uC9C0\uB984\uAE38\uACFC \uAD7D\uC740 \uC0B0\uAE38",data:im,chapter:4},citadel:{name:"\uC548\uAC1C \uC131\uCC44",desc:"\uC131\uBCBD\uC73C\uB85C \uBAA8\uC774\uB294 \uC138 \uAE38",data:sm,chapter:5}},gM=["top","mid","bot"],rm={top:"\uC717\uAE38",mid:"\uAC00\uC6B4\uB383\uAE38",bot:"\uC544\uB7AB\uAE38"},Ve=["top","mid","bot"],Hs={...rm},ad=class{constructor(e,t){this.name=e,this.pts=t,this.cum=[0];for(let n=1;n<t.length;n++)this.cum.push(this.cum[n-1]+Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1]));this.length=this.cum[this.cum.length-1]}at(e){e=Math.max(0,Math.min(this.length,e));let t=1;for(;t<this.cum.length-1&&this.cum[t]<e;)t++;let n=this.pts[t-1],i=this.pts[t],r=this.cum[t]-this.cum[t-1]||1,a=(e-this.cum[t-1])/r;return{x:n[0]+(i[0]-n[0])*a,y:n[1]+(i[1]-n[1])*a,dx:(i[0]-n[0])/r,dy:(i[1]-n[1])/r}}project(e,t){let n=0,i=1e9;for(let r=1;r<this.pts.length;r++){let a=this.pts[r-1],o=this.pts[r],l=o[0]-a[0],c=o[1]-a[1],h=l*l+c*c,u=Math.max(0,Math.min(1,((e-a[0])*l+(t-a[1])*c)/h)),d=Math.hypot(e-a[0]-u*l,t-a[1]-u*c);d<i&&(i=d,n=this.cum[r-1]+u*Math.sqrt(h))}return n}},nn={},Fi={},ro={},kr=[0,0],oo=[],xM="diag",ao={};function Uc(s){Un[s]||(s="diag"),xM=s;let e=Un[s].data;Ve.length=0;for(let t of gM)e.lanes[t]&&Ve.push(t);for(let t of Object.keys(nn))delete nn[t];for(let t of Object.keys(ro))delete ro[t];for(let t of Ve)nn[t]=new ad(t,e.lanes[t]);Object.assign(Hs,rm,Ve.length===1?{[Ve[0]]:"\uAE38"}:{},e.labels||{});for(let t of Object.keys(ao))delete ao[t];Object.assign(ao,e.mood||{}),Fi[-1]=e.bases[-1],Fi[1]=e.bases[1];for(let t of Ve)ro[t]={[-1]:e.towers[t][-1],1:e.towers[t][1]};kr[0]=e.bounds[0],kr[1]=e.bounds[1],oo.length=0;for(let t of e.river)oo.push(t);return s}Uc("diag");var zr=(s,e)=>s+Math.random()*(e-s),Hr=class{constructor(e,t={}){this.dur=e,this.opts=t,this.matchTime=t.time||Dc.time,this.objective=t.objective||{type:"base"},this.units=[],this.projectiles=[],this.events=[],this.time=0,this.state="play",this.winner=0,this.overtime=!1,this.nextId=1,this.sides={},this.structs=[];for(let n of[-1,1]){this.sides[n]={gold:(t.gold&&t.gold[n])??ui.start,mine:1,streak:0,bestStreak:0,cannon:0,cooldown:{shield:0,rusher:0,archer:0,mage:0},stats:{right:0,wrong:0,skip:0,goldEarned:0,deployed:0}};let[i,r]=Fi[n],a=Math.round(Dn.hp*(t.baseHp&&t.baseHp[n]||1)),o=Math.round(zs.hp*(t.towerHp&&t.towerHp[n]||1)),l={id:this.nextId++,side:n,kind:"base",x:i,y:r,hp:a,max:a,radius:Dn.radius,alive:!0,guardT:0};this.structs.push(l),this.sides[n].base=l,this.sides[n].towers={};for(let c of Ve){let[h,u]=ro[c][n],d={id:this.nextId++,side:n,kind:"tower",lane:c,s:nn[c].project(h,u),x:h,y:u,hp:o,max:o,radius:zs.radius,alive:!0,guardT:0};this.structs.push(d),this.sides[n].towers[c]=d}}}get timeLeft(){return Math.max(0,this.matchTime-this.time)}answer(e,t,n="number",i=0){let r=this.sides[e];if(this.state!=="play")return 0;if(t==="skip")return r.stats.skip++,0;if(t==="wrong")return r.stats.wrong++,r.streak=0,r.cannon<ls.charge&&(r.cannon=0),this.events.push({type:"answer",side:e,right:!1}),0;r.stats.right++,r.streak++,r.bestStreak=Math.max(r.bestStreak,r.streak),r.cannon<ls.charge&&r.cannon++;let a=(ui.base[n]||ui.base.number)*ui.diffMult[i];return r.streak>=ui.streakFrom&&(a*=1+ui.streakBonus),a*=1+Or.bonus*(r.mine-1),this.overtime&&(a*=2),a=Math.round(a),r.gold+=a,r.stats.goldEarned+=a,this.events.push({type:"answer",side:e,right:!0,gold:a,streak:r.streak}),a}aliveCount(e){return this.units.filter(t=>t.side===e&&t.state!=="death").length}canDeploy(e,t){let n=this.sides[e],i=Ot[t];return this.state!=="play"?"\uB05D\uB0A8":n.cooldown[t]>0?"\uB300\uAE30":n.gold<i.cost?"\uACE8\uB4DC \uBD80\uC871":this.aliveCount(e)>=Dc.maxUnits?"\uBCD1\uC0AC\uAC00 \uAC00\uB4DD":""}deploy(e,t,n){if(this.canDeploy(e,t)||!nn[n])return null;let i=this.sides[e],r=Ot[t],a=nn[n];i.gold-=r.cost,i.cooldown[t]=r.cooldown,i.stats.deployed++;let o=un[e].models[t],l=this.dur[o].spawn?this.dur[o].spawn/2:.35,c={id:this.nextId++,side:e,role:t,model:o,lane:n,dir:-e,s:e<0?Oi.spawn:a.length-Oi.spawn,off:zr(-Oi.halfWidth,Oi.halfWidth),hp:r.hp,maxHp:r.hp,state:"spawn",anim:this.dur[o].spawn?"spawn":"walk",animT:0,stateT:0,spawnLen:l,hitDone:!1,flash:0,x:0,y:0,fx:0,fy:0};return this.place(c),this.units.push(c),this.events.push({type:"spawn",unit:c}),c}spawnFree(e,t,n){if(this.state!=="play"||!nn[n])return null;let i=Fr[t],r=i||Ot[t],a=nn[n],o=i?i.model:un[e].models[t],l=this.dur[o].spawn?this.dur[o].spawn/2:.35,c={id:this.nextId++,side:e,role:t,model:o,lane:n,dir:-e,s:e<0?Oi.spawn:a.length-Oi.spawn,off:i?0:zr(-Oi.halfWidth,Oi.halfWidth),hp:r.hp,maxHp:r.hp,special:!!i,scale:i?i.scale:1,tint:i?i.tint:0,state:"spawn",anim:this.dur[o].spawn?"spawn":"walk",animT:0,stateT:0,spawnLen:l,hitDone:!1,flash:0,x:0,y:0,fx:0,fy:0};return this.place(c),this.units.push(c),this.events.push({type:"spawn",unit:c,free:!0}),c}place(e){let t=nn[e.lane].at(e.s);e.x=t.x-t.dy*e.off,e.y=t.y+t.dx*e.off,e.fx=t.dx*e.dir,e.fy=t.dy*e.dir}mineCost(e){let t=this.sides[e].mine;return t>=Or.maxLevel?0:Or.cost[t]}upgradeMine(e){let t=this.sides[e],n=this.mineCost(e);return!n||t.gold<n||this.state!=="play"?!1:(t.gold-=n,t.mine++,this.events.push({type:"mine",side:e,level:t.mine}),!0)}myStructs(e){return this.structs.filter(t=>t.side===e&&t.alive)}cannonTarget(e){let t=null,n=1e9,i=this.myStructs(e);for(let r of this.units)if(!(r.side===e||r.state==="death"))for(let a of i){let o=Math.hypot(r.x-a.x,r.y-a.y);o<n&&(n=o,t=r)}return t}fireCannon(e){let t=this.sides[e],n=this.cannonTarget(e);if(t.cannon<ls.charge||!n||this.state!=="play")return!1;t.cannon=0;let i=t.base,r=this.addProjectile({kind:"ball",side:e,sx:i.x,sy:i.y,sz:7.5,tx:n.x,ty:n.y,tz:.2,time:Math.max(.8,Math.hypot(n.x-i.x,n.y-i.y)/22),arc:5,dmg:ls.damage,splash:ls.radius});return this.events.push({type:"cannon",side:e,proj:r}),!0}findTarget(e){let t=null,n=1e9;for(let l of this.units){if(l.side===e.side||l.lane!==e.lane||l.state==="death"||l.state==="spawn"&&l.anim==="spawn"&&l.stateT<l.spawnLen*.5)continue;let c=(l.s-e.s)*e.dir;if(c<-.6)continue;let h=Math.abs(c);h<n&&(n=h,t={kind:"unit",unit:l,d:h})}let i=this.sides[-e.side],r=i.towers[e.lane],a,o;return r.alive?(a=r,o=(r.s-e.s)*e.dir-r.radius):(a=i.base,o=((e.dir>0?nn[e.lane].length:0)-e.s)*e.dir-i.base.radius),a.alive&&o<n&&(t={kind:"struct",struct:a,d:Math.max(0,o)}),t}damageUnit(e,t,n){if(e.state==="death")return;let i=!!(n&&Ot[n.role]&&Ot[n.role].beats===e.role);e.special&&(t*=.85);let r=Math.round(t*(i?Jp:1));e.hp-=r,e.flash=1,this.events.push({type:"hit",target:e,x:e.x,y:e.y,z:1.5,dmg:r,counter:i,side:n?n.side:0}),e.hp<=0&&(e.hp=0,this.setState(e,"death"),this.events.push({type:"death",unit:e}))}damageStruct(e,t){if(this.state!=="play"||!e.alive)return;e.hp=Math.max(0,e.hp-t);let n=e.kind==="base"?Dn.height:zs.height;this.events.push({type:"structHit",struct:e,dmg:t,x:e.x+zr(-.8,.8),y:e.y+zr(-.5,.5),z:zr(1.2,n)}),e.hp<=0&&(e.alive=!1,this.events.push({type:"structDown",struct:e}),e.kind==="base"?this.finish(-e.side,"base"):this.objective.type==="towers"&&e.side===1&&Object.values(this.sides[1].towers).filter(r=>!r.alive).length>=(this.objective.n||1)&&this.finish(-1,"towers"))}finish(e,t){if(this.state==="play"){this.state="end",this.winner=e,this.endWhy=t;for(let n of this.units)n.state!=="death"&&(e&&n.side===-e?(this.setState(n,"death"),this.events.push({type:"death",unit:n})):e&&this.setState(n,"cheer"));this.events.push({type:"end",winner:e,why:t})}}score(e){let t=0;for(let n of this.structs)n.side===e&&(t+=n.hp/n.max*(n.kind==="base"?2:1));return t}setState(e,t){e.state=t,e.stateT=0,e.animT=0,e.hitDone=!1,e.anim=t==="spawn"?this.dur[e.model].spawn?"spawn":"walk":t}addProjectile(e){return e.id=this.nextId++,e.t=0,e.x=e.sx,e.y=e.sy,e.z=e.sz,this.projectiles.push(e),this.events.push({type:"launch",proj:e}),e}shoot(e,t,n){let i=Ot[e.role]||Fr[e.role],r=e.x+e.fx*.6,a=e.y+e.fy*.6,o=i.shot==="arrow"?1.6:2.3,l=t.kind==="unit"?t.unit.x:t.struct.x,c=t.kind==="unit"?t.unit.y:t.struct.y,h=t.kind==="unit"?1.3:2.6,u=i.shot==="arrow"?16:9;this.addProjectile({kind:i.shot,side:e.side,from:e,target:t.kind==="unit"?t.unit:null,struct:t.kind==="struct"?t.struct:null,sx:r,sy:a,sz:o,tx:l,ty:c,tz:h,time:Math.max(.2,Math.hypot(l-r,c-a)/u),arc:i.shot==="arrow"?.6:1.2,dmg:n,splash:i.splash||0})}guard(e,t){if(e.guardT-=t,e.guardT>0)return;let n=e.kind==="base"?Dn:zs,i=null,r=n.range;for(let o of this.units){if(o.side===e.side||o.state==="death")continue;let l=Math.hypot(o.x-e.x,o.y-e.y);l<r&&(r=l,i=o)}if(!i)return;let a=e.kind==="base"&&e.hp/e.max<Dn.lastStand;e.guardT=n.every/(a?Dn.lastStandMult:1),this.addProjectile({kind:"arrow",side:e.side,from:{side:e.side,role:null},target:i,sx:e.x,sy:e.y,sz:n.height,tx:i.x,ty:i.y,tz:1.3,time:.45,arc:.5,dmg:n.dmg,splash:0})}update(e){if(this.state==="play"){if(this.time+=e,!this.overtime&&this.timeLeft<=Dc.overtime&&(this.overtime=!0,this.events.push({type:"overtime"})),this.timeLeft<=0)if(this.objective.type==="survive")this.finish(-1,"survive");else{let t=this.score(-1),n=this.score(1);this.finish(Math.abs(t-n)<.01?0:t>n?-1:1,"time")}for(let t of[-1,1])for(let n in this.sides[t].cooldown)this.sides[t].cooldown[n]=Math.max(0,this.sides[t].cooldown[n]-e);for(let t of this.structs)t.alive&&this.guard(t,e)}for(let t of this.units){let n=Ot[t.role]||Fr[t.role],i=this.dur[t.model];if(t.stateT+=e,t.animT+=e,t.flash=Math.max(0,t.flash-e*7),t.state==="spawn"){t.stateT>=t.spawnLen&&this.setState(t,"walk");continue}if(t.state==="death"||t.state==="cheer")continue;let r=this.findTarget(t),a=r&&r.d<=n.range;if(t.state==="walk")a?this.setState(t,"attack"):(t.s=Math.max(0,Math.min(nn[t.lane].length,t.s+t.dir*n.speed*e)),this.place(t));else if(t.state==="attack"){if(r){let o=r.kind==="unit"?r.unit.x:r.struct.x,l=r.kind==="unit"?r.unit.y:r.struct.y,c=Math.hypot(o-t.x,l-t.y)||1;t.fx=(o-t.x)/c,t.fy=(l-t.y)/c}if(!t.hitDone&&t.animT>=i.attack*n.hitAt){t.hitDone=!0;let o=this.findTarget(t);if(o&&o.d<=n.range+.3){let l=Math.round(n.dmg*zr(.9,1.1));n.shot?this.shoot(t,o,l):o.kind==="unit"?this.damageUnit(o.unit,l,t):this.damageStruct(o.struct,l)}}t.animT>=i.attack&&(t.animT-=i.attack,t.hitDone=!1,a||(this.setState(t,"walk"),this.place(t)))}}for(let t of this.projectiles){t.t+=e/t.time;let n=Math.min(t.t,1);t.target&&t.target.state!=="death"&&(t.tx=t.target.x,t.ty=t.target.y),t.x=t.sx+(t.tx-t.sx)*n,t.y=t.sy+(t.ty-t.sy)*n,t.z=t.sz+(t.tz-t.sz)*n+Math.sin(n*Math.PI)*t.arc,t.t>=1&&!t.done&&(t.done=!0,this.land(t))}this.projectiles=this.projectiles.filter(t=>!t.done),this.units=this.units.filter(t=>!(t.state==="death"&&t.stateT>this.dur[t.model].death+1.2))}land(e){if(this.events.push({type:"land",proj:e}),e.struct){this.damageStruct(e.struct,e.dmg);return}if(e.splash)for(let t of this.units){if(t.side===e.side||t.state==="death")continue;Math.hypot(t.x-e.x,t.y-e.y)<=e.splash&&this.damageUnit(t,t===e.target?e.dmg:Math.round(e.dmg*.6),e.from||{side:e.side})}else e.target&&this.damageUnit(e.target,e.dmg,e.from)}};var us={};for(let s of di)us[Ot[s].beats]=s;var Vr=class{constructor(e,t,n,i){this.b=e,this.side=t,this.L=typeof n=="string"?cs[n]:n,this.roles=this.L.roles||di,this.habits=this.L.habits||[],this.onTalk=i||(()=>{}),this.log=[],this.mode=null,this.reactT=-99,this.readT=0,this.mineSaid=!1,this.next=(this.L.adaptive?this.L.adaptive.time[0]:this.L.answerEvery)*(.5+Math.random()),this.plan=null}update(e){let t=this.b,n=t.sides[this.side];if(t.state!=="play")return;if(this.next-=e,this.next<=0){let a=this.L.adaptive,o=a?this.d??(this.d=0):this.L.diff,l=Math.random()<(a?a.acc[o]:this.L.accuracy);t.answer(this.side,l?"right":"wrong","number",o),a&&(l?(this.rr=(this.rr||0)+1,this.rw=0,this.rr>=5&&o<2&&(this.d++,this.rr=0)):(this.rw=(this.rw||0)+1,this.rr=0,this.rw>=2&&o>0&&(this.d--,this.rw=0))),this.next=(a?a.time[o]:this.L.answerEvery)*(.6+Math.random()*.8)+(l?0:3)}let i=this.threats(),r=Object.values(i).every(a=>a.n===0);n.mine<(this.L.mineTo??1)&&r&&t.mineCost(this.side)&&n.gold>=t.mineCost(this.side)+20&&t.upgradeMine(this.side),n.cannon>=5&&Math.max(...Object.values(i).map(o=>o.n))>=(this.L.cannonAt??3)&&this.L.cannon!==!1&&t.fireCannon(this.side),this.habits.length&&this.read(e),this.mode&&t.time>this.mode.until&&(this.mode=null),this.plan||(this.plan=this.choose(i)),t.canDeploy(this.side,this.plan.role)===""?(t.deploy(this.side,this.plan.role,this.plan.lane),this.plan=null):n.cooldown[this.plan.role]>0&&(this.plan=null)}threats(){let e=this.b,t=e.sides[this.side],n={};for(let i of Ve){let r=t.towers[i],a=r.alive?r.s:this.side<0?0:nn[i].length,o=0,l=null,c=1e9;for(let h of e.units){if(h.side===this.side||h.lane!==i||h.state==="death")continue;let u=Math.abs(h.s-a);u<9&&o++,u<c&&(c=u,l=h)}n[i]={n:o,front:l,mine:e.units.filter(h=>h.side===this.side&&h.lane===i&&h.state!=="death").length,foe:e.units.filter(h=>h.side!==this.side&&h.lane===i&&h.state!=="death").length}}return n}ok(e){return e&&this.roles.includes(e)?e:this.randomRole()}choose(e){let t=this.b,n=this.L,i=t.sides[-this.side],r=this.mode;if(r&&r.type==="role"&&Math.random()<.75)return{lane:this.pickLane(e,i),role:this.ok(us[r.role])};if(r&&r.type==="lane"&&Ve.length>1&&Math.random()<.6){if(Math.random()<.4){let h=e[r.lane].front;return{lane:r.lane,role:this.ok(h&&us[h.role])}}return{lane:Ve.filter(h=>h!==r.lane).sort((h,u)=>e[h].foe-e[u].foe)[0],role:this.randomRole()}}if(r&&r.type==="cannon"&&Math.random()<.7)return r.i=(r.i||0)+1,{lane:Ve[r.i%Ve.length],role:this.randomRole()};let a=Ve.filter(c=>e[c].n>0).sort((c,h)=>e[h].n-e[c].n);if(a.length&&Math.random()<.35+n.counter*.6){let c=a[0],h=e[c].front;return{lane:c,role:h&&Math.random()<n.counter?this.ok(us[h.role]):this.randomRole()}}let o=this.pickLane(e,i),l=t.units.filter(c=>c.side!==this.side&&c.lane===o&&c.state!=="death");if(l.length&&Math.random()<n.counter){let c={};for(let u of l)c[u.role]=(c[u.role]||0)+1;let h=Object.keys(c).sort((u,d)=>c[d]-c[u])[0];return{lane:o,role:this.ok(us[h])}}return{lane:o,role:this.randomRole()}}pickLane(e,t){return Math.random()<this.L.counter?Ve.slice().sort((n,i)=>this.pushScore(i,e,t)-this.pushScore(n,e,t))[0]:Ve.includes("mid")&&Math.random()<.4?"mid":Ve[Math.floor(Math.random()*Ve.length)]}watch(e){for(let t of e)t.type==="spawn"&&t.unit.side===-this.side&&!t.free?this.log.push({t:this.b.time,lane:t.unit.lane,role:t.unit.role}):t.type==="cannon"&&t.side===-this.side?this.cannonT=this.b.time:t.type==="mine"&&t.side===-this.side&&(this.mineT=this.b.time)}read(e){this.readT-=e;let t=this.b,n=t.time;if(this.readT>0||this.mode||n-this.reactT<20)return;this.readT=1;let i=this.log.filter(l=>n-l.t<45),r=l=>this.habits.includes(l),a=(l,c,h)=>{this.mode={type:l,until:n+30,...c},this.reactT=n,this.onTalk(l,h)};if(r("lane")&&Ve.length>1&&i.length>=5){let l={};for(let u of i)l[u.lane]=(l[u.lane]||0)+1;let[c,h]=Object.entries(l).sort((u,d)=>d[1]-u[1])[0];if(h/i.length>=.7)return a("lane",{lane:c},{lane:c})}if(r("role")&&i.length>=5){let l={};for(let u of i)l[u.role]=(l[u.role]||0)+1;let[c,h]=Object.entries(l).sort((u,d)=>d[1]-u[1])[0];if(h/i.length>=.6&&us[c]&&this.roles.includes(us[c]))return a("role",{role:c},{role:c,counter:us[c]})}if(r("cannon")&&this.cannonT&&n-this.cannonT<8)return this.cannonT=0,a("cannon",{},{});let o=t.sides[-this.side];if(r("hoard")&&(o.gold>=260||this.mineT&&!this.mineSaid&&n<120)){this.mineSaid=this.mineSaid||!!this.mineT;let l=Ve.slice().sort((c,h)=>t.sides[-this.side].towers[c].hp-t.sides[-this.side].towers[h].hp)[0];for(let c=0;c<3;c++)t.spawnFree(this.side,this.ok(c===0?"shield":"rusher"),l);return a("hoard",{},{lane:l})}}pushScore(e,t,n){let i=n.towers[e];return(i.alive?1-i.hp/i.max:1.5)+(t[e].mine-t[e].foe)*.25+Math.random()*.3}randomRole(){let e=[["shield",3],["rusher",2],["archer",3],["mage",2]].filter(([n])=>this.roles.includes(n)),t=Math.random()*e.reduce((n,[,i])=>n+i,0);for(let[n,i]of e)if((t-=i)<=0)return n;return e[0][0]}};var am="classArena.sound",qt=null,lo=null,Oc=!0;try{Oc=localStorage.getItem(am)!=="0"}catch{}var od={},Oe={get on(){return Oc},get ctx(){return qt},set(s){Oc=s;try{localStorage.setItem(am,s?"1":"0")}catch{}},unlock(){if(qt){qt.state==="suspended"&&qt.resume();return}try{qt=new(window.AudioContext||window.webkitAudioContext),lo=qt.createGain(),lo.gain.value=.35,lo.connect(qt.destination)}catch{qt=null}},quiet:!1,play(s){if(!Oc||!qt||Oe.quiet)return;let e=qt.currentTime;od[s]&&e-od[s]<(_M[s]||0)||(od[s]=e,(yM[s]||(()=>{}))(e))}},_M={hit:.06,castle:.12,deploy:.05};function Ft(s,e,t,n,i="sine",r=.5){let a=qt.createOscillator(),o=qt.createGain();a.type=i,a.frequency.setValueAtTime(e,s),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),s+n),o.gain.setValueAtTime(r,s),o.gain.exponentialRampToValueAtTime(.001,s+n),a.connect(o),o.connect(lo),a.start(s),a.stop(s+n+.02)}function Gr(s,e,t=.4,n=1200,i=.8){let r=qt.sampleRate*e,a=qt.createBuffer(1,r,qt.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*(1-u/r);let l=qt.createBufferSource(),c=qt.createBiquadFilter(),h=qt.createGain();l.buffer=a,c.type="bandpass",c.frequency.value=n,c.Q.value=i,h.gain.value=t,l.connect(c),c.connect(h),h.connect(lo),l.start(s)}var yM={right:s=>{Ft(s,660,660,.09,"triangle",.4),Ft(s+.08,990,990,.16,"triangle",.4)},wrong:s=>{Ft(s,220,150,.25,"square",.18)},skip:s=>{Ft(s,440,330,.12,"sine",.2)},tap:s=>{Ft(s,880,990,.05,"triangle",.18)},talk:s=>{Ft(s,587,587,.07,"triangle",.2),Ft(s+.08,784,784,.09,"triangle",.2)},coin:s=>{Ft(s,1320,1760,.08,"square",.12)},deploy:s=>{Gr(s,.18,.35,500,.6),Ft(s,180,90,.15,"sine",.4)},hit:s=>{Gr(s,.07,.25,2400,1.2)},counter:s=>{Gr(s,.09,.3,3200,1.5),Ft(s,900,1300,.1,"square",.08)},castle:s=>{Ft(s,120,60,.25,"sine",.5),Gr(s,.15,.2,400)},cannon:s=>{Ft(s,90,40,.6,"sine",.8),Gr(s,.5,.5,300,.4)},magic:s=>{Ft(s,500,1200,.2,"sine",.15)},arrow:s=>{Gr(s,.08,.15,5e3,2)},mine:s=>{Ft(s,523,523,.1,"triangle",.3),Ft(s+.1,659,659,.1,"triangle",.3),Ft(s+.2,784,784,.2,"triangle",.3)},horn:s=>{Ft(s,220,220,.5,"sawtooth",.12),Ft(s+.5,294,294,.6,"sawtooth",.12)},win:s=>{[523,659,784,1047].forEach((e,t)=>Ft(s+t*.13,e,e,.25,"triangle",.35))},lose:s=>{[392,330,262].forEach((e,t)=>Ft(s+t*.2,e,e*.98,.3,"triangle",.3))}};var bt=(s,e,t)=>new D(s,t,-e),vM=s=>1+(1.70158+1)*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2),MM=s=>s*s*(3-2*s);function Fc(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=e/2,r=n.createRadialGradient(i,i,0,i,i,i);for(let[o,l]of s)r.addColorStop(o,l);n.fillStyle=r,n.fillRect(0,0,e,e);let a=new Sr(t);return a.colorSpace=Et,a}var Bc=class{constructor(e,t,n,i){this.models=n,this.quality=i,this.overlay=t;let r=i.preset;this.renderer=new Ac({antialias:r.aa,powerPreference:"high-performance"}),this.renderer.toneMapping=qa,this.renderer.toneMappingExposure=1.2,this.renderer.shadowMap.type=Ns,this.renderer.setClearColor(857874),this.renderer.autoClear=!1,e.appendChild(this.renderer.domElement);let a=this.scene=new Ta;this.cam=new ri(-1,1,1,-1,.1,400);let o=bt(0,0,0),l=bt(0,Math.cos(Ui),-Math.sin(Ui));this.cam.position.copy(o).addScaledVector(l,-120),this.cam.up.copy(bt(0,Math.sin(Ui),Math.cos(Ui))),this.cam.lookAt(o),this.camBase=this.cam.position.clone();let c=this.sun=new Ls(16775406,3.4);c.position.copy(o).addScaledVector(bt(.485,.621,-.616).normalize(),-40),c.target.position.copy(o),Object.assign(c.shadow.camera,{left:-30,right:30,top:26,bottom:-26,near:1,far:120}),c.shadow.bias=-4e-4,c.shadow.normalBias=.03,this.hemi=new za(11060464,5925690,1.25),a.add(c,c.target,this.hemi),this.nodes={},this.laneMarks={[-1]:{},1:{}},this.setField(n.field),this.T_GLOW=Fc([[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),this.T_SMOKE=Fc([[0,"rgba(255,255,255,0.85)"],[.6,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),this.T_BLOB=Fc([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]),this.clouds=[];let h=new en({map:Fc([[0,"rgba(0,0,0,0.5)"],[.55,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],128),transparent:!0,opacity:.16,depthWrite:!1});for(let u=0;u<4;u++){let d=new _t(new Ri(1,1),h);d.rotation.x=-Math.PI/2,d.scale.set(16+Math.random()*8,7+Math.random()*3,1),d.position.copy(bt(-20+Math.random()*40,-6+Math.random()*22,3)),d.renderOrder=2,d.speed=.2+Math.random()*.15,a.add(d),this.clouds.push(d)}this.blobGeo=new Ri(1,1).rotateX(-Math.PI/2),this.blobMat=new en({map:this.T_BLOB,transparent:!0,depthWrite:!1}),this.parts=[],this.rings=[],this.ringTex=(()=>{let u=document.createElement("canvas");u.width=u.height=128;let d=u.getContext("2d");d.strokeStyle="rgba(255,255,255,0.95)",d.lineWidth=6,d.beginPath(),d.arc(64,64,56,0,6.2832),d.stroke(),d.lineWidth=2.5,d.beginPath(),d.arc(64,64,44,0,6.2832),d.stroke();for(let g=0;g<6;g++){let v=g/6*6.2832;d.beginPath(),d.moveTo(64+Math.cos(v)*44,64+Math.sin(v)*44),d.lineTo(64+Math.cos(v+2.094)*44,64+Math.sin(v+2.094)*44),d.stroke()}let f=new Sr(u);return f.colorSpace=Et,f})(),this.ringGeo=new Ri(1,1).rotateX(-Math.PI/2),this.glintT=0,this.focus=null,this.views=new Map,this.projViews=new Map,this.shake=0,this.view={x:0,y:0,w:1,h:1},this.applyQuality()}setField(e){let t=this.scene;this.field&&t.remove(this.field);for(let i of Object.values(this.nodes))i.bar&&i.bar.remove();for(let i of[-1,1])for(let r of Object.values(this.laneMarks[i]||{}))t.remove(r),r.geometry.dispose();let n=this.field=e.scene;n.userData.ready||(n.userData.ready=!0,n.traverse(i=>{if(i.isMesh){i.castShadow=!0,i.receiveShadow=!0;for(let r of[].concat(i.material))r.name==="Dirt"&&r.color.setRGB(.5,.33,.19)}})),t.add(n),this.nodes={};for(let i of[-1,1]){let r=i<0?"blue":"red";for(let a of["base_"+r,...Ve.map(o=>`tower_${r}_${o}`)]){let o=n.getObjectByName(a),l=n.getObjectByName("ruin_"+a);l.visible=!1;let c=[];o.traverse(u=>{u.isMesh&&(u.userData.own||(u.material=u.material.clone(),u.userData.own=!0),c.push(u.material))});let h=null;a.startsWith("tower")&&(h=document.createElement("div"),h.className="tbar "+(i<0?"b":"r"),h.innerHTML="<i></i>",this.overlay.appendChild(h)),o.userData.base||(o.userData.base=o.position.clone(),o.userData.scale=o.scale.clone()),this.nodes[a]={body:o,ruin:l,mats:c,base:o.userData.base,scale:o.userData.scale,shake:0,flash:0,bar:h}}}if(this.laneMats)for(let i of this.laneMats)i.dispose();this.laneMarks=this.makeLaneMarks(),this.setMood(ao),this.view&&this.resize()}setMood(e={}){let t=(n,i)=>n?new Te(n[0],n[1],n[2]):new Te(i);this.sun.color.copy(t(e.sun,16775406)),this.sun.intensity=e.sunI??3.4,this.hemi.color.copy(t(e.hemiSky,11060464)),this.hemi.intensity=e.hemiI??1.25,this.renderer.setClearColor(new Te(e.bg||"#0d1712")),this.scene.fog=e.fog?new wa(new Te(e.fog),e.fogNear??100,e.fogFar??180):null}applyQuality(){let e=this.quality.preset,t=window.devicePixelRatio||1;this.renderer.setPixelRatio(Math.max(.5,Math.min(t,e.pixelRatio)));let n=e.shadow>0;(this.renderer.shadowMap.enabled!==n||n&&this.sun.shadow.mapSize.x!==e.shadow)&&(this.renderer.shadowMap.enabled=n,this.sun.castShadow=n,n&&(this.sun.shadow.mapSize.set(e.shadow,e.shadow),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.scene.traverse(i=>{if(i.material)for(let r of[].concat(i.material))r.needsUpdate=!0}));for(let i of this.clouds)i.visible=e.clouds;for(let i of this.views.values())i.blob.visible=e.blob;this.fxScale=e.fx,this.cap=e.cap,this.resize()}setViewport(e,t=0,n=0){this.view=e,this.topPad=t,this.bottomPad=n,this.resize()}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);let[n,i]=kr,r=Math.sin(Ui),a=Math.cos(Ui),o=[[-n-1,-i-1.5,0],[n+1,-i-1.5,0],[-n-1,i+1,0],[n+1,i+1,0],[Fi[1][0],Fi[1][1],Dn.height+2.5],[Fi[-1][0],Fi[-1][1],Dn.height+2]],l=1e9,c=-1e9,h=1e9,u=-1e9;for(let[R,M,S]of o){let b=M*r+S*a;l=Math.min(l,R),c=Math.max(c,R),h=Math.min(h,b),u=Math.max(u,b)}let d=this.bottomPad||0,f=Math.max(1,this.view.w),g=Math.max(1,this.view.h-(this.topPad||0)-d),v=Math.max((c-l)/f,(u-h)/g),m=(l+c)/2,w=(h+u)/2-(d+g/2)*v;Object.assign(this.cam,{left:m-f*v/2,right:m+f*v/2,bottom:w,top:w+this.view.h*v}),this.cam.updateProjectionMatrix(),this.mPerPx=v}makeLaneMarks(){let e={[-1]:{},1:{}};this.laneMats=[];for(let t of[-1,1]){let n=new en({color:t<0?16765803:16751754,transparent:!0,opacity:.6,depthWrite:!1});this.laneMats.push(n);for(let i of Ve){let r=nn[i],a=[],o=[],l=24,c=1.35;for(let d=0;d<=l;d++){let f=2+11*d/l,g=t<0?f:r.length-f,v=r.at(g),m=c*(d>l-5?(l-d)/5:1),p=bt(v.x-v.dy*m,v.y+v.dx*m,.25),w=bt(v.x+v.dy*m,v.y-v.dx*m,.25);if(a.push(p.x,p.y,p.z,w.x,w.y,w.z),d){let R=d*2;o.push(R-2,R-1,R,R-1,R+1,R)}}let h=new Pt;h.setAttribute("position",new Tt(a,3)),h.setIndex(o);let u=new _t(h,n);u.renderOrder=3,u.visible=!1,n.side=yn,this.scene.add(u),e[t][i]=u}}return e}setLane(e,t=-1){for(let n in this.laneMarks[t])this.laneMarks[t][n].visible=n===e}structNode(e){return this.nodes[(e.kind==="base"?"base_":"tower_")+(e.side<0?"blue":"red")+(e.kind==="tower"?"_"+e.lane:"")]}toPx(e){let t=e.clone().project(this.cam);return{x:this.view.x+(t.x+1)/2*this.view.w,y:this.view.y+(1-t.y)/2*this.view.h}}puff(e){let t=new ji({map:e.tex||this.T_GLOW,color:e.tint??16777215,transparent:!0,depthWrite:!1,blending:e.add?is:ns,opacity:e.a0??1}),n=new Es(t);n.position.copy(e.p),n.renderOrder=5,this.scene.add(n),this.parts.push({s:n,v:e.v||new D,g:e.g||0,life:0,max:e.life||.5,s0:e.s0??.6,s1:e.s1??.1,a0:e.a0??1})}burst(e,t,n){t=Math.max(1,Math.round(t*this.fxScale));for(let i=0;i<t;i++){let r=Math.random()*Math.PI*2,a=(n.speed||3)*(.4+Math.random()*.8),o=new D(Math.cos(r)*a,(Math.random()*.8+.2)*a*.7+(n.up||0),Math.sin(r)*a*.6),l=e.clone().add(new D((Math.random()-.5)*(n.spread||0),(Math.random()-.5)*(n.spread||0)*.5,0));this.puff({...n,p:l,v:o,life:(n.life||.5)*(.7+Math.random()*.6)})}}text(e,t,n,i){let r=this.toPx(e),a=document.createElement("div");a.className="float "+(n||""),a.textContent=t,i&&(a.style.color=i),a.style.left=r.x+(Math.random()-.5)*12+"px",a.style.top=r.y+"px",a.style.fontSize=Math.max(12,.62/(this.mPerPx||.03)*(n==="counter"?1.15:1))+"px",this.overlay.appendChild(a),setTimeout(()=>a.remove(),950)}unitView(e){let t=this.views.get(e.id);if(t)return t;let n=this.models[e.model],i=Ic(n.scene),r=Zp*(e.scale||1);i.scale.setScalar(r),i.rotation.y=Math.atan2(e.fx,-e.fy);let a=[];i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.material=u.material.clone(),u.material.transparent=!0,e.tint&&u.material.color.multiply(new Te(e.tint)),a.push(u.material))}),this.scene.add(i);let o=new Xa(i),l={};for(let u of n.animations)l[u.name]=o.clipAction(u);let c=new _t(this.blobGeo,this.blobMat.clone());c.scale.set(1.6*(e.scale||1),1,1*(e.scale||1)),c.visible=this.quality.preset.blob,c.renderOrder=1,this.scene.add(c);let h=document.createElement("div");return h.className="bar "+(e.side<0?"b":"r")+(e.special?" big":""),h.innerHTML="<i></i>",this.overlay.appendChild(h),t={obj:i,mixer:o,actions:l,mats:a,anim:null,bar:h,blob:c,pop:0,sc:r},this.views.set(e.id,t),t}play(e,t){if(e.anim===t)return;let n=e.actions[t];if(!n)return;let i=t==="death"||t==="spawn";n.reset(),n.setLoop(i?xc:_c),n.clampWhenFinished=i,n.timeScale=t==="spawn"?2:1,e.anim&&e.actions[e.anim]&&n.crossFadeFrom(e.actions[e.anim],t==="spawn"?0:.12,!1),n.play(),e.anim=t}removeUnit(e){let t=this.views.get(e);t&&(this.scene.remove(t.obj,t.blob),t.blob.material.dispose(),t.bar.remove(),this.views.delete(e))}clear(){for(let e of[...this.views.keys()])this.removeUnit(e);for(let e of this.projViews.values())this.scene.remove(e.g);this.projViews.clear();for(let e of this.parts)this.scene.remove(e.s),e.s.material.dispose();this.parts=[];for(let e of Object.values(this.nodes))e.body.visible=!0,e.ruin.visible=!1,e.flash=0,e.body.scale.copy(e.scale);for(let e of this.rings)this.scene.remove(e.m),e.m.material.dispose();this.rings=[],this.focus=null,this.cam.zoom=1,this.cam.updateProjectionMatrix(),this.overlay.querySelectorAll(".float").forEach(e=>e.remove())}makeProjectile(e){let t=new pn,n=un[e.side].color;if(e.kind==="arrow"){let i=new _t(new br(.03,.03,.8,5),new Ln({color:8016432}));i.rotation.z=Math.PI/2;let r=new _t(new Oa(.07,.18,6),new Ln({color:13620956}));r.rotation.z=-Math.PI/2,r.position.x=.45;let a=new _t(new es(.16,.12,.02),new Ln({color:e.side<0?5223423:16736851}));a.position.x=-.36;let o=new pn;o.add(i,r,a),t.add(o),t.userData.inner=o}else if(e.kind==="orb"){let i=new Es(new ji({map:this.T_GLOW,color:n,blending:is,depthWrite:!1,transparent:!0}));i.scale.setScalar(1.3);let r=new Es(new ji({map:this.T_GLOW,color:16777215,blending:is,depthWrite:!1,transparent:!0}));r.scale.setScalar(.5),t.add(i,r),t.userData.glow=i}else{let i=new _t(new Fa(.45,12,10),new Ln({color:2829104,roughness:.4,metalness:.5}));i.castShadow=!0,t.add(i)}return t.renderOrder=6,this.scene.add(t),{g:t,last:null}}handle(e,t){for(let n of e)if(n.type==="spawn"){let i=bt(n.unit.x,n.unit.y,.3);this.ring(n.unit.x,n.unit.y,un[n.unit.side].color),n.unit.side>0?this.burst(i,14,{tex:this.T_SMOKE,tint:10354570,add:!0,speed:1.4,up:.6,life:.9,s0:.9,s1:1.8,a0:.5}):this.burst(i,10,{tex:this.T_SMOKE,tint:15260872,speed:1.8,up:.4,life:.7,s0:.7,s1:1.5,a0:.6}),Oe.play("deploy")}else if(n.type==="hit"){let i=bt(n.x,n.y,n.z);this.burst(i,n.counter?14:8,{tint:n.counter?16757575:16773560,add:!0,speed:n.counter?6:4.5,life:.3,s0:.45,s1:.06}),this.text(bt(n.x,n.y,n.z+.9),n.counter?n.dmg+"!":n.dmg,n.counter?"counter":"",n.side<0?"#ffe27a":"#ffb08a"),Oe.play(n.counter?"counter":"hit")}else if(n.type==="death")this.burst(bt(n.unit.x,n.unit.y,.6),10,{tex:this.T_SMOKE,tint:14275269,speed:1.5,up:.3,life:1,s0:.8,s1:1.7,a0:.45});else if(n.type==="structHit"){let i=this.structNode(n.struct);i.shake=.18,i.flash=Math.min(1,i.flash+.5);let r=bt(n.x,n.y,n.z);this.burst(r,12,{tint:16765562,add:!0,speed:5.5,life:.35,s0:.5,s1:.06}),this.text(bt(n.x,n.y,n.z+.5),n.dmg,"","#ffffff"),this.shake=Math.max(this.shake,.015),Oe.play("castle")}else if(n.type==="structDown"){let i=n.struct,r=this.structNode(i),a=i.kind==="base";r.body.visible=!1,r.ruin.visible=!0;let o=bt(i.x,i.y,a?3:2);this.burst(o,a?40:24,{tex:this.T_SMOKE,tint:12103068,speed:a?4:3,up:.8,life:2,s0:1.4,s1:a?3.6:2.6,a0:.75,spread:a?3:2}),this.burst(o,a?30:16,{tint:16760938,add:!0,speed:7,life:.6,s0:.7,s1:.1,spread:2}),this.shake=a?.3:.15,Oe.play("cannon")}else if(n.type==="launch")this.projViews.set(n.proj.id,this.makeProjectile(n.proj)),n.proj.from&&n.proj.from.role===null&&this.burst(bt(n.proj.sx,n.proj.sy,n.proj.sz),5,{tint:16767120,add:!0,speed:2,life:.25,s0:.7,s1:.1}),n.proj.kind==="orb"?Oe.play("magic"):n.proj.kind==="arrow"&&Oe.play("arrow");else if(n.type==="cannon"){let i=bt(n.proj.sx,n.proj.sy,7.5);this.burst(i,16,{tex:this.T_SMOKE,tint:13616824,speed:2.5,up:.5,life:1,s0:.8,s1:2,a0:.7}),this.burst(i,10,{tint:16760938,add:!0,speed:5,life:.3,s0:.6,s1:.1}),Oe.play("cannon")}else if(n.type==="land"){let i=bt(n.proj.x,n.proj.y,n.proj.z);n.proj.kind==="orb"?(this.burst(i,16,{tint:un[n.proj.side].color,add:!0,speed:4.5,life:.45,s0:.8,s1:.1}),this.puff({p:i,tint:un[n.proj.side].color,add:!0,life:.3,s0:1.4,s1:3.6,a0:.8})):n.proj.kind==="ball"&&(this.burst(i,30,{tint:16757575,add:!0,speed:7,life:.5,s0:.9,s1:.1,spread:1.5}),this.burst(i,24,{tex:this.T_SMOKE,tint:9274488,speed:3,up:.6,life:1.4,s0:1.2,s1:2.6,a0:.7,spread:2}),this.shake=Math.max(this.shake,.15),Oe.play("cannon"))}}ring(e,t,n){let i=new _t(this.ringGeo,new en({map:this.ringTex,color:n,transparent:!0,depthWrite:!1,blending:is}));i.position.copy(bt(e,t,.3)),i.renderOrder=4,this.scene.add(i),this.rings.push({m:i,t:0})}focusOn(e,t,n){this.focus={x:e,y:t,z:n,t:0}}update(e,t){for(let a=this.rings.length-1;a>=0;a--){let o=this.rings[a];o.t+=e;let l=o.t/.7;if(l>=1){this.scene.remove(o.m),o.m.material.dispose(),this.rings.splice(a,1);continue}o.m.scale.setScalar(.8+2.4*Math.sqrt(l)),o.m.rotation.y+=e*2,o.m.material.opacity=1-l}if(this.glintT-=e,oo.length>1&&this.glintT<=0&&this.fxScale>.3){this.glintT=.12/this.fxScale;let[a,o]=oo,l=Math.random(),c=a[0]+(o[0]-a[0])*l+(Math.random()-.5)*2.4,h=a[1]+(o[1]-a[1])*l+(Math.random()-.5)*2.4;Math.abs(c)<kr[0]&&Math.abs(h)<kr[1]&&this.puff({p:bt(c,h,.15),tint:14677759,add:!0,life:.7,s0:.05,s1:.45,a0:.8})}for(let a of t.units){let o=this.unitView(a);if(this.play(o,a.anim),o.mixer.update(e),o.obj.position.copy(bt(a.x,a.y,0)),o.pop<.4){o.pop+=e;let u=Math.min(1,o.pop/.4),d=Math.sin(u*Math.PI)*.18,f=o.sc*Math.max(.05,vM(u));o.obj.scale.set(f*(1+d),f*(1-d),f*(1+d))}let c=Math.atan2(a.fx,-a.fy)-o.obj.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),o.obj.rotation.y+=c*Math.min(1,e*10),a.anim==="walk"&&o.actions.walk&&(o.actions.walk.timeScale=Math.min(1.6,(Ot[a.role]||Fr[a.role]).speed/1.3)),o.blob.position.copy(bt(a.x,a.y,.03));let h=1;a.state==="spawn"&&a.anim==="walk"&&(h=Math.min(1,a.stateT/.35)),a.state==="death"&&(h=1-Math.max(0,Math.min(1,(a.stateT-t.dur[a.model].death-.1)/1)));for(let u of o.mats)u.opacity=h,u.emissive.setScalar(a.flash*.9);if(o.blob.material.opacity=h,(a.hp<a.maxHp||a.special)&&a.state!=="death"){let u=this.toPx(bt(a.x,a.y,3.9*(a.scale||1)));o.bar.style.display="block",o.bar.style.transform=`translate(${u.x}px, ${u.y}px)`,o.bar.style.width=Math.max(22,1.7/(this.mPerPx||.03))+"px",o.bar.firstChild.style.width=a.hp/a.maxHp*100+"%"}else o.bar.style.display="none"}let n=new Set(t.units.map(a=>a.id));for(let a of[...this.views.keys()])n.has(a)||this.removeUnit(a);let i=new Set(t.projectiles.map(a=>a.id));for(let a of t.projectiles){let o=this.projViews.get(a.id);if(!o)continue;let l=bt(a.x,a.y,a.z);if(o.g.userData.inner&&o.last){let c=l.clone().sub(o.last);c.lengthSq()>1e-6&&o.g.userData.inner.quaternion.setFromUnitVectors(new D(1,0,0),c.normalize())}o.last=l.clone(),o.g.position.copy(l),o.g.userData.glow?(o.g.userData.glow.scale.setScalar(1.3+Math.sin(t.time*30)*.15),Math.random()<this.fxScale&&this.puff({p:l.clone(),tint:un[a.side].color,add:!0,life:.35,s0:.5,s1:.05,a0:.8})):a.kind==="ball"&&Math.random()<this.fxScale&&this.puff({p:l.clone(),tex:this.T_SMOKE,tint:10129796,life:.6,s0:.5,s1:1.1,a0:.5})}for(let[a,o]of this.projViews)i.has(a)||(this.scene.remove(o.g),this.projViews.delete(a));for(let a=this.parts.length-1;a>=0;a--){let o=this.parts[a];o.life+=e;let l=o.life/o.max;if(l>=1){this.scene.remove(o.s),o.s.material.dispose(),this.parts.splice(a,1);continue}o.v.y+=o.g*e,o.v.multiplyScalar(Math.pow(.12,e)),o.s.position.addScaledVector(o.v,e),o.s.scale.setScalar(o.s0+(o.s1-o.s0)*l),o.s.material.opacity=o.a0*(1-l*l)}for(let a of Object.values(this.nodes)){a.shake=Math.max(0,a.shake-e),a.flash=Math.max(0,a.flash-e*8),a.body.position.x=a.base.x+(a.shake>0?(Math.random()-.5)*.12:0);let o=a.shake>0?Math.sin(a.shake/.18*Math.PI)*.05:0;a.body.scale.set(a.scale.x*(1+o),a.scale.y*(1-o),a.scale.z*(1+o));for(let l of a.mats)l.emissive.setScalar(a.flash*.15)}for(let a of t.structs||[]){if(a.kind!=="tower")continue;let o=this.structNode(a);if(!o.bar)continue;if(!a.alive){o.bar.style.display="none";continue}let l=this.toPx(bt(a.x,a.y,zs.height+1.2));o.bar.style.display="block",o.bar.style.transform=`translate(${l.x}px, ${l.y}px)`,o.bar.firstChild.style.width=a.hp/a.max*100+"%"}for(let a of this.laneMats||[])a.opacity=.55+Math.sin(performance.now()/300)*.2;for(let a of this.clouds)a.position.x+=a.speed*e,a.position.x>30&&(a.position.x=-30,a.position.z=-(-6+Math.random()*22));this.shake=Math.max(0,this.shake-e*.5);let r=this.camBase.clone();if(this.focus){let a=this.focus;a.t+=e;let o=MM(Math.min(1,a.t/2.2))*.55,l=a.y*Math.sin(Ui)+a.z*Math.cos(Ui);r.addScaledVector(new D(1,0,0),a.x*o).addScaledVector(this.cam.up,l*o),this.cam.zoom=1+o*.7,this.cam.updateProjectionMatrix()}this.cam.position.copy(r).add(new D((Math.random()-.5)*this.shake*2,(Math.random()-.5)*this.shake*2,0))}render(){let e=this.renderer,t=window.innerWidth,n=window.innerHeight,i=this.view;e.setScissorTest(!0),e.setViewport(0,0,t,n),e.setScissor(0,0,t,n),e.clear();let r=n-i.y-i.h;e.setViewport(i.x,r,i.w,i.h),e.setScissor(i.x,r,i.w,i.h),e.render(this.scene,this.cam)}};var om="classArena.quality",lm="classArena.showFps";function cm(s,e){try{let t=localStorage.getItem(s);return t===null?e:t}catch{return e}}function hm(s,e){try{localStorage.setItem(s,e)}catch{}}var kc=class{constructor(){this.choice=cm(om,"auto"),this.choice!=="auto"&&!hs[this.choice]&&(this.choice="auto"),this.level=this.choice==="auto"?"high":this.choice,this.showFps=cm(lm,"0")==="1",this.listeners=[],this.reset()}get preset(){return hs[this.level]}onChange(e){this.listeners.push(e)}emit(e){for(let t of this.listeners)t(this.level,e)}reset(){this.frames=0,this.acc=0,this.phase="warmup",this.fps=60}choose(e){this.choice=e,hm(om,e),e!=="auto"&&(this.level=e,this.emit("user")),this.reset()}setShowFps(e){this.showFps=e,hm(lm,e?"1":"0")}tick(e,t){if(this.fps+=((e>0?1/e:60)-this.fps)*.05,!(!t||this.choice!=="auto")){if(this.frames++,this.acc+=e,this.phase==="warmup"&&this.acc>=1)this.phase="first",this.frames=0,this.acc=0;else if(this.phase==="first"&&this.acc>=5){let n=this.frames/this.acc,i=n>=45?"high":n>=30?"mid":n>=20?"low":"lowest";this.phase="watch",this.frames=0,this.acc=0,i!==this.level&&(this.level=i,this.emit("auto-first"))}else if(this.phase==="watch"&&this.acc>=10){let n=this.frames/this.acc;this.frames=0,this.acc=0;let i=Br.indexOf(this.level);n<24&&i<Br.length-1&&(this.level=Br[i+1],this.emit("auto-down"))}}}};var fm="classArena.music",Wc=!0;try{Wc=localStorage.getItem(fm)!=="0"}catch{}var zc=s=>440*Math.pow(2,(s-69)/12),SM=[50,48,46,48,50,53,48,50],bM=[[74,null,77,null,81,null,77,74],[72,null,76,null,79,null,76,null],[70,null,74,77,74,null,70,null],[72,74,76,null,79,null,76,74],[74,null,77,null,81,79,77,null],[77,null,81,null,84,null,81,77],[76,null,72,null,79,77,76,null],[74,null,null,null,69,null,74,null]],An=null,um=null,Hc=0,ld=0,cd=104,co=!1,hd=1;function Vc(s,e,t,n,i){let r=Oe.ctx,a=r.createOscillator(),o=r.createGain();a.type=n,a.frequency.setValueAtTime(e,s),o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(i,s+.012),o.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(o),o.connect(An),a.start(s),a.stop(s+t+.03)}function wM(s){let e=Oe.ctx,t=e.createOscillator(),n=e.createGain();t.frequency.setValueAtTime(140,s),t.frequency.exponentialRampToValueAtTime(45,s+.18),n.gain.setValueAtTime(.9,s),n.gain.exponentialRampToValueAtTime(.001,s+.22),t.connect(n),n.connect(An),t.start(s),t.stop(s+.25)}var Gc=null;function dm(s,e,t,n){let i=Oe.ctx;if(!Gc){let l=i.sampleRate*.3;Gc=i.createBuffer(1,l,i.sampleRate);let c=Gc.getChannelData(0);for(let h=0;h<l;h++)c[h]=Math.random()*2-1}let r=i.createBufferSource(),a=i.createBiquadFilter(),o=i.createGain();r.buffer=Gc,a.type="bandpass",a.frequency.value=t,o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(a),a.connect(o),o.connect(An),r.start(s),r.stop(s+e+.02)}function TM(s,e,t){let n=Math.floor(e/16)%8,i=e%16,r=SM[n];if(i%8===0&&wM(s),(i===4||i===12)&&dm(s,.12,1800,.35),(t?i%2===0:i%4===2)&&dm(s,.04,7e3,t?.12:.08),i%4===0&&Vc(s,zc(r-12),.32,"triangle",.32),i%2===0){let a=bM[n][i/2];a&&Vc(s,zc(a),.22,"square",.05)}i===0&&(Vc(s,zc(r+12),1.6,"sawtooth",.018),Vc(s,zc(r+15+(r===53?1:0)),1.6,"sawtooth",.014))}var dn={get on(){return Wc},set(s){Wc=s;try{localStorage.setItem(fm,s?"1":"0")}catch{}s||this.stop()},start(){let s=Oe.ctx;!Wc||!s||co||(An||(An=s.createGain(),An.gain.value=1e-4,An.connect(s.destination)),co=!0,Hc=s.currentTime+.1,ld=0,An.gain.cancelScheduledValues(s.currentTime),An.gain.setTargetAtTime(.13*hd,s.currentTime,.4),um=setInterval(()=>{let e=Oe.ctx;if(e)for(;Hc<e.currentTime+.15;)TM(Hc,ld,cd>110),Hc+=60/cd/4,ld++},30))},stop(){if(!co)return;co=!1,clearInterval(um);let s=Oe.ctx;s&&An&&An.gain.setTargetAtTime(1e-4,s.currentTime,.2)},intense(s){cd=s?128:104},duck(s){hd=s?.35:1;let e=Oe.ctx;e&&An&&co&&An.gain.setTargetAtTime(.13*hd,e.currentTime,.2)}};var ho={name:"\uC0AC\uC790\uC131\uC5B4",hint:"\uB73B \uC54C\uACE0 \uACE0\uB974\uAE30",kind:"\uB2E8\uACC4\uD615",grades:[3,6],note:"w \uC0AC\uC790\uC131\uC5B4, h \uD55C\uC790, m \uC9E7\uC740 \uB73B(\uBCF4\uAE30\uB85C \uC500, 20\uC790 \uC548\uD30E), g \uAD8C\uC7A5 \uD559\uB144(\uC774\uC0C1), d \uB09C\uC774\uB3C4 0~2, same \uB73B\uC774 \uAC19\uAC70\uB098 \uC544\uC8FC \uBE44\uC2B7\uD55C \uBB36\uC74C(\uC11C\uB85C \uC624\uB2F5 \uBCF4\uAE30\uB85C \uC4F0\uC9C0 \uC54A\uC74C). \uB73B\uD480\uC774\uB294 \uC0C8\uB85C \uC500.",items:[{w:"\uC77C\uC11D\uC774\uC870",h:"\u4E00\u77F3\u4E8C\u9CE5",m:"\uD55C \uAC00\uC9C0 \uC77C\uB85C \uB450 \uAC00\uC9C0 \uC774\uB4DD\uC744 \uBD04",g:3,d:0,same:"two"},{w:"\uC791\uC2EC\uC0BC\uC77C",h:"\u4F5C\u5FC3\u4E09\u65E5",m:"\uAD73\uAC8C \uBA39\uC740 \uB9C8\uC74C\uC774 \uC0AC\uD758\uC744 \uBABB \uAC10",g:3,d:0},{w:"\uB3D9\uBB38\uC11C\uB2F5",h:"\u6771\u554F\u897F\u7B54",m:"\uBB3B\uB294 \uB9D0\uC5D0 \uC5C9\uB6B1\uD55C \uB300\uB2F5\uC744 \uD568",g:3,d:0,same:"talk"},{w:"\uC2ED\uC911\uD314\uAD6C",h:"\u5341\u4E2D\u516B\u4E5D",m:"\uC5F4 \uAC00\uC6B4\uB370 \uC5EC\uB35F\uC774\uB098 \uC544\uD649, \uAC70\uC758 \uB2E4",g:3,d:0},{w:"\uC774\uC2EC\uC804\uC2EC",h:"\u4EE5\u5FC3\u50B3\u5FC3",m:"\uB9D0\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB9C8\uC74C\uC774 \uC11C\uB85C \uD1B5\uD568",g:3,d:0},{w:"\uC720\uBE44\uBB34\uD658",h:"\u6709\u5099\u7121\u60A3",m:"\uBBF8\uB9AC \uC900\uBE44\uD558\uBA74 \uAC71\uC815\uD560 \uC77C\uC774 \uC5C6\uC74C",g:3,d:0},{w:"\uB2E4\uB2E4\uC775\uC120",h:"\u591A\u591A\u76CA\u5584",m:"\uB9CE\uC73C\uBA74 \uB9CE\uC744\uC218\uB85D \uB354 \uC88B\uC74C",g:3,d:0},{w:"\uAE08\uC2DC\uCD08\uBB38",h:"\u4ECA\u59CB\u521D\u805E",m:"\uC774\uC81C \uCC98\uC74C\uC73C\uB85C \uB4E4\uC74C",g:3,d:0},{w:"\uACE0\uC9C4\uAC10\uB798",h:"\u82E6\u76E1\u7518\u4F86",m:"\uACE0\uC0DD \uB05D\uC5D0 \uC990\uAC70\uC6C0\uC774 \uC634",g:3,d:0},{w:"\uCE60\uC804\uD314\uAE30",h:"\u4E03\u985A\u516B\u8D77",m:"\uC5EC\uB7EC \uBC88 \uC2E4\uD328\uD574\uB3C4 \uB2E4\uC2DC \uC77C\uC5B4\uC12C",g:3,d:0},{w:"\uBC31\uBC1C\uBC31\uC911",h:"\u767E\u767C\u767E\u4E2D",m:"\uC3D8\uAC70\uB098 \uC9D0\uC791\uD558\uB294 \uAC83\uB9C8\uB2E4 \uB2E4 \uB9DE\uC74C",g:3,d:0},{w:"\uAC01\uC591\uAC01\uC0C9",h:"\u5404\u6A23\u5404\u8272",m:"\uC800\uB9C8\uB2E4 \uBAA8\uC591\uACFC \uBE5B\uAE54\uC774 \uB2E4\uB984",g:3,d:0},{w:"\uBC15\uC7A5\uB300\uC18C",h:"\u62CD\u638C\u5927\u7B11",m:"\uC190\uBF09\uC744 \uCE58\uBA70 \uD06C\uAC8C \uC6C3\uC74C",g:3,d:0},{w:"\uBB34\uC6A9\uC9C0\uBB3C",h:"\u7121\u7528\u4E4B\u7269",m:"\uC4F8\uBAA8\uAC00 \uC5C6\uB294 \uBB3C\uAC74",g:3,d:0},{w:"\uC8FD\uB9C8\uACE0\uC6B0",h:"\u7AF9\u99AC\u6545\u53CB",m:"\uC5B4\uB9B4 \uB54C\uBD80\uD130 \uAC19\uC774 \uB180\uBA70 \uC790\uB780 \uCE5C\uAD6C",g:3,d:0},{w:"\uC5ED\uC9C0\uC0AC\uC9C0",h:"\u6613\u5730\u601D\u4E4B",m:"\uCC98\uC9C0\uB97C \uBC14\uAFB8\uC5B4 \uC0DD\uAC01\uD574 \uBD04",g:3,d:0},{w:"\uB3D9\uACE0\uB3D9\uB77D",h:"\u540C\u82E6\u540C\u6A02",m:"\uAD34\uB85C\uC6C0\uACFC \uC990\uAC70\uC6C0\uC744 \uD568\uAED8\uD568",g:3,d:0},{w:"\uC790\uD654\uC790\uCC2C",h:"\u81EA\u756B\u81EA\u8B9A",m:"\uC790\uAE30\uAC00 \uD55C \uC77C\uC744 \uC2A4\uC2A4\uB85C \uCE6D\uCC2C\uD568",g:3,d:0},{w:"\uC774\uAD6C\uB3D9\uC131",h:"\u7570\u53E3\u540C\u8072",m:"\uC5EC\uB7EC \uC0AC\uB78C\uC774 \uC785\uC744 \uBAA8\uC544 \uAC19\uC740 \uB9D0\uC744 \uD568",g:3,d:0},{w:"\uB9C9\uC0C1\uB9C9\uD558",h:"\u83AB\u4E0A\u83AB\u4E0B",m:"\uB204\uAC00 \uB354 \uB0AB\uACE0 \uBABB\uD55C\uC9C0 \uAC00\uB9AC\uAE30 \uC5B4\uB824\uC6C0",g:3,d:0,same:"even"},{w:"\uC560\uC9C0\uC911\uC9C0",h:"\u611B\u4E4B\u91CD\u4E4B",m:"\uBAB9\uC2DC \uC0AC\uB791\uD558\uACE0 \uC18C\uC911\uD788 \uC5EC\uAE40",g:3,d:0},{w:"\uC6B0\uC655\uC88C\uC655",h:"\u53F3\u5F80\u5DE6\u5F80",m:"\uC5B4\uCA54 \uC904 \uBAB0\uB77C \uC774\uB9AC\uC800\uB9AC \uC654\uB2E4 \uAC14\uB2E4 \uD568",g:3,d:0},{w:"\uCC9C\uACE0\uB9C8\uBE44",h:"\u5929\u9AD8\u99AC\u80A5",m:"\uD558\uB298\uC740 \uB192\uACE0 \uB9D0\uC740 \uC0B4\uCC0C\uB294 \uAC00\uC744",g:3,d:0},{w:"\uC77C\uAC70\uC591\uB4DD",h:"\u4E00\u64E7\u5169\u5F97",m:"\uD55C \uBC88\uC758 \uC77C\uB85C \uB450 \uAC00\uC9C0\uB97C \uC5BB\uC74C",g:4,d:1,same:"two"},{w:"\uB300\uAE30\uB9CC\uC131",h:"\u5927\u5668\u6669\u6210",m:"\uD070 \uC778\uBB3C\uC740 \uB2A6\uAC8C \uC774\uB8E8\uC5B4\uC9D0",g:4,d:1},{w:"\uC5B4\uBD80\uC9C0\uB9AC",h:"\u6F01\u592B\u4E4B\u5229",m:"\uB458\uC774 \uB2E4\uD22C\uB294 \uC0AC\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uB4DD\uC744 \uBD04",g:4,d:1},{w:"\uC790\uC5C5\uC790\uB4DD",h:"\u81EA\u696D\u81EA\u5F97",m:"\uC790\uAE30\uAC00 \uD55C \uC77C\uC758 \uACB0\uACFC\uB97C \uC790\uAE30\uAC00 \uBC1B\uC74C",g:4,d:1,same:"self"},{w:"\uC778\uACFC\uC751\uBCF4",h:"\u56E0\u679C\u61C9\u5831",m:"\uD55C \uC77C\uC5D0 \uB530\uB77C \uC54C\uB9DE\uC740 \uACB0\uACFC\uB97C \uBC1B\uC74C",g:4,d:1,same:"self"},{w:"\uC77C\uCDE8\uC6D4\uC7A5",h:"\u65E5\u5C31\u6708\u5C07",m:"\uB0A0\uB9C8\uB2E4 \uB2EC\uB9C8\uB2E4 \uC2E4\uB825\uC774 \uC790\uB78C",g:4,d:1},{w:"\uC624\uB9AC\uBB34\uC911",h:"\u4E94\u91CC\u9727\u4E2D",m:"\uC77C\uC774 \uC5B4\uB5BB\uAC8C \uB420\uC9C0 \uC804\uD600 \uC54C \uC218 \uC5C6\uC74C",g:4,d:1},{w:"\uACFC\uC720\uBD88\uAE09",h:"\u904E\u7336\u4E0D\u53CA",m:"\uC9C0\uB098\uCE5C \uAC83\uC740 \uBAA8\uC790\uB780 \uAC83\uACFC \uAC19\uC74C",g:4,d:1},{w:"\uCCAD\uCD9C\uC5B4\uB78C",h:"\u9751\u51FA\u65BC\u85CD",m:"\uC81C\uC790\uAC00 \uC2A4\uC2B9\uBCF4\uB2E4 \uB354 \uB098\uC74C",g:4,d:1},{w:"\uC0AC\uD544\uADC0\uC815",h:"\u4E8B\u5FC5\u6B78\u6B63",m:"\uBAA8\uB4E0 \uC77C\uC740 \uACB0\uAD6D \uBC14\uB974\uAC8C \uB3CC\uC544\uAC10",g:4,d:1},{w:"\uB9C8\uC774\uB3D9\uD48D",h:"\u99AC\u8033\u6771\u98A8",m:"\uB0A8\uC758 \uB9D0\uC744 \uADC0\uB2F4\uC544\uB4E3\uC9C0 \uC54A\uACE0 \uD758\uB824\uBC84\uB9BC",g:4,d:1,same:"ignore"},{w:"\uC124\uC0C1\uAC00\uC0C1",h:"\u96EA\u4E0A\u52A0\u971C",m:"\uC5B4\uB824\uC6B4 \uC77C\uC774 \uC5CE\uCE5C \uB370 \uB36E\uCCD0 \uC77C\uC5B4\uB0A8",g:4,d:1},{w:"\uC804\uD654\uC704\uBCF5",h:"\u8F49\u798D\u7232\u798F",m:"\uB098\uC05C \uC77C\uC774 \uC624\uD788\uB824 \uC88B\uC740 \uC77C\uC774 \uB428",g:4,d:1,same:"luck"},{w:"\uAC10\uC5B8\uC774\uC124",h:"\u7518\u8A00\u5229\u8AAA",m:"\uB4E3\uAE30 \uC88B\uAC8C \uAFB8\uBBFC \uB2EC\uCF64\uD55C \uB9D0",g:4,d:1},{w:"\uACAC\uBB3C\uC0DD\uC2EC",h:"\u898B\u7269\u751F\u5FC3",m:"\uBB3C\uAC74\uC744 \uBCF4\uBA74 \uAC16\uACE0 \uC2F6\uC740 \uB9C8\uC74C\uC774 \uC0DD\uAE40",g:4,d:1},{w:"\uAE08\uC0C1\uCCA8\uD654",h:"\u9326\u4E0A\u6DFB\u82B1",m:"\uC88B\uC740 \uC77C\uC5D0 \uC88B\uC740 \uC77C\uC774 \uB610 \uB354\uD574\uC9D0",g:4,d:1},{w:"\uB2E4\uC7AC\uB2E4\uB2A5",h:"\u591A\u624D\u591A\u80FD",m:"\uC7AC\uC8FC\uC640 \uB2A5\uB825\uC774 \uB9CE\uC74C",g:4,d:1},{w:"\uBB38\uC804\uC131\uC2DC",h:"\u9580\u524D\u6210\u5E02",m:"\uCC3E\uC544\uC624\uB294 \uC0AC\uB78C\uC774 \uB9CE\uC544 \uBB38 \uC55E\uC774 \uBD90\uBE54",g:4,d:1},{w:"\uBE44\uC77C\uBE44\uC7AC",h:"\u975E\u4E00\u975E\u518D",m:"\uD55C\uB450 \uBC88\uC774 \uC544\uB2C8\uACE0 \uC544\uC8FC \uB9CE\uC74C",g:4,d:1},{w:"\uC0B0\uC804\uC218\uC804",h:"\u5C71\u6230\u6C34\u6230",m:"\uC138\uC0C1\uC758 \uC628\uAC16 \uC5B4\uB824\uC6C0\uC744 \uB2E4 \uACAA\uC74C",g:4,d:1},{w:"\uC6A9\uB450\uC0AC\uBBF8",h:"\u9F8D\u982D\u86C7\u5C3E",m:"\uC2DC\uC791\uC740 \uC88B\uC9C0\uB9CC \uB05D\uC774 \uD750\uC9C0\uBD80\uC9C0\uD568",g:4,d:1},{w:"\uC720\uC720\uC0C1\uC885",h:"\u985E\u985E\u76F8\u5F9E",m:"\uBE44\uC2B7\uD55C \uC0AC\uB78C\uB07C\uB9AC \uC11C\uB85C \uC5B4\uC6B8\uB9BC",g:4,d:1},{w:"\uC77C\uC0AC\uCC9C\uB9AC",h:"\u4E00\u7009\u5343\u91CC",m:"\uC77C\uC774 \uB9C9\uD798\uC5C6\uC774 \uBE60\uB974\uAC8C \uC9C4\uD589\uB428",g:4,d:1},{w:"\uC801\uBC18\uD558\uC7A5",h:"\u8CCA\u53CD\u8377\u6756",m:"\uC798\uBABB\uD55C \uC0AC\uB78C\uC774 \uB3C4\uB9AC\uC5B4 \uD070\uC18C\uB9AC\uCE68",g:4,d:1},{w:"\uD45C\uB9AC\uBD80\uB3D9",h:"\u8868\u88CF\u4E0D\u540C",m:"\uAC89\uACFC \uC18D\uC774 \uC11C\uB85C \uB2E4\uB984",g:4,d:1},{w:"\uD559\uC218\uACE0\uB300",h:"\u9DB4\u9996\u82E6\u5F85",m:"\uBAB9\uC2DC \uC560\uD0C0\uAC8C \uAE30\uB2E4\uB9BC",g:4,d:1},{w:"\uD6A1\uC124\uC218\uC124",h:"\u6A6B\u8AAA\u7AEA\u8AAA",m:"\uC55E\uB4A4\uAC00 \uB9DE\uC9C0 \uC54A\uAC8C \uC774 \uB9D0 \uC800 \uB9D0 \uD568",g:4,d:1,same:"talk"},{w:"\uC77C\uC7A5\uC77C\uB2E8",h:"\u4E00\u9577\u4E00\u77ED",m:"\uC88B\uC740 \uC810\uB3C4 \uC788\uACE0 \uB098\uC05C \uC810\uB3C4 \uC788\uC74C",g:4,d:1},{w:"\uC6B0\uACF5\uC774\uC0B0",h:"\u611A\u516C\u79FB\u5C71",m:"\uAFB8\uC900\uD788 \uB178\uB825\uD558\uBA74 \uD070\uC77C\uB3C4 \uC774\uB8F8",g:5,d:2},{w:"\uC6B0\uC774\uB3C5\uACBD",h:"\u725B\u8033\u8B80\u7D93",m:"\uC544\uBB34\uB9AC \uC77C\uB7EC \uC8FC\uC5B4\uB3C4 \uC54C\uC544\uB4E3\uC9C0 \uBABB\uD568",g:5,d:2,same:"ignore"},{w:"\uC548\uD558\uBB34\uC778",h:"\u773C\u4E0B\u7121\u4EBA",m:"\uC798\uB09C \uCCB4\uD558\uBA70 \uB0A8\uC744 \uC5C5\uC2E0\uC5EC\uAE40",g:5,d:2},{w:"\uC5B8\uC911\uC720\uACE8",h:"\u8A00\u4E2D\u6709\u9AA8",m:"\uC608\uC0AC\uB85C\uC6B4 \uB9D0 \uC18D\uC5D0 \uAE4A\uC740 \uB73B\uC774 \uC228\uC5B4 \uC788\uC74C",g:5,d:2},{w:"\uC678\uC720\uB0B4\uAC15",h:"\u5916\u67D4\u5167\u525B",m:"\uAC89\uC740 \uBD80\uB4DC\uB7FD\uC9C0\uB9CC \uC18D\uC740 \uAD73\uC148",g:5,d:2},{w:"\uC870\uC0BC\uBAA8\uC0AC",h:"\u671D\u4E09\u66AE\u56DB",m:"\uC595\uC740\uAF80\uB85C \uB0A8\uC744 \uC18D\uC5EC \uB180\uB9BC",g:5,d:2},{w:"\uC8FC\uAC1D\uC804\uB3C4",h:"\u4E3B\u5BA2\u985A\u5012",m:"\uC911\uC694\uD55C \uAC83\uACFC \uB35C \uC911\uC694\uD55C \uAC83\uC774 \uB4A4\uBC14\uB01C",g:5,d:2},{w:"\uD638\uC2DC\uD0D0\uD0D0",h:"\u864E\u8996\u7708\u7708",m:"\uAE30\uD68C\uB97C \uB178\uB9AC\uBA70 \uAC00\uB9CC\uD788 \uC9C0\uCF1C\uBD04",g:5,d:2},{w:"\uACB0\uCD08\uBCF4\uC740",h:"\u7D50\u8349\u5831\u6069",m:"\uC8FD\uC5B4\uC11C\uB77C\uB3C4 \uC740\uD61C\uB97C \uC78A\uC9C0 \uC54A\uACE0 \uAC1A\uC74C",g:5,d:2},{w:"\uC640\uC2E0\uC0C1\uB2F4",h:"\u81E5\u85AA\u5617\u81BD",m:"\uB73B\uC744 \uC774\uB8E8\uB824\uACE0 \uAD34\uB85C\uC6C0\uC744 \uCC38\uACE0 \uACAC\uB524",g:5,d:2},{w:"\uD615\uC124\uC9C0\uACF5",h:"\u87A2\u96EA\u4E4B\u529F",m:"\uC5B4\uB824\uC6B4 \uD615\uD3B8\uC5D0\uC11C\uB3C4 \uAFB8\uC900\uD788 \uACF5\uBD80\uD568",g:5,d:2},{w:"\uAD70\uACC4\uC77C\uD559",h:"\u7FA4\u9DC4\u4E00\u9DB4",m:"\uC5EC\uB7FF \uAC00\uC6B4\uB370 \uD640\uB85C \uB6F0\uC5B4\uB09C \uC0AC\uB78C",g:5,d:2},{w:"\uC0C8\uC639\uC9C0\uB9C8",h:"\u585E\u7FC1\u4E4B\u99AC",m:"\uC88B\uC740 \uC77C\uACFC \uB098\uC05C \uC77C\uC740 \uBBF8\uB9AC \uC54C \uC218 \uC5C6\uC74C",g:5,d:2,same:"luck"},{w:"\uC77C\uD3B8\uB2E8\uC2EC",h:"\u4E00\u7247\u4E39\u5FC3",m:"\uBCC0\uD558\uC9C0 \uC54A\uB294 \uD55C\uACB0\uAC19\uC740 \uB9C8\uC74C",g:5,d:2},{w:"\uC5B4\uBD88\uC131\uC124",h:"\u8A9E\u4E0D\u6210\u8AAA",m:"\uB9D0\uC774 \uC804\uD600 \uC774\uCE58\uC5D0 \uB9DE\uC9C0 \uC54A\uC74C",g:5,d:2},{w:"\uB09C\uD615\uB09C\uC81C",h:"\u96E3\u5144\u96E3\u5F1F",m:"\uB204\uAC00 \uD615\uC774\uACE0 \uC544\uC6B0\uC778\uC9C0 \uAC00\uB9AC\uAE30 \uC5B4\uB824\uC6C0",g:5,d:2,same:"even"},{w:"\uC624\uBE44\uC774\uB77D",h:"\u70CF\u98DB\u68A8\u843D",m:"\uACF5\uAD50\uB86D\uAC8C \uC77C\uC774 \uACB9\uCCD0 \uC758\uC2EC\uC744 \uBC1B\uC74C",g:5,d:2}]};var Wr={name:"\uB9DE\uCDA4\uBC95",hint:"\uD5F7\uAC08\uB9AC\uB294 \uB9D0 \uBC14\uB85C \uC4F0\uAE30",kind:"\uB2E8\uACC4\uD615",grades:[3,6],note:"r \uBC14\uB978 \uB9D0, x \uD2C0\uB9AC\uAE30 \uC26C\uC6B4 \uB9D0(1~2\uAC1C), s \uBB38\uC7A5(\uFF3F \uC790\uB9AC\uC5D0 r \uB610\uB294 x\uAC00 \uB4E4\uC5B4\uAC10), why \uD2C0\uB838\uC744 \uB54C \uBCF4\uC5EC \uC904 \uC9E7\uC740 \uAE4C\uB2ED(\uD574\uC694\uCCB4), g \uAD8C\uC7A5 \uD559\uB144(\uC774\uC0C1), d \uB09C\uC774\uB3C4 0~2. \uBB38\uC7A5\uC740 \uC0C8\uB85C \uC500.",items:[{r:"\uBA70\uCE60",x:["\uBA87\uC77C"],s:"\uC624\uB298\uC774 \uFF3F\uC774\uC5D0\uC694?",why:"\u2018\uBA87 \uC77C\u2019\uB85C \uC4F0\uC9C0 \uC54A\uACE0 \u2018\uBA70\uCE60\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uC6EC\uC77C",x:["\uC660\uC77C"],s:"\uFF3F\uB85C \uC774\uB807\uAC8C \uC77C\uCC0D \uC654\uC5B4\uC694?",why:"\u2018\uC5B4\uCC0C \uB41C \uC77C\u2019\uC774\uB77C\uB294 \uB73B\uC740 \u2018\uC6EC\uC77C\u2019\uC774\uC5D0\uC694.",g:3,d:0},{r:"\uC660\uC9C0",x:["\uC6EC\uC9C0"],s:"\uC624\uB298\uC740 \uFF3F \uAE30\uBD84\uC774 \uC88B\uC544\uC694.",why:"\u2018\uC65C\uC778\uC9C0\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uC660\uC9C0\u2019\uC608\uC694.",g:3,d:0},{r:"\uC124\uAC70\uC9C0",x:["\uC124\uAC86\uC774"],s:"\uBC25\uC744 \uBA39\uACE0 \uFF3F\uB97C \uD588\uC5B4\uC694.",why:"\u2018\uC124\uAC70\uC9C0\u2019\uAC00 \uD45C\uC900\uC5B4\uC608\uC694.",g:3,d:0},{r:"\uAE68\uB057\uC774",x:["\uAE68\uB057\uD788"],s:"\uC190\uC744 \uFF3F \uC53B\uC5B4\uC694.",why:"\u2018\uAE68\uB057\uD558\uB2E4\u2019 \uAF34\uC758 \uB9D0\uC740 \u2018-\uC774\u2019\uB85C \uB05D\uB0A0 \uB54C\uAC00 \uB9CE\uC544\uC694. \u2018\uAE68\uB057\uC774\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uAE08\uC138",x:["\uAE08\uC0C8"],s:"\uC544\uC774\uC2A4\uD06C\uB9BC\uC774 \uFF3F \uB179\uC558\uC5B4\uC694.",why:"\u2018\uAE08\uC2DC\uC5D0\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uAE08\uC138\u2019\uC608\uC694.",g:3,d:0},{r:"\uC624\uB79C\uB9CC",x:["\uC624\uB7AB\uB9CC"],s:"\uFF3F\uC5D0 \uCE5C\uAD6C\uB97C \uB9CC\uB0AC\uC5B4\uC694.",why:"\u2018\uC624\uB798\uAC04\uB9CC\u2019\uC774 \uC904\uC5B4\uC11C \u2018\uC624\uB79C\uB9CC\u2019\uC774\uC5D0\uC694.",g:3,d:0},{r:"\uBCA0\uAC1C",x:["\uBC30\uAC1C"],s:"\uFF3F\uB97C \uBCA0\uACE0 \uC7A0\uC744 \uC7A4\uC5B4\uC694.",why:"\uBA38\uB9AC\uB97C \uAD34\uB294 \uBB3C\uAC74\uC740 \u2018\uBCA0\uAC1C\u2019\uC608\uC694.",g:3,d:0},{r:"\uCC0C\uAC1C",x:["\uCC0C\uAC8C"],s:"\uC800\uB141\uC5D0 \uB41C\uC7A5\uFF3F\uB97C \uBA39\uC5C8\uC5B4\uC694.",why:"\uAD6D\uBB3C \uC74C\uC2DD\uC740 \u2018\uCC0C\uAC1C\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uC5B4\uB5A1\uD574\uC694",x:["\uC5B4\uB5BB\uD574\uC694"],s:"\uC6B0\uC0B0\uC744 \uC548 \uAC00\uC838\uC654\uB294\uB370 \uFF3F?",why:"\u2018\uC5B4\uB5BB\uAC8C \uD574\uC694\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uC5B4\uB5A1\uD574\uC694\u2019\uC608\uC694.",g:3,d:0},{r:"\uD560\uAC8C\uC694",x:["\uD560\uAED8\uC694"],s:"\uC219\uC81C\uB294 \uC9C0\uAE08 \uBC14\uB85C \uFF3F.",why:"[\uAED8]\uB85C \uC18C\uB9AC \uB098\uB3C4 \u2018-\u3139\uAC8C\uC694\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uB3FC\uC694",x:["\uB418\uC694"],s:"\uC5EC\uAE30 \uC549\uC544\uB3C4 \uFF3F?",why:"\u2018\uB418\uC5B4\uC694\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uB3FC\uC694\u2019\uC608\uC694.",g:3,d:0},{r:"\uB410\uC5B4\uC694",x:["\uB42C\uC5B4\uC694"],s:"\uC774\uC81C \uC900\uBE44\uAC00 \uB2E4 \uFF3F.",why:"\u2018\uB418\uC5C8\uC5B4\uC694\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uB410\uC5B4\uC694\u2019\uC608\uC694.",g:3,d:0},{r:"\uACF0\uACF0\uC774",x:["\uACF0\uACF0\uD788"],s:"\uFF3F \uC0DD\uAC01\uD574 \uBCF4\uC558\uC5B4\uC694.",why:"\u2018\uACF0\uACF0\uC774\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uAD73\uC774",x:["\uAD6C\uC9C0"],s:"\uFF3F \uADF8\uB807\uAC8C\uAE4C\uC9C0 \uD560 \uD544\uC694\uB294 \uC5C6\uC5B4\uC694.",why:"\u2018\uAD73\uB2E4\u2019\uC5D0\uC11C \uC628 \uB9D0\uC774\uB77C \u2018\uAD73\uC774\u2019\uC608\uC694.",g:3,d:0},{r:"\uC5ED\uD560",x:["\uC5ED\uD65C"],s:"\uBAA8\uB460\uC5D0\uC11C \uB0B4 \uFF3F\uC740 \uAE30\uB85D\uD558\uAE30\uC608\uC694.",why:"\u2018\uC5ED\uD560\u2019\uB85C \uC368\uC694.",g:3,d:0},{r:"\uC77C\uBD80\uB7EC",x:["\uC77C\uBD80\uB85C"],s:"\uFF3F \uADF8\uB7F0 \uAC8C \uC544\uB2C8\uC5D0\uC694.",why:"\u2018\uC77C\uBD80\uB7EC\u2019\uAC00 \uBC14\uB978 \uB9D0\uC774\uC5D0\uC694.",g:3,d:0},{r:"\uB5A1\uBCF6\uC774",x:["\uB5A1\uBCF6\uAE30"],s:"\uBD84\uC2DD\uC9D1\uC5D0\uC11C \uFF3F\uB97C \uBA39\uC5C8\uC5B4\uC694.",why:"\uC74C\uC2DD \uC774\uB984\uC740 \u2018\uB5A1\uBCF6\uC774\u2019\uC608\uC694.",g:3,d:0},{r:"\uAE4E\uC544\uC694",x:["\uAE4D\uC544\uC694"],s:"\uCE7C\uB85C \uC5F0\uD544\uC744 \uFF3F.",why:"\uAE30\uBCF8\uD615\uC774 \u2018\uAE4E\uB2E4\u2019\uB77C\uC11C \uBC1B\uCE68\uC774 \u3132\uC774\uC5D0\uC694.",g:3,d:0},{r:"\uAC00\uB9AC\uCF30\uC5B4\uC694",x:["\uAC00\uB974\uCCE4\uC5B4\uC694"],s:"\uC190\uAC00\uB77D\uC73C\uB85C \uB2EC\uC744 \uFF3F.",why:"\uC190\uAC00\uB77D\uC73C\uB85C \uC9DA\uC5B4 \uBCF4\uC774\uB294 \uAC74 \u2018\uAC00\uB9AC\uD0A4\uB2E4\u2019\uC608\uC694.",g:4,d:1},{r:"\uAC00\uB974\uCCD0",x:["\uAC00\uB974\uCF1C"],s:"\uC5B8\uB2C8\uAC00 \uC904\uB118\uAE30\uB97C \uFF3F \uC8FC\uC5C8\uC5B4\uC694.",why:"\uC54C\uB824 \uC8FC\uB294 \uAC74 \u2018\uAC00\uB974\uCE58\uB2E4\u2019\uB77C\uC11C \u2018\uAC00\uB974\uCCD0\u2019\uC608\uC694.",g:4,d:1},{r:"\uB9DE\uD614\uC5B4\uC694",x:["\uB9DE\uCDC4\uC5B4\uC694"],s:"\uD034\uC988 \uC815\uB2F5\uC744 \uBAA8\uB450 \uFF3F.",why:"\uC815\uB2F5\uC744 \uC54C\uC544\uB0B4\uB294 \uAC74 \u2018\uB9DE\uD788\uB2E4\u2019\uC608\uC694.",g:4,d:1},{r:"\uD76C\uD55C\uD55C",x:["\uD76C\uC548\uD55C"],s:"\uCC38 \uFF3F \uC77C\uC774 \uB2E4 \uC788\uB124\uC694.",why:"\u2018\uD76C\uD55C\uD558\uB2E4\u2019\uAC00 \uBC14\uB978 \uB9D0\uC774\uC5D0\uC694.",g:4,d:1},{r:"\uC124\uB808\uC694",x:["\uC124\uB808\uC5EC\uC694"],s:"\uB0B4\uC77C \uC18C\uD48D\uC774\uB77C \uB9C8\uC74C\uC774 \uFF3F.",why:"\uAE30\uBCF8\uD615\uC774 \u2018\uC124\uB808\uB2E4\u2019\uB77C\uC11C \u2018\uC124\uB808\uC694\u2019\uC608\uC694.",g:4,d:1},{r:"\uBC14\uB78C",x:["\uBC14\uB7A8"],s:"\uB0B4 \uFF3F\uC740 \uC6B0\uB9AC \uBC18\uC774 \uC774\uAE30\uB294 \uAC70\uC608\uC694.",why:"\u2018\uBC14\uB77C\uB2E4\u2019\uC5D0\uC11C \uC628 \uB9D0\uC774\uB77C \u2018\uBC14\uB78C\u2019\uC774\uC5D0\uC694.",g:4,d:1},{r:"\uB098\uC558\uC5B4\uC694",x:["\uB0B3\uC558\uC5B4\uC694"],s:"\uAC10\uAE30\uAC00 \uB2E4 \uFF3F.",why:"\uBCD1\uC774 \uC88B\uC544\uC9C0\uB294 \uAC74 \u2018\uB0AB\uB2E4\u2019\uC608\uC694.",g:4,d:1},{r:"\uBC18\uB4DC\uC2DC",x:["\uBC18\uB4EF\uC774"],s:"\uC57D\uC18D\uC740 \uFF3F \uC9C0\uCF1C\uC694.",why:"\u2018\uAF2D\u2019\uC774\uB77C\uB294 \uB73B\uC740 \u2018\uBC18\uB4DC\uC2DC\u2019\uC608\uC694.",g:4,d:1},{r:"\uC783\uC5B4\uBC84\uB838\uC5B4\uC694",x:["\uC78A\uC5B4\uBC84\uB838\uC5B4\uC694"],s:"\uAE38\uC5D0\uC11C \uC9C0\uAC11\uC744 \uFF3F.",why:"\uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC9C0\uB294 \uAC74 \u2018\uC783\uB2E4\u2019\uC608\uC694.",g:4,d:1},{r:"\uC78A\uC5B4\uBC84\uB838\uC5B4\uC694",x:["\uC783\uC5B4\uBC84\uB838\uC5B4\uC694"],s:"\uC900\uBE44\uBB3C \uCC59\uAE30\uB294 \uAC78 \uAE5C\uBE61 \uFF3F.",why:"\uAE30\uC5B5\uC774 \uC548 \uB098\uB294 \uAC74 \u2018\uC78A\uB2E4\u2019\uC608\uC694.",g:4,d:1},{r:"\uC5B4\uC774\uC5C6\uB294",x:["\uC5B4\uC758\uC5C6\uB294"],s:"\uFF3F \uC2E4\uC218\uB97C \uD574\uC11C \uC6C3\uC74C\uC774 \uB0AC\uC5B4\uC694.",why:"\u2018\uC5B4\uC774\uC5C6\uB2E4\u2019\uAC00 \uBC14\uB978 \uB9D0\uC774\uC5D0\uC694.",g:4,d:1},{r:"\uC6EC\uB9CC\uD558\uBA74",x:["\uC660\uB9CC\uD558\uBA74"],s:"\uFF3F \uC77C\uCC0D \uC790\uC694.",why:"\u2018\uC6EC\uB9CC\uD558\uB2E4\u2019\uB85C \uC368\uC694.",g:4,d:1},{r:"\uC624\uB69D\uC774",x:["\uC624\uB69C\uAE30"],s:"\uB118\uC5B4\uC838\uB3C4 \uC77C\uC5B4\uB098\uB294 \uFF3F\uCC98\uB7FC \uB2E4\uC2DC \uD574 \uBD10\uC694.",why:"\uC7A5\uB09C\uAC10 \uC774\uB984\uC758 \uD45C\uC900\uC5B4\uB294 \u2018\uC624\uB69D\uC774\u2019\uC608\uC694.",g:4,d:1},{r:"\uB208\uACF1",x:["\uB208\uAF3D"],s:"\uC138\uC218\uD558\uBA74\uC11C \uFF3F\uC744 \uB5BC\uC5C8\uC5B4\uC694.",why:"[\uAF3D]\uC73C\uB85C \uC18C\uB9AC \uB098\uB3C4 \u2018\uB208\uACF1\u2019\uC73C\uB85C \uC368\uC694.",g:4,d:1},{r:"\uC54A\uC558\uC5B4\uC694",x:["\uC548\uC558\uC5B4\uC694"],s:"\uC5B4\uC81C\uB294 \uC219\uC81C\uB97C \uD558\uC9C0 \uFF3F.",why:"\u2018-\uC9C0\u2019 \uB4A4\uC5D0\uB294 \u2018\uC54A\uB2E4\u2019\uB97C \uC368\uC694.",g:4,d:1},{r:"\uC721\uAC1C\uC7A5",x:["\uC721\uACC4\uC7A5"],s:"\uC810\uC2EC\uC5D0 \uB9E4\uCF64\uD55C \uFF3F\uC744 \uBA39\uC5C8\uC5B4\uC694.",why:"\uC74C\uC2DD \uC774\uB984\uC740 \u2018\uC721\uAC1C\uC7A5\u2019\uC774\uC5D0\uC694.",g:4,d:1},{r:"\uC548 \uB3FC\uC694",x:["\uC548 \uB418\uC694"],s:"\uBCF5\uB3C4\uC5D0\uC11C \uB6F0\uBA74 \uFF3F.",why:"\u2018\uB418\uC5B4\uC694\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uB3FC\uC694\u2019\uC608\uC694.",g:4,d:1},{r:"\uBD2C\uC694",x:["\uBD48\uC694"],s:"\uC120\uC0DD\uB2D8, \uB0B4\uC77C \uFF3F!",why:"\u2018\uBD48\uC5B4\uC694\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uBD2C\uC694\u2019\uC608\uC694.",g:5,d:2},{r:"\uBD80\uCCE4\uC5B4\uC694",x:["\uBD99\uC600\uC5B4\uC694"],s:"\uD560\uBA38\uB2C8\uAED8 \uD3B8\uC9C0\uB97C \uFF3F.",why:"\uD3B8\uC9C0\uB098 \uC9D0\uC744 \uBCF4\uB0B4\uB294 \uAC74 \u2018\uBD80\uCE58\uB2E4\u2019\uC608\uC694.",g:5,d:2},{r:"\uBD99\uC600\uC5B4\uC694",x:["\uBD80\uCCE4\uC5B4\uC694"],s:"\uBD09\uD22C\uC5D0 \uC6B0\uD45C\uB97C \uFF3F.",why:"\uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uAC8C \uD558\uB294 \uAC74 \u2018\uBD99\uC774\uB2E4\u2019\uC608\uC694.",g:5,d:2},{r:"\uAC1C\uC218",x:["\uAC2F\uC218"],s:"\uBC14\uAD6C\uB2C8\uC5D0 \uB4E0 \uC0AC\uACFC\uC758 \uFF3F\uB97C \uC138\uC5B4 \uBCF4\uC544\uC694.",why:"\uD55C\uC790\uB9D0\uB07C\uB9AC \uB9CC\uB09C \uB9D0\uC774\uB77C \uC0AC\uC774\uC2DC\uC637\uC744 \uC4F0\uC9C0 \uC54A\uC544\uC694.",g:5,d:2},{r:"\uC22B\uC790",x:["\uC218\uC790"],s:"\uCE60\uD310\uC5D0 \uFF3F\uB97C \uD06C\uAC8C \uC368\uC694.",why:"\u2018\uC22B\uC790\u2019\uB294 \uC0AC\uC774\uC2DC\uC637\uC744 \uC4F0\uB294 \uBA87 \uC548 \uB418\uB294 \uD55C\uC790\uB9D0\uC774\uC5D0\uC694.",g:5,d:2},{r:"\uC9DC\uAE41\uAE30",x:["\uC9DC\uC9D1\uAE30"],s:"\uC5EC\uB7EC \uAE00\uC744 \uFF3F\uD574\uC11C \uB9CC\uB4E0 \uAE00\uC774\uC5D0\uC694.",why:"\u2018\uC9DC\uAE41\uAE30\u2019\uAC00 \uBC14\uB978 \uB9D0\uC774\uC5D0\uC694.",g:5,d:2},{r:"\uB300\uAC00",x:["\uB313\uAC00"],s:"\uB178\uB825\uD55C \uB9CC\uD07C \uFF3F\uB97C \uBC1B\uC558\uC5B4\uC694.",why:"\uD55C\uC790\uB9D0\uB07C\uB9AC \uB9CC\uB09C \uB9D0\uC774\uB77C \uC0AC\uC774\uC2DC\uC637\uC744 \uC4F0\uC9C0 \uC54A\uC544\uC694.",g:5,d:2},{r:"\uBA38\uB9AC\uB9D0",x:["\uBA38\uB9BF\uB9D0"],s:"\uCC45\uC758 \uFF3F\uC744 \uBA3C\uC800 \uC77D\uC5C8\uC5B4\uC694.",why:"[\uBA38\uB9AC\uB9D0]\uB85C \uC18C\uB9AC \uB098\uC11C \uC0AC\uC774\uC2DC\uC637\uC744 \uC4F0\uC9C0 \uC54A\uC544\uC694.",g:5,d:2},{r:"\uC7A5\uB9DB\uBE44",x:["\uC7A5\uB9C8\uBE44"],s:"\uBA70\uCE60 \uB3D9\uC548 \uB0B4\uB9AC\uB358 \uFF3F\uAC00 \uADF8\uCCE4\uC5B4\uC694.",why:"[\uC7A5\uB9C8\uC090]\uB85C \uC18C\uB9AC \uB098\uC11C \uC0AC\uC774\uC2DC\uC637\uC744 \uC368\uC694.",g:5,d:2},{r:"\uBB34\uB985\uC4F0\uACE0",x:["\uBB34\uB98E\uC4F0\uACE0"],s:"\uC704\uD5D8\uC744 \uFF3F \uCE5C\uAD6C\uB97C \uB3C4\uC654\uC5B4\uC694.",why:"\u2018\uBB34\uB985\uC4F0\uB2E4\u2019\uB294 \uBB34\uB98E\uACFC \uC0C1\uAD00\uC5C6\uB294 \uB9D0\uC774\uC5D0\uC694.",g:5,d:2},{r:"\uC5CA\uADF8\uC81C",x:["\uC5C7\uADF8\uC81C"],s:"\uFF3F \uC0B0 \uC5F0\uD544\uC744 \uBC8C\uC368 \uB2E4 \uC37C\uC5B4\uC694.",why:"\u2018\uC5CA\uADF8\uC800\uAED8\u2019\uAC00 \uC904\uC5B4\uC11C \u2018\uC5CA\uADF8\uC81C\u2019\uC608\uC694.",g:5,d:2},{r:"\uB4E4\uB800\uC5B4\uC694",x:["\uB4E4\uB838\uC5B4\uC694"],s:"\uC9D1\uC5D0 \uAC00\uB294 \uAE38\uC5D0 \uBB38\uAD6C\uC810\uC5D0 \uFF3F.",why:"\uC7A0\uAE50 \uBA38\uBB34\uB974\uB294 \uAC74 \u2018\uB4E4\uB974\uB2E4\u2019\uC608\uC694.",g:5,d:2},{r:"\uD1B5\uC9F8\uB85C",x:["\uD1B5\uCC44\uB85C"],s:"\uBC30\uAC00 \uACE0\uD30C\uC11C \uC0AC\uACFC\uB97C \uFF3F \uBA39\uC5C8\uC5B4\uC694.",why:"\uB098\uB204\uC9C0 \uC54A\uC740 \uB369\uC5B4\uB9AC \uC804\uBD80\uB294 \u2018\uD1B5\uC9F8\u2019\uC608\uC694.",g:5,d:2},{r:"\uB4A4\uCC98\uC84C\uC5B4\uC694",x:["\uB4A4\uCCD0\uC84C\uC5B4\uC694"],s:"\uB2EC\uB9AC\uAE30\uC5D0\uC11C \uC870\uAE08 \uFF3F.",why:"\uB4A4\uC5D0 \uB0A8\uAC8C \uB418\uB294 \uAC74 \u2018\uB4A4\uCC98\uC9C0\uB2E4\u2019\uC608\uC694.",g:5,d:2},{r:"\uCE58\uB800\uC5B4\uC694",x:["\uCE58\uB918\uC5B4\uC694"],s:"\uC5B4\uC81C \uC218\uD559 \uC2DC\uD5D8\uC744 \uFF3F.",why:"\uAE30\uBCF8\uD615\uC774 \u2018\uCE58\uB974\uB2E4\u2019\uB77C\uC11C \u2018\uCE58\uB800\uC5B4\uC694\u2019\uC608\uC694.",g:5,d:2}]};var uo={name:"\uC6B0\uB9AC\uB098\uB77C \uC9C0\uB9AC",hint:"5\uD559\uB144 \xB7 \uAE30\uD6C4\xB7\uC790\uC5F0\uC7AC\uD574\xB7\uC778\uAD6C",kind:"\uAD50\uACFC\uD615",grades:[5,5],units:["5-1 \uC6B0\uB9AC\uB098\uB77C \uC9C0\uB9AC \uD0D0\uAD6C(\uAE30\uD6C4 \uD658\uACBD\uACFC \uC6B0\uB9AC \uC0DD\uD65C, \uC6B0\uB9AC\uB098\uB77C\uC758 \uC778\uAD6C \uBD84\uD3EC)"],note:"r \uBC14\uB978 \uB9D0, x \uD5F7\uAC08\uB9AC\uB294 \uB9D0, s \uBB38\uC7A5(\uFF3F \uB4A4\uC5D0 \uBC1B\uCE68 \uB530\uB77C \uBC14\uB00C\uB294 \uC870\uC0AC\uAC00 \uC624\uC9C0 \uC54A\uAC8C \uC500), why \uAE4C\uB2ED(\uD574\uC694\uCCB4), g \uD559\uB144, d \uB09C\uC774\uB3C4. \uB2E8\uC6D0 \uAC1C\uB150\uB9CC \uCC38\uACE0\uD558\uACE0 \uBB38\uC7A5\uC740 \uC0C8\uB85C \uC500.",items:[{r:"\uC0AC\uACC4\uC808",x:["\uAC74\uAE30\uC640 \uC6B0\uAE30"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uC911\uC704\uB3C4\uC5D0 \uC788\uC5B4 \uFF3F \uBCC0\uD654\uAC00 \uB69C\uB837\uD574\uC694.",why:"\uC911\uC704\uB3C4\uC758 \uC6B0\uB9AC\uB098\uB77C\uB294 \uBD04\xB7\uC5EC\uB984\xB7\uAC00\uC744\xB7\uACA8\uC6B8\uC774 \uB69C\uB837\uD574\uC694.",g:5,d:0},{r:"\uAE30\uD6C4",x:["\uB0A0\uC528"],s:"\uD55C \uC9C0\uC5ED\uC5D0 \uC624\uB79C \uAE30\uAC04 \uB098\uD0C0\uB098\uB294 \uD3C9\uADE0\uC801\uC778 \uB300\uAE30 \uC0C1\uD0DC\uB97C \uB73B\uD558\uB294 \uB9D0\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uB0A0\uC528\uB294 \uC9E7\uC740 \uAE30\uAC04, \uAE30\uD6C4\uB294 \uC624\uB79C \uAE30\uAC04\uC758 \uD3C9\uADE0\uC774\uC5D0\uC694.",g:5,d:0},{r:"\uB0A0\uC528",x:["\uAE30\uD6C4"],s:"\uC624\uB298\uCC98\uB7FC \uC9E7\uC740 \uAE30\uAC04\uC758 \uB300\uAE30 \uC0C1\uD0DC\uB97C \uB73B\uD558\uB294 \uB9D0\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uADF8\uB0A0\uADF8\uB0A0 \uBC14\uB00C\uB294 \uB300\uAE30 \uC0C1\uD0DC\uAC00 \uB0A0\uC528\uC608\uC694.",g:5,d:0},{r:"\uC5EC\uB984",x:["\uBD04","\uACA8\uC6B8"],s:"\uFF3F\uC5D0\uB294 \uC7A5\uB9C8\uC640 \uD0DC\uD48D \uB54C\uBB38\uC5D0 \uBE44\uAC00 \uAC00\uC7A5 \uB9CE\uC774 \uB0B4\uB824\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C \uBE44\uB294 \uC5EC\uB984\uC5D0 \uB9CE\uC774 \uBAB0\uB824 \uB0B4\uB824\uC694.",g:5,d:0},{r:"\uACA8\uC6B8",x:["\uC5EC\uB984","\uAC00\uC744"],s:"\uFF3F\uC5D0\uB294 \uB300\uB959\uC5D0\uC11C \uCC28\uAC00\uC6B4 \uBC14\uB78C\uC774 \uBD88\uC5B4\uC640 \uCDA5\uACE0 \uAC74\uC870\uD574\uC694.",why:"\uACA8\uC6B8\uC5D0\uB294 \uBD81\uC11C\uCABD \uB300\uB959\uC5D0\uC11C \uCC28\uAC11\uACE0 \uAC74\uC870\uD55C \uBC14\uB78C\uC774 \uBD88\uC5B4\uC694.",g:5,d:0},{r:"\uC5EC\uB984",x:["\uACA8\uC6B8"],s:"\uFF3F\uC5D0\uB294 \uB0A8\uCABD \uBC14\uB2E4\uC5D0\uC11C \uB365\uACE0 \uC2B5\uD55C \uBC14\uB78C\uC774 \uBD88\uC5B4\uC640\uC694.",why:"\uC5EC\uB984\uC5D0\uB294 \uBC14\uB2E4\uC5D0\uC11C \uB530\uB73B\uD558\uACE0 \uCD95\uCD95\uD55C \uBC14\uB78C\uC774 \uBD88\uC5B4\uC640\uC694.",g:5,d:0},{r:"\uAC00\uBB44",x:["\uD3ED\uC124","\uD0DC\uD48D"],s:"\uC624\uB7AB\uB3D9\uC548 \uBE44\uAC00 \uC624\uC9C0 \uC54A\uC544 \uBB3C\uC774 \uBAA8\uC790\uB77C\uB294 \uC7AC\uD574\uB294 \uFF3F \uC7AC\uD574\uC608\uC694.",why:"\uAC00\uBB44\uC774 \uAE38\uC5B4\uC9C0\uBA74 \uB18D\uC0AC\uC9D3\uAE30\uB3C4, \uB9C8\uC2E4 \uBB3C\uB3C4 \uBD80\uC871\uD574\uC838\uC694.",g:5,d:0},{r:"\uD3ED\uC5FC",x:["\uD55C\uD30C","\uD669\uC0AC"],s:"\uD558\uB8E8 \uCD5C\uACE0 \uAE30\uC628\uC774 33\u2103\uB97C \uB118\uB294 \uC2EC\uD55C \uB354\uC704\uB294 \uFF3F \uD604\uC0C1\uC774\uC5D0\uC694.",why:"\uD3ED\uC5FC \uB54C\uB294 \uBB3C\uC744 \uC790\uC8FC \uB9C8\uC2DC\uACE0 \uD55C\uB0AE \uD65C\uB3D9\uC744 \uC904\uC5EC\uC694.",g:5,d:0},{r:"\uD0DC\uD48D",x:["\uAC00\uBB44","\uD55C\uD30C"],s:"\uAC15\uD55C \uBC14\uB78C\uACFC \uB9CE\uC740 \uBE44\uB97C \uBAB0\uACE0 \uC624\uB294 \uFF3F \uB54C\uBB38\uC5D0 \uC5EC\uB984\uACFC \uAC00\uC744\uC5D0 \uD53C\uD574\uAC00 \uC0DD\uACA8\uC694.",why:"\uD0DC\uD48D\uC740 \uBC14\uB2E4\uC5D0\uC11C \uC0DD\uACA8 \uAC15\uD55C \uBC14\uB78C\uACFC \uD070\uBE44\uB97C \uBAB0\uACE0 \uC640\uC694.",g:5,d:0},{r:"\uD55C\uD30C",x:["\uD3ED\uC5FC","\uAC00\uBB44"],s:"\uACA8\uC6B8\uC5D0 \uAE30\uC628\uC774 \uAC11\uC790\uAE30 \uD06C\uAC8C \uB5A8\uC5B4\uC9C0\uB294 \uFF3F \uB54C\uBB38\uC5D0 \uB3D9\uC0C1\uC744 \uC785\uC744 \uC218 \uC788\uC5B4\uC694.",why:"\uD55C\uD30C \uB54C\uB294 \uB530\uB73B\uD558\uAC8C \uC785\uACE0 \uBC14\uAE65 \uD65C\uB3D9\uC744 \uC904\uC5EC\uC694.",g:5,d:0},{r:"\uD669\uC0AC",x:["\uD3ED\uC5FC","\uD3ED\uC124"],s:"\uBD04\uCCA0 \uFF3F \uB54C\uC5D0\uB294 \uB9C8\uC2A4\uD06C\uB97C \uC4F0\uACE0, \uB2E4\uB140\uC640\uC11C \uC190\uBC1C\uC744 \uAE68\uB057\uC774 \uC53B\uC5B4\uC694.",why:"\uD669\uC0AC\uB294 \uBA3C \uC0AC\uB9C9\uC758 \uD759\uBA3C\uC9C0\uAC00 \uBC14\uB78C\uC744 \uD0C0\uACE0 \uB0A0\uC544\uC624\uB294 \uD604\uC0C1\uC774\uC5D0\uC694.",g:5,d:0},{r:"\uB0A8\uCABD",x:["\uBD81\uCABD"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uB300\uCCB4\uB85C \uFF3F \uC9C0\uC5ED\uC73C\uB85C \uAC08\uC218\uB85D \uAE30\uC628\uC774 \uB192\uC544\uC838\uC694.",why:"\uB0A8\uCABD\uC73C\uB85C \uAC08\uC218\uB85D \uC704\uB3C4\uAC00 \uB0AE\uC544 \uB530\uB73B\uD574\uC694.",g:5,d:0},{r:"\uB0A8\uCABD",x:["\uBD81\uCABD"],s:"\uC6B0\uB9AC\uB098\uB77C \uC5F0 \uAC15\uC218\uB7C9\uC740 \uB300\uCCB4\uB85C \uFF3F \uC9C0\uC5ED\uC774 \uB354 \uB9CE\uC544\uC694.",why:"\uB300\uCCB4\uB85C \uB0A8\uCABD\uC5D0\uC11C \uBD81\uCABD\uC73C\uB85C \uAC08\uC218\uB85D \uAC15\uC218\uB7C9\uC774 \uC904\uC5B4\uC694.",g:5,d:1},{r:"\uB3C4\uC2DC",x:["\uCD0C\uB77D"],s:"1960\uB144\uB300 \uC774\uD6C4 \uC0AC\uB78C\uB4E4\uC774 \uC77C\uC790\uB9AC\uB97C \uCC3E\uC544 \uFF3F \uC9C0\uC5ED\uC73C\uB85C \uB9CE\uC774 \uC62E\uACA8 \uAC14\uC5B4\uC694.",why:"\uACF5\uC7A5\uACFC \uD68C\uC0AC\uAC00 \uB9CE\uC740 \uB3C4\uC2DC\uB85C \uC0AC\uB78C\uB4E4\uC774 \uBAA8\uC600\uC5B4\uC694.",g:5,d:1},{r:"\uAE30\uD6C4 \uBCC0\uD654",x:["\uB0A0\uC528 \uBCC0\uD654","\uACC4\uC808 \uBCC0\uD654"],s:"\uC218\uC2ED \uB144 \uB118\uAC8C \uAE30\uD6C4\uC758 \uD3C9\uADE0 \uC0C1\uD0DC\uAC00 \uBC14\uB00C\uB294 \uAC83\uC744 \uFF3F \uD604\uC0C1\uC774\uB77C\uACE0 \uD574\uC694.",why:"\uAE30\uD6C4 \uBCC0\uD654\uB294 \uC790\uC5F0\uC7AC\uD574\uAC00 \uB354 \uC790\uC8FC \uC77C\uC5B4\uB098\uAC8C \uB9CC\uB4E4\uC5B4\uC694.",g:5,d:1},{r:"\uD0DC\uBC31\uC0B0\uB9E5",x:["\uC18C\uBC31\uC0B0\uB9E5","\uCC28\uB839\uC0B0\uB9E5"],s:"\uB3D9\uD574\uC548\uC740 \uFF3F \uB108\uBA38\uC5D0 \uC788\uC5B4 \uACA8\uC6B8\uC5D0 \uCC28\uAC00\uC6B4 \uBD81\uC11C\uD48D\uC744 \uB35C \uBC1B\uC544\uC694.",why:"\uB192\uC740 \uD0DC\uBC31\uC0B0\uB9E5\uC774 \uBD81\uC11C\uCABD\uC5D0\uC11C \uC624\uB294 \uCC2C \uBC14\uB78C\uC744 \uB9C9\uC544 \uC918\uC694.",g:5,d:1},{r:"\uB3D9\uD574",x:["\uC11C\uD574"],s:"\uC218\uC2EC\uC774 \uAE4A\uC740 \uFF3F \uBC14\uB2E4\uC758 \uC601\uD5A5\uC73C\uB85C \uB3D9\uD574\uC548\uC740 \uACA8\uC6B8\uC5D0 \uBE44\uAD50\uC801 \uB530\uB73B\uD574\uC694.",why:"\uAE4A\uC740 \uBC14\uB2E4\uB294 \uCC9C\uCC9C\uD788 \uC2DD\uC5B4\uC11C \uACA8\uC6B8\uC5D0\uB3C4 \uB530\uB73B\uD55C \uD3B8\uC774\uC5D0\uC694.",g:5,d:1},{r:"\uD574\uC548",x:["\uB0B4\uB959"],s:"\uC704\uB3C4\uAC00 \uBE44\uC2B7\uD558\uBA74 \uACA8\uC6B8\uC5D0\uB294 \uB300\uCCB4\uB85C \uFF3F \uC9C0\uC5ED\uC774 \uB354 \uB530\uB73B\uD574\uC694.",why:"\uBC14\uB2E4\uAC00 \uAE30\uC628 \uBCC0\uD654\uB97C \uC904\uC5EC \uC918\uC11C \uD574\uC548\uC740 \uACA8\uC6B8\uC5D0 \uB35C \uCD94\uC6CC\uC694.",g:5,d:1},{r:"\uC6B8\uB989\uB3C4",x:["\uB300\uAD6C","\uC11C\uC6B8"],s:"\uFF3F\uC5D0\uB294 \uACA8\uC6B8\uC5D0 \uB208\uC774 \uB9CE\uC774 \uB0B4\uB824 \uACA8\uC6B8 \uAC15\uC218\uB7C9\uB3C4 \uB9CE\uC544\uC694.",why:"\uB3D9\uD574\uC758 \uC12C \uC6B8\uB989\uB3C4\uB294 \uACA8\uC6B8\uC5D0 \uB208\uC774 \uC544\uC8FC \uB9CE\uC774 \uC640\uC694.",g:5,d:1},{r:"\uC5EC\uB984",x:["\uACA8\uC6B8","\uBD04"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uD55C \uD574 \uAC15\uC218\uB7C9\uC758 \uC808\uBC18 \uB118\uAC8C \uFF3F\uC5D0 \uB0B4\uB824\uC694.",why:"\uC7A5\uB9C8\uC640 \uD0DC\uD48D\uC774 \uC5EC\uB984\uC5D0 \uBAB0\uB824 \uC788\uC5B4\uC694.",g:5,d:1},{r:"\uD3C9\uC57C",x:["\uC0B0\uC9C0"],s:"\uBCBC\uB18D\uC0AC\uB97C \uC9D3\uB358 \uC61B\uB0A0\uC5D0\uB294 \uFF3F \uC9C0\uC5ED\uC5D0 \uC0AC\uB78C\uC774 \uB9CE\uC774 \uBAA8\uC5EC \uC0B4\uC558\uC5B4\uC694.",why:"\uB113\uACE0 \uD3C9\uD3C9\uD55C \uB545\uC774 \uB18D\uC0AC\uC9D3\uAE30\uC5D0 \uC88B\uC558\uC5B4\uC694.",g:5,d:1},{r:"\uC0B0\uC9C0",x:["\uD3C9\uC57C"],s:"\uFF3F \uC9C0\uC5ED\uC774 \uB9CE\uC740 \uBD81\uB3D9\uBD80\uC5D0\uB294 \uC61B\uB0A0\uBD80\uD130 \uC0AC\uB78C\uC774 \uC801\uAC8C \uC0B4\uC558\uC5B4\uC694.",why:"\uC0B0\uC774 \uB9CE\uC73C\uBA74 \uB18D\uC0AC\uC9D3\uAE30\uC640 \uC624\uAC00\uAE30\uAC00 \uC5B4\uB824\uC6CC\uC694.",g:5,d:1},{r:"\uC778\uAD6C \uBC00\uB3C4",x:["\uCD9C\uC0DD\uB960","\uD3C9\uADE0 \uAE30\uC628"],s:"\uC77C\uC815\uD55C \uB113\uC774\uC758 \uB545\uC5D0 \uC0AC\uB294 \uC0AC\uB78C \uC218\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uC778\uAD6C \uBC00\uB3C4\uAC00 \uB192\uC744\uC218\uB85D \uAC19\uC740 \uB113\uC774\uC5D0 \uC0AC\uB78C\uC774 \uB9CE\uC774 \uC0B4\uC544\uC694.",g:5,d:1},{r:"\uC8FC\uD0DD \uBD80\uC871",x:["\uC77C\uC190 \uBD80\uC871","\uC758\uB8CC \uC2DC\uC124 \uBD80\uC871"],s:"\uC778\uAD6C\uAC00 \uBAB0\uB9AC\uB294 \uB3C4\uC2DC\uC5D0\uC11C\uB294 \uAD50\uD1B5 \uD63C\uC7A1\uACFC \uFF3F \uBB38\uC81C\uAC00 \uC0DD\uACA8\uC694.",why:"\uC0AC\uB78C\uC774 \uB9CE\uC774 \uBAA8\uC774\uBA74 \uC0B4 \uC9D1\uACFC \uAE38\uC774 \uBAA8\uC790\uB77C\uC694.",g:5,d:1},{r:"\uC77C\uC190 \uBD80\uC871",x:["\uAD50\uD1B5 \uD63C\uC7A1","\uC8FC\uD0DD \uBD80\uC871"],s:"\uC778\uAD6C\uAC00 \uC904\uC5B4\uB4DC\uB294 \uB18D\uC5B4\uCD0C\uC5D0\uC11C\uB294 \uFF3F \uBB38\uC81C\uAC00 \uC0DD\uACA8\uC694.",why:"\uC80A\uC740 \uC0AC\uB78C\uC774 \uB5A0\uB098\uBA74 \uB18D\uC0AC\uC9C0\uC744 \uC0AC\uB78C\uC774 \uBAA8\uC790\uB77C\uC694.",g:5,d:2},{r:"\uC218\uB3C4\uAD8C",x:["\uB18D\uC5B4\uCD0C","\uC0B0\uAC04 \uC9C0\uC5ED"],s:"\uC624\uB298\uB0A0 \uC6B0\uB9AC\uB098\uB77C \uC778\uAD6C\uB294 \uC11C\uC6B8\uACFC \uADF8 \uB458\uB808\uC778 \uFF3F \uC9C0\uC5ED\uC5D0 \uB9CE\uC774 \uBAA8\uC5EC \uC788\uC5B4\uC694.",why:"\uC11C\uC6B8\xB7\uC778\uCC9C\xB7\uACBD\uAE30\uB97C \uC218\uB3C4\uAD8C\uC774\uB77C\uACE0 \uD574\uC694.",g:5,d:2},{r:"\uCD0C\uB77D",x:["\uB3C4\uC2DC"],s:"\uB178\uB144\uCE35 \uC778\uAD6C \uBE44\uC728\uC740 \uB300\uCCB4\uB85C \uFF3F \uC9C0\uC5ED\uC5D0\uC11C \uB354 \uB192\uC544\uC694.",why:"\uC80A\uC740 \uC0AC\uB78C\uC774 \uB3C4\uC2DC\uB85C \uB9CE\uC774 \uB5A0\uB098 \uCD0C\uB77D\uC5D0\uB294 \uC5B4\uB974\uC2E0 \uBE44\uC728\uC774 \uB192\uC544\uC694.",g:5,d:2},{r:"\uCCAD\uC7A5\uB144\uCE35",x:["\uB178\uB144\uCE35","\uC720\uC18C\uB144\uCE35"],s:"\uB3C4\uC2DC \uC9C0\uC5ED\uC5D0\uC11C\uB294 \uC77C\uD558\uB294 \uB098\uC774\uC778 \uFF3F \uC778\uAD6C \uBE44\uC728\uC774 \uB192\uC740 \uD3B8\uC774\uC5D0\uC694.",why:"\uC77C\uC790\uB9AC\uB97C \uCC3E\uC544 \uC80A\uC740 \uC0AC\uB78C\uB4E4\uC774 \uB3C4\uC2DC\uB85C \uBAA8\uC5EC\uC694.",g:5,d:2},{r:"\uD601\uC2E0\uB3C4\uC2DC",x:["\uC2E0\uB3C4\uC2DC","\uAD00\uAD11 \uB3C4\uC2DC"],s:"\uC218\uB3C4\uAD8C\uC758 \uACF5\uACF5 \uAE30\uAD00\uC744 \uC9C0\uBC29\uC73C\uB85C \uC62E\uAE30\uBA70 \uFF3F \uC5EC\uB7EC \uACF3\uC744 \uC9C0\uC5C8\uC5B4\uC694.",why:"\uACF5\uACF5 \uAE30\uAD00\uC774 \uC62E\uACA8 \uAC00\uBA74 \uC218\uB3C4\uAD8C \uC778\uAD6C\uAC00 \uB098\uB258\uACE0 \uC9C0\uC5ED\uC774 \uACE0\uB974\uAC8C \uBC1C\uC804\uD574\uC694.",g:5,d:2},{r:"\uC2E0\uB3C4\uC2DC",x:["\uD601\uC2E0\uB3C4\uC2DC","\uCD0C\uB77D"],s:"\uB300\uB3C4\uC2DC\uC758 \uC0AC\uB78C\uACFC \uAE30\uB2A5\uC744 \uB098\uB204\uC5B4 \uB9E1\uB3C4\uB85D \uB300\uB3C4\uC2DC \uB458\uB808\uC5D0 \uFF3F \uC5EC\uB7EC \uACF3\uC744 \uC138\uC6E0\uC5B4\uC694.",why:"1980\uB144\uB300\uBD80\uD130 \uB300\uB3C4\uC2DC \uB458\uB808\uC5D0 \uC2E0\uB3C4\uC2DC\uB97C \uC9C0\uC5C8\uC5B4\uC694.",g:5,d:2},{r:"\uB18D\uCD0C \uC720\uD559",x:["\uD574\uC678 \uC720\uD559","\uB3C4\uC2DC \uC720\uD559"],s:"\uB3C4\uC2DC \uD559\uC0DD\uC774 \uD55C\uB3D9\uC548 \uB18D\uCD0C \uD559\uAD50\uB85C \uC62E\uACA8 \uC0DD\uD0DC \uD559\uC2B5\uC744 \uD558\uB294 \uFF3F \uC81C\uB3C4\uB3C4 \uC788\uC5B4\uC694.",why:"\uB18D\uCD0C \uC720\uD559\uC740 \uB18D\uCD0C\uC5D0 \uC0AC\uB78C\uC744 \uB298\uB9AC\uACE0 \uCCB4\uD5D8 \uD559\uC2B5\uB3C4 \uD560 \uC218 \uC788\uC5B4\uC694.",g:5,d:2},{r:"\uC800\uCCB4\uC628\uC99D",x:["\uC5F4\uC0AC\uBCD1","\uC77C\uC0AC\uBCD1"],s:"\uD55C\uD30C \uB54C \uBAB8\uC774 \uB108\uBB34 \uCC28\uAC00\uC6CC\uC9C0\uBA74 \uFF3F \uC99D\uC0C1\uC774 \uC0DD\uAE38 \uC218 \uC788\uC5B4\uC694.",why:"\uCD94\uC6B4 \uB0A0\uC5D0\uB294 \uBAA8\uC790\xB7\uC7A5\uAC11\uC73C\uB85C \uBAB8\uC744 \uB530\uB73B\uD558\uAC8C \uC9C0\uCF1C\uC694.",g:5,d:2},{r:"\uC5F4\uC0AC\uBCD1",x:["\uB3D9\uC0C1","\uC800\uCCB4\uC628\uC99D"],s:"\uD3ED\uC5FC \uB54C \uC624\uB798 \uBC14\uAE65\uC5D0\uC11C \uD65C\uB3D9\uD558\uBA74 \uFF3F \uC99D\uC0C1\uC774 \uC0DD\uAE38 \uC218 \uC788\uC5B4\uC694.",why:"\uB354\uC6B4 \uB0A0\uC5D0\uB294 \uADF8\uB298\uC5D0\uC11C \uC26C\uACE0 \uBB3C\uC744 \uC790\uC8FC \uB9C8\uC154\uC694.",g:5,d:2},{r:"\uD55C\uB0AE",x:["\uC544\uCE68","\uC800\uB141"],s:"\uD3ED\uC5FC \uB54C\uB294 \uAC00\uC7A5 \uB354\uC6B4 \uFF3F \uC2DC\uAC04\uC5D0 \uBC14\uAE65 \uD65C\uB3D9\uC744 \uC904\uC5EC\uC694.",why:"\uB0AE 12\uC2DC~\uC624\uD6C4 5\uC2DC\uCBE4\uC774 \uAC00\uC7A5 \uB354\uC6CC\uC694.",g:5,d:2},{r:"\uD0C1\uC790 \uC544\uB798",x:["\uCC3D\uBB38 \uC606","\uC5D8\uB9AC\uBCA0\uC774\uD130 \uC548"],s:"\uC9C0\uC9C4\uC774 \uB098\uBA74 \uD2BC\uD2BC\uD55C \uFF3F \uAC19\uC740 \uACF3\uC5D0 \uB4E4\uC5B4\uAC00 \uBA38\uB9AC\uB97C \uBCF4\uD638\uD574\uC694.",why:"\uD754\uB4E4\uB9B4 \uB54C\uB294 \uBAB8\uC744 \uC219\uC774\uACE0 \uBA38\uB9AC\uB97C \uC9C0\uCF1C\uC694. \uC5D8\uB9AC\uBCA0\uC774\uD130\uB294 \uD0C0\uC9C0 \uC54A\uC544\uC694.",g:5,d:2},{r:"\uC7A5\uB9C8",x:["\uD669\uC0AC","\uAF43\uC0D8\uCD94\uC704"],s:"\uCD08\uC5EC\uB984\uC5D0 \uBA70\uCE60\uC529 \uBE44\uAC00 \uC774\uC5B4\uC9C0\uB294 \uFF3F \uAE30\uAC04\uC774 \uC9C0\uB098\uBA74 \uBB34\uB354\uC704\uAC00 \uC2DC\uC791\uB3FC\uC694.",why:"\uC7A5\uB9C8\uAC00 \uB05D\uB098\uBA74 \uB365\uACE0 \uC2B5\uD55C \uB0A0\uC528\uAC00 \uC774\uC5B4\uC838\uC694.",g:5,d:2},{r:"\uBD81\uC11C",x:["\uB0A8\uB3D9","\uB0A8\uC11C"],s:"\uACA8\uC6B8\uC5D0 \uB300\uB959\uC5D0\uC11C \uBD88\uC5B4\uC624\uB294 \uCC28\uAC00\uC6B4 \uBC14\uB78C\uC758 \uBC29\uD5A5\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uACA8\uC6B8\uC5D0\uB294 \uBD81\uC11C\uCABD \uB300\uB959\uC5D0\uC11C \uCC2C \uBC14\uB78C\uC774 \uBD88\uC5B4\uC640\uC694.",g:5,d:2},{r:"\uC11C\uBD80",x:["\uB3D9\uBD80"],s:"\uC61B\uB0A0\uC5D0\uB294 \uD3C9\uC57C\uAC00 \uB113\uC740 \uFF3F\xB7\uB0A8\uBD80 \uC9C0\uC5ED\uC5D0 \uC0AC\uB78C\uC774 \uB9CE\uC774 \uC0B4\uC558\uC5B4\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C \uC11C\uCABD\uACFC \uB0A8\uCABD\uC5D0 \uB113\uC740 \uD3C9\uC57C\uAC00 \uB9CE\uC544\uC694.",g:5,d:2}]};var fo={name:"\uC138\uACC4 \uC9C0\uB9AC",hint:"6\uD559\uB144 \xB7 \uC9C0\uAD6C\xB7\uB300\uB959\xB7\uAE30\uD6C4",kind:"\uAD50\uACFC\uD615",grades:[6,6],units:["6-1 \uC9C0\uAD6C, \uB300\uB959 \uADF8\uB9AC\uACE0 \uAD6D\uAC00\uB4E4","6-2 \uC138\uACC4\uC758 \uC790\uC5F0\uD658\uACBD"],note:"r \uBC14\uB978 \uB9D0, x \uD5F7\uAC08\uB9AC\uB294 \uB9D0, s \uBB38\uC7A5(\uFF3F \uC790\uB9AC\uC5D0 r \uB610\uB294 x \u2014 \uB4A4\uC5D0 \uBC1B\uCE68 \uB530\uB77C \uBC14\uB00C\uB294 \uC870\uC0AC\uAC00 \uC624\uC9C0 \uC54A\uAC8C \uC500), why \uAE4C\uB2ED(\uD574\uC694\uCCB4), g \uD559\uB144, d \uB09C\uC774\uB3C4. \uB2E8\uC6D0 \uD575\uC2EC \uAC1C\uB150\uB9CC \uCC38\uACE0\uD558\uACE0 \uBB38\uC7A5\uC740 \uC0C8\uB85C \uC500.",items:[{r:"\uC544\uC2DC\uC544",x:["\uC720\uB7FD","\uC544\uD504\uB9AC\uCE74"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uFF3F \uB300\uB959\uC5D0 \uC788\uC5B4\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uC544\uC2DC\uC544 \uB300\uB959\uC758 \uB3D9\uCABD \uB05D\uC5D0 \uC788\uC5B4\uC694.",g:6,d:0},{r:"\uD0DC\uD3C9\uC591",x:["\uB300\uC11C\uC591","\uC778\uB3C4\uC591"],s:"\uC138\uACC4 \uBC14\uB2E4 \uAC00\uC6B4\uB370 \uFF3F\uC758 \uB113\uC774\uAC00 \uAC00\uC7A5 \uB113\uC5B4\uC694.",why:"\uD0DC\uD3C9\uC591\uC740 \uC544\uC2DC\uC544\xB7\uC624\uC138\uC544\uB2C8\uC544\xB7\uC544\uBA54\uB9AC\uCE74 \uC0AC\uC774\uC758 \uAC00\uC7A5 \uB113\uC740 \uBC14\uB2E4\uC608\uC694.",g:6,d:0},{r:"\uC801\uB3C4",x:["\uBCF8\uCD08 \uC790\uC624\uC120","\uACBD\uC120"],s:"\uC704\uB3C4\uB294 \uFF3F\uC5D0\uC11C \uB0A8\uBD81\uC73C\uB85C \uC5BC\uB9C8\uB098 \uB5A8\uC5B4\uC84C\uB294\uC9C0 \uB098\uD0C0\uB0B4\uC694.",why:"\uC704\uB3C4\uB294 \uC801\uB3C4(0\xB0)\uB97C \uAE30\uC900\uC73C\uB85C \uC7AC\uC694.",g:6,d:0},{r:"\uAC00\uB85C",x:["\uC138\uB85C"],s:"\uC704\uC120\uC740 \uC9C0\uAD6C\uBCF8\uC5D0 \uFF3F \uBC29\uD5A5\uC73C\uB85C \uADF8\uC740 \uAC00\uC0C1\uC758 \uC120\uC774\uC5D0\uC694.",why:"\uC704\uC120\uC740 \uAC00\uB85C, \uACBD\uC120\uC740 \uC138\uB85C \uBC29\uD5A5\uC774\uC5D0\uC694.",g:6,d:0},{r:"\uC138\uB85C",x:["\uAC00\uB85C"],s:"\uACBD\uC120\uC740 \uC9C0\uAD6C\uBCF8\uC5D0 \uFF3F \uBC29\uD5A5\uC73C\uB85C \uADF8\uC740 \uAC00\uC0C1\uC758 \uC120\uC774\uC5D0\uC694.",why:"\uACBD\uC120\uC740 \uBD81\uADF9\uACFC \uB0A8\uADF9\uC744 \uC787\uB294 \uC138\uB85C \uBC29\uD5A5\uC774\uC5D0\uC694.",g:6,d:0},{r:"\uC9C0\uAD6C\uBCF8",x:["\uC138\uACC4 \uC9C0\uB3C4"],s:"\uC601\uD1A0 \uBAA8\uC591\uACFC \uB113\uC774\uB97C \uBE44\uAD50\uC801 \uC815\uD655\uD558\uAC8C \uBCFC \uC218 \uC788\uB294 \uAC83\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uC9C0\uAD6C\uBCF8\uC740 \uB465\uADFC \uC9C0\uAD6C\uB97C \uADF8\uB300\uB85C \uC904\uC5EC\uC11C \uBAA8\uC591\uACFC \uB113\uC774\uAC00 \uC815\uD655\uD55C \uD3B8\uC774\uC5D0\uC694.",g:6,d:0},{r:"\uC138\uACC4 \uC9C0\uB3C4",x:["\uC9C0\uAD6C\uBCF8"],s:"\uC138\uACC4 \uBAA8\uC2B5\uC744 \uD55C\uB208\uC5D0 \uBCF4\uACE0 \uB4E4\uACE0 \uB2E4\uB2C8\uAE30 \uD3B8\uD55C \uAC83\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uC138\uACC4 \uC9C0\uB3C4\uB294 \uD3C9\uBA74\uC774\uB77C \uD55C\uB208\uC5D0 \uBCF4\uAE30 \uC27D\uC9C0\uB9CC \uBAA8\uC591\uACFC \uD06C\uAE30\uAC00 \uC870\uAE08 \uB2EC\uB77C\uC838\uC694.",g:6,d:0},{r:"\uC624\uC138\uC544\uB2C8\uC544",x:["\uC720\uB7FD","\uB0A8\uADF9"],s:"\uC138\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uC791\uC740 \uB300\uB959\uC740 \uFF3F \uB300\uB959\uC774\uC5D0\uC694.",why:"\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544\xB7\uB274\uC9C8\uB79C\uB4DC\uC640 \uD0DC\uD3C9\uC591\uC758 \uC12C\uB4E4\uC774 \uC18D\uD55C \uC624\uC138\uC544\uB2C8\uC544\uAC00 \uAC00\uC7A5 \uC791\uC544\uC694.",g:6,d:0},{r:"\uC544\uC2DC\uC544",x:["\uC544\uD504\uB9AC\uCE74","\uBD81\uC544\uBA54\uB9AC\uCE74"],s:"\uAC00\uC7A5 \uB113\uACE0 \uC0AC\uB78C\uB3C4 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uB294 \uB300\uB959\uC740 \uFF3F \uB300\uB959\uC774\uC5D0\uC694.",why:"\uC544\uC2DC\uC544\uC5D0\uB294 \uC138\uACC4 \uC0AC\uB78C\uC758 \uC57D 60%\uAC00 \uC0B4\uC544\uC694.",g:6,d:0},{r:"\uACC4\uC808",x:["\uC2DC\uAC04","\uC5B8\uC5B4"],s:"\uBD81\uBC18\uAD6C\uC640 \uB0A8\uBC18\uAD6C\uB294 \uFF3F \uC21C\uC11C\uAC00 \uC11C\uB85C \uBC18\uB300\uC608\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C\uAC00 \uC5EC\uB984\uC77C \uB54C \uB0A8\uBC18\uAD6C\uC758 \uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544\uB294 \uACA8\uC6B8\uC774\uC5D0\uC694.",g:6,d:0},{r:"\uC5F4\uB300",x:["\uAC74\uC870","\uD55C\uB300"],s:"\uC77C \uB144 \uB0B4\uB0B4 \uAE30\uC628\uC774 \uB192\uC740 \uAE30\uD6C4\uB294 \uFF3F \uAE30\uD6C4\uC608\uC694.",why:"\uC5F4\uB300 \uAE30\uD6C4\uB294 \uC801\uB3C4 \uAC00\uAE4C\uC774\uC5D0 \uB098\uD0C0\uB098\uACE0 \uC77C \uB144 \uB0B4\uB0B4 \uB354\uC6CC\uC694.",g:6,d:0},{r:"\uD55C\uB300",x:["\uC5F4\uB300","\uC628\uB300"],s:"\uC77C \uB144 \uB0B4\uB0B4 \uAE30\uC628\uC774 \uB0AE\uC544 \uBAB9\uC2DC \uCD94\uC6B4 \uAE30\uD6C4\uB294 \uFF3F \uAE30\uD6C4\uC608\uC694.",why:"\uD55C\uB300 \uAE30\uD6C4\uB294 \uADF9\uC9C0\uBC29\uC5D0 \uAC00\uAE4C\uC6B4 \uACF3\uC5D0 \uB098\uD0C0\uB098\uC694.",g:6,d:0},{r:"\uAC74\uC870",x:["\uC628\uB300","\uC5F4\uB300"],s:"\uC77C \uB144 \uB3D9\uC548 \uB0B4\uB9AC\uB294 \uBE44\uC758 \uC591\uC774 \uC544\uC8FC \uC801\uC740 \uAE30\uD6C4\uB294 \uFF3F \uAE30\uD6C4\uC608\uC694.",why:"\uAC74\uC870 \uAE30\uD6C4\uC5D0\uB294 \uC0AC\uB9C9\uACFC \uCD08\uC6D0\uC774 \uC788\uC5B4\uC694.",g:6,d:0},{r:"\uC628\uB300",x:["\uB0C9\uB300","\uD55C\uB300"],s:"\uB0A0\uC528\uAC00 \uC628\uD654\uD558\uACE0 \uC0AC\uACC4\uC808\uC774 \uB69C\uB837\uD55C \uAE30\uD6C4\uB294 \uFF3F \uAE30\uD6C4\uC608\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C\uB3C4 \uC628\uB300 \uAE30\uD6C4\uC5D0 \uC18D\uD574\uC694.",g:6,d:0},{r:"\uBCF8\uCD08 \uC790\uC624\uC120",x:["\uC801\uB3C4","\uC704\uC120"],s:"\uACBD\uB3C4\uB294 \uFF3F\uC5D0\uC11C \uB3D9\uC11C\uB85C \uC5BC\uB9C8\uB098 \uB5A8\uC5B4\uC84C\uB294\uC9C0 \uB098\uD0C0\uB0B4\uC694.",why:"\uACBD\uB3C4\uB294 \uC601\uAD6D \uB7F0\uB358\uC744 \uC9C0\uB098\uB294 \uBCF8\uCD08 \uC790\uC624\uC120(0\xB0)\uC744 \uAE30\uC900\uC73C\uB85C \uC7AC\uC694.",g:6,d:1},{r:"\uC2DC\uCC28",x:["\uACC4\uC808 \uCC28\uC774","\uAE30\uC628 \uCC28\uC774"],s:"\uACBD\uB3C4\uAC00 \uB2E4\uB974\uBA74 \uFF3F \uB54C\uBB38\uC5D0 \uB098\uB77C\uB9C8\uB2E4 \uC2DC\uAC01\uC774 \uB2EC\uB77C\uC694.",why:"\uACBD\uB3C4\uAC00 15\xB0 \uB2EC\uB77C\uC9C8 \uB54C\uB9C8\uB2E4 \uC2DC\uAC01\uC774 \uC57D 1\uC2DC\uAC04\uC529 \uCC28\uC774 \uB098\uC694.",g:6,d:1},{r:"\uB0C9\uB300",x:["\uC628\uB300","\uD55C\uB300"],s:"\uC628\uB300\uBCF4\uB2E4 \uACA8\uC6B8\uC774 \uCDA5\uACE0 \uAE38\uBA70 \uC5EC\uB984\uC774 \uC9E7\uC740 \uAE30\uD6C4\uB294 \uFF3F \uAE30\uD6C4\uC608\uC694.",why:"\uB0C9\uB300 \uAE30\uD6C4\uB294 \uBD81\uBC18\uAD6C\uC758 \uACE0\uC704\uB3C4 \uC9C0\uC5ED\uC5D0 \uB098\uD0C0\uB098\uC694.",g:6,d:1},{r:"\uB300\uC11C\uC591",x:["\uC778\uB3C4\uC591","\uD0DC\uD3C9\uC591"],s:"\uB450 \uBC88\uC9F8\uB85C \uB113\uC740 \uBC14\uB2E4\uC778 \uFF3F\uC5D0\uB294 \uC544\uBA54\uB9AC\uCE74\xB7\uC720\uB7FD\xB7\uC544\uD504\uB9AC\uCE74\uAC00 \uB9DE\uB2FF\uC544 \uC788\uC5B4\uC694.",why:"\uB300\uC11C\uC591\uC740 \uC544\uBA54\uB9AC\uCE74\uC640 \uC720\uB7FD\xB7\uC544\uD504\uB9AC\uCE74 \uC0AC\uC774\uC5D0 \uC788\uC5B4\uC694.",g:6,d:1},{r:"\uC778\uB3C4\uC591",x:["\uB300\uC11C\uC591","\uBD81\uADF9\uD574"],s:"\uC138 \uBC88\uC9F8\uB85C \uB113\uC740 \uBC14\uB2E4\uC778 \uFF3F\uC5D0\uB294 \uC544\uC2DC\uC544\xB7\uC624\uC138\uC544\uB2C8\uC544\xB7\uC544\uD504\uB9AC\uCE74\uAC00 \uB9DE\uB2FF\uC544 \uC788\uC5B4\uC694.",why:"\uC778\uB3C4\uC591\uC740 \uC544\uC2DC\uC544\uC758 \uB0A8\uCABD\uC5D0 \uC788\uB294 \uBC14\uB2E4\uC608\uC694.",g:6,d:1},{r:"\uBD81\uADF9\uD574",x:["\uB0A8\uADF9\uD574","\uC778\uB3C4\uC591"],s:"\uBD81\uADF9 \uB458\uB808\uC758 \uBC14\uB2E4\uC778 \uFF3F\uC758 \uB300\uBD80\uBD84\uC740 \uC5BC\uC74C\uC73C\uB85C \uB36E\uC5EC \uC788\uC5B4\uC694.",why:"\uBD81\uADF9\uD574\uB294 \uBD81\uADF9\uC744 \uB458\uB7EC\uC2FC \uCC28\uAC00\uC6B4 \uBC14\uB2E4\uC608\uC694.",g:6,d:1},{r:"\uB0A8\uBC18\uAD6C",x:["\uBD81\uBC18\uAD6C"],s:"\uC624\uC138\uC544\uB2C8\uC544\uB294 \uC721\uC9C0 \uB300\uBD80\uBD84\uC774 \uFF3F\uC5D0 \uC788\uC5B4 \uC6B0\uB9AC\uB098\uB77C\uC640 \uACC4\uC808\uC774 \uBC18\uB300\uC608\uC694.",why:"\uC801\uB3C4 \uC544\uB798\uCABD\uC774 \uB0A8\uBC18\uAD6C\uC608\uC694.",g:6,d:1},{r:"\uBD81\uBC18\uAD6C",x:["\uB0A8\uBC18\uAD6C"],s:"\uBD81\uC544\uBA54\uB9AC\uCE74\uC758 \uB098\uB77C\uB4E4\uC740 \uB300\uBD80\uBD84 \uC801\uB3C4 \uC704\uCABD\uC778 \uFF3F\uC5D0 \uC788\uC5B4\uC694.",why:"\uC801\uB3C4 \uC704\uCABD\uC774 \uBD81\uBC18\uAD6C\uC608\uC694.",g:6,d:1},{r:"\uB3D9\uACBD",x:["\uC11C\uACBD"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uBD81\uC704 33\xB0~43\xB0, \uFF3F 124\xB0~132\xB0 \uC0AC\uC774\uC5D0 \uC788\uC5B4\uC694.",why:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uBCF8\uCD08 \uC790\uC624\uC120\uC758 \uB3D9\uCABD\uC5D0 \uC788\uC5B4\uC11C \uB3D9\uACBD\uC73C\uB85C \uB098\uD0C0\uB0B4\uC694.",g:6,d:1},{r:"\uCE60\uB808",x:["\uBE0C\uB77C\uC9C8","\uD398\uB8E8"],s:"\uB0A8\uC544\uBA54\uB9AC\uCE74\uC758 \uFF3F \uC601\uD1A0\uB294 \uB0A8\uBD81\uC73C\uB85C \uC544\uC8FC \uAE38\uCB49\uD574\uC694.",why:"\uCE60\uB808\uB294 \uB0A8\uC544\uBA54\uB9AC\uCE74 \uC11C\uCABD \uD574\uC548\uC744 \uB530\uB77C \uB0A8\uBD81\uC73C\uB85C \uAE38\uAC8C \uBED7\uC5B4 \uC788\uC5B4\uC694.",g:6,d:1},{r:"\uC774\uC9D1\uD2B8",x:["\uCF00\uB0D0","\uBE0C\uB77C\uC9C8"],s:"\uC544\uC8FC \uAE34 \uAC15\uC778 \uB098\uC77C\uAC15\uC740 \uFF3F\uC758 \uC218\uB3C4 \uCE74\uC774\uB85C\uB97C \uC9C0\uB098\uC694.",why:"\uB098\uC77C\uAC15\uC740 \uC544\uD504\uB9AC\uCE74 \uBD81\uB3D9\uCABD \uC774\uC9D1\uD2B8\uB97C \uC9C0\uB098 \uC9C0\uC911\uD574\uB85C \uD758\uB7EC\uAC00\uC694.",g:6,d:1},{r:"\uD30C\uB098\uB9C8",x:["\uBCFC\uB9AC\uBE44\uC544","\uC6B0\uB8E8\uACFC\uC774"],s:"\uD0DC\uD3C9\uC591\uACFC \uB300\uC11C\uC591\uC5D0 \uBAA8\uB450 \uB9DE\uB2FF\uC740 \uB098\uB77C\uC5D0\uB294 \uFF3F \uB4F1\uC774 \uC788\uC5B4\uC694.",why:"\uD30C\uB098\uB9C8\uB294 \uB450 \uB300\uC591 \uC0AC\uC774\uC758 \uC881\uC740 \uB545\uC5D0 \uC788\uC5B4\uC694.",g:6,d:1},{r:"\uC544\uD504\uB9AC\uCE74",x:["\uC720\uB7FD","\uBD81\uC544\uBA54\uB9AC\uCE74"],s:"\uC801\uB3C4\uAC00 \uD55C\uAC00\uC6B4\uB370\uB97C \uC9C0\uB098 \uBD81\uBC18\uAD6C\uC640 \uB0A8\uBC18\uAD6C\uC5D0 \uAC78\uCE5C \uB300\uB959\uC740 \uFF3F \uB300\uB959\uC774\uC5D0\uC694.",why:"\uC544\uD504\uB9AC\uCE74\uB294 \uC801\uB3C4\uAC00 \uB300\uB959 \uAC00\uC6B4\uB370\uB97C \uC9C0\uB098\uC694.",g:6,d:1},{r:"\uACE0\uC0C1 \uAC00\uC625",x:["\uD759\uBCBD\uB3CC\uC9D1","\uD1B5\uB098\uBB34\uC9D1"],s:"\uC5F4\uB300 \uC9C0\uC5ED\uC5D0\uC11C\uB294 \uC2B5\uAE30\uC640 \uD574\uCDA9\uC744 \uB9C9\uC73C\uB824\uACE0 \uBC14\uB2E5\uC744 \uB545\uC5D0\uC11C \uB744\uC6B4 \uFF3F\uC5D0 \uC0B4\uC544\uC694.",why:"\uACE0\uC0C1 \uAC00\uC625\uC740 \uBC14\uB2E5\uC774 \uB545\uC5D0\uC11C \uB5A8\uC5B4\uC838 \uC788\uC5B4 \uBC14\uB78C\uC774 \uC798 \uD1B5\uD574\uC694.",g:6,d:1},{r:"\uD759\uBCBD\uB3CC\uC9D1",x:["\uACE0\uC0C1 \uAC00\uC625","\uD1B5\uB098\uBB34\uC9D1"],s:"\uC0AC\uB9C9\uC5D0\uC11C\uB294 \uBCBD\uC774 \uB450\uAECD\uACE0 \uCC3D\uC774 \uC791\uC740 \uFF3F\uC5D0\uC11C \uB728\uAC70\uC6B4 \uC5F4\uAE30\uB97C \uD53C\uD574\uC694.",why:"\uB450\uAEBC\uC6B4 \uBCBD\uACFC \uC791\uC740 \uCC3D\uC774 \uD587\uBE5B\uACFC \uC5F4\uAE30\uB97C \uB9C9\uC544 \uC918\uC694.",g:6,d:1},{r:"\uC720\uBAA9",x:["\uC815\uCC29","\uB18D\uACBD"],s:"\uAC74\uC870\uD55C \uCD08\uC6D0\uC5D0\uC11C\uB294 \uBB3C\uACFC \uD480\uC744 \uCC3E\uC544 \uAC00\uCD95\uACFC \uD568\uAED8 \uC62E\uACA8 \uB2E4\uB2C8\uB294 \uFF3F \uC0DD\uD65C\uC744 \uD574\uC694.",why:"\uC720\uBAA9\uBBFC\uC740 \uC62E\uAE30\uAE30 \uC26C\uC6B4 \uC774\uB3D9\uC2DD \uC9D1\uC5D0\uC11C \uC0B4\uC544\uC694.",g:6,d:1},{r:"\uD1B5\uB098\uBB34\uC9D1",x:["\uD759\uBCBD\uB3CC\uC9D1","\uACE0\uC0C1 \uAC00\uC625"],s:"\uB0C9\uB300 \uC9C0\uC5ED\uC5D0\uC11C\uB294 \uC8FC\uBCC0\uC758 \uB9CE\uC740 \uB098\uBB34\uB85C \uC9C0\uC740 \uFF3F\uC5D0\uC11C \uC0B4\uAE30\uB3C4 \uD574\uC694.",why:"\uB0C9\uB300 \uC9C0\uC5ED\uC5D0\uB294 \uC232\uC774 \uB113\uC5B4\uC11C \uB098\uBB34\uB97C \uAD6C\uD558\uAE30 \uC26C\uC6CC\uC694.",g:6,d:1},{r:"\uC0AC\uC6B0\uB514\uC544\uB77C\uBE44\uC544",x:["\uB3C5\uC77C","\uB274\uC9C8\uB79C\uB4DC"],s:"\uC6B0\uB9AC\uB098\uB77C\uB294 \uC6D0\uC720\uB97C \uFF3F\uC5D0\uC11C \uAC00\uC7A5 \uB9CE\uC774 \uC218\uC785\uD574\uC694.",why:"\uC0AC\uC6B0\uB514\uC544\uB77C\uBE44\uC544\uB294 \uC544\uC2DC\uC544 \uC11C\uB0A8\uCABD\uC758 \uC6D0\uC720\uAC00 \uB9CE\uC740 \uB098\uB77C\uC608\uC694.",g:6,d:2},{r:"\uB274\uC9C8\uB79C\uB4DC",x:["\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544"],s:"\uC624\uC138\uC544\uB2C8\uC544\uC758 \uFF3F \uB545\uC740 \uB450 \uAC1C\uC758 \uD070 \uC12C\uC73C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uC5B4\uC694.",why:"\uB274\uC9C8\uB79C\uB4DC\uB294 \uBD81\uC12C\uACFC \uB0A8\uC12C, \uB450 \uAC1C\uC758 \uD070 \uC12C\uC774 \uC911\uC2EC\uC774\uC5D0\uC694.",g:6,d:2},{r:"\uC0B0\uB9E5",x:["\uACE0\uC6D0","\uD3C9\uC57C"],s:"\uC0B0\uC9C0\uB4E4\uC774 \uAE38\uAC8C \uC774\uC5B4\uC9C4 \uC9C0\uD615\uC740 \uFF3F \uC9C0\uD615\uC774\uC5D0\uC694.",why:"\uD788\uB9D0\uB77C\uC57C\xB7\uC54C\uD504\uC2A4\xB7\uC548\uB370\uC2A4\uAC00 \uB300\uD45C\uC801\uC778 \uC0B0\uB9E5\uC774\uC5D0\uC694.",g:6,d:2},{r:"\uBAA9\uCD95\uC5C5",x:["\uC5B4\uC5C5","\uC591\uC2DD\uC5C5"],s:"\uC0B0\uC9C0\uC5D0\uC11C\uB294 \uC18C\xB7\uB9D0\xB7\uC591 \uAC19\uC740 \uAC00\uCD95\uC744 \uAE30\uB974\uB294 \uFF3F\uB3C4 \uD574\uC694.",why:"\uD3C9\uC9C0\uBCF4\uB2E4 \uB18D\uC0AC\uAC00 \uC5B4\uB824\uC6B4 \uC0B0\uC9C0\uC5D0\uC11C\uB294 \uAC00\uCD95\uC744 \uB9CE\uC774 \uAE38\uB7EC\uC694.",g:6,d:2},{r:"\uB310",x:["\uD56D\uAD6C","\uB4F1\uB300"],s:"\uD558\uCC9C \uC0C1\uB958\uC5D0\uB294 \uFF3F \uC2DC\uC124\uC744 \uC9C0\uC5B4 \uC804\uAE30\uB97C \uB9CC\uB4E4\uACE0 \uBB3C\uC744 \uBAA8\uC544 \uB450\uC5B4\uC694.",why:"\uB310\uC5D0 \uBAA8\uC740 \uBB3C\uC740 \uC804\uAE30\uB97C \uB9CC\uB4E4\uAC70\uB098 \uC0DD\uD65C\uC5D0 \uC368\uC694.",g:6,d:2},{r:"\uAC2F\uBC8C",x:["\uBAA8\uB798 \uD574\uC548","\uC554\uC11D \uD574\uC548"],s:"\uBC00\uBB3C \uB54C \uC7A0\uAE30\uACE0 \uC370\uBB3C \uB54C \uB4DC\uB7EC\uB098\uB294 \uC9C4\uD759 \uB545\uC740 \uFF3F \uC9C0\uD615\uC774\uC5D0\uC694.",why:"\uAC2F\uBC8C\uC5D0\uB294 \uC870\uAC1C\uC640 \uAC8C \uAC19\uC740 \uC0DD\uBB3C\uC774 \uB9CE\uC774 \uC0B4\uC544\uC694.",g:6,d:2},{r:"\uC9C0\uC911\uD574",x:["\uBD81\uADF9\uD574","\uB0A8\uADF9\uD574"],s:"\uC62C\uB9AC\uBE0C\xB7\uC624\uB80C\uC9C0\xB7\uD3EC\uB3C4\uB97C \uB9CE\uC774 \uAE30\uB974\uB294 \uC628\uB300 \uC9C0\uC5ED\uC740 \uFF3F \uB458\uB808\uC608\uC694.",why:"\uC9C0\uC911\uD574 \uB458\uB808\uB294 \uC5EC\uB984\uC774 \uB365\uACE0 \uAC74\uC870\uD574\uC11C \uC774\uB7F0 \uACFC\uC77C\uC744 \uAE30\uB974\uAE30 \uC88B\uC544\uC694.",g:6,d:2},{r:"\uBCBC",x:["\uC62C\uB9AC\uBE0C","\uCEE4\uD53C"],s:"\uC6B0\uB9AC\uB098\uB77C\uC640 \uAC19\uC740 \uC544\uC2DC\uC544\uC758 \uC628\uB300 \uC9C0\uC5ED\uC5D0\uC11C\uB294 \uFF3F \uB18D\uC0AC\uAC00 \uBC1C\uB2EC\uD588\uC5B4\uC694.",why:"\uC5EC\uB984\uC5D0 \uBE44\uAC00 \uB9CE\uC774 \uC640\uC11C \uBCBC\uB18D\uC0AC\uB97C \uC9D3\uAE30 \uC88B\uC544\uC694.",g:6,d:2},{r:"\uB098\uC77C\uAC15",x:["\uCC3D\uC7A5\uAC15","\uCF5C\uB85C\uB77C\uB3C4\uAC15"],s:"\uC774\uC9D1\uD2B8\uC758 \uFF3F \uB458\uB808\uC5D0\uC11C\uB294 \uC61B\uB0A0\uBD80\uD130 \uB18D\uC5C5\uC774 \uBC1C\uB2EC\uD588\uC5B4\uC694.",why:"\uD558\uCC9C \uB458\uB808\uB294 \uBB3C\uC774 \uD48D\uBD80\uD558\uACE0 \uB545\uC774 \uAE30\uB984\uC838\uC11C \uB18D\uC0AC\uC9D3\uAE30 \uC88B\uC544\uC694.",g:6,d:2},{r:"\uC21C\uB85D",x:["\uB099\uD0C0","\uCF54\uB07C\uB9AC"],s:"\uD55C\uB300 \uC9C0\uC5ED\uC5D0\uC11C\uB294 \uC804\uD1B5\uC801\uC73C\uB85C \uFF3F \uB5BC\uB97C \uAE30\uB974\uBA70 \uC62E\uACA8 \uB2E4\uB2C8\uAE30\uB3C4 \uD574\uC694.",why:"\uCD94\uC6B4 \uACF3\uC5D0\uC11C\uB294 \uB18D\uC0AC\uAC00 \uC5B4\uB824\uC6CC \uC0AC\uB0E5\xB7\uACE0\uAE30\uC7A1\uC774\uC640 \uC21C\uB85D \uAE30\uB974\uAE30\uB97C \uD574\uC694.",g:6,d:2},{r:"\uCE68\uC5FD\uC218",x:["\uC57C\uC790\uC218","\uC120\uC778\uC7A5"],s:"\uB7EC\uC2DC\uC544\uC640 \uCE90\uB098\uB2E4 \uBD81\uBD80\uC5D0\uB294 \uB113\uC740 \uFF3F \uC232\uC774 \uC788\uC5B4 \uC784\uC5C5\uC774 \uBC1C\uB2EC\uD588\uC5B4\uC694.",why:"\uB0C9\uB300 \uC9C0\uC5ED\uC5D0\uB294 \uBC14\uB298 \uBAA8\uC591 \uC78E\uC744 \uAC00\uC9C4 \uCE68\uC5FD\uC218 \uC232\uC774 \uB113\uC5B4\uC694.",g:6,d:2},{r:"\uC800\uC704\uB3C4",x:["\uACE0\uC704\uB3C4"],s:"\uC5F4\uB300 \uAE30\uD6C4\uB294 \uC801\uB3C4\uB97C \uC911\uC2EC\uC73C\uB85C \uFF3F \uC9C0\uC5ED\uC5D0 \uB113\uAC8C \uB098\uD0C0\uB098\uC694.",why:"\uC801\uB3C4\uC5D0 \uAC00\uAE4C\uC6B8\uC218\uB85D \uC800\uC704\uB3C4\uC608\uC694.",g:6,d:2},{r:"\uACE0\uC704\uB3C4",x:["\uC800\uC704\uB3C4"],s:"\uC800\uC704\uB3C4\uC5D0\uC11C \uFF3F \uCABD\uC73C\uB85C \uAC08\uC218\uB85D \uAE30\uC628\uC774 \uB0AE\uC544\uC838\uC694.",why:"\uC801\uB3C4\uC5D0\uC11C \uBA40\uC5B4\uC9C8\uC218\uB85D \uD587\uBE5B\uC744 \uB35C \uBC1B\uC544 \uCD94\uC6CC\uC694.",g:6,d:2},{r:"\uB514\uC9C0\uD138 \uC601\uC0C1 \uC9C0\uB3C4",x:["\uC9C0\uAD6C\uBCF8","\uC138\uACC4 \uC9C0\uB3C4"],s:"\uC704\uC131 \uC0AC\uC9C4\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uCD5C\uC2E0 \uC815\uBCF4\uB97C \uCC3E\uACE0 \uCE5C\uAD6C\uC640 \uB098\uB204\uAE30 \uC26C\uC6B4 \uAC83\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uB514\uC9C0\uD138 \uC601\uC0C1 \uC9C0\uB3C4\uB294 \uC5EC\uB7EC \uC804\uC790 \uAE30\uAE30\uC5D0\uC11C \uBCF4\uACE0 \uACF5\uC720\uD560 \uC218 \uC788\uC5B4\uC694.",g:6,d:2},{r:"\uB0A8\uADF9\uD574",x:["\uBD81\uADF9\uD574","\uC9C0\uC911\uD574"],s:"\uB0A8\uADF9\uC744 \uB458\uB7EC\uC2FC \uFF3F\uC758 \uBC14\uB2F7\uBB3C\uC740 \uC544\uC8FC \uCC28\uAC00\uC6CC\uC694.",why:"\uB0A8\uADF9\uD574\uB294 \uB0A8\uADF9 \uB300\uB959\uC744 \uB458\uB7EC\uC2FC \uBC14\uB2E4\uC608\uC694.",g:6,d:2},{r:"\uBA55\uC2DC\uCF54",x:["\uBE0C\uB77C\uC9C8","\uCE60\uB808"],s:"\uBBF8\uAD6D\uC758 \uB0A8\uCABD\uC5D0\uB294 \uFF3F, \uBD81\uCABD\uC5D0\uB294 \uCE90\uB098\uB2E4\uAC00 \uC788\uC5B4\uC694.",why:"\uBBF8\uAD6D\uC740 \uB0A8\uCABD\uC73C\uB85C \uBA55\uC2DC\uCF54, \uBD81\uCABD\uC73C\uB85C \uCE90\uB098\uB2E4\uC640 \uB9DE\uB2FF\uC544 \uC788\uC5B4\uC694.",g:6,d:2}]};var po={name:"\uD1B5\uC77C\xB7\uBBFC\uC8FC\uD654\xB7\uC0B0\uC5C5\uD654",hint:"6\uD559\uB144 \xB7 \uBD84\uB2E8\uACFC \uD3C9\uD654 \uD1B5\uC77C, \uC624\uB298\uB0A0\uC758 \uC6B0\uB9AC",kind:"\uAD50\uACFC\uD615",grades:[6,6],units:["6-1 \uD3C9\uD654 \uD1B5\uC77C\uB85C \uAC00\uB294 \uAE38, \uBBFC\uC8FC\uD654\uC640 \uC0B0\uC5C5\uD654\uB85C \uB2EC\uB77C\uC9C4 \uC0DD\uD65C \uBAA8\uC2B5"],note:"r \uBC14\uB978 \uB9D0, x \uD5F7\uAC08\uB9AC\uB294 \uB9D0, s \uBB38\uC7A5(\uFF3F \uB4A4\uC5D0 \uBC1B\uCE68 \uB530\uB77C \uBC14\uB00C\uB294 \uC870\uC0AC\uAC00 \uC624\uC9C0 \uC54A\uAC8C \uC500), why \uAE4C\uB2ED(\uD574\uC694\uCCB4), g \uD559\uB144, d \uB09C\uC774\uB3C4. \uC0AC\uC2E4 \uC704\uC8FC\uB85C \uC911\uB9BD\uC801\uC73C\uB85C, \uD3ED\uB825 \uBB18\uC0AC \uC5C6\uC774 \uC0C8\uB85C \uC500.",items:[{r:"\uC774\uC0B0\uAC00\uC871",x:["\uB2E4\uBB38\uD654 \uAC00\uC871","1\uC778 \uAC00\uAD6C"],s:"\uB0A8\uBD81 \uBD84\uB2E8\uC73C\uB85C \uD5E4\uC5B4\uC838 \uC18C\uC2DD\uC744 \uBAA8\uB974\uACE0 \uC0AC\uB294 \uC0AC\uB78C\uB4E4\uC740 \uFF3F \uBB38\uC81C\uB97C \uACAA\uC5B4\uC694.",why:"\uBD84\uB2E8\uC73C\uB85C \uD5E4\uC5B4\uC9C4 \uAC00\uC871\uC744 \uC774\uC0B0\uAC00\uC871\uC774\uB77C\uACE0 \uD574\uC694.",g:6,d:0},{r:"6\xB725 \uC804\uC7C1",x:["\uC784\uC9C4\uC65C\uB780","4\xB719 \uD601\uBA85"],s:"1950\uB144\uC5D0 \uC77C\uC5B4\uB09C \uFF3F \uB54C\uBB38\uC5D0 \uB9CE\uC740 \uC0AC\uB78C\uC774 \uBAA9\uC228\uC744 \uC783\uACE0 \uAD6D\uD1A0\uAC00 \uD06C\uAC8C \uB9DD\uAC00\uC84C\uC5B4\uC694.",why:"6\xB725 \uC804\uC7C1\uC740 1950\uB144\uC5D0 \uC2DC\uC791\uB418\uC5B4 1953\uB144\uC5D0 \uC2F8\uC6C0\uC774 \uBA48\uCDC4\uC5B4\uC694.",g:6,d:0},{r:"\uD310\uBB38\uC810",x:["\uC784\uC9C4\uAC01","\uB3C5\uB3C4"],s:"\uC815\uC804 \uD611\uC815\uC774 \uB9FA\uC5B4\uC84C\uACE0 \uB0A8\uBD81 \uC815\uC0C1\uC774 \uB9CC\uB098\uAE30\uB3C4 \uD55C \uC7A5\uC18C\uB294 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uD310\uBB38\uC810\uC740 \uAD70\uC0AC \uBD84\uACC4\uC120 \uC704\uC5D0 \uC788\uB294 \uD68C\uB2F4 \uC7A5\uC18C\uC608\uC694.",g:6,d:0},{r:"\uBE44\uBB34\uC7A5 \uC9C0\uB300",x:["\uAC1C\uC131 \uACF5\uB2E8","\uAE08\uAC15\uC0B0"],s:"\uB0A8\uBD81\uD55C\uC758 \uCDA9\uB3CC\uC744 \uB9C9\uC73C\uB824\uACE0 \uAD70\uB300\uB97C \uB450\uC9C0 \uC54A\uAE30\uB85C \uD55C \uACF3\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uBE44\uBB34\uC7A5 \uC9C0\uB300(DMZ)\uB294 \uD734\uC804\uC120 \uB0A8\uBD81\uC73C\uB85C 2km\uC529 \uD3BC\uCCD0\uC838 \uC788\uC5B4\uC694.",g:6,d:0},{r:"\uB3C5\uC77C",x:["\uBCA0\uD2B8\uB0A8","\uD504\uB791\uC2A4"],s:"\uB3D9\uC11C\uB85C \uB098\uB258\uC5C8\uB2E4\uAC00 1990\uB144\uC5D0 \uD3C9\uD654\uB86D\uAC8C \uD1B5\uC77C\uD55C \uB098\uB77C\uB294 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uB3C5\uC77C\uC740 \uD65C\uBC1C\uD55C \uAD50\uB958 \uB05D\uC5D0 1990\uB144\uC5D0 \uD1B5\uC77C\uD588\uC5B4\uC694.",g:6,d:0},{r:"\uC528\uB984",x:["\uD0DC\uAD8C\uB3C4","\uD0DD\uACAC"],s:"\uB0A8\uBD81\uD55C\uC774 \uD568\uAED8 \uC720\uB124\uC2A4\uCF54 \uC778\uB958 \uBB34\uD615 \uBB38\uD654\uC720\uC0B0\uC5D0 \uC62C\uB9B0 \uC6B0\uB9AC \uB180\uC774\uB294 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"2018\uB144\uC5D0 \uB0A8\uBD81\uD55C\uC774 \uC528\uB984\uC744 \uD568\uAED8 \uC62C\uB838\uC5B4\uC694.",g:6,d:0},{r:"\uAC1C\uC131 \uACF5\uB2E8",x:["\uBE44\uBB34\uC7A5 \uC9C0\uB300","\uD310\uBB38\uC810"],s:"\uB0A8\uBD81\uD55C\uC774 \uACBD\uC81C\uC801\uC73C\uB85C \uD568\uAED8\uD558\uB824\uACE0 \uB9CC\uB4E0 \uACF5\uC5C5 \uB2E8\uC9C0\uB294 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uAC1C\uC131 \uACF5\uB2E8\uC5D0\uC11C\uB294 \uB0A8\uD55C \uAE30\uC5C5\uACFC \uBD81\uD55C \uB178\uB3D9\uC790\uAC00 \uD568\uAED8 \uBB3C\uAC74\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.",g:6,d:0},{r:"\uAE08\uAC15\uC0B0",x:["\uD55C\uB77C\uC0B0","\uC124\uC545\uC0B0"],s:"\uB0A8\uD55C \uC0AC\uB78C\uB4E4\uC774 \uAD00\uAD11\uC744 \uB2E4\uB140\uC624\uBA70 \uB0A8\uBD81\uC774 \uAD50\uB958\uD588\uB358 \uBD81\uD55C\uC758 \uC0B0\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uAE08\uAC15\uC0B0 \uAD00\uAD11\uC740 \uB0A8\uBD81 \uAD50\uB958\uC758 \uB300\uD45C\uC801\uC778 \uC0AC\uB840\uC608\uC694.",g:6,d:0},{r:"\uACBD\uACF5\uC5C5",x:["\uC911\uD654\uD559 \uACF5\uC5C5","\uBC18\uB3C4\uCCB4 \uC0B0\uC5C5"],s:"1960\uB144\uB300\uC5D0\uB294 \uC637\uAC10\xB7\uC2E0\uBC1C\uCC98\uB7FC \uAC00\uBCBC\uC6B4 \uBB3C\uAC74\uC744 \uB9CC\uB4DC\uB294 \uFF3F \uBD84\uC57C\uAC00 \uBA3C\uC800 \uBC1C\uB2EC\uD588\uC5B4\uC694.",why:"\uAC00\uBCBC\uC6B4 \uC0DD\uD65C\uC6A9\uD488\uC744 \uB9CC\uB4DC\uB294 \uC0B0\uC5C5\uC744 \uACBD\uACF5\uC5C5\uC774\uB77C\uACE0 \uD574\uC694.",g:6,d:0},{r:"\uC911\uD654\uD559 \uACF5\uC5C5",x:["\uACBD\uACF5\uC5C5","\uAD00\uAD11\uC5C5"],s:"1970\uB144\uB300\uC5D0\uB294 \uCCA0\uAC15\xB7\uBC30\xB7\uC11D\uC720 \uD654\uD559 \uC81C\uD488\uC744 \uB9CC\uB4DC\uB294 \uFF3F \uBD84\uC57C\uAC00 \uD06C\uAC8C \uBC1C\uB2EC\uD588\uC5B4\uC694.",why:"\uBB34\uAC81\uACE0 \uD070 \uBB3C\uAC74, \uD654\uD559 \uC81C\uD488\uC744 \uB9CC\uB4DC\uB294 \uC0B0\uC5C5\uC774\uC5D0\uC694.",g:6,d:0},{r:"\uBC18\uB098\uC808",x:["\uC77C\uC8FC\uC77C","\uD55C \uB2EC"],s:"\uB3C4\uB85C\uC640 \uCCA0\uB3C4\uAC00 \uBC1C\uB2EC\uD574 \uC804\uAD6D\uC774 \uFF3F \uC0DD\uD65C\uAD8C\uC73C\uB85C \uAC00\uAE4C\uC6CC\uC84C\uC5B4\uC694.",why:"\uAD50\uD1B5\uC774 \uBE68\uB77C\uC838 \uBC18\uB098\uC808\uC774\uBA74 \uC804\uAD6D \uC5B4\uB514\uB4E0 \uC624\uAC08 \uC218 \uC788\uAC8C \uB410\uC5B4\uC694.",g:6,d:0},{r:"\uD658\uACBD \uC624\uC5FC",x:["\uC774\uC0B0\uAC00\uC871","\uC2E0\uBD84 \uCC28\uBCC4"],s:"\uACF5\uC7A5\uACFC \uC790\uB3D9\uCC28\uAC00 \uD06C\uAC8C \uB298\uBA74\uC11C \uFF3F \uBB38\uC81C\uB3C4 \uC0DD\uACBC\uC5B4\uC694.",why:"\uC0B0\uC5C5\uD654\uB85C \uACF5\uAE30\uC640 \uBB3C\uC774 \uB354\uB7EC\uC6CC\uC9C0\uB294 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC5B4\uC694.",g:6,d:0},{r:"\uC18C\uB4DD",x:["\uC138\uAE08","\uC778\uAD6C"],s:"\uACBD\uC81C\uAC00 \uC131\uC7A5\uD558\uBA74\uC11C \uFF3F \uC218\uC900\uC774 \uB192\uC544\uC838 \uC5EC\uAC00\uC5D0 \uC4F0\uB294 \uB3C8\uB3C4 \uB298\uC5C8\uC5B4\uC694.",why:"\uBC84\uB294 \uB3C8\uC774 \uB298\uC5B4 \uC0DD\uD65C \uC218\uC900\uC774 \uB192\uC544\uC84C\uC5B4\uC694.",g:6,d:0},{r:"4\xB719 \uD601\uBA85",x:["5\xB718 \uBBFC\uC8FC\uD654 \uC6B4\uB3D9","6\uC6D4 \uBBFC\uC8FC \uD56D\uC7C1"],s:"1960\uB144 \uBD80\uC815 \uC120\uAC70\uC5D0 \uB9DE\uC11C \uD559\uC0DD\uACFC \uC2DC\uBBFC\uC774 \uC77C\uC5B4\uB09C \uC77C\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"4\xB719 \uD601\uBA85\uC740 1960\uB144 3\xB715 \uBD80\uC815 \uC120\uAC70\uC5D0 \uB9DE\uC11C \uC77C\uC5B4\uB0AC\uC5B4\uC694.",g:6,d:1},{r:"\uAD11\uC8FC",x:["\uBD80\uC0B0","\uB300\uC804"],s:"1980\uB144 5\xB718 \uBBFC\uC8FC\uD654 \uC6B4\uB3D9\uC740 \uFF3F \uC9C0\uC5ED\uC5D0\uC11C \uC77C\uC5B4\uB0AC\uC5B4\uC694.",why:"5\xB718 \uBBFC\uC8FC\uD654 \uC6B4\uB3D9 \uAE30\uB85D\uBB3C\uC740 \uC720\uB124\uC2A4\uCF54 \uC138\uACC4 \uAE30\uB85D \uC720\uC0B0\uC774\uC5D0\uC694.",g:6,d:1},{r:"6\uC6D4 \uBBFC\uC8FC \uD56D\uC7C1",x:["4\xB719 \uD601\uBA85","3\xB71 \uC6B4\uB3D9"],s:"1987\uB144 \uC2DC\uBBFC\uB4E4\uC774 \uB300\uD1B5\uB839\uC744 \uC9C1\uC811 \uBF51\uC790\uACE0 \uC694\uAD6C\uD55C \uC77C\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"6\uC6D4 \uBBFC\uC8FC \uD56D\uC7C1\uC73C\uB85C \uB300\uD1B5\uB839 \uC9C1\uC120\uC81C\uB97C \uB2E4\uC2DC \uC5BB\uC5C8\uC5B4\uC694.",g:6,d:1},{r:"\uC9C1\uC120\uC81C",x:["\uAC04\uC120\uC81C"],s:"6\uC6D4 \uBBFC\uC8FC \uD56D\uC7C1 \uB4A4 \uAD6D\uBBFC\uC774 \uB300\uD1B5\uB839\uC744 \uC9C1\uC811 \uBF51\uB294 \uB300\uD1B5\uB839 \uFF3F \uBC29\uC2DD\uC774 \uB2E4\uC2DC \uB9C8\uB828\uB410\uC5B4\uC694.",why:"\uC9C1\uC120\uC81C\uB294 \uAD6D\uBBFC\uC774 \uC9C1\uC811, \uAC04\uC120\uC81C\uB294 \uB300\uD45C\uB97C \uAC70\uCCD0 \uBF51\uB294 \uBC29\uC2DD\uC774\uC5D0\uC694.",g:6,d:1},{r:"\uC9C0\uBC29 \uC790\uCE58",x:["\uC911\uC559 \uC9D1\uAD8C","\uC2E0\uBD84"],s:"\uC8FC\uBBFC\uC774 \uB300\uD45C\uB97C \uBF51\uC544 \uC9C0\uC5ED \uC77C\uC744 \uC2A4\uC2A4\uB85C \uACB0\uC815\uD558\uB294 \uFF3F \uC81C\uB3C4\uAC00 \uC790\uB9AC \uC7A1\uC558\uC5B4\uC694.",why:"\uC9C0\uBC29 \uC790\uCE58\uB294 \uC9C0\uC5ED\uC758 \uC77C\uC744 \uADF8 \uC9C0\uC5ED \uC8FC\uBBFC\uC774 \uC2A4\uC2A4\uB85C \uACB0\uC815\uD558\uB294 \uAC70\uC608\uC694.",g:6,d:1},{r:"\uC2DC\uBBFC \uB2E8\uCCB4",x:["\uAD70\uB300","\uC655\uC2E4"],s:"\uBBFC\uC8FC\uD654 \uC774\uD6C4 \uC0AC\uD68C \uBB38\uC81C\uB97C \uD568\uAED8 \uD574\uACB0\uD558\uB824\uB294 \uFF3F \uD65C\uB3D9\uC774 \uB298\uC5C8\uC5B4\uC694.",why:"\uC2DC\uBBFC\uB4E4\uC774 \uB73B\uC744 \uBAA8\uC544 \uB9CC\uB4E0 \uBAA8\uC784\uC774 \uC2DC\uBBFC \uB2E8\uCCB4\uC608\uC694.",g:6,d:1},{r:"\uBC18\uB3C4\uCCB4",x:["\uBA74\uC9C1\uBB3C","\uAC00\uBC1C"],s:"1990\uB144\uB300 \uC774\uD6C4\uC5D0\uB294 \uFF3F\xB7\uC790\uB3D9\uCC28\xB7\uC804\uC790 \uC81C\uD488\uC774 \uC911\uC694\uD55C \uC218\uCD9C\uD488\uC774 \uB418\uC5C8\uC5B4\uC694.",why:"\uAE30\uC220\uC774 \uBC1C\uB2EC\uD558\uBA74\uC11C \uCCA8\uB2E8 \uC81C\uD488\uC744 \uB9CE\uC774 \uC218\uCD9C\uD558\uAC8C \uB410\uC5B4\uC694.",g:6,d:1},{r:"\uACE0\uC18D \uAD6D\uB3C4",x:["\uC6B4\uD558","\uCF00\uC774\uBE14\uCE74"],s:"1970\uB144\uC5D0 \uC11C\uC6B8\uACFC \uBD80\uC0B0\uC744 \uC787\uB294 \uACBD\uBD80 \uFF3F \uAC1C\uD1B5\uC73C\uB85C \uC624\uAC00\uB294 \uC2DC\uAC04\uC774 \uD06C\uAC8C \uC904\uC5C8\uC5B4\uC694.",why:"\uACBD\uBD80 \uACE0\uC18D \uAD6D\uB3C4\uB294 \uC0B0\uC5C5\uD654\uC758 \uC911\uC694\uD55C \uBC14\uD0D5\uC774 \uB410\uC5B4\uC694.",g:6,d:1},{r:"\uBE48\uBD80 \uACA9\uCC28",x:["\uAD6D\uD1A0 \uBD84\uB2E8","\uC800\uCD9C\uC0B0"],s:"\uACBD\uC81C\uAC00 \uC790\uB77C\uBA74\uC11C \uB109\uB109\uD55C \uC0AC\uB78C\uACFC \uADF8\uB807\uC9C0 \uBABB\uD55C \uC0AC\uB78C \uC0AC\uC774\uC758 \uFF3F \uBB38\uC81C\uAC00 \uCEE4\uC84C\uC5B4\uC694.",why:"\uAC00\uC9C4 \uAC83\uC758 \uCC28\uC774\uAC00 \uBC8C\uC5B4\uC9C0\uB294 \uAC83\uC744 \uBE48\uBD80 \uACA9\uCC28\uB77C\uACE0 \uD574\uC694.",g:6,d:1},{r:"\uC11C\uBE44\uC2A4\uC5C5",x:["\uB18D\uC5C5","\uC5B4\uC5C5"],s:"\uC624\uB298\uB0A0\uC5D0\uB294 \uAE08\uC735\xB7\uAD00\uAD11\xB7\uC815\uBCF4 \uD1B5\uC2E0 \uAC19\uC740 \uFF3F \uBD84\uC57C\uC758 \uBE44\uC911\uC774 \uCEE4\uC9C0\uACE0 \uC788\uC5B4\uC694.",why:"\uBB3C\uAC74 \uB300\uC2E0 \uB3C4\uC6C0\uC774\uB098 \uD3B8\uB9AC\uD568\uC744 \uC8FC\uB294 \uC0B0\uC5C5\uC774 \uC11C\uBE44\uC2A4\uC5C5\uC774\uC5D0\uC694.",g:6,d:1},{r:"\uC5B8\uC5B4",x:["\uAE30\uD6C4","\uC9C0\uD615"],s:"\uBD84\uB2E8\uC774 \uAE38\uC5B4\uC9C0\uBA74\uC11C \uB0A8\uBD81\uD55C\uC758 \uFF3F \uC0DD\uD65C\uACFC \uBB38\uD654\uAC00 \uC810\uC810 \uB2EC\uB77C\uC9C0\uACE0 \uC788\uC5B4\uC694.",why:"\uAC19\uC740 \uB9D0\uB3C4 \uB0A8\uBD81\uD55C\uC774 \uB2E4\uB974\uAC8C \uC4F0\uB294 \uACBD\uC6B0\uAC00 \uB298\uC5C8\uC5B4\uC694.",g:6,d:1},{r:"\uAD6D\uBC29\uBE44",x:["\uAD00\uAD11 \uC218\uC785","\uC218\uCD9C \uC218\uC775"],s:"\uBD84\uB2E8 \uB54C\uBB38\uC5D0 \uB0A8\uBD81\uD55C \uBAA8\uB450 \uB9CE\uC740 \uFF3F \uBD80\uB2F4\uC744 \uC9C0\uACE0 \uC788\uC5B4\uC694.",why:"\uAD70\uB300\uB97C \uC720\uC9C0\uD558\uB294 \uB370 \uB9CE\uC740 \uB3C8\uC774 \uB4E4\uC5B4\uC694.",g:6,d:1},{r:"\uAD50\uD1B5",x:["\uC0AC\uB9C9","\uBE59\uD558"],s:"\uD1B5\uC77C\uC774 \uB418\uBA74 \uD55C\uBC18\uB3C4\uB294 \uB300\uB959\uACFC \uBC14\uB2E4\uB97C \uC787\uB294 \uB3D9\uC544\uC2DC\uC544 \uFF3F \uC911\uC2EC\uC9C0\uAC00 \uB420 \uC218 \uC788\uC5B4\uC694.",why:"\uAE30\uCC28\uC640 \uB3C4\uB85C\uB85C \uB300\uB959\uAE4C\uC9C0 \uC774\uC5B4\uC9C8 \uC218 \uC788\uC5B4\uC694.",g:6,d:1},{r:"\uC815\uC804 \uD611\uC815",x:["\uD3C9\uD654 \uC870\uC57D","\uB0A8\uBD81 \uC815\uC0C1 \uD68C\uB2F4"],s:"1953\uB144 \uFF3F \uCCB4\uACB0\uB85C 6\xB725 \uC804\uC7C1\uC758 \uC2F8\uC6C0\uC774 \uBA48\uCDC4\uC5B4\uC694.",why:"\uC815\uC804 \uD611\uC815\uC740 \uC2F8\uC6C0\uC744 \uBA48\uCD94\uAE30\uB85C \uD55C \uC57D\uC18D\uC774\uC5D0\uC694. \uC544\uC9C1 \uD3C9\uD654 \uC870\uC57D\uC740 \uC5C6\uC5B4\uC694.",g:6,d:2},{r:"\uC784\uC9C4\uAC01",x:["\uD310\uBB38\uC810","\uAC1C\uC131 \uACF5\uB2E8"],s:"\uC2E4\uD5A5\uBBFC\uC774 \uACE0\uD5A5\uC744 \uADF8\uB9AC\uBA70 \uCC3E\uB294 \uB9DD\uBC30\uB2E8\uACFC \uD3C9\uD654\uC758 \uC885\uC774 \uC788\uB294 \uACF3\uC740 \uFF3F \uCABD\uC774\uC5D0\uC694.",why:"\uC784\uC9C4\uAC01\uC740 \uACBD\uAE30\uB3C4 \uD30C\uC8FC\uC5D0 \uC788\uC5B4\uC694.",g:6,d:2},{r:"3\xB715",x:["5\xB710","6\xB729"],s:"4\xB719 \uD601\uBA85\uC740 1960\uB144 \uFF3F \uBD80\uC815 \uC120\uAC70\uC5D0 \uB9DE\uC11C \uC77C\uC5B4\uB0AC\uC5B4\uC694.",why:"1960\uB144 3\uC6D4 15\uC77C \uC120\uAC70\uAC00 \uACF5\uC815\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694.",g:6,d:2},{r:"6\xB729 \uBBFC\uC8FC\uD654 \uC120\uC5B8",x:["7\xB74 \uB0A8\uBD81 \uACF5\uB3D9 \uC131\uBA85","3\xB71 \uB3C5\uB9BD \uC120\uC5B8"],s:"1987\uB144 \uC815\uBD80\uAC00 \uB300\uD1B5\uB839 \uC9C1\uC120\uC81C\uB97C \uBC1B\uC544\uB4E4\uC778 \uFF3F \uB0B4\uC6A9\uC774 \uBC1C\uD45C\uB418\uC5C8\uC5B4\uC694.",why:"6\uC6D4 \uBBFC\uC8FC \uD56D\uC7C1\uC758 \uACB0\uACFC\uB85C 6\xB729 \uBBFC\uC8FC\uD654 \uC120\uC5B8\uC774 \uB098\uC654\uC5B4\uC694.",g:6,d:2},{r:"\uB0A8\uBD81 \uC815\uC0C1 \uD68C\uB2F4",x:["\uC62C\uB9BC\uD53D \uAC1C\uD68C\uC2DD","\uC720\uC5D4 \uCD1D\uD68C"],s:"\uB0A8\uBD81\uD55C \uC815\uC0C1\uC774 \uB9CC\uB098 \uD3C9\uD654\uC640 \uAD50\uB958\uB97C \uC774\uC57C\uAE30\uD558\uB294 \uFF3F \uC790\uB9AC\uAC00 \uC5EC\uB7EC \uBC88 \uC5F4\uB838\uC5B4\uC694.",why:"2000\uB144\uBD80\uD130 \uB0A8\uBD81 \uC815\uC0C1 \uD68C\uB2F4\uC774 \uC5EC\uB7EC \uBC88 \uC5F4\uB838\uC5B4\uC694.",g:6,d:2},{r:"\uB9CC\uC6D4\uB300",x:["\uACBD\uBCF5\uAD81","\uBD88\uAD6D\uC0AC"],s:"\uB0A8\uBD81\uD55C \uD559\uC790\uB4E4\uC774 \uAC1C\uC131\uC758 \uACE0\uB824 \uAD81\uAD90 \uD130\uC778 \uFF3F \uBC1C\uAD74\uC744 \uD568\uAED8 \uD588\uC5B4\uC694.",why:"\uB9CC\uC6D4\uB300\uB294 \uACE0\uB824\uC758 \uC218\uB3C4 \uAC1C\uC131\uC5D0 \uC788\uB358 \uAD81\uAD90 \uD130\uC608\uC694.",g:6,d:2},{r:"\uCCA8\uB2E8",x:["\uACBD\uACF5\uC5C5","\uC218\uACF5\uC5C5"],s:"\uC624\uB298\uB0A0\uC5D0\uB294 \uB85C\uBD07\xB7\uC778\uACF5 \uC9C0\uB2A5 \uAC19\uC740 \uFF3F \uC0B0\uC5C5\uC774 \uC0C8\uB85C \uC790\uB77C\uACE0 \uC788\uC5B4\uC694.",why:"\uAC00\uC7A5 \uC55E\uC120 \uAE30\uC220\uC744 \uC4F0\uB294 \uC0B0\uC5C5\uC744 \uCCA8\uB2E8 \uC0B0\uC5C5\uC774\uB77C\uACE0 \uD574\uC694.",g:6,d:2},{r:"\uC720\uB7FD",x:["\uC544\uC2DC\uC544","\uC544\uD504\uB9AC\uCE74"],s:"\uD1B5\uC77C\uD55C \uB3C5\uC77C\uC740 \uC624\uB298\uB0A0 \uFF3F \uB300\uB959\uC758 \uC911\uC2EC \uAD6D\uAC00\uAC00 \uB418\uC5C8\uC5B4\uC694.",why:"\uD1B5\uC77C \uB4A4 \uB3C5\uC77C\uC740 \uC778\uAD6C\uC640 \uC601\uD1A0\uAC00 \uB298\uACE0 \uACBD\uC81C\uAC00 \uC131\uC7A5\uD588\uC5B4\uC694.",g:6,d:2},{r:"\uAD11\uBCF5",x:["6\xB725 \uC804\uC7C1","4\xB719 \uD601\uBA85"],s:"\uB0A8\uD55C\uACFC \uBD81\uD55C\uC5D0 \uC11C\uB85C \uB2E4\uB978 \uC815\uBD80\uAC00 \uC138\uC6CC\uC9C4 \uAC83\uC740 \uFF3F \uC774\uD6C4\uC758 \uC77C\uC774\uC5D0\uC694.",why:"1945\uB144 \uAD11\uBCF5 \uB4A4 1948\uB144\uC5D0 \uB0A8\uBD81\uC5D0 \uAC01\uAC01 \uC815\uBD80\uAC00 \uC138\uC6CC\uC84C\uC5B4\uC694.",g:6,d:2},{r:"\uACF5\uC5C5",x:["\uB180\uC774","\uD734\uC591"],s:"1970\uB144\uB300\uC5D0\uB294 \uC218\uCD9C\uC744 \uB298\uB9AC\uB824\uACE0 \uFF3F \uB2E8\uC9C0\uB97C \uACF3\uACF3\uC5D0 \uC138\uC6E0\uC5B4\uC694.",why:"\uACF5\uC7A5\uC744 \uBAA8\uC544 \uB454 \uACF3\uC744 \uACF5\uC5C5 \uB2E8\uC9C0\uB77C\uACE0 \uD574\uC694.",g:6,d:2}]};var Bi=[],dt=Math.random;function xm(s){if(Bi.length=0,s==null){dt=Math.random;return}let e=s>>>0;dt=()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ie=(s,e)=>s+Math.floor(dt()*(e-s+1)),ki=s=>s[Math.floor(dt()*s.length)],ft={gugu:{name:"\uACF1\uC148\uAD6C\uAD6C",group:"\uC218\uD559",hint:"2\uB2E8~9\uB2E8",make(s){if(s===0){let n=ki([2,3,4,5]),i=Ie(1,9);return ut(`${n} \xD7 ${i}`,n*i)}if(s===1){let n=Ie(6,9),i=Ie(2,9);return ut(`${n} \xD7 ${i}`,n*i)}let e=Ie(2,9),t=Ie(2,9);return dt()<.5?ut(`\u25A1 \xD7 ${t} = ${e*t}`,e,"\u25A1\uC5D0 \uB4E4\uC5B4\uAC08 \uC218"):ut(`${e} \xD7 \u25A1 = ${e*t}`,t,"\u25A1\uC5D0 \uB4E4\uC5B4\uAC08 \uC218")}},addsub:{name:"\uB367\uC148\uACFC \uBE84\uC148",group:"\uC218\uD559",hint:"\uB450 \uC790\uB9AC~\uC138 \uC790\uB9AC",make(s){if(s===0){let n=Ie(11,89),i=Ie(2,9);return dt()<.5?ut(`${n} + ${i}`,n+i):ut(`${n} \u2212 ${i}`,n-i)}if(s===1){let n=Ie(21,98),i=Ie(11,Math.min(89,n-1));return dt()<.5?ut(`${n} + ${i}`,n+i):ut(`${n} \u2212 ${i}`,n-i)}let e=Ie(201,989),t=Ie(102,e-1);return dt()<.5?ut(`${e} + ${t}`,e+t):ut(`${e} \u2212 ${t}`,e-t)}},muldiv:{name:"\uACF1\uC148\uACFC \uB098\uB217\uC148",group:"\uC218\uD559",hint:"\uAD6C\uAD6C \uBC94\uC704~\uC138 \uC790\uB9AC",make(s){if(s===0){let n=Ie(2,9),i=Ie(2,9);return ut(`${n*i} \xF7 ${n}`,i)}if(s===1){let n=Ie(12,49),i=Ie(2,9);return dt()<.5?ut(`${n} \xD7 ${i}`,n*i):ut(`${n*i} \xF7 ${i}`,n)}if(dt()<.5){let n=Ie(11,39),i=Ie(11,25);return ut(`${n} \xD7 ${i}`,n*i)}let e=Ie(3,9),t=Ie(21,99);return ut(`${e*t} \xF7 ${e}`,t)}},mixed:{name:"\uD63C\uD569 \uACC4\uC0B0",group:"\uC218\uD559",hint:"\uACC4\uC0B0 \uC21C\uC11C \uC9C0\uD0A4\uAE30",make(s){if(s===0){let l=Ie(2,20),c=Ie(2,9),h=Ie(2,9);return dt()<.5?ut(`${l} + ${c} \xD7 ${h}`,l+c*h):ut(`${c*h+l} \u2212 ${c} \xD7 ${h}`,l)}if(s===1){let l=Ie(2,9),c=Ie(2,9),h=Ie(2,6),u=Ie(1,(l+c)*h-1);return ut(`(${l} + ${c}) \xD7 ${h} \u2212 ${u}`,(l+c)*h-u)}let e=Ie(3,9),t=Ie(3,9),n=Ie(2,6),i=Ie(2,9),r=Ie(1,20),a=n*i,o=e*t-i+r;return ut(`${e} \xD7 ${t} \u2212 ${a} \xF7 ${n} + ${r}`,o)}}},fi=(s,e)=>e?fi(e,s%e):s,PM=(s,e)=>s/fi(s,e)*e,Vs=(s,e)=>{let t=fi(Math.abs(s),Math.abs(e));return[s/t,e/t]},ud=([s,e])=>s%e===0?String(s/e):s>e?`${go(Math.floor(s/e),"\uACFC")} ${s%e}/${e}`:`${s}/${e}`,LM={0:1,1:1,2:0,3:1,4:0,5:0,6:1,7:1,8:1,9:0};function go(s,e){let t=String(s),n=t.includes("/")?t.split("/")[0].replace(/.*과 /,""):t,i=/\d0$/.test(n)&&!n.includes(".")?1:LM[n[n.length-1]]??1,r={\uACFC:["\uACFC","\uC640"],\uC640:["\uACFC","\uC640"],\uC744:["\uC744","\uB97C"],\uB97C:["\uC744","\uB97C"],\uC740:["\uC740","\uB294"],\uB294:["\uC740","\uB294"],\uC774:["\uC774","\uAC00"],\uAC00:["\uC774","\uAC00"]}[e];return t+(i?r[0]:r[1])}function mo(s,e,t,n,i,r,a=!1){let o=ud(e),l=new Set([o]),c=[o],h=([u,d])=>u*e[1]===d*e[0];for(let u of sn(t.filter(d=>d[1]>0&&d[0]>0&&(a||!h(d))).map(ud))){if(c.length>=(n===0?3:4))break;!l.has(u)&&!u.includes("-")&&!u.startsWith("0")&&(l.add(u),c.push(u))}for(let u=1;c.length<(n===0?3:4)&&u<9;u++){let d=ud([e[0]+u,e[1]]);l.has(d)||(l.add(d),c.push(d))}if(i==="mix"&&dt()<.25||i==="pick"&&dt()<.35){let u=dt()<.5,d=u?o:c[1+Math.floor(dt()*(c.length-1))];return{type:"ox",text:/[가-힣]/.test(s)?`${s} \u2192 ${d}`:`${s} = ${d}`,prompt:"\uB9DE\uC73C\uBA74 O, \uD2C0\uB9AC\uBA74 X",answer:u?"O":"X",reveal:`${s} \u2192 ${o}`,frac:!0}}return{type:"choice",text:s,prompt:r||"\uC54C\uB9DE\uC740 \uB2F5\uC744 \uACE8\uB77C\uC694",answer:o,options:sn(c),reveal:`${s} = ${o}`,frac:!0}}Object.assign(ft,{factor:{name:"\uC57D\uC218\uC640 \uBC30\uC218",group:"\uC218\uD559",hint:"5\uD559\uB144 \xB7 \uCD5C\uB300\uACF5\uC57D\uC218\xB7\uCD5C\uC18C\uACF5\uBC30\uC218",noOX:!0,make(s){if(s===0){if(dt()<.5){let u=ki([6,8,10,12,15,16,18,20,24,28,30,36]),d=0;for(let f=1;f<=u;f++)u%f===0&&d++;return ut(`${u}\uC758 \uC57D\uC218\uB294 \uBAA8\uB450 \uBA87 \uAC1C`,d,"\uC57D\uC218\uC758 \uAC1C\uC218\uB97C \uC368\uC694")}let c=Ie(3,9),h=Ie(3,9);return ut(`${c}\uC758 \uBC30\uC218 \uC911 ${h}\uBC88\uC9F8 \uC218`,c*h,"\uBC30\uC218 \uCC3E\uAE30")}let e=Ie(2,s===1?9:12),t=Ie(1,7),n=Ie(2,8),i=e*t,r=e*(fi(t,n)===1&&t!==n?n:n+(n%t===0?1:0));if(s===1)return ut(`${go(i,"\uACFC")} ${r}\uC758 \uCD5C\uB300\uACF5\uC57D\uC218`,fi(i,r));let a=Ie(4,15),o=Ie(4,18),l=o===a?o+1:o;return ut(`${go(a,"\uACFC")} ${l}\uC758 \uCD5C\uC18C\uACF5\uBC30\uC218`,PM(a,l))}},fracadd:{name:"\uBD84\uC218\uC758 \uB367\uC148\uACFC \uBE84\uC148",group:"\uC218\uD559",hint:"5\uD559\uB144 \xB7 \uC57D\uBD84\uACFC \uD1B5\uBD84",make(s,e){if(s===0){let u=Ie(2,9),d=Ie(1,u-1),f=Ie(2,6),[g,v]=Vs(d,u);return mo(`${go(`${d*f}/${u*f}`,"\uC744")} \uAE30\uC57D\uBD84\uC218\uB85C`,[g,v],[[d*f,u*f],[g*2,v*2],[g+1,v],[g,v+1]],s,e==="input"?"pick":e,"\uAE30\uC57D\uBD84\uC218\uB85C \uB098\uD0C0\uB0B4\uC694",!0)}let t=Ie(2,s===1?6:9),n=Ie(2,s===1?6:10),i=Ie(1,t-1),r=Ie(1,n-1);if(fi(i,t)>1||fi(r,n)>1)return ft.fracadd.make(s,e);let a=s===1||dt()<.5,o=a?i*n+r*t:i*n-r*t,l=t*n;if(!a&&o<=0)return ft.fracadd.make(s,e);let c=Vs(o,l),h=a?[i+r,t+n]:[Math.abs(i-r)||1,Math.abs(t-n)||1];return mo(`${i}/${t} ${a?"+":"\u2212"} ${r}/${n}`,c,[h,[o,l],[c[0]+1,c[1]],[c[0],c[1]+1]],s,e)}},fracdiv:{name:"\uBD84\uC218\xB7\uC18C\uC218\uC758 \uB098\uB217\uC148",group:"\uC218\uD559",hint:"6\uD559\uB144",make(s,e){if(s===0){let r=Ie(2,6),a=Ie(3,9),o=Ie(1,a-1),l=o*(dt()<.5&&o*r<a?r:1),c=Vs(l,a*r);return fi(l,a)>1?ft.fracdiv.make(s,e):mo(`${l}/${a} \xF7 ${r}`,c,[[l*r,a],[l,a+r],[c[0]+1,c[1]]],s,e==="input"?"pick":e)}if(s===1){let r=Ie(2,9),a=Ie(2,9),o=Ie(1,r-1),l=Ie(1,a-1),c=Vs(o*a,r*l);return fi(o,r)>1||fi(l,a)>1?ft.fracdiv.make(s,e):c[1]===1&&e==="input"?ut(`${o}/${r} \xF7 ${l}/${a}`,c[0]):mo(`${o}/${r} \xF7 ${l}/${a}`,c,[Vs(o*l,r*a),[o+l,r+a],[c[0]+1,c[1]]],s,e==="input"?"pick":e)}let t=Ie(2,9),n=ki([.2,.3,.4,.5,.6,.7,.8,.9,1.2,1.4,1.5,1.6,2.5]),i=Math.round(t*n*100)/100;return ut(`${i} \xF7 ${n}`,t)}},ratio:{name:"\uBE44\uC640 \uBE44\uC728",group:"\uC218\uD559",hint:"6\uD559\uB144 \xB7 \uBC31\uBD84\uC728",noOX:!0,make(s,e){if(s===0){let i=Ie(2,10),r=Ie(1,i-1);return mo(`${r} : ${i}\uC758 \uBE44\uC728\uC744 \uBD84\uC218\uB85C`,Vs(r,i),[[i,r],[r,r+i],Vs(r+1,i)],s,e==="input"?"pick":e,"\uBE44\uC728\uC744 \uBD84\uC218\uB85C \uB098\uD0C0\uB0B4\uC694")}if(s===1){let i=ki([5,10,20,25,40,50,60,75,80]);return ut(`\uBE44\uC728 ${go(i/100,"\uC744")} \uBC31\uBD84\uC728\uB85C(%)`,i,"% \uC55E\uC758 \uC218\uB97C \uC368\uC694")}let t=ki([20,25,40,50,80,200,400]),n=ki([5,10,20,25,30,40,50,60,75].filter(i=>t*i%100===0));return ut(`${t}\uBA85 \uC911 ${t*n/100}\uBA85\uC740 \uBA87 %`,n,"% \uC55E\uC758 \uC218\uB97C \uC368\uC694")}}});function NM(s,e){let t=s.filter(i=>i.d===e),n=s.filter(i=>i.d<e);return n.length&&(dt()<.3||!t.length)?n:t}function _m(s,e,t){let n=NM(s,e),i;for(let r=0;r<20&&(i=ki(n),!!Bi.includes(t(i)));r++);return i}var Xr=s=>[...s.replace(/\s/g,"")];function ym(s,e,t,n){let i=Xr(s),r=new Set(i),a=[];for(let l of e)!r.has(l)&&!a.includes(l)&&a.push(l);let o=sn(t.flatMap(Xr).filter(l=>!r.has(l)));for(let l of o){if(a.length>=n)break;a.includes(l)||a.push(l)}return sn([...i,...a.slice(0,n)])}function Xc(s){let e=dt(),t;for(let[n,i]of s)if(t=n,(e-=i)<0)return n;return t}var DM=s=>s.w;function UM(s,e){let t=ho.items,n=_m(t,s,DM),i=t.filter(d=>d.w!==n.w&&(!n.same||d.same!==n.same)),r=`${n.w}(${n.h}) \xB7 ${n.m}`,a=e==="input"?"tiles":Xc(e==="pick"?[["m2w",.4],["w2m",.25],["blank",.15],["ox",.2]]:[["tiles",.35],["m2w",.2],["w2m",.15],["blank",.1],["ox",.2]]),o=s===0?3:4,l=d=>sn(i.slice()).slice(0,d).map(f=>f.w),c={word:!0,key:n.w,reveal:r};if(a==="tiles")return{...c,type:"tiles",text:n.m,prompt:"\uB73B\uC5D0 \uB9DE\uB294 \uC0AC\uC790\uC131\uC5B4\uB97C \uB9CC\uB4E4\uC5B4\uC694",answer:n.w,tiles:ym(n.w,[],i.map(d=>d.w),s===0?2:4),options:sn([n.w,...l(2)])};if(a==="m2w")return{...c,type:"choice",text:n.m,prompt:"\uB73B\uC5D0 \uB9DE\uB294 \uC0AC\uC790\uC131\uC5B4\uB97C \uACE8\uB77C\uC694",answer:n.w,options:sn([n.w,...l(o-1)])};if(a==="w2m"){let d=sn(i.slice()).slice(0,2).map(f=>f.m);return{...c,type:"choice",long:!0,text:n.w,prompt:"\uC774 \uC0AC\uC790\uC131\uC5B4\uC758 \uB73B\uC744 \uACE8\uB77C\uC694",answer:n.m,options:sn([n.m,...d])}}if(a==="blank"){let d=Xr(n.w),f=Math.floor(dt()*4),g=d[f],v=sn(i.flatMap(w=>Xr(w.w)).filter(w=>!d.includes(w))),m=[g];for(let w of v){if(m.length>=o)break;m.includes(w)||m.push(w)}let p=d.map((w,R)=>R===f?"\u25A1":w).join("");return{...c,type:"choice",text:`${p} \xB7 ${n.m}`,prompt:"\u25A1\uC5D0 \uC54C\uB9DE\uC740 \uAE00\uC790\uB97C \uACE8\uB77C\uC694",answer:g,options:sn(m)}}let h=dt()<.5,u=h?n.m:ki(i).m;return{...c,type:"ox",text:`${n.w}: ${u}`,prompt:"\uB73B\uC774 \uB9DE\uC73C\uBA74 O, \uD2C0\uB9AC\uBA74 X",answer:h?"O":"X"}}var pm=s=>s.r+s.s,qc=(s,e)=>(t,n)=>OM(t,n,s,e);function OM(s,e,t=Wr,n="\uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uB9D0\uC744 \uBC14\uB974\uAC8C \uB9CC\uB4E4\uC5B4\uC694"){let i=t.items,r=_m(i,s,pm),a=`${r.r} \xB7 ${r.why}`,o=r.s.replace("\uFF3F","\uFF3F\uFF3F"),l=!/\s/.test(r.r)&&Xr(r.r).length<=5,c=e==="input"?"tiles":Xc(e==="pick"?[["choice",.65],["ox",.35]]:[["tiles",.4],["choice",.35],["ox",.25]]);c==="tiles"&&!l&&(c="choice");let h={word:!0,key:pm(r),reveal:a};if(c==="tiles"){let f=i.filter(g=>g!==r).map(g=>g.r);return{...h,type:"tiles",text:o,prompt:n,answer:r.r,tiles:ym(r.r,r.x.flatMap(Xr),f,s===0?2:3),options:sn([r.r,...r.x])}}if(c==="choice"){let f=sn([r.r,...r.x]);return{...h,type:"choice",text:o,prompt:"\uBE48\uCE78\uC5D0 \uC54C\uB9DE\uC740 \uB9D0\uC744 \uACE8\uB77C\uC694",answer:r.r,options:f,gk:f.length<=2?"ox":"choice"}}let u=dt()<.5,d=u?r.r:ki(r.x);return{...h,type:"ox",text:r.s.replace("\uFF3F",`\u300C${d}\u300D`),prompt:"\u300C \u300D \uC548\uC758 \uB9D0\uC774 \uBC14\uB974\uBA74 O, \uD2C0\uB9AC\uBA74 X",answer:u?"O":"X"}}ft.saja={name:ho.name,group:"\uAD6D\uC5B4",hint:ho.hint,words:!0,make:UM,bank:ho};ft.spell={name:Wr.name,group:"\uAD6D\uC5B4",hint:Wr.hint,words:!0,make:qc(Wr),bank:Wr,blank:!0};ft.geo5={name:uo.name,group:"\uC0AC\uD68C",hint:uo.hint,words:!0,make:qc(uo,"\uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uB9D0\uC744 \uB9CC\uB4E4\uC5B4\uC694"),bank:uo,blank:!0};ft.hist6={name:po.name,group:"\uC0AC\uD68C",hint:po.hint,words:!0,make:qc(po,"\uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uB9D0\uC744 \uB9CC\uB4E4\uC5B4\uC694"),bank:po,blank:!0};ft.geo6={name:fo.name,group:"\uC0AC\uD68C",hint:fo.hint,words:!0,make:qc(fo,"\uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uB9D0\uC744 \uB9CC\uB4E4\uC5B4\uC694"),bank:fo,blank:!0};function ut(s,e,t=""){return{type:"number",text:s,answer:e,prompt:t}}var xo={input:{name:"\uC9C1\uC811 \uC785\uB825",hint:"\uC22B\uC790\uD310\uC73C\uB85C \uB2F5 \uC4F0\uAE30(\uACE8\uB4DC \uB9CE\uC774)"},mix:{name:"\uC11E\uC5B4\uC11C",hint:"\uC785\uB825\xB7\uAC1D\uAD00\uC2DD\xB7OX \uC11E\uAE30"},pick:{name:"\uACE0\uB974\uAE30\uB9CC",hint:"\uAC1D\uAD00\uC2DD\xB7OX(\uCC98\uC74C \uD558\uB294 \uD559\uC0DD)"}},dd=0;function vm(s,e,t="input"){let n=ft[s],i;if(n.words)return i=n.make(e,t),Bi.push(i.key),Bi.length>12&&Bi.shift(),{...i,id:++dd,topic:s,diff:e};for(let a=0;a<20&&(i=n.make(e,t),!!Bi.includes(i.text));a++);if(Bi.push(i.text),Bi.length>12&&Bi.shift(),i.type!=="number")return{...i,id:++dd,topic:s,diff:e};let r=dt();return t==="pick"?i=r<.65||n.noOX?mm(i,e):gm(i):t==="mix"&&(i=r<.5?i:r<.8||n.noOX?mm(i,e):gm(i)),{...i,id:++dd,topic:s,diff:e}}function Mm(s){let e=new Set([s+1,s-1,s+2,s-2,s+10,s-10]),t=String(s).split("").reverse().join("");t.length>1&&t[0]!=="0"&&e.add(Number(t));for(let n of[3,4,6,7,8,9])e.add(s+n),e.add(s-n);return[...e].filter(n=>(s>0?n>0:n>=0)&&n!==s&&Number.isInteger(n))}function sn(s){for(let e=s.length-1;e>0;e--){let t=Math.floor(dt()*(e+1));[s[e],s[t]]=[s[t],s[e]]}return s}function mm(s,e){let t=e===0?3:4,i=sn(Mm(s.answer)).sort((a,o)=>Math.abs(a-s.answer)-Math.abs(o-s.answer)+(dt()-.5)*6),r=sn([s.answer,...i.slice(0,t-1)]);return{type:"choice",text:s.text,prompt:s.prompt||"\uC54C\uB9DE\uC740 \uB2F5\uC744 \uACE0\uB974\uC138\uC694",options:r.map(String),answer:String(s.answer),base:s}}function gm(s){let e=dt()<.5,t=e?s.answer:sn(Mm(s.answer))[0];return{type:"ox",text:s.text.includes("\u25A1")?s.text.replace("\u25A1",t):`${s.text} = ${t}`,prompt:"\uB9DE\uC73C\uBA74 O, \uD2C0\uB9AC\uBA74 X",answer:e?"O":"X",base:s}}function qr(s,e){if(s.type==="tiles")return String(e).replace(/\s/g,"")===String(s.answer).replace(/\s/g,"");if(s.type==="choice"||s.type==="ox")return String(e)===String(s.answer);let t=Number(String(e).trim());return e!==""&&Number.isFinite(t)&&t===s.answer}function fd(s){return s.reveal?s.reveal:s.type==="ox"?s.answer==="O"?"O(\uB9DE\uB294 \uC2DD)":`X \xB7 \uBC14\uB978 \uB2F5\uC740 ${s.base?s.base.answer:""}`:String(s.answer)}function $c(s){return s.word||s.type==="ox"||s.text.includes("\u25A1")||/[가-힣]/.test(s.text)?s.text:s.text+" ="}var FM=`
<section class="quiz" aria-label="\uBB38\uC81C">
  <div class="qhead">
    <span class="chip"></span>
    <div class="seg" role="radiogroup" aria-label="\uB09C\uC774\uB3C4(\uC62C\uB9AC\uAE30\uB9CC \uC9C1\uC811, \uB0B4\uB9AC\uAE30\uB294 \uC790\uB3D9)"><button data-d="0" role="radio" data-x="\xD71">\uC26C\uC6C0</button><button data-d="1" role="radio" data-x="\xD72">\uBCF4\uD1B5</button><button data-d="2" role="radio" data-x="\xD74">\uC5B4\uB824\uC6C0</button></div>
    <span class="streak" hidden></span>
    <button class="ghost skip">\uB118\uAE30\uAE30</button>
  </div>
  <div class="qline"><div class="qtext"><small class="qprompt"></small><b class="qt"></b></div><div class="ans" aria-live="polite"><span class="ansText"></span><i class="caret"></i></div></div>
  <div class="keypad">
    <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button>
    <button>7</button><button>8</button><button>9</button><button>0</button><button data-k="back" aria-label="\uC9C0\uC6B0\uAE30">\uC9C0\uC6B0\uAE30</button><button data-k="ok" class="ok">\uD655\uC778</button>
  </div>
  <div class="choices" hidden></div>
  <div class="tiles" hidden></div>
  <span class="tip tip1" hidden>\u2460 \uBB38\uC81C\uB97C \uD480\uC5B4 \uACE8\uB4DC\uB97C \uBAA8\uC544\uC694</span>
  <div class="lock" hidden><b class="lockMsg"></b><small class="lockSub"></small><i class="lockbar"><i class="lockBar"></i></i></div>
</section>
<section class="army" aria-label="\uCD9C\uC804">
  <div class="ahead">
    <div class="gold"><i class="coin"></i><b class="goldN">60</b><span class="pop"></span></div>
    <button class="mine"><span>\uAE08\uAD11 <b class="mineLv">Lv1</b></span><small class="mineCost">120\uACE8\uB4DC\uB85C \uAC15\uD654</small></button>
    <button class="cannon" disabled><span>\uC131 \uB300\uD3EC</span><span class="pips"><i></i><i></i><i></i><i></i><i></i></span></button>
  </div>
  <div class="lanes" role="radiogroup" aria-label="\uBCF4\uB0BC \uAE38">
    <span class="lab">\uBCF4\uB0BC \uAE38</span>
    <button data-lane="top" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 V3 H21" /></svg><span>\uC717\uAE38</span></button>
    <button data-lane="mid" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 L21 2" /></svg><span>\uAC00\uC6B4\uB383\uAE38</span></button>
    <button data-lane="bot" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 H21 V3" /></svg><span>\uC544\uB7AB\uAE38</span></button>
  </div>
  <div class="cards"></div>
  <div class="stoast" hidden></div>
  <span class="tip tip2" hidden>\u2461 \uBCF4\uB0BC \uAE38\uC744 \uACE8\uB77C\uC694</span>
  <span class="tip tip3" hidden>\u2462 \uBCD1\uC0AC\uB97C \uB20C\uB7EC \uCD9C\uC804!</span>
</section>`,$r=class{constructor(e,t,n){this.side=t,this.ctx=n,this.el=document.createElement("div"),this.el.className="seat "+(t<0?"blue":"red"),this.el.innerHTML=FM,e.appendChild(this.el);let i=r=>this.el.querySelector(r);this.$=i,this.lane="mid",this.cards={};for(let r of di){let a=Ot[r],o=un[t].models[r],l=document.createElement("button");l.className="card",l.setAttribute("aria-label",`${a.name} \uCD9C\uC804, ${a.cost}\uACE8\uB4DC, ${Ot[a.beats].name}\uC5D0 \uAC15\uD568`),l.innerHTML=`<img src="assets/portraits/${o}.webp" alt=""><span class="meta"><span class="nm">${a.name}</span><span class="beat">\u25B6 ${Ot[a.beats].name}\uC5D0 \uAC15\uD568</span></span><span class="cost"><i class="coin"></i>${a.cost}</span><i class="cd"></i>`,l.addEventListener("click",()=>this.deploy(r,l)),i(".cards").appendChild(l),this.cards[r]=l}this.el.querySelectorAll(".lanes button").forEach(r=>r.addEventListener("click",()=>this.setLane(r.dataset.lane))),i(".mine").addEventListener("click",()=>{this.active()&&this.b.upgradeMine(t)&&(Oe.play("mine"),this.say(`\uAE08\uAD11 Lv${this.b.sides[t].mine}! \uBB38\uC81C\uB2F9 \uACE8\uB4DC +${Math.round(Or.bonus*100)}%`))}),i(".cannon").addEventListener("click",()=>{this.active()&&this.b.fireCannon(t)&&this.say("\uC131 \uB300\uD3EC \uBC1C\uC0AC!")}),i(".skip").addEventListener("click",()=>this.skip()),i(".keypad").addEventListener("click",r=>{let a=r.target.closest("button");a&&this.press(a.dataset.k||a.textContent)}),this.el.querySelectorAll(".seg button").forEach(r=>r.addEventListener("click",()=>{if(!this.active()||this.lock)return;let a=+r.dataset.d;a>this.diff?this.setDiff(a,`${r.textContent} \uBB38\uC81C\uB85C! \uACE8\uB4DC ${r.dataset.x}`):a<this.diff&&this.say("\uB09C\uC774\uB3C4\uB294 2\uBC88 \uD2C0\uB9AC\uBA74 \uC800\uC808\uB85C \uB0B4\uB824\uAC00\uC694")})),this.toastT=0,this.el.addEventListener("click",r=>{let a=r.target.closest("button");a&&r.detail>0&&a.blur()})}active(){return this.ctx.isPlaying()&&this.b&&this.b.state==="play"}setLanes(){this.el.querySelectorAll(".lanes button").forEach(e=>{e.hidden=!Ve.includes(e.dataset.lane),e.querySelector("span").textContent=Hs[e.dataset.lane]}),this.$(".lanes").hidden=Ve.length<2,this.el.classList.toggle("onelane",Ve.length<2),Ve.includes(this.lane)||(this.lane=Ve.includes("mid")?"mid":Ve[0])}setRules(e={}){this.roles=e.roles||di;for(let t of di){let n=this.cards[t];n.hidden=!this.roles.includes(t)}this.$(".cards").style.setProperty("--n",this.roles.length),this.$(".mine").hidden=e.mine===!1,this.$(".cannon").hidden=e.cannon===!1}start(e,t,n,i){this.b=e,this.topic=t,this.format=n,this.setLanes(),this.setRules(i),this.lock=null,this.wrongs=[],this.runRight=0,this.runWrong=0,this.log=[],this.shownGold=e.sides[this.side].gold,this.wasReady={},this.$(".chip").textContent=ft[t].name,this.$(".lock").hidden=!0,this.setLane(this.lane),this.setDiff(0);let r=!1;try{r=localStorage.getItem("classArena.tips")==="1"}catch{}this.tipStep=r?9:1,this.showTips(),this.update(!0)}showTips(){let e=this.tipStep;this.$(".tip1").hidden=e!==1,this.$(".tip2").hidden=e!==2||Ve.length<2,this.$(".tip3").hidden=e!==2}destroy(){this.el.remove()}setLane(e){this.lane=e,this.el.querySelectorAll(".lanes button").forEach(t=>{let n=t.dataset.lane===e;t.classList.toggle("on",n),t.setAttribute("aria-checked",n)}),this.ctx.view&&this.ctx.view.setLane(e,this.side)}moveLane(e){let t=Ve.indexOf(this.lane)+e;this.setLane(Ve[Math.max(0,Math.min(Ve.length-1,t))])}setDiff(e,t){this.diff=e,this.runRight=0,this.runWrong=0,this.el.querySelectorAll(".seg button").forEach(n=>{let i=+n.dataset.d===e;n.classList.toggle("on",i),n.classList.toggle("below",+n.dataset.d<e),n.setAttribute("aria-checked",i)}),t&&this.say(t),this.next()}next(){this.q=vm(this.topic,this.diff,this.format),this.input="";let e=$c(this.q),t=this.$(".qt");t.textContent=e;let n=this.q.word||/[가-힣]/.test(e);t.className="qt "+(n&&e.length>8?"sent"+(e.length>(this.q.type==="tiles"?12:20)?" long":"")+(e.length>30?" xl":""):e.length>16?"long":e.length>11?"mid":""),this.$(".qprompt").textContent=this.q.prompt||"";let i=this.q.type==="number",r=this.q.type==="tiles";this.$(".keypad").hidden=!i,this.$(".ans").hidden=!i&&!r,this.$(".ans").classList.toggle("slots",r),this.$(".qline").classList.toggle("tq",r),this.picked=[];let a=this.$(".tiles");if(a.hidden=!r,a.innerHTML="",r){a.style.setProperty("--n",Math.ceil(this.q.tiles.length/2)),a.style.setProperty("--m",this.q.tiles.length),this.q.tiles.forEach((h,u)=>{let d=document.createElement("button");d.className="tile",d.textContent=h,d.dataset.i=u,d.addEventListener("click",()=>this.tile(u)),a.appendChild(d)});let c=document.createElement("button");c.className="tback",c.textContent="\uC9C0\uC6B0\uAE30",c.setAttribute("aria-label","\uD55C \uAE00\uC790 \uC9C0\uC6B0\uAE30"),c.addEventListener("click",()=>this.press("back")),a.appendChild(c)}let o=this.$(".choices");o.hidden=i||r,o.innerHTML="",o.className="choices "+(this.q.type==="ox"?"ox":this.q.long?"long":"n"+(this.q.options||[]).length)+((this.q.word||this.q.frac)&&!this.q.long?" words":""),(this.q.type==="ox"?["O","X"]:this.q.options||[]).forEach((c,h)=>{let u=document.createElement("button");u.innerHTML=this.q.type==="ox"?`<b>${c}</b><small>${c==="O"?"\uB9DE\uC544\uC694":"\uD2C0\uB824\uC694"}</small>`:`<i>${h+1}</i><b></b>`,this.q.type!=="ox"&&(u.querySelector("b").textContent=c),u.dataset.v=c,u.addEventListener("click",()=>this.pick(c,u)),o.appendChild(u)}),this.drawAnswer()}drawAnswer(e){this.$(".ansText").textContent=this.q&&this.q.type==="tiles"?this.input+"\uFF3F".repeat(Math.max(0,[...this.q.answer.replace(/\s/g,"")].length-[...this.input].length)):this.input;let t=this.$(".ans");t.classList.remove("good","bad"),t.offsetWidth,e&&t.classList.add(e)}press(e){if(!(!this.active()||this.lock)){if(this.q.type==="tiles"){if(e!=="back"||!this.picked.length)return;let t=this.picked.pop();return this.$(`.tiles .tile[data-i="${t}"]`).disabled=!1,this.input=this.picked.map(n=>this.q.tiles[n]).join(""),this.drawAnswer()}if(e==="back")this.input=this.input.slice(0,-1);else{if(e==="ok")return this.submit();this.input.length<6&&(this.input+=e)}this.drawAnswer()}}tile(e){!this.active()||this.lock||this.picked.includes(e)||(this.picked.push(e),this.$(`.tiles .tile[data-i="${e}"]`).disabled=!0,this.input=this.picked.map(t=>this.q.tiles[t]).join(""),this.drawAnswer(),this.picked.length>=[...this.q.answer.replace(/\s/g,"")].length&&this.submit())}pick(e,t){!this.active()||this.lock||(this.input=e,t&&t.classList.add(qr(this.q,e)?"good":"bad"),this.submit())}key(e){if(this.q&&this.q.type==="tiles"){e.key==="Backspace"?this.press("back"):/^[1-9]$/.test(e.key)&&this.q.tiles[+e.key-1]&&this.tile(+e.key-1);return}if(this.q&&this.q.type!=="number"){let t=[...this.el.querySelectorAll(".choices button")],n=e.key.toUpperCase(),i=this.q.type==="ox"?n==="O"||n==="1"?0:n==="X"||n==="2"?1:-1:Number(e.key)-1;t[i]&&this.pick(t[i].dataset.v,t[i]);return}/^[0-9]$/.test(e.key)?this.press(e.key):e.key==="Backspace"?this.press("back"):e.key==="Enter"&&this.press("ok")}submit(){if(!this.input||!this.active())return;let e=this.b,t=this.side;if(qr(this.q,this.input)){let n=e.answer(t,"right",this.q.gk||this.q.type,this.diff);Oe.play("right"),Oe.play("coin"),this.goldPop("+"+n),this.log.push(1),this.flyCoins(n);let i=e.sides[t].streak;(i===3||i===10||i===20)&&this.say(`${i}\uC5F0\uC18D \uC815\uB2F5! \uACE8\uB4DC +20%`),i===5&&this.say("5\uC5F0\uC18D! \uC131 \uB300\uD3EC \uCDA9\uC804 \u2014 \uB20C\uB7EC\uC11C \uBC1C\uC0AC!"),this.drawAnswer("good"),this.runRight++,this.runWrong=0,this.tipStep===1&&e.sides[t].gold>=60&&(this.tipStep=2,this.showTips()),this.runRight>=5&&this.diff<2?this.setDiff(this.diff+1,`\uC798\uD558\uACE0 \uC788\uC5B4\uC694! \uD55C \uB2E8\uACC4 \uC5B4\uB824\uC6B4 \uBB38\uC81C(\uACE8\uB4DC ${["\xD71","\xD72","\xD74"][this.diff+1]})`):this.next()}else e.answer(t,"wrong"),Oe.play("wrong"),this.log.push(0),this.drawAnswer("bad"),this.wrongs.push({q:this.q,given:this.input,kind:"wrong"}),this.runWrong++,this.runRight=0,this.lockFor(ui.wrongLock,"wrong","\uC544\uC26C\uC6CC\uC694! \uC815\uB2F5\uC740 "+fd(this.q),()=>{this.runWrong>=2&&this.diff>0?this.setDiff(this.diff-1,"\uC870\uAE08 \uC26C\uC6B4 \uBB38\uC81C\uB85C \uBC14\uAFE8\uC5B4\uC694"):this.next()})}skip(){!this.active()||this.lock||(this.b.answer(this.side,"skip"),Oe.play("skip"),this.wrongs.push({q:this.q,given:"",kind:"skip"}),this.lockFor(ui.skipLock,"skip","\uB118\uACBC\uC5B4\uC694 \xB7 \uC815\uB2F5\uC740 "+fd(this.q),()=>this.next()))}lockFor(e,t,n,i){this.lock={t:e,total:e,then:i};let r=this.$(".lock");r.hidden=!1,r.className="lock "+t,this.$(".lockMsg").textContent=n,this.$(".lockSub").textContent=t==="wrong"?"\uC7A0\uAE50 \uC26C\uC5C8\uB2E4\uAC00 \uB2E4\uC74C \uBB38\uC81C":"\uB2E4\uC74C \uBB38\uC81C\uB97C \uC900\uBE44\uD574\uC694"}tick(e){if(this.toastT>0&&(this.toastT-=e,this.toastT<=0&&(this.$(".stoast").hidden=!0)),!!this.lock&&(this.lock.t-=e,this.$(".lockBar").style.width=Math.max(0,this.lock.t/this.lock.total*100)+"%",this.lock.t<=0)){let t=this.lock.then;this.lock=null,this.$(".lock").hidden=!0,t()}}deploy(e,t){if(!this.ctx.isPlaying()||!this.b)return;let n=this.b.canDeploy(this.side,e);if(n!=="\uB05D\uB0A8"){if(n){this.say(n==="\uACE8\uB4DC \uBD80\uC871"?"\uACE8\uB4DC\uAC00 \uBAA8\uC790\uB77C\uC694. \uBB38\uC81C\uB97C \uB354 \uD480\uC5B4\uC694!":n==="\uB300\uAE30"?"\uC544\uC9C1 \uC900\uBE44 \uC911\uC774\uC5D0\uC694":n),t.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],200);return}if(this.b.deploy(this.side,e,this.lane),this.tipStep<9){this.tipStep=9,this.showTips();try{localStorage.setItem("classArena.tips","1")}catch{}}}}say(e){let t=this.$(".stoast");t.textContent=e,t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation="",this.toastT=2.4}goldPop(e){let t=this.$(".pop");t.textContent=e,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}flyCoins(e){let t=(this.q&&(this.q.type==="number"||this.q.type==="tiles")?this.$(".ans"):this.$(".choices")).getBoundingClientRect(),n=this.$(".gold .coin").getBoundingClientRect(),i=Math.min(8,Math.max(3,Math.round(e/4)));for(let r=0;r<i;r++){let a=document.createElement("i");a.className="coin flycoin";let o=t.left+t.width*(.3+Math.random()*.4),l=t.top+t.height*.5,c=n.left+n.width/2,h=n.top+n.height/2,u=(o+c)/2+(Math.random()-.5)*80,d=Math.min(l,h)-60-Math.random()*50;a.style.left=o+"px",a.style.top=l+"px",document.body.appendChild(a);let f=a.animate([{transform:"translate(-50%, -50%) scale(.6)",offset:0},{transform:`translate(calc(${u-o}px - 50%), calc(${d-l}px - 50%)) scale(1.15)`,offset:.45},{transform:`translate(calc(${c-o}px - 50%), calc(${h-l}px - 50%)) scale(.7)`,offset:1}],{duration:520+r*45,easing:"cubic-bezier(.3,.1,.3,1)",delay:r*35});f.onfinish=()=>{a.remove();let g=this.$(".gold");g.classList.remove("bump"),g.offsetWidth,g.classList.add("bump")}}}update(){let e=this.b,t=e.sides[this.side],n=t.gold-this.shownGold;this.shownGold=Math.abs(n)<1?t.gold:this.shownGold+n*(n>0?.12:.35),this.$(".goldN").textContent=Math.round(this.shownGold);for(let c of di){let h=this.cards[c],u=Ot[c],d=!e.canDeploy(this.side,c);h.classList.toggle("poor",t.gold<u.cost),h.classList.toggle("ready",d),d&&!this.wasReady[c]&&(h.classList.remove("shine"),h.offsetWidth,h.classList.add("shine")),this.wasReady[c]=d,h.querySelector(".cd").style.setProperty("--p",(t.cooldown[c]/u.cooldown*100).toFixed(1)+"%")}let i=e.mineCost(this.side);this.$(".mineLv").textContent="Lv"+t.mine,this.$(".mineCost").textContent=i?`${i}\uACE8\uB4DC\uB85C \uAC15\uD654`:"\uCD5C\uACE0 \uB2E8\uACC4",this.$(".mine").disabled=!i||t.gold<i;let r=this.$(".pips").children;for(let c=0;c<r.length;c++)r[c].classList.toggle("on",c<t.cannon);let a=t.cannon>=ls.charge&&!!e.cannonTarget(this.side),o=this.$(".cannon");o.disabled=!a,o.classList.toggle("ready",a);let l=this.$(".streak");l.dataset.n!==String(t.streak)&&(l.dataset.n=t.streak,l.hidden=t.streak<2,l.textContent=t.streak+"\uC5F0\uC18D!",t.streak>=2&&(l.classList.remove("bump"),l.offsetWidth,l.classList.add("bump")))}};var pd={name:"\uC544\uB77C \uAD70\uB3C4",intro:[{who:"narr",text:"\uD478\uB978 \uBC14\uB2E4 \uC704 \uB2E4\uC12F \uC12C, \uC544\uB77C \uAD70\uB3C4. \uC774\uACF3 \uC0AC\uB78C\uB4E4\uC740 \uC131\uBB38\uB9C8\uB2E4 \u2018\uAE68\uCE68\uB3CC\u2019\uC744 \uC138\uC6CC \uB450\uC5C8\uC5B4\uC694."},{who:"narr",text:"\uBB38\uC81C\uB97C \uD480\uC5B4 \uAE68\uB2EC\uC74C\uC744 \uC5BB\uC73C\uBA74 \uAE68\uCE68\uB3CC\uC774 \uBC18\uC9DD\uC774\uBA70 \uACE8\uB4DC\uB97C \uB0B4\uB193\uC544\uC694. \uADF8 \uACE8\uB4DC\uB85C \uB9C8\uBC95\uC9C4\uC744 \uC5F4\uC5B4 \uBCD1\uC0AC\uB97C \uBD88\uB7EC\uC624\uC9C0\uC694."},{who:"narr",text:"\uC5B4\uB290 \uB0A0 \uBD81\uCABD \uBC14\uB2E4\uC5D0\uC11C \uC7BF\uBE5B \uC548\uAC1C\uAC00 \uBAB0\uB824\uC654\uC5B4\uC694. \uC548\uAC1C\uC5D0 \uB2FF\uC740 \uAC83\uC740 \uD558\uB098\uB458 \uAE30\uC5B5\uC744 \uC783\uC5B4\uC694."},{who:"narr",text:"\uC548\uAC1C \uC18D\uC5D0\uC11C \uAC78\uC5B4 \uB098\uC628 \uD574\uACE8 \uAD70\uB2E8\uC740 \uAE30\uC5B5\uC744 \uC783\uACE0 \uAE38\uC744 \uD5E4\uB9E4\uB294 \uC61B \uBCD1\uC0AC\uB4E4\uC774\uC5D0\uC694. \uBB34\uB108\uB728\uB9AC\uBA74 \uC548\uAC1C\uAC00 \uAC77\uD788\uACE0, \uADF8\uB4E4\uC740 \uD759\uC73C\uB85C \uB3CC\uC544\uAC00 \uD3B8\uD788 \uC26C\uC5B4\uC694."},{who:"haram",text:"\uACAC\uC2B5 \uC9C0\uD718\uAD00, \uC798 \uC654\uC5B4\uC694. \uC548\uAC1C\uB97C \uAC77\uC5B4 \uB0BC \uC0AC\uB78C\uC774 \uD544\uC694\uD574\uC694. \uBC14\uB2F7\uAC00 \uCD08\uC18C\uBD80\uD130 \uD568\uAED8 \uC9C0\uCF1C \uBD10\uC694!"}]},Yr={narr:{name:"",img:null},haram:{name:"\uD558\uB78C \uAE30\uC0AC\uB2E8\uC7A5",img:"knight",note:"\uAE30\uC0AC\uB2E8\uC744 \uC774\uB044\uB294 \uB4E0\uB4E0\uD55C \uB2E8\uC7A5"},sol:{name:"\uAD81\uC815 \uB9C8\uBC95\uC0AC \uC194",img:"mage",note:"\uAE68\uCE68\uB3CC\uC744 \uC5F0\uAD6C\uD558\uB294 \uB9C8\uBC95\uC0AC"},saebyeok:{name:"\uC815\uCC30\uBCD1 \uC0C8\uBCBD",img:"rogue",note:"\uB208\uC774 \uBC1D\uC740 \uAD81\uC218"},uru:{name:"\uB3CC\uACA9\uB300\uC7A5 \uC6B0\uB8E8",img:"barbarian",note:"\uD798\uC774 \uC138\uACE0 \uC6C3\uC74C\uC774 \uB9CE\uC740 \uB3CC\uACA9\uBCD1"},deolkeok:{name:"\uD574\uACE8 \uB300\uC7A5 \uB35C\uCEE5",img:"skel_minion",side:1},sallang:{name:"\uD574\uACE8 \uCC99\uD6C4\uB300\uC7A5 \uC0B4\uB791",img:"skel_rogue",side:1},hoesaek:{name:"\uD574\uACE8 \uC8FC\uC220\uC0AC \uD68C\uC0C9\uAE43",img:"skel_mage",side:1},cheolgol:{name:"\uD574\uACE8 \uC7A5\uAD70 \uCCA0\uACE8",img:"skel_warrior",side:1},moro:{name:"\uC548\uAC1C \uAD70\uC8FC \uBAA8\uB85C",img:"moro",side:1}},BM={top:"\uC717\uAE38",mid:"\uAC00\uC6B4\uB383\uAE38",bot:"\uC544\uB7AB\uAE38"},Sm={shield:"\uBC29\uD328\uBCD1",rusher:"\uB3CC\uACA9\uBCD1",archer:"\uAD81\uC218",mage:"\uB9C8\uBC95\uC0AC"};function kM(s,e){let t=s.charCodeAt(s.length-1)-44032,n=t>=0&&t<11172?t%28:0;if(e==="\uC73C\uB85C"||e==="\uB85C")return s+(n===0||n===8?"\uB85C":"\uC73C\uB85C");let i={\uC744:["\uC744","\uB97C"],\uB97C:["\uC744","\uB97C"],\uC774:["\uC774","\uAC00"],\uAC00:["\uC774","\uAC00"],\uC740:["\uC740","\uB294"],\uB294:["\uC740","\uB294"]}[e];return i?s+(n?i[0]:i[1]):s+e}function bm(s,e,t,n){let i=s&&s[e];if(!i)return null;let r={lane:n&&n[t.lane]||BM[t.lane]||"",role:Sm[t.role]||"",counter:Sm[t.counter]||""};return i.replace(/\{(lane|role|counter)\}(으로|로|을|를|이|가|은|는)?/g,(a,o,l)=>l?kM(r[o],l):r[o])}var On=["shield","rusher","archer","mage"],pi=s=>({answerEvery:7,accuracy:.8,diff:0,counter:.2,mineTo:1,cannonAt:4,...s}),Kr=[{id:1,name:"\uBC14\uB2F7\uAC00 \uCD08\uC18C",art:"ch1",map:"shore",pos:[43,77],teach:"\uBB38\uC81C\uB97C \uD480\uC5B4 \uACE8\uB4DC\uB97C \uBC8C\uACE0, \uBCD1\uC0AC\uB97C \uBD88\uB7EC\uC694",stages:[{id:"1-1",name:"\uCCAB \uBD88\uBE5B",map:"shore",unlock:"\uBC29\uD328\uBCD1\xB7\uAD81\uC218\uC640 \uD568\uAED8 \uCD9C\uBC1C!",goal:"\uD574\uACE8 \uAD70\uB2E8\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:["shield","archer"],mine:!1,cannon:!1},battle:{time:300,baseHp:{1:.55},towerHp:{1:.7},gold:{[-1]:80}},ai:pi({answerEvery:10,accuracy:.75,counter:0,roles:["rusher","shield"],cannon:!1}),intro:[{who:"haram",text:"\uC0C8\uBCBD \uC548\uAC1C\uAC00 \uBAB0\uB824\uC640\uC694. \uC800 \uB05D \uD574\uACE8 \uBCF8\uC131\uC5D0\uC11C \uD574\uACE8 \uBCD1\uC0AC\uB4E4\uC774 \uAC78\uC5B4\uC624\uACE0 \uC788\uC5B4\uC694."},{who:"sol",text:"\uC544\uB798 \uBB38\uC81C\uB97C \uB9DE\uD788\uBA74 \uAE68\uCE68\uB3CC\uC774 \uACE8\uB4DC\uB97C \uB0B4\uB193\uC544\uC694. \uACE8\uB4DC\uAC00 \uBAA8\uC774\uBA74 \uBCD1\uC0AC \uCE74\uB4DC\uB97C \uB20C\uB7EC \uBD88\uB7EC\uC694."},{who:"saebyeok",text:"\uB3C4\uB07C\uB97C \uB4E0 \uD574\uACE8\uC774 \uB2EC\uB824\uC640\uC694! \uBC29\uD328\uBCD1\uC774 \uB9C9\uACE0, \uAD81\uC218\uAC00 \uB4A4\uC5D0\uC11C \uC3D8\uBA74 \uB3FC\uC694."}],script:[{at:25,talk:["sol","\uBC29\uD328\uBCD1\uC740 \uB2EC\uB824\uB4DC\uB294 \uB3CC\uACA9\uBCD1\uC5D0\uAC8C \uAC15\uD574\uC694. \uCE74\uB4DC \uC544\uB798 \u2018\u25B6 \uB3CC\uACA9\uBCD1\uC5D0 \uAC15\uD568\u2019\uC744 \uBCF4\uC138\uC694."]},{at:90,talk:["haram","\uC801 \uD0D1\uC744 \uBB34\uB108\uB728\uB824\uC57C \uBCF8\uC131\uC5D0 \uB2FF\uC744 \uC218 \uC788\uC5B4\uC694. \uC870\uAE08\uB9CC \uB354!"]}],win:[{who:"haram",text:"\uD574\uB0C8\uC5B4\uC694! \uCCAB \uBD88\uBE5B\uC774 \uBC14\uB2F7\uAC00\uB97C \uBC1D\uD614\uC5B4\uC694."},{who:"saebyeok",text:"\uADF8\uB7F0\uB370 \uC548\uAC1C \uC18D\uC5D0 \uB354 \uD070 \uD574\uACE8\uC774 \uBCF4\uC600\uC5B4\uC694. \uD22C\uAD6C\uC5D0 \uAE43\uD138\uC744 \uAF42\uACE0 \uC788\uB358\uB370\uC694?"}],hint:"\uACE8\uB4DC\uAC00 \uBAA8\uC774\uBA74 \uBC14\uB85C\uBC14\uB85C \uBCD1\uC0AC\uB97C \uBCF4\uB0B4\uC694. \uB3CC\uACA9\uBCD1(\uB3C4\uB07C \uD574\uACE8)\uC740 \uBC29\uD328\uBCD1\uC73C\uB85C \uB9C9\uC544\uC694."},{id:"1-2",name:"\uD574\uACE8 \uB300\uC7A5 \uB35C\uCEE5",map:"shore",boss:"deolkeok",goal:"\uB35C\uCEE5 \uB300\uC7A5\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:["shield","archer"],mine:!1,cannon:!1},battle:{time:330,baseHp:{1:.62},towerHp:{1:.85},gold:{[-1]:100}},ai:pi({answerEvery:10.5,accuracy:.75,counter:.1,roles:["rusher","shield","archer"],cannon:!1}),intro:[{who:"deolkeok",text:"\uB35C\uCEE5\uB35C\uCEE5! \uC5EC\uAE30\uAC00 \uC5B4\uB514\uB354\uB77C\u2026 \uC544\uBB34\uD2BC \uC774 \uCD08\uC18C\uB294 \uB0B4\uAC00 \uCC28\uC9C0\uD560 \uAC70\uC608\uC694!"},{who:"uru",text:"\uD558\uD558, \uBF08\uB9CC \uB0A8\uC740 \uB300\uC7A5\uC774\uB124\uC694. \uC9C0\uD718\uAD00, \uBB38\uC81C\uB97C \uCC99\uCC99 \uD480\uC5B4 \uC8FC\uBA74 \uC81C\uAC00 \uC55E\uC7A5\uC124\uAC8C\uC694!"},{who:"sol",text:"\uB35C\uCEE5\uC740 \uB54C\uB54C\uB85C \uD574\uACE8 \uBB34\uB9AC\uB97C \uD55C\uAEBC\uBC88\uC5D0 \uBCF4\uB0B4\uC694. \uACE8\uB4DC\uB97C \uC870\uAE08 \uB0A8\uACA8 \uB450\uBA74 \uB9C9\uAE30 \uC26C\uC6CC\uC694."}],script:[{at:90,wave:{roles:["rusher","rusher"],lane:"auto"},talk:["deolkeok","\uB35C\uCEE5! \uB2E4 \uAC19\uC774 \uB3CC\uACA9\uC774\uC5D0\uC694!"]},{at:190,wave:{roles:["rusher","shield"],lane:"auto"},talk:["deolkeok","\uC774\uBC88\uC5D4 \uBC29\uD328\uB3C4 \uC654\uC5B4\uC694! \uB35C\uCEE5\uB35C\uCEE5!"]},{at:270,wave:{roles:["rusher","rusher","rusher"],lane:"auto"},talk:["saebyeok","\uB9C8\uC9C0\uB9C9 \uBB34\uB9AC\uC608\uC694! \uBC29\uD328\uBCD1\uC73C\uB85C \uB9C9\uC544\uC694!"]}],win:[{who:"deolkeok",text:"\uB35C\uCEE5\u2026 \uBA38\uB9AC\uAC00 \uB9D1\uC544\uC9C0\uB124\uC694. \uB098\uB294\u2026 \uBC14\uB2F7\uAC00\uB97C \uC9C0\uD0A4\uB358 \uBCD1\uC0AC\uC600\uC5B4\uC694."},{who:"haram",text:"\uC548\uAC1C\uAC00 \uAC77\uD788\uB2C8 \uAE30\uC5B5\uC774 \uB3CC\uC544\uC624\uB294\uAD70\uC694. \uD3B8\uD788 \uC26C\uC5B4\uC694."},{who:"sol",text:"\uC548\uAC1C\uB294 \uBD81\uCABD \uC232\uC73C\uB85C \uC774\uC5B4\uC838 \uC788\uC5B4\uC694. \uB2E4\uC74C\uC740 \uB450 \uAC08\uB798 \uC232\uAE38\uC774\uC5D0\uC694."}],hint:"\uBB34\uB9AC\uAC00 \uC624\uAE30 \uC804\uC5D0 \uBCD1\uC0AC\uB97C \uBA87 \uBA85 \uBBF8\uB9AC \uC138\uC6CC \uB450\uBA74 \uB9C9\uAE30 \uC26C\uC6CC\uC694."}]},{id:2,name:"\uB450 \uAC08\uB798 \uC232\uAE38",art:"ch2",map:"twin",pos:[29,47],teach:"\uAE38\uC744 \uACE8\uB77C \uBCF4\uB0B4\uC694 \xB7 \uB3CC\uACA9\uBCD1 \uD569\uB958",stages:[{id:"2-1",name:"\uAC08\uB9BC\uAE38",map:"twin",unlock:"\uC0C8 \uBCD1\uC0AC: \uB3CC\uACA9\uBCD1 \uD569\uB958! \xB7 \uAE38\uC744 \uACE8\uB77C \uBCF4\uB0B4\uC694",goal:"\uC801 \uD0D1 2\uAC1C\uB97C \uBB34\uB108\uB728\uB824\uC694",rules:{roles:["shield","rusher","archer"],mine:!1,cannon:!1},battle:{time:330,objective:{type:"towers",n:2},gold:{[-1]:80}},ai:pi({answerEvery:7.8,accuracy:.78,counter:.25,roles:["shield","archer","rusher"],cannon:!1}),intro:[{who:"uru",text:"\uB4DC\uB514\uC5B4 \uC81C \uCC28\uB840\uC608\uC694! \uB3CC\uACA9\uBCD1\uC740 \uBE68\uB77C\uC11C \uAD81\uC218\uB97C \uB36E\uCE58\uB294 \uB370 \uCD5C\uACE0\uC608\uC694."},{who:"saebyeok",text:"\uC232\uAE38\uC774 \uD638\uC218\uB97C \uB07C\uACE0 \uB458\uB85C \uAC08\uB77C\uC838\uC694. \u2018\uBCF4\uB0BC \uAE38\u2019 \uB2E8\uCD94\uB85C \uC717\uC232\uAE38\uACFC \uC544\uB7AB\uC232\uAE38\uC744 \uACE8\uB77C\uC694."},{who:"haram",text:"\uC774\uBC88\uC5D0\uB294 \uD574\uACE8 \uD0D1 \uB450 \uAC1C\uB9CC \uBB34\uB108\uB728\uB9AC\uBA74 \uB3FC\uC694. \uD55C\uCABD\uC774 \uB9C9\uD788\uBA74 \uB2E4\uB978 \uAE38\uC744 \uB178\uB824\uC694."}],script:[{at:40,talk:["saebyeok","\uD574\uACE8 \uAD81\uC218(\uD65C \uB4E0 \uD574\uACE8)\uAC00 \uBCF4\uC774\uBA74 \uB3CC\uACA9\uBCD1\uC744 \uBCF4\uB0B4\uC694!"]},{at:150,talk:["haram","\uC801\uC774 \uBAB0\uB9B0 \uAE38\uC740 \uD53C\uD558\uACE0, \uBE48 \uAE38\uB85C \uB3CC\uC544\uAC00\uB294 \uAC83\uB3C4 \uC791\uC804\uC774\uC5D0\uC694."]}],win:[{who:"uru",text:"\uB450 \uD0D1 \uBAA8\uB450 \uCFF5! \uC232\uC774 \uC870\uC6A9\uD574\uC84C\uC5B4\uC694."},{who:"saebyeok",text:"\uC27F, \uB098\uBB34 \uC704\uC5D0\uC11C \uB204\uAC00 \uC6B0\uB9AC\uB97C \uC9C0\uCF1C\uBCF4\uACE0 \uC788\uC5C8\uC5B4\uC694. \uC544\uC8FC \uB0A0\uB835\uD55C \uD574\uACE8\uC774\uC5C8\uC5B4\uC694."}],hint:"\uD55C \uAE38\uC5D0 \uC801\uC774 \uBAB0\uB824 \uC788\uC73C\uBA74 \uB2E4\uB978 \uAE38 \uD0D1\uC744 \uB178\uB824\uC694."},{id:"2-2",name:"\uCC99\uD6C4\uB300\uC7A5 \uC0B4\uB791",map:"twin",boss:"sallang",goal:"\uC0B4\uB791\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:["shield","rusher","archer"],mine:!1,cannon:!1},battle:{time:360,baseHp:{1:.9}},ai:pi({answerEvery:7,accuracy:.8,counter:.4,roles:["shield","archer","rusher"],habits:["lane"],cannon:!1}),lines:{lane:"{lane}\uB85C\uB9CC \uC624\uB124\uC694? \uADF8\uCABD\uC740 \uB9C9\uACE0, \uC800\uB294 \uBC18\uB300\uCABD\uC73C\uB85C \uC0B4\uB791\uC0B4\uB791 \uB3CC\uC544\uAC08\uAC8C\uC694!"},intro:[{who:"sallang",text:"\uC0B4\uB791\uC0B4\uB791~ \uC800\uB294 \uB2E4 \uBCF4\uACE0 \uC788\uC5B4\uC694. \uC9C0\uD718\uAD00\uC774 \uC5B4\uB290 \uAE38\uB85C \uBCF4\uB0B4\uB294\uC9C0\uC694!"},{who:"sol",text:"\uC0B4\uB791\uC740 \uD55C \uAE38\uB9CC \uC4F0\uB294 \uBC84\uB987\uC744 \uAE08\uBC29 \uC54C\uC544\uCC44\uC694. \uBB34\uC5C7\uC744 \uC77D\uC5C8\uB294\uC9C0 \uB9D0\uD574 \uC8FC\uB2C8 \uC798 \uB4E4\uC5B4 \uBD10\uC694."},{who:"haram",text:"\uC77D\uD614\uB2E4 \uC2F6\uC73C\uBA74 \uAE38\uC744 \uBC14\uAFD4\uC694. \uB450 \uAE38\uC744 \uACE0\uB974\uAC8C \uC4F0\uBA74 \uC0B4\uB791\uB3C4 \uC5B4\uCA54 \uC904 \uBAB0\uB77C \uD560 \uAC70\uC608\uC694."}],script:[{at:200,wave:{roles:["rusher","archer","rusher"],lane:"auto"},talk:["sallang","\uAE5C\uC9DD \uACF5\uACA9\uC774\uC5D0\uC694~"]}],win:[{who:"sallang",text:"\uC5B4\uB77C\u2026 \uB0B4\uAC00 \uC65C \uC228\uC5B4 \uB2E4\uB154\uB354\uB77C. \uB9DE\uC544\uC694, \uB098\uB294 \uC232\uC744 \uC9C0\uD0A4\uB358 \uC815\uCC30\uBCD1\uC774\uC5C8\uC5B4\uC694."},{who:"saebyeok",text:"\uAC19\uC740 \uC815\uCC30\uBCD1\uC774\uC5C8\uAD70\uC694. \uC774\uC81C \uD3B8\uD788 \uC26C\uC5B4\uC694."},{who:"sol",text:"\uC548\uAC1C\uB97C \uBD80\uB974\uB294 \uD798\uC774 \uAC15 \uAC74\uB108\uC5D0\uC11C \uB290\uAEF4\uC838\uC694. \uB2E4\uB9AC\uB97C \uAC74\uB108\uC57C \uD574\uC694."}],hint:"\uC0B4\uB791\uC774 \uAE38\uC744 \uC77D\uC73C\uBA74, \uB9C9\uD78C \uAE38 \uB300\uC2E0 \uB2E4\uB978 \uAE38\uB85C \uBCF4\uB0B4\uC694."}]},{id:3,name:"\uAC15 \uAC74\uB108 \uB2E4\uB9AC",art:"ch3",map:"bridge",pos:[70,55],teach:"\uC0C1\uC131 \uACE0\uB9AC \uC644\uC131 \xB7 \uB9C8\uBC95\uC0AC \uD569\uB958",stages:[{id:"3-1",name:"\uB2E4\uB9AC\uB97C \uC9C0\uCF1C\uB77C",map:"bridge",unlock:"\uC0C8 \uBCD1\uC0AC: \uB9C8\uBC95\uC0AC \uD569\uB958! \xB7 \uC0C1\uC131 \uACE0\uB9AC \uC644\uC131",goal:"4\uBD84 \uB3D9\uC548 \uBCF8\uC131\uC744 \uC9C0\uCF1C\uC694",rules:{roles:On,mine:!1,cannon:!1},battle:{time:240,objective:{type:"survive"},gold:{[-1]:140,1:80},baseHp:{[-1]:1.2}},ai:pi({answerEvery:7,accuracy:.8,counter:.3,roles:On,cannon:!1}),intro:[{who:"sol",text:"\uB4DC\uB514\uC5B4 \uC800\uB3C4 \uC2F8\uC6B8\uAC8C\uC694. \uB9C8\uBC95\uC0AC\uB294 \uBC29\uD328\uBCD1\uC5D0\uAC8C \uAC15\uD558\uACE0, \uD55C \uBC88\uC5D0 \uC5EC\uB7EC \uD574\uACE8\uC744 \uB9DE\uD600\uC694."},{who:"haram",text:"\uBC29\uD328\uBCD1 \u2192 \uB3CC\uACA9\uBCD1 \u2192 \uAD81\uC218 \u2192 \uB9C8\uBC95\uC0AC \u2192 \uBC29\uD328\uBCD1. \uD654\uC0B4\uD45C \uCABD\uC5D0\uAC8C \uAC15\uD55C \uC0C1\uC131 \uACE0\uB9AC\uB97C \uAE30\uC5B5\uD574\uC694."},{who:"saebyeok",text:"\uB2E4\uB9AC \uC14B\uC73C\uB85C \uD574\uACE8\uC774 \uD55C\uAEBC\uBC88\uC5D0 \uAC74\uB108\uC640\uC694! \uC774\uBC88\uC5D4 \uBCF8\uC131\uC744 4\uBD84 \uB3D9\uC548 \uC9C0\uD0A4\uBA74 \uC774\uACA8\uC694."}],script:[{at:60,wave:{roles:["shield","shield"],lane:"auto"},talk:["saebyeok","\uBC29\uD328 \uD574\uACE8 \uBB34\uB9AC\uC608\uC694! \uB9C8\uBC95\uC0AC\uB85C \uB179\uC5EC\uC694!"]},{at:130,wave:{roles:["archer","archer"],lane:"auto"},talk:["uru","\uAD81\uC218 \uD574\uACE8\uC774\uC5D0\uC694. \uB3CC\uACA9\uBCD1, \uAC00\uC790!"]},{at:190,wave:{roles:["mage","mage"],lane:"auto"},talk:["sol","\uD574\uACE8 \uB9C8\uBC95\uC0AC\uB294 \uAD81\uC218\uAC00 \uC798 \uC7A1\uC544\uC694!"]}],win:[{who:"haram",text:"\uB2E4\uB9AC\uB97C \uC9C0\uCF1C \uB0C8\uC5B4\uC694! \uC0C1\uC131\uC744 \uC815\uB9D0 \uC798 \uC37C\uC5B4\uC694."},{who:"sol",text:"\uAC15 \uAC74\uB108\uD3B8\uC5D0\uC11C \uCC28\uAC00\uC6B4 \uC8FC\uBB38 \uC18C\uB9AC\uAC00 \uB4E4\uB824\uC694. \uD574\uACE8 \uC8FC\uC220\uC0AC\uAC00 \uC788\uB294 \uAC83 \uAC19\uC544\uC694."}],hint:"\uC624\uB294 \uD574\uACE8\uC744 \uBCF4\uACE0 \uC0C1\uC131\uC73C\uB85C \uB9DE\uC11C\uC694. \uBC29\uD328 \uD574\uACE8\uC5D0\uB294 \uB9C8\uBC95\uC0AC, \uAD81\uC218 \uD574\uACE8\uC5D0\uB294 \uB3CC\uACA9\uBCD1!"},{id:"3-2",name:"\uC8FC\uC220\uC0AC \uD68C\uC0C9\uAE43",map:"bridge",boss:"hoesaek",goal:"\uD68C\uC0C9\uAE43\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:On,mine:!1,cannon:!1},battle:{time:360},ai:pi({answerEvery:6.4,accuracy:.82,counter:.45,roles:On,habits:["role"],cannon:!1}),lines:{role:"{role}\uB9CC \uC794\uB729 \uBCF4\uB0B4\uB124\uC694? \uADF8\uB7FC \uC800\uB294 {counter}\uC744 \uBD88\uB7EC\uC62C\uAC8C\uC694. \uD6C4\uD6C4."},intro:[{who:"hoesaek",text:"\uD6C4\uD6C4, \uB2E4\uB9AC\uB97C \uAC74\uB108\uC654\uAD70\uC694. \uD558\uC9C0\uB9CC \uAC19\uC740 \uBCD1\uC0AC\uB9CC \uACE0\uC9D1\uD558\uB294 \uC9C0\uD718\uAD00\uC740 \uC774\uAE38 \uC218 \uC5C6\uC5B4\uC694."},{who:"sol",text:"\uD68C\uC0C9\uAE43\uC740 \uC6B0\uB9AC\uAC00 \uAC00\uC7A5 \uB9CE\uC774 \uBCF4\uB0B4\uB294 \uBCD1\uC0AC\uC758 \uCC9C\uC801\uC744 \uBD88\uB7EC\uC694. \uACE8\uACE0\uB8E8 \uC11E\uC5B4 \uBCF4\uB0B4\uC694."}],script:[{at:150,wave:{roles:["mage","shield","archer"],lane:"auto"},talk:["hoesaek","\uC548\uAC1C\uC57C, \uBCD1\uC0AC\uB4E4\uC744 \uAE68\uC6CC\uB77C!"]}],win:[{who:"hoesaek",text:"\uC8FC\uBB38\uC774\u2026 \uC0DD\uAC01\uB098\uC9C0 \uC54A\uC544\uC694. \uC544, \uB098\uB294 \uC544\uC774\uB4E4\uC5D0\uAC8C \uAE00\uC744 \uAC00\uB974\uCE58\uB358 \uC120\uC0DD\uC774\uC5C8\uC5B4\uC694."},{who:"sol",text:"\uAE30\uC5B5\uC744 \uB418\uCC3E\uC558\uAD70\uC694. \uADF8 \uC9C0\uC2DD\uC740 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uC544\uC694."},{who:"haram",text:"\uC548\uAC1C\uC758 \uAE38\uC740 \uC0B0 \uC704 \uC694\uC0C8\uB85C \uC774\uC5B4\uC838\uC694. \uC800\uAE30\uB294 \uD574\uACE8 \uC7A5\uAD70\uC774 \uC9C0\uD0A4\uACE0 \uC788\uB300\uC694."}],hint:"\uD55C \uC885\uB958\uB9CC \uBCF4\uB0B4\uBA74 \uCC9C\uC801\uC774 \uC640\uC694. \uC0C1\uC131 \uACE0\uB9AC\uB97C \uB3CC\uBA70 \uC11E\uC5B4 \uBCF4\uB0B4\uC694."}]},{id:4,name:"\uC0B0\uAE38 \uC694\uC0C8",art:"ch4",map:"pass",pos:[67,22],teach:"\uAE08\uAD11\xB7\uC131 \uB300\uD3EC\uB85C \uC791\uC804 \uC138\uC6B0\uAE30",stages:[{id:"4-1",name:"\uAE08\uAD11\uC744 \uC9C0\uCF1C\uB77C",map:"pass",unlock:"\uC0C8 \uAE30\uB2A5: \uAE08\uAD11 \uAC15\uD654 \xB7 \uC131 \uB300\uD3EC",goal:"\uD574\uACE8 \uAD70\uB2E8\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:On},battle:{time:360,towerHp:{1:1.1}},ai:pi({answerEvery:6.2,accuracy:.82,counter:.5,mineTo:2,roles:On}),intro:[{who:"uru",text:"\uC0B0\uAE38\uC774 \uAF2C\uBD88\uAF2C\uBD88\uD574\uC694! \uAC00\uC6B4\uB370 \uC9C0\uB984\uAE38\uC740 \uC9E7\uC9C0\uB9CC, \uD574\uACE8\uB3C4 \uAC70\uAE30\uB85C \uB9CE\uC774 \uC640\uC694."},{who:"haram",text:"\uC774\uC81C \uAE08\uAD11\uACFC \uC131 \uB300\uD3EC\uB97C \uC368\uC694. \uAE08\uAD11\uC744 \uAC15\uD654\uD558\uBA74 \uBB38\uC81C\uB9C8\uB2E4 \uACE8\uB4DC\uB97C \uB354 \uBC1B\uC544\uC694."},{who:"sol",text:"\uBB38\uC81C\uB97C 5\uBC88 \uC5F0\uC18D \uB9DE\uD788\uBA74 \uC131 \uB300\uD3EC\uAC00 \uCDA9\uC804\uB3FC\uC694. \uD574\uACE8\uC774 \uBAB0\uB838\uC744 \uB54C \uC3D8\uBA74 \uC88B\uC544\uC694."}],script:[{at:30,talk:["haram","\uAE08\uAD11\uC740 \uC77C\uCC0D \uAC15\uD654\uD560\uC218\uB85D \uC774\uB4DD\uC774\uC5D0\uC694. \uB300\uC2E0 \uADF8\uB3D9\uC548 \uB9C9\uC744 \uBCD1\uC0AC\uB3C4 \uB0A8\uACA8\uC694."]},{at:180,wave:{roles:["rusher","rusher","shield","mage"],lane:"mid"},talk:["saebyeok","\uC9C0\uB984\uAE38\uB85C \uBB34\uB9AC\uAC00 \uB0B4\uB824\uC640\uC694! \uB300\uD3EC\uB97C \uC900\uBE44\uD574\uC694!"]}],win:[{who:"uru",text:"\uC694\uC0C8 \uC55E\uAE4C\uC9C0 \uC654\uC5B4\uC694! \uC774\uC81C \uC7A5\uAD70\uB9CC \uB0A8\uC558\uC5B4\uC694."},{who:"saebyeok",text:"\uC7A5\uAD70\uC740 \uC6B0\uB9AC\uAC00 \uACE8\uB4DC\uB97C \uBAA8\uC73C\uB294 \uAC78 \uC2EB\uC5B4\uD55C\uB300\uC694. \uBAA8\uC544 \uB450\uBA74 \uBC14\uB85C \uCCD0\uB4E4\uC5B4\uC628\uB300\uC694."}],hint:"\uAE08\uAD11\uC740 \uC801\uC774 \uC5C6\uC744 \uB54C \uAC15\uD654\uD558\uACE0, \uD574\uACE8\uC774 \uBAB0\uB9AC\uBA74 \uC131 \uB300\uD3EC\uB97C \uC3F4\uC694."},{id:"4-2",name:"\uD574\uACE8 \uC7A5\uAD70 \uCCA0\uACE8",map:"pass",boss:"cheolgol",goal:"\uCCA0\uACE8 \uC7A5\uAD70\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:On},battle:{time:360,baseHp:{1:1.1},towerHp:{1:1.15}},ai:pi({answerEvery:5.8,accuracy:.84,counter:.55,mineTo:2,cannonAt:3,roles:On,habits:["hoard","cannon","lane"]}),lines:{hoard:"\uACE8\uB4DC\uB97C \uC313\uC544 \uB450\uAE30\uB9CC \uD558\uB124\uC694? \uADF8\uB7FC \uC9C0\uAE08 {lane}\uB85C \uBC00\uACE0 \uB4E4\uC5B4\uAC00\uC694!",cannon:"\uB300\uD3EC\uB97C \uC3D8\uB294\uAD70\uC694. \uADF8\uB7FC \uBCD1\uC0AC\uB97C \uD769\uC5B4\uC11C \uBCF4\uB0BC\uAC8C\uC694!",lane:"{lane}\uB9CC \uC9C0\uD0A4\uBA74 \uB2E4\uB978 \uAE38\uC774 \uBE44\uC5B4\uC694. \uCCA0\uCEE5!"},intro:[{who:"cheolgol",text:"\uCCA0\uCEE5. \uC5EC\uAE30\uB294 \uB0B4 \uC694\uC0C8\uC608\uC694. \uB290\uAE0B\uD558\uAC8C \uACE8\uB4DC\uB97C \uBAA8\uC73C\uB294 \uC9C0\uD718\uAD00\uC740 \uD55C \uBC88\uC5D0 \uBB34\uB108\uB728\uB824\uC694."},{who:"haram",text:"\uCCA0\uACE8\uC740 \uC6B0\uB9AC\uAC00 \uACE8\uB4DC\uB97C \uC313\uC544 \uB450\uBA74 \uBC14\uB85C \uCCD0\uB4E4\uC5B4\uC640\uC694. \uBAA8\uC740 \uACE8\uB4DC\uB294 \uC81C\uB54C \uC368\uC694."},{who:"sol",text:"\uB300\uD3EC\uB97C \uC3D8\uBA74 \uBCD1\uC0AC\uB97C \uD769\uC5B4 \uBCF4\uB0B4\uACE0, \uD55C \uAE38\uB9CC \uC4F0\uBA74 \uB2E4\uB978 \uAE38\uC744 \uB178\uB9B0\uB300\uC694. \uB9D0\uC744 \uC798 \uB4E4\uC5B4 \uBD10\uC694."}],script:[{at:220,giant:"auto",talk:["cheolgol","\uC548\uAC1C \uAC70\uC778\uC544, \uB098\uC640\uB77C! \uCCA0\uCEE5!"]}],win:[{who:"cheolgol",text:"\uCCA0\uCEE5\u2026 \uB098\uB294 \uC774 \uC694\uC0C8\uC758 \uBB38\uC9C0\uAE30\uC600\uC5B4\uC694. \uC548\uAC1C\uAC00\u2026 \uBAA8\uB4E0 \uAC78 \uC78A\uAC8C \uD588\uC5B4\uC694."},{who:"haram",text:"\uC774\uC81C \uC548\uAC1C \uC131\uCC44\uB9CC \uB0A8\uC558\uC5B4\uC694. \uC548\uAC1C \uAD70\uC8FC \uBAA8\uB85C\uAC00 \uAC70\uAE30 \uC788\uC5B4\uC694."},{who:"sol",text:"\uBAA8\uB85C\u2026 \uC61B \uC655\uB9BD \uB3C4\uC11C\uAD00\uC758 \uC0AC\uC11C \uC774\uB984\uACFC \uAC19\uC544\uC694. \uC124\uB9C8\u2026"}],hint:"\uACE8\uB4DC\uB97C 200 \uB118\uAC8C \uC313\uC9C0 \uB9D0\uACE0 \uBC14\uB85C\uBC14\uB85C \uC368\uC694. \uAC70\uC778\uC740 \uC5EC\uB7EC \uBCD1\uC0AC\uB85C \uD568\uAED8 \uB9C9\uC544\uC694."}]},{id:5,name:"\uC548\uAC1C \uC131\uCC44",art:"ch5",map:"citadel",pos:[31,9],teach:"\uBAA8\uB4E0 \uAC83\uC744 \uAC78\uACE0 \uB9C8\uC9C0\uB9C9 \uC2F8\uC6C0",stages:[{id:"5-1",name:"\uC548\uAC1C \uC18D\uC73C\uB85C",map:"citadel",goal:"\uC801 \uD0D1 3\uAC1C\uB97C \uBAA8\uB450 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:On},battle:{time:360,objective:{type:"towers",n:3},towerHp:{1:1.1}},ai:pi({answerEvery:5.8,accuracy:.84,counter:.6,mineTo:2,cannonAt:3,roles:On}),intro:[{who:"saebyeok",text:"\uC548\uAC1C\uAC00 \uB108\uBB34 \uC9D9\uC5B4\uC694. \uC131\uBCBD \uC55E\uC5D0 \uD0D1\uC774 \uC14B \uC788\uC5B4\uC694."},{who:"haram",text:"\uD0D1 \uC14B\uC744 \uBAA8\uB450 \uBB34\uB108\uB728\uB9AC\uBA74 \uC131\uBB38\uC774 \uC5F4\uB824\uC694. \uC9C0\uAE08\uAE4C\uC9C0 \uBC30\uC6B4 \uAC78 \uBAA8\uB450 \uC368\uC694."}],script:[{at:120,giant:"auto",talk:["moro","\uB204\uAD6C\uB4E0 \uC548\uAC1C \uC18D\uC5D0\uC11C\uB294 \uC78A\uAC8C \uB3FC\uC694. \uAC70\uC778\uC544, \uB9C9\uC544\uB77C."]},{at:260,giant:"auto",talk:["saebyeok","\uAC70\uC778\uC774 \uB610 \uC640\uC694! \uC5EC\uB7FF\uC774 \uD568\uAED8 \uB9C9\uC544\uC694!"]}],win:[{who:"uru",text:"\uD0D1\uC774 \uB2E4 \uBB34\uB108\uC84C\uC5B4\uC694! \uC131\uBB38\uC774 \uC5F4\uB824\uC694!"},{who:"moro",text:"\uC5EC\uAE30\uAE4C\uC9C0 \uC624\uB2E4\uB2C8\u2026 \uC65C \uADF8\uB807\uAC8C \uAE30\uC5B5\uD558\uB824\uACE0 \uC560\uC4F0\uB098\uC694? \uC78A\uC73C\uBA74 \uC544\uD504\uC9C0\uB3C4 \uC54A\uC740\uB370\uC694."}],hint:"\uAC70\uC778\uC740 \uCCB4\uB825\uC774 \uC544\uC8FC \uB9CE\uC544\uC694. \uD0D1 \uADFC\uCC98\uC5D0\uC11C \uC5EC\uB7EC \uBCD1\uC0AC\uB85C \uD568\uAED8 \uB9C9\uC544\uC694."},{id:"5-2",name:"\uC548\uAC1C \uAD70\uC8FC \uBAA8\uB85C",map:"citadel",boss:"moro",final:!0,goal:"\uBAA8\uB85C\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB824\uC694",rules:{roles:On},battle:{time:420,baseHp:{1:1.25},towerHp:{1:1.15}},ai:pi({answerEvery:5.4,accuracy:.85,counter:.65,mineTo:3,cannonAt:3,roles:On,habits:["lane","role","hoard","cannon"]}),lines:{lane:"{lane}\u2026 \uADF8 \uAE38\uB9CC \uAE30\uC5B5\uD558\uB294\uAD70\uC694. \uADF8 \uAE38\uC740 \uC548\uAC1C\uB85C \uB36E\uC744\uAC8C\uC694.",role:"{role}\uC5D0\uB9CC \uAE30\uB300\uB294\uAD70\uC694. {counter}\uC774 \uADF8 \uAE30\uC5B5\uC744 \uC9C0\uC6B8 \uAC70\uC608\uC694.",hoard:"\uBAA8\uC544 \uB454 \uACE8\uB4DC\uB3C4 \uC548\uAC1C \uC18D\uC5D0\uC120 \uC78A\uD788\uAE30 \uB9C8\uB828\uC774\uC5D0\uC694. {lane}\uB85C \uAC00\uB77C!",cannon:"\uB300\uD3EC \uC18C\uB9AC\u2026 \uD769\uC5B4\uC838\uB77C, \uB0B4 \uBCD1\uC0AC\uB4E4\uC544."},intro:[{who:"moro",text:"\uB098\uB294 \uB3C4\uC11C\uAD00\uC5D0\uC11C \uC218\uB9CE\uC740 \uC774\uC57C\uAE30\uB97C \uC9C0\uCF30\uC5B4\uC694. \uC2AC\uD508 \uC774\uC57C\uAE30\uB3C4\uC694. \uADF8\uB798\uC11C \uBAA8\uB450 \uC78A\uAC8C \uD558\uACE0 \uC2F6\uC5C8\uC5B4\uC694."},{who:"sol",text:"\uBAA8\uB85C, \uC78A\uC73C\uBA74 \uC2AC\uD514\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0\uB9CC \uBC30\uC6B4 \uAC83\uB3C4 \uC0AC\uB77C\uC838\uC694. \uC9C0\uD718\uAD00\uC774 \uBB38\uC81C\uB97C \uD480 \uB54C\uB9C8\uB2E4 \uBE5B\uB098\uB294 \uAC78 \uBD10\uC694."},{who:"haram",text:"\uBAA8\uB85C\uB294 \uC9C0\uAE08\uAE4C\uC9C0\uC758 \uB300\uC7A5\uB4E4\uC774 \uC4F0\uB358 \uC218\uB97C \uBAA8\uB450 \uC368\uC694. \uAE38\uB3C4, \uBCD1\uC0AC\uB3C4 \uACE8\uACE0\uB8E8, \uACE8\uB4DC\uB294 \uC81C\uB54C!"}],script:[{at:90,giant:"auto",talk:["moro","\uC548\uAC1C \uAC70\uC778\uC544, \uAE30\uC5B5\uC744 \uB36E\uC5B4\uB77C."]},{at:200,giant:"auto"},{at:310,giant:"auto",talk:["moro","\uC65C\u2026 \uC65C \uD3EC\uAE30\uD558\uC9C0 \uC54A\uB098\uC694?"]}],win:[{who:"moro",text:"\uBE5B\uC774\u2026 \uB530\uB73B\uD558\uB124\uC694. \uC78A\uACE0 \uC2F6\uB358 \uC774\uC57C\uAE30 \uC18D\uC5D0\uB3C4 \uC18C\uC911\uD55C \uAC8C \uC788\uC5C8\uAD70\uC694."},{who:"moro",text:"\uC548\uAC1C\uB97C \uAC70\uB458\uAC8C\uC694. \uD574\uACE8\uC774 \uB41C \uBCD1\uC0AC\uB4E4\uB3C4 \uC774\uC81C \uD3B8\uD788 \uC26C\uAC8C \uD560\uAC8C\uC694."},{who:"sol",text:"\uBAA8\uB85C, \uB3C4\uC11C\uAD00\uC73C\uB85C \uB3CC\uC544\uC640\uC694. \uC774\uBC88\uC5D4 \uD568\uAED8 \uAE30\uC5B5\uD574\uC694."},{who:"haram",text:"\uC9C0\uD718\uAD00, \uACE0\uB9C8\uC6CC\uC694. \uBB38\uC81C\uB97C \uD558\uB098\uC529 \uD480\uC5B4 \uB0B8 \uADF8 \uBE5B\uC774 \uC544\uB77C \uAD70\uB3C4\uB97C \uAD6C\uD588\uC5B4\uC694!"}],hint:"\uBC84\uB987\uC744 \uC77D\uD788\uBA74 \uBC14\uB85C \uBC14\uAFD4\uC694. \uAE38\xB7\uBCD1\uC0AC\uB97C \uACE8\uACE0\uB8E8, \uACE8\uB4DC\uB294 \uC313\uC9C0 \uB9D0\uACE0 \uC81C\uB54C!"}]}],md=[{who:"narr",text:"\uC7BF\uBE5B \uC548\uAC1C\uAC00 \uAC77\uD788\uACE0, \uC544\uB77C \uAD70\uB3C4\uC5D0 \uB2E4\uC2DC \uC544\uCE68\uC774 \uC654\uC5B4\uC694."},{who:"narr",text:"\uAE68\uCE68\uB3CC\uC740 \uC624\uB298\uB3C4 \uBC18\uC9DD\uC5EC\uC694. \uB204\uAD70\uAC00 \uBB38\uC81C \uD558\uB098\uB97C \uD480\uC5B4 \uB0BC \uB54C\uB9C8\uB2E4\uC694."},{who:"narr",text:"\uC6D0\uC815 \uC644\uB8CC! \uC790\uC720 \uB300\uC804\uC5D0\uC11C \uCEA0\uD398\uC778 \uC9C0\uB3C4\uB97C \uBAA8\uB450 \uC4F8 \uC218 \uC788\uC5B4\uC694. \uBCC4 3\uAC1C\uC5D0 \uB3C4\uC804\uD574 \uBCF4\uC138\uC694."}],zi=Kr.flatMap(s=>s.stages.map(e=>({...e,chapter:s}))),_o=s=>zi.find(e=>e.id===s),wm="classArena.campaign";function Tm(){try{let s=JSON.parse(localStorage.getItem(wm)||"{}");return{stars:s.stars||{},hstars:s.hstars||{},loss:s.loss||{},seenIntro:!!s.seenIntro,done:!!s.done,hard:!!s.hard}}catch{return{stars:{},hstars:{},loss:{},seenIntro:!1,done:!1,hard:!1}}}function Zr(s){try{localStorage.setItem(wm,JSON.stringify(s))}catch{}}function gd(s,e){let t=zi.findIndex(n=>n.id===e);return t<=0||(s.stars[zi[t-1].id]||0)>0}function Em(s,e){return e.stages.reduce((t,n)=>t+(s.stars[n.id]||0),0)}function Am(s,e){let t=Kr[e-1];return!!t&&t.stages.every(n=>(s.stars[n.id]||0)>0)}var Yc=class{constructor(e,t,n,i={},r=0){this.b=e,this.stage=t,this.ai=n,this.hooks=i,this.assist=r,this.done=new Set,n&&(n.onTalk=(a,o)=>{let l=bm(t.lines,a,o,Hs);l&&i.boss&&i.boss(t.boss,l)})}autoLane(){let e=this.b.sides[-1];return Ve.slice().sort((t,n)=>(e.towers[t].alive?e.towers[t].hp:9999)-(e.towers[n].alive?e.towers[n].hp:9999)+(Math.random()-.5)*50)[0]}update(e,t){let n=this.b;this.ai&&this.ai.watch&&this.ai.watch(t),n.state==="play"&&(this.stage.script||[]).forEach((i,r)=>{if(this.done.has(r)||n.time<i.at)return;this.done.add(r);let a=o=>o&&o!=="auto"&&Ve.includes(o)?o:this.autoLane();if(i.wave){let o=a(i.wave.lane),l=i.wave.roles.slice(0,Math.max(1,i.wave.roles.length-(this.assist>=3?1:0)));for(let c of l)n.spawnFree(1,c,o)}if(i.giant){let o=n.spawnFree(1,"giant",a(i.giant));o&&this.assist&&(o.hp=o.maxHp=Math.round(o.maxHp*(1-.12*this.assist)))}i.talk&&this.hooks.talk&&this.hooks.talk(i.talk[0],i.talk[1])})}},Jr=(s=0)=>s>=2?Math.min(4,s-1):0;function Rm(s,e=0,t=!1){let n={...s.ai},i=t?0:Jr(e);return t&&(n.diff=1,n.answerEvery*=.8,n.accuracy=Math.min(.95,n.accuracy+.06),n.counter=Math.min(.9,n.counter+.3),n.mineTo=Math.max(2,n.mineTo||1)),i&&(n.answerEvery*=1+.12*i,n.accuracy=Math.max(.6,n.accuracy-.03*i),n.counter*=1-.12*i),n}function Cm(s,e=0,t=!1){let n={...s.battle},i=t?0:Jr(e);return t&&(n.baseHp={...n.baseHp||{},1:(n.baseHp&&n.baseHp[1]||1)*1.15}),i&&(n.baseHp={...n.baseHp||{},1:(n.baseHp&&n.baseHp[1]||1)*(1-.06*i)},n.towerHp={...n.towerHp||{},1:(n.towerHp&&n.towerHp[1]||1)*(1-.06*i)}),n}var W=s=>document.querySelector(s),Im=(location.hash||"").replace("#",""),ze=Tm(),jc=s=>!!Un[s]&&(Un[s].free||Am(ze,Un[s].chapter)),ea=Uc(Un[Im]?Im:Rn("classArena.map")||"diag"),xd=["field",...Object.values(un[-1].models),...Object.values(un[1].models)],gi=-1,sa=1,Fm=!1;setTimeout(()=>{Fm||Bm(new Error("25\uCD08\uAC00 \uC9C0\uB098\uB3C4 \uC804\uC7A5\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uBCF4\uC138\uC694."))},25e3);function Bm(s){let e=W("#loading");e.hidden=!1,e.classList.add("err"),e.innerHTML="<p>\uAC8C\uC784\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC5B4\uC694</p><small></small>",e.querySelector("small").textContent=s&&s.message||String(s),console.error(s)}function zM(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function km(s){let e=new Pc;return e.register(t=>(t.textureLoader=new Is(t.options.manager),{name:"img_textures"})),new Promise((t,n)=>e.parse(zM(window.GLB[s]),"",t,n))}function HM(){return document.fonts?Promise.race([Promise.all([document.fonts.load("40px 'Black Han Sans'"),document.fonts.load("16px 'Gowun Dodum'")]),new Promise(s=>setTimeout(s,2500))]).catch(()=>{}):Promise.resolve()}function Rn(s,e){try{if(e===void 0)return localStorage.getItem(s);localStorage.setItem(s,e)}catch{return null}return null}var mi,Yt,$t,jr,zm,Mt="menu",pe=null,At=[],Jn=null,Pe={mode:Rn("classArena.mode")||"cpu",topic:Rn("classArena.topic")||"gugu",topic2:Rn("classArena.topic2")||"gugu",ai:Rn("classArena.ai")||"recruit",format:Rn("classArena.format")||"input",map:ea};["cpu","duo","daily"].includes(Pe.mode)||(Pe.mode="cpu");function Td(){let s=new Date,e=s.getFullYear()*1e4+(s.getMonth()+1)*100+s.getDate(),t=Math.floor(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate())/864e5),n=Object.keys(ft);return{key:e,label:`${s.getMonth()+1}\uC6D4 ${s.getDate()}\uC77C`,topic:n[t%n.length]}}xo[Pe.format]||(Pe.format="input");ft[Pe.topic]||(Pe.topic="gugu");ft[Pe.topic2]||(Pe.topic2="gugu");cs[Pe.ai]||(Pe.ai="recruit");var yo=()=>pe&&pe.duo;function Hm(s){return new Promise((e,t)=>{let n=document.createElement("script");n.src=s,n.onload=e,n.onerror=()=>t(new Error(s+" \uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694")),document.head.appendChild(n)})}var Pm=["\uD301: \uD654\uC0B4\uD45C \uBC29\uD5A5\uC73C\uB85C \uAC15\uD574\uC694. \uBC29\uD328\uBCD1\uC740 \uB3CC\uACA9\uBCD1\uC744 \uB9C9\uC544\uC694!","\uD301: \uADF8 \uAE38\uC758 \uC801 \uD0D1\uC744 \uBD80\uC234\uC57C \uBCF8\uC131\uC5D0 \uB2FF\uC544\uC694.","\uD301: 5\uBC88 \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uC131 \uB300\uD3EC\uAC00 \uCDA9\uC804\uB3FC\uC694.","\uD301: \uAE08\uAD11\uC744 \uAC15\uD654\uD558\uBA74 \uBB38\uC81C\uB9C8\uB2E4 \uACE8\uB4DC\uB97C \uB354 \uBC1B\uC544\uC694.","\uD301: \uB9C8\uC9C0\uB9C9 1\uBD84\uC740 \uCD1D\uB825\uC804! \uACE8\uB4DC\uAC00 2\uBC30\uC608\uC694.","\uD301: \uBAA8\uB974\uB294 \uBB38\uC81C\uB294 \uB118\uAE30\uAE30. \uD2C0\uB9B4 \uB54C\uBCF4\uB2E4 \uB35C \uC26C\uC5B4\uC694."];async function VM(){mi={},W("#ltip").textContent=Pm[Math.floor(Math.random()*Pm.length)];let s=[`field_${ea}`,...xd.slice(1)],e=0,t=()=>{e++;let n=Math.round(e/(s.length*2)*100);W("#loading b").textContent=n+"%",W("#lbar").style.width=n+"%"};for(let n of s)await Hm(`models/${n}.js`),t();window.GLB.field=window.GLB["field_"+ea];for(let n of xd)mi[n]=await km(n),t();mi["field_"+ea]=mi.field,await HM(),jr={};for(let n of xd.slice(1)){jr[n]={};for(let i of mi[n].animations)jr[n][i.name]=i.duration}$t=new kc,Yt=new Bc(W("#stage"),W("#overlay"),mi,$t),$t.onChange((n,i)=>{Yt.applyQuality(),i!=="user"&&xi(`\uAE30\uAE30\uC5D0 \uB9DE\uCDB0 \uD654\uC9C8\uC744 '${hs[n].name}'(\uC73C)\uB85C \uB9DE\uCDC4\uC5B4\uC694`),eh()}),zm=new Hr(jr),Vm("cpu"),QM(),eS(),XM(),window.addEventListener("resize",()=>setTimeout(ra,60)),ra(),Fm=!0,W("#loading").hidden=!0,ia(),requestAnimationFrame(Zm),["localhost","127.0.0.1"].includes(location.hostname)&&tS();try{"serviceWorker"in navigator&&location.protocol==="https:"&&!/claude\.ai|claudeusercontent/.test(location.hostname)&&navigator.serviceWorker.register("sw.js").catch(()=>{})}catch{}}async function GM(s){if(Un[s]||(s="diag"),s===ea&&Yt.field===mi["field_"+s])return;let e="field_"+s;if(!mi[e]){let t=W("#loading");t.hidden=!1,t.classList.add("soft"),W("#loading b").textContent="",W("#lbar").style.width="30%",W("#ltip").textContent=Un[s].name+" \uC804\uC7A5\uC744 \uC5EC\uB294 \uC911\u2026";try{(!window.GLB||!window.GLB[e])&&await Hm(`models/${e}.js`),W("#lbar").style.width="70%",mi[e]=await km(e)}finally{t.hidden=!0,t.classList.remove("soft")}}ea=Uc(s),Yt.clear(),Yt.setField(mi[e]);for(let t of At)t.setLanes();ra()}function Vm(s){for(let n of At)n.destroy();let e=W("#panel");e.className=s==="duo"?"two":"one",document.body.classList.toggle("duo",s==="duo");let t={view:Yt,isPlaying:()=>Mt==="play",toast:xi};At=s==="duo"?[new $r(e,-1,t),new $r(e,1,t)]:[new $r(e,-1,t)],Yt.setLane(null,1),setTimeout(ra,0)}function ra(){let s=W("#panel").offsetHeight,e=W("#top").getBoundingClientRect();Yt.setViewport({x:0,y:0,w:window.innerWidth,h:window.innerHeight},e.height?e.bottom+4:0,s),W("#rotate").hidden=!(window.innerHeight>window.innerWidth*1.05)}function Ed(){Yt.clear();let s=new Hr(jr);s.sides[-1].gold=s.sides[1].gold=180,Jn={b:s,ais:[new Vr(s,-1,"knight"),new Vr(s,1,"knight")],endT:0};for(let e of Jn.ais)e.next=.3+Math.random()}function WM(s){if(!Jn)return;let e=Jn.b;e.update(s);for(let n of Jn.ais)n.update(s);let t=e.events;e.events=[],Oe.quiet=!0,Yt.handle(t,e),Oe.quiet=!1,e.state!=="play"&&(Jn.endT+=s,Jn.endT>5&&Ed())}async function ta(s=null){if(!_d){_d=!0;try{Jn=null;let e=!s&&Pe.mode==="duo",t=!s&&Pe.mode==="daily"?Td():null;for(let o of["#titleScreen","#startScreen","#resultScreen","#pauseScreen","#setScreen","#campScreen","#storyScreen"])W(o).hidden=!0;At.length===2!==e&&Vm(e?"duo":"cpu"),await GM(s?s.map:jc(Pe.map)?Pe.map:"diag"),dn.intense(!1),dn.duck(!1),dn.start(),document.body.classList.remove("menu"),ra(),Yt.clear();let n=s&&ze.loss&&ze.loss[s.id]||0,i=!!(s&&ze.hard),r=new Hr(jr,s?Cm(s,n,i):{}),a=s?Rm(s,n,i):t?"knight":Pe.ai;pe={battle:r,duo:e,daily:t,stage:s,ai:e?null:new Vr(r,sa,a),endT:-1},s&&(pe.runner=new Yc(r,s,pe.ai,{talk:(o,l)=>Lm(o,l),boss:(o,l)=>Lm(o,l,!0)},i?0:Jr(n))),pe.hard=i,xm(t?t.key:null),At[0].start(r,t?t.topic:Pe.topic,t?"input":Pe.format,s?s.rules:void 0),e&&At[1].start(r,Pe.topic2,Pe.format),W("#blueSub").textContent=e?"\uC67C\uCABD":"\uB098",W("#redSub").textContent=e?"\uC624\uB978\uCABD":s?`${s.id} ${s.boss?Yr[s.boss].name:s.name}`:"\uCEF4\uD4E8\uD130 \xB7 "+cs[t?"knight":Pe.ai].name,W("#banner").hidden=!0,wo.length=0,vo.length=0,document.querySelectorAll(".confetti").forEach(o=>o.remove()),t&&setTimeout(()=>ds(`\uC624\uB298\uC758 \uB3C4\uC804 \xB7 ${t.label} \xB7 ${ft[t.topic].name}`,2.2),300),s&&setTimeout(()=>ds((i?"\uB3C4\uC804 \uBAA8\uB4DC \xB7 ":"")+"\uBAA9\uD45C: "+s.goal.replace(/요$/,"\uC694!"),2.4),300),s&&s.unlock&&!ze.stars[s.id]&&setTimeout(()=>{pe&&pe.stage===s&&ds(s.unlock,2.4)},2900),$t.reset(),Mt="play",Wm(!0)}catch(e){xi("\uC804\uC7A5\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC5B4\uC694: "+(e&&e.message||e)),ia()}finally{_d=!1}}}var _d=!1,wo=[],vo=[],na=0;function Lm(s,e,t){let n=Yr[s]||Yr.narr;vo.push(n.name+": "+e),vo.length>30&&vo.shift(),wo.push({c:n,text:e,foe:t||n.side===1}),na<=0&&Gm()}function Gm(){let s=wo.shift(),e=W("#talk");if(!s){e.hidden=!0,na=0;return}e.className=s.foe?"foe":"",e.querySelector("img").src=`assets/portraits/${s.c.img||"knight"}.webp`,e.querySelector("b").textContent=s.c.name,e.querySelector("p").textContent=s.text,e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation="",na=Math.max(3.2,1.6+s.text.length*.07),Oe.play(s.foe?"horn":"talk")}function XM(){W("#storyScreen").addEventListener("click",s=>{s.target.closest("#sSkip")||Qc()}),W("#sSkip").addEventListener("click",bd),window.addEventListener("keydown",s=>{if(rn&&(s.key==="Enter"||s.key===" "||s.key==="ArrowRight")){s.preventDefault(),Qc();return}if(rn&&s.key==="Escape"){bd();return}if(s.key==="Escape"){Mt==="play"?Ym():Mt==="pause"&&Km();return}if(Mt==="play"&&(s.key==="Enter"||s.key===" ")&&s.target.tagName==="BUTTON"&&s.preventDefault(),Mt!=="play"||s.target.tagName==="INPUT"||yo())return;let e=At[0];if(s.key==="ArrowUp"||s.key==="ArrowDown"){e.moveLane(s.key==="ArrowUp"?-1:1),s.preventDefault();return}e.key(s)})}var yd={[-1]:-1,1:-1};function Wm(s){let e=pe.battle;for(let i of At)i.update();for(let i of[-1,1]){let r=e.sides[i].base.hp,a=Object.values(e.sides[i].towers).filter(c=>c.alive).length,o=W(i<0?"#blueTowers":"#redTowers"),l=a+"/"+Ve.length;if(o.dataset.n!==l&&(o.dataset.n=l,o.innerHTML="\uD0D1 "+"<i></i>".repeat(a)+'<i class="x"></i>'.repeat(Ve.length-a)),r!==yd[i]||s){let c=W(i<0?"#blue":"#red"),h=r/Dn.hp;c.querySelector(".hp i").style.width=(h*100).toFixed(1)+"%",c.querySelector(".hp span").textContent=Math.ceil(h*100)+"%",!s&&r<yd[i]&&(c.classList.remove("hit"),c.offsetWidth,c.classList.add("hit")),yd[i]=r}}let t=Math.ceil(e.timeLeft);W("#clock b").textContent=Math.floor(t/60)+":"+String(t%60).padStart(2,"0"),W("#clock").classList.toggle("ot",e.overtime);let n=e.objective;W("#clockSub").textContent=e.overtime?"\uCD1D\uB825\uC804 \xB7 \uACE8\uB4DC 2\uBC30":n.type==="towers"?`\uBAA9\uD45C: \uD0D1 ${Object.values(e.sides[sa].towers).filter(i=>!i.alive).length}/${n.n}`:n.type==="survive"?"\uBAA9\uD45C: \uB05D\uAE4C\uC9C0 \uBC84\uD2F0\uAE30":"\uB0A8\uC740 \uC2DC\uAC04"}var Zc=0;function xi(s){let e=W("#toast");e.textContent=s,e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation="",Zc=2.6}function ds(s,e=1.8){let t=W("#banner");t.textContent=s,t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation="",setTimeout(()=>{t.hidden=!0},e*1e3)}var Mo=s=>s<0?"\uAE30\uC0AC\uB2E8":"\uD574\uACE8 \uAD70\uB2E8",Kc=s=>At.find(e=>e.side===s),Qr=0,Jc=0,Nm=-99;function qM(s=90){s=Math.round(s*$t.preset.fx);let e=["#ffd36b","#7fd0ff","#ff8f80","#8fe388","#fff3d6","#c9a0ff"];for(let t=0;t<s;t++){let n=document.createElement("i");n.className="confetti",n.style.left=Math.random()*100+"vw",n.style.background=e[t%e.length],n.style.setProperty("--dx",(Math.random()-.5)*30+"vw"),n.style.animationDuration=2.2+Math.random()*1.8+"s",n.style.animationDelay=Math.random()*.6+"s",document.body.appendChild(n),setTimeout(()=>n.remove(),5e3)}}function Xm(s){for(let e of s)if(e.type==="structDown"&&(Qr=Math.max(Qr,e.struct.kind==="base"?.25:.12)),e.type==="land"&&e.proj.kind==="ball"&&(Qr=Math.max(Qr,.07)),e.type==="structHit"&&e.struct.kind==="base"&&Kc(e.struct.side)&&(yo()||(Jc=2.5),pe.battle.time-Nm>8&&(Nm=pe.battle.time,Kc(e.struct.side).say("\uBCF8\uC131\uC774 \uACF5\uACA9\uBC1B\uACE0 \uC788\uC5B4\uC694! \uB9C9\uC544\uC57C \uD574\uC694"))),e.type==="overtime")ds("\uCD1D\uB825\uC804! \uACE8\uB4DC 2\uBC30"),Oe.play("horn"),dn.intense(!0);else if(e.type==="mine"&&!Kc(e.side))xi("\uC0C1\uB300\uAC00 \uAE08\uAD11\uC744 \uAC15\uD654\uD588\uC5B4\uC694");else if(e.type==="cannon"&&!Kc(e.side))xi("\uC0C1\uB300\uC758 \uC131 \uB300\uD3EC!");else if(e.type==="structDown"&&e.struct.kind==="tower"){let t=Hs[e.struct.lane];yo()?ds(`${Mo(e.struct.side)} ${t} \uD0D1 \uBB34\uB108\uC9D0!`,1.6):e.struct.side===sa?ds(`${t} \uD0D1\uC744 \uBB34\uB108\uB728\uB838\uC5B4\uC694!`,1.6):xi(`\uC6B0\uB9AC ${t} \uD0D1\uC774 \uBB34\uB108\uC84C\uC5B4\uC694! \uB9C9\uC544\uC57C \uD574\uC694`)}else if(e.type==="end"){pe.endT=0;let t=e.winner,n=t?pe.battle.sides[-t].base:null;n&&n.hp<=0&&Yt.focusOn(n.x,n.y,2.5),(yo()?t:t===gi)&&setTimeout(()=>qM(),400),yo()?(ds(t?`${Mo(t)} \uC2B9\uB9AC!`:"\uBB34\uC2B9\uBD80",2.6),Oe.play("win")):(ds(t===gi?"\uC2B9\uB9AC!":t===sa?"\uD328\uBC30\u2026":"\uBB34\uC2B9\uBD80",2.6),Oe.play(t===gi?"win":"lose"))}}function $M(s,e,t){let n=new Set,i=s.wrongs.filter(o=>!n.has(o.q.text)&&n.add(o.q.text)).slice(0,12),r=0,a=()=>{t.textContent=i.length?`${r}/${i.length} \uB2E4\uC2DC \uB9DE\uD798`:"\uD2C0\uB9B0 \uBB38\uC81C\uAC00 \uC5C6\uC5B4\uC694!"};i.forEach((o,l)=>{let c=document.createElement("label");c.className="rev"+(o.q.word?" wide":"");let h=()=>{c.classList.add("done"),r++,a(),Oe.play("right"),c.querySelector(".mine-ans").textContent="\uB2E4\uC2DC \uB9DE\uD614\uC5B4\uC694"};if(o.q.type==="number"){c.innerHTML=`<span></span><input id="rev${s.side}_${l}" inputmode="numeric" autocomplete="off"><span class="mine-ans"></span>`;let u=c.querySelector("input");u.addEventListener("input",()=>{!c.classList.contains("done")&&qr(o.q,u.value)&&(u.disabled=!0,h())})}else{c.innerHTML='<span></span><span class="mini"></span><span class="mine-ans"></span>';for(let u of o.q.type==="ox"?["O","X"]:o.q.options){let d=document.createElement("button");d.type="button",d.textContent=u,d.addEventListener("click",()=>{c.classList.contains("done")||(qr(o.q,u)?(d.classList.add("good"),h()):(d.classList.add("bad"),Oe.play("wrong")))}),c.querySelector(".mini").appendChild(d)}}c.firstChild.textContent=$c(o.q),c.querySelector(".mine-ans").textContent=o.kind==="skip"?"\uB118\uAE34 \uBB38\uC81C":"\uB0B4 \uB2F5 "+o.given,e.appendChild(c)}),a()}function YM(){Mt="result",dn.intense(!1),dn.duck(!0);let s=pe.battle,e=s.winner;pe.duo?(W("#resTitle").textContent=e?`${Mo(e)} \uC2B9\uB9AC!`:"\uBB34\uC2B9\uBD80",W("#resWhy").textContent=s.endWhy==="base"?`${Mo(-e)}\uC758 \uBCF8\uC131\uC774 \uBB34\uB108\uC84C\uC5B4\uC694.`:"\uC2DC\uAC04\uC774 \uB05D\uB098\uC11C \uBCF8\uC131\uACFC \uD0D1\uC774 \uB354 \uD2BC\uD2BC\uD55C \uCABD\uC774 \uC774\uACBC\uC5B4\uC694."):(W("#resTitle").textContent=e===gi?"\uC2B9\uB9AC!":e===sa?"\uC544\uC26C\uC6B4 \uD328\uBC30":"\uBB34\uC2B9\uBD80",W("#resWhy").textContent=s.endWhy==="towers"?"\uBAA9\uD45C\uD55C \uD0D1\uC744 \uBAA8\uB450 \uBB34\uB108\uB728\uB838\uC5B4\uC694!":s.endWhy==="survive"?"\uB05D\uAE4C\uC9C0 \uBCF8\uC131\uC744 \uC9C0\uCF1C \uB0C8\uC5B4\uC694!":s.endWhy==="base"?e===gi?"\uD574\uACE8 \uAD70\uB2E8\uC758 \uBCF8\uC131\uC744 \uBB34\uB108\uB728\uB838\uC5B4\uC694!":"\uC6B0\uB9AC \uBCF8\uC131\uC774 \uBB34\uB108\uC84C\uC5B4\uC694. \uC57D\uD55C \uAE38\uC744 \uB9C9\uACE0 \uC0C1\uC131\uC744 \uB178\uB824 \uB2E4\uC2DC \uB3C4\uC804\uD574\uC694!":e?"\uC2DC\uAC04\uC774 \uB05D\uB098\uC11C \uBCF8\uC131\uACFC \uD0D1\uC774 \uB354 \uD2BC\uD2BC\uD55C \uCABD\uC774 \uC774\uACBC\uC5B4\uC694.":"\uC2DC\uAC04\uC774 \uB05D\uB0AC\uACE0 \uC591\uCABD\uC774 \uBE44\uC2B7\uD588\uC5B4\uC694.");let t=(d,f)=>`<div class="stat"><small>${d}</small><b>${f}</b></div>`,n=d=>{let f=s.sides[d],g=f.stats.right+f.stats.wrong;return t("\uB9DE\uD78C \uBB38\uC81C",f.stats.right)+t("\uC815\uB2F5\uB960",g?Math.round(f.stats.right/g*100)+"%":"-")+t("\uCD5C\uACE0 \uC5F0\uC18D",f.bestStreak)+t("\uBC88 \uACE8\uB4DC",f.stats.goldEarned)+t("\uCD9C\uC804\uD55C \uBCD1\uC0AC",f.stats.deployed)},i=W("#resBody");i.innerHTML="";for(let d of At){let f=document.createElement("div");f.className="rescol "+(d.side<0?"blue":"red"),f.innerHTML=(pe.duo?`<h3 class="who">${Mo(d.side)} \xB7 ${d.side<0?"\uC67C\uCABD":"\uC624\uB978\uCABD"} (${ft[d.topic].name})</h3>`:"")+`<div class="stats">${n(d.side)}</div><div class="review"><h3>\uD2C0\uB9B0 \uBB38\uC81C \uB2E4\uC2DC \uD480\uAE30 <small class="revScore"></small></h3><div class="revList"></div></div>`,i.appendChild(f),$M(d,f.querySelector(".revList"),f.querySelector(".revScore"))}i.classList.toggle("two",pe.duo);let r=s.sides[gi],a=r.stats.right+r.stats.wrong,o=a?r.stats.right/a:0,l=pe.duo?0:(e===gi?1:0)+(o>=.8&&a>=5?1:0)+(r.base.hp/r.base.max>=.5?1:0),c=W("#stars");c.hidden=pe.duo,[...c.children].forEach((d,f)=>{d.className="",f<l&&setTimeout(()=>{d.className="on",Oe.play("coin")},500+f*350)}),pe.stars=l;let h=pe.stage,u=e===gi;h&&(ze.stars[h.id]=Math.max(ze.stars[h.id]||0,u?Math.max(1,l):0),pe.hard&&u&&(ze.hstars=ze.hstars||{},ze.hstars[h.id]=Math.max(ze.hstars[h.id]||0,Math.max(1,l))),ze.loss=ze.loss||{},u?delete ze.loss[h.id]:ze.loss[h.id]=(ze.loss[h.id]||0)+1,Zr(ze),!u&&!pe.hard&&Jr(ze.loss[h.id])>Jr(ze.loss[h.id]-1)&&xi("\uB2E4\uC74C \uD310\uBD80\uD130 \uD574\uACE8 \uAD70\uB2E8\uC774 \uC870\uAE08 \uC57D\uD574\uC838\uC694. \uD798\uB0B4\uC694!")),W("#resHint").hidden=!h||u,h&&!u&&(W("#resHint").textContent="\uC791\uC804 \uB3C4\uC6C0\uB9D0: "+h.hint),W("#nextBtn").hidden=!h||!u,W("#campMapBtn").hidden=!h,W("#homeBtn").hidden=!!h,W("#againBtn").className=h&&u?"ghost":"go",W("#shareText").textContent=KM(),W("#resultScreen").hidden=!1}function KM(){let s=pe.battle,e=Math.round(s.time),t=Math.floor(e/60)+"\uBD84 "+e%60+"\uCD08",n=o=>{let l=s.sides[o.side],c=o.log.slice(-30).map(h=>h?"\u25A0":"\u25A1").join("");return`${ft[o.topic].name} \xB7 \uC815\uB2F5 ${l.stats.right}/${l.stats.right+l.stats.wrong} \xB7 \uCD5C\uACE0 ${l.bestStreak}\uC5F0\uC18D
${c}`};if(pe.duo){let o=s.winner;return`\uC131\uBB38 \uB300\uC804 \xB7 \uB458\uC774\uC11C \xB7 ${o?(o<0?"\uAE30\uC0AC\uB2E8":"\uD574\uACE8 \uAD70\uB2E8")+" \uC2B9\uB9AC":"\uBB34\uC2B9\uBD80"} \xB7 ${t}
\uAE30\uC0AC\uB2E8: ${n(At[0])}
\uD574\uACE8 \uAD70\uB2E8: ${n(At[1])}`}let i=s.winner===gi?"\uC2B9\uB9AC":s.winner===sa?"\uD328\uBC30":"\uBB34\uC2B9\uBD80",r=pe.daily?`\uC131\uBB38 \uB300\uC804 \xB7 \uC624\uB298\uC758 \uB3C4\uC804 ${pe.daily.label}`:pe.stage?`\uC131\uBB38 \uB300\uC804 \xB7 \uC6D0\uC815 ${pe.stage.id} ${pe.stage.name}`:"\uC131\uBB38 \uB300\uC804",a=pe.stage?"":` \xB7 \uCEF4\uD4E8\uD130 ${pe.daily?"\uAE30\uC0AC":cs[Pe.ai].name}`;return`${r} \xB7 ${i} ${"\u2605".repeat(pe.stars)}${"\u2606".repeat(3-pe.stars)}${a} \xB7 ${t}
${n(At[0])}`}function ZM(){let s=W("#shareText").textContent,e=()=>xi("\uAE30\uB85D\uC744 \uBCF5\uC0AC\uD588\uC5B4\uC694. \uD328\uB4E4\uB81B\xB7\uD074\uB798\uC2A4\uB8F8\uC5D0 \uBD99\uC5EC \uB123\uC5B4 \uC790\uB791\uD574\uC694!");try{navigator.clipboard.writeText(s).then(e,()=>Dm())}catch{Dm()}}function Dm(){let s=document.createRange();s.selectNodeContents(W("#shareText"));let e=getSelection();e.removeAllRanges(),e.addRange(s),xi("\uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574\uC694")}function JM(){let s=document.createElement("canvas");s.width=s.height=1080;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,1080);t.addColorStop(0,"#1f3a2b"),t.addColorStop(1,"#0d1712"),e.fillStyle=t,e.fillRect(0,0,1080,1080),e.strokeStyle="#c9a45c",e.lineWidth=10,e.strokeRect(30,30,1020,1020),e.textAlign="center",e.fillStyle="#fff3d6",e.font="120px 'Black Han Sans', sans-serif",e.fillText("\uC131\uBB38 \uB300\uC804",540,200);let n=W("#shareText").textContent.split(`
`);e.fillStyle="#ffd36b",e.font="52px 'Black Han Sans', sans-serif",e.fillText(n[0].replace("\uC131\uBB38 \uB300\uC804 \xB7 ",""),540,320),e.fillStyle="#f6efe0",e.font="40px 'Gowun Dodum', sans-serif";let i=430;for(let l of n.slice(1))if(/^[■□]+$/.test(l)){let c=l.length,h=Math.min(52,900/c),u=540-c*h/2;[...l].forEach((d,f)=>{e.fillStyle=d==="\u25A0"?"#8fe388":"#ff8f7a",e.fillRect(u+f*h+3,i-h+6,h-6,h-6)}),e.fillStyle="#f6efe0",i+=h+40}else e.fillText(l,540,i),i+=70;e.fillStyle="#aeb5a6",e.font="30px 'Gowun Dodum', sans-serif",e.fillText(new Date().toLocaleDateString("ko-KR"),540,1e3);let r=s.toDataURL("image/png"),a=document.createElement("a");a.href=r,a.download="\uC131\uBB38\uB300\uC804_\uAE30\uB85D.png",document.body.appendChild(a),a.click(),a.remove();let o=W("#cardView");o.hidden=!1,o.querySelector("img").src=r}function Sd(){for(let s of["#titleScreen","#startScreen"])W(s).hidden=!0;ze.seenIntro?fs():bo(pd.intro,{art:"world"},()=>{ze.seenIntro=!0,Zr(ze),fs()})}var Ad=()=>zi.find(s=>!ze.stars[s.id])||zi[zi.length-1],So=1;function fs(s){Mt="menu",pe=null,document.body.classList.add("menu"),Jn||Ed();for(let t of["#titleScreen","#startScreen","#resultScreen","#pauseScreen","#storyScreen"])W(t).hidden=!0;W("#talk").hidden=!0,wo.length=0,So=(_o(s)||Ad()).chapter.id,qm(),W("#campScreen").hidden=!1}function qm(){let s=W("#cNodes");s.innerHTML="";let e=Ad();for(let o of Kr){let l=gd(ze,o.stages[0].id),c=Em(ze,o),h=document.createElement("button");h.className="cnode"+(o.id===So?" on":"")+(l?"":" locked")+(e.chapter.id===o.id&&!ze.done?" next":""),h.style.left=o.pos[0]+"%",h.style.top=o.pos[1]+"%",h.innerHTML=`<span class="num">${o.id}</span><b>${o.name}</b><small>${l?"\u2605".repeat(c)+"\u2606".repeat(o.stages.length*3-c):"\uC7A0\uAE40"}</small>`,h.addEventListener("click",()=>{So=o.id,Oe.play("tap"),qm()}),s.appendChild(h)}let t=Kr[So-1];W("#cKicker").textContent=`\uC6D0\uC815 \xB7 ${t.id}\uC7A5`,W("#cTitle").textContent=t.name,W("#cTeach").textContent=t.teach;let n=W("#cStages");n.innerHTML="";for(let o of t.stages){let l=gd(ze,o.id),c=ze.stars[o.id]||0,h=document.createElement("div");h.className="cstage"+(o.boss?" boss":"")+(l?"":" locked");let u=ze.hstars&&ze.hstars[o.id]||0;h.innerHTML=`<span class="t"><i>${o.id}</i>${o.name}</span><span class="st">${"\u2605".repeat(c)}${"\u2606".repeat(3-c)}${u?` <b class="hs" title="\uB3C4\uC804 \uBAA8\uB4DC \uBCC4">\uB3C4\uC804 ${"\u2605".repeat(u)}</b>`:""}</span><span class="g">${l?o.goal:"\uC55E \uC2A4\uD14C\uC774\uC9C0\uB97C \uAE68\uBA74 \uC5F4\uB824\uC694"}${o.boss?" \xB7 \uBCF4\uC2A4":""}</span>`;let d=document.createElement("button");d.className="go",d.textContent=c?"\uB2E4\uC2DC":"\uCD9C\uC804",d.disabled=!l,d.addEventListener("click",()=>$m(_o(o.id))),h.appendChild(d),n.appendChild(h)}let i=W("#cTopic"),r=W("#cFmt");if(!i.options.length){for(let[o,l]of Object.entries(ft))i.add(new Option(`${l.group?l.group+" \xB7 ":""}${l.name}`,o));for(let[o,l]of Object.entries(xo))r.add(new Option(l.name,o));i.addEventListener("change",()=>{Pe.topic=i.value,Rn("classArena.topic",i.value),Fn()}),r.addEventListener("change",()=>{Pe.format=r.value,Rn("classArena.format",r.value),Fn()})}i.value=Pe.topic,r.value=Pe.format;let a=W("#cHard");a.dataset.on||(a.dataset.on=1,a.addEventListener("change",()=>{ze.hard=a.checked,Zr(ze),Oe.play("tap")})),a.checked=!!ze.hard}function $m(s){Oe.unlock(),dn.start();let e=s.chapter;bo(s.intro,{art:e.art,card:{kick:`${e.id}\uC7A5 \xB7 ${e.name}`,title:`${s.id} ${s.name}`,goal:"\uBAA9\uD45C: "+s.goal}},()=>ta(s))}function jM(s){if(!s)return ia();W("#resultScreen").hidden=!0,bo(s.win,{art:s.chapter.art},()=>{s.final?bo(md,{art:"ending",card:{kick:"\uC6D0\uC815 \uC644\uB8CC",title:"\uC548\uAC1C\uAC00 \uAC77\uD614\uC5B4\uC694",goal:"\uBAA8\uB4E0 \uC7A5\uC758 \uC9C0\uB3C4\uAC00 \uC790\uC720 \uB300\uC804\uC5D0 \uC5F4\uB838\uC5B4\uC694"}},()=>{ze.done=!0,Zr(ze),Fn(),fs(s.id)}):(Fn(),fs(Ad().id))})}var rn=null;function bo(s,e,t){Mt="story";for(let n of["#titleScreen","#startScreen","#resultScreen","#campScreen"])W(n).hidden=!0;W("#sArt").src=`assets/story/${e.art||"world"}.webp`,rn={lines:s,i:-1,done:t,card:e.card},W("#storyScreen").hidden=!1,e.card?(W("#sCardKick").textContent=e.card.kick,W("#sCardTitle").textContent=e.card.title,W("#sCardGoal").textContent=e.card.goal||"",W("#sCard").hidden=!1,W("#sBox").hidden=!0,rn.i=-2):(W("#sCard").hidden=!0,Qc())}function Qc(){if(!rn)return;if(rn.i===-2&&(rn.i=-1,W("#sCard").hidden=!0),rn.i++,rn.i>=rn.lines.length)return bd();let s=rn.lines[rn.i],e=Yr[s.who]||Yr.narr,t=W("#sBox");t.hidden=!1,t.className="sbox"+(e.side===1?" foe":"")+(e.img?"":" narr"),W("#sFace").hidden=!e.img,e.img&&(W("#sFace").src=`assets/portraits/${e.img}.webp`),W("#sName").textContent=e.name,W("#sName").hidden=!e.name,W("#sText").textContent=s.text,t.animate([{opacity:.4,transform:"translate(-50%, 6px)"},{opacity:1,transform:"translate(-50%, 0)"}],220)}function bd(){let s=rn&&rn.done;rn=null,W("#storyScreen").hidden=!0,s&&s()}function QM(){document.querySelectorAll("#modes .mode[data-m]").forEach(r=>r.addEventListener("click",()=>{Pe.mode=r.dataset.m,Rn("classArena.mode",Pe.mode),Fn()}));for(let[r,a]of[["#topicOpts","topic"],["#topic2Opts","topic2"]]){let o=W(r),l="",c=null;for(let[h,u]of Object.entries(ft)){if(!c||u.group&&u.group!==l){l=u.group,c=document.createElement("div"),c.className="tgroup",o.appendChild(c);let f=document.createElement("span");f.className="ogroup",f.textContent=l||"",c.appendChild(f)}let d=document.createElement("button");d.className="opt",d.dataset.k=h,d.innerHTML=`<span>${u.name}</span><small>${u.hint}</small>`,d.addEventListener("click",()=>{Pe[a]=h,Rn("classArena."+a,h),Fn()}),c.appendChild(d)}}let s=W("#fmtOpts");for(let[r,a]of Object.entries(xo)){let o=document.createElement("button");o.className="opt",o.dataset.k=r,o.innerHTML=`<span>${a.name}</span><small>${a.hint}</small>`,o.addEventListener("click",()=>{Pe.format=r,Rn("classArena.format",r),Fn()}),s.appendChild(o)}let e=W("#aiOpts"),t={recruit:"\uCC9C\uCC9C\uD788 \uD480\uC5B4\uC694",knight:"\uAC00\uB054 \uC0C1\uC131\uC744 \uB178\uB824\uC694",general:"\uBE60\uB974\uACE0 \uC601\uB9AC\uD574\uC694"};for(let[r,a]of Object.entries(cs)){let o=document.createElement("button");o.className="opt",o.dataset.k=r,o.innerHTML=`<span>${a.name}</span><small>${t[r]}</small>`,o.addEventListener("click",()=>{Pe.ai=r,Rn("classArena.ai",r),Fn()}),e.appendChild(o)}let n=W("#ring"),i={shield:[47,0],rusher:[94,47],archer:[47,94],mage:[0,47]};n.innerHTML='<svg viewBox="0 0 150 150"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#c9a45c"/></marker></defs><path d="M95,28 Q118,32 122,55" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/><path d="M122,95 Q118,118 95,122" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/><path d="M55,122 Q32,118 28,95" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/><path d="M28,55 Q32,32 55,28" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/></svg>';for(let r of di){let a=document.createElement("img");a.src=`assets/portraits/${un[gi].models[r]}.webp`,a.alt=Ot[r].name,a.title=Ot[r].name,a.style.left=i[r][0]+"px",a.style.top=i[r][1]+"px",n.appendChild(a)}W("#startBtn").addEventListener("click",()=>{Oe.unlock(),ta()}),W("#quickBtn").addEventListener("click",()=>{Oe.unlock(),Pe.mode==="duo"||Pe.mode,ta()}),W("#campBtn").addEventListener("click",()=>{Oe.unlock(),dn.start(),Sd()}),W("#modeCamp").addEventListener("click",()=>{W("#startScreen").hidden=!0,Sd()}),W("#campMapBtn").addEventListener("click",()=>fs(pe&&pe.stage?pe.stage.id:null)),W("#nextBtn").addEventListener("click",()=>jM(pe.stage)),W("#cBack").addEventListener("click",()=>{Oe.play("tap"),ia()}),W("#cStory").addEventListener("click",()=>{let r=Kr[So-1],a=r.id===1?[...pd.intro]:[];for(let o of r.stages)ze.stars[o.id]&&a.push(...o.intro,...o.win);if(r.stages.some(o=>o.final)&&ze.done&&a.push(...md),!a.length){xi("\uC774 \uC7A5\uC740 \uC544\uC9C1 \uC774\uC57C\uAE30\uAC00 \uC5C6\uC5B4\uC694. \uBA3C\uC800 \uCD9C\uC804\uD574\uC694!");return}bo(a,{art:r.id===1&&!ze.stars["1-1"]?"world":r.art},()=>fs(r.stages[0].id))}),W("#prepBtn").addEventListener("click",()=>{Oe.unlock(),dn.start(),W("#titleScreen").hidden=!0,W("#startScreen").hidden=!1,Fn()}),W("#backBtn").addEventListener("click",()=>{W("#startScreen").hidden=!0,Rd(),W("#titleScreen").hidden=!1}),W("#setBtn0").addEventListener("click",()=>vd("#titleScreen")),W("#againBtn").addEventListener("click",()=>{Oe.unlock(),ta(pe?pe.stage:null)}),W("#copyBtn").addEventListener("click",ZM),W("#cardBtn").addEventListener("click",JM),W("#cardView").addEventListener("click",()=>{W("#cardView").hidden=!0}),W("#homeBtn").addEventListener("click",ia),W("#pauseBtn").addEventListener("click",Ym),W("#resumeBtn").addEventListener("click",Km),W("#quitBtn").addEventListener("click",()=>{let r=pe&&pe.stage;r?fs(r.id):ia()}),W("#setBtn1").addEventListener("click",()=>vd("#startScreen")),W("#setBtn2").addEventListener("click",()=>vd("#pauseScreen")),Fn()}function Fn(){let s=Pe.mode==="duo",e=Pe.mode==="daily";document.querySelectorAll("#modes .mode[data-m]").forEach(i=>i.classList.toggle("on",i.dataset.m===Pe.mode)),W("#topic2Pick").hidden=!s,W("#aiPick").hidden=s||e;for(let i of["#topicOpts","#fmtOpts"])W(i).closest(".pick").hidden=e;if(W("#dailyNote").hidden=!e,e){let i=Td();W("#dailyNote").textContent=`\uC624\uB298(${i.label})\uC758 \uB3C4\uC804: ${ft[i.topic].name} \xB7 \uC9C1\uC811 \uC785\uB825 \xB7 \uCEF4\uD4E8\uD130 \uAE30\uC0AC. \uBC18 \uCE5C\uAD6C\uB4E4 \uBAA8\uB450 \uAC19\uC740 \uBB38\uC81C\uAC00 \uAC19\uC740 \uC21C\uC11C\uB85C \uB098\uC640\uC694. \uB05D\uB098\uACE0 \uAE30\uB85D\uC744 \uBCF5\uC0AC\uD574 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694!`}W("#topicLabel").textContent=s?"\uC67C\uCABD(\uAE30\uC0AC\uB2E8) \uBB38\uC81C \uC8FC\uC81C":"\uBB38\uC81C \uC8FC\uC81C",document.querySelectorAll("#topicOpts .opt").forEach(i=>i.classList.toggle("on",i.dataset.k===Pe.topic)),document.querySelectorAll("#topic2Opts .opt").forEach(i=>i.classList.toggle("on",i.dataset.k===Pe.topic2)),document.querySelectorAll("#aiOpts .opt").forEach(i=>i.classList.toggle("on",i.dataset.k===Pe.ai)),document.querySelectorAll("#fmtOpts .opt").forEach(i=>i.classList.toggle("on",i.dataset.k===Pe.format));let t=W("#mapOpts");t.innerHTML="";for(let[i,r]of Object.entries(Un)){if(!jc(i))continue;let a=document.createElement("button");a.className="opt"+(i===Pe.map?" on":""),a.dataset.k=i,a.innerHTML=`<span>${r.name}</span><small>${r.desc}</small>`,a.addEventListener("click",()=>{Pe.map=i,Rn("classArena.map",i),Fn()}),t.appendChild(a)}let n=Object.keys(Un).filter(i=>!jc(i)).length;if(n){let i=document.createElement("span");i.className="note",i.textContent=`\uC6D0\uC815\uC5D0\uC11C \uC5F4 \uC9C0\uB3C4 ${n}\uAC1C`,t.appendChild(i)}}function ia(){Mt="menu",pe=null,document.body.classList.add("menu"),ra(),Ed();for(let s of["#resultScreen","#pauseScreen","#setScreen","#startScreen","#campScreen","#storyScreen"])W(s).hidden=!0;W("#talk").hidden=!0,wo.length=0;for(let s of At)s.lock=null,s.$(".lock").hidden=!0;Rd(),W("#titleScreen").hidden=!1}function Rd(){let s=Pe.mode==="duo",e=Un[jc(Pe.map)?Pe.map:"diag"].name;if(Pe.mode==="daily"){let n=Td();W("#lastSet").textContent=`\uC790\uC720 \uB300\uC804: \uC624\uB298\uC758 \uB3C4\uC804 \xB7 ${n.label} \xB7 ${ft[n.topic].name} \xB7 ${e} \uC9C0\uB3C4`;return}W("#lastSet").textContent="\uC790\uC720 \uB300\uC804: "+(s?"\uB458\uC774\uC11C \uB300\uC804 \xB7 "+ft[Pe.topic].name+" / "+ft[Pe.topic2].name:"\uC5F0\uC2B5 \uB300\uC804 \xB7 "+ft[Pe.topic].name+" \xB7 \uCEF4\uD4E8\uD130 "+cs[Pe.ai].name)+" \xB7 "+xo[Pe.format].name+" \xB7 "+e+" \uC9C0\uB3C4";let t=zi.filter(n=>ze.stars[n.id]).length;W("#campBtn").textContent=t===0?"\uC6D0\uC815 \uB5A0\uB098\uAE30":ze.done?"\uC6D0\uC815 \uC9C0\uB3C4":`\uC6D0\uC815 \uC774\uC5B4 \uD558\uAE30 (${t}/${zi.length})`}function Ym(){Mt==="play"&&(Mt="pause",W("#pauseScreen").hidden=!1,dn.duck(!0),W("#quitBtn").textContent=pe&&pe.stage?"\uADF8\uB9CC\uD558\uACE0 \uC6D0\uC815 \uC9C0\uB3C4\uB85C":"\uADF8\uB9CC\uD558\uACE0 \uCC98\uC74C\uC73C\uB85C")}function Km(){Mt="play",W("#pauseScreen").hidden=!0,dn.duck(!1)}var wd=null;function eS(){eh(),W("#fpsToggle").checked=$t.showFps,W("#fpsToggle").addEventListener("change",s=>{$t.setShowFps(s.target.checked),W("#fps").hidden=!s.target.checked}),W("#fps").hidden=!$t.showFps,W("#soundToggle").checked=Oe.on,W("#soundToggle").addEventListener("change",s=>Oe.set(s.target.checked)),W("#musicToggle").checked=dn.on,W("#musicToggle").addEventListener("change",s=>{dn.set(s.target.checked),s.target.checked&&(Oe.unlock(),dn.start())}),W("#setClose").addEventListener("click",()=>{W("#setScreen").hidden=!0,wd&&(W(wd).hidden=!1)})}function eh(){let s=W("#qualOpts");s.innerHTML="";let e=(n,i,r)=>{let a=document.createElement("button");a.className="opt"+($t.choice===n?" on":""),a.innerHTML=`<span>${i}</span><small>${r}</small>`,a.addEventListener("click",()=>{$t.choose(n),eh()}),s.appendChild(a)};e("auto","\uC790\uB3D9","\uC9C0\uAE08: "+hs[$t.level].name);let t={high:"\uADF8\uB9BC\uC790 \uBD80\uB4DC\uB7FD\uAC8C",mid:"\uAE30\uBCF8",low:"\uADF8\uB9BC\uC790 \uAC04\uB2E8\uD788",lowest:"\uB290\uB9B0 \uAE30\uAE30\uC6A9"};for(let n of Br)e(n,hs[n].name,t[n]);W("#qualNote").textContent="\uC790\uB3D9\uC740 \uC804\uD22C \uCC98\uC74C 5\uCD08 \uB3D9\uC548 \uC7AC\uC11C \uB9DE\uCD94\uACE0, \uB290\uB824\uC9C0\uBA74 \uD55C \uB2E8\uACC4\uC529 \uB0AE\uCDB0\uC694. \uACC4\uB2E8 \uD604\uC0C1 \uBCF4\uC815\uC740 \uB2E4\uC74C\uC5D0 \uC5F4 \uB54C\uBD80\uD130 \uBC14\uB00C\uC5B4\uC694."}function vd(s){wd=s,W(s).hidden=!0,W("#setScreen").hidden=!1,eh()}var Um=performance.now(),Md=0,Om=0;function Zm(s){requestAnimationFrame(Zm);let e=Math.min((s-Um)/1e3,.05);Um=s,$t.tick(e,Mt==="play");let t=Mt==="play"||Mt==="result",n=e;if(Qr>0&&(Qr-=e,n=0),Jc>0&&(Jc-=e),W("#vignette").classList.toggle("danger",Jc>0&&Mt==="play"),pe&&t){if(pe.battle.update(n),Mt==="play"){pe.ai&&pe.ai.update(n);for(let a of At)a.tick(e)}let r=pe.battle.events;pe.battle.events=[],pe.runner&&Mt==="play"&&pe.runner.update(n,r),Yt.handle(r,pe.battle),Xm(r),Wm(!1),pe.endT>=0&&Mt==="play"&&(pe.endT+=e,pe.endT>2.8&&YM())}if(Mt==="menu"&&WM(e),Yt.update(Mt==="pause"?0:n,pe?pe.battle:Jn?Jn.b:zm),Zc>0&&(Zc-=e,Zc<=0&&(W("#toast").hidden=!0)),na>0&&Mt==="play"&&(na-=e,na<=0&&Gm()),Mt!=="play")for(let r of At)r.toastT>0&&r.tick(0);$t.showFps&&s-Om>500&&(Om=s,W("#fps").textContent=Math.round($t.fps)+" fps \xB7 "+hs[$t.level].name);let i=$t.preset.cap;if(i){if(Md+=e,Md<1/i-.004)return;Md=0}Yt.render()}function tS(){window.__arena={get battle(){return pe&&pe.battle},get mode(){return Mt},get q(){return At[0]&&At[0].q},quality:$t,view:Yt,get seats(){return At},start:(s,e,t,n)=>{s&&(Pe.topic=s),e&&(Pe.ai=e),t&&(Pe.format=t),Pe.mode=n||"cpu",ta()},answerRight(s=0){let e=At[s];return!pe||e.lock?!1:(e.input=String(e.q.answer),e.submit(),!0)},answerWrong(s=0){let e=At[s];return!pe||e.lock?!1:(e.input=String(e.q.answer+1),e.submit(),!0)},deploy:(s,e,t=0)=>{let n=At[t];e&&n.setLane(e),n.deploy(s,n.cards[s])},stage:s=>ta(_o(s)),playStage:s=>$m(_o(s)),openCamp:Sd,showCamp:fs,get camp(){return ze},fast(s,e=0,t="shield",n=null){let i=pe.battle,r=0,a=0;for(;r<s&&i.state==="play";){r+=.05,a++,i.update(.05),pe.ai&&pe.ai.update(.05);let l=i.events;i.events=[],pe.runner&&pe.runner.update(.05,l),Xm(l),Yt.handle(l,i),e&&a%Math.round(e*20)===0&&(i.sides[-1].gold+=80,i.deploy(-1,t,n||"mid"))}return{time:i.time,talks:vo.slice(),state:i.state,mode:pe.ai&&pe.ai.mode&&pe.ai.mode.type}},setCamp(s){ze={stars:{},seenIntro:!1,done:!1,...s},Zr(ze),Fn(),Rd()},get story(){return rn},storyNext:Qc,get G(){return pe}}}VM().catch(Bm);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
