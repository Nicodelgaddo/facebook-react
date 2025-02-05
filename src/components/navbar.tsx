import styles from "./navbar.module.css";
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.fondo}>
            <Link className={styles.a} href="/"><h1 className={styles.logo}>ToolsControl</h1></Link>
            
            <form className={styles.formulario} action="buscar">
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Buscar por nombre o código"
                />
                <button type="submit" className={styles.boton}>🔍</button>
            </form>
            <Link href="/cargarProducto">Cargar Producto</Link>
            <Link href="/cargarLista">Cargar Lista</Link>
            <Link href="/products">Ver Productos</Link>
        </nav>
    );
}
