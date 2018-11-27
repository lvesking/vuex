var express = require('express');
var router = express.Router();
//引入连接数据库
const connection=require('./conn');

connection.connect(() => {
	console.log('已经连接数据库');
})

/* 接收登录请求. */
router.post('/checklogin', (req, res) => {
		//接收用户名的密码
		let {username,password}=req.body;
		const sql=`select * from users where username='${username}' and password='${password}'`;
		
		connection.query(sql,(err,data) => {
			if(err){
				throw err;
			}else{
				res.send(data);
			}
		});
		
});

/*获取用户列表*/
router.get('/getuserlist',(req,res) => {
	var listsql="select * from users";
	//查询用户所有列表返回给前端
	connection.query(listsql,(err,data) => {
		if(err){
				throw err;
			}else{
				res.send(data);
			}
		});
});
		


module.exports = router;
