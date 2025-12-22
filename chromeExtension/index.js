
let myLeads = []
const inputEl = document.getElementById('input-el')

let inputButton = document.getElementById('input-btn')
let ulEL = document.getElementById('ul-el')
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let deleteBtn = document.getElementById('delete-btn')
let tabBtn = document.getElementById('tab-btn')
let downloadBtn = document.getElementById('download-btn');


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}
inputButton.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
})


tabBtn.addEventListener('click', function(){
        chrome.tabs.query({active: true, currentWindow:true},function(tabs){
            myLeads.push(tabs[0].url)   
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            renderLeads(myLeads)
        })
})


deleteBtn.addEventListener('click', function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


downloadBtn.addEventListener('click', function () {
    const leads = myLeads.join("\n");
    const blob = new Blob([leads], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
        url: url,
        filename: "myLeads.txt",
        saveAs: true
    });
});



function renderLeads(leads){
    let listitems = ""
    for(let i=0;i<leads.length;i++){
        listitems +=  `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listitems
}


