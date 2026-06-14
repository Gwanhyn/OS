import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"死锁问题(Deadlock)","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_7 死锁.md","filePath":"进程与线程/4_7 死锁.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_7 死锁.md" };
const _hoisted_1 = { class: "note custom-block github-alert" };
const _hoisted_2 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.192ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 969 840.8",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.666ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.789ex",
  height: "2.363ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 3884.9 1044.2",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.357ex",
  height: "1.025ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 600 453",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.986ex",
  height: "1.025ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 878 453",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "12.979ex",
  height: "1.977ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 5736.5 873.8",
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
  width: "8.666ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3830.2 840.8",
  "aria-hidden": "true"
};
const _hoisted_14 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_15 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "14.168ex",
  height: "1.977ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 6262.2 873.8",
  "aria-hidden": "true"
};
const _hoisted_16 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_17 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "9.091ex",
  height: "1.927ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 4018.2 851.8",
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
  width: "8.778ex",
  height: "1.984ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3880 877",
  "aria-hidden": "true"
};
const _hoisted_20 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_21 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.192ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 969 840.8",
  "aria-hidden": "true"
};
const _hoisted_22 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_23 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "17.829ex",
  height: "2.009ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 7880.5 888",
  "aria-hidden": "true"
};
const _hoisted_24 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_25 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.137ex",
  height: "2.059ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 9342.5 910",
  "aria-hidden": "true"
};
const _hoisted_26 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_27 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "33.873ex",
  height: "2.059ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 14972 910",
  "aria-hidden": "true"
};
const _hoisted_28 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_29 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "35.932ex",
  height: "2.059ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 15882 910",
  "aria-hidden": "true"
};
const _hoisted_30 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_31 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "27.258ex",
  height: "2.009ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 12047.9 888",
  "aria-hidden": "true"
};
const _hoisted_32 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_33 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.192ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 969 840.8",
  "aria-hidden": "true"
};
const _hoisted_34 = { class: "note custom-block github-alert" };
const _hoisted_35 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_36 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.393ex",
  height: "1.977ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 8129.5 873.8",
  "aria-hidden": "true"
};
const _hoisted_37 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_38 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "45.337ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 20039 1000",
  "aria-hidden": "true"
};
const _hoisted_39 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_40 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.717ex",
  height: "1.593ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 759 704",
  "aria-hidden": "true"
};
const _hoisted_41 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_42 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.699ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 751 683",
  "aria-hidden": "true"
};
const _hoisted_43 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_44 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.194ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3621.6 765",
  "aria-hidden": "true"
};
const _hoisted_45 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_46 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.717ex",
  height: "1.593ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 759 704",
  "aria-hidden": "true"
};
const _hoisted_47 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_48 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.699ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 751 683",
  "aria-hidden": "true"
};
const _hoisted_49 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_50 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.194ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 3621.6 765",
  "aria-hidden": "true"
};
const _hoisted_51 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_52 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.699ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 751 683",
  "aria-hidden": "true"
};
const _hoisted_53 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_54 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.048ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.717ex",
  height: "1.593ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 759 704",
  "aria-hidden": "true"
};
const _hoisted_55 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_56 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.192ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 969 840.8",
  "aria-hidden": "true"
};
const _hoisted_57 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_58 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.192ex",
  height: "1.902ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 969 840.8",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  const _component_Reveal = resolveComponent("Reveal");
  return openBlock(), createElementBlock("div", null, [
    _cache[109] || (_cache[109] = createStaticVNode("", 19)),
    createBaseVNode("div", _hoisted_1, [
      _cache[8] || (_cache[8] = createBaseVNode("p", { class: "custom-block-title" }, "NOTE", -1)),
      createBaseVNode("p", null, [
        _cache[4] || (_cache[4] = createBaseVNode("strong", null, "安全序列：", -1)),
        _cache[5] || (_cache[5] = createTextVNode(" 一个序列是安全的，是指对于每个进程 ", -1)),
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
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[6] || (_cache[6] = createTextVNode(" ，它所需要的资源能被当前系统可用资源加上所有小编号进程 ", -1)),
        createBaseVNode("mjx-container", _hoisted_4, [
          (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[2] || (_cache[2] = [
            createStaticVNode("", 1)
          ])])),
          _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "j")
              ]),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "j"),
              createBaseVNode("mo", null, "<"),
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mo", { stretchy: "false" }, ")")
            ])
          ], -1))
        ]),
        _cache[7] || (_cache[7] = createTextVNode(" 占有资源之和满足", -1))
      ]),
      _cache[9] || (_cache[9] = createBaseVNode("p", null, "若系统不存在安全序列，则是不安全的", -1))
    ]),
    _cache[110] || (_cache[110] = createBaseVNode("h4", {
      id: "银行家算法",
      tabindex: "-1"
    }, [
      createTextVNode("银行家算法 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#银行家算法",
        "aria-label": 'Permalink to "银行家算法"'
      }, "​")
    ], -1)),
    _cache[111] || (_cache[111] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "背景："),
      createTextVNode(" 一个银行家把他的固定资金（capital）贷给若干顾客。只要不出现一个顾客借走所有资金后还不够，银行家的资金应是安全的。银行家需一个算法保证借出去的资金"),
      createBaseVNode("strong", null, "在有限时间内可收回"),
      createTextVNode("。")
    ], -1)),
    _cache[112] || (_cache[112] = createBaseVNode("p", null, "假定顾客借贷可分成若干次进行，并在第一次借款时能说明最大借款额度。", -1)),
    createBaseVNode("p", null, [
      _cache[14] || (_cache[14] = createTextVNode("设 ", -1)),
      createBaseVNode("mjx-container", _hoisted_6, [
        (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[10] || (_cache[10] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D45B",
                  d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
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
            createBaseVNode("mi", null, "n")
          ])
        ], -1))
      ]),
      _cache[15] || (_cache[15] = createTextVNode(" 为进程数量，", -1)),
      createBaseVNode("mjx-container", _hoisted_8, [
        (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[12] || (_cache[12] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D45A",
                  d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
            createBaseVNode("mi", null, "m")
          ])
        ], -1))
      ]),
      _cache[16] || (_cache[16] = createTextVNode(" 为资源类型数量，定义如下矩阵：", -1))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[19] || (_cache[19] = createTextVNode("可利用资源向量 ", -1)),
        createBaseVNode("mjx-container", _hoisted_10, [
          (openBlock(), createElementBlock("svg", _hoisted_11, [..._cache[17] || (_cache[17] = [
            createStaticVNode("", 1)
          ])])),
          _cache[18] || (_cache[18] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "A"),
              createBaseVNode("mi", null, "v"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("mi", null, "b"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "m")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[20] || (_cache[20] = createTextVNode(" ：其中每一个元素代表一类可利用的资源数目", -1))
      ]),
      createBaseVNode("li", null, [
        _cache[23] || (_cache[23] = createTextVNode("最大需求矩阵 ", -1)),
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
              createBaseVNode("mi", null, "M"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "x"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "m")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[24] || (_cache[24] = createTextVNode(" ：定义了系统中n个进程中的每一个进程对m类资源的最大需求", -1))
      ]),
      createBaseVNode("li", null, [
        _cache[27] || (_cache[27] = createTextVNode("分配矩阵 ", -1)),
        createBaseVNode("mjx-container", _hoisted_14, [
          (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[25] || (_cache[25] = [
            createStaticVNode("", 1)
          ])])),
          _cache[26] || (_cache[26] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "A"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("mi", null, "o"),
              createBaseVNode("mi", null, "c"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("mi", null, "t"),
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mi", null, "o"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "n"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "m")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[28] || (_cache[28] = createTextVNode(" ：定义了系统中每一类资源当前已分配给每一进程的资源数。", -1))
      ]),
      createBaseVNode("li", null, [
        _cache[31] || (_cache[31] = createTextVNode("需求矩阵 ", -1)),
        createBaseVNode("mjx-container", _hoisted_16, [
          (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[29] || (_cache[29] = [
            createStaticVNode("", 1)
          ])])),
          _cache[30] || (_cache[30] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "N"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "d"),
                createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "m")
                ])
              ])
            ])
          ], -1))
        ]),
        _cache[32] || (_cache[32] = createTextVNode(" ：表示每一个进程尚需的各类资源数。", -1))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[37] || (_cache[37] = createTextVNode("设 ", -1)),
      createBaseVNode("mjx-container", _hoisted_18, [
        (openBlock(), createElementBlock("svg", _hoisted_19, [..._cache[33] || (_cache[33] = [
          createStaticVNode("", 1)
        ])])),
        _cache[34] || (_cache[34] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "R"),
            createBaseVNode("mi", null, "e"),
            createBaseVNode("mi", null, "q"),
            createBaseVNode("mi", null, "u"),
            createBaseVNode("mi", null, "e"),
            createBaseVNode("mi", null, "s"),
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "t"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[38] || (_cache[38] = createTextVNode(" 是进程 ", -1)),
      createBaseVNode("mjx-container", _hoisted_20, [
        (openBlock(), createElementBlock("svg", _hoisted_21, [..._cache[35] || (_cache[35] = [
          createStaticVNode("", 1)
        ])])),
        _cache[36] || (_cache[36] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msub", null, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("mi", null, "i")
            ])
          ])
        ], -1))
      ]),
      _cache[39] || (_cache[39] = createTextVNode(" 的请求向量：", -1))
    ]),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _cache[42] || (_cache[42] = createTextVNode("若 ", -1)),
        createBaseVNode("mjx-container", _hoisted_22, [
          (openBlock(), createElementBlock("svg", _hoisted_23, [..._cache[40] || (_cache[40] = [
            createStaticVNode("", 1)
          ])])),
          _cache[41] || (_cache[41] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "q"),
              createBaseVNode("mi", null, "u"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "s"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mi", null, "i")
              ]),
              createBaseVNode("mo", null, "≤"),
              createBaseVNode("mi", null, "N"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "d"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[43] || (_cache[43] = createTextVNode(" ，则转向步骤 2 ，否则认为出错", -1))
      ]),
      createBaseVNode("li", null, [
        _cache[46] || (_cache[46] = createTextVNode("若 ", -1)),
        createBaseVNode("mjx-container", _hoisted_24, [
          (openBlock(), createElementBlock("svg", _hoisted_25, [..._cache[44] || (_cache[44] = [
            createStaticVNode("", 1)
          ])])),
          _cache[45] || (_cache[45] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "q"),
              createBaseVNode("mi", null, "u"),
              createBaseVNode("mi", null, "e"),
              createBaseVNode("mi", null, "s"),
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mi", null, "i")
              ]),
              createBaseVNode("mo", null, "≤"),
              createBaseVNode("mi", null, "A"),
              createBaseVNode("mi", null, "v"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("mi", null, "i"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("mi", null, "a"),
              createBaseVNode("mi", null, "b"),
              createBaseVNode("mi", null, "l"),
              createBaseVNode("mi", null, "e")
            ])
          ], -1))
        ]),
        _cache[47] || (_cache[47] = createTextVNode(" ，则转向步骤 3 ，否则等待", -1))
      ]),
      createBaseVNode("li", null, [
        _cache[57] || (_cache[57] = createTextVNode("预估分配后的情况，即： ", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("mjx-container", _hoisted_26, [
              (openBlock(), createElementBlock("svg", _hoisted_27, [..._cache[48] || (_cache[48] = [
                createStaticVNode("", 1)
              ])])),
              _cache[49] || (_cache[49] = createBaseVNode("mjx-assistive-mml", {
                unselectable: "on",
                display: "inline",
                style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
              }, [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "A"),
                  createBaseVNode("mi", null, "v"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mo", null, ":="),
                  createBaseVNode("mi", null, "A"),
                  createBaseVNode("mi", null, "v"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "R"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "q"),
                  createBaseVNode("mi", null, "u"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "i")
                  ])
                ])
              ], -1))
            ]),
            _cache[50] || (_cache[50] = createTextVNode(";", -1))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("mjx-container", _hoisted_28, [
              (openBlock(), createElementBlock("svg", _hoisted_29, [..._cache[51] || (_cache[51] = [
                createStaticVNode("", 1)
              ])])),
              _cache[52] || (_cache[52] = createBaseVNode("mjx-assistive-mml", {
                unselectable: "on",
                display: "inline",
                style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
              }, [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "A"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "o"),
                  createBaseVNode("mi", null, "c"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "o"),
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mo", null, ":="),
                  createBaseVNode("mi", null, "A"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "l"),
                  createBaseVNode("mi", null, "o"),
                  createBaseVNode("mi", null, "c"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mi", null, "o"),
                  createBaseVNode("mi", null, "n"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "R"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "q"),
                  createBaseVNode("mi", null, "u"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "i")
                  ])
                ])
              ], -1))
            ]),
            _cache[53] || (_cache[53] = createTextVNode(";", -1))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("mjx-container", _hoisted_30, [
              (openBlock(), createElementBlock("svg", _hoisted_31, [..._cache[54] || (_cache[54] = [
                createStaticVNode("", 1)
              ])])),
              _cache[55] || (_cache[55] = createBaseVNode("mjx-assistive-mml", {
                unselectable: "on",
                display: "inline",
                style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
              }, [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "i")
                  ]),
                  createBaseVNode("mo", null, ":="),
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "i")
                  ]),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "R"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "q"),
                  createBaseVNode("mi", null, "u"),
                  createBaseVNode("mi", null, "e"),
                  createBaseVNode("mi", null, "s"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "i")
                  ])
                ])
              ], -1))
            ]),
            _cache[56] || (_cache[56] = createTextVNode(";", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[60] || (_cache[60] = createTextVNode("执行安全性算法判断，若安全才分配，否则让 ", -1)),
        createBaseVNode("mjx-container", _hoisted_32, [
          (openBlock(), createElementBlock("svg", _hoisted_33, [..._cache[58] || (_cache[58] = [
            createStaticVNode("", 1)
          ])])),
          _cache[59] || (_cache[59] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[61] || (_cache[61] = createTextVNode(" 等待", -1))
      ])
    ]),
    createBaseVNode("div", _hoisted_34, [
      _cache[72] || (_cache[72] = createBaseVNode("p", { class: "custom-block-title" }, "NOTE", -1)),
      _cache[73] || (_cache[73] = createBaseVNode("p", null, [
        createBaseVNode("strong", null, "安全性算法：")
      ], -1)),
      createBaseVNode("ol", null, [
        _cache[70] || (_cache[70] = createBaseVNode("li", null, "初始化：Finish[i]=false;", -1)),
        createBaseVNode("li", null, [
          _cache[64] || (_cache[64] = createTextVNode("可分配：找一个进程满足 Finish[i]=false; ", -1)),
          createBaseVNode("mjx-container", _hoisted_35, [
            (openBlock(), createElementBlock("svg", _hoisted_36, [..._cache[62] || (_cache[62] = [
              createStaticVNode("", 1)
            ])])),
            _cache[63] || (_cache[63] = createBaseVNode("mjx-assistive-mml", {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "N"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("msub", null, [
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "i")
                ]),
                createBaseVNode("mo", null, "≤"),
                createBaseVNode("mi", null, "A"),
                createBaseVNode("mi", null, "v"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "i"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "b"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "e")
              ])
            ], -1))
          ]),
          _cache[65] || (_cache[65] = createTextVNode(" ，若满足则执行 3 ，否则执行 4", -1))
        ]),
        createBaseVNode("li", null, [
          _cache[68] || (_cache[68] = createTextVNode("假设分配后：", -1)),
          createBaseVNode("mjx-container", _hoisted_37, [
            (openBlock(), createElementBlock("svg", _hoisted_38, [..._cache[66] || (_cache[66] = [
              createStaticVNode("", 1)
            ])])),
            _cache[67] || (_cache[67] = createBaseVNode("mjx-assistive-mml", {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "A"),
                createBaseVNode("mi", null, "v"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "i"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "b"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mo", { stretchy: "false" }, "("),
                createBaseVNode("mi", null, "n"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mi", null, "w"),
                createBaseVNode("mo", { stretchy: "false" }, ")"),
                createBaseVNode("mo", null, "="),
                createBaseVNode("mi", null, "A"),
                createBaseVNode("mi", null, "v"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "i"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "b"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "e"),
                createBaseVNode("mo", { stretchy: "false" }, "("),
                createBaseVNode("mi", null, "o"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "d"),
                createBaseVNode("mo", { stretchy: "false" }, ")"),
                createBaseVNode("mo", null, "+"),
                createBaseVNode("mi", null, "A"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "l"),
                createBaseVNode("mi", null, "o"),
                createBaseVNode("mi", null, "c"),
                createBaseVNode("mi", null, "a"),
                createBaseVNode("mi", null, "t"),
                createBaseVNode("mi", null, "i"),
                createBaseVNode("mi", null, "o"),
                createBaseVNode("mi", null, "n")
              ])
            ], -1))
          ]),
          _cache[69] || (_cache[69] = createTextVNode(",Finish[i]=true，执行 2", -1))
        ]),
        _cache[71] || (_cache[71] = createBaseVNode("li", null, "若所有进程 Finish[i]=true ，则安全；否则不安全", -1))
      ])
    ]),
    _cache[113] || (_cache[113] = createStaticVNode("", 6)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[78] || (_cache[78] = createTextVNode("两类节点：资源 ", -1)),
        createBaseVNode("mjx-container", _hoisted_39, [
          (openBlock(), createElementBlock("svg", _hoisted_40, [..._cache[74] || (_cache[74] = [
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
          _cache[75] || (_cache[75] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R")
            ])
          ], -1))
        ]),
        _cache[79] || (_cache[79] = createTextVNode(" 和进程 ", -1)),
        createBaseVNode("mjx-container", _hoisted_41, [
          (openBlock(), createElementBlock("svg", _hoisted_42, [..._cache[76] || (_cache[76] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D443",
                    d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[77] || (_cache[77] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P")
            ])
          ], -1))
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[92] || (_cache[92] = createTextVNode("边：", -1)),
        createBaseVNode("mjx-container", _hoisted_43, [
          (openBlock(), createElementBlock("svg", _hoisted_44, [..._cache[80] || (_cache[80] = [
            createStaticVNode("", 1)
          ])])),
          _cache[81] || (_cache[81] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R"),
              createBaseVNode("mo", null, "−"),
              createBaseVNode("mo", null, ">"),
              createBaseVNode("mi", null, "P")
            ])
          ], -1))
        ]),
        _cache[93] || (_cache[93] = createTextVNode(" 表示分配了一个资源 ", -1)),
        createBaseVNode("mjx-container", _hoisted_45, [
          (openBlock(), createElementBlock("svg", _hoisted_46, [..._cache[82] || (_cache[82] = [
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
          _cache[83] || (_cache[83] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R")
            ])
          ], -1))
        ]),
        _cache[94] || (_cache[94] = createTextVNode(" 给 ", -1)),
        createBaseVNode("mjx-container", _hoisted_47, [
          (openBlock(), createElementBlock("svg", _hoisted_48, [..._cache[84] || (_cache[84] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D443",
                    d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[85] || (_cache[85] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P")
            ])
          ], -1))
        ]),
        _cache[95] || (_cache[95] = createTextVNode("；", -1)),
        createBaseVNode("mjx-container", _hoisted_49, [
          (openBlock(), createElementBlock("svg", _hoisted_50, [..._cache[86] || (_cache[86] = [
            createStaticVNode("", 1)
          ])])),
          _cache[87] || (_cache[87] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P"),
              createBaseVNode("mo", null, "−"),
              createBaseVNode("mo", null, ">"),
              createBaseVNode("mi", null, "R")
            ])
          ], -1))
        ]),
        _cache[96] || (_cache[96] = createTextVNode(" 表示进程 ", -1)),
        createBaseVNode("mjx-container", _hoisted_51, [
          (openBlock(), createElementBlock("svg", _hoisted_52, [..._cache[88] || (_cache[88] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D443",
                    d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[89] || (_cache[89] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "P")
            ])
          ], -1))
        ]),
        _cache[97] || (_cache[97] = createTextVNode(" 正因请求 ", -1)),
        createBaseVNode("mjx-container", _hoisted_53, [
          (openBlock(), createElementBlock("svg", _hoisted_54, [..._cache[90] || (_cache[90] = [
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
          _cache[91] || (_cache[91] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "R")
            ])
          ], -1))
        ]),
        _cache[98] || (_cache[98] = createTextVNode(" 处于等待状态", -1))
      ])
    ]),
    _cache[114] || (_cache[114] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "资源分配图的化简方法：")
    ], -1)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _cache[103] || (_cache[103] = createTextVNode("当 ", -1)),
        createBaseVNode("mjx-container", _hoisted_55, [
          (openBlock(), createElementBlock("svg", _hoisted_56, [..._cache[99] || (_cache[99] = [
            createStaticVNode("", 1)
          ])])),
          _cache[100] || (_cache[100] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[104] || (_cache[104] = createTextVNode(" 有请求边时，将其请求边变成分配边(即满足 ", -1)),
        createBaseVNode("mjx-container", _hoisted_57, [
          (openBlock(), createElementBlock("svg", _hoisted_58, [..._cache[101] || (_cache[101] = [
            createStaticVNode("", 1)
          ])])),
          _cache[102] || (_cache[102] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi", null, "P"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[105] || (_cache[105] = createTextVNode(" 的资源请求)", -1))
      ]),
      _cache[106] || (_cache[106] = createBaseVNode("li", null, "一旦Pi的所有资源请求都得到满足，Pi就能在有限的时间内运行结束，并释放其所占用的全部资源，此时Pi只有分配边，删去这些分配边（实际上相当于消去了Pi的所有请求边和分配边），使Pi成为孤立结点。（反复进行）", -1))
    ]),
    _cache[115] || (_cache[115] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "死锁定理："),
      createTextVNode("系统为死锁状态当且仅当当前时刻的 RAG 不可化简成所有进程都是孤立点的图")
    ], -1)),
    _cache[116] || (_cache[116] = createBaseVNode("p", null, "检测出死锁后，可通过剥夺资源、撤销进程等方式恢复系统的运行", -1)),
    _cache[117] || (_cache[117] = createBaseVNode("h2", {
      id: "复习题",
      tabindex: "-1"
    }, [
      createTextVNode("复习题 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#复习题",
        "aria-label": 'Permalink to "复习题"'
      }, "​")
    ], -1)),
    createVNode(_component_QuizSet, { collection: "final-review" }),
    _cache[118] || (_cache[118] = createBaseVNode("h3", {
      id: "系统不会死锁的设备数量最小值",
      tabindex: "-1"
    }, [
      createTextVNode("系统不会死锁的设备数量最小值 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#系统不会死锁的设备数量最小值",
        "aria-label": 'Permalink to "系统不会死锁的设备数量最小值"'
      }, "​")
    ], -1)),
    _cache[119] || (_cache[119] = createBaseVNode("p", null, "某系统有 m 台互斥使用的同类设备，n 个并发进程完成执行分别需要 1, 2, 3, …, n 台设备。求 m 的最小值，使系统不会发生死锁。", -1)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[107] || (_cache[107] = [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "解题思路：")
        ], -1),
        createBaseVNode("p", null, "最坏情况下，每个进程都占用了所需设备数 - 1 台设备：", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "进程 1 占用 0 台（需要 1 台）"),
          createBaseVNode("li", null, "进程 2 占用 1 台（需要 2 台）"),
          createBaseVNode("li", null, "…"),
          createBaseVNode("li", null, "进程 n 占用 n-1 台（需要 n 台）")
        ], -1),
        createBaseVNode("p", null, "此时系统总占用 = 0 + 1 + 2 + … + (n-1) = n(n-1)/2 台。", -1),
        createBaseVNode("p", null, "为避免死锁，至少还需要 1 台设备来满足某个进程的剩余需求，使其能够完成并释放资源。", -1),
        createBaseVNode("p", null, [
          createTextVNode("因此，"),
          createBaseVNode("strong", null, "m 的最小值为 n(n-1)/2 + 1"),
          createTextVNode("。")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "易错点："),
          createTextVNode(" 不要忘记 +1。最坏情况下 n(n-1)/2 台设备刚好让所有进程都差 1 台设备，陷入死锁。")
        ], -1),
        createBaseVNode("p", null, "来源：2025 期末考试，四-1。", -1)
      ])]),
      _: 1
    }),
    _cache[120] || (_cache[120] = createStaticVNode("", 4)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[108] || (_cache[108] = [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "步骤 1：计算各进程剩余需求（Need = Max - Allocated）")
        ], -1),
        createBaseVNode("table", { tabindex: "0" }, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "进程"),
              createBaseVNode("th", null, "Need(CPU, 内存)")
            ])
          ]),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P0"),
              createBaseVNode("td", null, "(3, 8)")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P1"),
              createBaseVNode("td", null, "(5, 1)")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P2"),
              createBaseVNode("td", null, "(3, 5)")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P3"),
              createBaseVNode("td", null, "(6, 1)")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "P4"),
              createBaseVNode("td", null, "(8, 3)")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, "当前可用资源 Available = (4, 6)。", -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "步骤 2：执行安全性算法")
        ], -1),
        createBaseVNode("p", null, "尝试 P2：Need(3,5) ≤ Available(4,6) → 可满足！ P2 完成后释放资源，Available = (4,6) + (1,15) = (5,21)", -1),
        createBaseVNode("p", null, "尝试 P0：Need(3,8) ≤ (5,21) → 可满足！ P0 完成后释放，Available = (5,21) + (2,2) = (7,23)", -1),
        createBaseVNode("p", null, "尝试 P1：Need(5,1) ≤ (7,23) → 可满足！ P1 完成后释放，Available = (7,23) + (1,6) = (8,29)", -1),
        createBaseVNode("p", null, "尝试 P3：Need(6,1) ≤ (8,29) → 可满足！ P3 完成后释放，Available = (8,29) + (4,7) = (12,36)", -1),
        createBaseVNode("p", null, "尝试 P4：Need(8,3) ≤ (12,36) → 可满足！", -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "结论：系统处于安全状态。安全序列：P2 → P0 → P1 → P3 → P4"),
          createTextVNode("（不唯一）。")
        ], -1),
        createBaseVNode("p", null, "来源：2025 期末考试，四-2。", -1)
      ])]),
      _: 1
    })
  ]);
}
const _4_7___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_7___ as default
};
