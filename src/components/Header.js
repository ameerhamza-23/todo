import Date from './Datee'
import Button from './Button'
import '../css/header.css'

function Header() {
    return (
        <div className='container date-cont'>
            <div className='row header-row'>
                <div className='col-10'>
                    <Date />
                </div>
                <div className='col-2'>
                    <Button />
                </div>
            </div>
        </div>
    );
}
export default Header;