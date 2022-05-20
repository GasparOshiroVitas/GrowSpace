export const products = [
    {id:`1` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`2` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`3` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`4` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`5` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`6` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`7` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`8` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`9` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},
    {id:`10` , name: `Picador`, category:`Smoke Shop`, img:``, detail:`Lorem`, price:2500},

]
export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const query = id ? products.find(product => product.id ===id): products
            resolve(query)
        }, 2000)
    })
}