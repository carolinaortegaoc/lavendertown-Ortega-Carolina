import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {


    return (
        <>
            <div className="itemDetailContainer">
                {
                    item ?
                    <div className="gallery-container">
                        <div className="gallery__item">
                            <img src={item.photo} alt="foto" className="gallery__img" />
                                <p className="gallery__name">{item.name}</p>
                                    <p>$ {item.price}</p>
                                <ItemCount stock={item.stock} initial={1} />
                                <div className="agregar">Agregar al carrito</div>
                            </div>
                        </div>
                        : "Cargando..."
                }
            </div>
        </>
    );
}

export default ItemDetail;