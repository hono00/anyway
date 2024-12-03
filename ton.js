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

async function ConnectandsendTransaction() {
    if (ton.ConnectUI.connectWallet() = true){
        await sendTransaction();
    }
    else {
        await tonConnectUI.connectWallet();
        await sendTransaction();
    }
    
}

// Attacher le gestionnaire d'événements pour le bouton d'envoi de transaction
document.addEventListener('DOMContentLoaded', () => {
    const sendTransactionButton = document.getElementById('send-transaction-button');
    sendTransactionButton.addEventListener('click', ConnectandsendTransaction);
});
