import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, r as empty, q as query_selector_all, n as noop, u as destroy_each } from './client.367593b5.js';

/* src/routes/contest/index.svelte generated by Svelte v3.28.0 */

const file = "src/routes/contest/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (20:0) {#each contest as con}
function create_each_block(ctx) {
	let div2;
	let div1;
	let div0;
	let h5;
	let t0_value = /*con*/ ctx[1].title + "";
	let t0;
	let t1;
	let h6;
	let t2;
	let t3;
	let p;
	let t4;
	let t5;
	let a0;
	let t6;
	let t7;
	let a1;
	let t8;
	let t9;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h5 = element("h5");
			t0 = text(t0_value);
			t1 = space();
			h6 = element("h6");
			t2 = text("Card subtitle");
			t3 = space();
			p = element("p");
			t4 = text("Some quick example text to build on the card title and make up the bulk of the card's content.");
			t5 = space();
			a0 = element("a");
			t6 = text("Card link");
			t7 = space();
			a1 = element("a");
			t8 = text("Another link");
			t9 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
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
			t3 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "Some quick example text to build on the card title and make up the bulk of the card's content.");
			p_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			a0 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "Card link");
			a0_nodes.forEach(detach_dev);
			t7 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Another link");
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "card-title svelte-1sgig4j");
			add_location(h5, file, 23, 12, 481);
			attr_dev(h6, "class", "card-subtitle mb-2 text-muted");
			add_location(h6, file, 24, 12, 533);
			attr_dev(p, "class", "card-text");
			add_location(p, file, 25, 12, 606);
			attr_dev(a0, "href", "#");
			attr_dev(a0, "class", "card-link");
			add_location(a0, file, 26, 12, 738);
			attr_dev(a1, "href", "#");
			attr_dev(a1, "class", "card-link");
			add_location(a1, file, 27, 12, 794);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file, 22, 8, 445);
			attr_dev(div1, "class", "card w-100");
			add_location(div1, file, 21, 4, 412);
			attr_dev(div2, "class", "row mt-4");
			add_location(div2, file, 20, 0, 385);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t0);
			append_dev(div0, t1);
			append_dev(div0, h6);
			append_dev(h6, t2);
			append_dev(div0, t3);
			append_dev(div0, p);
			append_dev(p, t4);
			append_dev(div0, t5);
			append_dev(div0, a0);
			append_dev(a0, t6);
			append_dev(div0, t7);
			append_dev(div0, a1);
			append_dev(a1, t8);
			append_dev(div2, t9);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*contest*/ 1 && t0_value !== (t0_value = /*con*/ ctx[1].title + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(20:0) {#each contest as con}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWQ5YzhlZDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVzdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCgnL2NvbnRlc3QuanNvbicpO1xuICAgIGNvbnN0IGNvbnRlc3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgY29udGVzdCB9O1xufVxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuZXhwb3J0IGxldCBjb250ZXN0O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07IFxuICAgIH1cbjwvc3R5bGU+XG57I2VhY2ggY29udGVzdCBhcyBjb259XG48ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e2Nvbi50aXRsZX08L2g1PlxuICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5DYXJkIHN1YnRpdGxlPC9oNj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjYXJkLWxpbmtcIj5DYXJkIGxpbms8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2FyZC1saW5rXCI+QW5vdGhlciBsaW5rPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2Plxuey9lYWNofSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdUJvQyxHQUFHLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBQVQsR0FBRyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFKdEMsR0FBTzs7OztnQ0FBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBQyxHQUFPOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFmZ0IsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BQ2pDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7T0FDdEMsT0FBTyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBRXJCLE9BQU87Ozs7OztPQUlULE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
