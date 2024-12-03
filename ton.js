// Fonction pour envoyer une transaction
async function sendTransaction() {
    const transaction = {
        messages: [
            {
                address: "UQAyur03sCo86XBCKsba6mg_uXP8c3YBiR46ATMOt2b0VEo7", // adresse de destination
                amount: "100000000" // Toncoin en nanotons
            }
        ]
    };

    try {
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log("Transaction réussie :", result);
    } catch (error) {
        console.error("Transaction échouée :", error);
    }
}

async function ConnectAndSendTransaction() {
    try {
        await sendTransaction();
    } catch (error) {
        console.error("Erreur lors de la connexion ou de l'envoi de la transaction :", error);
    }
}

// Attacher le gestionnaire d'événements pour le bouton d'envoi de transaction
document.addEventListener('DOMContentLoaded', () => {
    const sendTransactionButton = document.getElementById('send-transaction-button');
    sendTransactionButton.addEventListener('click', ConnectAndSendTransaction);
});
