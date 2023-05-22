export interface CardType {
  image: string
  content: string
  path: string
  generic: string
}
export const cardData: CardType[] = [
  {
    generic: 'pig',
    image: './pig.png',
    content: 'With 3D explosive animation make clients understand more details',
    path: '/portfolio/pig'
  },
  {
    generic: 'chroma',
    image: './chroma.png',
    content: 'A 3D exhibition with chat and smart leading micro server',
    path: '/portfolio/chroma'
  },
  {
    generic: 'secpaas',
    image: './secpaas.png',
    content: 'A activity website scan QRCode to finish the breakout game',
    path: '/portfolio/secpaas'
  },
  {
    generic: 'energy',
    image: './energy.png',
    content: 'A 3D island  that you can tour around and understand the topics',
    path: '/portfolio/energy'
  },
  {
    generic: 'tycia',
    image: './tycia.png',
    content:
      'A platform that efficiently matches the right teacher with the right student.',
    path: '/portfolio/tycia'
  }
]
