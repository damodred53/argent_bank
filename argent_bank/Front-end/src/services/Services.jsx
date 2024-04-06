export const getDataLandingPage = async () => {
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

const ServicesToExport = {
    getDataLandingPage
};

export default ServicesToExport;