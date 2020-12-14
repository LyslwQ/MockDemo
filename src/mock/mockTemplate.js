let carInfo = {
    status: 200,
    message: 'success',
    data: {
        id: 1,
        name: '特斯拉',
        price: '230000',
        color: 'red'
    }
};

export default{
    'post|/carInfo':carInfo
}