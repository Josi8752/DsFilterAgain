import './styles.css';
import { useState } from 'react';


type FormData = {
    minPrice?: number,
    maxPrice?: number;
}

type Props = {
    onNewFilter: Function
}

export default function Filter({ onNewFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({})

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });

    }


    function handleFormSubmit(event: any) {
        event.preventDefault();
        setFormData(formData);
        onNewFilter(formData.minPrice, formData.maxPrice);
    }
    return (
        <div className="card-filter-main">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input className="mb20" type="text"
                        placeholder="Preço mínimo"
                        value={formData.minPrice || ""}
                        name="minPrice"
                        onChange={handleInputChange}
                    />

                </div>
                <div>
                    <input type="text"
                        placeholder="Preço máximo"
                        value={formData.maxPrice || ""}
                        name="maxPrice"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button className="btn">Filtrar</button>
                </div>
            </form>
        </div>
    );
}