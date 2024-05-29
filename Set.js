function solution(A, D) {
    let balance = 0;
    const monthlyTransactions = {};

    // Group transactions by month
    for (let i = 0; i < A.length; i++) {
        const date = D[i].slice(0, 7); // Extract "YYYY-MM"
        if (!monthlyTransactions[date]) {
            monthlyTransactions[date] = [];
        }
        monthlyTransactions[date].push(A[i]);
        balance += A[i];
    }

    // Calculate monthly fees
    for (const month in monthlyTransactions) {
        const transactions = monthlyTransactions[month];
        let cardPaymentsCount = 0;
        let cardPaymentsSum = 0;
        for (const amount of transactions) {
            if (amount < 0) { // Card payment
                cardPaymentsCount++;
                cardPaymentsSum += amount;
            }
        }
        if (cardPaymentsCount < 3 || cardPaymentsSum > -100) {
            balance -= 5; // Deduct monthly fee
        }
    }

    return balance;
}

// Example usage:
console.log(solution([100, 100, 100, -101], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"])); // Expected output: 230
