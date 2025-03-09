"use strict";
// data:
// initial amount
// annual contribution 
// expected return rate
// duration
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial investment amount must be greater than zero.';
    }
    if (duration <= 0) {
        return 'Duration must be greater than zero.';
    }
    if (expectedReturn <= 0) {
        return 'Expected return must be greater than zero.';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total amount: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total contributions: ${yearEndResults.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResults.totalInterestEarned.toFixed(0)}\n`);
        console.log('------------------------------------------');
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
