import InitiativeCard from './InitiativeCard'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

export default function InitiativeList(props: any) {

  const data = props.initiatives

  return (
    <div className="px-20">
      {/* Trending products  */}
      
      {/* Grid */}
      <div className="space-y-5">
        <div className="flex justify-start space-x-10">
          {
            data.map((d:any) => {
              return <InitiativeCard img={d.img} name={d.name} />
            })
          }
        </div>
      </div>
    </div>
    
  )
}
