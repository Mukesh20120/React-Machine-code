

function ObjectGroupBy<T, K extends keyof any>(
  items: Array<T>,
  callback: (item: T) => K
): Record<K, Array<T>> {
  const result = Object.create(null) as { [key in K]: T[] };
  for (const item of items) {
    const key = callback(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}

/**
 * 1️⃣ Core JavaScript Object Behavior
Understanding the difference between normal objects (with Object.prototype) and null-prototype objects (Object.create(null)).

Why you might prefer null-prototype objects for dynamic key-based maps to avoid issues with inherited properties like toString, hasOwnProperty, etc.

Being aware of subtle pitfalls like accidental key collisions on inherited properties.
 */