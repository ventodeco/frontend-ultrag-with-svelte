import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.f36374d9.js';

/* src/routes/index.svelte generated by Svelte v3.28.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div2;
	let div0;
	let p0;
	let t1;
	let span;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let a;
	let t8;
	let t9;
	let div1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div0 = element("div");
			p0 = element("p");
			t1 = text("Welcome to ");
			span = element("span");
			t2 = text("ULTRAG");
			t3 = space();
			p1 = element("p");
			t4 = text("ULTRAG is an online automated judge for coding\n      problems hosted by Computing Laboratory,\n      Telkom University.");
			t5 = space();
			p2 = element("p");
			t6 = text("Improve your coding problem-solving skills here!");
			t7 = space();
			a = element("a");
			t8 = text("Solve a problem");
			t9 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-6j76nz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Welcome to ");
			span = claim_element(p0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "ULTRAG");
			span_nodes.forEach(detach_dev);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "ULTRAG is an online automated judge for coding\n      problems hosted by Computing Laboratory,\n      Telkom University.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Improve your coding problem-solving skills here!");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(div0_nodes);
			a = claim_element(div0_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t8 = claim_text(a_nodes, "Solve a problem");
			a_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true });
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "ULTRAG";
			attr_dev(span, "class", "svelte-m9pgfh");
			add_location(span, file, 35, 46, 457);
			attr_dev(p0, "class", "head font-weight-bold svelte-m9pgfh");
			add_location(p0, file, 35, 2, 413);
			attr_dev(p1, "class", "text svelte-m9pgfh");
			add_location(p1, file, 36, 5, 486);
			attr_dev(p2, "class", "text svelte-m9pgfh");
			add_location(p2, file, 39, 5, 630);
			attr_dev(a, "href", "contest");
			attr_dev(a, "class", "btn btn-outline-warning solve-button svelte-m9pgfh");
			add_location(a, file, 40, 5, 704);
			attr_dev(div0, "class", "my-5 col-md-6");
			add_location(div0, file, 34, 1, 383);
			if (img.src !== (img_src_value = "manwithlaptop.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Man With Laptop");
			add_location(img, file, 44, 2, 827);
			attr_dev(div1, "class", "col-md-6 my-5");
			add_location(div1, file, 43, 1, 797);
			attr_dev(div2, "class", "row w3-animate-opacity svelte-m9pgfh");
			add_location(div2, file, 33, 0, 345);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, p0);
			append_dev(p0, t1);
			append_dev(p0, span);
			append_dev(span, t2);
			append_dev(div0, t3);
			append_dev(div0, p1);
			append_dev(p1, t4);
			append_dev(div0, t5);
			append_dev(div0, p2);
			append_dev(p2, t6);
			append_dev(div0, t7);
			append_dev(div0, a);
			append_dev(a, t8);
			append_dev(div2, t9);
			append_dev(div2, div1);
			append_dev(div1, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWM4M2MxZDkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
