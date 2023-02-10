import './Navin.css'
import HamburgerDrawer from "./HamburgerDrawer"
export default function Navin({setCategory}) {
  return(
    <div className='Nav'>
      <div className='icon'><HamburgerDrawer setCategory={setCategory}/></div>
      <img className="logo" src="https://static.inshorts.com/inshorts/static_assets/bundle_assets/2023/02_feb/6_mon/dd4532e5691e2d1c35bbe871b456c4938b3a6691.logo.png" alt='logo'/>

    </div>
  )
}
