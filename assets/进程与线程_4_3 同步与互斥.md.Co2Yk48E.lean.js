import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/61638ab0-da7b-4a89-9aa5-e89285dd8b28.B9ZVnaHA.png";
const _imports_1 = "/OS_Learning/assets/image-3.Dx1nhcPy.png";
const _imports_2 = "/OS_Learning/assets/image-4.DmEACEG0.png";
const _imports_3 = "/OS_Learning/assets/image-5.BkAKpT6s.png";
const _imports_4 = "/OS_Learning/assets/image-6.Dil8VALe.png";
const _imports_5 = "/OS_Learning/assets/image-7.D_i4bH5I.png";
const _imports_6 = "/OS_Learning/assets/image-8.BIhKHdGg.png";
const __pageData = JSON.parse('{"title":"同步与互斥","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_3 同步与互斥.md","filePath":"进程与线程/4_3 同步与互斥.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_3 同步与互斥.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.868ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2151.7 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.061ex",
  height: "1.023ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 469 452",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.041ex",
  height: "1.439ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 460 636",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_8 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.061ex",
  height: "1.023ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 469 452",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_10 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.061ex",
  height: "1.023ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 469 452",
  "aria-hidden": "true"
};
const _hoisted_11 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_12 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.312ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.209ex",
  height: "1.819ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -666 2302.6 804",
  "aria-hidden": "true"
};
const _hoisted_13 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_14 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.041ex",
  height: "1.439ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 460 636",
  "aria-hidden": "true"
};
const _hoisted_15 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_16 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "7.096ex",
  height: "1.946ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -666 3136.2 860",
  "aria-hidden": "true"
};
const _hoisted_17 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_18 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.127ex",
  height: "1.952ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -705 940 862.8",
  "aria-hidden": "true"
};
const _hoisted_19 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_20 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.556ex",
  height: "1.773ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -626 688 783.8",
  "aria-hidden": "true"
};
const _hoisted_21 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_22 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.127ex",
  height: "1.952ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -705 940 862.8",
  "aria-hidden": "true"
};
const _hoisted_23 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_24 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.556ex",
  height: "1.773ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -626 688 783.8",
  "aria-hidden": "true"
};
const _hoisted_25 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_26 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.916ex",
  height: "1.927ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 847 851.8",
  "aria-hidden": "true"
};
const _hoisted_27 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_28 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.127ex",
  height: "1.952ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -705 940 862.8",
  "aria-hidden": "true"
};
const _hoisted_29 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_30 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.916ex",
  height: "1.927ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 847 851.8",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[53] || (_cache[53] = createStaticVNode("", 61)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("信号量的定义：一个确定的二元组 ", -1)),
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createStaticVNode("", 1)
        ])])),
        _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mo", { stretchy: "false" }, "("),
            createBaseVNode("mi", null, "s"),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mi", null, "q"),
            createBaseVNode("mo", { stretchy: "false" }, ")")
          ])
        ], -1))
      ]),
      _cache[7] || (_cache[7] = createTextVNode(" ，其中 ", -1)),
      createBaseVNode("mjx-container", _hoisted_3, [
        (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[2] || (_cache[2] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D460",
                  d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "s")
          ])
        ], -1))
      ]),
      _cache[8] || (_cache[8] = createTextVNode(" 是一个具有非负初值的整型变量， ", -1)),
      createBaseVNode("mjx-container", _hoisted_5, [
        (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[4] || (_cache[4] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D45E",
                  d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[5] || (_cache[5] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "q")
          ])
        ], -1))
      ]),
      _cache[9] || (_cache[9] = createTextVNode(" 是一个初始状态为空的队列，当发出 P 操作时：", -1))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("mjx-container", _hoisted_7, [
          (openBlock(), createElementBlock("svg", _hoisted_8, [..._cache[10] || (_cache[10] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D460",
                    d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[11] || (_cache[11] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "s")
            ])
          ], -1))
        ]),
        _cache[20] || (_cache[20] = createTextVNode(" 表示可立即执行的进程的数量 ", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[14] || (_cache[14] = createTextVNode("若 ", -1)),
            createBaseVNode("mjx-container", _hoisted_9, [
              (openBlock(), createElementBlock("svg", _hoisted_10, [..._cache[12] || (_cache[12] = [
                createBaseVNode("g", {
                  stroke: "currentColor",
                  fill: "currentColor",
                  "stroke-width": "0",
                  transform: "scale(1,-1)"
                }, [
                  createBaseVNode("g", { "data-mml-node": "math" }, [
                    createBaseVNode("g", { "data-mml-node": "mi" }, [
                      createBaseVNode("path", {
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
                ], -1)
              ])])),
              _cache[13] || (_cache[13] = createBaseVNode("mjx-assistive-mml", {
                unselectable: "on",
                display: "inline",
                style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
              }, [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "s")
                ])
              ], -1))
            ]),
            _cache[15] || (_cache[15] = createTextVNode(" 为正，立即执行", -1))
          ]),
          createBaseVNode("li", null, [
            _cache[18] || (_cache[18] = createTextVNode("若 ", -1)),
            createBaseVNode("mjx-container", _hoisted_11, [
              (openBlock(), createElementBlock("svg", _hoisted_12, [..._cache[16] || (_cache[16] = [
                createStaticVNode("", 1)
              ])])),
              _cache[17] || (_cache[17] = createBaseVNode("mjx-assistive-mml", {
                unselectable: "on",
                display: "inline",
                style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
              }, [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mo", null, "≤"),
                  createBaseVNode("mn", null, "0")
                ])
              ], -1))
            ]),
            _cache[19] || (_cache[19] = createTextVNode(" ，阻塞发出 P 操作的进程被阻塞", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("mjx-container", _hoisted_13, [
          (openBlock(), createElementBlock("svg", _hoisted_14, [..._cache[21] || (_cache[21] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D45E",
                    d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[22] || (_cache[22] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "q")
            ])
          ], -1))
        ]),
        _cache[23] || (_cache[23] = createTextVNode(" 表示当前被阻塞的进程，初始为空，进程被阻塞时会被放入", -1))
      ])
    ]),
    _cache[54] || (_cache[54] = createBaseVNode("div", { class: "warning custom-block github-alert" }, [
      createBaseVNode("p", { class: "custom-block-title" }, "WARNING"),
      createBaseVNode("p", null, "在具体信号量实现中，P(s)有不同的实现方式。有的实现中，每调用一次P(s)，s的值均减1。而在有的实现中，调用P(s)时，如果s > 0，s 值减 1；如果s = 0, 则s值不变。在本课笔记中，采用前一种实现方式进行讲解。")
    ], -1)),
    _cache[55] || (_cache[55] = createBaseVNode("p", null, "信号量的分类：", -1)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[26] || (_cache[26] = createTextVNode("二元信号量（互斥，", -1)),
        createBaseVNode("mjx-container", _hoisted_15, [
          (openBlock(), createElementBlock("svg", _hoisted_16, [..._cache[24] || (_cache[24] = [
            createStaticVNode("", 1)
          ])])),
          _cache[25] || (_cache[25] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "s"),
              createBaseVNode("mo", null, "∈"),
              createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                createBaseVNode("mn", null, "0"),
                createBaseVNode("mo", null, ","),
                createBaseVNode("mn", null, "1")
              ])
            ])
          ], -1))
        ]),
        _cache[27] || (_cache[27] = createTextVNode("）", -1))
      ]),
      _cache[28] || (_cache[28] = createBaseVNode("li", null, "一般信号量（初值未可用物理资源总数，用于进程间的协作同步问题）", -1)),
      _cache[29] || (_cache[29] = createBaseVNode("li", null, "强信号量（采用 FIFO 释放被阻塞进程）", -1)),
      _cache[30] || (_cache[30] = createBaseVNode("li", null, "弱信号量（无规定移除顺序，可能会出现饥饿）", -1))
    ]),
    _cache[56] || (_cache[56] = createStaticVNode("", 11)),
    createBaseVNode("p", null, [
      _cache[45] || (_cache[45] = createTextVNode("基本思想：在AND型信号量集的基础上进行扩充，包括进程对信号量 ", -1)),
      createBaseVNode("mjx-container", _hoisted_17, [
        (openBlock(), createElementBlock("svg", _hoisted_18, [..._cache[31] || (_cache[31] = [
          createStaticVNode("", 1)
        ])])),
        _cache[32] || (_cache[32] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "S"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[46] || (_cache[46] = createTextVNode(" 的测试值为 ", -1)),
      createBaseVNode("mjx-container", _hoisted_19, [
        (openBlock(), createElementBlock("svg", _hoisted_20, [..._cache[33] || (_cache[33] = [
          createStaticVNode("", 1)
        ])])),
        _cache[34] || (_cache[34] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "t"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[47] || (_cache[47] = createTextVNode(" （即进程在信号量 ", -1)),
      createBaseVNode("mjx-container", _hoisted_21, [
        (openBlock(), createElementBlock("svg", _hoisted_22, [..._cache[35] || (_cache[35] = [
          createStaticVNode("", 1)
        ])])),
        _cache[36] || (_cache[36] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "S"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[48] || (_cache[48] = createTextVNode(" 不小于 ", -1)),
      createBaseVNode("mjx-container", _hoisted_23, [
        (openBlock(), createElementBlock("svg", _hoisted_24, [..._cache[37] || (_cache[37] = [
          createStaticVNode("", 1)
        ])])),
        _cache[38] || (_cache[38] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "t"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[49] || (_cache[49] = createTextVNode(" 时使用） 和占用值 ", -1)),
      createBaseVNode("mjx-container", _hoisted_25, [
        (openBlock(), createElementBlock("svg", _hoisted_26, [..._cache[39] || (_cache[39] = [
          createStaticVNode("", 1)
        ])])),
        _cache[40] || (_cache[40] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "d"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[50] || (_cache[50] = createTextVNode(" （即进程对信号量 ", -1)),
      createBaseVNode("mjx-container", _hoisted_27, [
        (openBlock(), createElementBlock("svg", _hoisted_28, [..._cache[41] || (_cache[41] = [
          createStaticVNode("", 1)
        ])])),
        _cache[42] || (_cache[42] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "S"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[51] || (_cache[51] = createTextVNode(" 使用时减去 ", -1)),
      createBaseVNode("mjx-container", _hoisted_29, [
        (openBlock(), createElementBlock("svg", _hoisted_30, [..._cache[43] || (_cache[43] = [
          createStaticVNode("", 1)
        ])])),
        _cache[44] || (_cache[44] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "d"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[52] || (_cache[52] = createTextVNode("）", -1))
    ]),
    _cache[57] || (_cache[57] = createStaticVNode("", 29)),
    createVNode(_component_QuizSet, {
      collection: "sync",
      title: "同步与互斥练习",
      description: "覆盖临界区准则、忙等待互斥、硬件原语、信号量、信号量集和管程。",
      "question-ids": [
        "sync-critical-section-01",
        "sync-critical-section-02",
        "sync-dekker-01",
        "sync-peterson-01",
        "sync-bakery-01",
        "sync-interrupt-disable-01",
        "sync-test-and-set-01",
        "sync-spinlock-01",
        "sync-priority-inversion-01",
        "sync-mutex-semaphore-01",
        "sync-semaphore-02",
        "sync-barrier-01",
        "sync-semaphore-set-01",
        "sync-condition-variable-01",
        "sync-monitor-01"
      ]
    })
  ]);
}
const _4_3______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_3______ as default
};
