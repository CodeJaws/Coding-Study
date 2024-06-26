# 시간복잡도

- 효율적인 방법을 고민하는 것 = 시간 복잡도를 고민하는 것

## 시간 복잡도란?

- 알고리즘 로직을 구현할 때, 시간 복잡도를 고려한다는 것 = `입력 값의 변호에 따라 연산을 실행할 때, 연산 횟수에 비해 시간이 얼만큼 걸리는가?`
- 효율적인 알고리즘을 구현하는 것 = 입력 값이 커짐에 따라 증가하는 최소화한 알고리즘 구성
- 시간 복잡도는 주로 `빅-오 표기법 (Big-O)` 사용

## Big-O 표기법 종류

1. O(1)
2. O(n)
3. O(log n)
4. O(n2)
5. O(2n)

---

### O(1)

- 일정한 복잡도
- 입력값이 증가하더라도 시간이 늘어나지 않음

```javascript
function O_1(arr, index) {
  return arr[index];
}
let arr = [1, 2, 3, 4, 5];
let index = 1;
let result = O_1_algorithm(arr, index);
console.log(result); // 2
```

- 해당 코드에서 입력값이 아무리 커져도 즉시 출력값을 얻을 수 있다.

<br />

### O(n)

- 선형 복잡도
- 입력값이 증가함에 따라 시간 또한 같은 비율로 증가
- ex) 입력값이 1일때 1초가 걸리고, 입력값이 100일때 100초가 걸리면 해당 알고리즘은 O(n)의 시간 복잡도를 가진다.

```javascript
function O_n(n) {
  for (let i = 0; i < n; i++) {}
}
function O_n2(n) {
  for (let i = 0; i < 2n; i++) {}
}
```

- 어찌 보면 둘이 Big-O 표현을 다르게 해야겠다고 생각할 수 있다.
- 1번 경우는 `O(n)`, 2번 경우는 `O(2n)`
- 하지만 입력값이 커질 수록 계수 (n 앞의 수)는 `영향력이 없어지기 때문에` 같은 비율로 증가하고 있으면 O(n)으로 표기한다.
- `더하기, 빼기, 곱하기 다 포함`

<br />

### O(log n)

- 로그 복잡도
- Big-O 표기법 중 O(1) 다음으로 빠른 시간 복잡도
- BST (Binary Search Tree)는 노드를 이동할 때마다 경우의 수가 절반으로 감소
- 이해하기 쉬운 게임으로 비유해 보자면 up & down을 예로 들 수 있다.
  1. 1~100 중 하나의 숫자를 플레이어1이 고른다. (30을 골랐다고 가정한다.)
  2. 50(가운데) 숫자를 제시하면 50보다 작으므로 down을 외친다.
  3. 1~50중의 하나의 숫자이므로 또다시 경우의 수를 절반으로 줄이기 위해 25를 제시한다.
  4. 25보다 크므로 up을 외친다.
  5. 경우의 수를 계속 절반으로 줄여나가며 정답을 찾는다.

<br />

### O(n2)

- 2차 복잡도
- 입력값이 증가함에 따라 시간이 n의 제곱수의 비율로 증가

```javascript
function O_n_2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++>) {

    }
  }
}

function O_n_2_2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n ; k++)
    }
  }
}
```

- 2n, 5n 을 모두 O(n)이라고 표현하는 것처럼, `n3과 n5 도 모두 O(n2)`로 표기
- n이 커지면 커질수록 지수가 주는 영향력이 점점 퇴색되기 때문에

<br />

### O(2n)

- 기하급수적 복잡도
- Big-O 표기법 중 가장 느린 시간 복잡도
- 구현 알고리즘의 시간 복잡도가 O(2n)이면 다른 방법으로 접근하는 것이 좋다.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

- 재귀로 표현한 피보나치 수열이 O(2n)의 대표적인 시간 복잡도
