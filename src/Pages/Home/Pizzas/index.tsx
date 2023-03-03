import { useSnack } from "../../../hooks/useSnacks";

import { Head } from "../../../Components/Head";
import { Snacks } from "../../../Components/Snacks";
import { SnackTitle } from "../../../Components/SnackTitle";




export default function Pizzas() {
  const { pizzas } = useSnack()
  return (
    <>
      <Head title="Pizzas" description="Nossas melhores pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
