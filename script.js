function calculateShares() {
    const totalExpenses = parseFloat(document.getElementById("totalExpenses").value);
    const person1Income = parseFloat(document.getElementById("person1Income").value);
    const person2Income = parseFloat(document.getElementById("person2Income").value);

    const totalIncome = person1Income + person2Income;

    if (totalIncome === 0) {
        alert("Inkomsterna kan inte vara noll.");
        return;
    }

    const person1Share = (person1Income / totalIncome) * totalExpenses;
    const person2Share = (person2Income / totalIncome) * totalExpenses;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Person 1 betalar: ${person1Share.toFixed(2)} kr (${((person1Share / totalExpenses) * 100).toFixed(2)}%)</p>
        <p>Person 2 betalar: ${person2Share.toFixed(2)} kr (${((person2Share / totalExpenses) * 100).toFixed(2)}%)</p>
    `;
}
