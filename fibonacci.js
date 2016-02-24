function fib(n) {
    var f = [];
    f[0] = 0;
    f[1] = 1;
    for (var i = 2; i <= n - 1; i++) {
        f[i] = f[i - 2] + f[i - 1];
    }
    console.log(f);
}
console.log(fib(100));