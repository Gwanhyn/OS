import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, ai as createStaticVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"Knowledge Map","description":"","frontmatter":{"title":"Knowledge Map","tags":["index"],"difficulty":"overview","review":"2026-04-26T00:00:00.000Z"},"headers":[],"relativePath":"knowledge-map.md","filePath":"knowledge-map.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "knowledge-map.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "knowledge-map",
      tabindex: "-1"
    }, [
      createTextVNode("Knowledge Map "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#knowledge-map",
        "aria-label": 'Permalink to "Knowledge Map"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("div", { class: "os-note-band" }, [
      createBaseVNode("p", null, "知识地图用来定位概念之间的依赖关系。复习时可以先看主干，再回到具体章节补细节和做练习。")
    ], -1)),
    createVNode(_component_Mermaid, { code: "flowchart%20LR%0A%20%20OS%5B%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%95%B4%E4%BD%93%E8%A7%86%E8%A7%92%5D%0A%20%20OS%20--%3E%20Boot%5B%E5%90%AF%E5%8A%A8%E4%B8%8E%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%5D%0A%20%20OS%20--%3E%20Memory%5B%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%5D%0A%20%20OS%20--%3E%20Process%5B%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%5D%0A%0A%20%20Boot%20--%3E%20BootFlow%5BBoot%20%E6%B5%81%E7%A8%8B%5D%0A%20%20Boot%20--%3E%20ProgramRun%5B%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B%5D%0A%0A%20%20Memory%20--%3E%20Storage%5B%E5%AD%98%E5%82%A8%E7%AE%A1%E7%90%86%5D%0A%20%20Memory%20--%3E%20Paging%5B%E9%A1%B5%E5%BC%8F%E7%AE%A1%E7%90%86%5D%0A%20%20Memory%20--%3E%20Segment%5B%E6%AE%B5%E5%BC%8F%E7%AE%A1%E7%90%86%5D%0A%20%20Paging%20--%3E%20Virtual%5B%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%5D%0A%20%20Virtual%20--%3E%20Demand%5B%E8%AF%B7%E6%B1%82%E5%BC%8F%E5%88%86%E9%A1%B5%5D%0A%20%20Paging%20--%3E%20SelfMap%5B%E9%A1%B5%E8%A1%A8%E8%87%AA%E6%98%A0%E5%B0%84%5D%0A%0A%20%20Process%20--%3E%20State%5B%E8%BF%9B%E7%A8%8B%E7%8A%B6%E6%80%81%E4%B8%8E%E6%8E%A7%E5%88%B6%5D%0A%20%20Process%20--%3E%20Thread%5B%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B%5D%0A%20%20Process%20--%3E%20Sync%5B%E5%90%8C%E6%AD%A5%E4%B8%8E%E4%BA%92%E6%96%A5%5D%0A%20%20Sync%20--%3E%20Semaphore%5B%E4%BF%A1%E5%8F%B7%E9%87%8F%5D%0A%20%20Sync%20--%3E%20Monitor%5B%E7%AE%A1%E7%A8%8B%5D%0A%20%20Sync%20--%3E%20Classic%5B%E7%BB%8F%E5%85%B8%E5%90%8C%E6%AD%A5%E9%97%AE%E9%A2%98%5D%0A" }),
    _cache[2] || (_cache[2] = createStaticVNode('<h2 id="模块索引" tabindex="-1">模块索引 <a class="header-anchor" href="#模块索引" aria-label="Permalink to &quot;模块索引&quot;">​</a></h2><div class="os-card-grid"><a class="os-card" href="./OS%20Boot/main"><span class="os-card__meta">启动主线</span><strong>OS Boot</strong><p>适合在学习内存和进程之前先建立系统启动与程序执行的整体背景。</p></a><a class="os-card" href="./%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/main"><span class="os-card__meta">地址主线</span><strong>内存管理</strong><p>从地址转换进入分页、虚拟内存、缺页异常和页表自映射。</p></a><a class="os-card" href="./%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/main"><span class="os-card__meta">并发主线</span><strong>进程与线程</strong><p>从进程状态出发，连接线程实现、同步互斥和经典并发问题。</p></a></div>', 2))
  ]);
}
const knowledgeMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  knowledgeMap as default
};
