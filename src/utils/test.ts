const test = {
	a: '123F',
};
console.log('test');
const arr1: Array<number> = [1, 2, 3]; //Array<类型>
const arr2: string[] = ['a', 'b']; //类型[]
console.log(arr1, arr2);

const arr3: [string, number, boolean] = ['a', 1, true]; //元组[类型1，类型2，类型3]，数量必须一致
console.log(arr3);

enum Gender1 { // 声明枚举值
	a = 1,
	b = 2,
}
const numA: Gender1 = Gender1.a; //枚举值赋值
console.log(numA);

function noReturn(): void {
	//void，没有类型，用于无返回值函数
	console.log('我没return,我需要void');
}
noReturn();

let lianhe: number | string;
lianhe = 11;
console.log(lianhe);
lianhe = 'aa';
console.log(lianhe);

function funcOne(): string {
	return '返回字符串类型';
}
console.log(funcOne());
function funcTwo(dataOne: number, dataTwo: any): any {
	return dataOne + ',' + dataTwo;
}
console.log(funcTwo(2, '形参传递，返回联合'));

function funcThr(numA: number, numB = 1, ...numC: number[]) {
	//numA 为必填参数 numB为默认参数(可替代可选参数?:) ...numC 为剩余参数
	let all = 0;
	for (const num of numC) {
		all += num;
	}
	return all + numA + numB;
}
console.log(funcThr(1)); //2
console.log(funcThr(1, 2)); //3
console.log(funcThr(1, 2, 3, 4)); //10

//创建类
class City {
	// 成员变量，需声明时初始化/在构造函数中赋值
	cName: string;
	cLevel: number;
	// 构造函数
	constructor(cName: string, cLevel: number) {
		this.cName = cName;
		this.cLevel = cLevel;
	}
	// 成员方法
	about() {
		console.log(`欢迎来到${this.cName},这里幸福指数为${this.cLevel}`);
	}
}
const c1 = new City('上海', 3);
console.log(c1.cName);
c1.about();

// 组件使用
// const loading = ElLoading.service({
// 	text: 'LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading',
// 	background: 'rgba(0, 0, 0, 0.3)',
// 	spinner: 'el-icon-loading',
// 	fullscreen: true,
// });
// setTimeout(() => {
// 	loading.close();
// }, 6000);
export default test;
