export default function InitiativeCard (props: any) {
  const { img, name } = props
    return (
        <a className="text-center content-center w-48" href="/products/1">
          <img 
            className="h-48 w-full rounded-full object-cover"
            src={img}
          />
          <div className="flex justify-center px-5">
            <p className="font-semibold pt-10">{name}</p>
          </div>
        </a>
    )
}