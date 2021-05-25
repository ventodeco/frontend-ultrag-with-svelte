import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, r as empty, q as query_selector_all, n as noop, u as destroy_each } from './client.d104b761.js';

/* src/routes/contest/index.svelte generated by Svelte v3.28.0 */

const file = "src/routes/contest/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (38:0) {#each contest as con}
function create_each_block(ctx) {
	let div12;
	let div11;
	let div10;
	let div0;
	let h50;
	let t0_value = /*con*/ ctx[1].title + "";
	let t0;
	let t1;
	let h51;
	let t2_value = /*con*/ ctx[1].getPoint + "";
	let t2;
	let t3;
	let t4_value = /*con*/ ctx[1].points + "";
	let t4;
	let t5;
	let t6;
	let div3;
	let div2;
	let div1;
	let t7;
	let div9;
	let div4;
	let t8_value = /*con*/ ctx[1].solved + "";
	let t8;
	let t9;
	let t10_value = /*con*/ ctx[1].total + "";
	let t10;
	let t11;
	let t12;
	let div8;
	let div7;
	let div5;
	let img;
	let img_src_value;
	let t13;
	let div6;
	let t14_value = /*con*/ ctx[1].deadline.day + "";
	let t14;
	let t15;
	let t16_value = /*con*/ ctx[1].deadline.hour + "";
	let t16;
	let t17;
	let t18_value = /*con*/ ctx[1].deadline.minute + "";
	let t18;
	let t19;
	let t20;

	const block = {
		c: function create() {
			div12 = element("div");
			div11 = element("div");
			div10 = element("div");
			div0 = element("div");
			h50 = element("h5");
			t0 = text(t0_value);
			t1 = space();
			h51 = element("h5");
			t2 = text(t2_value);
			t3 = text(" / ");
			t4 = text(t4_value);
			t5 = text(" points");
			t6 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			t7 = space();
			div9 = element("div");
			div4 = element("div");
			t8 = text(t8_value);
			t9 = text(" / ");
			t10 = text(t10_value);
			t11 = text(" problems solved");
			t12 = space();
			div8 = element("div");
			div7 = element("div");
			div5 = element("div");
			img = element("img");
			t13 = space();
			div6 = element("div");
			t14 = text(t14_value);
			t15 = text(" day ");
			t16 = text(t16_value);
			t17 = text(" hours ");
			t18 = text(t18_value);
			t19 = text(" minutes");
			t20 = space();
			this.h();
		},
		l: function claim(nodes) {
			div12 = claim_element(nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div0 = claim_element(div10_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h50 = claim_element(div0_nodes, "H5", { class: true });
			var h50_nodes = children(h50);
			t0 = claim_text(h50_nodes, t0_value);
			h50_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			h51 = claim_element(div0_nodes, "H5", { class: true });
			var h51_nodes = children(h51);
			t2 = claim_text(h51_nodes, t2_value);
			t3 = claim_text(h51_nodes, " / ");
			t4 = claim_text(h51_nodes, t4_value);
			t5 = claim_text(h51_nodes, " points");
			h51_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t7 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div4 = claim_element(div9_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t8 = claim_text(div4_nodes, t8_value);
			t9 = claim_text(div4_nodes, " / ");
			t10 = claim_text(div4_nodes, t10_value);
			t11 = claim_text(div4_nodes, " problems solved");
			div4_nodes.forEach(detach_dev);
			t12 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			img = claim_element(div5_nodes, "IMG", { src: true, alt: true });
			div5_nodes.forEach(detach_dev);
			t13 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			t14 = claim_text(div6_nodes, t14_value);
			t15 = claim_text(div6_nodes, " day ");
			t16 = claim_text(div6_nodes, t16_value);
			t17 = claim_text(div6_nodes, " hours ");
			t18 = claim_text(div6_nodes, t18_value);
			t19 = claim_text(div6_nodes, " minutes");
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t20 = claim_space(div12_nodes);
			div12_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h50, "class", "card-title col-md-6 svelte-18tyoq1");
			add_location(h50, file, 42, 16, 871);
			attr_dev(h51, "class", "col-md-6 text-right points svelte-18tyoq1");
			add_location(h51, file, 43, 16, 940);
			attr_dev(div0, "class", "row par-points svelte-18tyoq1");
			add_location(div0, file, 41, 12, 826);
			attr_dev(div1, "class", "rectangle w-50 svelte-18tyoq1");
			add_location(div1, file, 47, 20, 1155);
			attr_dev(div2, "class", "col-md-12 bg-dark mx-1");
			add_location(div2, file, 46, 16, 1098);
			attr_dev(div3, "class", "row text-center");
			add_location(div3, file, 45, 12, 1052);
			attr_dev(div4, "class", "col-md-6 text-muted");
			add_location(div4, file, 52, 16, 1292);
			if (img.src !== (img_src_value = "time.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 56, 28, 1532);
			attr_dev(div5, "class", "col");
			add_location(div5, file, 55, 24, 1486);
			attr_dev(div6, "class", "pr-3 text-muted");
			add_location(div6, file, 58, 24, 1619);
			attr_dev(div7, "class", "row text-right");
			add_location(div7, file, 54, 20, 1433);
			attr_dev(div8, "class", "col-md-6");
			add_location(div8, file, 53, 16, 1390);
			attr_dev(div9, "class", "row pt-2 bot-con svelte-18tyoq1");
			add_location(div9, file, 51, 12, 1245);
			attr_dev(div10, "class", "card-body");
			add_location(div10, file, 40, 8, 790);
			attr_dev(div11, "class", "card w-100");
			add_location(div11, file, 39, 4, 757);
			attr_dev(div12, "class", "row mt-4 w3-animate-bottom svelte-18tyoq1");
			add_location(div12, file, 38, 0, 712);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div12, anchor);
			append_dev(div12, div11);
			append_dev(div11, div10);
			append_dev(div10, div0);
			append_dev(div0, h50);
			append_dev(h50, t0);
			append_dev(div0, t1);
			append_dev(div0, h51);
			append_dev(h51, t2);
			append_dev(h51, t3);
			append_dev(h51, t4);
			append_dev(h51, t5);
			append_dev(div10, t6);
			append_dev(div10, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div10, t7);
			append_dev(div10, div9);
			append_dev(div9, div4);
			append_dev(div4, t8);
			append_dev(div4, t9);
			append_dev(div4, t10);
			append_dev(div4, t11);
			append_dev(div9, t12);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, div5);
			append_dev(div5, img);
			append_dev(div7, t13);
			append_dev(div7, div6);
			append_dev(div6, t14);
			append_dev(div6, t15);
			append_dev(div6, t16);
			append_dev(div6, t17);
			append_dev(div6, t18);
			append_dev(div6, t19);
			append_dev(div12, t20);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*contest*/ 1 && t0_value !== (t0_value = /*con*/ ctx[1].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*contest*/ 1 && t2_value !== (t2_value = /*con*/ ctx[1].getPoint + "")) set_data_dev(t2, t2_value);
			if (dirty & /*contest*/ 1 && t4_value !== (t4_value = /*con*/ ctx[1].points + "")) set_data_dev(t4, t4_value);
			if (dirty & /*contest*/ 1 && t8_value !== (t8_value = /*con*/ ctx[1].solved + "")) set_data_dev(t8, t8_value);
			if (dirty & /*contest*/ 1 && t10_value !== (t10_value = /*con*/ ctx[1].total + "")) set_data_dev(t10, t10_value);
			if (dirty & /*contest*/ 1 && t14_value !== (t14_value = /*con*/ ctx[1].deadline.day + "")) set_data_dev(t14, t14_value);
			if (dirty & /*contest*/ 1 && t16_value !== (t16_value = /*con*/ ctx[1].deadline.hour + "")) set_data_dev(t16, t16_value);
			if (dirty & /*contest*/ 1 && t18_value !== (t18_value = /*con*/ ctx[1].deadline.minute + "")) set_data_dev(t18, t18_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div12);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(38:0) {#each contest as con}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzkxNjQ4YjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVzdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCgnL2NvbnRlc3QuanNvbicpO1xuICAgIGNvbnN0IGNvbnRlc3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgY29udGVzdCB9O1xufVxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuZXhwb3J0IGxldCBjb250ZXN0O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07IFxuICAgIH1cbiAgICAucmVjdGFuZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgIH0gIFxuICAgIC5wb2ludHMge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgfVxuICAgIC5wYXItcG9pbnRzIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuICAgIC53My1hbmltYXRlLWJvdHRvbSB7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgfVxuICAgIC5ib3QtY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIH1cbjwvc3R5bGU+XG57I2VhY2ggY29udGVzdCBhcyBjb259XG48ZGl2IGNsYXNzPVwicm93IG10LTQgdzMtYW5pbWF0ZS1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBhci1wb2ludHNcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIGNvbC1tZC02XCI+e2Nvbi50aXRsZX08L2g1PiAgICBcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjb2wtbWQtNiB0ZXh0LXJpZ2h0IHBvaW50c1wiPntjb24uZ2V0UG9pbnR9IC8ge2Nvbi5wb2ludHN9IHBvaW50czwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJnLWRhcmsgbXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlIHctNTBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHB0LTIgYm90LWNvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiB0ZXh0LW11dGVkXCI+e2Nvbi5zb2x2ZWR9IC8ge2Nvbi50b3RhbH0gcHJvYmxlbXMgc29sdmVkPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwidGltZS5zdmdcIiBhbHQ9XCJcIj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwci0zIHRleHQtbXV0ZWRcIj57Y29uLmRlYWRsaW5lLmRheX0gZGF5IHtjb24uZGVhZGxpbmUuaG91cn0gaG91cnMge2Nvbi5kZWFkbGluZS5taW51dGV9IG1pbnV0ZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbnsvZWFjaH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkEwQ2lELEdBQUcsSUFBQyxLQUFLOzs7O3dCQUNGLEdBQUcsSUFBQyxRQUFROzs7d0JBQUssR0FBRyxJQUFDLE1BQU07Ozs7Ozs7Ozs7d0JBU2pDLEdBQUcsSUFBQyxNQUFNOzs7eUJBQUssR0FBRyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7O3lCQU1wQixHQUFHLElBQUMsUUFBUSxDQUFDLEdBQUc7Ozt5QkFBTyxHQUFHLElBQUMsUUFBUSxDQUFDLElBQUk7Ozt5QkFBUyxHQUFHLElBQUMsUUFBUSxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBaEJ6RSxHQUFHLElBQUMsS0FBSztpRUFDRixHQUFHLElBQUMsUUFBUTtpRUFBSyxHQUFHLElBQUMsTUFBTTtpRUFTakMsR0FBRyxJQUFDLE1BQU07bUVBQUssR0FBRyxJQUFDLEtBQUs7bUVBTXBCLEdBQUcsSUFBQyxRQUFRLENBQUMsR0FBRzttRUFBTyxHQUFHLElBQUMsUUFBUSxDQUFDLElBQUk7bUVBQVMsR0FBRyxJQUFDLFFBQVEsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBckJuSCxHQUFPOzs7O2dDQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFDLEdBQU87Ozs7K0JBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWpDZ0IsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BQ2pDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7T0FDdEMsT0FBTyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBRXJCLE9BQU87Ozs7OztPQUlULE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
