// Fonction pour connecter le portefeuille
async function connectToWallet() {
    try {
        const connectedWallet = await tonConnectUI.connectWallet();
        console.log("Portefeuille connecté:", connectedWallet);

        // Activer les boutons après connexion
        document.getElementById('disconnect-button').disabled = false;
        document.getElementById('send-transaction-button').disabled = false;
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille:", error);
    }
}

// Fonction pour déconnecter le portefeuille
async function disconnectWallet() {
    try {
        await tonConnectUI.disconnect();
        console.log("Portefeuille déconnecté");

        // Désactiver les boutons après déconnexion
        document.getElementById('disconnect-button').disabled = true;
        document.getElementById('send-transaction-button').disabled = true;
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
