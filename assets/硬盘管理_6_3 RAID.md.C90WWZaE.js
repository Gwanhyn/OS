import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260610215246997.BJmRmIvv.png";
const _imports_1 = "/OS_Learning/assets/image-20260610220650287.DothJ-o0.png";
const _imports_2 = "/OS_Learning/assets/image-20260610220717420.BPW15cVx.png";
const _imports_3 = "/OS_Learning/assets/image-20260610220801169.BfTLoFx2.png";
const _imports_4 = "/OS_Learning/assets/image-20260610221204245.C49j3cTI.png";
const _imports_5 = "/OS_Learning/assets/image-20260610221556228.ywFBcqwv.png";
const _imports_6 = "/OS_Learning/assets/image-20260610221947867.JDtYaSaW.png";
const _imports_7 = "/OS_Learning/assets/image-20260610221344321.D1U8GDTT.png";
const _imports_8 = "/OS_Learning/assets/image-20260610221457268.BKb133Ug.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"硬盘管理/6_3 RAID.md","filePath":"硬盘管理/6_3 RAID.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "硬盘管理/6_3 RAID.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.312ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "13.917ex",
  height: "1.882ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 6151.3 832",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.02ex",
  height: "1.025ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -442 451 453",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.176ex",
  height: "1.593ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 520 704",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="raid" tabindex="-1">RAID <a class="header-anchor" href="#raid" aria-label="Permalink to &quot;RAID&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>廉价冗余磁盘阵列（Redundant arrays of inexpensive disks）：</strong>把多个相对便宜的硬盘组合起来，成为一个硬盘阵列组，使性能达到甚至超过一个价格昂贵、容量巨大的硬盘</p><ul><li>利用冗余技术提高可靠性</li><li>利用并行提高性能</li></ul><p>优点：</p><ul><li>成本低、功耗小、传输速率高</li><li>可提供容错功能</li></ul></div><p><strong>问题：</strong>磁盘阵列包含的磁盘越多，至少有一块磁盘发生故障的概率越高，因此需要通过镜像或校验信息提供冗余和容错能力。</p><p>数据冗余的功能是在用户数据一旦发生损坏后，利用冗余信息可以使损失数据得以恢复，从而保障了用户数据的安全性。</p><p><strong>数据分段：</strong>把一个文件的数据分成多个条带写道多个硬盘，每个条带的大小可以按需调整</p><p><img src="' + _imports_0 + '" alt=""></p><hr><h3 id="raid分级" tabindex="-1">RAID分级 <a class="header-anchor" href="#raid分级" aria-label="Permalink to &quot;RAID分级&quot;">​</a></h3><ul><li>主流分级（七个）：0，1，...，6</li><li>组合级别：如RAID0+1</li></ul><h4 id="raid0" tabindex="-1">RAID0 <a class="header-anchor" href="#raid0" aria-label="Permalink to &quot;RAID0&quot;">​</a></h4><p>并行存取到多个硬盘，但没有数据冗余</p><p><img src="' + _imports_1 + '" alt=""></p><h4 id="raid1" tabindex="-1">RAID1 <a class="header-anchor" href="#raid1" aria-label="Permalink to &quot;RAID1&quot;">​</a></h4><p>镜像存储，同样的数据在成对的独立磁盘上，互为备份</p><ul><li>原始繁忙时，可从镜像读取，因此可以提高读取性能</li><li>磁盘失效时，切换到镜像磁盘上</li></ul><p>单位成本最高，但提供了很高的数据安全性和可用性</p><p><img src="' + _imports_2 + '" alt=""></p><h4 id="raid-0-1-raid-1-0" tabindex="-1">RAID 0+1 &amp;&amp; RAID 1+0 <a class="header-anchor" href="#raid-0-1-raid-1-0" aria-label="Permalink to &quot;RAID 0+1 &amp;&amp; RAID 1+0&quot;">​</a></h4><p>综合两者特点。</p><p>RAID 0+1：先条带化，再对整个条带组做镜像。</p><p>RAID 1+0：先组成镜像对，再对镜像对做条带化。</p><p>RAID 1+0 通常具有更好的故障容忍能力。</p><p><img src="' + _imports_3 + '" alt=""></p><h4 id="raid2" tabindex="-1">RAID2 <a class="header-anchor" href="#raid2" aria-label="Permalink to &quot;RAID2&quot;">​</a></h4><p><a href="#校验码">海明码</a>校验 + 条带存储</p>', 25)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("海明码长度：", -1)),
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1179.7,0)"><path data-c="2265" d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2235.5,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2908.7,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3908.9,0)"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4651.1,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(5651.3,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g>', 1)
        ])])),
        _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("msup", null, [
              createBaseVNode("mn", null, "2"),
              createBaseVNode("mi", null, "r")
            ]),
            createBaseVNode("mo", null, "≥"),
            createBaseVNode("mi", null, "r"),
            createBaseVNode("mo", null, "+"),
            createBaseVNode("mi", null, "d"),
            createBaseVNode("mo", null, "+"),
            createBaseVNode("mn", null, "1")
          ])
        ], -1))
      ]),
      _cache[7] || (_cache[7] = createTextVNode("(", -1)),
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
                  "data-c": "1D45F",
                  d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
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
            createBaseVNode("mi", null, "r")
          ])
        ], -1))
      ]),
      _cache[8] || (_cache[8] = createTextVNode(" 是冗余码位数，", -1)),
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
                  "data-c": "1D451",
                  d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
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
            createBaseVNode("mi", null, "d")
          ])
        ], -1))
      ]),
      _cache[9] || (_cache[9] = createTextVNode(" 是数据位数)", -1))
    ]),
    _cache[11] || (_cache[11] = createStaticVNode('<p><img src="' + _imports_4 + '" alt=""></p><p>将数据条带化分布于<strong>不同的硬盘上</strong>，使用海明码来提供错误检查及恢复</p><h4 id="raid-3" tabindex="-1">RAID 3 <a class="header-anchor" href="#raid-3" aria-label="Permalink to &quot;RAID 3&quot;">​</a></h4><p><a href="#校验码">奇偶校验</a>冗余</p><p><img src="' + _imports_5 + '" alt=""></p><p>其他等级可以自主了解，这里放出总表：</p><p><img src="' + _imports_6 + '" alt=""></p><hr><h2 id="校验码" tabindex="-1">校验码 <a class="header-anchor" href="#校验码" aria-label="Permalink to &quot;校验码&quot;">​</a></h2><p><img src="' + _imports_7 + '" alt=""></p><p><img src="' + _imports_8 + '" alt=""></p><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 12)),
    createVNode(_component_QuizSet, { collection: "final-review" })
  ]);
}
const _6_3_RAID = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _6_3_RAID as default
};
