import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const _imports_0 = "/OS/assets/image-20260609175014500.BvTozt1a.png";
const _imports_1 = "/OS/assets/image-20260610073727751.Bp7b7dGo.png";
const _imports_2 = "/OS/assets/image-20260610074546284.B1aKQVgM.png";
const _imports_3 = "/OS/assets/image-20260610075411663.igEtBp9i.png";
const _imports_4 = "/OS/assets/image-20260610081652489.BBv3WEZc.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"IO管理/5_4 IO缓冲管理.md","filePath":"IO管理/5_4 IO缓冲管理.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "IO管理/5_4 IO缓冲管理.md" };
const _hoisted_1 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "22.723ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 10043.7 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.091ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 7112.1 1000",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="io缓冲管理" tabindex="-1">IO缓冲管理 <a class="header-anchor" href="#io缓冲管理" aria-label="Permalink to &quot;IO缓冲管理&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>缓冲（Buffer）：</strong> 在数据传输过程中临时存放数据的存储区域，用于缓解CPU、内存与I/O设备之间的速度不匹配，减少等待并提高传输效率。</p></div><p>缓冲技术可以提高外设利用率：</p><ul><li><p>匹配CPU与外设的不同处理速度</p></li><li><p>减少对CPU的中断次数。</p></li><li><p>提高CPU和I/O设备之间的并行性。</p></li></ul><hr><h3 id="单缓冲-single-buffer" tabindex="-1">单缓冲（single buffer） <a class="header-anchor" href="#单缓冲-single-buffer" aria-label="Permalink to &quot;单缓冲（single buffer）&quot;">​</a></h3><p><img src="' + _imports_0 + '" alt=""></p><p><strong>核心：</strong> 对每一个I/O请求，OS在主存中分配一个缓冲区。</p><p>由于输出（T）和处理（C）是可以并行的，系统对每一块数据的处理时间是：</p>', 9)),
    createBaseVNode("mjx-container", _hoisted_1, [
      (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
        createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(529,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1129,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1875.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2931.6,0)"><path data-c="1D440" d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3982.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4511.6,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5083.6,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5472.6,0)"><path data-c="1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6232.6,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6677.2,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7381.2,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7992.4,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(8992.7,0)"><path data-c="1D440" d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z" style="stroke-width:3;"></path></g></g></g>', 1)
      ])])),
      _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", null, "a"),
          createBaseVNode("mi", null, "n"),
          createBaseVNode("mi", null, "s"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mi", null, "M"),
          createBaseVNode("mi", null, "a"),
          createBaseVNode("mi", null, "x"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mi", null, "C"),
          createBaseVNode("mo", null, ","),
          createBaseVNode("mi", null, "T"),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "+"),
          createBaseVNode("mi", null, "M")
        ])
      ], -1))
    ]),
    _cache[7] || (_cache[7] = createBaseVNode("p", null, "MT不能并行是因为都需要读写缓冲区，发生读写冲突", -1)),
    _cache[8] || (_cache[8] = createBaseVNode("p", null, "CM不能并行是因为都由CPU执行", -1)),
    _cache[9] || (_cache[9] = createBaseVNode("hr", null, null, -1)),
    _cache[10] || (_cache[10] = createBaseVNode("h3", {
      id: "双缓冲-double-buffer",
      tabindex: "-1"
    }, [
      createTextVNode("双缓冲(double buffer) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#双缓冲-double-buffer",
        "aria-label": 'Permalink to "双缓冲(double buffer)"'
      }, "​")
    ], -1)),
    _cache[11] || (_cache[11] = createBaseVNode("p", null, [
      createBaseVNode("img", {
        src: _imports_1,
        alt: ""
      })
    ], -1)),
    _cache[12] || (_cache[12] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "核心："),
      createTextVNode("分配两个缓冲区，尽可能让CPU和外设都能连续处理二无需等待对方，CPU处理速度和外设接近时效果比较好（即相比于单缓冲允许MT并行）")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("双缓冲时，系统处理一块数据的时间可以粗略认为是 ", -1)),
      createBaseVNode("mjx-container", _hoisted_3, [
        (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[2] || (_cache[2] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D440" d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1051,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1580,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2152,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2541,0)"><path data-c="1D440" d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3814.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4814.4,0)"><path data-c="1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5574.4,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6019.1,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6723.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>', 1)
        ])])),
        _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "M"),
            createBaseVNode("mi", null, "a"),
            createBaseVNode("mi", null, "x"),
            createBaseVNode("mo", { stretchy: "false" }, "("),
            createBaseVNode("mi", null, "M"),
            createBaseVNode("mo", null, "+"),
            createBaseVNode("mi", null, "C"),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mi", null, "T"),
            createBaseVNode("mo", { stretchy: "false" }, ")")
          ])
        ], -1))
      ]),
      _cache[5] || (_cache[5] = createTextVNode(" （M与C、T都可以并行）", -1))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode('<hr><h3 id="环形缓冲-circular-buffer" tabindex="-1">环形缓冲(circular buffer) <a class="header-anchor" href="#环形缓冲-circular-buffer" aria-label="Permalink to &quot;环形缓冲(circular buffer)&quot;">​</a></h3><p><img src="' + _imports_2 + '" alt=""></p><p>若CPU和外设处理速度差异大→引入多缓冲→一种有效的组织形式是环形</p><hr><h3 id="缓冲池-buffer-pool" tabindex="-1">缓冲池(buffer pool) <a class="header-anchor" href="#缓冲池-buffer-pool" aria-label="Permalink to &quot;缓冲池(buffer pool)&quot;">​</a></h3><p>上述缓冲区仅适用于某一特定I/O进程和计算进程，属于<strong>专用缓冲</strong></p><p>系统较大时，会有许多这样的专用缓冲，消耗大量内存空间，而且利用率不高</p><p>缓冲池由此提出，在池中设置了多个可供若干进程共享的缓冲区</p><p><img src="' + _imports_3 + '" alt=""></p><p><strong>工作方式：</strong></p><ul><li><strong>收容输入</strong></li><li><strong>提取输出</strong></li><li><strong>提取输入</strong></li><li><strong>收容输出</strong></li></ul><hr><h3 id="缓冲存在的问题" tabindex="-1">缓冲存在的问题 <a class="header-anchor" href="#缓冲存在的问题" aria-label="Permalink to &quot;缓冲存在的问题&quot;">​</a></h3><p><img src="' + _imports_4 + '" alt=""></p><p>最主要的问题是在数据传输中可能需要多次复制同一个数据包，造成不必要的性能开销</p><h2 id="复习题" tabindex="-1">复习题 <a class="header-anchor" href="#复习题" aria-label="Permalink to &quot;复习题&quot;">​</a></h2>', 17)),
    createVNode(_component_QuizSet, { collection: "io" })
  ]);
}
const _5_4_IO____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _5_4_IO____ as default
};
