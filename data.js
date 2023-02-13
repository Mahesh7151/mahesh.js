

let users = [{ "id": 1, "fname": "Pattie", "lname": "Keiley", "email": "pkeiley0@latimes.com", "gender": "Male" },
{ "id": 2, "fname": "Rheba", "lname": "Chivers", "email": "rchivers1@japanpost.jp", "gender": "Female" },
{ "id": 3, "fname": "Peta", "lname": "Flaonier", "email": "pflaonier2@php.net", "gender": "Female" },
{ "id": 4, "fname": "Roland", "lname": "Langtree", "email": "rlangtree3@youtube.com", "gender": "Male" },
{ "id": 5, "fname": "Ashton", "lname": "Hunnam", "email": "ahunnam4@boston.com", "gender": "Male" },
{ "id": 6, "fname": "Meridel", "lname": "Nekrews", "email": "mnekrews5@soundcloud.com", "gender": "Female" },
{ "id": 7, "fname": "Pasquale", "lname": "McCracken", "email": "pmccracken6@abc.net.au", "gender": "Bigender" },
{ "id": 8, "fname": "Sidoney", "lname": "Dimitrov", "email": "sdimitrov7@umn.edu", "gender": "Female" },
{ "id": 9, "fname": "Babb", "lname": "Coche", "email": "bcoche8@japanpost.jp", "gender": "Female" },
{ "id": 10, "fname": "Thedrick", "lname": "Tipping", "email": "ttipping9@mtv.com", "gender": "Non-binary" },
{ "id": 11, "fname": "Lora", "lname": "Kobieriecki", "email": "lkobierieckia@berkeley.edu", "gender": "Female" },
{ "id": 12, "fname": "Breena", "lname": "Iremonger", "email": "biremongerb@weather.com", "gender": "Agender" },
{ "id": 13, "fname": "Simonne", "lname": "Domelow", "email": "sdomelowc@ustream.tv", "gender": "Female" },
{ "id": 14, "fname": "Lee", "lname": "Mowlam", "email": "lmowlamd@stanford.edu", "gender": "Polygender" },
{ "id": 15, "fname": "Phil", "lname": "Caldroni", "email": "pcaldronie@cargocollective.com", "gender": "Female" },
{ "id": 16, "fname": "Dugald", "lname": "Tabary", "email": "dtabaryf@ebay.com", "gender": "Male" },
{ "id": 17, "fname": "Emlyn", "lname": "Forge", "email": "eforgeg@unc.edu", "gender": "Male" },
{ "id": 18, "fname": "Guthry", "lname": "Judson", "email": "gjudsonh@123-reg.co.uk", "gender": "Male" },
{ "id": 19, "fname": "Paquito", "lname": "Gasgarth", "email": "pgasgarthi@mediafire.com", "gender": "Male" },
{ "id": 20, "fname": "Daren", "lname": "Freathy", "email": "dfreathyj@pbs.org", "gender": "Male" }]

function display_Users() {
    let rows = ""
    users.map((user) => {
        rows = rows + `<tr>
                         <td>${user.id}</td>   
                         <td>${user.fname}</td>   
                         <td>${user.lname}</td>   
                         <td>${user.email}</td>   
                         <td>${user.gender}</td> 
                      
        
                       </tr>`
    })
    document.getElementById('tbody_data').innerHTML = rows
}

function display_Users1() {
    //iterate array and construct table rows
    let rows = ""
    for (user of users) {
        rows = rows + `<tr>
        <td>${user.id}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        
        
       </tr>`
    }
    /* let rows = `<tr>
                <td>1</td>
                <td>Pattie</td>
                <td>Ke</td>
                <td>Ke</td>
                <td>Ke</td>
               </tr>`
 */
    document.getElementById('tbody_Data').innerHTML = rows
}