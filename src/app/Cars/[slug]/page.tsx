import { client } from "@/sanity/lib/client"
import Image from 'next/image'



interface Props {
    params: {
        slug: string
    }
}

export default async function page({params}: Props) {
    const data = await client.fetch(`*[_type == "car" && slug.current == "${params.slug}"] {
        name, 
        brand, 
        type, 
        fuelCapacity, 
        transmission, 
        seatingCapacity, 
        pricePerDay, 
        originalPrice,
        tags,
        "slug": slug.current,
        "imageUrl": image.asset->url
      }`)
      const product = data[0];
    
    return (
        <div className="max-w-4xl mx-auto p-4 md:flex gap-40">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={350}
                        height={350}
                        className="w-full h-80 object-contain p-2 rounded"
                    />

            {/* Product Details */}
            <div className="mt-6 w-1/2">
                <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-lg text-gray-600 mt-2">{product.pricePerDay}</p>
            </div>
        </div>
    )
}