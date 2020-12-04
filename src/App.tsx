import React, { useCallback } from 'react';

import api from './services/api';

import './App.css';

function App() {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJzYXltb25vbUBnbWFpbC5jb20iLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjA3MDUyMjMyLCJqdGkiOiI2ZDMwOTEwYi0yZmY0LTQ1YTgtYTE3Ni1lMGZjYjNhMzkzOTciLCJjbGllbnRfaWQiOiIyVDAyVU9rRjliazVTajRwIn0.f2EIF9RuvUhvTsdLAO2WR1nguyd2xMo2Wx6d-x5qSyjp_ljyLe_L3JwR_Oa7dPsgPQSanhxn3IEbHPIpkJFFQEp7FihKpejB3YCQGxQ-YDzEEqUUll5-A-KwYDfBpcjVkvL5jYWU49gb7K8H1NiRFKtThTiFglPzOJTYcXlHEf68lTndC-uYHsQq38_k5MVSOHSZ3YoxuQXvkrkZEoeM4zyNJfPhmGClpH2hcpLPfzNQjLKSvcBNbLUGk4OM7-1JPKZzD6fk7x_50odDQ4xI0gzjlIEGki7S8kuLhedQkMn8_Kaco6Pfy48OyfTXSlipV3mewm6xohsegMdfhVUdyA"

  const handleBillet = useCallback(async () => {
    alert('ok')
    const data = {
      charge: {
        description: "1 ok",
        totalAmount: 9.00,
        dueDate: "2020-12-20",
        installments: 2,
        maxOverdueDays: 2,
        paymentTypes: [
          "BOLETO"
        ]
      },
      billing: {
        name: "Saymon Oliveira Macedo",
        document: "02966606126",
        email: "saymonom@gmail.com",
        phone: "63992595358",
        notify: false
      }
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const billet = await api.post('charges', data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Api-Version": "2",
        "X-Resource-Token": "9F86E9635B5B64938792BB571868CEE270D34577D0FBBB47AF7EA16A64F01A4A",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })

    console.log(billet.data)
  }, []);

  return (
    <div className="App">
      <button className="button" onClick={handleBillet}>Gerar Boleto</button>
    </div>
  );
}

export default App;
