let userName = prompt("Введите ваше имя, предприниматель:", "Святослав");

if (userName && userName.trim() !== "") {
    alert("Приветствую, " + userName.trim() + "! Добро пожаловать на аналитический дашборд.");
} else {
    alert("Приветствую, Гость! Добро пожаловать на аналитический дашборд.");
}

let dailyRevenues = [12000, 1000, 1500, 1000, 2500, 1000, 1000];

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

function analyzeStartup(revenueArr) {
    let totalRevenue = calculateSum(revenueArr);
    let maxRevenue = findMax(revenueArr);
    let averageRevenue = totalRevenue / revenueArr.length;

    let highRevenueDays = filterRevenue(revenueArr, 10000);
    let highDaysCount = highRevenueDays.length;

    let lowRevenueCount = 0;
    for (let i = 0; i < revenueArr.length; i++) {
        if (revenueArr[i] <= 3000) {
            lowRevenueCount++;
        }
    }
    
    let lowRevenueShare = (lowRevenueCount / revenueArr.length) * 100;

    alert("Общая выручка – " + totalRevenue + " ₽, в " + highDaysCount + " днях показатели были высокими.");

    console.log("Количество дней с низкой выручкой: " + lowRevenueCount);
    console.log("Доля дней с низкой выручкой: " + lowRevenueShare.toFixed(1) + "%");
    console.log("Максимальная дневная выручка: " + maxRevenue + " ₽");
    console.log("Средняя дневная выручка: " + averageRevenue.toFixed(2) + " ₽");

    if (averageRevenue < 5000) {
        console.log("Стоит проанализировать причины низкой выручки");
    } else {
        console.log("Показатели в норме, средняя выручка выше целевого порога.");
    }
}

analyzeStartup(dailyRevenues);
