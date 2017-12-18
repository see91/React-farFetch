let fs = require('fs');
let express = require('express');
let bodyParse = require('body-parser');
let app = express();
//设置跨域
app.use('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    next();
});
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(express.static(__dirname));

/**
 * @param p 需要读取的数据文件路径
 * @param fn   回调函数,返回读取的数据
 */
let read = (p, fn) => {
    fs.readFile(p, 'utf-8', (err, data) => {
        if (err) {
            return {code: 0, err: 'file does not exist!'}
        } else {
            fn(JSON.parse(data))
        }
    })
};

/**
 * 写入文件内容
 * @param p  需要写入文件的路径
 * @param d  需要写入文件的数据
 * @param cb  回调函数
 */
let write = (p, d, cb) => {
    fs.writeFile(p, JSON.stringify(d), cb)
};

/**
 * 造id price数据
 */
/*
function getPrice() {
    let price = '';
    let a = Math.round(Math.random() * (5 - 4) + 4);
    for (var i = 0; i < a; i++) {
        price += Math.round(Math.random() * (9 - 1) + 1);
    }
    return price
}

read('./data/prdList.json', (data) => {
    for (let i = 1; i < data.length; i++) {
        data.forEach((item) => {
            let price = getPrice();
            item.price = parseFloat(price);
        });
        write('./data/prdList.json', data, () => {
            console.log('su');
        })
    }
});

*/


/**
 * 轮播图  返回六张轮播图图片地址
 */
app.get('/swiper', (req, res) => {
    read('./data/swiper.json', (s) => {
        res.send(s)
    });
});

/**
 * 推荐  返回四件推荐商品
 */
app.get('/recommend', (req, res) => {
    read('./data/recommend.json', (s) => {
        let recommend = s.reverse().slice(0, 4);
        res.send(recommend)
    })
});

/***
 * 返回分类列表数据
 * 需要参数 classification 的分类
 */
app.post('/recommlist', (req, res) => {
    let {classification, offset} = req.body;
    read('./data/prdList.json', (data) => {
        let prd = data.filter(item => item.classification == classification);
        // let product = prd.slice(offset, offset + 5);
        res.send(prd ? {code: 0, prd, success: `商品'${classification}'获取成功`} : {code: 1, error: '暂无该商品'});
    });
});

/**
 * 返回所有商品数据
 */
app.get('/prdlist', (req, res) => {
    read('./data/prdList.json', (s) => {
        res.send(s)
    })
});

/**
 * 商品详情页数据
 */
app.post('/prddetail', (req, res) => {
    let {id} = req.body;
    if (id) {
        read('./data/prdList.json', (data) => {
            res.send(data.find(item => item.id == id) ? data.find(item => item.id == id) : '暂无该商品')
        });
    } else {
        res.send(404)
    }
});

/**
 * search
 */
app.post('/search', (req, res) => {
    let {content} = req.body;
    let ary = (new Array(1));
    read('./data/prdList.json', (data) => {
        data.forEach(item => {
            if (item.title.includes(content)) {
                ary.push(item)
            }
        });
        ary.shift();
        res.send(ary)
    });
});

/**
 * Collection 商品收藏
 */
app.post('/collection', (req, res) => {
    let {id, isCollection} = req.body;
    isCollection = !!isCollection;
    let ary = [];
    read('./data/prdList.json', (data) => {
        let prd = data.find(item => item.id.toString() === id);
        read('./data/collection.json', (data) => {
            let collPrd = data.find(item => item.id.toString() === id);
            if (collPrd && isCollection) {
                res.send('收藏商品已存在!')
            } else if (!collPrd && isCollection) {
                data.push(prd);
                write('./data/collection.json', data, () => {
                });
                res.send({code: 0, data, success: '商品收藏写入完成!'});
            } else if (collPrd && !isCollection) {
                data = data.filter(item => item.id.toString() !== id) || [];
                write('./data/collection.json', data, () => {
                });
                res.send({code: 0, data, success: '删除收藏商品成功!'})
            }
            else if (!collPrd && !isCollection) {
                res.send('收藏商品不存在!')
            }
        })
    });

});

app.listen(6066, () => {
    console.log('server success!');
});
