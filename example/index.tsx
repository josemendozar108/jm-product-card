import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../dist/components'; // Asegúrate de que el componente Thing esté correctamente importado


const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
//   img: "./coffee-mug.png",
 };


const App = () => {
  return (
    <>
      <ProductCard
          product={product1}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
          >
          {
            ({reset, count,  isMaxCountReached, maxCount, increaseBy, }) => (
              <>
                <ProductImage  />
                <ProductTitle  />
                <ProductButtons />
              </> 

            )
          }
      </ProductCard>
    </>
  );
};

// Crear un root con React 18
const root = ReactDOM.createRoot(document.getElementById('root')!); // El '!' asegura que el elemento root exista
root.render(<App />); // Usar 'render' con el root
