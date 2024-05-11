import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
import React from "react"
import { Link } from "react-router-dom"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{ base: "w-screen px-10 py-10" }}
    >
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            to="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            to="/test"
            aria-current="page"
          >
            Testing
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
export default Header
