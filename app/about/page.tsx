// import  Link  from "next/link";

// export default function About() {
//   return (
//     <div>
//       <Link href="/about/1">Product 1</Link>
//       <br />
//       <Link href="/about/2">Product 2</Link>
//     </div>
//   );
// }
"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/about").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {items.length === 0 && <p>No products found.</p>}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong> - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
