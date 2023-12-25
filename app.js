const input=document.querySelector('input')
const root=document.querySelector('#root')

const foods=[
    {name:'Cake', ingr1:'Milk', ingr2:'chocolate'}, 
    {name:'Soup', ingr1:'Broccoli', ingr2:'Shpinat',  ingr3:'Carrot'}, 
    {name:'Panini', ingr1:'Bread', ingr2:'Chicken', ingr3:'Sour cream',  ingrr4:'Shpinat'}, 
    {name:'Smoothie', ingr1:'Milk', ingr2:'Apricot',  ingr3:'Banana',  ingr4:'Cherry'},
    { name: 'Спагетти Болоньезе',
    ingr1:'Спагетти',ingr2: 'Фарш говяжий', ingr3:'Лук', ingr4:'Чеснок', ingr5:'Томаты', ingr6:'Томатный соус', ingr7:'Специи'
  },
  {
    name: 'Цезарь с курицей',
    ingr1:'Куриное филе', ingr2:'Салат Романо', ingr3:'Хлебные кубики', ingr4:'Пармезан', ingr5:'Соус Цезарь', ingr6:'Перчик', ingr7:'Лимон'
  },
  { name: 'Греческий салат',
    ingr1:'Помидоры',ingr2: 'Огурцы',ingr3: 'Фета', ingr4:'Маслины', ingr5:'Лук', ingr6:'Оливковое масло', ingr7:'Укроп'
  },
  {
    name: 'Суши ролл "Филадельфия"',
    ingr1:'Лосось', ingr2:'Авокадо', ingr3:'Сливочный сыр', ingr4:'Водоросли нори', ingr5:'Рис', ingr6:'Соевый соус', ingr7:'Васаби'
  },
{
    name: 'Рататуй',
    ingr1:'Баклажаны', ingr2:'Кабачки',ingr3:'Помидоры' , ingr4:'Лук', ingr5:'Чеснок', ingr6:'Томатный соус', ingr7:'Тимьян'
  },
  {
    name: 'Филе миньон',
    ingr1:'Говяжье филе',ingr2: 'Сливочное масло', ingr3:'Розмарин', ingr4:'Чеснок', ingr5:'Соль', ingr6:'Перец'
  },
  {
    name: 'Суп-гаспачо',
    ingr1:'Помидоры', ingr2:'Перец', ingr3:'Огурцы', ingr4:'Лук', ingr5:'Чеснок', ingr6:'Оливковое масло', ingr7:'Уксус', ingr8:'Хлебные крутончики'
  },
  {
    name: 'Пельмени',
    ingr1:'Фарш мясной',ingr2: 'Тесто для пельменей', ingr3:'Лук', ingr4:'Перец', ingr5:'Соль', ingr6:'Зелень'
  },
  {
    name: 'Чизкейк Нью-Йорк',
    ingr1:'Творожный сыр',ingr2: 'Сахар', ingr3:'Яйца', ingr4:'Сметана', ingr5:'Мука', ingr6:'Ваниль', ingr7:'Лимонный сок'
  },
 {
    name: 'Паста Карбонара',
    ingr1:'Спагетти', ingr2:'Гуанчиале (итальянское бекон)', ingr3:'Яйца', ingr4:'Пармезан', ingr5:'Соль', ingr6:'Перец'
  },
  {
    name: 'Тайский суп Том Ям',
    ingr1:'Креветки', ingr2:'Грибы шиитаке', ingr3:'Лемонграсс', ingr4:'Лайм',ingr5:'Кокосовое молоко', ingr6:'Чили', ingr7:'Кориандр'
  },
  {
    name: 'Карри с курицей',
    ingr1:'Куриное филе',ingr2: 'Карри-паста', ingr3:'Кокосовое молоко', ingr4:'Картошка', ingr5:'Морковь', ingr6:'Лук', ingr7:'Чеснок'
  },
  {
    name: 'Осетинский пирог с мясом',
    ingr1:'Тесто', ingr2:'Фарш мясной', ingr3:'Лук', ingr4:'Соль', ingr5:'Перец', ingr6:'Вода'
  },
  {
    name: 'Салат Нисуаз',
    ingr1:'Тунец консервированный', ingr2:'Яйца', ingr3:'Оливки', ingr4:'Помидоры', ingr5:'Картошка', ingr6:'Салат Айсберг', ingr7:'Майонез'
  },
 {
    name: 'Паэлья',
    ingr1:'Рис',ingr2: 'Креветки', ingr3:'Мидии', ingr4:'Курица',ingr5: 'Колбаса чоризо', ingr6:'Помидоры', ingr7:'Петрушка'
  },
  {
    name: 'Лапша рамен с курицей',
    ingr1:'Лапша рамен', ingr2:'Куриное филе', ingr3:'Бульон', ingr4:'Имбирь', ingr5:'Чеснок', ingr6:'Лук', ingr7:'Соевый соус'
  },
  {
    name: 'Картошка по-деревенски',
    ingr1:'Картошка',ingr2: 'Разрыхлитель теста', ingr3:'Паприка', ingr4:'Чеснок порошок', ingr5:'Соль', ingr6:'Розмарин'
  },
  {
    name: 'Сырники',
    ingr1:'Творог',ingr2: 'Яйцо', ingr3:'Сахар', ingr4:'Соль', ingr5:'Мука', ingr6:'Сода', ingr7:'Масло растительное'
  },
  {
    name: 'Фриттата с овощами',
    ingr1:'Яйца', ingr2:'Брокколи', ingr3:'Помидоры', ingr4:'Спаржа', ingr5:'Сыр пармезан', ingr6:'Лук', ingr7:'Оливковое масло'
  },
 {
    name: 'Зеленый смузи',
    ingr1:'Шпинат',ingr2: 'Банан', ingr3:'Яблоко', ingr4:'Лимон', ingr5:'Огурец', ingr6:'Мед', ingr7:'Вода'
  },
  {
    name: 'Фруктовый экспресс',
    ingr1:'Ананас',ingr2: 'Манго',ingr3: 'Киви', ingr4:'Персик', ingr5:'Апельсиновый сок', ingr6:'Мед'
  },
  {
    name: 'Берри Бласт',
    ingr1:'Клубника',ingr2: 'Голубика',ingr3:'Малина', ingr4:'Йогурт', ingr5:'Мед', ingr6:'Лед'
  },
  {
    name: 'Энергетический бустер',
    ingr1:'Банан', ingr2:'Авокадо', ingr3:'Шпинат', ingr4:'Миндальное молоко', ingr5:'Мед', ingr6:'Чиа-семена'
  },
  {
    name: 'Кокосовый рай',
    ingr1:'Кокосовое молоко',ingr2: 'Ананас', ingr3:'Банан', ingr4:'Манго', ingr5:'Кокосовая стружка', ingr6:'Мед'
  },   
]


console.log(foods);





function showFoods(massive){
  root.innerHTML=''
  for(const food of massive){
      root.innerHTML+=`
      <div class="card" style="width: 18rem;">
      <div class="card" style="display: flex">
          <h2 class="name">${food.name}</h2>
          <p class="card-text">${food.ingr1}</p>
          <p class="card-text">${food.ingr2}</p>
          <p class="card-text">${food.ingr3||''}</p>
          <p class="card-text">${food.ingr4||''}</p>
          <p class="card-text">${food.ingr5||''}</p>
          <p class="card-text">${food.ingr6||''}</p>
          <p class="card-text">${food.ingr7||''}</p>
     </div>
   </div>
   `
      
  }
  
}

console.log(foods);




input.onchange=()=>{
  console.log(input.value);
  const arr=foods.filter(el=>el.name.toLowerCase()===input.value.toLowerCase())
  console.log(arr);
  if(arr.length>0){
    showFoods(arr)
  } else {
    root.innerHTML=`<h1>Sorry, we do not have ${input.value}</h1>`
  }
  input.value=''
}

