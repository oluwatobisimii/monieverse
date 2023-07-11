import { baseApiCall } from "../../api/MakeApiCallswithHeader"

export const CreateNGNWallet = async (navigate, onClose, currencyName, currencysymbol) => {
    await baseApiCall('users/wallets/create', 'POST', {
        "currency_id": 1
    }).then((response) => {
        if (response.status === 'OK') {
            onClose();
            navigate("/available-balance", {
                state: { currencyName, currencysymbol },
            });
        }
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}


export const CreateWallets = async () => {

    try {
        const walletNGN = await baseApiCall('users/wallets/create', 'POST', {
            "currency_id": 1
        })

        if (walletNGN.status === 'OK') {
            const walletUSD = await baseApiCall('users/wallets/create', 'POST', {
                "currency_id": 2
            })

            if (walletUSD.status === 'OK') {
                return walletUSD
            }
        } else { throw new Error(walletNGN) }

    } catch (error) {
        console.log(error)
    }

}

export const CreateWalletbyID = async (id) => {

    try {
        const response = await baseApiCall('users/wallets/create', 'POST', {
            "currency_id": id
        })
        console.log(response)
        return response.data

    } catch (error) {
        console.log(error)
    }

}