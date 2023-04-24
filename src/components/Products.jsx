import React, { useState } from "react";
export default function Products() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);
	
	return (
	<>
		<ul>
			<li>
				<div>
					<span>goods namme</span>
					<span>price</span>
				</div>
			</li>
		</ul>

		<button type="button" onClick={() => setCount((prev) => prev  + 1)}>{count}</button>
	</>
	)
}