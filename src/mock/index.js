import Mock from "mockjs"
let newsinfo = Mock.mock({
    "data|10": [
        {
            "id|+1": 1,
            "title": "@ctitle(10,18)",
            "time": "@date",
            "image": "@image",
            "name": "@cname",
            "password|6-12": "string",
            "price|10-200": 20,
        }
    ]
})
Mock.mock("/newsList", newsinfo.data)


const list = Mock.mock({
    "data|3":[
        {
            "id|+1":1,
            "title":"@ctitle",
        }
    ]
})
//访问地址,访问数据
Mock.mock("/news/list",list.data)
//添加
Mock.mock("/news/add","post",(option)=>{
    const obj = JSON.parse(option.body);
    obj.id = list.data[list.data.length-1].id+1
    list.data.push(obj)
    console.log(option);
    return{
        msg:"添加成功",
        state:"200"
    }
})