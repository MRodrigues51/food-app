import { Head } from "../../../Components/Head";
import { SnackTitle } from "../../../Components/SnackTitle";
import { Snacks } from "../../../Components/Snacks";

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'ice-cream',
      name: 'Casquinha',
      description:
        'A casquinha crocante e saborosa que nossos clientes amam',
      price: 4.5,
      image: 'https://images.unsplash.com/photo-1505616485412-adfcd5561e31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 2,
      snack: 'ice-cream',
      name: 'Chocolate com granulado',
      description:
        'Sorvete de chocolate com granulados para você se deliciar',
      price: 6,
      image: 'https://images.unsplash.com/photo-1597648152428-f883fbc9c873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 3,
      snack: 'ice-cream',
      name: 'Morango',
      description:
        'Sorvete de morango, cremoso e com pedacinhos da fruta',
      price: 7,
      image: 'https://images.unsplash.com/photo-1566746878854-d4f4fbd11941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    },
  ]

  return (
    <>
      <Head title="Ice Creams" description="Nossos melhores Sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
