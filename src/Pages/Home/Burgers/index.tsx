import { useEffect, useState } from "react"
import { Head } from "../../../Components/Head"
import { Snacks } from "../../../Components/Snacks"
import { SnackTitle } from "../../../Components/SnackTitle"
import { SnackData } from "../../../interfaces/SnackData"
import { getBurgers } from "../../../services/api"


export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const burgerRequest = (await getBurgers)
      setBurgers(burgerRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burguers" />
      <SnackTitle>Humbúgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
