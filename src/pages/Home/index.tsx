import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident,
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    system: 'PS5',
    infos: ['5%', 'R$ 290'],
    image: resident,
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident,
    title: 'Resident Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident,
    title: 'Resident Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela BLizzard Enterteinment',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo,
    title: 'Diablo 4'
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Link volta para mais uma aventura no reino da princesa Zelda',
    system: 'Nintendo',
    infos: ['17/05'],
    image: zelda,
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Star Wars é um jogo baseado na série de filmes com o mesmo nome',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars,
    title: 'Star Wars'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo,
    title: 'Resident Evil 4'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
