import { createContext, ReactNode, useEffect, useState } from "react";
import { SnackData } from "../interfaces/SnackData";
import { getBurgers, getDrinks, getIceCreams, getPizzas } from "../services/api";

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)


export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = (await getBurgers)
        const pizzaRequest = (await getPizzas)
        const drinkRequest = (await getDrinks)
        const iceCreamRequest = (await getIceCreams)

        const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest]

        const [
          { data: burgerReponse },
          { data: pizzaReponse },
          { data: drinkReponse },
          { data: iceCreamReponse },
        ] = await Promise.all(requests)


        setBurgers(burgerReponse)
        setPizzas(pizzaReponse)
        setDrinks(drinkReponse)
        setIceCreams(iceCreamReponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
