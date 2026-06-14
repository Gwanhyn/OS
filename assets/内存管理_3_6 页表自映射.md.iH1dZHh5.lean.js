import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"页表自映射","description":"","frontmatter":{},"headers":[],"relativePath":"内存管理/3_6 页表自映射.md","filePath":"内存管理/3_6 页表自映射.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "内存管理/3_6 页表自映射.md" };
const _hoisted_1 = { class: "important custom-block github-alert" };
const _hoisted_2 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.237ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 2756.6 840.8",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.789ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3000.6 840.8",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.282ex",
  height: "2.213ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3660.8 978",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "15.662ex",
  height: "2.213ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 6922.7 978",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.02ex",
  height: "1.025ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 451 453",
  "aria-hidden": "true"
};
const _hoisted_12 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_13 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "17.314ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 7652.7 840.8",
  "aria-hidden": "true"
};
const _hoisted_14 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_15 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "30.075ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 13293.2 1000",
  "aria-hidden": "true"
};
const _hoisted_16 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_17 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "65.755ex",
  height: "2.364ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 29063.9 1045",
  "aria-hidden": "true"
};
const _hoisted_18 = { class: "important custom-block github-alert" };
const _hoisted_19 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_20 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "15.662ex",
  height: "2.213ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 6922.7 978",
  "aria-hidden": "true"
};
const _hoisted_21 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_22 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.667ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "15.662ex",
  height: "2.213ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 6922.7 978",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Quiz = resolveComponent("Quiz");
  const _component_MultiFillBlank = resolveComponent("MultiFillBlank");
  const _component_Reveal = resolveComponent("Reveal");
  return openBlock(), createElementBlock("div", null, [
    _cache[42] || (_cache[42] = createStaticVNode("", 7)),
    createBaseVNode("div", _hoisted_1, [
      _cache[9] || (_cache[9] = createBaseVNode("p", { class: "custom-block-title" }, "IMPORTANT", -1)),
      _cache[10] || (_cache[10] = createBaseVNode("p", null, null, -1)),
      _cache[11] || (_cache[11] = createBaseVNode("p", null, [
        createTextVNode("初学的时候，如果搞不清楚什么行为是 "),
        createBaseVNode("code", null, "MMU"),
        createTextVNode(" 做的，什么行为是 "),
        createBaseVNode("code", null, "OS"),
        createTextVNode(" 做的，就很容易把虚拟空间和物理空间混淆。")
      ], -1)),
      _cache[12] || (_cache[12] = createBaseVNode("p", null, "这里的目标不是改变普通地址的访存流程，而是让 OS 能够方便地用虚拟地址访问并修改页目录项、页表项。", -1)),
      _cache[13] || (_cache[13] = createBaseVNode("p", null, "在自映射机制里主要关心几个地址：", -1)),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createBaseVNode("mjx-container", _hoisted_2, [
            (openBlock(), createElementBlock("svg", _hoisted_3, [..._cache[0] || (_cache[0] = [
              createStaticVNode("", 1)
            ])])),
            _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("msub", null, [
                  createBaseVNode("mi", null, "T"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mi", null, "e")
                  ])
                ])
              ])
            ], -1))
          ]),
          _cache[2] || (_cache[2] = createTextVNode("：页表窗口的起始虚拟地址，页表窗口指的是所有的页表在虚拟空间中连续排列所占的区域", -1))
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("mjx-container", _hoisted_4, [
            (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[3] || (_cache[3] = [
              createStaticVNode("", 1)
            ])])),
            _cache[4] || (_cache[4] = createBaseVNode("mjx-assistive-mml", {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("msub", null, [
                  createBaseVNode("mi", null, "D"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mi", null, "e")
                  ])
                ])
              ])
            ], -1))
          ]),
          _cache[5] || (_cache[5] = createTextVNode("：页目录所在页的虚拟地址", -1))
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("mjx-container", _hoisted_6, [
            (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[6] || (_cache[6] = [
              createStaticVNode("", 1)
            ])])),
            _cache[7] || (_cache[7] = createBaseVNode("mjx-assistive-mml", {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "D"),
                createBaseVNode("msub", null, [
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mi", null, "e"),
                    createBaseVNode("mi", null, "l"),
                    createBaseVNode("mi", null, "f")
                  ])
                ])
              ])
            ], -1))
          ]),
          _cache[8] || (_cache[8] = createTextVNode("：的页目录项所在的虚拟地址", -1))
        ])
      ])
    ]),
    _cache[43] || (_cache[43] = createStaticVNode("", 10)),
    createBaseVNode("p", null, [
      _cache[18] || (_cache[18] = createTextVNode("假设 ", -1)),
      createBaseVNode("mjx-container", _hoisted_8, [
        (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[14] || (_cache[14] = [
          createStaticVNode("", 1)
        ])])),
        _cache[15] || (_cache[15] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "P"),
            createBaseVNode("mi", null, "D"),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "E"),
              createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                createBaseVNode("mi", null, "s"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "f"),
                createBaseVNode("mo", null, "−"),
                createBaseVNode("mi", null, "m"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "p"),
                createBaseVNode("mi", null, "p"),
                createBaseVNode("mi", null, "i"),
                createBaseVNode("mi", null, "n"),
                createBaseVNode("mi", null, "g")
              ])
            ])
          ])
        ], -1))
      ]),
      _cache[19] || (_cache[19] = createTextVNode(" 是第 ", -1)),
      createBaseVNode("mjx-container", _hoisted_10, [
        (openBlock(), createElementBlock("svg", _hoisted_11, [..._cache[16] || (_cache[16] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D45F",
                  d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[17] || (_cache[17] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "r")
          ])
        ], -1))
      ]),
      _cache[20] || (_cache[20] = createTextVNode(" 个页目录项：", -1))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[23] || (_cache[23] = createTextVNode("页表窗口起始地址：", -1)),
        createBaseVNode("mjx-container", _hoisted_12, [
          (openBlock(), createElementBlock("svg", _hoisted_13, [..._cache[21] || (_cache[21] = [
            createStaticVNode("", 1)
          ])])),
          _cache[22] || (_cache[22] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "T"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e")
                ])
              ]),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "22")
            ])
          ], -1))
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[26] || (_cache[26] = createTextVNode("页目录所在页地址：", -1)),
        createBaseVNode("mjx-container", _hoisted_14, [
          (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[24] || (_cache[24] = [
            createStaticVNode("", 1)
          ])])),
          _cache[25] || (_cache[25] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "D"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e")
                ])
              ]),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "22"),
              createBaseVNode("mo", { stretchy: "false" }, ")"),
              createBaseVNode("mo", {
                "data-mjx-texclass": "ORD",
                stretchy: "false"
              }, "|"),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "12"),
              createBaseVNode("mo", { stretchy: "false" }, ")")
            ])
          ], -1))
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[29] || (_cache[29] = createTextVNode("自映射 PDE 的地址：", -1)),
        createBaseVNode("mjx-container", _hoisted_16, [
          (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[27] || (_cache[27] = [
            createStaticVNode("", 1)
          ])])),
          _cache[28] || (_cache[28] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("mi", null, "D"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "E"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "m"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mi", null, "g")
                ])
              ]),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mi", null, "P"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "D"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e")
                ])
              ]),
              createBaseVNode("mo", null, "+"),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "×"),
              createBaseVNode("mn", null, "4"),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "22"),
              createBaseVNode("mo", { stretchy: "false" }, ")"),
              createBaseVNode("mo", {
                "data-mjx-texclass": "ORD",
                stretchy: "false"
              }, "|"),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "12"),
              createBaseVNode("mo", { stretchy: "false" }, ")"),
              createBaseVNode("mo", {
                "data-mjx-texclass": "ORD",
                stretchy: "false"
              }, "|"),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "r"),
              createBaseVNode("mo", null, "<<"),
              createBaseVNode("mn", null, "2"),
              createBaseVNode("mo", { stretchy: "false" }, ")")
            ])
          ], -1))
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_18, [
      _cache[39] || (_cache[39] = createBaseVNode("p", { class: "custom-block-title" }, "分析", -1)),
      _cache[40] || (_cache[40] = createBaseVNode("p", null, "先记住一句话：自映射页目录项在页目录中的相对位置，相当于页目录页在整个页表窗口的相对位置，相当于页表窗口在整个虚拟内存空间的相对位置", -1)),
      _cache[41] || (_cache[41] = createBaseVNode("p", null, "前提：页表窗口是 4MB 对齐，是 OS 可决定，具体原因在理解了流程后其义自见", -1)),
      createBaseVNode("p", null, [
        _cache[34] || (_cache[34] = createTextVNode("重点看如何找页目录： 页表窗口 4MB 对齐 → ", -1)),
        _cache[35] || (_cache[35] = createBaseVNode("code", null, "[31:22]", -1)),
        _cache[36] || (_cache[36] = createTextVNode(" 相同 → 页表窗口内的任意虚拟地址（当然也包括页目录） 都是第 r 个 4MB 中 → MMU 找到第 r 个页目录项（", -1)),
        createBaseVNode("mjx-container", _hoisted_19, [
          (openBlock(), createElementBlock("svg", _hoisted_20, [..._cache[30] || (_cache[30] = [
            createStaticVNode("", 1)
          ])])),
          _cache[31] || (_cache[31] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("mi", null, "D"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "E"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "m"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mi", null, "g")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[37] || (_cache[37] = createTextVNode("），读到页目录物理页框 对于其他普通页表页，下一步正常由 MMU 读取即可 对于页目录项 → 页目录页是整个页表窗口的第 r 个页表页 → 第 r 个“页表”的第 r 个“页表项”正是 ", -1)),
        createBaseVNode("mjx-container", _hoisted_21, [
          (openBlock(), createElementBlock("svg", _hoisted_22, [..._cache[32] || (_cache[32] = [
            createStaticVNode("", 1)
          ])])),
          _cache[33] || (_cache[33] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("mi", null, "D"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "E"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "m"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "p"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mi", null, "g")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[38] || (_cache[38] = createTextVNode(" ! → 读取到的物理页框是页目录页框 → 根据 offset 可访问到相应页目录项", -1))
      ])
    ]),
    _cache[44] || (_cache[44] = createStaticVNode("", 11)),
    createVNode(_component_Reveal, { title: "练习题" }, {
      default: withCtx(() => [
        createVNode(_component_Quiz, {
          collection: "memory",
          "question-id": "memory-self-map-01"
        }),
        createVNode(_component_Quiz, {
          collection: "memory",
          "question-id": "memory-self-map-02"
        }),
        createVNode(_component_MultiFillBlank, {
          id: "memory-self-map-pd-base",
          question: "32 位两级页表中，4 KiB 页、每项 4 Byte。若页表窗口起始虚拟地址 PT_base = 0xD0000000，请分别填写 PD_base 和 PDE_self-mapping 的虚拟地址。",
          items: [
            { label: "PD_base", answer: "0xD0340000", hint: "页目录页是页表窗口中的第 r 个页表页" },
            { label: "PDE_self-mapping", answer: "0xD0340D00", hint: "它是页目录页中的第 r 个页目录项" }
          ],
          explanation: "PT_base = r << 22，所以 r = 0xD0000000 >> 22 = 0x340。PD_base = PT_base | (r << 12) = 0xD0340000。PDE_self-mapping 是页目录中第 r 项的虚拟地址，所以 PDE_self = PD_base + r * 4 = 0xD0340D00。"
        }),
        createVNode(_component_MultiFillBlank, {
          id: "memory-self-map-sv39",
          question: "Sv39 中虚拟地址格式为 VPN[2]、VPN[1]、VPN[0]、offset，页大小 4 KiB，页表项 8 Byte。若选择根页表第 r = 300 = 0x12C 项作为自映射项，给定目标虚拟地址索引 VPN[2]=17、VPN[1]=42、VPN[0]=5，请分别填写各级页表窗口基址和目标 PTE 地址。",
          items: [
            { label: "L0 页表窗口基址", answer: "0xFFFFFFCB00000000", hint: "VA(r, 0, 0, 0)" },
            { label: "L1 页表窗口基址", answer: "0xFFFFFFCB25800000", hint: "VA(r, r, 0, 0)" },
            { label: "L2 根表基址", answer: "0xFFFFFFCB2592C000", hint: "VA(r, r, r, 0)" },
            { label: "目标 PTE 地址", answer: "0xFFFFFFCB0222A028", hint: "VA(r, VPN[2], VPN[1], VPN[0] * 8)" }
          ],
          explanation: "Sv39 每级索引 9 位，每个页表页有 512 项。记 VA(a,b,c,off)=sign_extend_64((a<<30)|(b<<21)|(c<<12)|off, 39)。自映射后：L0 页表窗口基址为 VA(r,0,0,0)，L1 页表窗口基址为 VA(r,r,0,0)，L2 根表基址为 VA(r,r,r,0)。目标虚拟地址所在页的 PTE 地址为 VA(r, VPN[2], VPN[1], VPN[0] * 8)。因为 r=0x12C 的最高索引位为 1，Sv39 需要把 bit 38 符号扩展到 64 位，所以得到这些高半区地址。"
        })
      ]),
      _: 1
    })
  ]);
}
const _3_6______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3_6______ as default
};
