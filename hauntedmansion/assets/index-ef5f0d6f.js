(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Vr = "157",
  bn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Rn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  uo = 0,
  is = 1,
  ho = 2,
  Ra = 1,
  fo = 2,
  Yt = 3,
  ln = 0,
  gt = 1,
  qt = 2,
  sn = 0,
  jn = 1,
  rs = 2,
  ss = 3,
  as = 4,
  po = 5,
  Wn = 100,
  mo = 101,
  _o = 102,
  os = 103,
  ls = 104,
  go = 200,
  vo = 201,
  xo = 202,
  Mo = 203,
  wa = 204,
  Ca = 205,
  So = 206,
  Eo = 207,
  To = 208,
  yo = 209,
  Ao = 210,
  bo = 0,
  Ro = 1,
  wo = 2,
  Ir = 3,
  Co = 4,
  Po = 5,
  Lo = 6,
  Do = 7,
  Pa = 0,
  Uo = 1,
  Io = 2,
  an = 0,
  No = 1,
  Fo = 2,
  Oo = 3,
  Bo = 4,
  zo = 5,
  La = 300,
  Zn = 301,
  $n = 302,
  Nr = 303,
  Fr = 304,
  Ki = 306,
  Or = 1e3,
  Ut = 1001,
  Br = 1002,
  _t = 1003,
  cs = 1004,
  rr = 1005,
  bt = 1006,
  Go = 1007,
  fi = 1008,
  on = 1009,
  Ho = 1010,
  Vo = 1011,
  kr = 1012,
  Da = 1013,
  nn = 1014,
  rn = 1015,
  di = 1016,
  Ua = 1017,
  Ia = 1018,
  gn = 1020,
  ko = 1021,
  It = 1023,
  Wo = 1024,
  Xo = 1025,
  vn = 1026,
  Jn = 1027,
  Yo = 1028,
  Na = 1029,
  qo = 1030,
  Fa = 1031,
  Oa = 1033,
  sr = 33776,
  ar = 33777,
  or = 33778,
  lr = 33779,
  us = 35840,
  hs = 35841,
  fs = 35842,
  ds = 35843,
  jo = 36196,
  ps = 37492,
  ms = 37496,
  _s = 37808,
  gs = 37809,
  vs = 37810,
  xs = 37811,
  Ms = 37812,
  Ss = 37813,
  Es = 37814,
  Ts = 37815,
  ys = 37816,
  As = 37817,
  bs = 37818,
  Rs = 37819,
  ws = 37820,
  Cs = 37821,
  cr = 36492,
  Ps = 36494,
  Ls = 36495,
  Ko = 36283,
  Ds = 36284,
  Us = 36285,
  Is = 36286,
  Ba = 3e3,
  xn = 3001,
  Zo = 3200,
  $o = 3201,
  Jo = 0,
  Qo = 1,
  wt = "",
  at = "srgb",
  Kt = "srgb-linear",
  Wr = "display-p3",
  Zi = "display-p3-linear",
  ki = "linear",
  Xe = "srgb",
  Wi = "rec709",
  Xi = "p3",
  ur = 7680,
  el = 519,
  tl = 512,
  nl = 513,
  il = 514,
  rl = 515,
  sl = 516,
  al = 517,
  ol = 518,
  ll = 519,
  Ns = 35044,
  Fs = "300 es",
  zr = 1035,
  jt = 2e3,
  Yi = 2001;
class yn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const ct = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Os = 1234567;
const li = Math.PI / 180,
  pi = 180 / Math.PI;
function ei() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    ct[i & 255] +
    ct[(i >> 8) & 255] +
    ct[(i >> 16) & 255] +
    ct[(i >> 24) & 255] +
    "-" +
    ct[e & 255] +
    ct[(e >> 8) & 255] +
    "-" +
    ct[((e >> 16) & 15) | 64] +
    ct[(e >> 24) & 255] +
    "-" +
    ct[(t & 63) | 128] +
    ct[(t >> 8) & 255] +
    "-" +
    ct[(t >> 16) & 255] +
    ct[(t >> 24) & 255] +
    ct[n & 255] +
    ct[(n >> 8) & 255] +
    ct[(n >> 16) & 255] +
    ct[(n >> 24) & 255]
  ).toLowerCase();
}
function ht(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Xr(i, e) {
  return ((i % e) + e) % e;
}
function cl(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function ul(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function ci(i, e, t) {
  return (1 - t) * i + t * e;
}
function hl(i, e, t, n) {
  return ci(i, e, 1 - Math.exp(-t * n));
}
function fl(i, e = 1) {
  return e - Math.abs(Xr(i, e * 2) - e);
}
function dl(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function pl(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function ml(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function _l(i, e) {
  return i + Math.random() * (e - i);
}
function gl(i) {
  return i * (0.5 - Math.random());
}
function vl(i) {
  i !== void 0 && (Os = i);
  let e = (Os += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function xl(i) {
  return i * li;
}
function Ml(i) {
  return i * pi;
}
function Gr(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function Sl(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function qi(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function El(i, e, t, n, r) {
  const s = Math.cos,
    o = Math.sin,
    a = s(t / 2),
    l = o(t / 2),
    c = s((e + n) / 2),
    u = o((e + n) / 2),
    f = s((e - n) / 2),
    d = o((e - n) / 2),
    m = s((n - e) / 2),
    v = o((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(a * u, l * f, l * d, a * c);
      break;
    case "YZY":
      i.set(l * d, a * u, l * f, a * c);
      break;
    case "ZXZ":
      i.set(l * f, l * d, a * u, a * c);
      break;
    case "XZX":
      i.set(a * u, l * v, l * m, a * c);
      break;
    case "YXY":
      i.set(l * m, a * u, l * v, a * c);
      break;
    case "ZYZ":
      i.set(l * v, l * m, a * u, a * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r
      );
  }
}
function Xn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function pt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Tl = {
  DEG2RAD: li,
  RAD2DEG: pi,
  generateUUID: ei,
  clamp: ht,
  euclideanModulo: Xr,
  mapLinear: cl,
  inverseLerp: ul,
  lerp: ci,
  damp: hl,
  pingpong: fl,
  smoothstep: dl,
  smootherstep: pl,
  randInt: ml,
  randFloat: _l,
  randFloatSpread: gl,
  seededRandom: vl,
  degToRad: xl,
  radToDeg: Ml,
  isPowerOfTwo: Gr,
  ceilPowerOfTwo: Sl,
  floorPowerOfTwo: qi,
  setQuaternionFromProperEuler: El,
  normalize: pt,
  denormalize: Xn,
};
class Oe {
  constructor(e = 0, t = 0) {
    (Oe.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * r + e.x), (this.y = s * r + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  constructor(e, t, n, r, s, o, a, l, c) {
    (Fe.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      f = n[7],
      d = n[2],
      m = n[5],
      v = n[8],
      g = r[0],
      p = r[3],
      h = r[6],
      C = r[1],
      S = r[4],
      T = r[7],
      w = r[2],
      P = r[5],
      b = r[8];
    return (
      (s[0] = o * g + a * C + l * w),
      (s[3] = o * p + a * S + l * P),
      (s[6] = o * h + a * T + l * b),
      (s[1] = c * g + u * C + f * w),
      (s[4] = c * p + u * S + f * P),
      (s[7] = c * h + u * T + f * b),
      (s[2] = d * g + m * C + v * w),
      (s[5] = d * p + m * S + v * P),
      (s[8] = d * h + m * T + v * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * o - a * c,
      d = a * l - u * s,
      m = c * s - o * l,
      v = t * f + n * d + r * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / v;
    return (
      (e[0] = f * g),
      (e[1] = (r * c - u * n) * g),
      (e[2] = (a * n - r * o) * g),
      (e[3] = d * g),
      (e[4] = (u * t - r * l) * g),
      (e[5] = (r * s - a * t) * g),
      (e[6] = m * g),
      (e[7] = (n * l - c * t) * g),
      (e[8] = (o * t - n * s) * g),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(hr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(hr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(hr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const hr = new Fe();
function za(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function mi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function yl() {
  const i = mi("canvas");
  return (i.style.display = "block"), i;
}
const Bs = {};
function ui(i) {
  i in Bs || ((Bs[i] = !0), console.warn(i));
}
const zs = new Fe().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Gs = new Fe().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  xi = {
    [Kt]: {
      transfer: ki,
      primaries: Wi,
      toReference: (i) => i,
      fromReference: (i) => i,
    },
    [at]: {
      transfer: Xe,
      primaries: Wi,
      toReference: (i) => i.convertSRGBToLinear(),
      fromReference: (i) => i.convertLinearToSRGB(),
    },
    [Zi]: {
      transfer: ki,
      primaries: Xi,
      toReference: (i) => i.applyMatrix3(Gs),
      fromReference: (i) => i.applyMatrix3(zs),
    },
    [Wr]: {
      transfer: Xe,
      primaries: Xi,
      toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Gs),
      fromReference: (i) => i.applyMatrix3(zs).convertLinearToSRGB(),
    },
  },
  Al = new Set([Kt, Zi]),
  Ve = {
    enabled: !0,
    _workingColorSpace: Kt,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(i) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !i);
    },
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(i) {
      if (!Al.has(i))
        throw new Error(`Unsupported working color space, "${i}".`);
      this._workingColorSpace = i;
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = xi[e].toReference,
        r = xi[t].fromReference;
      return r(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this._workingColorSpace);
    },
    getPrimaries: function (i) {
      return xi[i].primaries;
    },
    getTransfer: function (i) {
      return i === wt ? ki : xi[i].transfer;
    },
  };
function Kn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function fr(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let wn;
class Ga {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      wn === void 0 && (wn = mi("canvas")),
        (wn.width = e.width),
        (wn.height = e.height);
      const n = wn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = wn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = mi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Kn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Kn(t[n] / 255) * 255))
          : (t[n] = Kn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let bl = 0;
class Ha {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: bl++ }),
      (this.uuid = ei()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(dr(r[o].image)) : s.push(dr(r[o]));
      } else s = dr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function dr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? Ga.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Rl = 0;
class vt extends yn {
  constructor(
    e = vt.DEFAULT_IMAGE,
    t = vt.DEFAULT_MAPPING,
    n = Ut,
    r = Ut,
    s = bt,
    o = fi,
    a = It,
    l = on,
    c = vt.DEFAULT_ANISOTROPY,
    u = wt
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Rl++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.source = new Ha(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Oe(0, 0)),
      (this.repeat = new Oe(1, 1)),
      (this.center = new Oe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Fe()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof u == "string"
        ? (this.colorSpace = u)
        : (ui(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = u === xn ? at : wt)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== La) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Or:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ut:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Br:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Or:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ut:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Br:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === at ? xn : Ba
    );
  }
  set encoding(e) {
    ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === xn ? at : wt);
  }
}
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = La;
vt.DEFAULT_ANISOTROPY = 1;
class ot {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (ot.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      d = l[1],
      m = l[5],
      v = l[9],
      g = l[2],
      p = l[6],
      h = l[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(f - g) < 0.01 &&
      Math.abs(v - p) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(f + g) < 0.1 &&
        Math.abs(v + p) < 0.1 &&
        Math.abs(c + m + h - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2,
        T = (m + 1) / 2,
        w = (h + 1) / 2,
        P = (u + d) / 4,
        b = (f + g) / 4,
        k = (v + p) / 4;
      return (
        S > T && S > w
          ? S < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(S)), (r = P / n), (s = b / n))
          : T > w
          ? T < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(T)), (n = P / r), (s = k / r))
          : w < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(w)), (n = b / s), (r = k / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let C = Math.sqrt(
      (p - v) * (p - v) + (f - g) * (f - g) + (d - u) * (d - u)
    );
    return (
      Math.abs(C) < 0.001 && (C = 1),
      (this.x = (p - v) / C),
      (this.y = (f - g) / C),
      (this.z = (d - u) / C),
      (this.w = Math.acos((c + m + h - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class wl extends yn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ot(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ot(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (ui(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (n.colorSpace = n.encoding === xn ? at : wt)),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: bt,
          depthBuffer: !0,
          stencilBuffer: !1,
          depthTexture: null,
          samples: 0,
        },
        n
      )),
      (this.texture = new vt(
        r,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps = n.generateMipmaps),
      (this.texture.internalFormat = n.internalFormat),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Ha(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Sn extends wl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Va extends vt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = _t),
      (this.minFilter = _t),
      (this.wrapR = Ut),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Cl extends vt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = _t),
      (this.minFilter = _t),
      (this.wrapR = Ut),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class En {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      f = n[r + 3];
    const d = s[o + 0],
      m = s[o + 1],
      v = s[o + 2],
      g = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (a === 1) {
      (e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = v), (e[t + 3] = g);
      return;
    }
    if (f !== g || l !== d || c !== m || u !== v) {
      let p = 1 - a;
      const h = l * d + c * m + u * v + f * g,
        C = h >= 0 ? 1 : -1,
        S = 1 - h * h;
      if (S > Number.EPSILON) {
        const w = Math.sqrt(S),
          P = Math.atan2(w, h * C);
        (p = Math.sin(p * P) / w), (a = Math.sin(a * P) / w);
      }
      const T = a * C;
      if (
        ((l = l * p + d * T),
        (c = c * p + m * T),
        (u = u * p + v * T),
        (f = f * p + g * T),
        p === 1 - a)
      ) {
        const w = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        (l *= w), (c *= w), (u *= w), (f *= w);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      f = s[o],
      d = s[o + 1],
      m = s[o + 2],
      v = s[o + 3];
    return (
      (e[t] = a * v + u * f + l * m - c * d),
      (e[t + 1] = l * v + u * d + c * f - a * m),
      (e[t + 2] = c * v + u * m + a * d - l * f),
      (e[t + 3] = u * v - a * f - l * d - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(r / 2),
      f = a(s / 2),
      d = l(n / 2),
      m = l(r / 2),
      v = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = d * u * f + c * m * v),
          (this._y = c * m * f - d * u * v),
          (this._z = c * u * v + d * m * f),
          (this._w = c * u * f - d * m * v);
        break;
      case "YXZ":
        (this._x = d * u * f + c * m * v),
          (this._y = c * m * f - d * u * v),
          (this._z = c * u * v - d * m * f),
          (this._w = c * u * f + d * m * v);
        break;
      case "ZXY":
        (this._x = d * u * f - c * m * v),
          (this._y = c * m * f + d * u * v),
          (this._z = c * u * v + d * m * f),
          (this._w = c * u * f - d * m * v);
        break;
      case "ZYX":
        (this._x = d * u * f - c * m * v),
          (this._y = c * m * f + d * u * v),
          (this._z = c * u * v - d * m * f),
          (this._w = c * u * f + d * m * v);
        break;
      case "YZX":
        (this._x = d * u * f + c * m * v),
          (this._y = c * m * f + d * u * v),
          (this._z = c * u * v - d * m * f),
          (this._w = c * u * f - d * m * v);
        break;
      case "XZY":
        (this._x = d * u * f - c * m * v),
          (this._y = c * m * f - d * u * v),
          (this._z = c * u * v + d * m * f),
          (this._w = c * u * f + d * m * v);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      d = n + a + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m);
    } else if (n > a && n > f) {
      const m = 2 * Math.sqrt(1 + n - a - f);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m);
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - n - f);
      (this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + f - n - a);
      (this._w = (o - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ht(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - r * a),
      (this._w = o * u - n * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      f = Math.sin((1 - t) * u) / c,
      d = Math.sin(t * u) / c;
    return (
      (this._w = o * f + this._w * d),
      (this._x = n * f + this._x * d),
      (this._y = r * f + this._y * d),
      (this._z = s * f + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    (N.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Hs.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Hs.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * r - a * n,
      u = l * n + a * t - s * r,
      f = l * r + s * n - o * t,
      d = -s * t - o * n - a * r;
    return (
      (this.x = c * l + d * -s + u * -a - f * -o),
      (this.y = u * l + d * -o + f * -s - c * -a),
      (this.z = f * l + d * -a + c * -o - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - n * l),
      (this.z = n * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const pr = new N(),
  Hs = new En();
class _i {
  constructor(
    e = new N(1 / 0, 1 / 0, 1 / 0),
    t = new N(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ht.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ht.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ht.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        Cn.copy(e.boundingBox),
        Cn.applyMatrix4(e.matrixWorld),
        this.union(Cn);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            Ht.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
              this.expandByPoint(Ht);
        } else
          r.boundingBox === null && r.computeBoundingBox(),
            Cn.copy(r.boundingBox),
            Cn.applyMatrix4(e.matrixWorld),
            this.union(Cn);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++) this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ht),
      Ht.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ii),
      Mi.subVectors(this.max, ii),
      Pn.subVectors(e.a, ii),
      Ln.subVectors(e.b, ii),
      Dn.subVectors(e.c, ii),
      Zt.subVectors(Ln, Pn),
      $t.subVectors(Dn, Ln),
      hn.subVectors(Pn, Dn);
    let t = [
      0,
      -Zt.z,
      Zt.y,
      0,
      -$t.z,
      $t.y,
      0,
      -hn.z,
      hn.y,
      Zt.z,
      0,
      -Zt.x,
      $t.z,
      0,
      -$t.x,
      hn.z,
      0,
      -hn.x,
      -Zt.y,
      Zt.x,
      0,
      -$t.y,
      $t.x,
      0,
      -hn.y,
      hn.x,
      0,
    ];
    return !mr(t, Pn, Ln, Dn, Mi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !mr(t, Pn, Ln, Dn, Mi))
      ? !1
      : (Si.crossVectors(Zt, $t),
        (t = [Si.x, Si.y, Si.z]),
        mr(t, Pn, Ln, Dn, Mi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ht).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Ht).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Gt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Gt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Gt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Gt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Gt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Gt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Gt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Gt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Gt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Gt = [
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
  ],
  Ht = new N(),
  Cn = new _i(),
  Pn = new N(),
  Ln = new N(),
  Dn = new N(),
  Zt = new N(),
  $t = new N(),
  hn = new N(),
  ii = new N(),
  Mi = new N(),
  Si = new N(),
  fn = new N();
function mr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    fn.fromArray(i, s);
    const a =
        r.x * Math.abs(fn.x) + r.y * Math.abs(fn.y) + r.z * Math.abs(fn.z),
      l = e.dot(fn),
      c = t.dot(fn),
      u = n.dot(fn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Pl = new _i(),
  ri = new N(),
  _r = new N();
class Yr {
  constructor(e = new N(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Pl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ri.subVectors(e, this.center);
    const t = ri.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ri, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (_r.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(ri.copy(e.center).add(_r)),
            this.expandByPoint(ri.copy(e.center).sub(_r))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vt = new N(),
  gr = new N(),
  Ei = new N(),
  Jt = new N(),
  vr = new N(),
  Ti = new N(),
  xr = new N();
class ka {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Vt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Vt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Vt.copy(this.origin).addScaledVector(this.direction, t),
        Vt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    gr.copy(e).add(t).multiplyScalar(0.5),
      Ei.copy(t).sub(e).normalize(),
      Jt.copy(this.origin).sub(gr);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Ei),
      a = Jt.dot(this.direction),
      l = -Jt.dot(Ei),
      c = Jt.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, d, m, v;
    if (u > 0)
      if (((f = o * l - a), (d = o * a - l), (v = s * u), f >= 0))
        if (d >= -v)
          if (d <= v) {
            const g = 1 / u;
            (f *= g),
              (d *= g),
              (m = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * l) + c);
          } else
            (d = s),
              (f = Math.max(0, -(o * d + a))),
              (m = -f * f + d * (d + 2 * l) + c);
        else
          (d = -s),
            (f = Math.max(0, -(o * d + a))),
            (m = -f * f + d * (d + 2 * l) + c);
      else
        d <= -v
          ? ((f = Math.max(0, -(-o * s + a))),
            (d = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -f * f + d * (d + 2 * l) + c))
          : d <= v
          ? ((f = 0),
            (d = Math.min(Math.max(-s, -l), s)),
            (m = d * (d + 2 * l) + c))
          : ((f = Math.max(0, -(o * s + a))),
            (d = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -f * f + d * (d + 2 * l) + c));
    else
      (d = o > 0 ? -s : s),
        (f = Math.max(0, -(o * d + a))),
        (m = -f * f + d * (d + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(gr).addScaledVector(Ei, d),
      m
    );
  }
  intersectSphere(e, t) {
    Vt.subVectors(e.center, this.origin);
    const n = Vt.dot(this.direction),
      r = Vt.dot(Vt) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = n - o,
      l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
        : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
      u >= 0
        ? ((s = (e.min.y - d.y) * u), (o = (e.max.y - d.y) * u))
        : ((s = (e.max.y - d.y) * u), (o = (e.min.y - d.y) * u)),
      n > o ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (o < r || isNaN(r)) && (r = o),
      f >= 0
        ? ((a = (e.min.z - d.z) * f), (l = (e.max.z - d.z) * f))
        : ((a = (e.max.z - d.z) * f), (l = (e.min.z - d.z) * f)),
      n > l || a > r) ||
      ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Vt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    vr.subVectors(t, e), Ti.subVectors(n, e), xr.crossVectors(vr, Ti);
    let o = this.direction.dot(xr),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Jt.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ti.crossVectors(Jt, Ti));
    if (l < 0) return null;
    const c = a * this.direction.dot(vr.cross(Jt));
    if (c < 0 || l + c > o) return null;
    const u = -a * Jt.dot(xr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class lt {
  constructor(e, t, n, r, s, o, a, l, c, u, f, d, m, v, g, p) {
    (lt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, f, d, m, v, g, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, f, d, m, v, g, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = r),
      (h[1] = s),
      (h[5] = o),
      (h[9] = a),
      (h[13] = l),
      (h[2] = c),
      (h[6] = u),
      (h[10] = f),
      (h[14] = d),
      (h[3] = m),
      (h[7] = v),
      (h[11] = g),
      (h[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new lt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Un.setFromMatrixColumn(e, 0).length(),
      s = 1 / Un.setFromMatrixColumn(e, 1).length(),
      o = 1 / Un.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u,
        m = o * f,
        v = a * u,
        g = a * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = m + v * c),
        (t[5] = d - g * c),
        (t[9] = -a * l),
        (t[2] = g - d * c),
        (t[6] = v + m * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const d = l * u,
        m = l * f,
        v = c * u,
        g = c * f;
      (t[0] = d + g * a),
        (t[4] = v * a - m),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - v),
        (t[6] = g + d * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const d = l * u,
        m = l * f,
        v = c * u,
        g = c * f;
      (t[0] = d - g * a),
        (t[4] = -o * f),
        (t[8] = v + m * a),
        (t[1] = m + v * a),
        (t[5] = o * u),
        (t[9] = g - d * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const d = o * u,
        m = o * f,
        v = a * u,
        g = a * f;
      (t[0] = l * u),
        (t[4] = v * c - m),
        (t[8] = d * c + g),
        (t[1] = l * f),
        (t[5] = g * c + d),
        (t[9] = m * c - v),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const d = o * l,
        m = o * c,
        v = a * l,
        g = a * c;
      (t[0] = l * u),
        (t[4] = g - d * f),
        (t[8] = v * f + m),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * f + v),
        (t[10] = d - g * f);
    } else if (e.order === "XZY") {
      const d = o * l,
        m = o * c,
        v = a * l,
        g = a * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = d * f + g),
        (t[5] = o * u),
        (t[9] = m * f - v),
        (t[2] = v * f - m),
        (t[6] = a * u),
        (t[10] = g * f + d);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ll, e, Dl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Mt.subVectors(e, t),
      Mt.lengthSq() === 0 && (Mt.z = 1),
      Mt.normalize(),
      Qt.crossVectors(n, Mt),
      Qt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Mt.x += 1e-4) : (Mt.z += 1e-4),
        Mt.normalize(),
        Qt.crossVectors(n, Mt)),
      Qt.normalize(),
      yi.crossVectors(Mt, Qt),
      (r[0] = Qt.x),
      (r[4] = yi.x),
      (r[8] = Mt.x),
      (r[1] = Qt.y),
      (r[5] = yi.y),
      (r[9] = Mt.y),
      (r[2] = Qt.z),
      (r[6] = yi.z),
      (r[10] = Mt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      f = n[5],
      d = n[9],
      m = n[13],
      v = n[2],
      g = n[6],
      p = n[10],
      h = n[14],
      C = n[3],
      S = n[7],
      T = n[11],
      w = n[15],
      P = r[0],
      b = r[4],
      k = r[8],
      x = r[12],
      A = r[1],
      W = r[5],
      Z = r[9],
      J = r[13],
      L = r[2],
      H = r[6],
      Y = r[10],
      V = r[14],
      ie = r[3],
      K = r[7],
      q = r[11],
      D = r[15];
    return (
      (s[0] = o * P + a * A + l * L + c * ie),
      (s[4] = o * b + a * W + l * H + c * K),
      (s[8] = o * k + a * Z + l * Y + c * q),
      (s[12] = o * x + a * J + l * V + c * D),
      (s[1] = u * P + f * A + d * L + m * ie),
      (s[5] = u * b + f * W + d * H + m * K),
      (s[9] = u * k + f * Z + d * Y + m * q),
      (s[13] = u * x + f * J + d * V + m * D),
      (s[2] = v * P + g * A + p * L + h * ie),
      (s[6] = v * b + g * W + p * H + h * K),
      (s[10] = v * k + g * Z + p * Y + h * q),
      (s[14] = v * x + g * J + p * V + h * D),
      (s[3] = C * P + S * A + T * L + w * ie),
      (s[7] = C * b + S * W + T * H + w * K),
      (s[11] = C * k + S * Z + T * Y + w * q),
      (s[15] = C * x + S * J + T * V + w * D),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      d = e[10],
      m = e[14],
      v = e[3],
      g = e[7],
      p = e[11],
      h = e[15];
    return (
      v *
        (+s * l * f -
          r * c * f -
          s * a * d +
          n * c * d +
          r * a * m -
          n * l * m) +
      g *
        (+t * l * m -
          t * c * d +
          s * o * d -
          r * o * m +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * f -
          t * a * m -
          s * o * f +
          n * o * m +
          s * a * u -
          n * c * u) +
      h *
        (-r * a * u - t * l * f + t * a * d + r * o * f - n * o * d + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      d = e[10],
      m = e[11],
      v = e[12],
      g = e[13],
      p = e[14],
      h = e[15],
      C = f * p * c - g * d * c + g * l * m - a * p * m - f * l * h + a * d * h,
      S = v * d * c - u * p * c - v * l * m + o * p * m + u * l * h - o * d * h,
      T = u * g * c - v * f * c + v * a * m - o * g * m - u * a * h + o * f * h,
      w = v * f * l - u * g * l - v * a * d + o * g * d + u * a * p - o * f * p,
      P = t * C + n * S + r * T + s * w;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / P;
    return (
      (e[0] = C * b),
      (e[1] =
        (g * d * s -
          f * p * s -
          g * r * m +
          n * p * m +
          f * r * h -
          n * d * h) *
        b),
      (e[2] =
        (a * p * s -
          g * l * s +
          g * r * c -
          n * p * c -
          a * r * h +
          n * l * h) *
        b),
      (e[3] =
        (f * l * s -
          a * d * s -
          f * r * c +
          n * d * c +
          a * r * m -
          n * l * m) *
        b),
      (e[4] = S * b),
      (e[5] =
        (u * p * s -
          v * d * s +
          v * r * m -
          t * p * m -
          u * r * h +
          t * d * h) *
        b),
      (e[6] =
        (v * l * s -
          o * p * s -
          v * r * c +
          t * p * c +
          o * r * h -
          t * l * h) *
        b),
      (e[7] =
        (o * d * s -
          u * l * s +
          u * r * c -
          t * d * c -
          o * r * m +
          t * l * m) *
        b),
      (e[8] = T * b),
      (e[9] =
        (v * f * s -
          u * g * s -
          v * n * m +
          t * g * m +
          u * n * h -
          t * f * h) *
        b),
      (e[10] =
        (o * g * s -
          v * a * s +
          v * n * c -
          t * g * c -
          o * n * h +
          t * a * h) *
        b),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * n * c +
          t * f * c +
          o * n * m -
          t * a * m) *
        b),
      (e[12] = w * b),
      (e[13] =
        (u * g * r -
          v * f * r +
          v * n * d -
          t * g * d -
          u * n * p +
          t * f * p) *
        b),
      (e[14] =
        (v * a * r -
          o * g * r -
          v * n * l +
          t * g * l +
          o * n * p -
          t * a * p) *
        b),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * n * l -
          t * f * l -
          o * n * d +
          t * a * d) *
        b),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + n,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      f = a + a,
      d = s * c,
      m = s * u,
      v = s * f,
      g = o * u,
      p = o * f,
      h = a * f,
      C = l * c,
      S = l * u,
      T = l * f,
      w = n.x,
      P = n.y,
      b = n.z;
    return (
      (r[0] = (1 - (g + h)) * w),
      (r[1] = (m + T) * w),
      (r[2] = (v - S) * w),
      (r[3] = 0),
      (r[4] = (m - T) * P),
      (r[5] = (1 - (d + h)) * P),
      (r[6] = (p + C) * P),
      (r[7] = 0),
      (r[8] = (v + S) * b),
      (r[9] = (p - C) * b),
      (r[10] = (1 - (d + g)) * b),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Un.set(r[0], r[1], r[2]).length();
    const o = Un.set(r[4], r[5], r[6]).length(),
      a = Un.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Ct.copy(this);
    const c = 1 / s,
      u = 1 / o,
      f = 1 / a;
    return (
      (Ct.elements[0] *= c),
      (Ct.elements[1] *= c),
      (Ct.elements[2] *= c),
      (Ct.elements[4] *= u),
      (Ct.elements[5] *= u),
      (Ct.elements[6] *= u),
      (Ct.elements[8] *= f),
      (Ct.elements[9] *= f),
      (Ct.elements[10] *= f),
      t.setFromRotationMatrix(Ct),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, r, s, o, a = jt) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - r),
      f = (t + e) / (t - e),
      d = (n + r) / (n - r);
    let m, v;
    if (a === jt) (m = -(o + s) / (o - s)), (v = (-2 * o * s) / (o - s));
    else if (a === Yi) (m = -o / (o - s)), (v = (-o * s) / (o - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = d),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, o, a = jt) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - r),
      f = 1 / (o - s),
      d = (t + e) * c,
      m = (n + r) * u;
    let v, g;
    if (a === jt) (v = (o + s) * f), (g = -2 * f);
    else if (a === Yi) (v = s * f), (g = -1 * f);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -d),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = -v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Un = new N(),
  Ct = new lt(),
  Ll = new N(0, 0, 0),
  Dl = new N(1, 1, 1),
  Qt = new N(),
  yi = new N(),
  Mt = new N(),
  Vs = new lt(),
  ks = new En();
class $i {
  constructor(e = 0, t = 0, n = 0, r = $i.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      d = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(ht(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-ht(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(ht(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-ht(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(ht(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-ht(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Vs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Vs, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ks.setFromEuler(this), this.setFromQuaternion(ks, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
$i.DEFAULT_ORDER = "XYZ";
class Wa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Ul = 0;
const Ws = new N(),
  In = new En(),
  kt = new lt(),
  Ai = new N(),
  si = new N(),
  Il = new N(),
  Nl = new En(),
  Xs = new N(1, 0, 0),
  Ys = new N(0, 1, 0),
  qs = new N(0, 0, 1),
  Fl = { type: "added" },
  Ol = { type: "removed" };
class Tt extends yn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Ul++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Tt.DEFAULT_UP.clone());
    const e = new N(),
      t = new $i(),
      n = new En(),
      r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new lt() },
        normalMatrix: { value: new Fe() },
      }),
      (this.matrix = new lt()),
      (this.matrixWorld = new lt()),
      (this.matrixAutoUpdate = Tt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Wa()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.multiply(In), this;
  }
  rotateOnWorldAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.premultiply(In), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Xs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ys, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(qs, e);
  }
  translateOnAxis(e, t) {
    return (
      Ws.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ws.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Xs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ys, e);
  }
  translateZ(e) {
    return this.translateOnAxis(qs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(kt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ai.copy(e) : Ai.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      si.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? kt.lookAt(si, Ai, this.up)
        : kt.lookAt(Ai, si, this.up),
      this.quaternion.setFromRotationMatrix(kt),
      r &&
        (kt.extractRotation(r.matrixWorld),
        In.setFromRotationMatrix(kt),
        this.quaternion.premultiply(In.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Fl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Ol)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      kt.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(kt),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(si, e, Il), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(si, Nl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        f = o(e.shapes),
        d = o(e.skeletons),
        m = o(e.animations),
        v = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        f.length > 0 && (n.shapes = f),
        d.length > 0 && (n.skeletons = d),
        m.length > 0 && (n.animations = m),
        v.length > 0 && (n.nodes = v);
    }
    return (n.object = r), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Tt.DEFAULT_UP = new N(0, 1, 0);
Tt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Pt = new N(),
  Wt = new N(),
  Mr = new N(),
  Xt = new N(),
  Nn = new N(),
  Fn = new N(),
  js = new N(),
  Sr = new N(),
  Er = new N(),
  Tr = new N();
let bi = !1;
class Dt {
  constructor(e = new N(), t = new N(), n = new N()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Pt.subVectors(e, t), r.cross(Pt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Pt.subVectors(r, t), Wt.subVectors(n, t), Mr.subVectors(e, t);
    const o = Pt.dot(Pt),
      a = Pt.dot(Wt),
      l = Pt.dot(Mr),
      c = Wt.dot(Wt),
      u = Wt.dot(Mr),
      f = o * c - a * a;
    if (f === 0) return s.set(-2, -1, -1);
    const d = 1 / f,
      m = (c * l - a * u) * d,
      v = (o * u - a * l) * d;
    return s.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, r) {
    return (
      this.getBarycoord(e, t, n, r, Xt),
      Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1
    );
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return (
      bi === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (bi = !0)),
      this.getInterpolation(e, t, n, r, s, o, a, l)
    );
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, r, Xt),
      l.setScalar(0),
      l.addScaledVector(s, Xt.x),
      l.addScaledVector(o, Xt.y),
      l.addScaledVector(a, Xt.z),
      l
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Pt.subVectors(n, t), Wt.subVectors(e, t), Pt.cross(Wt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Pt.subVectors(this.c, this.b),
      Wt.subVectors(this.a, this.b),
      Pt.cross(Wt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return (
      bi === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (bi = !0)),
      Dt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
    );
  }
  getInterpolation(e, t, n, r, s) {
    return Dt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Dt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    Nn.subVectors(r, n), Fn.subVectors(s, n), Sr.subVectors(e, n);
    const l = Nn.dot(Sr),
      c = Fn.dot(Sr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Er.subVectors(e, r);
    const u = Nn.dot(Er),
      f = Fn.dot(Er);
    if (u >= 0 && f <= u) return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(Nn, o);
    Tr.subVectors(e, s);
    const m = Nn.dot(Tr),
      v = Fn.dot(Tr);
    if (v >= 0 && m <= v) return t.copy(s);
    const g = m * c - l * v;
    if (g <= 0 && c >= 0 && v <= 0)
      return (a = c / (c - v)), t.copy(n).addScaledVector(Fn, a);
    const p = u * v - m * f;
    if (p <= 0 && f - u >= 0 && m - v >= 0)
      return (
        js.subVectors(s, r),
        (a = (f - u) / (f - u + (m - v))),
        t.copy(r).addScaledVector(js, a)
      );
    const h = 1 / (p + g + d);
    return (
      (o = g * h),
      (a = d * h),
      t.copy(n).addScaledVector(Nn, o).addScaledVector(Fn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Bl = 0;
class Ji extends yn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Bl++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = jn),
      (this.side = ln),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = wa),
      (this.blendDst = Ca),
      (this.blendEquation = Wn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Ir),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = el),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ur),
      (this.stencilZFail = ur),
      (this.stencilZPass = ur),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== jn && (n.blending = this.blending),
      this.side !== ln && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Xa = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  en = { h: 0, s: 0, l: 0 },
  Ri = { h: 0, s: 0, l: 0 };
function yr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class Ye {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = at) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Ve.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = Ve.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Ve.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = Ve.workingColorSpace) {
    if (((e = Xr(e, 1)), (t = ht(t, 0, 1)), (n = ht(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = yr(o, s, e + 1 / 3)),
        (this.g = yr(o, s, e)),
        (this.b = yr(o, s, e - 1 / 3));
    }
    return Ve.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = at) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = at) {
    const n = Xa[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Kn(e.r)), (this.g = Kn(e.g)), (this.b = Kn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = fr(e.r)), (this.g = fr(e.g)), (this.b = fr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = at) {
    return (
      Ve.fromWorkingColorSpace(ut.copy(this), e),
      Math.round(ht(ut.r * 255, 0, 255)) * 65536 +
        Math.round(ht(ut.g * 255, 0, 255)) * 256 +
        Math.round(ht(ut.b * 255, 0, 255))
    );
  }
  getHexString(e = at) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ve.workingColorSpace) {
    Ve.fromWorkingColorSpace(ut.copy(this), t);
    const n = ut.r,
      r = ut.g,
      s = ut.b,
      o = Math.max(n, r, s),
      a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const f = o - a;
      switch (((c = u <= 0.5 ? f / (o + a) : f / (2 - o - a)), o)) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Ve.workingColorSpace) {
    return (
      Ve.fromWorkingColorSpace(ut.copy(this), t),
      (e.r = ut.r),
      (e.g = ut.g),
      (e.b = ut.b),
      e
    );
  }
  getStyle(e = at) {
    Ve.fromWorkingColorSpace(ut.copy(this), e);
    const t = ut.r,
      n = ut.g,
      r = ut.b;
    return e !== at
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(en), this.setHSL(en.h + e, en.s + t, en.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(en), e.getHSL(Ri);
    const n = ci(en.h, Ri.h, t),
      r = ci(en.s, Ri.s, t),
      s = ci(en.l, Ri.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ut = new Ye();
Ye.NAMES = Xa;
class hi extends Ji {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ye(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Pa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Je = new N(),
  wi = new Oe();
class Bt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Ns),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = rn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        wi.fromBufferAttribute(this, t),
          wi.applyMatrix3(e),
          this.setXY(t, wi.x, wi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t),
          Je.applyMatrix3(e),
          this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.applyMatrix4(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.applyNormalMatrix(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.transformDirection(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Xn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = pt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Xn(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Xn(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Xn(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Xn(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = pt(t, this.array)), (n = pt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pt(t, this.array)),
        (n = pt(n, this.array)),
        (r = pt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pt(t, this.array)),
        (n = pt(n, this.array)),
        (r = pt(r, this.array)),
        (s = pt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Ns && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class Ya extends Bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class qa extends Bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Mn extends Bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let zl = 0;
const At = new lt(),
  Ar = new Tt(),
  On = new N(),
  St = new _i(),
  ai = new _i(),
  rt = new N();
class An extends yn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: zl++ }),
      (this.uuid = ei()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (za(e) ? qa : Ya)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return At.makeRotationFromQuaternion(e), this.applyMatrix4(At), this;
  }
  rotateX(e) {
    return At.makeRotationX(e), this.applyMatrix4(At), this;
  }
  rotateY(e) {
    return At.makeRotationY(e), this.applyMatrix4(At), this;
  }
  rotateZ(e) {
    return At.makeRotationZ(e), this.applyMatrix4(At), this;
  }
  translate(e, t, n) {
    return At.makeTranslation(e, t, n), this.applyMatrix4(At), this;
  }
  scale(e, t, n) {
    return At.makeScale(e, t, n), this.applyMatrix4(At), this;
  }
  lookAt(e) {
    return Ar.lookAt(e), Ar.updateMatrix(), this.applyMatrix4(Ar.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(On).negate(),
      this.translate(On.x, On.y, On.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Mn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _i());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new N(-1 / 0, -1 / 0, -1 / 0),
          new N(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          St.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (rt.addVectors(this.boundingBox.min, St.min),
                this.boundingBox.expandByPoint(rt),
                rt.addVectors(this.boundingBox.max, St.max),
                this.boundingBox.expandByPoint(rt))
              : (this.boundingBox.expandByPoint(St.min),
                this.boundingBox.expandByPoint(St.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Yr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((St.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ai.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (rt.addVectors(St.min, ai.min),
                St.expandByPoint(rt),
                rt.addVectors(St.max, ai.max),
                St.expandByPoint(rt))
              : (St.expandByPoint(ai.min), St.expandByPoint(ai.max));
        }
      St.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        rt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(rt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            rt.fromBufferAttribute(a, c),
              l && (On.fromBufferAttribute(e, c), rt.add(On)),
              (r = Math.max(r, n.distanceToSquared(rt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Bt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let A = 0; A < a; A++) (c[A] = new N()), (u[A] = new N());
    const f = new N(),
      d = new N(),
      m = new N(),
      v = new Oe(),
      g = new Oe(),
      p = new Oe(),
      h = new N(),
      C = new N();
    function S(A, W, Z) {
      f.fromArray(r, A * 3),
        d.fromArray(r, W * 3),
        m.fromArray(r, Z * 3),
        v.fromArray(o, A * 2),
        g.fromArray(o, W * 2),
        p.fromArray(o, Z * 2),
        d.sub(f),
        m.sub(f),
        g.sub(v),
        p.sub(v);
      const J = 1 / (g.x * p.y - p.x * g.y);
      isFinite(J) &&
        (h
          .copy(d)
          .multiplyScalar(p.y)
          .addScaledVector(m, -g.y)
          .multiplyScalar(J),
        C.copy(m)
          .multiplyScalar(g.x)
          .addScaledVector(d, -p.x)
          .multiplyScalar(J),
        c[A].add(h),
        c[W].add(h),
        c[Z].add(h),
        u[A].add(C),
        u[W].add(C),
        u[Z].add(C));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: n.length }]);
    for (let A = 0, W = T.length; A < W; ++A) {
      const Z = T[A],
        J = Z.start,
        L = Z.count;
      for (let H = J, Y = J + L; H < Y; H += 3) S(n[H + 0], n[H + 1], n[H + 2]);
    }
    const w = new N(),
      P = new N(),
      b = new N(),
      k = new N();
    function x(A) {
      b.fromArray(s, A * 3), k.copy(b);
      const W = c[A];
      w.copy(W),
        w.sub(b.multiplyScalar(b.dot(W))).normalize(),
        P.crossVectors(k, W);
      const J = P.dot(u[A]) < 0 ? -1 : 1;
      (l[A * 4] = w.x),
        (l[A * 4 + 1] = w.y),
        (l[A * 4 + 2] = w.z),
        (l[A * 4 + 3] = J);
    }
    for (let A = 0, W = T.length; A < W; ++A) {
      const Z = T[A],
        J = Z.start,
        L = Z.count;
      for (let H = J, Y = J + L; H < Y; H += 3)
        x(n[H + 0]), x(n[H + 1]), x(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Bt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const r = new N(),
        s = new N(),
        o = new N(),
        a = new N(),
        l = new N(),
        c = new N(),
        u = new N(),
        f = new N();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const v = e.getX(d + 0),
            g = e.getX(d + 1),
            p = e.getX(d + 2);
          r.fromBufferAttribute(t, v),
            s.fromBufferAttribute(t, g),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(n, v),
            l.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, p),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(v, a.x, a.y, a.z),
            n.setXYZ(g, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          r.fromBufferAttribute(t, d + 0),
            s.fromBufferAttribute(t, d + 1),
            o.fromBufferAttribute(t, d + 2),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            n.setXYZ(d + 0, u.x, u.y, u.z),
            n.setXYZ(d + 1, u.x, u.y, u.z),
            n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t),
        rt.normalize(),
        e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        d = new c.constructor(l.length * u);
      let m = 0,
        v = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        a.isInterleavedBufferAttribute
          ? (m = l[g] * a.data.stride + a.offset)
          : (m = l[g] * u);
        for (let h = 0; h < u; h++) d[v++] = c[m++];
      }
      return new Bt(d, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new An(),
      n = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u],
          m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        f = s[c];
      for (let d = 0, m = f.length; d < m; d++) u.push(f[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ks = new lt(),
  dn = new ka(),
  Ci = new Yr(),
  Zs = new N(),
  Bn = new N(),
  zn = new N(),
  Gn = new N(),
  br = new N(),
  Pi = new N(),
  Li = new Oe(),
  Di = new Oe(),
  Ui = new Oe(),
  $s = new N(),
  Js = new N(),
  Qs = new N(),
  Ii = new N(),
  Ni = new N();
class Et extends Tt {
  constructor(e = new An(), t = new hi()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Pi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          f = s[l];
        u !== 0 &&
          (br.fromBufferAttribute(f, e),
          o ? Pi.addScaledVector(br, u) : Pi.addScaledVector(br.sub(t), u));
      }
      t.add(Pi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ci.copy(n.boundingSphere),
      Ci.applyMatrix4(s),
      dn.copy(e.ray).recast(e.near),
      !(
        Ci.containsPoint(dn.origin) === !1 &&
        (dn.intersectSphere(Ci, Zs) === null ||
          dn.origin.distanceToSquared(Zs) > (e.far - e.near) ** 2)
      ) &&
        (Ks.copy(s).invert(),
        dn.copy(e.ray).applyMatrix4(Ks),
        !(n.boundingBox !== null && dn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, dn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      f = s.attributes.normal,
      d = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let v = 0, g = d.length; v < g; v++) {
          const p = d[v],
            h = o[p.materialIndex],
            C = Math.max(p.start, m.start),
            S = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let T = C, w = S; T < w; T += 3) {
            const P = a.getX(T),
              b = a.getX(T + 1),
              k = a.getX(T + 2);
            (r = Fi(this, h, e, n, c, u, f, P, b, k)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          g = Math.min(a.count, m.start + m.count);
        for (let p = v, h = g; p < h; p += 3) {
          const C = a.getX(p),
            S = a.getX(p + 1),
            T = a.getX(p + 2);
          (r = Fi(this, o, e, n, c, u, f, C, S, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let v = 0, g = d.length; v < g; v++) {
          const p = d[v],
            h = o[p.materialIndex],
            C = Math.max(p.start, m.start),
            S = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let T = C, w = S; T < w; T += 3) {
            const P = T,
              b = T + 1,
              k = T + 2;
            (r = Fi(this, h, e, n, c, u, f, P, b, k)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          g = Math.min(l.count, m.start + m.count);
        for (let p = v, h = g; p < h; p += 3) {
          const C = p,
            S = p + 1,
            T = p + 2;
          (r = Fi(this, o, e, n, c, u, f, C, S, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
  }
}
function Gl(i, e, t, n, r, s, o, a) {
  let l;
  if (
    (e.side === gt
      ? (l = n.intersectTriangle(o, s, r, !0, a))
      : (l = n.intersectTriangle(r, s, o, e.side === ln, a)),
    l === null)
  )
    return null;
  Ni.copy(a), Ni.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ni);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ni.clone(), object: i };
}
function Fi(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Bn),
    i.getVertexPosition(l, zn),
    i.getVertexPosition(c, Gn);
  const u = Gl(i, e, t, n, Bn, zn, Gn, Ii);
  if (u) {
    r &&
      (Li.fromBufferAttribute(r, a),
      Di.fromBufferAttribute(r, l),
      Ui.fromBufferAttribute(r, c),
      (u.uv = Dt.getInterpolation(Ii, Bn, zn, Gn, Li, Di, Ui, new Oe()))),
      s &&
        (Li.fromBufferAttribute(s, a),
        Di.fromBufferAttribute(s, l),
        Ui.fromBufferAttribute(s, c),
        (u.uv1 = Dt.getInterpolation(Ii, Bn, zn, Gn, Li, Di, Ui, new Oe())),
        (u.uv2 = u.uv1)),
      o &&
        ($s.fromBufferAttribute(o, a),
        Js.fromBufferAttribute(o, l),
        Qs.fromBufferAttribute(o, c),
        (u.normal = Dt.getInterpolation(Ii, Bn, zn, Gn, $s, Js, Qs, new N())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a, b: l, c, normal: new N(), materialIndex: 0 };
    Dt.getNormal(Bn, zn, Gn, f.normal), (u.face = f);
  }
  return u;
}
class Ot extends An {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      f = [];
    let d = 0,
      m = 0;
    v("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      v("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      v("x", "z", "y", 1, 1, e, n, t, r, o, 2),
      v("x", "z", "y", 1, -1, e, n, -t, r, o, 3),
      v("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      v("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Mn(c, 3)),
      this.setAttribute("normal", new Mn(u, 3)),
      this.setAttribute("uv", new Mn(f, 2));
    function v(g, p, h, C, S, T, w, P, b, k, x) {
      const A = T / b,
        W = w / k,
        Z = T / 2,
        J = w / 2,
        L = P / 2,
        H = b + 1,
        Y = k + 1;
      let V = 0,
        ie = 0;
      const K = new N();
      for (let q = 0; q < Y; q++) {
        const D = q * W - J;
        for (let B = 0; B < H; B++) {
          const ce = B * A - Z;
          (K[g] = ce * C),
            (K[p] = D * S),
            (K[h] = L),
            c.push(K.x, K.y, K.z),
            (K[g] = 0),
            (K[p] = 0),
            (K[h] = P > 0 ? 1 : -1),
            u.push(K.x, K.y, K.z),
            f.push(B / b),
            f.push(1 - q / k),
            (V += 1);
        }
      }
      for (let q = 0; q < k; q++)
        for (let D = 0; D < b; D++) {
          const B = d + D + H * q,
            ce = d + D + H * (q + 1),
            he = d + (D + 1) + H * (q + 1),
            fe = d + (D + 1) + H * q;
          l.push(B, ce, fe), l.push(ce, he, fe), (ie += 6);
        }
      a.addGroup(m, ie, x), (m += ie), (d += V);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ot(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Qn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function mt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Qn(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Hl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function ja(i) {
  return i.getRenderTarget() === null
    ? i.outputColorSpace
    : Ve.workingColorSpace;
}
const Vl = { clone: Qn, merge: mt };
var kl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Wl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Tn extends Ji {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = kl),
      (this.fragmentShader = Wl),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Qn(e.uniforms)),
      (this.uniformsGroups = Hl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[r] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[r] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[r] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[r] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: o.toArray() })
        : (t.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ka extends Tt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new lt()),
      (this.projectionMatrix = new lt()),
      (this.projectionMatrixInverse = new lt()),
      (this.coordinateSystem = jt);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Rt extends Ka {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = pi * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(li * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return pi * 2 * Math.atan(Math.tan(li * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(li * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * n) / c),
        (r *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Hn = -90,
  Vn = 1;
class Xl extends Tt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new Rt(Hn, Vn, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new Rt(Hn, Vn, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new Rt(Hn, Vn, e, t);
    (o.layers = this.layers), this.add(o);
    const a = new Rt(Hn, Vn, e, t);
    (a.layers = this.layers), this.add(a);
    const l = new Rt(Hn, Vn, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Rt(Hn, Vn, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === jt)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Yi)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children,
      f = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      v = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      e.render(t, o),
      e.setRenderTarget(n, 2, r),
      e.render(t, a),
      e.setRenderTarget(n, 3, r),
      e.render(t, l),
      e.setRenderTarget(n, 4, r),
      e.render(t, c),
      (n.texture.generateMipmaps = g),
      e.setRenderTarget(n, 5, r),
      e.render(t, u),
      e.setRenderTarget(f, d, m),
      (e.xr.enabled = v),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Za extends vt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Zn),
      super(e, t, n, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Yl extends Sn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (ui(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (t.colorSpace = t.encoding === xn ? at : wt)),
      (this.texture = new Za(
        r,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : bt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Ot(5, 5, 5),
      s = new Tn({
        name: "CubemapFromEquirect",
        uniforms: Qn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: gt,
        blending: sn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Et(r, s),
      a = t.minFilter;
    return (
      t.minFilter === fi && (t.minFilter = bt),
      new Xl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Rr = new N(),
  ql = new N(),
  jl = new Fe();
class tn {
  constructor(e = new N(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Rr.subVectors(n, t).cross(ql.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Rr),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || jl.getNormalMatrix(e),
      r = this.coplanarPoint(Rr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = new Yr(),
  Oi = new N();
class $a {
  constructor(
    e = new tn(),
    t = new tn(),
    n = new tn(),
    r = new tn(),
    s = new tn(),
    o = new tn()
  ) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = jt) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      f = r[6],
      d = r[7],
      m = r[8],
      v = r[9],
      g = r[10],
      p = r[11],
      h = r[12],
      C = r[13],
      S = r[14],
      T = r[15];
    if (
      (n[0].setComponents(l - s, d - c, p - m, T - h).normalize(),
      n[1].setComponents(l + s, d + c, p + m, T + h).normalize(),
      n[2].setComponents(l + o, d + u, p + v, T + C).normalize(),
      n[3].setComponents(l - o, d - u, p - v, T - C).normalize(),
      n[4].setComponents(l - a, d - f, p - g, T - S).normalize(),
      t === jt)
    )
      n[5].setComponents(l + a, d + f, p + g, T + S).normalize();
    else if (t === Yi) n[5].setComponents(a, f, g, S).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(pn);
  }
  intersectsSprite(e) {
    return (
      pn.center.set(0, 0, 0),
      (pn.radius = 0.7071067811865476),
      pn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(pn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((Oi.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Oi.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Oi.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Oi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ja() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, o) {
    t(s, o), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function Kl(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function r(c, u) {
    const f = c.array,
      d = c.usage,
      m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, f, d), c.onUploadCallback();
    let v;
    if (f instanceof Float32Array) v = i.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) v = i.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else v = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array) v = i.SHORT;
    else if (f instanceof Uint32Array) v = i.UNSIGNED_INT;
    else if (f instanceof Int32Array) v = i.INT;
    else if (f instanceof Int8Array) v = i.BYTE;
    else if (f instanceof Uint8Array) v = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray) v = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + f
      );
    return {
      buffer: m,
      type: v,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, f) {
    const d = u.array,
      m = u.updateRange;
    i.bindBuffer(f, c),
      m.count === -1
        ? i.bufferSubData(f, 0, d)
        : (t
            ? i.bufferSubData(
                f,
                m.offset * d.BYTES_PER_ELEMENT,
                d,
                m.offset,
                m.count
              )
            : i.bufferSubData(
                f,
                m.offset * d.BYTES_PER_ELEMENT,
                d.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f === void 0
      ? n.set(c, r(c, u))
      : f.version < c.version && (s(f.buffer, c, u), (f.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class qr extends An {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      f = e / a,
      d = t / l,
      m = [],
      v = [],
      g = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const C = h * d - o;
      for (let S = 0; S < c; S++) {
        const T = S * f - s;
        v.push(T, -C, 0), g.push(0, 0, 1), p.push(S / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let C = 0; C < a; C++) {
        const S = C + c * h,
          T = C + c * (h + 1),
          w = C + 1 + c * (h + 1),
          P = C + 1 + c * h;
        m.push(S, T, P), m.push(T, w, P);
      }
    this.setIndex(m),
      this.setAttribute("position", new Mn(v, 3)),
      this.setAttribute("normal", new Mn(g, 3)),
      this.setAttribute("uv", new Mn(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new qr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Zl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  $l = `#ifdef USE_ALPHAHASH
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
#endif`,
  Jl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Ql = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ec = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  tc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  nc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  ic = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  rc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  sc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  ac = `float G_BlinnPhong_Implicit( ) {
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
} // validated`,
  oc = `#ifdef USE_IRIDESCENCE
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
#endif`,
  lc = `#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  cc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,
  uc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  hc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  fc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  dc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  pc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  mc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  _c = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  gc = `#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,
  vc = `#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,
  xc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Mc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Sc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Ec = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Tc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  yc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Ac = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  bc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Rc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  wc = `#ifdef USE_ENVMAP
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
#endif`,
  Cc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Pc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Lc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Dc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Uc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Ic = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Nc = `#ifdef USE_GRADIENTMAP
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
}`,
  Fc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Oc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Bc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  zc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Gc = `uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,
  Hc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,
  Vc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  kc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Wc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Xc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Yc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,
  qc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  jc = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Kc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Zc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  $c = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Qc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  eu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  tu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  nu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  iu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,
  ru = `#if defined( USE_POINTS_UV )
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
#endif`,
  su = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  au = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  ou = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  lu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  cu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  uu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  hu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  fu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  du = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  pu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  mu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  _u = `#ifdef USE_NORMALMAP
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
#endif`,
  gu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  vu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  xu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Mu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Su = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Eu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Tu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  yu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Au = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  bu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Ru = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  wu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Cu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Pu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Lu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,
  Du = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Uu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Iu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Nu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Fu = `#ifdef USE_SKINNING
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
#endif`,
  Ou = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Bu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  zu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Gu = `#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Hu = `#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Vu = `#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  ku = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Wu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Xu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Yu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const qu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  ju = `uniform sampler2D t2D;
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
}`,
  Ku = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Zu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  $u = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Ju = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Qu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,
  eh = `#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  th = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,
  nh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  ih = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  rh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  sh = `uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ah = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  oh = `#include <common>
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
	#include <morphcolor_vertex>
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
}`,
  lh = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  ch = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,
  uh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  hh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,
  fh = `#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  dh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  ph = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  mh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,
  _h = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  gh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,
  vh = `#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xh = `#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,
  Mh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  Sh = `uniform float size;
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
}`,
  Eh = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  Th = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,
  yh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,
  Ah = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,
  bh = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,
  Ie = {
    alphahash_fragment: Zl,
    alphahash_pars_fragment: $l,
    alphamap_fragment: Jl,
    alphamap_pars_fragment: Ql,
    alphatest_fragment: ec,
    alphatest_pars_fragment: tc,
    aomap_fragment: nc,
    aomap_pars_fragment: ic,
    begin_vertex: rc,
    beginnormal_vertex: sc,
    bsdfs: ac,
    iridescence_fragment: oc,
    bumpmap_pars_fragment: lc,
    clipping_planes_fragment: cc,
    clipping_planes_pars_fragment: uc,
    clipping_planes_pars_vertex: hc,
    clipping_planes_vertex: fc,
    color_fragment: dc,
    color_pars_fragment: pc,
    color_pars_vertex: mc,
    color_vertex: _c,
    common: gc,
    cube_uv_reflection_fragment: vc,
    defaultnormal_vertex: xc,
    displacementmap_pars_vertex: Mc,
    displacementmap_vertex: Sc,
    emissivemap_fragment: Ec,
    emissivemap_pars_fragment: Tc,
    colorspace_fragment: yc,
    colorspace_pars_fragment: Ac,
    envmap_fragment: bc,
    envmap_common_pars_fragment: Rc,
    envmap_pars_fragment: wc,
    envmap_pars_vertex: Cc,
    envmap_physical_pars_fragment: Hc,
    envmap_vertex: Pc,
    fog_vertex: Lc,
    fog_pars_vertex: Dc,
    fog_fragment: Uc,
    fog_pars_fragment: Ic,
    gradientmap_pars_fragment: Nc,
    lightmap_fragment: Fc,
    lightmap_pars_fragment: Oc,
    lights_lambert_fragment: Bc,
    lights_lambert_pars_fragment: zc,
    lights_pars_begin: Gc,
    lights_toon_fragment: Vc,
    lights_toon_pars_fragment: kc,
    lights_phong_fragment: Wc,
    lights_phong_pars_fragment: Xc,
    lights_physical_fragment: Yc,
    lights_physical_pars_fragment: qc,
    lights_fragment_begin: jc,
    lights_fragment_maps: Kc,
    lights_fragment_end: Zc,
    logdepthbuf_fragment: $c,
    logdepthbuf_pars_fragment: Jc,
    logdepthbuf_pars_vertex: Qc,
    logdepthbuf_vertex: eu,
    map_fragment: tu,
    map_pars_fragment: nu,
    map_particle_fragment: iu,
    map_particle_pars_fragment: ru,
    metalnessmap_fragment: su,
    metalnessmap_pars_fragment: au,
    morphcolor_vertex: ou,
    morphnormal_vertex: lu,
    morphtarget_pars_vertex: cu,
    morphtarget_vertex: uu,
    normal_fragment_begin: hu,
    normal_fragment_maps: fu,
    normal_pars_fragment: du,
    normal_pars_vertex: pu,
    normal_vertex: mu,
    normalmap_pars_fragment: _u,
    clearcoat_normal_fragment_begin: gu,
    clearcoat_normal_fragment_maps: vu,
    clearcoat_pars_fragment: xu,
    iridescence_pars_fragment: Mu,
    opaque_fragment: Su,
    packing: Eu,
    premultiplied_alpha_fragment: Tu,
    project_vertex: yu,
    dithering_fragment: Au,
    dithering_pars_fragment: bu,
    roughnessmap_fragment: Ru,
    roughnessmap_pars_fragment: wu,
    shadowmap_pars_fragment: Cu,
    shadowmap_pars_vertex: Pu,
    shadowmap_vertex: Lu,
    shadowmask_pars_fragment: Du,
    skinbase_vertex: Uu,
    skinning_pars_vertex: Iu,
    skinning_vertex: Nu,
    skinnormal_vertex: Fu,
    specularmap_fragment: Ou,
    specularmap_pars_fragment: Bu,
    tonemapping_fragment: zu,
    tonemapping_pars_fragment: Gu,
    transmission_fragment: Hu,
    transmission_pars_fragment: Vu,
    uv_pars_fragment: ku,
    uv_pars_vertex: Wu,
    uv_vertex: Xu,
    worldpos_vertex: Yu,
    background_vert: qu,
    background_frag: ju,
    backgroundCube_vert: Ku,
    backgroundCube_frag: Zu,
    cube_vert: $u,
    cube_frag: Ju,
    depth_vert: Qu,
    depth_frag: eh,
    distanceRGBA_vert: th,
    distanceRGBA_frag: nh,
    equirect_vert: ih,
    equirect_frag: rh,
    linedashed_vert: sh,
    linedashed_frag: ah,
    meshbasic_vert: oh,
    meshbasic_frag: lh,
    meshlambert_vert: ch,
    meshlambert_frag: uh,
    meshmatcap_vert: hh,
    meshmatcap_frag: fh,
    meshnormal_vert: dh,
    meshnormal_frag: ph,
    meshphong_vert: mh,
    meshphong_frag: _h,
    meshphysical_vert: gh,
    meshphysical_frag: vh,
    meshtoon_vert: xh,
    meshtoon_frag: Mh,
    points_vert: Sh,
    points_frag: Eh,
    shadow_vert: Th,
    shadow_frag: yh,
    sprite_vert: Ah,
    sprite_frag: bh,
  },
  oe = {
    common: {
      diffuse: { value: new Ye(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Fe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Fe() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Fe() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Fe() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Fe() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Fe() },
      normalScale: { value: new Oe(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Fe() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Fe() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Fe() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Fe() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ye(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ye(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Fe() },
    },
    sprite: {
      diffuse: { value: new Ye(16777215) },
      opacity: { value: 1 },
      center: { value: new Oe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Fe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
    },
  },
  Ft = {
    basic: {
      uniforms: mt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.fog,
      ]),
      vertexShader: Ie.meshbasic_vert,
      fragmentShader: Ie.meshbasic_frag,
    },
    lambert: {
      uniforms: mt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new Ye(0) } },
      ]),
      vertexShader: Ie.meshlambert_vert,
      fragmentShader: Ie.meshlambert_frag,
    },
    phong: {
      uniforms: mt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new Ye(0) },
          specular: { value: new Ye(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ie.meshphong_vert,
      fragmentShader: Ie.meshphong_frag,
    },
    standard: {
      uniforms: mt([
        oe.common,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.roughnessmap,
        oe.metalnessmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new Ye(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ie.meshphysical_vert,
      fragmentShader: Ie.meshphysical_frag,
    },
    toon: {
      uniforms: mt([
        oe.common,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.gradientmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new Ye(0) } },
      ]),
      vertexShader: Ie.meshtoon_vert,
      fragmentShader: Ie.meshtoon_frag,
    },
    matcap: {
      uniforms: mt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ie.meshmatcap_vert,
      fragmentShader: Ie.meshmatcap_frag,
    },
    points: {
      uniforms: mt([oe.points, oe.fog]),
      vertexShader: Ie.points_vert,
      fragmentShader: Ie.points_frag,
    },
    dashed: {
      uniforms: mt([
        oe.common,
        oe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ie.linedashed_vert,
      fragmentShader: Ie.linedashed_frag,
    },
    depth: {
      uniforms: mt([oe.common, oe.displacementmap]),
      vertexShader: Ie.depth_vert,
      fragmentShader: Ie.depth_frag,
    },
    normal: {
      uniforms: mt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ie.meshnormal_vert,
      fragmentShader: Ie.meshnormal_frag,
    },
    sprite: {
      uniforms: mt([oe.sprite, oe.fog]),
      vertexShader: Ie.sprite_vert,
      fragmentShader: Ie.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Fe() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ie.background_vert,
      fragmentShader: Ie.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ie.backgroundCube_vert,
      fragmentShader: Ie.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ie.cube_vert,
      fragmentShader: Ie.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ie.equirect_vert,
      fragmentShader: Ie.equirect_frag,
    },
    distanceRGBA: {
      uniforms: mt([
        oe.common,
        oe.displacementmap,
        {
          referencePosition: { value: new N() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ie.distanceRGBA_vert,
      fragmentShader: Ie.distanceRGBA_frag,
    },
    shadow: {
      uniforms: mt([
        oe.lights,
        oe.fog,
        { color: { value: new Ye(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ie.shadow_vert,
      fragmentShader: Ie.shadow_frag,
    },
  };
Ft.physical = {
  uniforms: mt([
    Ft.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Fe() },
      clearcoatNormalScale: { value: new Oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Fe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: new Ye(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Fe() },
      transmissionSamplerSize: { value: new Oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ye(0) },
      specularColor: { value: new Ye(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Fe() },
      anisotropyVector: { value: new Oe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Fe() },
    },
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag,
};
const Bi = { r: 0, b: 0, g: 0 };
function Rh(i, e, t, n, r, s, o) {
  const a = new Ye(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    d = 0,
    m = null;
  function v(p, h) {
    let C = !1,
      S = h.isScene === !0 ? h.background : null;
    S && S.isTexture && (S = (h.backgroundBlurriness > 0 ? t : e).get(S)),
      S === null ? g(a, l) : S && S.isColor && (g(S, 1), (C = !0));
    const T = i.xr.getEnvironmentBlendMode();
    T === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, o)
      : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o),
      (i.autoClear || C) &&
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      S && (S.isCubeTexture || S.mapping === Ki)
        ? (u === void 0 &&
            ((u = new Et(
              new Ot(1, 1, 1),
              new Tn({
                name: "BackgroundCubeMaterial",
                uniforms: Qn(Ft.backgroundCube.uniforms),
                vertexShader: Ft.backgroundCube.vertexShader,
                fragmentShader: Ft.backgroundCube.fragmentShader,
                side: gt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (w, P, b) {
              this.matrixWorld.copyPosition(b.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = S),
          (u.material.uniforms.flipEnvMap.value =
            S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            h.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (u.material.toneMapped = Ve.getTransfer(S.colorSpace) !== Xe),
          (f !== S || d !== S.version || m !== i.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = S),
            (d = S.version),
            (m = i.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : S &&
          S.isTexture &&
          (c === void 0 &&
            ((c = new Et(
              new qr(2, 2),
              new Tn({
                name: "BackgroundMaterial",
                uniforms: Qn(Ft.background.uniforms),
                vertexShader: Ft.background.vertexShader,
                fragmentShader: Ft.background.fragmentShader,
                side: ln,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = S),
          (c.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (c.material.toneMapped = Ve.getTransfer(S.colorSpace) !== Xe),
          S.matrixAutoUpdate === !0 && S.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(S.matrix),
          (f !== S || d !== S.version || m !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = S),
            (d = S.version),
            (m = i.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(p, h) {
    p.getRGB(Bi, ja(i)), n.buffers.color.setClear(Bi.r, Bi.g, Bi.b, h, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, h = 1) {
      a.set(p), (l = h), g(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), g(a, l);
    },
    render: v,
  };
}
function wh(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function f(L, H, Y, V, ie) {
    let K = !1;
    if (o) {
      const q = g(V, Y, H);
      c !== q && ((c = q), m(c.object)),
        (K = h(L, V, Y, ie)),
        K && C(L, V, Y, ie);
    } else {
      const q = H.wireframe === !0;
      (c.geometry !== V.id || c.program !== Y.id || c.wireframe !== q) &&
        ((c.geometry = V.id), (c.program = Y.id), (c.wireframe = q), (K = !0));
    }
    ie !== null && t.update(ie, i.ELEMENT_ARRAY_BUFFER),
      (K || u) &&
        ((u = !1),
        k(L, H, Y, V),
        ie !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(ie).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(L) {
    return n.isWebGL2 ? i.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function v(L) {
    return n.isWebGL2 ? i.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function g(L, H, Y) {
    const V = Y.wireframe === !0;
    let ie = a[L.id];
    ie === void 0 && ((ie = {}), (a[L.id] = ie));
    let K = ie[H.id];
    K === void 0 && ((K = {}), (ie[H.id] = K));
    let q = K[V];
    return q === void 0 && ((q = p(d())), (K[V] = q)), q;
  }
  function p(L) {
    const H = [],
      Y = [],
      V = [];
    for (let ie = 0; ie < r; ie++) (H[ie] = 0), (Y[ie] = 0), (V[ie] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: Y,
      attributeDivisors: V,
      object: L,
      attributes: {},
      index: null,
    };
  }
  function h(L, H, Y, V) {
    const ie = c.attributes,
      K = H.attributes;
    let q = 0;
    const D = Y.getAttributes();
    for (const B in D)
      if (D[B].location >= 0) {
        const he = ie[B];
        let fe = K[B];
        if (
          (fe === void 0 &&
            (B === "instanceMatrix" &&
              L.instanceMatrix &&
              (fe = L.instanceMatrix),
            B === "instanceColor" && L.instanceColor && (fe = L.instanceColor)),
          he === void 0 || he.attribute !== fe || (fe && he.data !== fe.data))
        )
          return !0;
        q++;
      }
    return c.attributesNum !== q || c.index !== V;
  }
  function C(L, H, Y, V) {
    const ie = {},
      K = H.attributes;
    let q = 0;
    const D = Y.getAttributes();
    for (const B in D)
      if (D[B].location >= 0) {
        let he = K[B];
        he === void 0 &&
          (B === "instanceMatrix" &&
            L.instanceMatrix &&
            (he = L.instanceMatrix),
          B === "instanceColor" && L.instanceColor && (he = L.instanceColor));
        const fe = {};
        (fe.attribute = he),
          he && he.data && (fe.data = he.data),
          (ie[B] = fe),
          q++;
      }
    (c.attributes = ie), (c.attributesNum = q), (c.index = V);
  }
  function S() {
    const L = c.newAttributes;
    for (let H = 0, Y = L.length; H < Y; H++) L[H] = 0;
  }
  function T(L) {
    w(L, 0);
  }
  function w(L, H) {
    const Y = c.newAttributes,
      V = c.enabledAttributes,
      ie = c.attributeDivisors;
    (Y[L] = 1),
      V[L] === 0 && (i.enableVertexAttribArray(L), (V[L] = 1)),
      ie[L] !== H &&
        ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](L, H),
        (ie[L] = H));
  }
  function P() {
    const L = c.newAttributes,
      H = c.enabledAttributes;
    for (let Y = 0, V = H.length; Y < V; Y++)
      H[Y] !== L[Y] && (i.disableVertexAttribArray(Y), (H[Y] = 0));
  }
  function b(L, H, Y, V, ie, K, q) {
    q === !0
      ? i.vertexAttribIPointer(L, H, Y, ie, K)
      : i.vertexAttribPointer(L, H, Y, V, ie, K);
  }
  function k(L, H, Y, V) {
    if (
      n.isWebGL2 === !1 &&
      (L.isInstancedMesh || V.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    S();
    const ie = V.attributes,
      K = Y.getAttributes(),
      q = H.defaultAttributeValues;
    for (const D in K) {
      const B = K[D];
      if (B.location >= 0) {
        let ce = ie[D];
        if (
          (ce === void 0 &&
            (D === "instanceMatrix" &&
              L.instanceMatrix &&
              (ce = L.instanceMatrix),
            D === "instanceColor" && L.instanceColor && (ce = L.instanceColor)),
          ce !== void 0)
        ) {
          const he = ce.normalized,
            fe = ce.itemSize,
            Ee = t.get(ce);
          if (Ee === void 0) continue;
          const Ce = Ee.buffer,
            xe = Ee.type,
            Ge = Ee.bytesPerElement,
            st =
              n.isWebGL2 === !0 &&
              (xe === i.INT || xe === i.UNSIGNED_INT || ce.gpuType === Da);
          if (ce.isInterleavedBufferAttribute) {
            const De = ce.data,
              I = De.stride,
              Qe = ce.offset;
            if (De.isInstancedInterleavedBuffer) {
              for (let Me = 0; Me < B.locationSize; Me++)
                w(B.location + Me, De.meshPerAttribute);
              L.isInstancedMesh !== !0 &&
                V._maxInstanceCount === void 0 &&
                (V._maxInstanceCount = De.meshPerAttribute * De.count);
            } else
              for (let Me = 0; Me < B.locationSize; Me++) T(B.location + Me);
            i.bindBuffer(i.ARRAY_BUFFER, Ce);
            for (let Me = 0; Me < B.locationSize; Me++)
              b(
                B.location + Me,
                fe / B.locationSize,
                xe,
                he,
                I * Ge,
                (Qe + (fe / B.locationSize) * Me) * Ge,
                st
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let De = 0; De < B.locationSize; De++)
                w(B.location + De, ce.meshPerAttribute);
              L.isInstancedMesh !== !0 &&
                V._maxInstanceCount === void 0 &&
                (V._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let De = 0; De < B.locationSize; De++) T(B.location + De);
            i.bindBuffer(i.ARRAY_BUFFER, Ce);
            for (let De = 0; De < B.locationSize; De++)
              b(
                B.location + De,
                fe / B.locationSize,
                xe,
                he,
                fe * Ge,
                (fe / B.locationSize) * De * Ge,
                st
              );
          }
        } else if (q !== void 0) {
          const he = q[D];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                i.vertexAttrib2fv(B.location, he);
                break;
              case 3:
                i.vertexAttrib3fv(B.location, he);
                break;
              case 4:
                i.vertexAttrib4fv(B.location, he);
                break;
              default:
                i.vertexAttrib1fv(B.location, he);
            }
        }
      }
    }
    P();
  }
  function x() {
    Z();
    for (const L in a) {
      const H = a[L];
      for (const Y in H) {
        const V = H[Y];
        for (const ie in V) v(V[ie].object), delete V[ie];
        delete H[Y];
      }
      delete a[L];
    }
  }
  function A(L) {
    if (a[L.id] === void 0) return;
    const H = a[L.id];
    for (const Y in H) {
      const V = H[Y];
      for (const ie in V) v(V[ie].object), delete V[ie];
      delete H[Y];
    }
    delete a[L.id];
  }
  function W(L) {
    for (const H in a) {
      const Y = a[H];
      if (Y[L.id] === void 0) continue;
      const V = Y[L.id];
      for (const ie in V) v(V[ie].object), delete V[ie];
      delete Y[L.id];
    }
  }
  function Z() {
    J(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function J() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: f,
    reset: Z,
    resetDefaultState: J,
    dispose: x,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: W,
    initAttributes: S,
    enableAttribute: T,
    disableUnusedAttributes: P,
  };
}
function Ch(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let d, m;
    if (r) (d = i), (m = "drawArraysInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[m](s, c, u, f), t.update(u, s, f);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function Ph(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(b) {
    if (b === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      b = "mediump";
    }
    return b === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" &&
    i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead."
    ),
    (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = i.getParameter(i.MAX_TEXTURE_SIZE),
    v = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    g = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    h = i.getParameter(i.MAX_VARYING_VECTORS),
    C = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    S = d > 0,
    T = o || e.has("OES_texture_float"),
    w = S && T,
    P = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: v,
    maxAttributes: g,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: C,
    vertexTextures: S,
    floatFragmentTextures: T,
    floatVertexTextures: w,
    maxSamples: P,
  };
}
function Lh(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const o = new tn(),
    a = new Fe(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, d) {
      const m = f.length !== 0 || d || n !== 0 || r;
      return (r = d), (n = f.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, d) {
      t = u(f, d, 0);
    }),
    (this.setState = function (f, d, m) {
      const v = f.clippingPlanes,
        g = f.clipIntersection,
        p = f.clipShadows,
        h = i.get(f);
      if (!r || v === null || v.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const C = s ? 0 : n,
          S = C * 4;
        let T = h.clippingState || null;
        (l.value = T), (T = u(v, d, S, m));
        for (let w = 0; w !== S; ++w) T[w] = t[w];
        (h.clippingState = T),
          (this.numIntersection = g ? this.numPlanes : 0),
          (this.numPlanes += C);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(f, d, m, v) {
    const g = f !== null ? f.length : 0;
    let p = null;
    if (g !== 0) {
      if (((p = l.value), v !== !0 || p === null)) {
        const h = m + g * 4,
          C = d.matrixWorldInverse;
        a.getNormalMatrix(C),
          (p === null || p.length < h) && (p = new Float32Array(h));
        for (let S = 0, T = m; S !== g; ++S, T += 4)
          o.copy(f[S]).applyMatrix4(C, a),
            o.normal.toArray(p, T),
            (p[T + 3] = o.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = g), (e.numIntersection = 0), p;
  }
}
function Dh(i) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Nr ? (o.mapping = Zn) : a === Fr && (o.mapping = $n), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Nr || a === Fr)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Yl(l.height / 2);
            return (
              c.fromEquirectangularTexture(i, o),
              e.set(o, c),
              o.addEventListener("dispose", r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Uh extends Ka {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const qn = 4,
  ea = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  _n = 20,
  wr = new Uh(),
  ta = new Ye();
let Cr = null;
const mn = (1 + Math.sqrt(5)) / 2,
  kn = 1 / mn,
  na = [
    new N(1, 1, 1),
    new N(-1, 1, 1),
    new N(1, 1, -1),
    new N(-1, 1, -1),
    new N(0, mn, kn),
    new N(0, mn, -kn),
    new N(kn, 0, mn),
    new N(-kn, 0, mn),
    new N(mn, kn, 0),
    new N(-mn, kn, 0),
  ];
class ia {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (Cr = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = aa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = sa()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Cr),
      (e.scissorTest = !1),
      zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Zn || e.mapping === $n
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Cr = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: bt,
        minFilter: bt,
        generateMipmaps: !1,
        type: di,
        format: It,
        colorSpace: Kt,
        depthBuffer: !1,
      },
      r = ra(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ra(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Ih(s)),
        (this._blurMaterial = Nh(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Et(this._lodPlanes[0], e);
    this._renderer.compile(t, wr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Rt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      d = u.toneMapping;
    u.getClearColor(ta), (u.toneMapping = an), (u.autoClear = !1);
    const m = new hi({
        name: "PMREM.Background",
        side: gt,
        depthWrite: !1,
        depthTest: !1,
      }),
      v = new Et(new Ot(), m);
    let g = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (g = !0))
      : (m.color.copy(ta), (g = !0));
    for (let h = 0; h < 6; h++) {
      const C = h % 3;
      C === 0
        ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0))
        : C === 1
        ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0))
        : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const S = this._cubeSize;
      zi(r, C * S, h > 2 ? S : 0, S, S),
        u.setRenderTarget(r),
        g && u.render(v, a),
        u.render(e, a);
    }
    v.geometry.dispose(),
      v.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = f),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === Zn || e.mapping === $n;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = aa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = sa());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new Et(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    zi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, wr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        o = na[(r - 1) % na.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, "latitudinal", s),
      this._halfBlur(o, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      f = new Et(this._lodPlanes[r], c),
      d = c.uniforms,
      m = this._sizeLods[n] - 1,
      v = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * _n - 1),
      g = s / v,
      p = isFinite(s) ? 1 + Math.floor(u * g) : _n;
    p > _n &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_n}`
      );
    const h = [];
    let C = 0;
    for (let b = 0; b < _n; ++b) {
      const k = b / g,
        x = Math.exp((-k * k) / 2);
      h.push(x), b === 0 ? (C += x) : b < p && (C += 2 * x);
    }
    for (let b = 0; b < h.length; b++) h[b] = h[b] / C;
    (d.envMap.value = e.texture),
      (d.samples.value = p),
      (d.weights.value = h),
      (d.latitudinal.value = o === "latitudinal"),
      a && (d.poleAxis.value = a);
    const { _lodMax: S } = this;
    (d.dTheta.value = v), (d.mipInt.value = S - n);
    const T = this._sizeLods[r],
      w = 3 * T * (r > S - qn ? r - S + qn : 0),
      P = 4 * (this._cubeSize - T);
    zi(t, w, P, 3 * T, 2 * T), l.setRenderTarget(t), l.render(f, wr);
  }
}
function Ih(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - qn + 1 + ea.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - qn ? (l = ea[o - i + qn - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      d = [u, u, f, u, f, f, u, u, f, f, u, f],
      m = 6,
      v = 6,
      g = 3,
      p = 2,
      h = 1,
      C = new Float32Array(g * v * m),
      S = new Float32Array(p * v * m),
      T = new Float32Array(h * v * m);
    for (let P = 0; P < m; P++) {
      const b = ((P % 3) * 2) / 3 - 1,
        k = P > 2 ? 0 : -1,
        x = [
          b,
          k,
          0,
          b + 2 / 3,
          k,
          0,
          b + 2 / 3,
          k + 1,
          0,
          b,
          k,
          0,
          b + 2 / 3,
          k + 1,
          0,
          b,
          k + 1,
          0,
        ];
      C.set(x, g * v * P), S.set(d, p * v * P);
      const A = [P, P, P, P, P, P];
      T.set(A, h * v * P);
    }
    const w = new An();
    w.setAttribute("position", new Bt(C, g)),
      w.setAttribute("uv", new Bt(S, p)),
      w.setAttribute("faceIndex", new Bt(T, h)),
      e.push(w),
      r > qn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ra(i, e, t) {
  const n = new Sn(i, e, t);
  return (
    (n.texture.mapping = Ki),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function zi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Nh(i, e, t) {
  const n = new Float32Array(_n),
    r = new N(0, 1, 0);
  return new Tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: _n,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: jr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: sn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function sa() {
  return new Tn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: jr(),
    fragmentShader: `

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
		`,
    blending: sn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function aa() {
  return new Tn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: jr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: sn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function jr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Fh(i) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Nr || l === Fr,
        u = l === Zn || l === $n;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return (
            t === null && (t = new ia(i)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            e.set(a, f),
            f.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const f = a.image;
            if ((c && f && f.height > 0) || (u && f && r(f))) {
              t === null && (t = new ia(i));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Oh(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        r
      );
    },
  };
}
function Bh(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const v in d.attributes) e.remove(d.attributes[v]);
    for (const v in d.morphAttributes) {
      const g = d.morphAttributes[v];
      for (let p = 0, h = g.length; p < h; p++) e.remove(g[p]);
    }
    d.removeEventListener("dispose", o), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(f, d) {
    return (
      r[d.id] === !0 ||
        (d.addEventListener("dispose", o),
        (r[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(f) {
    const d = f.attributes;
    for (const v in d) e.update(d[v], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const v in m) {
      const g = m[v];
      for (let p = 0, h = g.length; p < h; p++) e.update(g[p], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const d = [],
      m = f.index,
      v = f.attributes.position;
    let g = 0;
    if (m !== null) {
      const C = m.array;
      g = m.version;
      for (let S = 0, T = C.length; S < T; S += 3) {
        const w = C[S + 0],
          P = C[S + 1],
          b = C[S + 2];
        d.push(w, P, P, b, b, w);
      }
    } else if (v !== void 0) {
      const C = v.array;
      g = v.version;
      for (let S = 0, T = C.length / 3 - 1; S < T; S += 3) {
        const w = S + 0,
          P = S + 1,
          b = S + 2;
        d.push(w, P, P, b, b, w);
      }
    } else return;
    const p = new (za(d) ? qa : Ya)(d, 1);
    p.version = g;
    const h = s.get(f);
    h && e.remove(h), s.set(f, p);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function zh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, l;
  function c(d) {
    (a = d.type), (l = d.bytesPerElement);
  }
  function u(d, m) {
    i.drawElements(s, m, a, d * l), t.update(m, s, 1);
  }
  function f(d, m, v) {
    if (v === 0) return;
    let g, p;
    if (r) (g = i), (p = "drawElementsInstanced");
    else if (
      ((g = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      g === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    g[p](s, m, a, d * l, v), t.update(m, s, v);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = f);
}
function Gh(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Hh(i, e) {
  return i[0] - e[0];
}
function Vh(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function kh(i, e, t) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new ot(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const v =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        g = v !== void 0 ? v.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== g) {
        let H = function () {
          J.dispose(), s.delete(u), u.removeEventListener("dispose", H);
        };
        var m = H;
        p !== void 0 && p.texture.dispose();
        const S = u.morphAttributes.position !== void 0,
          T = u.morphAttributes.normal !== void 0,
          w = u.morphAttributes.color !== void 0,
          P = u.morphAttributes.position || [],
          b = u.morphAttributes.normal || [],
          k = u.morphAttributes.color || [];
        let x = 0;
        S === !0 && (x = 1), T === !0 && (x = 2), w === !0 && (x = 3);
        let A = u.attributes.position.count * x,
          W = 1;
        A > e.maxTextureSize &&
          ((W = Math.ceil(A / e.maxTextureSize)), (A = e.maxTextureSize));
        const Z = new Float32Array(A * W * 4 * g),
          J = new Va(Z, A, W, g);
        (J.type = rn), (J.needsUpdate = !0);
        const L = x * 4;
        for (let Y = 0; Y < g; Y++) {
          const V = P[Y],
            ie = b[Y],
            K = k[Y],
            q = A * W * 4 * Y;
          for (let D = 0; D < V.count; D++) {
            const B = D * L;
            S === !0 &&
              (o.fromBufferAttribute(V, D),
              (Z[q + B + 0] = o.x),
              (Z[q + B + 1] = o.y),
              (Z[q + B + 2] = o.z),
              (Z[q + B + 3] = 0)),
              T === !0 &&
                (o.fromBufferAttribute(ie, D),
                (Z[q + B + 4] = o.x),
                (Z[q + B + 5] = o.y),
                (Z[q + B + 6] = o.z),
                (Z[q + B + 7] = 0)),
              w === !0 &&
                (o.fromBufferAttribute(K, D),
                (Z[q + B + 8] = o.x),
                (Z[q + B + 9] = o.y),
                (Z[q + B + 10] = o.z),
                (Z[q + B + 11] = K.itemSize === 4 ? o.w : 1));
          }
        }
        (p = { count: g, texture: J, size: new Oe(A, W) }),
          s.set(u, p),
          u.addEventListener("dispose", H);
      }
      let h = 0;
      for (let S = 0; S < d.length; S++) h += d[S];
      const C = u.morphTargetsRelative ? 1 : 1 - h;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", C),
        f.getUniforms().setValue(i, "morphTargetInfluences", d),
        f.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t),
        f.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
    } else {
      const v = d === void 0 ? 0 : d.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== v) {
        g = [];
        for (let T = 0; T < v; T++) g[T] = [T, 0];
        n[u.id] = g;
      }
      for (let T = 0; T < v; T++) {
        const w = g[T];
        (w[0] = T), (w[1] = d[T]);
      }
      g.sort(Vh);
      for (let T = 0; T < 8; T++)
        T < v && g[T][1]
          ? ((a[T][0] = g[T][0]), (a[T][1] = g[T][1]))
          : ((a[T][0] = Number.MAX_SAFE_INTEGER), (a[T][1] = 0));
      a.sort(Hh);
      const p = u.morphAttributes.position,
        h = u.morphAttributes.normal;
      let C = 0;
      for (let T = 0; T < 8; T++) {
        const w = a[T],
          P = w[0],
          b = w[1];
        P !== Number.MAX_SAFE_INTEGER && b
          ? (p &&
              u.getAttribute("morphTarget" + T) !== p[P] &&
              u.setAttribute("morphTarget" + T, p[P]),
            h &&
              u.getAttribute("morphNormal" + T) !== h[P] &&
              u.setAttribute("morphNormal" + T, h[P]),
            (r[T] = b),
            (C += b))
          : (p &&
              u.hasAttribute("morphTarget" + T) === !0 &&
              u.deleteAttribute("morphTarget" + T),
            h &&
              u.hasAttribute("morphNormal" + T) === !0 &&
              u.deleteAttribute("morphNormal" + T),
            (r[T] = 0));
      }
      const S = u.morphTargetsRelative ? 1 : 1 - C;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", S),
        f.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return { update: l };
}
function Wh(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const Qa = new vt(),
  eo = new Va(),
  to = new Cl(),
  no = new Za(),
  oa = [],
  la = [],
  ca = new Float32Array(16),
  ua = new Float32Array(9),
  ha = new Float32Array(4);
function ti(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = oa[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (oa[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), i[o].toArray(s, a);
  }
  return s;
}
function tt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function nt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Qi(i, e) {
  let t = la[e];
  t === void 0 && ((t = new Int32Array(e)), (la[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Xh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Yh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tt(t, e)) return;
    i.uniform2fv(this.addr, e), nt(t, e);
  }
}
function qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (tt(t, e)) return;
    i.uniform3fv(this.addr, e), nt(t, e);
  }
}
function jh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tt(t, e)) return;
    i.uniform4fv(this.addr, e), nt(t, e);
  }
}
function Kh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    ha.set(n), i.uniformMatrix2fv(this.addr, !1, ha), nt(t, n);
  }
}
function Zh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    ua.set(n), i.uniformMatrix3fv(this.addr, !1, ua), nt(t, n);
  }
}
function $h(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    ca.set(n), i.uniformMatrix4fv(this.addr, !1, ca), nt(t, n);
  }
}
function Jh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tt(t, e)) return;
    i.uniform2iv(this.addr, e), nt(t, e);
  }
}
function ef(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (tt(t, e)) return;
    i.uniform3iv(this.addr, e), nt(t, e);
  }
}
function tf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tt(t, e)) return;
    i.uniform4iv(this.addr, e), nt(t, e);
  }
}
function nf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function rf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tt(t, e)) return;
    i.uniform2uiv(this.addr, e), nt(t, e);
  }
}
function sf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (tt(t, e)) return;
    i.uniform3uiv(this.addr, e), nt(t, e);
  }
}
function af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tt(t, e)) return;
    i.uniform4uiv(this.addr, e), nt(t, e);
  }
}
function of(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2D(e || Qa, r);
}
function lf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || to, r);
}
function cf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || no, r);
}
function uf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || eo, r);
}
function hf(i) {
  switch (i) {
    case 5126:
      return Xh;
    case 35664:
      return Yh;
    case 35665:
      return qh;
    case 35666:
      return jh;
    case 35674:
      return Kh;
    case 35675:
      return Zh;
    case 35676:
      return $h;
    case 5124:
    case 35670:
      return Jh;
    case 35667:
    case 35671:
      return Qh;
    case 35668:
    case 35672:
      return ef;
    case 35669:
    case 35673:
      return tf;
    case 5125:
      return nf;
    case 36294:
      return rf;
    case 36295:
      return sf;
    case 36296:
      return af;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return of;
    case 35679:
    case 36299:
    case 36307:
      return lf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return cf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return uf;
  }
}
function ff(i, e) {
  i.uniform1fv(this.addr, e);
}
function df(i, e) {
  const t = ti(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function pf(i, e) {
  const t = ti(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function mf(i, e) {
  const t = ti(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function _f(i, e) {
  const t = ti(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function gf(i, e) {
  const t = ti(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function vf(i, e) {
  const t = ti(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function xf(i, e) {
  i.uniform1iv(this.addr, e);
}
function Mf(i, e) {
  i.uniform2iv(this.addr, e);
}
function Sf(i, e) {
  i.uniform3iv(this.addr, e);
}
function Ef(i, e) {
  i.uniform4iv(this.addr, e);
}
function Tf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function yf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Af(i, e) {
  i.uniform3uiv(this.addr, e);
}
function bf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Rf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Qa, s[o]);
}
function wf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || to, s[o]);
}
function Cf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || no, s[o]);
}
function Pf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || eo, s[o]);
}
function Lf(i) {
  switch (i) {
    case 5126:
      return ff;
    case 35664:
      return df;
    case 35665:
      return pf;
    case 35666:
      return mf;
    case 35674:
      return _f;
    case 35675:
      return gf;
    case 35676:
      return vf;
    case 5124:
    case 35670:
      return xf;
    case 35667:
    case 35671:
      return Mf;
    case 35668:
    case 35672:
      return Sf;
    case 35669:
    case 35673:
      return Ef;
    case 5125:
      return Tf;
    case 36294:
      return yf;
    case 36295:
      return Af;
    case 36296:
      return bf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Rf;
    case 35679:
    case 36299:
    case 36307:
      return wf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Cf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Pf;
  }
}
class Df {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = hf(t.type));
  }
}
class Uf {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Lf(t.type));
  }
}
class If {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Pr = /(\w+)(\])?(\[|\.)?/g;
function fa(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function Nf(i, e, t) {
  const n = i.name,
    r = n.length;
  for (Pr.lastIndex = 0; ; ) {
    const s = Pr.exec(n),
      o = Pr.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      fa(t, c === void 0 ? new Df(a, i, e) : new Uf(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && ((f = new If(a)), fa(t, f)), (t = f);
    }
  }
}
class Vi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      Nf(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function da(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let Ff = 0;
function Of(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Bf(i) {
  const e = Ve.getPrimaries(Ve.workingColorSpace),
    t = Ve.getPrimaries(i);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === Xi && t === Wi
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === Wi && t === Xi && (n = "LinearSRGBToLinearDisplayP3"),
    i)
  ) {
    case Kt:
    case Zi:
      return [n, "LinearTransferOETF"];
    case at:
    case Wr:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        [n, "LinearTransferOETF"]
      );
  }
}
function pa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Of(i.getShaderSource(e), o)
    );
  } else return r;
}
function zf(i, e) {
  const t = Bf(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Gf(i, e) {
  let t;
  switch (e) {
    case No:
      t = "Linear";
      break;
    case Fo:
      t = "Reinhard";
      break;
    case Oo:
      t = "OptimizedCineon";
      break;
    case Bo:
      t = "ACESFilmic";
      break;
    case zo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Hf(i) {
  return [
    i.extensionDerivatives ||
    i.envMapCubeUVHeight ||
    i.bumpMap ||
    i.normalMapTangentSpace ||
    i.clearcoatNormalMap ||
    i.flatShading ||
    i.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) &&
    i.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) &&
    i.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(oi).join(`
`);
}
function Vf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function kf(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2),
      s.type === i.FLOAT_MAT3 && (a = 3),
      s.type === i.FLOAT_MAT4 && (a = 4),
      (t[o] = {
        type: s.type,
        location: i.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function oi(i) {
  return i !== "";
}
function ma(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _a(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Wf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Hr(i) {
  return i.replace(Wf, Yf);
}
const Xf = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function Yf(i, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = Xf.get(e);
    if (n !== void 0)
      (t = Ie[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Hr(t);
}
const qf =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ga(i) {
  return i.replace(qf, jf);
}
function jf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function va(i) {
  let e =
    "precision " +
    i.precision +
    ` float;
precision ` +
    i.precision +
    " int;";
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Kf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === Ra
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === fo
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : i.shadowMapType === Yt && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Zf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Zn:
      case $n:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ki:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function $f(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case $n:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Jf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Pa:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Uo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Io:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Qf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function ed(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = Kf(t),
    c = Zf(t),
    u = $f(t),
    f = Jf(t),
    d = Qf(t),
    m = t.isWebGL2 ? "" : Hf(t),
    v = Vf(s),
    g = r.createProgram();
  let p,
    h,
    C = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(oi).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (h = [
        m,
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(oi).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((p = [
        va(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(oi).join(`
`)),
      (h = [
        m,
        va(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + f : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== an ? "#define TONE_MAPPING" : "",
        t.toneMapping !== an ? Ie.tonemapping_pars_fragment : "",
        t.toneMapping !== an ? Gf("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ie.colorspace_pars_fragment,
        zf("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(oi).join(`
`))),
    (o = Hr(o)),
    (o = ma(o, t)),
    (o = _a(o, t)),
    (a = Hr(a)),
    (a = ma(a, t)),
    (a = _a(a, t)),
    (o = ga(o)),
    (a = ga(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((C = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (h =
        [
          "#define varying in",
          t.glslVersion === Fs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Fs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h));
  const S = C + p + o,
    T = C + h + a,
    w = da(r, r.VERTEX_SHADER, S),
    P = da(r, r.FRAGMENT_SHADER, T);
  if (
    (r.attachShader(g, w),
    r.attachShader(g, P),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(g, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(g, 0, "position"),
    r.linkProgram(g),
    i.debug.checkShaderErrors)
  ) {
    const x = r.getProgramInfoLog(g).trim(),
      A = r.getShaderInfoLog(w).trim(),
      W = r.getShaderInfoLog(P).trim();
    let Z = !0,
      J = !0;
    if (r.getProgramParameter(g, r.LINK_STATUS) === !1)
      if (((Z = !1), typeof i.debug.onShaderError == "function"))
        i.debug.onShaderError(r, g, w, P);
      else {
        const L = pa(r, w, "vertex"),
          H = pa(r, P, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            r.getError() +
            " - VALIDATE_STATUS " +
            r.getProgramParameter(g, r.VALIDATE_STATUS) +
            `

Program Info Log: ` +
            x +
            `
` +
            L +
            `
` +
            H
        );
      }
    else
      x !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", x)
        : (A === "" || W === "") && (J = !1);
    J &&
      (this.diagnostics = {
        runnable: Z,
        programLog: x,
        vertexShader: { log: A, prefix: p },
        fragmentShader: { log: W, prefix: h },
      });
  }
  r.deleteShader(w), r.deleteShader(P);
  let b;
  this.getUniforms = function () {
    return b === void 0 && (b = new Vi(r, g)), b;
  };
  let k;
  return (
    (this.getAttributes = function () {
      return k === void 0 && (k = kf(r, g)), k;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(g),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Ff++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = g),
    (this.vertexShader = w),
    (this.fragmentShader = P),
    this
  );
}
let td = 0;
class nd {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new id(e)), t.set(e, n)), n;
  }
}
class id {
  constructor(e) {
    (this.id = td++), (this.code = e), (this.usedTimes = 0);
  }
}
function rd(i, e, t, n, r, s, o) {
  const a = new Wa(),
    l = new nd(),
    c = [],
    u = r.isWebGL2,
    f = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let m = r.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function g(x) {
    return x === 0 ? "uv" : `uv${x}`;
  }
  function p(x, A, W, Z, J) {
    const L = Z.fog,
      H = J.geometry,
      Y = x.isMeshStandardMaterial ? Z.environment : null,
      V = (x.isMeshStandardMaterial ? t : e).get(x.envMap || Y),
      ie = V && V.mapping === Ki ? V.image.height : null,
      K = v[x.type];
    x.precision !== null &&
      ((m = r.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const q =
        H.morphAttributes.position ||
        H.morphAttributes.normal ||
        H.morphAttributes.color,
      D = q !== void 0 ? q.length : 0;
    let B = 0;
    H.morphAttributes.position !== void 0 && (B = 1),
      H.morphAttributes.normal !== void 0 && (B = 2),
      H.morphAttributes.color !== void 0 && (B = 3);
    let ce, he, fe, Ee;
    if (K) {
      const We = Ft[K];
      (ce = We.vertexShader), (he = We.fragmentShader);
    } else
      (ce = x.vertexShader),
        (he = x.fragmentShader),
        l.update(x),
        (fe = l.getVertexShaderID(x)),
        (Ee = l.getFragmentShaderID(x));
    const Ce = i.getRenderTarget(),
      xe = J.isInstancedMesh === !0,
      Ge = !!x.map,
      st = !!x.matcap,
      De = !!V,
      I = !!x.aoMap,
      Qe = !!x.lightMap,
      Me = !!x.bumpMap,
      Pe = !!x.normalMap,
      be = !!x.displacementMap,
      ke = !!x.emissiveMap,
      Ne = !!x.metalnessMap,
      Le = !!x.roughnessMap,
      He = x.anisotropy > 0,
      et = x.clearcoat > 0,
      it = x.iridescence > 0,
      E = x.sheen > 0,
      _ = x.transmission > 0,
      O = He && !!x.anisotropyMap,
      Q = et && !!x.clearcoatMap,
      $ = et && !!x.clearcoatNormalMap,
      ee = et && !!x.clearcoatRoughnessMap,
      _e = it && !!x.iridescenceMap,
      re = it && !!x.iridescenceThicknessMap,
      ue = E && !!x.sheenColorMap,
      R = E && !!x.sheenRoughnessMap,
      te = !!x.specularMap,
      X = !!x.specularColorMap,
      Te = !!x.specularIntensityMap,
      ge = _ && !!x.transmissionMap,
      ve = _ && !!x.thicknessMap,
      me = !!x.gradientMap,
      y = !!x.alphaMap,
      se = x.alphaTest > 0,
      ne = !!x.alphaHash,
      le = !!x.extensions,
      ae = !!H.attributes.uv1,
      j = !!H.attributes.uv2,
      pe = !!H.attributes.uv3;
    let ye = an;
    return (
      x.toneMapped &&
        (Ce === null || Ce.isXRRenderTarget === !0) &&
        (ye = i.toneMapping),
      {
        isWebGL2: u,
        shaderID: K,
        shaderType: x.type,
        shaderName: x.name,
        vertexShader: ce,
        fragmentShader: he,
        defines: x.defines,
        customVertexShaderID: fe,
        customFragmentShaderID: Ee,
        isRawShaderMaterial: x.isRawShaderMaterial === !0,
        glslVersion: x.glslVersion,
        precision: m,
        instancing: xe,
        instancingColor: xe && J.instanceColor !== null,
        supportsVertexTextures: d,
        outputColorSpace:
          Ce === null
            ? i.outputColorSpace
            : Ce.isXRRenderTarget === !0
            ? Ce.texture.colorSpace
            : Kt,
        map: Ge,
        matcap: st,
        envMap: De,
        envMapMode: De && V.mapping,
        envMapCubeUVHeight: ie,
        aoMap: I,
        lightMap: Qe,
        bumpMap: Me,
        normalMap: Pe,
        displacementMap: d && be,
        emissiveMap: ke,
        normalMapObjectSpace: Pe && x.normalMapType === Qo,
        normalMapTangentSpace: Pe && x.normalMapType === Jo,
        metalnessMap: Ne,
        roughnessMap: Le,
        anisotropy: He,
        anisotropyMap: O,
        clearcoat: et,
        clearcoatMap: Q,
        clearcoatNormalMap: $,
        clearcoatRoughnessMap: ee,
        iridescence: it,
        iridescenceMap: _e,
        iridescenceThicknessMap: re,
        sheen: E,
        sheenColorMap: ue,
        sheenRoughnessMap: R,
        specularMap: te,
        specularColorMap: X,
        specularIntensityMap: Te,
        transmission: _,
        transmissionMap: ge,
        thicknessMap: ve,
        gradientMap: me,
        opaque: x.transparent === !1 && x.blending === jn,
        alphaMap: y,
        alphaTest: se,
        alphaHash: ne,
        combine: x.combine,
        mapUv: Ge && g(x.map.channel),
        aoMapUv: I && g(x.aoMap.channel),
        lightMapUv: Qe && g(x.lightMap.channel),
        bumpMapUv: Me && g(x.bumpMap.channel),
        normalMapUv: Pe && g(x.normalMap.channel),
        displacementMapUv: be && g(x.displacementMap.channel),
        emissiveMapUv: ke && g(x.emissiveMap.channel),
        metalnessMapUv: Ne && g(x.metalnessMap.channel),
        roughnessMapUv: Le && g(x.roughnessMap.channel),
        anisotropyMapUv: O && g(x.anisotropyMap.channel),
        clearcoatMapUv: Q && g(x.clearcoatMap.channel),
        clearcoatNormalMapUv: $ && g(x.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ee && g(x.clearcoatRoughnessMap.channel),
        iridescenceMapUv: _e && g(x.iridescenceMap.channel),
        iridescenceThicknessMapUv: re && g(x.iridescenceThicknessMap.channel),
        sheenColorMapUv: ue && g(x.sheenColorMap.channel),
        sheenRoughnessMapUv: R && g(x.sheenRoughnessMap.channel),
        specularMapUv: te && g(x.specularMap.channel),
        specularColorMapUv: X && g(x.specularColorMap.channel),
        specularIntensityMapUv: Te && g(x.specularIntensityMap.channel),
        transmissionMapUv: ge && g(x.transmissionMap.channel),
        thicknessMapUv: ve && g(x.thicknessMap.channel),
        alphaMapUv: y && g(x.alphaMap.channel),
        vertexTangents: !!H.attributes.tangent && (Pe || He),
        vertexColors: x.vertexColors,
        vertexAlphas:
          x.vertexColors === !0 &&
          !!H.attributes.color &&
          H.attributes.color.itemSize === 4,
        vertexUv1s: ae,
        vertexUv2s: j,
        vertexUv3s: pe,
        pointsUvs: J.isPoints === !0 && !!H.attributes.uv && (Ge || y),
        fog: !!L,
        useFog: x.fog === !0,
        fogExp2: L && L.isFogExp2,
        flatShading: x.flatShading === !0,
        sizeAttenuation: x.sizeAttenuation === !0,
        logarithmicDepthBuffer: f,
        skinning: J.isSkinnedMesh === !0,
        morphTargets: H.morphAttributes.position !== void 0,
        morphNormals: H.morphAttributes.normal !== void 0,
        morphColors: H.morphAttributes.color !== void 0,
        morphTargetsCount: D,
        morphTextureStride: B,
        numDirLights: A.directional.length,
        numPointLights: A.point.length,
        numSpotLights: A.spot.length,
        numSpotLightMaps: A.spotLightMap.length,
        numRectAreaLights: A.rectArea.length,
        numHemiLights: A.hemi.length,
        numDirLightShadows: A.directionalShadowMap.length,
        numPointLightShadows: A.pointShadowMap.length,
        numSpotLightShadows: A.spotShadowMap.length,
        numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
        numLightProbes: A.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: x.dithering,
        shadowMapEnabled: i.shadowMap.enabled && W.length > 0,
        shadowMapType: i.shadowMap.type,
        toneMapping: ye,
        useLegacyLights: i._useLegacyLights,
        decodeVideoTexture:
          Ge &&
          x.map.isVideoTexture === !0 &&
          Ve.getTransfer(x.map.colorSpace) === Xe,
        premultipliedAlpha: x.premultipliedAlpha,
        doubleSided: x.side === qt,
        flipSided: x.side === gt,
        useDepthPacking: x.depthPacking >= 0,
        depthPacking: x.depthPacking || 0,
        index0AttributeName: x.index0AttributeName,
        extensionDerivatives: le && x.extensions.derivatives === !0,
        extensionFragDepth: le && x.extensions.fragDepth === !0,
        extensionDrawBuffers: le && x.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: le && x.extensions.shaderTextureLOD === !0,
        rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: x.customProgramCacheKey(),
      }
    );
  }
  function h(x) {
    const A = [];
    if (
      (x.shaderID
        ? A.push(x.shaderID)
        : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const W in x.defines) A.push(W), A.push(x.defines[W]);
    return (
      x.isRawShaderMaterial === !1 &&
        (C(A, x), S(A, x), A.push(i.outputColorSpace)),
      A.push(x.customProgramCacheKey),
      A.join()
    );
  }
  function C(x, A) {
    x.push(A.precision),
      x.push(A.outputColorSpace),
      x.push(A.envMapMode),
      x.push(A.envMapCubeUVHeight),
      x.push(A.mapUv),
      x.push(A.alphaMapUv),
      x.push(A.lightMapUv),
      x.push(A.aoMapUv),
      x.push(A.bumpMapUv),
      x.push(A.normalMapUv),
      x.push(A.displacementMapUv),
      x.push(A.emissiveMapUv),
      x.push(A.metalnessMapUv),
      x.push(A.roughnessMapUv),
      x.push(A.anisotropyMapUv),
      x.push(A.clearcoatMapUv),
      x.push(A.clearcoatNormalMapUv),
      x.push(A.clearcoatRoughnessMapUv),
      x.push(A.iridescenceMapUv),
      x.push(A.iridescenceThicknessMapUv),
      x.push(A.sheenColorMapUv),
      x.push(A.sheenRoughnessMapUv),
      x.push(A.specularMapUv),
      x.push(A.specularColorMapUv),
      x.push(A.specularIntensityMapUv),
      x.push(A.transmissionMapUv),
      x.push(A.thicknessMapUv),
      x.push(A.combine),
      x.push(A.fogExp2),
      x.push(A.sizeAttenuation),
      x.push(A.morphTargetsCount),
      x.push(A.morphAttributeCount),
      x.push(A.numDirLights),
      x.push(A.numPointLights),
      x.push(A.numSpotLights),
      x.push(A.numSpotLightMaps),
      x.push(A.numHemiLights),
      x.push(A.numRectAreaLights),
      x.push(A.numDirLightShadows),
      x.push(A.numPointLightShadows),
      x.push(A.numSpotLightShadows),
      x.push(A.numSpotLightShadowsWithMaps),
      x.push(A.numLightProbes),
      x.push(A.shadowMapType),
      x.push(A.toneMapping),
      x.push(A.numClippingPlanes),
      x.push(A.numClipIntersection),
      x.push(A.depthPacking);
  }
  function S(x, A) {
    a.disableAll(),
      A.isWebGL2 && a.enable(0),
      A.supportsVertexTextures && a.enable(1),
      A.instancing && a.enable(2),
      A.instancingColor && a.enable(3),
      A.matcap && a.enable(4),
      A.envMap && a.enable(5),
      A.normalMapObjectSpace && a.enable(6),
      A.normalMapTangentSpace && a.enable(7),
      A.clearcoat && a.enable(8),
      A.iridescence && a.enable(9),
      A.alphaTest && a.enable(10),
      A.vertexColors && a.enable(11),
      A.vertexAlphas && a.enable(12),
      A.vertexUv1s && a.enable(13),
      A.vertexUv2s && a.enable(14),
      A.vertexUv3s && a.enable(15),
      A.vertexTangents && a.enable(16),
      A.anisotropy && a.enable(17),
      x.push(a.mask),
      a.disableAll(),
      A.fog && a.enable(0),
      A.useFog && a.enable(1),
      A.flatShading && a.enable(2),
      A.logarithmicDepthBuffer && a.enable(3),
      A.skinning && a.enable(4),
      A.morphTargets && a.enable(5),
      A.morphNormals && a.enable(6),
      A.morphColors && a.enable(7),
      A.premultipliedAlpha && a.enable(8),
      A.shadowMapEnabled && a.enable(9),
      A.useLegacyLights && a.enable(10),
      A.doubleSided && a.enable(11),
      A.flipSided && a.enable(12),
      A.useDepthPacking && a.enable(13),
      A.dithering && a.enable(14),
      A.transmission && a.enable(15),
      A.sheen && a.enable(16),
      A.opaque && a.enable(17),
      A.pointsUvs && a.enable(18),
      A.decodeVideoTexture && a.enable(19),
      x.push(a.mask);
  }
  function T(x) {
    const A = v[x.type];
    let W;
    if (A) {
      const Z = Ft[A];
      W = Vl.clone(Z.uniforms);
    } else W = x.uniforms;
    return W;
  }
  function w(x, A) {
    let W;
    for (let Z = 0, J = c.length; Z < J; Z++) {
      const L = c[Z];
      if (L.cacheKey === A) {
        (W = L), ++W.usedTimes;
        break;
      }
    }
    return W === void 0 && ((W = new ed(i, A, x, s)), c.push(W)), W;
  }
  function P(x) {
    if (--x.usedTimes === 0) {
      const A = c.indexOf(x);
      (c[A] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function b(x) {
    l.remove(x);
  }
  function k() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: w,
    releaseProgram: P,
    releaseShaderCache: b,
    programs: c,
    dispose: k,
  };
}
function sd() {
  let i = new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && ((o = {}), i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function ad(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function xa(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function Ma() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function o(f, d, m, v, g, p) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: f.id,
            object: f,
            geometry: d,
            material: m,
            groupOrder: v,
            renderOrder: f.renderOrder,
            z: g,
            group: p,
          }),
          (i[e] = h))
        : ((h.id = f.id),
          (h.object = f),
          (h.geometry = d),
          (h.material = m),
          (h.groupOrder = v),
          (h.renderOrder = f.renderOrder),
          (h.z = g),
          (h.group = p)),
      e++,
      h
    );
  }
  function a(f, d, m, v, g, p) {
    const h = o(f, d, m, v, g, p);
    m.transmission > 0
      ? n.push(h)
      : m.transparent === !0
      ? r.push(h)
      : t.push(h);
  }
  function l(f, d, m, v, g, p) {
    const h = o(f, d, m, v, g, p);
    m.transmission > 0
      ? n.unshift(h)
      : m.transparent === !0
      ? r.unshift(h)
      : t.unshift(h);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || ad),
      n.length > 1 && n.sort(d || xa),
      r.length > 1 && r.sort(d || xa);
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const m = i[f];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function od() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new Ma()), i.set(n, [o]))
        : r >= s.length
        ? ((o = new Ma()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function ld() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new N(), color: new Ye() };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Ye(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new N(), color: new Ye(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new N(), skyColor: new Ye(), groundColor: new Ye() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ye(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function cd() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let ud = 0;
function hd(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function fd(i, e) {
  const t = new ld(),
    n = cd(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let u = 0; u < 9; u++) r.probe.push(new N());
  const s = new N(),
    o = new lt(),
    a = new lt();
  function l(u, f) {
    let d = 0,
      m = 0,
      v = 0;
    for (let Z = 0; Z < 9; Z++) r.probe[Z].set(0, 0, 0);
    let g = 0,
      p = 0,
      h = 0,
      C = 0,
      S = 0,
      T = 0,
      w = 0,
      P = 0,
      b = 0,
      k = 0,
      x = 0;
    u.sort(hd);
    const A = f === !0 ? Math.PI : 1;
    for (let Z = 0, J = u.length; Z < J; Z++) {
      const L = u[Z],
        H = L.color,
        Y = L.intensity,
        V = L.distance,
        ie = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        (d += H.r * Y * A), (m += H.g * Y * A), (v += H.b * Y * A);
      else if (L.isLightProbe) {
        for (let K = 0; K < 9; K++)
          r.probe[K].addScaledVector(L.sh.coefficients[K], Y);
        x++;
      } else if (L.isDirectionalLight) {
        const K = t.get(L);
        if (
          (K.color.copy(L.color).multiplyScalar(L.intensity * A), L.castShadow)
        ) {
          const q = L.shadow,
            D = n.get(L);
          (D.shadowBias = q.bias),
            (D.shadowNormalBias = q.normalBias),
            (D.shadowRadius = q.radius),
            (D.shadowMapSize = q.mapSize),
            (r.directionalShadow[g] = D),
            (r.directionalShadowMap[g] = ie),
            (r.directionalShadowMatrix[g] = L.shadow.matrix),
            T++;
        }
        (r.directional[g] = K), g++;
      } else if (L.isSpotLight) {
        const K = t.get(L);
        K.position.setFromMatrixPosition(L.matrixWorld),
          K.color.copy(H).multiplyScalar(Y * A),
          (K.distance = V),
          (K.coneCos = Math.cos(L.angle)),
          (K.penumbraCos = Math.cos(L.angle * (1 - L.penumbra))),
          (K.decay = L.decay),
          (r.spot[h] = K);
        const q = L.shadow;
        if (
          (L.map &&
            ((r.spotLightMap[b] = L.map),
            b++,
            q.updateMatrices(L),
            L.castShadow && k++),
          (r.spotLightMatrix[h] = q.matrix),
          L.castShadow)
        ) {
          const D = n.get(L);
          (D.shadowBias = q.bias),
            (D.shadowNormalBias = q.normalBias),
            (D.shadowRadius = q.radius),
            (D.shadowMapSize = q.mapSize),
            (r.spotShadow[h] = D),
            (r.spotShadowMap[h] = ie),
            P++;
        }
        h++;
      } else if (L.isRectAreaLight) {
        const K = t.get(L);
        K.color.copy(H).multiplyScalar(Y),
          K.halfWidth.set(L.width * 0.5, 0, 0),
          K.halfHeight.set(0, L.height * 0.5, 0),
          (r.rectArea[C] = K),
          C++;
      } else if (L.isPointLight) {
        const K = t.get(L);
        if (
          (K.color.copy(L.color).multiplyScalar(L.intensity * A),
          (K.distance = L.distance),
          (K.decay = L.decay),
          L.castShadow)
        ) {
          const q = L.shadow,
            D = n.get(L);
          (D.shadowBias = q.bias),
            (D.shadowNormalBias = q.normalBias),
            (D.shadowRadius = q.radius),
            (D.shadowMapSize = q.mapSize),
            (D.shadowCameraNear = q.camera.near),
            (D.shadowCameraFar = q.camera.far),
            (r.pointShadow[p] = D),
            (r.pointShadowMap[p] = ie),
            (r.pointShadowMatrix[p] = L.shadow.matrix),
            w++;
        }
        (r.point[p] = K), p++;
      } else if (L.isHemisphereLight) {
        const K = t.get(L);
        K.skyColor.copy(L.color).multiplyScalar(Y * A),
          K.groundColor.copy(L.groundColor).multiplyScalar(Y * A),
          (r.hemi[S] = K),
          S++;
      }
    }
    C > 0 &&
      (e.isWebGL2 || i.has("OES_texture_float_linear") === !0
        ? ((r.rectAreaLTC1 = oe.LTC_FLOAT_1), (r.rectAreaLTC2 = oe.LTC_FLOAT_2))
        : i.has("OES_texture_half_float_linear") === !0
        ? ((r.rectAreaLTC1 = oe.LTC_HALF_1), (r.rectAreaLTC2 = oe.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (r.ambient[0] = d),
      (r.ambient[1] = m),
      (r.ambient[2] = v);
    const W = r.hash;
    (W.directionalLength !== g ||
      W.pointLength !== p ||
      W.spotLength !== h ||
      W.rectAreaLength !== C ||
      W.hemiLength !== S ||
      W.numDirectionalShadows !== T ||
      W.numPointShadows !== w ||
      W.numSpotShadows !== P ||
      W.numSpotMaps !== b ||
      W.numLightProbes !== x) &&
      ((r.directional.length = g),
      (r.spot.length = h),
      (r.rectArea.length = C),
      (r.point.length = p),
      (r.hemi.length = S),
      (r.directionalShadow.length = T),
      (r.directionalShadowMap.length = T),
      (r.pointShadow.length = w),
      (r.pointShadowMap.length = w),
      (r.spotShadow.length = P),
      (r.spotShadowMap.length = P),
      (r.directionalShadowMatrix.length = T),
      (r.pointShadowMatrix.length = w),
      (r.spotLightMatrix.length = P + b - k),
      (r.spotLightMap.length = b),
      (r.numSpotLightShadowsWithMaps = k),
      (r.numLightProbes = x),
      (W.directionalLength = g),
      (W.pointLength = p),
      (W.spotLength = h),
      (W.rectAreaLength = C),
      (W.hemiLength = S),
      (W.numDirectionalShadows = T),
      (W.numPointShadows = w),
      (W.numSpotShadows = P),
      (W.numSpotMaps = b),
      (W.numLightProbes = x),
      (r.version = ud++));
  }
  function c(u, f) {
    let d = 0,
      m = 0,
      v = 0,
      g = 0,
      p = 0;
    const h = f.matrixWorldInverse;
    for (let C = 0, S = u.length; C < S; C++) {
      const T = u[C];
      if (T.isDirectionalLight) {
        const w = r.directional[d];
        w.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          w.direction.sub(s),
          w.direction.transformDirection(h),
          d++;
      } else if (T.isSpotLight) {
        const w = r.spot[v];
        w.position.setFromMatrixPosition(T.matrixWorld),
          w.position.applyMatrix4(h),
          w.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          w.direction.sub(s),
          w.direction.transformDirection(h),
          v++;
      } else if (T.isRectAreaLight) {
        const w = r.rectArea[g];
        w.position.setFromMatrixPosition(T.matrixWorld),
          w.position.applyMatrix4(h),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(h),
          a.extractRotation(o),
          w.halfWidth.set(T.width * 0.5, 0, 0),
          w.halfHeight.set(0, T.height * 0.5, 0),
          w.halfWidth.applyMatrix4(a),
          w.halfHeight.applyMatrix4(a),
          g++;
      } else if (T.isPointLight) {
        const w = r.point[m];
        w.position.setFromMatrixPosition(T.matrixWorld),
          w.position.applyMatrix4(h),
          m++;
      } else if (T.isHemisphereLight) {
        const w = r.hemi[p];
        w.direction.setFromMatrixPosition(T.matrixWorld),
          w.direction.transformDirection(h),
          p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Sa(i, e) {
  const t = new fd(i, e),
    n = [],
    r = [];
  function s() {
    (n.length = 0), (r.length = 0);
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(n, f);
  }
  function c(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function dd(i, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new Sa(i, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new Sa(i, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class pd extends Ji {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Zo),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class md extends Ji {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const _d = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  gd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function vd(i, e, t) {
  let n = new $a();
  const r = new Oe(),
    s = new Oe(),
    o = new ot(),
    a = new pd({ depthPacking: $o }),
    l = new md(),
    c = {},
    u = t.maxTextureSize,
    f = { [ln]: gt, [gt]: ln, [qt]: qt },
    d = new Tn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Oe() },
        radius: { value: 4 },
      },
      vertexShader: _d,
      fragmentShader: gd,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new An();
  v.setAttribute(
    "position",
    new Bt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const g = new Et(v, d),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ra);
  let h = this.type;
  this.render = function (w, P, b) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const k = i.getRenderTarget(),
      x = i.getActiveCubeFace(),
      A = i.getActiveMipmapLevel(),
      W = i.state;
    W.setBlending(sn),
      W.buffers.color.setClear(1, 1, 1, 1),
      W.buffers.depth.setTest(!0),
      W.setScissorTest(!1);
    const Z = h !== Yt && this.type === Yt,
      J = h === Yt && this.type !== Yt;
    for (let L = 0, H = w.length; L < H; L++) {
      const Y = w[L],
        V = Y.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize);
      const ie = V.getFrameExtents();
      if (
        (r.multiply(ie),
        s.copy(V.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / ie.x)),
            (r.x = s.x * ie.x),
            (V.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / ie.y)),
            (r.y = s.y * ie.y),
            (V.mapSize.y = s.y))),
        V.map === null || Z === !0 || J === !0)
      ) {
        const q = this.type !== Yt ? { minFilter: _t, magFilter: _t } : {};
        V.map !== null && V.map.dispose(),
          (V.map = new Sn(r.x, r.y, q)),
          (V.map.texture.name = Y.name + ".shadowMap"),
          V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const K = V.getViewportCount();
      for (let q = 0; q < K; q++) {
        const D = V.getViewport(q);
        o.set(s.x * D.x, s.y * D.y, s.x * D.z, s.y * D.w),
          W.viewport(o),
          V.updateMatrices(Y, q),
          (n = V.getFrustum()),
          T(P, b, V.camera, Y, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === Yt && C(V, b),
        (V.needsUpdate = !1);
    }
    (h = this.type), (p.needsUpdate = !1), i.setRenderTarget(k, x, A);
  };
  function C(w, P) {
    const b = e.update(g);
    d.defines.VSM_SAMPLES !== w.blurSamples &&
      ((d.defines.VSM_SAMPLES = w.blurSamples),
      (m.defines.VSM_SAMPLES = w.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new Sn(r.x, r.y)),
      (d.uniforms.shadow_pass.value = w.map.texture),
      (d.uniforms.resolution.value = w.mapSize),
      (d.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.mapPass),
      i.clear(),
      i.renderBufferDirect(P, null, b, d, g, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.map),
      i.clear(),
      i.renderBufferDirect(P, null, b, m, g, null);
  }
  function S(w, P, b, k) {
    let x = null;
    const A =
      b.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (A !== void 0) x = A;
    else if (
      ((x = b.isPointLight === !0 ? l : a),
      (i.localClippingEnabled &&
        P.clipShadows === !0 &&
        Array.isArray(P.clippingPlanes) &&
        P.clippingPlanes.length !== 0) ||
        (P.displacementMap && P.displacementScale !== 0) ||
        (P.alphaMap && P.alphaTest > 0) ||
        (P.map && P.alphaTest > 0))
    ) {
      const W = x.uuid,
        Z = P.uuid;
      let J = c[W];
      J === void 0 && ((J = {}), (c[W] = J));
      let L = J[Z];
      L === void 0 && ((L = x.clone()), (J[Z] = L)), (x = L);
    }
    if (
      ((x.visible = P.visible),
      (x.wireframe = P.wireframe),
      k === Yt
        ? (x.side = P.shadowSide !== null ? P.shadowSide : P.side)
        : (x.side = P.shadowSide !== null ? P.shadowSide : f[P.side]),
      (x.alphaMap = P.alphaMap),
      (x.alphaTest = P.alphaTest),
      (x.map = P.map),
      (x.clipShadows = P.clipShadows),
      (x.clippingPlanes = P.clippingPlanes),
      (x.clipIntersection = P.clipIntersection),
      (x.displacementMap = P.displacementMap),
      (x.displacementScale = P.displacementScale),
      (x.displacementBias = P.displacementBias),
      (x.wireframeLinewidth = P.wireframeLinewidth),
      (x.linewidth = P.linewidth),
      b.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const W = i.properties.get(x);
      W.light = b;
    }
    return x;
  }
  function T(w, P, b, k, x) {
    if (w.visible === !1) return;
    if (
      w.layers.test(P.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && x === Yt)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, w.matrixWorld);
      const Z = e.update(w),
        J = w.material;
      if (Array.isArray(J)) {
        const L = Z.groups;
        for (let H = 0, Y = L.length; H < Y; H++) {
          const V = L[H],
            ie = J[V.materialIndex];
          if (ie && ie.visible) {
            const K = S(w, ie, k, x);
            i.renderBufferDirect(b, null, Z, K, w, V);
          }
        }
      } else if (J.visible) {
        const L = S(w, J, k, x);
        i.renderBufferDirect(b, null, Z, L, w, null);
      }
    }
    const W = w.children;
    for (let Z = 0, J = W.length; Z < J; Z++) T(W[Z], P, b, k, x);
  }
}
function xd(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let y = !1;
    const se = new ot();
    let ne = null;
    const le = new ot(0, 0, 0, 0);
    return {
      setMask: function (ae) {
        ne !== ae && !y && (i.colorMask(ae, ae, ae, ae), (ne = ae));
      },
      setLocked: function (ae) {
        y = ae;
      },
      setClear: function (ae, j, pe, ye, Ke) {
        Ke === !0 && ((ae *= ye), (j *= ye), (pe *= ye)),
          se.set(ae, j, pe, ye),
          le.equals(se) === !1 && (i.clearColor(ae, j, pe, ye), le.copy(se));
      },
      reset: function () {
        (y = !1), (ne = null), le.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let y = !1,
      se = null,
      ne = null,
      le = null;
    return {
      setTest: function (ae) {
        ae ? Ce(i.DEPTH_TEST) : xe(i.DEPTH_TEST);
      },
      setMask: function (ae) {
        se !== ae && !y && (i.depthMask(ae), (se = ae));
      },
      setFunc: function (ae) {
        if (ne !== ae) {
          switch (ae) {
            case bo:
              i.depthFunc(i.NEVER);
              break;
            case Ro:
              i.depthFunc(i.ALWAYS);
              break;
            case wo:
              i.depthFunc(i.LESS);
              break;
            case Ir:
              i.depthFunc(i.LEQUAL);
              break;
            case Co:
              i.depthFunc(i.EQUAL);
              break;
            case Po:
              i.depthFunc(i.GEQUAL);
              break;
            case Lo:
              i.depthFunc(i.GREATER);
              break;
            case Do:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ne = ae;
        }
      },
      setLocked: function (ae) {
        y = ae;
      },
      setClear: function (ae) {
        le !== ae && (i.clearDepth(ae), (le = ae));
      },
      reset: function () {
        (y = !1), (se = null), (ne = null), (le = null);
      },
    };
  }
  function o() {
    let y = !1,
      se = null,
      ne = null,
      le = null,
      ae = null,
      j = null,
      pe = null,
      ye = null,
      Ke = null;
    return {
      setTest: function (We) {
        y || (We ? Ce(i.STENCIL_TEST) : xe(i.STENCIL_TEST));
      },
      setMask: function (We) {
        se !== We && !y && (i.stencilMask(We), (se = We));
      },
      setFunc: function (We, Nt, ft) {
        (ne !== We || le !== Nt || ae !== ft) &&
          (i.stencilFunc(We, Nt, ft), (ne = We), (le = Nt), (ae = ft));
      },
      setOp: function (We, Nt, ft) {
        (j !== We || pe !== Nt || ye !== ft) &&
          (i.stencilOp(We, Nt, ft), (j = We), (pe = Nt), (ye = ft));
      },
      setLocked: function (We) {
        y = We;
      },
      setClear: function (We) {
        Ke !== We && (i.clearStencil(We), (Ke = We));
      },
      reset: function () {
        (y = !1),
          (se = null),
          (ne = null),
          (le = null),
          (ae = null),
          (j = null),
          (pe = null),
          (ye = null),
          (Ke = null);
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    f = new WeakMap();
  let d = {},
    m = {},
    v = new WeakMap(),
    g = [],
    p = null,
    h = !1,
    C = null,
    S = null,
    T = null,
    w = null,
    P = null,
    b = null,
    k = null,
    x = !1,
    A = null,
    W = null,
    Z = null,
    J = null,
    L = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = !1,
    V = 0;
  const ie = i.getParameter(i.VERSION);
  ie.indexOf("WebGL") !== -1
    ? ((V = parseFloat(/^WebGL (\d)/.exec(ie)[1])), (Y = V >= 1))
    : ie.indexOf("OpenGL ES") !== -1 &&
      ((V = parseFloat(/^OpenGL ES (\d)/.exec(ie)[1])), (Y = V >= 2));
  let K = null,
    q = {};
  const D = i.getParameter(i.SCISSOR_BOX),
    B = i.getParameter(i.VIEWPORT),
    ce = new ot().fromArray(D),
    he = new ot().fromArray(B);
  function fe(y, se, ne, le) {
    const ae = new Uint8Array(4),
      j = i.createTexture();
    i.bindTexture(y, j),
      i.texParameteri(y, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(y, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let pe = 0; pe < ne; pe++)
      n && (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY)
        ? i.texImage3D(se, 0, i.RGBA, 1, 1, le, 0, i.RGBA, i.UNSIGNED_BYTE, ae)
        : i.texImage2D(
            se + pe,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            ae
          );
    return j;
  }
  const Ee = {};
  (Ee[i.TEXTURE_2D] = fe(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (Ee[i.TEXTURE_CUBE_MAP] = fe(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((Ee[i.TEXTURE_2D_ARRAY] = fe(
        i.TEXTURE_2D_ARRAY,
        i.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (Ee[i.TEXTURE_3D] = fe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Ce(i.DEPTH_TEST),
    l.setFunc(Ir),
    be(!1),
    ke(is),
    Ce(i.CULL_FACE),
    Me(sn);
  function Ce(y) {
    d[y] !== !0 && (i.enable(y), (d[y] = !0));
  }
  function xe(y) {
    d[y] !== !1 && (i.disable(y), (d[y] = !1));
  }
  function Ge(y, se) {
    return m[y] !== se
      ? (i.bindFramebuffer(y, se),
        (m[y] = se),
        n &&
          (y === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = se),
          y === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = se)),
        !0)
      : !1;
  }
  function st(y, se) {
    let ne = g,
      le = !1;
    if (y)
      if (
        ((ne = v.get(se)),
        ne === void 0 && ((ne = []), v.set(se, ne)),
        y.isWebGLMultipleRenderTargets)
      ) {
        const ae = y.texture;
        if (ne.length !== ae.length || ne[0] !== i.COLOR_ATTACHMENT0) {
          for (let j = 0, pe = ae.length; j < pe; j++)
            ne[j] = i.COLOR_ATTACHMENT0 + j;
          (ne.length = ae.length), (le = !0);
        }
      } else
        ne[0] !== i.COLOR_ATTACHMENT0 &&
          ((ne[0] = i.COLOR_ATTACHMENT0), (le = !0));
    else ne[0] !== i.BACK && ((ne[0] = i.BACK), (le = !0));
    le &&
      (t.isWebGL2
        ? i.drawBuffers(ne)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne));
  }
  function De(y) {
    return p !== y ? (i.useProgram(y), (p = y), !0) : !1;
  }
  const I = {
    [Wn]: i.FUNC_ADD,
    [mo]: i.FUNC_SUBTRACT,
    [_o]: i.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (I[os] = i.MIN), (I[ls] = i.MAX);
  else {
    const y = e.get("EXT_blend_minmax");
    y !== null && ((I[os] = y.MIN_EXT), (I[ls] = y.MAX_EXT));
  }
  const Qe = {
    [go]: i.ZERO,
    [vo]: i.ONE,
    [xo]: i.SRC_COLOR,
    [wa]: i.SRC_ALPHA,
    [Ao]: i.SRC_ALPHA_SATURATE,
    [To]: i.DST_COLOR,
    [So]: i.DST_ALPHA,
    [Mo]: i.ONE_MINUS_SRC_COLOR,
    [Ca]: i.ONE_MINUS_SRC_ALPHA,
    [yo]: i.ONE_MINUS_DST_COLOR,
    [Eo]: i.ONE_MINUS_DST_ALPHA,
  };
  function Me(y, se, ne, le, ae, j, pe, ye) {
    if (y === sn) {
      h === !0 && (xe(i.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (Ce(i.BLEND), (h = !0)), y !== po)) {
      if (y !== C || ye !== x) {
        if (
          ((S !== Wn || P !== Wn) &&
            (i.blendEquation(i.FUNC_ADD), (S = Wn), (P = Wn)),
          ye)
        )
          switch (y) {
            case jn:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case rs:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ss:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case as:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", y);
              break;
          }
        else
          switch (y) {
            case jn:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case rs:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case ss:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case as:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", y);
              break;
          }
        (T = null), (w = null), (b = null), (k = null), (C = y), (x = ye);
      }
      return;
    }
    (ae = ae || se),
      (j = j || ne),
      (pe = pe || le),
      (se !== S || ae !== P) &&
        (i.blendEquationSeparate(I[se], I[ae]), (S = se), (P = ae)),
      (ne !== T || le !== w || j !== b || pe !== k) &&
        (i.blendFuncSeparate(Qe[ne], Qe[le], Qe[j], Qe[pe]),
        (T = ne),
        (w = le),
        (b = j),
        (k = pe)),
      (C = y),
      (x = !1);
  }
  function Pe(y, se) {
    y.side === qt ? xe(i.CULL_FACE) : Ce(i.CULL_FACE);
    let ne = y.side === gt;
    se && (ne = !ne),
      be(ne),
      y.blending === jn && y.transparent === !1
        ? Me(sn)
        : Me(
            y.blending,
            y.blendEquation,
            y.blendSrc,
            y.blendDst,
            y.blendEquationAlpha,
            y.blendSrcAlpha,
            y.blendDstAlpha,
            y.premultipliedAlpha
          ),
      l.setFunc(y.depthFunc),
      l.setTest(y.depthTest),
      l.setMask(y.depthWrite),
      a.setMask(y.colorWrite);
    const le = y.stencilWrite;
    c.setTest(le),
      le &&
        (c.setMask(y.stencilWriteMask),
        c.setFunc(y.stencilFunc, y.stencilRef, y.stencilFuncMask),
        c.setOp(y.stencilFail, y.stencilZFail, y.stencilZPass)),
      Le(y.polygonOffset, y.polygonOffsetFactor, y.polygonOffsetUnits),
      y.alphaToCoverage === !0
        ? Ce(i.SAMPLE_ALPHA_TO_COVERAGE)
        : xe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function be(y) {
    A !== y && (y ? i.frontFace(i.CW) : i.frontFace(i.CCW), (A = y));
  }
  function ke(y) {
    y !== uo
      ? (Ce(i.CULL_FACE),
        y !== W &&
          (y === is
            ? i.cullFace(i.BACK)
            : y === ho
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : xe(i.CULL_FACE),
      (W = y);
  }
  function Ne(y) {
    y !== Z && (Y && i.lineWidth(y), (Z = y));
  }
  function Le(y, se, ne) {
    y
      ? (Ce(i.POLYGON_OFFSET_FILL),
        (J !== se || L !== ne) && (i.polygonOffset(se, ne), (J = se), (L = ne)))
      : xe(i.POLYGON_OFFSET_FILL);
  }
  function He(y) {
    y ? Ce(i.SCISSOR_TEST) : xe(i.SCISSOR_TEST);
  }
  function et(y) {
    y === void 0 && (y = i.TEXTURE0 + H - 1),
      K !== y && (i.activeTexture(y), (K = y));
  }
  function it(y, se, ne) {
    ne === void 0 && (K === null ? (ne = i.TEXTURE0 + H - 1) : (ne = K));
    let le = q[ne];
    le === void 0 && ((le = { type: void 0, texture: void 0 }), (q[ne] = le)),
      (le.type !== y || le.texture !== se) &&
        (K !== ne && (i.activeTexture(ne), (K = ne)),
        i.bindTexture(y, se || Ee[y]),
        (le.type = y),
        (le.texture = se));
  }
  function E() {
    const y = q[K];
    y !== void 0 &&
      y.type !== void 0 &&
      (i.bindTexture(y.type, null), (y.type = void 0), (y.texture = void 0));
  }
  function _() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function O() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function Q() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function $() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function _e() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function re() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function ue() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function R() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function te() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (y) {
      console.error("THREE.WebGLState:", y);
    }
  }
  function X(y) {
    ce.equals(y) === !1 && (i.scissor(y.x, y.y, y.z, y.w), ce.copy(y));
  }
  function Te(y) {
    he.equals(y) === !1 && (i.viewport(y.x, y.y, y.z, y.w), he.copy(y));
  }
  function ge(y, se) {
    let ne = f.get(se);
    ne === void 0 && ((ne = new WeakMap()), f.set(se, ne));
    let le = ne.get(y);
    le === void 0 && ((le = i.getUniformBlockIndex(se, y.name)), ne.set(y, le));
  }
  function ve(y, se) {
    const le = f.get(se).get(y);
    u.get(se) !== le &&
      (i.uniformBlockBinding(se, le, y.__bindingPointIndex), u.set(se, le));
  }
  function me() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      n === !0 &&
        (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null)),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (d = {}),
      (K = null),
      (q = {}),
      (m = {}),
      (v = new WeakMap()),
      (g = []),
      (p = null),
      (h = !1),
      (C = null),
      (S = null),
      (T = null),
      (w = null),
      (P = null),
      (b = null),
      (k = null),
      (x = !1),
      (A = null),
      (W = null),
      (Z = null),
      (J = null),
      (L = null),
      ce.set(0, 0, i.canvas.width, i.canvas.height),
      he.set(0, 0, i.canvas.width, i.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: Ce,
    disable: xe,
    bindFramebuffer: Ge,
    drawBuffers: st,
    useProgram: De,
    setBlending: Me,
    setMaterial: Pe,
    setFlipSided: be,
    setCullFace: ke,
    setLineWidth: Ne,
    setPolygonOffset: Le,
    setScissorTest: He,
    activeTexture: et,
    bindTexture: it,
    unbindTexture: E,
    compressedTexImage2D: _,
    compressedTexImage3D: O,
    texImage2D: R,
    texImage3D: te,
    updateUBOMapping: ge,
    uniformBlockBinding: ve,
    texStorage2D: re,
    texStorage3D: ue,
    texSubImage2D: Q,
    texSubImage3D: $,
    compressedTexSubImage2D: ee,
    compressedTexSubImage3D: _e,
    scissor: X,
    viewport: Te,
    reset: me,
  };
}
function Md(i, e, t, n, r, s, o) {
  const a = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    u = r.maxTextureSize,
    f = r.maxSamples,
    d = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    v = new WeakMap();
  let g;
  const p = new WeakMap();
  let h = !1;
  try {
    h =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function C(E, _) {
    return h ? new OffscreenCanvas(E, _) : mi("canvas");
  }
  function S(E, _, O, Q) {
    let $ = 1;
    if (
      ((E.width > Q || E.height > Q) && ($ = Q / Math.max(E.width, E.height)),
      $ < 1 || _ === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap)
      ) {
        const ee = _ ? qi : Math.floor,
          _e = ee($ * E.width),
          re = ee($ * E.height);
        g === void 0 && (g = C(_e, re));
        const ue = O ? C(_e, re) : g;
        return (
          (ue.width = _e),
          (ue.height = re),
          ue.getContext("2d").drawImage(E, 0, 0, _e, re),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              E.width +
              "x" +
              E.height +
              ") to (" +
              _e +
              "x" +
              re +
              ")."
          ),
          ue
        );
      } else
        return (
          "data" in E &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                E.width +
                "x" +
                E.height +
                ")."
            ),
          E
        );
    return E;
  }
  function T(E) {
    return Gr(E.width) && Gr(E.height);
  }
  function w(E) {
    return a
      ? !1
      : E.wrapS !== Ut ||
          E.wrapT !== Ut ||
          (E.minFilter !== _t && E.minFilter !== bt);
  }
  function P(E, _) {
    return E.generateMipmaps && _ && E.minFilter !== _t && E.minFilter !== bt;
  }
  function b(E) {
    i.generateMipmap(E);
  }
  function k(E, _, O, Q, $ = !1) {
    if (a === !1) return _;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let ee = _;
    if (
      (_ === i.RED &&
        (O === i.FLOAT && (ee = i.R32F),
        O === i.HALF_FLOAT && (ee = i.R16F),
        O === i.UNSIGNED_BYTE && (ee = i.R8)),
      _ === i.RED_INTEGER &&
        (O === i.UNSIGNED_BYTE && (ee = i.R8UI),
        O === i.UNSIGNED_SHORT && (ee = i.R16UI),
        O === i.UNSIGNED_INT && (ee = i.R32UI),
        O === i.BYTE && (ee = i.R8I),
        O === i.SHORT && (ee = i.R16I),
        O === i.INT && (ee = i.R32I)),
      _ === i.RG &&
        (O === i.FLOAT && (ee = i.RG32F),
        O === i.HALF_FLOAT && (ee = i.RG16F),
        O === i.UNSIGNED_BYTE && (ee = i.RG8)),
      _ === i.RGBA)
    ) {
      const _e = $ ? ki : Ve.getTransfer(Q);
      O === i.FLOAT && (ee = i.RGBA32F),
        O === i.HALF_FLOAT && (ee = i.RGBA16F),
        O === i.UNSIGNED_BYTE && (ee = _e === Xe ? i.SRGB8_ALPHA8 : i.RGBA8),
        O === i.UNSIGNED_SHORT_4_4_4_4 && (ee = i.RGBA4),
        O === i.UNSIGNED_SHORT_5_5_5_1 && (ee = i.RGB5_A1);
    }
    return (
      (ee === i.R16F ||
        ee === i.R32F ||
        ee === i.RG16F ||
        ee === i.RG32F ||
        ee === i.RGBA16F ||
        ee === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      ee
    );
  }
  function x(E, _, O) {
    return P(E, O) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== _t && E.minFilter !== bt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? _.mipmaps.length
      : 1;
  }
  function A(E) {
    return E === _t || E === cs || E === rr ? i.NEAREST : i.LINEAR;
  }
  function W(E) {
    const _ = E.target;
    _.removeEventListener("dispose", W), J(_), _.isVideoTexture && v.delete(_);
  }
  function Z(E) {
    const _ = E.target;
    _.removeEventListener("dispose", Z), H(_);
  }
  function J(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const O = E.source,
      Q = p.get(O);
    if (Q) {
      const $ = Q[_.__cacheKey];
      $.usedTimes--,
        $.usedTimes === 0 && L(E),
        Object.keys(Q).length === 0 && p.delete(O);
    }
    n.remove(E);
  }
  function L(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const O = E.source,
      Q = p.get(O);
    delete Q[_.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const _ = E.texture,
      O = n.get(E),
      Q = n.get(_);
    if (
      (Q.__webglTexture !== void 0 &&
        (i.deleteTexture(Q.__webglTexture), o.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(O.__webglFramebuffer[$]))
          for (let ee = 0; ee < O.__webglFramebuffer[$].length; ee++)
            i.deleteFramebuffer(O.__webglFramebuffer[$][ee]);
        else i.deleteFramebuffer(O.__webglFramebuffer[$]);
        O.__webglDepthbuffer && i.deleteRenderbuffer(O.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(O.__webglFramebuffer))
        for (let $ = 0; $ < O.__webglFramebuffer.length; $++)
          i.deleteFramebuffer(O.__webglFramebuffer[$]);
      else i.deleteFramebuffer(O.__webglFramebuffer);
      if (
        (O.__webglDepthbuffer && i.deleteRenderbuffer(O.__webglDepthbuffer),
        O.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(O.__webglMultisampledFramebuffer),
        O.__webglColorRenderbuffer)
      )
        for (let $ = 0; $ < O.__webglColorRenderbuffer.length; $++)
          O.__webglColorRenderbuffer[$] &&
            i.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);
      O.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let $ = 0, ee = _.length; $ < ee; $++) {
        const _e = n.get(_[$]);
        _e.__webglTexture &&
          (i.deleteTexture(_e.__webglTexture), o.memory.textures--),
          n.remove(_[$]);
      }
    n.remove(_), n.remove(E);
  }
  let Y = 0;
  function V() {
    Y = 0;
  }
  function ie() {
    const E = Y;
    return (
      E >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            l
        ),
      (Y += 1),
      E
    );
  }
  function K(E) {
    const _ = [];
    return (
      _.push(E.wrapS),
      _.push(E.wrapT),
      _.push(E.wrapR || 0),
      _.push(E.magFilter),
      _.push(E.minFilter),
      _.push(E.anisotropy),
      _.push(E.internalFormat),
      _.push(E.format),
      _.push(E.type),
      _.push(E.generateMipmaps),
      _.push(E.premultiplyAlpha),
      _.push(E.flipY),
      _.push(E.unpackAlignment),
      _.push(E.colorSpace),
      _.join()
    );
  }
  function q(E, _) {
    const O = n.get(E);
    if (
      (E.isVideoTexture && et(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        O.__version !== E.version)
    ) {
      const Q = E.image;
      if (Q === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Q.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Ge(O, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + _);
  }
  function D(E, _) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      Ge(O, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + _);
  }
  function B(E, _) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      Ge(O, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + _);
  }
  function ce(E, _) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      st(O, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + _);
  }
  const he = { [Or]: i.REPEAT, [Ut]: i.CLAMP_TO_EDGE, [Br]: i.MIRRORED_REPEAT },
    fe = {
      [_t]: i.NEAREST,
      [cs]: i.NEAREST_MIPMAP_NEAREST,
      [rr]: i.NEAREST_MIPMAP_LINEAR,
      [bt]: i.LINEAR,
      [Go]: i.LINEAR_MIPMAP_NEAREST,
      [fi]: i.LINEAR_MIPMAP_LINEAR,
    },
    Ee = {
      [tl]: i.NEVER,
      [ll]: i.ALWAYS,
      [nl]: i.LESS,
      [rl]: i.LEQUAL,
      [il]: i.EQUAL,
      [ol]: i.GEQUAL,
      [sl]: i.GREATER,
      [al]: i.NOTEQUAL,
    };
  function Ce(E, _, O) {
    if (
      (O
        ? (i.texParameteri(E, i.TEXTURE_WRAP_S, he[_.wrapS]),
          i.texParameteri(E, i.TEXTURE_WRAP_T, he[_.wrapT]),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, he[_.wrapR]),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, fe[_.magFilter]),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, fe[_.minFilter]))
        : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
          i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE),
          (_.wrapS !== Ut || _.wrapT !== Ut) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, A(_.magFilter)),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, A(_.minFilter)),
          _.minFilter !== _t &&
            _.minFilter !== bt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      _.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Ee[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (
        _.magFilter === _t ||
        (_.minFilter !== rr && _.minFilter !== fi) ||
        (_.type === rn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          _.type === di &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) &&
        (i.texParameterf(
          E,
          Q.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy())
        ),
        (n.get(_).__currentAnisotropy = _.anisotropy));
    }
  }
  function xe(E, _) {
    let O = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), _.addEventListener("dispose", W));
    const Q = _.source;
    let $ = p.get(Q);
    $ === void 0 && (($ = {}), p.set(Q, $));
    const ee = K(_);
    if (ee !== E.__cacheKey) {
      $[ee] === void 0 &&
        (($[ee] = { texture: i.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        $[ee].usedTimes++;
      const _e = $[E.__cacheKey];
      _e !== void 0 &&
        ($[E.__cacheKey].usedTimes--, _e.usedTimes === 0 && L(_)),
        (E.__cacheKey = ee),
        (E.__webglTexture = $[ee].texture);
    }
    return O;
  }
  function Ge(E, _, O) {
    let Q = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (Q = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (Q = i.TEXTURE_3D);
    const $ = xe(E, _),
      ee = _.source;
    t.bindTexture(Q, E.__webglTexture, i.TEXTURE0 + O);
    const _e = n.get(ee);
    if (ee.version !== _e.__version || $ === !0) {
      t.activeTexture(i.TEXTURE0 + O);
      const re = Ve.getPrimaries(Ve.workingColorSpace),
        ue = _.colorSpace === wt ? null : Ve.getPrimaries(_.colorSpace),
        R = _.colorSpace === wt || re === ue ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, R);
      const te = w(_) && T(_.image) === !1;
      let X = S(_.image, te, !1, u);
      X = it(_, X);
      const Te = T(X) || a,
        ge = s.convert(_.format, _.colorSpace);
      let ve = s.convert(_.type),
        me = k(_.internalFormat, ge, ve, _.colorSpace, _.isVideoTexture);
      Ce(Q, _, Te);
      let y;
      const se = _.mipmaps,
        ne = a && _.isVideoTexture !== !0,
        le = _e.__version === void 0 || $ === !0,
        ae = x(_, X, Te);
      if (_.isDepthTexture)
        (me = i.DEPTH_COMPONENT),
          a
            ? _.type === rn
              ? (me = i.DEPTH_COMPONENT32F)
              : _.type === nn
              ? (me = i.DEPTH_COMPONENT24)
              : _.type === gn
              ? (me = i.DEPTH24_STENCIL8)
              : (me = i.DEPTH_COMPONENT16)
            : _.type === rn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          _.format === vn &&
            me === i.DEPTH_COMPONENT &&
            _.type !== kr &&
            _.type !== nn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (_.type = nn),
            (ve = s.convert(_.type))),
          _.format === Jn &&
            me === i.DEPTH_COMPONENT &&
            ((me = i.DEPTH_STENCIL),
            _.type !== gn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (_.type = gn),
              (ve = s.convert(_.type)))),
          le &&
            (ne
              ? t.texStorage2D(i.TEXTURE_2D, 1, me, X.width, X.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  me,
                  X.width,
                  X.height,
                  0,
                  ge,
                  ve,
                  null
                ));
      else if (_.isDataTexture)
        if (se.length > 0 && Te) {
          ne &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, ae, me, se[0].width, se[0].height);
          for (let j = 0, pe = se.length; j < pe; j++)
            (y = se[j]),
              ne
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    j,
                    0,
                    0,
                    y.width,
                    y.height,
                    ge,
                    ve,
                    y.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    j,
                    me,
                    y.width,
                    y.height,
                    0,
                    ge,
                    ve,
                    y.data
                  );
          _.generateMipmaps = !1;
        } else
          ne
            ? (le && t.texStorage2D(i.TEXTURE_2D, ae, me, X.width, X.height),
              t.texSubImage2D(
                i.TEXTURE_2D,
                0,
                0,
                0,
                X.width,
                X.height,
                ge,
                ve,
                X.data
              ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                me,
                X.width,
                X.height,
                0,
                ge,
                ve,
                X.data
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          ne &&
            le &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              ae,
              me,
              se[0].width,
              se[0].height,
              X.depth
            );
          for (let j = 0, pe = se.length; j < pe; j++)
            (y = se[j]),
              _.format !== It
                ? ge !== null
                  ? ne
                    ? t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        j,
                        0,
                        0,
                        0,
                        y.width,
                        y.height,
                        X.depth,
                        ge,
                        y.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        i.TEXTURE_2D_ARRAY,
                        j,
                        me,
                        y.width,
                        y.height,
                        X.depth,
                        0,
                        y.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : ne
                ? t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    0,
                    0,
                    0,
                    y.width,
                    y.height,
                    X.depth,
                    ge,
                    ve,
                    y.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    me,
                    y.width,
                    y.height,
                    X.depth,
                    0,
                    ge,
                    ve,
                    y.data
                  );
        } else {
          ne &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, ae, me, se[0].width, se[0].height);
          for (let j = 0, pe = se.length; j < pe; j++)
            (y = se[j]),
              _.format !== It
                ? ge !== null
                  ? ne
                    ? t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        j,
                        0,
                        0,
                        y.width,
                        y.height,
                        ge,
                        y.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        j,
                        me,
                        y.width,
                        y.height,
                        0,
                        y.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : ne
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    j,
                    0,
                    0,
                    y.width,
                    y.height,
                    ge,
                    ve,
                    y.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    j,
                    me,
                    y.width,
                    y.height,
                    0,
                    ge,
                    ve,
                    y.data
                  );
        }
      else if (_.isDataArrayTexture)
        ne
          ? (le &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                ae,
                me,
                X.width,
                X.height,
                X.depth
              ),
            t.texSubImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              X.width,
              X.height,
              X.depth,
              ge,
              ve,
              X.data
            ))
          : t.texImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              me,
              X.width,
              X.height,
              X.depth,
              0,
              ge,
              ve,
              X.data
            );
      else if (_.isData3DTexture)
        ne
          ? (le &&
              t.texStorage3D(i.TEXTURE_3D, ae, me, X.width, X.height, X.depth),
            t.texSubImage3D(
              i.TEXTURE_3D,
              0,
              0,
              0,
              0,
              X.width,
              X.height,
              X.depth,
              ge,
              ve,
              X.data
            ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              me,
              X.width,
              X.height,
              X.depth,
              0,
              ge,
              ve,
              X.data
            );
      else if (_.isFramebufferTexture) {
        if (le)
          if (ne) t.texStorage2D(i.TEXTURE_2D, ae, me, X.width, X.height);
          else {
            let j = X.width,
              pe = X.height;
            for (let ye = 0; ye < ae; ye++)
              t.texImage2D(i.TEXTURE_2D, ye, me, j, pe, 0, ge, ve, null),
                (j >>= 1),
                (pe >>= 1);
          }
      } else if (se.length > 0 && Te) {
        ne &&
          le &&
          t.texStorage2D(i.TEXTURE_2D, ae, me, se[0].width, se[0].height);
        for (let j = 0, pe = se.length; j < pe; j++)
          (y = se[j]),
            ne
              ? t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ge, ve, y)
              : t.texImage2D(i.TEXTURE_2D, j, me, ge, ve, y);
        _.generateMipmaps = !1;
      } else
        ne
          ? (le && t.texStorage2D(i.TEXTURE_2D, ae, me, X.width, X.height),
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ge, ve, X))
          : t.texImage2D(i.TEXTURE_2D, 0, me, ge, ve, X);
      P(_, Te) && b(Q),
        (_e.__version = ee.version),
        _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function st(E, _, O) {
    if (_.image.length !== 6) return;
    const Q = xe(E, _),
      $ = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + O);
    const ee = n.get($);
    if ($.version !== ee.__version || Q === !0) {
      t.activeTexture(i.TEXTURE0 + O);
      const _e = Ve.getPrimaries(Ve.workingColorSpace),
        re = _.colorSpace === wt ? null : Ve.getPrimaries(_.colorSpace),
        ue =
          _.colorSpace === wt || _e === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const R = _.isCompressedTexture || _.image[0].isCompressedTexture,
        te = _.image[0] && _.image[0].isDataTexture,
        X = [];
      for (let j = 0; j < 6; j++)
        !R && !te
          ? (X[j] = S(_.image[j], !1, !0, c))
          : (X[j] = te ? _.image[j].image : _.image[j]),
          (X[j] = it(_, X[j]));
      const Te = X[0],
        ge = T(Te) || a,
        ve = s.convert(_.format, _.colorSpace),
        me = s.convert(_.type),
        y = k(_.internalFormat, ve, me, _.colorSpace),
        se = a && _.isVideoTexture !== !0,
        ne = ee.__version === void 0 || Q === !0;
      let le = x(_, Te, ge);
      Ce(i.TEXTURE_CUBE_MAP, _, ge);
      let ae;
      if (R) {
        se &&
          ne &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, le, y, Te.width, Te.height);
        for (let j = 0; j < 6; j++) {
          ae = X[j].mipmaps;
          for (let pe = 0; pe < ae.length; pe++) {
            const ye = ae[pe];
            _.format !== It
              ? ve !== null
                ? se
                  ? t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      pe,
                      0,
                      0,
                      ye.width,
                      ye.height,
                      ve,
                      ye.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      pe,
                      y,
                      ye.width,
                      ye.height,
                      0,
                      ye.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : se
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  pe,
                  0,
                  0,
                  ye.width,
                  ye.height,
                  ve,
                  me,
                  ye.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  pe,
                  y,
                  ye.width,
                  ye.height,
                  0,
                  ve,
                  me,
                  ye.data
                );
          }
        }
      } else {
        (ae = _.mipmaps),
          se &&
            ne &&
            (ae.length > 0 && le++,
            t.texStorage2D(i.TEXTURE_CUBE_MAP, le, y, X[0].width, X[0].height));
        for (let j = 0; j < 6; j++)
          if (te) {
            se
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  X[j].width,
                  X[j].height,
                  ve,
                  me,
                  X[j].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  y,
                  X[j].width,
                  X[j].height,
                  0,
                  ve,
                  me,
                  X[j].data
                );
            for (let pe = 0; pe < ae.length; pe++) {
              const Ke = ae[pe].image[j].image;
              se
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    pe + 1,
                    0,
                    0,
                    Ke.width,
                    Ke.height,
                    ve,
                    me,
                    Ke.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    pe + 1,
                    y,
                    Ke.width,
                    Ke.height,
                    0,
                    ve,
                    me,
                    Ke.data
                  );
            }
          } else {
            se
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  ve,
                  me,
                  X[j]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  y,
                  ve,
                  me,
                  X[j]
                );
            for (let pe = 0; pe < ae.length; pe++) {
              const ye = ae[pe];
              se
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    pe + 1,
                    0,
                    0,
                    ve,
                    me,
                    ye.image[j]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    pe + 1,
                    y,
                    ve,
                    me,
                    ye.image[j]
                  );
            }
          }
      }
      P(_, ge) && b(i.TEXTURE_CUBE_MAP),
        (ee.__version = $.version),
        _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function De(E, _, O, Q, $, ee) {
    const _e = s.convert(O.format, O.colorSpace),
      re = s.convert(O.type),
      ue = k(O.internalFormat, _e, re, O.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const te = Math.max(1, _.width >> ee),
        X = Math.max(1, _.height >> ee);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY
        ? t.texImage3D($, ee, ue, te, X, _.depth, 0, _e, re, null)
        : t.texImage2D($, ee, ue, te, X, 0, _e, re, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E),
      He(_)
        ? d.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            Q,
            $,
            n.get(O).__webglTexture,
            0,
            Le(_)
          )
        : ($ === i.TEXTURE_2D ||
            ($ >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            Q,
            $,
            n.get(O).__webglTexture,
            ee
          ),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function I(E, _, O) {
    if (
      (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer && !_.stencilBuffer)
    ) {
      let Q = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (O || He(_)) {
        const $ = _.depthTexture;
        $ &&
          $.isDepthTexture &&
          ($.type === rn
            ? (Q = i.DEPTH_COMPONENT32F)
            : $.type === nn && (Q = i.DEPTH_COMPONENT24));
        const ee = Le(_);
        He(_)
          ? d.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              ee,
              Q,
              _.width,
              _.height
            )
          : i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ee,
              Q,
              _.width,
              _.height
            );
      } else i.renderbufferStorage(i.RENDERBUFFER, Q, _.width, _.height);
      i.framebufferRenderbuffer(
        i.FRAMEBUFFER,
        i.DEPTH_ATTACHMENT,
        i.RENDERBUFFER,
        E
      );
    } else if (_.depthBuffer && _.stencilBuffer) {
      const Q = Le(_);
      O && He(_) === !1
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            Q,
            i.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : He(_)
        ? d.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            Q,
            i.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : i.renderbufferStorage(
            i.RENDERBUFFER,
            i.DEPTH_STENCIL,
            _.width,
            _.height
          ),
        i.framebufferRenderbuffer(
          i.FRAMEBUFFER,
          i.DEPTH_STENCIL_ATTACHMENT,
          i.RENDERBUFFER,
          E
        );
    } else {
      const Q = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let $ = 0; $ < Q.length; $++) {
        const ee = Q[$],
          _e = s.convert(ee.format, ee.colorSpace),
          re = s.convert(ee.type),
          ue = k(ee.internalFormat, _e, re, ee.colorSpace),
          R = Le(_);
        O && He(_) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              R,
              ue,
              _.width,
              _.height
            )
          : He(_)
          ? d.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              R,
              ue,
              _.width,
              _.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, ue, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Qe(E, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, E),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      q(_.depthTexture, 0);
    const Q = n.get(_.depthTexture).__webglTexture,
      $ = Le(_);
    if (_.depthTexture.format === vn)
      He(_)
        ? d.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            Q,
            0,
            $
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            Q,
            0
          );
    else if (_.depthTexture.format === Jn)
      He(_)
        ? d.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            Q,
            0,
            $
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            Q,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Me(E) {
    const _ = n.get(E),
      O = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Qe(_.__webglFramebuffer, E);
    } else if (O) {
      _.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Q]),
          (_.__webglDepthbuffer[Q] = i.createRenderbuffer()),
          I(_.__webglDepthbuffer[Q], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
        (_.__webglDepthbuffer = i.createRenderbuffer()),
        I(_.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Pe(E, _, O) {
    const Q = n.get(E);
    _ !== void 0 &&
      De(
        Q.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      O !== void 0 && Me(E);
  }
  function be(E) {
    const _ = E.texture,
      O = n.get(E),
      Q = n.get(_);
    E.addEventListener("dispose", Z),
      E.isWebGLMultipleRenderTargets !== !0 &&
        (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()),
        (Q.__version = _.version),
        o.memory.textures++);
    const $ = E.isWebGLCubeRenderTarget === !0,
      ee = E.isWebGLMultipleRenderTargets === !0,
      _e = T(E) || a;
    if ($) {
      O.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (a && _.mipmaps && _.mipmaps.length > 0) {
          O.__webglFramebuffer[re] = [];
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            O.__webglFramebuffer[re][ue] = i.createFramebuffer();
        } else O.__webglFramebuffer[re] = i.createFramebuffer();
    } else {
      if (a && _.mipmaps && _.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let re = 0; re < _.mipmaps.length; re++)
          O.__webglFramebuffer[re] = i.createFramebuffer();
      } else O.__webglFramebuffer = i.createFramebuffer();
      if (ee)
        if (r.drawBuffers) {
          const re = E.texture;
          for (let ue = 0, R = re.length; ue < R; ue++) {
            const te = n.get(re[ue]);
            te.__webglTexture === void 0 &&
              ((te.__webglTexture = i.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && E.samples > 0 && He(E) === !1) {
        const re = ee ? _ : [_];
        (O.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let ue = 0; ue < re.length; ue++) {
          const R = re[ue];
          (O.__webglColorRenderbuffer[ue] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[ue]);
          const te = s.convert(R.format, R.colorSpace),
            X = s.convert(R.type),
            Te = k(
              R.internalFormat,
              te,
              X,
              R.colorSpace,
              E.isXRRenderTarget === !0
            ),
            ge = Le(E);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ge,
            Te,
            E.width,
            E.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ue,
              i.RENDERBUFFER,
              O.__webglColorRenderbuffer[ue]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((O.__webglDepthRenderbuffer = i.createRenderbuffer()),
            I(O.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if ($) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture),
        Ce(i.TEXTURE_CUBE_MAP, _, _e);
      for (let re = 0; re < 6; re++)
        if (a && _.mipmaps && _.mipmaps.length > 0)
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            De(
              O.__webglFramebuffer[re][ue],
              E,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + re,
              ue
            );
        else
          De(
            O.__webglFramebuffer[re],
            E,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + re,
            0
          );
      P(_, _e) && b(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      const re = E.texture;
      for (let ue = 0, R = re.length; ue < R; ue++) {
        const te = re[ue],
          X = n.get(te);
        t.bindTexture(i.TEXTURE_2D, X.__webglTexture),
          Ce(i.TEXTURE_2D, te, _e),
          De(
            O.__webglFramebuffer,
            E,
            te,
            i.COLOR_ATTACHMENT0 + ue,
            i.TEXTURE_2D,
            0
          ),
          P(te, _e) && b(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = i.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (a
            ? (re = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
        t.bindTexture(re, Q.__webglTexture),
        Ce(re, _, _e),
        a && _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ue = 0; ue < _.mipmaps.length; ue++)
          De(O.__webglFramebuffer[ue], E, _, i.COLOR_ATTACHMENT0, re, ue);
      else De(O.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, re, 0);
      P(_, _e) && b(re), t.unbindTexture();
    }
    E.depthBuffer && Me(E);
  }
  function ke(E) {
    const _ = T(E) || a,
      O = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let Q = 0, $ = O.length; Q < $; Q++) {
      const ee = O[Q];
      if (P(ee, _)) {
        const _e = E.isWebGLCubeRenderTarget
            ? i.TEXTURE_CUBE_MAP
            : i.TEXTURE_2D,
          re = n.get(ee).__webglTexture;
        t.bindTexture(_e, re), b(_e), t.unbindTexture();
      }
    }
  }
  function Ne(E) {
    if (a && E.samples > 0 && He(E) === !1) {
      const _ = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        O = E.width,
        Q = E.height;
      let $ = i.COLOR_BUFFER_BIT;
      const ee = [],
        _e = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        re = n.get(E),
        ue = E.isWebGLMultipleRenderTargets === !0;
      if (ue)
        for (let R = 0; R < _.length; R++)
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let R = 0; R < _.length; R++) {
        ee.push(i.COLOR_ATTACHMENT0 + R), E.depthBuffer && ee.push(_e);
        const te =
          re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (
          (te === !1 &&
            (E.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT),
            E.stencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)),
          ue &&
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            ),
          te === !0 &&
            (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [_e]),
            i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_e])),
          ue)
        ) {
          const X = n.get(_[R]).__webglTexture;
          i.framebufferTexture2D(
            i.DRAW_FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_2D,
            X,
            0
          );
        }
        i.blitFramebuffer(0, 0, O, Q, 0, 0, O, Q, $, i.NEAREST),
          m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ee);
      }
      if (
        (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        ue)
      )
        for (let R = 0; R < _.length; R++) {
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            );
          const te = n.get(_[R]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.TEXTURE_2D,
              te,
              0
            );
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function Le(E) {
    return Math.min(f, E.samples);
  }
  function He(E) {
    const _ = n.get(E);
    return (
      a &&
      E.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function et(E) {
    const _ = o.render.frame;
    v.get(E) !== _ && (v.set(E, _), E.update());
  }
  function it(E, _) {
    const O = E.colorSpace,
      Q = E.format,
      $ = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        E.format === zr ||
        (O !== Kt &&
          O !== wt &&
          (Ve.getTransfer(O) === Xe
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && Q === It
                ? ((E.format = zr),
                  (E.minFilter = bt),
                  (E.generateMipmaps = !1))
                : (_ = Ga.sRGBToLinear(_))
              : (Q !== It || $ !== on) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                O
              ))),
      _
    );
  }
  (this.allocateTextureUnit = ie),
    (this.resetTextureUnits = V),
    (this.setTexture2D = q),
    (this.setTexture2DArray = D),
    (this.setTexture3D = B),
    (this.setTextureCube = ce),
    (this.rebindTextures = Pe),
    (this.setupRenderTarget = be),
    (this.updateRenderTargetMipmap = ke),
    (this.updateMultisampleRenderTarget = Ne),
    (this.setupDepthRenderbuffer = Me),
    (this.setupFrameBufferTexture = De),
    (this.useMultisampledRTT = He);
}
function Sd(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = wt) {
    let a;
    const l = Ve.getTransfer(o);
    if (s === on) return i.UNSIGNED_BYTE;
    if (s === Ua) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === Ia) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === Ho) return i.BYTE;
    if (s === Vo) return i.SHORT;
    if (s === kr) return i.UNSIGNED_SHORT;
    if (s === Da) return i.INT;
    if (s === nn) return i.UNSIGNED_INT;
    if (s === rn) return i.FLOAT;
    if (s === di)
      return n
        ? i.HALF_FLOAT
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === ko) return i.ALPHA;
    if (s === It) return i.RGBA;
    if (s === Wo) return i.LUMINANCE;
    if (s === Xo) return i.LUMINANCE_ALPHA;
    if (s === vn) return i.DEPTH_COMPONENT;
    if (s === Jn) return i.DEPTH_STENCIL;
    if (s === zr)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Yo) return i.RED;
    if (s === Na) return i.RED_INTEGER;
    if (s === qo) return i.RG;
    if (s === Fa) return i.RG_INTEGER;
    if (s === Oa) return i.RGBA_INTEGER;
    if (s === sr || s === ar || s === or || s === lr)
      if (l === Xe)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === sr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ar) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === or) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === lr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === sr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ar) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === or) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === lr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === us || s === hs || s === fs || s === ds)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === us) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === hs) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === fs) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ds) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === jo)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === ps || s === ms)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === ps)
          return l === Xe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === ms)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === _s ||
      s === gs ||
      s === vs ||
      s === xs ||
      s === Ms ||
      s === Ss ||
      s === Es ||
      s === Ts ||
      s === ys ||
      s === As ||
      s === bs ||
      s === Rs ||
      s === ws ||
      s === Cs
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === _s)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === gs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === vs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === xs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ms)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ss)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Es)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ts)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === ys)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === As)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === bs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Rs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ws)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Cs)
          return l === Xe
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === cr || s === Ps || s === Ls)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === cr)
          return l === Xe
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === Ps) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Ls) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (s === Ko || s === Ds || s === Us || s === Is)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === cr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Ds) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Us) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Is) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === gn
      ? n
        ? i.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : i[s] !== void 0
      ? i[s]
      : null;
  }
  return { convert: r };
}
class Ed extends Rt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Gi extends Tt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Td = { type: "move" };
class Lr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Gi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Gi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new N()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new N())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Gi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new N()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new N())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const p = t.getJointPose(g, n),
            h = this._getHandJoint(c, g);
          p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null);
        }
        const u = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          d = u.position.distanceTo(f.position),
          m = 0.02,
          v = 0.005;
        c.inputState.pinching && d > m + v
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= m - v &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Td)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Gi();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class yd extends vt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : vn), u !== vn && u !== Jn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === vn && (n = nn),
      n === void 0 && u === Jn && (n = gn),
      super(null, r, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : _t),
      (this.minFilter = l !== void 0 ? l : _t),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Ad extends yn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      f = null,
      d = null,
      m = null,
      v = null;
    const g = t.getContextAttributes();
    let p = null,
      h = null;
    const C = [],
      S = [],
      T = new Rt();
    T.layers.enable(1), (T.viewport = new ot());
    const w = new Rt();
    w.layers.enable(2), (w.viewport = new ot());
    const P = [T, w],
      b = new Ed();
    b.layers.enable(1), b.layers.enable(2);
    let k = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (D) {
        let B = C[D];
        return (
          B === void 0 && ((B = new Lr()), (C[D] = B)), B.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (D) {
        let B = C[D];
        return B === void 0 && ((B = new Lr()), (C[D] = B)), B.getGripSpace();
      }),
      (this.getHand = function (D) {
        let B = C[D];
        return B === void 0 && ((B = new Lr()), (C[D] = B)), B.getHandSpace();
      });
    function A(D) {
      const B = S.indexOf(D.inputSource);
      if (B === -1) return;
      const ce = C[B];
      ce !== void 0 &&
        (ce.update(D.inputSource, D.frame, c || o),
        ce.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function W() {
      r.removeEventListener("select", A),
        r.removeEventListener("selectstart", A),
        r.removeEventListener("selectend", A),
        r.removeEventListener("squeeze", A),
        r.removeEventListener("squeezestart", A),
        r.removeEventListener("squeezeend", A),
        r.removeEventListener("end", W),
        r.removeEventListener("inputsourceschange", Z);
      for (let D = 0; D < C.length; D++) {
        const B = S[D];
        B !== null && ((S[D] = null), C[D].disconnect(B));
      }
      (k = null),
        (x = null),
        e.setRenderTarget(p),
        (m = null),
        (d = null),
        (f = null),
        (r = null),
        (h = null),
        q.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (D) {
      (s = D),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (D) {
        (a = D),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (D) {
        c = D;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : m;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (D) {
        if (((r = D), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", A),
            r.addEventListener("selectstart", A),
            r.addEventListener("selectend", A),
            r.addEventListener("squeeze", A),
            r.addEventListener("squeezestart", A),
            r.addEventListener("squeezeend", A),
            r.addEventListener("end", W),
            r.addEventListener("inputsourceschange", Z),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const B = {
              antialias: r.renderState.layers === void 0 ? g.antialias : !0,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, t, B)),
              r.updateRenderState({ baseLayer: m }),
              (h = new Sn(m.framebufferWidth, m.framebufferHeight, {
                format: It,
                type: on,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              }));
          } else {
            let B = null,
              ce = null,
              he = null;
            g.depth &&
              ((he = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (B = g.stencil ? Jn : vn),
              (ce = g.stencil ? gn : nn));
            const fe = {
              colorFormat: t.RGBA8,
              depthFormat: he,
              scaleFactor: s,
            };
            (f = new XRWebGLBinding(r, t)),
              (d = f.createProjectionLayer(fe)),
              r.updateRenderState({ layers: [d] }),
              (h = new Sn(d.textureWidth, d.textureHeight, {
                format: It,
                type: on,
                depthTexture: new yd(
                  d.textureWidth,
                  d.textureHeight,
                  ce,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  B
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
              }));
            const Ee = e.properties.get(h);
            Ee.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (h.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            q.setContext(r),
            q.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      });
    function Z(D) {
      for (let B = 0; B < D.removed.length; B++) {
        const ce = D.removed[B],
          he = S.indexOf(ce);
        he >= 0 && ((S[he] = null), C[he].disconnect(ce));
      }
      for (let B = 0; B < D.added.length; B++) {
        const ce = D.added[B];
        let he = S.indexOf(ce);
        if (he === -1) {
          for (let Ee = 0; Ee < C.length; Ee++)
            if (Ee >= S.length) {
              S.push(ce), (he = Ee);
              break;
            } else if (S[Ee] === null) {
              (S[Ee] = ce), (he = Ee);
              break;
            }
          if (he === -1) break;
        }
        const fe = C[he];
        fe && fe.connect(ce);
      }
    }
    const J = new N(),
      L = new N();
    function H(D, B, ce) {
      J.setFromMatrixPosition(B.matrixWorld),
        L.setFromMatrixPosition(ce.matrixWorld);
      const he = J.distanceTo(L),
        fe = B.projectionMatrix.elements,
        Ee = ce.projectionMatrix.elements,
        Ce = fe[14] / (fe[10] - 1),
        xe = fe[14] / (fe[10] + 1),
        Ge = (fe[9] + 1) / fe[5],
        st = (fe[9] - 1) / fe[5],
        De = (fe[8] - 1) / fe[0],
        I = (Ee[8] + 1) / Ee[0],
        Qe = Ce * De,
        Me = Ce * I,
        Pe = he / (-De + I),
        be = Pe * -De;
      B.matrixWorld.decompose(D.position, D.quaternion, D.scale),
        D.translateX(be),
        D.translateZ(Pe),
        D.matrixWorld.compose(D.position, D.quaternion, D.scale),
        D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const ke = Ce + Pe,
        Ne = xe + Pe,
        Le = Qe - be,
        He = Me + (he - be),
        et = ((Ge * xe) / Ne) * ke,
        it = ((st * xe) / Ne) * ke;
      D.projectionMatrix.makePerspective(Le, He, et, it, ke, Ne),
        D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function Y(D, B) {
      B === null
        ? D.matrixWorld.copy(D.matrix)
        : D.matrixWorld.multiplyMatrices(B.matrixWorld, D.matrix),
        D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function (D) {
      if (r === null) return;
      (b.near = w.near = T.near = D.near),
        (b.far = w.far = T.far = D.far),
        (k !== b.near || x !== b.far) &&
          (r.updateRenderState({ depthNear: b.near, depthFar: b.far }),
          (k = b.near),
          (x = b.far));
      const B = D.parent,
        ce = b.cameras;
      Y(b, B);
      for (let he = 0; he < ce.length; he++) Y(ce[he], B);
      ce.length === 2
        ? H(b, T, w)
        : b.projectionMatrix.copy(T.projectionMatrix),
        V(D, b, B);
    };
    function V(D, B, ce) {
      ce === null
        ? D.matrix.copy(B.matrixWorld)
        : (D.matrix.copy(ce.matrixWorld),
          D.matrix.invert(),
          D.matrix.multiply(B.matrixWorld)),
        D.matrix.decompose(D.position, D.quaternion, D.scale),
        D.updateMatrixWorld(!0),
        D.projectionMatrix.copy(B.projectionMatrix),
        D.projectionMatrixInverse.copy(B.projectionMatrixInverse),
        D.isPerspectiveCamera &&
          ((D.fov = pi * 2 * Math.atan(1 / D.projectionMatrix.elements[5])),
          (D.zoom = 1));
    }
    (this.getCamera = function () {
      return b;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return l;
      }),
      (this.setFoveation = function (D) {
        (l = D),
          d !== null && (d.fixedFoveation = D),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
      });
    let ie = null;
    function K(D, B) {
      if (((u = B.getViewerPose(c || o)), (v = B), u !== null)) {
        const ce = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(h, m.framebuffer),
          e.setRenderTarget(h));
        let he = !1;
        ce.length !== b.cameras.length && ((b.cameras.length = 0), (he = !0));
        for (let fe = 0; fe < ce.length; fe++) {
          const Ee = ce[fe];
          let Ce = null;
          if (m !== null) Ce = m.getViewport(Ee);
          else {
            const Ge = f.getViewSubImage(d, Ee);
            (Ce = Ge.viewport),
              fe === 0 &&
                (e.setRenderTargetTextures(
                  h,
                  Ge.colorTexture,
                  d.ignoreDepthValues ? void 0 : Ge.depthStencilTexture
                ),
                e.setRenderTarget(h));
          }
          let xe = P[fe];
          xe === void 0 &&
            ((xe = new Rt()),
            xe.layers.enable(fe),
            (xe.viewport = new ot()),
            (P[fe] = xe)),
            xe.matrix.fromArray(Ee.transform.matrix),
            xe.matrix.decompose(xe.position, xe.quaternion, xe.scale),
            xe.projectionMatrix.fromArray(Ee.projectionMatrix),
            xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),
            xe.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height),
            fe === 0 &&
              (b.matrix.copy(xe.matrix),
              b.matrix.decompose(b.position, b.quaternion, b.scale)),
            he === !0 && b.cameras.push(xe);
        }
      }
      for (let ce = 0; ce < C.length; ce++) {
        const he = S[ce],
          fe = C[ce];
        he !== null && fe !== void 0 && fe.update(he, B, c || o);
      }
      ie && ie(D, B),
        B.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: B }),
        (v = null);
    }
    const q = new Ja();
    q.setAnimationLoop(K),
      (this.setAnimationLoop = function (D) {
        ie = D;
      }),
      (this.dispose = function () {});
  }
}
function bd(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, ja(i)),
      h.isFog
        ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
        : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, C, S, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? s(p, h)
      : h.isMeshToonMaterial
      ? (s(p, h), f(p, h))
      : h.isMeshPhongMaterial
      ? (s(p, h), u(p, h))
      : h.isMeshStandardMaterial
      ? (s(p, h), d(p, h), h.isMeshPhysicalMaterial && m(p, h, T))
      : h.isMeshMatcapMaterial
      ? (s(p, h), v(p, h))
      : h.isMeshDepthMaterial
      ? s(p, h)
      : h.isMeshDistanceMaterial
      ? (s(p, h), g(p, h))
      : h.isMeshNormalMaterial
      ? s(p, h)
      : h.isLineBasicMaterial
      ? (o(p, h), h.isLineDashedMaterial && a(p, h))
      : h.isPointsMaterial
      ? l(p, h, C, S)
      : h.isSpriteMaterial
      ? c(p, h)
      : h.isShadowMaterial
      ? (p.color.value.copy(h.color), (p.opacity.value = h.opacity))
      : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    (p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === gt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === gt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const C = e.get(h).envMap;
    if (
      (C &&
        ((p.envMap.value = C),
        (p.flipEnvMap.value =
          C.isCubeTexture && C.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = h.reflectivity),
        (p.ior.value = h.ior),
        (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap)
    ) {
      p.lightMap.value = h.lightMap;
      const S = i._useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = h.lightMapIntensity * S),
        t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap &&
      ((p.aoMap.value = h.aoMap),
      (p.aoMapIntensity.value = h.aoMapIntensity),
      t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform));
  }
  function a(p, h) {
    (p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale);
  }
  function l(p, h, C, S) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * C),
      (p.scale.value = S * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4));
  }
  function f(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    (p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, C) {
    (p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === gt && p.clearcoatNormalScale.value.negate())),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = C.texture),
        p.transmissionSamplerSize.value.set(C.width, C.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation)
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function g(p, h) {
    const C = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),
      (p.nearDistance.value = C.shadow.camera.near),
      (p.farDistance.value = C.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Rd(i, e, t, n) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(C, S) {
    const T = S.program;
    n.uniformBlockBinding(C, T);
  }
  function c(C, S) {
    let T = r[C.id];
    T === void 0 &&
      (v(C), (T = u(C)), (r[C.id] = T), C.addEventListener("dispose", p));
    const w = S.program;
    n.updateUBOMapping(C, w);
    const P = e.render.frame;
    s[C.id] !== P && (d(C), (s[C.id] = P));
  }
  function u(C) {
    const S = f();
    C.__bindingPointIndex = S;
    const T = i.createBuffer(),
      w = C.__size,
      P = C.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, T),
      i.bufferData(i.UNIFORM_BUFFER, w, P),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, S, T),
      T
    );
  }
  function f() {
    for (let C = 0; C < a; C++) if (o.indexOf(C) === -1) return o.push(C), C;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function d(C) {
    const S = r[C.id],
      T = C.uniforms,
      w = C.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let P = 0, b = T.length; P < b; P++) {
      const k = T[P];
      if (m(k, P, w) === !0) {
        const x = k.__offset,
          A = Array.isArray(k.value) ? k.value : [k.value];
        let W = 0;
        for (let Z = 0; Z < A.length; Z++) {
          const J = A[Z],
            L = g(J);
          typeof J == "number"
            ? ((k.__data[0] = J),
              i.bufferSubData(i.UNIFORM_BUFFER, x + W, k.__data))
            : J.isMatrix3
            ? ((k.__data[0] = J.elements[0]),
              (k.__data[1] = J.elements[1]),
              (k.__data[2] = J.elements[2]),
              (k.__data[3] = J.elements[0]),
              (k.__data[4] = J.elements[3]),
              (k.__data[5] = J.elements[4]),
              (k.__data[6] = J.elements[5]),
              (k.__data[7] = J.elements[0]),
              (k.__data[8] = J.elements[6]),
              (k.__data[9] = J.elements[7]),
              (k.__data[10] = J.elements[8]),
              (k.__data[11] = J.elements[0]))
            : (J.toArray(k.__data, W),
              (W += L.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        i.bufferSubData(i.UNIFORM_BUFFER, x, k.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(C, S, T) {
    const w = C.value;
    if (T[S] === void 0) {
      if (typeof w == "number") T[S] = w;
      else {
        const P = Array.isArray(w) ? w : [w],
          b = [];
        for (let k = 0; k < P.length; k++) b.push(P[k].clone());
        T[S] = b;
      }
      return !0;
    } else if (typeof w == "number") {
      if (T[S] !== w) return (T[S] = w), !0;
    } else {
      const P = Array.isArray(T[S]) ? T[S] : [T[S]],
        b = Array.isArray(w) ? w : [w];
      for (let k = 0; k < P.length; k++) {
        const x = P[k];
        if (x.equals(b[k]) === !1) return x.copy(b[k]), !0;
      }
    }
    return !1;
  }
  function v(C) {
    const S = C.uniforms;
    let T = 0;
    const w = 16;
    let P = 0;
    for (let b = 0, k = S.length; b < k; b++) {
      const x = S[b],
        A = { boundary: 0, storage: 0 },
        W = Array.isArray(x.value) ? x.value : [x.value];
      for (let Z = 0, J = W.length; Z < J; Z++) {
        const L = W[Z],
          H = g(L);
        (A.boundary += H.boundary), (A.storage += H.storage);
      }
      if (
        ((x.__data = new Float32Array(
          A.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (x.__offset = T),
        b > 0)
      ) {
        P = T % w;
        const Z = w - P;
        P !== 0 && Z - A.boundary < 0 && ((T += w - P), (x.__offset = T));
      }
      T += A.storage;
    }
    return (
      (P = T % w), P > 0 && (T += w - P), (C.__size = T), (C.__cache = {}), this
    );
  }
  function g(C) {
    const S = { boundary: 0, storage: 0 };
    return (
      typeof C == "number"
        ? ((S.boundary = 4), (S.storage = 4))
        : C.isVector2
        ? ((S.boundary = 8), (S.storage = 8))
        : C.isVector3 || C.isColor
        ? ((S.boundary = 16), (S.storage = 12))
        : C.isVector4
        ? ((S.boundary = 16), (S.storage = 16))
        : C.isMatrix3
        ? ((S.boundary = 48), (S.storage = 48))
        : C.isMatrix4
        ? ((S.boundary = 64), (S.storage = 64))
        : C.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            C
          ),
      S
    );
  }
  function p(C) {
    const S = C.target;
    S.removeEventListener("dispose", p);
    const T = o.indexOf(S.__bindingPointIndex);
    o.splice(T, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete s[S.id];
  }
  function h() {
    for (const C in r) i.deleteBuffer(r[C]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: h };
}
class io {
  constructor(e = {}) {
    const {
      canvas: t = yl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? (d = n.getContextAttributes().alpha) : (d = o);
    const m = new Uint32Array(4),
      v = new Int32Array(4);
    let g = null,
      p = null;
    const h = [],
      C = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = at),
      (this._useLegacyLights = !1),
      (this.toneMapping = an),
      (this.toneMappingExposure = 1);
    const S = this;
    let T = !1,
      w = 0,
      P = 0,
      b = null,
      k = -1,
      x = null;
    const A = new ot(),
      W = new ot();
    let Z = null;
    const J = new Ye(0);
    let L = 0,
      H = t.width,
      Y = t.height,
      V = 1,
      ie = null,
      K = null;
    const q = new ot(0, 0, H, Y),
      D = new ot(0, 0, H, Y);
    let B = !1;
    const ce = new $a();
    let he = !1,
      fe = !1,
      Ee = null;
    const Ce = new lt(),
      xe = new Oe(),
      Ge = new N(),
      st = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function De() {
      return b === null ? V : 1;
    }
    let I = n;
    function Qe(M, U) {
      for (let z = 0; z < M.length; z++) {
        const F = M[z],
          G = t.getContext(F, U);
        if (G !== null) return G;
      }
      return null;
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Vr}`),
        t.addEventListener("webglcontextlost", se, !1),
        t.addEventListener("webglcontextrestored", ne, !1),
        t.addEventListener("webglcontextcreationerror", le, !1),
        I === null)
      ) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (S.isWebGL1Renderer === !0 && U.shift(), (I = Qe(U, M)), I === null)
        )
          throw Qe(U)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" &&
        I instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
        ),
        I.getShaderPrecisionFormat === void 0 &&
          (I.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (M) {
      throw (console.error("THREE.WebGLRenderer: " + M.message), M);
    }
    let Me,
      Pe,
      be,
      ke,
      Ne,
      Le,
      He,
      et,
      it,
      E,
      _,
      O,
      Q,
      $,
      ee,
      _e,
      re,
      ue,
      R,
      te,
      X,
      Te,
      ge,
      ve;
    function me() {
      (Me = new Oh(I)),
        (Pe = new Ph(I, Me, e)),
        Me.init(Pe),
        (Te = new Sd(I, Me, Pe)),
        (be = new xd(I, Me, Pe)),
        (ke = new Gh(I)),
        (Ne = new sd()),
        (Le = new Md(I, Me, be, Ne, Pe, Te, ke)),
        (He = new Dh(S)),
        (et = new Fh(S)),
        (it = new Kl(I, Pe)),
        (ge = new wh(I, Me, it, Pe)),
        (E = new Bh(I, it, ke, ge)),
        (_ = new Wh(I, E, it, ke)),
        (R = new kh(I, Pe, Le)),
        (_e = new Lh(Ne)),
        (O = new rd(S, He, et, Me, Pe, ge, _e)),
        (Q = new bd(S, Ne)),
        ($ = new od()),
        (ee = new dd(Me, Pe)),
        (ue = new Rh(S, He, et, be, _, d, l)),
        (re = new vd(S, _, Pe)),
        (ve = new Rd(I, ke, Pe, be)),
        (te = new Ch(I, Me, ke, Pe)),
        (X = new zh(I, Me, ke, Pe)),
        (ke.programs = O.programs),
        (S.capabilities = Pe),
        (S.extensions = Me),
        (S.properties = Ne),
        (S.renderLists = $),
        (S.shadowMap = re),
        (S.state = be),
        (S.info = ke);
    }
    me();
    const y = new Ad(S, I);
    (this.xr = y),
      (this.getContext = function () {
        return I;
      }),
      (this.getContextAttributes = function () {
        return I.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const M = Me.get("WEBGL_lose_context");
        M && M.loseContext();
      }),
      (this.forceContextRestore = function () {
        const M = Me.get("WEBGL_lose_context");
        M && M.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return V;
      }),
      (this.setPixelRatio = function (M) {
        M !== void 0 && ((V = M), this.setSize(H, Y, !1));
      }),
      (this.getSize = function (M) {
        return M.set(H, Y);
      }),
      (this.setSize = function (M, U, z = !0) {
        if (y.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (H = M),
          (Y = U),
          (t.width = Math.floor(M * V)),
          (t.height = Math.floor(U * V)),
          z === !0 && ((t.style.width = M + "px"), (t.style.height = U + "px")),
          this.setViewport(0, 0, M, U);
      }),
      (this.getDrawingBufferSize = function (M) {
        return M.set(H * V, Y * V).floor();
      }),
      (this.setDrawingBufferSize = function (M, U, z) {
        (H = M),
          (Y = U),
          (V = z),
          (t.width = Math.floor(M * z)),
          (t.height = Math.floor(U * z)),
          this.setViewport(0, 0, M, U);
      }),
      (this.getCurrentViewport = function (M) {
        return M.copy(A);
      }),
      (this.getViewport = function (M) {
        return M.copy(q);
      }),
      (this.setViewport = function (M, U, z, F) {
        M.isVector4 ? q.set(M.x, M.y, M.z, M.w) : q.set(M, U, z, F),
          be.viewport(A.copy(q).multiplyScalar(V).floor());
      }),
      (this.getScissor = function (M) {
        return M.copy(D);
      }),
      (this.setScissor = function (M, U, z, F) {
        M.isVector4 ? D.set(M.x, M.y, M.z, M.w) : D.set(M, U, z, F),
          be.scissor(W.copy(D).multiplyScalar(V).floor());
      }),
      (this.getScissorTest = function () {
        return B;
      }),
      (this.setScissorTest = function (M) {
        be.setScissorTest((B = M));
      }),
      (this.setOpaqueSort = function (M) {
        ie = M;
      }),
      (this.setTransparentSort = function (M) {
        K = M;
      }),
      (this.getClearColor = function (M) {
        return M.copy(ue.getClearColor());
      }),
      (this.setClearColor = function () {
        ue.setClearColor.apply(ue, arguments);
      }),
      (this.getClearAlpha = function () {
        return ue.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ue.setClearAlpha.apply(ue, arguments);
      }),
      (this.clear = function (M = !0, U = !0, z = !0) {
        let F = 0;
        if (M) {
          let G = !1;
          if (b !== null) {
            const de = b.texture.format;
            G = de === Oa || de === Fa || de === Na;
          }
          if (G) {
            const de = b.texture.type,
              Se =
                de === on ||
                de === nn ||
                de === kr ||
                de === gn ||
                de === Ua ||
                de === Ia,
              Re = ue.getClearColor(),
              we = ue.getClearAlpha(),
              Be = Re.r,
              Ae = Re.g,
              Ue = Re.b;
            Se
              ? ((m[0] = Be),
                (m[1] = Ae),
                (m[2] = Ue),
                (m[3] = we),
                I.clearBufferuiv(I.COLOR, 0, m))
              : ((v[0] = Be),
                (v[1] = Ae),
                (v[2] = Ue),
                (v[3] = we),
                I.clearBufferiv(I.COLOR, 0, v));
          } else F |= I.COLOR_BUFFER_BIT;
        }
        U && (F |= I.DEPTH_BUFFER_BIT),
          z && (F |= I.STENCIL_BUFFER_BIT),
          I.clear(F);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", se, !1),
          t.removeEventListener("webglcontextrestored", ne, !1),
          t.removeEventListener("webglcontextcreationerror", le, !1),
          $.dispose(),
          ee.dispose(),
          Ne.dispose(),
          He.dispose(),
          et.dispose(),
          _.dispose(),
          ge.dispose(),
          ve.dispose(),
          O.dispose(),
          y.dispose(),
          y.removeEventListener("sessionstart", We),
          y.removeEventListener("sessionend", Nt),
          Ee && (Ee.dispose(), (Ee = null)),
          ft.stop();
      });
    function se(M) {
      M.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (T = !0);
    }
    function ne() {
      console.log("THREE.WebGLRenderer: Context Restored."), (T = !1);
      const M = ke.autoReset,
        U = re.enabled,
        z = re.autoUpdate,
        F = re.needsUpdate,
        G = re.type;
      me(),
        (ke.autoReset = M),
        (re.enabled = U),
        (re.autoUpdate = z),
        (re.needsUpdate = F),
        (re.type = G);
    }
    function le(M) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        M.statusMessage
      );
    }
    function ae(M) {
      const U = M.target;
      U.removeEventListener("dispose", ae), j(U);
    }
    function j(M) {
      pe(M), Ne.remove(M);
    }
    function pe(M) {
      const U = Ne.get(M).programs;
      U !== void 0 &&
        (U.forEach(function (z) {
          O.releaseProgram(z);
        }),
        M.isShaderMaterial && O.releaseShaderCache(M));
    }
    (this.renderBufferDirect = function (M, U, z, F, G, de) {
      U === null && (U = st);
      const Se = G.isMesh && G.matrixWorld.determinant() < 0,
        Re = ao(M, U, z, F, G);
      be.setMaterial(F, Se);
      let we = z.index,
        Be = 1;
      if (F.wireframe === !0) {
        if (((we = E.getWireframeAttribute(z)), we === void 0)) return;
        Be = 2;
      }
      const Ae = z.drawRange,
        Ue = z.attributes.position;
      let qe = Ae.start * Be,
        je = (Ae.start + Ae.count) * Be;
      de !== null &&
        ((qe = Math.max(qe, de.start * Be)),
        (je = Math.min(je, (de.start + de.count) * Be))),
        we !== null
          ? ((qe = Math.max(qe, 0)), (je = Math.min(je, we.count)))
          : Ue != null &&
            ((qe = Math.max(qe, 0)), (je = Math.min(je, Ue.count)));
      const yt = je - qe;
      if (yt < 0 || yt === 1 / 0) return;
      ge.setup(G, F, Re, z, we);
      let zt,
        Ze = te;
      if (
        (we !== null && ((zt = it.get(we)), (Ze = X), Ze.setIndex(zt)),
        G.isMesh)
      )
        F.wireframe === !0
          ? (be.setLineWidth(F.wireframeLinewidth * De()), Ze.setMode(I.LINES))
          : Ze.setMode(I.TRIANGLES);
      else if (G.isLine) {
        let ze = F.linewidth;
        ze === void 0 && (ze = 1),
          be.setLineWidth(ze * De()),
          G.isLineSegments
            ? Ze.setMode(I.LINES)
            : G.isLineLoop
            ? Ze.setMode(I.LINE_LOOP)
            : Ze.setMode(I.LINE_STRIP);
      } else
        G.isPoints
          ? Ze.setMode(I.POINTS)
          : G.isSprite && Ze.setMode(I.TRIANGLES);
      if (G.isInstancedMesh) Ze.renderInstances(qe, yt, G.count);
      else if (z.isInstancedBufferGeometry) {
        const ze = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          er = Math.min(z.instanceCount, ze);
        Ze.renderInstances(qe, yt, er);
      } else Ze.render(qe, yt);
    }),
      (this.compile = function (M, U) {
        function z(F, G, de) {
          F.transparent === !0 && F.side === qt && F.forceSinglePass === !1
            ? ((F.side = gt),
              (F.needsUpdate = !0),
              vi(F, G, de),
              (F.side = ln),
              (F.needsUpdate = !0),
              vi(F, G, de),
              (F.side = qt))
            : vi(F, G, de);
        }
        (p = ee.get(M)),
          p.init(),
          C.push(p),
          M.traverseVisible(function (F) {
            F.isLight &&
              F.layers.test(U.layers) &&
              (p.pushLight(F), F.castShadow && p.pushShadow(F));
          }),
          p.setupLights(S._useLegacyLights),
          M.traverse(function (F) {
            const G = F.material;
            if (G)
              if (Array.isArray(G))
                for (let de = 0; de < G.length; de++) {
                  const Se = G[de];
                  z(Se, M, F);
                }
              else z(G, M, F);
          }),
          C.pop(),
          (p = null);
      });
    let ye = null;
    function Ke(M) {
      ye && ye(M);
    }
    function We() {
      ft.stop();
    }
    function Nt() {
      ft.start();
    }
    const ft = new Ja();
    ft.setAnimationLoop(Ke),
      typeof self < "u" && ft.setContext(self),
      (this.setAnimationLoop = function (M) {
        (ye = M), y.setAnimationLoop(M), M === null ? ft.stop() : ft.start();
      }),
      y.addEventListener("sessionstart", We),
      y.addEventListener("sessionend", Nt),
      (this.render = function (M, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (T === !0) return;
        M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(),
          U.parent === null &&
            U.matrixWorldAutoUpdate === !0 &&
            U.updateMatrixWorld(),
          y.enabled === !0 &&
            y.isPresenting === !0 &&
            (y.cameraAutoUpdate === !0 && y.updateCamera(U),
            (U = y.getCamera())),
          M.isScene === !0 && M.onBeforeRender(S, M, U, b),
          (p = ee.get(M, C.length)),
          p.init(),
          C.push(p),
          Ce.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          ce.setFromProjectionMatrix(Ce),
          (fe = this.localClippingEnabled),
          (he = _e.init(this.clippingPlanes, fe)),
          (g = $.get(M, h.length)),
          g.init(),
          h.push(g),
          $r(M, U, 0, S.sortObjects),
          g.finish(),
          S.sortObjects === !0 && g.sort(ie, K),
          this.info.render.frame++,
          he === !0 && _e.beginShadows();
        const z = p.state.shadowsArray;
        if (
          (re.render(z, M, U),
          he === !0 && _e.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          ue.render(g, M),
          p.setupLights(S._useLegacyLights),
          U.isArrayCamera)
        ) {
          const F = U.cameras;
          for (let G = 0, de = F.length; G < de; G++) {
            const Se = F[G];
            Jr(g, M, Se, Se.viewport);
          }
        } else Jr(g, M, U);
        b !== null &&
          (Le.updateMultisampleRenderTarget(b), Le.updateRenderTargetMipmap(b)),
          M.isScene === !0 && M.onAfterRender(S, M, U),
          ge.resetDefaultState(),
          (k = -1),
          (x = null),
          C.pop(),
          C.length > 0 ? (p = C[C.length - 1]) : (p = null),
          h.pop(),
          h.length > 0 ? (g = h[h.length - 1]) : (g = null);
      });
    function $r(M, U, z, F) {
      if (M.visible === !1) return;
      if (M.layers.test(U.layers)) {
        if (M.isGroup) z = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === !0 && M.update(U);
        else if (M.isLight) p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || ce.intersectsSprite(M)) {
            F && Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);
            const Se = _.update(M),
              Re = M.material;
            Re.visible && g.push(M, Se, Re, z, Ge.z, null);
          }
        } else if (
          (M.isMesh || M.isLine || M.isPoints) &&
          (!M.frustumCulled || ce.intersectsObject(M))
        ) {
          const Se = _.update(M),
            Re = M.material;
          if (
            (F &&
              (M.boundingSphere !== void 0
                ? (M.boundingSphere === null && M.computeBoundingSphere(),
                  Ge.copy(M.boundingSphere.center))
                : (Se.boundingSphere === null && Se.computeBoundingSphere(),
                  Ge.copy(Se.boundingSphere.center)),
              Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),
            Array.isArray(Re))
          ) {
            const we = Se.groups;
            for (let Be = 0, Ae = we.length; Be < Ae; Be++) {
              const Ue = we[Be],
                qe = Re[Ue.materialIndex];
              qe && qe.visible && g.push(M, Se, qe, z, Ge.z, Ue);
            }
          } else Re.visible && g.push(M, Se, Re, z, Ge.z, null);
        }
      }
      const de = M.children;
      for (let Se = 0, Re = de.length; Se < Re; Se++) $r(de[Se], U, z, F);
    }
    function Jr(M, U, z, F) {
      const G = M.opaque,
        de = M.transmissive,
        Se = M.transparent;
      p.setupLightsView(z),
        he === !0 && _e.setGlobalState(S.clippingPlanes, z),
        de.length > 0 && so(G, de, U, z),
        F && be.viewport(A.copy(F)),
        G.length > 0 && gi(G, U, z),
        de.length > 0 && gi(de, U, z),
        Se.length > 0 && gi(Se, U, z),
        be.buffers.depth.setTest(!0),
        be.buffers.depth.setMask(!0),
        be.buffers.color.setMask(!0),
        be.setPolygonOffset(!1);
    }
    function so(M, U, z, F) {
      const G = Pe.isWebGL2;
      Ee === null &&
        (Ee = new Sn(1, 1, {
          generateMipmaps: !0,
          type: Me.has("EXT_color_buffer_half_float") ? di : on,
          minFilter: fi,
          samples: G ? 4 : 0,
        })),
        S.getDrawingBufferSize(xe),
        G ? Ee.setSize(xe.x, xe.y) : Ee.setSize(qi(xe.x), qi(xe.y));
      const de = S.getRenderTarget();
      S.setRenderTarget(Ee),
        S.getClearColor(J),
        (L = S.getClearAlpha()),
        L < 1 && S.setClearColor(16777215, 0.5),
        S.clear();
      const Se = S.toneMapping;
      (S.toneMapping = an),
        gi(M, z, F),
        Le.updateMultisampleRenderTarget(Ee),
        Le.updateRenderTargetMipmap(Ee);
      let Re = !1;
      for (let we = 0, Be = U.length; we < Be; we++) {
        const Ae = U[we],
          Ue = Ae.object,
          qe = Ae.geometry,
          je = Ae.material,
          yt = Ae.group;
        if (je.side === qt && Ue.layers.test(F.layers)) {
          const zt = je.side;
          (je.side = gt),
            (je.needsUpdate = !0),
            Qr(Ue, z, F, qe, je, yt),
            (je.side = zt),
            (je.needsUpdate = !0),
            (Re = !0);
        }
      }
      Re === !0 &&
        (Le.updateMultisampleRenderTarget(Ee), Le.updateRenderTargetMipmap(Ee)),
        S.setRenderTarget(de),
        S.setClearColor(J, L),
        (S.toneMapping = Se);
    }
    function gi(M, U, z) {
      const F = U.isScene === !0 ? U.overrideMaterial : null;
      for (let G = 0, de = M.length; G < de; G++) {
        const Se = M[G],
          Re = Se.object,
          we = Se.geometry,
          Be = F === null ? Se.material : F,
          Ae = Se.group;
        Re.layers.test(z.layers) && Qr(Re, U, z, we, Be, Ae);
      }
    }
    function Qr(M, U, z, F, G, de) {
      M.onBeforeRender(S, U, z, F, G, de),
        M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, M.matrixWorld),
        M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
        G.onBeforeRender(S, U, z, F, M, de),
        G.transparent === !0 && G.side === qt && G.forceSinglePass === !1
          ? ((G.side = gt),
            (G.needsUpdate = !0),
            S.renderBufferDirect(z, U, F, G, M, de),
            (G.side = ln),
            (G.needsUpdate = !0),
            S.renderBufferDirect(z, U, F, G, M, de),
            (G.side = qt))
          : S.renderBufferDirect(z, U, F, G, M, de),
        M.onAfterRender(S, U, z, F, G, de);
    }
    function vi(M, U, z) {
      U.isScene !== !0 && (U = st);
      const F = Ne.get(M),
        G = p.state.lights,
        de = p.state.shadowsArray,
        Se = G.state.version,
        Re = O.getParameters(M, G.state, de, U, z),
        we = O.getProgramCacheKey(Re);
      let Be = F.programs;
      (F.environment = M.isMeshStandardMaterial ? U.environment : null),
        (F.fog = U.fog),
        (F.envMap = (M.isMeshStandardMaterial ? et : He).get(
          M.envMap || F.environment
        )),
        Be === void 0 &&
          (M.addEventListener("dispose", ae),
          (Be = new Map()),
          (F.programs = Be));
      let Ae = Be.get(we);
      if (Ae !== void 0) {
        if (F.currentProgram === Ae && F.lightsStateVersion === Se)
          return es(M, Re), Ae;
      } else
        (Re.uniforms = O.getUniforms(M)),
          M.onBuild(z, Re, S),
          M.onBeforeCompile(Re, S),
          (Ae = O.acquireProgram(Re, we)),
          Be.set(we, Ae),
          (F.uniforms = Re.uniforms);
      const Ue = F.uniforms;
      ((!M.isShaderMaterial && !M.isRawShaderMaterial) || M.clipping === !0) &&
        (Ue.clippingPlanes = _e.uniform),
        es(M, Re),
        (F.needsLights = lo(M)),
        (F.lightsStateVersion = Se),
        F.needsLights &&
          ((Ue.ambientLightColor.value = G.state.ambient),
          (Ue.lightProbe.value = G.state.probe),
          (Ue.directionalLights.value = G.state.directional),
          (Ue.directionalLightShadows.value = G.state.directionalShadow),
          (Ue.spotLights.value = G.state.spot),
          (Ue.spotLightShadows.value = G.state.spotShadow),
          (Ue.rectAreaLights.value = G.state.rectArea),
          (Ue.ltc_1.value = G.state.rectAreaLTC1),
          (Ue.ltc_2.value = G.state.rectAreaLTC2),
          (Ue.pointLights.value = G.state.point),
          (Ue.pointLightShadows.value = G.state.pointShadow),
          (Ue.hemisphereLights.value = G.state.hemi),
          (Ue.directionalShadowMap.value = G.state.directionalShadowMap),
          (Ue.directionalShadowMatrix.value = G.state.directionalShadowMatrix),
          (Ue.spotShadowMap.value = G.state.spotShadowMap),
          (Ue.spotLightMatrix.value = G.state.spotLightMatrix),
          (Ue.spotLightMap.value = G.state.spotLightMap),
          (Ue.pointShadowMap.value = G.state.pointShadowMap),
          (Ue.pointShadowMatrix.value = G.state.pointShadowMatrix));
      const qe = Ae.getUniforms(),
        je = Vi.seqWithValue(qe.seq, Ue);
      return (F.currentProgram = Ae), (F.uniformsList = je), Ae;
    }
    function es(M, U) {
      const z = Ne.get(M);
      (z.outputColorSpace = U.outputColorSpace),
        (z.instancing = U.instancing),
        (z.instancingColor = U.instancingColor),
        (z.skinning = U.skinning),
        (z.morphTargets = U.morphTargets),
        (z.morphNormals = U.morphNormals),
        (z.morphColors = U.morphColors),
        (z.morphTargetsCount = U.morphTargetsCount),
        (z.numClippingPlanes = U.numClippingPlanes),
        (z.numIntersection = U.numClipIntersection),
        (z.vertexAlphas = U.vertexAlphas),
        (z.vertexTangents = U.vertexTangents),
        (z.toneMapping = U.toneMapping);
    }
    function ao(M, U, z, F, G) {
      U.isScene !== !0 && (U = st), Le.resetTextureUnits();
      const de = U.fog,
        Se = F.isMeshStandardMaterial ? U.environment : null,
        Re =
          b === null
            ? S.outputColorSpace
            : b.isXRRenderTarget === !0
            ? b.texture.colorSpace
            : Kt,
        we = (F.isMeshStandardMaterial ? et : He).get(F.envMap || Se),
        Be =
          F.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        Ae = !!z.attributes.tangent && (!!F.normalMap || F.anisotropy > 0),
        Ue = !!z.morphAttributes.position,
        qe = !!z.morphAttributes.normal,
        je = !!z.morphAttributes.color;
      let yt = an;
      F.toneMapped &&
        (b === null || b.isXRRenderTarget === !0) &&
        (yt = S.toneMapping);
      const zt =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        Ze = zt !== void 0 ? zt.length : 0,
        ze = Ne.get(F),
        er = p.state.lights;
      if (he === !0 && (fe === !0 || M !== x)) {
        const xt = M === x && F.id === k;
        _e.setState(F, M, xt);
      }
      let $e = !1;
      F.version === ze.__version
        ? ((ze.needsLights && ze.lightsStateVersion !== er.state.version) ||
            ze.outputColorSpace !== Re ||
            (G.isInstancedMesh && ze.instancing === !1) ||
            (!G.isInstancedMesh && ze.instancing === !0) ||
            (G.isSkinnedMesh && ze.skinning === !1) ||
            (!G.isSkinnedMesh && ze.skinning === !0) ||
            (G.isInstancedMesh &&
              ze.instancingColor === !0 &&
              G.instanceColor === null) ||
            (G.isInstancedMesh &&
              ze.instancingColor === !1 &&
              G.instanceColor !== null) ||
            ze.envMap !== we ||
            (F.fog === !0 && ze.fog !== de) ||
            (ze.numClippingPlanes !== void 0 &&
              (ze.numClippingPlanes !== _e.numPlanes ||
                ze.numIntersection !== _e.numIntersection)) ||
            ze.vertexAlphas !== Be ||
            ze.vertexTangents !== Ae ||
            ze.morphTargets !== Ue ||
            ze.morphNormals !== qe ||
            ze.morphColors !== je ||
            ze.toneMapping !== yt ||
            (Pe.isWebGL2 === !0 && ze.morphTargetsCount !== Ze)) &&
          ($e = !0)
        : (($e = !0), (ze.__version = F.version));
      let cn = ze.currentProgram;
      $e === !0 && (cn = vi(F, U, G));
      let ts = !1,
        ni = !1,
        tr = !1;
      const dt = cn.getUniforms(),
        un = ze.uniforms;
      if (
        (be.useProgram(cn.program) && ((ts = !0), (ni = !0), (tr = !0)),
        F.id !== k && ((k = F.id), (ni = !0)),
        ts || x !== M)
      ) {
        dt.setValue(I, "projectionMatrix", M.projectionMatrix),
          dt.setValue(I, "viewMatrix", M.matrixWorldInverse);
        const xt = dt.map.cameraPosition;
        xt !== void 0 &&
          xt.setValue(I, Ge.setFromMatrixPosition(M.matrixWorld)),
          Pe.logarithmicDepthBuffer &&
            dt.setValue(
              I,
              "logDepthBufFC",
              2 / (Math.log(M.far + 1) / Math.LN2)
            ),
          (F.isMeshPhongMaterial ||
            F.isMeshToonMaterial ||
            F.isMeshLambertMaterial ||
            F.isMeshBasicMaterial ||
            F.isMeshStandardMaterial ||
            F.isShaderMaterial) &&
            dt.setValue(I, "isOrthographic", M.isOrthographicCamera === !0),
          x !== M && ((x = M), (ni = !0), (tr = !0));
      }
      if (G.isSkinnedMesh) {
        dt.setOptional(I, G, "bindMatrix"),
          dt.setOptional(I, G, "bindMatrixInverse");
        const xt = G.skeleton;
        xt &&
          (Pe.floatVertexTextures
            ? (xt.boneTexture === null && xt.computeBoneTexture(),
              dt.setValue(I, "boneTexture", xt.boneTexture, Le),
              dt.setValue(I, "boneTextureSize", xt.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const nr = z.morphAttributes;
      if (
        ((nr.position !== void 0 ||
          nr.normal !== void 0 ||
          (nr.color !== void 0 && Pe.isWebGL2 === !0)) &&
          R.update(G, z, cn),
        (ni || ze.receiveShadow !== G.receiveShadow) &&
          ((ze.receiveShadow = G.receiveShadow),
          dt.setValue(I, "receiveShadow", G.receiveShadow)),
        F.isMeshGouraudMaterial &&
          F.envMap !== null &&
          ((un.envMap.value = we),
          (un.flipEnvMap.value =
            we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1)),
        ni &&
          (dt.setValue(I, "toneMappingExposure", S.toneMappingExposure),
          ze.needsLights && oo(un, tr),
          de && F.fog === !0 && Q.refreshFogUniforms(un, de),
          Q.refreshMaterialUniforms(un, F, V, Y, Ee),
          Vi.upload(I, ze.uniformsList, un, Le)),
        F.isShaderMaterial &&
          F.uniformsNeedUpdate === !0 &&
          (Vi.upload(I, ze.uniformsList, un, Le), (F.uniformsNeedUpdate = !1)),
        F.isSpriteMaterial && dt.setValue(I, "center", G.center),
        dt.setValue(I, "modelViewMatrix", G.modelViewMatrix),
        dt.setValue(I, "normalMatrix", G.normalMatrix),
        dt.setValue(I, "modelMatrix", G.matrixWorld),
        F.isShaderMaterial || F.isRawShaderMaterial)
      ) {
        const xt = F.uniformsGroups;
        for (let ir = 0, co = xt.length; ir < co; ir++)
          if (Pe.isWebGL2) {
            const ns = xt[ir];
            ve.update(ns, cn), ve.bind(ns, cn);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return cn;
    }
    function oo(M, U) {
      (M.ambientLightColor.needsUpdate = U),
        (M.lightProbe.needsUpdate = U),
        (M.directionalLights.needsUpdate = U),
        (M.directionalLightShadows.needsUpdate = U),
        (M.pointLights.needsUpdate = U),
        (M.pointLightShadows.needsUpdate = U),
        (M.spotLights.needsUpdate = U),
        (M.spotLightShadows.needsUpdate = U),
        (M.rectAreaLights.needsUpdate = U),
        (M.hemisphereLights.needsUpdate = U);
    }
    function lo(M) {
      return (
        M.isMeshLambertMaterial ||
        M.isMeshToonMaterial ||
        M.isMeshPhongMaterial ||
        M.isMeshStandardMaterial ||
        M.isShadowMaterial ||
        (M.isShaderMaterial && M.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return w;
    }),
      (this.getActiveMipmapLevel = function () {
        return P;
      }),
      (this.getRenderTarget = function () {
        return b;
      }),
      (this.setRenderTargetTextures = function (M, U, z) {
        (Ne.get(M.texture).__webglTexture = U),
          (Ne.get(M.depthTexture).__webglTexture = z);
        const F = Ne.get(M);
        (F.__hasExternalTextures = !0),
          F.__hasExternalTextures &&
            ((F.__autoAllocateDepthBuffer = z === void 0),
            F.__autoAllocateDepthBuffer ||
              (Me.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (F.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (M, U) {
        const z = Ne.get(M);
        (z.__webglFramebuffer = U), (z.__useDefaultFramebuffer = U === void 0);
      }),
      (this.setRenderTarget = function (M, U = 0, z = 0) {
        (b = M), (w = U), (P = z);
        let F = !0,
          G = null,
          de = !1,
          Se = !1;
        if (M) {
          const we = Ne.get(M);
          we.__useDefaultFramebuffer !== void 0
            ? (be.bindFramebuffer(I.FRAMEBUFFER, null), (F = !1))
            : we.__webglFramebuffer === void 0
            ? Le.setupRenderTarget(M)
            : we.__hasExternalTextures &&
              Le.rebindTextures(
                M,
                Ne.get(M.texture).__webglTexture,
                Ne.get(M.depthTexture).__webglTexture
              );
          const Be = M.texture;
          (Be.isData3DTexture ||
            Be.isDataArrayTexture ||
            Be.isCompressedArrayTexture) &&
            (Se = !0);
          const Ae = Ne.get(M).__webglFramebuffer;
          M.isWebGLCubeRenderTarget
            ? (Array.isArray(Ae[U]) ? (G = Ae[U][z]) : (G = Ae[U]), (de = !0))
            : Pe.isWebGL2 && M.samples > 0 && Le.useMultisampledRTT(M) === !1
            ? (G = Ne.get(M).__webglMultisampledFramebuffer)
            : Array.isArray(Ae)
            ? (G = Ae[z])
            : (G = Ae),
            A.copy(M.viewport),
            W.copy(M.scissor),
            (Z = M.scissorTest);
        } else
          A.copy(q).multiplyScalar(V).floor(),
            W.copy(D).multiplyScalar(V).floor(),
            (Z = B);
        if (
          (be.bindFramebuffer(I.FRAMEBUFFER, G) &&
            Pe.drawBuffers &&
            F &&
            be.drawBuffers(M, G),
          be.viewport(A),
          be.scissor(W),
          be.setScissorTest(Z),
          de)
        ) {
          const we = Ne.get(M.texture);
          I.framebufferTexture2D(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            I.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            we.__webglTexture,
            z
          );
        } else if (Se) {
          const we = Ne.get(M.texture),
            Be = U || 0;
          I.framebufferTextureLayer(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            we.__webglTexture,
            z || 0,
            Be
          );
        }
        k = -1;
      }),
      (this.readRenderTargetPixels = function (M, U, z, F, G, de, Se) {
        if (!(M && M.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let Re = Ne.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && Se !== void 0 && (Re = Re[Se]), Re)) {
          be.bindFramebuffer(I.FRAMEBUFFER, Re);
          try {
            const we = M.texture,
              Be = we.format,
              Ae = we.type;
            if (
              Be !== It &&
              Te.convert(Be) !==
                I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Ue =
              Ae === di &&
              (Me.has("EXT_color_buffer_half_float") ||
                (Pe.isWebGL2 && Me.has("EXT_color_buffer_float")));
            if (
              Ae !== on &&
              Te.convert(Ae) !==
                I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ae === rn &&
                (Pe.isWebGL2 ||
                  Me.has("OES_texture_float") ||
                  Me.has("WEBGL_color_buffer_float"))
              ) &&
              !Ue
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            U >= 0 &&
              U <= M.width - F &&
              z >= 0 &&
              z <= M.height - G &&
              I.readPixels(U, z, F, G, Te.convert(Be), Te.convert(Ae), de);
          } finally {
            const we = b !== null ? Ne.get(b).__webglFramebuffer : null;
            be.bindFramebuffer(I.FRAMEBUFFER, we);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (M, U, z = 0) {
        const F = Math.pow(2, -z),
          G = Math.floor(U.image.width * F),
          de = Math.floor(U.image.height * F);
        Le.setTexture2D(U, 0),
          I.copyTexSubImage2D(I.TEXTURE_2D, z, 0, 0, M.x, M.y, G, de),
          be.unbindTexture();
      }),
      (this.copyTextureToTexture = function (M, U, z, F = 0) {
        const G = U.image.width,
          de = U.image.height,
          Se = Te.convert(z.format),
          Re = Te.convert(z.type);
        Le.setTexture2D(z, 0),
          I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, z.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, z.unpackAlignment),
          U.isDataTexture
            ? I.texSubImage2D(
                I.TEXTURE_2D,
                F,
                M.x,
                M.y,
                G,
                de,
                Se,
                Re,
                U.image.data
              )
            : U.isCompressedTexture
            ? I.compressedTexSubImage2D(
                I.TEXTURE_2D,
                F,
                M.x,
                M.y,
                U.mipmaps[0].width,
                U.mipmaps[0].height,
                Se,
                U.mipmaps[0].data
              )
            : I.texSubImage2D(I.TEXTURE_2D, F, M.x, M.y, Se, Re, U.image),
          F === 0 && z.generateMipmaps && I.generateMipmap(I.TEXTURE_2D),
          be.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (M, U, z, F, G = 0) {
        if (S.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const de = M.max.x - M.min.x + 1,
          Se = M.max.y - M.min.y + 1,
          Re = M.max.z - M.min.z + 1,
          we = Te.convert(F.format),
          Be = Te.convert(F.type);
        let Ae;
        if (F.isData3DTexture) Le.setTexture3D(F, 0), (Ae = I.TEXTURE_3D);
        else if (F.isDataArrayTexture)
          Le.setTexture2DArray(F, 0), (Ae = I.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, F.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, F.unpackAlignment);
        const Ue = I.getParameter(I.UNPACK_ROW_LENGTH),
          qe = I.getParameter(I.UNPACK_IMAGE_HEIGHT),
          je = I.getParameter(I.UNPACK_SKIP_PIXELS),
          yt = I.getParameter(I.UNPACK_SKIP_ROWS),
          zt = I.getParameter(I.UNPACK_SKIP_IMAGES),
          Ze = z.isCompressedTexture ? z.mipmaps[0] : z.image;
        I.pixelStorei(I.UNPACK_ROW_LENGTH, Ze.width),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ze.height),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, M.min.x),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, M.min.y),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, M.min.z),
          z.isDataTexture || z.isData3DTexture
            ? I.texSubImage3D(Ae, G, U.x, U.y, U.z, de, Se, Re, we, Be, Ze.data)
            : z.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              I.compressedTexSubImage3D(
                Ae,
                G,
                U.x,
                U.y,
                U.z,
                de,
                Se,
                Re,
                we,
                Ze.data
              ))
            : I.texSubImage3D(Ae, G, U.x, U.y, U.z, de, Se, Re, we, Be, Ze),
          I.pixelStorei(I.UNPACK_ROW_LENGTH, Ue),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, qe),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, je),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, yt),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, zt),
          G === 0 && F.generateMipmaps && I.generateMipmap(Ae),
          be.unbindTexture();
      }),
      (this.initTexture = function (M) {
        M.isCubeTexture
          ? Le.setTextureCube(M, 0)
          : M.isData3DTexture
          ? Le.setTexture3D(M, 0)
          : M.isDataArrayTexture || M.isCompressedArrayTexture
          ? Le.setTexture2DArray(M, 0)
          : Le.setTexture2D(M, 0),
          be.unbindTexture();
      }),
      (this.resetState = function () {
        (w = 0), (P = 0), (b = null), be.reset(), ge.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === Wr ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        Ve.workingColorSpace === Zi ? "display-p3" : "srgb");
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
      this.outputColorSpace === at ? xn : Ba
    );
  }
  set outputEncoding(e) {
    console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
    ),
      (this.outputColorSpace = e === xn ? at : Kt);
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class wd extends io {}
wd.prototype.isWebGL1Renderer = !0;
class Cd extends Tt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
}
const Ea = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class Pd {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          r.onProgress !== void 0 && r.onProgress(u, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, f) {
        return c.push(u, f), this;
      }),
      (this.removeHandler = function (u) {
        const f = c.indexOf(u);
        return f !== -1 && c.splice(f, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let f = 0, d = c.length; f < d; f += 2) {
          const m = c[f],
            v = c[f + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return v;
        }
        return null;
      });
  }
}
const Ld = new Pd();
class Kr {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Ld),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
Kr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Dd extends Kr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = Ea.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = mi("img");
    function l() {
      u(), Ea.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(f) {
      u(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class Ud extends Kr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new vt(),
      o = new Dd(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r
      ),
      s
    );
  }
}
class Ta {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(ht(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Vr } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Vr));
const ya = { type: "change" },
  Dr = { type: "start" },
  Aa = { type: "end" },
  Hi = new ka(),
  ba = new tn(),
  Id = Math.cos(70 * Tl.DEG2RAD);
class Nd extends yn {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new N()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: bn.ROTATE,
        MIDDLE: bn.DOLLY,
        RIGHT: bn.PAN,
      }),
      (this.touches = { ONE: Rn.ROTATE, TWO: Rn.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (R) {
        R.addEventListener("keydown", _), (this._domElementKeyEvents = R);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", _),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(ya),
          n.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const R = new N(),
          te = new En().setFromUnitVectors(e.up, new N(0, 1, 0)),
          X = te.clone().invert(),
          Te = new N(),
          ge = new En(),
          ve = new N(),
          me = 2 * Math.PI;
        return function (se = null) {
          const ne = n.object.position;
          R.copy(ne).sub(n.target),
            R.applyQuaternion(te),
            a.setFromVector3(R),
            n.autoRotate && s === r.NONE && W(x(se)),
            n.enableDamping
              ? ((a.theta += l.theta * n.dampingFactor),
                (a.phi += l.phi * n.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let le = n.minAzimuthAngle,
            ae = n.maxAzimuthAngle;
          isFinite(le) &&
            isFinite(ae) &&
            (le < -Math.PI ? (le += me) : le > Math.PI && (le -= me),
            ae < -Math.PI ? (ae += me) : ae > Math.PI && (ae -= me),
            le <= ae
              ? (a.theta = Math.max(le, Math.min(ae, a.theta)))
              : (a.theta =
                  a.theta > (le + ae) / 2
                    ? Math.max(le, a.theta)
                    : Math.min(ae, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            (n.zoomToCursor && P) || n.object.isOrthographicCamera
              ? (a.radius = K(a.radius))
              : (a.radius = K(a.radius * c)),
            R.setFromSpherical(a),
            R.applyQuaternion(X),
            ne.copy(n.target).add(R),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0));
          let j = !1;
          if (n.zoomToCursor && P) {
            let pe = null;
            if (n.object.isPerspectiveCamera) {
              const ye = R.length();
              pe = K(ye * c);
              const Ke = ye - pe;
              n.object.position.addScaledVector(T, Ke),
                n.object.updateMatrixWorld();
            } else if (n.object.isOrthographicCamera) {
              const ye = new N(w.x, w.y, 0);
              ye.unproject(n.object),
                (n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / c)
                )),
                n.object.updateProjectionMatrix(),
                (j = !0);
              const Ke = new N(w.x, w.y, 0);
              Ke.unproject(n.object),
                n.object.position.sub(Ke).add(ye),
                n.object.updateMatrixWorld(),
                (pe = R.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
              ),
                (n.zoomToCursor = !1);
            pe !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(pe)
                    .add(n.object.position)
                : (Hi.origin.copy(n.object.position),
                  Hi.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(Hi.direction)) < Id
                    ? e.lookAt(n.target)
                    : (ba.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      Hi.intersectPlane(ba, n.target))));
          } else
            n.object.isOrthographicCamera &&
              ((n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / c)
              )),
              n.object.updateProjectionMatrix(),
              (j = !0));
          return (
            (c = 1),
            (P = !1),
            j ||
            Te.distanceToSquared(n.object.position) > o ||
            8 * (1 - ge.dot(n.object.quaternion)) > o ||
            ve.distanceToSquared(n.target) > 0
              ? (n.dispatchEvent(ya),
                Te.copy(n.object.position),
                ge.copy(n.object.quaternion),
                ve.copy(n.target),
                (j = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", $),
          n.domElement.removeEventListener("pointerdown", Ne),
          n.domElement.removeEventListener("pointercancel", He),
          n.domElement.removeEventListener("wheel", E),
          n.domElement.removeEventListener("pointermove", Le),
          n.domElement.removeEventListener("pointerup", He),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", _),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      r = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = r.NONE;
    const o = 1e-6,
      a = new Ta(),
      l = new Ta();
    let c = 1;
    const u = new N(),
      f = new Oe(),
      d = new Oe(),
      m = new Oe(),
      v = new Oe(),
      g = new Oe(),
      p = new Oe(),
      h = new Oe(),
      C = new Oe(),
      S = new Oe(),
      T = new N(),
      w = new Oe();
    let P = !1;
    const b = [],
      k = {};
    function x(R) {
      return R !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * R
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function A() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function W(R) {
      l.theta -= R;
    }
    function Z(R) {
      l.phi -= R;
    }
    const J = (function () {
        const R = new N();
        return function (X, Te) {
          R.setFromMatrixColumn(Te, 0), R.multiplyScalar(-X), u.add(R);
        };
      })(),
      L = (function () {
        const R = new N();
        return function (X, Te) {
          n.screenSpacePanning === !0
            ? R.setFromMatrixColumn(Te, 1)
            : (R.setFromMatrixColumn(Te, 0), R.crossVectors(n.object.up, R)),
            R.multiplyScalar(X),
            u.add(R);
        };
      })(),
      H = (function () {
        const R = new N();
        return function (X, Te) {
          const ge = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const ve = n.object.position;
            R.copy(ve).sub(n.target);
            let me = R.length();
            (me *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              J((2 * X * me) / ge.clientHeight, n.object.matrix),
              L((2 * Te * me) / ge.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (J(
                  (X * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ge.clientWidth,
                  n.object.matrix
                ),
                L(
                  (Te * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ge.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function Y(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c /= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function V(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c *= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function ie(R) {
      if (!n.zoomToCursor) return;
      P = !0;
      const te = n.domElement.getBoundingClientRect(),
        X = R.clientX - te.left,
        Te = R.clientY - te.top,
        ge = te.width,
        ve = te.height;
      (w.x = (X / ge) * 2 - 1),
        (w.y = -(Te / ve) * 2 + 1),
        T.set(w.x, w.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function K(R) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, R));
    }
    function q(R) {
      f.set(R.clientX, R.clientY);
    }
    function D(R) {
      ie(R), h.set(R.clientX, R.clientY);
    }
    function B(R) {
      v.set(R.clientX, R.clientY);
    }
    function ce(R) {
      d.set(R.clientX, R.clientY),
        m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const te = n.domElement;
      W((2 * Math.PI * m.x) / te.clientHeight),
        Z((2 * Math.PI * m.y) / te.clientHeight),
        f.copy(d),
        n.update();
    }
    function he(R) {
      C.set(R.clientX, R.clientY),
        S.subVectors(C, h),
        S.y > 0 ? Y(A()) : S.y < 0 && V(A()),
        h.copy(C),
        n.update();
    }
    function fe(R) {
      g.set(R.clientX, R.clientY),
        p.subVectors(g, v).multiplyScalar(n.panSpeed),
        H(p.x, p.y),
        v.copy(g),
        n.update();
    }
    function Ee(R) {
      ie(R), R.deltaY < 0 ? V(A()) : R.deltaY > 0 && Y(A()), n.update();
    }
    function Ce(R) {
      let te = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Z((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(0, n.keyPanSpeed),
            (te = !0);
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Z((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(0, -n.keyPanSpeed),
            (te = !0);
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? W((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(n.keyPanSpeed, 0),
            (te = !0);
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? W((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(-n.keyPanSpeed, 0),
            (te = !0);
          break;
      }
      te && (R.preventDefault(), n.update());
    }
    function xe() {
      if (b.length === 1) f.set(b[0].pageX, b[0].pageY);
      else {
        const R = 0.5 * (b[0].pageX + b[1].pageX),
          te = 0.5 * (b[0].pageY + b[1].pageY);
        f.set(R, te);
      }
    }
    function Ge() {
      if (b.length === 1) v.set(b[0].pageX, b[0].pageY);
      else {
        const R = 0.5 * (b[0].pageX + b[1].pageX),
          te = 0.5 * (b[0].pageY + b[1].pageY);
        v.set(R, te);
      }
    }
    function st() {
      const R = b[0].pageX - b[1].pageX,
        te = b[0].pageY - b[1].pageY,
        X = Math.sqrt(R * R + te * te);
      h.set(0, X);
    }
    function De() {
      n.enableZoom && st(), n.enablePan && Ge();
    }
    function I() {
      n.enableZoom && st(), n.enableRotate && xe();
    }
    function Qe(R) {
      if (b.length == 1) d.set(R.pageX, R.pageY);
      else {
        const X = ue(R),
          Te = 0.5 * (R.pageX + X.x),
          ge = 0.5 * (R.pageY + X.y);
        d.set(Te, ge);
      }
      m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const te = n.domElement;
      W((2 * Math.PI * m.x) / te.clientHeight),
        Z((2 * Math.PI * m.y) / te.clientHeight),
        f.copy(d);
    }
    function Me(R) {
      if (b.length === 1) g.set(R.pageX, R.pageY);
      else {
        const te = ue(R),
          X = 0.5 * (R.pageX + te.x),
          Te = 0.5 * (R.pageY + te.y);
        g.set(X, Te);
      }
      p.subVectors(g, v).multiplyScalar(n.panSpeed), H(p.x, p.y), v.copy(g);
    }
    function Pe(R) {
      const te = ue(R),
        X = R.pageX - te.x,
        Te = R.pageY - te.y,
        ge = Math.sqrt(X * X + Te * Te);
      C.set(0, ge),
        S.set(0, Math.pow(C.y / h.y, n.zoomSpeed)),
        Y(S.y),
        h.copy(C);
    }
    function be(R) {
      n.enableZoom && Pe(R), n.enablePan && Me(R);
    }
    function ke(R) {
      n.enableZoom && Pe(R), n.enableRotate && Qe(R);
    }
    function Ne(R) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(R.pointerId),
          n.domElement.addEventListener("pointermove", Le),
          n.domElement.addEventListener("pointerup", He)),
        ee(R),
        R.pointerType === "touch" ? O(R) : et(R));
    }
    function Le(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? Q(R) : it(R));
    }
    function He(R) {
      _e(R),
        b.length === 0 &&
          (n.domElement.releasePointerCapture(R.pointerId),
          n.domElement.removeEventListener("pointermove", Le),
          n.domElement.removeEventListener("pointerup", He)),
        n.dispatchEvent(Aa),
        (s = r.NONE);
    }
    function et(R) {
      let te;
      switch (R.button) {
        case 0:
          te = n.mouseButtons.LEFT;
          break;
        case 1:
          te = n.mouseButtons.MIDDLE;
          break;
        case 2:
          te = n.mouseButtons.RIGHT;
          break;
        default:
          te = -1;
      }
      switch (te) {
        case bn.DOLLY:
          if (n.enableZoom === !1) return;
          D(R), (s = r.DOLLY);
          break;
        case bn.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1) return;
            B(R), (s = r.PAN);
          } else {
            if (n.enableRotate === !1) return;
            q(R), (s = r.ROTATE);
          }
          break;
        case bn.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1) return;
            q(R), (s = r.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            B(R), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Dr);
    }
    function it(R) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          ce(R);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          he(R);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          fe(R);
          break;
      }
    }
    function E(R) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== r.NONE ||
        (R.preventDefault(), n.dispatchEvent(Dr), Ee(R), n.dispatchEvent(Aa));
    }
    function _(R) {
      n.enabled === !1 || n.enablePan === !1 || Ce(R);
    }
    function O(R) {
      switch ((re(R), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Rn.ROTATE:
              if (n.enableRotate === !1) return;
              xe(), (s = r.TOUCH_ROTATE);
              break;
            case Rn.PAN:
              if (n.enablePan === !1) return;
              Ge(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Rn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              De(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case Rn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              I(), (s = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Dr);
    }
    function Q(R) {
      switch ((re(R), s)) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Qe(R), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Me(R), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          be(R), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ke(R), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function $(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ee(R) {
      b.push(R);
    }
    function _e(R) {
      delete k[R.pointerId];
      for (let te = 0; te < b.length; te++)
        if (b[te].pointerId == R.pointerId) {
          b.splice(te, 1);
          return;
        }
    }
    function re(R) {
      let te = k[R.pointerId];
      te === void 0 && ((te = new Oe()), (k[R.pointerId] = te)),
        te.set(R.pageX, R.pageY);
    }
    function ue(R) {
      const te = R.pointerId === b[0].pointerId ? b[1] : b[0];
      return k[te.pointerId];
    }
    n.domElement.addEventListener("contextmenu", $),
      n.domElement.addEventListener("pointerdown", Ne),
      n.domElement.addEventListener("pointercancel", He),
      n.domElement.addEventListener("wheel", E, { passive: !1 }),
      this.update();
  }
}
const ji = new io(),
  Ur = new Ud(),
  Yn = new Cd(),
  Zr = new Rt(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  Lt = new Nd(Zr, ji.domElement),
  ro = () => {
    requestAnimationFrame(ro), Lt.update(), ji.render(Yn, Zr);
  },
  Fd = () => {
    (Lt.enableDamping = !0),
      (Lt.dampingFactor = 0.05),
      (Lt.screenSpacePanning = !1),
      (Lt.minDistance = 2),
      (Lt.maxDistance = 5),
      (Lt.minPolarAngle = Math.PI / 4 + 0.4),
      (Lt.maxPolarAngle = Math.PI / 2 - 0.2),
      (Lt.minAzimuthAngle = -Math.PI / 4),
      (Lt.maxAzimuthAngle = Math.PI / 4),
      ji.setSize(window.innerWidth, window.innerHeight),
      document.body.appendChild(ji.domElement),
      Zr.position.set(0, 1, 4),
      Lt.update();
    const i = Ur.load("./dining-floor.png"),
      e = new Ot(6, 0.1, 6),
      t = new hi({ map: i }),
      n = new Et(e, t);
    Yn.add(n);
    const r = Ur.load("./dining-ceiling.png"),
      s = new Ot(6, 0.1, 6),
      o = new hi({ map: r }),
      a = new Et(s, o);
    Yn.add(a);
    const l = new Ot(6, 2, 0.1),
      c = new Ot(0.1, 2, 6),
      u = new Ot(0.1, 2, 6),
      f = Ur.load("./dining-wall.png"),
      d = new hi({ map: f }),
      m = new Et(l, d),
      v = new Et(c, d),
      g = new Et(u, d);
    m.position.set(0, 1, -3),
      v.position.set(3, 1, 0),
      g.position.set(-3, 1, 0),
      a.position.set(0, 2, 0),
      Yn.add(m),
      Yn.add(v),
      Yn.add(g);
  };
Fd();
ro();
