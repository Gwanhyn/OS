import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260610111527029.B8X2lnnr.png";
const _imports_1 = "/OS_Learning/assets/image-20260610112149651.6W9_4iaL.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"硬盘管理/6_1 磁盘概述.md","filePath":"硬盘管理/6_1 磁盘概述.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "硬盘管理/6_1 磁盘概述.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h2 id="磁盘结构" tabindex="-1">磁盘结构 <a class="header-anchor" href="#磁盘结构" aria-label="Permalink to &quot;磁盘结构&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>扇区（sector）：</strong> 盘片被分成的扇形区域</p><p><strong>磁道（track）：</strong>盘片上以盘片中心为圆心，不同半径的同心圆</p><p><strong>柱面（cylinder）：</strong>硬盘中，不同盘片相同半径的磁道所形成的圆柱</p><p>每个磁盘有两个盘面，每个可用盘面对应一个磁头，一块磁盘可以有多个盘片</p></div><p><img src="' + _imports_0 + '" alt=""></p><p><img src="' + _imports_1 + '" alt=""></p><p>图中的编址模式为：磁道（Track）→磁头（Head）→扇区（Sector），一个扇区即为一个逻辑块，逻辑块是数据传输的最小单位</p><h2 id="flash-disk" tabindex="-1">Flash Disk <a class="header-anchor" href="#flash-disk" aria-label="Permalink to &quot;Flash Disk&quot;">​</a></h2><ul><li>无机械寻道和旋转延迟；</li><li>写入前需要擦除；</li><li>擦写寿命有限，需要磨损均衡。</li></ul><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 8)),
    createVNode(_component_QuizSet, { collection: "disk" })
  ]);
}
const _6_1_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _6_1_____ as default
};
