import './App.css'
import { OrderForm } from './components/OrderForm';

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <div>
  <OrderForm
    onSummit={(order)=>{
      console.log("paced",order.name,order.cups);
    }}
    />
    </div>
      </div>
    </>
  )
}

export default App
