

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // ✅ UNWRAP THE PROMISE

  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}

