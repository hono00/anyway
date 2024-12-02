// app.js
// Le reste de votre code...
const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://hono00.github.io/anyway/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

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
        console.log(result);
    } catch (error) {
        console.error("Transaction échouée :", error);
    }
}

// Appeler la fonction pour envoyer la transaction
sendTransaction();
