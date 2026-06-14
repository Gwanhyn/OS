import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"文件系统/7_3 文件系统实例分析.md","filePath":"文件系统/7_3 文件系统实例分析.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "文件系统/7_3 文件系统实例分析.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h2 id="文件系统实例" tabindex="-1">文件系统实例 <a class="header-anchor" href="#文件系统实例" aria-label="Permalink to &quot;文件系统实例&quot;">​</a></h2><h3 id="fat" tabindex="-1">FAT <a class="header-anchor" href="#fat" aria-label="Permalink to &quot;FAT&quot;">​</a></h3><ul><li>目录项记录文件起始簇</li><li>FAT 表项记录下一簇的位置</li><li>本质：将链接指针集中存放在 FAT 中的链接分配</li><li>优点：实现简单，文件扩展方便</li><li>缺点：随机访问仍需要沿 FAT 链查找，FAT 本身占据空间</li></ul><h3 id="unix-ext2" tabindex="-1">Unix / Ext2 <a class="header-anchor" href="#unix-ext2" aria-label="Permalink to &quot;Unix / Ext2&quot;">​</a></h3><ul><li>目录项保存文件名和 inode 号</li><li>inode 保存文件大小、权限、时间和数据块索引</li><li>数据块采用直接索引和多级间接索引</li><li>Ext2 将磁盘划分为多个块组，每个块组包含： <ul><li>数据块位图</li><li>inode 位图</li><li>inode 表</li><li>数据块</li></ul></li><li>块组的目的：让 inode 和文件数据尽量靠近，减少寻道</li></ul><h3 id="lfs" tabindex="-1">LFS <a class="header-anchor" href="#lfs" aria-label="Permalink to &quot;LFS&quot;">​</a></h3><ul><li>将零散随机写合并为 segment 顺序追加</li><li>imap：inode号 → 最新inode位置</li><li>cleaner：搬运有效块并回收旧segment</li><li>checkpoint + roll-forward：崩溃恢复</li></ul><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 8)),
    createVNode(_component_QuizSet, { collection: "filesystem" })
  ]);
}
const _7_3_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _7_3_________ as default
};
