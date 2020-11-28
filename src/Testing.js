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
      // 1. Declare an empty array
      // 2. Declare an array with more than 5 number of elements
      // 3. Find the length of your array
      // 4. Get the first item, the middle item and the last item of the array
      // 5. Declare an array called mixedDataTypes, 
      //    put different data types in the array and find the length of the array. 
      //    The array size should be greater than 5


      const newArray = Array()
      let lastWebIndex = webTechs.length - 1 
      let middleWebIndex = lastWebIndex / 2

      const mixedDataTypes = ["String", 3, [1,2,3], "Ending", 2.5, {"Fav Book" : "Harry Potter"}]
    


      console.log('1.', newArray)
      console.log('2.', webTechs)
      console.log('3.', webTechs.length)
      console.log('4.', webTechs[0], webTechs[middleWebIndex], webTechs[lastWebIndex])
      console.log('5.', mixedDataTypes.length, mixedDataTypes[5] )

    return (
        <>
    <h1>for practice</h1>
    </>
    )
}

export default Testing