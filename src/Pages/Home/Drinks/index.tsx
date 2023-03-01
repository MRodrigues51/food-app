import { useEffect, useState } from "react";
import { Head } from "../../../Components/Head";
import { Snacks } from "../../../Components/Snacks";
import { SnackTitle } from "../../../Components/SnackTitle";
import { SnackData } from "../../../interfaces/SnackData";
import { getDrinks } from "../../../services/api";

export default function Drinks() {
  const [dricks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const drinkRequest = (await getDrinks)
      setDrinks(drinkRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Drinks" description="Nossas melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={dricks}></Snacks>
    </>
  )
}
