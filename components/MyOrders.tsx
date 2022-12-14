export default function MyOrders() {
  const orders = [
    {
      date: 'May 2, 2022',
      productId: 1023,
      name: 'Pen',
      price: 75,
      img: 'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
      store: `Frank's pens`,
    },
    {
      date: 'May 2, 2022',
      productId: 1023,
      name: 'Pen',
      price: 75,
      img: 'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
      store: `Frank's pens`,
    },
    {
      date: 'May 2, 2022',
      productId: 1023,
      name: 'Pen',
      price: 75,
      img: 'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
      store: `Frank's pens`,
    },
    {
      date: 'May 2, 2022',
      productId: 1023,
      name: 'Pen',
      price: 75,
      img: 'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
      store: `Frank's pens`,
    },
  ]

  return (
    <div className="w-full space-y-5">
      <p className="font-bold text-3xl w-[65vw]">My Orders</p>
      <hr />
      <div>
        {orders.map((o) => {
          return (
            <div className="flex py-3 justify-between">
              <div className="flex space-x-10 justify-between">
                <img className="w-32 h-32" src={o.img} />
                <div>
                  <p className="font-bold">{o.name}</p>
                  <p className="font-medium">${o.price}</p>
                  <a
                  href="../StoreFront"
                  className="text-gray-600 hover:text-gray-800">By {o.store}</a>
                  <p className="text-gray-500">Ordered {o.date}</p>

                </div>
              </div>
              <div className="flex space-x-10 pt-10 justify-between font-bold text-navBarBg">
                <a href="../products/1">View Product</a>
                <a>Buy Again</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
