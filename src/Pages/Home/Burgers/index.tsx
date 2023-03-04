import { useSnack } from "../../../hooks/useSnacks"

import { Head } from "../../../Components/Head"
import { Snacks } from "../../../Components/Snacks"
import { SnackTitle } from "../../../Components/SnackTitle"

export default function Burgers() {

  const { burgers } = useSnack()
  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
