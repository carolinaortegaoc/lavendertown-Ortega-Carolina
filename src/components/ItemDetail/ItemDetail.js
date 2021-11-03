import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="itemDetailContainer">
                    <div className="gallery-container">
                        <div className="gallery__item">
                            <img src={item.photo} alt="foto" className="gallery__img" />
                                <p className="gallery__name">{item.name}</p>
                                    <p>$ {item.price}</p>
                                <div className="agregar">Agregar al carrito</div>
                            </div>
                        </div>
                <ItemCount initial={1} stock={item.stock} />
            </div>
        </>
    );
}

export default ItemDetail;