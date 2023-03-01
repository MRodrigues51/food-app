import { Head } from "../../../Components/Head";
import { Snacks } from "../../../Components/Snacks";
import { SnackTitle } from "../../../Components/SnackTitle";

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola',
      description:
        'A tradicional Coca-Cola que a família brasileira adora',
      price: 5,
      image: 'https://images.unsplash.com/photo-1566560155396-7b9f35a08308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Suco de Laranja',
      description:
        'Delicioso suco de laranja',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1524439786248-e168955562d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Energético',
      description:
        'Um energético para dar aquele gás no seu dia',
      price: 10.50,
      image: 'https://images.unsplash.com/photo-1649261191597-4251e0bdf193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ]

  return (
    <>
      <Head title="Drinks" description="Nossas melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
