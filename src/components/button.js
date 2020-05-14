import React from "react"

const Button = ({ link, children, alter }) => {
  let classList = `btn inline-flex items-center`
  if(alter) {
    classList += ' btn-alter'
  }
  return (
    <a href={link}>
      <div className={classList}>{children}</div>
    </a>
  )
}

export default Button
