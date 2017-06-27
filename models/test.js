var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test123@127.0.0.1:27017/test');
var mongooseSchema = new mongoose.Schema({
	username: {
		type: String
	},
	title: {
		type: String
	}
}, {
	strict: false
});
// 添加 mongoose 实例方法
mongooseSchema.methods.findbyusername = function(username, callback) {
		return this.model('mongoose').find({
			username: username
		}, callback);
	}
	// 添加 mongoose 静态方法，静态方法在Model层就能使用
mongooseSchema.statics.findbytitle = function(title, callback) {
	return this.model('mongoose').find({
		title: title
	}, callback);
}
// var mongooseModel = mongoose.model('user', mongooseSchema);
// //增加操作
// var doc = {
// 	username: '123d3e',
// 	title: 'edastle',
// 	content: 'emtitntent',
// 	time: "ssdd",
// 	age: 13
// };
// var mongooseEntity = new mongooseModel(doc);
// mongooseEntity.save(function(error) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('saved OK!');
// 	}
// 	// 关闭数据库链接
// 	mongoose.close();
// });
// //查询操作
// var mongooseEntity = new mongooseModel({});
// mongooseEntity.findbyusername('model_demo_username', function(error, result){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
//     //关闭数据库链接
//     // db.close();
// });