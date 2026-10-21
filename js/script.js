let userName = prompt("Введите ваше имя, предприниматель:", "Святослав");
if (userName) {
    alert("Приветствую, " + userName + "! Добро пожаловать на аналитический дашборд стартапа.");
}

let dailyRevenues = [12500, 2800, 14200, 3000, 9500, 1900, 18500];

console.log("=== ДАННЫЕ СТАРТАПА ===");
console.log("Дневная выручка по дням:", dailyRevenues);

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterRevenue(arr, threshold) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

let totalRevenue = calculateSum(dailyRevenues);
let maxRevenue = findMax(dailyRevenues);

let highRevenueDays = filterRevenue(dailyRevenues, 10000);
let highDaysCount = highRevenueDays.length;

let lowRevenueCount = 0;
for (let i = 0; i < dailyRevenues.length; i++) {
    if (dailyRevenues[i] <= 3000) {
        lowRevenueCount++;
    }
}
let lowRevenueShare = (lowRevenueCount / dailyRevenues.length) * 100;

let averageRevenue = totalRevenue / dailyRevenues.length;

alert("Общая выручка – " + totalRevenue + " ₽, в " + highDaysCount + " днях показатели были высокими.");

console.log("Количество дней с низкой выручкой (<= 3000 ₽): " + lowRevenueCount);
console.log("Доля дней с низкой выручкой: " + lowRevenueShare.toFixed(1) + "% от общего числа дней.");

if (averageRevenue < 5000) {
    console.warn("Стоит проанализировать причины низкой выручки (Средняя выручка: " + averageRevenue.toFixed(2) + " ₽).");
} else {
    console.log("Средняя выручка составляет " + averageRevenue.toFixed(2) + " ₽. Бизнес-модель стабильна!");
}

console.log("Максимальная дневная выручка: " + maxRevenue + " ₽");