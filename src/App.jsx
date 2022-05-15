import { useState } from 'react'
import CategoryList from './components/category/CategoryList'
import StoreProvider from './state/StoreProvider'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <StoreProvider>
      <CategoryList />
    </StoreProvider>
  )
}

export default App
