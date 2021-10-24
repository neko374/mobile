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