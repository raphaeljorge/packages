/*! For license information please see index.js.LICENSE.txt */
!(function (e, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r(
        require('@tanstack/react-form'),
        require('@tanstack/react-query'),
        require('react')
      ))
    : 'function' == typeof define && define.amd
      ? define(['@tanstack/react-form', '@tanstack/react-query', 'react'], r)
      : 'object' == typeof exports
        ? (exports.MyReactLibrary = r(
            require('@tanstack/react-form'),
            require('@tanstack/react-query'),
            require('react')
          ))
        : (e.MyReactLibrary = r(e['@tanstack/react-form'], e['@tanstack/react-query'], e.React));
})(this, (e, r, t) =>
  (() => {
    'use strict';
    var s = {
        12: (e) => {
          e.exports = t;
        },
        70: (e, r, t) => {
          e.exports = t(462);
        },
        98: (r) => {
          r.exports = e;
        },
        456: (e) => {
          e.exports = r;
        },
        462: (e, r, t) => {
          var s = t(12),
            a = Symbol.for('react.element'),
            i = Symbol.for('react.fragment'),
            o = Object.prototype.hasOwnProperty,
            l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            n = { key: !0, ref: !0, __self: !0, __source: !0 };
          function d(e, r, t) {
            var s,
              i = {},
              d = null,
              u = null;
            for (s in (void 0 !== t && (d = '' + t),
            void 0 !== r.key && (d = '' + r.key),
            void 0 !== r.ref && (u = r.ref),
            r))
              o.call(r, s) && !n.hasOwnProperty(s) && (i[s] = r[s]);
            if (e && e.defaultProps)
              for (s in (r = e.defaultProps)) void 0 === i[s] && (i[s] = r[s]);
            return { $$typeof: a, type: e, key: d, ref: u, props: i, _owner: l.current };
          }
          (r.Fragment = i), (r.jsx = d), (r.jsxs = d);
        },
      },
      a = {};
    function i(e) {
      var r = a[e];
      if (void 0 !== r) return r.exports;
      var t = (a[e] = { exports: {} });
      return s[e](t, t.exports, i), t.exports;
    }
    (i.d = (e, r) => {
      for (var t in r)
        i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
      (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (i.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var o = {};
    i.r(o),
      i.d(o, {
        Button: () => d,
        FormBuilder: () => Oe,
        required: () => Ee,
        useForm: () => Ie,
        useFormBuilder: () => Fe,
        useQuery: () => Le,
      });
    var l = i(70);
    const n = {
        button: 'Button-module__button__AisLs',
        primary: 'Button-module__primary__cdc4_',
        secondary: 'Button-module__secondary__pJ5lp',
      },
      d = ({ children: e, onClick: r, variant: t = 'primary' }) =>
        (0, l.jsx)('button', {
          className: `${n.button} ${n[t]} rounded-md px-4 py-2`,
          onClick: r,
          children: e,
        });
    function u(...e) {
      return e.filter(Boolean).join(' ');
    }
    var c = i(12),
      f = (e) => 'checkbox' === e.type,
      m = (e) => e instanceof Date,
      y = (e) => null == e;
    const g = (e) => 'object' == typeof e;
    var p = (e) => !y(e) && !Array.isArray(e) && g(e) && !m(e),
      _ =
        'undefined' != typeof window &&
        void 0 !== window.HTMLElement &&
        'undefined' != typeof document;
    function h(e) {
      let r;
      const t = Array.isArray(e),
        s = 'undefined' != typeof FileList && e instanceof FileList;
      if (e instanceof Date) r = new Date(e);
      else if (e instanceof Set) r = new Set(e);
      else {
        if ((_ && (e instanceof Blob || s)) || (!t && !p(e))) return e;
        if (
          ((r = t ? [] : {}),
          t ||
            ((e) => {
              const r = e.constructor && e.constructor.prototype;
              return p(r) && r.hasOwnProperty('isPrototypeOf');
            })(e))
        )
          for (const t in e) e.hasOwnProperty(t) && (r[t] = h(e[t]));
        else r = e;
      }
      return r;
    }
    var v = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
      b = (e) => void 0 === e,
      x = (e, r, t) => {
        if (!r || !p(e)) return t;
        const s = v(r.split(/[,[\].]+?/)).reduce((e, r) => (y(e) ? e : e[r]), e);
        return b(s) || s === e ? (b(e[r]) ? t : e[r]) : s;
      },
      F = (e) => 'boolean' == typeof e,
      w = (e) => /^\w*$/.test(e),
      S = (e) => v(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
      j = (e, r, t) => {
        let s = -1;
        const a = w(r) ? [r] : S(r),
          i = a.length,
          o = i - 1;
        for (; ++s < i; ) {
          const r = a[s];
          let i = t;
          if (s !== o) {
            const t = e[r];
            i = p(t) || Array.isArray(t) ? t : isNaN(+a[s + 1]) ? {} : [];
          }
          if ('__proto__' === r || 'constructor' === r || 'prototype' === r) return;
          (e[r] = i), (e = e[r]);
        }
        return e;
      };
    const A = 'onChange',
      V = 'onSubmit',
      k = 'all',
      N = 'pattern',
      C = 'required';
    c.createContext(null);
    var D = (e) => p(e) && !Object.keys(e).length,
      O = (e) => (Array.isArray(e) ? e : [e]);
    var I = (e) => 'string' == typeof e,
      L = (e, r, t, s, a) =>
        r ? { ...t[e], types: { ...(t[e] && t[e].types ? t[e].types : {}), [s]: a || !0 } } : {},
      E = (e) => ({
        isOnSubmit: !e || e === V,
        isOnBlur: 'onBlur' === e,
        isOnChange: e === A,
        isOnAll: e === k,
        isOnTouch: 'onTouched' === e,
      }),
      q = (e, r, t) =>
        !t &&
        (r.watchAll ||
          r.watch.has(e) ||
          [...r.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
    const T = (e, r, t, s) => {
      for (const a of t || Object.keys(e)) {
        const t = x(e, a);
        if (t) {
          const { _f: e, ...i } = t;
          if (e) {
            if (e.refs && e.refs[0] && r(e.refs[0], a) && !s) return !0;
            if (e.ref && r(e.ref, e.name) && !s) return !0;
            if (T(i, r)) break;
          } else if (p(i) && T(i, r)) break;
        }
      }
    };
    var B = (e, r, t) => {
        const s = O(x(e, t));
        return j(s, 'root', r[t]), j(e, t, s), e;
      },
      M = (e) => 'file' === e.type,
      P = (e) => 'function' == typeof e,
      R = (e) => {
        if (!_) return !1;
        const r = e ? e.ownerDocument : 0;
        return e instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
      },
      U = (e) => I(e),
      $ = (e) => 'radio' === e.type,
      W = (e) => e instanceof RegExp;
    const z = { value: !1, isValid: !1 },
      Y = { value: !0, isValid: !0 };
    var Z = (e) => {
      if (Array.isArray(e)) {
        if (e.length > 1) {
          const r = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
          return { value: r, isValid: !!r.length };
        }
        return e[0].checked && !e[0].disabled
          ? e[0].attributes && !b(e[0].attributes.value)
            ? b(e[0].value) || '' === e[0].value
              ? Y
              : { value: e[0].value, isValid: !0 }
            : Y
          : z;
      }
      return z;
    };
    const H = { isValid: !1, value: null };
    var G = (e) =>
      Array.isArray(e)
        ? e.reduce(
            (e, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : e),
            H
          )
        : H;
    function J(e, r, t = 'validate') {
      if (U(e) || (Array.isArray(e) && e.every(U)) || (F(e) && !e))
        return { type: t, message: U(e) ? e : '', ref: r };
    }
    var X = (e) => (p(e) && !W(e) ? e : { value: e, message: '' }),
      K = async (e, r, t, s, a, i) => {
        const {
            ref: o,
            refs: l,
            required: n,
            maxLength: d,
            minLength: u,
            min: c,
            max: m,
            pattern: g,
            validate: _,
            name: h,
            valueAsNumber: v,
            mount: w,
          } = e._f,
          S = x(t, h);
        if (!w || r.has(h)) return {};
        const j = l ? l[0] : o,
          A = (e) => {
            a && j.reportValidity && (j.setCustomValidity(F(e) ? '' : e || ''), j.reportValidity());
          },
          V = {},
          k = $(o),
          O = f(o),
          E = k || O,
          q =
            ((v || M(o)) && b(o.value) && b(S)) ||
            (R(o) && '' === o.value) ||
            '' === S ||
            (Array.isArray(S) && !S.length),
          T = L.bind(null, h, s, V),
          B = (e, r, t, s = 'maxLength', a = 'minLength') => {
            const i = e ? r : t;
            V[h] = { type: e ? s : a, message: i, ref: o, ...T(e ? s : a, i) };
          };
        if (
          i
            ? !Array.isArray(S) || !S.length
            : n &&
              ((!E && (q || y(S))) || (F(S) && !S) || (O && !Z(l).isValid) || (k && !G(l).isValid))
        ) {
          const { value: e, message: r } = U(n) ? { value: !!n, message: n } : X(n);
          if (e && ((V[h] = { type: C, message: r, ref: j, ...T(C, r) }), !s)) return A(r), V;
        }
        if (!(q || (y(c) && y(m)))) {
          let e, r;
          const t = X(m),
            a = X(c);
          if (y(S) || isNaN(S)) {
            const s = o.valueAsDate || new Date(S),
              i = (e) => new Date(new Date().toDateString() + ' ' + e),
              l = 'time' == o.type,
              n = 'week' == o.type;
            I(t.value) &&
              S &&
              (e = l ? i(S) > i(t.value) : n ? S > t.value : s > new Date(t.value)),
              I(a.value) &&
                S &&
                (r = l ? i(S) < i(a.value) : n ? S < a.value : s < new Date(a.value));
          } else {
            const s = o.valueAsNumber || (S ? +S : S);
            y(t.value) || (e = s > t.value), y(a.value) || (r = s < a.value);
          }
          if ((e || r) && (B(!!e, t.message, a.message, 'max', 'min'), !s))
            return A(V[h].message), V;
        }
        if ((d || u) && !q && (I(S) || (i && Array.isArray(S)))) {
          const e = X(d),
            r = X(u),
            t = !y(e.value) && S.length > +e.value,
            a = !y(r.value) && S.length < +r.value;
          if ((t || a) && (B(t, e.message, r.message), !s)) return A(V[h].message), V;
        }
        if (g && !q && I(S)) {
          const { value: e, message: r } = X(g);
          if (W(e) && !S.match(e) && ((V[h] = { type: N, message: r, ref: o, ...T(N, r) }), !s))
            return A(r), V;
        }
        if (_)
          if (P(_)) {
            const e = J(await _(S, t), j);
            if (e && ((V[h] = { ...e, ...T('validate', e.message) }), !s)) return A(e.message), V;
          } else if (p(_)) {
            let e = {};
            for (const r in _) {
              if (!D(e) && !s) break;
              const a = J(await _[r](S, t), j, r);
              a && ((e = { ...a, ...T(r, a.message) }), A(a.message), s && (V[h] = e));
            }
            if (!D(e) && ((V[h] = { ref: j, ...e }), !s)) return V;
          }
        return A(!0), V;
      };
    function Q(e, r) {
      const t = Array.isArray(r) ? r : w(r) ? [r] : S(r),
        s =
          1 === t.length
            ? e
            : (function (e, r) {
                const t = r.slice(0, -1).length;
                let s = 0;
                for (; s < t; ) e = b(e) ? s++ : e[r[s++]];
                return e;
              })(e, t),
        a = t.length - 1,
        i = t[a];
      return (
        s && delete s[i],
        0 !== a &&
          ((p(s) && D(s)) ||
            (Array.isArray(s) &&
              (function (e) {
                for (const r in e) if (e.hasOwnProperty(r) && !b(e[r])) return !1;
                return !0;
              })(s))) &&
          Q(e, t.slice(0, -1)),
        e
      );
    }
    var ee = () => {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (r) => {
            for (const t of e) t.next && t.next(r);
          },
          subscribe: (r) => (
            e.push(r),
            {
              unsubscribe: () => {
                e = e.filter((e) => e !== r);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      },
      re = (e) => y(e) || !g(e);
    function te(e, r) {
      if (re(e) || re(r)) return e === r;
      if (m(e) && m(r)) return e.getTime() === r.getTime();
      const t = Object.keys(e),
        s = Object.keys(r);
      if (t.length !== s.length) return !1;
      for (const a of t) {
        const t = e[a];
        if (!s.includes(a)) return !1;
        if ('ref' !== a) {
          const e = r[a];
          if (
            (m(t) && m(e)) || (p(t) && p(e)) || (Array.isArray(t) && Array.isArray(e))
              ? !te(t, e)
              : t !== e
          )
            return !1;
        }
      }
      return !0;
    }
    var se = (e) => 'select-multiple' === e.type,
      ae = (e) => R(e) && e.isConnected,
      ie = (e) => {
        for (const r in e) if (P(e[r])) return !0;
        return !1;
      };
    function oe(e, r = {}) {
      const t = Array.isArray(e);
      if (p(e) || t)
        for (const t in e)
          Array.isArray(e[t]) || (p(e[t]) && !ie(e[t]))
            ? ((r[t] = Array.isArray(e[t]) ? [] : {}), oe(e[t], r[t]))
            : y(e[t]) || (r[t] = !0);
      return r;
    }
    function le(e, r, t) {
      const s = Array.isArray(e);
      if (p(e) || s)
        for (const s in e)
          Array.isArray(e[s]) || (p(e[s]) && !ie(e[s]))
            ? b(r) || re(t[s])
              ? (t[s] = Array.isArray(e[s]) ? oe(e[s], []) : { ...oe(e[s]) })
              : le(e[s], y(r) ? {} : r[s], t[s])
            : (t[s] = !te(e[s], r[s]));
      return t;
    }
    var ne = (e, r) => le(e, r, oe(r)),
      de = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: s }) =>
        b(e) ? e : r ? ('' === e ? NaN : e ? +e : e) : t && I(e) ? new Date(e) : s ? s(e) : e;
    function ue(e) {
      const r = e.ref;
      return M(r)
        ? r.files
        : $(r)
          ? G(e.refs).value
          : se(r)
            ? [...r.selectedOptions].map(({ value: e }) => e)
            : f(r)
              ? Z(e.refs).value
              : de(b(r.value) ? e.ref.value : r.value, e);
    }
    var ce = (e) =>
      b(e) ? e : W(e) ? e.source : p(e) ? (W(e.value) ? e.value.source : e.value) : e;
    const fe = 'AsyncFunction';
    function me(e, r, t) {
      const s = x(e, t);
      if (s || w(t)) return { error: s, name: t };
      const a = t.split('.');
      for (; a.length; ) {
        const s = a.join('.'),
          i = x(r, s),
          o = x(e, s);
        if (i && !Array.isArray(i) && t !== s) return { name: t };
        if (o && o.type) return { name: s, error: o };
        a.pop();
      }
      return { name: t };
    }
    const ye = { mode: V, reValidateMode: A, shouldFocusError: !0 };
    function ge(e = {}) {
      let r,
        t = { ...ye, ...e },
        s = {
          submitCount: 0,
          isDirty: !1,
          isLoading: P(t.defaultValues),
          isValidating: !1,
          isSubmitted: !1,
          isSubmitting: !1,
          isSubmitSuccessful: !1,
          isValid: !1,
          touchedFields: {},
          dirtyFields: {},
          validatingFields: {},
          errors: t.errors || {},
          disabled: t.disabled || !1,
        },
        a = {},
        i = ((p(t.defaultValues) || p(t.values)) && h(t.defaultValues || t.values)) || {},
        o = t.shouldUnregister ? {} : h(i),
        l = { action: !1, mount: !1, watch: !1 },
        n = {
          mount: new Set(),
          disabled: new Set(),
          unMount: new Set(),
          array: new Set(),
          watch: new Set(),
        },
        d = 0;
      const u = {
          isDirty: !1,
          dirtyFields: !1,
          validatingFields: !1,
          touchedFields: !1,
          isValidating: !1,
          isValid: !1,
          errors: !1,
        },
        c = { values: ee(), array: ee(), state: ee() },
        g = E(t.mode),
        w = E(t.reValidateMode),
        S = t.criteriaMode === k,
        A = async (e) => {
          if (!t.disabled && (u.isValid || e)) {
            const e = t.resolver ? D((await L()).errors) : await U(a, !0);
            e !== s.isValid && c.state.next({ isValid: e });
          }
        },
        V = (e, r) => {
          t.disabled ||
            (!u.isValidating && !u.validatingFields) ||
            ((e || Array.from(n.mount)).forEach((e) => {
              e && (r ? j(s.validatingFields, e, r) : Q(s.validatingFields, e));
            }),
            c.state.next({
              validatingFields: s.validatingFields,
              isValidating: !D(s.validatingFields),
            }));
        },
        N = (e, r, t, s) => {
          const n = x(a, e);
          if (n) {
            const a = x(o, e, b(t) ? x(i, e) : t);
            b(a) || (s && s.defaultChecked) || r ? j(o, e, r ? a : ue(n._f)) : Y(e, a),
              l.mount && A();
          }
        },
        C = (e, r, o, l, n) => {
          let d = !1,
            f = !1;
          const m = { name: e };
          if (!t.disabled) {
            const t = !!(x(a, e) && x(a, e)._f && x(a, e)._f.disabled);
            if (!o || l) {
              u.isDirty && ((f = s.isDirty), (s.isDirty = m.isDirty = W()), (d = f !== m.isDirty));
              const a = t || te(x(i, e), r);
              (f = !(t || !x(s.dirtyFields, e))),
                a || t ? Q(s.dirtyFields, e) : j(s.dirtyFields, e, !0),
                (m.dirtyFields = s.dirtyFields),
                (d = d || (u.dirtyFields && f !== !a));
            }
            if (o) {
              const r = x(s.touchedFields, e);
              r ||
                (j(s.touchedFields, e, o),
                (m.touchedFields = s.touchedFields),
                (d = d || (u.touchedFields && r !== o)));
            }
            d && n && c.state.next(m);
          }
          return d ? m : {};
        },
        L = async (e) => {
          V(e, !0);
          const r = await t.resolver(
            o,
            t.context,
            ((e, r, t, s) => {
              const a = {};
              for (const t of e) {
                const e = x(r, t);
                e && j(a, t, e._f);
              }
              return { criteriaMode: t, names: [...e], fields: a, shouldUseNativeValidation: s };
            })(e || n.mount, a, t.criteriaMode, t.shouldUseNativeValidation)
          );
          return V(e), r;
        },
        U = async (e, r, a = { valid: !0 }) => {
          for (const l in e) {
            const d = e[l];
            if (d) {
              const { _f: e, ...c } = d;
              if (e) {
                const c = n.array.has(e.name),
                  f =
                    d._f &&
                    !!(i = d._f) &&
                    !!i.validate &&
                    !!(
                      (P(i.validate) && i.validate.constructor.name === fe) ||
                      (p(i.validate) &&
                        Object.values(i.validate).find((e) => e.constructor.name === fe))
                    );
                f && u.validatingFields && V([l], !0);
                const m = await K(d, n.disabled, o, S, t.shouldUseNativeValidation && !r, c);
                if ((f && u.validatingFields && V([l]), m[e.name] && ((a.valid = !1), r))) break;
                !r &&
                  (x(m, e.name)
                    ? c
                      ? B(s.errors, m, e.name)
                      : j(s.errors, e.name, m[e.name])
                    : Q(s.errors, e.name));
              }
              !D(c) && (await U(c, r, a));
            }
          }
          var i;
          return a.valid;
        },
        W = (e, r) => !t.disabled && (e && r && j(o, e, r), !te(re(), i)),
        z = (e, r, t) =>
          ((e, r, t, s, a) =>
            I(e)
              ? (s && r.watch.add(e), x(t, e, a))
              : Array.isArray(e)
                ? e.map((e) => (s && r.watch.add(e), x(t, e)))
                : (s && (r.watchAll = !0), t))(
            e,
            n,
            { ...(l.mount ? o : b(r) ? i : I(e) ? { [e]: r } : r) },
            t,
            r
          ),
        Y = (e, r, t = {}) => {
          const s = x(a, e);
          let i = r;
          if (s) {
            const t = s._f;
            t &&
              (!t.disabled && j(o, e, de(r, t)),
              (i = R(t.ref) && y(r) ? '' : r),
              se(t.ref)
                ? [...t.ref.options].forEach((e) => (e.selected = i.includes(e.value)))
                : t.refs
                  ? f(t.ref)
                    ? t.refs.length > 1
                      ? t.refs.forEach(
                          (e) =>
                            (!e.defaultChecked || !e.disabled) &&
                            (e.checked = Array.isArray(i)
                              ? !!i.find((r) => r === e.value)
                              : i === e.value)
                        )
                      : t.refs[0] && (t.refs[0].checked = !!i)
                    : t.refs.forEach((e) => (e.checked = e.value === i))
                  : M(t.ref)
                    ? (t.ref.value = '')
                    : ((t.ref.value = i),
                      t.ref.type || c.values.next({ name: e, values: { ...o } })));
          }
          (t.shouldDirty || t.shouldTouch) && C(e, i, t.shouldTouch, t.shouldDirty, !0),
            t.shouldValidate && X(e);
        },
        Z = (e, r, t) => {
          for (const s in r) {
            const i = r[s],
              o = `${e}.${s}`,
              l = x(a, o);
            (n.array.has(e) || p(i) || (l && !l._f)) && !m(i) ? Z(o, i, t) : Y(o, i, t);
          }
        },
        H = (e, r, t = {}) => {
          const d = x(a, e),
            f = n.array.has(e),
            m = h(r);
          j(o, e, m),
            f
              ? (c.array.next({ name: e, values: { ...o } }),
                (u.isDirty || u.dirtyFields) &&
                  t.shouldDirty &&
                  c.state.next({ name: e, dirtyFields: ne(i, o), isDirty: W(e, m) }))
              : !d || d._f || y(m)
                ? Y(e, m, t)
                : Z(e, m, t),
            q(e, n) && c.state.next({ ...s }),
            c.values.next({ name: l.mount ? e : void 0, values: { ...o } });
        },
        G = async (e) => {
          l.mount = !0;
          const i = e.target;
          let y = i.name,
            _ = !0;
          const h = x(a, y),
            v = (e) => {
              _ = Number.isNaN(e) || (m(e) && isNaN(e.getTime())) || te(e, x(o, y, e));
            };
          if (h) {
            let l, m;
            const k = i.type
                ? ue(h._f)
                : ((e) =>
                    p(e) && e.target ? (f(e.target) ? e.target.checked : e.target.value) : e)(e),
              N = 'blur' === e.type || 'focusout' === e.type,
              O =
                !(
                  ((b = h._f).mount &&
                    (b.required ||
                      b.min ||
                      b.max ||
                      b.maxLength ||
                      b.minLength ||
                      b.pattern ||
                      b.validate)) ||
                  t.resolver ||
                  x(s.errors, y) ||
                  h._f.deps
                ) ||
                ((e, r, t, s, a) =>
                  !a.isOnAll &&
                  (!t && a.isOnTouch
                    ? !(r || e)
                    : (t ? s.isOnBlur : a.isOnBlur)
                      ? !e
                      : !(t ? s.isOnChange : a.isOnChange) || e))(
                  N,
                  x(s.touchedFields, y),
                  s.isSubmitted,
                  w,
                  g
                ),
              I = q(y, n, N);
            j(o, y, k),
              N ? (h._f.onBlur && h._f.onBlur(e), r && r(0)) : h._f.onChange && h._f.onChange(e);
            const E = C(y, k, N, !1),
              T = !D(E) || I;
            if ((!N && c.values.next({ name: y, type: e.type, values: { ...o } }), O))
              return (
                u.isValid && ('onBlur' === t.mode && N ? A() : N || A()),
                T && c.state.next({ name: y, ...(I ? {} : E) })
              );
            if ((!N && I && c.state.next({ ...s }), t.resolver)) {
              const { errors: e } = await L([y]);
              if ((v(k), _)) {
                const r = me(s.errors, a, y),
                  t = me(e, a, r.name || y);
                (l = t.error), (y = t.name), (m = D(e));
              }
            } else
              V([y], !0),
                (l = (await K(h, n.disabled, o, S, t.shouldUseNativeValidation))[y]),
                V([y]),
                v(k),
                _ && (l ? (m = !1) : u.isValid && (m = await U(a, !0)));
            _ &&
              (h._f.deps && X(h._f.deps),
              ((e, a, i, o) => {
                const l = x(s.errors, e),
                  n = u.isValid && F(a) && s.isValid !== a;
                var f;
                if (
                  (t.delayError && i
                    ? ((f = () =>
                        ((e, r) => {
                          j(s.errors, e, r), c.state.next({ errors: s.errors });
                        })(e, i)),
                      (r = (e) => {
                        clearTimeout(d), (d = setTimeout(f, e));
                      }),
                      r(t.delayError))
                    : (clearTimeout(d), (r = null), i ? j(s.errors, e, i) : Q(s.errors, e)),
                  (i ? !te(l, i) : l) || !D(o) || n)
                ) {
                  const r = {
                    ...o,
                    ...(n && F(a) ? { isValid: a } : {}),
                    errors: s.errors,
                    name: e,
                  };
                  (s = { ...s, ...r }), c.state.next(r);
                }
              })(y, m, l, E));
          }
          var b;
        },
        J = (e, r) => {
          if (x(s.errors, r) && e.focus) return e.focus(), 1;
        },
        X = async (e, r = {}) => {
          let i, o;
          const l = O(e);
          if (t.resolver) {
            const r = await (async (e) => {
              const { errors: r } = await L(e);
              if (e)
                for (const t of e) {
                  const e = x(r, t);
                  e ? j(s.errors, t, e) : Q(s.errors, t);
                }
              else s.errors = r;
              return r;
            })(b(e) ? e : l);
            (i = D(r)), (o = e ? !l.some((e) => x(r, e)) : i);
          } else
            e
              ? ((o = (
                  await Promise.all(
                    l.map(async (e) => {
                      const r = x(a, e);
                      return await U(r && r._f ? { [e]: r } : r);
                    })
                  )
                ).every(Boolean)),
                (o || s.isValid) && A())
              : (o = i = await U(a));
          return (
            c.state.next({
              ...(!I(e) || (u.isValid && i !== s.isValid) ? {} : { name: e }),
              ...(t.resolver || !e ? { isValid: i } : {}),
              errors: s.errors,
            }),
            r.shouldFocus && !o && T(a, J, e ? l : n.mount),
            o
          );
        },
        re = (e) => {
          const r = { ...(l.mount ? o : i) };
          return b(e) ? r : I(e) ? x(r, e) : e.map((e) => x(r, e));
        },
        ie = (e, r) => ({
          invalid: !!x((r || s).errors, e),
          isDirty: !!x((r || s).dirtyFields, e),
          error: x((r || s).errors, e),
          isValidating: !!x(s.validatingFields, e),
          isTouched: !!x((r || s).touchedFields, e),
        }),
        oe = (e, r, t) => {
          const i = (x(a, e, { _f: {} })._f || {}).ref,
            o = x(s.errors, e) || {},
            { ref: l, message: n, type: d, ...u } = o;
          j(s.errors, e, { ...u, ...r, ref: i }),
            c.state.next({ name: e, errors: s.errors, isValid: !1 }),
            t && t.shouldFocus && i && i.focus && i.focus();
        },
        le = (e, r = {}) => {
          for (const l of e ? O(e) : n.mount)
            n.mount.delete(l),
              n.array.delete(l),
              r.keepValue || (Q(a, l), Q(o, l)),
              !r.keepError && Q(s.errors, l),
              !r.keepDirty && Q(s.dirtyFields, l),
              !r.keepTouched && Q(s.touchedFields, l),
              !r.keepIsValidating && Q(s.validatingFields, l),
              !t.shouldUnregister && !r.keepDefaultValue && Q(i, l);
          c.values.next({ values: { ...o } }),
            c.state.next({ ...s, ...(r.keepDirty ? { isDirty: W() } : {}) }),
            !r.keepIsValid && A();
        },
        ge = ({ disabled: e, name: r, field: t, fields: s }) => {
          ((F(e) && l.mount) || e || n.disabled.has(r)) &&
            (e ? n.disabled.add(r) : n.disabled.delete(r),
            C(r, ue(t ? t._f : x(s, r)._f), !1, !1, !0));
        },
        pe = (e, r = {}) => {
          let s = x(a, e);
          const o = F(r.disabled) || F(t.disabled);
          return (
            j(a, e, {
              ...(s || {}),
              _f: { ...(s && s._f ? s._f : { ref: { name: e } }), name: e, mount: !0, ...r },
            }),
            n.mount.add(e),
            s
              ? ge({ field: s, disabled: F(r.disabled) ? r.disabled : t.disabled, name: e })
              : N(e, !0, r.value),
            {
              ...(o ? { disabled: r.disabled || t.disabled } : {}),
              ...(t.progressive
                ? {
                    required: !!r.required,
                    min: ce(r.min),
                    max: ce(r.max),
                    minLength: ce(r.minLength),
                    maxLength: ce(r.maxLength),
                    pattern: ce(r.pattern),
                  }
                : {}),
              name: e,
              onChange: G,
              onBlur: G,
              ref: (o) => {
                if (o) {
                  pe(e, r), (s = x(a, e));
                  const t =
                      (b(o.value) &&
                        o.querySelectorAll &&
                        o.querySelectorAll('input,select,textarea')[0]) ||
                      o,
                    l = ((e) => $(e) || f(e))(t),
                    n = s._f.refs || [];
                  if (l ? n.find((e) => e === t) : t === s._f.ref) return;
                  j(a, e, {
                    _f: {
                      ...s._f,
                      ...(l
                        ? {
                            refs: [...n.filter(ae), t, ...(Array.isArray(x(i, e)) ? [{}] : [])],
                            ref: { type: t.type, name: e },
                          }
                        : { ref: t }),
                    },
                  }),
                    N(e, !1, void 0, t);
                } else
                  (s = x(a, e, {})),
                    s._f && (s._f.mount = !1),
                    (t.shouldUnregister || r.shouldUnregister) &&
                      (!((e, r) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(r)))(
                        n.array,
                        e
                      ) ||
                        !l.action) &&
                      n.unMount.add(e);
              },
            }
          );
        },
        _e = () => t.shouldFocusError && T(a, J, n.mount),
        he = (e, r) => async (i) => {
          let l;
          i && (i.preventDefault && i.preventDefault(), i.persist && i.persist());
          let d = h(o);
          if (n.disabled.size) for (const e of n.disabled) j(d, e, void 0);
          if ((c.state.next({ isSubmitting: !0 }), t.resolver)) {
            const { errors: e, values: r } = await L();
            (s.errors = e), (d = r);
          } else await U(a);
          if ((Q(s.errors, 'root'), D(s.errors))) {
            c.state.next({ errors: {} });
            try {
              await e(d, i);
            } catch (e) {
              l = e;
            }
          } else r && (await r({ ...s.errors }, i)), _e(), setTimeout(_e);
          if (
            (c.state.next({
              isSubmitted: !0,
              isSubmitting: !1,
              isSubmitSuccessful: D(s.errors) && !l,
              submitCount: s.submitCount + 1,
              errors: s.errors,
            }),
            l)
          )
            throw l;
        },
        ve = (e, r = {}) => {
          const d = e ? h(e) : i,
            f = h(d),
            m = D(e),
            y = m ? i : f;
          if ((r.keepDefaultValues || (i = d), !r.keepValues)) {
            if (r.keepDirtyValues) {
              const e = new Set([...n.mount, ...Object.keys(ne(i, o))]);
              for (const r of Array.from(e)) x(s.dirtyFields, r) ? j(y, r, x(o, r)) : H(r, x(y, r));
            } else {
              if (_ && b(e))
                for (const e of n.mount) {
                  const r = x(a, e);
                  if (r && r._f) {
                    const e = Array.isArray(r._f.refs) ? r._f.refs[0] : r._f.ref;
                    if (R(e)) {
                      const r = e.closest('form');
                      if (r) {
                        r.reset();
                        break;
                      }
                    }
                  }
                }
              a = {};
            }
            (o = t.shouldUnregister ? (r.keepDefaultValues ? h(i) : {}) : h(y)),
              c.array.next({ values: { ...y } }),
              c.values.next({ values: { ...y } });
          }
          (n = {
            mount: r.keepDirtyValues ? n.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: !1,
            focus: '',
          }),
            (l.mount = !u.isValid || !!r.keepIsValid || !!r.keepDirtyValues),
            (l.watch = !!t.shouldUnregister),
            c.state.next({
              submitCount: r.keepSubmitCount ? s.submitCount : 0,
              isDirty: !m && (r.keepDirty ? s.isDirty : !(!r.keepDefaultValues || te(e, i))),
              isSubmitted: !!r.keepIsSubmitted && s.isSubmitted,
              dirtyFields: m
                ? {}
                : r.keepDirtyValues
                  ? r.keepDefaultValues && o
                    ? ne(i, o)
                    : s.dirtyFields
                  : r.keepDefaultValues && e
                    ? ne(i, e)
                    : r.keepDirty
                      ? s.dirtyFields
                      : {},
              touchedFields: r.keepTouched ? s.touchedFields : {},
              errors: r.keepErrors ? s.errors : {},
              isSubmitSuccessful: !!r.keepIsSubmitSuccessful && s.isSubmitSuccessful,
              isSubmitting: !1,
            });
        },
        be = (e, r) => ve(P(e) ? e(o) : e, r);
      return {
        control: {
          register: pe,
          unregister: le,
          getFieldState: ie,
          handleSubmit: he,
          setError: oe,
          _executeSchema: L,
          _getWatch: z,
          _getDirty: W,
          _updateValid: A,
          _removeUnmounted: () => {
            for (const e of n.unMount) {
              const r = x(a, e);
              r && (r._f.refs ? r._f.refs.every((e) => !ae(e)) : !ae(r._f.ref)) && le(e);
            }
            n.unMount = new Set();
          },
          _updateFieldArray: (e, r = [], n, d, f = !0, m = !0) => {
            if (d && n && !t.disabled) {
              if (((l.action = !0), m && Array.isArray(x(a, e)))) {
                const r = n(x(a, e), d.argA, d.argB);
                f && j(a, e, r);
              }
              if (m && Array.isArray(x(s.errors, e))) {
                const r = n(x(s.errors, e), d.argA, d.argB);
                f && j(s.errors, e, r),
                  ((e, r) => {
                    !v(x(e, r)).length && Q(e, r);
                  })(s.errors, e);
              }
              if (u.touchedFields && m && Array.isArray(x(s.touchedFields, e))) {
                const r = n(x(s.touchedFields, e), d.argA, d.argB);
                f && j(s.touchedFields, e, r);
              }
              u.dirtyFields && (s.dirtyFields = ne(i, o)),
                c.state.next({
                  name: e,
                  isDirty: W(e, r),
                  dirtyFields: s.dirtyFields,
                  errors: s.errors,
                  isValid: s.isValid,
                });
            } else j(o, e, r);
          },
          _updateDisabledField: ge,
          _getFieldArray: (e) => v(x(l.mount ? o : i, e, t.shouldUnregister ? x(i, e, []) : [])),
          _reset: ve,
          _resetDefaultValues: () =>
            P(t.defaultValues) &&
            t.defaultValues().then((e) => {
              be(e, t.resetOptions), c.state.next({ isLoading: !1 });
            }),
          _updateFormState: (e) => {
            s = { ...s, ...e };
          },
          _disableForm: (e) => {
            F(e) &&
              (c.state.next({ disabled: e }),
              T(
                a,
                (r, t) => {
                  const s = x(a, t);
                  s &&
                    ((r.disabled = s._f.disabled || e),
                    Array.isArray(s._f.refs) &&
                      s._f.refs.forEach((r) => {
                        r.disabled = s._f.disabled || e;
                      }));
                },
                0,
                !1
              ));
          },
          _subjects: c,
          _proxyFormState: u,
          _setErrors: (e) => {
            (s.errors = e), c.state.next({ errors: s.errors, isValid: !1 });
          },
          get _fields() {
            return a;
          },
          get _formValues() {
            return o;
          },
          get _state() {
            return l;
          },
          set _state(e) {
            l = e;
          },
          get _defaultValues() {
            return i;
          },
          get _names() {
            return n;
          },
          set _names(e) {
            n = e;
          },
          get _formState() {
            return s;
          },
          set _formState(e) {
            s = e;
          },
          get _options() {
            return t;
          },
          set _options(e) {
            t = { ...t, ...e };
          },
        },
        trigger: X,
        register: pe,
        handleSubmit: he,
        watch: (e, r) =>
          P(e) ? c.values.subscribe({ next: (t) => e(z(void 0, r), t) }) : z(e, r, !0),
        setValue: H,
        getValues: re,
        reset: be,
        resetField: (e, r = {}) => {
          x(a, e) &&
            (b(r.defaultValue)
              ? H(e, h(x(i, e)))
              : (H(e, r.defaultValue), j(i, e, h(r.defaultValue))),
            r.keepTouched || Q(s.touchedFields, e),
            r.keepDirty ||
              (Q(s.dirtyFields, e), (s.isDirty = r.defaultValue ? W(e, h(x(i, e))) : W())),
            r.keepError || (Q(s.errors, e), u.isValid && A()),
            c.state.next({ ...s }));
        },
        clearErrors: (e) => {
          e && O(e).forEach((e) => Q(s.errors, e)), c.state.next({ errors: e ? s.errors : {} });
        },
        unregister: le,
        setError: oe,
        setFocus: (e, r = {}) => {
          const t = x(a, e),
            s = t && t._f;
          if (s) {
            const e = s.refs ? s.refs[0] : s.ref;
            e.focus && (e.focus(), r.shouldSelect && P(e.select) && e.select());
          }
        },
        getFieldState: ie,
      };
    }
    const pe = ({ id: e, label: r, required: t, hint: s }) =>
        r
          ? (0, l.jsxs)('label', {
              htmlFor: e,
              className: u(
                'FormLabel-module__formLabel__HkUDq',
                'block text-sm font-medium text-gray-700 mb-1'
              ),
              children: [
                r,
                t &&
                  (0, l.jsx)('span', {
                    className: u(
                      'FormLabel-module__requiredMark__fg0Mz',
                      'text-red-500 ml-1 font-semibold'
                    ),
                    children: '*',
                  }),
                s &&
                  (0, l.jsxs)('span', {
                    className: u('FormLabel-module__formHint__wdpUB', 'text-xs text-gray-500 ml-1'),
                    children: ['(', s, ')'],
                  }),
              ],
            })
          : null,
      _e = ({ error: e }) =>
        e
          ? (0, l.jsx)('div', {
              className: u('FormError-module__formError__y4kWA', 'mt-1 text-sm text-red-500'),
              children: e,
            })
          : null,
      he = ({
        id: e,
        label: r,
        required: t,
        hint: s,
        error: a,
        isLoading: i = !1,
        children: o,
        loadingContent: n,
        className: d,
      }) =>
        (0, l.jsxs)('div', {
          className: u('mb-4', i && 'opacity-70', d),
          children: [
            (0, l.jsx)(pe, { id: e, label: r, required: t, hint: s }),
            i && n ? n : o,
            (0, l.jsx)(_e, { error: a }),
          ],
        }),
      ve = (e, r) => {
        if (!r || !e) return e;
        const t = e.replace(/[^a-zA-Z0-9]/g, '');
        let s = '',
          a = 0;
        for (let e = 0; e < r.length && a < t.length; e++) {
          const i = r[e];
          '#' === i
            ? a < t.length && (/\d/.test(t[a]) && (s += t[a]), a++)
            : 'A' === i
              ? a < t.length && (/[a-zA-Z]/.test(t[a]) && (s += t[a]), a++)
              : '*' === i
                ? a < t.length && ((s += t[a]), a++)
                : (s += i);
        }
        return s;
      },
      be = ({ field: e, value: r, onChange: t, error: s, isLoading: a = !1 }) => {
        const [i, o] = (0, c.useState)(e.mask ? ve(r || '', e.mask) : r || ''),
          n = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          const t = e.mask ? ve(r || '', e.mask) : r || '';
          o(t), n.current && n.current.value !== t && (n.current.value = t);
        }, [r, e.mask]);
        const d = (0, l.jsx)('div', {
            className: u('TextField-module__formSkeleton__v6o1i', 'w-full py-2'),
            children: (0, l.jsx)('div', {
              className: u(
                'TextField-module__skeletonInput__LoKXO',
                'w-full h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse'
              ),
            }),
          }),
          f = (0, l.jsx)('input', {
            ref: n,
            id: e.id,
            type: 'text',
            className: u(
              'TextField-module__formInput__ELN4Z',
              s && 'TextField-module__formInputError__ZucRy',
              'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              s && 'border-red-500 focus:ring-red-500 focus:border-red-500'
            ),
            value: i,
            onChange: (r) => {
              const s = r.target.value;
              if (e.mask) {
                let r = ((e) => e.replace(/[^a-zA-Z0-9]/g, ''))(s);
                const a = (e.mask.match(/[#A*]/g) || []).length;
                r.length > a && (r = r.substring(0, a));
                const i = ve(r, e.mask);
                o(i), t(r);
              } else o(s), t(s);
            },
            placeholder: e.placeholder,
            disabled: a,
          });
        return (0, l.jsx)(he, {
          id: e.id,
          label: e.label,
          required: e.required,
          error: s,
          isLoading: a,
          loadingContent: d,
          className: u(
            'TextField-module__formField__AwSj8',
            a && 'TextField-module__loading__mLvmA'
          ),
          children: f,
        });
      };
    var xe = function (e, r, t, s) {
      return new (t || (t = Promise))(function (a, i) {
        function o(e) {
          try {
            n(s.next(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          try {
            n(s.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function n(e) {
          var r;
          e.done
            ? a(e.value)
            : ((r = e.value),
              r instanceof t
                ? r
                : new t(function (e) {
                    e(r);
                  })).then(o, l);
        }
        n((s = s.apply(e, r || [])).next());
      });
    };
    const Fe = (e, r = {}) => {
        const t = (0, c.useMemo)(
            () =>
              ((e) => {
                const r = {};
                for (const t of e.rows) for (const e of t.columns) r[e.id] = e;
                return r;
              })(e),
            [e]
          ),
          s = (0, c.useMemo)(
            () =>
              ((e) => {
                var r, t, s;
                const a = {};
                for (const [s, i] of Object.entries(e)) {
                  const e = {};
                  i.required && (e.required = { value: !0, message: 'This field is required' }),
                    (null === (r = i.validation) || void 0 === r ? void 0 : r.pattern) &&
                      (e.pattern = {
                        value: new RegExp(i.validation.pattern),
                        message: i.validation.message || 'Invalid format',
                      }),
                    'chip' === i.type &&
                      (i.minItems &&
                        (e.validate = Object.assign(Object.assign({}, e.validate), {
                          minItems: (e) =>
                            !e ||
                            e.length >= (i.minItems || 0) ||
                            `Minimum ${i.minItems} items required`,
                        })),
                      i.maxItems &&
                        (e.validate = Object.assign(Object.assign({}, e.validate), {
                          maxItems: (e) =>
                            !e ||
                            e.length <= (i.maxItems || Number.POSITIVE_INFINITY) ||
                            `Maximum ${i.maxItems} items allowed`,
                        }))),
                    (null === (t = i.validation) || void 0 === t ? void 0 : t.custom) &&
                      (e.validate = Object.assign(Object.assign({}, e.validate), {
                        custom: i.validation.custom,
                      })),
                    (a[s] = e);
                }
                return (
                  e.password &&
                    e.confirmPassword &&
                    (a.confirmPassword = Object.assign(Object.assign({}, a.confirmPassword), {
                      validate: Object.assign(
                        Object.assign(
                          {},
                          null === (s = a.confirmPassword) || void 0 === s ? void 0 : s.validate
                        ),
                        { passwordMatch: (e, r) => e === r.password || 'Passwords do not match' }
                      ),
                    })),
                  a
                );
              })(t),
            [t]
          ),
          a = (0, c.useMemo)(
            () =>
              ((e, r = {}) => {
                const t = Object.assign({}, r);
                for (const [r, s] of Object.entries(e))
                  if (void 0 === t[r])
                    if (void 0 !== s.defaultValue) t[r] = s.defaultValue;
                    else
                      switch (s.type) {
                        case 'text':
                        case 'select':
                        default:
                          t[r] = '';
                          break;
                        case 'chip':
                        case 'array':
                          t[r] = [];
                      }
                return t;
              })(t, r.defaultValues),
            [t, r.defaultValues]
          ),
          {
            setValue: i,
            getValues: o,
            reset: l,
            handleSubmit: n,
            formState: d,
            trigger: u,
            register: f,
          } = (function (e = {}) {
            const r = c.useRef(void 0),
              t = c.useRef(void 0),
              [s, a] = c.useState({
                isDirty: !1,
                isValidating: !1,
                isLoading: P(e.defaultValues),
                isSubmitted: !1,
                isSubmitting: !1,
                isSubmitSuccessful: !1,
                isValid: !1,
                submitCount: 0,
                dirtyFields: {},
                touchedFields: {},
                validatingFields: {},
                errors: e.errors || {},
                disabled: e.disabled || !1,
                defaultValues: P(e.defaultValues) ? void 0 : e.defaultValues,
              });
            r.current || (r.current = { ...ge(e), formState: s });
            const i = r.current.control;
            return (
              (i._options = e),
              (function (e) {
                const r = c.useRef(e);
                (r.current = e),
                  c.useEffect(() => {
                    const t =
                      !e.disabled &&
                      r.current.subject &&
                      r.current.subject.subscribe({ next: r.current.next });
                    return () => {
                      t && t.unsubscribe();
                    };
                  }, [e.disabled]);
              })({
                subject: i._subjects.state,
                next: (e) => {
                  ((e, r, t, s) => {
                    t(e);
                    const { name: a, ...i } = e;
                    return (
                      D(i) ||
                      Object.keys(i).length >= Object.keys(r).length ||
                      Object.keys(i).find((e) => r[e] === (!s || k))
                    );
                  })(e, i._proxyFormState, i._updateFormState, !0) && a({ ...i._formState });
                },
              }),
              c.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
              c.useEffect(() => {
                if (i._proxyFormState.isDirty) {
                  const e = i._getDirty();
                  e !== s.isDirty && i._subjects.state.next({ isDirty: e });
                }
              }, [i, s.isDirty]),
              c.useEffect(() => {
                e.values && !te(e.values, t.current)
                  ? (i._reset(e.values, i._options.resetOptions),
                    (t.current = e.values),
                    a((e) => ({ ...e })))
                  : i._resetDefaultValues();
              }, [e.values, i]),
              c.useEffect(() => {
                e.errors && i._setErrors(e.errors);
              }, [e.errors, i]),
              c.useEffect(() => {
                i._state.mount || (i._updateValid(), (i._state.mount = !0)),
                  i._state.watch &&
                    ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
                  i._removeUnmounted();
              }),
              c.useEffect(() => {
                e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
              }, [e.shouldUnregister, i]),
              (r.current.formState = ((e, r, t, s = !0) => {
                const a = { defaultValues: r._defaultValues };
                for (const i in e)
                  Object.defineProperty(a, i, {
                    get: () => {
                      const a = i;
                      return (
                        r._proxyFormState[a] !== k && (r._proxyFormState[a] = !s || k),
                        t && (t[a] = !0),
                        e[a]
                      );
                    },
                  });
                return a;
              })(s, i)),
              r.current
            );
          })({ defaultValues: a, mode: r.mode || 'onSubmit' });
        (0, c.useEffect)(() => {
          for (const [e, r] of Object.entries(s)) f(e, r);
        }, [f, s]);
        const m = (0, c.useMemo)(() => {
          const r = {},
            t = ((e) => {
              const r = [];
              for (const t of e.rows) for (const e of t.columns) 'array' === e.type && r.push(e);
              return r;
            })(e);
          for (const e of t)
            r[e.id] = {
              add: (r) => {
                const t = o(e.id) || [];
                i(e.id, [...t, r], { shouldDirty: !0, shouldValidate: !0 });
              },
              remove: (r) => {
                const t = o(e.id) || [];
                i(
                  e.id,
                  t.filter((e, t) => t !== r),
                  { shouldDirty: !0, shouldValidate: !0 }
                );
              },
              move: (r, t) => {
                const s = [...(o(e.id) || [])],
                  [a] = s.splice(r, 1);
                s.splice(t, 0, a), i(e.id, s, { shouldDirty: !0, shouldValidate: !0 });
              },
              update: (r, t) => {
                const s = [...(o(e.id) || [])];
                (s[r] = t), i(e.id, s, { shouldDirty: !0, shouldValidate: !0 });
              },
            };
          return r;
        }, [e, o, i]);
        return {
          state: {
            raw: o(),
            masked: (() => {
              const e = o(),
                r = Object.assign({}, e);
              for (const [s, a] of Object.entries(t))
                if ('text' === a.type && a.mask) {
                  const t = a.mask,
                    i = e[s];
                  t && i && (r[s] = ve(i, t));
                }
              return r;
            })(),
          },
          formState: {
            raw: o(),
            isDirty: d.isDirty,
            isValid: d.isValid,
            isSubmitted: d.isSubmitted,
            isSubmitting: d.isSubmitting,
            isSubmitSuccessful: d.isSubmitSuccessful,
            errors: Object.entries(d.errors).reduce(
              (e, [r, t]) => (
                t &&
                  (e[r] = {
                    message: String(
                      'object' == typeof t && null !== t && 'message' in t ? t.message : t
                    ),
                  }),
                e
              ),
              {}
            ),
            dirtyFields: d.dirtyFields,
            touchedFields: d.touchedFields,
          },
          setValue: (e, r) => {
            i(e, r, { shouldDirty: !0, shouldTouch: !0, shouldValidate: !0 });
          },
          getValue: (e) => o(e),
          resetForm: () => {
            l(a);
          },
          validateField: (e, r) =>
            xe(void 0, void 0, void 0, function* () {
              return void 0 !== r && i(e, r, { shouldValidate: !0 }), u(e);
            }),
          handleSubmit: (e) => (t) => (
            t && t.preventDefault(),
            n((t) =>
              xe(void 0, void 0, void 0, function* () {
                e ? yield e(t) : r.onSubmit && (yield r.onSubmit(t));
              })
            )(t)
          ),
          arrayFields: m,
        };
      },
      we = ({ field: e, value: r, onChange: t, error: s, isLoading: a = !1 }) => {
        const i = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          i.current && i.current.value !== r && (i.current.value = r || '');
        }, [r]);
        const o = e.options.map((e) => ('string' == typeof e ? { value: e, label: e } : e)),
          n = (0, l.jsx)('div', {
            className: u('SelectField-module__formSkeleton__MfS8u', 'w-full py-2'),
            children: (0, l.jsx)('div', {
              className: u(
                'SelectField-module__skeletonInput__LrJkD',
                'w-full h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse'
              ),
            }),
          }),
          d = (0, l.jsxs)('select', {
            ref: i,
            id: e.id,
            className: u(
              'SelectField-module__formSelect__OU3Im',
              s && 'SelectField-module__formSelectError__XRB0r',
              'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              s && 'border-red-500 focus:ring-red-500 focus:border-red-500'
            ),
            defaultValue: r || '',
            onChange: (e) => {
              t(e.target.value);
            },
            disabled: a,
            children: [
              (0, l.jsx)('option', { value: '', children: e.placeholder || 'Select an option' }),
              o.map((e) =>
                'string' == typeof e
                  ? (0, l.jsx)('option', { value: e, children: e }, e)
                  : (0, l.jsx)('option', { value: e.value, children: e.label }, e.value)
              ),
            ],
          });
        return (0, l.jsx)(he, {
          id: e.id,
          label: e.label,
          required: e.required,
          error: s,
          isLoading: a,
          loadingContent: n,
          className: u(
            'SelectField-module__formField__CMj_6',
            a && 'SelectField-module__loading__LqGBL'
          ),
          children: d,
        });
      },
      Se = 'ChipField-module__skeletonChip__iOmyT',
      je = ({ field: e, value: r = [], onChange: t, error: s, isLoading: a = !1 }) => {
        const [i, o] = (0, c.useState)(r || []),
          [n, d] = (0, c.useState)(''),
          [f, m] = (0, c.useState)(!1),
          [y, g] = (0, c.useState)([]),
          p = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          o(r || []);
        }, [r]);
        const _ = (0, c.useMemo)(
          () => e.options.map((e) => ('string' == typeof e ? { value: e, label: e } : e)),
          [e.options]
        );
        (0, c.useEffect)(() => {
          if ('' === n.trim()) return void g([]);
          const e = _.filter(
            (e) => e.label.toLowerCase().includes(n.toLowerCase()) && !i.includes(e.value)
          );
          g(e);
        }, [n, _, i]);
        const h = (r) => {
            ((r) => {
              if (a) return;
              if (i.includes(r)) return;
              if (e.maxItems && i.length >= e.maxItems) return;
              const s = [...i, r];
              o(s), d(''), m(!1), t(s);
            })(r.value),
              p.current && p.current.focus();
          },
          v = (0, l.jsxs)('div', {
            className: u('ChipField-module__formSkeleton__t_zYv', 'w-full py-2'),
            children: [
              (0, l.jsx)('div', {
                className: u(
                  'ChipField-module__skeletonInput__Yfz1L',
                  'w-full h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse'
                ),
              }),
              (0, l.jsxs)('div', {
                className: u('ChipField-module__skeletonChips__vVvxK', 'flex flex-wrap gap-2 mt-2'),
                children: [
                  (0, l.jsx)('div', {
                    className: u(
                      Se,
                      'w-[100px] h-[32px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded-full animate-pulse'
                    ),
                  }),
                  (0, l.jsx)('div', {
                    className: u(
                      Se,
                      'w-[100px] h-[32px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded-full animate-pulse'
                    ),
                  }),
                ],
              }),
            ],
          }),
          b = (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)('div', {
                className: u('ChipField-module__chipAutocomplete__EO0pc', 'relative w-full'),
                children: [
                  (0, l.jsx)('input', {
                    ref: p,
                    type: 'text',
                    className: u(
                      'ChipField-module__formInput__cxYpm',
                      'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    ),
                    placeholder: e.placeholder || 'Type to search...',
                    value: n,
                    onChange: (e) => {
                      d(e.target.value), m(!0);
                    },
                    onFocus: () => {
                      '' !== n.trim() && m(!0);
                    },
                    onBlur: () => {
                      setTimeout(() => {
                        m(!1);
                      }, 200);
                    },
                    disabled: a || (!!e.maxItems && i.length >= e.maxItems),
                  }),
                  f &&
                    y.length > 0 &&
                    (0, l.jsx)('div', {
                      className: u(
                        'ChipField-module__chipDropdown__WJD9I',
                        'absolute top-full left-0 w-full max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1'
                      ),
                      children: y.map((e) =>
                        (0, l.jsx)(
                          'button',
                          {
                            type: 'button',
                            className: u(
                              'ChipField-module__chipOption__tWGMe',
                              'p-2 cursor-pointer transition-colors duration-200 text-left w-full border-none bg-transparent hover:bg-gray-100'
                            ),
                            onClick: () => h(e),
                            onKeyPress: (r) => {
                              ('Enter' !== r.key && ' ' !== r.key) || h(e);
                            },
                            children: e.label,
                          },
                          e.value
                        )
                      ),
                    }),
                ],
              }),
              !a &&
                (0, l.jsx)('div', {
                  className: u(
                    'ChipField-module__chipContainer__ZSYrl',
                    'flex flex-wrap gap-2 mt-2'
                  ),
                  children: i.map((e) => {
                    const r = _.find((r) => r.value === e),
                      s = r ? r.label : e;
                    return (0, l.jsxs)(
                      'div',
                      {
                        className: u(
                          'ChipField-module__chip__yjiHz',
                          'ChipField-module__chipSelected__c_47y',
                          'inline-flex items-center px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-full text-sm gap-2'
                        ),
                        children: [
                          (0, l.jsx)('span', {
                            className: u('ChipField-module__chipLabel__GE_Ac', 'mr-1'),
                            children: s,
                          }),
                          (0, l.jsx)('button', {
                            type: 'button',
                            className: u(
                              'ChipField-module__chipRemove__Xeqsz',
                              'bg-transparent border-none text-inherit text-xl leading-none p-0 cursor-pointer opacity-70 hover:opacity-100'
                            ),
                            onClick: () =>
                              ((e) => {
                                if (a) return;
                                const r = i.filter((r) => r !== e);
                                o(r), t(r);
                              })(e),
                            'aria-label': `Remove ${s}`,
                            children: '×',
                          }),
                        ],
                      },
                      e
                    );
                  }),
                }),
            ],
          });
        return (0, l.jsx)(he, {
          id: e.id,
          label: e.label,
          required: e.required,
          hint: e.minItems ? `Select at least ${e.minItems}` : void 0,
          error: s,
          isLoading: a,
          loadingContent: v,
          className: u(
            'ChipField-module__formField__JhKZA',
            a && 'ChipField-module__loading__jJEWU'
          ),
          children: b,
        });
      },
      Ae = 'ArrayField-module__skeletonArrayItem__iYcsF',
      Ve = 'ArrayField-module__skeletonInput__SGxML',
      ke = 'ArrayField-module__skeletonButton__gkkXM',
      Ne = ({
        field: e,
        value: r = [],
        onChange: t,
        error: s,
        arrayOperations: a,
        isLoading: i = !1,
      }) => {
        const [o, n] = (0, c.useState)(r || []);
        (0, c.useEffect)(() => {
          n(r || []);
        }, [r]);
        const d = (0, l.jsx)('div', {
            className: u(
              'ArrayField-module__arrayFieldHeader__COUrh',
              'flex justify-between items-center mb-4'
            ),
            children: (0, l.jsx)('button', {
              type: 'button',
              className: u(
                'ArrayField-module__arrayAddButton__s2Q85',
                'px-3 py-1 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600',
                i || (e.maxItems && o.length >= e.maxItems) ? 'bg-blue-300 cursor-not-allowed' : ''
              ),
              onClick: () => {
                i || (e.maxItems && o.length >= e.maxItems) || a.add('');
              },
              disabled: i || (!!e.maxItems && o.length >= e.maxItems),
              'aria-label': 'Add item',
              children: 'Add',
            }),
          }),
          f = (0, l.jsx)('div', {
            className: u('ArrayField-module__formSkeleton__UaduN', 'w-full py-2'),
            children: (0, l.jsxs)('div', {
              className: u(
                'ArrayField-module__skeletonArrayItems__yP0wo',
                'flex flex-col gap-4 mt-4'
              ),
              children: [
                (0, l.jsxs)('div', {
                  className: u(
                    Ae,
                    'flex gap-4 items-center p-4 bg-white border border-gray-200 rounded-md'
                  ),
                  children: [
                    (0, l.jsx)('div', {
                      className: u(
                        Ve,
                        'w-full h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse'
                      ),
                    }),
                    (0, l.jsx)('div', {
                      className: u(
                        ke,
                        'w-[80px] h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse flex-shrink-0'
                      ),
                    }),
                  ],
                }),
                o.length > 1 &&
                  (0, l.jsxs)('div', {
                    className: u(
                      Ae,
                      'flex gap-4 items-center p-4 bg-white border border-gray-200 rounded-md'
                    ),
                    children: [
                      (0, l.jsx)('div', {
                        className: u(
                          Ve,
                          'w-full h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse'
                        ),
                      }),
                      (0, l.jsx)('div', {
                        className: u(
                          ke,
                          'w-[80px] h-[38px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-pulse flex-shrink-0'
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          }),
          m = (0, l.jsxs)(l.Fragment, {
            children: [
              d,
              0 === o.length &&
                !i &&
                (0, l.jsx)('div', {
                  className: u(
                    'ArrayField-module__arrayEmptyMessage__X1Gik',
                    'text-center p-4 text-gray-500 italic bg-white border border-dashed border-gray-300 rounded-md'
                  ),
                  children: 'No items added yet. Click "Add" to add an item.',
                }),
              o.length > 0 &&
                !i &&
                (0, l.jsx)('div', {
                  className: u('ArrayField-module__arrayItems__galYS', 'flex flex-col gap-4'),
                  children: o.map((r, s) =>
                    (0, l.jsxs)(
                      'div',
                      {
                        className: u(
                          'ArrayField-module__arrayItem__NtnYL',
                          'flex gap-4 items-start p-4 bg-white border border-gray-200 rounded-md'
                        ),
                        children: [
                          (0, l.jsx)('div', {
                            className: u('ArrayField-module__arrayItemContent__hWCBr', 'flex-1'),
                            children:
                              'text' === e.template.type &&
                              (0, l.jsx)(be, {
                                field: Object.assign(Object.assign({}, e.template), {
                                  id: `${e.id}-${s}`,
                                  label: `Item ${s + 1}`,
                                  type: 'text',
                                }),
                                value: r,
                                onChange: (e) =>
                                  ((e, r) => {
                                    if (!i)
                                      if (a.update) a.update(e, r);
                                      else {
                                        const s = [...o];
                                        (s[e] = r), n(s), t(s);
                                      }
                                  })(s, e),
                                isLoading: i,
                              }),
                          }),
                          (0, l.jsx)('button', {
                            type: 'button',
                            className: u(
                              'ArrayField-module__arrayRemoveButton___Bh0m',
                              'px-3 py-1 bg-red-500 text-white rounded-md text-sm font-medium mt-6 hover:bg-red-600',
                              i || (e.minItems && o.length <= e.minItems)
                                ? 'bg-red-300 cursor-not-allowed'
                                : ''
                            ),
                            onClick: () =>
                              ((r) => {
                                i || (e.minItems && o.length <= e.minItems) || a.remove(r);
                              })(s),
                            disabled: i || (!!e.minItems && o.length <= e.minItems),
                            'aria-label': `Remove item ${s + 1}`,
                            children: 'Remove',
                          }),
                        ],
                      },
                      `${e.id}-item-${s}`
                    )
                  ),
                }),
            ],
          });
        return (0, l.jsx)(he, {
          id: e.id,
          label: e.label,
          required: e.required,
          hint: e.minItems ? `Minimum ${e.minItems}` : void 0,
          error: s,
          isLoading: i,
          loadingContent: f,
          className: u(
            'ArrayField-module__formField___xnqR',
            'ArrayField-module__arrayField__Xd5va',
            i && 'ArrayField-module__loading__xbJhG',
            'border border-gray-200 rounded-md p-4 bg-gray-50'
          ),
          children: m,
        });
      },
      Ce = ({ children: e, id: r }) =>
        (0, l.jsx)(
          'div',
          {
            className: u('FormBuilder-module__formRow__mPnq8', 'flex flex-wrap mb-6 gap-4 w-full'),
            children: e,
          },
          r
        ),
      De = ({ children: e, id: r }) =>
        (0, l.jsx)(
          'div',
          {
            className: u('FormBuilder-module__formColumn__UZ0B9', 'flex-1 min-w-[250px] w-full'),
            children: e,
          },
          r
        ),
      Oe = ({
        config: e,
        isLoading: r = !1,
        form: t,
        RowWrapper: s = Ce,
        ColumnWrapper: a = De,
      }) => {
        const i = Fe(e),
          o = t || i;
        return (0, l.jsx)('form', {
          className: u('FormBuilder-module__formBuilder__fC42t', 'w-full max-w-full font-sans'),
          children: e.rows.map((e) => {
            const t = ((e) => (e.wrapper ? e.wrapper : s))(e);
            return (0, l.jsx)(
              t,
              Object.assign({ id: e.id }, e.wrapperProps, {
                children: e.columns.map((e) => {
                  var t, s, i, n;
                  const d = ((e) => (e.wrapper ? e.wrapper : a))(e);
                  return (0, l.jsxs)(
                    d,
                    Object.assign({ id: e.id }, e.wrapperProps, {
                      children: [
                        'text' === e.type &&
                          (0, l.jsx)(be, {
                            field: e,
                            value: o.getValue(e.id) || '',
                            onChange: (r) => {
                              o.setValue(e.id, r);
                            },
                            error:
                              null === (t = o.formState.errors[e.id]) || void 0 === t
                                ? void 0
                                : t.message,
                            isLoading: r,
                          }),
                        'select' === e.type &&
                          (0, l.jsx)(we, {
                            field: e,
                            value: o.getValue(e.id) || '',
                            onChange: (r) => {
                              o.setValue(e.id, r);
                            },
                            error:
                              null === (s = o.formState.errors[e.id]) || void 0 === s
                                ? void 0
                                : s.message,
                            isLoading: r,
                          }),
                        'chip' === e.type &&
                          (0, l.jsx)(je, {
                            field: e,
                            value: o.getValue(e.id) || [],
                            onChange: (r) => {
                              o.setValue(e.id, r);
                            },
                            error:
                              null === (i = o.formState.errors[e.id]) || void 0 === i
                                ? void 0
                                : i.message,
                            isLoading: r,
                          }),
                        'array' === e.type &&
                          (0, l.jsx)(Ne, {
                            field: e,
                            value: o.getValue(e.id) || [],
                            onChange: (r) => {
                              o.setValue(e.id, r);
                            },
                            error:
                              null === (n = o.formState.errors[e.id]) || void 0 === n
                                ? void 0
                                : n.message,
                            arrayOperations: o.arrayFields[e.id],
                            isLoading: r,
                          }),
                      ],
                    }),
                    e.id
                  );
                }),
              }),
              e.id
            );
          }),
        });
      },
      Ie = i(98).useForm,
      Le = i(456).useQuery,
      Ee = (e) => {
        if (!e) return 'This field is required';
      };
    return o;
  })()
);
