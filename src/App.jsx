import { useState } from 'react'
import { MainBodyComponent } from './components/MainBodyComponent'
import './styles/mainStyleFile.css'
import { CartComponent } from './components/CartComponent'
import { ProductListComponent } from './components/ProductListComponent'
import { LoginComponent } from './components/LoginComponent'
import { ResetPswdComponent } from './components/ResetPswdComponent' 
import { SingleItemShowComponent } from './components/SingleItemShowComponent'
import { WishlistComponent } from './components/WishlistComponent'
import { SearchNewBoxComponent } from './components/SearchNewBoxComponent'
import { Route , Routes } from 'react-router-dom'
import { ProtectedRoute } from '../src/ProtectedRoute'
import { ShippingComponent } from './components/ShippingComponent'
import { CheckoutPriceShowComponent } from './components/CheckoutPriceShowComponent'
import { UpiDetailsComponent } from './components/UpiDetailsComponent'
import { CongratsComponent } from './components/CongratsComponent'

function App() {
  

  return (
    <>
      <div>
       <Routes>
               <Route path='/' element={<MainBodyComponent/>}/>
               <Route path='/product' element={<ProtectedRoute><SingleItemShowComponent/></ProtectedRoute>} />
               <Route path='/login' element={<LoginComponent/>} />
               <Route path='/wishlist' element={<WishlistComponent/>} />
               <Route path='/searchitem' element={<SearchNewBoxComponent/>} />
               <Route path='/forgetPswdComponent' element={<ResetPswdComponent/>} />
               <Route path='/cart' element={<CartComponent/>} />
               <Route path='/category/:name' element={<ProductListComponent/>} />
               <Route path='/shipping/:total' element={<ProtectedRoute><ShippingComponent/></ProtectedRoute>} />
               <Route path='/checkout' element={<ProtectedRoute><CheckoutPriceShowComponent/></ProtectedRoute>} />
               <Route path='/upi' element={<ProtectedRoute><UpiDetailsComponent/></ProtectedRoute>} />
               <Route path='/congrats' element={<ProtectedRoute><CongratsComponent/></ProtectedRoute>} />
               
       </Routes>
        
    </div>
    </>
  )
}

export default App
