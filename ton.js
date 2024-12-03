// Fonction pour envoyer une transaction
async function sendTransaction() {
    const transaction = {
        messages: [
            {
                address: "UQBDe4HJeGDFRS4kAYhl5HZUfUYi1uYAbg6PRVnKZGrwVYHi", // adresse de destination
                amount: "20000000" // Toncoin en nanotons
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

// Attacher les gestionnaires d'événements
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-button');
    const disconnectButton = document.getElementById('disconnect-button');
    const sendTransactionButton = document.getElementById('send-transaction-button');

    connectButton.addEventListener('click', connectToWallet);
    disconnectButton.addEventListener('click', disconnectWallet);
    sendTransactionButton.addEventListener('click', sendTransaction);
});

// Exemple de redirection vers une mini-app Telegram
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://hono00.github.io/anyway/'
};
