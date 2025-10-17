const { configDotenv } = require("dotenv");
configDotenv()
async function sendDataToUserService() {
    console.log("we are here!");
    console.log(process.env.WEBHOOK_URL)
    headers= {
        "content-type": "application/json"
    }

    payload = {
        "user-name": "user7823",
        "payment-status": "success",
        "payment-id": "ABRJ38064DJ3594"
    }

    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: headers
    }).then(res => {
        console.log("status ",res.status)
    })

}

module.exports = {sendDataToUserService};