import Logo from '../../../assets/icons/Logo.svg'
import Menu from '../../../assets/icons/menuIcon.svg'
import Card1 from '../../../assets/icons/cardIcon1.svg'
import Card2 from '../../../assets/icons/cardIcon2.svg'
import Card3 from '../../../assets/icons/cardIcon3.svg'
import Card4 from '../../../assets/icons/cardIcon4.svg'

interface iconProps {
  type: string
}

const Icon = ({ type }: iconProps) => {
  return (
    <>
      {type === 'logo' && <Logo />}
      {type === 'menu' && <Menu />}
      {type === 'card1' && <Card1 />}
      {type === 'card2' && <Card2 />}
      {type === 'card3' && <Card3 />}
      {type === 'card4' && <Card4 />}
    </>
  )
}

export default Icon