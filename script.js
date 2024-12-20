// Fonction pour se connecter au portefeuille

async function connectToWallet() {
        

    try {
        if (!tonConnectUI.connected) {

            const connectedWallet = await tonConnectUI.connectWallet();
            console.log("Portefeuille connecté:", connectedWallet);
        }



    } catch (error) {

        console.error("Erreur lors de la connexion au portefeuille:", error);

    }

}



// Fonction pour déconnecter le portefeuille

async function disconnectWallet() {

    try {
        if (tonConnectUI.connected) {

            await tonConnectUI.disconnect();

            console.log("Portefeuille déconnecté");

        }

    } catch (error) {

        console.error("Erreur lors de la déconnexion du portefeuille:", error);

    }

}



// Exemple de redirection vers une mini-app Telegram

tonConnectUI.uiOptions = {

    twaReturnUrl: 'https://hono00.github.io/anyway/'

};





// Attacher les gestionnaires d'événements après le chargement du DOM

document.addEventListener('DOMContentLoaded', () => {

    const connectButton = document.getElementById('ton-connect');

    

    // Ajouter un événement de connexion

    connectButton.addEventListener('click', connectToWallet);

});

