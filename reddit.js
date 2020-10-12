let url = 'https://www.reddit.com'


const res = fetch(url);
if(!res.status){
    throw new Error('Network response was not good');
}
const data = res.json()

const names = data.map(name => {
    return name.name
})