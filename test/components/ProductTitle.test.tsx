import React from 'react'
import renderer from 'react-test-renderer'


import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';



describe('ProductTitle', () => {
    
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custo Product" className="custon-class" />
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot(); 
        
    });


    test('debe de mostrar el componente con el nombre del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
        

    })
    
    

})