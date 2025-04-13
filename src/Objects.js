/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    const updatedData = { ...data };
    if (updatedData.gender === 'female') {
        delete updatedData.age;
    } else if (updatedData.gender === 'male') {
        if (!('income' in updatedData)) {
            updatedData.income = 100000;
        }
    }
    return updatedData;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys3 = Object.keys(obj3);
    const allKeys = [...keys1, ...keys2, ...keys3];
    const uniqueKeys = [...new Set(allKeys)];
    return uniqueKeys.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        const clone = JSON.parse(JSON.stringify(obj));
        clone.id = i;
        clones.push(clone);
    }

    return clones;
}
