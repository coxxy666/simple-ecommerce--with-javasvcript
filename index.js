console.log ("SHOP WITH US")
name_name = prompt('Input Fullname')

email_email = prompt('Input your valid email')

country = prompt('Your Country')

address = prompt('Your Address')

console.log(name_name)
console.log(email_email)
console.log(country)

if (name_name == ''){

    console.log('invalid name')
}
if (email_email == ''){

    console.log('invalid email')
}
if (country == ''){

    console.log('invalid country')
}
if (address == ''){

    console.log('invalid Address')
}
else {

    console.log('Registation Successful')
}



let item_input = prompt("We have limited goods type :  Apple = $5 ,Banana = $7, Can = $12 and Sugar = $10 .")
let item_amount = prompt("How many ?") 

let item_input_convert = item_input.toUpperCase()

let item_amount_convert = Number(item_amount)




    price = 0

    if (item_input_convert == "APPLE" ) {
    
      let price_calculate = price += 5
    
      let  total_result = price_calculate * item_amount_convert
    
      console.log(`You paid for ${item_amount_convert} ${item_input_convert} @ $${total_result}`)

      console.log(`${name_name} THANK YOU FOR SHOPPING WITH US`)
      console.log(`You will recive your goods next week at this address : ${address} `)
    
    }

    else if (item_input_convert == "BANANA" ) 
    {
    
        let price_calculate = price += 7
      
        let  total_result = price_calculate * item_amount_convert
      
        console.log(`You paid for ${item_amount_convert} ${item_input_convert} @ $${total_result}`)

        console.log(`${name_name} THANK YOU FOR SHOPPING WITH US`)
        console.log(`You will recive your goods next week at this address : ${address} `)
      
      }

    else if (item_input_convert == "CAN" ) 
    {
    
        let price_calculate = price += 7
      
        let  total_result = price_calculate * item_amount_convert
      
        console.log(`You paid for ${item_amount_convert} ${item_input_convert} @ $${total_result}`)

        console.log(`${name_name} THANK YOU FOR SHOPPING WITH US`)
        console.log(`You will recive your goods next week at this address : ${address} `)
      
      }

    else if (item_input_convert == "SUGAR" ) 
      {
      
          let price_calculate = price += 7
        
          let  total_result = price_calculate * item_amount_convert
        
          console.log(`You paid for ${item_amount_convert} ${item_input_convert} @ $${total_result}`)

          console.log(`${name_name} THANK YOU FOR SHOPPING WITH US`)
          console.log(`You will recive your goods next week at this address : ${address} `)

        
        }

    else {

        console.log('Currently not available,Check back later')
        console.log(`${name_name} THANK YOU`)

    }

    
  

