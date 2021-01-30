//Reduce Iphone Number

// const reduceNum = document.getElementById('reduce');
// reduceNum.addEventListener('click',function(){
//     const iphoneNumText = document.getElementById('iphoneNumber').value--;
//     if(iphoneNumText == 0){
//         document.getElementById('iphoneNumber').value = 0;
//     }
//     // const iphoneParseNum = parseFloat(iphoneNumText);
//     console.log(iphoneNumText)
// });


// reduce('iphoneReduce','iphoneNumber');
// reduce('caseReduce','caseNumber');

// function reduce(id,iphoneOrCaseArea){
//     const reduceNum = document.getElementById(id);
//     reduceNum.addEventListener('click',function(){
//         const reduceValue = document.getElementById(iphoneOrCaseArea).value--;
//         if(reduceValue == 0){
//             document.getElementById(iphoneOrCaseArea).value = 0;
//         }
//         return reduce
//     })
// }

// increse('iphoneIncrese','iphoneNumber');
// increse('caseIncrese','caseNumber');

// function increse(id,iphoneOrCaseArea){
//     const increseNum = document.getElementById(id);
//     increseNum.addEventListener('click', function(){
//     const increseValue = document.getElementById(iphoneOrCaseArea).value++;
    
// })
// }
// const casePrice = document.getElementById('currentCasePrice').innerText;
// const parseCasePrice = parseFloat(casePrice);
// const totalCasePrice = increseNewValue * parseCasePrice;
// document.getElementById('currentCasePrice').innerText = totalCasePrice;

document.getElementById('iphoneReduce').addEventListener('click',function(){
    const reduceNum = document.getElementById('iphoneNumber');
    const parseNum = parseInt(reduceNum.value);
    const caseCount = parseNum - 1;
    reduceNum.value = caseCount;
    const total = caseCount * 1219;
    document.getElementById('totalPhonePrice').innerText = '$' + total;
});

document.getElementById('iphoneIncrese').addEventListener('click',function(){
    const increseNum = document.getElementById('iphoneNumber');
    const parseNum = parseInt(increseNum.value);
    const caseCount = parseNum +1;
    increseNum.value = caseCount;
    const total = caseCount * 1219;
    document.getElementById('totalPhonePrice').innerText = '$' + total;
})
