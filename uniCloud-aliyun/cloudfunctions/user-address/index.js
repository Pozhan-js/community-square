'use strict';
const db = uniCloud.database()
const uniID = require('uni-id')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('uni-id-address') // 获取表'uni-id-address'的集合对象
	const collectionArea = db.collection('opendb-city-china') // 获取表'uni-id-address'的集合对象


	let params = event.params || {}
	let payload = {}
	let noCheckAction = ['list', 'delete', 'add', 'update']

	if (noCheckAction.indexOf(event.action) > -1) {
		if (!event.uniIdToken) {
			return {
				code: 403,
				msg: '缺少token'
			}
		}
		payload = await uniID.checkToken(event.uniIdToken)
		if (payload.code && payload.code > 0) {
			return payload
		}
		params.uid = payload.uid
	}

	let res = {}
	const $ = db.command.aggregate
	switch (event.action) {
		case 'list':
			res = await collection.where({
				uid: params.uid
			}).get()
			break;
		case 'add':
			if (params.default) {
				await collection.where({
					uid: params.uid
				}).update({
					default: db.command.set(false)
				})
			}
			res = await collection.add(params)
			break;
		case 'get':
			res = await collection.doc(params.id).get()
			break;
		case 'del':
			res = await collection.doc(params.id).remove();
			break;
		case 'update':
			let id = params._id
			delete params._id
			res = await collection.doc(id).update(params)
			break;
		case 'getArea':
			res = await collectionArea.aggregate().match({
					"type": params.type,
					"parent_code": params.code || null
				})
				.group({
					_id: '$first_letter',
					data: $.push({
						name: '$name',
						code: '$code'
					})
				}).sort({
					_id: 1,
				})
				.end()
			break;

	}
	return res // 返回json给客户端
};
