import { Outlet } from "react-router-dom"
import { Sidebar } from "../../Components/Sidebar/"
import { Container } from "./styles"
import LogoImg from "../../assets/logo.svg"

export function Home() {

  return (
    <Container>
      <Sidebar />
      <section>
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <Outlet />
      </section>

    </Container>
  )
}
