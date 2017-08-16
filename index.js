/*!
 * The following license applies to some parts of the software which is from Live2D Inc.
 * 
 * This is a Software Development Kit (SDK) for developing Live2D-Cubism-powered applications on WebGL.
 * The SDK contains proprietary libraries and sample projects.
 * Read this document when using the SDK.
 * 
 * 	Read Live2D License Agreement
 * 	for business
 * 	http://live2d.com/en/sdk_license_cubism
 * 
 * 	for indie
 * 	http://live2d.com/en/sdk_license_cubism_indie
 * 
 * 	After agree and accept Live2D SDK License Agreement, the content in the following folders may be placed in the server which you control
 * 
 * ==========================
 * 
 * The following license applies to pixi.js.
 * 
 * https://github.com/pixijs/pixi.js/blob/master/LICENSE
 * 
 * ==========================
 * 
 * The following license applies to the other parts of the software.
 * 
 * MIT License
 * 
 * Copyright (c) 2016 Icemic Jia <bingfeng.web@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
! function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var r in i)("object" == typeof exports ? exports : t)[r] = i[r]
    }
}
function seeModel() {
    return function(t) {
        function e(r) {
            if (i[r]) return i[r].exports;
            var n = i[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }
	([function(t, e, i) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n() {
            requestAnimationFrame(n), a.render(h)
        }
        var s = i(9),
            o = r(s);
        i(4);
		
		if (document.getElementById("app").hasChildNodes()) {
			document.getElementById("app").removeChild(document.getElementById("app").childNodes[0]);
        }
		
        var a = new o["default"].WebGLRenderer(450, 550);
        document.getElementById("app").appendChild(a.view);
		
		var chara = document.getElementById('character');
		var cos = document.getElementById('costumes');
		var exp = document.getElementById('expressions');
		
		var modelnum = chara.value;
		var costume = cos.value;
		var expression = exp.value;
		var modelname;
		
		switch (modelnum) {
			case '001': modelname = "kasumi"; break;
			case '002': modelname = "tae"; break;
			case '003': modelname = "rimi"; break;
			case '004': modelname = "saaya"; break;
			case '005': modelname = "arisa"; break;
			case '006': modelname = "ran"; break;
			case '007': modelname = "moca"; break;
			case '008': modelname = "himari"; break;
			case '009': modelname = "tomoe"; break;
			case '010': modelname = "tsugumi"; break;
			case '011': modelname = "kokoro"; break;
			case '012': modelname = "kaoru"; break;
			case '013': modelname = "hagumi"; break;
			case '014': modelname = "kanon"; break;
			case '015': modelname = "misaki"; break;
			case '016': modelname = "aya"; break;
			case '017': modelname = "hina"; break;
			case '018': modelname = "chisato"; break;
			case '019': modelname = "maya"; break;
			case '020': modelname = "eve"; break;
			case '021': modelname = "yukina"; break;
			case '022': modelname = "sayo"; break;
			case '023': modelname = "lisa"; break;
			case '024': modelname = "ako"; break;
			case '025': modelname = "rinko"; break;
			default: modelname = "kasumi"; break;
		}
		
		var modelfile = "" + modelnum + "/" + costume + "/" + modelname + ".moc";
		var texturefile = "" + modelnum + "/" + costume + "/texture_00.png";
		var physicsfile = "" + modelnum + "/" + costume + "/" + modelname + ".physics.json";
		var mtnfile = "" + modelnum + "/" + expression + ".mtn";
		
        var h = new o["default"].Container,
            l = {
                type: "Live2D Model Setting",
                name: modelname,
                model: modelfile,
                textures: [texturefile],
                physics: physicsfile,
                layout: {
                    center_x: -.5,
                    y: 1.1,
                    width: 2
                },
                motions: {
                    idle: [{file: mtnfile}]
                }
            },
		/*
		var h = new o["default"].Container,
            l = {
                type: "Live2D Model Setting",
                name: "Kasumi",
                model: "001/default/kasumi.moc",
                textures: ["001/default/texture_00.png"],
                physics: "001/default/kasumi.physics.json",
                layout: {
                    center_x: -.5,
                    y: 1.1,
                    width: 2
                },
                motions: {
                    idle: [{
                        file: "001/idle01.mtn"
                    }, {
                        file: "001/idle02.mtn"
                    }]
                }
            },*/
        u = new o["default"].Sprite.fromImage("./test.png");
		h.addChild(u);
        var c = new o["default"].Live2DSprite(l, {
            debugLog: !1,
            randomMotion: !1,
            eyeBlink: !1
        });
        h.addChild(c), c.x = -105, c.adjustScale(0, 0, .7), c.adjustTranslate(.4, 0), c.startRandomMotion("idle"), c.on("click", function(t) {
            var e = t.data.global;
            c.hitTest("body", e.x, e.y) && c.startRandomMotionOnce("tap_body"), c.hitTest("head", e.x, e.y)
        }), n()
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = console.log;
        console.log = function() {};
        i(7);
        console.log = r, e.UtSystem = UtSystem, e.UtDebug = UtDebug, e.LDTransform = LDTransform, e.LDGL = LDGL, e.Live2D = Live2D, e.Live2DModelWebGL = Live2DModelWebGL, e.Live2DModelJS = Live2DModelJS, e.Live2DMotion = Live2DMotion, e.MotionQueueManager = MotionQueueManager, e.PhysicsHair = PhysicsHair, e.AMotion = AMotion, e.PartsDataID = PartsDataID, e.DrawDataID = DrawDataID, e.BaseDataID = BaseDataID, e.ParamID = ParamID
    }, function(t, e, i) {
        "use strict";

        function r() {
            this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.debugMode = !1, this.initialized = !1, this.updating = !1, this.alpha = 1, this.accAlpha = 0, this.lipSync = !1, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new l, this.expressionManager = new l, this.motions = {}, this.expressions = {}, this.isTexLoaded = !1
        }

        function n() {
            _.AMotion.prototype.constructor.call(this), this.paramList = new Array
        }

        function s() {
            this.id = "", this.type = -1, this.value = null
        }

        function o() {
            this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = y.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = !0, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN"
        }

        function a() {
            this.tr = new Float32Array(16), this.identity()
        }

        function h(t, e) {
            a.prototype.constructor.call(this), this.width = t, this.height = e
        }

        function l() {
            _.MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null, this["super"] = _.MotionQueueManager.prototype
        }

        function u() {
            this.physicsList = new Array, this.startTimeMSec = _.UtSystem.getUserTimeMSec()
        }

        function c() {
            this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array
        }

        function p(t) {
            this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t
        }

        function d() {
            this.EPSILON = .01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0
        }

        function f() {
            a.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null, this.max = Number.MAX_VALUE, this.min = 0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.L2DBaseModel = r, e.L2DExpressionMotion = n, e.L2DExpressionParam = s, e.L2DEyeBlink = o, e.L2DMatrix44 = a, e.L2DModelMatrix = h, e.L2DMotionManager = l, e.L2DPhysics = u, e.L2DPose = c, e.L2DPartsParam = p, e.L2DTargetPoint = d, e.L2DViewMatrix = f;
        var _ = i(1),
            g = i(8),
            v = 0;
        r.prototype.getModelMatrix = function() {
            return this.modelMatrix
        }, r.prototype.setAlpha = function(t) {
            t > .999 && (t = 1), t < .001 && (t = 0), this.alpha = t
        }, r.prototype.getAlpha = function() {
            return this.alpha
        }, r.prototype.isInitialized = function() {
            return this.initialized
        }, r.prototype.setInitialized = function(t) {
            this.initialized = t
        }, r.prototype.isUpdating = function() {
            return this.updating
        }, r.prototype.setUpdating = function(t) {
            this.updating = t
        }, r.prototype.getLive2DModel = function() {
            return this.live2DModel
        }, r.prototype.setLipSync = function(t) {
            this.lipSync = t
        }, r.prototype.setLipSyncValue = function(t) {
            this.lipSyncValue = t
        }, r.prototype.setAccel = function(t, e, i) {
            this.accelX = t, this.accelY = e, this.accelZ = i
        }, r.prototype.setDrag = function(t, e) {
            this.dragX = t, this.dragY = e
        }, r.prototype.getMainMotionManager = function() {
            return this.mainMotionManager
        }, r.prototype.getExpressionManager = function() {
            return this.expressionManager
        }, r.prototype.loadModelData = function(t, e) {
            this.debugMode && console.log("Load model : " + t);
            var i = this;
            (0, g.loadBytes)(t, "arraybuffer", function(t) {
                i.live2DModel = _.Live2DModelWebGL.loadModel(t), i.live2DModel.saveParam();
                var r = _.Live2D.getError();
                return 0 != r ? void console.error("Error : Failed to loadModelData().") : (i.modelMatrix = new h(i.live2DModel.getCanvasWidth(), i.live2DModel.getCanvasHeight()), i.modelMatrix.setWidth(2), i.modelMatrix.setCenterPosition(0, 0), void e(i.live2DModel))
            })
        }, r.prototype.loadTexture = function(t, e, i, r) {
            v++, this.debugMode && console.log("Load Texture : " + i);
            var n = this;
            this._loadTexture(t, this.live2DModel, e, i, function() {
                v--, 0 == v && (n.isTexLoaded = !0), "function" == typeof r && r()
            })
        }, r.prototype._loadTexture = function(t, e, i, r, n) {
            var s = new Image;
            s.src = r;
            s.onload = function() {
                var r = t.createTexture();
                return r ? (0 == e.isPremultipliedAlpha() && t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 1), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST), t.generateMipmap(t.TEXTURE_2D), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 0), e.setTexture(i, r), void("function" == typeof n && n())) : (console.error("Failed to generate gl texture name."), -1)
            }, s.onerror = function() {
                console.error("Failed to load image : " + r)
            }
        }, r.prototype.loadMotion = function(t, e, i) {
            this.debugMode && console.log("Load Motion : " + e);
            var r = null,
                n = this;
            (0, g.loadBytes)(e, "arraybuffer", function(e) {
                r = _.Live2DMotion.loadMotion(e), null != t && (n.motions[t] = r), i(r)
            })
        }, r.prototype.loadExpression = function(t, e, i) {
            this.debugMode && console.log("Load Expression : " + e);
            var r = this;
            (0, g.loadBytes)(e, "json", function(e) {
                null != t && (r.expressions[t] = n.loadJson(e)), "function" == typeof i && i()
            })
        }, r.prototype.loadPose = function(t, e) {
            this.debugMode && console.log("Load Pose : " + t);
            var i = this;
            try {
                (0, g.loadBytes)(t, "json", function(t) {
                    i.pose = c.load(t), "function" == typeof e && e()
                })
            } catch (r) {
                console.warn(r)
            }
        }, r.prototype.loadPhysics = function(t) {
            this.debugMode && console.log("Load Physics : " + t);
            var e = this;
            try {
                (0, g.loadBytes)(t, "json", function(t) {
                    e.physics = u.load(t)
                })
            } catch (i) {
                console.warn(i)
            }
        }, r.prototype.hitTestSimple = function(t, e, i) {
            var r = this.live2DModel.getDrawDataIndex(t);
            if (r < 0) return !1;
            for (var n = this.live2DModel.getTransformedPoints(r), s = this.live2DModel.getCanvasWidth(), o = 0, a = this.live2DModel.getCanvasHeight(), h = 0, l = 0; l < n.length; l += 2) {
                var u = n[l],
                    c = n[l + 1];
                u < s && (s = u), u > o && (o = u), c < a && (a = c), c > h && (h = c)
            }
            var p = this.modelMatrix.invertTransformX(e),
                d = this.modelMatrix.invertTransformY(i);
            return s <= p && p <= o && a <= d && d <= h
        }, n.prototype = new _.AMotion, n.EXPRESSION_DEFAULT = "DEFAULT", n.TYPE_SET = 0, n.TYPE_ADD = 1, n.TYPE_MULT = 2, n.loadJson = function(t) {
            var e = new n;
            if (e.setFadeIn(parseInt(t.fade_in) > 0 ? parseInt(t.fade_in) : 1e3), e.setFadeOut(parseInt(t.fade_out) > 0 ? parseInt(t.fade_out) : 1e3), null == t.params) return e;
            var i = t.params,
                r = i.length;
            e.paramList = [];
            for (var o = 0; o < r; o++) {
                var a = i[o],
                    h = a.id.toString(),
                    l = parseFloat(a.val),
                    u = n.TYPE_ADD,
                    c = null != a.calc ? a.calc.toString() : "add";
                if (u = "add" === c ? n.TYPE_ADD : "mult" === c ? n.TYPE_MULT : "set" === c ? n.TYPE_SET : n.TYPE_ADD, u == n.TYPE_ADD) {
                    var p = null == a.def ? 0 : parseFloat(a.def);
                    l -= p
                } else if (u == n.TYPE_MULT) {
                    var p = null == a.def ? 1 : parseFloat(a.def);
                    0 == p && (p = 1), l /= p
                }
                var d = new s;
                d.id = h, d.type = u, d.value = l, e.paramList.push(d)
            }
            return e
        }, n.prototype.updateParamExe = function(t, e, i, r) {
            for (var s = this.paramList.length - 1; s >= 0; --s) {
                var o = this.paramList[s];
                o.type == n.TYPE_ADD ? t.addToParamFloat(o.id, o.value, i) : o.type == n.TYPE_MULT ? t.multParamFloat(o.id, o.value, i) : o.type == n.TYPE_SET && t.setParamFloat(o.id, o.value, i)
            }
        }, o.prototype.calcNextBlink = function() {
            var t = _.UtSystem.getUserTimeMSec(),
                e = Math.random();
            return t + e * (2 * this.blinkIntervalMsec - 1)
        }, o.prototype.setInterval = function(t) {
            this.blinkIntervalMsec = t
        }, o.prototype.setEyeMotion = function(t, e, i) {
            this.closingMotionMsec = t, this.closedMotionMsec = e, this.openingMotionMsec = i
        }, o.prototype.updateParam = function(t) {
            var e, i = _.UtSystem.getUserTimeMSec(),
                r = 0;
            switch (this.eyeState) {
                case y.STATE_CLOSING:
                    r = (i - this.stateStartTime) / this.closingMotionMsec, r >= 1 && (r = 1, this.eyeState = y.STATE_CLOSED, this.stateStartTime = i), e = 1 - r;
                    break;
                case y.STATE_CLOSED:
                    r = (i - this.stateStartTime) / this.closedMotionMsec, r >= 1 && (this.eyeState = y.STATE_OPENING, this.stateStartTime = i), e = 0;
                    break;
                case y.STATE_OPENING:
                    r = (i - this.stateStartTime) / this.openingMotionMsec, r >= 1 && (r = 1, this.eyeState = y.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), e = r;
                    break;
                case y.STATE_INTERVAL:
                    this.nextBlinkTime < i && (this.eyeState = y.STATE_CLOSING, this.stateStartTime = i), e = 1;
                    break;
                case y.STATE_FIRST:
                default:
                    this.eyeState = y.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), e = 1
            }
            this.closeIfZero || (e = -e), t.setParamFloat(this.eyeID_L, e), t.setParamFloat(this.eyeID_R, e)
        };
        var y = function() {};
        y.STATE_FIRST = "STATE_FIRST", y.STATE_INTERVAL = "STATE_INTERVAL", y.STATE_CLOSING = "STATE_CLOSING", y.STATE_CLOSED = "STATE_CLOSED", y.STATE_OPENING = "STATE_OPENING", a.mul = function(t, e, i) {
            var r, n, s, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                a = 4;
            for (r = 0; r < a; r++)
                for (n = 0; n < a; n++)
                    for (s = 0; s < a; s++) o[r + 4 * n] += t[r + 4 * s] * e[s + 4 * n];
            for (r = 0; r < 16; r++) i[r] = o[r]
        }, a.prototype.identity = function() {
            for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0
        }, a.prototype.getArray = function() {
            return this.tr
        }, a.prototype.getCopyMatrix = function() {
            return new Float32Array(this.tr)
        }, a.prototype.setMatrix = function(t) {
            if (null != this.tr && this.tr.length == this.tr.length)
                for (var e = 0; e < 16; e++) this.tr[e] = t[e]
        }, a.prototype.getScaleX = function() {
            return this.tr[0]
        }, a.prototype.getScaleY = function() {
            return this.tr[5]
        }, a.prototype.transformX = function(t) {
            return this.tr[0] * t + this.tr[12]
        }, a.prototype.transformY = function(t) {
            return this.tr[5] * t + this.tr[13]
        }, a.prototype.invertTransformX = function(t) {
            return (t - this.tr[12]) / this.tr[0]
        }, a.prototype.invertTransformY = function(t) {
            return (t - this.tr[13]) / this.tr[5]
        }, a.prototype.multTranslate = function(t, e) {
            var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
            a.mul(i, this.tr, this.tr)
        }, a.prototype.translate = function(t, e) {
            this.tr[12] = t, this.tr[13] = e
        }, a.prototype.translateX = function(t) {
            this.tr[12] = t
        }, a.prototype.translateY = function(t) {
            this.tr[13] = t
        }, a.prototype.multScale = function(t, e) {
            var i = [t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            a.mul(i, this.tr, this.tr)
        }, a.prototype.scale = function(t, e) {
            this.tr[0] = t, this.tr[5] = e
        }, h.prototype = new a, h.prototype.setPosition = function(t, e) {
            this.translate(t, e)
        }, h.prototype.setCenterPosition = function(t, e) {
            var i = this.width * this.getScaleX(),
                r = this.height * this.getScaleY();
            this.translate(t - i / 2, e - r / 2)
        }, h.prototype.top = function(t) {
            this.setY(t)
        }, h.prototype.bottom = function(t) {
            var e = this.height * this.getScaleY();
            this.translateY(t - e)
        }, h.prototype.left = function(t) {
            this.setX(t)
        }, h.prototype.right = function(t) {
            var e = this.width * this.getScaleX();
            this.translateX(t - e)
        }, h.prototype.centerX = function(t) {
            var e = this.width * this.getScaleX();
            this.translateX(t - e / 2)
        }, h.prototype.centerY = function(t) {
            var e = this.height * this.getScaleY();
            this.translateY(t - e / 2)
        }, h.prototype.setX = function(t) {
            this.translateX(t)
        }, h.prototype.setY = function(t) {
            this.translateY(t)
        }, h.prototype.setHeight = function(t) {
            var e = t / this.height,
                i = -e;
            this.scale(e, i)
        }, h.prototype.setWidth = function(t) {
            var e = t / this.width,
                i = -e;
            this.scale(e, i)
        }, l.prototype = new _.MotionQueueManager, l.prototype.getCurrentPriority = function() {
            return this.currentPriority
        }, l.prototype.getReservePriority = function() {
            return this.reservePriority
        }, l.prototype.reserveMotion = function(t) {
            return !(this.reservePriority >= t) && (!(this.currentPriority >= t) && (this.reservePriority = t, !0))
        }, l.prototype.setReservePriority = function(t) {
            this.reservePriority = t
        }, l.prototype.updateParam = function(t) {
            var e = _.MotionQueueManager.prototype.updateParam.call(this, t);
            return this.isFinished() && (this.currentPriority = 0), e
        }, l.prototype.startMotionPrio = function(t, e) {
            return e == this.reservePriority && (this.reservePriority = 0), this.currentPriority = e, this.startMotion(t, !1)
        }, u.load = function(t) {
            for (var e = new u, i = t.physics_hair, r = i.length, n = 0; n < r; n++) {
                var s = i[n],
                    o = new _.PhysicsHair,
                    a = s.setup,
                    h = parseFloat(a.length),
                    l = parseFloat(a.regist),
                    c = parseFloat(a.mass);
                o.setup(h, l, c);
                for (var p = s.src, d = p.length, f = 0; f < d; f++) {
                    var g = p[f],
                        v = g.id,
                        y = _.PhysicsHair.Src.SRC_TO_X,
                        m = g.ptype;
                    "x" === m ? y = _.PhysicsHair.Src.SRC_TO_X : "y" === m ? y = _.PhysicsHair.Src.SRC_TO_Y : "angle" === m ? y = _.PhysicsHair.Src.SRC_TO_G_ANGLE : _.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
                    var x = parseFloat(g.scale),
                        $ = parseFloat(g.weight);
                    o.addSrcParam(y, v, x, $)
                }
                for (var T = s.targets, b = T.length, f = 0; f < b; f++) {
                    var S = T[f],
                        v = S.id,
                        y = _.PhysicsHair.Target.TARGET_FROM_ANGLE,
                        m = S.ptype;
                    "angle" === m ? y = _.PhysicsHair.Target.TARGET_FROM_ANGLE : "angle_v" === m ? y = _.PhysicsHair.Target.TARGET_FROM_ANGLE_V : _.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
                    var x = parseFloat(S.scale),
                        $ = parseFloat(S.weight);
                    o.addTargetParam(y, v, x, $)
                }
                e.physicsList.push(o)
            }
            return e
        }, u.prototype.updateParam = function(t) {
            for (var e = _.UtSystem.getUserTimeMSec() - this.startTimeMSec, i = 0; i < this.physicsList.length; i++) this.physicsList[i].update(t, e)
        }, c.load = function(t) {
            for (var e = new c, i = t.parts_visible, r = i.length, n = 0; n < r; n++) {
                for (var s = i[n], o = s.group, a = o.length, h = new Array, l = 0; l < a; l++) {
                    var u = o[l],
                        d = new p(u.id);
                    if (h[l] = d, null != u.link) {
                        var f = u.link,
                            _ = f.length;
                        d.link = new Array;
                        for (var g = 0; g < _; g++) {
                            var v = new p(f[g]);
                            d.link.push(v)
                        }
                    }
                }
                e.partsGroups.push(h)
            }
            return e
        }, c.prototype.updateParam = function(t) {
            if (null != t) {
                t != this.lastModel && this.initParam(t), this.lastModel = t;
                var e = _.UtSystem.getUserTimeMSec(),
                    i = 0 == this.lastTime ? 0 : (e - this.lastTime) / 1e3;
                this.lastTime = e, i < 0 && (i = 0);
                for (var r = 0; r < this.partsGroups.length; r++) this.normalizePartsOpacityGroup(t, this.partsGroups[r], i), this.copyOpacityOtherParts(t, this.partsGroups[r])
            }
        }, c.prototype.initParam = function(t) {
            if (null != t)
                for (var e = 0; e < this.partsGroups.length; e++)
                    for (var i = this.partsGroups[e], r = 0; r < i.length; r++) {
                        i[r].initIndex(t);
                        var n = i[r].partsIndex,
                            s = i[r].paramIndex;
                        if (!(n < 0)) {
                            var o = 0 != t.getParamFloat(s);
                            if (t.setPartsOpacity(n, o ? 1 : 0), t.setParamFloat(s, o ? 1 : 0), null != i[r].link)
                                for (var a = 0; a < i[r].link.length; a++) i[r].link[a].initIndex(t)
                        }
                    }
        }, c.prototype.normalizePartsOpacityGroup = function(t, e, i) {
            for (var r = -1, n = 1, s = .5, o = .5, a = .15, h = 0; h < e.length; h++) {
                var l = e[h].partsIndex,
                    u = e[h].paramIndex;
                if (!(l < 0) && 0 != t.getParamFloat(u)) {
                    if (r >= 0) break;
                    r = h, n = t.getPartsOpacity(l), n += i / s, n > 1 && (n = 1)
                }
            }
            r < 0 && (r = 0, n = 1);
            for (var h = 0; h < e.length; h++) {
                var l = e[h].partsIndex;
                if (!(l < 0))
                    if (r == h) t.setPartsOpacity(l, n);
                    else {
                        var c, p = t.getPartsOpacity(l);
                        c = n < o ? n * (o - 1) / o + 1 : (1 - n) * o / (1 - o);
                        var d = (1 - c) * (1 - n);
                        d > a && (c = 1 - a / (1 - n)), p > c && (p = c), t.setPartsOpacity(l, p)
                    }
            }
        }, c.prototype.copyOpacityOtherParts = function(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                if (null != r.link && !(r.partsIndex < 0))
                    for (var n = t.getPartsOpacity(r.partsIndex), s = 0; s < r.link.length; s++) {
                        var o = r.link[s];
                        o.partsIndex < 0 || t.setPartsOpacity(o.partsIndex, n)
                    }
            }
        }, p.prototype.initIndex = function(t) {
            this.paramIndex = t.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t.getPartsDataIndex(_.PartsDataID.getID(this.id)), t.setParamFloat(this.paramIndex, 1)
        }, d.FRAME_RATE = 30, d.prototype.setPoint = function(t, e) {
            this.faceTargetX = t, this.faceTargetY = e
        }, d.prototype.getX = function() {
            return this.faceX
        }, d.prototype.getY = function() {
            return this.faceY
        }, d.prototype.update = function() {
            var t = .15,
                e = 40 / 7.5,
                i = e / d.FRAME_RATE;
            if (0 == this.lastTimeSec) return void(this.lastTimeSec = _.UtSystem.getUserTimeMSec());
            var r = _.UtSystem.getUserTimeMSec(),
                n = (r - this.lastTimeSec) * d.FRAME_RATE / 1e3;
            this.lastTimeSec = r;
            var s = t * d.FRAME_RATE,
                o = n * i / s,
                a = this.faceTargetX - this.faceX,
                h = this.faceTargetY - this.faceY;
            if (!(Math.abs(a) <= this.EPSILON && Math.abs(h) <= this.EPSILON)) {
                var l = Math.sqrt(a * a + h * h),
                    u = i * a / l,
                    c = i * h / l,
                    p = u - this.faceVX,
                    f = c - this.faceVY,
                    g = Math.sqrt(p * p + f * f);
                (g < -o || g > o) && (p *= o / g, f *= o / g, g = o), this.faceVX += p, this.faceVY += f;
                var v = .5 * (Math.sqrt(o * o + 16 * o * l - 8 * o * l) - o),
                    y = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
                y > v && (this.faceVX *= v / y, this.faceVY *= v / y), this.faceX += this.faceVX, this.faceY += this.faceVY
            }
        }, f.prototype = new a, f.prototype.getMaxScale = function() {
            return this.max
        }, f.prototype.getMinScale = function() {
            return this.min
        }, f.prototype.setMaxScale = function(t) {
            this.max = t
        }, f.prototype.setMinScale = function(t) {
            this.min = t
        }, f.prototype.isMaxScale = function() {
            return this.getScaleX() == this.max
        }, f.prototype.isMinScale = function() {
            return this.getScaleX() == this.min
        }, f.prototype.adjustTranslate = function(t, e) {
            var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
            a.mul(i, this.tr, this.tr)
        }, f.prototype.adjustScale = function(t, e, i, r) {
            r || (r = i);
            var n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1],
                s = [i, 0, 0, 0, 0, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1];
            a.mul(o, this.tr, this.tr), a.mul(s, this.tr, this.tr), a.mul(n, this.tr, this.tr)
        }, f.prototype.setScreenRect = function(t, e, i, r) {
            this.screenLeft = t, this.screenRight = e, this.screenTop = r, this.screenBottom = i
        }, f.prototype.setMaxScreenRect = function(t, e, i, r) {
            this.maxLeft = t, this.maxRight = e, this.maxTop = r, this.maxBottom = i
        }, f.prototype.getScreenLeft = function() {
            return this.screenLeft
        }, f.prototype.getScreenRight = function() {
            return this.screenRight
        }, f.prototype.getScreenBottom = function() {
            return this.screenBottom
        }, f.prototype.getScreenTop = function() {
            return this.screenTop
        }, f.prototype.getMaxLeft = function() {
            return this.maxLeft
        }, f.prototype.getMaxRight = function() {
            return this.maxRight
        }, f.prototype.getMaxBottom = function() {
            return this.maxBottom
        }, f.prototype.getMaxTop = function() {
            return this.maxTop
        }
    }, function(t, e) {
        "use strict";

        function i() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = i, i.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], i.depth = 0, i.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], i.tmp = new Array(16), i.reset = function() {
            this.depth = 0
        }, i.loadIdentity = function() {
            for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0
        }, i.push = function() {
            var t = (16 * this.depth, 16 * (this.depth + 1));
            this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16);
            for (var e = 0; e < 16; e++) this.matrixStack[t + e] = this.currentMatrix[e];
            this.depth++
        }, i.pop = function() {
            this.depth--, this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0);
            for (var t = 16 * this.depth, e = 0; e < 16; e++) this.currentMatrix[e] = this.matrixStack[t + e]
        }, i.getMatrix = function() {
            return this.currentMatrix
        }, i.multMatrix = function(t) {
            var e, i, r;
            for (e = 0; e < 16; e++) this.tmp[e] = 0;
            for (e = 0; e < 4; e++)
                for (i = 0; i < 4; i++)
                    for (r = 0; r < 4; r++) this.tmp[e + 4 * i] += this.currentMatrix[e + 4 * r] * t[r + 4 * i];
            for (e = 0; e < 16; e++) this.currentMatrix[e] = this.tmp[e]
        }
    }, function(t, e, i) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, i, r) {
                    return i && t(e.prototype, i), r && t(e, r), e
                }
            }(),
            l = function v(t, e, i) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === r) {
                    var n = Object.getPrototypeOf(t);
                    return null === n ? void 0 : v(n, e, i)
                }
                if ("value" in r) return r.value;
                var s = r.get;
                if (void 0 !== s) return s.call(i)
            },
            u = i(1),
            c = i(5),
            p = r(c),
            d = i(2),
            f = i(3),
            _ = r(f),
            g = function(t) {
                function e(t, i) {
                    s(this, e);
                    var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    r.interactive = !0, r.platform = window.navigator.platform.toLowerCase();
                    var n = Object.assign({
                        priorityForce: 3,
                        priorityDefault: 1,
                        debugLog: !1,
                        debugMouseLog: !1,
                        eyeBlink: !0,
                        lipSyncWithSound: !0,
                        randomMotion: !0,
                        defaultMotionGroup: "idle",
                        audioPlayer: null
                    }, i);
                    return u.Live2D.init(), r.model = new p["default"](n), r.gl = null, r.canvas = null, r.dragMgr = null, r.viewMatrix = null, r.projMatrix = null, r.deviceToScreen = null, r.texture = null, r.modelReady = !1, r.onModelReady = [], r.modelDefine = t, r
                }
                return a(e, t), h(e, [{
                    key: "init",
                    value: function() {
                        var t = this,
                            e = this.canvas.width,
                            i = this.canvas.height;
                        this.texture = PIXI.RenderTexture.create(e, i), this.canvasWidth = this.canvas.width, this.canvasHeight = this.canvas.height, this.dragMgr = new d.L2DTargetPoint;
                        var r = i / e,
                            n = -1,
                            s = 1,
                            o = -r,
                            a = r;
                        this.viewMatrix = new d.L2DViewMatrix, this.viewMatrix.setMaxScreenRect(-2, 2, -2, 2), this.viewMatrix.setScreenRect(n, s, o, a), this.projMatrix = new d.L2DMatrix44, this.projMatrix.multScale(r, 1), this.deviceToScreen = new d.L2DMatrix44, this.deviceToScreen.multTranslate(-e / 2, -i / 2), this.deviceToScreen.multScale(2 / e, -2 / i), u.Live2D.setGL(this.gl), this.x = e / 2, this.y = i / 2, this.anchor.x = .5, this.anchor.y = .5, this.scale.y = -1, this.gl.clearColor(0, 0, 0, 0), this.model.load(this.gl, this.modelDefine, function() {
                            t.modelReady = !0
                        })
                    }
                }, {
                    key: "draw",
                    value: function() {
                        _["default"].reset(), _["default"].loadIdentity(), this.dragMgr.update(), this.model.setDrag(this.dragMgr.getX(), this.dragMgr.getY()), _["default"].multMatrix(this.projMatrix.getArray()), _["default"].multMatrix(this.viewMatrix.getArray()), _["default"].push(), this.model.update(), this.model.draw(this.gl), _["default"].pop()
                    }
                }, {
                    key: "_renderWebGL",
                    value: function(t) {
                        if (this.gl || (this.gl = t.gl, this.canvas = t.view, this.modelDefine && this.init(this.modelDefine)), this.modelReady) {
                            for (; this.onModelReady.length;) {
                                var i = this.onModelReady.shift();
                                i()
                            }
                            if (this.visible) {
                                t.flush();
                                var r = t.gl,
                                    s = r.getParameter(r.ARRAY_BUFFER_BINDING),
                                    o = r.getParameter(r.ELEMENT_ARRAY_BUFFER_BINDING),
                                    a = r.getParameter(r.CURRENT_PROGRAM),
                                    h = r.getParameter(r.ACTIVE_TEXTURE);
                                r.activeTexture(r.TEXTURE0);
                                var u = r.getParameter(r.TEXTURE_BINDING_2D);
                                r.activeTexture(r.TEXTURE1);
                                var c = r.getParameter(r.TEXTURE_BINDING_2D),
                                    p = r.getParameter(r.FRONT_FACE),
                                    d = r.getParameter(r.COLOR_WRITEMASK),
                                    f = r.getVertexAttrib(0, r.VERTEX_ATTRIB_ARRAY_ENABLED),
                                    _ = r.getVertexAttrib(1, r.VERTEX_ATTRIB_ARRAY_ENABLED),
                                    g = r.getVertexAttrib(2, r.VERTEX_ATTRIB_ARRAY_ENABLED),
                                    v = r.getVertexAttrib(3, r.VERTEX_ATTRIB_ARRAY_ENABLED),
                                    y = r.isEnabled(r.SCISSOR_TEST),
                                    m = r.isEnabled(r.STENCIL_TEST),
                                    x = r.isEnabled(r.DEPTH_TEST),
                                    $ = r.isEnabled(r.CULL_FACE),
                                    T = r.isEnabled(r.BLEND),
                                    b = t._activeTextureLocation,
                                    S = t._activeRenderTarget;
                                t.bindRenderTexture(this.texture), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.frontFace(r.CW), this.draw(), t._activeTextureLocation = b, r.activeTexture(r.TEXTURE0 + b), r.bindTexture(r.TEXTURE_2D, null), r.useProgram(a), t.bindRenderTarget(S), r.bindBuffer(r.ARRAY_BUFFER, s), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, o), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, u), r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, c), r.activeTexture(h), r.frontFace(p), r.colorMask.apply(r, n(d)), f ? r.enableVertexAttribArray(0) : r.disableVertexAttribArray(0), _ ? r.enableVertexAttribArray(1) : r.disableVertexAttribArray(1), g ? r.enableVertexAttribArray(2) : r.disableVertexAttribArray(2), v ? r.enableVertexAttribArray(3) : r.disableVertexAttribArray(3), y ? r.enable(r.SCISSOR_TEST) : r.disable(r.SCISSOR_TEST), m ? r.enable(r.STENCIL_TEST) : r.disable(r.STENCIL_TEST), x ? r.enable(r.DEPTH_TEST) : r.disable(r.DEPTH_TEST), $ ? r.enable(r.CULL_FACE) : r.disable(r.CULL_FACE), T ? r.enable(r.BLEND) : r.disable(r.BLEND), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_renderWebGL", this).call(this, t)
                            }
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t;
                        this.model.release();
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        (t = l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this)).call.apply(t, [this].concat(r))
                    }
                }, {
                    key: "containsPoint",
                    value: function(t) {
                        return !!this.modelReady && this.hitTest(null, t.x, t.y)
                    }
                }, {
                    key: "adjustScale",
                    value: function(t, e, i) {
                        var r = this;
                        this.onModelReady.push(function() {
                            r.viewMatrix.adjustScale(t, e, i)
                        })
                    }
                }, {
                    key: "adjustTranslate",
                    value: function(t, e) {
                        var i = this;
                        this.onModelReady.push(function() {
                            i.viewMatrix.adjustTranslate(t, -e)
                        })
                    }
                }, {
                    key: "setLipSync",
                    value: function(t) {
                        null === t ? this.model.setLipSync(!1) : (this.model.setLipSync(!0), this.model.setLipSyncValue(t))
                    }
                }, {
                    key: "setRandomExpression",
                    value: function() {
                        var t = this;
                        this.onModelReady.push(function() {
                            t.model.setRandomExpression()
                        })
                    }
                }, {
                    key: "startRandomMotion",
                    value: function(t, e) {
                        var i = this;
                        this.onModelReady.push(function() {
                            i.model.startRandomMotion(t, e)
                        })
                    }
                }, {
                    key: "startRandomMotionOnce",
                    value: function(t, e) {
                        var i = this;
                        this.onModelReady.push(function() {
                            i.model.startRandomMotionOnce(t, e)
                        })
                    }
                }, {
                    key: "stopRandomMotion",
                    value: function() {
                        var t = this;
                        this.onModelReady.push(function() {
                            t.model.stopRandomMotion()
                        })
                    }
                }, {
                    key: "startMotion",
                    value: function(t, e, i) {
                        var r = this;
                        this.onModelReady.push(function() {
                            r.model.startMotion(t, e, i)
                        })
                    }
                }, {
                    key: "playSound",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
                        this.onModelReady.push(function() {
                            e.model.playSound(t, i)
                        })
                    }
                }, {
                    key: "hitTest",
                    value: function(t, e, i) {
                        return this.model.hitTest(t, this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(e)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(i)))
                    }
                }, {
                    key: "setViewPoint",
                    value: function(t, e) {
                        this.dragMgr.setPoint(this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(t)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(e)))
                    }
                }, {
                    key: "getParamFloat",
                    value: function(t) {
                        return this.model.getLive2DModel().getParamFloat(t)
                    }
                }, {
                    key: "setParamFloat",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        this.model.getLive2DModel().setParamFloat(t, e, i)
                    }
                }, {
                    key: "addToParamFloat",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        this.model.getLive2DModel().addToParamFloat(t, e, i)
                    }
                }, {
                    key: "multParamFloat",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        this.model.getLive2DModel().multParamFloat(t, e, i)
                    }
                }]), e
            }(PIXI.Sprite);
        e["default"] = g, PIXI ? PIXI.Live2DSprite = g : console.error("Error: Cannot find global variable `PIXI`, Live2D plguin will not be installed.")
    }, function(t, e, i) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function n(t) {
            s.L2DBaseModel.prototype.constructor.call(this), this.options = t, this.randomMotion = this.options.randomMotion, this.randomMotionGroup = null, this.randomMotionPriority = null, this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = [], this.audioElement = null, this.audioContext = null, this.audioAnalyser = null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = n;
        var s = i(2),
            o = i(3),
            a = r(o),
            h = i(6),
            l = r(h);
        n.prototype = new s.L2DBaseModel, n.prototype.load = function(t, e, i) {
            this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = "./", this.modelSetting = new l["default"](e);
            var r = this,
                n = r.modelHomeDir + r.modelSetting.getModelFile();
            r.loadModelData(n, function(e) {
                for (var n = 0; n < r.modelSetting.getTextureNum(); n++) {
                    var o = r.modelHomeDir + r.modelSetting.getTextureFile(n);
                    r.loadTexture(t, n, o, function() {
                        if (r.isTexLoaded) {
                            if (r.modelSetting.getExpressionNum() > 0) {
                                r.expressions = {};
                                for (var t = 0; t < r.modelSetting.getExpressionNum(); t++) {
                                    var e = r.modelSetting.getExpressionName(t),
                                        n = r.modelHomeDir + r.modelSetting.getExpressionFile(t);
                                    r.loadExpression(e, n)
                                }
                            } else r.expressionManager = null, r.expressions = {};
                            if (r.eyeBlink || (r.eyeBlink = new s.L2DEyeBlink), r.modelSetting.getPhysicsFile() ? r.loadPhysics(r.modelHomeDir + r.modelSetting.getPhysicsFile()) : r.physics = null, r.modelSetting.getPoseFile() ? r.loadPose(r.modelHomeDir + r.modelSetting.getPoseFile(), function() {
                                    r.pose.updateParam(r.live2DModel)
                                }) : r.pose = null, r.modelSetting.getLayout()) {
                                var o = r.modelSetting.getLayout();
                                null != o.width && r.modelMatrix.setWidth(o.width), null != o.height && r.modelMatrix.setHeight(o.height), null != o.x && r.modelMatrix.setX(o.x), null != o.y && r.modelMatrix.setY(o.y), null != o.center_x && r.modelMatrix.centerX(o.center_x), null != o.center_y && r.modelMatrix.centerY(o.center_y), null != o.top && r.modelMatrix.top(o.top), null != o.bottom && r.modelMatrix.bottom(o.bottom), null != o.left && r.modelMatrix.left(o.left), null != o.right && r.modelMatrix.right(o.right)
                            }
                            for (var t = 0; t < r.modelSetting.getInitParamNum(); t++) r.live2DModel.setParamFloat(r.modelSetting.getInitParamID(t), r.modelSetting.getInitParamValue(t));
                            for (var t = 0; t < r.modelSetting.getInitPartsVisibleNum(); t++) r.live2DModel.setPartsOpacity(r.modelSetting.getInitPartsVisibleID(t), r.modelSetting.getInitPartsVisibleValue(t));
                            r.live2DModel.saveParam(), r.preloadMotionGroup(r.options.defaultMotionGroup), r.mainMotionManager.stopAllMotions(), r.setUpdating(!1), r.setInitialized(!0), "function" == typeof i && i()
                        }
                    })
                }
            })
        }, n.prototype.release = function(t) {}, n.prototype.preloadMotionGroup = function(t) {
            for (var e = this, i = 0; i < this.modelSetting.getMotionNum(t); i++) {
                var r = this.modelSetting.getMotionFile(t, i);
                this.loadMotion(r, this.modelHomeDir + r, function(r) {
                    r.setFadeIn(e.modelSetting.getMotionFadeIn(t, i)), r.setFadeOut(e.modelSetting.getMotionFadeOut(t, i))
                })
            }
        }, n.prototype.update = function() {
            if (!this.live2DModel) return void(this.options.debugLog && console.error("Failed to update."));
            var t = UtSystem.getUserTimeMSec() - this.startTimeMSec,
                e = t / 1e3;
            2 * e * Math.PI;
            this.mainMotionManager.isFinished() && this.randomMotion && this.startRandomMotion(this.randomMotionGroup || this.options.defaultMotionGroup, this.randomMotionPriority || this.options.priorityDefault), this.live2DModel.loadParam();
            var i = this.mainMotionManager.updateParam(this.live2DModel);
            i || this.eyeBlink && this.options.eyeBlink && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), this.expressionManager && this.expressions && !this.expressionManager.isFinished() && this.expressionManager.updateParam(this.live2DModel),
                this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.physics && this.physics.updateParam(this.live2DModel), this.lipSync && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), this.pose && this.pose.updateParam(this.live2DModel), this.live2DModel.update()
        }, n.prototype.setRandomExpression = function() {
            var t = [];
            for (var e in this.expressions) t.push(e);
            var i = parseInt(Math.random() * t.length);
            this.setExpression(t[i])
        }, n.prototype.startRandomMotion = function(t, e) {
            var i = this.modelSetting.getMotionNum(t),
                r = parseInt(Math.random() * i);
            this.startMotion(t, r, e), this.randomMotion = !0, this.randomMotionGroup = t, this.randomMotionPriority = e
        }, n.prototype.startRandomMotionOnce = function(t, e) {
            var i = this.modelSetting.getMotionNum(t),
                r = parseInt(Math.random() * i);
            this.startMotion(t, r, e)
        }, n.prototype.stopRandomMotion = function() {
            this.randomMotion = !1, this.randomMotionGroup = null, this.randomMotionPriority = null
        }, n.prototype.startMotion = function(t, e, i) {
            var r = this.modelSetting.getMotionFile(t, e);
            if (null == r || "" == r) return void(this.options.debugLog && console.warn("Failed to motion."));
            if (i == this.options.priorityForce) this.mainMotionManager.setReservePriority(i);
            else if (!this.mainMotionManager.reserveMotion(i)) return void(this.options.debugLog && console.log("Motion is running."));
            var n, s = this;
            null == this.motions[t] ? this.loadMotion(null, this.modelHomeDir + r, function(r) {
                n = r, s.setFadeInFadeOut(t, e, i, n)
            }) : (n = this.motions[t], s.setFadeInFadeOut(t, e, i, n))
        }, n.prototype.setFadeInFadeOut = function(t, e, i, r) {
            var n = this.modelSetting.getMotionFile(t, e);
            if (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(this.modelSetting.getMotionFadeOut(t, e)), this.options.debugLog && console.log("Start motion : " + n), null == this.modelSetting.getMotionSound(t, e)) this.mainMotionManager.startMotionPrio(r, i);
            else {
                var s = this.modelSetting.getMotionSound(t, e);
                this.options.debugLog && console.log("Start sound : " + s), this.playSound(s, this.modelHomeDir), this.mainMotionManager.startMotionPrio(r, i)
            }
        }, n.prototype.playSound = function(t, e) {
            var i = this;
            if (this.options.audioPlayer) this.options.audioPlayer(t, e);
            else {
                var r = this.audioElement || document.createElement("audio");
                !this.audioElement && (this.audioElement = r), r.src = e + t;
                var n = window.AudioContext || window.webkitAudioContext;
                if (n && this.options.lipSyncWithSound) {
                    var s;
                    ! function() {
                        var t = i.audioContext || new n;
                        i.audioContext || (i.audioContext = t, i.audioElementSource = t.createMediaElementSource(r));
                        var e = i.audioElementSource,
                            o = i.audioAnalyser || t.createAnalyser();
                        !i.audioAnalyser && (i.audioAnalyser = o), o.fftSize = 32, s = o.frequencyBinCount;
                        var a = [],
                            h = Date.now(),
                            l = setInterval(function() {
                                var t = new Uint8Array(s);
                                o.getByteFrequencyData(t);
                                var e = (t[9] + t[10] + t[11]) / 3;
                                if (Date.now() - h < 33) a.push(e);
                                else {
                                    var r = a.length ? a.reduce(function(t, e) {
                                        return e += t
                                    }) / a.length / 100 : i.lipSyncValue;
                                    i.lipSync = !0, i.lipSyncValue = r, h = Date.now(), a = []
                                }
                            }, 0);
                        r.addEventListener("ended", function() {
                            clearInterval(l), i.lipSyncValue = 0
                        }), e.connect(o), o.connect(t.destination)
                    }()
                }
                r.play()
            }
        }, n.prototype.setExpression = function(t) {
            var e = this.expressions[t];
            this.options.debugLog && console.log("Expression : " + t), this.expressionManager.startMotion(e, !1)
        }, n.prototype.draw = function(t) {
            a["default"].push(), a["default"].multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = a["default"].getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), a["default"].pop()
        }, n.prototype.hitTest = function(t, e, i) {
            for (var r = this.modelSetting.getHitAreaNum(), n = !1, s = 0; s < r; s++)
                if (null == t) {
                    var o = this.modelSetting.getHitAreaID(s);
                    if (n = this.hitTestSimple(o, e, i)) return n
                } else if (t == this.modelSetting.getHitAreaName(s)) {
                var o = this.modelSetting.getHitAreaID(s);
                return this.hitTestSimple(o, e, i)
            }
            return !1
        }
    }, function(t, e) {
        "use strict";

        function i(t) {
            this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.json = t || {}
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = i, i.prototype.getTextureFile = function(t) {
            return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t] ? null : this.json[this.TEXTURES][t]
        }, i.prototype.getModelFile = function() {
            return this.json[this.MODEL]
        }, i.prototype.getTextureNum = function() {
            return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length
        }, i.prototype.getHitAreaNum = function() {
            return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length
        }, i.prototype.getHitAreaID = function(t) {
            return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.ID]
        }, i.prototype.getHitAreaName = function(t) {
            return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.NAME]
        }, i.prototype.getPhysicsFile = function() {
            return this.json[this.PHYSICS]
        }, i.prototype.getPoseFile = function() {
            return this.json[this.POSE]
        }, i.prototype.getExpressionNum = function() {
            return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length
        }, i.prototype.getExpressionFile = function(t) {
            return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.FILE]
        }, i.prototype.getExpressionName = function(t) {
            return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.NAME]
        }, i.prototype.getLayout = function() {
            return this.json[this.LAYOUT]
        }, i.prototype.getInitParamNum = function() {
            return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length
        }, i.prototype.getMotionNum = function(t) {
            return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] ? 0 : this.json[this.MOTION_GROUPS][t].length
        }, i.prototype.getMotionFile = function(t, e) {
            return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] ? null : this.json[this.MOTION_GROUPS][t][e][this.FILE]
        }, i.prototype.getMotionSound = function(t, e) {
            return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.SOUND] ? null : this.json[this.MOTION_GROUPS][t][e][this.SOUND]
        }, i.prototype.getMotionFadeIn = function(t, e) {
            return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_IN] ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_IN]
        }, i.prototype.getMotionFadeOut = function(t, e) {
            return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT] ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT]
        }, i.prototype.getInitParamID = function(t) {
            return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? null : this.json[this.INIT_PARAM][t][this.ID]
        }, i.prototype.getInitParamValue = function(t) {
            return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? NaN : this.json[this.INIT_PARAM][t][this.VALUE]
        }, i.prototype.getInitPartsVisibleNum = function() {
            return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length
        }, i.prototype.getInitPartsVisibleID = function(t) {
            return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? null : this.json[this.INIT_PARTS_VISIBLE][t][this.ID]
        }, i.prototype.getInitPartsVisibleValue = function(t) {
            return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? NaN : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE]
        }
    }, function(t, e) {
        "use strict";
        ! function() {
            function t() {
                wt || (this._$MT = null, this._$5S = null, this._$NP = 0, t._$42++, this._$5S = new k(this))
            }

            function e(t) {
                if (!wt) {
                    this.clipContextList = new Array, this.glcontext = t.gl, this.dp_webgl = t, this.curFrameNo = 0, this.firstError_clipInNotUpdate = !0, this.colorBuffer = 0, this.isInitGLFBFunc = !1, this.tmpBoundsOnModel = new $, at.glContext.length > at.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new R, this.tmpMatrix2 = new R, this.tmpMatrixForMask = new R, this.tmpMatrixForDraw = new R, this.CHANNEL_COLORS = new Array;
                    var e = new w;
                    e = new w, e.r = 0, e.g = 0, e.b = 0, e.a = 1, this.CHANNEL_COLORS.push(e), e = new w, e.r = 1, e.g = 0, e.b = 0, e.a = 0, this.CHANNEL_COLORS.push(e), e = new w, e.r = 0, e.g = 1, e.b = 0, e.a = 0, this.CHANNEL_COLORS.push(e), e = new w, e.r = 0, e.g = 0, e.b = 1, e.a = 0, this.CHANNEL_COLORS.push(e);
                    for (var i = 0; i < this.CHANNEL_COLORS.length; i++) this.dp_webgl.setChannelFlagAsColor(i, this.CHANNEL_COLORS[i])
                }
            }

            function i(t, e, i) {
                this.clipIDList = new Array, this.clipIDList = i, this.clippingMaskDrawIndexList = new Array;
                for (var r = 0; r < i.length; r++) this.clippingMaskDrawIndexList.push(e.getDrawDataIndex(i[r]));
                this.clippedDrawContextList = new Array, this.isUsing = !0, this.layoutChannelNo = 0, this.layoutBounds = new $, this.allClippedDrawRect = new $, this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t
            }

            function r(t, e) {
                this._$gP = t, this.drawDataIndex = e
            }

            function n() {
                wt || (this.color = null)
            }

            function s() {
                wt || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0())
            }

            function o() {}

            function a() {
                this._$r = null, this._$0S = null
            }

            function h() {
                wt || (this.x = null, this.y = null, this.width = null, this.height = null)
            }

            function l(t) {
                wt || et.prototype.constructor.call(this, t)
            }

            function u() {}

            function c(t) {
                wt || et.prototype.constructor.call(this, t)
            }

            function p() {
                wt || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, p._$42++)
            }

            function d() {
                wt || (this.p1 = new f, this.p2 = new f, this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array, this._$qP = new Array, this.setup(.3, .5, .1))
            }

            function f() {
                this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0
            }

            function _(t, e, i) {
                this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
            }

            function g(t, e, i, r) {
                _.prototype.constructor.call(this, e, i, r), this._$tL = null, this._$tL = t
            }

            function v(t, e, i) {
                this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
            }

            function y(t, e, i, r) {
                v.prototype.constructor.call(this, e, i, r), this._$YP = null, this._$YP = t
            }

            function x() {
                wt || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = !1, this.reflectY = !1)
            }

            function $() {
                wt || (this.x = null, this.y = null, this.width = null, this.height = null)
            }

            function T() {}

            function b() {
                wt || (this.x = null, this.y = null)
            }

            function S() {
                wt || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array)
            }

            function E() {
                wt || (this._$Eb = E._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = !1, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = E.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array)
            }

            function w() {
                wt || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT)
            }

            function P() {
                wt || (this._$kP = null, this._$dr = null, this._$Ai = !0, this._$mS = null)
            }

            function M() {}

            function A() {
                wt || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = A._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0)
            }

            function L() {}

            function D() {
                wt || (this._$Ob = null)
            }

            function R() {
                this.m = new Float32Array(16), this.identity()
            }

            function O(t) {
                wt || et.prototype.constructor.call(this, t)
            }

            function C() {
                wt || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS)
            }

            function I() {
                wt || (s.prototype.constructor.call(this), this.motions = new Array, this._$7r = null, this._$7r = I._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !0, this.loopFadeIn = !0, this._$AS = -1, _$a0())
            }

            function F() {
                this._$P = new Float32Array(100), this.size = 0
            }

            function N() {
                this._$4P = null, this._$I0 = null, this._$RP = null
            }

            function B() {}

            function U() {}

            function k(t) {
                wt || (this._$QT = !0, this._$co = -1, this._$qo = 0, this._$pb = new Array(k._$is), this._$_2 = new Float32Array(k._$is), this._$vr = new Float32Array(k._$is), this._$Rr = new Float32Array(k._$is), this._$Or = new Float32Array(k._$is), this._$fs = new Float32Array(k._$is), this._$Js = new Array(k._$is), this._$3S = new Array, this._$aS = new Array, this._$Bo = null, this._$F2 = new Array, this._$db = new Array, this._$8b = new Array, this._$Hr = new Array, this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(B._$Qb), this._$ZP = new Float32Array(2 * B._$1r), this._$Ri = t, this._$b0 = k._$HP++, this.clipManager = null, this.dp_webgl = null)
            }

            function G() {}

            function j() {
                wt || (this._$12 = null, this._$bb = null, this._$_L = null, this._$jo = null, this._$iL = null, this._$0L = null, this._$Br = null, this._$Dr = null, this._$Cb = null, this._$mr = null, this._$_L = Mt.STATE_FIRST, this._$Br = 4e3, this._$Dr = 100, this._$Cb = 50, this._$mr = 150, this._$jo = !0, this._$iL = "PARAM_EYE_L_OPEN", this._$0L = "PARAM_EYE_R_OPEN")
            }

            function X() {
                wt || (E.prototype.constructor.call(this), this._$sb = new Int32Array(X._$As), this._$U2 = new Array, this.transform = null, this.gl = null, null == X._$NT && (X._$NT = X._$9r(256), X._$vS = X._$9r(256), X._$no = X._$vb(256)))
            }

            function Y() {
                wt || (P.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null)
            }

            function W(t) {
                ot.prototype.constructor.call(this, t), this._$8r = P._$ur, this._$Yr = null, this._$Wr = null
            }

            function V() {
                wt || (S.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null)
            }

            function z() {
                wt || (this._$NL = null, this._$3S = null, this._$aS = null, z._$42++)
            }

            function H() {
                wt || (t.prototype.constructor.call(this), this._$zo = new X)
            }

            function q() {
                wt || (s.prototype.constructor.call(this), this.motions = new Array, this._$o2 = null, this._$7r = q._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !1, this.loopFadeIn = !0, this._$rr = -1, this._$eP = 0)
            }

            function K(t, e) {
                return String.fromCharCode(t.getUint8(e))
            }

            function F() {
                this._$P = new Float32Array(100), this.size = 0
            }

            function N() {
                this._$4P = null, this._$I0 = null, this._$RP = null
            }

            function J() {
                wt || (P.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null)
            }

            function Z(t) {
                ot.prototype.constructor.call(this, t), this._$8r = P._$ur, this._$Cr = null, this._$hr = null
            }

            function Q() {
                wt || (this.visible = !0, this._$g0 = !1, this._$NL = null, this._$3S = null, this._$aS = null, Q._$42++)
            }

            function tt(t) {
                this._$VS = null, this._$e0 = null, this._$e0 = t
            }

            function et(t) {
                wt || (this.id = t)
            }

            function it() {}

            function rt() {
                wt || (this._$4S = null)
            }

            function nt(t, e) {
                this.canvas = t, this.context = e, this.viewport = new Array(0, 0, t.width, t.height), this._$6r = 1, this._$xP = 0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {}
            }

            function st() {
                wt || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null)
            }

            function ot(t) {
                wt || (this._$e0 = null, this._$IP = null, this._$JS = !1, this._$AT = !0, this._$e0 = t, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1)
            }

            function at() {}

            function ht() {}

            function lt(t) {
                wt || (this._$ib = t)
            }

            function ut() {
                wt || (V.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = ut._$ms, this.culling = !0, this.gl_cacheImage = null, this.instanceNo = ut._$42++)
            }

            function ct(t) {
                St.prototype.constructor.call(this, t), this._$8r = V._$ur, this._$Cr = null, this._$hr = null
            }

            function pt() {
                wt || (this.x = null, this.y = null)
            }

            function dt(e) {
                wt || (t.prototype.constructor.call(this), this.drawParamWebGL = new yt(e), this.drawParamWebGL.setGL(at.getGL(e)))
            }

            function ft() {
                wt || (this.motions = null, this._$eb = !1, this.motions = new Array)
            }

            function _t() {
                this._$w0 = null, this._$AT = !0, this._$9L = !1, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr = null, this._$sr = _t._$Gs++
            }

            function gt() {
                this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1)
            }

            function vt(t) {
                wt || et.prototype.constructor.call(this, t)
            }

            function yt(t) {
                wt || (E.prototype.constructor.call(this), this.textures = new Array, this.transform = null, this.gl = null, this.glno = t, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = !1, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null)
            }

            function mt(t, e, i) {
                return null == e && (e = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, i, t.DYNAMIC_DRAW), e
            }

            function xt(t, e, i) {
                return null == e && (e = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e), t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t.DYNAMIC_DRAW), e
            }

            function $t(t) {
                wt || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array, this._$T = t, this._$F = 0)
            }

            function Tt() {}

            function bt() {}

            function St(t) {
                wt || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [!1], this._$VS = null, this._$AT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t)
            }

            function Et() {}
            var wt = !0;
            t._$0s = 1, t._$4s = 2, t._$42 = 0, t._$62 = function(e, i) {
                try {
                    if (i instanceof ArrayBuffer && (i = new DataView(i)), !(i instanceof DataView)) throw new lt("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
                    var r, n = new $t(i),
                        s = n._$ST(),
                        a = n._$ST(),
                        h = n._$ST();
                    if (109 != s || 111 != a || 99 != h) throw new lt("_$gi _$C _$li , _$Q0 _$P0.");
                    if (r = n._$ST(), n._$gr(r), r > U._$T7) {
                        e._$NP |= t._$4s;
                        var l = U._$T7,
                            u = "_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + l + " < _$f0 : " + r + " )@_$SS#loadModel()\n";
                        throw new lt(u)
                    }
                    var c = n._$nP();
                    if (r >= U._$s7) {
                        var p = n._$9T(),
                            d = n._$9T();
                        if (p != -30584 || d != -30584) throw e._$NP |= t._$0s, new lt("_$gi _$C _$li , _$0 _$6 _$Ui.")
                    }
                    e._$KS(c);
                    var f = e.getModelContext();
                    f.setDrawParam(e.getDrawParam()), f.init()
                } catch (_) {
                    o._$Rb(_)
                }
            }, t.prototype._$KS = function(t) {
                this._$MT = t
            }, t.prototype.getModelImpl = function() {
                return null == this._$MT && (this._$MT = new p, this._$MT._$zP()), this._$MT
            }, t.prototype.getCanvasWidth = function() {
                return null == this._$MT ? 0 : this._$MT.getCanvasWidth()
            }, t.prototype.getCanvasHeight = function() {
                return null == this._$MT ? 0 : this._$MT.getCanvasHeight()
            }, t.prototype.getParamFloat = function(t) {
                return "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), this._$5S.getParamFloat(t)
            }, t.prototype.setParamFloat = function(t, e, i) {
                "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 - i) + e * i)
            }, t.prototype.addToParamFloat = function(t, e, i) {
                "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) + e * i)
            }, t.prototype.multParamFloat = function(t, e, i) {
                "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 + (e - 1) * i))
            }, t.prototype.getParamIndex = function(t) {
                return this._$5S.getParamIndex(c.getID(t))
            }, t.prototype.loadParam = function() {
                this._$5S.loadParam()
            }, t.prototype.saveParam = function() {
                this._$5S.saveParam()
            }, t.prototype.init = function() {
                this._$5S.init()
            }, t.prototype.update = function() {
                this._$5S.update()
            }, t.prototype._$Rs = function() {
                return o._$li("_$60 _$PT _$Rs()"), -1
            }, t.prototype._$Ds = function(t) {
                o._$li("_$60 _$PT _$SS#_$Ds() \n")
            }, t.prototype._$K2 = function() {}, t.prototype.draw = function() {}, t.prototype.getModelContext = function() {
                return this._$5S
            }, t.prototype._$s2 = function() {
                return this._$NP
            }, t.prototype._$P7 = function(t, e, i, r) {
                var n = -1,
                    s = 0,
                    o = this,
                    a = .5,
                    h = .15,
                    l = !0;
                if (0 != i)
                    if (1 == t.length) {
                        var u = t[0],
                            c = 0 != o.getParamFloat(u),
                            p = e[0],
                            d = o.getPartsOpacity(p),
                            f = i / r;
                        c ? (d += f, d > 1 && (d = 1)) : (d -= f, d < 0 && (d = 0)), o.setPartsOpacity(p, d)
                    } else {
                        for (var _ = 0; _ < t.length; _++) {
                            var u = t[_],
                                g = 0 != o.getParamFloat(u);
                            if (g) {
                                if (n >= 0) break;
                                n = _;
                                var p = e[_];
                                s = o.getPartsOpacity(p), s += i / r, s > 1 && (s = 1)
                            }
                        }
                        n < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t[0]), n = 0, s = 1, o.loadParam(), o.setParamFloat(t[n], s), o.saveParam());
                        for (var _ = 0; _ < t.length; _++) {
                            var p = e[_];
                            if (n == _) o.setPartsOpacity(p, s);
                            else {
                                var v, y = o.getPartsOpacity(p);
                                if (v = s < a ? s * (a - 1) / a + 1 : (1 - s) * a / (1 - a), l) {
                                    var m = (1 - v) * (1 - s);
                                    m > h && (v = 1 - h / (1 - s))
                                }
                                y > v && (y = v), o.setPartsOpacity(p, y)
                            }
                        }
                    }
                else
                    for (var _ = 0; _ < t.length; _++) {
                        var u = t[_],
                            p = e[_],
                            g = 0 != o.getParamFloat(u);
                        o.setPartsOpacity(p, g ? 1 : 0)
                    }
            }, t.prototype.setPartsOpacity = function(t, e) {
                "number" != typeof t && (t = this._$5S.getPartsDataIndex(l.getID(t))), this._$5S.setPartsOpacity(t, e)
            }, t.prototype.getPartsDataIndex = function(t) {
                return t instanceof l || (t = l.getID(t)), this._$5S.getPartsDataIndex(t)
            }, t.prototype.getPartsOpacity = function(t) {
                return "number" != typeof t && (t = this._$5S.getPartsDataIndex(l.getID(t))), t < 0 ? 0 : this._$5S.getPartsOpacity(t)
            }, t.prototype.getDrawParam = function() {}, t.prototype.getDrawDataIndex = function(t) {
                return this._$5S.getDrawDataIndex(O.getID(t))
            }, t.prototype.getDrawData = function(t) {
                return this._$5S.getDrawData(t)
            }, t.prototype.getTransformedPoints = function(t) {
                var e = this._$5S._$C2(t);
                return e instanceof ct ? e.getTransformedPoints() : null
            }, t.prototype.getIndexArray = function(t) {
                if (t < 0 || t >= this._$5S._$aS.length) return null;
                var e = this._$5S._$aS[t];
                return null != e && e.getType() == V._$wb && e instanceof ut ? e.getIndexArray() : null
            }, e.CHANNEL_COUNT = 4, e.RENDER_TEXTURE_USE_MIPMAP = !1, e.NOT_USED_FRAME = -100, e.prototype._$L7 = function() {
                if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
                    for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
                    this.CHANNEL_COLORS = []
                }
                this.releaseShader()
            }, e.prototype.releaseShader = function() {
                for (var t = at.frameBuffers.length, e = 0; e < t; e++) this.gl.deleteFramebuffer(at.frameBuffers[e].framebuffer);
                at.frameBuffers = [], at.glContext = []
            }, e.prototype.init = function(t, e, r) {
                for (var n = 0; n < e.length; n++) {
                    var s = e[n].getClipIDList();
                    if (null != s) {
                        var o = this.findSameClip(s);
                        null == o && (o = new i(this, t, s), this.clipContextList.push(o));
                        var a = e[n].getDrawDataID(),
                            h = t.getDrawDataIndex(a);
                        o.addClippedDrawData(a, h);
                        var l = r[n];
                        l.clipBufPre_clipContext = o
                    }
                }
            }, e.prototype.getMaskRenderTexture = function() {
                var t = null;
                return t = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t, this.dp_webgl.glno
            }, e.prototype.setupClip = function(t, e) {
                for (var i = 0, r = 0; r < this.clipContextList.length; r++) {
                    var n = this.clipContextList[r];
                    this.calcClippedDrawTotalBounds(t, n), n.isUsing && i++
                }
                if (i > 0) {
                    var s = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING),
                        o = new Array(4);
                    o[0] = 0, o[1] = 0, o[2] = e.gl.canvas.width, o[3] = e.gl.canvas.height, e.gl.viewport(0, 0, at.clippingMaskBufferSize, at.clippingMaskBufferSize), this.setupLayoutBounds(i), e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, at.frameBuffers[this.curFrameNo].framebuffer), e.gl.clearColor(0, 0, 0, 0), e.gl.clear(e.gl.COLOR_BUFFER_BIT);
                    for (var r = 0; r < this.clipContextList.length; r++) {
                        var n = this.clipContextList[r],
                            a = n.allClippedDrawRect,
                            h = (n.layoutChannelNo, n.layoutBounds),
                            l = .05;
                        this.tmpBoundsOnModel._$jL(a), this.tmpBoundsOnModel.expand(a.width * l, a.height * l);
                        var u = h.width / this.tmpBoundsOnModel.width,
                            c = h.height / this.tmpBoundsOnModel.height;
                        this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(h.x, h.y, 0), this.tmpMatrix2.scale(u, c, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(h.x, h.y, 0), this.tmpMatrix2.scale(u, c, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
                        for (var p = this.tmpMatrixForMask.getArray(), d = 0; d < 16; d++) n.matrixForMask[d] = p[d];
                        for (var f = this.tmpMatrixForDraw.getArray(), d = 0; d < 16; d++) n.matrixForDraw[d] = f[d];
                        for (var _ = n.clippingMaskDrawIndexList.length, g = 0; g < _; g++) {
                            var v = n.clippingMaskDrawIndexList[g],
                                y = t.getDrawData(v),
                                m = t._$C2(v);
                            e.setClipBufPre_clipContextForMask(n), y.draw(e, t, m)
                        }
                    }
                    e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, s), e.setClipBufPre_clipContextForMask(null), e.gl.viewport(o[0], o[1], o[2], o[3])
                }
            }, e.prototype.getColorBuffer = function() {
                return this.colorBuffer
            }, e.prototype.findSameClip = function(t) {
                for (var e = 0; e < this.clipContextList.length; e++) {
                    var i = this.clipContextList[e],
                        r = i.clipIDList.length;
                    if (r == t.length) {
                        for (var n = 0, s = 0; s < r; s++)
                            for (var o = i.clipIDList[s], a = 0; a < r; a++)
                                if (t[a] == o) {
                                    n++;
                                    break
                                }
                        if (n == r) return i
                    }
                }
                return null
            }, e.prototype.calcClippedDrawTotalBounds = function(t, e) {
                for (var i = t._$Ri.getModelImpl().getCanvasWidth(), r = t._$Ri.getModelImpl().getCanvasHeight(), n = i > r ? i : r, s = n, o = n, a = 0, h = 0, l = e.clippedDrawContextList.length, u = 0; u < l; u++) {
                    var c = e.clippedDrawContextList[u],
                        p = c.drawDataIndex,
                        d = t._$C2(p);
                    if (d._$yo()) {
                        for (var f = d.getTransformedPoints(), _ = f.length, g = [], v = [], y = 0, m = B._$i2; m < _; m += B._$No) g[y] = f[m], v[y] = f[m + 1], y++;
                        var x = Math.min.apply(null, g),
                            $ = Math.min.apply(null, v),
                            T = Math.max.apply(null, g),
                            b = Math.max.apply(null, v);
                        x < s && (s = x), $ < o && (o = $), T > a && (a = T), b > h && (h = b)
                    }
                }
                if (s == n) e.allClippedDrawRect.x = 0, e.allClippedDrawRect.y = 0, e.allClippedDrawRect.width = 0, e.allClippedDrawRect.height = 0, e.isUsing = !1;
                else {
                    var S = a - s,
                        E = h - o;
                    e.allClippedDrawRect.x = s, e.allClippedDrawRect.y = o, e.allClippedDrawRect.width = S, e.allClippedDrawRect.height = E, e.isUsing = !0
                }
            }, e.prototype.setupLayoutBounds = function(t) {
                var i = t / e.CHANNEL_COUNT,
                    r = t % e.CHANNEL_COUNT;
                i = ~~i, r = ~~r;
                for (var n = 0, s = 0; s < e.CHANNEL_COUNT; s++) {
                    var a = i + (s < r ? 1 : 0);
                    if (0 == a);
                    else if (1 == a) {
                        var h = this.clipContextList[n++];
                        h.layoutChannelNo = s, h.layoutBounds.x = 0, h.layoutBounds.y = 0, h.layoutBounds.width = 1, h.layoutBounds.height = 1
                    } else if (2 == a)
                        for (var l = 0; l < a; l++) {
                            var u = l % 2,
                                c = 0;
                            u = ~~u;
                            var h = this.clipContextList[n++];
                            h.layoutChannelNo = s, h.layoutBounds.x = .5 * u, h.layoutBounds.y = 0, h.layoutBounds.width = .5, h.layoutBounds.height = 1
                        } else if (a <= 4)
                            for (var l = 0; l < a; l++) {
                                var u = l % 2,
                                    c = l / 2;
                                u = ~~u, c = ~~c;
                                var h = this.clipContextList[n++];
                                h.layoutChannelNo = s, h.layoutBounds.x = .5 * u, h.layoutBounds.y = .5 * c, h.layoutBounds.width = .5, h.layoutBounds.height = .5
                            } else if (a <= 9)
                                for (var l = 0; l < a; l++) {
                                    var u = l % 3,
                                        c = l / 3;
                                    u = ~~u, c = ~~c;
                                    var h = this.clipContextList[n++];
                                    h.layoutChannelNo = s, h.layoutBounds.x = u / 3, h.layoutBounds.y = c / 3, h.layoutBounds.width = 1 / 3, h.layoutBounds.height = 1 / 3
                                } else o._$li("_$6 _$0P mask count : %d", a)
                }
            }, i.prototype.addClippedDrawData = function(t, e) {
                var i = new r(t, e);
                this.clippedDrawContextList.push(i)
            }, s._$JT = function(t, e, i) {
                var r = t / e,
                    n = i / e,
                    s = n,
                    o = 1 / 3,
                    a = 2 / 3,
                    h = 1 - (1 - n) * (1 - n),
                    l = 1 - (1 - s) * (1 - s),
                    u = 0,
                    c = (1 - n) * o * h + (s * a + (1 - s) * o) * (1 - h),
                    p = (s + (1 - s) * a) * l + (n * o + (1 - n) * a) * (1 - l),
                    d = 1,
                    f = d - 3 * p + 3 * c - u,
                    _ = 3 * p - 6 * c + 3 * u,
                    g = 3 * c - 3 * u,
                    v = u;
                if (r <= 0) return 0;
                if (r >= 1) return 1;
                var y = r,
                    m = y * y,
                    x = y * m,
                    $ = f * x + _ * m + g * y + v;
                return $
            }, s.prototype._$a0 = function() {}, s.prototype.setFadeIn = function(t) {
                this._$dP = t
            }, s.prototype.setFadeOut = function(t) {
                this._$eo = t
            }, s.prototype._$pT = function(t) {
                this._$V0 = t
            }, s.prototype.getFadeOut = function() {
                return this._$eo
            }, s.prototype._$4T = function() {
                return this._$eo
            }, s.prototype._$mT = function() {
                return this._$V0
            }, s.prototype.getDurationMSec = function() {
                return -1
            }, s.prototype.getLoopDurationMSec = function() {
                return -1
            }, s.prototype.updateParam = function(t, e) {
                if (e._$AT && !e._$9L) {
                    var i = M.getUserTimeMSec();
                    if (e._$z2 < 0) {
                        e._$z2 = i, e._$bs = i;
                        var r = this.getDurationMSec();
                        e._$Do < 0 && (e._$Do = r <= 0 ? -1 : e._$z2 + r)
                    }
                    var n = this._$V0,
                        s = 0 == this._$dP ? 1 : ht._$r2((i - e._$bs) / this._$dP),
                        o = 0 == this._$eo || e._$Do < 0 ? 1 : ht._$r2((e._$Do - i) / this._$eo);
                    n = n * s * o, 0 <= n && n <= 1 || console.log("### assert!! ### "), this.updateParamExe(t, i, n, e), e._$Do > 0 && e._$Do < i && (e._$9L = !0)
                }
            }, s.prototype.updateParamExe = function(t, e, i, r) {}, o._$8s = 0, o._$fT = new Object, o.start = function(t) {
                var e = o._$fT[t];
                null == e && (e = new a, e._$r = t, o._$fT[t] = e), e._$0S = M.getSystemTimeMSec()
            }, o.dump = function(t) {
                var e = o._$fT[t];
                if (null != e) {
                    var i = M.getSystemTimeMSec(),
                        r = i - e._$0S;
                    return console.log(t + " : " + r + "ms"), r
                }
                return -1
            }, o.end = function(t) {
                var e = o._$fT[t];
                if (null != e) {
                    var i = M.getSystemTimeMSec();
                    return i - e._$0S
                }
                return -1
            }, o._$li = function(t, e) {
                console.log("_$li : " + t + "\n", e)
            }, o._$Ji = function(t, e) {
                console.log(t, e)
            }, o._$dL = function(t, e) {
                console.log(t, e), console.log("\n")
            }, o._$KL = function(t, e) {
                for (var i = 0; i < e; i++) i % 16 == 0 && i > 0 ? console.log("\n") : i % 8 == 0 && i > 0 && console.log("  "), console.log("%02X ", 255 & t[i]);
                console.log("\n")
            }, o._$nr = function(t, e, i) {
                console.log("%s\n", t);
                for (var r = e.length, n = 0; n < r; ++n) console.log("%5d", e[n]), console.log("%s\n", i), console.log(",");
                console.log("\n")
            }, o._$Rb = function(t) {
                console.log("dump exception : " + t), console.log("stack :: " + t.stack)
            }, h.prototype._$8P = function() {
                return .5 * (this.x + this.x + this.width)
            }, h.prototype._$6P = function() {
                return .5 * (this.y + this.y + this.height)
            }, h.prototype._$EL = function() {
                return this.x + this.width
            }, h.prototype._$5T = function() {
                return this.y + this.height
            }, h.prototype._$jL = function(t, e, i, r) {
                this.x = t, this.y = e, this.width = i, this.height = r
            }, h.prototype._$jL = function(t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }, l.prototype = new et, l._$tP = new Object, l._$27 = function() {
                l._$tP.clear()
            }, l.getID = function(t) {
                var e = l._$tP[t];
                return null == e && (e = new l(t), l._$tP[t] = e), e
            }, l.prototype._$3s = function() {
                return new l
            }, c.prototype = new et, c._$tP = new Object, c._$27 = function() {
                c._$tP.clear()
            }, c.getID = function(t) {
                var e = c._$tP[t];
                return null == e && (e = new c(t), c._$tP[t] = e), e
            }, c.prototype._$3s = function() {
                return new c
            }, p._$42 = 0, p.prototype._$zP = function() {
                null == this._$vo && (this._$vo = new rt), null == this._$F2 && (this._$F2 = new Array)
            }, p.prototype.getCanvasWidth = function() {
                return this._$ao
            }, p.prototype.getCanvasHeight = function() {
                return this._$1S
            }, p.prototype._$F0 = function(t) {
                this._$vo = t._$nP(), this._$F2 = t._$nP(), this._$ao = t._$6L(), this._$1S = t._$6L()
            }, p.prototype._$6S = function(t) {
                this._$F2.push(t)
            }, p.prototype._$Xr = function() {
                return this._$F2
            }, p.prototype._$E2 = function() {
                return this._$vo
            }, d.prototype.setup = function(t, e, i) {
                this._$ks = this._$Yb(), this.p2._$xT(), 3 == arguments.length && (this._$Fo = t, this._$L2 = e, this.p1._$p = i, this.p2._$p = i, this.p2.y = t, this.setup())
            }, d.prototype.getPhysicsPoint1 = function() {
                return this.p1
            }, d.prototype.getPhysicsPoint2 = function() {
                return this.p2
            }, d.prototype._$qr = function() {
                return this._$Db
            }, d.prototype._$pr = function(t) {
                this._$Db = t
            }, d.prototype._$5r = function() {
                return this._$M2
            }, d.prototype._$Cs = function() {
                return this._$9b
            }, d.prototype._$Yb = function() {
                return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI
            }, d.prototype.addSrcParam = function(t, e, i, r) {
                var n = new g(t, e, i, r);
                this._$lL.push(n)
            }, d.prototype.addTargetParam = function(t, e, i, r) {
                var n = new y(t, e, i, r);
                this._$qP.push(n)
            }, d.prototype.update = function(t, e) {
                if (0 == this._$iP) return this._$iP = this._$iT = e, void(this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
                var i = (e - this._$iT) / 1e3;
                if (0 != i) {
                    for (var r = this._$lL.length - 1; r >= 0; --r) {
                        var n = this._$lL[r];
                        n._$oP(t, this)
                    }
                    this._$oo(t, i), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / i, this._$ks = this._$M2
                }
                for (var r = this._$qP.length - 1; r >= 0; --r) {
                    var s = this._$qP[r];
                    s._$YS(t, this)
                }
                this._$iT = e
            }, d.prototype._$oo = function(t, e) {
                e < .033 && (e = .033);
                var i = 1 / e;
                this.p1.vx = (this.p1.x - this.p1._$s0) * i, this.p1.vy = (this.p1.y - this.p1._$70) * i, this.p1.ax = (this.p1.vx - this.p1._$7L) * i, this.p1.ay = (this.p1.vy - this.p1._$HL) * i, this.p1.fx = this.p1.ax * this.p1._$p, this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT();
                var r, n, s = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
                    o = Math.cos(s),
                    a = Math.sin(s),
                    h = 9.8 * this.p2._$p,
                    l = this._$Db * bt._$bS,
                    u = h * Math.cos(s - l);
                r = u * a, n = u * o;
                var c = -this.p1.fx * a * a,
                    p = -this.p1.fy * a * o,
                    d = -this.p2.vx * this._$L2,
                    f = -this.p2.vy * this._$L2;
                this.p2.fx = r + c + d, this.p2.fy = n + p + f, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy / this.p2._$p, this.p2.vx += this.p2.ax * e, this.p2.vy += this.p2.ay * e, this.p2.x += this.p2.vx * e, this.p2.y += this.p2.vy * e;
                var _ = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
                this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / _, this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / _, this.p2.vx = (this.p2.x - this.p2._$s0) * i, this.p2.vy = (this.p2.y - this.p2._$70) * i, this.p2._$xT();
            }, f.prototype._$xT = function() {
                this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy
            }, _.prototype._$oP = function(t, e) {}, g.prototype = new _, g.prototype._$oP = function(t, e) {
                var i = this.scale * t.getParamFloat(this._$wL),
                    r = e.getPhysicsPoint1();
                switch (this._$tL) {
                    default:
                        case d.Src.SRC_TO_X:
                        r.x = r.x + (i - r.x) * this._$V0;
                    break;
                    case d.Src.SRC_TO_Y:
                            r.y = r.y + (i - r.y) * this._$V0;
                        break;
                    case d.Src.SRC_TO_G_ANGLE:
                            var n = e._$qr();n += (i - n) * this._$V0,
                        e._$pr(n)
                }
            }, v.prototype._$YS = function(t, e) {}, y.prototype = new v, y.prototype._$YS = function(t, e) {
                switch (this._$YP) {
                    default:
                        case d.Target.TARGET_FROM_ANGLE:
                        t.setParamFloat(this._$wL, this.scale * e._$5r(), this._$V0);
                    break;
                    case d.Target.TARGET_FROM_ANGLE_V:
                            t.setParamFloat(this._$wL, this.scale * e._$Cs(), this._$V0)
                }
            }, d.Src = function() {}, d.Src.SRC_TO_X = "SRC_TO_X", d.Src.SRC_TO_Y = "SRC_TO_Y", d.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE", d.Target = function() {}, d.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", d.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V", x.prototype.init = function(t) {
                this._$fL = t._$fL, this._$gL = t._$gL, this._$B0 = t._$B0, this._$z0 = t._$z0, this._$qT = t._$qT, this.reflectX = t.reflectX, this.reflectY = t.reflectY
            }, x.prototype._$F0 = function(t) {
                this._$fL = t._$_T(), this._$gL = t._$_T(), this._$B0 = t._$_T(), this._$z0 = t._$_T(), this._$qT = t._$_T(), t.getFormatVersion() >= U.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._$po(), this.reflectY = t._$po())
            }, x.prototype._$e = function() {};
            var Pt = function() {};
            Pt._$ni = function(t, e, i, r, n, s, o, a, h) {
                var l = o * s - a * n;
                if (0 == l) return null;
                var u, c = ((t - i) * s - (e - r) * n) / l;
                return u = 0 != n ? (t - i - c * o) / n : (e - r - c * a) / s, isNaN(u) && (u = (t - i - c * o) / n, isNaN(u) && (u = (e - r - c * a) / s), isNaN(u) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + n), console.log("v1x != 0 ? " + (0 != n)))), null == h ? new Array(u, c) : (h[0] = u, h[1] = c, h)
            }, $.prototype._$8P = function() {
                return this.x + .5 * this.width
            }, $.prototype._$6P = function() {
                return this.y + .5 * this.height
            }, $.prototype._$EL = function() {
                return this.x + this.width
            }, $.prototype._$5T = function() {
                return this.y + this.height
            }, $.prototype._$jL = function(t, e, i, r) {
                this.x = t, this.y = e, this.width = i, this.height = r
            }, $.prototype._$jL = function(t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }, $.prototype.contains = function(t, e) {
                return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height
            }, $.prototype.expand = function(t, e) {
                this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
            }, T._$Z2 = function(t, e, i, r) {
                var n = e._$Q2(t, i),
                    s = t._$vs(),
                    o = t._$Tr();
                if (e._$zr(s, o, n), n <= 0) return r[s[0]];
                if (1 == n) {
                    var a = r[s[0]],
                        h = r[s[1]],
                        l = o[0];
                    return a + (h - a) * l | 0
                }
                if (2 == n) {
                    var a = r[s[0]],
                        h = r[s[1]],
                        u = r[s[2]],
                        c = r[s[3]],
                        l = o[0],
                        p = o[1],
                        d = a + (h - a) * l | 0,
                        f = u + (c - u) * l | 0;
                    return d + (f - d) * p | 0
                }
                if (3 == n) {
                    var _ = r[s[0]],
                        g = r[s[1]],
                        v = r[s[2]],
                        y = r[s[3]],
                        m = r[s[4]],
                        x = r[s[5]],
                        $ = r[s[6]],
                        T = r[s[7]],
                        l = o[0],
                        p = o[1],
                        b = o[2],
                        a = _ + (g - _) * l | 0,
                        h = v + (y - v) * l | 0,
                        u = m + (x - m) * l | 0,
                        c = $ + (T - $) * l | 0,
                        d = a + (h - a) * p | 0,
                        f = u + (c - u) * p | 0;
                    return d + (f - d) * b | 0
                }
                if (4 == n) {
                    var S = r[s[0]],
                        E = r[s[1]],
                        w = r[s[2]],
                        P = r[s[3]],
                        M = r[s[4]],
                        A = r[s[5]],
                        L = r[s[6]],
                        D = r[s[7]],
                        R = r[s[8]],
                        O = r[s[9]],
                        C = r[s[10]],
                        I = r[s[11]],
                        F = r[s[12]],
                        N = r[s[13]],
                        B = r[s[14]],
                        U = r[s[15]],
                        l = o[0],
                        p = o[1],
                        b = o[2],
                        k = o[3],
                        _ = S + (E - S) * l | 0,
                        g = w + (P - w) * l | 0,
                        v = M + (A - M) * l | 0,
                        y = L + (D - L) * l | 0,
                        m = R + (O - R) * l | 0,
                        x = C + (I - C) * l | 0,
                        $ = F + (N - F) * l | 0,
                        T = B + (U - B) * l | 0,
                        a = _ + (g - _) * p | 0,
                        h = v + (y - v) * p | 0,
                        u = m + (x - m) * p | 0,
                        c = $ + (T - $) * p | 0,
                        d = a + (h - a) * b | 0,
                        f = u + (c - u) * b | 0;
                    return d + (f - d) * k | 0
                }
                for (var G = 1 << n, j = new Float32Array(G), X = 0; X < G; X++) {
                    for (var Y = X, W = 1, V = 0; V < n; V++) W *= Y % 2 == 0 ? 1 - o[V] : o[V], Y /= 2;
                    j[X] = W
                }
                for (var z = new Float32Array(G), H = 0; H < G; H++) z[H] = r[s[H]];
                for (var q = 0, H = 0; H < G; H++) q += j[H] * z[H];
                return q + .5 | 0
            }, T._$br = function(t, e, i, r) {
                var n = e._$Q2(t, i),
                    s = t._$vs(),
                    o = t._$Tr();
                if (e._$zr(s, o, n), n <= 0) return r[s[0]];
                if (1 == n) {
                    var a = r[s[0]],
                        h = r[s[1]],
                        l = o[0];
                    return a + (h - a) * l
                }
                if (2 == n) {
                    var a = r[s[0]],
                        h = r[s[1]],
                        u = r[s[2]],
                        c = r[s[3]],
                        l = o[0],
                        p = o[1];
                    return (1 - p) * (a + (h - a) * l) + p * (u + (c - u) * l)
                }
                if (3 == n) {
                    var d = r[s[0]],
                        f = r[s[1]],
                        _ = r[s[2]],
                        g = r[s[3]],
                        v = r[s[4]],
                        y = r[s[5]],
                        m = r[s[6]],
                        x = r[s[7]],
                        l = o[0],
                        p = o[1],
                        $ = o[2];
                    return (1 - $) * ((1 - p) * (d + (f - d) * l) + p * (_ + (g - _) * l)) + $ * ((1 - p) * (v + (y - v) * l) + p * (m + (x - m) * l))
                }
                if (4 == n) {
                    var T = r[s[0]],
                        b = r[s[1]],
                        S = r[s[2]],
                        E = r[s[3]],
                        w = r[s[4]],
                        P = r[s[5]],
                        M = r[s[6]],
                        A = r[s[7]],
                        L = r[s[8]],
                        D = r[s[9]],
                        R = r[s[10]],
                        O = r[s[11]],
                        C = r[s[12]],
                        I = r[s[13]],
                        F = r[s[14]],
                        N = r[s[15]],
                        l = o[0],
                        p = o[1],
                        $ = o[2],
                        B = o[3];
                    return (1 - B) * ((1 - $) * ((1 - p) * (T + (b - T) * l) + p * (S + (E - S) * l)) + $ * ((1 - p) * (w + (P - w) * l) + p * (M + (A - M) * l))) + B * ((1 - $) * ((1 - p) * (L + (D - L) * l) + p * (R + (O - R) * l)) + $ * ((1 - p) * (C + (I - C) * l) + p * (F + (N - F) * l)))
                }
                for (var U = 1 << n, k = new Float32Array(U), G = 0; G < U; G++) {
                    for (var j = G, X = 1, Y = 0; Y < n; Y++) X *= j % 2 == 0 ? 1 - o[Y] : o[Y], j /= 2;
                    k[G] = X
                }
                for (var W = new Float32Array(U), V = 0; V < U; V++) W[V] = r[s[V]];
                for (var z = 0, V = 0; V < U; V++) z += k[V] * W[V];
                return z
            }, T._$Vr = function(t, e, i, r, n, s, o, a) {
                var h = e._$Q2(t, i),
                    l = t._$vs(),
                    u = t._$Tr();
                e._$zr(l, u, h);
                var c = 2 * r,
                    p = o;
                if (h <= 0) {
                    var d = l[0],
                        f = n[d];
                    if (2 == a && 0 == o) M._$jT(f, 0, s, 0, c);
                    else
                        for (var _ = 0; _ < c;) s[p] = f[_++], s[p + 1] = f[_++], p += a
                } else if (1 == h)
                    for (var f = n[l[0]], g = n[l[1]], v = u[0], y = 1 - v, _ = 0; _ < c;) s[p] = f[_] * y + g[_] * v, ++_, s[p + 1] = f[_] * y + g[_] * v, ++_, p += a;
                else if (2 == h)
                    for (var f = n[l[0]], g = n[l[1]], m = n[l[2]], x = n[l[3]], v = u[0], $ = u[1], y = 1 - v, T = 1 - $, b = T * y, S = T * v, E = $ * y, w = $ * v, _ = 0; _ < c;) s[p] = b * f[_] + S * g[_] + E * m[_] + w * x[_], ++_, s[p + 1] = b * f[_] + S * g[_] + E * m[_] + w * x[_], ++_, p += a;
                else if (3 == h)
                    for (var P = n[l[0]], A = n[l[1]], L = n[l[2]], D = n[l[3]], R = n[l[4]], O = n[l[5]], C = n[l[6]], I = n[l[7]], v = u[0], $ = u[1], F = u[2], y = 1 - v, T = 1 - $, N = 1 - F, B = N * T * y, U = N * T * v, k = N * $ * y, G = N * $ * v, j = F * T * y, X = F * T * v, Y = F * $ * y, W = F * $ * v, _ = 0; _ < c;) s[p] = B * P[_] + U * A[_] + k * L[_] + G * D[_] + j * R[_] + X * O[_] + Y * C[_] + W * I[_], ++_, s[p + 1] = B * P[_] + U * A[_] + k * L[_] + G * D[_] + j * R[_] + X * O[_] + Y * C[_] + W * I[_], ++_, p += a;
                else if (4 == h)
                    for (var V = n[l[0]], z = n[l[1]], H = n[l[2]], q = n[l[3]], K = n[l[4]], J = n[l[5]], Z = n[l[6]], Q = n[l[7]], tt = n[l[8]], et = n[l[9]], it = n[l[10]], rt = n[l[11]], nt = n[l[12]], st = n[l[13]], ot = n[l[14]], at = n[l[15]], v = u[0], $ = u[1], F = u[2], ht = u[3], y = 1 - v, T = 1 - $, N = 1 - F, lt = 1 - ht, ut = lt * N * T * y, ct = lt * N * T * v, pt = lt * N * $ * y, dt = lt * N * $ * v, ft = lt * F * T * y, _t = lt * F * T * v, gt = lt * F * $ * y, vt = lt * F * $ * v, yt = ht * N * T * y, mt = ht * N * T * v, xt = ht * N * $ * y, $t = ht * N * $ * v, Tt = ht * F * T * y, bt = ht * F * T * v, St = ht * F * $ * y, Et = ht * F * $ * v, _ = 0; _ < c;) s[p] = ut * V[_] + ct * z[_] + pt * H[_] + dt * q[_] + ft * K[_] + _t * J[_] + gt * Z[_] + vt * Q[_] + yt * tt[_] + mt * et[_] + xt * it[_] + $t * rt[_] + Tt * nt[_] + bt * st[_] + St * ot[_] + Et * at[_], ++_, s[p + 1] = ut * V[_] + ct * z[_] + pt * H[_] + dt * q[_] + ft * K[_] + _t * J[_] + gt * Z[_] + vt * Q[_] + yt * tt[_] + mt * et[_] + xt * it[_] + $t * rt[_] + Tt * nt[_] + bt * st[_] + St * ot[_] + Et * at[_], ++_, p += a;
                else {
                    for (var wt = 1 << h, Pt = new Float32Array(wt), Mt = 0; Mt < wt; Mt++) {
                        for (var At = Mt, Lt = 1, Dt = 0; Dt < h; Dt++) Lt *= At % 2 == 0 ? 1 - u[Dt] : u[Dt], At /= 2;
                        Pt[Mt] = Lt
                    }
                    for (var Rt = new Float32Array(wt), Ot = 0; Ot < wt; Ot++) Rt[Ot] = n[l[Ot]];
                    for (var _ = 0; _ < c;) {
                        for (var Ct = 0, It = 0, Ft = _ + 1, Ot = 0; Ot < wt; Ot++) Ct += Pt[Ot] * Rt[Ot][_], It += Pt[Ot] * Rt[Ot][Ft];
                        _ += 2, s[p] = Ct, s[p + 1] = It, p += a
                    }
                }
            }, b.prototype._$HT = function(t, e) {
                this.x = t, this.y = e
            }, b.prototype._$HT = function(t) {
                this.x = t.x, this.y = t.y
            }, S._$ur = -2, S._$ES = 500, S._$wb = 2, S._$8S = 3, S._$52 = S._$ES, S._$R2 = S._$ES, S._$or = function() {
                return S._$52
            }, S._$Pr = function() {
                return S._$R2
            }, S.prototype.convertClipIDForV2_11 = function(t) {
                var e = [];
                return null == t ? null : 0 == t.length ? null : /,/.test(t) ? e = t.id.split(",") : (e.push(t.id), e)
            }, S.prototype._$F0 = function(t) {
                this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(), this._$mS = t._$Tb(), t.getFormatVersion() >= U._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb)
            }, S.prototype.getClipIDList = function() {
                return this.clipIDList
            }, S.prototype.init = function(t) {}, S.prototype._$Nr = function(t, e) {
                if (e._$IS[0] = !1, e._$Us = T._$Z2(t, this._$GS, e._$IS, this._$Lb), at._$Zs);
                else if (e._$IS[0]) return;
                e._$7s = T._$br(t, this._$GS, e._$IS, this._$mS)
            }, S.prototype._$2b = function(t, e) {}, S.prototype.getDrawDataID = function() {
                return this._$gP
            }, S.prototype._$j2 = function(t) {
                this._$gP = t
            }, S.prototype.getOpacity = function(t, e) {
                return e._$7s
            }, S.prototype._$zS = function(t, e) {
                return e._$Us
            }, S.prototype._$MS = function(t) {
                for (var e = t.length - 1; e >= 0; --e) {
                    var i = t[e];
                    i < S._$52 ? S._$52 = i : i > S._$R2 && (S._$R2 = i)
                }
            }, S.prototype.getTargetBaseDataID = function() {
                return this._$dr
            }, S.prototype._$gs = function(t) {
                this._$dr = t
            }, S.prototype._$32 = function() {
                return null != this._$dr && this._$dr != vt._$2o()
            }, S.prototype.preDraw = function(t, e, i) {}, S.prototype.draw = function(t, e, i) {}, S.prototype.getType = function() {}, S.prototype._$B2 = function(t, e, i) {}, E._$ps = 32, E.CLIPPING_PROCESS_NONE = 0, E.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, E.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, E.CLIPPING_PROCESS_DRAW = 3, E.CLIPPING_PROCESS_CLEAR_ALPHA = 4, E.prototype.setChannelFlagAsColor = function(t, e) {
                this.CHANNEL_COLORS[t] = e
            }, E.prototype.getChannelFlagAsColor = function(t) {
                return this.CHANNEL_COLORS[t]
            }, E.prototype._$ZT = function() {}, E.prototype._$Uo = function(t, e, i, r, n, s, o) {}, E.prototype._$Rs = function() {
                return -1
            }, E.prototype._$Ds = function(t) {}, E.prototype.setBaseColor = function(t, e, i, r) {
                t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._$lT = t, this._$C0 = e, this._$tT = i, this._$WL = r
            }, E.prototype._$WP = function(t) {
                this.culling = t
            }, E.prototype.setMatrix = function(t) {
                for (var e = 0; e < 16; e++) this.matrix4x4[e] = t[e]
            }, E.prototype._$IT = function() {
                return this.matrix4x4
            }, E.prototype.setPremultipliedAlpha = function(t) {
                this.premultipliedAlpha = t
            }, E.prototype.isPremultipliedAlpha = function() {
                return this.premultipliedAlpha
            }, E.prototype.setAnisotropy = function(t) {
                this.anisotropy = t
            }, E.prototype.getAnisotropy = function() {
                return this.anisotropy
            }, E.prototype.getClippingProcess = function() {
                return this.clippingProcess
            }, E.prototype.setClippingProcess = function(t) {
                this.clippingProcess = t
            }, E.prototype.setClipBufPre_clipContextForMask = function(t) {
                this.clipBufPre_clipContextMask = t
            }, E.prototype.getClipBufPre_clipContextMask = function() {
                return this.clipBufPre_clipContextMask
            }, E.prototype.setClipBufPre_clipContextForDraw = function(t) {
                this.clipBufPre_clipContextDraw = t
            }, E.prototype.getClipBufPre_clipContextDraw = function() {
                return this.clipBufPre_clipContextDraw
            }, P._$ur = -2, P._$c2 = 1, P._$_b = 2, P.prototype._$F0 = function(t) {
                this._$kP = t._$nP(), this._$dr = t._$nP()
            }, P.prototype.readV2_opacity = function(t) {
                t.getFormatVersion() >= U.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb())
            }, P.prototype.init = function(t) {}, P.prototype._$Nr = function(t, e) {}, P.prototype.interpolateOpacity = function(t, e, i, r) {
                null == this._$mS ? i.setInterpolatedOpacity(1) : i.setInterpolatedOpacity(T._$br(t, e, r, this._$mS))
            }, P.prototype._$2b = function(t, e) {}, P.prototype._$nb = function(t, e, i, r, n, s, o) {}, P.prototype.getType = function() {}, P.prototype._$gs = function(t) {
                this._$dr = t
            }, P.prototype._$a2 = function(t) {
                this._$kP = t
            }, P.prototype.getTargetBaseDataID = function() {
                return this._$dr
            }, P.prototype.getBaseDataID = function() {
                return this._$kP
            }, P.prototype._$32 = function() {
                return null != this._$dr && this._$dr != vt._$2o()
            }, M._$W2 = 0, M._$CS = M._$W2, M._$Mo = function() {
                return !0
            }, M._$XP = function(t) {
                try {
                    for (var e = getTimeMSec(); getTimeMSec() - e < t;);
                } catch (i) {
                    i._$Rb()
                }
            }, M.getUserTimeMSec = function() {
                return M._$CS == M._$W2 ? M.getSystemTimeMSec() : M._$CS
            }, M.setUserTimeMSec = function(t) {
                M._$CS = t
            }, M.updateUserTimeMSec = function() {
                return M._$CS = M.getSystemTimeMSec()
            }, M.getTimeMSec = function() {
                return (new Date).getTime()
            }, M.getSystemTimeMSec = function() {
                return (new Date).getTime()
            }, M._$Q = function(t) {}, M._$jT = function(t, e, i, r, n) {
                for (var s = 0; s < n; s++) i[r + s] = t[e + s]
            }, A._$ds = -2, A.prototype._$F0 = function(t) {
                this._$wL = t._$nP(), this._$VP = t._$6L(), this._$GP = t._$nP()
            }, A.prototype.getParamIndex = function(t) {
                return this._$2r != t && (this._$8o = A._$ds), this._$8o
            }, A.prototype._$Pb = function(t, e) {
                this._$8o = t, this._$2r = e
            }, A.prototype.getParamID = function() {
                return this._$wL
            }, A.prototype._$yP = function(t) {
                this._$wL = t
            }, A.prototype._$N2 = function() {
                return this._$VP
            }, A.prototype._$d2 = function() {
                return this._$GP
            }, A.prototype._$t2 = function(t, e) {
                this._$VP = t, this._$GP = e
            }, A.prototype._$Lr = function() {
                return this._$O2
            }, A.prototype._$wr = function(t) {
                this._$O2 = t
            }, A.prototype._$SL = function() {
                return this._$ri
            }, A.prototype._$AL = function(t) {
                this._$ri = t
            }, L.startsWith = function(t, e, i) {
                var r = e + i.length;
                if (r >= t.length) return !1;
                for (var n = e; n < r; n++)
                    if (L.getChar(t, n) != i.charAt(n - e)) return !1;
                return !0
            }, L.getChar = function(t, e) {
                return String.fromCharCode(t.getUint8(e))
            }, L.createString = function(t, e, i) {
                for (var r = new ArrayBuffer(2 * i), n = new Uint16Array(r), s = 0; s < i; s++) n[s] = t.getUint8(e + s);
                return String.fromCharCode.apply(null, n)
            }, L._$LS = function(t, e, i, r) {
                t instanceof ArrayBuffer && (t = new DataView(t));
                var n = i,
                    s = !1,
                    o = !1,
                    a = 0,
                    h = L.getChar(t, n);
                "-" == h && (s = !0, n++);
                for (var l = !1; n < e; n++) {
                    switch (h = L.getChar(t, n)) {
                        case "0":
                            a = 10 * a;
                            break;
                        case "1":
                            a = 10 * a + 1;
                            break;
                        case "2":
                            a = 10 * a + 2;
                            break;
                        case "3":
                            a = 10 * a + 3;
                            break;
                        case "4":
                            a = 10 * a + 4;
                            break;
                        case "5":
                            a = 10 * a + 5;
                            break;
                        case "6":
                            a = 10 * a + 6;
                            break;
                        case "7":
                            a = 10 * a + 7;
                            break;
                        case "8":
                            a = 10 * a + 8;
                            break;
                        case "9":
                            a = 10 * a + 9;
                            break;
                        case ".":
                            o = !0, n++, l = !0;
                            break;
                        default:
                            l = !0
                    }
                    if (l) break
                }
                if (o)
                    for (var u = .1, c = !1; n < e; n++) {
                        switch (h = L.getChar(t, n)) {
                            case "0":
                                break;
                            case "1":
                                a += 1 * u;
                                break;
                            case "2":
                                a += 2 * u;
                                break;
                            case "3":
                                a += 3 * u;
                                break;
                            case "4":
                                a += 4 * u;
                                break;
                            case "5":
                                a += 5 * u;
                                break;
                            case "6":
                                a += 6 * u;
                                break;
                            case "7":
                                a += 7 * u;
                                break;
                            case "8":
                                a += 8 * u;
                                break;
                            case "9":
                                a += 9 * u;
                                break;
                            default:
                                c = !0
                        }
                        if (u *= .1, c) break
                    }
                return s && (a = -a), r[0] = n, a
            }, D.prototype._$zP = function() {
                this._$Ob = new Array
            }, D.prototype._$F0 = function(t) {
                this._$Ob = t._$nP()
            }, D.prototype._$Ur = function(t) {
                if (t._$WS()) return !0;
                for (var e = t._$v2(), i = this._$Ob.length - 1; i >= 0; --i) {
                    var r = this._$Ob[i].getParamIndex(e);
                    if (r == A._$ds && (r = t.getParamIndex(this._$Ob[i].getParamID())), t._$Xb(r)) return !0
                }
                return !1
            }, D.prototype._$Q2 = function(t, e) {
                for (var i, r, n = this._$Ob.length, s = t._$v2(), o = 0, a = 0; a < n; a++) {
                    var h = this._$Ob[a];
                    if (i = h.getParamIndex(s), i == A._$ds && (i = t.getParamIndex(h.getParamID()), h._$Pb(i, s)), i < 0) throw new Exception("err 23242 : " + h.getParamID());
                    var l = i < 0 ? 0 : t.getParamFloat(i);
                    r = h._$N2();
                    var u, c, p = h._$d2(),
                        d = -1,
                        f = 0;
                    if (r < 1);
                    else if (1 == r) u = p[0], u - B._$J < l && l < u + B._$J ? (d = 0, f = 0) : (d = 0, e[0] = !0);
                    else if (u = p[0], l < u - B._$J) d = 0, e[0] = !0;
                    else if (l < u + B._$J) d = 0;
                    else {
                        for (var _ = !1, g = 1; g < r; ++g) {
                            if (c = p[g], l < c + B._$J) {
                                c - B._$J < l ? d = g : (d = g - 1, f = (l - u) / (c - u), o++), _ = !0;
                                break
                            }
                            u = c
                        }
                        _ || (d = r - 1, f = 0, e[0] = !0)
                    }
                    h._$wr(d), h._$AL(f)
                }
                return o
            }, D.prototype._$zr = function(t, e, i) {
                var r = 1 << i;
                r + 1 > B._$Qb && console.log("err 23245\n");
                for (var n = this._$Ob.length, s = 1, o = 1, a = 0, h = 0; h < r; ++h) t[h] = 0;
                for (var l = 0; l < n; ++l) {
                    var u = this._$Ob[l];
                    if (0 == u._$SL()) {
                        var c = u._$Lr() * s;
                        if (c < 0 && at._$3T) throw new Exception("err 23246");
                        for (var h = 0; h < r; ++h) t[h] += c
                    } else {
                        for (var c = s * u._$Lr(), p = s * (u._$Lr() + 1), h = 0; h < r; ++h) t[h] += (h / o | 0) % 2 == 0 ? c : p;
                        e[a++] = u._$SL(), o *= 2
                    }
                    s *= u._$N2()
                }
                t[r] = 65535, e[a] = -1
            }, D.prototype._$h2 = function(t, e, i) {
                for (var r = new Float32Array(e), n = 0; n < e; ++n) r[n] = i[n];
                var s = new A;
                s._$yP(t), s._$t2(e, r), this._$Ob.push(s)
            }, D.prototype._$J2 = function(t) {
                for (var e = t, i = this._$Ob.length, r = 0; r < i; ++r) {
                    var n = this._$Ob[r],
                        s = n._$N2(),
                        o = e % n._$N2(),
                        a = n._$d2()[o];
                    console.log("%s[%d]=%7.2f / ", n.getParamID(), o, a), e /= s
                }
                console.log("\n")
            }, D.prototype.getParamCount = function() {
                return this._$Ob.length
            }, D.prototype._$zs = function() {
                return this._$Ob
            }, R.prototype.identity = function() {
                for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0
            }, R.prototype.getArray = function() {
                return this.m
            }, R.prototype.getCopyMatrix = function() {
                return new Float32Array(this.m)
            }, R.prototype.setMatrix = function(t) {
                if (null != t && 16 == t.length)
                    for (var e = 0; e < 16; e++) this.m[e] = t[e]
            }, R.prototype.mult = function(t, e, i) {
                return null == e ? null : (this == e ? this.mult_safe(this.m, t.m, e.m, i) : this.mult_fast(this.m, t.m, e.m, i), e)
            }, R.prototype.mult_safe = function(t, e, i, r) {
                if (t == i) {
                    var n = new Array(16);
                    this.mult_fast(t, e, n, r);
                    for (var s = 15; s >= 0; --s) i[s] = n[s]
                } else this.mult_fast(t, e, i, r)
            }, R.prototype.mult_fast = function(t, e, i, r) {
                r ? (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2], i[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6], i[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10], i[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12], i[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6], i[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13], i[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6], i[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14], i[3] = i[7] = i[11] = 0, i[15] = 1) : (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], i[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], i[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], i[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], i[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], i[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], i[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], i[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], i[3] = t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], i[7] = t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], i[11] = t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], i[15] = t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15])
            }, R.prototype.translate = function(t, e, i) {
                this.m[12] = this.m[0] * t + this.m[4] * e + this.m[8] * i + this.m[12], this.m[13] = this.m[1] * t + this.m[5] * e + this.m[9] * i + this.m[13], this.m[14] = this.m[2] * t + this.m[6] * e + this.m[10] * i + this.m[14], this.m[15] = this.m[3] * t + this.m[7] * e + this.m[11] * i + this.m[15]
            }, R.prototype.scale = function(t, e, i) {
                this.m[0] *= t, this.m[4] *= e, this.m[8] *= i, this.m[1] *= t, this.m[5] *= e, this.m[9] *= i, this.m[2] *= t, this.m[6] *= e, this.m[10] *= i, this.m[3] *= t, this.m[7] *= e, this.m[11] *= i
            }, R.prototype.rotateX = function(t) {
                var e = bt.fcos(t),
                    i = bt._$9(t),
                    r = this.m[4];
                this.m[4] = r * e + this.m[8] * i, this.m[8] = r * -i + this.m[8] * e, r = this.m[5], this.m[5] = r * e + this.m[9] * i, this.m[9] = r * -i + this.m[9] * e, r = this.m[6], this.m[6] = r * e + this.m[10] * i, this.m[10] = r * -i + this.m[10] * e, r = this.m[7], this.m[7] = r * e + this.m[11] * i, this.m[11] = r * -i + this.m[11] * e
            }, R.prototype.rotateY = function(t) {
                var e = bt.fcos(t),
                    i = bt._$9(t),
                    r = this.m[0];
                this.m[0] = r * e + this.m[8] * -i, this.m[8] = r * i + this.m[8] * e, r = this.m[1], this.m[1] = r * e + this.m[9] * -i, this.m[9] = r * i + this.m[9] * e, r = m[2], this.m[2] = r * e + this.m[10] * -i, this.m[10] = r * i + this.m[10] * e, r = m[3], this.m[3] = r * e + this.m[11] * -i, this.m[11] = r * i + this.m[11] * e
            }, R.prototype.rotateZ = function(t) {
                var e = bt.fcos(t),
                    i = bt._$9(t),
                    r = this.m[0];
                this.m[0] = r * e + this.m[4] * i, this.m[4] = r * -i + this.m[4] * e, r = this.m[1], this.m[1] = r * e + this.m[5] * i, this.m[5] = r * -i + this.m[5] * e, r = this.m[2], this.m[2] = r * e + this.m[6] * i, this.m[6] = r * -i + this.m[6] * e, r = this.m[3], this.m[3] = r * e + this.m[7] * i, this.m[7] = r * -i + this.m[7] * e
            }, O.prototype = new et, O._$tP = new Object, O._$27 = function() {
                O._$tP.clear()
            }, O.getID = function(t) {
                var e = O._$tP[t];
                return null == e && (e = new O(t), O._$tP[t] = e), e
            }, O.prototype._$3s = function() {
                return new O
            }, C._$kS = -1, C._$pS = 0, C._$hb = 1, C.STATE_IDENTITY = 0, C._$gb = 1, C._$fo = 2, C._$go = 4, C.prototype.transform = function(t, e, i) {
                var r, n, s, o, a, h, l = 0,
                    u = 0;
                switch (this._$hi) {
                    default: return;
                    case C._$go | C._$fo | C._$gb:
                            for (r = this._$7, n = this._$H, s = this._$k, o = this._$f, a = this._$g, h = this._$w; --i >= 0;) {
                            var c = t[l++],
                                p = t[l++];
                            e[u++] = r * c + n * p + s, e[u++] = o * c + a * p + h
                        }
                        return;
                    case C._$go | C._$fo:
                            for (r = this._$7, n = this._$H, o = this._$f, a = this._$g; --i >= 0;) {
                            var c = t[l++],
                                p = t[l++];
                            e[u++] = r * c + n * p, e[u++] = o * c + a * p
                        }
                        return;
                    case C._$go | C._$gb:
                            for (n = this._$H, s = this._$k, o = this._$f, h = this._$w; --i >= 0;) {
                            var c = t[l++];
                            e[u++] = n * t[l++] + s, e[u++] = o * c + h
                        }
                        return;
                    case C._$go:
                            for (n = this._$H, o = this._$f; --i >= 0;) {
                            var c = t[l++];
                            e[u++] = n * t[l++], e[u++] = o * c
                        }
                        return;
                    case C._$fo | C._$gb:
                            for (r = this._$7, s = this._$k, a = this._$g, h = this._$w; --i >= 0;) e[u++] = r * t[l++] + s, e[u++] = a * t[l++] + h;
                        return;
                    case C._$fo:
                            for (r = this._$7, a = this._$g; --i >= 0;) e[u++] = r * t[l++], e[u++] = a * t[l++];
                        return;
                    case C._$gb:
                            for (s = this._$k, h = this._$w; --i >= 0;) e[u++] = t[l++] + s, e[u++] = t[l++] + h;
                        return;
                    case C.STATE_IDENTITY:
                            return void(t == e && l == u || M._$jT(t, l, e, u, 2 * i))
                }
            }, C.prototype.update = function() {
                0 == this._$H && 0 == this._$f ? 1 == this._$7 && 1 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = C.STATE_IDENTITY, this._$Z = C._$pS) : (this._$hi = C._$gb, this._$Z = C._$hb) : 0 == this._$k && 0 == this._$w ? (this._$hi = C._$fo, this._$Z = C._$kS) : (this._$hi = C._$fo | C._$gb, this._$Z = C._$kS) : 0 == this._$7 && 0 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = C._$go, this._$Z = C._$kS) : (this._$hi = C._$go | C._$gb, this._$Z = C._$kS) : 0 == this._$k && 0 == this._$w ? (this._$hi = C._$go | C._$fo, this._$Z = C._$kS) : (this._$hi = C._$go | C._$fo | C._$gb, this._$Z = C._$kS)
            }, C.prototype._$RT = function(t) {
                this._$IT(t);
                var e = t[0],
                    i = t[2],
                    r = t[1],
                    n = t[3],
                    s = Math.sqrt(e * e + r * r),
                    o = e * n - i * r;
                0 == s ? at._$so && console.log("affine._$RT() / rt==0") : (t[0] = s, t[1] = o / s, t[2] = (r * n + e * i) / o, t[3] = Math.atan2(r, e))
            }, C.prototype._$ho = function(t, e, i, r) {
                var n = new Float32Array(6),
                    s = new Float32Array(6);
                t._$RT(n), e._$RT(s);
                var o = new Float32Array(6);
                o[0] = n[0] + (s[0] - n[0]) * i, o[1] = n[1] + (s[1] - n[1]) * i, o[2] = n[2] + (s[2] - n[2]) * i, o[3] = n[3] + (s[3] - n[3]) * i, o[4] = n[4] + (s[4] - n[4]) * i, o[5] = n[5] + (s[5] - n[5]) * i, r._$CT(o)
            }, C.prototype._$CT = function(t) {
                var e = Math.cos(t[3]),
                    i = Math.sin(t[3]);
                this._$7 = t[0] * e, this._$f = t[0] * i, this._$H = t[1] * (t[2] * e - i), this._$g = t[1] * (t[2] * i + e), this._$k = t[4], this._$w = t[5], this.update()
            }, C.prototype._$IT = function(t) {
                t[0] = this._$7, t[1] = this._$f, t[2] = this._$H, t[3] = this._$g, t[4] = this._$k, t[5] = this._$w
            }, I.prototype = new s, I._$cs = "VISIBLE:", I._$ar = "LAYOUT:", I._$Co = 0, I._$D2 = [], I._$1T = 1, I.loadMotion = function(t) {
                var e = new I,
                    i = [0],
                    r = t.length;
                e._$yT = 0;
                for (var n = 0; n < r; ++n) {
                    var s = 255 & t[n];
                    if ("\n" != s && "\r" != s)
                        if ("#" != s)
                            if ("$" != s) {
                                if ("a" <= s && s <= "z" || "A" <= s && s <= "Z" || "_" == s) {
                                    for (var o = n, a = -1; n < r && (s = 255 & t[n], "\r" != s && "\n" != s); ++n)
                                        if ("=" == s) {
                                            a = n;
                                            break
                                        }
                                    if (a >= 0) {
                                        var h = new N;
                                        L.startsWith(t, o, I._$cs) ? (h._$RP = N._$hs, h._$4P = new String(t, o, a - o)) : L.startsWith(t, o, I._$ar) ? (h._$4P = new String(t, o + 7, a - o - 7), L.startsWith(t, o + 7, "ANCHOR_X") ? h._$RP = N._$xs : L.startsWith(t, o + 7, "ANCHOR_Y") ? h._$RP = N._$us : L.startsWith(t, o + 7, "SCALE_X") ? h._$RP = N._$qs : L.startsWith(t, o + 7, "SCALE_Y") ? h._$RP = N._$Ys : L.startsWith(t, o + 7, "X") ? h._$RP = N._$ws : L.startsWith(t, o + 7, "Y") && (h._$RP = N._$Ns)) : (h._$RP = N._$Fr, h._$4P = new String(t, o, a - o)), e.motions.push(h);
                                        var l = 0;
                                        for (I._$D2.clear(), n = a + 1; n < r && (s = 255 & t[n], "\r" != s && "\n" != s); ++n)
                                            if ("," != s && " " != s && "\t" != s) {
                                                var u = L._$LS(t, r, n, i);
                                                if (i[0] > 0) {
                                                    I._$D2.push(u), l++;
                                                    var c = i[0];
                                                    if (c < n) {
                                                        console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                                        break
                                                    }
                                                    n = c
                                                }
                                            }
                                        h._$I0 = I._$D2._$BL(), l > e._$yT && (e._$yT = l)
                                    }
                                }
                            } else {
                                for (var o = n, a = -1; n < r && (s = 255 & t[n], "\r" != s && "\n" != s); ++n)
                                    if ("=" == s) {
                                        a = n;
                                        break
                                    }
                                var p = !1;
                                if (a >= 0)
                                    for (a == o + 4 && "f" == t[o + 1] && "p" == t[o + 2] && "s" == t[o + 3] && (p = !0), n = a + 1; n < r && (s = 255 & t[n], "\r" != s && "\n" != s); ++n)
                                        if ("," != s && " " != s && "\t" != s) {
                                            var u = L._$LS(t, r, n, i);
                                            i[0] > 0 && p && 5 < u && u < 121 && (e._$D0 = u), n = i[0]
                                        }
                                for (; n < r && ("\n" != t[n] && "\r" != t[n]); ++n);
                            }
                    else
                        for (; n < r && ("\n" != t[n] && "\r" != t[n]); ++n);
                }
                return e._$AS = 1e3 * e._$yT / e._$D0 | 0, e
            }, I.prototype.getDurationMSec = function() {
                return this._$AS
            }, I.prototype.dump = function() {
                for (var t = 0; t < this.motions.length; t++) {
                    var e = this.motions[t];
                    console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
                    for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
                    console.log("\n")
                }
            }, I.prototype.updateParamExe = function(t, e, i, r) {
                for (var n = e - r._$z2, s = n * this._$D0 / 1e3, o = 0 | s, a = s - o, h = 0; h < this.motions.length; h++) {
                    var l = this.motions[h],
                        u = l._$I0.length,
                        c = l._$4P;
                    if (l._$RP == N._$hs) {
                        var p = l._$I0[o >= u ? u - 1 : o];
                        t.setParamFloat(c, p)
                    } else if (N._$ws <= l._$RP && l._$RP <= N._$Ys);
                    else {
                        var d = t.getParamFloat(c),
                            f = l._$I0[o >= u ? u - 1 : o],
                            _ = l._$I0[o + 1 >= u ? u - 1 : o + 1],
                            g = f + (_ - f) * a,
                            v = d + (g - d) * i;
                        t.setParamFloat(c, v)
                    }
                }
                o >= this._$yT && (this._$E ? (r._$z2 = e, this.loopFadeIn && (r._$bs = e)) : r._$9L = !0)
            }, I.prototype._$r0 = function() {
                return this._$E
            }, I.prototype._$aL = function(t) {
                this._$E = t
            }, I.prototype.isLoopFadeIn = function() {
                return this.loopFadeIn
            }, I.prototype.setLoopFadeIn = function(t) {
                this.loopFadeIn = t
            }, F.prototype.clear = function() {
                this.size = 0
            }, F.prototype.add = function(t) {
                if (this._$P.length <= this.size) {
                    var e = new Float32Array(2 * this.size);
                    M._$jT(this._$P, 0, e, 0, this.size), this._$P = e
                }
                this._$P[this.size++] = t
            }, F.prototype._$BL = function() {
                var t = new Float32Array(this.size);
                return M._$jT(this._$P, 0, t, 0, this.size), t
            }, N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105, B._$Ms = 1, B._$Qs = 2, B._$i2 = 0, B._$No = 2, B._$do = B._$Ms, B._$Ls = !0, B._$1r = 5, B._$Qb = 65, B._$J = 1e-4, B._$FT = .001, B._$Ss = 3, U._$o7 = 6, U._$S7 = 7, U._$s7 = 8, U._$77 = 9, U.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, U.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11, U._$T7 = U.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, U._$Is = -2004318072, U._$h0 = 0, U._$4L = 23, U._$7P = 33, U._$uT = function(t) {
                console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t)
            }, U._$9o = function(t) {
                if (t < 40) return U._$uT(t), null;
                if (t < 50) return U._$uT(t), null;
                if (t < 60) return U._$uT(t), null;
                if (t < 100) switch (t) {
                    case 65:
                        return new J;
                    case 66:
                        return new D;
                    case 67:
                        return new A;
                    case 68:
                        return new Y;
                    case 69:
                        return new x;
                    case 70:
                        return new ut;
                    default:
                        return U._$uT(t), null
                } else if (t < 150) switch (t) {
                    case 131:
                        return new st;
                    case 133:
                        return new Q;
                    case 136:
                        return new p;
                    case 137:
                        return new rt;
                    case 142:
                        return new z
                }
                return U._$uT(t), null
            }, k._$HP = 0, k._$_0 = !0, k._$V2 = -1, k._$W0 = -1, k._$jr = !1, k._$ZS = !0, k._$tr = -1e6, k._$lr = 1e6, k._$is = 32, k._$e = !1, k.prototype.getDrawDataIndex = function(t) {
                for (var e = this._$aS.length - 1; e >= 0; --e)
                    if (null != this._$aS[e] && this._$aS[e].getDrawDataID() == t) return e;
                return -1
            }, k.prototype.getDrawData = function(t) {
                if (t instanceof O) {
                    if (null == this._$Bo) {
                        this._$Bo = new Object;
                        for (var e = this._$aS.length, i = 0; i < e; i++) {
                            var r = this._$aS[i],
                                n = r.getDrawDataID();
                            null != n && (this._$Bo[n] = r)
                        }
                    }
                    return this._$Bo[id]
                }
                return t < this._$aS.length ? this._$aS[t] : null
            }, k.prototype.release = function() {
                this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), null != this._$Bo && this._$Bo.clear(), this._$db.clear(), this._$8b.clear(), this._$Hr.clear()
            }, k.prototype.init = function() {
                this._$co++, this._$F2.length > 0 && this.release();
                for (var t = this._$Ri.getModelImpl(), i = t._$Xr(), r = i.length, n = new Array, s = new Array, o = 0; o < r; ++o) {
                    var a = i[o];
                    this._$F2.push(a), this._$Hr.push(a.init(this));
                    for (var h = a.getBaseData(), l = h.length, u = 0; u < l; ++u) n.push(h[u]);
                    for (var u = 0; u < l; ++u) {
                        var c = h[u].init(this);
                        c._$l2(o), s.push(c)
                    }
                    for (var p = a.getDrawData(), d = p.length, u = 0; u < d; ++u) {
                        var f = p[u],
                            _ = f.init(this);
                        _._$IP = o, this._$aS.push(f), this._$8b.push(_)
                    }
                }
                for (var g = n.length, v = vt._$2o();;) {
                    for (var y = !1, o = 0; o < g; ++o) {
                        var m = n[o];
                        if (null != m) {
                            var x = m.getTargetBaseDataID();
                            (null == x || x == v || this.getBaseDataIndex(x) >= 0) && (this._$3S.push(m), this._$db.push(s[o]), n[o] = null, y = !0)
                        }
                    }
                    if (!y) break
                }
                var $ = t._$E2();
                if (null != $) {
                    var T = $._$1s();
                    if (null != T)
                        for (var b = T.length, o = 0; o < b; ++o) {
                            var S = T[o];
                            null != S && this._$02(S.getParamID(), S.getDefaultValue(), S.getMinValue(), S.getMaxValue())
                        }
                }
                this.clipManager = new e(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = !0
            }, k.prototype.update = function() {
                k._$e && o.start("_$zL");
                for (var t = this._$_2.length, e = 0; e < t; e++) this._$_2[e] != this._$vr[e] && (this._$Js[e] = k._$ZS, this._$vr[e] = this._$_2[e]);
                var i = !1,
                    r = this._$3S.length,
                    n = this._$aS.length,
                    s = V._$or(),
                    a = V._$Pr(),
                    h = a - s + 1;
                (null == this._$Ws || this._$Ws.length < h) && (this._$Ws = new Int16Array(h), this._$Vs = new Int16Array(h));
                for (var e = 0; e < h; e++) this._$Ws[e] = k._$V2, this._$Vs[e] = k._$V2;
                (null == this._$Er || this._$Er.length < n) && (this._$Er = new Int16Array(n));
                for (var e = 0; e < n; e++) this._$Er[e] = k._$W0;
                k._$e && o.dump("_$zL"), k._$e && o.start("_$UL");
                for (var l = null, u = 0; u < r; ++u) {
                    var c = this._$3S[u],
                        p = this._$db[u];
                    try {
                        c._$Nr(this, p), c._$2b(this, p)
                    } catch (d) {
                        null == l && (l = d)
                    }
                }
                null != l && k._$_0 && o._$Rb(l), k._$e && o.dump("_$UL"), k._$e && o.start("_$DL");
                for (var f = null, _ = 0; _ < n; ++_) {
                    var g = this._$aS[_],
                        v = this._$8b[_];
                    try {
                        if (g._$Nr(this, v), v._$u2()) continue;
                        g._$2b(this, v);
                        var y, m = Math.floor(g._$zS(this, v) - s);
                        try {
                            y = this._$Vs[m]
                        } catch (d) {
                            console.log("_$li :: %s / %s \t\t\t\t@@_$fS\n", d.toString(), g.getDrawDataID().toString()), m = Math.floor(g._$zS(this, v) - s);
                            continue
                        }
                        y == k._$V2 ? this._$Ws[m] = _ : this._$Er[y] = _, this._$Vs[m] = _
                    } catch (d) {
                        null == f && (f = d, at._$sT(at._$H7))
                    }
                }
                null != f && k._$_0 && o._$Rb(f), k._$e && o.dump("_$DL"), k._$e && o.start("_$eL");
                for (var e = this._$Js.length - 1; e >= 0; e--) this._$Js[e] = k._$jr;
                return this._$QT = !1, k._$e && o.dump("_$eL"), i
            }, k.prototype.preDraw = function(t) {
                null != this.clipManager && (t._$ZT(), this.clipManager.setupClip(this, t))
            }, k.prototype.draw = function(t) {
                if (null == this._$Ws) return void o._$li("call _$Ri.update() before _$Ri.draw() ");
                var e = this._$Ws.length;
                t._$ZT();
                for (var i = 0; i < e; ++i) {
                    var r = this._$Ws[i];
                    if (r != k._$V2)
                        for (;;) {
                            var n = this._$aS[r],
                                s = this._$8b[r];
                            if (s._$yo()) {
                                var a = s._$IP,
                                    h = this._$Hr[a];
                                s._$VS = h.getPartsOpacity(), n.draw(t, this, s)
                            }
                            var l = this._$Er[r];
                            if (l <= r || l == k._$W0) break;
                            r = l
                        }
                }
            }, k.prototype.getParamIndex = function(t) {
                for (var e = this._$pb.length - 1; e >= 0; --e)
                    if (this._$pb[e] == t) return e;
                return this._$02(t, 0, k._$tr, k._$lr)
            }, k.prototype._$BS = function(t) {
                return this.getBaseDataIndex(t)
            }, k.prototype.getBaseDataIndex = function(t) {
                for (var e = this._$3S.length - 1; e >= 0; --e)
                    if (null != this._$3S[e] && this._$3S[e].getBaseDataID() == t) return e;
                return -1
            }, k.prototype._$UT = function(t, e) {
                var i = new Float32Array(e);
                return M._$jT(t, 0, i, 0, t.length), i
            }, k.prototype._$02 = function(t, e, i, r) {
                if (this._$qo >= this._$pb.length) {
                    var n = this._$pb.length,
                        s = new Array(2 * n);
                    M._$jT(this._$pb, 0, s, 0, n), this._$pb = s, this._$_2 = this._$UT(this._$_2, 2 * n), this._$vr = this._$UT(this._$vr, 2 * n), this._$Rr = this._$UT(this._$Rr, 2 * n), this._$Or = this._$UT(this._$Or, 2 * n);
                    var o = new Array;
                    M._$jT(this._$Js, 0, o, 0, n), this._$Js = o
                }
                return this._$pb[this._$qo] = t, this._$_2[this._$qo] = e, this._$vr[this._$qo] = e, this._$Rr[this._$qo] = i, this._$Or[this._$qo] = r, this._$Js[this._$qo] = k._$ZS, this._$qo++
            }, k.prototype._$Zo = function(t, e) {
                this._$3S[t] = e
            }, k.prototype.setParamFloat = function(t, e) {
                e < this._$Rr[t] && (e = this._$Rr[t]), e > this._$Or[t] && (e = this._$Or[t]), this._$_2[t] = e
            }, k.prototype.loadParam = function() {
                var t = this._$_2.length;
                t > this._$fs.length && (t = this._$fs.length), M._$jT(this._$fs, 0, this._$_2, 0, t)
            }, k.prototype.saveParam = function() {
                var t = this._$_2.length;
                t > this._$fs.length && (this._$fs = new Float32Array(t)), M._$jT(this._$_2, 0, this._$fs, 0, t)
            }, k.prototype._$v2 = function() {
                return this._$co
            }, k.prototype._$WS = function() {
                return this._$QT
            }, k.prototype._$Xb = function(t) {
                return this._$Js[t] == k._$ZS
            }, k.prototype._$vs = function() {
                return this._$Es
            }, k.prototype._$Tr = function() {
                return this._$ZP
            }, k.prototype.getBaseData = function(t) {
                return this._$3S[t]
            }, k.prototype.getParamFloat = function(t) {
                return this._$_2[t]
            }, k.prototype.getParamMax = function(t) {
                return this._$Or[t]
            }, k.prototype.getParamMin = function(t) {
                return this._$Rr[t]
            }, k.prototype.setPartsOpacity = function(t, e) {
                var i = this._$Hr[t];
                i.setPartsOpacity(e)
            }, k.prototype.getPartsOpacity = function(t) {
                var e = this._$Hr[t];
                return e.getPartsOpacity()
            }, k.prototype.getPartsDataIndex = function(t) {
                for (var e = this._$F2.length - 1; e >= 0; --e)
                    if (null != this._$F2[e] && this._$F2[e]._$p2() == t) return e;
                return -1
            }, k.prototype._$q2 = function(t) {
                return this._$db[t]
            }, k.prototype._$C2 = function(t) {
                return this._$8b[t]
            }, k.prototype._$Bb = function(t) {
                return this._$Hr[t]
            }, k.prototype._$5s = function(t, e) {
                for (var i = this._$Ws.length, r = t, n = 0; n < i; ++n) {
                    var s = this._$Ws[n];
                    if (s != k._$V2)
                        for (;;) {
                            var o = this._$8b[s];
                            o._$yo() && (o._$GT()._$B2(this, o, r), r += e);
                            var a = this._$Er[s];
                            if (a <= s || a == k._$W0) break;
                            s = a
                        }
                }
            }, k.prototype.setDrawParam = function(t) {
                this.dp_webgl = t
            }, k.prototype.getDrawParam = function() {
                return this.dp_webgl
            }, G._$0T = function(t) {
                return G._$0T(new _$5(t))
            }, G._$0T = function(t) {
                if (!t.exists()) throw new _$ls(t._$3b());
                for (var e, i = t.length(), r = new Int8Array(i), n = new _$Xs(new _$kb(t), 8192), s = 0;
                    (e = n.read(r, s, i - s)) > 0;) s += e;
                return r
            }, G._$C = function(t) {
                var e = null,
                    i = null;
                try {
                    e = t instanceof Array ? t : new _$Xs(t, 8192), i = new _$js;
                    for (var r, n = 1e3, s = new Int8Array(n);
                        (r = e.read(s)) > 0;) i.write(s, 0, r);
                    return i._$TS()
                } finally {
                    null != t && t.close(), null != i && (i.flush(), i.close())
                }
            }, j.prototype._$T2 = function() {
                var t = M.getUserTimeMSec(),
                    e = Math._$10();
                return t + e * (2 * this._$Br - 1)
            }, j.prototype._$uo = function(t) {
                this._$Br = t
            }, j.prototype._$QS = function(t, e, i) {
                this._$Dr = t, this._$Cb = e, this._$mr = i
            }, j.prototype._$7T = function(t) {
                var e, i = M.getUserTimeMSec(),
                    r = 0;
                switch (this._$_L) {
                    case STATE_CLOSING:
                        r = (i - this._$bb) / this._$Dr, r >= 1 && (r = 1, this._$_L = Mt.STATE_CLOSED, this._$bb = i), e = 1 - r;
                        break;
                    case STATE_CLOSED:
                        r = (i - this._$bb) / this._$Cb, r >= 1 && (this._$_L = Mt.STATE_OPENING, this._$bb = i), e = 0;
                        break;
                    case STATE_OPENING:
                        r = (i - this._$bb) / this._$mr, r >= 1 && (r = 1, this._$_L = Mt.STATE_INTERVAL, this._$12 = this._$T2()), e = r;
                        break;
                    case STATE_INTERVAL:
                        this._$12 < i && (this._$_L = Mt.STATE_CLOSING, this._$bb = i), e = 1;
                        break;
                    case STATE_FIRST:
                    default:
                        this._$_L = Mt.STATE_INTERVAL, this._$12 = this._$T2(), e = 1
                }
                this._$jo || (e = -e), t.setParamFloat(this._$iL, e), t.setParamFloat(this._$0L, e)
            };
            var Mt = function() {};
            Mt.STATE_FIRST = "STATE_FIRST", Mt.STATE_INTERVAL = "STATE_INTERVAL", Mt.STATE_CLOSING = "STATE_CLOSING", Mt.STATE_CLOSED = "STATE_CLOSED", Mt.STATE_OPENING = "STATE_OPENING", X.prototype = new E, X._$As = 32, X._$Gr = !1, X._$NT = null, X._$vS = null, X._$no = null, X._$9r = function(t) {
                var e = new Float32Array(t);
                return e
            }, X._$vb = function(t) {
                var e = new Int16Array(t);
                return e
            }, X._$cr = function(t, e) {
                return null == t || t._$yL() < e.length ? (t = X._$9r(2 * e.length), t.put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
            }, X._$mb = function(t, e) {
                return null == t || t._$yL() < e.length ? (t = X._$vb(2 * e.length), t.put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
            }, X._$Hs = function() {
                return X._$Gr
            }, X._$as = function(t) {
                X._$Gr = t
            }, X.prototype.setGL = function(t) {
                this.gl = t
            }, X.prototype.setTransform = function(t) {
                this.transform = t
            }, X.prototype._$ZT = function() {}, X.prototype._$Uo = function(t, e, i, r, n, s, o, a) {
                if (!(s < .01)) {
                    var h = this._$U2[t],
                        l = s > .9 ? at.EXPAND_W : 0;
                    this.gl.drawElements(h, i, r, n, s, l, this.transform, a)
                }
            }, X.prototype._$Rs = function() {
                throw new Error("_$Rs")
            }, X.prototype._$Ds = function(t) {
                throw new Error("_$Ds")
            }, X.prototype._$K2 = function() {
                for (var t = 0; t < this._$sb.length; t++) {
                    var e = this._$sb[t];
                    0 != e && (this.gl._$Sr(1, this._$sb, t), this._$sb[t] = 0)
                }
            }, X.prototype.setTexture = function(t, e) {
                this._$sb.length < t + 1 && this._$nS(t), this._$sb[t] = e
            }, X.prototype.setTexture = function(t, e) {
                this._$sb.length < t + 1 && this._$nS(t), this._$U2[t] = e
            }, X.prototype._$nS = function(t) {
                var e = Math.max(2 * this._$sb.length, t + 1 + 10),
                    i = new Int32Array(e);
                M._$jT(this._$sb, 0, i, 0, this._$sb.length), this._$sb = i;
                var r = new Array;
                M._$jT(this._$U2, 0, r, 0, this._$U2.length), this._$U2 = r
            }, Y.prototype = new P, Y._$Xo = new Float32Array(2), Y._$io = new Float32Array(2), Y._$0o = new Float32Array(2), Y._$Lo = new Float32Array(2), Y._$To = new Float32Array(2), Y._$Po = new Float32Array(2), Y._$gT = new Array, Y.prototype._$zP = function() {
                this._$GS = new D, this._$GS._$zP(), this._$Y0 = new Array
            }, Y.prototype.getType = function() {
                return P._$c2
            }, Y.prototype._$F0 = function(t) {
                P.prototype._$F0.call(this, t), this._$GS = t._$nP(), this._$Y0 = t._$nP(), P.prototype.readV2_opacity.call(this, t)
            }, Y.prototype.init = function(t) {
                var e = new W(this);
                return e._$Yr = new x, this._$32() && (e._$Wr = new x), e
            }, Y.prototype._$Nr = function(t, e) {
                this != e._$GT() && console.log("### assert!! ### ");
                var i = e;
                if (this._$GS._$Ur(t)) {
                    var r = Y._$gT;
                    r[0] = !1;
                    var n = this._$GS._$Q2(t, r);
                    e._$Ib(r[0]), this.interpolateOpacity(t, this._$GS, e, r);
                    var s = t._$vs(),
                        o = t._$Tr();
                    if (this._$GS._$zr(s, o, n), n <= 0) {
                        var a = this._$Y0[s[0]];
                        i._$Yr.init(a)
                    } else if (1 == n) {
                        var a = this._$Y0[s[0]],
                            h = this._$Y0[s[1]],
                            l = o[0];
                        i._$Yr._$fL = a._$fL + (h._$fL - a._$fL) * l, i._$Yr._$gL = a._$gL + (h._$gL - a._$gL) * l, i._$Yr._$B0 = a._$B0 + (h._$B0 - a._$B0) * l, i._$Yr._$z0 = a._$z0 + (h._$z0 - a._$z0) * l, i._$Yr._$qT = a._$qT + (h._$qT - a._$qT) * l
                    } else if (2 == n) {
                        var a = this._$Y0[s[0]],
                            h = this._$Y0[s[1]],
                            u = this._$Y0[s[2]],
                            c = this._$Y0[s[3]],
                            l = o[0],
                            p = o[1],
                            d = a._$fL + (h._$fL - a._$fL) * l,
                            f = u._$fL + (c._$fL - u._$fL) * l;
                        i._$Yr._$fL = d + (f - d) * p, d = a._$gL + (h._$gL - a._$gL) * l, f = u._$gL + (c._$gL - u._$gL) * l, i._$Yr._$gL = d + (f - d) * p, d = a._$B0 + (h._$B0 - a._$B0) * l, f = u._$B0 + (c._$B0 - u._$B0) * l, i._$Yr._$B0 = d + (f - d) * p, d = a._$z0 + (h._$z0 - a._$z0) * l, f = u._$z0 + (c._$z0 - u._$z0) * l, i._$Yr._$z0 = d + (f - d) * p, d = a._$qT + (h._$qT - a._$qT) * l, f = u._$qT + (c._$qT - u._$qT) * l, i._$Yr._$qT = d + (f - d) * p
                    } else if (3 == n) {
                        var _ = this._$Y0[s[0]],
                            g = this._$Y0[s[1]],
                            v = this._$Y0[s[2]],
                            y = this._$Y0[s[3]],
                            m = this._$Y0[s[4]],
                            x = this._$Y0[s[5]],
                            $ = this._$Y0[s[6]],
                            T = this._$Y0[s[7]],
                            l = o[0],
                            p = o[1],
                            b = o[2],
                            d = _._$fL + (g._$fL - _._$fL) * l,
                            f = v._$fL + (y._$fL - v._$fL) * l,
                            S = m._$fL + (x._$fL - m._$fL) * l,
                            E = $._$fL + (T._$fL - $._$fL) * l;
                        i._$Yr._$fL = (1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p), d = _._$gL + (g._$gL - _._$gL) * l, f = v._$gL + (y._$gL - v._$gL) * l, S = m._$gL + (x._$gL - m._$gL) * l, E = $._$gL + (T._$gL - $._$gL) * l, i._$Yr._$gL = (1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p), d = _._$B0 + (g._$B0 - _._$B0) * l, f = v._$B0 + (y._$B0 - v._$B0) * l, S = m._$B0 + (x._$B0 - m._$B0) * l, E = $._$B0 + (T._$B0 - $._$B0) * l, i._$Yr._$B0 = (1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p), d = _._$z0 + (g._$z0 - _._$z0) * l, f = v._$z0 + (y._$z0 - v._$z0) * l, S = m._$z0 + (x._$z0 - m._$z0) * l, E = $._$z0 + (T._$z0 - $._$z0) * l, i._$Yr._$z0 = (1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p), d = _._$qT + (g._$qT - _._$qT) * l, f = v._$qT + (y._$qT - v._$qT) * l, S = m._$qT + (x._$qT - m._$qT) * l, E = $._$qT + (T._$qT - $._$qT) * l, i._$Yr._$qT = (1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)
                    } else if (4 == n) {
                        var w = this._$Y0[s[0]],
                            P = this._$Y0[s[1]],
                            M = this._$Y0[s[2]],
                            A = this._$Y0[s[3]],
                            L = this._$Y0[s[4]],
                            D = this._$Y0[s[5]],
                            R = this._$Y0[s[6]],
                            O = this._$Y0[s[7]],
                            C = this._$Y0[s[8]],
                            I = this._$Y0[s[9]],
                            F = this._$Y0[s[10]],
                            N = this._$Y0[s[11]],
                            B = this._$Y0[s[12]],
                            U = this._$Y0[s[13]],
                            k = this._$Y0[s[14]],
                            G = this._$Y0[s[15]],
                            l = o[0],
                            p = o[1],
                            b = o[2],
                            j = o[3],
                            d = w._$fL + (P._$fL - w._$fL) * l,
                            f = M._$fL + (A._$fL - M._$fL) * l,
                            S = L._$fL + (D._$fL - L._$fL) * l,
                            E = R._$fL + (O._$fL - R._$fL) * l,
                            X = C._$fL + (I._$fL - C._$fL) * l,
                            W = F._$fL + (N._$fL - F._$fL) * l,
                            V = B._$fL + (U._$fL - B._$fL) * l,
                            z = k._$fL + (G._$fL - k._$fL) * l;
                        i._$Yr._$fL = (1 - j) * ((1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)) + j * ((1 - b) * (X + (W - X) * p) + b * (V + (z - V) * p)), d = w._$gL + (P._$gL - w._$gL) * l, f = M._$gL + (A._$gL - M._$gL) * l, S = L._$gL + (D._$gL - L._$gL) * l, E = R._$gL + (O._$gL - R._$gL) * l, X = C._$gL + (I._$gL - C._$gL) * l, W = F._$gL + (N._$gL - F._$gL) * l, V = B._$gL + (U._$gL - B._$gL) * l, z = k._$gL + (G._$gL - k._$gL) * l, i._$Yr._$gL = (1 - j) * ((1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)) + j * ((1 - b) * (X + (W - X) * p) + b * (V + (z - V) * p)), d = w._$B0 + (P._$B0 - w._$B0) * l, f = M._$B0 + (A._$B0 - M._$B0) * l, S = L._$B0 + (D._$B0 - L._$B0) * l, E = R._$B0 + (O._$B0 - R._$B0) * l, X = C._$B0 + (I._$B0 - C._$B0) * l, W = F._$B0 + (N._$B0 - F._$B0) * l, V = B._$B0 + (U._$B0 - B._$B0) * l, z = k._$B0 + (G._$B0 - k._$B0) * l, i._$Yr._$B0 = (1 - j) * ((1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)) + j * ((1 - b) * (X + (W - X) * p) + b * (V + (z - V) * p)), d = w._$z0 + (P._$z0 - w._$z0) * l, f = M._$z0 + (A._$z0 - M._$z0) * l, S = L._$z0 + (D._$z0 - L._$z0) * l, E = R._$z0 + (O._$z0 - R._$z0) * l, X = C._$z0 + (I._$z0 - C._$z0) * l, W = F._$z0 + (N._$z0 - F._$z0) * l, V = B._$z0 + (U._$z0 - B._$z0) * l, z = k._$z0 + (G._$z0 - k._$z0) * l, i._$Yr._$z0 = (1 - j) * ((1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)) + j * ((1 - b) * (X + (W - X) * p) + b * (V + (z - V) * p)), d = w._$qT + (P._$qT - w._$qT) * l, f = M._$qT + (A._$qT - M._$qT) * l, S = L._$qT + (D._$qT - L._$qT) * l, E = R._$qT + (O._$qT - R._$qT) * l, X = C._$qT + (I._$qT - C._$qT) * l, W = F._$qT + (N._$qT - F._$qT) * l, V = B._$qT + (U._$qT - B._$qT) * l, z = k._$qT + (G._$qT - k._$qT) * l, i._$Yr._$qT = (1 - j) * ((1 - b) * (d + (f - d) * p) + b * (S + (E - S) * p)) + j * ((1 - b) * (X + (W - X) * p) + b * (V + (z - V) * p))
                    } else {
                        for (var H = 0 | Math.pow(2, n), q = new Float32Array(H), K = 0; K < H; K++) {
                            for (var J = K, Z = 1, Q = 0; Q < n; Q++) Z *= J % 2 == 0 ? 1 - o[Q] : o[Q], J /= 2;
                            q[K] = Z
                        }
                        for (var tt = new Array, et = 0; et < H; et++) tt[et] = this._$Y0[s[et]];
                        for (var it = 0, rt = 0, nt = 0, st = 0, ot = 0, et = 0; et < H; et++) it += q[et] * tt[et]._$fL, rt += q[et] * tt[et]._$gL, nt += q[et] * tt[et]._$B0, st += q[et] * tt[et]._$z0, ot += q[et] * tt[et]._$qT;
                        i._$Yr._$fL = it, i._$Yr._$gL = rt, i._$Yr._$B0 = nt, i._$Yr._$z0 = st, i._$Yr._$qT = ot
                    }
                    var a = this._$Y0[s[0]];
                    i._$Yr.reflectX = a.reflectX, i._$Yr.reflectY = a.reflectY
                }
            }, Y.prototype._$2b = function(t, e) {
                this != e._$GT() && console.log("### assert!! ### ");
                var i = e;
                if (i._$hS(!0), this._$32()) {
                    var r = this.getTargetBaseDataID();
                    if (i._$8r == P._$ur && (i._$8r = t.getBaseDataIndex(r)), i._$8r < 0) at._$so && o._$li("_$L _$0P _$G :: %s", r), i._$hS(!1);
                    else {
                        var n = t.getBaseData(i._$8r);
                        if (null != n) {
                            var s = t._$q2(i._$8r),
                                a = Y._$Xo;
                            a[0] = i._$Yr._$fL, a[1] = i._$Yr._$gL;
                            var h = Y._$io;
                            h[0] = 0, h[1] = -.1;
                            var l = s._$GT().getType();
                            l == P._$c2 ? h[1] = -10 : h[1] = -.1;
                            var u = Y._$0o;
                            this._$Jr(t, n, s, a, h, u);
                            var c = bt._$92(h, u);
                            n._$nb(t, s, a, a, 1, 0, 2), i._$Wr._$fL = a[0], i._$Wr._$gL = a[1], i._$Wr._$B0 = i._$Yr._$B0, i._$Wr._$z0 = i._$Yr._$z0, i._$Wr._$qT = i._$Yr._$qT - c * bt._$NS;
                            var p = s.getTotalScale();
                            i.setTotalScale_notForClient(p * i._$Wr._$B0);
                            var d = s.getTotalOpacity();
                            i.setTotalOpacity(d * i.getInterpolatedOpacity()), i._$Wr.reflectX = i._$Yr.reflectX, i._$Wr.reflectY = i._$Yr.reflectY, i._$hS(s._$yo())
                        } else i._$hS(!1)
                    }
                } else i.setTotalScale_notForClient(i._$Yr._$B0), i.setTotalOpacity(i.getInterpolatedOpacity())
            }, Y.prototype._$nb = function(t, e, i, r, n, s, o) {
                this != e._$GT() && console.log("### assert!! ### ");
                for (var a, h, l = e, u = null != l._$Wr ? l._$Wr : l._$Yr, c = Math.sin(bt._$bS * u._$qT), p = Math.cos(bt._$bS * u._$qT), d = l.getTotalScale(), f = u.reflectX ? -1 : 1, _ = u.reflectY ? -1 : 1, g = p * d * f, v = -c * d * _, y = c * d * f, m = p * d * _, x = u._$fL, $ = u._$gL, T = n * o, b = s; b < T; b += o) a = i[b], h = i[b + 1], r[b] = g * a + v * h + x, r[b + 1] = y * a + m * h + $
            }, Y.prototype._$Jr = function(t, e, i, r, n, s) {
                e != i._$GT() && console.log("### assert!! ### ");
                var o = Y._$Lo;
                Y._$Lo[0] = r[0], Y._$Lo[1] = r[1], e._$nb(t, i, o, o, 1, 0, 2);
                for (var a = Y._$To, h = Y._$Po, l = 10, u = 1, c = 0; c < l; c++) {
                    if (h[0] = r[0] + u * n[0], h[1] = r[1] + u * n[1], e._$nb(t, i, h, a, 1, 0, 2), a[0] -= o[0], a[1] -= o[1], 0 != a[0] || 0 != a[1]) return s[0] = a[0], void(s[1] = a[1]);
                    if (h[0] = r[0] - u * n[0], h[1] = r[1] - u * n[1], e._$nb(t, i, h, a, 1, 0, 2), a[0] -= o[0], a[1] -= o[1], 0 != a[0] || 0 != a[1]) return a[0] = -a[0], a[0] = -a[0], s[0] = a[0], void(s[1] = a[1]);
                    u *= .1
                }
                at._$so && console.log("_$L0 to transform _$SP\n")
            }, W.prototype = new ot, V.prototype = new S, V._$ur = -2, V._$ES = 500, V._$wb = 2, V._$8S = 3, V._$os = 4, V._$52 = V._$ES, V._$R2 = V._$ES, V._$Sb = function(t) {
                for (var e = t.length - 1; e >= 0; --e) {
                    var i = t[e];
                    i < V._$52 ? V._$52 = i : i > V._$R2 && (V._$R2 = i)
                }
            }, V._$or = function() {
                return V._$52
            }, V._$Pr = function() {
                return V._$R2
            }, V.prototype._$F0 = function(t) {
                this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(), this._$mS = t._$Tb(), t.getFormatVersion() >= U._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, V._$Sb(this._$Lb)
            }, V.prototype.getClipIDList = function() {
                return this.clipIDList
            }, V.prototype._$Nr = function(t, e) {
                if (e._$IS[0] = !1, e._$Us = T._$Z2(t, this._$GS, e._$IS, this._$Lb), at._$Zs);
                else if (e._$IS[0]) return;
                e._$7s = T._$br(t, this._$GS, e._$IS, this._$mS)
            }, V.prototype._$2b = function(t) {}, V.prototype.getDrawDataID = function() {
                return this._$gP
            }, V.prototype._$j2 = function(t) {
                this._$gP = t
            }, V.prototype.getOpacity = function(t, e) {
                return e._$7s
            }, V.prototype._$zS = function(t, e) {
                return e._$Us
            }, V.prototype.getTargetBaseDataID = function() {
                return this._$dr
            }, V.prototype._$gs = function(t) {
                this._$dr = t
            }, V.prototype._$32 = function() {
                return null != this._$dr && this._$dr != vt._$2o()
            }, V.prototype.getType = function() {}, z._$42 = 0, z.prototype._$1b = function() {
                return this._$3S
            }, z.prototype.getDrawDataList = function() {
                return this._$aS
            }, z.prototype._$F0 = function(t) {
                this._$NL = t._$nP(), this._$aS = t._$nP(), this._$3S = t._$nP()
            }, z.prototype._$kr = function(t) {
                t._$Zo(this._$3S), t._$xo(this._$aS), this._$3S = null, this._$aS = null
            }, H.prototype = new t, H.loadModel = function(e) {
                var i = new H;
                return t._$62(i, e), i
            }, H.loadModel = function(e) {
                var i = new H;
                return t._$62(i, e), i
            }, H._$to = function() {
                var t = new H;
                return t
            }, H._$er = function(t) {
                var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
                if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
                for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r = H.loadModel(e._$3b()), n = 0; n < i.length; n++) {
                    var s = new _$5(i[n]);
                    if (0 == s.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + s._$PL());
                    r.setTexture(n, _$nL._$_o(t, s._$3b()))
                }
                return r
            }, H.prototype.setGL = function(t) {
                this._$zo.setGL(t)
            }, H.prototype.setTransform = function(t) {
                this._$zo.setTransform(t)
            }, H.prototype.draw = function() {
                this._$5S.draw(this._$zo)
            }, H.prototype._$K2 = function() {
                this._$zo._$K2()
            }, H.prototype.setTexture = function(t, e) {
                null == this._$zo && o._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
            }, H.prototype.setTexture = function(t, e) {
                null == this._$zo && o._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
            }, H.prototype._$Rs = function() {
                return this._$zo._$Rs()
            }, H.prototype._$Ds = function(t) {
                this._$zo._$Ds(t)
            }, H.prototype.getDrawParam = function() {
                return this._$zo
            }, q.prototype = new s, q._$cs = "VISIBLE:", q._$ar = "LAYOUT:", q.MTN_PREFIX_FADEIN = "FADEIN:", q.MTN_PREFIX_FADEOUT = "FADEOUT:", q._$Co = 0, q._$1T = 1, q.loadMotion = function(t) {
                var e = G._$C(t),
                    i = q.loadMotion(e);
                return i
            }, q.loadMotion = function(t) {
                t instanceof ArrayBuffer && (t = new DataView(t));
                var e = new q,
                    i = [0],
                    r = t.byteLength;
                e._$yT = 0;
                for (var n = 0; n < r; ++n) {
                    var s = K(t, n),
                        o = s.charCodeAt(0);
                    if ("\n" != s && "\r" != s)
                        if ("#" != s)
                            if ("$" != s) {
                                if (97 <= o && o <= 122 || 65 <= o && o <= 90 || "_" == s) {
                                    for (var a = n, h = -1; n < r && (s = K(t, n), "\r" != s && "\n" != s); ++n)
                                        if ("=" == s) {
                                            h = n;
                                            break
                                        }
                                    if (h >= 0) {
                                        var l = new N;
                                        L.startsWith(t, a, q._$cs) ? (l._$RP = N._$hs, l._$4P = L.createString(t, a, h - a)) : L.startsWith(t, a, q._$ar) ? (l._$4P = L.createString(t, a + 7, h - a - 7), L.startsWith(t, a + 7, "ANCHOR_X") ? l._$RP = N._$xs : L.startsWith(t, a + 7, "ANCHOR_Y") ? l._$RP = N._$us : L.startsWith(t, a + 7, "SCALE_X") ? l._$RP = N._$qs : L.startsWith(t, a + 7, "SCALE_Y") ? l._$RP = N._$Ys : L.startsWith(t, a + 7, "X") ? l._$RP = N._$ws : L.startsWith(t, a + 7, "Y") && (l._$RP = N._$Ns)) : (l._$RP = N._$Fr, l._$4P = L.createString(t, a, h - a)), e.motions.push(l);
                                        var u = 0,
                                            c = [];
                                        for (n = h + 1; n < r && (s = K(t, n), "\r" != s && "\n" != s); ++n)
                                            if ("," != s && " " != s && "\t" != s) {
                                                var p = L._$LS(t, r, n, i);
                                                if (i[0] > 0) {
                                                    c.push(p), u++;
                                                    var d = i[0];
                                                    if (d < n) {
                                                        console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                                        break
                                                    }
                                                    n = d - 1
                                                }
                                            }
                                        l._$I0 = new Float32Array(c), u > e._$yT && (e._$yT = u)
                                    }
                                }
                            } else {
                                for (var a = n, h = -1; n < r && (s = K(t, n), "\r" != s && "\n" != s); ++n)
                                    if ("=" == s) {
                                        h = n;
                                        break
                                    }
                                var f = !1;
                                if (h >= 0)
                                    for (h == a + 4 && "f" == K(t, a + 1) && "p" == K(t, a + 2) && "s" == K(t, a + 3) && (f = !0), n = h + 1; n < r && (s = K(t, n), "\r" != s && "\n" != s); ++n)
                                        if ("," != s && " " != s && "\t" != s) {
                                            var p = L._$LS(t, r, n, i);
                                            i[0] > 0 && f && 5 < p && p < 121 && (e._$D0 = p), n = i[0]
                                        }
                                for (; n < r && ("\n" != K(t, n) && "\r" != K(t, n)); ++n);
                            }
                    else
                        for (; n < r && ("\n" != K(t, n) && "\r" != K(t, n)); ++n);
                }
                return e._$rr = 1e3 * e._$yT / e._$D0 | 0, e
            }, q.prototype.getDurationMSec = function() {
                return this._$E ? -1 : this._$rr
            }, q.prototype.getLoopDurationMSec = function() {
                return this._$rr
            }, q.prototype.dump = function() {
                for (var t = 0; t < this.motions.length; t++) {
                    var e = this.motions[t];
                    console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
                    for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
                    console.log("\n")
                }
            }, q.prototype.updateParamExe = function(t, e, i, r) {
                for (var n = e - r._$z2, s = n * this._$D0 / 1e3, o = 0 | s, a = s - o, h = 0; h < this.motions.length; h++) {
                    var l = this.motions[h],
                        u = l._$I0.length,
                        c = l._$4P;
                    if (l._$RP == N._$hs) {
                        var p = l._$I0[o >= u ? u - 1 : o];
                        t.setParamFloat(c, p)
                    } else if (N._$ws <= l._$RP && l._$RP <= N._$Ys);
                    else {
                        var d, f = t.getParamIndex(c),
                            _ = t.getModelContext(),
                            g = _.getParamMax(f),
                            v = _.getParamMin(f),
                            y = .4,
                            m = y * (g - v),
                            x = _.getParamFloat(f),
                            $ = l._$I0[o >= u ? u - 1 : o],
                            T = l._$I0[o + 1 >= u ? u - 1 : o + 1];
                        d = $ < T && T - $ > m || $ > T && $ - T > m ? $ : $ + (T - $) * a;
                        var b = x + (d - x) * i;
                        t.setParamFloat(c, b)
                    }
                }
                o >= this._$yT && (this._$E ? (r._$z2 = e, this.loopFadeIn && (r._$bs = e)) : r._$9L = !0), this._$eP = i
            }, q.prototype._$r0 = function() {
                return this._$E
            }, q.prototype._$aL = function(t) {
                this._$E = t
            }, q.prototype._$S0 = function() {
                return this._$D0
            }, q.prototype._$U0 = function(t) {
                this._$D0 = t
            }, q.prototype.isLoopFadeIn = function() {
                return this.loopFadeIn
            }, q.prototype.setLoopFadeIn = function(t) {
                this.loopFadeIn = t
            }, F.prototype.clear = function() {
                this.size = 0
            }, F.prototype.add = function(t) {
                if (this._$P.length <= this.size) {
                    var e = new Float32Array(2 * this.size);
                    M._$jT(this._$P, 0, e, 0, this.size), this._$P = e
                }
                this._$P[this.size++] = t
            }, F.prototype._$BL = function() {
                var t = new Float32Array(this.size);
                return M._$jT(this._$P, 0, t, 0, this.size), t
            }, N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105, J.prototype = new P, J._$gT = new Array, J.prototype._$zP = function() {
                this._$GS = new D, this._$GS._$zP()
            }, J.prototype._$F0 = function(t) {
                P.prototype._$F0.call(this, t), this._$A = t._$6L(), this._$o = t._$6L(), this._$GS = t._$nP(), this._$Eo = t._$nP(), P.prototype.readV2_opacity.call(this, t)
            }, J.prototype.init = function(t) {
                var e = new Z(this),
                    i = (this._$o + 1) * (this._$A + 1);
                return null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(2 * i), null != e._$hr && (e._$hr = null), this._$32() ? e._$hr = new Float32Array(2 * i) : e._$hr = null, e
            }, J.prototype._$Nr = function(t, e) {
                var i = e;
                if (this._$GS._$Ur(t)) {
                    var r = this._$VT(),
                        n = J._$gT;
                    n[0] = !1, T._$Vr(t, this._$GS, n, r, this._$Eo, i._$Cr, 0, 2), e._$Ib(n[0]), this.interpolateOpacity(t, this._$GS, e, n)
                }
            }, J.prototype._$2b = function(t, e) {
                var i = e;
                if (i._$hS(!0), this._$32()) {
                    var r = this.getTargetBaseDataID();
                    if (i._$8r == P._$ur && (i._$8r = t.getBaseDataIndex(r)), i._$8r < 0) at._$so && o._$li("_$L _$0P _$G :: %s", r), i._$hS(!1);
                    else {
                        var n = t.getBaseData(i._$8r),
                            s = t._$q2(i._$8r);
                        if (null != n && s._$yo()) {
                            var a = s.getTotalScale();
                            i.setTotalScale_notForClient(a);
                            var h = s.getTotalOpacity();
                            i.setTotalOpacity(h * i.getInterpolatedOpacity()), n._$nb(t, s, i._$Cr, i._$hr, this._$VT(), 0, 2), i._$hS(!0)
                        } else i._$hS(!1)
                    }
                } else i.setTotalOpacity(i.getInterpolatedOpacity())
            }, J.prototype._$nb = function(t, e, i, r, n, s, o) {
                var a = e,
                    h = null != a._$hr ? a._$hr : a._$Cr;
                J.transformPoints_sdk2(i, r, n, s, o, h, this._$o, this._$A)
            }, J.transformPoints_sdk2 = function(t, e, i, r, n, s, o, a) {
                for (var h, l, u, c = i * n, p = 0, d = 0, f = 0, _ = 0, g = 0, v = 0, y = !1, m = r; m < c; m += n) {
                    var x, $, T, b;
                    if (T = t[m], b = t[m + 1], x = T * o, $ = b * a, x < 0 || $ < 0 || o <= x || a <= $) {
                        var S = o + 1;
                        if (!y) {
                            y = !0, p = .25 * (s[2 * (0 + 0 * S)] + s[2 * (o + 0 * S)] + s[2 * (0 + a * S)] + s[2 * (o + a * S)]), d = .25 * (s[2 * (0 + 0 * S) + 1] + s[2 * (o + 0 * S) + 1] + s[2 * (0 + a * S) + 1] + s[2 * (o + a * S) + 1]);
                            var E = s[2 * (o + a * S)] - s[2 * (0 + 0 * S)],
                                w = s[2 * (o + a * S) + 1] - s[2 * (0 + 0 * S) + 1],
                                P = s[2 * (o + 0 * S)] - s[2 * (0 + a * S)],
                                M = s[2 * (o + 0 * S) + 1] - s[2 * (0 + a * S) + 1];
                            f = .5 * (E + P), _ = .5 * (w + M), g = .5 * (E - P), v = .5 * (w - M), p -= .5 * (f + g), d -= .5 * (_ + v)
                        }
                        if (-2 < T && T < 3 && -2 < b && b < 3)
                            if (T <= 0)
                                if (b <= 0) {
                                    var A = s[2 * (0 + 0 * S)],
                                        L = s[2 * (0 + 0 * S) + 1],
                                        D = p - 2 * f,
                                        R = d - 2 * _,
                                        O = p - 2 * g,
                                        C = d - 2 * v,
                                        I = p - 2 * f - 2 * g,
                                        F = d - 2 * _ - 2 * v,
                                        N = .5 * (T - -2),
                                        B = .5 * (b - -2);
                                    N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                                } else if (b >= 1) {
                            var O = s[2 * (0 + a * S)],
                                C = s[2 * (0 + a * S) + 1],
                                I = p - 2 * f + 1 * g,
                                F = d - 2 * _ + 1 * v,
                                A = p + 3 * g,
                                L = d + 3 * v,
                                D = p - 2 * f + 3 * g,
                                R = d - 2 * _ + 3 * v,
                                N = .5 * (T - -2),
                                B = .5 * (b - 1);
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else {
                            var U = 0 | $;
                            U == a && (U = a - 1);
                            var N = .5 * (T - -2),
                                B = $ - U,
                                k = U / a,
                                G = (U + 1) / a,
                                O = s[2 * (0 + U * S)],
                                C = s[2 * (0 + U * S) + 1],
                                A = s[2 * (0 + (U + 1) * S)],
                                L = s[2 * (0 + (U + 1) * S) + 1],
                                I = p - 2 * f + k * g,
                                F = d - 2 * _ + k * v,
                                D = p - 2 * f + G * g,
                                R = d - 2 * _ + G * v;
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else if (1 <= T)
                            if (b <= 0) {
                                var D = s[2 * (o + 0 * S)],
                                    R = s[2 * (o + 0 * S) + 1],
                                    A = p + 3 * f,
                                    L = d + 3 * _,
                                    I = p + 1 * f - 2 * g,
                                    F = d + 1 * _ - 2 * v,
                                    O = p + 3 * f - 2 * g,
                                    C = d + 3 * _ - 2 * v,
                                    N = .5 * (T - 1),
                                    B = .5 * (b - -2);
                                N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                            } else if (b >= 1) {
                            var I = s[2 * (o + a * S)],
                                F = s[2 * (o + a * S) + 1],
                                O = p + 3 * f + 1 * g,
                                C = d + 3 * _ + 1 * v,
                                D = p + 1 * f + 3 * g,
                                R = d + 1 * _ + 3 * v,
                                A = p + 3 * f + 3 * g,
                                L = d + 3 * _ + 3 * v,
                                N = .5 * (T - 1),
                                B = .5 * (b - 1);
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else {
                            var U = 0 | $;
                            U == a && (U = a - 1);
                            var N = .5 * (T - 1),
                                B = $ - U,
                                k = U / a,
                                G = (U + 1) / a,
                                I = s[2 * (o + U * S)],
                                F = s[2 * (o + U * S) + 1],
                                D = s[2 * (o + (U + 1) * S)],
                                R = s[2 * (o + (U + 1) * S) + 1],
                                O = p + 3 * f + k * g,
                                C = d + 3 * _ + k * v,
                                A = p + 3 * f + G * g,
                                L = d + 3 * _ + G * v;
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else if (b <= 0) {
                            var j = 0 | x;
                            j == o && (j = o - 1);
                            var N = x - j,
                                B = .5 * (b - -2),
                                X = j / o,
                                Y = (j + 1) / o,
                                D = s[2 * (j + 0 * S)],
                                R = s[2 * (j + 0 * S) + 1],
                                A = s[2 * (j + 1 + 0 * S)],
                                L = s[2 * (j + 1 + 0 * S) + 1],
                                I = p + X * f - 2 * g,
                                F = d + X * _ - 2 * v,
                                O = p + Y * f - 2 * g,
                                C = d + Y * _ - 2 * v;
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else if (b >= 1) {
                            var j = 0 | x;
                            j == o && (j = o - 1);
                            var N = x - j,
                                B = .5 * (b - 1),
                                X = j / o,
                                Y = (j + 1) / o,
                                I = s[2 * (j + a * S)],
                                F = s[2 * (j + a * S) + 1],
                                O = s[2 * (j + 1 + a * S)],
                                C = s[2 * (j + 1 + a * S) + 1],
                                D = p + X * f + 3 * g,
                                R = d + X * _ + 3 * v,
                                A = p + Y * f + 3 * g,
                                L = d + Y * _ + 3 * v;
                            N + B <= 1 ? (e[m] = I + (O - I) * N + (D - I) * B, e[m + 1] = F + (C - F) * N + (R - F) * B) : (e[m] = A + (D - A) * (1 - N) + (O - A) * (1 - B), e[m + 1] = L + (R - L) * (1 - N) + (C - L) * (1 - B))
                        } else System.err.printf("_$li calc : %.4f , %.4f\t\t\t\t\t@@BDBoxGrid\n", T, b);
                        else e[m] = p + T * f + b * g, e[m + 1] = d + T * _ + b * v
                    } else l = x - (0 | x), u = $ - (0 | $), h = 2 * ((0 | x) + (0 | $) * (o + 1)), l + u < 1 ? (e[m] = s[h] * (1 - l - u) + s[h + 2] * l + s[h + 2 * (o + 1)] * u, e[m + 1] = s[h + 1] * (1 - l - u) + s[h + 3] * l + s[h + 2 * (o + 1) + 1] * u) : (e[m] = s[h + 2 * (o + 1) + 2] * (l - 1 + u) + s[h + 2 * (o + 1)] * (1 - l) + s[h + 2] * (1 - u), e[m + 1] = s[h + 2 * (o + 1) + 3] * (l - 1 + u) + s[h + 2 * (o + 1) + 1] * (1 - l) + s[h + 3] * (1 - u))
                }
            }, J.prototype.transformPoints_sdk1 = function(t, e, i, r, n, s, o) {
                for (var a, h, l, u, c, p, d, f = e, _ = this._$o, g = this._$A, v = n * o, y = null != f._$hr ? f._$hr : f._$Cr, m = s; m < v; m += o) at._$ts ? (a = i[m], h = i[m + 1], a < 0 ? a = 0 : a > 1 && (a = 1), h < 0 ? h = 0 : h > 1 && (h = 1), a *= _, h *= g, l = 0 | a, u = 0 | h, l > _ - 1 && (l = _ - 1), u > g - 1 && (u = g - 1), p = a - l, d = h - u, c = 2 * (l + u * (_ + 1))) : (a = i[m] * _, h = i[m + 1] * g, p = a - (0 | a), d = h - (0 | h), c = 2 * ((0 | a) + (0 | h) * (_ + 1))), p + d < 1 ? (r[m] = y[c] * (1 - p - d) + y[c + 2] * p + y[c + 2 * (_ + 1)] * d, r[m + 1] = y[c + 1] * (1 - p - d) + y[c + 3] * p + y[c + 2 * (_ + 1) + 1] * d) : (r[m] = y[c + 2 * (_ + 1) + 2] * (p - 1 + d) + y[c + 2 * (_ + 1)] * (1 - p) + y[c + 2] * (1 - d), r[m + 1] = y[c + 2 * (_ + 1) + 3] * (p - 1 + d) + y[c + 2 * (_ + 1) + 1] * (1 - p) + y[c + 3] * (1 - d))
            }, J.prototype._$VT = function() {
                return (this._$o + 1) * (this._$A + 1)
            }, J.prototype.getType = function() {
                return P._$_b
            }, Z.prototype = new ot, Q._$42 = 0, Q.prototype._$zP = function() {
                this._$3S = new Array, this._$aS = new Array
            }, Q.prototype._$F0 = function(t) {
                this._$g0 = t._$8L(), this.visible = t._$8L(), this._$NL = t._$nP(), this._$3S = t._$nP(), this._$aS = t._$nP()
            }, Q.prototype.init = function(t) {
                var e = new tt(this);
                return e.setPartsOpacity(this.isVisible() ? 1 : 0), e
            }, Q.prototype._$6o = function(t) {
                if (null == this._$3S) throw new Error("_$3S _$6 _$Wo@_$6o");
                this._$3S.push(t)
            }, Q.prototype._$3o = function(t) {
                if (null == this._$aS) throw new Error("_$aS _$6 _$Wo@_$3o");
                this._$aS.push(t)
            }, Q.prototype._$Zo = function(t) {
                this._$3S = t
            }, Q.prototype._$xo = function(t) {
                this._$aS = t
            }, Q.prototype.isVisible = function() {
                return this.visible
            }, Q.prototype._$uL = function() {
                return this._$g0
            }, Q.prototype._$KP = function(t) {
                this.visible = t
            }, Q.prototype._$ET = function(t) {
                this._$g0 = t
            }, Q.prototype.getBaseData = function() {
                return this._$3S
            }, Q.prototype.getDrawData = function() {
                return this._$aS
            }, Q.prototype._$p2 = function() {
                return this._$NL
            }, Q.prototype._$ob = function(t) {
                this._$NL = t
            }, Q.prototype.getPartsID = function() {
                return this._$NL
            }, Q.prototype._$MP = function(t) {
                this._$NL = t
            }, tt.prototype = new u, tt.prototype.getPartsOpacity = function() {
                return this._$VS
            }, tt.prototype.setPartsOpacity = function(t) {
                this._$VS = t
            }, et._$L7 = function() {
                c._$27(), vt._$27(), O._$27(), l._$27()
            }, et.prototype.toString = function() {
                return this.id
            }, it.prototype._$F0 = function(t) {}, rt.prototype._$1s = function() {
                return this._$4S
            }, rt.prototype._$zP = function() {
                this._$4S = new Array
            }, rt.prototype._$F0 = function(t) {
                this._$4S = t._$nP()
            }, rt.prototype._$Ks = function(t) {
                this._$4S.push(t)
            }, nt.tr = new gt, nt._$50 = new gt, nt._$Ti = new Array(0, 0), nt._$Pi = new Array(0, 0), nt._$B = new Array(0, 0), nt.prototype._$lP = function(t, e, i, r) {
                this.viewport = new Array(t, e, i, r)
            }, nt.prototype._$bL = function() {
                this.context.save();
                var t = this.viewport;
                null != t && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip())
            }, nt.prototype._$ei = function() {
                this.context.restore()
            }, nt.prototype.drawElements = function(t, e, i, r, n, s, a, h) {
                try {
                    n != this._$Qo && (this._$Qo = n, this.context.globalAlpha = n);
                    for (var l = e.length, u = t.width, c = t.height, p = this.context, d = this._$xP, f = this._$uP, _ = this._$6r, g = this._$3r, v = nt.tr, y = nt._$Ti, m = nt._$Pi, x = nt._$B, $ = 0; $ < l; $ += 3) {
                        p.save();
                        var T = e[$],
                            b = e[$ + 1],
                            S = e[$ + 2],
                            E = d + _ * i[2 * T],
                            w = f + g * i[2 * T + 1],
                            P = d + _ * i[2 * b],
                            M = f + g * i[2 * b + 1],
                            A = d + _ * i[2 * S],
                            L = f + g * i[2 * S + 1];
                        a && (a._$PS(E, w, x), E = x[0], w = x[1], a._$PS(P, M, x), P = x[0], M = x[1], a._$PS(A, L, x), A = x[0], L = x[1]);
                        var D = u * r[2 * T],
                            R = c - c * r[2 * T + 1],
                            O = u * r[2 * b],
                            C = c - c * r[2 * b + 1],
                            I = u * r[2 * S],
                            F = c - c * r[2 * S + 1],
                            N = Math.atan2(C - R, O - D),
                            B = Math.atan2(M - w, P - E),
                            U = P - E,
                            k = M - w,
                            G = Math.sqrt(U * U + k * k),
                            j = O - D,
                            X = C - R,
                            Y = Math.sqrt(j * j + X * X),
                            W = G / Y;
                        Pt._$ni(I, F, D, R, O - D, C - R, -(C - R), O - D, y), Pt._$ni(A, L, E, w, P - E, M - w, -(M - w), P - E, m);
                        var V = (m[0] - y[0]) / y[1],
                            z = Math.min(D, O, I),
                            H = Math.max(D, O, I),
                            q = Math.min(R, C, F),
                            K = Math.max(R, C, F),
                            J = Math.floor(z),
                            Z = Math.floor(q),
                            Q = Math.ceil(H),
                            tt = Math.ceil(K);
                        v.identity(), v.translate(E, w), v.rotate(B), v.scale(1, m[1] / y[1]), v.shear(V, 0), v.scale(W, W), v.rotate(-N), v.translate(-D, -R), v.setContext(p);
                        var et = !0,
                            it = 1.2;
                        if (s || (s = et ? it : 0), at.IGNORE_EXPAND && (s = 0), at.USE_CACHED_POLYGON_IMAGE) {
                            var rt = h._$e0;
                            if (rt.gl_cacheImage = rt.gl_cacheImage || {}, !rt.gl_cacheImage[$]) {
                                var st = nt.createCanvas(Q - J, tt - Z);
                                at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (Q - J) * (tt - Z) * 4;
                                var ot = st.getContext("2d");
                                ot.translate(-J, -Z), nt.clip(ot, v, s, G, D, R, O, C, I, F, E, w, P, M, A, L), ot.drawImage(t, 0, 0), rt.gl_cacheImage[$] = {
                                    cacheCanvas: st,
                                    cacheContext: ot
                                }
                            }
                            p.drawImage(rt.gl_cacheImage[$].cacheCanvas, J, Z)
                        } else at.IGNORE_CLIP || nt.clip(p, v, s, G, D, R, O, C, I, F, E, w, P, M, A, L), at.USE_ADJUST_TRANSLATION && (z = 0, H = u, q = 0, K = c), p.drawImage(t, z, q, H - z, K - q, z, q, H - z, K - q);
                        p.restore()
                    }
                } catch (ht) {
                    o._$Rb(ht)
                }
            }, nt.clip = function(t, e, i, r, n, s, o, a, h, l, u, c, p, d, f, _) {
                i > .02 ? nt.expandClip(t, e, i, r, u, c, p, d, f, _) : nt.clipWithTransform(t, null, n, s, o, a, h, l)
            }, nt.expandClip = function(t, e, i, r, n, s, o, a, h, l) {
                var u = o - n,
                    c = a - s,
                    p = h - n,
                    d = l - s,
                    f = u * d - c * p > 0 ? i : -i,
                    _ = -c,
                    g = u,
                    v = h - o,
                    y = l - a,
                    m = -y,
                    x = v,
                    $ = Math.sqrt(v * v + y * y),
                    T = -d,
                    b = p,
                    S = Math.sqrt(p * p + d * d),
                    E = n - f * _ / r,
                    w = s - f * g / r,
                    P = o - f * _ / r,
                    M = a - f * g / r,
                    A = o - f * m / $,
                    L = a - f * x / $,
                    D = h - f * m / $,
                    R = l - f * x / $,
                    O = n + f * T / S,
                    C = s + f * b / S,
                    I = h + f * T / S,
                    F = l + f * b / S,
                    N = nt._$50,
                    B = e._$P2(N);
                return null != B && (nt.clipWithTransform(t, N, E, w, P, M, A, L, D, R, I, F, O, C), !0)
            }, nt.clipWithTransform = function(t, e, i, r, n, s, a, h) {
                if (arguments.length < 7) return void o._$li("err : @LDGL.clip()");
                if (!(arguments[1] instanceof gt)) return void o._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");
                var l = nt._$B,
                    u = e,
                    c = arguments;
                if (t.beginPath(), u) {
                    u._$PS(c[2], c[3], l), t.moveTo(l[0], l[1]);
                    for (var p = 4; p < c.length; p += 2) u._$PS(c[p], c[p + 1], l), t.lineTo(l[0], l[1])
                } else {
                    t.moveTo(c[2], c[3]);
                    for (var p = 4; p < c.length; p += 2) t.lineTo(c[p], c[p + 1])
                }
                t.clip()
            }, nt.createCanvas = function(t, e) {
                var i = document.createElement("canvas");
                return i.setAttribute("width", t), i.setAttribute("height", e), i || o._$li("err : " + i), i
            }, nt.dumpValues = function() {
                for (var t = "", e = 0; e < arguments.length; e++) t += "[" + e + "]= " + arguments[e].toFixed(3) + " , ";
                console.log(t)
            }, st.prototype._$F0 = function(t) {
                this._$TT = t._$_T(), this._$LT = t._$_T(), this._$FS = t._$_T(), this._$wL = t._$nP()
            }, st.prototype.getMinValue = function() {
                return this._$TT
            }, st.prototype.getMaxValue = function() {
                return this._$LT
            }, st.prototype.getDefaultValue = function() {
                return this._$FS
            }, st.prototype.getParamID = function() {
                return this._$wL
            }, ot.prototype._$yo = function() {
                return this._$AT && !this._$JS
            }, ot.prototype._$hS = function(t) {
                this._$AT = t
            }, ot.prototype._$GT = function() {
                return this._$e0
            }, ot.prototype._$l2 = function(t) {
                this._$IP = t
            }, ot.prototype.getPartsIndex = function() {
                return this._$IP
            }, ot.prototype._$x2 = function() {
                return this._$JS
            }, ot.prototype._$Ib = function(t) {
                this._$JS = t
            }, ot.prototype.getTotalScale = function() {
                return this.totalScale
            }, ot.prototype.setTotalScale_notForClient = function(t) {
                this.totalScale = t
            }, ot.prototype.getInterpolatedOpacity = function() {
                return this._$7s
            }, ot.prototype.setInterpolatedOpacity = function(t) {
                this._$7s = t
            }, ot.prototype.getTotalOpacity = function(t) {
                return this.totalOpacity
            }, ot.prototype.setTotalOpacity = function(t) {
                this.totalOpacity = t
            }, at._$2s = "2.1.00_1", at._$Kr = 201001e3, at._$sP = !0, at._$so = !0, at._$cb = !1, at._$3T = !0, at._$Ts = !0, at._$fb = !0, at._$ts = !0, at.L2D_DEFORMER_EXTEND = !0, at._$Wb = !1, at._$yr = !1, at._$Zs = !1, at.L2D_NO_ERROR = 0, at._$i7 = 1e3, at._$9s = 1001, at._$es = 1100, at._$r7 = 2e3, at._$07 = 2001, at._$b7 = 2002, at._$H7 = 4e3, at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._$6b = !0, at._$cT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array, at.frameBuffers = new Array, at.fTexture = new Array, at.IGNORE_CLIP = !1, at.IGNORE_EXPAND = !1, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = !0, at.USE_CANVAS_TRANSFORM = !0, at.USE_CACHED_POLYGON_IMAGE = !1, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = {
                PROFILE_NAME: "iOS Speed",
                USE_ADJUST_TRANSLATION: !0,
                USE_CACHED_POLYGON_IMAGE: !0,
                EXPAND_W: 4
            }, at.PROFILE_IOS_QUALITY = {
                PROFILE_NAME: "iOS HiQ",
                USE_ADJUST_TRANSLATION: !0,
                USE_CACHED_POLYGON_IMAGE: !1,
                EXPAND_W: 2
            }, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = {
                PROFILE_NAME: "Android",
                USE_ADJUST_TRANSLATION: !1,
                USE_CACHED_POLYGON_IMAGE: !1,
                EXPAND_W: 2
            }, at.PROFILE_DESKTOP = {
                PROFILE_NAME: "Desktop",
                USE_ADJUST_TRANSLATION: !1,
                USE_CACHED_POLYGON_IMAGE: !1,
                EXPAND_W: 2
            }, at.initProfile = function() {
                Et.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Et.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) : at.setupProfile(at.PROFILE_DESKTOP)
            }, at.setupProfile = function(t, e) {
                if ("number" == typeof t) switch (t) {
                    case 9901:
                        t = at.PROFILE_IOS_SPEED;
                        break;
                    case 9902:
                        t = at.PROFILE_IOS_QUALITY;
                        break;
                    case 9903:
                        t = at.PROFILE_IOS_DEFAULT;
                        break;
                    case 9904:
                        t = at.PROFILE_ANDROID;
                        break;
                    case 9905:
                        t = at.PROFILE_DESKTOP;
                        break;
                    default:
                        alert("profile _$6 _$Ui : " + t)
                }
                arguments.length < 2 && (e = !0), e && console.log("profile : " + t.PROFILE_NAME);
                for (var i in t) at[i] = t[i], e && console.log("  [" + i + "] = " + t[i])
            }, at.init = function() {
                if (at._$6b) {
                    console.log("Live2D %s", at._$2s), at._$6b = !1;
                    var t = !1;
                    t = !0, at.initProfile()
                }
            }, at.getVersionStr = function() {
                return at._$2s
            }, at.getVersionNo = function() {
                return at._$Kr
            }, at._$sT = function(t) {
                at._$cT = t
            }, at.getError = function() {
                var t = at._$cT;
                return at._$cT = 0, t
            }, at.dispose = function() {
                at.glContext = [], at.frameBuffers = [], at.fTexture = []
            }, at.setGL = function(t, e) {
                var i = e || 0;
                at.glContext[i] = t
            }, at.getGL = function(t) {
                return at.glContext[t]
            }, at.setClippingMaskBufferSize = function(t) {
                at.clippingMaskBufferSize = t
            }, at.getClippingMaskBufferSize = function() {
                return at.clippingMaskBufferSize
            }, at.deleteBuffer = function(t) {
                var e = at.getGL(t);
                e.deleteFramebuffer(at.frameBuffers[t].framebuffer), delete at.frameBuffers[t], delete at.glContext[t]
            }, ht._$r2 = function(t) {
                return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * Math.cos(t * bt.PI_F)
            }, lt._$fr = -1, lt.prototype.toString = function() {
                return this._$ib
            }, ut.prototype = new V, ut._$42 = 0, ut._$Os = 30, ut._$ms = 0, ut._$ns = 1, ut._$_s = 2, ut._$gT = new Array, ut.prototype._$_S = function(t) {
                this._$LP = t
            }, ut.prototype.getTextureNo = function() {
                return this._$LP
            }, ut.prototype._$ZL = function() {
                return this._$Qi
            }, ut.prototype._$H2 = function() {
                return this._$JP
            }, ut.prototype.getNumPoints = function() {
                return this._$d0
            }, ut.prototype.getType = function() {
                return V._$wb
            }, ut.prototype._$B2 = function(t, e, i) {
                var r = e,
                    n = null != r._$hr ? r._$hr : r._$Cr,
                    s = B._$do;
                switch (s) {
                    default:
                        case B._$Ms:
                        throw new Error("_$L _$ro ");
                    case B._$Qs:
                            for (var o = this._$d0 - 1; o >= 0; --o) {
                            var a = o * B._$No;
                            n[a + 4] = i
                        }
                }
            }, ut.prototype._$zP = function() {
                this._$GS = new D, this._$GS._$zP()
            }, ut.prototype._$F0 = function(t) {
                V.prototype._$F0.call(this, t), this._$LP = t._$6L(), this._$d0 = t._$6L(), this._$Yo = t._$6L();
                var e = t._$nP();
                this._$BP = new Int16Array(3 * this._$Yo);
                for (var i = 3 * this._$Yo - 1; i >= 0; --i) this._$BP[i] = e[i];
                if (this._$Eo = t._$nP(), this._$Qi = t._$nP(), t.getFormatVersion() >= U._$s7) {
                    if (this._$JP = t._$6L(), 0 != this._$JP) {
                        if (0 != (1 & this._$JP)) {
                            var r = t._$6L();
                            null == this._$5P && (this._$5P = new Object), this._$5P._$Hb = parseInt(r)
                        }
                        0 != (this._$JP & ut._$Os) ? this._$6s = (this._$JP & ut._$Os) >> 1 : this._$6s = ut._$ms, 0 != (32 & this._$JP) && (this.culling = !1)
                    }
                } else this._$JP = 0
            }, ut.prototype.init = function(t) {
                var e = new ct(this),
                    i = this._$d0 * B._$No,
                    r = this._$32();
                null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(i), null != e._$hr && (e._$hr = null), e._$hr = r ? new Float32Array(i) : null;
                var n = B._$do;
                switch (n) {
                    default:
                        case B._$Ms:
                        if (B._$Ls)
                        for (var s = this._$d0 - 1; s >= 0; --s) {
                            var o = s << 1;
                            this._$Qi[o + 1] = 1 - this._$Qi[o + 1]
                        }
                    break;
                    case B._$Qs:
                            for (var s = this._$d0 - 1; s >= 0; --s) {
                            var o = s << 1,
                                a = s * B._$No,
                                h = this._$Qi[o],
                                l = this._$Qi[o + 1];
                            e._$Cr[a] = h, e._$Cr[a + 1] = l, e._$Cr[a + 4] = 0, r && (e._$hr[a] = h, e._$hr[a + 1] = l, e._$hr[a + 4] = 0)
                        }
                }
                return e
            }, ut.prototype._$Nr = function(t, e) {
                var i = e;
                if (this != i._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t) && (V.prototype._$Nr.call(this, t, i), !i._$IS[0])) {
                    var r = ut._$gT;
                    r[0] = !1, T._$Vr(t, this._$GS, r, this._$d0, this._$Eo, i._$Cr, B._$i2, B._$No)
                }
            }, ut.prototype._$2b = function(t, e) {
                try {
                    this != e._$GT() && console.log("### assert!! ### ");
                    var i = !1;
                    e._$IS[0] && (i = !0);
                    var r = e;
                    if (!i && (V.prototype._$2b.call(this, t), this._$32())) {
                        var n = this.getTargetBaseDataID();
                        if (r._$8r == V._$ur && (r._$8r = t.getBaseDataIndex(n)), r._$8r < 0) at._$so && o._$li("_$L _$0P _$G :: %s", n);
                        else {
                            var s = t.getBaseData(r._$8r),
                                a = t._$q2(r._$8r);
                            null == s || a._$x2() ? r._$AT = !1 : (s._$nb(t, a, r._$Cr, r._$hr, this._$d0, B._$i2, B._$No), r._$AT = !0), r.baseOpacity = a.getTotalOpacity()
                        }
                    }
                } catch (h) {
                    throw h
                }
            }, ut.prototype.draw = function(t, e, i) {
                if (this != i._$GT() && console.log("### assert!! ### "), !i._$IS[0]) {
                    var r = i,
                        n = this._$LP;
                    n < 0 && (n = 1);
                    var s = this.getOpacity(e, r) * i._$VS * i.baseOpacity,
                        o = null != r._$hr ? r._$hr : r._$Cr;
                    t.setClipBufPre_clipContextForDraw(i.clipBufPre_clipContext), t._$WP(this.culling), t._$Uo(n, 3 * this._$Yo, this._$BP, o, this._$Qi, s, this._$6s, r)
                }
            }, ut.prototype.dump = function() {
                console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo), console.log("  _$Oi _$di = { ");
                for (var t = 0; t < this._$BP.length; t++) console.log("%5d ,", this._$BP[t]);
                console.log("\n  _$5i _$30");
                for (var t = 0; t < this._$Eo.length; t++) {
                    console.log("\n    _$30[%d] = ", t);
                    for (var e = this._$Eo[t], i = 0; i < e.length; i++) console.log("%6.2f, ", e[i])
                }
                console.log("\n")
            }, ut.prototype._$72 = function(t) {
                return null == this._$5P ? null : this._$5P[t]
            }, ut.prototype.getIndexArray = function() {
                return this._$BP
            }, ct.prototype = new St, ct.prototype.getTransformedPoints = function() {
                return null != this._$hr ? this._$hr : this._$Cr
            }, pt.prototype._$HT = function(t) {
                this.x = t.x, this.y = t.y
            }, pt.prototype._$HT = function(t, e) {
                this.x = t, this.y = e
            }, dt.prototype = new t, dt.loadModel = function(e) {
                var i = new dt;
                return t._$62(i, e), i
            }, dt.loadModel = function(e, i) {
                var r = i || 0,
                    n = new dt(r);
                return t._$62(n, e), n
            }, dt._$to = function() {
                var t = new dt;
                return t
            }, dt._$er = function(t) {
                var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
                if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
                for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r = dt.loadModel(e._$3b()), n = 0; n < i.length; n++) {
                    var s = new _$5(i[n]);
                    if (0 == s.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + s._$PL());
                    r.setTexture(n, _$nL._$_o(t, s._$3b()))
                }
                return r
            }, dt.prototype.setGL = function(t) {
                at.setGL(t)
            }, dt.prototype.setTransform = function(t) {
                this.drawParamWebGL.setTransform(t)
            }, dt.prototype.update = function() {
                this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL)
            }, dt.prototype.draw = function() {
                this._$5S.draw(this.drawParamWebGL)
            }, dt.prototype._$K2 = function() {
                this.drawParamWebGL._$K2()
            }, dt.prototype.setTexture = function(t, e) {
                null == this.drawParamWebGL && o._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t, e)
            }, dt.prototype.setTexture = function(t, e) {
                null == this.drawParamWebGL && o._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t, e)
            }, dt.prototype._$Rs = function() {
                return this.drawParamWebGL._$Rs()
            }, dt.prototype._$Ds = function(t) {
                this.drawParamWebGL._$Ds(t)
            }, dt.prototype.getDrawParam = function() {
                return this.drawParamWebGL
            }, dt.prototype.setMatrix = function(t) {
                this.drawParamWebGL.setMatrix(t)
            }, dt.prototype.setPremultipliedAlpha = function(t) {
                this.drawParamWebGL.setPremultipliedAlpha(t)
            }, dt.prototype.isPremultipliedAlpha = function() {
                return this.drawParamWebGL.isPremultipliedAlpha()
            }, dt.prototype.setAnisotropy = function(t) {
                this.drawParamWebGL.setAnisotropy(t)
            }, dt.prototype.getAnisotropy = function() {
                return this.drawParamWebGL.getAnisotropy()
            }, ft.prototype._$tb = function() {
                return this.motions
            }, ft.prototype.startMotion = function(t, e) {
                for (var i = null, r = this.motions.length, n = 0; n < r; ++n) i = this.motions[n], null != i && (i._$qS(i._$w0.getFadeOut()), this._$eb && o._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", r, i._$sr));
                if (null == t) return -1;
                i = new _t, i._$w0 = t, this.motions.push(i);
                var s = i._$sr;
                return this._$eb && o._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", r, s), s
            }, ft.prototype.updateParam = function(t) {
                try {
                    for (var e = !1, i = 0; i < this.motions.length; i++) {
                        var r = this.motions[i];
                        if (null != r) {
                            var n = r._$w0;
                            null != n ? (n.updateParam(t, r), e = !0, r.isFinished() && (this._$eb && o._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, r._$sr), this.motions.splice(i, 1), i--)) : (this.motions = this.motions.splice(i, 1), i--)
                        } else this.motions.splice(i, 1), i--
                    }
                    return e
                } catch (s) {
                    return o._$li(s), !0
                }
            }, ft.prototype.isFinished = function(t) {
                if (arguments.length >= 1) {
                    for (var e = 0; e < this.motions.length; e++) {
                        var i = this.motions[e];
                        if (null != i && i._$sr == t && !i.isFinished()) return !1
                    }
                    return !0
                }
                for (var e = 0; e < this.motions.length; e++) {
                    var i = this.motions[e];
                    if (null != i) {
                        var r = i._$w0;
                        if (null != r) {
                            if (!i.isFinished()) return !1
                        } else this.motions.splice(e, 1), e--
                    } else this.motions.splice(e, 1), e--
                }
                return !0
            }, ft.prototype.stopAllMotions = function() {
                for (var t = 0; t < this.motions.length; t++) {
                    var e = this.motions[t];
                    if (null != e) {
                        var i = e._$w0;
                        null != i ? (this.motions.splice(t, 1), t--) : (this.motions.splice(t, 1), t--)
                    } else this.motions.splice(t, 1), t--
                }
            }, ft.prototype._$Zr = function(t) {
                this._$eb = t
            }, ft.prototype._$e = function() {
                console.log("-- _$R --\n");
                for (var t = 0; t < this.motions.length; t++) {
                    var e = this.motions[t],
                        i = e._$w0;
                    console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, i.toString())
                }
            }, _t._$Gs = 0, _t.prototype.isFinished = function() {
                return this._$9L
            }, _t.prototype._$qS = function(t) {
                var e = M.getUserTimeMSec(),
                    i = e + t;
                (this._$Do < 0 || i < this._$Do) && (this._$Do = i)
            }, _t.prototype._$Bs = function() {
                return this._$sr
            }, gt.prototype.setContext = function(t) {
                var e = this.m;
                t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
            }, gt.prototype.toString = function() {
                for (var t = "LDTransform { ", e = 0; e < 9; e++) t += this.m[e].toFixed(2) + " ,";
                return t += " }"
            }, gt.prototype.identity = function() {
                var t = this.m;
                t[0] = t[4] = t[8] = 1, t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0
            }, gt.prototype._$PS = function(t, e, i) {
                null == i && (i = new Array(0, 0));
                var r = this.m;
                return i[0] = r[0] * t + r[3] * e + r[6], i[1] = r[1] * t + r[4] * e + r[7], i
            }, gt.prototype._$P2 = function(t) {
                t || (t = new gt);
                var e = this.m,
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    s = e[3],
                    o = e[4],
                    a = e[5],
                    h = e[6],
                    l = e[7],
                    u = e[8],
                    c = i * o * u + r * a * h + n * s * l - i * a * l - n * o * h - r * s * u;
                if (0 == c) return null;
                var p = 1 / c;
                return t.m[0] = p * (o * u - l * a), t.m[1] = p * (l * n - r * u), t.m[2] = p * (r * a - o * n), t.m[3] = p * (h * a - s * u), t.m[4] = p * (i * u - h * n), t.m[5] = p * (s * n - i * a), t.m[6] = p * (s * l - h * o), t.m[7] = p * (h * r - i * l), t.m[8] = p * (i * o - s * r), t
            }, gt.prototype.transform = function(t, e, i) {
                null == i && (i = new Array(0, 0));
                var r = this.m;
                return i[0] = r[0] * t + r[3] * e + r[6], i[1] = r[1] * t + r[4] * e + r[7], i
            }, gt.prototype.translate = function(t, e) {
                var i = this.m;
                i[6] = i[0] * t + i[3] * e + i[6], i[7] = i[1] * t + i[4] * e + i[7], i[8] = i[2] * t + i[5] * e + i[8]
            }, gt.prototype.scale = function(t, e) {
                var i = this.m;
                i[0] *= t, i[1] *= t, i[2] *= t, i[3] *= e, i[4] *= e, i[5] *= e
            }, gt.prototype.shear = function(t, e) {
                var i = this.m,
                    r = i[0] + i[3] * e,
                    n = i[1] + i[4] * e,
                    s = i[2] + i[5] * e;
                i[3] = i[0] * t + i[3], i[4] = i[1] * t + i[4], i[5] = i[2] * t + i[5], i[0] = r, i[1] = n, i[2] = s
            }, gt.prototype.rotate = function(t) {
                var e = this.m,
                    i = Math.cos(t),
                    r = Math.sin(t),
                    n = e[0] * i + e[3] * r,
                    s = e[1] * i + e[4] * r,
                    o = e[2] * i + e[5] * r;
                e[3] = -e[0] * r + e[3] * i, e[4] = -e[1] * r + e[4] * i, e[5] = -e[2] * r + e[5] * i, e[0] = n, e[1] = s, e[2] = o
            }, gt.prototype.concatenate = function(t) {
                var e = this.m,
                    i = t.m,
                    r = e[0] * i[0] + e[3] * i[1] + e[6] * i[2],
                    n = e[1] * i[0] + e[4] * i[1] + e[7] * i[2],
                    s = e[2] * i[0] + e[5] * i[1] + e[8] * i[2],
                    o = e[0] * i[3] + e[3] * i[4] + e[6] * i[5],
                    a = e[1] * i[3] + e[4] * i[4] + e[7] * i[5],
                    h = e[2] * i[3] + e[5] * i[4] + e[8] * i[5],
                    l = e[0] * i[6] + e[3] * i[7] + e[6] * i[8],
                    u = e[1] * i[6] + e[4] * i[7] + e[7] * i[8],
                    c = e[2] * i[6] + e[5] * i[7] + e[8] * i[8];
                m[0] = r, m[1] = n, m[2] = s, m[3] = o, m[4] = a, m[5] = h, m[6] = l, m[7] = u, m[8] = c
            }, vt.prototype = new et, vt._$eT = null, vt._$tP = new Object, vt._$2o = function() {
                return null == vt._$eT && (vt._$eT = vt.getID("DST_BASE")), vt._$eT
            }, vt._$27 = function() {
                vt._$tP.clear(), vt._$eT = null
            }, vt.getID = function(t) {
                var e = vt._$tP[t];
                return null == e && (e = new vt(t), vt._$tP[t] = e), e
            }, vt.prototype._$3s = function() {
                return new vt
            }, yt.prototype = new E, yt._$9r = function(t) {
                var e = new Float32Array(t);
                return e
            }, yt._$vb = function(t) {
                var e = new Int16Array(t);
                return e
            }, yt._$cr = function(t, e) {
                return null == t || t._$yL() < e.length ? (t = yt._$9r(2 * e.length), t.put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
            }, yt._$mb = function(t, e) {
                return null == t || t._$yL() < e.length ? (t = yt._$vb(2 * e.length), t.put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
            }, yt._$Hs = function() {
                return this._$Gr
            }, yt._$as = function(t) {
                this._$Gr = t
            }, yt.prototype.getGL = function() {
                return this.gl
            }, yt.prototype.setGL = function(t) {
                this.gl = t
            }, yt.prototype.setTransform = function(t) {
                this.transform = t
            }, yt.prototype._$ZT = function() {
                var t = this.gl;
                this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.DEPTH_TEST), t.frontFace(t.CW), t.enable(t.BLEND), t.colorMask(1, 1, 1, 1), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
            }, yt.prototype._$Uo = function(t, e, i, r, n, s, o, a) {
                if (!(s < .01 && null == this.clipBufPre_clipContextMask)) {
                    var h = (s > .9 ? at.EXPAND_W : 0, this.gl);
                    if (null == this.gl) throw new Error("gl is null");
                    var l = !1,
                        u = 1,
                        c = 1,
                        p = 1,
                        d = this._$C0 * u * s,
                        f = this._$tT * c * s,
                        _ = this._$WL * p * s,
                        g = this._$lT * s;
                    if (null != this.clipBufPre_clipContextMask) {
                        h.frontFace(h.CCW), h.useProgram(this.shaderProgram), this._$vS = mt(h, this._$vS, r), this._$no = xt(h, this._$no, i), h.enableVertexAttribArray(this.a_position_Loc), h.vertexAttribPointer(this.a_position_Loc, 2, h.FLOAT, !1, 0, 0), this._$NT = mt(h, this._$NT, n), h.activeTexture(h.TEXTURE1), h.bindTexture(h.TEXTURE_2D, this.textures[t]), h.uniform1i(this.s_texture0_Loc, 1), h.enableVertexAttribArray(this.a_texCoord_Loc), h.vertexAttribPointer(this.a_texCoord_Loc, 2, h.FLOAT, !1, 0, 0), h.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask);
                        var v = this.getClipBufPre_clipContextMask().layoutChannelNo,
                            y = this.getChannelFlagAsColor(v);
                        h.uniform4f(this.u_channelFlag, y.r, y.g, y.b, y.a);
                        var m = this.getClipBufPre_clipContextMask().layoutBounds;
                        h.uniform4f(this.u_baseColor_Loc, 2 * m.x - 1, 2 * m.y - 1, 2 * m._$EL() - 1, 2 * m._$5T() - 1), h.uniform1i(this.u_maskFlag_Loc, !0)
                    } else if (l = null != this.getClipBufPre_clipContextDraw()) {
                        h.useProgram(this.shaderProgramOff), this._$vS = mt(h, this._$vS, r), this._$no = xt(h, this._$no, i), h.enableVertexAttribArray(this.a_position_Loc_Off), h.vertexAttribPointer(this.a_position_Loc_Off, 2, h.FLOAT, !1, 0, 0), this._$NT = mt(h, this._$NT, n), h.activeTexture(h.TEXTURE1), h.bindTexture(h.TEXTURE_2D, this.textures[t]), h.uniform1i(this.s_texture0_Loc_Off, 1), h.enableVertexAttribArray(this.a_texCoord_Loc_Off), h.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, h.FLOAT, !1, 0, 0), h.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw), h.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4), h.activeTexture(h.TEXTURE2), h.bindTexture(h.TEXTURE_2D, at.fTexture[this.glno]), h.uniform1i(this.s_texture1_Loc_Off, 2);
                        var v = this.getClipBufPre_clipContextDraw().layoutChannelNo,
                            y = this.getChannelFlagAsColor(v);
                        h.uniform4f(this.u_channelFlag_Loc_Off, y.r, y.g, y.b, y.a), h.uniform4f(this.u_baseColor_Loc_Off, d, f, _, g)
                    } else h.useProgram(this.shaderProgram), this._$vS = mt(h, this._$vS, r), this._$no = xt(h, this._$no, i), h.enableVertexAttribArray(this.a_position_Loc), h.vertexAttribPointer(this.a_position_Loc, 2, h.FLOAT, !1, 0, 0), this._$NT = mt(h, this._$NT, n), h.activeTexture(h.TEXTURE1), h.bindTexture(h.TEXTURE_2D, this.textures[t]), h.uniform1i(this.s_texture0_Loc, 1), h.enableVertexAttribArray(this.a_texCoord_Loc), h.vertexAttribPointer(this.a_texCoord_Loc, 2, h.FLOAT, !1, 0, 0), h.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4), h.uniform4f(this.u_baseColor_Loc, d, f, _, g), h.uniform1i(this.u_maskFlag_Loc, !1);
                    this.culling ? this.gl.enable(h.CULL_FACE) : this.gl.disable(h.CULL_FACE), this.gl.enable(h.BLEND);
                    var x, $, T, b;
                    if (null != this.clipBufPre_clipContextMask) x = h.ONE, $ = h.ONE_MINUS_SRC_ALPHA, T = h.ONE, b = h.ONE_MINUS_SRC_ALPHA;
                    else switch (o) {
                        case ut._$ms:
                            x = h.ONE, $ = h.ONE_MINUS_SRC_ALPHA, T = h.ONE, b = h.ONE_MINUS_SRC_ALPHA;
                            break;
                        case ut._$ns:
                            x = h.ONE, $ = h.ONE, T = h.ZERO, b = h.ONE;
                            break;
                        case ut._$_s:
                            x = h.DST_COLOR, $ = h.ONE_MINUS_SRC_ALPHA, T = h.ZERO, b = h.ONE
                    }
                    h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD), h.blendFuncSeparate(x, $, T, b), this.anisotropyExt && h.texParameteri(h.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
                    var S = i.length;
                    h.drawElements(h.TRIANGLES, S, h.UNSIGNED_SHORT, 0), h.bindTexture(h.TEXTURE_2D, null)
                }
            }, yt.prototype._$Rs = function() {
                throw new Error("_$Rs")
            }, yt.prototype._$Ds = function(t) {
                throw new Error("_$Ds")
            }, yt.prototype._$K2 = function() {
                for (var t = 0; t < this.textures.length; t++) {
                    var e = this.textures[t];
                    0 != e && (this.gl._$K2(1, this.textures, t), this.textures[t] = null)
                }
            }, yt.prototype.setTexture = function(t, e) {
                this.textures[t] = e
            }, yt.prototype.initShader = function() {
                var t = this.gl;
                this.loadShaders2(), this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, "u_mvpMatrix"), this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag = t.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, "u_baseColor"), this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_texCoord"), this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture1"), this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag"), this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor")
            }, yt.prototype.disposeShader = function() {
                var t = this.gl;
                this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null)
            }, yt.prototype.compileShader = function(t, e) {
                var i, r = this.gl,
                    n = e,
                    s = r.createShader(t);
                if (null == s) return o._$Ji("_$L0 to create shader"), null;
                r.shaderSource(s, n), r.compileShader(s);
                var i = r.getShaderParameter(s, r.COMPILE_STATUS);
                if (!i) {
                    var a = r.getShaderInfoLog(s);
                    return o._$Ji("_$L0 to compile shader : " + a), r.deleteShader(s), null
                }
                return s
            }, yt.prototype.loadShaders2 = function() {
                var t = this.gl;
                if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return !1;
                if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return !1;
                var e = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}",
                    i = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}",
                    r = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}",
                    n = "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}";
                if (this.vertShader = this.compileShader(t.VERTEX_SHADER, e), !this.vertShader) return o._$Ji("Vertex shader compile _$li!"), !1;
                if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER, r), !this.vertShaderOff) return o._$Ji("OffVertex shader compile _$li!"), !1;
                if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER, i), !this.fragShader) return o._$Ji("Fragment shader compile _$li!"), !1;
                if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER, n), !this.fragShaderOff) return o._$Ji("OffFragment shader compile _$li!"), !1;
                t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(this.shaderProgram), t.linkProgram(this.shaderProgramOff);
                var s = t.getProgramParameter(this.shaderProgram, t.LINK_STATUS);
                if (!s) {
                    var a = t.getProgramInfoLog(this.shaderProgram);
                    return o._$Ji("_$L0 to link program: " + a), this.vertShader && (t.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), !1
                }
                return !0
            }, yt.prototype.createFramebuffer = function() {
                var t = this.gl,
                    e = at.clippingMaskBufferSize,
                    i = t.createFramebuffer();
                t.bindFramebuffer(t.FRAMEBUFFER, i);
                var r = t.createRenderbuffer();
                t.bindRenderbuffer(t.RENDERBUFFER, r), t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, e, e), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r);
                var n = t.createTexture();
                return t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, e, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), at.fTexture[this.glno] = n, {
                    framebuffer: i,
                    renderbuffer: r,
                    texture: at.fTexture[this.glno]
                }
            }, $t.prototype._$fP = function() {
                var t, e, i, r = this._$ST();
                if (0 == (128 & r)) return 255 & r;
                if (0 == (128 & (t = this._$ST()))) return (127 & r) << 7 | 127 & t;
                if (0 == (128 & (e = this._$ST()))) return (127 & r) << 14 | (127 & t) << 7 | 255 & e;
                if (0 == (128 & (i = this._$ST()))) return (127 & r) << 21 | (127 & t) << 14 | (127 & e) << 7 | 255 & i;
                throw new lt("_$L _$0P  _")
            }, $t.prototype.getFormatVersion = function() {
                return this._$S2
            }, $t.prototype._$gr = function(t) {
                this._$S2 = t
            }, $t.prototype._$3L = function() {
                return this._$fP()
            }, $t.prototype._$mP = function() {
                return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8)
            }, $t.prototype._$_T = function() {
                return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4)
            }, $t.prototype._$6L = function() {
                return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4)
            }, $t.prototype._$ST = function() {
                return this._$zT(), this._$T.getInt8(this._$F++)
            }, $t.prototype._$9T = function() {
                return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2)
            }, $t.prototype._$2T = function() {
                throw this._$zT(), this._$F += 8, new lt("_$L _$q read long")
            }, $t.prototype._$po = function() {
                return this._$zT(), 0 != this._$T.getInt8(this._$F++)
            };
            var At = !0;
            $t.prototype._$bT = function() {
                this._$zT();
                var t = this._$3L(),
                    e = null;
                if (At) try {
                    var i = new ArrayBuffer(2 * t);
                    e = new Uint16Array(i);
                    for (var r = 0; r < t; ++r) e[r] = this._$T.getUint8(this._$F++);
                    return String.fromCharCode.apply(null, e)
                } catch (n) {
                    At = !1
                }
                try {
                    var s = new Array;
                    if (null == e)
                        for (var r = 0; r < t; ++r) s[r] = this._$T.getUint8(this._$F++);
                    else
                        for (var r = 0; r < t; ++r) s[r] = e[r];
                    return String.fromCharCode.apply(null, s)
                } catch (n) {
                    console.log("read utf8 / _$rT _$L0 !! : " + n)
                }
            }, $t.prototype._$cS = function() {
                this._$zT();
                for (var t = this._$3L(), e = new Int32Array(t), i = 0; i < t; i++) e[i] = this._$T.getInt32(this._$F), this._$F += 4;
                return e
            }, $t.prototype._$Tb = function() {
                this._$zT();
                for (var t = this._$3L(), e = new Float32Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat32(this._$F), this._$F += 4;
                return e
            }, $t.prototype._$5b = function() {
                this._$zT();
                for (var t = this._$3L(), e = new Float64Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat64(this._$F), this._$F += 8;
                return e
            }, $t.prototype._$nP = function() {
                return this._$Jb(-1)
            }, $t.prototype._$Jb = function(t) {
                if (this._$zT(), t < 0 && (t = this._$3L()), t == U._$7P) {
                    var e = this._$6L();
                    if (0 <= e && e < this._$Ko.length) return this._$Ko[e];
                    throw new lt("_$sL _$4i @_$m0")
                }
                var i = this._$4b(t);
                return this._$Ko.push(i), i
            }, $t.prototype._$4b = function(t) {
                if (0 == t) return null;
                if (50 == t) {
                    var e = this._$bT(),
                        i = O.getID(e);
                    return i
                }
                if (51 == t) {
                    var e = this._$bT(),
                        i = vt.getID(e);
                    return i
                }
                if (134 == t) {
                    var e = this._$bT(),
                        i = l.getID(e);
                    return i
                }
                if (60 == t) {
                    var e = this._$bT(),
                        i = c.getID(e);
                    return i
                }
                if (t >= 48) {
                    var r = U._$9o(t);
                    return null != r ? (r._$F0(this), r) : null
                }
                switch (t) {
                    case 1:
                        return this._$bT();
                    case 10:
                        var s = this._$6L();
                        return new n(s, (!0));
                    case 11:
                        return new $(this._$mP(), this._$mP(), this._$mP(), this._$mP());
                    case 12:
                        return new $(this._$_T(), this._$_T(), this._$_T(), this._$_T());
                    case 13:
                        return new b(this._$mP(), this._$mP());
                    case 14:
                        return new b(this._$_T(), this._$_T());
                    case 15:
                        for (var o = this._$3L(), i = new Array(o), a = 0; a < o; a++) i[a] = this._$nP();
                        return i;
                    case 17:
                        var i = new C(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
                        return i;
                    case 21:
                        return new h(this._$6L(), this._$6L(), this._$6L(), this._$6L());
                    case 22:
                        return new pt(this._$6L(), this._$6L());
                    case 23:
                        throw new Error("_$L _$ro ");
                    case 16:
                    case 25:
                        return this._$cS();
                    case 26:
                        return this._$5b();
                    case 27:
                        return this._$Tb();
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 18:
                    case 19:
                    case 20:
                    case 24:
                    case 28:
                        throw new lt("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t);
                    default:
                        throw new lt("_$6 _$q : _$nP() NO _$i : " + t)
                }
            }, $t.prototype._$8L = function() {
                return 0 == this._$hL ? this._$v0 = this._$ST() : 8 == this._$hL && (this._$v0 = this._$ST(), this._$hL = 0), 1 == (this._$v0 >> 7 - this._$hL++ & 1)
            }, $t.prototype._$zT = function() {
                0 != this._$hL && (this._$hL = 0)
            }, Tt.prototype._$wP = function(t, e, i) {
                for (var r = 0; r < i; r++) {
                    for (var n = 0; n < e; n++) {
                        var s = 2 * (n + r * e);
                        console.log("(% 7.3f , % 7.3f) , ", t[s], t[s + 1])
                    }
                    console.log("\n")
                }
                console.log("\n")
            }, bt._$2S = Math.PI / 180, bt._$bS = Math.PI / 180, bt._$wS = 180 / Math.PI, bt._$NS = 180 / Math.PI, bt.PI_F = Math.PI, bt._$kT = [0, .012368, .024734, .037097, .049454, .061803, .074143, .086471, .098786, .111087, .12337, .135634, .147877, .160098, .172295, .184465, .196606, .208718, .220798, .232844, .244854, .256827, .268761, .280654, .292503, .304308, .316066, .327776, .339436, .351044, .362598, .374097, .385538, .396921, .408243, .419502, .430697, .441826, .452888, .463881, .474802, .485651, .496425, .507124, .517745, .528287, .538748, .549126, .559421, .56963, .579752, .589785, .599728, .609579, .619337, .629, .638567, .648036, .657406, .666676, .675843, .684908, .693867, .70272, .711466, .720103, .72863, .737045, .745348, .753536, .76161, .769566, .777405, .785125, .792725, .800204, .807561, .814793, .821901, .828884, .835739, .842467, .849066, .855535, .861873, .868079, .874153, .880093, .885898, .891567, .897101, .902497, .907754, .912873, .917853, .922692, .92739, .931946, .936359, .940629, .944755, .948737, .952574, .956265, .959809, .963207, .966457, .96956, .972514, .97532, .977976, .980482, .982839, .985045, .987101, .989006, .990759, .992361, .993811, .995109, .996254, .997248, .998088, .998776, .999312, .999694, .999924, 1], bt._$92 = function(t, e) {
                var i = Math.atan2(t[1], t[0]),
                    r = Math.atan2(e[1], e[0]);
                return bt._$tS(i, r)
            }, bt._$tS = function(t, e) {
                for (var i = t - e; i < -Math.PI;) i += 2 * Math.PI;
                for (; i > Math.PI;) i -= 2 * Math.PI;
                return i
            }, bt._$9 = function(t) {
                return Math.sin(t)
            }, bt.fcos = function(t) {
                return Math.cos(t)
            }, St.prototype._$u2 = function() {
                return this._$IS[0]
            }, St.prototype._$yo = function() {
                return this._$AT && !this._$IS[0]
            }, St.prototype._$GT = function() {
                return this._$e0
            }, Et._$W2 = 0, Et.SYSTEM_INFO = null, Et.USER_AGENT = navigator.userAgent, Et.isIPhone = function() {
                return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone
            }, Et.isIOS = function() {
                return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad
            }, Et.isAndroid = function() {
                return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isAndroid
            }, Et.getOSVersion = function() {
                return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO.version
            }, Et.getOS = function() {
                return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad ? "iOS" : Et.SYSTEM_INFO._isAndroid ? "Android" : "_$Q0 OS"
            }, Et.setup = function() {
                function t(t, e) {
                    for (var i = t.substring(e).split(/[ _,;\.]/), r = 0, n = 0; n <= 2 && !isNaN(i[n]); n++) {
                        var s = parseInt(i[n]);
                        if (s < 0 || s > 999) {
                            o._$li("err : " + s + " @UtHtml5.setup()"), r = 0;
                            break
                        }
                        r += s * Math.pow(1e3, 2 - n)
                    }
                    return r
                }
                var e, i = Et.USER_AGENT,
                    r = Et.SYSTEM_INFO = {
                        userAgent: i
                    };
                if ((e = i.indexOf("iPhone OS ")) >= 0) r.os = "iPhone", r._isIPhone = !0, r.version = t(i, e + "iPhone OS ".length);
                else if ((e = i.indexOf("iPad")) >= 0) {
                    if (e = i.indexOf("CPU OS"), e < 0) return void o._$li(" err : " + i + " @UtHtml5.setup()");
                    r.os = "iPad", r._isIPad = !0, r.version = t(i, e + "CPU OS ".length)
                } else(e = i.indexOf("Android")) >= 0 ? (r.os = "Android", r._isAndroid = !0, r.version = t(i, e + "Android ".length)) : (r.os = "-", r.version = -1)
            }, window.UtSystem = M, window.UtDebug = o, window.LDTransform = gt, window.LDGL = nt, window.Live2D = at, window.Live2DModelWebGL = dt, window.Live2DModelJS = H, window.Live2DMotion = q, window.MotionQueueManager = ft, window.PhysicsHair = d, window.AMotion = s, window.PartsDataID = l, window.DrawDataID = O, window.BaseDataID = vt, window.ParamID = c, at.init();
            var wt = !1
        }()
    }, function(t, e, i) {
        "use strict";

        function r(t, e, i) {
            var r = new XMLHttpRequest;
            r.open("GET", t, !0), r.responseType = e, r.onload = function() {
                switch (r.status) {
                    case 200:
                        i(r.response);
                        break;
                    default:
                        console.error("Failed to load (" + r.status + ") : " + t)
                }
            }, r.send(null)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.loadBytes = r;
        i(1)
    }, function(t, e, i) {
        var r, r;
        (function(e) {
            /*!
             * pixi.js - v4.0.3
             * Compiled Thu Sep 29 2016 12:09:36 GMT-0400 (EDT)
             *
             * pixi.js is licensed under the MIT License.
             * http://www.opensource.org/licenses/mit-license
             */
            ! function(e) {
                t.exports = e()
            }(function() {
                var t;
                return function i(t, e, n) {
                    function s(a, h) {
                        if (!e[a]) {
                            if (!t[a]) {
                                var l = "function" == typeof r && r;
                                if (!h && l) return r(a, !0);
                                if (o) return o(a, !0);
                                var u = new Error("Cannot find module '" + a + "'");
                                throw u.code = "MODULE_NOT_FOUND", u
                            }
                            var c = e[a] = {
                                exports: {}
                            };
                            t[a][0].call(c.exports, function(e) {
                                var i = t[a][1][e];
                                return s(i ? i : e)
                            }, c, c.exports, i, t, e, n)
                        }
                        return e[a].exports
                    }
                    for (var o = "function" == typeof r && r, a = 0; a < n.length; a++) s(n[a]);
                    return s
                }({
                    1: [function(t, e, i) {
                        "use strict";
                        "use restrict";

                        function r(t) {
                            var e = 32;
                            return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
                        }
                        var n = 32;
                        i.INT_BITS = n, i.INT_MAX = 2147483647, i.INT_MIN = -1 << n - 1, i.sign = function(t) {
                            return (t > 0) - (t < 0)
                        }, i.abs = function(t) {
                            var e = t >> n - 1;
                            return (t ^ e) - e
                        }, i.min = function(t, e) {
                            return e ^ (t ^ e) & -(t < e)
                        }, i.max = function(t, e) {
                            return t ^ (t ^ e) & -(t < e)
                        }, i.isPow2 = function(t) {
                            return !(t & t - 1 || !t)
                        }, i.log2 = function(t) {
                            var e, i;
                            return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, e |= i, e | t >> 1
                        }, i.log10 = function(t) {
                            return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
                        }, i.popCount = function(t) {
                            return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24
                        }, i.countTrailingZeros = r, i.nextPow2 = function(t) {
                            return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1
                        }, i.prevPow2 = function(t) {
                            return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1)
                        }, i.parity = function(t) {
                            return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1
                        };
                        var s = new Array(256);
                        ! function(t) {
                            for (var e = 0; e < 256; ++e) {
                                var i = e,
                                    r = e,
                                    n = 7;
                                for (i >>>= 1; i; i >>>= 1) r <<= 1, r |= 1 & i, --n;
                                t[e] = r << n & 255
                            }
                        }(s), i.reverse = function(t) {
                            return s[255 & t] << 24 | s[t >>> 8 & 255] << 16 | s[t >>> 16 & 255] << 8 | s[t >>> 24 & 255]
                        }, i.interleave2 = function(t, e) {
                            return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
                        }, i.deinterleave2 = function(t, e) {
                            return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16
                        }, i.interleave3 = function(t, e, i) {
                            return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, i &= 1023, i = 4278190335 & (i | i << 16), i = 251719695 & (i | i << 8), i = 3272356035 & (i | i << 4), i = 1227133513 & (i | i << 2), t | i << 2
                        }, i.deinterleave3 = function(t, e) {
                            return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22
                        }, i.nextCombination = function(t) {
                            var e = t | t - 1;
                            return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
                        }
                    }, {}],
                    2: [function(t, e, i) {
                        "use strict";

                        function r(t, e, i) {
                            i = i || 2;
                            var r = e && e.length,
                                s = r ? e[0] * i : t.length,
                                a = n(t, 0, s, i, !0),
                                h = [];
                            if (!a) return h;
                            var l, u, p, d, f, _, g;
                            if (r && (a = c(t, e, a, i)), t.length > 80 * i) {
                                l = p = t[0], u = d = t[1];
                                for (var v = i; v < s; v += i) f = t[v], _ = t[v + 1], f < l && (l = f), _ < u && (u = _), f > p && (p = f), _ > d && (d = _);
                                g = Math.max(p - l, d - u)
                            }
                            return o(a, h, i, l, u, g), h
                        }

                        function n(t, e, i, r, n) {
                            var s, o;
                            if (n === D(t, e, i, r) > 0)
                                for (s = e; s < i; s += r) o = M(s, t[s], t[s + 1], o);
                            else
                                for (s = i - r; s >= e; s -= r) o = M(s, t[s], t[s + 1], o);
                            return o && T(o, o.next) && (A(o), o = o.next), o
                        }

                        function s(t, e) {
                            if (!t) return t;
                            e || (e = t);
                            var i, r = t;
                            do
                                if (i = !1, r.steiner || !T(r, r.next) && 0 !== $(r.prev, r, r.next)) r = r.next;
                                else {
                                    if (A(r), r = e = r.prev, r === r.next) return null;
                                    i = !0
                                }
                            while (i || r !== e);
                            return e
                        }

                        function o(t, e, i, r, n, c, p) {
                            if (t) {
                                !p && c && _(t, r, n, c);
                                for (var d, f, g = t; t.prev !== t.next;)
                                    if (d = t.prev, f = t.next, c ? h(t, r, n, c) : a(t)) e.push(d.i / i), e.push(t.i / i), e.push(f.i / i), A(t), t = f.next, g = f.next;
                                    else if (t = f, t === g) {
                                    p ? 1 === p ? (t = l(t, e, i), o(t, e, i, r, n, c, 2)) : 2 === p && u(t, e, i, r, n, c) : o(s(t), e, i, r, n, c, 1);
                                    break
                                }
                            }
                        }

                        function a(t) {
                            var e = t.prev,
                                i = t,
                                r = t.next;
                            if ($(e, i, r) >= 0) return !1;
                            for (var n = t.next.next; n !== t.prev;) {
                                if (m(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && $(n.prev, n, n.next) >= 0) return !1;
                                n = n.next
                            }
                            return !0
                        }

                        function h(t, e, i, r) {
                            var n = t.prev,
                                s = t,
                                o = t.next;
                            if ($(n, s, o) >= 0) return !1;
                            for (var a = n.x < s.x ? n.x < o.x ? n.x : o.x : s.x < o.x ? s.x : o.x, h = n.y < s.y ? n.y < o.y ? n.y : o.y : s.y < o.y ? s.y : o.y, l = n.x > s.x ? n.x > o.x ? n.x : o.x : s.x > o.x ? s.x : o.x, u = n.y > s.y ? n.y > o.y ? n.y : o.y : s.y > o.y ? s.y : o.y, c = v(a, h, e, i, r), p = v(l, u, e, i, r), d = t.nextZ; d && d.z <= p;) {
                                if (d !== t.prev && d !== t.next && m(n.x, n.y, s.x, s.y, o.x, o.y, d.x, d.y) && $(d.prev, d, d.next) >= 0) return !1;
                                d = d.nextZ
                            }
                            for (d = t.prevZ; d && d.z >= c;) {
                                if (d !== t.prev && d !== t.next && m(n.x, n.y, s.x, s.y, o.x, o.y, d.x, d.y) && $(d.prev, d, d.next) >= 0) return !1;
                                d = d.prevZ
                            }
                            return !0
                        }

                        function l(t, e, i) {
                            var r = t;
                            do {
                                var n = r.prev,
                                    s = r.next.next;
                                !T(n, s) && b(n, r, r.next, s) && E(n, s) && E(s, n) && (e.push(n.i / i), e.push(r.i / i), e.push(s.i / i), A(r), A(r.next), r = t = s), r = r.next
                            } while (r !== t);
                            return r
                        }

                        function u(t, e, i, r, n, a) {
                            var h = t;
                            do {
                                for (var l = h.next.next; l !== h.prev;) {
                                    if (h.i !== l.i && x(h, l)) {
                                        var u = P(h, l);
                                        return h = s(h, h.next), u = s(u, u.next), o(h, e, i, r, n, a), void o(u, e, i, r, n, a)
                                    }
                                    l = l.next
                                }
                                h = h.next
                            } while (h !== t)
                        }

                        function c(t, e, i, r) {
                            var o, a, h, l, u, c = [];
                            for (o = 0, a = e.length; o < a; o++) h = e[o] * r, l = o < a - 1 ? e[o + 1] * r : t.length, u = n(t, h, l, r, !1), u === u.next && (u.steiner = !0), c.push(y(u));
                            for (c.sort(p), o = 0; o < c.length; o++) d(c[o], i), i = s(i, i.next);
                            return i
                        }

                        function p(t, e) {
                            return t.x - e.x
                        }

                        function d(t, e) {
                            if (e = f(t, e)) {
                                var i = P(e, t);
                                s(i, i.next)
                            }
                        }

                        function f(t, e) {
                            var i, r = e,
                                n = t.x,
                                s = t.y,
                                o = -(1 / 0);
                            do {
                                if (s <= r.y && s >= r.next.y) {
                                    var a = r.x + (s - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                    if (a <= n && a > o) {
                                        if (o = a, a === n) {
                                            if (s === r.y) return r;
                                            if (s === r.next.y) return r.next
                                        }
                                        i = r.x < r.next.x ? r : r.next
                                    }
                                }
                                r = r.next
                            } while (r !== e);
                            if (!i) return null;
                            if (n === o) return i.prev;
                            var h, l = i,
                                u = i.x,
                                c = i.y,
                                p = 1 / 0;
                            for (r = i.next; r !== l;) n >= r.x && r.x >= u && m(s < c ? n : o, s, u, c, s < c ? o : n, s, r.x, r.y) && (h = Math.abs(s - r.y) / (n - r.x), (h < p || h === p && r.x > i.x) && E(r, t) && (i = r, p = h)), r = r.next;
                            return i
                        }

                        function _(t, e, i, r) {
                            var n = t;
                            do null === n.z && (n.z = v(n.x, n.y, e, i, r)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next; while (n !== t);
                            n.prevZ.nextZ = null, n.prevZ = null, g(n)
                        }

                        function g(t) {
                            var e, i, r, n, s, o, a, h, l = 1;
                            do {
                                for (i = t, t = null, s = null, o = 0; i;) {
                                    for (o++, r = i, a = 0, e = 0; e < l && (a++, r = r.nextZ); e++);
                                    for (h = l; a > 0 || h > 0 && r;) 0 === a ? (n = r, r = r.nextZ, h--) : 0 !== h && r ? i.z <= r.z ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--) : (n = i, i = i.nextZ, a--), s ? s.nextZ = n : t = n, n.prevZ = s, s = n;
                                    i = r
                                }
                                s.nextZ = null, l *= 2
                            } while (o > 1);
                            return t
                        }

                        function v(t, e, i, r, n) {
                            return t = 32767 * (t - i) / n, e = 32767 * (e - r) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
                        }

                        function y(t) {
                            var e = t,
                                i = t;
                            do e.x < i.x && (i = e), e = e.next; while (e !== t);
                            return i
                        }

                        function m(t, e, i, r, n, s, o, a) {
                            return (n - o) * (e - a) - (t - o) * (s - a) >= 0 && (t - o) * (r - a) - (i - o) * (e - a) >= 0 && (i - o) * (s - a) - (n - o) * (r - a) >= 0
                        }

                        function x(t, e) {
                            return t.next.i !== e.i && t.prev.i !== e.i && !S(t, e) && E(t, e) && E(e, t) && w(t, e)
                        }

                        function $(t, e, i) {
                            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
                        }

                        function T(t, e) {
                            return t.x === e.x && t.y === e.y
                        }

                        function b(t, e, i, r) {
                            return !!(T(t, e) && T(i, r) || T(t, r) && T(i, e)) || $(t, e, i) > 0 != $(t, e, r) > 0 && $(i, r, t) > 0 != $(i, r, e) > 0
                        }

                        function S(t, e) {
                            var i = t;
                            do {
                                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && b(i, i.next, t, e)) return !0;
                                i = i.next
                            } while (i !== t);
                            return !1
                        }

                        function E(t, e) {
                            return $(t.prev, t, t.next) < 0 ? $(t, e, t.next) >= 0 && $(t, t.prev, e) >= 0 : $(t, e, t.prev) < 0 || $(t, t.next, e) < 0
                        }

                        function w(t, e) {
                            var i = t,
                                r = !1,
                                n = (t.x + e.x) / 2,
                                s = (t.y + e.y) / 2;
                            do i.y > s != i.next.y > s && n < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next; while (i !== t);
                            return r
                        }

                        function P(t, e) {
                            var i = new L(t.i, t.x, t.y),
                                r = new L(e.i, e.x, e.y),
                                n = t.next,
                                s = e.prev;
                            return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, s.next = r, r.prev = s, r
                        }

                        function M(t, e, i, r) {
                            var n = new L(t, e, i);
                            return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, n.next = n), n
                        }

                        function A(t) {
                            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
                        }

                        function L(t, e, i) {
                            this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
                        }

                        function D(t, e, i, r) {
                            for (var n = 0, s = e, o = i - r; s < i; s += r) n += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s;
                            return n
                        }
                        e.exports = r, r.deviation = function(t, e, i, r) {
                            var n = e && e.length,
                                s = n ? e[0] * i : t.length,
                                o = Math.abs(D(t, 0, s, i));
                            if (n)
                                for (var a = 0, h = e.length; a < h; a++) {
                                    var l = e[a] * i,
                                        u = a < h - 1 ? e[a + 1] * i : t.length;
                                    o -= Math.abs(D(t, l, u, i))
                                }
                            var c = 0;
                            for (a = 0; a < r.length; a += 3) {
                                var p = r[a] * i,
                                    d = r[a + 1] * i,
                                    f = r[a + 2] * i;
                                c += Math.abs((t[p] - t[f]) * (t[d + 1] - t[p + 1]) - (t[p] - t[d]) * (t[f + 1] - t[p + 1]))
                            }
                            return 0 === o && 0 === c ? 0 : Math.abs((c - o) / o)
                        }, r.flatten = function(t) {
                            for (var e = t[0][0].length, i = {
                                    vertices: [],
                                    holes: [],
                                    dimensions: e
                                }, r = 0, n = 0; n < t.length; n++) {
                                for (var s = 0; s < t[n].length; s++)
                                    for (var o = 0; o < e; o++) i.vertices.push(t[n][s][o]);
                                n > 0 && (r += t[n - 1].length, i.holes.push(r))
                            }
                            return i
                        }
                    }, {}],
                    3: [function(t, e, i) {
                        "use strict";

                        function r(t, e, i) {
                            this.fn = t, this.context = e, this.once = i || !1
                        }

                        function n() {}
                        var s = Object.prototype.hasOwnProperty,
                            o = "function" != typeof Object.create && "~";
                        n.prototype._events = void 0, n.prototype.eventNames = function() {
                            var t, e = this._events,
                                i = [];
                            if (!e) return i;
                            for (t in e) s.call(e, t) && i.push(o ? t.slice(1) : t);
                            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                        }, n.prototype.listeners = function(t, e) {
                            var i = o ? o + t : t,
                                r = this._events && this._events[i];
                            if (e) return !!r;
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var n = 0, s = r.length, a = new Array(s); n < s; n++) a[n] = r[n].fn;
                            return a
                        }, n.prototype.emit = function(t, e, i, r, n, s) {
                            var a = o ? o + t : t;
                            if (!this._events || !this._events[a]) return !1;
                            var h, l, u = this._events[a],
                                c = arguments.length;
                            if ("function" == typeof u.fn) {
                                switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                                    case 1:
                                        return u.fn.call(u.context), !0;
                                    case 2:
                                        return u.fn.call(u.context, e), !0;
                                    case 3:
                                        return u.fn.call(u.context, e, i), !0;
                                    case 4:
                                        return u.fn.call(u.context, e, i, r), !0;
                                    case 5:
                                        return u.fn.call(u.context, e, i, r, n), !0;
                                    case 6:
                                        return u.fn.call(u.context, e, i, r, n, s), !0
                                }
                                for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
                                u.fn.apply(u.context, h)
                            } else {
                                var p, d = u.length;
                                for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
                                    case 1:
                                        u[l].fn.call(u[l].context);
                                        break;
                                    case 2:
                                        u[l].fn.call(u[l].context, e);
                                        break;
                                    case 3:
                                        u[l].fn.call(u[l].context, e, i);
                                        break;
                                    default:
                                        if (!h)
                                            for (p = 1, h = new Array(c - 1); p < c; p++) h[p - 1] = arguments[p];
                                        u[l].fn.apply(u[l].context, h)
                                }
                            }
                            return !0
                        }, n.prototype.on = function(t, e, i) {
                            var n = new r(e, i || this),
                                s = o ? o + t : t;
                            return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
                        }, n.prototype.once = function(t, e, i) {
                            var n = new r(e, i || this, (!0)),
                                s = o ? o + t : t;
                            return this._events || (this._events = o ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n, this
                        }, n.prototype.removeListener = function(t, e, i, r) {
                            var n = o ? o + t : t;
                            if (!this._events || !this._events[n]) return this;
                            var s = this._events[n],
                                a = [];
                            if (e)
                                if (s.fn)(s.fn !== e || r && !s.once || i && s.context !== i) && a.push(s);
                                else
                                    for (var h = 0, l = s.length; h < l; h++)(s[h].fn !== e || r && !s[h].once || i && s[h].context !== i) && a.push(s[h]);
                            return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n], this
                        }, n.prototype.removeAllListeners = function(t) {
                            return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null), this) : this
                        }, n.prototype.off = n.prototype.removeListener, n.prototype.addListener = n.prototype.on, n.prototype.setMaxListeners = function() {
                            return this
                        }, n.prefixed = o, "undefined" != typeof e && (e.exports = n)
                    }, {}],
                    4: [function(e, i, r) {
                        ! function(e) {
                            var r = /iPhone/i,
                                n = /iPod/i,
                                s = /iPad/i,
                                o = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                                a = /Android/i,
                                h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                                l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                                u = /IEMobile/i,
                                c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                                p = /BlackBerry/i,
                                d = /BB10/i,
                                f = /Opera Mini/i,
                                _ = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                                g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                                v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
                                y = function(t, e) {
                                    return t.test(e)
                                },
                                m = function(t) {
                                    var e = t || navigator.userAgent,
                                        i = e.split("[FBAN");
                                    if ("undefined" != typeof i[1] && (e = i[0]), i = e.split("Twitter"), "undefined" != typeof i[1] && (e = i[0]), this.apple = {
                                            phone: y(r, e),
                                            ipod: y(n, e),
                                            tablet: !y(r, e) && y(s, e),
                                            device: y(r, e) || y(n, e) || y(s, e)
                                        }, this.amazon = {
                                            phone: y(h, e),
                                            tablet: !y(h, e) && y(l, e),
                                            device: y(h, e) || y(l, e)
                                        }, this.android = {
                                            phone: y(h, e) || y(o, e),
                                            tablet: !y(h, e) && !y(o, e) && (y(l, e) || y(a, e)),
                                            device: y(h, e) || y(l, e) || y(o, e) || y(a, e)
                                        }, this.windows = {
                                            phone: y(u, e),
                                            tablet: y(c, e),
                                            device: y(u, e) || y(c, e)
                                        }, this.other = {
                                            blackberry: y(p, e),
                                            blackberry10: y(d, e),
                                            opera: y(f, e),
                                            firefox: y(g, e),
                                            chrome: y(_, e),
                                            device: y(p, e) || y(d, e) || y(f, e) || y(g, e) || y(_, e)
                                        }, this.seven_inch = y(v, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
                                },
                                x = function() {
                                    var t = new m;
                                    return t.Class = m, t
                                };
                            "undefined" != typeof i && i.exports && "undefined" == typeof window ? i.exports = m : "undefined" != typeof i && i.exports && "undefined" != typeof window ? i.exports = x() : "function" == typeof t && t.amd ? t("isMobile", [], e.isMobile = x()) : e.isMobile = x()
                        }(this)
                    }, {}],
                    5: [function(t, e, i) {
                        "use strict";

                        function r(t) {
                            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(t)
                        }

                        function n() {
                            try {
                                if (!Object.assign) return !1;
                                var t = new String("abc");
                                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                                var r = Object.getOwnPropertyNames(e).map(function(t) {
                                    return e[t]
                                });
                                if ("0123456789" !== r.join("")) return !1;
                                var n = {};
                                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                                    n[t] = t
                                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                            } catch (t) {
                                return !1
                            }
                        }
                        var s = Object.prototype.hasOwnProperty,
                            o = Object.prototype.propertyIsEnumerable;
                        e.exports = n() ? Object.assign : function(t, e) {
                            for (var i, n, a = r(t), h = 1; h < arguments.length; h++) {
                                i = Object(arguments[h]);
                                for (var l in i) s.call(i, l) && (a[l] = i[l]);
                                if (Object.getOwnPropertySymbols) {
                                    n = Object.getOwnPropertySymbols(i);
                                    for (var u = 0; u < n.length; u++) o.call(i, n[u]) && (a[n[u]] = i[n[u]])
                                }
                            }
                            return a
                        }
                    }, {}],
                    6: [function(t, e, i) {
                        var r = new ArrayBuffer(0),
                            n = function(t, e, i, n) {
                                this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = n || t.STATIC_DRAW, this.data = r, i && this.upload(i)
                            };
                        n.prototype.upload = function(t, e, i) {
                            i || this.bind();
                            var r = this.gl;
                            t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? r.bufferSubData(this.type, e, t) : r.bufferData(this.type, t, this.drawType), this.data = t
                        }, n.prototype.bind = function() {
                            var t = this.gl;
                            t.bindBuffer(this.type, this.buffer)
                        }, n.createVertexBuffer = function(t, e, i) {
                            return new n(t, t.ARRAY_BUFFER, e, i)
                        }, n.createIndexBuffer = function(t, e, i) {
                            return new n(t, t.ELEMENT_ARRAY_BUFFER, e, i)
                        }, n.create = function(t, e, i, r) {
                            return new n(t, e, r)
                        }, n.prototype.destroy = function() {
                            this.gl.deleteBuffer(this.buffer)
                        }, e.exports = n
                    }, {}],
                    7: [function(t, e, i) {
                        var r = t("./GLTexture"),
                            n = function(t, e, i) {
                                this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = i || 100
                            };
                        n.prototype.enableTexture = function(t) {
                            var e = this.gl;
                            this.texture = t || new r(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
                        }, n.prototype.enableStencil = function() {
                            if (!this.stencil) {
                                var t = this.gl;
                                this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
                            }
                        }, n.prototype.clear = function(t, e, i, r) {
                            this.bind();
                            var n = this.gl;
                            n.clearColor(t, e, i, r), n.clear(n.COLOR_BUFFER_BIT)
                        }, n.prototype.bind = function() {
                            var t = this.gl;
                            this.texture && this.texture.unbind(), t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
                        }, n.prototype.unbind = function() {
                            var t = this.gl;
                            t.bindFramebuffer(t.FRAMEBUFFER, null)
                        }, n.prototype.resize = function(t, e) {
                            var i = this.gl;
                            this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencil), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e))
                        }, n.prototype.destroy = function() {
                            var t = this.gl;
                            this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
                        }, n.createRGBA = function(t, e, i) {
                            var s = r.fromData(t, null, e, i);
                            s.enableNearestScaling(), s.enableWrapClamp();
                            var o = new n(t, e, i);
                            return o.enableTexture(s), o.unbind(), o
                        }, n.createFloat32 = function(t, e, i, s) {
                            var o = new r.fromData(t, s, e, i);
                            o.enableNearestScaling(), o.enableWrapClamp();
                            var a = new n(t, e, i);
                            return a.enableTexture(o), a.unbind(), a
                        }, e.exports = n
                    }, {
                        "./GLTexture": 9
                    }],
                    8: [function(t, e, i) {
                        var r = t("./shader/compileProgram"),
                            n = t("./shader/extractAttributes"),
                            s = t("./shader/extractUniforms"),
                            o = t("./shader/generateUniformAccessObject"),
                            a = function(t, e, i) {
                                this.gl = t, this.program = r(t, e, i), this.attributes = n(t, this.program);
                                var a = s(t, this.program);
                                this.uniforms = o(t, a)
                            };
                        a.prototype.bind = function() {
                            this.gl.useProgram(this.program)
                        }, a.prototype.destroy = function() {}, e.exports = a
                    }, {
                        "./shader/compileProgram": 14,
                        "./shader/extractAttributes": 16,
                        "./shader/extractUniforms": 17,
                        "./shader/generateUniformAccessObject": 18
                    }],
                    9: [function(t, e, i) {
                        var r = function(t, e, i, r, n) {
                            this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || 0, this.height = i || 0, this.format = r || t.RGBA, this.type = n || t.UNSIGNED_BYTE
                        };
                        r.prototype.upload = function(t) {
                            this.bind();
                            var e = this.gl;
                            this.width = t.videoWidth || t.width, this.height = t.videoHeight || t.height, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t)
                        };
                        var n = !1;
                        r.prototype.uploadData = function(t, e, i) {
                            this.bind();
                            var r = this.gl;
                            if (this.width = e || this.width, this.height = i || this.height, t instanceof Float32Array) {
                                if (!n) {
                                    var s = r.getExtension("OES_texture_float");
                                    if (!s) throw new Error("floating point textures not available");
                                    n = !0
                                }
                                this.type = r.FLOAT
                            } else this.type = r.UNSIGNED_BYTE;
                            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), r.texImage2D(r.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, t || null)
                        }, r.prototype.bind = function(t) {
                            var e = this.gl;
                            void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
                        }, r.prototype.unbind = function() {
                            var t = this.gl;
                            t.bindTexture(t.TEXTURE_2D, null)
                        }, r.prototype.minFilter = function(t) {
                            var e = this.gl;
                            this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
                        }, r.prototype.magFilter = function(t) {
                            var e = this.gl;
                            this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
                        }, r.prototype.enableMipmap = function() {
                            var t = this.gl;
                            this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
                        }, r.prototype.enableLinearScaling = function() {
                            this.minFilter(!0), this.magFilter(!0)
                        }, r.prototype.enableNearestScaling = function() {
                            this.minFilter(!1), this.magFilter(!1)
                        }, r.prototype.enableWrapClamp = function() {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
                        }, r.prototype.enableWrapRepeat = function() {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
                        }, r.prototype.enableWrapMirrorRepeat = function() {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
                        }, r.prototype.destroy = function() {
                            var t = this.gl;
                            t.deleteTexture(this.texture)
                        }, r.fromSource = function(t, e, i) {
                            var n = new r(t);
                            return n.premultiplyAlpha = i || !1, n.upload(e), n
                        }, r.fromData = function(t, e, i, n) {
                            var s = new r(t);
                            return s.uploadData(e, i, n), s
                        }, e.exports = r
                    }, {}],
                    10: [function(t, e, i) {
                        function r(t, e) {
                            if (this.nativeVaoExtension = null, r.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
                                this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                                var i = t.getParameter(t.MAX_VERTEX_ATTRIBS);
                                this.nativeState = {
                                    tempAttribState: new Array(i),
                                    attribState: new Array(i)
                                }
                            }
                            this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
                        }
                        var n = t("./setVertexAttribArrays");
                        r.prototype.constructor = r, e.exports = r, r.FORCE_NATIVE = !1, r.prototype.bind = function() {
                            return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
                        }, r.prototype.unbind = function() {
                            return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
                        }, r.prototype.activate = function() {
                            for (var t = this.gl, e = null, i = 0; i < this.attributes.length; i++) {
                                var r = this.attributes[i];
                                e !== r.buffer && (r.buffer.bind(), e = r.buffer), t.vertexAttribPointer(r.attribute.location, r.attribute.size, r.type || t.FLOAT, r.normalized || !1, r.stride || 0, r.start || 0)
                            }
                            return n(t, this.attributes, this.nativeState), this.indexBuffer.bind(), this
                        }, r.prototype.addAttribute = function(t, e, i, r, n, s) {
                            return this.attributes.push({
                                buffer: t,
                                attribute: e,
                                location: e.location,
                                type: i || this.gl.FLOAT,
                                normalized: r || !1,
                                stride: n || 0,
                                start: s || 0
                            }), this.dirty = !0, this
                        }, r.prototype.addIndex = function(t) {
                            return this.indexBuffer = t, this.dirty = !0, this
                        }, r.prototype.clear = function() {
                            return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
                        }, r.prototype.draw = function(t, e, i) {
                            var r = this.gl;
                            return r.drawElements(t, e, r.UNSIGNED_SHORT, i || 0), this
                        }, r.prototype.destroy = function() {
                            this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
                        }
                    }, {
                        "./setVertexAttribArrays": 13
                    }],
                    11: [function(t, e, i) {
                        var r = function(t, e) {
                            var i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                            if (!i) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                            return i
                        };
                        e.exports = r
                    }, {}],
                    12: [function(t, e, i) {
                        var r = {
                            createContext: t("./createContext"),
                            setVertexAttribArrays: t("./setVertexAttribArrays"),
                            GLBuffer: t("./GLBuffer"),
                            GLFramebuffer: t("./GLFramebuffer"),
                            GLShader: t("./GLShader"),
                            GLTexture: t("./GLTexture"),
                            VertexArrayObject: t("./VertexArrayObject"),
                            shader: t("./shader")
                        };
                        "undefined" != typeof e && e.exports && (e.exports = r), "undefined" != typeof window && (window.pixi = {
                            gl: r
                        })
                    }, {
                        "./GLBuffer": 6,
                        "./GLFramebuffer": 7,
                        "./GLShader": 8,
                        "./GLTexture": 9,
                        "./VertexArrayObject": 10,
                        "./createContext": 11,
                        "./setVertexAttribArrays": 13,
                        "./shader": 19
                    }],
                    13: [function(t, e, i) {
                        var r = function(t, e, i) {
                            var r;
                            if (i) {
                                var n = i.tempAttribState,
                                    s = i.attribState;
                                for (r = 0; r < n.length; r++) n[r] = !1;
                                for (r = 0; r < e.length; r++) n[e[r].attribute.location] = !0;
                                for (r = 0; r < s.length; r++) s[r] !== n[r] && (s[r] = n[r], i.attribState[r] ? t.enableVertexAttribArray(r) : t.disableVertexAttribArray(r))
                            } else
                                for (r = 0; r < e.length; r++) {
                                    var o = e[r];
                                    t.enableVertexAttribArray(o.attribute.location)
                                }
                        };
                        e.exports = r
                    }, {}],
                    14: [function(t, e, i) {
                        var r = function(t, e, i) {
                                var r = n(t, t.VERTEX_SHADER, e),
                                    s = n(t, t.FRAGMENT_SHADER, i),
                                    o = t.createProgram();
                                return t.attachShader(o, r), t.attachShader(o, s), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(o, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(o) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(o)), t.deleteProgram(o), o = null), t.deleteShader(r), t.deleteShader(s), o
                            },
                            n = function(t, e, i) {
                                var r = t.createShader(e);
                                return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.log(t.getShaderInfoLog(r)), null)
                            };
                        e.exports = r
                    }, {}],
                    15: [function(t, e, i) {
                        var r = function(t, e) {
                                switch (t) {
                                    case "float":
                                        return 0;
                                    case "vec2":
                                        return new Float32Array(2 * e);
                                    case "vec3":
                                        return new Float32Array(3 * e);
                                    case "vec4":
                                        return new Float32Array(4 * e);
                                    case "int":
                                    case "sampler2D":
                                        return 0;
                                    case "ivec2":
                                        return new Int32Array(2 * e);
                                    case "ivec3":
                                        return new Int32Array(3 * e);
                                    case "ivec4":
                                        return new Int32Array(4 * e);
                                    case "bool":
                                        return !1;
                                    case "bvec2":
                                        return n(2 * e);
                                    case "bvec3":
                                        return n(3 * e);
                                    case "bvec4":
                                        return n(4 * e);
                                    case "mat2":
                                        return new Float32Array([1, 0, 0, 1]);
                                    case "mat3":
                                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                                    case "mat4":
                                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                                }
                            },
                            n = function(t) {
                                for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
                                return e
                            };
                        e.exports = r
                    }, {}],
                    16: [function(t, e, i) {
                        var r = t("./mapType"),
                            n = t("./mapSize"),
                            s = function(t, e) {
                                for (var i = {}, s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < s; a++) {
                                    var h = t.getActiveAttrib(e, a),
                                        l = r(t, h.type);
                                    i[h.name] = {
                                        type: l,
                                        size: n(l),
                                        location: t.getAttribLocation(e, h.name),
                                        pointer: o
                                    }
                                }
                                return i
                            },
                            o = function(t, e, i, r) {
                                gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, i || 0, r || 0)
                            };
                        e.exports = s
                    }, {
                        "./mapSize": 20,
                        "./mapType": 21
                    }],
                    17: [function(t, e, i) {
                        var r = t("./mapType"),
                            n = t("./defaultValue"),
                            s = function(t, e) {
                                for (var i = {}, s = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), o = 0; o < s; o++) {
                                    var a = t.getActiveUniform(e, o),
                                        h = a.name.replace(/\[.*?\]/, ""),
                                        l = r(t, a.type);
                                    i[h] = {
                                        type: l,
                                        size: a.size,
                                        location: t.getUniformLocation(e, h),
                                        value: n(l, a.size)
                                    }
                                }
                                return i
                            };
                        e.exports = s
                    }, {
                        "./defaultValue": 15,
                        "./mapType": 21
                    }],
                    18: [function(t, e, i) {
                        var r = function(t, e) {
                                var i = {
                                    data: {}
                                };
                                i.gl = t;
                                for (var r = Object.keys(e), a = 0; a < r.length; a++) {
                                    var h = r[a],
                                        l = h.split("."),
                                        u = l[l.length - 1],
                                        c = o(l, i),
                                        p = e[h];
                                    c.data[u] = p, c.gl = t, Object.defineProperty(c, u, {
                                        get: n(u),
                                        set: s(u, p)
                                    })
                                }
                                return i
                            },
                            n = function(t) {
                                var e = a.replace("%%", t);
                                return new Function(e)
                            },
                            s = function(t, e) {
                                var i, r = h.replace(/%%/g, t);
                                return i = 1 === e.size ? l[e.type] : u[e.type], i && (r += "\nthis.gl." + i + ";"), new Function("value", r)
                            },
                            o = function(t, e) {
                                for (var i = e, r = 0; r < t.length - 1; r++) {
                                    var n = i[t[r]] || {
                                        data: {}
                                    };
                                    i[t[r]] = n, i = n
                                }
                                return i
                            },
                            a = ["return this.data.%%.value;"].join("\n"),
                            h = ["this.data.%%.value = value;", "var location = this.data.%%.location;"].join("\n"),
                            l = {
                                "float": "uniform1f(location, value)",
                                vec2: "uniform2f(location, value[0], value[1])",
                                vec3: "uniform3f(location, value[0], value[1], value[2])",
                                vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                                "int": "uniform1i(location, value)",
                                ivec2: "uniform2i(location, value[0], value[1])",
                                ivec3: "uniform3i(location, value[0], value[1], value[2])",
                                ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                                bool: "uniform1i(location, value)",
                                bvec2: "uniform2i(location, value[0], value[1])",
                                bvec3: "uniform3i(location, value[0], value[1], value[2])",
                                bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                                mat2: "uniformMatrix2fv(location, false, value)",
                                mat3: "uniformMatrix3fv(location, false, value)",
                                mat4: "uniformMatrix4fv(location, false, value)",
                                sampler2D: "uniform1i(location, value)"
                            },
                            u = {
                                "float": "uniform1fv(location, value)",
                                vec2: "uniform2fv(location, value)",
                                vec3: "uniform3fv(location, value)",
                                vec4: "uniform4fv(location, value)",
                                "int": "uniform1iv(location, value)",
                                ivec2: "uniform2iv(location, value)",
                                ivec3: "uniform3iv(location, value)",
                                ivec4: "uniform4iv(location, value)",
                                bool: "uniform1iv(location, value)",
                                bvec2: "uniform2iv(location, value)",
                                bvec3: "uniform3iv(location, value)",
                                bvec4: "uniform4iv(location, value)",
                                sampler2D: "uniform1iv(location, value)"
                            };
                        e.exports = r
                    }, {}],
                    19: [function(t, e, i) {
                        e.exports = {
                            compileProgram: t("./compileProgram"),
                            defaultValue: t("./defaultValue"),
                            extractAttributes: t("./extractAttributes"),
                            extractUniforms: t("./extractUniforms"),
                            generateUniformAccessObject: t("./generateUniformAccessObject"),
                            mapSize: t("./mapSize"),
                            mapType: t("./mapType")
                        }
                    }, {
                        "./compileProgram": 14,
                        "./defaultValue": 15,
                        "./extractAttributes": 16,
                        "./extractUniforms": 17,
                        "./generateUniformAccessObject": 18,
                        "./mapSize": 20,
                        "./mapType": 21
                    }],
                    20: [function(t, e, i) {
                        var r = function(t) {
                                return n[t]
                            },
                            n = {
                                "float": 1,
                                vec2: 2,
                                vec3: 3,
                                vec4: 4,
                                "int": 1,
                                ivec2: 2,
                                ivec3: 3,
                                ivec4: 4,
                                bool: 1,
                                bvec2: 2,
                                bvec3: 3,
                                bvec4: 4,
                                mat2: 4,
                                mat3: 9,
                                mat4: 16,
                                sampler2D: 1
                            };
                        e.exports = r
                    }, {}],
                    21: [function(t, e, i) {
                        var r = function(t, e) {
                                if (!n) {
                                    var i = Object.keys(s);
                                    n = {};
                                    for (var r = 0; r < i.length; ++r) {
                                        var o = i[r];
                                        n[t[o]] = s[o]
                                    }
                                }
                                return n[e]
                            },
                            n = null,
                            s = {
                                FLOAT: "float",
                                FLOAT_VEC2: "vec2",
                                FLOAT_VEC3: "vec3",
                                FLOAT_VEC4: "vec4",
                                INT: "int",
                                INT_VEC2: "ivec2",
                                INT_VEC3: "ivec3",
                                INT_VEC4: "ivec4",
                                BOOL: "bool",
                                BOOL_VEC2: "bvec2",
                                BOOL_VEC3: "bvec3",
                                BOOL_VEC4: "bvec4",
                                FLOAT_MAT2: "mat2",
                                FLOAT_MAT3: "mat3",
                                FLOAT_MAT4: "mat4",
                                SAMPLER_2D: "sampler2D"
                            };
                        e.exports = r
                    }, {}],
                    22: [function(t, e, i) {
                        (function(t) {
                            function e(t, e) {
                                for (var i = 0, r = t.length - 1; r >= 0; r--) {
                                    var n = t[r];
                                    "." === n ? t.splice(r, 1) : ".." === n ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), i--)
                                }
                                if (e)
                                    for (; i--; i) t.unshift("..");
                                return t
                            }

                            function r(t, e) {
                                if (t.filter) return t.filter(e);
                                for (var i = [], r = 0; r < t.length; r++) e(t[r], r, t) && i.push(t[r]);
                                return i
                            }
                            var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                                s = function(t) {
                                    return n.exec(t).slice(1)
                                };
                            i.resolve = function() {
                                for (var i = "", n = !1, s = arguments.length - 1; s >= -1 && !n; s--) {
                                    var o = s >= 0 ? arguments[s] : t.cwd();
                                    if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                                    o && (i = o + "/" + i, n = "/" === o.charAt(0))
                                }
                                return i = e(r(i.split("/"), function(t) {
                                    return !!t
                                }), !n).join("/"), (n ? "/" : "") + i || "."
                            }, i.normalize = function(t) {
                                var n = i.isAbsolute(t),
                                    s = "/" === o(t, -1);
                                return t = e(r(t.split("/"), function(t) {
                                    return !!t
                                }), !n).join("/"), t || n || (t = "."), t && s && (t += "/"), (n ? "/" : "") + t
                            }, i.isAbsolute = function(t) {
                                return "/" === t.charAt(0)
                            }, i.join = function() {
                                var t = Array.prototype.slice.call(arguments, 0);
                                return i.normalize(r(t, function(t, e) {
                                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                                    return t
                                }).join("/"))
                            }, i.relative = function(t, e) {
                                function r(t) {
                                    for (var e = 0; e < t.length && "" === t[e]; e++);
                                    for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                                    return e > i ? [] : t.slice(e, i - e + 1)
                                }
                                t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                                for (var n = r(t.split("/")), s = r(e.split("/")), o = Math.min(n.length, s.length), a = o, h = 0; h < o; h++)
                                    if (n[h] !== s[h]) {
                                        a = h;
                                        break
                                    }
                                for (var l = [], h = a; h < n.length; h++) l.push("..");
                                return l = l.concat(s.slice(a)), l.join("/")
                            }, i.sep = "/", i.delimiter = ":", i.dirname = function(t) {
                                var e = s(t),
                                    i = e[0],
                                    r = e[1];
                                return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : "."
                            }, i.basename = function(t, e) {
                                var i = s(t)[2];
                                return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                            }, i.extname = function(t) {
                                return s(t)[3]
                            };
                            var o = "b" === "ab".substr(-1) ? function(t, e, i) {
                                return t.substr(e, i)
                            } : function(t, e, i) {
                                return e < 0 && (e = t.length + e), t.substr(e, i)
                            }
                        }).call(this, t("_process"))
                    }, {
                        _process: 23
                    }],
                    23: [function(t, e, i) {
                        function r() {
                            throw new Error("setTimeout has not been defined")
                        }

                        function n() {
                            throw new Error("clearTimeout has not been defined")
                        }

                        function s(t) {
                            if (c === setTimeout) return setTimeout(t, 0);
                            if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
                            try {
                                return c(t, 0)
                            } catch (e) {
                                try {
                                    return c.call(null, t, 0)
                                } catch (e) {
                                    return c.call(this, t, 0)
                                }
                            }
                        }

                        function o(t) {
                            if (p === clearTimeout) return clearTimeout(t);
                            if ((p === n || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
                            try {
                                return p(t)
                            } catch (e) {
                                try {
                                    return p.call(null, t)
                                } catch (e) {
                                    return p.call(this, t)
                                }
                            }
                        }

                        function a() {
                            g && f && (g = !1, f.length ? _ = f.concat(_) : v = -1, _.length && h())
                        }

                        function h() {
                            if (!g) {
                                var t = s(a);
                                g = !0;
                                for (var e = _.length; e;) {
                                    for (f = _, _ = []; ++v < e;) f && f[v].run();
                                    v = -1, e = _.length
                                }
                                f = null, g = !1, o(t)
                            }
                        }

                        function l(t, e) {
                            this.fun = t, this.array = e
                        }

                        function u() {}
                        var c, p, d = e.exports = {};
                        ! function() {
                            try {
                                c = "function" == typeof setTimeout ? setTimeout : r
                            } catch (t) {
                                c = r
                            }
                            try {
                                p = "function" == typeof clearTimeout ? clearTimeout : n
                            } catch (t) {
                                p = n
                            }
                        }();
                        var f, _ = [],
                            g = !1,
                            v = -1;
                        d.nextTick = function(t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                            _.push(new l(t, e)), 1 !== _.length || g || s(h)
                        }, l.prototype.run = function() {
                            this.fun.apply(null, this.array)
                        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function(t) {
                            throw new Error("process.binding is not supported")
                        }, d.cwd = function() {
                            return "/"
                        }, d.chdir = function(t) {
                            throw new Error("process.chdir is not supported")
                        }, d.umask = function() {
                            return 0
                        }
                    }, {}],
                    24: [function(i, r, n) {
                        (function(e) {
                            ! function(i) {
                                function s(t) {
                                    throw new RangeError(C[t])
                                }

                                function o(t, e) {
                                    for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
                                    return r
                                }

                                function a(t, e) {
                                    var i = t.split("@"),
                                        r = "";
                                    i.length > 1 && (r = i[0] + "@", t = i[1]), t = t.replace(O, ".");
                                    var n = t.split("."),
                                        s = o(n, e).join(".");
                                    return r + s
                                }

                                function h(t) {
                                    for (var e, i, r = [], n = 0, s = t.length; n < s;) e = t.charCodeAt(n++), e >= 55296 && e <= 56319 && n < s ? (i = t.charCodeAt(n++), 56320 == (64512 & i) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--)) : r.push(e);
                                    return r
                                }

                                function l(t) {
                                    return o(t, function(t) {
                                        var e = "";
                                        return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t)
                                    }).join("")
                                }

                                function u(t) {
                                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b
                                }

                                function c(t, e) {
                                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                                }

                                function p(t, e, i) {
                                    var r = 0;
                                    for (t = i ? F(t / P) : t >> 1, t += F(t / e); t > I * E >> 1; r += b) t = F(t / I);
                                    return F(r + (I + 1) * t / (t + w))
                                }

                                function d(t) {
                                    var e, i, r, n, o, a, h, c, d, f, _ = [],
                                        g = t.length,
                                        v = 0,
                                        y = A,
                                        m = M;
                                    for (i = t.lastIndexOf(L), i < 0 && (i = 0), r = 0; r < i; ++r) t.charCodeAt(r) >= 128 && s("not-basic"), _.push(t.charCodeAt(r));
                                    for (n = i > 0 ? i + 1 : 0; n < g;) {
                                        for (o = v, a = 1, h = b; n >= g && s("invalid-input"), c = u(t.charCodeAt(n++)), (c >= b || c > F((T - v) / a)) && s("overflow"), v += c * a, d = h <= m ? S : h >= m + E ? E : h - m, !(c < d); h += b) f = b - d, a > F(T / f) && s("overflow"), a *= f;
                                        e = _.length + 1, m = p(v - o, e, 0 == o), F(v / e) > T - y && s("overflow"), y += F(v / e), v %= e, _.splice(v++, 0, y)
                                    }
                                    return l(_)
                                }

                                function f(t) {
                                    var e, i, r, n, o, a, l, u, d, f, _, g, v, y, m, x = [];
                                    for (t = h(t), g = t.length, e = A, i = 0, o = M, a = 0; a < g; ++a) _ = t[a], _ < 128 && x.push(N(_));
                                    for (r = n = x.length, n && x.push(L); r < g;) {
                                        for (l = T, a = 0; a < g; ++a) _ = t[a], _ >= e && _ < l && (l = _);
                                        for (v = r + 1, l - e > F((T - i) / v) && s("overflow"), i += (l - e) * v, e = l, a = 0; a < g; ++a)
                                            if (_ = t[a], _ < e && ++i > T && s("overflow"), _ == e) {
                                                for (u = i, d = b; f = d <= o ? S : d >= o + E ? E : d - o, !(u < f); d += b) m = u - f, y = b - f, x.push(N(c(f + m % y, 0))), u = F(m / y);
                                                x.push(N(c(u, 0))), o = p(i, v, r == n), i = 0, ++r
                                            }++i, ++e
                                    }
                                    return x.join("")
                                }

                                function _(t) {
                                    return a(t, function(t) {
                                        return D.test(t) ? d(t.slice(4).toLowerCase()) : t
                                    })
                                }

                                function g(t) {
                                    return a(t, function(t) {
                                        return R.test(t) ? "xn--" + f(t) : t
                                    })
                                }
                                var v = "object" == typeof n && n && !n.nodeType && n,
                                    y = "object" == typeof r && r && !r.nodeType && r,
                                    m = "object" == typeof e && e;
                                m.global !== m && m.window !== m && m.self !== m || (i = m);
                                var x, $, T = 2147483647,
                                    b = 36,
                                    S = 1,
                                    E = 26,
                                    w = 38,
                                    P = 700,
                                    M = 72,
                                    A = 128,
                                    L = "-",
                                    D = /^xn--/,
                                    R = /[^\x20-\x7E]/,
                                    O = /[\x2E\u3002\uFF0E\uFF61]/g,
                                    C = {
                                        overflow: "Overflow: input needs wider integers to process",
                                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                        "invalid-input": "Invalid input"
                                    },
                                    I = b - S,
                                    F = Math.floor,
                                    N = String.fromCharCode;
                                if (x = {
                                        version: "1.4.1",
                                        ucs2: {
                                            decode: h,
                                            encode: l
                                        },
                                        decode: d,
                                        encode: f,
                                        toASCII: g,
                                        toUnicode: _
                                    }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
                                    return x
                                });
                                else if (v && y)
                                    if (r.exports == v) y.exports = x;
                                    else
                                        for ($ in x) x.hasOwnProperty($) && (v[$] = x[$]);
                                else i.punycode = x
                            }(this)
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    25: [function(t, e, i) {
                        "use strict";

                        function r(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        e.exports = function(t, e, i, s) {
                            e = e || "&", i = i || "=";
                            var o = {};
                            if ("string" != typeof t || 0 === t.length) return o;
                            var a = /\+/g;
                            t = t.split(e);
                            var h = 1e3;
                            s && "number" == typeof s.maxKeys && (h = s.maxKeys);
                            var l = t.length;
                            h > 0 && l > h && (l = h);
                            for (var u = 0; u < l; ++u) {
                                var c, p, d, f, _ = t[u].replace(a, "%20"),
                                    g = _.indexOf(i);
                                g >= 0 ? (c = _.substr(0, g), p = _.substr(g + 1)) : (c = _, p = ""), d = decodeURIComponent(c), f = decodeURIComponent(p), r(o, d) ? n(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f
                            }
                            return o
                        };
                        var n = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                    }, {}],
                    26: [function(t, e, i) {
                        "use strict";

                        function r(t, e) {
                            if (t.map) return t.map(e);
                            for (var i = [], r = 0; r < t.length; r++) i.push(e(t[r], r));
                            return i
                        }
                        var n = function(t) {
                            switch (typeof t) {
                                case "string":
                                    return t;
                                case "boolean":
                                    return t ? "true" : "false";
                                case "number":
                                    return isFinite(t) ? t : "";
                                default:
                                    return ""
                            }
                        };
                        e.exports = function(t, e, i, a) {
                            return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? r(o(t), function(o) {
                                var a = encodeURIComponent(n(o)) + i;
                                return s(t[o]) ? r(t[o], function(t) {
                                    return a + encodeURIComponent(n(t))
                                }).join(e) : a + encodeURIComponent(n(t[o]))
                            }).join(e) : a ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(t)) : ""
                        };
                        var s = Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            },
                            o = Object.keys || function(t) {
                                var e = [];
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                                return e
                            }
                    }, {}],
                    27: [function(t, e, i) {
                        "use strict";
                        i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
                    }, {
                        "./decode": 25,
                        "./encode": 26
                    }],
                    28: [function(t, e, i) {
                        "use strict";

                        function r() {
                            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                        }

                        function n(t, e, i) {
                            if (t && l.isObject(t) && t instanceof r) return t;
                            var n = new r;
                            return n.parse(t, e, i), n
                        }

                        function s(t) {
                            return l.isString(t) && (t = n(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
                        }

                        function o(t, e) {
                            return n(t, !1, !0).resolve(e)
                        }

                        function a(t, e) {
                            return t ? n(t, !1, !0).resolveObject(e) : e
                        }
                        var h = t("punycode"),
                            l = t("./util");
                        i.parse = n, i.resolve = o, i.resolveObject = a, i.format = s, i.Url = r;
                        var u = /^([a-z0-9.+-]+:)/i,
                            c = /:[0-9]*$/,
                            p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                            d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
                            f = ["{", "}", "|", "\\", "^", "`"].concat(d),
                            _ = ["'"].concat(f),
                            g = ["%", "/", "?", ";", "#"].concat(_),
                            v = ["/", "?", "#"],
                            y = 255,
                            m = /^[+a-z0-9A-Z_-]{0,63}$/,
                            x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                            $ = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            T = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            b = {
                                http: !0,
                                https: !0,
                                ftp: !0,
                                gopher: !0,
                                file: !0,
                                "http:": !0,
                                "https:": !0,
                                "ftp:": !0,
                                "gopher:": !0,
                                "file:": !0
                            },
                            S = t("querystring");
                        r.prototype.parse = function(t, e, i) {
                            if (!l.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                            var r = t.indexOf("?"),
                                n = r !== -1 && r < t.indexOf("#") ? "?" : "#",
                                s = t.split(n),
                                o = /\\/g;
                            s[0] = s[0].replace(o, "/"), t = s.join(n);
                            var a = t;
                            if (a = a.trim(), !i && 1 === t.split("#").length) {
                                var c = p.exec(a);
                                if (c) return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], e ? this.query = S.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                            }
                            var d = u.exec(a);
                            if (d) {
                                d = d[0];
                                var f = d.toLowerCase();
                                this.protocol = f, a = a.substr(d.length)
                            }
                            if (i || d || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                                var E = "//" === a.substr(0, 2);
                                !E || d && T[d] || (a = a.substr(2), this.slashes = !0)
                            }
                            if (!T[d] && (E || d && !b[d])) {
                                for (var w = -1, P = 0; P < v.length; P++) {
                                    var M = a.indexOf(v[P]);
                                    M !== -1 && (w === -1 || M < w) && (w = M)
                                }
                                var A, L;
                                L = w === -1 ? a.lastIndexOf("@") : a.lastIndexOf("@", w), L !== -1 && (A = a.slice(0, L), a = a.slice(L + 1), this.auth = decodeURIComponent(A)), w = -1;
                                for (var P = 0; P < g.length; P++) {
                                    var M = a.indexOf(g[P]);
                                    M !== -1 && (w === -1 || M < w) && (w = M)
                                }
                                w === -1 && (w = a.length), this.host = a.slice(0, w), a = a.slice(w), this.parseHost(), this.hostname = this.hostname || "";
                                var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                                if (!D)
                                    for (var R = this.hostname.split(/\./), P = 0, O = R.length; P < O; P++) {
                                        var C = R[P];
                                        if (C && !C.match(m)) {
                                            for (var I = "", F = 0, N = C.length; F < N; F++) I += C.charCodeAt(F) > 127 ? "x" : C[F];
                                            if (!I.match(m)) {
                                                var B = R.slice(0, P),
                                                    U = R.slice(P + 1),
                                                    k = C.match(x);
                                                k && (B.push(k[1]), U.unshift(k[2])), U.length && (a = "/" + U.join(".") + a), this.hostname = B.join(".");
                                                break
                                            }
                                        }
                                    }
                                this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), D || (this.hostname = h.toASCII(this.hostname));
                                var G = this.port ? ":" + this.port : "",
                                    j = this.hostname || "";
                                this.host = j + G, this.href += this.host, D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
                            }
                            if (!$[f])
                                for (var P = 0, O = _.length; P < O; P++) {
                                    var X = _[P];
                                    if (a.indexOf(X) !== -1) {
                                        var Y = encodeURIComponent(X);
                                        Y === X && (Y = escape(X)), a = a.split(X).join(Y)
                                    }
                                }
                            var W = a.indexOf("#");
                            W !== -1 && (this.hash = a.substr(W), a = a.slice(0, W));
                            var V = a.indexOf("?");
                            if (V !== -1 ? (this.search = a.substr(V), this.query = a.substr(V + 1), e && (this.query = S.parse(this.query)), a = a.slice(0, V)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), b[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                                var G = this.pathname || "",
                                    z = this.search || "";
                                this.path = G + z
                            }
                            return this.href = this.format(), this
                        }, r.prototype.format = function() {
                            var t = this.auth || "";
                            t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                            var e = this.protocol || "",
                                i = this.pathname || "",
                                r = this.hash || "",
                                n = !1,
                                s = "";
                            this.host ? n = t + this.host : this.hostname && (n = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && l.isObject(this.query) && Object.keys(this.query).length && (s = S.stringify(this.query));
                            var o = this.search || s && "?" + s || "";
                            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || b[e]) && n !== !1 ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), i = i.replace(/[?#]/g, function(t) {
                                return encodeURIComponent(t)
                            }), o = o.replace("#", "%23"), e + n + i + o + r
                        }, r.prototype.resolve = function(t) {
                            return this.resolveObject(n(t, !1, !0)).format()
                        }, r.prototype.resolveObject = function(t) {
                            if (l.isString(t)) {
                                var e = new r;
                                e.parse(t, !1, !0), t = e
                            }
                            for (var i = new r, n = Object.keys(this), s = 0; s < n.length; s++) {
                                var o = n[s];
                                i[o] = this[o]
                            }
                            if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
                            if (t.slashes && !t.protocol) {
                                for (var a = Object.keys(t), h = 0; h < a.length; h++) {
                                    var u = a[h];
                                    "protocol" !== u && (i[u] = t[u])
                                }
                                return b[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
                            }
                            if (t.protocol && t.protocol !== i.protocol) {
                                if (!b[t.protocol]) {
                                    for (var c = Object.keys(t), p = 0; p < c.length; p++) {
                                        var d = c[p];
                                        i[d] = t[d]
                                    }
                                    return i.href = i.format(), i
                                }
                                if (i.protocol = t.protocol, t.host || T[t.protocol]) i.pathname = t.pathname;
                                else {
                                    for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()););
                                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), i.pathname = f.join("/")
                                }
                                if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                                    var _ = i.pathname || "",
                                        g = i.search || "";
                                    i.path = _ + g
                                }
                                return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                            }
                            var v = i.pathname && "/" === i.pathname.charAt(0),
                                y = t.host || t.pathname && "/" === t.pathname.charAt(0),
                                m = y || v || i.host && t.pathname,
                                x = m,
                                $ = i.pathname && i.pathname.split("/") || [],
                                f = t.pathname && t.pathname.split("/") || [],
                                S = i.protocol && !b[i.protocol];
                            if (S && (i.hostname = "", i.port = null, i.host && ("" === $[0] ? $[0] = i.host : $.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), m = m && ("" === f[0] || "" === $[0])), y) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, $ = f;
                            else if (f.length) $ || ($ = []), $.pop(), $ = $.concat(f), i.search = t.search, i.query = t.query;
                            else if (!l.isNullOrUndefined(t.search)) {
                                if (S) {
                                    i.hostname = i.host = $.shift();
                                    var E = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                                    E && (i.auth = E.shift(), i.host = i.hostname = E.shift())
                                }
                                return i.search = t.search, i.query = t.query, l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                            }
                            if (!$.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                            for (var w = $.slice(-1)[0], P = (i.host || t.host || $.length > 1) && ("." === w || ".." === w) || "" === w, M = 0, A = $.length; A >= 0; A--) w = $[A], "." === w ? $.splice(A, 1) : ".." === w ? ($.splice(A, 1), M++) : M && ($.splice(A, 1), M--);
                            if (!m && !x)
                                for (; M--; M) $.unshift("..");
                            !m || "" === $[0] || $[0] && "/" === $[0].charAt(0) || $.unshift(""), P && "/" !== $.join("/").substr(-1) && $.push("");
                            var L = "" === $[0] || $[0] && "/" === $[0].charAt(0);
                            if (S) {
                                i.hostname = i.host = L ? "" : $.length ? $.shift() : "";
                                var E = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                                E && (i.auth = E.shift(), i.host = i.hostname = E.shift())
                            }
                            return m = m || i.host && $.length, m && !L && $.unshift(""), $.length ? i.pathname = $.join("/") : (i.pathname = null, i.path = null), l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                        }, r.prototype.parseHost = function() {
                            var t = this.host,
                                e = c.exec(t);
                            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
                        }
                    }, {
                        "./util": 29,
                        punycode: 24,
                        querystring: 27
                    }],
                    29: [function(t, e, i) {
                        "use strict";
                        e.exports = {
                            isString: function(t) {
                                return "string" == typeof t
                            },
                            isObject: function(t) {
                                return "object" == typeof t && null !== t
                            },
                            isNull: function(t) {
                                return null === t
                            },
                            isNullOrUndefined: function(t) {
                                return null == t
                            }
                        }
                    }, {}],
                    30: [function(t, e, i) {
                        "use strict";

                        function r() {}

                        function n(t, e, i) {
                            this.fn = t, this.context = e, this.once = i || !1
                        }

                        function s() {
                            this._events = new r, this._eventsCount = 0
                        }
                        var o = Object.prototype.hasOwnProperty,
                            a = "~";
                        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), s.prototype.eventNames = function() {
                            var t, e, i = [];
                            if (0 === this._eventsCount) return i;
                            for (e in t = this._events) o.call(t, e) && i.push(a ? e.slice(1) : e);
                            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
                        }, s.prototype.listeners = function(t, e) {
                            var i = a ? a + t : t,
                                r = this._events[i];
                            if (e) return !!r;
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var n = 0, s = r.length, o = new Array(s); n < s; n++) o[n] = r[n].fn;
                            return o
                        }, s.prototype.emit = function(t, e, i, r, n, s) {
                            var o = a ? a + t : t;
                            if (!this._events[o]) return !1;
                            var h, l, u = this._events[o],
                                c = arguments.length;
                            if (u.fn) {
                                switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                                    case 1:
                                        return u.fn.call(u.context), !0;
                                    case 2:
                                        return u.fn.call(u.context, e), !0;
                                    case 3:
                                        return u.fn.call(u.context, e, i), !0;
                                    case 4:
                                        return u.fn.call(u.context, e, i, r), !0;
                                    case 5:
                                        return u.fn.call(u.context, e, i, r, n), !0;
                                    case 6:
                                        return u.fn.call(u.context, e, i, r, n, s), !0
                                }
                                for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
                                u.fn.apply(u.context, h)
                            } else {
                                var p, d = u.length;
                                for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
                                    case 1:
                                        u[l].fn.call(u[l].context);
                                        break;
                                    case 2:
                                        u[l].fn.call(u[l].context, e);
                                        break;
                                    case 3:
                                        u[l].fn.call(u[l].context, e, i);
                                        break;
                                    case 4:
                                        u[l].fn.call(u[l].context, e, i, r);
                                        break;
                                    default:
                                        if (!h)
                                            for (p = 1, h = new Array(c - 1); p < c; p++) h[p - 1] = arguments[p];
                                        u[l].fn.apply(u[l].context, h)
                                }
                            }
                            return !0
                        }, s.prototype.on = function(t, e, i) {
                            var r = new n(e, i || this),
                                s = a ? a + t : t;
                            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this
                        }, s.prototype.once = function(t, e, i) {
                            var r = new n(e, i || this, (!0)),
                                s = a ? a + t : t;
                            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this
                        }, s.prototype.removeListener = function(t, e, i, n) {
                            var s = a ? a + t : t;
                            if (!this._events[s]) return this;
                            if (!e) return 0 === --this._eventsCount ? this._events = new r : delete this._events[s], this;
                            var o = this._events[s];
                            if (o.fn) o.fn !== e || n && !o.once || i && o.context !== i || (0 === --this._eventsCount ? this._events = new r : delete this._events[s]);
                            else {
                                for (var h = 0, l = [], u = o.length; h < u; h++)(o[h].fn !== e || n && !o[h].once || i && o[h].context !== i) && l.push(o[h]);
                                l.length ? this._events[s] = 1 === l.length ? l[0] : l : 0 === --this._eventsCount ? this._events = new r : delete this._events[s]
                            }
                            return this
                        }, s.prototype.removeAllListeners = function(t) {
                            var e;
                            return t ? (e = a ? a + t : t, this._events[e] && (0 === --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this
                        }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function() {
                            return this
                        }, s.prefixed = a, s.EventEmitter = s, "undefined" != typeof e && (e.exports = s)
                    }, {}],
                    31: [function(t, e, i) {
                        "use strict";
                        e.exports = function(t, e) {
                            e = e || {};
                            for (var i = {
                                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                                    q: {
                                        name: "queryKey",
                                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                                    },
                                    parser: {
                                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                                    }
                                }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, s = 14; s--;) n[i.key[s]] = r[s] || "";
                            return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function(t, e, r) {
                                e && (n[i.q.name][e] = r)
                            }), n
                        }
                    }, {}],
                    32: [function(t, e, i) {
                        "use strict";

                        function r(t, e) {
                            a.call(this), e = e || h, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = s.queue(this._boundLoadResource, e), this.resources = {}
                        }
                        var n = t("parse-uri"),
                            s = t("./async"),
                            o = t("./Resource"),
                            a = t("eventemitter3"),
                            h = 10,
                            l = 100;
                        r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.add = r.prototype.enqueue = function(t, e, i, r) {
                            if (Array.isArray(t)) {
                                for (var n = 0; n < t.length; ++n) this.add(t[n]);
                                return this
                            }
                            if ("object" == typeof t && (r = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                            if ("function" == typeof i && (r = i, i = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.');
                            return e = this._prepareUrl(e), this.resources[t] = new o(t, e, i), "function" == typeof r && this.resources[t].once("afterMiddleware", r), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (l - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = l / this._buffer.length), this
                        }, r.prototype.before = r.prototype.pre = function(t) {
                            return this._beforeMiddleware.push(t), this
                        }, r.prototype.after = r.prototype.use = function(t) {
                            return this._afterMiddleware.push(t), this
                        }, r.prototype.reset = function() {
                            this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1;
                            for (var t in this.resources) {
                                var e = this.resources[t];
                                e.off("complete", this._onLoad, this), e.isLoading && e.abort()
                            }
                            return this.resources = {}, this
                        }, r.prototype.load = function(t) {
                            if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
                            this.emit("start", this), this.loading = !0;
                            for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]);
                            return this._buffer.length = 0, this
                        }, r.prototype._prepareUrl = function(t) {
                            var e = n(t, {
                                strictMode: !0
                            });
                            return e.protocol || !e.path || 0 === e.path.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t
                        }, r.prototype._loadResource = function(t, e) {
                            var i = this;
                            t._dequeue = e, s.eachSeries(this._beforeMiddleware, function(e, r) {
                                e.call(i, t, function() {
                                    r(t.isComplete ? {} : null)
                                })
                            }, function() {
                                t.isComplete ? i._onLoad(t) : (t.once("complete", i._onLoad, i), t.load())
                            })
                        }, r.prototype._onComplete = function() {
                            this.loading = !1, this.emit("complete", this, this.resources)
                        }, r.prototype._onLoad = function(t) {
                            var e = this;
                            s.eachSeries(this._afterMiddleware, function(i, r) {
                                i.call(e, t, r)
                            }, function() {
                                t.emit("afterMiddleware", t), e._numToLoad--, e.progress += e._progressChunk, e.emit("progress", e, t), t.error ? e.emit("error", t.error, e, t) : e.emit("load", e, t), 0 === e._numToLoad && (e.progress = 100, e._onComplete())
                            }), t._dequeue()
                        }, r.LOAD_TYPE = o.LOAD_TYPE, r.XHR_RESPONSE_TYPE = o.XHR_RESPONSE_TYPE
                    }, {
                        "./Resource": 33,
                        "./async": 34,
                        eventemitter3: 30,
                        "parse-uri": 31
                    }],
                    33: [function(t, e, i) {
                        "use strict";

                        function r(t, e, i) {
                            if (o.call(this), i = i || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                            this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = i.crossOrigin === !0 ? "anonymous" : i.crossOrigin, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this.isComplete = !1, this.isLoading = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
                        }

                        function n(t) {
                            return t.toString().replace("object ", "")
                        }

                        function s(t, e, i) {
                            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
                        }
                        var o = t("eventemitter3"),
                            a = t("parse-uri"),
                            h = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                            l = null,
                            u = 0,
                            c = 200,
                            p = 204;
                        r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.complete = function() {
                            if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this.isComplete = !0, this.isLoading = !1, this.emit("complete", this)
                        }, r.prototype.abort = function(t) {
                            if (!this.error) {
                                if (this.error = new Error(t), this.xhr) this.xhr.abort();
                                else if (this.xdr) this.xdr.abort();
                                else if (this.data)
                                    if ("undefined" != typeof this.data.src) this.data.src = "";
                                    else
                                        for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                                this.complete()
                            }
                        }, r.prototype.load = function(t) {
                            if (!this.isLoading)
                                if (this.isComplete) {
                                    if (t) {
                                        var e = this;
                                        setTimeout(function() {
                                            t(e)
                                        }, 1)
                                    }
                                } else switch (t && this.once("complete", t), this.isLoading = !0, this.emit("start", this), this.crossOrigin !== !1 && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                                    case r.LOAD_TYPE.IMAGE:
                                        this._loadElement("image");
                                        break;
                                    case r.LOAD_TYPE.AUDIO:
                                        this._loadSourceElement("audio");
                                        break;
                                    case r.LOAD_TYPE.VIDEO:
                                        this._loadSourceElement("video");
                                        break;
                                    case r.LOAD_TYPE.XHR:
                                    default:
                                        h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                                }
                        }, r.prototype._loadElement = function(t) {
                            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url);
                            var e = "is" + t[0].toUpperCase() + t.substring(1);
                            this[e] === !1 && (this[e] = !0), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
                        }, r.prototype._loadSourceElement = function(t) {
                            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return void this.abort("Unsupported element " + t);
                            if (!this.metadata.skipSource)
                                if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                                else if (Array.isArray(this.url))
                                for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
                            else this.data.appendChild(this._createSource(t, this.url));
                            this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
                        }, r.prototype._loadXhr = function() {
                            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                            var t = this.xhr = new XMLHttpRequest;
                            t.open("GET", this.url, !0), this.xhrType === r.XHR_RESPONSE_TYPE.JSON || this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = r.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
                        }, r.prototype._loadXdr = function() {
                            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                            var t = this.xhr = new XDomainRequest;
                            t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                                t.send()
                            }, 0)
                        }, r.prototype._createSource = function(t, e, i) {
                            i || (i = t + "/" + e.substr(e.lastIndexOf(".") + 1));
                            var r = document.createElement("source");
                            return r.src = e, r.type = i, r
                        }, r.prototype._onError = function(t) {
                            this.abort("Failed to load element using " + t.target.nodeName)
                        }, r.prototype._onProgress = function(t) {
                            t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
                        }, r.prototype._xhrOnError = function() {
                            var t = this.xhr;
                            this.abort(n(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
                        }, r.prototype._xhrOnAbort = function() {
                            this.abort(n(this.xhr) + " Request was aborted by the user.")
                        }, r.prototype._xdrOnTimeout = function() {
                            this.abort(n(this.xhr) + " Request timed out.")
                        }, r.prototype._xhrOnLoad = function() {
                            var t = this.xhr,
                                e = "undefined" == typeof t.status ? t.status : c;
                            if (!(e === c || e === p || e === u && t.responseText.length > 0)) return void this.abort("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                            if (this.xhrType === r.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
                            else if (this.xhrType === r.XHR_RESPONSE_TYPE.JSON) try {
                                this.data = JSON.parse(t.responseText), this.isJson = !0
                            } catch (t) {
                                return void this.abort("Error trying to parse loaded json:", t)
                            } else if (this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT) try {
                                if (window.DOMParser) {
                                    var i = new DOMParser;
                                    this.data = i.parseFromString(t.responseText, "text/xml")
                                } else {
                                    var n = document.createElement("div");
                                    n.innerHTML = t.responseText, this.data = n
                                }
                                this.isXml = !0
                            } catch (t) {
                                return void this.abort("Error trying to parse loaded xml:", t)
                            } else this.data = t.response || t.responseText;
                            this.complete()
                        }, r.prototype._determineCrossOrigin = function(t, e) {
                            if (0 === t.indexOf("data:")) return "";
                            e = e || window.location, l || (l = document.createElement("a")), l.href = t, t = a(l.href, {
                                strictMode: !0
                            });
                            var i = !t.port && "" === e.port || t.port === e.port,
                                r = t.protocol ? t.protocol + ":" : "";
                            return t.host === e.hostname && i && r === e.protocol ? "" : "anonymous"
                        }, r.prototype._determineXhrType = function() {
                            return r._xhrTypeMap[this._getExtension()] || r.XHR_RESPONSE_TYPE.TEXT
                        }, r.prototype._determineLoadType = function() {
                            return r._loadTypeMap[this._getExtension()] || r.LOAD_TYPE.XHR
                        }, r.prototype._getExtension = function() {
                            var t = this.url,
                                e = "";
                            if (this.isDataUrl) {
                                var i = t.indexOf("/");
                                e = t.substring(i + 1, t.indexOf(";", i))
                            } else {
                                var r = t.indexOf("?");
                                r !== -1 && (t = t.substring(0, r)), e = t.substring(t.lastIndexOf(".") + 1)
                            }
                            return e.toLowerCase()
                        }, r.prototype._getMimeFromXhrType = function(t) {
                            switch (t) {
                                case r.XHR_RESPONSE_TYPE.BUFFER:
                                    return "application/octet-binary";
                                case r.XHR_RESPONSE_TYPE.BLOB:
                                    return "application/blob";
                                case r.XHR_RESPONSE_TYPE.DOCUMENT:
                                    return "application/xml";
                                case r.XHR_RESPONSE_TYPE.JSON:
                                    return "application/json";
                                case r.XHR_RESPONSE_TYPE.DEFAULT:
                                case r.XHR_RESPONSE_TYPE.TEXT:
                                default:
                                    return "text/plain"
                            }
                        }, r.LOAD_TYPE = {
                            XHR: 1,
                            IMAGE: 2,
                            AUDIO: 3,
                            VIDEO: 4
                        }, r.XHR_RESPONSE_TYPE = {
                            DEFAULT: "text",
                            BUFFER: "arraybuffer",
                            BLOB: "blob",
                            DOCUMENT: "document",
                            JSON: "json",
                            TEXT: "text"
                        }, r._loadTypeMap = {
                            gif: r.LOAD_TYPE.IMAGE,
                            png: r.LOAD_TYPE.IMAGE,
                            bmp: r.LOAD_TYPE.IMAGE,
                            jpg: r.LOAD_TYPE.IMAGE,
                            jpeg: r.LOAD_TYPE.IMAGE,
                            tif: r.LOAD_TYPE.IMAGE,
                            tiff: r.LOAD_TYPE.IMAGE,
                            webp: r.LOAD_TYPE.IMAGE,
                            tga: r.LOAD_TYPE.IMAGE,
                            "svg+xml": r.LOAD_TYPE.IMAGE
                        }, r._xhrTypeMap = {
                            xhtml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            html: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            htm: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            xml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            tmx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            tsx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            svg: r.XHR_RESPONSE_TYPE.DOCUMENT,
                            gif: r.XHR_RESPONSE_TYPE.BLOB,
                            png: r.XHR_RESPONSE_TYPE.BLOB,
                            bmp: r.XHR_RESPONSE_TYPE.BLOB,
                            jpg: r.XHR_RESPONSE_TYPE.BLOB,
                            jpeg: r.XHR_RESPONSE_TYPE.BLOB,
                            tif: r.XHR_RESPONSE_TYPE.BLOB,
                            tiff: r.XHR_RESPONSE_TYPE.BLOB,
                            webp: r.XHR_RESPONSE_TYPE.BLOB,
                            tga: r.XHR_RESPONSE_TYPE.BLOB,
                            json: r.XHR_RESPONSE_TYPE.JSON,
                            text: r.XHR_RESPONSE_TYPE.TEXT,
                            txt: r.XHR_RESPONSE_TYPE.TEXT
                        }, r.setExtensionLoadType = function(t, e) {
                            s(r._loadTypeMap, t, e)
                        }, r.setExtensionXhrType = function(t, e) {
                            s(r._xhrTypeMap, t, e)
                        }
                    }, {
                        eventemitter3: 30,
                        "parse-uri": 31
                    }],
                    34: [function(t, e, i) {
                        "use strict";

                        function r() {}

                        function n(t, e, i) {
                            var r = 0,
                                n = t.length;
                            ! function s(o) {
                                return o || r === n ? void(i && i(o)) : void e(t[r++], s)
                            }()
                        }

                        function s(t) {
                            return function() {
                                if (null === t) throw new Error("Callback was already called.");
                                var e = t;
                                t = null, e.apply(this, arguments)
                            }
                        }

                        function o(t, e) {
                            function i(t, e, i) {
                                if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
                                if (a.started = !0, null == t && a.idle()) return void setTimeout(function() {
                                    a.drain()
                                }, 1);
                                var n = {
                                    data: t,
                                    callback: "function" == typeof i ? i : r
                                };
                                e ? a._tasks.unshift(n) : a._tasks.push(n), setTimeout(function() {
                                    a.process()
                                }, 1)
                            }

                            function n(t) {
                                return function() {
                                    o -= 1, t.callback.apply(t, arguments), null != arguments[0] && a.error(arguments[0], t.data), o <= a.concurrency - a.buffer && a.unsaturated(), a.idle() && a.drain(), a.process()
                                }
                            }
                            if (null == e) e = 1;
                            else if (0 === e) throw new Error("Concurrency must not be zero");
                            var o = 0,
                                a = {
                                    _tasks: [],
                                    concurrency: e,
                                    saturated: r,
                                    unsaturated: r,
                                    buffer: e / 4,
                                    empty: r,
                                    drain: r,
                                    error: r,
                                    started: !1,
                                    paused: !1,
                                    push: function(t, e) {
                                        i(t, !1, e)
                                    },
                                    kill: function() {
                                        a.drain = r, a._tasks = []
                                    },
                                    unshift: function(t, e) {
                                        i(t, !0, e)
                                    },
                                    process: function() {
                                        for (; !a.paused && o < a.concurrency && a._tasks.length;) {
                                            var e = a._tasks.shift();
                                            0 === a._tasks.length && a.empty(), o += 1, o === a.concurrency && a.saturated(), t(e.data, s(n(e)))
                                        }
                                    },
                                    length: function() {
                                        return a._tasks.length
                                    },
                                    running: function() {
                                        return o
                                    },
                                    idle: function() {
                                        return a._tasks.length + o === 0
                                    },
                                    pause: function() {
                                        a.paused !== !0 && (a.paused = !0)
                                    },
                                    resume: function() {
                                        if (a.paused !== !1) {
                                            a.paused = !1;
                                            for (var t = 1; t <= a.concurrency; t++) a.process()
                                        }
                                    }
                                };
                            return a
                        }
                        e.exports = {
                            eachSeries: n,
                            queue: o
                        }
                    }, {}],
                    35: [function(t, e, i) {
                        "use strict";
                        e.exports = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encodeBinary: function(t) {
                                for (var e, i = "", r = new Array(4), n = 0, s = 0, o = 0; n < t.length;) {
                                    for (e = new Array(3), s = 0; s < e.length; s++) n < t.length ? e[s] = 255 & t.charCodeAt(n++) : e[s] = 0;
                                    switch (r[0] = e[0] >> 2, r[1] = (3 & e[0]) << 4 | e[1] >> 4, r[2] = (15 & e[1]) << 2 | e[2] >> 6, r[3] = 63 & e[2], o = n - (t.length - 1)) {
                                        case 2:
                                            r[3] = 64, r[2] = 64;
                                            break;
                                        case 1:
                                            r[3] = 64
                                    }
                                    for (s = 0; s < r.length; s++) i += this._keyStr.charAt(r[s])
                                }
                                return i
                            }
                        }
                    }, {}],
                    36: [function(t, e, i) {
                        "use strict";
                        e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
                            caching: {
                                memory: t("./middlewares/caching/memory")
                            },
                            parsing: {
                                blob: t("./middlewares/parsing/blob")
                            }
                        }, e.exports.async = t("./async")
                    }, {
                        "./Loader": 32,
                        "./Resource": 33,
                        "./async": 34,
                        "./middlewares/caching/memory": 37,
                        "./middlewares/parsing/blob": 38
                    }],
                    37: [function(t, e, i) {
                        "use strict";
                        var r = {};
                        e.exports = function() {
                            return function(t, e) {
                                r[t.url] ? (t.data = r[t.url], t.complete()) : t.once("complete", function() {
                                    r[this.url] = this.data
                                }), e()
                            }
                        }
                    }, {}],
                    38: [function(t, e, i) {
                        "use strict";
                        var r = t("../../Resource"),
                            n = t("../../b64"),
                            s = window.URL || window.webkitURL;
                        e.exports = function() {
                            return function(t, e) {
                                if (!t.data) return void e();
                                if (t.xhr && t.xhrType === r.XHR_RESPONSE_TYPE.BLOB)
                                    if (window.Blob && "string" != typeof t.data) {
                                        if (0 === t.data.type.indexOf("image")) {
                                            var i = s.createObjectURL(t.data);
                                            return t.blob = t.data, t.data = new Image, t.data.src = i, t.isImage = !0, void(t.data.onload = function() {
                                                s.revokeObjectURL(i), t.data.onload = null, e()
                                            })
                                        }
                                    } else {
                                        var o = t.xhr.getResponseHeader("content-type");
                                        if (o && 0 === o.indexOf("image")) return t.data = new Image, t.data.src = "data:" + o + ";base64," + n.encodeBinary(t.xhr.responseText), t.isImage = !0, void(t.data.onload = function() {
                                            t.data.onload = null, e()
                                        })
                                    }
                                e()
                            }
                        }
                    }, {
                        "../../Resource": 33,
                        "../../b64": 35
                    }],
                    39: [function(t, e, i) {
                        function r(t) {
                            !s.tablet && !s.phone || navigator.isCocoonJS || this.createTouchHook();
                            var e = document.createElement("div");
                            e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1,
                                this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
                        }
                        var n = t("../core"),
                            s = t("ismobilejs");
                        Object.assign(n.DisplayObject.prototype, t("./accessibleTarget")), r.prototype.constructor = r, e.exports = r, r.prototype.createTouchHook = function() {
                            var t = document.createElement("button");
                            t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.style.zIndex = 2, t.style.backgroundColor = "#FF0000", t.title = "HOOK DIV", t.addEventListener("focus", function() {
                                this.isMobileAccessabillity = !0, this.activate(), document.body.removeChild(t)
                            }.bind(this)), document.body.appendChild(t)
                        }, r.prototype.activate = function() {
                            this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
                        }, r.prototype.deactivate = function() {
                            this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
                        }, r.prototype.updateAccessibleObjects = function(t) {
                            if (t.visible) {
                                t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                                for (var e = t.children, i = e.length - 1; i >= 0; i--) this.updateAccessibleObjects(e[i])
                            }
                        }, r.prototype.update = function() {
                            if (this.renderer.renderingToScreen) {
                                this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                                var t = this.renderer.view.getBoundingClientRect(),
                                    e = t.width / this.renderer.width,
                                    i = t.height / this.renderer.height,
                                    r = this.div;
                                r.style.left = t.left + "px", r.style.top = t.top + "px", r.style.width = this.renderer.width + "px", r.style.height = this.renderer.height + "px";
                                for (var s = 0; s < this.children.length; s++) {
                                    var o = this.children[s];
                                    if (o.renderId !== this.renderId) o._accessibleActive = !1, n.utils.removeItems(this.children, s, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, s--, 0 === this.children.length && this.deactivate();
                                    else {
                                        r = o._accessibleDiv;
                                        var a = o.hitArea,
                                            h = o.worldTransform;
                                        o.hitArea ? (r.style.left = (h.tx + a.x * h.a) * e + "px", r.style.top = (h.ty + a.y * h.d) * i + "px", r.style.width = a.width * h.a * e + "px", r.style.height = a.height * h.d * i + "px") : (a = o.getBounds(), this.capHitArea(a), r.style.left = a.x * e + "px", r.style.top = a.y * i + "px", r.style.width = a.width * e + "px", r.style.height = a.height * i + "px")
                                    }
                                }
                                this.renderId++
                            }
                        }, r.prototype.capHitArea = function(t) {
                            t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
                        }, r.prototype.addChild = function(t) {
                            var e = this.pool.pop();
                            e || (e = document.createElement("button"), e.style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
                        }, r.prototype._onClick = function(t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "click", e.eventData)
                        }, r.prototype._onFocus = function(t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
                        }, r.prototype._onFocusOut = function(t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
                        }, r.prototype._onKeyDown = function(t) {
                            9 === t.keyCode && this.activate()
                        }, r.prototype._onMouseMove = function() {
                            this.deactivate()
                        }, r.prototype.destroy = function() {
                            this.div = null;
                            for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
                            window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
                        }, n.WebGLRenderer.registerPlugin("accessibility", r), n.CanvasRenderer.registerPlugin("accessibility", r)
                    }, {
                        "../core": 62,
                        "./accessibleTarget": 40,
                        ismobilejs: 4
                    }],
                    40: [function(t, e, i) {
                        var r = {
                            accessible: !1,
                            accessibleTitle: null,
                            accessibleHint: null,
                            tabIndex: 0,
                            _accessibleActive: !1,
                            _accessibleDiv: !1
                        };
                        e.exports = r
                    }, {}],
                    41: [function(t, e, i) {
                        e.exports = {
                            accessibleTarget: t("./accessibleTarget"),
                            AccessibilityManager: t("./AccessibilityManager")
                        }
                    }, {
                        "./AccessibilityManager": 39,
                        "./accessibleTarget": 40
                    }],
                    42: [function(t, e, i) {
                        function r(t) {
                            if (t instanceof Array) {
                                if ("precision" !== t[0].substring(0, 9)) {
                                    var e = t.slice(0);
                                    return e.unshift("precision " + s.PRECISION.DEFAULT + " float;"), e
                                }
                            } else if ("precision" !== t.substring(0, 9)) return "precision " + s.PRECISION.DEFAULT + " float;\n" + t;
                            return t
                        }
                        var n = t("pixi-gl-core").GLShader,
                            s = t("./const"),
                            o = function(t, e, i, s) {
                                n.call(this, t, r(e), r(i), s)
                            };
                        o.prototype = Object.create(n.prototype), o.prototype.constructor = o, e.exports = o
                    }, {
                        "./const": 43,
                        "pixi-gl-core": 12
                    }],
                    43: [function(t, e, i) {
                        var r = {
                            VERSION: "4.0.3",
                            PI_2: 2 * Math.PI,
                            RAD_TO_DEG: 180 / Math.PI,
                            DEG_TO_RAD: Math.PI / 180,
                            TARGET_FPMS: .06,
                            RENDERER_TYPE: {
                                UNKNOWN: 0,
                                WEBGL: 1,
                                CANVAS: 2
                            },
                            BLEND_MODES: {
                                NORMAL: 0,
                                ADD: 1,
                                MULTIPLY: 2,
                                SCREEN: 3,
                                OVERLAY: 4,
                                DARKEN: 5,
                                LIGHTEN: 6,
                                COLOR_DODGE: 7,
                                COLOR_BURN: 8,
                                HARD_LIGHT: 9,
                                SOFT_LIGHT: 10,
                                DIFFERENCE: 11,
                                EXCLUSION: 12,
                                HUE: 13,
                                SATURATION: 14,
                                COLOR: 15,
                                LUMINOSITY: 16
                            },
                            DRAW_MODES: {
                                POINTS: 0,
                                LINES: 1,
                                LINE_LOOP: 2,
                                LINE_STRIP: 3,
                                TRIANGLES: 4,
                                TRIANGLE_STRIP: 5,
                                TRIANGLE_FAN: 6
                            },
                            SCALE_MODES: {
                                DEFAULT: 0,
                                LINEAR: 0,
                                NEAREST: 1
                            },
                            WRAP_MODES: {
                                DEFAULT: 0,
                                CLAMP: 0,
                                REPEAT: 1,
                                MIRRORED_REPEAT: 2
                            },
                            GC_MODES: {
                                DEFAULT: 0,
                                AUTO: 0,
                                MANUAL: 1
                            },
                            MIPMAP_TEXTURES: !0,
                            RETINA_PREFIX: /@(.+)x/,
                            RESOLUTION: 1,
                            FILTER_RESOLUTION: 1,
                            DEFAULT_RENDER_OPTIONS: {
                                view: null,
                                resolution: 1,
                                antialias: !1,
                                forceFXAA: !1,
                                autoResize: !1,
                                transparent: !1,
                                backgroundColor: 0,
                                clearBeforeRender: !0,
                                preserveDrawingBuffer: !1,
                                roundPixels: !1
                            },
                            SHAPES: {
                                POLY: 0,
                                RECT: 1,
                                CIRC: 2,
                                ELIP: 3,
                                RREC: 4
                            },
                            PRECISION: {
                                DEFAULT: "mediump",
                                LOW: "lowp",
                                MEDIUM: "mediump",
                                HIGH: "highp"
                            },
                            TRANSFORM_MODE: {
                                DEFAULT: 0,
                                STATIC: 0,
                                DYNAMIC: 1
                            },
                            TEXT_GRADIENT: {
                                LINEAR_VERTICAL: 0,
                                LINEAR_HORIZONTAL: 1
                            },
                            SPRITE_BATCH_SIZE: 4096,
                            SPRITE_MAX_TEXTURES: t("./utils/maxRecommendedTextures")(32)
                        };
                        e.exports = r
                    }, {
                        "./utils/maxRecommendedTextures": 117
                    }],
                    44: [function(t, e, i) {
                        function r() {
                            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.rect = null
                        }
                        var n = t("../math"),
                            s = n.Rectangle;
                        r.prototype.constructor = r, e.exports = r, r.prototype.isEmpty = function() {
                            return this.minX > this.maxX || this.minY > this.maxY
                        }, r.prototype.clear = function() {
                            this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0)
                        }, r.prototype.getRectangle = function(t) {
                            return this.minX > this.maxX || this.minY > this.maxY ? s.EMPTY : (t = t || new s(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
                        }, r.prototype.addPoint = function(t) {
                            this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
                        }, r.prototype.addQuad = function(t) {
                            var e = this.minX,
                                i = this.minY,
                                r = this.maxX,
                                n = this.maxY,
                                s = t[0],
                                o = t[1];
                            e = s < e ? s : e, i = o < i ? o : i, r = s > r ? s : r, n = o > n ? o : n, s = t[2], o = t[3], e = s < e ? s : e, i = o < i ? o : i, r = s > r ? s : r, n = o > n ? o : n, s = t[4], o = t[5], e = s < e ? s : e, i = o < i ? o : i, r = s > r ? s : r, n = o > n ? o : n, s = t[6], o = t[7], e = s < e ? s : e, i = o < i ? o : i, r = s > r ? s : r, n = o > n ? o : n, this.minX = e, this.minY = i, this.maxX = r, this.maxY = n
                        }, r.prototype.addFrame = function(t, e, i, r, n) {
                            var s = t.worldTransform,
                                o = s.a,
                                a = s.b,
                                h = s.c,
                                l = s.d,
                                u = s.tx,
                                c = s.ty,
                                p = this.minX,
                                d = this.minY,
                                f = this.maxX,
                                _ = this.maxY,
                                g = o * e + h * i + u,
                                v = a * e + l * i + c;
                            p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, _ = v > _ ? v : _, g = o * r + h * i + u, v = a * r + l * i + c, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, _ = v > _ ? v : _, g = o * e + h * n + u, v = a * e + l * n + c, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, _ = v > _ ? v : _, g = o * r + h * n + u, v = a * r + l * n + c, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, _ = v > _ ? v : _, this.minX = p, this.minY = d, this.maxX = f, this.maxY = _
                        }, r.prototype.addVertices = function(t, e, i, r) {
                            for (var n = t.worldTransform, s = n.a, o = n.b, a = n.c, h = n.d, l = n.tx, u = n.ty, c = this.minX, p = this.minY, d = this.maxX, f = this.maxY, _ = i; _ < r; _ += 2) {
                                var g = e[_],
                                    v = e[_ + 1],
                                    y = s * g + a * v + l,
                                    m = h * v + o * g + u;
                                c = y < c ? y : c, p = m < p ? m : p, d = y > d ? y : d, f = m > f ? m : f
                            }
                            this.minX = c, this.minY = p, this.maxX = d, this.maxY = f
                        }, r.prototype.addBounds = function(t) {
                            var e = this.minX,
                                i = this.minY,
                                r = this.maxX,
                                n = this.maxY;
                            this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
                        }
                    }, {
                        "../math": 67
                    }],
                    45: [function(t, e, i) {
                        function r() {
                            s.call(this), this.children = []
                        }
                        var n = t("../utils"),
                            s = t("./DisplayObject");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return this.scale.x * this.getLocalBounds().width
                                },
                                set: function(t) {
                                    var e = this.getLocalBounds().width;
                                    0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
                                }
                            },
                            height: {
                                get: function() {
                                    return this.scale.y * this.getLocalBounds().height
                                },
                                set: function(t) {
                                    var e = this.getLocalBounds().height;
                                    0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
                                }
                            }
                        }), r.prototype.onChildrenChange = function() {}, r.prototype.addChild = function(t) {
                            var e = arguments.length;
                            if (e > 1)
                                for (var i = 0; i < e; i++) this.addChild(arguments[i]);
                            else t.parent && t.parent.removeChild(t), t.parent = this, this.transform._parentID = -1, this.children.push(t), this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                            return t
                        }, r.prototype.addChildAt = function(t, e) {
                            if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.onChildrenChange(e), t.emit("added", this), t;
                            throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
                        }, r.prototype.swapChildren = function(t, e) {
                            if (t !== e) {
                                var i = this.getChildIndex(t),
                                    r = this.getChildIndex(e);
                                if (i < 0 || r < 0) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                                this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
                            }
                        }, r.prototype.getChildIndex = function(t) {
                            var e = this.children.indexOf(t);
                            if (e === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
                            return e
                        }, r.prototype.setChildIndex = function(t, e) {
                            if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                            var i = this.getChildIndex(t);
                            n.removeItems(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
                        }, r.prototype.getChildAt = function(t) {
                            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                            return this.children[t]
                        }, r.prototype.removeChild = function(t) {
                            var e = arguments.length;
                            if (e > 1)
                                for (var i = 0; i < e; i++) this.removeChild(arguments[i]);
                            else {
                                var r = this.children.indexOf(t);
                                if (r === -1) return;
                                t.parent = null, n.removeItems(this.children, r, 1), this.onChildrenChange(r), t.emit("removed", this)
                            }
                            return t
                        }, r.prototype.removeChildAt = function(t) {
                            var e = this.getChildAt(t);
                            return e.parent = null, n.removeItems(this.children, t, 1), this.onChildrenChange(t), e.emit("removed", this), e
                        }, r.prototype.removeChildren = function(t, e) {
                            var i, r, n = t || 0,
                                s = "number" == typeof e ? e : this.children.length,
                                o = s - n;
                            if (o > 0 && o <= s) {
                                for (i = this.children.splice(n, o), r = 0; r < i.length; ++r) i[r].parent = null;
                                for (this.onChildrenChange(t), r = 0; r < i.length; ++r) i[r].emit("removed", this);
                                return i
                            }
                            if (0 === o && 0 === this.children.length) return [];
                            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                        }, r.prototype.updateTransform = function() {
                            if (this._boundsID++, this.visible) {
                                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                                for (var t = 0, e = this.children.length; t < e; ++t) this.children[t].updateTransform()
                            }
                        }, r.prototype.containerUpdateTransform = r.prototype.updateTransform, r.prototype.calculateBounds = function() {
                            if (this._bounds.clear(), this.visible) {
                                this._calculateBounds();
                                for (var t = 0; t < this.children.length; t++) {
                                    var e = this.children[t];
                                    e.calculateBounds(), this._bounds.addBounds(e._bounds)
                                }
                                this._boundsID = this._lastBoundsID
                            }
                        }, r.prototype._calculateBounds = function() {}, r.prototype.renderWebGL = function(t) {
                            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                                if (this._mask || this._filters) this.renderAdvancedWebGL(t);
                                else {
                                    this._renderWebGL(t);
                                    for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderWebGL(t)
                                }
                        }, r.prototype.renderAdvancedWebGL = function(t) {
                            t.currentRenderer.flush();
                            var e, i, r = this._filters,
                                n = this._mask;
                            if (r) {
                                for (this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0, e = 0; e < r.length; e++) r[e].enabled && this._enabledFilters.push(r[e]);
                                this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
                            }
                            for (n && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, i = this.children.length; e < i; e++) this.children[e].renderWebGL(t);
                            t.currentRenderer.flush(), n && t.maskManager.popMask(this, this._mask), r && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter(), t.currentRenderer.start()
                        }, r.prototype._renderWebGL = function(t) {}, r.prototype._renderCanvas = function(t) {}, r.prototype.renderCanvas = function(t) {
                            if (this.visible && !(this.alpha <= 0) && this.renderable) {
                                this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                                for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderCanvas(t);
                                this._mask && t.maskManager.popMask(t)
                            }
                        }, r.prototype.destroy = function(t) {
                            s.prototype.destroy.call(this);
                            var e = "boolean" == typeof t ? t : t && t.children,
                                i = this.children;
                            if (this.children = null, e)
                                for (var r = i.length - 1; r >= 0; r--) {
                                    var n = i[r];
                                    n.parent = null, n.destroy(t)
                                }
                        }
                    }, {
                        "../utils": 116,
                        "./DisplayObject": 46
                    }],
                    46: [function(t, e, i) {
                        function r() {
                            n.call(this);
                            var t = s.TRANSFORM_MODE.DEFAULT === s.TRANSFORM_MODE.STATIC ? o : a;
                            this.transform = new t, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.filterArea = null, this._filters = null, this._enabledFilters = null, this._bounds = new h, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null
                        }
                        var n = t("eventemitter3"),
                            s = t("../const"),
                            o = t("./TransformStatic"),
                            a = t("./Transform"),
                            h = t("./Bounds"),
                            l = t("../math"),
                            u = new r;
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            x: {
                                get: function() {
                                    return this.position.x
                                },
                                set: function(t) {
                                    this.transform.position.x = t
                                }
                            },
                            y: {
                                get: function() {
                                    return this.position.y
                                },
                                set: function(t) {
                                    this.transform.position.y = t
                                }
                            },
                            worldTransform: {
                                get: function() {
                                    return this.transform.worldTransform
                                }
                            },
                            localTransform: {
                                get: function() {
                                    return this.transform.localTransform
                                }
                            },
                            position: {
                                get: function() {
                                    return this.transform.position
                                },
                                set: function(t) {
                                    this.transform.position.copy(t)
                                }
                            },
                            scale: {
                                get: function() {
                                    return this.transform.scale
                                },
                                set: function(t) {
                                    this.transform.scale.copy(t)
                                }
                            },
                            pivot: {
                                get: function() {
                                    return this.transform.pivot
                                },
                                set: function(t) {
                                    this.transform.pivot.copy(t)
                                }
                            },
                            skew: {
                                get: function() {
                                    return this.transform.skew
                                },
                                set: function(t) {
                                    this.transform.skew.copy(t)
                                }
                            },
                            rotation: {
                                get: function() {
                                    return this.transform.rotation
                                },
                                set: function(t) {
                                    this.transform.rotation = t
                                }
                            },
                            worldVisible: {
                                get: function() {
                                    var t = this;
                                    do {
                                        if (!t.visible) return !1;
                                        t = t.parent
                                    } while (t);
                                    return !0
                                }
                            },
                            mask: {
                                get: function() {
                                    return this._mask
                                },
                                set: function(t) {
                                    this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                                }
                            },
                            filters: {
                                get: function() {
                                    return this._filters && this._filters.slice()
                                },
                                set: function(t) {
                                    this._filters = t && t.slice()
                                }
                            }
                        }), r.prototype.updateTransform = function() {
                            this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
                        }, r.prototype.displayObjectUpdateTransform = r.prototype.updateTransform, r.prototype._recursivePostUpdateTransform = function() {
                            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(u.transform)
                        }, r.prototype.getBounds = function(t, e) {
                            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = u, this.parent.transform._worldID++, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new l.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
                        }, r.prototype.getLocalBounds = function(t) {
                            var e = this.transform,
                                i = this.parent;
                            this.parent = null, this.transform = u.transform, t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle), t = this._localBoundsRect);
                            var r = this.getBounds(!1, t);
                            return this.parent = i, this.transform = e, r
                        }, r.prototype.toGlobal = function(t, e, i) {
                            return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = u, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
                        }, r.prototype.toLocal = function(t, e, i, r) {
                            return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = u, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
                        }, r.prototype.renderWebGL = function(t) {}, r.prototype.renderCanvas = function(t) {}, r.prototype.setParent = function(t) {
                            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                            return t.addChild(this), t
                        }, r.prototype.setTransform = function(t, e, i, r, n, s, o, a, h) {
                            return this.position.x = t || 0, this.position.y = e || 0, this.scale.x = i ? i : 1, this.scale.y = r ? r : 1, this.rotation = n || 0, this.skew.x = s || 0, this.skew.y = o || 0, this.pivot.x = a || 0, this.pivot.y = h || 0, this
                        }, r.prototype.destroy = function() {
                            this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1
                        }
                    }, {
                        "../const": 43,
                        "../math": 67,
                        "./Bounds": 44,
                        "./Transform": 47,
                        "./TransformStatic": 49,
                        eventemitter3: 3
                    }],
                    47: [function(t, e, i) {
                        function r() {
                            s.call(this), this.position = new n.Point(0, 0), this.scale = new n.Point(1, 1), this.skew = new n.ObservablePoint(this.updateSkew, this, 0, 0), this.pivot = new n.Point(0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0)
                        }
                        var n = t("../math"),
                            s = t("./TransformBase");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.updateSkew = function() {
                            this._cy = Math.cos(this.skew.y), this._sy = Math.sin(this.skew.y), this._nsx = Math.sin(this.skew.x), this._cx = Math.cos(this.skew.x)
                        }, r.prototype.updateLocalTransform = function() {
                            var t, e, i, r, n = this.localTransform;
                            t = this._cr * this.scale.x, e = this._sr * this.scale.x, i = -this._sr * this.scale.y, r = this._cr * this.scale.y, n.a = this._cy * t + this._sy * i, n.b = this._cy * e + this._sy * r, n.c = this._nsx * t + this._cx * i, n.d = this._nsx * e + this._cx * r
                        }, r.prototype.updateTransform = function(t) {
                            var e, i, r, n, s = t.worldTransform,
                                o = this.worldTransform,
                                a = this.localTransform;
                            e = this._cr * this.scale.x, i = this._sr * this.scale.x, r = -this._sr * this.scale.y, n = this._cr * this.scale.y, a.a = this._cy * e + this._sy * r, a.b = this._cy * i + this._sy * n, a.c = this._nsx * e + this._cx * r, a.d = this._nsx * i + this._cx * n, a.tx = this.position.x - (this.pivot.x * a.a + this.pivot.y * a.c), a.ty = this.position.y - (this.pivot.x * a.b + this.pivot.y * a.d), o.a = a.a * s.a + a.b * s.c, o.b = a.a * s.b + a.b * s.d, o.c = a.c * s.a + a.d * s.c, o.d = a.c * s.b + a.d * s.d, o.tx = a.tx * s.a + a.ty * s.c + s.tx, o.ty = a.tx * s.b + a.ty * s.d + s.ty, this._worldID++
                        }, r.prototype.setFromMatrix = function(t) {
                            t.decompose(this)
                        }, Object.defineProperties(r.prototype, {
                            rotation: {
                                get: function() {
                                    return this._rotation
                                },
                                set: function(t) {
                                    this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t)
                                }
                            }
                        }), e.exports = r
                    }, {
                        "../math": 67,
                        "./TransformBase": 48
                    }],
                    48: [function(t, e, i) {
                        function r() {
                            this.worldTransform = new n.Matrix, this.localTransform = new n.Matrix, this._worldID = 0
                        }
                        var n = t("../math");
                        r.prototype.constructor = r, r.prototype.updateLocalTransform = function() {}, r.prototype.updateTransform = function(t) {
                            var e = t.worldTransform,
                                i = this.worldTransform,
                                r = this.localTransform;
                            i.a = r.a * e.a + r.b * e.c, i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._worldID++
                        }, r.prototype.updateWorldTransform = r.prototype.updateTransform, r.IDENTITY = new r, e.exports = r
                    }, {
                        "../math": 67
                    }],
                    49: [function(t, e, i) {
                        function r() {
                            s.call(this), this.position = new n.ObservablePoint(this.onChange, this, 0, 0), this.scale = new n.ObservablePoint(this.onChange, this, 1, 1), this.pivot = new n.ObservablePoint(this.onChange, this, 0, 0), this.skew = new n.ObservablePoint(this.updateSkew, this, 0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0), this._localID = 0, this._currentLocalID = 0
                        }
                        var n = t("../math"),
                            s = t("./TransformBase");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.onChange = function() {
                            this._localID++
                        }, r.prototype.updateSkew = function() {
                            this._cy = Math.cos(this.skew._y), this._sy = Math.sin(this.skew._y), this._nsx = Math.sin(this.skew._x), this._cx = Math.cos(this.skew._x), this._localID++
                        }, r.prototype.updateLocalTransform = function() {
                            var t = this.localTransform;
                            if (this._localID !== this._currentLocalID) {
                                var e, i, r, n;
                                e = this._cr * this.scale._x, i = this._sr * this.scale._x, r = -this._sr * this.scale._y, n = this._cr * this.scale._y, t.a = this._cy * e + this._sy * r, t.b = this._cy * i + this._sy * n, t.c = this._nsx * e + this._cx * r, t.d = this._nsx * i + this._cx * n, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1
                            }
                        }, r.prototype.updateTransform = function(t) {
                            var e = t.worldTransform,
                                i = this.worldTransform,
                                r = this.localTransform;
                            if (this._localID !== this._currentLocalID) {
                                var n, s, o, a;
                                n = this._cr * this.scale._x, s = this._sr * this.scale._x, o = -this._sr * this.scale._y, a = this._cr * this.scale._y, r.a = this._cy * n + this._sy * o, r.b = this._cy * s + this._sy * a, r.c = this._nsx * n + this._cx * o, r.d = this._nsx * s + this._cx * a, r.tx = this.position._x - (this.pivot._x * r.a + this.pivot._y * r.c), r.ty = this.position._y - (this.pivot._x * r.b + this.pivot._y * r.d), this._currentLocalID = this._localID, this._parentID = -1
                            }
                            this._parentID !== t._worldID && (i.a = r.a * e.a + r.b * e.c, i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._parentID = t._worldID, this._worldID++)
                        }, r.prototype.setFromMatrix = function(t) {
                            t.decompose(this), this._localID++
                        }, Object.defineProperties(r.prototype, {
                            rotation: {
                                get: function() {
                                    return this._rotation
                                },
                                set: function(t) {
                                    this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t), this._localID++
                                }
                            }
                        }), e.exports = r
                    }, {
                        "../math": 67,
                        "./TransformBase": 48
                    }],
                    50: [function(t, e, i) {
                        function r() {
                            s.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = c.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new d, this.dirty = 0, this.fastRectDirty = -1, this.clearDirty = 0, this.boundsDirty = -1, this.cachedSpriteDirty = !1, this._spriteRect = null, this._fastRect = !1
                        }
                        var n, s = t("../display/Container"),
                            o = t("../textures/RenderTexture"),
                            a = t("../textures/Texture"),
                            h = t("./GraphicsData"),
                            l = t("../sprites/Sprite"),
                            u = t("../math"),
                            c = t("../const"),
                            p = t("../utils"),
                            d = t("../display/Bounds"),
                            f = t("./utils/bezierCurveTo"),
                            _ = t("../renderers/canvas/CanvasRenderer"),
                            g = new u.Matrix,
                            v = new u.Point,
                            y = new Float32Array(4),
                            m = new Float32Array(4);
                        r._SPRITE_TEXTURE = null, r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            var t = new r;
                            t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                            for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                            return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
                        }, r.prototype.lineStyle = function(t, e, i) {
                            if (this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === i ? 1 : i, this.currentPath)
                                if (this.currentPath.shape.points.length) {
                                    var r = new u.Polygon(this.currentPath.shape.points.slice(-2));
                                    r.closed = !1, this.drawShape(r)
                                } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                            return this
                        }, r.prototype.moveTo = function(t, e) {
                            var i = new u.Polygon([t, e]);
                            return i.closed = !1, this.drawShape(i), this
                        }, r.prototype.lineTo = function(t, e) {
                            return this.currentPath.shape.points.push(t, e), this.dirty++, this
                        }, r.prototype.quadraticCurveTo = function(t, e, i, r) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                            var n, s, o = 20,
                                a = this.currentPath.shape.points;
                            0 === a.length && this.moveTo(0, 0);
                            for (var h = a[a.length - 2], l = a[a.length - 1], u = 0, c = 1; c <= o; ++c) u = c / o, n = h + (t - h) * u, s = l + (e - l) * u, a.push(n + (t + (i - t) * u - n) * u, s + (e + (r - e) * u - s) * u);
                            return this.dirty++, this
                        }, r.prototype.bezierCurveTo = function(t, e, i, r, n, s) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                            var o = this.currentPath.shape.points,
                                a = o[o.length - 2],
                                h = o[o.length - 1];
                            return o.length -= 2, f(a, h, t, e, i, r, n, s, o), this.dirty++, this
                        }, r.prototype.arcTo = function(t, e, i, r, n) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                            var s = this.currentPath.shape.points,
                                o = s[s.length - 2],
                                a = s[s.length - 1],
                                h = a - e,
                                l = o - t,
                                u = r - e,
                                c = i - t,
                                p = Math.abs(h * c - l * u);
                            if (p < 1e-8 || 0 === n) s[s.length - 2] === t && s[s.length - 1] === e || s.push(t, e);
                            else {
                                var d = h * h + l * l,
                                    f = u * u + c * c,
                                    _ = h * u + l * c,
                                    g = n * Math.sqrt(d) / p,
                                    v = n * Math.sqrt(f) / p,
                                    y = g * _ / d,
                                    m = v * _ / f,
                                    x = g * c + v * l,
                                    $ = g * u + v * h,
                                    T = l * (v + y),
                                    b = h * (v + y),
                                    S = c * (g + m),
                                    E = u * (g + m),
                                    w = Math.atan2(b - $, T - x),
                                    P = Math.atan2(E - $, S - x);
                                this.arc(x + t, $ + e, n, w, P, l * u > c * h)
                            }
                            return this.dirty++, this
                        }, r.prototype.arc = function(t, e, i, r, n, s) {
                            if (s = s || !1, r === n) return this;
                            !s && n <= r ? n += 2 * Math.PI : s && r <= n && (r += 2 * Math.PI);
                            var o = s ? (r - n) * -1 : n - r,
                                a = 40 * Math.ceil(Math.abs(o) / (2 * Math.PI));
                            if (0 === o) return this;
                            var h = t + Math.cos(r) * i,
                                l = e + Math.sin(r) * i;
                            this.currentPath ? this.currentPath.shape.points.push(h, l) : this.moveTo(h, l);
                            for (var u = this.currentPath.shape.points, c = o / (2 * a), p = 2 * c, d = Math.cos(c), f = Math.sin(c), _ = a - 1, g = _ % 1 / _, v = 0; v <= _; v++) {
                                var y = v + g * v,
                                    m = c + r + p * y,
                                    x = Math.cos(m),
                                    $ = -Math.sin(m);
                                u.push((d * x + f * $) * i + t, (d * -$ + f * x) * i + e)
                            }
                            return this.dirty++, this
                        }, r.prototype.beginFill = function(t, e) {
                            return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
                        }, r.prototype.endFill = function() {
                            return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
                        }, r.prototype.drawRect = function(t, e, i, r) {
                            return this.drawShape(new u.Rectangle(t, e, i, r)), this
                        }, r.prototype.drawRoundedRect = function(t, e, i, r, n) {
                            return this.drawShape(new u.RoundedRectangle(t, e, i, r, n)), this
                        }, r.prototype.drawCircle = function(t, e, i) {
                            return this.drawShape(new u.Circle(t, e, i)), this
                        }, r.prototype.drawEllipse = function(t, e, i, r) {
                            return this.drawShape(new u.Ellipse(t, e, i, r)), this
                        }, r.prototype.drawPolygon = function(t) {
                            var e = t,
                                i = !0;
                            if (e instanceof u.Polygon && (i = e.closed, e = e.points), !Array.isArray(e)) {
                                e = new Array(arguments.length);
                                for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
                            }
                            var n = new u.Polygon(e);
                            return n.closed = i, this.drawShape(n), this
                        }, r.prototype.clear = function() {
                            return this.lineWidth = 0, this.filling = !1, this.dirty++, this.clearDirty++, this.graphicsData = [], this
                        }, r.prototype.isFastRect = function() {
                            return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === c.SHAPES.RECT && !this.graphicsData[0].lineWidth
                        }, r.prototype._renderWebGL = function(t) {
                            this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
                        }, r.prototype._renderSpriteRect = function(t) {
                            var e = this.graphicsData[0].shape;
                            if (!this._spriteRect) {
                                if (!r._SPRITE_TEXTURE) {
                                    var i = document.createElement("canvas");
                                    i.width = 10, i.height = 10;
                                    var n = i.getContext("2d");
                                    n.fillStyle = "white", n.fillRect(0, 0, 10, 10), r._SPRITE_TEXTURE = a.fromCanvas(i)
                                }
                                this._spriteRect = new l(r._SPRITE_TEXTURE)
                            }
                            if (16777215 === this.tint) this._spriteRect.tint = this.graphicsData[0].fillColor;
                            else {
                                var s = y,
                                    o = m;
                                p.hex2rgb(this.graphicsData[0].fillColor, s), p.hex2rgb(this.tint, o), s[0] *= o[0], s[1] *= o[1], s[2] *= o[2], this._spriteRect.tint = p.rgb2hex(s)
                            }
                            this._spriteRect.alpha = this.graphicsData[0].fillAlpha, this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha, r._SPRITE_TEXTURE._frame.width = e.width, r._SPRITE_TEXTURE._frame.height = e.height, this._spriteRect.transform.worldTransform = this.transform.worldTransform, this._spriteRect.anchor.set(-e.x / e.width, -e.y / e.height), this._spriteRect.onAnchorUpdate(), this._spriteRect._renderWebGL(t)
                        }, r.prototype._renderCanvas = function(t) {
                            this.isMask !== !0 && t.plugins.graphics.render(this)
                        }, r.prototype._calculateBounds = function() {
                            if (this.renderable) {
                                this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.dirty++, this.cachedSpriteDirty = !0);
                                var t = this._localBounds;
                                this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
                            }
                        }, r.prototype.containsPoint = function(t) {
                            this.worldTransform.applyInverse(t, v);
                            for (var e = this.graphicsData, i = 0; i < e.length; i++) {
                                var r = e[i];
                                if (r.fill && r.shape && r.shape.contains(v.x, v.y)) return !0
                            }
                            return !1
                        }, r.prototype.updateLocalBounds = function() {
                            var t = 1 / 0,
                                e = -(1 / 0),
                                i = 1 / 0,
                                r = -(1 / 0);
                            if (this.graphicsData.length)
                                for (var n, s, o, a, h, l, u = 0; u < this.graphicsData.length; u++) {
                                    var p = this.graphicsData[u],
                                        d = p.type,
                                        f = p.lineWidth;
                                    if (n = p.shape, d === c.SHAPES.RECT || d === c.SHAPES.RREC) o = n.x - f / 2, a = n.y - f / 2, h = n.width + f, l = n.height + f, t = o < t ? o : t, e = o + h > e ? o + h : e, i = a < i ? a : i, r = a + l > r ? a + l : r;
                                    else if (d === c.SHAPES.CIRC) o = n.x, a = n.y, h = n.radius + f / 2, l = n.radius + f / 2, t = o - h < t ? o - h : t, e = o + h > e ? o + h : e, i = a - l < i ? a - l : i, r = a + l > r ? a + l : r;
                                    else if (d === c.SHAPES.ELIP) o = n.x, a = n.y, h = n.width + f / 2, l = n.height + f / 2, t = o - h < t ? o - h : t, e = o + h > e ? o + h : e, i = a - l < i ? a - l : i, r = a + l > r ? a + l : r;
                                    else {
                                        s = n.points;
                                        for (var _ = 0; _ < s.length; _ += 2) o = s[_], a = s[_ + 1], t = o - f < t ? o - f : t, e = o + f > e ? o + f : e, i = a - f < i ? a - f : i, r = a + f > r ? a + f : r
                                    }
                                } else t = 0, e = 0, i = 0, r = 0;
                            var g = this.boundsPadding;
                            this._localBounds.minX = t - g, this._localBounds.maxX = e + 2 * g, this._localBounds.minY = i - g, this._localBounds.maxY = r + 2 * g
                        }, r.prototype.drawShape = function(t) {
                            this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                            var e = new h(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                            return this.graphicsData.push(e), e.type === c.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e
                        }, r.prototype.generateCanvasTexture = function(t, e) {
                            e = e || 1;
                            var i = this.getLocalBounds(),
                                r = new o.create(i.width * e, i.height * e);
                            n || (n = new _), g.tx = -i.x, g.ty = -i.y, n.render(this, r, !1, g);
                            var s = a.fromCanvas(r.baseTexture._canvasRenderTarget.canvas, t);
                            return s.baseTexture.resolution = e, s
                        }, r.prototype.closePath = function() {
                            var t = this.currentPath;
                            return t && t.shape && t.shape.close(), this
                        }, r.prototype.addHole = function() {
                            var t = this.graphicsData.pop();
                            return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
                        }, r.prototype.destroy = function() {
                            s.prototype.destroy.apply(this, arguments);
                            for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                            for (var e in this._webgl)
                                for (var i = 0; i < this._webgl[e].data.length; ++i) this._webgl[e].data[i].destroy();
                            this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
                        }
                    }, {
                        "../const": 43,
                        "../display/Bounds": 44,
                        "../display/Container": 45,
                        "../math": 67,
                        "../renderers/canvas/CanvasRenderer": 74,
                        "../sprites/Sprite": 98,
                        "../textures/RenderTexture": 108,
                        "../textures/Texture": 109,
                        "../utils": 116,
                        "./GraphicsData": 51,
                        "./utils/bezierCurveTo": 53
                    }],
                    51: [function(t, e, i) {
                        function r(t, e, i, r, n, s, o) {
                            this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = r, this.fillAlpha = n, this._fillTint = r, this.fill = s, this.holes = [], this.shape = o, this.type = o.type
                        }
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
                        }, r.prototype.addHole = function(t) {
                            this.holes.push(t)
                        }, r.prototype.destroy = function() {
                            this.shape = null, this.holes = null
                        }
                    }, {}],
                    52: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t
                        }
                        var n = t("../../renderers/canvas/CanvasRenderer"),
                            s = t("../../const");
                        r.prototype.constructor = r, e.exports = r, n.registerPlugin("graphics", r), r.prototype.render = function(t) {
                            var e = this.renderer,
                                i = e.context,
                                r = t.worldAlpha,
                                n = t.transform.worldTransform,
                                o = e.resolution;
                            this._prevTint !== this.tint && (this.dirty = !0), i.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
                            for (var a = 0; a < t.graphicsData.length; a++) {
                                var h = t.graphicsData[a],
                                    l = h.shape,
                                    u = h._fillTint,
                                    c = h._lineTint;
                                if (i.lineWidth = h.lineWidth, h.type === s.SHAPES.POLY) {
                                    i.beginPath(), this.renderPolygon(l.points, l.closed, i);
                                    for (var p = 0; p < h.holes.length; p++) {
                                        var d = h.holes[p];
                                        this.renderPolygon(d.points, !0, i)
                                    }
                                    h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                                } else if (h.type === s.SHAPES.RECT)(h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.fillRect(l.x, l.y, l.width, l.height)), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.strokeRect(l.x, l.y, l.width, l.height));
                                else if (h.type === s.SHAPES.CIRC) i.beginPath(), i.arc(l.x, l.y, l.radius, 0, 2 * Math.PI), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke());
                                else if (h.type === s.SHAPES.ELIP) {
                                    var f = 2 * l.width,
                                        _ = 2 * l.height,
                                        g = l.x - f / 2,
                                        v = l.y - _ / 2;
                                    i.beginPath();
                                    var y = .5522848,
                                        m = f / 2 * y,
                                        x = _ / 2 * y,
                                        $ = g + f,
                                        T = v + _,
                                        b = g + f / 2,
                                        S = v + _ / 2;
                                    i.moveTo(g, S), i.bezierCurveTo(g, S - x, b - m, v, b, v), i.bezierCurveTo(b + m, v, $, S - x, $, S), i.bezierCurveTo($, S + x, b + m, T, b, T), i.bezierCurveTo(b - m, T, g, S + x, g, S), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                                } else if (h.type === s.SHAPES.RREC) {
                                    var E = l.x,
                                        w = l.y,
                                        P = l.width,
                                        M = l.height,
                                        A = l.radius,
                                        L = Math.min(P, M) / 2 | 0;
                                    A = A > L ? L : A, i.beginPath(), i.moveTo(E, w + A), i.lineTo(E, w + M - A), i.quadraticCurveTo(E, w + M, E + A, w + M), i.lineTo(E + P - A, w + M), i.quadraticCurveTo(E + P, w + M, E + P, w + M - A), i.lineTo(E + P, w + A), i.quadraticCurveTo(E + P, w, E + P - A, w), i.lineTo(E + A, w), i.quadraticCurveTo(E, w, E, w + A), i.closePath(), (h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                                }
                            }
                        }, r.prototype.updateGraphicsTint = function(t) {
                            t._prevTint = t.tint;
                            for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                                var s = t.graphicsData[n],
                                    o = 0 | s.fillColor,
                                    a = 0 | s.lineColor;
                                s._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * r * 255, s._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
                            }
                        }, r.prototype.renderPolygon = function(t, e, i) {
                            i.moveTo(t[0], t[1]);
                            for (var r = 1; r < t.length / 2; r++) i.lineTo(t[2 * r], t[2 * r + 1]);
                            e && i.closePath()
                        }, r.prototype.destroy = function() {
                            this.renderer = null
                        }
                    }, {
                        "../../const": 43,
                        "../../renderers/canvas/CanvasRenderer": 74
                    }],
                    53: [function(t, e, i) {
                        var r = function(t, e, i, r, n, s, o, a, h) {
                            h = h || [];
                            var l, u, c, p, d, f = 20;
                            h.push(t, e);
                            for (var _ = 0, g = 1; g <= f; ++g) _ = g / f, l = 1 - _, u = l * l, c = u * l, p = _ * _, d = p * _, h.push(c * t + 3 * u * _ * i + 3 * l * p * n + d * o, c * e + 3 * u * _ * r + 3 * l * p * s + d * a);
                            return h
                        };
                        e.exports = r
                    }, {}],
                    54: [function(t, e, i) {
                        function r(t) {
                            o.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.gl = t.gl, this.CONTEXT_UID = 0
                        }
                        var n = t("../../utils"),
                            s = t("../../const"),
                            o = t("../../renderers/webgl/utils/ObjectRenderer"),
                            a = t("../../renderers/webgl/WebGLRenderer"),
                            h = t("./WebGLGraphicsData"),
                            l = t("./shaders/PrimitiveShader"),
                            u = t("./utils/buildPoly"),
                            c = t("./utils/buildRectangle"),
                            p = t("./utils/buildRoundedRectangle"),
                            d = t("./utils/buildCircle");
                        r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, a.registerPlugin("graphics", r), r.prototype.onContextChange = function() {
                            this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new l(this.gl)
                        }, r.prototype.destroy = function() {
                            o.prototype.destroy.call(this);
                            for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                            this.graphicsDataPool = null
                        }, r.prototype.render = function(t) {
                            var e, i = this.renderer,
                                r = i.gl,
                                s = t._webGL[this.CONTEXT_UID];
                            s && t.dirty === s.dirty || (this.updateGraphics(t), s = t._webGL[this.CONTEXT_UID]);
                            var o = this.primitiveShader;
                            i.bindShader(o), i.state.setBlendMode(t.blendMode);
                            for (var a = 0, h = s.data.length; a < h; a++) {
                                e = s.data[a];
                                var l = e.shader;
                                i.bindShader(l), l.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), l.uniforms.tint = n.hex2rgb(t.tint), l.uniforms.alpha = t.worldAlpha, e.vao.bind().draw(r.TRIANGLE_STRIP, e.indices.length).unbind()
                            }
                        }, r.prototype.updateGraphics = function(t) {
                            var e = this.renderer.gl,
                                i = t._webGL[this.CONTEXT_UID];
                            i || (i = t._webGL[this.CONTEXT_UID] = {
                                lastIndex: 0,
                                data: [],
                                gl: e,
                                clearDirty: -1,
                                dirty: -1
                            }), i.dirty = t.dirty;
                            var r;
                            if (t.clearDirty !== i.clearDirty) {
                                for (i.clearDirty = t.clearDirty, r = 0; r < i.data.length; r++) {
                                    var n = i.data[r];
                                    this.graphicsDataPool.push(n)
                                }
                                i.data = [], i.lastIndex = 0
                            }
                            var o;
                            for (r = i.lastIndex; r < t.graphicsData.length; r++) {
                                var a = t.graphicsData[r];
                                o = this.getWebGLData(i, 0), a.type === s.SHAPES.POLY && u(a, o), a.type === s.SHAPES.RECT ? c(a, o) : a.type === s.SHAPES.CIRC || a.type === s.SHAPES.ELIP ? d(a, o) : a.type === s.SHAPES.RREC && p(a, o), i.lastIndex++
                            }
                            for (r = 0; r < i.data.length; r++) o = i.data[r], o.dirty && o.upload()
                        }, r.prototype.getWebGLData = function(t, e) {
                            var i = t.data[t.data.length - 1];
                            return (!i || i.points.length > 32e4) && (i = this.graphicsDataPool.pop() || new h(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), i.reset(e), t.data.push(i)), i.dirty = !0, i
                        }
                    }, {
                        "../../const": 43,
                        "../../renderers/webgl/WebGLRenderer": 81,
                        "../../renderers/webgl/utils/ObjectRenderer": 91,
                        "../../utils": 116,
                        "./WebGLGraphicsData": 55,
                        "./shaders/PrimitiveShader": 56,
                        "./utils/buildCircle": 57,
                        "./utils/buildPoly": 59,
                        "./utils/buildRectangle": 60,
                        "./utils/buildRoundedRectangle": 61
                    }],
                    55: [function(t, e, i) {
                        function r(t, e, i) {
                            this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = n.GLBuffer.createVertexBuffer(t), this.indexBuffer = n.GLBuffer.createIndexBuffer(t), this.dirty = !0, this.glPoints = null, this.glIndices = null, this.shader = e, this.vao = new n.VertexArrayObject(t, i).addIndex(this.indexBuffer).addAttribute(this.buffer, e.attributes.aVertexPosition, t.FLOAT, !1, 24, 0).addAttribute(this.buffer, e.attributes.aColor, t.FLOAT, !1, 24, 8)
                        }
                        var n = t("pixi-gl-core");
                        r.prototype.constructor = r, e.exports = r, r.prototype.reset = function() {
                            this.points.length = 0, this.indices.length = 0
                        }, r.prototype.upload = function() {
                            this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
                        }, r.prototype.destroy = function() {
                            this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
                        }
                    }, {
                        "pixi-gl-core": 12
                    }],
                    56: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"))
                        }
                        var n = t("../../../Shader");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../../Shader": 42
                    }],
                    57: [function(t, e, i) {
                        var r = t("./buildLine"),
                            n = t("../../../const"),
                            s = t("../../../utils"),
                            o = function(t, e) {
                                var i, o, a = t.shape,
                                    h = a.x,
                                    l = a.y;
                                t.type === n.SHAPES.CIRC ? (i = a.radius, o = a.radius) : (i = a.width, o = a.height);
                                var u = Math.floor(30 * Math.sqrt(a.radius)) || Math.floor(15 * Math.sqrt(a.width + a.height)),
                                    c = 2 * Math.PI / u,
                                    p = 0;
                                if (t.fill) {
                                    var d = s.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        _ = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = e.points,
                                        m = e.indices,
                                        x = y.length / 6;
                                    for (m.push(x), p = 0; p < u + 1; p++) y.push(h, l, _, g, v, f), y.push(h + Math.sin(c * p) * i, l + Math.cos(c * p) * o, _, g, v, f), m.push(x++, x++);
                                    m.push(x - 1)
                                }
                                if (t.lineWidth) {
                                    var $ = t.points;
                                    for (t.points = [], p = 0; p < u + 1; p++) t.points.push(h + Math.sin(c * p) * i, l + Math.cos(c * p) * o);
                                    r(t, e), t.points = $
                                }
                            };
                        e.exports = o
                    }, {
                        "../../../const": 43,
                        "../../../utils": 116,
                        "./buildLine": 58
                    }],
                    58: [function(t, e, i) {
                        var r = t("../../../math"),
                            n = t("../../../utils"),
                            s = function(t, e) {
                                var i = 0,
                                    s = t.points;
                                if (0 !== s.length) {
                                    var o = new r.Point(s[0], s[1]),
                                        a = new r.Point(s[s.length - 2], s[s.length - 1]);
                                    if (o.x === a.x && o.y === a.y) {
                                        s = s.slice(), s.pop(), s.pop(), a = new r.Point(s[s.length - 2], s[s.length - 1]);
                                        var h = a.x + .5 * (o.x - a.x),
                                            l = a.y + .5 * (o.y - a.y);
                                        s.unshift(h, l), s.push(h, l)
                                    }
                                    var u, c, p, d, f, _, g, v, y, m, x, $, T, b, S, E, w, P, M, A, L, D, R, O = e.points,
                                        C = e.indices,
                                        I = s.length / 2,
                                        F = s.length,
                                        N = O.length / 6,
                                        B = t.lineWidth / 2,
                                        U = n.hex2rgb(t.lineColor),
                                        k = t.lineAlpha,
                                        G = U[0] * k,
                                        j = U[1] * k,
                                        X = U[2] * k;
                                    for (p = s[0], d = s[1], f = s[2], _ = s[3], y = -(d - _), m = p - f, R = Math.sqrt(y * y + m * m), y /= R, m /= R, y *= B, m *= B, O.push(p - y, d - m, G, j, X, k), O.push(p + y, d + m, G, j, X, k), i = 1; i < I - 1; i++) p = s[2 * (i - 1)], d = s[2 * (i - 1) + 1], f = s[2 * i], _ = s[2 * i + 1], g = s[2 * (i + 1)], v = s[2 * (i + 1) + 1], y = -(d - _), m = p - f, R = Math.sqrt(y * y + m * m), y /= R, m /= R, y *= B, m *= B, x = -(_ - v), $ = f - g, R = Math.sqrt(x * x + $ * $), x /= R, $ /= R, x *= B, $ *= B, S = -m + d - (-m + _), E = -y + f - (-y + p), w = (-y + p) * (-m + _) - (-y + f) * (-m + d), P = -$ + v - (-$ + _), M = -x + f - (-x + g), A = (-x + g) * (-$ + _) - (-x + f) * (-$ + v), L = S * M - P * E, Math.abs(L) < .1 ? (L += 10.1, O.push(f - y, _ - m, G, j, X, k), O.push(f + y, _ + m, G, j, X, k)) : (u = (E * A - M * w) / L, c = (P * w - S * A) / L, D = (u - f) * (u - f) + (c - _) * (c - _), D > 19600 ? (T = y - x, b = m - $, R = Math.sqrt(T * T + b * b), T /= R, b /= R, T *= B, b *= B, O.push(f - T, _ - b), O.push(G, j, X, k), O.push(f + T, _ + b), O.push(G, j, X, k), O.push(f - T, _ - b), O.push(G, j, X, k), F++) : (O.push(u, c), O.push(G, j, X, k), O.push(f - (u - f), _ - (c - _)), O.push(G, j, X, k)));
                                    for (p = s[2 * (I - 2)], d = s[2 * (I - 2) + 1], f = s[2 * (I - 1)], _ = s[2 * (I - 1) + 1], y = -(d - _), m = p - f, R = Math.sqrt(y * y + m * m), y /= R, m /= R, y *= B, m *= B, O.push(f - y, _ - m), O.push(G, j, X, k), O.push(f + y, _ + m), O.push(G, j, X, k), C.push(N), i = 0; i < F; i++) C.push(N++);
                                    C.push(N - 1)
                                }
                            };
                        e.exports = s
                    }, {
                        "../../../math": 67,
                        "../../../utils": 116
                    }],
                    59: [function(t, e, i) {
                        var r = t("./buildLine"),
                            n = t("../../../utils"),
                            s = t("earcut"),
                            o = function(t, e) {
                                t.points = t.shape.points.slice();
                                var i = t.points;
                                if (t.fill && i.length >= 6) {
                                    for (var o = [], a = t.holes, h = 0; h < a.length; h++) {
                                        var l = a[h];
                                        o.push(i.length / 2), i = i.concat(l.points)
                                    }
                                    var u = e.points,
                                        c = e.indices,
                                        p = i.length / 2,
                                        d = n.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        _ = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = s(i, o, 2);
                                    if (!y) return;
                                    var m = u.length / 6;
                                    for (h = 0; h < y.length; h += 3) c.push(y[h] + m), c.push(y[h] + m), c.push(y[h + 1] + m), c.push(y[h + 2] + m), c.push(y[h + 2] + m);
                                    for (h = 0; h < p; h++) u.push(i[2 * h], i[2 * h + 1], _, g, v, f)
                                }
                                t.lineWidth > 0 && r(t, e)
                            };
                        e.exports = o
                    }, {
                        "../../../utils": 116,
                        "./buildLine": 58,
                        earcut: 2
                    }],
                    60: [function(t, e, i) {
                        var r = t("./buildLine"),
                            n = t("../../../utils"),
                            s = function(t, e) {
                                var i = t.shape,
                                    s = i.x,
                                    o = i.y,
                                    a = i.width,
                                    h = i.height;
                                if (t.fill) {
                                    var l = n.hex2rgb(t.fillColor),
                                        u = t.fillAlpha,
                                        c = l[0] * u,
                                        p = l[1] * u,
                                        d = l[2] * u,
                                        f = e.points,
                                        _ = e.indices,
                                        g = f.length / 6;
                                    f.push(s, o), f.push(c, p, d, u), f.push(s + a, o), f.push(c, p, d, u), f.push(s, o + h), f.push(c, p, d, u), f.push(s + a, o + h), f.push(c, p, d, u), _.push(g, g, g + 1, g + 2, g + 3, g + 3)
                                }
                                if (t.lineWidth) {
                                    var v = t.points;
                                    t.points = [s, o, s + a, o, s + a, o + h, s, o + h, s, o], r(t, e), t.points = v
                                }
                            };
                        e.exports = s
                    }, {
                        "../../../utils": 116,
                        "./buildLine": 58
                    }],
                    61: [function(t, e, i) {
                        var r = t("earcut"),
                            n = t("./buildLine"),
                            s = t("../../../utils"),
                            o = function(t, e) {
                                var i = t.shape,
                                    o = i.x,
                                    h = i.y,
                                    l = i.width,
                                    u = i.height,
                                    c = i.radius,
                                    p = [];
                                if (p.push(o, h + c), a(o, h + u - c, o, h + u, o + c, h + u, p), a(o + l - c, h + u, o + l, h + u, o + l, h + u - c, p), a(o + l, h + c, o + l, h, o + l - c, h, p), a(o + c, h, o, h, o, h + c + 1e-10, p), t.fill) {
                                    var d = s.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        _ = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = e.points,
                                        m = e.indices,
                                        x = y.length / 6,
                                        $ = r(p, null, 2),
                                        T = 0;
                                    for (T = 0; T < $.length; T += 3) m.push($[T] + x), m.push($[T] + x), m.push($[T + 1] + x), m.push($[T + 2] + x), m.push($[T + 2] + x);
                                    for (T = 0; T < p.length; T++) y.push(p[T], p[++T], _, g, v, f)
                                }
                                if (t.lineWidth) {
                                    var b = t.points;
                                    t.points = p, n(t, e), t.points = b
                                }
                            },
                            a = function(t, e, i, r, n, s, o) {
                                function a(t, e, i) {
                                    var r = e - t;
                                    return t + r * i
                                }
                                for (var h, l, u, c, p, d, f = 20, _ = o || [], g = 0, v = 0; v <= f; v++) g = v / f, h = a(t, i, g), l = a(e, r, g), u = a(i, n, g), c = a(r, s, g), p = a(h, u, g), d = a(l, c, g), _.push(p, d);
                                return _
                            };
                        e.exports = o
                    }, {
                        "../../../utils": 116,
                        "./buildLine": 58,
                        earcut: 2
                    }],
                    62: [function(t, e, i) {
                        var r = e.exports = Object.assign(t("./const"), t("./math"), {
                            utils: t("./utils"),
                            ticker: t("./ticker"),
                            DisplayObject: t("./display/DisplayObject"),
                            Container: t("./display/Container"),
                            Transform: t("./display/Transform"),
                            TransformStatic: t("./display/TransformStatic"),
                            TransformBase: t("./display/TransformBase"),
                            Sprite: t("./sprites/Sprite"),
                            CanvasSpriteRenderer: t("./sprites/canvas/CanvasSpriteRenderer"),
                            CanvasTinter: t("./sprites/canvas/CanvasTinter"),
                            SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
                            Text: t("./text/Text"),
                            TextStyle: t("./text/TextStyle"),
                            Graphics: t("./graphics/Graphics"),
                            GraphicsData: t("./graphics/GraphicsData"),
                            GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
                            CanvasGraphicsRenderer: t("./graphics/canvas/CanvasGraphicsRenderer"),
                            Texture: t("./textures/Texture"),
                            BaseTexture: t("./textures/BaseTexture"),
                            RenderTexture: t("./textures/RenderTexture"),
                            BaseRenderTexture: t("./textures/BaseRenderTexture"),
                            VideoBaseTexture: t("./textures/VideoBaseTexture"),
                            TextureUvs: t("./textures/TextureUvs"),
                            CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
                            CanvasRenderTarget: t("./renderers/canvas/utils/CanvasRenderTarget"),
                            Shader: t("./Shader"),
                            WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
                            WebGLManager: t("./renderers/webgl/managers/WebGLManager"),
                            ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
                            RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
                            Quad: t("./renderers/webgl/utils/Quad"),
                            SpriteMaskFilter: t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter"),
                            Filter: t("./renderers/webgl/filters/Filter"),
                            glCore: t("pixi-gl-core"),
                            autoDetectRenderer: function(t, e, i, n) {
                                return t = t || 800, e = e || 600, !n && r.utils.isWebGLSupported() ? new r.WebGLRenderer(t, e, i) : new r.CanvasRenderer(t, e, i)
                            }
                        })
                    }, {
                        "./Shader": 42,
                        "./const": 43,
                        "./display/Container": 45,
                        "./display/DisplayObject": 46,
                        "./display/Transform": 47,
                        "./display/TransformBase": 48,
                        "./display/TransformStatic": 49,
                        "./graphics/Graphics": 50,
                        "./graphics/GraphicsData": 51,
                        "./graphics/canvas/CanvasGraphicsRenderer": 52,
                        "./graphics/webgl/GraphicsRenderer": 54,
                        "./math": 67,
                        "./renderers/canvas/CanvasRenderer": 74,
                        "./renderers/canvas/utils/CanvasRenderTarget": 76,
                        "./renderers/webgl/WebGLRenderer": 81,
                        "./renderers/webgl/filters/Filter": 83,
                        "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 86,
                        "./renderers/webgl/managers/WebGLManager": 90,
                        "./renderers/webgl/utils/ObjectRenderer": 91,
                        "./renderers/webgl/utils/Quad": 92,
                        "./renderers/webgl/utils/RenderTarget": 93,
                        "./sprites/Sprite": 98,
                        "./sprites/canvas/CanvasSpriteRenderer": 99,
                        "./sprites/canvas/CanvasTinter": 100,
                        "./sprites/webgl/SpriteRenderer": 102,
                        "./text/Text": 104,
                        "./text/TextStyle": 105,
                        "./textures/BaseRenderTexture": 106,
                        "./textures/BaseTexture": 107,
                        "./textures/RenderTexture": 108,
                        "./textures/Texture": 109,
                        "./textures/TextureUvs": 110,
                        "./textures/VideoBaseTexture": 111,
                        "./ticker": 113,
                        "./utils": 116,
                        "pixi-gl-core": 12
                    }],
                    63: [function(t, e, i) {
                        function r(t) {
                            return t < 0 ? -1 : t > 0 ? 1 : 0
                        }

                        function n() {
                            for (var t = 0; t < 16; t++) {
                                var e = [];
                                c.push(e);
                                for (var i = 0; i < 16; i++)
                                    for (var n = r(s[t] * s[i] + a[t] * o[i]), p = r(o[t] * s[i] + h[t] * o[i]), d = r(s[t] * a[i] + a[t] * h[i]), f = r(o[t] * a[i] + h[t] * h[i]), _ = 0; _ < 16; _++)
                                        if (s[_] === n && o[_] === p && a[_] === d && h[_] === f) {
                                            e.push(_);
                                            break
                                        }
                            }
                            for (t = 0; t < 16; t++) {
                                var g = new u;
                                g.set(s[t], o[t], a[t], h[t], 0, 0), l.push(g)
                            }
                        }
                        var s = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                            o = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                            a = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                            h = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                            l = [],
                            u = t("./Matrix"),
                            c = [];
                        n();
                        var p = {
                            E: 0,
                            SE: 1,
                            S: 2,
                            SW: 3,
                            W: 4,
                            NW: 5,
                            N: 6,
                            NE: 7,
                            MIRROR_VERTICAL: 8,
                            MIRROR_HORIZONTAL: 12,
                            uX: function(t) {
                                return s[t]
                            },
                            uY: function(t) {
                                return o[t]
                            },
                            vX: function(t) {
                                return a[t]
                            },
                            vY: function(t) {
                                return h[t]
                            },
                            inv: function(t) {
                                return 8 & t ? 15 & t : 7 & -t
                            },
                            add: function(t, e) {
                                return c[t][e]
                            },
                            sub: function(t, e) {
                                return c[t][p.inv(e)]
                            },
                            rotate180: function(t) {
                                return 4 ^ t
                            },
                            isSwapWidthHeight: function(t) {
                                return 2 === (3 & t)
                            },
                            byDirection: function(t, e) {
                                return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? p.S : p.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? p.E : p.W : e > 0 ? t > 0 ? p.SE : p.SW : t > 0 ? p.NE : p.NW
                            },
                            matrixAppendRotationInv: function(t, e, i, r) {
                                var n = l[p.inv(e)];
                                i = i || 0, r = r || 0, n.tx = i, n.ty = r, t.append(n)
                            }
                        };
                        e.exports = p
                    }, {
                        "./Matrix": 64
                    }],
                    64: [function(t, e, i) {
                        function r() {
                            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this.array = null
                        }
                        var n = t("./Point");
                        r.prototype.constructor = r, e.exports = r, r.prototype.fromArray = function(t) {
                            this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                        }, r.prototype.set = function(t, e, i, r, n, s) {
                            return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = s, this
                        }, r.prototype.toArray = function(t, e) {
                            this.array || (this.array = new Float32Array(9));
                            var i = e || this.array;
                            return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
                        }, r.prototype.apply = function(t, e) {
                            e = e || new n;
                            var i = t.x,
                                r = t.y;
                            return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
                        }, r.prototype.applyInverse = function(t, e) {
                            e = e || new n;
                            var i = 1 / (this.a * this.d + this.c * -this.b),
                                r = t.x,
                                s = t.y;
                            return e.x = this.d * i * r + -this.c * i * s + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * s + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
                        }, r.prototype.translate = function(t, e) {
                            return this.tx += t, this.ty += e, this
                        }, r.prototype.scale = function(t, e) {
                            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                        }, r.prototype.rotate = function(t) {
                            var e = Math.cos(t),
                                i = Math.sin(t),
                                r = this.a,
                                n = this.c,
                                s = this.tx;
                            return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = s * e - this.ty * i, this.ty = s * i + this.ty * e, this
                        }, r.prototype.append = function(t) {
                            var e = this.a,
                                i = this.b,
                                r = this.c,
                                n = this.d;
                            return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
                        }, r.prototype.setTransform = function(t, e, i, r, n, s, o, a, h) {
                            var l, u, c, p, d, f, _, g, v, y;
                            return d = Math.sin(o), f = Math.cos(o), _ = Math.cos(h), g = Math.sin(h), v = -Math.sin(a), y = Math.cos(a), l = f * n, u = d * n, c = -d * s, p = f * s, this.a = _ * l + g * c, this.b = _ * u + g * p, this.c = v * l + y * c, this.d = v * u + y * p, this.tx = t + (i * l + r * c), this.ty = e + (i * u + r * p), this
                        }, r.prototype.prepend = function(t) {
                            var e = this.tx;
                            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                                var i = this.a,
                                    r = this.c;
                                this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                            }
                            return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                        }, r.prototype.decompose = function(t) {
                            var e = this.a,
                                i = this.b,
                                r = this.c,
                                n = this.d,
                                s = Math.atan2(-r, n),
                                o = Math.atan2(i, e),
                                a = Math.abs(1 - s / o);
                            return a < 1e-5 ? (t.rotation = o, e < 0 && n >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.skew.x = s, t.skew.y = o), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx, t.position.y = this.ty, t
                        }, r.prototype.invert = function() {
                            var t = this.a,
                                e = this.b,
                                i = this.c,
                                r = this.d,
                                n = this.tx,
                                s = t * r - e * i;
                            return this.a = r / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - r * n) / s, this.ty = -(t * this.ty - e * n) / s, this
                        }, r.prototype.identity = function() {
                            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                        }, r.prototype.clone = function() {
                            var t = new r;
                            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                        }, r.prototype.copy = function(t) {
                            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                        }, r.IDENTITY = new r, r.TEMP_MATRIX = new r
                    }, {
                        "./Point": 66
                    }],
                    65: [function(t, e, i) {
                        function r(t, e, i, r) {
                            this._x = i || 0, this._y = r || 0, this.cb = t, this.scope = e
                        }
                        r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            x: {
                                get: function() {
                                    return this._x
                                },
                                set: function(t) {
                                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                                }
                            },
                            y: {
                                get: function() {
                                    return this._y
                                },
                                set: function(t) {
                                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                                }
                            }
                        }), r.prototype.set = function(t, e) {
                            var i = t || 0,
                                r = e || (0 !== e ? i : 0);
                            this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
                        }, r.prototype.copy = function(t) {
                            this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
                        }
                    }, {}],
                    66: [function(t, e, i) {
                        function r(t, e) {
                            this.x = t || 0, this.y = e || 0
                        }
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.x, this.y)
                        }, r.prototype.copy = function(t) {
                            this.set(t.x, t.y)
                        }, r.prototype.equals = function(t) {
                            return t.x === this.x && t.y === this.y
                        }, r.prototype.set = function(t, e) {
                            this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
                        }
                    }, {}],
                    67: [function(t, e, i) {
                        e.exports = {
                            Point: t("./Point"),
                            ObservablePoint: t("./ObservablePoint"),
                            Matrix: t("./Matrix"),
                            GroupD8: t("./GroupD8"),
                            Circle: t("./shapes/Circle"),
                            Ellipse: t("./shapes/Ellipse"),
                            Polygon: t("./shapes/Polygon"),
                            Rectangle: t("./shapes/Rectangle"),
                            RoundedRectangle: t("./shapes/RoundedRectangle")
                        }
                    }, {
                        "./GroupD8": 63,
                        "./Matrix": 64,
                        "./ObservablePoint": 65,
                        "./Point": 66,
                        "./shapes/Circle": 68,
                        "./shapes/Ellipse": 69,
                        "./shapes/Polygon": 70,
                        "./shapes/Rectangle": 71,
                        "./shapes/RoundedRectangle": 72
                    }],
                    68: [function(t, e, i) {
                        function r(t, e, i) {
                            this.x = t || 0, this.y = e || 0, this.radius = i || 0, this.type = s.SHAPES.CIRC
                        }
                        var n = t("./Rectangle"),
                            s = t("../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.x, this.y, this.radius)
                        }, r.prototype.contains = function(t, e) {
                            if (this.radius <= 0) return !1;
                            var i = this.x - t,
                                r = this.y - e,
                                n = this.radius * this.radius;
                            return i *= i, r *= r, i + r <= n
                        }, r.prototype.getBounds = function() {
                            return new n(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                        }
                    }, {
                        "../../const": 43,
                        "./Rectangle": 71
                    }],
                    69: [function(t, e, i) {
                        function r(t, e, i, r) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = s.SHAPES.ELIP
                        }
                        var n = t("./Rectangle"),
                            s = t("../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.x, this.y, this.width, this.height)
                        }, r.prototype.contains = function(t, e) {
                            if (this.width <= 0 || this.height <= 0) return !1;
                            var i = (t - this.x) / this.width,
                                r = (e - this.y) / this.height;
                            return i *= i, r *= r, i + r <= 1
                        }, r.prototype.getBounds = function() {
                            return new n(this.x - this.width, this.y - this.height, this.width, this.height)
                        }
                    }, {
                        "../../const": 43,
                        "./Rectangle": 71
                    }],
                    70: [function(t, e, i) {
                        function r(t) {
                            var e = t;
                            if (!Array.isArray(e)) {
                                e = new Array(arguments.length);
                                for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
                            }
                            if (e[0] instanceof n) {
                                for (var r = [], o = 0, a = e.length; o < a; o++) r.push(e[o].x, e[o].y);
                                e = r
                            }
                            this.closed = !0, this.points = e, this.type = s.SHAPES.POLY
                        }
                        var n = t("../Point"),
                            s = t("../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.points.slice())
                        }, r.prototype.close = function() {
                            var t = this.points;
                            t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
                        }, r.prototype.contains = function(t, e) {
                            for (var i = !1, r = this.points.length / 2, n = 0, s = r - 1; n < r; s = n++) {
                                var o = this.points[2 * n],
                                    a = this.points[2 * n + 1],
                                    h = this.points[2 * s],
                                    l = this.points[2 * s + 1],
                                    u = a > e != l > e && t < (h - o) * (e - a) / (l - a) + o;
                                u && (i = !i)
                            }
                            return i
                        }
                    }, {
                        "../../const": 43,
                        "../Point": 66
                    }],
                    71: [function(t, e, i) {
                        function r(t, e, i, r) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = n.SHAPES.RECT
                        }
                        var n = t("../../const");
                        r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            left: {
                                get: function() {
                                    return this.x
                                }
                            },
                            right: {
                                get: function() {
                                    return this.x + this.width
                                }
                            },
                            top: {
                                get: function() {
                                    return this.y
                                }
                            },
                            bottom: {
                                get: function() {
                                    return this.y + this.height
                                }
                            }
                        }), r.EMPTY = new r(0, 0, 0, 0), r.prototype.clone = function() {
                            return new r(this.x, this.y, this.width, this.height)
                        }, r.prototype.copy = function(t) {
                            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                        }, r.prototype.contains = function(t, e) {
                            return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
                        }, r.prototype.pad = function(t, e) {
                            t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                        }, r.prototype.fit = function(t) {
                            this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0))
                        }, r.prototype.enlarge = function(t) {
                            if (t !== r.EMPTY) {
                                var e = Math.min(this.x, t.x),
                                    i = Math.max(this.x + this.width, t.x + t.width),
                                    n = Math.min(this.y, t.y),
                                    s = Math.max(this.y + this.height, t.y + t.height);
                                this.x = e, this.width = i - e, this.y = n, this.height = s - n
                            }
                        }
                    }, {
                        "../../const": 43
                    }],
                    72: [function(t, e, i) {
                        function r(t, e, i, r, s) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.radius = s || 20, this.type = n.SHAPES.RREC
                        }
                        var n = t("../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() {
                            return new r(this.x, this.y, this.width, this.height, this.radius)
                        }, r.prototype.contains = function(t, e) {
                            return !(this.width <= 0 || this.height <= 0) && t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height
                        }
                    }, {
                        "../../const": 43
                    }],
                    73: [function(t, e, i) {
                        function r(t, e, i, r) {
                            if (l.call(this), n.sayHello(t), r)
                                for (var s in o.DEFAULT_RENDER_OPTIONS) "undefined" == typeof r[s] && (r[s] = o.DEFAULT_RENDER_OPTIONS[s]);
                            else r = o.DEFAULT_RENDER_OPTIONS;
                            this.type = o.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = i || 600, this.view = r.view || document.createElement("canvas"), this.resolution = r.resolution, this.transparent = r.transparent, this.autoResize = r.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = r.preserveDrawingBuffer, this.clearBeforeRender = r.clearBeforeRender, this.roundPixels = r.roundPixels, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = r.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new a, this._lastObjectRendered = this._tempDisplayObjectParent
                        }
                        var n = t("../utils"),
                            s = t("../math"),
                            o = t("../const"),
                            a = t("../display/Container"),
                            h = t("../textures/RenderTexture"),
                            l = t("eventemitter3"),
                            u = new s.Matrix;
                        r.prototype = Object.create(l.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            backgroundColor: {
                                get: function() {
                                    return this._backgroundColor
                                },
                                set: function(t) {
                                    this._backgroundColor = t, this._backgroundColorString = n.hex2string(t), n.hex2rgb(t, this._backgroundColorRgba)
                                }
                            }
                        }), r.prototype.resize = function(t, e) {
                            this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
                        }, r.prototype.generateTexture = function(t, e, i) {
                            var r = t.getLocalBounds(),
                                n = h.create(0 | r.width, 0 | r.height, e, i);
                            return u.tx = -r.x, u.ty = -r.y, this.render(t, n, !1, u, !0), n
                        }, r.prototype.destroy = function(t) {
                            t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = o.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this.backgroundColor = 0, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
                        }
                    }, {
                        "../const": 43,
                        "../display/Container": 45,
                        "../math": 67,
                        "../textures/RenderTexture": 108,
                        "../utils": 116,
                        eventemitter3: 3
                    }],
                    74: [function(t, e, i) {
                        function r(t, e, i) {
                            i = i || {}, n.call(this, "Canvas", t, e, i), this.type = l.RENDERER_TYPE.CANVAS, this.rootContext = this.view.getContext("2d", {
                                alpha: this.transparent
                            }), this.rootResolution = this.resolution, this.refresh = !0, this.maskManager = new s(this), this.smoothProperty = "imageSmoothingEnabled", this.rootContext.imageSmoothingEnabled || (this.rootContext.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.rootContext.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.rootContext.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.rootContext.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this.blendModes = a(), this._activeBlendMode = null, this.context = null, this.renderingToScreen = !1, this.resize(t, e)
                        }
                        var n = t("../SystemRenderer"),
                            s = t("./utils/CanvasMaskManager"),
                            o = t("./utils/CanvasRenderTarget"),
                            a = t("./utils/mapCanvasBlendModesToPixi"),
                            h = t("../../utils"),
                            l = t("../../const");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, h.pluginTarget.mixin(r), r.prototype.render = function(t, e, i, r, n) {
                            if (this.view) {
                                this.renderingToScreen = !e, this.emit("prerender"), e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new o(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : (this.context = this.rootContext, this.resolution = this.rootResolution);
                                var s = this.context;
                                if (e || (this._lastObjectRendered = t), !n) {
                                    var a = t.parent,
                                        h = this._tempDisplayObjectParent.transform.worldTransform;
                                    r ? r.copy(h) : h.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
                                }
                                s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, s.globalCompositeOperation = this.blendModes[l.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), (void 0 !== i ? i : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, s.fillRect(0, 0, this.width, this.height)));
                                var u = this.context;
                                this.context = s, t.renderCanvas(this), this.context = u, this.emit("postrender")
                            }
                        }, r.prototype.setBlendMode = function(t) {
                            this._activeBlendMode !== t && (this.context.globalCompositeOperation = this.blendModes[t])
                        }, r.prototype.destroy = function(t) {
                            this.destroyPlugins(), n.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
                        }, r.prototype.resize = function(t, e) {
                            n.prototype.resize.call(this, t, e), this.smoothProperty && (this.rootContext[this.smoothProperty] = l.SCALE_MODES.DEFAULT === l.SCALE_MODES.LINEAR)
                        }
                    }, {
                        "../../const": 43,
                        "../../utils": 116,
                        "../SystemRenderer": 73,
                        "./utils/CanvasMaskManager": 75,
                        "./utils/CanvasRenderTarget": 76,
                        "./utils/mapCanvasBlendModesToPixi": 78
                    }],
                    75: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t
                        }
                        var n = t("../../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function(t) {
                            var e = this.renderer;
                            e.context.save();
                            var i = t.alpha,
                                r = t.transform.worldTransform,
                                n = e.resolution;
                            e.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = i
                        }, r.prototype.renderGraphicsShape = function(t) {
                            var e = this.renderer.context,
                                i = t.graphicsData.length;
                            if (0 !== i) {
                                e.beginPath();
                                for (var r = 0; r < i; r++) {
                                    var s = t.graphicsData[r],
                                        o = s.shape;
                                    if (s.type === n.SHAPES.POLY) {
                                        var a = o.points;
                                        e.moveTo(a[0], a[1]);
                                        for (var h = 1; h < a.length / 2; h++) e.lineTo(a[2 * h], a[2 * h + 1]);
                                        a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                                    } else if (s.type === n.SHAPES.RECT) e.rect(o.x, o.y, o.width, o.height), e.closePath();
                                    else if (s.type === n.SHAPES.CIRC) e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath();
                                    else if (s.type === n.SHAPES.ELIP) {
                                        var l = 2 * o.width,
                                            u = 2 * o.height,
                                            c = o.x - l / 2,
                                            p = o.y - u / 2,
                                            d = .5522848,
                                            f = l / 2 * d,
                                            _ = u / 2 * d,
                                            g = c + l,
                                            v = p + u,
                                            y = c + l / 2,
                                            m = p + u / 2;
                                        e.moveTo(c, m), e.bezierCurveTo(c, m - _, y - f, p, y, p),
                                            e.bezierCurveTo(y + f, p, g, m - _, g, m), e.bezierCurveTo(g, m + _, y + f, v, y, v), e.bezierCurveTo(y - f, v, c, m + _, c, m), e.closePath()
                                    } else if (s.type === n.SHAPES.RREC) {
                                        var x = o.x,
                                            $ = o.y,
                                            T = o.width,
                                            b = o.height,
                                            S = o.radius,
                                            E = Math.min(T, b) / 2 | 0;
                                        S = S > E ? E : S, e.moveTo(x, $ + S), e.lineTo(x, $ + b - S), e.quadraticCurveTo(x, $ + b, x + S, $ + b), e.lineTo(x + T - S, $ + b), e.quadraticCurveTo(x + T, $ + b, x + T, $ + b - S), e.lineTo(x + T, $ + S), e.quadraticCurveTo(x + T, $, x + T - S, $), e.lineTo(x + S, $), e.quadraticCurveTo(x, $, x, $ + S), e.closePath()
                                    }
                                }
                            }
                        }, r.prototype.popMask = function(t) {
                            t.context.restore()
                        }, r.prototype.destroy = function() {}
                    }, {
                        "../../../const": 43
                    }],
                    76: [function(t, e, i) {
                        function r(t, e, i) {
                            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || n.RESOLUTION, this.resize(t, e)
                        }
                        var n = t("../../../const");
                        r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return this.canvas.width
                                },
                                set: function(t) {
                                    this.canvas.width = t
                                }
                            },
                            height: {
                                get: function() {
                                    return this.canvas.height
                                },
                                set: function(t) {
                                    this.canvas.height = t
                                }
                            }
                        }), r.prototype.clear = function() {
                            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        }, r.prototype.resize = function(t, e) {
                            this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
                        }, r.prototype.destroy = function() {
                            this.context = null, this.canvas = null
                        }
                    }, {
                        "../../../const": 43
                    }],
                    77: [function(t, e, i) {
                        var r = function(t) {
                                var e = document.createElement("canvas");
                                e.width = 6, e.height = 1;
                                var i = e.getContext("2d");
                                return i.fillStyle = t, i.fillRect(0, 0, 6, 1), e
                            },
                            n = function() {
                                if ("undefined" == typeof document) return !1;
                                var t = r("#ff00ff"),
                                    e = r("#ffff00"),
                                    i = document.createElement("canvas");
                                i.width = 6, i.height = 1;
                                var n = i.getContext("2d");
                                n.globalCompositeOperation = "multiply", n.drawImage(t, 0, 0), n.drawImage(e, 2, 0);
                                var s = n.getImageData(2, 0, 1, 1);
                                if (!s) return !1;
                                var o = s.data;
                                return 255 === o[0] && 0 === o[1] && 0 === o[2]
                            };
                        e.exports = n
                    }, {}],
                    78: [function(t, e, i) {
                        function r(t) {
                            return t = t || [], s() ? (t[n.BLEND_MODES.NORMAL] = "source-over", t[n.BLEND_MODES.ADD] = "lighter", t[n.BLEND_MODES.MULTIPLY] = "multiply", t[n.BLEND_MODES.SCREEN] = "screen", t[n.BLEND_MODES.OVERLAY] = "overlay", t[n.BLEND_MODES.DARKEN] = "darken", t[n.BLEND_MODES.LIGHTEN] = "lighten", t[n.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[n.BLEND_MODES.COLOR_BURN] = "color-burn", t[n.BLEND_MODES.HARD_LIGHT] = "hard-light", t[n.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[n.BLEND_MODES.DIFFERENCE] = "difference", t[n.BLEND_MODES.EXCLUSION] = "exclusion", t[n.BLEND_MODES.HUE] = "hue", t[n.BLEND_MODES.SATURATION] = "saturate", t[n.BLEND_MODES.COLOR] = "color", t[n.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[n.BLEND_MODES.NORMAL] = "source-over", t[n.BLEND_MODES.ADD] = "lighter", t[n.BLEND_MODES.MULTIPLY] = "source-over", t[n.BLEND_MODES.SCREEN] = "source-over", t[n.BLEND_MODES.OVERLAY] = "source-over", t[n.BLEND_MODES.DARKEN] = "source-over", t[n.BLEND_MODES.LIGHTEN] = "source-over", t[n.BLEND_MODES.COLOR_DODGE] = "source-over", t[n.BLEND_MODES.COLOR_BURN] = "source-over", t[n.BLEND_MODES.HARD_LIGHT] = "source-over", t[n.BLEND_MODES.SOFT_LIGHT] = "source-over", t[n.BLEND_MODES.DIFFERENCE] = "source-over", t[n.BLEND_MODES.EXCLUSION] = "source-over", t[n.BLEND_MODES.HUE] = "source-over", t[n.BLEND_MODES.SATURATION] = "source-over", t[n.BLEND_MODES.COLOR] = "source-over", t[n.BLEND_MODES.LUMINOSITY] = "source-over"), t
                        }
                        var n = t("../../../const"),
                            s = t("./canUseNewCanvasBlendModes");
                        e.exports = r
                    }, {
                        "../../../const": 43,
                        "./canUseNewCanvasBlendModes": 77
                    }],
                    79: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = 3600, this.checkCountMax = 600, this.mode = n.GC_MODES.DEFAULT
                        }
                        var n = t("../../const");
                        r.prototype.constructor = r, e.exports = r, r.prototype.update = function() {
                            this.count++, this.mode !== n.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
                        }, r.prototype.run = function() {
                            var t, e, i = this.renderer.textureManager,
                                r = i._managedTextures,
                                n = !1;
                            for (t = 0; t < r.length; t++) {
                                var s = r[t];
                                !s._glRenderTargets && this.count - s.touched > this.maxIdle && (i.destroyTexture(s, !0), r[t] = null, n = !0)
                            }
                            if (n) {
                                for (e = 0, t = 0; t < r.length; t++) null !== r[t] && (r[e++] = r[t]);
                                r.length = e
                            }
                        }, r.prototype.unload = function(t) {
                            var e = this.renderer.textureManager;
                            t._texture && e.destroyTexture(t._texture, !0);
                            for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
                        }
                    }, {
                        "../../const": 43
                    }],
                    80: [function(t, e, i) {
                        var r = t("pixi-gl-core").GLTexture,
                            n = t("../../const"),
                            s = t("./utils/RenderTarget"),
                            o = t("../../utils"),
                            a = function(t) {
                                this.renderer = t, this.gl = t.gl, this._managedTextures = []
                            };
                        a.prototype.bindTexture = function() {}, a.prototype.getTexture = function() {}, a.prototype.updateTexture = function(t) {
                            t = t.baseTexture || t;
                            var e = !!t._glRenderTargets;
                            if (t.hasLoaded) {
                                var i = t._glTextures[this.renderer.CONTEXT_UID];
                                if (i) e ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : i.upload(t.source);
                                else {
                                    if (e) {
                                        var o = new s(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                                        o.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = o, i = o.texture
                                    } else i = new r(this.gl), i.premultiplyAlpha = !0, i.upload(t.source);
                                    t._glTextures[this.renderer.CONTEXT_UID] = i, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && i.enableMipmap(), t.wrapMode === n.WRAP_MODES.CLAMP ? i.enableWrapClamp() : t.wrapMode === n.WRAP_MODES.REPEAT ? i.enableWrapRepeat() : i.enableWrapMirrorRepeat()) : i.enableWrapClamp(), t.scaleMode === n.SCALE_MODES.NEAREST ? i.enableNearestScaling() : i.enableLinearScaling()
                                }
                                return i
                            }
                        }, a.prototype.destroyTexture = function(t, e) {
                            if (t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.renderer.CONTEXT_UID] && (t._glTextures[this.renderer.CONTEXT_UID].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.renderer.CONTEXT_UID], !e)) {
                                var i = this._managedTextures.indexOf(t);
                                i !== -1 && o.removeItems(this._managedTextures, i, 1)
                            }
                        }, a.prototype.removeAll = function() {
                            for (var t = 0; t < this._managedTextures.length; ++t) {
                                var e = this._managedTextures[t];
                                e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
                            }
                        }, a.prototype.destroy = function() {
                            for (var t = 0; t < this._managedTextures.length; ++t) {
                                var e = this._managedTextures[t];
                                this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
                            }
                            this._managedTextures = null
                        }, e.exports = a
                    }, {
                        "../../const": 43,
                        "../../utils": 116,
                        "./utils/RenderTarget": 93,
                        "pixi-gl-core": 12
                    }],
                    81: [function(t, e, i) {
                        function r(t, e, i) {
                            i = i || {}, n.call(this, "WebGL", t, e, i), this.type = y.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._contextOptions = {
                                alpha: this.transparent,
                                antialias: i.antialias,
                                premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                                stencil: !0,
                                preserveDrawingBuffer: i.preserveDrawingBuffer
                            }, this._backgroundColorRgba[3] = this.transparent ? 0 : 1, this.maskManager = new s(this), this.stencilManager = new o(this), this.emptyRenderer = new l(this), this.currentRenderer = this.emptyRenderer, this.initPlugins(), i.context && _(i.context), this.gl = i.context || d(this.view, this._contextOptions), this.CONTEXT_UID = m++, this.state = new p(this.gl), this.renderingToScreen = !0, this._initContext(), this.filterManager = new a(this), this.drawModes = f(this.gl), this._activeShader = null, this._activeRenderTarget = null, this._activeTextureLocation = 999, this._activeTexture = null, this.setBlendMode(0)
                        }
                        var n = t("../SystemRenderer"),
                            s = t("./managers/MaskManager"),
                            o = t("./managers/StencilManager"),
                            a = t("./managers/FilterManager"),
                            h = t("./utils/RenderTarget"),
                            l = t("./utils/ObjectRenderer"),
                            u = t("./TextureManager"),
                            c = t("./TextureGarbageCollector"),
                            p = t("./WebGLState"),
                            d = t("pixi-gl-core").createContext,
                            f = t("./utils/mapWebGLDrawModesToPixi"),
                            _ = t("./utils/validateContext"),
                            g = t("../../utils"),
                            v = t("pixi-gl-core"),
                            y = t("../../const"),
                            m = 0;
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, g.pluginTarget.mixin(r), r.prototype._initContext = function() {
                            var t = this.gl;
                            this.textureManager = new u(this), this.textureGC = new c(this), this.state.resetToDefault(), this.rootRenderTarget = new h(t, this.width, this.height, null, this.resolution, (!0)), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget), this.emit("context", t), this.resize(this.width, this.height)
                        }, r.prototype.render = function(t, e, i, r, n) {
                            if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                                if (e || (this._lastObjectRendered = t), !n) {
                                    var s = t.parent;
                                    t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = s
                                }
                                this.bindRenderTexture(e, r), this.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                            }
                        }, r.prototype.setObjectRenderer = function(t) {
                            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                        }, r.prototype.flush = function() {
                            this.setObjectRenderer(this.emptyRenderer)
                        }, r.prototype.resize = function(t, e) {
                            n.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
                        }, r.prototype.setBlendMode = function(t) {
                            this.state.setBlendMode(t)
                        }, r.prototype.clear = function(t) {
                            this._activeRenderTarget.clear(t)
                        }, r.prototype.setTransform = function(t) {
                            this._activeRenderTarget.transform = t
                        }, r.prototype.bindRenderTexture = function(t, e) {
                            var i;
                            if (t) {
                                var r = t.baseTexture,
                                    n = this.gl;
                                r._glRenderTargets[this.CONTEXT_UID] ? (this._activeTextureLocation = r._id, n.activeTexture(n.TEXTURE0 + r._id), n.bindTexture(n.TEXTURE_2D, null)) : (this.textureManager.updateTexture(r), n.bindTexture(n.TEXTURE_2D, null)), i = r._glRenderTargets[this.CONTEXT_UID], i.setFrame(t.frame)
                            } else i = this.rootRenderTarget;
                            return i.transform = e, this.bindRenderTarget(i), this
                        }, r.prototype.bindRenderTarget = function(t) {
                            return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
                        }, r.prototype.bindShader = function(t) {
                            return this._activeShader !== t && (this._activeShader = t, t.bind(), t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0)), this
                        }, r.prototype.bindTexture = function(t, e) {
                            t = t.baseTexture || t;
                            var i = this.gl;
                            return e = e || 0, this._activeTextureLocation !== e && (this._activeTextureLocation = e, i.activeTexture(i.TEXTURE0 + e)), this._activeTexture = t, t._glTextures[this.CONTEXT_UID] ? (t.touched = this.textureGC.count, t._glTextures[this.CONTEXT_UID].bind()) : this.textureManager.updateTexture(t), this
                        }, r.prototype.createVao = function() {
                            return new v.VertexArrayObject(this.gl, this.state.attribState)
                        }, r.prototype.reset = function() {
                            return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this._activeTextureLocation = 999, this._activeTexture = null, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
                        }, r.prototype.handleContextLost = function(t) {
                            t.preventDefault()
                        }, r.prototype.handleContextRestored = function() {
                            this._initContext(), this.textureManager.removeAll()
                        }, r.prototype.destroy = function(t) {
                            this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), n.prototype.destroy.call(this, t), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
                        }
                    }, {
                        "../../const": 43,
                        "../../utils": 116,
                        "../SystemRenderer": 73,
                        "./TextureGarbageCollector": 79,
                        "./TextureManager": 80,
                        "./WebGLState": 82,
                        "./managers/FilterManager": 87,
                        "./managers/MaskManager": 88,
                        "./managers/StencilManager": 89,
                        "./utils/ObjectRenderer": 91,
                        "./utils/RenderTarget": 93,
                        "./utils/mapWebGLDrawModesToPixi": 96,
                        "./utils/validateContext": 97,
                        "pixi-gl-core": 12
                    }],
                    82: [function(t, e, i) {
                        function r(t) {
                            this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = t, this.maxAttribs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = {
                                tempAttribState: new Array(this.maxAttribs),
                                attribState: new Array(this.maxAttribs)
                            }, this.blendModes = n(t), this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")
                        }
                        var n = t("./utils/mapWebGLBlendModesToPixi");
                        r.prototype.push = function() {
                            var t = this.stack[++this.stackIndex];
                            t || (t = this.stack[this.stackIndex] = new Uint8Array(16));
                            for (var e = 0; e < this.activeState.length; e++) this.activeState[e] = t[e]
                        };
                        var s = 0,
                            o = 1,
                            a = 2,
                            h = 3,
                            l = 4;
                        r.prototype.pop = function() {
                            var t = this.stack[--this.stackIndex];
                            this.setState(t)
                        }, r.prototype.setState = function(t) {
                            this.setBlend(t[s]), this.setDepthTest(t[o]), this.setFrontFace(t[a]), this.setCullFace(t[h]), this.setBlendMode(t[l])
                        }, r.prototype.setBlend = function(t) {
                            if (!(this.activeState[s] === t | 0)) {
                                this.activeState[s] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.BLEND) : e.disable(e.BLEND)
                            }
                        }, r.prototype.setBlendMode = function(t) {
                            t !== this.activeState[l] && (this.activeState[l] = t, this.gl.blendFunc(this.blendModes[t][0], this.blendModes[t][1]))
                        }, r.prototype.setDepthTest = function(t) {
                            if (!(this.activeState[o] === t | 0)) {
                                this.activeState[o] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)
                            }
                        }, r.prototype.setCullFace = function(t) {
                            if (!(this.activeState[h] === t | 0)) {
                                this.activeState[h] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE)
                            }
                        }, r.prototype.setFrontFace = function(t) {
                            if (!(this.activeState[a] === t | 0)) {
                                this.activeState[a] = 0 | t;
                                var e = this.gl;
                                t ? e.frontFace(e.CW) : e.frontFace(e.CCW)
                            }
                        }, r.prototype.resetAttributes = function() {
                            var t;
                            for (t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
                            for (t = 0; t < this.attribState.attribState.length; t++) this.attribState.attribState[t] = 0;
                            var e = this.gl;
                            for (t = 1; t < this.maxAttribs; t++) e.disableVertexAttribArray(t)
                        }, r.prototype.resetToDefault = function() {
                            this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                            for (var t = 0; t < this.activeState.length; t++) this.activeState[t] = 32;
                            var e = this.gl;
                            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
                        }, e.exports = r
                    }, {
                        "./utils/mapWebGLBlendModesToPixi": 95
                    }],
                    83: [function(t, e, i) {
                        function r(t, e, i) {
                            this.vertexSrc = t || r.defaultVertexSrc, this.fragmentSrc = e || r.defaultFragmentSrc, this.blendMode = o.BLEND_MODES.NORMAL, this.uniformData = i || n(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                            for (var h in this.uniformData) this.uniforms[h] = this.uniformData[h].value;
                            this.glShaders = [], a[this.vertexSrc + this.fragmentSrc] || (a[this.vertexSrc + this.fragmentSrc] = s.uid()), this.glShaderKey = a[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = 1, this.enabled = !0
                        }
                        var n = t("./extractUniformsFromSrc"),
                            s = t("../../../utils"),
                            o = t("../../../const"),
                            a = {};
                        e.exports = r, r.prototype.apply = function(t, e, i, r) {
                            t.applyFilter(this, e, i, r)
                        }, r.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n"), r.defaultFragmentSrc = ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
                    }, {
                        "../../../const": 43,
                        "../../../utils": 116,
                        "./extractUniformsFromSrc": 84
                    }],
                    84: [function(t, e, i) {
                        function r(t, e, i) {
                            var r = n(t, i),
                                s = n(e, i);
                            return Object.assign(r, s)
                        }

                        function n(t) {
                            for (var e, i = new RegExp("^(projectionMatrix|uSampler|filterArea)$"), r = {}, n = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < n.length; o++) {
                                var a = n[o].trim();
                                if (a.indexOf("uniform") > -1) {
                                    var h = a.split(" "),
                                        l = h[1],
                                        u = h[2],
                                        c = 1;
                                    u.indexOf("[") > -1 && (e = u.split(/\[|\]/), u = e[0], c *= Number(e[1])), u.match(i) || (r[u] = {
                                        value: s(l, c),
                                        name: u,
                                        type: l
                                    })
                                }
                            }
                            return r
                        }
                        var s = t("pixi-gl-core").shader.defaultValue;
                        e.exports = r
                    }, {
                        "pixi-gl-core": 12
                    }],
                    85: [function(t, e, i) {
                        var r = t("../../../math"),
                            n = function(t, e, i) {
                                var r = t.identity();
                                return r.translate(e.x / i.width, e.y / i.height), r.scale(i.width, i.height), r
                            },
                            s = function(t, e, i) {
                                var r = t.identity();
                                r.translate(e.x / i.width, e.y / i.height);
                                var n = i.width / e.width,
                                    s = i.height / e.height;
                                return r.scale(n, s), r
                            },
                            o = function(t, e, i, n) {
                                var s = n.worldTransform.copy(r.Matrix.TEMP_MATRIX),
                                    o = n._texture.baseTexture,
                                    a = t.identity(),
                                    h = i.height / i.width;
                                a.translate(e.x / i.width, e.y / i.height), a.scale(1, h);
                                var l = i.width / o.width,
                                    u = i.height / o.height;
                                return s.tx /= o.width * l, s.ty /= o.width * l, s.invert(), a.prepend(s), a.scale(1, 1 / h), a.scale(l, u), a.translate(n.anchor.x, n.anchor.y), a
                            };
                        e.exports = {
                            calculateScreenSpaceMatrix: n,
                            calculateNormalizedScreenSpaceMatrix: s,
                            calculateSpriteMatrix: o
                        }
                    }, {
                        "../../../math": 67
                    }],
                    86: [function(t, e, i) {
                        function r(t) {
                            var e = new s.Matrix;
                            n.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n"), t.renderable = !1, this.maskSprite = t, this.maskMatrix = e
                        }
                        var n = t("../Filter"),
                            s = t("../../../../math");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function(t, e, i) {
                            var r = this.maskSprite;
                            this.uniforms.mask = r._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, r), this.uniforms.alpha = r.worldAlpha, t.applyFilter(this, e, i)
                        }
                    }, {
                        "../../../../math": 67,
                        "../Filter": 83
                    }],
                    87: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t), this.gl = this.renderer.gl, this.quad = new o(this.gl, t.state.attribState), this.shaderCache = {}, this.pool = {}, this.filterData = null
                        }
                        var n = t("./WebGLManager"),
                            s = t("../utils/RenderTarget"),
                            o = t("../utils/Quad"),
                            a = t("../../../math"),
                            h = t("../../../Shader"),
                            l = t("../filters/filterTransforms"),
                            u = t("bit-twiddle"),
                            c = function() {
                                this.renderTarget = null, this.sourceFrame = new a.Rectangle, this.destinationFrame = new a.Rectangle, this.filters = [], this.target = null, this.resolution = 1
                            };
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushFilter = function(t, e) {
                            var i = this.renderer,
                                r = this.filterData;
                            if (!r) {
                                r = this.renderer._activeRenderTarget.filterStack;
                                var n = new c;
                                n.sourceFrame = n.destinationFrame = this.renderer._activeRenderTarget.size, n.renderTarget = i._activeRenderTarget, this.renderer._activeRenderTarget.filterData = r = {
                                    index: 0,
                                    stack: [n]
                                }, this.filterData = r
                            }
                            var s = r.stack[++r.index];
                            s || (s = r.stack[r.index] = new c);
                            var o = e[0].resolution,
                                a = e[0].padding,
                                h = t.filterArea || t.getBounds(!0),
                                l = s.sourceFrame,
                                u = s.destinationFrame;
                            l.x = (h.x * o | 0) / o, l.y = (h.y * o | 0) / o, l.width = (h.width * o | 0) / o, l.height = (h.height * o | 0) / o, r.stack[0].renderTarget.transform || l.fit(r.stack[0].destinationFrame), l.pad(a), u.width = l.width, u.height = l.height;
                            var p = this.getPotRenderTarget(i.gl, l.width, l.height, o);
                            s.target = t, s.filters = e, s.resolution = o, s.renderTarget = p, p.setFrame(u, l), i.bindRenderTarget(p), i.clear()
                        }, r.prototype.popFilter = function() {
                            var t = this.filterData,
                                e = t.stack[t.index - 1],
                                i = t.stack[t.index];
                            this.quad.map(i.renderTarget.size, i.sourceFrame).upload();
                            var r = i.filters;
                            if (1 === r.length) r[0].apply(this, i.renderTarget, e.renderTarget, !1), this.freePotRenderTarget(i.renderTarget);
                            else {
                                var n = i.renderTarget,
                                    s = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, 1);
                                s.setFrame(i.destinationFrame, i.sourceFrame);
                                for (var o = 0; o < r.length - 1; o++) {
                                    r[o].apply(this, n, s, !0);
                                    var a = n;
                                    n = s, s = a
                                }
                                r[o].apply(this, n, e.renderTarget, !1), this.freePotRenderTarget(n), this.freePotRenderTarget(s)
                            }
                            t.index--, 0 === t.index && (this.filterData = null)
                        }, r.prototype.applyFilter = function(t, e, i, r) {
                            var n = this.renderer,
                                s = t.glShaders[n.CONTEXT_UID];
                            if (s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey], s || (s = t.glShaders[n.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = new h(this.gl, t.vertexSrc, t.fragmentSrc))) : s = t.glShaders[n.CONTEXT_UID] = new h(this.gl, t.vertexSrc, t.fragmentSrc), this.quad.initVao(s)), n.bindRenderTarget(i), r) {
                                var o = n.gl;
                                o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)
                            }
                            i === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), n.bindShader(s), this.syncUniforms(s, t), e.texture.bind(0), n._activeTextureLocation = 0, n.state.setBlendMode(t.blendMode), this.quad.draw()
                        }, r.prototype.syncUniforms = function(t, e) {
                            var i, r = e.uniformData,
                                n = e.uniforms,
                                s = 1;
                            if (t.uniforms.data.filterArea) {
                                i = this.filterData.stack[this.filterData.index];
                                var o = t.uniforms.filterArea;
                                o[0] = i.renderTarget.size.width, o[1] = i.renderTarget.size.height, o[2] = i.sourceFrame.x, o[3] = i.sourceFrame.y, t.uniforms.filterArea = o
                            }
                            if (t.uniforms.data.filterClamp) {
                                i = this.filterData.stack[this.filterData.index];
                                var a = t.uniforms.filterClamp;
                                a[0] = .5 / i.renderTarget.size.width, a[1] = .5 / i.renderTarget.size.height, a[2] = (i.sourceFrame.width - .5) / i.renderTarget.size.width, a[3] = (i.sourceFrame.height - .5) / i.renderTarget.size.height, t.uniforms.filterClamp = a
                            }
                            var h;
                            for (var l in r)
                                if ("sampler2D" === r[l].type) {
                                    if (t.uniforms[l] = s, n[l].baseTexture) this.renderer.bindTexture(n[l].baseTexture, s);
                                    else {
                                        var u = this.renderer.gl;
                                        this.renderer._activeTextureLocation = u.TEXTURE0 + s, u.activeTexture(u.TEXTURE0 + s), n[l].texture.bind()
                                    }
                                    s++
                                } else "mat3" === r[l].type ? void 0 !== n[l].a ? t.uniforms[l] = n[l].toArray(!0) : t.uniforms[l] = n[l] : "vec2" === r[l].type ? void 0 !== n[l].x ? (h = t.uniforms[l] || new Float32Array(2), h[0] = n[l].x, h[1] = n[l].y, t.uniforms[l] = h) : t.uniforms[l] = n[l] : "float" === r[l].type ? t.uniforms.data[l].value !== r[l] && (t.uniforms[l] = n[l]) : t.uniforms[l] = n[l]
                        }, r.prototype.getRenderTarget = function(t, e) {
                            var i = this.filterData.stack[this.filterData.index],
                                r = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, e || i.resolution);
                            return r.setFrame(i.destinationFrame, i.sourceFrame), r
                        }, r.prototype.returnRenderTarget = function(t) {
                            return this.freePotRenderTarget(t)
                        }, r.prototype.calculateScreenSpaceMatrix = function(t) {
                            var e = this.filterData.stack[this.filterData.index];
                            return l.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
                        }, r.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
                            var e = this.filterData.stack[this.filterData.index];
                            return l.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
                        }, r.prototype.calculateSpriteMatrix = function(t, e) {
                            var i = this.filterData.stack[this.filterData.index];
                            return l.calculateSpriteMatrix(t, i.sourceFrame, i.renderTarget.size, e)
                        }, r.prototype.destroy = function() {
                            this.shaderCache = [], this.emptyPool()
                        }, r.prototype.getPotRenderTarget = function(t, e, i, r) {
                            e = u.nextPow2(e * r), i = u.nextPow2(i * r);
                            var n = (65535 & e) << 16 | 65535 & i;
                            this.pool[n] || (this.pool[n] = []);
                            var o = this.pool[n].pop() || new s(t, e, i, null, 1);
                            return o.resolution = r, o.defaultFrame.width = o.size.width = e / r, o.defaultFrame.height = o.size.height = i / r, o
                        }, r.prototype.emptyPool = function() {
                            for (var t in this.pool) {
                                var e = this.pool[t];
                                if (e)
                                    for (var i = 0; i < e.length; i++) e[i].destroy(!0)
                            }
                            this.pool = {}
                        }, r.prototype.freePotRenderTarget = function(t) {
                            var e = t.size.width * t.resolution,
                                i = t.size.height * t.resolution,
                                r = (65535 & e) << 16 | 65535 & i;
                            this.pool[r].push(t)
                        }
                    }, {
                        "../../../Shader": 42,
                        "../../../math": 67,
                        "../filters/filterTransforms": 85,
                        "../utils/Quad": 92,
                        "../utils/RenderTarget": 93,
                        "./WebGLManager": 90,
                        "bit-twiddle": 1
                    }],
                    88: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t), this.scissor = !1, this.scissorData = null, this.scissorRenderTarget = null, this.enableScissor = !0, this.alphaMaskPool = [], this.alphaMaskIndex = 0
                        }
                        var n = t("./WebGLManager"),
                            s = t("../filters/spriteMask/SpriteMaskFilter");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function(t, e) {
                            if (e.texture) this.pushSpriteMask(t, e);
                            else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                                var i = e.worldTransform,
                                    r = Math.atan2(i.b, i.a);
                                r = Math.round(r * (180 / Math.PI)), r % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
                            } else this.pushStencilMask(e)
                        }, r.prototype.popMask = function(t, e) {
                            e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
                        }, r.prototype.pushSpriteMask = function(t, e) {
                            var i = this.alphaMaskPool[this.alphaMaskIndex];
                            i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new s(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, i), this.alphaMaskIndex++
                        }, r.prototype.popSpriteMask = function() {
                            this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
                        }, r.prototype.pushStencilMask = function(t) {
                            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
                        }, r.prototype.popStencilMask = function() {
                            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
                        }, r.prototype.pushScissorMask = function(t, e) {
                            e.renderable = !0;
                            var i = this.renderer._activeRenderTarget,
                                r = e.getBounds();
                            r.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                            var n = this.renderer.resolution;
                            this.renderer.gl.scissor(r.x * n, (i.root ? i.size.height - r.y - r.height : r.y) * n, r.width * n, r.height * n), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
                        }, r.prototype.popScissorMask = function() {
                            this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                            var t = this.renderer.gl;
                            t.disable(t.SCISSOR_TEST)
                        }
                    }, {
                        "../filters/spriteMask/SpriteMaskFilter": 86,
                        "./WebGLManager": 90
                    }],
                    89: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t), this.stencilMaskStack = null
                        }
                        var n = t("./WebGLManager");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setMaskStack = function(t) {
                            this.stencilMaskStack = t;
                            var e = this.renderer.gl;
                            0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
                        }, r.prototype.pushStencil = function(t) {
                            this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                            var e = this.renderer.gl,
                                i = this.stencilMaskStack;
                            0 === i.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 1)), i.push(t), e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, i.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
                        }, r.prototype.popStencil = function() {
                            this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                            var t = this.renderer.gl,
                                e = this.stencilMaskStack,
                                i = e.pop();
                            0 === e.length ? t.disable(t.STENCIL_TEST) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(i), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP))
                        }, r.prototype.destroy = function() {
                            n.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
                        }
                    }, {
                        "./WebGLManager": 90
                    }],
                    90: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t, this.renderer.on("context", this.onContextChange, this)
                        }
                        r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function() {}, r.prototype.destroy = function() {
                            this.renderer.off("context", this.onContextChange, this), this.renderer = null
                        }
                    }, {}],
                    91: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t)
                        }
                        var n = t("../managers/WebGLManager");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.start = function() {}, r.prototype.stop = function() {
                            this.flush()
                        }, r.prototype.flush = function() {}, r.prototype.render = function(t) {}
                    }, {
                        "../managers/WebGLManager": 90
                    }],
                    92: [function(t, e, i) {
                        function r(t, e) {
                            this.gl = t, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                            for (var i = 0; i < 4; i++) this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
                            this.indices = s(1), this.vertexBuffer = n.GLBuffer.createVertexBuffer(t, this.interleaved, t.STATIC_DRAW), this.indexBuffer = n.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.vao = new n.VertexArrayObject(t, e)
                        }
                        var n = t("pixi-gl-core"),
                            s = t("../../../utils/createIndicesForQuads");
                        r.prototype.constructor = r, r.prototype.initVao = function(t) {
                            this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
                        }, r.prototype.map = function(t, e) {
                            var i = 0,
                                r = 0;
                            return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this
                        }, r.prototype.draw = function() {
                            return this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind(), this
                        }, r.prototype.upload = function() {
                            for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                            return this.vertexBuffer.upload(this.interleaved), this
                        }, r.prototype.destroy = function() {
                            var t = this.gl;
                            t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
                        }, e.exports = r
                    }, {
                        "../../../utils/createIndicesForQuads": 114,
                        "pixi-gl-core": 12
                    }],
                    93: [function(t, e, i) {
                        var r = t("../../../math"),
                            n = t("../../../const"),
                            s = t("pixi-gl-core").GLFramebuffer,
                            o = function(t, e, i, o, a, h) {
                                this.gl = t, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new r.Rectangle(0, 0, 1, 1), this.resolution = a || n.RESOLUTION, this.projectionMatrix = new r.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new r.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = o || n.SCALE_MODES.DEFAULT, this.root = h, this.root ? (this.frameBuffer = new s(t, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = s.createRGBA(t, 100, 100), this.scaleMode === n.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(e, i)
                            };
                        o.prototype.constructor = o, e.exports = o, o.prototype.clear = function(t) {
                            var e = t || this.clearColor;
                            this.frameBuffer.clear(e[0], e[1], e[2], e[3]);
                        }, o.prototype.attachStencilBuffer = function() {
                            this.root || this.frameBuffer.enableStencil()
                        }, o.prototype.setFrame = function(t, e) {
                            this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t
                        }, o.prototype.activate = function() {
                            var t = this.gl;
                            this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
                        }, o.prototype.calculateProjection = function(t, e) {
                            var i = this.projectionMatrix;
                            e = e || t, i.identity(), this.root ? (i.a = 1 / t.width * 2, i.d = -1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = 1 - e.y * i.d) : (i.a = 1 / t.width * 2, i.d = 1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = -1 - e.y * i.d)
                        }, o.prototype.resize = function(t, e) {
                            if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
                                this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                                var i = this.frame || this.size;
                                this.calculateProjection(i)
                            }
                        }, o.prototype.destroy = function() {
                            this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
                        }
                    }, {
                        "../../../const": 43,
                        "../../../math": 67,
                        "pixi-gl-core": 12
                    }],
                    94: [function(t, e, i) {
                        function r(t) {
                            for (var e = "", i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
                            return e
                        }
                        var n = t("pixi-gl-core"),
                            s = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n"),
                            o = function(t, e) {
                                var i = !e;
                                if (i) {
                                    var o = document.createElement("canvas");
                                    o.width = 1, o.height = 1, e = n.createContext(o)
                                }
                                for (var a = e.createShader(e.FRAGMENT_SHADER);;) {
                                    var h = s.replace(/%forloop%/gi, r(t));
                                    if (e.shaderSource(a, h), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS)) break;
                                    t = t / 2 | 0
                                }
                                return i && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
                            };
                        e.exports = o
                    }, {
                        "pixi-gl-core": 12
                    }],
                    95: [function(t, e, i) {
                        function r(t, e) {
                            return e = e || [], e[n.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[n.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e
                        }
                        var n = t("../../../const");
                        e.exports = r
                    }, {
                        "../../../const": 43
                    }],
                    96: [function(t, e, i) {
                        function r(t, e) {
                            e = e || {}, e[n.DRAW_MODES.POINTS] = t.POINTS, e[n.DRAW_MODES.LINES] = t.LINES, e[n.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[n.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[n.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[n.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[n.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN
                        }
                        var n = t("../../../const");
                        e.exports = r
                    }, {
                        "../../../const": 43
                    }],
                    97: [function(t, e, i) {
                        function r(t) {
                            var e = t.getContextAttributes();
                            e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
                        }
                        e.exports = r
                    }, {}],
                    98: [function(t, e, i) {
                        function r(t) {
                            o.call(this), this.anchor = new n.ObservablePoint(this.onAnchorUpdate, this), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = h.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || s.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1
                        }
                        var n = t("../math"),
                            s = t("../textures/Texture"),
                            o = t("../display/Container"),
                            a = t("../utils"),
                            h = t("../const"),
                            l = new n.Point;
                        r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return Math.abs(this.scale.x) * this.texture.orig.width
                                },
                                set: function(t) {
                                    var e = a.sign(this.scale.x) || 1;
                                    this.scale.x = e * t / this.texture.orig.width, this._width = t
                                }
                            },
                            height: {
                                get: function() {
                                    return Math.abs(this.scale.y) * this.texture.orig.height
                                },
                                set: function(t) {
                                    var e = a.sign(this.scale.y) || 1;
                                    this.scale.y = e * t / this.texture.orig.height, this._height = t
                                }
                            },
                            tint: {
                                get: function() {
                                    return this._tint
                                },
                                set: function(t) {
                                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                                }
                            },
                            texture: {
                                get: function() {
                                    return this._texture
                                },
                                set: function(t) {
                                    this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                                }
                            }
                        }), r.prototype._onTextureUpdate = function() {
                            this._textureID = -1, this._width && (this.scale.x = a.sign(this.scale.x) * this._width / this.texture.orig.width), this._height && (this.scale.y = a.sign(this.scale.y) * this._height / this.texture.orig.height)
                        }, r.prototype.onAnchorUpdate = function() {
                            this._transformID = -1
                        }, r.prototype.calculateVertices = function() {
                            if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                                this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                                var t, e, i, r, n = this._texture,
                                    s = this.transform.worldTransform,
                                    o = s.a,
                                    a = s.b,
                                    h = s.c,
                                    l = s.d,
                                    u = s.tx,
                                    c = s.ty,
                                    p = this.vertexData,
                                    d = n.trim,
                                    f = n.orig;
                                d ? (e = d.x - this.anchor._x * f.width, t = e + d.width, r = d.y - this.anchor._y * f.height, i = r + d.height) : (t = f.width * (1 - this.anchor._x), e = f.width * -this.anchor._x, i = f.height * (1 - this.anchor._y), r = f.height * -this.anchor._y), p[0] = o * e + h * r + u, p[1] = l * r + a * e + c, p[2] = o * t + h * r + u, p[3] = l * r + a * t + c, p[4] = o * t + h * i + u, p[5] = l * i + a * t + c, p[6] = o * e + h * i + u, p[7] = l * i + a * e + c
                            }
                        }, r.prototype.calculateTrimmedVertices = function() {
                            this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
                            var t, e, i, r, n = this._texture,
                                s = this.vertexTrimmedData,
                                o = n.orig,
                                a = this.transform.worldTransform,
                                h = a.a,
                                l = a.b,
                                u = a.c,
                                c = a.d,
                                p = a.tx,
                                d = a.ty;
                            t = o.width * (1 - this.anchor._x), e = o.width * -this.anchor._x, i = o.height * (1 - this.anchor._y), r = o.height * -this.anchor._y, s[0] = h * e + u * r + p, s[1] = c * r + l * e + d, s[2] = h * t + u * r + p, s[3] = c * r + l * t + d, s[4] = h * t + u * i + p, s[5] = c * i + l * t + d, s[6] = h * e + u * i + p, s[7] = c * i + l * e + d
                        }, r.prototype._renderWebGL = function(t) {
                            this.calculateVertices(), t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
                        }, r.prototype._renderCanvas = function(t) {
                            t.plugins.sprite.render(this)
                        }, r.prototype._calculateBounds = function() {
                            var t = this._texture.trim,
                                e = this._texture.orig;
                            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                        }, r.prototype.getLocalBounds = function(t) {
                            return 0 === this.children.length ? (this._bounds.minX = -this._texture.orig.width * this.anchor._x, this._bounds.minY = -this._texture.orig.height * this.anchor._y, this._bounds.maxX = this._texture.orig.width, this._bounds.maxY = this._texture.orig.height, t || (this._localBoundsRect || (this._localBoundsRect = new n.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : o.prototype.getLocalBounds.call(this, t)
                        }, r.prototype.containsPoint = function(t) {
                            this.worldTransform.applyInverse(t, l);
                            var e, i = this._texture.orig.width,
                                r = this._texture.orig.height,
                                n = -i * this.anchor.x;
                            return l.x > n && l.x < n + i && (e = -r * this.anchor.y, l.y > e && l.y < e + r)
                        }, r.prototype.destroy = function(t) {
                            o.prototype.destroy.call(this, t), this.anchor = null;
                            var e = "boolean" == typeof t ? t : t && t.texture;
                            if (e) {
                                var i = "boolean" == typeof t ? t : t && t.baseTexture;
                                this._texture.destroy(!!i)
                            }
                            this._texture = null, this.shader = null
                        }, r.from = function(t) {
                            return new r(s.from(t))
                        }, r.fromFrame = function(t) {
                            var e = a.TextureCache[t];
                            if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                            return new r(e)
                        }, r.fromImage = function(t, e, i) {
                            return new r(s.fromImage(t, e, i))
                        }
                    }, {
                        "../const": 43,
                        "../display/Container": 45,
                        "../math": 67,
                        "../textures/Texture": 109,
                        "../utils": 116
                    }],
                    99: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t
                        }
                        var n = t("../../renderers/canvas/CanvasRenderer"),
                            s = t("../../const"),
                            o = t("../../math"),
                            a = new o.Matrix,
                            h = t("./CanvasTinter");
                        r.prototype.constructor = r, e.exports = r, n.registerPlugin("sprite", r), r.prototype.render = function(t) {
                            var e, i, r = t._texture,
                                n = this.renderer,
                                l = t.transform.worldTransform,
                                u = r._frame.width,
                                c = r._frame.height;
                            if (!(r.orig.width <= 0 || r.orig.height <= 0) && r.baseTexture.source && (n.setBlendMode(t.blendMode), r.valid)) {
                                n.context.globalAlpha = t.worldAlpha;
                                var p = r.baseTexture.scaleMode === s.SCALE_MODES.LINEAR;
                                n.smoothProperty && n.context[n.smoothProperty] !== p && (n.context[n.smoothProperty] = p), r.trim ? (e = r.trim.width / 2 + r.trim.x - t.anchor.x * r.orig.width, i = r.trim.height / 2 + r.trim.y - t.anchor.y * r.orig.height) : (e = (.5 - t.anchor.x) * r.orig.width, i = (.5 - t.anchor.y) * r.orig.height), r.rotate && (l.copy(a), l = a, o.GroupD8.matrixAppendRotationInv(l, r.rotate, e, i), e = 0, i = 0), e -= u / 2, i -= c / 2, n.roundPixels ? (n.context.setTransform(l.a, l.b, l.c, l.d, l.tx * n.resolution | 0, l.ty * n.resolution | 0), e = 0 | e, i = 0 | i) : n.context.setTransform(l.a, l.b, l.c, l.d, l.tx * n.resolution, l.ty * n.resolution);
                                var d = r.baseTexture.resolution;
                                16777215 !== t.tint ? (t.cachedTint !== t.tint && (t.cachedTint = t.tint, t.tintedTexture = h.getTintedTexture(t, t.tint)), n.context.drawImage(t.tintedTexture, 0, 0, u * d, c * d, e * n.resolution, i * n.resolution, u * n.resolution, c * n.resolution)) : n.context.drawImage(r.baseTexture.source, r._frame.x * d, r._frame.y * d, u * d, c * d, e * n.resolution, i * n.resolution, u * n.resolution, c * n.resolution)
                            }
                        }, r.prototype.destroy = function() {
                            this.renderer = null
                        }
                    }, {
                        "../../const": 43,
                        "../../math": 67,
                        "../../renderers/canvas/CanvasRenderer": 74,
                        "./CanvasTinter": 100
                    }],
                    100: [function(t, e, i) {
                        var r = t("../../utils"),
                            n = t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),
                            s = e.exports = {
                                getTintedTexture: function(t, e) {
                                    var i = t.texture;
                                    e = s.roundColor(e);
                                    var r = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                                    if (i.tintCache = i.tintCache || {}, i.tintCache[r]) return i.tintCache[r];
                                    var n = s.canvas || document.createElement("canvas");
                                    if (s.tintMethod(i, e, n), s.convertTintToImage) {
                                        var o = new Image;
                                        o.src = n.toDataURL(), i.tintCache[r] = o
                                    } else i.tintCache[r] = n, s.canvas = null;
                                    return n
                                },
                                tintWithMultiply: function(t, e, i) {
                                    var r = i.getContext("2d"),
                                        n = t._frame.clone(),
                                        s = t.baseTexture.resolution;
                                    n.x *= s, n.y *= s, n.width *= s, n.height *= s, i.width = n.width, i.height = n.height, r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
                                },
                                tintWithOverlay: function(t, e, i) {
                                    var r = i.getContext("2d"),
                                        n = t._frame.clone(),
                                        s = t.baseTexture.resolution;
                                    n.x *= s, n.y *= s, n.width *= s, n.height *= s, i.width = n.width, i.height = n.height, r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
                                },
                                tintWithPerPixel: function(t, e, i) {
                                    var n = i.getContext("2d"),
                                        s = t._frame.clone(),
                                        o = t.baseTexture.resolution;
                                    s.x *= o, s.y *= o, s.width *= o, s.height *= o, i.width = s.width, i.height = s.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                                    for (var a = r.hex2rgb(e), h = a[0], l = a[1], u = a[2], c = n.getImageData(0, 0, s.width, s.height), p = c.data, d = 0; d < p.length; d += 4) p[d + 0] *= h, p[d + 1] *= l, p[d + 2] *= u;
                                    n.putImageData(c, 0, 0)
                                },
                                roundColor: function(t) {
                                    var e = s.cacheStepsPerColorChannel,
                                        i = r.hex2rgb(t);
                                    return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), r.rgb2hex(i)
                                },
                                cacheStepsPerColorChannel: 8,
                                convertTintToImage: !1,
                                canUseMultiply: n(),
                                tintMethod: 0
                            };
                        s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel
                    }, {
                        "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 77,
                        "../../utils": 116
                    }],
                    101: [function(t, e, i) {
                        var r = function(t) {
                            this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
                        };
                        e.exports = r, r.prototype.destroy = function() {
                            this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
                        }
                    }, {}],
                    102: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = u.SPRITE_BATCH_SIZE, this.buffers = [];
                            for (var e = 1; e <= p.nextPow2(this.size); e *= 2) {
                                var i = 4 * e * this.vertByteSize;
                                this.buffers.push(new l(i))
                            }
                            this.indices = o(this.size), this.shaders = null, this.currentIndex = 0, d = 0, this.groups = [];
                            for (var r = 0; r < this.size; r++) this.groups[r] = {
                                textures: [],
                                textureCount: 0,
                                ids: [],
                                size: 0,
                                start: 0,
                                blend: 0
                            };
                            this.sprites = [], this.vertexBuffers = [], this.vaos = [], this.vaoMax = 2, this.vertexCount = 0, this.renderer.on("prerender", this.onPrerender, this)
                        }
                        var n = t("../../renderers/webgl/utils/ObjectRenderer"),
                            s = t("../../renderers/webgl/WebGLRenderer"),
                            o = t("../../utils/createIndicesForQuads"),
                            a = t("./generateMultiTextureShader"),
                            h = t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),
                            l = t("./BatchBuffer"),
                            u = t("../../const"),
                            c = t("pixi-gl-core"),
                            p = t("bit-twiddle"),
                            d = 0;
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, s.registerPlugin("sprite", r), r.prototype.onContextChange = function() {
                            var t = this.renderer.gl;
                            this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), u.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = h(this.MAX_TEXTURES, t), this.shaders = new Array(this.MAX_TEXTURES), this.shaders[0] = a(t, 1), this.shaders[1] = a(t, 2), this.indexBuffer = c.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW);
                            for (var e = this.shaders[1], i = 0; i < this.vaoMax; i++) this.vertexBuffers[i] = c.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), this.vaos[i] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[i], e.attributes.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[i], e.attributes.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[i], e.attributes.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[i], e.attributes.aTextureId, t.FLOAT, !1, this.vertByteSize, 16);
                            this.vao = this.vaos[0], this.currentBlendMode = 99999
                        }, r.prototype.onPrerender = function() {
                            this.vertexCount = 0
                        }, r.prototype.render = function(t) {
                            this.currentIndex >= this.size && this.flush(), t.texture._uvs && (this.sprites[this.currentIndex++] = t)
                        }, r.prototype.flush = function() {
                            if (0 !== this.currentIndex) {
                                var t, e, i, r, n, s, o, h = this.renderer.gl,
                                    l = p.nextPow2(this.currentIndex),
                                    u = p.log2(l),
                                    f = this.buffers[u],
                                    _ = this.sprites,
                                    g = this.groups,
                                    v = f.float32View,
                                    y = f.uint32View,
                                    m = 0,
                                    x = 1,
                                    $ = 0,
                                    T = g[0],
                                    b = _[0].blendMode;
                                T.textureCount = 0, T.start = 0, T.blend = b, d++;
                                for (var S = 0; S < this.currentIndex; S++) {
                                    var E = _[S];
                                    if (t = E._texture.baseTexture, b !== E.blendMode && (b = E.blendMode, e = null, $ = this.MAX_TEXTURES, d++), e !== t && (e = t, t._enabled !== d && ($ === this.MAX_TEXTURES && (d++, $ = 0, T.size = S - T.start, T = g[x++], T.textureCount = 0, T.blend = b, T.start = S), t._enabled = d, t._id = $, T.textures[T.textureCount++] = t, $++)), i = E.vertexData, r = E._tintRGB + (255 * E.worldAlpha << 24), n = E._texture._uvs.uvsUint32, s = t._id, this.renderer.roundPixels) {
                                        var w = this.renderer.resolution;
                                        v[m] = (i[0] * w | 0) / w, v[m + 1] = (i[1] * w | 0) / w, v[m + 5] = (i[2] * w | 0) / w, v[m + 6] = (i[3] * w | 0) / w, v[m + 10] = (i[4] * w | 0) / w, v[m + 11] = (i[5] * w | 0) / w, v[m + 15] = (i[6] * w | 0) / w, v[m + 16] = (i[7] * w | 0) / w
                                    } else v[m] = i[0], v[m + 1] = i[1], v[m + 5] = i[2], v[m + 6] = i[3], v[m + 10] = i[4], v[m + 11] = i[5], v[m + 15] = i[6], v[m + 16] = i[7];
                                    y[m + 2] = n[0], y[m + 7] = n[1], y[m + 12] = n[2], y[m + 17] = n[3], y[m + 3] = y[m + 8] = y[m + 13] = y[m + 18] = r, v[m + 4] = v[m + 9] = v[m + 14] = v[m + 19] = s, m += 20
                                }
                                for (T.size = S - T.start, this.vertexCount++, this.vaoMax <= this.vertexCount && (this.vaoMax++, o = this.shaders[1], this.vertexBuffers[this.vertexCount] = c.GLBuffer.createVertexBuffer(h, null, h.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aVertexPosition, h.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aTextureCoord, h.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aColor, h.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aTextureId, h.FLOAT, !1, this.vertByteSize, 16)), this.vertexBuffers[this.vertexCount].upload(f.vertices, 0), this.vao = this.vaos[this.vertexCount].bind(), S = 0; S < x; S++) {
                                    var P = g[S],
                                        M = P.textureCount;
                                    o = this.shaders[M - 1], o || (o = this.shaders[M - 1] = a(h, M)), this.renderer.bindShader(o);
                                    for (var A = 0; A < M; A++) this.renderer.bindTexture(P.textures[A], A);
                                    this.renderer.state.setBlendMode(P.blend), h.drawElements(h.TRIANGLES, 6 * P.size, h.UNSIGNED_SHORT, 6 * P.start * 2)
                                }
                                this.currentIndex = 0
                            }
                        }, r.prototype.start = function() {}, r.prototype.stop = function() {
                            this.flush(), this.vao.unbind()
                        }, r.prototype.destroy = function() {
                            for (var t = 0; t < this.vaoMax; t++) this.vertexBuffers[t].destroy(), this.vaos[t].destroy();
                            for (this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), n.prototype.destroy.call(this), t = 0; t < this.shaders.length; t++) this.shaders[t] && this.shaders[t].destroy();
                            for (this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null, t = 0; t < this.buffers.length; t++) this.buffers[t].destroy()
                        }
                    }, {
                        "../../const": 43,
                        "../../renderers/webgl/WebGLRenderer": 81,
                        "../../renderers/webgl/utils/ObjectRenderer": 91,
                        "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 94,
                        "../../utils/createIndicesForQuads": 114,
                        "./BatchBuffer": 101,
                        "./generateMultiTextureShader": 103,
                        "bit-twiddle": 1,
                        "pixi-gl-core": 12
                    }],
                    103: [function(t, e, i) {
                        function r(t, e) {
                            var i = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
                                r = o;
                            r = r.replace(/%count%/gi, e), r = r.replace(/%forloop%/gi, n(e));
                            for (var a = new s(t, i, r, {
                                    aVertexPosition: 3,
                                    aColor: 2,
                                    aTextureCoord: 1,
                                    aTextureId: 0
                                }), h = [], l = 0; l < e; l++) h[l] = l;
                            return a.bind(), a.uniforms.uSamplers = h, a
                        }

                        function n(t) {
                            var e = "";
                            e += "\n", e += "\n";
                            for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(textureId == " + i + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
                            return e += "\n", e += "\n"
                        }
                        var s = t("../../Shader"),
                            o = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n");
                        e.exports = r
                    }, {
                        "../../Shader": 42
                    }],
                    104: [function(t, e, i) {
                        function r(t, e) {
                            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = h.RESOLUTION, this._text = null, this._style = null, this._styleListener = null, this._font = "";
                            var i = s.fromCanvas(this.canvas);
                            i.orig = new o.Rectangle, i.trim = new o.Rectangle, n.call(this, i), this.text = t, this.style = e, this.localStyleID = -1
                        }
                        var n = t("../sprites/Sprite"),
                            s = t("../textures/Texture"),
                            o = t("../math"),
                            a = t("../utils"),
                            h = t("../const"),
                            l = t("./TextStyle"),
                            u = {
                                texture: !0,
                                children: !1,
                                baseTexture: !0
                            };
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.fontPropertiesCache = {}, r.fontPropertiesCanvas = document.createElement("canvas"), r.fontPropertiesContext = r.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return this.updateText(!0), Math.abs(this.scale.x) * this.texture.orig.width
                                },
                                set: function(t) {
                                    this.updateText(!0);
                                    var e = a.sign(this.scale.x) || 1;
                                    this.scale.x = e * t / this.texture.orig.width, this._width = t
                                }
                            },
                            height: {
                                get: function() {
                                    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                                },
                                set: function(t) {
                                    this.updateText(!0);
                                    var e = a.sign(this.scale.y) || 1;
                                    this.scale.y = e * t / this.texture.orig.height, this._height = t
                                }
                            },
                            style: {
                                get: function() {
                                    return this._style
                                },
                                set: function(t) {
                                    t = t || {}, t instanceof l ? this._style = t : this._style = new l(t), this.localStyleID = -1, this.dirty = !0
                                }
                            },
                            text: {
                                get: function() {
                                    return this._text
                                },
                                set: function(t) {
                                    t = t || " ", t = t.toString(), this._text !== t && (this._text = t, this.dirty = !0)
                                }
                            }
                        }), r.prototype.updateText = function(t) {
                            var e = this._style;
                            if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                                var i = "number" == typeof e.fontSize ? e.fontSize + "px" : e.fontSize;
                                this._font = e.fontStyle + " " + e.fontVariant + " " + e.fontWeight + " " + i + " " + e.fontFamily, this.context.font = this._font;
                                var r, n = e.wordWrap ? this.wordWrap(this._text) : this._text,
                                    s = n.split(/(?:\r\n|\r|\n)/),
                                    o = new Array(s.length),
                                    a = 0,
                                    h = this.determineFontProperties(this._font);
                                for (r = 0; r < s.length; r++) {
                                    var l = this.context.measureText(s[r]).width + (s[r].length - 1) * e.letterSpacing;
                                    o[r] = l, a = Math.max(a, l)
                                }
                                var u = a + e.strokeThickness;
                                e.dropShadow && (u += e.dropShadowDistance), u += 2 * e.padding, this.canvas.width = Math.ceil((u + this.context.lineWidth) * this.resolution);
                                var c = this.style.lineHeight || h.fontSize + e.strokeThickness,
                                    p = Math.max(c, h.fontSize + e.strokeThickness) + (s.length - 1) * c;
                                e.dropShadow && (p += e.dropShadowDistance), this.canvas.height = Math.ceil((p + 2 * this._style.padding) * this.resolution), this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this._font, this.context.strokeStyle = e.stroke, this.context.lineWidth = e.strokeThickness, this.context.textBaseline = e.textBaseline, this.context.lineJoin = e.lineJoin, this.context.miterLimit = e.miterLimit;
                                var d, f;
                                if (e.dropShadow) {
                                    e.dropShadowBlur > 0 ? (this.context.shadowColor = e.dropShadowColor, this.context.shadowBlur = e.dropShadowBlur) : this.context.fillStyle = e.dropShadowColor;
                                    var _ = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                                        g = Math.sin(e.dropShadowAngle) * e.dropShadowDistance;
                                    for (r = 0; r < s.length; r++) d = e.strokeThickness / 2, f = e.strokeThickness / 2 + r * c + h.ascent, "right" === e.align ? d += a - o[r] : "center" === e.align && (d += (a - o[r]) / 2), e.fill && (this.drawLetterSpacing(s[r], d + _ + e.padding, f + g + e.padding), e.stroke && e.strokeThickness && (this.context.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(s[r], d + _ + e.padding, f + g + e.padding, !0), this.context.strokeStyle = e.stroke))
                                }
                                for (this.context.fillStyle = this._generateFillStyle(e, s), r = 0; r < s.length; r++) d = e.strokeThickness / 2, f = e.strokeThickness / 2 + r * c + h.ascent, "right" === e.align ? d += a - o[r] : "center" === e.align && (d += (a - o[r]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(s[r], d + e.padding, f + e.padding, !0), e.fill && this.drawLetterSpacing(s[r], d + e.padding, f + e.padding);
                                this.updateTexture()
                            }
                        }, r.prototype.drawLetterSpacing = function(t, e, i, r) {
                            var n = this._style,
                                s = n.letterSpacing;
                            if (0 === s) return void(r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i));
                            for (var o, a = String.prototype.split.call(t, ""), h = 0, l = e; h < t.length;) o = a[h++], r ? this.context.strokeText(o, l, i) : this.context.fillText(o, l, i), l += this.context.measureText(o).width + s
                        }, r.prototype.updateTexture = function() {
                            var t = this._texture,
                                e = this._style;
                            t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.realWidth = this.canvas.width, t.baseTexture.realHeight = this.canvas.height, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.trim.width = t._frame.width = this.canvas.width / this.resolution, t.trim.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = -e.padding, t.trim.y = -e.padding, t.orig.width = t._frame.width - 2 * e.padding, t.orig.height = t._frame.height - 2 * e.padding, this._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
                        }, r.prototype.renderWebGL = function(t) {
                            this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), n.prototype.renderWebGL.call(this, t)
                        }, r.prototype._renderCanvas = function(t) {
                            this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), n.prototype._renderCanvas.call(this, t)
                        }, r.prototype.determineFontProperties = function(t) {
                            var e = r.fontPropertiesCache[t];
                            if (!e) {
                                e = {};
                                var i = r.fontPropertiesCanvas,
                                    n = r.fontPropertiesContext;
                                n.font = t;
                                var s = Math.ceil(n.measureText("|MÉq").width),
                                    o = Math.ceil(n.measureText("M").width),
                                    a = 2 * o;
                                o = 1.4 * o | 0, i.width = s, i.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, s, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, o);
                                var h, l, u = n.getImageData(0, 0, s, a).data,
                                    c = u.length,
                                    p = 4 * s,
                                    d = 0,
                                    f = !1;
                                for (h = 0; h < o; h++) {
                                    for (l = 0; l < p; l += 4)
                                        if (255 !== u[d + l]) {
                                            f = !0;
                                            break
                                        }
                                    if (f) break;
                                    d += p
                                }
                                for (e.ascent = o - h, d = c - p, f = !1, h = a; h > o; h--) {
                                    for (l = 0; l < p; l += 4)
                                        if (255 !== u[d + l]) {
                                            f = !0;
                                            break
                                        }
                                    if (f) break;
                                    d -= p
                                }
                                e.descent = h - o, e.fontSize = e.ascent + e.descent, r.fontPropertiesCache[t] = e
                            }
                            return e
                        }, r.prototype.wordWrap = function(t) {
                            for (var e = "", i = t.split("\n"), r = this._style.wordWrapWidth, n = 0; n < i.length; n++) {
                                for (var s = r, o = i[n].split(" "), a = 0; a < o.length; a++) {
                                    var h = this.context.measureText(o[a]).width;
                                    if (this._style.breakWords && h > r)
                                        for (var l = o[a].split(""), u = 0; u < l.length; u++) {
                                            var c = this.context.measureText(l[u]).width;
                                            c > s ? (e += "\n" + l[u], s = r - c) : (0 === u && (e += " "), e += l[u], s -= c)
                                        } else {
                                            var p = h + this.context.measureText(" ").width;
                                            0 === a || p > s ? (a > 0 && (e += "\n"), e += o[a], s = r - h) : (s -= p, e += " " + o[a])
                                        }
                                }
                                n < i.length - 1 && (e += "\n")
                            }
                            return e
                        }, r.prototype._calculateBounds = function() {
                            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                        }, r.prototype._onStyleChange = function() {
                            this.dirty = !0
                        }, r.prototype._generateFillStyle = function(t, e) {
                            if (Array.isArray(t.fill)) {
                                if (navigator.isCocoonJS) return t.fill[0];
                                var i, r, n, s, o, a = this.canvas.width / this.resolution,
                                    l = this.canvas.height / this.resolution;
                                if (t.fillGradientType === h.TEXT_GRADIENT.LINEAR_VERTICAL)
                                    for (r = this.context.createLinearGradient(a / 2, 0, a / 2, l), n = (t.fill.length + 1) * e.length, s = 0, i = 0; i < e.length; i++) {
                                        s += 1;
                                        for (var u = 0; u < t.fill.length; u++) o = s / n, r.addColorStop(o, t.fill[u]), s++
                                    } else
                                        for (r = this.context.createLinearGradient(0, l / 2, a, l / 2), n = t.fill.length + 1, s = 1, i = 0; i < t.fill.length; i++) o = s / n, r.addColorStop(o, t.fill[i]), s++;
                                return r
                            }
                            return t.fill
                        }, r.prototype.destroy = function(t) {
                            "boolean" == typeof t && (t = {
                                children: t
                            }), t = Object.assign({}, u, t), n.prototype.destroy.call(this, t), this.context = null, this.canvas = null, this._style = null
                        }
                    }, {
                        "../const": 43,
                        "../math": 67,
                        "../sprites/Sprite": 98,
                        "../textures/Texture": 109,
                        "../utils": 116,
                        "./TextStyle": 105
                    }],
                    105: [function(t, e, i) {
                        function r(t) {
                            this.styleID = 0, Object.assign(this, this._defaults, t)
                        }

                        function n(t) {
                            if ("number" == typeof t) return o.hex2string(t);
                            if (Array.isArray(t))
                                for (var e = 0; e < t.length; ++e) "number" == typeof t[e] && (t[e] = o.hex2string(t[e]));
                            return t
                        }
                        var s = t("../const"),
                            o = t("../utils");
                        r.prototype.constructor = r, e.exports = r, r.prototype._defaults = {
                            align: "left",
                            breakWords: !1,
                            dropShadow: !1,
                            dropShadowAngle: Math.PI / 6,
                            dropShadowBlur: 0,
                            dropShadowColor: "#000000",
                            dropShadowDistance: 5,
                            fill: "black",
                            fillGradientType: s.TEXT_GRADIENT.LINEAR_VERTICAL,
                            fontFamily: "Arial",
                            fontSize: 26,
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            letterSpacing: 0,
                            lineHeight: 0,
                            lineJoin: "miter",
                            miterLimit: 10,
                            padding: 0,
                            stroke: "black",
                            strokeThickness: 0,
                            textBaseline: "alphabetic",
                            wordWrap: !1,
                            wordWrapWidth: 100
                        }, r.prototype.clone = function() {
                            var t = {};
                            for (var e in this._defaults) t[e] = this[e];
                            return new r(t)
                        }, r.prototype.reset = function() {
                            Object.assign(this, this._defaults)
                        }, Object.defineProperties(r.prototype, {
                            align: {
                                get: function() {
                                    return this._align
                                },
                                set: function(t) {
                                    this._align !== t && (this._align = t, this.styleID++)
                                }
                            },
                            breakWords: {
                                get: function() {
                                    return this._breakWords
                                },
                                set: function(t) {
                                    this._breakWords !== t && (this._breakWords = t, this.styleID++)
                                }
                            },
                            dropShadow: {
                                get: function() {
                                    return this._dropShadow
                                },
                                set: function(t) {
                                    this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                                }
                            },
                            dropShadowAngle: {
                                get: function() {
                                    return this._dropShadowAngle
                                },
                                set: function(t) {
                                    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                                }
                            },
                            dropShadowBlur: {
                                get: function() {
                                    return this._dropShadowBlur
                                },
                                set: function(t) {
                                    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                                }
                            },
                            dropShadowColor: {
                                get: function() {
                                    return this._dropShadowColor
                                },
                                set: function(t) {
                                    var e = n(t);
                                    this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                                }
                            },
                            dropShadowDistance: {
                                get: function() {
                                    return this._dropShadowDistance
                                },
                                set: function(t) {
                                    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                                }
                            },
                            fill: {
                                get: function() {
                                    return this._fill
                                },
                                set: function(t) {
                                    var e = n(t);
                                    this._fill !== e && (this._fill = e, this.styleID++)
                                }
                            },
                            fillGradientType: {
                                get: function() {
                                    return this._fillGradientType
                                },
                                set: function(t) {
                                    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                                }
                            },
                            fontFamily: {
                                get: function() {
                                    return this._fontFamily
                                },
                                set: function(t) {
                                    this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                                }
                            },
                            fontSize: {
                                get: function() {
                                    return this._fontSize
                                },
                                set: function(t) {
                                    this._fontSize !== t && (this._fontSize = t, this.styleID++)
                                }
                            },
                            fontStyle: {
                                get: function() {
                                    return this._fontStyle
                                },
                                set: function(t) {
                                    this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                                }
                            },
                            fontVariant: {
                                get: function() {
                                    return this._fontVariant
                                },
                                set: function(t) {
                                    this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                                }
                            },
                            fontWeight: {
                                get: function() {
                                    return this._fontWeight
                                },
                                set: function(t) {
                                    this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                                }
                            },
                            letterSpacing: {
                                get: function() {
                                    return this._letterSpacing
                                },
                                set: function(t) {
                                    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                                }
                            },
                            lineHeight: {
                                get: function() {
                                    return this._lineHeight
                                },
                                set: function(t) {
                                    this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                                }
                            },
                            lineJoin: {
                                get: function() {
                                    return this._lineJoin
                                },
                                set: function(t) {
                                    this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                                }
                            },
                            miterLimit: {
                                get: function() {
                                    return this._miterLimit
                                },
                                set: function(t) {
                                    this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                                }
                            },
                            padding: {
                                get: function() {
                                    return this._padding
                                },
                                set: function(t) {
                                    this._padding !== t && (this._padding = t, this.styleID++)
                                }
                            },
                            stroke: {
                                get: function() {
                                    return this._stroke
                                },
                                set: function(t) {
                                    var e = n(t);
                                    this._stroke !== e && (this._stroke = e, this.styleID++)
                                }
                            },
                            strokeThickness: {
                                get: function() {
                                    return this._strokeThickness
                                },
                                set: function(t) {
                                    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                                }
                            },
                            textBaseline: {
                                get: function() {
                                    return this._textBaseline
                                },
                                set: function(t) {
                                    this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                                }
                            },
                            wordWrap: {
                                get: function() {
                                    return this._wordWrap
                                },
                                set: function(t) {
                                    this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                                }
                            },
                            wordWrapWidth: {
                                get: function() {
                                    return this._wordWrapWidth
                                },
                                set: function(t) {
                                    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                                }
                            }
                        })
                    }, {
                        "../const": 43,
                        "../utils": 116
                    }],
                    106: [function(t, e, i) {
                        function r(t, e, i, r) {
                            n.call(this, null, i), this.resolution = r || s.RESOLUTION, this.width = t || 100, this.height = e || 100, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.scaleMode = i || s.SCALE_MODES.DEFAULT, this.hasLoaded = !0, this._glRenderTargets = [], this._canvasRenderTarget = null, this.valid = !1
                        }
                        var n = t("./BaseTexture"),
                            s = t("../const");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function(t, e) {
                            t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
                        }, r.prototype.destroy = function() {
                            n.prototype.destroy.call(this, !0), this.renderer = null
                        }
                    }, {
                        "../const": 43,
                        "./BaseTexture": 107
                    }],
                    107: [function(t, e, i) {
                        function r(t, e, i) {
                            o.call(this), this.uid = n.uid(), this.touched = 0, this.resolution = i || s.RESOLUTION, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || s.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1,
                                this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = s.MIPMAP_TEXTURES, this.wrapMode = s.WRAP_MODES.DEFAULT, this._glTextures = [], this._enabled = 0, this._id = 0, t && this.loadSource(t)
                        }
                        var n = t("../utils"),
                            s = t("../const"),
                            o = t("eventemitter3"),
                            a = t("../utils/determineCrossOrigin"),
                            h = t("bit-twiddle");
                        r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.update = function() {
                            this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = h.isPow2(this.realWidth) && h.isPow2(this.realHeight), this.emit("update", this)
                        }, r.prototype.loadSource = function(t) {
                            var e = this.isLoading;
                            if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
                            else if (!t.getContext) {
                                this.isLoading = !0;
                                var i = this;
                                t.onload = function() {
                                    t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i._sourceLoaded(), i.emit("loaded", i))
                                }, t.onerror = function() {
                                    t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
                                }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                            }
                        }, r.prototype._sourceLoaded = function() {
                            this.hasLoaded = !0, this.update()
                        }, r.prototype.destroy = function() {
                            this.imageUrl ? (delete n.BaseTextureCache[this.imageUrl], delete n.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete n.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
                        }, r.prototype.dispose = function() {
                            this.emit("dispose", this)
                        }, r.prototype.updateSourceImage = function(t) {
                            this.source.src = t, this.loadSource(this.source)
                        }, r.fromImage = function(t, e, i) {
                            var s = n.BaseTextureCache[t];
                            if (!s) {
                                var o = new Image;
                                void 0 === e && 0 !== t.indexOf("data:") && (o.crossOrigin = a(t)), s = new r(o, i), s.imageUrl = t, o.src = t, n.BaseTextureCache[t] = s, s.resolution = n.getResolutionOfUrl(t)
                            }
                            return s
                        }, r.fromCanvas = function(t, e) {
                            t._pixiId || (t._pixiId = "canvas_" + n.uid());
                            var i = n.BaseTextureCache[t._pixiId];
                            return i || (i = new r(t, e), n.BaseTextureCache[t._pixiId] = i), i
                        }
                    }, {
                        "../const": 43,
                        "../utils": 116,
                        "../utils/determineCrossOrigin": 115,
                        "bit-twiddle": 1,
                        eventemitter3: 3
                    }],
                    108: [function(t, e, i) {
                        function r(t, e) {
                            if (this.legacyRenderer = null, !(t instanceof n)) {
                                var i = arguments[1],
                                    r = arguments[2],
                                    o = arguments[3] || 0,
                                    a = arguments[4] || 1;
                                console.warn("v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create(" + i + ", " + r + ")"), this.legacyRenderer = arguments[0], e = null, t = new n(i, r, o, a)
                            }
                            s.call(this, t, e), this.valid = !0, this._updateUvs()
                        }
                        var n = t("./BaseRenderTexture"),
                            s = t("./Texture");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function(t, e, i) {
                            this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i || this.baseTexture.resize(t, e), this._updateUvs()
                        }, r.create = function(t, e, i, s) {
                            return new r(new n(t, e, i, s))
                        }
                    }, {
                        "./BaseRenderTexture": 106,
                        "./Texture": 109
                    }],
                    109: [function(t, e, i) {
                        function r(t, e, i, n, s) {
                            if (a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof r && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.orig = i || e, this._rotate = +(s || 0), s === !0) this._rotate = 2;
                            else if (this._rotate % 2 !== 0) throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
                            t.hasLoaded ? (this.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this), this._updateID = 0
                        }
                        var n = t("./BaseTexture"),
                            s = t("./VideoBaseTexture"),
                            o = t("./TextureUvs"),
                            a = t("eventemitter3"),
                            h = t("../math"),
                            l = t("../utils");
                        r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            frame: {
                                get: function() {
                                    return this._frame
                                },
                                set: function(t) {
                                    if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                                    this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
                                }
                            },
                            rotate: {
                                get: function() {
                                    return this._rotate
                                },
                                set: function(t) {
                                    this._rotate = t, this.valid && this._updateUvs()
                                }
                            },
                            width: {
                                get: function() {
                                    return this.orig ? this.orig.width : 0
                                }
                            },
                            height: {
                                get: function() {
                                    return this.orig ? this.orig.height : 0
                                }
                            }
                        }), r.prototype.update = function() {
                            this.baseTexture.update()
                        }, r.prototype.onBaseTextureLoaded = function(t) {
                            this._updateID++, this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
                        }, r.prototype.onBaseTextureUpdated = function(t) {
                            this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
                        }, r.prototype.destroy = function(t) {
                            this.baseTexture && (t && (l.TextureCache[this.baseTexture.imageUrl] && delete l.TextureCache[this.baseTexture.imageUrl], this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, this.off("dispose", this.dispose, this), this.off("update", this.update, this)
                        }, r.prototype.clone = function() {
                            return new r(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
                        }, r.prototype._updateUvs = function() {
                            this._uvs || (this._uvs = new o), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                        }, r.fromImage = function(t, e, i) {
                            var s = l.TextureCache[t];
                            return s || (s = new r(n.fromImage(t, e, i)), l.TextureCache[t] = s), s
                        }, r.fromFrame = function(t) {
                            var e = l.TextureCache[t];
                            if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                            return e
                        }, r.fromCanvas = function(t, e) {
                            return new r(n.fromCanvas(t, e))
                        }, r.fromVideo = function(t, e) {
                            return "string" == typeof t ? r.fromVideoUrl(t, e) : new r(s.fromVideo(t, e))
                        }, r.fromVideoUrl = function(t, e) {
                            return new r(s.fromUrl(t, e))
                        }, r.from = function(t) {
                            if ("string" == typeof t) {
                                var e = l.TextureCache[t];
                                if (!e) {
                                    var i = null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/);
                                    return i ? r.fromVideoUrl(t) : r.fromImage(t)
                                }
                                return e
                            }
                            return t instanceof HTMLCanvasElement ? r.fromCanvas(t) : t instanceof HTMLVideoElement ? r.fromVideo(t) : t instanceof n ? new r(n) : t
                        }, r.addTextureToCache = function(t, e) {
                            l.TextureCache[e] = t
                        }, r.removeTextureFromCache = function(t) {
                            var e = l.TextureCache[t];
                            return delete l.TextureCache[t], delete l.BaseTextureCache[t], e
                        }, r.EMPTY = new r(new n), r.EMPTY.destroy = function() {}, r.EMPTY.on = function() {}, r.EMPTY.once = function() {}, r.EMPTY.emit = function() {}
                    }, {
                        "../math": 67,
                        "../utils": 116,
                        "./BaseTexture": 107,
                        "./TextureUvs": 110,
                        "./VideoBaseTexture": 111,
                        eventemitter3: 3
                    }],
                    110: [function(t, e, i) {
                        function r() {
                            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
                        }
                        e.exports = r;
                        var n = t("../math/GroupD8");
                        r.prototype.set = function(t, e, i) {
                            var r = e.width,
                                s = e.height;
                            if (i) {
                                var o = t.width / 2 / r,
                                    a = t.height / 2 / s,
                                    h = t.x / r + o,
                                    l = t.y / s + a;
                                i = n.add(i, n.NW), this.x0 = h + o * n.uX(i), this.y0 = l + a * n.uY(i), i = n.add(i, 2), this.x1 = h + o * n.uX(i), this.y1 = l + a * n.uY(i), i = n.add(i, 2), this.x2 = h + o * n.uX(i), this.y2 = l + a * n.uY(i), i = n.add(i, 2), this.x3 = h + o * n.uX(i), this.y3 = l + a * n.uY(i)
                            } else this.x0 = t.x / r, this.y0 = t.y / s, this.x1 = (t.x + t.width) / r, this.y1 = t.y / s, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / s, this.x3 = t.x / r, this.y3 = (t.y + t.height) / s;
                            this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
                        }
                    }, {
                        "../math/GroupD8": 63
                    }],
                    111: [function(t, e, i) {
                        function r(t, e) {
                            if (!t) throw new Error("No video source element specified.");
                            (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), s.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
                        }

                        function n(t, e) {
                            e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                            var i = document.createElement("source");
                            return i.src = t, i.type = e, i
                        }
                        var s = t("./BaseTexture"),
                            o = t("../utils");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._onUpdate = function() {
                            this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
                        }, r.prototype._onPlayStart = function() {
                            this.hasLoaded || this._onCanPlay(), this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
                        }, r.prototype._onPlayStop = function() {
                            this.autoUpdate = !1
                        }, r.prototype._onCanPlay = function() {
                            this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
                        }, r.prototype.destroy = function() {
                            this.source && this.source._pixiId && (delete o.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), s.prototype.destroy.call(this)
                        }, r.fromVideo = function(t, e) {
                            t._pixiId || (t._pixiId = "video_" + o.uid());
                            var i = o.BaseTextureCache[t._pixiId];
                            return i || (i = new r(t, e), o.BaseTextureCache[t._pixiId] = i), i
                        }, r.fromUrl = function(t, e) {
                            var i = document.createElement("video");
                            if (Array.isArray(t))
                                for (var s = 0; s < t.length; ++s) i.appendChild(n(t[s].src || t[s], t[s].mime));
                            else i.appendChild(n(t.src || t, t.mime));
                            return i.load(), i.play(), r.fromVideo(i, e)
                        }, r.fromUrls = r.fromUrl
                    }, {
                        "../utils": 116,
                        "./BaseTexture": 107
                    }],
                    112: [function(t, e, i) {
                        function r() {
                            var t = this;
                            this._tick = function(e) {
                                t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(o, !0) && (t._requestId = requestAnimationFrame(t._tick)))
                            }, this._emitter = new s, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / n.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
                        }
                        var n = t("../const"),
                            s = t("eventemitter3"),
                            o = "tick";
                        Object.defineProperties(r.prototype, {
                            FPS: {
                                get: function() {
                                    return 1e3 / this.elapsedMS
                                }
                            },
                            minFPS: {
                                get: function() {
                                    return 1e3 / this._maxElapsedMS
                                },
                                set: function(t) {
                                    var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
                                    this._maxElapsedMS = 1 / e
                                }
                            }
                        }), r.prototype._requestIfNeeded = function() {
                            null === this._requestId && this._emitter.listeners(o, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
                        }, r.prototype._cancelIfNeeded = function() {
                            null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                        }, r.prototype._startIfPossible = function() {
                            this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                        }, r.prototype.add = function(t, e) {
                            return this._emitter.on(o, t, e), this._startIfPossible(), this
                        }, r.prototype.addOnce = function(t, e) {
                            return this._emitter.once(o, t, e), this._startIfPossible(), this
                        }, r.prototype.remove = function(t, e) {
                            return this._emitter.off(o, t, e), this._emitter.listeners(o, !0) || this._cancelIfNeeded(), this
                        }, r.prototype.start = function() {
                            this.started || (this.started = !0, this._requestIfNeeded())
                        }, r.prototype.stop = function() {
                            this.started && (this.started = !1, this._cancelIfNeeded())
                        }, r.prototype.update = function(t) {
                            var e;
                            t = t || performance.now(), t > this.lastTime ? (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * n.TARGET_FPMS * this.speed, this._emitter.emit(o, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0, this.lastTime = t
                        }, e.exports = r
                    }, {
                        "../const": 43,
                        eventemitter3: 3
                    }],
                    113: [function(t, e, i) {
                        var r = t("./Ticker"),
                            n = new r;
                        n.autoStart = !0, e.exports = {
                            shared: n,
                            Ticker: r
                        }
                    }, {
                        "./Ticker": 112
                    }],
                    114: [function(t, e, i) {
                        var r = function(t) {
                            for (var e = 6 * t, i = new Uint16Array(e), r = 0, n = 0; r < e; r += 6, n += 4) i[r + 0] = n + 0, i[r + 1] = n + 1, i[r + 2] = n + 2, i[r + 3] = n + 0, i[r + 4] = n + 2, i[r + 5] = n + 3;
                            return i
                        };
                        e.exports = r
                    }, {}],
                    115: [function(t, e, i) {
                        var r, n = t("url"),
                            s = function(t, e) {
                                if (0 === t.indexOf("data:")) return "";
                                e = e || window.location, r || (r = document.createElement("a")), r.href = t, t = n.parse(r.href);
                                var i = !t.port && "" === e.port || t.port === e.port;
                                return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
                            };
                        e.exports = s
                    }, {
                        url: 28
                    }],
                    116: [function(t, e, i) {
                        var r = t("../const"),
                            n = e.exports = {
                                _uid: 0,
                                _saidHello: !1,
                                EventEmitter: t("eventemitter3"),
                                pluginTarget: t("./pluginTarget"),
                                uid: function() {
                                    return ++n._uid
                                },
                                hex2rgb: function(t, e) {
                                    return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
                                },
                                hex2string: function(t) {
                                    return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
                                },
                                rgb2hex: function(t) {
                                    return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                                },
                                getResolutionOfUrl: function(t) {
                                    var e = r.RETINA_PREFIX.exec(t);
                                    return e ? parseFloat(e[1]) : 1
                                },
                                sayHello: function(t) {
                                    if (!n._saidHello) {
                                        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                            var e = ["\n %c %c %c Pixi.js " + r.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                                            window.console.log.apply(console, e)
                                        } else window.console && window.console.log("Pixi.js " + r.VERSION + " - " + t + " - http://www.pixijs.com/");
                                        n._saidHello = !0
                                    }
                                },
                                isWebGLSupported: function() {
                                    var t = {
                                        stencil: !0,
                                        failIfMajorPerformanceCaveat: !0
                                    };
                                    try {
                                        if (!window.WebGLRenderingContext) return !1;
                                        var e = document.createElement("canvas"),
                                            i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                                            r = !(!i || !i.getContextAttributes().stencil);
                                        if (i) {
                                            var n = i.getExtension("WEBGL_lose_context");
                                            n && n.loseContext()
                                        }
                                        return i = null, r
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                sign: function(t) {
                                    return t ? t < 0 ? -1 : 1 : 0
                                },
                                removeItems: function(t, e, i) {
                                    var r = t.length;
                                    if (!(e >= r || 0 === i)) {
                                        i = e + i > r ? r - e : i;
                                        for (var n = e, s = r - i; n < s; ++n) t[n] = t[n + i];
                                        t.length = s
                                    }
                                },
                                TextureCache: {},
                                BaseTextureCache: {}
                            }
                    }, {
                        "../const": 43,
                        "./pluginTarget": 118,
                        eventemitter3: 3
                    }],
                    117: [function(t, e, i) {
                        var r = t("ismobilejs"),
                            n = function(t) {
                                return r.tablet || r.phone ? 2 : t
                            };
                        e.exports = n
                    }, {
                        ismobilejs: 4
                    }],
                    118: [function(t, e, i) {
                        function r(t) {
                            t.__plugins = {}, t.registerPlugin = function(e, i) {
                                t.__plugins[e] = i
                            }, t.prototype.initPlugins = function() {
                                this.plugins = this.plugins || {};
                                for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
                            }, t.prototype.destroyPlugins = function() {
                                for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                                this.plugins = null
                            }
                        }
                        e.exports = {
                            mixin: function(t) {
                                r(t)
                            }
                        }
                    }, {}],
                    119: [function(t, e, i) {
                        var r = t("./core"),
                            n = t("./mesh"),
                            s = t("./particles"),
                            o = t("./extras"),
                            a = t("./filters");
                        r.SpriteBatch = function() {
                            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                        }, r.AssetLoader = function() {
                            throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
                        }, Object.defineProperties(r, {
                            Stage: {
                                get: function() {
                                    return r.Container
                                }
                            },
                            DisplayObjectContainer: {
                                get: function() {
                                    return r.Container
                                }
                            },
                            Strip: {
                                get: function() {
                                    return n.Mesh
                                }
                            },
                            Rope: {
                                get: function() {
                                    return n.Rope
                                }
                            },
                            ParticleContainer: {
                                get: function() {
                                    return s.ParticleContainer
                                }
                            },
                            MovieClip: {
                                get: function() {
                                    return o.MovieClip
                                }
                            },
                            TilingSprite: {
                                get: function() {
                                    return o.TilingSprite
                                }
                            },
                            BitmapText: {
                                get: function() {
                                    return o.BitmapText
                                }
                            },
                            blendModes: {
                                get: function() {
                                    return r.BLEND_MODES
                                }
                            },
                            scaleModes: {
                                get: function() {
                                    return r.SCALE_MODES
                                }
                            },
                            BaseTextureCache: {
                                get: function() {
                                    return r.utils.BaseTextureCache
                                }
                            },
                            TextureCache: {
                                get: function() {
                                    return r.utils.TextureCache
                                }
                            },
                            math: {
                                get: function() {
                                    return r
                                }
                            },
                            AbstractFilter: {
                                get: function() {
                                    return r.Filter
                                }
                            },
                            TransformManual: {
                                get: function() {
                                    return r.TransformBase
                                }
                            }
                        }), r.DisplayObject.prototype.generateTexture = function(t, e, i) {
                            return t.generateTexture(this, e, i)
                        }, r.Graphics.prototype.generateTexture = function(t, e) {
                            return this.generateCanvasTexture(t, e)
                        }, r.RenderTexture.prototype.render = function(t, e, i, r) {
                            this.legacyRenderer.render(t, this, i, e, !r)
                        }, r.RenderTexture.prototype.getImage = function(t) {
                            return this.legacyRenderer.extract.image(t)
                        }, r.RenderTexture.prototype.getBase64 = function(t) {
                            return this.legacyRenderer.extract.base64(t)
                        }, r.RenderTexture.prototype.getCanvas = function(t) {
                            return this.legacyRenderer.extract.canvas(t)
                        }, r.RenderTexture.prototype.getPixels = function(t) {
                            return this.legacyRenderer.pixels(t)
                        }, r.Sprite.prototype.setTexture = function(t) {
                            this.texture = t
                        }, o.BitmapText.prototype.setText = function(t) {
                            this.text = t
                        }, r.Text.prototype.setText = function(t) {
                            this.text = t
                        }, r.Text.prototype.setStyle = function(t) {
                            this.style = t
                        }, Object.defineProperties(r.TextStyle.prototype, {
                            font: {
                                get: function() {
                                    var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                                    return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                                },
                                set: function(t) {
                                    t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                                    var e, i = t.split(" "),
                                        r = -1;
                                    for (this._fontSize = 26, e = 0; e < i.length; ++e)
                                        if (i[e].match(/(px|pt|em|%)/)) {
                                            r = e, this._fontSize = i[e];
                                            break
                                        }
                                    for (this._fontWeight = "normal", e = 0; e < r; ++e)
                                        if (i[e].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                            this._fontWeight = i[e];
                                            break
                                        }
                                    if (r > -1 && r < i.length - 1) {
                                        for (this._fontFamily = "", e = r + 1; e < i.length; ++e) this._fontFamily += i[e] + " ";
                                        this._fontFamily = this._fontFamily.slice(0, -1)
                                    } else this._fontFamily = "Arial";
                                    this.styleID++
                                }
                            }
                        }), r.Texture.prototype.setFrame = function(t) {
                            this.frame = t
                        }, Object.defineProperties(a, {
                            AbstractFilter: {
                                get: function() {
                                    return r.AbstractFilter
                                }
                            },
                            SpriteMaskFilter: {
                                get: function() {
                                    return r.SpriteMaskFilter
                                }
                            }
                        }), r.utils.uuid = function() {
                            return r.utils.uid()
                        }, r.utils.canUseNewCanvasBlendModes = function() {
                            return r.CanvasTinter.canUseMultiply
                        }
                    }, {
                        "./core": 62,
                        "./extras": 129,
                        "./filters": 140,
                        "./mesh": 156,
                        "./particles": 159
                    }],
                    120: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t, t.extract = this
                        }
                        var n = t("../../core"),
                            s = new n.Rectangle;
                        r.prototype.constructor = r, e.exports = r, r.prototype.image = function(t) {
                            var e = new Image;
                            return e.src = this.base64(t), e
                        }, r.prototype.base64 = function(t) {
                            return this.canvas(t).toDataURL()
                        }, r.prototype.canvas = function(t) {
                            var e, i, r, o, a = this.renderer;
                            t && (o = t instanceof n.RenderTexture ? t : a.generateTexture(t)), o ? (e = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = a.rootContext, i = a.rootResolution, r = s, r.width = this.renderer.width, r.height = this.renderer.height);
                            var h = r.width * i,
                                l = r.height * i,
                                u = new n.CanvasRenderTarget(h, l),
                                c = e.getImageData(r.x * i, r.y * i, h, l);
                            return u.context.putImageData(c, 0, 0), u.canvas
                        }, r.prototype.pixels = function(t) {
                            var e, i, r, o, a = this.renderer;
                            return t && (o = t instanceof n.RenderTexture ? t : a.generateTexture(t)), o ? (e = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = a.rootContext, i = a.rootResolution, r = s, r.width = a.width, r.height = a.height), e.getImageData(0, 0, r.width * i, r.height * i).data
                        }, r.prototype.destroy = function() {
                            this.renderer.extract = null, this.renderer = null
                        }, n.CanvasRenderer.registerPlugin("extract", r)
                    }, {
                        "../../core": 62
                    }],
                    121: [function(t, e, i) {
                        e.exports = {
                            webGL: t("./webgl/WebGLExtract"),
                            canvas: t("./canvas/CanvasExtract")
                        }
                    }, {
                        "./canvas/CanvasExtract": 120,
                        "./webgl/WebGLExtract": 122
                    }],
                    122: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t, t.extract = this
                        }
                        var n = t("../../core"),
                            s = new n.Rectangle;
                        r.prototype.constructor = r, e.exports = r, r.prototype.image = function(t) {
                            var e = new Image;
                            return e.src = this.base64(t), e
                        }, r.prototype.base64 = function(t) {
                            return this.canvas(t).toDataURL()
                        }, r.prototype.canvas = function(t) {
                            var e, i, r, o, a = this.renderer,
                                h = !1;
                            t && (o = t instanceof n.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (e = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, r = o.frame, h = !1) : (e = this.renderer.rootRenderTarget, i = e.resolution, h = !0, r = s, r.width = e.size.width, r.height = e.size.height);
                            var l = r.width * i,
                                u = r.height * i,
                                c = new n.CanvasRenderTarget(l, u);
                            if (e) {
                                a.bindRenderTarget(e);
                                var p = new Uint8Array(4 * l * u),
                                    d = a.gl;
                                d.readPixels(r.x * i, r.y * i, l, u, d.RGBA, d.UNSIGNED_BYTE, p);
                                var f = c.context.getImageData(0, 0, l, u);
                                f.data.set(p), c.context.putImageData(f, 0, 0), h && (c.context.scale(1, -1), c.context.drawImage(c.canvas, 0, -u))
                            }
                            return c.canvas
                        }, r.prototype.pixels = function(t) {
                            var e, i, r, o, a = this.renderer;
                            t && (o = t instanceof n.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (e = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, r = o.frame) : (e = this.renderer.rootRenderTarget, i = e.resolution, r = s, r.width = e.size.width, r.height = e.size.height);
                            var h = r.width * i,
                                l = r.height * i,
                                u = new Uint8Array(4 * h * l);
                            if (e) {
                                a.bindRenderTarget(e);
                                var c = a.gl;
                                c.readPixels(r.x * i, r.y * i, h, l, c.RGBA, c.UNSIGNED_BYTE, u)
                            }
                            return u
                        }, r.prototype.destroy = function() {
                            this.renderer.extract = null, this.renderer = null
                        }, n.WebGLRenderer.registerPlugin("extract", r)
                    }, {
                        "../../core": 62
                    }],
                    123: [function(t, e, i) {
                        function r(t, e) {
                            n.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
                                tint: void 0 !== e.tint ? e.tint : 16777215,
                                align: e.align || "left",
                                name: null,
                                size: 0
                            }, this.font = e.font, this._text = t, this.maxWidth = 0, this.maxLineHeight = 0, this._anchor = new s(this.makeDirty, this, 0, 0), this.dirty = !1, this.updateText()
                        }
                        var n = t("../core"),
                            s = t("../core/math/ObservablePoint");
                        r.prototype = Object.create(n.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            tint: {
                                get: function() {
                                    return this._font.tint
                                },
                                set: function(t) {
                                    this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                                }
                            },
                            align: {
                                get: function() {
                                    return this._font.align
                                },
                                set: function(t) {
                                    this._font.align = t || "left", this.dirty = !0
                                }
                            },
                            anchor: {
                                get: function() {
                                    return this._anchor
                                },
                                set: function(t) {
                                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
                                }
                            },
                            font: {
                                get: function() {
                                    return this._font
                                },
                                set: function(t) {
                                    t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : r.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                                }
                            },
                            text: {
                                get: function() {
                                    return this._text
                                },
                                set: function(t) {
                                    t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                                }
                            }
                        }), r.prototype.updateText = function() {
                            for (var t = r.fonts[this._font.name], e = new n.Point, i = null, s = [], o = 0, a = 0, h = [], l = 0, u = this._font.size / t.size, c = -1, p = 0, d = 0, f = 0; f < this.text.length; f++) {
                                var _ = this.text.charCodeAt(f);
                                if (/(\s)/.test(this.text.charAt(f)) && (c = f, p = o), /(?:\r\n|\r|\n)/.test(this.text.charAt(f))) h.push(o), a = Math.max(a, o), l++, e.x = 0, e.y += t.lineHeight, i = null;
                                else if (c !== -1 && this.maxWidth > 0 && e.x * u > this.maxWidth) n.utils.removeItems(s, c, f - c), f = c, c = -1, h.push(p), a = Math.max(a, p), l++, e.x = 0, e.y += t.lineHeight, i = null;
                                else {
                                    var g = t.chars[_];
                                    g && (i && g.kerning[i] && (e.x += g.kerning[i]), s.push({
                                        texture: g.texture,
                                        line: l,
                                        charCode: _,
                                        position: new n.Point(e.x + g.xOffset, e.y + g.yOffset)
                                    }), o = e.x + (g.texture.width + g.xOffset), e.x += g.xAdvance, d = Math.max(d, g.yOffset + g.texture.height), i = _)
                                }
                            }
                            h.push(o), a = Math.max(a, o);
                            var v = [];
                            for (f = 0; f <= l; f++) {
                                var y = 0;
                                "right" === this._font.align ? y = a - h[f] : "center" === this._font.align && (y = (a - h[f]) / 2), v.push(y)
                            }
                            var m = s.length,
                                x = this.tint;
                            for (f = 0; f < m; f++) {
                                var $ = this._glyphs[f];
                                $ ? $.texture = s[f].texture : ($ = new n.Sprite(s[f].texture), this._glyphs.push($)), $.position.x = (s[f].position.x + v[s[f].line]) * u, $.position.y = s[f].position.y * u, $.scale.x = $.scale.y = u, $.tint = x, $.parent || this.addChild($)
                            }
                            for (f = m; f < this._glyphs.length; ++f) this.removeChild(this._glyphs[f]);
                            if (this.textWidth = a * u, this.textHeight = (e.y + t.lineHeight) * u, 0 !== this.anchor.x || 0 !== this.anchor.y)
                                for (f = 0; f < m; f++) this._glyphs[f].x -= this.textWidth * this.anchor.x, this._glyphs[f].y -= this.textHeight * this.anchor.y;
                            this.maxLineHeight = d * u
                        }, r.prototype.updateTransform = function() {
                            this.validate(), this.containerUpdateTransform()
                        }, r.prototype.getLocalBounds = function() {
                            return this.validate(), n.Container.prototype.getLocalBounds.call(this)
                        }, r.prototype.validate = function() {
                            this.dirty && (this.updateText(), this.dirty = !1)
                        }, r.prototype.makeDirty = function() {
                            this.dirty = !0
                        }, r.fonts = {}
                    }, {
                        "../core": 62,
                        "../core/math/ObservablePoint": 65
                    }],
                    124: [function(t, e, i) {
                        function r(t) {
                            n.Sprite.call(this, t[0] instanceof n.Texture ? t[0] : t[0].texture), this._textures = null, this._durations = null, this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
                        }
                        var n = t("../core");
                        r.prototype = Object.create(n.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            totalFrames: {
                                get: function() {
                                    return this._textures.length
                                }
                            },
                            textures: {
                                get: function() {
                                    return this._textures
                                },
                                set: function(t) {
                                    if (t[0] instanceof n.Texture) this._textures = t, this._durations = null;
                                    else {
                                        this._textures = [], this._durations = [];
                                        for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                                    }
                                }
                            },
                            currentFrame: {
                                get: function() {
                                    var t = Math.floor(this._currentTime) % this._textures.length;
                                    return t < 0 && (t += this._textures.length), t
                                }
                            }
                        }), r.prototype.stop = function() {
                            this.playing && (this.playing = !1, n.ticker.shared.remove(this.update, this))
                        }, r.prototype.play = function() {
                            this.playing || (this.playing = !0, n.ticker.shared.add(this.update, this))
                        }, r.prototype.gotoAndStop = function(t) {
                            this.stop(), this._currentTime = t, this._texture = this._textures[this.currentFrame], this._textureID = -1
                        }, r.prototype.gotoAndPlay = function(t) {
                            this._currentTime = t, this.play()
                        }, r.prototype.update = function(t) {
                            var e = this.animationSpeed * t;
                            if (null !== this._durations) {
                                var i = this._currentTime % 1 * this._durations[this.currentFrame];
                                for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
                                var r = Math.sign(this.animationSpeed * t);
                                for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * r, this._currentTime += r;
                                this._currentTime += i / this._durations[this.currentFrame]
                            } else this._currentTime += e;
                            this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : (this._texture = this._textures[this.currentFrame], this._textureID = -1)
                        }, r.prototype.destroy = function() {
                            this.stop(), n.Sprite.prototype.destroy.call(this)
                        }, r.fromFrames = function(t) {
                            for (var e = [], i = 0; i < t.length; ++i) e.push(n.Texture.fromFrame(t[i]));
                            return new r(e)
                        }, r.fromImages = function(t) {
                            for (var e = [], i = 0; i < t.length; ++i) e.push(n.Texture.fromImage(t[i]));
                            return new r(e)
                        }
                    }, {
                        "../core": 62
                    }],
                    125: [function(t, e, i) {
                        function r(t, e, i) {
                            n.Sprite.call(this, t), this.tileScale = new n.Point(1, 1), this.tilePosition = new n.Point(0, 0), this._width = e || 100, this._height = i || 100, this._uvs = new n.TextureUvs, this._canvasPattern = null, this._glDatas = []
                        }
                        var n = t("../core"),
                            s = new n.Point,
                            o = t("../core/textures/Texture"),
                            a = t("../core/sprites/canvas/CanvasTinter"),
                            h = t("./webgl/TilingShader"),
                            l = new Float32Array(4);
                        r.prototype = Object.create(n.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return this._width
                                },
                                set: function(t) {
                                    this._width = t
                                }
                            },
                            height: {
                                get: function() {
                                    return this._height
                                },
                                set: function(t) {
                                    this._height = t
                                }
                            }
                        }), r.prototype._onTextureUpdate = function() {}, r.prototype._renderWebGL = function(t) {
                            var e = this._texture;
                            if (e && e._uvs) {
                                t.flush();
                                var i = t.gl,
                                    r = this._glDatas[t.CONTEXT_UID];
                                r || (r = {
                                    shader: new h(i),
                                    quad: new n.Quad(i)
                                }, this._glDatas[t.CONTEXT_UID] = r, r.quad.initVao(r.shader));
                                var s = r.quad.vertices;
                                s[0] = s[6] = this._width * -this.anchor.x, s[1] = s[3] = this._height * -this.anchor.y, s[2] = s[4] = this._width * (1 - this.anchor.x), s[5] = s[7] = this._height * (1 - this.anchor.y), r.quad.upload(), t.bindShader(r.shader);
                                var o = e._uvs,
                                    a = e._frame.width,
                                    u = e._frame.height,
                                    c = e.baseTexture.width,
                                    p = e.baseTexture.height,
                                    d = r.shader.uniforms.uPixelSize;
                                d[0] = 1 / c, d[1] = 1 / p, r.shader.uniforms.uPixelSize = d;
                                var f = r.shader.uniforms.uFrame;
                                f[0] = o.x0, f[1] = o.y0, f[2] = o.x1 - o.x0, f[3] = o.y2 - o.y0, r.shader.uniforms.uFrame = f;
                                var _ = r.shader.uniforms.uTransform;
                                _[0] = this.tilePosition.x % (a * this.tileScale.x) / this._width, _[1] = this.tilePosition.y % (u * this.tileScale.y) / this._height, _[2] = c / this._width * this.tileScale.x, _[3] = p / this._height * this.tileScale.y, r.shader.uniforms.uTransform = _, r.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                                var g = l;
                                n.utils.hex2rgb(this.tint, g), g[3] = this.worldAlpha, r.shader.uniforms.uColor = g, t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), r.quad.draw()
                            }
                        }, r.prototype._renderCanvas = function(t) {
                            var e = this._texture;
                            if (e.baseTexture.hasLoaded) {
                                var i = t.context,
                                    r = this.worldTransform,
                                    s = t.resolution,
                                    o = e.baseTexture,
                                    h = this.tilePosition.x / this.tileScale.x % e._frame.width,
                                    l = this.tilePosition.y / this.tileScale.y % e._frame.height;
                                if (!this._canvasPattern) {
                                    var u = new n.CanvasRenderTarget(e._frame.width, e._frame.height);
                                    16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), u.context.drawImage(this.tintedTexture, 0, 0)) : u.context.drawImage(o.source, -e._frame.x, -e._frame.y), this._canvasPattern = u.context.createPattern(u.canvas, "repeat")
                                }
                                i.globalAlpha = this.worldAlpha, i.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), i.scale(this.tileScale.x, this.tileScale.y), i.translate(h + this.anchor.x * -this._width, l + this.anchor.y * -this._height);
                                var c = t.blendModes[this.blendMode];
                                c !== t.context.globalCompositeOperation && (i.globalCompositeOperation = c), i.fillStyle = this._canvasPattern, i.fillRect(-h, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
                            }
                        }, r.prototype.getBounds = function() {
                            var t, e, i, r, n = this._width,
                                s = this._height,
                                o = n * (1 - this.anchor.x),
                                a = n * -this.anchor.x,
                                h = s * (1 - this.anchor.y),
                                l = s * -this.anchor.y,
                                u = this.worldTransform,
                                c = u.a,
                                p = u.b,
                                d = u.c,
                                f = u.d,
                                _ = u.tx,
                                g = u.ty,
                                v = c * a + d * l + _,
                                y = f * l + p * a + g,
                                m = c * o + d * l + _,
                                x = f * l + p * o + g,
                                $ = c * o + d * h + _,
                                T = f * h + p * o + g,
                                b = c * a + d * h + _,
                                S = f * h + p * a + g;
                            t = v, t = m < t ? m : t, t = $ < t ? $ : t, t = b < t ? b : t, i = y, i = x < i ? x : i, i = T < i ? T : i, i = S < i ? S : i, e = v, e = m > e ? m : e, e = $ > e ? $ : e, e = b > e ? b : e, r = y, r = x > r ? x : r, r = T > r ? T : r, r = S > r ? S : r;
                            var E = this._bounds;
                            return E.x = t, E.width = e - t, E.y = i, E.height = r - i, this._currentBounds = E, E
                        }, r.prototype.containsPoint = function(t) {
                            this.worldTransform.applyInverse(t, s);
                            var e, i = this._width,
                                r = this._height,
                                n = -i * this.anchor.x;
                            return s.x > n && s.x < n + i && (e = -r * this.anchor.y, s.y > e && s.y < e + r)
                        }, r.prototype.destroy = function() {
                            n.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
                        }, r.from = function(t, e, i) {
                            return new r(o.from(t), e, i)
                        }, r.fromFrame = function(t, e, i) {
                            var s = n.utils.TextureCache[t];
                            if (!s) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                            return new r(s, e, i)
                        }, r.fromImage = function(t, e, i, s, o) {
                            return new r(n.Texture.fromImage(t, s, o), e, i)
                        }
                    }, {
                        "../core": 62,
                        "../core/sprites/canvas/CanvasTinter": 100,
                        "../core/textures/Texture": 109,
                        "./webgl/TilingShader": 130
                    }],
                    126: [function(t, e, i) {
                        var r = t("../core"),
                            n = r.DisplayObject,
                            s = new r.Matrix;
                        n.prototype._cacheAsBitmap = !1, n.prototype._cacheData = !1;
                        var o = function() {
                            this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
                        };
                        Object.defineProperties(n.prototype, {
                            cacheAsBitmap: {
                                get: function() {
                                    return this._cacheAsBitmap
                                },
                                set: function(t) {
                                    if (this._cacheAsBitmap !== t) {
                                        this._cacheAsBitmap = t;
                                        var e;
                                        t ? (this._cacheData || (this._cacheData = new o), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL,
                                            e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                                    }
                                }
                            }
                        }), n.prototype._renderCachedWebGL = function(t) {
                            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
                        }, n.prototype._initCachedDisplayObject = function(t) {
                            if (!this._cacheData || !this._cacheData.sprite) {
                                var e = this.alpha;
                                this.alpha = 1, t.currentRenderer.flush();
                                var i = this.getLocalBounds().clone();
                                if (this._filters) {
                                    var n = this._filters[0].padding;
                                    i.pad(n)
                                }
                                var o = t._activeRenderTarget,
                                    a = t.filterManager.filterStack,
                                    h = r.RenderTexture.create(0 | i.width, 0 | i.height),
                                    l = s;
                                l.tx = -i.x, l.ty = -i.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, h, !0, l, !0), t.bindRenderTarget(o), t.filterManager.filterStack = a, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                                var u = new r.Sprite(h);
                                u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(i.x / i.width), u.anchor.y = -(i.y / i.height), u.alpha = e, u._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.updateTransform(), this.containsPoint = u.containsPoint.bind(u)
                            }
                        }, n.prototype._renderCachedCanvas = function(t) {
                            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
                        }, n.prototype._initCachedDisplayObjectCanvas = function(t) {
                            if (!this._cacheData || !this._cacheData.sprite) {
                                var e = this.getLocalBounds(),
                                    i = this.alpha;
                                this.alpha = 1;
                                var n = t.context,
                                    o = new r.RenderTexture.create(0 | e.width, 0 | e.height),
                                    a = s;
                                this.transform.worldTransform.copy(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, o, !0, a, !1), t.context = n, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                                var h = new r.Sprite(o);
                                h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -(e.x / e.width), h.anchor.y = -(e.y / e.height), h._bounds = this._bounds, h.alpha = i, this.updateTransform(), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = h, this.containsPoint = h.containsPoint.bind(h)
                            }
                        }, n.prototype._calculateCachedBounds = function() {
                            return this._cacheData.sprite._calculateBounds()
                        }, n.prototype._getCachedLocalBounds = function() {
                            return this._cacheData.sprite.getLocalBounds()
                        }, n.prototype._destroyCachedDisplayObject = function() {
                            this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null
                        }, n.prototype._cacheAsBitmapDestroy = function() {
                            this.cacheAsBitmap = !1, this.destroy()
                        }
                    }, {
                        "../core": 62
                    }],
                    127: [function(t, e, i) {
                        var r = t("../core");
                        r.DisplayObject.prototype.name = null, r.Container.prototype.getChildByName = function(t) {
                            for (var e = 0; e < this.children.length; e++)
                                if (this.children[e].name === t) return this.children[e];
                            return null
                        }
                    }, {
                        "../core": 62
                    }],
                    128: [function(t, e, i) {
                        var r = t("../core");
                        r.DisplayObject.prototype.getGlobalPosition = function(t) {
                            return t = t || new r.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
                        }
                    }, {
                        "../core": 62
                    }],
                    129: [function(t, e, i) {
                        t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
                            MovieClip: t("./MovieClip"),
                            TilingSprite: t("./TilingSprite"),
                            BitmapText: t("./BitmapText")
                        }
                    }, {
                        "./BitmapText": 123,
                        "./MovieClip": 124,
                        "./TilingSprite": 125,
                        "./cacheAsBitmap": 126,
                        "./getChildByName": 127,
                        "./getGlobalPosition": 128
                    }],
                    130: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n")
                        }
                        var n = t("../../core/Shader");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../core/Shader": 42
                    }],
                    131: [function(t, e, i) {
                        function r(t, e, i) {
                            n.Filter.call(this), this.blurXFilter = new s, this.blurYFilter = new o, this.resolution = 1, this.padding = 0, this.resolution = i || 1, this.quality = e || 4, this.blur = t || 8
                        }
                        var n = t("../../core"),
                            s = t("./BlurXFilter"),
                            o = t("./BlurYFilter");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function(t, e, i) {
                            var r = t.getRenderTarget(!0);
                            this.blurXFilter.apply(t, e, r, !0), this.blurYFilter.apply(t, r, i, !1), t.returnRenderTarget(r)
                        }, Object.defineProperties(r.prototype, {
                            blur: {
                                get: function() {
                                    return this.blurXFilter.blur
                                },
                                set: function(t) {
                                    this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            },
                            quality: {
                                get: function() {
                                    return this.blurXFilter.quality
                                },
                                set: function(t) {
                                    this.blurXFilter.quality = this.blurYFilter.quality = t
                                }
                            },
                            blurX: {
                                get: function() {
                                    return this.blurXFilter.blur
                                },
                                set: function(t) {
                                    this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            },
                            blurY: {
                                get: function() {
                                    return this.blurYFilter.blur
                                },
                                set: function(t) {
                                    this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            }
                        })
                    }, {
                        "../../core": 62,
                        "./BlurXFilter": 132,
                        "./BlurYFilter": 133
                    }],
                    132: [function(t, e, i) {
                        function r(t, e, i) {
                            var r = s(5, !0),
                                a = o(5);
                            n.Filter.call(this, r, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
                        }
                        var n = t("../../core"),
                            s = t("./generateBlurVertSource"),
                            o = t("./generateBlurFragSource"),
                            a = t("./getMaxBlurKernelSize");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function(t, e, i, r) {
                            if (this.firstRun) {
                                var n = t.renderer.gl,
                                    h = a(n);
                                this.vertexSrc = s(h, !0), this.fragmentSrc = o(h), this.firstRun = !1
                            }
                            if (this.uniforms.strength = 1 / i.size.width * (i.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
                            else {
                                for (var l = t.getRenderTarget(!0), u = e, c = l, p = 0; p < this.passes - 1; p++) {
                                    t.applyFilter(this, u, c, !0);
                                    var d = c;
                                    c = u, u = d
                                }
                                t.applyFilter(this, u, i, r), t.returnRenderTarget(l)
                            }
                        }, Object.defineProperties(r.prototype, {
                            blur: {
                                get: function() {
                                    return this.strength
                                },
                                set: function(t) {
                                    this.padding = 2 * Math.abs(t), this.strength = t
                                }
                            },
                            quality: {
                                get: function() {
                                    return this._quality
                                },
                                set: function(t) {
                                    this._quality = t, this.passes = t
                                }
                            }
                        })
                    }, {
                        "../../core": 62,
                        "./generateBlurFragSource": 134,
                        "./generateBlurVertSource": 135,
                        "./getMaxBlurKernelSize": 136
                    }],
                    133: [function(t, e, i) {
                        function r(t, e, i) {
                            var r = s(5, !1),
                                a = o(5);
                            n.Filter.call(this, r, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
                        }
                        var n = t("../../core"),
                            s = t("./generateBlurVertSource"),
                            o = t("./generateBlurFragSource"),
                            a = t("./getMaxBlurKernelSize");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function(t, e, i, r) {
                            if (this.firstRun) {
                                var n = t.renderer.gl,
                                    h = a(n);
                                this.vertexSrc = s(h, !1), this.fragmentSrc = o(h), this.firstRun = !1
                            }
                            if (this.uniforms.strength = 1 / i.size.height * (i.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
                            else {
                                for (var l = t.getRenderTarget(!0), u = e, c = l, p = 0; p < this.passes - 1; p++) {
                                    t.applyFilter(this, u, c, !0);
                                    var d = c;
                                    c = u, u = d
                                }
                                t.applyFilter(this, u, i, r), t.returnRenderTarget(l)
                            }
                        }, Object.defineProperties(r.prototype, {
                            blur: {
                                get: function() {
                                    return this.strength
                                },
                                set: function(t) {
                                    this.padding = 2 * Math.abs(t), this.strength = t
                                }
                            },
                            quality: {
                                get: function() {
                                    return this._quality
                                },
                                set: function(t) {
                                    this._quality = t, this.passes = t
                                }
                            }
                        })
                    }, {
                        "../../core": 62,
                        "./generateBlurFragSource": 134,
                        "./generateBlurVertSource": 135,
                        "./getMaxBlurKernelSize": 136
                    }],
                    134: [function(t, e, i) {
                        var r = {
                                5: [.153388, .221461, .250301],
                                7: [.071303, .131514, .189879, .214607],
                                9: [.028532, .067234, .124009, .179044, .20236],
                                11: [.0093, .028002, .065984, .121703, .175713, .198596],
                                13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                                15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
                            },
                            n = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "\tgl_FragColor = vec4(0.0);", "\t%blur%", "}"].join("\n"),
                            s = function(t) {
                                for (var e, i = r[t], s = i.length, o = n, a = "", h = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", l = 0; l < t; l++) {
                                    var u = h.replace("%index%", l);
                                    e = l, l >= s && (e = t - l - 1), u = u.replace("%value%", i[e]), a += u, a += "\n"
                                }
                                return o = o.replace("%blur%", a), o = o.replace("%size%", t)
                            };
                        e.exports = s
                    }, {}],
                    135: [function(t, e, i) {
                        var r = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n"),
                            n = function(t, e) {
                                var i, n, s = Math.ceil(t / 2),
                                    o = r,
                                    a = "";
                                i = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                                for (var h = 0; h < t; h++) {
                                    var l = i.replace("%index%", h);
                                    n = h, h >= s && (n = t - h - 1), l = l.replace("%sampleIndex%", h - (s - 1) + ".0"), a += l, a += "\n"
                                }
                                return o = o.replace("%blur%", a), o = o.replace("%size%", t)
                            };
                        e.exports = n
                    }, {}],
                    136: [function(t, e, i) {
                        var r = function(t) {
                            for (var e = t.getParameter(t.MAX_VARYING_VECTORS), i = 15; i > e;) i -= 2;
                            return i
                        };
                        e.exports = r
                    }, {}],
                    137: [function(t, e, i) {
                        function r() {
                            n.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n"), this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                        }
                        var n = t("../../core");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._loadMatrix = function(t, e) {
                            e = !!e;
                            var i = t;
                            e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
                        }, r.prototype._multiply = function(t, e, i) {
                            return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19], t
                        }, r.prototype._colorMatrix = function(t) {
                            var e = new Float32Array(t);
                            return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
                        }, r.prototype.brightness = function(t, e) {
                            var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, r.prototype.greyscale = function(t, e) {
                            var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, r.prototype.grayscale = r.prototype.greyscale, r.prototype.blackAndWhite = function(t) {
                            var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.hue = function(t, e) {
                            t = (t || 0) / 180 * Math.PI;
                            var i = Math.cos(t),
                                r = Math.sin(t),
                                n = Math.sqrt,
                                s = 1 / 3,
                                o = n(s),
                                a = i + (1 - i) * s,
                                h = s * (1 - i) - o * r,
                                l = s * (1 - i) + o * r,
                                u = s * (1 - i) + o * r,
                                c = i + s * (1 - i),
                                p = s * (1 - i) - o * r,
                                d = s * (1 - i) - o * r,
                                f = s * (1 - i) + o * r,
                                _ = i + s * (1 - i),
                                g = [a, h, l, 0, 0, u, c, p, 0, 0, d, f, _, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(g, e)
                        }, r.prototype.contrast = function(t, e) {
                            var i = (t || 0) + 1,
                                r = -128 * (i - 1),
                                n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                            this._loadMatrix(n, e)
                        }, r.prototype.saturate = function(t, e) {
                            var i = 2 * (t || 0) / 3 + 1,
                                r = (i - 1) * -.5,
                                n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(n, e)
                        }, r.prototype.desaturate = function() {
                            this.saturate(-1)
                        }, r.prototype.negative = function(t) {
                            var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.sepia = function(t) {
                            var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.technicolor = function(t) {
                            var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.polaroid = function(t) {
                            var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.toBGR = function(t) {
                            var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.kodachrome = function(t) {
                            var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.browni = function(t) {
                            var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.vintage = function(t) {
                            var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.colorTone = function(t, e, i, r, n) {
                            t = t || .2, e = e || .15, i = i || 16770432, r = r || 3375104;
                            var s = (i >> 16 & 255) / 255,
                                o = (i >> 8 & 255) / 255,
                                a = (255 & i) / 255,
                                h = (r >> 16 & 255) / 255,
                                l = (r >> 8 & 255) / 255,
                                u = (255 & r) / 255,
                                c = [.3, .59, .11, 0, 0, s, o, a, t, 0, h, l, u, e, 0, s - h, o - l, a - u, 0, 0];
                            this._loadMatrix(c, n)
                        }, r.prototype.night = function(t, e) {
                            t = t || .1;
                            var i = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, r.prototype.predator = function(t, e) {
                            var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, r.prototype.lsd = function(t) {
                            var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, r.prototype.reset = function() {
                            var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(t, !1)
                        }, Object.defineProperties(r.prototype, {
                            matrix: {
                                get: function() {
                                    return this.uniforms.m
                                },
                                set: function(t) {
                                    this.uniforms.m = t
                                }
                            }
                        })
                    }, {
                        "../../core": 62
                    }],
                    138: [function(t, e, i) {
                        function r(t, e) {
                            var i = new n.Matrix;
                            t.renderable = !1, n.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"), this.maskSprite = t, this.maskMatrix = i, this.uniforms.mapSampler = t.texture, this.uniforms.filterMatrix = i.toArray(!0), this.uniforms.scale = {
                                x: 1,
                                y: 1
                            }, null !== e && void 0 !== e || (e = 20), this.scale = new n.Point(e, e)
                        }
                        var n = t("../../core");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function(t, e, i) {
                            var r = 1 / i.destinationFrame.width * (i.size.width / e.size.width);
                            this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * r, this.uniforms.scale.y = this.scale.y * r, t.applyFilter(this, e, i)
                        }, Object.defineProperties(r.prototype, {
                            map: {
                                get: function() {
                                    return this.uniforms.mapSampler
                                },
                                set: function(t) {
                                    this.uniforms.mapSampler = t
                                }
                            }
                        })
                    }, {
                        "../../core": 62
                    }],
                    139: [function(t, e, i) {
                        function r() {
                            n.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n')
                        }
                        var n = t("../../core");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../core": 62
                    }],
                    140: [function(t, e, i) {
                        e.exports = {
                            FXAAFilter: t("./fxaa/FXAAFilter"),
                            NoiseFilter: t("./noise/NoiseFilter"),
                            DisplacementFilter: t("./displacement/DisplacementFilter"),
                            BlurFilter: t("./blur/BlurFilter"),
                            BlurXFilter: t("./blur/BlurXFilter"),
                            BlurYFilter: t("./blur/BlurYFilter"),
                            ColorMatrixFilter: t("./colormatrix/ColorMatrixFilter"),
                            VoidFilter: t("./void/VoidFilter")
                        }
                    }, {
                        "./blur/BlurFilter": 131,
                        "./blur/BlurXFilter": 132,
                        "./blur/BlurYFilter": 133,
                        "./colormatrix/ColorMatrixFilter": 137,
                        "./displacement/DisplacementFilter": 138,
                        "./fxaa/FXAAFilter": 139,
                        "./noise/NoiseFilter": 141,
                        "./void/VoidFilter": 142
                    }],
                    141: [function(t, e, i) {
                        function r() {
                            n.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"), this.noise = .5
                        }
                        var n = t("../../core");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            noise: {
                                get: function() {
                                    return this.uniforms.noise
                                },
                                set: function(t) {
                                    this.uniforms.noise = t
                                }
                            }
                        })
                    }, {
                        "../../core": 62
                    }],
                    142: [function(t, e, i) {
                        function r() {
                            n.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"), this.glShaderKey = "void"
                        }
                        var n = t("../../core");
                        r.prototype = Object.create(n.Filter.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../core": 62
                    }],
                    143: [function(t, e, i) {
                        function r() {
                            this.global = new n.Point, this.target = null, this.originalEvent = null
                        }
                        var n = t("../core");
                        r.prototype.constructor = r, e.exports = r, r.prototype.getLocalPosition = function(t, e, i) {
                            return t.worldTransform.applyInverse(i || this.global, e)
                        }
                    }, {
                        "../core": 62
                    }],
                    144: [function(t, e, i) {
                        function r(t, e) {
                            o.call(this), e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new s, this.mouse.global.set(-999999), this.eventData = {
                                stopped: !1,
                                target: null,
                                type: null,
                                data: this.mouse,
                                stopPropagation: function() {
                                    this.stopped = !0
                                }
                            }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.defaultCursorStyle = "inherit", this.currentCursorStyle = "inherit", this._tempPoint = new n.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
                        }
                        var n = t("../core"),
                            s = t("./InteractionData"),
                            o = t("eventemitter3");
                        Object.assign(n.DisplayObject.prototype, t("./interactiveTarget")), r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setTargetElement = function(t, e) {
                            this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
                        }, r.prototype.addEvents = function() {
                            this.interactionDOMElement && (n.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
                        }, r.prototype.removeEvents = function() {
                            this.interactionDOMElement && (n.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
                        }, r.prototype.update = function(t) {
                            if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                                if (this.didMove) return void(this.didMove = !1);
                                this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor);
                            }
                        }, r.prototype.dispatchEvent = function(t, e, i) {
                            i.stopped || (i.target = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
                        }, r.prototype.mapPositionToPoint = function(t, e, i) {
                            var r;
                            r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }, t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) / this.resolution, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) / this.resolution
                        }, r.prototype.processInteractive = function(t, e, i, r, n) {
                            if (!e || !e.visible) return !1;
                            var s = !1,
                                o = n = e.interactive || n;
                            if (e.hitArea && (o = !1), r && e._mask && (e._mask.containsPoint(t) || (r = !1)), r && e.filterArea && (e.filterArea.contains(t.x, t.y) || (r = !1)), e.interactiveChildren)
                                for (var a = e.children, h = a.length - 1; h >= 0; h--) {
                                    var l = a[h];
                                    if (this.processInteractive(t, l, i, r, o)) {
                                        if (!l.parent) continue;
                                        s = !0, o = !1, r = !1
                                    }
                                }
                            return n && (r && !s && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), s = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (s = e.containsPoint(t))), e.interactive && i(e, s)), s
                        }, r.prototype.onMouseDown = function(t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0);
                            var e = 2 === t.button || 3 === t.which;
                            this.emit(e ? "rightdown" : "mousedown", this.eventData)
                        }, r.prototype.processMouseDown = function(t, e) {
                            var i = this.mouse.originalEvent,
                                r = 2 === i.button || 3 === i.which;
                            e && (t[r ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, r ? "rightdown" : "mousedown", this.eventData))
                        }, r.prototype.onMouseUp = function(t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0);
                            var e = 2 === t.button || 3 === t.which;
                            this.emit(e ? "rightup" : "mouseup", this.eventData)
                        }, r.prototype.processMouseUp = function(t, e) {
                            var i = this.mouse.originalEvent,
                                r = 2 === i.button || 3 === i.which,
                                n = r ? "_isRightDown" : "_isLeftDown";
                            e ? (this.dispatchEvent(t, r ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, r ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, r ? "rightupoutside" : "mouseupoutside", this.eventData))
                        }, r.prototype.onMouseMove = function(t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.emit("mousemove", this.eventData), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                        }, r.prototype.processMouseMove = function(t, e) {
                            this.processMouseOverOut(t, e), this.moveWhenInside && !e || this.dispatchEvent(t, "mousemove", this.eventData)
                        }, r.prototype.onMouseOut = function(t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = this.defaultCursorStyle, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1), this.emit("mouseout", this.eventData)
                        }, r.prototype.processMouseOverOut = function(t, e) {
                            e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
                        }, r.prototype.onMouseOver = function(t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.emit("mouseover", this.eventData)
                        }, r.prototype.onTouchStart = function(t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                                var n = e[r],
                                    s = this.getTouchData(n);
                                s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.emit("touchstart", this.eventData), this.returnTouchData(s)
                            }
                        }, r.prototype.processTouchStart = function(t, e) {
                            e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
                        }, r.prototype.onTouchEnd = function(t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                                var n = e[r],
                                    s = this.getTouchData(n);
                                s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.emit("touchend", this.eventData), this.returnTouchData(s)
                            }
                        }, r.prototype.processTouchEnd = function(t, e) {
                            e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
                        }, r.prototype.onTouchMove = function(t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                                var n = e[r],
                                    s = this.getTouchData(n);
                                s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside), this.emit("touchmove", this.eventData), this.returnTouchData(s)
                            }
                        }, r.prototype.processTouchMove = function(t, e) {
                            this.moveWhenInside && !e || this.dispatchEvent(t, "touchmove", this.eventData)
                        }, r.prototype.getTouchData = function(t) {
                            var e = this.interactiveDataPool.pop();
                            return e || (e = new s), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
                        }, r.prototype.returnTouchData = function(t) {
                            this.interactiveDataPool.push(t)
                        }, r.prototype.destroy = function() {
                            this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onMouseOver = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
                        }, n.WebGLRenderer.registerPlugin("interaction", r), n.CanvasRenderer.registerPlugin("interaction", r)
                    }, {
                        "../core": 62,
                        "./InteractionData": 143,
                        "./interactiveTarget": 146,
                        eventemitter3: 3
                    }],
                    145: [function(t, e, i) {
                        e.exports = {
                            InteractionData: t("./InteractionData"),
                            InteractionManager: t("./InteractionManager"),
                            interactiveTarget: t("./interactiveTarget")
                        }
                    }, {
                        "./InteractionData": 143,
                        "./InteractionManager": 144,
                        "./interactiveTarget": 146
                    }],
                    146: [function(t, e, i) {
                        var r = {
                            interactive: !1,
                            interactiveChildren: !0,
                            hitArea: null,
                            buttonMode: !1,
                            defaultCursor: "pointer",
                            _over: !1,
                            _isLeftDown: !1,
                            _isRightDown: !1,
                            _touchDown: !1
                        };
                        e.exports = r
                    }, {}],
                    147: [function(t, e, i) {
                        function r(t, e) {
                            var i = {},
                                r = t.data.getElementsByTagName("info")[0],
                                n = t.data.getElementsByTagName("common")[0];
                            i.font = r.getAttribute("face"), i.size = parseInt(r.getAttribute("size"), 10), i.lineHeight = parseInt(n.getAttribute("lineHeight"), 10), i.chars = {};
                            for (var a = t.data.getElementsByTagName("char"), h = 0; h < a.length; h++) {
                                var l = parseInt(a[h].getAttribute("id"), 10),
                                    u = new s.Rectangle(parseInt(a[h].getAttribute("x"), 10) + e.frame.x, parseInt(a[h].getAttribute("y"), 10) + e.frame.y, parseInt(a[h].getAttribute("width"), 10), parseInt(a[h].getAttribute("height"), 10));
                                i.chars[l] = {
                                    xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                                    yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                                    xAdvance: parseInt(a[h].getAttribute("xadvance"), 10),
                                    kerning: {},
                                    texture: new s.Texture(e.baseTexture, u)
                                }
                            }
                            var c = t.data.getElementsByTagName("kerning");
                            for (h = 0; h < c.length; h++) {
                                var p = parseInt(c[h].getAttribute("first"), 10),
                                    d = parseInt(c[h].getAttribute("second"), 10),
                                    f = parseInt(c[h].getAttribute("amount"), 10);
                                i.chars[d] && (i.chars[d].kerning[p] = f)
                            }
                            t.bitmapFont = i, o.BitmapText.fonts[i.font] = i
                        }
                        var n = t("resource-loader").Resource,
                            s = t("../core"),
                            o = t("../extras"),
                            a = t("path");
                        e.exports = function() {
                            return function(t, e) {
                                if (!t.data || !t.isXml) return e();
                                if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e();
                                var i = t.isDataUrl ? "" : a.dirname(t.url);
                                t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/"), i = i.replace(this.baseUrl, ""))), i && "/" !== i.charAt(i.length - 1) && (i += "/");
                                var o = i + t.data.getElementsByTagName("page")[0].getAttribute("file");
                                if (s.utils.TextureCache[o]) r(t, s.utils.TextureCache[o]), e();
                                else {
                                    var h = {
                                        crossOrigin: t.crossOrigin,
                                        loadType: n.LOAD_TYPE.IMAGE,
                                        metadata: t.metadata.imageMetadata
                                    };
                                    this.add(t.name + "_image", o, h, function(i) {
                                        r(t, i.texture), e()
                                    })
                                }
                            }
                        }
                    }, {
                        "../core": 62,
                        "../extras": 129,
                        path: 22,
                        "resource-loader": 36
                    }],
                    148: [function(t, e, i) {
                        e.exports = {
                            Loader: t("./loader"),
                            bitmapFontParser: t("./bitmapFontParser"),
                            spritesheetParser: t("./spritesheetParser"),
                            textureParser: t("./textureParser"),
                            Resource: t("resource-loader").Resource
                        }
                    }, {
                        "./bitmapFontParser": 147,
                        "./loader": 149,
                        "./spritesheetParser": 150,
                        "./textureParser": 151,
                        "resource-loader": 36
                    }],
                    149: [function(t, e, i) {
                        function r(t, e) {
                            n.call(this, t, e);
                            for (var i = 0; i < r._pixiMiddleware.length; ++i) this.use(r._pixiMiddleware[i]())
                        }
                        var n = t("resource-loader"),
                            s = t("./textureParser"),
                            o = t("./spritesheetParser"),
                            a = t("./bitmapFontParser");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r._pixiMiddleware = [n.middleware.parsing.blob, s, o, a], r.addPixiMiddleware = function(t) {
                            r._pixiMiddleware.push(t)
                        };
                        var h = n.Resource;
                        h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT)
                    }, {
                        "./bitmapFontParser": 147,
                        "./spritesheetParser": 150,
                        "./textureParser": 151,
                        "resource-loader": 36
                    }],
                    150: [function(t, e, i) {
                        var r = t("resource-loader").Resource,
                            n = t("path"),
                            s = t("../core"),
                            o = 1e3;
                        e.exports = function() {
                            return function(t, e) {
                                var i, a = t.name + "_image";
                                if (!t.data || !t.isJson || !t.data.frames || this.resources[a]) return e();
                                var h = {
                                    crossOrigin: t.crossOrigin,
                                    loadType: r.LOAD_TYPE.IMAGE,
                                    metadata: t.metadata.imageMetadata
                                };
                                i = t.isDataUrl ? t.data.meta.image : n.dirname(t.url.replace(this.baseUrl, "")) + "/" + t.data.meta.image, this.add(a, i, h, function(i) {
                                    function r(e, r) {
                                        for (var n = e; n - e < r && n < u.length;) {
                                            var o = u[n],
                                                a = l[o].frame;
                                            if (a) {
                                                var h = null,
                                                    p = null,
                                                    d = new s.Rectangle(0, 0, l[o].sourceSize.w / c, l[o].sourceSize.h / c);
                                                h = l[o].rotated ? new s.Rectangle(a.x / c, a.y / c, a.h / c, a.w / c) : new s.Rectangle(a.x / c, a.y / c, a.w / c, a.h / c), l[o].trimmed && (p = new s.Rectangle(l[o].spriteSourceSize.x / c, l[o].spriteSourceSize.y / c, l[o].spriteSourceSize.w / c, l[o].spriteSourceSize.h / c)), t.textures[o] = new s.Texture(i.texture.baseTexture, h, d, p, l[o].rotated ? 2 : 0), s.utils.TextureCache[o] = t.textures[o]
                                            }
                                            n++
                                        }
                                    }

                                    function n() {
                                        return p * o < u.length
                                    }

                                    function a(t) {
                                        r(p * o, o), p++, setTimeout(t, 0)
                                    }

                                    function h() {
                                        a(function() {
                                            n() ? h() : e()
                                        })
                                    }
                                    t.textures = {};
                                    var l = t.data.frames,
                                        u = Object.keys(l),
                                        c = s.utils.getResolutionOfUrl(t.url),
                                        p = 0;
                                    u.length <= o ? (r(0, o), e()) : h()
                                })
                            }
                        }
                    }, {
                        "../core": 62,
                        path: 22,
                        "resource-loader": 36
                    }],
                    151: [function(t, e, i) {
                        var r = t("../core");
                        e.exports = function() {
                            return function(t, e) {
                                if (t.data && t.isImage) {
                                    var i = new r.BaseTexture(t.data, null, r.utils.getResolutionOfUrl(t.url));
                                    i.imageUrl = t.url, t.texture = new r.Texture(i), r.utils.BaseTextureCache[t.url] = i, r.utils.TextureCache[t.url] = t.texture
                                }
                                e()
                            }
                        }
                    }, {
                        "../core": 62
                    }],
                    152: [function(t, e, i) {
                        function r(t, e, i, s, o) {
                            n.Container.call(this), this._texture = null, this.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = s || new Uint16Array([0, 1, 3, 2]), this.dirty = 0, this.indexDirty = 0, this.blendMode = n.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = o || r.DRAW_MODES.TRIANGLE_MESH, this.texture = t, this.shader = null, this.tintRgb = new Float32Array([1, 1, 1]), this._glDatas = []
                        }
                        var n = t("../core"),
                            s = t("pixi-gl-core"),
                            o = t("./webgl/MeshShader"),
                            a = new n.Point,
                            h = new n.Polygon;
                        r.prototype = Object.create(n.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            texture: {
                                get: function() {
                                    return this._texture
                                },
                                set: function(t) {
                                    this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                                }
                            },
                            tint: {
                                get: function() {
                                    return n.utils.rgb2hex(this.tintRgb)
                                },
                                set: function(t) {
                                    this.tintRgb = n.utils.hex2rgb(t, this.tintRgb)
                                }
                            }
                        }), r.prototype._renderWebGL = function(t) {
                            t.flush();
                            var e = t.gl,
                                i = this._glDatas[t.CONTEXT_UID];
                            i || (i = {
                                shader: new o(e),
                                vertexBuffer: s.GLBuffer.createVertexBuffer(e, this.vertices, e.STREAM_DRAW),
                                uvBuffer: s.GLBuffer.createVertexBuffer(e, this.uvs, e.STREAM_DRAW),
                                indexBuffer: s.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW),
                                vao: new s.VertexArrayObject(e),
                                dirty: this.dirty,
                                indexDirty: this.indexDirty
                            }, i.vao = new s.VertexArrayObject(e).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer, i.shader.attributes.aVertexPosition, e.FLOAT, !1, 8, 0).addAttribute(i.uvBuffer, i.shader.attributes.aTextureCoord, e.FLOAT, !1, 8, 0), this._glDatas[t.CONTEXT_UID] = i), this.dirty !== i.dirty && (i.dirty = this.dirty, i.uvBuffer.upload()), this.indexDirty !== i.indexDirty && (i.indexDirty = this.indexDirty, i.indexBuffer.upload()), i.vertexBuffer.upload(), t.bindShader(i.shader), t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), i.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0), i.shader.uniforms.alpha = this.worldAlpha, i.shader.uniforms.tint = this.tintRgb;
                            var n = this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? e.TRIANGLE_STRIP : e.TRIANGLES;
                            i.vao.bind().draw(n, this.indices.length).unbind()
                        }, r.prototype._renderCanvas = function(t) {
                            var e = t.context,
                                i = this.worldTransform,
                                n = t.resolution;
                            t.roundPixels ? e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n | 0, i.ty * n | 0) : e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
                        }, r.prototype._renderCanvasTriangleMesh = function(t) {
                            for (var e = this.vertices, i = this.uvs, r = e.length / 2, n = 0; n < r - 2; n++) {
                                var s = 2 * n;
                                this._renderCanvasDrawTriangle(t, e, i, s, s + 2, s + 4)
                            }
                        }, r.prototype._renderCanvasTriangles = function(t) {
                            for (var e = this.vertices, i = this.uvs, r = this.indices, n = r.length, s = 0; s < n; s += 3) {
                                var o = 2 * r[s],
                                    a = 2 * r[s + 1],
                                    h = 2 * r[s + 2];
                                this._renderCanvasDrawTriangle(t, e, i, o, a, h)
                            }
                        }, r.prototype._renderCanvasDrawTriangle = function(t, e, i, r, n, s) {
                            var o = this._texture.baseTexture,
                                a = o.source,
                                h = o.width,
                                l = o.height,
                                u = e[r],
                                c = e[n],
                                p = e[s],
                                d = e[r + 1],
                                f = e[n + 1],
                                _ = e[s + 1],
                                g = i[r] * o.width,
                                v = i[n] * o.width,
                                y = i[s] * o.width,
                                m = i[r + 1] * o.height,
                                x = i[n + 1] * o.height,
                                $ = i[s + 1] * o.height;
                            if (this.canvasPadding > 0) {
                                var T = this.canvasPadding / this.worldTransform.a,
                                    b = this.canvasPadding / this.worldTransform.d,
                                    S = (u + c + p) / 3,
                                    E = (d + f + _) / 3,
                                    w = u - S,
                                    P = d - E,
                                    M = Math.sqrt(w * w + P * P);
                                u = S + w / M * (M + T), d = E + P / M * (M + b), w = c - S, P = f - E, M = Math.sqrt(w * w + P * P), c = S + w / M * (M + T), f = E + P / M * (M + b), w = p - S, P = _ - E, M = Math.sqrt(w * w + P * P), p = S + w / M * (M + T), _ = E + P / M * (M + b)
                            }
                            t.save(), t.beginPath(), t.moveTo(u, d), t.lineTo(c, f), t.lineTo(p, _), t.closePath(), t.clip();
                            var A = g * x + m * y + v * $ - x * y - m * v - g * $,
                                L = u * x + m * p + c * $ - x * p - m * c - u * $,
                                D = g * c + u * y + v * p - c * y - u * v - g * p,
                                R = g * x * p + m * c * y + u * v * $ - u * x * y - m * v * p - g * c * $,
                                O = d * x + m * _ + f * $ - x * _ - m * f - d * $,
                                C = g * f + d * y + v * _ - f * y - d * v - g * _,
                                I = g * x * _ + m * f * y + d * v * $ - d * x * y - m * v * _ - g * f * $;
                            t.transform(L / A, O / A, D / A, C / A, R / A, I / A), t.drawImage(a, 0, 0, h * o.resolution, l * o.resolution, 0, 0, h, l), t.restore()
                        }, r.prototype.renderMeshFlat = function(t) {
                            var e = this.context,
                                i = t.vertices,
                                r = i.length / 2;
                            e.beginPath();
                            for (var n = 1; n < r - 2; n++) {
                                var s = 2 * n,
                                    o = i[s],
                                    a = i[s + 2],
                                    h = i[s + 4],
                                    l = i[s + 1],
                                    u = i[s + 3],
                                    c = i[s + 5];
                                e.moveTo(o, l), e.lineTo(a, u), e.lineTo(h, c)
                            }
                            e.fillStyle = "#FF0000", e.fill(), e.closePath()
                        }, r.prototype._onTextureUpdate = function() {}, r.prototype._calculateBounds = function() {
                            this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
                        }, r.prototype.containsPoint = function(t) {
                            if (!this.getBounds().contains(t.x, t.y)) return !1;
                            this.worldTransform.applyInverse(t, a);
                            for (var e = this.vertices, i = h.points, n = this.indices, s = this.indices.length, o = this.drawMode === r.DRAW_MODES.TRIANGLES ? 3 : 1, l = 0; l + 2 < s; l += o) {
                                var u = 2 * n[l],
                                    c = 2 * n[l + 1],
                                    p = 2 * n[l + 2];
                                if (i[0] = e[u], i[1] = e[u + 1], i[2] = e[c], i[3] = e[c + 1], i[4] = e[p], i[5] = e[p + 1], h.contains(a.x, a.y)) return !0
                            }
                            return !1
                        }, r.DRAW_MODES = {
                            TRIANGLE_MESH: 0,
                            TRIANGLES: 1
                        }
                    }, {
                        "../core": 62,
                        "./webgl/MeshShader": 157,
                        "pixi-gl-core": 12
                    }],
                    153: [function(t, e, i) {
                        function r(t, e, i, r, o) {
                            s.call(this, t, 4, 4);
                            var a = this.uvs;
                            a[6] = a[14] = a[22] = a[30] = 1, a[25] = a[27] = a[29] = a[31] = 1, this._origWidth = t.width, this._origHeight = t.height, this._uvw = 1 / this._origWidth, this._uvh = 1 / this._origHeight, this.width = t.width, this.height = t.height, a[2] = a[10] = a[18] = a[26] = this._uvw * e, a[4] = a[12] = a[20] = a[28] = 1 - this._uvw * r, a[9] = a[11] = a[13] = a[15] = this._uvh * i, a[17] = a[19] = a[21] = a[23] = 1 - this._uvh * o, this.leftWidth = "undefined" != typeof e ? e : n, this.rightWidth = "undefined" != typeof r ? r : n, this.topHeight = "undefined" != typeof i ? i : n, this.bottomHeight = "undefined" != typeof o ? o : n
                        }
                        var n = 10,
                            s = t("./Plane");
                        r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                            width: {
                                get: function() {
                                    return this._width
                                },
                                set: function(t) {
                                    this._width = t, this.updateVerticalVertices()
                                }
                            },
                            height: {
                                get: function() {
                                    return this._height
                                },
                                set: function(t) {
                                    this._height = t, this.updateHorizontalVertices()
                                }
                            },
                            leftWidth: {
                                get: function() {
                                    return this._leftWidth
                                },
                                set: function(t) {
                                    this._leftWidth = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[2] = e[10] = e[18] = e[26] = this._uvw * t, i[2] = i[10] = i[18] = i[26] = t, this.dirty = !0
                                }
                            },
                            rightWidth: {
                                get: function() {
                                    return this._rightWidth
                                },
                                set: function(t) {
                                    this._rightWidth = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[4] = e[12] = e[20] = e[28] = 1 - this._uvw * t, i[4] = i[12] = i[20] = i[28] = this._width - t, this.dirty = !0
                                }
                            },
                            topHeight: {
                                get: function() {
                                    return this._topHeight
                                },
                                set: function(t) {
                                    this._topHeight = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[9] = e[11] = e[13] = e[15] = this._uvh * t, i[9] = i[11] = i[13] = i[15] = t, this.dirty = !0
                                }
                            },
                            bottomHeight: {
                                get: function() {
                                    return this._bottomHeight
                                },
                                set: function(t) {
                                    this._bottomHeight = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[17] = e[19] = e[21] = e[23] = 1 - this._uvh * t, i[17] = i[19] = i[21] = i[23] = this._height - t, this.dirty = !0
                                }
                            }
                        }), r.prototype.updateHorizontalVertices = function() {
                            var t = this.vertices;
                            t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, t[25] = t[27] = t[29] = t[31] = this._height
                        }, r.prototype.updateVerticalVertices = function() {
                            var t = this.vertices;
                            t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, t[6] = t[14] = t[22] = t[30] = this._width
                        }, r.prototype._renderCanvas = function(t) {
                            var e = t.context;
                            e.globalAlpha = this.worldAlpha;
                            var i = this.worldTransform,
                                r = t.resolution;
                            t.roundPixels ? e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r | 0, i.ty * r | 0) : e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r);
                            var n = this._texture.baseTexture,
                                s = n.source,
                                o = n.width,
                                a = n.height;
                            this.drawSegment(e, s, o, a, 0, 1, 10, 11), this.drawSegment(e, s, o, a, 2, 3, 12, 13), this.drawSegment(e, s, o, a, 4, 5, 14, 15), this.drawSegment(e, s, o, a, 8, 9, 18, 19), this.drawSegment(e, s, o, a, 10, 11, 20, 21), this.drawSegment(e, s, o, a, 12, 13, 22, 23), this.drawSegment(e, s, o, a, 16, 17, 26, 27), this.drawSegment(e, s, o, a, 18, 19, 28, 29), this.drawSegment(e, s, o, a, 20, 21, 30, 31)
                        }, r.prototype.drawSegment = function(t, e, i, r, n, s, o, a) {
                            var h = this.uvs,
                                l = this.vertices,
                                u = (h[o] - h[n]) * i,
                                c = (h[a] - h[s]) * r,
                                p = l[o] - l[n],
                                d = l[a] - l[s];
                            u < 1 && (u = 1), c < 1 && (c = 1), p < 1 && (p = 1), d < 1 && (d = 1), t.drawImage(e, h[n] * i, h[s] * r, u, c, l[n], l[s], p, d)
                        }
                    }, {
                        "./Plane": 154
                    }],
                    154: [function(t, e, i) {
                        function r(t, e, i) {
                            n.call(this, t), this._ready = !0, this.verticesX = e || 10, this.verticesY = i || 10, this.drawMode = n.DRAW_MODES.TRIANGLES, this.refresh()
                        }
                        var n = t("./Mesh");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function() {
                            var t = this.verticesX * this.verticesY,
                                e = [],
                                i = [],
                                r = [],
                                n = [],
                                s = this.texture,
                                o = this.verticesX - 1,
                                a = this.verticesY - 1,
                                h = 0,
                                l = s.width / o,
                                u = s.height / a;
                            for (h = 0; h < t; h++) {
                                var c = h % this.verticesX,
                                    p = h / this.verticesX | 0;
                                e.push(c * l, p * u), r.push(s._uvs.x0 + (s._uvs.x1 - s._uvs.x0) * (c / (this.verticesX - 1)), s._uvs.y0 + (s._uvs.y3 - s._uvs.y0) * (p / (this.verticesY - 1)))
                            }
                            var d = o * a;
                            for (h = 0; h < d; h++) {
                                var f = h % o,
                                    _ = h / o | 0,
                                    g = _ * this.verticesX + f,
                                    v = _ * this.verticesX + f + 1,
                                    y = (_ + 1) * this.verticesX + f,
                                    m = (_ + 1) * this.verticesX + f + 1;
                                n.push(g, v, y), n.push(v, m, y)
                            }
                            this.vertices = new Float32Array(e), this.uvs = new Float32Array(r), this.colors = new Float32Array(i), this.indices = new Uint16Array(n), this.indexDirty = !0
                        }, r.prototype._onTextureUpdate = function() {
                            n.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                        }
                    }, {
                        "./Mesh": 152
                    }],
                    155: [function(t, e, i) {
                        function r(t, e) {
                            n.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
                        }
                        var n = t("./Mesh"),
                            s = t("../core");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function() {
                            var t = this.points;
                            if (!(t.length < 1) && this._texture._uvs) {
                                var e = this.uvs,
                                    i = this.indices,
                                    r = this.colors,
                                    n = this._texture._uvs,
                                    o = new s.Point(n.x0, n.y0),
                                    a = new s.Point(n.x2 - n.x0, n.y2 - n.y0);
                                e[0] = 0 + o.x, e[1] = 0 + o.y, e[2] = 0 + o.x, e[3] = 1 * a.y + o.y, r[0] = 1, r[1] = 1, i[0] = 0, i[1] = 1;
                                for (var h, l, u, c = t.length, p = 1; p < c; p++) h = t[p], l = 4 * p, u = p / (c - 1), e[l] = u * a.x + o.x, e[l + 1] = 0 + o.y, e[l + 2] = u * a.x + o.x, e[l + 3] = 1 * a.y + o.y, l = 2 * p, r[l] = 1, r[l + 1] = 1, l = 2 * p, i[l] = l, i[l + 1] = l + 1;
                                this.dirty = !0, this.indexDirty = !0
                            }
                        }, r.prototype._onTextureUpdate = function() {
                            n.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                        }, r.prototype.updateTransform = function() {
                            var t = this.points;
                            if (!(t.length < 1)) {
                                for (var e, i, r, n, s, o, a = t[0], h = 0, l = 0, u = this.vertices, c = t.length, p = 0; p < c; p++) i = t[p], r = 4 * p, e = p < t.length - 1 ? t[p + 1] : i, l = -(e.x - a.x), h = e.y - a.y, n = 10 * (1 - p / (c - 1)), n > 1 && (n = 1), s = Math.sqrt(h * h + l * l), o = this._texture.height / 2, h /= s, l /= s, h *= o, l *= o, u[r] = i.x + h, u[r + 1] = i.y + l, u[r + 2] = i.x - h, u[r + 3] = i.y - l, a = i;
                                this.containerUpdateTransform()
                            }
                        }
                    }, {
                        "../core": 62,
                        "./Mesh": 152
                    }],
                    156: [function(t, e, i) {
                        e.exports = {
                            Mesh: t("./Mesh"),
                            Plane: t("./Plane"),
                            NineSlicePlane: t("./NineSlicePlane"),
                            Rope: t("./Rope"),
                            MeshShader: t("./webgl/MeshShader")
                        }
                    }, {
                        "./Mesh": 152,
                        "./NineSlicePlane": 153,
                        "./Plane": 154,
                        "./Rope": 155,
                        "./webgl/MeshShader": 157
                    }],
                    157: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "uniform float alpha;", "uniform vec3 tint;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);", "}"].join("\n"))
                        }
                        var n = t("../../core/Shader");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../core/Shader": 42
                    }],
                    158: [function(t, e, i) {
                        function r(t, e, i) {
                            n.Container.call(this), i = i || 15e3, t = t || 15e3;
                            var r = 16384;
                            i > r && (i = r), i > t && (i = t), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = i, this._glBuffers = [], this._bufferToUpdate = 0, this.interactiveChildren = !1, this.blendMode = n.BLEND_MODES.NORMAL, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e)
                        }
                        var n = t("../core");
                        r.prototype = Object.create(n.Container.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setProperties = function(t) {
                            t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
                        }, r.prototype.updateTransform = function() {
                            this.displayObjectUpdateTransform()
                        }, r.prototype.renderWebGL = function(t) {
                            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                                this.onChildrenChange(0)
                            }, this)), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
                        }, r.prototype.onChildrenChange = function(t) {
                            var e = Math.floor(t / this._batchSize);
                            e < this._bufferToUpdate && (this._bufferToUpdate = e)
                        }, r.prototype.renderCanvas = function(t) {
                            if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                                var e = t.context,
                                    i = this.worldTransform,
                                    r = !0,
                                    n = 0,
                                    s = 0,
                                    o = 0,
                                    a = 0,
                                    h = t.blendModes[this.blendMode];
                                h !== e.globalCompositeOperation && (e.globalCompositeOperation = h), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                                for (var l = 0; l < this.children.length; ++l) {
                                    var u = this.children[l];
                                    if (u.visible) {
                                        var c = u.texture.frame;
                                        if (e.globalAlpha = this.worldAlpha * u.alpha, u.rotation % (2 * Math.PI) === 0) r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx * t.resolution, i.ty * t.resolution), r = !1), n = u.anchor.x * (-c.width * u.scale.x) + u.position.x + .5, s = u.anchor.y * (-c.height * u.scale.y) + u.position.y + .5, o = c.width * u.scale.x, a = c.height * u.scale.y;
                                        else {
                                            r || (r = !0), u.displayObjectUpdateTransform();
                                            var p = u.worldTransform;
                                            t.roundPixels ? e.setTransform(p.a, p.b, p.c, p.d, p.tx * t.resolution | 0, p.ty * t.resolution | 0) : e.setTransform(p.a, p.b, p.c, p.d, p.tx * t.resolution, p.ty * t.resolution), n = u.anchor.x * -c.width + .5, s = u.anchor.y * -c.height + .5, o = c.width, a = c.height
                                        }
                                        var d = u.texture.baseTexture.resolution;
                                        e.drawImage(u.texture.baseTexture.source, c.x * d, c.y * d, c.width * d, c.height * d, n * d, s * d, o * d, a * d)
                                    }
                                }
                            }
                        }, r.prototype.destroy = function() {
                            if (n.Container.prototype.destroy.apply(this, arguments), this._buffers)
                                for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                            this._properties = null, this._buffers = null
                        }
                    }, {
                        "../core": 62
                    }],
                    159: [function(t, e, i) {
                        e.exports = {
                            ParticleContainer: t("./ParticleContainer"),
                            ParticleRenderer: t("./webgl/ParticleRenderer")
                        }
                    }, {
                        "./ParticleContainer": 158,
                        "./webgl/ParticleRenderer": 161
                    }],
                    160: [function(t, e, i) {
                        function r(t, e, i, r) {
                            this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                            for (var n = 0; n < e.length; n++) {
                                var s = e[n];
                                s = {
                                    attribute: s.attribute,
                                    size: s.size,
                                    uploadFunction: s.uploadFunction,
                                    offset: s.offset
                                }, i[n] ? this.dynamicProperties.push(s) : this.staticProperties.push(s)
                            }
                            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
                        }
                        var n = t("pixi-gl-core"),
                            s = t("../../core/utils/createIndicesForQuads");
                        r.prototype.constructor = r, e.exports = r, r.prototype.initBuffers = function() {
                            var t, e, i = this.gl,
                                r = 0;
                            for (this.indices = s(this.size), this.indexBuffer = n.GLBuffer.createIndexBuffer(i, this.indices, i.STATIC_DRAW), this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = r, r += e.size, this.dynamicStride += e.size;
                            this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = n.GLBuffer.createVertexBuffer(i, this.dynamicData, i.STREAM_DRAW);
                            var o = 0;
                            for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = o, o += e.size, this.staticStride += e.size;
                            for (this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = n.GLBuffer.createVertexBuffer(i, this.staticData, i.STATIC_DRAW), this.vao = new n.VertexArrayObject(i).addIndex(this.indexBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], this.vao.addAttribute(this.dynamicBuffer, e.attribute, i.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
                            for (t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], this.vao.addAttribute(this.staticBuffer, e.attribute, i.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
                        }, r.prototype.uploadDynamic = function(t, e, i) {
                            for (var r = 0; r < this.dynamicProperties.length; r++) {
                                var n = this.dynamicProperties[r];
                                n.uploadFunction(t, e, i, this.dynamicData, this.dynamicStride, n.offset)
                            }
                            this.dynamicBuffer.upload()
                        }, r.prototype.uploadStatic = function(t, e, i) {
                            for (var r = 0; r < this.staticProperties.length; r++) {
                                var n = this.staticProperties[r];
                                n.uploadFunction(t, e, i, this.staticData, this.staticStride, n.offset)
                            }
                            this.staticBuffer.upload()
                        }, r.prototype.bind = function() {
                            this.vao.bind()
                        }, r.prototype.destroy = function() {
                            this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy()
                        }
                    }, {
                        "../../core/utils/createIndicesForQuads": 114,
                        "pixi-gl-core": 12
                    }],
                    161: [function(t, e, i) {
                        function r(t) {
                            n.ObjectRenderer.call(this, t), this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new n.Matrix, this.CONTEXT_UID = 0
                        }
                        var n = t("../../core"),
                            s = t("./ParticleShader"),
                            o = t("./ParticleBuffer");
                        r.prototype = Object.create(n.ObjectRenderer.prototype), r.prototype.constructor = r, e.exports = r, n.WebGLRenderer.registerPlugin("particle", r), r.prototype.onContextChange = function() {
                            var t = this.renderer.gl;
                            this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new s(t), this.properties = [{
                                attribute: this.shader.attributes.aVertexPosition,
                                size: 2,
                                uploadFunction: this.uploadVertices,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aPositionCoord,
                                size: 2,
                                uploadFunction: this.uploadPosition,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aRotation,
                                size: 1,
                                uploadFunction: this.uploadRotation,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aTextureCoord,
                                size: 2,
                                uploadFunction: this.uploadUvs,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aColor,
                                size: 1,
                                uploadFunction: this.uploadAlpha,
                                offset: 0
                            }]
                        }, r.prototype.start = function() {
                            this.renderer.bindShader(this.shader)
                        }, r.prototype.render = function(t) {
                            var e = t.children,
                                i = e.length,
                                r = t._maxSize,
                                n = t._batchSize;
                            if (0 !== i) {
                                i > r && (i = r);
                                var s = t._glBuffers[this.renderer.CONTEXT_UID];
                                s || (s = t._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(t)), this.renderer.setBlendMode(t.blendMode);
                                var o = this.renderer.gl,
                                    a = t.worldTransform.copy(this.tempMatrix);
                                a.prepend(this.renderer._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = a.toArray(!0), this.shader.uniforms.uAlpha = t.worldAlpha;
                                var h = e[0]._texture.baseTexture;
                                this.renderer.bindTexture(h);
                                for (var l = 0, u = 0; l < i; l += n, u += 1) {
                                    var c = i - l;
                                    c > n && (c = n);
                                    var p = s[u];
                                    p.uploadDynamic(e, l, c), t._bufferToUpdate === u && (p.uploadStatic(e, l, c), t._bufferToUpdate = u + 1), p.vao.bind().draw(o.TRIANGLES, 6 * c).unbind()
                                }
                            }
                        }, r.prototype.generateBuffers = function(t) {
                            var e, i = this.renderer.gl,
                                r = [],
                                n = t._maxSize,
                                s = t._batchSize,
                                a = t._properties;
                            for (e = 0; e < n; e += s) r.push(new o(i, this.properties, a, s));
                            return r
                        }, r.prototype.uploadVertices = function(t, e, i, r, n, s) {
                            for (var o, a, h, l, u, c, p, d, f, _, g = 0; g < i; g++) o = t[e + g], a = o._texture, u = o.scale.x, c = o.scale.y, h = a.trim, l = a.orig, h ? (d = h.x - o.anchor.x * l.width, p = d + h.width, _ = h.y - o.anchor.y * l.height, f = _ + h.height) : (p = l.width * (1 - o.anchor.x), d = l.width * -o.anchor.x, f = l.height * (1 - o.anchor.y), _ = l.height * -o.anchor.y), r[s] = d * u, r[s + 1] = _ * c, r[s + n] = p * u, r[s + n + 1] = _ * c, r[s + 2 * n] = p * u, r[s + 2 * n + 1] = f * c, r[s + 3 * n] = d * u, r[s + 3 * n + 1] = f * c, s += 4 * n
                        }, r.prototype.uploadPosition = function(t, e, i, r, n, s) {
                            for (var o = 0; o < i; o++) {
                                var a = t[e + o].position;
                                r[s] = a.x, r[s + 1] = a.y, r[s + n] = a.x, r[s + n + 1] = a.y, r[s + 2 * n] = a.x, r[s + 2 * n + 1] = a.y, r[s + 3 * n] = a.x, r[s + 3 * n + 1] = a.y, s += 4 * n
                            }
                        }, r.prototype.uploadRotation = function(t, e, i, r, n, s) {
                            for (var o = 0; o < i; o++) {
                                var a = t[e + o].rotation;
                                r[s] = a, r[s + n] = a, r[s + 2 * n] = a, r[s + 3 * n] = a, s += 4 * n
                            }
                        }, r.prototype.uploadUvs = function(t, e, i, r, n, s) {
                            for (var o = 0; o < i; o++) {
                                var a = t[e + o]._texture._uvs;
                                a ? (r[s] = a.x0, r[s + 1] = a.y0, r[s + n] = a.x1, r[s + n + 1] = a.y1, r[s + 2 * n] = a.x2, r[s + 2 * n + 1] = a.y2, r[s + 3 * n] = a.x3, r[s + 3 * n + 1] = a.y3, s += 4 * n) : (r[s] = 0, r[s + 1] = 0, r[s + n] = 0, r[s + n + 1] = 0, r[s + 2 * n] = 0, r[s + 2 * n + 1] = 0, r[s + 3 * n] = 0, r[s + 3 * n + 1] = 0, s += 4 * n)
                            }
                        }, r.prototype.uploadAlpha = function(t, e, i, r, n, s) {
                            for (var o = 0; o < i; o++) {
                                var a = t[e + o].alpha;
                                r[s] = a, r[s + n] = a, r[s + 2 * n] = a, r[s + 3 * n] = a, s += 4 * n
                            }
                        }, r.prototype.destroy = function() {
                            this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), n.ObjectRenderer.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
                        }
                    }, {
                        "../../core": 62,
                        "./ParticleBuffer": 160,
                        "./ParticleShader": 162
                    }],
                    162: [function(t, e, i) {
                        function r(t) {
                            n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"));
                        }
                        var n = t("../../core/Shader");
                        r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
                    }, {
                        "../../core/Shader": 42
                    }],
                    163: [function(t, e, i) {
                        Math.sign || (Math.sign = function(t) {
                            return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                        })
                    }, {}],
                    164: [function(t, e, i) {
                        Object.assign || (Object.assign = t("object-assign"))
                    }, {
                        "object-assign": 5
                    }],
                    165: [function(t, e, i) {
                        t("./Object.assign"), t("./requestAnimationFrame"), t("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
                    }, {
                        "./Math.sign": 163,
                        "./Object.assign": 164,
                        "./requestAnimationFrame": 166
                    }],
                    166: [function(t, i, r) {
                        (function(t) {
                            if (Date.now && Date.prototype.getTime || (Date.now = function() {
                                    return (new Date).getTime()
                                }), !t.performance || !t.performance.now) {
                                var e = Date.now();
                                t.performance || (t.performance = {}), t.performance.now = function() {
                                    return Date.now() - e
                                }
                            }
                            for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], n = 0; n < r.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[r[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
                            t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
                                if ("function" != typeof t) throw new TypeError(t + "is not a function");
                                var e = Date.now(),
                                    r = 16 + i - e;
                                return r < 0 && (r = 0), i = e, setTimeout(function() {
                                    i = Date.now(), t(performance.now())
                                }, r)
                            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                                clearTimeout(t)
                            })
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    167: [function(t, e, i) {
                        function r() {}
                        var n = t("../../core");
                        r.prototype.constructor = r, e.exports = r, r.prototype.upload = function(t, e) {
                            "function" == typeof t && (e = t, t = null), e()
                        }, r.prototype.register = function() {
                            return this
                        }, r.prototype.add = function() {
                            return this
                        }, r.prototype.destroy = function() {}, n.CanvasRenderer.registerPlugin("prepare", r)
                    }, {
                        "../../core": 62
                    }],
                    168: [function(t, e, i) {
                        e.exports = {
                            webGL: t("./webgl/WebGLPrepare"),
                            canvas: t("./canvas/CanvasPrepare")
                        }
                    }, {
                        "./canvas/CanvasPrepare": 167,
                        "./webgl/WebGLPrepare": 169
                    }],
                    169: [function(t, e, i) {
                        function r(t) {
                            this.renderer = t, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.register(o, n).register(a, s)
                        }

                        function n(t, e) {
                            return e instanceof h.BaseTexture && (t.textureManager.updateTexture(e), !0)
                        }

                        function s(t, e) {
                            return e instanceof h.Graphics && (t.plugins.graphics.updateGraphics(e), !0)
                        }

                        function o(t, e) {
                            if (t instanceof h.BaseTexture) return e.indexOf(t) === -1 && e.push(t), !0;
                            if (t._texture && t._texture instanceof h.Texture) {
                                var i = t._texture.baseTexture;
                                return e.indexOf(i) === -1 && e.push(i), !0
                            }
                            return !1
                        }

                        function a(t, e) {
                            return t instanceof h.Graphics && (e.push(t), !0)
                        }
                        var h = t("../../core"),
                            l = h.ticker.shared;
                        r.UPLOADS_PER_FRAME = 4, r.prototype.constructor = r, e.exports = r, r.prototype.upload = function(t, e) {
                            "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (this.numLeft = r.UPLOADS_PER_FRAME, this.completes.push(e), this.ticking || (this.ticking = !0, l.add(this.tick, this))) : e()
                        }, r.prototype.tick = function() {
                            for (var t, e; this.queue.length && this.numLeft > 0;) {
                                var i = this.queue[0],
                                    n = !1;
                                for (t = 0, e = this.uploadHooks.length; t < e; t++)
                                    if (this.uploadHooks[t](this.renderer, i)) {
                                        this.numLeft--, this.queue.shift(), n = !0;
                                        break
                                    }
                                n || this.queue.shift()
                            }
                            if (this.queue.length) this.numLeft = r.UPLOADS_PER_FRAME;
                            else {
                                this.ticking = !1, l.remove(this.tick, this);
                                var s = this.completes.slice(0);
                                for (this.completes.length = 0, t = 0, e = s.length; t < e; t++) s[t]()
                            }
                        }, r.prototype.register = function(t, e) {
                            return t && this.addHooks.push(t), e && this.uploadHooks.push(e), this
                        }, r.prototype.add = function(t) {
                            var e, i;
                            for (e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++);
                            if (t instanceof h.Container)
                                for (e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
                            return this
                        }, r.prototype.destroy = function() {
                            this.ticking && l.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null
                        }, h.WebGLRenderer.registerPlugin("prepare", r)
                    }, {
                        "../../core": 62
                    }],
                    170: [function(t, i, r) {
                        (function(e) {
                            t("./polyfill");
                            var r = i.exports = t("./core");
                            r.extras = t("./extras"), r.filters = t("./filters"), r.interaction = t("./interaction"), r.loaders = t("./loaders"), r.mesh = t("./mesh"), r.particles = t("./particles"), r.accessibility = t("./accessibility"), r.extract = t("./extract"), r.prepare = t("./prepare"), r.loader = new r.loaders.Loader, Object.assign(r, t("./deprecation")), e.PIXI = r
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./accessibility": 41,
                        "./core": 62,
                        "./deprecation": 119,
                        "./extract": 121,
                        "./extras": 129,
                        "./filters": 140,
                        "./interaction": 145,
                        "./loaders": 148,
                        "./mesh": 156,
                        "./particles": 159,
                        "./polyfill": 165,
                        "./prepare": 168
                    }]
                }, {}, [170])(170)
            })
        }).call(e, function() {
            return this
        }())
    }])
}