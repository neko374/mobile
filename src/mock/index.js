import Mock from "mockjs"
let newsinfo = Mock.mock({
    "data|10": [
        {
            "id|+1": 1,
            "title": "@ctitle(10,20)",
            "time": "@date",
            "image": "@image"
        }
    ]
})
Mock.mock("/newsList", newsinfo.data)