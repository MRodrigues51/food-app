import { Head } from "../../../Components/Head";
import { SnackTitle } from "../../../Components/SnackTitle";
import { Snacks } from "../../../Components/Snacks";
import { getIceCreams } from "../../../services/api";
import { useEffect, useState } from "react";
import { SnackData } from "../../../interfaces/SnackData";

export default function IceCreams() {
  const [iceCream, setIceCream] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const iceCreamRequest = (await getIceCreams)
      setIceCream(iceCreamRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Ice Creams" description="Nossos melhores Sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCream}></Snacks>
    </>
  )
}
