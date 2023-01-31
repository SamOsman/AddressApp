import { useState } from 'react';

//style
import './style/App.css';

//components
import AddressList from './components/addressList'

//data 
import addressList from './addressList.json'

function App() {
 
  const [addresses, setAddresses] = useState(null)
  const loadAddressList = () => {
    setAddresses(addressList)
    document.getElementById("removeElement").classList.add('hide')
  }

  return (
    <div className="App">
      <main className='App-main '>
          <button className='load-btn' onClick={loadAddressList}>
            Load Addresses
          </button>
          <section>
            <p id='removeElement'>List of addresses will appear here</p>
            <AddressList addressList={addresses}/>
          </section>
      </main>
    </div>
  );
}

export default App;
