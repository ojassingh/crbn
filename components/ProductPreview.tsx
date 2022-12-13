import ImpactDonut from './ImpactDonut'

export default function ProductPreview() {

  const name = 'Pen'
  const price = 64
  const store = `Frank's pens`
  const description = `A statement that tells you how something or someone looks, sounds,
          etc. : words that describe something or someone. [count] Reporters
          called the scene “a disaster area,” and I think that was an accurate
          description. I applied for the position after reading the job
          description.`
  const mainImage =
    'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg'
  const otherPhotos = [
    'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
    'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
    'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
    'https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg',
  ]
  const features = [
    'Cleans 1lb of trash from Ocean',
    'Plants 1 tree',
    'More stuff here',
    'More stuff here',
    'More stuff here',
  ]

  const impact = {
    forestry: {
      color: 'red',
      value: 37
    },
    water: {
      color: 'blue',
      value: 62
    },
    animal: {
      color: 'green',
      value: 88
    }
  }

  return (
    <>
      <div className="lg:flex md:flex lg:px-10 md:px-10 sm:5 justify-between">
        <div className="lg:w-1/2 md:w-1/2 items-center p-10 space-y-5">
          <img className="rounded" src={mainImage} />
          <div className="flex justify-between items-center">
            {otherPhotos.map((p) => {
              return <img className="w-previewSm rounded" src={p} />
            })}
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 md:pr-10 sm:px-5">
          <p className="font-bold text-4xl mt-10">{name}</p>
          <p className="font-light text-4xl my-3">${price}</p>
          <a className="font-light text-sm text-gray-600 my-3" href="../StoreFront">by {store}</a>
          <p className="font-light text-gray-600 text-xl my-3">{description}</p>
          <a
            href="#"
            className="flex md:w-1/2 my-10 first-line:items-center justify-center rounded-md border border-transparent bg-navBarBg px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Purchase
          </a>
          <hr className="py-3" />
          <p className="font-medium text-xl text-navBarBg">Impact</p>
          <div className="justify-start text-center rounded-md border border-transparent text-base font-medium">
            <div className="flex px-11 py-5 justify-between text-center text-base font-medium">
              <div className="w-1/4 space-y-2">
                <ImpactDonut impact={impact.forestry}/>
                <p> Forestry </p>
              </div>
              <div className="w-1/4 space-y-2">
              <ImpactDonut impact={impact.water}/>
                <p> Water security </p>
              </div>
              <div className="w-1/4 space-y-2">
              <ImpactDonut impact={impact.animal}/>
                <p> Animal safety </p>
              </div>
            </div>
          </div>
          <hr className="py-3" />
          <p className="font-medium text-xl mb-3 text-navBarBg">Features</p>
          <ul className="font-light text-gray-600 text-md pb-5">
            {features.map((f) => {
              return <li>{f}</li>
            })}
          </ul>
        </div>
      </div>
      <hr className="py-3 mx-20" />
    </>
  )
}
