// Задание 1. Ошибка в коде
// Разработчики не только пишут код сами, но и работают с готовым кодом коллег. В этом задании необходимо:
// - Найти и исправить ошибку в чужом коде.
// - Написать небольшой сопроводительный текст, в котором вы:
// - объясните причину возникновения ошибок;
// - опишете, как TypeScript помогает их избежать.
// - Если объяснение покажется вам достаточно очевидным — это нормально, так и должно быть. 
// Цель подобного рассуждения — научиться анализировать принципы работы с кодом, 
// так как важно не только уметь писать хороший код, но и понимать, как он работает, 
// зачем и почему стоит выбрать тот или иной способ решения задачи.

const actor: {
	name: string;
	firstName: string;
	country: string;
	city: string;
	hasOskar: boolean;
	filmsCount: number;
	age: number;
	languages: string[];
} = {
	name: 'Michael',
	firstName: 'Ivanov',
	country: 'Russia',
	city: 'Makhachkala',
	hasOskar: false,
	filmsCount: 10,
	// age: '14', 	
	age: 14,		// Исправлен: строка '14' заменена на число 14.
	languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

const howOldWillBeActorAfterTwentyYears = (actor) => {
	return actor.age + 20;
}

console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'

// Ответ:
// Ошибка в 28 строке: ожидается тип 'number', а получает тип 'string'.
// При использовании голого JS, метод howOldWillBeActorAfterTwentyYears вернёт "1420", вместо 34.
// Typescript использует контроль типов, который позволяет избежать подобных ошибок уже на этапе разработки.