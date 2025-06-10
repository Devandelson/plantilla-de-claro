// imports
import '../../css/header.css';
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import TopHeader from './top.jsx';
import BottomHeader from './bottom.jsx';

export default function Header({closeMenu}) {
    return (
        <>
            <header>
                <TopHeader />
                <BottomHeader closeMenuCondition={closeMenu} />
            </header>
        </>
    );
} 