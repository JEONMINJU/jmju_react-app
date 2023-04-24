import React, { useState } from "react";
export default function Products() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);

	fetch('data/products.json')
	.then(res => res.json())
	.then(data=> {
		setProducts(data)
	})
	return (
	<>
		<ul>
			{products.map((product) => (
			<li key={product.id}>
				<div>
					<span>{product.name}</span>
					<span>{product.price}</span>
				</div>
			</li>
			))}
		</ul>

		<button type="button" onClick={() => setCount((prev) => prev  + 1)}>{count}</button>
	</>
	)
}