/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule utils
 * @flow
 */

import ApolloClient, { createNetworkInterface } from 'apollo-client';


const networkInterface = createNetworkInterface({ uri: 'https://api.github.com/graphql' });
const token = 'bearer 839151763b95d30b13441c7a7eb3297dd5194efa';
import gql from 'graphql-tag';

//传递token
networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};  // 如果需要, 创建 header 对象.
        }
        req.options.headers['authorization'] = token;
        next();
    }
}]);



//可查询的客户端
export const client = new ApolloClient({
    networkInterface,
});


//相关数据

export const testDataSource=[
    {
        title:'Repositories',
        query: gql`
                query {
                  viewer {
                    login
                    name
                    repositories(first: 10) {
                       nodes {
                            name
                            url
                        }
                    }
                  }
                }
             `,
        errorText:"You don't have any followers yet"
    },
    {
        title:'Starts',
        query: gql`
                query {
                  viewer {
                    login
                    name
                    starredRepositories(first:10){
                      totalCount
                      nodes {
                            name
                            url
                       }
                    }
                  }
                }
             `,
        errorText:"You don't have any followers yet"
    },
    {
        title:'Followers',
        query: gql`
                query {
                  viewer {
                    login
                    name
                    followers(first: 10) {
                       totalCount
                       nodes {
                            name
                            url
                       }
    }
                  }
                }
             `,
        errorText:"You don't have any followers yet"
    },
    {
        title:'Following',
        query: gql`
                query {
                  viewer {
                    login
                    name
                    following(first: 10) {
                       totalCount
                       nodes {
                            name
                            url
                       }
                    }
                  }
                }
             `,
        errorText:"You don't have any followers yet"
    },
]