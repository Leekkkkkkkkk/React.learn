import { ReactChild, ReactFragment, ReactPortal } from 'react'
import prototypes from 'prop-types'

const Navbar = (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) => {
  console.log(props)
  return <h3>{props.children}</h3>
}
Navbar.prototypes = {
  children: prototypes.oneOfType([prototypes.string]),
  name: prototypes.string,
  age: prototypes.number,
}
export default Navbar
