/*! grapesjs-plugin-ckeditor - 1.0.1 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['grapesjs-plugin-ckeditor'] = t())
    : (e['grapesjs-plugin-ckeditor'] = t());
})(
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : this,
  () =>
    (() => {
      'use strict';
      var e = {
          d: (t, n) => {
            for (var o in n)
              e.o(n, o) &&
                !e.o(t, o) &&
                Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
          },
          o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
          r: (e) => {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          },
        },
        t = {};
      e.r(t), e.d(t, { default: () => i });
      var n =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        o = function (e, t) {
          [].forEach.call(e, t);
        },
        r = function (e) {
          return e.stopPropagation();
        };
      const i = function (e, t) {
        void 0 === t && (t = {});
        var i,
          a,
          c,
          l = n(
            {
              options: {},
              customRte: {},
              position: 'left',
              ckeditor:
                'https://cdn.ckeditor.com/4.21.0/standard-all/ckeditor.js',
              onToolbar: function () {},
            },
            t
          ),
          u = l.ckeditor,
          s = 'undefined' != typeof window,
          d = !1;
        u
          ? 'string' == typeof u
            ? s &&
              ((d = !0),
              (((a = u),
              ((c = document.createElement('script')).src = a),
              document.head.appendChild(c),
              c).onload = function () {
                i = window.CKEDITOR;
              }))
            : u.inline && (i = u)
          : s && (i = window.CKEDITOR);
        var f = function () {
            return setTimeout(function () {
              return e.refresh();
            }, 0);
          },
          p = function () {
            e.log('CKEDITOR instance not found', { level: 'error' });
          };
        if (!i && !d) return p();
        var g = function (e, t) {
          var n;
          (null === (n = null == t ? void 0 : t.focusManager) || void 0 === n
            ? void 0
            : n.hasFocus) ||
            ((e.contentEditable = 'true'), null == t || t.focus(), f());
        };
        e.setCustomRte(
          n(
            {
              getContent: function (e, t) {
                return t.getData();
              },
              enable: function (t, a) {
                if (a && 'destroyed' != a.status) return g(t, a), a;
                if (i) {
                  var c = e.RichTextEditor.getToolbarEl();
                  o(c.children, function (e) {
                    e.style.display = 'none';
                  });
                  var u = n({}, l.options),
                    s = 'sharedspace';
                  return (
                    u.extraPlugins
                      ? 'string' == typeof u.extraPlugins
                        ? (u.extraPlugins += ','.concat(s))
                        : Array.isArray(u.extraPlugins) &&
                          u.extraPlugins.push(s)
                      : (u.extraPlugins = s),
                    u.sharedSpaces || (u.sharedSpaces = { top: c }),
                    (a = i.inline(t, u)).on('contentDom', function () {
                      var e = a.editable();
                      e.attachListener(e, 'click', function () {
                        return t.click();
                      });
                    }),
                    a.on('instanceReady', function () {
                      var t = c.querySelector('#cke_'.concat(a.name));
                      t && ((t.style.display = 'block'), l.onToolbar(t)),
                        e.refresh(),
                        f();
                    }),
                    a.on('dialogShow', function () {
                      var e = document.querySelectorAll(
                        '.cke_dialog_background_cover, .cke_dialog_container'
                      );
                      o(e, function (e) {
                        e.removeEventListener('mousedown', r),
                          e.addEventListener('mousedown', r);
                      });
                    }),
                    a.on('key', function (e) {
                      13 === e.data.keyCode && f();
                    }),
                    g(t, a),
                    a
                  );
                }
                p();
              },
              disable: function (e, t) {
                var n;
                (e.contentEditable = 'false'),
                  null === (n = null == t ? void 0 : t.focusManager) ||
                    void 0 === n ||
                    n.blur(!0);
              },
            },
            l.customRte
          )
        ),
          e.on('rteToolbarPosUpdate', function (e) {
            var t = e.elRect;
            switch (l.position) {
              case 'center':
                e.left = t.width / 2 - e.targetWidth / 2;
                break;
              case 'right':
                (e.left = ''), (e.right = 0);
            }
          });
      };
      return t;
    })()
);
//# sourceMappingURL=index.js.map
