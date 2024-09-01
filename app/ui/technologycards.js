

export default function TechnologyCards({technologies}) {


  return (
    <div className="flex flex-wrap gap-2">
      {
        technologies.map((tech, index) => {
          return (
            <div className="bg-gray-800 py-1 px-1.5 text-sm text-emerald-500" key={index}>{tech}</div>
          )
        })
      }
    </div>
  )
}