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
            "username":"number",
            "username1":"string",
            "psd": "string",
            "psdone": "string",
            "phcode":"string",
            "code": "string",
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

let newsinfo1=Mock.mock({
    "data|4":[
        {
            "starts|1-5":1,
            "time":"@date",
            "comment":"@ctitle",
            "descp":"@ctitle",
            "name":"@ctitle",
            "price|10-100":30,
            "btn1|0-3":1,
            "btn2|0-3":2
        }
    ]
})
Mock.mock("/comment/list",newsinfo1.data)
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
// 注册
Mock.mock("register/upd","post",(option)=>{
        const reg = JSON.parse(option.body);
        reg.id = newsinfo.data[newsinfo.data.length-1].id+1
        newsinfo.data.push(reg)
        return{
            msg:"注册成功",
            state:"200",
            data:newsinfo.data
        }
})