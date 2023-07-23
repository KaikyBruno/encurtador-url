function encurtar () {
    let url = document.getElementById ('url').value
    if (!url) {
        window.alert ('É preciso inserir uma URL para encurtar')
        return 
    }

    /*API rest*/
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "25fecc46d1d447ec8018452019a1434f"
    }    

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly"}
    }

    fetch ("https://api.rebrandly.com/v1/links" ,{
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then (response => response.json())
    .then (json => {
        console.log (json)
        let inputurl = document.getElementById ('url')
        inputurl.value = json.shortUrl
    })
}

function copiar () {
    let inputurl = document.getElementById ('url')

    inputurl.select ()
    inputurl.setSelectionRange (0, 99999)

    navigator.clipboard.writeText (inputurl.value)
    window.alert (`URL copiado: ${inputurl.value}`)
}

