import { Link } from "gatsby"
import React from "react"

const menuData = [
  { title: "How it works", link: "/howitworks" },
  { title: "Add points", link: "/add-points" },
  { title: "Redeem points", link: "/redeem" },
]

export default function Header() {
  return (
    <>
      {menuData.map((item, index) => (
        <Link to={item.link} key={index}>
          {item.title}
        </Link>
      ))}
    </>
  )
}
