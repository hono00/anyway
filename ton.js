// Fonction pour envoyer une transaction
async function sendTransaction() {
    const transaction = {
        messages: [
            {
                address: "UQBDe4HJeGDFRS4kAYhl5HZUfUYi1uYAbg6PRVnKZGrwVYHi", // adresse de destination
                amount: "10000000" // Toncoin en nanotons
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

// Attacher le gestionnaire d'événements pour le bouton d'envoi de transaction
document.addEventListener('DOMContentLoaded', () => {
    const sendTransactionButton = document.getElementById('send-transaction-button');
    sendTransactionButton.addEventListener('click', sendTransaction);
});
