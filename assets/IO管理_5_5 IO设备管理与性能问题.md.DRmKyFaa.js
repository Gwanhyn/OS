import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260610082358986.6vOMlEye.png";
const _imports_1 = "/OS_Learning/assets/image-20260610082830109.D7NmQ4ZZ.png";
const _imports_2 = "/OS_Learning/assets/image-20260610082840332.Dhvi0ZmE.png";
const _imports_3 = "/OS_Learning/assets/image-20260610082934637.ML5JUcow.png";
const _imports_4 = "/OS_Learning/assets/image-20260610092025574.DVhmYcwW.png";
const _imports_5 = "/OS_Learning/assets/image-20260610091147494.Dx-_1wM7.png";
const _imports_6 = "/OS_Learning/assets/image-20260610101813030.BaUZTntI.png";
const _imports_7 = "/OS_Learning/assets/image-20260610102732971.DNWYRf6q.png";
const _imports_8 = "/OS_Learning/assets/image-20260610103429718.DReGJeq6.png";
const _imports_9 = "/OS_Learning/assets/image-20260610103620006.DNtYLnSp.png";
const _imports_10 = "/OS_Learning/assets/image-20260610103727667.DeTIpyXY.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"IO管理/5_5 IO设备管理与性能问题.md","filePath":"IO管理/5_5 IO设备管理与性能问题.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "IO管理/5_5 IO设备管理与性能问题.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.74ex",
  height: "1.075ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -317.4 327 475.2",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.964ex",
  height: "0.723ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -161.8 425.9 319.6",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="i-o设备管理" tabindex="-1">I/O设备管理 <a class="header-anchor" href="#i-o设备管理" aria-label="Permalink to &quot;I/O设备管理&quot;">​</a></h2><p>由于外设资源有限，需要解决进程间的外设共享问题，以提高外设资源的利用率，需要<strong>I/O设备管理（分配）</strong>，即对进程使用外设过程的管理</p><p>常见做法：</p><ul><li>在进程间交替使用外设，例如键盘和鼠标</li><li>通过虚拟设备将应用程序与物理设备隔离，由专门的系统程序统一操作物理设备。</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>设备分配需要考虑以下因素</p><ul><li>设备固有属性：独享、共享、虚拟</li><li>设备分配算法：先来先服务、优先级高者优先等</li><li>安全性：死锁问题</li></ul></div><hr><h3 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h3><h4 id="设备控制表-dct-device-control-table" tabindex="-1">设备控制表（DCT，Device Control Table） <a class="header-anchor" href="#设备控制表-dct-device-control-table" aria-label="Permalink to &quot;设备控制表（DCT，Device Control Table）&quot;">​</a></h4><p><img src="' + _imports_0 + '" alt=""></p><p>每个设备一张，描述设备特性和状态，以及控制器的连接情况</p><h4 id="控制器控制表-coct-controller-control-table" tabindex="-1">控制器控制表（COCT, COntroller Control Table） <a class="header-anchor" href="#控制器控制表-coct-controller-control-table" aria-label="Permalink to &quot;控制器控制表（COCT, COntroller Control Table）&quot;">​</a></h4><p><img src="' + _imports_1 + '" alt=""></p><p>每个设备控制器一张，描述I/O控制器的配置和状态。如DMA控制器所占用的中断号、</p><p>DMA数据通道的分配。</p><h4 id="通道控制表-chct-channel-control-table" tabindex="-1">通道控制表（CHCT，CHannel Control Table） <a class="header-anchor" href="#通道控制表-chct-channel-control-table" aria-label="Permalink to &quot;通道控制表（CHCT，CHannel Control Table）&quot;">​</a></h4><p><img src="' + _imports_2 + '" alt=""></p><p>每个通道一张，描述通道工作状态</p><h4 id="系统设备表-sdt-system-device-table" tabindex="-1">系统设备表（SDT，System Device Table） <a class="header-anchor" href="#系统设备表-sdt-system-device-table" aria-label="Permalink to &quot;系统设备表（SDT，System Device Table）&quot;">​</a></h4><p><img src="' + _imports_3 + '" alt=""></p><p>反映系统中设备资源的状态，记录设备控制表的入口</p><hr><h3 id="设备分配基本流程" tabindex="-1">设备分配基本流程 <a class="header-anchor" href="#设备分配基本流程" aria-label="Permalink to &quot;设备分配基本流程&quot;">​</a></h3><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>单通路I/O系统：</strong> 一个设备对应一个控制器，一个控制器对应一个通道</p><p><strong>多通路I/O系统：</strong> 一个设备对应多个控制器，一个控制器对应多个通道</p></div><ul><li>分配设备 <ul><li>根据物理设备名查SDT，找到对应的DCT</li><li>设备忙则等待；否则计算是否会产生死锁，确认安全再分配</li></ul></li><li>分配设备控制器 <ul><li>将设备分配给进程后，在DCT中找到对应COCT</li><li>若控制器空闲，则分配；否则进入等待队列</li></ul></li><li>分配通道 <ul><li>在COCT中找到对应CHCT</li><li>若通道空闲，则分配；否则进入等待队列</li></ul></li></ul><p>简单来说就是 <strong>SDT→DCT→COCT→CHCT</strong></p><hr><h3 id="i-o软件——spooling技术" tabindex="-1">I/O软件——SPOOLing技术 <a class="header-anchor" href="#i-o软件——spooling技术" aria-label="Permalink to &quot;I/O软件——SPOOLing技术&quot;">​</a></h3><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>假脱机技术 (SPOOLing, Simultaneous Peripheral Operation OnLine)：</strong></p><p>也称为虚拟设备技术，可把独享设备转变成具有共享特征的虚拟设备，从而提高设备利用率。</p><p>可以简单理解为：用户进程只需把请求放入SPOOLing程序的队列里，然后就可以去执行其他步骤了，SPOOLing程序会代替用户进程与设备交互</p></div><p><img src="' + _imports_4 + '" alt=""></p><p><strong>组成：</strong></p>', 30)),
    createBaseVNode("ul", null, [
      _cache[7] || (_cache[7] = createBaseVNode("li", null, "输入井、输出井：在磁盘上的两个大存储空间，模拟磁盘设备，用于暂存数据", -1)),
      _cache[8] || (_cache[8] = createBaseVNode("li", null, "输入缓冲区、输出缓冲区：缓存交互数据", -1)),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("输入进程SP", -1)),
        createBaseVNode("mjx-container", _hoisted_1, [
          (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"></g><g data-mml-node="mi" transform="translate(33,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g>', 1)
          ])])),
          _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[5] || (_cache[5] = createTextVNode("和输出进程SP", -1)),
        createBaseVNode("mjx-container", _hoisted_3, [
          (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[2] || (_cache[2] = [
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"></g><g data-mml-node="mi" transform="translate(33,-150) scale(0.707)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g></g></g></g>', 1)
          ])])),
          _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi"),
                createBaseVNode("mi", null, "o")
              ])
            ])
          ], -1))
        ]),
        _cache[6] || (_cache[6] = createTextVNode("：模拟脱机I/O时的外围控制机", -1))
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p><strong>井vs缓冲区</strong></p><ol><li><strong>所占空间不同：</strong>井占的磁盘空间很大，缓冲区只是很小的一块内存空间</li><li><strong>实现功能不同：</strong>井存放的是完成实际I/O时的数据快照，而缓冲区是实际传输时的一小块内存中转区</li></ol><p>井在磁盘上的主要原因：</p><ul><li>需要保存完整任务或大量排队任务</li><li>内存容量有限且昂贵</li><li>磁盘适合较长时间保存任务</li><li>让人物脱离原应用程序，应用推出后仍可继续处理</li></ul></div><p><strong>工作原理（以输入为例）：</strong></p><ol><li>将用户要求的数据从输入机通过输入缓冲区再送到输入井</li><li>当CPU需要输入数据时，直接从输入井读入内存</li></ol><p><strong>特点：</strong></p><ul><li>高速虚拟I/O操作：虚拟I/O和实际I/O时间分离开，减少占用等待慢速设备的时间开销</li><li>实现对独享设备的共享：由SPOOLing程序提供虚拟设备，可对独享设备依次共享使用</li></ul><hr><h2 id="i-o性能问题" tabindex="-1">I/O性能问题 <a class="header-anchor" href="#i-o性能问题" aria-label="Permalink to &quot;I/O性能问题&quot;">​</a></h2><p>解决I/O性能问题的两个途径：</p><ol><li>使CPU利用率尽可能不被I/O降低：例如缓冲技术缓解速度差异、使用异步I/O等</li><li>使CPU尽可能摆脱I/O：使用DMA、通道等I/O部件</li></ol><p>我们先用读取磁盘上的数据为例来回顾一下I/O操作的步骤：</p><ol><li><strong>第一阶段：</strong>把磁盘数据装载进内核的内存空间</li><li><strong>第二阶段：</strong>把内核内存空间的数据copy到用户内存空间</li></ol><p>下面分析五种模型</p><h3 id="阻塞i-o" tabindex="-1">阻塞I/O <a class="header-anchor" href="#阻塞i-o" aria-label="Permalink to &quot;阻塞I/O&quot;">​</a></h3><p><img src="' + _imports_5 + '" alt=""></p><p>I/O调用结果返回之前，当前进程会被挂起，只有得到返回结果才继续进行</p><hr><h3 id="i-o多路复用" tabindex="-1">I/O多路复用 <a class="header-anchor" href="#i-o多路复用" aria-label="Permalink to &quot;I/O多路复用&quot;">​</a></h3><p><img src="' + _imports_6 + '" alt=""></p><p>提供I/O复用<code>select</code>，把原来的</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">read一个对象 → 等这一个对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变为</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select多个对象 → 等其中任意一个对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h3 id="非阻塞i-o" tabindex="-1">非阻塞I/O <a class="header-anchor" href="#非阻塞i-o" aria-label="Permalink to &quot;非阻塞I/O&quot;">​</a></h3><p><img src="' + _imports_7 + '" alt=""></p><p>进程发起I/O调用，I/O自己知道需过一段时间完成，就立即通知进程进行别的操作，则为非阻塞I/O</p><hr><h3 id="事件-信号-驱动i-o" tabindex="-1">事件（信号）驱动I/O <a class="header-anchor" href="#事件-信号-驱动i-o" aria-label="Permalink to &quot;事件（信号）驱动I/O&quot;">​</a></h3><p><img src="' + _imports_8 + '" alt=""></p><p>过程如图所示，第一阶段是非阻塞的，第二阶段依然是阻塞的。</p><hr><h3 id="异步i-o" tabindex="-1">异步I/O <a class="header-anchor" href="#异步i-o" aria-label="Permalink to &quot;异步I/O&quot;">​</a></h3><p><img src="' + _imports_9 + '" alt=""></p><p>只有数据完全复制到服务进程内存中后，才返回ok的信息，其他时间进程可随意做自己的事</p><hr><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p><img src="' + _imports_10 + '" alt=""></p><ul><li><strong>阻塞I/O：</strong>发一个I/O请求，然后一直阻塞直到请求完成</li><li><strong>I/O复用：</strong>允许同时等待很多I/O对象，其中一个就绪就可以被唤醒</li><li><strong>非阻塞I/O：</strong>隔一会儿进程问一下系统数据是否就绪，当已经复制到内存上时，阻塞处理拷贝工作</li><li><strong>事件驱动I/O：</strong>第一阶段发完请求后直到CPU通知第一阶段结束才继续，第二阶段仍然阻塞执行</li><li><strong>异步I/O：</strong>发送请求后，直接做自己的事，直到CPU通知已完成</li></ul><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 39)),
    createVNode(_component_QuizSet, { collection: "io" })
  ]);
}
const _5_5_IO_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _5_5_IO_________ as default
};
