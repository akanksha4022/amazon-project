// we created the function to solve the repeitation issue of money conversion
export function moneyConversion(priceCents){
   return (Math.round(priceCents)/100).toFixed(2);
}