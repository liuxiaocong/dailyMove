!function(e) {
  function t(t) {
    for (var n, i, u = t[0], l = t[1], c = t[2], s = 0, p = []; s <
    u.length; s++) i = u[s], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (f && f(t); p.length;) p.shift()();
    return a.push.apply(a, c || []), r();
  }

  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, u = 1; u < r.length; u++) {
        var l = r[u];
        0 !== o[l] && (n = !1);
      }
      n && (a.splice(t--, 1), e = i(i.s = r[0]));
    }
    return e;
  }

  var n = {}, o = { 0: 0 }, a = [];

  function i(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {},
    };
    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = n, i.d = function(e, t, r) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r,
    });
  }, i.r = function(e) {
    'undefined' != typeof Symbol && Symbol.toStringTag &&
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule',
      { value: !0 });
  }, i.t = function(e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (i.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0,
      value: e,
    }), 2 & t && 'string' != typeof e) for (var n in e) i.d(r, n, function(t) {
      return e[t];
    }.bind(null, n));
    return r;
  }, i.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return i.d(t, 'a', t), t;
  }, i.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = '';
  var u = window.webpackJsonp = window.webpackJsonp || [], l = u.push.bind(u);
  u.push = t, u = u.slice();
  for (var c = 0; c < u.length; c++) t(u[c]);
  var f = l;
  a.push([11, 1]), r();
}({
  11: function(e, t, r) {
    'use strict';
    r.r(t);
    var n = r(0), o = r.n(n), a = r(2), i = r.n(a), u = r(4), l = r.n(u), c = r(1), f = r.n(c), s = function(e) {
      var t = e.label, r = e.text, n = e.type, a = e.id, i = e.value, u = e.handleChange;
      return o.a.createElement('div', { className: 'form-group' }, o.a.createElement('label', { htmlFor: t }, r),
        o.a.createElement('input', {
          type: n,
          className: 'form-control',
          id: a,
          value: i,
          onChange: u,
          required: !0,
        }));
    };
    s.propTypes = {
      label: f.a.string.isRequired,
      text: f.a.string.isRequired,
      type: f.a.string.isRequired,
      id: f.a.string.isRequired,
      value: f.a.string.isRequired,
      handleChange: f.a.func.isRequired,
    };
    var p = s;

    function y(e) {
      return (y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
          ? 'symbol'
          : typeof e;
      })(e);
    }

    function d(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n &&
        (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function b(e, t) {
      return (b = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function h(e) {
      var t = function() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {
          }))), !0;
        } catch (e) {return !1;}
      }();
      return function() {
        var r, n = m(e);
        if (t) {
          var o = m(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return v(this, r);
      };
    }

    function v(e, t) {
      return !t || 'object' !== y(t) && 'function' != typeof t ? g(e) : t;
    }

    function g(e) {
      if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }

    function m(e) {
      return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var O = function(e) {
      !function(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError(
          'Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0,
          },
        }), t && b(e, t);
      }(i, e);
      var t, r, n, a = h(i);

      function i() {
        var e;
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, i), (e = a.call(this)).state = { seo_title: '' }, e.handleChange = e.handleChange.bind(g(e)), e;
      }

      return t = i, (r = [
        {
          key: 'handleChange',
          value: function(e) {
            var t, r, n;
            console.log(l()('#article-form')), this.setState(
              (t = {}, r = e.target.id, n = e.target.value, r in t ? Object.defineProperty(t, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }) : t[r] = n, t));
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.state.seo_title;
            return o.a.createElement('form', { id: 'article-form' }, o.a.createElement(p, {
              text: 'SEO title',
              label: 'seo_title',
              type: 'text',
              id: 'seo_title',
              value: e,
              handleChange: this.handleChange,
            }));
          },
        }]) && d(t.prototype, r), n && d(t, n), i;
    }(n.Component), w = document.getElementById('create-article-form');
    w && i.a.render(o.a.createElement(O, null), w);
  },
});