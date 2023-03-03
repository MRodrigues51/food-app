import { useSnack } from "../../../hooks/useSnacks";

import { Head } from "../../../Components/Head";
import { Snacks } from "../../../Components/Snacks";
import { SnackTitle } from "../../../Components/SnackTitle";

export default function Drinks() {
  const { drinks } = useSnack()
  return (
    <>
      <Head title="Drinks" description="Nossas melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
