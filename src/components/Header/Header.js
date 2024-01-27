import './Header.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{
    return <header>
        <h1 className='main-heading'>Kuldeep Shoes Company</h1>
        <HeaderCartButton/>
    </header>
};

export default Header;