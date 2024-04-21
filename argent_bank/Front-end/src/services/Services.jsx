
/**
 * Fonction permettant d'appeler la base de données locale pour la page d'accueil
 * @returns 
 */

const getDataLandingPage = async () => {
    try {
        const response = await fetch("./dataBase/dataBaseLandPage.json"); 
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Impossible de récupérer les données");
        }
    } catch(error) {
        console.error('Impossible d\'afficher les données de la page d\'accueil', error);
        return null;
    }
}

/**
 * Fonction permettant d'appeler les données mockées des transactions des utilisateurs.
 * @returns 
 */

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

/**
 * Fonction permettant de se loguer comme utilisateur connecté
 * @param {*} data 
 * @returns 
 */
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

/**
 * fonction permettant de récupérer les informations de l'utilisateur enregistré
 * @param {*} data 
 * @returns 
 */
const getUser = async () => {

    const getUserToken = localStorage.getItem('token');

        const getUser = await fetch('http://localhost:3001/api/v1/user/profile', {
        
        method : "POST",
        headers : {
            'Authorization': `Bearer ${getUserToken}`
        }
    })

    return await getUser.json()
}

/**
 * fonction permettant de modifier l'utilisateur présent dans le store.
 * @param {*} newName 
 * @param {*} newLastName 
 */
const updateUser = async (newName, newLastName) => {

    const getUserToken = localStorage.getItem('token');

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