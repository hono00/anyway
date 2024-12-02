// Fonction pour se connecter au portefeuille
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

// Exemple de redirection vers une mini-app Telegram
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://hono00.github.io/anyway/'
};

// Appel de la fonction pour se connecter au portefeuille
connectToWallet();
