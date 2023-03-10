async function getData(id){
    const reponse = await fetch(`http://localhost:3000/user/${id}`);
    const data = reponse.json()
    console.log(data);
  return data
}

export default getData;