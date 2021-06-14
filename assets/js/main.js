/***ИМИТАЦИЯ БЭКЕНДА***/
const tariffPlans = [
	{
		id: 1,
		title: "License Plan #1",
		coast: 13,
	},
	{
		id: 2,
		title: "License Plan #2",
		coast: 22,
	},
	{
		id: 3,
		title: "License Plan #3",
		coast: 34,
	},
	{
		id: 5,
		title: "License Plan #5",
		coast: 37,
	},
];

// Объявление переменных
let plans = document.querySelectorAll(".order__plan");
let selectedCount = document.querySelectorAll(".order__select-option");
let totalSumContainer = document.querySelector(".order__total-summary");
let selectedPlanContainer = document.querySelector(".order__total-plan");

// Получаем выбранный тарифный план
function getPlan() {
	let tariffPlan = {};
	plans.forEach((item) => {
		if (item.firstElementChild.checked) {
			planId = item.firstElementChild.id;
			tariffPlan = tariffPlans.find((plan) => plan.id == planId);
		}
	});
	return tariffPlan;
}

// Получаем значение выбранного колчиеста товаров
function getSelectedCount() {
	let totalCount;
	selectedCount.forEach((item) => {
		if (item.selected) {
			totalCount = item.value;
		}
	});

	return totalCount;
}

// Считаем и выводим итоговую сумму
function calculateTotal(tariffPlan, selectedCount) {
	let planPrice = tariffPlan.coast;
	let totalSum = planPrice * selectedCount;
	showSummary(totalSum);
}

// Выводим итоговую сумму
function showSummary(totalSum) {
	totalSumContainer.innerText = `$${totalSum}`;
}

// Выводим выбранный тариф
function showSeletedPlan(tariffPlan) {
	selectedPlanContainer.innerText = `#${tariffPlan.id}`;
}

//Триггеры рассчетов и вывода информации
window.addEventListener("DOMContentLoaded", () => {
	plans.forEach((item) => {
		item.addEventListener("click", () => {
			calculateTotal(getPlan(), getSelectedCount());
			showSeletedPlan(getPlan());
		});
	});

	selectedCount.forEach((item) => {
		item.addEventListener("click", () => {
			calculateTotal(getPlan(), getSelectedCount());
			showSeletedPlan(getPlan());
		});
	});

	calculateTotal(getPlan(), getSelectedCount());
	showSeletedPlan(getPlan());
});
