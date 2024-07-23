// Задание 5. Алгоритмическая задача
// Что нужно сделать:
// Используя примитивную типизацию с помощью TypeScript, напишите код, который:
// Принимает число.
// Возводит в квадрат все ЦИФРЫ этого числа и конкатенирует их, то есть склеивает обратно в одно число и возвращает его.
// Если число отрицательное — функция должна вернуть его обратно.
// Пример:
// 9119 → 9 1 1 9 → 81 1 1 81 → 811181

// Критерии оценки:
// Принято:
// Функция корректно обрабатывает целые и отрицательные числа.
// Использована типизация примитивов.
// Аргументы и возвращаемое значение функции типизированы.
// На доработку:
// Код не проходит все кейсы.
// В коде не использована типизация.


function squareDigitsAndConcat(number: number): number {
	
	if (number < 0) return number;

	// Преобразовать число в строку, чтобы можно было обрабатывать каждую цифру отдельно
	const numStr = number.toString();

	// Преобразовать каждую цифру, возвести её в квадрат и конкатенировать обратно
	const squaredDigitsStr = numStr.split('').map((digit) => {
		const squaredDigit = parseInt(digit, 10) ** 2;
		return squaredDigit.toString();
	}).join('');

	// Преобразовать обратно в число и вернуть результат
	return parseInt(squaredDigitsStr, 10);
}

// Пример использования
const input = 1234;
const result = squareDigitsAndConcat(input);
console.log(result); // 14916

const negativeInput = -1234;
const negativeResult = squareDigitsAndConcat(negativeInput);
console.log(negativeResult); // -1234