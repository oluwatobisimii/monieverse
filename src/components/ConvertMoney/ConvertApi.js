import { baseApiCall } from "../../api/MakeApiCallswithHeader"



export const getRateDetails = async (from, to, amount) => {
    console.log(from, to, amount)

    await baseApiCall(`/users/quotes?base_currency=${from}&quote_currency=${to}&amount=${amount}`, "GET").then((payload) => {
        if (payload.status === "OK") {
            return payload.data
        }
    }).catch(err => { console.error(err) })
}


export const swapMoney = async (from, to, amount, pin) => {
    await baseApiCall('users/swap', 'POST', {
        "base_currency": from,
        "quote_currency": to,
        "amount": amount
    }, "", pin).then((payload) => {
        console.log(payload)
    }).catch((err) => { console.log(err) })
}