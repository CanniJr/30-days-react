import React from 'react'

function Testing(){

    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya',
      ]
      
      const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
      ]

      const itCompanies = [
          'Facebook',
          'Google',
          'Microsoft',
          'Apple',
          'IBM',
          'Oracle',
          'Amazon'
      ]

      // 1. Declare an empty array
      // 2. Declare an array with more than 5 number of elements
      // 3. Find the length of your array
      // 4. Get the first item, the middle item and the last item of the array
      // 5. Declare an array called mixedDataTypes, 
      //    put different data types in the array and find the length of the array. 
      //    The array size should be greater than 5
      // 6. Declare an array variable name itCompanies and assign initial values 
      //    Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
      // 7. Print the array using console.log()
      // 8. Print the number of companies in the array
      // 9. Print the first company, middle and last company
      // 10. Print out each company
      // 11. Change each company name to uppercase one by one and print them out
      // 12. Print the array like as a sentence: 
      //     Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
      // 13. Check if a certain company exists in the itCompanies array. 
      //     If it exist return the company else return a company is not found







      const newArray = Array()
      let lastWebIndex = webTechs.length - 1 
      let middleWebIndex = lastWebIndex / 2

      const mixedDataTypes = ["String", 3, [1,2,3], "Ending", 2.5, {"Fav Book" : "Harry Potter"}]
      

      console.log('1.', newArray)
      console.log('2.', webTechs)
      console.log('3.', webTechs.length)
      console.log('4.', webTechs[0], webTechs[middleWebIndex], webTechs[lastWebIndex])
      console.log('5.', mixedDataTypes.length, mixedDataTypes[5] )
      console.log('7.', itCompanies)
      console.log('8.', itCompanies.length)
      console.log('9.', itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[(itCompanies.length-1)])
      console.log('12.', itCompanies.join(', '), 'are big IT companies')
      console.log('13.', getExistingComp())
      

      function getExistingComp(){
          if(itCompanies.includes("Bloomberg")){
              return "Amazon"
          }else{
              return "Company is not found"
          }
      }



      function renderItCompanies() {
          return itCompanies.map(comp => <li>{comp.toUpperCase()}</li>)
      }

    return (
        <>
        <h1>for practice</h1>
        IT Companies: 
        <ul>
            {renderItCompanies()}
        </ul>
    </>
    )
}

export default Testing