import Mock from "mockjs"
let newsinfo = Mock.mock({
    "data|10": [
        {
            "id|+1": 1,
            "title": "@ctitle(10,18)",
            "time": "@date",
            "image": "@image",
            "name": "@cname"
        }
    ]
})
Mock.mock("/newsList", newsinfo.data)