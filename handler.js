'use strict'


module.exports.getBooks = async (event) => {
    try {
        const books = {
            title: 'DC Book',
            author: 'Danilo Cecilia',
            genre: 'Fiction'
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: 'Success',
                data: books
            })
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: error,
                data: null
            })
        }
    }
}