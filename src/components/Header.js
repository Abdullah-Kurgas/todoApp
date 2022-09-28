import './Header.css';
import HeaderItem from './HeaderItem';

function Header() {
    return <div className='header'>
        <HeaderItem clickedItem={'pending'} />
        <HeaderItem clickedItem={'done'} />
        <HeaderItem clickedItem={'all'} />
    </div>
}

export default Header;
