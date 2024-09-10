import MenuItem from "./components/MenuItem"
import OrderContext from "./components/OrderContext"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import TipPercentage from './components/TipPercentage';



function App() {

  const {order, addItem, removeItem, tip, settip, placeOrder} = useOrder()

  return (
    <>
    <header className="bg-teal-500 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumno</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">

      <h2 className="text-4xl font-black">Menú</h2>

      <div className="space-y-3 mt-10">

            {menuItems.map(item => (
              <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ) )}
      </div>


      </div>
       

      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {
          order.length > 0 ? (
            <>
            
            <OrderContext
            order={order}
            removeItem={removeItem}
            />

            <TipPercentage
            settip={settip}
            tip={tip}
            />

            <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
            />

            </>
          ): (
            <p className="text-center">La orden esta vacia</p>
          ) }
           

      </div>
    </main>


    </>
  )
}

export default App

