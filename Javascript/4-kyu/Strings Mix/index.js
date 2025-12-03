function mix(s1, s2) {
    let resultLength = [];
    let resultChrono = [];
    const countsS1 = {};
    const countsS2 = {};
   
      for (const char of s1.split('').filter(char => char != ' ')) {
       countsS1[char] = countsS1[char] ? countsS1[char] + 1 : 1;
     }
     for (const char of s2.split('').filter(char => char != ' ')) {
       countsS2[char] = countsS2[char] ? countsS2[char] + 1 : 1;
     }
   
   
   let inter = intersection(countsS1,countsS2);
   let s1Sorted = sortObject(countsS1);
   let s2Sorted = sortObject(countsS2);
   console.log(s1Sorted)
   console.log(s2Sorted)
   console.log(inter)
   
   for (const [key, value] of Object.entries(s1Sorted)) {
     if(inter.includes(key)){
       let s1 = s1Sorted[key];
       let s2 = s2Sorted[key];
       console.log(`Checking key ${key}: s1 ${s1} and s2 ${s2}`)
       if(s1 >= 1 && s2 > 1 || s2 >= 1 && s1 > 1 ){
         if(s1 > s2){
           let str = "1:" + Array(s1+1).join(key)
           resultLength.push(str)
         }else if(s2 > s1){
           let str = "2:" + Array(s2+1).join(key)
           resultLength.push(str)
         }else{
           resultChrono.push( Array(s2+1).join(key))
         }
       }
     }
   }
   
   let result = 
   
   
   return [...resultLength,...resultChrono.sort().map(item => "=:"+item)].join('/');
 }
 
 function intersection(o1, o2) {
     return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
 }
 
 function sortObject(obj){
   const sorted = Object.entries(obj)
   .sort(([, a], [, b]) => b - a)
   .reduce((reducer, [key, value]) => ({...reducer,[key]: value}),{})
     
     return sorted;
 }
 


//  if ( a.count > b.count ){
//     return -1;
//   }
//   else if ( a.count < b.count ){
//     return 1;
//   }
//   else if(a.count == b.count){
//     console.log(`sgtart Comapring ${a.char} with ${b.char}`)
//     if(a.src == "2" && b.src == "1"){
//       console.log(`a Comapring ${a.char} with ${b.char}`)
//        return -1;
//     }
//     else if(a.src == "1" && b.src == "2"){
//       console.log(`b Comapring ${a.char} with ${b.char}`)
//        return -1;
//     }
//     else if(a.src == "2" || a.src == "1" && b.src == "="){
//       return 1;
//     }
//     else if(b.src == "2" || b.src == "1" && a.src == "="){
//       return 1;
//     }else if(a.src == '=' && b.src == '='){
//        if ( a.char.charCodeAt() > b.char.charCodeAt()  ){
//         return 1;
//       }else{
//         return -1;
//       }
//     }
//   }