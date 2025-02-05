This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

------------------------------------------------------------------------------------------------------------
Problematica:
    actualmete se cuenta con una cantidad de productos bastante grande que dificulta saberse de memoria el valor de cada uno, a su vez dichos producto aumentan y bajan con el paso del tiempo (hoy ya no es tan asi pero en otros años un mismo producto podia subir hasta 4 veces en una semana) esto hace que se dificulte tambien el hecho de tener un precio fisico pegado al preoducto ya que su valides con el tiempo se pierde, el local posee listas de precio exel, pdf y en algunos casos (me di cuenta recien jejeje) hay proveedores que sus precios los tiene en sus paginas y app de escritorio, cada uno de estos proveedores realiza un descuento distinto sobre el cliente a su vez de que hay productos que no tributan iba (todo en negro papi) por lo que seria de gran ayuda un sistema que englobe en una lista de precios unica el valor de TODOS los productos del local.

requerimientos que se me ocurren a la pasada:
    subir productos:
        nombre
        precio final
        codigo (igual al de la lista del proveedor para luego usar como key para actualizar su valor)
        foto
        stock*
        precio de costo
        valor asignado para calcular el precio final (precio de costo * este valor = precio final)
        fecha de ultima actualizacion del precio
        nombre proveedor 
    subir lista de precios
        hay que hacer que con los productos que tenemos cargados se actualize su valor aca aparece un problema porque puede ser que diferentes productos termine teniendo el mismo valor de codigo hayq ue enconrar la forma de diferenciarlo se me ocurre pensando en alguna inteligencia que por nombre tambien los identifique ejemplo:
        canilla de 1/2 cod:0214
        clavo 2" cod: 0214
        si la lista que subo tiene el codigo=0214 y el nombre es canilla plastica marca "acme" esta inteligencia diga bueno dice canilla no clavo le cambio el valor al producto que dice canilla de 1/2 y no al de clavo (traquilamenter puede ser por coincidencia en el texto jasjajs)
    barra de buisqeuda que muestre los productos buscados por codigo o nombre

problema que pueden aparecer que no se como resolver es si un proveedor dice que todas la lamparas suben de precio tendria que cambiar el valor del producto (valor asignado para calcular el precio final) una por una medio un quilombo 

2da parte 
    control de stock
        no lo pense mucho pero estaria bueno que tambian genere como un remito para los que piden en vez de tener que ir escribiendo con la lapicera como se hace ahora remito=presupuesto=boleta
3ra parte
    eso de la ia para el cliente que le diga que necesita y le tire ya el preducto que tiene el local. y tambien hacer una tiendita 
