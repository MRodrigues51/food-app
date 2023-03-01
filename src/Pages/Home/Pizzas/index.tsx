import { useEffect, useState } from "react";
import { Head } from "../../../Components/Head";
import { Snacks } from "../../../Components/Snacks";
import { SnackTitle } from "../../../Components/SnackTitle";
import { SnackData } from "../../../interfaces/SnackData";
import { getPizzas } from "../../../services/api";

export default function Pizzas() {
  const [pizza, setPizza] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const pizzaRequest = (await getPizzas)
      setPizza(pizzaRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title="Pizzas" description="Nossas melhores pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizza}></Snacks>
    </>
  )
}
