function name(x, y){
    return x + y
}
const tambah = name(20,39)
console.log(tambah)

const xml = new XMLHttpRequest();
xml.open('GET', 'http://127.0.0.1/api/auth/register')
xml.onload = () => {
    if (xml.status === 200){
        const data = JSON.parse(xml.responseText);
        console.log(data)
    }else {
        console.error("Network Response was mot ok")
    }
}
xml.send(); 
// Nova Andika
// ppp
