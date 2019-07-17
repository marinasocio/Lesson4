// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

function isParent(parent, child) {
	return parent.contains(child);
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let links = document.querySelectorAll('a');
for (let index = 0, max = links.length; index < max; index++) {
	if (links[index].closest('ul')) {
	} else {
		console.log(links[index]);
	}
}

// 3. Найти элемент, который находится перед и после списка ul

let elem = document.querySelector('ul');
let prev = elem.previousElementSibling;
console.log(prev);
let next = elem.nextElementSibling;
console.log(next);

// 6.Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:

const map = [ '_id', 'name', 'isActive', 'balance' ];
const users = [
	{
		_id: '5d220b10e8265cc978e2586b',
		isActive: true,
		balance: 2853.33,
		age: 20,
		name: 'Buckner Osborne',
		gender: 'male',
		company: 'EMPIRICA',
		email: 'bucknerosborne@empirica.com',
		phone: '+1 (850) 411-2997',
		registered: '2018-08-13T04:28:45 -03:00',
		nestedField: { total: 300 }
	},
	{
		_id: '5d220b10144ef972f6c2b332',
		isActive: true,
		balance: 1464.63,
		age: 38,
		name: 'Rosalie Smith',
		gender: 'female',
		company: 'KATAKANA',
		email: 'rosaliesmith@katakana.com',
		phone: '+1 (943) 463-2496',
		registered: '2016-12-09T05:15:34 -02:00',
		nestedField: { total: 400 }
	},
	{
		_id: '5d220b1083a0494655cdecf6',
		isActive: false,
		balance: 2823.39,
		age: 40,
		name: 'Estrada Davenport',
		gender: 'male',
		company: 'EBIDCO',
		email: 'estradadavenport@ebidco.com',
		phone: '+1 (890) 461-2088',
		registered: '2016-03-04T03:36:38 -02:00',
		nestedField: { total: 200 }
	}
];

let countUsers = users.length;

//создаем таблицу и оформляем её

let table = document.createElement('table');
// table.style.borderBottom = '1px solid gray';

//создаем єлементы таблицы

let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
let total = document.createElement('total');

//задаем названия столбцов

tr.innerHTML = '<td>#</td><td>Name</td><td>Email</td><td>Balance</td>';
tbody.appendChild(tr);

//создаём массив ключей для перебора

let items = [ '#', 'name', 'email', 'balance' ];

//собсьвенно заливание в таблицу данных

for (let i = 0; i < countUsers; i++) {
	let tr = document.createElement('tr');

	for (let j = 0; j < 4; j++) {
		let td = document.createElement('td');

		if (j === 0) {
			let item = i + 1;
			td.innerHTML = item;
		} else {
			item = users[i][items[j]];
			td.innerHTML = item;
		}

		tr.appendChild(td);
	}

	tbody.appendChild(tr);
}

//добавляем сумму всех балансов с помощью ф-ции sum()

function sum(obj) {
	let rez = 0;

	for (let k = 0; k < countUsers; k++) {
		rez += obj[k]['balance'];
	}

	return rez;
}
let summa = sum(users);
total.innerHTML = `<div>Total balance: ${summa} </div>`;

//добавляем всё в таблицу

table.appendChild(tbody);
document.querySelector('.table-users').appendChild(table);
document.querySelector('.table-users').appendChild(total).style.textAlign = 'right';
table.classList.add('table');

// Задачи на События

// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert(this.getAttribute('data-text'));
});

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

// let btn1 = document.querySelector('button');
// btn1.addEventListener('click', function () { this.setAttribute });

document.body.onclick = (e) => (document.querySelector('#tag').textContent = 'Tag: ' + e.target.tagName);
