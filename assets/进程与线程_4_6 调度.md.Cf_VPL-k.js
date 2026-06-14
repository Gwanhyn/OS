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
    _cache[49] || (_cache[49] = createStaticVNode('<h2 id="调度基础" tabindex="-1">调度基础 <a class="header-anchor" href="#调度基础" aria-label="Permalink to &quot;调度基础&quot;">​</a></h2><p><strong>调度：</strong>控制协调多个进程对CPU的竞争</p><p>WHAT→按什么原则选择下一个执行的进程→进程调度算法</p><p>WHEN→进程调度的时机</p><p>HOW→CPU切换过程（进程的上下文切换）</p><p><strong>调度类型：</strong></p><ul><li>高级调度：又称宏观调度、作业调度，即从用户角度一次提交若干个作业，对作业进行调度</li><li>中级调度：又称内外存交换，将当前所需部分换入内存，若空间不够时把暂时不需要的换出到外存</li><li>低级调度：又称微观调度、进程或线程调度，调度进程对CPU的控制权</li></ul><p><img src="' + _imports_0 + '" alt=""></p><h3 id="调度评价指标" tabindex="-1">调度评价指标 <a class="header-anchor" href="#调度评价指标" aria-label="Permalink to &quot;调度评价指标&quot;">​</a></h3><p><strong>调度的性能准则：</strong></p><ul><li>面向用户：周转时间、响应时间、截止时间、优先级、公平性等</li><li>面向系统：吞吐量、处理机利用率、各种资源的均衡利用</li><li>面向算法：易于实现、开销较小</li></ul>', 11)),
    createBaseVNode("div", _hoisted_1, [
      _cache[13] || (_cache[13] = createBaseVNode("p", { class: "custom-block-title" }, "NOTE", -1)),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode("吞吐量 = ", -1)),
        createBaseVNode("mjx-container", _hoisted_2, [
          (openBlock(), createElementBlock("svg", _hoisted_3, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(927.1,481.4) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">数</text></g></g><g data-mml-node="mrow" transform="translate(220,-370.3) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">总</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">执</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">行</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g></g><rect width="3735.5" height="60" x="120" y="220"></rect></g></g></g>', 1)
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
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(2341.3,481.4) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">周</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">转</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g></g><g data-mml-node="mrow" transform="translate(220,-370.3) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">服</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">务</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">（</text></g><g data-mml-node="mi" transform="translate(5000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">执</text></g><g data-mml-node="mi" transform="translate(6000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">行</text></g><g data-mml-node="mi" transform="translate(7000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(8000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mi" transform="translate(9000,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">）</text></g></g><rect width="7271.1" height="60" x="120" y="220"></rect></g></g></g>', 1)
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
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(220,481.4) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">周</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">转</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(5000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mi" transform="translate(6000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">之</text></g><g data-mml-node="mi" transform="translate(7000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">和</text></g></g><g data-mml-node="mrow" transform="translate(1987.8,-370.3) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">数</text></g></g><rect width="5856.9" height="60" x="120" y="220"></rect></g></g></g>', 1)
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
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(220,481.4) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">带</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">权</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">周</text></g><g data-mml-node="mi" transform="translate(5000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">转</text></g><g data-mml-node="mi" transform="translate(6000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(7000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mi" transform="translate(8000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">之</text></g><g data-mml-node="mi" transform="translate(9000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">和</text></g></g><g data-mml-node="mrow" transform="translate(2694.9,-370.3) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">数</text></g></g><rect width="7271.1" height="60" x="120" y="220"></rect></g></g></g>', 1)
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
    _cache[50] || (_cache[50] = createStaticVNode('<div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>多道作业并发时，吞吐量并不等于平均周转时间的倒数，因为多个作业的运行时间可能相互重叠。</p></div><h2 id="批处理系统中的调度算法" tabindex="-1">批处理系统中的调度算法 <a class="header-anchor" href="#批处理系统中的调度算法" aria-label="Permalink to &quot;批处理系统中的调度算法&quot;">​</a></h2><p><a href="#调度评价指标">调度评价指标</a></p><h3 id="先来先服务-fcfs-first-come-first-serve" tabindex="-1">先来先服务（FCFS：First Come First Serve） <a class="header-anchor" href="#先来先服务-fcfs-first-come-first-serve" aria-label="Permalink to &quot;先来先服务（FCFS：First Come First Serve）&quot;">​</a></h3><p><strong>核心：</strong> 按变成就绪状态的时间先后调度</p><p><strong>特点：</strong></p><ul><li>利于长作业</li><li>利于 CPU Bound</li></ul><h3 id="短作业优先-sjf-shortest-job-first" tabindex="-1">短作业优先（SJF：Shortest Job First） <a class="header-anchor" href="#短作业优先-sjf-shortest-job-first" aria-label="Permalink to &quot;短作业优先（SJF：Shortest Job First）&quot;">​</a></h3><p><strong>核心：</strong> 对预计执行时间短的作业优先分派，后来的短作业不抢占正在执行的作业</p><p><strong>优点：</strong></p><ul><li>减少平均周转时间和平均带权周转时间，缩短作业等待时间</li><li>提高系统吞吐量</li></ul><p><strong>缺点：</strong></p><ul><li>对长作业不利</li></ul><h3 id="最短剩余时间优先-srtf-shortest-remaining-time-first" tabindex="-1">最短剩余时间优先（SRTF：Shortest Remaining Time First） <a class="header-anchor" href="#最短剩余时间优先-srtf-shortest-remaining-time-first" aria-label="Permalink to &quot;最短剩余时间优先（SRTF：Shortest Remaining Time First）&quot;">​</a></h3><p><strong>核心：</strong> 将 SJF 改进为抢占式</p><p><strong>缺点：</strong> 源源不断地短任务到来会使长任务“饥饿”</p><h3 id="最高响应比优先-hrrf-high-response-ratio-first" tabindex="-1">最高响应比优先（HRRF：High Response Ratio First） <a class="header-anchor" href="#最高响应比优先-hrrf-high-response-ratio-first" aria-label="Permalink to &quot;最高响应比优先（HRRF：High Response Ratio First）&quot;">​</a></h3>', 17)),
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
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1036.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2092.6,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(3481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(4481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">已</text></g><g data-mml-node="mi" transform="translate(5481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">等</text></g><g data-mml-node="mi" transform="translate(6481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">待</text></g><g data-mml-node="mi" transform="translate(7481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(8481.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mo" transform="translate(9703.8,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(10704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(11704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(12704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(13704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">服</text></g><g data-mml-node="mi" transform="translate(14704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">务</text></g><g data-mml-node="mi" transform="translate(15704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(16704,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mo" transform="translate(17704,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(18093,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(18593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(19593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(20593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(21593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">服</text></g><g data-mml-node="mi" transform="translate(22593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">务</text></g><g data-mml-node="mi" transform="translate(23593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(24593,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="mo" transform="translate(25870.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(26926.6,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(27648.8,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(28649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(29649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(30649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">已</text></g><g data-mml-node="mi" transform="translate(31649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">等</text></g><g data-mml-node="mi" transform="translate(32649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">待</text></g><g data-mml-node="mi" transform="translate(33649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(34649,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(35649,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(36149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">作</text></g><g data-mml-node="mi" transform="translate(37149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">业</text></g><g data-mml-node="mi" transform="translate(38149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(39149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">服</text></g><g data-mml-node="mi" transform="translate(40149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">务</text></g><g data-mml-node="mi" transform="translate(41149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">时</text></g><g data-mml-node="mi" transform="translate(42149,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">间</text></g></g></g>', 1)
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
    _cache[51] || (_cache[51] = createStaticVNode('<p><strong>优点：</strong> 既照顾短作业又不使长作业等待时间过长</p><p><strong>缺点：</strong> 每次计算各道作业的响应比会有一定的时间开销，性能比 SJF 略差。</p><h2 id="交互式系统的调度算法" tabindex="-1">交互式系统的调度算法 <a class="header-anchor" href="#交互式系统的调度算法" aria-label="Permalink to &quot;交互式系统的调度算法&quot;">​</a></h2><p><a href="#调度评价指标">调度评价指标</a></p><h3 id="时间片轮转-rr-round-robin" tabindex="-1">时间片轮转（RR：Round Robin） <a class="header-anchor" href="#时间片轮转-rr-round-robin" aria-label="Permalink to &quot;时间片轮转（RR：Round Robin）&quot;">​</a></h3><p><strong>核心：</strong> 当需要调度时（抢占式），将系统中所有的就绪进程按照 FCFS 原则调度，并分配时间片。当时间片用完时，会发生时钟中断</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p><strong>时间片长度的确定</strong></p><p>长 → 切换开销小，响应慢，退化成 FCFS</p><p>短 → 响应快，但上下文切换开销大</p><p>就绪进程的数目：数目越多，时间片越小</p><p>系统的处理能力：应当使用户输入通常在一个时间片内能处理完； 否则会使响应时间、平均周转时间和平均带权周转时间延长。</p></div><hr><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h3><h4 id="优先级算法-priority-scheduling" tabindex="-1">优先级算法(Priority Scheduling) <a class="header-anchor" href="#优先级算法-priority-scheduling" aria-label="Permalink to &quot;优先级算法(Priority Scheduling)&quot;">​</a></h4><p>可以用多个调度队列区分优先级，先从优先级高的调度</p><p>本算法是平衡各进程对响应时间的要求。适用于作业调度和进程调度，可分成抢先式和非抢先式；</p><p><strong>静态优先级：</strong></p><p>创建进程时就确定，直到进程终止前都不改变。通常是一个整数。依据：</p><ul><li>进程类型（系统进程优先级较高）</li><li>对资源的需求（对CPU和内存需求较少的进程，优先级较高）</li><li>用户要求（紧迫程度和付费多少）</li></ul><p><strong>动态优先级：</strong></p><ul><li>在就绪队列中，等待时间延长则优先级提高，从而使优先级较低的进程在等待足够的时间后，其优先级提高到可被调度执行；</li><li>进程每执行一个时间片，就降低其优先级，从而一个进程持续执行时，其优先级降低到让出CPU。</li></ul><h4 id="优先级反转问题" tabindex="-1">优先级反转问题 <a class="header-anchor" href="#优先级反转问题" aria-label="Permalink to &quot;优先级反转问题&quot;">​</a></h4><p>高优先级进程（或线程）被低优先级进程（或线程）延迟或阻塞。</p><p><img src="' + _imports_1 + '" alt="优先级反转示例"></p><h4 id="解决方法1-优先级置顶" tabindex="-1">解决方法1：优先级置顶 <a class="header-anchor" href="#解决方法1-优先级置顶" aria-label="Permalink to &quot;解决方法1：优先级置顶&quot;">​</a></h4><p><strong>核心：</strong> 低优先级进程进入临界区后，就临时提高至最高优先级，不允许被抢占</p><p><strong>问题：</strong> 低优先级占有临界区过长时，也会阻碍高优先级进行</p><h4 id="解决方法2-优先级继承" tabindex="-1">解决方法2：优先级继承 <a class="header-anchor" href="#解决方法2-优先级继承" aria-label="Permalink to &quot;解决方法2：优先级继承&quot;">​</a></h4><p><strong>核心：</strong> 当高优先级进程要进入临界区使用临界资源时，如果已有一个低优先级进程使用同样的临界资源，则让该低优先级进程继承高优先级</p><hr><h3 id="多级队列-mq-multi-level-queue" tabindex="-1">多级队列（MQ：Multi-level Queue） <a class="header-anchor" href="#多级队列-mq-multi-level-queue" aria-label="Permalink to &quot;多级队列（MQ：Multi-level Queue）&quot;">​</a></h3><p>按照进程类型将进程永久划分到不同的就绪队列，例如系统进程、交互进程和批处理进程。不同队列可以采用不同的调度算法，队列之间还需要规定固定优先级或时间片分配策略。</p><h3 id="多级反馈队列-mfq-multi-level-feedback-queue" tabindex="-1">多级反馈队列（MFQ： Multi-level Feedback Queue） <a class="header-anchor" href="#多级反馈队列-mfq-multi-level-feedback-queue" aria-label="Permalink to &quot;多级反馈队列（MFQ： Multi-level Feedback Queue）&quot;">​</a></h3><p><strong>核心：</strong></p><ul><li>设置不同优先级队列，每个队列执行时间片的长度也不同，规定优先级越低则时间片越长</li><li>新进程进入内存后，先投入队列 1 的末尾，按 FCFS 算法调度</li><li>若进程在当前队列一个时间片未能执行完，则降低优先级，直到最低则按 RR 调度</li><li>抢占式，即优先级高的抢占式调度</li></ul><p><strong>优点：</strong></p><ul><li>为提高系统吞吐量和缩短平均周转时间而照顾短进程</li><li>为获得较好的I/O设备利用率和缩短响应时间而照顾I/O型进程</li><li>不必估计进程的执行时间，动态调节</li></ul><p>为适应一个进程在不同时间段的运行特点，I/O完成时，提高优先级；时间片用完时，降低优先级；</p><h2 id="实时系统的调度算法" tabindex="-1">实时系统的调度算法 <a class="header-anchor" href="#实时系统的调度算法" aria-label="Permalink to &quot;实时系统的调度算法&quot;">​</a></h2><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p><strong>实时系统</strong></p><p><strong>时间主导：</strong> 外部设备发出信号后，要在确定的时间范围内做出恰当反应（周期性）</p><p><strong>分类：</strong> 硬实时系统（必须在时间限制内完成）、软实时系统（可以偶尔不满足）</p></div><p><strong>问题描述：</strong></p>', 37)),
    createBaseVNode("p", null, [
      _cache[34] || (_cache[34] = createTextVNode("假设一任务集 ", -1)),
      createBaseVNode("mjx-container", _hoisted_14, [
        (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[24] || (_cache[24] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(922.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1978.6,0)"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(394,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(797.6,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1242.2,0)"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(394,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(2039.8,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(2484.4,0)"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(394,-150) scale(0.707)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(3282,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3726.7,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4171.3,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4616,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5060.7,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(5505.3,0)"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(394,-150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g></g>', 1)
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
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(704,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1204,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1648.7,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(2352.7,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2852.7,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3297.3,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3742,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4186.7,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4631.3,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5076,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5780,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g>', 1)
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
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(869.6,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1314.2,0)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(466,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(2183.8,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2628.4,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3073.1,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3517.8,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3962.4,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(4407.1,0)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(466,-150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g>', 1)
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
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(861,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1264.6,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1709.2,0)"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(861,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(2973.8,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3418.4,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3863.1,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4307.8,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4752.4,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(5197.1,0)"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(861,-150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g>', 1)
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
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(861,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1432.7,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(2488.5,0)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(617,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g>', 1)
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
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1044.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2100.6,0)"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(148.2,-1087.9) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(345,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1123,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(509.9,1150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mfrac" transform="translate(3711.2,0)"><g data-mml-node="msub" transform="translate(295.5,676)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(466,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="msub" transform="translate(220,-686)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(617,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><rect width="1111" height="60" x="120" y="220"></rect></g></g></g>', 1)
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
    _cache[52] || (_cache[52] = createStaticVNode('<p><strong>前提条件</strong> • 任务集（S）是已知的； • 所有任务都是周期性（T）的，必须在限定的时限 D 内完成； • 任务之间都是独立的，每个任务不依赖于其他任务； • 每个任务的运行时间（c）是不变的； • 调度, 任务切换的时间忽略不计。</p><h3 id="静态表调度算法-static-table-driven-scheduling" tabindex="-1">静态表调度算法（Static table-driven scheduling） <a class="header-anchor" href="#静态表调度算法-static-table-driven-scheduling" aria-label="Permalink to &quot;静态表调度算法（Static table-driven scheduling）&quot;">​</a></h3><p><strong>核心：</strong> 事先确定调度顺序</p><p><strong>特点：</strong> • 无任何计算，按固定方案进行，开销最小； • 无灵活性，只适用于完全固定的任务场景。</p><h3 id="单调速率调度-rms-rate-monotonic-scheduling" tabindex="-1">单调速率调度（RMS：Rate Monotonic Scheduling） <a class="header-anchor" href="#单调速率调度-rms-rate-monotonic-scheduling" aria-label="Permalink to &quot;单调速率调度（RMS：Rate Monotonic Scheduling）&quot;">​</a></h3><p><strong>核心：</strong></p><ul><li>任务的周期越小，其优先级越高，优先级最高的任务最先被调度</li><li>如果两个任务的优先级一样，当调度它们时，RM算法将随机选择一个调度</li><li>静态、抢占式调度</li></ul><p><strong>优点：</strong> RMS已被证明是静态最优调度算法, 开销小, 灵活性好, 是实时调度的基础性理论。</p><p><strong>可调度的充分条件：</strong></p>', 9)),
    createBaseVNode("mjx-container", _hoisted_26, [
      (openBlock(), createElementBlock("svg", _hoisted_27, [..._cache[42] || (_cache[42] = [
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1044.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2100.6,0)"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(148.2,-1087.9) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(345,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1123,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(509.9,1150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mfrac" transform="translate(3711.2,0)"><g data-mml-node="msub" transform="translate(295.5,676)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(466,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="msub" transform="translate(220,-686)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(617,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><rect width="1111" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(5340,0)"><path data-c="2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6395.7,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6995.7,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(7384.7,0)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(533,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mfrac"><g data-mml-node="mn" transform="translate(255.4,394) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(220,-345) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><rect width="624.3" height="60" x="120" y="220"></rect></g></g></g><g data-mml-node="mo" transform="translate(8801.1,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(9801.3,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(10301.3,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>', 1)
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
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1044.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2100.6,0)"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(148.2,-1087.9) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(345,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1123,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(509.9,1150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mfrac" transform="translate(3711.2,0)"><g data-mml-node="msub" transform="translate(295.5,676)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(466,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="msub" transform="translate(220,-686)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(617,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><rect width="1111" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(5340,0)"><path data-c="2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(6395.7,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g>', 1)
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
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1044.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2100.6,0)"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(148.2,-1087.9) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(345,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1123,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(509.9,1150) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mfrac" transform="translate(3711.2,0)"><g data-mml-node="msub" transform="translate(295.5,676)"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(466,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="msub" transform="translate(220,-686)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(617,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><rect width="1111" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(5340,0)"><path data-c="2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(6395.7,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g>', 1)
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
    _cache[60] || (_cache[60] = createStaticVNode('<h2 id="多处理机调度" tabindex="-1">多处理机调度 <a class="header-anchor" href="#多处理机调度" aria-label="Permalink to &quot;多处理机调度&quot;">​</a></h2><p><strong>多处理机情境下的特点：</strong></p><ul><li>注重系统整体的性能</li><li>更多样的调度算法</li><li>多处理机访问共享文件系统的互斥问题</li><li>调度单位广泛使用线程</li></ul><h3 id="非对称式多处理系统amp-asymmetric-multi-processor" tabindex="-1">非对称式多处理系统AMP（Asymmetric Multi-Processor） <a class="header-anchor" href="#非对称式多处理系统amp-asymmetric-multi-processor" aria-label="Permalink to &quot;非对称式多处理系统AMP（Asymmetric Multi-Processor）&quot;">​</a></h3><p><strong>核心：</strong>各处理机地位不同。主-从处理及系统中，由主处理机管理一个公共就绪队列，分派进程给处理及执行</p><p><strong>特点：</strong></p><ul><li>可将特定类型的进程分配给固定分工处理机</li><li>主机故障则系统崩溃，有潜在的不可靠性</li></ul><h3 id="对称式多处理系统smp-symmetric-multi-processor" tabindex="-1">对称式多处理系统SMP（Symmetric Multi-Processor） <a class="header-anchor" href="#对称式多处理系统smp-symmetric-multi-processor" aria-label="Permalink to &quot;对称式多处理系统SMP（Symmetric Multi-Processor）&quot;">​</a></h3><p><strong>控制方式：</strong></p><ul><li>集中控制 <ul><li>静态调度：每个CPU设立一个就绪队列，进程从开始执行到完成在同一个CPU上 <ul><li>优点：算法开销小</li><li>缺点：容易出现忙闲不均</li></ul></li><li>动态调度：采用一个公共就绪队列，队首进程分派到当前空闲CPU上</li></ul></li><li>分散控制 <ul><li>自调度：采用一个公共就绪队列，每个处理机可自行选适当进程执行 <ul><li>需要对就绪队列的数据结构进行互斥访问控制</li><li>优点：不需要专门处理机从事分派工作</li><li>缺点：处理机个数较多时，互斥访问可能成为系统瓶颈</li></ul></li></ul></li></ul><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 11)),
    createVNode(_component_QuizSet, { collection: "process" }),
    _cache[61] || (_cache[61] = createStaticVNode('<h3 id="多级队列调度计算" tabindex="-1">多级队列调度计算 <a class="header-anchor" href="#多级队列调度计算" aria-label="Permalink to &quot;多级队列调度计算&quot;">​</a></h3><p>某系统采用多级队列调度算法，设有两个队列：</p><ul><li>高优先级队列 Q1：时间片轮转（RR），时间片长度为 2</li><li>低优先级队列 Q2：先来先服务（FCFS）</li></ul><p>调度规则：</p><ol><li>新到达的进程首先进入 Q1</li><li>若进程在 Q1 中用完一个时间片后未完成，则降级移入 Q2</li><li>仅当 Q1 为空时，才调度 Q2 中的进程</li><li>进程一旦开始执行就不会被打断，除非时间片用完</li></ol><table tabindex="0"><thead><tr><th>进程</th><th>到达时间</th><th>执行时间</th></tr></thead><tbody><tr><td>P1</td><td>0</td><td>8</td></tr><tr><td>P2</td><td>1</td><td>4</td></tr><tr><td>P3</td><td>2</td><td>5</td></tr><tr><td>P4</td><td>3</td><td>2</td></tr></tbody></table><p>求所有进程的平均周转时间。</p>', 7)),
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
