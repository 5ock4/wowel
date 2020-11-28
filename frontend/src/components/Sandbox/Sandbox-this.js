import React from 'react'

// This is logged always when there is import in App.js
console.log(this)


const Sandbox = () => {
  
  // GLOBAL context - see <script> in index.html. Is there any other example within React?
  
  // FUNCTION context - method invocation - 'this' refering to object that is currently calling a function 
  const counter = {
    count: 0,
    next: function(){
      return ++this.count;
    }
  }

  const car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
  }

  console.log(car.getBrand());

  console.log(counter.count)
  counter.next()
  console.log(counter.count)

  return (
    <div>
    </div>
  )
}

export default Sandbox