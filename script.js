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


reduce('iphoneReduce','iphoneNumber');
reduce('caseReduce','caseNumber')

function reduce(id,iphoneOrCaseArea){
    const reduceNum = document.getElementById(id);
    reduceNum.addEventListener('click',function(){
        const reduceValue = document.getElementById(iphoneOrCaseArea).value--;
        if(reduceValue == 0){
            document.getElementById(iphoneOrCaseArea).value = 0;
        }
    })
}

increse('iphoneIncrese','iphoneNumber');
increse('caseIncrese','caseNumber');

function increse(id,iphoneOrCaseArea){
    const increseNum = document.getElementById(id);
    increseNum.addEventListener('click', function(){
    const increseValue = document.getElementById(iphoneOrCaseArea).value++;
})
}
