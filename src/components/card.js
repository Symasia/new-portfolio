import React from "react"

const Card = ({ imgSrc, title, desc, customClasses, children }) => {
  return (
    <div className={`grid grid-cols-6 gap-3 ${customClasses}`}>
      <div className="col-span-1">
        <img className="my-0 md:w-4/5" src={require("../images/ts.png")} alt="#" />
      </div>
      <div className="col-span-5">
        {children ? (
          children
        ) : (
          <>
            <h3 className="mb-2 text-xl">{title}</h3>
            <p className="text-sm text-gray-300">{desc}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
