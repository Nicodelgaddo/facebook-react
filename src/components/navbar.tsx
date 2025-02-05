export default function navbar(){
    return (
        <nav>
            <h1>ToolsControl</h1>
            <form action="buscar"></form>
            <input
                type="text"
                placeholder="Busacar por nombre o codigo"
            />
            <button type="submit" ></button>    
        </nav>);
}