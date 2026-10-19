export const CarritoCompras = () => {

    const calcularSubtotal = (precio: number, cantidad: number): number => {
        return precio * cantidad;
    }

    const calcularIVA = (subtotal: number): number => {
        return subtotal * 0.16;
    }

    const calcularTotal = (subtotal: number): number => {
        return subtotal + calcularIVA(subtotal);
    }

    const formatearPrecio = (precio: number): string => {
        return `$${precio.toFixed(2)}`
    }
    const carrito = [
        { producto: "Laptop", precio: 15000, cantidad: 1 },
        { producto: "Mouse", precio: 350, cantidad: 2 },
        { producto: "Teclado", precio: 800, cantidad: 1 },
    ];

    const subtotal = carrito.reduce(
        (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0
    );

    return (
        <>
            <h3 className="text-xl text-emerald-950 font-bold">Carrito de Compras</h3>
            {carrito.map((producto, i) => (
                <p key={i}>{producto.producto} x{producto.cantidad} = {formatearPrecio(calcularSubtotal(producto.precio, producto.cantidad))}</p>
            ))}
            <hr />
            <p>Subtotal: {formatearPrecio(subtotal)}</p>
            <p>IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
            <p><strong>Total: {formatearPrecio(calcularTotal(subtotal))}</strong></p>
        </>
    )
}
