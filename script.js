// https://holidayapi.com/v1/holidays?pretty&key=e7958453-b454-449b-8df6-d145b0944098&country=IN&year=2022



     fetch("https://www.fishwatch.gov/api/species")
        .then((response) => response.json())
        .then((data) => {
            
            data.forEach(element => {
                
                const fishobject = {

                   ...element,
        Calories: element.Calories,
        Cholesterol : element.Cholesterol,
      //  Image : element.ImageGallery[0].src,
      harvest:element.Harvest

       // Image : element.ImageGallery.src

                }

                


                fishwatch(fishobject);

            });
           
        })
        

  
    
    
   

    function fishwatch({ Calories, Cholesterol,  harvest }) {
    document.body.innerHTML += 
   
   `
  
   <div class= "container">
   <p>calories:${Calories}</p>
   <p>calories:${Cholesterol}</p>
   <p>harvest:${harvest}</p>
   </div>

   `
  
    }
    



    //       data.forEach(element => {
//      const countryRequired = {
//        
//         Calories: element.Calories,
//         Cholesterol : element.Cholesterol,
//         Image : element.ImageGallery.src
       
       
//      }
//       createCountry(countryRequired)
//      });

// })


// function createCountry({ Calories, Cholesterol,  Image  }) {
//     MainContainer.innerHTML += 
   
//    `
  
       
//         <div class="card-body">
//                <img src="${Image }"  class="card-img-top" >
//             <div class="card-text-style">
//                 <p><span>Capital : </span>${Calories}</p>
//                 <p><span>Region : </span>${Cholesterol}</p>
                
//             </div>
//         </div>
//   
