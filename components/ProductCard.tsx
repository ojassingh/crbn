export default function ProductCard(props: any) {
  const { img, name } = props

  console.log(img, name)
  return (
    <a className="" href="/products/1">
      <img
        className="w-72 h-72 object-cover rounded"
        src={img}
      />
      <p className="pt-5">{name}</p>
      <p className="text-gray-400">Black</p>
      <p className="font-semibold">$75</p>
    </a>
  )
}
