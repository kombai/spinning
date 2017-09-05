const storePath = electronRemote.getGlobal("storePath");

export default {

	photoStore: storePath + "/photo-store/",

	storePath: storePath,

	getGUID() {
		var hexcodes = "0123456789abcdef".split("");
		var result = '';
		for (var index = 0; index < 32; index++) {
			var value = Math.floor(Math.random() * 16);
			switch (index) {
			case 8:
				result += '-';
				break;
			case 12:
				value = 4;
				result += '-';
				break;
			case 16:
				value = value & 3 | 8;
				result += '-';
				break;
			case 20:
				result += '-';
				break;
			}
			result += hexcodes[value];
		}
		return result;
	},

	displayValue(value) {
		var result = '';
		switch (String(value)) {
			case "2":
				result = 'Rất lớn';
				break;
			case "1":
				result = 'Lớn';
				break;
			case "0":
				result = 'Bình thường';
				break;
			case "-1":
				result = 'Nhỏ';
				break;
			case "-2":
				result = 'Rất nhỏ';
				break;
			default:
				result = value;
		}
		return result;
	},

	getImagePath(leafValue) {
		return this.photoStore + leafValue;
	}
};
