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

// Make Code Better With Function

// document.getElementById('iphoneReduce').addEventListener('click',function(){
//     const reduceNum = document.getElementById('iphoneNumber');
//     const parseNum = parseInt(reduceNum.value);
//     const caseCount = parseNum - 1;
//     reduceNum.value = caseCount;
//     const total = caseCount * 1219;
//     document.getElementById('totalPhonePrice').innerText = '$' + total;
// });

// document.getElementById('iphoneIncrese').addEventListener('click',function(){
//     const increseNum = document.getElementById('iphoneNumber');
//     const parseNum = parseInt(increseNum.value);
//     const caseCount = parseNum +1;
//     increseNum.value = caseCount;
//     const total = caseCount * 1219;
//     document.getElementById('totalPhonePrice').innerText = '$' + total;
// })

// document.getElementById('caseReduce').addEventListener('click',function(){
//     const reduceNum = document.getElementById('caseNumber');
//     const parseNum = parseInt(reduceNum.value);
//     const caseCount = parseNum - 1;
//     reduceNum.value = caseCount;
//     const total = caseCount * 59;
//     document.getElementById('currentCasePrice').innerText = total;
// });

// document.getElementById('caseIncrese').addEventListener('click',function(){
//     const increseNum = document.getElementById('caseNumber');
//     const parseNum = parseInt(increseNum.value);
//     const caseCount = parseNum + 1;
//     increseNum.value = caseCount;
//     const total = caseCount * 59;
//     document.getElementById('currentCasePrice').innerText = total;
// });

// * Two Common Function for Code

// function caseEventHandler(isIncrese){
//         const caseInput = document.getElementById('caseNumber');
//         const caseParseCount = parseInt(caseInput.value);
//         let caseNewCount = caseParseCount;
//         if(isIncrese == true){
//             caseNewCount = caseParseCount + 1 ;
//         }
//         if(isIncrese == false && caseNewCount > 0){
//             caseNewCount = caseParseCount - 1 ;
//         }
//         caseInput.value = caseNewCount;
//         const total = caseNewCount * 59;
//         document.getElementById('currentCasePrice').innerText = total;
// };

// function phoneEventHandler(isIncrese){
//     const phoneInput = document.getElementById('iphoneNumber');
//     const phoneParseCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneParseCount;
//     if(isIncrese == true){
//         phoneNewCount = phoneParseCount + 1;
//     }
//     if(isIncrese == false && phoneNewCount > 0){
//         phoneNewCount = phoneParseCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const total = phoneNewCount * 1219;
//     document.getElementById('totalPhonePrice').innerText = total;
// };

// TODO make code more Optimizable with Specific Function

function eventHandler (product,isIncrese){
    const productInput = document.getElementById(product+'Number');
    const parseNum = parseInt(productInput.value);
    let productNewCount = parseNum;
    if(isIncrese == true ){
        productNewCount = parseNum + 1;
    }
    if(isIncrese == false && parseNum > 0 ){
        productNewCount = parseNum - 1;
    }
    productInput.value = productNewCount;
    let total = 0;
    if (product == 'iphone'){
        total = productNewCount * 1219 ;
    }
    if (product == 'case'){
        total = productNewCount * 59 ;
    }
    document.getElementById(product+'Price').innerText = total;
    calculateTotal(); 
};

function calculateTotal(){
    const phoneCount = getInputValue('iphone');
    const caseCount = getInputValue('case');

    // const phoneInput = document.getElementById('iphoneNumber');
    // const phoneCount = parseInt(phoneInput.value);

    // const caseInput = document.getElementById('caseNumber');
    // const caseCount = parseInt(caseInput.value);

    const total = phoneCount * 1219 + caseCount * 59 ;
    document.getElementById('total-price').innerText = '$' + total;

    const tax = document.getElementById('tax-amount');
    const taxAmount = parseInt(tax.value);
    
    const taxCount = Math.round(total * 0.1);
    document.getElementById('tax-amount').innerText = '$' + taxCount;

    const grandTotal = total + tax ;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
};

function getInputValue(product){
    const productInput = document.getElementById(product + 'Number');
    const productCount = parseInt(productInput.value);
    return productCount;
}