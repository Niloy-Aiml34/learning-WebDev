export function getStockData(){
    return {
        name: "Qtech",
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata"
        })

    }
}