import { useSnack } from "../../../hooks/useSnacks";

import { Head } from "../../../Components/Head";
import { SnackTitle } from "../../../Components/SnackTitle";
import { Snacks } from "../../../Components/Snacks";



export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title="Ice Creams" description="Nossos melhores Sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
