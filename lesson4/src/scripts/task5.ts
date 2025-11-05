// Singleton через статичне поле. Використовується для створення єдиного доступного об’єкта (наприклад, масиву для зберження елементів +  відповідні методи додавнаня, вилучення, фільтрації).
// Автоматичне формування ID. Статичне поле генерує унікальні ідентифікатори (спочатку 0, потім інкремент).

class AppStorageManager {
   
   private static  dataArray : any[] = []
   private static idCount  = 0

    static add (data: Object) :void {
      const id = AppStorageManager.idCount++
      AppStorageManager.dataArray.push({ id, ...data })
   }
   static remove (id: number) :void {
      AppStorageManager.dataArray = AppStorageManager.dataArray.filter(item => item.id !== id)
   }
    static filter (id: number)  { 
      return AppStorageManager.dataArray.filter(item => item.id !== id)
    }
    static getDataArray () {
      return AppStorageManager.dataArray
    }
}
AppStorageManager.add({ name: 'Sergey', age: 30 })
AppStorageManager.add({ name: 'Olga', age: 25 })
AppStorageManager.add({ name: 'Ivan', age: 35 })
AppStorageManager.add({ name: 'Vasya', age: 30 })
console.log(AppStorageManager.getDataArray())
AppStorageManager.remove(1)
console.log(AppStorageManager.getDataArray())
console.log('filter', AppStorageManager.filter(2))