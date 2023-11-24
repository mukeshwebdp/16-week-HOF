    // High order function

// let passOne = (n)=>{
//     return n**2
// }
//     function passTwo(passOne,n){
//         return passOne(n)
//     }
//     console.log(passTwo(passOne,5))

// function SayHello(){
//     return ()=>{
//         console.log('Hello Dosto')
//     }
// }
//     let valueOne = SayHello()
//     // console.log(valueOne);
//     valueOne()

    // const higherOrder = n=>{
    //     const oneValue = m=>{
    //         const twoValue = l=>{
    //             return n+m+l
    //         }
    //         return twoValue
    //     }
    //     return oneValue
    // }
    //     console.log(higherOrder(3)(10)(5));
    
    const number =[9,8,5,10,12,11]

    // let check = number.findIndex(checkNumber)
    // function checkNumber(value){
    //     return 11 < value
    // }
    // console.log(check);

    console.log(number.findIndex((value)=> 9 < value));