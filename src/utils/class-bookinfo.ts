class BookShoop {
	dataKey: string;
	primaryKey: string;
	constructor(dataKey: string, primaryKey: string) {
		this.dataKey = dataKey;
		this.primaryKey = primaryKey;
	}
	// 读取数据
	readBook(): any {
		const localList: string | null = localStorage.getItem(this.dataKey);
		let arrList = [];
		if (localList != null) {
			arrList = JSON.parse(localList);
		}
		return arrList;
	}
	// 保存数据
	saveBook(arrayData: Array<object>): void {
		localStorage.setItem(this.dataKey, JSON.stringify(arrayData));
	}
	// 新增数据
	addBook(name: string): number {
		const arrList: any = this.readBook();
		const id: number = arrList.length > 0 ? arrList[arrList.length - 1][this.primaryKey] + 1 : 1;
		const obj: object = {
			name: name,
			id: id,
		};
		arrList.push(obj);
		this.saveBook(arrList);
		return id;
	}
	// 删除数据
	removeBook(id: number | string): boolean {
		const arr: any = this.readBook();
		const index = arr.findIndex((ele: any) => {
			return ele[this.primaryKey] == id;
		});
		if (index !== -1) {
			// const newArr: any = arr.slice(index);
			arr.splice(index, 1);
			this.saveBook(arr);
			return true;
		} else {
			return false;
		}
	}
}

export default BookShoop;
