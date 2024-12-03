// Initialisation du connecteur TonConnect (déclaration unique)
const connector = new TonConnect.TonConnect();

// Initialisation de l'interface utilisateur
document.addEventListener('DOMContentLoaded', () => {
    if (!window.tonConnectUI) {
        window.tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://hono00.github.io/anyway/tonconnect-manifest.json',
            buttonRootId: 'ton-connect',
        });
    }

    const sendTransactionButton = document.getElementById('send-transaction-button');
    sendTransactionButton.addEventListener('click', handleTransactionButtonClick);
});

// Fonction pour gérer le clic sur le bouton de transaction
async function handleTransactionButtonClick() {
    if (!connector.connected) {
        // Si le portefeuille n'est pas connecté, tenter de le connecter
        try {
            console.log("Portefeuille non connecté, tentative de connexion...");
            await connectToWallet();
            console.log("Portefeuille connecté avec succès.");
        } catch (error) {
            console.error("Impossible de connecter le portefeuille :", error);
            alert("Erreur lors de la connexion au portefeuille. Veuillez réessayer.");
            return; // Stopper ici si la connexion échoue
        }
    }
    // Une fois connecté, envoyer la transaction
    sendTransaction();
}

// Fonction pour connecter un portefeuille
async function connectToWallet() {
    try {
        const connectedWallet = await connector.connectWallet();
        console.log("Portefeuille connecté :", connectedWallet);
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille :", error);
        throw error; // Rejeter l'erreur pour la gestion dans `handleTransactionButtonClick`
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
