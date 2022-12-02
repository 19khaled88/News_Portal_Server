'use strict';

/**
 * sport router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sport.sport',
{
    prefix:'',
    only:['find','fineOne'],
    except:[],
    config:{
        find:{
            auth:false,
            policies:[],
            middlewares:[],
        },
        findOne:{},
        create:{},
        update:{},
        delete:{},
    }
}
);
