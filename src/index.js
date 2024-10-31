// src/index.js

// 計算クラス
class Calculator {
    constructor() {
        this.result = 0;
    }

    // 足し算
    add(a, b) {
        return a + b;
    }

    // 足し算
    add2(c, d) {
        return c + d;
    }
    
    // 引き算
    subtract(a, b) {
        return a - b;
    }

    // 掛け算
    multiply(a, b) {
        return a * b;
    }

    // 割り算
    divide(a, b) {
        if (b === 0) {
            throw new Error("ゼロで割ることはできません");
        }
        return a / b;
    }

    // べき乗
    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    // 絶対値
    absolute(value) {
        return Math.abs(value);
    }

    // 平方根
    squareRoot(value) {
        if (value < 0) {
            throw new Error("負の数の平方根は計算できません");
        }
        return Math.sqrt(value);
    }

    // 対数 (自然対数)
    logarithm(value) {
        if (value <= 0) {
            throw new Error("対数は正の数でのみ計算できます");
        }
        return Math.log(value);
    }

    // 累乗根 (nのm乗根)
    root(value, degree) {
        if (degree <= 0) {
            throw new Error("根の次数は正の数である必要があります");
        }
        return Math.pow(value, 1 / degree);
    }

    // 合計の計算
    sum(...values) {
        return values.reduce((acc, curr) => acc + curr, 0);
    }

    // 平均の計算
    average(...values) {
        if (values.length === 0) {
            throw new Error("値が必要です");
        }
        return this.sum(...values) / values.length;
    }

    // リセット
    reset() {
        this.result = 0;
    }
}

// インスタンスを作成してエクスポート
module.exports = Calculator;
