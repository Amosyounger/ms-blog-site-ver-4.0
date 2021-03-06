'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const _router = new Router();

//  前端将使用 react ，网站采用 SPA 模式，固定模板页面
async function page(ctx) {
    const filePath = path.resolve(__dirname, '../template/index.html');
    const data = fs.readFileSync(filePath).toString();

    ctx.body = data;
}

_router.get('/', page);

module.exports = _router;
