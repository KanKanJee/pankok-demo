function Variant() {
    function a() {
        ub() ? ($(".vet span").html("Load " + $.localStorage(_b + ".vhg")), $(".vhe").removeClass("vih")) : $.localStorage(_b + ".state.veu") ? ($(".vet span").removeClass("vih"), $(".vhe").removeClass("vih")) : $(".vhd").removeClass("vih"), lc && $(".vah, .vdi, .vgy").remove()
    }

    function b() {
        var a = Lb("demo");
        if (null !== a) {
            var b = new XMLHttpRequest;
            b.open("GET", "../demos/" + a + ".variant", !0), b.responseType = "blob", b.onload = function(a) {
                var c = [b.response];
                ia(c, !0)
            }, b.onerror = function(a) {
                xb("Could not load specified demo file.")
            }, b.send()
        }
    }

    function c() {
        var a = $("body");
        Yb = $("#blank-veu").html(), $(".viu").html($("#veu").html()), Zb = $("#veu"), $b = $(".viu"), _b = "undefined" !== a.attr("mrv_namespace") ? a.attr("mrv_namespace") : "mrv_variant.default", ac = a.attr("mrv_contentTarget") ? $("#veu " + a.attr("mrv_contentTarget")) : Zb, bc = a.attr("mrv_contentTarget") ? $(".viu " + a.attr("mrv_contentTarget")) : $b, cc = a.attr("mrv_navTarget") ? $("#veu " + a.attr("mrv_navTarget")) : ac, dc = a.attr("mrv_navTarget") ? $(".viu " + a.attr("mrv_navTarget")) : bc, ec = a.attr("mrv_footerTarget") ? $("#veu " + a.attr("mrv_footerTarget")) : ac, fc = a.attr("mrv_footerTarget") ? $(".viu " + a.attr("mrv_footerTarget")) : bc
    }

    function d() {
        var b = window.navigator.userAgent,
            c = b.indexOf("MSIE "),
            d = 0;
        (c > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && ($("#if-ie").removeClass("vih"), d = 1), 0 === d && setTimeout(function() {
            $(".vhc").addClass("vba"), $(".vhv").removeClass("vba"), setTimeout(function() {
                $(".vhc").remove(), a(), vb()
            }, 300)
        }, 100)
    }

    function e(a) {
        $("head").append('<link class="viw" href="theme/css/' + a + '" rel="alternate stylesheet" type="text/css" media="all">')
    }

    function f() {
        var a;
        try {
            a = JSON.parse($(".vaz").html()), $(".vho").eq(2).removeClass("vih"), g("Original", a.original.colours, "theme"), $(".vay").attr("viq", a.original.originalFileName + ".css").attr("vhx", a.original.originalFileName + ".css"), $(a.schemes).each(function() {
                g(this.name, this.colours, "theme-" + this.name), e("theme-" + this.name.toLowerCase() + ".css")
            }), $(".viw").remove(), $(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function g(a, b, c) {
        var d, e = "",
            f = a + ": ",
            g = 100 / b.length;
        $(b).each(function(a, b) {
            e += '<div class="vax" style="width: ' + g + "%; background-color: " + b + '"></div>', f += " " + b
        }), d = '<li title="' + f + '" class="vhu" viz="' + c.toLowerCase() + '.css">', $(".vay").append(d + e + "</li>")
    }

    function h(a, b) {
        try {
            colourSchemes = JSON.parse($(".vaz").html());
            var c = a,
                d = $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href"),
                e = $(".vay").attr("vhx");
            c = d.replace(e, c), $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href", c), $(".vay").attr("vhx", a), b === !0 && gb()
        } catch (f) {}
    }

    function i(a) {
        var b, c, d, e;
        return $("#veu ." + a).attr("vht") ? a = "parent" === $("#veu ." + a).attr("vht") ? $("#veu ." + a).parent().attr("vic") : $("#veu ." + a).closest($("#veu ." + a).attr("vht")).attr("vic") : $("#veu ." + a).closest(".vpe").length && (a = $("#veu ." + a).closest(".vpe").attr("vic")), b = $(".viu ." + a).not("ul.slides .clone ." + a).clone(), c = $("#veu ." + a).clone(), d = (new Date).getTime(), e = "vjs-" + d, b.find(".vnw").remove(), b.attr("vic", e), c.attr("vic", e), b.alterClass("vjs-*", ""), c.alterClass("vjs-*", ""), b.addClass(e), c.addClass(e), b.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a;
            $(this).attr("vic", b), $(this).alterClass("vjs-*", ""), $(this).addClass(b)
        }), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a;
            $(this).attr("vic", b), $(this).alterClass("vjs-*", ""), $(this).addClass(b)
        }), b.addClass("vpf").insertAfter($(".viu ." + a)), c.insertAfter($("#veu ." + a)), c.insertAfter($("#vbn ." + a)), gb(), $(".vhw").hide(), $("#veu ." + a).is(hc) ? void Ua(a) : void $(".viu ." + a).parents().each(function() {
            return $(this).is(ic) ? (Ua(a), !1) : void 0
        })
    }

    function j(a, b) {
        var c = "undefined" != typeof b ? b : !1,
            d = $(".viu ." + a).parents(),
            e = $("#veu ." + a).is(hc) ? !0 : !1;
        $("#veu ." + a).attr("vht") ? a = "parent" === $("#veu ." + a).attr("vht") ? $("#veu ." + a).parent().attr("vic") : $("#veu ." + a).closest($("#veu ." + a).attr("vht")).attr("vic") : $("#veu ." + a).closest(".vpe").length && (a = $("#veu ." + a).closest(".vpe").attr("vic")), $("#veu ." + a).attr("vjw") ? also = $("#veu ." + a).closest("nav, section, header, footer").find($("#veu ." + a).attr("vjw")).attr("vic") : also = a, c === !0 && ($(".viu ." + a).remove(), $("#veu ." + a).remove()), $(".vdv").length ? ($(".viu ." + a + ", .viu ." + also).addClass("vjb").removeClass("vjm"), $("#veu ." + a + ", #veu ." + also).addClass("vjb").removeClass("vjm")) : ($(".viu ." + a + ", .viu ." + also).addClass("vib").removeClass("vjm"), $("#veu ." + a + ", #veu ." + also).addClass("vib").removeClass("vjm")), e ? Ua(a) : d.each(function() {
            return $(this).is(ic) ? (Ua(a), !1) : void 0
        }), gb(), $(".vhw").hide()
    }

    function k(a) {
        var b = $("#veu ." + a),
            c = $(".viu ." + a),
            d = $("#veu ." + Ob(b)),
            e = $(".viu ." + Ob(c));
        b.is(":first-child") || (b.detach().insertBefore(d), c.detach().find(".vnw").remove(), c.insertBefore(e), gb(), b.is(hc) ? Ua(a) : c.parents().each(function() {
            return $(this).is(ic) ? (Ua(a), !1) : void 0
        }))
    }

    function l(a) {
        var b = $("#veu ." + a),
            c = $(".viu ." + a),
            d = b.next(),
            e = c.next();
        b.is(":last-child") || (b.detach().insertAfter(d), c.detach().find(".vnw").remove(), c.insertAfter(e), gb(), b.is(hc) ? Ua(a) : c.parents().each(function() {
            return $(this).is(ic) ? (Ua(a), !1) : void 0
        }))
    }

    function m(a) {
        if ($(a).siblings().length) return void $(a).remove();
        if ($(a).parent().length) {
            var b = $(a).parent();
            return $(a).remove(), m(b)
        }
    }

    function n(a) {
        var b = $("." + a);
        if ($(b).is("p , div, span, figure, article, img"))
            if ($(b).is('[class*="medium-"]') || $(b).parent().is('div [class*="medium-"]')) {
                if ($(b).parent().is('div [class*="medium-"]') && (b = $(b).parent()), !$(b).hasClass("medium-12")) {
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-12");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-11");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-10");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-9");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-8");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-7");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-6");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-5");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-4");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-3");
                    if (b.hasClass("medium-1")) return void b.removeClass("medium-1").addClass("medium-2")
                }
            } else if ($(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if ($(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-xs-12")) {
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-12");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-11");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-10");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-9");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-8");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-7");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-6");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-5");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-4");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-3");
                if (b.hasClass("col-xs-1")) return void b.removeClass("col-xs-1").addClass("col-xs-2")
            }
        } else if ($(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if ($(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-sm-12")) {
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-12");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-11");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-10");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-9");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-8");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-7");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-6");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-5");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-4");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-3");
                if (b.hasClass("col-sm-1")) return void b.removeClass("col-sm-1").addClass("col-sm-2")
            }
        } else if (($(b).is('[class*="col-md-"]') || $(b).parent().is('div [class*="col-md-"]')) && ($(b).parent().is('div [class*="col-md-"]') && (b = $(b).parent()), !$(b).hasClass("col-md-12"))) {
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-12");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-11");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-10");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-9");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-8");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-7");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-6");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-5");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-4");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-3");
            if (b.hasClass("col-md-1")) return void b.removeClass("col-md-1").addClass("col-md-2")
        }
        gb()
    }

    function o(a) {
        var b = $("." + a);
        if ($(b).is("p , div, span, figure, article, img"))
            if ($(b).is('[class*="medium-"]') || $(b).parent().is('div [class*="medium-"]')) {
                if ($(b).parent().is('div [class*="medium-"]') && (b = $(b).parent()), !$(b).hasClass("medium-1")) {
                    if (b.hasClass("medium-12")) return void b.removeClass("medium-12").addClass("medium-11");
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-10");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-9");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-8");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-7");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-6");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-5");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-4");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-3");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-2");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-1")
                }
            } else if ($(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if ($(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-xs-1")) {
                if (b.hasClass("col-xs-12")) return void b.removeClass("col-xs-12").addClass("col-xs-11");
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-10");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-9");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-8");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-7");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-6");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-5");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-4");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-3");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-2");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-1")
            }
        } else if ($(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if ($(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = $(b).parent()), !$(b).hasClass("col-sm-1")) {
                if (b.hasClass("col-sm-12")) return void b.removeClass("col-sm-12").addClass("col-sm-11");
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-10");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-9");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-8");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-7");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-6");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-5");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-4");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-3");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-2");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-1")
            }
        } else if (($(b).is('[class*="col-md-"]') || $(b).parent().is('div [class*="col-md-"]')) && ($(b).parent().is('div [class*="col-md-"]') && (b = $(b).parent()), !$(b).hasClass("col-md-1"))) {
            if (b.hasClass("col-md-12")) return void b.removeClass("col-md-12").addClass("col-md-11");
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-10");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-9");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-8");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-7");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-6");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-5");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-4");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-3");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-2");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-1")
        }
        gb()
    }

    function p(a) {
        var b, c, d, e, f, g, h, i, j, k = new JSZip,
            l = [],
            m = new Date;
        return $("#vhl .viy").length ? ("all" === a ? ($("#vhl .viy").each(function() {
            l.push($(this).attr("viy"))
        }), b = "variant-exported-" + Jb(m.toDateString())) : l.push(a), l.forEach(function(a, b) {
            c = $.localStorage(_b + ".state.veu." + a), f = $.localStorage(_b + ".state.vem." + a) || "", colourScheme = $.localStorage(_b + ".vhf." + a), fontOption = $.localStorage(_b + "vmp." + a), bodyClasses = $.localStorage(_b + ".vkp." + a) || "", pageName = $('#vhl [viy="' + a + '"]').attr("vjh") || "", pageTitle = $('#vhl [viy="' + a + '"]').attr("page-title"), pageTitle = "undefined" != typeof pageTitle ? pageTitle : "", d = $.localStorage(_b + ".state.page-meta-description-mrv." + a) || "", e = $.localStorage(_b + ".state.page-google-analytics-id-mrv." + a) || "", g = {
                stateID: a,
                templateName: _b,
                pageName: pageName,
                pageTitle: pageTitle,
                colourScheme: colourScheme,
                fontOption: fontOption,
                bodyClasses: bodyClasses,
                layoutMap: f,
                masterHtml: c,
                metaDescription: d,
                googleAnalyticsID: e
            }, h = JSON.stringify(g), k.file(Jb(pageName) + "-" + m.getTime() + ".page", h)
        }), k.file(_b + ".navs", $("#vbn").html()), k.file(_b + ".footers", $("#vbl").html()), "all" !== a && (b = Jb(pageName)), lc && (j = k.generate({
            type: "base64",
            compression: "deflate"
        }), $.localStorage("allpages", j)), void(lc || (i = k.generate({
            type: "blob",
            compression: "deflate"
        }), saveAs(i, b + ".variant")))) : void xb("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.")
    }

    function q() {
        var a;
        try {
            a = JSON.parse($(".vmq").html()), $(".vmy").removeClass("vih"), $(".vmz").text(a.title), r(a.originalSet), $(a.optionalSets).each(function() {
                r(this)
            }), $(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function r(a) {
        var b = $("<li>").addClass("vmv").attr("vmw", a.setName);
        a.css.length > 0 ? b.attr("vmo", a.css) : b.attr("vmo", "vir"), $(a.fonts).each(function() {
            b.append($("<img>").attr("src", "img/fonts/" + Jb(this.fontName) + ".png"))
        }), $(".vms").append(b)
    }

    function s(a, b) {
        try {
            var c = (JSON.parse($(".vmq").html()), $("[vmw=" + a + "]").attr("vmo"));
            $("head link.vmx").remove(), $("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../css/font-' + Jb(a) + '.css" rel="stylesheet" type="text/css">'), $(".vms").attr("vmr", a), $(".vmv.vhr").removeClass("vhr"), $('.vmv[vmw="' + a + '"]').addClass("vhr"), b === !0 && gb()
        } catch (d) {}
    }

    function t() {
        var a = B(),
            b = a.attr("vhy");
        $("#veu ." + b).html(a.html()), $("#vbl ." + b).html(a.html()), $("#vbl .vjb").removeClass("vjb"), $.localStorage(_b + ".vbm", $("#vbl").html())
    }

    function u(a) {
        $(".vfb").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vfy").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function v() {
        var a, b = (new Date).getTime(),
            c = "vhy-" + b,
            d = $(".vfz").val();
        $(".vdm").closest(".vho").find(".vly").text(d), $(".vfz").val(""), $("#veu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), $(".viu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), $("#vbl").append($("#veu footer").clone()), a = $("#vbl").html(), $.localStorage(_b + ".vbm", a), w($("." + c))
    }

    function w(a) {
        $(".vdm").append('<li class="vdl" vid="' + $(a).attr("vhy") + '" vdn="' + $(a).attr("vhy") + '" vit="vhz"><span>' + $(a).attr("vie") + '</span><span class="vbx oi" data-glyph="x"></span></li>')
    }

    function x() {
        $("#vbl").append($.localStorage(_b + ".vbm")), $("#vbl footer").each(function() {
            w($(this))
        })
    }

    function y(a, b) {
        var c = (A(), B()),
            d = C(),
            e = D(),
            f = b === !0 ? !0 : !1,
            g = "";
        e.remove(), c.remove(), $("#vbl [vhy=" + a + "]").length ? (g = Pb($("#vbl [vhy=" + a + "]").get(0), !0), d.append(g), F(E(a))) : $("#vdk section#" + a).length ? (g = $("#vdk section#" + a).html(), d.append(g), d.find("footer").addClass("vir").attr("footer-id", a), Wa(d.find("footer")), F(E(a))) : F(defaults.ui.sidebar.footerOptionsListText), f && (gb(), Ua())
    }

    function z() {
        $("#veu footer").remove(), $(".viu footer").remove(), vb(), wb(), gb(), Ua()
    }

    function A() {
        return $(fc.selector)
    }

    function B() {
        return A().find("footer").first()
    }

    function C() {
        return $(ec.selector)
    }

    function D() {
        return C().find("footer").first()
    }

    function E(a) {
        return $('[vhy="' + a + '"]').attr("vie") || $("#vdk #" + a).attr("vbr")
    }

    function F(a) {
        var b = $(".vdm").siblings(".vly");
        _.isUndefined(a) ? b.text(defaults.ui.sidebar.footerOptionsListText) : b.text(a)
    }

    function G(a, b) {
        var c;
        $(".viu ." + b);
        return c = W("envelope-closed", "Edit Form", "li"), $(c).unbind("click").bind("click", function(b) {
            return H($("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", $("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function H(a) {
        $(".vph").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vpj").val(a), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function I() {
        var a, b = $("<div>").append($(".vpi").val()),
            c = $("#veu").find("." + $(".vpj").val()),
            d = c.closest("section"),
            e = "",
            f = null,
            g = null;
        return $(jc).each(function(a, b) {
            e += (a > 0 ? ", " : " ") + b.name
        }), $(b).find("form[action]:first").length ? (g = $(b).find("form[action]:first"), $(jc).each(function(a, b) {
            return g.attr("action").toLowerCase().includes(b.action) ? (f = b.handler, !1) : void 0
        }), f ? (a = f(b, c), a ? (a.insertBefore(c), j(c.attr("vic")), Wa(d), Ua(c.attr("vic")), !0) : !1) : (zb("Please use an embed code from: " + e + ".", "warning", null, 7e3), !1)) : (zb("No valid form found in your embed code.", "warning"), !1)
    }

    function J(a, b) {
        var c = $(a).find("form[action]:first"),
            d = $("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = $("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = $("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = $("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = $("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (zb('The form you are embedding will not fit. Use "Super Slim" form instead.', "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find("label, input, textarea").each(function() {
            var a = $(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (zb("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function K(a, b) {
        var c = $(a).find("form[action]:first"),
            d = $("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = $("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = $("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = $("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = $("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (zb("The form you are embedding will not fit. Use a single field instead.", "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.removeAttr("vic"), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find('label, input, textarea, button[type="submit"]').each(function() {
            var a = $(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (zb("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function L(a) {
        var b, c, d, e, f, g = $('<div id="vjk" />').html(lb(a)),
            h = mb(a),
            i = (qb(a), ob(a)),
            j = pb(a),
            k = "";
        return Vb.options && Vb.options.forEach(function(a) {
            "undefined" != typeof a.disposableSelector && (k = k + " " + a.disposableSelector.replace(".", ""))
        }), g.find("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, a:empty, p:empty, span:empty, li:empty, em:empty, strong:empty, blockquote:empty, figcaption:empty, table:empty, label:empty").not(".in-page-link").addClass("vib"), g.find(".vib, .vjb").each(function() {
            m($(this))
        }), g.find("div.row:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), g.find(".vjd:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), $(g).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, form, input, textarea, blockquote, figcaption, tbody, tr, td, th, label, address").removeClass("vjm vjb").removeClass("vhz").removeClass("vir").alterClass("vjs-*", "").alterClass("variant-*", "").removeClass("vjd").removeClass("voz").removeClass("viv").removeClass("lightbox-gallery-mrv").removeClass("veo").removeClass("vlk").removeClass("ven").removeClass("vjy").removeClass("vdw").removeAttr("vic").removeClass("vjx").removeClass("vog").removeClass("voh").removeAttr("vij").removeAttr("vik").removeAttr("contenteditable").removeAttr("data-vip").removeAttr("vli").removeAttr("vht").removeAttr("vjw").removeAttr("vii").removeAttr("style").removeAttr("nav-id").removeAttr("footer-id").removeClass("ui-sortable").removeClass(k).removeClass("vns").removeClass("vnx").removeClass("vpd").removeClass("vnn").removeClass("vpe"), $(g).find("nav, header").alterClass("via-*", "").removeAttr("via").removeAttr("vio").removeAttr("style"), $(g).find("footer").alterClass("vhy-*", "").removeAttr("vhy").removeAttr("vie"), $(g).find('*[class=""]').removeAttr("class"), b = $("#vji").html(), b = String(b).replace("[title]", h), b = String(b).replace(tb(), qb(a)), f = R(b, j), b = f ? f : b, b = S(b, i), c = $(g).html().replace(/\n/g, "\n		").replace(/\n\n/g, "\n").replace(/\n\t\t><section/g, ">\n			<section").replace(/\n\t\t<header/g, "\n			<header").replace(/\t\t\t<\/header></g, "			</header>\n			<").replace(/\t\t\t<\/section></g, "			</section>\n			<").replace(/<\/a><section/g, "</a>\n			\n			<section").replace(/<\/a><header/g, "</a>\n			\n			<header").replace(/<\/section>\n\t\t\t<a/g, "</section>\n			\n			<a").replace(/<\/header>\n\t\t\t<a/g, "</header>\n			\n			<a").replace(/\t\t\t<\/section>\n\t\t\t<\/div>/g, "			</section>\n		</div>").replace(/\t\t\t<\/header>\n\t\t\t<\/div>/g, "			</header>\n		</div>").replace(/\t\t\t<\/header>\n\t\t\t<section/g, "			</header>\n			\n			<section").replace(/\t\t\t<\/section>\n\t\t\t<header/g, "			</section>\n			\n			<header").replace(/\t\t\t<\/section>\n\t\t\t<section/g, "			</section>\n			\n			<section").replace(/\t\t\t<\/header>\n\t\t\t<header/g, "			</header>\n			\n			<header"), c = Kb(c), d = $("#vif").html(), b = M(b, c, d), b = N(b, c, d), b = T(a, b), d = O(b, c, d), d = U(a, d), e = String(b + c + d), e = String(e).replace(/\.\.\/img\//g, "img/").replace(/\.\.\/video\//g, "video/").replace(/delay-src/g, "src").replace(/no-src/g, "src")
    }

    function M(a, b, c) {
        var d = a;
        return Sb.forEach(function(a, e) {
            var f, g, h, i, j;
            f = $("<textarea>").append(b).append(c), g = $("<div>").html(f.text()), d = d.replace("\n        " + a.headString.replace(/&quot;/g, '"') + "\n", "\n"), d = d.replace(a.headString.replace(/&quot;/g, '"') + "\n", ""), i = "undefined" != typeof a.iconClass && "" !== a.iconClass ? 'i[class*="' + a.iconClass + '"]' : "", j = "undefined" != typeof a.iconPrefix && "" !== a.iconPrefix ? ("" !== i ? "," : "") + 'i[class*="' + a.iconPrefix + '"]' : "", h = "undefined" != typeof a.requiredBy && "" !== a.requiredBy ? (i + j !== "" ? "," : "") + a.requiredBy : "", $(g).find(i + j + h).length && (d = d.replace("\n        &lt;link ", "\n        " + a.headString + "\n        &lt;link "))
        }), d
    }

    function N(a, b, c) {
        var d = a;
        return Tb.forEach(function(a, e) {
            var f = $("<textarea>").append(b).append(c),
                g = $("<div>").html(f.text());
            $(g).find(a.requiredBy).length || (d = d.replace(a.styleRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function O(a, b, c) {
        var d = c;
        return Ub.forEach(function(a, e) {
            var f = $("<textarea>").append(b).append(c),
                g = $("<div>").html(f.text());
            $(g).find(a.requiredBy).length || (d = d.replace(a.scriptRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function P() {
        var a;
        if ($("#vpb").length) try {
            return a = JSON.parse($("#vpb").html()).dynamicCSS
        } catch (b) {
            return []
        }
    }

    function Q() {
        var a;
        if ($("#vpa").length) try {
            return a = JSON.parse($("#vpa").html()).dynamicScripts
        } catch (b) {
            return []
        }
    }

    function R(a, b) {
        var c = a.replace(/(\r\n|\n|\r)/gm, ","),
            d = c.split(","),
            e = !1,
            f = a;
        return b = " " === b ? "" : b, -1 === a.indexOf("[optional-body-classes]") ? a : (d.forEach(function(c) {
            -1 !== c.indexOf("[optional-body-classes]") && ("" !== b ? -1 !== c.indexOf('class="') ? (f = String(a).replace("[optional-body-classes]", b), e = !0) : (f = String(a).replace("[optional-body-classes]", 'class="' + b + '"'), e = !0) : (f = String(a).replace(" [optional-body-classes]", ""), f = String(f).replace("[optional-body-classes]", ""), e = !0))
        }), e ? f : void 0)
    }

    function S(a, b) {
        var c, d = a,
            e = "";
        return !_.isUndefined(b) && b.length > 0 && "vir" !== $('.vmv[vmw="' + b + '"]').attr("vmo") && (e = $('.vmv[vmw="' + b + '"]').attr("vmo"), c = '&#13;&#10;        &lt;link href="' + e + '" rel="stylesheet" type="text/css"&gt;&#13;&#10;', c += '        &lt;link href="css/font-' + Jb(b) + '.css" rel="stylesheet" type="text/css"&gt;&#13;&#10;    &lt;/head&gt;\n', d = d.replace(/\t\&lt;\/head\&gt;/g, c), d = d.replace(/[\s]*\&lt;\/head\&gt;/g, c)), d
    }

    function T(a, b) {
        var c = b,
            d = sb(a);
        return "string" == typeof d && "" !== d ? (d = "&lt;meta name=&quot;description&quot; content=&quot;" + Kb(Kb(d)) + "&quot;/&gt;", c.replace("&lt;/title&gt;", "&lt;/title&gt;&#13;&#10;        " + d)) : b
    }

    function U(a, b) {
        var c = "&lt;script&gt; (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '{{TRACKING-ID}}', 'auto'); ga('send', 'pageview'); &lt;/script&gt;",
            d = rb(a);
        return "string" == typeof d && "" !== d ? (c = c.replace("{{TRACKING-ID}}", d), b.replace("&lt;/body&gt;", "&nbsp;&nbsp;&nbsp;&nbsp;" + c + "\n&lt;/body&gt;")) : b
    }

    function V() {
        var a, b = "",
            c = $('<ul class="voj">'),
            d = $('<ul class="variant-icon-sets-mrv">');
        if ($("#voi").length) try {
            return a = JSON.parse($("#voi").html()).iconPacks, a.forEach(function(a) {
                c.append($("<li><span>" + a.name + "</span></li>")), b = '<li class="vou"><span class="vot">' + a.name + '</span> <span class="vom">' + a.icons.length + ' icons </span><span class="voo"><a target="_blank" href="' + a.url + '">more info</a></span></li>', b += '<li class="vov">', a.icons.forEach(function(c) {
                    b += '<div class="vam" von="' + c.toLowerCase().replace(a.iconPrefix, "") + '"><i class="icon ' + a.iconClass + " " + c + '" icon-class="' + a.iconClass + " " + c + '" title="' + c + '"></i></div>'
                }), b += "</li>", d.append(b)
            }), $(c).find("li:first").addClass("vhr"), $(d).find("li.vou:first, li.vov:first").addClass("vhr"), $(".vce").html("").append(c).append(d), a
        } catch (e) {
            return JSON.parse('{"iconPacks":[]}')
        }
    }

    function W(a, b, c, d) {
        var e, f = "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d + " " : "";
        return e = $("<" + f + ' data-glyph="' + a + '" class="' + g + 'oi vnv" title="' + b + '"></' + f + ">")
    }

    function X(a) {
        $(".vcd").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            minHeight: 620,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $("#vgo").val(a), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), aa(), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Y(a) {
        $(".vce").addClass("variant-filtered-mrv"), $(".vcd ul.variant-icon-sets-mrv div.vam").addClass("vih"), $(".vcd ul.variant-icon-sets-mrv div.vam span.vor").remove(), $('.vcd ul.variant-icon-sets-mrv div.vam[von*="' + a + '"]').each(function() {
            choosableIcon = $(this), choosableIcon.append('<span class="vor">' + choosableIcon.attr("von").replace(a, "<strong>" + a + "</strong>") + "</span>"), choosableIcon.removeClass("vih")
        }), aa()
    }

    function Z() {
        $(".vce").removeClass("variant-filtered-mrv"), $(".vcd .variant-icon-sets-mrv li div.vam.vih").removeClass("vih"), $(".vok").val(""), $(".vcd .vol").addClass("vih"), $(".vcd ul.variant-icon-sets-mrv div.vam span.vor").remove(), aa()
    }

    function aa() {
        var a, b = !0;
        $(".vow").remove(), $(".vcd ul.variant-icon-sets-mrv li.vov").each(function(c, d) {
            a = $(this).find("div.vam:not(.vih)").length, 0 === a ? $(this).addClass("vih").prev().addClass("vih") : (a > 70 ? $(".vce").addClass("variant-scroll-shadow-mrv") : $(".vce").removeClass("variant-scroll-shadow-mrv"), $(this).removeClass("vih").prev().removeClass("vih"), b = !1), $(".vcd .variant-icon-sets-mrv li span.vom").eq(c).text(a + " icon" + (a > 1 ? "s" : "") + " " + ("" !== $(".vok").val() ? "found" : "in this pack") + " ")
        }), b && ($(".vce").append('<span class="vow">None Found</span>'), $(".vce").removeClass("variant-scroll-shadow-mrv"))
    }

    function ba(a) {
        $(".vcl").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vdx").html($("#vdp").html()), $(".vcp").attr("src", $("." + a).attr("src")), $(".vcm .veb").text($("." + a).get(0).naturalWidth + "x" + $("." + a).get(0).naturalHeight + " pixels"), $(".vco").val($("." + a).attr("src").replace("../img/", "img/")), $(".vck").val(a), $(".vcf").val($("." + a).attr("alt")), $(".vdx .vdy").each(function() {
                    var a = $(this).find("img").get(0),
                        b = $(this).find(".vec");
                    b.text(a.naturalWidth + "x" + a.naturalHeight)
                }), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    fa(), $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ca() {
        var a = $(".vco").val(),
            b = $("." + $(".vck").val());
        refreshTarget = $(".vck").val(), "img/" === a.substring(0, 4) && (a = a.replace("img/", "../img/")), b.attr("src", a), b.attr("alt", $(".vcf").val()), b.closest("a.ven").length && b.closest("a.ven").attr("data-title", b.attr("alt")).attr("href", a), b.is(".background-image, .background-image-holder img") ? Ua(refreshTarget) : b.parents().find(ic).length && Ua(refreshTarget), gb()
    }

    function da(a) {
        var b, c, d, e = a.target.files;
        for (d = $(".vdx .vmh").first(), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), b = 0, c = e[b]; b < e.length; b++) $('#vdp [vis="' + c.name + '"]').length || ($('#vdp [vis="' + c.name + '"]').remove(), $(d).append('<div class="vdy"><img class="vcj" src="../img/' + c.name + '" vis="' + c.name + '" onerror="window.mr_variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>')), d = $(d).is(".vdx .vmh:last") ? $(".vdx .vmh:first") : $(d).next(".vdx .vmh");
        fa()
    }

    function ea() {
        var a = $("<div />").addClass("vmh"),
            b = $("<div />").addClass("vmh"),
            c = $("<div />").addClass("vmh"),
            d = "";
        if ($.localStorage(_b + ".gallery.images")) $("#vdp").html($.localStorage(_b + ".gallery.images")), $("#vdp div").each(function() {
            $(this).find("img").length || $(this).remove(), $(this).hasClass("no-image") && $(this).remove()
        });
        else {
            var e = $(".vdz").attr("vbv").split(",");
            e.forEach(function(e, f) {
                d = '<div class="vdy"><img class="vcj" delay-src="../img/' + e + '" vis="' + e + '" onerror="window.mr_variant.defaultImageError(this)"/><span class="vec"></span></div>', f % 3 === 0 ? c.append(d) : f % 2 === 0 ? b.append(d) : a.append(d), $("#vdp").append(a).append(b).append(c)
            })
        }
    }

    function fa() {
        $.localStorage(_b + ".gallery.images", $(".vdx").html()), $("#vdp").html($(".vdx").html())
    }

    function ga(a) {
        var b = $(a).find("img");
        b.attr("src", ""), b.attr("src", "../img/" + b.attr("vis")), b.css("display", "inline"), $(a).removeClass("no-image"), $(a).find(".vjn, .vec").html("")
    }

    function ha(a, b, c, d) {
        var e, f = "undefined" != typeof c && "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d : "",
            h = b !== !1 ? $(".viu ." + b) : !1,
            i = h ? h.outerWidth() : null,
            j = "10px",
            k = h && "img" === h.prop("tagName").toLowerCase() ? !0 : !1,
            l = h && "absolute" === h.css("position") ? !0 : !1,
            m = W("image", "Edit Image", f, g),
            n = $('<div class="vnu"></div>'),
            o = $('<div class="vnw"></div>');
        if ($(m).unbind("click").bind("click", function(b) {
                return ba($("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
            }).attr("vof", $("." + a).attr("vic")), 100 >= i && (j = "2px"), b !== !1) {
            if (k) return l ? !0 : (e = h.parent(), h.parent().is(".vnu") || (e = n, "" !== h.css("float") && e.css("float", h.css("float")), "" !== h.css("padding") ? e.css("padding", h.css("padding")) : ("" !== h.css("padding-left") && (e.css("padding-left", h.css("padding-left")), h.css("padding-left", "0px")), "" !== h.css("padding-right") && (e.css("padding-right", h.css("padding-right")), h.css("padding-right", "0px"))), "" !== h.css("margin-right") && (e.css("margin-right", h.css("margin-right")), h.css("margin-right", "0px")), "" !== h.css("margin-left") && (e.css("margin-left", h.css("margin-left")), h.css("margin-left", "0px")), h.hasClass("pull-right") && e.addClass("pull-right"), h.hasClass("pull-left") && e.addClass("pull-left"), e.css("max-width", i), h.wrap(e)), $(o).css("padding", j).css("width", h.innerWidth()).append(m), h.parent().append(o), !0);
            $(o).css("padding", j).css("width", i).append(m), h.append(o)
        }
        return b === !1 ? m : void 0
    }

    function ia(a, b) {
        var c = "undefined" != typeof a.target ? a.target.files : a,
            d = "";
        b = b === !0 ? !0 : !1;
        for (var e = 0; e < c.length; e++) {
            var f = new FileReader,
                g = c[e];
            f.onload = function(a) {
                return function(c) {
                    try {
                        var e = new JSZip(c.target.result),
                            f = '<span class="vjl">Imported the following:</span>',
                            g = '<span class="vjl">Excluded these:</span>',
                            h = "<ul>",
                            i = "<ul>";
                        $.each(e.files, function(a, b) {
                            var c, e;
                            b.name === _b + ".navs" ? (c = b.asText().trim(), c = $('<div id="variant-temp-navs-mrv" />').html(c), $(c).children().each(function() {
                                $('#vbn [via="' + $(this).attr("via") + '"]').length ? i += "<li>Nav - " + $(this).attr("vio") + " (already exists)</li>" : (qa($(this)), $("#vbn").append($(this)), $.localStorage(_b + ".vbo", $("#vbn").html()), h += "<li>Nav - " + $(this).attr("vio") + "</li>")
                            })) : b.name === _b + ".footers" ? (footers = b.asText().trim(), footers = $('<div id="vjj" />').html(footers), $(footers).find("footer").each(function() {
                                $('#vbl [vhy="' + $(this).attr("vhy") + '"]').length ? i += "<li>Footer - " + $(this).attr("vie") + " (already exists)</li>" : (w($(this)), $("#vbl").append($(this)), $.localStorage(_b + ".custom-footers", $("#vbl").html()), h += "<li>Footer - " + $(this).attr("vie") + "</li>")
                            })) : (e = JSON.parse(b.asText()), e.templateName === _b ? $('#vhl [viy="' + e.stateID + '"]').length ? i += "<li>Page - " + e.pageName + " (already exists)</li>" : (h += "<li>Page - " + e.pageName + "</li>", stateID = e.stateID, $("#vhl").append('<li class="viy" viy="' + e.stateID + '" vjh="' + e.pageName + '" page-title="' + e.pageTitle + '"></li>'), Oa(e.pageName, e.stateID), $.localStorage(_b + ".state.veu." + stateID, e.masterHtml), $.localStorage(_b + ".state.vem." + stateID, e.layoutMap), $.localStorage(_b + ".vhf." + stateID, e.colourScheme), $.localStorage(_b + "vmp." + stateID, e.fontOption), $.localStorage(_b + ".vkp." + stateID, e.bodyClasses), $.localStorage(_b + ".state.page-meta-description-mrv." + stateID, e.metaDescription), $.localStorage(_b + ".state.page-google-analytics-id-mrv." + stateID, e.googleAnalyticsID)) : i += "<li>Page - " + e.pageName + " (not designed for this template)</li>", d = {
                                id: e.stateID,
                                name: e.pageName
                            })
                        }), $.localStorage(_b + ".vhk", $("#vhl").html()), h += "</ul>", i += "</ul>", "<ul></ul>" !== h && (h = f + h), "<ul></ul>" !== i && (i = g + i), b ? ($(".vhe").remove(), ib(d.id)) : xb("Import", h + "<br />" + i), setTimeout(function() {
                            $(".vfw").find(".ves").length ? $(".vfw").removeClass("empty-vfw") : $(".vfw").addClass("empty-vfw")
                        }, 100)
                    } catch (c) {
                        xb("Page Import Error", "Error reading " + a.name + " : <br /><br />" + c.message)
                    }
                }
            }(g), f.readAsArrayBuffer(g)
        }
        $(".vef").val("")
    }

    function ja(a) {
        $(".vcw").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vgp").addClass("vih");
                var b = $("." + a);
                b.hasClass("ven") ? $(".vcq").text("for Lightbox Image") : ma(), $(".vcu").val($("." + a).attr("href").replace("../img/", "img/")), $(".vcv").val(a), $(".vcz").removeAttr("selected"), "undefined" != typeof $("." + a).attr("target") ? $(".vcy").val($("." + a).attr("target")) : $(".vcy").val("_self"), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ka() {
        var a = $("." + $(".vcv").val()),
            b = $(".vcu").val(),
            c = $(".vcy").val();
        a.hasClass("ven") && (a.find("img[alt]").length && a.attr("data-title", a.find("img").attr("alt")), "img/" === b.substring(0, 4) && (b = b.replace("img/", "../img/"))), a.removeClass("inner-link").attr("href", b).attr("target", c), -1 !== b.indexOf("#") && a.addClass("inner-link"), gb()
    }

    function la(a) {
        var b, c, d;
        $("[vik=" + $(a).parent().parent().attr("vbq") + "]").length ? (c = $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id"), d = $('.viu[href="#' + $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id") + '"]'), d.attr("href", "#" + Jb($(a).text())), ra(), $("[vik=" + $(a).parent().parent().attr("vbq") + "]").attr("id", Jb($(a).text())).attr("vij", $(a).text())) : (b = $("." + $(a).parent().parent().attr("vbq")), b.before('<a id="' + Jb($(a).text()) + '" class="in-page-link" vij="' + $(a).text() + '" vik="' + $(a).parent().parent().attr("vbq") + '"></a>'))
    }

    function ma() {
        $(".vgp").addClass("vih");
        var a = $(ac).find(".in-page-link");
        a.length && (output = '<option value="">Select an in-page navigation link</option>', a.each(function() {
            var a = $(this);
            output += '<option value="#' + a.attr("id") + '">' + a.attr("vij") + "</option>"
        }), $(".veh").html(output), $(".vgp").removeClass("vih"))
    }

    function na(a) {
        $(".vfc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vga").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function oa() {
        var a, b = (new Date).getTime(),
            c = "via-" + b,
            d = $(".vgb").val(),
            e = za(),
            f = wa();
        $(".vfj").closest(".vho").find(".vly").text(d), $(".vgb").val(""), e.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), f.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), $("#vbn").append(e.clone()), a = $("#vbn").html(), $.localStorage(_b + ".vbo", a), qa($("." + c))
    }

    function pa() {
        $("#vbn").append($.localStorage(_b + ".vbo")), $("#vbn").children().each(function() {
            qa($(this))
        })
    }

    function qa(a) {
        $(".vfj").append('<li class="vfi" nav-id="' + $(a).attr("via") + '" vit="vhz"><span>' + $(a).attr("vio") + '</span><span class="vby oi" data-glyph="x"></span></li>')
    }

    function ra() {
        var a = wa(),
            b = a.attr("via");
        $("#veu ." + b).html(a.html()).attr("class", a.attr("class")), $("#vbn ." + b).html(a.html()).attr("class", a.attr("class")), $("#vbn .vjb").removeClass("vjb"), $.localStorage(_b + ".vbo", $("#vbn").html())
    }

    function sa(a, b) {
        var c, d = (va(), wa()),
            e = ya(),
            f = za(),
            g = b === !0 ? !0 : !1;
        f.remove(), d.remove(), $("#vbn [via=" + a + "]").length ? (c = Pb($("#vbn [via=" + a + "]").get(0), !0), e.prepend(c), ua($("#vbn [via=" + a + "]").attr("nav-id")), Ba(Aa(a))) : $("section.vev#" + a).length ? (c = $("#" + a).clone(), $(c).find("script.options").remove(), e.prepend(c.html()), f = za(), f.addClass("vir").attr("nav-id", a), Wa(f), ua(a), Ba(Aa(a))) : Ba(defaults.ui.sidebar.navOptionsListText), g && (gb(), Ua())
    }

    function ta() {
        za().remove(), wa().remove(), vb(), wb(), gb(), Ua()
    }

    function ua(a) {
        var b = ya(),
            c = va();
        arguments.length || (a = za().attr("nav-id")), $(".vmm").closest(".vkq").remove();
        try {
            var d = JSON.parse($("#" + a + " script.options").html());
            $("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb");
            if ($.isArray(d.options)) $(d.options).each(function(a, d) {
                var e = "undefined" != typeof d.target ? d.target : "";
                Ma(d, ".vmm", c.selector + " nav " + e + ", " + b.selector + " nav " + e, !0)
            });
            else {
                var e = "undefined" != typeof d.options.target ? d.options.target : "";
                Ma(d.options, ".vmm", c.selector + " nav  " + e + ", " + b.selector + " nav  " + e, !0)
            }
        } catch (f) {
            return
        }
    }

    function va() {
        return $(dc.selector)
    }

    function wa() {
        return va().children().not("a").first()
    }

    function xa() {
        return wa().attr("vic")
    }

    function ya() {
        return $(cc.selector)
    }

    function za() {
        return ya().children().not("a").first()
    }

    function Aa(a) {
        return $('[via="' + a + '"]').attr("vio") || $("#vgg .vev#" + a).attr("vbr")
    }

    function Ba(a) {
        $(".vfj").siblings(".vly").text(a)
    }

    function Ca() {
        try {
            return JSON.parse($("#vnd").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Da() {
        try {
            var a = JSON.parse($("#vkk").html());
            $("<div>").addClass("vkq").append('<div class="vlq"><span>Page Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb");
            $.isArray(a.options) ? $(a.options).each(function() {
                Ma(this, ".vkx", "body, #vkk", !0)
            }) : Ma(a.options, ".vkx", "body, #vkk", !0)
        } catch (b) {
            return
        }
    }

    function Ea() {
        try {
            return JSON.parse($("#voy").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Fa(a, b) {
        var c, d = $("." + a),
            e = "";
        Vb.options.forEach(function(a) {
            c = a.disposableSelector || a.selector, "undefined" != typeof a.closest && (d = $("." + $(d).closest(a.closest).attr("vic"))), "undefined" != typeof a.menu && (e = "." + a.menu), $(d).is(c) && (Ma(a, ".vnc" + e, d.selector, !0), "undefined" != typeof b && b === !0 && $(".vnc" + e).removeClass("vih"))
        })
    }

    function Ga(a) {
        var b = $("." + a);
        $("ul.vnc li").remove(), $(Wb.options).each(function() {
            b.is(this.selector) && Ia(b, this)
        })
    }

    function Ha(a) {
        a = "undefined" != typeof a ? a : "", $("#vkk").removeAttr("class").addClass(a), $("body").addClass(a), $(".vkx .vky").each(function() {
            $(this).find(".vks").removeClass("vkr"), -1 !== a.indexOf($(this).attr("optionalclass")) ? $(this).find(".choice-button-on").addClass("vkr") : ($(this).find(".choice-button-off").addClass("vkr"), $("body").removeClass($(this).attr("optionalclass")))
        }), $(".vkx .vkz").each(function() {
            $(this).find(".vkt").removeClass("vku"), -1 !== a.indexOf($(this).attr("optionalclass")) ? $(this).find(".vkt").addClass("vku") : $("body").removeClass($(this).attr("optionalclass"))
        }), $(".vkx .vkv").removeClass("vkw"), $('.vkx .vkv[optionalclass=" "]').addClass("vkw"), $(".vkx .vkv").each(function() {
            -1 !== a.indexOf($(this).attr("optionalclass")) && " " !== $(this).attr("optionalclass") ? ($(this).addClass("vkw"), $('.vkx .vkv[optionalclass=" "]').removeClass("vkw")) : $("body").removeClass($(this).attr("optionalclass"))
        })
    }

    function Ia(a, b, c) {
        var d, e, f, g, h = b || a.data("vip");
        d = $(a).find(h.selector + "[" + h.attribute + "]").length ? $("#veu " + $(a).attr("vic")).find(h.selector + "[" + h.attribute + "]") : $("#veu ." + $(a).attr("vic")), f = "undefined" != typeof h.modalInputIcon ? h.modalInputIcon : "pencil", g = "undefined" != typeof h.refresh ? h.refresh : "false", e = d.attr(h.attribute), $(".vbk").text(h.modalTitle), $(".vbh").text(h.modalIntro), $(".vbf").text(h.modalInputLabel), $(".vkh").attr("data-glyph", f), $(".vbg").val(e), $(".vbe").val($(d).attr("vic")).attr("vnn", g), $(".vbc").val(h.attribute), $(".vbk").text(h.modalTitle), "string" != typeof c && c === !0 ? Ja() : $(a).is("section, header") ? $(".vgk").text(h.buttonText).attr("data-glyph", f).removeClass("vih") : $(".vdh").text(h.buttonText).attr("data-glyph", f).removeClass("vih")
    }

    function Ja() {
        $(".vbi").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ka() {
        var a = $("#veu ." + $(".vbe").val()),
            b = $(".vbg").val(),
            c = $(".vbc").val();
        $(a).closest("[data-vip]").data("vip"); - 1 !== b.indexOf("<") && (!$(b).is("iframe") || "src" !== c && "no-src" !== c && "data-src" !== c || (b = $(b).attr("src"), "//" === b.substring(0, 2) && (b = "https:" + b), -1 !== b.indexOf("youtube.com") && (b += "?showinfo=0&rel=0&modestbranding=1", a.hasClass("youtube-bg-iframe") && (b += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3")), -1 !== b.indexOf("vimeo.com") && (b += "?badge=0&title=0&byline=0"))), $(a).is("iframe") && "no-src" === c ? ($(a).attr(c, b), $(".viu ." + $(".vbe").val()).attr("src", b)) : ($(a).attr(c, b), $(".viu ." + $(".vbe").val()).attr(c, b)), gb(), "true" === $(".vbe").attr("vnn") && Ua(a.attr("vic")), $(".vbe").removeAttr("refresh")
    }

    function La(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = $('<div data-glyph="' + e + '" class="oi vnv" title="' + a.buttonText + '"></div>'), d.addClass("vno"), d.data("vnq", a), d.attr("vnr", c), b === !1 ? d : void $(b).append(d)
    }

    function Ma(a, b, c, d) {
        var e, f = "undefined" != typeof d ? d : !1,
            g = "on" === a.initial ? "on" : "off",
            h = $("<li>"),
            i = $("<div>"),
            j = "";
        return c = "undefined" != typeof c ? c : !1, e = "undefined" != typeof a.refresh && "true" === a.refresh ? "refresh" : "", h.addClass("vmk"), a.title && h.append("<span>" + a.title + "</span>"), "choice" === a.type && ("on" === g && f === !0 && $(c).addClass(a["class"]), i.addClass("vky").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<div class="vks choice-button-on ' + e + " " + ("on" === g && f === !0 ? "vkr" : "") + ($(c).hasClass(a["class"]) && f !== !0 ? "vkr" : "") + '">' + a.onText + "</div>"), i.append('<div class="vks choice-button-off ' + e + " " + ("off" === g && f === !0 ? "vkr" : "") + ($(c).hasClass(a["class"]) || f === !0 ? "" : "vkr") + '">' + a.offText + "</div>"), h.append(i)), "toggle" === a.type && ("on" === g && f === !0 && $(classtarget).addClass(a["class"]), j = "on" === g && f === !0 ? " vku" : "", j = "auto" === a.initial && $(c).hasClass(a["class"]) ? " vku" : j, i.addClass("vkz").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<span class="oi" data-glyph="' + a.icon + '"></span><span>' + a.text + "</span>"), i.append('<div class="vkt' + j + " " + e + '"><div class="vmi"></div></div>'), h.append(i)), "multi" === a.type && (i.addClass("vmj").attr("classtarget", c), $.each(a.classes, function(b, c) {
            i.append('<div class="vkv ' + e + " " + (a.initial === b + 1 && f === !0 ? "vkw" : "") + '" optionalclass="' + ("" !== c["class"] ? c["class"] : " ") + '">' + c.text + "</div>")
        }), h.append(i)), "undefined" != typeof a.submenu && ($(b).find('li.vnk[submenu-name="' + a.submenu + '"]').length || $(b).append('<li class="vnk" submenu-name="' + a.submenu + '"><span class="vnl">' + a.submenu + "</span><ul></ul></li>"), b = $(b).find('li.vnk[submenu-name="' + a.submenu + '"] ul')), b === !1 ? h : void $(b).append(h)
    }

    function Na(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = $("<li />"), d.addClass("vno"), d.append('<span class="oi" data-glyph="' + e + '"></span><span class="vnp">' + a.buttonText + "</span>"), d.data("vnq", a), d.attr("vnr", c), d.attr("title", a.buttonText), b === !1 ? d : void $(b).append(d)
    }

    function Oa(a, b) {
        $(".vfw").prepend('<div class="ves" vjh="' + a + '" state-id="' + b + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + a + '</span><span class="vbz oi" data-glyph="x"></span><span class="vpy oi" data-glyph="pencil"></span></div>'), lc && $(".vdj").remove(), $(".vfw").removeClass("empty-vfw")
    }

    function Pa(a) {
        "undefined" != typeof a && ($('.ves[state-id="' + a + '"]').remove(), setTimeout(function() {
            $(".vfw").find(".ves").length ? $(".vfw").removeClass("empty-vfw") : $(".vfw").addClass("empty-vfw")
        }, 50))
    }

    function Qa(a) {
        var b = Ra("Page");
        a && jb(), $(".vhe").addClass("vih"), hb(b)
    }

    function Ra(a) {
        var b, c = [];
        return $("#vhl li").each(function() {
            c.push($(this).attr("vjh"))
        }), b = a.split(" ").length > 1 ? parseInt(a.split(" ").pop()) : 0, _.contains(c, a) ? Ra(a.split(" ")[0] + " " + (b + 1)) : a
    }

    function Sa(a) {
        return a === $.localStorage(_b + ".vhh")
    }

    function Ta() {
        Fb(), jb(), $(".vhe").removeClass("vih"), $(".vet").addClass("vih"), $.localStorage(_b + ".vhh", ""), $.localStorage(_b + ".vhg", "")
    }

    function Ua(a) {
        function b(a) {
            var b = ".viu";
            "undefined" != typeof a && (b = ".viu " + a), $(b).find("[no-src]").each(function() {
                $(this).attr("src", $(this).attr("no-src")).removeAttr("no-src")
            })
        }
        var c = $(".viu").get(0).scrollTop;
        $(".viu " + $("body").attr("mrv_contentTarget"));
        $(".viu").empty().html($("#veu").html()), setTimeout(function() {
            "undefined" == typeof mr ? (b(), reInit(".viu")) : (b(), mr.documentReady(mr.setContext(".viu")), mr.windowLoad(mr.setContext(".viu"))), Cb(), Db(), Bb(), $(".viu .embedded-video-holder").each(function() {
                $(this).addClass("vju")
            }), wb(), $(".viu").get(0).scrollTop = c, $(".viu .vnx").trigger("mouseenter")
        }, 100)
    }

    function Va(a) {
        var b, c, d, e, f, g = 0,
            h = 0,
            i = 0,
            j = $(".viu ." + a),
            k = j.attr("vic"),
            l = j.position(),
            m = j.offset(),
            n = va(),
            o = Math.max(n.children().first().outerHeight(!0), n.find(".nav-bar:nth-of-type(1)").outerHeight(!0), $(".viu .nav-container:nth-of-type(1)").outerHeight(!0)),
            p = n.children().first().css("position"),
            q = $(".viu nav .nav-bar").css("position"),
            r = $(".viu"),
            s = j.width(),
            t = ($(window).width(), $(window).height()),
            u = o / t,
            v = 0,
            w = Math.round(m.left + s - 14);
        o = u > .9 ? 0 : o, $.find('.viu .vne[vnt="' + k + '"]').length || ($(".viu .vne").remove(), b = $('<div class="vne" />'), j.is(":first-child") || "absolute" !== p && "fixed" !== p && "fixed" !== q && "absolute" !== q || (o = 0), b.css("top", Math.round(l.top + 10 + o)), b.attr("vnt", k), c = $("<ul></ul>"), c.append('<li class="vni"><span class="vnm oi" data-glyph="cog"></span><ul class="vnc utility"></ul></li>'), Vb.options.forEach(function(a) {
            j.is(a.selector) && g++
        }), Wb.options.forEach(function(a) {
            1 === j.find(a.selector).length && "true" === a.sectionControl ? (d = Na(a, !1, j.find(a.selector).first().attr("vic")), c.append(d), w -= 48, v += 48, h++) : j.is(a.selector) && "true" === a.sectionControl && (d = Na(a, !1, j.attr("vic")), c.append(d), w -= 48, v += 48, h++)
        }), e = j.find(".background-image-holder > img:not(.lightbox-gallery-mrv img, .voh img ,ul.slides .background-image-holder > img):first"), 1 === e.length && (c.append(ha(e.attr("vic"), !1, "li", "vni")), w -= 48, v += 48, i++), 1 === j.find("img").length ? 1 === j.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").length ? (c.append(ha(j.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img):first").attr("vic"), !1, "li", "vni")), w -= 48, v += 48, i++) : e = j.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").each(function() {
            $(this).parent().is(".background-image-holder") || "absolute" !== $(this).css("position") || $(this).hasClass("vib") || (c.append(ha($(this).attr("vic"), !1, "li", "vni")), w -= 48, v += 48, i++)
        }) : j.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").each(function() {
            "absolute" === $(this).css("position") && ($(this).parents().find("[data-address], .masonry").length || (c.append(ha($(this).attr("vic"), !1, "li", "vni")), w -= 48, v += 48, i++))
        }), 1 === j.find("video").length && (f = j.find("video"), c.append(Gb(f.attr("vic"), !1)), w -= 48, v += 48, i++), 1 === j.find("form[action]:not(.vib)").length && $(jc).each(function(a, b) {
            return j.find("form").attr("action").toLowerCase().includes(b.action) ? (form = j.find('form[action*="' + b.action + '"]:first'), c.append(G(form.attr("vic"), !1)), w -= 48, v += 48, i++, !1) : void 0
        }), g + h > 0 && (b.append(c), w -= 48, v += 48), g + h + i > 0 && (b.css("width", v).css("left", w).attr("data-left", w), b.addClass("vnj").appendTo(r), Fa(a)))
    }

    function Wa(a) {
        var b = (new Date).getTime(),
            c = "vjs-" + b;
        return $(a).is("section, nav, header, footer, .divider-background") && ($(a).is("[vic]") || ($(a).attr("vic", c), $(a).addClass(c))), $(a).find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, textarea, blockquote, figcaption, tbody, tr, td, th, form, label, address").not(".vog, [vic]").each(function(a) {
            var b = c + "-" + a;
            $(this).attr("vic", b), $(this).addClass(b), $(this).is("nav, nav li, .slides > li, .slides .owl-item > li, ul, div, i, img, section, header, figure, .veo, video, iframe, input, textarea, form, tbody, tr, td, .vjx") || ($(this).addClass("vir"), $(this).attr("contenteditable", "true")), $(this).is("span, a, strong, em, i") ? 0 === $(this).parent().text().replace($(this).text(), "").replace(/\s/g, "").length && $(this).parent().removeAttr("contenteditable") : $(this).parent().removeAttr("contenteditable")
        }), b
    }

    function Xa() {
        var a = $(".vgm"),
            b = "",
            c = $(".vgi"),
            d = "";
        $("#vgg .vim").each(function(a) {
            var c, e = $(this),
                f = e.attr("vbp").split(","),
                g = "";
            f.forEach(function(a) {
                -1 === d.indexOf(a) && (d += '<div class="vgh" vbp="' + a + '">' + a + "</div>")
            }), c = e.attr("icons"), "undefined" != typeof c && c !== !1 && (c = e.attr("icons").split(","), c.forEach(function(a) {
                g += '<img class="vgj" src="img/' + a + '.png" />'
            })), b += '<div class="vgl" vbp="' + $(this).attr("vbp") + '" vgv="' + $(this).attr("id") + '"><img delay-src="img/sections/' + $(this).attr("id") + '.jpg"/>' + g + '<span class="vjl">' + $(this).attr("vbr") + "</span></div>"
        }), a.html(b), c.append(d)
    }

    function Ya(a) {
        var b, c, d = $("#" + a).find("section, header, footer").clone(),
            e = Wa($(d));
        ec.selector != ac.selector ? $(d).addClass(a + "-" + e).appendTo(ac) : (b = $(ac).find("footer"), b.length ? $(d).addClass(a + "-" + e).insertBefore(b) : $(d).addClass(a + "-" + e).appendTo(ac)), $(".vem").append('<div class="vaa data-vfs="' + a + '" vbq="' + a + "-" + e + '"><div class="vab"><span class="vir" contenteditable="true">' + $("#" + a).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + a + "-" + e + '"></i></div>'), ab(), gb(), Ua(a + "-" + e), vb(), c = $(".vem"), layoutMapHeight = c[0].scrollHeight, c.animate({
            scrollTop: layoutMapHeight
        }, 480)
    }

    function Za() {
        var a = $(bc.selector),
            b = $(ac.selector),
            c = a.find("footer"),
            d = b.find("footer");
        $(".vem .vaa").each(function() {
            var e = $(this).attr("vbq"),
                f = b.find("." + e),
                g = f.clone(),
                h = b.find("[vik=" + e + "]"),
                i = h.clone();
            h.remove(), d.length ? i.insertBefore(d) : i.appendTo(b), f.remove(), d.length ? g.insertBefore(d) : g.appendTo(b), f = a.find("." + e), g = f.clone(), h = a.find("[vik=" + e + "]"), i = h.clone(), h.remove(), c.length ? i.insertBefore(c) : i.appendTo(a), f.remove(), c.length ? g.insertBefore(c) : g.appendTo(a)
        }), gb(), Ua()
    }

    function $a() {
        $(".global-vfr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function _a() {
        $(".vjq").removeClass("vgq"), $(".vad").toggleClass("vgq")
    }

    function ab() {
        $(".vem").sortable({
            items: "> .vaa",
            revert: !1,
            cursor: "move",
            opacity: .7,
            delay: 150,
            cancel: "[contenteditable]",
            update: function() {
                Za()
            }
        })
    }

    function bb() {
        $(".vkm").addClass("vjz"), $(".vlh").trigger("click"), $(".vlv").hasClass("vmf") || $(".vac").trigger("click")
    }

    function cb(a) {
        $(".ves").removeClass("vqb"), $('.ves[state-id="' + a + '"]').addClass("vqb")
    }

    function db(a) {
        var b, c, d = $(".viu ul.slides." + a),
            e = $(d).parents(".slider"),
            f = d.parents(".slider[data-items]").length ? d.parents(".slider[data-items]").attr("data-items") : 0,
            g = f > 1 ? d.find(".owl-item.active").length : 0,
            h = va(),
            k = h.children().first().css("position"),
            l = h.children().first().find(".nav-bar").css("position"),
            m = d.find(" > li, .owl-item > li").not(".clone").length,
            n = e.length && g > 1 && m > g ? !0 : !1,
            o = 0;
        "absolute" !== k && "fixed" !== k && "absolute" !== l && "fixed" !== l || !d.closest("section").is(".viu section:nth-of-type(1), .viu header:nth-of-type(1)") || (o = Math.max(h.children().first().outerHeight(!0), $(".viu .nav-container").outerHeight(!0), h.children().first().find(".nav-bar").outerHeight(!0))), d.find(" > li, .owl-item > li").not(".clone").each(function(a) {
            var b, c, e = $(this),
                f = "",
                g = "",
                h = "",
                k = "",
                l = "";
            b = $('<div class="vnw"></div>'), b.css("top", o + 10), d.find("img").length || b.addClass("vny"), d.find("li > p, li > span").length && b.addClass("vny"), e.find(".vnv").length || (m > 1 && (f = W("arrow-thick-left", "Show Previous Slide"), $(f).unbind("click").bind("click", function(a) {
                try {
                    d.parent().flexslider("prev")
                } catch (b) {}
                try {
                    d.closest(".slider").flexslider("prev")
                } catch (b) {}
                try {
                    d.trigger("prev.owl.carousel")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), g = W("arrow-thick-right", "Show next Slide"), $(g).unbind("click").bind("click", function(a) {
                try {
                    d.parent().flexslider("next")
                } catch (b) {}
                try {
                    d.closest(".slider").flexslider("next")
                } catch (b) {}
                try {
                    d.trigger("next.owl.carousel")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), h = W("minus", "Delete Slide"), $(h).unbind("click").bind("click", function(a) {
                return j(e.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            })), c = W("plus", "Clone Slide"), $(c).unbind("click").bind("click", function(a) {
                return i(e.attr("vic")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), e.find(" > div.background-image-holder img").length && (k = ha(e.find(" > div.background-image-holder img").attr("vic"), !1)), 1 === e.find("img").length && (k = ha(e.find("img").attr("vic"), !1)), 1 === e.find("video").length && (l = Gb(e.find("video").attr("vic"), !1)), b.append(f).append(h).append(k).append(l).append(c).append(g), e.prepend(b))
        }), n && (c = $('<div class="vob vnw"></div>'), prevSlideButton = W("arrow-thick-left", "Show Previous Slide"), $(prevSlideButton).unbind("click").bind("click", function(a) {
            try {
                d.trigger("prev.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(c), b = $('<div class="voc vnw"></div>'), nextSlideButton = W("arrow-thick-right", "Show next Slide"), $(nextSlideButton).unbind("click").bind("click", function(a) {
            try {
                d.trigger("next.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(b), e.prepend(b).prepend(c))
    }

    function eb() {
        $("#vhl").html($.localStorage(_b + ".vhk")), $("#vhl li").each(function() {
            Oa($(this).attr("vjh"), $(this).attr("viy"))
        })
    }

    function fb(a) {
        $(".vge").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                "undefined" != typeof a ? "vpz" === a ? $(".vgf").attr("vpz", "true") : "vhd" === a && $(".vgf").attr("vhd", "true") : $(".vgf").val(""), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb(), $(".vgf").val(""), $(".vgf").removeAttr("viy").removeAttr("vqa")
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function gb() {
        mc || Qa();
        var a = ub(),
            b = $(".vei").val(),
            c = $(".vpp").val(),
            d = $(".vpq").val();
        $(".vhe").addClass("vih"), ra(), t(), $.localStorage(_b + ".vhh") ? ($.localStorage(_b + ".state.veu." + a, $("#veu").html()), $.localStorage(_b + ".state.vem." + a, $(".vem").html()), $.localStorage(_b + ".vhj." + a, b),
            $.localStorage(_b + ".state.page-meta-description-mrv." + a, c), $.localStorage(_b + ".state.page-google-analytics-id-mrv." + a, d), $.localStorage(_b + ".vhf." + a, $(".vay").attr("vhx")), $.localStorage(_b + "vmp." + a, $(".vms").attr("vmr")), $.localStorage(_b + ".vkp." + a, "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " ")) : ($.localStorage(_b + ".state.veu", $("#veu").html()), $.localStorage(_b + ".state.vem", $(".vem").html()), $.localStorage(_b + ".vhj", b), $.localStorage(_b + ".state.page-meta-description-mrv", c), $.localStorage(_b + ".state.page-google-analytics-id-mrv", d), $.localStorage(_b + ".vhf", $(".vay").attr("vhx")), $.localStorage(_b + "vmp", $(".vms").attr("vmr")), $.localStorage(_b + ".vkp", "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " "))
    }

    function hb(a) {
        var b, c, d = $(".vgf"),
            e = "string" == typeof a ? a : d.val();
        if ("true" === d.attr("vhd") && (jb(), setTimeout(function() {
                var a = $(".vge .vjl");
                a.text(a.attr("vpx")).removeAttr("vpx");
                var b = $(".vge .vew p:first");
                b.text(b.attr("vpx")).removeAttr("vpx")
            }, 500), bb()), "true" === d.attr("vpz")) return b = d.attr("viy"), c = d.attr("vqa"), setTimeout(function() {
            var a = $(".vge .vjl");
            a.text(a.attr("vpx")).removeAttr("vpx");
            var b = $(".vge .vew p:first");
            b.text(b.attr("vpx")).removeAttr("vpx")
        }, 500), $('.ves[state-id="' + b + '"]').attr("vjh", e).find("span.vfx").text(e), d.removeAttr("viy"), zb("Renamed page: " + c + " to <strong>" + e + "</strong>", "check", "success"), $('#vhl [viy="' + b + '"]').attr("vjh", e), ub() === b && ($.localStorage(_b + ".vhg", e), $(".vcr").text(e)), void $.localStorage(_b + ".vhk", $("#vhl").html());
        var f = (new Date).getTime(),
            g = "undefined" != typeof $(".vei").val() ? $(".vei").val() : kc,
            h = "" !== $(".vpp").val() ? $(".vpp").val() : "",
            i = "" !== $(".vpq").val() ? $(".vpq").val() : "";
        b = "viy-" + f, $("#vhl").append('<li class="viy" viy="' + b + '" vjh="' + e + '" page-title="' + $(".vei").val() + '"></li>'), Oa(e, b), $('#vhl [viy="' + ub() + '"]').attr("page-title", $(".vei").val()), $.localStorage(_b + ".vhk", $("#vhl").html()), $.localStorage(_b + ".state.veu." + b, $("#veu").html()), $.localStorage(_b + ".state.vem." + b, $(".vem").html()), $.localStorage(_b + ".vhj." + b, g), $.localStorage(_b + ".state.page-meta-description-mrv." + b, h), $.localStorage(_b + ".state.page-google-analytics-id-mrv." + b, i), $.localStorage(_b + ".vhf." + b, $(".vay").attr("vhx")), $.localStorage(_b + "vmp." + b, $(".vms").attr("vmr")), $.localStorage(_b + ".vkp." + b, $("#vkk").attr("class")), $.localStorage(_b + ".vhh", b), $.localStorage(_b + ".vhg", e), $(".vcr").text(e).removeClass("vih"), cb(b), Eb(), zb("Created page: <strong>" + e + "</strong>", "check", "success")
    }

    function ib(a) {
        $(".vei").removeClass("vlx"), $(".vhe").addClass("vih");
        var b, d, e, f, g = _.isUndefined(a) ? ub() : a,
            i = nb(g);
        stateHTML = ".state.veu." + g, f = ".state.vem." + g, colourScheme = ".vhf." + g, fontOption = "vmp." + g, bodyClasses = ".vkp." + g, metaDescription = ".state.page-meta-description-mrv." + g, googleAnalyticsID = ".state.page-google-analytics-id-mrv." + g, b = mb(g), "" === b && ($(".vei").val("Edit Title Tag"), document.title = "Variant HTML Builder by Medium Rare"), $.localStorage(_b + stateHTML) && ($(".vcr").text(i).removeClass("vih"), $(".vei").val(b), document.title = b || kc, $(".vpp").val($.localStorage(_b + metaDescription)), $(".vpq").val($.localStorage(_b + googleAnalyticsID)), $("#veu").html($.localStorage(_b + stateHTML)), $(".vem").html($.localStorage(_b + f) || ""), d = _.isUndefined(za().attr("via")) ? za().attr("nav-id") : za().attr("via"), sa(d), e = _.isUndefined(D().attr("vhy")) ? D().attr("footer-id") : D().attr("vhy"), y(e), Ha($.localStorage(_b + bodyClasses)), h($.localStorage(_b + colourScheme), !1), s($.localStorage(_b + fontOption), !1), ab(), c(), ua(), cb(g), $.localStorage(_b + ".vhh", g), $.localStorage(_b + ".vhg", i), Eb(), Ua()), $(".vem").find(".vaa").length ? $(".vem").removeClass("empty-vem") : $(".vem").addClass("empty-vem")
    }

    function jb() {
        $(".vhe").addClass("vih"), ra(), t(), $("#veu").html(Yb), $(".viu").html(Yb), c(), $(".vem").html("").addClass("empty-vem"), $(".vei").val(""), $(".vpq").val(""), $(".vpp").val(""), $(".vfj").siblings(".vly").text("Navigation Type"), $(".vdm").siblings(".vly").text("Footer Type"), $(".vgf").removeAttr("vhd")
    }

    function kb(a) {
        var b;
        Sa(a) && Ta(), $("#vhl [viy=" + a + "]").remove(), $.localStorage(_b + ".vhk", $("#vhl").html()), b = $.localStorage.io(_b + ".state.veu." + a), b.remove(), b = $.localStorage.io(_b + ".state.vem." + a), b.remove(), Pa(a)
    }

    function lb(a) {
        return $.localStorage(_b + ".state.veu." + a)
    }

    function mb(a) {
        return $.localStorage(_b + ".vhj." + a) || ""
    }

    function nb(a) {
        return $('#vhl li.viy[viy="' + a + '"]').attr("vjh")
    }

    function ob(a) {
        var b = $.localStorage(_b + "vmp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function pb(a) {
        var b = $.localStorage(_b + ".vkp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function qb(a) {
        var b = $.localStorage(_b + ".vhf." + a);
        return _.isUndefined(b) ? tb() : b
    }

    function rb(a) {
        return $.localStorage(_b + ".state.page-google-analytics-id-mrv." + a) || ""
    }

    function sb(a) {
        return $.localStorage(_b + ".state.page-meta-description-mrv." + a) || ""
    }

    function tb() {
        return $("[viq]").attr("viq")
    }

    function ub() {
        return $.localStorage(_b + ".vhh")
    }

    function vb() {
        var a;
        $(".vhv").css("height", $(window).height()), a = $(".vlv").height() - $(".vlv .vlq").height() - $(".vlv .vls").height() - $(".vlv .vlw").height() - 2 * $(".vlv .vho").height() - $(".vac").height() - 64, $(".vem").css("max-height", a);
        var b = $(window).height() - $(".vem").outerHeight(!1) - $(".vlv .vls").height() - $(".vlz").height() - 9;
        $(".vgm").css("height", b);
        var c = $(window).height() - $(".vlo .vls").height() - $(".vlo .vlq").height() - $(".vgc").height() - 32;
        $(".vfw").css("max-height", c), Ab()
    }

    function wb() {
        void 0 !== window.mr_parallax && (setTimeout(window.mr_parallax.profileParallaxElements, 100), void 0 !== window.mr_parallax.callback && $(".viu .parallax").each(function() {
            window.mr_parallax.callback(this)
        }))
    }

    function xb(a, b) {
        a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", $(".vag").text(a), $(".vae").html(b), $(".vaf").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function yb(a, b, c, d) {
        "function" == typeof d && "undefined" != typeof c && (a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", $(".vqe").text(a), $(".vqf").html(b), $(".vqc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vqc .vqd").text(c).on("click", d), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                $(".vqc .vqd").off("click"), setTimeout(function() {
                    $.modal.close(), vb(), $(".vqc .vqd").text("")
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        }))
    }

    function zb(a, b, c, d) {
        var e, f = "undefined" != typeof a && "" !== a ? a : "",
            g = $("body div.variant-notification-container-mrv"),
            h = $("<div>").addClass("variant-notification-mrv"),
            i = (new Date).getTime(),
            j = "notification-" + i;
        b = "undefined" != typeof b ? b : !1, d = "undefined" != typeof d ? parseInt(d) : 5e3, c = "undefined" != typeof c ? c : "", $("div.variant-notification-container-mrv").length || ($("body").append($('<div class="variant-notification-container-mrv"></div>')), g = "body div.variant-notification-container-mrv"), b && (e = $('<span class="oi">').attr("data-glyph", b), h.append(e)), h.append("<span>" + f + "</span>"), h.addClass(j).addClass("vhr"), h.addClass(c), $(g).append(h), setTimeout(function() {
            $(".variant-notification-mrv." + j).fadeOut(700, function() {
                $(this).remove()
            })
        }, d)
    }

    function Ab() {
        $("#simplemodal-container").draggable({
            handle: ".vfa"
        })
    }

    function Bb() {
        $(".viu section, .viu header, .viu footer").each(function() {
            var a = "." + $(this).attr("vic");
            $(this).find("div.row, .vjd").not(".masonry, .voz").sortable({
                items: "> div:not('.voh')",
                cancel: "[contenteditable], nav, input, textarea, .vnw, .voz",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !1,
                cursor: "move",
                connectWith: a + " div.row, " + a + " .vjd",
                helper: function(a, b) {
                    var c = b.children(),
                        d = b.clone();
                    return d.children().each(function(a) {
                        $(this).width(c.eq(a).width())
                    }), d.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), d.removeClass("vdw").css("border", "none !important"), d
                },
                appendTo: ".viu",
                placeholder: "vje",
                tolerance: "pointer",
                revert: "300",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), gb()
                },
                start: function(a, b) {}
            })
        }), $(".viu table > tbody").not(".voz").each(function() {
            var a = "." + $(this).attr("vic");
            $(this).sortable({
                items: " > tr",
                cancel: "[contenteditable], .vnw, .voz",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !1,
                cursor: "move",
                connectWith: a,
                helper: function(a, b) {
                    var c = (b.closest("table").clone(), b.children()),
                        d = b.clone();
                    return d.children().each(function(a) {
                        $(this).width(c.eq(a).width())
                    }), d.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)").removeClass("vdw").addClass("vnz").css("border", "none !important").css("transition: all 0s ease !important"), d
                },
                appendTo: "parent",
                placeholder: "",
                tolerance: "pointer",
                revert: "100",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), gb()
                },
                start: function(a, b) {
                    b.placeholder.children().each(function() {}), b.placeholder.appendTo(b.placeholder.parent().parent())
                }
            })
        }), $(".viu nav").each(function() {
            "." + $(this).attr("vic");
            $(this).find(".vjd").not(".voz").sortable({
                items: "> li",
                cancel: "[contenteditable], .subnav li, .vnw, .voz",
                scroll: !0,
                opacity: 1,
                zIndex: 999999,
                forcePlaceholderSize: !0,
                forceHelperSize: !0,
                cursor: "move",
                helper: "clone",
                appendTo: ".viu nav:first",
                placeholder: "vje",
                tolerance: "pointer",
                revert: "300",
                update: function(a, b) {
                    var c, d, e, f;
                    c = b.item.attr("vic"), e = b.item, d = $(".viu ." + c).next().attr("vic"), parentID = b.item.parent().attr("vic"), f = b.item.parent(), b.item.is(":last-child") ? $("#veu ." + c).detach().appendTo("#veu ." + parentID) : $("#veu ." + c).detach().insertBefore("#veu ." + d), gb()
                },
                start: function(a, b) {
                    b.helper.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), b.helper.removeClass("vdw").css("border", "none !important")
                }
            })
        })
    }

    function Cb() {
        $(".vjy").unbind("click").click(function() {
            return !1
        })
    }

    function Db() {
        $(".viu form").unbind("submit").bind("submit", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), $('.viu button[type="submit"]').unbind("click").bind("click", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        })
    }

    function Eb() {
        $(".vgc, .vlt, .vdq, .vah, .vdi").removeClass("vqg"), mc = !0
    }

    function Fb() {
        $(".vgc, .vlt, .vdq, .vah, .vdi").addClass("vqg"), mc = !1
    }

    function Gb(a, b) {
        var c, d = $(".viu ." + b);
        d.width();
        return c = W("video", "Edit Video"), $(c).unbind("click").bind("click", function(b) {
            return Hb($("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", $("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function Hb(a) {
        $(".vde").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                $(".vdd").val(a), $(".vda").val($("." + a + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/")), $(".vdg").val($("." + a + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/")), $(".vdb").val($("." + a + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/")), setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ib() {
        var a = $(".vda").val(),
            b = $(".vdg").val(),
            c = $(".vdb").val(),
            d = $("." + $(".vdd").val()),
            e = $(".vdd").val();
        a.length && "video/" === a.substring(0, 6) && (a = a.replace("video/", "../video/")), b.length && "video/" === b.substring(0, 6) && (b = b.replace("video/", "../video/")), c.length && "video/" === c.substring(0, 6) && (c = c.replace("video/", "../video/")), d.find('source[type="video/mp4"]').attr("src", a), d.find('source[type="video/webm"]').attr("src", b), d.find('source[type="video/ogg"]').attr("src", c), Ua(e), gb()
    }

    function Jb(a) {
        return a.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-")
    }

    function Kb(a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }

    function Lb(a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }

    function Mb(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").first().attr("vic");
        return c === e ? !0 : !1
    }

    function Nb(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").last().attr("vic");
        return c === e ? !0 : !1
    }

    function Ob(a) {
        var b = a.attr("vic"),
            c = a.parent().children().not(".vib, .vjb"),
            d = c.index(a),
            e = d > 0 ? c.eq(d - 1).attr("vic") : b;
        return e
    }

    function Pb(a, b) {
        if (!a || !a.tagName) return "";
        var c, d, e = document.createElement("div");
        return e.appendChild(a.cloneNode(!1)), c = e.innerHTML, b && (d = c.indexOf(">") + 1, c = c.substring(0, d) + a.innerHTML + c.substring(d)), e = null, c
    }

    function Qb(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createElement("br");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function Rb(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createTextNode(" ");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }
    var Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, ec, fc, gc = "",
        hc = ".vnn, ul.slides > li, ul.slides .owl-item > li , .masonry .project, .accordion li, .accordion, .masonry__item",
        ic = ".vnn, .grid-layout, .tabbed-content, .tabs",
        jc = [{
            name: "Campaign Monitor",
            action: "createsend.com",
            handler: K
        }, {
            name: "MailChimp",
            action: "list-manage.com",
            handler: J
        }],
        kc = "Edit Page Title",
        lc = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        mc = !1;
    defaults = {
        ui: {
            sidebar: {
                navOptionsListText: "Nav Type",
                footerOptionsListText: "Footer Type"
            }
        }
    }, Xb = new Date, this.removeIconButtons = !0, $(".vkg").text(Xb.getFullYear()), $("#blank-veu").html($("#veu").html()), c(), $(window).resize(vb), vb(), Xa(), ea(), Sb = V(), Tb = P(), Ub = Q(), eb(), pa(), x(), f(), q(), Da(), Vb = Ea(), Wb = Ca(), $(window).load(function() {
        d(), $("[delay-src]").each(function(a, b) {
            b = $(this), b.attr("src", b.attr("delay-src")).removeAttr("delay-src")
        }), Sb.forEach(function(a) {
            var b = a.headString;
            b = b.replace("href=&quot;css/", 'href="theme/css/').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), $("head").prepend(b)
        }), b()
    });
    try {
        $.isFunction(L)
    } catch (nc) {
        $(".vml").removeClass("vih"), $(".vdq, .vah, .vgy").click(function() {
            xb("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="#" target="_blank">purchase the full version</a>.')
        })
    }
    $(".vfw").find(".ves").length && $(".vfw").removeClass("empty-vfw"), $(document).on("click", ".vhu", function() {
        h($(this).attr("viz"), !0)
    }), $(document).bind("mouseup", function(a) {
        $(a.target).closest(".vnc, .vnj").length || 1 === a.which && (a.ctrlKey || ($(".vhw").hide(), $(".vni").removeClass("vhr")))
    }), $(document).on("click", ".vav", function() {
        $(".vhw").hide()
    }), $(document).on("click", ".vkd", function() {
        $(".vkd").remove()
    }), $(document).on("contextmenu", "[vic]", function(a) {
        if (a.shiftKey) return !0;
        $(".vaw").removeClass("vih"), $(".vcg").text("Edit Image"), $(".vct").text("Edit Link"), $(".vfq").addClass("vih");
        var b, c, d, e, f, g, h, m, p, q = $("#veu ." + $(this).attr("vic"));
        $(q).closest("section");
        return htmlTags = {
            SECTION: "Section",
            LI: "List Item",
            H1: "Heading",
            H2: "Heading",
            H3: "Heading",
            H4: "Heading",
            H5: "Heading",
            H6: "Heading",
            P: "Paragraph",
            SPAN: "Span",
            UL: "Unordered List",
            DIV: "Div",
            IMG: "Image",
            STRONG: "Strong Text",
            EM: "Emphasised Text",
            I: "Icon",
            A: "Link",
            INPUT: "Input",
            BLOCKQUOTE: "Quote",
            FIGCAPTION: "Caption",
            TD: "Teble Cell",
            TH: "Table Heading",
            FORM: "Form",
            ADDRESS: "Address"
        }, $(".vau").text(htmlTags[q.get(0).tagName]).removeClass("vih"), $(q).data("vip") ? Ia(q, !1, !1) : $(q).closest("[data-vip]").length && Ia($(q).closest("[data-vip]"), !1, !1), Ga($(this).attr("vic")), q.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li:not(ul.slides > li, ul.slides .owl-item > li), ul, div, blockquote, figcaption, address") && ($(".var").unbind("click").bind("click", function() {
            i(q.attr("vic"))
        }), $(".vbw").unbind("click").bind("click", function() {
            j(q.attr("vic"))
        })), q.is("a") && ($(".vct").removeClass("vih"), $(".vct").unbind("click").bind("click", function() {
            ja(q.attr("vic"))
        }), $(".var").unbind("click").bind("click", function() {
            i(q.attr("vic"))
        }), $(".vbw").unbind("click").bind("click", function() {
            j(q.attr("vic"))
        }), q.parent().is("nav li") && !q.parent().is("nav li:last-child") && ($(".vqh").removeClass("vih"), $(".vqh").unbind("click").bind("click", function() {
            l(q.parent().attr("vic"))
        })), q.parent().is("nav li") && !q.parent().is("nav li:first-child") && ($(".vqi").removeClass("vih"), $(".vqi").unbind("click").bind("click", function() {
            k(q.parent().attr("vic"))
        }))), q.closest("a").length && ($(".vct").removeClass("vih"), q.closest("a").hasClass("ven") && ($(".vau").text("Lightbox Thumbnail"), $(".vct").text("Edit Lightbox Link"), $(".vcg").text("Edit Thumbnail Image")), f = q.closest("a").attr("vic"), $(".vct").unbind("click").bind("click", function() {
            ja(f)
        })), q.closest("section, header").find(".video-wrapper").children("video").length && (q.is(".overlay") && ($(".vau").text("Video Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = q.closest("section, header").find(".video-wrapper").children("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
            Hb($(video).attr("vic"))
        }), q.closest("section, header").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba(q.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"))
        })), q.closest(".divider-background").find(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba(q.closest(".divider-background").find(".background-image").attr("vic"))
        }))), q.closest(".slides li").find(".video-wrapper").children("video").length && (q.is(".overlay") && ($(".vau").text("Video Slide Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = q.closest(".slides li").find(".video-wrapper").children("video"), $(".vcg").text("Edit Poster Image"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
            Hb($(video).attr("vic"))
        })), q.closest("video").length && ($(".vau").text("Video"), $(".var").addClass("vih"), $(".vbw").addClass("vih"), video = q.closest("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
            Hb($(video).attr("vic"))
        })), q.closest(".slides li").find(".video-wrapper").children("video").length && q.closest(".slides li").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba(q.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"))
        })), q.is("p , div, span, figure, article, img") && (q.closest('[class*="medium-"]').length && (closestElement = q.closest('[class*="medium-"]'), closestElement.hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
            n(closestElement.attr("vic"))
        })), closestElement.hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
            o(closestElement.attr("vic"))
        }))), q.parent().is('div [class*="medium-"]') && (q.parent().hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
            o(q.attr("vic"))
        })), q.parent().hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
            n(q.attr("vic"))
        }))), q.closest('[class*="col-md-"]').length && (closestElement = q.closest('[class*="col-md-"]'), closestElement.hasClass("col-md-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
            n(closestElement.attr("vic"))
        })), closestElement.hasClass("col-md-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
            o(closestElement.attr("vic"))
        }))), q.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (closestElement = q.closest('[class*="col-sm-"]:not([class*="col-md-"])'), closestElement.hasClass("col-sm-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
            n(closestElement.attr("vic"))
        })), closestElement.hasClass("col-sm-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
            o(closestElement.attr("vic"))
        }))), q.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (closestElement = q.closest('[class*="col-xs-"]:not([class*="col-md-"])'), closestElement.hasClass("col-xs-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
            n(closestElement.attr("vic"))
        })), closestElement.hasClass("col-xs-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
            o(closestElement.attr("vic"))
        })))), q.is(".cover-wrapper, .hover-state") && (b = q.closest("figure").find("img").get(0), c = q.closest("a").first(), $(b).is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba($(b).attr("vic"))
        })), q.closest("figure").length && (g = q.closest("figure").attr("vic"), g.length && ($(".var").unbind("click").bind("click", function() {
            i(g)
        }), $(".vbw").unbind("click").bind("click", function() {
            j(g)
        })))), (q.parents("nav, header").length || q.is("nav") || q.is("header")) && (q.is("nav, header") ? (e = q.attr("nav-id"), $(".vau").text("Nav"), $(".vaw").addClass("vih")) : (e = q.closest("nav").attr("nav-id"), $(".vau").text("Nav > " + $(".vau").text())), $(".vfe").removeClass("vih"), $(".vfg[nav-id=" + e + "]").each(function() {
            $(".viu nav").hasClass($(this).attr("nav-class")) || $(this).removeClass("vih")
        }), $(".vhw .vaw").not(".vih").length || $(".vfe .vfm").removeClass("vih")), q.closest(".hover-background").length && (b = q.closest("section").find(".hover-background .background-image").get(0), $(b).is("img") && ($(".vcg").text("Edit Background Image").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba($(b).attr("vic"))
        })), $(q).closest(".hover-background").find(".foreground-image-holder .background-image").each(function(a) {
            var b = a + 1,
                c = $(this);
            newButton = $(".vcg").clone(), newButton.removeClass("vcg").addClass("vkd edit-foreground-" + b), newButton.text("Edit Layer " + b + " Image"), $(this).attr("src"), newButton.unbind("click").bind("click", function() {
                ba(c.attr("vic"))
            }), newButton.insertBefore($(".vcg"))
        })), q.is("i") && ($(".vau").text("Icon"), $(".vcc").removeClass("vih"), $(".vcc").unbind("click").bind("click", function() {
            X(q.attr("vic"))
        }), $(".var").unbind("click").bind("click", function() {
            i(q.attr("vic"))
        }), $(".vbw").unbind("click").bind("click", function() {
            j(q.attr("vic"))
        })), q.is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba(q.attr("vic"))
        }), $(".var").unbind("click").bind("click", function() {
            i(q.attr("vic"))
        }), $(".vbw").unbind("click").bind("click", function() {
            j(q.attr("vic"))
        })), q.is("section") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), q.is("header") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), q.closest(".veo").length && (d = $(q).closest(".veo"), b = $(q).closest(".veo").find("img"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
            ba(b.attr("vic"))
        }), $(".var").removeClass("vih").unbind("click").bind("click", function() {
            i(d.attr("vic"))
        }), $(".vbw").removeClass("vih").unbind("click").bind("click", function() {
            j(d.attr("vic"))
        })), q.hasClass("vns") && $(".var").unbind("click").addClass("vih"), Fa($(this).attr("vic"), !0), h = $("body > .vhw"), h.find(".vaw:not(.vih)").length ? (m = $(window).width(), p = $(window).height(), a.pageX + h.outerWidth() > m ? h.css("left", m - h.outerWidth()) : h.css("left", a.pageX), a.pageY + h.outerHeight() > p ? h.css("top", p - h.outerHeight()) : h.css("top", a.pageY), vb(), h.show()) : h.hide(), !1
    }), $(document).on("click", ".vdi:not(.vqg)", function() {
        p("all")
    }), $(document).on("click", ".vmv", function() {
        s($(this).attr("vmw"), !0)
    }), $(".vfy").on("click", function() {
        "" !== $(".vfz").val() && (v(), $.modal.close())
    }), $(".vfz").keyup(function(a) {
        13 === a.keyCode && "" !== $(".vfz").val() && (v(), $.modal.close())
    }), $(document).on("keyup paste input", "footer.vir", function() {
        var a = $(this);
        u(a), a.removeClass("vir").addClass("vhz")
    }), $(document).on("keyup paste input", "footer.vhz", function() {
        t()
    }), $(document).on("keyup paste input", ".vfz", function() {
        "" !== $(this).val() ? $(".vfy").show() : $(".vfy").hide()
    }), $(".vfl").click(function() {
        $(this).closest(".vho").removeClass("vhr");
        var a = $(this).text();
        $(this).closest(".vho").find(".vly").text(a), z()
    }), $(document).on("click", ".vbx", function() {
        var a = $(this).parent().attr("vid");
        $(this).parent().remove(), $("." + a).remove(), t()
    }), $(document).on("click", ".vdl", function() {
        y($(this).attr("vid"), !0), $(this).closest(".vho").removeClass("vhr"), $(".vhe").addClass("vih");
        var a = $(this).text();
        $(this).closest(".vho").find(".vly").text(a)
    }), $(".vpk").on("click", function() {
        I() === !0 && $.modal.close()
    }), $(document).on("click", ".vdq:not(.vqg)", function() {
        output = L(ub()), $(".vfu").html("").append(output), $(".vdr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                switch (window.location.protocol) {
                    case "http:":
                    case "https:":
                    case "file:":
                        $(".vgn").click(function() {
                            $(".vfu").select()
                        }), $(".vgn").show(), $(".code-copy-simple").show(), $(".vfu").select()
                }
                setTimeout(function() {
                    $(".simplemodal-container").addClass("vko"), $(".simplemodal-overlay").addClass("vko")
                }, 100), vb()
            },
            onClose: function() {
                setTimeout(function() {
                    $.modal.close(), vb()
                }, 300), $(".simplemodal-container").removeClass("vko"), $(".simplemodal-overlay").removeClass("vko")
            }
        }), "" !== $.localStorage(_b + ".vbu") && $.localStorage(_b + ".vbu", $("#image-edit-chooser").attr("vbv"))
    }), $(".vgy").click(function() {
        var a, b = "",
            c = "";
        b = $.localStorage(_b + ".vhg"), b = "undefined" != typeof $.localStorage(_b + ".vhg") ? $.localStorage(_b + ".vhg") : "page", c = $(".vfu").val(), a = new Blob([c], {
            type: "text/plain;charset=utf-8"
        }), saveAs(a, Jb(b) + ".html")
    }), $(document).on("click", ".vah:not(.vqg)", function() {
        var a, b, c = new JSZip,
            d = [],
            e = new Date;
        return $("#vhl .viy").length ? ($("#vhl .viy").each(function() {
            d.push($(this).attr("viy"))
        }), a = "variant-exported-" + Jb(e.toDateString()), d.forEach(function(a, b) {
            var d, f;
            e = new Date, f = $('#vhl [viy="' + a + '"]').attr("vjh"), d = $('<textarea id="variant-temp-textarea-mrv" />').append(L(a)), f = 1 === $('#vhl [vjh="' + f + '"]').length ? Jb(f) + ".html" : Jb(f) + "-" + e.getTime() + ".html", c.file(f, d.val())
        }), b = c.generate({
            type: "blob",
            compression: "deflate"
        }), void saveAs(b, "html-pages-" + Jb(e.toDateString()) + ".zip")) : void xb("Export HTML", "There was nothing to export.<br /><br />Save at least one page before exporting.")
    }), $(document).on("keyup paste input", ".vcd .vok", function() {
        var a = $(".vcd .vok").val();
        "" !== a ? (Y(a), $(".vcd .vol").removeClass("vih")) : Z()
    }), $(document).on("click", ".voj li:not(.vhr)", function() {
        var a = $(this);
        $(".voj li.vhr, .variant-icon-sets-mrv li.vhr").removeClass("vhr"), a.addClass("vhr"), $(".variant-icon-sets-mrv li.vou").eq(a.index()).addClass("vhr"), $(".variant-icon-sets-mrv li.vov").eq(a.index()).addClass("vhr")
    }), $(document).on("click", ".vcd .vol", function() {
        Z()
    }), $(document).on("click", ".viu i", function() {
        var a = $(this);
        a.hasClass("catch-double-click") ? X(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), $(document).on("click", "div.vam", function() {
        var a = $("." + $("#vgo").val()),
            b = $(this).find("i");
        a.hasClass("icon-large") && a.addClass("keep-large-icon").removeClass("icon-large"), a.hasClass("icon-lg") && a.addClass("keep-lg-icon").removeClass("icon-lg"), a.hasClass("icon--lg") && a.addClass("keep--lg-icon").removeClass("icon--lg"), a.hasClass("icon-sm") && a.addClass("keep-sm-icon").removeClass("icon-sm"), a.hasClass("icon--sm") && a.addClass("keep--sm-icon").removeClass("icon--sm"), Sb.forEach(function(b) {
            a.alterClass(b.iconPrefix + "*", ""), a.removeClass(b.iconClass)
        }), a.addClass(b.attr("icon-class")), a.hasClass("keep-large-icon") && a.removeClass("keep-large-icon").addClass("icon-large"), a.hasClass("keep-lg-icon") && a.removeClass("keep-lg-icon").addClass("icon-lg"), a.hasClass("keep--lg-icon") && a.removeClass("keep--lg-icon").addClass("icon--lg"), a.hasClass("keep-sm-icon") && a.removeClass("keep-sm-icon").addClass("icon-sm"), a.hasClass("keep--sm-icon") && a.removeClass("keep--sm-icon").addClass("icon--sm"), aa(), gb()
    }), $(".vcn").on("click", function() {
        ca(), $.modal.close()
    }), $(".vco").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        $(".vco").val(b), $(".vcp").attr("src", b)
    }, !1), $(".vcp").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        $(".vco").val(b), $(".vcp").attr("src", b)
    }, !1), $(".vco").get(0).addEventListener("dragover", function(a) {
        a.preventDefault(), a.stopPropagation()
    }, !1), $(".vco, .vcf").keyup(function(a) {
        13 === a.keyCode && (ca(), $.modal.close())
    }), $(".vhp").click(function() {
        $(".vdz,.vcl").toggleClass("vhr")
    }), $(".vcp").click(function() {
        $(".vhp").trigger("click")
    }), $(".vch").change(function(a) {
        da(a)
    }), $(".vee").click(function() {
        $(".vch").focus().trigger("click")
    }), $(document).on("click", ".vcj", function() {
        var a = $(this).get(0);
        $(".vco").val($(this).attr("src").replace("../img/", "img/")), $(".vcp").attr("src", $(this).attr("src")), $(".veb").text(a.naturalWidth + "x" + a.naturalHeight + " pixels"), $(".vdz,.vcl").toggleClass("vhr")
    }), $(document).on("click", ".no-image", function() {
        ga(this)
    }), $(document).on("click", ".viu img", function() {
        var a = $(this);
        a.hasClass("catch-double-click") ? ba(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), $(document).on("mouseenter", ".viu img:not(.viu .slides > li > img, .viu .slides .owl-item img, .voh img, ul.flickr-feed img )", function(a) {
        $('[vof="' + $(this).attr("vic") + '"]').length || ha($(this).attr("vic"), $(this).attr("vic"))
    }), $(document).on("mouseenter", '.viu div[class*="col-"]', function(a) {
        var b = $(this);
        b.find(".image-holder, .background-image-holder:not(.voh .background-image-holder, .viu .slides > li > img, .viu .slides .owl-item img, .viu .slides > li > .background-image-holder, .viu .slides .owl-item > li > .background-image-holder, .viu section > .background-image-holder, .viu header > .background-image-holder, .viu footer > .background-image-holder)").each(function() {
            var a = $(this);
            a.closest('div[class*="col-"]').find("div.hover-state").length && !a.closest('div[class*="col-"]').find("div.hover-state").find(".vnv").length ? $('[vof="' + a.find("img").attr("vic") + '"]').length || ha(a.find("img").attr("vic"), a.closest('div[class*="col-"]').find(".hover-state").attr("vic")) : a.find(".vnv").length || $('[vof="' + a.find("img").attr("vic") + '"]').length || ha(a.find("img").attr("vic"), a.attr("vic"))
        })
    }), this.chooserImageError = function(a) {
        $(a).parent().addClass("no-image"), $(a).parent().find(".vjn").html("Copy <strong>" + $(a).attr("vis") + "</strong> to your img folder then click here to refresh."), $(a).css("display", "none")
    }, this.defaultImageError = function(a) {
        $(a).parent().remove(), $(a).remove()
    }, $(".ved").click(function() {
        $(".vef").focus().trigger("click")
    }), $(".vef").change(function(a) {
        "variant" === $(this).val().split(".").pop() ? ia(a) : xb("Please select a .variant file", "Variant cannot import plain HTML files. <br /><br />You can import .variant files that have been exported from Variant here, or by someone else.")
    }), $(".veh").change(function(a) {
        $(".vcu").val($(this).val())
    }), $(".vcu").keyup(function(a) {
        13 === a.keyCode && "" !== $(".vcu").val() && (ka(), $.modal.close())
    }), $(".vcx").on("click", function() {
        ka(), $.modal.close()
    }), $(document).on("click", ".viu a, .viu nav a, .viu header a", function() {
        var a = $(this);
        return a.hasClass("catch-double-click") ? ja(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300)), !1
    }), $(document).on("mouseenter", ".viu .voh:not(.vib, .vjb)", function(a) {
        var b, c, d, e, f = "",
            g = $(".viu ." + $(this).attr("vic")),
            h = g.parent().find(".voh").not(".vjb , .vib").length > 1 ? !0 : !1,
            m = Mb(g, ".voh"),
            n = Nb(g, ".voh");
        b = $('<div class="vnw"></div>'), h && !m && (e = W("arrow-thick-left", "Sort Previous"), $(e).unbind("click").bind("click", function(a) {
            return k(g.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(e)), h && (c = W("minus", "Delete"), $(c).unbind("click").bind("click", function(a) {
            return j(g.attr("vic"), g.is(".variant-permanent-delete-mrv")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(c)), moleculeImages = g.find("img:not(.vib)"), moleculeImages.each(function() {
            var a = $(this);
            b.append(ha(a.attr("vic"), !1))
        }), Wb.options.forEach(function(a) {
            g.is(a.selector) && (attributeButton = La(a, !1, g.attr("vic")), b.append(attributeButton)), g.find(a.selector).length && (attributeButton = La(a, !1, g.find(a.selector).first().attr("vic")), b.append(attributeButton))
        }), d = W("plus", "Clone"), $(d).unbind("click").bind("click", function(a) {
            return i(g.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(d), h && !n && (f = W("arrow-thick-right", "Sort Next"), $(f).unbind("click").bind("click", function(a) {
            return l(g.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(f)), g.append(b)
    }), $(document).on("keyup paste input", ".vgb", function() {
        "" !== $(this).val() ? $(".vga").removeClass("vih") : $(".vga").addClass("vih")
    }), $(".vgb").keyup(function(a) {
        13 === a.keyCode && "" !== $(".vgb").val() && (oa(), $.modal.close())
    }), $(".vga").on("click", function() {
        oa(), $.modal.close()
    }), $(document).on("keyup paste input", "nav.vir, header.vhz", function() {
        ra()
    }), $(document).on("keyup paste input", "nav.vir, header.vir", function() {
        na($(this)), $(this).removeClass("vir").addClass("vhz")
    }), $(".vfo").click(function() {
        $(".vmm").closest(".vkq").remove(), $(this).closest(".vho").removeClass("vhr");
        var a = $(this).text();
        $(this).closest(".vho").find(".vly").text(a), ta()
    }), $(document).on("click", ".vby", function() {
        var a = $(this).parent().attr("nav-id");
        $(this).parent().remove(), $("." + a).remove(), ra()
    }), $(document).on("click", ".vfi", function() {
        sa($(this).attr("nav-id"), !0), $(this).closest(".vho").removeClass("vhr");
        var a = $(this).text();
        $(this).closest(".vho").find(".vly").text(a)
    }), $(document).on("click", ".vfg", function() {
        var a = $("." + xa());
        $(".vev").each(function() {
            var b = $(this).data("vff");
            b.forEach(function(b) {
                a.removeClass(b.className)
            })
        }), a.addClass($(this).attr("nav-class")), gb(), Ua()
    }), $(".vgk").click(Ja), $(".vdh").click(Ja), $(document).on("click", ".vks", function() {
        var a = $(this).parent().attr("optionalclass"),
            b = $(this).parent().attr("classtarget");
        $(this).hasClass("vkr") || ($(this).parent().find(".vks").toggleClass("vkr"), $(this).hasClass("choice-button-on") ? $(b).addClass(a) : $(b).removeClass(a)), $(b).each(function() {
            "" === $(this).attr("class") && $(this).removeAttr("class")
        }), $(this).hasClass("refresh") && Ua(b), gb()
    }), $(document).on("click", ".vkt", function(a) {
        var b = $(this).parent().attr("optionalClass"),
            c = $(this).parent().attr("classtarget"),
            d = "";
        a.stopPropagation(), $(this).hasClass("vku") ? ($(c).removeClass(b), d = !1) : ($(c).addClass(b), d = !0), $(this).toggleClass("vku"), $(c).each(function() {
            "" === $(this).attr("class") && $(this).removeAttr("class")
        }), $(this).hasClass("refresh") && Ua(c), "parallax" === b && (wb(), "undefined" != typeof window.mr_parallax && window.mr_parallax.callback(c)), "scroll-assist" === b && "undefined" != typeof window.mr_parallax && (window.mr_parallax.mr_scrollAssist = d), gb()
    }), $(document).on("click", ".vkv", function() {
        var a = $(this).attr("optionalclass"),
            b = $(this).parent().attr("classtarget");
        $(this).hasClass("vkr") || (removeClass = $(this).parent().find(".vkv.vkw").attr("optionalclass"), $(this).parent().find(".vkv").removeClass("vkw"), $(this).addClass("vkw"), $(b).removeClass(removeClass).addClass(a)), $(b).each(function() {
            "" === $(this).attr("class") && $(this).removeAttr("class")
        }), gb(), $(this).hasClass("refresh") && Ua(b)
    }), $(document).on("click", ".vno", function() {
        Ia("." + $(this).attr("vnr"), $(this).data("vnq"), !0)
    }), $(".vbj").on("click", function() {
        Ka(), $.modal.close()
    }), $(".vbg").keyup(function(a) {
        13 === a.keyCode && (Ka(), $.modal.close())
    }), $(document).on("click", ".vgc:not(.vqg)", function() {
        fb(), $(".vfw").removeClass("empty-vfw")
    }), $(".vpt").click(function() {
        mc === !0 && gb();
        var a = $(".vge .vjl");
        a.attr("vpx", a.text()).text("New Page");
        var b = $(".vge .vew p:first");
        b.attr("vpx", b.text()).text("Give your new page a name."), fb("vhd"), $(".vfw").removeClass("empty-vfw")
    }), $(document).on("keyup paste input", ".vgf", function() {
        "" !== $(this).val() ? $(".vgd").removeClass("vih") : $(".vgd").addClass("vih")
    }), $(".vgf").keyup(function(a) {
        13 === a.keyCode && "" !== $(".vgf").val() && (hb(!0), $.modal.close())
    }), $(".vgd").on("click", function() {
        "" !== $(".vgf").val() && (hb(), $.modal.close())
    }), $(document).on("click", ".ves", function() {
        ib($(this).attr("state-id"))
    }), $(document).on("click", ".vdj", function() {
        return p($(this).parent().attr("state-id")), !1
    }), $(document).on("click", ".vbz", function() {
        var a = $(this).parent(),
            b = a.attr("state-id"),
            c = a.attr("vjh");
        return yb("Confirm Delete", "Are you sure you want to delete " + c + "?", "Delete", function() {
            kb(b)
        }), !1
    }), $(document).on("click", ".vpy", function() {
        var a = $(this).parent().attr("state-id"),
            b = $(this).parent().attr("vjh"),
            c = $(".vge .vjl"),
            d = $(".vge .vew p:first"),
            e = $(".vge .vgf");
        return c.attr("vpx", c.text()).text("Rename " + b), d.attr("vpx", d.text()).text("Give your page a new name."), e.attr("viy", a), e.attr("vqa", b), e.val(b), fb("vpz"), !1
    }), $(".vei").on("blur keyup paste input", function() {
        var a = "undefined" == typeof $(this).val() ? "" : $(this).val();
        document.title = "" !== a ? a : kc, $.localStorage(_b + ".vhh") ? ($('#vhl [viy="' + $.localStorage(_b + ".vhh") + '"]').attr("page-title", a), $.localStorage(_b + ".vhk", $("#vhl").html())) : $.localStorage(_b + ".vhj", a), gb()
    }), $(document).on("click focus blur keyup paste input", ".vei.vlx", function() {
        $.localStorage(_b + ".vhh", ""), $.localStorage(_b + ".vhg", ""), $(".vhe").addClass("vih"), $(this).removeClass("vlx")
    }), $(".vpp").on("blur keyup paste input", function() {
        gb()
    }), $(".vpq").on("blur keyup paste input", function() {
        gb()
    }), $(document).on("click", ".vni", function() {
        $(this).toggleClass("vhr")
    }), $(document).on("contextmenu", ".vni", function(a) {
        a.stopPropagation(), $(this).trigger("click")
    }), $(document).on("click", ".vca", function() {
        var a = $(this).attr("vbq");
        $("#veu ." + a).remove(), $(".viu ." + a).remove(), $("[vik=" + a + "]").remove(), $(this).parent().remove(), Ua(), $(".vem").find(".vaa").length ? $(".vem").removeClass("empty-vem") : $(".vem").addClass("empty-vem"), $(".viu .vnj").remove(), vb(), wb()
    }), $(document).on("keydown", ".vaa span", function(a) {
        return 13 === a.keyCode ? (a.stopPropagation(), !1) : void 0
    }), $(document).on("keyup paste input", ".vaa span", function(a) {
        return 13 === a.keyCode ? (a.stopPropagation(), !1) : (la($(this)), !0)
    }), $(".vap").click(function() {
        $('.vfj [vit="vhz"]').remove(), $("#vbn").html(""), $.localStorage(_b + ".vbo", ""), $(".vap").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
            $(".vap").html("Clear Navs").removeClass("vak").addClass("val")
        }, 1500)
    }), $(".vao").click(function() {
        $('.vdm [vit="vhz"]').remove(), $.localStorage(_b + ".vbm", ""), $(".vao").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
            $(".vao").html("Clear Footers").removeClass("vak").addClass("val")
        }, 1500)
    }), $(".vaq").click(function() {
        var a;
        $("#vhl li").each(function() {
            var a, b = $(this).attr("viy");
            a = $.localStorage.io(_b + ".state.veu." + b), a.remove(), a = $.localStorage.io(_b + ".state.vem." + b), a.remove(), $(this).remove()
        }), $(".vfw div").remove(), $(".vfw").addClass("empty-vfw"), a = $.localStorage.io(_b + ".state.veu"), a.remove(), a = $.localStorage.io(_b + ".state.vem"), a.remove(), a = $.localStorage.io(_b + ".vhj"), a.remove(), a = $.localStorage.io(_b + ".vhh"), a.remove(), a = $.localStorage.io(_b + ".vhg"), a.remove(), a = $.localStorage.io(_b + ".vhk"), a.remove(), $(".vaq").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
            $(".vaq").html("Clear Pages").removeClass("vak").addClass("val")
        }, 1500)
    }), $(".vpc").click(function() {
        $.localStorage(_b + ".gallery.images", ""), setTimeout(function() {
            $(".vpc").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
        }, 1500)
    }), $(".van").click(function() {
        $(".vfw div").remove(), $("#vhl li").remove(), window.localStorage.clear(), $(".van").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
            $(".van").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
        }, 1500)
    }), $(".viu").click(function() {
        $(".vjq").removeClass("vgq")
    }), $(".vjq .vex").click(function() {
        $(this).closest(".vjq").removeClass("vgq")
    }), $(".vgw").click(function() {
        $(".vkm").toggleClass("vme"), $(".vgw").toggleClass("vmg")
    }), $(".vjc").mouseenter(function() {
        $(".vkm").removeClass("vjz")
    }), $(".vlf li").click(function() {
        $(".vlf li").removeClass("vhr"), $(this).addClass("vhr");
        var a = $(this).index() + 1;
        $(".vlp").removeClass("vhr"), $(".vlp:nth-child(" + a + ")").addClass("vhr")
    }), $(".vac").click(function() {
        _a(), $(".vgm").click(), $(".vlv").toggleClass("vmf"), $(".vlv").find(".vho").removeClass("vhr"), vb()
    }), $(".vma").click(function() {
        $(".vgi").toggleClass("vhr"), $(this).toggleClass("vhr")
    }), $(".vgh").click(function() {
        $(".vgi").removeClass("vhr"), $(".vma").removeClass("vhr")
    }), $(".vlm").click(function() {
        $a()
    }), $(".vho span").click(function() {
        $(this).closest(".vho").toggleClass("vhr"), setTimeout(function() {
            vb()
        }, 301)
    }), $(document).on("click", ".vgl", function() {
        var a = $(this);
        a.hasClass("catch-double-click") ? $(".vad").toggleClass("vhr") : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300), Ya($(this).attr("vgv"))), $(".vem").removeClass("empty-vem"), vb()
    }), $(".vev").each(function() {
        var a = ($(this).data("vjt"), $(this).attr("id"));
        $(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + $(this).attr("data-vjt") + "</li>")
    }), $("#vdk .vim").each(function() {
        var a = $(this).attr("vbr"),
            b = $(this).attr("id");
        $(".vdm").append('<li class="vdl" vid="' + b + '" vit="vir">' + a + "</li>")
    }), $(document).on("click", ".vgr", function() {
        $(".vib").toggleClass("vib vjb"), $(this).toggleClass("vhr vdv vgr")
    }), $(document).on("click", ".vdv", function() {
        $(".vjb").toggleClass("vib vjb"), $(this).toggleClass("vgr vdv vhr")
    }), $(document).on("click", ".vgh", function() {
        if ($(".vgh").removeClass("vhr"), $(this).addClass("vhr"), "*" === $(this).attr("vbp")) return $(".vgl").removeClass("vih"), void $(".vma span").text("All");
        $(".vgl").addClass("vih"), $('.vgl[vbp*="' + $(this).attr("vbp") + '"]').removeClass("vih");
        var a = $(this).text();
        $(".vma span").text(a), vb()
    }), $(document).on("mouseenter", ".viu ul.slides:not(.vjx)", function(a) {
        var b = $(this);
        try {
            b.parent().flexslider("pause")
        } catch (c) {}
        try {
            b.closest(".slider").flexslider("pause")
        } catch (c) {}
        try {
            b.trigger("stop.owl.autoplay")
        } catch (c) {}
        b.addClass("paused"), $("#veu .vnx").removeClass("vnx"), db(b.attr("vic")), $("#veu ." + b.attr("vic")).addClass("vnx")
    }), $(document).on("mouseleave", ".viu ul.slides.paused:not(.vjx)", function(a) {
        var b = $(this);
        try {
            b.parent().flexslider("play")
        } catch (c) {}
        try {
            b.closest(".slider").flexslider("play")
        } catch (c) {}
        b.removeClass("paused")
    }), -1 !== navigator.userAgent.indexOf("NT 6.") && $("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>"), $(".vet").click(function() {
        $(".vet").addClass("vih"), ib()
    }), $(".vhd").click(function() {
        Qa(!0), bb()
    }), $(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function(a) {
        if ("paste" === a.type) {
            a.preventDefault();
            var b = (a.originalEvent || a).clipboardData.getData("text/plain").replace(/\n/g, "<br>");
            document.execCommand("insertHtml", !1, b)
        }
        $(this).children().length ? "" === $(this).html() && $(this).html("&nbsp;") : "" === $(this).text() && $(this).text(" "), $("#veu ." + $(this).attr("vic")).html($(this).html()), gb()
    }), $(document).on("keydown", ".viu [contenteditable]", function(a) {
        return 13 === a.keyCode ? Qb(a) ? !0 : !1 : void 0
    }), $(document).on("keydown", '.viu [type="submit"]', function(a) {
        return 32 === a.keyCode ? Rb(a) ? !0 : !1 : void 0
    }), $(document).on("blur keyup paste input", ".vir:not(nav,header,footer)", function() {
        $(this).removeClass("vir").addClass("vhz")
    }), $(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, label, address", function() {
        $(this).addClass("vdw")
    }), $(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, .vnu, label, address", function() {
        $(this).removeClass("vdw")
    }), $(".viu").on("mouseenter", "section, header, footer", function() {
        Va($(this).attr("vic"))
    }), $(document).on("mouseenter", '[vic] [class*="medium-"]', function(a) {
        gc = $(this).attr("vic")
    }), $(document).on("mouseenter", '[vic] [class*="col-md-"]', function(a) {
        gc = $(this).attr("vic")
    }), $(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function(a) {
        gc = $(this).attr("vic")
    }), $(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function(a) {
        gc = $(this).attr("vic")
    }), $(document).on("keyup", document, function(a) {
        gc.length && a.ctrlKey && (219 === a.keyCode && o(gc), 221 === a.keyCode && n(gc))
    }), $(document).on("click", "a.vjx", function(a) {
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }), $("img").on("dragstart", function(a) {
        a.preventDefault()
    }), $(document).on("submit", ".viu form", function(a) {
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }), $(document).on("click", ".vjb", function() {
        $(this).removeClass("vjb vib").addClass("vjm"), $("#veu ." + $(this).attr("vic")).removeClass("vjb vib").addClass("vjm"), $(this).attr("vjw") && (also = $(this).closest("nav, header, section, footer").find($(this).attr("vjw")).attr("vic"), $(".viu ." + also).removeClass("vjb vib").addClass("vjm"), $("#veu ." + also).removeClass("vjb vib").addClass("vjm")), ra(), t(), gb()
    }), $(document).on("mouseleave", '.viu .vnu, .viu div[class*="col-"], .viu .embed-video-container, .viu .local-video-container, .viu .media-embed-container, .viu ul.slides, .viu .slider, .viu .voh', function(a) {
        window.mr_variant.removeIconButtons === !0 && $(this).find(".vnw").remove()
    }), $(".vdf").on("click", function() {
        Ib(), $.modal.close()
    }), $(".vda, .vdg, .vdb").keyup(function(a) {
        13 === a.keyCode && (Ib(), $.modal.close())
    }), $(document).on("mouseenter", ".viu .embed-video-container:not(.voh .embed-video-container, .viu .slides > li > .embed-video-container), .viu .media-embed-container:not(.voh .media-embed-container, .viu .slides > li > .media-embed-container)", function() {
        var a = $('<div class="vnw"></div>'),
            b = $(this).find("iframe");
        Wb.options.forEach(function(c) {
            b.is(c.selector) && (attributeButton = La(c, !1, b.attr("vic")), a.append(attributeButton))
        }), b.closest(".embed-video-container, .media-embed-container").append(a)
    }), $(document).on("mouseenter", ".viu .local-video-container video:not(.voh .local-video-container video, .viu .slides > li > .local-video-container video, .viu .slides .owl-item > li > .local-video-container video)", function() {
        var a = $(this).closest(".local-video-container").find(".vnw").length ? $(this).closest(".local-video-container").find(".vnw") : $('<div class="vnw"></div>'),
            b = $(this);
        a.find('[vof="' + b.attr("vic") + '"]').length || (editVideoButton = Gb(b.attr("vic"), !1), a.append(editVideoButton), b.closest(".local-video-container").append(a))
    }), $.fn.focusEnd = function() {
        $(this).focus();
        var a = $("<span />").appendTo($(this)),
            b = a.get(0),
            c = null,
            d = null;
        return document.selection ? (c = document.body.createTextRange(), c.moveToElementText(b), c.select()) : window.getSelection && (c = document.createRange(), c.selectNode(b), d = window.getSelection(), d.removeAllRanges(), d.addRange(c)), a.remove(), this
    }
}
window.mr_variant = new Variant;