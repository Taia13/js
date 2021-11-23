//- створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
function createMin(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }

    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }

}

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function createMax(a, b, c) {
    if (a < b && a < c) {
        if (b < c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b < a && b < c) {
        if (a < c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c < a && c < b) {
        if (a < b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }

}

//створити функцію яка повертає найбільше число з масиву
function creatNum(numbers) { /*[22,1,3,44]*/
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

//створити функцію яка повертає найменьше число з масиву
function creatMin(numbers1) {
    let min = numbers1[0];
    for (const number of numbers1) {
        if (number < min) {
            min = number;
        }

    }
    return min;
}

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function creatSum(numbrs) {
    let sum = 0;
    for (const numbr of numbrs) {
        sum += numbr;

    }
    console.log(sum);
    return sum;
}

creatSum([1, 2, 10]);

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageArr(nums) {
    let avg = 0;
    for (const num of nums) {
        avg += num;

    }
    console.log(avg / nums.length);
    return avg / nums.length;

}

averageArr([2, 66, 33, 4, 56]);

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function creatMinMax(nums) {
    let min = nums[0];
    let max = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}

creatMinMax([88, 44, 22, 9, 4, 100]);
//створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function creatRandomnums(nums, size) {
    let numbers = [];
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.round(Math.random() * nums);

    }
    console.log(numbers);
    return numbers;
}

creatRandomnums(100, 15);
//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// в попередньому завданні
// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function creatMas(mas) {
    let mas1 = [];
    for (let i = mas.length - 1; i >= 0; i--) {
        const masElement = mas[i];
        mas1.push(masElement);

    }
    console.log(mas1);
    return mas1;
}

creatMas([1, 2, 3]);