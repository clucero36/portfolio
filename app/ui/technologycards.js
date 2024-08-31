

export default function TechnologyCards({technologies}) {


  return (
    <div className="flex flex-wrap gap-2">
      {
        technologies.map((tech, index) => {
          return (
            <div className="bg-gray-800 p-1 text-sm text-emerald-800" key={index}>{tech}</div>
          )
        })
      }
    </div>
  )
}