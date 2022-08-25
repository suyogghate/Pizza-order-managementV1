let orderStatuses = document.getElementsByClassName('order-status-block');

const executeOrder = () =>{
    let orderId = document.getElementById('order-id-input').value;
    document.getElementById('order-id-input').value = '';

    document.getElementById('order-id-display').innerText = `Order status for ID: ${orderId}`;

    orderStatuses[0].classList.remove('btn-light');
    orderStatuses[0].classList.add('btn-success');  

    chefReceivedtheOrder()
        .then(pizzaSauceAdded)
        .then(firstLayerOfCheeseAdded)
        .then(toppingsAdded)
        .then(secondLayerOfCheeseAdded)
        .then(pizzaBaked)
        .then(oreganoAddedAndPacked)
        .then(packageRecievedAtCounter)
        .then(() => {
            orderStatuses[9].classList.remove('btn-light');
            orderStatuses[9].classList.add('btn-success');        
        })
        .catch((error) => console.log(error))

}

const chefReceivedtheOrder = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[1].classList.remove('btn-light');
            orderStatuses[1].classList.add('btn-success');
            resolve();
        }, 2000)
    })
}

const pizzaSauceAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[2].classList.remove('btn-light');
            orderStatuses[2].classList.add('btn-success');  
            resolve();
        }, 10000)
    })
}

const firstLayerOfCheeseAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[3].classList.remove('btn-light');
            orderStatuses[3].classList.add('btn-success');  
            resolve();
        }, 5000)
    })
}

const toppingsAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[4].classList.remove('btn-light');
            orderStatuses[4].classList.add('btn-success');  
            resolve();
        }, 12000)
    })
}

const secondLayerOfCheeseAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[5].classList.remove('btn-light');
            orderStatuses[5].classList.add('btn-success');  
            resolve();
        }, 5000)
    })
}

const pizzaBaked = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[6].classList.remove('btn-light');
            orderStatuses[6].classList.add('btn-success');
            resolve();       
        }, 15000)
    })
}

const oreganoAddedAndPacked = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[7].classList.remove('btn-light');
            orderStatuses[7].classList.add('btn-success');
            resolve();   
        }, 8000)
    })
}

const packageRecievedAtCounter = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderStatuses[8].classList.remove('btn-light');
            orderStatuses[8].classList.add('btn-success');
            resolve();   
        }, 2000)
    })
}

