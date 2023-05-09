import { v4 as uuidv4 } from 'uuid';
import createProduct from '@/services/admin';
import styles from './page.module.css'

export default function Home() {


    createProduct(
      {
        
          "id": uuidv4(),
          "title": "Producto 86 Admin",
          "slug": "producto_86",
          "description": "camisa para hombre marca adidas",
          "stock": 10,
          "tags": [
              "camisa",
              "vestir",
              "sport",
              "noche"
          ],
          "gender": "men",
          "price": 200.25,
          "promPrice": 154,
          "sizes": [
              "xl",
              "xxl",
              "l"
          ]
      }
    )

  

  return (
    <main className={styles.main}>
      Admin
    </main>
  )
}
