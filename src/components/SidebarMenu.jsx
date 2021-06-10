import React from "react"
import "./css/SidebarMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faAddressBook, faChartLine, faUser, faBoxOpen, faPoll } from "@fortawesome/free-solid-svg-icons";
import { useContentManager } from "../context/ContentManager"

export default (props) => {
    const { page, setPage } = useContentManager();

    function handleSetPage(currentPage) {
        setPage(currentPage);
    }
    return (
        <div>
            <ul className="fa-ul">
                <li className={page === 'start' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('start')}>
                        <FontAwesomeIcon icon={faSignal} listItem />
                        <span>Início</span>
                    </a>
                </li>
                <li className={page === 'contacts' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('contacts')}>
                        <FontAwesomeIcon icon={faAddressBook} listItem />
                        <span>Contatos</span>
                    </a>
                </li>
                <li className={page === 'reports' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('reports')}>
                        <FontAwesomeIcon icon={faChartLine} listItem />
                        <span>Relatórios</span>
                    </a>
                </li>
                <li className={page === 'clients' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('clients')}>
                        <FontAwesomeIcon icon={faUser} listItem />
                        <span>Clientes</span>
                    </a>
                </li>
                <li className={page === 'products' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('products')}>
                        <FontAwesomeIcon icon={faBoxOpen} listItem />
                        <span>Produtos</span>
                    </a>
                </li>
                <li className={page === 'sales' ? "active" : ""}>
                    <a href="#" onClick={() => handleSetPage('sales')}>
                        <FontAwesomeIcon icon={faPoll} listItem />
                        <span>Vendas</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}