const getDataLandingPage = async () => {
    try {
        const response = await fetch("./dataBaseLandPage.json"); // Utilisez le chemin vers le fichier JSON
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw new Error("Impossible de récupérer les données");
        }
    } catch(error) {
        console.error('Impossible d\'afficher les données de la page d\'accueil', error);
        return null;
    }
}



const getDataBankAccount = async () => {
    try {
        const response = fetch('./dataBase/dataBaseBankAccount.json')
        if (response) {
            const data = await (await response).json()
            return data
        }

    } catch (error) {
        console.log('impossible d\'afficher les données bancaires de l\'utilisateur', error)
    }
}

const loginUser = async (data) => {

    try {

        const postData = await fetch('http://localhost:3001/api/v1/user/login', {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : data.email,
                password: data.password
            })
        });

        return postData;

    } catch (error) {
        console.log('Impossible d\'envoyer les identifiants de l\'utilisateur', error);
    }
}

const getUser = async (data) => {

    const getUserToken = localStorage.getItem('token');

    const getUser = await fetch('http://localhost:3001/api/v1/user/profile', {
        
        method : "POST",
        headers : {
            'Authorization': `Bearer ${getUserToken}`
        }
        
    })

    return await getUser.json()
}

const updateUser = async (newName, newLastName) => {

    const getUserToken = localStorage.getItem('token')

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${getUserToken}`
            },
            body: JSON.stringify({
                firstName : newName,
                lastName : newLastName
            }) 
        })

}

const AllServices = {
    getDataLandingPage,
    getDataBankAccount,
    loginUser,
    getUser,
    updateUser
    
};

export default AllServices;