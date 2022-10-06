function maxItemAssociation(arr) {
  const ascArr = []; // Массив итоговых данных

  // бежим по входному массиву arr
  for (const ord of arr) {  // для каждого вложенного массива во входном массиве

      if (!ascArr.length) {          // если массив итоговых данных пуст (первый обход)
          ascArr.push(new Set(ord)); //   запишем в него первый набор, уникальный
      } else {
          let included = false;      // флаг того, что массив итоговых данных не требует добавление

          for (const cArr of ascArr) {  // для каждый элемента в итоговом массиве
            //console.log(cArr);

              for (const num of ord) {  // перебираем значения 
                  if (cArr.has(num)) {  //   если значение есть в итоговом массиве
                      included = true;  //   поднимаем флаг

                      ord.forEach(num => {
                          cArr.add(num);    // и добавляем все элементы того массива
                      });

                      break;
                  }
              }
          }

          if (!included) {               // если массив итоговых данных пуст (первый обход)
              ascArr.push(new Set(ord)); //   запишем в него уникальный набор
          }
      }
  }
  
  const sortArr = ascArr.map(num => [...num].sort());  // Превращаем набор в отсортированный массив

  return sortArr[0];
}

testMax = maxItemAssociation( [["q", "w", 'a'],["a", "b"],["a", "c"],["q", "e"],["q", "r"]]);

console.log(testMax);