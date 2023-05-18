let a = [ { test: 'hello' } ];
let b = a;

a.push({ test: 'test' });

// b も変更されている
console.log(b);

// --------

// b を a のコピーに変更する
b = [...a];

a.push({ test: 'test2' });

// a の変更は、b には反映されない
console.log('a:', a);
console.log('b:', b);

// --------

// 変更前
console.log(a[0].test);
console.log(b[0].test);

a[0].test = 'HELLO';

// 変更後: b も変更されている
console.log(a[0].test);
console.log(b[0].test);
