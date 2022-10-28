/**
 * @param {Helm} helm
 * @param {Number} discount
 * @param {Number} tax
 */

 function discount(helm, discount, tax){
    let result = 0;
    if(helm && helm.price){
        const title = helm.title;
        const price = helm.price;
        const totalDiscount = price * (discount/100);
        const priceAfterDiscount = price - totalDiscount;
        const totalTax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totalTax;
        result += priceAfterTax;

        console.group();
        console.log(title)
        console.log('Original Price', price);
        console.log('Discount Amount', totalDiscount);
        console.log('Price After Discount', priceAfterDiscount);
        console.log('Tax Amount', totalTax);
        console.log('Price After Tax', priceAfterTax)
        console.log()
        console.groupEnd();
    }

}

discount({title: "Helm KYT", price:5000000, publicity: true}, 30, 3);
discount({title: "Helm NHK", price:1000000, publicity: false}, 40, 2);
discount({title: "Helm Sukro", price:1500000, publicity: true}, 45, 3);