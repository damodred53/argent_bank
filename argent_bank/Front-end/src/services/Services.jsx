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

const AllServices = {
    getDataLandingPage,
    getDataBankAccount
};

export default AllServices;