import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"同步互斥典例","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_4 同步互斥典例.md","filePath":"进程与线程/4_4 同步互斥典例.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_4 同步互斥典例.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Reveal = resolveComponent("Reveal");
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createStaticVNode("", 12)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createBaseVNode("strong", null, "问题描述：（由Dijkstra首先提出并解决）", -1)),
      _cache[5] || (_cache[5] = createTextVNode()),
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D441",
                  d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "N")
          ])
        ], -1))
      ]),
      _cache[6] || (_cache[6] = createTextVNode(" 个哲学家围绕一张圆桌而坐，桌子上放着 ", -1)),
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
                  "data-c": "1D441",
                  d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
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
            createBaseVNode("mi", null, "N")
          ])
        ], -1))
      ]),
      _cache[7] || (_cache[7] = createTextVNode(" 支筷子，每两个哲学家之间放一支；哲学家的动作包括思考和进餐，进餐时需要同时拿起他左边和右边的两支筷子，思考时则同时将两支筷子放回原处。如何保证哲学家们的动作有序进行？", -1))
    ]),
    _cache[11] || (_cache[11] = createStaticVNode("", 9)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[8] || (_cache[8] = [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "该代码没有保证互斥访问。")
        ], -1),
        createBaseVNode("p", null, "分析如下：", -1),
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, "线程 A 进入：P(mutex)，检测到 x==0，执行 V(mutex) 释放锁"),
          createBaseVNode("li", null, "在线程 A 执行 V(mutex) 和 P(mutex) 之间，线程 B 可能获得锁"),
          createBaseVNode("li", null, "线程 B 也检测到 x==0，同样执行 V(mutex) 释放锁"),
          createBaseVNode("li", null, "结果两个线程都执行了 x++，x 可能变为 2")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "关键问题："),
          createTextVNode(" 在 V(mutex) 和 P(mutex) 之间存在竞态窗口期。释放锁后重新获取之前，其他线程可能进入临界区。")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "x 的取值可能大于 1"),
          createTextVNode("，取决于有多少线程通过竞态窗口进入。")
        ], -1),
        createBaseVNode("p", null, "来源：2025 期末考试，八-1。", -1)
      ])]),
      _: 1
    }),
    _cache[12] || (_cache[12] = createBaseVNode("h3", {
      id: "屏障同步设计",
      tabindex: "-1"
    }, [
      createTextVNode("屏障同步设计 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#屏障同步设计",
        "aria-label": 'Permalink to "屏障同步设计"'
      }, "​")
    ], -1)),
    _cache[13] || (_cache[13] = createBaseVNode("p", null, [
      createTextVNode("N 个线程需要在某个执行点汇合后再并发执行。除信号量外不允许使用任何共享变量。请用 PV 操作设计 "),
      createBaseVNode("code", null, "Barrier(int threadID)"),
      createTextVNode(" 函数。")
    ], -1)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[9] || (_cache[9] = [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "信号量定义：")
        ], -1),
        createBaseVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "semaphore arrive[N] = {0, 0, ..., 0};  // N 个信号量，初值均为 0")
              ])
            ])
          ]),
          createBaseVNode("div", {
            class: "line-numbers-wrapper",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "line-number" }, "1"),
            createBaseVNode("br")
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "实现思路："),
          createTextVNode(" 线程 i 到达后，通知下一个线程，然后等待自己的信号量。")
        ], -1),
        createBaseVNode("div", { class: "language- vp-adaptive-theme line-numbers-mode" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "void Barrier(int threadID) {")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    int next = (threadID + 1) % N;")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    signal(arrive[next]);    // 通知下一个线程：我已到达")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    wait(arrive[threadID]);  // 等待上一个线程通知我")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "}")
              ])
            ])
          ]),
          createBaseVNode("div", {
            class: "line-numbers-wrapper",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "line-number" }, "1"),
            createBaseVNode("br"),
            createBaseVNode("span", { class: "line-number" }, "2"),
            createBaseVNode("br"),
            createBaseVNode("span", { class: "line-number" }, "3"),
            createBaseVNode("br"),
            createBaseVNode("span", { class: "line-number" }, "4"),
            createBaseVNode("br"),
            createBaseVNode("span", { class: "line-number" }, "5"),
            createBaseVNode("br")
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "原理：")
        ], -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "线程 0 先到达，signal(arrive[1])，然后 wait(arrive[0]) 阻塞"),
          createBaseVNode("li", null, "线程 1 到达，signal(arrive[2])，然后 wait(arrive[1]) 被线程 0 唤醒"),
          createBaseVNode("li", null, "…"),
          createBaseVNode("li", null, "最后一个线程 N-1 到达，signal(arrive[0]) 唤醒线程 0"),
          createBaseVNode("li", null, "线程 0 被唤醒后完成 Barrier")
        ], -1),
        createBaseVNode("p", null, '这样就形成了一个"信号传递链"，所有线程都到达后才全部释放。', -1),
        createBaseVNode("p", null, "来源：2025 期末考试，八-2。", -1)
      ])]),
      _: 1
    }),
    createVNode(_component_QuizSet, { collection: "sync" })
  ]);
}
const _4_4_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_4_______ as default
};
