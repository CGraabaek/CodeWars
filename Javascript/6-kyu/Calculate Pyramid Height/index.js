// function pyramidHeight(n) {
  
//     let remainingCubes = n;
//     let pyramidLayer = 0;
    
//     for(let i = 1; remainingCubes > 0 && i <= n; i++){
      
//         if(i ** 2 <= remainingCubes && remainingCubes != 0){
//           pyramidLayer++;
//           remainingCubes = remainingCubes - (i**2);
//         }
//     }
//     console.log("remain before return " + remainingCubes)
//     return pyramidLayer;
//   }
  
  
// console.log(pyramidHeight(30))

function pyramidHeight(n) {
  
    let remainingCubes = n;
    let pyramidLayer = 0;
    let previousLayerSide = 0;
    
    if (remainingCubes >= 1) {
      remainingCubes = remainingCubes - 1;
      previousLayerSide++;
      pyramidLayer++;
      
      if (remainingCubes >= 4) {
        remainingCubes = remainingCubes - 4;
        previousLayerSide++;
        pyramidLayer++;
      }
      console.log(`rem ${remainingCubes} previousLayerSide ${previousLayerSide} pyramid layer ${pyramidLayer}`)

      while (remainingCubes > ((previousLayerSide ) ** 2)) {
        let necessaryCubes = (previousLayerSide + 1) ** 2;
        if (remainingCubes >= necessaryCubes) {
          pyramidLayer++;
          previousLayerSide++;
          remainingCubes = remainingCubes - necessaryCubes;
        }
      }
      
    }
    console.log("remain before return " + remainingCubes)
    return pyramidLayer
    
  }

console.log(pyramidHeight(30))
