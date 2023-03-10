async function getUserData(id){
    const reponse = await fetch(`http://localhost:3000/user/${id}`);
    const reponseJson = await reponse.json()
    const data = reponseJson.data;

  return (data)
}

export default getUserData;