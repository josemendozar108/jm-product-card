# JAMR-Product-Card

Este es un paquete de pruebas de despliegues en NPM


### Jose Mendoza 

## Ejemplo
```
import {ProductCard, ProductImage, ProdutTitle, ProductButtons } from 'jamr-product-card'
```
```
<ProductCard
          key={product.id}
          product={product}
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
```