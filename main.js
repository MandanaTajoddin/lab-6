let storeOne = {
    name: "chocolate Store",
    product: "chocolate cookie",
    customers: 40,
    employee: 3,
    location: "Bethesda",
  
    createCustomer: function(){
      this.customers +=100
    }
  }
  
  let storeTwo = {
    name: "vanilla Store",
    product: "vanilla cookie",
    customers: 200,
    employee: 10,
    location: "Baltomore",
  
    getProduct: function(){
      console.log(this.product)
    }
  }

  let storeThree = {
    name: "Peanut Butter Store",
    product: "Peanut Butter cookie",
    customers: 150,
    employee: 7,
    location: "Gaithersburg",
    
    getProduct: function(){
    console.log(this.product)
    }


  }

  let storeFour = {
    name: "Butter Store",
    product: "Butter cookie",
    customers: 300,
    employee: 15,
    location: "Rockville",
    
    getProduct: function(){
    console.log(this.product)
    }


  }
  
  let objArray = [storeOne, storeTwo ,storeThree, storeFour]
  
  let elBody = document.getElementById("table-container")
  let elTable = document.createElement("table")
  
  elTable.setAttribute("id","id-table")
  elBody.appendChild(elTable)
  
  
  for (let i=0; i<objArray.length; i++){
   
    let elRow = document.createElement("tr")
    elTable.appendChild(elRow)
    let elTh = document.createElement("th")
    elTh.innerText = objArray[i].name
    elRow.appendChild(elTh)
  
    let product = document.createElement("td")
    product.innerText = objArray[i].product
    elRow.appendChild(product)
    let location = document.createElement("td")
    location.innerText = objArray[i].location
    elRow.appendChild(location)

    let employee = document.createElement("td")
    employee.innerText = objArray[i].employee
    elRow.appendChild(employee)
    console.log(objArray);
  }