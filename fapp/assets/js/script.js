 /*! Template: TokenWiz v1.0.1 */ ! function(e) {
     "use strict";
     var t = e(window),
         a = e("body"),
         o = e(document);

     function i() {
         return t.width()
     }
     "ontouchstart" in document.documentElement || a.addClass("no-touch");
     var l = i();
     t.on("resize", function() {
         l = i()
     });
     var n = e(".is-sticky"),
         s = e(".topbar"),
         r = e(".topbar-wrap");
     if (n.length > 0) {
         var c = n.offset();
         t.scroll(function() {
             var e = t.scrollTop(),
                 a = s.height();
             e > c.top ? n.hasClass("has-fixed") || (n.addClass("has-fixed"), r.css("padding-top", a)) : n.hasClass("has-fixed") && (n.removeClass("has-fixed"), r.css("padding-top", 0))
         })
     }
     var d = e("[data-percent]");
     d.length > 0 && d.each(function() {
         var t = e(this),
             a = t.data("percent");
         t.css("width", a + "%")
     });
     var p = window.location.href,
         g = p.split("#"),
         f = e("a");
     f.length > 0 && f.each(function() {
         p === this.href && "" !== g[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
     });
     var h = e(".countdown-clock");
     h.length > 0 && h.each(function() {
         var t = e(this),
             a = t.attr("data-date");
         t.countdown(a).on("update.countdown", function(t) {
             e(this).html(t.strftime('<div><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">Day</span></div><div><span class="countdown-time">%H</span><span class="countdown-text">Hour</span></div><div><span class="countdown-time">%M</span><span class="countdown-text">Min</span></div><div><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Sec</span></div>'))
         })
     });
     var u = e(".select");
     u.length > 0 && u.each(function() {
         e(this).select2({
             theme: "flat"
         })
     });
     var m = e(".select-bordered");
     m.length > 0 && m.each(function() {
         e(this).select2({
             theme: "flat bordered"
         })
     });
     var v = ".toggle-tigger",
         b = ".toggle-class";
     e(v).length > 0 && o.on("click", v, function(t) {
         var a = e(this);
         e(v).not(a).removeClass("active"), e(b).not(a.parent().children()).removeClass("active"), a.toggleClass("active").parent().find(b).toggleClass("active"), t.preventDefault()
     }), o.on("click", "body", function(t) {
         var a = e(v),
             o = e(b);
         o.is(t.target) || 0 !== o.has(t.target).length || a.is(t.target) || 0 !== a.has(t.target).length || (o.removeClass("active"), a.removeClass("active"))
     });
     var x = e(".toggle-nav"),
         y = e(".navbar");

     function C(e) {
         l < 991 ? e.delay(500).addClass("navbar-mobile") : e.delay(500).removeClass("navbar-mobile")
     }
     x.length > 0 && x.on("click", function(e) {
         x.toggleClass("active"), y.toggleClass("active"), e.preventDefault()
     }), o.on("click", "body", function(e) {
         x.is(e.target) || 0 !== x.has(e.target).length || y.is(e.target) || 0 !== y.has(e.target).length || (x.removeClass("active"), y.removeClass("active"))
     }), C(y), t.on("resize", function() {
         C(y)
     });
     var k = e('[data-toggle="tooltip"]');
     k.length > 0 && k.tooltip();
     var w = e(".date-picker"),
         S = e(".date-picker-dob"),
         T = e(".time-picker");

     function _(t, a) {
         "success" === a ? e(t).parent().find(".copy-feedback").text("Copied to Clipboard").fadeIn().delay(1e3).fadeOut() : e(t).parent().find(".copy-feedback").text("Faild to Copy").fadeIn().delay(1e3).fadeOut()
     }
     w.length > 0 && w.each(function() {
         e(this).datepicker({
             format: "mm/dd/yyyy",
             maxViewMode: 2,
             clearBtn: !0,
             autoclose: !0,
             todayHighlight: !0
         })
     }), S.length > 0 && S.each(function() {
         e(this).datepicker({
             format: "mm/dd/yyyy",
             startView: 2,
             maxViewMode: 2,
             clearBtn: !0,
             autoclose: !0
         })
     }), T.length > 0 && T.each(function() {
         e(this).parent().addClass("has-timepicker"), e(this).timepicker({
             timeFormat: "HH:mm",
             interval: 15
         })
     }), new ClipboardJS(".copy-clipboard").on("success", function(e) {
         _(e.trigger, "success"), e.clearSelection()
     }).on("error", function(e) {
         _(e.trigger, "fail")
     }), new ClipboardJS(".copy-clipboard-modal", {
         container: document.querySelector(".modal")
     }).on("success", function(e) {
         _(e.trigger, "success"), e.clearSelection()
     }).on("error", function(e) {
         _(e.trigger, "fail")
     });
     var D = e(".input-file");
     D.length > 0 && D.each(function() {
         var t = e(this),
             a = e(this).next(),
             o = e(this).next().text();
         t.on("change", function() {
             var e = t.val();
             a.html(e), a.is(":empty") && a.html(o)
         })
     });
     var L = e(".upload-zone");
     L.length > 0 && (Dropzone.autoDiscover = !1, L.each(function() {
         e(this).addClass("dropzone").dropzone({
             url: "/images"
         })
     }));
     var z = e(".image-popup");
     z.length > 0 && z.magnificPopup({
         type: "image",
         preloader: !0,
         removalDelay: 400,
         mainClass: "mfp-fade"
     });
     var A = e(".dt-init");
     A.length > 0 && A.DataTable({
         ordering: !1,
         autoWidth: !1,
         dom: '<t><"row align-items-center"<"col-sm-6 text-left"p><"col-sm-6 text-sm-right"i>>',
         pageLength: 5,
         bPaginate: e(".data-table tbody tr").length > 5,
         iDisplayLength: 5,
         language: {
             search: "",
             searchPlaceholder: "Type in to Search",
             info: "_START_ -_END_ of _TOTAL_",
             infoEmpty: "No records",
             infoFiltered: "( Total _MAX_  )",
             paginate: {
                 first: "First",
                 last: "Last",
                 next: "Next",
                 previous: "Prev"
             }
         }
     });
     var O = e(".dt-filter-init");
     if (O.length > 0) {
         var P = O.DataTable({
             ordering: !1,
             autoWidth: !1,
             dom: '<"row justify-content-between pdb-1x"<"col-9 col-sm-6 text-left"f><"col-3 text-right"<"data-table-filter relative d-inline-block">>><t><"row align-items-center"<"col-sm-6 text-left"p><"col-sm-6 text-sm-right"i>>',
             pageLength: 6,
             bPaginate: e(".data-table tbody tr").length > 6,
             iDisplayLength: 6,
             language: {
                 search: "",
                 searchPlaceholder: "Type in to Search",
                 info: "_START_ -_END_ of _TOTAL_",
                 infoEmpty: "No records",
                 infoFiltered: "( Total _MAX_  )",
                 paginate: {
                     first: "First",
                     last: "Last",
                     next: "Next",
                     previous: "Prev"
                 }
             }
         });
         e(".data-table-filter").append('<a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger"> <em class="ti ti-settings"></em> </a><div class="toggle-class toggle-datatable-filter dropdown-content dropdown-content-top-left text-left"><ul class="pdt-1x pdb-1x"><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" id="all" checked value=""> <label for="all">All</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" id="approved" value="approved"> <label for="approved">Approved</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="pending" id="pending"> <label for="pending">Pending</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="progress" id="progress"> <label for="progress">Progress</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="cancled" id="cancled"> <label for="cancled">Cancled</label></li></ul></div>'), e(".data-filter").on("change", function() {
             var t = e(this).val();
             P.columns(".dt-tnxno").search(t || "", !0, !1).draw()
         })
     }
     var B = "tknSale";
     if (e("#" + B).length > 0) {
         var F = document.getElementById(B).getContext("2d");
         new Chart(F, {
             type: "line",
             data: {
                 labels: ["01 Oct", "02 Oct", "03 Oct", "04 Oct", "05 Oct", "06 Oct", "07 Oct"],
                 datasets: [{
                     label: "",
                     tension: .4,
                     backgroundColor: "transparent",
                     borderColor: "#2c80ff",
                     pointBorderColor: "#2c80ff",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 6,
                     pointHoverBackgroundColor: "#fff",
                     pointHoverBorderColor: "#2c80ff",
                     pointHoverBorderWidth: 2,
                     pointRadius: 6,
                     pointHitRadius: 6,
                     data: [110, 80, 125, 55, 95, 75, 90]
                 }]
             },
             options: {
                 legend: {
                     display: !1
                 },
                 maintainAspectRatio: !1,
                 tooltips: {
                     callbacks: {
                         title: function(e, t) {
                             return "Date : " + t.labels[e[0].index]
                         },
                         label: function(e, t) {
                             return t.datasets[0].data[e.index] + " Tokens"
                         }
                     },
                     backgroundColor: "#eff6ff",
                     titleFontSize: 13,
                     titleFontColor: "#6783b8",
                     titleMarginBottom: 10,
                     bodyFontColor: "#9eaecf",
                     bodyFontSize: 14,
                     bodySpacing: 4,
                     yPadding: 15,
                     xPadding: 15,
                     footerMarginTop: 5,
                     displayColors: !1
                 },
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: !0,
                             fontSize: 12,
                             fontColor: "#9eaecf"
                         },
                         gridLines: {
                             color: "#e5ecf8",
                             tickMarkLength: 0,
                             zeroLineColor: "#e5ecf8"
                         }
                     }],
                     xAxes: [{
                         ticks: {
                             fontSize: 12,
                             fontColor: "#9eaecf",
                             source: "auto"
                         },
                         gridLines: {
                             color: "transparent",
                             tickMarkLength: 20,
                             zeroLineColor: "#e5ecf8"
                         }
                     }]
                 }
             }
         })
     }
     e(".modal").on("shown.bs.modal", function() {
         a.hasClass("modal-open") || a.addClass("modal-open")
     }), a.append('<div class="demo-panel"><div class="demo-list"> <a class="demo-themes" title="See Demo" href="landing.html"> <img src="images/demo/demo-icon.png" /> </a> <a class="demo-cart" target="_blank" href="http://bit.ly/2r1v4mN"> <i class="fa fa-shopping-cart"> </i> </a> <a class="demo-toggle" href="javascript:void(0)"> <i class="fas fa-cogs"> </i> </a></div><div class="demo-content"><ul class="color-list"><li> <a href="#" class="color-trigger theme-defalt" title="style"></a></li><li> <a href="#" class="color-trigger theme-violet" title="style-violet"></a></li><li> <a href="#" class="color-trigger theme-charcoal" title="style-charcoal"></a></li><li> <a href="#" class="color-trigger theme-green" title="style-green"></a></li><li> <a href="#" class="color-trigger theme-pigeon" title="style-pigeon"></a></li><li> <a href="#" class="color-trigger theme-purple" title="style-purple"></a></li></ul></div></div>'), e(".demo-toggle").on("click", function() {
         e(".demo-content").slideToggle("slow")
     });
     var H = e(".color-trigger");
     H.length > 0 && H.on("click", function() {
         var t = e(this).attr("title");
         return e("body").fadeOut(function() {
             e("#layoutstyle").attr("href", "assets/css/" + t + ".css"), e(this).delay(150).fadeIn()
         }), !1
     })
 }(jQuery);