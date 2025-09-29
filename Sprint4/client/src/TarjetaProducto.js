import Teclado from './Teclado.png'
function TarjetaProducto(){
    const precio=125;
    return(
        <div>
            <h3>Teclado</h3>
            <div className="image-container">
                <img src={Teclado} alt="Teclado RGB" className="keyboard-img" />
            </div>
            <p>Teclado Mecánico RGB</p>
            <p>${precio}</p>
        </div>
    );
};
export default TarjetaProducto;