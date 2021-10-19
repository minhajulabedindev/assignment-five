function getProducts(productTotal, price) {
    const memoryPrice = document.getElementById(productTotal)
    const memoryPriceText = memoryPrice.innerText
    const newMemoryPrice = parseFloat(memoryPriceText)
    if (price <= 0) {
        memoryPrice.innerText = newMemoryPrice * price
    }
    else {
        memoryPrice.innerText = price
    }
    totalPrices()
}
/* =========================  part of memory  =========================  */
document.getElementById("memory-8gb").addEventListener('click', function () {
    getProducts("memory-cost", 0)

})
document.getElementById("memory-16gb").addEventListener('click', function () {
    getProducts("memory-cost", 180)

})
/* =========================  part of storage  =========================  */
document.getElementById("storage-256gb").addEventListener('click', function () {
    getProducts("storage-cost", 0)

})
document.getElementById("storage-512gb").addEventListener('click', function () {
    getProducts("storage-cost", 100)

})
document.getElementById("storage-1t").addEventListener('click', function () {
    getProducts("storage-cost", 180)

})

/* =========================  part of delivery =========================  */
document.getElementById("delivery-free").addEventListener('click', function () {
    getProducts("delivery-cost", 0)

})
document.getElementById("delivery-price").addEventListener('click', function () {
    getProducts("delivery-cost", 20)
})


/*------------------------part of add all price------------------- */


function getTotalPrice(product) {

    const totaProductPrice = document.getElementById(product)
    const totalProductPriceText = totaProductPrice.innerText
    const newTotalProductPrice = parseFloat(totalProductPriceText)
    return newTotalProductPrice
}
function totalPrices() {

    const totalbestPice = getTotalPrice('best-cost')
    const totalmemoryPice = getTotalPrice('memory-cost')
    const totalStoragePice = getTotalPrice('storage-cost')
    const totalDeliveryPice = getTotalPrice('delivery-cost')
    const totalAmount = totalbestPice + totalmemoryPice + totalStoragePice + totalDeliveryPice
    const totalbottom = document.getElementById('total-amount').innerText = totalAmount
    document.getElementById("total-bottom").innerText = totalbottom

}

/*------------------------part of add all price------------------- */

function applyBtn() {
    const totalPrice = document.getElementById("total-bottom")
    const totalPriceText = totalPrice.innerText
    let newTotalPrice = parseFloat(totalPriceText)

    const taxInput = document.getElementById('tax-input')
    let taxInputValue = taxInput.value
    if (taxInputValue == 'stevekaku') {
        const all = newTotalPrice / 100 * 20
        const totalAll = newTotalPrice - all
        totalPrice.innerText = totalAll
        taxInput.value = ""
    }
}

