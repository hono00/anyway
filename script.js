
async function connectToWallet() {
    try {
        const connectedWallet = await tonConnectUI.connectWallet();
        console.log("Portefeuille connecté:", connectedWallet);
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille:", error);
    }
}

// Fonction pour déconnecter le portefeuille
async function disconnectWallet() {
    try {
        await tonConnectUI.disconnect();
        console.log("Portefeuille déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion du portefeuille:", error);
    }
}

// Attacher les gestionnaires d'événements
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-button');
    const disconnectButton = document.getElementById('disconnect-button');

    connectButton.addEventListener('click', connectToWallet);
    disconnectButton.addEventListener('click', disconnectWallet);
});

// Exemple de redirection vers une mini-app Telegram
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://hono00.github.io/anyway/'
};
