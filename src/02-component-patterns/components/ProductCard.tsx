import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandler } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children: (args: ProductCardHandler)=> JSX.Element;
    className?: string;
    style?: React.CSSProperties 
    value?: number,
    onChange?: (args: onChangeArgs) => void,
    initialValues?: InitialValues
    
}


export const ProductCard = ({ children, product, className, style, value, onChange, initialValues }: Props ) => {

    const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children({
                    count: counter,
                    isMaxCountReached,
                    product,
                    increaseBy,
                    reset
                }) }
            </div>
        </Provider>
    )
}
