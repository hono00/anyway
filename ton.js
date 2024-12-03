// Initialisation du connecteur TonConnect
const connector = new TonConnect.TonConnect();

// Fonction pour envoyer une transaction
async function sendTransaction() {
    // Vérifier si le portefeuille est connecté
    if (!connector.connected) {
        alert('Veuillez connecter votre portefeuille pour envoyer la transaction !');
        return;
    }

    const transaction = {
        messages: [
            {
                address: "UQAyur03sCo86XBCKsba6mg_uXP8c3YBiR46ATMOt2b0VEo7", // adresse de destination
                amount: "100000000" // Toncoin en nanotons
            }
        ]
    };

    try {
        // Envoyer la transaction via le connecteur
        const result = await connector.sendTransaction(transaction);
        console.log("Transaction réussie :", result);

        // Optionnel : Vous pouvez récupérer des détails de la transaction
        const someTxData = await myAppExplorerService.getTransaction(result.boc);
        alert('Transaction envoyée avec succès. Détails de la transaction : ' + JSON.stringify(someTxData));

    } catch (error) {
        console.error("Transaction échouée :", error);

        if (error instanceof UserRejectedError) {
            alert('Vous avez rejeté la transaction. Veuillez confirmer la transaction pour l’envoyer sur la blockchain.');
        } else {
            alert('Une erreur inconnue est survenue. Veuillez réessayer.');
        }
    }
}

// Fonction pour se connecter au portefeuille
async function connectToWallet() {
    try {
        const connectedWallet = await connector.connectWallet();
        console.log("Portefeuille connecté :", connectedWallet);
    } catch (error) {
        console.error("Erreur lors de la connexion au portefeuille :", error);
    }
}

// Attacher les gestionnaires d'événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-wallet-button');
    const sendTransactionButton = document.getElementById('send-transaction-button');
    
    // Ajouter un événement de connexion au portefeuille
    connectButton.addEventListener('click', connectToWallet);
    
    // Ajouter un événement pour envoyer la transaction
    sendTransactionButton.addEventListener('click', sendTransaction);
});
