import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260611184916407.BsguXq6B.png";
const _imports_1 = "/OS_Learning/assets/image-9.BG9mmdUF.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_6 调度.md","filePath":"进程与线程/4_6 调度.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_6 调度.md" };
const _hoisted_1 = { class: "note custom-block github-alert" };
const _hoisted_2 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.158ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.994ex",
  height: "3.447ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1011.8 3975.5 1523.5",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.158ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.993ex",
  height: "3.447ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1011.8 7511.1 1523.5",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.158ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "13.794ex",
  height: "3.447ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1011.8 6096.9 1523.5",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.158ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.993ex",
  height: "3.447ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1011.8 7511.1 1523.5",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.717ex",
  height: "1.593ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 759 704",
  "aria-hidden": "true"
};
const _hoisted_12 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_13 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "97.622ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 43149 1000",
  "aria-hidden": "true"
};
const _hoisted_14 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_15 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.896ex",
  height: "2.034ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -705 8352.1 899",
  "aria-hidden": "true"
};
const _hoisted_16 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_17 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "14.434ex",
  height: "1.971ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -677 6380 871",
  "aria-hidden": "true"
};
const _hoisted_18 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_19 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "12.098ex",
  height: "1.439ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 5347.4 636",
  "aria-hidden": "true"
};
const _hoisted_20 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_21 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "14.779ex",
  height: "1.984ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 6532.4 877",
  "aria-hidden": "true"
};
const _hoisted_22 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_23 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "7.691ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3399.5 840.8",
  "aria-hidden": "true"
};
const _hoisted_24 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_25 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.819ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "11.453ex",
  height: "6.354ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1562.5 5062.2 2808.5",
  "aria-hidden": "true"
};
const _hoisted_26 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_27 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.819ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "24.186ex",
  height: "6.354ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1562.5 10690.3 2808.5",
  "aria-hidden": "true"
};
const _hoisted_28 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_29 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.819ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "15.601ex",
  height: "6.354ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1562.5 6895.7 2808.5",
  "aria-hidden": "true"
};
const _hoisted_30 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_31 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.819ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "15.601ex",
  height: "6.354ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1562.5 6895.7 2808.5",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  const _component_Reveal = resolveComponent("Reveal");
  return openBlock(), createElementBlock("div", null, [
    _cache[49] || (_cache[49] = createStaticVNode("", 11)),
    createBaseVNode("div", _hoisted_1, [
      _cache[13] || (_cache[13] = createBaseVNode("p", { class: "custom-block-title" }, "NOTE", -1)),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode("吞吐量 = ", -1)),
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
              createBaseVNode("mfrac", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "作"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "业"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "数")
                ]),
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "总"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "执"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "行"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[3] || (_cache[3] = createTextVNode("，即单位时间 CPU 完成的作业数量", -1))
      ]),
      _cache[14] || (_cache[14] = createBaseVNode("p", null, "周转时间（Turnaround Time）= 完成时刻 - 提交时刻", -1)),
      createBaseVNode("p", null, [
        _cache[6] || (_cache[6] = createTextVNode("带权周转时间 = ", -1)),
        createBaseVNode("mjx-container", _hoisted_4, [
          (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[4] || (_cache[4] = [
            createStaticVNode("", 1)
          ])])),
          _cache[5] || (_cache[5] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mfrac", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "周"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "转"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间")
                ]),
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "服"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "务"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间"),
                  createBaseVNode("mi", null, "（"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "执"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "行"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间"),
                  createBaseVNode("mi", null, "）")
                ])
              ])
            ])
          ], -1))
        ])
      ]),
      createBaseVNode("p", null, [
        _cache[9] || (_cache[9] = createTextVNode("平均周转时间 = ", -1)),
        createBaseVNode("mjx-container", _hoisted_6, [
          (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[7] || (_cache[7] = [
            createStaticVNode("", 1)
          ])])),
          _cache[8] || (_cache[8] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mfrac", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "作"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "业"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "周"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "转"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "之"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "和")
                ]),
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "作"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "业"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "数")
                ])
              ])
            ])
          ], -1))
        ])
      ]),
      createBaseVNode("p", null, [
        _cache[12] || (_cache[12] = createTextVNode("平均带权周转时间 = ", -1)),
        createBaseVNode("mjx-container", _hoisted_8, [
          (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[10] || (_cache[10] = [
            createStaticVNode("", 1)
          ])])),
          _cache[11] || (_cache[11] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mfrac", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "作"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "业"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "带"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "权"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "周"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "转"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "时"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "间"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "之"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "和")
                ]),
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "作"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "业"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "数")
                ])
              ])
            ])
          ], -1))
        ])
      ])
    ]),
    _cache[50] || (_cache[50] = createStaticVNode("", 17)),
    createBaseVNode("p", null, [
      _cache[17] || (_cache[17] = createBaseVNode("strong", null, "核心：", -1)),
      _cache[18] || (_cache[18] = createTextVNode(" FCFS 和 SJF 的折衷，每次选择作业时（", -1)),
      _cache[19] || (_cache[19] = createBaseVNode("strong", null, "非抢占式", -1)),
      _cache[20] || (_cache[20] = createTextVNode("），计算相应比 ", -1)),
      createBaseVNode("mjx-container", _hoisted_10, [
        (openBlock(), createElementBlock("svg", _hoisted_11, [..._cache[15] || (_cache[15] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D445",
                  d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[16] || (_cache[16] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "R")
          ])
        ], -1))
      ]),
      _cache[21] || (_cache[21] = createTextVNode(" ，选最大进行", -1))
    ]),
    createBaseVNode("mjx-container", _hoisted_12, [
      (openBlock(), createElementBlock("svg", _hoisted_13, [..._cache[22] || (_cache[22] = [
        createStaticVNode("", 1)
      ])])),
      _cache[23] || (_cache[23] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "R"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mi", { mathvariant: "normal" }, "作"),
          createBaseVNode("mi", { mathvariant: "normal" }, "业"),
          createBaseVNode("mi", { mathvariant: "normal" }, "已"),
          createBaseVNode("mi", { mathvariant: "normal" }, "等"),
          createBaseVNode("mi", { mathvariant: "normal" }, "待"),
          createBaseVNode("mi", { mathvariant: "normal" }, "时"),
          createBaseVNode("mi", { mathvariant: "normal" }, "间"),
          createBaseVNode("mo", null, "+"),
          createBaseVNode("mi", { mathvariant: "normal" }, "作"),
          createBaseVNode("mi", { mathvariant: "normal" }, "业"),
          createBaseVNode("mi", { mathvariant: "normal" }, "的"),
          createBaseVNode("mi", { mathvariant: "normal" }, "服"),
          createBaseVNode("mi", { mathvariant: "normal" }, "务"),
          createBaseVNode("mi", { mathvariant: "normal" }, "时"),
          createBaseVNode("mi", { mathvariant: "normal" }, "间"),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
            createBaseVNode("mo", null, "/")
          ]),
          createBaseVNode("mi", { mathvariant: "normal" }, "作"),
          createBaseVNode("mi", { mathvariant: "normal" }, "业"),
          createBaseVNode("mi", { mathvariant: "normal" }, "的"),
          createBaseVNode("mi", { mathvariant: "normal" }, "服"),
          createBaseVNode("mi", { mathvariant: "normal" }, "务"),
          createBaseVNode("mi", { mathvariant: "normal" }, "时"),
          createBaseVNode("mi", { mathvariant: "normal" }, "间"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mn", null, "1"),
          createBaseVNode("mo", null, "+"),
          createBaseVNode("mi", { mathvariant: "normal" }, "作"),
          createBaseVNode("mi", { mathvariant: "normal" }, "业"),
          createBaseVNode("mi", { mathvariant: "normal" }, "已"),
          createBaseVNode("mi", { mathvariant: "normal" }, "等"),
          createBaseVNode("mi", { mathvariant: "normal" }, "待"),
          createBaseVNode("mi", { mathvariant: "normal" }, "时"),
          createBaseVNode("mi", { mathvariant: "normal" }, "间"),
          createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
            createBaseVNode("mo", null, "/")
          ]),
          createBaseVNode("mi", { mathvariant: "normal" }, "作"),
          createBaseVNode("mi", { mathvariant: "normal" }, "业"),
          createBaseVNode("mi", { mathvariant: "normal" }, "的"),
          createBaseVNode("mi", { mathvariant: "normal" }, "服"),
          createBaseVNode("mi", { mathvariant: "normal" }, "务"),
          createBaseVNode("mi", { mathvariant: "normal" }, "时"),
          createBaseVNode("mi", { mathvariant: "normal" }, "间")
        ])
      ], -1))
    ]),
    _cache[51] || (_cache[51] = createStaticVNode("", 37)),
    createBaseVNode("p", null, [
      _cache[34] || (_cache[34] = createTextVNode("假设一任务集 ", -1)),
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
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mo", null, "="),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mn", null, "1")
              ]),
              createBaseVNode("mo", null, ","),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mn", null, "2")
              ]),
              createBaseVNode("mo", null, ","),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mn", null, "3")
              ]),
              createBaseVNode("mo", null, ","),
              createBaseVNode("mo", null, "."),
              createBaseVNode("mo", null, "."),
              createBaseVNode("mo", null, "."),
              createBaseVNode("mo", null, ","),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mi", null, "n")
              ])
            ])
          ])
        ], -1))
      ]),
      _cache[35] || (_cache[35] = createTextVNode("，周期分别是 ", -1)),
      createBaseVNode("mjx-container", _hoisted_16, [
        (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[26] || (_cache[26] = [
          createStaticVNode("", 1)
        ])])),
        _cache[27] || (_cache[27] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "T"),
            createBaseVNode("mn", null, "1"),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mi", null, "T"),
            createBaseVNode("mn", null, "2"),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mi", null, "T"),
            createBaseVNode("mi", null, "n")
          ])
        ], -1))
      ]),
      _cache[36] || (_cache[36] = createTextVNode(" ，执行时间为 ", -1)),
      createBaseVNode("mjx-container", _hoisted_18, [
        (openBlock(), createElementBlock("svg", _hoisted_19, [..._cache[28] || (_cache[28] = [
          createStaticVNode("", 1)
        ])])),
        _cache[29] || (_cache[29] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mo", null, ","),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mn", null, "2")
            ]),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, ","),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "n")
            ])
          ])
        ], -1))
      ]),
      _cache[37] || (_cache[37] = createTextVNode("，截止周期(deadline)为 ", -1)),
      createBaseVNode("mjx-container", _hoisted_20, [
        (openBlock(), createElementBlock("svg", _hoisted_21, [..._cache[30] || (_cache[30] = [
          createStaticVNode("", 1)
        ])])),
        _cache[31] || (_cache[31] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "D"),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mo", null, ","),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "D"),
              createBaseVNode("mn", null, "2")
            ]),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, "."),
            createBaseVNode("mo", null, ","),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "D"),
              createBaseVNode("mi", null, "n")
            ])
          ])
        ], -1))
      ]),
      _cache[38] || (_cache[38] = createTextVNode("，通常 ", -1)),
      createBaseVNode("mjx-container", _hoisted_22, [
        (openBlock(), createElementBlock("svg", _hoisted_23, [..._cache[32] || (_cache[32] = [
          createStaticVNode("", 1)
        ])])),
        _cache[33] || (_cache[33] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "D"),
              createBaseVNode("mi", null, "i")
            ]),
            createBaseVNode("mo", null, "="),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "T"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[39] || (_cache[39] = createTextVNode("。CPU利用率：", -1))
    ]),
    createBaseVNode("mjx-container", _hoisted_24, [
      (openBlock(), createElementBlock("svg", _hoisted_25, [..._cache[40] || (_cache[40] = [
        createStaticVNode("", 1)
      ])])),
      _cache[41] || (_cache[41] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "U"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("munderover", null, [
            createBaseVNode("mo", {
              "data-mjx-texclass": "OP",
              movablelimits: "false"
            }, "∑"),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mi", null, "n")
          ]),
          createBaseVNode("mfrac", null, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "i")
            ]),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "T"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ])
      ], -1))
    ]),
    _cache[52] || (_cache[52] = createStaticVNode("", 9)),
    createBaseVNode("mjx-container", _hoisted_26, [
      (openBlock(), createElementBlock("svg", _hoisted_27, [..._cache[42] || (_cache[42] = [
        createStaticVNode("", 1)
      ])])),
      _cache[43] || (_cache[43] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "U"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("munderover", null, [
            createBaseVNode("mo", {
              "data-mjx-texclass": "OP",
              movablelimits: "false"
            }, "∑"),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mi", null, "n")
          ]),
          createBaseVNode("mfrac", null, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "i")
            ]),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "T"),
              createBaseVNode("mi", null, "i")
            ])
          ]),
          createBaseVNode("mo", null, "≤"),
          createBaseVNode("mi", null, "n"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msup", null, [
            createBaseVNode("mn", null, "2"),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("mfrac", null, [
                createBaseVNode("mn", null, "1"),
                createBaseVNode("mi", null, "n")
              ])
            ])
          ]),
          createBaseVNode("mo", null, "−"),
          createBaseVNode("mn", null, "1"),
          createBaseVNode("mo", { stretchy: "false" }, ")")
        ])
      ], -1))
    ]),
    _cache[53] || (_cache[53] = createBaseVNode("h3", {
      id: "最早截止时间优先算法-edf-earliest-deadline-first",
      tabindex: "-1"
    }, [
      createTextVNode("最早截止时间优先算法（EDF：Earliest Deadline First） "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#最早截止时间优先算法-edf-earliest-deadline-first",
        "aria-label": 'Permalink to "最早截止时间优先算法（EDF：Earliest Deadline First）"'
      }, "​")
    ], -1)),
    _cache[54] || (_cache[54] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "核心："),
      createTextVNode(" 绝对截止时间越早，其优先级越高（动态）")
    ], -1)),
    _cache[55] || (_cache[55] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "可调度的充要条件：")
    ], -1)),
    createBaseVNode("mjx-container", _hoisted_28, [
      (openBlock(), createElementBlock("svg", _hoisted_29, [..._cache[44] || (_cache[44] = [
        createStaticVNode("", 1)
      ])])),
      _cache[45] || (_cache[45] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "U"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("munderover", null, [
            createBaseVNode("mo", {
              "data-mjx-texclass": "OP",
              movablelimits: "false"
            }, "∑"),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mi", null, "n")
          ]),
          createBaseVNode("mfrac", null, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "i")
            ]),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "T"),
              createBaseVNode("mi", null, "i")
            ])
          ]),
          createBaseVNode("mo", null, "≤"),
          createBaseVNode("mn", null, "1")
        ])
      ], -1))
    ]),
    _cache[56] || (_cache[56] = createBaseVNode("h3", {
      id: "最低松弛度优先算法-llf-least-laxity-first",
      tabindex: "-1"
    }, [
      createTextVNode("最低松弛度优先算法 LLF（Least Laxity First） "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#最低松弛度优先算法-llf-least-laxity-first",
        "aria-label": 'Permalink to "最低松弛度优先算法 LLF（Least Laxity First）"'
      }, "​")
    ], -1)),
    _cache[57] || (_cache[57] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "核心："),
      createTextVNode(" 任务的紧急度越高，其优先级越高，并使之优先执行。具体来说，根据下面公式计算松弛度，根据优先级"),
      createBaseVNode("strong", null, "抢占式调度")
    ], -1)),
    _cache[58] || (_cache[58] = createBaseVNode("p", null, [
      createBaseVNode("code", null, "松弛度（Laxity）= 任务截止时间 - 本身剩余运行时间 - 当前时间")
    ], -1)),
    _cache[59] || (_cache[59] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "可调度的充要条件：")
    ], -1)),
    createBaseVNode("mjx-container", _hoisted_30, [
      (openBlock(), createElementBlock("svg", _hoisted_31, [..._cache[46] || (_cache[46] = [
        createStaticVNode("", 1)
      ])])),
      _cache[47] || (_cache[47] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "U"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("munderover", null, [
            createBaseVNode("mo", {
              "data-mjx-texclass": "OP",
              movablelimits: "false"
            }, "∑"),
            createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mn", null, "1")
            ]),
            createBaseVNode("mi", null, "n")
          ]),
          createBaseVNode("mfrac", null, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "i")
            ]),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "T"),
              createBaseVNode("mi", null, "i")
            ])
          ]),
          createBaseVNode("mo", null, "≤"),
          createBaseVNode("mn", null, "1")
        ])
      ], -1))
    ]),
    _cache[60] || (_cache[60] = createStaticVNode("", 11)),
    createVNode(_component_QuizSet, { collection: "process" }),
    _cache[61] || (_cache[61] = createStaticVNode("", 7)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[48] || (_cache[48] = [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "调度时序：")
        ], -1),
        createBaseVNode("table", { tabindex: "0" }, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "时间段"),
              createBaseVNode("th", null, "运行进程"),
              createBaseVNode("th", null, "事件")
            ])
          ]),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "0-2"),
              createBaseVNode("td", null, "P1"),
              createBaseVNode("td", null, "P1 运行 2，剩余 6，降级到 Q2")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "2-4"),
              createBaseVNode("td", null, "P2"),
              createBaseVNode("td", null, "P2 运行 2，剩余 2，降级到 Q2")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4-6"),
              createBaseVNode("td", null, "P3"),
              createBaseVNode("td", null, "P3 运行 2，剩余 3，降级到 Q2（P4 于 t=3 到达，进入 Q1）")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "6-8"),
              createBaseVNode("td", null, "P4"),
              createBaseVNode("td", null, "P4 运行 2，P4 完成！")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "8-14"),
              createBaseVNode("td", null, "P1"),
              createBaseVNode("td", null, "Q1 为空，调度 Q2。P1 运行剩余 6")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "14-16"),
              createBaseVNode("td", null, "P2"),
              createBaseVNode("td", null, "P2 运行剩余 2，完成")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "16-19"),
              createBaseVNode("td", null, "P3"),
              createBaseVNode("td", null, "P3 运行剩余 3，完成")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "周转时间（完成时间 - 到达时间）：")
        ], -1),
        createBaseVNode("table", { tabindex: "0" }, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "进程"),
              createBaseVNode("th", null, "完成时间"),
              createBaseVNode("th", null, "到达时间"),
              createBaseVNode("th", null, "周转时间")
            ])
          ]),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P1"),
              createBaseVNode("td", null, "14"),
              createBaseVNode("td", null, "0"),
              createBaseVNode("td", null, "14")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P2"),
              createBaseVNode("td", null, "16"),
              createBaseVNode("td", null, "1"),
              createBaseVNode("td", null, "15")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P3"),
              createBaseVNode("td", null, "19"),
              createBaseVNode("td", null, "2"),
              createBaseVNode("td", null, "17")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P4"),
              createBaseVNode("td", null, "8"),
              createBaseVNode("td", null, "3"),
              createBaseVNode("td", null, "5")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "平均周转时间 = (14 + 15 + 17 + 5) / 4 = 12.75")
        ], -1),
        createBaseVNode("p", null, "来源：2025 期末考试，七。", -1)
      ])]),
      _: 1
    })
  ]);
}
const _4_6___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_6___ as default
};
