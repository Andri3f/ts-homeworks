"use strict";
// 5. Система кешування даних (Cache Manager) 💾
// Інтерфейс: ICacheEntry – визначає структуру елемента, що зберігається в кеші (value: any, expiryDate: Date).
// Клас: CacheManager – має методи get(key: string): ICacheEntry | undefined та set(key: string, value: any, ttl: number).
class CacheManager {
    set(key, value, ttl) {
        const expiryDate = new Date(Date.now() + ttl * 1000); // вирішив нехай буде в секундах
        const cacheData = { value, expiryDate };
        localStorage.setItem(key, JSON.stringify(cacheData));
    }
    get(key) {
        const cacheData = localStorage.getItem(key);
        if (!cacheData)
            return undefined;
        const cacheEntry = JSON.parse(cacheData);
        if (new Date(cacheEntry.expiryDate) < new Date()) {
            localStorage.removeItem(key);
            return undefined;
        }
        return cacheEntry;
    }
}
const cacheManager = new CacheManager();
cacheManager.set('user', { name: 'John', age: 30 }, 10);
console.log(cacheManager.get('user'));
setTimeout(() => {
    console.log(cacheManager.get('user'));
}, 9000);
setTimeout(() => {
    console.log(cacheManager.get('user'));
}, 11000);
