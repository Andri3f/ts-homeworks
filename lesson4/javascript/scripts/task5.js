"use strict";
// Singleton через статичне поле. Використовується для створення єдиного доступного об’єкта (наприклад, масиву для зберження елементів +  відповідні методи додавнаня, вилучення, фільтрації).
// Автоматичне формування ID. Статичне поле генерує унікальні ідентифікатори (спочатку 0, потім інкремент).
class AppStorageManager {
    static add(data) {
        const id = AppStorageManager.idCount++;
        AppStorageManager.dataArray.push(Object.assign({ id }, data));
    }
    static remove(id) {
        AppStorageManager.dataArray = AppStorageManager.dataArray.filter(item => item.id !== id);
    }
    static filter(id) {
        return AppStorageManager.dataArray.filter(item => item.id !== id);
    }
    static getDataArray() {
        return AppStorageManager.dataArray;
    }
}
AppStorageManager.dataArray = [];
AppStorageManager.idCount = 0;
AppStorageManager.add({ name: 'Sergey', age: 30 });
AppStorageManager.add({ name: 'Olga', age: 25 });
AppStorageManager.add({ name: 'Ivan', age: 35 });
AppStorageManager.add({ name: 'Vasya', age: 30 });
console.log(AppStorageManager.getDataArray());
AppStorageManager.remove(1);
console.log(AppStorageManager.getDataArray());
console.log('filter', AppStorageManager.filter(2));
