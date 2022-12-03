import LandingPage from './LandingPage'
import Navbar from './Navbar'
import ProductList from './ProductList'
import StoreFront from './StoreFront'

export default function ProductPreview() {
  return (
    <>
      <div className="lg:flex md:flex lg:px-10 md:px-10 sm:5 justify-between">
        <div className="lg:w-1/2 md:w-1/2 items-center p-10 space-y-5">
          <img
            className="rounded"
            src="https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg"
          />
          <div className="flex justify-between items-center">
            <img
              className="w-previewSm rounded"
              src="https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg"
            />
            <img
              className="w-previewSm rounded"
              src="https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg"
            />
            <img
              className="w-previewSm rounded"
              src="https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg"
            />
            <img
              className="w-previewSm rounded"
              src="https://www.montblanc.com/variants/images/34480784411799068/A/w747.jpg"
            />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 md:pr-10 sm:px-5">
          <p className="font-bold text-4xl mt-10">Pen</p>
          <p className="font-light text-4xl my-3">$75</p>
          <p className="font-light text-gray-600 text-xl my-3">
            A statement that tells you how something or someone looks, sounds,
            etc. : words that describe something or someone. [count] Reporters
            called the scene “a disaster area,” and I think that was an accurate
            description. I applied for the position after reading the job
            description.
          </p>
          <a
            href="#"
            className="flex w-1/2 my-10 first-line:items-center justify-center rounded-md border border-transparent bg-navBarBg px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Purchase
          </a>
          <hr className="py-3" />
          <p className="font-medium text-xl text-navBarBg">Impact</p>
          <div className="justify-start text-center rounded-md border border-transparent text-base font-medium">
            <div className="flex justify-between text-center text-base font-medium">
              <img src="https://redconfidential.files.wordpress.com/2022/05/untitled-002.png?w=1000" />
            </div>
            <div className="flex justify-between text-center px-11 mb-10 text-base font-medium">
              <p> Food security </p>
              <p> Water security </p>
              <p> Forest security </p>
            </div>
          </div>
          <hr className="py-3" />
          <p className="font-medium text-xl mb-3 text-navBarBg">Features</p>
          <ul className="font-light text-gray-600 text-md pb-5">
            <li>Cleans 1lb of trash from Ocean</li>
            <li>Plants 1 tree</li>
            <li>More stuff here</li>
            <li>More stuff here</li>
            <li>More stuff here</li>
          </ul>
        </div>
      </div>
      <hr className="py-3 mx-20" />
    </>
  )
}
