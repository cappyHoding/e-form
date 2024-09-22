import "./header.css"
import logo from "../../images/bprnew.png"
const Header = () => {
    return (
        <div className="navbar navbar-expand-lg jumbo-header justify-content-between">
            <a className="navbar-brand" href="#!">
                <img src={logo} height={100}/>
            </a>
            <span className="navbar-text title">
                FORMULIR PEMBUKAAN TABUNGAN
            </span>
        </div>
    )
}

export default Header