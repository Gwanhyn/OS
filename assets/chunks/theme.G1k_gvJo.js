const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.D6oYnrOP.js","assets/chunks/framework.CvIu6D-n.js","assets/chunks/mermaid.core.DAir4i3l.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, c as createElementBlock, r as renderSlot, n as normalizeClass, o as openBlock, a as createTextVNode, t as toDisplayString, b as createBlock, w as withCtx, T as Transition, e as createCommentVNode, _ as _export_sfc, u as useData$1, i as isExternal, f as treatAsHtml, g as withBase, h as computed, j as createBaseVNode, k as unref, l as isActive, m as useMediaQuery, p as ref, q as watch, s as watchEffect, v as onMounted, x as onUnmounted, y as watchPostEffect, z as onUpdated, A as getScrollOffset, F as Fragment, B as renderList, C as resolveComponent, D as onContentUpdated, E as createVNode, G as shallowRef, H as resolveDynamicComponent, I as EXTERNAL_URL_RE, J as useRoute, K as mergeProps, L as inject, M as useWindowSize, N as normalizeStyle, O as onKeyStroke, P as nextTick, Q as useWindowScroll, R as inBrowser, S as readonly, U as defineAsyncComponent, V as __vitePreload, W as useScrollLock, X as provide, Y as toHandlers, Z as withKeys, $ as onBeforeUnmount, a0 as withModifiers, a1 as useSlots, a2 as withDirectives, a3 as vModelText } from "./framework.CvIu6D-n.js";
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["VPBadge", __props.type])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$Y = {
  key: 0,
  class: "VPBackdrop"
};
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$Y)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-c79a1216"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _hoisted_1$X = { class: "NotFound" };
const _hoisted_2$D = { class: "code" };
const _hoisted_3$u = { class: "title" };
const _hoisted_4$j = { class: "quote" };
const _hoisted_5$i = { class: "action" };
const _hoisted_6$f = ["href", "aria-label"];
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { theme: theme2 } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$X, [
        createBaseVNode("p", _hoisted_2$D, toDisplayString(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$u, toDisplayString(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "divider" }, null, -1)),
        createBaseVNode("blockquote", _hoisted_4$j, toDisplayString(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_5$i, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(unref(currentLang).link),
            "aria-label": ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_6$f)
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-d6be1790"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h) {
  let ret = "";
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data2, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data2.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _hoisted_1$W = ["href", "title"];
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["VPDocOutlineItem", __props.root ? "root" : "nested"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, ({ children, link, title }) => {
          return openBlock(), createElementBlock("li", null, [
            createBaseVNode("a", {
              class: "outline-link",
              href: link,
              onClick,
              title
            }, toDisplayString(title), 9, _hoisted_1$W),
            (children == null ? void 0 : children.length) ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
              key: 0,
              headers: children
            }, null, 8, ["headers"])) : createCommentVNode("", true)
          ]);
        }), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-b933a997"]]);
const _hoisted_1$V = { class: "content" };
const _hoisted_2$C = {
  "aria-level": "2",
  class: "outline-title",
  id: "doc-outline-aria-label",
  role: "heading"
};
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        "aria-labelledby": "doc-outline-aria-label",
        class: normalizeClass(["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }]),
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", _hoisted_1$V, [
          createBaseVNode("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: marker
          }, null, 512),
          createBaseVNode("div", _hoisted_2$C, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
          createVNode(VPDocOutlineItem, {
            headers: headers.value,
            root: true
          }, null, 8, ["headers"])
        ])
      ], 2);
    };
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-a5bbad30"]]);
const _hoisted_1$U = { class: "VPDocAsideCarbonAds" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$U, [
        createVNode(unref(VPCarbonAds), { "carbon-ads": __props.carbonAds }, null, 8, ["carbon-ads"])
      ]);
    };
  }
});
const _hoisted_1$T = { class: "VPDocAside" };
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$T, [
        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true),
        createVNode(VPDocAsideOutline),
        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "spacer" }, null, -1)),
        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true),
        unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$16, {
          key: 0,
          "carbon-ads": unref(theme2).carbonAds
        }, null, 8, ["carbon-ads"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
      ]);
    };
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-3f215769"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link) => link.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), {
        class: normalizeClass(["VPLink", {
          link: __props.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": __props.noIcon
        }]),
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: __props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: __props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _hoisted_1$S = { class: "VPLastUpdated" };
const _hoisted_2$B = ["datetime"];
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("p", _hoisted_1$S, [
        createTextVNode(toDisplayString(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$B)
      ]);
    };
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-e98dd255"]]);
const _hoisted_1$R = {
  key: 0,
  class: "VPDocFooter"
};
const _hoisted_2$A = {
  key: 0,
  class: "edit-info"
};
const _hoisted_3$t = {
  key: 0,
  class: "edit-link"
};
const _hoisted_4$i = {
  key: 1,
  class: "last-updated"
};
const _hoisted_5$h = {
  key: 1,
  class: "prev-next",
  "aria-labelledby": "doc-footer-aria-label"
};
const _hoisted_6$e = { class: "pager" };
const _hoisted_7$c = ["innerHTML"];
const _hoisted_8$b = ["innerHTML"];
const _hoisted_9$9 = { class: "pager" };
const _hoisted_10$7 = ["innerHTML"];
const _hoisted_11$6 = ["innerHTML"];
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme2.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$R, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$A, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$t, [
            createVNode(_sfc_main$14, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_4$i, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        ((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link) ? (openBlock(), createElementBlock("nav", _hoisted_5$h, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "doc-footer-aria-label"
          }, "Pager", -1)),
          createBaseVNode("div", _hoisted_6$e, [
            ((_c = unref(control).prev) == null ? void 0 : _c.link) ? (openBlock(), createBlock(_sfc_main$14, {
              key: 0,
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"
                  }, null, 8, _hoisted_7$c),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, _hoisted_8$b)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9$9, [
            ((_d = unref(control).next) == null ? void 0 : _d.link) ? (openBlock(), createBlock(_sfc_main$14, {
              key: 0,
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"
                  }, null, 8, _hoisted_10$7),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, _hoisted_11$6)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-e257564d"]]);
const _hoisted_1$Q = { class: "container" };
const _hoisted_2$z = { class: "aside-container" };
const _hoisted_3$s = { class: "aside-content" };
const _hoisted_4$h = { class: "content" };
const _hoisted_5$g = { class: "content-container" };
const _hoisted_6$d = { class: "main" };
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$Q, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "aside-curtain" }, null, -1)),
            createBaseVNode("div", _hoisted_2$z, [
              createBaseVNode("div", _hoisted_3$s, [
                createVNode(VPDocAside, null, {
                  "aside-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                  ]),
                  "aside-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                  ]),
                  "aside-outline-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                  ]),
                  "aside-outline-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                  ]),
                  "aside-ads-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                  ]),
                  "aside-ads-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$h, [
            createBaseVNode("div", _hoisted_5$g, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
              createBaseVNode("main", _hoisted_6$d, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [
                    pageName.value,
                    unref(theme2).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              createVNode(VPDocFooter, null, {
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ]),
                _: 3
              }),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-39a288b8"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || (props.href ? "a" : "button");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.value), {
        class: normalizeClass(["VPButton", [__props.size, __props.theme]]),
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-fa7799d5"]]);
const _hoisted_1$P = ["src", "alt"];
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      return __props.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof __props.image === "string" || "src" in __props.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
          alt: __props.alt ?? (typeof __props.image === "string" ? "" : __props.image.alt || "")
        }), null, 16, _hoisted_1$P)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-8426fc1a"]]);
const _hoisted_1$O = { class: "container" };
const _hoisted_2$y = { class: "main" };
const _hoisted_3$r = { class: "heading" };
const _hoisted_4$g = ["innerHTML"];
const _hoisted_5$f = ["innerHTML"];
const _hoisted_6$c = ["innerHTML"];
const _hoisted_7$b = {
  key: 0,
  class: "actions"
};
const _hoisted_8$a = {
  key: 0,
  class: "image"
};
const _hoisted_9$8 = { class: "image-container" };
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPHero", { "has-image": __props.image || unref(heroImageSlotExists) }])
      }, [
        createBaseVNode("div", _hoisted_1$O, [
          createBaseVNode("div", _hoisted_2$y, [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true),
            renderSlot(_ctx.$slots, "home-hero-info", {}, () => [
              createBaseVNode("h1", _hoisted_3$r, [
                __props.name ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: __props.name,
                  class: "name clip"
                }, null, 8, _hoisted_4$g)) : createCommentVNode("", true),
                __props.text ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  innerHTML: __props.text,
                  class: "text"
                }, null, 8, _hoisted_5$f)) : createCommentVNode("", true)
              ]),
              __props.tagline ? (openBlock(), createElementBlock("p", {
                key: 0,
                innerHTML: __props.tagline,
                class: "tagline"
              }, null, 8, _hoisted_6$c)) : createCommentVNode("", true)
            ], true),
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true),
            __props.actions ? (openBlock(), createElementBlock("div", _hoisted_7$b, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action) => {
                return openBlock(), createElementBlock("div", {
                  key: action.link,
                  class: "action"
                }, [
                  createVNode(VPButton, {
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link,
                    target: action.target,
                    rel: action.rel
                  }, null, 8, ["theme", "text", "href", "target", "rel"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          __props.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$a, [
            createBaseVNode("div", _hoisted_9$8, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "image-bg" }, null, -1)),
              renderSlot(_ctx.$slots, "home-hero-image", {}, () => [
                __props.image ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  class: "image-src",
                  image: __props.image
                }, null, 8, ["image"])) : createCommentVNode("", true)
              ], true)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-4f9c455b"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).hero ? (openBlock(), createBlock(VPHero, {
        key: 0,
        class: "VPHomeHero",
        name: unref(fm).hero.name,
        text: unref(fm).hero.text,
        tagline: unref(fm).hero.tagline,
        image: unref(fm).hero.image,
        actions: unref(fm).hero.actions
      }, {
        "home-hero-info-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-before")
        ]),
        "home-hero-info": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info")
        ]),
        "home-hero-info-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-after")
        ]),
        "home-hero-actions-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-actions-after")
        ]),
        "home-hero-image": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-image")
        ]),
        _: 3
      }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$N = { class: "box" };
const _hoisted_2$x = {
  key: 0,
  class: "icon"
};
const _hoisted_3$q = ["innerHTML"];
const _hoisted_4$f = ["innerHTML"];
const _hoisted_5$e = ["innerHTML"];
const _hoisted_6$b = {
  key: 4,
  class: "link-text"
};
const _hoisted_7$a = { class: "link-text-value" };
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$14, {
        class: "VPFeature",
        href: __props.link,
        rel: __props.rel,
        target: __props.target,
        "no-icon": true,
        tag: __props.link ? "a" : "div"
      }, {
        default: withCtx(() => [
          createBaseVNode("article", _hoisted_1$N, [
            typeof __props.icon === "object" && __props.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$x, [
              createVNode(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height || 48,
                width: __props.icon.width || 48
              }, null, 8, ["image", "alt", "height", "width"])
            ])) : typeof __props.icon === "object" ? (openBlock(), createBlock(VPImage, {
              key: 1,
              image: __props.icon,
              alt: __props.icon.alt,
              height: __props.icon.height || 48,
              width: __props.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : __props.icon ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "icon",
              innerHTML: __props.icon
            }, null, 8, _hoisted_3$q)) : createCommentVNode("", true),
            createBaseVNode("h2", {
              class: "title",
              innerHTML: __props.title
            }, null, 8, _hoisted_4$f),
            __props.details ? (openBlock(), createElementBlock("p", {
              key: 3,
              class: "details",
              innerHTML: __props.details
            }, null, 8, _hoisted_5$e)) : createCommentVNode("", true),
            __props.linkText ? (openBlock(), createElementBlock("div", _hoisted_6$b, [
              createBaseVNode("p", _hoisted_7$a, [
                createTextVNode(toDisplayString(__props.linkText) + " ", 1),
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-arrow-right link-text-icon" }, null, -1))
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["href", "rel", "target", "tag"]);
    };
  }
});
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-a3976bdc"]]);
const _hoisted_1$M = {
  key: 0,
  class: "VPFeatures"
};
const _hoisted_2$w = { class: "container" };
const _hoisted_3$p = { class: "items" };
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _cache) => {
      return __props.features ? (openBlock(), createElementBlock("div", _hoisted_1$M, [
        createBaseVNode("div", _hoisted_2$w, [
          createBaseVNode("div", _hoisted_3$p, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.features, (feature) => {
              return openBlock(), createElementBlock("div", {
                key: feature.title,
                class: normalizeClass(["item", [grid.value]])
              }, [
                createVNode(VPFeature, {
                  icon: feature.icon,
                  title: feature.title,
                  details: feature.details,
                  link: feature.link,
                  "link-text": feature.linkText,
                  rel: feature.rel,
                  target: feature.target
                }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
              ], 2);
            }), 128))
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-a6181336"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
        key: 0,
        class: "VPHomeFeatures",
        features: unref(fm).features
      }, null, 8, ["features"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  setup(__props) {
    const { width: vw } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vp-doc container",
        style: normalizeStyle(unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {})
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-8e2d4988"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPHome", {
          "external-link-icon-enabled": unref(theme2).externalLinkIcon
        }])
      }, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true),
        createVNode(_sfc_main$Z, null, {
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true),
        createVNode(_sfc_main$W),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true),
        unref(frontmatter).markdownStyles !== false ? (openBlock(), createBlock(VPHomeContent, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_Content)
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_Content, { key: 1 }))
      ], 2);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-8b561e3d"]]);
const _sfc_main$T = {};
const _hoisted_1$L = { class: "VPPage" };
function _sfc_render$1(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$L, [
    renderSlot(_ctx.$slots, "page-top"),
    createVNode(_component_Content),
    renderSlot(_ctx.$slots, "page-bottom")
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$1]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }]),
        id: "VPContent"
      }, [
        unref(page).isNotFound ? renderSlot(_ctx.$slots, "not-found", { key: 0 }, () => [
          createVNode(NotFound)
        ], true) : unref(frontmatter).layout === "page" ? (openBlock(), createBlock(VPPage, { key: 1 }, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(VPHome, { key: 2 }, {
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout && unref(frontmatter).layout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).layout), { key: 3 })) : (openBlock(), createBlock(VPDoc, { key: 4 }, {
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-1428d186"]]);
const _hoisted_1$K = { class: "container" };
const _hoisted_2$v = ["innerHTML"];
const _hoisted_3$o = ["innerHTML"];
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return unref(theme2).footer && unref(frontmatter).footer !== false ? (openBlock(), createElementBlock("footer", {
        key: 0,
        class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("div", _hoisted_1$K, [
          unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "message",
            innerHTML: unref(theme2).footer.message
          }, null, 8, _hoisted_2$v)) : createCommentVNode("", true),
          unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: "copyright",
            innerHTML: unref(theme2).footer.copyright
          }, null, 8, _hoisted_3$o)) : createCommentVNode("", true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-e315a0ad"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _hoisted_1$J = { class: "menu-text" };
const _hoisted_2$u = { class: "header" };
const _hoisted_3$n = { class: "outline" };
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props;
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    const items = ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items.value) {
          items.value.style.transition = "none";
        }
        nextTick(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPLocalNavOutlineDropdown",
        style: normalizeStyle({ "--vp-vh": vh.value + "px" }),
        ref_key: "main",
        ref: main
      }, [
        __props.headers.length > 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: toggle,
          class: normalizeClass({ open: open.value })
        }, [
          createBaseVNode("span", _hoisted_1$J, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1))
        ], 2)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: scrollToTop
        }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)),
        createVNode(Transition, { name: "flyout" }, {
          default: withCtx(() => [
            open.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "items",
              ref: items,
              class: "items",
              onClick: onItemClick
            }, [
              createBaseVNode("div", _hoisted_2$u, [
                createBaseVNode("a", {
                  class: "top-link",
                  href: "#",
                  onClick: scrollToTop
                }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
              ]),
              createBaseVNode("div", _hoisted_3$n, [
                createVNode(VPDocOutlineItem, { headers: __props.headers }, null, 8, ["headers"])
              ])
            ], 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-8a42e2b4"]]);
const _hoisted_1$I = { class: "container" };
const _hoisted_2$t = ["aria-expanded"];
const _hoisted_3$m = { class: "menu-text" };
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _cache) => {
      return unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", _hoisted_1$I, [
          unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "menu",
            "aria-expanded": __props.open,
            "aria-controls": "VPSidebarNav",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
          }, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1)),
            createBaseVNode("span", _hoisted_3$m, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
          ], 8, _hoisted_2$t)) : createCommentVNode("", true),
          createVNode(VPLocalNavOutlineDropdown, {
            headers: unref(headers),
            navHeight: navHeight.value
          }, null, 8, ["headers", "navHeight"])
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-a6f0e41e"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$O = {};
const _hoisted_1$H = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
};
const _hoisted_2$s = { class: "check" };
const _hoisted_3$l = {
  key: 0,
  class: "icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$H, [
    createBaseVNode("span", _hoisted_2$s, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$l, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render], ["__scopeId", "data-v-1d5665e3"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPSwitch, {
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, {
        default: withCtx(() => [..._cache[0] || (_cache[0] = [
          createBaseVNode("span", { class: "vpi-sun sun" }, null, -1),
          createBaseVNode("span", { class: "vpi-moon moon" }, null, -1)
        ])]),
        _: 1
      }, 8, ["title", "aria-checked", "onClick"]);
    };
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-5337faa4"]]);
const _hoisted_1$G = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_1$G, [
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-6c893767"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _hoisted_1$F = { class: "VPMenuLink" };
const _hoisted_2$r = ["innerHTML"];
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$F, [
        createVNode(_sfc_main$14, {
          class: normalizeClass({
            active: unref(isActive)(
              unref(page).relativePath,
              __props.item.activeMatch || __props.item.link,
              !!__props.item.activeMatch
            )
          }),
          href: __props.item.link,
          target: __props.item.target,
          rel: __props.item.rel,
          "no-icon": __props.item.noIcon
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              innerHTML: __props.item.text
            }, null, 8, _hoisted_2$r)
          ]),
          _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"])
      ]);
    };
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-35975db6"]]);
const _hoisted_1$E = { class: "VPMenuGroup" };
const _hoisted_2$q = {
  key: 0,
  class: "title"
};
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$E, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$q, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(VPMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-69e747b5"]]);
const _hoisted_1$D = { class: "VPMenu" };
const _hoisted_2$p = {
  key: 0,
  class: "items"
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$D, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$p, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createBlock(VPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                key: 1,
                ref_for: true
              }, item.props), null, 16)) : (openBlock(), createBlock(VPMenuGroup, {
                key: 2,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-b98bc113"]]);
const _hoisted_1$C = ["aria-expanded", "aria-label"];
const _hoisted_2$o = {
  key: 0,
  class: "text"
};
const _hoisted_3$k = ["innerHTML"];
const _hoisted_4$e = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
const _hoisted_5$d = { class: "menu" };
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPFlyout",
        ref_key: "el",
        ref: el,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          __props.button || __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2$o, [
            __props.icon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([__props.icon, "option-icon"])
            }, null, 2)) : createCommentVNode("", true),
            __props.button ? (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: __props.button
            }, null, 8, _hoisted_3$k)) : createCommentVNode("", true),
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1))
          ])) : (openBlock(), createElementBlock("span", _hoisted_4$e))
        ], 8, _hoisted_1$C),
        createBaseVNode("div", _hoisted_5$d, [
          createVNode(VPMenu, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-cf11d7a2"]]);
const _hoisted_1$B = ["href", "aria-label", "innerHTML"];
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a;
      await nextTick();
      const span = (_a = el.value) == null ? void 0 : _a.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: __props.link,
        "aria-label": __props.ariaLabel ?? (typeof __props.icon === "string" ? __props.icon : ""),
        target: "_blank",
        rel: "noopener",
        innerHTML: svg.value
      }, null, 8, _hoisted_1$B);
    };
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-bd121fe5"]]);
const _hoisted_1$A = { class: "VPSocialLinks" };
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$A, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link, icon, ariaLabel }) => {
          return openBlock(), createBlock(VPSocialLink, {
            key: link,
            icon,
            link,
            ariaLabel
          }, null, 8, ["icon", "link", "ariaLabel"]);
        }), 128))
      ]);
    };
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-7bc22406"]]);
const _hoisted_1$z = {
  key: 0,
  class: "group translations"
};
const _hoisted_2$n = { class: "trans-title" };
const _hoisted_3$j = {
  key: 1,
  class: "group"
};
const _hoisted_4$d = { class: "item appearance" };
const _hoisted_5$c = { class: "label" };
const _hoisted_6$a = { class: "appearance-action" };
const _hoisted_7$9 = {
  key: 2,
  class: "group"
};
const _hoisted_8$9 = { class: "item social-links" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _cache) => {
      return hasExtraContent.value ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$z, [
            createBaseVNode("p", _hoisted_2$n, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])) : createCommentVNode("", true),
          unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_3$j, [
            createBaseVNode("div", _hoisted_4$d, [
              createBaseVNode("p", _hoisted_5$c, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
              createBaseVNode("div", _hoisted_6$a, [
                createVNode(VPSwitchAppearance)
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(theme2).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$9, [
            createBaseVNode("div", _hoisted_8$9, [
              createVNode(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme2).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-bb2aa2f0"]]);
const _hoisted_1$y = ["aria-expanded"];
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["VPNavBarHamburger", { active: __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [..._cache[1] || (_cache[1] = [
        createBaseVNode("span", { class: "container" }, [
          createBaseVNode("span", { class: "top" }),
          createBaseVNode("span", { class: "middle" }),
          createBaseVNode("span", { class: "bottom" })
        ], -1)
      ])], 10, _hoisted_1$y);
    };
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-e5dd9c1c"]]);
const _hoisted_1$x = ["innerHTML"];
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$14, {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        }),
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$x)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel", "no-icon"]);
    };
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-e56f3d57"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPFlyout, {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch, !!__props.item.activeMatch) || childrenActive.value
        }),
        button: __props.item.text,
        items: __props.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
const _hoisted_1$w = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$w, [
        _cache[0] || (_cache[0] = createBaseVNode("span", {
          id: "main-nav-aria-label",
          class: "visually-hidden"
        }, " Main Navigation ", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: JSON.stringify(item)
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
              key: 1,
              ref_for: true
            }, item.props), null, 16)) : (openBlock(), createBlock(_sfc_main$C, {
              key: 2,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-dc692963"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _hoisted_1$v = ["aria-label"];
const _hoisted_2$m = { class: "DocSearch-Button-Container" };
const _hoisted_3$i = { class: "DocSearch-Button-Placeholder" };
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, [
        createBaseVNode("span", _hoisted_2$m, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1)),
          createBaseVNode("span", _hoisted_3$i, toDisplayString(unref(translate)("button.buttonText")), 1)
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "DocSearch-Button-Keys" }, [
          createBaseVNode("kbd", { class: "DocSearch-Button-Key" }),
          createBaseVNode("kbd", { class: "DocSearch-Button-Key" }, "K")
        ], -1))
      ], 8, _hoisted_1$v);
    };
  }
});
const _hoisted_1$u = { class: "VPNavBarSearch" };
const _hoisted_2$l = { id: "local-search" };
const _hoisted_3$h = {
  key: 1,
  id: "docsearch"
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => __vitePreload(() => import("./VPLocalSearchBox.D6oYnrOP.js"), true ? __vite__mapDeps([0,1]) : void 0));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        unref(provider) === "local" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          showSearch.value ? (openBlock(), createBlock(unref(VPLocalSearchBox), {
            key: 0,
            onClose: _cache[0] || (_cache[0] = ($event) => showSearch.value = false)
          })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_2$l, [
            createVNode(_sfc_main$A, {
              onClick: _cache[1] || (_cache[1] = ($event) => showSearch.value = true)
            })
          ])
        ], 64)) : unref(provider) === "algolia" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), {
            key: 0,
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: _cache[2] || (_cache[2] = ($event) => actuallyLoaded.value = true)
          }, null, 8, ["algolia"])) : createCommentVNode("", true),
          !actuallyLoaded.value ? (openBlock(), createElementBlock("div", _hoisted_3$h, [
            createVNode(_sfc_main$A, { onClick: load })
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavBarSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-0394ad82"]]);
const _hoisted_1$t = ["href", "rel", "target"];
const _hoisted_2$k = ["innerHTML"];
const _hoisted_3$g = { key: 2 };
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("a", {
          class: "title",
          href: link.value ?? unref(normalizeLink$1)(unref(currentLang).link),
          rel: rel.value,
          target: target.value
        }, [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true),
          unref(theme2).logo ? (openBlock(), createBlock(VPImage, {
            key: 0,
            class: "logo",
            image: unref(theme2).logo
          }, null, 8, ["image"])) : createCommentVNode("", true),
          unref(theme2).siteTitle ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: unref(theme2).siteTitle
          }, null, 8, _hoisted_2$k)) : unref(theme2).siteTitle === void 0 ? (openBlock(), createElementBlock("span", _hoisted_3$g, toDisplayString(unref(site).title), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ], 8, _hoisted_1$t)
      ], 2);
    };
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-1168a8e4"]]);
const _hoisted_1$s = { class: "items" };
const _hoisted_2$j = { class: "title" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarTranslations",
        icon: "vpi-languages",
        label: unref(theme2).langMenuLabel || "Change language"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$s, [
            createBaseVNode("p", _hoisted_2$j, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["label"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-88af2de4"]]);
const _hoisted_1$r = { class: "wrapper" };
const _hoisted_2$i = { class: "container" };
const _hoisted_3$f = { class: "title" };
const _hoisted_4$c = { class: "content" };
const _hoisted_5$b = { class: "content-body" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBar", classes.value])
      }, [
        createBaseVNode("div", _hoisted_1$r, [
          createBaseVNode("div", _hoisted_2$i, [
            createBaseVNode("div", _hoisted_3$f, [
              createVNode(VPNavBarTitle, null, {
                "nav-bar-title-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ]),
                "nav-bar-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ]),
                _: 3
              })
            ]),
            createBaseVNode("div", _hoisted_4$c, [
              createBaseVNode("div", _hoisted_5$b, [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true),
                createVNode(_sfc_main$z, { class: "search" }),
                createVNode(VPNavBarMenu, { class: "menu" }),
                createVNode(VPNavBarTranslations, { class: "translations" }),
                createVNode(VPNavBarAppearance, { class: "appearance" }),
                createVNode(VPNavBarSocialLinks, { class: "social-links" }),
                createVNode(VPNavBarExtra, { class: "extra" }),
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true),
                createVNode(VPNavBarHamburger, {
                  class: "hamburger",
                  active: __props.isScreenOpen,
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
                }, null, 8, ["active"])
              ])
            ])
          ])
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "divider" }, [
          createBaseVNode("div", { class: "divider-line" })
        ], -1))
      ], 2);
    };
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-6aa21345"]]);
const _hoisted_1$q = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$h = { class: "text" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
        createBaseVNode("p", _hoisted_2$h, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-b44890b2"]]);
const _hoisted_1$p = ["innerHTML"];
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$14, {
        class: "VPNavScreenMenuLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$p)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-df37e6dd"]]);
const _hoisted_1$o = ["innerHTML"];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$14, {
        class: "VPNavScreenMenuGroupLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$o)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-3e9c20e4"]]);
const _hoisted_1$n = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$g = {
  key: 0,
  class: "title"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$g, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-8133b170"]]);
const _hoisted_1$m = ["aria-controls", "aria-expanded"];
const _hoisted_2$f = ["innerHTML"];
const _hoisted_3$e = ["id"];
const _hoisted_4$b = {
  key: 0,
  class: "item"
};
const _hoisted_5$a = {
  key: 1,
  class: "item"
};
const _hoisted_6$9 = {
  key: 2,
  class: "group"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", {
            class: "button-text",
            innerHTML: __props.text
          }, null, 8, _hoisted_2$f),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1))
        ], 8, _hoisted_1$m),
        createBaseVNode("div", {
          id: groupId.value,
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", _hoisted_4$b, [
                createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
              ])) : "component" in item ? (openBlock(), createElementBlock("div", _hoisted_5$a, [
                (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null, 16))
              ])) : (openBlock(), createElementBlock("div", _hoisted_6$9, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$e)
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-b9ab8c58"]]);
const _hoisted_1$l = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$l, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: JSON.stringify(item)
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
              key: 1,
              ref_for: true
            }, item.props, { "screen-menu": "" }), null, 16)) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 2,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavScreenSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$k = { class: "list" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1)),
          createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1))
        ]),
        createBaseVNode("ul", _hoisted_1$k, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
            return openBlock(), createElementBlock("li", {
              key: locale.link,
              class: "item"
            }, [
              createVNode(_sfc_main$14, {
                class: "link",
                href: locale.link
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.text), 1)
                ]),
                _: 2
              }, 1032, ["href"])
            ]);
          }), 128))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-858fe1a4"]]);
const _hoisted_1$j = { class: "container" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen,
            id: "VPNavScreen"
          }, [
            createBaseVNode("div", _hoisted_1$j, [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true),
              createVNode(_sfc_main$p, { class: "menu" }),
              createVNode(VPNavScreenTranslations, { class: "translations" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$o, { class: "social-links" }),
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-f2779853"]]);
const _hoisted_1$i = {
  key: 0,
  class: "VPNav"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _cache) => {
      return hasNavbar.value ? (openBlock(), createElementBlock("header", _hoisted_1$i, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-ae24b3ad"]]);
const _hoisted_1$h = ["role", "tabindex"];
const _hoisted_2$e = {
  key: 1,
  class: "items"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["VPSidebarItem", classes.value])
      }, {
        default: withCtx(() => [
          __props.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value
          }, toHandlers(
            __props.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            true
          ), {
            tabindex: __props.item.items && 0
          }), [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "indicator" }, null, -1)),
            __props.item.link ? (openBlock(), createBlock(_sfc_main$14, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: __props.item.link,
              rel: __props.item.rel,
              target: __props.item.target
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  class: "text",
                  innerHTML: __props.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: __props.item.text
            }, null, 8, ["innerHTML"])),
            __props.item.collapsed != null && __props.item.items && __props.item.items.length ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, [..._cache[0] || (_cache[0] = [
              createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1)
            ])], 32)) : createCommentVNode("", true)
          ], 16, _hoisted_1$h)) : createCommentVNode("", true),
          __props.item.items && __props.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
            __props.depth < 5 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.item.items, (i) => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i.text,
                item: i,
                depth: __props.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-b3fd67f8"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.text,
          class: normalizeClass(["group", { "no-transition": disableTransition.value }])
        }, [
          createVNode(VPSidebarItem, {
            item,
            depth: 0
          }, null, 8, ["item"])
        ], 2);
      }), 128);
    };
  }
});
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-c40bc020"]]);
const _hoisted_1$g = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        class: normalizeClass(["VPSidebar", { open: __props.open }]),
        ref_key: "navEl",
        ref: navEl,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "curtain" }, null, -1)),
        createBaseVNode("nav", _hoisted_1$g, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "sidebar-aria-label"
          }, " Sidebar Navigation ", -1)),
          renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
          (openBlock(), createBlock(VPSidebarGroup, {
            items: unref(sidebarGroups),
            key: key.value
          }, null, 8, ["items"])),
          renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-319d5ca6"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, toDisplayString(unref(theme2).skipToContentLabel || "Skip to content"), 1)
      ], 64);
    };
  }
});
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-0b0ada53"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== false ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["Layout", unref(frontmatter).pageClass])
      }, [
        renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
        createVNode(VPSkipLink),
        createVNode(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        createVNode(VPNav, null, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
          ]),
          "sidebar-nav-after": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          "not-found": withCtx(() => [
            renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
          ]),
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPFooter),
        renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
      ], 2)) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-5d98c3a5"]]);
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$1b);
  }
};
const _hoisted_1$f = { class: "compare study-card" };
const _hoisted_2$d = { class: "compare__eyebrow" };
const _hoisted_3$d = { class: "compare__grid" };
const _hoisted_4$a = { class: "compare__side" };
const _hoisted_5$9 = { key: 0 };
const _hoisted_6$8 = { class: "compare__side" };
const _hoisted_7$8 = { key: 0 };
const _hoisted_8$8 = {
  key: 0,
  class: "compare__summary"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "CompareCard",
  props: {
    title: { default: "概念对比" },
    leftTitle: {},
    rightTitle: {},
    left: {},
    right: {},
    summary: {}
  },
  setup(__props) {
    const props = __props;
    function toItems(value) {
      if (!value) return [];
      return Array.isArray(value) ? value : [value];
    }
    const leftItems = computed(() => toItems(props.left));
    const rightItems = computed(() => toItems(props.right));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$f, [
        createBaseVNode("p", _hoisted_2$d, toDisplayString(__props.title), 1),
        createBaseVNode("div", _hoisted_3$d, [
          createBaseVNode("article", _hoisted_4$a, [
            createBaseVNode("h3", null, toDisplayString(__props.leftTitle), 1),
            leftItems.value.length ? (openBlock(), createElementBlock("ul", _hoisted_5$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(leftItems.value, (item) => {
                return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
              }), 128))
            ])) : renderSlot(_ctx.$slots, "left", { key: 1 }, void 0, true)
          ]),
          createBaseVNode("article", _hoisted_6$8, [
            createBaseVNode("h3", null, toDisplayString(__props.rightTitle), 1),
            rightItems.value.length ? (openBlock(), createElementBlock("ul", _hoisted_7$8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(rightItems.value, (item) => {
                return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
              }), 128))
            ])) : renderSlot(_ctx.$slots, "right", { key: 1 }, void 0, true)
          ])
        ]),
        __props.summary ? (openBlock(), createElementBlock("p", _hoisted_8$8, toDisplayString(__props.summary), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const CompareCard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-be738224"]]);
const STORAGE_KEYS = {
  readPages: "os-notes:read-pages",
  doneQuestions: "os-notes:done-questions",
  wrongQuestions: "os-notes:wrong-questions"
};
function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}
function readJson(key, fallback) {
  if (!canUseStorage()) return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
function writeJson(key, value) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}
function byNewest(a, b) {
  return (b.at || b.readAt || 0) - (a.at || a.readAt || 0);
}
function markPageRead(record) {
  const pages = readJson(STORAGE_KEYS.readPages, []);
  const next = [record, ...pages.filter((page) => page.path !== record.path)].sort(byNewest);
  writeJson(STORAGE_KEYS.readPages, next);
}
function getReadPages() {
  return readJson(STORAGE_KEYS.readPages, []).sort(byNewest);
}
function recordQuestion(record) {
  const done = readJson(STORAGE_KEYS.doneQuestions, []);
  if (!done.includes(record.id)) {
    writeJson(STORAGE_KEYS.doneQuestions, [...done, record.id]);
  }
  const wrong = readJson(STORAGE_KEYS.wrongQuestions, []);
  const withoutCurrent = wrong.filter((item) => item.id !== record.id);
  writeJson(STORAGE_KEYS.wrongQuestions, record.correct ? withoutCurrent : [record, ...withoutCurrent].sort(byNewest));
}
function getDoneQuestionIds() {
  return readJson(STORAGE_KEYS.doneQuestions, []);
}
function getWrongQuestions() {
  return readJson(STORAGE_KEYS.wrongQuestions, []).sort(byNewest);
}
function clearLearningProgress() {
  if (!canUseStorage()) return;
  Object.values(STORAGE_KEYS).forEach((key) => window.localStorage.removeItem(key));
}
const _hoisted_1$e = { class: "addition-paper" };
const _hoisted_2$c = { class: "addition-paper__hero" };
const _hoisted_3$c = { class: "addition-paper__meta" };
const _hoisted_4$9 = { class: "addition-question__header" };
const _hoisted_5$8 = { class: "addition-question__index" };
const _hoisted_6$7 = { class: "addition-question__type" };
const _hoisted_7$7 = { class: "addition-question__stem" };
const _hoisted_8$7 = {
  key: 0,
  class: "addition-options"
};
const _hoisted_9$7 = ["onClick"];
const _hoisted_10$6 = {
  key: 1,
  class: "addition-options"
};
const _hoisted_11$5 = ["onClick"];
const _hoisted_12$5 = {
  key: 2,
  class: "addition-blank"
};
const _hoisted_13$5 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_14$5 = { class: "addition-question__actions" };
const _hoisted_15$5 = ["disabled", "onClick"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "AdditionReviewPaper",
  setup(__props) {
    const questions = [
      {
        id: "addition-01",
        type: "single",
        title: "多级页表",
        question: "关于多级页表，下列说法不正确的是哪一项？",
        options: [
          { label: "A", text: "能够减少页表占用内存大小。" },
          { label: "B", text: "级数越多，平均访问内存时间越长。" },
          { label: "C", text: "有效页表项中都会存储页框号。" },
          { label: "D", text: "使用二级页表平均访存性能优于一级页表。" }
        ],
        answer: "D",
        explanation: "多级页表的主要收益是按需分配下级页表，从而节省页表空间；但页表级数越多，TLB 未命中时的页表遍历通常更长，因此不能说二级页表平均访存性能优于一级页表。"
      },
      {
        id: "addition-02",
        type: "multiple",
        title: "x86 分段地址转换",
        question: "Intel x86 下，从段式地址到线性地址转换中可能需要查找哪些对象？",
        options: [
          { label: "A", text: "GDT" },
          { label: "B", text: "LDT" },
          { label: "C", text: "页目录" },
          { label: "D", text: "页表" }
        ],
        answer: ["A", "B"],
        explanation: "段式地址到线性地址的转换要用段选择子在 GDT 或 LDT 中找到段描述符。页目录和页表属于线性地址到物理地址的分页阶段，不属于本题这一问。"
      },
      {
        id: "addition-03",
        type: "multiple",
        title: "请求式分页",
        question: "页表项 `Valid = 0` 可以说明什么？",
        options: [
          { label: "A", text: "该页当前还未映射到物理页框。" },
          { label: "B", text: "该页已经装入内存。" },
          { label: "C", text: "访问它会触发缺页异常。" },
          { label: "D", text: "页面内容可能位于磁盘上。" }
        ],
        answer: ["A", "C", "D"],
        explanation: "在请求式分页语境下，`Valid = 0` 表示当前页表项无效，访问它会触发缺页异常；页面尚未分配物理页框，或者内容暂时在磁盘上，都是合理解释。"
      },
      {
        id: "addition-04",
        type: "multiple",
        title: "可重入代码",
        question: "关于可重入代码，下列说法正确的是哪些？",
        options: [
          { label: "A", text: "即使系统里只有一个用户进程，也仍然可能需要可重入代码。" },
          { label: "B", text: "可重入代码一般不依赖可修改的全局变量。" },
          { label: "C", text: "可重入代码一般不依赖可修改的静态局部变量。" },
          { label: "D", text: "可重入代码可被多个执行流安全共享。" }
        ],
        answer: ["A", "B", "C", "D"],
        explanation: "A 也正确。即使只有一个用户进程，也可能因为中断、异常、信号处理或递归再次进入同一段代码。可重入代码的关键是不要依赖未受保护的可修改共享状态。"
      },
      {
        id: "addition-05",
        type: "blank",
        title: "Clock 页面置换",
        question: "引用串 `0,1,7,2,3,2,7,1,0,3`，4 个页框，Clock 算法产生多少次缺页？",
        answers: ["6"],
        placeholder: "输入数字",
        explanation: "按这套题库的默认规则，新装入页的访问位设为 1。按照 Clock 的扫描和二次机会逻辑模拟，最终缺页次数是 6 次。"
      },
      {
        id: "addition-06",
        type: "blank",
        title: "按需调页平均延迟因素",
        question: "影响按需调页平均延迟的正确选项是哪些？",
        answers: ["ABCD", "A,B,C,D", "A、B、C、D"],
        placeholder: "例如 A、B、C、D",
        explanation: "题目确认的最终答案是 A、B、C、D，其中 C 对应“进程切换开销”，它也是影响按需调页平均延迟的因素。"
      },
      {
        id: "addition-07",
        type: "blank",
        title: "虚拟内存说法",
        question: "关于虚拟内存说法正确的是哪些？",
        answers: ["ABCD", "A,B,C,D", "A、B、C、D"],
        placeholder: "例如 A、B、C、D",
        explanation: "本题最终答案是 A、B、C、D。易错点在 A：在这套题库的教学语境里，“页表需要占用虚拟地址空间”判为正确。"
      },
      {
        id: "addition-08",
        type: "blank",
        title: "4MB 对齐",
        question: "以下哪个地址不是 4MB 对齐的？",
        answers: ["C"],
        placeholder: "输入选项字母",
        explanation: "正确答案是 C。"
      },
      {
        id: "addition-09",
        type: "blank",
        title: "自映射地址类型",
        question: "页目录自映射计算过程中，正确的地址类型对应哪一项？",
        answers: ["B"],
        placeholder: "输入选项字母",
        explanation: "本题最终正确答案是 B。"
      },
      {
        id: "addition-10",
        type: "blank",
        title: "fork()",
        question: "关于 `fork()`，下列说法不正确的是哪一项？",
        answers: ["D"],
        placeholder: "输入选项字母",
        explanation: "牢记 `pid = fork();` 后，子进程得到返回值 0，父进程得到子进程 PID。因此本题不正确的是 D。"
      },
      {
        id: "addition-11",
        type: "blank",
        title: "PCB",
        question: "PCB 中记录的信息包括哪些？",
        answers: ["BCDEF", "B,C,D,E,F", "B C D E F", "B、C、D、E、F"],
        placeholder: "例如 B、C、D、E、F",
        explanation: "最终正确答案是 B、C、D、E、F。G“代码段长度”和 H“符号表”不属于 PCB 必备记录项。PCB 主要保存进程标识、状态、调度信息、寄存器现场、内存和文件等运行管理信息。"
      },
      {
        id: "addition-12",
        type: "single",
        title: "Peterson 临界区算法",
        question: "Peterson 临界区算法更适合哪种情况的调度？",
        options: [
          { label: "A", text: "抢占式调度" },
          { label: "B", text: "非抢占式调度" }
        ],
        answer: "A",
        explanation: "Peterson 算法面向两个并发执行的进程，通过共享变量和忙等待实现互斥。它默认进程在竞争期间可能被随时切换，因此更典型地适用于抢占式调度环境；在非抢占式调度下，互斥问题本身会被弱化。"
      },
      {
        id: "addition-13",
        type: "single",
        title: "管程",
        question: "关于管程，不正确的是哪一项？",
        options: [
          { label: "A", text: "管程是一种高级同步原语。" },
          { label: "B", text: "管程可以解决信号量无法解决的进程同步问题。" },
          { label: "C", text: "管程需要依赖编译器和语言支持。" },
          { label: "D", text: "同一时刻，只有一个进程可以在管程内执行。" }
        ],
        answer: "B",
        explanation: "A、C、D 都成立。错误在 B：管程不是比信号量“能力更强”，而是把同步机制封装得更安全、更易写。理论上信号量可以实现管程功能，所以不能说管程能解决而信号量不能解决的问题。"
      },
      {
        id: "addition-14",
        type: "multiple",
        title: "信号量集",
        question: "对于信号量集，下列说法错误的是哪些？",
        options: [
          { label: "A", text: "`SP(S,d,e)` 表示每次申请 `d` 个资源，当资源数量小于 `e` 个时便不予分配。" },
          { label: "B", text: "`SP(S,0,1)` 表示互斥信号量。" },
          { label: "C", text: "`SP(S,1,0)` 在 `S = 0` 时禁止任何进程进入临界区。" }
        ],
        answer: ["A", "B"],
        explanation: "`SP(S,d,e)` 的准确条件是 `S ≥ d` 且 `S - d ≥ e`，所以 A 错在只看了 `e` 而忽略了申请量 `d`。`SP(S,0,1)` 申请 0 个资源，没有互斥意义，因此 B 也错。C 是对的，因为 `SP(S,1,0)` 在 `S = 0` 时确实无法分配资源。"
      }
    ];
    const singleAnswers = ref({});
    const multipleAnswers = ref({});
    const blankAnswers = ref({});
    const submitted = ref({});
    const answeredCount = computed(() => questions.filter((question) => hasAnswered(question)).length);
    function normalize(value) {
      return value.trim().toUpperCase().replace(/[，、,\s]+/g, "");
    }
    function hasAnswered(question) {
      var _a, _b;
      if (question.type === "single") return Boolean(singleAnswers.value[question.id]);
      if (question.type === "multiple") return Boolean((_a = multipleAnswers.value[question.id]) == null ? void 0 : _a.length);
      return Boolean((_b = blankAnswers.value[question.id]) == null ? void 0 : _b.trim());
    }
    function isCorrect(question) {
      if (question.type === "single") {
        return singleAnswers.value[question.id] === question.answer;
      }
      if (question.type === "multiple") {
        const selected2 = [...multipleAnswers.value[question.id] || []].sort().join("");
        return selected2 === [...question.answer].sort().join("");
      }
      const selected = normalize(blankAnswers.value[question.id] || "");
      return question.answers.some((answer) => normalize(answer) === selected);
    }
    function selectedText(question) {
      if (question.type === "single") return singleAnswers.value[question.id] || "未作答";
      if (question.type === "multiple") return (multipleAnswers.value[question.id] || []).join("、") || "未作答";
      return blankAnswers.value[question.id] || "未作答";
    }
    function answerText(question) {
      if (question.type === "single") return question.answer;
      if (question.type === "multiple") return question.answer.join("、");
      return question.answers[0];
    }
    function toggleMultiple(questionId, label) {
      const current = new Set(multipleAnswers.value[questionId] || []);
      if (current.has(label)) current.delete(label);
      else current.add(label);
      multipleAnswers.value[questionId] = [...current];
    }
    function submitQuestion(question) {
      if (!hasAnswered(question)) return;
      submitted.value[question.id] = true;
      recordQuestion({
        id: `addition-review:${question.id}`,
        type: question.type === "multiple" ? "multiple" : question.type,
        collection: "addition-review",
        title: `综合测试补充题 - ${question.title}`,
        question: question.question,
        options: question.type === "blank" ? [] : question.options,
        explanation: question.explanation,
        selected: selectedText(question),
        answer: answerText(question),
        correct: isCorrect(question),
        at: Date.now()
      });
    }
    function resetAll() {
      singleAnswers.value = {};
      multipleAnswers.value = {};
      blankAnswers.value = {};
      submitted.value = {};
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$e, [
        createBaseVNode("header", _hoisted_2$c, [
          _cache[1] || (_cache[1] = createBaseVNode("div", null, [
            createBaseVNode("h2", null, "补充综合测试"),
            createBaseVNode("p", null, "共 14 题，按题提交即可看到答案与解析。")
          ], -1)),
          createBaseVNode("div", _hoisted_3$c, [
            createBaseVNode("strong", null, toDisplayString(answeredCount.value) + " / " + toDisplayString(questions.length), 1),
            _cache[0] || (_cache[0] = createBaseVNode("span", null, "已作答", -1))
          ])
        ]),
        (openBlock(), createElementBlock(Fragment, null, renderList(questions, (question, index) => {
          return createBaseVNode("article", {
            key: question.id,
            class: "addition-question"
          }, [
            createBaseVNode("header", _hoisted_4$9, [
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_5$8, "第 " + toDisplayString(index + 1) + " 题", 1),
                createBaseVNode("h3", null, toDisplayString(question.title), 1)
              ]),
              createBaseVNode("span", _hoisted_6$7, toDisplayString(question.type === "single" ? "单选" : question.type === "multiple" ? "多选" : "填空"), 1)
            ]),
            createBaseVNode("p", _hoisted_7$7, toDisplayString(question.question), 1),
            question.type === "single" ? (openBlock(), createElementBlock("div", _hoisted_8$7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(question.options, (option) => {
                return openBlock(), createElementBlock("button", {
                  key: option.label,
                  type: "button",
                  class: normalizeClass({
                    "is-selected": singleAnswers.value[question.id] === option.label,
                    "is-answer": submitted.value[question.id] && question.answer === option.label,
                    "is-wrong": submitted.value[question.id] && singleAnswers.value[question.id] === option.label && singleAnswers.value[question.id] !== question.answer
                  }),
                  onClick: ($event) => singleAnswers.value[question.id] = option.label
                }, [
                  createBaseVNode("strong", null, toDisplayString(option.label), 1),
                  createBaseVNode("span", null, toDisplayString(option.text), 1)
                ], 10, _hoisted_9$7);
              }), 128))
            ])) : question.type === "multiple" ? (openBlock(), createElementBlock("div", _hoisted_10$6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(question.options, (option) => {
                return openBlock(), createElementBlock("button", {
                  key: option.label,
                  type: "button",
                  class: normalizeClass({
                    "is-selected": (multipleAnswers.value[question.id] || []).includes(option.label),
                    "is-answer": submitted.value[question.id] && question.answer.includes(option.label),
                    "is-wrong": submitted.value[question.id] && (multipleAnswers.value[question.id] || []).includes(option.label) && !question.answer.includes(option.label)
                  }),
                  onClick: ($event) => toggleMultiple(question.id, option.label)
                }, [
                  createBaseVNode("strong", null, toDisplayString(option.label), 1),
                  createBaseVNode("span", null, toDisplayString(option.text), 1)
                ], 10, _hoisted_11$5);
              }), 128))
            ])) : (openBlock(), createElementBlock("label", _hoisted_12$5, [
              _cache[2] || (_cache[2] = createBaseVNode("span", null, "你的作答", -1)),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": ($event) => blankAnswers.value[question.id] = $event,
                type: "text",
                placeholder: question.placeholder || "输入答案"
              }, null, 8, _hoisted_13$5), [
                [vModelText, blankAnswers.value[question.id]]
              ])
            ])),
            createBaseVNode("div", _hoisted_14$5, [
              createBaseVNode("button", {
                type: "button",
                disabled: !hasAnswered(question),
                onClick: ($event) => submitQuestion(question)
              }, toDisplayString(submitted.value[question.id] ? "再次提交本题" : "提交本题"), 9, _hoisted_15$5)
            ]),
            submitted.value[question.id] ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(["addition-result", { "is-correct": isCorrect(question) }])
            }, [
              createBaseVNode("strong", null, toDisplayString(isCorrect(question) ? "回答正确" : `回答错误，标准答案：${answerText(question)}`), 1),
              createBaseVNode("p", null, toDisplayString(question.explanation), 1)
            ], 2)) : createCommentVNode("", true)
          ]);
        }), 64)),
        createBaseVNode("footer", { class: "addition-paper__footer" }, [
          createBaseVNode("button", {
            type: "button",
            onClick: resetAll
          }, "重新作答全部题目")
        ])
      ]);
    };
  }
});
const AdditionReviewPaper = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-39342383"]]);
const _hoisted_1$d = {
  key: 0,
  class: "exam-supplement exam-supplement--code"
};
const _hoisted_2$b = {
  key: 1,
  class: "exam-supplement exam-supplement--table"
};
const _hoisted_3$b = {
  key: 0,
  class: "exam-supplement__caption"
};
const _hoisted_4$8 = { key: 0 };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ExamSupplements",
  props: {
    blocks: {}
  },
  setup(__props) {
    function supplementKey(block, index) {
      if (block.type === "code") return `${block.type}:${block.language || "plain"}:${index}`;
      return `${block.type}:${block.caption || "table"}:${index}`;
    }
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.blocks, (block, blockIndex) => {
        var _a;
        return openBlock(), createElementBlock(Fragment, {
          key: supplementKey(block, blockIndex)
        }, [
          block.type === "code" ? (openBlock(), createElementBlock("pre", _hoisted_1$d, toDisplayString(block.content), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$b, [
            block.caption ? (openBlock(), createElementBlock("p", _hoisted_3$b, toDisplayString(block.caption), 1)) : createCommentVNode("", true),
            createBaseVNode("table", null, [
              ((_a = block.headers) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("thead", _hoisted_4$8, [
                createBaseVNode("tr", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(block.headers, (header) => {
                    return openBlock(), createElementBlock("th", { key: header }, toDisplayString(header), 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(block.rows, (row, rowIndex) => {
                  return openBlock(), createElementBlock("tr", { key: rowIndex }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, cellIndex) => {
                      return openBlock(), createElementBlock("td", {
                        key: `${rowIndex}-${cellIndex}`
                      }, toDisplayString(cell), 1);
                    }), 128))
                  ]);
                }), 128))
              ])
            ])
          ]))
        ], 64);
      }), 128);
    };
  }
});
const ExamSupplements = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-5b8fcb3f"]]);
const _hoisted_1$c = { class: "exam-paper" };
const _hoisted_2$a = { class: "exam-paper__hero" };
const _hoisted_3$a = { class: "exam-paper__score" };
const _hoisted_4$7 = { class: "exam-paper__meta" };
const _hoisted_5$7 = { class: "exam-section" };
const _hoisted_6$6 = { class: "exam-question__stem" };
const _hoisted_7$6 = { class: "exam-question__actions" };
const _hoisted_8$6 = ["onClick"];
const _hoisted_9$6 = ["onClick"];
const _hoisted_10$5 = { class: "exam-section" };
const _hoisted_11$4 = { class: "exam-question__stem" };
const _hoisted_12$4 = { class: "exam-options" };
const _hoisted_13$4 = ["onClick"];
const _hoisted_14$4 = { class: "exam-section" };
const _hoisted_15$4 = { class: "exam-blank" };
const _hoisted_16$3 = ["onUpdate:modelValue"];
const _hoisted_17$3 = { class: "exam-section" };
const _hoisted_18$3 = { class: "exam-subjective__header" };
const _hoisted_19$3 = { class: "exam-subjective__prompt" };
const _hoisted_20$3 = ["onUpdate:modelValue"];
const _hoisted_21$3 = {
  key: 0,
  class: "exam-reference"
};
const _hoisted_22$3 = { key: 0 };
const _hoisted_23$2 = { key: 1 };
const _hoisted_24$2 = { class: "exam-judge" };
const _hoisted_25$2 = ["onClick"];
const _hoisted_26$2 = ["onClick"];
const _hoisted_27$2 = { class: "exam-paper__footer" };
const _hoisted_28$2 = ["disabled"];
const _hoisted_29$2 = { key: 1 };
const _hoisted_30$2 = { key: 2 };
const _hoisted_31$2 = { key: 3 };
const variableStorageSnippet = '#include <stdio.h>\nint a = 100;\nint b;\nint main() {\n    int x[100];\n    int y = 10;\n    int *p = &y, *q = &b;\n    printf("a=%d, b=%d, x=0x%lx, p=0x%lx, q=0x%lx\\n", a,\n        b, (unsigned long)x, (unsigned long)p, (unsigned long)q);\n}';
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ExamPaper",
  setup(__props) {
    const trueFalseQuestions = [
      {
        id: "tf-01",
        type: "true-false",
        title: "内核态与用户态",
        question: "现代操作系统中，内核态和用户态的概念主要是为了保护操作系统的核心资源，并防止应用程序随意访问关键硬件。",
        answer: true,
        points: 2,
        explanation: "内核态/用户态的核心作用就是通过特权级隔离保护内核与关键硬件资源。"
      },
      {
        id: "tf-02",
        type: "true-false",
        title: "操作系统功能",
        question: "操作系统的主要功能包括进程管理、内存管理、文件系统、设备管理和安全管理等。",
        answer: true,
        points: 2,
        explanation: "这些都是操作系统常见的核心管理职责。"
      },
      {
        id: "tf-03",
        type: "true-false",
        title: "微内核与宏内核",
        question: "同一操作系统如果采用微内核架构比宏内核架构占用空间更小，但功能更强大且更易扩展。",
        answer: false,
        points: 2,
        explanation: "微内核通常把更多服务移到用户态，内核本体更小、扩展性较好，但不能直接推出“功能更强大”。"
      },
      {
        id: "tf-04",
        type: "true-false",
        title: "段式管理",
        question: "段式内存管理支持按照程序中“逻辑段”来分配内存，适合按功能或数据结构对内存进行更直观的划分。",
        answer: true,
        points: 2,
        explanation: "段式管理面向逻辑段，如代码段、数据段、栈段等。"
      },
      {
        id: "tf-05",
        type: "true-false",
        title: "缺页异常",
        question: "缺页异常是由程序中 Bug 引起的，需要程序员修复后才能消除。",
        answer: false,
        points: 2,
        explanation: "缺页异常是请求分页和虚拟内存中的正常机制，不等同于程序错误。"
      },
      {
        id: "tf-06",
        type: "true-false",
        title: "内核级线程阻塞",
        question: "内核级线程在进行阻塞调用时不会阻塞同一进程的其他线程，因为内核可为其他可运行线程分配 CPU。",
        answer: true,
        points: 2,
        explanation: "内核能感知并调度内核级线程，一个线程阻塞时，同进程其他可运行线程仍可被调度。"
      },
      {
        id: "tf-07",
        type: "true-false",
        title: "多对多线程模型",
        question: "在多对多线程模型中，多个用户线程可以映射到多个内核线程上，从而既保留用户线程灵活性，又避免单线程阻塞问题。",
        answer: true,
        points: 2,
        explanation: "多对多模型试图结合用户级线程灵活性和内核级并行/阻塞处理能力。"
      },
      {
        id: "tf-08",
        type: "true-false",
        title: "自旋锁适用场景",
        question: "自旋锁在高并发且临界区执行时间较长的场景下一般更有效率，因为线程会一直占用 CPU 等待锁释放，避免上下文切换。",
        answer: false,
        points: 2,
        explanation: "自旋锁适合临界区很短的场景；等待时间长时会浪费 CPU。"
      },
      {
        id: "tf-09",
        type: "true-false",
        title: "信号量用途",
        question: "使用信号量既可以实现互斥，也可以实现同步的功能。",
        answer: true,
        points: 2,
        explanation: "二元信号量可用于互斥，计数或事件信号量也可表达同步约束。"
      },
      {
        id: "tf-10",
        type: "true-false",
        title: "线程资源",
        question: "同一进程内的多个线程共享地址空间，但它们各自拥有独立的寄存器上下文和栈空间。",
        answer: true,
        points: 2,
        explanation: "线程共享进程资源，但每个线程需要自己的执行现场和栈。"
      }
    ];
    const singleChoiceQuestions = [
      {
        id: "choice-01",
        type: "single",
        title: "内存空间管理数据结构",
        question: "关于内存空间管理的数据结构，下面说法错误的是哪一项？",
        options: [
          { label: "A", text: "位图表示法成本固定" },
          { label: "B", text: "链表表示法容错能力差" },
          { label: "C", text: "位图表示法时间成本低" },
          { label: "D", text: "链表表示法的空间成本取决于程序的数量" }
        ],
        answer: "C",
        points: 2,
        explanation: "位图空间开销固定，但查找连续空闲块通常需要扫描位图，不能笼统说时间成本低。"
      },
      {
        id: "choice-02",
        type: "single",
        title: "页表项结构",
        question: "关于页表项结构，正确的是哪一项？",
        options: [
          { label: "A", text: "当操作系统把该页从物理内存调出时，会对有效位置位" },
          { label: "B", text: "当硬件在写入一个页面时，硬件将该页的修改位置为 0" },
          { label: "C", text: "页表项可用于实现页面到页框的映射" },
          { label: "D", text: "页表项会保存对应页面的外存地址" }
        ],
        answer: "C",
        points: 2,
        explanation: "页表项的基本作用是记录虚拟页到物理页框的映射及权限/状态位。"
      },
      {
        id: "choice-03",
        type: "single",
        title: "多级页表",
        question: "关于多级页表，下列说法不正确的是哪一项？",
        options: [
          { label: "A", text: "能够减少页表占用内存的大小" },
          { label: "B", text: "除了顶级页表，其他级别页表可按需动态调入内存" },
          { label: "C", text: "有效的页表项中都会存储页框号" },
          { label: "D", text: "使用三级页表的平均访存性能优于二级页表" }
        ],
        answer: "D",
        points: 2,
        explanation: "页表级数越多，未命中 TLB 时页表遍历通常越长，不能说三级平均访存性能优于二级。"
      },
      {
        id: "choice-04",
        type: "single",
        title: "陷入内核与上下文切换",
        question: "以下说法正确的是哪一项？",
        options: [
          { label: "A", text: "进程上下文切换过程一定会陷入内核" },
          { label: "B", text: "陷入内核一定会导致进程切换" },
          { label: "C", text: "正在执行的程序不可以主动放弃 CPU" },
          { label: "D", text: "系统调用一定会导致进程上下文切换" }
        ],
        answer: "A",
        points: 2,
        explanation: "进程切换由内核完成；但系统调用或中断进入内核后不一定切换到另一个进程。"
      },
      {
        id: "choice-05",
        type: "single",
        title: "线程与进程",
        question: "关于线程与进程，错误的是哪一项？",
        options: [
          { label: "A", text: "一个进程可以拥有多个线程，而一个线程同时只能被一个进程所拥有" },
          { label: "B", text: "进程是资源分配的基本单位，线程是处理机调度的基本单位" },
          { label: "C", text: "使用多线程能够更好的释放多核系统的性能" },
          { label: "D", text: "相比单线程，使用多线程总能获得更好的性能" }
        ],
        answer: "D",
        points: 2,
        explanation: "多线程有同步、调度和上下文切换开销，不能保证总是优于单线程。"
      },
      {
        id: "choice-06",
        type: "single",
        title: "PV 操作",
        question: "关于 PV 操作，错误的是哪一项？",
        options: [
          { label: "A", text: "信号量可以用来解决任何进程同步问题" },
          { label: "B", text: "进程执行 P 操作阻塞时，不会占用 CPU 资源" },
          { label: "C", text: "进程 A、B 调用 P(S) 各一次后，信号量 S 的值与调用顺序有关" },
          { label: "D", text: "信号量操作是原子操作" }
        ],
        answer: "C",
        points: 2,
        explanation: "两次 P 操作对信号量值的净影响相同，最终值不应取决于 A、B 的调用顺序。"
      },
      {
        id: "choice-07",
        type: "single",
        title: "局部性原理",
        question: "关于程序的局部性原理，错误的是哪一项？",
        options: [
          { label: "A", text: "局部性原理包括时间局部性和空间局部性" },
          { label: "B", text: "虚拟存储机制的有效运转依赖程序的局部性原理" },
          { label: "C", text: "程序中的循环结构会导致程序的空间局部性" },
          { label: "D", text: "Cache-主存机制的有效运转依赖程序的局部性原理" }
        ],
        answer: "C",
        points: 2,
        explanation: "循环通常体现时间局部性；顺序访问数组等更常体现空间局部性。"
      },
      {
        id: "choice-08",
        type: "single",
        title: "页面置换算法",
        question: "关于页面置换算法，以下说法不正确的是哪一项？",
        options: [
          { label: "A", text: "二次机会算法是对 FIFO 的改进" },
          { label: "B", text: "Aging 算法是对 LRU 算法的高效近似实现" },
          { label: "C", text: "WSClock 算法仅需要在页表中扫描" },
          { label: "D", text: "工作集算法的思路是驱逐不在工作集中的页面" }
        ],
        answer: "C",
        points: 2,
        explanation: "WSClock 需要维护类似时钟的页面链表并结合访问位、修改位和时间信息，不是“仅扫描页表”。"
      },
      {
        id: "choice-09",
        type: "single",
        title: "快表",
        question: "关于快表，错误的是哪一项？",
        options: [
          { label: "A", text: "使用快表能使得页表查询速度更快" },
          { label: "B", text: "快表的命中率越高，访存的速度越快" },
          { label: "C", text: "反置页表无法使用快表加速" },
          { label: "D", text: "快表项需要记录物理块号及其对应的虚拟页号" }
        ],
        answer: "C",
        points: 2,
        explanation: "反置页表同样可以用 TLB 缓存近期地址转换结果。"
      },
      {
        id: "choice-10",
        type: "single",
        title: "覆盖与交换",
        question: "下列说法错误的是哪一项？",
        options: [
          { label: "A", text: "覆盖可减少一个程序运行所需的空间" },
          { label: "B", text: "覆盖对应用程序员不透明" },
          { label: "C", text: "交换是由操作系统实现的" },
          { label: "D", text: "覆盖在不同作业或程序之间进行" }
        ],
        answer: "D",
        points: 2,
        explanation: "覆盖通常是在同一程序内部按模块复用内存；交换才发生在进程/作业与外存之间。"
      }
    ];
    const blankQuestions = [
      {
        id: "blank-01-fifo",
        type: "blank",
        title: "FIFO 缺页次数",
        question: "页面访问序列 A B C D E F A A C F G D A C G D C E，4 个页框，FIFO 产生多少次缺页中断？",
        answers: ["11"],
        answerText: "11",
        points: 2,
        explanation: "按 FIFO 依次淘汰最早进入内存的页面，共 11 次缺页。"
      },
      {
        id: "blank-01-clock",
        type: "blank",
        title: "CLOCK 缺页次数",
        question: "同一访问序列、4 个页框，CLOCK 算法产生多少次缺页中断？",
        answers: ["11"],
        answerText: "11",
        points: 2,
        explanation: "按装入/访问置引用位、替换时扫描清零的常规定义，共 11 次缺页。"
      },
      {
        id: "blank-02-thrashing",
        type: "blank",
        title: "频繁调页现象",
        question: "并发水平上升导致每个进程常驻集减小、缺页率上升、系统频繁调页，这种现象称为什么？",
        answers: ["抖动", "颠簸", "thrashing"],
        answerText: "抖动 / 颠簸（thrashing）",
        points: 2,
        explanation: "工作集不足导致大量时间花在调页上，就是抖动。"
      },
      {
        id: "blank-03-state",
        type: "blank",
        title: "状态转换",
        question: "在操作系统进程状态模型中，进程不能直接从哪一种状态转换到运行态？",
        answers: ["阻塞态", "阻塞状态", "等待态", "等待状态", "blocked"],
        answerText: "阻塞态 / 等待态",
        points: 2,
        explanation: "阻塞进程等待事件完成后通常先进入就绪态，再由调度器分配 CPU。"
      },
      {
        id: "blank-04-uboot",
        type: "blank",
        title: "U-Boot 阶段",
        question: "U-Boot 程序中通常用 C 语言来实现的部分称为什么？",
        answers: ["第二阶段", "stage2", "stage 2", "secondstage", "second stage"],
        answerText: "第二阶段（stage 2）",
        points: 2,
        explanation: "U-Boot 早期启动通常先由汇编完成必要初始化，再进入主要由 C 编写的第二阶段。"
      },
      {
        id: "blank-05-worst-fit",
        type: "blank",
        title: "可变分区分配",
        question: "可变分区存储分配算法中，哪种算法总是挑选可以容纳作业的最大空闲区进行分配？",
        answers: ["最坏适应", "最坏适应算法", "worstfit", "worst fit"],
        answerText: "最坏适应算法（Worst Fit）",
        points: 2,
        explanation: "Worst Fit 每次选择最大的可用空闲分区。"
      },
      {
        id: "blank-06-data",
        type: "blank",
        title: "变量 a 所在段",
        question: "程序中全局变量 int a = 100; 装载后通常在哪个段中分配存储空间？",
        answers: ["数据段", ".data", "data", "已初始化数据段"],
        answerText: "数据段（.data）",
        supplements: [
          {
            type: "code",
            language: "c",
            content: variableStorageSnippet
          }
        ],
        points: 2,
        explanation: "已初始化全局变量通常放在 .data。"
      },
      {
        id: "blank-06-stack",
        type: "blank",
        title: "变量 x 所在段",
        question: "函数内局部数组 int x[100]; 运行时通常在哪个段中分配存储空间？",
        answers: ["栈", "栈段", "stack"],
        answerText: "栈段（stack）",
        supplements: [
          {
            type: "code",
            language: "c",
            content: variableStorageSnippet
          }
        ],
        points: 2,
        explanation: "普通自动局部变量通常分配在线程栈上。"
      },
      {
        id: "blank-07-dekker-wait",
        type: "blank",
        title: "Dekker 等待语句",
        question: "补全 Dekker 算法中 P0 放弃意向后等待 turn 改变的语句。",
        answers: ["while(turn==1)", "while(turn==1);", "while(turn!=0)", "while(turn!=0);"],
        answerText: "while (turn == 1);",
        supplements: [
          {
            type: "code",
            content: "1   ...\n2   pturn = true;\n3   while (qturn) {\n4\n5       if (turn == 1) {\n6           pturn = false;\n7           ________\n8           pturn = true;\n9       }\n10  }\n11  访问临界区\n12\n13  pturn = false;\n14  ..."
          }
        ],
        points: 2,
        explanation: "P0 暂时撤销 pturn 后，应等待 turn 不再偏向 P1，再重新声明进入意向。"
      },
      {
        id: "blank-07-dekker-turn",
        type: "blank",
        title: "Dekker 退出语句",
        question: "补全 Dekker 算法中 P0 离开临界区时交出优先权的语句。",
        answers: ["turn=1", "turn=1;"],
        answerText: "turn = 1;",
        supplements: [
          {
            type: "code",
            content: "1   ...\n2   pturn = true;\n3   while (qturn) {\n4\n5       if (turn == 1) {\n6           pturn = false;\n7           while (turn == 1);\n8           pturn = true;\n9       }\n10  }\n11  访问临界区\n12  ________\n13  pturn = false;\n14  ..."
          }
        ],
        points: 2,
        explanation: "P0 退出临界区时把 turn 交给 P1，再撤销自己的进入意向。"
      }
    ];
    const subjectiveQuestions = [
      {
        id: "subj-01-page-table-size",
        title: "四-1 页表项数量",
        points: 8,
        prompt: "在一个 32 位虚拟内存系统中，页面大小为 4KB。分别计算页表被全部占用时，1 级页表和 4 级页表需要多少页表项；再计算一个进程只分配 1 页内存时，1 级页表和 4 级页表需要分配多少页表项。",
        answer: [
          "32 位地址、4KB 页面意味着页内偏移 12 位，虚拟页号 20 位，完整地址空间共有 2^20 个虚拟页。",
          "页表全部占用时，1 级页表需要 2^20 个页表项，也就是 1M 个页表项。",
          "4 级页表若把 20 位虚拟页号平均分给 4 级，则每级使用 5 位索引；全部占用时各级页表项总数为 2^5 + 2^10 + 2^15 + 2^20。",
          "一个进程只分配 1 页内存时，1 级页表仍需要覆盖完整虚拟页号空间，即 2^20 个页表项。",
          "4 级页表只需沿目标虚拟页的一条路径分配页表页；每级页表页包含 2^5 = 32 个页表项，因此共分配 4 x 32 = 128 个页表项。"
        ],
        rubric: [
          "说明 32 位、4KB 页对应 20 位虚拟页号。",
          "给出 1 级满表需要 2^20 个页表项。",
          "给出 4 级满表的求和式 2^5 + 2^10 + 2^15 + 2^20。",
          "说明只分配 1 页时，1 级仍需 2^20 项，4 级为 128 项。"
        ]
      },
      {
        id: "subj-02-segment-page-translation",
        title: "四-2 段页式地址转换",
        points: 7,
        prompt: "20 位虚拟地址格式为：虚拟段号 4 位、虚拟页号 8 位、页内偏移 8 位。物理地址为：物理页号 8 位、页内偏移 8 位。根据原卷给出的段表、页表项格式和物理内存内容，写出各条 Load/Store 指令的结果。",
        details: [
          "指令：Load [0x30111]；Store [0x30116]；Load [0x42020]；Load [0x00112]；Store [0x00210]；Load [0x21211]；Load [0x11135]",
          "段表：0 -> base 0x2000, max 0x20, Valid；1 -> base 0x1000, max 0x10, Valid；2 -> base 0x3100, max 0x40, Invalid；3 -> base 0x4000, max 0x20, Valid。",
          "PTE 标志：0x00 Invalid；0x06 Valid Read Only；0x07 Valid Read/Write。"
        ],
        answer: [
          "Load [0x30111] = 0x13。段 3 有效，VPN=0x01，PTE 为 frame 0x31 / RO，物理地址 0x3111，读到 0x13。",
          "Store [0x30116] = Error。段 3、VPN=0x01 只读，不能写。",
          "Load [0x42020] = Error。段号 4 超出最大段号 3。",
          "Load [0x00112] = Error。段 0、VPN=0x01 的 PTE 标志为 Invalid。",
          "Store [0x00210] = OK。段 0、VPN=0x02 映射到 frame 0x10 且可读写。",
          "Load [0x21211] = Error。段 2 的段表项 Invalid。",
          "Load [0x11135] = Error。段 1 有效页面数为 0x10，VPN=0x11 越界。"
        ],
        rubric: [
          "先拆出段号、页号、偏移。",
          "检查段有效性和段内页号范围。",
          "检查 PTE 有效位和读写权限。",
          "Load 成功时用物理页号拼接偏移读取字节。"
        ],
        supplements: [
          {
            type: "table",
            caption: "虚拟地址格式",
            headers: ["字段", "位数"],
            rows: [
              ["虚拟段号", "4"],
              ["虚拟页号", "8"],
              ["页内偏移", "8"]
            ]
          },
          {
            type: "table",
            caption: "物理地址格式",
            headers: ["字段", "位数"],
            rows: [
              ["物理页号", "8"],
              ["页内偏移", "8"]
            ]
          },
          {
            type: "table",
            caption: "指令结果填写表",
            headers: ["指令", "结果"],
            rows: [
              ["Load [0x30111]", ""],
              ["Store [0x30116]", ""],
              ["Load [0x42020]", ""],
              ["Load [0x00112]", ""],
              ["Store [0x00210]", ""],
              ["Load [0x21211]", ""],
              ["Load [0x11135]", ""]
            ]
          },
          {
            type: "table",
            caption: "段表",
            headers: ["段号", "页表基地址", "段内最大页面数", "有效状态"],
            rows: [
              ["0", "0x2000", "0x20", "Valid"],
              ["1", "0x1000", "0x10", "Valid"],
              ["2", "0x3100", "0x40", "Invalid"],
              ["3", "0x4000", "0x20", "Valid"]
            ]
          },
          {
            type: "table",
            caption: "页表项（PTE）格式",
            headers: ["第 1 字节", "第 2 字节"],
            rows: [
              ["物理页框号", "标志位"],
              ["", "0x00 = Invalid"],
              ["", "0x06 = Valid, Read Only"],
              ["", "0x07 = Valid, Read/Write"]
            ]
          },
          {
            type: "table",
            caption: "物理内存（节选）",
            headers: ["Address", "+0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+A", "+B", "+C", "+D", "+E", "+F"],
            rows: [
              ["0x0000", "0E", "0F", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1A", "1B", "1C", "1D"],
              ["0x0010", "1E", "1F", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2A", "2B", "2C", "2D"],
              ["0x1010", "40", "41", "20", "07", "44", "45", "46", "47", "48", "49", "4A", "4B", "4C", "4D", "4E", "4F"],
              ["0x1020", "40", "07", "41", "06", "30", "06", "31", "07", "00", "07", "00", "00", "00", "00", "00", "00"],
              ["0x1030", "51", "07", "4F", "07", "3F", "07", "31", "07", "01", "07", "00", "00", "00", "00", "00", "00"],
              ["0x1040", "40", "07", "41", "07", "31", "07", "31", "07", "02", "07", "00", "00", "00", "00", "00", "00"],
              ["0x2000", "02", "20", "10", "00", "10", "07", "05", "50", "06", "60", "07", "70", "08", "80", "09", "90"],
              ["0x2010", "0A", "A0", "0B", "B0", "0C", "C0", "0D", "D0", "0E", "E0", "0F", "F0", "10", "01", "11", "11"],
              ["0x2020", "12", "21", "13", "31", "14", "41", "15", "51", "16", "61", "17", "71", "18", "81", "19", "91"],
              ["0x2030", "10", "06", "11", "00", "12", "07", "40", "07", "41", "07", "00", "00", "00", "00", "00", "00"],
              ["0x30F0", "00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF"],
              ["0x3100", "01", "12", "23", "34", "45", "56", "67", "78", "89", "9A", "AB", "BC", "CD", "DE", "EF", "00"],
              ["0x3110", "02", "13", "24", "35", "20", "07", "68", "79", "8A", "9B", "AC", "BD", "CE", "DF", "F0", "01"],
              ["0x3120", "03", "06", "25", "36", "47", "58", "69", "7A", "8B", "9C", "AD", "BE", "CF", "E0", "F1", "02"],
              ["0x3130", "04", "15", "26", "37", "48", "59", "70", "7B", "8C", "9D", "AE", "BF", "D0", "E1", "F2", "03"],
              ["0x4000", "30", "00", "31", "06", "20", "07", "33", "07", "34", "06", "35", "00", "43", "38", "32", "79"],
              ["0x4010", "50", "28", "84", "19", "71", "69", "39", "93", "75", "10", "58", "20", "97", "49", "44", "59"],
              ["0x4020", "23", "07", "20", "07", "00", "06", "62", "08", "99", "86", "28", "03", "48", "25", "34", "21"]
            ]
          }
        ]
      },
      {
        id: "subj-03-self-map",
        title: "五 页表自映射",
        points: 5,
        prompt: "一个 32 位虚拟存储系统采用两级页表，31..22 位为第一级页表索引，21..12 位为第二级页表索引，11..0 位为页内偏移。如果从 0x2C000000 开始映射 4MB 的页表，请给出一级页表的起始虚拟地址，以及一级页表中映射自己的表项的虚拟地址。",
        answer: [
          "页表窗口基址 PT_base = 0x2C000000 = r << 22，因此自映射索引 r = 0xB0。",
          "4MB = 2^22，页表窗口中的第 r 个 4KB 页对应一级页表自身。",
          "一级页表的起始虚拟地址为 PD_base = (r << 22) | (r << 12) = 0x2C0B0000。",
          "一级页表中映射自己的表项是第 r 个 PDE，每个 32 位地址占 4 字节。",
          "该表项虚拟地址为 PD_base + r * 4 = 0x2C0B0000 + 0x2C0 = 0x2C0B02C0。"
        ],
        rubric: [
          "求出自映射索引 r = 0xB0。",
          "给出一级页表起始虚拟地址 0x2C0B0000。",
          "说明 32 位地址占 4 字节。",
          "给出自映射表项虚拟地址 0x2C0B02C0。"
        ]
      },
      {
        id: "subj-04-process-thread",
        title: "六-1 进程与线程",
        points: 5,
        prompt: "简述进程与线程的区别和联系。",
        answer: [
          "进程是资源分配和保护的基本单位，通常拥有独立地址空间、打开文件、信号处理等资源。",
          "线程是处理机调度和执行的基本单位，拥有自己的程序计数器、寄存器上下文和栈。",
          "同一进程内的多个线程共享该进程的地址空间和多数资源，因此通信方便，但需要同步互斥保护共享数据。",
          "不同进程之间资源隔离更强，进程间通信和切换开销通常大于同进程线程。",
          "线程必须依附于某个进程存在，一个进程可以包含一个或多个线程。"
        ],
        rubric: [
          "区分资源拥有者和调度执行单元。",
          "说明线程独立执行现场和共享进程资源。",
          "说明通信、隔离或切换开销差异。",
          "说明线程与进程的从属关系。"
        ]
      },
      {
        id: "subj-05-process-switch",
        title: "六-2 进程切换",
        points: 5,
        prompt: "简述进程切换的步骤。",
        answer: [
          "发生时钟中断、系统调用阻塞、缺页或其他调度事件后，处理器陷入内核。",
          "内核保存当前进程的现场，包括 PC、通用寄存器、栈指针和必要的处理器状态，并写入该进程 PCB。",
          "更新当前进程状态，将其放入就绪、阻塞或其他相应队列。",
          "调度器按照调度策略选择下一个可运行进程。",
          "切换到新进程的地址空间和内核栈，必要时更新页表基址、MMU 状态并处理 TLB。",
          "从新进程 PCB 恢复寄存器现场和 PC。",
          "从内核返回，新进程从被保存的位置继续执行。"
        ],
        rubric: [
          "说明切换由陷入内核后的内核代码完成。",
          "说明保存旧进程现场。",
          "说明调度选择新进程。",
          "说明切换地址空间、内核栈或相关硬件状态。",
          "说明恢复新进程现场并返回执行。"
        ]
      },
      {
        id: "subj-06-pv-reader-writer",
        title: "七 进程互斥与同步",
        points: 10,
        prompt: "公园每天最多允许 N 人购票入园。查询者 Q 读余票数量，购票者 B 写余票数量，每次只能买一张票。要求：Q 和 B 按到达顺序访问；多个 Q 连续到达时允许并发读；余票为 0 时不允许 B 执行写操作。基于 PV 操作设计算法。",
        answer: [
          "可使用公平读写者方案。设 semaphore order = 1, rw = 1, mutex = 1; int readcnt = 0; int tickets = N。",
          "Q：P(order); P(mutex); readcnt++; if (readcnt == 1) P(rw); V(mutex); V(order); 读 tickets; P(mutex); readcnt--; if (readcnt == 0) V(rw); V(mutex)。",
          "B：P(order); P(rw); V(order); if (tickets > 0) tickets--; else 不写; V(rw)。",
          "order 保证按到达顺序进入等待队列；连续到达的 Q 在已有读者持有 rw 时可继续并发读；B 独占 rw，且 tickets == 0 时不修改余票。"
        ],
        rubric: [
          "有到达顺序控制。",
          "允许连续读者并发。",
          "写者互斥。",
          "购票前检查余票。",
          "PV 操作配对正确，无明显死锁。"
        ]
      }
    ];
    const trueFalseAnswers = ref({});
    const choiceAnswers = ref({});
    const blankAnswers = ref({});
    const subjectiveAnswers = ref({});
    const subjectiveJudgements = ref({});
    const submitted = ref(false);
    const objectiveQuestions = computed(() => [
      ...trueFalseQuestions,
      ...singleChoiceQuestions,
      ...blankQuestions
    ]);
    const objectiveMaxScore = computed(() => objectiveQuestions.value.reduce((sum, question) => sum + question.points, 0));
    const subjectiveMaxScore = computed(() => subjectiveQuestions.reduce((sum, question) => sum + question.points, 0));
    const totalScore = computed(() => objectiveMaxScore.value + subjectiveMaxScore.value);
    const objectiveAnsweredCount = computed(() => {
      const trueFalseCount = trueFalseQuestions.filter((question) => typeof trueFalseAnswers.value[question.id] === "boolean").length;
      const choiceCount = singleChoiceQuestions.filter((question) => Boolean(choiceAnswers.value[question.id])).length;
      const blankCount = blankQuestions.filter((question) => {
        var _a;
        return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
      }).length;
      return trueFalseCount + choiceCount + blankCount;
    });
    const subjectiveAnsweredCount = computed(() => subjectiveQuestions.filter((question) => {
      var _a;
      return Boolean((_a = subjectiveAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }).length);
    const answeredCount = computed(() => objectiveAnsweredCount.value + subjectiveAnsweredCount.value);
    const questionCount = computed(() => objectiveQuestions.value.length + subjectiveQuestions.length);
    const unansweredCount = computed(() => questionCount.value - answeredCount.value);
    const subjectiveJudgedCount = computed(() => subjectiveQuestions.filter((question) => typeof subjectiveJudgements.value[question.id] === "boolean").length);
    const objectiveScore = computed(() => {
      if (!submitted.value) return 0;
      return objectiveQuestions.value.reduce((sum, question) => isObjectiveCorrect(question) ? sum + question.points : sum, 0);
    });
    function normalizeAnswer(value) {
      return value.trim().toLowerCase().replace(/[，。；;：:、,.]/g, "").replace(/[（）()]/g, "").replace(/\s+/g, "");
    }
    function boolLabel(value) {
      if (typeof value !== "boolean") return "未作答";
      return value ? "√" : "×";
    }
    function isBlankCorrect(question) {
      const selected = normalizeAnswer(blankAnswers.value[question.id] || "");
      return question.answers.some((answer) => normalizeAnswer(answer) === selected);
    }
    function isObjectiveCorrect(question) {
      if (question.type === "true-false") {
        return trueFalseAnswers.value[question.id] === question.answer;
      }
      if (question.type === "single") {
        return choiceAnswers.value[question.id] === question.answer;
      }
      return isBlankCorrect(question);
    }
    function hasObjectiveAnswer(question) {
      var _a;
      if (question.type === "true-false") {
        return typeof trueFalseAnswers.value[question.id] === "boolean";
      }
      if (question.type === "single") {
        return Boolean(choiceAnswers.value[question.id]);
      }
      return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }
    function selectedText(question) {
      if (question.type === "true-false") return boolLabel(trueFalseAnswers.value[question.id]);
      if (question.type === "single") return choiceAnswers.value[question.id] || "未作答";
      return blankAnswers.value[question.id] || "未作答";
    }
    function answerText(question) {
      if (question.type === "true-false") return boolLabel(question.answer);
      if (question.type === "single") return question.answer;
      return question.answerText;
    }
    function objectiveOptions(question) {
      if (question.type === "true-false") {
        return [
          { label: boolLabel(true), text: "正确" },
          { label: boolLabel(false), text: "错误" }
        ];
      }
      if (question.type === "single") return question.options;
      return [];
    }
    function subjectiveQuestionText(question) {
      return [question.prompt, ...question.details || []].join("\n");
    }
    function recordObjective(question) {
      recordQuestion({
        id: `exam:2025-midterm:${question.id}`,
        type: question.type === "true-false" ? "true-false" : question.type,
        collection: "2025-midterm",
        title: `2025 期中 - ${question.title}`,
        question: question.question,
        options: objectiveOptions(question),
        explanation: question.explanation,
        selected: selectedText(question),
        answer: answerText(question),
        correct: isObjectiveCorrect(question),
        at: Date.now()
      });
    }
    function submitPaper() {
      if (answeredCount.value === 0) return;
      submitted.value = true;
      objectiveQuestions.value.filter(hasObjectiveAnswer).forEach(recordObjective);
    }
    function judgeSubjective(question, correct) {
      var _a;
      subjectiveJudgements.value[question.id] = correct;
      recordQuestion({
        id: `exam:2025-midterm:${question.id}`,
        type: "subjective",
        collection: "2025-midterm",
        title: `2025 期中 - ${question.title}`,
        question: subjectiveQuestionText(question),
        explanation: (_a = question.rubric) == null ? void 0 : _a.join("；"),
        selected: subjectiveAnswers.value[question.id],
        answer: question.answer.join("；"),
        correct,
        at: Date.now()
      });
    }
    function resetPaper() {
      trueFalseAnswers.value = {};
      choiceAnswers.value = {};
      blankAnswers.value = {};
      subjectiveAnswers.value = {};
      subjectiveJudgements.value = {};
      submitted.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$c, [
        createBaseVNode("header", _hoisted_2$a, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("p", { class: "exam-paper__eyebrow" }, "Interactive Exam"),
            createBaseVNode("h2", null, "2025 期中考试"),
            createBaseVNode("p", null, "提交已作答题目后显示答案并自动判分；之后可以继续作答、再次提交刷新记录。")
          ], -1)),
          createBaseVNode("div", _hoisted_3$a, [
            createBaseVNode("strong", null, toDisplayString(submitted.value ? objectiveScore.value : "-"), 1),
            createBaseVNode("span", null, "/ " + toDisplayString(objectiveMaxScore.value) + " 客观题分", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$7, [
          createBaseVNode("span", null, toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + " 已作答", 1),
          createBaseVNode("span", null, "客观题 " + toDisplayString(objectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "主观题 " + toDisplayString(subjectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "总分 " + toDisplayString(totalScore.value) + " 分", 1)
        ]),
        createBaseVNode("section", _hoisted_5$7, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", null, "一、判断题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(trueFalseQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_6$6, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_7$6, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === true }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = true
                }, " √ ", 10, _hoisted_8$6),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === false }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = false
                }, " × ", 10, _hoisted_9$6)
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_10$5, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", null, "二、单项选择题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(singleChoiceQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_11$4, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_12$4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(question.options, (option) => {
                  return openBlock(), createElementBlock("button", {
                    key: option.label,
                    type: "button",
                    class: normalizeClass({
                      "is-selected": choiceAnswers.value[question.id] === option.label,
                      "is-answer": submitted.value && question.answer === option.label,
                      "is-wrong": submitted.value && choiceAnswers.value[question.id] === option.label && !isObjectiveCorrect(question)
                    }),
                    onClick: ($event) => choiceAnswers.value[question.id] = option.label
                  }, [
                    createBaseVNode("strong", null, toDisplayString(option.label), 1),
                    createBaseVNode("span", null, toDisplayString(option.text), 1)
                  ], 10, _hoisted_13$4);
                }), 128))
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_14$4, [
          _cache[3] || (_cache[3] = createBaseVNode("h3", null, "三、填空题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(blankQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("label", _hoisted_15$4, [
                createBaseVNode("span", null, toDisplayString(index + 1) + ". " + toDisplayString(question.question), 1),
                createVNode(ExamSupplements, {
                  blocks: question.supplements
                }, null, 8, ["blocks"]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => blankAnswers.value[question.id] = $event,
                  type: "text",
                  placeholder: "输入答案"
                }, null, 8, _hoisted_16$3), [
                  [vModelText, blankAnswers.value[question.id]]
                ])
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `标准答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_17$3, [
          _cache[6] || (_cache[6] = createBaseVNode("h3", null, "四至七、主观题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(subjectiveQuestions, (question) => {
            var _a, _b;
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question exam-question--subjective"
            }, [
              createBaseVNode("header", _hoisted_18$3, [
                createBaseVNode("div", null, [
                  createBaseVNode("strong", null, toDisplayString(question.title), 1),
                  createBaseVNode("span", null, toDisplayString(question.points) + " 分", 1)
                ])
              ]),
              createBaseVNode("p", _hoisted_19$3, toDisplayString(question.prompt), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(question.details, (detail) => {
                return openBlock(), createElementBlock("pre", {
                  key: detail,
                  class: "exam-subjective__detail"
                }, toDisplayString(detail), 1);
              }), 128)),
              createVNode(ExamSupplements, {
                blocks: question.supplements
              }, null, 8, ["blocks"]),
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": ($event) => subjectiveAnswers.value[question.id] = $event,
                rows: "6",
                placeholder: "写下你的作答要点"
              }, null, 8, _hoisted_20$3), [
                [vModelText, subjectiveAnswers.value[question.id]]
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", _hoisted_21$3, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", null, "参考答案", -1)),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.answer, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ]),
                ((_a = question.rubric) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("h4", _hoisted_22$3, "评分要点")) : createCommentVNode("", true),
                ((_b = question.rubric) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("ul", _hoisted_23$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.rubric, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_24$2, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", null, "自主判题：", -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected": subjectiveJudgements.value[question.id] === true }),
                    onClick: ($event) => judgeSubjective(question, true)
                  }, " 判为正确 ", 10, _hoisted_25$2),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected is-wrong": subjectiveJudgements.value[question.id] === false }),
                    onClick: ($event) => judgeSubjective(question, false)
                  }, " 加入错题 ", 10, _hoisted_26$2)
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("footer", _hoisted_27$2, [
          createBaseVNode("button", {
            type: "button",
            disabled: answeredCount.value === 0,
            onClick: submitPaper
          }, toDisplayString(submitted.value ? "再次提交并刷新结果" : "提交已作答题目并显示答案"), 9, _hoisted_28$2),
          submitted.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "is-secondary",
            onClick: resetPaper
          }, " 重新作答 ")) : createCommentVNode("", true),
          !submitted.value ? (openBlock(), createElementBlock("p", _hoisted_29$2, " 已作答 " + toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + "，可先提交查看答案，之后继续作答并再次提交。 ", 1)) : (openBlock(), createElementBlock("p", _hoisted_30$2, " 已显示答案；仍有 " + toDisplayString(unansweredCount.value) + " 题未作答，可继续填写后再次提交刷新记录。 ", 1)),
          submitted.value ? (openBlock(), createElementBlock("p", _hoisted_31$2, " 主观题已判 " + toDisplayString(subjectiveJudgedCount.value) + " / " + toDisplayString(subjectiveQuestions.length) + "，判为错误的题会进入错题记录。 ", 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ExamPaper = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-76e5bdc8"]]);
const _hoisted_1$b = { class: "exam-paper" };
const _hoisted_2$9 = { class: "exam-paper__hero" };
const _hoisted_3$9 = { class: "exam-paper__score" };
const _hoisted_4$6 = { class: "exam-paper__meta" };
const _hoisted_5$6 = { class: "exam-section" };
const _hoisted_6$5 = { class: "exam-question__stem" };
const _hoisted_7$5 = { class: "exam-question__actions" };
const _hoisted_8$5 = ["onClick"];
const _hoisted_9$5 = ["onClick"];
const _hoisted_10$4 = { class: "exam-section" };
const _hoisted_11$3 = { class: "exam-question__stem" };
const _hoisted_12$3 = { class: "exam-options" };
const _hoisted_13$3 = ["onClick"];
const _hoisted_14$3 = { class: "exam-section" };
const _hoisted_15$3 = { class: "exam-blank" };
const _hoisted_16$2 = ["onUpdate:modelValue"];
const _hoisted_17$2 = { class: "exam-section" };
const _hoisted_18$2 = { class: "exam-subjective__header" };
const _hoisted_19$2 = { class: "exam-subjective__prompt" };
const _hoisted_20$2 = ["onUpdate:modelValue"];
const _hoisted_21$2 = {
  key: 0,
  class: "exam-reference"
};
const _hoisted_22$2 = {
  key: 0,
  class: "exam-reference__code"
};
const _hoisted_23$1 = { key: 1 };
const _hoisted_24$1 = { key: 2 };
const _hoisted_25$1 = { class: "exam-judge" };
const _hoisted_26$1 = ["onClick"];
const _hoisted_27$1 = ["onClick"];
const _hoisted_28$1 = { class: "exam-paper__footer" };
const _hoisted_29$1 = ["disabled"];
const _hoisted_30$1 = { key: 1 };
const _hoisted_31$1 = { key: 2 };
const _hoisted_32 = { key: 3 };
const petersonSnippet = `#define FALSE 0
#define TRUE 1
#define N 2
int turn;
int interested[N];

void enter_region(int process)
{
    int other;
    other = 1 - process;
    interested[process] = TRUE;
    turn = process;
    ________
}

void leave_region(int process)
{
    ________
}`;
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ExamPaper2024",
  setup(__props) {
    const segmentSupplements = [
      {
        type: "table",
        caption: "虚拟地址格式",
        headers: ["字段", "位数"],
        rows: [
          ["虚拟段号", "4"],
          ["虚拟页号", "8"],
          ["页内偏移", "8"]
        ]
      },
      {
        type: "table",
        caption: "物理地址格式",
        headers: ["字段", "位数"],
        rows: [
          ["物理页号", "8"],
          ["页内偏移", "8"]
        ]
      },
      {
        type: "table",
        caption: "段表",
        headers: ["段号", "页表基地址", "段内最大页面数量", "有效状态"],
        rows: [
          ["0", "0x2000", "0x20", "Valid"],
          ["1", "0x1200", "0x10", "Valid"],
          ["2", "0x3100", "0x40", "Invalid"],
          ["3", "0x4000", "0x20", "Valid"]
        ]
      },
      {
        type: "table",
        caption: "PTE 格式",
        headers: ["第 1 字节", "第 2 字节"],
        rows: [
          ["物理页框号", "0x00 = Invalid"],
          ["物理页框号", "0x06 = Valid, Read Only"],
          ["物理页框号", "0x07 = Valid, Read/Write"]
        ]
      },
      {
        type: "table",
        caption: "物理内存摘录",
        headers: ["Address", "+0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+A", "+B", "+C", "+D", "+E", "+F"],
        rows: [
          ["0x0000", "0E", "0F", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1A", "1B", "1C", "1D"],
          ["0x0010", "1E", "1F", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2A", "2B", "2C", "2D"],
          ["0x1010", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4A", "4B", "4C", "4D", "4E", "4F"],
          ["0x1020", "40", "07", "41", "06", "30", "06", "31", "07", "00", "07", "00", "00", "00", "00", "00", "00"],
          ["0x1030", "51", "07", "4F", "07", "3F", "07", "31", "07", "01", "07", "00", "00", "00", "00", "00", "00"],
          ["0x1040", "40", "07", "41", "07", "31", "07", "31", "07", "02", "07", "00", "00", "00", "00", "00", "00"],
          ["0x2000", "02", "20", "10", "00", "12", "07", "05", "50", "06", "60", "07", "70", "08", "80", "09", "90"],
          ["0x2010", "0A", "A0", "0B", "B0", "0C", "C0", "0D", "D0", "0E", "E0", "0F", "F0", "10", "01", "11", "11"],
          ["0x2020", "12", "21", "13", "31", "14", "41", "15", "51", "16", "61", "17", "71", "18", "81", "19", "91"],
          ["0x2030", "10", "06", "11", "00", "12", "07", "40", "07", "41", "07", "00", "00", "00", "00", "00", "00"],
          ["0x30F0", "00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF"],
          ["0x3100", "01", "12", "23", "34", "45", "56", "67", "78", "89", "9A", "AB", "BC", "CD", "DE", "EF", "00"],
          ["0x3110", "02", "13", "24", "35", "20", "07", "68", "79", "8A", "9B", "AC", "BD", "CE", "DF", "F0", "01"],
          ["0x3120", "03", "06", "25", "36", "47", "58", "69", "7A", "8B", "9C", "AD", "BE", "CF", "E0", "F1", "02"],
          ["0x3130", "04", "15", "26", "37", "48", "59", "70", "7B", "8C", "9D", "AE", "BF", "D0", "E1", "F2", "03"],
          ["0x4000", "30", "00", "31", "06", "32", "07", "33", "07", "34", "06", "35", "00", "43", "38", "32", "79"],
          ["0x4010", "50", "28", "84", "19", "71", "69", "39", "93", "75", "10", "58", "20", "97", "49", "44", "59"],
          ["0x4020", "23", "07", "20", "07", "00", "06", "62", "08", "99", "86", "28", "03", "48", "25", "34", "21"]
        ]
      }
    ];
    const trueFalseQuestions = [
      {
        id: "tf-01-stack-pointer",
        type: "true-false",
        title: "线程共享地址空间",
        question: "同一进程中的不同线程间可以通过传递指向其栈上对象的指针来相互共享数据。",
        answer: true,
        points: 2,
        explanation: "同一进程内线程共享虚拟地址空间，因此一个线程栈上的对象地址可以被同进程其他线程访问；实际使用时仍要保证对象生命周期和同步安全。"
      },
      {
        id: "tf-02-user-thread-pte",
        type: "true-false",
        title: "页表保护",
        question: "用户级线程不能修改自己的页表项。",
        answer: true,
        points: 2,
        explanation: "页表项属于受保护的内核管理数据，普通用户态执行流不能直接修改。"
      },
      {
        id: "tf-03-fork-address",
        type: "true-false",
        title: "fork 地址空间",
        question: "当进程被 fork 创建后，父进程和子进程中的同一变量将具有相同的虚拟内存地址，但物理内存地址是不相同的。",
        answer: false,
        points: 2,
        explanation: "按现代写时复制 fork 语境，父子进程初始可能共享同一物理页，写入时才复制，因此“物理地址一定不同”不成立。若只采用立即复制的简化模型，这一题可能会被判为正确。"
      },
      {
        id: "tf-04-thrashing",
        type: "true-false",
        title: "虚拟内存抖动",
        question: "消除虚拟内存抖动的最佳方法是增加 I/O 和 CPU 计算之间的并行程度，也就是让 CPU 与 I/O 都“忙”起来，所以增加可运行线程数量可以达到这一目的。",
        answer: false,
        points: 2,
        explanation: "抖动的根因是工作集得不到足够内存。继续增加可运行线程通常会降低每个进程的常驻集，可能让抖动更严重。"
      },
      {
        id: "tf-05-pc-os",
        type: "true-false",
        title: "PC 操作系统",
        question: "大多数 PC 机上的操作系统支持多任务，但不支持多用户。",
        answer: true,
        points: 2,
        explanation: "按操作系统教材的常见分类，PC 操作系统通常强调单用户多任务；现代系统可能有多账户和远程会话能力，考试语境一般按教材分类作答。"
      },
      {
        id: "tf-06-boot-sector",
        type: "true-false",
        title: "MBR 与引导扇区",
        question: "磁盘驱动器上只有一个 MBR（主引导记录），但可能有多个引导扇区。",
        answer: true,
        points: 2,
        explanation: "MBR 位于磁盘起始位置；不同分区可以有自己的卷引导扇区。"
      },
      {
        id: "tf-07-process-program",
        type: "true-false",
        title: "进程与程序",
        question: "多个进程可以同时对应到同一个程序/可执行文件。",
        answer: true,
        points: 2,
        explanation: "程序是静态文件，进程是运行实例；同一可执行文件可以启动多个进程。"
      },
      {
        id: "tf-08-context-switch",
        type: "true-false",
        title: "上下文切换",
        question: "从一个进程到另一个进程的上下文切换无需在内核模式下执行操作系统代码即可完成。",
        answer: false,
        points: 2,
        explanation: "进程上下文切换涉及保存/恢复内核管理的执行现场和地址空间状态，必须由内核代码完成。"
      },
      {
        id: "tf-09-dynamic-relocation",
        type: "true-false",
        title: "动态重定位",
        question: "动态重定位是指硬件在每次内存访问时动态实现地址的转换。",
        answer: true,
        points: 2,
        explanation: "动态重定位把地址转换推迟到运行时，由硬件在访问内存时完成。"
      },
      {
        id: "tf-10-thread-stack",
        type: "true-false",
        title: "线程私有栈",
        question: "进程中的线程必须有自己独立的栈。",
        answer: true,
        points: 2,
        explanation: "每个线程需要独立的调用栈保存函数调用、返回地址和局部自动变量。"
      }
    ];
    const singleChoiceQuestions = [
      {
        id: "choice-01-batch",
        type: "single",
        title: "批处理系统",
        question: "批处理系统的主要缺点是：",
        options: [
          { label: "A", text: "CPU 的利用率不高" },
          { label: "B", text: "失去了交互性" },
          { label: "C", text: "不具备并行性" },
          { label: "D", text: "以上都不是" }
        ],
        answer: "B",
        points: 2,
        explanation: "批处理系统把作业成批提交和执行，主要问题是用户无法在运行过程中交互控制。"
      },
      {
        id: "choice-02-memory",
        type: "single",
        title: "地址空间与分段分页",
        question: "以下说法正确的是：",
        options: [
          { label: "A", text: "两个不同进程对应的页表中可能包含内容相同的页表项" },
          { label: "B", text: "虚拟地址空间总是大于物理地址空间" },
          { label: "C", text: "在页式内存管理下，页面尺寸越小越有利于消除外碎片，提高内存使用效率" },
          { label: "D", text: "段式内存管理的不同分段大小可不同，从而可消除外碎片，提高内存使用率" }
        ],
        answer: "A",
        points: 2,
        explanation: "不同进程可以共享同一物理页或碰巧有相同页表项内容。分页本身没有外碎片，分段反而可能产生外碎片。"
      },
      {
        id: "choice-03-multilevel",
        type: "single",
        title: "多级页表",
        question: "关于多级页表，下列说法不正确的是：",
        options: [
          { label: "A", text: "能够减少页表占用内存的大小" },
          { label: "B", text: "级数越多，平均访问内存的时间越长" },
          { label: "C", text: "有效的页表项中都会存储页框号" },
          { label: "D", text: "使用二级页表的平均访存性能优于一级页表" }
        ],
        answer: "D",
        points: 2,
        explanation: "多级页表节省空间，但 TLB 未命中时要多级访存，不能说二级页表平均访存性能优于一级页表。"
      },
      {
        id: "choice-04-kernel",
        type: "single",
        title: "陷入内核",
        question: "以下说法正确的是：",
        options: [
          { label: "A", text: "进程上下文切换过程一定会陷入内核" },
          { label: "B", text: "陷入内核一定会导致进程切换" },
          { label: "C", text: "正在执行的程序不可以主动放弃 CPU" },
          { label: "D", text: "系统调用一定会导致进程上下文切换" }
        ],
        answer: "A",
        points: 2,
        explanation: "进程切换必须由内核完成；但系统调用、异常或中断进入内核后不一定切换进程。"
      },
      {
        id: "choice-05-protection",
        type: "single",
        title: "多进程保护",
        question: "在一个多进程操作系统中，以下说法正确的是：",
        options: [
          { label: "A", text: "如果一个用户进程进入死循环，则其他进程永远不可能获得执行" },
          { label: "B", text: "如果一个用户进程进入死循环，操作系统可以终止该用户进程执行" },
          { label: "C", text: "如果一个用户进程执行了“跳转到 0 地址”的指令，操作系统内核会立即崩溃" },
          { label: "D", text: "如果一个用户进程执行了“除以 0”的指令后，操作系统内核会立即崩溃" }
        ],
        answer: "B",
        points: 2,
        explanation: "时钟中断和保护机制允许内核重新获得控制并终止异常用户进程；用户态错误不应直接导致内核崩溃。"
      },
      {
        id: "choice-06-pv",
        type: "single",
        title: "PV 操作",
        question: "关于 PV 操作错误的是：",
        options: [
          { label: "A", text: "信号量如果使用不当，可能导致死锁" },
          { label: "B", text: "进程执行 P 操作阻塞时，不会占用 CPU 资源" },
          { label: "C", text: "进程 A、B 调用 P(S) 各一次后，信号量 S 的值与调用顺序有关" },
          { label: "D", text: "信号量操作是原子操作" }
        ],
        answer: "C",
        points: 2,
        explanation: "两次 P 操作对 S 的净影响相同；阻塞队列顺序可能不同，但信号量值不取决于调用顺序。"
      },
      {
        id: "choice-07-inverted",
        type: "single",
        title: "反置页表",
        question: "下列哪项属于反置页表的优点：",
        options: [
          { label: "A", text: "查找页表项的速度快" },
          { label: "B", text: "缺页处理速度快" },
          { label: "C", text: "便于进程之间共享数据" },
          { label: "D", text: "页表与逻辑地址空间大小无关" }
        ],
        answer: "D",
        points: 2,
        explanation: "反置页表按物理页框组织，表规模主要与物理内存页框数相关，而不是随每个进程的虚拟地址空间线性增长。"
      },
      {
        id: "choice-08-replacement",
        type: "single",
        title: "页面置换算法",
        question: "关于页面置换算法，以下说法不正确的是：",
        options: [
          { label: "A", text: "二次机会算法是对 FIFO 的改进" },
          { label: "B", text: "Aging 算法是对 LRU 算法的高效近似实现" },
          { label: "C", text: "WSClock 算法仅需要在页表中扫描" },
          { label: "D", text: "工作集算法的思路是驱逐不在工作集中的页面" }
        ],
        answer: "C",
        points: 2,
        explanation: "WSClock 需要维护时钟链表并结合访问位、修改位和时间信息，不是仅扫描页表。"
      },
      {
        id: "choice-09-dynamic-partition",
        type: "single",
        title: "动态分区",
        question: "可变分区又称为动态分区，它是在系统运行过程中什么时动态建立的？",
        options: [
          { label: "A", text: "作业未装入" },
          { label: "B", text: "在作业装入" },
          { label: "C", text: "在作业创建" },
          { label: "D", text: "在作业完成" }
        ],
        answer: "B",
        points: 2,
        explanation: "动态分区在作业装入内存时按作业大小从空闲区中划分出来。"
      },
      {
        id: "choice-10-overlay",
        type: "single",
        title: "覆盖与交换",
        question: "下列说法错误的是：",
        options: [
          { label: "A", text: "覆盖可减少一个程序运行所需的空间" },
          { label: "B", text: "覆盖对应用程序员不透明" },
          { label: "C", text: "交换是由操作系统实现的" },
          { label: "D", text: "覆盖在不同作业或程序之间进行" }
        ],
        answer: "D",
        points: 2,
        explanation: "覆盖通常发生在同一程序内部的不同模块之间；交换是在进程/作业和外存之间进行。"
      }
    ];
    const blankQuestions = [
      {
        id: "blank-01-fifo",
        type: "blank",
        title: "FIFO 缺页次数",
        question: "访问序列 A B D D E F A A C F G D A C G D C E，4 个页框，FIFO 产生多少次缺页中断？",
        answers: ["10"],
        answerText: "10",
        points: 2,
        explanation: "初始 4 个页框为空，按 FIFO 淘汰最早进入内存的页面，共 10 次缺页。"
      },
      {
        id: "blank-01-lru",
        type: "blank",
        title: "LRU 缺页次数",
        question: "同一访问序列、4 个页框，LRU 产生多少次缺页中断？",
        answers: ["12"],
        answerText: "12",
        points: 2,
        explanation: "按最近最少使用规则淘汰最长时间未被访问的页面，共 12 次缺页。"
      },
      {
        id: "blank-02-belady",
        type: "blank",
        title: "Belady 现象",
        question: "在 FIFO 等页面置换算法中，Belady 现象是指什么？",
        answers: ["分配给进程的页框数增加，缺页次数反而增加", "页框数增加缺页率反而升高", "belady现象", "beladys anomaly"],
        answerText: "分配页框数增加时，缺页次数或缺页率反而增加",
        points: 2,
        explanation: "Belady 现象说明 FIFO 这类算法不具备栈性质，页框变多时缺页次数可能反而上升。"
      },
      {
        id: "blank-03-abi",
        type: "blank",
        title: "二进制兼容",
        question: "在一个操作系统中编译好的程序在另一个什么兼容的操作系统中无需重新编译就能运行？",
        answers: ["二进制", "二进制兼容", "abi", "abi兼容", "应用程序二进制接口"],
        answerText: "二进制 / ABI",
        points: 2,
        explanation: "无需重新编译运行强调的是二进制接口兼容，即 ABI 兼容。"
      },
      {
        id: "blank-04-fragment",
        type: "blank",
        title: "内存碎片",
        question: "内存中无法被利用的存储空间称为什么？",
        answers: ["碎片", "内存碎片"],
        answerText: "碎片",
        points: 2,
        explanation: "无法有效利用的零散内存空间称为碎片，可进一步分为内部碎片和外部碎片。"
      },
      {
        id: "blank-05-data",
        type: "blank",
        title: "DATA 段变量",
        question: "程序中 `int a = 100; int b; static int x; int y = 10; int *p = &y, *q = &b;` 编译装载后，在 DATA 段中分配存储空间的变量有哪些？",
        answers: ["a", "变量a", "inta"],
        answerText: "a",
        points: 2,
        explanation: "按常见段划分，已初始化全局变量 a 位于 .data；未初始化的 b 和 static x 通常在 .bss，y、p、q 是自动局部变量，位于栈。"
      },
      {
        id: "blank-06-peterson-wait",
        type: "blank",
        title: "Peterson 进入区",
        question: "补全 Peterson 算法第 13 行。",
        answers: [
          "while(turn==process&&interested[other]==true)",
          "while(interested[other]==true&&turn==process)",
          "while(turn==process&&interested[other])",
          "while(interested[other]&&turn==process)",
          "while(turn==process&&interested[other]==1)",
          "while(interested[other]==1&&turn==process)"
        ],
        answerText: "while (turn == process && interested[other] == TRUE);",
        supplements: [
          {
            type: "code",
            language: "c",
            content: petersonSnippet
          }
        ],
        points: 2,
        explanation: "本题给出的版本先设置 `turn = process`，因此当对方也感兴趣且 turn 仍指向自己时，当前进程等待。"
      },
      {
        id: "blank-06-peterson-leave",
        type: "blank",
        title: "Peterson 退出区",
        question: "补全 Peterson 算法第 18 行。",
        answers: ["interested[process]=false", "interested[process]=0"],
        answerText: "interested[process] = FALSE;",
        supplements: [
          {
            type: "code",
            language: "c",
            content: petersonSnippet
          }
        ],
        points: 2,
        explanation: "退出临界区时撤销自己的进入意向，让其他进程可以通过等待条件。"
      },
      {
        id: "blank-07-blocked-range",
        type: "blank",
        title: "阻塞队列范围",
        question: "单处理器系统中总共有 n 个进程，阻塞队列中的进程个数取值范围是多少？",
        answers: ["0到n", "0至n", "0~n", "0-n", "[0,n]", "0≤x≤n", "0<=x<=n"],
        answerText: "0 到 n",
        points: 2,
        explanation: "如果所有普通进程都在等待事件，阻塞队列可以包含 n 个进程，此时 CPU 可运行 idle 线程或处于空闲调度状态。"
      },
      {
        id: "blank-08-best-fit",
        type: "blank",
        title: "最佳适应算法",
        question: "可变分区存储分配算法中，哪种算法总是挑选可以容纳作业的最小空闲区进行分配？",
        answers: ["最佳适应", "最佳适应算法", "bestfit", "best fit"],
        answerText: "最佳适应算法（Best Fit）",
        points: 2,
        explanation: "Best Fit 每次选择能够容纳作业的最小空闲分区。"
      }
    ];
    const subjectiveQuestions = [
      {
        id: "subj-01-page-table",
        title: "四-1 页表项数量",
        points: 8,
        prompt: "在一个 32 位虚拟内存系统中，页面大小为 4KB。若页表被全部占用，分别计算 1 级页表和 20 级页表需要多少页表项；若一个进程只分配 1 页内存，再分别计算 1 级页表和 20 级页表需要分配多少页表项。",
        answer: [
          "32 位地址、4KB 页面意味着页内偏移 12 位，虚拟页号 20 位，完整地址空间共有 2^20 个虚拟页。",
          "页表全部占用时，1 级页表需要 2^20 个页表项。",
          "若 20 级页表平均每级使用 1 位虚拟页号，全部占用时需要 2^1 + 2^2 + ... + 2^20 = 2^21 - 2 个页表项。",
          "一个进程只分配 1 页内存时，1 级页表仍需要覆盖完整虚拟页号空间，即 2^20 个页表项。",
          "20 级页表只需要沿目标虚拟页的一条路径建立映射，概念上需要 20 个页表项。"
        ],
        rubric: [
          "算出虚拟页数 2^20。",
          "区分满地址空间和只映射 1 页两种情况。",
          "20 级满表按满二叉树各层页表项求和。",
          "说明多级页表按需分配的空间优势。"
        ]
      },
      {
        id: "subj-02-segment-page",
        title: "四-2 段页式地址转换",
        points: 7,
        prompt: "20 位虚拟地址采用段页式管理：虚拟段号 4 位、虚拟页号 8 位、页内偏移 8 位。物理地址为物理页号 8 位、页内偏移 8 位。根据段表、PTE 格式和物理内存内容，写出各条 Load/Store 指令结果。",
        details: [
          "指令：Load [0x30114]；Store [0x30115]；Load [0x41015]；Load [0x00115]；Store [0x00210]；Load [0x21202]；Load [0x11145]。",
          "Load 成功时写读入的 1 字节数据，否则写 Error；Store 成功时写 OK，否则写 Error。"
        ],
        answer: [
          "Load [0x30114] = 0x20。段 3 有效，VPN=0x01，PTE 位于 0x4002，内容为 frame 0x31 / Read Only，物理地址 0x3114，读出 0x20。",
          "Store [0x30115] = Error。段 3、VPN=0x01 只读，不能写。",
          "Load [0x41015] = Error。段号 4 超过最大段号 3。",
          "Load [0x00115] = Error。段 0、VPN=0x01 的 PTE 为 0x10 0x00，Invalid。",
          "Store [0x00210] = OK。段 0、VPN=0x02 的 PTE 为 frame 0x12 / Read-Write。",
          "Load [0x21202] = Error。段 2 的段表项 Invalid。",
          "Load [0x11145] = Error。段 1 的段内最大页面数量为 0x10，VPN=0x11 越界。"
        ],
        rubric: [
          "先拆出段号、页号和页内偏移。",
          "依次检查段号范围、段表有效位、段内页号范围。",
          "按页表基址 + VPN * 2 取 PTE。",
          "区分 Load 可读只读页、Store 必须可写。"
        ],
        supplements: segmentSupplements
      },
      {
        id: "subj-03-self-map",
        title: "五 页表自映射",
        points: 5,
        prompt: "一个 32 位虚拟存储系统采用两级页表，31..22 位为一级页表索引，21..12 位为二级页表索引，11..0 位为页内偏移。若从 0x8C000000 开始映射 4MB 的页表，求一级页表起始虚拟地址，以及一级页表中映射自己的表项的虚拟地址。",
        answer: [
          "4MB 页表窗口起始地址 0x8C000000 对应一级页表索引 r = 0x8C000000 >> 22 = 0x23。",
          "一级页表自身在页表窗口中的起始虚拟地址为 0x8C000000 + r * 0x1000 = 0x8C023000。",
          "映射自己的一级页表项地址为 0x8C023000 + r * 4 = 0x8C02308C。",
          "等价公式：PDE_self = (r << 22) | (r << 12) | (r << 2)。"
        ],
        rubric: [
          "求出自映射索引 r = 0x23。",
          "给出一级页表起始虚拟地址 0x8C023000。",
          "给出自映射表项虚拟地址 0x8C02308C。"
        ]
      },
      {
        id: "subj-04-process-state",
        title: "六 进程与线程",
        points: 10,
        prompt: "假设进程只有三种基本状态，画出进程的状态转换图，并举例说明这些转换发生的条件。",
        answer: [
          "三种基本状态是：就绪态、运行态、阻塞态。",
          "就绪 -> 运行：调度器选择该进程并分派 CPU。",
          "运行 -> 就绪：时间片用完、被更高优先级进程抢占，或主动让出 CPU。",
          "运行 -> 阻塞：等待 I/O、等待锁/信号量、等待事件或资源。",
          "阻塞 -> 就绪：等待的 I/O、事件或资源条件满足，被内核唤醒。",
          "通常没有阻塞 -> 运行的直接转换，也没有就绪 -> 阻塞的直接转换。"
        ],
        rubric: [
          "状态名称正确。",
          "转换方向正确。",
          "每条转换给出合理触发条件。",
          "指出阻塞态必须先回到就绪态再运行。"
        ]
      },
      {
        id: "subj-05-semaphore",
        title: "七 信号量基础",
        points: 10,
        prompt: "解释调用一次 P(s) 和 V(s) 后，s.count 与 s.queue 的变化；并用 test-and-set 指令实现 P(s) 和 V(s) 操作的伪代码。",
        details: [
          "test-and-set(boolean* lock)：若 *lock 为 1，返回 1；否则将 *lock 置 1，返回 0。lock 初始值为 0。"
        ],
        answer: [
          "P(s)：原子地将 s.count 减 1；若减 1 后 s.count < 0，则当前进程进入 s.queue 并阻塞，否则继续执行。",
          "V(s)：原子地将 s.count 加 1；若加 1 后 s.count <= 0，说明队列中有等待进程，应从 s.queue 唤醒一个进程。",
          "test-and-set 在这里用于保护 s.count 和 s.queue 的修改，使多个进程并发调用 P/V 时不会破坏信号量内部状态。"
        ],
        answerCode: `void lock(boolean *l) {
    while (test_and_set(l)) {
        ; // spin
    }
}

void unlock(boolean *l) {
    *l = 0;
}

void P(semaphore *s) {
    lock(&s->lock);
    s->count--;
    if (s->count < 0) {
        enqueue(s->queue, current);
        current->state = BLOCKED;
        unlock(&s->lock);
        schedule();
    } else {
        unlock(&s->lock);
    }
}

void V(semaphore *s) {
    lock(&s->lock);
    s->count++;
    if (s->count <= 0) {
        process *p = dequeue(s->queue);
        wakeup(p);
    }
    unlock(&s->lock);
}`,
        rubric: [
          "P/V 对 count 的增减方向正确。",
          "阻塞和唤醒条件正确。",
          "队列入队/出队语义正确。",
          "test-and-set 只保护信号量内部临界区。",
          "阻塞前释放自旋锁，避免死锁。"
        ]
      }
    ];
    const trueFalseAnswers = ref({});
    const choiceAnswers = ref({});
    const blankAnswers = ref({});
    const subjectiveAnswers = ref({});
    const subjectiveJudgements = ref({});
    const submitted = ref(false);
    const objectiveQuestions = computed(() => [
      ...trueFalseQuestions,
      ...singleChoiceQuestions,
      ...blankQuestions
    ]);
    const objectiveMaxScore = computed(() => objectiveQuestions.value.reduce((sum, question) => sum + question.points, 0));
    const subjectiveMaxScore = computed(() => subjectiveQuestions.reduce((sum, question) => sum + question.points, 0));
    const totalScore = computed(() => objectiveMaxScore.value + subjectiveMaxScore.value);
    const objectiveAnsweredCount = computed(() => {
      const trueFalseCount = trueFalseQuestions.filter((question) => typeof trueFalseAnswers.value[question.id] === "boolean").length;
      const choiceCount = singleChoiceQuestions.filter((question) => Boolean(choiceAnswers.value[question.id])).length;
      const blankCount = blankQuestions.filter((question) => {
        var _a;
        return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
      }).length;
      return trueFalseCount + choiceCount + blankCount;
    });
    const objectiveUnansweredCount = computed(() => objectiveQuestions.value.length - objectiveAnsweredCount.value);
    const subjectiveAnsweredCount = computed(() => subjectiveQuestions.filter((question) => {
      var _a;
      return Boolean((_a = subjectiveAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }).length);
    const answeredCount = computed(() => objectiveAnsweredCount.value + subjectiveAnsweredCount.value);
    const questionCount = computed(() => objectiveQuestions.value.length + subjectiveQuestions.length);
    const subjectiveJudgedCount = computed(() => subjectiveQuestions.filter((question) => typeof subjectiveJudgements.value[question.id] === "boolean").length);
    const objectiveScore = computed(() => {
      if (!submitted.value) return 0;
      return objectiveQuestions.value.reduce((sum, question) => isObjectiveCorrect(question) ? sum + question.points : sum, 0);
    });
    function normalizeAnswer(value) {
      return value.trim().toLowerCase().replace(/[，。；;：:、,.\s（）()[\]{}]/g, "");
    }
    function isBeladyAnswer(value) {
      return value.includes("belady") || value.includes("页框") && value.includes("缺页") && (value.includes("增加") || value.includes("增多") || value.includes("升高") || value.includes("上升"));
    }
    function boolLabel(value) {
      if (typeof value !== "boolean") return "未作答";
      return value ? "√" : "×";
    }
    function isBlankCorrect(question) {
      const selected = normalizeAnswer(blankAnswers.value[question.id] || "");
      if (question.id === "blank-02-belady") return isBeladyAnswer(selected);
      return question.answers.some((answer) => normalizeAnswer(answer) === selected);
    }
    function isObjectiveCorrect(question) {
      if (question.type === "true-false") {
        return trueFalseAnswers.value[question.id] === question.answer;
      }
      if (question.type === "single") {
        return choiceAnswers.value[question.id] === question.answer;
      }
      return isBlankCorrect(question);
    }
    function hasObjectiveAnswer(question) {
      var _a;
      if (question.type === "true-false") {
        return typeof trueFalseAnswers.value[question.id] === "boolean";
      }
      if (question.type === "single") {
        return Boolean(choiceAnswers.value[question.id]);
      }
      return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }
    function selectedText(question) {
      if (question.type === "true-false") return boolLabel(trueFalseAnswers.value[question.id]);
      if (question.type === "single") return choiceAnswers.value[question.id] || "未作答";
      return blankAnswers.value[question.id] || "未作答";
    }
    function answerText(question) {
      if (question.type === "true-false") return boolLabel(question.answer);
      if (question.type === "single") return question.answer;
      return question.answerText;
    }
    function objectiveOptions(question) {
      if (question.type === "true-false") {
        return [
          { label: boolLabel(true), text: "正确" },
          { label: boolLabel(false), text: "错误" }
        ];
      }
      if (question.type === "single") return question.options;
      return [];
    }
    function subjectiveQuestionText(question) {
      return [question.prompt, ...question.details || []].join("\n");
    }
    function recordObjective(question) {
      recordQuestion({
        id: `exam:2024-midterm:${question.id}`,
        type: question.type === "true-false" ? "true-false" : question.type,
        collection: "2024-midterm",
        title: `2024 期中 - ${question.title}`,
        question: question.question,
        options: objectiveOptions(question),
        explanation: question.explanation,
        selected: selectedText(question),
        answer: answerText(question),
        correct: isObjectiveCorrect(question),
        at: Date.now()
      });
    }
    function submitPaper() {
      if (answeredCount.value === 0) return;
      submitted.value = true;
      objectiveQuestions.value.filter(hasObjectiveAnswer).forEach(recordObjective);
    }
    function judgeSubjective(question, correct) {
      var _a;
      subjectiveJudgements.value[question.id] = correct;
      recordQuestion({
        id: `exam:2024-midterm:${question.id}`,
        type: "subjective",
        collection: "2024-midterm",
        title: `2024 期中 - ${question.title}`,
        question: subjectiveQuestionText(question),
        explanation: (_a = question.rubric) == null ? void 0 : _a.join("；"),
        selected: subjectiveAnswers.value[question.id] || "未作答",
        answer: question.answer.join("；"),
        correct,
        at: Date.now()
      });
    }
    function resetPaper() {
      trueFalseAnswers.value = {};
      choiceAnswers.value = {};
      blankAnswers.value = {};
      subjectiveAnswers.value = {};
      subjectiveJudgements.value = {};
      submitted.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$b, [
        createBaseVNode("header", _hoisted_2$9, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("p", { class: "exam-paper__eyebrow" }, "Interactive Exam"),
            createBaseVNode("h2", null, "2024 期中考试"),
            createBaseVNode("p", null, "客观题提交后自动判分；主观题提交后显示参考答案，由你自行判定是否进入错题记录。")
          ], -1)),
          createBaseVNode("div", _hoisted_3$9, [
            createBaseVNode("strong", null, toDisplayString(submitted.value ? objectiveScore.value : "-"), 1),
            createBaseVNode("span", null, "/ " + toDisplayString(objectiveMaxScore.value) + " 客观题分", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("span", null, toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + " 已作答", 1),
          createBaseVNode("span", null, "客观题 " + toDisplayString(objectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "主观题 " + toDisplayString(subjectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "总分 " + toDisplayString(totalScore.value) + " 分", 1)
        ]),
        createBaseVNode("section", _hoisted_5$6, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", null, "一、判断题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(trueFalseQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_6$5, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_7$5, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === true }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = true
                }, " √ ", 10, _hoisted_8$5),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === false }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = false
                }, " × ", 10, _hoisted_9$5)
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_10$4, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", null, "二、单项选择题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(singleChoiceQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_11$3, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_12$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(question.options, (option) => {
                  return openBlock(), createElementBlock("button", {
                    key: option.label,
                    type: "button",
                    class: normalizeClass({
                      "is-selected": choiceAnswers.value[question.id] === option.label,
                      "is-answer": submitted.value && question.answer === option.label,
                      "is-wrong": submitted.value && choiceAnswers.value[question.id] === option.label && !isObjectiveCorrect(question)
                    }),
                    onClick: ($event) => choiceAnswers.value[question.id] = option.label
                  }, [
                    createBaseVNode("strong", null, toDisplayString(option.label), 1),
                    createBaseVNode("span", null, toDisplayString(option.text), 1)
                  ], 10, _hoisted_13$3);
                }), 128))
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_14$3, [
          _cache[3] || (_cache[3] = createBaseVNode("h3", null, "三、填空题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(blankQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("label", _hoisted_15$3, [
                createBaseVNode("span", null, toDisplayString(index + 1) + ". " + toDisplayString(question.question), 1),
                createVNode(ExamSupplements, {
                  blocks: question.supplements
                }, null, 8, ["blocks"]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => blankAnswers.value[question.id] = $event,
                  type: "text",
                  placeholder: "输入答案"
                }, null, 8, _hoisted_16$2), [
                  [vModelText, blankAnswers.value[question.id]]
                ])
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `标准答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_17$2, [
          _cache[6] || (_cache[6] = createBaseVNode("h3", null, "四至七、主观题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(subjectiveQuestions, (question) => {
            var _a, _b;
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question exam-question--subjective"
            }, [
              createBaseVNode("header", _hoisted_18$2, [
                createBaseVNode("div", null, [
                  createBaseVNode("strong", null, toDisplayString(question.title), 1),
                  createBaseVNode("span", null, toDisplayString(question.points) + " 分", 1)
                ])
              ]),
              createBaseVNode("p", _hoisted_19$2, toDisplayString(question.prompt), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(question.details, (detail) => {
                return openBlock(), createElementBlock("pre", {
                  key: detail,
                  class: "exam-subjective__detail"
                }, toDisplayString(detail), 1);
              }), 128)),
              createVNode(ExamSupplements, {
                blocks: question.supplements
              }, null, 8, ["blocks"]),
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": ($event) => subjectiveAnswers.value[question.id] = $event,
                rows: "6",
                placeholder: "写下你的作答要点；客观题提交后会显示参考答案"
              }, null, 8, _hoisted_20$2), [
                [vModelText, subjectiveAnswers.value[question.id]]
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", _hoisted_21$2, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", null, "参考答案", -1)),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.answer, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ]),
                question.answerCode ? (openBlock(), createElementBlock("pre", _hoisted_22$2, toDisplayString(question.answerCode), 1)) : createCommentVNode("", true),
                ((_a = question.rubric) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("h4", _hoisted_23$1, "评分要点")) : createCommentVNode("", true),
                ((_b = question.rubric) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("ul", _hoisted_24$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.rubric, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_25$1, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", null, "自主判题：", -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected": subjectiveJudgements.value[question.id] === true }),
                    onClick: ($event) => judgeSubjective(question, true)
                  }, " 判为正确 ", 10, _hoisted_26$1),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected is-wrong": subjectiveJudgements.value[question.id] === false }),
                    onClick: ($event) => judgeSubjective(question, false)
                  }, " 加入错题 ", 10, _hoisted_27$1)
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("footer", _hoisted_28$1, [
          createBaseVNode("button", {
            type: "button",
            disabled: answeredCount.value === 0,
            onClick: submitPaper
          }, toDisplayString(submitted.value ? "再次提交并刷新结果" : "提交已作答题目并显示答案"), 9, _hoisted_29$1),
          submitted.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "is-secondary",
            onClick: resetPaper
          }, " 重新作答 ")) : createCommentVNode("", true),
          !submitted.value ? (openBlock(), createElementBlock("p", _hoisted_30$1, " 已作答 " + toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + "，可先提交查看答案，之后继续作答并再次提交。 ", 1)) : (openBlock(), createElementBlock("p", _hoisted_31$1, " 已显示答案；仍有 " + toDisplayString(objectiveUnansweredCount.value) + " 道客观题未作答，可继续填写后再次提交刷新记录。 ", 1)),
          submitted.value ? (openBlock(), createElementBlock("p", _hoisted_32, " 主观题已判 " + toDisplayString(subjectiveJudgedCount.value) + " / " + toDisplayString(subjectiveQuestions.length) + "，判为错误的题会进入错题记录。 ", 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ExamPaper2024 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e7776570"]]);
const _hoisted_1$a = { class: "exam-paper" };
const _hoisted_2$8 = { class: "exam-paper__hero" };
const _hoisted_3$8 = { class: "exam-paper__score" };
const _hoisted_4$5 = { class: "exam-paper__meta" };
const _hoisted_5$5 = { class: "exam-section" };
const _hoisted_6$4 = { class: "exam-question__stem" };
const _hoisted_7$4 = { class: "exam-question__actions" };
const _hoisted_8$4 = ["onClick"];
const _hoisted_9$4 = ["onClick"];
const _hoisted_10$3 = { class: "exam-section" };
const _hoisted_11$2 = { class: "exam-question__stem" };
const _hoisted_12$2 = { class: "exam-options" };
const _hoisted_13$2 = ["onClick"];
const _hoisted_14$2 = { class: "exam-section" };
const _hoisted_15$2 = { class: "exam-blank" };
const _hoisted_16$1 = ["onUpdate:modelValue"];
const _hoisted_17$1 = { class: "exam-section" };
const _hoisted_18$1 = { class: "exam-subjective__header" };
const _hoisted_19$1 = { class: "exam-subjective__prompt" };
const _hoisted_20$1 = ["onUpdate:modelValue"];
const _hoisted_21$1 = {
  key: 0,
  class: "exam-reference"
};
const _hoisted_22$1 = { key: 0 };
const _hoisted_23 = { key: 1 };
const _hoisted_24 = { class: "exam-judge" };
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "exam-paper__footer" };
const _hoisted_28 = ["disabled"];
const _hoisted_29 = { key: 1 };
const _hoisted_30 = { key: 2 };
const _hoisted_31 = { key: 3 };
const fifoOptQuestionStem = "某进程运行时依次访问的内存页面为：1, 2, …, n, 1, 2, …, n, 1, 2, …, n（连续 3 次，按顺序访问 1~n 号页面，n>3）。共为该进程分配了 n-1 个页框，初始时这 n-1 个页框均为空。";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ExamPaper2025Final",
  setup(__props) {
    const trueFalseQuestions = [
      {
        id: "final-tf-01",
        type: "true-false",
        title: "多道程序设计的提出",
        question: "多道程序最早是为了解决早期单用户批处理系统 CPU 资源的浪费问题而提出的。",
        answer: true,
        points: 1,
        explanation: "多道程序设计允许多个作业同时驻留内存，当一道作业等待 I/O 时 CPU 可切换到另一道作业，从而提高 CPU 利用率。"
      },
      {
        id: "final-tf-02",
        type: "true-false",
        title: "宏内核地址空间",
        question: "宏内核操作系统的内核功能模块之间共享地址空间，能减少上下文切换开销。",
        answer: true,
        points: 1,
        explanation: "宏内核的所有内核模块运行在同一个内核地址空间中，模块间直接函数调用，无需进程间通信，上下文切换开销小。"
      },
      {
        id: "final-tf-03",
        type: "true-false",
        title: "系统调用与中断",
        question: "系统调用陷入与外部中断的处理流程完全相同，是操作系统获得 CPU 控制权的关键机制之一。",
        answer: false,
        points: 1,
        explanation: "系统调用陷入是主动的（程序执行 int/syscall 指令），外部中断是被动的（硬件信号），两者触发来源和处理细节不同，但都是进入内核态的入口。"
      },
      {
        id: "final-tf-04",
        type: "true-false",
        title: "中级调度器",
        question: "中级调度器通过将作业从主存调出到外部存储（如磁盘）从而优化系统的内存使用和整体性能。",
        answer: true,
        points: 1,
        explanation: "中级调度（medium-term scheduler）负责进程的挂起与激活，通过换出/换入（swapping）来调节内存压力，优化内存使用和系统性能。"
      },
      {
        id: "final-tf-05",
        type: "true-false",
        title: "exec() 与 PID",
        question: "调用 exec() 系统调用会用新程序替换当前进程的地址空间，导致进程的页表信息被替换，从而也修改了该进程的 ID（即 PID）。",
        answer: false,
        points: 1,
        explanation: "exec() 替换进程的地址空间和代码，但不会改变进程的 PID。PID 在 fork() 时分配，exec() 仅替换程序内容，进程仍然是同一个。"
      },
      {
        id: "final-tf-06",
        type: "true-false",
        title: "第二次机会算法",
        question: "第二次机会算法选择最近有引用的页面作为被淘汰页面。",
        answer: false,
        points: 1,
        explanation: '第二次机会（Second Chance）算法是改进的 FIFO：它检查队首页面的引用位，如果引用位为 1，则将其清零并移到队尾（给予第二次机会）；选择引用位为 0 的页面淘汰。因此它淘汰的是"最近没有引用"的页面，而不是"最近有引用"的页面。'
      },
      {
        id: "final-tf-07",
        type: "true-false",
        title: "反置页表",
        question: "反置页表（也称反向页表）为每个进程的每个虚拟页保留一个条目。",
        answer: false,
        points: 1,
        explanation: "反置页表（Inverted Page Table）为每个物理页框保留一个条目，记录该页框被哪个进程的哪个虚拟页占用。它与虚拟地址空间大小无关，只与物理内存大小相关。"
      },
      {
        id: "final-tf-08",
        type: "true-false",
        title: "硬链接与软链接",
        question: "在 EXT2、EXT3 等文件系统中，指向同一个文件的多个硬链接共享相同 inode 号，删除其中任意一个不会影响数据完整性，而软链接是某个文件的快捷方式，其本身也是一个独立的文件对象。",
        answer: true,
        points: 1,
        explanation: "硬链接共享 inode，删除任意一个链接文件数据仍存在（只要还有一个硬链接）。软链接（符号链接）是独立的 inode，存储目标路径，删除源文件后软链接失效。"
      },
      {
        id: "final-tf-09",
        type: "true-false",
        title: "文件系统挂载",
        question: "文件系统挂载时，内核将该文件系统的超级块信息加载到内存中。",
        answer: true,
        points: 1,
        explanation: "挂载（mount）操作将文件系统的超级块（superblock）读入内存，超级块包含文件系统的元信息（如块大小、inode 数量、空闲块信息等）。"
      },
      {
        id: "final-tf-10",
        type: "true-false",
        title: "内核级线程阻塞",
        question: "如果内核级线程在执行系统调用时被阻塞，会阻塞与该进程相关的所有线程。",
        answer: false,
        points: 1,
        explanation: "内核级线程由内核管理，每个内核线程独立调度。一个内核级线程阻塞不会阻塞同一进程的其他内核级线程。这是内核级线程相比用户级线程的优势之一。（用户级线程中一个线程阻塞会阻塞整个进程。）"
      }
    ];
    const singleChoiceQuestions = [
      {
        id: "final-choice-01",
        type: "single",
        title: "页表项与地址空间",
        question: "以下说法正确的是：",
        options: [
          { label: "A", text: "两个不同进程对应的页表中可能包含内容相同的页表项" },
          { label: "B", text: "虚拟地址空间总是大于物理地址空间" },
          { label: "C", text: "在页式内存管理下，页面尺寸越小越有利于消除外碎片，提高内存使用效率" },
          { label: "D", text: "在段式内存管理下，不同分段尺寸大小可以不同，从而可以消除外碎片" }
        ],
        answer: "A",
        points: 2,
        explanation: "A 正确，例如共享内存区域的页表项即可相同。B 错误，虚拟地址空间可以小于物理地址空间。C 错误，页面越小内碎片越小但页表开销越大，且分页本身无外碎片。D 错误，段式管理各段大小不同反而可能产生外碎片。"
      },
      {
        id: "final-choice-02",
        type: "single",
        title: "多级页表",
        question: "关于多级页表，下列说法错误的是：",
        options: [
          { label: "A", text: "能够减少页表占用内存的大小" },
          { label: "B", text: "级数越多，平均访问内存的时间越长" },
          { label: "C", text: "有效的页表项中都会存储页框号" },
          { label: "D", text: "使用二级页表的平均访存性能优于一级页表" }
        ],
        answer: "D",
        points: 2,
        explanation: "二级页表需要两次访问内存才能完成地址转换（一次查页目录，一次查页表），一级页表只需一次，所以二级页表访存性能比一级页表差。多级页表的优势在于节省页表内存（A 对），但代价是增加访存次数（B 对）。"
      },
      {
        id: "final-choice-03",
        type: "single",
        title: "页表项结构",
        question: "关于页表项结构的下列说法中，正确的是：",
        options: [
          { label: "A", text: "当操作系统把该页从物理内存调出时，会对有效位置位" },
          { label: "B", text: "当硬件在写入一个页面时，硬件将该页的修改位置为 0" },
          { label: "C", text: "页表项可用于实现页面到页框的映射" },
          { label: "D", text: "页表项会保存对应页面的外存地址" }
        ],
        answer: "C",
        points: 2,
        explanation: "C 正确，页表项的核心功能是实现虚拟页号到物理页框号的映射。A 错误，页面调出时有效位应清零（置为无效）。B 错误，写入页面时修改位（dirty bit）置 1。D 错误，页表项记录物理页框号，不记录外存地址。"
      },
      {
        id: "final-choice-04",
        type: "single",
        title: "文件系统说法",
        question: "关于文件系统，下面说法错误的是：",
        options: [
          { label: "A", text: "目录也是一种文件" },
          { label: "B", text: "连续文件不利于文件的动态修改" },
          { label: "C", text: "串联文件随机访问效率较低" },
          { label: "D", text: "索引文件结构能支持大文件存储，但小文件存取效率较低" }
        ],
        answer: "D",
        points: 2,
        explanation: "A 正确，Unix 中一切皆文件，目录是特殊文件。B 正确，连续文件难以动态扩展。C 正确，串联文件需要沿链遍历才能随机访问。D 错误，索引文件对小文件同样高效（直接通过索引表定位），甚至小文件可以直接用直接索引访问。"
      },
      {
        id: "final-choice-05",
        type: "single",
        title: "上下文切换",
        question: "以下说法正确的是：",
        options: [
          { label: "A", text: "进程上下文切换过程一定会陷入内核" },
          { label: "B", text: "陷入内核一定会导致进程切换" },
          { label: "C", text: "正在执行的程序不可以主动放弃 CPU" },
          { label: "D", text: "系统调用一定会导致进程上下文切换" }
        ],
        answer: "A",
        points: 2,
        explanation: "A 正确，进程上下文切换需要保存/恢复寄存器、页表、内核栈等，只能在内核态完成。B 错误，系统调用陷入内核但不一定切换进程。C 错误，程序可以通过 yield() 或阻塞操作主动放弃 CPU。D 错误，简单的系统调用（如 getpid）完成后返回原进程，不切换。"
      },
      {
        id: "final-choice-06",
        type: "single",
        title: "局部性原理",
        question: "关于程序的局部性原理，错误的是：",
        options: [
          { label: "A", text: "局部性原理包括时间局部性和空间局部性" },
          { label: "B", text: "进程调度的有效运转依赖程序的局部性原理" },
          { label: "C", text: "程序中的循环结构会导致程序的时间局部性" },
          { label: "D", text: "主存-辅存机制的有效运转依赖程序的局部性原理" }
        ],
        answer: "B",
        points: 2,
        explanation: "B 错误，进程调度不依赖局部性原理。局部性原理主要支撑缓存和虚拟内存机制（D 对）。A/C 正确，循环结构反复执行同一段代码，体现时间局部性。"
      },
      {
        id: "final-choice-07",
        type: "single",
        title: "死锁",
        question: "关于死锁，错误的是：",
        options: [
          { label: "A", text: "通讯死锁和资源死锁都属于死锁" },
          { label: "B", text: "死锁预防主要通过破坏死锁产生的四个必要条件之一" },
          { label: "C", text: "死锁避免是处理死锁的静态措施" },
          { label: "D", text: "银行家算法在运行前需要知道进程所需资源最大值" }
        ],
        answer: "C",
        points: 2,
        explanation: "C 错误，死锁避免（如银行家算法）是动态措施——在系统运行过程中动态判断资源分配是否会导致不安全状态。死锁预防才是静态措施（在系统设计时预先破坏必要条件）。A/B/D 均正确。"
      },
      {
        id: "final-choice-08",
        type: "single",
        title: "IPC",
        question: "关于 IPC，错误的是：",
        options: [
          { label: "A", text: "共享内存比信号的信息承载量要大" },
          { label: "B", text: "消息传递是最快的 IPC 形式" },
          { label: "C", text: "套接字不仅可用于不同机器之间的进程通讯，也可用于本机的两进程通讯" },
          { label: "D", text: "消息传递在安全性上要优于共享内存" }
        ],
        answer: "B",
        points: 2,
        explanation: "B 错误，共享内存是最快的 IPC 形式（无需内核介入数据拷贝）。消息传递需要内核参与消息的复制和传递，速度相对较慢。A/C/D 均正确。"
      },
      {
        id: "final-choice-09",
        type: "single",
        title: "RAID",
        question: "关于 RAID 错误的是：",
        options: [
          { label: "A", text: "条带化是提升磁盘访问性能的有效手段" },
          { label: "B", text: "RAID4 和 RAID5 都可以容忍一块磁盘故障" },
          { label: "C", text: "分布的冗余校验是为了避免奇偶校验磁盘成为瓶颈" },
          { label: "D", text: "RAID 6 与 RAID 5 的冗余盘数量相同" }
        ],
        answer: "D",
        points: 2,
        explanation: "D 错误，RAID 5 使用 1 块冗余盘（单奇偶校验），RAID 6 使用 2 块冗余盘（双奇偶校验），能容忍两块磁盘故障。A/B/C 均正确，RAID 5 将校验信息分布到所有磁盘以消除瓶颈。"
      },
      {
        id: "final-choice-10",
        type: "single",
        title: "I/O 软件层次",
        question: "关于 I/O 软件错误的是：",
        options: [
          { label: "A", text: "设置网卡的寄存器在驱动层" },
          { label: "B", text: "I/O 格式化技术属于用户层" },
          { label: "C", text: "缓冲机制属于设备无关软件层" },
          { label: "D", text: "检查用户是否允许使用设备在用户层" }
        ],
        answer: "D",
        points: 2,
        explanation: "D 错误，检查用户权限应在内核的设备无关软件层完成，而非用户层。A 正确，设备驱动程序直接操作设备寄存器。B 正确，格式化工具是用户态程序。C 正确，缓冲机制在设备无关层实现。"
      }
    ];
    const blankQuestions = [
      {
        id: "final-blank-01-fifo",
        type: "blank",
        title: "页面置换 FIFO 计算",
        question: `${fifoOptQuestionStem} 采用 FIFO 算法进行页面置换，完成上述内存页面访问会产生多少次缺页中断？`,
        answers: ["3n-2"],
        answerText: "3n-2",
        points: 1,
        explanation: "FIFO: 首次访问 n 个页面产生 n 次缺页。后续每轮 n 个页面中前 n-1 个在内存中，只有最后访问的页面 1 不在内存中产生缺页。三轮共 3n-2 次缺页。"
      },
      {
        id: "final-blank-01-opt",
        type: "blank",
        title: "页面置换 OPT 计算",
        question: `${fifoOptQuestionStem} 采用 OPT 算法进行页面置换，完成上述内存页面访问会产生多少次缺页中断？`,
        answers: ["2n"],
        answerText: "2n",
        points: 1,
        explanation: "OPT 最优算法：第一轮 n 次缺页，第二轮和第三轮各 n 次缺页（因为页面 1 在 n 次访问之后才会再用，被淘汰），所以是 2n 次。"
      },
      {
        id: "final-blank-02-disks",
        type: "blank",
        title: "RAID-5 最少磁盘数",
        question: "一个 RAID-5 系统，至少需要多少块磁盘才能构建？",
        answers: ["3"],
        answerText: "3",
        points: 1,
        explanation: "RAID 5 至少需要 3 块磁盘（数据分布在 n-1 块磁盘，1 块用于奇偶校验）。"
      },
      {
        id: "final-blank-02-fault",
        type: "blank",
        title: "RAID-5 容错磁盘数",
        question: "一个 RAID-5 系统，为确保不丢失数据，该系统最多可以容忍多少块磁盘故障？",
        answers: ["1"],
        answerText: "1",
        points: 1,
        explanation: "RAID 5 使用单奇偶校验，最多容忍 1 块磁盘故障。"
      },
      {
        id: "final-blank-03",
        type: "blank",
        title: "进程状态转换条件",
        question: "在操作系统进程状态模型中，进程从运行态转换到就绪态的条件是什么？",
        answers: ["时间片用完", "时间片到", "被抢占"],
        answerText: "时间片用完",
        points: 1,
        explanation: "进程从运行态到就绪态的经典原因是时间片用完或被更高优先级进程抢占，进程回到就绪队列等待下一次调度。运行→阻塞的原因是等待 I/O 等事件。"
      },
      {
        id: "final-blank-04",
        type: "blank",
        title: "位示图空间计算",
        question: "1 个物理盘块大小为 4KB，一个 1TB 硬盘，采用位示图法管理磁盘块空闲情况，需要占用多少 MB 磁盘存储空间？",
        answers: ["32"],
        answerText: "32",
        points: 1,
        explanation: "1TB / 4KB = 2^40 / 2^12 = 2^28 个盘块。位示图中每个盘块占 1 bit，共需 2^28 bits = 2^25 Bytes = 32 MB。"
      },
      {
        id: "final-blank-05",
        type: "blank",
        title: "BSS 段",
        question: "在 C 语言中的未初始化全局变量在运行时会在哪个段上分配存储空间？",
        answers: ["BSS", "bss"],
        answerText: "BSS",
        points: 1,
        explanation: "未初始化的全局变量和静态变量存放在 BSS 段（Block Started by Symbol），程序加载时由 OS 初始化为 0，不占用可执行文件空间。已初始化的全局变量存放在 DATA 段。"
      },
      {
        id: "final-blank-06-role",
        type: "blank",
        title: "实时系统主导因素",
        question: "实时系统是一种什么起着主导作用的系统？",
        answers: ["时间"],
        answerText: "时间",
        points: 1,
        explanation: "实时系统的核心特征是时间约束，时间起着主导作用。"
      },
      {
        id: "final-blank-06-deadline",
        type: "blank",
        title: "实时系统响应时间",
        question: "当外部的一种或多种物理设备给计算机一个刺激，计算机必须在什么时间内恰当地做出反应？",
        answers: ["规定时间", "指定时间", "截止时间"],
        answerText: "规定时间/截止时间",
        points: 1,
        explanation: "实时系统必须在规定的时间（deadline）内完成响应，否则可能导致系统失效。"
      },
      {
        id: "final-blank-07",
        type: "blank",
        title: "ABI 兼容",
        question: "如果一个二进制程序在两个不同的操作系统上都可以直接运行，则这两个操作系统是什么兼容的？",
        answers: ["ABI", "二进制", "binary"],
        answerText: "ABI / 二进制",
        points: 1,
        explanation: "ABI（Application Binary Interface）兼容意味着二进制程序无需重新编译即可在不同系统上运行。ABI 定义了二进制接口规范（调用约定、系统调用号、可执行文件格式等）。"
      }
    ];
    const subjectiveQuestions = [
      {
        id: "final-subj-01",
        title: "四-1 设备死锁最小值",
        points: 5,
        prompt: "某系统有 m 台互斥使用的同类设备，n 个并发进程完成执行分别需要 1，2，3，…，n 台设备。求 m 的最小值，使系统不会发生死锁。",
        answer: [
          "最坏情况下每个进程占用所需设备数-1 台：进程 1 占用 0 台（需 1 台），进程 2 占用 1 台（需 2 台），...，进程 n 占用 n-1 台（需 n 台）。",
          "此时总占用 = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 台。",
          "为避免死锁，至少还需要 1 台设备满足某个进程的剩余需求，即 m ≥ n(n-1)/2 + 1 台。",
          "因此 m 的最小值为 n(n-1)/2 + 1。"
        ],
        rubric: [
          "正确写出最坏情况下的资源占用（2分）",
          "正确计算总占用 n(n-1)/2（1分）",
          "正确得出 m = n(n-1)/2 + 1（2分）"
        ]
      },
      {
        id: "final-subj-02",
        title: "四-2 银行家算法",
        points: 5,
        prompt: "假设具有 5 个进程的进程集合 P={P0,P1,P2,P3,P4}，考虑 CPU 和内存两类资源。在某时刻的状态如表所示（已分配/最大需求）。当前系统剩余可利用资源为：CPU 4 核；内存 6MB。系统当前是否安全？若安全请给出安全序列；若不安全说明原因。",
        details: [
          "P0: 已分配 CPU=2, 内存=2; 最大需求 CPU=5, 内存=10",
          "P1: 已分配 CPU=1, 内存=6; 最大需求 CPU=6, 内存=7",
          "P2: 已分配 CPU=1, 内存=15; 最大需求 CPU=4, 内存=20",
          "P3: 已分配 CPU=4, 内存=7; 最大需求 CPU=10, 内存=8",
          "P4: 已分配 CPU=4, 内存=12; 最大需求 CPU=12, 内存=15"
        ],
        answer: [
          "计算各进程剩余需求（Need = Max - Allocated）：",
          "P0: Need=(3,8), P1: Need=(5,1), P2: Need=(3,5), P3: Need=(6,1), P4: Need=(8,3)",
          "当前可用资源 Available=(4,6)",
          "尝试寻找安全序列：",
          "先满足 P2? Need(3,5) ≤ Avail(4,6)，可以！分配后 P2 完成释放，Avail = (4,6)+(1,15) = (5,21)",
          "再满足 P0? Need(3,8) ≤ (5,21)，可以！Avail = (5,21)+(2,2) = (7,23)",
          "再满足 P1? Need(5,1) ≤ (7,23)，可以！Avail = (7,23)+(1,6) = (8,29)",
          "再满足 P3? Need(6,1) ≤ (8,29)，可以！Avail = (8,29)+(4,7) = (12,36)",
          "再满足 P4? Need(8,3) ≤ (12,36)，可以！",
          "系统处于安全状态。安全序列：P2→P0→P1→P3→P4（不唯一）"
        ],
        rubric: [
          "正确计算各进程剩余需求 Need（1分）",
          "正确进行安全性检查算法（2分）",
          "正确给出安全序列并验证（2分）"
        ]
      },
      {
        id: "final-subj-03",
        title: "五 64位4级页表",
        points: 12,
        prompt: "一个 64 位系统架构中内存采用 4 级页表管理，每个页面大小 8192 字节，每个页表项占 8 字节，每一级页表项恰好填满一页。",
        details: [
          "1. (2分) 页内偏移在虚拟地址中占几位？",
          "2. (4分) 计算有效虚拟地址位长度和有效地址空间大小。",
          "3. (3分) 画出虚拟地址结构，标出各个部分起止位置和长度。",
          "4. (3分) 假设当前进程的第一级页表（页目录）起始物理地址为 0x4000，给出虚拟地址 0xFFFFABC123456789 对应的页目录表项的物理地址。"
        ],
        answer: [
          "1. 页面大小 = 8192 = 2^13 字节，页内偏移占 13 位。",
          "2. 每级页表索引位数 = log2(8192/8) = log2(1024) = 10 位。4 级页表共 4×10 + 13 = 53 位。有效虚拟地址位长度为 53 位，有效地址空间为 2^53 字节 = 8 PB。",
          "3. | 一级(bit 52-43) | 二级(bit 42-33) | 三级(bit 32-23) | 四级(bit 22-13) | 偏移(bit 12-0) |，每级 10 位，偏移 13 位。",
          "4. 虚拟地址 0xFFFFABC123456789，取 bit 52-43 得一级页表索引。页表项大小 8 字节，页目录表项物理地址 = 0x4000 + 一级索引 × 8。由于地址只有低 53 位有效，需截取 bit 52-43 计算。具体计算：(0xFFFFABC123456789 >> 43) & 0x3FF = 索引值，进而得到最终物理地址。"
        ],
        rubric: [
          "小题1: 正确得出 13 位（2分）",
          "小题2: 正确计算每级位数（2分），正确计算有效位和地址空间（2分）",
          "小题3: 正确画出结构并标注起止位置（3分）",
          "小题4: 正确提取一级索引（2分），正确计算物理地址（1分）"
        ]
      },
      {
        id: "final-subj-04",
        title: "六 磁盘访问时间计算",
        points: 8,
        prompt: "某磁盘的平均寻道时间是 10 ms，旋转速度为 7500 rpm（转/分钟），每磁道可存储 32KB。该磁盘上文件系统的数据块大小是 4KB，文件的平均大小也是 4KB。若不考虑读取文件控制块和目录的时间，从该磁盘中读取一个文件的平均时间为多少 ms？",
        answer: [
          "平均旋转延迟 = 0.5 / (7500/60) = 0.5 / 125 = 4 ms",
          "每磁道 32KB，文件大小 = 数据块大小 = 4KB，每个文件占 1 个数据块。",
          "传输一个 4KB 块的时间 = (4KB / 32KB) × (60/7500) = (1/8) × 8ms = 1 ms",
          "总平均时间 = 平均寻道 + 平均旋转延迟 + 传输时间 = 10 + 4 + 1 = 15 ms"
        ],
        rubric: [
          "正确计算平均旋转延迟（2分）",
          "正确计算传输时间（3分）",
          "正确求和得出总时间（3分）"
        ]
      },
      {
        id: "final-subj-05",
        title: "七 多级队列调度",
        points: 10,
        prompt: "某系统采用多级队列调度算法，设有以下两个队列：高优先级队列 Q1 采用时间片轮转（RR）调度，时间片长度为 2；低优先级队列 Q2 采用先来先服务（FCFS）调度。调度规则：a) 新到达的进程首先进入 Q1；b) 若进程在 Q1 中用完一个时间片后未完成，则被移入 Q2；c) 仅当 Q1 为空时，才调度 Q2 中的进程；d) 进程一旦开始执行，就不会被打断，除非时间片用完。",
        details: [
          "进程到达时间和执行时间：P1(0,8), P2(1,4), P3(2,5), P4(3,2)"
        ],
        answer: [
          "时间线：",
          "t=0: Q1=[P1], P1 运行 2 单位，P1 剩余 6，P1 降级到 Q2",
          "t=2: Q1=[P2,P3], Q2=[P1(6)]。P2 运行 2 单位，P2 剩余 2，P2 降级",
          "t=4: Q1=[P3], Q2=[P1(6),P2(2)]。P3 运行 2 单位，P3 剩余 3，P3 降级",
          "t=6: P4 已到达(t=3)。Q1=[P4], Q2=[P1(6),P2(2),P3(3)]。P4 运行 2 单位，P4 完成！",
          "t=8: Q1=[], 调度 Q2。P1 运行(不可抢占)，P1 运行 6 单位，t=14 完成",
          "t=14: P2 运行 2 单位，t=16 完成",
          "t=16: P3 运行 3 单位，t=19 完成",
          "完成时间：P1=14, P2=16, P3=19, P4=8",
          "周转时间 = 完成时间 - 到达时间：P1=14, P2=15, P3=17, P4=5",
          "平均周转时间 = (14+15+17+5)/4 = 12.75"
        ],
        rubric: [
          "正确画出调度时序图（3分）",
          "正确计算各进程完成时间和周转时间（4分）",
          "正确计算平均周转时间（3分）"
        ]
      },
      {
        id: "final-subj-06",
        title: "八-1 PV 操作分析",
        points: 4,
        prompt: "多个线程之间共享访问变量 x（初值为 0），为了保障线程之间的同步，定义了一个互斥信号量 mutex（初值为 1），并用 PV 操作来实现同步，伪代码如下。请分析代码是否保证了线程对变量 x 的互斥访问？x 的取值是否可能大于 1？并给出解释。",
        details: [
          "P(mutex); if (x == 0) { V(mutex); P(mutex); x++; } V(mutex);"
        ],
        answer: [
          "代码没有保证互斥访问。分析如下：",
          "线程 A 进入：P(mutex)，x==0，执行 V(mutex) 释放锁，再执行 P(mutex) 等待重新获取。",
          "在线程 A 执行 V(mutex) 和 P(mutex) 之间，线程 B 可能获得锁。线程 B 也检测到 x==0，也执行同样的操作。",
          "如果两个线程先后获得锁并执行 x++，x 的取值可能大于 1。",
          "该代码存在竞态条件，关键在于释放锁和重新获取锁之间存在窗口期。"
        ],
        rubric: [
          "正确判断未保证互斥（1分）",
          "正确分析竞态窗口期（2分）",
          "正确说明 x 可能大于 1（1分）"
        ]
      },
      {
        id: "final-subj-07",
        title: "八-2 屏障同步设计",
        points: 7,
        prompt: "在一些多线程的应用场景中，各线程需要在某个执行点处进行汇合，汇合之后再并发执行。如果除了信号量之外，不允许使用任何共享变量。请用 PV 操作设计一个函数 Barrier(int threadID)，threadID 为调用 Barrier 函数的线程的 ID。只要每个线程都调用 Barrier，就能解决 N 个线程的汇合问题。请定义信号量，并用伪代码给出 Barrier 函数的实现。",
        answer: [
          "定义信号量：semaphore arrive[N] = {0, 0, ..., 0}; // N 个信号量，初值均为 0",
          "实现思路：线程 i 到达后，通知下一个线程（signal(arrive[(i+1) % N])），然后等待自己的信号量（wait(arrive[i])）。",
          "void Barrier(int threadID) {",
          "  int next = (threadID + 1) % N;",
          "  signal(arrive[next]);   // 通知下一个线程，我已到达",
          "  wait(arrive[threadID]); // 等待上一个线程通知我",
          "}",
          "当所有 N 个线程都完成 signal 和 wait 后，所有线程同时从 wait 中唤醒，实现汇合。"
        ],
        rubric: [
          "正确定义信号量类型和初值（2分）",
          "正确设计 signal 逻辑（2分）",
          "正确设计 wait 逻辑（2分）",
          "正确解释汇合原理（1分）"
        ]
      },
      {
        id: "final-subj-08",
        title: "九 文件结构推荐",
        points: 9,
        prompt: "文件系统有三种典型的逻辑组织结构，包括连续文件、链接文件和索引文件。针对以下三类用户需求，请推荐一种最适合的文件结构，并给出解释。",
        details: [
          "1. (3分) 文件系统的性能主要取决于对于大文件的连续访问。",
          "2. (3分) 文件系统的性能主要取决于对于大文件的随机访问。",
          "3. (3分) 提高磁盘空间的利用率是文件系统的主要目标。"
        ],
        answer: [
          "1. 推荐连续文件结构。连续文件在磁盘上连续存放，对顺序访问非常高效（只需一次寻道），特别适合大文件的连续读写。",
          "2. 推荐索引文件结构。索引文件通过索引表直接定位到任意数据块，无需遍历链表，随机访问效率高，适合大文件的随机访问。",
          "3. 推荐链接文件结构。链接文件不要求连续空间，可以充分利用磁盘的零散空闲块，磁盘空间利用率最高。"
        ],
        rubric: [
          "第1题：推荐连续文件并给出合理理由（3分）",
          "第2题：推荐索引文件并给出合理理由（3分）",
          "第3题：推荐链接文件并给出合理理由（3分）"
        ]
      }
    ];
    const trueFalseAnswers = ref({});
    const choiceAnswers = ref({});
    const blankAnswers = ref({});
    const subjectiveAnswers = ref({});
    const subjectiveJudgements = ref({});
    const submitted = ref(false);
    const objectiveQuestions = computed(() => [
      ...trueFalseQuestions,
      ...singleChoiceQuestions,
      ...blankQuestions
    ]);
    const objectiveMaxScore = computed(() => objectiveQuestions.value.reduce((sum, question) => sum + question.points, 0));
    const subjectiveMaxScore = computed(() => subjectiveQuestions.reduce((sum, question) => sum + question.points, 0));
    const totalScore = computed(() => objectiveMaxScore.value + subjectiveMaxScore.value);
    const objectiveAnsweredCount = computed(() => {
      const trueFalseCount = trueFalseQuestions.filter((question) => typeof trueFalseAnswers.value[question.id] === "boolean").length;
      const choiceCount = singleChoiceQuestions.filter((question) => Boolean(choiceAnswers.value[question.id])).length;
      const blankCount = blankQuestions.filter((question) => {
        var _a;
        return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
      }).length;
      return trueFalseCount + choiceCount + blankCount;
    });
    const subjectiveAnsweredCount = computed(() => subjectiveQuestions.filter((question) => {
      var _a;
      return Boolean((_a = subjectiveAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }).length);
    const answeredCount = computed(() => objectiveAnsweredCount.value + subjectiveAnsweredCount.value);
    const questionCount = computed(() => objectiveQuestions.value.length + subjectiveQuestions.length);
    const unansweredCount = computed(() => questionCount.value - answeredCount.value);
    const subjectiveJudgedCount = computed(() => subjectiveQuestions.filter((question) => typeof subjectiveJudgements.value[question.id] === "boolean").length);
    const objectiveScore = computed(() => {
      if (!submitted.value) return 0;
      return objectiveQuestions.value.reduce((sum, question) => isObjectiveCorrect(question) ? sum + question.points : sum, 0);
    });
    function normalizeAnswer(value) {
      return value.trim().toLowerCase().replace(/[，。；;：:、,.]/g, "").replace(/[（）()]/g, "").replace(/\s+/g, "");
    }
    function boolLabel(value) {
      if (typeof value !== "boolean") return "未作答";
      return value ? "√" : "×";
    }
    function isBlankCorrect(question) {
      const selected = normalizeAnswer(blankAnswers.value[question.id] || "");
      return question.answers.some((answer) => normalizeAnswer(answer) === selected);
    }
    function isObjectiveCorrect(question) {
      if (question.type === "true-false") {
        return trueFalseAnswers.value[question.id] === question.answer;
      }
      if (question.type === "single") {
        return choiceAnswers.value[question.id] === question.answer;
      }
      return isBlankCorrect(question);
    }
    function hasObjectiveAnswer(question) {
      var _a;
      if (question.type === "true-false") {
        return typeof trueFalseAnswers.value[question.id] === "boolean";
      }
      if (question.type === "single") {
        return Boolean(choiceAnswers.value[question.id]);
      }
      return Boolean((_a = blankAnswers.value[question.id]) == null ? void 0 : _a.trim());
    }
    function selectedText(question) {
      if (question.type === "true-false") return boolLabel(trueFalseAnswers.value[question.id]);
      if (question.type === "single") return choiceAnswers.value[question.id] || "未作答";
      return blankAnswers.value[question.id] || "未作答";
    }
    function answerText(question) {
      if (question.type === "true-false") return boolLabel(question.answer);
      if (question.type === "single") return question.answer;
      return question.answerText;
    }
    function objectiveOptions(question) {
      if (question.type === "true-false") {
        return [
          { label: boolLabel(true), text: "正确" },
          { label: boolLabel(false), text: "错误" }
        ];
      }
      if (question.type === "single") return question.options;
      return [];
    }
    function subjectiveQuestionText(question) {
      return [question.prompt, ...question.details || []].join("\n");
    }
    function recordObjective(question) {
      recordQuestion({
        id: `exam:2025-final:${question.id}`,
        type: question.type === "true-false" ? "true-false" : question.type,
        collection: "2025-final",
        title: `2025 期末 - ${question.title}`,
        question: question.question,
        options: objectiveOptions(question),
        explanation: question.explanation,
        selected: selectedText(question),
        answer: answerText(question),
        correct: isObjectiveCorrect(question),
        at: Date.now()
      });
    }
    function submitPaper() {
      if (answeredCount.value === 0) return;
      submitted.value = true;
      objectiveQuestions.value.filter(hasObjectiveAnswer).forEach(recordObjective);
    }
    function judgeSubjective(question, correct) {
      var _a;
      subjectiveJudgements.value[question.id] = correct;
      recordQuestion({
        id: `exam:2025-final:${question.id}`,
        type: "subjective",
        collection: "2025-final",
        title: `2025 期末 - ${question.title}`,
        question: subjectiveQuestionText(question),
        explanation: (_a = question.rubric) == null ? void 0 : _a.join("；"),
        selected: subjectiveAnswers.value[question.id],
        answer: question.answer.join("；"),
        correct,
        at: Date.now()
      });
    }
    function resetPaper() {
      trueFalseAnswers.value = {};
      choiceAnswers.value = {};
      blankAnswers.value = {};
      subjectiveAnswers.value = {};
      subjectiveJudgements.value = {};
      submitted.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$a, [
        createBaseVNode("header", _hoisted_2$8, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("p", { class: "exam-paper__eyebrow" }, "Interactive Exam"),
            createBaseVNode("h2", null, "2025 期末考试"),
            createBaseVNode("p", null, "提交已作答题目后显示答案并自动判分；之后可以继续作答、再次提交刷新记录。")
          ], -1)),
          createBaseVNode("div", _hoisted_3$8, [
            createBaseVNode("strong", null, toDisplayString(submitted.value ? objectiveScore.value : "-"), 1),
            createBaseVNode("span", null, "/ " + toDisplayString(objectiveMaxScore.value) + " 客观题分", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$5, [
          createBaseVNode("span", null, toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + " 已作答", 1),
          createBaseVNode("span", null, "客观题 " + toDisplayString(objectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "主观题 " + toDisplayString(subjectiveMaxScore.value) + " 分", 1),
          createBaseVNode("span", null, "总分 " + toDisplayString(totalScore.value) + " 分", 1)
        ]),
        createBaseVNode("section", _hoisted_5$5, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", null, "一、判断题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(trueFalseQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_6$4, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_7$4, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === true }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = true
                }, " √ ", 10, _hoisted_8$4),
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass({ "is-selected": trueFalseAnswers.value[question.id] === false }),
                  onClick: ($event) => trueFalseAnswers.value[question.id] = false
                }, " × ", 10, _hoisted_9$4)
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_10$3, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", null, "二、单项选择题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(singleChoiceQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("div", _hoisted_11$2, [
                createBaseVNode("strong", null, toDisplayString(index + 1) + ".", 1),
                createBaseVNode("span", null, toDisplayString(question.question), 1)
              ]),
              createBaseVNode("div", _hoisted_12$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(question.options, (option) => {
                  return openBlock(), createElementBlock("button", {
                    key: option.label,
                    type: "button",
                    class: normalizeClass({
                      "is-selected": choiceAnswers.value[question.id] === option.label,
                      "is-answer": submitted.value && question.answer === option.label,
                      "is-wrong": submitted.value && choiceAnswers.value[question.id] === option.label && !isObjectiveCorrect(question)
                    }),
                    onClick: ($event) => choiceAnswers.value[question.id] = option.label
                  }, [
                    createBaseVNode("strong", null, toDisplayString(option.label), 1),
                    createBaseVNode("span", null, toDisplayString(option.text), 1)
                  ], 10, _hoisted_13$2);
                }), 128))
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `错误，答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_14$2, [
          _cache[3] || (_cache[3] = createBaseVNode("h3", null, "三、填空题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(blankQuestions, (question, index) => {
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question"
            }, [
              createBaseVNode("label", _hoisted_15$2, [
                createBaseVNode("span", null, toDisplayString(index + 1) + ". " + toDisplayString(question.question), 1),
                createVNode(ExamSupplements, {
                  blocks: question.supplements
                }, null, 8, ["blocks"]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => blankAnswers.value[question.id] = $event,
                  type: "text",
                  placeholder: "输入答案"
                }, null, 8, _hoisted_16$1), [
                  [vModelText, blankAnswers.value[question.id]]
                ])
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["exam-result", { "is-correct": isObjectiveCorrect(question) }])
              }, [
                createBaseVNode("strong", null, toDisplayString(isObjectiveCorrect(question) ? "正确" : `标准答案：${answerText(question)}`), 1),
                createBaseVNode("p", null, toDisplayString(question.explanation), 1)
              ], 2)) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_17$1, [
          _cache[6] || (_cache[6] = createBaseVNode("h3", null, "四至九、主观题", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(subjectiveQuestions, (question) => {
            var _a, _b;
            return createBaseVNode("article", {
              key: question.id,
              class: "exam-question exam-question--subjective"
            }, [
              createBaseVNode("header", _hoisted_18$1, [
                createBaseVNode("div", null, [
                  createBaseVNode("strong", null, toDisplayString(question.title), 1),
                  createBaseVNode("span", null, toDisplayString(question.points) + " 分", 1)
                ])
              ]),
              createBaseVNode("p", _hoisted_19$1, toDisplayString(question.prompt), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(question.details, (detail) => {
                return openBlock(), createElementBlock("pre", {
                  key: detail,
                  class: "exam-subjective__detail"
                }, toDisplayString(detail), 1);
              }), 128)),
              createVNode(ExamSupplements, {
                blocks: question.supplements
              }, null, 8, ["blocks"]),
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": ($event) => subjectiveAnswers.value[question.id] = $event,
                rows: "6",
                placeholder: "写下你的作答要点"
              }, null, 8, _hoisted_20$1), [
                [vModelText, subjectiveAnswers.value[question.id]]
              ]),
              submitted.value ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
                _cache[5] || (_cache[5] = createBaseVNode("h4", null, "参考答案", -1)),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.answer, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ]),
                ((_a = question.rubric) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("h4", _hoisted_22$1, "评分要点")) : createCommentVNode("", true),
                ((_b = question.rubric) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("ul", _hoisted_23, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(question.rubric, (item) => {
                    return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_24, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", null, "自主判题：", -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected": subjectiveJudgements.value[question.id] === true }),
                    onClick: ($event) => judgeSubjective(question, true)
                  }, " 判为正确 ", 10, _hoisted_25),
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ "is-selected is-wrong": subjectiveJudgements.value[question.id] === false }),
                    onClick: ($event) => judgeSubjective(question, false)
                  }, " 加入错题 ", 10, _hoisted_26)
                ])
              ])) : createCommentVNode("", true)
            ]);
          }), 64))
        ]),
        createBaseVNode("footer", _hoisted_27, [
          createBaseVNode("button", {
            type: "button",
            disabled: answeredCount.value === 0,
            onClick: submitPaper
          }, toDisplayString(submitted.value ? "再次提交并刷新结果" : "提交已作答题目并显示答案"), 9, _hoisted_28),
          submitted.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "is-secondary",
            onClick: resetPaper
          }, " 重新作答 ")) : createCommentVNode("", true),
          !submitted.value ? (openBlock(), createElementBlock("p", _hoisted_29, " 已作答 " + toDisplayString(answeredCount.value) + " / " + toDisplayString(questionCount.value) + "，可先提交查看答案，之后继续作答并再次提交。 ", 1)) : (openBlock(), createElementBlock("p", _hoisted_30, " 已显示答案；仍有 " + toDisplayString(unansweredCount.value) + " 题未作答，可继续填写后再次提交刷新记录。 ", 1)),
          submitted.value ? (openBlock(), createElementBlock("p", _hoisted_31, " 主观题已判 " + toDisplayString(subjectiveJudgedCount.value) + " / " + toDisplayString(subjectiveQuestions.length) + "，判为错误的题会进入错题记录。 ", 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ExamPaper2025Final = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8f246eec"]]);
const _hoisted_1$9 = { class: "fill study-card" };
const _hoisted_2$7 = { class: "fill__question" };
const _hoisted_3$7 = { class: "fill__row" };
const _hoisted_4$4 = ["placeholder"];
const _hoisted_5$4 = { key: 0 };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FillBlank",
  props: {
    id: {},
    question: {},
    answer: {},
    explanation: {},
    placeholder: { default: "输入答案后校验" },
    caseSensitive: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const input = ref("");
    const checked = ref(false);
    const answers = computed(() => Array.isArray(props.answer) ? props.answer : [props.answer]);
    function normalize(value) {
      const trimmed = value.trim();
      return props.caseSensitive ? trimmed : trimmed.toLowerCase();
    }
    const correct = computed(() => {
      const userAnswer = normalize(input.value);
      return answers.value.some((answer) => normalize(answer) === userAnswer);
    });
    function check() {
      if (!input.value.trim()) return;
      checked.value = true;
      recordQuestion({
        id: `blank:${props.id}`,
        type: "blank",
        collection: "inline",
        title: props.question,
        question: props.question,
        explanation: props.explanation,
        selected: input.value,
        answer: answers.value.join(" / "),
        correct: correct.value,
        at: Date.now()
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$9, [
        createBaseVNode("p", _hoisted_2$7, toDisplayString(__props.question), 1),
        createBaseVNode("div", _hoisted_3$7, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            class: "fill__input",
            placeholder: __props.placeholder,
            type: "text",
            onKeyup: withKeys(check, ["enter"])
          }, null, 40, _hoisted_4$4), [
            [vModelText, input.value]
          ]),
          createBaseVNode("button", {
            class: "fill__button",
            type: "button",
            onClick: check
          }, "校验")
        ]),
        checked.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["fill__result", { "is-correct": correct.value }])
        }, [
          createBaseVNode("strong", null, toDisplayString(correct.value ? "回答正确" : `标准答案：${answers.value.join(" / ")}`), 1),
          __props.explanation ? (openBlock(), createElementBlock("p", _hoisted_5$4, toDisplayString(__props.explanation), 1)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const FillBlank = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-355f8565"]]);
const _hoisted_1$8 = { class: "mermaid-block" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Mermaid",
  props: {
    code: {}
  },
  setup(__props) {
    const props = __props;
    const container = ref(null);
    let observer;
    function decodedCode() {
      try {
        return decodeURIComponent(props.code);
      } catch {
        return props.code;
      }
    }
    async function renderDiagram() {
      if (!container.value || typeof window === "undefined") return;
      const { default: mermaid } = await __vitePreload(async () => {
        const { default: mermaid2 } = await import("./mermaid.core.DAir4i3l.js").then((n) => n.bG);
        return { default: mermaid2 };
      }, true ? __vite__mapDeps([2,1]) : void 0);
      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      const dark = document.documentElement.classList.contains("dark");
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: dark ? "dark" : "default"
      });
      try {
        const { svg } = await mermaid.render(id, decodedCode());
        container.value.innerHTML = svg;
      } catch (error) {
        container.value.textContent = error instanceof Error ? error.message : "Mermaid render failed.";
      }
    }
    onMounted(() => {
      void nextTick(renderDiagram);
      observer = new MutationObserver(() => {
        void renderDiagram();
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    });
    onBeforeUnmount(() => {
      observer == null ? void 0 : observer.disconnect();
    });
    watch(() => props.code, () => {
      void renderDiagram();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("figure", _hoisted_1$8, [
        createBaseVNode("div", {
          ref_key: "container",
          ref: container,
          class: "mermaid-block__canvas"
        }, null, 512)
      ]);
    };
  }
});
const Mermaid = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b1039a6c"]]);
const _hoisted_1$7 = { class: "multi-fill study-card" };
const _hoisted_2$6 = { class: "multi-fill__question" };
const _hoisted_3$6 = { class: "multi-fill__items" };
const _hoisted_4$3 = { class: "multi-fill__label" };
const _hoisted_5$3 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_6$3 = {
  key: 0,
  class: "multi-fill__hint"
};
const _hoisted_7$3 = {
  key: 1,
  class: "multi-fill__answer"
};
const _hoisted_8$3 = ["disabled"];
const _hoisted_9$3 = { key: 0 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MultiFillBlank",
  props: {
    id: {},
    question: {},
    items: {},
    explanation: {},
    caseSensitive: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const inputs = ref(props.items.map(() => ""));
    const checked = ref(false);
    watch(() => props.items, (items) => {
      inputs.value = items.map(() => "");
      checked.value = false;
    });
    function answersOf(item) {
      return Array.isArray(item.answer) ? item.answer : [item.answer];
    }
    function normalize(value) {
      const trimmed = value.trim();
      return props.caseSensitive ? trimmed : trimmed.toLowerCase();
    }
    function itemCorrect(item, index) {
      const userAnswer = normalize(inputs.value[index] || "");
      return answersOf(item).some((answer) => normalize(answer) === userAnswer);
    }
    const canCheck = computed(() => inputs.value.every((value) => value.trim()));
    const correct = computed(() => props.items.every((item, index) => itemCorrect(item, index)));
    function standardAnswer(item) {
      return answersOf(item).join(" / ");
    }
    function check() {
      if (!canCheck.value) return;
      checked.value = true;
      recordQuestion({
        id: `blank:${props.id}`,
        type: "blank",
        collection: "inline",
        title: props.question,
        question: props.question,
        explanation: props.explanation,
        selected: props.items.map((item, index) => `${item.label}=${inputs.value[index]}`).join("; "),
        answer: props.items.map((item) => `${item.label}=${standardAnswer(item)}`).join("; "),
        correct: correct.value,
        at: Date.now()
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$7, [
        createBaseVNode("p", _hoisted_2$6, toDisplayString(__props.question), 1),
        createBaseVNode("div", _hoisted_3$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
            return openBlock(), createElementBlock("label", {
              key: item.label,
              class: normalizeClass(["multi-fill__item", {
                "is-correct": checked.value && itemCorrect(item, index),
                "is-wrong": checked.value && !itemCorrect(item, index)
              }])
            }, [
              createBaseVNode("span", _hoisted_4$3, toDisplayString(item.label), 1),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": ($event) => inputs.value[index] = $event,
                class: "multi-fill__input",
                placeholder: item.placeholder || "输入答案",
                type: "text",
                onKeyup: withKeys(check, ["enter"])
              }, null, 40, _hoisted_5$3), [
                [vModelText, inputs.value[index]]
              ]),
              item.hint ? (openBlock(), createElementBlock("small", _hoisted_6$3, toDisplayString(item.hint), 1)) : createCommentVNode("", true),
              checked.value && !itemCorrect(item, index) ? (openBlock(), createElementBlock("small", _hoisted_7$3, " 标准答案：" + toDisplayString(standardAnswer(item)), 1)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ]),
        createBaseVNode("button", {
          class: "multi-fill__button",
          type: "button",
          disabled: !canCheck.value,
          onClick: check
        }, " 校验 ", 8, _hoisted_8$3),
        checked.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["multi-fill__result", { "is-correct": correct.value }])
        }, [
          createBaseVNode("strong", null, toDisplayString(correct.value ? "全部正确" : "还有空需要修正"), 1),
          __props.explanation ? (openBlock(), createElementBlock("p", _hoisted_9$3, toDisplayString(__props.explanation), 1)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const MultiFillBlank = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9836ef66"]]);
const data = JSON.parse('[{"title":"2024 期中考试","url":"/exams/2024-midterm.html","tags":["exam","midterm"],"difficulty":"medium","review":"2026-04-28T00:00:00.000Z"},{"title":"2025 期末考试","url":"/exams/2025-final.html","tags":["exam","final"],"difficulty":"medium","review":"2026-06-11T00:00:00.000Z"},{"title":"2025 期中考试","url":"/exams/2025-midterm.html","tags":["exam","midterm"],"difficulty":"medium","review":"2026-04-28T00:00:00.000Z"},{"title":"补充综合测试","url":"/exams/addition-review.html","tags":["exam","tricky","review"],"difficulty":"medium","review":"2026-04-28T00:00:00.000Z"},{"title":"进程与线程","url":"/进程与线程/main.html","tags":["process","concurrency"]},{"title":"进程与线程/4_1 进程状态与控制.html","url":"/进程与线程/4_1 进程状态与控制.html","tags":[]},{"title":"进程与线程/4_2 线程.html","url":"/进程与线程/4_2 线程.html","tags":[]},{"title":"进程与线程/4_3 同步与互斥.html","url":"/进程与线程/4_3 同步与互斥.html","tags":[]},{"title":"进程与线程/4_4 同步互斥典例.html","url":"/进程与线程/4_4 同步互斥典例.html","tags":[]},{"title":"进程与线程/4_5 进程间通信.html","url":"/进程与线程/4_5 进程间通信.html","tags":[]},{"title":"进程与线程/4_6 调度.html","url":"/进程与线程/4_6 调度.html","tags":[]},{"title":"进程与线程/4_7 死锁.html","url":"/进程与线程/4_7 死锁.html","tags":[]},{"title":"考试与综合测试","url":"/exams/","tags":["exam","review"],"difficulty":"overview","review":"2026-04-28T00:00:00.000Z"},{"title":"内存管理","url":"/内存管理/main.html","tags":["memory"]},{"title":"内存管理/3_1存储管理.html","url":"/内存管理/3_1存储管理.html","tags":[]},{"title":"内存管理/3_2 页式管理基础.html","url":"/内存管理/3_2 页式管理基础.html","tags":[]},{"title":"内存管理/3_3 段式管理.html","url":"/内存管理/3_3 段式管理.html","tags":[]},{"title":"内存管理/3_4 虚拟内存管理.html","url":"/内存管理/3_4 虚拟内存管理.html","tags":[]},{"title":"内存管理/3_5 请求式分页系统.html","url":"/内存管理/3_5 请求式分页系统.html","tags":[]},{"title":"内存管理/3_6 页表自映射.html","url":"/内存管理/3_6 页表自映射.html","tags":[]},{"title":"推荐资料","url":"/resources.html","tags":["resources"],"difficulty":"overview","review":"2026-04-27T00:00:00.000Z"},{"title":"文件系统/7_1 文件系统基本概念.html","url":"/文件系统/7_1 文件系统基本概念.html","tags":[]},{"title":"文件系统/7_2 文件系统实现方式.html","url":"/文件系统/7_2 文件系统实现方式.html","tags":[]},{"title":"文件系统/7_3 文件系统实例分析.html","url":"/文件系统/7_3 文件系统实例分析.html","tags":[]},{"title":"文件系统/main.html","url":"/文件系统/main.html","tags":[]},{"title":"学习进度","url":"/progress.html","tags":["review"],"difficulty":"dashboard","review":"2026-04-26T00:00:00.000Z"},{"title":"硬盘管理/6_1 磁盘概述.html","url":"/硬盘管理/6_1 磁盘概述.html","tags":[]},{"title":"硬盘管理/6_2 磁盘的组织与调度.html","url":"/硬盘管理/6_2 磁盘的组织与调度.html","tags":[]},{"title":"硬盘管理/6_3 RAID.html","url":"/硬盘管理/6_3 RAID.html","tags":[]},{"title":"硬盘管理/6_4 磁盘管理实例.html","url":"/硬盘管理/6_4 磁盘管理实例.html","tags":[]},{"title":"硬盘管理/main.html","url":"/硬盘管理/main.html","tags":[]},{"title":"IO管理/5_1 设备管理概要.html","url":"/IO管理/5_1 设备管理概要.html","tags":[]},{"title":"IO管理/5_2 IO软硬件组成.html","url":"/IO管理/5_2 IO软硬件组成.html","tags":[]},{"title":"IO管理/5_3 IO控制方式.html","url":"/IO管理/5_3 IO控制方式.html","tags":[]},{"title":"IO管理/5_4 IO缓冲管理.html","url":"/IO管理/5_4 IO缓冲管理.html","tags":[]},{"title":"IO管理/5_5 IO设备管理与性能问题.html","url":"/IO管理/5_5 IO设备管理与性能问题.html","tags":[]},{"title":"Knowledge Map","url":"/knowledge-map.html","tags":["index"],"difficulty":"overview","review":"2026-04-26T00:00:00.000Z"},{"title":"OS","url":"/","tags":["index"],"difficulty":"overview","review":"2026-04-26T00:00:00.000Z"},{"title":"OS Boot","url":"/OS Boot/main.html","tags":["boot"]},{"title":"OS Boot/1_0 引言.html","url":"/OS Boot/1_0 引言.html","tags":[]},{"title":"OS Boot/2_0 Boot.html","url":"/OS Boot/2_0 Boot.html","tags":[]},{"title":"OS Boot/3_0 程序运行基本过程.html","url":"/OS Boot/3_0 程序运行基本过程.html","tags":[]}]');
const memory = [
  {
    id: "memory-tlb-01",
    title: "TLB miss 与缺页",
    question: "发生 TLB miss 时，下面哪项一定成立？",
    options: [
      {
        label: "A",
        text: "该虚拟页一定不在物理内存中"
      },
      {
        label: "B",
        text: "需要查询页表或由硬件/内核继续完成地址转换"
      },
      {
        label: "C",
        text: "一定会触发磁盘 I/O"
      },
      {
        label: "D",
        text: "当前进程一定会被阻塞"
      }
    ],
    answer: "B",
    explanation: "TLB miss 只表示快表中没有缓存该映射。页表项可能有效，此时只需查页表并回填 TLB；只有页表项无效、权限不满足等情况才会进入缺页或保护异常处理。",
    tags: [
      "memory",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-page-offset-01",
    title: "页内偏移位数",
    question: "页大小为 8 KiB 时，页内偏移字段有多少位？",
    options: [
      {
        label: "A",
        text: "10 位"
      },
      {
        label: "B",
        text: "12 位"
      },
      {
        label: "C",
        text: "13 位"
      },
      {
        label: "D",
        text: "16 位"
      }
    ],
    answer: "C",
    explanation: "8 KiB = 8192 Byte = 2^13 Byte，因此页内偏移为 13 位。",
    tags: [
      "memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-self-map-01",
    title: "自映射与普通页表遍历",
    question: "关于页目录自映射，下面哪种说法最准确？",
    options: [
      {
        label: "A",
        text: "自映射改变了 MMU 的地址转换规则，使 MMU 能直接识别页表项地址"
      },
      {
        label: "B",
        text: "自映射只是改变某个页目录项的内容，MMU 仍按普通多级页表规则逐级查表"
      },
      {
        label: "C",
        text: "自映射要求所有页表页在物理内存中连续存放，否则无法计算 PTE 地址"
      },
      {
        label: "D",
        text: "自映射建立后，访问页表项不再经过 TLB 和页表权限检查"
      }
    ],
    answer: "B",
    explanation: "自映射并没有给 MMU 增加新规则。它只是让某个 PDE 指向页目录自己的物理页框，于是访问自映射窗口时，普通页表遍历会自然走到页目录和页表页。",
    tags: [
      "memory",
      "paging",
      "self-map",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-self-map-02",
    title: "自映射建立后的映射状态",
    question: "把某个 PDE 设为自映射项并刷新 TLB 后，下面哪种理解是正确的？",
    options: [
      {
        label: "A",
        text: "自映射窗口里的每个位置都已经有效，因为所有页表页都会被自动创建"
      },
      {
        label: "B",
        text: "自映射窗口只保证页目录和已经存在的页表页可按公式访问，未分配的页表页仍可能无效"
      },
      {
        label: "C",
        text: "自映射窗口只能访问页目录项，不能访问普通页表项"
      },
      {
        label: "D",
        text: "自映射窗口会减少可用物理内存容量，因为页目录物理页被复制了一份"
      }
    ],
    answer: "B",
    explanation: "自映射提供的是访问页表结构的虚拟窗口，不会自动分配所有页表页。尚未建立的页表页，其对应窗口地址在页表遍历中仍会遇到无效项。",
    tags: [
      "memory",
      "paging",
      "self-map",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-self-map-03",
    title: "PTE 虚拟地址计算",
    question: "若自映射索引 r = 1023，则页表窗口起始地址为 0xFFC00000。某虚拟地址的页目录索引为 2，页表索引为 3，则它对应 PTE 的虚拟地址是多少？",
    options: [
      {
        label: "A",
        text: "0xFFC0200C"
      },
      {
        label: "B",
        text: "0xFFC03008"
      },
      {
        label: "C",
        text: "0xFFFFF00C"
      },
      {
        label: "D",
        text: "0x00002003"
      }
    ],
    answer: "A",
    explanation: "PTE_addr = 0xFFC00000 + PDE_index × 4096 + PTE_index × 4 = 0xFFC00000 + 2 × 0x1000 + 3 × 4 = 0xFFC0200C。",
    tags: [
      "memory",
      "paging",
      "self-map",
      "calculation"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-self-map-04",
    title: "自映射不等于创建页表页",
    question: "建立页目录自映射后，下面哪种说法最准确？",
    options: [
      {
        label: "A",
        text: "所有页表页都会立刻被分配出来"
      },
      {
        label: "B",
        text: "所有虚拟地址都会自动变成有效映射"
      },
      {
        label: "C",
        text: "页目录和已经存在的页表页可以通过固定虚拟窗口访问"
      },
      {
        label: "D",
        text: "TLB 中所有旧映射都会自动消失，不需要内核处理"
      }
    ],
    answer: "C",
    explanation: "自映射只是提供访问页目录和已有页表页的虚拟窗口，并不会自动分配尚不存在的页表页。修改页表项后，内核仍需按体系结构要求处理 TLB 失效。",
    tags: [
      "memory",
      "paging",
      "self-map",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-01",
    title: "逻辑地址与物理地址",
    question: "操作系统把逻辑地址和物理地址分开，最直接的目的是什么？",
    options: [
      {
        label: "A",
        text: "让程序员直接决定数据在内存条上的物理位置"
      },
      {
        label: "B",
        text: "让程序使用独立地址空间，并由系统完成重定位和保护"
      },
      {
        label: "C",
        text: "保证所有进程访问同一组内存地址"
      },
      {
        label: "D",
        text: "取消硬件参与，完全由应用程序完成地址转换"
      }
    ],
    answer: "B",
    explanation: "逻辑地址让程序不依赖实际装入位置；物理地址由系统和硬件管理，从而支持重定位、隔离和保护。",
    tags: [
      "memory",
      "address",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-storage-02",
    title: "内碎片与外碎片",
    question: "关于内碎片和外碎片，下面哪项说法正确？",
    options: [
      {
        label: "A",
        text: "内碎片是空闲区之间不连续造成的，外碎片是已分配区内部浪费造成的"
      },
      {
        label: "B",
        text: "内碎片是已分配空间中未被使用的部分，外碎片是空闲但难以形成足够大连续区的空间"
      },
      {
        label: "C",
        text: "固定分区只会产生外碎片，不会产生内碎片"
      },
      {
        label: "D",
        text: "动态分区只要有空闲空间总量足够，就一定能满足任意连续内存请求"
      }
    ],
    answer: "B",
    explanation: "内碎片发生在已分配空间内部；外碎片发生在空闲空间之间。动态分区可能因为空闲区分散而无法满足连续空间请求。",
    tags: [
      "memory",
      "fragmentation",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-storage-03",
    title: "动态分区的切分",
    question: "动态分区分配时，如果把请求空间切出后剩余空间非常小，常见处理是什么？",
    options: [
      {
        label: "A",
        text: "必须保留该小空闲区，等待之后精确大小的请求"
      },
      {
        label: "B",
        text: "必须立即执行紧凑，把所有空闲区合并"
      },
      {
        label: "C",
        text: "把整块空闲区分给请求者，避免留下难以利用的小外碎片"
      },
      {
        label: "D",
        text: "拒绝本次分配，因为剩余空间小于请求空间"
      }
    ],
    answer: "C",
    explanation: "过小的剩余区很难再被有效利用，保留下来会增加外碎片和管理开销，所以常把它并入本次分配。",
    tags: [
      "memory",
      "partition",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-04",
    title: "首次适应算法",
    question: "首次适应（First Fit）算法的核心策略是什么？",
    options: [
      {
        label: "A",
        text: "每次都从空闲区表头开始，找第一个足够大的空闲区"
      },
      {
        label: "B",
        text: "每次都找大小最接近请求的空闲区"
      },
      {
        label: "C",
        text: "每次都找最大的空闲区"
      },
      {
        label: "D",
        text: "每次都从上次查找结束位置继续找"
      }
    ],
    answer: "A",
    explanation: "首次适应从头顺序查找第一个满足请求的空闲区。B 是最佳适应，C 是最坏适应，D 是下次适应。",
    tags: [
      "memory",
      "partition",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-storage-05",
    title: "最佳适应的风险",
    question: "为什么最佳适应（Best Fit）不一定带来最好的长期内存利用效果？",
    options: [
      {
        label: "A",
        text: "它每次都会选择最大的空闲区，导致大空闲区被快速消耗"
      },
      {
        label: "B",
        text: "它不允许拆分空闲区，所以无法满足小请求"
      },
      {
        label: "C",
        text: "它可能反复留下很小的剩余空闲区，形成难以利用的外碎片"
      },
      {
        label: "D",
        text: "它只能用于固定分区，不能用于动态分区"
      }
    ],
    answer: "C",
    explanation: "最佳适应追求本次分配后的剩余空间最小，但长期看容易产生许多很小、难以再次利用的外碎片。",
    tags: [
      "memory",
      "partition",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-06",
    title: "伙伴系统",
    question: "关于伙伴系统（buddy system），下面哪项说法最准确？",
    options: [
      {
        label: "A",
        text: "它按任意字节大小精确分配，因此完全没有内部浪费"
      },
      {
        label: "B",
        text: "它按 2 的幂管理块，便于拆分和合并，但可能产生内碎片"
      },
      {
        label: "C",
        text: "它只能通过移动作业来消除外碎片"
      },
      {
        label: "D",
        text: "它要求所有进程共享同一个逻辑地址空间"
      }
    ],
    answer: "B",
    explanation: "伙伴系统把块大小限制为 2 的幂，地址计算和伙伴合并方便；请求大小被向上取整时，可能产生内碎片。",
    tags: [
      "memory",
      "buddy",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-07",
    title: "紧凑与动态重定位",
    question: "紧凑技术通常为什么需要动态重定位支持？",
    options: [
      {
        label: "A",
        text: "因为紧凑会移动作业位置，移动后需要重新建立逻辑地址到物理地址的对应关系"
      },
      {
        label: "B",
        text: "因为紧凑会把所有进程永久写入辅存"
      },
      {
        label: "C",
        text: "因为紧凑会取消逻辑地址，只保留物理地址"
      },
      {
        label: "D",
        text: "因为紧凑只能在程序编译时完成"
      }
    ],
    answer: "A",
    explanation: "紧凑通过移动作业把分散空闲区拼成大空闲区。作业位置变化后，地址转换关系必须能随运行时位置变化而调整。",
    tags: [
      "memory",
      "compaction",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-08",
    title: "覆盖与交换",
    question: "关于覆盖（Overlay）和交换（Swapping），下面哪项说法正确？",
    options: [
      {
        label: "A",
        text: "覆盖由操作系统自动完成，交换必须由程序员手工划分模块"
      },
      {
        label: "B",
        text: "覆盖和交换都只发生在同一个程序内部的不同函数之间"
      },
      {
        label: "C",
        text: "覆盖通常由程序员安排同一程序内部哪些段不同时驻留；交换通常由 OS 在进程之间调入调出"
      },
      {
        label: "D",
        text: "交换只能减少一个程序内部同时驻留内存的代码段数量，不能改变内存中的进程数"
      }
    ],
    answer: "C",
    explanation: "覆盖关注同一程序内部不同时使用的程序段，早期常需程序员安排；交换由 OS 控制，把整个进程地址空间换出或换入，以提高内存利用率和并发度。",
    tags: [
      "memory",
      "overlay",
      "swapping",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-storage-09",
    title: "交换与 I/O",
    question: "为什么正在进行 I/O 且 I/O 缓冲区在用户空间的进程通常不宜直接换出？",
    options: [
      {
        label: "A",
        text: "因为等待 I/O 的进程一定拥有最高调度优先级"
      },
      {
        label: "B",
        text: "因为设备可能仍要读写该用户缓冲区，换出会使 I/O 目标内存不再可靠"
      },
      {
        label: "C",
        text: "因为换出会自动清空该进程的所有文件描述符"
      },
      {
        label: "D",
        text: "因为 I/O 进程没有地址空间，所以无法交换"
      }
    ],
    answer: "B",
    explanation: "如果设备或内核仍在使用用户空间缓冲区，直接换出相关页面或地址空间可能破坏 I/O 目标。常见处理是锁定相关内存或使用系统缓冲。",
    tags: [
      "memory",
      "swapping",
      "tricky"
    ],
    difficulty: "hard"
  },
  {
    id: "memory-storage-10",
    title: "存储器扩充的含义",
    question: "为什么说覆盖、交换、请求调入等技术是在逻辑上扩充内存？",
    options: [
      {
        label: "A",
        text: "因为它们会自动增加物理内存条的容量"
      },
      {
        label: "B",
        text: "因为它们让 CPU 不再需要访问内存"
      },
      {
        label: "C",
        text: "因为它们通过时间复用主存和利用辅存，让程序感觉可用空间更大"
      },
      {
        label: "D",
        text: "因为它们把所有地址都变成同一个物理地址"
      }
    ],
    answer: "C",
    explanation: "这些技术并没有增加真实主存容量，而是通过把暂时不用的部分放在辅存、需要时再调入，使有限主存被复用。",
    tags: [
      "memory",
      "swapping",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-paging-basic-01",
    title: "纯分页系统",
    question: "关于纯分页系统（基本分页），下面哪项说法最准确？",
    options: [
      {
        label: "A",
        text: "支持请求分页，页面可以在访问时再从外存调入"
      },
      {
        label: "B",
        text: "作业运行前通常需要把所有页面一次装入主存页框"
      },
      {
        label: "C",
        text: "要求一个作业的所有页面在物理内存中连续存放"
      },
      {
        label: "D",
        text: "不会产生任何形式的碎片"
      }
    ],
    answer: "B",
    explanation: "纯分页不具备请求分页和页面置换能力，作业运行前通常要把全部页面装入主存。它不要求物理连续，通常无外碎片，但页内可能有内碎片。",
    tags: [
      "memory",
      "paging",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-paging-basic-02",
    title: "页和页框",
    question: "在分页管理中，页和页框的关系是什么？",
    options: [
      {
        label: "A",
        text: "页是物理内存中的块，页框是逻辑地址空间中的块"
      },
      {
        label: "B",
        text: "页和页框大小相同，页属于逻辑地址空间，页框属于物理内存"
      },
      {
        label: "C",
        text: "页必须连续存放，页框可以离散存放"
      },
      {
        label: "D",
        text: "页框大小必须大于页大小，才能存放页表项"
      }
    ],
    answer: "B",
    explanation: "分页把逻辑地址空间分成等长的页，把物理内存分成等长的页框。页和页框大小相同，页可以离散装入不同页框。",
    tags: [
      "memory",
      "paging",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-paging-basic-03",
    title: "分页地址结构",
    question: "若逻辑地址为 m 位，页大小为 2^k Byte，则逻辑地址通常如何划分？",
    options: [
      {
        label: "A",
        text: "高 k 位为页号，低 m-k 位为页内偏移"
      },
      {
        label: "B",
        text: "高 m-k 位为页号，低 k 位为页内偏移"
      },
      {
        label: "C",
        text: "高 k 位为页框号，低 m-k 位为页号"
      },
      {
        label: "D",
        text: "高 m-k 位为物理地址，低 k 位为逻辑地址"
      }
    ],
    answer: "B",
    explanation: "页大小为 2^k Byte，页内偏移需要 k 位；剩余高 m-k 位用于表示页号。",
    tags: [
      "memory",
      "paging",
      "calculation"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-paging-basic-04",
    title: "分页地址转换",
    question: "分页系统中，根据逻辑地址得到物理地址的关键步骤是什么？",
    options: [
      {
        label: "A",
        text: "用页内偏移查页表，再把页号作为物理地址低位"
      },
      {
        label: "B",
        text: "用页号查页表得到页框号，再把页框号与原页内偏移组合"
      },
      {
        label: "C",
        text: "直接把逻辑地址整体作为物理地址使用"
      },
      {
        label: "D",
        text: "先执行紧凑，再按作业长度计算物理地址"
      }
    ],
    answer: "B",
    explanation: "页表记录的是虚拟页到物理页框的映射。地址转换时替换页号为页框号，页内偏移保持不变。",
    tags: [
      "memory",
      "paging",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-paging-basic-05",
    title: "页面大小权衡",
    question: "页面大小变大时，通常会带来哪种典型影响？",
    options: [
      {
        label: "A",
        text: "页表项数量减少，但页内浪费可能增加"
      },
      {
        label: "B",
        text: "页表项数量增加，但内碎片一定减少为 0"
      },
      {
        label: "C",
        text: "页内偏移位数减少，页号位数增加"
      },
      {
        label: "D",
        text: "所有页面换入换出的单次 I/O 数据量一定减少"
      }
    ],
    answer: "A",
    explanation: "页面越大，同一地址空间需要的页数越少，页表可能更小；但最后一页或未充分使用的页内空间更容易浪费。",
    tags: [
      "memory",
      "paging",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-paging-basic-06",
    title: "两级页表位数",
    question: "32 位逻辑地址、4 KiB 页、每个页表项 4 Byte 的两级页表中，地址字段通常如何划分？",
    options: [
      {
        label: "A",
        text: "页目录号 10 位，页表索引 10 位，页内偏移 12 位"
      },
      {
        label: "B",
        text: "页目录号 12 位，页表索引 10 位，页内偏移 10 位"
      },
      {
        label: "C",
        text: "页目录号 8 位，页表索引 12 位，页内偏移 12 位"
      },
      {
        label: "D",
        text: "页目录号 16 位，页表索引 4 位，页内偏移 12 位"
      }
    ],
    answer: "A",
    explanation: "4 KiB = 2^12，所以偏移 12 位。每个页表页可放 4096/4 = 1024 = 2^10 个页表项，因此页表索引 10 位，剩余 10 位为页目录号。",
    tags: [
      "memory",
      "paging",
      "calculation",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-paging-basic-07",
    title: "多级页表的价值",
    question: "多级页表相对一级页表的主要价值是什么？",
    options: [
      {
        label: "A",
        text: "一定减少页表占用空间的理论上限"
      },
      {
        label: "B",
        text: "让每次内存访问都只需要访问一次内存"
      },
      {
        label: "C",
        text: "可以只为实际用到的虚拟地址范围分配下级页表页，并减少对大块连续内存的需求"
      },
      {
        label: "D",
        text: "让页面不再需要页框即可运行"
      }
    ],
    answer: "C",
    explanation: "多级页表把页表本身分页，未使用的地址范围无需分配下级页表页；它还避免单个巨大页表必须连续存放。但层级增加会增加查表次数，理论上限也不一定更小。",
    tags: [
      "memory",
      "paging",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-paging-basic-08",
    title: "TLB 有效访问时间",
    question: "假设查找 TLB 时间为 t，访问内存时间为 T，TLB 命中率为 α；忽略缺页和多级页表，未命中时需要访问一次页表和一次目标数据。有效访问时间是哪一项？",
    options: [
      {
        label: "A",
        text: "α(t+T) + (1-α)(t+2T)"
      },
      {
        label: "B",
        text: "α(T) + (1-α)(t+T)"
      },
      {
        label: "C",
        text: "α(t+2T) + (1-α)(t+T)"
      },
      {
        label: "D",
        text: "t + αT"
      }
    ],
    answer: "A",
    explanation: "命中时查 TLB 后访问目标数据，时间为 t+T；未命中时查 TLB、查页表、访问目标数据，时间为 t+2T。",
    tags: [
      "memory",
      "tlb",
      "calculation"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-paging-basic-09",
    title: "TLB miss 与缺页",
    question: "关于 TLB miss 和缺页，下列说法正确的是哪一项？",
    options: [
      {
        label: "A",
        text: "TLB miss 一定表示对应页面不在物理内存中"
      },
      {
        label: "B",
        text: "TLB miss 只表示快表中没有该映射，页表项仍可能有效"
      },
      {
        label: "C",
        text: "只要页表项有效，就一定不会发生 TLB miss"
      },
      {
        label: "D",
        text: "缺页只需要重新查 TLB，不需要操作系统参与"
      }
    ],
    answer: "B",
    explanation: "TLB 是页表映射的缓存。TLB miss 可能只需要查页表并回填 TLB；只有页表项无效或页面不在内存等情况才涉及缺页处理。",
    tags: [
      "memory",
      "tlb",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-paging-basic-10",
    title: "反置页表",
    question: "反置页表相对普通页表的核心区别是什么？",
    options: [
      {
        label: "A",
        text: "普通页表按物理页框排列，反置页表按虚拟页号排列"
      },
      {
        label: "B",
        text: "反置页表按物理页框排列，表项记录该页框对应的进程和虚拟页信息"
      },
      {
        label: "C",
        text: "反置页表不需要保存任何进程信息"
      },
      {
        label: "D",
        text: "反置页表会让每个进程拥有一张与虚拟地址空间等大的页表"
      }
    ],
    answer: "B",
    explanation: "普通页表通常以虚拟页号为索引；反置页表以物理页框为中心，表项说明该页框当前映射到哪个进程的哪个虚拟页，因此表规模主要与物理内存页框数相关。",
    tags: [
      "memory",
      "paging",
      "inverted-page-table"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-01",
    title: "局部性与按需调页",
    question: "虚拟内存能够在只装入部分页面的情况下仍让程序有效运行，最主要依赖于哪组性质？",
    options: [
      {
        label: "A",
        text: "时间局部性和空间局部性"
      },
      {
        label: "B",
        text: "并发性和异步性"
      },
      {
        label: "C",
        text: "可重入性和共享性"
      },
      {
        label: "D",
        text: "静态链接和动态链接"
      }
    ],
    answer: "A",
    explanation: "局部性原理说明程序在一段时间内往往反复访问刚用过的指令和数据，也倾向访问其附近内容，因此系统通常只需把当前活跃的那部分页面调入主存。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-virtual-02",
    title: "虚拟内存提供的抽象",
    question: "关于虚拟内存为进程提供的地址空间，下列哪项描述最准确？",
    options: [
      {
        label: "A",
        text: "为所有进程提供同一份共享且连续的物理地址空间"
      },
      {
        label: "B",
        text: "为每个进程提供大的、一致的、连续可用且私有的地址空间"
      },
      {
        label: "C",
        text: "只负责扩大可见容量，不负责隔离和保护"
      },
      {
        label: "D",
        text: "让应用程序直接决定页面换入换出的时机"
      }
    ],
    answer: "B",
    explanation: "虚拟内存的核心价值不只是“看起来更大”，还包括给每个进程提供一致的地址空间抽象，并通过地址映射和保护机制实现隔离。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-virtual-03",
    title: "主存与磁盘的缓存关系",
    question: "从分层存储角度看，虚拟内存更贴近下面哪种理解？",
    options: [
      {
        label: "A",
        text: "磁盘是主存的高速缓存"
      },
      {
        label: "B",
        text: "主存是磁盘的高速缓存"
      },
      {
        label: "C",
        text: "页表是磁盘的高速缓存"
      },
      {
        label: "D",
        text: "寄存器是磁盘的高速缓存"
      }
    ],
    answer: "B",
    explanation: "虚拟内存利用分层存储思想，把当前活跃的数据页放在速度更快但容量更小的主存中，因此可以把主存看作磁盘上后备存储的高速缓存。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-virtual-04",
    title: "虚拟存储的多次性",
    question: "虚拟存储技术中“多次性”的含义是什么？",
    options: [
      {
        label: "A",
        text: "作业必须一次性全部装入主存后才能运行"
      },
      {
        label: "B",
        text: "一个作业可以被分成多次调入主存运行"
      },
      {
        label: "C",
        text: "每个页面必须同时被多个进程共享"
      },
      {
        label: "D",
        text: "每次调页都必须把相邻多个页面一起调入"
      }
    ],
    answer: "B",
    explanation: "“多次性”强调作业不必一次性全部装入主存，而是允许在运行过程中分批调入所需部分，这是虚拟存储区别于早期一次性装入方式的重要特征。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-05",
    title: "虚拟内存与 Cache 的侧重点",
    question: "关于 cache-主存机制和虚拟内存机制，下列说法正确的是哪一项？",
    options: [
      {
        label: "A",
        text: "两者未命中后都只需要硬件处理，不需要操作系统参与"
      },
      {
        label: "B",
        text: "cache 更侧重缓解 CPU 与主存速度差异，虚拟内存更侧重容量扩充、保护和管理"
      },
      {
        label: "C",
        text: "虚拟内存未命中一定比 cache miss 更快，因为有磁盘后备"
      },
      {
        label: "D",
        text: "两者对程序来说完全等价，只是叫法不同"
      }
    ],
    answer: "B",
    explanation: "cache 的主要目标是缩小 CPU 与主存的速度差；虚拟内存则主要解决容量扩充、地址空间管理和保护问题。发生缺页时通常还需要 OS 介入，代价远大于普通 cache miss。",
    tags: [
      "memory",
      "virtual-memory",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-06",
    title: "更新问题的含义",
    question: "虚拟内存需要解决的“更新问题”主要关注什么？",
    options: [
      {
        label: "A",
        text: "如何保证主存和辅存中页面内容的一致性"
      },
      {
        label: "B",
        text: "如何让所有页面永久驻留在主存中"
      },
      {
        label: "C",
        text: "如何决定页内偏移占多少位"
      },
      {
        label: "D",
        text: "如何让不同进程共用同一张页表"
      }
    ],
    answer: "A",
    explanation: "页面在主存和辅存之间换入换出时，系统必须考虑脏页写回、页表状态更新等问题，本质上是在维护不同层级存储之间的数据一致性。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-07",
    title: "虚拟内存的基本流程",
    question: "从高层次流程看，程序访问某页而该页当前不在内存时，下面哪一项最符合虚拟内存的工作过程？",
    options: [
      {
        label: "A",
        text: "直接终止进程，然后重新编译程序"
      },
      {
        label: "B",
        text: "发生缺页，操作系统按策略调入所需页，必要时置换旧页，然后继续执行"
      },
      {
        label: "C",
        text: "先把整个进程全部换入，再重新建立所有逻辑地址"
      },
      {
        label: "D",
        text: "先扩大物理内存容量，再重新访问该页"
      }
    ],
    answer: "B",
    explanation: "虚拟内存的基本思路是访问时检查所需页是否在主存中；若不在，则触发缺页并由 OS 调页，必要时进行页面置换，随后恢复并继续执行原来的访问。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-virtual-08",
    title: "虚拟存储的离散性",
    question: "虚拟存储技术的“离散性”主要指什么？",
    options: [
      {
        label: "A",
        text: "作业必须占用一整块连续物理内存"
      },
      {
        label: "B",
        text: "作业的各个部分可以离散地放在不同物理块中，并通过地址映射组织起来"
      },
      {
        label: "C",
        text: "所有页面必须按访问顺序连续写入磁盘"
      },
      {
        label: "D",
        text: "CPU 每次只能访问一个固定的物理地址"
      }
    ],
    answer: "B",
    explanation: "虚拟存储建立在离散分配基础上，程序的不同页面或段可以不连续地放入主存，再由页表或段表等机制完成逻辑地址到物理地址的映射。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "memory-virtual-09",
    title: "虚拟内存容量限制",
    question: "关于虚拟内存最大容量，下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "只由物理内存容量决定"
      },
      {
        label: "B",
        text: "只由当前空闲页框数量决定"
      },
      {
        label: "C",
        text: "受计算机地址结构和可用外存等因素限制，并不等于无限大"
      },
      {
        label: "D",
        text: "一定等于 CPU cache 容量"
      }
    ],
    answer: "C",
    explanation: "虚拟内存让程序看到的地址空间可以大于物理内存，但它仍受地址位数、页表结构、后备存储等条件限制，不能理解为无限容量。",
    tags: [
      "memory",
      "virtual-memory",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-10",
    title: "覆盖、交换与虚拟内存",
    question: "虚拟内存相对覆盖技术的一个重要改进是什么？",
    options: [
      {
        label: "A",
        text: "要求程序员手工划分覆盖段，并显式安排调入顺序"
      },
      {
        label: "B",
        text: "由操作系统和硬件协作完成按需调入，不要求程序员手工管理覆盖关系"
      },
      {
        label: "C",
        text: "完全取消辅存，只依赖寄存器保存程序"
      },
      {
        label: "D",
        text: "只能一次性把整个程序装入主存后运行"
      }
    ],
    answer: "B",
    explanation: "覆盖技术通常需要程序员理解程序结构并安排不同时驻留的代码段；虚拟内存借鉴“用时调入”的思想，但调页、保护和映射主要由 OS 与硬件完成。",
    tags: [
      "memory",
      "virtual-memory",
      "overlay",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-11",
    title: "虚拟内存的代价",
    question: "下面哪项最能体现虚拟内存机制的主要代价？",
    options: [
      {
        label: "A",
        text: "每次命中 CPU cache 都必须访问磁盘"
      },
      {
        label: "B",
        text: "地址转换、缺页处理和页面换入换出会消耗 CPU 时间与 I/O 时间"
      },
      {
        label: "C",
        text: "所有进程必须共享同一个地址空间"
      },
      {
        label: "D",
        text: "程序不能再使用逻辑地址"
      }
    ],
    answer: "B",
    explanation: "虚拟内存提升了地址空间抽象和主存利用率，但地址转换需要硬件结构支持，缺页时还可能进入内核并发生磁盘 I/O，因此会带来明显运行时开销。",
    tags: [
      "memory",
      "virtual-memory",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "memory-virtual-12",
    title: "调入与替换问题",
    question: "虚拟内存管理中，“调入问题”和“替换问题”分别关注什么？",
    options: [
      {
        label: "A",
        text: "调入关注地址位数，替换关注指令编码"
      },
      {
        label: "B",
        text: "调入关注何时、哪些页进入主存，替换关注主存不足时换出哪些页"
      },
      {
        label: "C",
        text: "调入关注 CPU 调度，替换关注进程创建"
      },
      {
        label: "D",
        text: "调入只发生在 cache 中，替换只发生在寄存器中"
      }
    ],
    answer: "B",
    explanation: "虚拟内存需要决定哪些程序和数据页在何时进入主存；当主存没有足够空闲页框时，还要按页面置换策略选择牺牲页换出。",
    tags: [
      "memory",
      "virtual-memory",
      "exam"
    ],
    difficulty: "medium"
  }
];
const process = [
  {
    id: "process-thread-01",
    title: "进程与线程",
    question: "关于进程和线程，下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "线程是资源分配的基本单位，进程是 CPU 调度的基本单位"
      },
      {
        label: "B",
        text: "进程是资源分配的基本单位，线程是 CPU 调度的基本单位"
      },
      {
        label: "C",
        text: "同一进程内的线程不共享地址空间"
      },
      {
        label: "D",
        text: "线程切换一定比系统调用开销更大"
      }
    ],
    answer: "B",
    explanation: "现代操作系统通常把进程作为资源拥有和保护边界，把线程作为调度执行单元。同进程线程共享地址空间，因此通信方便但并发风险更高。",
    tags: [
      "process",
      "concurrency",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-thread-02",
    title: "线程的提出",
    question: "引入线程主要是为了解决进程模型中的哪类问题？",
    options: [
      {
        label: "A",
        text: "把资源拥有者和可执行单元完全绑定在一起，降低协作灵活性"
      },
      {
        label: "B",
        text: "让每个线程都拥有完全独立的地址空间"
      },
      {
        label: "C",
        text: "取消操作系统对并发执行的支持"
      },
      {
        label: "D",
        text: "让所有程序只能串行运行"
      }
    ],
    answer: "A",
    explanation: "传统进程同时承担资源拥有者和执行单元两个角色，进程间通信和切换开销较大。线程把执行单元从进程中分离出来，使同一进程内可以有多个较轻量的执行流。",
    tags: [
      "process",
      "concurrency",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-thread-03",
    title: "线程共享与私有状态",
    question: "同一进程内多个线程之间，下面哪种说法最准确？",
    options: [
      {
        label: "A",
        text: "通常共享地址空间和进程资源，但各自拥有执行现场，如寄存器状态和栈"
      },
      {
        label: "B",
        text: "每个线程都拥有独立页表和完全独立地址空间"
      },
      {
        label: "C",
        text: "所有线程必须共享同一个程序计数器和同一个栈"
      },
      {
        label: "D",
        text: "线程之间不能访问同一进程的数据"
      }
    ],
    answer: "A",
    explanation: "线程共享所属进程的地址空间、打开文件等资源，所以通信成本低；但线程作为独立执行流，需要各自保存程序计数器、寄存器和栈等执行现场。",
    tags: [
      "process",
      "concurrency",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-04",
    title: "多线程适用场景",
    question: "下列哪种场景最能体现多线程的优势？",
    options: [
      {
        label: "A",
        text: "单核上一个完全不等待 I/O 的短小计算任务"
      },
      {
        label: "B",
        text: "任务中既有计算又有频繁 I/O 等待，等待期间还有其他工作可做"
      },
      {
        label: "C",
        text: "所有任务都必须严格按固定顺序执行，不能交错"
      },
      {
        label: "D",
        text: "程序只执行一次简单赋值后立即退出"
      }
    ],
    answer: "B",
    explanation: "多线程适合把可并发推进的工作拆成多个执行流，尤其在某些线程等待 I/O 时，其他线程仍可运行。若任务很短或几乎没有等待，线程创建和切换开销可能抵消收益。",
    tags: [
      "process",
      "concurrency",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-05",
    title: "用户级线程",
    question: "关于用户级线程（ULT），下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "线程管理主要由用户态线程库完成，内核通常不知道这些用户级线程的存在"
      },
      {
        label: "B",
        text: "每个用户级线程都必须对应一个内核线程，且只能由内核调度"
      },
      {
        label: "C",
        text: "用户级线程切换一定需要切换页表"
      },
      {
        label: "D",
        text: "用户级线程只能运行在多处理器系统上"
      }
    ],
    answer: "A",
    explanation: "用户级线程由语言运行时或线程库在用户态管理，切换通常不需要陷入内核，因此开销较低；但内核只看到所属进程，无法直接按这些线程进行调度。",
    tags: [
      "process",
      "concurrency",
      "kernel"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-06",
    title: "用户级线程阻塞问题",
    question: "在纯用户级线程模型中，一个线程执行阻塞式系统调用时，常见问题是什么？",
    options: [
      {
        label: "A",
        text: "内核可能阻塞整个进程，导致该进程内其他用户级线程也无法继续运行"
      },
      {
        label: "B",
        text: "阻塞只会影响该用户级线程，内核一定能继续调度同进程其他用户级线程"
      },
      {
        label: "C",
        text: "系统调用不会进入内核，所以不可能阻塞"
      },
      {
        label: "D",
        text: "阻塞会自动把用户级线程转换成独立进程"
      }
    ],
    answer: "A",
    explanation: "纯 ULT 中内核调度对象通常是进程而不是用户级线程。若一个用户级线程触发会阻塞进程的系统调用，内核可能让整个进程等待，其他 ULT 也随之停住。",
    tags: [
      "process",
      "concurrency",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-07",
    title: "内核级线程",
    question: "内核级线程（KLT）相对纯用户级线程的一个重要优势是什么？",
    options: [
      {
        label: "A",
        text: "内核可以感知并调度线程，阻塞通常发生在线程级别，并可在多处理器上并行运行同进程多个线程"
      },
      {
        label: "B",
        text: "线程切换永远不需要进入内核，因此没有管理开销"
      },
      {
        label: "C",
        text: "所有线程必须共享同一个栈，节省全部内存"
      },
      {
        label: "D",
        text: "内核级线程不能执行系统调用"
      }
    ],
    answer: "A",
    explanation: "KLT 是内核可见的调度实体，内核能够把同一进程的不同线程调度到不同处理器上；某个线程阻塞时，也不必阻塞整个进程的所有线程。",
    tags: [
      "process",
      "concurrency",
      "kernel"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-08",
    title: "内核级线程开销",
    question: "内核级线程的主要代价通常体现在哪里？",
    options: [
      {
        label: "A",
        text: "线程创建、撤销和切换需要内核参与，模式切换和内核数据结构维护带来额外开销"
      },
      {
        label: "B",
        text: "内核级线程无法被操作系统调度"
      },
      {
        label: "C",
        text: "内核级线程一定不能在多处理器上运行"
      },
      {
        label: "D",
        text: "内核级线程会让进程之间失去地址空间隔离"
      }
    ],
    answer: "A",
    explanation: "KLT 的管理由内核完成，功能更强但开销也更高。线程操作可能涉及陷入内核、调度器、内核栈和控制块等数据结构维护。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-thread-09",
    title: "混合线程模型",
    question: "关于 Many-to-One、One-to-One 和 Many-to-Many 线程模型，下列说法正确的是哪一项？",
    options: [
      {
        label: "A",
        text: "Many-to-One 通常无法让同一进程的多个用户线程在多个 CPU 上真正并行"
      },
      {
        label: "B",
        text: "One-to-One 会把所有用户线程映射到同一个内核线程"
      },
      {
        label: "C",
        text: "Many-to-Many 完全没有实现复杂度和调度开销"
      },
      {
        label: "D",
        text: "三种模型都要求用户线程数量必须等于内核线程数量"
      }
    ],
    answer: "A",
    explanation: "Many-to-One 把多个用户线程映射到一个内核调度实体，内核无法把它们分配到多个处理器并行执行；One-to-One 是一个用户线程对应一个内核线程，Many-to-Many 则在并发度和开销之间折中。",
    tags: [
      "process",
      "concurrency",
      "tricky"
    ],
    difficulty: "hard"
  },
  {
    id: "process-mode-switch-01",
    title: "陷入内核与进程切换",
    question: "用户进程执行系统调用时，下面哪项描述更准确？",
    options: [
      {
        label: "A",
        text: "一定发生进程上下文切换"
      },
      {
        label: "B",
        text: "一定切换到另一个进程运行"
      },
      {
        label: "C",
        text: "会从用户态进入内核态，但不一定发生进程切换"
      },
      {
        label: "D",
        text: "不会保存任何寄存器现场"
      }
    ],
    answer: "C",
    explanation: "系统调用会触发受控的特权级切换，进入内核执行服务例程；是否调度其他进程取决于系统调用行为、阻塞与调度策略。",
    tags: [
      "kernel",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-01",
    title: "进程与程序",
    question: "关于程序和进程的关系，下列哪项描述最准确？",
    options: [
      {
        label: "A",
        text: "程序和进程都是静态的磁盘文件"
      },
      {
        label: "B",
        text: "程序是静态实体，进程是程序在数据集合上的一次动态运行过程"
      },
      {
        label: "C",
        text: "一个程序在任意时刻只能对应一个进程"
      },
      {
        label: "D",
        text: "进程只包含程序代码，不包含数据和控制信息"
      }
    ],
    answer: "B",
    explanation: "程序是静态的代码和数据描述；进程是程序运行起来之后形成的动态实体，通常由程序、数据和 PCB 等组成，是系统进行资源分配和调度管理的重要单位。",
    tags: [
      "process",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-02",
    title: "并发与并行",
    question: "在单核处理机上，多个进程看起来同时推进，通常体现的是哪种概念？",
    options: [
      {
        label: "A",
        text: "并行：多个进程在同一时刻分别运行在不同处理机上"
      },
      {
        label: "B",
        text: "并发：多个进程的执行在时间上交替推进并发生重叠"
      },
      {
        label: "C",
        text: "串行：一个进程必须完全结束后另一个进程才能开始"
      },
      {
        label: "D",
        text: "独占：每个进程都永久占有一个独立 CPU"
      }
    ],
    answer: "B",
    explanation: "单核系统同一时刻只能执行一个执行流，但操作系统可以通过调度让多个进程在时间上交替推进，因此体现的是并发而不是真正的并行。",
    tags: [
      "process",
      "concurrency",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-03",
    title: "Bernstein 条件",
    question: "两个程序段 S1 和 S2 并发执行仍能保证结果可复现，关键条件是什么？",
    options: [
      {
        label: "A",
        text: "R(S2) 与 W(S1)、R(S1) 与 W(S2)、W(S1) 与 W(S2) 均不存在交集"
      },
      {
        label: "B",
        text: "只要两个程序段读取同一个变量，就一定不能并发执行"
      },
      {
        label: "C",
        text: "只要两个程序段写入不同变量，结果就一定不可复现"
      },
      {
        label: "D",
        text: "只需保证两个程序段的运行时间完全相同"
      }
    ],
    answer: "A",
    explanation: "Bernstein 条件排除的是读写冲突和写写冲突。如果一个程序段会写另一个程序段要读或要写的数据，并发执行结果就可能依赖具体交错顺序。",
    tags: [
      "process",
      "concurrency",
      "tricky",
      "exam"
    ],
    difficulty: "hard"
  },
  {
    id: "process-state-control-04",
    title: "进程创建",
    question: "下列哪种情况最不属于典型的进程创建触发场景？",
    options: [
      {
        label: "A",
        text: "提交一个批处理作业"
      },
      {
        label: "B",
        text: "用户登录后，系统创建服务进程"
      },
      {
        label: "C",
        text: "已有进程请求创建子进程"
      },
      {
        label: "D",
        text: "正在执行的进程等待磁盘 I/O 完成"
      }
    ],
    answer: "D",
    explanation: "提交作业、用户登录或已有进程派生新进程都可能触发进程创建；等待磁盘 I/O 通常会导致当前进程从执行状态转为阻塞状态，而不是创建新进程。",
    tags: [
      "process",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-05",
    title: "就绪与阻塞",
    question: "某进程已经获得除 CPU 以外的运行所需资源，只等待调度器分配处理机，它处于什么状态？",
    options: [
      {
        label: "A",
        text: "执行状态"
      },
      {
        label: "B",
        text: "阻塞状态"
      },
      {
        label: "C",
        text: "就绪状态"
      },
      {
        label: "D",
        text: "终止状态"
      }
    ],
    answer: "C",
    explanation: "就绪状态表示进程已经具备运行条件，只差 CPU；阻塞状态则表示进程正在等待某个事件或资源，即使 CPU 空闲也暂时不能继续执行。",
    tags: [
      "process",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-06",
    title: "状态转换",
    question: "正在执行的进程因为等待磁盘 I/O 完成而暂时不能继续运行，典型的状态转换是哪一项？",
    options: [
      {
        label: "A",
        text: "执行状态 → 就绪状态"
      },
      {
        label: "B",
        text: "执行状态 → 阻塞状态"
      },
      {
        label: "C",
        text: "阻塞状态 → 执行状态"
      },
      {
        label: "D",
        text: "就绪状态 → 阻塞状态"
      }
    ],
    answer: "B",
    explanation: "进程在执行时主动等待 I/O、信号或其他事件，会放弃处理机并进入阻塞状态。时间片用完或被抢占更常见的是从执行转为就绪。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-07",
    title: "挂起状态",
    question: "引入挂起状态后，关于“就绪挂起”的理解，下列哪项最准确？",
    options: [
      {
        label: "A",
        text: "进程在内存中等待 CPU，分配处理机后即可运行"
      },
      {
        label: "B",
        text: "进程已被换出到外存，具备运行条件，但需要先换入内存再参与调度"
      },
      {
        label: "C",
        text: "进程正在 CPU 上执行，但随时可能被中断"
      },
      {
        label: "D",
        text: "进程正在等待 I/O 完成，事件未发生前不能运行"
      }
    ],
    answer: "B",
    explanation: "挂起表示进程被暂时移出内存。就绪挂起的进程不缺等待事件，主要限制是当前不在内存中；阻塞挂起才是既被换出又在等待事件。",
    tags: [
      "process",
      "memory",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-08",
    title: "原语",
    question: "关于操作系统原语，下列哪项描述最准确？",
    options: [
      {
        label: "A",
        text: "原语可以在执行到一半时被任意中断并交给用户态程序继续完成"
      },
      {
        label: "B",
        text: "原语是一段完成特定功能、执行过程连续不可分割的核心操作"
      },
      {
        label: "C",
        text: "原语只存在于应用程序库中，与内核无关"
      },
      {
        label: "D",
        text: "原语的作用是让当前进程永久阻塞"
      }
    ],
    answer: "B",
    explanation: "原语用于实现创建、撤销、阻塞、唤醒等核心控制操作，要求执行过程具有不可分割性，通常在内核态完成，以避免关键状态被并发破坏。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-09",
    title: "PCB 作用",
    question: "为什么 PCB 是进程管理与控制的核心数据结构？",
    options: [
      {
        label: "A",
        text: "因为 PCB 保存进程标识、当前状态、现场、资源清单等信息，使 OS 能识别和管理进程"
      },
      {
        label: "B",
        text: "因为 PCB 只保存可执行程序的源代码"
      },
      {
        label: "C",
        text: "因为所有进程共享同一个 PCB，可以减少内存占用"
      },
      {
        label: "D",
        text: "因为没有 PCB，OS 也能完整恢复任意进程的执行现场"
      }
    ],
    answer: "A",
    explanation: "PCB 把进程的身份、状态、调度信息、现场保护信息和资源占用等集中记录下来。创建、撤销、调度和恢复进程都依赖这些控制信息。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-10",
    title: "并发执行特征",
    question: "程序并发执行后出现“不可再现性”的根本原因通常是什么？",
    options: [
      {
        label: "A",
        text: "程序代码被永久删除"
      },
      {
        label: "B",
        text: "多个程序共享资源，执行交错顺序可能改变共享状态"
      },
      {
        label: "C",
        text: "CPU 不再执行任何指令"
      },
      {
        label: "D",
        text: "所有输入数据都会自动变成随机数"
      }
    ],
    answer: "B",
    explanation: "并发程序可能读写同一资源，实际执行顺序又由调度决定；如果存在读写或写写冲突，相同初始条件下也可能得到不同结果。",
    tags: [
      "process",
      "concurrency",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-11",
    title: "时间片用完的状态转换",
    question: "正在执行的进程因时间片用完被调度器剥夺 CPU，典型状态转换是哪一项？",
    options: [
      {
        label: "A",
        text: "执行状态 → 就绪状态"
      },
      {
        label: "B",
        text: "执行状态 → 阻塞状态"
      },
      {
        label: "C",
        text: "阻塞状态 → 执行状态"
      },
      {
        label: "D",
        text: "就绪状态 → 挂起状态"
      }
    ],
    answer: "A",
    explanation: "时间片用完表示进程仍具备运行条件，只是暂时失去处理机，因此通常回到就绪队列；等待 I/O 或事件才会转入阻塞状态。",
    tags: [
      "process",
      "scheduling",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-12",
    title: "阻塞与唤醒",
    question: "一个阻塞进程等待的 I/O 事件完成后，通常不会直接变为执行状态，而是先进入就绪状态。原因是什么？",
    options: [
      {
        label: "A",
        text: "它还需要等待调度器分配 CPU"
      },
      {
        label: "B",
        text: "它的程序代码已经被删除"
      },
      {
        label: "C",
        text: "阻塞进程不能再参与任何调度"
      },
      {
        label: "D",
        text: "I/O 完成一定会让进程终止"
      }
    ],
    answer: "A",
    explanation: "事件完成只说明阻塞原因消失，进程重新具备运行条件；是否真正执行还取决于处理机分配，所以通常先转入就绪队列。",
    tags: [
      "process",
      "scheduling",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "process-state-control-13",
    title: "PCB 中的现场保护区",
    question: "PCB 中设置现场保护区的主要目的是什么？",
    options: [
      {
        label: "A",
        text: "保存 CPU 寄存器等执行现场，以便进程以后恢复运行"
      },
      {
        label: "B",
        text: "保存源代码注释，便于重新编译程序"
      },
      {
        label: "C",
        text: "永久保存所有磁盘文件内容"
      },
      {
        label: "D",
        text: "让进程绕过内核直接访问所有设备"
      }
    ],
    answer: "A",
    explanation: "进程失去 CPU 时，操作系统需要保存程序计数器、寄存器、栈指针等现场信息；下次调度该进程时再恢复这些信息，才能从断点继续执行。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-14",
    title: "进程撤销场景",
    question: "下列哪项最符合进程撤销而不是进程创建的场景？",
    options: [
      {
        label: "A",
        text: "用户提交一个新的批处理作业"
      },
      {
        label: "B",
        text: "已有进程调用接口创建子进程"
      },
      {
        label: "C",
        text: "进程正常结束或因错误失败而被系统终止"
      },
      {
        label: "D",
        text: "用户登录后系统为其建立服务进程"
      }
    ],
    answer: "C",
    explanation: "正常结束、出错失败、超时或用户退出等都可能触发撤销；提交作业、登录服务和创建子进程更常见于进程创建。",
    tags: [
      "process",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "process-state-control-15",
    title: "模态切换与上下文切换",
    question: "关于陷入内核和进程上下文切换，下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "只要从用户态进入内核态，就一定切换到另一个进程"
      },
      {
        label: "B",
        text: "陷入内核是特权级变化；进程上下文切换还涉及调度并切换到另一个进程的执行现场"
      },
      {
        label: "C",
        text: "进程上下文切换不需要保存任何寄存器"
      },
      {
        label: "D",
        text: "系统调用只能在用户态完整执行，不能进入内核态"
      }
    ],
    answer: "B",
    explanation: "系统调用、中断或异常会导致 CPU 进入内核态，但内核处理完后可能仍返回原进程；只有调度器决定换另一个进程运行时，才发生通常意义上的进程上下文切换。",
    tags: [
      "process",
      "kernel",
      "tricky"
    ],
    difficulty: "medium"
  }
];
const sync = [
  {
    id: "sync-mutex-semaphore-01",
    title: "Mutex 与 Semaphore",
    question: "关于 Mutex 和 Semaphore，下列说法最合适的是哪一项？",
    options: [
      {
        label: "A",
        text: "Mutex 更强调互斥所有权，Semaphore 更强调计数和同步信号"
      },
      {
        label: "B",
        text: "Semaphore 只能取 0 或 1"
      },
      {
        label: "C",
        text: "Mutex 不能用于保护临界区"
      },
      {
        label: "D",
        text: "二者没有任何语义差异"
      }
    ],
    answer: "A",
    explanation: "Mutex 通常用于保护临界区并强调加锁者释放；Semaphore 可以表达资源数量，也可作为线程间同步信号。",
    tags: [
      "concurrency",
      "tricky",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "sync-condition-variable-01",
    title: "条件变量",
    question: "使用条件变量等待某个条件时，为什么通常要用 while 而不是 if？",
    options: [
      {
        label: "A",
        text: "while 的性能一定更好"
      },
      {
        label: "B",
        text: "线程被唤醒后条件可能仍不满足，需要重新检查"
      },
      {
        label: "C",
        text: "if 无法通过编译"
      },
      {
        label: "D",
        text: "条件变量不需要和锁配合"
      }
    ],
    answer: "B",
    explanation: "条件变量可能出现虚假唤醒，或者多个线程竞争导致被唤醒时条件已被其他线程改变，因此需要在循环中重新检查条件。",
    tags: [
      "concurrency",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-critical-section-01",
    title: "互斥与同步",
    question: "关于互斥和同步，下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "互斥强调多个进程按固定先后顺序执行，和资源竞争无关"
      },
      {
        label: "B",
        text: "同步强调协调进程间的执行次序，互斥强调临界资源一次只允许一个执行流访问"
      },
      {
        label: "C",
        text: "同步和互斥都只能通过关闭中断实现"
      },
      {
        label: "D",
        text: "只要使用多线程，就不会出现互斥问题"
      }
    ],
    answer: "B",
    explanation: "互斥来自对临界资源的竞争，目标是同一时刻只有一个执行流进入临界区；同步来自执行顺序约束，目标是让不同执行流按条件或先后关系推进。",
    tags: [
      "concurrency",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "sync-critical-section-02",
    title: "临界区管理准则",
    question: "下列哪项最符合“有限等待”的含义？",
    options: [
      {
        label: "A",
        text: "临界区空闲时，任何申请者都必须继续等待"
      },
      {
        label: "B",
        text: "临界区中可以同时有多个进程运行，只要它们优先级相同"
      },
      {
        label: "C",
        text: "申请进入临界区的进程应能在有限时间内获得进入机会，避免饥饿"
      },
      {
        label: "D",
        text: "进程在临界区外运行时必须阻止其他进程进入临界区"
      }
    ],
    answer: "C",
    explanation: "有限等待要求请求临界区的进程不会无限期等待；它和空闲让进、忙则等待、让权等待共同约束临界区管理。",
    tags: [
      "concurrency",
      "tricky",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "sync-dekker-01",
    title: "Dekker 算法",
    question: "Dekker 算法中，`turn` 与两个申请标志共同使用的主要目的是什么？",
    options: [
      {
        label: "A",
        text: "只记录当前系统中 CPU 的数量"
      },
      {
        label: "B",
        text: "在双方同时申请临界区时决定谁先进入，并让另一方暂时等待"
      },
      {
        label: "C",
        text: "让两个进程永远同时进入临界区"
      },
      {
        label: "D",
        text: "保存临界区内共享变量的备份值"
      }
    ],
    answer: "B",
    explanation: "`pturn/qturn` 表示是否申请进入，`turn` 用来处理双方同时申请时的优先权，从而保证互斥并避免双方都坚持进入。",
    tags: [
      "concurrency",
      "algorithm",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-peterson-01",
    title: "Peterson 算法",
    question: "Peterson 算法中，一个进程申请进入临界区后主动设置 `turn = other`，这一步的作用是什么？",
    options: [
      {
        label: "A",
        text: "主动把竞争时的优先权让给对方，若对方也申请则自己等待"
      },
      {
        label: "B",
        text: "永久禁止对方进入临界区"
      },
      {
        label: "C",
        text: "让两个进程跳过临界区"
      },
      {
        label: "D",
        text: "清空所有共享变量，避免读写冲突"
      }
    ],
    answer: "A",
    explanation: "Peterson 算法用意愿标志表示自己想进入，用 `turn` 解决双方同时有意愿时的让步关系。它比 Dekker 更简洁，但仍主要适用于两个进程。",
    tags: [
      "concurrency",
      "algorithm",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-bakery-01",
    title: "Bakery 算法",
    question: "Bakery Algorithm 中同时比较编号和进程 ID 的主要原因是什么？",
    options: [
      {
        label: "A",
        text: "编号越大代表越早申请，必须优先进入"
      },
      {
        label: "B",
        text: "只按进程 ID 排序即可保证完全公平，不需要编号"
      },
      {
        label: "C",
        text: "编号体现申请先后，进程 ID 用于在编号相同时打破平局"
      },
      {
        label: "D",
        text: "进程 ID 用于保存临界区中的计算结果"
      }
    ],
    answer: "C",
    explanation: "Bakery 算法用动态编号近似“先来先服务”；当多个进程取到相同编号时，再用进程 ID 保证比较关系确定。",
    tags: [
      "concurrency",
      "algorithm",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-interrupt-disable-01",
    title: "中断屏蔽",
    question: "为什么关中断实现互斥不适合作为普通用户程序的通用方案？",
    options: [
      {
        label: "A",
        text: "关中断会让该 CPU 不再被中断抢占，若用户程序滥用会破坏系统响应甚至导致系统无法继续运行"
      },
      {
        label: "B",
        text: "关中断会自动释放所有临界资源"
      },
      {
        label: "C",
        text: "关中断可以同时阻止所有 CPU 访问共享变量，因此没有任何代价"
      },
      {
        label: "D",
        text: "关中断只能用于实现同步，不能用于互斥"
      }
    ],
    answer: "A",
    explanation: "关中断依赖抢占和调度入口被关闭，通常只适合内核中极短的关键区域；多 CPU 下还不能阻止其他 CPU 访问同一共享资源。",
    tags: [
      "concurrency",
      "kernel",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-test-and-set-01",
    title: "Test-and-Set",
    question: "关于 test_and_set 指令，下列说法正确的是哪一项？",
    options: [
      {
        label: "A",
        text: "它先返回 lock 的旧值，再原子地把 lock 置为 true"
      },
      {
        label: "B",
        text: "它只能读取 lock，不能修改 lock"
      },
      {
        label: "C",
        text: "它由多条可被任意中断的用户态语句组成"
      },
      {
        label: "D",
        text: "它执行后一定会让当前进程阻塞并释放 CPU"
      }
    ],
    answer: "A",
    explanation: "test_and_set 的关键是读旧值与写新值不可分割。自旋锁正是利用旧值判断是否已经有人持锁。",
    tags: [
      "concurrency",
      "kernel",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "sync-spinlock-01",
    title: "自旋锁适用场景",
    question: "下列哪种场景更适合使用自旋锁？",
    options: [
      {
        label: "A",
        text: "临界区很短，预计持锁时间小于阻塞和唤醒的开销"
      },
      {
        label: "B",
        text: "临界区包含长时间磁盘 I/O"
      },
      {
        label: "C",
        text: "持锁线程可能长期睡眠"
      },
      {
        label: "D",
        text: "系统希望等待线程立刻让出 CPU，完全不忙等"
      }
    ],
    answer: "A",
    explanation: "自旋锁用忙等待换取避免睡眠/唤醒开销，因此适合短临界区；等待时间长时会浪费 CPU。",
    tags: [
      "concurrency",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-priority-inversion-01",
    title: "优先级反转",
    question: "优先级反转问题的典型表现是什么？",
    options: [
      {
        label: "A",
        text: "高优先级任务等待低优先级任务释放锁，而低优先级任务又迟迟得不到运行机会"
      },
      {
        label: "B",
        text: "所有低优先级任务都会自动变成高优先级任务"
      },
      {
        label: "C",
        text: "进程 ID 较小的任务永远不能进入临界区"
      },
      {
        label: "D",
        text: "关闭中断后系统必然提升所有任务优先级"
      }
    ],
    answer: "A",
    explanation: "低优先级任务持有高优先级任务需要的锁时，高优先级任务会被锁间接阻塞；若低优先级任务被其他中优先级任务抢占，就可能长期无法释放锁。",
    tags: [
      "concurrency",
      "scheduling",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-semaphore-02",
    title: "信号量避免唤醒丢失",
    question: "信号量相比单纯的 Sleep/Wakeup 更能避免“唤醒丢失”的关键原因是什么？",
    options: [
      {
        label: "A",
        text: "信号量用整型值累计可用资源或唤醒次数，V 操作的效果不会因为暂时无人等待就必然丢失"
      },
      {
        label: "B",
        text: "信号量完全不需要原子操作"
      },
      {
        label: "C",
        text: "信号量只能用于一个进程，不能用于多个进程"
      },
      {
        label: "D",
        text: "信号量会自动判断临界区代码是否正确"
      }
    ],
    answer: "A",
    explanation: "信号量的值保存了资源数量或已经发生的信号；后来执行 P 操作的进程可以消耗这个计数，而不是依赖某次瞬时 wakeup 是否正好有人等待。",
    tags: [
      "concurrency",
      "semaphore",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-barrier-01",
    title: "屏障同步",
    question: "笔记中的屏障实现里，线程执行 `P(barrier)` 后紧接着执行 `V(barrier)` 的作用是什么？",
    options: [
      {
        label: "A",
        text: "被唤醒的线程继续唤醒下一个等待线程，使所有已到达屏障的线程依次通过"
      },
      {
        label: "B",
        text: "把 count 重置为 0，保证屏障可无限复用"
      },
      {
        label: "C",
        text: "让第一个到达屏障的线程立刻越过所有其他线程"
      },
      {
        label: "D",
        text: "关闭中断，防止任何线程进入屏障"
      }
    ],
    answer: "A",
    explanation: "最后一个到达的线程释放一次 barrier 后，每个被唤醒的线程再释放下一次，相当于接力唤醒等待队列中的其他线程。",
    tags: [
      "concurrency",
      "semaphore",
      "tricky"
    ],
    difficulty: "hard"
  },
  {
    id: "sync-semaphore-set-01",
    title: "AND 型信号量集",
    question: "AND 型信号量集机制的核心思想是什么？",
    options: [
      {
        label: "A",
        text: "进程需要多个资源时，一次性测试并分配全部所需资源，使用完后再一起释放"
      },
      {
        label: "B",
        text: "每次只允许进程申请一个资源，失败后仍然占有已经申请到的资源"
      },
      {
        label: "C",
        text: "把所有信号量都强制改成二元信号量"
      },
      {
        label: "D",
        text: "取消 P/V 操作，只保留条件变量"
      }
    ],
    answer: "A",
    explanation: "AND 型信号量集把多个资源的申请作为一个整体处理，避免进程只占有部分资源后继续等待其他资源而增加死锁风险。",
    tags: [
      "concurrency",
      "semaphore",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "sync-monitor-01",
    title: "Hoare 管程",
    question: "在 Hoare 管程语义中，进程 Q 对条件变量 X 执行 signal 唤醒 P 后，典型执行关系是什么？",
    options: [
      {
        label: "A",
        text: "P 立即获得管程执行权继续运行，Q 进入紧急等待队列等待恢复"
      },
      {
        label: "B",
        text: "Q 继续运行直到退出，P 只能重新从入口等待队列排队"
      },
      {
        label: "C",
        text: "P 和 Q 可以同时在管程内执行"
      },
      {
        label: "D",
        text: "signal 一定会永久保存，直到未来任意进程 wait"
      }
    ],
    answer: "A",
    explanation: "Hoare 管程强调被 signal 唤醒的等待进程立即接管管程；signal 发起者则暂时进入 urgent queue，等管程再次可用时优先恢复。",
    tags: [
      "concurrency",
      "monitor",
      "tricky"
    ],
    difficulty: "hard"
  }
];
const boot = [
  {
    id: "boot-intro-01",
    title: "操作系统的角色",
    question: "关于操作系统的作用，下面哪种说法最准确？",
    options: [
      {
        label: "A",
        text: "操作系统只是一个图形界面，负责让用户点击程序"
      },
      {
        label: "B",
        text: "操作系统在用户程序和硬件之间提供抽象、资源管理和保护"
      },
      {
        label: "C",
        text: "操作系统只负责启动计算机，启动完成后不再参与程序运行"
      },
      {
        label: "D",
        text: "操作系统让所有程序都可以直接访问全部硬件寄存器"
      }
    ],
    answer: "B",
    explanation: "操作系统的核心是向上提供接口和抽象，向下管理 CPU、内存、I/O 等硬件资源，并通过权限和隔离机制保护内核与进程。",
    tags: [
      "boot",
      "os-intro",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-intro-02",
    title: "抽象的意义",
    question: "文件系统体现了操作系统的哪一类核心思想？",
    options: [
      {
        label: "A",
        text: "把复杂磁盘细节抽象成文件、目录等更容易使用的对象"
      },
      {
        label: "B",
        text: "让应用程序直接指定磁头、柱面和扇区完成所有 I/O"
      },
      {
        label: "C",
        text: "取消所有设备驱动，让程序自己控制硬件"
      },
      {
        label: "D",
        text: "只提高 CPU 主频，不改变程序访问数据的方式"
      }
    ],
    answer: "A",
    explanation: "抽象的价值在于屏蔽硬件复杂性。文件系统让程序以文件和目录为单位访问数据，而不必直接处理磁盘物理布局。",
    tags: [
      "boot",
      "abstraction",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-intro-03",
    title: "分时系统的影响",
    question: "分时系统把多个程序放到同一台机器上交替运行后，最直接推动了哪类机制的必要性？",
    options: [
      {
        label: "A",
        text: "让每个用户程序都独占全部物理内存和 I/O 设备"
      },
      {
        label: "B",
        text: "通过中断、系统调用、内核态和内存保护来受控共享硬件"
      },
      {
        label: "C",
        text: "取消调度器，因为程序必须严格串行执行"
      },
      {
        label: "D",
        text: "关闭虚拟内存，使所有程序使用相同物理地址"
      }
    ],
    answer: "B",
    explanation: "分时系统要求多个程序共享 CPU、内存和设备，因此必须限制用户程序权限，并通过中断、调度、系统调用、地址空间和内存保护来协调共享。",
    tags: [
      "boot",
      "history",
      "kernel"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-intro-04",
    title: "中断与陷阱",
    question: "关于中断 interrupt 和陷阱 trap，下面哪项最准确？",
    options: [
      {
        label: "A",
        text: "中断通常由当前指令主动触发，陷阱通常由外设异步触发"
      },
      {
        label: "B",
        text: "中断和陷阱都一定表示程序发生了不可恢复错误"
      },
      {
        label: "C",
        text: "中断通常是异步外部事件，系统调用常被视为同步陷阱"
      },
      {
        label: "D",
        text: "陷阱发生后 CPU 不会进入内核态"
      }
    ],
    answer: "C",
    explanation: "中断多来自 I/O 设备或定时器，和当前指令不一定相关；系统调用是程序有意触发的受控陷入内核，通常属于同步陷阱。",
    tags: [
      "boot",
      "interrupt",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-intro-05",
    title: "虚拟特征",
    question: "下面哪项最能体现操作系统的“虚拟”特征？",
    options: [
      {
        label: "A",
        text: "让多个进程看到各自独立的虚拟地址空间"
      },
      {
        label: "B",
        text: "禁止任何程序使用内存"
      },
      {
        label: "C",
        text: "让 CPU 不再执行机器指令"
      },
      {
        label: "D",
        text: "把所有文件都复制到寄存器中"
      }
    ],
    answer: "A",
    explanation: "虚拟化不是假的资源，而是通过映射、调度和保护把物理资源表现为更规则的逻辑资源。虚拟地址空间是典型例子。",
    tags: [
      "boot",
      "abstraction",
      "memory"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-intro-06",
    title: "机制与策略",
    question: "“机制与策略分离”在操作系统设计中通常表示什么？",
    options: [
      {
        label: "A",
        text: "内核只保留硬件，不再提供任何软件接口"
      },
      {
        label: "B",
        text: "机制提供能做什么，策略决定具体如何选择"
      },
      {
        label: "C",
        text: "所有调度算法都必须写死在硬件里"
      },
      {
        label: "D",
        text: "用户程序可以绕过内核直接修改页表"
      }
    ],
    answer: "B",
    explanation: "机制是基本能力，例如切换进程、设置页表、阻塞或唤醒进程；策略是在具体场景下选择哪个进程、如何分配资源。",
    tags: [
      "boot",
      "kernel",
      "design"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-sequence-01",
    title: "Boot 的核心矛盾",
    question: "为什么说计算机启动是一个 bootstrapping 问题？",
    options: [
      {
        label: "A",
        text: "必须先有程序运行才能初始化系统，但程序又依赖被初始化的运行环境"
      },
      {
        label: "B",
        text: "启动过程中只能运行用户态程序，不能运行内核态程序"
      },
      {
        label: "C",
        text: "启动只需要显示登录界面，不需要初始化硬件"
      },
      {
        label: "D",
        text: "启动阶段不允许执行任何指令"
      }
    ],
    answer: "A",
    explanation: "启动必须从极弱、固定、可靠的初始状态开始，先运行一小段程序，逐步初始化硬件并加载更复杂的软件。",
    tags: [
      "boot",
      "bootloader",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-sequence-02",
    title: "Bootloader 职责",
    question: "Bootloader 的主要职责不包括哪一项？",
    options: [
      {
        label: "A",
        text: "初始化必要硬件，使系统具备最小运行环境"
      },
      {
        label: "B",
        text: "把操作系统内核映像加载到内存"
      },
      {
        label: "C",
        text: "跳转到操作系统内核入口"
      },
      {
        label: "D",
        text: "长期负责所有用户进程的调度和内存回收"
      }
    ],
    answer: "D",
    explanation: "Bootloader 只负责把系统带到内核可以接管的状态。长期调度、内存回收和资源管理是操作系统内核的职责。",
    tags: [
      "boot",
      "bootloader",
      "tricky"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-sequence-03",
    title: "MIPS kseg1",
    question: "MIPS 上电启动时选择 `kseg1` 区域作为可靠入口的重要原因是什么？",
    options: [
      {
        label: "A",
        text: "它是用户态可直接访问的高速缓存区域"
      },
      {
        label: "B",
        text: "它不依赖 TLB 和 Cache，重启时仍能可靠映射到物理地址"
      },
      {
        label: "C",
        text: "它只能在分页机制完全建立后访问"
      },
      {
        label: "D",
        text: "它会自动创建所有页表项"
      }
    ],
    answer: "B",
    explanation: "启动早期不能假设 TLB 和 Cache 已可用。`kseg1` 是不经过 Cache 的直接映射区域，因此适合放置重启入口。",
    tags: [
      "boot",
      "mips",
      "memory"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-sequence-04",
    title: "Cache as RAM",
    question: "U-Boot 早期把一部分 Cache 当作临时 RAM 使用，主要是为了解决什么问题？",
    options: [
      {
        label: "A",
        text: "DDR RAM 尚未配置好，但调用 C 函数需要栈"
      },
      {
        label: "B",
        text: "让所有用户程序都运行在 Cache 中"
      },
      {
        label: "C",
        text: "绕过所有寄存器初始化"
      },
      {
        label: "D",
        text: "把内核永久存放在 Cache 中，避免加载到内存"
      }
    ],
    answer: "A",
    explanation: "早期还不能可靠使用 DDR，但 C 代码需要栈。将部分 Cache 锁定为临时栈空间，可以让启动代码继续执行到内存控制器初始化完成。",
    tags: [
      "boot",
      "mips",
      "uboot"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-sequence-05",
    title: "内核接管控制权",
    question: "Bootloader 把 Linux 内核映像放到内存后，下一步的关键动作是什么？",
    options: [
      {
        label: "A",
        text: "继续替内核调度所有用户进程"
      },
      {
        label: "B",
        text: "跳转到内核入口，让内核开始建立自己的运行环境"
      },
      {
        label: "C",
        text: "删除内核映像并重新执行 BIOS"
      },
      {
        label: "D",
        text: "直接执行 `/bin/login`，绕过内核初始化"
      }
    ],
    answer: "B",
    explanation: "控制权交接是启动链路的核心。Bootloader 准备参数和内核映像后跳到内核入口，随后由内核完成栈、页表、调度器、内存和设备等初始化。",
    tags: [
      "boot",
      "kernel",
      "linux"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-sequence-06",
    title: "传统 x86 启动顺序",
    question: "传统 x86 BIOS/MBR 启动链路中，下面顺序最合理的是哪一项？",
    options: [
      {
        label: "A",
        text: "加电 -> BIOS -> POST -> 找启动设备 -> 读取 MBR -> Bootloader"
      },
      {
        label: "B",
        text: "加电 -> 用户登录 -> BIOS -> MBR -> 内核"
      },
      {
        label: "C",
        text: "加电 -> MBR -> POST -> BIOS -> Bootloader"
      },
      {
        label: "D",
        text: "加电 -> `/sbin/init` -> BIOS -> Bootloader"
      }
    ],
    answer: "A",
    explanation: "传统链路中 CPU 先跳到 BIOS 固定入口，BIOS 做硬件自检并按启动顺序寻找设备，然后读取 MBR，把控制权交给 Bootloader。",
    tags: [
      "boot",
      "x86",
      "bios"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-sequence-07",
    title: "MBR 结构",
    question: "传统 MBR 的 512 字节结构中，下面哪项正确？",
    options: [
      {
        label: "A",
        text: "前 446 字节为启动代码和数据，随后 64 字节为分区表，最后 2 字节为启动签名"
      },
      {
        label: "B",
        text: "全部 512 字节都必须存放文件系统目录项"
      },
      {
        label: "C",
        text: "最后 2 字节固定为 `0x0000` 才能启动"
      },
      {
        label: "D",
        text: "MBR 中可以直接保存任意数量的主分区表项"
      }
    ],
    answer: "A",
    explanation: "MBR 由 446 字节启动代码、4 个 16 字节分区表项和 2 字节 `0x55aa` 启动签名组成，因此传统主分区表项数量受限。",
    tags: [
      "boot",
      "mbr",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-sequence-08",
    title: "GRUB stage1.5",
    question: "GRUB 引入 stage1.5 的主要目的是什么？",
    options: [
      {
        label: "A",
        text: "识别文件系统，使后续阶段能从文件系统读取菜单、内核和 initrd"
      },
      {
        label: "B",
        text: "永久替代 Linux 内核中的调度器"
      },
      {
        label: "C",
        text: "关闭所有磁盘分区功能"
      },
      {
        label: "D",
        text: "在用户登录后重新执行 BIOS"
      }
    ],
    answer: "A",
    explanation: "MBR 中的 stage1 空间很小，通常只负责加载下一阶段。stage1.5 提供文件系统识别能力，stage2 才能加载菜单和内核映像。",
    tags: [
      "boot",
      "grub",
      "mbr"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-program-01",
    title: "程序与进程",
    question: "关于程序和进程，下面哪项最准确？",
    options: [
      {
        label: "A",
        text: "程序是静态代码或文件，进程是程序的一次执行过程"
      },
      {
        label: "B",
        text: "程序和进程完全等价，只是名称不同"
      },
      {
        label: "C",
        text: "一个程序最多只能对应一个进程"
      },
      {
        label: "D",
        text: "进程不需要任何内核管理数据结构"
      }
    ],
    answer: "A",
    explanation: "程序存放在磁盘上，本身是静态对象；进程包含 PCB、地址空间、打开文件、寄存器现场等运行状态，是动态执行实体。",
    tags: [
      "boot",
      "process",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-program-02",
    title: "执行可执行文件",
    question: "用户通过 shell 执行一个可执行文件时，操作系统通常需要做什么？",
    options: [
      {
        label: "A",
        text: "检查可执行文件头部，建立进程地址空间，并设置 CPU 上下文"
      },
      {
        label: "B",
        text: "把源代码逐行解释成自然语言"
      },
      {
        label: "C",
        text: "让程序直接覆盖内核代码段"
      },
      {
        label: "D",
        text: "跳过调度器，使该程序永久独占 CPU"
      }
    ],
    answer: "A",
    explanation: "执行程序时，内核需要识别文件格式，建立地址空间，映射代码和数据，设置入口、栈、参数等上下文，再把进程放入调度体系。",
    tags: [
      "boot",
      "process",
      "kernel"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-program-03",
    title: "缺页异常",
    question: "程序执行第一条指令时发生缺页异常，下面哪种说法一定正确？",
    options: [
      {
        label: "A",
        text: "该程序一定写错了，必须立即终止"
      },
      {
        label: "B",
        text: "内核会检查地址是否合法；若合法，可能调入页面后重试该指令"
      },
      {
        label: "C",
        text: "缺页异常一定不需要进入内核"
      },
      {
        label: "D",
        text: "缺页异常一定由键盘中断引起"
      }
    ],
    answer: "B",
    explanation: "请求分页系统中，合法页面尚未调入时会触发缺页异常。内核处理后可以更新页表并重试指令；非法地址或权限错误才会导致错误结果。",
    tags: [
      "boot",
      "memory",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-program-04",
    title: "printf 输出路径",
    question: '`printf("hello world\\n")` 通常不会直接做哪件事？',
    options: [
      {
        label: "A",
        text: "通过 C 库格式化输出内容"
      },
      {
        label: "B",
        text: "通过系统调用请求内核写标准输出"
      },
      {
        label: "C",
        text: "经由终端、伪终端或窗口系统显示字符"
      },
      {
        label: "D",
        text: "由用户程序直接控制显示器电子束或所有显存硬件细节"
      }
    ],
    answer: "D",
    explanation: "普通用户程序通常通过库函数和系统调用输出数据，内核和设备/终端/窗口系统负责后续路径，而不是让用户程序直接操作全部显示硬件。",
    tags: [
      "boot",
      "syscall",
      "device"
    ],
    difficulty: "easy"
  },
  {
    id: "boot-program-05",
    title: "系统调用与上下文切换",
    question: "关于系统调用和进程上下文切换，下面哪项最准确？",
    options: [
      {
        label: "A",
        text: "每次系统调用都必然切换到另一个进程"
      },
      {
        label: "B",
        text: "系统调用表示从用户态进入内核态处理请求，不必然发生进程上下文切换"
      },
      {
        label: "C",
        text: "进程上下文切换不需要保存任何寄存器状态"
      },
      {
        label: "D",
        text: "系统调用只能由外部设备异步触发"
      }
    ],
    answer: "B",
    explanation: "系统调用是一次受控的 mode switch。它可能在同一进程上下文内完成；进程上下文切换则由调度器切换执行实体，两者不能混为一谈。",
    tags: [
      "boot",
      "syscall",
      "process",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "boot-program-06",
    title: "程序运行链条",
    question: "下面哪条链路最符合一个普通程序从文件到运行的过程？",
    options: [
      {
        label: "A",
        text: "源代码 -> 编译/链接 -> 可执行文件 -> 内核创建进程 -> 调度执行"
      },
      {
        label: "B",
        text: "源代码 -> BIOS POST -> 用户登录 -> 物理磁头直接执行源代码"
      },
      {
        label: "C",
        text: "可执行文件 -> 删除页表 -> 直接覆盖 Bootloader -> 输出结果"
      },
      {
        label: "D",
        text: "程序运行不需要内核参与，只需要显示器刷新"
      }
    ],
    answer: "A",
    explanation: "普通程序先变成可执行文件，再由内核装入并创建进程，设置地址空间和上下文，最后通过调度获得 CPU 运行。",
    tags: [
      "boot",
      "process",
      "exam"
    ],
    difficulty: "easy"
  }
];
const finalReview = [
  {
    id: "fr-01",
    title: "多道程序设计的动机",
    question: "多道程序设计技术被提出的主要目的是什么？",
    options: [
      {
        label: "A",
        text: "提高内存利用率"
      },
      {
        label: "B",
        text: "提高 CPU 利用率"
      },
      {
        label: "C",
        text: "提高磁盘 I/O 速度"
      },
      {
        label: "D",
        text: "提高用户交互体验"
      }
    ],
    answer: "B",
    explanation: "早期单用户批处理系统中 CPU 经常因等待 I/O 而空闲。多道程序设计允许多个作业同时驻留内存，当一道作业等待 I/O 时，CPU 可切换到另一道作业继续执行，从而显著提高 CPU 利用率。",
    tags: [
      "process",
      "history",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-02",
    title: "宏内核与微内核",
    question: "关于宏内核（Monolithic Kernel）和微内核（Microkernel），以下说法正确的是？",
    options: [
      {
        label: "A",
        text: "微内核比宏内核占用空间更大"
      },
      {
        label: "B",
        text: "宏内核的功能模块之间共享地址空间"
      },
      {
        label: "C",
        text: "微内核的功能比宏内核更强大"
      },
      {
        label: "D",
        text: "微内核的上下文切换开销比宏内核更小"
      }
    ],
    answer: "B",
    explanation: "宏内核的所有内核模块运行在同一个地址空间中，模块间通过函数调用直接通信，上下文切换开销小。微内核将大部分服务移到用户态，内核本身占用空间小，但模块间需要通过 IPC 通信，开销较大。",
    tags: [
      "kernel",
      "design",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-03",
    title: "exec() 与进程标识",
    question: "关于 exec() 系统调用，以下说法正确的是？",
    options: [
      {
        label: "A",
        text: "exec() 会修改进程的 PID"
      },
      {
        label: "B",
        text: "exec() 会替换进程的地址空间但不改变 PID"
      },
      {
        label: "C",
        text: "exec() 创建新的子进程"
      },
      {
        label: "D",
        text: "exec() 会复制父进程的地址空间"
      }
    ],
    answer: "B",
    explanation: "exec() 用新程序替换当前进程的地址空间（代码段、数据段、堆栈等），但进程的 PID 保持不变。进程仍然是同一个，只是执行的程序变了。fork() 才创建新进程。",
    tags: [
      "process",
      "kernel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-04",
    title: "第二次机会算法",
    question: "在第二次机会（Second Chance）页面置换算法中，当扫描到一个页面时，如果其引用位为 1，则算法会做什么？",
    options: [
      {
        label: "A",
        text: "立即淘汰该页面"
      },
      {
        label: "B",
        text: "将该页面的引用位清零并移到队列尾部"
      },
      {
        label: "C",
        text: "将该页面保留并继续扫描下一个"
      },
      {
        label: "D",
        text: "将该页面写回磁盘后淘汰"
      }
    ],
    answer: "B",
    explanation: "第二次机会算法是 FIFO 的改进：检查队首页面的引用位。若引用位为 1，说明最近被访问过，将其清零并移到队尾（给予第二次机会）；若引用位为 0，才将其淘汰。",
    tags: [
      "virtual-memory",
      "page-replacement",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-05",
    title: "反置页表的结构",
    question: "关于反置页表（Inverted Page Table），以下说法正确的是？",
    options: [
      {
        label: "A",
        text: "为每个进程的每个虚拟页保留一个条目"
      },
      {
        label: "B",
        text: "为每个物理页框保留一个条目"
      },
      {
        label: "C",
        text: "查找速度比普通页表快"
      },
      {
        label: "D",
        text: "便于进程之间共享内存"
      }
    ],
    answer: "B",
    explanation: "反置页表以物理页框为索引，每个条目记录该页框被哪个进程的哪个虚拟页占用。它的优点是页表大小与虚拟地址空间无关（只与物理内存有关），缺点是查找需要遍历或使用哈希表。",
    tags: [
      "paging",
      "inverted-page-table",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-06",
    title: "硬链接与软链接",
    question: "在 Unix/Linux 文件系统中，关于硬链接和软链接，以下说法错误的是？",
    options: [
      {
        label: "A",
        text: "硬链接共享相同的 inode 号"
      },
      {
        label: "B",
        text: "删除源文件后软链接会失效"
      },
      {
        label: "C",
        text: "硬链接可以跨文件系统创建"
      },
      {
        label: "D",
        text: "软链接本身是一个独立的文件"
      }
    ],
    answer: "C",
    explanation: "硬链接不能跨文件系统，因为 inode 号只在同一个文件系统内唯一。软链接（符号链接）可以跨文件系统，因为它存储的是目标路径字符串。A/B/D 均正确。",
    tags: [
      "filesystem",
      "link",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-07",
    title: "文件系统挂载过程",
    question: "文件系统挂载（mount）时，内核首先将什么信息加载到内存中？",
    options: [
      {
        label: "A",
        text: "文件的 inode 表"
      },
      {
        label: "B",
        text: "根目录的目录项"
      },
      {
        label: "C",
        text: "文件系统的超级块"
      },
      {
        label: "D",
        text: "空闲块位图"
      }
    ],
    answer: "C",
    explanation: "挂载操作的第一步是将文件系统的超级块（superblock）读入内存。超级块包含文件系统的元信息（魔数、块大小、inode 总数、空闲块数等），是访问文件系统的基础。",
    tags: [
      "filesystem",
      "mount",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-08",
    title: "内核级线程的阻塞行为",
    question: "一个多线程进程中，某个内核级线程在执行系统调用时被阻塞，会发生什么？",
    options: [
      {
        label: "A",
        text: "同一进程的所有线程都被阻塞"
      },
      {
        label: "B",
        text: "只阻塞该线程本身，其他线程可以继续运行"
      },
      {
        label: "C",
        text: "整个进程被终止"
      },
      {
        label: "D",
        text: "被阻塞的线程立即被调度到另一个 CPU"
      }
    ],
    answer: "B",
    explanation: "内核级线程由内核独立调度，每个线程有独立的 TCB。一个内核级线程的阻塞不会影响同一进程中的其他内核级线程——内核可以调度其他就绪线程运行。这是内核级线程相比用户级线程的重要优势。",
    tags: [
      "process",
      "thread",
      "kernel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-09",
    title: "系统调用与中断",
    question: "系统调用陷入（trap）与外部中断的区别在于？",
    options: [
      {
        label: "A",
        text: "系统调用是异步的，外部中断是同步的"
      },
      {
        label: "B",
        text: "系统调用是同步的（由程序主动触发），外部中断是异步的"
      },
      {
        label: "C",
        text: "两者的处理流程完全相同"
      },
      {
        label: "D",
        text: "系统调用不由操作系统处理"
      }
    ],
    answer: "B",
    explanation: "系统调用陷入是同步事件——由正在执行的程序通过 int/syscall 指令主动触发。外部中断是异步事件——由硬件设备在任意时刻产生。两者的触发方式不同，但都是进入内核态的入口。",
    tags: [
      "kernel",
      "interrupt",
      "syscall",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-10",
    title: "中级调度的作用",
    question: "中级调度（Medium-term Scheduler）的主要功能是什么？",
    options: [
      {
        label: "A",
        text: "从就绪队列中选择进程分配 CPU"
      },
      {
        label: "B",
        text: "将作业从外存调入内存"
      },
      {
        label: "C",
        text: "将进程从主存换出到外存或从外存换入到主存"
      },
      {
        label: "D",
        text: "创建新的进程"
      }
    ],
    answer: "C",
    explanation: "中级调度负责进程的挂起（换出）和激活（换入），通过 swapping 调节内存压力。当内存不足时将阻塞进程换出到磁盘，内存充裕时再换入，从而优化内存使用和系统性能。",
    tags: [
      "process",
      "scheduling",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-11",
    title: "运行态到就绪态",
    question: "在操作系统中，进程从运行态转换到就绪态的典型原因是什么？",
    options: [
      {
        label: "A",
        text: "进程等待 I/O 操作完成"
      },
      {
        label: "B",
        text: "进程的时间片用完"
      },
      {
        label: "C",
        text: "进程调用了 sleep()"
      },
      {
        label: "D",
        text: "进程等待信号量"
      }
    ],
    answer: "B",
    explanation: "运行→就绪：时间片用完或被更高优先级进程抢占，进程回到就绪队列等待下一次调度。运行→阻塞：进程主动等待某事件（如 I/O、信号量）。",
    tags: [
      "process",
      "state",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-12",
    title: "位示图空间开销",
    question: "某磁盘共 2^30 个盘块，采用位示图法管理空闲块，每个盘块用 1 bit 表示。位示图需要占用多少 MB 存储空间？",
    options: [
      {
        label: "A",
        text: "64 MB"
      },
      {
        label: "B",
        text: "128 MB"
      },
      {
        label: "C",
        text: "256 MB"
      },
      {
        label: "D",
        text: "32 MB"
      }
    ],
    answer: "B",
    explanation: "2^30 bits = 2^27 Bytes = 2^27 / 2^20 MB = 2^7 = 128 MB。计算过程：总位数 / 8 = 字节数，再除以 1024×1024 转换为 MB。",
    tags: [
      "disk",
      "bitmap",
      "calculation",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-13",
    title: "BSS 段与 DATA 段",
    question: "C 语言程序中，未初始化的全局变量在运行时存放在哪个段？",
    options: [
      {
        label: "A",
        text: ".text 段"
      },
      {
        label: "B",
        text: ".data 段"
      },
      {
        label: "C",
        text: ".bss 段"
      },
      {
        label: "D",
        text: "栈段"
      }
    ],
    answer: "C",
    explanation: ".bss 段（Block Started by Symbol）存放未初始化的全局变量和静态变量。程序加载时 OS 将其初始化为 0，不占用可执行文件空间。已初始化的全局变量在 .data 段。",
    tags: [
      "process",
      "memory-layout",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-14",
    title: "实时系统的核心特征",
    question: "实时操作系统（RTOS）与普通分时操作系统最本质的区别是什么？",
    options: [
      {
        label: "A",
        text: "RTOS 的 CPU 速度更快"
      },
      {
        label: "B",
        text: "RTOS 必须在规定的时间限制内完成响应"
      },
      {
        label: "C",
        text: "RTOS 不支持多任务"
      },
      {
        label: "D",
        text: "RTOS 的内核占用空间更小"
      }
    ],
    answer: "B",
    explanation: "实时系统的核心是时间约束——必须在 deadline 之前完成响应，否则可能导致系统失效。分时系统追求公平性和响应时间，但无硬性时间约束。",
    tags: [
      "os-intro",
      "rtos",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-15",
    title: "ABI 兼容",
    question: "如果一个二进制可执行文件可以在两个不同的操作系统上直接运行（无需重新编译），说明这两个操作系统具有什么兼容性？",
    options: [
      {
        label: "A",
        text: "API 兼容"
      },
      {
        label: "B",
        text: "ABI 兼容"
      },
      {
        label: "C",
        text: "源码兼容"
      },
      {
        label: "D",
        text: "指令集兼容"
      }
    ],
    answer: "B",
    explanation: "ABI（Application Binary Interface）定义了二进制接口规范（系统调用号、调用约定、可执行文件格式、寄存器使用等）。ABI 兼容意味着二进制程序可直接运行。API 兼容仅保证源码可编译。",
    tags: [
      "os-intro",
      "abi",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-16",
    title: "RAID 5 特性",
    question: "关于 RAID 5，以下说法正确的是？",
    options: [
      {
        label: "A",
        text: "RAID 5 至少需要 2 块磁盘"
      },
      {
        label: "B",
        text: "RAID 5 使用镜像方式实现冗余"
      },
      {
        label: "C",
        text: "RAID 5 使用分布式奇偶校验，能容忍 1 块磁盘故障"
      },
      {
        label: "D",
        text: "RAID 5 与 RAID 0 的冗余能力相同"
      }
    ],
    answer: "C",
    explanation: "RAID 5 使用分布式奇偶校验，至少需要 3 块磁盘，奇偶校验信息分布在所有磁盘上（消除写瓶颈），能容忍 1 块磁盘故障。RAID 0 无冗余，RAID 1 使用镜像。",
    tags: [
      "disk",
      "raid",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-17",
    title: "IPC 性能比较",
    question: "在以下 IPC 方式中，通常哪种方式的数据传输速度最快？",
    options: [
      {
        label: "A",
        text: "管道（Pipe）"
      },
      {
        label: "B",
        text: "消息队列（Message Queue）"
      },
      {
        label: "C",
        text: "共享内存（Shared Memory）"
      },
      {
        label: "D",
        text: "套接字（Socket）"
      }
    ],
    answer: "C",
    explanation: "共享内存是最快的 IPC 方式，因为数据交换不需要内核介入复制——进程直接读写同一块物理内存。其他方式（管道、消息队列、套接字）都需要内核参与数据的复制和传递。",
    tags: [
      "ipc",
      "shared-memory",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-18",
    title: "文件物理结构选择",
    question: "以下哪种文件物理结构最适合大文件的随机访问？",
    options: [
      {
        label: "A",
        text: "连续文件（Contiguous）"
      },
      {
        label: "B",
        text: "链接文件（Linked）"
      },
      {
        label: "C",
        text: "索引文件（Indexed）"
      },
      {
        label: "D",
        text: "以上都不适合"
      }
    ],
    answer: "C",
    explanation: "索引文件通过索引表直接定位到任意数据块，无需遍历链表，随机访问效率高。连续文件在顺序访问时效率最高但不利于随机访问和动态修改。链接文件随机访问需沿链遍历，效率低。",
    tags: [
      "filesystem",
      "file-structure",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fr-19",
    title: "死锁预防策略",
    question: "死锁预防（Deadlock Prevention）的基本思路是什么？",
    options: [
      {
        label: "A",
        text: "允许死锁发生，然后检测并恢复"
      },
      {
        label: "B",
        text: "在运行时动态判断资源分配是否安全"
      },
      {
        label: "C",
        text: "破坏死锁产生的四个必要条件之一或多个"
      },
      {
        label: "D",
        text: "忽略死锁问题，假设它不会发生"
      }
    ],
    answer: "C",
    explanation: "死锁预防通过破坏互斥、占有并等待、不可剥夺、循环等待这四个必要条件之一来防止死锁。例如，一次性分配所有资源破坏“占有并等待”条件，或对资源排序破坏“循环等待”条件。",
    tags: [
      "deadlock",
      "prevention",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fr-20",
    title: "死锁避免的特征",
    question: "关于死锁避免（Deadlock Avoidance），以下说法正确的是？",
    options: [
      {
        label: "A",
        text: "死锁避免是静态策略"
      },
      {
        label: "B",
        text: "银行家算法是死锁避免算法"
      },
      {
        label: "C",
        text: "死锁避免不需要预知进程的最大资源需求"
      },
      {
        label: "D",
        text: "死锁避免通过破坏互斥条件来实现"
      }
    ],
    answer: "B",
    explanation: "死锁避免是动态策略，在系统运行过程中判断每次资源分配是否会导致不安全状态。银行家算法是最经典的死锁避免算法，需要预知每个进程的最大资源需求。死锁避免不破坏必要条件（那是预防的策略）。",
    tags: [
      "deadlock",
      "avoidance",
      "banker",
      "exam"
    ],
    difficulty: "medium"
  }
];
const io = [
  {
    id: "io-device-classify-01",
    title: "块设备与字符设备",
    question: "关于块设备与字符设备的区分，下列说法最准确的是哪一项？",
    options: [
      {
        label: "A",
        text: "块设备以数据块为单位传输，通常可寻址；字符设备以字符为单位传输，通常不可寻址"
      },
      {
        label: "B",
        text: "键盘和鼠标属于块设备"
      },
      {
        label: "C",
        text: "字符设备的传输速率一定高于块设备"
      },
      {
        label: "D",
        text: "块设备只能顺序访问，不能随机访问"
      }
    ],
    answer: "A",
    explanation: "块设备（如磁盘）以数据块为单位，可随机寻址，传输速率较高；字符设备（如键盘、打印机）以字符为单位，通常不可寻址，传输速率较低。",
    tags: [
      "io",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "io-address-mode-01",
    title: "内存映射 I/O 与独立编址",
    question: "关于内存映射 I/O（Memory-Mapped I/O）与 I/O 独立编址，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "内存映射 I/O 的缺点之一是寄存器内容不能被高速缓存，因为设备状态可能从外部变化"
      },
      {
        label: "B",
        text: "I/O 独立编址可以复用原有访存指令，编程更灵活"
      },
      {
        label: "C",
        text: "内存映射 I/O 会占用独立的 I/O 地址空间"
      },
      {
        label: "D",
        text: "两种方式的优缺点完全相同"
      }
    ],
    answer: "A",
    explanation: "内存映射 I/O 将设备寄存器映射到内存地址空间，可以复用访存指令和原有保护机制。但控制寄存器不能缓存，因为设备状态可能从外部独立变化。I/O 独立编址使用专用指令（如 in/out），不占用内存地址空间。",
    tags: [
      "io",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "io-control-pio-01",
    title: "程序控制 I/O",
    question: "程序控制 I/O（PIO）方式的主要特点是什么？",
    options: [
      {
        label: "A",
        text: "CPU 发出 I/O 请求后不断轮询设备状态，直到 I/O 完成"
      },
      {
        label: "B",
        text: "I/O 完成后设备主动发起中断通知 CPU"
      },
      {
        label: "C",
        text: "由 DMA 控制器完成数据传输，CPU 完全不参与"
      },
      {
        label: "D",
        text: "通过通道处理器独立执行通道程序完成 I/O"
      }
    ],
    answer: "A",
    explanation: "PIO 是最简单的 I/O 方式：CPU 发出请求后忙等轮询状态寄存器。优点是实现简单，缺点是 CPU 占用时间很长。",
    tags: [
      "io",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "io-control-dma-01",
    title: "DMA 与中断驱动的区别",
    question: "DMA 方式与中断驱动方式的关键区别是什么？",
    options: [
      {
        label: "A",
        text: "中断方式每传输一个单位数据就发一次中断；DMA 完成一批数据后才发一次中断"
      },
      {
        label: "B",
        text: "DMA 不需要任何硬件支持"
      },
      {
        label: "C",
        text: "中断方式的数据传输不需要 CPU 参与"
      },
      {
        label: "D",
        text: "DMA 只能处理字符设备"
      }
    ],
    answer: "A",
    explanation: "中断方式每个数据单位传输完毕就产生中断，CPU 介入传输；DMA 由 DMA 控制器在后台完成整批数据传输，仅在开始和结束时需要 CPU 干预，适合高速设备。",
    tags: [
      "io",
      "dma",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "io-control-channel-01",
    title: "通道与 DMA 的区别",
    question: "I/O 通道相比 DMA 的进一步改进主要体现在哪里？",
    options: [
      {
        label: "A",
        text: "通道可以执行通道程序，自主完成多组 I/O 操作，进一步减少 CPU 干预"
      },
      {
        label: "B",
        text: "通道比 DMA 更便宜"
      },
      {
        label: "C",
        text: "通道只能控制一台设备"
      },
      {
        label: "D",
        text: "通道不需要任何寄存器"
      }
    ],
    answer: "A",
    explanation: "DMA 像自动化机器，CPU 仍需设置地址、长度等参数；通道像专门负责操作设备的“员工”，CPU 只需准备好通道程序并启动，通道就能按计划完成多组 I/O 操作。一个通道还能控制多种设备。",
    tags: [
      "io",
      "channel",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "io-buffer-single-01",
    title: "单缓冲时间计算",
    question: "在单缓冲系统中，设 T 为设备传输一块数据的时间，C 为 CPU 处理一块数据的时间，M 为内存复制时间。系统处理每块数据的时间是多少？",
    options: [
      {
        label: "A",
        text: "Max(C, T) + M"
      },
      {
        label: "B",
        text: "C + T + M"
      },
      {
        label: "C",
        text: "Max(C + M, T)"
      },
      {
        label: "D",
        text: "Max(C, T + M)"
      }
    ],
    answer: "A",
    explanation: "单缓冲中 C 和 T 可以并行（CPU 处理和设备传输同时进行），但 M 与 T 不能并行（都要访问缓冲区，发生读写冲突），M 与 C 也不能并行（都由 CPU 执行）。因此总时间为 Max(C, T) + M。",
    tags: [
      "io",
      "buffer",
      "calculation",
      "exam"
    ],
    difficulty: "hard"
  },
  {
    id: "io-buffer-double-01",
    title: "双缓冲的优势",
    question: "双缓冲相比单缓冲的主要优势是什么？",
    options: [
      {
        label: "A",
        text: "双缓冲允许 M（内存复制）与 T（设备传输）并行，当 CPU 处理速度与设备速度接近时效果较好"
      },
      {
        label: "B",
        text: "双缓冲完全消除了内存复制开销"
      },
      {
        label: "C",
        text: "双缓冲不再需要缓冲区"
      },
      {
        label: "D",
        text: "双缓冲让设备传输速度变为原来的两倍"
      }
    ],
    answer: "A",
    explanation: "双缓冲设置两个缓冲区交替使用，使得 M 与 C、T 都可以并行，系统处理一块数据的时间约为 Max(M+C, T)。当 CPU 和外设处理速度接近时，可以使两者都连续工作无需等待。",
    tags: [
      "io",
      "buffer",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "io-spooling-01",
    title: "SPOOLing 技术",
    question: "关于 SPOOLing（假脱机）技术，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "SPOOLing 可以将独占设备改造成具有共享特征的虚拟设备"
      },
      {
        label: "B",
        text: "SPOOLing 的井（well）是内存中的一小块区域"
      },
      {
        label: "C",
        text: "SPOOLing 技术不能提高设备利用率"
      },
      {
        label: "D",
        text: "SPOOLing 只能用于输出设备，不能用于输入设备"
      }
    ],
    answer: "A",
    explanation: "SPOOLing 通过输入/输出井（磁盘上的大存储空间）、输入/输出缓冲区和 SP$_i$/SP$_o$ 进程，将独占设备模拟为共享虚拟设备。井在磁盘上而非内存中（内存容量有限且昂贵），同时支持输入和输出。",
    tags: [
      "io",
      "spooling",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "io-model-compare-01",
    title: "I/O 模型对比",
    question: "关于阻塞 I/O、非阻塞 I/O 和异步 I/O，下列说法错误的是？",
    options: [
      {
        label: "A",
        text: "阻塞 I/O 在 I/O 完成前进程被挂起"
      },
      {
        label: "B",
        text: "非阻塞 I/O 在第一阶段立即返回，进程可以继续执行其他操作"
      },
      {
        label: "C",
        text: "异步 I/O 在两个阶段（等待数据 + 拷贝数据）都不会阻塞进程"
      },
      {
        label: "D",
        text: "I/O 多路复用允许同时等待多个 I/O 对象，但第二阶段是非阻塞的"
      }
    ],
    answer: "D",
    explanation: "I/O 多路复用（如 select）第一阶段等待是非阻塞的（可以同时等待多个对象），但第二阶段将数据从内核拷贝到用户空间仍然是阻塞的。异步 I/O 是两个阶段都不阻塞的唯一模型。",
    tags: [
      "io",
      "model",
      "tricky",
      "exam"
    ],
    difficulty: "hard"
  },
  {
    id: "io-device-independence-01",
    title: "设备独立性",
    question: "实现设备独立性的关键机制是什么？",
    options: [
      {
        label: "A",
        text: "通过逻辑设备表（LUT）将逻辑设备名映射为物理设备名"
      },
      {
        label: "B",
        text: "所有设备使用相同的驱动程序"
      },
      {
        label: "C",
        text: "禁止应用程序使用物理设备名"
      },
      {
        label: "D",
        text: "所有设备都使用 DMA 方式"
      }
    ],
    answer: "A",
    explanation: "设备独立性让应用程序只使用逻辑设备名，系统通过逻辑设备表（LUT）将逻辑设备名映射为物理设备名。这样当某设备忙或不可用时，系统可从同类设备中选择其他空闲设备。",
    tags: [
      "io",
      "exam"
    ],
    difficulty: "easy"
  }
];
const disk = [
  {
    id: "disk-structure-01",
    title: "磁盘基本结构",
    question: "关于磁盘的扇区（sector）、磁道（track）和柱面（cylinder），下列说法最准确的是？",
    options: [
      {
        label: "A",
        text: "柱面是所有盘片上相同半径磁道的集合，逻辑块（扇区）是最小传输单位"
      },
      {
        label: "B",
        text: "磁道是扇区的子集"
      },
      {
        label: "C",
        text: "柱面和扇区是同一概念的不同名称"
      },
      {
        label: "D",
        text: "每个磁盘只有一个磁头"
      }
    ],
    answer: "A",
    explanation: "盘片以中心为圆心形成同心圆磁道，磁道被等分为扇区（逻辑块，最小传输单位）。不同盘片相同半径的磁道组成柱面。每个可用盘面对应一个磁头。",
    tags: [
      "disk",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "disk-chs-lba-01",
    title: "CHS 到 LBA 转换",
    question: "已知磁盘参数：柱面号 C、磁头号 H、扇区号 S，每个磁道的扇区数 NS，磁头数 NH。LBA 地址的计算公式是什么？",
    options: [
      {
        label: "A",
        text: "LBA = (C × NH × NS) + (H × NS) + (S - 1)"
      },
      {
        label: "B",
        text: "LBA = C + H + S"
      },
      {
        label: "C",
        text: "LBA = (C × NH) + (H × NS) + S"
      },
      {
        label: "D",
        text: "LBA = C × NS + H × NH + S"
      }
    ],
    answer: "A",
    explanation: "CHS 可看作一个三维数组：先遍历同一柱面下不同磁头的同一位置扇区，再遍历同一柱面下不同扇区，最后切换柱面。因此 LBA = C×(NH×NS) + H×NS + (S-1)。",
    tags: [
      "disk",
      "calculation",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "disk-access-time-01",
    title: "磁盘访问时间",
    question: "磁盘访问时间由哪些组成部分构成？",
    options: [
      {
        label: "A",
        text: "寻道时间 + 旋转延迟时间 + 传输时间"
      },
      {
        label: "B",
        text: "只是寻道时间"
      },
      {
        label: "C",
        text: "只是旋转延迟时间"
      },
      {
        label: "D",
        text: "寻道时间 + 排队等待时间"
      }
    ],
    answer: "A",
    explanation: "磁盘访问时间 = 寻道时间（磁头移动到磁道）+ 旋转延迟（旋转到目标扇区）+ 传输时间（数据读写）。排队等待时间属于磁盘延迟（Response Time），但不属于磁盘访问时间。",
    tags: [
      "disk",
      "performance",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "disk-schedule-scan-01",
    title: "SCAN 与 C-SCAN",
    question: "C-SCAN（循环扫描）算法相比 SCAN 算法的主要改进是什么？",
    options: [
      {
        label: "A",
        text: "磁头只按一个方向提供服务，到达最后一个请求后快速返回起始端，消除了两端磁道的不公平"
      },
      {
        label: "B",
        text: "C-SCAN 总是选择最近的请求先服务"
      },
      {
        label: "C",
        text: "C-SCAN 完全消除了磁头移动"
      },
      {
        label: "D",
        text: "C-SCAN 比 FCFS 更简单"
      }
    ],
    answer: "A",
    explanation: "SCAN 算法双向移动时两端磁道的访问频率低于中间磁道。C-SCAN 只按一个方向服务，到达最后一个请求后快速返回起始端（忽略返回过程），使得各磁道等待时间更均匀。",
    tags: [
      "disk",
      "scheduling",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "disk-schedule-sticky-01",
    title: "磁臂黏着现象",
    question: "“磁臂黏着现象”是指什么？如何缓解？",
    options: [
      {
        label: "A",
        text: "某磁道访问频率过高，垄断磁盘设备；N-Step-SCAN 和 FSCAN 可以缓解"
      },
      {
        label: "B",
        text: "磁头物理损坏无法移动"
      },
      {
        label: "C",
        text: "磁盘转速不稳定"
      },
      {
        label: "D",
        text: "使用 SSTF 算法可以完全避免"
      }
    ],
    answer: "A",
    explanation: "磁臂黏着是指某磁道持续收到大量请求，磁头被“黏”在该磁道附近，导致其他磁道的请求长期得不到服务。N-Step-SCAN（队列间 FCFS，队列内 SCAN）和 FSCAN（2-Step-SCAN）通过划分请求批次来缓解。",
    tags: [
      "disk",
      "scheduling",
      "tricky"
    ],
    difficulty: "medium"
  },
  {
    id: "disk-raid-01",
    title: "RAID 级别对比",
    question: "关于 RAID 0、RAID 1 和 RAID 5，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "RAID 0 通过条带化提高性能但无冗余；RAID 1 通过镜像提供冗余但成本最高；RAID 5 使用分布式奇偶校验，可容忍 1 块磁盘故障"
      },
      {
        label: "B",
        text: "RAID 0 能容忍 1 块磁盘故障"
      },
      {
        label: "C",
        text: "RAID 5 的冗余方式与 RAID 1 完全相同"
      },
      {
        label: "D",
        text: "RAID 1 的空间利用率比 RAID 0 更高"
      }
    ],
    answer: "A",
    explanation: "RAID 0 纯条带化无冗余；RAID 1 镜像存储，空间利用率仅 50% 但安全性高；RAID 5 分布式奇偶校验，至少需 3 块磁盘，可容忍 1 块磁盘故障，在冗余和成本间折中。",
    tags: [
      "disk",
      "raid",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "disk-raid-01-10-01",
    title: "RAID 0+1 与 RAID 1+0",
    question: "RAID 0+1 和 RAID 1+0 的区别是什么？",
    options: [
      {
        label: "A",
        text: "RAID 0+1 先条带化后镜像，RAID 1+0 先镜像后条带化，RAID 1+0 通常具有更好的故障容忍能力"
      },
      {
        label: "B",
        text: "两者完全相同，只是名称不同"
      },
      {
        label: "C",
        text: "RAID 0+1 完全不需要镜像"
      },
      {
        label: "D",
        text: "RAID 1+0 不能容忍任何磁盘故障"
      }
    ],
    answer: "A",
    explanation: "RAID 0+1：先条带化（RAID 0），再对整个条带组做镜像（RAID 1）。RAID 1+0：先组成镜像对（RAID 1），再对镜像对做条带化（RAID 0）。RAID 1+0 在某个镜像对的一块磁盘故障时，只需要恢复该镜像对的数据。",
    tags: [
      "disk",
      "raid",
      "tricky"
    ],
    difficulty: "hard"
  },
  {
    id: "disk-space-mgmt-01",
    title: "磁盘空闲空间管理",
    question: "关于位图、空闲表和成组链接法三种磁盘空闲空间管理方式，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "成组链接法将多个空闲块号放在一组，组内用栈/数组管理，组间用链接串联，登记不占用额外空间"
      },
      {
        label: "B",
        text: "位图法需要为每个空闲块建立一个链表节点"
      },
      {
        label: "C",
        text: "空闲表法用二进制位表示每个盘块的使用情况"
      },
      {
        label: "D",
        text: "三种方法完全等价，没有区别"
      }
    ],
    answer: "A",
    explanation: "位图法使用二进制位表示盘块状态；空闲表法用顺序表记录空闲块区（起始块号+块数）；成组链接法在每组内用数组/栈存储空闲块号，组间用链接串联，且空闲块号登记在空闲块自身中，不占额外空间。",
    tags: [
      "disk",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "disk-cache-01",
    title: "磁盘高速缓存",
    question: "以下哪种方式不属于提高磁盘 I/O 速度的方法？",
    options: [
      {
        label: "A",
        text: "提前读（Read-Ahead）和延迟写（Delayed Write）"
      },
      {
        label: "B",
        text: "设置磁盘高速缓存"
      },
      {
        label: "C",
        text: "优化数据布局使相关数据靠近"
      },
      {
        label: "D",
        text: "增加磁盘转速但不改变调度算法"
      }
    ],
    answer: "D",
    explanation: "笔记中列出的提高 I/O 速度途径包括：选择性能好的磁盘、并行化、采用适当调度算法、设置磁盘高速缓存（含提前读/延迟写）、优化数据布局、虚拟盘（RAM 盘）。只增加转速但不结合调度和缓存等软件手段，效果有限。",
    tags: [
      "disk",
      "performance",
      "tricky"
    ],
    difficulty: "easy"
  },
  {
    id: "disk-flash-01",
    title: "Flash 盘特点",
    question: "Flash 盘与传统 HDD 的关键区别是什么？",
    options: [
      {
        label: "A",
        text: "Flash 盘无机械结构，写入前需要擦除，且有擦写寿命限制"
      },
      {
        label: "B",
        text: "Flash 盘的寻道时间比 HDD 长"
      },
      {
        label: "C",
        text: "Flash 盘遵循 CHS 编址模式"
      },
      {
        label: "D",
        text: "Flash 盘不需要磨损均衡"
      }
    ],
    answer: "A",
    explanation: "Flash 盘（SSD）无机械寻道和旋转延迟；但写入前需先擦除，有擦写寿命限制，因此需要磨损均衡（wear leveling）技术来延长整体寿命。",
    tags: [
      "disk",
      "flash",
      "exam"
    ],
    difficulty: "easy"
  }
];
const filesystem = [
  {
    id: "fs-concept-01",
    title: "文件的本质",
    question: "Unix 的“一切皆文件”设计思想意味着什么？",
    options: [
      {
        label: "A",
        text: "文件是一组字节序列，常规文件、目录、I/O 设备、管道等都可以被视为文件并通过统一接口操作"
      },
      {
        label: "B",
        text: "所有文件必须存储在磁盘上"
      },
      {
        label: "C",
        text: "文件系统只能管理文本文件"
      },
      {
        label: "D",
        text: "每个文件都必须有独立的物理设备"
      }
    ],
    answer: "A",
    explanation: "Unix 将文件抽象为一组带标识的字节序列。常规文件、目录（也是一种文件）、I/O 设备、管道等都可以通过统一的 open/read/write/close 接口操作，极大简化了编程模型。",
    tags: [
      "filesystem",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fs-physical-contiguous-01",
    title: "连续文件结构",
    question: "关于文件的连续（顺序）物理结构，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "文件在磁盘上连续存放，顺序和随机存取效率都很高，但不利于动态扩展"
      },
      {
        label: "B",
        text: "使用链接字指向下一块的物理地址"
      },
      {
        label: "C",
        text: "通过索引表实现逻辑块号到物理块号的映射"
      },
      {
        label: "D",
        text: "每个磁盘块都包含一个指向下一块的指针"
      }
    ],
    answer: "A",
    explanation: "连续结构将文件在磁盘上连续存放，存取第 i 块只需起始块号 + i，顺序和随机存取效率都很高。但文件长度不易改变，不利于动态增删，容易产生磁盘碎片。",
    tags: [
      "filesystem",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fs-physical-compare-01",
    title: "三种物理结构对比",
    question: "对于需要频繁随机访问的大文件，最适合的文件物理结构是哪种？",
    options: [
      {
        label: "A",
        text: "连续结构"
      },
      {
        label: "B",
        text: "链接结构"
      },
      {
        label: "C",
        text: "索引结构"
      },
      {
        label: "D",
        text: "以上都不适合"
      }
    ],
    answer: "C",
    explanation: "索引结构通过索引表直接定位任意数据块，不需遍历链表，随机访问效率最高。连续结构适合顺序访问，链接结构随机访问需沿链表遍历效率低。",
    tags: [
      "filesystem",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fs-index-calc-01",
    title: "索引节点最大文件计算",
    question: "某文件系统的 inode 中设有 10 个直接索引、1 个一次间接索引、1 个二次间接索引。文件块大小为 s 字节，块号占用 t 字节。该文件系统支持的最大文件大小是多少？",
    options: [
      {
        label: "A",
        text: "[10 + (s/t) + (s/t)²] × s 字节"
      },
      {
        label: "B",
        text: "(10 + s + s²) × t 字节"
      },
      {
        label: "C",
        text: "10 × s 字节"
      },
      {
        label: "D",
        text: "[(s/t) + (s/t)²] × s 字节"
      }
    ],
    answer: "A",
    explanation: "直接索引：10 块。一次间接索引：一个数据块存 s/t 个块号，指向 s/t 个数据块。二次间接索引：一个数据块存 s/t 个一级索引块号，每个一级索引块又指向 s/t 个数据块，共 (s/t)² 个数据块。最大文件 = [10 + s/t + (s/t)²] × s 字节。",
    tags: [
      "filesystem",
      "inode",
      "calculation",
      "exam"
    ],
    difficulty: "hard"
  },
  {
    id: "fs-hardlink-01",
    title: "硬链接与软链接",
    question: "关于硬链接和软链接（符号链接），下列说法错误的是？",
    options: [
      {
        label: "A",
        text: "硬链接指向同一个 inode，不能跨文件系统；软链接存储目标路径，可以跨文件系统"
      },
      {
        label: "B",
        text: "删除源文件后，软链接会失效"
      },
      {
        label: "C",
        text: "硬链接可以链接目录"
      },
      {
        label: "D",
        text: "软链接本身是一个独立的特殊文件"
      }
    ],
    answer: "C",
    explanation: "硬链接通常不能链接目录（防止形成循环目录结构），只能链接文件。软链接可以链接目录。A、B、D 均正确：硬链接共享同一 inode 且受限于同一文件系统；软链接存储路径字符串，删源文件后失效。",
    tags: [
      "filesystem",
      "link",
      "tricky",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fs-directory-01",
    title: "目录结构",
    question: "关于单级目录和多级目录，下列说法正确的是？",
    options: [
      {
        label: "A",
        text: "单级目录结构简单但存在命名冲突；多级目录层次清晰、可解决重名问题，但路径过深会增加检索时间"
      },
      {
        label: "B",
        text: "单级目录比多级目录更便于文件共享"
      },
      {
        label: "C",
        text: "多级目录一定能加快所有文件的查找速度"
      },
      {
        label: "D",
        text: "单级目录不存在任何缺点"
      }
    ],
    answer: "A",
    explanation: "单级目录结构简单，但文件多时检索慢、有命名冲突、不便于共享。多级目录层次清晰，每级只查找一个子集，但目录级别太多时路径检索时间增加。二者各有适用场景。",
    tags: [
      "filesystem",
      "directory",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fs-fat-01",
    title: "FAT 文件系统",
    question: "FAT 文件系统的本质是什么？",
    options: [
      {
        label: "A",
        text: "将链接指针集中存放在 FAT 表中的链接分配方式"
      },
      {
        label: "B",
        text: "使用 inode 和多级间接索引的文件系统"
      },
      {
        label: "C",
        text: "基于日志结构的文件系统"
      },
      {
        label: "D",
        text: "纯连续分配的文件系统"
      }
    ],
    answer: "A",
    explanation: "FAT（File Allocation Table）将链接指针从数据块中提取出来集中存放。目录项记录起始簇号，FAT 表项记录下一簇位置。本质仍然是链接分配，但集中存储使 FAT 可以常驻内存，提高了查找效率。",
    tags: [
      "filesystem",
      "fat",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fs-ext2-01",
    title: "Ext2 块组设计",
    question: "Ext2 将磁盘划分为多个块组（block group）的主要目的是什么？",
    options: [
      {
        label: "A",
        text: "让 inode 和文件数据块尽量靠近，减少寻道距离"
      },
      {
        label: "B",
        text: "每个块组只能存放一种类型的文件"
      },
      {
        label: "C",
        text: "减少磁盘总容量"
      },
      {
        label: "D",
        text: "取消 inode 位图"
      }
    ],
    answer: "A",
    explanation: "Ext2 将磁盘划分为块组，每个块组包含各自的 inode 表、数据块位图、inode 位图和数据块。目的是将 inode 和相关数据块放在邻近物理位置，减少磁头寻道距离，提高访问性能。",
    tags: [
      "filesystem",
      "ext2",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fs-lfs-01",
    title: "LFS 日志结构文件系统",
    question: "LFS（Log-Structured File System）的核心设计思想是什么？",
    options: [
      {
        label: "A",
        text: "把大量零散随机写合并为一次较大的顺序写，以 segment 为单位追加到磁盘末尾"
      },
      {
        label: "B",
        text: "所有写入都先写入内存，然后批量回写"
      },
      {
        label: "C",
        text: "使用更大的磁盘块提高传输效率"
      },
      {
        label: "D",
        text: "将所有文件数据加密存储"
      }
    ],
    answer: "A",
    explanation: "LFS 的核心思想是变随机写为顺序写：修改内容先缓存在 segment 中，满后整体顺序追加到磁盘末尾，不覆盖旧版本。通过 imap 定位最新 inode 位置，旧 segment 由 cleaner 进行垃圾回收。",
    tags: [
      "filesystem",
      "lfs",
      "exam"
    ],
    difficulty: "medium"
  },
  {
    id: "fs-consistency-01",
    title: "文件系统一致性",
    question: "文件系统一致性检查通常关注哪些方面？",
    options: [
      {
        label: "A",
        text: "磁盘块一致性（块在文件中和空闲队列中出现次数应一致）和文件一致性（inode 引用次数与目录引用次数应一致）"
      },
      {
        label: "B",
        text: "只检查文件名是否合法"
      },
      {
        label: "C",
        text: "只检查磁盘是否有坏道"
      },
      {
        label: "D",
        text: "只检查用户权限设置"
      }
    ],
    answer: "A",
    explanation: "文件系统一致性检查有两个维度：(1) 磁盘块一致性——每块在文件中的出现次数应与空闲队列中出现次数一致；(2) 文件一致性——inode 被引用次数应与目录中引用该文件的次数一致。",
    tags: [
      "filesystem",
      "consistency",
      "exam"
    ],
    difficulty: "easy"
  },
  {
    id: "fs-access-step-01",
    title: "索引文件访问步骤",
    question: "在 Linux 下读取 /tmp/hello 文件，已知根目录 inode 已在内存中。正确的访问步骤顺序是什么？",
    options: [
      {
        label: "A",
        text: "读根目录内容获取 tmp 的 inode → 读 tmp 的 inode → 读 tmp 目录获取 hello 的 inode → 读 hello 的 inode → 读 hello 数据"
      },
      {
        label: "B",
        text: "直接读取 /tmp/hello 的文件内容"
      },
      {
        label: "C",
        text: "先读 hello 的数据，再找到它的 inode"
      },
      {
        label: "D",
        text: "只需要一步就能完成，因为根目录 inode 已在内存"
      }
    ],
    answer: "A",
    explanation: "文件访问需要沿路径逐级解析：根目录内容 → tmp 的 inode 所在块 → tmp 的 inode → tmp 目录内容 → hello 的 inode 所在块 → hello 的 inode → hello 数据块。每一步都可能涉及磁盘 I/O。",
    tags: [
      "filesystem",
      "index",
      "exam"
    ],
    difficulty: "medium"
  }
];
const quizCollections = {
  boot,
  memory,
  process,
  sync,
  "final-review": finalReview,
  io,
  disk,
  filesystem
};
const _hoisted_1$6 = { class: "progress" };
const _hoisted_2$5 = { class: "progress__stats" };
const _hoisted_3$5 = { class: "progress__stat" };
const _hoisted_4$2 = { class: "progress__stat" };
const _hoisted_5$2 = { class: "progress__stat" };
const _hoisted_6$2 = { class: "progress__stat" };
const _hoisted_7$2 = { class: "progress__focus" };
const _hoisted_8$2 = { class: "progress__panel progress__panel--focus" };
const _hoisted_9$2 = ["href"];
const _hoisted_10$2 = { key: 1 };
const _hoisted_11$1 = { class: "progress__panel" };
const _hoisted_12$1 = {
  class: "progress__bar",
  "aria-hidden": "true"
};
const _hoisted_13$1 = { class: "progress__panel" };
const _hoisted_14$1 = { key: 0 };
const _hoisted_15$1 = ["href"];
const _hoisted_16 = { class: "progress__panel" };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "progress__wrong-head" };
const _hoisted_19 = { class: "progress__wrong-question" };
const _hoisted_20 = {
  key: 0,
  class: "progress__wrong-options"
};
const _hoisted_21 = { class: "progress__wrong-answer" };
const _hoisted_22 = {
  key: 1,
  class: "progress__wrong-explanation"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProgressDashboard",
  setup(__props) {
    const readPages = ref([]);
    const doneQuestions = ref([]);
    const wrongQuestions = ref([]);
    const utilityPageUrls = /* @__PURE__ */ new Set(["/", "/progress", "/knowledge-map", "/resources"]);
    const utilityPagePrefixes = ["/exams/"];
    const studySections = [
      { label: "OS Boot", prefix: "/OS Boot/" },
      { label: "内存管理", prefix: "/内存管理/" },
      { label: "进程与线程", prefix: "/进程与线程/" }
    ];
    const notePages = computed(() => data.filter((page) => !utilityPageUrls.has(page.url) && !utilityPagePrefixes.some((prefix) => page.url.startsWith(prefix))));
    const readPageKeys = computed(() => new Set(readPages.value.map((page) => page.path.replace(/\/$/, ""))));
    const sortedReadPages = computed(() => [...readPages.value].sort((a, b) => b.readAt - a.readAt));
    const readRate = computed(() => {
      if (!notePages.value.length) return 0;
      const count = notePages.value.filter((page) => readPageKeys.value.has(page.url.replace(/\/$/, ""))).length;
      return Math.round(count / notePages.value.length * 100);
    });
    const nextPage = computed(() => notePages.value.find((page) => !readPageKeys.value.has(page.url.replace(/\/$/, ""))));
    const sectionCoverage = computed(() => studySections.map((section) => {
      const sectionPages = notePages.value.filter((page) => page.url.startsWith(section.prefix));
      const read = sectionPages.filter((page) => readPageKeys.value.has(page.url.replace(/\/$/, ""))).length;
      const total = sectionPages.length;
      return {
        ...section,
        read,
        total,
        rate: total ? Math.round(read / total * 100) : 0
      };
    }).filter((section) => section.total));
    const wrongQuestionViews = computed(() => wrongQuestions.value.map((record) => {
      const bankQuestion = findBankQuestion(record);
      return {
        record,
        title: (bankQuestion == null ? void 0 : bankQuestion.title) || record.title,
        question: record.question || (bankQuestion == null ? void 0 : bankQuestion.question) || record.title,
        options: record.options || (bankQuestion == null ? void 0 : bankQuestion.options) || [],
        explanation: record.explanation || (bankQuestion == null ? void 0 : bankQuestion.explanation) || ""
      };
    }));
    function findBankQuestion(record) {
      const collection = quizCollections[record.collection];
      if (!collection) return void 0;
      const quizIdPrefix = `quiz:${record.collection}:`;
      const questionId = record.id.startsWith(quizIdPrefix) ? record.id.slice(quizIdPrefix.length) : record.id;
      return collection.find((question) => question.id === questionId);
    }
    function isSelectedOption(record, label) {
      return splitLabels(record.selected).includes(label);
    }
    function isAnswerOption(record, label) {
      return splitLabels(record.answer).includes(label);
    }
    function splitLabels(value) {
      return value.split(/[、,，\s]+/).map((item) => item.trim()).filter(Boolean);
    }
    function displayValue(value) {
      return (value == null ? void 0 : value.trim()) || "未作答";
    }
    function refresh() {
      readPages.value = getReadPages();
      doneQuestions.value = getDoneQuestionIds();
      wrongQuestions.value = getWrongQuestions();
    }
    function reset() {
      clearLearningProgress();
      refresh();
    }
    function formatTime(timestamp) {
      return new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(timestamp);
    }
    onMounted(refresh);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("article", _hoisted_3$5, [
            _cache[0] || (_cache[0] = createBaseVNode("span", null, "已读页面", -1)),
            createBaseVNode("strong", null, toDisplayString(readPages.value.length), 1)
          ]),
          createBaseVNode("article", _hoisted_4$2, [
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "阅读覆盖", -1)),
            createBaseVNode("strong", null, toDisplayString(readRate.value) + "%", 1)
          ]),
          createBaseVNode("article", _hoisted_5$2, [
            _cache[2] || (_cache[2] = createBaseVNode("span", null, "已做题目", -1)),
            createBaseVNode("strong", null, toDisplayString(doneQuestions.value.length), 1)
          ]),
          createBaseVNode("article", _hoisted_6$2, [
            _cache[3] || (_cache[3] = createBaseVNode("span", null, "错题记录", -1)),
            createBaseVNode("strong", null, toDisplayString(wrongQuestions.value.length), 1)
          ])
        ]),
        createBaseVNode("div", { class: "progress__actions" }, [
          createBaseVNode("button", {
            type: "button",
            onClick: refresh
          }, "刷新进度"),
          createBaseVNode("button", {
            type: "button",
            class: "is-danger",
            onClick: reset
          }, "清空本地进度")
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("section", _hoisted_8$2, [
            _cache[5] || (_cache[5] = createBaseVNode("h2", null, "继续学习", -1)),
            nextPage.value ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "progress__continue",
              href: nextPage.value.url
            }, [
              _cache[4] || (_cache[4] = createBaseVNode("span", null, "下一篇", -1)),
              createBaseVNode("strong", null, toDisplayString(nextPage.value.title), 1)
            ], 8, _hoisted_9$2)) : (openBlock(), createElementBlock("p", _hoisted_10$2, "当前笔记页面已经全部阅读过，可以回到错题记录做复盘。"))
          ]),
          createBaseVNode("section", _hoisted_11$1, [
            _cache[6] || (_cache[6] = createBaseVNode("h2", null, "章节覆盖", -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(sectionCoverage.value, (section) => {
              return openBlock(), createElementBlock("div", {
                key: section.prefix,
                class: "progress__coverage"
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("strong", null, toDisplayString(section.label), 1),
                  createBaseVNode("span", null, toDisplayString(section.read) + " / " + toDisplayString(section.total), 1)
                ]),
                createBaseVNode("div", _hoisted_12$1, [
                  createBaseVNode("span", {
                    style: normalizeStyle({ width: `${section.rate}%` })
                  }, null, 4)
                ])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("section", _hoisted_13$1, [
          _cache[7] || (_cache[7] = createBaseVNode("h2", null, "最近阅读", -1)),
          !readPages.value.length ? (openBlock(), createElementBlock("p", _hoisted_14$1, "还没有阅读记录。打开任意笔记页面停留片刻后会自动记录。")) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(sortedReadPages.value.slice(0, 10), (page) => {
            return openBlock(), createElementBlock("a", {
              key: page.path,
              href: page.path,
              class: "progress__row"
            }, [
              createBaseVNode("strong", null, toDisplayString(page.title), 1),
              createBaseVNode("span", null, toDisplayString(formatTime(page.readAt)), 1)
            ], 8, _hoisted_15$1);
          }), 128))
        ]),
        createBaseVNode("section", _hoisted_16, [
          _cache[8] || (_cache[8] = createBaseVNode("h2", null, "错题记录", -1)),
          !wrongQuestions.value.length ? (openBlock(), createElementBlock("p", _hoisted_17, "暂无错题。答错客观题，或把主观题自主判为错误后，会出现在这里。")) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(wrongQuestionViews.value, (item) => {
            return openBlock(), createElementBlock("article", {
              key: item.record.id,
              class: "progress__wrong"
            }, [
              createBaseVNode("header", _hoisted_18, [
                createBaseVNode("strong", null, toDisplayString(item.title), 1),
                createBaseVNode("span", null, toDisplayString(formatTime(item.record.at)), 1)
              ]),
              createBaseVNode("p", _hoisted_19, toDisplayString(item.question), 1),
              item.options.length ? (openBlock(), createElementBlock("div", _hoisted_20, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                  return openBlock(), createElementBlock("div", {
                    key: option.label,
                    class: normalizeClass(["progress__wrong-option", {
                      "is-answer": isAnswerOption(item.record, option.label),
                      "is-selected": isSelectedOption(item.record, option.label)
                    }])
                  }, [
                    createBaseVNode("strong", null, toDisplayString(option.label), 1),
                    createBaseVNode("span", null, toDisplayString(option.text), 1)
                  ], 2);
                }), 128))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("span", null, "你的答案：" + toDisplayString(displayValue(item.record.selected)), 1),
                createBaseVNode("span", null, "标准答案：" + toDisplayString(displayValue(item.record.answer)), 1)
              ]),
              item.explanation ? (openBlock(), createElementBlock("p", _hoisted_22, " 解析：" + toDisplayString(item.explanation), 1)) : createCommentVNode("", true)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const ProgressDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-05bba940"]]);
const _hoisted_1$5 = { class: "quiz study-card" };
const _hoisted_2$4 = { class: "quiz__header" };
const _hoisted_3$4 = {
  key: 0,
  class: "quiz__count"
};
const _hoisted_4$1 = {
  key: 0,
  class: "quiz__question"
};
const _hoisted_5$1 = {
  key: 1,
  class: "quiz__empty"
};
const _hoisted_6$1 = {
  key: 2,
  class: "quiz__options"
};
const _hoisted_7$1 = ["aria-pressed", "onClick"];
const _hoisted_8$1 = {
  key: 3,
  class: "quiz__footer"
};
const _hoisted_9$1 = ["disabled"];
const _hoisted_10$1 = ["disabled"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Quiz",
  props: {
    collection: { default: "memory" },
    questionId: {},
    title: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const selected = ref("");
    const checked = ref(false);
    const currentIndex = ref(0);
    const sourceQuestions = computed(() => {
      var _a;
      if ((_a = props.items) == null ? void 0 : _a.length) return props.items;
      return quizCollections[props.collection] || [];
    });
    const questions = computed(() => {
      if (!props.questionId) return sourceQuestions.value;
      return sourceQuestions.value.filter((question) => question.id === props.questionId);
    });
    const current = computed(() => questions.value[currentIndex.value]);
    const isCorrect = computed(() => {
      var _a;
      return checked.value && selected.value === ((_a = current.value) == null ? void 0 : _a.answer);
    });
    const hasNext = computed(() => currentIndex.value < questions.value.length - 1);
    function resetAnswer() {
      selected.value = "";
      checked.value = false;
    }
    function choose(label) {
      selected.value = label;
    }
    function submit() {
      if (!current.value || !selected.value) return;
      checked.value = true;
      recordQuestion({
        id: `quiz:${props.collection}:${current.value.id}`,
        type: "single",
        collection: props.collection,
        title: current.value.title,
        question: current.value.question,
        options: current.value.options,
        explanation: current.value.explanation,
        selected: selected.value,
        answer: current.value.answer,
        correct: selected.value === current.value.answer,
        at: Date.now()
      });
    }
    function nextQuestion() {
      if (!hasNext.value) return;
      currentIndex.value += 1;
      resetAnswer();
    }
    watch(() => [props.collection, props.questionId], () => {
      currentIndex.value = 0;
      resetAnswer();
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("section", _hoisted_1$5, [
        createBaseVNode("header", _hoisted_2$4, [
          createBaseVNode("div", null, [
            _cache[0] || (_cache[0] = createBaseVNode("p", { class: "quiz__eyebrow" }, "Single Choice", -1)),
            createBaseVNode("h3", null, toDisplayString(__props.title || ((_a = current.value) == null ? void 0 : _a.title) || "单选题"), 1)
          ]),
          questions.value.length > 1 ? (openBlock(), createElementBlock("span", _hoisted_3$4, toDisplayString(currentIndex.value + 1) + " / " + toDisplayString(questions.value.length), 1)) : createCommentVNode("", true)
        ]),
        current.value ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(current.value.question), 1)) : (openBlock(), createElementBlock("p", _hoisted_5$1, "当前题库为空，请检查 collection 或 questionId。")),
        current.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(current.value.options, (option) => {
            return openBlock(), createElementBlock("button", {
              key: option.label,
              class: normalizeClass(["quiz__option", {
                "is-selected": selected.value === option.label,
                "is-correct": checked.value && option.label === current.value.answer,
                "is-wrong": checked.value && selected.value === option.label && selected.value !== current.value.answer
              }]),
              type: "button",
              "aria-pressed": selected.value === option.label,
              onClick: ($event) => choose(option.label)
            }, [
              createBaseVNode("strong", null, toDisplayString(option.label), 1),
              createBaseVNode("span", null, toDisplayString(option.text), 1)
            ], 10, _hoisted_7$1);
          }), 128))
        ])) : createCommentVNode("", true),
        current.value ? (openBlock(), createElementBlock("footer", _hoisted_8$1, [
          createBaseVNode("button", {
            class: "quiz__submit",
            type: "button",
            disabled: !selected.value,
            onClick: submit
          }, toDisplayString(checked.value ? "再次提交答案" : "提交答案"), 9, _hoisted_9$1),
          hasNext.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "quiz__next",
            type: "button",
            disabled: !checked.value,
            onClick: nextQuestion
          }, " 下一题 ", 8, _hoisted_10$1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        checked.value && current.value ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass(["quiz__result", { "is-correct": isCorrect.value }])
        }, [
          createBaseVNode("strong", null, toDisplayString(isCorrect.value ? "回答正确" : `回答错误，正确答案是 ${current.value.answer}`), 1),
          createBaseVNode("p", null, toDisplayString(current.value.explanation), 1)
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const Quiz = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-67f0a1ce"]]);
const _hoisted_1$4 = { class: "quiz-set study-card" };
const _hoisted_2$3 = { class: "quiz-set__header" };
const _hoisted_3$3 = {
  key: 0,
  class: "quiz-set__description"
};
const _hoisted_4 = ["aria-expanded"];
const _hoisted_5 = { class: "quiz-set__meta" };
const _hoisted_6 = {
  class: "quiz-set__bar",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  key: 0,
  class: "quiz-set__empty"
};
const _hoisted_8 = {
  key: 1,
  class: "quiz-set__body"
};
const _hoisted_9 = { class: "quiz-set__count" };
const _hoisted_10 = { class: "quiz-set__question" };
const _hoisted_11 = { class: "quiz-set__options" };
const _hoisted_12 = ["aria-pressed", "onClick"];
const _hoisted_13 = { class: "quiz-set__footer" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = ["disabled"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "QuizSet",
  props: {
    collection: { default: "memory" },
    questionIds: {},
    title: { default: "本节练习" },
    description: {},
    initiallyOpen: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const open = ref(props.initiallyOpen);
    const selected = ref("");
    const checked = ref(false);
    const currentIndex = ref(0);
    const questions = computed(() => {
      var _a;
      const source = quizCollections[props.collection] || [];
      if (!((_a = props.questionIds) == null ? void 0 : _a.length)) return source;
      const byId = new Map(source.map((question) => [question.id, question]));
      return props.questionIds.map((id) => byId.get(id)).filter((question) => Boolean(question));
    });
    const current = computed(() => questions.value[currentIndex.value]);
    const hasNext = computed(() => currentIndex.value < questions.value.length - 1);
    const isCorrect = computed(() => {
      var _a;
      return checked.value && selected.value === ((_a = current.value) == null ? void 0 : _a.answer);
    });
    const answeredCount = computed(() => checked.value ? currentIndex.value + 1 : currentIndex.value);
    const completionRate = computed(() => {
      if (!questions.value.length) return 0;
      return Math.round(answeredCount.value / questions.value.length * 100);
    });
    function resetAnswer() {
      selected.value = "";
      checked.value = false;
    }
    function choose(label) {
      selected.value = label;
    }
    function submit() {
      if (!current.value || !selected.value) return;
      checked.value = true;
      recordQuestion({
        id: `quiz:${props.collection}:${current.value.id}`,
        type: "single",
        collection: props.collection,
        title: current.value.title,
        question: current.value.question,
        options: current.value.options,
        explanation: current.value.explanation,
        selected: selected.value,
        answer: current.value.answer,
        correct: selected.value === current.value.answer,
        at: Date.now()
      });
    }
    function nextQuestion() {
      if (!hasNext.value) return;
      currentIndex.value += 1;
      resetAnswer();
    }
    watch(() => {
      var _a;
      return [props.collection, (_a = props.questionIds) == null ? void 0 : _a.join("|")];
    }, () => {
      currentIndex.value = 0;
      resetAnswer();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$4, [
        createBaseVNode("header", _hoisted_2$3, [
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("p", { class: "quiz-set__eyebrow" }, "Practice Set", -1)),
            createBaseVNode("h3", null, toDisplayString(__props.title), 1),
            __props.description ? (openBlock(), createElementBlock("p", _hoisted_3$3, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("button", {
            class: "quiz-set__toggle",
            type: "button",
            "aria-expanded": open.value,
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
          }, toDisplayString(open.value ? "收起练习" : "开始练习"), 9, _hoisted_4)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("span", null, toDisplayString(answeredCount.value) + " / " + toDisplayString(questions.value.length), 1),
          createBaseVNode("span", null, toDisplayString(completionRate.value) + "%", 1)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("span", {
            style: normalizeStyle({ width: `${completionRate.value}%` })
          }, null, 4)
        ]),
        !questions.value.length ? (openBlock(), createElementBlock("p", _hoisted_7, "当前题组为空，请检查 collection 或 question-ids。")) : open.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("p", _hoisted_9, "第 " + toDisplayString(currentIndex.value + 1) + " 题，共 " + toDisplayString(questions.value.length) + " 题", 1),
          createBaseVNode("p", _hoisted_10, toDisplayString(current.value.question), 1),
          createBaseVNode("div", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(current.value.options, (option) => {
              return openBlock(), createElementBlock("button", {
                key: option.label,
                class: normalizeClass(["quiz-set__option", {
                  "is-selected": selected.value === option.label,
                  "is-correct": checked.value && option.label === current.value.answer,
                  "is-wrong": checked.value && selected.value === option.label && selected.value !== current.value.answer
                }]),
                type: "button",
                "aria-pressed": selected.value === option.label,
                onClick: ($event) => choose(option.label)
              }, [
                createBaseVNode("strong", null, toDisplayString(option.label), 1),
                createBaseVNode("span", null, toDisplayString(option.text), 1)
              ], 10, _hoisted_12);
            }), 128))
          ]),
          createBaseVNode("footer", _hoisted_13, [
            createBaseVNode("button", {
              class: "quiz-set__submit",
              type: "button",
              disabled: !selected.value,
              onClick: submit
            }, toDisplayString(checked.value ? "再次提交答案" : "提交答案"), 9, _hoisted_14),
            hasNext.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "quiz-set__next",
              type: "button",
              disabled: !checked.value,
              onClick: nextQuestion
            }, " 下一题 ", 8, _hoisted_15)) : createCommentVNode("", true)
          ]),
          checked.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["quiz-set__result", { "is-correct": isCorrect.value }])
          }, [
            createBaseVNode("strong", null, toDisplayString(isCorrect.value ? "回答正确" : `回答错误，正确答案是 ${current.value.answer}`), 1),
            createBaseVNode("p", null, toDisplayString(current.value.explanation), 1)
          ], 2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const QuizSet = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-11af5fb2"]]);
const _hoisted_1$3 = { class: "reveal" };
const _hoisted_2$2 = ["aria-expanded"];
const _hoisted_3$2 = {
  key: 0,
  class: "reveal__content"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Reveal",
  props: {
    title: { default: "答案与解析" },
    openText: { default: "展开" },
    closeText: { default: "收起" }
  },
  setup(__props) {
    const open = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$3, [
        createBaseVNode("button", {
          class: "reveal__button",
          type: "button",
          "aria-expanded": open.value,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", null, toDisplayString(__props.title), 1),
          createBaseVNode("strong", null, toDisplayString(open.value ? __props.closeText : __props.openText), 1)
        ], 8, _hoisted_2$2),
        open.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Reveal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ce912947"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "doc-meta"
};
const _hoisted_2$1 = {
  key: 0,
  class: "doc-meta__item"
};
const _hoisted_3$1 = {
  key: 1,
  class: "doc-meta__item"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocMeta",
  setup(__props) {
    const { frontmatter } = useData$1();
    const difficulty = computed(() => frontmatter.value.difficulty);
    const review = computed(() => frontmatter.value.review);
    return (_ctx, _cache) => {
      return difficulty.value || review.value ? (openBlock(), createElementBlock("section", _hoisted_1$2, [
        difficulty.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "doc-meta__label" }, "Difficulty", -1)),
          createBaseVNode("span", null, toDisplayString(difficulty.value), 1)
        ])) : createCommentVNode("", true),
        review.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "doc-meta__label" }, "Review", -1)),
          createBaseVNode("span", null, toDisplayString(review.value), 1)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = {
  hidden: "",
  "aria-hidden": "true"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressClient",
  setup(__props) {
    const route = useRoute();
    const { frontmatter, page } = useData$1();
    let timer;
    function scheduleReadMark() {
      if (typeof window === "undefined") return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const title = frontmatter.value.title || page.value.title || decodeURIComponent(route.path);
        const rawTags = frontmatter.value.tags;
        const tags = Array.isArray(rawTags) ? rawTags : rawTags ? String(rawTags).split(",") : [];
        markPageRead({
          path: route.path,
          title,
          tags: tags.map((tag) => String(tag).trim()).filter(Boolean),
          readAt: Date.now()
        });
      }, 1200);
    }
    onMounted(() => {
      watch(() => route.path, scheduleReadMark, { immediate: true });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$1);
    };
  }
});
const _hoisted_1 = ["title"];
const _hoisted_2 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none"
};
const _hoisted_3 = {
  key: 0,
  x: "1.5",
  y: "7",
  width: "10",
  height: "1.5",
  rx: "0.75",
  fill: "currentColor"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { Layout: Layout2 } = theme;
    const sidebarCollapsed = ref(false);
    onMounted(() => {
      const saved = localStorage.getItem("os-sidebar-collapsed");
      if (saved === "true") {
        sidebarCollapsed.value = true;
        document.documentElement.classList.add("os-sidebar-collapsed");
      }
    });
    function toggleSidebar() {
      sidebarCollapsed.value = !sidebarCollapsed.value;
      localStorage.setItem("os-sidebar-collapsed", String(sidebarCollapsed.value));
      document.documentElement.classList.toggle("os-sidebar-collapsed", sidebarCollapsed.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout2), null, {
        "nav-bar-content-before": withCtx(() => [
          createBaseVNode("button", {
            class: "os-sidebar-toggle",
            onClick: toggleSidebar,
            title: sidebarCollapsed.value ? "展开边栏" : "收起边栏"
          }, [
            (openBlock(), createElementBlock("svg", _hoisted_2, [
              _cache[0] || (_cache[0] = createBaseVNode("rect", {
                x: "1.5",
                y: "2.5",
                width: "13",
                height: "1.5",
                rx: "0.75",
                fill: "currentColor"
              }, null, -1)),
              !sidebarCollapsed.value ? (openBlock(), createElementBlock("rect", _hoisted_3)) : createCommentVNode("", true),
              _cache[1] || (_cache[1] = createBaseVNode("rect", {
                x: "1.5",
                y: "11.5",
                width: "13",
                height: "1.5",
                rx: "0.75",
                fill: "currentColor"
              }, null, -1))
            ]))
          ], 8, _hoisted_1)
        ]),
        "doc-before": withCtx(() => [
          createVNode(_sfc_main$1),
          createVNode(_sfc_main$2)
        ]),
        _: 1
      });
    };
  }
});
const RawTheme = {
  extends: theme,
  Layout: _sfc_main,
  enhanceApp({ app }) {
    app.component("Quiz", Quiz);
    app.component("QuizSet", QuizSet);
    app.component("FillBlank", FillBlank);
    app.component("MultiFillBlank", MultiFillBlank);
    app.component("Reveal", Reveal);
    app.component("CompareCard", CompareCard);
    app.component("AdditionReviewPaper", AdditionReviewPaper);
    app.component("ExamPaper", ExamPaper);
    app.component("ExamPaper2024", ExamPaper2024);
    app.component("ExamPaper2025Final", ExamPaper2025Final);
    app.component("ProgressDashboard", ProgressDashboard);
    app.component("Mermaid", Mermaid);
  }
};
export {
  RawTheme as R,
  createSearchTranslate as c,
  useData as u
};
