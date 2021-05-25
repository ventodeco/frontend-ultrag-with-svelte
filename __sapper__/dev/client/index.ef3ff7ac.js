import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, r as empty, q as query_selector_all, n as noop, u as destroy_each } from './client.5a044dfe.js';

/* src/routes/contest/index.svelte generated by Svelte v3.28.0 */

const file = "src/routes/contest/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (26:0) {#each contest as con}
function create_each_block(ctx) {
	let div6;
	let div5;
	let div4;
	let div0;
	let h5;
	let t0_value = /*con*/ ctx[1].title + "";
	let t0;
	let t1;
	let h6;
	let t2;
	let t3;
	let div3;
	let div2;
	let div1;
	let t4;
	let p;
	let t5;
	let t6;
	let a0;
	let t7;
	let t8;
	let a1;
	let t9;
	let t10;

	const block = {
		c: function create() {
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			h5 = element("h5");
			t0 = text(t0_value);
			t1 = space();
			h6 = element("h6");
			t2 = text("Card subtitle");
			t3 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			t4 = space();
			p = element("p");
			t5 = text("Some quick example text to build on the card title and make up the bulk of the card's content.");
			t6 = space();
			a0 = element("a");
			t7 = text("Card link");
			t8 = space();
			a1 = element("a");
			t9 = text("Another link");
			t10 = space();
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t0 = claim_text(h5_nodes, t0_value);
			h5_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			h6 = claim_element(div0_nodes, "H6", { class: true });
			var h6_nodes = children(h6);
			t2 = claim_text(h6_nodes, "Card subtitle");
			h6_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			p = claim_element(div4_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "Some quick example text to build on the card title and make up the bulk of the card's content.");
			p_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			a0 = claim_element(div4_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t7 = claim_text(a0_nodes, "Card link");
			a0_nodes.forEach(detach_dev);
			t8 = claim_space(div4_nodes);
			a1 = claim_element(div4_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "Another link");
			a1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t10 = claim_space(div6_nodes);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "card-title col svelte-fd6z06");
			add_location(h5, file, 30, 16, 643);
			attr_dev(h6, "class", "card-subtitle mb-2 text-muted");
			add_location(h6, file, 31, 16, 707);
			attr_dev(div0, "class", "row");
			add_location(div0, file, 29, 12, 609);
			attr_dev(div1, "class", "rectangle svelte-fd6z06");
			add_location(div1, file, 35, 20, 895);
			attr_dev(div2, "class", "col-md-12");
			add_location(div2, file, 34, 16, 851);
			attr_dev(div3, "class", "row w-100 text-center");
			add_location(div3, file, 33, 12, 799);
			attr_dev(p, "class", "card-text");
			add_location(p, file, 40, 12, 1005);
			attr_dev(a0, "href", "#");
			attr_dev(a0, "class", "card-link");
			add_location(a0, file, 41, 12, 1137);
			attr_dev(a1, "href", "#");
			attr_dev(a1, "class", "card-link");
			add_location(a1, file, 42, 12, 1193);
			attr_dev(div4, "class", "card-body");
			add_location(div4, file, 28, 8, 573);
			attr_dev(div5, "class", "card w-100");
			add_location(div5, file, 27, 4, 540);
			attr_dev(div6, "class", "row mt-4");
			add_location(div6, file, 26, 0, 513);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div5);
			append_dev(div5, div4);
			append_dev(div4, div0);
			append_dev(div0, h5);
			append_dev(h5, t0);
			append_dev(div0, t1);
			append_dev(div0, h6);
			append_dev(h6, t2);
			append_dev(div4, t3);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div4, t4);
			append_dev(div4, p);
			append_dev(p, t5);
			append_dev(div4, t6);
			append_dev(div4, a0);
			append_dev(a0, t7);
			append_dev(div4, t8);
			append_dev(div4, a1);
			append_dev(a1, t9);
			append_dev(div6, t10);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*contest*/ 1 && t0_value !== (t0_value = /*con*/ ctx[1].title + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(26:0) {#each contest as con}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let each_1_anchor;
	let each_value = /*contest*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1nbb2k0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*contest*/ 1) {
				each_value = /*contest*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	const res = await this.fetch("/contest.json");
	const contest = await res.json();
	return { contest };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Contest", slots, []);
	let { contest } = $$props;
	const writable_props = ["contest"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contest> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("contest" in $$props) $$invalidate(0, contest = $$props.contest);
	};

	$$self.$capture_state = () => ({ preload, contest });

	$$self.$inject_state = $$props => {
		if ("contest" in $$props) $$invalidate(0, contest = $$props.contest);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [contest];
}

class Contest extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { contest: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contest",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*contest*/ ctx[0] === undefined && !("contest" in props)) {
			console.warn("<Contest> was created without expected prop 'contest'");
		}
	}

	get contest() {
		throw new Error("<Contest>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set contest(value) {
		throw new Error("<Contest>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Contest;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWYzZmY3YWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVzdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCgnL2NvbnRlc3QuanNvbicpO1xuICAgIGNvbnN0IGNvbnRlc3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgY29udGVzdCB9O1xufVxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuZXhwb3J0IGxldCBjb250ZXN0O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07IFxuICAgIH1cbiAgICAucmVjdGFuZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuPC9zdHlsZT5cbnsjZWFjaCBjb250ZXN0IGFzIGNvbn1cbjxkaXYgY2xhc3M9XCJyb3cgbXQtNFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIGNvbFwiPntjb24udGl0bGV9PC9oNT4gICAgXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5DYXJkIHN1YnRpdGxlPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNhcmQtbGlua1wiPkNhcmQgbGluazwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjYXJkLWxpbmtcIj5Bbm90aGVyIGxpbms8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG57L2VhY2h9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBOEI0QyxHQUFHLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUFULEdBQUcsSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTDlDLEdBQU87Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQUMsR0FBTzs7OzsrQkFBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBckJnQixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87T0FDakMsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTtPQUN0QyxPQUFPLFNBQVMsR0FBRyxDQUFDLElBQUk7VUFFckIsT0FBTzs7Ozs7O09BSVQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
