// Задание 3. Использование нетипизированного кода
// Представьте, что вас подключили к проекту, над которым работали другие разработчики. 
// Вы увидели в коде проекта два фрагмента, назначение которых нигде не объяснено. 
// Предположите, какую функцию выполняет каждая часть кода и для каких целей их надо применить.

// Первая часть кода:
{
	function someFunc1(data) {
		return data.reduce(
			(acc, current) => {
				return acc + Number(current.age > 18 && current.isMale)
			}, 
			0
		);
	};
}

// Вторая часть кода:
{
	type Human = {
		name: string,
		age: number,
		gender: 'male' | 'female',
	}

	function someFunc2(data: Human[]): number {
		return data.reduce(
			(acc: number, current: Human) => {
				return acc + Number(current.age > 18 && current.gender === 'male')
			}, 
			0
		);
	};
}

// Ответ:
// someFunc -> получить количество совершенолетних мужчин в массиве. 
// someFunc1 - реализована на чистом JS. Предполагает, но не гарантирует наличие свойства isMale.
// someFunc2 - реализована на TypeScript. Гарантирует наличие свойства gender, которое может принимать одно из двух значений 'male' или 'female'.
// Переименовать в getAdultMalesCount();