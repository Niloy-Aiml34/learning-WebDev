let largecountry = ["China","India","America", "Indonesia", "Pakistan"]
console.log("Largest Country by population")
for(let i=0;i<largecountry.length;i++){
    console.log("-"+largecountry[i]);
}


largecountry.pop()
largecountry.pop()
largecountry.push("Canada")
largecountry.unshift("Russia")
console.log("Largest Country by population")
for(let i=0;i<largecountry.length;i++){
    console.log("-"+largecountry[i]);
}