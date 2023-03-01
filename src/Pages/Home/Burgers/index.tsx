import { Head } from "../../../Components/Head"
import { Snacks } from "../../../Components/Snacks"
import { SnackTitle } from "../../../Components/SnackTitle"


export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://images.unsplash.com/photo-1595531172949-30922c28a240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description:
        'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.5,
      image: 'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Especial',
      description:
        'O especial tem tudo aquilo que te faz se apaixonar por ele. Prove e nunca mais terá dúvidas em qual hamburguer pedir',
      price: 26.5,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
    },
  ]
  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burguers" />
      <SnackTitle>Humbúgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
