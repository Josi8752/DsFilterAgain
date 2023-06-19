
import './styles.css';

export default function Filter() {
    return (
        <div className="card-filter-main">
            <form>
                <div>
                    <input className="mb20" type="text"
                        placeholder="Preço mínimo"
                        name="minPrice" />
                </div>
                <div>
                    <input type="text"
                        placeholder="Preço máximo"
                        name="maxPrice" />
                </div>
                <div>
                    <button className="btn">Filtrar</button>
                </div>
            </form>
        </div>
    );
}