import { IKeyCollection } from "../Interfaces/IKeyCollection";

export default class Dictionary<T> implements IKeyCollection<T> {
    private items: { [index: string]: T } = {};
    private count: number = 0;
  
    add(key: string, value: T) {
      if (!this.items.hasOwnProperty(key)) {
        this.count++;
      }
  
      this.items[key] = value;
    }
  
    containsKey(key: string): boolean {
      return this.items.hasOwnProperty(key);
    }
  
    size(): number {
      return this.count;
    }
  
    getItem(key: string): T {
      return this.items[key];
    }
  
    removeItem(key: string): T {
      let value = this.items[key];
      delete this.items[key];
      this.count--;
      return value;
    }
  
    getKeys(): string[] {
      let keySet: string[] = [];
  
      for (let property in this.items) {
        if (this.items.hasOwnProperty(property)) {
          keySet.push(property);
        }
      }
  
      return keySet;
    }
  
    getValues(): T[] {
      let values: T[] = [];
  
      for (let property in this.items) {
        if (this.items.hasOwnProperty(property)) {
          values.push(this.items[property]);
        }
      }
  
      return values;
    }
  }
/*
https://codetain.com/blog/dictionary-in-typescript/
let personHobbies = new Dictionary<string>();

personHobbies.add('jack', 'swimming');
personHobbies.add('mary', 'singing');
personHobbies.add('tom', 'dancing');

const keys = personHobbies.getKeys(); // will return ['jack', 'mary', 'tom']
const getValues = personHobbies.values(); // will return ['swimming', 'singing', 'dancing']
*/