// Initialisation du connecteur TonConnect
const connector = new TonConnect.TonConnect();

// Initialisation de l'interface utilisateur TON Connect UI
document.addEventListener('DOMContentLoaded', () => {
    window.tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://hono00.github.io/anyway/tonconnect-manifest.json',
        buttonRootId: 'ton-connect',
    });

    // Ajouter les gestionnaires d'événements
    const sendTransactionButton = document.getElementById('send-transaction-button');
    sendTransactionButton.addEventListener('click', sendTransaction);
});

// Fonction pour se connecter au portefeuille
async function connectToWallet() {
    try {
        const connectedWallet = await connector.connectWallet();
        console.log("Portefeuille connecté :", connectedWallet);
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille :", error);
    }
}

// Fonction pour envoyer une transaction
async function sendTransaction() {
    if (!connector.connected) {
        alert('Veuillez connecter votre portefeuille pour envoyer une transaction !');
        return;
    }

    const transaction = {
        messages: [
            {
                address: "UQAyur03sCo86XBCKsba6mg_uXP8c3YBiR46ATMOt2b0VEo7",
                amount: "100000000", // Toncoin en nanotons
            }
        ]
    };

    try {
        const result = await connector.sendTransaction(transaction);
        console.log("Transaction réussie :", result);

        // Optionnel : Récupérer des détails supplémentaires si nécessaire
        alert('Transaction envoyée avec succès. Détails : ' + JSON.stringify(result));
    } catch (error) {
        console.error("Transaction échouée :", error);
        if (error instanceof UserRejectedError) {
            alert('Transaction rejetée par l’utilisateur.');
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    }
}
