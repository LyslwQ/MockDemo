<template>
    <div>
        <button @click="getUserInfo">getUserInfo</button>
        <button @click="getCarInfo">getCarInfo</button>
    </div>
</template>
<script>
export default {
    methods: {
        getUserInfo() {
            this.$axios.post("/userInfo", {}).then(rsp => {
                let rspData = rsp.data;
                console.log("status: " + JSON.stringify(rspData.status));
                console.log("message: " + JSON.stringify(rspData.message));
                console.log("data: " + JSON.stringify(rspData.data));
            });
        },
        getCarInfo() {
            this.$axios.post("/carInfo", {}).then(rsp => {
                let rspData = rsp.data;
                console.log("status: " + JSON.stringify(rspData.status));
                console.log("message: " + JSON.stringify(rspData.message));
                console.log("data: " + JSON.stringify(rspData.data));
            });
        }
    }
};
</script>