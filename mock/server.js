let fs = require('fs');
let express = require('express');
let bodyParse = require('body-parser');
let cookieParse = require('cookie-parser');
let session = require('express-session');
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
app.use(cookieParse());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'see91'
}));

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
/*
app.post('/recommlist', (req, res) => {
    let {classification, offset} = req.body;
    read('./data/prdList.json', (data) => {
        let prd = data.filter(item => item.classification == classification);
        // let product = prd.slice(offset, offset + 5);
        res.send(prd ? {code: 0, prd, success: `商品'${classification}'获取成功`} : {code: 1, error: '暂无该商品'});
    });
});
*/

/**
 * 返回所有商品数据
 */
app.get('/prdlist', (req, res) => {
    let {type, offset = 0, limit = 5} = req.query;
    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? 0 : parseInt(limit);
    let newPrd = {};
    read('./data/prdList.json', (data) => {
        newPrd.prdList = data.filter(item => item.classification == type);
        newPrd.hasMore = limit + offset < newPrd.prdList.length;
        newPrd.prdList = newPrd.prdList.slice(offset, offset + limit);
        res.send(newPrd)
    });
});
app.get('/prdlist1', (req, res) => {
    read('./data/prdlist1.json', (data) => {
        res.send(data)
    })
    let {type, offset = 0, limit = 5} = req.query;
    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? 0 : parseInt(limit);
    let newPrd = {};
    read('./data/prdList.json', (data) => {
        newPrd.prdList = data.filter(item => item.classification == type || type == '');
        newPrd.hasMore = limit + offset < newPrd.prdList.length;
        newPrd.prdList = newPrd.prdList.slice(offset, offset + limit);
        res.send(newPrd)
    });
});
app.get('/list1', (req, res) => {
    read('./data/list1.json', (data) => {
        res.send(data)
    })
});
app.get('/list2', (req, res) => {
    read('./data/list2.json', (data) => {
        res.send(data)
    })
});
app.get('/list3', (req, res) => {
    read('./data/list3.json', (data) => {
        res.send(data)
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

/*购物车商品数据
app.post('/shoppingcars', (req, res) => {
  let {id} = req.body;
  if (id) {
      read('./data/prdList.json', (data) => {
          if (data) {
              res.cookie('name', '测试文本');
              res.send(data.find(item => item.id == id) ? data.find(item => item.id == id) : '暂无该商品')
          } else {
              res.send('暂无该商品')
          }
      });
  } else {
      res.send(404)
  }
});
*/

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

//获取用户信息
function getUsersInfo(cb) {
    read('./data/userInfo.json', (userInfo) => {
        cb(userInfo);
    });
}

/**
 * 获取购物车商品   需要用户的用户名
 */
app.post('/shoppingcart', (req, res) => {
    let {userID} = req.body;
    if (!userID) {
        res.send({code: 1, error: '用户未登录!'});
        return
    } else {
        getUsersInfo((userInfo) => {
            userInfo.find(item => {
                if (item.userId == userID) {
                    res.send({code: 0, commodity: item.commodity, success: '购物车数据获取成功!'})
                }
            });
        });
    }
});

/**
 * 加入购物车
 */
app.post('/shopcart', (req, res) => {
    let {userID, commodity} = req.body;
    if (!userID) {
        res.send({code: 0, error: '用户未登录!'});
        return
    }
    console.log(userID);

});


/**
 * 注册
 */
app.post('/signup', function (req, res) {
    let {password, phone} = req.body;
    if (!phone || !password) {
        res.send({code: 1, error: '请填写手机号或密码!'});
        return;
    }
    getUsersInfo(function (userInfo) {
        let flag = userInfo.some(item => item.phone == phone);
        if (flag) {
            res.json({code: 1, error: '该用户已经被注册了'})
        } else {
            let obj = {
                userId: userInfo.length + 1,
                password,
                phone,
                commodity: []
            };
            userInfo.push(obj);

            write('./data/userInfo.json', userInfo, function () {
                res.json({code: 0, success: '注册成功'})
            })
        }
    })
});


/**
 * 登录
 */
app.post('/login', function (req, res) {
    let {phone, password} = req.body;
    if (!phone || !password) {
        res.json({code: 1, error: '请填写手机号或密码!'});
        return
    }
    getUsersInfo(function (data) {
        let userInfo = data.find(item => (item.phone == phone && item.password == password
        ));
        if (userInfo) {
            req.session.login = true;
            res.send({code: 0, success: '登录成功', userId: userInfo.userId})
        } else {
            res.send({code: 1, error: '登录失败，用户名或密码错误'})
        }
    })
});

/**
 * 虎子
 */
app.get('/prdlist1', (req, res) => {
    read('./data/prdlist1.json', (data) => {
        res.send(data)
    })
});

app.get('/list1', (req, res) => {
    read('./data/list1.json', (data) => {
        res.send(data)
    })
});

app.get('/list2', (req, res) => {
    read('./data/list2.json', (data) => {
        res.send(data)
    })
});

app.get('/list3', (req, res) => {
    read('./data/list3.json', (data) => {
        res.send(data)
    })
});

/**
 * 获取用户信息
 */
app.get('/user/:id', function (req, res) {
    if (!req.session.login) {
        res.send({code: 0, login: false, error: '用户未登录'});
        return
    }
    let userId = req.params.id;
});


/**
 *获取 男子 女子 儿童 推荐数据
 */

app.get('/brand/:type', (req, res) => {
    let type = req.params.type;
    switch (type) {
        case 'man':
            read('./Brand/man.json', (data) => {
                res.send({code: 0, data, success: `数据${type}获取成功!`});
            });
            break;
        case 'woman':
            read('./Brand/woman.json', (data) => {
                res.send({code: 0, data, success: `数据${type}获取成功!`});
            });
            break;
        case 'children':
            read('./Brand/children.json', (data) => {
                res.send({code: 0, data, success: `数据${type}获取成功!`});
            });
            break;
        default :
            return {code: 1, error: '未发现该数据!'}
    }
});


app.listen(6066, () => {
    console.log('server success!');
});


/*

 //获取用户信息
 app.get('/user/:id', function (req, res) {
 if (!req.session.login) {
 res.json({code: 0, login: false, error: '用户未登录'});
 return
 }
 let userId = req.params.id;
 getUsersInfo(function (data) {
 let userInfo = data.find(item => item.userId == userId);
 if (userInfo) {
 res.json({code: 0, login: true, userInfo})
 } else {
 res.json({code: 1, login: true, error: '未找到该用户信息，请检查用户id是否正确'})
 }
 })
 });

 //退出登录
 app.get('/logout', function (req, res) {
 req.session.login = null;
 res.json({code: 0, success: '已退出'})
 });
 //登录，设置一个session：login(true/false)
 app.post('/login', function (req, res) {
 let {userName, password} = req.body;
 if (!userName || !password) {
 res.json({code: 1, error: '请按API文档规定请求'})
 }
 getUsersInfo(function (data) {
 let userInfo = data.find(item => (item.userName == userName && item.password == password
 ));
 if (userInfo) {
 req.session.login = true;
 res.json({code: 0, success: '登录成功', userId: userInfo.userId})
 } else {
 res.json({code: 1, error: '登录失败，用户名或密码错误'})
 }
 })
 });*/



/*

//获取用户信息
app.get('/user/:id', function (req, res) {
    if (!req.session.login) {
        res.json({code: 0, login: false, error: '用户未登录'});
        return
    }
    let userId = req.params.id;
    getUsersInfo(function (data) {
        let userInfo = data.find(item => item.userId == userId);
        if (userInfo) {
            res.json({code: 0, login: true, userInfo})
        } else {
            res.json({code: 1, login: true, error: '未找到该用户信息，请检查用户id是否正确'})
        }
    })
});

//退出登录
app.get('/logout', function (req, res) {
    req.session.login = null;
    res.json({code: 0, success: '已退出'})
});
//登录，设置一个session：login(true/false)
app.post('/login', function (req, res) {
    let {userName, password} = req.body;
    if (!userName || !password) {
        res.json({code: 1, error: '请按API文档规定请求'})
    }
    getUsersInfo(function (data) {
        let userInfo = data.find(item => (item.userName == userName && item.password == password
        ));
        if (userInfo) {
            req.session.login = true;
            res.json({code: 0, success: '登录成功', userId: userInfo.userId})
        } else {
            res.json({code: 1, error: '登录失败，用户名或密码错误'})
        }
    })
});*/

