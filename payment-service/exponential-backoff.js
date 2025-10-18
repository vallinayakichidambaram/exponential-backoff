const { configDotenv } = require("dotenv");

let maxRetries = 5;
let jitter = 1000;
configDotenv();
function retryWithExponentialBackoff() {
    let retry = 1

    const execute = async () => {
        try {
            // console.log("Payment Processed!");
            console.log("Sending data ...");

            // console.log(process.env.WEBHOOK_URL)
            headers = {
                "content-type": "application/json"
            }

            payload = {
                "user-name": "user7823",
                "payment-status": "success",
                "payment-id": "ABRJ38064DJ3594"
            }

            await fetch(process.env.WEBHOOK_URL, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: headers
            }).then(res => {
                console.log("status ", res.status)
                console.log("Data Sent")
            })


        } catch (error) {
            if (retry >= maxRetries) {
                console.log("Max retries reached!");
            } else {

                const delayMs = (2 ** retry) * jitter
                console.log(`Retry attempt ${retry} after ${delayMs}ms`)
                await new Promise((resolve) => setTimeout(resolve, delayMs))
                retry++;
                execute()
            }


        }
    }

    if (retry === 1) execute()
}

module.exports = { retryWithExponentialBackoff };