// Initialisation du connecteur
const connector = new TonConnect.TonConnect();

// Restauration de la connexion précédente
connector.restoreConnection();

// Fonction pour se connecter au portefeuille
async function connectToWallet() {
    try {
        const connectedWallet = await connector.connectWallet();
        console.log("Portefeuille connecté :", connectedWallet);
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille :", error);
    }
}

// Fonction pour déconnecter le portefeuille
async function disconnectWallet() {
    try {
        await connector.disconnect();
        console.log("Portefeuille déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion du portefeuille :", error);
    }
}

// Exemple de redirection vers une mini-app Telegram
connector.uiOptions = {
    twaReturnUrl: 'https://hono00.github.io/anyway/'
};

// Attacher les gestionnaires d'événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('ton-connect');
    
    // Ajouter un événement de connexion
    connectButton.addEventListener('click', connectToWallet);
});
