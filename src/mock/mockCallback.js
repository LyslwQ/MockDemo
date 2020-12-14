let userInfo = {
    id: 1,
    name: '李建',
    age: '23',
    job: '前端工程师'
}

export default {
    'post|/userInfo': option => {
        console.log(JSON.stringify(option));
        return {
            status: 200,
            message: 'success',
            data: userInfo
        };
    }
}