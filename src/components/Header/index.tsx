import './style.css';
import { useContext } from "react";
import { ContextListCount } from "../../utils/context-products";

export default function Header() {
    const { contextListCount }: any = useContext(ContextListCount);

    return (

        <header>
            <nav className="container">
                <div className="title">
                    <h1>
                        DsFilter
                    </h1>
                </div>
                <div className="valueproduct">
                    <p className="value">{contextListCount} produto(s)</p>
                </div>
            </nav>
        </header>
    );
}